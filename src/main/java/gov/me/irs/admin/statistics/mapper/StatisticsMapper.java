package gov.me.irs.admin.statistics.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 시스템접속통계 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface StatisticsMapper {
	
	/**
	 * 시스템접속통계 일별통계조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectConnectDailyStatisticsList(Map<String, Object> requestMap);
	
	/**
	 * 시스템접속통계 월별통계조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectConnectMonthlyStatisticsList(Map<String, Object> requestMap);
	
}