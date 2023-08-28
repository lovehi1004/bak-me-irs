package gov.me.irs.core.jwt.util;

import org.apache.commons.lang3.StringUtils;

/**
 * 시스템 공통 JWT 유틸
 * 
 * @author Justin
 *
 */
public final class JwtUtil {
	
	/**
	 * generate a blank string by size
	 * 
	 * @param size
	 * @return
	 */
	public final static String newBlankString(int size) {
		StringBuffer sb = new StringBuffer();
		
		for (int i = 0; i < size; i++) {
			sb.append(StringUtils.SPACE);
		}
		
		return sb.toString();
		
	}
	
}
