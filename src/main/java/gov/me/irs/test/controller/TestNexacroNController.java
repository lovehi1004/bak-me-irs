package gov.me.irs.test.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.core.config.property.JasyptProperties;
import gov.me.irs.core.config.property.JwtProperties;
import gov.me.irs.core.config.property.Sn3hcvProperties;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.constants.RoleConst;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Nexacro N Controller 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class TestNexacroNController {
	
	private final Sn3hcvProperties sn3hcvProperties;
	private final JasyptProperties jasyptProperties;
	private final JwtProperties jwtProperties;
	
	private final MessageSource messageSource;
	
//	private final StatisticsService statisticsService;
	
	/**
	 * 조회 테스트용 - 시스템접속통계 일별통계조회
	 * @param requestMap
	 * @return
	 */
	@PreAuthorize("hasRole('" + RoleConst.ROLE_BIZADMIN + "') or hasRole('" + RoleConst.ROLE_SUPER + "')")
	@PostMapping("/test/selectConnectDailyStatisticsList.irs")
	public NexacroResult selectConnectDailyStatisticsList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 조회 테스트용 - 시스템접속통계 일별통계조회 ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		
		log.debug("[############################################################]");
		log.debug("[home][{}]", sn3hcvProperties.home);
		log.debug("[sn3hcv][{}]", sn3hcvProperties.sn3hcv);
		log.debug("[template][{}]", sn3hcvProperties.template);
		log.debug("[modules][{}]", sn3hcvProperties.modules);
		log.debug("[webRoot][{}]", sn3hcvProperties.web.root);
		log.debug("[rsRoot][{}]", sn3hcvProperties.rs.root);
		log.debug("[############################################################]");
		log.debug("[jasyptProperties.password][{}]", jasyptProperties.password);
		log.debug("[############################################################]");
		log.debug("[JwtProperties.accessToken.secretKey][{}]", jwtProperties.accessToken.secretKey);
		log.debug("[JwtProperties.accessToken.validTime][{}]", jwtProperties.accessToken.validTime);
		log.debug("[JwtProperties.refreshToken.secretKey][{}]", jwtProperties.refreshToken.secretKey);
		log.debug("[JwtProperties.refreshToken.validTime][{}]", jwtProperties.refreshToken.validTime);
		log.debug("[############################################################]");
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 세션확인 START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		log.debug("[tableUser ▶▶▶▶▶▶▶▶▶▶ ]["+tableUser+"]");
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][xxxxxx][{}]", (tableUser == null));
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][getUserId][{}]", tableUser.getUserId());
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][getUsername][{}]", tableUser.getUsername());
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][getLgnId][{}]", tableUser.getLgnId());
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][getUserClCd][{}]", tableUser.getUserClCd());
		log.debug("[authUser ▶▶▶▶▶▶▶▶▶▶ ][getRoles][{}]", tableUser.getRoles());
		
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 세션확인 END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		/* US 테스트 */
		LocaleContextHolder.setLocale(Locale.US);
    	log.debug("i18n 테스트 : {}", messageSource.getMessage("i18n.message.test1", null, LocaleContextHolder.getLocale()));
    	log.debug("i18n 파라미터 테스트 : {}", messageSource.getMessage("i18n.message.test2", Arrays.asList("테스트1", "테스트2").toArray(), LocaleContextHolder.getLocale()));

//		List<Map<String, Object>> list = statisticsService.selectConnectDailyStatisticsList(requestMap);
//		nexacroResult.addDataSet("list", list);
		
		return nexacroResult;
	}
	
	@PreAuthorize("hasRole('" + RoleConst.ROLE_SUPER + "')")
	@PostMapping("/test/selectSampleList.do")
	public NexacroResult selectSampleList(@ParamDataSet(name = "input1") Map<String, Object> requestMap, @ParamDataSet(name = "input1") List<Map<String, Object>> requestList) throws Exception {
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		log.debug("[requestList][{}]", requestList);
		log.debug("[requestMap][{}]", requestMap);
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		for (int index = 0; index < 10; index++) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("id", "ID00" +index);
			map.put("name", "이름" +index);
			map.put("description", "설명" +index);
			map.put("uesYn", "사용여부" +index);
			map.put("regUser", "등록사용자" +index);
			
			list.add(map);
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet("output1", list);
		return nexacroResult;
	}
	
}