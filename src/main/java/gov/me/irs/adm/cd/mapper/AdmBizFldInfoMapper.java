package gov.me.irs.adm.cd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmBizFldInfoMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectBizFldInfoListCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBizFldInfoList(Map<String, Object> requestMap);

	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertBizFldInfo(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectBizSFldCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateBizFldInfo(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteBizFldInfo(Map<String, Object> requestMap);
	
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectBizFldInfoDetail(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBizFldInfoDetailList(Map<String, Object> requestMap);
	

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectBizSubFldInfoDetail(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectBizSubFldCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertBizSubFldInfo(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateBizSubFldInfo(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야- 코드등록, 코드수정 - 순서 정렬
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateBizFldCdSortSeqo(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteBizSubFldInfo(Map<String, Object> requestMap);
	
	
}
