package gov.me.irs.common.file.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.mapper.FileMapper;
import gov.me.irs.common.file.vo.FileGroupVo;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.FileUtil;
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
		if(fileVo.getFileGroupSn() == 0) {
			FileGroupVo fileGroupVo = FileGroupVo.builder()
					.menuId(fileVo.getMenuId())
					.fileTypeClCd(fileVo.getFileTypeClCd())
					.rgtrId(fileVo.getRgtrId())
					.mdfrId(fileVo.getRgtrId())
					.build();
			
			log.debug("[파일업로드 파일그룹정보 생성하기][{}]", fileGroupVo);
			
			fileMapper.insertFileGroup(fileGroupVo);
			
			/* 파일그룹 PK 세팅 */
			fileVo.setFileGroupSn(fileGroupVo.getFileGroupSn());
		}
		
		log.debug("[파일업로드 파일상세정보 생성하기][{}]", fileVo);
		
		/* 파일상세정보 생성하기 */
		fileMapper.insertFileDtl(fileVo);
		
		return fileVo;
		
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
	 * @param vo - {fileGroupSn, fileTypeClCd}, [optional] : {fileDtlSn, delYn}
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
	 * @param vo - {fileGroupSn, fileTypeClCd}, [optional] : {delYn, fileDtlSnArray}
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
	 * @param sessionUserId
	 * @param uploadMap - {fileGroupSn, fileDtlSn}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveSingleFile(String sessionUserId, Map<String, Object> uploadMap) throws Exception {
		
		boolean result = false;
		
		String realPath = fileUtil.getRealFilePathNm();
		
		/* 월별 저장소 */
		String yyyyMM = DateUtil.getDate("yyyyMM");
		realPath = realPath + "/" + yyyyMM;
		
		int fileGroupSn = NumberUtils.toInt(String.valueOf(uploadMap.get("fileGroupSn")));
		int fileDtlSn = NumberUtils.toInt(String.valueOf(uploadMap.get("fileDtlSn")));
		
		FileVo fileVo = new FileVo();
		fileVo.setFileGroupSn(fileGroupSn);																			//화면에서 넘어온 파일그룹 KEY
		fileVo.setFileDtlSn(fileDtlSn);																	//화면에서 넘어온 파일상세 KEY
		fileVo.setMdfrId(sessionUserId);
		
		if(fileVo.getFileDtlSn() != 0) {
			
			fileVo.setFileTypeClCd(Const.UPLOAD.SINGLE);
			fileVo.setDelYn(Const.DEL.Y);											//저장시에는 임시저장[DEL_YN = 'Y' 인것]된것만 처리
			FileVo vo = fileMapper.selectFileDtl(fileVo);
			
			if(vo != null) {
				Path oldPath = Paths.get(vo.getFilePathNm(), vo.getFileNmWithExt());
				Path newPath = Paths.get(realPath, vo.getFileNmWithExt());
				
				File file = new File(realPath);
				if(!file.exists()) {
					file.mkdirs();
				}
				
				Files.move(oldPath, newPath);
				
				/* 이동할 경로 */
				fileVo.setFilePathNm(realPath);
				
				fileMapper.saveSingleFile(fileVo);
				
				result = true;
			}
		}
		
		return result;
	}
	
	/**
	 * MULTI 파일정보 최종저장처리
	 * 
	 * @param sessionUserId
	 * @param uploadMap - {fileGroupSn, fileDtlSnArray, newFileYnArray : [Y|N]}
	 * 		- newFileYnArray : 신규업로드파일 여부
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveMultiFile(String sessionUserId, Map<String, Object> uploadMap) throws Exception {
		
		boolean result = false;
		
		/* 업로드 대상[fileGroupSn]이 없으면 업로드를 중지하고 반환한다. */
		if(uploadMap == null || (uploadMap != null && uploadMap.get("fileGroupSn") == null)) {
			return false;
		}
		
		String realPath = fileUtil.getRealFilePathNm();
		
		/* 월별 저장소 */
		String yyyyMM = DateUtil.getDate("yyyyMM");
		realPath = realPath + "/" + yyyyMM;
		
		int fileGroupSn = NumberUtils.toInt(String.valueOf(uploadMap.get("fileGroupSn")));
		
		@SuppressWarnings("unchecked")
		List<Integer> fileDtlSnArray = (List<Integer>) uploadMap.get("fileDtlSnArray");
		@SuppressWarnings("unchecked")
		List<String> newFileYnArray = (List<String>) uploadMap.get("newFileYnArray");

		FileVo fileVo = new FileVo();
		fileVo.setFileGroupSn(fileGroupSn);																			//화면에서 넘어온 파일그룹 KEY
		fileVo.setFileDtlSnArray(fileDtlSnArray);													//화면에서 넘어온 파일상세 KEY
		fileVo.setNewFileYnArray(newFileYnArray);												//화면에서 넘어온 파일상태정보
		fileVo.setMdfrId(sessionUserId);
		
		fileMapper.deleteFile(fileVo);
		
		/* 대상이 존재하면 처리 */
		if(fileVo.getFileDtlSnArray()!=null && fileVo.getNewFileYnArray()!=null) {
			
			List<Integer> newFileDtlSnList = new ArrayList<Integer>();
			
			for (int i=0;i<fileVo.getFileDtlSnArray().size();i++) {
				
				//기존 등록되었던 파일정보는 유지, 신규 등록파일만 최종등록처리한다
				if(Const.NEW.Y.equals(fileVo.getNewFileYnArray().get(i))) {
					newFileDtlSnList.add(fileVo.getFileDtlSnArray().get(i));
				}
			}
			
			/* 임시경로에서 실제경로로 이동 */
			for (int i=0;i<newFileDtlSnList.size();i++) {
				FileVo paramFileVo = fileVo;
				paramFileVo.setFileDtlSn(newFileDtlSnList.get(i));
				paramFileVo.setFileTypeClCd(Const.UPLOAD.MULTI);
				FileVo vo = fileMapper.selectFileDtl(paramFileVo);
				
				Path oldPath = Paths.get(vo.getFilePathNm(), vo.getFileNmWithExt());
				Path newPath = Paths.get(realPath, vo.getFileNmWithExt());
				
				File file = new File(realPath);
				if(!file.exists()) {
					file.mkdirs();
				}
				
				Files.move(oldPath, newPath);
				
			}
			
			if(newFileDtlSnList.size()>0) {
				//List<Integer> 에서 int[]로 변환하기
				fileVo.setFileDtlSnArray(newFileDtlSnList);
				
				/* 이동할 경로 */
				fileVo.setFilePathNm(realPath);
				fileMapper.saveMultiFile(fileVo);
			}else {
				log.debug("[newFileDtlSnList.size()]["+newFileDtlSnList.size()+"]");
			}
			
			result = true;
			
		}
		
		return result;
	}
	
	/**
	 * 차수 생성 전용 파일정보 복제하기
	 * 
	 * @param fileGroupSn - 파일그룹일련번호
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<FileVo> saveCloneFile(int sourceFileGroupSn, String rgtrId) throws Exception {
		
		List<Integer> fileDtlSnArray = new ArrayList<Integer>();
		
		/* 파일 유형 구분 코드 조회 */
		FileGroupVo fileGroupVo = fileMapper.selectFileGrp(sourceFileGroupSn);
		String fileTypeClCd = fileGroupVo.getFileTypeClCd();
		
		FileGroupVo parameterFileGroupVo = FileGroupVo.builder()
				.sourceFileGroupSn(sourceFileGroupSn)
				.rgtrId(rgtrId)
				.build();
		
		fileMapper.insertCloneFileGroup(parameterFileGroupVo);
		/* 복제된 파일그룹일련번호 */
		int fileGroupSn = parameterFileGroupVo.getFileGroupSn();
		
		fileMapper.insertCloneFileDtl(parameterFileGroupVo);
		
		List<FileVo> cloneList = fileMapper.selectCloneFileList(parameterFileGroupVo);
		
		/* 물리파일 복제 하기 */
		for (FileVo fileVo : cloneList) {
			
			Path oldPath = Paths.get(fileVo.getFilePathNm(), fileVo.getFileNmWithExt());
			
			fileVo.setCloneFileNm(fileUtil.getTempFilename());
			Path newPath = Paths.get(fileVo.getFilePathNm(), fileVo.getCloneFileNmWithExt());
			
			Files.copy(oldPath, newPath);
			
			fileMapper.updateCloneFileNm(fileVo);
			
			fileDtlSnArray.add(fileVo.getFileDtlSn());
			
		}
		
		/* 유효한 파일목록 조회하기 */
		FileVo vo = FileVo.builder()
				.fileGroupSn(fileGroupSn)
				.fileDtlSnArray(fileDtlSnArray)
				.fileTypeClCd(fileTypeClCd)
				.delYn(Const.DEL.N)
				.build();
		
		List<FileVo> fileList = fileMapper.selectFileList(vo);
		
		return fileList;
	}
}
