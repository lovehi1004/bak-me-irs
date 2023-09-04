package gov.me.irs.test.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * TestReportMapper 예제
 * 
 * @author Justin
 *
 */
@Mapper
public interface TestReportMapper {
	
	List<Map<String, Object>> selectTestReportList(Map<String, Object> requestMap);
	
}