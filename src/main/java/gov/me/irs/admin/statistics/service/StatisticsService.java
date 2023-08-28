package gov.me.irs.admin.statistics.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.statistics.mapper.StatisticsMapper;
import lombok.RequiredArgsConstructor;

/**
 * 시스템접속통계 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class StatisticsService {
	
	private final StatisticsMapper statisticsMapper;

	/**
	 * 시스템접속통계 일별통계조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectConnectDailyStatisticsList(Map<String, Object> requestMap) {
		return statisticsMapper.selectConnectDailyStatisticsList(requestMap);
	}
	
	/**
	 * 시스템접속통계 월별통계조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectConnectMonthlyStatisticsList(Map<String, Object> requestMap) {
		return statisticsMapper.selectConnectMonthlyStatisticsList(requestMap);
	}
}
