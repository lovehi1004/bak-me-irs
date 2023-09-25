package gov.me.irs.common.constants;

/**
 * 시스템 공통 Global 상수정보
 * 
 * @author Justin
 *
 */
public final class Const {
	
	/**
	 * 서비스
	 * 
	 * @author Justin
	 *
	 */
	public final static class SERVICE {
		public final static String EXT = "irs";			// IRS시스템 - 서비스 URL 확장자
	}
	
	/**
	 * 코드
	 * 
	 * @author Justin
	 *
	 */
	public final static class CODE {
		public final static String SYS_CL_CD_SCC0001 = "SCC0001";			// IRS시스템 - Default
		public final static String SYS_CL_CD_SCC0002 = "SCC0002";			// 대고객시스템
	}
	
	/**
	 * MDC 키
	 * 
	 * @author Justin
	 *
	 */
	public final static class MDC {
		public final static String IP = "MDC_IP";			// request ip
	}
	
	/**
	 * 파일 업로드 SINGLE/MULTI 상수
	 * 
	 * @author Justin
	 *
	 */
	public final static class UPLOAD {
		public final static String SINGLE = "FTC0001";			// 단일업로드
		public final static String MULTI = "FTC0002";			// 일괄업로드
		
		public final static class STATUS {
			public final static String UPDATE = "U";
			public final static String INSERT = "I";
			public final static String DELETE = "D";
		}
		
	}
	
	/**
	 * 메뉴정보 - ROOT 메뉴ID 고정값
	 * 
	 * @author Justin
	 *
	 */
	public final static class MENU {
		public final static String SCC0001_MENU_ID = "MNI000000000";		// IRS시스템 최상위메뉴 - Default
		public final static String SCC0002_MENU_ID = "MNE000000000";		// 대고객시스템 최상위메뉴
		
		public final static String FOLDER = "MCC0001";		// 메뉴폴더
		public final static String LINK = "MCC0002";			// 메뉴링크
	}
	
	/**
	 * 인증 파라미터 정보
	 * 
	 * @author Justin
	 *
	 */
	public final static class CORE {
		/* 사용자 로그인 식별자 - 로그인ID or 이메일주소 */
		public final static String KEY_USER_IDENTIFIER = "id";
		public final static String KEY_USER_PASSWORD = "password";
		public final static String KEY_USER_ROLE = "role";
	}
	
	/**
	 * 공통 응답 결과 상수
	 * 
	 * @author Justin
	 *
	 */
	public final static class RESPONSE {
		
		/* 데이터 공통 응답정보 설정 키 */
		public final static String KEY_COMMON = "common";
	}
	
	/**
	 * 삭제여부 - delYn
	 * 
	 * @author Justin
	 *
	 */
	public final static class DEL {
		public final static String Y = "Y";
		public final static String N = "N";
	}
	
	/**
	 * 사용여부 - useYn
	 * 
	 * @author Justin
	 *
	 */
	public final static class USE {
		public final static String Y = "Y";
		public final static String N = "N";
	}
	
	/**
	 * 신규여부 - newYn
	 * 
	 * @author Justin
	 *
	 */
	public final static class NEW {
		public final static String Y = "Y";
		public final static String N = "N";
	}
	
	/**
	 * 문자형 상수
	 * 
	 * @author Justin
	 *
	 */
	public final static class CHARACTER {
		
		/**
		 * 결과YN - yn
		 * 
		 * @author Justin
		 *
		 */
		public final static class RESULT {
			public final static String Y = "Y";			/* y, success */
			public final static String N = "N";			/* n, fail */
		}
	}
	
	/**
	 * 숫자형 상수
	 * 
	 * @author Justin
	 *
	 */
	public final static class NUMERIC {
		public final static int EMPTY_LIST = 0;
		public final static int ZERO = 0;
	}
	
	/**
	 * 특수문자 상수
	 * 
	 * @author Justin
	 *
	 */
	public final static class SYMBOL {
		public final static String COMMA = ",";
		public final static String SLASH = "/";
	}
	

}
