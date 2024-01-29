/**
*  @FileName 	Excel.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.09.04
*  @Desction   	Excel 관련된 공통함수	
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.09.04     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/***************************************************************************
 * gfnExcelExport						: excel export
 * _gfnSetFormatExportGrid				: 그리드 포멧변경(col size가 0인 Column삭제, cssclass 제거)
 * _gfnExportOnsuccess					: excel export on sucess [내부 이벤트 함수]
 * _gfnExportOnerror					: excel export on error [내부 이벤트 함수]
 * _gfnSetExportGrid_ontimer			: excel export 내부함수 ontimer
 * gfnExcelImportHead					: excel import( 헤더정보를 COLUMN ID로 사용하는경우 )
 * _gfnImportAllOnsuccess 				: excel import on success
 * _gfnImportAllOnerror					: excel import on error
 * gfnExcelImport						: excel import( 데이터 헤더제외 )
 * _gfnImportOnsuccess					: excel import on success
***************************************************************************/

pForm.gvExcelSeparator	= "0x2c";		// Excel export/import Separator	, (comma)
pForm.gvExcelQuotechar	= "\"";			// Excel export/import Quotechar	" (quotation mark)

/**
 * @desc	excel export
 * @param {Object} objGrid - Grid Object or args
 * @return N/A
 * @example
 * this.gfnExcelExport(this.grdList00);
 * 또는    var oArgs = {grid:this.grdList00
                       ,sheetname:""
 				       ,filename:""
					   ,exportfiletype:"excel"	// excel, txt, csv
					   ,excelquotechar:""		// "none"이면 쿼터문자가 생략됨
					   ,suppress:"Y"        	// 그리드 suppress기능을 export시에도 사용하기 위한 옵션(Y(default),N,M) M:Suppress + Merge
					   ,height:"Y"				// 그리드 Row높이를 Excel에 반영하기 위한 옵션(Y,N(default))
					   ,bodystyle:"N"			// 그리드 Body Cell Cssclass 를 적용할지 여부(Y(default),N)
 				        };
 * sheetname, filename , exportfiletype 은 Grid의 user property로 등록사용가능.
 * 다중 그리드 Export 주의사항 : grid가 array 이면, sheetname 도 array로 처리할 것.
 * Grid 의 selecttype 속성값이 "area", 'multiarea" 이면 strExportHead(ex.allband) 설정값과 관계없이 항상 "nohead,nosumm" 으로 적용됩니다.
 */
pForm.gfnExcelExport = function(oArgs)
{
	var objGrid, sSheetName, sFileName, sExportFileType, sExporttype, sExportSize, sSuppress;
	var i;
	
	if (oArgs instanceof nexacro.Grid) 
	{
		objGrid    = oArgs;
		sSheetName = this.gfnIsNull(objGrid.sheetname) ? "sheet1" : objGrid.sheetname;
		sFileName  = objGrid.filename;
		sExportFileType = this.gfnIsNull(objGrid.exportfiletype) ? "excel" : objGrid.exportfiletype;
	} 
	else 
	{
		// n개의 grid인 경우 grid, sheetname은 배열로 처리할것.
		objGrid    = oArgs.grid;		// object 또는 array
		sSheetName = oArgs.sheetname; 	// string 또는 array
		sFileName  = oArgs.filename;
		sExportFileType = this.gfnIsNull(oArgs.exportfiletype) ? "excel" : oArgs.exportfiletype;
	}

	// 파일타입에 따른 exporttype 설정
	if(sExportFileType == "excel")
	{
		sExporttype = nexacro.ExportTypes.EXCEL2007;
	}
	else if(sExportFileType == "csv")
	{
		sExporttype = nexacro.ExportTypes.CSV;
	}	
	else if(sExportFileType == "txt")
	{
		sExporttype = nexacro.ExportTypes.TXT;
	}
	
	if (this.gfnIsNull(oArgs.suppress) || oArgs.suppress == "Y" ) 
	{
		sSuppress = "suppress";
	}
	else if ( oArgs.suppress == "M" ) 
	{
		sSuppress = "merge";
	} 
	else if ( oArgs.suppress == "N" ) 
	{
		sSuppress = "nosuppress";
	}
	
	if ( oArgs.height == "Y" ) 
	{
		sExportSize = "both";
	} 
	else 
	{
		sExportSize = "width";
	}
	
	if ( this.gfnIsNull(oArgs.bodystyle) ) oArgs.bodystyle = "Y";
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	var arrGrid  = new Array();		
	var arrSheet = new Array();
	var arrMasking = new Array();
	if ( this.gfnIsArray(objGrid)) 
	{
		arrGrid = objGrid;
		if ( this.gfnIsNull(sSheetName) ) 
		{
			for(i=0; i<arrGrid.length;i++)
			{
				if ( this.gfnIsNull(arrGrid[i].excelsheetname) ) 
				{
					arrSheet[i] = "sheet" + (i + 1);
				} 
				else 
				{
					//arrSheet[i] = arrGrid[i].excelsheetname;
					arrSheet[i] = String(arrGrid[i].excelsheetname).replace(regExp,""); //시트명에 특수문자 제거
				}
			}
		}
		else
		{
			// arrSheet = sSheetName;
			for(i=0; i<sSheetName.length;i++)
			{
				arrSheet[i] = String(sSheetName[i]).replace(regExp,""); //시트명에 특수문자 제거
			}
		}
		
// 		if ( this.gfnIsNull(oArgs.masking) ) 
// 		{
// 			arrMasking = [];
// 		} 
// 		else 
// 		{
// 			arrMasking = oArgs.masking;
// 		}
	} 
	else 
	{
		arrGrid[0]  = objGrid;
		arrSheet[0] = String(sSheetName).replace(regExp,""); //시트명에 특수문자 제거
		// arrMasking[0] = oArgs.masking;
	}	

	//fileName nullcheck
	if ( this.gfnIsNull(sFileName) ) 
	{
		sFileName = arrGrid[0].name;
	} 
	else 
	{
		sFileName = String(sFileName).replace(regExp,"");	//파일명에 특수문자 제거
	}
	sFileName = sFileName + "_" + this.gfnGetDate("time");
	
	var svcUrl = nexacro.getApplication().ExcelInfo.excelExportUrl;
	this.objExport = null;
	this.objExport = new ExcelExportObject();

	// text 파일인 경우 Separator , Quotechar 설정
// 	if(sExportFileType == "txt")
// 	{
// 		this.objExport.set_separator(this.gvExcelSeparator);		// "0x2c";		// Excel export/import Separator	, (comma)
// 		if ( this.gfnIsNull(oArgs.excelquotechar)) 	
// 		{
// 			this.objExport.set_quotechar(this.gvExcelQuotechar);		// "\"";		// Excel export/import Quotechar	" (quotation mark)
// 		} 
// 		else 
// 		{
// 			this.objExport.set_quotechar(oArgs.excelquotechar);
// 		}		
// 	}
	
	this.objExport.set_exporturl(svcUrl);
	this.objExport.set_exporttype(sExporttype);
	
	for ( i=0; i<arrGrid.length; i++ ) 
	{
		//그리드 포멧변경(col size가 0인 Column삭제)
		// arrGrid[i] = this._gfnSetFormatExportGrid(arrGrid[i], arrMasking[i], oArgs.bodystyle);
		arrGrid[i] = this._gfnSetFormatExportGrid(arrGrid[i],  oArgs.bodystyle);
	
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, arrGrid[i], arrSheet[i]+"!A1","allband","allrecord",sSuppress,"allstyle","image","none",sExportSize);
	}
	this.objExport.set_exportfilename(sFileName);	
	
	this.objExport.set_transferrowcount(0);
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
	this.objExport.addEventHandler("onsuccess", this._gfnExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this._gfnExportOnerror, this);
	
	this.addEventHandler("ontimer", this._gfnSetExportGrid_ontimer, this);	
	this.setWaitCursor(true, true);
	nexacro.setHTTPHeaderVariable("Access-Control-Allow-Origin", nexacro.getApplication().Tran.fwUrl);
	this.setTimer(10000, 500);
};

/**
 * @desc	그리드 포멧변경(col size가 0인 Column삭제, cssclass 제거)
 * @param {Object} objGrid		- Grid Object
 * @param {String} sBodystyle	- 그리드 Body Cell Cssclass 를 적용할지 여부
 * @return N/A
 * @example
 */
// pForm._gfnSetFormatExportGrid = function(objGrid, sMasking, sBodystyle)
pForm._gfnSetFormatExportGrid = function(objGrid, sBodystyle)
{	
	var nColCount = objGrid.getFormatColCount(); 	//Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수
	var nColSize = 0;
	var aColHide = new Array();	//col size가 0인 Column 의 갯수(1포함)
	var nCol = -1, sColShowFlag = "true";
	var oBindDs = objGrid.getBindDataset();
	var sOrgCssclass    = objGrid.cssclass;
	//마스크 처리를 위한 rowposition변경
//	if ( !this.gfnIsNull(sMasking) && sMasking == "Y" ) oBindDs.set_rowposition(-1);
	
	for ( i=0; i<nColCount; i++ ) 
	{
		nColSize = objGrid.getRealColSize(i);
		if ( nColSize == 0 || nColSize == 1) 
		{
			aColHide.push(i);
		} 
		else 
		{
			for(var j=0, len=objGrid.getCellCount("body"); j<len; j++) 
			{
				nCol = objGrid.getCellProperty("body", j, "col");
				if(nCol == i) 
				{
					sColShowFlag = objGrid.getCellProperty("body", j, "calendarheadformat");
					if ( sColShowFlag == "false" ) 
					{
						//trace("숨김col추가==="+i);
						if ( aColHide.indexOf(i) == -1 ) aColHide.push(i);
					}
				}
			}
		}
	}
	
	//if ( aColHide.length > 0 ) {	//cssclass적용을 위해 체크해제 23.04.05
		var oParentForm = objGrid.parent;
		var oExcelGrid;
		var sExcelGridName = objGrid.name + "_ExcelTemp";		
		if ( oParentForm.components[sExcelGridName] ) 
		{
			oExcelGrid = oParentForm.components[sExcelGridName];
		}
		else 
		{
			oExcelGrid = new Grid();
			oExcelGrid.init(sExcelGridName, 0, 0, 0, 0 );
			oExcelGrid.setBindDataset( oBindDs );
			objGrid.parent.addChild(oExcelGrid.name, oExcelGrid);
			oExcelGrid.set_visible(false);
			oExcelGrid.show();
		}
		//oExcelGrid.init
		var sCurFormat = objGrid.getCurFormatString(false);
		    //sCurFormat = '<Formats>\n' + sCurFormat + '</Formats>';
		oExcelGrid.set_enableredraw(false);
		oExcelGrid.set_formats(sCurFormat);

		oExcelGrid.set_summarytype(objGrid.summarytype);	//summarytype 적용
		
		if ( this.gfnIsNull(sOrgCssclass) ) 
		{
			oExcelGrid.set_cssclass("grd_WF_ExcelExport");	    //테두리 Cssclas적용
		} 
		else 
		{
			oExcelGrid.set_cssclass( sOrgCssclass + ",grd_WF_ExcelExport");	    //테두리 Cssclass 추가적용
		}

		//size = 0 인 col 삭제
		for ( j = aColHide.length -1 ; j >=0; j-- ) 
		{
			var nCol = oExcelGrid.deleteContentsCol("body", aColHide[j] ,false);	//전체 Column 기준 삭제
		}
		
		if ( sBodystyle == "N" ) 
		{
			for(var k=0, len=oExcelGrid.getCellCount("body"); k<len; k++) 
			{
				oExcelGrid.setCellProperty("body", k, "cssclass", "");
			}	
		}
		
		oExcelGrid.set_enableredraw(true);
		objGrid = oExcelGrid;
		//trace(objGrid.getCurFormatString(false));
	//}
	return objGrid;
};

/**
 * @desc	excel export on sucess [내부 이벤트 함수]
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfnExportOnsuccess = function(obj,e)
{	
	this.setWaitCursor(false, true);
};

/**
 * @desc	excel export on error [내부 이벤트 함수]
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfnExportOnerror = function(obj,  e)
{
	this.setWaitCursor(false, true);
	var sErrorMsg = e.errormsg;
	this.gfnShowMessage(this,["alert",sErrorMsg]);
};

/**
 * @desc	excel export 내부함수 ontimer
 * @param {Object} objForm - Form Object	
 * @return N/A
 * @example
**/
pForm._gfnSetExportGrid_ontimer = function(objForm, e)
{
	if ( e.timerid == 10000 ) 
	{
		objForm.killTimer(e.timerid);
		var result = objForm.objExport.exportData();	
	}
};

/**
 * @desc	excel import( 헤더정보를 COLUMN ID로 사용하는경우 )
 * @param {object} oArgs			- import arguments
 *										id    				import id(callback호출시 필수)
 *										outds    			dataset id
 *										fromsheet    		sheet name(default:Sheet1)
 *										fromhead    		Head 영역지정(시작:종료)	
 *										frombody    		body 영역지정(default A2)	
 *										callback    		callback 함수
 *										objform    			form object
 * @return N/A
 * ★★★ 주의사항 : dataset의 userclientlayout 을 false로 사용해야만 합니다. ★★★ 
 * @example
 *     var oArgs = { id:"Import"
 *	            	,outds: "dsImport"
 *	            	,fromsheet:"sheet1"
 *                  ,fromhead:"A1:G1"
 *					,frombody:"A2"
 *					,callback:"fnImportCallback"
 *					,objform:this
 *					};
 *	this.gfnExcelImportHead(oArgs);
 */
pForm.gfnExcelImportHead = function(oArgs)
{
	sDataset  = oArgs.outds;
	sSheet    = oArgs.fromsheet;
	sHead     = oArgs.fromhead;
	sBody     = oArgs.frombody;
	sCallback = oArgs.callback;
	sImportId = oArgs.id;
	objForm   = oArgs.objform;

	//if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	if(this.gfnIsNull(sHead)) return false;
	
	var svcUrl = nexacro.getApplication().ExcelInfo.excelImportUrl;
	//var svcUrl = "svcUrl::/wis-mst/XExportImport";
	
	var objImport ;	

	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL2007);			
	objImport.outds = sDataset;
	
	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	strRange = '[Command=<strCommand>; Output=<dsName>; Head=<strArea>; Body=<strArea>]'

	objImport.addEventHandler("onsuccess", this._gfnImportAllOnsuccess, this);
	objImport.addEventHandler("onerror", this._gfnImportAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";
	var sParam2 = "["+sDataset+"=outds]";

	this.setWaitCursor(true, true); 
	objImport.importData("", sParam1, sParam2);						
	objImport = null;	 
	
	this.setWaitCursor(false, true);
};

/**
 * @desc	excel import on success
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfnImportAllOnsuccess = function(obj,  e)
{		
	this.setWaitCursor(false, true);
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var sFileName  = String(e.url).substr(String(e.url).lastIndexOf("/") + 1);
	
	//화면의 callback 함수 호출
	if (!this.gfnIsNull(sCallback)) 
	{
		// if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, sFileName);
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, obj.outds);
	}
};

/**
 * @desc	excel import on error
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfnImportAllOnerror = function(obj,  e)
{
	this.setWaitCursor(false, true);	
	var sErrorMsg = e.errormsg;
	if ( sErrorMsg == "the file extension is wrong" ) 
	{
		sErrorMsg = "허용되지 않는 파일 확장자입니다.";
	}
	this.gfnShowMessage(this,["alert",sErrorMsg]);
};

/**
 * @desc	excel import( 데이터 헤더제외 )
 * @param {object} oArgs			- import arguments
 *										id    				import id(callback호출시 필수)
 *										outds    			dataset id
 *										fromsheet    		sheet name(default:Sheet1)
 *										frombody    		body 영역지정(default A2)	
 *										callback    		callback 함수
 *										objform    			form object 
 *										importfiletype		"excel"
 *										excelquotechar 		"none"이면 쿼터문자가 생략됨
 * @return N/A
 * @example
 *     var oArgs = { id:"Import"
 *	            	,outds: "dsImport"
 *	            	,fromsheet:"sheet1"
 *					,frombody:"A2"
 *					,callback:"fnCallbackImport"
 *					,objform:this
 *					,importfiletype:"excel"
 *                  ,excelquotechar:""	//"none"이면 쿼터문자가 생략됨
 *					};
 *	this.gfnExcelImport(oArgs);
 */
pForm.gfnExcelImport = function(oArgs)
{
	var sDataset  = oArgs.outds;
	var sSheet    = oArgs.fromsheet;
	var sBody     = oArgs.frombody;
	var sCallback = oArgs.callback;
	var sImportId = oArgs.id;
	var objForm   = oArgs.objform;
	var sImportFileType = "";
	var sImporttype = "";	

	// 파일타입에 따른 importtype 설정
	sImportFileType = this.gfnIsNull(oArgs.importfiletype) ? "excel" : oArgs.importfiletype;

	if(sImportFileType == "excel")
	{
		sImporttype = nexacro.ImportTypes.EXCEL2007;
	}
	else if(sImportFileType == "csv")
	{
		sImporttype = nexacro.ImportTypes.CSV;
	}	
	else if(sImportFileType == "txt")
	{
		sImporttype = nexacro.ImportTypes.TXT;
	}
	
	if(this.gfnIsNull(sBody)) sBody = "A2";
	
	var nStartRowIdx = -1;
	if ( this.gfnIsNull(sSheet) ) 
	{
		nStartRowIdx = parseInt(this.gfnGetDigit(sBody)) - 2;	//시작 행 => Delete Index로 변환
	}
	
	var svcUrl = nexacro.getApplication().ExcelInfo.excelImportUrl;
	//var svcUrl = "svcUrl::/wis-mst/XExportImport";

	var objImport;	
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	// objImport.set_importtype(nexacro.ImportTypes.EXCEL2007);
	objImport.set_importtype(sImporttype);
	
	// text 파일인 경우 Separator , Quotechar 설정
// 	if(sImportFileType == "txt")
// 	{
// 		objImport.set_separator(this.gvExcelSeparator);
// 		if ( this.gfnIsNull(oArgs.excelquotechar)) 	
// 		{
// 			objImport.set_quotechar(this.gvExcelQuotechar);		// "\"";		// Excel export/import Quotechar	" (quotation mark)
// 		} 
// 		else 
// 		{
// 			objImport.set_quotechar(oArgs.excelquotechar);
// 		}	
// 	}
	
	objImport.outds     = sDataset;
	objImport.rowindex  = nStartRowIdx;

	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = sDataset+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this._gfnImportOnsuccess, this);
	objImport.addEventHandler("onerror", this._gfnImportAllOnerror, this);	
	var sParam1;	

	if(sImportFileType == "excel")
	{
		if ( !this.gfnIsNull(sSheet) && !this.gfnIsNull(sBody)) 
		{
			sParam1 = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
		} 
		else 
		{
			sParam1 = "[command=getsheetdata;output=outDs;]";
		}
	}
	else 
	{
		sParam1 = "[command=getsheetdata;output=outDs;]";
	}
	//trace(	"sParam1====="+sParam1);
 	var sParam2 = "[" + sOutDsName + "=outDs]";
 	
	this.setWaitCursor(true, true);
	objImport.importData("", sParam1, sParam2);						
	// objImport = null;	
	
	this.setWaitCursor(false, true);
};

/**
 * @desc	excel import on success
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm._gfnImportOnsuccess = function(obj,  e)
{		
	this.setWaitCursor(false, true);
	
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var nRowindex = obj.rowindex;	

	//기존 데이터셋의 내용으로 헤더복사
	var sColumnId;
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	//Head Text자료 삭제
	for ( i=nRowindex; i>=0; i-- ) 
	{
		objOutDs.deleteRow(i);
	}
	
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);
	var sFileName  = String(e.url).substr(String(e.url).lastIndexOf("/") + 1);
	//trace("	sFileName === " + sFileName);
	//화면의 callback 함수 호출
	if (!this.gfnIsNull(sCallback)) 
	{
		// if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, sFileName);
		// if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, objImport.outds);
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId, obj.outds);
	}
};