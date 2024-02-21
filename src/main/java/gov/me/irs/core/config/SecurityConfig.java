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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import gov.me.irs.core.filter.JwtAuthenticationFilter;
import gov.me.irs.core.safedb.Crypto;
import gov.me.irs.core.security.password.CorePasswordEncoder;
import gov.me.irs.core.config.handler.CoreAccessDeniedHandler;
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
	
	private final Crypto crypto;
	
	/**
	 * 비밀번호 암호화
	 * 
	 * @return
	 */
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new CorePasswordEncoder(crypto);
    }
	
	@Bean
	public AuthenticationManager authenticationManagerBean(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	/**
	 * CORS 적용
	 * 
	 * @return
	 */
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
			public void addCorsMappings(CorsRegistry registry) {
            	/* 로컬 넥사크로 스튜디오 전용 */
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
		log.info("Spring Security START !");
		
		http.csrf().disable();
		
        http.httpBasic().disable()					// jwt설정
                .authorizeRequests()
                
                /*
                 * URL 목록만 참고할수 있도록 삭제처리 없이 주석처리로... - 20240208093900
                 * 
                 */
//                .antMatchers(IGNORING_MATCH_LIST).permitAll()
//
//                .antMatchers("/install").permitAll()										/* URL고정 - 초기데이터 생성 */
//                
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Raon-K 파일솔루션 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/raonk/handler/**").permitAll()								/* URL고정 - [모두허용] - 라온K Servlet */
//                .antMatchers("/common/raonk/**").permitAll()								/* URL고정 - [모두허용] - 라온K 공통 서비스 */
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Raon-K 파일솔루션 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 예외처리 서비스 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/exception/**").permitAll()									/* URL고정 - [모두허용] - 예외처리 전용 */
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 예외처리 서비스 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 인증 서비스 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/prepare/login").permitAll()									/* URL고정 - [모두허용] */
//                .antMatchers("/login").permitAll()											/* URL고정 - [모두허용] */
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 인증 서비스 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 인증정보 관련 공통 서비스 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/session/check.irs").permitAll()									/* URL고정 - [모두허용] */
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 인증정보 관련 공통 서비스 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                
//                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 공통 서비스 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/common/report.irs").permitAll()								/* URL고정 - [모두허용] - 클립소프트 리포트 */
//                .antMatchers("/common/viewer.irs").permitAll()								/* URL고정 - [모두허용] - 사이냅소프트 문서뷰어 */
//                .antMatchers("/common/rsa.irs").permitAll()									/* URL고정 - [모두허용] - RSA 공개키, 개인키 생성 */
//                .antMatchers("/common/selectJusoList.irs").permitAll()						/* URL고정 - [모두허용] - 도로명주소 검색 */
//                .antMatchers("/common/file/**").permitAll()									/* URL고정 - [모두허용] - 파일업로드 and 파일다운로드 */
                .antMatchers("/common/initial/selectUserInfo.irs").authenticated()			/* URL고정 - [인증필수] - 인증 사용자용 공통, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
                .antMatchers("/common/initial/selectMenuList.irs").authenticated()			/* URL고정 - [인증필수] - 사용자권한 메뉴 목록 조회, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
//                .antMatchers("/common/initial/selectGroupCodeList.irs").permitAll()			/* URL고정 - [모두허용] - 그롭코드 목록 조회, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
//                .antMatchers("/common/initial/selectCodeList.irs").permitAll()				/* URL고정 - [모두허용] - 코드상세 목록 조회, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
//                .antMatchers("/common/initial/selectErrorMessegeList.irs").permitAll()		/* URL고정 - [모두허용] - 오류메세지 목록 조회, 넥사크로에서 주로 사용하는 load 대상 초기데이터 */
//                
//                .antMatchers("/common/main/**").permitAll()									/* URL고정 - [모두허용] - [사용자] 메인 > 회원가입 관련 */
//                
//                .antMatchers("/common/pop/**").permitAll()									/* URL고정 - [모두허용] - [사용자] 공통 */
//                
//                .antMatchers("/common/board/**").permitAll()								/* URL고정 - [모두허용] - [사용자] 공통 */
                
                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 공통 서비스 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
                
                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 기본 서비스 URL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//                .antMatchers("/**/*Excel.irs").permitAll()									/* URL고정 - [모두허용] - 엑셀다운로드 */
                .antMatchers("/biz/**").authenticated()										/* URL고정 - [인증필수] - 사업수행자 서비스 */
                .antMatchers("/adm/**").authenticated()										/* URL고정 - [인증필수] - 관리자, 관장(위탁)기관 서비스 */
                /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 기본 서비스 URL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
                
                .antMatchers("/**").permitAll()												/* 기타 서비스 */
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
        
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS);		//세션정책 설정
		
		return http.build();
	}
	
}
