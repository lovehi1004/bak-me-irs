package gov.me.irs.core.security.password;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

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
	
	@Override
	public String encode(CharSequence rawPassword) {
		
		try {
			return crypto.encryptSHA((String) rawPassword);
		} catch (Exception e) {
			log.error("비밀번호 암호화 처리 중 오류가 발생하였습니다", e);
		}
		return null;
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		
		try {
			return crypto.encryptSHA((String) rawPassword).equals(encodedPassword) && !((String) rawPassword).equals(encodedPassword);
		} catch (Exception e) {
			log.error("비밀번호 검증 중 오류가 발생하였습니다", e);
		}
		return false;
	}

}

