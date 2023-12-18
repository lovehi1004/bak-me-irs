package gov.me.irs.core.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import gov.me.irs.core.client.vo.ClientVo;

/**
 * 시스템 공통 사용자 인증 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface UserMapper {
	
	/**
	 * 권한 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectRoleList(Map<String, Object> requestMap);
	
	/**
	 * 사용자 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectUser(String userId);
	
	/**
	 * 사용자 권한정보 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteUserRole(Map<String, Object> requestMap);
	
	/**
	 * 사용자 권한정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserRole(Map<String, Object> requestMap);
	
	/**
	 * 사용자 권한정보 변경
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUserRole(Map<String, Object> requestMap);
	
	/**
	 * 사용자 로그인실패건수 저장
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUserLgnFailCnt(ClientVo vo);
	
	/**
	 * 사용자ID 채번 - USER_ID 채번
	 * 
	 * @return
	 */
	String selectUserId();
	
	/**
	 * 사용자정보 생성 [USER_BSC]
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUser(Map<String, Object> requestMap);
	
}