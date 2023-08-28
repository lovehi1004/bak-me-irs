package gov.me.irs.admin.cdm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 코드 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface CdmMapper {
	
	/**
	 * 그룹코드기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectGroupCdListCnt(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectGroupCdList(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectGroupCd(Map<String, Object> requestMap);
	
	/**
	 * 코드 등록 가능여부 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	String selectCdRegYn(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertGroupCd(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateGroupCd(Map<String, Object> requestMap);
	
	/**
	 * 그룹코드기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteGroupCd(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectCdList(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectCd(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertCd(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateCd(Map<String, Object> requestMap);
	
	/**
	 * 코드상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	int deleteCd(Map<String, Object> requestMap);
	
	
}