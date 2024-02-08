package gov.me.irs.scheduler.daily.nti.task;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import gov.me.irs.common.constants.Const;
import gov.me.irs.scheduler.daily.nti.service.HolidayCheck;
import gov.me.irs.scheduler.daily.nti.service.SmsCertVldSendTaskService;

/**
 * 메세지 전송 Task(인증유효기간 알림)
 * 
 * @author woosm
 *
 */
@RequiredArgsConstructor
@Slf4j
@Component
public class SmsCertVldSendTask {
	
	private final SmsCertVldSendTaskService smsSendTaskService;
	private final HolidayCheck holidayCheck;
	/* 프로파일 */
    String profiles = System.getProperty("spring.profiles.active");
	
	/**
	 * 메세지 전송 Task - 1000 ms 지연실행, 2000 ms 주기
	 */
	@Scheduled(cron = "0 0/5 9-18 * * *")			// 매일 9시00분-18시55분 사이에 5분 간격으로 실행
	//@Scheduled(cron = "0 0 9 * * *")			// 매일 오전 9시에 실행
	//@Scheduled(cron = "* * * * * *")			// 매일 오전 9시에 실행
    public void runSmsSendTask() {
    	log.debug("[spring.profiles.active][{}]", profiles);
    	
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
    	Date now = new Date();
    	String today = sdf.format(now);
    	
    	log.debug("yyyyMMdd : "+ today);
    	
    	if(!ObjectUtils.isEmpty(profiles) && Const.PROFILES.PRD.equals(profiles)) {
    	
    		if(holidayCheck.isHoliday(today) == false) {
    			// 인증유효기간 알림 대상
    			List<Map<String, Object>> certVldList = smsSendTaskService.selectSmsSendCertVldList();
    			if(certVldList.size() > 0 && certVldList != null) {
    				for (Map<String, Object> map : certVldList) {
    					log.debug("[certVldList map][{}]", map);
    					smsSendTaskService.insertSmsTrgt(map);
    				}
    			}
    			
    			List<Map<String, Object>> trgtList = smsSendTaskService.selectTrgt();
    			
    			log.debug("[trgtList][{}]", trgtList);
    			
    			for (Map<String, Object> trgtMap : trgtList) {
    				boolean result = this.sendOne(trgtMap);
    				if(result == true) {
    					// smsSendTaskService.updateTrgt(trgtMap);
    				}
    			}
    			log.debug("[스케줄러 실행 종료!]");
    		}
    	}
    }
	
	public boolean sendOne(Map<String, Object> trgtMap) {
		boolean result = false;
//		Message message = new Message();
//        // 발신번호 및 수신번호는 반드시 01012345678 형태로 입력되어야 합니다.
//        message.setFrom("발신번호 입력");
//        message.setTo("수신번호 입력");
//        message.setText("한글 45자, 영자 90자 이하 입력되면 자동으로 SMS타입의 메시지가 추가됩니다.");
//
//        SingleMessageSentResponse response = this.messageService.sendOne(new SingleMessageSendingRequest(message));
//        System.out.println(response);

        return result;
    }
}
