(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comReportPop");
            this.set_titletext("Report (Modeless) 공통팝업폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcPopTitle","18","7","310","30",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_text("Report");
            obj.set_cssclass("sta_POP_Title");
            obj.set_fittocontents("width");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnPopClose",null,"0","45","45","0",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divContents","25","70",null,null,"25","82",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbsReport","0","0",null,null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnOk","44.71%",null,"75","32",null,"25",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide01","0","45","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide02","0","70","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide04","290",null,"290","25",null,"57",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide03",null,"70","25","205","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide05","290",null,"290","25",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",930,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comReportPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comReportPop Form
        * FILE NAME     : comReportPop.xfdl
        * DESCRIPTION   : Report (Modeless) 공통팝업폼
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.15    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvAuth	= {};				// 화면의 권한정보

        // 참고용
        this.fvPopupUrl  = "";			// xxxx.xfdl
        this.fvTitletext  = "";			// 타이틀
        this.fvCallback  = "";			// callback 함수명
        this.fvSrcPopup  = "";			// Y / N
        this.FvOpenType  = "";			// PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        this.fvMnuId  = "";				// 메뉴ID
        this.fvModeless  = "";			// Y / N

        this.fvUrl = "";				// Report Url
        this.fvParam = "";				// Report Param


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// TODO
        };

        /**
         * @description Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면
         *              gfnSetFormInit 를 통해 공통 초기화 작업이 수행된다.
         *              콜백함수명을 지정하여 해당 함수에서 개발자의 초기작업 코드를 기술한다.
         */
        this.form_onload = function(obj,e)
        {
        	// Load 후 초기화설정 및 Data Setting
        	// this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        	this.fnFormInit(obj);
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	//trace("[samplePopupSub01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 전달된 Parameter 개별로 받기 (참고용)
        	try
        	{
        		this.fvPopupUrl  	= this.getOwnerFrame().arguments["cvPopupUrl"];
        		this.fvTitletext  	= this.getOwnerFrame().arguments["cvTitletext"];
        		this.fvCallback  	= this.getOwnerFrame().arguments["cvCallback"];
        		this.fvSrcPopup  	= this.getOwnerFrame().arguments["cvSrcPopup"];
        		this.FvOpenType  	= this.getOwnerFrame().arguments["cvOpenType"];
        		this.fvMnuId  		= this.getOwnerFrame().arguments["cvMnuId"];
        		this.fvModeless  	= this.getOwnerFrame().arguments["cvModeless"];
        	}
        	catch (e)
        	{
        		this.fvPopupUrl  	= this.parent.cvPopupUrl;
        		this.fvTitletext  	= this.parent.cvTitletext;
        		this.fvCallback  	= this.parent.cvCallback;
        		this.fvSrcPopup  	= this.parent.cvSrcPopup;
        		this.FvOpenType  	= this.parent.cvOpenType;
        		this.fvMnuId  		= this.parent.cvMnuId;
        		this.fvModeless  	= this.parent.cvModeless;
        	}

        	trace("[Report (Modeless) 공통팝업폼]=========================================");
        	trace("this.fvPopupUrl:"+this.fvPopupUrl);
        	trace("this.fvTitletext:"+this.fvTitletext);
        	trace("this.fvCallback:"+this.fvCallback);
        	trace("this.fvSrcPopup:"+this.fvSrcPopup);
        	trace("this.FvOpenType:"+this.FvOpenType);
        	trace("this.fvMnuId:"+this.fvMnuId);
        	trace("this.fvModeless:"+this.fvModeless);

        	//1. 2)전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
        	//     gfnShowPopup() 호출시 5번째 인자(objArgs) Argument 에 값을 받음
        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	//2. Parameter 참조
        	this.fvUrl = this.gfnGetParameter(objFormFrame, "pvUrl");
        	this.fvParam = this.gfnGetParameter(objFormFrame, "pvParam");

        	// 타이틀 변경
        	if(!this.gfnIsNull(this.fvTitletext))
        	{
        		this.divTitle.form.stcPopTitle.set_text(this.fvTitletext);
        		this.divTitle.form.resetScroll();

        		// Modeless 이면서 웹브라우져이면
        		if(this.getOwnerFrame().cvModeless == "Y" && system.navigatorname.toUpperCase().indexOf("NEXACRO") < 0)
        		{
        			window.document.title = this.fvTitletext;
        		}
        	}

        	// 리포트 호출
        	this.fnWebBrowserSendPost(this.divContents.form,this.divContents.form.wbsReport, this.fvUrl, this.fvParam);

        	this.btnOk.setFocus();
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc webBrowser 연결
         * @param {object} objForm 대상 폼 object
         * @param {object} objWb 대상 webBrowser object
         * @param {string} sUrl 연결 url
         * @param {string} sParam 전달 param
         * @return N/A
        */
        this.fnWebBrowserSendPost = function(objForm, objWb, sUrl, sParam)
        {
        	if(system.navigatorname.toUpperCase() == "NEXACRO") // runtime
        	{
        		var str="";
        		str +='<html>                                                                                                                            ';
        		str +='<title>                                                                                                                           ';
        		str +='</title>                                                                                                                          ';
        		str +='<head>                                                                                                                            ';
        		str +='<meta charset="UTF-8">                                                                                                            ';
        		str +='</head>                                                                                                                           ';
        		str +='<body>                                                                                                                            ';
        		str +='<form id="postform" name="postform" action="'+sUrl+'" method="post" accept-charset="utf-8">										 ';

        		var arr = sParam.split(/&/g);
        		var sHtml;
        		var sValue = "";
        		var arrVal = "";
        		var arr2 = "";
        		for(var i = 0; i < arr.length; i++)
        		{
        			sValue = "";
        			arrVal = "";
        			arr2 = arr[i].split("=");

        			for(var j = 1; j < arr2.length; j++)
        			{
        				if(j == 1)
        				arrVal += arr2[j];
        				else
        				arrVal += "=" + arr2[j];
        			}
        			if(arrVal.length > 0)
        			{
        				sValue = arrVal;
        			}
        			else
        			{
        				sValue = arr2[1];
        			}
        			if(arr2[0] && arr2[0].length > 0)
        			{
        				str +='	<input type="hidden" id="'+arr2[0]+'" name="'+arr2[0]+'" value="'+sValue+'">                                                                       ';
        			}
        		}

        		str +='</form>                                                                                                                           ';
        		str +='<script type="text/javascript">                                                                                                   ';
        		str +='	document.title = "report";                                                                                                       ';
        		str +='	document.postform.submit();                                                                                                      ';
        		str +='</script>                                                                                                                         ';
        		str +='</body>                                                                                                                           ';
        		str +='</html>                                                                                                                           ';

        		objWb.getProperty("document").callMethod("Write", str);
        		objWb.getProperty("document").callMethod("Close");
        		return;
        	}
        	else if(system.navigatorname.toUpperCase() == "IE" && system.navigatorversion <= 8)  //IE8
        	{
        		objWb.set_url(sUrl + "?" + sParam);
        		return;
        	}
        	else
        	{
        		// html5
        		// add new webbrowser component to initialize web page.

        		var nL = objWb.left;
        		var nT = objWb.top;
        		var nW = objWb.width;
        		var nH = objWb.height;
        		var nR = objWb.right;
        		var nB = objWb.bottom;
        		var sName = objWb.name;

        		objForm.removeChild(objWb.name);
        		objWb.destroy();
        		objWb = null;

        		objWb = new WebBrowser();
        		objWb.init(sName, nL, nT, nW, nH, nR, nB);
        		objForm.addChild(sName, objWb);
        		objWb.show();

        		var iframeObj = document.getElementById(objWb._ifrm_elem._object_id);
        		var iFrameDoc;
        		var iFrameBody;
        		if ( iframeObj.contentDocument )
        		{
        			iFrameDoc = iframeObj.contentDocument;
        			iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        		}
        		else if ( iframeObj.contentWindow )
        		{
        			iFrameDoc = iframeObj.contentWindow.document;
        			iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        		}

        		if(!iFrameBody)
        		{
        			iFrameBody = iFrameDoc.createElement("body");
        			iFrameDoc.appendChild(iFrameBody);
        		}

        		var form = iFrameDoc.createElement("form");
        		form.id = "postform";
        		form.name = "postform";
        		form.action = sUrl;
        		form.method = "post";
        		iFrameBody.appendChild(form);

        		var arr = sParam.split(/&/g);
        		var sHtml;
        		var sValue = "";
        		var arrVal = "";
        		var arr2 = "";
        		for(var i = 0; i < arr.length; i++)
        		{
        			Value = "";
        			arrVal = "";
        			arr2 = arr[i].split("=");

        			for(var j = 1; j < arr2.length; j++)
        			{
        				if(j == 1)
        				arrVal += arr2[j];
        				else
        				arrVal += "=" + arr2[j];
        			}

        			if(arrVal.length > 0)
        			{
        				sValue = arrVal;
        			}
        			else
        			{
        				sValue = arr2[1];
        			}

        			if(arr2[0] && arr2[0].length > 0)
        			{
        				var input = iFrameDoc.createElement("input");
        				input.id 	= arr2[0];
        				input.name 	= arr2[0];
        				input.type 	= "hidden";
        				input.value	= sValue;
        				form.appendChild(input);
        			}
        		}

        		try
        		{
        			var script = iFrameDoc.createElement('script');
        			script.type = 'text/javascript';
        			script.charset = 'utf-8';
        			script.defer = true;
        			script.async = true;
        			script.onload = function () {
        			}
        			var sDomain = "document.domain = \"" + document.domain + "\";";
        			script.text = [sDomain].join('');
        			iFrameBody.appendChild(script);
        		}
        		catch (e)
        		{

        		}

        		if(iFrameDoc.getElementById('postform'))
        		{
        			iFrameDoc.getElementById('postform').submit();
        		}
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "X" 버튼 클릭
        */
        this.divTitle_btnPopClose_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description "확인" 버튼 클릭
        */
        this.btnOk_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({pvRtnValue:"OK"});
        	this.gfnPopupClose(this, strRtn);
        };

        /**
         * @description WebBrowser 에 웹페이지가 로딩 되었을 때 발생
        */
        this.divContents_wbsReport_onloadcompleted = function(obj,e)
        {
        	trace("[divContents_wbsReport_onloadcompleted]");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTitle.form.btnPopClose.addEventHandler("onclick",this.divTitle_btnPopClose_onclick,this);
            this.divContents.form.wbsReport.addEventHandler("onloadcompleted",this.divContents_wbsReport_onloadcompleted,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("comReportPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
