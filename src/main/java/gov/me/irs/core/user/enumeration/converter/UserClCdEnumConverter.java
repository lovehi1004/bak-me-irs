package gov.me.irs.core.user.enumeration.converter;

import javax.persistence.Converter;

import gov.me.irs.core.enumeration.converter.EnumConverter;
import gov.me.irs.core.user.enumeration.UserClCdEnum;

/**
 * 시스템 공통 사용자 역할정보 Enum Converter
 * 
 * @author Justin
 *
 */
@Converter(autoApply = true)
public class UserClCdEnumConverter extends EnumConverter<UserClCdEnum> {
	UserClCdEnumConverter() {
		super(UserClCdEnum.class);
	}
}