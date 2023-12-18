package gov.me.irs.common.juso.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.vo.PagingVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 도로명주소 검색 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class JusoController {
	
	private final JusoService jusoService;
	
	@PostMapping(value = "/common/selectJusoList.irs")
	public NexacroResult selectJusoList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws ClientProtocolException, IOException {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		/* 도로명주소 검색 */
		Map<String, Object> resultMap = jusoService.selectJusoInfo(dsSrh, dsPageInfo);
		
		/* 페이징처리정보 추출 */
		ResponseJusoCommonVo commonVo = (ResponseJusoCommonVo) resultMap.get("commonVo");
		
		/* ■■■■ 페이징처리 - 2. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(commonVo.getTotalCount());
		
		/* 도로명주소 검색결과 추출 */
		@SuppressWarnings("unchecked")
		List<ResponseJusoVo> jusoVoList = (List<ResponseJusoVo>) resultMap.get("jusoVoList");

		/* ■■■■ 페이징처리 - 3. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsJusoList", jusoVoList);
		
		return nexacroResult;
		
	}
}