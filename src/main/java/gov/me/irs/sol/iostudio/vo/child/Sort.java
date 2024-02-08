package gov.me.irs.sol.iostudio.vo.child;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보 > Sort
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Sort {
	
	private String field;
	
	private String order;
	
	private List<String> indices;
	
}

