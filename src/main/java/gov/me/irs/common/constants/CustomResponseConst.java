package gov.me.irs.common.constants;

/**
 * 사용자정의 데이터 공통 코드 정보
 * 
 * @author Justin
 *
 */
public final class CustomResponseConst {
	
	/**
	 * 사용자정의 데이터 공통 코드
	 * 		- 범위 : 2000 ~ 7999
	 * 
	 * @author Justin
	 *
	 */
	public final static class CODE {
		public final static int REG_LIMIT_CNT = 2001;
		public final static int VIEWER_ERROR = 3001;
		public final static int UNPROCESSABLE = 7000;
		
	}
	
	public final static class MESSAGE {
		public final static String REG_LIMIT_CNT = "등록가능한 범위를 초괴하였습니다.";
		public final static String VIEWER_ERROR = "문서뷰어 처리중 오류가 발생하였습니다.";
		public final static String UNPROCESSABLE = "처리가 가능한 유형이 아닙니다.";
		
	}
	
}
