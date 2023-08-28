package gov.me.irs.common.file.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 파일그룹정보 Vo
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FileGroupVo {
	
	private int fileGroupSn;				//파일 ID
	private String fileTypeClCd;			//파일 유형
	private String menuId;					//메뉴ID
	private String delYn;					//삭제 여부
	private String rgtrId;					//등록 일시
	private String regDt;					//등록 ID
	private String mdfrId;					//변경 ID
	private String mdfcnDt;					//변경 일시
	
	private int sourceFileGroupSn;			//차수 생성 전용 파일그룹정보 - 대상 파일그룹일련번호
}
