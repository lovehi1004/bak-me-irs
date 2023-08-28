package gov.me.irs.test.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.CellStyle;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.excel.util.ExcelUtil;
import gov.me.irs.common.util.MultipartUtil;
import gov.me.irs.common.excel.ExcelMatrix;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * TestNexacroNExcelController 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class TestNexacroNExcelController {
	
	private final ExcelUtil excelUtil;
	
	private static final String DEFAULT_OUTPUT_EXCEL_DATASET = "outputDs";			/* 업로드, 삭제, 조회, 목록조회 */

	private final MultipartUtil multipartUtil;
	
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 업로드 테스트 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	@PostMapping("/test/excel/upload.irs")
	public NexacroResult excelUpload(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="outputDsName", defaultValue=DEFAULT_OUTPUT_EXCEL_DATASET ) String outputDsName
			) throws Exception {
		
		log.debug("-------------------- 엑셀 업로드 Controller 호출! ---------------------------");
		
		//MultipartHttpServletRequest 체크
		if(!(request instanceof MultipartHttpServletRequest)) {
			log.debug("Request is not a MultipartHttpServletRequest");
			
			NexacroResult nexacroResult = new NexacroResult();
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.BAD_REQUEST, JwtAuthEnum.BAD_UPLOAD_REQUEST));
			return nexacroResult;
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. MultipartHttpServletRequest CASTING ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 엑셀파일 정보 추출하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		MultipartFile multipartFile = multipartUtil.getUploadFile(multipartRequest);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 엑셀파일 읽어서 list로 변환하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String[] headerList = {"id", "name", "description", "age", "id2", "name2", "description2", "age2", "id3", "name3", "description3", "age3"};
		
		List<Map<String, Object>> fileDataList = excelUtil.getListFromExcel(headerList, multipartFile);
		
		log.debug("[엑셀 업로드 결과 보기 START]");
		for (Map<String, Object> map : fileDataList) {
			log.debug("[map][{}]", map);
		}
		log.debug("[엑셀 업로드 결과 보기 END]");
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 엑셀파일 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(outputDsName, fileDataList);
		nexacroResult.setErrorCode(0);
		nexacroResult.setErrorMsg("Excel load Success!");
		return nexacroResult;
	}
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 업로드 테스트 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 다운로드 테스트 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	/**
	 * 엑셀 다운로드 테스트
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/test/excel/download.irs")
	public NexacroFileResult testExcelDownload(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="downloadExcelFileNm", defaultValue="테스트엑셀파일.xlsx" ) String downloadExcelFileNm
			, @RequestParam(required=true, value="sheetname", defaultValue="" ) String sheetname
			) throws Exception {
		
		log.debug("-------------------- 엑셀 다운로드 테스트 Controller 호출! ---------------------------");
		
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		
		/* 1. data */
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		for (int index = 0; index < 10; index++) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("id", "ID00" +index);
			map.put("name", "이름" +index);
			map.put("description", "설명" +index);
			map.put("age", "나이" +index);
			map.put("regDt", "등록일자" +index);
			map.put("uesYn", "사용여부" +index);
			map.put("regUser", "등록사용자" +index);
			
			list.add(map);
		}
		
		/* 2. header matrix 설정 */
		ExcelMatrix headerMatrix = new ExcelMatrix(2, 6);
		headerMatrix.setRowKeyList(0, "[헤더]id", "[헤더]name", "[헤더]description", "[헤더]age", "", "");
		headerMatrix.print();
		headerMatrix.setRowKeyList(1, "", "[헤더]regDt", "", "[헤더]uesYn", "[헤더]regUser", "");
		headerMatrix.print();
		headerMatrix.setColSpan(0, 3, 3);
		headerMatrix.setRowSpan(0, 0, 2);
		headerMatrix.setRowSpan(0, 2, 2);
		headerMatrix.setColSpan(1, 4, 2);
		
		/* 3. cell matrix 설정 */
		ExcelMatrix cellMatrix = new ExcelMatrix(2, 6);
		cellMatrix.setRowKeyList(0, "id", "name", "description", "age", "", "");
		cellMatrix.setRowAlignList(0, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_LEFT, CellStyle.ALIGN_LEFT, CellStyle.ALIGN_RIGHT, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER);
		cellMatrix.print();
		cellMatrix.setRowKeyList(1, "", "regDt", "", "uesYn", "regUser", "");
		cellMatrix.setRowAlignList(1, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER, CellStyle.ALIGN_CENTER);
		cellMatrix.print();
		cellMatrix.setColSpan(0, 3, 3);
		cellMatrix.setRowSpan(0, 0, 2);
		cellMatrix.setRowSpan(0, 2, 2);
		cellMatrix.setColSpan(1, 4, 2);
		
		cellMatrix.print();
		log.debug("["+cellMatrix.getMatrix()[0][0]+"]");
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ 엑셀 다운로드 테스트 예제 END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");

		/* 엑셀 파일 만들기 */
		File file = excelUtil.getXssfFile(headerMatrix, cellMatrix, list, sheetname, true);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(downloadExcelFileNm);
		nexacroFileResult.setContentType(ExcelConst.CONTENT_TYPE.XSSF);
		return nexacroFileResult;
	}
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀 다운로드 테스트 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	
}