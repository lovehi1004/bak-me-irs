package gov.me.irs.core.user.enumeration;

import gov.me.irs.core.enumeration.type.EnumType;

import java.util.Arrays;

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
	),											//역할 : 전체관리자
	DIRECTOR(
			RoleConst.CODE_DIRECTOR,
			RoleConst.ROLE_DIRECTOR
	),											//역할 : 관장기관
	OUTSOURCING(
			RoleConst.CODE_OUTSOURCING,
			RoleConst.ROLE_OUTSOURCING
	),											//역할 : 위탁기관
	BIZADMIN(
			RoleConst.CODE_BIZADMIN,
			RoleConst.ROLE_BIZADMIN
	),											//역할 : 사업수행자_계정관리인
	BIZREPRESENT(
			RoleConst.CODE_BIZREPRESENT,
			RoleConst.ROLE_BIZREPRESENT
	),											//역할 : 사업수행자_계정대표자
	MOFA(
			RoleConst.CODE_MOFA,
			RoleConst.ROLE_MOFA
	),											//역할 : 외교부
	ORGAN(
			RoleConst.CODE_ORGAN,
			RoleConst.ROLE_ORGAN
	),											//역할 : 기타부처
	UNAPPROVED(
			RoleConst.CODE_UNAPPROVED,
			RoleConst.ROLE_UNAPPROVED
	),											//역할 : 비승인사용자
	DIRECTORBIZ(
			RoleConst.CODE_DIRECTORBIZ,
			RoleConst.ROLE_DIRECTORBIZ
	),											//역할 : 관장기관 사업수행자
	OUTSOURCINGBIZ(
			RoleConst.CODE_OUTSOURCINGBIZ,
			RoleConst.ROLE_OUTSOURCINGBIZ
	),											//역할 : 위탁기관 사업수행자
	UNAPPROVEDOUTSOURCING(
			RoleConst.CODE_UNAPPROVEDOUTSOURCING,
			RoleConst.ROLE_UNAPPROVEDOUTSOURCING
	);											//역할 : 비승인위탁기관
	
    private String code;
    private String value;
    
    public final String getRole() {
    	return this.getValue();
    }

    public static UserClCdEnum ofCode(String code) throws Exception {
    	return Arrays.stream(UserClCdEnum.values())
    			.filter(r -> r.getCode().equals(code))
    			.findAny()
    			.orElseThrow(() -> new Exception(""));
    }
    
    public static UserClCdEnum of(String value) throws Exception {
    	return Arrays.stream(UserClCdEnum.values())
    			.filter(r -> r.getValue().equals(value))
    			.findAny()
    			.orElseThrow(() -> new Exception(""));
    }
    
}
