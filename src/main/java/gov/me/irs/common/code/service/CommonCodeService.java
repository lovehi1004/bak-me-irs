package gov.me.irs.common.code.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.code.mapper.CommonCodeMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * [공통] 방법론관리 > 방법론 현황 관리 Service
 * 
 * @author 홍길동
 *
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class CommonCodeService {
	
	private final CommonCodeMapper commonCodeMapper;
	
	private static Map<String, Object> errMsgMap = new HashMap<String, Object>();
	
	@PostConstruct
	public void selectErrMsgMap() throws Exception {
		
		log.debug("======================== @PostConstruct start ============================errMsgMap.isEmpty() : " + errMsgMap.isEmpty());
		if(errMsgMap.isEmpty()) {
			synchronized (errMsgMap) {
				if(errMsgMap.isEmpty()) {
					List<Map<String, Object>> list = commonCodeMapper.selectErrMsgList();
					if(list != null && list.size() > 0) {
						for(int i=0; i<list.size(); i++) {
							Map<String, Object> map = (Map<String, Object>)list.get(i);
							
							String errMsgCd = map.get("errMsgCd")==null?"":(String)map.get("errMsgCd");
							String errMsgNm = map.get("errMsgNm")==null?"":(String)map.get("errMsgNm");
							
							errMsgMap.put(errMsgCd, errMsgNm);
						}
					}
				}
			}
		}
		log.debug("======================== @PostConstruct the end ============================");
	}
	
	public static String getErrMsgNm(String errMsgCd) throws Exception {
		String val = "";
		val = errMsgMap.get(errMsgCd)==null?"":(String)errMsgMap.get(errMsgCd);
		return val;
	}

	/**
	 * [공통] 사업분야코드 조회 
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBizFldList() {
		return commonCodeMapper.selectBizFldList();
	}
	
	/**
	 * [공통] 사업 세부분야코드 조회 
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBizDtlFldList() {
		return commonCodeMapper.selectBizDtlFldList();
	}
	
	/**
	 * [공통] 사업 세부분야코드 조회 
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMnofcCdList() {
		return commonCodeMapper.selectMnofcCdList();
	}
	
	/**
	 * [공통] 사업 세부분야코드 조회 
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectNtnCdList() {
		return commonCodeMapper.selectNtnCdList();
	}

}
