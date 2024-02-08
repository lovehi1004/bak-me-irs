package gov.me.irs.scheduler.daily.nti.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.scheduler.daily.nti.mapper.SmsKoffSendTaskMapper;
import lombok.RequiredArgsConstructor;

/**
 * 메세지 전송 Service(착수보고지연)
 * 
 * @author woosm
 *
 */
@Service
@RequiredArgsConstructor
public class SmsKoffSendTaskService {
	
	private final SmsKoffSendTaskMapper smsKoffSendTaskMapper;

	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectSmsSendKOffList() {
		return smsKoffSendTaskMapper.selectSmsSendKOffList();
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int insertSmsTrgt(Map<String, Object> map) {
		return smsKoffSendTaskMapper.insertSmsTrgt(map);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectTrgt() {
		return smsKoffSendTaskMapper.selectTrgt();
	}
}
