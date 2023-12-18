package gov.me.irs.core.raonk.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.vo.RaonKFileGroupVo;
import gov.me.irs.common.file.vo.RaonKFileStatusVo;
import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.RaonKFileUtil;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.raonk.mapper.RaonKMapper;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKService - 라온K Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RaonKService {
	
	private final RaonKMapper raonKMapper;
	
	private final RaonKFileUtil raonKFileUtil;
	
	/**
	 * [공통] 라온K - 파일목록 조회
	 * 
	 * @param nexacroResult
	 * @param 
	 * 		- dsSendFileGroupDetail ▶ {fileGroupMgno : "조회대상 파일그룹식별키 또는 공백", menuMgno : "메뉴ID 또는 공백", uploadType : "S 또는 M"}
	 * 
	 * 결과정보
	 * 		- dsFileDetail ▶ RaonKFileVo.java
	 * 		- dsFileStatusDetail ▶ RaonKFileStatusVo.java - {fileGroupMgno : "파일그룹식별키 또는 채번된 식별키", issueYn : "Y|N"}
	 * 		- dsSendFileGroupDetail ▶ input 정보
	 * 
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void selectFileList(NexacroResult nexacroResult, Map<String, Object> dsSendFileGroupDetail) throws Exception {
		
		//파일정보
		List<RaonKFileVo> fileList = new ArrayList<RaonKFileVo>();
		//파일상태정보
		RaonKFileStatusVo raonKFileStatusVo = new RaonKFileStatusVo();
		
		/* 그룹식별자가 존재한다면 - 파일목록 조회 */
		if(!ObjectUtils.isEmpty(dsSendFileGroupDetail.get("fileGroupMgno"))) {
			
			String fileGroupMgno = (String) dsSendFileGroupDetail.get("fileGroupMgno");
			/* 조회조건 파일정보 조립하기 */
			RaonKFileVo vo = RaonKFileVo.builder()
					.fileGroupMgno(fileGroupMgno)
					.delYn(Const.DEL.N)
					.build();
			
			/* 조회하기 */
			fileList = raonKMapper.selectFileList(vo);
			
			raonKFileStatusVo = RaonKFileStatusVo.builder()
					.fileGroupMgno(fileGroupMgno)
					.issueYn(Const.NEW.N)
					.build();
			
			
			log.debug("[그룹식별자가 존재한다면][{}]", raonKFileStatusVo);
			
		/* 그룹식별자가 존재하지 않는다면 - 그룹식별자 채번하기 */
		} else {
			
			/* 1. 세션정보 확인 하기 */
			String sUserId = "SYSTEM";				// 비로그인 상태 Default 설정
			
			if(UserSession.isAuthenticated()) {
				sUserId = UserSession.getUserId();
			}
			
			/* 파라미터 추출 */
			String menuMgno = (String) dsSendFileGroupDetail.get("menuMgno");
			String uploadType = (String) dsSendFileGroupDetail.get("uploadType");
			
			RaonKFileGroupVo raonKFileGroupVo = RaonKFileGroupVo.builder()
					.menuMgno(menuMgno)
					.fileTypeClCd("S".equals(uploadType) ? Const.UPLOAD.SINGLE : Const.UPLOAD.MULTI)
					.rgtrId(sUserId)
					.build();
			
			raonKMapper.insertFileGroup(raonKFileGroupVo);
					
			raonKFileStatusVo = RaonKFileStatusVo.builder()
					.fileGroupMgno(raonKFileGroupVo.getFileGroupMgno())
					.issueYn(Const.NEW.Y)
					.build();
			
			/* 파일그룹식별키 설정 */
			dsSendFileGroupDetail.put("fileGroupMgno", raonKFileGroupVo.getFileGroupMgno());
			
			log.debug("[그룹식별자가 존재하지 않는다면][{}]", raonKFileStatusVo);
		}
		
		/* 2. 파일업로드 응답전용 데이터셋 생성하기 */
		DataSet outputDs = new DataSet("dsFileDetail");							//output 데이터셋명 - 파일정보
		outputDs.addColumn("fileGroupMgno", PlatformDataType.STRING);
		outputDs.addColumn("fileMgno", PlatformDataType.STRING);
		outputDs.addColumn("orgnlFileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileNm", PlatformDataType.STRING);
		outputDs.addColumn("fileSz", PlatformDataType.INT);
		outputDs.addColumn("fileExtnNm", PlatformDataType.STRING);
		outputDs.addColumn("regDt", PlatformDataType.STRING);
		outputDs.addColumn("delYn", PlatformDataType.STRING);
		
		if(fileList.size() > Const.NUMERIC.EMPTY_LIST) {
			for (RaonKFileVo vo : fileList) {
				int row = outputDs.newRow();
				outputDs.set(row, "fileGroupMgno", vo.getFileGroupMgno());
				outputDs.set(row, "fileMgno", vo.getFileMgno());
				outputDs.set(row, "orgnlFileNm", vo.getOrgnlFileNm());
				outputDs.set(row, "fileNm", vo.getFileNm());
				outputDs.set(row, "fileSz", vo.getFileSz());
				outputDs.set(row, "fileExtnNm", vo.getFileExtnNm());
				outputDs.set(row, "regDt", vo.getRegDt());
				outputDs.set(row, "delYn", vo.getDelYn());
			}
		}
		
		nexacroResult.addDataSet(outputDs);										//파일정보
		nexacroResult.addDataSet("dsFileStatusDetail", raonKFileStatusVo);			//파일상태정보 {상태값(채번여부), 그룹키(채번|input값)}
		nexacroResult.addDataSet("dsSendFileGroupDetail", dsSendFileGroupDetail);	//input 정보
	}
	
	/**
	 * 파일정보 최종저장처리
	 * 
	 * @param 
	 * 		- dsSendFileGroupDetail ▶ {fileGroupMgno : "조회대상 파일그룹식별키 또는 공백", menuMgno : "메뉴ID 또는 공백", uploadType : "S 또는 M"}
	 * @param
	 * 		- dsFileDetail ▶ RaonKFileVo.java, 최종 저장처리 대상 파일정보 - 목록
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public boolean saveFile(Map<String, Object> dsSendFileGroupDetail, List<Map<String, Object>> dsFileDetail) throws Exception {
		
		
		/* 필수 파라미터 추출 */
		String fileGroupMgno = (String) dsSendFileGroupDetail.get("fileGroupMgno");
				
		/* 1. 세션정보 확인 하기 */
		String sUserId = "TEST";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			sUserId = UserSession.getUserId();
		}
		
		log.debug("[파일정보 최종저장처리][{}][{}][{}]", sUserId, dsFileDetail, dsSendFileGroupDetail);

		boolean result = false;
		
		String realPath = raonKFileUtil.getRealFilePath();
		
		/* 월별 저장소 */
		String yyyyMM = DateUtil.getDate("yyyyMM");
		realPath = realPath + "/" + yyyyMM;
		
		RaonKFileVo raonKFileVo = new RaonKFileVo();
		raonKFileVo.setFileGroupMgno(fileGroupMgno);																			//화면에서 넘어온 파일그룹 KEY
		raonKFileVo.setMdfrId(sUserId);
		
		raonKMapper.deleteFile(raonKFileVo);
		
		for (Map<String, Object> fileMap : dsFileDetail) {
			
			String fileMgno = (String) fileMap.get("fileMgno");
			
			/* 1. 현재상태의 대상 파일 조회 */
			RaonKFileVo paramVo = new RaonKFileVo();
			paramVo.setFileGroupMgno(fileGroupMgno);
			paramVo.setFileMgno(fileMgno);
			RaonKFileVo currentRaonKFileVo = raonKMapper.selectFileDtl(paramVo);
			
			/* 2-1. 신규 업로드 파일이라면 임시경로에서 실제경로로 이동 */
			if(Const.DEL.Y.equals(currentRaonKFileVo.getDelYn())) {
				/* 임시경로에서 실제경로로 이동 */
				
				Path oldPath = Paths.get(currentRaonKFileVo.getFilePath(), currentRaonKFileVo.getFileNmWithExt());
				Path newPath = Paths.get(realPath, currentRaonKFileVo.getFileNmWithExt());
				
				File file = new File(realPath);
				if(!file.exists()) {
					file.mkdirs();
				}
				
				Files.move(oldPath, newPath);
				
				/* 이동할 경로 */
				currentRaonKFileVo.setFilePath(realPath);
				
				currentRaonKFileVo.setMdfrId(sUserId);
				raonKMapper.saveFile(currentRaonKFileVo);
					
			}
			/* 2-2. 기존 업로드 파일이라면 - 아무것도 하지 않기 */
			
		}
		
		result = true;
		
		return result;
	}
	
	/**
	 * 차수 생성 전용 파일정보 복제 후 생성된 파일그룹일련번호 반환받기
	 * 
	 * @param sourceFileGroupMgno -  파일그룹일련번호
	 * @return 복제된 파일그룹일련번호
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public String saveCloneFile(String sourceFileGroupMgno) throws Exception {
		
		/* 1. 세션정보 확인 하기 */
		String sessionUserId = "SYSTEM";				// 비로그인 상태 Default 설정
		
		if(UserSession.isAuthenticated()) {
			TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
			sessionUserId = tableUser.getUserId();
		}
		
		List<String> fileMgnoArray = new ArrayList<String>();
		
		RaonKFileGroupVo parameterFileGroupVo = RaonKFileGroupVo.builder()
				.sourceFileGroupMgno(sourceFileGroupMgno)
				.rgtrId(sessionUserId)
				.build();
		
		raonKMapper.insertCloneFileGroup(parameterFileGroupVo);
		/* 복제된 파일그룹일련번호 */
		String fileGroupMgno = parameterFileGroupVo.getFileGroupMgno();
		
		raonKMapper.insertCloneFileDtl(parameterFileGroupVo);
		
		List<RaonKFileVo> cloneList = raonKMapper.selectCloneFileList(parameterFileGroupVo);
		
		/* 물리파일 복제 하기 */
		for (RaonKFileVo raonKFileVo : cloneList) {
			
			Path oldPath = Paths.get(raonKFileVo.getFilePath(), raonKFileVo.getFileNmWithExt());
			
			raonKFileVo.setCloneFileNm(raonKFileUtil.getTempFilename());
			Path newPath = Paths.get(raonKFileVo.getFilePath(), raonKFileVo.getCloneFileNmWithExt());
			
			Files.copy(oldPath, newPath);
			
			raonKMapper.updateCloneFileNm(raonKFileVo);
			
			fileMgnoArray.add(raonKFileVo.getFileMgno());
			
		}
		
		return fileGroupMgno;
	}
	
	/**
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 참고 샘플 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 * 
	 * [공통] 라온K - 최종 저장처리 예제 서비스
	 * 
	 * @param 
	 * 		- dsSendFileGroupDetail ▶ {fileGroupMgno : "조회대상 파일그룹식별키 또는 공백", menuMgno : "메뉴ID 또는 공백", uploadType : "S 또는 M"}
	 * @param dsFileDetail
	 * 		- dsFileDetail ▶ RaonKFileVo.java, 최종 저장처리 대상 파일정보 - 목록
	 * 
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public void saveTestFile(Map<String, Object> dsSendFileGroupDetail
			, List<Map<String, Object>> dsFileDetail
			) throws Exception {
		
		/* ■■■■■■■■■■■■■■■■■■■■ 파일정보 최종저장처리 START ■■■■■■■■■■■■■■■■■■■■ */
		this.saveFile(dsSendFileGroupDetail, dsFileDetail);
		/* ■■■■■■■■■■■■■■■■■■■■ 파일정보 최종저장처리 END ■■■■■■■■■■■■■■■■■■■■ */

	}
	/**
	 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 참고 샘플 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	 */
	
	
	
}
