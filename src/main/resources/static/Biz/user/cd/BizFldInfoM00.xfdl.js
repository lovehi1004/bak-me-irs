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
            this.set_titletext("사업분야 정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"groupCdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"groupCdEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"groupCdCn\" type=\"STRING\" size=\"256\"/><Column id=\"cdRegLmtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhGroupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhGroupCdEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhGroupCdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhDelYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdEngNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdCn\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhGroupCdMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaticYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
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
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSearch:3",null,"32","31",null,"31",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupCdMgno","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("그룹코드");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupCdMgno","staGroupCdMgno:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("그룹코드");
            obj.set_maxlength("20");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupCdKornNm","edtGroupCdMgno:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("그룹코드한글명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("그룹코드한글명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupCdKornNm","staGroupCdKornNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("그룹코드한글명");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupCdEngNm","edtGroupCdKornNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("그룹코드영문명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("그룹코드영문명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupCdEngNm","staGroupCdEngNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("그룹코드영문명");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staDelYn","edtGroupCdEngNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사용여부");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDelYn","staDelYn:0","30","100","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사용여부");
            var divList_form_divSearch_form_cboDelYn_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cboDelYn_innerdataset", obj);
            divList_form_divSearch_form_cboDelYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cboDelYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","175","50%",null,null,"123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"192\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"그룹코드한글명\"/><Cell col=\"2\" text=\"그룹코드영문명\"/><Cell col=\"3\" text=\"그룹코드설명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\" tooltiptext=\"bind:groupCdMgno\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:groupCdKornNm\" tooltiptext=\"bind:groupCdKornNm\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:groupCdEngNm\" tooltiptext=\"bind:groupCdEngNm\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:groupCdCn\" tooltiptext=\"bind:groupCdCn\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:delYn\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsStaticYn\" combocodecol=\"code\" combodatacol=\"value\" tooltiptext=\"bind:delYn\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Grid("grdDtlList","grdList:20","175",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDtlList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"192\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"코드\" tooltiptext=\"코드\"/><Cell col=\"1\" text=\"코드한글명\" tooltiptext=\"코드한글명\"/><Cell col=\"2\" text=\"코드영문명\" tooltiptext=\"코드영문명\"/><Cell col=\"3\" text=\"코드설명\" tooltiptext=\"코드설명\"/><Cell col=\"4\" text=\"정렬순서\" tooltiptext=\"정렬순서\"/><Cell col=\"5\" text=\"사용여부\" tooltiptext=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:cdMgno\" displaytype=\"normal\" edittype=\"none\" tooltiptext=\"bind:cdMgno\"/><Cell col=\"1\" text=\"bind:cdKornNm\" edittype=\"none\" displaytype=\"normal\" tooltiptext=\"bind:cdKornNm\"/><Cell col=\"2\" text=\"bind:cdEngNm\" edittype=\"none\" displaytype=\"normal\" tooltiptext=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdCn\" edittype=\"none\" displaytype=\"normal\" tooltiptext=\"bind:cdCn\"/><Cell col=\"4\" text=\"bind:sortSeqo\" displaytype=\"normal\" edittype=\"none\" tooltiptext=\"bind:sortSeqo\" editinputtype=\"digit\"/><Cell col=\"5\" text=\"bind:delYn\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsStaticYn\" combocodecol=\"code\" combodatacol=\"value\" tooltiptext=\"bind:delYn\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divLeftHeader","5","133","50%",null,null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown01",null,"0","75","32","78",null,null,null,null,null,this.divList.form.divLeftHeader.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.form.divLeftHeader.addChild(obj.name, obj);

            obj = new Button("btnExcelDown02","btnExcelDown01:3","0","75","32",null,null,null,null,null,null,this.divList.form.divLeftHeader.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.form.divLeftHeader.addChild(obj.name, obj);

            obj = new Static("staHeader","0",null,"185","30",null,"0",null,null,null,null,this.divList.form.divLeftHeader.form);
            obj.set_taborder("2");
            obj.set_text("그룹코드 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divList.form.divLeftHeader.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20","50%","21",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divRightHeader","divLeftHeader:20","133",null,null,"30","grdDtlList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown03",null,"0","75","32","78",null,null,null,null,null,this.divList.form.divRightHeader.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.form.divRightHeader.addChild(obj.name, obj);

            obj = new Button("btnExcelDown04","btnExcelDown03:3","0","75","32",null,null,null,null,null,null,this.divList.form.divRightHeader.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.form.divRightHeader.addChild(obj.name, obj);

            obj = new Static("staHeader","0",null,"185","30",null,"0",null,null,null,null,this.divList.form.divRightHeader.form);
            obj.set_taborder("2");
            obj.set_text("코드 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divList.form.divRightHeader.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5","grdList:10","140","32",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Static("stc00","364","128","572","225",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("7");
            obj.set_text("stc00");
            obj.set_background("yellow");
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
            obj = new Layout("default","",1596,687,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtGroupCdMgno","value","dsSrh","srhGroupCdMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtGroupCdKornNm","value","dsSrh","srhGroupCdKornNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtGroupCdEngNm","value","dsSrh","srhGroupCdEngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboDelYn","value","dsSrh","srhDelYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BizFldInfoM00.xfdl","");
        this.registerScript("BizFldInfoM00.xfdl", function() {
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
        	trace("[ComCdM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhGroupCdMgno", "");
        	this.dsSrh.setColumn(0, "srhGroupCdEngNm", "");
        	this.dsSrh.setColumn(0, "srhGroupCdKornNm", "");
        	this.dsSrh.setColumn(0, "srhDelYn", "");

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
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}

        	/*
        	// 반환값에 대한 처리 방법 샘플
        	// 반환받은 값 받아온다.
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	// 1. 반환받은 값 전체
        	for ( var p in objRtnValue ) {
        		if( typeof this.gfnGetParameter(this, objRtnValue[p]) == 'function') continue;	//function이 아닌것만...
        		trace(this.gfnFormat("{0}={1}", p, objRtnValue[p]));
        	}

        	// 2. objct의 property name은 팝업창에서 선언한 동일한 파라미터명으로 받는다
        	if (!this.gfnIsNull(objRtnValue["pvStrNm"]))	this.edtName.set_value(objRtnValue["pvStrNm"]);	// pvStrNm은 팝업에서 전달
        	if (!this.gfnIsNull(objRtnValue["pvDataset"]))	this.dsList.copyData(objRtnValue["pvDataset"]);


        	// Object 반환(문자열 & 데이타셋) 시 pvDataset2 가 빈값이 아니면
        	if (!this.gfnIsNull(objRtnValue["pvDataset2"])) {
        		this.dsParam.copyData(objRtnValue["pvDataset2"]);

        		// 반환받은 데이타셋을 그리드에 바인드 시키기
        		this.grdParam.createFormat();
        		for ( var i=0; i<this.grdParam.getCellCount("body"); i++ ) {
        			this.grdParam.setCellProperty("body", i, "edittype", "normal");
        		}
        	}

        	//
        	this.txtReturn.set_value("전달받은 내용 >>>> \n" +
        	                        " pvRtnValue : "+ objRtnValue["pvRtnValue"] +"\n"+
        	                        " pvStrNm : "+this.gfnEmpty(objRtnValue["pvStrNm"],"") +"\n"+
        	                        " pvDataset : "+this.gfnEmpty(objRtnValue["pvDataset"],"")
        							);
        	*/
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
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
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
        	objArgs.url 			= "/adm/cd/comCd/selectComGrpCdList.irs";
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

        // User Function Area - 사용자 정의 함수는 fnXxxx() 형태로 작성  + 기본 이벤트 function
        /**
         * @desc 사용자 함수
         * 1. 보충설명
         *
         * @param {Grid} obj 그리드
         * @param {GridClickEventInfo} e 이벤트
         * @return {boolean} true
         * @example/public
        */
        // this.fnUserFunction = function()
        // {
        //
        // };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divList.form.divSearch.form.edtGroupCdMgno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtGroupCdKornNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtGroupCdEngNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divLeftHeader.form.btnExcelDown01.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divList.form.divLeftHeader.form.btnExcelDown02.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divList.form.divLeftHeader.form.staHeader.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divList.form.divRightHeader.form.btnExcelDown03.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divList.form.divRightHeader.form.btnExcelDown04.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divList.form.divRightHeader.form.staHeader.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
        };
        this.loadIncludeScript("BizFldInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
