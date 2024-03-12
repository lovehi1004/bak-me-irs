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
import gov.me.irs.adm.cd.service.AdmMnofcInfoService;
import lombok.RequiredArgsConstructor;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
public class AdmMnofcInfoController {
	
	private final AdmMnofcInfoService admMnofcInfoService;
	
	/**
	 * 사용자활동내역 및 개인정보취급자관리 이력저장
	 * 
	 * 	- menuMgno = MENU_BSC에 등록된 MENU_MGNO 상세화면일 경우 목록화면관리번호 입력
	 * 	- inqClCd = { IQC0001 : 조회, IQC0002 : 등록, IQC0003 : 수정, IQC0004 : 삭제 }
	 * 	- inqCn = 메뉴명+목록(조회) or 메뉴명+상세조회
	 */
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06063100";
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/mnofcInfo/selectMnofcInfoList.irs")
	public NexacroResult selectMnofcInfoList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> dsList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = admMnofcInfoService.selectMnofcInfoListCnt(dsSrh);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = admMnofcInfoService.selectMnofcInfoList(dsSrh);
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "부처 정보 관리 부처목록조회");
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsList", dsList);
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/mnofcInfo/selectSubMnofcInfoList.irs")
	public NexacroResult selectSubMnofcInfoList(@ParamDataSet(name = "dsDtlSrh") Map<String, Object> dsDtlSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		nexacroResult.addDataSet("dsDtlList", admMnofcInfoService.selectSubMnofcInfoList(dsDtlSrh));
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "부처 정보 관리 부처 하위기관 목록조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/mnofcInfo/updateMnofcInfo.irs")
	public NexacroResult updateMnofcInfo(@ParamDataSet(name = "dsSaveInfo") Map<String, Object> dsSaveInfo) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsSaveInfo.put("sUserId", sUserId);
		admMnofcInfoService.updateMnofcInfo(dsSaveInfo);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "부처 정보 관리 부처수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 부처 정보 관리 - 부처 하위기관 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/mnofcInfo/updateSubMnofcInfo.irs")
	public NexacroResult updateSubMnofcInfo(@ParamDataSet(name = "dsSaveInfo") Map<String, Object> dsSaveInfo) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsSaveInfo.put("sUserId", sUserId);
		admMnofcInfoService.updateSubMnofcInfo(dsSaveInfo);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "부처 정보 관리 부처 하위기관 수정");
		
		return nexacroResult;
	}
}
