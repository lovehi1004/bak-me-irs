package gov.me.irs.test.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.GsonBuilder;

import gov.me.irs.test.mapper.TestReportMapper;
import lombok.RequiredArgsConstructor;

/**
 * TestReportService 예제
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class TestReportService {
	
	private final TestReportMapper testReportMapper;
	
	@Transactional(rollbackFor = Exception.class)
	public String selectTestList(Map<String, Object> requestMap) {
		
		List<Map<String, Object>> list = testReportMapper.selectTestReportList(requestMap);
		
		Map<String, Object> body = new HashMap<String, Object>();
		body.put("list1", list);
		
		return new GsonBuilder().setPrettyPrinting().serializeNulls().create().toJson(body);
	}
}
