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
	),											//역할 : 슈퍼관리자
	SYSTEM(
			RoleConst.CODE_SYSTEM,
			RoleConst.ROLE_SYSTEM
	),											//역할 : 시스템관리자
	DIRECTOR(
			RoleConst.CODE_DIRECTOR,
			RoleConst.ROLE_DIRECTOR
	),											//역할 : 관장기관
	OUTSOURCING(
			RoleConst.CODE_OUTSOURCING,
			RoleConst.ROLE_OUTSOURCING
	),											//역할 : 위탁기관
	BIZ(
			RoleConst.CODE_BIZ,
			RoleConst.ROLE_BIZ
	),											//역할 : 사업수행자
	ORGAN(
			RoleConst.CODE_ORGAN,
			RoleConst.ROLE_ORGAN
	),											//역할 : 기타부처
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
