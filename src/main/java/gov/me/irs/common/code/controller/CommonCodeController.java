package gov.me.irs.common.code.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.code.service.CommonCodeService;
import lombok.RequiredArgsConstructor;

/**
 * 
 * 
 * @author Jsh
 *
 */
@RequiredArgsConstructor
@Controller
public class CommonCodeController {
	
	private final CommonCodeService commonCodeService;
	/**
	 * [공통] 사업분야 - 상세분야코드 조회 
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/code/selectUserCommonCodeList.irs")
	public NexacroResult selectUserCommonCodeList(@ParamDataSet(name = "dsPrivCd") List<Map<String, Object>> dsPrivCd){
		
		NexacroResult nexacroResult = new NexacroResult();
		
		 
		for(Map<String,Object> dsCode :dsPrivCd ) {
			
			String srhCd = dsCode.get("srhCd").toString();
			
			if(srhCd.equals("dsBizFldCd")) {
				nexacroResult.addDataSet("dsBizFldCd", commonCodeService.selectBizFldList());			//사업분야 조회		
			}else if(srhCd.equals("dsBizDtlsFldCd")) {
				nexacroResult.addDataSet("dsBizDtlsFldCd", commonCodeService.selectBizDtlsFldList());	//사업 세부분야 조회
			}else if(srhCd.equals("dsInstCd")) {
				nexacroResult.addDataSet("dsInstCd", commonCodeService.selectMnofcCdList());		//관장기관 조회 
			}else if(srhCd.equals("dsNtnCd")) {
				nexacroResult.addDataSet("dsNtnCd", commonCodeService.selectNtnCdList());		//국가코드 조회
			}
		}

		return nexacroResult;
	}
	
}
