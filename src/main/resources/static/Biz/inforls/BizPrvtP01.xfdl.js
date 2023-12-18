(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BizPrvtp01");
            this.set_titletext("사업 불러오기 검색 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhAgreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFormCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreeClausCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("사업 불러오기 검색");
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

            obj = new Combo("cboBizFormCd","370","31","110","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizFormCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizNm","520","31","70","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBizNm","590","31","100","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","290","31","80","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAgreeClausCd","145","31","105","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsAgreeClausCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","35","31","110","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("파리협정조약");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","830","31","120","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentNm","730","31","100","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:62",null,null,"5","40",null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"208\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"92\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"파리협정조약\"/><Cell col=\"3\" text=\"사업형태\"/><Cell col=\"4\" text=\"사업명\"/><Cell col=\"5\" text=\"사업유형\"/><Cell col=\"6\" text=\"사업규모\"/><Cell col=\"7\" text=\"선택\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:aplyClCdNm\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:agreeClausCdNm\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:bizFormCdNm\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:bizOrgtNm\" tooltiptext=\"bind:bizOrgtNm\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizTypeCdNm\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizScalCdNm\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" text=\"bind:btnNm\" tooltiptext=\"bind:btnNm\"/><Cell row=\"1\" col=\"4\" textAlign=\"left\" text=\"bind:bizKrnNm\" tooltiptext=\"bind:bizKrnNm\"/></Band></Format></Formats>");
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
            obj = new Layout("default","",1200,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPop.form.divSearch.form.cboAgreeClausCd","value","dsSrh","srhAgreeClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPop.form.divSearch.form.cboBizFormCd","value","dsSrh","srhBizFormCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPop.form.divSearch.form.edtBizNm","value","dsSrh","srhBizNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BizPrvtP01.xfdl", function() {
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

        	// 검색 데이터셋 초기화.
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhAgreeClausCd", "");
        	this.dsSrh.setColumn(0, "srhBizFormCd", "");
        	this.dsSrh.setColumn(0, "srhBizNm", "");
        	this.dsSrh.setColumn(0, "srhBzentNm", "");

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	// 페이지표시 Div 초기화
        	this.divPop.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        //공통코드 조회
        this.fnCallComCdoe = function()
        {
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsAgreeClausCd", 	groupId:"AGREE_CLAUS_CD", 		headflag:"A", useYn:"Y"}; //파리협정조약
        	arrParam[1] = {outDs:"dsBizFormCd", 	groupId:"BIZ_FORM_CD", 		headflag:"A", useYn:"Y"}; //사업형태

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
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

        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        // 검색 버튼 클릭
        this.divPop_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        // 목록에서 사업 선택
        this.divPop_grdList_oncellclick = function(obj,e)
        {
        	trace("[divPop_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 7) {
        		var strRtn = this.gfnSetPopupReturn({bizMngNo:this.dsList.getColumn(e.row, "bizMngNo")});
        		trace("=====strRtn========"+strRtn);
        		this.gfnPopupClose(this, strRtn);
        	}
        };

        // 팝업 닫기
        this.divTit_btnCls_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        // 조회
        this.fnCallSearchList = function()
        {
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
        	var callUrl = "/biz/inforls/bizPrvt/pop/selectBizPopList.irs";

         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
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
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPop_divSearch_btnSearch_onclick,this);
            this.divPop.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divPop_divSearch_btnRefresh_onclick,this);
            this.divPop.form.grdList.addEventHandler("oncellclick",this.divPop_grdList_oncellclick,this);
        };
        this.loadIncludeScript("BizPrvtP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
