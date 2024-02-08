package gov.me.irs.core.token.constants;

/**
 * 시스템 공통 JWT 인증 코드 정보
 * 
 * @author Justin
 *
 */
public final class JwtConst {
	
	public final static String HTTP_HEADER_AUTH_TYPE = "Bearer";
	public final static String JWT_HTTP_HEADER_ACCESS_TOKEN_KEY = "Authorization";
	public final static String JWT_HTTP_HEADER_REFRESH_TOKEN_KEY = "RefreshToken";
	
	/* 발급 */
	public final static String JWT_HTTP_HEADER_ISSUE_TOKEN_KEY = "IssueToken";
	/* 재발급 */
	public final static String JWT_HTTP_HEADER_REISSUE_TOKEN_KEY = "ReissueToken";
	
	/**
	 * JWT 인증 코드
	 * 		- 범위 : 8000 ~ 9999
	 * 
	 * @author Justin
	 *
	 */
	public final static class AUTH_CODE {
		
		public final static int AUTHENTICATION_ACCESS_UNKNOWN_ERROR = 8001;
		public final static int AUTHENTICATION_REFRESH_UNKNOWN_ERROR = 8002;
		public final static int AUTHENTICATION_EXPIRED_TOKEN = 8003;
		public final static int AUTHENTICATION_REFRESH_UNSUPPORTED_TOKEN = 8004;
		
		public final static int AUTHENTICATION_EXTRA_ERROR_8011 = 8011;
		public final static int AUTHENTICATION_EXTRA_ERROR_8012 = 8012;
		public final static int AUTHENTICATION_EXTRA_ERROR_8013 = 8013;
		
		public final static int AUTHENTICATION_ACCESS_DENIED = 8403;
		public final static int AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED = 8603;
		public final static int AUTHENTICATION_HOLD_USER = 8604;
		public final static int AUTHENTICATION_SHUTDOWN_USER = 8605;
		
		public final static int LOGIN = 9000;
		public final static int LOGOUT = 9001;
		public final static int LOGOUT_UNKNOWN_STATE = 9002;
		public final static int LOGOUT_MISSING_PARAMETERS = 9003;
		
		public final static int NOT_FOUND_USER_ID = 9101;
		public final static int NOT_FOUND_USER_PWD = 9102;
		public final static int MISMATCH_USER_INFO = 9103;
		
		public final static int OK = 9200;
		
		public final static int BAD_REQUEST = 9400;
		public final static int NOT_FOUND = 9404;
		public final static int METHOD_NOT_ALLOWED = 9405;
		public final static int NOT_ACCEPTABLE = 9406;
		
		public final static int SESSION_INVALID = 9500;
		public final static int RSA_INVALID = 9600;
		
		public final static int UNKNOWN_ERROR = 9998;
		public final static int AUTHENTICATION_UNKNOWN_ERROR = 9999;
		
		/**
		 * 뷰어 다운로드
		 * 		- 범위 : 3000 ~ 3999
		 * 
		 */
		public final static int VIEWER_ERROR = 3001;
		
		/* 파일업로드 코드 */
		public final static int MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION = 9901;
		public final static int BAD_UPLOAD_REQUEST = 9902;
		
		/**
		 * 파일 다운로드
		 * 		- 범위 : 4000 ~ 4999
		 * 
		 */
		public final static int FILE_NOT_FOUND = 4998;
		public final static int FILE_UNKNOWN_ERROR = 4999;
	}
	
	public final static class AUTH_MESSAGE {
		
		public final static String AUTHENTICATION_ACCESS_UNKNOWN_ERROR = "인증정보가 존재하지 않습니다.";			/* Access Token */
		public final static String AUTHENTICATION_REFRESH_UNKNOWN_ERROR = "인증정보가 존재하지 않습니다.";			/* Refresh Token */
		public final static String AUTHENTICATION_EXPIRED_TOKEN = "로그아웃 되었습니다.";						/* 만료된 인증정보 입니다. */
		public final static String AUTHENTICATION_REFRESH_UNSUPPORTED_TOKEN = "변조된 인증정보 입니다.";
		
		public final static String AUTHENTICATION_EXTRA_ERROR_8011 = "만료 에러";
		public final static String AUTHENTICATION_EXTRA_ERROR_8012 = "변조 에러";
		public final static String AUTHENTICATION_EXTRA_ERROR_8013 = "형식, 길이 에러";
		
		public final static String AUTHENTICATION_ACCESS_DENIED = "권한이 없습니다.";
		public final static String AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED = "올바른 권한이 아닙니다.";			//@PreAuthorize 전용 예외처리
		public final static String AUTHENTICATION_HOLD_USER = "관리자에 의해 이용정지된 사용자입니다.";
		public final static String AUTHENTICATION_SHUTDOWN_USER = "관리자에 의해 폐쇄된 계정입니다.";
		
		public final static String LOGIN = "로그인 성공!";
		public final static String LOGOUT = "로그아웃 성공!";
		public final static String LOGOUT_UNKNOWN_STATE = "이미 로그아웃되었거나 만료된 Token입니다.";
		public final static String LOGOUT_MISSING_PARAMETERS = "로그아웃시 파라미터가 누락되었습니다. 다시 확인해 주세요.";
		
		public final static String NOT_FOUND_USER_ID = "계정이 존재하지 않습니다. 회원가입 진행 후 로그인 해주세요.";
		public final static String NOT_FOUND_USER_PWD = "비밀번호가 누락되었습니다.";
		public final static String MISMATCH_USER_INFO = "아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.";
		
		public final static String OK = "응답 성공";
		
		public final static String BAD_REQUEST = "잘못된 요청입니다.";
		public final static String NOT_FOUND = "요청자원이 존재하지 않습니다.";
		public final static String METHOD_NOT_ALLOWED = "허용되지 않는 HTTP Method입니다.";
		public final static String NOT_ACCEPTABLE = "허용되지 않는 요청입니다.";
		
		public final static String SESSION_INVALID = "올바른 인증정보가 아닙니다.";
		public final static String RSA_INVALID = "서버정보가 업데이트 되었습니다. 다시 시도해 주세요.";			/* 서버 리스타트 후 서버에서 관리되는 RSA정보가 초기화 되었을 경우 화면에 표시되는 메세지 */
		
		public final static String UNKNOWN_ERROR = "처리중 오류가 발생하였습니다.";
		public final static String AUTHENTICATION_UNKNOWN_ERROR = "인증 처리중 오류가 발생하였습니다.";
		
		public final static String VIEWER_ERROR = "문서뷰어 처리중 오류가 발생하였습니다.";
		
		/* 파일업로드 코드 */
		public final static String MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION = "파일업로드 최대 허용 크기를 초과하였습니다";
		public final static String BAD_UPLOAD_REQUEST = "잘못된 파일업로드 요청입니다.";
		
		public final static String FILE_NOT_FOUND = "파일다운로드 대상 파일이 존재하지 않습니다.";
		public final static String FILE_UNKNOWN_ERROR = "파일다운로드 처리중 오류가 발생하였습니다.";

	}
	
}
