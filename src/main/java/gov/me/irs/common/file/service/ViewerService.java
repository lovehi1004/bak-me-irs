package gov.me.irs.common.file.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.mapper.FileMapper;
import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.core.config.property.Sn3hcvProperties;
import gov.me.irs.core.synap.util.SynapConverter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * FileService
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ViewerService {
	
	private final SynapConverter synapConverter;
	
	private final FileMapper fileMapper;
	
	private final Sn3hcvProperties props;
	
	/**
	 * 문서미리보기 - 파일변환 처리
	 * @param vo
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public Map<String, Object> convert(FileVo vo, HttpServletRequest request) throws Exception {
		
		log.debug("["+this.getClass().getName()+"][executeTransformDoc] START");
		
		FileVo fileVo = fileMapper.selectFileDtl(vo);
		
		String inputFile = fileVo.getFileFullPath();
		String outputPath = fileVo.getFilePathNm();
		String resultName = fileVo.getFileGroupSn() + "_" + fileVo.getFileDtlSn();
		
		log.debug("[inputFile]["+inputFile+"]");
		log.debug("[outputPath]["+outputPath+"]");
		log.debug("[resultName]["+resultName+"]");
		
		/* synapConverter("변환대상 파일시스템 절대경로", "WEB ROOT 이하 하위 상태경로", "변환 후 문서미리보기에서 사용할 사용할 키"); */
		String result = (synapConverter.convert(inputFile, outputPath, resultName) == 0 ? Const.CHARACTER.RESULT.Y : Const.CHARACTER.RESULT.N);			/* return : 0 (변환 성공), 0 이외의 값 (변환 실패) */
		log.debug("[result]["+String.valueOf(result)+"]");
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("result", result);
		
		/* 변환에 성공한 경우만 파라미터정보를 반환한다. */
		if(Const.CHARACTER.RESULT.Y .equals(result)) {
			
			resultMap.put("fileGroupSn", fileVo.getFileGroupSn());
			resultMap.put("fileDtlSn", fileVo.getFileDtlSn());
			
			outputPath = props.rs.root + outputPath;
			
			/* Context Path 가 존재하면 rs에 추가조립 - 문서뷰어 솔루션에서 파라미터로만 판단 Context Path는 조립해서 보내야 됨 */
			String contextPath = request.getContextPath();
			if(!Const.SYMBOL.SLASH.equals(contextPath)) {
				outputPath = contextPath + outputPath;
			}
			
			log.debug("[outputPath to doc.html]["+outputPath+"]");
			
			resultMap.put("rs", outputPath);
			resultMap.put("fn", resultName);
		}
		
		log.debug("["+this.getClass().getName()+"][executeTransformDoc] END");
		
		return resultMap;
	}
	
}
