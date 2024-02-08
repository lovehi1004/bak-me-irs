package gov.me.irs.test.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

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
	 * 
	 * @param dsSrh
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/test/selectFirstList.irs")
	public NexacroResult selectFirstList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[selectFirstList][{}]", "로그 정의");
		
		/* 업무 로직 기입 */
		List<Map<String, Object>> dsList = firstService.selectFirstList(dsSrh);
		
		nexacroResult.addDataSet("dsList", dsList);
		return nexacroResult;
	}
	
}