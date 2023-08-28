package gov.me.irs.common.file.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.enumeration.CustomResponseEnum;
import gov.me.irs.common.file.service.ViewerService;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.core.config.util.CoreUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * ViewerController - 사이냅소프트
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class ViewerController {
	
	private final ViewerService viewerService;
	
	private static final String DEFAULT_OUTPUT_VIEWER_DATASET = "outputDs";			/* 미리보기 문서뷰어 기본값 */
	
	/**
	 * 문서미리보기 - 파일변환 처리
	 * @param request
	 * @param model
	 * @param requestMap
	 * @throws Exception
	 */
	@PostMapping(value = "/test/synap/convert.irs")
	public NexacroResult convert(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "inputDs") Map<String, Object> requestMap
			, @RequestParam(required=true, value="outputDsName", defaultValue=DEFAULT_OUTPUT_VIEWER_DATASET ) String outputDsName
			) throws Exception {
		
		log.debug("["+this.getClass().getName()+"][conver] START");
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		int fileGroupSn = (int) requestMap.get("fileGroupSn");
		int fileDtlSn = (int) requestMap.get("fileDtlSn");
		String fileTypeClCd = (String) requestMap.get("fileTypeClCd");
		
		FileVo vo = FileVo.builder()
				.fileGroupSn(fileGroupSn)
				.fileDtlSn(fileDtlSn)
				.fileTypeClCd(fileTypeClCd)
				.delYn(Const.DEL.N)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사이냅소프트 파일 변환하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			resultMap = viewerService.convert(vo, request);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			nexacroResult.addDataSet(outputDsName, resultMap);
		} catch(Exception e) {
			/* 사용자정의 데이터 공통 응답정보 설정 */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, CustomResponseEnum.VIEWER_ERROR, e));
		}
		
		log.debug("["+this.getClass().getName()+"][conver] END");
		
		return nexacroResult;
		
	}
	
}