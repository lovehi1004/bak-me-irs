package gov.me.irs.sol.iostudio.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import gov.me.irs.sol.iostudio.vo.RequestVo;
import gov.me.irs.sol.iostudio.vo.ResponseVo;
import gov.me.irs.sol.iostudio.vo.child.Pagination;
import gov.me.irs.sol.iostudio.vo.child.Query;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class IostudioService {
	
	private final IostudioUtil iostudioUtil;

	/**
	 * 통합검색
	 * @param requestMap
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public ResponseVo search(Map<String, Object> requestMap) throws ClientProtocolException, IOException {
		
		/* 1. 보낼파라미터 조립하기 */
		RequestVo requestVo = this.generateRequestVo(requestMap);
		
		/* 2. 연동하기 */
		Map<String, Object> responseMap = iostudioUtil.send(requestVo);
		
		/* 3. 결과 변환하기 */
		ObjectMapper objectMapper = new ObjectMapper();
		ResponseVo responseVo = objectMapper.convertValue(responseMap, ResponseVo.class);

		/* 4. Hits 정보 추출하기 - 결과목록 */
		Map<String, Object> hits = (Map<String, Object>) responseVo.getHits().getHits();		//결과 목록
		
		/* 5. 추출된 Hits 정보에서 목록정보 추출후 Map<String, List>로 변환하기 - 데이터셋용으로 변환 */
		Map<String, Object> dataListMap = new HashMap<String, Object>();
		for (String index : requestVo.getIndices()) {
			dataListMap.put(index, (List<Map<String, Object>>) hits.get(index));
		}
		responseVo.setResultMap(dataListMap);				//출력결과 담기는곳
		
		return responseVo;
	}
	
	/**
	 * 검색 및 페이징처리
	 * @param requestMap
	 * @param pageVo
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public ResponseVo search(Map<String, Object> requestMap, Map<String, Object> pageVo) throws ClientProtocolException, IOException {
		
		/* 1. 보낼파라미터 조립하기 */
		RequestVo requestVo = this.generateRequestVo(requestMap, pageVo);
		
		/* 2. 연동하기 */
		Map<String, Object> responseMap = iostudioUtil.send(requestVo);
		
		/* 3. 결과 변환하기 */
		ObjectMapper objectMapper = new ObjectMapper();
		ResponseVo responseVo = objectMapper.convertValue(responseMap, ResponseVo.class);
		
		/* 4. Hits 정보 추출하기 - 결과목록 */
		Map<String, Object> hits = (Map<String, Object>) responseVo.getHits().getHits();		//결과 목록
		
		/* 5. 추출된 Hits 정보에서 목록정보 추출후 Map<String, List>로 변환하기 - 데이터셋용으로 변환 */
		Map<String, Object> dataListMap = new HashMap<String, Object>();
		for (String index : requestVo.getIndices()) {
			dataListMap.put(index, (List<Map<String, Object>>) hits.get(index));
		}
		responseVo.setResultMap(dataListMap);				//출력결과 담기는곳
		
		return responseVo;
	}
	
	
	/**
	 * API 전송 JSON 조립
	 * @param requestMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private RequestVo generateRequestVo(Map<String, Object> requestMap) {
		String search = (String) requestMap.get("search");
		long pageInfo = Long.parseLong(requestMap.get("pageInfo").toString());
		
		
		/* Query 조립 */
		Query query = Query.builder()
				.text(search)
				.build();
		
		/* Pagination 조립 */
		Pagination pagination = Pagination.builder()
				.page(pageInfo)
				.build();
		
		/* 최종 조립 */
		return RequestVo.builder()
				.query(query)
				.indices((List<String>) requestMap.get("indices"))
				.fields((List<String>) requestMap.get("fields"))
				.pagination(pagination)
				.build();
	}
	
	/**
	 * 페이징처리 API 전송 JSON 조립
	 * @param requestMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private RequestVo generateRequestVo(Map<String, Object> requestMap, Map<String, Object> pageVo) {
		String search = (String) requestMap.get("search");
		
		/* Query 조립 */
		Query query = Query.builder()
				.text(search)
				.build();
		
		/* Pagination 조립 */
		Pagination pagination = Pagination.builder()
				.page(Long.parseLong(pageVo.get("pageNo").toString()))
				.size(Long.parseLong(pageVo.get("listSize").toString()))
				.build();
		
		/* 최종 조립 */
		return RequestVo.builder()
				.query(query)
				.indices((List<String>) requestMap.get("indices"))
				.fields((List<String>) requestMap.get("fields"))
				.pagination(pagination)
				.build();
	}
}
