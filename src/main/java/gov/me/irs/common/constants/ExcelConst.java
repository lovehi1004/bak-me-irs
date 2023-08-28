package gov.me.irs.common.constants;

/**
 * ExcelConst - poi전용
 * 
 * @author Justin
 *
 */
public final class ExcelConst {
	
	/**
	 * 엑셀 구분
	 * 
	 * @author Justin
	 *
	 */
	public final static class CONTENT_TYPE {
		
		/**
		 * xlsx
		 * - 읽기, 쓰기 사용 - 2007 이후 버전
		 * 
		 */
		public final static String XSSF = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		
		/**
		 * xls
		 * - 읽기 전용 - 97-2007
		 * 
		 */
		public final static String HSSF = "application/vnd.ms-excel";
		
		/**
		 * csv
		 * - 쓰기 전용
		 * 
		 */
		public final static String CSV = "text/csv";
	}
	
	public final static int STRING = 0;
	public final static int INT = 1;

}
