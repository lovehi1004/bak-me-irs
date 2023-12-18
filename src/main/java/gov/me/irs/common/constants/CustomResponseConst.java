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
		
	}
	
	public final static class MESSAGE {
		public final static String REG_LIMIT_CNT = "등록가능한 범위를 초괴하였습니다.";
	}
	
}
