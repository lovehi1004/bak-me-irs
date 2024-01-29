package gov.me.irs.common.user.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.mapper.UserAplyMapper;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.jwt.util.JwtUtil;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.RoleEnum;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
import gov.me.irs.core.user.mapper.UserMapper;
import gov.me.irs.core.user.service.CreateUserVo;
import gov.me.irs.core.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 회원가입, 등록관리, 정보관리, 사용자관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserAplyService {
	
	private final UserAplyMapper userAplyMapper;
	
	private final UserMapper userMapper;
	
	private final UserService userService;
	
	private final PasswordEncoder passwordEncoder;
	
	/**
	 * 신청정보 조회
	 * 
	 * @param requestMap - {aplyMgno}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectAply(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectAply(requestMap);
	}
	
	/**
	 * [회원가입, 정보관리, 사용자관리] - 신청정보 생성
	 * 	- 신청기본
	 * 
	 * @param requestMap - {
	 * 		aplyRegClCd : 신청등록구분코드      ▶ APLY_REG_CL_CD (신청등록구분코드)	
	 * 		, aplyPrcsTypeCd : 신청처리유형코드 ▶ APLY_PRCS_TYPE_CD (신청처리유형코드)
	 * }
	 * 
	 * @return 신청관리번호
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String insertAply(Map<String, Object> requestMap) throws Exception {
		/* 1. 신청관리번호 채번 */
		String aplyMgno = userAplyMapper.selectAplyMgno();
		requestMap.put("aplyMgno", aplyMgno);
		
		/* 2. 신청기본정보 생성 */
		userAplyMapper.insertAply(requestMap);
		
		return aplyMgno;
		
	}
	
	/**
	 * [회원가입, 정보관리, 사용자관리] - 신청상세정보 생성
	 * 	- 신청상세정보
	 * 
	 * @param requestMap - {aplyMgno, userId, instMgno}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertAplyDtl(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		if(UserSession.isAuthenticated()) {
			sUserId = UserSession.getUserId();			/* 세션정보조회 */
		}
		requestMap.put("sUserId", sUserId);
		
		/* 2. 신청상세정보 생성 */
		userAplyMapper.insertAplyDtl(requestMap);
		
	}
	
	/**
	 * [회원가입-신규가입] - 기관관리번호 채번
	 * 
	 * @param requestMap - {instClsfCd}
	 * @return 기관관리번호
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String selectInstMgno(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectInstMgno(requestMap);
	}
	
	/**
	 * [회원가입-신규가입] - 업체정보 생성
	 * 
	 * @param requestMap - {instMgno, etc...}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertInstAply(Map<String, Object> requestMap) throws Exception {
		userAplyMapper.insertInst(requestMap);
	}
	
	/**
	 * [회원가입-신규가입|신규사용자, 사용자관리-등록] - 사용자ID 채번
	 * 
	 * @param requestMap - {userId, etc...}
	 * @return 사용자ID
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String selectUserId() throws Exception {
		return userMapper.selectUserId();
	}

	/**
	 * [회원가입-신규가입|신규사용자, 사용자관리-등록] - 사용자정보 생성
	 * 
	 * @param requestMap - {userId, etc...}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUserAply(Map<String, Object> requestMap) throws Exception {
		userMapper.insertUser(requestMap);
	}
	
	/**
	 * [등록관리, 정보관리, 사용자관리] - 신청정보 심의승인|심의반려
	 * 	- 신청기본
	 * 
	 * @param requestMap - {aplyMgno, aplyPrcsTypeCd}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateAply(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		requestMap.put("sUserId", sUserId);
		userAplyMapper.updateAply(requestMap);
	}
	
	/**
	 * [등록관리, 정보관리] - 신청심의정보 생성 - 심의승인|심의반려
	 * 
	 * @param requestMap - {
	 * 		aplyMgno	
	 * 		, aplyDlbrTypeCd
	 * 		, dlbrOpnn
	 * }
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertAplyDlbrDtl(Map<String, Object> requestMap) throws Exception {

		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		requestMap.put("sUserId", sUserId);
		userAplyMapper.insertAplyDlbrDtl(requestMap);
	}
	
	/**
	 * [정보관리-업체변경신청] - 업체변경신청정보 생성
	 * 
	 * @param requestMap - {
	 * 		aplyMgno	
	 * 		, instMgno
	 * 		, bzentNm [- optional]
	 * 		, crno [- optional]
	 * 		, brno [- optional]
	 * 		, rprsvNm [- optional]
	 * 		, corpTelDdd [- optional]
	 * 		, corpTelTlpno [- optional]
	 * 		, corpTelPhino [- optional]
	 * 		, rdnmCd [- optional]
	 * 		, addr [- optional]
	 * 		, dtlAddr [- optional]
	 * 		, acntSttsClCd [- optional]
	 * 		, brdocFileMgno [- optional]
	 * }
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertInstChgAplyDtl(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		requestMap.put("sUserId", sUserId);
		
		userAplyMapper.insertInstChgAplyDtl(requestMap);
		
	}
	
	/**
	 * [정보관리-업체변경신청, 사용자관리-사용자변경] - 사용자변경신청정보 생성
	 * 
	 * @param requestMap - {
	 * 		aplyMgno	
	 * 		, userId
	 * 		, hdponDdd [- optional]
	 * 		, hdponTlpno [- optional]
	 * 		, hdponPhino [- optional]
	 * 		, userClCd [- optional]
	 * 		, acntSttsClCd [- optional]
	 * }
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUserChgAplyDtl(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		requestMap.put("sUserId", sUserId);
		
		userAplyMapper.insertUserChgAplyDtl(requestMap);
		
	}
	
	/**
	 * 변경신청항목정보 생성
	 * 
	 * @param requestMap
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String insertChgAply(String userId, String instMgno, String aplyRegClCd, String aplyPrcsTypeCd, List<Map<String, Object>> list) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 신청정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> aplyMap = new HashMap<String, Object>();
		aplyMap.put("aplyRegClCd", aplyRegClCd);
		aplyMap.put("aplyPrcsTypeCd", aplyPrcsTypeCd);
		aplyMap.put("sUserId", sUserId);
		String aplyMgno = this.insertAply(aplyMap);

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 신청상세정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		aplyMap.put("aplyMgno", aplyMgno);
		aplyMap.put("userId", userId);
		aplyMap.put("instMgno", instMgno);
		this.insertAplyDtl(aplyMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 변경신청항목정보 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		for (Map<String, Object> map : list) {
			map.put("aplyMgno", aplyMgno);
			map.put("sUserId", sUserId);
			this.insertChgAplyArtclDtl(map);
		}
		
		return aplyMgno;
	}

	
	/**
	 * [정보관리-업체변경신청, 사용자관리-사용자변경] - 변경신청항목정보 저장
	 * 
	 * @param requestMap - {
	 * 		aplyMgno	
	 * 		, chgClCd
	 * 		, chgArtclCd
	 * 		, bchgCn
	 * 		, achgCn
	 * 		, fileYn
	 * 		, fileTypeClCd
	 * }
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	private void insertChgAplyArtclDtl(Map<String, Object> requestMap) throws Exception {
		userAplyMapper.insertChgAplyArtclDtl(requestMap);
	}
	
	/**
	 * [등록관리-심의승인] - 신규가입대상 업체상태 UPDATE
	 * 	- 심의반려시에는 업체상태 조작 금지
	 * 
	 * @param requestMap - {instMgno}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateInstStatus(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* 2. 업체 심의승인|심의반려 */
		requestMap.put("sUserId", sUserId);
		userAplyMapper.updateInstStatus(requestMap);
	}
	
	/**
	 * [등록관리-심의승인, 사용자관리-관리자직권] - 사용자상태 UPDATE
	 * 	- 심의반려시에는 사용자상태 조작 금지
	 * 
	 * @param requestMap - {userId}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateUserStatus(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		requestMap.put("sUserId", sUserId);
		userAplyMapper.updateUserStatus(requestMap);
	}
	
	/**
	 * [등록관리-심의승인] - 신규가입|신규사용자 심의승인시 보유계정 발급
	 * 
	 * @param requestMap - {instMgno}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateInstPsnAcnt(String instMgno) throws Exception {
		Map<String, Object> instPsnAcntMap = this.getPrefixPsnAcntUnqno(instMgno);
		instPsnAcntMap.put("psnAcntSttsClCd", "PAC0001");				//보유계정상태구분코드 - PAC0001 : 발급

		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* 2. 신규가입시 보유계정 발급 */
		instPsnAcntMap.put("sUserId", sUserId);
		userAplyMapper.updateInstPsnAcnt(instPsnAcntMap);
	}
	
	/**
	 * 보유계정고유번호 생성 - 일련번호 제외
	 * ▶ 보유계정고유번호 체계
	 * 		1. 형식 : [1:할당여부+1:업체구분]-[2:정부기관여부+4:발급년도]-[10:일련번호]
	 * 		2. 형식예시 : ##-##YYYY-##########
	 * 		3. 자리수 : [2]-[6]-[10]
	 * 			* 할당여부 ▶ 할당 : 2, 비할당 : 3
	 * 			* 업체구분 ▶  관리운영 : 1, 그외 정부기관 : 2, 관장기관 : 3, 위탁기관 : 4, 일반사업체 : 5
	 * 			* 정부기관여부 ▶ 정부기관Y : GO, 정부기관X : CO
	 * 			* 발급년도 ▶ 2023
	 * 			* 일련번호 ▶ 0000000001
	 * 
	 * 		4-1. Ex.1 > 비할당 관장기관 정부기관Y 2023년도 최초가입
	 * 		-> 33-GO2023-0000000001
	 * 		4-2. Ex.2 > 할당 일반사업체 정부기관X 2023년도 2번째 가입
	 * 		-> 25-CO2023-0000000002
	 * 
	 * @param instMgno
	 * @return - {instMgno, prefixPsnAcntUnqno}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	private Map<String, Object> getPrefixPsnAcntUnqno(String instMgno) throws Exception {
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("instMgno", instMgno);
		
		String prefixPsnAcntUnqno = StringUtils.EMPTY;
		
		Map<String, Object> instMap = userAplyMapper.selectInst(parameterMap);
		
		String instClsfCd = (String) instMap.get("instClsfCd");			//기관분류코드
		String bzentClCd = (String) instMap.get("bzentClCd");				//사업체구분코드
		String govInstYn = (String) instMap.get("govInstYn");
		
		/* 할당대상업체 - [2]로시작 */ 
		if("BCC0001".equals(bzentClCd)) {
			prefixPsnAcntUnqno += "2";
		/* 비할당대상업체 - [3]으로 시작*/
		} else {
			prefixPsnAcntUnqno += "3";
		}
		
		prefixPsnAcntUnqno += instClsfCd.substring(6);
		prefixPsnAcntUnqno += "-";
		
		/* 정부기관여부Y - [GO]로시작 */ 
		if(Const.CHARACTER.Y.equals(govInstYn)) {
			prefixPsnAcntUnqno += "GO";
			/* 정부기관여부X - [CO]으로 시작*/
		} else {
			prefixPsnAcntUnqno += "CO";
		}
		
		prefixPsnAcntUnqno += DateUtil.getDate("yyyy");
		prefixPsnAcntUnqno += "-";
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("instMgno", instMgno);						//기관관리번호
		resultMap.put("prefixPsnAcntUnqno", prefixPsnAcntUnqno);	//보유계정고유번호
		return resultMap;
		
	}
	
	/**
	 * [사용자관리 - 사용자등록] - [관리자직권으로 사용자생성]시 권한정보 생성
	 * 
	 * @param userId - 사용자ID
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public void createUserRole(String userId) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userMapper.selectUser(userId);
		
		//신청당시 사용자구분코드 - 심의승인시 부여될 권한에 대한 기준
		String userClCd = (String) userMap.get("userClCd");
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 사용자 권한정보 생성 - 기본권한 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//기본권한
		RoleEnum roleEnum = JwtUtil.getUserClCdToRoleEnum(userClCd);
		String roleIdMgno = roleEnum.getCode();
		
		Map<String, Object> userRoleMap = new HashMap<String, Object>();
		userRoleMap.put("userId", userId);
		userRoleMap.put("roleIdMgno", roleIdMgno);
		userRoleMap.put("sUserId", sUserId);
		userMapper.insertUserRole(userRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */
		
		List<String> roles = new ArrayList<String>();
		roles.add(roleEnum.getValue());							//기본권한 - JWT
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사용자 권한정보 생성 - 추가권한 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 관장기관, 위탁기관은 전용 사업수행자권한 추가권한 */
		if(userClCdEnum == UserClCdEnum.DIRECTOR || userClCdEnum == UserClCdEnum.OUTSOURCING) {
			String additionalRoleIdMgno = StringUtils.EMPTY;
			if(userClCdEnum == UserClCdEnum.DIRECTOR) {						//RL00000009 [관장기관 사업수행자] 권한 추가 대상여부 체크
				additionalRoleIdMgno = RoleEnum.DIRECTORBIZ.getCode();
			} else if(userClCdEnum == UserClCdEnum.OUTSOURCING) {			//RL00000010 [위탁기관 사업수행자] 권한 추가 대상여부 체크
				additionalRoleIdMgno = RoleEnum.OUTSOURCINGBIZ.getCode();
			}
			
			Map<String, Object> additionalUserRoleMap = new HashMap<String, Object>();
			additionalUserRoleMap.put("userId", userId);
			additionalUserRoleMap.put("roleIdMgno", additionalRoleIdMgno);
			additionalUserRoleMap.put("sUserId", sUserId);
			userMapper.insertUserRole(additionalUserRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 사용자 권한정보 설정 - JWT - 비승인위탁기관, 비승인권한 제거 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String lgnId = (String) userMap.get("lgnId");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 사용자 권한정보 설정 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 관장기관, 위탁기관은 전용 사업수행자권한 추가권한 - JWT */
		if(userClCdEnum == UserClCdEnum.DIRECTOR) {								//RL00000009 [관장기관 사업수행자] 권한 추가 대상여부 체크
			roles.add(RoleEnum.DIRECTORBIZ.getValue());							//추가권한 - JWT
		} else if(userClCdEnum == UserClCdEnum.OUTSOURCING) {					//RL00000010 [위탁기관 사업수행자] 권한 추가 대상여부 체크
			roles.add(RoleEnum.OUTSOURCINGBIZ.getValue());						//추가권한 - JWT
		}
		
		String encptPswd = (String) userMap.get("pswd");
		
		CreateUserVo vo = CreateUserVo.builder()
				.userId(userId)
				.roleIdMgno(roleIdMgno)
				.lgnId(lgnId)
				.encptPswd(encptPswd)
				.userClCdEnum(userClCdEnum)
				.roles(roles)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 사용자 권한정보 생성 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [JWT_USER_BSC - JWT사용자기본], [JWT_USER_ROLE_BSC - JWT사용자역할기본] */
		TableUser tableUser = userService.createNewUser(vo);
		
		log.debug("[tableUser][{}][{}]", tableUser == null, tableUser);
		
	}
	
	/**
	 * [등록관리-심의승인] - [등록관리-심의승인]시 권한정보 생성
	 * 
	 * @param userId - 사용자ID
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public void createApprovedUserRole(String userId) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userMapper.selectUser(userId);
		
		//신청당시 사용자구분코드 - 심의승인시 부여될 권한에 대한 기준
		String userClCd = (String) userMap.get("userClCd");
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 사용자 권한정보 생성 - 비승인위탁기관, 비승인권한 제거 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//비승인위탁기관, 비승인권한식별자
		String unapprovedRoleIdMgno = StringUtils.EMPTY;
		
		if(userClCdEnum == UserClCdEnum.OUTSOURCING) {
			unapprovedRoleIdMgno = RoleEnum.UNAPPROVEDOUTSOURCING.getCode();			//위탁기관 전용 비승인위탁기관
		} else {
			unapprovedRoleIdMgno = RoleEnum.UNAPPROVED.getCode();						//비승인사용자
		}
		
		Map<String, Object> unapprovedUserRoleMap = new HashMap<String, Object>();
		unapprovedUserRoleMap.put("userId", userId);
		unapprovedUserRoleMap.put("roleIdMgno", unapprovedRoleIdMgno);
		unapprovedUserRoleMap.put("sUserId", sUserId);
		
		//비승인위탁기관, 비승인권한 제거
		userMapper.deleteUserRole(unapprovedUserRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사용자 권한정보 생성 - 기본권한 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//기본권한
		RoleEnum roleEnum = JwtUtil.getUserClCdToRoleEnum(userClCd);
		String roleIdMgno = roleEnum.getCode();
		
		Map<String, Object> userRoleMap = new HashMap<String, Object>();
		userRoleMap.put("userId", userId);
		userRoleMap.put("roleIdMgno", roleIdMgno);
		userRoleMap.put("sUserId", sUserId);
		userMapper.insertUserRole(userRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */
		
		List<String> roles = new ArrayList<String>();
		roles.add(roleEnum.getValue());							//기본권한 - JWT
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 사용자 권한정보 생성 - 추가권한 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 관장기관, 위탁기관은 전용 사업수행자권한 추가권한 */
		if(userClCdEnum == UserClCdEnum.DIRECTOR || userClCdEnum == UserClCdEnum.OUTSOURCING) {
			String additionalRoleIdMgno = StringUtils.EMPTY;
			if(userClCdEnum == UserClCdEnum.DIRECTOR) {						//RL00000009 [관장기관 사업수행자] 권한 추가 대상여부 체크
				additionalRoleIdMgno = RoleEnum.DIRECTORBIZ.getCode();
			} else if(userClCdEnum == UserClCdEnum.OUTSOURCING) {			//RL00000010 [위탁기관 사업수행자] 권한 추가 대상여부 체크
				additionalRoleIdMgno = RoleEnum.OUTSOURCINGBIZ.getCode();
			}
			
			Map<String, Object> additionalUserRoleMap = new HashMap<String, Object>();
			additionalUserRoleMap.put("userId", userId);
			additionalUserRoleMap.put("roleIdMgno", additionalRoleIdMgno);
			additionalUserRoleMap.put("sUserId", sUserId);
			userMapper.insertUserRole(additionalUserRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 사용자 권한정보 설정 - JWT - 비승인위탁기관, 비승인권한 제거 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String lgnId = (String) userMap.get("lgnId");
		userService.deleteUser(lgnId);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 사용자 권한정보 설정 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 관장기관, 위탁기관은 전용 사업수행자권한 추가권한 - JWT */
		if(userClCdEnum == UserClCdEnum.DIRECTOR) {								//RL00000009 [관장기관 사업수행자] 권한 추가 대상여부 체크
			roles.add(RoleEnum.DIRECTORBIZ.getValue());							//추가권한 - JWT
		} else if(userClCdEnum == UserClCdEnum.OUTSOURCING) {					//RL00000010 [위탁기관 사업수행자] 권한 추가 대상여부 체크
			roles.add(RoleEnum.OUTSOURCINGBIZ.getValue());						//추가권한 - JWT
		}
		
		String encptPswd = (String) userMap.get("pswd");
		
		CreateUserVo vo = CreateUserVo.builder()
				.userId(userId)
				.roleIdMgno(roleIdMgno)
				.lgnId(lgnId)
				.encptPswd(encptPswd)
				.userClCdEnum(userClCdEnum)
				.roles(roles)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 8. 사용자 권한정보 생성 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [JWT_USER_BSC - JWT사용자기본], [JWT_USER_ROLE_BSC - JWT사용자역할기본] */
		TableUser tableUser = userService.createNewUser(vo);
		
		log.debug("[tableUser][{}][{}]", tableUser == null, tableUser);
		
	}
	
	/**
	 * [회원가입] - 회원가입신청시 비승인사용자 권한정보 생성
	 * 
	 * @param userId - 사용자ID
	 * @param lgnId - 로그인ID
	 * @param encptPswd - 암호화비밀번호
	 * @param userClCd - 사용자구분코드 (신청당시 사용자구분코드)
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void createUnapprovedUserRole(String userId, String lgnId, String encptPswd, String userClCd, String sUserId) throws Exception {
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 비승인 권한정보 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		String roleIdMgno = StringUtils.EMPTY;
		if(userClCdEnum == UserClCdEnum.OUTSOURCING) {
			roleIdMgno = RoleEnum.UNAPPROVEDOUTSOURCING.getCode();		//비승인위탁기관 권한
		} else {
			roleIdMgno = RoleEnum.UNAPPROVED.getCode();					//비승인사용자 권한
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 비승인 사용자 권한정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [USER_ROLE_DTL - 사용자역할상세] */
		Map<String, Object> userRoleMap = new HashMap<String, Object>();
		userRoleMap.put("userId", userId);
		userRoleMap.put("roleIdMgno", roleIdMgno);
		userRoleMap.put("sUserId", sUserId);				/* 회원가입신청시 비로그인 사용자이므로 채번된 userID를 활용한다. */
		userMapper.insertUserRole(userRoleMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 8. 비승인 사용자 권한정보 설정 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		/* 위탁기관인 경우 위탁기관 전용 권한 설정 ▶ 비승인위탁기관 */
		List<String> roles = new ArrayList<String>();
		if(userClCdEnum == UserClCdEnum.OUTSOURCING) {
			roles = Arrays.asList(RoleEnum.UNAPPROVEDOUTSOURCING.getValue());		//비승인위탁기관 권한
		} else {
			roles = Arrays.asList(RoleEnum.UNAPPROVED.getValue());					//비승인사용자 권한
		}
		
		CreateUserVo vo = CreateUserVo.builder()
				.userId(userId)
				.roleIdMgno(roleIdMgno)
				.lgnId(lgnId)
				.encptPswd(encptPswd)
				.userClCdEnum(userClCdEnum)
				.roles(roles)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 9. 사용자 권한정보 생성 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [JWT_USER_BSC - JWT사용자기본], [JWT_USER_ROLE_BSC - JWT사용자역할기본] */
		TableUser tableUser = userService.createNewUser(vo);
		
		log.debug("[tableUser][{}][{}]", tableUser == null, tableUser);
	}
	
	/**
	 * [정보관리 - 계정담당자 계정구분 변경] - [일반사업체에 대해 업체직권 or 관리자직권으로 계정구분 변경시]시 권한정보 변경
	 * 
	 * @param userId - 사용자ID
	 * @param userClCd - 변경대상 권한
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void changeUserRole(String userId, String userClCd) throws Exception {
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		/* 계정관리인, 계정대표자 외 변경시도시 */
		if(userClCdEnum != UserClCdEnum.BIZADMIN && userClCdEnum != UserClCdEnum.BIZREPRESENT) {
			throw new Exception("계정구분정보 오류");
		}
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userMapper.selectUser(userId);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 사용자 권한정보 생성 - 기존권한 제거 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//기존권한식별자
		String oldRoleIdMgno = StringUtils.EMPTY;
		
		/* 계정관리인으로 변경 시도시 */
		if(userClCdEnum == UserClCdEnum.BIZADMIN) {
			oldRoleIdMgno = RoleEnum.BIZREPRESENT.getCode();			//위탁기관 전용 비승인위탁기관
			
		/* 계정대표자로 변경 시도시 */
		} else if(userClCdEnum == UserClCdEnum.BIZREPRESENT) {
			oldRoleIdMgno = RoleEnum.BIZADMIN.getCode();			//위탁기관 전용 비승인위탁기관
			
		}
		
		Map<String, Object> oldUserRoleMap = new HashMap<String, Object>();
		oldUserRoleMap.put("userId", userId);
		oldUserRoleMap.put("roleIdMgno", oldRoleIdMgno);
		oldUserRoleMap.put("sUserId", sUserId);
		
		//비승인위탁기관, 비승인권한 제거
		userMapper.deleteUserRole(oldUserRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사용자 권한정보 생성 - 계정구분별 권한 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//기본권한
		RoleEnum roleEnum = JwtUtil.getUserClCdToRoleEnum(userClCd);
		String roleIdMgno = roleEnum.getCode();
		
		Map<String, Object> userRoleMap = new HashMap<String, Object>();
		userRoleMap.put("userId", userId);
		userRoleMap.put("roleIdMgno", roleIdMgno);
		userRoleMap.put("sUserId", sUserId);
		userMapper.insertUserRole(userRoleMap);			/* [USER_ROLE_DTL - 사용자역할상세] */
		
		List<String> roles = new ArrayList<String>();
		roles.add(roleEnum.getValue());							//기본권한 - JWT
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 사용자 권한정보 설정 - JWT - 기존권한 제거 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String lgnId = (String) userMap.get("lgnId");
		userService.deleteUser(lgnId);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 사용자 권한정보 설정 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String encptPswd = (String) userMap.get("pswd");
		
		CreateUserVo vo = CreateUserVo.builder()
				.userId(userId)
				.roleIdMgno(roleIdMgno)
				.lgnId(lgnId)
				.encptPswd(encptPswd)
				.userClCdEnum(userClCdEnum)
				.roles(roles)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 8. 사용자 권한정보 생성 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [JWT_USER_BSC - JWT사용자기본], [JWT_USER_ROLE_BSC - JWT사용자역할기본] */
		TableUser tableUser = userService.createNewUser(vo);
		
		log.debug("[tableUser][{}][{}]", tableUser == null, tableUser);
		
	}
	
	/**
	 * [사용자관리] - 비밀번호 초기화
	 * 
	 * @return 초기화비밀번호
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String updateUserPswd() throws Exception {
		
		/* 임시 비밀번호 생성 */
		String initPswd = JwtUtil.getTemporaryPassword();
		return passwordEncoder.encode(initPswd);
	}
	
	/**
	 * 기관설정상세 정보 생성 [INST_STNG_DTL]
	 * 
	 * @param requestMap - {instMgno, sUserId}
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertInstStngDtl(Map<String, Object> requestMap) throws Exception {
		userAplyMapper.insertInstStngDtl(requestMap);
	}
	
	/**
	 * 기관정보 조회
	 * 
	 * @param requestMap - {instMgno}
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectInst(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectInst(requestMap);
	}
	
	/**
	 * 사용자정보 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUser(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectUser(requestMap);
	}
	
	/**
	 * 심의결과조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectAplyDlbrDtl(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectAplyDlbrDtl(requestMap);
	}
	
	/**
	 * 변경신청항목상세 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectChgAplyArtclDtlListCnt(Map<String, Object> requestMap) {
		return userAplyMapper.selectChgAplyArtclDtlListCnt(requestMap);
	}
	
	/**
	 * 변경신청항목상세 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectChgAplyArtclDtlList(Map<String, Object> requestMap) {
		return userAplyMapper.selectChgAplyArtclDtlList(requestMap);
	}
	
	/**
	 * 계정담당자 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectInstUserList(Map<String, Object> requestMap) {
		return userAplyMapper.selectInstUserList(requestMap);
	}
	
	/**
	 * 업체정보 변경신청 업체정보
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectInstAplydtl(Map<String, Object> requestMap) throws Exception {
		return userAplyMapper.selectInstAplydtl(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 업체정보 변경신청 심의승인시 업체정보 반영
	 * 
	 * @param requestMap
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateInstChgAply(Map<String, Object> requestMap) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sUserId = UserSession.getUserId();			/* 세션정보조회 */
		
		requestMap.put("sUserId", sUserId);
		userAplyMapper.updateInstChgAply(requestMap);
	}
	
}
