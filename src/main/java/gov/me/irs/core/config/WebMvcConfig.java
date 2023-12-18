package gov.me.irs.core.config;

import javax.annotation.PostConstruct;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import gov.me.irs.core.config.property.CoreProperties;
import gov.me.irs.core.interceptor.GlobalInteceptor;
import gov.me.irs.core.raonk.servlet.RaonKHandlerServlet;
import gov.me.irs.core.raonk.servlet.RaonKViewerServlet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * WebMvcConfigurer 설정
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Configuration
@EnableWebMvc
@Slf4j
public class WebMvcConfig implements WebMvcConfigurer {
	
	@PostConstruct
	protected void init() throws Exception {
//		String profiles = commonProperties.getProperty("spring.profiles.active", StringUtils.EMPTY);;
		
		String profiles = System.getProperty("spring.profiles.active");
		log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ spring.profiles.active START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		log.info("[spring.profiles.active][{}]", profiles);
		log.info("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ spring.profiles.active END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		
		if(ObjectUtils.isEmpty(profiles)) {
			log.error("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [spring.profiles.active is required] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
			throw new Exception("[spring.profiles.active is required]");
		}
	}
	
	/* 라온K - 파일업로드/다운로드 서블릿 */
	private final RaonKHandlerServlet raonKHandlerServlet;
	
	/* 라온K - 뷰어 서블릿 */
	private final RaonKViewerServlet raonKViewerServlet;
	
	private final CoreProperties coreProperties;
	
	@Bean
	public ServletRegistrationBean<RaonKHandlerServlet> getRaonKHandlerServletRegistrationBean() {
		ServletRegistrationBean<RaonKHandlerServlet> registrationBean = new ServletRegistrationBean<>(raonKHandlerServlet);
		registrationBean.addUrlMappings(coreProperties.raon.url.raonkhandler);
		return registrationBean;
	}
	
	@Bean
	public ServletRegistrationBean<RaonKViewerServlet> getRaonKViewerServletRegistrationBean() {
		ServletRegistrationBean<RaonKViewerServlet> registrationBean = new ServletRegistrationBean<>(raonKViewerServlet);
		registrationBean.addUrlMappings(coreProperties.raon.url.raonkviewer);
		return registrationBean;
	}

	/**
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * local 전용설정 START
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 */
	
	/**
	 * 기본 index 화면 - local 전용설정, 로컬에는 웹서버가 없으니까
	 */
	@Override
	@Order(Ordered.HIGHEST_PRECEDENCE + 1)
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("redirect:/index.html");
	}
	
	/**
	 * Web Resource 자원 경로 설정 - local 전용설정, 로컬에는 웹서버가 없으니까
	 * 
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * local 전용설정 END
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 */
	
	/**
	 * 기본 index 화면 view resolver 연결 설정 - Controller To Jsp 서비스용
	 * 
	 * @return
	 */
	@Bean
	public ViewResolver internalResourceViewResolver() {
	    InternalResourceViewResolver bean = new InternalResourceViewResolver();
	    bean.setViewClass(JstlView.class);
	    bean.setPrefix("/");			/* 클립리포트 솔루션 설치파일(jsp) 경로로 인한 설정 변경, bean.setPrefix("/WEB-INF/views/"); */
	    bean.setSuffix(".jsp");
	    bean.setOrder(0);
	    return bean;
	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new GlobalInteceptor()).addPathPatterns("/**/*.irs");
	}
	
	@Bean
	public DispatcherServlet dispatcherServlet() {
		DispatcherServlet dispatcherServlet = new DispatcherServlet();
		dispatcherServlet.setThrowExceptionIfNoHandlerFound(true);
		return dispatcherServlet;
	}
	
}
