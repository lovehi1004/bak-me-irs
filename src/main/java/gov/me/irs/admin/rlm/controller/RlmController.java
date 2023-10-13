package gov.me.irs.admin.rlm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.rlm.service.RlmService;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 역할 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class RlmController {
	
	private final RlmService rlmService;
	
	/**
	 * 역할기본 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/rlm/role.nex")
	public NexacroResult role(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 역할기본 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/rlm/selectRoleList.irs")
	public NexacroResult selectRoleList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = rlmService.selectRoleList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 역할기본 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/rlm/insertRole.irs")
	public NexacroResult insertRole(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = rlmService.insertRole(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 역할기본 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/rlm/updateRole.irs")
	public NexacroResult updateRole(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = rlmService.updateRole(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 역할기본 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/rlm/deleteRole.irs")
	public NexacroResult deleteRole(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = rlmService.deleteRole(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}