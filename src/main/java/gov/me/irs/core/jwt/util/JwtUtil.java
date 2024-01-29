package gov.me.irs.core.jwt.util;

import java.util.UUID;

import org.apache.commons.lang3.StringUtils;

import gov.me.irs.core.user.enumeration.RoleEnum;
import gov.me.irs.core.user.enumeration.UserClCdEnum;

/**
 * 시스템 공통 JWT 유틸
 * 
 * @author Justin
 *
 */
public final class JwtUtil {
	
	/**
	 * generate a blank string by size
	 * 
	 * @param size
	 * @return
	 */
	public final static String newBlankString(int size) {
		StringBuffer sb = new StringBuffer();
		
		for (int i = 0; i < size; i++) {
			sb.append(StringUtils.SPACE);
		}
		
		return sb.toString();
		
	}
	
	/**
	 * 사용자구분코드에 해당하는 권한정보 조회 - 사용자의 기본권한
	 * 
	 * @param userClCd - 사용자구분코드
	 * @return
	 * @throws Exception 
	 */
	public final static RoleEnum getUserClCdToRoleEnum(String userClCd) throws Exception {
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		String jwtRoleNm = userClCdEnum.getValue();			//ROLE_SUPER 형태의 JWT 권한명
		
		RoleEnum roleEnum = RoleEnum.of(jwtRoleNm);			//JWT 권한에 해당하는 IRS에서 관리하는 역할ID와 맵핑된 정보
		return roleEnum;
		
	}
	
	/**
	 * 임시 비밀번호 발급하기
	 * 	- 15자리
	 * 
	 * @return
	 * @throws Exception
	 */
	public final static String getTemporaryPassword() throws Exception {
		return UUID.randomUUID().toString().replace("-", "").substring(0, 15);
	}
	
	
}
