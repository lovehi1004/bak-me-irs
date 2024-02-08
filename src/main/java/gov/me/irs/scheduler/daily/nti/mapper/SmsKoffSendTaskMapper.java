package gov.me.irs.scheduler.daily.nti.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 메세지 전송 Mapper(착수보고지연)
 * 
 * @author woosm
 *
 */
@Mapper
public interface SmsKoffSendTaskMapper {
	
	List<Map<String, Object>> selectSmsSendKOffList();
	
	int insertSmsTrgt(Map<String, Object> map);
	
	List<Map<String, Object>> selectTrgt();
}