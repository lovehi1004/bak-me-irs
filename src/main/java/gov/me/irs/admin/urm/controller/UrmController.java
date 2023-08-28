package gov.me.irs.admin.urm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.urm.service.UrmService;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사용자역할 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class UrmController {
	
	private final UrmService urmService;
	
	/**
	 * 사용자역할상세 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/urm/uesrRole.nex")
	public NexacroResult uesrRole(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 사용자역할상세 역할별 사용자 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/urm/selectUserRoleList.irs")
	public NexacroResult selectUserRoleList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = urmService.selectUserRoleList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자역할상세 저장
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/urm/saveUserRole.irs")
	public NexacroResult saveUserRole(@AuthenticationPrincipal TableUser tableUser, @ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = urmService.saveUserRole(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}