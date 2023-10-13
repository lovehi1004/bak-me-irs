package gov.me.irs.common.sms.service;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.sms.mapper.SmsMapper;
import lombok.RequiredArgsConstructor;

/**
 * 메인 > 공통 - 알림SMS전송 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class SmsService {
	
	private final SmsMapper smsMapper;
	
	/**
	 * 알림SMS전송
	 * 
	 * @param requestMap
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertSms(Map<String, Object> requestMap) {
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전송로직 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		int result = smsMapper.insertSms(requestMap);
		return result;
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전송로직 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	}
	

}
