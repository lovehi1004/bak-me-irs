package gov.me.irs.admin.usm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 사용자 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface UsmMapper {
	
	/**
	 * 사용자기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectUserListCnt(Map<String, Object> requestMap);
	
	/**
	 * 사용자기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectUserList(Map<String, Object> requestMap);
	
	/**
	 * 사용자기본 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectUserDtl(Map<String, Object> requestMap);
	
	/**
	 * 사용자기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUser(Map<String, Object> requestMap);
	
	/**
	 * 사용자기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUser(Map<String, Object> requestMap);
	
	/**
	 * 사용자기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteUser(Map<String, Object> requestMap);
	
}