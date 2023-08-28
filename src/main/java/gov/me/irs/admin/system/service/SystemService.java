package gov.me.irs.admin.system.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.system.mapper.SystemMapper;
import lombok.RequiredArgsConstructor;

/**
 * 시스템접속이력 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class SystemService {
	
	private final SystemMapper systemMapper;
	
	/**
	 * 시스템접속이력 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectConnectHistoryListCnt(Map<String, Object> requestMap) {
		return systemMapper.selectConnectHistoryListCnt(requestMap);
	}

	/**
	 * 시스템접속이력 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectConnectHistoryList(Map<String, Object> requestMap) {
		return systemMapper.selectConnectHistoryList(requestMap);
	}
}
