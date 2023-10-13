package gov.me.irs.common.sms.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.sms.service.SmsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 메인 > 공통 - 알림SMS전송 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class SmsController {
	
	private final SmsService smsService;
	
	/**
	 * 알림SMS전송
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = "/sms/sendSms.irs")
	public NexacroResult sendSms(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap) throws Exception {
		log.debug("-------------------- 알림SMS전송 Controller 호출! ---------------------------");
		NexacroResult nexacroResult = new NexacroResult();
		
		int result = smsService.insertSms(requestMap);
		
		nexacroResult.addDataSet("result", result);
		return nexacroResult;
	}
	
}