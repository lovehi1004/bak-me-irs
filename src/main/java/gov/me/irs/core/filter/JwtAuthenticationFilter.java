package gov.me.irs.core.filter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.util.ClientUtil;
import gov.me.irs.core.config.property.CoreProperties;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.provider.JwtTokenProvider;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 JWT 인증 필터
 * 
 * @author Justin
 *
 */
@Slf4j
@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	private final JwtTokenProvider jwtTokenProvider;
	
	private final CoreProperties coreProperties;
	
	/**
	 * Filter 제외 범위설정
	 */
	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
		
		String ip = ClientUtil.getIp(request);
		MDC.put(Const.MDC.IP, ip);
		
		String uri = request.getRequestURI().substring(request.getContextPath().length());
		
		/* uri 확장자 */
		int lastIndex = uri.lastIndexOf(".");
		String ext = lastIndex >= 0 ? uri.substring(lastIndex+1) : "";
//		log.debug("[URI][{}][URL][{}][ext][{}]", uri, request.getRequestURL(), ext);
		
		boolean isShouldNotFilter = false;
		
		/* 1. *.irs 패턴이 아니라면 필터 - Skip */
		if(!Const.SERVICE.EXT.equals(ext)) {
			isShouldNotFilter = true;
		/* 2. 라온K 서블릿 이라면 - Skip */
		} else if(coreProperties.raon.url.raonkhandler.equals(uri) || coreProperties.raon.url.raonkviewer.equals(uri)) {
			isShouldNotFilter = true;
		/* 3. /common/rsa.irs - RSA Skip */
		} else if("/common/rsa.irs".equals(uri)) {
			isShouldNotFilter = true;
		/* 유효인증 체크 서비스 - Skip */
		} else if("/session/check.irs".equals(uri)) {
			isShouldNotFilter = true;
		/* F5 새로고침시 일괄 호출되는 미인증 서비스 - Skip */
		} else if(Arrays.asList(
				  "/common/board/selectMainAgrCnt.irs"
				, "/common/board/selectMainMhdlgCnt.irs"
				, "/common/board/selectMainBizCnt.irs"
				, "/common/board/selectBoardListLogin.irs"
				).contains(uri)) {
			isShouldNotFilter = true;
		}
		return isShouldNotFilter;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		
		log.debug("▶▶▶▶▶▶▶▶▶▶ [JwtAuthenticationFilter]");
		String uri = request.getRequestURI().substring(request.getContextPath().length());
		
		/* uri 확장자 */
		int lastIndex = uri.lastIndexOf(".");
		String ext = lastIndex >= 0 ? uri.substring(lastIndex+1) : "";
		log.debug("[Request 정보 확인 ▶▶▶▶▶▶▶▶▶▶][URI][{}][URL][{}][ext][{}]", uri, request.getRequestURL(), ext);

		try {
			if(request.getAttribute("exception") == null) {
				
				// jwt 헤더정보
				String accessToken = jwtTokenProvider.resolveAccessToken(request);
				String refreshToken = jwtTokenProvider.resolveRefreshToken(request);
				
				if (accessToken == null) {
					log.debug("▶▶▶▶▶▶▶▶▶▶ [1. Access Token 누락시]");
					/* ■■■■■■■■■■■■■■■■■■■■ 1. Access Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
					request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_ACCESS_UNKNOWN_ERROR.getCode());
				} else if (refreshToken == null) {
					log.debug("▶▶▶▶▶▶▶▶▶▶ [2. Refresh Token 누락시]");
					/* ■■■■■■■■■■■■■■■■■■■■ 2. Refresh Token 누락시 ■■■■■■■■■■■■■■■■■■■■ */
					request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_REFRESH_UNKNOWN_ERROR.getCode());
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
							jwtTokenProvider.setAuthentication(accessToken, role, false);
							
						} else if (validateRefreshToken && !isRefreshToken) {
							log.debug("▶▶▶▶ 2-2. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실");
							/* ■■■■■■■■■■■■■■■■■■■■ 2-2. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실 ■■■■■■■■■■■■■■■■■■■■ */
							request.setAttribute("exception", JwtAuthEnum.LOGOUT_UNKNOWN_STATE.getCode());
							
						} else if (!validateRefreshToken) {
							log.debug("▶▶▶▶ 2-3. Access Token 유효 and Refresh Token 변조 - Refresh Token 변조 상태");
							/* ■■■■■■■■■■■■■■■■■■■■ 2-3. Access Token 유효 and Refresh Token 변조 - Refresh Token 변조 상태 ■■■■■■■■■■■■■■■■■■■■ */
							request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_REFRESH_UNSUPPORTED_TOKEN.getCode());

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
							
						} else {
							log.debug("▶▶▶▶ 3. invalid accessToken and invalid refreshToken");
							if(!validateRefreshToken) {
								log.debug("▶▶▶▶ 3-1. Access Token 만료 and Refresh Token 검증실패 - Refresh Token 변조 or 만료 상태");
								/* ■■■■■■■■■■■■■■■■■■■■ 3-1. Access Token 만료 and Refresh Token 검증실패 - Refresh Token 변조 or 만료 상태 ■■■■■■■■■■■■■■■■■■■■ */
								/* Refresh Token이 유효하지 않으므로 이후는 재인증(재로그인)을 유도하도록 한다. */
								request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_EXPIRED_TOKEN.getCode());
							} else if(!isRefreshToken) {
								log.debug("▶▶▶▶ 3-2. Access Token 만료 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실");
								/* ■■■■■■■■■■■■■■■■■■■■ 3-2. Access Token 만료 and Refresh Token 유효 and Refresh Token DB 없음 - 강제 로그아웃 or 데이터 유실 ■■■■■■■■■■■■■■■■■■■■ */
								request.setAttribute("exception", JwtAuthEnum.LOGOUT_UNKNOWN_STATE.getCode());
							}
							
							log.debug("▶▶▶▶ 5. invalid refreshToken");
						}
					}
				}
				
			} else {
				log.debug("▶▶▶▶▶▶▶▶▶▶ [예외처리 요청인 경우 ▶▶▶▶▶▶▶▶ 예외처리 리다이렉트]");
			}
			
			filterChain.doFilter(request, response);
			
		} catch (ExpiredJwtException e) {
			//만료 에러 - Jwt Libarary내부처리
            request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_EXTRA_ERROR_8011.getCode());
		} catch (MalformedJwtException e) {
			//변조 에러 - Jwt Libarary내부처리
            request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_EXTRA_ERROR_8012.getCode());
		} catch (SignatureException e) {
			//형식, 길이 에러 - Jwt Libarary내부처리
            request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_EXTRA_ERROR_8013.getCode());
		} catch (Exception e) {
			//그밖의 에러
			request.setAttribute("exception", JwtAuthEnum.AUTHENTICATION_UNKNOWN_ERROR.getCode());
		}
        
	}
	


}