package gov.me.irs.core.session.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
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
	
	private final SessionService sessionService;
	
	/**
	 * 유효인증 체크
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/session/check.irs")
	public NexacroResult check(HttpServletRequest request, HttpServletResponse response) throws Exception {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		boolean result = sessionService.check(request, response);
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* 로그인이 요구되는 상황 */
		if(!result) {
			log.debug("■■■■■■■■■■▶ [유효인증 체크 결과][실패]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.SESSION_INVALID));
		}
		
		log.debug("[유효인증 체크 결과][{}]", String.valueOf(result));
		
		return nexacroResult;
	}
	
}