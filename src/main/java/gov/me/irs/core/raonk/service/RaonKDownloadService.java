package gov.me.irs.core.raonk.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.java.xapi.data.DataSet;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.vo.RaonKFileDownloadVo;
import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.RaonKFileUtil;
import gov.me.irs.core.raonk.mapper.RaonKMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKService - 라온K Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RaonKDownloadService {
	
	private final RaonKFileUtil raonKFileUtil;
	
	private final RaonKMapper raonKMapper;
	
	/**
	 * 전체 다운로드 - 압축에 압축 처리
	 * 
	 * @param request
	 * @param inputDsName
	 * @param downloadArchiveFileNm
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public RaonKFileDownloadVo getDownloadVo(HttpServletRequest request, String inputDsName, String downloadArchiveFileNm) throws Exception {
		
		log.debug("[전체 다운로드][파일압축하기 - START]");
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
		/* 넥사크로 예제 구간 END */
		
		List<File> subArchiveFileList = new ArrayList<File>();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for(int idx = 0; idx < dsFileInfo.getRowCount(); idx++ ) {
			String fileGroupMgno = dsFileInfo.getString(idx, "fileGroupMgno");			/* 생성 대상 파일그룹식별키 */
			String archiveFileName = dsFileInfo.getString(idx, "archiveFileName");		/* 생성할 개별 압축파일명 */
			if(StringUtils.isEmpty(archiveFileName)) {
				archiveFileName = RaonKFileUtil.DEFAULT_CHILD_ARCHIVE_FILE_NAME + "_" + idx;
			}
			archiveFileName += RaonKFileUtil.DEFAULT_CHILD_ARCHIVE_FILE_EXT;
			
			/* 조회조건 파일정보 조립하기 */
			RaonKFileVo vo = RaonKFileVo.builder()
					.fileGroupMgno(fileGroupMgno)
					.delYn(Const.DEL.N)
					.build();
			
			/* 조회하기 */
			List<RaonKFileVo> fileList = raonKMapper.selectFileList(vo);
			
			log.debug("[전체 다운로드][개별파일 압축하기 - START]");
			File subArchiveFile = raonKFileUtil.compress(fileList, archiveFileName);
			
			/* 다운로드수 UPDATE 처리 */
			for (RaonKFileVo raonKFileVo : fileList) {
				raonKMapper.updateDwldCount(raonKFileVo);
			}
			
			log.debug("[전체 다운로드][개별파일 압축하기 - END]");
			
			/* 압축파일 생성 실패시 */
			if(subArchiveFile == null) {
				log.debug("[전체 다운로드][개별파일 압축하기 - 실패]");
				return null;
			}
			
			/* 최종 압축처리를 위한 하위의 개별 압축파일 추가 */
			subArchiveFileList.add(subArchiveFile);
		}
		
		RaonKFileDownloadVo resultVo = new RaonKFileDownloadVo();
		
		if(subArchiveFileList.size() == 1) {		/* 파일목록이 1건이라면 최종 압축 없이 다운로드 처리하기 */
			log.debug("[전체 다운로드][single]");
			resultVo.setContentType(RaonKFileUtil.ZIP_MIME_TYPE);
			resultVo.setDownloadFileNm(subArchiveFileList.get(0).getName());
			resultVo.setArchiveFile(subArchiveFileList.get(0));
		} else {
			log.debug("[전체 다운로드][multi]");
			resultVo = raonKFileUtil.compressFileList(subArchiveFileList, downloadArchiveFileNm);
			
		}
		
		/* 최종 압축파일 생성 실패시 */
		if(resultVo == null) {
			return null;
		}
		
		log.debug("[전체 다운로드][파일압축하기 - END]");

		return resultVo;
		
	}
	
	/**
	 * 지정파일 전체 다운로드 - 압축 처리, 동일한 파일명은 index를 부여한다.
	 * 
	 * @param request
	 * @param inputDsName
	 * @param downloadArchiveFileNm
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public RaonKFileDownloadVo getSelectedDownloadVo(HttpServletRequest request, String inputDsName, String downloadArchiveFileNm) throws Exception {
		
		log.debug("[전체 다운로드][파일압축하기 - START]");
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
		/* 넥사크로 예제 구간 END */
		
		String resultFileName = StringUtils.EMPTY;

		
		List<RaonKFileVo> fileMapList = new ArrayList<RaonKFileVo>();
		
		int sortNo = 1;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for(int idx = 0; idx < dsFileInfo.getRowCount(); idx++ ) {
			
			
			String fileGroupMgno = dsFileInfo.getString(idx, "fileGroupMgno");			/* 지정파일 파일그룹식별키 */
			String fileMgno = dsFileInfo.getString(idx, "fileMgno");					/* 지정파일 파일상세식별키 */
			
			
			if(!StringUtils.isEmpty(fileGroupMgno) && !StringUtils.isEmpty(fileMgno)) {
				log.debug("[압축대상 지정파일 정보 확인][fileGroupMgno][{}][fileMgno][{}]", fileGroupMgno, fileMgno);
				
				/* 조회조건 파일정보 조립하기 */
				RaonKFileVo vo = RaonKFileVo.builder()
						.fileGroupMgno(fileGroupMgno)
						.fileMgno(fileMgno)
						.sortNo(sortNo++)
						.build();
				
				fileMapList.add(vo);
				
			} else {
				log.error("[압축대상 지정파일 오류정보 확인][fileGroupMgno][{}][fileMgno][{}]", fileGroupMgno, fileMgno);
			}
		}
		
		List<RaonKFileVo> fileList = new ArrayList<RaonKFileVo>();
		
		if(fileMapList.size() > Const.NUMERIC.EMPTY_LIST) {
			fileList = raonKMapper.selectSelectedFileList(fileMapList);
			
			File resultFile = null;
			
			
			log.debug("[지정파일 전체 다운로드][개별파일 압축하기 - START]");
			if(fileList.size() == 1) {		/* 파일목록이 1건이라면 압축 없이 다운로드 처리하기 */
				log.debug("[지정파일 전체 다운로드][single]");
				resultFileName = fileList.get(0).getOrgnlFileNmWithExt();
				resultFile = new File(fileList.get(0).getFileFullPath());
			} else {
				log.debug("[지정파일 전체 다운로드][multi]");
				resultFileName = RaonKFileUtil.DEFAULT_ARCHIVE_FILE_NAME + "_" + DateUtil.getDate("yyyyMMddHHmmss") + RaonKFileUtil.DEFAULT_ARCHIVE_FILE_EXT;
				resultFile = raonKFileUtil.compress(fileList, resultFileName);
				
			}
			log.debug("[지정파일 전체 다운로드][개별파일 압축하기 - END]");
			
			
			/* 다운로드수 UPDATE 처리 */
			for (RaonKFileVo raonKFileVo : fileList) {
				raonKMapper.updateDwldCount(raonKFileVo);
			}
			
			RaonKFileDownloadVo resultVo = new RaonKFileDownloadVo();
			resultVo.setContentType(RaonKFileUtil.ZIP_MIME_TYPE);
			resultVo.setDownloadFileNm(resultFileName);
			resultVo.setArchiveFile(resultFile);
			
			return resultVo;
			
		} else {
			return null;
		}
		
	}
	
	/**
	 * 전체 다운로드 체크
	 * 
	 * @param dsSendFileDetail
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean checkDownloadVo(List<Map<String, Object>> dsSendFileDetail) throws Exception {
		boolean result = true;
		if(dsSendFileDetail.size() == Const.NUMERIC.ZERO) {		//선택된 파일이 존재하지 않은 경우
			log.error("[다운로드 요청정보가 존재하지 않습니다.]");
			return false;
		}
		
		boolean isBreak = false;
		int physicalFileCount = 0;			/* 물리파일 누적 총 건수 */
		int fileCount = 0;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (Map<String, Object> fileMap : dsSendFileDetail) {
			
			String fileGroupMgno = (String) fileMap.get("fileGroupMgno");			/* 생성 대상 파일그룹식별키 */
			
			/* 조회조건 파일정보 조립하기 */
			RaonKFileVo vo = RaonKFileVo.builder()
					.fileGroupMgno(fileGroupMgno)
					.delYn(Const.DEL.N)
					.build();
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			List<RaonKFileVo> fileList = raonKMapper.selectFileList(vo);
			fileCount += fileList.size();
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			for (RaonKFileVo raonKFileVo : fileList) {
				physicalFileCount++;
				
				File file = new File(raonKFileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
				
				/* 원본파일명 */
				String orgnlFileNm = raonKFileVo.getOrgnlFileNmWithExt();
				
				/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
				if(file.exists()) {
					log.debug("Physical File is Found!");
					log.debug("[전체 다운로드 가능][{}]" , orgnlFileNm);
				}else {
					result = false;
					isBreak = true;
					log.debug("[전체 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
					break;
				}
			}
			
			/* 물리파일 정보가 없으면 for문 탈출하기 */
			if(isBreak) {
				break;
			}
		}
		
		if(physicalFileCount != fileCount) {			//다운로드 요청건수와 실제 물리파일 건수가 다른경우
			log.error("[다운로드 요청건수와 실제 물리파일 건수가 다릅니다.]");
			return false;
		}
		
		if(physicalFileCount == Const.NUMERIC.ZERO) {		//다운로드 대상 물리파일이 0건이라면
			log.error("[파일 데이터가 존재하지 않습니다.]");
			return false;
		}
		
		return result;
	}
	
	/**
	 * 지정파일 전체 다운로드 체크
	 * 
	 * @param dsSendFileDetail
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean checkSelectedDownloadVo(List<Map<String, Object>> dsSendFileDetail) throws Exception {
		boolean result = true;
		if(dsSendFileDetail.size() == Const.NUMERIC.ZERO) {		//선택된 파일이 존재하지 않은 경우
			log.error("[다운로드 요청정보가 존재하지 않습니다.]");
			return false;
		}
		
		int sortNo = 1;
		
		List<RaonKFileVo> fileMapList = new ArrayList<RaonKFileVo>();
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (Map<String, Object> fileMap : dsSendFileDetail) {
			String fileGroupMgno = (String) fileMap.get("fileGroupMgno");			/* 지정파일 파일그룹식별키 */
			String fileMgno = (String) fileMap.get("fileMgno");					/* 지정파일 파일상세식별키 */

			/* 조회조건 파일정보 조립하기 */
			RaonKFileVo vo = RaonKFileVo.builder()
					.fileGroupMgno(fileGroupMgno)
					.fileMgno(fileMgno)
					.sortNo(sortNo++)
					.build();
			
			fileMapList.add(vo);
		}
		
		int physicalFileCount = 0;			/* 물리파일 누적 총 건수 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일정보 DB조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		List<RaonKFileVo> fileList = raonKMapper.selectSelectedFileList(fileMapList);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 파일상태 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (RaonKFileVo raonKFileVo : fileList) {
			physicalFileCount++;
			
			File file = new File(raonKFileVo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
			
			/* 원본파일명 */
			String orgnlFileNm = raonKFileVo.getOrgnlFileNmWithExt();
			
			/* 파일시스템상에 물리파일정보가 있으면 - 다운로드 가능한 경우 */
			if(file.exists()) {
				log.debug("Physical File is Found!");
				log.debug("[지정파일 전체 다운로드 가능][{}]" , orgnlFileNm);
			}else {
				result = false;
				log.debug("[지정파일 전체 다운로드 불가능 - 파일 없음][{}]" , orgnlFileNm);
				break;
			}
		}
		
		if(physicalFileCount != fileList.size()) {			//다운로드 요청건수와 실제 물리파일 건수가 다른경우
			log.error("[다운로드 요청건수와 실제 물리파일 건수가 다릅니다.]");
			return false;
		}
		
		if(physicalFileCount == Const.NUMERIC.ZERO) {		//다운로드 대상 물리파일이 0건이라면
			log.error("[파일 데이터가 존재하지 않습니다.]");
			return false;
		}
		
		return result;
	}	
		
}
