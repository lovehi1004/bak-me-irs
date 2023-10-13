package gov.me.irs.core.config.util;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.RoleEnum;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 세션유틸
 * 
 * @author Justin
 *
 */
@Slf4j
public final class UserSession {
	
	/*
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * 출력정보 활용 참고 - 20231013155700
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * 
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserId][{}]", tableUser.getUserId());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getLgnId][{}]", tableUser.getLgnId());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - enum][{}]", tableUser.getUserClCd());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - code][{}]", tableUser.getUserClCd().getCode());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd - value][{}]", tableUser.getUserClCd().getValue());
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ][getRoles][{}]", tableUser.getRoles());
		log.debug("[UserSession ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd][{}]", UserSession.getUserClCd());
		log.debug("[UserSession ▶▶▶▶▶▶▶▶▶▶ ][getJwtRoleNm][{}]", UserSession.getJwtRoleNm());
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	*/
	
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
	public final static TableUser getSession() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return (TableUser) principal;
	}
	
	/**
	 * 인증사용자 사용자구분코드 조회
	 * 
	 * @return
	 * @throws Exception 
	 */
	public final static String getUserClCd() throws Exception {
		return UserSession.getSession().getUserClCd().getCode();
	}
	
	/**
	 * 인증사용자 사용자구분코드 스프링시큐리티 권한명 조회
	 * 
	 * @return
	 * @throws Exception 
	 */
	public final static String getJwtRoleNm() throws Exception {
		
		Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ START]");
		log.debug("[authorities][{}]", authorities);;
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ END]");
		
		return authorities.stream().findFirst().get().toString();
	}
	
	/**
	 * 인증사용자 사용자구분코드 스프링시큐리티 권한코드(DB컬럼 값) 조회
	 * 
	 * @return
	 * @throws Exception 
	 */
	public final static String getRoleKey() throws Exception {
		
		Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ START]");
		log.debug("[authorities][{}]", authorities);;
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ END]");
		String jwtRoleNm = authorities.stream().findFirst().get().toString();
		
		return RoleEnum.of(jwtRoleNm).getCode();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
