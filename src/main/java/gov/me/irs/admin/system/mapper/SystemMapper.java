package gov.me.irs.admin.system.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 시스템접속이력 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface SystemMapper {
	
	/**
	 * 시스템접속이력 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectConnectHistoryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 시스템접속이력 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectConnectHistoryList(Map<String, Object> requestMap);
	
}