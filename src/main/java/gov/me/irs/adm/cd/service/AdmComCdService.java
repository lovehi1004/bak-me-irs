package gov.me.irs.adm.cd.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.cd.mapper.AdmComCdMapper;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class AdmComCdService {
	
	private final AdmComCdMapper admComCdMapper;
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectComGrpCdListCnt(Map<String, Object> requestMap) {
		return admComCdMapper.selectComGrpCdListCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectComGrpCdList(Map<String, Object> requestMap) {
		return admComCdMapper.selectComGrpCdList(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectComCdList(Map<String, Object> requestMap) {
		return admComCdMapper.selectComCdList(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectComGrpCdDetail(Map<String, Object> requestMap) {
		return admComCdMapper.selectComGrpCdDetail(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateComGrpCd(Map<String, Object> requestMap) {
		int result = admComCdMapper.updateComGrpCd(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteComGrpCd(Map<String, Object> requestMap) {
		return admComCdMapper.deleteComGrpCd(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertComGrpCd(Map<String, Object> requestMap) {
		int result = admComCdMapper.insertComGrpCd(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectComGrpCdCnt(Map<String, Object> requestMap) {
		return admComCdMapper.selectComGrpCdCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectComCdCnt(Map<String, Object> requestMap) {
		return admComCdMapper.selectComCdCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectComCdDetail(Map<String, Object> requestMap) {
		return admComCdMapper.selectComCdDetail(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertComCd(Map<String, Object> requestMap) {
		int result = admComCdMapper.insertComCd(requestMap);
		
		/* 신규생성 기준으로 정렬처리 */
		requestMap.put("sortType", "INSERT");
		
		admComCdMapper.updateComCdSortSeqo(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteComCd(Map<String, Object> requestMap) {
		return admComCdMapper.deleteComCd(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateComCd(Map<String, Object> requestMap) {
		int result = admComCdMapper.updateComCd(requestMap);
		
		/* 수정 기준으로 정렬처리 */
		requestMap.put("sortType", "UPDATE");
		
		admComCdMapper.updateComCdSortSeqo(requestMap);
		return result;
	}

	
}
