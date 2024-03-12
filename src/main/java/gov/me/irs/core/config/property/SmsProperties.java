package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "sms")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class SmsProperties {

	public final String projectName;		// irs-dev-sms-api
	public final String serviceUrl;			// https://sens.apigw.ntruss.com
	public final String serviceId;			// ncp-gov:sms:kr:1002933503:irs-dev-sms-api
	public final String accessKey;			// 5E0040043DF81EF0D654
	public final String secretKey;			// FC3ED5OE5608B1431306E7958D24FC9CE36C0FC1
	public final String fromTel;			// 0442017522
}
