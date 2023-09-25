package gov.me.irs.core.token.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.token.JwtToken;
import gov.me.irs.core.token.entity.TableRefreshToken;
import gov.me.irs.core.token.repository.RefreshTokenRepository;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
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
	
	private final RefreshTokenRepository refreshTokenRepository;
	
	/**
	 * 로그아웃 처리
	 * 
	 * @param accessToken
	 * @param refreshToken
	 * @param userClntCn
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public long logout(String accessToken, String refreshToken, String userClntCn){
		if(refreshTokenRepository.existsByRefreshTknCnAndUserClntCn(refreshToken, userClntCn)){
			log.debug("[로그아웃처리 - 기존의 존재하는 refresh 토큰 삭제][{}][{}][{}]", accessToken, refreshToken, userClntCn);
			return refreshTokenRepository.deleteByRefreshTknCnAndUserClntCn(refreshToken, userClntCn);
		}
		
		return Integer.MIN_VALUE;
	}
	
	/**
	 * 로그인 처리
	 * 
	 * @param jwtToken
	 * @param userClCdEnum
	 * @param role
	 */
	@Transactional(rollbackFor = Exception.class)
	public void login(JwtToken jwtToken, UserClCdEnum userClCdEnum, String role){
		
		TableRefreshToken tableRefreshToken = TableRefreshToken.builder()
				.lgnId(jwtToken.getKey())
				.refreshTknCn(jwtToken.getRefreshToken())
				.userClntCn(userClCdEnum.getCode())
				.role(role)
				.build();
		
		String lgnId = tableRefreshToken.getLgnId();
		log.debug("[loginUserId][{}]", lgnId);
		
		// 중복로그인 방지처리 - User-Agent정보를 제외한 사용자인증 식별자로만 삭제처리
		if(refreshTokenRepository.existsByLgnId(lgnId)){
			log.debug("기존의 존재하는 refresh 토큰 삭제1");
			refreshTokenRepository.deleteByLgnId(lgnId);
			log.debug("기존의 존재하는 refresh 토큰 삭제2");
		}
		
		refreshTokenRepository.save(tableRefreshToken);
		
	}
	
	/**
	 * Refresh Token 저장소에 갱신
	 * - role은 실제 업무관련 권한이므로 변경없음
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