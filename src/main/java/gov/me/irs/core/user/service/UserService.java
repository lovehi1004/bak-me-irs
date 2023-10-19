package gov.me.irs.core.user.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;

/**
 * 시스템 공통 사용자 인증 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserMapper userMapper;
	
	/**
	 * 권한 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectRoleList(Map<String, Object> requestMap) {
		return userMapper.selectRoleList(requestMap);
	}
	
}
