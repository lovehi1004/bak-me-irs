package gov.me.irs.scheduler.test.task;
import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import gov.me.irs.scheduler.test.service.TestTaskService;

/**
 * 스케줄러 테스트용 Task
 * 
 * @author Justin
 *
 */
@SuppressWarnings("unused")
@RequiredArgsConstructor
@Slf4j
@Component
public class TestTask {
	
	private final TestTaskService testTaskService;
	
	/**
	 * 테스트용 Task - 1000 ms 지연실행, 2000 ms 주기
	 */
//	@Scheduled(cron = "30 00 1,13 * * *")			// cron 표현식 예
//    @Scheduled(fixedDelayString = "1000", initialDelayString = "2000")
    public void runTestTask() {
    	
    	log.debug("[스케줄러 실행 시작!]");
    	
    	List<Map<String, Object>> resultList = testTaskService.selectTestTaskList();
    	for (Map<String, Object> map : resultList) {
    		log.debug("[map][{}]", map);
		}
    	
    	log.debug("[스케줄러 실행 종료!]");
    	
    }
    
}
