package gov.me.irs.core.session.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.provider.JwtTokenProvider;
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
	
	private final JwtTokenProvider jwtTokenProvider;
	
	/**
	 * 유효인증 체크
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean check(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		boolean result = false;
		
		// jwt 헤더정보
		String accessToken = jwtTokenProvider.resolveAccessToken(request);
		String refreshToken = jwtTokenProvider.resolveRefreshToken(request);
		
		if (accessToken == null) {
			log.debug("▶▶▶▶▶▶▶▶▶▶ [1. Access Token 누락시]");
			/* ■■■■■■■■■■■■■■■■■■■■ 1. Access Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
			result = false;
			log.debug("■■■■■■■■■■▶ [유효인증 체크 - 1]");
		} else if (refreshToken == null) {
			log.debug("▶▶▶▶▶▶▶▶▶▶ [2. Refresh Token 누락시]");
			/* ■■■■■■■■■■■■■■■■■■■■ 2. Refresh Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
			result = false;
			log.debug("■■■■■■■■■■▶ [유효인증 체크 - 2]");
		}
		// 토큰 유효성 검증
		else {
			
			// Access Token 검증
			boolean validateAccessToken = jwtTokenProvider.validateAccessToken(accessToken);
			// Refresh Token 검증
			boolean validateRefreshToken = jwtTokenProvider.validateRefreshToken(refreshToken);
			// Refresh Token 저장소 존재유무 확인
			boolean isRefreshToken = jwtTokenProvider.existsRefreshToken(refreshToken);
			
			/* Access Token 유효기간에는 Refresh Token도 유효하므로 Refresh Token 검증실패시엔 Refresh Token이 변조되었다고 판단한다 */
			if (validateAccessToken) {
				
				log.debug("▶▶▶▶ 1. valid accessToken");
				
				if (validateRefreshToken && isRefreshToken) {
					
					/* 유효한 RefreshToken정보로 부터 role 권한정보 취득 */
					String role = jwtTokenProvider.getRoleByRefreshToken(refreshToken);
					
					String lgnId = jwtTokenProvider.getLgnIdByRefreshToken(refreshToken);
					
					log.debug("▶▶▶▶ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공");
					/* ■■■■■■■■■■■■■■■■■■■■ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공 ■■■■■■■■■■■■■■■■■■■■ */
					
					HttpSession session = request.getSession(false);
					String sessionLgnId = (String) session.getAttribute("lgnId");
					
					if(lgnId.equals(sessionLgnId)) {
						result = true;
						log.debug("■■■■■■■■■■▶ [유효인증 체크 - 3]");
						
						jwtTokenProvider.setAuthentication(accessToken, role, false);
						
					} else {
						return false;
					}
					
				} else if (validateRefreshToken && !isRefreshToken) {
					log.debug("▶▶▶▶ 2-2. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실");
					/* ■■■■■■■■■■■■■■■■■■■■ 2-2. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실 ■■■■■■■■■■■■■■■■■■■■ */
					result = false;
					log.debug("■■■■■■■■■■▶ [유효인증 체크 - 4]");
					
				} else if (!validateRefreshToken) {
					log.debug("▶▶▶▶ 2-3. Access Token 유효 and Refresh Token 변조 - Refresh Token 변조 상태");
					/* ■■■■■■■■■■■■■■■■■■■■ 2-3. Access Token 유효 and Refresh Token 변조 - Refresh Token 변조 상태 ■■■■■■■■■■■■■■■■■■■■ */
					result = false;
					log.debug("■■■■■■■■■■▶ [유효인증 체크 - 5]");

				}
				
			}
			// Access Token 만료
			else if (!validateAccessToken) {
				result = false;
			}
		}
		
		return result;
	}
	
}
