package gov.me.irs.common.user.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.user.service.MainUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 메인 > 사용자 Controller
 * 
 * @author Justin
 *
 */
@Slf4j
@Controller
@RequiredArgsConstructor
public class MainUserController {
	
	private final MainUserService mainUserService;
	
	/**
	 * 메인 > 사용자 > 회원가입 > 로그인 아이디 중복 검색 체크
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/main/user/checkLoginId.irs")
	public NexacroResult checkLoginId(@ParamDataSet(name = "dsCheckUserInfo") Map<String, Object> dsCheckUserInfo) {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());

		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = mainUserService.selectLoginIdCnt(dsCheckUserInfo);
		
		nexacroResult.addDataSet("dsCheckUserInfo", resultMap);
		
		return nexacroResult;
	}
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청
	 * 
	 * @param dsInstInfo - 사업체정보
	 * @param dsUserInfo - 사용자정보
	 * @param dsInstInfoFile - 첨부파일정보
	 * @return
	 * @throws Exception
	 */
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청
	 * 
	 * @param dsInstInfo - 사업체정보
	 * @param dsUserInfo - 사용자정보
	 * @param dsInstInfoFile - 사업체정보 > 첨부파일정보
	 * @param dsBrdocFlmnoFile - 공통파일정보
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/main/user/insertUser.irs")
	public NexacroResult insertUser(@ParamDataSet(name = "dsInstInfo") Map<String, Object> dsInstInfo
			, @ParamDataSet(name = "dsUserInfo") Map<String, Object> dsUserInfo
			, @ParamDataSet(name = "dsInstInfoFile") Map<String, Object> dsInstInfoFile
			, @ParamDataSet(name = "dsBrdocFlmnoFile") List<Map<String, Object>> dsBrdocFlmnoFile) throws Exception {
		
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		log.debug("[■■■■■■■■■■▶][사업체정보][dsInstInfo][{}]", dsInstInfo);
		log.debug("[■■■■■■■■■■▶][사용자정보][dsUserInfo][{}]", dsUserInfo);
		log.debug("[■■■■■■■■■■▶][첨부파일정보][dsInstInfoFile][{}]", dsInstInfoFile);
		log.debug("[■■■■■■■■■■▶][공통파일정보-사업자등록증][dsBrdocFlmnoFile][{}]", dsBrdocFlmnoFile);
		
		NexacroResult nexacroResult = new NexacroResult();
		
		mainUserService.insertUser(dsInstInfo, dsUserInfo, dsInstInfoFile, dsBrdocFlmnoFile);
		
		return nexacroResult;
	}
	
}