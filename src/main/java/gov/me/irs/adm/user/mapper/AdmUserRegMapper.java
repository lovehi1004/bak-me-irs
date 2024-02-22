package gov.me.irs.adm.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [관리자] 사업수행자관리 > 등록관리 Mapper
 * [사용자] 사업수행자관리 > 등록관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface AdmUserRegMapper {

	/**
	 * [사용자] 사업수행자관리 > 등록관리 - 목록조회 총건수 조회
	 * <br>
	 * [관리자] 사업수행자관리 > 등록관리 - 목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectUserRegListCnt(Map<String, Object> requestMap);
	
	/**
	 * [사용자] 사업수행자관리 > 등록관리 - 목록조회
	 * <br>
	 * [관리자] 사업수행자관리 > 등록관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectUserRegList(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 심의결과등록 - 심의결과 저장 > 심의승인처리시에 사용자정보 계정상태구분코드 승인상태로 수정 [USER_BSC]
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUserAcntSttsClCd(Map<String, Object> requestMap);
	
}
