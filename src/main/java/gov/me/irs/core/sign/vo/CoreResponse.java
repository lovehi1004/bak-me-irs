package gov.me.irs.core.sign.vo;

import gov.me.irs.common.constants.Const;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * 시스템 공통 응답정보
 * 		- 인증정보 포함
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
public final class CoreResponse {
	private int status;
	private int code;
	private String message;
	private String systemMessage;
	
	@Builder.Default
	private String accessToken = "";
	@Builder.Default
	private String refreshToken = "";
	@Builder.Default
	private String issueToken = Const.NEW.N;
	@Builder.Default
	private String reissueToken = Const.NEW.N;

}
