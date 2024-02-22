package gov.me.irs.core.token.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.config.property.JwtProperties;
import gov.me.irs.core.token.JwtToken;
import gov.me.irs.core.token.constants.JwtConst;
import gov.me.irs.core.token.entity.TableRefreshToken;
import gov.me.irs.core.token.repository.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 JWT 인증 서비스
 * 
 * @author Justin
 *
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class JwtService {
	
	private final JwtProperties jwtProperties;
	
	private final RefreshTokenRepository refreshTokenRepository;
	
	@Transactional(rollbackFor = Exception.class)
	public long logout(String accessToken, String refreshToken, String userClntCn){
		if(refreshTokenRepository.existsByRefreshTknCnAndUserClntCn(refreshToken, userClntCn)){
			log.debug("[로그아웃처리 - 기존의 존재하는 refresh 토큰 삭제][{}][{}][{}]", accessToken, refreshToken, userClntCn);
			return refreshTokenRepository.deleteByRefreshTknCnAndUserClntCn(refreshToken, userClntCn);
		}
		
		return Integer.MIN_VALUE;
	}
	
	@Transactional(rollbackFor = Exception.class)
	public void login(HttpServletRequest request, JwtToken jwtToken, String userAgent){
		
		String refreshToken = jwtToken.getRefreshToken();
		
		if(refreshToken.length() > JwtConst.HTTP_HEADER_AUTH_TYPE.length()) {
			refreshToken = refreshToken.substring(JwtConst.HTTP_HEADER_AUTH_TYPE.length());
		}
		
		
		TableRefreshToken tableRefreshToken = TableRefreshToken.builder()
				.lgnId(jwtToken.getKey())
				.refreshTknCn(refreshToken)
				.userClntCn(userAgent)
				.build();
		
		String lgnId = tableRefreshToken.getLgnId();
		log.debug("[loginUserId][{}]", lgnId);
		
		// 중복로그인 방지처리 - User-Agent정보를 제외한 사용자인증 식별자로만 삭제처리
		if(refreshTokenRepository.existsByLgnId(lgnId)){
			log.debug("기존의 존재하는 refresh 토큰 삭제1");
			refreshTokenRepository.deleteByLgnId(lgnId);
			log.debug("기존의 존재하는 refresh 토큰 삭제2");
		}
		
		/* 세션생성 */
		HttpSession session = request.getSession(true);
		session.setAttribute("lgnId", lgnId);
		session.setMaxInactiveInterval((int) (jwtProperties.accessToken.validTime/1000) - (5 * 60));		/* 5분 적게 설정 */
		
		refreshTokenRepository.save(tableRefreshToken);
		
	}
	
	/**
	 * Refresh Token 저장소에 갱신
	 * 
	 * @param lgnId
	 * @param userClntCn
	 * @param newRefreshToken
	 */
	@Transactional(rollbackFor = Exception.class)
    public void updateRefreshToken(String lgnId, String userClntCn, String newRefreshToken) {
    	TableRefreshToken tableRefreshToken = TableRefreshToken.builder()
    			.lgnId(lgnId)
    			.refreshTknCn(newRefreshToken)
    			.userClntCn(userClntCn)
    			.build();
    	
    	// Refresh Token + User-Agent정보로 저장소에서 조회
		if(refreshTokenRepository.existsByLgnIdAndUserClntCn(lgnId, userClntCn)){
			log.info("기존의 존재하는 refresh 토큰 삭제");
			refreshTokenRepository.deleteByLgnIdAndUserClntCn(lgnId, userClntCn);
		}
    	
    	refreshTokenRepository.save(tableRefreshToken);
    }
	
}