package gov.me.irs.core.config.handler;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartResolver;

import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.wrapper.ExcludeMultipartHttpServletRequestWrapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class CoreAccessDeniedHandler implements AccessDeniedHandler {
	
	private final MultipartResolver multipartResolver;
	
	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException, ServletException {
		
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler][{}]", accessDeniedException);
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		log.debug("▶▶▶▶▶▶▶▶▶▶ [CoreAccessDeniedHandler]");
		
		HttpServletRequest forwardRequest = null;
		
		if(multipartResolver.isMultipart(request)) {
			forwardRequest = new ExcludeMultipartHttpServletRequestWrapper(request);
			
		} else {
			forwardRequest = request;
		}
		
		String exception = String.valueOf(JwtAuthEnum.AUTHENTICATION_ACCESS_DENIED.getCode());

		RequestDispatcher dispatcher = forwardRequest.getRequestDispatcher("/exception/auth/" + exception);
		request.setAttribute("exception", exception);
		dispatcher.forward(forwardRequest, response);
		
	}
}