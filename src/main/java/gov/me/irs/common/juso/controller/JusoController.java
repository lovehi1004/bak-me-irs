package gov.me.irs.common.juso.controller;

import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import gov.me.irs.core.config.property.JusoProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 인증 사용자용 공통 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class JusoController {
	
	private final JusoProperties jusoProperties;
	
	@GetMapping(value = "/Sample.irs")
	public ModelAndView Sample(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("Sample");
		return mv;
	}
	
	@RequestMapping(value = "/jusoPopup.irs", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView jusoPopup(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jusoPopup");
		return mv;
	}
	
	
	
	@GetMapping(value = "/juso.irs")
	public ModelAndView juso(HttpServletRequest request, ModelMap model) throws Exception {
		ModelAndView mv = new ModelAndView();
		
		/* 결과 */
		String result = StringUtils.EMPTY;
		
		/*
		Juso juso = Juso.builder()
				.confmKey(jusoProperties.apiKey)
				.currentPage(1)
				.countPerPage(10)
				.keyword("사당1동")
				.build();
		*/
		
//		String jsonString = new GsonBuilder().setPrettyPrinting().serializeNulls().create().toJson(juso);
		HttpClient httpClient = HttpClientBuilder.create().build();
		
		try {
//			StringEntity stringEntity = new StringEntity(jsonString);
			
//			String jusoUrl = juso.getJusoURLWithQueryString(jusoProperties.addrLinkApi);
//			System.out.println("[jusoUrl]["+jusoUrl+"]");
			
			
			String jusoUrl = "https://business.juso.go.kr/addrlink/addrLinkApi.do?currentPage="+1
					+"&countPerPage="+10+"&keyword="+URLEncoder.encode("사당1동","UTF-8")
					+"&confmKey="+jusoProperties.apiKey+"&resultType="+"json";
					
			System.out.println("[jusoUrl]["+jusoUrl+"]");
			HttpPost post = new HttpPost(jusoUrl);
//			post.setEntity(stringEntity);
			post.setHeader("Content-type", MediaType.APPLICATION_JSON_VALUE);
			
			HttpResponse  response = httpClient.execute(post);
//			HttpEntity entity = response.getEntity();
			result = EntityUtils.toString(response.getEntity());
			System.out.println("■■■■■■■■■■■■■■■■■■■■ 주소 테스트 START ■■■■■■■■■■■■■■■■■■■■");
			System.out.println("[result]["+result+"]");
			System.out.println("■■■■■■■■■■■■■■■■■■■■ 주소 테스트 END ■■■■■■■■■■■■■■■■■■■■");
			
			
//			InputStream is = null;
//			
//			if (entity != null) {
//				is = entity.getContent();
//			}
//			xr.parse(new InputSource(instream));
			
		} catch(Exception e) {
			log.error("[Juso Exception][{}]", e);
		}
		
		mv.addObject("result", result);
		mv.setViewName("juso");
		return mv;
	}
}