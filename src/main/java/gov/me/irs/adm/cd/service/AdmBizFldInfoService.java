package gov.me.irs.adm.cd.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.cd.mapper.AdmBizFldInfoMapper;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class AdmBizFldInfoService {
	
	private final AdmBizFldInfoMapper admBizFldInfoMapper;
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectBizFldInfoListCnt(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizFldInfoListCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBizFldInfoList(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizFldInfoList(requestMap);
	}

	
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBizSFldCnt(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizSFldCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertBizFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.insertBizFldInfo(requestMap);
		return result;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateBizFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.updateBizFldInfo(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteBizFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.deleteBizFldInfo(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBizFldInfoDetail(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizFldInfoDetail(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBizFldInfoDetailList(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizFldInfoDetailList(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBizSubFldInfoDetail(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizSubFldInfoDetail(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBizSubFldCnt(Map<String, Object> requestMap) {
		return admBizFldInfoMapper.selectBizSubFldCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertBizSubFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.insertBizSubFldInfo(requestMap);
		
		/* 신규생성 기준으로 정렬처리 */
		requestMap.put("sortType", "INSERT");
		
		admBizFldInfoMapper.updateBizFldCdSortSeqo(requestMap);
		
		return result;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateBizSubFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.updateBizSubFldInfo(requestMap);
		
		/* 신규생성 기준으로 정렬처리 */
		requestMap.put("sortType", "UPDATE");
		
		admBizFldInfoMapper.updateBizFldCdSortSeqo(requestMap);
		
		return result;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteBizSubFldInfo(Map<String, Object> requestMap) {
		int result = admBizFldInfoMapper.deleteBizSubFldInfo(requestMap);
		return result;
	}
	
}
