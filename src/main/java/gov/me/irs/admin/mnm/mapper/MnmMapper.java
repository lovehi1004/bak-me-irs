package gov.me.irs.admin.mnm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 메뉴 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface MnmMapper {
	
	/**
	 * 메뉴기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMenuList(Map<String, Object> requestMap);
	
	/**
	 * 메뉴기본 상세조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> selectMenu(Map<String, Object> requestMap);
	
	/**
	 * 상위메뉴 메뉴구분정보 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUpMenuSeCd(Map<String, Object> requestMap);
	
	/**
	 * 메뉴기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertMenu(Map<String, Object> requestMap);
	
	/**
	 * 메뉴기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateMenu(Map<String, Object> requestMap);
	
	/**
	 * 메뉴기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteMenu(Map<String, Object> requestMap);
	
}