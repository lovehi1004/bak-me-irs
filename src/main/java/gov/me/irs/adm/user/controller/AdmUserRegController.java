package gov.me.irs.adm.user.controller;

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
import gov.me.irs.adm.user.service.AdmUserRegService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [관리자] 사업수행자관리 > 등록관리 Controller
 * [사용자] 사업수행자관리 > 등록관리 Controller
 * 
 * @author 홍길동
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class AdmUserRegController {
	
	private final AdmUserRegService admUserRegService;
	
	/**
	 * 사용자활동내역 및 개인정보취급자관리 이력저장
	 * 
	 * 	- menuMgno = MENU_BSC에 등록된 MENU_MGNO 상세화면일 경우 목록화면관리번호 입력
	 * 	- inqClCd = { IQC0001 : 조회, IQC0002 : 등록, IQC0003 : 수정, IQC0004 : 삭제 }
	 * 	- inqCn = 메뉴명+목록(조회) or 메뉴명+상세조회
	 */
	private final UserDsctnService userDsctnService;
	private final String menuMgno = "MN06010000";
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 목록조회
	 * [사용자] 사업수행자관리 > 등록관리 - 목록조회
	 *
	 * @param requestMap
	 * @return
	 */
	@PostMapping(value = {"/adm/user/userReg/selectUserRegList.irs", "/biz/user/userReg/selectUserRegList.irs"})
	public NexacroResult selectUserRegList(@ParamDataSet(name = "dsSrh") Map<String, Object> dsSrh
			, @ParamDataSet(name = "dsPageInfo") Map<String, Object> dsPageInfo) throws Exception {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		List<Map<String, Object>> dsList = null;
		
		/* ■■■■ 페이징처리 - 1. 페이징처리 필수정보 설정 ■■■■ */
		PagingVo pagingVo = new PagingVo(dsPageInfo);
		
		String sUserId = UserSession.getUserId();				/* 세션정보조회 */
		dsSrh.put("sUserId", sUserId);
		
		/* 로그인한 사용자가 전체관리자인가 확인하기 */
		dsSrh.put("superUserYn", UserSession.isSuperUserYn());
		
		/* ■■■■ 페이징처리 - 2. 목록 총건수 조회 ■■■■ */
		int totalCount = admUserRegService.selectUserRegListCnt(dsSrh);
		
		/* ■■■■ 페이징처리 - 3. 조회결과 총건수 설정 ■■■■ */
		pagingVo.setTotalCount(totalCount);
		
		/* ■■■■ 페이징처리 - 4. 총건수에 대한 선택적 조회 ■■■■ */
		if (totalCount > Const.NUMERIC.EMPTY_LIST) {
			pagingVo.setSqlMap(dsSrh);
			dsList = admUserRegService.selectUserRegList(dsSrh);
			
		}
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "등록관리 목록조회");
		
		/* ■■■■ 페이징처리 - 5. 페이징정보 반환 ■■■■ */
		nexacroResult.addDataSet("dsPageInfo", pagingVo);
		nexacroResult.addDataSet("dsList", dsList);
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 등록관리 상세화면
	 * [사용자] 사업수행자관리 > 등록관리 상세화면 - 회원가입신청 상세조회
	 *
	 * @param requestMap
	 * @return - {
	 * 				dsAplyInfo : 신청정보
	 * 				, dsInstInfo : 사업체정보
	 * 				, dsUserInfo : 사용자정보
	 * 				, dsInstInfoFile : 사업자등록증 파일정보
	 * 				, dsAplyDlbrInfo : 심의결과정보 [- optional]
	 * 			}
	 */
	@PostMapping(value = {"/adm/user/userReg/selectUserRegDetail.irs", "/biz/user/userReg/selectUserRegDetail.irs"})
	public NexacroResult selectUserRegDetail(@ParamDataSet(name = "dsCurInfo") Map<String, Object> dsCurInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admUserRegService.selectUserRegDetail(dsCurInfo);
		
		/* map을 addDataSet 에 모두 넣기 */
		resultMap.entrySet().stream().forEach(m -> {
			nexacroResult.addDataSet(m.getKey(), m.getValue());
		});
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "등록관리 상세조회");
		
		return nexacroResult;
	}

	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 심의결과등록
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/user/userReg/insertUserRegDlbrRslt.irs")
	public NexacroResult insertUserRegDlbrRslt(@ParamDataSet(name = "dsAplyDlbrReg") Map<String, Object> dsAplyDlbrReg) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		admUserRegService.insertUserRegDlbrRslt(dsAplyDlbrReg);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "등록관리 심의결과등록");
		
		return nexacroResult;
	}
	
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 상세화면 - 업체정보 변경신청 조회
	 * [사용자] 사업수행자관리 > 등록관리 상세화면 - 업체정보 변경신청 조회
	 * 
	 * @param dsCurInfo
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = {"/adm/user/userReg/selectInstChgAplyDetail.irs", "/biz/user/userReg/selectInstChgAplyDetail.irs"})
	public NexacroResult selectInstChgAplyDetail(@ParamDataSet(name = "dsCurInfo") Map<String, Object> dsCurInfo) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		Map<String, Object> resultMap = admUserRegService.selectInstChgAplyDetail(dsCurInfo);
		
		/* map을 addDataSet 에 모두 넣기 */
		resultMap.entrySet().stream().forEach(m -> {
			nexacroResult.addDataSet(m.getKey(), m.getValue());
		});
		
		/* 전체관리자 권한이라면 */
		if(UserSession.isSuperUser()) {
			userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "등록관리 상세화면 - 업체정보 변경신청 조회");
		} else {
			userDsctnService.insertUserDsctn(this.menuMgno, "IQC0001", "등록관리 상세화면 - 업체정보 변경신청 조회");
		}
		
		return nexacroResult;
	}
	
	/**
	 * [관리자] 사업수행자관리 > 등록관리 - 업체정보 변경신청 심의결과등록
	 * 
	 * @param requestMap
	 * @return
	 * @throws Exception 
	 */
	@PostMapping("/adm/user/userReg/insertInstRegDlbrRslt.irs")
	public NexacroResult insertInstRegDlbrRslt(@ParamDataSet(name = "dsAplyDlbrReg") Map<String, Object> dsAplyDlbrReg) throws Exception{
		NexacroResult nexacroResult = new NexacroResult();
		
		admUserRegService.insertInstRegDlbrRslt(dsAplyDlbrReg);
		
		userDsctnService.insertUserDsctn(this.menuMgno, "IQC0002", "등록관리 업체정보 변경신청 심의결과등록");
		
		return nexacroResult;
	}
	
	
	
//	private final ExcelUtil excelUtil;
//	
//	@PostMapping("/adm/user/userReg/selectUserMngExcel.irs")
//	public ResponseEntity<byte[]> selectUserRegExcel(
//			@RequestParam String filename
//			, @RequestParam String sheetname
//			, @RequestParam String param1
//			, @RequestParam String param2
//			, HttpServletRequest request, HttpServletResponse response) throws Exception {
//		
//		try {
//			
//			filename = excelUtil.decode(filename);
//			sheetname = excelUtil.decode(sheetname);
//			param1 = excelUtil.decode(param1);
//			param2 = excelUtil.decode(param2);
//			
//			log.debug("[파라미터 정보 START]");
//			log.debug("[파라미터명][filename][파라미터값][{}]", filename);
//			log.debug("[파라미터명][sheetname][파라미터값][{}]", sheetname);
//			log.debug("[파라미터명][param1][파라미터값][{}]", param1);
//			log.debug("[파라미터명][param2][파라미터값][{}]", param2);
//			log.debug("[파라미터 정보 END]");
//			
//			log.debug("-------------------- 엑셀 다운로드 테스트 Controller 호출! ---------------------------");
//			
//			
//			log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
//			
//			Map<String, Object> excelParameterMap = new HashMap<String, Object>();
//			PagingVo pagingVo = new PagingVo(1, 10000);
//			pagingVo.setSqlMap(excelParameterMap);
//			
//			/* 1. data */
//			String sUserId = UserSession.getUserId();				/* 세션정보조회 */
//			excelParameterMap.put("sUserId", sUserId);
//			
//			/* 로그인한 사용자가 전체관리자인가 확인하기 */
//			excelParameterMap.put("superUserYn", UserSession.isSuperUserYn());
//			
//			List<Map<String, Object>> list = admUserRegService.selectUserRegList(excelParameterMap);
//			
//			/* 2. header matrix 설정 */
//			ExcelMatrix headerMatrix = new ExcelMatrix(1, 16);
//			headerMatrix.setRowKeyList(
//					"번호"
//					, "신청관리번호"
//					, "기관관리번호"
//					, "사업체명"
//					, "기관분류코드"
//					, "대표자명"
//					, "사업자등록번호"
//					, "아이디"
//					, "성명"
//					, "사용자구분코드"
//					, "신청등록구분코드"
//					, "신청일자"
//					, "신청처리일자"
//					, "신청처리유형코드"
//					, "신청처리사용자ID"
//					, "신청자 사용자ID"
//					);
//			
//			/* 3. cell matrix 설정 */
//			ExcelMatrix cellMatrix = new ExcelMatrix(1, 16);
//			cellMatrix.setRowKeyList(
//					"no"
//					, "aplyMgno"
//					, "instMgno"
//					, "bzentNm"
//					, "instClsfCd"
//					, "rprsvNm"
//					, "brno"
//					, "lgnId"
//					, "flnm"
//					, "userClCd"
//					, "aplyRegClCd"
//					, "aplyYmd"
//					, "aplyPrcsYmd"
//					, "aplyPrcsTypeCd"
//					, "aplyPrcsUserId"
//					, "userId"
//					);
//			
//			cellMatrix.setRowAlignList(
//					CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					, CellStyle.ALIGN_CENTER
//					);
//			
//			cellMatrix.print();
//			log.debug("["+cellMatrix.getMatrix()[0][0]+"]");
//			
//			log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
//
//			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//			return excelUtil.getXssf(headerMatrix, cellMatrix, list, filename, sheetname, true);
//		} catch(Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//		/* 엑셀 파일 만들기 */
//	}
//	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 다운로드 테스트 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

	
	
}
