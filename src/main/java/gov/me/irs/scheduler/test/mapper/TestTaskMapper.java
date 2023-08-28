package gov.me.irs.scheduler.test.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 스케줄러 테스트용 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface TestTaskMapper {
	
	List<Map<String, Object>> selectTestTaskList();
	
}