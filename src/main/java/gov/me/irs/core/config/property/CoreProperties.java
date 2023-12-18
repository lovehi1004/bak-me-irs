package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "core")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class CoreProperties {
	
	public final Raon raon;
	
	@Setter
	public final static class Raon {
		public Url url;
		public String viewJsPath;
		
		@Setter
		public final static class Url {
			public String raonkhandler;
			public String raonkviewer;
		}
	}
	
	
}
