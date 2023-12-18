package gov.me.irs.common.juso.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 도로명주소 Bean - 전송정보
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RequestJusoVo {
	
	/**
	 * 신청 시 발급받은 승인키
	 * 	- [필수]
	 */
	@Builder.Default
	private String confmKey = "";

	/**
	 * 현재 페이지 번호 ( n>0 )
	 * 	- [필수]
	 */
	@Builder.Default
	private long currentPage = 1;
	
	/**
	 * 페이지당 출력 할 결과 Row 수 ( 0<n<=100 )
	 * 	- [필수]
	 */
	@Builder.Default
	private long countPerPage = 10;
	
	/**
	 * 주소 검색어
	 * 	- [필수]
	 */
	@Builder.Default
	private String keyword = "";
	
	/**
	 * 검색결과형식 설정(기본 XML형식)
	 * 	- [옵션]
	 * 	- Default XML
	 * 	- json 입력 시 JSON형식의 결과제공
	 */
	@Builder.Default
	private String resultType = "json";
	
	/**
	 * 변동된 주소정보 포함 여부
	 * 	- [옵션]
	 * 	- [2020년12월8일 추가된 항목]
	 */
	@Builder.Default
	private String hstryYn = "N";
	
	/**
	 * 정확도 정렬 (none), 우선정렬(road: 도로명 포함, location: 지번포함)
	 * 	- [옵션]
	 * 	- [2020년12월8일 추가된 항목]
	 * 	- ※ keyword(검색어)가 우선정렬 항목에 포함된 결과 우선 표출
	 */
	@Builder.Default
	private String firstSort = "none";
	
	/**
	 * 출력결과에 추가된 항목(hstryYn, relJibun, hemdNm) 제공여부
	 * 	- [옵션]
	 * 	- [2020년12월8일 추가된 항목]
	 * 	- ※ 해당 옵션으로 추가제공되는 항목의 경우, 추후 특정항목이 제거되거나 추가될 수 있으니 적용 시 고려해주시기 바랍니다.
	 */
	@Builder.Default
	private String addInfoYn = "N";
	
	/**
	 * 도로명주소 API URL 조회 - GET방식
	 * 
	 * @param apiUrl
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public String getJusoURLWithQueryString(String apiUrl) throws UnsupportedEncodingException {
		
		String queryString = "currentPage=" + this.currentPage
				+ "&countPerPage=" + this.countPerPage
				+ "&keyword=" + URLEncoder.encode(this.keyword,"UTF-8")
				+ "&confmKey=" + URLEncoder.encode(this.confmKey,"UTF-8")
				+ "&resultType=" + this.resultType;
		
		return apiUrl + "?" + queryString;
		
	}
	
}
