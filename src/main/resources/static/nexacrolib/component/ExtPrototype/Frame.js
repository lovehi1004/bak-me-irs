/**
*  @FileName 	Frame.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.30
*  @Desction	Frame 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.30     		TOBESOFT 	            최초 생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/***************************************************************************
 * gfnSetFormInit  		    			: 폼 로딩시 초기화 처리
 * _gfnOnkeyup							: Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
 * gfnInitComponent						: 컴포넌트 초기화 설정 및 이벤트 추가 처리
 * gfnInitComponentSub					: 컴포넌트 초기화 설정 및 이벤트 추가 처리(container component 일때)
 * gfnInitComponentGrid					: 그리드의 설정 및 이벤트 추가 
 * gfnCallOpenMenu						: 메뉴목록에서 클릭시 업무화면을 보여준다
 * gfnOpenMenu							: gfnCallOpenMenu 함수에서 호출 또는 직접호출하여 업무화면을 오픈한다.
 * gfnSetAuthInfo						: 폼에 권한정보 셋팅
 * gfnGetAuth							: 권한여부 확인
 * gfnGetCommonCode						: 특정 그룹에 대한 공통코드를 조회한다
 * gfnPagingApplyPagingDs				: 페이징정보 데이타셋 설정
 * gfnPagingApplySearchDs				: 조회조건에 페이징정보 반영
 * gfnRSAEncrypt						: 문자열 암호화 처리 (RSA)
 * gfnFullDownload						: 전달된 정보의 파일들을 FileDownTransfer 을 이용해 전체다운로드 처리한다. (RaonK관련)
 * _gfnFullDownload_onsuccess			: 전체다운로드 파일다운로드 성공시 (RaonK관련)
 * _gfnFullDownload_onerror				: 전체다운로드 파일다운로드 실패시 (RaonK관련)
 * gfnCheckFileDownload					: 전달된 정보의 파일들을 FileDownTransfer 을 이용해 전체다운로드 처리한다. (Grid관련)
 * _gfnCheckFileDownload_onsuccess		: 지정파일다운로드 파일다운로드 성공시 (Grid관련)
 * _gfnCheckFileDownload_onerror		: 지정파일다운로드 파일다운로드 실패시 (Grid관련)
 * gfnFullDownloadSvcCheck				: 전달된 정보의 파일에 대한 체크 후 FileDownTransfer 을 이용해 전체다운로드 처리한다. (RaonK관련)
 * gfnCheckFileDownloadSvcCheck			: 전달된 정보의 파일에 대한 체크 후 FileDownTransfer 을 이용해 전체다운로드 처리한다. (Grid관련)
 * gfnFullDownloadCallback				: 파일다운로드관련 Transaction CallBack 함수
 * gfnGetCheckFileInfo					: Raonk Object에서 선택된 파일의 정보를 리턴한다.
 
 **************************************************************************/


pForm.fvApp = nexacro.getApplication();

/**
 * @desc	폼 로딩시 초기화 처리
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sFncInit			- 콜백함수명 , ex. fnFormInit
 * @return N/A
 */
pForm.gfnSetFormInit = function(objForm, sFncInit)
{
	var objStampDate = new Date();
	trace("[Frame.js][gfnSetFormInit] 시작 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#"+"|objForm.name:"+objForm.name);

	// 폼로딩시 초기화 처리
	if (this.gfnIsNull(objForm.fvEnv))
	{
		objForm.fvEnv = nexacro.getEnvironment();
	}

	if (this.gfnIsNull(objForm.fvApp))
	{
		objForm.fvApp = nexacro.getApplication();
	}

	// 팝업 일때 처리
	if (objForm.opener)
	{
		if (objForm.parent instanceof nexacro.ChildFrame)
		{
			// onkeyup 이벤트 추가
			objForm.addEventHandler("onkeyup", this._gfnOnkeyup, this);
		}
	}

	// QuickView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuickView") == "Y")
	{
		if (this.gfnIsNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame)
		{
			// onkeyup 이벤트 추가
			objForm.addEventHandler("onkeyup", this._gfnOnkeyup, this);
		}
	}

	// 권한
	objForm.fvAuth = {};
	if(objForm.parent)
	{
		// 팝업일때
		if(this.getOwnerFrame().cvSrcPopup == "Y")
		{
			this.gfnSetAuthInfo(objForm, objForm.getOwnerFrame().cvMnuId, "", "");				// 메뉴ID 정보를 이용해 gdsMenu 의 권한정보를 폼에 권한정보로 셋팅
		}
		else
		{
			// frameWork
			this.gfnSetAuthInfo(objForm, objForm.getOwnerFrame().argMnuId, "", "");				// 메뉴ID 정보를 이용해 gdsMenu 의 권한정보를 폼에 권한정보로 셋팅
		}
	}
	
	var sFormCallBackFunc = "fnFormInit";
	if(!this.gfnIsNull(sFncInit))
	{
		sFormCallBackFunc = sFncInit;
	}
	
	objForm.addEventHandler("ontimer",	function(objForm, e) {
										switch (e.timerid)
										{
											case "formOnLoad_1":
												trace("[formOnLoad_1] ["+objForm.name+"]killTimer============");
												objForm.killTimer(e.timerid);

												// 컴포넌트 초기화 설정 및 이벤트 추가 처리
												this.gfnInitComponent(objForm);

												if(!this.gfnIsNull(sFormCallBackFunc))
												{
													if(typeof(sFormCallBackFunc) == "function")
													{
														eval("sFormCallBackFunc").call(objForm,objForm);
													}
													else
													{
														if(this.gfnIsFunction(objForm, sFormCallBackFunc))
														{
															objForm[sFormCallBackFunc].call(objForm,objForm);
														}
													}
												}
												break;
											default:
												break;
										}
									});
	objForm.setTimer("formOnLoad_1",1);

/*
	// 컴포넌트 초기화 설정 및 이벤트 추가 처리
	this.gfnInitComponent(objForm);

	// 콜백함수 호출
	if(!this.gfnIsNull(sFormCallBackFunc))
	{
		if(typeof(sFormCallBackFunc) == "function")
		{
			eval("sFormCallBackFunc").call(objForm,objForm);
		}
		else
		{
			if(this.gfnIsFunction(objForm, sFormCallBackFunc))
			{
				// eval("objForm[sFormCallBackFunc]").call(objForm,objForm);
				objForm[sFormCallBackFunc].call(objForm,objForm);
			}
		}
	}
*/

	var objStampDate = new Date();
	trace("[Frame.js][gfnSetFormInit]   끝 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#"+"|objForm.name:"+objForm.name);

};

/**
 * @desc	Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
 * @param {object} objForm			- 호출한 화면 Form
 * @param {event} e					- KeyEventInfo
 * @return N/A
 */
pForm._gfnOnkeyup = function(obj, e)
{
	//trace("[Frame.js][_gfnOnkeyup]e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);

	// 디버그 창 : Ctrl + Q
	if (e.ctrlkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		if (nexacro.getEnvironmentVariable("evSvrType") == "REAL") return;
		this.gfnOpenDebugPop();
	}
};

/**
 * @desc	컴포넌트 초기화 설정 및 이벤트 추가 처리
 * @param {object} objForm			- 호출한 화면 Form
 * @return N/A
 */
pForm.gfnInitComponent = function(objForm)
{
	//trace("[Frame.js][gfnInitComponent]");
	// var sFormOpenType = objForm.getOwnerFrame()["cvOpenType"];

	try
	{
		var arrComp = objForm.components;
		var nLength = arrComp.length;

		for(var i=0; i<nLength; i++)
		{
			if(arrComp[i] instanceof nexacro.Div)
			{
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if(this.gfnIsNull(arrComp[i].url))
				{
					this.gfnInitComponentSub(objForm, arrComp[i].form);			// 재귀함수
				}
			}
			else if(arrComp[i] instanceof nexacro.Tab)
			{
				var nPages = arrComp[i].tabpages.length;

				for(var j=0; j<nPages;j++)
				{
					// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
					if(this.gfnIsNull(arrComp[i].tabpages[j].url))
					{
						this.gfnInitComponentSub(objForm, arrComp[i].tabpages[j].form); // 재귀함수
					}
				}
			}
			else
			{
				// Grid
				if(arrComp[i] instanceof nexacro.Grid)
				{
					this.gfnInitComponentGrid(objForm, arrComp[i]);			// Grid 이벤트 추가 및 설정
				}
				
				// ★★★ 추가적인 초기화 기능이 필요할 경우 기술
			}
		}
	}
	catch (e)
	{
		trace("[Frame.js][gfnInitComponent]e.message:"+e.message);
	}
};

/**
 * @desc	컴포넌트 초기화 설정 및 이벤트 추가 처리(container component 일때)
 * @param {object} objForm			- 호출한 화면 Form
 * @param {object} objSubForm		- container component의 form
 * @return N/A
 */
pForm.gfnInitComponentSub = function(objForm, objSubForm)
{
	//trace("[Frame.js][gfnInitComponentSub]");

	try
	{
		var arrComp = objSubForm.components;
		var nLength = arrComp.length;

		for(var i=0; i<nLength; i++)
		{
			if(arrComp[i] instanceof nexacro.Div)
			{
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if(this.gfnIsNull(arrComp[i].url))
				{
					this.gfnInitComponentSub(objForm, arrComp[i].form);			// 재귀함수
				}
			}
			else if(arrComp[i] instanceof nexacro.Tab)
			{
				var nPages = arrComp[i].tabpages.length;

				for(var j=0; j<nPages;j++)
				{
					// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
					if(this.gfnIsNull(arrComp[i].tabpages[j].url))
					{
						this.gfnInitComponentSub(objForm, arrComp[i].tabpages[j].form); // 재귀함수
					}
				}
			}
			else
			{
				// Grid
				if(arrComp[i] instanceof nexacro.Grid)
				{
					this.gfnInitComponentGrid(objForm, arrComp[i]);			// Grid 이벤트 추가 및 설정
				}
				
				// ★★★ 추가적인 초기화 기능이 필요할 경우 기술
			}
		}
	}
	catch (e)
	{
		trace("[Frame.js][gfnInitComponentSub]e.message:"+e.message);
	}
};

/**
 * @desc	그리드의 설정 및 이벤트 추가
 *			편집모드 설정 - autoenter : select
 *			oncloseup 이벤트 추가
 *			combo 일때 아래행으로 이동시켜 2번 클릭이 아닌 1번 클릭으로 콤보 오픈되게 처리
 *			oncellclick 이벤트 추가
 *			그리드내 텍스트 박스(normal, text, textarea) 클릭시 커서의 위치가 텍스트박스 가장 뒤쪽으로 위치하게 변경처리
 *
 * @param {object} objForm			- 호출한 화면 Form
 * @param {object} objComp			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnInitComponentGrid = function(objForm, objComp)
{
	//trace("[Frame.js][gfnInitComponentGrid]");

	var nIndex;
	try
	{
		// Grid에 기능 추가, userproperty : griduserproperty - none 일때는 호출하지 않음
		if(objComp.griduserproperty != "none")
		{
			this.gfnSetGrid(objComp);
		}
	}
	catch (e)
	{
		trace(e.message);
	}
};

/**
 * @desc	메뉴목록에서 클릭, 업무내부에서 화면 열기 요청시 업무화면을 보여준다
 * @param {String} sMnuId			- 메뉴 Id
 * @param {String} arrArgSend		- 사용자 전달값
 * @return N/A
 */
pForm.gfnCallOpenMenu = function(sMnuId, arrArgSend)
{
	if (this.gfnIsNull(this.fvApp)) 
	{
		this.fvApp = nexacro.getApplication();
	}

	var dsObj, nRow;
	dsObj = this.fvApp.gdsMenu;
	// nRow = dsObj.findRow("mnuId", sMnuId);
	nRow = dsObj.findRow(this.fvApp.objMenu.sMnuIdCol, sMnuId);
	
	if ( nRow == -1 ) return;

	var sMnuId = dsObj.getColumn(nRow, this.fvApp.objMenu.sMnuIdCol); // "mnuId"
	var sMnuNm = dsObj.getColumn(nRow, this.fvApp.objMenu.sMnuNmCol); // "mnuNm"
	var sMenuUrl = dsObj.getColumn(nRow, this.fvApp.objMenu.sMenuUrlCol); // "menuUrl"
	
	if (this.gfnIsNull(sMenuUrl)) 	return;

	// 열려 있는 경우는 active 처리
	// var sChildKey = this.fvApp.gdsOpenMenu.lookup("mnuId", sMnuId, "winKey");
	var sChildKey = this.fvApp.gdsOpenMenu.lookup(this.fvApp.objMenu.sMnuIdCol, sMnuId, this.fvApp.objMenu.sWinIdCol);
	

	if (!this.gfnIsNull(sChildKey))
	{
		// MDI 버튼 클릭 이벤트 호출
		this.fvApp.gvFrameMDI.form.fnMdiBtnOnclicked(this.fvApp.gvFrameMDI.form.divMenuTab.form["btn_"+sChildKey]);
		
		// 열린 화면에 파라미터 전달 함수 호출
		var objChildFrame = this.fvApp.gvFramesetWork[sChildKey];
		
		if(!this.gfnIsNull(objChildFrame))
		{
			if ( !this.gfnIsNull(arrArgSend) ) 
			{
				//화면오픈시 파라미터 전달 함수 호출
				if (objChildFrame.form.isValidObject("fnCallOpenedForm")) 
				{
					objChildFrame.form.fvArgSend = arrArgSend;
					objChildFrame.form.fnCallOpenedForm();
				}
			}
		}
		return;
	}

	// Max Window Count 체크
	if(!this.gfnIsNull(this.fvApp.gvFramesetWork) && !this.gfnIsNull(this.fvApp.Frame)
	&& (this.fvApp.gvFramesetWork.all.length >= parseInt(this.fvApp.Frame.nFrameMdiLimit))) 
	{
		var sMsgCode = ["Alert", "업무화면은 " + this.fvApp.Frame.nFrameMdiLimit + "개를 초과할 수 없습니다."];
		this.gfnShowMessage(this, sMsgCode);
		return;
	}

	if( !this.gfnIsNull(sMenuUrl) ) 
	{
		// 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고, open 시킴
		this.gfnOpenMenu(sMnuId, arrArgSend, false);
	}
};

/**
 * @desc	gfnCallOpenMenu 함수에서 호출 또는 직접호출하여 업무화면을 오픈한다.
 *			메뉴레벨로 존재하지 않아도 오픈 가능
 * @param {object} sMnuId			- 메뉴Id
 * @param {String} arrArgSend		- 사용자 전달값.(arrArgSend)
 * @param {String} bCloseWhenExist	- 메뉴가 이미 열려있는 경우 기존 메뉴를 close할지 여부. [default false]
 * @return N/A
 */
pForm.gfnOpenMenu = function(sMnuId, arrArgSend, bCloseWhenExist) 
{
	var sChildKey;

	if (this.gfnIsNull(sMnuId)) return;

	var sMenuUrl = this.fvApp.gdsMenu.lookup(this.fvApp.objMenu.sMnuIdCol, sMnuId, this.fvApp.objMenu.sMenuUrlCol);
	if (this.gfnIsNull(sMenuUrl)) return;
	
	var objMenuDs = this.fvApp.gdsMenu;
	var sMnuNm = this.gfnNvl(arrArgSend.mnuNm, objMenuDs.lookup(this.fvApp.objMenu.sMnuIdCol, sMnuId, this.fvApp.objMenu.sMnuNmCol));
	var sMenuPath = objMenuDs.lookup(this.fvApp.objMenu.sMnuIdCol, sMnuId, this.fvApp.objMenu.sMenuPath);
	
	if (this.gfnIsNull(sMnuNm)) sMnuNm = "form_"+sMnuId;

	// 기존 화면 frame check
	sChildKey = this.fvApp.gdsOpenMenu.lookup(this.fvApp.objMenu.sMnuIdCol, sMnuId, this.fvApp.objMenu.sWinIdCol);

	var objChildFrame = this.fvApp.gvFramesetWork[sChildKey];
	if( !this.gfnIsNull(objChildFrame) ) 
	{
		bCloseWhenExist = this.gfnNvl(bCloseWhenExist, false);

		if( bCloseWhenExist ) 
		{
			this.fvApp.gvFramesetWork[sChildKey].form.close();
		} 
		else 
		{
			var objOpenFormGds = this.fvApp.gdsOpenMenu;
			// var nWinRow = objOpenFormGds.findRowExpr("winKey == '" + sChildKey + "'");
			var nWinRow = objOpenFormGds.findRowExpr(this.fvApp.objMenu.sWinIdCol+" == '" + sChildKey + "'");
			
			if (nWinRow >= 0) 
			{
				if ( !this.gfnIsNull(arrArgSend) ) 
				{
					//화면오픈시 파라미터 전달 함수 호출
					if (objChildFrame.form.isValidObject("fnCallOpenedForm")) 
					{
						objChildFrame.form.fvArgSend = arrArgSend;
						objChildFrame.form.fnCallOpenedForm();
					}
				}
				
				// this.fvApp.gvFrameMDI.form.fnSetMdiBtnSel(sChildKey);
				this.fvApp.gvFrameMDI.form.fnMdiBtnOnclicked(this.fvApp.gvFrameMDI.form.divMenuTab.form[this.fvTabBtnPrefix+sChildKey]);
				objOpenFormGds.set_rowposition(nWinRow);
				
				objChildFrame.setFocus();   // 메뉴를 선택했을때 Form이 존재하면 포커스를 준다.
			}
			return;
		}
	}

	sChildKey = "win_" + sMnuId + "_" + parseInt(this.gfnMathRandom() * 1000);    // "win_samplePopup_235"

	var sUrl = "Frame_Main::frameWork.xfdl";
	
	objChildFrame = new ChildFrame();
	objChildFrame.init(sChildKey, 0, 0, 0, 0, null, null);
	this.fvApp.gvFramesetWork.addChild(sChildKey, objChildFrame);

	objChildFrame.set_formurl(sUrl);

	objChildFrame.set_dragmovetype("none");
	objChildFrame.set_showtitlebar(false);
	objChildFrame.set_resizable(false);
	objChildFrame.set_openstatus("maximize");
	objChildFrame.set_showcascadetitletext(false);
	objChildFrame.set_titletext(sMnuNm);

	objChildFrame.arguments = [];
	objChildFrame.arguments["argWinKey"] = sChildKey;         // "win_samplePopup"
	objChildFrame.arguments["argMnuId"]  = sMnuId;
	objChildFrame.arguments["argMnuNm"]  = sMnuNm;
	objChildFrame.arguments["argMenuUrl"] = sMenuUrl;         // .xfdl은 WorkForm에서 붙여준다. 예) "Frame_Popup::ComCode"
	objChildFrame.arguments["argMenuPath"] = sMenuPath;
	objChildFrame.arguments["argSend"] = arrArgSend;

	this.fvApp.gvFrameMDI.form.fnAddOpenformInfo(objChildFrame);	// 열린 화면을 Dataset에 추가, MDI open Menu 버튼 생성

	objChildFrame.show();
	objChildFrame.setFocus();
	
	this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1WorkSize);
};

/**
 * @class 폼에 권한정보 셋팅
 * @param {object} objForm			- 호출한 화면 Form
 * @param {string} sMnuId			- 메뉴 ID
 * @param {object} objDs			- gdsMenu or 권한체크대상 Dataset
 * @param {string} sAuthCallback	- Auth 후처리용 callback 함수명 , fnAuthCallback
 * @return N/A
 */
pForm.gfnSetAuthInfo = function(objForm, sMnuId, objDs, sAuthCallback)
{
	trace("[gfnSetAuthInfo]objForm:"+objForm+"|objForm.id:"+objForm.id+"|sMnuId:"+sMnuId+"|objDs:"+objDs+"|sAuthCallback:"+sAuthCallback);
	
	var nRow;
	var objCheckDs;
	var objAuth = {};
	
	if(this.gfnIsNull(objForm)) return;
	if(this.gfnIsNull(sMnuId)) return;
	
	if(!this.gfnIsNull(objDs))
	{
		objCheckDs = objDs;
		// nRow  = objCheckDs.findRow("mnuId", sMnuId);
		nRow  = objCheckDs.findRow(nexacro.getApplication().objMenu.sMnuIdCol, sMnuId);
	}
	else
	{
		objCheckDs = nexacro.getApplication().gdsMenu;
		// nRow  = objCheckDs.findRow("mnuId", sMnuId);
		nRow  = objCheckDs.findRow(nexacro.getApplication().objMenu.sMnuIdCol, sMnuId);
	}
	
	if(nRow > -1)
	{
// 		objAuth.Custom01	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom01AuthCol), "N");			// 추가버튼1 권한(Y/N)
// 		objAuth.Custom02	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom02AuthCol), "N");			// 추가버튼2 권한(Y/N)
// 		objAuth.Custom03	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom03AuthCol), "N");			// 추가버튼3 권한(Y/N)
// 		objAuth.CustomNm01	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom01NmCol), "Custom01");		// 추가버튼1 버튼명
// 		objAuth.CustomNm02	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom02NmCol), "Custom02");		// 추가버튼2 버튼명
// 		objAuth.CustomNm03	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnCustom03NmCol), "Custom03");		// 추가버튼3 버튼명
// 		
// 		objAuth.Print 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnPrintAuthCol), "N");				// 출력 권한(Y/N)
// 		objAuth.TxtDown 	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnTxtDownAuthCol), "N");			// TXT다운 권한(Y/N)
// 		objAuth.ExcelDown 	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnExcelDownAuthCol), "N");			// 엑셀다운로드 권한(Y/N)
// 		objAuth.Conf 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnConfAuthCol), "N");				// 확정 권한(Y/N)
// 		objAuth.ConfCancel 	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnConfCancelAuthCol), "N");		// 확정취소 권한(Y/N)
// 		objAuth.New 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnNewAuthCol), "N");				// 신규 권한(Y/N)
// 		objAuth.Delete 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnDeleteAuthCol), "N");			// 삭제 권한(Y/N)
// 		objAuth.Save 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnSaveAuthCol), "N");				// 저장 권한(Y/N)
// 		objAuth.Search 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnSearchAuthCol), "N");			// 조회 권한(Y/N)
// 		// objAuth.Clear 		= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnClearAuthCol), "N");			// 초기화(조회영역) 권한(Y/N)
// 		objAuth.Clear		= "Y";
// 		objAuth.SearchList 	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnSearchListAuthCol), "N");		// 조회조건목록호출 권한(Y/N)
// 		objAuth.SearchSave 	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnSearchSaveAuthCol), "N");		// 조회조건저장 권한(Y/N)
		
 		objAuth.InqAuthrt	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnInqAuthrtYnCol), "N");	// 조회권한 (Y/N)
 		objAuth.RegAuthrt	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnRegAuthrtYnCol), "N");	// 등록권한 (Y/N)
 		objAuth.MdfcnAuthrt	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnMdfcnAuthrtYnCol), "N");	// 수정권한 (Y/N)
 		objAuth.DelAuthrt	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnDelAuthrtYnCol), "N");	// 삭제권한 (Y/N)
 		objAuth.ExcnAuthrt	= this.gfnNvl(objCheckDs.getColumn(nRow, objForm.fvApp.objMenu.sBtnExcnAuthrtYnCol), "N");	// 실행권한 (Y/N)
		
		objForm.getOwnerFrame().form.fvAuth = objAuth;
	}
	
	if(this.gfnIsFunction(objForm, sAuthCallback))
	{
		try
		{
			// eval("objForm[sAuthCallback]").call(objForm, sMnuId);
			objForm[sAuthCallback].call(objForm, sMnuId);
		}
		catch (e)
		{
			trace("gfnSetAuthInfo error : eval(objForm[sAuthCallback])");
			trace(e);
		}
	}	
};

/**
 * @desc	권한여부 확인
 * @param {object} objForm			- 호출한 화면 Form
 * @param {string} sAuth			- 권한키값 (공통버튼 ID 에서 'btn' 제외한 문자열)
 *										Lib_Constants.xjs > objAuth 키값 참고
 *										빈값이면 fvAuth 가 리턴
 * @return {string} 권한정보 (Y / N) (sAuth 빈값이면 fvAuth 가 리턴)
 */
pForm.gfnGetAuth = function(objForm, sAuth)
{
	var sRtn = "";
	var pForm;
	
	if(objForm.parent)
	{
		// 화면 로드시 gfnSetFormInit > gfnSetAuthInfo 를 통해 권한이 셋팅된 경우
		if(!this.gfnIsNull(objForm.getOwnerFrame().form.fvAuth) && Object.keys(objForm.getOwnerFrame().form.fvAuth).length > 0)
		{
			if(!this.gfnIsNull(sAuth))
			{
				sRtn = objForm.getOwnerFrame().form.fvAuth[sAuth];
			}
			else
			{
				sRtn = objForm.getOwnerFrame().form.fvAuth;
			}
		}
		else
		{
			if(objForm.getOwnerFrame().cvSrcPopup == "Y")
			{			
				// 팝업일때 권한 생성
				this.gfnSetAuthInfo(objForm, objForm.getOwnerFrame().cvMnuId, "", "");	// 메뉴ID 정보를 이용해 gdsMenu 의 권한정보를 폼에 권한정보로 셋팅
			}
			else
			{
				// frameWork 권한 생성
				this.gfnSetAuthInfo(objForm, objForm.getOwnerFrame().argMnuId, "", "");	// 메뉴ID 정보를 이용해 gdsMenu 의 권한정보를 폼에 권한정보로 셋팅
			}
			
			if(!this.gfnIsNull(sAuth))
			{
				sRtn = objForm.getOwnerFrame().form.fvAuth[sAuth];
			}
			else
			{
				sRtn = objForm.getOwnerFrame().form.fvAuth;
			}
		}
	}
	
	return sRtn;
};

/*
	★★★ 공통코드 관련 dataset 구조, 서비스 연동 수정 필요
*/
/**
 * @desc	특정 그룹에 대한 공통코드를 조회한다
 * @param {object} objForm			- 호출한 화면 Form
 * @param {Array} arrParam			- 공통코드 조회 정보
  *										outDs		수신용 Dataset Object
 *										groupId		공통코드 조회할 키값
 *										headflag	초기값 추가설정
 *													[ N(없음, default), B(빈 문자열), S(선택), A(전체) ]
 *													B - code : "", name : "" ,  S - code : "", name : "- 선택 -" , A - code : "", name : "- 전체 -"
 *										useYn		공통코드 사용여부 [Y(default) / N] , A - 전체
 * @param {String} sSvcId			- 서비스 ID (값이 없을 경우 "getCommonCode")
 * @param {String} sCallbackFunc	- 호출한 화면에서 받을 콜백 함수명 (ex. fnComcodeCallback)
 * @return 생성된 데이터셋
 */
pForm.gfnGetCommonCode = function(objForm, arrParam, sSvcId, sCallbackFunc)
{
	if(this.gfnIsNull(objForm) || this.gfnIsNull(arrParam))
	{
		return;
	}
	
	// 폼 단독실행시 빈값에 따른 보완처리용
	try
	{
		if(this.gfnIsNull(objForm.fvApp.Tran))
		{
			objForm.fvApp.Tran = {};
			objForm.fvApp.Tran.tranInfo = [];
		}
	}
	catch (e)
	{

	}

	var objApp = nexacro.getApplication();
	var sFilterString = "";
	var i;
	var objParam;
	var objOutDs;
	var sOutDsNm;
	var sGroupId;
	var sHeadflag;
	var sUseYn;
	var bSvcCall = false;
	var sSvcOutDsNm;
	var sSvcGroupId;
	var sSvcHeadflag;
	var sSvcUseYn;
	var nRow;
	var	sGroupCdMgno;
	var	sCdMgno;
	var	sCdKornNm;
	var	nSortSeqo;

	for(i=0; i<arrParam.length; i++)
	{
		objParam = arrParam[i];
		objOutDs 	= objParam.outDs;
		sGroupId	= objParam.groupId;
		sHeadflag 	= this.gfnIsNull(objParam.headflag) ? "" : objParam.headflag;
		sUseYn 		= this.gfnIsNull(objParam.useYn) ? "Y" : objParam.useYn;
		
		if(this.gfnIsNull(objOutDs) || this.gfnIsNull(sGroupId))
		{
			continue;
		}
		
		//Dataset명으로 Dataset Object생성
		if ( this.gfnTypeof(objOutDs) != "dataset" )
		{
			var sDsName = objOutDs;
			objOutDs = objForm.objects[sDsName];
			if (this.gfnIsNull(objOutDs)) 
			{
				objOutDs = new Dataset();
				objOutDs.name = sDsName;
				objForm.addChild(sDsName, objOutDs);
			}
		} 
		objOutDs.clearData();
		
		sFilterString = "groupCdMgno == " + nexacro.wrapQuote(sGroupId);
		objApp.gdsCommCode.filter(sFilterString);
		
		if(objApp.gdsCommCode.rowcount > 0)
		{
			// gdsCommCode 에 데이터 존재
			var nRowCnt  = objOutDs.copyData(objApp.gdsCommCode, true);
			objApp.gdsCommCode.filter("");
			if(!this.gfnIsNull(sHeadflag))
			{
				sGroupCdMgno	= objOutDs.getColumn(0,"groupCdMgno");
				sCdMgno			= objOutDs.getColumn(0,"cdMgno");
				sCdKornNm		= objOutDs.getColumn(0,"cdKornNm");
				nSortSeqo		= 0;
				
				// N(없음), B(빈 문자열), S(선택), A(전체)
				if(sHeadflag == "B")				// B(빈 문자열)
				{
					nRow = objOutDs.insertRow(0);
					objOutDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
					objOutDs.setColumn(nRow,"cdMgno"	 , ""			);
					objOutDs.setColumn(nRow,"cdKornNm"	 , ""			);
					objOutDs.setColumn(nRow,"sortSeqo"	 , 0			);
				}
				else if(sHeadflag == "S")				// S(선택)
				{
					nRow = objOutDs.insertRow(0);
					objOutDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
					objOutDs.setColumn(nRow,"cdMgno"	 , ""			);
					objOutDs.setColumn(nRow,"cdKornNm"	 , objApp.objForm.sComboSelectText);
					objOutDs.setColumn(nRow,"sortSeqo"	 , 0			);					
				}
				else if(sHeadflag == "A")				// A(전체)
				{
					nRow = objOutDs.insertRow(0);
					objOutDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
					objOutDs.setColumn(nRow,"cdMgno"	 , ""			);
					objOutDs.setColumn(nRow,"cdKornNm"	 , objApp.objForm.sComboAllText);
					objOutDs.setColumn(nRow,"sortSeqo"	 , 0			);					
				}
				objOutDs.applyChange();
			}
		}
		else
		{
			// gdsCommCode 에 데이터 없을때
			if (!bSvcCall)
			{
				sSvcOutDsNm = objOutDs.id;
				sSvcGroupId = sGroupId;
				sSvcHeadflag = sHeadflag;
				sSvcUseYn = sUseYn;
			}
			else
			{
				sSvcOutDsNm += "|" + objOutDs.id;
				sSvcGroupId += "|" +  sGroupId;
				sSvcHeadflag += "|" + sHeadflag;
				sSvcUseYn += "|" + sUseYn;
			}			
			bSvcCall = true;
		}
		objApp.gdsCommCode.filter("");
	}

	if(bSvcCall)
	{
		if(this.gfnIsNull(objForm.fvApp.Tran.commCodeSeq))
		{
			objForm.fvApp.Tran.commCodeSeq = 0;
		}

		var nCommCodeSeq = objForm.fvApp.Tran.commCodeSeq+1;
		objForm.fvApp.Tran.commCodeSeq = nCommCodeSeq;

		// 조회조건 Dataset
		var sSearchDs = "_dsComCodeTranCond";
		var sResultDs = "_dsComCodeTranOut_"+nCommCodeSeq;
		var objSearchDs = this.gfnCreateDs(objForm, sSearchDs, "", true);
		var objResultDs = this.gfnCreateDs(objForm, sResultDs, "", true);
		
		objSearchDs.clear();
		objSearchDs.addColumn("dsName", "STRING", 255);		
		objSearchDs.addColumn("groupCodes", "STRING", 255);
		objSearchDs.addColumn("headflag", "STRING", 255);
		objSearchDs.addColumn("useYn", "STRING", 255);
		
		nRow = objSearchDs.addRow();
		objSearchDs.setColumn(nRow,"dsName", sSvcOutDsNm);
		objSearchDs.setColumn(nRow,"groupCodes", sSvcGroupId);
		objSearchDs.setColumn(nRow,"headflag", sSvcHeadflag);
		objSearchDs.setColumn(nRow,"useYn", sSvcUseYn);
		
		var objArgs = {};
		objArgs.svcId = "_getSvcCommonCode";
		objArgs.url = "/common/initial/selectCodeList.irs";
		objArgs.inds = "searchCode="+sSearchDs;
		objArgs.outds = sResultDs+"=codeList";
		objArgs.args = "";
		objArgs.callback = sCallbackFunc;
		objArgs.commCodeSvcId		= sSvcId;				// 공통코드조회 개발자의 서비스 ID
		objArgs.commCodeSearchDsNm	= sSearchDs;			// 공통코드조회 서비스 호출시 조회정보 Dataset 명
		objArgs.commCodeResultDsNm	= sResultDs;			// 공통코드조회 서비스 호출시 수신받을 Dataset 명
		
		this.gfnTransaction(objForm, objArgs);
	}
	else
	{
		// 화면의 callBack 함수 호출
		if(!objForm.gfnIsNull(sSvcId) && !objForm.gfnIsNull(objForm[sCallbackFunc]))
		{
			objForm[sCallbackFunc].call(objForm, sSvcId, 0, "SUCCESS");
		}		
	}
};

// /**
//  * @desc	페이징정보 데이타셋 설정
//  * @param   {object} objPagingDs 		- 페이징 DataSet
//  * @param   {oArgs} oArgs				- 컬럼값 정보 {volumePerPage:10,pasingType:"1"}
//  * @retunr	N/A
//  */
// pForm.gfnPagingApplyPagingDs = function(objPagingDs, oArgs)
// {	
// 	if (objPagingDs.getRowCount() == 0) 
// 	{
// 		var nRow = objPagingDs.addRow();
// 	}
// 	
// 	for ( key in oArgs )
// 	{
// 		objPagingDs.setColumn(0, key, oArgs[key]);
// 	}
// };
// 
// /**
//  * @desc	조회조건에 페이징정보 반영
//  * @param	{object} objSchDs 			- 조회 Dataset
//  * @param   {object} objPagingDs 		- 페이징 DataSet
//  * @retunr	N/A
//  */
// pForm.gfnPagingApplySearchDs = function(objSchDs, objPagingDs)
// {	
// 	var nCurPage    = objPagingDs.getColumn(0, "currentPage");
// 	var nCntPerPage = objPagingDs.getColumn(0, "volumePerPage");
// 
// 	var startRow = ((nexacro.toNumber(nCurPage)-1) * nexacro.toNumber(nCntPerPage)) + 1;
// 	var endRow   = startRow +  nexacro.toNumber(nCntPerPage) - 1;
// 
// 	objSchDs.setColumn(0, "strtNo", startRow);
// 	objSchDs.setColumn(0, "endNo", endRow);
// };


/**
 * @desc	문자열 암호화 처리 (RSA)
 * @param {String} sText			- 암호화 대상 문자열
 * @return 암호화된 문자열
 */
pForm.gfnRSAEncrypt = function(sText) 
{
	var sEncryptValue = "";
	if(this.gfnIsNull(nexacro.getApplication().gvRSAModulus) || this.gfnIsNull(nexacro.getApplication().gvRSAExponent))
	{
		this.gfnShowMessage(this, ["alert","필수정보 누락으로 암호화 처리를 할 수 없습니다."], "", "", "");
		// RSA 호출
		nexacro.getApplication().gvFrameLogin.form.fnCallRSA();
		return;
	}
	
	try
	{
		var rsa = new RSAKey();
		rsa.setPublic(nexacro.getApplication().gvRSAModulus , nexacro.getApplication().gvRSAExponent);
		sEncryptValue = rsa.encrypt(sText);		
	}
	catch (e)
	{
		trace("[gfnEncrypt] error ==========================\n"+e.message);
	}
	
	return sEncryptValue;
};

/**
 * @desc	전달된 정보의 파일들을 FileDownTransfer 을 이용해 전체다운로드 처리한다. (RaonK관련)
 * @param {object} objForm			- 호출한 화면 Form
 * @param {Array} arrFileListInfo	- 파일관련정보 array
 * @return N/A
*/
pForm.gfnFullDownload = function(objForm, arrFileListInfo)
{
	if (this.gfnIsNull(objForm) || this.gfnIsNull(arrFileListInfo)) 
	{
		return false;
	}
	
	if (arrFileListInfo.length == 0) 
	{
		return false;
	}

	// 파일정보 Dataset 생성
	var sFileInfoDsNm = "_dsFullDownload";
	var objFileInfoDs = this.gfnCreateDs(objForm, sFileInfoDsNm, "", true);

	objFileInfoDs.clear();
	objFileInfoDs.addColumn("fileGroupMgno", "STRING", 255);		
	objFileInfoDs.addColumn("archiveFileName", "STRING", 255);
	
	var nRow;
	
	for(var idx in arrFileListInfo) 
	{
		if (this.gfnIsNull(arrFileListInfo[idx].fileGroupMgno)) 
		{
			continue;
		}
		nRow = objFileInfoDs.addRow();
		objFileInfoDs.setColumn(nRow,"fileGroupMgno", arrFileListInfo[idx].fileGroupMgno);
		objFileInfoDs.setColumn(nRow,"archiveFileName", arrFileListInfo[idx].archiveFileName);
	}		
	
	if(objFileInfoDs.rowcount < 1) return;

	//  FileDownTransfer 생성
	var sFileDownTransferNm = "_fdtFullDownload";
	var objFileDown = objForm.objects[sFileDownTransferNm];

	if (this.gfnIsNull(objFileDown))
	{
		objFileDown = new nexacro.FileDownTransfer(sFileDownTransferNm, objForm);  
		objForm.addChild(sFileDownTransferNm, objFileDown);
		objFileDown.addEventHandler("onsuccess", this._gfnFullDownload_onsuccess, objForm);
		objFileDown.addEventHandler("onerror", this._gfnFullDownload_onerror, objForm);	
	}
	
	// Set Object 
	objFileDown.set_url(nexacro.getApplication().RaonKInfo.fileFullDownLoadUrl);
	objFileDown.clearPostDataList();
	objFileDown.setPostData("dsMultiDownload",objFileInfoDs.saveXML());
	objFileDown.download();
};

/**
 * @desc	전체다운로드 파일다운로드 성공시 (RaonK관련)
 * @param {object} FileDownTransfer	- 서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트
 * @param {e} FileDownTransferEventInfo	- Event Object.
 * @return N/A
*/
pForm._gfnFullDownload_onsuccess = function(obj , e)
{
	trace("[_gfnFullDownload_onsuccess]"+e.targetfullpath+"\n"+e.url);
};

/**
 * @desc	전체다운로드 파일다운로드 실패시 (RaonK관련)
 * @param {object} FileDownTransfer	- 서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트
 * @param {e} FileDownTransferErrorEventInfo - Event Object.
 * @return N/A
*/
pForm._gfnFullDownload_onerror = function(obj , e)
{
	var sMsg = ">>>>>>>>> _gfnFullDownload event ERROR >>>>>>>>\n";
		sMsg += "errortype : "+e.errortype+"\n";
		sMsg += "errormsg : "+e.errormsg+"\n";
		sMsg += "statuscode : "+e.statuscode;

	this.gfnShowMessage(this, "파일 다운로드 실패!!\n\n"+sMsg);
};

/**
 * @desc	전달된 정보의 파일들을 FileDownTransfer 을 이용해 전체다운로드 처리한다. (Grid관련)
 * @param {object} objForm			- 호출한 화면 Form
 * @param {Array} arrFileListInfo	- 파일관련정보 array
 * @return N/A
*/
pForm.gfnCheckFileDownload = function(objForm, arrFileListInfo)
{
	if (this.gfnIsNull(objForm) || this.gfnIsNull(arrFileListInfo)) 
	{
		return false;
	}
	
	if (arrFileListInfo.length == 0) 
	{
		return false;
	}

	// 파일정보 Dataset 생성
	var sFileInfoDsNm = "_dsCheckFileDownload";
	var objFileInfoDs = this.gfnCreateDs(objForm, sFileInfoDsNm, "", true);

	objFileInfoDs.clear();
	objFileInfoDs.addColumn("fileGroupMgno", "STRING", 255);		
	objFileInfoDs.addColumn("fileMgno", "STRING", 255);
	
	var nRow;
	
	for(var idx in arrFileListInfo) 
	{
		if (this.gfnIsNull(arrFileListInfo[idx].fileGroupMgno) || this.gfnIsNull(arrFileListInfo[idx].fileMgno)) 
		{
			continue;
		}
		nRow = objFileInfoDs.addRow();
		objFileInfoDs.setColumn(nRow,"fileGroupMgno", arrFileListInfo[idx].fileGroupMgno);
		objFileInfoDs.setColumn(nRow,"fileMgno", arrFileListInfo[idx].fileMgno);
	}		
	
	if(objFileInfoDs.rowcount < 1) return;

	//  FileDownTransfer 생성
	var sFileDownTransferNm = "_fdtCheckFileDownload";
	var objFileDown = objForm.objects[sFileDownTransferNm];

	if (this.gfnIsNull(objFileDown))
	{
		objFileDown = new nexacro.FileDownTransfer(sFileDownTransferNm, objForm);  
		objForm.addChild(sFileDownTransferNm, objFileDown);
		objFileDown.addEventHandler("onsuccess", this._gfnCheckFileDownload_onsuccess, objForm);
		objFileDown.addEventHandler("onerror", this._gfnCheckFileDownload_onerror, objForm);	
	}
	
	// Set Object 
	objFileDown.set_url(nexacro.getApplication().RaonKInfo.checkFileDownLoadUrl);
	objFileDown.clearPostDataList();
	objFileDown.setPostData("dsSelectedMultiDownload",objFileInfoDs.saveXML());
	objFileDown.download();
};

/**
 * @desc	지정파일다운로드 파일다운로드 성공시 (Grid관련)
 * @param {object} FileDownTransfer	- 서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트
 * @param {e} FileDownTransferEventInfo	- Event Object.
 * @return N/A
*/
pForm._gfnCheckFileDownload_onsuccess = function(obj , e)
{
	trace("[_gfnFullDownload_onsuccess]"+e.targetfullpath+"\n"+e.url);
};

/**
 * @desc	지정파일다운로드 파일다운로드 실패시 (Grid관련)
 * @param {object} FileDownTransfer	- 서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트
 * @param {e} FileDownTransferErrorEventInfo - Event Object.
 * @return N/A
*/
pForm._gfnCheckFileDownload_onerror = function(obj , e)
{
	var sMsg = ">>>>>>>>> _gfnCheckFileDownload event ERROR >>>>>>>>\n";
		sMsg += "errortype : "+e.errortype+"\n";
		sMsg += "errormsg : "+e.errormsg+"\n";
		sMsg += "statuscode : "+e.statuscode;

	this.gfnShowMessage(this, "파일 다운로드 실패!!\n\n"+sMsg);
};

/**
 * @desc	전달된 정보의 파일에 대한 체크 후 FileDownTransfer 을 이용해 전체다운로드 처리한다. (RaonK관련)
 * @param {object} objForm			- 호출한 화면 Form
 * @param {Array} arrFileListInfo	- 파일관련정보 array
 * @return N/A
*/
pForm.gfnFullDownloadSvcCheck = function(objForm, arrFileListInfo)
{
	if (this.gfnIsNull(objForm) || this.gfnIsNull(arrFileListInfo)) 
	{
		return false;
	}
	
	if (arrFileListInfo.length == 0) 
	{
		return false;
	}

	// 파일정보 Dataset 생성
	var sFileInfoDsNm = "_dsFullDownload";
	var objFileInfoDs = this.gfnCreateDs(objForm, sFileInfoDsNm, "", true);

	objFileInfoDs.clear();
	objFileInfoDs.addColumn("fileGroupMgno", "STRING", 255);		
	objFileInfoDs.addColumn("archiveFileName", "STRING", 255);
	
	var nRow;
	
	for(var idx in arrFileListInfo) 
	{
		if (this.gfnIsNull(arrFileListInfo[idx].fileGroupMgno)) 
		{
			continue;
		}
		nRow = objFileInfoDs.addRow();
		objFileInfoDs.setColumn(nRow,"fileGroupMgno", arrFileListInfo[idx].fileGroupMgno);
		objFileInfoDs.setColumn(nRow,"archiveFileName", arrFileListInfo[idx].archiveFileName);
	}		
	
	if(objFileInfoDs.rowcount < 1) return;
	
	// 파일다운로드 전 파일체크
	// 공통Transaction 호출
	var objArgs = {};
	objArgs.svcId 			= "fullDownloadFile";
	objArgs.url 			= "/common/raonk/check/download.irs";
	objArgs.inds			= "dsSendFileDetail="+sFileInfoDsNm;
	objArgs.outds			= "";
	objArgs.args 			= "";
	objArgs.callback		= "gfnFullDownloadCallback";
	
	// 통신전 file관련 정보를 Tran.fileDownInfo 에 넣기
	var objFileDownInfo = {};
	objFileDownInfo.objForm = objForm;
	objFileDownInfo.dsMultiDownload = objFileInfoDs;
	objForm.fvApp.Tran.fileDownInfo[objArgs.svcId] = objFileDownInfo;
	
	this.gfnTransaction(this, objArgs);
};

/**
 * @desc	전달된 정보의 파일에 대한 체크 후 FileDownTransfer 을 이용해 전체다운로드 처리한다. (Grid관련)
 * @param {object} objForm			- 호출한 화면 Form
 * @param {Array} arrFileListInfo	- 파일관련정보 array
 * @return N/A
*/
pForm.gfnCheckFileDownloadSvcCheck = function(objForm, arrFileListInfo)
{
	if (this.gfnIsNull(objForm) || this.gfnIsNull(arrFileListInfo)) 
	{
		return false;
	}
	
	if (arrFileListInfo.length == 0) 
	{
		return false;
	}

	// 파일정보 Dataset 생성
	var sFileInfoDsNm = "_dsCheckFileDownload";
	var objFileInfoDs = this.gfnCreateDs(objForm, sFileInfoDsNm, "", true);

	objFileInfoDs.clear();
	objFileInfoDs.addColumn("fileGroupMgno", "STRING", 255);		
	objFileInfoDs.addColumn("fileMgno", "STRING", 255);
	
	var nRow;
	
	for(var idx in arrFileListInfo) 
	{
		if (this.gfnIsNull(arrFileListInfo[idx].fileGroupMgno) || this.gfnIsNull(arrFileListInfo[idx].fileMgno)) 
		{
			continue;
		}
		nRow = objFileInfoDs.addRow();
		objFileInfoDs.setColumn(nRow,"fileGroupMgno", arrFileListInfo[idx].fileGroupMgno);
		objFileInfoDs.setColumn(nRow,"fileMgno", arrFileListInfo[idx].fileMgno);
	}		
	
	if(objFileInfoDs.rowcount < 1) return;

	// 파일다운로드 전 파일체크
	// 공통Transaction 호출
	var objArgs = {};
	objArgs.svcId 			= "checkDownloadFile";
	objArgs.url 			= "/common/raonk/check/selected/download.irs";
	objArgs.inds			= "dsSendFileDetail="+sFileInfoDsNm;
	objArgs.outds			= "";
	objArgs.args 			= "";
	objArgs.callback		= "gfnFullDownloadCallback";
	
	// 통신전 file관련 정보를 Tran.fileDownInfo 에 넣기
	var objFileDownInfo = {};
	objFileDownInfo.objForm = objForm;
	objFileDownInfo.dsMultiDownload = objFileInfoDs;
	objForm.fvApp.Tran.fileDownInfo[objArgs.svcId] = objFileDownInfo;
	
	this.gfnTransaction(this, objArgs);
};

/**
 * @desc	파일다운로드관련 Transaction CallBack 함수
 * @param {String} sSvcId			- 서비스id
 * @param {Number} nErrCode			- 응답코드
 * @param {String} sErrMsg			- 응답메세지
 * @return N/A
*/
pForm.gfnFullDownloadCallback = function(sSvcId, nErrCode, sErrMsg)
{
	// 에러 시 화면 처리 내역
	if (nErrCode < 0) 
	{
		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
		return;
	}
	
	switch (sSvcId)
	{
		case "fullDownloadFile" :
			var objFileDownInfo = nexacro.getApplication().Tran.fileDownInfo[sSvcId];
			var objForm = objFileDownInfo.objForm;
			var objFileDs = objFileDownInfo.dsMultiDownload;
			
			if(this.gfnIsNull(objForm) || this.gfnIsNull(objFileDs))
			{
				return;
			}
			
			//  FileDownTransfer 생성
			var sFileDownTransferNm = "_fdtFullDownload";
			var objFileDown = objForm.objects[sFileDownTransferNm];
			
			if (this.gfnIsNull(objFileDown))
			{
				objFileDown = new nexacro.FileDownTransfer(sFileDownTransferNm, objForm);  
				objForm.addChild(sFileDownTransferNm, objFileDown);
				objFileDown.addEventHandler("onsuccess", this._gfnFullDownload_onsuccess, objForm);
				objFileDown.addEventHandler("onerror", this._gfnFullDownload_onerror, objForm);	
			}
			
			// Set Object 
			objFileDown.set_url(nexacro.getApplication().RaonKInfo.fileFullDownLoadUrl);
			objFileDown.clearPostDataList();
			objFileDown.setPostData("dsMultiDownload",objFileDs.saveXML());
			objFileDown.download();
			
			delete nexacro.getApplication().Tran.fileDownInfo[sSvcId];
			break;
		case "checkDownloadFile" :
			var objFileDownInfo = nexacro.getApplication().Tran.fileDownInfo[sSvcId];
			var objForm = objFileDownInfo.objForm;
			var objFileDs = objFileDownInfo.dsMultiDownload;
			
			if(this.gfnIsNull(objForm) || this.gfnIsNull(objFileDs))
			{
				return;
			}
			
			//  FileDownTransfer 생성
			var sFileDownTransferNm = "_fdtCheckFileDownload";
			var objFileDown = objForm.objects[sFileDownTransferNm];

			if (this.gfnIsNull(objFileDown))
			{
				objFileDown = new nexacro.FileDownTransfer(sFileDownTransferNm, objForm);  
				objForm.addChild(sFileDownTransferNm, objFileDown);
				objFileDown.addEventHandler("onsuccess", this._gfnCheckFileDownload_onsuccess, objForm);
				objFileDown.addEventHandler("onerror", this._gfnCheckFileDownload_onerror, objForm);	
			}
			
			// Set Object 
			objFileDown.set_url(nexacro.getApplication().RaonKInfo.checkFileDownLoadUrl);
			objFileDown.clearPostDataList();
			objFileDown.setPostData("dsSelectedMultiDownload",objFileDs.saveXML());
			objFileDown.download();			
			
			delete nexacro.getApplication().Tran.fileDownInfo[sSvcId];
			break;
		default:
			break;
	}	
};

/**
 * @desc	Raonk Object에서 선택된 파일의 정보를 리턴한다.
 * @param {Object} arrObjRaonK		- Raonk Object Array
 * @return {array} 선택파일정보
 * ex.
 * arrCheckFileInfo:[{"fileGroupMgno":"FG00000694","fileMgno":"FD00000001"},{"fileGroupMgno":"2300000512","fileMgno":"FD00000011"},{"fileGroupMgno":"2300000512","fileMgno":"FD00000003"}]
*/
pForm.gfnGetCheckFileInfo = function(arrObjRaonK)
{
	var arrCheckFileInfo = [];	// 결과
	
	var i,j;
	var objSelectedListInfo;
	var arrNewList;			// 새로 업로드된 파일 정보 - 업로로 올린 파일정보
	var arrWebList;			// 웹파일 정보 - 조회된 파일정보
	var nSelectedFileCount = 0;
	var objFileInfo = [];
	var nNoCnt = 0;
	var encodedRowJson;
	var rowJson;
	
	for(i=0;i<arrObjRaonK.length;i++)
	{
		/* 체크박스로 선택된 파일정보 불러오기 */
		objSelectedListInfo = arrObjRaonK[i].GetSelectedListInfo();

		arrNewList = objSelectedListInfo.newFile;			// 새로 업로드된 파일 정보 - 업로로 올린 파일정보
		arrWebList = objSelectedListInfo.webFile;			// 웹파일 정보 - 조회된 파일정보
		
		if(!this.gfnIsNull(arrNewList))		// 새로 업로드된 파일 정보
		{
			nSelectedFileCount += arrNewList.length;
			for(j=0;j<arrNewList.length;j++)
			{
				encodedRowJson = arrNewList[j].responseCustomValue;
				if(!this.gfnIsNull(encodedRowJson))
				{
					/* Base64 디코딩 */
					rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
					
					/* 신규파일 - 문서미리보기를 위한 파일식별 정보 추출하기 */
					arrCheckFileInfo[nNoCnt] = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
					nNoCnt++;
				}
			}
		}
		
		if(!this.gfnIsNull(arrWebList))		// 조회된 파일정보
		{
			nSelectedFileCount += arrWebList.length;
			for(j=0;j<arrWebList.length;j++)
			{
				encodedRowJson = arrWebList[j].customValue;
				if(!this.gfnIsNull(encodedRowJson))
				{
					/* Base64 디코딩 */
					rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
					
					/* 조회파일 - 문서미리보기를 위한 파일식별 정보 추출하기 */
					arrCheckFileInfo[nNoCnt] = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
					nNoCnt++;
				}
			}		
		}
		
		trace("nSelectedFileCount:"+nSelectedFileCount);
		if(!this.gfnIsNull(arrCheckFileInfo))
		{
			trace("arrCheckFileInfo:"+JSON.stringify(arrCheckFileInfo));
		}
	}
	
	return arrCheckFileInfo;
};