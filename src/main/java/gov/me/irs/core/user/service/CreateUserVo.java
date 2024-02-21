package gov.me.irs.core.user.service;

import java.util.ArrayList;
import java.util.List;

import gov.me.irs.core.user.enumeration.UserClCdEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 사용자정보 계정생성 Vo
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CreateUserVo {
	
	/**
	 * 사용자ID - [USER_ROLE_DTL - 사용자역할상세], [JWT_USER_BSC - JWT사용자기본]
	 */
	private String userId;
	
	/**
	 * 역할ID관리번호 - [USER_ROLE_DTL - 사용자역할상세]
	 */
	private String roleIdMgno;
	
	/**
	 * 로그인ID - [JWT_USER_BSC - JWT사용자기본]
	 */
	private String lgnId;
	
	/**
	 * 암호화비밀번호 - [JWT_USER_BSC - JWT사용자기본]
	 */
	private String encptPswd;
	
	/**
	 * 사용자구분정보
	 */
	private UserClCdEnum userClCdEnum;
	
	/**
	 * 권한정보 - JWT권한 목록
	 */
	private List<String> roles;

	public void setRoles(List<String> roles) {
		this.roles = new ArrayList<>();
		this.roles.addAll(roles);
	}

	public List<String> getRoles() {
		List<String> list = new ArrayList<>();
		list.addAll(roles);
		return list;
	}

}
