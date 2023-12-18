package gov.me.irs.core.config.util;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import gov.me.irs.common.constants.Const;
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
					log.debug("[인증상태 체크][userClCdEnum.getValue()][{}]", userClCdEnum.getValue());
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
	 * 인증사용자 사용자ID 조회
	 * 
	 * @return
	 * @throws Exception 
	 */
	public final static String getUserId() throws Exception {
		return UserSession.getSession().getUserId();
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
	
	/**
	 * 인증사용자 사용자구분코드 스프링시큐리티 권한정보 조회 - 역할정보 Enum
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static RoleEnum getRoleEnum() throws Exception {
		
		Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities();
		
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ START]");
		log.debug("[authorities][{}]", authorities);;
		log.debug("[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ END]");
		String jwtRoleNm = authorities.stream().findFirst().get().toString();
		
		return RoleEnum.of(jwtRoleNm);
	}
	
	/**
	 * 인증사용자 전체관리자 여부 - boolean
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static boolean isSuperUser() throws Exception {
		if(RoleEnum.SUPER == UserSession.getRoleEnum()) {
			return true;
		}
		return false;
	}
	
	/**
	 * 인증사용자 전체관리자 여부 - Y|N
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static String isSuperUserYn() throws Exception {
		if(RoleEnum.SUPER == UserSession.getRoleEnum()) {
			return Const.CHARACTER.Y;
		}
		return Const.CHARACTER.N;
	}
	
	/**
	 * 인증사용자 관장기관 여부 - Y|N
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static String isDirectorYn() throws Exception {
		RoleEnum roleEnum = UserSession.getRoleEnum();
		
		/* 관장기관여부 확인 */
		if(roleEnum == RoleEnum.DIRECTOR) {
			return Const.CHARACTER.Y;
		}
		return Const.CHARACTER.N;
	}
	
	/**
	 * 인증사용자 위탁기관 여부 - Y|N
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static String isOutsourcingYn() throws Exception {
		RoleEnum roleEnum = UserSession.getRoleEnum();
		
		/* 위탁기관여부 확인 */
		if(roleEnum == RoleEnum.OUTSOURCING) {
			return Const.CHARACTER.Y;
		}
		return Const.CHARACTER.N;
	}
	
	/**
	 * 인증사용자 사업수행자_계정관리인, 사업수행자_계정대표자 여부 - Y|N
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static String isBizUserYn() throws Exception {
		RoleEnum roleEnum = UserSession.getRoleEnum();
		
		/* 위탁기관여부 확인 */
		if(roleEnum == RoleEnum.BIZADMIN || roleEnum == RoleEnum.BIZREPRESENT) {
			return Const.CHARACTER.Y;
		}
		return Const.CHARACTER.N;
	}
	
}
