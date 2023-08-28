package gov.me.irs.core.wrapper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

/**
 * 공통 예외처리 전용 Multipart 요소를 제거한 HttpServletRequestWrapper 생성 Class
 * 
 * @author Justin
 *
 */
public class ExcludeMultipartHttpServletRequestWrapper extends HttpServletRequestWrapper {
	
	public ExcludeMultipartHttpServletRequestWrapper(HttpServletRequest request) {
		super(request);
	}
	
	@Override
	public String getHeader(String name) {
		if ("content-type".equalsIgnoreCase(name)) {
			return null; // 멀티파트 정보 제외
		}
		return super.getHeader(name);
	}
	
	@Override
	public String getContentType() {
		return null; // 멀티파트 정보 제외
	}
}
