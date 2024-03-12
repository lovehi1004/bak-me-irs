package gov.me.irs.sol.iostudio.vo;

import java.util.ArrayList;
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
//@Data
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

	public void setIndices(List<String> indices) {
		this.indices = new ArrayList<>();
		this.indices.addAll(indices);	
	}

	public void setFields(List<String> fields) {
		this.fields = new ArrayList<>();
		this.fields.addAll(fields);	
	}

	public void setSort(List<Sort> sort) {
		this.sort = new ArrayList<>();
		this.sort.addAll(sort);	
	}

	public void setFilter(List<Filter> filter) {
		this.filter = new ArrayList<>();
		this.filter.addAll(filter);	
	}

	public List<String> getIndices() {
		List<String> list = new ArrayList<>();
		list.addAll(indices);
		return list;
	}

	public List<String> getFields() {
		List<String> list = new ArrayList<>();
		list.addAll(fields);
		return list;
	}

	public List<Sort> getSort() {
		List<Sort> list = new ArrayList<>();
		list.addAll(sort);
		return list;
	}

	public List<Filter> getFilter() {
		List<Filter> list = new ArrayList<>();
		list.addAll(filter);
		return list;
	}
	
}

