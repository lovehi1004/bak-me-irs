package gov.me.irs.core.error.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import lombok.extern.slf4j.Slf4j;

/**
 * 인증 공통 예외처리
 * 
 * @author Justin
 *
 */
@Slf4j
@Controller
public class ExceptionController {

	@RequestMapping("/exception/auth/{exception}")
	public NexacroResult exceptionAuth(@PathVariable("exception") String exception){
		
		log.error("▶▶▶▶▶▶▶▶▶▶ [exception][ 인증 예외발생 ]");
		
		NexacroResult nexacroResult = new NexacroResult();
		
		if(exception == null) {
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.UNAUTHORIZED, JwtAuthEnum.AUTHENTICATION_UNKNOWN_ERROR));
		} else {
			JwtAuthEnum jwtAuthEnum = JwtAuthEnum.of(Integer.parseInt(exception));
			if(jwtAuthEnum != null) {
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.UNAUTHORIZED, jwtAuthEnum));
			} else {
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.UNAUTHORIZED, JwtAuthEnum.AUTHENTICATION_ACCESS_DENIED));
			}
		}
		return nexacroResult;
	}
	
	@RequestMapping("/exception/common/{exception}")
	public NexacroResult exceptionCommon(@PathVariable("exception") int exception, HttpServletRequest request){
		
		log.error("▶▶▶▶▶▶▶▶▶▶ [exception][ Controller 공통 예외발생 ]["+(String.valueOf(exception))+"]");
		
		NexacroResult nexacroResult = new NexacroResult();
		
		if(exception == JwtAuthEnum.METHOD_NOT_ALLOWED.getCode()) {
			log.error("[METHOD_NOT_ALLOWED]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.METHOD_NOT_ALLOWED, JwtAuthEnum.METHOD_NOT_ALLOWED));
		} else if(exception == JwtAuthEnum.NOT_ACCEPTABLE.getCode()) {
			log.error("[NOT_ACCEPTABLE]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.NOT_ACCEPTABLE, JwtAuthEnum.NOT_ACCEPTABLE));
		} else if(exception == JwtAuthEnum.NOT_FOUND.getCode()) {
			log.error("[NOT_FOUND]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.NOT_FOUND, JwtAuthEnum.NOT_FOUND));
		} else if(exception == JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION.getCode()) {
			log.error("[MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION));
		} else if(exception == JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED.getCode()) {
			log.error("[AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.FORBIDDEN, JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED));
		} else if(exception == JwtAuthEnum.RSA_INVALID.getCode()) {				/* RSA 예외처리 */
			log.error("[RSA_INVALID]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.RSA_INVALID));
		} else {
			Throwable cause = !ObjectUtils.isEmpty(request.getAttribute("cause")) ? (Throwable) request.getAttribute("cause") : null;
			log.error("[ETC][cause]["+cause+"]");
			
			nexacroResult.setErrorCode(-1);
			nexacroResult.setErrorMsg(JwtAuthEnum.UNKNOWN_ERROR.getMessage());
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.UNKNOWN_ERROR, cause));
		}
		
		return nexacroResult;
	}
}
