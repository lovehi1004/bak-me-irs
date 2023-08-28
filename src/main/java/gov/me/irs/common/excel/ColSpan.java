package gov.me.irs.common.excel;

import lombok.Data;
import lombok.ToString;

/**
 * ColSpan - poi전용
 * 
 * @author Justin
 *
 */
@Data
@ToString
public final class ColSpan {
	
	private int startRow;
	private int endRow;
	private int startCol;
	private int endCol;
	
	public ColSpan(int row, int col, int length) {
		this.startRow = row;
		this.endRow = row;
		this.startCol = col;
		this.endCol = col + (length - 1);
	}
	
	
	
}
