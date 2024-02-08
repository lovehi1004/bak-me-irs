package gov.me.irs.core.security.password;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.safedb.Crypto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사용자 비밀번호 암호화
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Component
@Slf4j
public class CorePasswordEncoder implements PasswordEncoder {
	
	private final Crypto crypto;
	
	/**
	 * encode
	 * 
	 * @param rawPassword - the original
	 */
	@Override
	public String encode(CharSequence rawPassword) {
		
		try {
			return crypto.encryptSHA((String) rawPassword);
		} catch (Exception e) {
			log.error("비밀번호 암호화 처리 중 오류가 발생하였습니다", e);
		}
		return null;
	}
	
	/**
	 * matches
	 * 
	 * @param rawPassword - the original
	 * @param encodedPassword - DB암호화비밀번호
	 * @return
	 */
	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		
		String profiles = System.getProperty("spring.profiles.active");
		
		/* 운영서버가 아니면 로그 출력하기 */
		if(!Const.PROFILES.PRD.equals(profiles)) {
			log.debug("[rawPassword][{}]", rawPassword);
			try {
				log.debug("[암호화 솔루션 - rawPassword][{}]", crypto.encryptSHA((String) rawPassword));
			} catch (Exception e) {
				log.error("[암호화 솔루션 에러][{}]", e);
			}
			log.debug("[encodedPassword][{}]", encodedPassword);
		}
		
		try {
			return crypto.encryptSHA((String) rawPassword).equals(encodedPassword) && !((String) rawPassword).equals(encodedPassword);
		} catch (Exception e) {
			log.error("비밀번호 검증 중 오류가 발생하였습니다", e);
		}
		return false;
	}

}

