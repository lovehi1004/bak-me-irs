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
	 * 메인 > 사용자 > 회원가입 > 로그인 아이디 중복 검색 체크
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectcheckLoginIdCnt(Map<String, Object> requestMap);
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청 - 사업체정보 생성 [INST_BSC]
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertInst(Map<String, Object> requestMap);
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청 - 기관설정상세 정보 생성 [INST_BSC]
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertInstStngDtl(Map<String, Object> requestMap);
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청 - 사용자신청기본정보 생성 [USER_APLY_BSC]
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserAply(Map<String, Object> requestMap);
	
}