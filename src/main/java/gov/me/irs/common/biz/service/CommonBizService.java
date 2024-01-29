package gov.me.irs.common.biz.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.biz.mapper.CommonBizMapper;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.user.entity.TableUser;
import gov.me.irs.core.user.enumeration.RoleEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommonBizService {

	private final CommonBizMapper commonBizMapper;
	
	/**
	 * [사용자] 권한정보 MAP
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectAuthMap() throws Exception {
		
		Map<String, Object> authMap = new HashMap<String, Object>();
		String sInstMgno = "";			// 로그인한 사람의 기관정보
		String sUserId = "";			// 로그인한 사람의 아이디
		String sInstClsfCd = "";		// 기관 권한정보
		String sUserClCd = "";			// 사용자 권한정보		
		String sUpInstMgno = "";		// 상위기관정보
				
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		sUserId = tableUser.getUserId();
				
		RoleEnum role = UserSession.getRoleEnum();			
				
		// 기관정보 조회
		authMap.put("sUserId", sUserId);			
		Map<String, Object> usrMap = commonBizMapper.selectUsrDetail(authMap);
		if(usrMap != null) {
			sInstMgno = usrMap.get("instMgno")==null?"":(String)usrMap.get("instMgno");	
			sInstClsfCd = usrMap.get("instClsfCd")==null?"":(String)usrMap.get("instClsfCd");	
			sUserClCd = usrMap.get("userClCd")==null?"":(String)usrMap.get("userClCd");	
			sUpInstMgno = usrMap.get("upInstMgno")==null?"":(String)usrMap.get("upInstMgno");	
			
			authMap.put("sInstMgno", 	sInstMgno);
			authMap.put("sInstClsfCd", 	sInstClsfCd);
			authMap.put("sUserClCd", 	sUserClCd);
			authMap.put("sUpInstMgno", 	sUpInstMgno);
		}
		
		log.debug(">>>>>>>>>> role[{}][{}]", role.getCode(), role.getValue());
		log.debug(">>>>>>>>>> sUserId : " + sUserId);
		log.debug(">>>>>>>>>> sInstMgno : " + sInstMgno);
		log.debug(">>>>>>>>>> sInstClsfCd : " + sInstClsfCd);
		log.debug(">>>>>>>>>> sUserClCd : " + sUserClCd);
		log.debug(">>>>>>>>>> sUpInstMgno : " + sUpInstMgno);
		
		return authMap;
	}
	
	/**
	 * [사용자] 권한정보 MAP setting
	 * 
	 * @param requestMap
	 * @return
	 */
	public Map<String, Object> setSqlMap(Map<String, Object> authMap, Map<String, Object> requestMap) {
		if(requestMap != null) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("auth", authMap);
			requestMap.putAll(map);
		}
		return requestMap;
	}
	
	public List<Map<String, Object>> setSqlList(Map<String, Object> authMap, List<Map<String, Object>> list) {
		if(list != null && list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				Map<String, Object> requestMap = (Map<String, Object>)list.get(i);
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("auth", authMap);
				requestMap.putAll(map);
			}
		}
		return list;
	}
	
	/**
	 * [공통] > 관장기관 정보 조회 (사업, 방법론)
	 *
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectInstDetail(Map<String, Object> dsSrh) {		
		
		Map<String, Object> dsInfo = null;
		
		if(dsSrh != null) {
			String mngNo = dsSrh.get("mngNo")==null?"":(String)dsSrh.get("mngNo");
			String dgr = dsSrh.get("dgr")==null?"":(String)dsSrh.get("dgr");
			String menu = dsSrh.get("menu")==null?"":(String)dsSrh.get("menu");
			
			log.debug(">>> mngNo : " + mngNo);
			log.debug(">>> dgr : " + dgr);
			log.debug(">>> menu : " + menu);
			
			// 사업인 경우
			if("BIZ".equals(menu) || "SCSN".equals(menu)) {
				dsInfo = commonBizMapper.selectBizInstInfo(dsSrh);
			}
			// 방법론인 경우
			else if("MHD".equals(menu)) {
				dsInfo = commonBizMapper.selectMhdInstInfo(dsSrh);
			}
		}
		return dsInfo;
	}
	
	/**
	 * [사용자] 관장기관 정보 변경
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateInst(Map<String, Object> authMap, Map<String, Object> dsSrh, Map<String, Object> dsInfo) {
		
		int result = 0;
		
		if(dsSrh != null) {
			
			String mngNo = dsSrh.get("mngNo")==null?"":(String)dsSrh.get("mngNo");
			String dgr = dsSrh.get("dgr")==null?"":(String)dsSrh.get("dgr");
			String menu = dsSrh.get("menu")==null?"":(String)dsSrh.get("menu");
			
			log.debug(">>> mngNo : " + mngNo);
			log.debug(">>> dgr : " + dgr);
			log.debug(">>> menu : " + menu);
			
			if(dsInfo != null) {
				String afInstCd = dsInfo.get("afInstCd")==null?"":(String)dsInfo.get("afInstCd");
				dsSrh.put("afInstCd", afInstCd);
				
				// 사업인 경우
				if("BIZ".equals(menu)) {
					
					// 관장기관 코드 업데이트
					commonBizMapper.updateBizInst(dsSrh);
					
					Map<String, Object> map = commonBizMapper.selectInstMgno(dsSrh);
					
					String bzentNm = "";
					if(map != null) {
						bzentNm = map.get("bzentNm")==null?"":(String)map.get("bzentNm");
					}
					
					// 이력 기록
					Map<String, Object> hstryMap = new HashMap<String, Object>();
					hstryMap.put("bizMngNo", mngNo);
					hstryMap.put("bizDgr", dgr);
					hstryMap.put("hstryTypeCd", "BHT0001");		// 관장기관 지정
					hstryMap.put("hstryRsltCd", "");			// 
					hstryMap.put("hstryDtlRsn", bzentNm);	// 관장기관 명칭 지정
					hstryMap = this.setSqlMap(authMap, hstryMap);
					
					commonBizMapper.insertIrbHstry(hstryMap);
					
				}
				// 사업 - 권리의무승계인 경우
				else if("SCSN".equals(menu)) {
					
					// 관장기관 코드 업데이트
					commonBizMapper.updateBizScsnInst(dsSrh);
					
					Map<String, Object> map = commonBizMapper.selectInstMgno(dsSrh);
					
					String bzentNm = "";
					if(map != null) {
						bzentNm = map.get("bzentNm")==null?"":(String)map.get("bzentNm");
					}
					
					// 이력 기록
					Map<String, Object> hstryMap = new HashMap<String, Object>();
					hstryMap.put("bizMngNo", mngNo);
					hstryMap.put("bizDgr", dgr);
					hstryMap.put("hstryTypeCd", "BHT0001");		// 관장기관 지정
					hstryMap.put("hstryRsltCd", "");			// 
					hstryMap.put("hstryDtlRsn", bzentNm);	// 관장기관 명칭 지정
					hstryMap = this.setSqlMap(authMap, hstryMap);
					
					commonBizMapper.insertIrbHstry(hstryMap);
					
				}
				// 방법론인 경우
				else if("MHD".equals(menu)) {
					
					// 관장기관 코드 업데이트
					commonBizMapper.updateMhdInst(dsSrh);
					
					Map<String, Object> map = commonBizMapper.selectInstMgno(dsSrh);
					
					String bzentNm = "";
					if(map != null) {
						bzentNm = map.get("bzentNm")==null?"":(String)map.get("bzentNm");
					}
					
					// 이력 기록
					Map<String, Object> hstryMap = new HashMap<String, Object>();
					hstryMap.put("mhdlgMgno", mngNo);
					hstryMap.put("mhdlgDgr", dgr);
					hstryMap.put("hstryTypeCd", "BHT0001");		// 관장기관 지정
					hstryMap.put("hstryRsltCd", "");			// 
					hstryMap.put("hstryDtlRsn", bzentNm);	// 관장기관 명칭 지정
					hstryMap = this.setSqlMap(authMap, hstryMap);
					
					commonBizMapper.insertMhdHstry(hstryMap);
					
					
				}				
			}			
		}	
		
		return result;
	}
	
	/**
	 * 총건수 조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectHstryListCnt(Map<String, Object> dsSrh) {
		
		int cnt = 0;
		
		if(dsSrh != null) {
			
			String mngNo = dsSrh.get("mngNo")==null?"":(String)dsSrh.get("mngNo");
			String dgr = dsSrh.get("dgr")==null?"":(String)dsSrh.get("dgr");
			String menu = dsSrh.get("menu")==null?"":(String)dsSrh.get("menu");
			
			log.debug(">>> mngNo : " + mngNo);
			log.debug(">>> dgr : " + dgr);
			log.debug(">>> menu : " + menu);
			
			// 사업인 경우
			if("BIZ".equals(menu)) {
				cnt = commonBizMapper.selectBizHstryListCnt(dsSrh);
			}
			// 방법론인 경우
			else if("MHD".equals(menu)) {
				cnt = commonBizMapper.selectMhdHstryListCnt(dsSrh);				
			}
			// 협정약정인 경우
			else if("AGR".equals(menu)) {
				cnt = commonBizMapper.selectAgrHstryListCnt(dsSrh);				
			}
			// 국제감축협의체인 경우
			else if("CNS".equals(menu)) {
				cnt = commonBizMapper.selectCnsHstryListCnt(dsSrh);				
			}
			// 사업비공개인 경우
			else if("PRV".equals(menu)) {
				cnt = commonBizMapper.selectPrvHstryListCnt(dsSrh);
			}
			
		}
		return cnt;
	}
	
	/**
	 * 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectHstryList(Map<String, Object> dsSrh) {
		
		List<Map<String, Object>> list = null;
		
		if(dsSrh != null) {
			
			String mngNo = dsSrh.get("mngNo")==null?"":(String)dsSrh.get("mngNo");
			String dgr = dsSrh.get("dgr")==null?"":(String)dsSrh.get("dgr");
			String menu = dsSrh.get("menu")==null?"":(String)dsSrh.get("menu");
			
			log.debug(">>> mngNo : " + mngNo);
			log.debug(">>> dgr : " + dgr);
			log.debug(">>> menu : " + menu);
			
			// 사업인 경우
			if("BIZ".equals(menu)) {
				list = commonBizMapper.selectBizHstryList(dsSrh);
			}
			// 방법론인 경우
			else if("MHD".equals(menu)) {
				list = commonBizMapper.selectMhdHstryList(dsSrh);				
			}
			// 협정약정인 경우
			else if("AGR".equals(menu)) {
				list = commonBizMapper.selectAgrHstryList(dsSrh);				
			}
			// 국제감축협의체인 경우
			else if("CNS".equals(menu)) {
				list = commonBizMapper.selectCnsHstryList(dsSrh);				
			}
			// 사업비공개인 경우
			else if("PRV".equals(menu)) {
				list = commonBizMapper.selectPrvHstryList(dsSrh);
			}
			
		}

		return list;
	}
}
