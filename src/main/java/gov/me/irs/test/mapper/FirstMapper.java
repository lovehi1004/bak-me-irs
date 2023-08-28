package gov.me.irs.test.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * FirstMapper 예제
 * 
 * @author Justin
 *
 */
@Mapper
public interface FirstMapper {
	
	List<Map<String, Object>> selectFirstList(Map<String, Object> requestMap);
	
}