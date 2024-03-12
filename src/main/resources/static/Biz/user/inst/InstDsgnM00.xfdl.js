(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("InstDsgnM00");
            this.set_titletext("관장기관지정 목록 등록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"all\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"irbInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rtadtiScsnInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhRprsvNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsBizFldCd</Col></Row><Row><Col id=\"srhCd\">dsBizDtlsFldCd</Col></Row><Row><Col id=\"srhCd\">dsInstCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBzentClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1400",null,"410",null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","5","175",null,null,"35","75","1400",null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"190\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"할당대상업체여부\"/><Cell col=\"3\" rowspan=\"2\" text=\"사업체\"/><Cell col=\"4\" rowspan=\"2\" text=\"대표자\"/><Cell col=\"5\" rowspan=\"2\" text=\"사업자&#13;&#10;등록번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"일괄변경\"/><Cell col=\"7\" text=\"방법론\" edittype=\"normal\"/><Cell col=\"8\" text=\"사업\"/><Cell col=\"9\" text=\"권리의무승계\"/><Cell row=\"1\" col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd\" combocodecol=\"code\" combodatacol=\"name\" text=\"all\" combotype=\"dropdown\" padding=\"6px 7px\"/><Cell row=\"1\" col=\"8\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd\" combodatacol=\"name\" combocodecol=\"code\" text=\"all\" padding=\"6px 7px\"/><Cell row=\"1\" col=\"9\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"all\" combodataset=\"dsInstCd\" combodatacol=\"name\" combocodecol=\"code\" padding=\"6px 7px\"/></Band><Band id=\"body\"><Cell tooltiptext=\"bind:chk\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" tooltiptext=\"bind:no\" text=\"bind:no\" textAlign=\"center\"/><Cell col=\"2\" tooltiptext=\"bind:bzentClCdNm\" text=\"bind:bzentClCdNm\"/><Cell col=\"3\" tooltiptext=\"bind:bzentNm\" text=\"bind:bzentNm\"/><Cell col=\"4\" tooltiptext=\"bind:rprsvNm\" text=\"bind:rprsvNm\"/><Cell col=\"5\" tooltiptext=\"bind:brno\" text=\"bind:brno\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:all\" tooltiptext=\"bind:all\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd2\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:mhdlgInstMgno\"/><Cell col=\"8\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd2\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:irbInstMgno\"/><Cell col=\"9\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsInstCd2\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:rtadtiScsnInstMgno\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","5","grdList:20",null,"21","35",null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnAgreeReg",null,"133","88","32","35",null,null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","30",null,"1400",null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_accessibilitylabel("사업체명");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldGbn","35","30","145","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("할당대상업체여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNewRvsmTypeCd","400","30","89","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstClsfCd","staCncldGbn:10","30",null,"32","staNewRvsmTypeCd:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsBzentClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("할당대상업체여부");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnNm","790","30","80","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staNewRvsmTypeCd:0","30",null,"32","staNtnNm:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staNtnNm:0","30","240","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Div("divReg03","2343","280","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg03.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg03.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this.divReg03.form);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg03.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg03.form.divReg02.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg03.form.divReg02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divReg03.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg03.form.divReg01.form,function(p){});
            this.divReg03.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg03.form.divReg02.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg03.form.divReg02.form.divReg01.form,function(p){});
            this.divReg03.form.divReg02.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg03.form.divReg02.form
            obj = new Layout("default","",0,0,this.divReg03.form.divReg02.form,function(p){});
            this.divReg03.form.divReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg03.form
            obj = new Layout("default","",0,0,this.divReg03.form,function(p){});
            this.divReg03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.cboCncldGbn","value","dsSrh","srhCncldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboRegTypeCd","value","dsSrh","srhRegTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboNewRvsmTypeCd","value","dsSrh","srhNewRvsmTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.edtNtnNm","value","dsSrh","srhNtnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.cboPrcsTypeCd","value","dsSrh","srhPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.cboBizFldCd","value","dsSrh","srhBizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboBizDtlsFldCd","value","dsSrh","srhBizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboBizTypeCd","value","dsSrh","srhBizTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboBizScalCd","value","dsSrh","srhBizScalCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divList.form.divSearch.form.cboInstMngNo","value","dsSrh","srhInstMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divList.form.divSearch.form.cboAddDataYn","value","dsSrh","srhAddDataYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhBzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divList.form.divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("InstDsgnM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : InstDsgnM00 Form
        * FILE NAME     : InstDsgnM00.xfdl
        * DESCRIPTION   : 관장기관지정 (목록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    김광용	     최초생성
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

        	this.divList.form.grdList.griduserproperty = "!sort";
        	// div 위치 조정 , divDetail (상세) , divReg (등록)


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
        	trace("[InstDsgnM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 상세, 등록화면 연결
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\agrstipl\ ==> Biz_agrstipl::xxxxx.xfdl
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\biz\aply\ ==> Biz_biz::aply/xxxxx.xfdl

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBzentClCd", "");
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhRprsvNm", "");


        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsInstClsfCd", groupId:"INST_CLSF_CD", headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsBzentClCd", groupId:"BZENT_CL_CD", headflag:"A" , useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");


        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallCommonCodeList();
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
        			// 후처리 코드
        			//this.dsCncldClCd.setColumn(0, "srhCncldCd", "BGC0001");
        			trace("코드 수신 완료!!");
        			break;
        		default:
        			break;
        	}
        };

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
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		case "searchFld" :
        			var nRow = this.dsInstCd.insertRow(0);
        			this.dsInstCd.setColumn(nRow,"code", "all");
        			this.dsInstCd.setColumn(nRow,"name", "일괄변경");

        			var nRow2 =this.dsInstCd2.insertRow(0);
        			this.dsInstCd2.setColumn(nRow2,"code", "");
        			this.dsInstCd2.setColumn(nRow2,"name", "선택");
        			this.divList.form.grdList.set_enableredraw(false);
        			this.divList.form.grdList.set_enableredraw(true);
        			break;

        		case "updateInstDsgn" :
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	//페이지 반영
        			this.fnCallSearchList(); // 조회함수호출
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        //공통테이블 정보 호출
        this.fnCallCommonCodeList = function()
        {
        	trace("searchFldsearchFldsearchFldsearchFld목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchFld";
         	objArgs.url 			= "/common/code/selectUserCommonCodeList.irs";
         	objArgs.inds      		= "dsPrivCd=dsPrivCd";
         	objArgs.outds     		= "dsInstCd=dsInstCd dsInstCd2=dsInstCd" 			//관장기관
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/adm/inst/instDsgn/selectInstDsgnList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.saveInstDsgn  = function()
        {
        	trace("관장기관 수정 저장...");

        	var objArgs = {};
         	objArgs.svcId 			= "updateInstDsgn";
         	objArgs.url 			= "/adm/inst/instDsgn/updateInstDsgn.irs";
         	objArgs.inds      		= "dsList=dsList:U";
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
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function()
        {
        	// TODO
        	trace("[InstDsgnM00]fnChangeDiv =========================");
        	this.fnCallCommonCodeList(); //관장기관 목록 불러오기
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
        	this.dsSrh.setColumn(0, "srhBzentClCd", "");
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhRprsvNm", "");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        // 그리드 일괄변경
        this.divList_grdList_oncloseup = function(obj,e)
        {
        	trace("[dsList_oncloseup]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col+"|e.value:"+e.value);

        	if(e.cell == 6) {
        		if(e.value != "all") {
        			trace("11"+e.row+"|"+e.value);
        			this.dsList.setColumn(e.row, "mhdlgInstMgno", e.value);
        			this.dsList.setColumn(e.row, "irbInstMgno", e.value);
        			this.dsList.setColumn(e.row, "rtadtiScsnInstMgno", e.value);
        		}
        	} else if([7, 8, 9].includes(e.cell)) {
         		switch(e.cell) {
         			case  7:
         				this.dsList.setColumn(e.row, "mhdlgInstMgno", e.value);
         				break;
         			case  8:
         				this.dsList.setColumn(e.row, "irbInstMgno", e.value);
         				break;
         			case  13:
         				this.dsList.setColumn(e.row, "rtadtiScsnInstMgno", e.value);
         				break;
         		}
        	}

         	if([6, 7, 8, 9].includes(e.cell)) {
         		obj.updateToDataset();
         	}

        	// head
        	if(e.row < 0 && e.value != "all") {
        		if([7, 8, 9].includes(e.col)) {		/* 병합cell은 cell 값이 다름 col 써야됨 */
        			for (var i = this.dsList.rowcount - 1; i >= 0; i--) {
        				switch(e.col) {
        					case  7:
        						this.dsList.setColumn(i, "mhdlgInstMgno", e.value);
        						break;
        					case  8:
        						this.dsList.setColumn(i, "irbInstMgno", e.value);
        						break;
        					case  9:
        						this.dsList.setColumn(i, "rtadtiScsnInstMgno", e.value);
        						break;
        					default :
        						break;
        				}
        			}
        		}
             }
        };

        //저장 버튼
        this.divList_btnAgreeReg_onclick = function(obj,e)
        {

        	if(this.dsList.rowcount == 0) {
        		this.gfnShowMessage(this, ["Alert","저장할 대상이 존재하지 않습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	var changedRowCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var chk = this.dsList.getColumn(i, "chk");
        		trace("[index]["+i+"][chk]["+chk+"]");
        		if(chk == "Y") {
        			changedRowCnt++;
        		}
        	}

        	if(changedRowCnt == 0) {
        		this.gfnShowMessage(this, "I000008", "", "");
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.saveInstDsgn();
        		}
        	});

        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	trace("[columnid]["+e.columnid+"][row]["+e.row+"]")

        	// 변경항목 표시 - 그리드
        	this.setEffectGrid();
        };


        /**
         * @description 변경항목 표시 - 그리드
        */
        this.setEffectGrid = function()
        {
        	this.dsList.set_enableevent(false);

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		// 값이 변경되었다면
        		if(
        			   this.dsList.getColumn(i, "mhdlgInstMgno")      != this.dsList.getOrgColumn(i, "mhdlgInstMgno")
        			|| this.dsList.getColumn(i, "irbInstMgno")        != this.dsList.getOrgColumn(i, "irbInstMgno")
        			|| this.dsList.getColumn(i, "rtadtiScsnInstMgno") != this.dsList.getOrgColumn(i, "rtadtiScsnInstMgno")
        		) {
        			this.dsList.setColumn(i, "chk", "Y");
        			trace("[변경됨]");
        		} else {
        			this.dsList.setColumn(i, "chk", "N");
        			trace("[변경안됨]");
        		}
        	}

        	this.dsList.set_enableevent(true);
        };
        //검색 Enter 키 입력
        this.InstDsgnM00_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.divList.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);

        		this.dsSrh.setColumn(0, "srhBzentNm", this.divList.form.divSearch.form.edtBzentNm.text);
        		this.dsSrh.setColumn(0, "srhRprsvNm", this.divList.form.divSearch.form.edtRprsvNm.text);

        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onkeydown",this.InstDsgnM00_onkeydown,this);
            this.divList.form.grdList.addEventHandler("oncloseup",this.divList_grdList_oncloseup,this);
            this.divList.form.grdList.addEventHandler("onheadclick",this.divList_grdList_onheadclick,this);
            this.divList.form.grdList.addEventHandler("onheadvaluechanged",this.divList_grdList_onheadvaluechanged,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnAgreeReg.addEventHandler("onclick",this.divList_btnAgreeReg_onclick,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staCncldGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staNtnNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("InstDsgnM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
