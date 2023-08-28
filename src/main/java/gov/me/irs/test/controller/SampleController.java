package gov.me.irs.test.controller;

import java.time.LocalDateTime;
import java.util.Arrays;
//import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.stereotype.Controller;

import gov.me.irs.core.config.property.CommonProperties;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Sample Controller 예제
 * 
 * @author Justin
 *
 */
@Slf4j
@RequiredArgsConstructor
@Controller
public class SampleController {
	
	private final CommonProperties commonProperties;
	
	/**
	 * i18n 테스트
	 */
	private final MessageSource messageSource;
	
	/**
	 * SecurityConfig의 지정된 role 범위외의 permitAll() 에 해당하는 url이다.
	 * JWT 토큰 여부 관계없이 url 호출이 가능한가에 대한 테스트용 url이다.
	 * - jwt 토큰 관계없이 호출되어야 한다.
	 * 
	 * @return
	 */
	@PostMapping("/test/sample")
	public String test(){
		
    	/* US 테스트 */
//    	LocaleContextHolder.setLocale(Locale.US);
//    	LocaleContextHolder.setLocale(new Locale("es", "ES"));
		
		log.debug(">>> SampleController test: {}", LocalDateTime.now());
    	log.debug("로케일1-국가 : {}", LocaleContextHolder.getLocale().getDisplayName());
    	log.debug("로케일2-언어 : {}", LocaleContextHolder.getLocale().getDisplayLanguage());
    	log.debug("프로퍼티 테스트1 : {}", commonProperties.getProperty("web.example.prop"));
    	log.debug("i18n 테스트 : {}", messageSource.getMessage("i18n.message.test1", null, LocaleContextHolder.getLocale()));
    	log.debug("i18n 파라미터 테스트 : {}", messageSource.getMessage("i18n.message.test2", Arrays.asList("테스트1", "테스트2").toArray(), LocaleContextHolder.getLocale()));

		return "<h1>sample -역할없이</h1>";
	}
}