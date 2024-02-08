package gov.me.irs.common.pop.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.pop.mapper.CommonPopMapper;
import gov.me.irs.common.util.ClientUtil;
import gov.me.irs.core.config.util.UserSession;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommonPopService {

	private final CommonPopMapper commonPopMapper;
	
	@Transactional(rollbackFor = Exception.class)
	public int selectAgreeStiplListCnt(Map<String, Object> requestMap) {
		return commonPopMapper.selectAgreeStiplListCnt(requestMap);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectAgreeStiplList(Map<String, Object> requestMap) {		
		return commonPopMapper.selectAgreeStiplList(requestMap);
	}
	/**
	 * 협의체등록페이지 협정약정팝업 목록 총개수
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectAgreeStiplListCntCnsltngrp(Map<String, Object> requestMap) {
		return commonPopMapper.selectAgreeStiplListCntCnsltngrp(requestMap);
	}
	/**
	 * 협의체등록페이지 협정약정팝업 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectAgreeStiplListCnsltngrp(Map<String, Object> requestMap) {		
		return commonPopMapper.selectAgreeStiplListCnsltngrp(requestMap);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int selectMhdlglListCnt(Map<String, Object> requestMap) {
		return commonPopMapper.selectMhdlglListCnt(requestMap);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMhdlglList(Map<String, Object> requestMap) {
		return commonPopMapper.selectMhdlglList(requestMap);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int selectUserListCnt(Map<String, Object> requestMap) {
		return commonPopMapper.selectUserListCnt(requestMap);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectUserList(Map<String, Object> requestMap) {
		return commonPopMapper.selectUserList(requestMap);
	}
	
	/**
	 * 사업수행자 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectInstListCnt(Map<String, Object> requestMap) {
		return commonPopMapper.selectInstListCnt(requestMap);
	}
	
	/**
	 * 사업수행자 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectInstList(Map<String, Object> requestMap) {
		return commonPopMapper.selectInstList(requestMap);
	}
	
	/**
	 * 개인정보취급자정보 저장
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertUserPrvcPrslDsctn(Map<String, Object> requestMap 
			,HttpServletRequest request ) throws Exception {
		requestMap.put("sUserId", UserSession.getUserId());
		requestMap.put("sIp", ClientUtil.getIp(request));
		return commonPopMapper.insertUserPrvcPrslDsctn(requestMap);
	}
}
