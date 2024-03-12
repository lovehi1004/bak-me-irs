package gov.me.irs.adm.cd.controller;

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
import gov.me.irs.adm.cd.service.AdmBizFldInfoService;
import lombok.RequiredArgsConstructor;


/**
 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
public class AdmBizFldInfoController {
	
	private final AdmBizFldInfoService admBizFldInfoService;
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06062100 ";
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizFldInfoList.irs")
	public NexacroResult selectBizFldInfoList(@ParamDataSet(name = "dsPageInfo") Map<String, Object> pageInfoMap, @ParamDataSet(name = "dsSrh") Map<String, Object> requestMap) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(pageInfoMap);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = admBizFldInfoService.selectBizFldInfoListCnt(requestMap);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(requestMap);	
			dsList = admBizFldInfoService.selectBizFldInfoList(requestMap);
			
		}
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsList", dsList);
		userDsctnService.insertUserDsctn("MN06062100","IQC0001","사업분야 정보 관리 목록조회");
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/insertBizFldInfo.irs")
	public NexacroResult insertBizFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.insertBizFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "사업분야 코드등록");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizFldCnt.irs")
	public NexacroResult checkBizFld(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		Map<String, Object> resultMap = admBizFldInfoService.selectBizSFldCnt(dsCheckInfo);
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "사업분야 코드 중복조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야수정
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/bizFldInfo/updateBizFldInfo.irs")
	public NexacroResult updateBizFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.updateBizFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사업분야 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 삭제
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/bizFldInfo/deleteBizFldInfo.irs")
	public NexacroResult deleteBizFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.deleteBizFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사업분야 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업분야 상세조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizFldInfoDetail.irs")
	public NexacroResult selectBizFldInfoDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admBizFldInfoService.selectBizFldInfoDetail(dsSrh);
		
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizFldInfoDetailList.irs")
	public NexacroResult selectBizFldInfoDetailList(@ParamDataSet(name = "dsDtlSrh") Map<String, Object> dsDtlSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsDtlList", admBizFldInfoService.selectBizFldInfoDetailList(dsDtlSrh));
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야상세조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizSubFldInfoDetail.irs")
	public NexacroResult selectBizSubFldInfoDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admBizFldInfoService.selectBizSubFldInfoDetail(dsSrh);
		
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/bizFldInfo/selectBizSubFldCnt.irs")
	public NexacroResult checkBizSubFld(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		Map<String, Object> resultMap = admBizFldInfoService.selectBizSubFldCnt(dsCheckInfo);
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "사업세부분야 코드 중복조회");
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/insertBizSubFldInfo.irs")
	public NexacroResult insertBizSubFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.insertBizSubFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "사업세부분야 코드등록");
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/bizFldInfo/updateBizSubFldInfo.irs")
	public NexacroResult updateBizSubFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.updateBizSubFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사업분야 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 사업분야 정보 관리 - 사업세부분야 삭제
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/bizFldInfo/deleteBizSubFldInfo.irs")
	public NexacroResult deleteBizSubFldInfo(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admBizFldInfoService.deleteBizSubFldInfo(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사업분야 수정");
		
		return nexacroResult;
	}

	
}
