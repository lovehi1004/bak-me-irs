package gov.me.irs.admin.usm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.usm.service.UsmService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사용자 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class UsmController {
	
	private final UsmService usmService;
	
	/**
	 * 사용자기본 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/user.nex")
	public NexacroResult user(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 사용자기본 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/selectUserList.irs")
	public NexacroResult selectUserList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(requestMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = usmService.selectUserListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			List<Map<String, Object>> list = usmService.selectUserList(requestMap);
			nexacroResult.addDataSet("list", list);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("pagingVo", pagingVo);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자기본 상세조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/selectUserDtl.irs")
	public NexacroResult selectUserDtl(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> detail = usmService.selectUserDtl(requestMap);
		nexacroResult.addDataSet("detail", detail);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자기본 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/insertUser.irs")
	public NexacroResult insertUser(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = usmService.insertUser(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자기본 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/updateUser.irs")
	public NexacroResult updateUser(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = usmService.updateUser(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자기본 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/usm/deleteUser.irs")
	public NexacroResult deleteUser(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = usmService.deleteUser(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}