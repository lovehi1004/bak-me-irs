package gov.me.irs.core.client.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.client.mapper.ClientMapper;
import gov.me.irs.core.client.vo.ClientVo;
import gov.me.irs.core.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;

/**
 * 사용자 접속정보 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
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
		
		int result = clientMapper.insertClientDtl(vo);
		
		/* 사용자 로그인실패건수 저장 */
		userMapper.updateUserLgnFailCnt(vo);
		
		return result == 1 ? true : false;
	}
	
}
