package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Controller
@Slf4j
public class TestModelAndViewController {

	@GetMapping("/test/jspPage")
	public String test1(@RequestParam(required=true, value="aaaa", defaultValue="값이없음" ) String aaaa){
		
		log.debug("▶▶▶▶▶▶▶▶ [jspPage] 로그테스트 DEBUG LEVEL");
		
		return "jspPage";
	}
	
	@GetMapping("/test/mavJspPage")
	public ModelAndView test2(@RequestParam(required=true, value="aaaa", defaultValue="값이없음" ) String aaaa){
		
		log.debug("▶▶▶▶▶▶▶▶ [mavJspPage] 로그테스트 DEBUG LEVEL");
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("aaaa", "가가가가");
		map.put("bbbb", "나나나나");
		map.put("cccc", "다다다다");
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("mavJspPage");
		mv.addAllObjects(map);
		
		return mv;
	}
	
}
