package gov.me.irs.core.user.controller;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.client.service.ClientService;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.crypt.util.RsaUtil;
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
	
	private final HttpSession session;
	
	// 로그인
	@PostMapping("/login")
	public NexacroResult login(@ParamDataSet(name = "inputLogin") Map<String, Object> requestMap
			, @RequestHeader("User-Agent") String userAgent
			, HttpServletRequest request
			, HttpServletResponse response) throws SignException {
		
		try {
			log.info("user infomation = {}", requestMap);
			log.info("userAgent infomation = {}", userAgent);
			
			String identifier = (String) requestMap.get(Const.CORE.KEY_USER_IDENTIFIER);
			String password = (String) requestMap.get(Const.CORE.KEY_USER_PASSWORD);
			String role = StringUtils.EMPTY;			/* 기본권한 또는 선택된 권한정보 */

			
			/* 0. 사용자 식별정보 저장 */
			request.setAttribute(Const.CORE.KEY_USER_IDENTIFIER, identifier);
			
			TableUser user = userRepository.findByLgnId(identifier);
			
			/* 1. 인증 예외처리 */
			// 유저 없는경우 
			if (user == null ) {
				throw new SignException(JwtAuthEnum.NOT_FOUND_USER_ID.getCode(), new UsernameNotFoundException(identifier));
			}
			
			// 비밀번호가 없는경우 
			if (password == null ) {
				throw new SignException(JwtAuthEnum.NOT_FOUND_USER_PWD.getCode(), new IllegalArgumentException(identifier));
			}
			
			/* TODO - ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			/* 2. 비밀번호 RSA 복호화 */
			/* TODO - 화면에서 비밀번호 암호화 후 복호화 처리 START */
			/**
			 * TODO - 넥사크로N 화면작업시에 isTest 변수 삭제 할 것
			 * TODO - 넥사크로N 화면작업시에 isTest 변수 삭제 할 것
			 * TODO - 넥사크로N 화면작업시에 isTest 변수 삭제 할 것
			 * TODO - 넥사크로N 화면작업시에 isTest 변수 삭제 할 것
			 */
			boolean isTest = true;
			
			if(!isTest) {
				try {
					password = RsaUtil.decryptRsa(session, password);
				} catch (Exception e) {
					throw new SignException(JwtAuthEnum.AUTHENTICATION_UNKNOWN_ERROR.getCode(), e);
				}
			}
			
			/* TODO - 화면에서 비밀번호 암호화 후 복호화 처리 END */
			/* TODO - ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			
			log.debug("[xxx][{}]", user);
			log.debug("[param][{}][db][{}]", password, user.getPassword());
			// 비번 불일치
			if (!passwordEncoder.matches(password, user.getPassword())) {
				throw new SignException(JwtAuthEnum.MISMATCH_USER_INFO.getCode(), new BadCredentialsException(identifier));
			}
			
			/**
	        // TODO - 기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료
	        if ("기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료") {
	            throw new AccountExpiredException("계정이 탈퇴 또는 만료되어 로그인이 불가능 합니다.");
	            throw new AccountExpiredException("인증 요청이 거부되었습니다. 관리자에게 문의하세요.");
	        }
			 */
			
			/* 선택된 권한정보 설정 */
			if(!ObjectUtils.isEmpty(requestMap.get(Const.CORE.KEY_USER_ROLE))) {
				role = (String) requestMap.get(Const.CORE.KEY_USER_ROLE);
				log.debug("[선택된 role 있음, 권한지정 설정]["+role+"]");
				
				/* DB 권한정보내에 지정된 권한이 존재하지 않으면 예외처리 */
				if(!user.getRoles().contains(role)) {
					throw new SignException(JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED.getCode(), new SignException(identifier));
				}
				
			/* 선택된게 없으면 기본권한 설정 - 0번째꺼 */
			} else {
				role = user.getRoles().get(Const.NUMERIC.ZERO);
				log.debug("[선택된 role 없음, 기본권한 설정]["+role+"]");
			}
			
			/* 3. JWT Token 생성 */
			JwtToken jwtToken = JwtToken.builder()
					.accessToken(jwtTokenProvider.createAccessToken(identifier, user.getRoles(), role))
					.refreshToken(jwtTokenProvider.createRefreshToken(identifier, user.getRoles(), role))
					.key(identifier)
					.build();
			
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [START]");
			for (String roleName : user.getRoles()) {
				log.debug("[roleName]["+roleName+"]");
			}
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [END]");
			
			
			
			/* 4. JWT Token 헤더 설정 */
			jwtTokenProvider.setHeaderIssueToken(response);
			jwtTokenProvider.setHeaderAccessToken(response, jwtToken.getAccessToken());
			jwtTokenProvider.setHeaderRefreshToken(response, jwtToken.getRefreshToken());
			
			log.info("getroleeeee = {}", user.getRoles());
			
			/* 5. JWT Token - 인증정보 저장처리 */
			jwtService.login(jwtToken, userAgent);
			
			/* 6. 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.Y);
			
			/* 7. 응답정보 설정 */
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
			} else if(cause instanceof SignException) {
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.of(e.getCode());
			}
			
			/* 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.N);
			
			log.error("[SignException][Login Fail][e.getCode()]["+e.getCode()+"][][]["+e.getClass().getSimpleName()+"]["+e.getMessage()+"]", e.getCause());
			
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, cause));
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
		
		TableUser user1 = this.createNewUser("aabbcc@gmail.com", "URS000000001", "1234", UserClCdEnum.UNAPPROVED);
		TableUser user2 = this.createNewUser("ddeeff@gmail.com", "URS000000002", "1234", UserClCdEnum.BIZADMIN);
		TableUser user3 = this.createNewUser("gghhii@gmail.com", "URS000000003", "1234", UserClCdEnum.BIZREPRESENT);
		TableUser user4 = this.createNewUser("jjkkll@gmail.com", "URS000000004", "1234", UserClCdEnum.OUTSOURCING);
		
		/* 관장기관, 사업수행장 권한 추가 */
		TableUser user5 = TableUser.builder()
				.lgnId("mmnnoo@gmail.com")
				.userId("URS000000005")
				.encptPswd(passwordEncoder.encode("1234"))
				.userClCd(UserClCdEnum.DIRECTOR)
				.roles(Arrays.asList("ROLE_DIRECTOR", "ROLE_BIZADMIN")) // 최초 가입시 USER 로 설정
				.build();
		
		TableUser user6 = this.createNewUser("ppqqrr@gmail.com", "URS000000006", "1234", UserClCdEnum.MOFA);
		TableUser user7 = this.createNewUser("ssttuu@gmail.com", "URS000000007", "1234", UserClCdEnum.ORGAN);
		TableUser user8 = this.createNewUser("vvwwxx@gmail.com", "URS000000008", "1234", UserClCdEnum.SYSTEM);
		
		userRepository.save(user1);
		userRepository.save(user2);
		userRepository.save(user3);
		userRepository.save(user4);
		userRepository.save(user5);
		userRepository.save(user6);
		userRepository.save(user7);
		userRepository.save(user8);
		
		Map<String, Object> body = new HashMap<String, Object>();
		return ResponseEntity.ok(body);
		
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■ TEST ■■■■■■■■■■■■■■■■■■■■
	 * 새로운 사용자 생성
	 * 
	 * @return
	 */
	private final TableUser createNewUser(String USER_LOGIN_ID, String USER_SEQ_ID, String PASSWORD, UserClCdEnum userClCd) {
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