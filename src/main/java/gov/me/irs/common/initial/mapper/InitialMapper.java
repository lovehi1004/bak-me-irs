package gov.me.irs.common.initial.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 인증 사용자용 공통 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface InitialMapper {
	
	/**
	 * 사용자권한 메뉴 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMenuList(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectGroupCodeList(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectCodeList(Map<String, Object> requestMap);
	
	/**
	 * 오류메세지 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectErrorMessegeList(Map<String, Object> requestMap);
	
	
	
}