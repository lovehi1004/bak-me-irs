(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionM00");
            this.set_titletext("협정약정현황 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"newRvsnTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldNo\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCncldClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewRvsmTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCncldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhNewRvsmTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhNtnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,"687","30",null,"1500",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldGbn","35","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("regCd","361","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("등록유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCncldGbn","staCncldGbn:0","30",null,"32","regCd:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCncldClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNewRvsmTypeCd","670","30","121","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("신규/개정구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboRegTypeCd","471","30",null,"32","staNewRvsmTypeCd:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsRegTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnNm","1001","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNewRvsmTypeCd","staNewRvsmTypeCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsNewRvsmTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNtnNm","staNtnNm:0","30",null,"32","btnSearch:135",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"42\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"76\"/><Column size=\"170\"/><Column size=\"84\"/><Column size=\"77\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"체결국가\"/><Cell col=\"4\" rowspan=\"2\" text=\"등록유형\"/><Cell col=\"5\" text=\"원문\"/><Cell col=\"6\" rowspan=\"2\" text=\"조약번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"서명일자\"/><Cell col=\"8\" rowspan=\"2\" text=\"발효일자\"/><Cell col=\"9\" rowspan=\"2\" text=\"이력\"/><Cell col=\"10\" rowspan=\"2\" text=\"조회\" cssclass=\"bdNone\"/><Cell row=\"1\" col=\"5\" text=\"국문\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"bind:cncldClNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:ntnNm\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"bind:regTypeNm\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:cncldOrgtNm\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" text=\"bind:cncldNo\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"date\" edittype=\"none\" text=\"bind:sgntYmd\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:eftvnYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltext=\"-\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"이력\" tooltiptext=\"이력\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"조회\" tooltiptext=\"조회\" cssclass=\"bdNone\"/><Cell row=\"1\" col=\"5\" text=\"bind:cncldKrnNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1670","290","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg01.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg01.addChild(obj.name, obj);

            obj = new Div("divDetail02","1995","15","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail03","2343","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg02","2010","274","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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

            //-- Default Layout : this.divReg01.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg01.form.divReg01.form,function(p){});
            this.divReg01.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg01.form
            obj = new Layout("default","",0,0,this.divReg01.form,function(p){});
            this.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail02.form
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail03
            obj = new Layout("default","",0,0,this.divDetail03.form,function(p){});
            this.divDetail03.form.addLayout(obj.name, obj);

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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("AgrStiplPrcndM00.xfdl", function() {
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
        	//협정 상세
        	this.divDetail01.set_left(0);
        	this.divDetail01.set_top(0);
        	this.divDetail01.set_width(null);
        	this.divDetail01.set_height(null);
        	this.divDetail01.set_right(0);
        	this.divDetail01.set_bottom(0);
        	//약정 상세
        	this.divDetail02.set_left(0);
        	this.divDetail02.set_top(0);
        	this.divDetail02.set_width(null);
        	this.divDetail02.set_height(null);
        	this.divDetail02.set_right(0);
        	this.divDetail02.set_bottom(0)
        	//MOU 상세
        	this.divDetail03.set_left(0);
        	this.divDetail03.set_top(0);
        	this.divDetail03.set_width(null);
        	this.divDetail03.set_height(null);
        	this.divDetail03.set_right(0);
        	this.divDetail03.set_bottom(0)


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

        	//협정 상세
        	this.divDetail01.set_url("Biz_agrstipl::AgrStiplPrcndS01.xfdl");
        	//약정 상세
        	this.divDetail02.set_url("Biz_agrstipl::AgrStiplPrcndS02.xfdl");
        	//MOU 상세
        	this.divDetail03.set_url("Biz_agrstipl::AgrStiplPrcndS03.xfdl");


        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhCncldCd", "");
        	this.dsSrh.setColumn(0, "srhRegTypeCd", "");
        	this.dsSrh.setColumn(0, "srhNewRvsmTypeCd", "");
        	this.dsSrh.setColumn(0, "srhNtnNm", "");


        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsCncldClCd", groupId:"CNCLD_CL_CD", headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsRegTypeCd", groupId:"REG_TYPE_CD", headflag:"A" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsNewRvsmTypeCd", groupId:"NEW_RVSN_TYPE_CD", headflag:"A" , useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

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
        			// 후처리 코드
        			this.dsCncldClCd.setColumn(0, "srhCncldCd", "BGC0001");
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
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
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
         	objArgs.url 			= "/biz/agrstipl/agrStiplPrcnd/selectAgrStiplPrcndList.irs";
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
        this.fnChangeDiv = function()
        {
        	// TODO
        	trace("[sampleFormActionM00]fnChangeDiv =========================");
        	this.fnCallSearchList();
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
        	this.dsSrh.setColumn(0, "srhCncldCd", "");
        	this.dsSrh.setColumn(0, "srhRegTypeCd", "");
        	this.dsSrh.setColumn(0, "srhNewRvsmTypeCd", "");
        	this.dsSrh.setColumn(0, "srhNtnNm", "");

        };


        // 그리드내의 행 클릭
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 10)
        	{
        		var objArgs = {};
        		objArgs.cncldMgno 		= this.dsList.getColumn(e.row, "cncldMgno");
        		objArgs.cncldClNm 		= this.dsList.getColumn(e.row, "cncldClNm");
        		objArgs.cncldDgr 		= this.dsList.getColumn(e.row, "cncldDgr");

        		if(objArgs.cncldClNm == "협정"){
        			// 화면전환 협정
        			this.divList.set_visible(false);
        			this.divDetail01.set_visible(true);
        			this.divDetail02.set_visible(false);
        			this.divDetail03.set_visible(false);

        			trace("[cncldMgno:"+objArgs.cncldMgno +"|cncldClNm:"+objArgs.cncldClNm +"|cncldDgr:"+objArgs.cncldDgr);

        			this.divDetail01.form.fnChangeDiv(objArgs);
        		}else if(objArgs.cncldClNm == "약정"){
        			// 화면전환 약정
        			this.divList.set_visible(false);
        			this.divDetail01.set_visible(false);
        			this.divDetail02.set_visible(true);
        			this.divDetail03.set_visible(false);

        			trace("[cncldMgno:"+objArgs.cncldMgno +"|cncldClNm:"+objArgs.cncldClNm +"|cncldDgr:"+objArgs.cncldDgr);

        			this.divDetail02.form.fnChangeDiv(objArgs);
        		}else if(objArgs.cncldClNm == "MOU"){
        			// 화면전환 MOU
        			this.divList.set_visible(false);
        			this.divDetail01.set_visible(false);
        			this.divDetail02.set_visible(false);
        			this.divDetail03.set_visible(true);

        			trace("[cncldMgno:"+objArgs.cncldMgno +"|cncldClNm:"+objArgs.cncldClNm +"|cncldDgr:"+objArgs.cncldDgr);

        			this.divDetail03.form.fnChangeDiv(objArgs);
        		}

        	}else if(e.cell == 9){									//이력 목록 팝업
        		var sPopupId 	= "popModalHstryP01";
        		var sMnuId 		= "MN99050000";
        		var oPosition	= {width:800,height:750};
        		var objArgs		= {};
        		objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "cncldMgno");
        		objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "cncldDgr");
        		objArgs.menu	= "AGR";

        		var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);

        	}
        };
        //엑셀 다운로드
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/biz/agrstipl/agrStiplPrcnd/selectAgrPrcndListExcel.irs";

        	this.fdtExcel.set_url(url);

        	this.fdtExcel.setPostData("srhCncldCd", this.dsSrh.getColumn(0, "srhCncldCd"));
        	this.fdtExcel.setPostData("srhRegTypeCd", this.dsSrh.getColumn(0, "srhRegTypeCd"));
        	this.fdtExcel.setPostData("srhNewRvsmTypeCd", this.dsSrh.getColumn(0, "srhNewRvsmTypeCd"));
        	this.fdtExcel.setPostData("srhNtnNm", this.dsSrh.getColumn(0, "srhNtnNm"));

        	this.fdtExcel.setPostData("downloadExcelFileNm","협정약정현황목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","협정약정목록");

        	//파일다운로드 실행
        	this.fdtExcel.download();
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
            this.divList.form.divSearch.form.regCd.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.staNtnNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("AgrStiplPrcndM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
