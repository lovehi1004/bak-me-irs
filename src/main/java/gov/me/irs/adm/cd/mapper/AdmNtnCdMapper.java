package gov.me.irs.adm.cd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmNtnCdMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectNtnCdList(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectNtnCdDetail(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertNtnCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 국가코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectNtnCdCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateNtnCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteNtnCd(Map<String, Object> requestMap);
	
}
