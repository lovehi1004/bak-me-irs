package gov.me.irs.admin.pim.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 개인정보취급이력 관리 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface PimMapper {
	
	/**
	 * 개인정보취급이력 목록 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	int selectPrivacyInquiryHistoryListCnt(Map<String, Object> requestMap);
	
	/**
	 * 개인정보취급이력 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectPrivacyInquiryHistoryList(Map<String, Object> requestMap);
	
}