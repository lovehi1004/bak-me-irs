package gov.me.irs.admin.urm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 사용자역할 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface UrmMapper {
	
	/**
	 * 사용자역할상세 역할별 사용자 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectUserRoleList(Map<String, Object> requestMap);
	
	/**
	 * 사용자역할상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteUserRole(Map<String, Object> requestMap);
	
	/**
	 * 사용자역할상세 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserRole(Map<String, Object> requestMap);
	
}