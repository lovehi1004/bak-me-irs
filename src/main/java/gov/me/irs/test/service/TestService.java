package gov.me.irs.test.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.test.mapper.TestMapper;

import lombok.RequiredArgsConstructor;

/**
 * Test Service 예제
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class TestService {
	
	private final TestMapper testMapper;

	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectTest() {
		return testMapper.selectTest();
	}
	
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectTestList() {
		return testMapper.selectTestList();
	}
}
