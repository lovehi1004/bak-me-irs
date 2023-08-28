<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="com.clipsoft.clipreport.oof.OOFFile"%>
<%@page import="com.clipsoft.clipreport.oof.OOFDocument"%>
<%@page import="com.clipsoft.clipreport.oof.connection.OOFConnectionHTTP"%>
<%@page import="java.io.File"%>
<%@page import="com.clipsoft.clipreport.server.service.ReportUtil"%>
<%@page import="java.net.URLEncoder"%>




<%@page import="java.util.ArrayList"%>
<%@page import="com.clipsoft.clipreport.oof.connection.param.OOFHTTPParam"%>
<%@page import="java.util.Enumeration"%>

<%
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* crf 위치 정보 : [/bak-me-irs/src/main/webapp/WEB-INF/clipreport5/crf/CLIP.crf] */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
try{
String crfPath = request.getParameter("crfPath");					/* 리포트 crf파일의 위치 */
String serviceUrl = request.getParameter("serviceUrl");				/* 리포트에 출력할 넥사크로 서비스 정보가 존재하는 URL */

System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][crfPath]["+crfPath+"]");
System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][serviceUrl]["+serviceUrl+"]");

OOFDocument oof = OOFDocument.newOOF();
OOFFile file = oof.addFile("crf.root", "%root%"+crfPath);

String domain = request.getScheme()+"://"+"192.168.0.140"+":"+"8098"+request.getContextPath();

// String domain = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath();

System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][domain]["+domain+"]");
System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][request.getScheme()]["+request.getScheme()+"]");
System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][request.getServerName()]["+request.getServerName()+"]");
System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][request.getServerPort()]["+request.getServerPort()+"]");
System.out.println("[▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶][request.getContextPath()]["+request.getContextPath()+"]");

//Http Type (arg1:커넥션명, arg2:url, arg3:method(post, get))
OOFConnectionHTTP conn = oof.addConnectionHTTP("*", domain + serviceUrl, "get");
//특정 URL을 Call 했을때 json데이터를 리턴해주는 경우

/* 서비스URL 호출시에 넘겨줄 파라미터 설정하기 */
Enumeration<String> array = request.getParameterNames();
while(array.hasMoreElements()){    //파라미터 이름이 있으면 참
	String name = array.nextElement();    //파라미터 이름을 변수에 저장
	String value = request.getParameter(name);
	value = URLEncoder.encode(value, "UTF-8");		/* 한글깨짐 현상 대응 - 한글파라미터는 URLDecoder.decode(변수, "UTF-8"); 로 읽어야됨 */
	conn.addHTTPParameter(name, value);				/* 서비스 전송 파라미터 */
	
	oof.addField(name, value);				/* crf에 넘겨줄 사용자정의 파라미터 */
}


conn.setServerDataCrypto("false");

// 2-3. JSON 
// 반복노드 지정 (서식에서 지정한 반복노드로 사용할 경우 : %dataset.json.root%)
conn.addContentParamJSON("*", "UTF-8", "%dataset.json.root%");

%><%@include file="Property.jsp"%><%
//세션을 활용하여 리포트키들을 관리하지 않는 옵션
//request.getSession().setAttribute("ClipReport-SessionList-Allow", false);
String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath);
//리포트의 특정 사용자 ID를 부여합니다.
//clipreport5.properties 의 useuserid 옵션이 true 일 때만 적용됩니다. 
//clipreport5.properties 의 useuserid 옵션이 true 이고 기본 예제[String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath);] 사용 했을 때 세션ID가 userID로 사용 됩니다.
//String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath, "userID");

//리포트key의 사용자문자열을 추가합니다.(문자숫자만 가능합니다.)
//String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath, "", "usetKey");

//리포트를 저장 스토리지를 지정하여 생성합니다.
//String resultKey =  ReportUtil.createReportByStorage(request, oof, "false", "false", request.getRemoteAddr(), propertyPath, "rpt1");

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Report</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/sol/ClipReport5/css/clipreport5.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/sol/ClipReport5/css/UserConfig5.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/sol/ClipReport5/css/font.css">

<script type='text/javascript' src='${pageContext.request.contextPath}/sol/ClipReport5/js/jquery-1.11.1.js'></script>
<script type='text/javascript' src='${pageContext.request.contextPath}/sol/ClipReport5/js/clipreport5.js'></script>
<script type='text/javascript' src='${pageContext.request.contextPath}/sol/ClipReport5/js/UserConfig5.js'></script>
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
<%
} catch(Throwable e) {
	throw e;
}
%>
