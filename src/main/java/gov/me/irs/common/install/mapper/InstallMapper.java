package gov.me.irs.common.install.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 초기데이터 생성 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface InstallMapper {
	
	/**
	 * 초기데이터 생성 여부 체크
	 * 
	 * @return
	 */
	Map<String, Object> checkInstall();
	
	void insertMenuData();
	void insertRoleData();
	void insertMenuRoleData();
	void insertUserData();
	void insertUserRoleData();
	
}