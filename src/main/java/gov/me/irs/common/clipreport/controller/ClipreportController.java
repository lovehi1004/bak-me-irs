package gov.me.irs.common.clipreport.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import gov.me.irs.test.service.TestReportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * ClipreportController - 클립소프트
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@RestController
@Slf4j
public class ClipreportController {
	
	private final TestReportService testReportService;
	
	/**
	 * 
	 * 
	 * @param request
	 * @param model
	 * @param crfPath - crf 경로
	 * 			▶ Ex.> [/gov-me-irs/src/main/webapp/WEB-INF/clipreport5/crf/CLIP.crf] 인경우 "/crf/CLIP.crf" 이렇게 설정한다.
	 * 
	 * @param service - 데이터가 포함된 jsonString을 읽어올 @Service의 메소드 분기 구분값, 개발자가 직접 지정
	 * @param requestMap
	 * @return
	 */
	@PostMapping(value = "/common/report.irs")
	public ModelAndView reportMain(HttpServletRequest request, ModelMap model
			, @RequestParam(required=true, value="crfPath", defaultValue="") String crfPath
			, @RequestParam(required=true, value="service", defaultValue="") String service
			, @RequestParam Map<String, Object> requestMap
			) throws Exception {
		
		
		log.info("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][crfPath]["+crfPath+"]");
		log.info("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][service]["+service+"]");

		String memoData = StringUtils.EMPTY;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 레포트용 데이터 조회 - 서비스 분기점 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		/* ■                                             여기에 추가하기                                             ■ */
		/* ■                                             ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼                                             ■ */
		if("TestReportService".equals(service)) {
			memoData = testReportService.selectTestList(requestMap);
		}
		
		request.setAttribute("memoData", memoData);
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 레포트용 데이터 조회 - 서비스 분기점 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

		ModelAndView mv = new ModelAndView();
		mv.setViewName("ClipReport5/reportMain");
		return mv;
	}
	
}
