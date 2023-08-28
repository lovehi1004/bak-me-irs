package gov.me.irs.admin.mrm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 역할별 메뉴 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface MrmMapper {
	
	/**
	 * 역할별 메뉴 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMenuRoleList(Map<String, Object> requestMap);
	
	/**
	 * 역할별 메뉴 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteMenuRole(Map<String, Object> requestMap);
	
	/**
	 * 역할별 메뉴 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertMenuRole(Map<String, Object> requestMap);
	
}