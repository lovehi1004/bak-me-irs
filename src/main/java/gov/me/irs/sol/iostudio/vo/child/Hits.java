package gov.me.irs.sol.iostudio.vo.child;

import java.util.HashMap;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Hits {

	private long total;
	
	public Map<String, Object> hits;

	public void setHits(Map<String, Object> hits) {
		this.hits = new HashMap<>();
		this.hits.putAll(hits);	
	}

	public Map<String, Object> getHits() {
		Map<String, Object> map = new HashMap<>();
		map.putAll(hits);
		return map;
	}
	
	
}
