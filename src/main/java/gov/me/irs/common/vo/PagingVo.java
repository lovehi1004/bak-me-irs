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
		
		if(!ObjectUtils.isEmpty(map.get(KEY_PAGE_NO))) {
			
			Object o = map.get(KEY_PAGE_NO);
			try {
				int intValue = Integer.parseInt(String.valueOf(o));
				if(intValue > 0) {
					this.pageNo = intValue;
				}
			} catch (Throwable e) {
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
			} catch (Throwable e) {
				log.error("[invalid Map key - listSize]", e);	
			}
		}
		
		/* 페이징처리 map에 추가 */
		map.put(KEY, getMap());
		
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