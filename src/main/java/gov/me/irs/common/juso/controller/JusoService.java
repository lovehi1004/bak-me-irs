package gov.me.irs.common.juso.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import gov.me.irs.core.config.property.JusoProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 도로명주소 검색 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class JusoService {
	
	private final JusoProperties jusoProperties;
	
	/**
	 * 도로명주소 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws IOException 
	 * @throws ClientProtocolException 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectJusoInfo(Map<String, Object> dsSrh, Map<String, Object> dsPageInfo) throws ClientProtocolException, IOException {
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		/* 결과 */
		String responseJsonString = StringUtils.EMPTY;
		
		/* 1. 주소검색 파라미터정보 생성 */
		RequestJusoVo requestJusoVo = RequestJusoVo.builder()
				.confmKey(jusoProperties.apiKey)
				.currentPage(Long.parseLong(String.valueOf(dsPageInfo.get("pageNo"))))
				.countPerPage(Long.parseLong(String.valueOf(dsPageInfo.get("listSize"))))
				.keyword((String) dsSrh.get("srhKeyword"))
				.build();
		
		/* 2. API 전송처리 */
		HttpClient httpClient = HttpClientBuilder.create().build();
		String jusoUrl = requestJusoVo.getJusoURLWithQueryString(jusoProperties.addrLinkApi);
		HttpPost post = new HttpPost(jusoUrl);
		post.setHeader("Content-type", MediaType.APPLICATION_JSON_VALUE);
		
		/* 3. API 응답처리 */
		HttpResponse  response = httpClient.execute(post);
		responseJsonString = EntityUtils.toString(response.getEntity());
		log.debug("[responseJsonString]["+responseJsonString+"]");
		
		/* 4. 결과정보 */
		Map<String, Object> jsonMap = new Gson().fromJson(responseJsonString, new TypeToken<Map<String, Object>>(){}.getType());
		
		@SuppressWarnings("unchecked")
		Map<String, Object> resultsMap = (Map<String, Object>) jsonMap.get("results");
		
		/* 5. Map으로 변환 */
		ObjectMapper objectMapper = new ObjectMapper();
		ResponseJusoCommonVo commonVo = objectMapper.convertValue(resultsMap.get("common"), ResponseJusoCommonVo.class);
		List<ResponseJusoVo> jusoVoList = objectMapper.convertValue(resultsMap.get("juso"), new TypeReference<List<ResponseJusoVo>>(){});
		
		int currentPage = commonVo.getCurrentPage();			/* 페이지번호 */
		int countPerPage = commonVo.getCountPerPage();			/* 리스트사이즈 */
		int totalCount = commonVo.getTotalCount();				/* 조회결과 총건수 */
		
		/* 번호 부여하기 - 주소API에서 안넘어오는 값 */
		for (int idx = 0; idx < jusoVoList.size(); idx++) {
			int no = totalCount - (currentPage - 1) * countPerPage - idx;
			jusoVoList.get(idx).setNo(no);
		}
		
		resultMap.put("commonVo", commonVo);
		resultMap.put("jusoVoList", jusoVoList);
		
		return resultMap;
	}
	
}
