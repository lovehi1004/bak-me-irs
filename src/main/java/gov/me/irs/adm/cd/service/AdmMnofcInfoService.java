package gov.me.irs.adm.cd.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.cd.mapper.AdmMnofcInfoMapper;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class AdmMnofcInfoService {
	
	private final AdmMnofcInfoMapper admMnofcInfoMapper;
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectMnofcInfoListCnt(Map<String, Object> requestMap) {
		return admMnofcInfoMapper.selectMnofcInfoListCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMnofcInfoList(Map<String, Object> requestMap) {
		return admMnofcInfoMapper.selectMnofcInfoList(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectSubMnofcInfoList(Map<String, Object> requestMap) {
		return admMnofcInfoMapper.selectSubMnofcInfoList(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateMnofcInfo(Map<String, Object> requestMap) {
		int result = admMnofcInfoMapper.updateMnofcInfo(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateSubMnofcInfo(Map<String, Object> requestMap) {
		int result = admMnofcInfoMapper.updateSubMnofcInfo(requestMap);
		return result;
	}
	
}
