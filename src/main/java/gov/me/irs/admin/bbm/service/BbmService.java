package gov.me.irs.admin.bbm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.bbm.mapper.BbmMapper;
import lombok.RequiredArgsConstructor;

/**
 * 게시판 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class BbmService {
	
	private final BbmMapper bbmMapper;
	
	/**
	 * 게시판그룹기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectBbsGroupListCnt(Map<String, Object> requestMap) {
		return bbmMapper.selectBbsGroupListCnt(requestMap);
	}
	
	/**
	 * 게시판그룹기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBbsGroupList(Map<String, Object> requestMap) {
		return bbmMapper.selectBbsGroupList(requestMap);
	}
	
	/**
	 * 게시판그룹기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int checkBbsGroup(Map<String, Object> requestMap) {
		int result = bbmMapper.selectBbsGroup(requestMap);
		return result;
	}
	
	/**
	 * 게시판그룹기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertBbsGroup(Map<String, Object> requestMap) {
		int result = bbmMapper.insertBbsGroup(requestMap);
		return result;
	}
	
	/**
	 * 게시판그룹기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateBbsGroup(Map<String, Object> requestMap) {
		int result = bbmMapper.updateBbsGroup(requestMap);
		return result;
	}
	
	/**
	 * 게시판그룹기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteBbsGroup(Map<String, Object> requestMap) {
		int result = bbmMapper.deleteBbsGroup(requestMap);
		return result;
	}
	
	/**
	 * 게시판상세 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectBbsListCnt(Map<String, Object> requestMap) {
		return bbmMapper.selectBbsListCnt(requestMap);
	}
	
	/**
	 * 게시판상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBbsList(Map<String, Object> requestMap) {
		return bbmMapper.selectBbsList(requestMap);
	}
	
	/**
	 * 게시판상세 상세 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBbsDtl(Map<String, Object> requestMap) {
		return bbmMapper.selectBbsDtl(requestMap);
	}
	
	/**
	 * 게시판상세 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertBbs(Map<String, Object> requestMap) {
		int result = bbmMapper.insertBbs(requestMap);
		return result;
	}
	
	/**
	 * 게시판상세 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateBbs(Map<String, Object> requestMap) {
		int result = bbmMapper.updateBbs(requestMap);
		return result;
	}
	
	/**
	 * 게시판상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteBbs(Map<String, Object> requestMap) {
		int result = bbmMapper.deleteBbs(requestMap);
		return result;
	}
	
}
