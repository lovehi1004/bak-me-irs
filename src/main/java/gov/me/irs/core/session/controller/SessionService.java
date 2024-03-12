package gov.me.irs.core.session.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.config.property.JwtProperties;
import gov.me.irs.core.provider.JwtTokenProvider;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 인증정보 관련 공통 Service
 * 
 * @author Justin
 *
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SessionService {
	
	private final JwtProperties jwtProperties;
	
	private final JwtTokenProvider jwtTokenProvider;
	
	/**
	 * 유효인증 체크
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean check(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		// jwt 헤더정보
		String accessToken = jwtTokenProvider.resolveAccessToken(request);
		String refreshToken = jwtTokenProvider.resolveRefreshToken(request);
		
		if (accessToken == null) {
			log.debug("■■■■■■■■■■▶ [Access Token 누락]");
			return false;
		} else if (refreshToken == null) {
			log.debug("■■■■■■■■■■▶ [Refresh Token 누락]");
			return false;
		}
		// 토큰 유효성 검증
		else {
			
			// Access Token 검증
			boolean validateAccessToken = jwtTokenProvider.validateAccessToken(accessToken);
			
			// Refresh Token 검증
			boolean validateRefreshToken = false;
			
			try {
				validateRefreshToken = jwtTokenProvider.validateRefreshToken(refreshToken);
			} catch (ExpiredJwtException e) {
				log.debug("■■■■■■■■■■▶ [Refresh Token 만료]");
				/* Refresh Token이 만료되면 false로 반환처리 */
				return false;
			}
			
			// Refresh Token 저장소 존재유무 확인
			boolean isRefreshToken = jwtTokenProvider.existsRefreshToken(refreshToken);
			
			if(!isRefreshToken) {
				log.debug("■■■■■■■■■■▶ [강제 로그아웃 상태]");
				/* 강제 로그아웃 처리시 */
				return false;
			}
			
			/* 세션체크 */
			HttpSession session = null;
	    	if(request.getSession(false) == null) {
	    		log.debug("■■■■■■■■■■▶ [세션 없음]");
	    		return false;
	    	} else {
	    		session = request.getSession(false);
	    		log.debug("■■■■■■■■■■▶ [기존 세션 불러오기]");
	    	}
	    	
			/* Access Token 유효기간에는 Refresh Token도 유효하므로 Refresh Token 검증실패시엔 Refresh Token이 변조되었다고 판단한다 */
			if (validateAccessToken) {
				
				log.debug("■■■■■■■■■■▶ [Access Token 유효]");
				
				if (validateRefreshToken && isRefreshToken) {
					log.debug("■■■■■■■■■■▶ [Access Token 유효][Refresh Token 유효][Refresh Token - DB에 존재함]");
					
					/* 유효한 RefreshToken정보로 부터 role 권한정보 취득 */
					String lgnId = jwtTokenProvider.getLgnIdByRefreshToken(refreshToken);
					
					String sessionLgnId = (String) session.getAttribute("lgnId");
		    		if(lgnId.equals(sessionLgnId)) {
		    			log.debug("■■■■■■■■■■▶ [세션 유효]");
		    			return true;
		    			
		    		} else {
		    			log.debug("■■■■■■■■■■▶ [세션 유효하지 않음]");
		    			return false;
		    		}
					
				} else {
					log.debug("■■■■■■■■■■▶ [Refresh Token 유효하지 않음]");
					return false;
				}
				
			// Access Token 만료
			} else {
				
				// Refresh Token 유효
				if (validateRefreshToken && isRefreshToken) {
					
					/* 유효한 RefreshToken정보로 부터 role 권한정보 취득 */
					String lgnId = jwtTokenProvider.getLgnIdByRefreshToken(refreshToken);
					
					String sessionLgnId = (String) session.getAttribute("lgnId");
		    		if(lgnId.equals(sessionLgnId)) {
		    			log.debug("■■■■■■■■■■▶ [세션 유효 - Token 재발급처리]");
		    			
						log.debug("▶▶▶▶ 3. invalid accessToken and valid refreshToken");
						// Refresh Token으로 사용자인증 식별자 조회
						String identifier = jwtTokenProvider.getLgnIdByRefreshToken(refreshToken);
						// 사용자인증 식별자로 역할정보 조회
						List<String> roles = jwtTokenProvider.getRoles(identifier);
						
						/* 유효한 RefreshToken정보로 부터 role 권한정보 취득 */
						String role = jwtTokenProvider.getRoleByRefreshToken(refreshToken);
						
						// Token 재발급
						String newAccessToken = jwtTokenProvider.createAccessToken(identifier, roles, role);
						String newRefreshToken = jwtTokenProvider.createRefreshToken(identifier, roles, role);
						
						// 재발급 된 Refresh Token 저장소에 갱신
						String userAgent = request.getHeader("User-Agent");
						jwtTokenProvider.updateRefreshToken(identifier, userAgent, newRefreshToken);
						
						// 헤더에 재발급 된 Token정보 설정
						jwtTokenProvider.setHeaderReissueToken(response);
						jwtTokenProvider.setHeaderAccessToken(response, newAccessToken);
						jwtTokenProvider.setHeaderRefreshToken(response, newRefreshToken);
													
						// 재발급 된 Token정보로 인증정보 생성
						log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶ newAccessToken][{}]", newAccessToken);
						
						session.setMaxInactiveInterval((int) (jwtProperties.refreshToken.validTime/1000));		/* Refresh Token 만료시간으로 설정 */

						
		    			return true;
		    			
		    		} else {
		    			log.debug("■■■■■■■■■■▶ [세션 유효하지 않음]");
		    			return false;
		    		}
				} else {
					log.debug("■■■■■■■■■■▶ [Refresh Token 만료]");
					return false;
				}
			}
		}
		
	}
	
}
