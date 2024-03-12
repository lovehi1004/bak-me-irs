package gov.me.irs.sol.iostudio.vo.child;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보 > Filter
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Filter {
	
	private String filterType;
	private String field;
	public List<String> text;
	
	public void setText(List<String> text) {
		this.text = new ArrayList<>();
		this.text.addAll(text);		
	}

	public List<String> getText() {
		List<String> list = new ArrayList<>();
		list.addAll(text);
		return list;
	}
	
}

