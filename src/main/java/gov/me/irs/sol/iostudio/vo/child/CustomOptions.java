package gov.me.irs.sol.iostudio.vo.child;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 검색엔진 - request 정보 > CustomOptions (파일정보 확인시 필수값)
 * 
 * @author 홍길동
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CustomOptions {
	
	@Builder.Default
	private Boolean useFileSearch = true;
	
	
}

