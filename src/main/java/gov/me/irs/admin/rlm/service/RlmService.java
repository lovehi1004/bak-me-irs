package gov.me.irs.admin.rlm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.rlm.mapper.RlmMapper;
import lombok.RequiredArgsConstructor;

/**
 * 역할 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class RlmService {
	
	private final RlmMapper rlmMapper;

	/**
	 * 역할기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectRoleList(Map<String, Object> requestMap) {
		return rlmMapper.selectRoleList(requestMap);
	}
	
	/**
	 * 역할기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertRole(Map<String, Object> requestMap) {
		return rlmMapper.insertRole(requestMap);
	}
	
	/**
	 * 역할기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateRole(Map<String, Object> requestMap) {
		return rlmMapper.updateRole(requestMap);
	}
	
	/**
	 * 역할기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteRole(Map<String, Object> requestMap) {
		return rlmMapper.deleteRole(requestMap);
	}
}
