package gov.me.irs.core.user.controller;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
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
import gov.me.irs.core.token.repository.RefreshTokenRepository;
import gov.me.irs.core.token.service.JwtService;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.RoleEnum;
import gov.me.irs.core.user.repository.UserRepository;
import gov.me.irs.core.user.service.UserService;
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
	
	private final UserService userService;
	
	private final RefreshTokenRepository refreshTokenRepository;
	
	@PostConstruct
	public void deleteAllToken() {
		
		String profiles = System.getProperty("spring.profiles.active");
		
		if(Const.PROFILES.PRD.equals(profiles)) {
			/* Token 정보 삭제 START */
			refreshTokenRepository.deleteAll();
			/* Token 정보 삭제 END */
		}
		
	}
	
	/**
	 * 로그인 선조회
	 * 	- 관장기관, 위탁기관 로그인 선조회
	 * 
	 * @param requestMap
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/prepare/login")
	public NexacroResult prepareLogin(@ParamDataSet(name = "inputLogin") Map<String, Object> requestMap
			, HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		
		try {
			String identifier = (String) requestMap.get(Const.CORE.KEY_USER_IDENTIFIER);
			String password = (String) requestMap.get(Const.CORE.KEY_USER_PASSWORD);
			
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
			
			/* 2. 비밀번호 RSA 복호화 */
			try {
				password = RsaUtil.decryptRsa(session, password);
			} catch (NoSuchAlgorithmException | NoSuchPaddingException
					| InvalidKeyException | IllegalBlockSizeException
					| BadPaddingException | UnsupportedEncodingException
					| ArithmeticException e) {
				throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
			} catch (Exception e) {
				throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
			}
			
			/* 프로파일 */
			String profiles = System.getProperty("spring.profiles.active");
			if(!Const.PROFILES.PRD.equals(profiles)) {		/* 운영서버 출력방지 */
				log.debug("[user][{}]", user);
				log.debug("[param][{}][db][{}]", password, user.getPassword());
			}
			
			// 비번 불일치
			if (!passwordEncoder.matches(password, user.getPassword())) {
				throw new SignException(JwtAuthEnum.MISMATCH_USER_INFO.getCode(), new BadCredentialsException(identifier));
			}
			
			/**
			 * 예외 CASE 추가시 아래 참고
			 * 
			 * Ex.> - 기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료
			 * 		if ("기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료") {
			 * 			throw new AccountExpiredException("계정이 탈퇴 또는 만료되어 로그인이 불가능 합니다.");
			 * 			throw new AccountExpiredException("인증 요청이 거부되었습니다. 관리자에게 문의하세요.");
			 * 		}
			 * 
			 */
			
			log.debug("[user.getRoles()]["+user.getRoles().size()+"]");
			List<String> roles = new ArrayList<String>();
			for (String roleName : user.getRoles()) {
				log.debug("[roleName]["+roleName+"]");
				RoleEnum roleEnum = RoleEnum.of(roleName);
				roles.add(roleEnum.getCode());
			}
			
			Map<String, Object> parameterMap = new HashMap<String, Object>();
			parameterMap.put("roles", roles);
			List<Map<String, Object>> userRoleList = userService.selectRoleList(parameterMap);
			
			switch (RoleEnum.of(user.getUserClCd().getValue())) {
			case DIRECTOR: case OUTSOURCING:		/* 관장기관, 위탁기관은 복수권한 보유 가능 */
				break;
			default:									/* 그외 권한은 무조건 1개의 권한, 첫번재 권한으로 보내준다. - 1개초과시 DB데이터 문제임 */
				userRoleList = Arrays.asList(userRoleList.get(0));
				break;
			}
			
			NexacroResult nexacroResult = new NexacroResult();
			nexacroResult.addDataSet("userRoleList", userRoleList);
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
			} else if(cause instanceof NoSuchAlgorithmException
					| cause instanceof NoSuchPaddingException
					| cause instanceof InvalidKeyException
					| cause instanceof IllegalBlockSizeException
					| cause instanceof BadPaddingException
					| cause instanceof UnsupportedEncodingException
					| cause instanceof ArithmeticException
					) {			/* RSA 예외처리 */
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.RSA_INVALID;
			}
			
			log.error("[SignException][Login Fail][e.getCode()]["+e.getCode()+"][][]["+e.getClass().getSimpleName()+"]["+e.getMessage()+"]["+e.getCause()+"]");
			
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, cause));
			return nexacroResult;
		}
	}
	
	/**
	 * 로그인
	 * 
	 * @param requestMap
	 * @param userAgent
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/login")
	public NexacroResult login(@ParamDataSet(name = "inputLogin") Map<String, Object> requestMap
			, @RequestHeader("User-Agent") String userAgent
			, HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		
		try {
			log.info("user infomation = {}", requestMap);
			log.info("userAgent infomation = {}", userAgent);
			
			String identifier = (String) requestMap.get(Const.CORE.KEY_USER_IDENTIFIER);
			String password = (String) requestMap.get(Const.CORE.KEY_USER_PASSWORD);
			String jwtRoleNm = StringUtils.EMPTY;			/* 기본권한 또는 선택된 권한정보 */

			
			/* 0. 사용자 식별정보 저장 - [사용자 접속정보 저장]시에 꺼내서 사용함 */
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
			
			/* 2. 비밀번호 RSA 복호화 */
			try {
				password = RsaUtil.decryptRsa(session, password);
			} catch (NoSuchAlgorithmException | NoSuchPaddingException
					| InvalidKeyException | IllegalBlockSizeException
					| BadPaddingException | UnsupportedEncodingException
					| ArithmeticException e) {
				throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
			} catch (Exception e) {
				throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
			}
			
			/* 프로파일 */
			String profiles = System.getProperty("spring.profiles.active");
			if(!Const.PROFILES.PRD.equals(profiles)) {		/* 운영서버 출력방지 */
				log.debug("[user][{}]", user);
				log.debug("[param][{}][db][{}]", password, user.getPassword());
			}
			
			// 비번 불일치
			if (!passwordEncoder.matches(password, user.getPassword())) {
				throw new SignException(JwtAuthEnum.MISMATCH_USER_INFO.getCode(), new BadCredentialsException(identifier));
			}
			
			/**
			 * 예외 CASE 추가시 아래 참고
			 * 
			 * Ex.> - 기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료
			 * 		if ("기타 예외처리 - 1. 인증요청 거부, 2. 계정 탈퇴 또는 계정 만료") {
			 * 			throw new AccountExpiredException("계정이 탈퇴 또는 만료되어 로그인이 불가능 합니다.");
			 * 			throw new AccountExpiredException("인증 요청이 거부되었습니다. 관리자에게 문의하세요.");
			 * 		}
			 * 
			 */
			
			/* 선택된 권한정보 설정 */
			if(!ObjectUtils.isEmpty(requestMap.get(Const.CORE.KEY_USER_ROLE))) {
				String role = (String) requestMap.get(Const.CORE.KEY_USER_ROLE);
				jwtRoleNm = RoleEnum.ofCode(role).getValue();
				
				/* DB 권한정보내에 지정된 권한이 존재하지 않으면 예외처리 */
				if(!user.getRoles().contains(jwtRoleNm)) {
					log.error("[DB 권한정보내에 지정된 권한이 존재하지 않으면 예외처리]");
					throw new SignException(JwtAuthEnum.AUTHENTICATION_PREAUTHORIZE_ACCESS_DENIED.getCode(), new SignException(identifier));
				}
				
			/* 선택된게 없으면 기본권한 설정 - 0번째꺼 */
			} else {
				
				switch (RoleEnum.of(user.getUserClCd().getValue())) {
					case DIRECTOR: case OUTSOURCING:		/* 관장기관, 위탁기관은 복수권한 보유 가능 */
						log.error("[관장기관, 위탁기관 권한정보 누락]");
						throw new SignException(JwtAuthEnum.AUTHENTICATION_ACCESS_DENIED.getCode(), new SignException(identifier));
					default:									/* 그외 권한은 무조건 1개의 권한, 첫번재 권한으로 보내준다. - 1개초과시 DB데이터 문제임 */
						jwtRoleNm = user.getRoles().get(Const.NUMERIC.ZERO);
						log.debug("[선택된 role 없음, 기본권한 설정]["+jwtRoleNm+"]");
						break;
				}
					
			}
			
			/* 3. 사용자 승인상태 체크 */
			Map<String, Object> userMap = userService.selectUser(user.getUserId());
			if(ObjectUtils.isEmpty(userMap)) {
				log.error("[사용자기본 정보 없음]");
				throw new SignException(JwtAuthEnum.AUTHENTICATION_ACCESS_DENIED.getCode(), new SignException(identifier));
			}
			
			String acntSttsClCd = (String) userMap.get("acntSttsClCd");			//계정상태
			
			boolean userStatus = false;
			if("ASC0001".equals(acntSttsClCd) && (RoleEnum.of(jwtRoleNm) == RoleEnum.UNAPPROVED || RoleEnum.of(jwtRoleNm) == RoleEnum.UNAPPROVEDOUTSOURCING)) {			/* 미승인상태는 JWT권한이 ROLE_UNAPPROVED 만 허용 */
				userStatus = true;
			} else if("ASC0002".equals(acntSttsClCd) && RoleEnum.of(jwtRoleNm) != RoleEnum.UNAPPROVED) {		/* 승인상태는 JWT권한이 ROLE_UNAPPROVED 제외하고 모두 허용 */
				userStatus = true;
			}
			
			if(!userStatus) {
				log.error("[사용자 계정상태 확인]");
				
				if("ASC0003".equals(acntSttsClCd)) {
					throw new SignException(JwtAuthEnum.AUTHENTICATION_HOLD_USER.getCode(), new SignException(identifier));
				} else if("ASC0004".equals(acntSttsClCd)) {
					throw new SignException(JwtAuthEnum.AUTHENTICATION_SHUTDOWN_USER.getCode(), new SignException(identifier));
				} else {
					throw new SignException(JwtAuthEnum.AUTHENTICATION_ACCESS_DENIED.getCode(), new SignException(identifier));
				}
			}
			
			log.debug("[사용자 승인상태 체크][계정상태][{}][JWT권한][{}]", acntSttsClCd, jwtRoleNm);
			
			/* 4. JWT Token 생성 */
			JwtToken jwtToken = JwtToken.builder()
					.accessToken(jwtTokenProvider.createAccessToken(identifier, user.getRoles(), jwtRoleNm))
					.refreshToken(jwtTokenProvider.createRefreshToken(identifier, user.getRoles(), jwtRoleNm))
					.key(identifier)
					.build();
			
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [START]");
			for (String roleName : user.getRoles()) {
				log.debug("[roleName]["+roleName+"]");
			}
			log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ [END]");
			
			
			
			/* 5. JWT Token 헤더 설정 */
			jwtTokenProvider.setHeaderIssueToken(response);
			jwtTokenProvider.setHeaderAccessToken(response, jwtToken.getAccessToken());
			jwtTokenProvider.setHeaderRefreshToken(response, jwtToken.getRefreshToken());
			
			log.info("getroleeeee = {}", user.getRoles());
			
			/* 6. JWT Token - 인증정보 저장처리 */
			jwtService.login(request, jwtToken, userAgent);
			
			/* 7. 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.Y);
			
			/* 9. 응답정보 설정 */
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
			} else if(cause instanceof NoSuchAlgorithmException
					| cause instanceof NoSuchPaddingException
					| cause instanceof InvalidKeyException
					| cause instanceof IllegalBlockSizeException
					| cause instanceof BadPaddingException
					| cause instanceof UnsupportedEncodingException
					| cause instanceof ArithmeticException
					) {			/* RSA 예외처리 */
				httpStatus = HttpStatus.BAD_REQUEST;
				jwtAuthEnum = JwtAuthEnum.RSA_INVALID;
			}
			
			/* 사용자 접속정보 저장 */
			clientService.saveClientDtl(request, Const.CHARACTER.RESULT.N);
			
			log.error("[SignException][Login Fail][e.getCode()]["+e.getCode()+"][][]["+e.getClass().getSimpleName()+"]["+e.getMessage()+"]["+e.getCause()+"]");
			
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, cause));
			return nexacroResult;
		}
		
	}
	
//	/*
//	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	 * TEST 구간 START
//	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	 */
//	/**
//	 * TEST - 계정 생성
//	 * 
//	 * @return
//	 */
//	@PostMapping("/join")
//	public ResponseEntity<?> join(){
//		log.info("가입 시도됨");
//		
//		TableUser user1 = this.testCreateNewUser("aaaaaa@gmail.com", "URS000000001", passwordEncoder.encode("1234"), UserClCdEnum.SUPER, Arrays.asList("ROLE_SUPER"));
//		
//		/* 관장기관, 사업수행장 권한 추가 */
//		TableUser user2 = TableUser.builder()
//				.lgnId("bbbbbb@gmail.com")
//				.userId("URS000000002")
//				.encptPswd(passwordEncoder.encode("1234"))
//				.userClCd(UserClCdEnum.DIRECTOR)
//				.roles(Arrays.asList("ROLE_DIRECTOR", "ROLE_DIRECTORBIZ")) // 최초 가입시 USER 로 설정
//				.build();
//		
//		/* 위탁기관, 사업수행장 권한 추가 */
//		TableUser user3 = TableUser.builder()
//				.lgnId("cccccc@gmail.com")
//				.userId("URS000000003")
//				.encptPswd(passwordEncoder.encode("1234"))
//				.userClCd(UserClCdEnum.OUTSOURCING)
//				.roles(Arrays.asList("ROLE_OUTSOURCING", "ROLE_OUTSOURCINGBIZ")) // 최초 가입시 USER 로 설정
//				.build();
//		
//		TableUser user4 = this.testCreateNewUser("dddddd@gmail.com", "URS000000004", passwordEncoder.encode("1234"), UserClCdEnum.BIZADMIN, Arrays.asList("ROLE_BIZADMIN"));
//		TableUser user5 = this.testCreateNewUser("eeeeee@gmail.com", "URS000000005", passwordEncoder.encode("1234"), UserClCdEnum.BIZREPRESENT, Arrays.asList("ROLE_BIZREPRESENT"));
//		TableUser user6 = this.testCreateNewUser("ffffff@gmail.com", "URS000000006", passwordEncoder.encode("1234"), UserClCdEnum.MOFA, Arrays.asList("ROLE_MOFA"));
//		TableUser user7 = this.testCreateNewUser("gggggg@gmail.com", "URS000000007", passwordEncoder.encode("1234"), UserClCdEnum.ORGAN, Arrays.asList("ROLE_ORGAN"));
//		TableUser user8 = this.testCreateNewUser("hhhhhh@gmail.com", "URS000000008", passwordEncoder.encode("1234"), UserClCdEnum.UNAPPROVED, Arrays.asList("ROLE_UNAPPROVED"));
//		TableUser user9 = this.testCreateNewUser("gggggg@gmail.com", "URS000000009", passwordEncoder.encode("1234"), UserClCdEnum.UNAPPROVEDOUTSOURCING, Arrays.asList("ROLE_UNAPPROVEDOUTSOURCING"));
//		
//		userRepository.save(user1);
//		userRepository.save(user2);
//		userRepository.save(user3);
//		userRepository.save(user4);
//		userRepository.save(user5);
//		userRepository.save(user6);
//		userRepository.save(user7);
//		userRepository.save(user8);
//		userRepository.save(user9);
//		
//		Map<String, Object> body = new HashMap<String, Object>();
//		return ResponseEntity.ok(body);
//		
//	}
//	
//	/**
//	 * ■■■■■■■■■■■■■■■■■■■■ TEST ■■■■■■■■■■■■■■■■■■■■
//	 * 새로운 사용자 생성
//	 * 
//	 * @return
//	 */
//	@Transactional(rollbackFor = Exception.class)
//	private final TableUser testCreateNewUser(String USER_LOGIN_ID, String USER_SEQ_ID, String PASSWORD, UserClCdEnum userClCd, List<String> roles) {
//		return TableUser.builder()
//				.lgnId(USER_LOGIN_ID)
//				.userId(USER_SEQ_ID)
//				.encptPswd(PASSWORD)
//				.userClCd(userClCd)
//				.roles(roles) // 최초 가입시 USER 로 설정
//				.build();
//	}
//	/*
//	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	 * TEST 구간 END
//	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	 */
	
}