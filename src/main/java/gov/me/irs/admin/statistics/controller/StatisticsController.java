package gov.me.irs.admin.statistics.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.statistics.service.StatisticsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템접속통계 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class StatisticsController {
	
	private final StatisticsService statisticsService;
	
	/**
	 * 시스템접속통계 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/statistics/connectStatistics.nex")
	public NexacroResult connectStatistics(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 시스템접속통계 일별통계조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/statistics/selectConnectDailyStatisticsList.irs")
	public NexacroResult selectConnectDailyStatisticsList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = statisticsService.selectConnectDailyStatisticsList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 시스템접속통계 월별통계조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/statistics/selectConnectMonthlyStatisticsList.irs")
	public NexacroResult selectConnectMonthlyStatisticsList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = statisticsService.selectConnectMonthlyStatisticsList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
}