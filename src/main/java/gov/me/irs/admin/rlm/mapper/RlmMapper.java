package gov.me.irs.admin.rlm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 역할 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface RlmMapper {
	
	/**
	 * 역할기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectRoleList(Map<String, Object> requestMap);
	
	/**
	 * 역할기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertRole(Map<String, Object> requestMap);
	
	/**
	 * 역할기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateRole(Map<String, Object> requestMap);
	
	/**
	 * 역할기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteRole(Map<String, Object> requestMap);
	
}