package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "iostudio")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class IostudioProperties {
	
	public final String searchUrl;
	
}
