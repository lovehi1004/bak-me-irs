package gov.me.irs.core.user.enumeration;

import gov.me.irs.core.enumeration.type.EnumType;
import gov.me.irs.core.constants.RoleConst;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 시스템 공통 사용자 역할정보 Enum
 * 
 * @author Justin
 *
 */
@Getter
@AllArgsConstructor
public enum UserClCdEnum implements EnumType {
	
	SUPER(
			RoleConst.CODE_SUPER,
			RoleConst.ROLE_SUPER
	),											//역할 : GIR - 전체관리자
	BIZ(
			RoleConst.CODE_BIZ,
			RoleConst.ROLE_BIZ
	),											//역할 : 민간사업자
	SUPERVISORY(
			RoleConst.CODE_SUPERVISORY,
			RoleConst.ROLE_SUPERVISORY
	),											//역할 : 관장기관
	DELEGATED(
			RoleConst.CODE_DELEGATED,
			RoleConst.ROLE_DELEGATED
	),											//역할 : 위탁기관
	ME(
			RoleConst.CODE_ME,
			RoleConst.ROLE_ME
	),											//역할 : 환경부
	ORGAN(
			RoleConst.CODE_ORGAN,
			RoleConst.ROLE_ORGAN
	),											//역할 : 국제감축협의체
	MOFA(
			RoleConst.CODE_MOFA,
			RoleConst.ROLE_MOFA
	);											//역할 : 외교부
	
    private String code;
    private String value;
    
    public final String getRole() {
    	return this.getValue();
    }

}
