package gov.me.irs.common.code.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * [공통] 방법론관리 > 방법론 현황 관리 Mapper
 * 
 * @author 홍길동
 *
 */
@Mapper
public interface CommonCodeMapper {
	
	List<Map<String, Object>> selectErrMsgList();
	
	/**
	 * [공통] 사업분야 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBizFldList();
	
	/**
	 * [공통] 사업 세부분야 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectBizDtlsFldList();
	
	/**
	 * [공통] 사업 세부분야 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectMnofcCdList();
	
	/**
	 * [공통] 사업 세부분야 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	List<Map<String, Object>> selectNtnCdList();

}
