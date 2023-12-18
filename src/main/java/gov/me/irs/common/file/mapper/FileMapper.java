package gov.me.irs.common.file.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import gov.me.irs.common.file.vo.FileGroupVo;
import gov.me.irs.common.file.vo.FileVo;

/**
 * FileMapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface FileMapper {
	
	/**
	 * 파일그룹정보 생성
	 * 
	 * @param fileGroupVo
	 * @return
	 */
	int insertFileGroup(FileGroupVo fileGroupVo) throws Exception;
	
	/**
	 * 파일상세정보 생성
	 * 
	 * @param fileVo
	 * @return
	 */
	int insertFileDtl(FileVo fileVo) throws Exception;
	
	/**
	 * SINGLE 업로드 파일 삭제
	 * 
	 * @param fileVO
	 * @return
	 */
	int deleteFile(FileVo fileVo) throws Exception;
	
	/**
	 * SINGLE 파일정보 불러오기
	 * 
	 * @param fileVo
	 * @return
	 */
	FileVo selectFileDtl(FileVo fileVo) throws Exception;
	
	/**
	 * MULTI 파일목록 불러오기
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	List<FileVo> selectFileList(FileVo fileVo) throws Exception;
	
	/**
	 * 다운로드수 UPDATE 처리
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	int updateDwldCount(FileVo fileVo) throws Exception;
	
	/**
	 * SINGLE 파일정보 최종저장처리
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	int saveSingleFile(FileVo fileVo) throws Exception;
	
	/**
	 * MULTI 파일정보 최종저장처리
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	int saveMultiFile(FileVo fileVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일그룹정보 조회하기
	 * 
	 * @param fileVo
	 * @return
	 */
	FileGroupVo selectFileGrp(String fileGroupMgno) throws Exception;
	
	/**
	 * 차수 생성 전용 파일그룹정보 복제하기
	 * 
	 * @param fileGroupVo
	 * @return
	 * @throws Exception
	 */
	int insertCloneFileGroup(FileGroupVo fileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세정보 복제하기
	 * 
	 * @param fileVo
	 * @return
	 */
	int insertCloneFileDtl(FileGroupVo fileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세목록 조회하기
	 * 
	 * @param fileVo
	 * @return
	 */
	List<FileVo> selectCloneFileList(FileGroupVo fileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세 물리파일명 수정하기
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	int updateCloneFileNm(FileVo fileVo) throws Exception;
}