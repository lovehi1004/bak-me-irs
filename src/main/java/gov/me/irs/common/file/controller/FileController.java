package gov.me.irs.common.file.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.service.FileService;
import gov.me.irs.common.file.vo.FileDownloadVo;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.FileUtil;
import gov.me.irs.common.util.MultipartUtil;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * FileController
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class FileController {
	
	private final MultipartUtil multipartUtil;
	
	private final FileUtil fileUtil;
	
	private final FileService fileService;
	
	private static final String URL_FILE_UPLOAD   = "/common/file/{uploadType}/upload.irs";					//SINGLE/MULTI 업로드
	private static final String URL_FILE_DOWNLOAD = "/common/file/{uploadType}/download.irs";				//SINGLE/MULTI 파일 다운로드 - MULTI는 압축파일
	private static final String URL_FILE_CHECK_DOWNLOAD = "/common/file/{uploadType}/check.irs";			//SINGLE/MULTI 파일 다운로드 체크 - MULTI는 압축파일
	
	/* single upload url list */
	private static final String URL_FILE_SINGLE_DELETE   = "/common/file/single/delete.irs";					//SINGLE 업로드 파일 삭제, MULTI 파일은 최종저장처리 시점에 상태을 반영한다.
	private static final String URL_FILE_SINGLE_DETAIL   = "/common/file/single/detail.irs";					//SINGLE 파일정보 불러오기
	private static final String URL_FILE_SINGLE_BASE64  = "/common/file/single/selectBase64Image.irs";		//SINGLE 이미지파일 Base64 Data 불러오기 - 성능에 영향을 줄 수 있으므로 SINGLE기능만, MULTI기능은 제외
	
	/* multi upload url list */
	private static final String URL_FILE_MULTI_LIST      = "/common/file/multi/list.irs";					//MULTI 파일목록 불러오기
	
	
	private static final String DEFAULT_ARCHIVE_FILE_NAME = "archive";			/* MULTI 다운로드 - Default 압축파일명 */
	private static final String DEFAULT_ARCHIVE_FILE_EXT = ".zip";				/* MULTI 다운로드 - Default 압축파일확장자명 */
	
	/**
	 * SINGLE/MULTI 업로드
	 * 
	 * @param request - 파라미터 : {outputDsName, fileGroupMgno, menuMgno}
	 * @param response
	 * @param uploadType - 업로드 종류 [single|multi] - default : single
	 * 				▶ URL필수값 : [single | multi]
	 * @param outputDsName - 업로드 결과가 담김 넥사크로용 데이터셋
	 * 				▶ 화면필수값, 없으면 DEFAULT_OUTPUT_UPLOAD_DATASET로 설정됨
	 * 				▶ dataset structure : {fileGroupMgno, fileMgno, orgnlFileNm, fileNm, fileSz, fileExtnNm}
	 * @param fileGroupMgno - 파일그룹일련번호
	 * 				▶ 최초업로드시 0 또는 null로 넘어와야됨
	 * 				▶ 파일그룹일련번호가 존재하면 필수값임
	 * @param menuMgno - 메뉴ID
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_UPLOAD)
	public NexacroResult upload(HttpServletRequest request, HttpServletResponse response
			, @PathVariable("uploadType") String uploadType
			) throws Exception {
		
		log.debug("-------------------- 업로드 Controller 호출! ---------------------------");
		log.debug("[uploadType][{}]", uploadType);
		
		try {
			//MultipartHttpServletRequest 체크
			if(!(request instanceof MultipartHttpServletRequest)) {
				
				log.debug("Request is not a MultipartHttpServletRequest");
				
				NexacroResult nexacroResult = new NexacroResult();
				nexacroResult.setErrorCode(-1);
				nexacroResult.setErrorMsg("File Save Failure!");
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.BAD_REQUEST, JwtAuthEnum.BAD_UPLOAD_REQUEST));
				return nexacroResult;
			}
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. MultipartHttpServletRequest CASTING ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 업로드파일 임시저장 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			DataSet outputDs = multipartUtil.upload(multipartRequest, "dsSendFileDetail", "dsFileDetail", uploadType);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 업로드 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			NexacroResult nexacroResult = new NexacroResult();
			nexacroResult.addDataSet(outputDs);
			nexacroResult.setErrorCode(0);
			nexacroResult.setErrorMsg("File Save Success!");
			return nexacroResult;
			
		} catch(Throwable e) {
			NexacroResult nexacroResult = new NexacroResult();
			nexacroResult.setErrorCode(-1);
			nexacroResult.setErrorMsg("File Save Failure!");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.UNKNOWN_ERROR));
			return nexacroResult;
		}
		
	}
	
	/**
	 * SINGLE 업로드 파일 삭제
	 * 
	 * @param request
	 * @param response
	 * @param requestMap
	 * 				▶ dataset structure : {fileGroupMgno, fileMgno}
	 * @param outputDsName
	 * 				▶ dataset structure : {fileGroupMgno, fileMgno, result}
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_SINGLE_DELETE)
	public NexacroResult singleDelete(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "dsSendFileDetail") Map<String, Object> requestMap
			) throws Exception {
		
		log.debug("-------------------- SINGLE 업로드 파일 삭제 Controller 호출! ---------------------------");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
			sessionUserId = tableUser.getUserId();
		}
		
		String fileGroupMgno = (String) requestMap.get("fileGroupMgno");
		String fileMgno = (String) requestMap.get("fileMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgno(fileMgno);
		vo.setMdfrId(sessionUserId);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 삭제 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		boolean result = fileService.deleteFile(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 삭제 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		DataSet outputDs = new DataSet("dsFileDetail");
		outputDs.addColumn("fileGroupMgno", PlatformDataType.STRING);
		outputDs.addColumn("fileMgno", PlatformDataType.STRING);
		outputDs.addColumn("result", PlatformDataType.BOOLEAN);
		
		int row = outputDs.newRow();
		outputDs.set(row, "fileGroupMgno", fileGroupMgno);
		outputDs.set(row, "fileMgno", fileMgno);
		outputDs.set(row, "result", result);
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(outputDs);
		return nexacroResult;
	}
	
	/**
	 * SINGLE 파일정보 불러오기
	 * 
	 * @param request
	 * @param response
	 * @param requestMap
	 * 				▶ dataset structure : {fileGroupMgno}
	 * @param outputDsName
	 * 				▶ dataset structure : [
	 * 											{fileGroupMgno
	 * 											, fileMgno
	 * 											, orgnlFileNm
	 * 											, filePath
	 * 											, fileNm
	 * 											, fileSz
	 * 											, fileExtnNm
	 * 											, dwnldCnt
	 * 											, delYn
	 * 											, rgtrId
	 * 											, regDt
	 * 											, mdfrId
	 * 											, mdfcnDt
	 * 											}
	 * 										]
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_SINGLE_DETAIL)
	public NexacroResult singleDetail(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "dsSendFileDetail") Map<String, Object> requestMap
			) throws Exception {
		
		log.debug("-------------------- SINGLE 파일정보 불러오기 Controller 호출! ---------------------------");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = (String) requestMap.get("fileGroupMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileTypeClCd(Const.UPLOAD.SINGLE);
		vo.setDelYn(Const.DEL.N);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		FileVo fileVo = fileService.selectFileDtl(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 조회 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet("dsFileDetail", fileVo);
		return nexacroResult;
	}
	
	/**
	 * MULTI 파일목록 불러오기
	 * 
	 * @param request
	 * @param response
	 * @param requestMap
	 * 				▶ dataset structure : {fileGroupMgno}
	 * @param outputDsName
	 * 				▶ dataset structure : [
	 * 											{fileGroupMgno
	 * 											, fileMgno
	 * 											, orgnlFileNm
	 * 											, filePath
	 * 											, fileNm
	 * 											, fileSz
	 * 											, fileExtnNm
	 * 											, dwnldCnt
	 * 											, delYn
	 * 											, rgtrId
	 * 											, regDt
	 * 											, mdfrId
	 * 											, mdfcnDt
	 * 											}
	 * 										]
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_MULTI_LIST)
	public NexacroResult multiList(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "dsSendFileDetail") Map<String, Object> requestMap
			) throws Exception {
		
		log.debug("-------------------- MULTI 파일목록 불러오기 Controller 호출! ---------------------------");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = (String) requestMap.get("fileGroupMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileTypeClCd(Const.UPLOAD.MULTI);
		vo.setDelYn(Const.DEL.N);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일목록 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		List<FileVo> list = fileService.selectFileList(vo);
		
		DataSet outputDs = new DataSet("dsFileDetail");
		outputDs.addColumn("fileGroupMgno", PlatformDataType.STRING);
		outputDs.addColumn("fileMgno", PlatformDataType.STRING);
		outputDs.addColumn("orgnlFileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileSz", PlatformDataType.INT);
		outputDs.addColumn("fileExtnNm", PlatformDataType.STRING);
		outputDs.addColumn("regDt", PlatformDataType.STRING);
		outputDs.addColumn("delYn", PlatformDataType.STRING);
		outputDs.addColumn("gridCmmCheck", PlatformDataType.STRING);
		
		for (FileVo fileVo : list) {
			int row = outputDs.newRow();
			outputDs.set(row, "fileGroupMgno", fileVo.getFileGroupMgno());
			outputDs.set(row, "fileMgno", fileVo.getFileMgno());
			outputDs.set(row, "orgnlFileNm", fileVo.getOrgnlFileNm());
			outputDs.set(row, "fileNm", fileVo.getFileNm());
			outputDs.set(row, "fileSz", fileVo.getFileSz());
			outputDs.set(row, "fileExtnNm", fileVo.getFileExtnNm());
			outputDs.set(row, "regDt", fileVo.getRegDt());
			outputDs.set(row, "delYn", fileVo.getDelYn());
			outputDs.set(row, "gridCmmCheck", "N");
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 조회 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(outputDs);
		return nexacroResult;
	}
	
	/**
	 * SINGLE/MULTI 파일 다운로드 - MULTI는 압축파일
	 * 
	 * @param request
	 * @param response
	 * @param uploadType - 업로드 종류 [single|multi] - default : single
	 * 				▶ URL필수값 : [single | multi]
	 * @param inputDsName - 파일 다운로드 DataSet 정보
	 * @param downloadArchiveFileNm - MULTI 다운로드 - Default 압축파일명
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_DOWNLOAD)
	public NexacroFileResult download(HttpServletRequest request, HttpServletResponse response
			, @PathVariable("uploadType") String uploadType
			, @RequestParam(required=true, value="downloadArchiveFileNm", defaultValue=DEFAULT_ARCHIVE_FILE_NAME ) String downloadArchiveFileNm
			) throws Exception {
		
		log.debug("-------------------- SINGLE/MULTI 파일 다운로드 Controller 호출! ---------------------------");
		
		File file = null;
		FileDownloadVo fileDownloadVo = null;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파일정보 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		if(FileUtil.MULTI.equals(uploadType)) {
			
			log.debug("MULTI 실행! ---------------------------");
			
			downloadArchiveFileNm = downloadArchiveFileNm + "_" + DateUtil.getDate("yyyyMMddHHmmss") + DEFAULT_ARCHIVE_FILE_EXT;
			
			fileDownloadVo = multipartUtil.getMultiFileDownloadVo(request, "dsSendFileDetail", downloadArchiveFileNm);
			file = fileDownloadVo.getArchiveFile();
			
			/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
			if(file != null) {
				log.debug("[MULTI][Physical File is Found!]");
			}else {
				log.debug("[MULTI][Physical File is Not Found!]");
			}
			
		} else {
			
			log.debug("SINGLE 실행! ---------------------------");
			
			fileDownloadVo = multipartUtil.getSingleFileDownloadVo(request, "dsSendFileDetail");
			/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
			if(fileDownloadVo.isAvailable()) {
				log.debug("[SINGLE][Physical File is Found!]");
				file = new File(fileDownloadVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
			}else {
				log.debug("[SINGLE][Physical File is Not Found!]");
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(fileDownloadVo.getDownloadFileNm());
		nexacroFileResult.setContentType(fileDownloadVo.getContentType());
		return nexacroFileResult;
	}
	
	/**
	 * SINGLE/MULTI 파일 다운로드 체크 - MULTI는 압축파일
	 * 
	 * @param request
	 * @param response
	 * @param uploadType - 업로드 종류 [single|multi] - default : single
	 * 				▶ URL필수값 : [single | multi]
	 * @param inputDsName - 파일 다운로드 DataSet 정보
	 * @param downloadArchiveFileNm - MULTI 다운로드 - Default 압축파일명
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_CHECK_DOWNLOAD)
	public NexacroResult checkDownload(HttpServletRequest request, HttpServletResponse response
			, @PathVariable("uploadType") String uploadType
			, @ParamDataSet(name = "dsSendFileDetail") List<Map<String, Object>> dsSendFileDetail
			) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("-------------------- SINGLE/MULTI 파일 다운로드 Controller 호출! ---------------------------");
		
		boolean result = false;
		
		try {
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파일정보 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			if(FileUtil.MULTI.equals(uploadType)) {
				log.debug("MULTI 파일 다운로드 체크 실행! ---------------------------");
				result = multipartUtil.checkMultiFileDownloadVo(request, dsSendFileDetail);
				
			} else {
				log.debug("SINGLE 파일 다운로드 체크 실행! ---------------------------");
				result = multipartUtil.checkSingleFileDownloadVo(request, dsSendFileDetail);
			}
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 가능 여부 결과 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			if(!result) {
				/* 파일다운로드 대상 파일이 존재하지 않습니다. */
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_NOT_FOUND, "FILE NOT FOUND"));
			}
			
		} catch (Exception e) {
			/* 파일다운로드 처리중 오류가 발생하였습니다. */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_UNKNOWN_ERROR, e));
		}
		
		return nexacroResult;

	}
	
	/**
	 * SINGLE 이미지파일 Base64 Data 불러오기
	 * 
	 * @param request
	 * @param response
	 * @param requestMap
	 * 				▶ dataset structure : {fileGroupMgno, fileMgno}
	 * @param outputDsName
	 * 				▶ dataset structure : [
	 * 											{fileGroupMgno
	 * 											, fileMgno
	 * 											, orgnlFileNm
	 * 											, filePath
	 * 											, fileNm
	 * 											, fileSz
	 * 											, fileExtnNm
	 * 											, dwnldCnt
	 * 											, delYn
	 * 											, rgtrId
	 * 											, regDt
	 * 											, mdfrId
	 * 											, mdfcnDt
	 * 											, base64 *
	 * 											}
	 * 										]
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = URL_FILE_SINGLE_BASE64)
	public NexacroResult selectBase64Image(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "dsSendFileDetail") Map<String, Object> requestMap
			) throws Exception {
		
		log.debug("-------------------- SINGLE 이미지파일 Base64 Data 불러오기 Controller 호출! ---------------------------");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = (String) requestMap.get("fileGroupMgno");
		String fileMgno = (String) requestMap.get("fileMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgno(fileMgno);
		vo.setFileTypeClCd(Const.UPLOAD.SINGLE);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. base64 생성 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		FileVo fileVo = fileService.selectFileDtl(vo);
		fileVo.setBase64(fileUtil.getBase64(fileVo));
		
		List<FileVo> list = new ArrayList<FileVo>();
		list.add(fileVo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 조회 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet("dsFileDetail", list);
		return nexacroResult;
	}
	
}