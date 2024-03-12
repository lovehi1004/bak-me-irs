package gov.me.irs.common.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.service.MainUserService;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.sign.exception.SignException;
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
	public NexacroResult checkLoginId(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());

		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = mainUserService.selectLoginIdCnt(dsCheckInfo);
		
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		return nexacroResult;
	}
	
	/**
	 * 메인 > 사용자 > 회원가입 > 회원가입신청
	 * 
	 * @param dsInstInfo - 사업체정보
	 * @param dsUserInfo - 사용자정보
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/main/user/insertAply.irs")
	public NexacroResult insertAply(@ParamDataSet(name = "dsInstInfo") Map<String, Object> dsInstInfo
			, @ParamDataSet(name = "dsUserInfo") Map<String, Object> dsUserInfo
			, @ParamDataSet(name = "dsInstInfoFile") Map<String, Object> dsInstInfoFile
			, @ParamDataSet(name = "dsBrdocFlmnoFile") List<Map<String, Object>> dsBrdocFlmnoFile) throws Exception {
		
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		log.debug("[■■■■■■■■■■▶][사업체정보][dsInstInfo][{}]", dsInstInfo);
		log.debug("[■■■■■■■■■■▶][사용자정보][dsUserInfo][{}]", dsUserInfo);
		log.debug("[■■■■■■■■■■▶][첨부파일정보][dsInstInfoFile][{}]", dsInstInfoFile);
		log.debug("[■■■■■■■■■■▶][공통파일정보-사업자등록증][dsBrdocFlmnoFile][{}]", dsBrdocFlmnoFile);
		
		NexacroResult nexacroResult = new NexacroResult();
		
		try {
			mainUserService.insertAply(dsInstInfo, dsUserInfo, dsInstInfoFile, dsBrdocFlmnoFile);
			return nexacroResult;
			
		} catch (SignException e) {
			HttpStatus httpStatus = HttpStatus.BAD_REQUEST;			/* default : 500 */
			JwtAuthEnum jwtAuthEnum = JwtAuthEnum.RSA_INVALID;
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, e.getCause()));
			return nexacroResult;
		}
		
	}
	
	/**
	 * 메인 > 사용자 > 아이디/비밀번호 찾기
	 * 
	 * @param dsSrh
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/main/user/find.irs")
	public NexacroResult find(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = mainUserService.find(dsSrh);
		
		nexacroResult.addDataSet("dsResult", resultMap);
		
		return nexacroResult;
	}
	
	/**
	 * Top > 정보수정
	 * 
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/main/user/selectMyUserInfo.irs")
	public NexacroResult selectMyUserInfo() throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = mainUserService.selectMyUserInfo();
		
		/* map을 addDataSet 에 모두 넣기 */
		resultMap.entrySet().stream().forEach(m -> {
			nexacroResult.addDataSet(m.getKey(), m.getValue());
		});
		
		return nexacroResult;
	}
	
	/**
	 * Top > 정보수정 - 사용자정보 정보수정하기
	 * 
	 * @param dsUserInfo
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/main/user/updateMyUserInfo.irs")
	public NexacroResult updateUser(@ParamDataSet(name = "dsInstInfo") Map<String, Object> dsInstInfo
			, @ParamDataSet(name = "dsSaveInfo") Map<String, Object> dsSaveInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		try {
			boolean result = mainUserService.updateMyUserInfo(dsInstInfo, dsSaveInfo);
			log.debug("[result][{}]", String.valueOf(result));
			
			Map<String, Object> dsResult = new HashMap<String, Object>();
			dsResult.put("result", result ? Const.CHARACTER.Y : Const.CHARACTER.N);
			
			nexacroResult.addDataSet("dsResult", dsResult);
			return nexacroResult;
			
		} catch (SignException e) {
			HttpStatus httpStatus = HttpStatus.BAD_REQUEST;			/* default : 500 */
			JwtAuthEnum jwtAuthEnum = JwtAuthEnum.RSA_INVALID;
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, e.getCause()));
			return nexacroResult;
		}
		
	}
}