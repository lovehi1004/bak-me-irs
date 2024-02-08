package gov.me.irs.core.session.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	 * 권한 목록 조회
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
					
					log.debug("▶▶▶▶ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공");
					/* ■■■■■■■■■■■■■■■■■■■■ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공 ■■■■■■■■■■■■■■■■■■■■ */
					result = true;
					log.debug("■■■■■■■■■■▶ [유효인증 체크 - 3]");
					
					jwtTokenProvider.setAuthentication(accessToken, role, false);
					
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
				
				// Refresh Token 유효
				if (validateRefreshToken && isRefreshToken) {
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
					jwtTokenProvider.setAuthentication(newAccessToken, role, true);
					
					result = true;
					log.debug("■■■■■■■■■■▶ [유효인증 체크 - 6]");
					
				} else {
					log.debug("▶▶▶▶ 3. invalid accessToken and invalid refreshToken");
					if(!validateRefreshToken) {
						log.debug("▶▶▶▶ 3-1. Access Token 만료 and Refresh Token 검증실패 - Refresh Token 변조 or 만료 상태");
						/* ■■■■■■■■■■■■■■■■■■■■ 3-1. Access Token 만료 and Refresh Token 검증실패 - Refresh Token 변조 or 만료 상태 ■■■■■■■■■■■■■■■■■■■■ */
						/* Refresh Token이 유효하지 않으므로 이후는 재인증(재로그인)을 유도하도록 한다. */
						result = false;
						log.debug("■■■■■■■■■■▶ [유효인증 체크 - 7]");
					} else if(!isRefreshToken) {
						log.debug("▶▶▶▶ 3-2. Access Token 만료 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실");
						/* ■■■■■■■■■■■■■■■■■■■■ 3-2. Access Token 만료 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실 ■■■■■■■■■■■■■■■■■■■■ */
						result = false;
						log.debug("■■■■■■■■■■▶ [유효인증 체크 - 8]");
					}
					
				}
			}
		}
		
		return result;
	}
	
}
