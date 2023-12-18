package gov.me.irs.core.safedb;

import org.springframework.stereotype.Component;

import com.initech.safedb.SimpleSafeDB;
import com.initech.safedb.sdk.exception.SafeDBSDKException;

import gov.me.irs.core.config.property.SafeDBProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 공통 암호화 솔루션 암호화,복호화처리
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Component
@Slf4j
public final class Crypto {
	
	private final SafeDBProperties p;
	
	/**
	 * 암호화
	 * 
	 * @param algorithm
	 * @param plainData
	 * @return
	 * @throws SafeDBSDKException
	 */
	private String encrypt(String algorithm, String plainText) throws SafeDBSDKException {
		SimpleSafeDB safedb = SimpleSafeDB.getInstance();
		boolean loginResult = false;
		if(!safedb.login()){
			log.error("[암호화 솔루션 로그인 실패]");
			loginResult = safedb.getSafeDBConfigMgr().isLoginCheck();
			if(!loginResult) {
				log.error("[암호화 솔루션 로그인 에러 - 솔루션 업체에 문의]");
			}
		} else {
			log.info("[암호화 솔루션 로그인 성공]");
		}
		
		try {
			byte[] plainData = plainText.getBytes();
			byte[] encryptedBytes = safedb.encrypt(p.userName, p.tableName, algorithm, plainData);
			String encryptedString = new String(encryptedBytes);
			log.debug("Encrypt({}) Data : [{}]", algorithm, encryptedString);
			return encryptedString;
		} catch (SafeDBSDKException e) {
			log.error("[양방향 암호화 ("+algorithm+") 에러][{}]" , e);
			throw e;
		}
	}
	
	/**
	 * 양방향 암호화 - ARIA256
	 * 
	 * @param plainData
	 * @return
	 * @throws SafeDBSDKException 
	 */
	public String encrypt(String plainData) throws SafeDBSDKException {
		return this.encrypt(p.twoWayName, plainData);
	}
	
	/**
	 * 양방향 복호화 - ARIA256
	 * 
	 * @param encryptedString
	 * @return
	 * @throws SafeDBSDKException
	 */
	public String decrypt(String encryptedString) throws SafeDBSDKException {
		SimpleSafeDB safedb = SimpleSafeDB.getInstance();
		boolean loginResult = false;
		if(!safedb.login()){
			log.error("[암호화 솔루션 로그인 실패]");
			loginResult = safedb.getSafeDBConfigMgr().isLoginCheck();
			if(!loginResult) {
				log.error("[암호화 솔루션 로그인 에러 - 솔루션 업체에 문의]");
			}
		} else {
			log.info("[암호화 솔루션 로그인 성공]");
		}
		
		try {
			byte[] encryptedBytes = encryptedString.getBytes();
			byte[] decryptedBytes = safedb.decrypt(p.userName, p.tableName, p.twoWayName, encryptedBytes);
			String decryptedString = new String(decryptedBytes);
			log.debug("Decrypt(ARIA256) Data : [{}]", decryptedString);
			return decryptedString;
		} catch (SafeDBSDKException e) {
			log.error("[양방향 암호화 ("+p.twoWayName+") 에러][{}]" , e);
			throw e;
		}
	}
	
	/**
	 * 단방향 암호화 - SHA256
	 * 
	 * @param plainData
	 * @return
	 * @throws SafeDBSDKException
	 */
	public String encryptSHA(String plainData) throws SafeDBSDKException {
		return this.encrypt(p.oneWayName, plainData);
	}
}
