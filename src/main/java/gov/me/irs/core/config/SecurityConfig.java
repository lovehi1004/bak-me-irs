package gov.me.irs.core.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import gov.me.irs.core.filter.JwtAuthenticationFilter;
import gov.me.irs.core.config.handler.CoreAccessDeniedHandler;
import gov.me.irs.core.constants.RoleConst;
import gov.me.irs.core.user.handler.CoreLogoutSuccessHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Spring Security 설정
 * 
 * @author Justin
 *
 */
@Slf4j
@RequiredArgsConstructor
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig {
	
	private final SecurityAuthenticationEntryPoint securityAuthenticationEntryPoint;
	private final CoreLogoutSuccessHandler coreLogoutSuccessHandler;
	
	private final CoreAccessDeniedHandler coreAccessDeniedHandler;
	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	/**
	 * 비밀번호 암호화
	 * 
	 * @return
	 */
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
	public AuthenticationManager authenticationManagerBean(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	/**
	 * CORS 적용 - 로컬 개발용
	 * 
	 * @return
	 */
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
			public void addCorsMappings(CorsRegistry registry) {
            	registry.addMapping("/**").allowedOrigins("http://localhost:4098", "http://127.0.0.1:4098").allowedMethods("GET", "POST");
			}
        };
    }
	
	private final static String[] IGNORING_MATCH_LIST = {
//			"/",				/* root path */
			/* ■■■■■■■■■■■■■■■■■■■■ local 전용설정 START ■■■■■■■■■■■■■■■■■■■■ */
			/* web, was 분리 구성시 (개발서버 같은 경우) web서버에서 request를 가로채므로 기능이 동작하지 않으므로 영향없음 */
//			"/nexacrolib/**", "/FrameBase/**", "/Base/**", "/_resource_/**",
//			"/css/**", "/fonts/**", "/images/**", "/js/**", "/sol/**",
//			"/favicon.ico"
			/* ■■■■■■■■■■■■■■■■■■■■ local 전용설정 END ■■■■■■■■■■■■■■■■■■■■ */
			};
	
	/**
	 * Security 적용 제외 설정
	 * 
	 * @return
	 */
	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return web -> {
			web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
			web.ignoring().antMatchers(IGNORING_MATCH_LIST);
		};
	}
	
	@Bean
	public SecurityFilterChain nexacroFilterChain(HttpSecurity http) throws Exception {
		
		log.debug("Spring Security START !");
		
		http.csrf().disable();
		
        http.httpBasic().disable()					// jwt설정
                .authorizeRequests()
                .antMatchers(IGNORING_MATCH_LIST).permitAll()
                .antMatchers("/install.irs").permitAll()							/* URL고정 - 초기데이터 생성 */
                .antMatchers("/exception/**").permitAll()							/* URL고정 - 인증 예외처리 전용 */
                .antMatchers("/login").permitAll()									/* URL고정 - 인증체크 없음 */
                .antMatchers("/common/report.irs").permitAll()						/* URL고정 - 리포트, 인증체크 없음 */
                .antMatchers("/common/rsa.irs").permitAll()							/* URL고정 - RSA 공개키, 개인키 생성 */
                .antMatchers("/common/file/**").permitAll()							/* URL고정 - 파일업로드 and 파일다운로드 */
                .antMatchers("/common/initial/**").authenticated()					/* URL고정 - 인증 사용자용 공통, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
                
                
                /* ■■■■■■■■■■■■■■■■■■■■ TEST 전용 START ■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/test/**").permitAll()								/* TEST용 - 인증체크 없음 - 넥사크로 테스트 */
                .antMatchers("/test/selectSampleList.do").hasAnyRole(RoleConst.BIZADMIN, RoleConst.SYSTEM, RoleConst.DIRECTOR, RoleConst.OUTSOURCING)								/* TEST용 - 인증체크 없음 - 넥사크로 테스트 */
                .antMatchers("/test/selectConnectDailyStatisticsList.irs").hasAnyRole(RoleConst.BIZADMIN, RoleConst.SYSTEM)								/* TEST용 - 인증체크 없음 - 넥사크로 테스트 */
                /* ■■■■■■■■■■■■■■■■■■■■ TEST 전용 END ■■■■■■■■■■■■■■■■■■■■ */
                
                
                .antMatchers("/admin/**").hasAnyRole(RoleConst.SYSTEM, RoleConst.DIRECTOR, RoleConst.OUTSOURCING)			/* 권한설정 예시1 - 인증상태 + 지정된 ROLE만 접근가능 */
                .antMatchers("/user/**").authenticated()																	/* 권한설정 예시2 - 인증상태만 접근가능 */
                .antMatchers("/onlyuser/**").hasRole(RoleConst.BIZADMIN)															/* 권한설정 예시3 - 인증상태만 접근가능 */
                .antMatchers("/**").permitAll()																				/* 권한설정 예시4 - 인증체크 없음 */
                .and()
                	.logout().logoutUrl("/logout")
                	.logoutSuccessHandler(coreLogoutSuccessHandler).permitAll()
                .and()
                	.exceptionHandling()
                	.authenticationEntryPoint(securityAuthenticationEntryPoint)				/* 인증예외 처리 */
                	.accessDeniedHandler(coreAccessDeniedHandler)							/* 인가예외 처리 */
                .and()
        			.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        http.headers()
        		.xssProtection()																//X-XSS-Protection 헤더 설정
        			.block(true)																//XSS 공격 차단
        			.xssProtectionEnabled(true);												//X-XSS-Protection 헤더 활성화
        
        http.headers().frameOptions().sameOrigin();												//X-Frame-Options - html기반 환경 iframe 허용
        
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);		//세션정책 설정
		
		return http.build();
	}
	
}
