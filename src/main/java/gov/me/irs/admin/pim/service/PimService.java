package gov.me.irs.admin.pim.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.pim.mapper.PimMapper;
import lombok.RequiredArgsConstructor;

/**
 * 개인정보취급이력 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class PimService {
	
	private final PimMapper pimMapper;
	
	/**
	 * 개인정보취급이력 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectPrivacyInquiryHistoryListCnt(Map<String, Object> requestMap) {
		return pimMapper.selectPrivacyInquiryHistoryListCnt(requestMap);
	}

	/**
	 * 개인정보취급이력 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectPrivacyInquiryHistoryList(Map<String, Object> requestMap) {
		return pimMapper.selectPrivacyInquiryHistoryList(requestMap);
	}
}
