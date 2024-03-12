package gov.me.irs.sol.iostudio.vo;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import gov.me.irs.sol.iostudio.vo.child.Hits;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - response 정보
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseVo {
	
	private Hits hits;
	
	public Map<String, Object> resultMap;

	public void setResultMap(Map<String, Object> resultMap) {
		this.resultMap = new HashMap<>();
		this.resultMap.putAll(resultMap);	
	}

	public Map<String, Object> getResultMap() {
		Map<String, Object> map = new HashMap<>();
		map.putAll(resultMap);
		return map;
	}
	
	
}

