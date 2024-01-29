package gov.me.irs.core.crypt.util;

import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.Cipher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;

/**
 * Browser 비밀번호 암호화
 * 	▶ 참고 : [https://cofs.tistory.com/297]
 * 	------------------------------------------------------------
 * 	- 총 3건
 * 		- [TestFrontCryptController.java]
 * 		- [/gov-me-irs/src/main/webapp/test/cryptMain.jsp]
 * 		- [/gov-me-irs/src/main/webapp/test/testCrypt.jsp]
 * 	------------------------------------------------------------
 * 
 * @author Justin
 *
 */
@Slf4j
public final class RsaUtil {
	
	public final static String RSA_WEB_KEY = "_RSA_WEB_Key_"; // 개인키 session key
	public final static String RSA_INSTANCE = "RSA"; // rsa transformation
	
	/**
	 * RSA 공개키, 개인키 생성
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
    public final static Map<String, Object> generateRsaMap(HttpServletRequest request) throws Exception {
    	HttpSession session = request.getSession();
    	
    	KeyPairGenerator generator;
    	try {
    		generator = KeyPairGenerator.getInstance(RSA_INSTANCE);
    		generator.initialize(1024);
    		
    		KeyPair keyPair = generator.genKeyPair();
    		KeyFactory keyFactory = KeyFactory.getInstance(RSA_INSTANCE);
    		PublicKey publicKey = keyPair.getPublic();
    		PrivateKey privateKey = keyPair.getPrivate();
    		
    		session.setAttribute(RSA_WEB_KEY, privateKey); // session에 RSA 개인키를 세션에 저장
    		
    		RSAPublicKeySpec publicSpec = (RSAPublicKeySpec) keyFactory.getKeySpec(publicKey, RSAPublicKeySpec.class);
    		String publicKeyModulus = publicSpec.getModulus().toString(16);
    		String publicKeyExponent = publicSpec.getPublicExponent().toString(16);
    		
    		Map<String, Object> map = new HashMap<String, Object>();
    		
    		map.put("RSAModulus", publicKeyModulus); // rsa modulus 를 request 에 추가
    		map.put("RSAExponent", publicKeyExponent); // rsa exponent 를 request 에 추가
    		
    		return map;
    		
    	} catch (Exception e) {
    		log.error("[initRsa][{}]", e);
    		throw e;
        }
    }
	
    /**
     * 복호화
     * 
     * @param session
     * @param securedValue
     * @return
     * @throws Exception
     */
	public final static String decryptRsa(HttpSession session, String securedValue) throws Exception {
		
		PrivateKey privateKey = (PrivateKey) session.getAttribute(RsaUtil.RSA_WEB_KEY);
		
		Cipher cipher = Cipher.getInstance(RSA_INSTANCE);
		byte[] encryptedBytes = hexToByteArray(securedValue);
		cipher.init(Cipher.DECRYPT_MODE, privateKey);
		byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
		String decryptedValue = new String(decryptedBytes, "UTF-8"); // 문자 인코딩 주의.
		return decryptedValue;
	}
	
	/**
	 * 16진 문자열을 byte 배열로 변환한다.
	 * 
	 * @param hex
	 * @return
	 */
    private final static byte[] hexToByteArray(String hex) {
        if (hex == null || hex.length() % 2 != 0) { return new byte[] {}; }
 
        byte[] bytes = new byte[hex.length() / 2];
        for (int i = 0; i < hex.length(); i += 2) {
            byte value = (byte) Integer.parseInt(hex.substring(i, i + 2), 16);
            bytes[(int) Math.floor(i / 2)] = value;
        }
        return bytes;
    }
    
}
