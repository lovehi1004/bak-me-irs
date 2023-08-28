package gov.me.irs.core.config;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;

import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMappingExceptionResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter.spring.core.servlet.NexacroInterceptor;
import com.nexacro.uiadapter.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;

import lombok.RequiredArgsConstructor;

/**
 * Nexacro N 설정
 * ☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★
 * 		- Nexacro 관련 주석은 Nexacro 가이드를 토대로 추가하여 내용이 제한적임을 참고
 * ☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★
 * 
 * @see https://www.playnexacro.com/#show:learn:5421, https://www.playnexacro.com/#show:learn:5383
 * @author Justin
 *
 */
@Configuration
@RequiredArgsConstructor
public class NexacroConfig {
	
	private final static String DEFAULT_ERROR_MSG = "i18n.message.nexacro.default.error.msg";
	
	private final MessageSource messageSource;
	
	/**
	<!-- Nexacro N uiadapter 연동 작업 -->
	 */
	@Bean
	public NexacroInterceptor nexacroInterceptor() {
		return new NexacroInterceptor();
	}
	
	@Bean
	public NexacroFileView nexacroFileView() {
		return new NexacroFileView();
	}
	
	@Bean
	public NexacroView nexacroView() {
		
		NexacroView nexacroView = new NexacroView();
		nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_JSON);
		nexacroView.setDefaultCharset(StandardCharsets.UTF_8.name());
		
		return nexacroView;
	}
	
	/**
	<!-- 넥사크로N RequestMappingHandlerAdapter 구현체 등록 -->
    <!-- 넥사크로플랫폼 의 입/출력 데이터 변환을 수행하기 위해 Spring의 RequestMappingHandlerAdapter의 확장된 형태.  java.util.Map의 데이터 변환을 제공  -->
	 */
	
	@Bean
	public List<HandlerMethodArgumentResolver> nexacroMethodArgumentResolver() {
		
		List<HandlerMethodArgumentResolver> list = new ArrayList<HandlerMethodArgumentResolver>();
		list.add(new NexacroMethodArgumentResolver());
		
		return list;
	}
	
	@Bean
	public List<HandlerMethodReturnValueHandler> nexacroHandlerMethodReturnValueHandler() {
		
		List<HandlerMethodReturnValueHandler> list = new ArrayList<HandlerMethodReturnValueHandler>();
		
		NexacroHandlerMethodReturnValueHandler handler = new NexacroHandlerMethodReturnValueHandler();
		handler.setView(nexacroView());
		handler.setFileView(nexacroFileView());
		list.add(handler);
		
		return list;
	}
	
	@Bean
    public NexacroRequestMappingHandlerAdapter nexacroRequestMappingHandlerAdapter() {
		
		NexacroRequestMappingHandlerAdapter adapter = new NexacroRequestMappingHandlerAdapter();
		adapter.setOrder(1);
		adapter.setCustomArgumentResolvers(nexacroMethodArgumentResolver());
		adapter.setCustomReturnValueHandlers(nexacroHandlerMethodReturnValueHandler());
		
        return adapter;
    }
	
	@Bean
	public List<HandlerExceptionResolver> nexacroHandlerExceptionResolver() {
		
		List<HandlerExceptionResolver> list = new ArrayList<HandlerExceptionResolver>();
		
		NexacroMappingExceptionResolver nexacroMappingExceptionResolver = new NexacroMappingExceptionResolver();
		nexacroMappingExceptionResolver.setView(nexacroView());
		nexacroMappingExceptionResolver.setShouldLogStackTrace(true);
		nexacroMappingExceptionResolver.setShouldSendStackTrace(true);
		nexacroMappingExceptionResolver.setDefaultErrorMsg(DEFAULT_ERROR_MSG);
		nexacroMappingExceptionResolver.setMessageSource(messageSource);
		nexacroMappingExceptionResolver.setOrder(1);
		
		list.add(nexacroMappingExceptionResolver);
		
		return list;
	}
	
}
