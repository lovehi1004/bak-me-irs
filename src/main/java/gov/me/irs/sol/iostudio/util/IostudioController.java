package gov.me.irs.sol.iostudio.util;

import java.io.IOException;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.sol.iostudio.constants.IostudioConst;
import gov.me.irs.sol.iostudio.vo.ResponseVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Controller
@Slf4j
public class IostudioController {
	
	private final IostudioService iostudioService;
	
	private final IostudioUtil iostudioUtil;
	
	/**
	 * 메인팝업 - 정보공개 - 검색엔진 통합검색
	 * 
	 * @param dsSrh
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@PostMapping(value = "/common/selectIostuioSearchList.irs")
	public NexacroResult selectIostuioSearchList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws ClientProtocolException, IOException {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		dsSrh.put("indices", IostudioConst.REQUEST.INDICES.INDICES_ALL);
		dsSrh.put("fields", IostudioConst.REQUEST.FIELDS.FIELDS_ALL);
		ResponseVo responseVo = iostudioService.search(dsSrh);
		
		Map<String, Object> resultMap = responseVo.getResultMap();
		
		Map<String, Object> convertedMap = iostudioUtil.convertKeyToCamel(resultMap);
		/* map을 addDataSet 에 모두 넣기 */
		convertedMap.entrySet().stream().forEach(m -> {
			String key = m.getKey();
			String firstLetter = key.substring(0, 1);
			String leftLetter = key.substring(1, key.length());
			String datasetName = "ds" + firstLetter.toUpperCase() + leftLetter;
			
			nexacroResult.addDataSet(datasetName, m.getValue());
			log.debug("[키][{}][내용][{}]", datasetName, m.getValue());
		});
		
		log.debug("[convertedMap]\n["+convertedMap+"]");
		
		return nexacroResult;
		
	}
	
	/**
	 * 메인팝업 - 정보공개 - 검색엔진 협정약정검색
	 * 
	 * @param dsSrh
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@PostMapping(value = "/common/selectIostuioSearchAgrStiplList.irs")
	public NexacroResult selectIostuioSearchAgrStiplList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws ClientProtocolException, IOException {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		dsSrh.put("indices", IostudioConst.REQUEST.INDICES.INDICES_AGR_STIPL);
		dsSrh.put("fields", IostudioConst.REQUEST.FIELDS.FIELDS_AGR_STIPL);
		ResponseVo responseVo = iostudioService.search(dsSrh, dsPageInfo);
		
		dsPageInfo.put("totalCount", responseVo.getHits().getTotal());
		
		Map<String, Object> resultMap = responseVo.getResultMap();
		
		Map<String, Object> convertedMap = iostudioUtil.convertKeyToCamel(resultMap);
		/* map을 addDataSet 에 모두 넣기 */
		convertedMap.entrySet().stream().forEach(m -> {
			String datasetName = "dsList";
			
			nexacroResult.addDataSet(datasetName, m.getValue());
			log.debug("[키][{}][내용][{}]", datasetName, m.getValue());
		});
		
		log.debug("[convertedMap]\n["+convertedMap+"]");
		nexacroResult.addDataSet("dsPageInfo", dsPageInfo);
		return nexacroResult;
		
	}
	
	/**
	 * 메인팝업 - 정보공개 - 검색엔진 방법론검색
	 * 
	 * @param dsSrh
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@PostMapping(value = "/common/selectIostuioSearchMhdlgList.irs")
	public NexacroResult selectIostuioSearchMhdlgList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws ClientProtocolException, IOException {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		dsSrh.put("indices", IostudioConst.REQUEST.INDICES.INDICES_MHDLG);
		dsSrh.put("fields", IostudioConst.REQUEST.FIELDS.FIELDS_MHDLG);
		ResponseVo responseVo = iostudioService.search(dsSrh, dsPageInfo);
		
		dsPageInfo.put("totalCount", responseVo.getHits().getTotal());
		
		Map<String, Object> resultMap = responseVo.getResultMap();
		
		Map<String, Object> convertedMap = iostudioUtil.convertKeyToCamel(resultMap);
		/* map을 addDataSet 에 모두 넣기 */
		convertedMap.entrySet().stream().forEach(m -> {
			String datasetName = "dsList";
			
			nexacroResult.addDataSet(datasetName, m.getValue());
			log.debug("[키][{}][내용][{}]", datasetName, m.getValue());
		});
		
		log.debug("[convertedMap]\n["+convertedMap+"]");
		nexacroResult.addDataSet("dsPageInfo", dsPageInfo);
		return nexacroResult;
		
	}
	
	/**
	 * 메인팝업 - 정보공개 - 검색엔진 국제감축사업검색
	 * 
	 * @param dsSrh
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@PostMapping(value = "/common/selectIostuioSearchIrbList.irs")
	public NexacroResult selectIostuioSearchIrbList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws ClientProtocolException, IOException {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		dsSrh.put("indices", IostudioConst.REQUEST.INDICES.INDICES_IRB);
		dsSrh.put("fields", IostudioConst.REQUEST.FIELDS.FIELDS_IRB);
		ResponseVo responseVo = iostudioService.search(dsSrh, dsPageInfo);
		
		dsPageInfo.put("totalCount", responseVo.getHits().getTotal());
		
		Map<String, Object> resultMap = responseVo.getResultMap();
		
		Map<String, Object> convertedMap = iostudioUtil.convertKeyToCamel(resultMap);
		/* map을 addDataSet 에 모두 넣기 */
		convertedMap.entrySet().stream().forEach(m -> {
			String datasetName = "dsList";
			
			nexacroResult.addDataSet(datasetName, m.getValue());
			log.debug("[키][{}][내용][{}]", datasetName, m.getValue());
		});
		
		log.debug("[convertedMap]\n["+convertedMap+"]");
		nexacroResult.addDataSet("dsPageInfo", dsPageInfo);
		return nexacroResult;
		
	}
	
}
