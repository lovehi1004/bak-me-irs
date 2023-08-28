package gov.me.irs.core.user.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.client.service.ClientService;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.provider.JwtTokenProvider;
import gov.me.irs.core.token.JwtToken;
import gov.me.irs.core.token.service.JwtService;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
import gov.me.irs.core.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 사용자 인증 Controller
 * 
 * @author Justin
 *
 */
@Slf4j
@Controller
@RequiredArgsConstructor
public class UserController {
	
	private final JwtTokenProvider jwtTokenProvider;
	
	private final JwtService jwtService;
	
	private final UserRepository userRepository;
	
	private final PasswordEncoder passwordEncoder;
	
	private final ClientService clientService;
	
	// 로그인
	@PostMapping("/login")
	public NexacroResult login(@ParamDataSet(name = "inputLogin") List<Map<String, Object>> inputLogin
			, @RequestHeader("User-Agent") String userAgent
			, HttpServletRequest request
			, HttpServletResponse response) throws SignException {
		
		try {
			Map<String, Object> requestMap = inputLogin.get(0);
			
			log.info("user infomation = {}", requestMap);
			log.info("userAgent infomation = {}", userAgent);
			
			String email = (String) requestMap.get(Const.CORE.KEY_USER_IDENTIFIER);
			String password = (String) requestMap.get(Const.CORE.KEY_USER_PASSWORD);
			
			/* 0. 사용자 식별정보 저장 */
			request.setAttribute(Const.CORE.KEY_USER_IDENTIFIER, email);
			
			TableUser user = userRepository.findByLgnId(email);
			
			/* 1. 인증 예외처리 */
			// 유저 없는경우 
			if (user == null ) {
				throw new SignException(JwtAuthEnum.NOT_FOUND_USER_ID.getCode(), new UsernameNotFoundException(email));
			}
			
			// 비밀번호가 없는경우 
			if (password == null ) {
				throw new SignException(JwtAuthEnum.NOT_FOUND_USER_PWD.getCode(), new IllegalArgumentException(email));
			}
			
			log.debug("[xxx][{}]", user);
			log.debug("[param][{}][db][{}]", password, user.getPassword());
			// 비번 불일치
			if (!passwordEncoder.matches(password, user.getPassword())) {
				throw new SignException(JwtAuthEnum.MISMATCH_USER_INFO.getCode(), new BadCredentialsException(email));
			}
			
			/**
	        // TODO - 기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료
	        if ("기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료") {
	            throw new AccountExpiredException("계정이 탈퇴 또는 만료되어 로그인이 불가능 합니다.");
	            throw new AccountExpiredException("인증 요청이 거부되었습니다. 관리자에게 문의하세요.");
	        }
			 */
			
			/* 2. JWT Token 생성 */
			JwtToken jwtToken = JwtToken.builder()
					.accessToken(jwtTokenProvider.createAccessToken(email, user.getRoles()))
					.refreshToken(jwtTokenProvider.createRefreshToken(email, user.getRoles()))
					.key(email)
					.build();
			
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [START]");
			for (String roleName : user.getRoles()) {
				log.debug("[roleName]["+roleName+"]");
			}
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [END]");
			
			/* 3. JWT Token 헤더 설정 */
			jwtTokenProvider.setHeaderIssueToken(response);
			jwtTokenProvider.setHeaderAccessToken(response, jwtTokenProvider.createAccessToken(email, user.getRoles()));
			jwtTokenProvider.setHeaderRefreshToken(response, jwtTokenProvider.createRefreshToken(email, user.getRoles()));
			
			log.info("getroleeeee = {}", user.getRoles());
			
			/* 4. JWT Token - 인증정보 저장처리 */
			jwtService.login(jwtToken, userAgent);
			
			/* 5. 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.Y);
			
			/* 6. 응답정보 설정 */
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.LOGIN));
			return nexacroResult;
			
			
		/* ■■■■■■■■■■ 로그인 실패 - 공통 예외처리 ■■■■■■■■■■ */
		} catch(SignException e) {
			HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;			/* default : 500 */
			JwtAuthEnum jwtAuthEnum = JwtAuthEnum.UNKNOWN_ERROR;
			
			Throwable cause = e.getCause();
			
			if(cause instanceof UsernameNotFoundException) {
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.NOT_FOUND_USER_ID;
			} else if(cause instanceof IllegalArgumentException) {
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.BAD_REQUEST;
			} else if(cause instanceof BadCredentialsException) {
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.MISMATCH_USER_INFO;
			}
			
			/* 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.N);
			
			log.error("[SignException][Login Fail][e.getCode()]["+e.getCode()+"][][]["+e.getClass().getSimpleName()+"]["+e.getMessage()+"]", e.getCause());
			
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, e));
			return nexacroResult;
		}
		
	}
	
	/*
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * TEST 구간 START
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 */
	/**
	 * TEST - 계정 생성
	 * 
	 * @return
	 */
	@PostMapping("/join")
	public ResponseEntity<?> join(){
		log.info("가입 시도됨");
		
		TableUser user1 = this.createNewUser1();
		TableUser user2 = this.createNewUser2();
		TableUser user3 = this.createNewUser3();
		TableUser user4 = this.createNewUser4();
		TableUser user5 = this.createNewUser5();
		TableUser user6 = this.createNewUser6();
		TableUser user7 = this.createNewUser7();
		
		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);
		userRepository.save(user4);
		userRepository.save(user5);
		userRepository.save(user6);
		userRepository.save(user7);
		
		Map<String, Object> body = new HashMap<String, Object>();
		return ResponseEntity.ok(body);
		
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-1 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성1 - 역할 : GIR - 전체관리자
	 * 
	 * @return
	 */
	private final TableUser createNewUser1() {
		final String USER_LOGIN_ID = "aabbcc@gmail.com";
		final String USER_SEQ_ID = "URS000000001";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.SUPER;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-2 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성2 - 역할 : 민간사업자
	 * 
	 * @return
	 */
	private final TableUser createNewUser2() {
		final String USER_LOGIN_ID = "ddeeff@gmail.com";
		final String USER_SEQ_ID = "URS000000002";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.BIZ;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-3 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성3 - 역할 : 관장기관
	 * 
	 * @return
	 */
	private final TableUser createNewUser3() {
		final String USER_LOGIN_ID = "gghhii@gmail.com";
		final String USER_SEQ_ID = "URS000000003";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.SUPERVISORY;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-4 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성4 - 역할 : 위탁기관
	 * 
	 * @return
	 */
	private final TableUser createNewUser4() {
		final String USER_LOGIN_ID = "jjkkll@gmail.com";
		final String USER_SEQ_ID = "URS000000004";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.DELEGATED;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-5 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성5 - 역할 : 환경부
	 * 
	 * @return
	 */
	private final TableUser createNewUser5() {
		final String USER_LOGIN_ID = "mmnnoo@gmail.com";
		final String USER_SEQ_ID = "URS000000005";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.ME;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-6 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성6 - 역할 : 국제감축협의체
	 * 
	 * @return
	 */
	private final TableUser createNewUser6() {
		final String USER_LOGIN_ID = "ppqqrr@gmail.com";
		final String USER_SEQ_ID = "URS000000006";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.ORGAN;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST-7 ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성7 - 역할 : 외교부
	 * 
	 * @return
	 */
	private final TableUser createNewUser7() {
		final String USER_LOGIN_ID = "ssttuu@gmail.com";
		final String USER_SEQ_ID = "URS000000007";
		final String PASSWORD = "1234";
		final UserClCdEnum userClCd = UserClCdEnum.MOFA;
		
		return TableUser.builder()
				.lgnId(USER_LOGIN_ID)
				.userId(USER_SEQ_ID)
				.encptPswd(passwordEncoder.encode(PASSWORD))
				.userClCd(userClCd)
				.roles(Collections.singletonList(userClCd.getRole())) // 최초 가입시 USER 로 설정
				.build();
	}
	
	/*
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * TEST 구간 END
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 */
	
}