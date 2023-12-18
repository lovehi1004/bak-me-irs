package gov.me.irs.common.file.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.core.config.property.Sn3hcvProperties;
import gov.me.irs.core.raonk.mapper.RaonKMapper;
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
	
	private final RaonKMapper raonKMapper;
	
	private final Sn3hcvProperties props;
	
	/**
	 * 문서미리보기 - 파일변환 처리
	 * @param vo
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> convert(RaonKFileVo vo, HttpServletRequest request) throws Exception {
		
		log.debug("["+this.getClass().getName()+"][executeTransformDoc] START");
		
		RaonKFileVo raonKFileVo = raonKMapper.selectFileDtl(vo);
		
		String inputFile = raonKFileVo.getFileFullPath();
		String outputPath = raonKFileVo.getFilePath();
		String resultName = raonKFileVo.getFileGroupMgno() + "_" + raonKFileVo.getFileMgno();
		
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
			
			raonKMapper.updateDwldCount(raonKFileVo);
			
			resultMap.put("fileGroupMgno", raonKFileVo.getFileGroupMgno());
			resultMap.put("fileMgno", raonKFileVo.getFileMgno());
			
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
