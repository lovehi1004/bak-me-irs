package gov.me.irs.sol.iostudio.vo.child;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보 > Pagination
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Pagination {
	
	@Builder.Default
	private long page = 1;
	
	@Builder.Default
	private long size = 3;
	
	@Builder.Default
	private long paginationBarSize = 10;
	
}

