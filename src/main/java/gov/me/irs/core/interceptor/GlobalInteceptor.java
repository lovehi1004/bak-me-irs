package gov.me.irs.core.interceptor;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import gov.me.irs.core.enumeration.JwtAuthEnum;
import lombok.extern.slf4j.Slf4j;

/**
 * Global 인터셉터
 * 
 * @author Justin
 *
 */
@Slf4j
public class GlobalInteceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		log.debug("[preHandle] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ START");
		
		String uri = request.getRequestURI().substring(request.getContextPath().length());
		
		/* uri 확장자 */
		int lastIndex = uri.lastIndexOf(".");
		String ext = lastIndex >= 0 ? uri.substring(lastIndex+1) : "";
		
		Map<String, String> headerMap = new HashMap<String, String>();
		
		Enumeration<String> headers = request.getHeaderNames();
		while(headers.hasMoreElements()) {
			String headerName = headers.nextElement();
			headerMap.put(headerName, request.getHeader(headerName));
		}
		
		log.debug("[헤더][{}]", headerMap);
		log.debug("[Request URL][{}][URI]][{}][ext][{}]", request.getRequestURL(), request.getRequestURI(), ext);
		log.debug("[preHandle] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ END");
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		log.debug("[postHandle] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ START");
		log.debug("[postHandle] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ END");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		
		log.debug("[afterCompletion] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ START");
		if(ex != null) {
			log.debug("[예외상황][{}]", ex);
			if(ex instanceof AccessDeniedException) {			/* @PreAuthorize에 대한 예외처리 */
				
				log.debug("[@PreAuthorize 리다이렉트]");
				JwtAuthEnum jwtAuthEnum = JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED;
				
				RequestDispatcher dispatcher = request.getRequestDispatcher("/exception/common/" + jwtAuthEnum.getCode());
				request.setAttribute("exception", jwtAuthEnum.getCode());
				dispatcher.forward(request, response);
				
			} else {
				JwtAuthEnum jwtAuthEnum = JwtAuthEnum.UNKNOWN_ERROR;
				
				RequestDispatcher dispatcher = request.getRequestDispatcher("/exception/common/" + jwtAuthEnum.getCode());
				request.setAttribute("exception", jwtAuthEnum.getCode());
				request.setAttribute("cause", ex.getCause());
				dispatcher.forward(request, response);
				
			}
		}
		
		log.debug("[afterCompletion] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■▶ END");		
	}
	
}
