package gov.me.irs.common.file.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.mapper.FileMapper;
import gov.me.irs.common.file.vo.FileGroupVo;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.FileUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * FileService
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class FileService {
	
	private final FileUtil fileUtil;
	
	private final FileMapper fileMapper;
	
    /**
     * SINGLE/MULTI 업로드 파일정보 생성하기
     * 
     * @param fileVo
     * @return
     * @throws Exception
     */
	@Transactional(rollbackFor = Exception.class)
	public FileVo saveFile(FileVo fileVo) throws Exception {
		
		/* 화면에서 넘어온 파일그룹정보 가 존재하지 않으면 파일그룹정보 생성하기 */
		if(ObjectUtils.isEmpty(fileVo.getFileGroupMgno())) {
			FileGroupVo fileGroupVo = FileGroupVo.builder()
					.menuMgno(fileVo.getMenuMgno())
					.fileTypeClCd(fileVo.getFileTypeClCd())
					.rgtrId(fileVo.getRgtrId())
					.mdfrId(fileVo.getRgtrId())
					.build();
			
			log.debug("[파일업로드 파일그룹정보 생성하기][{}]", fileGroupVo);
			
			fileMapper.insertFileGroup(fileGroupVo);
			
			/* 파일그룹 PK 세팅 */
			fileVo.setFileGroupMgno(fileGroupVo.getFileGroupMgno());
		}
		
		log.debug("[파일업로드 파일상세정보 생성하기][{}]", fileVo);
		
		/* 파일상세정보 생성하기 */
		fileMapper.insertFileDtl(fileVo);
		
		/* 업로드파일 조회 - 등록일자를 알수없으므로 조회하기 */
		return fileMapper.selectFileDtl(fileVo);
		
	}
	
	/**
	 * SINGLE 업로드 파일 삭제
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean deleteFile(FileVo vo) throws Exception {
		int result = fileMapper.deleteFile(vo);
		return result == 1 ? true : false;
	}
	
	/**
	 * SINGLE 파일정보 불러오기
	 * 
	 * @param vo - {fileGroupMgno, fileTypeClCd}, [optional] : {fileMgno, delYn}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public FileVo selectFileDtl(FileVo vo) throws Exception {
		return fileMapper.selectFileDtl(vo);
	}
	
	/**
	 * MULTI 파일목록 불러오기
	 * 
	 * @param vo - {fileGroupMgno, fileTypeClCd}, [optional] : {delYn, fileMgnoArray}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<FileVo> selectFileList(FileVo vo) throws Exception {
		return fileMapper.selectFileList(vo);
	}
	
	/**
	 * 다운로드수 UPDATE 처리
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean updateDwldCount(FileVo vo) throws Exception {
		int updateCount = fileMapper.updateDwldCount(vo);
		return (updateCount == 1) ? true : false;
	}
	
	/**
	 * SINGLE 파일정보 최종저장처리
	 * 
	 * @param dsAtchFileDetail - [{fileGroupMgno, fileMgno}] 최종저장처리 대상 파일정보
	 * @param dsSendFileDetail - {fileGroupMgno} 파일그룹번호가 담긴 정보 [업무처리용 데이터셋]
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveSingleFile(List<Map<String, Object>> dsAtchFileDetail, Map<String, Object> dsSendFileDetail) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "TEST";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			sessionUserId = UserSession.getUserId();
		}
		
		log.debug("[SINGLE 파일정보 최종저장처리][{}][{}][{}]", sessionUserId, dsAtchFileDetail, dsSendFileDetail);

		boolean result = false;
		
		String realPath = fileUtil.getRealFilePath();
		
		/* 월별 저장소 */
		String yyyyMM = DateUtil.getDate("yyyyMM");
		realPath = realPath + "/" + yyyyMM;
		
		String fileGroupMgno = String.valueOf(dsSendFileDetail.get("fileGroupMgno"));
		
		FileVo fileVo = new FileVo();
		fileVo.setFileGroupMgno(fileGroupMgno);																			//화면에서 넘어온 파일그룹 KEY
		if(dsAtchFileDetail.size() > Const.NUMERIC.EMPTY_LIST) {
			String fileMgno = String.valueOf(dsAtchFileDetail.get(0).get("fileMgno"));
			fileVo.setFileMgno(fileMgno);																	//화면에서 넘어온 파일상세 KEY
		}
		fileVo.setMdfrId(sessionUserId);
		
		fileMapper.deleteFile(fileVo);
		
		if(!ObjectUtils.isEmpty(fileVo.getFileMgno())) {
			
			fileVo.setFileTypeClCd(Const.UPLOAD.SINGLE);
			fileVo.setDelYn(Const.DEL.Y);											//저장시에는 임시저장[DEL_YN = 'Y' 인것]된것만 처리
			FileVo vo = fileMapper.selectFileDtl(fileVo);
			
			if(vo != null) {
				Path oldPath = Paths.get(vo.getFilePath(), vo.getFileNmWithExt());
				Path newPath = Paths.get(realPath, vo.getFileNmWithExt());
				
				File file = new File(realPath);
				if(!file.exists()) {
					file.mkdirs();
				}
				
				Files.move(oldPath, newPath);
				
				/* 이동할 경로 */
				fileVo.setFilePath(realPath);
				
				fileMapper.saveSingleFile(fileVo);
				
				result = true;
			}
		}
		
		return result;
	}
	
	/**
	 * MULTI 파일정보 최종저장처리
	 * 
	 * @param dsAtchFileDetail - [{fileGroupMgno, fileMgno}] 최종저장처리 대상 파일정보
	 * @param dsSendFileDetail- {fileGroupMgno} 파일그룹번호가 담긴 정보 [업무처리용 데이터셋]
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveMultiFile(List<Map<String, Object>> dsAtchFileDetail, Map<String, Object> dsSendFileDetail) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "TEST";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			sessionUserId = UserSession.getUserId();
		}
		
		/* 파일그룹번호 */
		String fileGroupMgno = (String) dsSendFileDetail.get("fileGroupMgno");
		List<String> fileMgnoArray = new ArrayList<String>();
		
		for (Map<String, Object> fileInfoMap : dsAtchFileDetail) {
			fileMgnoArray.add((String) fileInfoMap.get("fileMgno"));
		}
		
		Map<String, Object> uploadMap = new HashMap<String, Object>();
		uploadMap.put("fileGroupMgno", fileGroupMgno);
		uploadMap.put("fileMgnoArray", fileMgnoArray);
		
		log.debug("[MULTI 파일정보 최종저장처리][{}][{}]", sessionUserId, uploadMap);
		
		boolean result = false;
		
		/* 업로드 대상[fileGroupMgno]이 없으면 업로드를 중지하고 반환한다. */
		if(uploadMap == null || (uploadMap != null && uploadMap.get("fileGroupMgno") == null)) {
			return false;
		}
		
		String realPath = fileUtil.getRealFilePath();
		
		/* 월별 저장소 */
		String yyyyMM = DateUtil.getDate("yyyyMM");
		realPath = realPath + "/" + yyyyMM;

		FileVo fileVo = new FileVo();
		fileVo.setFileGroupMgno(fileGroupMgno);																			//화면에서 넘어온 파일그룹 KEY
		fileVo.setFileMgnoArray(fileMgnoArray);													//화면에서 넘어온 파일상세 KEY
		fileVo.setMdfrId(sessionUserId);
		
		fileMapper.deleteFile(fileVo);
		
		
		if(fileVo.getFileMgnoArray() != null) {
			
			for (String fileMgno : fileMgnoArray) {
				
				/* 1. 현재상태의 대상 파일 조회 */
				FileVo paramVo = new FileVo();
				paramVo.setFileGroupMgno(fileGroupMgno);
				paramVo.setFileMgno(fileMgno);
				FileVo currentFileVo = fileMapper.selectFileDtl(paramVo);
				
				/* 2-1. 신규 업로드 파일이라면 임시경로에서 실제경로로 이동 */
				if(Const.DEL.Y.equals(currentFileVo.getDelYn())) {
					/* 임시경로에서 실제경로로 이동 */
					
					Path oldPath = Paths.get(currentFileVo.getFilePath(), currentFileVo.getFileNmWithExt());
					Path newPath = Paths.get(realPath, currentFileVo.getFileNmWithExt());
					
					File file = new File(realPath);
					if(!file.exists()) {
						file.mkdirs();
					}
					
					Files.move(oldPath, newPath);
					
					/* 이동할 경로 */
					currentFileVo.setFilePath(realPath);
					
					fileMapper.saveMultiFile(currentFileVo);
						
				}
				/* 2-2. 기존 업로드 파일이라면 - 아무것도 하지 않기 */
				
			}
			
			
			
		}
		
		result = true;
		
		return result;
	}
	
	/**
	 * 차수 생성 전용 파일정보 복제 후 유효한 파일상세목록 조회하기
	 * 
	 * @param requestMap - {fileGroupMgno} 파일그룹일련번호
	 * @return 파일상세목록
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<FileVo> saveCloneFileAndList(Map<String, Object> requestMap) throws Exception {
		
		String sourceFileGroupMgno = (String) requestMap.get("fileGroupMgno");
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
			sessionUserId = tableUser.getUserId();
		}
		
		List<String> fileMgnoArray = new ArrayList<String>();
		
		/* 파일 유형 구분 코드 조회 */
		FileGroupVo fileGroupVo = fileMapper.selectFileGrp(sourceFileGroupMgno);
		String fileTypeClCd = fileGroupVo.getFileTypeClCd();
		
		FileGroupVo parameterFileGroupVo = FileGroupVo.builder()
				.sourceFileGroupMgno(sourceFileGroupMgno)
				.rgtrId(sessionUserId)
				.build();
		
		fileMapper.insertCloneFileGroup(parameterFileGroupVo);
		/* 복제된 파일그룹일련번호 */
		String fileGroupMgno = parameterFileGroupVo.getFileGroupMgno();
		
		fileMapper.insertCloneFileDtl(parameterFileGroupVo);
		
		List<FileVo> cloneList = fileMapper.selectCloneFileList(parameterFileGroupVo);
		
		/* 물리파일 복제 하기 */
		for (FileVo fileVo : cloneList) {
			
			Path oldPath = Paths.get(fileVo.getFilePath(), fileVo.getFileNmWithExt());
			
			fileVo.setCloneFileNm(fileUtil.getTempFilename());
			Path newPath = Paths.get(fileVo.getFilePath(), fileVo.getCloneFileNmWithExt());
			
			Files.copy(oldPath, newPath);
			
			fileMapper.updateCloneFileNm(fileVo);
			
			fileMgnoArray.add(fileVo.getFileMgno());
			
		}
		
		/* 유효한 파일목록 조회하기 */
		FileVo vo = FileVo.builder()
				.fileGroupMgno(fileGroupMgno)
				.fileMgnoArray(fileMgnoArray)
				.fileTypeClCd(fileTypeClCd)
				.delYn(Const.DEL.N)
				.build();
		
		List<FileVo> fileList = fileMapper.selectFileList(vo);
		
		return fileList;
	}
	
	/**
	 * 차수 생성 전용 파일정보 복제 후 생성된 파일그룹일련번호 반환받기
	 * 
	 * @param sourceFileGroupMgno -  파일그룹일련번호
	 * @return 복제된 파일그룹일련번호
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String saveCloneFile(String sourceFileGroupMgno) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
			sessionUserId = tableUser.getUserId();
		}
		
		List<String> fileMgnoArray = new ArrayList<String>();
		
		FileGroupVo parameterFileGroupVo = FileGroupVo.builder()
				.sourceFileGroupMgno(sourceFileGroupMgno)
				.rgtrId(sessionUserId)
				.build();
		
		fileMapper.insertCloneFileGroup(parameterFileGroupVo);
		/* 복제된 파일그룹일련번호 */
		String fileGroupMgno = parameterFileGroupVo.getFileGroupMgno();
		
		fileMapper.insertCloneFileDtl(parameterFileGroupVo);
		
		List<FileVo> cloneList = fileMapper.selectCloneFileList(parameterFileGroupVo);
		
		/* 물리파일 복제 하기 */
		for (FileVo fileVo : cloneList) {
			
			Path oldPath = Paths.get(fileVo.getFilePath(), fileVo.getFileNmWithExt());
			
			fileVo.setCloneFileNm(fileUtil.getTempFilename());
			Path newPath = Paths.get(fileVo.getFilePath(), fileVo.getCloneFileNmWithExt());
			
			Files.copy(oldPath, newPath);
			
			fileMapper.updateCloneFileNm(fileVo);
			
			fileMgnoArray.add(fileVo.getFileMgno());
			
		}
		
		return fileGroupMgno;
	}
}
