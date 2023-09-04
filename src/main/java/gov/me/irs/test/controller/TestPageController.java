package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * TestPageController 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class TestPageController {

	@GetMapping("/test/page/testPage")
	public String testPage(){
		log.info("[/page/testPage] 성공!");
		
		return "WEB-INF/views/testPage";
	}
	
	@GetMapping("/test/page/testJson")
	public ResponseEntity<?> testJson(){
		log.info("[/page/testJson] 성공!");
		Map<String, Object> body = new HashMap<String, Object>();
		
		log.debug("[testJson][{}]", "테스트");
		
		body.put("result", "결과");
		
		return ResponseEntity.ok(body);
	}
}
