package gov.me.irs.core.filter;

import java.io.IOException;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

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
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	private final JwtTokenProvider jwtTokenProvider;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		
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
							log.debug("▶▶▶▶ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공");
							/* ■■■■■■■■■■■■■■■■■■■■ 2-1. Access Token 유효 and Refresh Token 유효 and Refresh Token DB 있음 ▶ 인증성공 ■■■■■■■■■■■■■■■■■■■■ */
							this.setAuthentication(accessToken);
							
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
							String email = jwtTokenProvider.getUserIdByRefreshToken(refreshToken);
							// 사용자인증 식별자로 역할정보 조회
							List<String> roles = jwtTokenProvider.getRoles(email);
							
							// Token 재발급
							String newAccessToken = jwtTokenProvider.createAccessToken(email, roles);
							String newRefreshToken = jwtTokenProvider.createRefreshToken(email, roles);
							
							// 재발급 된 Refresh Token 저장소에 갱신
							String userAgent = request.getHeader("User-Agent");
							jwtTokenProvider.updateRefreshToken(email, userAgent, newRefreshToken);
							
							// 헤더에 재발급 된 Token정보 설정
							jwtTokenProvider.setHeaderReissueToken(response);
							jwtTokenProvider.setHeaderAccessToken(response, newAccessToken);
							jwtTokenProvider.setHeaderRefreshToken(response, newRefreshToken);
							
							// 재발급 된 Token정보로 인증정보 생성
							this.setAuthentication(newAccessToken);
							
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
				log.debug("▶▶▶▶▶▶▶▶▶▶ [예외처리 리다이렉트]");
			}
			
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
        
		filterChain.doFilter(request, response);
	}
	
	/**
	 * Token정보로 인증정보 생성
	 * 
	 * @param token
	 */
    public void setAuthentication(String token) {
    	log.debug("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ [setAuthentication] ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶");
    	
    	// Token정보로 부터 인증정보 취득
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        // 인증정보 갱신
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
	
}