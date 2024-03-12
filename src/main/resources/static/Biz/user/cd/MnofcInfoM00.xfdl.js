(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComCdM00");
            this.set_cssclass("frm_WF_Frame");
            this.set_titletext("부처 정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"childCnt\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhUpInstMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaticYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,"420",null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","31","65","31",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            obj.set_accessibilitylabel("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSearch:3",null,"32","31",null,"31",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            obj.set_accessibilitylabel("초기화");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstMgno","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기관관리번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("기관관리번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInstMgno","staInstMgno:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("기관관리번호");
            obj.set_maxlength("10");
            obj.set_accessibilitylabel("기관관리번호");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentNm","edtInstMgno:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기관명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("기관명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("기관명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("기관명");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81","55%",null,null,"75",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"부처기관 관리번호\" tooltiptext=\"부처기관 관리번호\"/><Cell col=\"2\" text=\"기관명\" tooltiptext=\"기관명\"/><Cell col=\"3\" text=\"건수\" tooltiptext=\"건수\"/><Cell col=\"4\" text=\"사용여부\" tooltiptext=\"사용여부\"/><Cell col=\"5\" text=\"사용변경\" tooltiptext=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"번호\" textAlign=\"center\" accessibilitylabel=\"번호\"/><Cell col=\"1\" text=\"bind:instMgno\" tooltiptext=\"부처기관 관리번호\" textAlign=\"center\" accessibilitylabel=\"부처기관 관리번호\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"기관명\" accessibilitylabel=\"기관명\"/><Cell col=\"3\" text=\"bind:childCnt\" tooltiptext=\"건수\" cssclass=\"expr:childCnt==0 ? &apos;cell_WF_Point01&apos; : &apos;&apos;\" textAlign=\"center\" accessibilitylabel=\"건수\"/><Cell col=\"4\" text=\"bind:delYn\" tooltiptext=\"사용여부\" cssclass=\"expr:delYn==&apos;Y&apos; ? &apos;cell_WF_Point01&apos; : &apos;cell_WF_Point03&apos;\" displaytype=\"combotext\" combodataset=\"dsStaticYn\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\" font=\"normal 900 15px/17px &quot;NotoSansKR&quot;\" accessibilitylabel=\"사용여부\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"7px 8px\" text=\"변경\" tooltiptext=\"변경\" accessibilitydescription=\"변경\" accessibilitylabel=\"변경\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Grid("grdDtlList","grdList:20","divSearch:81",null,null,"30","75",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDtlList");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"하위기관 관리번호\" tooltiptext=\"하위기관 관리번호\"/><Cell col=\"2\" text=\"기관명\" tooltiptext=\"기관명\"/><Cell col=\"3\" text=\"순서\" tooltiptext=\"순서\"/><Cell col=\"4\" text=\"사용여부\" tooltiptext=\"사용여부\"/><Cell col=\"5\" text=\"사용변경\" tooltiptext=\"사용변경\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"번호\" textAlign=\"center\" accessibilitylabel=\"번호\"/><Cell col=\"1\" text=\"bind:instMgno\" tooltiptext=\"하위기관 관리번호\" textAlign=\"center\" accessibilitylabel=\"하위기관 관리번호\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"기관명\" accessibilitylabel=\"기관명\"/><Cell col=\"3\" text=\"bind:sortSeqo\" tooltiptext=\"순서\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" accessibilitylabel=\"순서\"/><Cell col=\"4\" text=\"bind:delYn\" tooltiptext=\"사용여부\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsStaticYn\" combocodecol=\"code\" combodatacol=\"value\" cssclass=\"expr:delYn==&apos;Y&apos; ? &apos;cell_WF_Point01&apos; : &apos;cell_WF_Point03&apos;\" font=\"normal 900 15px/17px &quot;NotoSansKR&quot;\" accessibilitylabel=\"사용여부\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" padding=\"7px 8px\" edittype=\"button\" text=\"변경\" tooltiptext=\"변경\" accessibilitylabel=\"변경\" accessibilitydescription=\"변경\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divLeftHeader","5",null,"55%","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staHeader","0",null,"185","30",null,"0",null,null,null,null,this.divList.form.divLeftHeader.form);
            obj.set_taborder("1");
            obj.set_text("부처 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divList.form.divLeftHeader.addChild(obj.name, obj);

            obj = new Div("divPaging","5","grdList:20","55%","21",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divRightHeader","divLeftHeader:20",null,null,"32","30","grdDtlList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staHeader","0",null,"200","30",null,"0",null,null,null,null,this.divList.form.divRightHeader.form);
            obj.set_taborder("1");
            obj.set_text("부처 하위기관 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divList.form.divRightHeader.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5","grdList:10","140","32",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divLeftHeader.form
            obj = new Layout("default","",0,0,this.divList.form.divLeftHeader.form,function(p){});
            this.divList.form.divLeftHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divRightHeader.form
            obj = new Layout("default","",0,0,this.divList.form.divRightHeader.form,function(p){});
            this.divList.form.divRightHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtInstMgno","value","dsSrh","srhInstMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhInstClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MnofcInfoM00.xfdl","");
        this.registerScript("MnofcInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleScript Form
        * FILE NAME     : sampleScript.xfdl
        * DESCRIPTION   : 스크립트 기본
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.XX.XX    홍길동	     최초생성
        ***********************************************************************************/


        /*
         1. 모든 화면에 동일하게 필요한 Comment
        	1.Include Common Library
        	2.Form 변수 선언
        	3.Form Event Area
        	4.Callback 처리 Area (Transaction, Popup)
        	5.CRUD 및 Transaction 서비스 호출 처리 Area
        	6.User Function Area
        	7.Component Event Area

         2. 모든 화면의 초기 이벤트는 아래 3가지 이벤트에 맞춰 적절히 코딩을 한다.
           - oninit	: Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
        		Form 내부의 모든 컴포넌트가 생성되면 oninit 이벤트가 발생합니다
        		컴포넌트의 초기 위치 조정 등 코드 기술
        		Grid 의 griduserproperty 추가를 Property 창이 아닌 script 로 처리하고자 할 경우

           - onload	: Form 에 등록된 모든 컴포넌트와 데이터가 로드된 후 발생하는 이벤트입니다.
        		Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면 onload 이벤트가 발생합니다.
        		gfnSetFormInit() 호출

           - fnFormInit : 공통(gfnSetFormInit)의 처리 작업 후 호출되는 콜백함수, 개발자의 초기작업 코드 기술
        		공통코드 조회 , 공통달력 관련 초기화 호출 등.

         3. 모든 화면 onload 시 초기화 공통함수 gfnSetFormInit() 호출한다.
           - this.gfnSetFormInit(obj);
           - form onload 후 실행될 로직이 있다면 callback 함수(두번째 인자)를 정의하여 실행되게 한다.
             ex) this.gfnSetFormInit(obj, "fnFormInit");

          4. Grid 에 표시할 데이터가 없을 때 출력할 정보
           - nodatatext : 데이터가 없습니다.

        */


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";

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

        	// Grid 의 griduserproperty 추가를 Property 창이 아닌 script 로 처리하고자 할 경우
        	// form_onload > gfnSetFormInit 함수 호출 이전에 셋팅하여 준다.
        	// this.grdList03.griduserproperty = "!colfix,!rowfix,!filter,!colhide,!find,!copy,!initial";
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
        	trace("[MnofcInfoM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.fnClearDsSrh();

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"INST_CLSF_CD" , headflag:"S" , useYn:"Y"};
        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Frame.js > gfnCallOpenMenu, gfnOpenMenu  => frameWork > fnCallOpenedForm 에서 호출
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleScript][fnParamInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1+"\nthis.fvArgRecv.objDs:"+this.fvArgRecv.objDs.saveXML());

        	// TODO
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// TODO
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */
        this.form_onkeyup = function(obj,e)
        {
        	// 팝업에서 취소시 닫기 기능용
        	if( e.keycode == 27 )				// ESC
        	{
        		this.close("CANCEL");
        	}
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
        			this.dsResult01.set_enableevent(false);

        			for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult01.getColumn(i, "cdMgno") != "ICC0002"
        					&& this.dsResult01.getColumn(i, "cdMgno") != "ICC0003"
        					&& this.dsResult01.getColumn(i, "cdMgno") != "ICC0004"
        					&& this.dsResult01.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult01.deleteRow(i);
        				}
        			}

        			this.dsResult01.set_enableevent(true);

        		default:
        			break;
        	}
        };

        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

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
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		switch (nErrCode)
        		{
        			case -1 :
        				// 후처리 코드
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
        			this.dsDtlList.clearData();		// 초기화

        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);

        			if(this.dsList.rowcount > 0) {
        				var instMgno = this.dsList.getColumn(0, "instMgno");

        				trace("값 확인 -> [instMgno]["+instMgno+"]");
        				this.dsDtlSrh.clearData();
        				this.dsDtlSrh.addRow();
        				this.dsDtlSrh.setColumn(0, "srhUpInstMgno", instMgno);
        				this.fnCallSearchDtlList();
        			}
        			break;
        		case "searchDtlList" :
        			// 후처리 코드
        			this.dsDtlSrh.clearData();		// 초기화
        			break;

        		case "updateMnofcInfo" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000005", "", function(svcid, variant) {
        				if(variant == "OK") {
        					this.fnCallSearchList(); // 조회함수호출
        				}
        			});
        			break;

        		case "updateSubMnofcInfo" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000005", "", function(svcid, variant) {
        				if(variant == "OK") {
        					var selectedRows = this.divList.form.grdList.getSelectedRows();
        					var instMgno = this.dsList.getColumn(selectedRows[0], "instMgno");
        					trace("값 확인 -> [instMgno]["+instMgno+"]");
        					this.dsDtlSrh.clearData();
        					this.dsDtlSrh.addRow();
        					this.dsDtlSrh.setColumn(0, "srhUpInstMgno", instMgno);

        					this.fnCallSearchDtlList(); // 조회함수호출
        				}
        			});
        			break;

        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /*
         // objArgs				- transaction arguments
         svcId    				transaction을 구분하기 위한 svc ID 문자열
         url	     			transaction을 요청할 주소,  서버측 Service 주소 문자열
         inds     				입력값으로 보낼 Dataset, a=b형태로 실제이름과 입력이름을 매칭
         outds    				처리 결과를 받을 Dataset,
         args	 				입력값으로 보낼 arguments, 변수=값을 빈칸으로 구분한다. strFormData='20220816'
         callback 				transaction의 결과를 받을 callback 함수 (ex. fnCallback)
         async    				비동기 여부(true: Async (Default), false : Sync), 생략하면 비동기
         dataType 				전송할 형태를 지정합니다.  0(XML 타입),1(Binary 타입), 2(SSV 타입) , 3(JSON 타입, Default)
         compress 				통신시 PostData를 압축할지 여부를 지정합니다. Default : false
         httptimeout			Http통신시 Wait Time(초)를 설정합니다. Default : this.Tran.defaultHttptimeout
         setWaitCursorYn		화면에 Wait Cursor의 표시 여부 (Y - 표시 (Default) / N - 표시안함) , setWaitCursor method 활용
         commCodeSvcId			공통코드조회 개발자의 서비스 ID (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeSearchDsNm 	공통코드조회 서비스 호출시 조회정보 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeResultDsNm 	공통코드조회 서비스 호출시 수신받을 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
        */

        /**
         * @description 목록조회
         */
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
        	objArgs.url 			= "/adm/cd/mnofcInfo/selectMnofcInfoList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 목록조회
         */
        this.fnCallSearchDtlList = function()
        {
        	trace("목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchDtlList";
        	objArgs.url 			= "/adm/cd/mnofcInfo/selectSubMnofcInfoList.irs";
         	objArgs.inds      		= "dsDtlSrh=dsDtlSrh";
         	objArgs.outds     		= "dsDtlList=dsDtlList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 부처 수정
         */
        this.fnCallSaveUpInst = function(sInstMgno, sDelYn)
        {
        	trace("부처 수정 호출...");

        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.addRow();
        	this.dsSaveInfo.setColumn(0, "upInstMgno", "");
        	this.dsSaveInfo.setColumn(0, "instMgno", sInstMgno);
        	this.dsSaveInfo.setColumn(0, "delYn", sDelYn);

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "updateMnofcInfo";
        	objArgs.url 			= "/adm/cd/mnofcInfo/updateMnofcInfo.irs";
         	objArgs.inds      		= "dsSaveInfo=dsSaveInfo";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 부처 하위기관 수정
         */
        this.fnCallSaveInst = function(sUpInstMgno, sInstMgno, sDelYn)
        {
        	trace("부처 하위기관 수정 호출...");

        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.addRow();
        	this.dsSaveInfo.setColumn(0, "upInstMgno", sUpInstMgno);
        	this.dsSaveInfo.setColumn(0, "instMgno", sInstMgno);
        	this.dsSaveInfo.setColumn(0, "delYn", sDelYn);

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "updateSubMnofcInfo";
        	objArgs.url 			= "/adm/cd/mnofcInfo/updateSubMnofcInfo.irs";
         	objArgs.inds      		= "dsSaveInfo=dsSaveInfo";
         	objArgs.outds     		= "";
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

        /**
         * @desc 검색용 데이터셋 초기화 function
        */
        this.fnClearDsSrh = function()
        {
        	this.dsSrh.setColumn(0, "srhInstMgno", "");
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        };

        /**
         * @desc 재조회
        */
        this.fnReload = function(instMgno)
        {
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();

        	if(!this.gfnIsNull(instMgno)) {
        		this.dsSrh.setColumn(0, "srhInstMgno", instMgno);
        	} else {
        		this.dsSrh.setColumn(0, "srhInstMgno", "");
        	}

        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */


        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.fnClearDsSrh();

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /**
         * @description enter 키 입력시 검색
        */
        this.fnSearch = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divList_divSearch_btnSearch_onclick();
        	}
        };

        /**
         * @description 부처 그리드 행 클릭
        */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	// 사용여부 변경하기
        	if(e.col == 5) {
        		// TODO - 변경하기
        		var instMgno = this.dsList.getColumn(e.row, "instMgno");
        		var delYn = this.dsList.getColumn(e.row, "delYn");
        		trace("[instMgno]["+instMgno+"][delYn]["+delYn+"]");

        		this.fnCallSaveUpInst(instMgno, delYn);
        	} else {
        		var instMgno = this.dsList.getColumn(e.row, "instMgno");
        		trace("값 확인 -> [instMgno]["+instMgno+"]");
        		this.dsDtlSrh.clearData();
        		this.dsDtlSrh.addRow();
        		this.dsDtlSrh.setColumn(0, "srhUpInstMgno", instMgno);

        		this.fnCallSearchDtlList();
        	}
        };

        /**
         * @description 부처 하위기관 그리드 행 클릭
        */
        this.divList_grdDtlList_oncellclick = function(obj,e)
        {
        	// 사용여부 변경하기
        	if(e.col == 5) {
        		var upInstMgno = this.dsDtlList.getColumn(e.row, "upInstMgno");
        		var instMgno = this.dsDtlList.getColumn(e.row, "instMgno");
        		var delYn = this.dsDtlList.getColumn(e.row, "delYn");
        		trace("[upInstMgno]["+upInstMgno+"][instMgno]["+instMgno+"][delYn]["+delYn+"]");

        		this.fnCallSaveInst(upInstMgno, instMgno, delYn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.edtInstMgno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtBzentNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.grdDtlList.addEventHandler("oncellclick",this.divList_grdDtlList_oncellclick,this);
            this.divList.form.divLeftHeader.form.staHeader.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divList.form.divRightHeader.form.staHeader.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
        };
        this.loadIncludeScript("MnofcInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
