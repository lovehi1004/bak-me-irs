package gov.me.irs.core.user.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.mapper.UserMapper;
import gov.me.irs.core.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

/**
 * 시스템 공통 사용자 인증 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	
	private final UserMapper userMapper;
	
	/**
	 * 권한 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectRoleList(Map<String, Object> requestMap) {
		return userMapper.selectRoleList(requestMap);
	}
	
	/**
	 * 사용자 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUser(String userId) {
		return userMapper.selectUser(userId);
	}
	
	/**
	 * 사용자 권한정보 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteUserRole(Map<String, Object> requestMap) {
		return userMapper.deleteUserRole(requestMap);
	}
	
	/**
	 * 사용자 권한정보 생성
	 * 
	 * @param vo
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertUserRole(Map<String, Object> requestMap) {
		return userMapper.insertUserRole(requestMap);
	}
	
	/**
	 * 사용자 권한정보 변경
	 * 
	 * @param vo
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateUserRole(Map<String, Object> requestMap) {
		return userMapper.updateUserRole(requestMap);
	}
	
	/**
	 * 사용자 권한정보 생성 - JWT
	 * 
	 * @param vo
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public TableUser createNewUser(CreateUserVo vo) {
		TableUser tableUser = TableUser.builder()
				.lgnId(vo.getLgnId())
				.userId(vo.getUserId())
				.encptPswd(vo.getEncptPswd())
				.userClCd(vo.getUserClCdEnum())
				.roles(vo.getRoles()) // 최초 가입시 USER 로 설정
				.build();
		
		userRepository.save(tableUser);
		return tableUser;
	}
	
	/**
	 * 사용자 권한정보 삭제 - JWT
	 * 
	 * @param lgnId
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public long deleteUser(String lgnId) {
		return userRepository.deleteByLgnId(lgnId);
	}
	
}
