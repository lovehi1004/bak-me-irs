(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AcntClsgAplyM00");
            this.set_titletext("계정폐쇄신청 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"acntType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"perfIn\" type=\"STRING\" size=\"256\"/><Column id=\"perfOut\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"clsgAplyDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHstryList", this);
            obj._setContents("<ColumnInfo><Column id=\"chgType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClNm\" type=\"STRING\" size=\"256\"/><Column id=\"clsgAplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsgAplyRsn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDt\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntMap", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdminList", this);
            obj._setContents("<ColumnInfo><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"acntType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"perfIn\" type=\"STRING\" size=\"256\"/><Column id=\"perfOut\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsStatus\" type=\"STRING\" size=\"256\"/><Column id=\"hstryBtn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsBtn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divReg","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divRepresentative","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divGrid","0","64",null,"153","30",null,null,null,null,null,this.divRepresentative.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divRepresentative.addChild(obj.name, obj);

            obj = new Grid("grdUserChgHistList","0","0",null,"150","0",null,null,null,null,null,this.divRepresentative.form.divGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계정구분\" tooltiptext=\"계정구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정고유번호\" tooltiptext=\"계정고유번호\"/><Cell col=\"2\" colspan=\"2\" text=\"인정실적수량\" tooltiptext=\"인정실적수량\"/><Cell col=\"4\" rowspan=\"2\" text=\"발행일자\" tooltiptext=\"발행일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"최종수정일자\" tooltiptext=\"최종수정일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"계정상태\" tooltiptext=\"계정상태\"/><Cell col=\"7\" rowspan=\"2\" text=\"신청상태\" tooltiptext=\"신청상태\"/><Cell row=\"1\" col=\"2\" text=\"국내\" tooltiptext=\"국내\"/><Cell row=\"1\" col=\"3\" text=\"국외\" tooltiptext=\"국외\"/></Band><Band id=\"body\"><Cell text=\"bind:acntType\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:psnAcntUnqno\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:perfIn\" displaytype=\"normal\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:perfOut\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:aprvYmd\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:mdfcnDt\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:delYn\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:clsgAplyDt\" displaytype=\"normal\" combodataset=\"dsResult05\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" textAlign=\"center\" edittype=\"none\"/></Band></Format></Formats>");
            this.divRepresentative.form.divGrid.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","237",null,"32","30",null,null,null,null,null,this.divRepresentative.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divRepresentative.addChild(obj.name, obj);

            obj = new Button("btnAply",null,"0","120","32","0",null,null,null,null,null,this.divRepresentative.form.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("폐쇄신청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("폐쇄신청");
            this.divRepresentative.form.divComBtn.addChild(obj.name, obj);

            obj = new Div("divH2","0","271",null,"60","30",null,null,null,null,null,this.divRepresentative.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divRepresentative.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divRepresentative.form.divH2.form);
            obj.set_taborder("0");
            obj.set_text("계정변경이력");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divRepresentative.form.divH2.addChild(obj.name, obj);

            obj = new Div("divHstryGrid","0","divH2:0",null,null,"30","20",null,null,null,null,this.divRepresentative.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.divRepresentative.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","0",null,null,"0","0",null,null,null,null,this.divRepresentative.form.divHstryGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHstryList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"변경유형\" tooltiptext=\"변경유형\"/><Cell col=\"1\" text=\"계정상태\" tooltiptext=\"계정상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"신청상태\" tooltiptext=\"신청상태\"/><Cell col=\"4\" text=\"신청사유\" tooltiptext=\"신청사유\"/><Cell col=\"5\" text=\"처리일자\" tooltiptext=\"처리일자\"/><Cell col=\"6\" text=\"처리사유\" tooltiptext=\"처리사유\"/></Band><Band id=\"body\"><Cell text=\"bind:chgType\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:acntSttsClNm\"/><Cell col=\"2\" text=\"bind:clsgAplyDt\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:prcsSttsCd\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:clsgAplyRsn\" textAlign=\"center\" displaytype=\"normal\" combodataset=\"dsResult07\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"5\" text=\"bind:rvwDt\" textAlign=\"center\" displaytype=\"normal\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"6\" text=\"bind:rvwOpnn\"/></Band></Format></Formats>");
            this.divRepresentative.form.divHstryGrid.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"60","30",null,null,null,null,null,this.divRepresentative.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divRepresentative.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divRepresentative.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("계정현황");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divRepresentative.form.divH1.addChild(obj.name, obj);

            obj = new Div("divAcntClsgAdmin","0","730",null,"670","0",null,"1500",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"60","30",null,null,null,null,null,this.divAcntClsgAdmin.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divAcntClsgAdmin.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divAcntClsgAdmin.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("계정폐쇄신청관리(관리자)");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divAcntClsgAdmin.form.divH1.addChild(obj.name, obj);

            obj = new Grid("grdUserChgHistList","0","60",null,"170","30",null,null,null,null,null,this.divAcntClsgAdmin.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsAdminList");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정구분\" tooltiptext=\"계정구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"계정고유번호\" tooltiptext=\"계정고유번호\"/><Cell col=\"3\" colspan=\"2\" text=\"인정실적수량\" tooltiptext=\"인정실적수량\"/><Cell col=\"5\" rowspan=\"2\" text=\"사업자명\"/><Cell col=\"6\" rowspan=\"2\" text=\"사업자등록번호\" tooltiptext=\"사업자등록번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"대표자명\" tooltiptext=\"대표자명\"/><Cell col=\"8\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"9\" rowspan=\"2\" text=\"이력조회\" tooltiptext=\"이력조회\"/><Cell col=\"10\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"작업구분\"/><Cell row=\"1\" col=\"3\" text=\"국내\" tooltiptext=\"국내\"/><Cell row=\"1\" col=\"4\" text=\"국외\" tooltiptext=\"국외\"/></Band><Band id=\"body\"><Cell text=\"bind:rn\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:acntType\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:psnAcntUnqno\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:perfIn\" displaytype=\"normal\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:perfOut\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:bzentNm\"/><Cell col=\"6\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:rprsvNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcsStatus\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:hstryBtn\" textAlign=\"center\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"10\" text=\"bind:prcsBtn\" combodataset=\"dsResult05\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" textAlign=\"center\" edittype=\"expr:prcsSttsCd == &quot;PSC0001&quot; ? &quot;button&quot; : &quot;none&quot;\" displaytype=\"expr:prcsSttsCd == &quot;PSC0001&quot; ? &quot;buttoncontrol&quot; : &quot;normal&quot;\"/></Band></Format></Formats>");
            this.divAcntClsgAdmin.addChild(obj.name, obj);

            obj = new Div("divH2","0","grdUserChgHistList:20",null,"60","30",null,null,null,null,null,this.divAcntClsgAdmin.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divAcntClsgAdmin.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divAcntClsgAdmin.form.divH2.form);
            obj.set_taborder("0");
            obj.set_text("계정변경이력");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divAcntClsgAdmin.form.divH2.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","divH2:0",null,"338","30",null,null,null,null,null,this.divAcntClsgAdmin.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHstryList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"변경유형\" tooltiptext=\"변경유형\"/><Cell col=\"1\" text=\"계정상태\" tooltiptext=\"계정상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"신청상태\" tooltiptext=\"신청상태\"/><Cell col=\"4\" text=\"신청사유\" tooltiptext=\"신청사유\"/><Cell col=\"5\" text=\"변경일자\" tooltiptext=\"변경일자\"/><Cell col=\"6\" text=\"처리사유\" tooltiptext=\"처리사유\"/></Band><Band id=\"body\"><Cell text=\"bind:chgType\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:acntSttsClNm\"/><Cell col=\"2\" text=\"bind:clsgAplyDt\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:prcsSttsCd\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:clsgAplyRsn\" textAlign=\"center\" displaytype=\"normal\" combodataset=\"dsResult07\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"5\" text=\"bind:rvwDt\" textAlign=\"center\" displaytype=\"normal\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"6\" text=\"bind:rvwOpnn\"/></Band></Format></Formats>");
            this.divAcntClsgAdmin.addChild(obj.name, obj);

            obj = new Div("divRvw","1626","266","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("divRvw");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReg
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form.divGrid.form
            obj = new Layout("default","",0,0,this.divRepresentative.form.divGrid.form,function(p){});
            this.divRepresentative.form.divGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form.divComBtn.form
            obj = new Layout("default","",0,0,this.divRepresentative.form.divComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divRepresentative.form.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form.divH2.form
            obj = new Layout("default","",0,0,this.divRepresentative.form.divH2.form,function(p){});
            this.divRepresentative.form.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form.divHstryGrid.form
            obj = new Layout("default","",0,0,this.divRepresentative.form.divHstryGrid.form,function(p){});
            this.divRepresentative.form.divHstryGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form.divH1.form
            obj = new Layout("default","",0,0,this.divRepresentative.form.divH1.form,function(p){});
            this.divRepresentative.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRepresentative.form
            obj = new Layout("default","",0,0,this.divRepresentative.form,function(p){});
            this.divRepresentative.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAcntClsgAdmin.form.divH1.form
            obj = new Layout("default","",0,0,this.divAcntClsgAdmin.form.divH1.form,function(p){});
            this.divAcntClsgAdmin.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAcntClsgAdmin.form.divH2.form
            obj = new Layout("default","",0,0,this.divAcntClsgAdmin.form.divH2.form,function(p){});
            this.divAcntClsgAdmin.form.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAcntClsgAdmin.form
            obj = new Layout("default","",0,0,this.divAcntClsgAdmin.form,function(p){});
            this.divAcntClsgAdmin.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvw
            obj = new Layout("default","",0,0,this.divRvw.form,function(p){});
            this.divRvw.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AcntClsgAplyM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionS01 Form
        * FILE NAME     : sampleFormActionS01.xfdl
        * DESCRIPTION   : 화면전환샘플 (상세)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
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
        	this.divReg.set_left(0);
        	this.divReg.set_top(0);
        	this.divReg.set_width(null);
        	this.divReg.set_height(null);
        	this.divReg.set_right(0);
        	this.divReg.set_bottom(0);

        	this.divRvw.set_left(0);
        	this.divRvw.set_top(0);
        	this.divRvw.set_width(null);
        	this.divRvw.set_height(null);
        	this.divRvw.set_right(0);
        	this.divRvw.set_bottom(0);

        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		this.divRepresentative.set_visible(false);
        		this.divAcntClsgAdmin.set_visible(true);
        		this.divAcntClsgAdmin.set_top(0);
        		this.divRepresentative.form.divComBtn.set_visible(true);
        		this.divAcntClsgAdmin.form.resetScroll();
        		this.resetScroll();
        	} else if(this.fvApp.User.roleIdMgno == "RL00000005") { // 계정대표자
        		this.divRepresentative.set_visible(true);
        		this.divAcntClsgAdmin.set_visible(false);
        		this.divRepresentative.set_top(0);
        		this.divRepresentative.form.divComBtn.set_visible(true);
        		this.divRepresentative.form.resetScroll();
        		this.resetScroll();
        	} else { // 조회만
        		this.divRepresentative.set_visible(true);
        		this.divAcntClsgAdmin.set_visible(false);
        		this.divRepresentative.set_top(0);
        		this.divRepresentative.form.divComBtn.set_visible(false);
        		this.divRepresentative.form.resetScroll();
        		this.resetScroll();
        	}
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
        	trace("[AcntClsgAplyM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 등록화면
        	this.divReg.set_url("Biz_user::/user/AcntClsgAplyS01.xfdl");

        	// 검토화면
        	this.divRvw.set_url("Biz_user::/user/AcntClsgAplyS03.xfdl");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();

        	// 검색시작
        	this.fnCallList();
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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
        		case "selectList" :
        			trace("cnt : "+this.dsCntMap.getColumn(0, "cnt"));
        			if(this.dsCntMap.getColumn(0, "cnt") == 1 || this.dsCntMap.getColumn(0, "cnt") == undefined) {
        				this.divRepresentative.form.divComBtn.form.btnAply.set_visible(false);
        				this.divRepresentative.form.divH2.set_top("divGrid:0");
        				this.divRepresentative.form.divHstryGrid.set_top("divH2:0");
        			} else {
        				this.divRepresentative.form.divComBtn.form.btnAply.set_visible(true);
        				this.divRepresentative.form.divH2.set_top("divComBtn:0");
        				this.divRepresentative.form.divHstryGrid.set_top("divH2:0");
        			}
        			this.fnCallHistList();
        			break;
        		case "saveUserList" :
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 조회
         */
        this.fnCallList = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectList";
        	var vOutds = "";
        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		objArgs.url 	= "/adm/user/acntClsgAply/selectAcntClsgAplyList.irs";
        		vOutds 			= "dsAdminList=dsAdminList";
        	// 계정대표자 권한 폐쇄신청관리변경이력이 조회 됨
        	} else if(this.fvApp.User.roleIdMgno == "RL00000005") { // 계정대표자
        		objArgs.url 	= "/biz/user/acntClsgAply/selectAcntClsgAplyList.irs";
        		vOutds 			= "dsList=dsList dsCntMap=dsCntMap dsHstryList=dsHstryList";
        	} else { // 나머지 권한 조회만
        		objArgs.url 	= "/biz/user/acntClsgAply/selectAcntClsgAplyList.irs";
        		vOutds 			= "dsList=dsList dsHstryList=dsHstryList";
        	}
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= vOutds;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // (관리자) 계정변경이력 조회
        this.fnCallHstry = function()
        {
        	this.dsSrh.deleteAll();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "instMgno", this.dsAdminList.getColumn(this.dsAdminList.rowposition, "instMgno"));
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectHstryList";
        	objArgs.url 			= "/adm/user/acntClsgAply/selectAcntClsgAplyDetail.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsHstryList=dsHstryList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.deleteAll();
        	this.dsSrh.addRow();

        	if(objArgs.status == "RVW") {
        		this.dsHstryList.deleteAll();
        		this.divRepresentative.set_visible(false);
        		this.divAcntClsgAdmin.set_visible(true);
        		this.divAcntClsgAdmin.set_top(0);
        		this.divAcntClsgAdmin.form.resetScroll();
        		this.resetScroll();
        	} else if(objArgs.status == "REG") {
        		this.divRepresentative.set_visible(true);
        		this.divAcntClsgAdmin.set_visible(false);
        		this.divRepresentative.set_top(0);
        		this.divRepresentative.form.resetScroll();
        		this.resetScroll();
        	}

        	this.fnCallList();
        };

        // (관리자)검토 처리 화면 이동
        this.fnCallRvw = function() {
        	// 화면전환
        	this.divRepresentative.set_visible(false);
        	this.divAcntClsgAdmin.set_visible(false);
        	this.divRvw.set_visible(true);

        	var objArgs = {};
        	objArgs.status		= "RVW";
        	objArgs.instMgno	= this.dsAdminList.getColumn(this.dsAdminList.rowposition, "instMgno");
        	this.divRvw.form.fnChangeDiv(objArgs);
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.
        // 폐쇄신청
        this.divRepresentative_divComBtn_btnAply_onclick = function(obj,e)
        {
        	// 화면전환
        	this.divRepresentative.set_visible(false);
        	this.divReg.set_visible(true);

        	var objArgs = {};
        	objArgs.status	= "APLY";
        	objArgs.instMgno	= this.dsList.getColumn(0, "instMgno");
        	this.divReg.form.fnChangeDiv(objArgs);
        };

        // 그리드 셀 클릭시
        this.divAcntClsgAdmin_grdUserChgHistList_oncellclick = function(obj,e)
        {
        	trace("[divAcntClsgAdmin_grdUserChgHistList_onclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);
        	this.cellNo = e.cell;

        	if(this.cellNo == 9) {
        		this.fnCallHstry(); // (관리자)계정변경이력 조회
        	} else if(this.cellNo == 10) {
        		if("PSC0001" == this.dsAdminList.getColumn(this.dsAdminList.rowposition, "prcsSttsCd")){
        			this.fnCallRvw();	// (관리자)검토 처리 화면 이동
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divRepresentative.form.divGrid.form.grdUserChgHistList.addEventHandler("oncloseup",this.divGrid_grdUserChgHistList_oncloseup,this);
            this.divRepresentative.form.divComBtn.form.btnAply.addEventHandler("onclick",this.divRepresentative_divComBtn_btnAply_onclick,this);
            this.divRepresentative.form.divH2.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divRepresentative.form.divHstryGrid.form.grdInstChgHistList.addEventHandler("oncellclick",this.divHstryGrid_grdInstChgHistList_oncellclick,this);
            this.divRepresentative.form.divH1.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divAcntClsgAdmin.form.divH1.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divAcntClsgAdmin.form.grdUserChgHistList.addEventHandler("oncellclick",this.divAcntClsgAdmin_grdUserChgHistList_oncellclick,this);
            this.divAcntClsgAdmin.form.divH2.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
        };
        this.loadIncludeScript("AcntClsgAplyM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
