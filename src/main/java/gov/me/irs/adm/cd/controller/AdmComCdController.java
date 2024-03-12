package gov.me.irs.adm.cd.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.springframework.stereotype.Controller;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.user.service.UserDsctnService;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.adm.cd.service.AdmComCdService;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
public class AdmComCdController {
	
	private final AdmComCdService admComCdService;
	
	/**
	 * 사용자활동내역 및 개인정보취급자관리 이력저장
	 * 
	 * 	- menuMgno = MENU_BSC에 등록된 MENU_MGNO 상세화면일 경우 목록화면관리번호 입력
	 * 	- inqClCd = { IQC0001 : 조회, IQC0002 : 등록, IQC0003 : 수정, IQC0004 : 삭제 }
	 * 	- inqCn = 메뉴명+목록(조회) or 메뉴명+상세조회
	 */
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06064100";
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/comCd/selectComGrpCdList.irs")
	public NexacroResult selectComGrpCdList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> dsList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = admComCdService.selectComGrpCdListCnt(dsSrh);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = admComCdService.selectComGrpCdList(dsSrh);
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 그룹코드목록조회");
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsList", dsList);
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/comCd/selectComCdList.irs")
	public NexacroResult selectComCdList(@ParamDataSet(name = "dsDtlSrh") Map<String, Object> dsDtlSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsDtlList", admComCdService.selectComCdList(dsDtlSrh));
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 코드목록조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드상세조회
	 *
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/selectComGrpCdDetail.irs")
	public NexacroResult selectComGrpCdDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admComCdService.selectComGrpCdDetail(dsSrh);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 그룹코드상세조회");
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드수정
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/updateComGrpCd.irs")
	public NexacroResult updateComGrpCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admComCdService.updateComGrpCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "공통 코드 관리 그룹코드수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/deleteComGrpCd.irs")
	public NexacroResult deleteComGrpCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		
		/* 코드 건수 조회 */
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("srhGroupCdMgno", dsDtl.get("groupCdMgno"));
		List<Map<String, Object>> cdList = admComCdService.selectComCdList(map);
		
		/* 코드 건수 */
		dsDtl.put("cdCnt", cdList.size());
		
		/* 없으면 삭제 */
		if(cdList.size() == Const.NUMERIC.EMPTY_LIST) {
			admComCdService.deleteComGrpCd(dsDtl);
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0004", "공통 코드 관리 그룹코드기본 삭제");
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드등록
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/insertComGrpCd.irs")
	public NexacroResult insertComGrpCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admComCdService.insertComGrpCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "공통 코드 관리 그룹코드등록");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 그룹코드기본 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/checkComGrpCd.irs")
	public NexacroResult checkComGrpCd(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admComCdService.selectComGrpCdCnt(dsCheckInfo);
		
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 그룹코드기본 중복 조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세조회
	 *
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/selectComCdDetail.irs")
	public NexacroResult selectComCdDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admComCdService.selectComCdDetail(dsSrh);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 코드상세조회");
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/checkComCd.irs")
	public NexacroResult checkComCd(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admComCdService.selectComCdCnt(dsCheckInfo);
		
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "공통 코드 관리 코드상세 중복 조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드등록
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/insertComCd.irs")
	public NexacroResult insertComCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admComCdService.insertComCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "공통 코드 관리 코드등록");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드상세 삭제
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/comCd/deleteComCd.irs")
	public NexacroResult deleteComCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		
		admComCdService.deleteComCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0004", "공통 코드 관리 코드상세 삭제");
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 공통 코드 관리 - 코드수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/comCd/updateComCd.irs")
	public NexacroResult updateComCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admComCdService.updateComCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "공통 코드 관리 코드수정");
		
		return nexacroResult;
	}

}
