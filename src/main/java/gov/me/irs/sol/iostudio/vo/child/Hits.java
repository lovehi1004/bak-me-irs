package gov.me.irs.sol.iostudio.vo.child;

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
	
	private Map<String, Object> hits;
}
