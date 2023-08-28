package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.stereotype.Controller;

import gov.me.irs.test.service.TestService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * SelectTest Controller 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class SelectTestController {
	
	private final TestService testService;

	@PostMapping("/test/selectTest")
	public ResponseEntity<?> selectTest(){
		log.info("selectTest = {}");
		
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("test", testService.selectTest());
		body.put("testList", testService.selectTestList());
		
		
		
		return ResponseEntity.ok(body);
	}
}
