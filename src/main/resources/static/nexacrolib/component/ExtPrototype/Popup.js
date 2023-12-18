/**
*  @FileName 	Popup.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.23
*  @Desction	Popup 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.23     		TOBESOFT 	            최초 생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnShowPopup 						: POPUP 오픈 함수 , Frame_Popup::cmmPopup.xfdl 를 부모폼으로 해서 팝업을 띄우는 함수 
 * gfnPopupClose						: 팝업창 닫기
 * gfnSetPopupReturn					: 팝업창에서 부모창으로 설정한 값을 json 형태로 전달한다.
 * gfnGetPopupRetun						: 팝업창에서 부모창으로 설정한 값을 json 형태로 전달 받는다.
 * gfnShowPopupForSysOnly				: 시스템용 팝업 호출(개발자 사용불가 - 권한팝업(gfnShowPopup) 사용)
 * _gfnPopup_onmove						: Modal 팝업화면에서 화면이 Application에서 숨김방지 
 **************************************************************************/

/**
 * @desc	POPUP 오픈 함수
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sPopupId			- unique 팝업 id
 * @param {String} sMnuId			- 메뉴ID
 * @param {object} oPosition		- oPosition [{left:-1,top:-1,width:100,height:100}]
 *										팝업 창의 좌표(크기)를 설정
 *										 // -- Modeless일 경우 width, height 는 필수
 *										Modal일 경우 width, height 를 지정하면 설정한 넓이/높이로 팝업이 오픈되고,
 *										아무것도 설정하지 않으면 공통팝업 사이즈로 가운데 정렬된 팝업으로 오픈됨
 * @param {object} objArgs			- argumetns[{key:'value'} ] , 팝업창에 전달될 파라미터 값, 개발자의 key 명의 preFix 는 "pv" 를 사용토록 한다.
 *										공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
 *										cvOpenType : PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
 * @param {object} oOption			- oOption  [{callback:"fnPopupCallback",titletext:sMnuNm, modal:true, autosize:false, showtitlebar:true, resizable:true}]
 *										팝업 창의 오픈시 옵션 설정
 * @return N/
 */
pForm.gfnShowPopup = function(objForm, sPopupId, sMnuId, oPosition, objArgs, oOption)
{
	// 필수항목체크(Form오브젝트,팝업ID)
	if(this.gfnIsNull(objForm) || this.gfnIsNull(sPopupId) || this.gfnIsNull(sMnuId) )
	{
		trace("gfnShowPopup 함수의 인자값이 부족합니다.");
		return false;
	}

	if (this.gfnIsNull(objForm.fvApp)) {
		objForm.fvApp = nexacro.getApplication();
	}
	
	// Popup정보 확인
	var bPopupOnlyOne	= true;							// Popup 단일실행유무(true:Popup ID를 기준으로 1개 노출/false:Popup ID를 변형하여 2개이상 중복노출)
	if(!this.gfnIsNull(objForm.fvApp.Frame))				// Application Frame정보 존재건
	{
		bPopupOnlyOne = objForm.fvApp.Frame.bPopupOnlyOne;	// Application의 단일실행유무 적용
	}
	var arrPopFrame = nexacro.getPopupFrames();				// Modal, Modeless로 실행 된 Frame정보
	var objPopup = arrPopFrame[sPopupId];					// Popup 오브젝트

	// Popup 단일실행(단일창)건 처리
	if(bPopupOnlyOne)
	{
		// 해당 팝업 Active
		if(!this.gfnIsNull(objPopup))					// Popup 오브젝트 존재(Popup이 생성 된 상태)
		{
			if(objPopup.openstatus == "minimize")		// Popup 오브젝트가 최소화 상태일 경우
			{
				objPopup.set_openstatus("normal");		// Popup을 normal상태(이전크기)로 변경
			}

			if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1)		// Runtime
			{
				objPopup.form.setFocus();				// Popup의 Form으로 focus 처리
			}
			else										// HTML5
			{
				objPopup._getWindowHandle().focus();	// Popup에 focus처리
			}
			
			// 이미 열려 있는 경우 fnParamInit 함수 호출
			this.gfnClearArgument(objForm.getOwnerFrame());
			this.gfnSetArgument(objForm.getOwnerFrame(), objArgs);
			if(!objPopup.form.gfnIsNull(objPopup.form["fnParamInit"]))
			{
				objPopup.form.fnParamInit();
			}		
			
			return;										// 단일실행건이기 때문에 Focus만 처리하고 하단처리 중지
		}
	}
	
	var sPopupUrl;
	// sMnuId 정보를 이용해 gdsMenu에서 유무 체크
	sPopupUrl = objForm.fvApp.gdsMenu.lookup(objForm.fvApp.objMenu.sMnuIdCol, sMnuId, objForm.fvApp.objMenu.sMenuUrlCol);
	if (this.gfnIsNull(sPopupUrl)) 
	{
		var sMsgCode = ["Alert","MnuId['"+sMnuId+"']에 대한 권한이 없습니다."];
		this.gfnShowMessage(this, sMsgCode);		
		return;
	}
	if (sPopupUrl.toString().indexOf(".xfdl")<0)	sPopupUrl = sPopupUrl+".xfdl";
	
	// 팝업ID 생성 (bPopupOnlyOne - false 여서 동일한 sPopupId 정보가 올때 팝업처리를 위함)
	// 동일한 팝업창이 떠 있을 경우 id 값을 바꿔서 새로 띄우기
	var nPopupSeq		= 1;						// Popup 중복생성을 위한 Sequence번호
	var sNewPopupId;								// Popup 노출대상 Popup ID
	if(!this.gfnIsNull(objPopup))					// Popup 오브젝트 존재
	{
		if(!this.gfnIsNull(objForm.fvApp.Frame))			// Application Frame정보 존재건
		{
			nPopupSeq = objForm.fvApp.Frame.nPopupSeq+1;	// Popup창 복수 생성위해 Frame의 Sequence번호 증가처리
			objForm.fvApp.Frame.nPopupSeq = nPopupSeq;		// Frame의 Sequence번호 적용
		}
		sNewPopupId = sPopupId+"_"+nPopupSeq;		// 신규 Sequence번호의 팝업ID 지정
	}
	else											// Popup 오브젝트 미존재건
	{
		sNewPopupId = sPopupId;						// Popup 노출대상 Popup ID 적용
	}

	oPosition = this.gfnSetDefaults(oPosition, {left:null, top:null, width:null, height:null} );
    oOption	  = this.gfnSetDefaults(oOption,   {callback : "fnPopupCallback", titletext:sPopupId, modal:true, autosize:true, showtitlebar:false, resizable:true});
	if( oPosition.width != null && oPosition.height != null ) 
	{
        oOption.autosize = false;
    }

	var sOpenalign = "";
	var nLeft = (this.gfnIsNull(oPosition.left))?-1:oPosition.left;
	var nTop = (this.gfnIsNull(oPosition.top))?-1:oPosition.top;

	if(nLeft == -1 && nTop == -1) 
	{
		sOpenalign = "center middle";
		var curX, curY;
		if (system.navigatorname == "nexacro") 
		{
			curX = objForm.fvApp.mainframe.left;
			curY = objForm.fvApp.mainframe.top;
		} 
		else 
		{
			curX = window.screenLeft;
			curY = window.screenTop;
		}
        nLeft	= curX + (objForm.fvApp.mainframe.width / 2) - Math.round(oPosition.width / 2);
	    nTop    = curY + (objForm.fvApp.mainframe.height / 2) - Math.round(oPosition.height / 2) ;
	} 
	else 
	{
		nLeft  =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}

	var sFrameUrl;
	if(objArgs.cvOpenType == "DockPopupForm")		// 공통팝업Form 사용
	{
		sFrameUrl = "Frame_Popup::comPopup.xfdl";;
	}
	else if(objArgs.cvOpenType == "DockForm")		// frameWork 의 새창인 경우
	{
		sFrameUrl = "Frame_Popup::comWorkPopup.xfdl";
	}	
	else		// 공통팝업Form을 사용하지 않는경우
	{
		sFrameUrl = sPopupUrl;
	}

	objArgs.cvPopupId  = sPopupId;
    objArgs.cvPopupUrl = sPopupUrl;
	if ( this.gfnIsNull(oOption.titletext) ) oOption.titletext = "";
	objArgs.cvTitletext = oOption.titletext;
	objArgs.cvCallback = oOption.callback;		//callback 함수
	objArgs.cvSrcPopup = "Y";
	if(this.gfnIsNull(objArgs.cvOpenType)) objArgs.cvOpenType = "PopupForm";
	objArgs.cvMnuId = sMnuId;
	objArgs.argMnuId = sMnuId;
	
	var objParentFrame = objForm.getOwnerFrame();

    if( oOption.modal ) 				// MODAL
	{
		var newChild = new nexacro.ChildFrame();
		newChild.init(sPopupId, nLeft, nTop, oPosition.width, oPosition.height, null, null, sFrameUrl);
		newChild.set_dragmovetype("all");
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(oOption.showtitlebar);
		newChild.set_showtitleicon(false);
		newChild.set_autosize(oOption.autosize);
		newChild.set_openalign(sOpenalign);  					// openalign 속성이 지정되면 position이 먹지않는다.
		newChild.set_resizable(oOption.resizable);    			// ChildFrame 의 리사이즈 가능 여부를 설정
		
		this.gfnClearArgument(newChild);

		if (oOption.showtitlebar)		newChild.set_titlebarheight(40);
		if (!this.gfnIsNull(objArgs.cvTitletext))	newChild.set_titletext(objArgs.cvTitletext);

		this.gfnSetArgument(newChild, objArgs);
		
		if(typeof(oOption.callback) == "function" )
		{
			newChild.showModal(sNewPopupId, objParentFrame, objArgs, objForm, oOption.callback);
		}
		else
		{
			newChild.showModal(sNewPopupId, objParentFrame, objArgs, objForm, function(sPopupId, varRet) 
			{
				if(this.gfnIsFunction(objForm, oOption.callback))
				{
					try
					{
						objForm[oOption.callback].call(objForm, objArgs.cvPopupId, varRet);
					}
					catch (e)
					{
						trace("gfnOpenPopup showModal error : eval(objForm[oOption.callback])");
						trace(e);
					}
				}
			});
		}
    } 
	else 						// MODELESS
	{
        objArgs.cvModeless = "Y";
		this.gfnClearArgument(objForm.getOwnerFrame());
		this.gfnSetArgument(objForm.getOwnerFrame(), objArgs);
		
		var sOpenStyle = "autosize="+oOption.autosize+" showtitlebar="+oOption.showtitlebar+" resizable="+oOption.resizable+" titletext="+ objArgs.cvTitletext+"";
		var bRtn = nexacro.open(sNewPopupId ,sFrameUrl, objParentFrame, objArgs, sOpenStyle, nLeft, nTop, oPosition.width, oPosition.height, objForm);
    }
};

/**
 * @desc	팝업창 닫기
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sRtn				- 리턴 값
 * @return {String} 리턴값
 */
pForm.gfnPopupClose = function(objForm, sRtn)
{
    if(this.gfnIsNull(sRtn)) sRtn = "";

	var pOwncerCF = objForm.getOwnerFrame();
	
	if (pOwncerCF.cvModeless=="Y") 
	{
		if (this.gfnIsNull(pOwncerCF.cvCallback)) 
		{
			return pOwncerCF.form.close(sRtn);
		}
		else 
		{
			var sPopId = pOwncerCF.cvPopupId;
			var sFunc = pOwncerCF.cvCallback;

			if(typeof(sFunc) == "function")
			{
				pOwncerCF.opener[sFunc].call(pOwncerCF.opener, sPopId, sRtn );
			}
			else
			{
				if(this.gfnIsFunction(pOwncerCF.opener, sFunc))
				{
					pOwncerCF.opener[sFunc](sPopId, sRtn);
				}
			}

			pOwncerCF.form.close();
		}
	}
	else
	{
		return pOwncerCF.form.close(sRtn);
	}
};

/**
 * @desc	팝업창에서 부모창으로 설정한 값을 json 형태로 전달한다.
 *			파라미터의 타입에 따라 key:value, dataset:dataset 형태로 전달
 * @param {object} arguments		- 리턴용 값
 * @return {String} 리턴용으로 정제된 json string
 */
pForm.gfnSetPopupReturn = function(oRtn)
{
	if ( this.gfnIsNull(oRtn) ) return oRtn;

	for ( var p in oRtn ) 
	{
		if ( this.gfnTypeof(oRtn[p]) == "dataset" ) 
		{
			oRtn[p] = oRtn[p].saveXML();
		}
	}
	return JSON.stringify(oRtn);
};

/**
 * @desc	팝업창에서 부모창으로 설정한 값을 json 형태로 전달 받는다.
 *			파라미터의 타입에 따라 key:value, dataset:dataset 형태로 전달
 * @param {object} objForm			- 화면 Form
 * @param {object} sRtn				- 리턴용 값
 * @return {object} 리턴값
 */
pForm.gfnGetPopupRetun = function(objForm, oRtn)
{
	if ( this.gfnIsNull(oRtn) ) return oRtn;

	oRtn = JSON.parse(oRtn);

	for ( var p in oRtn ) 
	{
		if ( String(oRtn[p]).indexOf("<Dataset id=") > -1 ) 
		{
			var oTempDs = new Dataset();
			oTempDs.loadXML(oRtn[p]);
			oRtn[p] = oTempDs;
		}
	}
	return oRtn;
};

/**
 * @class 시스템용 팝업 호출(개발자 사용불가 - 권한팝업(gfnShowPopup) 사용)
    - 공통팝업 사용하지 않고 팝업화면 바로 연결
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sPopupId			- unique 팝업 id
 * @param {String} sPopupUrl		- 팝업화면 URL ( "Frame_Popup::comDebugPop.xfdl" )
 * @param {object} objArgs			- 팝업창에 전달될 파라미터 값 {key:'value'}, 개발자의 key 명의 preFix 는 "pv" 를 사용토록 한다.
 *									  공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
 * @param {String} sCallbackFunc	- 팝업 콜백함수(objForm의 함수명 or 함수)
 * @param {object} oOption			- 팝업 창의 오픈시 옵션 설정 {key:'value'}										
										- showtitlebar : true / false (default)
										- titletext : showtitlebar(ture)일때만 사용가능
										- modal  	: true (default) / false
										- resizable : true / false (default)
										- left   	: 팝업 left
										- top    	: 팝업 top
										- width  	: 팝업 width(modal:false시 필수)
										- height 	: 팝업 height(modal:false시 필수)
 * @return 팝업에서 gfnSetPopupReturn 사용 / 콜백함수에서 gfnGetPopupRetun 사용
 */
pForm.gfnShowPopupForSysOnly = function(objForm, sPopupId, sPopupUrl, objArgs, sCallbackFunc, oOption)
{	
	// 필수항목체크(Form오브젝트,팝업ID)
	if(this.gfnIsNull(objForm) || this.gfnIsNull(sPopupId) || this.gfnIsNull(sPopupUrl) )
	{
		trace("gfnShowPopupForSysOnly 함수의 인자값이 부족합니다.");
		return false;
	}

    var objApp = nexacro.getApplication();
	
	var nLeft 		= -1;
	var nTop 		= -1;
	var nWidth 		= -1;
	var nHeight 	= -1;
	var bShowTitleBar  = false;
	var sModal 		= true;
	var bAutoSize 	= false;
	var bResizable 	= false;
	var sTitleText = "";
	var sOverlaycolor = "";
	
	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) 
	   {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "modal":
					if (""+oOption[key] == "false")	sModal = false;
					break;
				case "resizable":
					if (""+oOption[key] == "true")	bResizable = true;	
					break;
				case "showtitlebar":
					if (""+oOption[key] == "true")	bShowTitleBar = true;
					break;
				case "titletext":
					sTitleText = oOption[key];
					break;
				case "overlaycolor":
					sOverlaycolor = oOption[key];	
					break;					
			}	
        }
    }
	
	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1) 
	{
		sOpenalign = "center middle";
		var curX, curY;
		if (system.navigatorname == "nexacro") 
		{
 			curX = objApp.mainframe.left;
 			curY = objApp.mainframe.top;
		}
		else
		{
			curX = window.screenLeft;
			curY = window.screenTop;
		}
		
        nLeft   =  curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	else
	{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop    =  this.getOffsetTop() + nTop;
	}
	
	if(nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}
	
	//팝업 파라메타
	if(this.gfnIsNull(objArgs) == true) objArgs = {};
	
	//공통 파라메타
	objArgs.cvPopupId   = sPopupId;
    objArgs.cvPopupUrl 	= sPopupUrl;
	objArgs.cvTitletext = sTitleText;
	objArgs.cvCallback 	= sCallbackFunc;		//callback 함수
	objArgs.cvSrcPopup 	= "Y";
	objArgs.cvOpenType 	= "PopupForm";
	objArgs.cvMnuId 	= "";
	
	var objParentFrame = objForm.getOwnerFrame();	
    if(sModal == false)	//modeless
    {
        objArgs.cvModeless = "Y";
        var sOpenStyle = "autosize=" + bAutoSize + " showtitlebar=" + bShowTitleBar + " titletext=" + sTitleText + " resizable=" + bResizable;
		               //+ "showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true";
		var sExtOpenStyle = "location=false menubar=false toolbar=false";	//IE11 웹브라우저 환경에서만 지원

		this.gfnClearArgument(objForm.getOwnerFrame());
		this.gfnSetArgument(objForm.getOwnerFrame(), objArgs);
		
		var arrPopFrame = nexacro.getPopupFrames(this.getOwnerFrame());
		if (arrPopFrame[sPopupId]) 
		{
			if (system.navigatorname == "nexacro") 
			{
				arrPopFrame[sPopupId].setFocus();
			} 
			else 
			{	
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
			
			// 이미 열려 있는 경우 fnParamInit 함수 호출
			this.gfnClearArgument(objForm.getOwnerFrame());
			this.gfnSetArgument(objForm.getOwnerFrame(), objArgs);
			if(!arrPopFrame[sPopupId].form.gfnIsNull(arrPopFrame[sPopupId].form["fnParamInit"]))
			{
				arrPopFrame[sPopupId].form.fnParamInit();
			}					
		}
		else 
		{
			var bSucc = nexacro.open(sPopupId,sPopupUrl,objParentFrame,objArgs,sOpenStyle,nLeft, nTop, nWidth, nHeight, objForm, sExtOpenStyle);
		}
    }
    else	//modal
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sPopupUrl);
		var nIndex = newChild.addEventHandler( "onmove", pForm._gfnPopup_onmove, objForm);
		
		newChild.set_dragmovetype("all");
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitleicon(false);
		//trace("bShowTitleBar==="+bShowTitleBar + "::::::::::sTitleText==="+sTitleText);
		newChild.set_showtitlebar(bShowTitleBar); 
		if (bShowTitleBar)		newChild.set_titlebarheight(40);	// titlebar높이
		newChild.set_showstatusbar(false);
		newChild.set_titletext(sTitleText);
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);    		//resizable 안됨
		newChild.set_openalign(sOpenalign);			// openalign 속성이 지정되면 position이 먹지않는다.
		if(!this.gfnIsNull(sOverlaycolor)) newChild.set_overlaycolor(sOverlaycolor);
		
		this.gfnClearArgument(newChild);
		this.gfnSetArgument(newChild, objArgs);
		
		if ( typeof(sCallbackFunc) == "function" ) 
		{
			newChild.showModal(sPopupId, objParentFrame, objArgs, objForm, sCallbackFunc);
		} 
		else 
		{
			newChild.showModal(sPopupId, objParentFrame, objArgs, objForm, objForm[sCallbackFunc]);
		}
    }
};

/**
 * @description Modal 팝업화면에서 화면이 Application에서 숨김방지
*/
pForm._gfnPopup_onmove = function(obj, e)
{
	//trace("e.y==="+e.y);
	if ( e.y < 0 )	obj.move( e.x, 0);
};