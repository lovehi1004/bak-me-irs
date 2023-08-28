package gov.me.irs.admin.mrm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.mrm.service.MrmService;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 역할별 메뉴 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class MrmController {
	
	private final MrmService mrmService;
	
	/**
	 * 역할별 메뉴 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mrm/menuRole.nex")
	public NexacroResult menuRole(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 역할별 메뉴 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mrm/selectMenuRoleList.irs")
	public NexacroResult selectMenuRoleList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = mrmService.selectMenuRoleList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 역할별 메뉴 저장
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mrm/saveMenuRole.irs")
	public NexacroResult saveMenuRole(@AuthenticationPrincipal TableUser tableUser, @ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = mrmService.saveMenuRole(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}