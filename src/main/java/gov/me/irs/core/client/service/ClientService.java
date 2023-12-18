package gov.me.irs.core.client.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.client.mapper.ClientMapper;
import gov.me.irs.core.client.vo.ClientVo;
import gov.me.irs.core.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사용자 접속정보 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ClientService {
	
	private final ClientMapper clientMapper;
	
	private final UserMapper userMapper;
    
	/**
	 * 사용자 접속정보 저장
	 * 
	 * @param vo
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveClientDtl(HttpServletRequest request, String lgnScsYn) {
		
		final ClientVo vo = new ClientVo(request, lgnScsYn);
		
		int result = -1;
		try {
			result = clientMapper.insertClientDtl(vo);
			if(result == Const.NUMERIC.ZERO) {
				log.error("사용자 접속정보 저장 실패");
			}
			
			/* 사용자 로그인실패건수 저장 */
			userMapper.updateUserLgnFailCnt(vo);
			
			
		} catch (Exception e) {
			log.error("[사용자 접속정보 저장시 오류발생][{}]", e);
		}
		
		return result == 1 ? true : false;
	}
	
}
