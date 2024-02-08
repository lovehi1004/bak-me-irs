package gov.me.irs.core.raonk.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

import com.raonwiz.kupload.RAONKHandler;

import gov.me.irs.common.constants.Const;
import gov.me.irs.core.config.property.CoreProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKViewerServlet - 라온K 뷰어 Servlet
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class RaonKViewerServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7716376069961087302L;
	
	private final CoreProperties coreProperties;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		log.debug("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ [라온K 뷰어] START");
		
		request.setCharacterEncoding("UTF-8");
		
		/* viewer js 경로 지정하기 */
		String viewerJsPath = coreProperties.raon.viewJsPath;
		
		/* Context Path 가 존재하면 rs에 추가조립 - 문서뷰어 솔루션에서 파라미터로만 판단 Context Path는 조립해서 보내야 됨 */
		String contextPath = request.getContextPath();
		if(!Const.SYMBOL.SLASH.equals(contextPath)) {
			viewerJsPath = contextPath + viewerJsPath;
		}
		
		log.debug("[viewerJsPath]["+viewerJsPath+"]");
		
		RAONKHandler upload = new RAONKHandler();
		
		/**
		 * 웹 표준 모드의 뷰어 사용시 뷰어에 사용되는 kupload/js/raonkupload.viewer.js 파일의 경로를 설정합니다.
		 * 일반적으로 kupload/handler/raonkviewer.jsp를 다른 경로에 사용될 경우 설정합니다.
		 * 이 경우 raonkviewer.jsp 페이지에서 raonkupload.viewer.js의 경로가 접근 가능하도록 설정해야 합니다.
		 */
		upload.settingVo.setViewerJsPath(viewerJsPath);
		
		String result = "";
		try {
			log.debug("[라온K 뷰어 서비스 호출]");
			
			log.debug("[upload.Viewer 실행 START]");
			result = upload.Viewer(request, response);
			log.debug("[upload.Viewer 실행 END]");
		} catch (Exception e) {
			log.error("[라온K 뷰어 예외발생][{}]", e);
			e.printStackTrace();
		}
		
		if(!result.equals("")) {
			log.debug("[upload.Viewer 의 결과가 존재한다면][{}]", result);
			response.setContentType("text/html;charset=UTF-8");
			response.getWriter().write(result);
		}
		
		log.debug("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶ [라온K 뷰어] END");
		
	}
}
