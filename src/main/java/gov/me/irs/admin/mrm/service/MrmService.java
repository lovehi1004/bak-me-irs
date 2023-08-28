package gov.me.irs.admin.mrm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.mrm.mapper.MrmMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 역할별 메뉴 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class MrmService {
	
	private final MrmMapper mrmMapper;
	
	/**
	 * 역할별 메뉴 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMenuRoleList(Map<String, Object> requestMap) {
		return mrmMapper.selectMenuRoleList(requestMap);
	}
	
	/**
	 * 역할별 메뉴 저장
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int saveMenuRole(Map<String, Object> requestMap) {
		
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> insertMenuRoleList = (List<Map<String, Object>>) requestMap.get("insertMenuRoleList");
		
		int result = -1;
		
		/* 역할삭제 */
		result += mrmMapper.deleteMenuRole(requestMap);
		log.debug("[deleteMenuRole-result][{}]", result);
		
		/* 역할등록 */
		result = -1;
		for (Map<String, Object> map : insertMenuRoleList) {
			map.put("sessionUserId", requestMap.get("sessionUserId"));
			result += mrmMapper.insertMenuRole(map);
			log.debug("[insertMenuRole-result][{}]", result);
		}
		
		return result;
	}
}
