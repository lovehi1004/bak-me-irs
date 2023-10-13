package gov.me.irs.admin.mnm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.mnm.service.MnmService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 메뉴 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class MnmController {
	
	private final MnmService mnmService;
	
	/**
	 * 메뉴기본 메뉴기본화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mnm/menu.nex")
	public NexacroResult menu(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 메뉴기본 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mnm/selectMenuList.irs")
	public NexacroResult selectMenuList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		requestMap.put("sysClCd", Const.CODE.SYS_CL_CD_SCC0001);
		requestMap.put("scc0001MenuMgno", Const.MENU.SCC0001_MENU_ID);
		
		List<Map<String, Object>> list = mnmService.selectMenuList(requestMap);
		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	/**
	 * 메뉴기본 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mnm/insertMenu.irs")
	public NexacroResult insertMenu(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = mnmService.insertMenu(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 메뉴기본 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mnm/updateMenu.irs")
	public NexacroResult updateMenu(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = mnmService.updateMenu(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 메뉴기본 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/mnm/deleteMenu.irs")
	public NexacroResult deleteMenu(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = mnmService.deleteMenu(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}