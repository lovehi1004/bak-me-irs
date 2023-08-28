package gov.me.irs.common.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import lombok.extern.slf4j.Slf4j;

/**
 * ClientUtil Class
 * @author Justin
 *
 */
@Component
@Slf4j
public final class ClientUtil {
	
	/**
	 * request ip 조회
	 * @param request
	 * @return
	 */
	public final static String getIp(HttpServletRequest request) {
		/* 접속자 IP 조회 */
        String ip = request.getHeader("X-Forwarded-For");
    	log.debug("[CLIENT IP][X-Forwarded-For]["+ip+"]");
    	
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("Proxy-Client-IP");
            log.debug("[CLIENT IP][Proxy-Client-IP]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("WL-Proxy-Client-IP");
            log.debug("[CLIENT IP][WL-Proxy-Client-IP]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("HTTP_CLIENT_IP");
            log.debug("[CLIENT IP][HTTP_CLIENT_IP]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
            log.debug("[CLIENT IP][HTTP_X_FORWARDED_FOR]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("X-Real-IP");
            log.debug("[CLIENT IP][X-Real-IP]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("X-RealIP");
            log.debug("[CLIENT IP][X-RealIP]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getHeader("REMOTE_ADDR");
            log.debug("[CLIENT IP][REMOTE_ADDR]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
            ip = request.getRemoteAddr();
            log.debug("[CLIENT IP][request.getRemoteAddr()]["+ip+"]");
        }
        if (ObjectUtils.isEmpty(ip)) { 
        	ip = "Unknown";
        	log.debug("[CLIENT IP][NOT FOUND]["+ip+"]");
        }
        
        return ip;
	}
	
	/**
	 * request browser 조회
	 * @param request
	 * @return
	 */
	public final static String getBrowser(HttpServletRequest request) {
	       /* 접속자 browser 조회 */
        String browser = "Unknown";
        String userAgent = request.getHeader("User-Agent");

        if (userAgent != null) { 
        	if (userAgent.indexOf("Trident") > -1) {										//1. IE
        		browser = "MSIE"; 
        	} else if (userAgent.indexOf("Whale") > -1) {									//2. Whale
        		browser = "Whale"; 
        	} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {		//3. Opera 
        		browser = "Opera"; 
        	} else if (userAgent.indexOf("Edg") > -1) {										//4. Edg
        		browser = "Edg"; 
        	} else if (userAgent.indexOf("Chrome") > -1) { 									//5. Chrome
        		browser = "Chrome"; 
        	} else if (userAgent.indexOf("Safari") > -1) {									//6. Safari
        		browser = "Safari"; 
        	} else if (userAgent.indexOf("iPhone") > -1 && userAgent.indexOf("Mobile") > -1) {	//7. ETC
        		browser = "iPhone"; 
        	} else if (userAgent.indexOf("Android") > -1 && userAgent.indexOf("Mobile") > -1) {	//8. ETC
        		browser = "Android"; 
        	}
        }
        
        log.debug("[CLIENT BROWSER]["+browser+"]");
        
        return browser;
	}
	
	/**
	 * request os 조회
	 * @param request
	 * @return
	 */
	public final static String getOs(HttpServletRequest request) {
        /* 접속자 OS 조회 */
        String os = "Other";
        String userAgent = request.getHeader("User-Agent");
        
        userAgent = userAgent.toLowerCase();
        if (userAgent.indexOf("windows nt 10.0") > -1) {
        	os = "Windows10";
        } else if (userAgent.indexOf("windows nt 6.1") > -1) {
        	os = "Windows7";
        } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows nt 6.3") > -1 ) {
        	os = "Windows8";
        } else if (userAgent.indexOf("windows nt 6.0") > -1) {
        	os = "WindowsVista";
        } else if (userAgent.indexOf("windows nt 5.1") > -1) {
        	os = "WindowsXP";
        } else if (userAgent.indexOf("windows nt 5.0") > -1) {
        	os = "Windows2000";
        } else if (userAgent.indexOf("windows nt 4.0") > -1) {
        	os = "WindowsNT";
        } else if (userAgent.indexOf("windows 98") > -1) {
        	os = "Windows98";
        } else if (userAgent.indexOf("windows 95") > -1) {
        	os = "Windows95";
        } else if (userAgent.indexOf("iphone") > -1) {
        	os = "iPhone";
        } else if (userAgent.indexOf("ipad") > -1) {
        	os = "iPad";
        } else if (userAgent.indexOf("android") > -1) {
        	os = "android";
        } else if (userAgent.indexOf("mac") > -1) {
        	os = "Mac OD";
        } else if (userAgent.indexOf("linux") > -1) {
        	os = "Linux";
        }
        
        log.debug("[CLIENT OS]["+os+"]");
        
        return os;
	}
	
}