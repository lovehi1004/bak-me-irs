package gov.me.irs.admin.system.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.system.service.SystemService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.vo.PagingVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템접속이력 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class SystemController {
	
	private final SystemService systemService;
	
	/**
	 * 시스템접속이력 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/system/connectHistory.nex")
	public NexacroResult connectHistory(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 시스템접속이력 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/system/selectConnectHistoryList.irs")
	public NexacroResult selectConnectHistoryList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(requestMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = systemService.selectConnectHistoryListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			List<Map<String, Object>> list = systemService.selectConnectHistoryList(requestMap);
			nexacroResult.addDataSet("list", list);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("pagingVo", pagingVo);
		
		return nexacroResult;
	}
	
}