package gov.me.irs.test.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;

import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.util.CsvUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * TestNexacroNCsvController 예제
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class TestNexacroNCsvController {
	
	private final CsvUtil csvUtil;
	
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ CSV 다운로드 테스트 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	/**
	 * CSV 다운로드 테스트
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/test/csv/download.irs")
	public NexacroFileResult testCsvDownload(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(required=true, value="downloadCsvFileNm", defaultValue="테스트CSV파일.csv" ) String downloadCsvFileNm
			) throws Exception {
		
		log.debug("-------------------- CSV 다운로드 테스트 Controller 호출! ---------------------------");
		
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ CSV 다운로드 테스트 예제 START ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");
		
		
		/* 1. data */
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. data ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. header 목록 설정 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String[] headerList = {"[헤더]id", "[헤더]name", "[헤더]description", "[헤더]age", "[헤더]regDt", "[헤더]uesYn", "[헤더]regUser"};
		String[] cellList = {"id", "name", "description", "age", "regDt", "uesYn", "regUser"};
		
		log.debug("[※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※ CSV 다운로드 테스트 예제 END ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※]");

		/* CSV 파일 만들기 */
		File file = csvUtil.getCsvFile(headerList, cellList, list);
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(downloadCsvFileNm);
		nexacroFileResult.setContentType(ExcelConst.CONTENT_TYPE.CSV);
		return nexacroFileResult;
	}
	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ CSV 다운로드 테스트 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
	
}