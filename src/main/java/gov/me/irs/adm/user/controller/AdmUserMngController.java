package gov.me.irs.adm.user.controller;

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
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.excel.ExcelMatrix;
import gov.me.irs.common.excel.util.ExcelUtil;
import gov.me.irs.common.user.service.UserAplyService;
import gov.me.irs.common.user.service.UserDsctnService;
import gov.me.irs.common.vo.PagingVo;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.sign.exception.SignException;
import gov.me.irs.adm.user.service.AdmUserMngService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class AdmUserMngController {
	
	private final ExcelUtil excelUtil;
	
	private final AdmUserMngService admUserMngService;
	
	private final UserAplyService userAplyService;
	
	/**
	 * 사용자활동내역 및 개인정보취급자관리 이력저장
	 * 
	 * 	- menuMgno = MENU_BSC에 등록된 MENU_MGNO 상세화면일 경우 목록화면관리번호 입력
	 * 	- inqClCd = { IQC0001 : 조회, IQC0002 : 등록, IQC0003 : 수정, IQC0004 : 삭제 }
	 * 	- inqCn = 메뉴명+목록(조회) or 메뉴명+상세조회
	 */
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06030100";
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 목록조회
	 * 		- 전체관리자 전용 서비스
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/user/userMng/selectUserMngList.irs")
	public NexacroResult selectUserMngList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		dsSrh.put("sUserId", sUserId);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = admUserMngService.selectUserMngListCnt(dsSrh);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = admUserMngService.selectUserMngList(dsSrh);
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "사용자관리 목록조회");
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsList", dsList);
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 상세조회
	 *
	 * @param requestMap
	 * @return - {
	 * 				dsInstInfo : 사업체정보
	 * 				, dsUserInfo : 사용자정보
	 * 				, dsInstInfoFile : 사업자등록증 파일정보
	 * 			}
	 * @throws Exception  
	 */
	@PostMapping("/adm/user/userMng/selectUserMngDetail.irs")
	public NexacroResult selectUserMngDetail(@ParamDataSet(name = "dsCurInfo") Map<String, Object> dsCurInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admUserMngService.selectUserMngDetail(dsCurInfo);
		
		/* map을 addDataSet 에 모두 넣기 */
		resultMap.entrySet().stream().forEach(m -> {
			nexacroResult.addDataSet(m.getKey(), m.getValue());
		});
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "사용자관리 상세조회");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 사용자 변경 이력 목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/user/userMng/selectUserChgHstryList.irs")
	public NexacroResult selectUserChgHstryList(@ParamDataSet(name = "dsCurInfo") Map<String, Object> dsCurInfo
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsHistList = null;
		
		/* 사용자관리용 이력조회 조건 설정 */
		dsCurInfo.put("searchType", "userHistory");
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = userAplyService.selectChgAplyArtclDtlListCnt(dsCurInfo);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsCurInfo);
			dsHistList = userAplyService.selectChgAplyArtclDtlList(dsCurInfo);
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "사용자관리 사용자 변경 이력 목록조회");
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsHistList", dsHistList);
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 사용자등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@PostMapping("/adm/user/userMng/insertUser.irs")
	public NexacroResult insertUser(@ParamDataSet(name = "dsInstInfo") Map<String, Object> dsInstInfo
			, @ParamDataSet(name = "dsUserInfo") Map<String, Object> dsUserInfo) throws Exception {
		
		NexacroResult nexacroResult = new NexacroResult();
		
		try {
			admUserMngService.insertUser(dsInstInfo, dsUserInfo);
			
			userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "사용자관리 사용자등록");
			return nexacroResult;
		} catch (SignException e) {
			HttpStatus httpStatus = HttpStatus.BAD_REQUEST;			/* default : 500 */
			JwtAuthEnum jwtAuthEnum = JwtAuthEnum.RSA_INVALID;
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(httpStatus, jwtAuthEnum, e.getCause()));
			return nexacroResult;
		}
	}

	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 계정상태 수정하기
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/user/userMng/updateUserAcntStts.irs")
	public NexacroResult updateUserAcntStts(@ParamDataSet(name = "dsSaveInfo") Map<String, Object> dsSaveInfo) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		admUserMngService.updateUserAcntStts(dsSaveInfo);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사용자관리 계정상태 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 휴대폰번호 수정하기
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/user/userMng/updateUserHdpon.irs")
	public NexacroResult updateUserHdpon(@ParamDataSet(name = "dsUserInfo") Map<String, Object> dsUserInfo) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		admUserMngService.updateUserHdpon(dsUserInfo);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사용자관리 휴대폰번호 수정");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 비밀번호 초기화
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/user/userMng/updateUserPswd.irs")
	public NexacroResult updateUserPswd(@ParamDataSet(name = "dsUserInfo") Map<String, Object> dsUserInfo) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admUserMngService.updateUserPswd(dsUserInfo);
		
		nexacroResult.addDataSet("dsInitPswd", resultMap);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0003", "사용자관리 비밀번호 초기화");
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 사용자관리 > 사용자관리 - 액셀다운로드
	 * 
	 * @param request
	 * @param response
	 * @param downloadExcelFileNm
	 * @param sheetname
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/adm/user/userMng/selectUserMngExcel.irs")
	public NexacroFileResult selectUserRegExcel(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="downloadExcelFileNm" ) String downloadExcelFileNm
			, @RequestParam(required=true, value="sheetname" ) String sheetname
			) throws Exception {
		
		log.debug("-------------------- 엑셀 다운로드 테스트 Controller 호출! ---------------------------");
		
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		Map<String, Object> excelParameterMap = new HashMap<String, Object>();
		PagingVo pagingVo = new PagingVo(1, 10000);
		pagingVo.setSqlMap(excelParameterMap);
		
		/* 1. data */
		List<Map<String, Object>> list = admUserMngService.selectUserMngList(excelParameterMap);
		
		/* 2. header matrix 설정 */
		ExcelMatrix headerMatrix = new ExcelMatrix(1, 19);
		headerMatrix.setRowKeyList(
				  "번호"
				, "사업체구분코드"
				, "사용자ID"
				, "기관관리번호"
				, "기관분류코드"
				, "기관명"
				, "사업자등록번호"
				, "대표자명"
				, "사용자구분코드"
				, "로그인ID"
				, "성명"
				, "핸드폰번호"
				, "계정상태구분코드"
				, "정보비공개알림여부"
				, "sms알림여부"
				, "승인일자(가입일자)"
				, "최종접속일자"
				, "상위기관관리번호"
				, "상위기관명"
				);
		
		/* 3. cell matrix 설정 */
		ExcelMatrix cellMatrix = new ExcelMatrix(1, 19);
		cellMatrix.setRowKeyList(
				  "no"
				, "bzentClCd"
				, "userId"
				, "instMgno"
				, "instClsfCd"
				, "bzentNm"
				, "brno"
				, "rprsvNm"
				, "userClCd"
				, "lgnId"
				, "flnm"
				, "fullHdponNo"
				, "acntSttsClCd"
				, "infoPrvtNtiYn"
				, "smsNtiYn"
				, "aprvYmd"
				, "lastCntnDt"
				, "upInstMgno"
				, "upBzentNm"
				);
		
		cellMatrix.setRowAlignList(
				  CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_LEFT
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_LEFT
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				, CellStyle.ALIGN_CENTER
				);
		
		cellMatrix.print();
		log.debug("["+cellMatrix.getMatrix()[0][0]+"]");
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");

		/* 엑셀 파일 만들기 */
		File file = excelUtil.getXssfFile(headerMatrix, cellMatrix, list, sheetname, true);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(excelUtil.getExcelFileName(downloadExcelFileNm.replace(" ", "_")));
		nexacroFileResult.setContentType(ExcelConst.CONTENT_TYPE.XSSF);
		return nexacroFileResult;
	}
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 다운로드 테스트 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

	
}
