/**
*  @FileName 	Util.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.22
*  @Desction	Util 관련된 공통함수 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.22     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnIsNull							: 값이 존재하는지 여부 체크
 * gfnMathRandom						: Math.random 대체 함수
 * gfnDsPrn								: 화면 결과창에 데이타셋 찍어보기
 * gfnGetUniqueId						: 유일한 ID 를 반환
 * gfnUUID								: 36bit UUID를 생성한다. 
 * gfnNvl								: 입력값을 체크하여 Null인경우 지정한 값을 리턴
 * gfnTypeof							: 객체의 타입을 문자열로 반환한다.
 * gfnDecode							: 삼항연산자 대체 함수.
 * gfnGetObjectType						: Object의 Type을 리턴한다.
 * gfnGetCompType						: Component Type을 리턴한다.
 * gfnIsFunction						: Function 유무체크
 * gfnCreateDs							: 생성(이미 존재하는경우 해당 DS 리턴) 후 리턴
 * gfnIsDsUpdated						: 데이터셋 변경됐는지 체크
 * gfnIsModified						: 데이터셋의 변경 여부를 체크한다.
 * gfnSearchedRows						: 검색된 Row Indexes를 반환한다.
 * gfnIsDigit							: 숫자 여부 체크
 * gfnIsExistInArray					: 배열에 해당 값이 존재하는지 확인
 * gfnGetObjString						: 체크대상 컴포넌트의 기준화면에서 부터 전체 경로의 full명칭 리턴
 * gfnGetTopLevelForm					: 대상 컴포넌트를 포함하는 최상위 Form 반환
 * gfnIsPopup							: 호출영역(Form)의 팝업여부를 반환한다.
 * gfnDatasetToJson						: DataSet을 Json String으로 변환한다.
 * gfnOpenDebugPop						: 디버그 창 
 * gfnSetDefaults						: objArguments중에서 objDefaults의 속성 중에서 정의되지 않은 항목이 있으면 기본 값으로 설정한다.
 * gfnClearArgument						: Object.uarguments 정보를 클리어한다.
 * gfnSetArgument						: Object.uarguments에 objectArgument를 설정한다.
 * gfnGetParameterKeys					: 폼(팝업)에 전달된 파라메타 키 목록을 반환한다. (gfnGetArgumentKeys 호출, ChildFrame에 설정된 파라메타를 사용한다.)
 * gfnGetParameter						: 폼(팝업)에 전달된 파라메타 값을 반환한다. (gfnGetArgument 호출, ChildFrame에 설정된 파라메타를 사용한다.)
 * gfnGetArgumentKeys					: Object.uarguments의 속성 키를 배열로 반환한다.
 * gfnGetArgument						: Object.uarguments 속성에 저장된 값을 반환한다.
 * gfnFormat							: 문자열에서 포맷된 부분를 파라메타로 치환한다.
 * gfnSplitEmpty 						: 문자열의 치완처리
 * gfnIsArray							: 배열 여부 확인
 * gfnGetObjFrameRect					: Component의 위치정보를 Frame(Application)기준으로 반환한다.
 * gfnLookup							: 대상에서 오브젝트 반환(대상에 없을시 상위에서 찾음)
 * gfnObjArrSetVisible					: 컴포넌트 visible 처리
 * gfnDsToSeries						: Dataset 정보를 HighChart 용 Series 정보로 변경처리
 **************************************************************************/

pForm._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
pForm.gvBtnSearchAreaShowCssclass = "btn_WF_SchUp";			// 조회조건 보여질때 cssclass
pForm.gvBtnSearchAreaHideCssclass = "btn_WF_SchDown";		// 조회조건 접혔을때 cssclass



/**
 * @desc	값이 존재하는지 여부 체크
 * @param {String} sValue			- 체크값
 * @return {Boolean} 체크결과 true/false
 */  
pForm.gfnIsNull = function(sValue)
{
	if (sValue == null) return true;
	if (sValue == undefined) return true;
	if (("x" + sValue == "xNaN") || (sValue == undefined)) return true;
	if (String(sValue).length == 0) return true;

	return false;	
};

/**
 * @desc	Math.random 대체 함수
 * @return {Number} Random 값
 */  
pForm.gfnMathRandom = function()
{
	if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1)	// Runtime
	{
		return Math.random();
	}
	else 
	{
		return nexacro.toNumber("0." + crypto.getRandomValues(new Uint32Array(1)));
	}
};

/**
 * @desc	화면 결과창에 데이타셋 찍어보기
 * @param {object} objDS			- 찍어볼 데이타셋
 * @return{String} 데이타셋의 내용을 보여준다.
 */
pForm.gfnDsPrn = function(objDS) 
{
	if(this.gfnIsNull(objDS)) return;
	
    var intColCnt = objDS.getColCount();
    var intRowCnt = objDS.getRowCount();
    var i;

    //------------------------------------------------
    //   Header를 출력한다.
    //------------------------------------------------
    var strHeadStr = "";
    var strDsName  = "UnKnown Dataset";

    strDsName = objDS.name;
    trace(">>>>    Dataset (" + strDsName + ") Tracing   ");
    trace(">>>> " + "Col Cnt:" + intColCnt +" /  Row Cnt:" + intRowCnt);

    for (j=0;j<intColCnt;j++) {
        strHeadStr += "[" + objDS.getColID(j) +"] ";
    }
    trace(">>>> COL ID : " + strHeadStr);
    trace(">>>> "+ "-------------------------Row Cnt:" + intRowCnt);

    //------------------------------------------------
    //   내용을 출력한다.
    //------------------------------------------------
    var strRow="";
    for (i=0;i<intRowCnt;i++) {

        strRow=objDS.getRowType(i) + "::";
        for (j=0;j<intColCnt;j++) {
            strRow += objDS.getColID(j);
            strRow += "[" + this.gfnNvl(objDS.getColumn(i,objDS.getColID(j)), "") +"] ";
        }

        trace(">>>> " + strRow);
    }
    trace(">>>> ---------------------------------------------------");
};

/**
 * @desc	유일한 ID 를 반환
 * @param {String} sPrefix			- id 앞에 붙일 문자열
 * @param {String} sSeparator		- id 생성시 구분용 문자(default: '-' ).
 * @return {string} id
 */
pForm.gfnGetUniqueId = function(sPrefix, sSeparator) 
{
	
	if ( this.gfnIsNull(sPrefix) ) sPrefix = "";
	if ( this.gfnIsNull(sSeparator) ) 
	{
		sSeparator = 45;
	} 
	else 
	{
		sSeparator = sSeparator.charCodeAt(0);
	}
	
	var pThis = this,
		charcode = pThis._ALPHA_CHAR_CODES,
		math = Math;
	var seq = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;

	while (seq < 8) 
	{
		tmpArray[++idx] = charcode[this.gfnMathRandom() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3) 
	{
		tmpArray[++idx] = sSeparator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4) 
		{
			tmpArray[++idx] = charcode[this.gfnMathRandom() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = sSeparator; //45 => "-", 95=> "_"
	
	var tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8) 
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4) 
	{
		tmpArray[++idx] = charcode[this.gfnMathRandom() * 16 | 0];
		seq++;
	}
	
	return sPrefix + String.fromCharCode.apply(null, tmpArray);
};

/**
 * @desc	36bit UUID를 생성한다.
 * @param N/A
 * @return {String} UUID
 */
pForm.gfnUUID = function() 
{
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) 
	{
		s[i] = hexDigits.substr(Math.floor(this.gfnMathRandom() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
};

/**
 * @desc	입력값을 체크하여 Null인경우 지정한 값을 리턴
 * @param {object} inVal			- 넘어온 값
 * @param {String} nullVal			- Null인경우 대치값
 * @return {String} 결과값
 */
pForm.gfnNvl = function(inVal, nullVal)
{
	if(inVal == null || inVal  == "undefined" || inVal  == undefined ) 
	{
		inVal = nullVal;
	}

    var strValue = new String(inVal);
    if(strValue.valueOf() == "null" || strValue.valueOf() == "undefined") 
	{
		inVal = nullVal;
	}
	
    if(strValue == null || strValue.trim()  == "undefined" || strValue.trim()  == undefined ) 
	{
		inVal = nullVal;
	}
    if(strValue.length == 0 ) 
	{
		inVal = nullVal;
	}
	
	return inVal;
};

/**
 * @desc	객체의 타입을 문자열로 반환한다.
 * 			dataType : 'number', 'string', 'boolean', 'function', 'undefined', 'null', 'object' (객체의 명칭을 재 추출)
 * 			object   : 'dataset', 'button', 'grid'... 
 * 			주의) null은 javascript에서는 'object'로 처리되지만 여기서는 'null' 타입으로 처리한다.
 * @param {object} obj				- 체크대상 객체
 * @return {String} lower name of typename
 */
pForm.gfnTypeof = function(obj, bUpper) 
{
	if( obj === null ) {return 'null'; }
	var typename = typeof(obj);
	if( typename === "object") 
	{
		if( obj instanceof Array) 
		{
			typename = "array";
		} 
		else if( obj instanceof Date) 
		{
			typename = "date"
		} 
		else 
		{
			var tmp = new String(obj);
			var start = tmp.indexOf("[object ");	// [object Grid]
			var end   = tmp.indexOf("]", start);	
			if( start > -1 && end > -1) 
			{
				typename = tmp.substr(8, end-8);
			}
		}
	}
	
	if(bUpper)													// 대문자반환건
	{
		typename	= typename.toUpperCase();					// 대문자변환
	}
	else
	{
		typename 	= typename.toLowerCase();
	}
	
	return typename;
};

/**
 * @desc	삼항연산자 대체 함수.
 * @param {String} arguments		- arguments
 * @return {String} 반환된 문자열
 * @example
 * 		var rtn = this.gfnDecode(this.Edit02.value, "a", "참", "b", "거짓", "나머지");	
 */
pForm.gfnDecode = function ()
{
	var varRtnValue = null;

	var arrArgument = this.gfnDecode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;

	if ((arrArgument.length % 2) == 0) 
	{
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	}
	else 
	{
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for (var i = 1; i < nCount; i += 2) 
	{
		if (varValue == arrArgument[i]) 
		{
			varRtnValue = arrArgument[i + 1];
			i = nCount;
		}
	}

	if (varRtnValue == null && bIsDefault) 
	{
		varRtnValue = arrArgument[arrArgument.length - 1];
	}

	return varRtnValue;
};

/**
 * @desc	Object의 Type을 리턴한다.
 * @param {object} obj				- Object의 Type을 리턴한다.
 * @return {String} Object Type
 */
pForm.gfnGetObjectType = function (obj)
{
	var sType = "";

	if (obj instanceof Array) 
	{
		sType = "Array";
	} 
	else if (obj instanceof Dataset) 
	{
		sType = "Dataset";
	} 
	else if (obj instanceof String) 
	{
		sType = "string";
	} 
	else if (obj instanceof Object) 
	{
		sType = "Object";
	} 
	else 
	{
		sType = typeof(obj);
	}

	return sType;
};

/**
 * @desc	Component Type을 리턴한다.
 * @param {object} obj				- 대상 Component Object
 * @return {String} Component Object Type
 */
pForm.gfnGetCompType = function (obj)
{
	var sCompType = "";
	
	if (obj instanceof Button) sCompType = "Button";
	if (obj instanceof Combo) sCompType = "Combo";
	if (obj instanceof Edit) sCompType = "Edit";
	if (obj instanceof MaskEdit) sCompType = "MaskEdit";
	if (obj instanceof TextArea) sCompType = "TextArea";
	if (obj instanceof Static) sCompType = "Static";
	if (obj instanceof Div) sCompType = "Div";
	if (obj instanceof PopupDiv) sCompType = "PopupDiv";
	if (obj instanceof Radio) sCompType = "Radio";
	if (obj instanceof CheckBox) sCompType = "CheckBox";
	if (obj instanceof ListBox) sCompType = "ListBox";
	if (obj instanceof Grid) sCompType = "Grid";
	if (obj instanceof Spin) sCompType = "Spin";
	if (obj instanceof Menu) sCompType = "Menu";
	if (obj instanceof PopupMenu) sCompType = "PopupMenu";
	if (obj instanceof Tab) sCompType = "Tab";
	if (obj instanceof Tabpage) sCompType = "Tabpage";
	if (obj instanceof GroupBox) sCompType = "GroupBox";
	if (obj instanceof Calendar) sCompType = "Calendar";
	if (obj instanceof ImageViewer) sCompType = "ImageViewer";
	if (obj instanceof ProgressBar) sCompType = "ProgressBar";
	if (obj instanceof Plugin) sCompType = "Plugin";
	if (obj instanceof Dataset) sCompType = "Dataset";
	if (obj instanceof ListView) sCompType = "ListView";
	if (obj instanceof FileDialog) sCompType = "FileDialog";
	if (obj instanceof FileDownload) sCompType = "FileDownload";
	if (obj instanceof FileUpload) sCompType = "FileUpload";
	if (obj instanceof FileUpTransfer) sCompType = "FileUpTransfer";
	if (obj instanceof FileDownTransfer) sCompType = "FileDownTransfer";	
	if (obj instanceof Sketch) sCompType = "Sketch";
	if (obj instanceof WebBrowser) sCompType = "WebBrowser";
	if (obj instanceof ExcelExportObject) sCompType = "ExcelExportObject";
	if (obj instanceof ExcelImportObject) sCompType = "ExcelImportObject";

	return sCompType;
};

/**
 * @desc	Function 유무체크
 * @param {object} objForm			- function 체크할 Form object
 * @param {String} sFunctionName	- 체크할 function명 혹은 function
 * @return {boolean} Function 체크에 따른 유무여부.
 */
pForm.gfnIsFunction = function(objForm, sFunctionName)
{
	if(objForm[sFunctionName] == undefined)
	{
		return false;
	}
	else 
	{
		// Type 체크
		if (typeof eval("objForm[sFunctionName]") == "function") return true;
	}
	return false;
};

/**
 * @desc	생성(이미 존재하는경우 해당 DS 리턴) 후 리턴
 * @param {object} objForm			- DS를 생성할 Form Object
 * @param {String} sDsName			- 생성할 DS 명
 * @param {String} sReturnXml		- XML 형식으로 만들어진 로드할 데이터 정보( or 컬럼정보 기준이 되는 데이타셋object)
 * @param {String} bClear			- data clear여부
 * @return {Object} 생성 혹은 기존 존재하는 dataset object
 */
pForm.gfnCreateDs = function (objForm, sDsName, sReturnXml, bClear)
{
	if (this.gfnIsNull(objForm)) return;
	if (this.gfnIsNull(sDsName)) return;

	var objRtnDs = objForm.objects[sDsName];

	if (this.gfnIsNull(objRtnDs))
	{
		objRtnDs = new Dataset();
		objRtnDs.name = sDsName;
		objForm.addChild(sDsName, objRtnDs);
	}
	
	if (!this.gfnIsNull(sReturnXml))
	{
		if ( sReturnXml instanceof Dataset )
		{
			objRtnDs.colinfos = sReturnXml.colinfos;
		} 
		else 
		{
			objRtnDs.loadXML(sReturnXml);
		}
	}

	if ( bClear == true ) objRtnDs.clearData();
	
	return objRtnDs;
};

/**
 * @desc	데이터셋 변경됐는지 체크
 * @param {object} objDs			- 수정여부를 체크할 Dataset Object, 또는 Dataset Object의 array
 * @param {boolean} bStatusFlag		- 수정여부 체크시 공통status컬럼을 사용할지 여부(true:사용, false:미사용(default))
 * @return {boolean} true (데이터셋 업데이트 됨)/ false (데이터셋 변경 없음)
 */
pForm.gfnIsDsUpdated = function(objDs, bStatusFlag)
{
	if ( this.gfnIsNull(bStatusFlag) ) bStatusFlag = false;
    try 
	{
		if(this.gfnTypeof(objDs) == "dataset")
		{
			if (this.gfnIsNull(objDs)) 
			{
				return;
			}
			if (objDs.getDeletedRowCount() > 0)
			{
				return true;
			}
			
			if( this.gfnIsModified(objDs, "", bStatusFlag) )
			{
				return true;
			}
		}
		else 
		{
			var uFlag = false;
			var arrDs = objDs.split(",");
			for ( var j = 0; j < arrDs.length; j++ ) 
			{
				if(this.gfnTypeof(this.objects[arrDs[j]]) == "dataset")
				{
					if(this.objects[arrDs[j]].name != "dsCond" && this.gfnIsModified(this.objects[arrDs[j]], "", bStatusFlag)) 
					{
						uFlag = true;
 					}
				}
			}
			if (uFlag == true)	return true;	// 변경
			else return false;
		}
    } 
	catch(err) 
	{
        return false;
    }

    return false;
};

/**
 * @desc	데이터셋의 변경 여부를 체크한다.
 * @param {Object} dsObj			- 데이터셋 객체
 * @param {String} sExpr			- 검사할 ROW 검색 표현식 [값이 없으면 전체] 
 *							 			변경 여부를 체크할 ROW를 지정한다. 없으면 전체 ROW를 대상으로 한다.
 *     						 			주의) 삭제된 ROW가 존재하는 경우는 변경된 것으로 인식한다.
 * @param {boolean} bStatusFlag		- 수정여부 체크시 공통status컬럼을 사용할지 여부(true:사용, false:미사용(default))
 * @return {boolean} 변경여부
 */
pForm.gfnIsModified = function(dsObj, sExpr, bStatusFlag)
{
	if ( dsObj.getDeletedRowCount() > 0) return true;
	
	if ( this.gfnIsNull(bStatusFlag) ) bStatusFlag = false;
	
	var nRowType = 0;
	
	if( !this.gfnIsNull(sExpr) )  // sExpr이 null이 아닐때
	{
		var arrRow = this.gfnSearchedRows(dsObj, sExpr);
		for(var i = 0; i < arrRow.length; i++) 
		{
			if ( !bStatusFlag ) 
			{
				nRowType = dsObj.getRowType(arrRow[i]);
			}
			else
			{
				nRowType = dsObj.getColumn(arrRow[i], this.gvCommonRowStatusColsNm);
			}
			
			if( nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE || nRowType == Dataset.ROWTYPE_DELETE)
			{
				return true;
			}
		}
	} else {                           // sExpr이 null일때
		for(var i = 0; i < dsObj.rowcount; i++) 
		{
			if ( !bStatusFlag )
			{
				nRowType = dsObj.getRowType(i);
			}
			else 
			{
				nRowType = dsObj.getColumn(i, this.gvCommonRowStatusColsNm);
			}
			
			if( nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE || nRowType == Dataset.ROWTYPE_DELETE )
			{
				return true;
			}
		}
	}
	return false;
};

/**
 * @desc	검색된 Row Indexes를 반환한다.
 * @param {object} dsObj			- 데이터셋
 * @param {String} sExpr			- 검색 표현식
 * @return {Array} 검색결과
 */
pForm.gfnSearchedRows = function(dsObj, sExpr)
{
	var arrIdx = new Array();
	var nSearchRow  = dsObj.findRowExpr(sExpr, 0);
	while( nSearchRow > -1 ) 
	{
		arrIdx[arrIdx.length] = nSearchRow;
		nSearchRow = dsObj.findRowExpr(sExpr, nSearchRow+1);
	}
	return arrIdx;
};

/**
 * @desc	숫자 여부 체크
 * @param {String} sValue			- 체크대상 값
 * @return {Boolean} 숫자이면 true
 */
pForm.gfnIsDigit = function(sValue)
{
	var sChar;
	var iPointCnt=0;
	var bRtn=true;

	if(this.gfnIsNull(sValue)) return false;
	for(var i=0; i<sValue.length; i++)
	{
		sChar = sValue.charAt(i);
		if (i == 0 && (sChar == "+" || sChar == "-"))
		{
		}
		else if (sChar >= "0" && sChar <= "9")
		{
		}
		else if (sChar == ".")
		{
			iPointCnt++;
			if (iPointCnt > 1)
			{
				bRtn = false;
				break;
			}
		}
		else
		{
			bRtn = false;
			break;
		}
	}
	return bRtn;
};

/**
 * @desc	배열에 해당 값이 존재하는지 확인
 * @param {Array} arrVal			- 체크대상 값
 * @param {Object} objVal			- 값
 * @return {Boolean} 배열에 존재여부
 */
pForm.gfnIsExistInArray = function(arrVal, objVal) 
{
	var bRtn = false;
	var nCnt = arrVal.length;
	for(var i=0; i<nCnt; i++)
	{
		if(arrVal[i] == objVal)
		{
			bRtn = true;
			break;
		}
	}
	return bRtn;
};

/**
 * @desc	체크대상 컴포넌트의 기준화면에서 부터 전체 경로의 full명칭 리턴
 * @param {Object} objForm			- 기준 화면 Form
 * @param {Object} objComp			- 체크대상 component object
 * @param {String} bUseFormNm		- Form객체 name사용여부(기본값은 true로 Form객체의 명으로 적용되며 false의 경우 ".form"으로 사용됨)
 * @return {String} objComp 의 전체 fullname (ex. this.divSearch.form.btnSearch)
 */
pForm.gfnGetObjString = function(objForm, objComp, bUseFormNm)
{
	var sRetValue	= "";									// 반환대상 문자
	
	// 유효성체크
	var sType   = this.gfnTypeof(bUseFormNm, true);			// bFormName 객체타입 확인
	if (sType!="BOOLEAN")									// BOOLEAN객체가 아닌경우(true,false 외 값)
	{
		bUseFormNm	= true;									// 기본값 true 적용
	}
	
	// objComp기준으로 상위Component명칭 적용 : objForm의 하위오브젝트의 명칭까지
	var objParent	= objComp;								// 상위 오브젝트(대상오브젝트를 기본 설정)
	while (objParent && objParent != objForm)				// 상위form이 될때까지 반복
	{
		var sObjNm	= objParent.name;						// 오브젝트명
		var sType   = this.gfnTypeof(objParent, true);		// objParent 객체타입 확인
		if (sType=="FORM")									// FORM객체의 경우
		{
			if (!bUseFormNm)								//  Form객체 name미사용건
			{
				sObjNm	= "form";							// form으로 설정
			}
		}
		
		if(this.gfnIsNull(sRetValue))						// 반환값 미존재건(초기설정)
		{
			sRetValue = sObjNm;								// Component명 적용
		}
		else												// 반환값 존재건
		{
			sRetValue = sObjNm+"."+sRetValue;				// 상위오브젝트명+"."+기존명칭
		}
		objParent = objParent.parent;						// 상위오브젝트변경
	}
	
	// objForm에 대한 명칭 삽입(Dext5,rMate에서 사용하는 부분이 있어 this삽입 유지)
	if(this.gfnIsNull(sRetValue))
	{
		sRetValue	= "this";								// "this"
	}
	else
	{
		sRetValue	= "this."+sRetValue;					// "this."+기존명칭
	}

	return sRetValue;										// 반환
};

/**
 * @desc	대상 컴포넌트를 포함하는 최상위 Form 반환
 * @param {String} objComp			- 대상 컴포넌트
 * @return {Object} 최상위 Form
 */
pForm.gfnGetTopLevelForm = function(objComp)
{
	while (objComp && !(objComp instanceof ChildFrame))
	{
		objComp = objComp.parent;
	}
	return objComp.form;
};

/**
 * @desc	호출영역(Form)의 팝업여부를 반환한다.
 * @param N/A
 * @return {Boolean} 부모창(opener)존재시 true
 */
pForm.gfnIsPopup = function()
{
	var bRet		= false;							// 반환값
	
	// 팝업여부 확인
	var objForm		= this;								// Form오브젝트 : gfn_isPopupFrame 호출시 Form오브젝트(pForm)
	var objOpener	= objForm.opener;					// 부모창(Form)확인
	if (this.gfnIsNull(objOpener))						// 부모창 미존재시
	{
		objForm		= objForm.getOwnerFrame().form;		// Form오브젝트 : Form의 최상위(ChildFrame)영역의 Form오브젝트
		objOpener	= objForm.opener;					// 최상위영역 Form의 부모창(Form)확인
	}
	
	// 반환처리
	bRet			= !(this.gfnIsNull(objOpener));	// 반환값 : 부모창(Form) 존재시 true
	return bRet;										// 반환
};

/**
 * DataSet을 Json String으로 변환한다.
 * @param {dsObj}    dsObj   DataSet 객체(파라미터에 입력한 DS 모두 변경됨)
 * @return 변경된 Json의 문자열
 * @sample var jsonStr = this.gfnDatasetToJson(this.ds_Category, this.ds_Product, this.ds_Price, .....);
           jsonStr -> 
		   {
				"Category": [		//DataSet 이름이 지정됨
								{
									"CategoryID": "1",
									, ....
								},  ......
							],
				"Product": [		//DataSet 이름이 지정됨
								{
									"ProductID": "75",
									, ....
								}, ......
							]
			}
 */
pForm.gfnDatasetToJson = function(dsObj)  
{
	var stringBuffer = new String();
	stringBuffer += "{"
	
	if(arguments.length > 0) 
	{
		for (var z = 0 ; z<arguments.length; z++) 
		{
			if(!arguments[z] instanceof nexacro.Dataset)
			{
				continue;
			}
			if(z != 0 )
			{
				stringBuffer += ",";
			}
			stringBuffer += "\""+arguments[z].name+"\":[";
			var nCount = arguments[z].getRowCount();
			for(var j = 0;j < nCount; j++)
			{
				stringBuffer += "{";
				for(var i = 0;i < arguments[z].getColCount(); i++)
				{
					stringBuffer += "\""+arguments[z].getColID(i)+"\":";
					if(!this.gfnIsNull(arguments[z].getColumn(j,arguments[z].getColID(i))))
					{
						var sSetValue = "" + arguments[z].getColumn(j,arguments[z].getColID(i));
						sSetValue = sSetValue.replace(/"/g, "\\\"");   //" 사용시 json 변환이 안돼기 때문에 적용.
						stringBuffer += "\""+sSetValue+"\"";
					}
					else
					{
						stringBuffer += "\"\"";
					}
					if(arguments[z].getColCount()-1 > i)
					{
						stringBuffer += ",";
					}
				}
				stringBuffer += "}";
			
				if(arguments[z].getRowCount()-1 > j)
				{
					stringBuffer += ",";
				}
			}
			stringBuffer += "]";
		}
    }
	
	stringBuffer += "}";
	
	return stringBuffer;
};

/**
 * @desc	디버그 창
 * @param N/A
 * @return N/A
 */
pForm.gfnOpenDebugPop = function()
{
// 	var sPopupId = "debugging";
// 	var sPopupUrl = "Frame_Popup::comDebugPop.xfdl";
// 	
// 	// 팝업창의 넓이/높이는 필수사항 (프레임의 중앙에 보여줌)
// 	var oPosition	= {width:1080,height:703}; // {width:1120,height:743}; // {width:1080,height:703};
// 	var objArgs		= {};	// 파라메타 전달
// 	
// 	// 팝업창 옵션 {modal:false, layered:false, showtitlebar:true, autosize:true, resizable:true, opened:'focus'}
// 	//               callback 은 설정하지 않으면 default 값 fnPopupCallback() 함수로 callback
// 	var oOption		= {callback:"fnPopupCallback",titletext:"디버깅", modal:false, resizable:true};	
// 
// 	this.gfnShowPopup(this, sPopupId, sPopupUrl, oPosition, objArgs, oOption);	
	
	var sPopupId	= "debugging";
	var sPopupUrl	= "Frame_Popup::comDebugPop.xfdl";
	var objArgs		= {};	// 파라메타 전달
	var oOption		= {showtitlebar:true,titletext:"디버깅",modal:false,width:1080,height:703};
	
	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);	
};

/**
 * @desc	objArguments중에서 objDefaults의 속성 중에서 정의되지 않은 항목이 있으면 기본 값으로 설정한다.
 * @param {Object} objArguments		- 설정 속성값
 * @param {Object} objDefaults		- 미정의값중 default 처리할 값
 * @return {Object} 정제된 objArguments
 * @example
 *   var options = {modaless:false};
 *   options = this.gfnSetDefaults(options, {modaless:true, showtitle:true} ); 
 */
pForm.gfnSetDefaults = function(objArguments, objDefaults) 
{
	if( !objArguments ) objArguments = [];
	if( !objDefaults ) objDefaults = [];
	for(var p in objDefaults) 
	{
		try 
		{
			if( this.gfnIsNull(objArguments[p]) ) objArguments[p] = objDefaults[p];
		}
		catch(err) 
		{
			objArguments[p] = objDefaults[p];
		}
	}
	return objArguments;
};

/**
 * @desc	Object.uarguments 정보를 클리어한다.
 * @param {object} obj				- Object to clear
 * @return N/A
 */
pForm.gfnClearArgument = function(obj) 
{
	try 
	{
		obj.uarguments = [];
	}
	catch(err) 
	{
	
	}
};

/**
 * @desc	Object.uarguments에 objectArgument를 설정한다.
 * @param {object} obj				- object to set
 * @param {String} objArguments		- objArguments to set
 * @return N/A
 * @example ObjectArguments를 설정
 *   this.gfnSetArgument(obj, {key:'value'});
 * @example Key, Value 형태로 설정
 *   this.gfnSetArgument(obj, "key", "value"); 
 */
pForm.gfnSetArgument = function(obj, objArguments)
{
	try 
	{
		if( !objArguments ) return;
		if( !obj.uarguments) obj.uarguments = [];
		
		if( arguments.length == 3 ) {
			obj.uarguments[arguments[1]] = arguments[2];
		} else {
			for(var p in objArguments) {
				obj.uarguments[p] = objArguments[p];
			}
		}
	}
	catch(err) 
	{
	}
};

/**
 * @desc	폼(팝업)에 전달된 파라메타 키 목록을 반환한다.
 * 			ChildFrame에 설정된 파라메타를 사용한다.
 * @param {object} formObj			- 폼 객체
 * @return {array} Array of String
 */
pForm.gfnGetParameterKeys = function(formObj)
{
	return this.gfnGetArgumentKeys(formObj.getOwnerFrame());
};

/**
 * @desc	폼(팝업)에 전달된 파라메타 값을 반환한다.
 * 			ChildFrame에 설정된 파라메타를 사용한다.
 * @param {Object} formObj			- 폼 객체
 * @param {String} sKey				- 키
 * @return {string} parameter value
 */
pForm.gfnGetParameter = function(formObj, sKey)
{
	return this.gfnGetArgument(formObj.getOwnerFrame(), sKey);
};

/**
 * @desc	Object.uarguments의 속성 키를 배열로 반환한다.
 * @param {object} obj				- object to set
 * @return 속성키
 */
pForm.gfnGetArgumentKeys = function(obj)
{
	var returnKeys = new Array();
	try 
	{
		if( obj.uarguments ) 
		{
			for(var p in obj.uarguments) 
			{
				returnKeys[returnKeys.length] = p;
			}
		}
	}
	catch(err)
	{
	}
	return returnKeys;
};

/**
 * @desc	Object.uarguments 속성에 저장된 값을 반환한다.
 * @param {object} obj				- 호출한 화면 Form
 * @param {String} sKey				- sKey key to get
 * @return {String} sKey 에 해당하는 value
 */
pForm.gfnGetArgument = function(obj, sKey)
{
	try 
	{
		return obj.uarguments[sKey];
	} 
	catch(err)
	{
	}	
	return undefined;
};

/**
 * @desc	문자열에서 포맷된 부분를 파라메타로 치환한다.
 * @param arguments
 * @return {} 변환된 문자열
 */
pForm.gfnFormat = function() 
{
	var values = new Array();
	for(var i = 0; i < arguments.length; i++) 
	{
		
		if( arguments[i] instanceof Array ) 
		{
			for(var j = 0; j < arguments[i].length; j++ )
			{
				values.push(arguments[i][j]);
			}
		} 
		else 
		{
			values.push(arguments[i]);
		}
	}
	var strFormat = new String(values.shift());
	var arrFormat = this.gfnSplitEmpty(strFormat, "{}");
	
	if( arrFormat.length > 1) 
	{
		strFormat = "";
		for(var i = 0; i < arrFormat.length; i++) 
		{
			strFormat += arrFormat[i] + (i < values.length ? values[i] : "");
		}
	} 
	else 
	{	
		for(var i = 0; i < values.length; i++)
		{
			strFormat = nexacro.replaceAll( strFormat, "\{" + i + "\}", values[i] );
		}
	}
	// 치환되지 않은 포맷이 있으면 빈 값으로 치환한다.
	strFormat = strFormat.replace(/\{[0-9]*\}/g, "");
	return strFormat;
};

/**
 * @desc	문자열의 치완처리
 * @param {String} str1			- 치완대상 문자열
 * @param {String} str2			- 치완 문자열
 * @return {String}  결과
 */ 
pForm.gfnSplitEmpty = function(str1, str2) 
{
	var retVals = new Array(0);
	if( this.gfnIsNull(str1) ) 
	{
		return retVals;
	} 
	else 
	{
		return str1.split(str2);
	}
};

/**
 * @desc	배열 여부 확인
 * @param {object} value			- 체크대상
 * @return {Boolean} 체크 결과
 */
pForm.gfnIsArray = function(value) 
{
	if (Array.isArray(value)) 
	{
		return true;
	}
	else 
	{
		return false;
	}
};

/**
 * @desc	Component의 위치정보를 Frame(Application)기준으로 반환한다.
 * @param {String} obj				- 위치정보 확인 대상 Component
 * @return {Object} 위치정보(nClientWidth,nClientHeight,nLeft,nTop...)
 */
pForm.gfnGetObjFrameRect = function(obj)
{
	var objWindow		= obj._getWindow();												// Window 오브젝트
	var nClientWidth	= objWindow.clientWidth;										// client 너비
	var nClientHeight	= objWindow.clientHeight;										// client 높이
	var objPos			= nexacro._getElementPositionInFrame(obj.getElement(), 0, 0);	// Object(Element)의 위치정보(Application Frame 내부의 위치)
	var nObjLeft		= objPos.x;														// Object(Element)의 x좌표
	var nObjTop			= objPos.y;														// Object(Element)의 y좌표
	var nObjWidth		= obj.getOffsetWidth();											// Component의 너비
	var nObjHeight		= obj.getOffsetHeight();										// Component의 높이

	var objRect	= {};
	objRect.nClientWidth	= nClientWidth;								// 화면(Application)의 너비
	objRect.nClientHeight	= nClientHeight;							// 화면(Application)의 높이
	objRect.nLeft			= nObjLeft;									// 화면(Application)에서의 Component Left 좌표
	objRect.nTop			= nObjTop;									// 화면(Application)에서의 Component Top 좌표
	objRect.nWidth			= nObjWidth;								// Component의 너비
	objRect.nHeight			= nObjHeight;								// Component의 높이
	objRect.nRight			= nClientWidth - nObjLeft - nObjWidth;		// 화면(Application)에서의 Component Right 좌표
	objRect.nBottom			= nClientHeight - nObjTop - nObjHeight;		// 화면(Application)에서의 Component Bottom 좌표
	return objRect;
};

/**
 * @desc	대상에서 오브젝트 반환(대상에 없을시 상위에서 찾음)
 * @param {Object} objTarget		- 오브젝트를 찾을 대상
 * @param {String} sName			- 오브젝트명
 * @return {Object} 대상
 */
pForm.gfnLookup = function(objTarget, sName)
{
	var objTemp;
	while(objTarget)
	{
		objTemp = objTarget.components;
		if (objTemp && objTemp[sName]) return objTemp[sName];
		objTemp = objTarget.objects;
		if (objTemp && objTemp[sName]) return objTemp[sName];
		objTarget = objTarget.parent;
	}
	return null;
};

/**
 * @desc 컴포넌트 visible 처리
 * @param {Array} visible 대상 object 배열
 * @param {Boolean} bFlag visible 처리 (true/false)
 * @return N/A
*/
pForm.gfnObjArrSetVisible = function(arrObjList, bFlag)
{
	var i;
	for(i=0;i<arrObjList.length;i++)
	{
		if(arrObjList[i])
		{
			arrObjList[i].set_visible(bFlag);
		}
	}
};

/**
 * @desc Dataset 정보를 HighChart 용 Series 정보로 변경처리
 * @param {Object} objDs 대상 Dataset object
 * @param {String} sNameColumn name 용 column
 * @param {String} sDataColumn data 용 column
 * @return Series 정보 Array
 * ex.
	[
		{
		  name: 'Installation & Developers',
		  data: [43934, 48656, 65165, 81827, 112143, 142383,
		  171533, 165174, 155157, 161454, 154610]
		}, 
		{
		  name: 'Manufacturing',
		  data: [24916, 37941, 29742, 29851, 32490, 30282,
		  38121, 36885, 33726, 34243, 31050]
		}
	] 
*/
pForm.gfnDsToSeries = function(objDs, sNameColumn, sDataColumn)
{
	var i=0,j=0,k=0,l=0;
	var sName;
	var sPrevName;
	var arrName = [];
	var arrData = [];
	var arrTempData = [];
	var objData = {};
	var rtnArrData = [];
	var nCnt = objDs.getRowCount();
	
	for(i=0; i<nCnt; i++)
	{
		sName = objDs.getColumn(i, sNameColumn);
		if(sPrevName != sName)
		{
			sPrevName = sName;
			arrName[j] = sName;
			j++;
		}
	}
	
	for(i=0; i<arrName.length; i++)
	{
		objDs.filter(sNameColumn+"=='"+arrName[i]+"'");
		nCnt = objDs.getRowCount();
		l=0;
		for(j=0; j<nCnt; j++)
		{
			arrTempData[l] = this.gfnIsNull(objDs.getColumn(j, sDataColumn))?null:nexacro.toNumber(objDs.getColumn(j, sDataColumn));
			l++;
		}
		arrData[k] = arrTempData;
		arrTempData = [];
		k++;
	}
	
	for(i=0; i<arrName.length; i++)
	{
		rtnArrData[i] = {name:arrName[i],data:arrData[i]};
	}
	
	return rtnArrData;
};