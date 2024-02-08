package gov.me.irs.common.initial.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
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
	 * 인증사용자 사용자정보 조회 - 넥사크로N 화면에서 사용할 로그인 후 인증된 사용자정보
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 	- 인증정보로 조회
	 * 
	 * @return
	 */
	@PostMapping("/common/initial/selectUserInfo.irs")
	public NexacroResult selectUserInfo() throws Exception {
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("userId", tableUser.getUserId());
		parameterMap.put("roleIdMgno", UserSession.getRoleKey());
		
		Map<String, Object> map = initialService.selectUserInfo(parameterMap);
		nexacroResult.addDataSet("userInfo", map);
		
		return nexacroResult;
	}
	
	/**
	 * 사용자권한 메뉴 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 	- 인증정보로 조회
	 * 
	 * @return
	 */
	@PostMapping("/common/initial/selectMenuList.irs")
	public NexacroResult selectMenuList() throws Exception {
		
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
		parameterMap.put("scc0001MenuMgno", Const.MENU.SCC0001_MENU_MGNO);
		parameterMap.put("userId", tableUser.getUserId());
		parameterMap.put("userClCd", UserSession.getUserClCd());
		parameterMap.put("roleKey", UserSession.getRoleKey());
		/* 로그인한 사용자가 전체관리자인가 확인하기 */
		parameterMap.put("bizUserYn", UserSession.isBizUserYn());
		parameterMap.put("outsourcingBizOrDirectorBizYn", UserSession.isOutsourcingBizOrDirectorBizYn());
		
		List<Map<String, Object>> list = initialService.selectMenuList(parameterMap);
		nexacroResult.addDataSet("menuList", list);
		
		return nexacroResult;
	}
	
	/**
	 * 그룹코드 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 
	 * @return
	 */
	@PostMapping("/common/initial/selectGroupCodeList.irs")
	public NexacroResult selectGroupCodeList() throws Exception {
		
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
	public NexacroResult selectCodeList(@ParamDataSet(name = "searchCode") Map<String, Object> requestMap) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectCodeList ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		/* 1. 파라미터에 값이 존재하면 */
		if(!ObjectUtils.isEmpty(requestMap.get("groupCodes"))) {
			String groupCodes = (String) requestMap.get("groupCodes");
			
			Set<String> groupCodeSet = new HashSet<String>();
			
			String groupCodeArray[] = groupCodes.split("\\|");
			
			for (String groupCode : groupCodeArray) {
				
				/* 2. 파라미터에 유효값이 존재하면 Set에 담기 */
				if(!groupCode.trim().isEmpty()) {
					groupCodeSet.add(groupCode);
				}
			}
			
			/* 3. Set에 유효값이 존재하면 */
			if(groupCodeSet.size() > Const.NUMERIC.ZERO) {
				Map<String, Object> parameterMap = new HashMap<String, Object>();
				parameterMap.put("delYn", Const.DEL.N);
				parameterMap.put("groupCodeSet", groupCodeSet);
				
				list = initialService.selectCodeList(parameterMap);
			}
		}
		
		nexacroResult.addDataSet("codeList", list);
		
		return nexacroResult;
	}
	
	/**
	 * 오류메세지 목록 조회
	 * 	- Client으로부터의 파라미터정보 : 불필요
	 * 
	 * @return
	 */
	@PostMapping("/common/initial/selectErrorMessegeList.irs")
	public NexacroResult selectErrorMessegeList() throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ selectErrorMessegeList ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("delYn", Const.DEL.N);
		
		List<Map<String, Object>> list = initialService.selectErrorMessegeList(parameterMap);
		nexacroResult.addDataSet("errorMessegeList", list);
		
		return nexacroResult;
	}
	
}