package gov.me.irs.admin.bbm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.admin.bbm.service.BbmService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 게시판 관리 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class BbmController {
	
	private final BbmService bbmService;
	
	/**
	 * 게시판 관리 메뉴화면
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/bbs.nex")
	public NexacroResult bbs(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
	}
	
	/**
	 * 게시판그룹기본 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/selectBbsGroupList.irs")
	public NexacroResult selectBbsGroupList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(requestMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = bbmService.selectBbsGroupListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			List<Map<String, Object>> list = bbmService.selectBbsGroupList(requestMap);
			nexacroResult.addDataSet("list", list);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("pagingVo", pagingVo);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판그룹기본 중복 조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/checkBbsGroup.irs")
	public NexacroResult checkBbsGroup(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		int result = bbmService.checkBbsGroup(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판그룹기본 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/insertBbsGroup.irs")
	public NexacroResult insertBbsGroup(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.insertBbsGroup(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판그룹기본 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/updateBbsGroup.irs")
	public NexacroResult updateBbsGroup(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.updateBbsGroup(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판그룹기본 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/deleteBbsGroup.irs")
	public NexacroResult deleteBbsGroup(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.deleteBbsGroup(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판상세 목록 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/selectBbsList.irs")
	public NexacroResult selectBbsList(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(requestMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = bbmService.selectBbsListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			List<Map<String, Object>> list = bbmService.selectBbsList(requestMap);
			nexacroResult.addDataSet("list", list);
		}
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("pagingVo", pagingVo);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판상세 상세 조회
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/selectBbsDtl.irs")
	public NexacroResult selectBbsDtl(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> detail = bbmService.selectBbsDtl(requestMap);
		nexacroResult.addDataSet("detail", detail);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판상세 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/insertBbs.irs")
	public NexacroResult insertBbs(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.insertBbs(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판상세 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/updateBbs.irs")
	public NexacroResult updateBbs(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.updateBbs(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
	/**
	 * 게시판상세 삭제
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/admin/bbm/deleteBbs.irs")
	public NexacroResult deleteBbs(@ParamDataSet(name = "inputMap") Map<String, Object> requestMap){
		NexacroResult nexacroResult = new NexacroResult();
		
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		requestMap.put("sessionUserId", tableUser.getUserId());
		int result = bbmService.deleteBbs(requestMap);
		nexacroResult.addDataSet("result", result);
		
		return nexacroResult;
	}
	
}