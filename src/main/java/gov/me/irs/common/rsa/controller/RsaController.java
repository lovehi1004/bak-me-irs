package gov.me.irs.common.rsa.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.core.crypt.util.RsaUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RSA 공개키, 개인키 생성 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class RsaController {
	
	/**
	 * RSA 공개키, 개인키 생성
	 * @param requestMap
	 * @return
	 */
	@RequestMapping(value = "/common/rsa.irs", method = {RequestMethod.GET, RequestMethod.POST})
	public NexacroResult selectRsa(HttpServletRequest request) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 1. RSA 공개키, 개인키 생성 ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		/*
		 * rsa : {
		 * 		RSAModulus : "모듈"
		 * 		, RSAExponent : "지수"
		 * }
		 */
		Map<String, Object> rsaMap = RsaUtil.generateRsaMap(request);
		nexacroResult.addDataSet("rsa", rsaMap);
		
		return nexacroResult;
	}
	
}