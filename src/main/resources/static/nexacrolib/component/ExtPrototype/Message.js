/**
*  @FileName 	Message.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.23
*  @Desction   	Message 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.23     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnShowMessage 						: 메세지 코드에 따른 실제 메세지값을 화면으로 보여줌
 * gfnShowToast							: 메세지 코드에 따른 실제 메세지값을 Toast팝업으로 보여줌
 * gfnGetMessage  		    			: gdsMessage에서 일치하는 메시지를 찾아서 반환한다.
 
 **************************************************************************/
 

/**
 * @desc	메세지 코드에 따른 실제 메세지값을 화면으로 보여줌  (alert, confirm)
 * 			gdsMessage에서 sMsgCode을 검색해서 존재하면 처리한다.
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sMsgCode			- sMsgCode 	메시지 code 또는 메세지 포맷
 *										sMsgcode [I, S, E, W : Alert / Q : Confirm] 
 * @param {Array} arrParam			- 메시지 포맷에서 치환되는 파라미터 배열
 * @param {String} sPopupCallback	- 메세지 팝업 후 callback 함수
 * @param {String} sPopupId			- 메세지 팝업의 popup ID & Callback 시 Id
 * @param {object} oArgs			- 팝업용 추가 정보값
 *									  [pvParam1 : 버튼1text^리턴받을 버튼value , pvParam2 : 버튼2text^리턴받을 버튼value , pvParam3 : 버튼3text^리턴받을 버튼value]
 *									  [pvSec : toast 유지시간(millisecond)]
 *									  [hAlign:"center",vAlign:"middle"]							
 * @return 메세지창의 리턴 값
 */
pForm.gfnShowMessage = function(objForm, sMsgCode, arrParam, sPopupCallback, sPopupId, oArgs) 
{
	var objData;
	var sMsgType;
	var sTempParam = this.gfnIsNull(arrParam) ? "" : (arrParam.toString()).split(",");
	var sText = "";
	if(this.gfnIsNull(oArgs)) oArgs = "";
	var nLeft = (this.gfnIsNull(oArgs.left))?-1:oArgs.left;
	var nTop = (this.gfnIsNull(oArgs.top))?-1:oArgs.top;
	var sHAlign = (this.gfnIsNull(oArgs.hAlign))?"center":oArgs.hAlign;	// 'left' | 'center' (default) | 'right'
	var sVAlign = (this.gfnIsNull(oArgs.vAlign))?"middle":oArgs.vAlign;	// 'top' | 'middle' (default) | 'bottom'
	
	if(this.gfnIsNull(sPopupId)) 
	{
		sPopupId = this.gfnGetUniqueId("pFrame", "_");  // sPopupId 안넘겨줄때
	}	
	
	if (this.gfnIsNull(objForm.fvEnv))
	{
		objForm.fvEnv = nexacro.getEnvironment();
	}

	if (this.gfnIsNull(objForm.fvApp))
	{
		objForm.fvApp = nexacro.getApplication();
	}
	
	if(this.gfnIsArray(sMsgCode)) 
	{
		var msgCode = sMsgCode[0].toLowerCase();
		if (msgCode=="alert" || msgCode=="confirm" || msgCode=="toast") 
		{
			sText = this.gfnGetMessage(sMsgCode[1], sTempParam);
			objData = {MESSAGE:sText, DETAIL_MESSAGE:""};
	
			if (msgCode =="confirm")
			{
				sMsgType = "C";
			}
			else if (msgCode =="toast")
			{
				sMsgType = "T";
			}
			else if (msgCode =="alert")
			{
				sMsgType =sMsgCode[0].substr(0,1);
			}
		}
		else 
		{
			// 배열이면 메세지 코드는 첫번째.  예)"E000001,오류 상세메세지"
			sText = this.gfnGetMessage(sMsgCode[0], sTempParam);
			objData = {MESSAGE:sText, DETAIL_MESSAGE:sMsgCode[1]};
			sMsgCode = sMsgCode[0];
		}
	} 
	else 
	{
		sText = this.gfnGetMessage(sMsgCode, sTempParam);
		objData = {MESSAGE:sText, DETAIL_MESSAGE:""};
	}
	
	sMsgType = this.gfnIsNull(sMsgType)?sMsgCode.substr(0,1):sMsgType;
	var sMsgUrl = "Frame_Popup::comAlertPop.xfdl";
	if (sMsgType=="C") sMsgUrl = "Frame_Popup::comConfirmPop.xfdl";
	if (sMsgType=="T") sMsgUrl = "Frame_Popup::comToastPop.xfdl";
	
    objData	= this.gfnSetDefaults(objData, {showtitlebar:false, autosize:true, resizable:false, showstatusbar:false} );
	objData.MESSAGE_TYPE = sMsgType;
	if (!this.gfnIsNull(oArgs)) 
	{
		objData.PARAM1 = oArgs.pvParam1;
		objData.PARAM2 = oArgs.pvParam2;
		objData.PARAM3 = oArgs.pvParam3;
		objData.sec = oArgs.pvSec;
	}
	
	var nWidth = 370;//360;
	var nHeight = 215;//240;
	if (sMsgType=="T") nHeight = 110;//125;
	
	// Popup 노출위치 미지정건
	if(nLeft == -1 && nTop == -1)
	{
		sOpenalign = sHAlign +" "+sVAlign;			// left : -1 , top : -1 일때 좌표지정이 안된 경우는 center middle 처리
		
		var curX	= 0;	// 좌측 기준좌표
		var curY	= 0;	// 상단 기준좌표 
		if (system.navigatorname == "nexacro")				// Runtime
		{
			curX = objForm.fvApp.mainframe.left;	// 좌측 기준좌표를 mainframe의 좌측좌표로 설정
			curY = objForm.fvApp.mainframe.top;	// 상단 기준좌표를 mainframe의 상단좌표로 설정
		}
		else								// HTML5
		{
			curX = window.screenLeft;		// 좌측 기준좌표를 window(브라우저의 screen영역)의 좌측좌표로 설정
			curY = window.screenTop;		// 상단 기준좌표를 window(브라우저의 screen영역)의 상단좌표로 설정
		}
		
        nLeft   =  curX + (objForm.fvApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (objForm.fvApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	// Popup 노출위치 지정건
	else
	{
		nLeft   =  objForm.getOffsetLeft() + nLeft;	// Form영역포함 좌측좌표 적용
		nTop   =  objForm.getOffsetTop() + nTop;	// Form영역포함 상단좌표 적용
	}	
	
	// 동일명의 팝업이 있을 경우 팝업처리 중단
	var arrPopFrame = nexacro.getPopupFrames();
	if(arrPopFrame[sPopupId])
	{
		trace("동일명의 팝업이 있을 경우 팝업처리 중단=============");
		return;
	}
	
	// var newChild = new ChildFrame(sPopupId, 0, 0, nWidth, nHeight);  // 공통 Alert/confirm 화면
	var newChild = new ChildFrame(sPopupId, nLeft, nTop, nWidth, nHeight);  // 공통 Alert/confirm 화면
	
	newChild.set_formurl(sMsgUrl);
	newChild.set_layered(false);
	newChild.set_showtitlebar(objData.showtitlebar);
	newChild.set_autosize(objData.autosize);
	newChild.set_resizable(objData.resizable);
	newChild.set_showstatusbar(objData.showstatusbar);
	// newChild.set_openalign("center middle");   // 가운데로 띄운다.
	newChild.set_openalign(sOpenalign);				// ChildFrame 을 팝업창으로 표시할 때 위치를 지정하는 속성
	
	newChild.set_dragmovetype("all");
	//newChild.set_overlaycolor("transparent");  //alert창 뒷 배경 흐리지 않게 처리
	
	newChild.showModal(sPopupId, objForm.getOwnerFrame(), objData,  objForm, function(sPopupId, variant) {
		var rtnVariant = this.gfnIsNull(this._variant) ? variant : this._variant;
		this._variant = "";
		
		if(typeof(sPopupCallback) == "function" ) 
		{
			sPopupCallback.call(objForm, sPopupId, rtnVariant);
		} 
		else	// 문자열이면
		{                         			
			if(!this.gfnIsNull(sPopupCallback) && !this.gfnIsNull(objForm[sPopupCallback])) 
			{
				objForm[sPopupCallback].call(objForm, sPopupId, rtnVariant);
			}
		}
	});
};

/**
 * @desc	메세지 코드에 따른 실제 메세지값을 Toast팝업으로 보여줌
 * 			gdsMessage에서 sMsgCode을 검색해서 존재하면 처리한다.
 * @param {object} objForm			- 호출한 화면 Form
 * @param {String} sMsgCode			- sMsgCode 	메시지 code 또는 메세지 포맷
 * @param {Array} arrParam			- 메시지 포맷에서 치환되는 파라미터 배열
 * @param {String} sPopupCallback	- 메세지 팝업 후 callback 함수
 * @param {String} sPopupId			- 메세지 팝업의 popup ID & Callback 시 Id
 * @param {object} oArgs			- 팝업용 추가 정보값
 *									  [pvSec : toast 유지시간]
 *									  [hAlign:"",vAlign:""]
 * @return 메세지창의 리턴 값
 */
pForm.gfnShowToast = function(objForm, sMsgCode, arrParam, sPopupCallback, sPopupId, oArgs) 
{
	if(!this.gfnIsArray(sMsgCode)) 
	{
		sMsgCode = ["toast",sMsgCode];
	}
	this.gfnShowMessage(objForm, sMsgCode, arrParam, sPopupCallback, sPopupId, oArgs);
};

/**
 * @desc	gdsMessage에서 일치하는 메시지를 찾아서 반환한다.
 * 			메세지코드가 없는 경우 메시지ID를 메시지 텍스트로 반환함
 * @param {String} sFormat			- 메시지포맷 or 메시지ID
 * @return 변환 결과 메시지
 */
pForm.gfnGetMessage = function(sFormat) 
{		
	var params = [];
	var arrParam = [];

	for( var i = 0; i < arguments.length; i++ ) 
	{
		if( arguments[i] instanceof Array) 
		{
			for(var j = 0; j < arguments[i].length; j++ )
			{
				params.push(this.gfnNvl(arguments[i][j]));
			}
		} 
		else 
		{
			params.push(this.gfnNvl(arguments[i]));
		}	
	}

	sFormat = new String(params.shift());
	var strText = sFormat;
	try 
	{
		strText = this.gfnNvl(nexacro.getApplication().gdsMessage.lookup("errMsgCd", sFormat, "errMsgNm"), sFormat);
	} 
	catch(err) 
	{
	}

	for( var i = 0; i < params.length; i++ ) 
	{	
		try 
		{
		    sFormat = params[i];
			arrParam.push(this.gfnNvl(nexacro.getApplication().gdsMessage.lookup("errMsgCd", sFormat, "errMsgNm"), sFormat));
		} 
		catch(err) 
		{
		}
	}
	return this.gfnFormat(strText, arrParam);
};