package gov.me.irs.common.initial.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.initial.mapper.InitialMapper;
import lombok.RequiredArgsConstructor;

/**
 * 인증 사용자용 공통 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class InitialService {
	
	private final InitialMapper initialMapper;
	
	/**
	 * 인증사용자 사용자정보 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUserInfo(Map<String, Object> requestMap) {
		return initialMapper.selectUserInfo(requestMap);
	}
	
	/**
	 * 사용자권한 메뉴 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMenuList(Map<String, Object> requestMap) {
		return initialMapper.selectMenuList(requestMap);
	}
	
	/**
	 * 그룹코드 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectGroupCodeList(Map<String, Object> requestMap) {
		return initialMapper.selectGroupCodeList(requestMap);
	}
	
	/**
	 * 코드상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectCodeList(Map<String, Object> requestMap) {
		return initialMapper.selectCodeList(requestMap);
	}
	
	/**
	 * 오류메세지 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectErrorMessegeList(Map<String, Object> requestMap) {
		return initialMapper.selectErrorMessegeList(requestMap);
	}
	
}
