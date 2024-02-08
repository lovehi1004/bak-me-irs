package gov.me.irs.scheduler.daily.nti.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 메세지 전송 Mapper
 * 
 * @author woosm
 *
 */
@Mapper
public interface SmsCertVldSendTaskMapper {
	
	List<Map<String, Object>> selectSmsSendCertVldList();
	
	int insertSmsTrgt(Map<String, Object> map);
	
	List<Map<String, Object>> selectTrgt();
}