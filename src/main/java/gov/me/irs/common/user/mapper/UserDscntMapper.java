package gov.me.irs.common.user.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 사용자 내역 Mapper
 * 
 * @author 조성현
 *
 */
@Mapper
public interface UserDscntMapper {
	/**
	 * 사용자활동내역 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserActvDsctn(Map<String, Object> requestMap);
	
	/**
	 * 개인정보취급자내역 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserPrvcDsctn(Map<String, Object> requestMap);
	
}