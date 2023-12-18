<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="com.clipsoft.clipreport.oof.OOFFile"%>
<%@page import="com.clipsoft.clipreport.oof.OOFDocument"%>
<%@page import="com.clipsoft.clipreport.oof.connection.OOFConnectionHTTP"%>
<%@page import="com.clipsoft.clipreport.oof.connection.OOFConnectionMemo"%>
<%@page import="java.io.File"%>
<%@page import="com.clipsoft.clipreport.server.service.ReportUtil"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.clipsoft.clipreport.oof.connection.param.OOFHTTPParam"%>
<%@page import="java.util.Enumeration"%>

<%! org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger("Clipreport"); %>

<%
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* crf 위치 정보 : [/gov-me-irs/src/main/webapp/WEB-INF/clipreport5/crf/CLIP.crf] */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
String crfPath = request.getParameter("crfPath");					/* 리포트 crf파일의 위치 */
String service = request.getParameter("service");				/* 리포트에 출력할 넥사크로 서비스 정보가 존재하는 URL */
String memoData = (String) request.getAttribute("memoData");
log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][crfPath]["+crfPath+"]");
log.debug("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][service]["+service+"]");
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. OOFDocument 생성 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
OOFDocument oof = OOFDocument.newOOF();
OOFFile file = oof.addFile("crf.root", "%root%" + crfPath);
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. OOFDocument 생성 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. MEMO Connection 생성 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//커넥션의 네임스페이스, XML/CSV/JSON 데이터 문자열.. CSV데이터일 경우에 <![CDATA[]]>로 쌓아서 사용
OOFConnectionMemo mc = oof.addConnectionMemo("*", memoData);
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3. MEMO Connection 생성 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 레포트용 데이터 맵핑 설정 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//데이터셋 네임스페이스, 데이터 인코딩, XML 데이터의 root 경로(Xpath)
mc.addContentParamJSON("*", "UTF-8", "%dataset.json.root%");
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 레포트용 데이터 맵핑 설정 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 레포트파일에 넘겨줄 파라미터 정보 설정 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
Enumeration<String> array = request.getParameterNames();
while(array.hasMoreElements()){    //파라미터 이름이 있으면 참
	String name = array.nextElement();    //파라미터 이름을 변수에 저장
	String value = request.getParameter(name);
	oof.addField(name, value);				/* crf에 넘겨줄 사용자정의 파라미터 */
}
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 6. 레포트파일에 넘겨줄 파라미터 정보 설정 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
%><%@include file="Property.jsp"%><%
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 레포트 생성 후 리포트key 읽기 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath);
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 7. 레포트 생성 후 리포트key 읽기 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Report</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/thirdParty/ClipReport5/css/clipreport5.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/thirdParty/ClipReport5/css/UserConfig5.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/thirdParty/ClipReport5/css/font.css">

<script type='text/javascript' src='${pageContext.request.contextPath}/thirdParty/ClipReport5/js/jquery-1.11.1.js'></script>
<script type='text/javascript' src='${pageContext.request.contextPath}/thirdParty/ClipReport5/js/clipreport5.js'></script>
<script type='text/javascript' src='${pageContext.request.contextPath}/thirdParty/ClipReport5/js/UserConfig5.js'></script>
<script type='text/javascript'>
	
function html2xml(divPath){	
    var reportkey = "<%=resultKey%>";
	var report = createReport("${pageContext.request.contextPath}/ClipReport5/report_server.jsp", reportkey, document.getElementById(divPath));

	report.setStyle("close_button", "display:none;");
	//리포트 실행
    report.view();
}
</script>
</head>
<body onload="html2xml('targetDiv1')">
<div id='targetDiv1' style='position:absolute;top:5px;left:5px;right:5px;bottom:5px;'>
	<span style="visibility: hidden; font-family:나눔고딕">.</span>
	<span style="visibility: hidden; font-family:NanumGothic">.</span>
</div>
</body>
</html>
