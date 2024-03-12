package gov.me.irs.adm.cd.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.cd.mapper.AdmErrMsgMapper;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
public class AdmErrMsgService {
	
	private final AdmErrMsgMapper admErrMsgMapper;
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectErrMsgList(Map<String, Object> requestMap) {
		return admErrMsgMapper.selectErrMsgList(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 상세조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectErrMsgDetail(Map<String, Object> requestMap) {
		return admErrMsgMapper.selectErrMsgDetail(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertErrMsg(Map<String, Object> requestMap) {
		int result = admErrMsgMapper.insertErrMsg(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 국가코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectErrMsgCnt(Map<String, Object> requestMap) {
		return admErrMsgMapper.selectErrMsgCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateErrMsg(Map<String, Object> requestMap) {
		int result = admErrMsgMapper.updateErrMsg(requestMap);
		return result;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteErrMsg(Map<String, Object> requestMap) {
		return admErrMsgMapper.deleteErrMsg(requestMap);
	}
	
}
