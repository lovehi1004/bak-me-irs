package gov.me.irs.common.excel;

import java.util.ArrayList;
import java.util.List;

import lombok.extern.slf4j.Slf4j;

/**
 * ExcelMatrix - poi전용
 * 
 * @author Justin
 *
 */
@Slf4j
public final class ExcelMatrix {
	
	private int rowSize;
	private int cellSize;
	private List<ColSpan> colSpanList = new ArrayList<ColSpan>();
	private List<RowSpan> rowSpanList = new ArrayList<RowSpan>();
	
	private ExcelCell matrix[][];
	
	public ExcelCell[][] getMatrix() {
		return this.matrix;
	}
	
	/**
	 * 저장된 colSpan 정보 불러오기
	 * 
	 * @return
	 */
	public List<ColSpan> getColSpanList() {
		return colSpanList;
	}
	
	/**
	 * 저장된 rowSpan 정보 불러오기
	 * 
	 * @return
	 */
	public List<RowSpan> getRowSpanList() {
		return rowSpanList;
	}



	/**
	 * 
	 * @param rowSize - row 갯수
	 * @param cellSize - cell 갯수
	 */
	public ExcelMatrix(int rowSize, int cellSize) {
		this.rowSize = rowSize;
		this.cellSize = cellSize;
		this.matrix = new ExcelCell[rowSize][cellSize];
		
		/* 초기화 */
		for (int idx = 0; idx < this.matrix.length; idx++) {
			for (int kdx = 0; kdx < this.matrix[idx].length; kdx++) {
				this.matrix[idx][kdx] = ExcelCell.builder().build();
			}
		}
		
		log.debug("[ExcelMatrix][rowSize][{}][cellSize][{}]", this.rowSize, this.cellSize);
		
	}
	
	/**
	 * 출력 하기 - 설정정보 확인용
	 * 
	 */
	public void print() {
		log.debug("[print START]");
		for (ExcelCell[] row : this.matrix) {
			log.debug("[row START]");
			for (ExcelCell excelCell : row) {
				log.debug("[cell][{}]", excelCell);
			}
			log.debug("[row END]");
		}
		log.debug("[print END]");
	}
	
	/**
	 * key 설정
	 * 
	 * @param keyList
	 * @return
	 * @throws Exception 
	 */
	public void setRowKeyList(String... keyList) throws Exception {
		
		if(keyList.length != cellSize) {
			throw new Exception("check keyList size");
		}
		
		for (int idx = 0; idx < keyList.length; idx++) {
			this.matrix[0][idx].setKey(keyList[idx]);
		}
		
	}
	
	/**
	 * index 지정 key 설정
	 * 
	 * @param rowIdx
	 * @param keyList
	 * @return
	 * @throws Exception 
	 */
	public void setRowKeyList(int rowIdx, String... keyList) throws Exception {
		
		this.checkCellIndex(rowIdx, keyList);
		for (int idx = 0; idx < keyList.length; idx++) {
			this.matrix[rowIdx][idx].setKey(keyList[idx]);
		}
		
	}
	
	/**
	 * index 지정 key 설정
	 * 
	 * @param rowIdx
	 * @param keyList
	 * @return
	 * @throws Exception 
	 */
	public void setRowAlignList(int rowIdx, short... alignList) throws Exception {
		
		this.checkCellIndex(rowIdx, alignList);
		for (int idx = 0; idx < alignList.length; idx++) {
			this.matrix[rowIdx][idx].setAlign(alignList[idx]);
		}
		
	}
	
	/**
	 * Matrix에 key 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param key
	 * @throws Exception 
	 */
	public void setKey(int rowIdx, int cellIdx, String key) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setKey(key);
	}
	
	/**
	 * Matrix에 type 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param type
	 * @throws Exception 
	 */
	public void setType(int rowIdx, int cellIdx, int type) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setType(type);
	}
	
	/**
	 * Matrix에 defaultString 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param defaultString
	 * @throws Exception 
	 */
	public void setDefaultString(int rowIdx, int cellIdx, String defaultString) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setDefaultString(defaultString);
	}
	
	/**
	 * Matrix에 defaultInt 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param defaultInt
	 * @throws Exception 
	 */
	public void setDefaultInt(int rowIdx, int cellIdx, int defaultInt) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setDefaultInt(defaultInt);
	}
	
	/**
	 * Matrix에 rowSpan 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param rowSpan
	 * @throws Exception 
	 */
	public void setRowSpan(int rowIdx, int cellIdx, int rowSpan) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setRowSpan(rowSpan);
		
		/* rowSpan 정보 저장 */
		rowSpanList.add(new RowSpan(rowIdx, cellIdx, rowSpan));
	}
	
	/**
	 * Matrix에 colSpan 설정하기
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @param colSpan
	 * @throws Exception 
	 */
	public void setColSpan(int rowIdx, int cellIdx, int colSpan) throws Exception {
		this.checkIndex(rowIdx, cellIdx);
		this.matrix[rowIdx][cellIdx].setColSpan(colSpan);
		
		/* colSpan 정보 저장 */
		colSpanList.add(new ColSpan(rowIdx, cellIdx, colSpan));
	}
	
	/**
	 * keyList size 체크
	 * 
	 * @param rowIdx
	 * @param keyList
	 * @throws Exception
	 */
	private void checkCellIndex(int rowIdx, String... keyList) throws Exception {
		if(rowIdx > rowSize - 1 || cellSize != keyList.length) {
			throw new Exception("check keyList size");
		}
	}
	
	/**
	 * alignList size 체크
	 * 
	 * @param rowIdx
	 * @param alignList
	 * @throws Exception
	 */
	private void checkCellIndex(int rowIdx, short... alignList) throws Exception {
		if(rowIdx > rowSize - 1 || cellSize != alignList.length) {
			throw new Exception("check keyList size");
		}
	}
	
	/**
	 * row, cell index 체크
	 * 
	 * @param rowIdx
	 * @param cellIdx
	 * @throws Exception
	 */
	private void checkIndex(int rowIdx, int cellIdx) throws Exception {
		if(rowIdx > rowSize - 1 || cellIdx > cellSize - 1) {
			throw new Exception("check keyList size");
		}
	}

}
