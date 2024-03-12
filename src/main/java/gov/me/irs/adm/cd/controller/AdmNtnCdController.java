package gov.me.irs.adm.cd.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import org.apache.poi.ss.usermodel.CellStyle;
import org.springframework.stereotype.Controller;

import gov.me.irs.adm.cd.service.AdmNtnCdService;
import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.excel.ExcelMatrix;
import gov.me.irs.common.excel.util.ExcelUtil;
import gov.me.irs.common.user.service.UserDsctnService;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class AdmNtnCdController {
	
	private final ExcelUtil excelUtil;
	
	private final AdmNtnCdService admNtnCdService;
	
	/**
	 * 사용자활동내역 및 개인정보취급자관리 이력저장
	 * 
	 * 	- menuMgno = MENU_BSC에 등록된 MENU_MGNO 상세화면일 경우 목록화면관리번호 입력
	 * 	- inqClCd = { IQC0001 : 조회, IQC0002 : 등록, IQC0003 : 수정, IQC0004 : 삭제 }
	 * 	- inqCn = 메뉴명+목록(조회) or 메뉴명+상세조회
	 */
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06060100";
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 목록조회
	 *
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/ntnCd/selectNtnCdList.irs")
	public NexacroResult selectNtnCdList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> dsList = admNtnCdService.selectNtnCdList(dsSrh);
		nexacroResult.addDataSet("dsList", dsList);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "국가코드관리 목록조회");
			
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/ntnCd/insertNtnCd.irs")
	public NexacroResult insertNtnCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admNtnCdService.insertNtnCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "국가코드관리 국가코드등록");
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 국가코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/ntnCd/checkNtnCd.irs")
	public NexacroResult checkNtnCd(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admNtnCdService.selectNtnCdCnt(dsCheckInfo);
		
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "국가코드관리 국가코드 중복 조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 상세조회
	 *
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/ntnCd/selectNtnCdDetail.irs")
	public NexacroResult selectNtnCdDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admNtnCdService.selectNtnCdDetail(dsSrh);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "국가코드관리 상세조회");
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/ntnCd/updateNtnCd.irs")
	public NexacroResult updateNtnCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admNtnCdService.updateNtnCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "국가코드관리 국가코드 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/ntnCd/deleteNtnCd.irs")
	public NexacroResult deleteNtnCd(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admNtnCdService.deleteNtnCd(dsDtl);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0004", "국가코드관리 국가코드 삭제");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 국가코드관리 - 액셀다운로드
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/ntnCd/selectNtnCdExcel.irs")
	public NexacroFileResult selectUserRegExcel(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="downloadExcelFileNm" ) String downloadExcelFileNm
			, @RequestParam(required=true, value="sheetname" ) String sheetname
			) throws Exception {
		
		log.debug("-------------------- 엑셀 다운로드 테스트 Controller 호출! ---------------------------");
		
		Map<String, Object> excelParameterMap = new HashMap<String, Object>();
		PagingVo pagingVo = new PagingVo(1, 10000);
		pagingVo.setSqlMap(excelParameterMap);
		
		/* 1. data */
		List<Map<String, Object>> list = admNtnCdService.selectNtnCdList(excelParameterMap);
		
		/* 2. header matrix 설정 */
		ExcelMatrix headerMatrix = new ExcelMatrix(1, 4);
		headerMatrix.setRowKeyList(
				  "IATA국가코드"
				, "국가한글명"
				, "국가영문명"
				, "사용여부"
				);
		
		/* 3. cell matrix 설정 */
		ExcelMatrix cellMatrix = new ExcelMatrix(1, 4);
		cellMatrix.setRowKeyList(
				  "iataNtnCd"
				, "ntnKornNm"
				, "ntnEngNm"
				, "delYn"
				);
		cellMatrix.setRowAlignList(
				  CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				);
		
		cellMatrix.print();
		log.debug("["+cellMatrix.getMatrix()[0][0]+"]");
		
		/* 엑셀 파일 만들기 */
		File file = excelUtil.getXssfFile(headerMatrix, cellMatrix, list, sheetname, true);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(excelUtil.getExcelFileName(downloadExcelFileNm.replace(" ", "_")));
		nexacroFileResult.setContentType(ExcelConst.CONTENT_TYPE.XSSF);
		return nexacroFileResult;
	}
	
}
