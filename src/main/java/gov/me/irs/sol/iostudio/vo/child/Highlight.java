package gov.me.irs.sol.iostudio.vo.child;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보 > Highlight
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Highlight {
	
	@Builder.Default
	private String preTag = "<fc v=\'#f96262\'>";
	
	@Builder.Default
	private String postTag = "</fc>";
	
}

