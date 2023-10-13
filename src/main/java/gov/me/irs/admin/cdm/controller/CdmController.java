package gov.me.irs.admin.cdm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.cdm.service.CdmService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.enumeration.CustomResponseEnum;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 코드 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class CdmController {
	
	private final CdmService cdmService;
	
	/**
	 * 코드 관리 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/code.nex")
	public NexacroResult code(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 그룹코드기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/selectGroupCdList.irs")
	public NexacroResult selectGroupCdList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(requestMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = cdmService.selectGroupCdListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			List<Map<String, Object>> list = cdmService.selectGroupCdList(requestMap);
			nexacroResult.addDataSet("list", list);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("pagingVo", pagingVo);
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드기본 중복 조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/checkGroupCd.irs")
	public NexacroResult checkGroupCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		int result = cdmService.checkGroupCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드기본 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/insertGroupCd.irs")
	public NexacroResult insertGroupCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		/* 코드 등록 가능여부 조회 후 등록가능한 경우 */
		if(cdmService.checkCdRegCnt(requestMap)) {
			requestMap.put("sessionUserId", tableUser.getUserId());
			int result = cdmService.insertGroupCd(requestMap);
			nexacroResult.addDataSet("result", result);
		} else {
			/* 사용자정의 데이터 공통 응답정보 설정 */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, CustomResponseEnum.REG_LIMIT_CNT));
		}
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드기본 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/updateGroupCd.irs")
	public NexacroResult updateGroupCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = cdmService.updateGroupCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드기본 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/deleteGroupCd.irs")
	public NexacroResult deleteGroupCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = cdmService.deleteGroupCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 목록 조회
	 * 		- 페이징처리 불필요
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/selectCdList.irs")
	public NexacroResult selectCdList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = cdmService.selectCdList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 중복 조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/checkCd.irs")
	public NexacroResult checkCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		int result = cdmService.checkCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/insertCd.irs")
	public NexacroResult insertCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = cdmService.insertCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/updateCd.irs")
	public NexacroResult updateCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = cdmService.updateCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/cdm/deleteCd.irs")
	public NexacroResult deleteCd(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = cdmService.deleteCd(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}