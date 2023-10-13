package gov.me.irs.common.sms.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 메인 > 공통 - 알림SMS전송 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface SmsMapper {
	
	/**
	 * 메인 > 공통 - 알림SMS전송 - 알림SMS전송
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertSms(Map<String, Object> requestMap);
	
}
