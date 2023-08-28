package gov.me.irs.common.excel;

import lombok.Data;
import lombok.ToString;

/**
 * RowSpan - poi전용
 * 
 * @author Justin
 *
 */
@Data
@ToString
public final class RowSpan {
	
	private int startRow;
	private int endRow;
	private int startCol;
	private int endCol;
	
	public RowSpan(int row, int col, int length) {
		this.startRow = row;
		this.endRow = row + (length - 1);
		this.startCol = col;
		this.endCol = col;
	}
	
}
