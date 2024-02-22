package gov.me.irs.adm.user.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.adm.user.mapper.AdmUserRegMapper;
import gov.me.irs.common.user.service.UserAplyService;
import gov.me.irs.core.config.util.UserSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 등록관리 Service
 * [사용자] 사업수행자관리 > 등록관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AdmUserRegService {
	
	private final AdmUserRegMapper admUserRegMapper;
	
	private final UserAplyService userAplyService;
	
	/**
	 * [사용자] 사업수행자관리 > 등록관리 - 목록조회 총건수 조회
	 * <br>
	 * [관리자] 사업수행자관리 > 등록관리 - 목록조회 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectUserRegListCnt(Map<String, Object> requestMap) {
		return admUserRegMapper.selectUserRegListCnt(requestMap);
	}
	
	/**
	 * [사용자] 사업수행자관리 > 등록관리 - 목록조회
	 * <br>
	 * [관리자] 사업수행자관리 > 등록관리 - 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectUserRegList(Map<String, Object> requestMap) {
		return admUserRegMapper.selectUserRegList(requestMap);
	}
	
	/**
	 * [사용자] 사업수행자관리 > 등록관리 상세화면 - 회원가입신청 상세조회
	 * [관리자] 사업수행자관리 > 등록관리 상세화면 - 회원가입신청 상세조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUserRegDetail(Map<String, Object> dsCurInfo) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		Map<String, Object> dsAplyInfo = userAplyService.selectAply(dsCurInfo);
		Map<String, Object> dsInstInfo = userAplyService.selectInst(dsAplyInfo);
		Map<String, Object> dsUserInfo = userAplyService.selectUser(dsAplyInfo);
		
		/* 사업자등록증 파일정보만 데이터셋 분리 */
		Map<String, Object> dsInstInfoFile =  new HashMap<String, Object>();
		dsInstInfoFile.put("brdocFlmno", dsInstInfo.get("brdocFlmno"));
		
		resultMap.put("dsAplyInfo", dsAplyInfo);			/* 신청정보 */
		resultMap.put("dsInstInfo", dsInstInfo);			/* 사업체정보 */
		resultMap.put("dsUserInfo", dsUserInfo);			/* 사용자정보 */
		resultMap.put("dsInstInfoFile", dsInstInfoFile);	/* 사업자등록증 파일정보 */
		
		String aplyPrcsTypeCd = (String) dsAplyInfo.get("aplyPrcsTypeCd");				/* 신청처리유형코드 */
		
		Map<String, Object> dsAplyDlbrInfo =  new HashMap<String, Object>();
		
		/* [심의반려|심의승인]만 심의결과정보 조회가능 */
		if(Arrays.asList("APC0002", "APC0003").contains(aplyPrcsTypeCd)) {
			dsAplyDlbrInfo = userAplyService.selectAplyDlbrDtl(dsCurInfo);
		}
		resultMap.put("dsAplyDlbrInfo", dsAplyDlbrInfo);			/* 심의결과정보 */
		
		return resultMap;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 심의결과등록
	 * 
	 * @param dsAplyDlbrReg - 심의결과등록정보
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUserRegDlbrRslt(Map<String, Object> dsAplyDlbrReg) throws Exception {
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		dsAplyDlbrReg.put("sUserId", sUserId);
		
		//처리할 신청심의유형코드
		String aplyDlbrTypeCd = (String) dsAplyDlbrReg.get("aplyDlbrTypeCd");				/* 신청심의유형코드 - {ADT0001 : 심의반려, ADT0002 : 심의승인} */
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 신청정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> dsAplyInfo = userAplyService.selectAply(dsAplyDlbrReg);
		
		//신청당시 신청등록구분코드
		String aplyRegClCd = (String) dsAplyInfo.get("aplyRegClCd");						/* 신청등록구분코드 - {ARC0001 : 신규가입, ARC0002 : 신규사용자} */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 심의결과 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		userAplyService.insertAplyDlbrDtl(dsAplyDlbrReg);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 신청기본 심의승인|심의반려 처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 신청처리유형코드 - {APC0002 : 심의반려, APC0003 : 심의승인} */
		String aplyPrcsTypeCd = StringUtils.EMPTY;
		if("ADT0001".equals(aplyDlbrTypeCd)) {
			aplyPrcsTypeCd = "APC0002";
		} else if("ADT0002".equals(aplyDlbrTypeCd)) {
			aplyPrcsTypeCd = "APC0003";
		}
		dsAplyInfo.put("aplyPrcsTypeCd", aplyPrcsTypeCd);
		userAplyService.updateAply(dsAplyInfo);
		
		log.debug("[신청등록구분코드][aplyRegClCd][{}]", aplyRegClCd);
		log.debug("[신청처리유형코드][aplyPrcsTypeCd][{}]", aplyPrcsTypeCd);
		log.debug("[신청심의유형코드][aplyDlbrTypeCd][{}]", aplyDlbrTypeCd);
		
		if(ObjectUtils.isEmpty(aplyRegClCd) || ObjectUtils.isEmpty(aplyPrcsTypeCd) || ObjectUtils.isEmpty(aplyDlbrTypeCd)) {
			throw new Exception("필수 코드값 누락");
		}
		
		/* 심의승인 처리시 */
		if("ADT0002".equals(aplyDlbrTypeCd)) {
			
			/* 회원가입신청시 신규 업체정보로 신청한 경우 */
			if("ARC0001".equals(aplyRegClCd)) {
				/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 승인대상 업체정보 계정상태 승인 처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
				userAplyService.updateInstStatus(dsAplyInfo);
				
				/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 승인대상 업체 보유계정고유번호 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
				String instMgno = (String) dsAplyInfo.get("instMgno");						/* 기관관리번호 */
				userAplyService.updateInstPsnAcnt(instMgno);
			}
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 승인대상 사용자정보 계정상태 승인 처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			userAplyService.updateUserStatus(dsAplyInfo);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 승인대상 사용자 권한정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			String userId = (String) dsAplyInfo.get("userId");						/* 기관관리번호 */
			userAplyService.createApprovedUserRole(userId);
			
		}
		
	}
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 상세화면 - 업체정보 변경신청
	 * [사용자] 사업수행자관리 > 등록관리 상세화면 - 업체정보 변경신청
	 * 
	 * @param dsCurInfo - {aplyMgno}
	 * @return - {
	 * 		dsAplyInfo : 신청정보
	 * 		, dsInstAplyInfo : 업체정보 변경신청 업체정보
	 * 		, dsUserInfo : 변경신청 사용자정보
	 * 		, dsBchgInstInfoFile : 변경전 사업자등록증 파일정보
	 * 		, dsAchgInstInfoFile : 변경후 사업자등록증 파일정보
	 * 		, dsAplyDlbrInfo : 심의결과정보
	 * }
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectInstChgAplyDetail(Map<String, Object> dsCurInfo) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 변경전 정보 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
		Map<String, Object> dsAplyInfo = userAplyService.selectAply(dsCurInfo);
		Map<String, Object> dsInstAplyInfo = userAplyService.selectInstAplydtl(dsAplyInfo);		/* 업체정보 변경신청 업체정보 */
		Map<String, Object> dsUserInfo = userAplyService.selectUser(dsAplyInfo);				/* 업체정보 변경신청 사용자정보 */
		
		/* 사업자등록증 파일정보만 데이터셋 분리 */
		Map<String, Object> dsBchgInstInfoFile =  new HashMap<String, Object>();
		dsBchgInstInfoFile.put("brdocFlmno", dsInstAplyInfo.get("bchgBrdocFlmno"));
		
		Map<String, Object> dsAchgInstInfoFile =  new HashMap<String, Object>();
		dsAchgInstInfoFile.put("brdocFlmno", dsInstAplyInfo.get("achgBrdocFlmno"));
		
		resultMap.put("dsAplyInfo", dsAplyInfo);					/* 신청정보 */
		resultMap.put("dsInstAplyInfo", dsInstAplyInfo);			/* 업체정보 변경신청 업체정보 */
		resultMap.put("dsUserInfo", dsUserInfo);					/* 변경신청 사용자정보 */
		resultMap.put("dsBchgInstInfoFile", dsBchgInstInfoFile);	/* 변경전 사업자등록증 파일정보 */
		resultMap.put("dsAchgInstInfoFile", dsAchgInstInfoFile);	/* 변경후 사업자등록증 파일정보 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 변경신청 정보 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String aplyPrcsTypeCd = (String) dsAplyInfo.get("aplyPrcsTypeCd");				/* 신청처리유형코드 */
		
		Map<String, Object> dsAplyDlbrInfo =  new HashMap<String, Object>();
		
		/* [심의반려|심의승인]만 심의결과정보 조회가능 */
		if(Arrays.asList("APC0002", "APC0003").contains(aplyPrcsTypeCd)) {
			dsAplyDlbrInfo = userAplyService.selectAplyDlbrDtl(dsCurInfo);
		}
		resultMap.put("dsAplyDlbrInfo", dsAplyDlbrInfo);			/* 심의결과정보 */
		
		return resultMap;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 업체정보 변경신청 심의결과등록
	 * 
	 * @param dsAplyDlbrReg - 심의결과등록정보
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertInstRegDlbrRslt(Map<String, Object> dsAplyDlbrReg) throws Exception {
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		dsAplyDlbrReg.put("sUserId", sUserId);
		
		//처리할 신청심의유형코드
		String aplyDlbrTypeCd = (String) dsAplyDlbrReg.get("aplyDlbrTypeCd");				/* 신청심의유형코드 - {ADT0001 : 심의반려, ADT0002 : 심의승인} */
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 신청정보 조회 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> dsAplyInfo = userAplyService.selectAply(dsAplyDlbrReg);
		
		//신청당시 신청등록구분코드
		String aplyRegClCd = (String) dsAplyInfo.get("aplyRegClCd");						/* 신청등록구분코드 - {ARC0001 : 신규가입, ARC0002 : 신규사용자} */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 심의결과 저장 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		userAplyService.insertAplyDlbrDtl(dsAplyDlbrReg);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 신청기본 심의승인|심의반려 처리 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* 신청처리유형코드 - {APC0002 : 심의반려, APC0003 : 심의승인} */
		String aplyPrcsTypeCd = StringUtils.EMPTY;
		if("ADT0001".equals(aplyDlbrTypeCd)) {
			aplyPrcsTypeCd = "APC0002";
		} else if("ADT0002".equals(aplyDlbrTypeCd)) {
			aplyPrcsTypeCd = "APC0003";
		}
		dsAplyInfo.put("aplyPrcsTypeCd", aplyPrcsTypeCd);
		userAplyService.updateAply(dsAplyInfo);
		
		log.debug("[신청등록구분코드][aplyRegClCd][{}]", aplyRegClCd);
		log.debug("[신청처리유형코드][aplyPrcsTypeCd][{}]", aplyPrcsTypeCd);
		log.debug("[신청심의유형코드][aplyDlbrTypeCd][{}]", aplyDlbrTypeCd);
		
		if(ObjectUtils.isEmpty(aplyRegClCd) || ObjectUtils.isEmpty(aplyPrcsTypeCd) || ObjectUtils.isEmpty(aplyDlbrTypeCd)) {
			throw new Exception("필수 코드값 누락");
		}
		
		/* 심의승인 처리시 */
		if("ADT0002".equals(aplyDlbrTypeCd)) {
			/* 업체정보 변경신청 내용 반영 - INST_BSC UPDATE */
			userAplyService.updateInstChgAply(dsAplyInfo);
		}
		
	}
	
}
