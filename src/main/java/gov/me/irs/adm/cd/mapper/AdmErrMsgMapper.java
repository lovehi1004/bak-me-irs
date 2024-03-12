package gov.me.irs.adm.cd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmErrMsgMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectErrMsgList(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectErrMsgDetail(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertErrMsg(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 국가코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectErrMsgCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateErrMsg(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteErrMsg(Map<String, Object> requestMap);
	
}
