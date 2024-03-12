(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDocViewer");
            this.set_titletext("문서뷰어 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsViewer", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewerResult", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/><Column id=\"fileDtlSn\" type=\"INT\" size=\"256\"/><Column id=\"rs\" type=\"STRING\" size=\"256\"/><Column id=\"fn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("wbsDocViewer","20","100",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btnCall","36","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("뷰어 호출");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallPopup","195","25","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("뷰어 호출(팝업)");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","385","23","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("fileGroupMgno");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno","562","23","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("FG00000001");
            obj.set_text("FG00000001");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","385","63","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("fileMgno");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileMgno","562","63","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("FD00000001");
            obj.set_text("FD00000001");
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
        this.registerScript("sampleDocViewer.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleDocViewer Form
        * FILE NAME     : sampleDocViewer.xfdl
        * DESCRIPTION   : 문서뷰어 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.11.15    TOBESOFT	     최초생성
        ***********************************************************************************/



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
        	// this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        	this.fnFormInit(obj);
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	trace("[sampleDocViewer]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "statistics" :
        			// 후처리 코드
        			trace(this.dsViewerResult.saveXML());
        			var result = this.dsViewerResult.getColumn(0, "result");
        			trace("[result]["+result+"]");

        			if(result == "Y")
        			{
        				var fn = this.dsViewerResult.getColumn(0, "fn");
        				var rs = this.dsViewerResult.getColumn(0, "rs");

        				trace("[fn]["+fn+"]");
        				trace("[rs]["+rs+"]");

        				//var url = "http://localhost:28080/irs/sol/viewer/skin/doc.html?fn=" + fn + "&rs=/sn3hcv" + rs;
        				// var sUrl = "http://192.168.0.140:28080/irs/sol/viewer/skin/doc.html?fn=" + fn + "&rs=" + rs;
        				var sUrl = this.fvApp.ViewerInfo.viewerUrl+"/doc.html?fn=" + fn + "&rs=" + rs;
        				// system.execBrowser(url);
        				this.wbsDocViewer.set_url(sUrl);
        			}
        			break;
        		case "statisticsPop" :
        			// 후처리 코드
        			trace(this.dsViewerResult.saveXML());
        			var result = this.dsViewerResult.getColumn(0, "result");
        			trace("[result]["+result+"]");

        			if(result == "Y")
        			{
        				var sUrl = this.fvApp.ViewerInfo.viewerUrl+"/doc.html";
        				var sFn = this.dsViewerResult.getColumn(0, "fn");
        				var sRs = this.dsViewerResult.getColumn(0, "rs");

        				var sPopupId	= "docViewerPop";
        				var sPopupUrl	= "Frame_Popup::comDocViewerPop.xfdl";
        				var objArgs		= {pvUrl:sUrl, pvFn:sFn, pvRs:sRs};
        				var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"DocViewer"};

        				this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        			}
        			break;
        		default:
        			break;
        	}
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description WebBrowser 에 웹페이지가 로딩 되었을 때 발생
        */
        this.wbsDocViewer_onloadcompleted = function(obj,e)
        {
        	trace("[wbsDocViewer_onloadcompleted]");
        };

        /**
         * @description 리포트 호출
        */
        this.btnCall_onclick = function(obj,e)
        {
        	this.dsViewer.clearData();
        	var nRow = this.dsViewer.addRow();

        	// 조회조건 셋팅
        	this.dsViewer.setColumn(nRow, "fileGroupMgno", this.edtFileGroupMgno.value);
        	this.dsViewer.setColumn(nRow, "fileMgno", this.edtFileMgno.value);

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "statistics";
        	objArgs.url 			= "/common/viewer.irs";
        	objArgs.inds			= "dsSendViewer=dsViewer";
        	objArgs.outds			= "dsViewerResult=dsViewer";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 뷰어 호출(팝업)
        */
        this.btnCallPopup_onclick = function(obj,e)
        {
        	this.dsViewer.clearData();
        	var nRow = this.dsViewer.addRow();

        	// 조회조건 셋팅
        	this.dsViewer.setColumn(nRow, "fileGroupMgno", this.edtFileGroupMgno.value);
        	this.dsViewer.setColumn(nRow, "fileMgno", this.edtFileMgno.value);

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "statisticsPop";
        	objArgs.url 			= "/common/viewer.irs";
        	objArgs.inds			= "dsSendViewer=dsViewer";
        	objArgs.outds			= "dsViewerResult=dsViewer";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.wbsDocViewer.addEventHandler("onloadcompleted",this.wbsDocViewer_onloadcompleted,this);
            this.btnCall.addEventHandler("onclick",this.btnCall_onclick,this);
            this.btnCallPopup.addEventHandler("onclick",this.btnCallPopup_onclick,this);
        };
        this.loadIncludeScript("sampleDocViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
