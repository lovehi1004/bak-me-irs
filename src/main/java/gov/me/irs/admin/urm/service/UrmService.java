package gov.me.irs.admin.urm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.urm.mapper.UrmMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사용자역할 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UrmService {
	
	private final UrmMapper urmMapper;

	/**
	 * 사용자역할상세 역할별 사용자 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectUserRoleList(Map<String, Object> requestMap) {
		return urmMapper.selectUserRoleList(requestMap);
	}
	
	/**
	 * 사용자역할상세 저장
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int saveUserRole(Map<String, Object> requestMap) {
		
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> insertUserRoleList = (List<Map<String, Object>>) requestMap.get("insertUserRoleList");
		
		int result = -1;
		
		/* 역할삭제 */
		result += urmMapper.deleteUserRole(requestMap);
		log.debug("[deleteUserRole-result][{}]", result);
		
		/* 역할등록 */
		result = -1;
		for (Map<String, Object> map : insertUserRoleList) {
			map.put("sessionUserId", requestMap.get("sessionUserId"));
			result += urmMapper.insertUserRole(map);
			log.debug("[insertUserRole-result][{}]", result);
		}
		
		return result;
	}
}
