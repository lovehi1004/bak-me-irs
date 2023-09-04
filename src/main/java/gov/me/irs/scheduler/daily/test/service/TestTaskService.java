package gov.me.irs.scheduler.daily.test.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.scheduler.daily.test.mapper.TestTaskMapper;
import lombok.RequiredArgsConstructor;

/**
 * 스케줄러 테스트용 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class TestTaskService {
	
	private final TestTaskMapper testTaskMapper;

	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectTestTaskList() {
		return testTaskMapper.selectTestTaskList();
	}
}
