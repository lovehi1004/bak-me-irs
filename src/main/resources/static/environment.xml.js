if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::IRS");
        this.set_datatyperule("2.0");
        this.set_icon("url(\'theme::IRS/images/titlebar_icon.ico\')");
        this.set_loadingimage("url(\'theme://images/loadingimage.gif\')");
        this.set_filesecurelevel("all");
        this.set_key("IRS");
        this.set_tracemode("new");
        this.set_networksecurelevel("all");
        this.set_userfontid("font::IRS_UserFont.xfont");
        this.set_enableaccessibility("true");
        this.set_locale("ko_KR");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
        this.addEventHandler("onuserhotkey",this.Environment_onuserhotkey,this);
        this.addEventHandler("onload",this.Environment_onload,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "http://127.0.0.1:8081", "none", null, "", "0", "0");
        nexacro._addService("license", "file", "./license/", "none", null, "", "0", "0");
        nexacro._addService("thirdParty", "file", "./thirdParty/", "none", null, "", "0", "0");
        nexacro._addService("ExtPrototype", "js", "./nexacrolib/component/ExtPrototype/", "none", null, "", "0", "0");
        nexacro._addService("raonkupload", "file", "./nexacrolib/component/raonkupload/", "none", null, "", "0", "0");
        nexacro._addService("Frame_Lib", "js", "./Frame/Lib/", "none", null, "", "0", "0");
        nexacro._addService("Frame_Common", "form", "./Frame/Common/", "none", null, "", "0", "0");
        nexacro._addService("Frame_Popup", "form", "./Frame/Popup/", "none", null, "", "0", "0");
        nexacro._addService("Frame_Main", "form", "./Frame/Main/", "none", null, "", "0", "0");
        nexacro._addService("Frame_Widget", "form", "./Frame/Widget/", "none", null, "", "0", "0");
        nexacro._addService("Develop_Sample", "form", "./Develop/Sample/", "none", null, "", "0", "0");
        nexacro._addService("Develop_Test", "form", "./Develop/Test/", "none", null, "", "0", "0");
        nexacro._addService("Develop_DesignGuide", "form", "./Develop/DesignGuide/", "none", null, "", "0", "0");
        nexacro._addService("Develop_DesignTemplate", "form", "./Develop/DesignTemplate/", "none", null, "", "0", "0");
        nexacro._addService("Publish", "form", "./Publish/", "none", null, "", "0", "0");
        nexacro._addService("Biz_Lib", "js", "./Biz/Lib/", "none", null, "", "0", "0");
        nexacro._addService("Biz_Common", "form", "./Biz/Common/", "none", null, "", "0", "0");
        nexacro._addService("Biz_Popup", "form", "./Biz/Popup/", "none", null, "", "0", "0");
        nexacro._addService("Biz_agrstipl", "form", "./Biz/agrstipl/", "none", null, "", "0", "0");
        nexacro._addService("Biz_biz", "form", "./Biz/biz/", "none", null, "", "0", "0");
        nexacro._addService("Biz_cnsltngrp", "form", "./Biz/cnsltngrp/", "none", null, "", "0", "0");
        nexacro._addService("Biz_info", "form", "./Biz/info/", "none", null, "", "0", "0");
        nexacro._addService("Biz_inforls", "form", "./Biz/inforls/", "none", null, "", "0", "0");
        nexacro._addService("Biz_mhdlg", "form", "./Biz/mhdlg/", "none", null, "", "0", "0");
        nexacro._addService("Biz_prfmnc", "form", "./Biz/prfmnc/", "none", null, "", "0", "0");
        nexacro._addService("Biz_stats", "form", "./Biz/stats/", "none", null, "", "0", "0");
        nexacro._addService("Biz_user", "form", "./Biz/user/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"Graphics", "classname":"nexacro.Graphics", "type":"JavaScript"},
        		{"id":"RaonkUpload", "classname":"nexacro.RaonkUpload", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evQuickView", "Y");
        nexacro.setEnvironmentVariable("evSvrType", "LOCAL");
        nexacro.setEnvironmentVariable("evParams", "");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script
    env.registerScript("environment.xml", function() {
    /***********************************************************************************
    * SERVICE GROUP :
    * BUSINESS      : Environment
    * FILE NAME     : Environment.xml
    * DESCRIPTION   : Environment
    *------------------------------------------------------------------
    * MODIFY DATE   PROGRAMMER	     DESCRIPTION
    *------------------------------------------------------------------
    * 2023.08.21    TOBESOFT	     최초생성
    ***********************************************************************************/


    /***********************************************************************************
    * Environment 변수 선언 영역
    ***********************************************************************************/

    this.evRealTrace 		= trace;


    /***********************************************************************************
    * Environment EVENT 선언 영역
    ***********************************************************************************/

    /**
     * @desc 	nexacro 엔진이 로드된 후 발생하는 이벤트입니다
     * @param {object} obj				- Environment
     * @param {LoadEventInfo} e			- e 이벤트
     * @return N/A
    */
    this.Environment_onload = function(obj,e)
    {
    	trace("[this.Environment_onload]============================================================================");
    	var objApp = nexacro.getApplication();

    	// 팝업등으로 새로이 창이 뜰때
    	if(objApp.gvSvrType != "" && objApp.gvSvrType != "undefined" && objApp.gvSvrType != undefined)
    	{
    		trace("새로이 창이 뜨는 경우 svcUrl 재설정처리");
    		var sProjectPath = nexacro.getProjectPath();				// 애플리케이션의 실행 경로 , file::// , http...
    		this.evServiceUrl = sProjectPath.split("/")[0] + "//" +  sProjectPath.split("/")[2];
    		trace("this.evServiceUrl:"+this.evServiceUrl);
    		// Service URL 설정
    		var sMsg1 = this.gfnEnvSetConfigUrl("SERVICE", objApp.gvSvrType, this.evServiceUrl);
    		trace(sMsg1);

    		// trace 로그 남길지 여부
    		this.gfnEnvSetTraceLog(objApp.Tran.bTraceLog);
    	}
    };

    /**
     * @desc Service URL 설정
     * @param {String}		sDiv		- 대상 구분 (SERVICE, FILE, EXCEL, REPORT)
     * @param {String}		sSvrType	- 실행환경 구분 (LOCAL , DEV , REAL)
     * @param {String}		sServiceUrl	- 애플리케이션의 실행 경로 (ex. http://127.0.0.1:4098 )
     * @return {String}		처리결과 msg
    */
    this.gfnEnvSetConfigUrl = function(sDiv, sSvrType, sServiceUrl)
    {
    	trace("[gfnEnvSetConfigUrl]sDiv:"+sDiv+"|sSvrType:"+sSvrType+"|sServiceUrl:"+sServiceUrl);

    	var sMsg = "";
    	var cvInfo;

    	trace("gfnEnvSetConfigUrl > 시작 this.services[svcUrl].url:"+this.services["svcUrl"].url);
    	if ( sDiv == "SERVICE" )
    	{
    		cvInfo = nexacro.getApplication().Tran;
    		cvInfo.webUrl  = String(cvInfo["webUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["webUrlInfo"][sSvrType] : sServiceUrl + cvInfo["webUrlInfo"][sSvrType];
    		cvInfo.fwUrl   = String(cvInfo["fwUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fwUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fwUrlInfo"][sSvrType];

    		var objServiceCommon = nexacro.getEnvironment().services["svcUrl"];
    		objServiceCommon.url = cvInfo.fwUrl;

    		cvInfo.nDataType  = cvInfo.DataType[sSvrType];;

    		sMsg = "\n Service Prefix"
    			 + "\n      " + objServiceCommon.prefixid + " = " + objServiceCommon.url
    			 + "\n      webUrl  = " + cvInfo.webUrl
    			 + "\n      fwUrl  = " + cvInfo.fwUrl
    			 + "\n      nDataType  = " + cvInfo.nDataType;
    	}
    	else if ( sDiv == "FILE" )
    	{
    		cvInfo = nexacro.getApplication().File;
    		cvInfo.fileUpLoadUrl    = String(cvInfo["fileUpLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileUpLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileUpLoadUrlInfo"][sSvrType];
    		cvInfo.fileDownLoadUrl  = String(cvInfo["fileDownLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileDownLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileDownLoadUrlInfo"][sSvrType];

    		sMsg = "\n File Up/DownLoad 정보 설정"
    			 + "\n      fileUpLoadUrl  = "  + cvInfo.fileUpLoadUrl
    			 + "\n      fileDownLoadUrl = " + cvInfo.fileDownLoadUrl;
    	}
    	else if ( sDiv == "EXCEL" )
    	{
    		cvInfo = nexacro.getApplication().ExcelInfo;

    		cvInfo.excelImportUrl  = String(cvInfo["excelImportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["excelImportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["excelImportUrlInfo"][sSvrType];
    		cvInfo.excelExportUrl  = String(cvInfo["excelExportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["excelExportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["excelExportUrlInfo"][sSvrType];

    		sMsg = "\n Excel Import / Export 정보 설정"
    			 + "\n      excelImportUrl  = "  + cvInfo.excelImportUrl
    			 + "\n      excelExportUrl = " + cvInfo.excelExportUrl;
    	}
    	else if ( sDiv == "REPORT" )
    	{
    		cvInfo = nexacro.getApplication().ReportInfo;

    		cvInfo.reportUrl    = String(cvInfo["reportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["reportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["reportUrlInfo"][sSvrType];

    		sMsg = "\n Report 서버 정보 설정"
    			 + "\n      ReportUrl  = "  + cvInfo.reportUrl;
    	}

    	return sMsg;
    };

    /**
     * @desc	Transaction 과 관련되지 않은 오류가 생기거나 onerror 이벤트가 전파되었을 때 발생하는 이벤트입니다.
     * @param {object} obj				- Environment
     * @param {ErrorEventInfo} e		- e 이벤트
     * @return {Boolean} 		true / false
     */
    this.Environment_onerror = function(obj,e)
    {
    	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Environment_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    	trace("e.errormsg:"+e.errormsg
    	+"\ne.errorobj:"+e.errorobj
    	+"\ne.errortype:"+e.errortype
    	+"\ne.eventid:"+e.eventid
    	+"\ne.locationuri:"+e.locationuri
    	+"\ne.requesturi:"+e.requesturi
    	+"\ne.statuscode:"+e.statuscode);

    	var objForm = e.errorobj;
    	var objApp = nexacro.getApplication();

    	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
    	// return true; 주석시에만 중단됨
    	if (e.statuscode == 10401)
    	{
     		trace("사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리!!!!!");
     		return true;

    		// callback function 인자값 초기화
    		// this.gfnClearCallbackFunc(e.errorobj, e.requesturi);

    		sMsgCode = ["Alert","사용자에 의해 통신이 중지 되었습니다."];
    		this.gfnShowMessage(objForm, sMsgCode, "", "gfnMsgCallback", "environmentOnerror10401");

    		return false;
    	}

    	// 404 , 503 에 대한 커스텀 alert 처리 요청의 건
    	// e.errortype:CommunicationError
    	// e.statuscode:404 , 503
    	else if(e.statuscode == 404)
    	{
    		sMsgCode = ["Alert","페이지의 주소가 잘못 입력되었거나, 페이지 주소의 변경 혹은 삭제로 인해 현재 사용할 수 없습니다.\n입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요"];
    		this.gfnShowMessage(objForm, sMsgCode, "", "gfnMsgCallback", "environmentOnerror404");
    		return false;
    	}
    	else if(e.statuscode == 503)
    	{
    		// callback function 인자값 초기화
    		// this.gfnClearCallbackFunc(e.errorobj, e.requesturi);

    		sMsgCode = ["Alert","일시적으로 요청이 정상 처리되지 않았습니다.\n잠시 후 다시 시도해 주시기 바랍니다."];
    		this.gfnShowMessage(objForm, sMsgCode, "", "gfnMsgCallback", "environmentOnerror503");
    		return false;
    	}
    	else if(e.statuscode == 10499)
    	{
    		// callback function 인자값 초기화
    		// this.gfnClearCallbackFunc(e.errorobj, e.requesturi);

    		sMsgCode = ["Alert","일시적으로 요청이 정상 처리되지 않았습니다.\n잠시 후 다시 시도해 주시기 바랍니다."];
    		this.gfnShowMessage(objForm, sMsgCode, "", "gfnMsgCallback", "environmentOnerror10499");
    		return false;
    	}
    	else
    	{

    	}
    };

    /**
     * @desc	전역 단축키 입력 시 발생하는 이벤트입니다.
     * @param {object} obj				- Environment
     * @param {EnvironmentUserHotkeyEventInfo} e		- e 이벤트
     * @return N/A
     */
    this.Environment_onuserhotkey = function(obj,e)
    {
    	trace("[Environment_onuserhotkey]e.keycode:"+e.keycode);

    };

    /***********************************************************************************
    * Environment Function
    ***********************************************************************************/
    /**
     * @class  메세지 콜백
     * @param  {String} 		sId			- 메세지 ID
     * @param  {String} 		sVal		- 결과값
     * @return N/A
     */
    this.gfnMsgCallback = function(sId,sVal)
    {
    	trace(" sId : " + sId + " sVal : " + sVal);

    	// 서비스ID별 처리
    	switch (sId) {
    		case "environmentOnerror404" :				// statuscode:404
    			return false;
    			break;
    		case "environmentOnerror503" :				// statuscode:503
    			return false;
    			break;
    		case "environmentOnerror10401" :			// statuscode:10401
    			return false;
    			break;
    		default :
    			break;
    	}
    };

    /**
     * @desc trace 로그 재정의하여 trace로그 생성 방지처리
     * @param {String}		bTraceLog	- 체크대상 값 (trace 처리 관련)
     * @return N/A
    */
    this.gfnEnvSetTraceLog = function(bTraceLog)
    {
    	trace("[gfnAdlSetTraceLog]bTraceLog:"+bTraceLog);

    	if (bTraceLog)
    	{
    		trace = this.evRealTrace;
    	}
    	else
    	{
    		trace = function trace(){};
    	}
    };

    // \nexacrolib\component\ExtPrototype > Message.js 반복사용
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
    this.gfnShowMessage = function(objForm, sMsgCode, arrParam, sPopupCallback, sPopupId, oArgs)
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
    			curX = nexacro.getApplication().mainframe.left;	// 좌측 기준좌표를 mainframe의 좌측좌표로 설정
    			curY = nexacro.getApplication().mainframe.top;	// 상단 기준좌표를 mainframe의 상단좌표로 설정
    		}
    		else								// HTML5
    		{
    			curX = window.screenLeft;		// 좌측 기준좌표를 window(브라우저의 screen영역)의 좌측좌표로 설정
    			curY = window.screenTop;		// 상단 기준좌표를 window(브라우저의 screen영역)의 상단좌표로 설정
    		}

            nLeft   =  curX + (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
    	    nTop    = curY + (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2);
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


    // \nexacrolib\component\ExtPrototype > Util.js 반복사용

    /**
     * @desc	값이 존재하는지 여부 체크
     * @param {object} sValue			- 체크값
     * @return {Boolean} 체크결과 true/false
     */
    this.gfnIsNull = function(sValue)
    {
    	if (sValue == null) return true;
    	if (sValue == undefined) return true;
    	if (("x" + sValue == "xNaN") || (sValue == undefined)) return true;
    	if (String(sValue).length == 0) return true;

    	return false;
    };

    this._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];

    /**
     * @desc	유일한 ID 를 반환
     * @param {String} sPrefix			- id 앞에 붙일 문자열
     * @param {String} sSeparator		- id 생성시 구분용 문자(default: '-' ).
     * @return {string} id
     */
    this.gfnGetUniqueId = function(sPrefix, sSeparator)
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
     * @desc	Math.random 대체 함수
     * @param N/A
     * @return {Number} Random 값
     */
    this.gfnMathRandom = function()
    {
    	if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1) // Runtime
    	{
    		return Math.random();
    	}
    	else
    	{
    		return nexacro.toNumber("0." + crypto.getRandomValues(new Uint32Array(1)));
    	}
    };

    /**
     * @desc	배열 여부 확인
     * @param {object} value			- 체크대상
     * @return {Boolean} 체크 결과
     */
    this.gfnIsArray = function(value)
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
     * @desc	gdsMessage에서 일치하는 메시지를 찾아서 반환한다.
     * 			메세지코드가 없는 경우 메시지ID를 메시지 텍스트로 반환함
     * @param {String} sFormat			- 메시지포맷 or 메시지ID
     * @return 변환 결과 메시지
     */
    this.gfnGetMessage = function(sFormat)
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

    /**
     * @desc	문자열에서 포맷된 부분를 파라메타로 치환한다.
     * @param arguments
     * @return {} 변환된 문자열
     */
    this.gfnFormat = function()
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
     * @desc	입력값을 체크하여 Null인경우 지정한 값을 리턴
     * @param {object} inVal			- 넘어온 값
     * @param {String} nullVal			- Null인경우 대치값
     * @return {String} 결과값
     */
    this.gfnNvl = function(inVal, nullVal)
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
     * @desc	문자열의 치완처리
     * @param {String} str1			- 치완대상 문자열
     * @param {String} str2			- 치완 문자열
     * @return {String}  결과
     */
    this.gfnSplitEmpty = function(str1, str2)
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
     * @desc	objArguments중에서 objDefaults의 속성 중에서 정의되지 않은 항목이 있으면 기본 값으로 설정한다.
     * @param {Object} objArguments		- 설정 속성값
     * @param {Object} objDefaults		- 미정의값중 default 처리할 값
     * @return {Object} 정제된 objArguments
     * @example
     *   var options = {modaless:false};
     *   options = this.gfnSetDefaults(options, {modaless:true, showtitle:true} );
     */
    this.gfnSetDefaults = function(objArguments, objDefaults)
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
     * @class  callback function 인자값 초기화
     * @param  {Object} 		objForm			- 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다
     * @param  {String} 		sRequesturi		- 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다
     * @return N/A
     */
    this.gfnClearCallbackFunc = function(objForm,sRequesturi)
    {
    	var sTempNewSvcID = objForm[sRequesturi];
    	trace("[fn_clearCallbackFunc]objForm.id:"+objForm.id+"\nobjForm.name:"+objForm.name+"\nsTempNewSvcID:"+sTempNewSvcID);
    	try
    	{
    		var objTranInfo = nexacro.getApplication().Tran.tranInfo[sTempNewSvcID];
    		trace("[1]objTranInfo.callbackFunc:"+objTranInfo.callbackFunc);
    		objTranInfo.callbackFunc = "";
    		trace("[2]objTranInfo.callbackFunc:"+objTranInfo.callbackFunc);
    	}
    	catch (e)
    	{
    		trace("e.errormsg:"+e.errormsg);
    	}
    };
    });
					
    env = null;
}
