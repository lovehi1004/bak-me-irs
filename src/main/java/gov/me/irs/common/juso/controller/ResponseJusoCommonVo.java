package gov.me.irs.common.juso.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 도로명주소 Bean - 주소 공통 응답정보
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseJusoCommonVo {
	
	@Builder.Default
	private String errorMessage = "";
	
	@Builder.Default
	private String errorCode = "";
	
	@Builder.Default
	private int countPerPage = 10;
	
	@Builder.Default
	private int totalCount = 0;
	
	@Builder.Default
	private int currentPage = 1;

}
