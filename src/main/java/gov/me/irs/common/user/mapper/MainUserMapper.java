package gov.me.irs.common.user.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 메인 > 사용자 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface MainUserMapper {
	
	/**
	 * 메인 > 사용자 > 아이디/비밀번호 찾기
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectFindUser(Map<String, Object> requestMap);
	
}