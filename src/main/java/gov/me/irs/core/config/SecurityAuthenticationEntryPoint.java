package gov.me.irs.core.config;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.multipart.MultipartResolver;

import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.token.constants.JwtConst;
import gov.me.irs.core.wrapper.ExcludeMultipartHttpServletRequestWrapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Security 인증 예외처리
 * 
 * @author Justin
 *
 */
@Slf4j
@Configuration
@RequiredArgsConstructor
public class SecurityAuthenticationEntryPoint implements AuthenticationEntryPoint {
	
	private final MultipartResolver multipartResolver;
	
	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
		log.error("▶▶▶▶▶▶▶▶▶▶ [commence]");
		log.error("▶▶▶▶▶▶▶▶▶▶ [authException][{}]", authException);
		
		boolean hasException = false;
		
		String exception = String.valueOf(JwtConst.AUTH_CODE.AUTHENTICATION_UNKNOWN_ERROR);
				
		log.error("▶▶▶▶▶▶▶▶▶▶ [exception][{}]", exception);
		
		if(request.getAttribute("exception") != null) {
			hasException = true;
			exception = String.valueOf(request.getAttribute("exception"));
		}
		
		log.error("[multipartResolver.isMultipart(request)][{}]", multipartResolver.isMultipart(request));
		
		HttpServletRequest forwardRequest = null;
		
		if(multipartResolver.isMultipart(request)) {
			forwardRequest = new ExcludeMultipartHttpServletRequestWrapper(request);
			
			/* 선행된 exception이 존재하지 않으면 */
			if(!hasException) {
				/* mulltipart exception만 발생시 */
				log.error("[Multipart Parameter][{}]", JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION.getMessage());
				exception = String.valueOf(JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION.getCode());
			}
			
		} else {
			forwardRequest = request;
		}
		
		RequestDispatcher dispatcher = forwardRequest.getRequestDispatcher("/exception/auth/" + exception);
		request.setAttribute("exception", exception);
		dispatcher.forward(forwardRequest, response);
        
	}
	
}
