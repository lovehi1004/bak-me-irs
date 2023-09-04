package gov.me.irs.test.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import gov.me.irs.core.crypt.util.RsaUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Browser 비밀번호 암호화 샘플
 * 	▶ 참고 : [https://cofs.tistory.com/297]
 * 	------------------------------------------------------------
 * 	- 총 3건
 * 		- [TestFrontCryptController.java]
 * 		- [/gov-me-irs/src/main/webapp/test/cryptMain.jsp]
 * 		- [/gov-me-irs/src/main/webapp/test/testCrypt.jsp]
 * 	------------------------------------------------------------
 * 
 * TODO - 수정 필요
 * 
 * @author Justin
 *
 */
@Controller
@Slf4j
@RequiredArgsConstructor
public class TestFrontCryptController {
	
	private final HttpSession session;
	
	@GetMapping(value = "/test/cryptMain.irs")
	public ModelAndView testCryptMain(HttpServletRequest request, ModelMap model
			) throws Exception {
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		
		/* #################### 1. RSA 공개키, 개인키 생성 #################### */
		Map<String, Object> rsaMap = RsaUtil.generateRsaMap(request);
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("test/cryptMain");
		mv.addAllObjects(rsaMap);
		return mv;
		
	}

	@PostMapping(value = "/test/cryptResult.irs")
	public ModelAndView testCrypt(HttpServletRequest request, ModelMap model
			, @RequestParam(required=true, value="parameter") String parameter
			) throws Exception {
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ testCrypt]");
		
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("parameter", parameter);
		log.debug("[parameter][{}]", parameter);
		
		/* #################### 3. 복호화 #################### */
		String result = RsaUtil.decryptRsa(session, parameter);
		
		log.debug("[result][{}]", result);
		
		body.put("result", result);
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("test/cryptResult");
		mv.addAllObjects(body);
		return mv;
		
	}
	
}


