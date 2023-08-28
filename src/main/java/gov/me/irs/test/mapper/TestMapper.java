package gov.me.irs.test.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * Test Mapper 예제
 * 
 * @author Justin
 *
 */
@Mapper
public interface TestMapper {
	
	Map<String, Object> selectTest();
	
	List<Map<String, Object>> selectTestList();
	
}