package gov.me.irs.common.util;

import java.text.DecimalFormat;
import java.text.NumberFormat;

import org.springframework.util.ObjectUtils;

public class FormatterUtil {
	
	/**
	 * ##################################################
	 * 사업자번호 포멧하기 - 1234567890 ◀ ▶ 123-45-67890
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class BRNO {
		/**
		 * 사업자번호 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 10) {
				return v;
			} else {
				String a = v.substring(0, 3);
				String b = v.substring(3, 5);
				String c = v.substring(5, v.length());
				
				return String.format("%1$s-%2$s-%3$s", a, b, c);
			}
		}
		/**
		 * 사업자번호 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 12) {
				return v;
			} else {
				String a = v.substring(0, 3);
				String b = v.substring(4, 6);
				String c = v.substring(7, v.length());
				
				return String.format("%s%s%s", a, b, c);
			}
		}
	}
	
	/**
	 * ##################################################
	 * 날짜 포멧하기 - YYYYMMDD ◀ ▶ YYYY-MM-DD
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class DATE {
		/**
		 * 날짜 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 8) {
				return v;
			} else {
				String a = v.substring(0, 4);
				String b = v.substring(4, 6);
				String c = v.substring(6, v.length());
				
				return String.format("%1$s-%2$s-%3$s", a, b, c);
			}
		}
		/**
		 * 날짜 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 10) {
				return v;
			} else {
				String a = v.substring(0, 4);
				String b = v.substring(5, 7);
				String c = v.substring(8, v.length());
				
				return String.format("%s%s%s", a, b, c);
			}
		}
	}
	
	/**
	 * ##################################################
	 * 시간 포멧하기 - HHMISS ◀ ▶ HH:MI:SS
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class TIME {
		/**
		 * 시간 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 6) {
				return v;
			} else {
				String a = v.substring(0, 2);
				String b = v.substring(2, 4);
				String c = v.substring(4, v.length());
				
				return String.format("%1$s:%2$s:%3$s", a, b, c);
			}
		}
		/**
		 * 시간 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 8) {
				return v;
			} else {
				String a = v.substring(0, 2);
				String b = v.substring(3, 5);
				String c = v.substring(6, v.length());
				
				return String.format("%s%s%s", a, b, c);
			}
		}
	}
	
	/**
	 * ##################################################
	 * 날짜시간 포멧하기 - YYYYMMDDHHMISS ◀ ▶ YYYY-MM-DD HH:MI:SS
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class DATETIME {
		/**
		 * 날짜시간 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v) {
			if(ObjectUtils.isEmpty(v) ||  v.length() != 14) {
				return v;
			} else {
				String a = v.substring(0, 4);
				String b = v.substring(4, 6);
				String c = v.substring(6, 8);
				String d = v.substring(8, 10);
				String e = v.substring(10, 12);
				String f = v.substring(12, v.length());
				
				return String.format("%1$s-%2$s-%3$s %4$s:%5$s:%6$s", a, b, c, d, e, f);
			}
		}
		/**
		 * 날짜시간 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v)) {
				return v;
			} else {
				v = v.replace(" ", "");			//공백제거
				if(v.length() != 18) {
					return v;
				}else {
					String a = v.substring(0, 4);
					String b = v.substring(5, 7);
					String c = v.substring(8, 10);
					String d = v.substring(10, 12);
					String e = v.substring(13, 15);
					String f = v.substring(16, v.length());
					
					return String.format("%s%s%s%s%s%s", a, b, c, d, e, f);
				}
			}
		}
	}
	
	/**
	 * ##################################################
	 * 숫자콤마 포멧하기 - 1234567890 ◀ ▶ '1,234,567,890' 또는 '1234567890' ◀ ▶ '1,234,567,890'
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class COMMA {
		/**
		 * 숫자콤마 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v) {
			
			try {
				long l = Long.parseLong(v);
				DecimalFormat formatter = new DecimalFormat("###,###");
				return formatter.format(l);
			} catch(NumberFormatException e) {
				return v;
			}
		}
		/**
		 * 숫자콤마 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v)) {
				return v;
			} else {
				return v.replace(",", "");			//공백제거
			}
		}
	}
	
	/**
	 * ##################################################
	 * 소수점콤마 포멧하기 - 1234567890.123 ◀ ▶ '1,234,567,890.123' 또는 '1234567890' ◀ ▶ '1,234,567,890'
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class DF {
		/**
		 * 숫자콤마 format 함수
		 * @param v
		 * @return
		 */
		public final static String format(String v, int p) {
			String suffixPattern = "";
			
			for (int i = 0; i < p; i++) {
				suffixPattern += "#";
			}
			String pattern = "###,###" + (suffixPattern.length() == 0 ? "" : "." + suffixPattern);
			
			NumberFormat formatter = new DecimalFormat(pattern);
			
			try {
				double d = Double.parseDouble(v);
				return formatter.format(d);
			} catch(NumberFormatException e) {
				return v;
			}
		}
		/**
		 * 숫자콤마 unformat 함수
		 * @param v
		 * @return
		 */
		public final static String unformat(String v) {
			if(ObjectUtils.isEmpty(v)) {
				return v;
			} else {
				return v.replace(",", "");			//공백제거
			}
		}
	}
	
	/**
	 * ##################################################
	 * 파일용량구하기 - 1234 ◀ ▶ '1.2 KB', 123 ◀ ▶ '123.0 bytes'
	 * ##################################################
	 * @author Justin
	 *
	 */
	public final static class FILESIZE {
		/**
		 * 용량구하기 - B, kB, MB, GB, TB
		 * @param v
		 * @return
		 */
		public final static String format(long size) {
			if(size <= 0) return "0";
			final String[] units = new String[] {"bytes", "KB", "MB", "GB", "TB"};
			int digitGroups = (int) (Math.log10(size)/Math.log10(1024));
			return new DecimalFormat("#,###.0").format(size/Math.pow(1024,  digitGroups)) + " " + units[digitGroups];
		}
	}
}