<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	
	
</head>

<body>
	<table border="1">
		<tbody>
			<tr>
				<td>생성전 데이터</td>
				<td>${oldMap}</td>
			</tr>
			<tr>
				<td>생성결과</td>
				<td>
					<c:if test="${empty newMap}">생성불가</c:if>
					<c:if test="${not empty newMap}">${newMap}</c:if>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>