package gov.me.irs.common.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.vo.FileVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * ExcelUtil - poi전용
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class CsvUtil {
	
	private final FileUtil fileUtil;
	
	/**
	 * CSV 파일 생성하기
	 * 
	 * @param headerMatrix
	 * @param cellMatrix
	 * @param dataList
	 * @param sheetname
	 * @return
	 * @throws Exception 
	 */
	public File getCsvFile(String[] headerList, List<Map<String, Object>> dataList) throws Exception {
		
		if(dataList.size() > Const.NUMERIC.EMPTY_LIST) {
			/* 헤더키 총건수가 데이터 item 총건수보다 크면 논리적 모순 이므로 예외처리 */
			if(headerList.length > dataList.get(0).size()) {
				throw new Exception("check headerList size");
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 1. CSV파일 - 임시파일 생성하기 ■■■■■■■■■■■■■■■■■■■■ */
		FileVo tempVo = new FileVo();
		tempVo.setFilePathNm(fileUtil.getTempFilePendingDeleteWeeklyPathNm());
		tempVo.setFileNm(fileUtil.getTempFilename());
		
		File file = new File(tempVo.getFileFullPath());
		
		File directory = new File(tempVo.getFilePathNm());
		if(!directory.exists()) {
			directory.mkdirs();
		}
		
		file.createNewFile();
		
		OutputStreamWriter osw = null;
		BufferedWriter bf = null;
		try {
			osw = new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8.name());
			bf = new BufferedWriter(osw);
			/* 1. 한글깨짐 방지 설정 */
			bf.write("\uFEFF");
			
			/* 2. 헤더 출력 */
			bf.write(String.join(Const.SYMBOL.COMMA, headerList));
			bf.newLine();
			
			/* 3. 바디 출력 */
			for (Map<String, Object> map : dataList) {
				
				StringBuffer sb = new StringBuffer();
				
				for (int idx = 0; idx < headerList.length; idx++) {
					if(idx != 0) {
						sb.append(Const.SYMBOL.COMMA);
					}
					sb.append(map.get(headerList[idx]));
				}
				bf.write(sb.toString());
				bf.newLine();
				
			}
			
			log.debug("CSV file created successfully.");
			
		} catch (IOException e) {
			log.error("[CSV 생성중 실패][{}]", e);
			throw e;
		} finally {
			if(bf != null) {
				bf.close();
			}
			if(osw != null) {
				osw.close();
			}
		}
		
		return file;
		
	}
	
}
