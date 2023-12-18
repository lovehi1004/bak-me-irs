package gov.me.irs.common.juso.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 도로명주소 Bean - 주소 목록 응답정보
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseJusoVo {
	
	/**
	 * 번호
	 */
	@Builder.Default
	private int no = 0;
	
	/**
	 * 상세건물명
	 */
	@Builder.Default
	private String detBdNmList = "";
	@Builder.Default
	private String engAddr = "";
	
	/**
	 * 도로명
	 */
	@Builder.Default
	private String rn = "";
	
	/**
	 * 읍면동명
	 */
	@Builder.Default
	private String emdNm = "";
	
	/**
	 * 우편번호
	 */
	@Builder.Default
	private String zipNo = "";
	
	@Builder.Default
	private String roadAddrPart2 = "";
	@Builder.Default
	private String emdNo = "";
	
	/**
	 * 시군구명
	 */
	@Builder.Default
	private String sggNm = "";
	
	/**
	 * 지번주소
	 */
	@Builder.Default
	private String jibunAddr = "";
	
	/**
	 * 시도명
	 */
	@Builder.Default
	private String siNm = "";
	@Builder.Default
	private String roadAddrPart1 = "";
	@Builder.Default
	private String bdNm = "";
	@Builder.Default
	private String admCd = "";
	@Builder.Default
	private String udrtYn = "";
	@Builder.Default
	private String lnbrMnnm = "";
	
	/**
	 * 전체 도로명주소
	 */
	@Builder.Default
	private String roadAddr = "";
	@Builder.Default
	private String lnbrSlno = "";
	@Builder.Default
	private String buldMnnm = "";
	@Builder.Default
	private String bdKdcd = "";
	@Builder.Default
	private String liNm = "";
	@Builder.Default
	private String rnMgtSn = "";
	@Builder.Default
	private String mtYn = "";
	@Builder.Default
	private String bdMgtSn = "";
	@Builder.Default
	private String buldSlno = "";
			
}
