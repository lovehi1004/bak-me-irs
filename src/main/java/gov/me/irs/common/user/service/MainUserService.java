package gov.me.irs.common.user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.mapper.MainUserMapper;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.crypt.util.RsaUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.jwt.util.JwtUtil;
import gov.me.irs.core.raonk.service.RaonKService;
import gov.me.irs.core.safedb.Crypto;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.mapper.UserMapper;
import gov.me.irs.core.user.repository.UserRepository;
import gov.me.irs.core.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 메인 > 사용자 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class MainUserService {
	
	private final UserMapper userMapper;
	
	private final UserAplyService userAplyService;
	
	private final Crypto crypto;
	
	private final RaonKService raonKService;
	
	private final MainUserMapper mainUserMapper;
	
	private final UserRepository userRepository;
	
	private final UserService userService;
	
	private final PasswordEncoder passwordEncoder;
	
	private final HttpSession session;
	
	/* 프로파일 */
    String profiles = System.getProperty("spring.profiles.active");
	
	/**
	 * 메인 > 사용자 > 회원가입 > 로그인 아이디 중복 검색 체크
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectLoginIdCnt(Map<String, Object> requestMap) {
		return userMapper.selectLoginIdCnt(requestMap);
	}
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청
	 * 
	 * @param dsInstInfo
	 * @param dsUserInfo
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertAply(Map<String, Object> dsInstInfo
			, Map<String, Object> dsUserInfo
			, Map<String, Object> dsInstInfoFile
			, List<Map<String, Object>> dsBrdocFlmnoFile
			) throws Exception {
		
		log.debug("[메인 > 사용자 > 회원가입 > 회원가입신청 START]");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 등록구분 확인 - {1 : 검색(신규사용자), 2 : 신규등록(신규가입)} ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String registType = (String) dsInstInfo.get("registType");		/* 화면에서 넘어온 등록구분 값 */
		
		String aplyRegClCd = StringUtils.EMPTY;							/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0001";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		if("1".equals(registType)) {
			aplyRegClCd = "ARC0002";					//신규사용자 ▶ [사용자생성]
		} else {
			aplyRegClCd = "ARC0001";					//신규가입 ▶ [업체생성 + 사용자생성]
		}
		
		String instMgno = StringUtils.EMPTY;							/* 기관관리번호 */
		String upInstMgno = StringUtils.EMPTY;							/* 상위기관관리번호 */
		String aplyMgno = StringUtils.EMPTY;							/* 신청관리번호 */
		String instClsfCd = (String) dsInstInfo.get("instClsfCd");		/* 기관분류(사업체분류) */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자ID 채번하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String userId = userAplyService.selectUserId();					/* 사용자ID */
		
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 업체정보 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//신규가입 - 업체정보 생성하기
		if("ARC0001".equals(aplyRegClCd)) {
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3-1. 기관관리번호 채번하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			instMgno = userAplyService.selectInstMgno(dsInstInfo);
			
			dsInstInfo.put("instMgno", instMgno);
			
			String brdocFlmno = (String) dsInstInfoFile.get("brdocFlmno");		/* 사업자등록증 */
			dsInstInfo.put("brdocFlmno", brdocFlmno);
			
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3-2. 상위기관 설정하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			//위탁기관은 상위기관 검색 필수이므로 상위기관관리번호가 넘어오고, 나머지는 해당기관관리번호와 상위기관관리번호를 동일하게 설정한다.
			if(!"ICC0004".equals(instClsfCd)) {
				upInstMgno = instMgno;											//상위기관관리번호 설정	
				dsInstInfo.put("upInstMgno", upInstMgno);
			} else {
				upInstMgno = (String) dsInstInfo.get("upInstMgno");				//상위기관관리번호 설정
			}
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3-3. 미승인 상태 업체정보 생성하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			dsInstInfo.put("sUserId", userId);
			userAplyService.insertInstAply(dsInstInfo);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3-4. 기관설정상세 정보 생성하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			userAplyService.insertInstStngDtl(dsInstInfo);
			
		// 신규사용자는 기관관리번호가 존재함 
		} else {
			instMgno = (String) dsInstInfo.get("instMgno");
			upInstMgno = (String) dsInstInfo.get("upInstMgno");				//상위기관관리번호 설정
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 미승인 상태 사용자정보 생성하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String rsaPassword = (String) dsUserInfo.get(Const.CORE.KEY_USER_PASSWORD);
		String encptPswd = StringUtils.EMPTY;
		try {
			encptPswd = crypto.encryptRsaToSHA(rsaPassword);
		} catch (Exception e) {
			throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
		}
		
		dsUserInfo.put("encptPswd", encptPswd);			//비밀번호 암호화
		
		dsUserInfo.put("userId", userId);
		dsUserInfo.put("instMgno", instMgno);
		dsUserInfo.put("upInstMgno", upInstMgno);
		dsUserInfo.put("sUserId", userId);
		userAplyService.insertUserAply(dsUserInfo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 신청정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> aplyMap = new HashMap<String, Object>();
		aplyMap.put("aplyRegClCd", aplyRegClCd);
		aplyMap.put("aplyPrcsTypeCd", aplyPrcsTypeCd);
		aplyMap.put("sUserId", userId);
		aplyMgno = userAplyService.insertAply(aplyMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 신청상세정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		aplyMap.put("aplyMgno", aplyMgno);
		aplyMap.put("userId", userId);
		aplyMap.put("instMgno", instMgno);
		userAplyService.insertAplyDtl(aplyMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 회원가입신청시 비승인사용자 권한정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String lgnId = (String) dsUserInfo.get("lgnId");
		String userClCd = (String) dsUserInfo.get("userClCd");
		userAplyService.createUnapprovedUserRole(userId, lgnId, encptPswd, userClCd, userId);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 8. SINGLE 파일정보 최종저장처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		//신규가입 - 사업자등록증 최종저장처리 하기
		if("ARC0001".equals(aplyRegClCd)) {
			/* SINGLE 파일정보 최종저장처리 */
			dsInstInfoFile.put("fileGroupMgno", dsInstInfoFile.get("brdocFlmno"));			//사업자등록증
			raonKService.saveFile(dsInstInfoFile, dsBrdocFlmnoFile);
		}
		
	}
	
	/**
	 * 메인 > 사용자 > 아이디/비밀번호 찾기
	 * 
	 * @param dsSrh
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> find(Map<String, Object> dsSrh) throws Exception {
		
		Map<String, Object> resultMap = mainUserMapper.selectFindUser(dsSrh);
		
		/* 처리결과 */
		String resultType = (String) resultMap.get("resultType");
		
		/* 비밀번호찾기 라면 */
		if("2".equals(resultType)) {
			String userId = (String) resultMap.get("userId");			/* 비밀번호찾기로 찾게된 사용자ID */
			
			/* 사용자ID가 존재한다면 비밀번호 초기화 해주기 */
			if(!ObjectUtils.isEmpty(userId)) {
				
				/* 임시 비밀번호 생성 */
				String initPswd = JwtUtil.getTemporaryPassword();
				String newEncptPswd = crypto.encryptSHA(initPswd);
				
				/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. JWT 비밀번호 초기화 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
				TableUser tableUser = userRepository.findByUserId(userId);
				
				tableUser.setEncptPswd(newEncptPswd);
				
				/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자기본 비밀번호 초기화 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
				Map<String, Object> dsUserInfo = new HashMap<String, Object>();
				dsUserInfo.put("userId", userId);
				dsUserInfo.put("type", "encptPswd");					/* 비밀번호 수정하기 */
				dsUserInfo.put("encptPswd", newEncptPswd);
				dsUserInfo.put("sUserId",  userId);
				
				userMapper.updateUser(dsUserInfo);
				
				/* 초기화된 비밀번호로 결과 설정 */
				resultMap.put("result", initPswd);
				
				if(!ObjectUtils.isEmpty(profiles) && Const.PROFILES.PRD.equals(profiles)) {
					// sms call
				}
			}			
		}
		else {
			
			if(!ObjectUtils.isEmpty(profiles) && Const.PROFILES.PRD.equals(profiles)) {
				// sms call
			}
		}
		
		/* 화면으로 전송시 비밀번호 제거하고 전송 */
		resultMap.remove("result");
				
		return resultMap;
		
	}
	
	/**
	 * Top > 정보수정
	 * 
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectMyUserInfo() throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		Map<String, Object> parameterMap = new HashMap<String, Object>();
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		parameterMap.put("userId", sUserId);
		
		Map<String, Object> dsInstInfo = userAplyService.selectInst(parameterMap);
		Map<String, Object> dsUserInfo = userAplyService.selectUser(parameterMap);
		
		Map<String, Object> dsSaveInfo = new HashMap<String, Object>();
		dsSaveInfo.put("lgnId"          , String.valueOf(dsUserInfo.get("lgnId")));
		dsSaveInfo.put("rsaPassword"    , StringUtils.EMPTY);
		dsSaveInfo.put("flnm"           , String.valueOf(dsUserInfo.get("flnm")));
		dsSaveInfo.put("userClCd"       , String.valueOf(dsUserInfo.get("userClCd")));
		dsSaveInfo.put("deptNm"         , String.valueOf(dsUserInfo.get("deptNm")));
		dsSaveInfo.put("jbpsNm"         , String.valueOf(dsUserInfo.get("jbpsNm")));
		dsSaveInfo.put("telDdd"         , String.valueOf(dsUserInfo.get("telDdd")));
		dsSaveInfo.put("telTlpno"       , String.valueOf(dsUserInfo.get("telTlpno")));
		dsSaveInfo.put("telPhino"       , String.valueOf(dsUserInfo.get("telPhino")));
		dsSaveInfo.put("hdponDdd"       , String.valueOf(dsUserInfo.get("hdponDdd")));
		dsSaveInfo.put("hdponTlpno"     , String.valueOf(dsUserInfo.get("hdponTlpno")));
		dsSaveInfo.put("hdponPhino"     , String.valueOf(dsUserInfo.get("hdponPhino")));
		dsSaveInfo.put("faxDdd"         , String.valueOf(dsUserInfo.get("faxDdd")));
		dsSaveInfo.put("faxTlpno"       , String.valueOf(dsUserInfo.get("faxTlpno")));
		dsSaveInfo.put("faxPhino"       , String.valueOf(dsUserInfo.get("faxPhino")));
		dsSaveInfo.put("emlId"          , String.valueOf(dsUserInfo.get("emlId")));
		dsSaveInfo.put("emlAddr"        , String.valueOf(dsUserInfo.get("emlAddr")));
		dsSaveInfo.put("rsaCurrentPswd" , StringUtils.EMPTY);
		dsSaveInfo.put("acntSttsClCd"   , String.valueOf(dsUserInfo.get("acntSttsClCd")));
		
		resultMap.put("dsInstInfo", dsInstInfo);			/* 사업체정보 */
		resultMap.put("dsSaveInfo", dsSaveInfo);			/* 사용자정보 */

		return resultMap;
	}
	
	/**
	 * Top > 정보수정 - 사용자정보 정보수정하기
	 * 
	 * @param dsInstInfo
	 * @param dsSaveInfo
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean updateMyUserInfo(Map<String, Object> dsInstInfo
			, Map<String, Object> dsSaveInfo) throws Exception {
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		dsSaveInfo.put("userId", sUserId);
		
		String aplyRegClCd = "ARC0004";									/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0005";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		
		String instMgno = (String) dsInstInfo.get("instMgno");			/* 기관관리번호 */
		
		List<Map<String, Object>> chgList = new ArrayList<Map<String, Object>>();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 현재 비밀번호 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userService.selectUser(sUserId);
		
		String dbPswd = (String) userMap.get("pswd");
		
		String rsaCurrentPswd = (String) dsSaveInfo.get("rsaCurrentPswd");	/* 현재 비밀번호 */
		String password = StringUtils.EMPTY;
		
		try {
			password = RsaUtil.decryptRsa(session, rsaCurrentPswd);
		} catch (Exception e) {
			throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
		}
		
		// 비번 불일치
		if (!passwordEncoder.matches(password, dbPswd)) {
			log.debug("[비번 불일치]");
			return false;
		} else {
			log.debug("[비번 일치]");
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 비밀번호 변경여부 확인하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		boolean isChangedPassword = false;
		String beforePassword = StringUtils.EMPTY;
		String afterPassword = StringUtils.EMPTY;
		
		String rsaPassword = (String) dsSaveInfo.get(Const.CORE.KEY_USER_PASSWORD);
		
		/* 비밀번호를 변경하려 하는가? */
		if(!ObjectUtils.isEmpty(rsaPassword)) {
			isChangedPassword = true;
			beforePassword = dbPswd;
			
			try {
				afterPassword = crypto.encryptRsaToSHA(rsaPassword);		//새 비밀번호 암호화
			} catch (Exception e) {
				throw new SignException(JwtAuthEnum.RSA_INVALID.getCode(), e);
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 사용자정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		Map<String, Object> userUpdateMap = new HashMap<String, Object>();
		userUpdateMap.put("userId", sUserId);
		
		Map<String, Object> orgDsUserInfo = userAplyService.selectUser(dsSaveInfo);
		
		/* 비밀번호를 변경하려 하는가? */
		if(isChangedPassword) {
			/* 새 비밀번호 */
			this.setUserChgAplyArtclMap(chgList, "CAC0023", beforePassword, afterPassword);
			userUpdateMap.put("afterPassword", afterPassword);									/* 사용자정보 수정항목 설정 */
		}
		
		/* 변경전 정보 */
		String beforeDeptNm = String.valueOf(orgDsUserInfo.get("deptNm"));                      /* 부서명 */
		String beforeJbpsNm = String.valueOf(orgDsUserInfo.get("jbpsNm"));                      /* 직위 */
		String beforeHdponDdd = String.valueOf(orgDsUserInfo.get("hdponDdd"));                  /* 핸드폰지역번호 */
		String beforeHdponTlpno = String.valueOf(orgDsUserInfo.get("hdponTlpno"));              /* 핸드폰국번호 */
		String beforeHdponPhino = String.valueOf(orgDsUserInfo.get("hdponPhino"));              /* 핸드폰개별번호 */
		String beforeTelDdd = String.valueOf(orgDsUserInfo.get("telDdd"));                      /* 전화지역번호 */
		String beforeTelTlpno = String.valueOf(orgDsUserInfo.get("telTlpno"));                  /* 전화국번호 */
		String beforeTelPhino = String.valueOf(orgDsUserInfo.get("telPhino"));                  /* 전화개별번호 */
		String beforeFaxDdd = String.valueOf(orgDsUserInfo.get("faxDdd"));                      /* 팩스지역번호 */
		String beforeFaxTlpno = String.valueOf(orgDsUserInfo.get("faxTlpno"));                  /* 팩스국번호 */
		String beforeFaxPhino = String.valueOf(orgDsUserInfo.get("faxPhino"));                  /* 팩스개별번호 */
		String beforeEmlId = String.valueOf(orgDsUserInfo.get("emlId"));                        /* 이메일ID */
		String beforeEmlAddr = String.valueOf(orgDsUserInfo.get("emlAddr"));                    /* 이메일주소 */

		/* 변경후 정보 */
		String afterDeptNm = String.valueOf(dsSaveInfo.get("deptNm"));                      /* 부서명 */
		String afterJbpsNm = String.valueOf(dsSaveInfo.get("jbpsNm"));                      /* 직위 */
		String afterHdponDdd = String.valueOf(dsSaveInfo.get("hdponDdd"));                  /* 핸드폰지역번호 */
		String afterHdponTlpno = String.valueOf(dsSaveInfo.get("hdponTlpno"));              /* 핸드폰국번호 */
		String afterHdponPhino = String.valueOf(dsSaveInfo.get("hdponPhino"));              /* 핸드폰개별번호 */
		String afterTelDdd = String.valueOf(dsSaveInfo.get("telDdd"));                      /* 전화지역번호 */
		String afterTelTlpno = String.valueOf(dsSaveInfo.get("telTlpno"));                  /* 전화국번호 */
		String afterTelPhino = String.valueOf(dsSaveInfo.get("telPhino"));                  /* 전화개별번호 */
		String afterFaxDdd = String.valueOf(dsSaveInfo.get("faxDdd"));                      /* 팩스지역번호 */
		String afterFaxTlpno = String.valueOf(dsSaveInfo.get("faxTlpno"));                  /* 팩스국번호 */
		String afterFaxPhino = String.valueOf(dsSaveInfo.get("faxPhino"));                  /* 팩스개별번호 */
		String afterEmlId = String.valueOf(dsSaveInfo.get("emlId"));                        /* 이메일ID */
		String afterEmlAddr = String.valueOf(dsSaveInfo.get("emlAddr"));                    /* 이메일주소 */
		
		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 로그확인 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		
		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ BEFORE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		
		/* 변경전 정보 */
		log.debug("[beforeDeptNm][{}]", beforeDeptNm);
		log.debug("[beforeJbpsNm][{}]", beforeJbpsNm);
		log.debug("[beforeHdponDdd][{}]", beforeHdponDdd);
		log.debug("[beforeHdponTlpno][{}]", beforeHdponTlpno);
		log.debug("[beforeHdponPhino][{}]", beforeHdponPhino);
		log.debug("[beforeTelDdd][{}]", beforeTelDdd);
		log.debug("[beforeTelTlpno][{}]", beforeTelTlpno);
		log.debug("[beforeTelPhino][{}]", beforeTelPhino);
		log.debug("[beforeFaxDdd][{}]", beforeFaxDdd);
		log.debug("[beforeFaxTlpno][{}]", beforeFaxTlpno);
		log.debug("[beforeFaxPhino][{}]", beforeFaxPhino);
		log.debug("[beforeEmlId][{}]", beforeEmlId);
		log.debug("[beforeEmlAddr][{}]", beforeEmlAddr);
		
		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ AFTER ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");

		log.debug("[afterDeptNm][{}]", afterDeptNm);
		log.debug("[afterJbpsNm][{}]", afterJbpsNm);
		log.debug("[afterHdponDdd][{}]", afterHdponDdd);
		log.debug("[afterHdponTlpno][{}]", afterHdponTlpno);
		log.debug("[afterHdponPhino][{}]", afterHdponPhino);
		log.debug("[afterTelDdd][{}]", afterTelDdd);
		log.debug("[afterTelTlpno][{}]", afterTelTlpno);
		log.debug("[afterTelPhino][{}]", afterTelPhino);
		log.debug("[afterFaxDdd][{}]", afterFaxDdd);
		log.debug("[afterFaxTlpno][{}]", afterFaxTlpno);
		log.debug("[afterFaxPhino][{}]", afterFaxPhino);
		log.debug("[afterEmlId][{}]", afterEmlId);
		log.debug("[afterEmlAddr][{}]", afterEmlAddr);

		log.debug("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 로그확인 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 변경항목 설정하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		if(!beforeDeptNm.equals(afterDeptNm)) {
			/* 부서명 */
			this.setUserChgAplyArtclMap(chgList, "CAC0024", beforeDeptNm, afterDeptNm);
			userUpdateMap.put("afterDeptNm", afterDeptNm);									/* 사용자정보 수정항목 설정 */
		}
		
		if(!beforeJbpsNm.equals(afterJbpsNm)) {
			/* 직위 */
			this.setUserChgAplyArtclMap(chgList, "CAC0025", beforeJbpsNm, afterJbpsNm);
			userUpdateMap.put("afterJbpsNm", afterJbpsNm);									/* 사용자정보 수정항목 설정 */
		}
		
		if(!(beforeHdponDdd.equals(afterHdponDdd)
				&& beforeHdponTlpno.equals(afterHdponTlpno)
				&& beforeHdponPhino.equals(afterHdponPhino))) {
			/* 핸드폰번호 */
			this.setUserChgAplyArtclMap(chgList, "CAC0021"
					, beforeHdponDdd + "-" + beforeHdponTlpno + "-" + beforeHdponPhino
					, afterHdponDdd + "-" + afterHdponTlpno + "-" + afterHdponPhino);
			
			userUpdateMap.put("afterHdponDdd", afterHdponDdd);										/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterHdponTlpno", afterHdponTlpno);									/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterHdponPhino", afterHdponPhino);									/* 사용자정보 수정항목 설정 */
		}
		
		if(!(beforeTelDdd.equals(afterTelDdd)
				&& beforeTelTlpno.equals(afterTelTlpno)
				&& beforeTelPhino.equals(afterTelPhino))) {
			/* 전화번호 */
			this.setUserChgAplyArtclMap(chgList, "CAC0026"
					, beforeTelDdd + "-" + beforeTelTlpno + "-" + beforeTelPhino
					, afterTelDdd + "-" + afterTelTlpno + "-" + afterTelPhino);
			
			userUpdateMap.put("afterTelDdd", afterTelDdd);										/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterTelTlpno", afterTelTlpno);									/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterTelPhino", afterTelPhino);									/* 사용자정보 수정항목 설정 */

		}
		
		if(!(beforeFaxDdd.equals(afterFaxDdd)
				&& beforeFaxTlpno.equals(afterFaxTlpno)
				&& beforeFaxPhino.equals(afterFaxPhino))) {
			/* 팩스번호 */
			this.setUserChgAplyArtclMap(chgList, "CAC0027"
					, beforeFaxDdd + "-" + beforeFaxTlpno + "-" + beforeFaxPhino
					, afterFaxDdd + "-" + afterFaxTlpno + "-" + afterFaxPhino);
			
			userUpdateMap.put("afterFaxDdd", afterFaxDdd);										/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterFaxTlpno", afterFaxTlpno);									/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterFaxPhino", afterFaxPhino);									/* 사용자정보 수정항목 설정 */
			
		}
		
		if(!(beforeEmlId.equals(afterEmlId)
				&& beforeEmlAddr.equals(afterEmlAddr))) {
			/* 이메일주소 */
			this.setUserChgAplyArtclMap(chgList, "CAC0028"
					, beforeEmlId + "@" + beforeEmlAddr
					, afterEmlId + "@" + afterEmlAddr);
			
			userUpdateMap.put("afterEmlId", afterEmlId);										/* 사용자정보 수정항목 설정 */
			userUpdateMap.put("afterEmlAddr", afterEmlAddr);									/* 사용자정보 수정항목 설정 */
			
		}
		
		/* 변경신청항목정보 생성 */
		userAplyService.insertChgAply(sUserId, instMgno, aplyRegClCd, aplyPrcsTypeCd, chgList);
		
		/* 사용자정보 변경 */
		userService.updateMyUserInfo(userUpdateMap);
		
		/* 비밀번호를 변경하려 하는가? */
		if(isChangedPassword) {
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. JWT 비밀번호 수정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			TableUser tableUser = userRepository.findByUserId(sUserId);
			tableUser.setEncptPswd(afterPassword);
		}
		
		return true;
		
	}
	
	/**
	 * 변경신청항목정보 추가하기
	 * 
	 * @param chgList
	 * @param chgClCd
	 * @param bchgCn
	 * @param achgCn
	 * @param fileYn
	 * @param fileTypeClCd
	 * @throws Exception
	 */
	private void setUserChgAplyArtclMap(List<Map<String, Object>> chgList
			, String chgArtclCd
			, String bchgCn
			, String achgCn
			) throws Exception {
		
		Map<String, Object> chgMap = new HashMap<String, Object>();
		chgMap.put("chgClCd", "CCC0002");
		chgMap.put("chgArtclCd", chgArtclCd);
		chgMap.put("bchgCn", bchgCn);
		chgMap.put("achgCn", achgCn);
		chgMap.put("fileYn", Const.CHARACTER.N);
		chgMap.put("fileTypeClCd", StringUtils.EMPTY);
		
		chgList.add(chgMap);
	}
}
