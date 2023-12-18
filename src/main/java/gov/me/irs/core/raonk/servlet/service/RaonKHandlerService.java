package gov.me.irs.core.raonk.servlet.service;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.raonk.mapper.RaonKMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKHandlerService - 라온K 파일업로드 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RaonKHandlerService {
	
	private final RaonKMapper raonKMapper;
	
	/**
	 * 파일 임시저장하기
	 * 
	 * @param raonKFileVo
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public RaonKFileVo saveTemporaryFile(RaonKFileVo raonKFileVo) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			sUserId = UserSession.getUserId();
		}
		
		raonKFileVo.setRgtrId(sUserId);
		
		log.debug("[파일업로드 파일상세정보 생성하기][{}]", raonKFileVo);
		
		/* 파일상세정보 생성하기 */
		raonKMapper.insertFileDtl(raonKFileVo);
		
		/* 업로드파일 조회 - 등록일자를 알수없으므로 조회하기 */
		return raonKMapper.selectFileDtl(raonKFileVo);
		
	}
	
	/**
	 * 파일정보 불러오기
	 * 
	 * @param raonKFileMap - {fileGroupMgno, fileMgno}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public RaonKFileVo selectFileDtl(Map<String, Object> raonKFileMap) throws Exception {
		
		ObjectMapper objectMapper = new ObjectMapper();
		RaonKFileVo paramVo = objectMapper.convertValue(raonKFileMap, RaonKFileVo.class);
		
		return raonKMapper.selectFileDtl(paramVo);
	}
	
	/**
	 * 다운로드수 UPDATE 처리
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean updateDwldCount(RaonKFileVo vo) throws Exception {
		int updateCount = raonKMapper.updateDwldCount(vo);
		return (updateCount == 1) ? true : false;
	}
}
