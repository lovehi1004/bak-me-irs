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

import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.excel.ExcelMatrix;
import gov.me.irs.common.excel.util.ExcelUtil;
import gov.me.irs.common.user.service.UserDsctnService;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.adm.cd.service.AdmErrMsgService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class AdmErrMsgController {
	
	private final ExcelUtil excelUtil;
	
	private final AdmErrMsgService admErrMsgService;
	private final UserDsctnService userDsctnService;
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/selectErrMsgList.irs")
	public NexacroResult selectErrMsgList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		List<Map<String, Object>> dsList = admErrMsgService.selectErrMsgList(dsSrh);
		nexacroResult.addDataSet("dsList", dsList);
		userDsctnService.insertUserDsctn("MN06061100","IQC0001","오류메시지 관리 목록조회");	
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 등록
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/insertErrMsg.irs")
	public NexacroResult insertErrMsg(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admErrMsgService.insertErrMsg(dsDtl);
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 오류메세지코드 중복 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/checkErrMsg.irs")
	public NexacroResult checkErrMsg(@ParamDataSet(name = "dsCheckInfo") Map<String, Object> dsCheckInfo) {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admErrMsgService.selectErrMsgCnt(dsCheckInfo);
		
		nexacroResult.addDataSet("dsCheckInfo", resultMap);
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 상세조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/selectErrMsgDetail.irs")
	public NexacroResult selectErrMsgDetail(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh){
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> dsDtl = admErrMsgService.selectErrMsgDetail(dsSrh);
		
		nexacroResult.addDataSet("dsDtl", dsDtl);
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 수정
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/updateErrMsg.irs")
	public NexacroResult updateErrMsg(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admErrMsgService.updateErrMsg(dsDtl);
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 삭제
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/cd/errMsg/deleteErrMsg.irs")
	public NexacroResult deleteErrMsg(@ParamDataSet(name = "dsDtl") Map<String, Object> dsDtl) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		String sUserId = UserSession.getUserId();
		dsDtl.put("sUserId", sUserId);
		admErrMsgService.deleteErrMsg(dsDtl);
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 코드관리 > 오류메시지 관리 - 액셀다운로드
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/cd/errMsg/selectErrMsgExcel.irs")
	public NexacroFileResult selectUserRegExcel(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="downloadExcelFileNm" ) String downloadExcelFileNm
			, @RequestParam(required=true, value="sheetname" ) String sheetname
			) throws Exception {
		
		log.debug("-------------------- 엑셀 다운로드 테스트 Controller 호출! ---------------------------");
		
		Map<String, Object> excelParameterMap = new HashMap<String, Object>();
		PagingVo pagingVo = new PagingVo(1, 10000);
		pagingVo.setSqlMap(excelParameterMap);
		
		/* 1. data */
		List<Map<String, Object>> list = admErrMsgService.selectErrMsgList(excelParameterMap);
		
		/* 2. header matrix 설정 */
		ExcelMatrix headerMatrix = new ExcelMatrix(1, 6);
		headerMatrix.setRowKeyList(
				  "오류메세지코드"
				, "오류메세지구분명"
				, "메세지국가코드"
				, "입력수"
				, "오류메세지명"
				, "사용여부"
				);
		
		/* 3. cell matrix 설정 */
		ExcelMatrix cellMatrix = new ExcelMatrix(1, 6);
		cellMatrix.setRowKeyList(
				  "errMsgCd"
				, "errMsgClNm"
				, "errMsgNtnCd"
				, "inptCnt"
				, "errMsgNm"
				, "useYn"
				);
		cellMatrix.setRowAlignList(
				  CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
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
		nexacroFileResult.setOriginalName(excelUtil.getExcelFileName(downloadExcelFileNm.replace(" ","_")));
		nexacroFileResult.setContentType(ExcelConst.CONTENT_TYPE.XSSF);
		return nexacroFileResult;
	}
	
}
