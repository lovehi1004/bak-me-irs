package gov.me.irs.admin.usm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.usm.mapper.UsmMapper;
import lombok.RequiredArgsConstructor;

/**
 * 사용자 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class UsmService {
	
	private final UsmMapper usmMapper;
	
	/**
	 * 사용자기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectUserListCnt(Map<String, Object> requestMap) {
		return usmMapper.selectUserListCnt(requestMap);
	}
	
	/**
	 * 사용자기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectUserList(Map<String, Object> requestMap) {
		return usmMapper.selectUserList(requestMap);
	}
	
	/**
	 * 사용자기본 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUserDtl(Map<String, Object> requestMap) {
		Map<String, Object> map = usmMapper.selectUserDtl(requestMap);
		
		/* TODO - 개인정보취급이력 저장 insert - 구분 : 조회 */
		
		return map;
	}
	
	/**
	 * 사용자기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertUser(Map<String, Object> requestMap) {
		int result = usmMapper.insertUser(requestMap);
		
		/* TODO - 개인정보취급이력 저장 insert - 구분 : 등록 */
		
		return result;
	}
	
	/**
	 * 사용자기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateUser(Map<String, Object> requestMap) {
		
		int result = usmMapper.updateUser(requestMap);
		
		/* TODO - 개인정보취급이력 저장 insert - 구분 : 수정 */
		
		return result;
	}
	
	/**
	 * 사용자기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteUser(Map<String, Object> requestMap) {
		
		int result = usmMapper.deleteUser(requestMap);
		
		/* TODO - 개인정보취급이력 저장 insert - 구분 : 삭제 */
		
		return result;
	}
}
