package gov.me.irs.adm.user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.user.mapper.AdmUserMngMapper;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.service.UserAplyService;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.jwt.util.JwtUtil;
import gov.me.irs.core.safedb.Crypto;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.repository.UserRepository;
import gov.me.irs.core.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AdmUserMngService {
	
	private final AdmUserMngMapper admUserMngMapper;
	
	private final UserService userService;
	
	private final UserRepository userRepository;
	
	private final UserAplyService userAplyService;
	
	private final Crypto crypto;
	
	/* 프로파일 */
    String profiles = System.getProperty("spring.profiles.active");
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectUserMngListCnt(Map<String, Object> requestMap) {
		return admUserMngMapper.selectUserMngListCnt(requestMap);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectUserMngList(Map<String, Object> requestMap) {
		return admUserMngMapper.selectUserMngList(requestMap);
	}

	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 상세조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUserMngDetail(Map<String, Object> dsCurInfo) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		Map<String, Object> dsInstInfo = userAplyService.selectInst(dsCurInfo);
		Map<String, Object> dsUserInfo = userAplyService.selectUser(dsCurInfo);
		
		/* 사업자등록증 파일정보만 데이터셋 분리 */
		Map<String, Object> dsInstInfoFile =  new HashMap<String, Object>();
		dsInstInfoFile.put("brdocFlmno", dsInstInfo.get("brdocFlmno"));
		
		resultMap.put("dsInstInfo", dsInstInfo);			/* 사업체정보 */
		resultMap.put("dsUserInfo", dsUserInfo);			/* 사용자정보 */
		resultMap.put("dsInstInfoFile", dsInstInfoFile);	/* 사업자등록증 파일정보 */
		
		return resultMap;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 사용자등록
	 * 
	 * @param dsInstInfo - 사업체정보
	 * @param dsUserInfo - 사용자정보
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUser(Map<String, Object> dsInstInfo
			, Map<String, Object> dsUserInfo
			) throws Exception {
		
		log.debug("[[관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 사용자등록]");
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		
		String aplyRegClCd = "ARC0005";									/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0004";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		
		String instMgno = (String) dsInstInfo.get("instMgno");			/* 기관관리번호 */
		String upInstMgno = (String) dsInstInfo.get("upInstMgno");		/* 상위기관관리번호 */
		String aplyMgno = StringUtils.EMPTY;							/* 신청관리번호 */
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 사용자ID 채번하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String userId = userAplyService.selectUserId();					/* 사용자ID */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 미승인 상태 사용자정보 생성하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
		dsUserInfo.put("sUserId", sUserId);
		userAplyService.insertUserAply(dsUserInfo);

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 신청정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> aplyMap = new HashMap<String, Object>();
		aplyMap.put("aplyRegClCd", aplyRegClCd);
		aplyMap.put("aplyPrcsTypeCd", aplyPrcsTypeCd);
		aplyMap.put("sUserId", sUserId);
		aplyMgno = userAplyService.insertAply(aplyMap);

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 신청상세정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		aplyMap.put("aplyMgno", aplyMgno);
		aplyMap.put("userId", userId);
		aplyMap.put("instMgno", instMgno);
		userAplyService.insertAplyDtl(aplyMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 승인대상 사용자정보 계정상태 승인 처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		userAplyService.updateUserStatus(dsUserInfo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 관리자직원 승인상태 권한정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		userAplyService.createUserRole(userId);
		
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 휴대폰번호 수정하기
	 * 
	 * @param requestMap
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateUserHdpon(Map<String, Object> dsUserInfo) throws Exception {
		String userId = (String) dsUserInfo.get("userId");
		
		Map<String, Object> dsInstInfo = userAplyService.selectInst(dsUserInfo);
		String instMgno = (String) dsInstInfo.get("instMgno");			/* 기관관리번호 */

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 기존값 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userAplyService.selectUser(dsUserInfo);
		String oldHdponDdd = (String) userMap.get("hdponDdd");
		String oldHdponTlpno = (String) userMap.get("hdponTlpno");
		String oldHdponPhino = (String) userMap.get("hdponPhino");
		String oldValue = oldHdponDdd + "-" + oldHdponTlpno + "-" + oldHdponPhino;
		
		String newHdponDdd = (String) dsUserInfo.get("hdponDdd");
		String newHdponTlpno = (String) dsUserInfo.get("hdponTlpno");
		String newHdponPhino = (String) dsUserInfo.get("hdponPhino");
		String newValue = newHdponDdd + "-" + newHdponTlpno + "-" + newHdponPhino;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 변경구분값 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsUserInfo.put("type", "hdpon");
		userService.updateUser(dsUserInfo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 변경신청항목정보 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String aplyRegClCd = "ARC0004";									/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0004";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		String chgClCd = "CCC0002";										/* 변경구분코드(사업체정보|사용자정보|계정담당자) */
		String chgArtclCd = "CAC0021";									/* 변경항목코드(핸드폰번호) */

		List<Map<String, Object>> chgList = new ArrayList<Map<String, Object>>();
		Map<String, Object> chgMap = new HashMap<String, Object>();
		chgMap.put("chgClCd", chgClCd);
		chgMap.put("chgArtclCd", chgArtclCd);
		chgMap.put("bchgCn", oldValue);
		chgMap.put("achgCn", newValue);
		chgMap.put("fileYn", Const.CHARACTER.N);
		chgMap.put("fileTypeClCd", StringUtils.EMPTY);
		chgList.add(chgMap);
		
		/* 변경신청항목정보 생성 */
		String aplyMgno = userAplyService.insertChgAply(userId, instMgno, aplyRegClCd, aplyPrcsTypeCd, chgList);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사용자변경신청정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsUserInfo.put("aplyMgno", aplyMgno);
		userAplyService.insertUserChgAplyDtl(dsUserInfo);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 계정상태 수정하기
	 * 
	 * @param requestMap
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void updateUserAcntStts(Map<String, Object> dsSaveInfo) throws Exception {
		String userId = (String) dsSaveInfo.get("userId");
		
		Map<String, Object> dsInstInfo = userAplyService.selectInst(dsSaveInfo);
		String instMgno = (String) dsInstInfo.get("instMgno");			/* 기관관리번호 */

		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 기존값 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userMap = userAplyService.selectUser(dsSaveInfo);
		String oldValue = (String) userMap.get("acntSttsClCd");
		String newValue = (String) dsSaveInfo.get("acntSttsClCd");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 변경구분값 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsSaveInfo.put("type", "acntSttsClCd");
		userService.updateUser(dsSaveInfo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 변경신청항목정보 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String aplyRegClCd = "ARC0004";									/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0004";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		String chgClCd = "CCC0002";										/* 변경구분코드(사업체정보|사용자정보|계정담당자) */
		String chgArtclCd = "CAC0022";									/* 변경항목코드(사용자 계정상태) */

		List<Map<String, Object>> chgList = new ArrayList<Map<String, Object>>();
		Map<String, Object> chgMap = new HashMap<String, Object>();
		chgMap.put("chgClCd", chgClCd);
		chgMap.put("chgArtclCd", chgArtclCd);
		chgMap.put("bchgCn", oldValue);
		chgMap.put("achgCn", newValue);
		chgMap.put("fileYn", Const.CHARACTER.N);
		chgMap.put("fileTypeClCd", StringUtils.EMPTY);
		chgList.add(chgMap);
		
		/* 변경신청항목정보 생성 */
		String aplyMgno = userAplyService.insertChgAply(userId, instMgno, aplyRegClCd, aplyPrcsTypeCd, chgList);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사용자변경신청정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsSaveInfo.put("aplyMgno", aplyMgno);
		userAplyService.insertUserChgAplyDtl(dsSaveInfo);
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 비밀번호 초기화
	 * 
	 * @param requestMap
	 * @return 초기화비밀번호
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> updateUserPswd(Map<String, Object> dsUserInfo) throws Exception {
		String userId = (String) dsUserInfo.get("userId");
		
		Map<String, Object> dsInstInfo = userAplyService.selectInst(dsUserInfo);
		String instMgno = (String) dsInstInfo.get("instMgno");			/* 기관관리번호 */
		
		/* 임시 비밀번호 생성 */
		String initPswd = JwtUtil.getTemporaryPassword();
		String newEncptPswd = crypto.encryptSHA(initPswd);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. JWT 비밀번호 초기화 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		TableUser tableUser = userRepository.findByUserId(userId);
		String oldEncptPswd = tableUser.getEncptPswd();					/* 기존 비밀번호 */
		
		tableUser.setEncptPswd(newEncptPswd);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자기본 비밀번호 초기화 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsUserInfo.put("type", "encptPswd");					/* 비밀번호 수정하기 */
		dsUserInfo.put("encptPswd", newEncptPswd);
		userService.updateUser(dsUserInfo);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 변경신청항목정보 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String aplyRegClCd = "ARC0004";									/* 신청등록구분코드(신규가입|신규사용자|업체변경|사용자변경|사용자등록) */
		String aplyPrcsTypeCd = "APC0004";								/* 신청처리유형코드(신청|심의반려|심의승인|관리자직권|업체직권) */
		String chgClCd = "CCC0002";										/* 변경구분코드(사업체정보|사용자정보|계정담당자) */
		String chgArtclCd = "CAC0023";									/* 변경항목코드(비밀번호 초기화) */

		List<Map<String, Object>> chgList = new ArrayList<Map<String, Object>>();
		Map<String, Object> chgMap = new HashMap<String, Object>();
		chgMap.put("chgClCd", chgClCd);
		chgMap.put("chgArtclCd", chgArtclCd);
		chgMap.put("bchgCn", oldEncptPswd);
		chgMap.put("achgCn", newEncptPswd);
		chgMap.put("fileYn", Const.CHARACTER.N);
		chgMap.put("fileTypeClCd", StringUtils.EMPTY);
		chgList.add(chgMap);
		
		/* 변경신청항목정보 생성 */
		userAplyService.insertChgAply(userId, instMgno, aplyRegClCd, aplyPrcsTypeCd, chgList);
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("initPswd", initPswd);
		resultMap.put("userId", userId);
		
		/* 처리결과 */
		String resultType = "2";
		
		if(!ObjectUtils.isEmpty(profiles) && Const.PROFILES.PRD.equals(profiles)) {
			// sms call
		}
		
		return resultMap;
	}
	
}
