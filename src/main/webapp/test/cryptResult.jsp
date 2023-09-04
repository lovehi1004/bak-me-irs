<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="${pageContext.request.contextPath}/crypt/rsa.js"></script>
</head>
<body>
	<hr/>
	암호화 결과
	<hr/>
	[parameter] [${parameter}]
	<hr/>
	[result] [${result}]
	<hr/>
	<a href="${pageContext.request.contextPath}/test/cryptMain.irs">비밀번호 암호화 메인</a>
</body>
</html>