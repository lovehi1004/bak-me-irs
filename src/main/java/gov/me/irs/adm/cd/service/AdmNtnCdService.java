package gov.me.irs.adm.cd.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.cd.mapper.AdmNtnCdMapper;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class AdmNtnCdService {
	
	private final AdmNtnCdMapper admNtnCdMapper;
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectNtnCdList(Map<String, Object> requestMap) {
		return admNtnCdMapper.selectNtnCdList(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectNtnCdDetail(Map<String, Object> requestMap) {
		return admNtnCdMapper.selectNtnCdDetail(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertNtnCd(Map<String, Object> requestMap) {
		int result = admNtnCdMapper.insertNtnCd(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 국가코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectNtnCdCnt(Map<String, Object> requestMap) {
		return admNtnCdMapper.selectNtnCdCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateNtnCd(Map<String, Object> requestMap) {
		int result = admNtnCdMapper.updateNtnCd(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteNtnCd(Map<String, Object> requestMap) {
		return admNtnCdMapper.deleteNtnCd(requestMap);
	}
	
}
