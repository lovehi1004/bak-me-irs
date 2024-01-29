package gov.me.irs.common.user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.mapper.MainUserMapper;
import gov.me.irs.core.jwt.util.JwtUtil;
import gov.me.irs.core.raonk.service.RaonKService;
import gov.me.irs.core.safedb.Crypto;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.mapper.UserMapper;
import gov.me.irs.core.user.repository.UserRepository;
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
		String encptPswd = crypto.encryptRsaToSHA(rsaPassword);
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
				
			}
			
		}
		
		return resultMap;
		
	}
}
