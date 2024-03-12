package gov.me.irs.adm.cd.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmMnofcInfoMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectMnofcInfoListCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMnofcInfoList(Map<String, Object> requestMap);

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectSubMnofcInfoList(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateMnofcInfo(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateSubMnofcInfo(Map<String, Object> requestMap);
	
}
