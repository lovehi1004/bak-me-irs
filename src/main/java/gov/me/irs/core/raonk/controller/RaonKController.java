package gov.me.irs.core.raonk.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.core.raonk.service.RaonKService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKController - 라온K Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class RaonKController {
	
	private final RaonKService raonKService;
	
	/**
	 * [공통] 라온K - 파일목록 조회
	 *
	 * @param
	 * 		- dsSendFileGroupDetail ▶ {fileGroupMgno : "조회대상 파일그룹식별키 또는 공백", menuMgno : "메뉴ID 또는 공백", uploadType : "S 또는 M"}
	 * @return
	 * 		- dsFileDetail ▶ RaonKFileVo.java
	 * 		- dsFileStatusDetail ▶ FileStatusVo.java - {fileGroupMgno : "파일그룹식별키 또는 채번된 식별키", issueYn : "Y|N"}
	 * 
	 * @throws Exception 
	 */
	@PostMapping("/common/raonk/selectFileList.irs")
	public NexacroResult selectFileList(@ParamDataSet(name = "dsSendFileGroupDetail") Map<String, Object> dsSendFileGroupDetail) throws Exception {
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		
		NexacroResult nexacroResult = new NexacroResult();
		raonKService.selectFileList(nexacroResult, dsSendFileGroupDetail);
		return nexacroResult;
	}
	
	/**
	 * 파일 복제하기 - 개별처리시
	 * 
	 * @param dsCloneFile - {fileGroupMgno : "복제대상", clonedFileGroupMgno : "복제결과"}
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/raonk/selectCloneFile.irs")
	public NexacroResult selectCloneFile(@ParamDataSet(name = "dsCloneFile") Map<String, Object> dsCloneFile
			) throws Exception {
		
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		log.debug("[■■■■■■■■■■▶][파일 복제대상 정보][dsCloneFile][{}]", dsCloneFile);
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* 복제대상 */
		String fileGroupMgno = (String) dsCloneFile.get("fileGroupMgno");
		
		/* ■■■■■■■■■■■■■■■■■■■■ 파일 복제 처리 START ■■■■■■■■■■■■■■■■■■■■ */
		String clonedFileGroupMgno = raonKService.saveCloneFile(fileGroupMgno);
		/* ■■■■■■■■■■■■■■■■■■■■ 파일 복제 처리 END ■■■■■■■■■■■■■■■■■■■■ */
		dsCloneFile.put("clonedFileGroupMgno", clonedFileGroupMgno);
		
		log.debug("[■■■■■■■■■■▶][파일 복제결과 정보][dsCloneFile][{}]", dsCloneFile);
		
		nexacroResult.addDataSet("dsCloneFile", dsCloneFile);
		return nexacroResult;
	}
	
	/**
	 * 업무저장 처리 Sample
	 * 
	 * @param dsSendFileGroupDetail
	 * @param dsFileDetail
	 * @return
	 * @throws Exception
	 */
	@PostMapping("/common/raonk/saveTestFile.irs")
	public NexacroResult saveTestFile(@ParamDataSet(name = "dsSendFileGroupDetail") Map<String, Object> dsSendFileGroupDetail
			, @ParamDataSet(name = "dsFileDetail") List<Map<String, Object>> dsFileDetail
			) throws Exception {
		
		log.debug("[■■■■■■■■■■▶][invoked!][{}]", new Object() {}.getClass().getEnclosingMethod().getName());
		log.debug("[■■■■■■■■■■▶][파일그룹정보][dsSendFileGroupDetail][{}]", dsSendFileGroupDetail);
		log.debug("[■■■■■■■■■■▶][최종 저장처리 대상 파일상세정보][dsFileDetail][{}]", dsFileDetail);
		
		NexacroResult nexacroResult = new NexacroResult();
		
		/* ■■■■■■■■■■■■■■■■■■■■ 최종 저장 처리 START ■■■■■■■■■■■■■■■■■■■■ */
		raonKService.saveTestFile(dsSendFileGroupDetail, dsFileDetail);
		/* ■■■■■■■■■■■■■■■■■■■■ 최종 저장 처리 END ■■■■■■■■■■■■■■■■■■■■ */
		
		return nexacroResult;
	}
	
}