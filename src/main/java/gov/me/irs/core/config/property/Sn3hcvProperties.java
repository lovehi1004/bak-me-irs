package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "sol.sn3hcv")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class Sn3hcvProperties {
	
	public final String home;
	public final String sn3hcv;
	public final String template;
	public final String modules;
	public final Web web;
	public final Rs rs;
	
	@Setter
	public final static class Web {
		public String root;
	}
	
	@Setter
	public final static class Rs {
		public String root;
	}
	
}
