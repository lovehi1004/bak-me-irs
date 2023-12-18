package gov.me.irs.core.session.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
//import gov.me.irs.core.provider.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 인증정보 관련 공통 Controller
 * 
 * @author Justin
 *
 */
@Slf4j
@Controller
@RequiredArgsConstructor
public class SessionController {
	
	/**
	 * 유효인증 체크 - 웹페이지 F5 새로고침, Access Token이 유효하지 않으면 유효하지 않음
	 * 
	 * @param requestMap
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/session/check")
	public NexacroResult check(HttpServletRequest request, HttpServletResponse response) throws Exception {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		boolean result = false;
		
		HttpSession session = request.getSession(false);
		
		boolean hasSession = false;
		String lgnId = StringUtils.EMPTY;
				
		if(session != null) {
			hasSession = true;
			lgnId = (String) session.getAttribute(Const.SESSION.KEY);
			if(!ObjectUtils.isEmpty(lgnId)) {
				result = true;
			}
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* 로그인이 요구되는 상황 */
		if(!result) {
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.SESSION_INVALID));
		}
		
		log.debug("[유효인증 체크 결과][{}][세션이 존재하는가][{}][세션키][{}]", String.valueOf(result), String.valueOf(hasSession), lgnId);
		
		return nexacroResult;
	}
	
}