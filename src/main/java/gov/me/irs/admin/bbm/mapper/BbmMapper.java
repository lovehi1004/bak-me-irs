package gov.me.irs.admin.bbm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 게시판 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface BbmMapper {
	
	/**
	 * 게시판그룹기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectBbsGroupListCnt(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBbsGroupList(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectBbsGroup(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertBbsGroup(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateBbsGroup(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteBbsGroup(Map<String, Object> requestMap);
	
	/**
	 * 게시판그룹기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectBbsListCnt(Map<String, Object> requestMap);
	
	/**
	 * 게시판상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBbsList(Map<String, Object> requestMap);
	
	/**
	 * 게시판상세 상세 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectBbsDtl(Map<String, Object> requestMap);
	
	/**
	 * 게시판상세 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertBbs(Map<String, Object> requestMap);
	
	/**
	 * 게시판상세 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateBbs(Map<String, Object> requestMap);
	
	/**
	 * 게시판상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteBbs(Map<String, Object> requestMap);
	
	
}