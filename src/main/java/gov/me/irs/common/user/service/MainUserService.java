package gov.me.irs.common.user.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.mapper.MainUserMapper;
import gov.me.irs.core.crypt.util.RsaUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.raonk.service.RaonKService;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.RoleEnum;
import gov.me.irs.core.user.enumeration.UserClCdEnum;
import gov.me.irs.core.user.mapper.UserMapper;
import gov.me.irs.core.user.service.CreateUserVo;
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
	
	private final MainUserMapper mainUserMapper;
	
	private final UserService userService;
	
	private final UserMapper userMapper;
	
	private final RaonKService raonKService;
	
	private final PasswordEncoder passwordEncoder;
	
	private final HttpSession session;
	
	/**
	 * 메인 > 사용자 > 회원가입 > 로그인 아이디 중복 검색 체크
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectcheckLoginIdCnt(Map<String, Object> requestMap) {
		return mainUserMapper.selectcheckLoginIdCnt(requestMap);
	}
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청
	 * 	▶ Target Table
	 * 		- [SELECT] [irsuser.USER_BSC] [USER_ID]
	 * 		- [INSERT] [irsuser.INST_BSC]
	 * 		- [INSERT] [irsuser.USER_BSC]
	 * 		- [INSERT] [irsuser.USER_APLY_BSC]
	 * 		- [INSERT] [irsuser.USER_ROLE_DTL]
	 * 		- [INSERT] [irsuser.JWT_USER_BSC]
	 * 		- [INSERT] [irsuser.JWT_USER_ROLE_BSC]
	 * 
	 * @param dsInstInfo - 사업체정보
	 * @param dsUserInfo - 사용자정보
	 * @param dsInstInfoFile - 사업체정보 > 첨부파일정보
	 * @param dsBrdocFlmnoFile - 공통파일정보-사업자등록증
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void insertUser(Map<String, Object> dsInstInfo
			, Map<String, Object> dsUserInfo
			, Map<String, Object> dsInstInfoFile
			, List<Map<String, Object>> dsBrdocFlmnoFile
			) throws Exception {
		
		log.debug("[메인 > 사용자 > 회원가입 > 회원가입신청][{}]", ObjectUtils.isEmpty(dsInstInfo.get("instMgno")) ? "사업체 신규등록" : "사업체 선택");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 사업체정보(기관정보) 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String instClsfCd = (String) dsInstInfo.get("instClsfCd");
		
		/* 초기값 설정 - instMgno, upInstMgno 컬럼값이 동일하게 저장되어야 하는지에 대한 상태값 */
		dsInstInfo.put("sameInstMgnoYn", "N");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사용자정보 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String acntRprsvYn = Const.CHARACTER.N;									//계정대표자여부
		
		String userClCd = (String) dsUserInfo.get("userClCd");			//사용자구분코드
		UserClCdEnum userClCdEnum = UserClCdEnum.ofCode(userClCd);
		
		if(userClCdEnum == UserClCdEnum.BIZREPRESENT) {
			acntRprsvYn = Const.CHARACTER.Y;
		}
		
		String password = (String) dsUserInfo.get(Const.CORE.KEY_USER_PASSWORD);
		/* 2. 비밀번호 RSA 복호화 */
		try {
			password = RsaUtil.decryptRsa(session, password);
		} catch (Exception e) {
			throw new SignException(JwtAuthEnum.UNKNOWN_ERROR.getCode(), e);
		}
		
		log.debug("[param][{}]", password);
		
		String roleIdMgno = StringUtils.EMPTY;
		if(userClCdEnum == UserClCdEnum.OUTSOURCING) {
			roleIdMgno = RoleEnum.UNAPPROVEDOUTSOURCING.getCode();		//비승인위탁기관 권한
		} else {
			roleIdMgno = RoleEnum.UNAPPROVED.getCode();		//비승인사용자 권한
		}
		
		String lgnId = (String) dsUserInfo.get("lgnId");
		String encptPswd = passwordEncoder.encode(password);
		
		dsUserInfo.put("acntRprsvYn", acntRprsvYn);
		dsUserInfo.put("encptPswd", encptPswd);			//비밀번호 암호화
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 사용자정보 USER_ID 채번 [USER_BSC] ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String userId = userMapper.selectUserId();
		dsUserInfo.put("userId", userId);
		dsUserInfo.put("sUserId", userId);			/* 비로그인 서비스이므로 채번된 사용자ID로 설정한다.
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 사업체정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		if(ObjectUtils.isEmpty(dsInstInfo.get("instMgno"))) {			//신규등록이라면 파일정보 최종저장처리 및 사업체정보 생성
			
			/* 상위기관 ▶ [위탁기관은 관장기관지정 필수], [나머지는 본인 기관번호 세팅] */
			if(!"ICC0004".equals(instClsfCd)) {
				dsInstInfo.put("sameInstMgnoYn", "Y");
			}
			
			dsInstInfo.put("rgtrId", userId);
			dsInstInfo.put("brdocFlmno", dsInstInfoFile.get("brdocFlmno"));					//사업자등록증
			
			/* SINGLE 파일정보 최종저장처리 */
			dsInstInfoFile.put("fileGroupMgno", dsInstInfoFile.get("brdocFlmno"));			//사업자등록증
			raonKService.saveFile(dsInstInfoFile, dsBrdocFlmnoFile);
			
			log.debug("[사업체정보 생성]["+dsInstInfo+"]");
			
			/* 기관기본 정보 생성 */
			mainUserMapper.insertInst(dsInstInfo);
			
			/* 기관설정상세 정보 생성 */
			mainUserMapper.insertInstStngDtl(dsInstInfo);
			
			/* 생성된 사업체 식별자 설정 */
			dsUserInfo.put("instMgno", dsInstInfo.get("instMgno"));
			
			if(Const.CHARACTER.Y.equals(dsInstInfo.get("sameInstMgnoYn"))) {
				dsUserInfo.put("upInstMgno", dsInstInfo.get("instMgno"));
			} else {
				dsUserInfo.put("upInstMgno", dsInstInfo.get("upInstMgno"));
			}
			
		} else {
			String bzentClCd = (String) dsInstInfo.get("bzentClCd");
			
			//[사업수행자 && 비할당업체]이라면 파일정보 최종저장처리 및 사업체정보는 사용자신청기본 테이블에만 저장되면 됨
			if("BCC0002".equals(bzentClCd)) {
				/* SINGLE 파일정보 최종저장처리 */
				dsInstInfoFile.put("fileGroupMgno", dsInstInfoFile.get("brdocFlmno"));			//사업자등록증
				raonKService.saveFile(dsInstInfoFile, dsBrdocFlmnoFile);
			}
			
			dsUserInfo.put("upInstMgno", dsInstInfo.get("upInstMgno"));
			
			/* 수업수행자 검색정보에서 기관관리번호, 상위기관관리번호 추출 */
			dsUserInfo.put("instMgno", dsInstInfo.get("instMgno"));
			/* 상위기관 ▶ [위탁기관은 관장기관지정 필수], [나머지는 본인 기관번호 세팅] */
			if(!"ICC0004".equals(instClsfCd)) {
				dsUserInfo.put("sameInstMgnoYn", "Y");
			} else {
				dsUserInfo.put("sameInstMgnoYn", "N");
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 5. 사용자정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		dsUserInfo.put("acntSttsClCd", "ASC0001");		//미승인
		userMapper.insertUser(dsUserInfo);
		/* 사용자ID 생성값 추출 */
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 사용자신청기본정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> userAplyMap = new HashMap<String, Object>();
		userAplyMap.put("dsInstInfo", dsInstInfo);
		userAplyMap.put("dsUserInfo", dsUserInfo);
		userAplyMap.put("dsInstInfoFile", dsInstInfoFile);
		mainUserMapper.insertUserAply(userAplyMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 사용자 권한정보 생성 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		/* [USER_ROLE_DTL - 사용자역할상세] */
		Map<String, Object> userRoleMap = new HashMap<String, Object>();
		userRoleMap.put("userId", userId);
		userRoleMap.put("roleIdMgno", roleIdMgno);
		userRoleMap.put("sUserId", userId);
		userService.insertUserRole(userRoleMap);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 8. 사용자 권한정보 설정 - JWT ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		
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
}
