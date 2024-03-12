package gov.me.irs.adm.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmUserMngMapper {
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectUserMngListCnt(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectUserMngList(Map<String, Object> requestMap);
	
}
