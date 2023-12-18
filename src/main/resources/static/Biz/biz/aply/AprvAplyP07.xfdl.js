(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aprvAplyP01");
            this.set_titletext("추가자료팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitFrm","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("0");
            obj.set_text("사업 평가");
            obj.set_cssclass("sta_POP_Title");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Div("divFrm","45","89","1210","380",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","5","0",null,"40","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staBizTit","0","5","535","30",null,null,null,null,null,null,this.divFrm.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("평가결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH1.addChild(obj.name, obj);

            obj = new Div("divEvlReg","0","divH1:0","1200","262",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staEvlH4","0","118",null,"140","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlH2","0","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlH3","0","43",null,"76","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlTypeCd","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("2");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlOpnn","0","43","150","76",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("4");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlFlmno","0","118","150","140",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("5");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Combo("cboEvlTypeCd","157","8","227","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsEvlTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new TextArea("txaEvlOpnn","157","51",null,"62","7",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleEvl01","157","128","800","120",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Div("divBtn","0","divEvlReg:20",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","75","32","0",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnEvlSave",null,"0","114","32","btnCls:3",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("평가결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Static("staW","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staH","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staR",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitFrm.form
            obj = new Layout("default","",0,0,this.divTitFrm.form,function(p){});
            this.divTitFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH1.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH1.form,function(p){});
            this.divFrm.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divEvlReg.form.divRaonKSingleEvl01
            obj = new Layout("default","",0,0,this.divFrm.form.divEvlReg.form.divRaonKSingleEvl01.form,function(p){});
            this.divFrm.form.divEvlReg.form.divRaonKSingleEvl01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divEvlReg.form
            obj = new Layout("default","",0,0,this.divFrm.form.divEvlReg.form,function(p){});
            this.divFrm.form.divEvlReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divBtn.form
            obj = new Layout("default","",0,0,this.divFrm.form.divBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divFrm.form.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form
            obj = new Layout("default","",0,0,this.divFrm.form,function(p){});
            this.divFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFrm.form.divBiz.form.edtAgreeNm","value","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFrm.form.divBiz.form.edtAgreeClausCd","value","dsUniInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFrm.form.divBiz.form.edtBizScalCd","value","dsUniInfo","bizScalCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFrm.form.divBiz.form.edtBizFormCd","value","dsUniInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFrm.form.divBiz.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFrm.form.divBiz.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divFrm.form.divBiz.form.edtAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divFrm.form.divBiz.form.edtFldCdNm","value","dsUniInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divFrm.form.divBiz.form.edtBizTypeCd","value","dsUniInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divFrm.form.divReq.form.txaRsn","value","dsDocReg","dataDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divFrm.form.divReqInfo.form.txaRsn","value","dsDocList","dataDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divFrm.form.divReg.form.edtCn","value","dsDocReg","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divFrm.form.divRegInfo.form.edtCn","value","dsDocList","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divFrm.form.divCfm.form.cboSts","value","dsDocReg","dataIdntyTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divFrm.form.divCfm.form.txaCn","value","dsDocReg","dataIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divFrm.form.divCfmInfo.form.edtSts","value","dsDocList","dataIdntyTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divFrm.form.divCfmInfo.form.txaCn","value","dsDocList","dataIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divFrm.form.divReq.form.chkPeriodYn","value","dsDocReg","dataDmndYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divFrm.form.divReqInfo.form.chkPeriodYn","value","dsDocList","dataDmndYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divFrm.form.divRegInfo.form.edtCalFromTo","value","dsDocList","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divFrm.form.divBiz.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divFrm.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divFrm.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyP07.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopupSub01 Form
        * FILE NAME     : samplePopupSub01.xfdl
        * DESCRIPTION   : 직접폼 모달(Modal) 샘플팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.23    TOBESOFT	     최초생성
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

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		//trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}

        	//2. Parameter 참조
        	var bizMngNo 	= this.gfnGetParameter(objFormFrame, "bizMngNo");
        	var bizDgr 		= this.gfnGetParameter(objFormFrame, "bizDgr");
        	var addDataDgr 	= this.gfnGetParameter(objFormFrame, "addDataDgr");



        	//-------------------------------------------------------------------------------------------


        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	//trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "" :		// From-To달력
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "" :

        			break;
        		default:
        			break;
        	}
        };

        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	//trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드
        			break;
        		default:
        			break;
        	}
        };

        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		switch (nErrCode)
        		{
        			case -2 :

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "divInfo" :

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divTitFrm.form.btnCls.addEventHandler("onclick",this.divFrm_btnCls_onclick,this);
            this.divFrm.form.divH1.form.staBizTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divEvlReg.form.staEvlFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divEvlReg.form.txaEvlOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divBtn.form.btnCls.addEventHandler("onclick",this.divFrm_divBtn_btnCls_onclick,this);
            this.divFrm.form.divBtn.form.btnEvlSave.addEventHandler("onclick",this.divFrm_divBtn_btnReq_onclick,this);
        };
        this.loadIncludeScript("AprvAplyP07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
