package gov.me.irs.common.file.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.service.ViewerService;
import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
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
	
	/**
	 * 문서미리보기 - 파일변환 처리
	 * @param request
	 * @param model
	 * @param requestMap
	 * @throws Exception
	 */
	@PostMapping(value = "/common/viewer.irs")
	public NexacroResult convert(HttpServletRequest request, HttpServletResponse response
			, @ParamDataSet(name = "dsSendViewer") Map<String, Object> requestMap
			) throws Exception {
		
		log.debug("["+this.getClass().getName()+"][conver] START");
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파라미터 정보 읽기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		String fileGroupMgno = (String) requestMap.get("fileGroupMgno");
		String fileMgno = (String) requestMap.get("fileMgno");
		
		RaonKFileVo vo = RaonKFileVo.builder()
				.fileGroupMgno(fileGroupMgno)
				.fileMgno(fileMgno)
				.build();
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 사이냅소프트 파일 변환하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			resultMap = viewerService.convert(vo, request);
			
			if(Const.CHARACTER.RESULT.N .equals(resultMap.get("result"))) {
				throw new Exception(JwtAuthEnum.VIEWER_ERROR.getMessage());
			}
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. 결과 처리 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			nexacroResult.addDataSet("dsViewer", resultMap);
		} catch(Exception e) {
			log.error("[SynapConverter Error][{}]", e);
			
			/* 사용자정의 데이터 공통 응답정보 설정 */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.VIEWER_ERROR, e));
		}
		
		log.debug("["+this.getClass().getName()+"][conver] END");
		
		return nexacroResult;
		
	}
	
}