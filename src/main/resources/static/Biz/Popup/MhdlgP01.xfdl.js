(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("모달 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgFldNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhMhdlgPrcndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhAgreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhAgreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"srhReddPlusYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgPrcndTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("방법론 검색");
            obj.set_cssclass("sta_POP_Title");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            this.divTit.addChild(obj.name, obj);

            obj = new Div("divPop","45","89",null,null,"45","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divPop.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMhdlgPrcndTypeCd","121","31","100","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsMhdlgPrcndTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldNm","261","31","95","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("방법론명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgNm","356","31","180","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldDgr","35","31","86","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("제정/개정");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:62",null,null,"5","40",null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"208\"/><Column size=\"59\"/><Column size=\"76\"/><Column size=\"96\"/><Column size=\"97\"/><Column size=\"116\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" text=\"방법론 원문명\"/><Cell col=\"2\" rowspan=\"2\" text=\"제·개정\"/><Cell col=\"3\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"4\" rowspan=\"2\" text=\"방법론고유번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"유효시작일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"선택\"/><Cell row=\"1\" col=\"1\" text=\"방법론 국문명\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"bind:rvsnDgrNm\" tooltiptext=\"bind:rvsnDgrNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:mhdlgFldNm\" tooltiptext=\"bind:mhdlgFldNm\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:mhdlgUnqno\" tooltiptext=\"bind:mhdlgUnqno\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:vldBgngYmd\" tooltiptext=\"bind:vldBgngYmd\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" text=\"bind:btnNm\" tooltiptext=\"bind:btnNm\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,null,"32","565","grdList:10",null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divPop.addChild(obj.name, obj);

            obj = new Div("divPaging","131","grdList:20","468","20",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Frame_Common::comPaging.xfdl");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staLine1","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staLeft","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staRight",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTit.form
            obj = new Layout("default","",0,0,this.divTit.form,function(p){});
            this.divTit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divSearch.form
            obj = new Layout("default","",0,0,this.divPop.form.divSearch.form,function(p){});
            this.divPop.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divPaging
            obj = new Layout("default","",0,0,this.divPop.form.divPaging.form,function(p){});
            this.divPop.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form
            obj = new Layout("default","",0,0,this.divPop.form,function(p){});
            this.divPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.divSearch.form.cboMhdlgPrcndTypeCd","value","dsSrh","srhMhdlgPrcndTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPop.form.divSearch.form.edtMhdlgNm","value","dsSrh","srhMhdlgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgP01.xfdl", function() {
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
        	this.divPop.form.grdList.griduserproperty = "!sort,!colhide,!initial,copy";
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

        	trace("[협정.약정 검색 모달(Modal) 팝업]=========================================");
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
        	var srhAgreeMgno 	= this.gfnGetParameter(objFormFrame, "agreeMgno");
        	var srhAgreeDgr 	= this.gfnGetParameter(objFormFrame, "agreeDgr");
        	var srhBizFldCd 	= this.gfnGetParameter(objFormFrame, "bizFldCd");
        	var srhBizDtlsFldCd	= this.gfnGetParameter(objFormFrame, "bizDtlsFldCd");
        	var srhReddPlusYn	= this.gfnGetParameter(objFormFrame, "reddPlusYn");

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	// 검색 데이터셋 초기화.
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhAgreeMgno", srhAgreeMgno);
        	this.dsSrh.setColumn(0, "srhAgreeDgr", srhAgreeDgr);
        	this.dsSrh.setColumn(0, "srhMhdlgPrcndTypeCd", "");
        	this.dsSrh.setColumn(0, "srhMhdlgNm", "");
        	this.dsSrh.setColumn(0, "srhBizFldCdMgno", srhBizFldCd);
        	this.dsSrh.setColumn(0, "srhBizFldDtlsCdMgno", srhBizDtlsFldCd);
        	this.dsSrh.setColumn(0, "srhReddPlusYn", srhReddPlusYn);

        	// 페이지표시 Div 초기화
        	this.divPop.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
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
        			case -1 :
        				// 후처리 코드
        				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			this.divPop.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divPop.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallComCdoe = function()
        {
        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsMhdlgPrcndTypeCdA", 	groupId:"MHDLG_PRCND_TYPE_CD", 		headflag:"A", useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
        	var callUrl = "/common/pop/selectMhdlglList.irs";

         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "X" 버튼 클릭
        */
        this.divTit_btnCls_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        this.divPop_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhMhdlgPrcndTypeCd", "");
        	this.dsSrh.setColumn(0, "srhMhdlgNm", "");
        };

        this.divPop_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divPop_grdList_oncellclick = function(obj,e)
        {
        	trace("[divPop_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 6)
        	{
        		var mhdlgMgno = this.dsList.getColumn(e.row, "mhdlgMgno");
        		var vldMhdlgDgr = this.dsList.getColumn(e.row, "vldMhdlgDgr");
        		var mhdlgOrgtNm = this.dsList.getColumn(e.row, "mhdlgOrgtNm");
        		var mhdlgKrnNm = this.dsList.getColumn(e.row, "mhdlgKrnNm");
        		var mhdlgUnqno = this.dsList.getColumn(e.row, "mhdlgUnqno");
        		var mhdlgFldNm = this.dsList.getColumn(e.row, "mhdlgFldNm");

        		var strRtn = this.gfnSetPopupReturn({pvMhdlgMgno:mhdlgMgno, pvMMhdlgDgr:vldMhdlgDgr, pvMhdlgOrgtNm:mhdlgOrgtNm, pvMhdlgKrnNm:mhdlgKrnNm, mhdlgUnqno:mhdlgUnqno, mhdlgFldNm:mhdlgFldNm });
        		this.gfnPopupClose(this, strRtn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPop_divSearch_btnSearch_onclick,this);
            this.divPop.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divPop_divSearch_btnRefresh_onclick,this);
            this.divPop.form.grdList.addEventHandler("oncellclick",this.divPop_grdList_oncellclick,this);
        };
        this.loadIncludeScript("MhdlgP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();