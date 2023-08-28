package gov.me.irs.common.excel;

import gov.me.irs.common.constants.ExcelConst;

import org.apache.poi.ss.usermodel.CellStyle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * ExcelCell - poi전용
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public final class ExcelCell {
	
	@Builder.Default
	private String key = "";
	
	@Builder.Default
	private int type = ExcelConst.STRING;
	
	@Builder.Default
	private String defaultString = "";
	
	@Builder.Default
	private int defaultInt = 0;
	
	@Builder.Default
	private int rowSpan = 1;
	
	@Builder.Default
	private int colSpan = 1;
	
	@Builder.Default
	private short align = CellStyle.ALIGN_CENTER;
	
	/**
	 * default value 꺼내오기 - null 방지
	 * 
	 * @return
	 */
	public Object getDefaultValue() {
		if(this.type == ExcelConst.STRING) {
			return this.defaultString;
		} else if(this.type == ExcelConst.INT) {
			return this.defaultInt;
		}
		
		return this.defaultString;
	}

}
