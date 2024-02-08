package gov.me.irs.sol.iostudio.util;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.http.MediaType;
import org.springframework.jdbc.support.JdbcUtils;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import gov.me.irs.core.config.property.IostudioProperties;
import gov.me.irs.sol.iostudio.vo.RequestVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 검색엔진 IostudioUtil
 * 
 * @author 홍길동
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class IostudioUtil {
	
	private final IostudioProperties iostudioProperties;
	
	/**
	 * 검색엔진 연동
	 * 
	 * @param requestVo
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public Map<String, Object> send(RequestVo requestVo) throws ClientProtocolException, IOException {
		
		HttpClient httpClient = HttpClientBuilder.create().build();
		String searchUrl = iostudioProperties.searchUrl;
		log.debug("[전송URL][{}]", searchUrl);
		
		HttpPost post = new HttpPost(searchUrl);
		post.setHeader("Content-type", MediaType.APPLICATION_JSON_VALUE);
		
		Gson gson = new Gson();
		String requestVoString = gson.toJson(requestVo);
		log.debug("[전송정보][{}]", requestVoString);
		
		StringEntity se = new StringEntity(requestVoString, StandardCharsets.UTF_8.name());
		post.setEntity(se);
		
		HttpResponse  response = httpClient.execute(post);
		String responseVoString = null;
		responseVoString = EntityUtils.toString(response.getEntity());
		log.debug("[응답정보][{}]", responseVoString);
		
		Map<String, Object> jsonMap = new Gson().fromJson(responseVoString, new TypeToken<Map<String, Object>>(){}.getType());
		
		return jsonMap;
	}
	
	/**
	 * Map키 카멜로 변환하기
	 * 
	 * @param map
	 * @return
	 */
	public Map<String, Object> convertKeyToCamel(Map<String, Object> map) {
		
		Map<String, Object> newMap = new HashMap<String, Object>();
		newMap.putAll(map);
		this.convert(newMap);
		return newMap;
	}
	
	/**
	 * Map키 카멜 변환 재귀메소드
	 * 
	 * @param map
	 */
	@SuppressWarnings("unchecked")
	private void convert(Map<String, Object> map) {
		
		Map<String, Object> camelMap = new HashMap<String, Object>();
		camelMap.putAll(map);
		
		/* 카멜로 변환된 키로 Map에 추가하기 */
		for (Entry<String, Object> e : camelMap.entrySet()) {
			String key = e.getKey();
			Object value = e.getValue();
			
			if(value instanceof List) {
				List<Object> list = (List<Object>) value;
				for (Object obj : list) {
					if(obj instanceof Map) {
						Map<String, Object> childMap = (Map<String, Object>) obj;
						this.convert(childMap);
					}
				}
			}
			String camelKey = JdbcUtils.convertUnderscoreNameToPropertyName(key);			/* Map 키 카멜로 변환하기 */

			/* 카멜변환키 추가 */
			map.put(camelKey, value);
			
			/* 원본 언더스코어키 제거 */
			map.remove(key);
			
		}
		
	}

}
