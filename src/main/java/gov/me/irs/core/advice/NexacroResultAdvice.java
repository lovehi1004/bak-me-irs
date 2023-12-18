package gov.me.irs.core.advice;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.sign.vo.CoreResponse;
import gov.me.irs.core.token.constants.JwtConst;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
@Component
public class NexacroResultAdvice {
	
	/**
	 * Controller 성공 이후 AOP
	 * 
	 * @param result
	 * @throws PlatformException
	 */
	@AfterReturning(pointcut = "execution(* gov.me.irs..controller.*.*(..))", returning = "result")
	public void after(Object result) throws PlatformException {
		
		if(result instanceof NexacroResult) {
			
			log.debug("-----------------------------------------------------------------");
			log.debug("|                        Nexacro Request                        |");
			log.debug("-----------------------------------------------------------------");
			
			NexacroResult nexacroResult = (NexacroResult) result;
			
			Map<String, Object> dataSetsMap = nexacroResult.getDataSets();
			
			/* 공통 응답정보가 비어있으면 */
			if(ObjectUtils.isEmpty(dataSetsMap.get(Const.RESPONSE.KEY_COMMON))) {
				log.debug("[공통 응답정보 없음][▶▶▶▶▶▶▶▶▶▶][성공 정보 채우기]");
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.OK));
			} else {
				log.debug("[공통 응답정보 있음][▶▶▶▶▶▶▶▶▶▶][있음]");
			}
			
			/* TODO - 예외처리 추가시 이곳에 로직 추가 */
			/* TODO - 예외처리 추가시 이곳에 로직 추가 */
			/* TODO - 예외처리 추가시 이곳에 로직 추가 */
			/* TODO - 예외처리 추가시 이곳에 로직 추가 */
			/* TODO - 예외처리 추가시 이곳에 로직 추가 */
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ JWT 응답정보 처리가능 지점 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
			
			String accessToken = StringUtils.trimToEmpty(response.getHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY));
			String refreshToken = StringUtils.trimToEmpty(response.getHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY));
			String issueToken = StringUtils.trimToEmpty(response.getHeader(JwtConst.JWT_HTTP_HEADER_ISSUE_TOKEN_KEY));
			String reissueToken = StringUtils.trimToEmpty(response.getHeader(JwtConst.JWT_HTTP_HEADER_REISSUE_TOKEN_KEY));
			
			CoreResponse coreResponse = (CoreResponse) dataSetsMap.get(Const.RESPONSE.KEY_COMMON);
			coreResponse.setAccessToken(accessToken);
			coreResponse.setRefreshToken(refreshToken);
			coreResponse.setIssueToken(ObjectUtils.isEmpty(issueToken) ? Const.NEW.N : Const.NEW.Y);
			coreResponse.setReissueToken(ObjectUtils.isEmpty(reissueToken) ? Const.NEW.N : Const.NEW.Y);
			
			log.debug("[Access Token정보][{}][Refresh Token정보][{}][Token 신규여부][{}][Token 재발급여부][{}]", accessToken, refreshToken, issueToken, reissueToken);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ JWT 응답정보 처리가능 지점 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			
		} else {
			log.debug("-----------------------------------------------------------------");
			log.debug("|                     None Nexacro Request                      |");
			log.debug("-----------------------------------------------------------------");
		}
	}

}
