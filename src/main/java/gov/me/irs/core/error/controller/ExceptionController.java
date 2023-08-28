package gov.me.irs.core.error.controller;

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
	public NexacroResult exceptionCommon(@PathVariable("exception") int exception){
		
		log.error("▶▶▶▶▶▶▶▶▶▶ [exception][ Controller 공통 예외발생 ]");
		
		NexacroResult nexacroResult = new NexacroResult();
		
		if(exception == JwtAuthEnum.METHOD_NOT_ALLOWED.getCode()) {
			log.debug("[METHOD_NOT_ALLOWED]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.METHOD_NOT_ALLOWED, JwtAuthEnum.METHOD_NOT_ALLOWED));
		} else if(exception == JwtAuthEnum.NOT_ACCEPTABLE.getCode()) {
			log.debug("[NOT_ACCEPTABLE]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.NOT_ACCEPTABLE, JwtAuthEnum.NOT_ACCEPTABLE));
		} else if(exception == JwtAuthEnum.NOT_FOUND.getCode()) {
			log.debug("[NOT_FOUND]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.NOT_FOUND, JwtAuthEnum.NOT_FOUND));
		} else if(exception == JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION.getCode()) {
			log.debug("[MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.MAX_UPLOAD_SIZE_EXCEEDED_EXCEPTION));
		} else if(exception == JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED.getCode()) {
			log.debug("[AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.FORBIDDEN, JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED));
		} else {
			log.debug("[ETC]");
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.INTERNAL_SERVER_ERROR, JwtAuthEnum.UNKNOWN_ERROR));
		}
		
		return nexacroResult;
	}
}
