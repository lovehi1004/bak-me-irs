package gov.me.irs.admin.cdm.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.cdm.mapper.CdmMapper;
import gov.me.irs.common.constants.Const;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 코드 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class CdmService {
	
	private final CdmMapper cdmMapper;
	
	/**
	 * 그룹코드기본 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectGroupCdListCnt(Map<String, Object> requestMap) {
		return cdmMapper.selectGroupCdListCnt(requestMap);
	}
	
	/**
	 * 그룹코드기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectGroupCdList(Map<String, Object> requestMap) {
		return cdmMapper.selectGroupCdList(requestMap);
	}
	
	/**
	 * 그룹코드기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int checkGroupCd(Map<String, Object> requestMap) {
		int result = cdmMapper.selectGroupCd(requestMap);
		return result;
	}
	
	/**
	 * 코드 등록 가능여부 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean checkCdRegCnt(Map<String, Object> requestMap) {
		String result = cdmMapper.selectCdRegYn(requestMap);
		
		/* 등록가능 */
		if(Const.CHARACTER.RESULT.Y.equals(result)) {
			log.debug("[코드 등록 가능여부][{}]", result);
			return true;
		}
		
		return false;
	}
	
	/**
	 * 그룹코드기본 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertGroupCd(Map<String, Object> requestMap) {
		int result = cdmMapper.insertGroupCd(requestMap);
		return result;
	}
	
	/**
	 * 그룹코드기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateGroupCd(Map<String, Object> requestMap) {
		int result = cdmMapper.updateGroupCd(requestMap);
		return result;
	}
	
	/**
	 * 그룹코드기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteGroupCd(Map<String, Object> requestMap) {
		int result = cdmMapper.deleteGroupCd(requestMap);
		return result;
	}
	
	/**
	 * 코드상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectCdList(Map<String, Object> requestMap) {
		return cdmMapper.selectCdList(requestMap);
	}
	
	/**
	 * 코드상세 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int checkCd(Map<String, Object> requestMap) {
		int result = cdmMapper.selectCd(requestMap);
		return result;
	}
	
	/**
	 * 코드상세 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertCd(Map<String, Object> requestMap) {
		int result = cdmMapper.insertCd(requestMap);
		return result;
	}
	
	/**
	 * 코드상세 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateCd(Map<String, Object> requestMap) {
		int result = cdmMapper.updateCd(requestMap);
		return result;
	}
	
	/**
	 * 코드상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteCd(Map<String, Object> requestMap) {
		int result = cdmMapper.deleteCd(requestMap);
		return result;
	}
	
	
}
