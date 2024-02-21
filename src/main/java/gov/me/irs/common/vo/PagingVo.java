package gov.me.irs.common.vo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.util.ObjectUtils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 페이징처리 Vo
 *  ▶ 업무별 공통 데이터셋 : dsPageInfo
 * 	▶ 공통 컴포넌트 : comPaging.xfdl
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public final class PagingVo {
	
	private final static String KEY = "pageNavigation";
	private final static String KEY_PAGE_NO = "pageNo";
	private final static String KEY_PAGE_SIZE = "listSize";
	private final static String KEY_TOTAL_CONUT = "totalCount";
	
	@Builder.Default
	private int pageNo = 1;				//페이지번호
	@Builder.Default
	private int listSize = 10;			//리스트사이즈
	@Builder.Default
	private int totalCount = 0;			//조회결과 총건수 - 총건수 조회 후 설정
	
	/**
	 * 페이지번호 설정
	 * 
	 * @param pageNo
	 */
	public PagingVo(int pageNo) {
		this.pageNo = pageNo;
	}
	
	/**
	 * 페이지번호, 리스트사이즈 설정
	 * 
	 * @param pageNo
	 */
	public PagingVo(int pageNo, int listSize) {
		this.pageNo = pageNo;
		this.listSize = listSize;
	}
	
	/**
	 * 페이지번호, 리스트사이즈 자동 맵핑 설정
	 * 
	 * @param map - {pageNo, listSize} key를 포함
	 */
	public PagingVo(Map<String, Object> map) {
		if(map != null) {
			if(!ObjectUtils.isEmpty(map.get(KEY_PAGE_NO))) {
				
				Object o = map.get(KEY_PAGE_NO);
				try {
					int intValue = Integer.parseInt(String.valueOf(o));
					if(intValue > 0) {
						this.pageNo = intValue;
					}
				} catch (NumberFormatException e) {
					log.error("[invalid Map key - pageNo]", e);	
				}
			}
			
			if(!ObjectUtils.isEmpty(map.get(KEY_PAGE_SIZE))) {
				
				Object o = map.get(KEY_PAGE_SIZE);
				try {
					int intValue = Integer.parseInt(String.valueOf(o));
					if(intValue > 0) {
						this.listSize = intValue;
					}
				} catch (NumberFormatException e) {
					log.error("[invalid Map key - listSize]", e);	
				}
			}
		}
	}
	
	/**
	 * Mybatis SQL에 맵핑될 페이징정보를 Map에 추가한다.
	 * 
	 * @return
	 */
	public void setSqlMap(Map<String, Object> map) {
		Map<String, Object> pagingMap = new HashMap<String, Object>();
		
		/* 페이징처리 map에 추가 */
		pagingMap.put(KEY, getMap());
		map.putAll(pagingMap);
	}
	
	/**
	 * Mybatis SQL에 맵핑될 페이징정보를 Map으로 읽어온다.
	 * 
	 * @return
	 */
	public Map<String, Object> getSqlMap() {
		Map<String, Object> pagingMap = new HashMap<String, Object>();
		pagingMap.put(KEY, getMap());
		return pagingMap;
	}
	
	/**
	 * 페이징처리 정보를 Map으로 읽어온다.
	 * 
	 * @return
	 */
	public Map<String, Object> getMap() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(KEY_PAGE_NO, this.getPageNo());
		map.put(KEY_PAGE_SIZE, this.getListSize());
		map.put(KEY_TOTAL_CONUT, this.getTotalCount());
		return map;
	}
	
}