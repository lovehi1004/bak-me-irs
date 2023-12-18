(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserRegM00");
            this.set_titletext("협정 · 약정 정보");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsGbnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"srhAplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult04", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldGbn","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사업체명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staCncldGbn:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("regCd","edtBzentNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("대표자명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","regCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNewRvsmTypeCd","edtRprsvNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("성명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staNewRvsmTypeCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("성명");
            obj.set_maxlength("15");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnNm","edtFlnm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("처리상태");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyPrcsTypeCd","staNtnNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("처리상태");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"사업체명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"아이디\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"계정구분\"/><Cell col=\"8\" text=\"신청유형\"/><Cell col=\"9\" text=\"신청일자\"/><Cell col=\"10\" text=\"처리일자\"/><Cell col=\"11\" text=\"처리상태\"/><Cell col=\"12\" text=\"작업구분\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instClsfCd\" tooltiptext=\"bind:instClsfCd\" displaytype=\"combotext\" combodataset=\"dsResult02\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\"/><Cell col=\"3\" text=\"bind:rprsvNm\" tooltiptext=\"bind:rprsvNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:brno\" tooltiptext=\"bind:brno\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@-@@-@@@@@\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:lgnId\" tooltiptext=\"bind:lgnId\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:flnm\" tooltiptext=\"bind:flnm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:userClCd\" tooltiptext=\"bind:userClCd\" displaytype=\"combotext\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"8\" displaytype=\"combotext\" combodataset=\"dsResult04\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" text=\"bind:aplyTypeCd\"/><Cell col=\"9\" text=\"bind:aplyYmd\" tooltiptext=\"bind:aplyYmd\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\"/><Cell col=\"10\" text=\"bind:aplyPrcsYmd\" tooltiptext=\"bind:aplyPrcsYmd\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\"/><Cell col=\"11\" text=\"bind:aplyPrcsTypeCd\" tooltiptext=\"bind:aplyPrcsTypeCd\" displaytype=\"combotext\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"12\" text=\"bind:aplyPrcsGbnNm\" padding=\"5px 10px\" displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"bind:aplyPrcsGbnNm\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록관리 상세화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg02.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this.divReg02.form);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg02.form.divReg02.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.form.divReg02.addChild(obj.name, obj);

            obj = new Div("divReg02_00","2020","284","294","184",null,null,null,null,null,null,this.divReg02.form);
            obj.set_taborder("2");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg02.form.divReg02_00.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.form.divReg02_00.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this.divReg02.form.divReg02_00.form);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.form.divReg02_00.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg02.form.divReg02_00.form.divReg02.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg02.form.divReg02_00.form.divReg02.addChild(obj.name, obj);

            obj = new Div("div00","201","81","840","337",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("협정 · 약정 정보");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail01
            obj = new Layout("default","",0,0,this.divDetail01.form,function(p){});
            this.divDetail01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg01.form,function(p){});
            this.divReg02.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02.form.divReg01.form,function(p){});
            this.divReg02.form.divReg02.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02.form,function(p){});
            this.divReg02.form.divReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02_00.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02_00.form.divReg01.form,function(p){});
            this.divReg02.form.divReg02_00.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02_00.form.divReg02.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02_00.form.divReg02.form.divReg01.form,function(p){});
            this.divReg02.form.divReg02_00.form.divReg02.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02_00.form.divReg02.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02_00.form.divReg02.form,function(p){});
            this.divReg02.form.divReg02_00.form.divReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form.divReg02_00.form
            obj = new Layout("default","",0,0,this.divReg02.form.divReg02_00.form,function(p){});
            this.divReg02.form.divReg02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg02.form
            obj = new Layout("default","",0,0,this.divReg02.form,function(p){});
            this.divReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtFlnm","value","dsSrh","srhFlnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboAplyPrcsTypeCd","value","dsSrh","srhAplyPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("AgrStiplInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionM00 Form
        * FILE NAME     : sampleFormActionM00.xfdl
        * DESCRIPTION   : 화면전환샘플 (목록)
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
        	// 그리드 설정
        	//this.grdList.griduserproperty = "none";

        	// div 위치 조정 , divDetail (상세) , divReg (등록)
        	//상세화면
        	this.divDetail01.set_left(0);
        	this.divDetail01.set_top(0);
        	this.divDetail01.set_width(null);
        	this.divDetail01.set_height(null);
        	this.divDetail01.set_right(0);
        	this.divDetail01.set_bottom(0);

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
        	trace("[AprvAplyM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 상세, 등록화면 연결
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\agrstipl\ ==> Biz_agrstipl::xxxxx.xfdl
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\biz\aply\ ==> Biz_biz::aply/xxxxx.xfdl

        	// 엑셀다운로드 버튼
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		this.divList.form.btnExcelDown.set_width(119);
        	} else {
        		this.divList.form.btnExcelDown.set_width(0);
        	}

        	// 상세화면
        	this.divDetail01.set_url("Biz_user::user/UserRegS01.xfdl");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhRprsvNm", "");
        	this.dsSrh.setColumn(0, "srhFlnm", "");
        	this.dsSrh.setColumn(0, "srhAplyPrcsTypeCd", "");

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"APLY_PRCS_TYPE_CD" , headflag:"A" , useYn:"Y"};		//처리유형코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD"  , useYn:"Y"};		//기관분류코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"USER_CL_CD"  , useYn:"Y"};			//사용자구분코드
        	arrParam[3] = {outDs:"dsResult04", groupId:"APLY_TYPE_CD"  , useYn:"Y"};			//신청구분코드

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
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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
        				if ( this.dsResult01.getColumn(i, "cdMgno") != "APC0001"	// 신청
        					&& this.dsResult01.getColumn(i, "cdMgno") != "APC0002"	// 심의반려
        					&& this.dsResult01.getColumn(i, "cdMgno") != "APC0003"	// 심의승인
        					&& this.dsResult01.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult01.deleteRow(i);
        				}
        			}
        			this.dsResult01.set_enableevent(true);

        			// 후처리 코드
        			this.divList.form.divSearch.form.cboAplyPrcsTypeCd.set_index(0);
        			trace("코드 수신 완료!!");
        			break;
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
        		case "msgAlert01" :
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

        /**
         * @description 목록조회
         */
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");

        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		callUrl 			= "/adm/user/userReg/selectUserRegList.irs";
        	}else {
        		callUrl 			= "/biz/user/userReg/selectUserRegList.irs";
        	}

        	// 공통Transaction 호출
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

        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	trace("[UserRegM00]fnChangeDiv =========================");
        	// 검색조건 초기화 후 재조회 함
        	if (objArgs.isReLoad == "Y") {
        		// 검색용 데이터셋 초기화
        		this.dsSrh.setColumn(0, "srhBzentNm", "");
        		this.dsSrh.setColumn(0, "srhRprsvNm", "");
        		this.dsSrh.setColumn(0, "srhFlnm", "");
        		this.dsSrh.setColumn(0, "srhAplyPrcsTypeCd", "");

        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        	else {
        		this.fnCallSearchList();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhRprsvNm", "");
        	this.dsSrh.setColumn(0, "srhFlnm", "");
        	this.dsSrh.setColumn(0, "srhAplyPrcsTypeCd", "");

        };

        /**
         * @description 그리드내의 행 클릭
         */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	//작업구분
        	if(e.cell == 12) {
        		var objArgs = {};
        		objArgs.aplyMgno 	= this.dsList.getColumn(e.row, "aplyMgno");			// 신청관리번호
        		objArgs.aplyPrcsTypeCd	= this.dsList.getColumn(e.row, "aplyPrcsTypeCd");		// 처리상태

        		// 화면전환 상세화면
        		this.divList.set_visible(false);
        		this.divDetail01.set_visible(true);

        		trace("[aplyMgno:"+objArgs.aplyMgno +"]");

        		this.divDetail01.form.fnChangeDiv(objArgs);
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출

        	}
        };

        /**
         * @description 엑셀다운로드 버튼 클릭
         */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/user/userReg/selectUserRegExcel.irs";

        	this.fdtExcel.set_url(url);
        	this.fdtExcel.setPostData("downloadExcelFileNm","등록관리목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","등록관리목록내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staCncldGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.edtBzentNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.regCd.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.edtRprsvNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staNtnNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.cboAplyPrcsTypeCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("AgrStiplInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
