package gov.me.irs.core.config;

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

import gov.me.irs.core.interceptor.GlobalInteceptor;

/**
 * WebMvcConfigurer 설정
 * 
 * @author Justin
 *
 */
@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {
	
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
		registry.addInterceptor(new GlobalInteceptor());
	}
	
	@Bean
	public DispatcherServlet dispatcherServlet() {
		DispatcherServlet dispatcherServlet = new DispatcherServlet();
		dispatcherServlet.setThrowExceptionIfNoHandlerFound(true);
		return dispatcherServlet;
	}
	
}
