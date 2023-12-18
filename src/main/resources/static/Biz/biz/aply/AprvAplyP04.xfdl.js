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
                this._setFormPosition(1300,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBizNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizCnt\" type=\"STRING\" size=\"256\"/><Column id=\"bizSts\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"hstrySts\" type=\"STRING\" size=\"256\"/><Column id=\"hstryNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnSts\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgSts\" type=\"STRING\" size=\"256\"/><Column id=\"chgNm\" type=\"STRING\" size=\"256\"/><Column id=\"addDataSts\" type=\"STRING\" size=\"256\"/><Column id=\"addDataNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentSts\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizChgPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"certPrdUpdtPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"certBgngYmdChgPsbltyYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitFrm","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("0");
            obj.set_text("사업 검색");
            obj.set_cssclass("sta_POP_Title");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Static("staW","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staH","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staR",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Div("divPop","45","89",null,null,"staR:0","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divPop.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizType","35","31","86","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staRprsvNm00","335","31","86","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBizNm","staRprsvNm00:0","31","180","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizType","staBizType:0","31","179","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:62",null,null,"5","40",null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"95\"/><Column size=\"112\"/><Column size=\"197\"/><Column size=\"118\"/><Column size=\"104\"/><Column size=\"103\"/><Column size=\"143\"/><Column size=\"116\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"파리협정조항\"/><Cell col=\"3\" text=\"사업명(원문)\"/><Cell col=\"4\" rowspan=\"2\" text=\"사업유형\"/><Cell col=\"5\" text=\"인증유효\"/><Cell col=\"6\" text=\"시작일자\"/><Cell col=\"7\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"8\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"9\" rowspan=\"2\" text=\"선택\"/><Cell row=\"1\" col=\"3\" text=\"사업명(국문)\"/><Cell row=\"1\" col=\"5\" text=\"기간유형\"/><Cell row=\"1\" col=\"6\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:dgrRegRsnCdNm\" tooltiptext=\"bind:dgrRegRsnCdNm\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"bind:agreeClausCdNm\" tooltiptext=\"bind:agreeClausCdNm\"/><Cell col=\"3\" textAlign=\"left\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizOrgtNm, currow, 3)\" tooltiptext=\"bind:bizOrgtNm\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:bizTypeCdNm\" tooltiptext=\"bind:bizTypeCdNm\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:certVldTypeCdNm\" tooltiptext=\"bind:certVldTypeCdNm\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:certVldBgngYmd\" tooltiptext=\"bind:certVldBgngYmd\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\"/><Cell col=\"7\" text=\"bind:prcsTypeCdNm\" tooltiptext=\"bind:prcsTypeCdNm\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" displaytype=\"expr:chgSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:chgSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" text=\"bind:chgNm\" tooltiptext=\"bind:chgNm\" padding=\"10px 5px\"/><Cell row=\"1\" col=\"3\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizKrnNm, currow, 3)\" tooltiptext=\"bind:bizKrnNm\"/><Cell row=\"1\" col=\"6\" displaytype=\"date\" text=\"bind:certVldEndYmd\" tooltiptext=\"bind:certVldEndYmd\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"7\" text=\"bind:typeCdNm\" tooltiptext=\"bind:typeCdNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,null,"32","565","grdList:10",null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divPop.addChild(obj.name, obj);

            obj = new Div("divPaging","371","grdList:20","468","20",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Frame_Common::comPaging.xfdl");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staB","30","704","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitFrm.form
            obj = new Layout("default","",0,0,this.divTitFrm.form,function(p){});
            this.divTitFrm.form.addLayout(obj.name, obj);

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
            obj = new Layout("default","",1300,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.divSearch.form.cboMhdlgPrcndTypeCd","value","dsSrh","srhMhdlgPrcndTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPop.form.divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPop.form.divSearch.form.edtBizNm","value","dsSrh","srhBizNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPop.form.divSearch.form.cboBizType","value","dsSrh","srhBizTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyP04.xfdl", function() {
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


        	// 검색 데이터셋 초기화.
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBizNm", "");
        	this.dsSrh.setColumn(0, "srhBizTypeCd", "");

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	// 사업 조회
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
        this.fnCallSearchList = function()
        {
        	trace("********************************* 목록 호출..." + this.fvApp.User.roleIdMgno);

        	// 공통Transaction 호출
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/scsnChgAply/selectScsnChgAplyPopList.irs";
        	}else {
        		callUrl = "/adm/prcnd/rtrcnPrcnd/selectScsnChgAplyPopList.irs";
        	}

         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        this.fnCallComCdoe = function()
        {
        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsBizTypeCdA", 	groupId:"BIZ_TYPE_CD", 		headflag:"A", useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // 닫기 버튼.
        this.divFrm_btnCls_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({flag:"CLOSE"});
        	trace("=====strRtn========"+strRtn);
        	this.gfnPopupClose(this, strRtn);
        };

        this.divPop_grdList_oncellclick = function(obj,e)
        {
        	trace("[divPop_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 9)
        	{
        		var bizMngNo = this.dsList.getColumn(e.row, "bizMngNo");
        		var bizDgr = this.dsList.getColumn(e.row, "bizDgr");

        		var strRtn = this.gfnSetPopupReturn({flag:"SELECT", pvBizMngNo:bizMngNo, pvBizDgr:bizDgr});
        		this.gfnPopupClose(this, strRtn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divTitFrm.form.btnCls.addEventHandler("onclick",this.divFrm_btnCls_onclick,this);
            this.divPop.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPop_divSearch_btnSearch_onclick,this);
            this.divPop.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divPop_divSearch_btnRefresh_onclick,this);
            this.divPop.form.grdList.addEventHandler("oncellclick",this.divPop_grdList_oncellclick,this);
        };
        this.loadIncludeScript("AprvAplyP04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
