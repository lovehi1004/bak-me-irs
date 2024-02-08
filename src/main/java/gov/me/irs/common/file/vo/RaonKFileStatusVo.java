package gov.me.irs.common.file.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 파일정보 Vo
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RaonKFileStatusVo {
	@Builder.Default
	private String fileGroupMgno = "";						//파일그룹일련번호
	@Builder.Default
	private String issueYn = "N";						//파일그룹일련번호 채버여부
	
}
