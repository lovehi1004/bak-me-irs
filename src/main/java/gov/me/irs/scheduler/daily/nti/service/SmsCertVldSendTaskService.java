package gov.me.irs.scheduler.daily.nti.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.scheduler.daily.nti.mapper.SmsCertVldSendTaskMapper;
import lombok.RequiredArgsConstructor;

/**
 * 메세지 전송 Service
 * 
 * @author woosm
 *
 */
@Service
@RequiredArgsConstructor
public class SmsCertVldSendTaskService {
	
	private final SmsCertVldSendTaskMapper smsSendTaskMapper;
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectSmsSendCertVldList() {
		return smsSendTaskMapper.selectSmsSendCertVldList();
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int insertSmsTrgt(Map<String, Object> map) {
		return smsSendTaskMapper.insertSmsTrgt(map);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectTrgt() {
		return smsSendTaskMapper.selectTrgt();
	}
}
