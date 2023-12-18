/**
*  @FileName 	Validation.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.24
*  @Desction	Validation 관련된 공통함수 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.24     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnSetValidationComp					: 화면컴포넌트 유효성 체크 설정
 * gfnSetValidationGrid					: 그리드 유효성 체크 설정
 * gfnValidation						: Validation 체크 실행
 * gfnValidationComp					: 화면컴포넌트 유효성 체크 내부함수
 * gfnValidationGrid					: 그리드 유효성 체크 내부함수
 * gfnValidationCheckRule				: 데이터의 정합성을 체크하여 그 결과를 리턴 내부함수
 * gfnGetKoreanTarget					: 메세지처리 내부함수
 * gfnIsKoreanChar						: 한글만으로 되어 있는지 Check
 * gfnIsSpecialChar						: 특수문자가 있는지 Check
 * gfnIsSSN								: 주민등록번호 여부를 확인
 * gfnIsFrnrIdNo						: 외국인 등록번호 여부를 확인
 * gfnIsBzIdNo							: 사업자 등록번호 여부를 확인
 * gfnIsFirmIdNo						: 법인 등록번호 여부를 확인
 * gfnIsCardNo							: 신용카드번호 여부를 확인
 * gfnIsEmail							: 이메일 형식에 맞는지 Check
 * gfnIsIPaddress						: IP Address 형식에 맞는지 Check
 * gfnDataCheck							: 날짜 From ~ To 체크
 * gfnIsTime							: 시간 정합성 여부를 확인 (4자리 숫자 HHmi)
 * gfnGetValidateMessage				: validation용 메시지를 찾아서 반환한다.
 * gfnConvertValidateMessage			: 메시지 변환용 함수
**************************************************************************/
 

/**
 * @class 화면컴포넌트 유효성 체크 설정
 * @param {object} objComp - object component
 * @param {string} sTitle - component 타이틀
 * @param {string} sCheckList - Validation Rule
 * @return N/A
 */
pForm.gfnSetValidationComp = function(objComp, sTitle, sCheckList)
{
	sTitle = sTitle.replace(",","_");
	objComp.validate = "title:" + sTitle + "," + sCheckList;
};

/**
 * @class 그리드 유효성 체크 설정
 * @param {object} objComp - object component
 * @param {string} sTitle - component 타이틀
 * @param {string} sCheckList - Validation Rule
 * @return N/A
 */
pForm.gfnSetValidationGrid = function(objComp, sCol, sTitle, sCheckList)
{
	sTitle = sTitle.replace(",","_");
	if ( this.gfnIsNull(objComp.validate) ) 
	{
		objComp.validate = "col:" + sCol + "," + "title:" + sTitle + "," + sCheckList;
	}
	else 
	{
		objComp.validate = objComp.validate + "|" + "col:" + sCol + "," + "title:" + sTitle + "," + sCheckList;
	}
};

/**
 * @desc	Validation 체크 실행
 * @param {Object} obj				- Validation Check 대상 컴포넌트(Div, Tab, Grid)
 * @param {Boolean} bCheckCol		- 대상이 Grid일때 체크컬럼에 따라 validation체크할지 여부(default:true)
                                      (true:공통체크컬럼이 'Y'일때만 실행, false:체크컬럼상관없이 실행))
 * @param {String} sTargetFlag		- 대상이 Grid일때 전체Row를 대상으로 할지 여부(default:"U") (단, bCheckCol = true 이면 check인것만 실행)
									- "U" : Dataset의 getRowType()기준으로 insert,update인 row만을 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
                                    - "A"  : 전체Row를 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
 * @return {Boolean} true/false
 ★ Div의 Validation은 taborder 순서대로 실행합니다.
 */
pForm.gfnValidation = function(obj, bCheckCol, sTargetFlag)
{
	var arrComponent = [];
	var arrComponentTabOrder = [];
	if( obj instanceof nexacro.Div)
	{
		arrComponent = obj.form.components;
 		for( var i=0; i<arrComponent.length; i++) 
		{
 			arrComponentTabOrder.push({comp:arrComponent[i],taborder:arrComponent[i].taborder});
 		}
		
 		//taborder 순서대로 배열
 	    arrComponentTabOrder = arrComponentTabOrder.sort(function(a,b) {
 			if ( a.taborder > b.taborder ) return 1;
 			if ( a.taborder == b.taborder ) return 0;
 			if ( a.taborder < b.taborder ) return -1;
 		});
		
		for( var i=0; i<arrComponentTabOrder.length; i++)
		{
			var bSucc = this.gfnValidation(arrComponentTabOrder[i].comp, bCheckCol, sTargetFlag);
			if( !bSucc )
			{
				return false;
			}
		}
	}
	else if( obj instanceof nexacro.Tab)
	{
		var arrPage = obj.tabpages;
		for( var i=0; i<arrPage.length; i++)
		{
			arrComponent = arrPage[i].form.components;
			for( var j=0; j<arrComponent.length; j++)
			{
				var bSucc = this.gfnValidation(arrComponent[j], bCheckCol, sTargetFlag);
				if( !bSucc )
				{
					return false;
				}
			}
		}
	}
	else if( obj instanceof nexacro.Grid)
	{
		var bSucc = this.gfnValidationGrid(obj, bCheckCol, sTargetFlag);
		if( !bSucc )
		{
			return false;
		}
	}
	else 
	{
		var bSucc = this.gfnValidationComp(obj);
		if( !bSucc )
		{
			return false;
		}
	}
	return true;
};

/**
 * @class 화면컴포넌트 유효성 체크 내부함수
 *        콤포넌트에 user property로 validate 값이 존재하는 것만 유효성 검증함
 *        첫번째인자는 title사용
 * @param {object} objComp - object component
 * @return true:유효함, false:검증실패
 */
pForm.gfnValidationComp = function(objComp)
{
	var sValidRule = objComp.validate;
	
	if ( this.gfnIsNull(sValidRule) ) return true;		//유효성체크 pass

	var aChecklist = sValidRule.split(",");
	
	//타이틀
	var sTitle		= aChecklist[0].split(":")[1].split("^")[0];
	var checkvalue  = this.gfnTrim(objComp.value);
	
	// Rule에 따른 정합성 체크
	for(var k=1;k<aChecklist.length;k++)
	{
		var msg = "";
		
		var aChecklistDetail = aChecklist[k].split(":");
		var checkrule =  aChecklistDetail[0];
		// 컬럼의 두개의 값을 이용해서 처리하는 check 대상
		if (checkrule == "equalto" || checkrule == "fromto" || checkrule == "comparebig" || checkrule == "comparesmall")
		{
			var compare1;
			var compare2;

			if( aChecklistDetail.length == 3 ) 
			{
				if ( new String(aChecklistDetail[1]).indexOf("this.") > -1 ) compare1 = eval(aChecklistDetail[1]);
				else compare1 = aChecklistDetail[1];
				
				if ( new String(aChecklistDetail[2]).indexOf("this.") > -1 ) compare2 = eval(aChecklistDetail[2]);
				else compare2 = aChecklistDetail[2];
			}
			else
			{
				compare1 = checkvalue;
				if ( new String(aChecklistDetail[1]).indexOf("this.") > -1 ) compare2 = eval(aChecklistDetail[1]);
				else compare2 = aChecklistDetail[1];
			}
			
			msg = this.gfnValidationCheckRule(aChecklist[0], checkvalue, aChecklist[k], compare1, compare2);
		}
		// 컬럼의 한개 값을 이용해서 처리하는 check 대상
		else 
		{
			msg = this.gfnValidationCheckRule(sTitle, checkvalue, aChecklist[k]);
		}

		// 에러시
		if (!this.gfnIsNull(msg))
		{
			// focus 이동
			objComp.setFocus();
			
			// 메시지 처리 {}
			this.gfnShowMessage(this, ["alert", msg], "", "gfnValidationCallback");
			
			return false;
		}
	}  // Rule에 따른 정합성 체크

	return true;
};

/**
 * @class Grid에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.
 * @param {Object} Check 대상 Grid Object
 * @param {Boolean} bCheckCol		- 대상이 Grid일때 체크컬럼에 따라 validation체크할지 여부(default:true)
                                      (true:공통체크컬럼이 'Y'일때만 실행, false:체크컬럼상관없이 실행))
 * @param {String} sTargetFlag		- 대상이 Grid일때 전체Row를 대상으로 할지 여부(default:"U") (단, bCheckCol = true 이면 check인것만 실행)
									- "U" : Dataset의 getRowType()기준으로 insert,update인 row만을 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
                                    - "A"  : 전체Row를 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
 * @return {Boolean} 정상 true / 오류 false
 */
pForm.gfnValidationGrid = function(oGrid, bCheckCol, sTargetFlag)
{
	var sValidRule = oGrid.validate;
	
	if ( this.gfnIsNull(sValidRule) ) return true;		//유효성체크 pass
	
	if ( this.gfnIsNull(bCheckCol) ) 
	{
		var arrProp = oGrid.arrProp;
		if(this.gfnIsNull(arrProp))		// 설정할 속성이 없을 경우
		{	
			bCheckCol = false;
		} 
		else 
		{
			if ( arrProp.indexOf("checkbox") == -1 ) 
			{
				bCheckCol = false; 		//Checkbox없을 경우
			} 
			else 
			{
				bCheckCol = true;		//디폴트 : 체크된것만 대상
			}
		}
	}
	
	if ( this.gfnIsNull(sTargetFlag) ) sTargetFlag = "U";	//디폴트 : 데이타셋 getRowType() 이 업데이트인것만 대상
	
	var aColExpr  = sValidRule.split("|"); 				//col단위로 자르기
	
	var oValidDs  = oGrid.getBindDataset();				//Grid의 BindDataset
	var nRowCnt   = oValidDs.getRowCount();				//Dataset의 row count
	
	for( var i=0; i<nRowCnt; i++)
	{
		//체크컬럼에 따라 validation체크할지 여부(true:체크컬럼이 'Y'일때만 실행, false:체크컬럼상관없이 실행)
		if ( bCheckCol == true )		//디폴트:true, 공통체크박스 컬럼명 : "gridCmmCheck"
		{
			if (oValidDs.getColumn(i, this.gvCommonCheckColsNm) != "Y") 
			{
				continue;
			}
		}

		//"A"  : 전체Row를 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
		if ( sTargetFlag == "U" ) 
		{
			if (oValidDs.getRowType(i) != Dataset.ROWTYPE_INSERT 
			 && oValidDs.getRowType(i) != Dataset.ROWTYPE_UPDATE ) 
			{
				continue;
			}
		}
		
		var nColIdx = -1;
		for( var n=0; n<aColExpr.length; n++)
		{
			if ( this.gfnIsNull(aColExpr[n]) ) continue;
			
			var aValidExpr = aColExpr[n].split(",");
			var aColId = aValidExpr[0].split(":"); //첫번째 colID ( col:column0 )
			var sColId = aColId[1];
			var aTitle = aValidExpr[1].split(":");	//두번째 title( title:아이디 )
			var sTitle = aTitle[1].split("^")[0];
			
			nColIdx = oValidDs.getColIndex(sColId);
			
			if(nColIdx > -1)
			{
				var checkvalue   = oValidDs.getColumn(i, nColIdx);
				for( var k=2; k < aValidExpr.length; k++)
				{
					var msg = "";
					
					var aChecklistDetail = aValidExpr[k].split(":");
					var checkrule =  aValidExpr[k].split(":")[0];
					// 컬럼의 두개의 값을 이용해서 처리하는 check 대상
					if (checkrule == "equalto" || checkrule == "fromto" || checkrule == "comparebig" || checkrule == "comparesmall")
					{
						var compare1;
						var compare2;

						if( aChecklistDetail.length == 3 ) 
						{
							compare1 = oValidDs.getColumn(i, aChecklistDetail[1]);
							compare2 = oValidDs.getColumn(i, aChecklistDetail[2]);
						}
						else 
						{
							compare1 = oValidDs.getColumn(i, sColId);
							compare2 = oValidDs.getColumn(i, aChecklistDetail[1]);
						}
						msg = this.gfnValidationCheckRule(aTitle[1], checkvalue, aValidExpr[k], compare1, compare2);
					}
					// 컬럼의 한개 값을 이용해서 처리하는 check 대상
					else
					{
						msg = this.gfnValidationCheckRule(aTitle[1], checkvalue, aValidExpr[k]);
					}

					// 에러시
					if (!this.gfnIsNull(msg))
					{
						// row 이동 및 focus 이동
						oValidDs.set_rowposition(i);
						oGrid.setFocus();
						var nCell = oGrid.getBindCellIndex( "body", sColId);	//column과 바인드된 cell index
						var bSucc = oGrid.setCellPos(nCell);
 						if ( bSucc ) bSucc = oGrid.showEditor();
						
						// 메시지 처리 : ${}
						this.gfnShowMessage(this, ["alert", ( i + 1 ) + "행의 " + msg], "", "gfnValidationCallback");
						return false;
					}
				}
			}
		}
	}
	return true;
};

/**
 * @class 데이터의 정합성을 체크하여 그 결과를 리턴한다. 메세지가 "" 널이면.. 정상 널이 아니면 실패이다.
 * @param {String} itemName - Column title
 * @param {Stirng} itemValue - Column 값
 * @param {String} validationRuleSet - validation Rule
 * @return {Stirng} 정상이면 "" 실패이면 "XXX는 7자리입니다." 와 같은 완성형 에러메세지
 */
pForm.gfnValidationCheckRule = function(itemName, itemValue, validationRuleSet, compare1, compare2)
{
//trace("itemName==="+itemName+"::::::::itemValue===="+itemValue+"::::::::validationRuleSet===="+validationRuleSet+"::::::::compare1===="+compare1+"::::::::compare2===="+compare2);
	var sTitle     = "";
	var columname1 = "";
	var columname2 = "";
	if (itemName.indexOf("^") != -1) 
	{
		sTitle     = itemName.split(":")[1].split("^")[0];
		columname1 = itemName.split(":")[1].split("^")[0];
		columname2 = itemName.split(":")[1].split("^")[1];
	}
	else 
	{
		sTitle = itemName;
	}

	var arrItem2  =  validationRuleSet.split(":");
	var checkrule =  arrItem2[0];

	checkrule = checkrule.toLowerCase();

	// 필수값이 아닌 경우는 체크할 값이 null이 아닌 경우에만 체크
	if ( checkrule != "required" ) 
	{
		if (checkrule == "equalto" || checkrule == "fromto" || checkrule == "comparebig" || checkrule == "comparesmall")
		{
			if ( this.gfnIsNull(compare1) && this.gfnIsNull(compare2)) return "";
		}
		else
		{
			if ( this.gfnIsNull(itemValue) ) return "";
		}
	}
	
	switch(checkrule)
	{
		// 필수체크
		case "required":
			if (this.gfnIsNull(itemValue))
			{
				// {0}은(는) 필수 입력 항목입니다.
				return this.gfnGetValidateMessage("msg.err.validator.required",[sTitle]);
			}
			break;
		// size 크기 지정 : length:7
		case "length":
			if( (itemValue+"").length != parseInt(arrItem2[1]))
			{
				// {0} 의 입력값은 {1} 자리이어야 합니다. 
				return this.gfnGetValidateMessage("msg.err.validator.length",[sTitle, arrItem2[1]]);
			}
			break;
		// size 크기의 범위 : rangelength:2:3
		case "rangelength":
			if( (itemValue+"").length < parseInt(arrItem2[1]) || (itemValue+"").length > parseInt(arrItem2[2]))
			{
				// {0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.	
				return this.gfnGetValidateMessage("msg.err.validator.rangelength",[sTitle, arrItem2[1], arrItem2[2]]);
			}
			break;
		// 최대 size 크기: maxlength:7
		case "maxlength":
			if (itemValue.length > parseInt(arrItem2[1]))
			{
				// {0} 의 입력값의 길이는 {1} 이하이어야 합니다.	
				return this.gfnGetValidateMessage("msg.err.validator.maxlength",[sTitle, arrItem2[1]]);
			}
			break;
		// 최소 size 크기: minlength:7
		case "minlength":
			if (itemValue.length < parseInt(arrItem2[1]))
			{
				// {0} 의 입력값의 길이는 {1} 이상이어야 합니다.	
				return this.gfnGetValidateMessage("msg.err.validator.minlength",[sTitle, arrItem2[1]]);
			}
			break;
		// 최대 size 크기(Byte) : maxlengthbyte:3
		case "maxlengthbyte":
			if (this.lookupFunc("gfnLengthByte").call(itemValue) > parseInt(arrItem2[1]))
			{
				// {0} 의 입력값의 길이는 {1} 이하이어야 합니다.[단위:한글2,그외:1 Byte]
				return this.gfnGetValidateMessage("msg.err.validator.maxlengthbyte",[sTitle, arrItem2[1]]);
			}
			break;
		// 최소 size 크기(Byte) : minlengthbyte:3
		case "minlengthbyte":
			if (this.lookupFunc("gfnLengthByte").call(itemValue) < parseInt(arrItem2[1]))
			{
				// {0} 의 입력값의 길이는 {1} 이상이어야 합니다.[단위:한글2,그외:1 Byte]
				return this.gfnGetValidateMessage("msg.err.validator.minlengthbyte",[sTitle, arrItem2[1]]);
			}
			break;
		// 숫자 여부 : digits
		case "digits":		
			if (!this.lookupFunc("gfnIsDigit").call(itemValue))
			{
				// {0} 은(는) 숫자만 입력 가능합니다.	
				return this.gfnGetValidateMessage("msg.err.validator.digits",[sTitle]);
			}
			break;
		// 해당 숫자 이하 : min:7
		case "min":
			if (parseFloat(itemValue) < parseFloat(arrItem2[1]))
			{
				// {0} 은(는) {1} 이상의 숫자만 입력 가능합니다.	
				return this.gfnGetValidateMessage("msg.err.validator.min",[sTitle, arrItem2[1]]);
			}
			break;
		// 해당 숫자 이상 : max:7
		case "max":
			if (parseFloat(itemValue) > parseFloat(arrItem2[1]))
			{
				// {0} 은(는) {1} 이하의 숫자만 입력 가능합니다.
				return this.gfnGetValidateMessage("msg.err.validator.max",[sTitle, arrItem2[1]]);
			}
			break;
		// 소숫점 자리수 비교 - declimit:3
		case "declimit":
			var isExistDot = (""+itemValue).indexOf(".");
			if (isExistDot == -1)
			{
				// {0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.
				return this.gfnGetValidateMessage("msg.err.validator.declimit",[sTitle, arrItem2[1]]);
			}
			else
			{
				var decLen = (""+itemValue).substr(isExistDot + 1, itemValue.length);
				if (decLen.length != parseInt(arrItem2[1]))
				{
					// {0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.
					return this.gfnGetValidateMessage("msg.err.validator.declimit",[sTitle, arrItem2[1]]);
				}
			}
			break;
		// 날짜 년월일 체크 : date
		case "date":
			if (!this.lookupFunc("gfnIsYMD").call(itemValue))
			{
				// {0} 은(는) 유효하지 않은 날짜 형식입니다.
				return this.gfnGetValidateMessage("msg.err.validator.date",[sTitle]);
			}
			break;
		// 날짜 년월 체크 : dateym
		case "dateym":
			if (!this.lookupFunc("gfnIsYM").call(itemValue))
			{
				// {0} 은(는) 유효하지 않은 년월 형식입니다.
				return this.gfnGetValidateMessage("msg.err.validator.dateym",[sTitle]);
			}
			break;
		// 시간 체크 : time
		case "time":
			if (!this.lookupFunc("gfnIsTime").call(itemValue))
			{
				// {0} 은(는) 유효하지 시간 형식입니다.
				return this.gfnGetValidateMessage("msg.err.validator.time",[sTitle]);
			}
			break;
		// 사이의 값인지 비교 - range:40:100
		case "range":
			if (parseInt(itemValue) < parseInt(arrItem2[1]) || parseInt(itemValue) > parseInt(arrItem2[2]))
			{
				//{0}값이 {1}∼ {2}이어야 합니다.
				return this.gfnGetValidateMessage("msg.err.validator.range",[sTitle,arrItem2[1],arrItem2[2]]);
			}
			break;
		// 코드값이 목록내의 값인지 비교 - code:1:2:3
		case "code":
			for (var i = 1; i < arrItem2.length; i++)
			{
				if (parseInt(itemValue) == parseInt(arrItem2[i]))
				{
					return "";
				}
			}
			// {0} 은(는) {1} 중 하나의 값이어야 합니다.
			return this.gfnGetValidateMessage("msg.err.validator.code",[sTitle,nexacro.replaceAll(validationRuleSet.split("code:")[1],":",",")]);
			break;
		// 타 칼럼값과 같은지 비교 - equalto:target칼럼명
		case "equalto":
			if( compare1 != compare2 )
			{
				if (itemName.indexOf("^") != -1 ) 
				{
					// {0} 이(가) {1} 와(과) 일치하지 않습니다.
					return this.gfnGetValidateMessage("msg.err.validator.equalto",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else 
				{
					// {0} 이(가) {1} 와(과) 일치하지 않습니다.
					return this.gfnGetValidateMessage("msg.err.validator.equalto",[sTitle,compare2]);
				}
			}
			break;
		// 날짜 from ~ to 비교 : fromto:target칼럼명
		case "fromto":
			if (compare1 < compare2)
			{
				if( itemName.indexOf("^") > -1 )
				{
					// {0} 의 날짜가 {1} 의 날짜보다 작습니다.
					return this.gfnGetValidateMessage("msg.err.validator.fromto",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else 
				{
					// {0} 의 날짜가 {1} 의 날짜보다 작습니다.
					return this.gfnGetValidateMessage("msg.err.validator.fromto",[sTitle,compare2]);
				}
			}
			break;
		// 타 칼럼값보다 큰값인지 비교 - comparebig:target칼럼명
		case "comparebig":
			if( parseFloat(compare1) < parseFloat(compare2) )
			{
				if( itemName.indexOf("^") != -1 ) 
				{
					//{0}값이 {1}보다 커야합니다.
					return this.gfnGetValidateMessage("msg.err.validator.comparebig",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else 
				{
					//{0}값이 {1}보다 커야합니다.
					return this.gfnGetValidateMessage("msg.err.validator.comparebig",[sTitle,compare2]);
					
				}
			}
			break;
		// 타 칼럼값과 작은값인지 비교 - comparesmall:comparetarget
		case "comparesmall":
			//trace("compare1==="+compare1+"::::::::compare2==="+compare2);
			if( parseFloat(compare1) > parseFloat(compare2) )
			{
				if( itemName.indexOf("^") != -1 ) 
				{
					// {0}값이 {1}보다 작아야 합니다.
					return this.gfnGetValidateMessage("msg.err.validator.comparesmall",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else 
				{
					// {0}값이 {1}보다 작아야 합니다.
					return this.gfnGetValidateMessage("msg.err.validator.comparesmall",[sTitle,compare2]);
				}
			}
			break;

		// 아래부터는 해당 프로젝트에서 추가한 Validation 함수로 체크 로직 추가 가능

		// 주민등록번호 체크 - isssn
		case "isssn":
			if (!this.lookupFunc("gfnIsSSN").call(itemValue))
			{
				// {0} 은(는) 올바른 주민번호가 아닙니다.
				return this.gfnGetValidateMessage("msg.err.validator.ssn",[sTitle]);
				
			}
			break;
		// 외국인등록번호 체크 - isfrn
		case "isfrn":
			if (!this.lookupFunc("gfnIsFrnrIdNo").call(itemValue))
			{
				// {0} 은(는) 올바른 외국인등록번호가 아닙니다.
				return this.gfnGetValidateMessage("msg.err.validator.isfrn",[sTitle]);
			}
			break;
		// 사업자등록번호 체크 - isbzid
		case "isbzid":
			if (!this.lookupFunc("gfnIsBzIdNo").call(itemValue))
			{
				// {0} 은(는) 올바른 사업자등록번호가 아닙니다.
				return this.gfnGetValidateMessage("msg.err.validator.isbzid",[sTitle]);
			}
			break;
		// 법인등록번호 체크 - isfirmid
		case "isfirmid":
			if (!this.lookupFunc("gfnIsFirmIdNo").call(itemValue))
			{
				// {0} 은(는) 올바른 법인등록번호가 아닙니다.
				return this.gfnGetValidateMessage("msg.err.validator.isfirmid",[sTitle]);
			}
			break;
		// 신용카드번호 체크 - iscardno
		case "iscardno":
			if (!this.lookupFunc("gfnIsCardNo").call(itemValue))
			{
				// {0} 은(는) 올바른 신용카드번호가 아닙니다.
				return this.gfnGetValidateMessage("msg.err.validator.iscardno",[sTitle]);
			}
			break;
		// 이메일 체크 - isemail
		case "isemail":
			if (!this.lookupFunc("gfnIsEmail").call(itemValue))
			{
				// {0} 은(는) e-mail이 잘못된 형태로 입력 되었습니다.
				return this.gfnGetValidateMessage("msg.err.validator.email",[sTitle]);
			}
			break;

		default:
			return "";
			break;
	}
	return "";
};

/**
 * @class 한글의 은(는) 이(가) 을(를)에 대한 메세지처리를 초정/중성/종성의 갯수로 파악해서 처리한다.
 * @param {String} itemName - 대상 한글
 * @param {String} option - 접미사
 * @return {String} 완성형 메세지
 */
pForm.gfnGetKoreanTarget = function(itemName, option)
{
    if (option == "은(는)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) 
		{
            return itemName+"는";
        } 
		else 
		{
            return itemName+"은";
		}
    }
    else if (option == "이(가)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) 
		{
            return itemName+"가";
        } 
		else 
		{
            return itemName+"이";
		}
    }
    else if (option == "을(를)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) 
		{
            return itemName+"를";
        } 
		else 
		{
            return itemName+"을";
		}
    }
    else 
	{
        return itemName;
    }
};

/**
 * @class      	문자열(한글)의 초성/중성/종성의 정보를 가져온다.
 * @return 		{Array} 초성/중성/종성의 갯수만큼을 Array 배열로 리턴한다.
 */
String.prototype.toKorChars = function()
{
    var cCho  = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
        cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ],
        cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
        cho, jung, jong;

    var str = this,
        cnt = str.length,
        chars = [],
        cCode;

    for (var i = 0; i < cnt; i++) 
	{
        cCode = str.charCodeAt(i);

		if (cCode == 32) { continue; }

        // 한글이 아닌 경우
        if (cCode < 0xAC00 || cCode > 0xD7A3) 
		{
            chars.push(str.charAt(i));
            continue;
        }

        cCode  = str.charCodeAt(i) - 0xAC00;

        jong = cCode % 28; // 종성
        jung = ((cCode - jong) / 28 ) % 21 // 중성
        cho  = (((cCode - jong) / 28 ) - jung ) / 21 // 초성

        chars.push(cCho[cho], cJung[jung]);
		if (cJong[jong] !== '') { chars.push(cJong[jong]); }
    }

    return chars;
};

/**
 * @class 한글만으로 되어 있는지 Check한다. <br>
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfnIsKoreanChar = function(strValue)
{
	var retVal = true;
	
	for (i = 0; i < strValue.length; i++)
	{
		if (!((strValue.charCodeAt(i) > 0x3130 && strValue.charCodeAt(i) < 0x318F) || (strValue.charCodeAt(i) >= 0xAC00 && strValue.charCodeAt(i) <= 0xD7A3)))
		{
			retVal = false;
		}
	}
	
	return retVal;
};

/**
 * @class 특수문자가 있는지 Check한다. <br>
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfnIsSpecialChar = function(strValue)
{
	var retVal = false;
	if(strValue.search(/\W|\s/g) > -1) retVal = true;

	return retVal;
};

/**
 * @class 주민등록번호 여부를 확인한다. <br>
 * @param {String} sJuminNo - 입력문자열(주민번호 13자리)
 * @return {Boolean}
 */
pForm.gfnIsSSN = function(sJuminNo)
{
	if ( this.gfnIsNull(sJuminNo) ) return true;
	
	var birthYear = this.gfnGetBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	var birthMonth = sJuminNo.substr(2, 2)-1;
	var birthDate = sJuminNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) 
	{
		return false;
	}
	else
	{
		return true;
	}
};

/**
 * @class 외국인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(등록번호13자리)
 * @return {Boolean}
 */
pForm.gfnIsFrnrIdNo = function(strNo)
{
	if ( this.gfnIsNull(strNo) ) return true;
	
	if (strNo.length != 13 || !nexacro.isNumeric(strNo)) return false;
	
	var month = nexacro.toNumber(strNo.substr(2, 2));
	var day	  = nexacro.toNumber(strNo.substr(4, 2));
		
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;
	
	var sum = 0;
	var odd = 0;
	var buf = array(13);
	var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for (var i=0; i<13; i++) 
	{
		buf[i] = nexacro.toNumber(strNo.charAt(i));
	}
	
	if (buf[11] < 6) return false;
	
	odd = buf[7] * 10 + buf[8];
	if((odd%2) != 0) return false;
	
	for (var i=0; i<12; i++) 
	{
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = 11 - (sum % 11);
	
	if (sum >= 10) sum -= 10;
	sum += 2;
	if (sum >= 10) sum -= 10;
	
	if (buf[12] == sum) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
};

/**
 * @class 사업자 등록번호 여부를 확인한다.
 * @param {String} strCustNo - 입력문자열(등록번호10자리)
 * @return {Boolean}
 */
pForm.gfnIsBzIdNo = function(strCustNo)
{
	if ( this.gfnIsNull(strCustNo) ) return true;
	
	if (strCustNo.length != 10) 
	{
		return false;
	}
	else 
	{
		var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
		var tmpcustNo, i, chkSum=0, c2, remander;
		
		for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);
		
		c2 = "0" + (checkID[8] * strCustNo.charAt(8));
		c2 = c2.substring(c2.length - 2, c2.length);
		
		chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
		
		remander = (10 - (chkSum % 10)) % 10 ;
		
		if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
		return false;
	}

	return true;
};

/**
 * @class 법인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(법인번호13자리)
 * @return {Boolean}
 */
pForm.gfnIsFirmIdNo = function(strNo)
{
	if ( this.gfnIsNull(strNo) ) return true;
	
	if (strNo.length != 13 || !nexacro.isNumeric(strNo)) return false;
	
	var sum = 0;
	var buf = new Array(13);
	var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
	
	for (var i=0; i<13; i++) 
	{
		buf[i] = nexacro.toNumber(strNo.charAt(i));
	}
	
	for (var i=0; i<12; i++) 
	{
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = (10 - (sum % 10)) % 10;
	
	if (buf[12] == sum) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
};

/**
 * @class 신용카드번호 여부를 확인한다. <br>
 * @param {String} strNo - 카드번호16자리
 * @return {Boolean}
 */
pForm.gfnIsCardNo = function(strNo)
{
	if ( this.gfnIsNull(strNo) ) return true;

	if (strNo.length < 13 || strNo.length > 19 || !nexacro.isNumeric(strNo)) return false;
	
	var sum = 0;
	var buf = new Array();
	
	for (var i=0; i<strNo.length; i++) 
	{
		buf[i] = nexacro.toNumber(strNo.charAt(i));
	}
	
	var temp;
	for (var i=buf.length-1, j=0; i>=0; i--, j++) 
	{
		temp = buf[i] * ((j%2) + 1);
		if (temp >= 10) 
		{
			temp = temp - 9;
		}
		sum += temp;
	}
	
	if ((sum % 10) == 0) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
};

/**
 * @class 이메일 형식에 맞는지 Check한다.
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfnIsEmail = function(strValue)
{
	if ( this.gfnIsNull(strValue) ) return true;
	
	var retVal = false;
	var sTmp = "";
	var sRegExp = "[a-z0-9_]+[a-z0-9.,_-]+@[a-z0-9_]+[a-z0-9.,_-]+\\.[a-z0-9]+";

	var regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if (sTmp == null) 
	{
		retVal = false;
	} 
	else 
	{
		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) 
		{
			retVal = true;
		} 
		else 
		{
			retVal = false;
		}
	}
	return retVal;
};

/**
 * @class IP 형식에 맞는지 Check한다.
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfnIsIPaddress = function(strValue)
{
	if ( this.gfnIsNull(strValue) ) return true;
	
	var retVal = false;
	var sTmp = "";
	var sRegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

	var regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if (sTmp == null) 
	{
		retVal = false;
	} 
	else 
	{
		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) 
		{
			retVal = true;
		} 
		else 
		{
			retVal = false;
		}
	}
	return retVal;
};

/**
 * @class 날짜 From ~ To 체크
 * @param {String} sDateFrom
 * @param {String} sDateTo
 * @return {Boolean}
 */
pForm.gfnDataCheck = function(sDateFrom, sDateTo, objFocusComp)
{
	if ( this.gfnIsNull(sDateFrom) || this.gfnIsNull(sDateTo)) return true;
	
	if ( sDateFrom > sDateTo ) 
	{
		if ( objFocusComp ) objFocusComp.setFocus();
		
		// {0} 의 날짜가 {1} 의 날짜보다 작습니다.
		var sMsg = this.gfnGetValidateMessage("msg.err.validator.fromto",["To","From"]);
		this.gfnShowMessage(this, ["alert", sMsg]);
		return false;
	}
	
	return true;
};

/**
 * @desc	시간 정합성 여부를 확인 (4자리 숫자 HHmi)
 * @param {String} sTime			- 4자리의 숫자로 된 시간(HHmi)
 * @return {Boolean} 올바른 시간형식(true), 그 외(false)
 */
pForm.gfnIsTime = function(sTime)
{
	var sRetVal = this.gfnGetDigit(sTime);					// 숫자 외 문자 제거
	
	if (sRetVal.length != 4) return false;					// 4자리가 아닌 경우 false 반환
	
	// 입력값 확인
	var sHour		= sRetVal.substr(0,2);					// 시간String)
	var sMin		= sRetVal.substr(2,2);					// 분(String)

	var nHour		= nexacro.toNumber(sHour);				// 시간(Number)
	var nMin		= nexacro.toNumber(sMin);				// 분(Number)

	if (nHour < 0 || nHour > 23) return false;				// 시간 오류(00시~23시 외) false 반환
	if (nMin < 0 || nMin > 59) return false;				// 분 오류(00분~59분 외) false 반환
	
	return true;											// 정상건 true 반환
};

/**
 * @desc	validation용 메시지를 찾아서 반환한다.
 * 			메세지코드가 없는 경우 메시지ID를 메시지 텍스트로 반환함
 * @param {String} sMsgId - 메시지ID
 * @param {Array} arrArg - 치환용 Text
 * @return 변환 결과 메시지
 */ 
pForm.gfnGetValidateMessage = function(sMsgId, arrArg) 
{	
	var oMsg = {
					"msg.err.validator.required"	: "{0}은(는) 필수 입력 항목입니다."
				   ,"msg.err.validator.length"		: "{0}의 입력값은 {1} 자리이어야 합니다."
				   ,"msg.err.validator.rangelength"	: "{0}은(는) {1} 와(과) {2} 사이의 자리이어야 합니다."
				   ,"msg.err.validator.maxlength"	: "{0}의 입력값의 길이는 {1} 이하이어야 합니다."
				   ,"msg.err.validator.maxlengthbyte"	: "{0}의 입력값의 길이는 {1} 이하이어야 합니다.[단위:한글2,그외:1 Byte]"
				   ,"msg.err.validator.minlength"	: "{0}의 입력값의 길이는 {1} 이상이어야 합니다."
				   ,"msg.err.validator.minlengthbyte"	: "{0}의 입력값의 길이는 {1} 이상이어야 합니다.[단위:한글2,그외:1 Byte]"
				   ,"msg.err.validator.digits"		: "{0}은(는) 숫자만 입력 가능합니다."
				   ,"msg.err.validator.min"			: "{0}은(는) {1} 이상의 숫자만 입력 가능합니다."
				   ,"msg.err.validator.max"			: "{0}은(는) {1} 이하의 숫자만 입력 가능합니다."
				   ,"msg.err.validator.declimit"	: "{0}은(는) 소숫점 {1} 자리로 구성되어야 합니다."
				   ,"msg.err.validator.date"		: "{0}은(는) 유효하지 않은 날짜 형식입니다."
				   ,"msg.err.validator.dateym"		: "{0}은(는) 유효하지 않은 년월 형식입니다."
				   ,"msg.err.validator.time"		: "{0} 은(는) 유효하지 시간 형식입니다."
				   ,"msg.err.validator.range"		: "{0}값이 {1}∼ {2}이어야 합니다."
				   ,"msg.err.validator.code"		: "{0}은(는) {1} 중 하나의 값이어야 합니다."
				   ,"msg.err.validator.equalto"		: "{0}이(가) {1} 와(과) 일치하지 않습니다."
				   ,"msg.err.validator.fromto"		: "{0}의 날짜가 {1} 의 날짜보다 작습니다."
				   ,"msg.err.validator.comparebig"	: "{0}값이 {1}보다 커야합니다."
				   ,"msg.err.validator.comparesmall": "{0}값이 {1}보다 작아야 합니다."
				   ,"msg.err.validator.ssn"			: "{0}은(는) 올바른 주민번호가 아닙니다."
				   ,"msg.err.validator.isfrn"		: "{0}은(는) 올바른 외국인등록번호가 아닙니다."
				   ,"msg.err.validator.isbzid"		: "{0}은(는) 올바른 사업자등록번호가 아닙니다."
				   ,"msg.err.validator.isfirmid"	: "{0}은(는) 올바른 법인등록번호가 아닙니다."
				   ,"msg.err.validator.iscardno"	: "{0}은(는) 올바른 신용카드번호가 아닙니다."
				   ,"msg.err.validator.email"		: "{0}은(는) e-mail이 잘못된 형태로 입력 되었습니다."
				};
				
	var sMsgText = oMsg[sMsgId];
	if ( this.gfnIsNull(sMsgText) ) 
	{
		sMsgText = "메시지 ID 미등록 : " + sMsgId;
	} 
	else 
	{
 		sMsgText = this.gfnConvertValidateMessage(sMsgText, arrArg);
		
 		var sOption = "";
		if ( arrArg.length > 0 ) 
		{
			if ( sMsgText.indexOf("은(는)") > -1 ) 
			{
				sOption = "은(는)";
			}
			else if ( sMsgText.indexOf("이(가)") > -1 ) 
			{
				sOption = "이(가)";
			}
			else if ( sMsgText.indexOf("을(를)") > -1 ) 
			{
				sOption = "을(를)";
			}
			if ( !this.gfnIsNull(sOption) ) 
			{
				var sTitleText = this.gfnGetKoreanTarget(arrArg[0], sOption);
				sMsgText = sMsgText.replace(arrArg[0]+sOption, sTitleText);
			}
		}
	}
	
	return sMsgText;
};

/**
 * @desc	메시지 변환용 함수
 * @param {String} msg - 메시지
 * @param {Array} values - 치환용 Text Array
 * @return 변환 결과 메시지
 */ 
pForm.gfnConvertValidateMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};