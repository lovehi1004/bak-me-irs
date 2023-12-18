package gov.me.irs.common.install.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.install.service.InstallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 초기데이터 생성 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class InstallController {
	
	private final InstallService installService;
	
	@GetMapping(value = "/install")
	public ModelAndView install(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView mv = new ModelAndView();
		
		Map<String, Object> map = installService.checkInstall();
		
		int menuCnt = Integer.valueOf(String.valueOf(map.get("menuCnt")));
		int roleCnt = Integer.valueOf(String.valueOf(map.get("roleCnt")));
		int menuRoleCnt = Integer.valueOf(String.valueOf(map.get("menuRoleCnt")));
		int userCnt = Integer.valueOf(String.valueOf(map.get("userCnt")));
		int userRoleCnt = Integer.valueOf(String.valueOf(map.get("userRoleCnt")));
		int comNtnCdBscCnt = Integer.valueOf(String.valueOf(map.get("comNtnCdBscCnt")));
		
		log.info("[map][{}]", map);
		
		if((menuCnt + roleCnt + menuRoleCnt + userCnt + userRoleCnt + comNtnCdBscCnt) > Const.NUMERIC.ZERO) {
			log.info("[초기데이터 생성이 불가합니다.]");
		} else {
			log.info("[초기데이터 생성을 진행합니다.]");
			
			log.info("[초기데이터 생성 START]");
			
			/* 1. 생성하기 */
			installService.insertData();
			
			/* 2. 조회하기 */
			Map<String, Object> resultMap = installService.checkInstall();
			mv.addObject("newMap", resultMap);
			
			
			log.info("[초기데이터 생성 END]");
		}
		
		
		
		mv.setViewName("install");
		mv.addObject("oldMap", map);
		return mv;
	}
}