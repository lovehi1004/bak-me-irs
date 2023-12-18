package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "raon")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class RaonKProperties {
	
	public final Temporary temporary;
	public final Real real;
	
	@Setter
	public final static class Temporary {
		public String resultPath;
		public String tempPath;
	}
	
	@Setter
	public final static class Real {
		public String path;
	}
	
}
