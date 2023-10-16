package gov.me.irs.common.initial.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.initial.service.InitialService;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 인증 사용자용 공통 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class InitialController {
	
	private final InitialService initialService;
	
	/**
	 * 사용자권한 메뉴 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 	- 인증정보로 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/initial/selectMenuList.irs")
	public NexacroResult selectMenuList(HttpServletRequest request) throws Exception {
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectMenuList START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserId][{}]", tableUser.getUserId());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getLgnId][{}]", tableUser.getLgnId());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - enum][{}]", tableUser.getUserClCd());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - code][{}]", tableUser.getUserClCd().getCode());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - value][{}]", tableUser.getUserClCd().getValue());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getRoles][{}]", tableUser.getRoles());
		log.debug("[UserSession ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd][{}]", UserSession.getUserClCd());
		log.debug("[UserSession ▶▶▶▶▶▶▶▶▶▶ ][getRoleKey][{}]", UserSession.getRoleKey());
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectMenuList END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("sysClCd", Const.CODE.SYS_CL_CD_SCC0001);
		parameterMap.put("scc0001MenuMgno", Const.MENU.SCC0001_MENU_ID);
		parameterMap.put("userId", tableUser.getUserId());
		parameterMap.put("userClCd", UserSession.getUserClCd());
		parameterMap.put("roleKey", UserSession.getRoleKey());
		
		List<Map<String, Object>> list = initialService.selectMenuList(parameterMap);
		nexacroResult.addDataSet("menuList", list);
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/initial/selectGroupCodeList.irs")
	public NexacroResult selectGroupCodeList(HttpServletRequest request) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectGroupCodeList ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("delYn", Const.DEL.N);
		
		List<Map<String, Object>> list = initialService.selectGroupCodeList(parameterMap);
		nexacroResult.addDataSet("groupCodeList", list);
		
		return nexacroResult;
	}
	
	/**
	 * 코드상세 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 그룹코드 식별자
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/initial/selectCodeList.irs")
	public NexacroResult selectCodeList(HttpServletRequest request
			, @ParamVariable(name="groupCode") String groupCode) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectCodeList ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("delYn", Const.DEL.N);
		parameterMap.put("groupCode", groupCode);
		
		List<Map<String, Object>> list = initialService.selectCodeList(parameterMap);
		nexacroResult.addDataSet("codeList", list);
		
		return nexacroResult;
	}
	
	/**
	 * 오류메세지 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/initial/selectErrorMessegeList.irs")
	public NexacroResult selectErrorMessegeList(HttpServletRequest request) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectErrorMessegeList ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("delYn", Const.DEL.N);
		
		List<Map<String, Object>> list = initialService.selectErrorMessegeList(parameterMap);
		nexacroResult.addDataSet("errorMessegeList", list);
		
		return nexacroResult;
	}
	
}