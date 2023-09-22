<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<style type="text/css">
		div.container {
			padding: 5px;
			background : Chartreuse;
		}
		div.row {
			display: flex;
			flex-direction: row;
			height: 100%;
		}
		div.row.header {
			border-bottom: 10px solid DarkBlue;
		}
		div.col {
			flex: 1; /*ex: 1 1 0 */
			overflow: auto;
			text-align: center;
			min-width: 100px;
		}
		div.col > input {
			width: 100%;
			padding: 0;
			border: 0;
			height: 24px;
		}
		
		/* 열추가 */
		div.add-col {
			width: 60px;
			padding: 0;
			border: 0;
			height: 24px;
		}
		
		/* 행추가 */
		div.add-row {
			width: 60px;
			width: 60px;
			padding: 0;
			border: 0;
			height: 24px;
		}
		
		div.add-col > a {
			width: 60px;
			text-align: center;
			display: inline-block;
			text-decoration: none;
			background: white;
			color: blue;
			font-weight: 900;
		}
		div.del-row > a, div.add-row > a {
			width: 30px;
			text-align: center;
			display: inline-block;
			text-decoration: none;
			background: white;
			color: red;
			font-weight: 900;
		}
		div.add-col > a:hover {
			background: blue;
			color: yellow;
		}
		div.add-row > a:hover, div.del-row > a:hover {
			background: red;
			color: yellow;
		}
		
		
		div.row.header > div.col:nth-child(odd) > input {
			background : MediumSlateBlue;
			color: white;
		}
		div.row.header > div.col:nth-child(even) > input {
			background : MediumOrchid;
			color: white;
		}
		div.row.data > div.col:nth-child(odd) > input {
			background : pink;
		}
		div.row.data > div.col:nth-child(even) > input {
			background : PowderBlue;
		}
		
		div.row.header > div.col:nth-child(odd) > input:focus {
			background: Yellow;
			color: black;
		}
		div.row.header > div.col:nth-child(even) > input:focus {
			background: Yellow;
			color: black;
		}
		div.row.data > div.col:nth-child(odd) > input:focus {
			background: Yellow;
		}
		div.row.data > div.col:nth-child(even) > input:focus {
			background: Yellow;
		}
	</style>
	
	
	
	<script type="text/javascript">
		$(function(){
			
			/* 열추가 */
			$("a[data-link=add-col]").on('click', function(){
				
				$("div.row").each(function(){
					let _$col = $(this).find("div.col:last").clone();
					_$col.find("input").val("");
					$(this).find("div.col:last").after(_$col);
				});
			});
			
			/* 행추가 */
			$("a[data-link=add-row]").on('click', fnAddRow);
			
			/* 행삭제 */
			$("a[data-link=del-row]").on('click', fnDelRow);
			
			/* textarea to matrix 변환하기 */
			$("button[data-link=convert]").on('click', function(){
				let row =  $("#txaInput").val();
				row = row.replace(/(?:\r\n|\r|\n)/g, '<br>');
				
				let rowArray = row.split('<br>');
				let rowSize = rowArray.length;
				
				console.log("[rowSize]["+rowSize+"]");
				
				if(rowSize > 0) {
					let colArray = rowArray[0].split('|||');
					let colSize = colArray.length;
					console.log("[colSize]["+colSize+"]");
					
					for(let idx = 1; idx < colSize; idx++) {
						$("div.container").find("div.row.header").find("div.add-col").find("a[data-link=add-col]").click();
					}
					
					for(let idx = 1; idx < (rowSize - 1); idx++) {
						$("div.container").find("div.row.data").eq(0).find("div.add-row").find("a[data-link=add-row]").click();
					}
					
					$("div.container").find("div.row").each(function(idx, item){
						$(this).find("div.col").each(function(kdx, ktem){
							let valArray = rowArray[idx].split('|||');
							$(this).find("input").val(valArray[kdx]);
						});
					});
				}
				
			});
			
/**
--------------------------------------------------
▶ 샘플
-------------------------------------------------- 
MENU_ID|||MENU_NM|||MENU_DESC|||REG_ID|||REG_DT
aaa|||111|||가가가|||xxx|||100
bbb|||222|||나나나|||yyy|||200
ccc|||333|||다다다|||zzz|||300
ddd|||444|||라라라|||ccc|||400
-------------------------------------------------- 
*/
			/*
			SQL 생성하기 */
			$("button[data-link=generateSql]").on('click', function(){
				
				let headerList = [];
				let rowDataList = [];
				
				$("div.container").find("div.row").each(function(idx, item){
					let colDataList = [];
					$(this).find("div.col > input").each(function(kdx, ktem){
						colDataList.push($(this).val());
					});
					
					if(idx == 0) {
						headerList = colDataList;
					} else {
						rowDataList.push(colDataList);
					}
				});
				
				console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ SQL START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
				
				let allInsertSqlClause = "";
				let allUpdateSqlClause = "";
				let allDeleteSqlClause = "";
				
				$(rowDataList).each(function(idx, item){
					
					let valuesClauseList = [];
					
					$(rowDataList[idx]).each(function(kdx, ktem){
						valuesClauseList.push("'" + ktem + "'");
					});
					
					let tableName = $("#tableName").val();
					
					let itemInsertSqlClause = "INSERT INTO "+tableName+"("+headerList.join(', ')+") VALUES("+valuesClauseList.join(', ')+");";
					
					let itemSetterUpdateSqlClause = "";
					for(let idx = 0; idx < headerList.length; idx++) {
						if(idx != 0) { itemSetterUpdateSqlClause += ", "; }
						itemSetterUpdateSqlClause += headerList[idx] + " = " + valuesClauseList[idx];
					}
					
					let itemUpdateSqlClause = "UPDATE "+tableName+" SET "+itemSetterUpdateSqlClause+" WHERE 1 <> 1;";
					
					let itemConditionDeleteSqlClause = "";
					for(let idx = 0; idx < headerList.length; idx++) {
						if(idx != 0) { itemConditionDeleteSqlClause += "AND "; }
						itemConditionDeleteSqlClause += headerList[idx] + " = " + valuesClauseList[idx];
					}
					
					let itemDeleteSqlClause = "DELETE FROM "+tableName+" WHERE "+itemConditionDeleteSqlClause+";";
					
					console.log("[itemInsertSqlClause]["+itemInsertSqlClause+"]");
					console.log("[itemUpdateSqlClause]["+itemUpdateSqlClause+"]");
					console.log("[itemDeleteSqlClause]["+itemDeleteSqlClause+"]");
					
					allInsertSqlClause += itemInsertSqlClause + "\n";
					allUpdateSqlClause += itemUpdateSqlClause + "\n";
					allDeleteSqlClause += itemDeleteSqlClause + "\n";
				});
				console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ SQL END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");

				$("#txaOutputInsert").val(allInsertSqlClause);
				$("#txaOutputUpdate").val(allUpdateSqlClause);
				$("#txaOutputDelete").val(allDeleteSqlClause);
			});
			
		});
		
		
		
const fnAddRow = function(){
	let _$row = $(this).parents(".row").clone();
	
	_$row.each(function(){
		$(this).find("input").val("");
	});
	
	$(this).parents(".row").after(_$row);
	
	$("a[data-link=add-row]").off('click').on('click', fnAddRow);
	$("a[data-link=del-row]").off('click').on('click', fnDelRow);
};
		
const fnDelRow = function(){
	if(confirm("삭제?")) {
		$(this).parents(".row").remove();
	}
	
	$("a[data-link=add-row]").off('click').on('click', fnAddRow);
	$("a[data-link=del-row]").off('click').on('click', fnDelRow);
};
	
	</script>
</head>

<body>
	<textarea id="txaInput" style="width: 100%; height:200px; background: cyan;">MENU_ID|||MENU_NM|||MENU_DESC|||REG_ID|||REG_DT
aaa|||111|||가가가|||xxx|||100
bbb|||222|||나나나|||yyy|||200
ccc|||333|||다다다|||zzz|||300
ddd|||444|||라라라|||ccc|||400</textarea>
	<hr/>
	<button data-link="convert" style="padding: 3px 5px; cursor: pointer;">변환하기 - 구분자 |||, 엔터</button>
	<hr/>
	테이블명 : <input id="tableName" type="text" value="irs_user.MENU_BSC"/>
	<hr/>
	<div class="container">
	
		<div class="row header">
			<div class="col"><input type="text"/></div>
			<div class="add-col"><a href="#" data-link="add-col">▶▶▶▶</a></div>
		</div>
		<div class="row data">
			<div class="col"><input type="text"/></div>
			<div class="add-row"><a href="#" data-link="add-row">▼▼</a><a href="#" data-link="del-row">XX</a></div>
		</div>
	</div>
	<hr/>
	<button data-link="generateSql" style="padding: 3px 5px; cursor: pointer;">SQL 만들기</button>
	<hr/>
	<textarea id="txaOutputInsert" style="width: 100%; height:200px; background: Chartreuse;"></textarea>
	<textarea id="txaOutputUpdate" style="width: 100%; height:200px; background: Chartreuse;"></textarea>
	<textarea id="txaOutputDelete" style="width: 100%; height:200px; background: Chartreuse;"></textarea>
</body>
</html>