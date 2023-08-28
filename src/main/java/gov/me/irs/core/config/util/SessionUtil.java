package gov.me.irs.core.config.util;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 세션유틸
 * 
 * @author Justin
 *
 */
@Slf4j
public final class SessionUtil {
	
	/**
	 * 인증상태 체크
	 * 
	 * @param coreResponse
	 * @return
	 */
	public final static boolean isAuthenticated() {
		
		boolean result = false;
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		@SuppressWarnings("unchecked")
		Collection<GrantedAuthority> AuthorityList = (Collection<GrantedAuthority>) authentication.getAuthorities();
		
		for (GrantedAuthority grantedAuthority : AuthorityList) {
			
			String role = grantedAuthority.getAuthority();
			
			log.debug("[role]["+role+"]");
			
			for (UserClCdEnum userClCdEnum : UserClCdEnum.values()) {
				if(userClCdEnum.getValue().equals(role)) {
					result = true;
					log.debug("[result]["+String.valueOf(result)+"]");
				}
			}
			
		}
		
		return result;
		
	}
	
	/**
	 * 인증정보 조회
	 * 
	 * @return
	 */
	public final static TableUser getPrincipal() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return (TableUser) principal;
	}
	
}
