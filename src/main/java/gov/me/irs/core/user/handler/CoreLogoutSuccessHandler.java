package gov.me.irs.core.user.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.provider.JwtTokenProvider;
import gov.me.irs.core.token.service.JwtService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 로그인 인증해제 Handler
 * 
 * @author Justin
 *
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class CoreLogoutSuccessHandler implements LogoutSuccessHandler {
	
	private final JwtTokenProvider jwtTokenProvider;
	
	private final JwtService jwtService;

	/**
	 * 로그아웃 처리
	 * 	- 최종처리시 Refresh Token 삭제처리
	 * 
	 */
	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		
		log.debug("로그아웃! START");
        if(StringUtils.hasText(request.getHeader("User-Agent"))) {
    		// 헤더에서 JWT 를 받아옵니다.
    		String accessToken = jwtTokenProvider.resolveAccessToken(request);
    		String refreshToken = jwtTokenProvider.resolveRefreshToken(request);
    		
			if (accessToken == null) {
				log.debug("[로그아웃 CASE][1]");
				/* ■■■■■■■■■■■■■■■■■■■■ 1. Access Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
				CoreUtil.setResponse(response, JwtAuthEnum.AUTHENTICATION_ACCESS_UNKNOWN_ERROR);
				
			} else if (refreshToken == null) {
				log.debug("[로그아웃 CASE][2]");
				/* ■■■■■■■■■■■■■■■■■■■■ 2. Refresh Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
				CoreUtil.setResponse(response, JwtAuthEnum.AUTHENTICATION_REFRESH_UNKNOWN_ERROR);
				
			} else if (!jwtTokenProvider.validateRefreshToken(refreshToken)) {
				log.debug("[로그아웃 CASE][3]");
				/* ■■■■■■■■■■■■■■■■■■■■ 3. Refresh Token 검증 실패 ■■■■■■■■■■■■■■■■■■■■ */
				CoreUtil.setResponse(response, JwtAuthEnum.AUTHENTICATION_EXPIRED_TOKEN);
				
			} else {
				String userAgent = request.getHeader("User-Agent");
				long result = jwtService.logout(accessToken, refreshToken, userAgent);
				
				log.debug("[로그아웃 처리 결과][result][{}]", result);
				
				/* 로그아웃 처리 */
				if(result > 0) {
					log.debug("[로그아웃 CASE][4]");
					CoreUtil.setResponse(response, JwtAuthEnum.LOGOUT);
				}
				/* 이미 로그아웃된 사용자인증정보 */
				else {
					log.debug("[로그아웃 CASE][5]");
					CoreUtil.setResponse(response, JwtAuthEnum.LOGOUT_UNKNOWN_STATE);
				}
			}
			
    		log.debug("로그아웃! - 로그아웃 처리");
        } else {
        	log.debug("[로그아웃 CASE][6]");
        	CoreUtil.setResponse(response, JwtAuthEnum.LOGOUT_MISSING_PARAMETERS);
    		log.debug("로그아웃! - 파라미터 누락");
        }
		
		log.debug("로그아웃! END");
        
	}

}
