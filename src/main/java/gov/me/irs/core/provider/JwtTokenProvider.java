package gov.me.irs.core.provider;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import gov.me.irs.core.token.entity.TableRefreshToken;
import gov.me.irs.common.constants.Const;
import gov.me.irs.core.jwt.util.JwtUtil;
import gov.me.irs.core.token.constants.JwtConst;
import gov.me.irs.core.token.service.JwtService;
import gov.me.irs.core.token.repository.RefreshTokenRepository;
import gov.me.irs.core.user.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 JWT 인증관련 Provider
 * 
 * @author Justin
 *
 */
@Slf4j
@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
	//Header 부분 설정
	public static final Map<String, Object> headers = new HashMap<String, Object>();
    static {
    	headers.put("typ", "JWT");
    	headers.put("alg", "HS256");			//HMAC with SHA-256
    }
	
	@Value("${jwt.access-token.secret-key}")
	private String accessTokenSecretKey;
	
	@Value("${jwt.access-token.valid-time}")
	private long accessTokenValidTime;
	
	@Value("${jwt.refresh-token.secret-key}")
	private String refreshTokenSecretKey;
	
	@Value("${jwt.refresh-token.valid-time}")
	private long refreshTokenValidTime;
	
	/* Token 정보 (Signature) */
    private SecretKey accessTokenKey;
    private SecretKey refreshTokenKey;
	
    private final JwtService jwtService;
	private final UserDetailsService userDetailsService;
	
	private final UserRepository userRepository;
	private final RefreshTokenRepository refreshTokenRepository;
	
	/**
	 * Token Base64인코딩
	 */
	@PostConstruct
	protected void init() {
		this.accessTokenKey = Keys.hmacShaKeyFor(accessTokenSecretKey.getBytes(StandardCharsets.UTF_8));
		this.refreshTokenKey = Keys.hmacShaKeyFor(refreshTokenSecretKey.getBytes(StandardCharsets.UTF_8));
	}
	
	/**
	 * Token 발급
	 * 
	 * @param lgnId
	 * @param roles
	 * @param tokenKey
	 * @param tokenValidTime
	 * @return
	 */
    public String createToken(String lgnId, List<String> roles, SecretKey tokenKey, long tokenValidTime) {
    	
		Claims payloads = Jwts.claims().setSubject(lgnId);		// 사용자인증 식별자 설정
		payloads.put("roles", roles);									// payloads 설정
        Date now = new Date();
        
        return Jwts.builder()
        		.setHeader(headers) // Headers 설정
                .setClaims(payloads) // 발행 유저 정보 저장
                .setIssuedAt(now) // 발행 시간 저장
                .setExpiration(new Date(now.getTime() + tokenValidTime)) // 토큰 만료 시간 설정
                .signWith(tokenKey, SignatureAlgorithm.HS256)				// 사용할 암호화 알고리즘과 signature 에 들어갈 secret값 세팅
                .compact(); // 생성
    }
    
    /**
     * Access Token 발급
     * 
     * @param lgnId
     * @param roles
     * @return
     */
	public String createAccessToken(String lgnId, List<String> roles){
		log.debug("accessToken 생성완료");
		return this.createToken(lgnId, roles, accessTokenKey, accessTokenValidTime);
	}
	
	/**
     * Refresh Token 발급
	 * 
	 * @param lgnId
	 * @param roles
	 * @return
	 */
	public String createRefreshToken(String lgnId, List<String> roles) {
		log.debug("refreshToken 생성완료");
		return this.createToken(lgnId, roles, refreshTokenKey, refreshTokenValidTime);
	}
    
	/**
	 * Refresh Token 유효성 검증
	 * 
	 * @param tableRefreshToken
	 * @return
	 */
	public String validateRefreshToken(TableRefreshToken tableRefreshToken){
        // Refresh Token 추출
        String refreshToken = tableRefreshToken.getRefreshTknCn();

        try {
            // 검증
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(refreshTokenKey).build().parseClaimsJws(refreshToken);

            // Refresh Token 만료전 재발급
            if (!claims.getBody().getExpiration().before(new Date())) {
                return recreationAccessToken(claims.getBody().get("sub").toString(), claims.getBody().get("roles"));
            }
        }catch (Exception e) {
        	// Refresh Token 만료시, 이후 프로세스에서 재인증 유도
            return null;
        }
        return null;
    }
	
	/**
	 * Access Token 발급
	 * 
	 * @param lgnId
	 * @param roles
	 * @return
	 */
	public String recreationAccessToken(String lgnId, Object roles){
		
		Claims payloads = Jwts.claims().setSubject(lgnId);
		payloads.put("roles", roles);
		Date now = new Date();
		
		//Access Token
		String accessToken = Jwts.builder()
				.setHeader(headers) // Headers 설정
				.setClaims(payloads) // 정보 저장
				.setIssuedAt(now) // 토큰 발행 시간 정보
				.setExpiration(new Date(now.getTime() + accessTokenValidTime)) // 토큰 만료 시간 설정
				.signWith(accessTokenKey, SignatureAlgorithm.HS256)				// 사용할 암호화 알고리즘과 signature 에 들어갈 secret값 세팅
				.compact();
		
		return accessToken;
	}
	
	/**
	 * Token정보로 부터 인증정보 취득
	 * 
	 * @param token
	 * @return
	 */
	public Authentication getAuthentication(String token) {
		UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserId(accessTokenKey, token));
		
//		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [START-service]");
//		for (GrantedAuthority a : userDetails.getAuthorities()) {
//			log.debug("[roleName]["+a.getAuthority()+"]");
//		}
//		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [END-service]");

		return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
	}
	
	/**
	 * Token정보로 부터 사용자인증 식별자 취득
	 * 
	 * @param tokenKey
	 * @param token
	 * @return
	 */
	public String getUserId(SecretKey tokenKey, String token) {
		return Jwts.parserBuilder().setSigningKey(tokenKey).build().parseClaimsJws(token).getBody().getSubject();
	}
	
	/**
	 * Refresh Token정보로 부터 사용자인증 식별자 취득
	 * 
	 * @param tokenKey
	 * @param token
	 * @return
	 */
	public String getUserIdByRefreshToken(String token) {
		return this.getUserId(refreshTokenKey, token);
	}
	
	/**
	 * 사용자요청 헤더정보로 부터 Access Token 추출
	 * 	- "Authorization" : "Bearer TOKEN값"
	 * 
	 * @param request
	 * @return
	 */
	public String resolveAccessToken(HttpServletRequest request) {
        if(request.getHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY) != null) {
        	return request.getHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY).substring((JwtConst.HTTP_HEADER_AUTH_TYPE + JwtUtil.newBlankString(1)).length());
        }
        return null;
	}
	
	/**
	 * 사용자요청 헤더정보로 부터 Refresh Token 추출
	 * 	- "RefreshToken" : "Bearer TOKEN값"
	 * 
	 * @param request
	 * @return
	 */
	public String resolveRefreshToken(HttpServletRequest request) {
        if(request.getHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY) != null) {
        	return request.getHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY).substring((JwtConst.HTTP_HEADER_AUTH_TYPE + JwtUtil.newBlankString(1)).length());
        }
        return null;
	}
	
	/**
	 * Access Token 검증
	 * 
	 * @param token
	 * @return
	 */
	public boolean validateAccessToken(String token) {
		return this.validateToken(accessTokenKey, token);
	}
	
	/**
	 * Refresh Token 검증
	 * 
	 * @param token
	 * @return
	 */
	public boolean validateRefreshToken(String token) {
		return this.validateToken(refreshTokenKey, token);
	}
	
	/**
	 * Token정보 검증
	 * 
	 * @param tokenKey
	 * @param token
	 * @return
	 */
	private boolean validateToken(SecretKey tokenKey, String token) {
		try {
			Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(tokenKey).build().parseClaimsJws(token);
			return !claims.getBody().getExpiration().before(new Date());
		} catch (Exception e) {
			return false;
		}
	}
	
	/**
	 * Token 발급정보 헤더설정
	 * 
	 * @param response
	 * @param accessToken
	 */
    public void setHeaderIssueToken(HttpServletResponse response) {
    	log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ 발급 됬어요! ◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀]");
    	log.debug("[Tokens is issued]");
        response.setHeader(JwtConst.JWT_HTTP_HEADER_ISSUE_TOKEN_KEY, Const.NEW.Y);
    }
    
    /**
     * Token 재발급정보 헤더설정
     * 
     * @param response
     * @param accessToken
     */
    public void setHeaderReissueToken(HttpServletResponse response) {
    	log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ 재발급 됬어요! ◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀◀]");
    	log.debug("[Tokens is reissued]");
    	response.setHeader(JwtConst.JWT_HTTP_HEADER_REISSUE_TOKEN_KEY, Const.NEW.Y);
    }
    
    /**
     * Access Token정보 헤더설정
     * 
     * @param response
     * @param accessToken
     */
    public void setHeaderAccessToken(HttpServletResponse response, String accessToken) {
    	response.setHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY, JwtConst.HTTP_HEADER_AUTH_TYPE + JwtUtil.newBlankString(1) + accessToken);
    }
    
    /**
	 * Refresh Token정보 헤더설정
     * 
     * @param response
     * @param refreshToken
     */
    public void setHeaderRefreshToken(HttpServletResponse response, String refreshToken) {
        response.setHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY, JwtConst.HTTP_HEADER_AUTH_TYPE + JwtUtil.newBlankString(1) + refreshToken);
    }
    
    /**
     * Refresh Token 저장소 존재유무 확인
     * 
     * @param refreshToken
     * @return
     */
    public boolean existsRefreshToken(String refreshToken) {
        return refreshTokenRepository.existsByRefreshTknCn(refreshToken);
    }

    /**
     * 사용자인증 식별자로 역할정보 조회
     * 
     * @param lgnId
     * @return
     */
    public List<String> getRoles(String lgnId) {
        return userRepository.findByLgnId(lgnId).getRoles();
    }
    
    /**
     * 재발급 된 Refresh Token 저장소에 갱신
     * 
     * @param lgnId
     * @param userClntCn
     * @param newRefreshToken
     */
    public void updateRefreshToken(String lgnId, String userClntCn, String newRefreshToken) {
    	jwtService.updateRefreshToken(lgnId, userClntCn, newRefreshToken);
    }
    
}