package gov.me.irs.adm.cd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmComCdMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectComGrpCdListCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectComGrpCdList(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectComCdList(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectComGrpCdDetail(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateComGrpCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteComGrpCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertComGrpCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectComGrpCdCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectComCdDetail(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectComCdCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertComCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteComCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateComCd(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드등록, 코드수정 - 순서 정렬
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateComCdSortSeqo(Map<String, Object> requestMap);

}
