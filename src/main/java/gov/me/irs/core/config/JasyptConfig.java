package gov.me.irs.core.config;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * JasyptConfig
 * -> [https://www.devglan.com/online-tools/jasypt-online-encryption-decryption] 인코딩
 * 
 * @author Justin
 *
 */
@Configuration
public class JasyptConfig {
	
	@Value("${jasypt.encryptor.password}")
	private String encryptKey;
	
	@Bean("jasyptStringEncryptor")
	public StringEncryptor stringEncryptor(){
		PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
		SimpleStringPBEConfig config = new SimpleStringPBEConfig();
		config.setPassword(encryptKey);
		config.setPoolSize("1");
		config.setAlgorithm("PBEWithMD5AndDES");
		config.setStringOutputType("base64");
		config.setKeyObtentionIterations("1000");
		config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
		encryptor.setConfig(config);
		return encryptor;
	}
}
