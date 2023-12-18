package gov.me.irs.core.raonk.controller;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.file.vo.RaonKFileDownloadVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.RaonKFileUtil;
import gov.me.irs.core.config.util.CoreUtil;
import gov.me.irs.core.enumeration.JwtAuthEnum;
import gov.me.irs.core.raonk.service.RaonKDownloadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKController - 라온K 다운로드 Controller
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Controller
@Slf4j
public class RaonKDownloadController {
	
	private final RaonKDownloadService raonKDownloadService;
	
	/**
	 * 전체 다운로드 - 압축에 압축 처리
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = "/common/raonk/download.irs")
	public NexacroFileResult download(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		log.debug("-------------------- 라온K - 전체 다운로드 Controller 호출! ---------------------------");
		
		String downloadArchiveFileNm = RaonKFileUtil.DEFAULT_ARCHIVE_FILE_NAME + "_" + DateUtil.getDate("yyyyMMddHHmmss") + RaonKFileUtil.DEFAULT_ARCHIVE_FILE_EXT;
		
		RaonKFileDownloadVo fileDownloadVo = raonKDownloadService.getDownloadVo(request, "dsMultiDownload", downloadArchiveFileNm);
		
		File file = null;
		String downloadFileNm = StringUtils.EMPTY;
		String contentType = StringUtils.EMPTY;
		
		if(fileDownloadVo == null) {
			log.error("[라온K - 전체 다운로드 실패]");
		} else {
			if(ObjectUtils.isEmpty(fileDownloadVo.getArchiveFile())) {
				log.error("[라온K - 전체 다운로드 실패 - 파일없음]");
			} else {
				log.debug("[라온K - 전체 다운로드 성공]");
				file = fileDownloadVo.getArchiveFile();
				downloadFileNm = fileDownloadVo.getDownloadFileNm();
				contentType = fileDownloadVo.getContentType();
			}
		}
		
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(downloadFileNm);
		nexacroFileResult.setContentType(contentType);
		return nexacroFileResult;
	}
	
	/**
	 * 지정파일 전체 다운로드 - 압축 처리, 동일한 파일명은 index를 부여한다.
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = "/common/raonk/selected/download.irs")
	public NexacroFileResult selectedDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		log.debug("-------------------- 라온K - 지정파일 전체 다운로드 Controller 호출! ---------------------------");
		
		String downloadArchiveFileNm = RaonKFileUtil.DEFAULT_ARCHIVE_FILE_NAME + "_" + DateUtil.getDate("yyyyMMddHHmmss") + RaonKFileUtil.DEFAULT_ARCHIVE_FILE_EXT;
		
		RaonKFileDownloadVo fileDownloadVo = raonKDownloadService.getSelectedDownloadVo(request, "dsSelectedMultiDownload", downloadArchiveFileNm);
		
		File file = null;
		String downloadFileNm = StringUtils.EMPTY;
		String contentType = StringUtils.EMPTY;
		
		if(fileDownloadVo == null) {
			log.error("[라온K - 지정파일 전체 다운로드 실패]");
		} else {
			if(ObjectUtils.isEmpty(fileDownloadVo.getArchiveFile())) {
				log.error("[라온K - 지정파일 전체 다운로드 실패 - 파일없음]");
			} else {
				log.debug("[라온K - 지정파일 전체 다운로드 성공]");
				file = fileDownloadVo.getArchiveFile();
				downloadFileNm = fileDownloadVo.getDownloadFileNm();
				contentType = fileDownloadVo.getContentType();
			}
		}
		
		NexacroFileResult nexacroFileResult = new NexacroFileResult(file);
		nexacroFileResult.setOriginalName(downloadFileNm);
		nexacroFileResult.setContentType(contentType);
		return nexacroFileResult;
	}
	
	/**
	 * 전체 다운로드 체크
	 * 
	 * @param dsMultiDownload
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = "/common/raonk/check/download.irs")
	public NexacroResult checkDownload(@ParamDataSet(name = "dsSendFileDetail") List<Map<String, Object>> dsSendFileDetail) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("-------------------- 라온K - 전체 다운로드 체크 Controller 호출! ---------------------------");
		
		boolean result = false;
		
		try {
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파일정보 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			log.debug("전체 다운로드 체크 실행! ---------------------------");
			result = raonKDownloadService.checkDownloadVo(dsSendFileDetail);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 가능 여부 결과 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			if(!result) {
				/* 파일다운로드 대상 파일이 존재하지 않습니다. */
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_NOT_FOUND, "FILE NOT FOUND"));
			}
			
		} catch (Exception e) {
			/* 파일다운로드 처리중 오류가 발생하였습니다. */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_UNKNOWN_ERROR, e));
		}
		
		return nexacroResult;
	}
	
	/**
	 * 지정파일 전체 다운로드 체크
	 * 
	 * @param dsSelectedMultiDownload
	 * @return
	 * @throws Exception
	 */
	@PostMapping(value = "/common/raonk/check/selected/download.irs")
	public NexacroResult checkSelectedDownload(@ParamDataSet(name = "dsSendFileDetail") List<Map<String, Object>> dsSendFileDetail) throws Exception {
		NexacroResult nexacroResult = new NexacroResult();
		
		log.debug("-------------------- 라온K - 지정파일 전체 다운로드 체크 Controller 호출! ---------------------------");
		
		boolean result = false;
		
		try {
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. 파일정보 조회 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			log.debug("지정파일 전체 다운로드 체크 실행! ---------------------------");
			result = raonKDownloadService.checkSelectedDownloadVo(dsSendFileDetail);
			
			/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. 파일다운로드 가능 여부 결과 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
			if(!result) {
				/* 파일다운로드 대상 파일이 존재하지 않습니다. */
				CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_NOT_FOUND, "FILE NOT FOUND"));
			}
			
		} catch (Exception e) {
			/* 파일다운로드 처리중 오류가 발생하였습니다. */
			CoreUtil.setCommonResponse(nexacroResult, CoreUtil.getCoreResponse(HttpStatus.OK, JwtAuthEnum.FILE_UNKNOWN_ERROR, e));
		}
		
		return nexacroResult;
	}
}