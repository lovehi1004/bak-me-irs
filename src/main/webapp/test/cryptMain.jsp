<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%
/*
	참고 : [https://cofs.tistory.com/297]
*/
%>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<!-- 순서에 유의 -->
	<script src="${pageContext.request.contextPath}/crypt/rsa.js"></script>
	<script src="${pageContext.request.contextPath}/crypt/jsbn.js"></script>
	<script src="${pageContext.request.contextPath}/crypt/prng4.js"></script>
	<script src="${pageContext.request.contextPath}/crypt/rng.js"></script>
	<script type="text/javascript">
		$(function(){
			
			$("#btnTest").on('click', function(){
				
				var rsa = new RSAKey();
		        rsa.setPublic($('#RSAModulus').val(),$('#RSAExponent').val());
		        
		        var parameter = $("input[name=parameter]").val();
		        
		        /* #################### 2. 암호화 #################### */
		        parameter = rsa.encrypt(parameter);
		        
				var _$frm = $("<form>");
				$("body").append(_$frm);
				
				_$frm.attr({ action : "${pageContext.request.contextPath}/test/cryptResult.irs", method : "post" });
				_$frm.append($("<input>").attr({ name : "parameter" }).val(parameter));
				_$frm.submit();
				
			});
		});
	
	</script>
</head>
<body>
	<hr/>

	<input type="hidden" id="RSAModulus" value="${RSAModulus}"/>
	<input type="hidden" id="RSAExponent" value="${RSAExponent}"/>    

	<input type="text" name="parameter" value="xxxxxxxx"/>
	<hr/>
	<a href="javascript:;" id="btnTest">테스트</a>
</body>
</html>