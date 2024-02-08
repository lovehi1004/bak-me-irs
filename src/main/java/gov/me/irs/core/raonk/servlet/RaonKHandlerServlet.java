package gov.me.irs.core.raonk.servlet;

import java.io.IOException;
import java.util.Base64;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.raonwiz.kupload.RAONKHandler;
import com.raonwiz.kupload.event.AfterDownloadEventListener;
import com.raonwiz.kupload.event.AfterUploadEventListener;
import com.raonwiz.kupload.event.BeforeDownloadEventListener;
import com.raonwiz.kupload.event.BeforeUploadEventListener;
import com.raonwiz.kupload.event.EventClass;
import com.raonwiz.kupload.event.LoggerEventListener;
import com.raonwiz.kupload.util.EventVo;
import com.raonwiz.kupload.util.RAONKParameterVo;

import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.common.util.RaonKFileUtil;
import gov.me.irs.core.config.property.RaonKProperties;
import gov.me.irs.core.raonk.servlet.service.RaonKHandlerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKHandlerServlet - 라온K 파일업로드 Servlet
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class RaonKHandlerServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3176328744919638498L;
	
	private final RaonKFileUtil raonKFileUtil;
	private final RaonKProperties raonKProperties;
	private final RaonKHandlerService raonKHandlerService;
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		log.debug("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ [라온K 파일업로드] START");
		
		request.setCharacterEncoding("UTF-8");
		
		RAONKHandler upload = new RAONKHandler();
		
		RAONKParameterVo parameterVo = new RAONKParameterVo();
		parameterVo.setIsDebugMode(true);
		parameterVo.setLogType("L");
		upload.settingVo.setDebugMode(parameterVo);
		
		///////////////////////////////
		//        이벤트를 등록 처리          //
		///////////////////////////////
		EventClass event = new EventClass();
		
		//파일을 업로드하기 전에 발생하는 이벤트 입니다.
		//파일에 대한 저장 경로를 변경해야 하는 경우 사용합니다.
		event.addBeforeUploadEventListener(new BeforeUploadEventListener() {
			public void beforeUploadEvent(EventVo eventVo) {
				
				log.debug("■■■■■ [이벤트 BeforeUploadEventListener][{}]", eventVo.toString());
				
				log.debug("[BeforeUploadEventListener][파라미터 확인]");
				
				String[] fileGroupMgnoArray = eventVo.getUpload().getParameterValue("fileGroupMgno");
				log.debug("[fileGroupMgnoArray is empty - {}]", ObjectUtils.isEmpty(fileGroupMgnoArray));
				
				/* 필수값 */
				String fileGroupMgno = fileGroupMgnoArray[0];
				log.debug("[fileGroupMgno][{}]", fileGroupMgno);
			}
		});
		
		//파일을 업로드한 후에 발생하는 이벤트 입니다.
		//업로드된 파일을 변경하는 경우 사용됩니다.(DRM처리, Image API 처리)
		//경로가 변경된 경우 Response되는 파일경로도 변경해야 합니다.(ResponseFileServerPath)
		event.addAfterUploadEventListener(new AfterUploadEventListener() {
			public void afterUploadEvent(EventVo eventVo) {
				
				log.debug("■■■■■ [이벤트 AfterUploadEventListener][{}]", eventVo.toString());
				
				//경로 암호화 설정을 합니다.
//		        eventVo.setPathEncrypt(true);					/* [raonkhandler_path_encrypt.jsp] 샘플 1/2 - 20231128090300 */
				
				log.debug("[AfterUploadEventListener][파라미터 확인]");
				
				/* 필수값 */
				String fileGroupMgno = eventVo.getUpload().getParameterValue("fileGroupMgno")[0];
				
				//원본파일명
				String orgnlFileNm = raonKFileUtil.getFilename(eventVo.getOriginalFileName()); //Original File Name
				
				//파일 경로
				String strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
				String filePath = raonKFileUtil.getFileParentPath(strNewFileLocation);
				//파일 명
				String fileNm = eventVo.getGuid();
				//파일확장자명
				String fileExtnNm = raonKFileUtil.getFilenameExtension(eventVo.getOriginalFileName(), false);
				//파일 크기
				String strFileSize = eventVo.getFileSize();
				long fileSz = Long.valueOf(strFileSize);
				
				RaonKFileVo vo = RaonKFileVo.builder()
						.fileGroupMgno(fileGroupMgno)
						.orgnlFileNm(orgnlFileNm)
						.filePath(filePath)
						.fileNm(fileNm)
						.fileExtnNm(fileExtnNm)
						.fileSz(fileSz)
						.build();
				
				log.debug("[RaonKFileVo vo][{}]", vo);

				
				/* 클라이언트에 보내는 서버상의 파일의 물리적인 절대경로를 원본파일명으로 설정한다, 클라이언트에 보내줄 필요가 없는 서버상의 경로정보임 - 20231128153400 */
				eventVo.setResponseFileServerPath(orgnlFileNm); //Change ResponseFileServerPath Value
				
				try {
					/* 파일 업로드정보 생성하기 - 파일상세정보 */
					RaonKFileVo savedRaonKFileVo = raonKHandlerService.saveTemporaryFile(vo);
					
					
					ObjectMapper mapper = new ObjectMapper();
					String fileRowJson = mapper.writeValueAsString(savedRaonKFileVo);
					
					/* Base64 인코딩 */
					String encodedFileRowJson = Base64.getEncoder().encodeToString(fileRowJson.getBytes());
					
					//클라이언트로 Response하려는 Custom Value를 설정합니다.
					eventVo.setResponseCustomValue(encodedFileRowJson);
					
					
				} catch (Exception e) {
					eventVo.setCustomError("999", "사용자오류999"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정
					log.error("[파일상세정보 생성 실패][{}]", e);
				}
			}
		});
		
		//파일을 다운로드하기 전에 발생하는 이벤트 입니다.
		//파일에 대한 다운로드 경로를 변경하거나 서버에서 구해지는 Stream 다운로드로 처리할 경우 사용합니다.
		event.addBeforeDownloadEventListener(new BeforeDownloadEventListener() {
			public void beforeDownloadEvent(EventVo eventVo) {
				
				log.debug("■■■■■ [이벤트 BeforeDownloadEventListener][{}]", eventVo.toString());
				
				//경로 복호화 설정을 합니다.
//		        eventVo.setPathDecrypt(true);					/* [raonkhandler_path_encrypt.jsp] 샘플 2/2 - 20231128090300 */
				
				String[] fullPathArray = eventVo.getDownloadFilePath(); //DownloadFilePath Value
				
				/* 파일상세식별키 */
				String[] customValueArray = eventVo.getDownloadCustomValue();  //DownloadCustomValue
				
				eventVo.setDownloadFilePath(fullPathArray); //Change DownloadFilePath Value
				
				log.debug("[■■■■ 설정 ■■■■ 전 ■■■■ fullPathArray START]");
				for (String s : fullPathArray) {
					log.debug("[fullPathArray-item]["+s+"]");
					
				}
				log.debug("[■■■■ 설정 ■■■■ 전 ■■■■ fullPathArray END]");
				
				boolean isError = false;
				for (int idx = 0; idx < customValueArray.length; idx++) {
					
					/* Base64 인코딩 */
					String decodedCustomValueJson = new String(Base64.getDecoder().decode(customValueArray[idx]));
					
					Map<String, Object> raonKFileMap = new Gson().fromJson(decodedCustomValueJson, new TypeToken<Map<String, Object>>(){}.getType());
					log.debug("[customValueArray-item]["+raonKFileMap+"]");
					
					RaonKFileVo vo;
					try {
						vo = raonKHandlerService.selectFileDtl(raonKFileMap);
						fullPathArray[idx] = vo.getFileFullPath();
					} catch (Exception e) {
						isError = true;
						log.error("[파일다운로드오류][{}]", e);
					}
				}
				
				log.debug("[■■■■ 설정 ■■■■ 후 ■■■■ fullPathArray START]");
				for (String s : fullPathArray) {
					log.debug("[fullPathArray-item]["+s+"]");
					
				}
				log.debug("[■■■■ 설정 ■■■■ 후 ■■■■ fullPathArray END]");
				
				if(isError) {
					eventVo.setCustomError("파일다운로드오류");
					eventVo.setCustomError("999", "처리중 오류가 발생하였습니다."); //Error Code를 설정하실 때에는 900이상의 3자리로 설정
				}
				
				/* 다운로드 물리경로 설정 */
				eventVo.setDownloadFilePath(fullPathArray);
				
				log.debug("[customValueArray END]");
				
			}
		});
		
		event.addAfterDownloadEventListener(new AfterDownloadEventListener() {
			public void afterDownloadEvent(EventVo eventVo) {
				
				log.debug("■■■■■ [이벤트 AfterDownloadEventListener][{}]", eventVo.toString());
				
				/* 파일상세식별키 */
				String[] customValueArray = eventVo.getDownloadCustomValue();  //DownloadCustomValue
				
				for (int idx = 0; idx < customValueArray.length; idx++) {
					
					/* Base64 인코딩 */
					String decodedCustomValueJson = new String(Base64.getDecoder().decode(customValueArray[idx]));
					
					Map<String, Object> raonKFileMap = new Gson().fromJson(decodedCustomValueJson, new TypeToken<Map<String, Object>>(){}.getType());
					log.debug("[customValueArray-item]["+raonKFileMap+"]");
					
					
					try {
						RaonKFileVo raonKFileVo = RaonKFileVo.builder()
								.fileGroupMgno((String) raonKFileMap.get("fileGroupMgno"))
								.fileMgno((String) raonKFileMap.get("fileMgno"))
								.build();
						
						raonKHandlerService.updateDwldCount(raonKFileVo);
					} catch (Exception e) {
						log.error("[파일다운로드오류][{}]", e);
					}
				}
				
			}
		});
		
		//로그 출력 전에 발생하는 이벤트 입니다.
		//로그 출력 전에 로그 정보를 변경하거나 로그 출력 여부를 변경하려는 경우 사용합니다.
		event.addLoggerEventListener(new LoggerEventListener() {
			public void loggerEvent(EventVo eventVo) {
				
				String strDateTime = eventVo.getDatetime(); //DateTime Value
				String strPathInfo = eventVo.getPathInfo(); //PathInfo Value
				String strLogMode = eventVo.getLogMode(); //LogMode Value (FATAL,ERROR,WARN,INFO,DEBUG)
				String strLogText = eventVo.getLogText(); //LogText Value
				
				eventVo.setDatetime(strDateTime); //Change DateTime Value
				eventVo.setPathInfo(strPathInfo); //Change PathInfo Value
				eventVo.setLogMode(strLogMode); //Change LogMode Value (FATAL,ERROR,WARN,INFO,DEBUG)
				eventVo.setLogText(strLogText); //Change LogText Value
				eventVo.setLogWriteFlag(true); // 로그 출력여부 설정
			}
		});
		
		///////////////////////////////
		//         서버모듈 설정              //
		///////////////////////////////
		
		//실제 업로드 할 기본경로 설정 (가상경로와 물리적 경로로 설정 가능)
		//폴더명 제일 뒤에 .과 공백이 있다면 제거하시고 설정해 주세요.(운영체제에서 지원되지 않는 문자열입니다.)
		
		//-------------------- [설정방법1] 물리적 경로 설정 시작 --------------------//
		/* 물리적 경로 START */
		/* setPhysicalPath 에 path지정시 자동으로 폴더가 생성되는거 확인 - 20231127145100 */
		upload.settingVo.setPhysicalPath(raonKProperties.temporary.resultPath);
		
		//임시파일 물리적 경로설정 ( setPhysicalPath에 설정된 경로 + raonktemp )
		upload.settingVo.setTempPath(raonKProperties.temporary.tempPath);
		
		// ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
		String[] arrAllowUploadDirectoryPath = {raonKProperties.temporary.resultPath};
		upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);
		
		// ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
		String[] arrAllowDownloadDirectoryPath = { raonKProperties.real.path };
		upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);
		/* 물리적 경로 END */
		//-------------------- [설정방법1] 물리적 경로 설정 끝 --------------------//
		
		//위에 설정된 임시파일 물리적 경로에 불필요한 파일을 삭제 처리하는 설정 (단위: 일)
		upload.settingVo.setGarbageCleanDay(2);
		
		//***************보안 설정 : 업로드 제한 확장자 설정***************
		//적용에 필요 없는 확장자는 제외하시면 됩니다.
		//setUploadCheckFileExtension 1번째 Parameter : 0-제한,1-허용 , 2번째 Parameter : 확장자 리스트 Array Type
		String[] arrUploadCheckFileExtension = {
				"exe", "bat", "sh", "com", "php"
				, "tmp", "ini", "dll", "jar", "war"
				, "sdf", "eml", "cab", "bin", "bat"
				, "inf", "cmd", "reg", "sys", "msi"
				, "lnk", "java", "class", "jsp", "asp"
		};
		upload.settingVo.setUploadCheckFileExtension(0, arrUploadCheckFileExtension);
		
		ServletContext context = request.getSession().getServletContext();
		
		String result = "";
		try {
			log.debug("[라온K 파일업로드 서비스 호출]");
			log.debug("[context 체크][{}]", context == null);
			
			log.debug("[upload.Process 실행 START]");
			result = upload.Process(request, response, context, event);
			log.debug("[upload.Process 실행 END]");
		} catch (Exception e) {
			log.error("[라온K 파일업로드 예외발생][{}]", e);
			e.printStackTrace();
		}
		
		if(!result.equals("")) {
			log.debug("[upload.Process 의 결과가 존재한다면][{}]", result);
			response.setContentType("text/html");
			ServletOutputStream out = response.getOutputStream();
			out.print(result);
			out.close();
		}
		
		log.debug("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ [라온K 파일업로드] END");
		
	}
}
