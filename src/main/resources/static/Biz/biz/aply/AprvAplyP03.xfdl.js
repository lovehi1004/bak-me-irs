(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyP03");
            this.set_titletext("모달 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staLine1","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staLeft","20","39","25","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staRight","655","38","25","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staLineBottom","40","254","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("사업 변경 및 갱신 신청");
            obj.set_cssclass("sta_POP_Title");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            this.divTit.addChild(obj.name, obj);

            obj = new Div("divSearch","staLeft:0","staLine1:0",null,null,"staRight:0","staLineBottom:0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCurNm","175","31","300","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_cssclass("output");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnChg","15","112","170","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업계획변경 신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnPrd","btnChg:10","112","170","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("인증유효기간 갱신신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnYmd","btnPrd:10","112","220","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("인증유효기간 시작일 변경신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrgNm","35","21","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staKorNm","35","61","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtOrgNm","staOrgNm:0","21","435","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKorNm","staKorNm:0","61","435","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTit.form
            obj = new Layout("default","",0,0,this.divTit.form,function(p){});
            this.divTit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboMhdlgPrcndTypeCd","value","dsSrh","srhMhdlgPrcndTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtCurNm","accessibilityaction","dsExcrList","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtCurNm","value","dsInfo","bfInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboInstCd","value","dsInfo","afInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtOrgNm","value","dsSrh","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtKorNm","value","dsSrh","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AprvAplyP03.xfdl", function() {
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

        	trace("[추가자료 처리 모달(Modal) 팝업]=========================================");
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

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}

        	//2. Parameter 참조
        	var bizMngNo 	= this.gfnGetParameter(objFormFrame, "bizMngNo");
        	var bizDgr 		= this.gfnGetParameter(objFormFrame, "bizDgr");
        	var bizOrgtNm	= this.gfnGetParameter(objFormFrame, "bizOrgtNm");
        	var bizKrnNm	= this.gfnGetParameter(objFormFrame, "bizKrnNm");

        	var chgYn	= this.gfnGetParameter(objFormFrame, "chgYn");
        	var prdYn	= this.gfnGetParameter(objFormFrame, "prdYn");
        	var ymdYn	= this.gfnGetParameter(objFormFrame, "ymdYn");

        	trace("bizMngNo : " + bizMngNo);
        	trace("bizDgr : " + bizDgr);
        	trace("bizOrgtNm : " + bizOrgtNm);
        	trace("bizKrnNm : " + bizKrnNm);

        	trace("chgYn : " + chgYn);
        	trace("prdYn : " + prdYn);
        	trace("ymdYn : " + ymdYn);

        	// 데이터셋 초기화.
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "bizMngNo", bizMngNo);
        	this.dsSrh.setColumn(0, "bizDgr", bizDgr);
        	this.dsSrh.setColumn(0, "bizOrgtNm", bizOrgtNm);
        	this.dsSrh.setColumn(0, "bizKrnNm", bizKrnNm);

        	// 버튼 설정
        	if(chgYn == "Y" && prdYn == "Y" && ymdYn == "Y") {
        		this.divSearch.form.btnChg.set_visible(true);
        		this.divSearch.form.btnChg.set_left(15);
        		this.divSearch.form.btnPrd.set_visible(true);
        		this.divSearch.form.btnYmd.set_visible(true);
        	}
        	else {
        		this.divSearch.form.btnChg.set_visible(true);
        		this.divSearch.form.btnChg.set_left(225);
        		this.divSearch.form.btnPrd.set_visible(false);
        		this.divSearch.form.btnYmd.set_visible(false);
        	}
        	this.divSearch.form.resetScroll();
        	this.resetScroll();
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

        // 닫기 버튼
        this.divTit_btnCls_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({flag:"CLOSE"});
        	trace("=====strRtn========"+strRtn);
        	this.gfnPopupClose(this, strRtn);
        };

        // 변경신청
        this.divSearch_btnChg_onclick = function(obj,e)
        {
        	var bizMngNo 	= this.dsSrh.getColumn(0, "bizMngNo");
        	var bizDgr 		= this.dsSrh.getColumn(0, "bizDgr");

        	var strRtn = this.gfnSetPopupReturn({flag:"CHG", pvBizMngNo:bizMngNo, pvBizDgr:bizDgr});
        	this.gfnPopupClose(this, strRtn);
        };

        // 갱신신청
        this.divSearch_btnPrd_onclick = function(obj,e)
        {
        	var bizMngNo 	= this.dsSrh.getColumn(0, "bizMngNo");
        	var bizDgr 		= this.dsSrh.getColumn(0, "bizDgr");

        	var strRtn = this.gfnSetPopupReturn({flag:"PRD", pvBizMngNo:bizMngNo, pvBizDgr:bizDgr});
        	this.gfnPopupClose(this, strRtn);
        };

        // 시작일변경신청
        this.divSearch_btnYmd_onclick = function(obj,e)
        {
        	var bizMngNo 	= this.dsSrh.getColumn(0, "bizMngNo");
        	var bizDgr 		= this.dsSrh.getColumn(0, "bizDgr");

        	var strRtn = this.gfnSetPopupReturn({flag:"YMD", pvBizMngNo:bizMngNo, pvBizDgr:bizDgr});
        	this.gfnPopupClose(this, strRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divSearch.form.btnChg.addEventHandler("onclick",this.divSearch_btnChg_onclick,this);
            this.divSearch.form.btnPrd.addEventHandler("onclick",this.divSearch_btnPrd_onclick,this);
            this.divSearch.form.btnYmd.addEventHandler("onclick",this.divSearch_btnYmd_onclick,this);
        };
        this.loadIncludeScript("AprvAplyP03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
