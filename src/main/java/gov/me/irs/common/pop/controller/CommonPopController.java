package gov.me.irs.common.pop.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.pop.service.CommonPopService;
import gov.me.irs.common.vo.PagingVo;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class CommonPopController {

	private final CommonPopService commonPopService;
	
	/**
	 * [사용자] 공통 > 협정약정 검색 팝업
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/pop/selectAgreeStiplList.irs")
	public NexacroResult selectAgreeStiplList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) {
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		String cnsltngrpFlag = StringUtils.EMPTY; //협의체 등록페이지 구분
		
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		if(!ObjectUtils.isEmpty(dsPageInfo.get("cnsltngrpFlag"))) { cnsltngrpFlag = (String) dsPageInfo.get("cnsltngrpFlag"); }
		
		if(cnsltngrpFlag.equals("cnsltngrpFlag") == true) {   //협의체 등록페이지에서 협정약정 팝업창 목록 조회 할때
			
			int totalCount = commonPopService.selectAgreeStiplListCntCnsltngrp(dsSrh);
			
			pagingVo.setTotalCount(totalCount);
							
			if(totalCount > Const.NUMERIC.EMPTY_LIST) {
				pagingVo.setSqlMap(dsSrh);
				dsList = commonPopService.selectAgreeStiplListCnsltngrp(dsSrh);
			}
		}else { 
			int totalCount = commonPopService.selectAgreeStiplListCnt(dsSrh);
				
			pagingVo.setTotalCount(totalCount);
							
			if(totalCount > Const.NUMERIC.EMPTY_LIST) {
				pagingVo.setSqlMap(dsSrh);
				dsList = commonPopService.selectAgreeStiplList(dsSrh);
			}
		}	
		nexacroResult.addDataSet("dsPageInfo", pagingVo.getMap());
		nexacroResult.addDataSet("dsList", dsList);
				
		return nexacroResult;
	}
	
	/**
	 * [사용자] 공통 > 방법론 검색 팝업
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/pop/selectMhdlglList.irs")
	public NexacroResult selectMhdlglList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) {
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
					
		PagingVo pagingVo = new PagingVo(dsPageInfo);
			
		int totalCount = commonPopService.selectMhdlglListCnt(dsSrh);
			
		pagingVo.setTotalCount(totalCount);
						
		if(totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = commonPopService.selectMhdlglList(dsSrh);
		}
					
		nexacroResult.addDataSet("dsPageInfo", pagingVo.getMap());
		nexacroResult.addDataSet("dsList", dsList);
				
		return nexacroResult;
	}
	
	/**
	 * [사용자] 공통 > 사용자 검색 팝업
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/pop/selectUserList.irs")
	public NexacroResult selectUserList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) {
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
					
		PagingVo pagingVo = new PagingVo(dsPageInfo);
			
		int totalCount = commonPopService.selectUserListCnt(dsSrh);
			
		pagingVo.setTotalCount(totalCount);
						
		if(totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = commonPopService.selectUserList(dsSrh);
		}
					
		nexacroResult.addDataSet("dsPageInfo", pagingVo.getMap());
		nexacroResult.addDataSet("dsList", dsList);
				
		return nexacroResult;
	}
	
	/**
	 * [사용자] 공통 > 사업수행자 검색 팝업
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/pop/selectInstList.irs")
	public NexacroResult selectInstList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) {
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsInstList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = commonPopService.selectInstListCnt(dsSrh);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsInstList = commonPopService.selectInstList(dsSrh);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsInstList", dsInstList);
		
		return nexacroResult;
	}
	
	/**
	 * [사용자] 공통 > 개인정보취급자정보 저장
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/pop/insertUserPrvcPrslDsctn.irs")
	public NexacroResult insertUserPrvcPrslDsctn(@ParamDataSet(name = "dsPrvcPrslDsctnInfo") Map<String, Object> dsPrvcPrslDsctnInfo
			, HttpServletRequest request) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		int result = commonPopService.insertUserPrvcPrslDsctn(dsPrvcPrslDsctnInfo, request);
		nexacroResult.addDataSet("dsInstList", result);
		
		return nexacroResult;
	}
	
}
