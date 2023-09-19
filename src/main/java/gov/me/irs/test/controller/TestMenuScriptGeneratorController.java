package gov.me.irs.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class TestMenuScriptGeneratorController {

	/**
	 * 메뉴 INSERT SQL 생성하기
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@GetMapping(value = "/test/menuScript.irs")
	public ModelAndView testCryptMain(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("test/menuScript");
		return mv;
	}
}
