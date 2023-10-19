package gov.me.irs.common.install.service;

import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.install.mapper.InstallMapper;
import lombok.RequiredArgsConstructor;

/**
 * 초기데이터 생성 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class InstallService {
	
	private final InstallMapper installMapper;
	
	/**
	 * 초기데이터 생성
	 * 
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> checkInstall() {
		return installMapper.checkInstall();
	}
	
	@Transactional(rollbackFor = Exception.class)
	public void insertData() {
		installMapper.insertMenuData();
		installMapper.insertRoleData();
		installMapper.insertMenuRoleData();
		installMapper.insertUserData();
		installMapper.insertUserRoleData();
		
		installMapper.insert_COM_NTN_CD_BSC_Data();
	}
	
}
