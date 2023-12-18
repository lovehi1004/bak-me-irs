package gov.me.irs.common.board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.board.service.CommonBoardService;
import gov.me.irs.common.constants.Const;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class CommonBoardController {

	private final CommonBoardService commonBoardService;
	
	
	/**
	 * [공통] 게시판(공지사항, 자료실, FAQ, 법령과 지침) 조회
	 *
	 * @param dsSrh
	 * @param dsPageInfo
	 * @return
	 */
	@PostMapping("/common/board/selectBoardList.irs")
	public NexacroResult selectBoardList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		int totalCount = commonBoardService.selectBoardListCnt(dsSrh);
		
		pagingVo.setTotalCount(totalCount);
		
		if(totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = commonBoardService.selectBoardList(dsSrh);
		}
		
		nexacroResult.addDataSet("dsPageInfo", pagingVo.getMap());
		nexacroResult.addDataSet("dsList", dsList);
				
		return nexacroResult;
	}
	/**
	 * [공통] 공지사항(로그인화면) 조회
	 *
	 * @param 
	 * @return
	 */
	@PostMapping("/common/board/selectBoardListLogin.irs")
	public NexacroResult selectBoardListLogin(){
		
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsList", commonBoardService.selectBoardListLogin());
		
		return nexacroResult;
	}
	/**
	 * [공통] 공지사항(메인화면) 조회
	 *
	 * @param dsSrh
	 * @return
	 */
	@PostMapping("/common/board/selectBoardListMainNotice.irs")
	public NexacroResult selectBoardListMainNotice(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh){
		
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsList", commonBoardService.selectBoardListMain(dsSrh));
		
		return nexacroResult;
	}
	/**
	 * [공통] 자료실(메인화면) 조회
	 *
	 * @param dsSrh
	 * @return
	 */
	@PostMapping("/common/board/selectBoardListMainData.irs")
	public NexacroResult selectBoardListMainData(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh){
		
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsList", commonBoardService.selectBoardListMain(dsSrh));
		
		return nexacroResult;
	}
	/**
	 * [공통] 법령과 지침(메인화면) 조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/board/selectBoardListMainLNG.irs")
	public NexacroResult selectBoardListMainLNG(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh){
		
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsList", commonBoardService.selectBoardListMain(dsSrh));
		
		return nexacroResult;
	}
	/**
	 * [공통] 게시판(공지사항, 자료실, FAQ, 법령과 지침) 상세조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/board/selectBoardDtl.irs")
	public NexacroResult selectBoardDtl(@ParamDataSet(name = "dsBbsInfo") Map<String, Object> dsBbsInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsBbsInfo", commonBoardService.selectBoardDtl(dsBbsInfo));
		
		return nexacroResult;
	}
	
	/**
	 * [공통] 게시판(공지사항, 자료실, FAQ, 법령과 지침) 등록
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/board/insertBoardDtl.irs")
	public NexacroResult insertBoardDtl(@ParamDataSet(name = "dsBbsInfo") Map<String, Object> dsBbsInfo,
			@ParamDataSet(name = "dsBbsFile") List<Map<String, Object>> dsBbsFile) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		dsBbsInfo.put("sUserId", tableUser.getUserId());
		commonBoardService.insertBoardDtl(dsBbsInfo, dsBbsFile);
		nexacroResult.addDataSet("dsBbsInfo", dsBbsInfo);
		
		return nexacroResult;
	}
	
	/**
	 * [공통] 게시판(공지사항, 자료실, FAQ, 법령과 지침) 수정
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/common/board/updateBoardDtl.irs")
	public NexacroResult updateBoardDtl(@ParamDataSet(name = "dsBbsInfo") Map<String, Object> dsBbsInfo,
			@ParamDataSet(name = "dsBbsFile") List<Map<String, Object>> dsBbsFile) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		dsBbsInfo.put("sUserId", tableUser.getUserId());
		commonBoardService.updateBoardDtl(dsBbsInfo, dsBbsFile);
		nexacroResult.addDataSet("dsBbsInfo", dsBbsInfo);
		
		return nexacroResult;
	}
	
}
