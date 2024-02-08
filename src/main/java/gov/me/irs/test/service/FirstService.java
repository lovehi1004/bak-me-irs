package gov.me.irs.test.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.test.mapper.FirstMapper;
import gov.me.irs.test.vo.FirstVo;
import lombok.RequiredArgsConstructor;

/**
 * FirstService 예제
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class FirstService {
	
	private final FirstMapper firstMapper;
	
	/**
	 * 테스트 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@SuppressWarnings("unused")
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectFirstList(Map<String, Object> requestMap) {

		/* vo 사용법 첫번째 */
		FirstVo vo1 = FirstVo.builder()
			.columnOne("컬럼01")
			.columnTwo("컬럼02")
			.columnThree("컬럼03")
			.build();
		
		/* vo 사용법 두번째 */
		FirstVo vo2 = new FirstVo();
		vo2.setColumnOne("컬럼01");
		vo2.setColumnTwo("컬럼02");
		vo2.setColumnThree("컬럼03");
		
		/* 업무 로직 기입 */
		return firstMapper.selectFirstList(requestMap);
	}
}
