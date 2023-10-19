package gov.me.irs.core.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

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
	
}