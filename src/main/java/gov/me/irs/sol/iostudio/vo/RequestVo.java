package gov.me.irs.sol.iostudio.vo;

import java.util.List;

import gov.me.irs.sol.iostudio.vo.child.CustomOptions;
import gov.me.irs.sol.iostudio.vo.child.Filter;
import gov.me.irs.sol.iostudio.vo.child.Highlight;
import gov.me.irs.sol.iostudio.vo.child.Pagination;
import gov.me.irs.sol.iostudio.vo.child.Query;
import gov.me.irs.sol.iostudio.vo.child.Sort;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RequestVo {
	
	private Query query;
	
	private List<String> indices;
	
	private List<String> fields;
	
	private List<Sort> sort;
	
	private List<Filter> filter;
	
	private Pagination pagination;
	
	@Builder.Default
	private Highlight highlight = new Highlight();
	
	@Builder.Default
	private CustomOptions customOptions = new CustomOptions();

	
}

