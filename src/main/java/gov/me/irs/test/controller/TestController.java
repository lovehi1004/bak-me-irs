package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.stereotype.Controller;

import gov.me.irs.core.token.constants.JwtConst;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Test Controller 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class TestController {
	
	/**
	 * 인증사용자 접근 가능 페이지
	 * @param userAgent
	 * @param aaaa
	 * @param bbbb
	 * @return
	 */
	@PostMapping("/test/auth/user")
	public String test(@AuthenticationPrincipal TableUser tableUser				/* 세션정보 */
			, @RequestHeader("User-Agent") String userAgent
			, @RequestHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY) String aaaa
			, @RequestHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY) String bbbb){
		log.info("UserClntCn = {}", userAgent);
		log.info("aaaa = {}", aaaa);
		log.info("bbbb = {}", bbbb);
		log.info("tableUser getLgnId = {}", tableUser.getLgnId());
		log.info("tableUser getUserUniqueId = {}", tableUser.getUserId());
		log.info("tableUser getLgnId = {}", tableUser.getLgnId());
		log.info("tableUser getUserUniqueId = {}", tableUser.getUserId());
		log.info("tableUser getLgnId = {}", tableUser.getLgnId());
		log.info("tableUser getUserUniqueId = {}", tableUser.getUserId());
		log.info("tableUser getLgnId = {}", tableUser.getLgnId());
		log.info("tableUser getUserUniqueId = {}", tableUser.getUserId());
		
		log.info("▶▶▶▶▶▶▶▶ [test] 로그테스트 INFO LEVEL");
		log.debug("▶▶▶▶▶▶▶▶ [test] 로그테스트 DEBUG LEVEL");
		log.error("▶▶▶▶▶▶▶▶ [test] 로그테스트 ERROR LEVEL");
		
		return "<h1>test 통과</h1>";
	}
	
	/**
	 * 모든사용자1
	 * 
	 * @return
	 */
	@PostMapping("/test/test2")
	public String test2(){
		
		log.info("▶▶▶▶▶▶▶▶ [test2] 로그테스트 INFO LEVEL");
		log.debug("▶▶▶▶▶▶▶▶ [test2] 로그테스트 DEBUG LEVEL");
		log.error("▶▶▶▶▶▶▶▶ [test2] 로그테스트 ERROR LEVEL");
		
		return "<h1>test2 통과</h1>";
	}
	
	/**
	 * 모든사용자2
	 * 
	 * @return
	 */
	@PostMapping("/test/test3")
	public String test3(){
		
		log.info("▶▶▶▶▶▶▶▶ [test3] 로그테스트 INFO LEVEL");
		log.debug("▶▶▶▶▶▶▶▶ [test3] 로그테스트 DEBUG LEVEL");
		log.error("▶▶▶▶▶▶▶▶ [test3] 로그테스트 ERROR LEVEL");
		
		return "<h1>test3 통과</h1>";
	}
	
	/**
	 * ROLE TEST - admin_test
	 * 
	 * @param userAgent
	 * @param aaaa
	 * @param bbbb
	 * @return
	 */
	@PostMapping("/admin/test")
	public ResponseEntity<?> admin_test(){
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("사용자정의메세지", "<h1>admin_test - test 통과</h1>");
		return ResponseEntity.ok(body);
	}
	
	/**
	 * ROLE TEST - user_test
	 * 
	 * @param userAgent
	 * @param aaaa
	 * @param bbbb
	 * @return
	 */
	@PostMapping("/user/test")
	public ResponseEntity<?> user_test(){
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("사용자정의메세지", "<h1>user_test - test 통과</h1>");
		return ResponseEntity.ok(body);
	}
	
	/**
	 * ROLE TEST - user_test
	 * 
	 * @param userAgent
	 * @param aaaa
	 * @param bbbb
	 * @return
	 */
	@PostMapping("/onlyuser/test")
	public ResponseEntity<?> onlyuser_test(){
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("사용자정의메세지", "<h1>onlyuser_test - [RoleConst.BIZADMIN] test 통과</h1>");
		return ResponseEntity.ok(body);
	}
	
	/**
	 * "User-Agent" header 정보 확인용 url
	 * 
	 * @param userAgent
	 * @param aaaa
	 * @param bbbb
	 * @return
	 */
	@GetMapping("/test/jwtTest")
	public ResponseEntity<?> jwtTest(@RequestHeader("User-Agent") String userAgent
			, @RequestHeader(JwtConst.JWT_HTTP_HEADER_ACCESS_TOKEN_KEY) String aaaa
			, @RequestHeader(JwtConst.JWT_HTTP_HEADER_REFRESH_TOKEN_KEY) String bbbb){
		log.info("userAgent = {}", userAgent);
		log.info("aaaa = {}", aaaa);
		log.info("bbbb = {}", bbbb);
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("userAgent", userAgent);
		return ResponseEntity.ok(body);
		
	}
}