package gov.me.irs.common.user.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 회원가입, 등록관리, 정보관리, 사용자관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface UserAplyMapper {
	
	/**
	 * 신청정보 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectAply(Map<String, Object> requestMap);
	
	/**
	 * [회원가입, 정보관리, 사용자관리] - 신청관리번호 채번
	 * 
	 * @return
	 */
	String selectAplyMgno();
	
	/**
	 * [회원가입, 정보관리, 사용자관리] - 신청기본정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertAply(Map<String, Object> requestMap);
	
	/**
	 * [회원가입, 정보관리, 사용자관리] - 신청상세정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertAplyDtl(Map<String, Object> requestMap);
	
	/**
	 * [회원가입-신규가입] - 기관관리번호 채번
	 * 
	 * @return
	 */
	String selectInstMgno(Map<String, Object> requestMap);
	
	/**
	 * [회원가입-신규가입] - 업체정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertInst(Map<String, Object> requestMap);
	
	/**
	 * [등록관리, 정보관리, 사용자관리] - 신청정보 심의승인|심의반려
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateAply(Map<String, Object> requestMap);
	
	/**
	 * [등록관리, 정보관리] - 신청심의정보 생성 - 심의승인|심의반려
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertAplyDlbrDtl(Map<String, Object> requestMap);
	
	/**
	 * [정보관리-업체변경신청] - 업체변경신청정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertInstChgAplyDtl(Map<String, Object> requestMap);
	
	/**
	 * [정보관리-업체변경신청, 사용자관리-사용자변경] - 사용자변경신청정보 생성
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertUserChgAplyDtl(Map<String, Object> requestMap);
	
	/**
	 * [정보관리-업체변경신청, 사용자관리-사용자변경] - 변경신청항목정보 저장
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertChgAplyArtclDtl(Map<String, Object> requestMap);
	
	/**
	 * [등록관리-심의승인] - 신규가입대상 업체상태 UPDATE
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateInstStatus(Map<String, Object> requestMap);
	
	/**
	 * [등록관리-심의승인, 사용자관리-관리자직권] - 사용자상태 UPDATE
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateUserStatus(Map<String, Object> requestMap);
	
	/**
	 * [등록관리-심의승인] - 신규가입|신규사용자 심의승인시 보유계정 발급
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateInstPsnAcnt(Map<String, Object> requestMap);
	
	/**
	 * 기관설정상세 정보 생성 [INST_STNG_DTL]
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertInstStngDtl(Map<String, Object> requestMap);
	
	/**
	 * 기관정보 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectInst(Map<String, Object> requestMap);
	
	/**
	 * 사용자정보 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectUser(Map<String, Object> requestMap);
	
	/**
	 * 심의결과조회
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectAplyDlbrDtl(Map<String, Object> requestMap);
	
	/**
	 * 변경신청항목상세 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectChgAplyArtclDtlListCnt(Map<String, Object> requestMap);
	
	/**
	 * 변경신청항목상세 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectChgAplyArtclDtlList(Map<String, Object> requestMap);
	
	/**
	 * 계정담당자 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectInstUserList(Map<String, Object> requestMap);
	
	/**
	 * 업체정보 변경신청 업체정보
	 * 
	 * @param requestMap
	 * @return
	 */
	Map<String, Object> selectInstAplydtl(Map<String, Object> requestMap);
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 업체정보 변경신청 심의승인시 업체정보 반영
	 * 
	 * @param requestMap
	 * @return
	 */
	int updateInstChgAply(Map<String, Object> requestMap);
	
}