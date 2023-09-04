<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script type="text/javascript">
		$(function(){
			
			$("#btnTest").on('click', function(){
				
				var params = {
						fileGroupSn : xxxxxxxxxxxxxxxxxxxxxxxx,
						fileDtlSn : yyyyyyyyyyyyyyy,
				};
				
				$.ajax({
					method : "POST",
					contentType : "application/json",
					url : "${pageContext.request.contextPath}/test/executeTransformDoc.json",
					data : JSON.stringify(params),
					dataType : "JSON",
					beforeSend : function(xhr) {
						console.log("[beforeSend]");
					},
					success : function(data, textStatus, jqXhr) {
						console.log("[success]");
					},
					error : function(jqXHR, textStatus, errorThrown){
						console.log("[error]");
						console.log("[jqXHR]["+JSON.stringify(jqXHR)+"]");
						console.log("[textStatus]["+textStatus+"]");
						console.log("[errorThrown]["+errorThrown+"]");
					},
					complete : function() {
						console.log("[complete]");
					}
				});
				
			});
		});
	
	</script>
</head>
<body>
	<hr/>
		[암호화 테스트 - Get방식 호출 할 것][/test/cryptMain.irs]
	<hr/>
	<hr/>
	index jsp page - test / 수정테스트
	<hr/>
	<a href="javascript:;" id="btnTest">미리보기 버튼 {그룹 2, 상세 1}</a>
</body>
</html>