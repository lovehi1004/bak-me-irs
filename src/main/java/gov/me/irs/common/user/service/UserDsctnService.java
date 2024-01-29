package gov.me.irs.common.user.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.user.mapper.UserDscntMapper;
import gov.me.irs.common.util.ClientUtil;
import gov.me.irs.core.config.util.UserSession;
import lombok.RequiredArgsConstructor;

/**
 * 사용자 내역 서비스  
 * 
 * @author 조성
 *
 */
@Service
@RequiredArgsConstructor
public class UserDsctnService {
	
	private final UserDscntMapper userDscntMapper;
	
	private final HttpServletRequest request;
	
	/**
	 * 사용자 내역 추가
	 * 
	 * @param menuMgno - 메뉴관리번호
	 * @param inqClCd - 조회구분코드
	 * @param inqCn - 조회사유
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUserDsctn(String menuMgno, String inqClCd, String inqCn) throws Exception {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("sUserId", UserSession.getUserId());
		map.put("ipAddr", ClientUtil.getIp(request));
		map.put("menuMgno", menuMgno);
		map.put("inqClCd", inqClCd);
		map.put("inqCn", inqCn);
		
		/* 1. 사용자 활동내역 생성 */
		userDscntMapper.insertUserActvDsctn(map);
		
		/* 2. 사용자 개인정보취급자 생성 */
		userDscntMapper.insertUserPrvcDsctn(map);
		
	}
}
 