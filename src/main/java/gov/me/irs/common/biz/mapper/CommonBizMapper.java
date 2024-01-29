package gov.me.irs.common.biz.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommonBizMapper {

	/**
	 * 사업 관장기관 정보 조회.
	 * 
	 * @param requestMap
	 * @return
	 */	
	Map<String, Object> selectBizInstInfo(Map<String, Object> requestMap);
	
	/**
	 * 방법론 관장기관 정보 조회.
	 * 
	 * @param requestMap
	 * @return
	 */	
	Map<String, Object> selectMhdInstInfo(Map<String, Object> requestMap);
	
	/**
	 * 사용자 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectUsrDetail(Map<String, Object> requestMap);
	
	/**
	 * 사업 관장기관 정보 변경
	 * 
	 * @param requestMap
	 * @return
	 */	
	int updateBizInst(Map<String, Object> requestMap);
	
	/**
	 * 사업 권리의무승계 관장기관 정보 변경
	 * 
	 * @param requestMap
	 * @return
	 */	
	int updateBizScsnInst(Map<String, Object> requestMap);
	
	/**
	 * 방법론 관장기관 정보 변경
	 * 
	 * @param requestMap
	 * @return
	 */	
	int updateMhdInst(Map<String, Object> requestMap);
	
	/**
	 * 관장기관 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectInstMgno(Map<String, Object> requestMap);
	
	/**
	 * 사업 전체 이력
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertIrbHstry(Map<String, Object> requestMap);
	
	/**
	 * 방법론 전체 이력
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertMhdHstry(Map<String, Object> requestMap);
	
	/**
	 * 사업 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectBizHstryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 방법론 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectMhdHstryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 협정약정 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectAgrHstryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 국제감축협의체 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectCnsHstryListCnt(Map<String, Object> requestMap);
	/**
	 * 사업 이력 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBizHstryList(Map<String, Object> requestMap);
	
	/**
	 * 방법론 이력 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMhdHstryList(Map<String, Object> requestMap);
	
	/**
	 * 협정약정 이력 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectAgrHstryList(Map<String, Object> requestMap);
	/**
	 * 국제감축협의체 이력 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectCnsHstryList(Map<String, Object> requestMap);
	
	/**
	 * 사업비공개관리 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectPrvHstryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 사업비공개관리 이력 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectPrvHstryList(Map<String, Object> requestMap);
	
}
