package gov.me.irs.common.biz.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.biz.service.CommonBizService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.vo.PagingVo;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class CommonBizController {

	private final CommonBizService commonBizService;
	
	/**
	 * [공통] > 관장기관 정보 조회 (사업, 방법론)
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/biz/selectInstDetail.irs")
	public NexacroResult selectInstDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) {
		
		NexacroResult nexacroResult = new NexacroResult();
		Map<String, Object> dsInfo = null;
		
		dsInfo = commonBizService.selectInstDetail(dsSrh);
		
		nexacroResult.addDataSet("dsInfo", dsInfo);
				
		return nexacroResult;
	}
	
	/**
	 * [공통] > 관장기관 정보 변경 (사업, 방법론)
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/biz/updateInst.irs")
	public NexacroResult updateInst(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh, @ParamDataSet(name = "dsInfo") Map<String, Object> dsInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> authMap = commonBizService.selectAuthMap();
		dsSrh = commonBizService.setSqlMap(authMap, dsSrh);
		dsInfo = commonBizService.setSqlMap(authMap, dsInfo);
		
		commonBizService.updateInst(authMap, dsSrh, dsInfo);
				
		return nexacroResult;		
		
	}
	
	/**
	 * [공통] 이력 목록 조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/biz/selectHstryList.irs")
	public NexacroResult selectHstryList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		
		Map<String, Object> authMap = commonBizService.selectAuthMap();
		dsSrh = commonBizService.setSqlMap(authMap, dsSrh);
		
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		int totalCount = commonBizService.selectHstryListCnt(dsSrh);
		
		pagingVo.setTotalCount(totalCount);
		
		if(totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			// 일반사업체는 자신이 속한 사업목록만 조회 -> 상태값을 다 보여주어도 상관없음.
			dsList = commonBizService.selectHstryList(dsSrh);
		}
		
		nexacroResult.addDataSet("dsPageInfo", pagingVo.getMap());
		nexacroResult.addDataSet("dsList", dsList);
				
		return nexacroResult;
	}
	
}
