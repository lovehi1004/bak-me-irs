package gov.me.irs.common.pop.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommonPopMapper {

	int selectAgreeStiplListCnt(Map<String, Object> requestMap);
	
	List<Map<String, Object>> selectAgreeStiplList(Map<String, Object> requestMap);
	/**
	 * 협의체등록페이지 협정약정팝업 목록 총개수
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectAgreeStiplListCntCnsltngrp(Map<String, Object> requestMap);
	/**
	 * 협의체등록페이지 협정약정팝업 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectAgreeStiplListCnsltngrp(Map<String, Object> requestMap);
	
	int selectMhdlglListCnt(Map<String, Object> requestMap);
	
	List<Map<String, Object>> selectMhdlglList(Map<String, Object> requestMap);
	
	int selectUserListCnt(Map<String, Object> requestMap);
	
	List<Map<String, Object>> selectUserList(Map<String, Object> requestMap);
	
	/**
	 * 사업수행자 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectInstListCnt(Map<String, Object> requestMap);
	
	/**
	 * 사업수행자 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectInstList(Map<String, Object> requestMap);
	
	/**
	 * 개인정보취급자정보 저장
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserPrvcPrslDsctn(Map<String, Object> requestMap);
}
