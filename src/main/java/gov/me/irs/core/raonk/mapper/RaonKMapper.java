package gov.me.irs.core.raonk.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.common.file.vo.RaonKFileGroupVo;

/**
 * RaonKMapper - 라온K Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface RaonKMapper {

	/**
	 * [공통] 라온K - 파일목록 조회
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	List<RaonKFileVo> selectFileList(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * [공통] 라온K - 지정 파일목록 조회
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	List<RaonKFileVo> selectSelectedFileList(List<RaonKFileVo> raonKFileVo) throws Exception;
	
	/**
	 * 파일그룹정보 생성
	 * 
	 * @param raonKFileGroupVo
	 * @return
	 */
	int insertFileGroup(RaonKFileGroupVo raonKFileGroupVo) throws Exception;
	
	/**
	 * 파일상세정보 생성
	 * 
	 * @param raonKFileVo
	 * @return
	 */
	int insertFileDtl(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 기존 파일 삭제 - UPDATE - DEL_YN = 'Y' 처리
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	int deleteFile(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 파일정보 불러오기
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	RaonKFileVo selectFileDtl(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 파일정보 최종저장처리
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	int saveFile(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 다운로드수 UPDATE 처리
	 * 
	 * @param fileVo
	 * @return
	 * @throws Exception
	 */
	int updateDwldCount(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일그룹정보 복제하기
	 * 
	 * @param raonKFileGroupVo
	 * @return
	 * @throws Exception
	 */
	int insertCloneFileGroup(RaonKFileGroupVo raonKFileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세정보 복제하기
	 * 
	 * @param raonKFileVo
	 * @return
	 */
	int insertCloneFileDtl(RaonKFileGroupVo raonKFileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세목록 조회하기
	 * 
	 * @param raonKFileVo
	 * @return
	 */
	List<RaonKFileVo> selectCloneFileList(RaonKFileGroupVo raonKFileGroupVo) throws Exception;
	
	/**
	 * 차수 생성 전용 파일상세 물리파일명 수정하기
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	int updateCloneFileNm(RaonKFileVo raonKFileVo) throws Exception;
	
	/**
	 * 파일그룹일련번호 채번
	 * 
	 * @return
	 */
	String selectFileGroupMgno();
	
	/**
	 * 파일일련번호 채번
	 * 
	 * @param fileGroupMgno - 파일그룹일련번호
	 * @return
	 */
	String selectFileMgno(String fileGroupMgno);
	
	/**
	 * 새로운 파일그룹정보 생성
	 * 
	 * @param raonKFileGroupVo
	 * @return
	 */
	int insertNewFileGroup(Map<String, Object> parameterMap) throws Exception;
	
	/**
	 * 새로운 파일상세정보 생성
	 * 
	 * @param raonKFileVo
	 * @return
	 */
	int insertNewFileDtl(Map<String, Object> parameterMap) throws Exception;
	
	/**
	 * 새로운 파일정보 생성시 기존 파일상세정보 삭제
	 * 
	 * @param raonKFileVo
	 * @return
	 */
	int deleteOldFileDtl(Map<String, Object> parameterMap) throws Exception;
	
}
