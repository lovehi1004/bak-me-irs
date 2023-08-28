package gov.me.irs.common.enumeration;

import java.util.Arrays;

import gov.me.irs.common.constants.CustomResponseConst;
import gov.me.irs.core.enumeration.CoreResponseEnumType;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 사용자정의 데이터 공통 코드 Enum
 * 		- 필요시 개발자가 추가 후 활용한다, 가능한 최소화 권장
 * 
 * @author Justin
 *
 */
@Getter
@AllArgsConstructor
public enum CustomResponseEnum implements CoreResponseEnumType {
	
	REG_LIMIT_CNT(
			CustomResponseConst.CODE.REG_LIMIT_CNT,
			CustomResponseConst.MESSAGE.REG_LIMIT_CNT),
	
	VIEWER_ERROR(
			CustomResponseConst.CODE.VIEWER_ERROR,
			CustomResponseConst.MESSAGE.VIEWER_ERROR),

	UNPROCESSABLE(
			CustomResponseConst.CODE.UNPROCESSABLE,
			CustomResponseConst.MESSAGE.UNPROCESSABLE);

    private int code;
    private String message;
    
    public static CustomResponseEnum of(int code) {
    	return Arrays.stream(CustomResponseEnum.values())
    			.filter(r -> r.getCode() == code)
    			.findAny()
    			.orElse(UNPROCESSABLE);
    }
    
}
