package gov.me.irs.common.util;


import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.util.CharsetUtil;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.service.FileService;
import gov.me.irs.common.file.vo.FileDownloadVo;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * MultipartUtil Class
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Component
@Slf4j
public class MultipartUtil {
	
	private final FileService fileService;
	
	private final FileUtil fileUtil;
	
	/**
	 * 업로드 처리기
	 * 
	 * @param multipartRequest - 업로드용 MultipartRequest (필수)
	 * @param outputDsName - 업로드 결과 데이터셋 (필수)
	 * @param fileGroupMgno - 파일그룹일련번호 (필수)
	 * @param fileTypeClCd - 파일유형구분코드 (필수)
	 * @param menuMgno - 메뉴ID (옵션)
	 * @return
	 * @throws Exception
	 */
	public DataSet upload(MultipartHttpServletRequest multipartRequest
			, String inputDsName
			, String outputDsName
			, String uploadType) throws Exception {
		
		String fileTypeClCd = Const.UPLOAD.SINGLE;		//Default : single upload
		
		if(FileUtil.MULTI.equals(uploadType)) {
			fileTypeClCd = Const.UPLOAD.MULTI;
		}
		
		log.debug("[업로드 하기][{}]", Const.UPLOAD.SINGLE.equals(fileTypeClCd) ? "SINGLE" : "MULTI");
		
		String fileGroupMgno = StringUtils.EMPTY;
		String menuMgno = StringUtils.EMPTY;
		
		//파일정보를 담고있는 XML문자열(Dataset 의 saveXML())
		String fileInfoXml = multipartRequest.getParameter(inputDsName);
		
		DataSet dsFileInfo = null;
		
		log.debug("■■■■■■■■■■■ ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆");
		
		//파일정보 Dataset saveXML 문자열
		if(fileInfoXml != null) {
			
			log.debug("■■■■■■■■■■■ [fileInfoXml][{}]", fileInfoXml);
			
			dsFileInfo = new DataSet(inputDsName);
			fileInfoXml = fileInfoXml.replaceAll("&lt;", "<").replaceAll("&quot;", "\"").replaceAll("&gt;", ">");
			
			dsFileInfo.loadXml(fileInfoXml);
			
			fileGroupMgno = dsFileInfo.getString(0, "fileGroupMgno");
			menuMgno = dsFileInfo.getString(0, "menuMgno");
			
			log.debug("■■■■■■■■■■■ [fileGroupMgno][{}]", fileGroupMgno);
			log.debug("■■■■■■■■■■■ [menuMgno][{}]", menuMgno);
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
			sessionUserId = tableUser.getUserId();
		}
		
		/* 2. 파일업로드 응답전용 데이터셋 생성하기 */
		DataSet outputDs = new DataSet(outputDsName);
		outputDs.addColumn("fileGroupMgno", PlatformDataType.STRING);
		outputDs.addColumn("fileMgno", PlatformDataType.STRING);
		outputDs.addColumn("orgnlFileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileSz", PlatformDataType.INT);
		outputDs.addColumn("fileExtnNm", PlatformDataType.STRING);
		outputDs.addColumn("regDt", PlatformDataType.STRING);
		outputDs.addColumn("delYn", PlatformDataType.STRING);
		
		
		log.debug("[outputDs]["+outputDsName+"]");
		log.debug("[fileGroupMgno]["+fileGroupMgno+"]");
		log.debug("[fileTypeClCd]["+fileTypeClCd+"]");
		log.debug("[sessionUserId]["+sessionUserId+"]");
		
		/* 3. 여기부터 업로드 하기 */
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		
		Set<String> keySet = fileMap.keySet();
		for(String name: keySet) {
			log.debug("[업로드파일 name][{}]", name);
			
			MultipartFile multipartFile = fileMap.get(name);
			
			FileVo fileVo = null;
			
			/* 넥사크로 예제 구간 START */
			String originalFilename = multipartFile.getOriginalFilename();
			log.debug("[파일명][{}]",originalFilename);
			
			// IE에서 파일업로드 시 DataSet 파라매터의 Content-Type이 설정되지 않아 여기로 옴. 무시.
			if(originalFilename == null || originalFilename.length() == 0) {
				continue;
			}
			/* 넥사크로 예제 구간 END */
			
			FileVo vo = fileUtil.getFileVo(multipartFile);
			vo.setFileGroupMgno(fileGroupMgno);																	//화면에서 넘어온 파일그룹 KEY
			vo.setFileTypeClCd(fileTypeClCd);
			vo.setMenuMgno(menuMgno);
			vo.setRgtrId(sessionUserId);
			vo.setMdfrId(sessionUserId);
			
			File uploadFile = new File(vo.getFileFullPath());
			
			try {
				InputStream fileStream = multipartFile.getInputStream();
				FileUtils.copyInputStreamToFile(fileStream, uploadFile);
				
				/* 파일 업로드정보 생성하기 */
				fileVo = fileService.saveFile(vo);
				
				/* 생성된 파일그룹 KEY 받아서 세팅하기 - 신규등록시 채번되는 값 */
				fileGroupMgno = fileVo.getFileGroupMgno();
				
			} catch (IOException e) {
				
				fileVo = vo;
				fileVo.setError(true);				/* 업로드 실패 상태값 저장 - 기본값 false(성공) */
				
				FileUtils.deleteQuietly(uploadFile);
				
				log.error("파일업로드 실패", e);
				throw e;
				
			} finally {
				
				int row = outputDs.newRow();
				outputDs.set(row, "fileGroupMgno", fileVo.getFileGroupMgno());
				outputDs.set(row, "fileMgno", fileVo.getFileMgno());
				outputDs.set(row, "orgnlFileNm", fileVo.getOrgnlFileNm());
				outputDs.set(row, "fileNm", fileVo.getFileNm());
				outputDs.set(row, "fileSz", fileVo.getFileSz());
				outputDs.set(row, "fileExtnNm", fileVo.getFileExtnNm());
				outputDs.set(row, "regDt", fileVo.getRegDt());
				outputDs.set(row, "delYn", fileVo.getDelYn());
				
			}
			
			/* ■■■■■■■■■■ single upload 는 1회만 처리하고 break; ■■■■■■■■■■ */
			if(Const.UPLOAD.SINGLE.equals(fileTypeClCd)) {
				break;
			}
			
		}
		
		return outputDs;
		
	}
	
	/**
	 * MULTI 파일 다운로드
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	public FileDownloadVo getMultiFileDownloadVo(HttpServletRequest request, String inputDsName, String downloadArchiveFileNm) throws Exception {
		/* 넥사크로 예제 구간 START */
		//파일정보를 담고있는 XML문자열(Dataset 의 saveXML())
		String fileInfoXml = request.getParameter(inputDsName);
		
		DataSet dsFileInfo = null;
		
		//파일정보 Dataset saveXML 문자열
		if(fileInfoXml != null) {
			
			log.debug("■■■■■■■■■■■ [fileInfoXml][{}]", fileInfoXml);
			
			dsFileInfo = new DataSet(inputDsName);
			fileInfoXml = fileInfoXml.replaceAll("&lt;", "<").replaceAll("&quot;", "\"").replaceAll("&gt;", ">");
			
			dsFileInfo.loadXml(fileInfoXml);
		}
		
		String characterEncoding = request.getCharacterEncoding();
		
		if(characterEncoding == null) {
			characterEncoding = PlatformType.DEFAULT_CHAR_SET;
		}
		
		//문자셋 타입
		String charsetOfRequest = CharsetUtil.getCharsetOfRequest(request, characterEncoding);
		log.debug("[charsetOfRequest][{}]", charsetOfRequest);
		/* 넥사크로 예제 구간 END */
		
		FileVo vo = new FileVo();
		String fileGroupMgno = StringUtils.EMPTY;
		List<String> fileMgnoArray = new ArrayList<String>();
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for(int idx = 0; idx < dsFileInfo.getRowCount(); idx++ ) {
			fileGroupMgno = dsFileInfo.getString(idx, "fileGroupMgno");
			String fileMgno = dsFileInfo.getString(idx, "fileMgno");
			fileMgnoArray.add(fileMgno);
		}
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgnoArray(fileMgnoArray);
		vo.setFileTypeClCd(Const.UPLOAD.MULTI);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		List<FileVo> list = fileService.selectFileList(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		List<FileDownloadVo> fileDownloadVoList = new ArrayList<FileDownloadVo>();
		
		for (FileVo fileVo : list) {
			File file = new File(fileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
			
			/* 원본파일명 */
			String orgnlFileNm = fileVo.getOrgnlFileNmWithExt();
			
			/* 다운로드 파일명 */
			String downloadFileNm = URLDecoder.decode(orgnlFileNm, charsetOfRequest);
			
			
			/* 다운로드 파일 Content Type */
			Path path = file.toPath();
			String mimeType = Files.probeContentType(path);
			
			/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
			FileDownloadVo fileDownloadVo = null;
			if(file.exists()) {
				log.debug("Physical File is Found!");
				fileDownloadVo = FileDownloadVo.builder()
						.contentType(mimeType)
						.fileFullPath(fileVo.getFileFullPath())
						.orgnlFileNm(orgnlFileNm)
						.downloadFileNm(downloadFileNm)
						.isAvailable(true)					//다운로드 가능여부
						.build();
				
				fileDownloadVoList.add(fileDownloadVo);
				
				/* 다운로드수 UPDATE 처리 */
				fileService.updateDwldCount(fileVo);
				
				log.debug("[MULTI][CHECK][FILE 다운로드 가능][{}]" , orgnlFileNm);
			}else {
				log.debug("[MULTI][CHECK][FILE 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
			}
			
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 파일압축 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		File compressedFile = null;
		FileDownloadVo resultFileDownloadVo = new FileDownloadVo();
		String contentType = null;
		
		/* 압축대상 파일이 존재하면 */
		if(fileDownloadVoList.size() > Const.NUMERIC.EMPTY_LIST) {
			
			/* 압축결과물 - 임시파일 생성하기 */
			FileVo tempVo = new FileVo();
			tempVo.setFilePath(fileUtil.getTempFilePendingDeleteWeeklyPathNm());
			tempVo.setFileNm(fileUtil.getTempFilename());
			
			compressedFile = new File(tempVo.getFileFullPath());
			
			File directory = new File(tempVo.getFilePath());
			if(!directory.exists()) {
				directory.mkdirs();
			}
			
			//buffer size
			int size = 1024;
			byte[] buf = new byte[size];
			
			FileInputStream fis = null;
			ZipArchiveOutputStream zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(compressedFile))); 
			BufferedInputStream bis = null;
			
			try {
				for (FileDownloadVo fileDownloadVo : fileDownloadVoList) {
					zos.setEncoding(charsetOfRequest);
					File file = new File(fileDownloadVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
					
					fis = new FileInputStream(file);
					bis = new BufferedInputStream(fis,size);
					
					zos.putArchiveEntry(new ZipArchiveEntry(file, fileDownloadVo.getOrgnlFileNm()));
					
					//준비된 버퍼에서 집출력스트림으로 write 한다.
					int len;
					while((len = bis.read(buf, 0, size)) != -1){
						zos.write(buf,0,len);
					}
					
					bis.close();
					fis.close();
					zos.closeArchiveEntry();
					
				}
				
				zos.close();
				
			} catch(Exception e) {
				
				log.error("[MULTI 파일 다운로드 실패][{}]", e);
				
			}finally{
				if( zos != null ){  zos.close();  }
				if( fis != null ){  fis.close();  }
				if( bis != null ){  bis.close();  }
			}
			
		}
		
		resultFileDownloadVo.setContentType(contentType);
		resultFileDownloadVo.setDownloadFileNm(downloadArchiveFileNm);
		resultFileDownloadVo.setArchiveFile(compressedFile);
		return resultFileDownloadVo;
	}
	
	/**
	 * SINGLE 파일 다운로드
	 * 	- MULTI 파일다운로드내에서 개별파일 다운로드시에도 사용됨
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	public FileDownloadVo getSingleFileDownloadVo(HttpServletRequest request, String inputDsName) throws Exception {
		
		/* 넥사크로 예제 구간 START */
		//파일정보를 담고있는 XML문자열(Dataset 의 saveXML())
		String fileInfoXml = request.getParameter(inputDsName);
		
		DataSet dsFileInfo = null;
		
		//파일정보 Dataset saveXML 문자열
		if(fileInfoXml != null) {
			
			log.debug("■■■■■■■■■■■ [fileInfoXml][{}]", fileInfoXml);
			
			dsFileInfo = new DataSet(inputDsName);
			fileInfoXml = fileInfoXml.replaceAll("&lt;", "<").replaceAll("&quot;", "\"").replaceAll("&gt;", ">");
			
			dsFileInfo.loadXml(fileInfoXml);
		}
		
		String characterEncoding = request.getCharacterEncoding();
		
		if(characterEncoding == null) {
			characterEncoding = PlatformType.DEFAULT_CHAR_SET;
		}
		
		//문자셋 타입
		String charsetOfRequest = CharsetUtil.getCharsetOfRequest(request, characterEncoding);
		log.debug("[charsetOfRequest][{}]", charsetOfRequest);
		/* 넥사크로 예제 구간 END */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = dsFileInfo.getString(0, "fileGroupMgno");
		String fileMgno = dsFileInfo.getString(0, "fileMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgno(fileMgno);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		FileVo fileVo = fileService.selectFileDtl(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		File file = new File(fileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
		
		/* 원본파일명 */
		String orgnlFileNm = fileVo.getOrgnlFileNmWithExt();
		
		/* 다운로드 파일명 */
		String downloadFileNm = URLDecoder.decode(orgnlFileNm, charsetOfRequest);
		
		/* 다운로드 파일 Content Type */
		Path path = file.toPath();
		String mimeType = Files.probeContentType(path);
		
		/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
		FileDownloadVo fileDownloadVo = null;
		if(file.exists()) {
			log.debug("Physical File is Found!");
			fileDownloadVo = FileDownloadVo.builder()
					.contentType(mimeType)
					.fileFullPath(fileVo.getFileFullPath())
					.orgnlFileNm(orgnlFileNm)
					.downloadFileNm(downloadFileNm)
					.isAvailable(true)					//다운로드 가능여부
					.build();
			
			/* 다운로드수 UPDATE 처리 */
			fileService.updateDwldCount(fileVo);
			
			log.debug("[SINGLE][CHECK][FILE 다운로드 가능][{}]" , orgnlFileNm);
		}else {
			fileDownloadVo = FileDownloadVo.builder()
					.contentType(mimeType)
					.fileFullPath(fileVo.getFileFullPath())
					.orgnlFileNm(orgnlFileNm)
					.downloadFileNm(downloadFileNm)
					.isAvailable(false)					//다운로드 가능여부
					.build();
			
			log.debug("[SINGLE][CHECK][FILE 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
		}
		
		return fileDownloadVo;
	}
	
	/**
	 * MULTI 파일 다운로드 체크
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	public boolean checkMultiFileDownloadVo(HttpServletRequest request, List<Map<String, Object>> dsFileInfo) throws Exception {
		
		boolean result = true;
		if(dsFileInfo.size() == Const.NUMERIC.ZERO) {		//선택된 파일이 존재하지 않은 경우
			return false;
		}
		
		FileVo vo = new FileVo();
		String fileGroupMgno = StringUtils.EMPTY;
		List<String> fileMgnoArray = new ArrayList<String>();
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (Map<String, Object> fileInfo : dsFileInfo) {
			fileGroupMgno = (String) fileInfo.get("fileGroupMgno");
			String fileMgno = (String) fileInfo.get("fileMgno");
			fileMgnoArray.add(fileMgno);
		}
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgnoArray(fileMgnoArray);
		vo.setFileTypeClCd(Const.UPLOAD.MULTI);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		List<FileVo> list = fileService.selectFileList(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (FileVo fileVo : list) {
			File file = new File(fileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
			
			/* 원본파일명 */
			String orgnlFileNm = fileVo.getOrgnlFileNmWithExt();
			
			/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
			if(file.exists()) {
				log.debug("Physical File is Found!");
				log.debug("[MULTI][CHECK][FILE 다운로드 가능][{}]" , orgnlFileNm);
			}else {
				result = false;
				log.debug("[MULTI][CHECK][FILE 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
				break;
			}
			
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 다운로드 가능여부 결과 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		return result;
	}
	
	/**
	 * SINGLE 파일 다운로드 체크
	 * 	- MULTI 파일다운로드내에서 개별파일 다운로드시에도 사용됨
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	public boolean checkSingleFileDownloadVo(HttpServletRequest request, List<Map<String, Object>> dsFileInfo) throws Exception {
		
		boolean result = true;
		if(dsFileInfo.size() == Const.NUMERIC.ZERO) {		//선택된 파일이 존재하지 않은 경우
			return false;
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = (String) dsFileInfo.get(0).get("fileGroupMgno");
		String fileMgno = (String) dsFileInfo.get(0).get("fileMgno");
		
		FileVo vo = new FileVo();
		vo.setFileGroupMgno(fileGroupMgno);
		vo.setFileMgno(fileMgno);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		FileVo fileVo = fileService.selectFileDtl(vo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		File file = new File(fileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
		
		/* 원본파일명 */
		String orgnlFileNm = fileVo.getOrgnlFileNmWithExt();
		
		/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
		if(file.exists()) {
			log.debug("Physical File is Found!");
			log.debug("[SINGLE][CHECK][FILE 다운로드 가능][{}]" , orgnlFileNm);
		}else {
			result = false;
			log.debug("[SINGLE][CHECK][FILE 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
		}
		
		return result;
	}
	
	/**
	 * SINGLE 파일 다운로드 체크
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
//	public boolean checkSingleFile(HttpServletRequest request, List<Map<String, Object>> requestList) throws Exception {
//		
//		boolean result = false;
//		
//		/* 넥사크로 예제 구간 START */
//		String characterEncoding = request.getCharacterEncoding();
//		
//		if(characterEncoding == null) {
//			characterEncoding = PlatformType.DEFAULT_CHAR_SET;
//		}
//		
//		//문자셋 타입
//		String charsetOfRequest = CharsetUtil.getCharsetOfRequest(request, characterEncoding);
//		log.debug("[charsetOfRequest][{}]", charsetOfRequest);
//		/* 넥사크로 예제 구간 END */
//		
//		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//		
//		String fileGroupMgno = (String) requestList.get(0).get("fileGroupMgno");
//		String fileMgno = (String) requestList.get(0).get("fileMgno");
//		
//		FileVo vo = new FileVo();
//		vo.setFileGroupMgno(fileGroupMgno);
//		vo.setFileMgno(fileMgno);
//		vo.setFileTypeClCd(Const.UPLOAD.SINGLE);
//		
//		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//		FileVo fileVo = fileService.selectFileDtl(vo);
//		
//		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//		File file = new File(fileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
//		
//		/* 원본파일명 */
//		String orgnlFileNm = fileVo.getOrgnlFileNmWithExt();
//		
//		/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
//		if(file.exists()) {
//			log.debug("Physical File is Found!");
//			log.debug("[SINGLE][CHECK][FILE 다운로드 가능][{}]" , orgnlFileNm);
//			result = true;
//		}else {
//			log.debug("[SINGLE][CHECK][FILE 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
//			result = false;
//		}
//		
//		return result;
//	}
	
	/**
	 * 엑셀 업로드 처리기
	 * 
	 * @param multipartRequest - 엑셀 업로드용 MultipartRequest (필수)
	 * @return
	 * @throws Exception
	 */
	public MultipartFile getUploadFile(MultipartHttpServletRequest multipartRequest) throws Exception {
		
		MultipartFile multipartFile = null;
		
		/* 3. 여기부터 업로드 하기 */
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
		
		Set<String> keySet = fileMap.keySet();
		for(String name: keySet) {
			log.debug("[엑셀 업로드파일 name][{}]", name);
			
			multipartFile = fileMap.get(name);
			
			/* 넥사크로 예제 구간 START */
			String originalFilename = multipartFile.getOriginalFilename();
			log.debug("[파일명][{}]",originalFilename);
			
			// IE에서 파일업로드 시 DataSet 파라매터의 Content-Type이 설정되지 않아 여기로 옴. 무시.
			if(originalFilename == null || originalFilename.length() == 0) {
				continue;
			}
			/* 넥사크로 예제 구간 END */
		    
		    break;
			
		}
		
		return multipartFile;
		
	}
	
	
	/* 넥사크로 예제 구간 START */
	/**
	 * 파일명에 불필요한 문자제거
	 * 
	 * @param fileName
	 * @return
	 */
//	private String removedPathTraversal(String fileName) {
//		if(fileName == null) {
//			return null;
//		}
//		
//		fileName = fileName.replace("/", "");
//		fileName = fileName.replace("\\", "");
//		fileName = fileName.replace("&", "");
//		
//		return fileName;
//	}
	/* 넥사크로 예제 구간 END */
}