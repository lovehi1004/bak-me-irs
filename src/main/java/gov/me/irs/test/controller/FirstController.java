package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.stereotype.Controller;

import gov.me.irs.test.service.FirstService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * FirstController 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class FirstController {
	
	private final FirstService firstService;
	
	/**
	 * 테스트 목록조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/test/selectFirstList.irs")
	public ResponseEntity<?> test(@RequestBody Map<String, Object> requestMap){
		Map<String, Object> body = new HashMap<String, Object>();
		
		log.debug("[selectFirstList][{}]", "테스트");
		
		/* 업무 로직 기입 */
		List<Map<String, Object>> resultList = firstService.selectFirstList(requestMap);
		body.put("resultList", resultList);
		
		return ResponseEntity.ok(body);
	}
	
}