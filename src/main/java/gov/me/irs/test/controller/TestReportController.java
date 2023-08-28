package gov.me.irs.test.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
public class TestReportController {
	
	/**
	 * TEST - 클립리포트 샘플
	 * 		파라미터 [crfPath] : 리포트 파일
	 * 			-> /report/sample/sample2.crf
	 * 		파라미터 [serviceUrl] : 리포트에 출력할 정보가 포함된 서비스URL
	 * 			-> /test/report/reportService.report
	 * 
	 * @param request
	 * @param model
	 * @param requestMap
	 * @return
	 */
	@GetMapping(value = "/test/report/reportService.report", produces = { "application/json" })
	public String selectData(HttpServletRequest request, ModelMap model, @RequestParam Map<String, Object> requestMap){
		
		log.debug("["+this.getClass().getName()+"][ReportController.reportMain] START");
		
		log.debug("[TEST 레포트 서비스 파라미터 확인 START]");
		for (Entry<String, Object> e : requestMap.entrySet()) {
			String value = StringUtils.EMPTY;
			try {
				value = URLDecoder.decode((String) e.getValue(), StandardCharsets.UTF_8.name());
			} catch (UnsupportedEncodingException e1) {
				e1.printStackTrace();
			}
			
			log.debug("[requestMap][KEY][{}][VALUE][{}]", e.getKey(), value);
		}
		log.debug("[TEST 레포트 서비스 파라미터 확인 END]");
		
		Map<String, Object> dataMap1 = new HashMap<String, Object>();
		dataMap1.put("bbsSn", 1001);
		dataMap1.put("bbscttTtl", "게시판제목1001");
		Map<String, Object> dataMap2 = new HashMap<String, Object>();
		dataMap2.put("bbsSn", 2002);
		dataMap2.put("bbscttTtl", "게시판제목2002");
		Map<String, Object> dataMap3 = new HashMap<String, Object>();
		dataMap3.put("bbsSn", 3003);
		dataMap3.put("bbscttTtl", "게시판제목3003");
		Map<String, Object> dataMap4 = new HashMap<String, Object>();
		dataMap4.put("bbsSn", 4004);
		dataMap4.put("bbscttTtl", "게시판제목4004");
		Map<String, Object> dataMap5 = new HashMap<String, Object>();
		dataMap5.put("bbsSn", 5005);
		dataMap5.put("bbscttTtl", "게시판제목5005");
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		list.add(dataMap1);
		list.add(dataMap2);
		list.add(dataMap3);
		list.add(dataMap4);
		list.add(dataMap5);
		
		
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("list1", list);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
		String jsonString = gson.toJson(body);
		
		log.debug("["+this.getClass().getName()+"][ReportController.reportMain] END");
		
		return jsonString;
		
	}
}
