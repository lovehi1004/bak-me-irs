(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleReport");
            this.set_titletext("리포트(클립소프트)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbsReport","20","100",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btnCall","36","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("리포트 호출");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallPopup","195","25","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리포트 호출(팝업)");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","385","23","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리포트파일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCrfPath","562","23","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("/report/sample/sample2.crf");
            obj.set_text("/report/sample/sample2.crf");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","385","63","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자정의서비스구분자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtService","562","63","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("TestReportService");
            obj.set_text("TestReportService");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_01","835","23","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("param1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam01","972","23","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("value1");
            obj.set_text("value1");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","835","63","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("param2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam02","972","63","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("value2");
            obj.set_text("value2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleReport.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleReport Form
        * FILE NAME     : sampleReport.xfdl
        * DESCRIPTION   : 리포트(클립소프트) 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        http://도메인:28080/irs/common/report.irs?crfPath=리포트파일&service=사용자정의서비스구분자&param1=사용자정의파라미터1&param2=사용자정의파라미터2
        crfPath : 리포트파일
        service : 사용자정의서비스구분자
        param1 : 사용자정의파라미터1
        param2 : 사용자정의파라미터2

        ex. http://192.168.0.140:28080/irs/common/report.irs?crfPath=/report/sample/sample2.crf&service=TestReportService&param1=value1&param2=value2
        */

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/


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
        	this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	trace("[sampleReport]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	// var sUrl = "http://127.0.0.1:4098/thirdParty/Highcharts/index.html";
        	// var sUrl = this.fvApp.Tran.webUrl + "/thirdParty/Highcharts/index.html";

        	// this.fvApp.ReportInfo.reportUrl
        	// http://127.0.0.1:28080/irs/common/report.irs

        	// this.wbsHighChart.set_url(sUrl);
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
        	trace("??:"+system.navigatorname.toUpperCase()+"|system.navigatorversion:"+system.navigatorversion);

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
        		trace("str:"+str);
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
        		trace("nL:"+nL+"|nT:"+nT+"|nW:"+nW+"|nH:"+nH+"|nR:"+nR+"|nB:"+nB+"|sName:"+sName);
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
         * @description WebBrowser 에 웹페이지가 로딩 되었을 때 발생
        */
        this.wbsReport_onloadcompleted = function(obj,e)
        {
        	trace("[wbsReport_onloadcompleted]");
        };

        /**
         * @description 리포트 호출
        */
        this.btnCall_onclick = function(obj,e)
        {

        	// this.fvApp.ReportInfo.reportUrl
        	// http://127.0.0.1:28080/irs/common/report.irs
        	// ex. http://192.168.0.140:28080/irs/common/report.irs?crfPath=/report/sample/sample2.crf&service=TestReportService&param1=value1&param2=value2
        	var sUrl = this.fvApp.ReportInfo.reportUrl;
        	var sParam = "crfPath="+this.edtCrfPath.value+"&service="+this.edtService.value+"&param1="+this.edtParam01.value+"&param2="+this.edtParam02.value;
        	this.fnWebBrowserSendPost(this,this.wbsReport, sUrl, sParam);
        };

        /**
         * @description 리포트 호출(팝업)
        */
        this.btnCallPopup_onclick = function(obj,e)
        {
        	var sUrl = this.fvApp.ReportInfo.reportUrl;
        	var sParam = "crfPath="+this.edtCrfPath.value+"&service="+this.edtService.value+"&param1="+this.edtParam01.value+"&param2="+this.edtParam02.value;

        	var sPopupId	= "reportPop";
        	var sPopupUrl	= "Frame_Popup::comReportPop.xfdl";
        	var objArgs		= {pvUrl:sUrl, pvParam:sParam};
        	var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"Report"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.wbsReport.addEventHandler("onloadcompleted",this.wbsReport_onloadcompleted,this);
            this.btnCall.addEventHandler("onclick",this.btnCall_onclick,this);
            this.btnCallPopup.addEventHandler("onclick",this.btnCallPopup_onclick,this);
        };
        this.loadIncludeScript("sampleReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
