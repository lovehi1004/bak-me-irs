package gov.me.irs.core.config;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import gov.me.irs.core.config.property.JasyptProperties;
import lombok.RequiredArgsConstructor;

/**
 * JasyptConfig
 * -> [https://www.devglan.com/online-tools/jasypt-online-encryption-decryption] 인코딩
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Configuration
public class JasyptConfig {
	
	private final JasyptProperties props;
	
	@Bean("jasyptStringEncryptor")
	public StringEncryptor stringEncryptor(){
		PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
		SimpleStringPBEConfig config = new SimpleStringPBEConfig();
		config.setPassword(props.password);
		config.setPoolSize("1");
		config.setAlgorithm("PBEWithMD5AndDES");
		config.setStringOutputType("base64");
		config.setKeyObtentionIterations("1000");
		config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
		encryptor.setConfig(config);
		return encryptor;
	}
}
