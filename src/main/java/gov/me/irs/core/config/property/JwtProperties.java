package gov.me.irs.core.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@ConfigurationProperties(prefix = "jwt")
@ConstructorBinding			/* 3.0 이하에서만 사용 - 20231006 - Justin */
public class JwtProperties {
	
	public final AccessToken accessToken;
	public final RefreshToken refreshToken;
	
	@Setter
	public final static class AccessToken {
		public String secretKey;
		public long validTime;
	}
	
	@Setter
	public final static class RefreshToken {
		public String secretKey;
		public long validTime;
	}
	
}
