package gov.me.irs.core.advice;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.NoHandlerFoundException;

import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.wrapper.ExcludeMultipartHttpServletRequestWrapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Controller - 시스템 공통 예외처리
 * @author Justin
 *
 */
@Slf4j
@ControllerAdvice
@RequiredArgsConstructor
public class CoreControllerAdvice {
	
	private final MultipartResolver multipartResolver;
	
	@ExceptionHandler(NoHandlerFoundException.class)
	public void noHandlerFoundException(HttpServletRequest request, HttpServletResponse response, NoHandlerFoundException e) throws Exception {
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/exception/common/" + JwtAuthEnum.NOT_FOUND.getCode());
		request.setAttribute("exception", JwtAuthEnum.NOT_FOUND.getCode());
		dispatcher.forward(request, response);
		
	}
	
	/**
	 * Controller 공통 예외처리 메소드
	 * 
	 * @param e
	 * @return
	 * @throws IOException 
	 * @throws ServletException 
	 */
	@ExceptionHandler(Exception.class)
	public void handleException(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
		
		HttpServletRequest forwardRequest = null;
		
		JwtAuthEnum jwtAuthEnum = JwtAuthEnum.UNKNOWN_ERROR;
		
		if(e instanceof HttpRequestMethodNotSupportedException) {
			log.debug("[HttpRequestMethodNotSupportedException]");
			jwtAuthEnum = JwtAuthEnum.METHOD_NOT_ALLOWED;
		} else if(e instanceof HttpMediaTypeNotAcceptableException) {
			log.debug("[HttpMediaTypeNotAcceptableException]");
			jwtAuthEnum = JwtAuthEnum.NOT_ACCEPTABLE;
		} else if(e instanceof AccessDeniedException) {			/* @PreAuthorize에 대한 예외처리 */
			log.debug("[AccessDeniedException]");
			jwtAuthEnum = JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED;
		} else if(e instanceof MaxUploadSizeExceededException) {
			log.debug("[MaxUploadSizeExceededException]");
			jwtAuthEnum = JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION;
			
			if(multipartResolver.isMultipart(request)) {
				forwardRequest = new ExcludeMultipartHttpServletRequestWrapper(request);
			} else {
				forwardRequest = request;
			}
		}
		
		log.error("[@ExceptionHandler][Controller Fail]["+e.getClass().getSimpleName()+"]["+e.getMessage()+"]["+jwtAuthEnum.getCode()+"]["+e.getCause()+"]");
		log.error("[@ExceptionHandler]", e);
		
		RequestDispatcher dispatcher = forwardRequest.getRequestDispatcher("/exception/common/" + jwtAuthEnum.getCode());
		request.setAttribute("exception", jwtAuthEnum.getCode());
		if(jwtAuthEnum == JwtAuthEnum.UNKNOWN_ERROR) {
			request.setAttribute("cause", e.getCause());
		}
		dispatcher.forward(forwardRequest, response);
		
	}
	
}
