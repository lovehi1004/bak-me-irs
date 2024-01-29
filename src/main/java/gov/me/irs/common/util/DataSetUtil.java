package gov.me.irs.common.util;


import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.nexacro.java.xapi.data.DataSet;

import gov.me.irs.common.constants.Const;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * DataSetUtil
 * 	- Nexacro N 데이터셋 관련 공통
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class DataSetUtil {
	

	/**
	 * request정보로 부터 DataSet 읽어오기
	 * 
	 * @param request
	 * @param dsName
	 * @return DataSet Object
	 */
	public DataSet getDataSet(HttpServletRequest request, String dsName) {
		/* 넥사크로 예제 구간 START */
		//파일정보를 담고있는 XML문자열(Dataset 의 saveXML())
		String dsInfoXml = request.getParameter(dsName);
		
		DataSet dataSet = null;
		
		//파일정보 Dataset saveXML 문자열
		if(dsInfoXml != null) {
			
			log.debug("■■■■■■■■■■■ [dsInfoXml][{}]", dsInfoXml);
			
			dataSet = new DataSet(dsName);
			dsInfoXml = dsInfoXml.replaceAll("&lt;", "<").replaceAll("&quot;", "\"").replaceAll("&gt;", ">");
			
			dataSet.loadXml(dsInfoXml);
		}
		/* 넥사크로 예제 구간 END */
		
		return dataSet;
	}
	
	/**
	 * request정보로 부터 DataSet 읽어오기
	 * 
	 * @param request
	 * @param dsName
	 * @return Map
	 */
	@SuppressWarnings("unchecked")
	public Map<String, Object> getMap(HttpServletRequest request, String dsName) {
		DataSet dataSet = this.getDataSet(request, dsName);
		
		int rowCount = dataSet.getRowCount();
		if(rowCount == Const.NUMERIC.ONE) {
			return dataSet.getRowToMap(Const.NUMERIC.ZERO);
		} else {
			return null;
		}
		
	}
	
}