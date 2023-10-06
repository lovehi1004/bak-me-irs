package gov.me.irs.core.synap.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.lang.ProcessBuilder.Redirect; // jdk 1.7 이상
import java.util.Arrays;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.stereotype.Component;

import gov.me.irs.core.config.property.Sn3hcvProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 사이냅소프트 - 가이드1
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Component
@Slf4j
public class SynapConverter {
	
	private final Sn3hcvProperties props;

	/*
	 * 변환 호출
	 * inputFile : 변환 대상 파일의 절대 경로 ▶ 변환대상 파일시스템 경로 - 파일업로드 원본파일 물리경로
	 * outputPath : 변환된 HTML 파일 저장 경로 ▶ 외부URL로 접근가능한 파일시스템 경로로 사용된 파일시스템 경로 - WEB_ROOT 이하의 경로만 사용한다.
	 * resultName : 생성할 HTML 파일명 (ex; sample => sample.htm 파일 생성됨) ▶ doc.html 에서 사용할 fn 파라미터 값
	 * return : 0 (변환 성공), 0 이외의 값 (변환 실패)
	 * 
	 * 
	 * - Ex.> 사용예
	 * 		▶ 변환
	 * 			convertToHtml("변환대상 파일시스템 절대경로", "WEB ROOT 이하 하위 상태경로", "변환 후 문서미리보기에서 사용할 사용할 키");
	 * 		▶ 미리보기
	 * 			http://dev.admin.sems/sol/viewer/skin/doc.html?fn="변환 후 문서미리보기에서 사용할 사용할 키"&rs="WEB ROOT 이하 하위 상태경로"
	 */
	public int convert(String inputFile, String outputPath, String resultName) {

		log.debug("[" + this.getClass().getName() + "][convertToHtml] START");

		outputPath = props.web.root + outputPath; /* WEB ROOT 를 지정한다. */
		
		log.debug("[SynapConverter.java] inputFile >>> " + inputFile);
		log.debug("[SynapConverter.java] outputPath >>> " + outputPath);
		log.debug("[SynapConverter.java] resultName >>> " + resultName);

		File file = new File(outputPath);

		if(!file.exists()) {
			boolean resultMkdirs = file.mkdirs();
			log.debug("[resultMkdirs][" + String.valueOf(resultMkdirs) + "]");
		}

		// 기존 변환 결과 존재 여부 확인
		File htmlFile = new File(outputPath + "/" + resultName + ".xml");
		File htmlDir = new File(outputPath + "/" + resultName + ".files");

		// 기존 변환 결과가 존재하지 않을 경우 변환 실행
		if(!htmlFile.exists() || !htmlDir.isDirectory()) {
			// 문서미리보기 프로세스 실행을 위한 인자 준비
			String[] cmd = { props.sn3hcv, "-t", props.template, "-mod_path", props.modules, inputFile, outputPath, resultName };
			log.debug("[cmd][" + Arrays.asList(cmd) + "]");
			
			try {
				Timer t = new Timer();

				// JDK 1.7 이상
				ProcessBuilder builder = new ProcessBuilder(cmd);
				builder.redirectOutput(Redirect.INHERIT);
				builder.redirectError(Redirect.INHERIT);
				Process proc = builder.start();

				TimerTask killer = new TimeoutProcessKiller(proc);
				// 기존 600초에서 최초 클릭 시 에러로 인하여 변환대기시간 줄임
				t.schedule(killer, 300000); // 300초 (변환이 300초 안에 완료되지 않으면 프로세스 종료)
//				t.schedule(killer, 600000); // 600초 (변환이 600초 안에 완료되지 않으면 프로세스 종료)

				// 실행 결과 값(0이 아닐 시 확인 필요)
				int exitValue = proc.waitFor();
				killer.cancel();
				
				log.debug("[exitValue][" + exitValue + "]");

				// cmd 실행 결과 코드값이 0이 아니라면 결과값을 출력(ex. Error 254 = 라이센스 만료 등등)
				if(proc.exitValue() != 0) {
					try {
						Map<String, String> errorCode = new LinkedHashMap<String, String>();
						errorCode.put("2, 21", "변환을 지원하지 않는 파일일 경우");
						errorCode.put("3", "암호화된 파일일 경우");
						errorCode.put("4", "DRM이 걸려 있는 파일일 경우");
						errorCode.put("6", "결과 HTML 파일을 출력할 디렉토리가 없을 경우");
						errorCode.put("7", "결과 HTML 파일을 출력할 디렉토리에 쓰기 권한이 없을 경우");
						errorCode.put("9", "지원하지 않는 알고리즘으로 암호화된 문서인 경우");
						errorCode.put("22", "변환하려는 문서가 멜웨어로 의심되는 경우");
						errorCode.put("31", "변환 결과에 워터마크를 적용할 수 없는 경우");
						errorCode.put("52", "mod_path 에 설정한 디렉토리가 잘못됐을 경우");
						errorCode.put("53", "Template 디렉토리가 없을 경우");
						errorCode.put("54", "기타 오류로, 상세 오류 코드를 확인해야 합니다");
						errorCode.put("253", "사용 가능한 CPU core 개수를 초과하였을 경우");
						errorCode.put("254", "실행 가능 제한 날짜를 초과하였을 경우(라이센스 만료)");
						
						for (Entry<String, String> entrySet : errorCode.entrySet()) {
							log.info(entrySet.getKey() + " : " + entrySet.getValue());
						}
						
						String target = Integer.toString(exitValue);
						
						log.info("=====================================");
						if(errorCode.containsKey(target)) {
							log.info("Result Code = " + target + " : " + errorCode.get(target));
						} else {
							log.info("Result Code = " + target + " : " + "일치하는 에러 코드가 없습니다.");
						}
						log.info("=====================================");
						
						String line = "";
						BufferedReader resultOut = new BufferedReader(new InputStreamReader(proc.getInputStream()));
						
						int index = 0;
						while((line = resultOut.readLine()) != null) {
							log.info(index + " line : " + line);
						}
						resultOut.close();
					} catch(Exception e) {
						log.error("[synap error][{}]", e);
					}
				}
				return exitValue;
			} catch(Exception e) {
				log.error("[synap error][{}]", e);
				return -1;
			}
		} else {
			return 0; // 기존 변환 결과가 존재함. 정상 변환으로 처리
		}
	}

	// 저장 경로에 월별 폴더 생성
	public String makeMonthDir(String outputPath) {
		Calendar cal = Calendar.getInstance();
		String dateString = String.format("%04d%02d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH) + 1);
		File targetDir = new File(outputPath + File.separator + dateString);

		if(!targetDir.exists()) {
			targetDir.mkdirs();
		}

		return targetDir.getAbsolutePath();
	}
}
