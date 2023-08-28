package gov.me.irs.core.token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 시스템 공통 JWT 인증정보
 * 
 * @author Justin
 *
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtToken {
	private String accessToken;
	private String refreshToken;
	private String key;
}
