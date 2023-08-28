package gov.me.irs.core.client.vo;

import javax.servlet.http.HttpServletRequest;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.util.ClientUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 사용자 접속정보
 * 
 * @author Justin
 *
 */
@NoArgsConstructor
public class ClientVo {
	
	public ClientVo(HttpServletRequest request, String lgnScsYn) {
		String lgnId = (String) request.getAttribute(Const.CORE.KEY_USER_IDENTIFIER);
		
		String ip = ClientUtil.getIp(request);
		String browser = ClientUtil.getBrowser(request);
		String os = ClientUtil.getOs(request);
        
        this.username = lgnId;
        this.ip = ip;
        this.browser = browser;
        this.os = os;
        this.lgnScsYn = lgnScsYn;
	}
	
	@Getter
	private int sysCntnHstrySn;				//Mybatis 에서 사용
	@Getter
	private String username;
	@Getter
	private String browser;
	@Getter
	private String os;
	@Getter
	private String ip;
	@Getter
	private String lgnScsYn;
	
	@Override
	public String toString() {
		return "[username]["+String.valueOf(username)+"][browser]["+String.valueOf(browser)+"][os]["+String.valueOf(os)+"][ip]["+String.valueOf(ip)+"]";
	}
	
	
}
