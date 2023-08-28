<%@page import="com.clipsoft.clipreport.oof.connection.OOFConnectionHTTP"%>
<%@page import="com.clipsoft.clipreport.oof.OOFFile"%>
<%@page import="com.clipsoft.clipreport.oof.OOFDocument"%>
<%@page import="com.clipsoft.clipreport.oof.connection.*"%>
<%@page import="java.io.File"%>
<%@page import="java.util.*"%>
<%@page import="com.clipsoft.clipreport.server.service.ReportUtil"%>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%

// 리포트 oof 객체 생성
OOFDocument oof = OOFDocument.newOOF();

// 서식 파일 추가
OOFFile file = oof.addFile("crf.root", "%root%/crf/CLIP.crf");

// 매개변수 필드 추가
file.addField("FieldName", "Value");


// 데이터 바인딩
// 사용하는 데이터 타입에 따라 아래와 같이 연결합니다.

/* 1. DB

 * addConnectionData(string, string)
 * arg1:데이터셋명 (모든 쿼리가 같은 DB서버를 바라볼 경우, 데이터셋명을 *로 사용)
 * arg2:DataConnection.properties에 설정한 dbName */
// file.addConnectionData("*","dbName");


/* 2. XML (Memo Type)

 * addConnectionMemo(string, string)
 * arg1:커넥션명
 * arg2:xml 데이터
 
 * addContentParamXML(string, string, string)
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:반복노드 (서식에서 지정한 반복노드를 사용할 경우 %dataset.xml.root% 로 입력) */
// OOFConnectionMemo conn = oof.addConnectionMemo("*", "XMLData");
// conn.addContentParamXML("*", "utf-8", "%dataset.xml.root%");


/* 2. XML (Http Type)

 * addConnectionHTTP(string, string, string)
 * arg1:커넥션명
 * arg2:xml 데이터를 return하는 url
 * arg3:method (get, post)
 
 * addContentParamXML("string", "string", "string")
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:반복노드 (서식에서 지정한 반복노드를 사용할 경우 %dataset.xml.root% 로 입력) */
// OOFConnectionHTTP conn = oof.addConnectionHTTP("*", "url", "method");
// conn.addContentParamXML("*", "utf-8", "%dataset.xml.root%");


/* 3. CSV (Memo Type)

 * addConnectionMemo(string, string)
 * arg1:커넥션명
 * arg2:csv 데이터
 
 * addContentParamCSV(string, string, string, string, string, string)
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:필드구분자
 * arg4:레코드구분자
 * arg5:데이터셋구분자
 * arg6:데이터셋 번호 */
// OOFConnectionMemo conn = oof.addConnectionMemo("*", "CSVData");
// conn.addContentParamCSV("*", "utf-8", "|*|", "\r\n", "", "1");


/* 3. CSV (Http Type)

 * addConnectionHTTP(string, string, string)
 * arg1:커넥션명
 * arg2:csv 데이터를 return하는 url
 * arg3:method (get, post)
 
 * addContentParamCSV(string, string, string, string, string, string)
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:필드구분자
 * arg4:레코드구분자
 * arg5:데이터셋구분자
 * arg6:데이터셋 번호 */
// OOFConnectionHTTP conn = oof.addConnectionHTTP("*", "url", "method");
// conn.addContentParamCSV("*", "utf-8", "|*|", "\r\n", "", "1");


/* 4. JSON (Memo Type)

 * addConnectionMemo(string, string)
 * arg1:커넥션명
 * arg2:json 데이터
 
 * addContentParamJSON(string, string, string)
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:반복노드 (서식에서 지정한 반복노드를 사용할 경우 %dataset.json.root% 로 입력) */
// OOFConnectionMemo conn = oof.addConnectionMemo("*", "JSONData");
// conn.addContentParamJSON("*", "utf-8", "%dataset.json.root%");


/* 4. JSON (Http Type)

 * addConnectionHTTP(string, string, string)
 * arg1:커넥션명
 * arg2:json 데이터를 return하는 url
 * arg3:method (get, post)

 * addContentParamJSON(string, string, string)
 * arg1:데이터셋명
 * arg2:인코딩
 * arg3:반복노드 (서식에서 지정한 반복노드를 사용할 경우 %dataset.json.root% 로 입력) */
// OOFConnectionHTTP conn = oof.addConnectionHTTP("*", "url", "method");
//conn.addContentParamJSON("*", "utf-8", "%dataset.json.root%");


%><%@include file="Property.jsp"%><%
String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Report</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" type="text/css" href="./css/clipreport5.css">
<link rel="stylesheet" type="text/css" href="./css/UserConfig5.css">
<link rel="stylesheet" type="text/css" href="./css/font.css">

<script type='text/javascript' src='./js/jquery-1.11.1.js'></script>
<script type='text/javascript' src='./js/clipreport5.js'></script>
<script type='text/javascript' src='./js/UserConfig5.js'></script>
<script type='text/javascript'>
	
function html2xml(divPath){	
    var reportkey = "<%=resultKey%>";
	var report = createReport("./report_server.jsp", reportkey, document.getElementById(divPath));
   
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
