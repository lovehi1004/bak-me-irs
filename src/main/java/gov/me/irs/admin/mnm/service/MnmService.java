package gov.me.irs.admin.mnm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.admin.mnm.mapper.MnmMapper;
import gov.me.irs.common.constants.Const;
import lombok.RequiredArgsConstructor;

/**
 * 메뉴 관리 Service
 * 
 * @author Justin
 *
 */
@Service
@RequiredArgsConstructor
public class MnmService {
	
	private final MnmMapper mnmMapper;

	/**
	 * 메뉴기본 목록조회
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectMenuList(Map<String, Object> requestMap) {
		return mnmMapper.selectMenuList(requestMap);
	}
	
	/**
	 * 메뉴기본 등록
	 * 
	 * @param requestMap
	 * 		- {
	 * 			upMenuId : 상위메뉴ID
	 * 			, menuNm : 메뉴명 						- 필수깂
	 * 			, menuExpln : 메뉴설명 					- 필수깂
	 * 			, menuUrlAddr : 메뉴URL주소 					- 필수깂
	 * 			, sysClCd : 시스템구분코드
	 * 			, useYn : 사용여부 						- 필수깂
	 * 			, regId : 세션정보
	 * 		}
	 * 
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertMenu(Map<String, Object> requestMap) {
		
		/* 상위메뉴ID 누락시 최상위 Default 메뉴ID 설정 */
		if(ObjectUtils.isEmpty(requestMap.get("upMenuId"))) {
			requestMap.put("upMenuId", Const.MENU.SCC0001_MENU_MGNO);
		}
		
		/* 시스템구분코드 누락시 Default IRS시스템 구분값 설정 */
		if(ObjectUtils.isEmpty(requestMap.get("sysClCd"))) {
			requestMap.put("sysClCd", Const.CODE.SYS_CL_CD_SCC0001);
		}

		// 하위메뉴 생성 - 하위메뉴 생성시 상위메뉴의 메뉴구분정보를 변경 후 메뉴를 추가한다.
		if(!Const.MENU.SCC0001_MENU_MGNO.equals(requestMap.get("upMenuId"))
			&&!Const.MENU.SCC0002_MENU_MGNO.equals(requestMap.get("upMenuId"))
			) {
			
			/* 상위메뉴 상세 조회 */
			Map<String, Object> parameterMap = new HashMap<String, Object>();
			parameterMap.put("menuId", requestMap.get("upMenuId"));
			Map<String, Object> upMenuMap = mnmMapper.selectMenu(parameterMap);
			
			/* 상위메뉴 메뉴구분정보 수정 - UPDATE 처리 */
			requestMap.put("menuClCd", Const.MENU.FOLDER);
			mnmMapper.updateUpMenuSeCd(requestMap);
			
			/* 메뉴기본정보 추가 */
			requestMap.put("menuLvl", upMenuMap.get("menuLvl"));
			
		// 최상위메뉴 생성 - 최상위메뉴 생성시 insert 처리만 하여 메뉴를 추가한다.
		}else {
			/* 메뉴기본정보 추가 */
			requestMap.put("menuLvl", NumberUtils.INTEGER_ZERO);
		}
		
		requestMap.put("menuClCd", Const.MENU.LINK);
		return mnmMapper.insertMenu(requestMap);
	}
	
	/**
	 * 메뉴기본 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateMenu(Map<String, Object> requestMap) {
		return mnmMapper.updateMenu(requestMap);
	}
	
	/**
	 * 메뉴기본 삭제
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int deleteMenu(Map<String, Object> requestMap) {
		return mnmMapper.deleteMenu(requestMap);
	}
}
