package gov.me.irs.test.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * FirstVo 예제
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FirstVo {
	private String columnOne;
	private String columnTwo;
	private String columnThree;
	
}
