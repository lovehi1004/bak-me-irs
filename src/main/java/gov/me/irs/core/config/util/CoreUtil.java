package gov.me.irs.core.config.util;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.enumeration.CoreResponseEnumType;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.sign.vo.CoreResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 유틸
 * 
 * @author Justin
 *
 */
@Slf4j
public final class CoreUtil {
	
	/**
	 * 데이터 공통 응답정보 설정
	 * 
	 * @param coreResponse
	 * @return
	 */
	public final static Map<String, Object> getCommonResponse(CoreResponse coreResponse) {
		Map<String, Object> commonMap = new HashMap<String, Object>();
		commonMap.put(Const.RESPONSE.KEY_COMMON, coreResponse);
		return commonMap;
	}
	
	/**
	 * 데이터 공통 응답정보 설정 - 넥사크로용
	 * 
	 * @param coreResponse
	 * @return
	 */
	public final static void setCommonResponse(NexacroResult nexacroResult, CoreResponse coreResponse) {
		nexacroResult.addDataSet(Const.RESPONSE.KEY_COMMON, coreResponse);
	}
	
	/**
	 * 공통 응답 Object 생성
	 * 
	 * @param httpStatus
	 * @param jwtAuthEnum
	 * @return
	 */
	public final static CoreResponse getCoreResponse(HttpStatus httpStatus, CoreResponseEnumType responseEnum) {
		return CoreUtil.getCoreResponse(httpStatus, responseEnum, org.apache.commons.lang3.StringUtils.EMPTY);
		
	}
	
	/**
	 * 공통 응답 Object 생성, 시스템 Exception메세지 포함
	 * 
	 * @param httpStatus
	 * @param jwtAuthEnum
	 * @param t
	 * @return
	 */
	public final static CoreResponse getCoreResponse(HttpStatus httpStatus, CoreResponseEnumType responseEnum, Throwable t) {
		if(t == null) {
			return CoreUtil.getCoreResponse(httpStatus, responseEnum);
		} else {
			return CoreUtil.getCoreResponse(httpStatus, responseEnum, t.getMessage());
		}
	}
	
	/**
	 * 공통 응답 Object 생성, 시스템메세지 포함
	 * 
	 * @param httpStatus
	 * @param jwtAuthEnum
	 * @param t
	 * @return
	 */
	public final static CoreResponse getCoreResponse(HttpStatus httpStatus, CoreResponseEnumType responseEnum, String message) {
		
		log.debug("[▶▶▶▶▶▶▶▶▶▶응답정보][응답코드][{}][응답메세지][{}]", responseEnum.getCode(), responseEnum.getMessage());
		
		if(ObjectUtils.isEmpty(message)) {
			return CoreResponse.builder()
					.status(httpStatus.value())
					.code(responseEnum.getCode())
					.message(responseEnum.getMessage())
					.build();
		} else {
			return CoreResponse.builder()
					.status(httpStatus.value())
					.code(responseEnum.getCode())
					.message(responseEnum.getMessage())
					.systemMessage(message)
					.build();
		}
	}

	/**
	 * AuthenticationEntryPoint전용으로 사용하므로 예외발생 CASE만 처리된다.
	 * 
	 * @param response
	 * @param jwtAuthEnum
	 * @param e
	 * @throws IOException
	 */
	public final static void setResponse(HttpServletResponse response, JwtAuthEnum jwtAuthEnum, AuthenticationException e) throws IOException {
		log.debug("▶▶▶▶▶▶▶▶▶▶ [setResponse]", e);
		
		HttpStatus httpStatus = HttpStatus.UNAUTHORIZED;
		response.setCharacterEncoding(StandardCharsets.UTF_8.name());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(httpStatus.value());
		response.getWriter().print(new ObjectMapper().writeValueAsString(CoreUtil.getCommonResponse(CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, e))));
	}
	
	/**
	 * LogoutSuccessHandler전용으로 사용하므로 성공|실패 모든 CASE가 처리된다.
	 * 
	 * @param response
	 * @param jwtAuthEnum
	 * @throws IOException
	 */
	public final static void setResponse(HttpServletResponse response, JwtAuthEnum jwtAuthEnum, String systemMessage) throws IOException {
		log.debug("▶▶▶▶▶▶▶▶▶▶ [setResponse]");
		
		HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;			/* default 500 */
		
		switch(jwtAuthEnum) {
			case LOGOUT:
			case LOGOUT_UNKNOWN_STATE:
				httpStatus = HttpStatus.OK;
				break;
			case AUTHENTICATION_ACCESS_UNKNOWN_ERROR:
			case AUTHENTICATION_REFRESH_UNKNOWN_ERROR:
			case AUTHENTICATION_EXPIRED_TOKEN:
				httpStatus = HttpStatus.UNAUTHORIZED;
				break;
			case LOGOUT_MISSING_PARAMETERS:
				httpStatus = HttpStatus.BAD_REQUEST;
				break;
			default:
				httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;			/* default 500 */
				break;
		}
		
		response.setCharacterEncoding(StandardCharsets.UTF_8.name());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(httpStatus.value());
		response.getWriter().print(new ObjectMapper().writeValueAsString(CoreUtil.getCommonResponse(CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, systemMessage))));
	}
}
