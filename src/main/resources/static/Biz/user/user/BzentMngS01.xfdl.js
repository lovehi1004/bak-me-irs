(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzentMngS01");
            this.set_titletext("정보관리 > 업체 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userCnt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhCrno\" type=\"STRING\" size=\"256\"/><Column id=\"srhBrno\" type=\"STRING\" size=\"256\"/><Column id=\"srhGovInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"srhAcntSttsClCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsStaticYnList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">여</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","5","0",null,"131","20",null,null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            obj.set_taborder("18");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentNm","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("업체명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCrno","34","staBzentNm:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("법인등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:0","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("업체명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:0","edtBzentNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnBzentNm","edtBzentNm:8","30","52","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","btnBzentNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("업체분류");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBrno","mseCrno:30","staInstClsfCd:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstClsfCd","staInstClsfCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("업체분류");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:0","cboInstClsfCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_tooltiptext("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","1085","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("업체구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBzentClCd","staBzentClCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsResult02");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("업체구분");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","cboInstClsfCd:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("대표자명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","mseBrno:30","staRprsvNm:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("정부기관여부");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGovInstYn","staGovInstYn:0","edtRprsvNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("정부기관여부");
            obj.set_innerdataset("dsStaticYnList");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAcntSttsClCd","cboGovInstYn:30","staBzentClCd:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("승인상태");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAcntSttsClCd","staAcntSttsClCd:0","cboBzentClCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsResult03");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("승인상태");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"업체분류\"/><Cell col=\"2\" text=\"사업체명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"법인등록번호\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"업체구분\"/><Cell col=\"7\" text=\"법인전화번호\"/><Cell col=\"8\" text=\"정부기관여부\"/><Cell col=\"9\" text=\"승인상태\"/><Cell col=\"10\" text=\"사용자건수\"/><Cell col=\"11\" text=\"작업구분\"/><Cell col=\"12\" text=\"조회\" tooltiptext=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instClsfCd\" tooltiptext=\"bind:instClsfCd\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:rprsvNm\" tooltiptext=\"bind:rprsvNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:crno\" tooltiptext=\"bind:crno\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@-@@-@@@@@\"/><Cell col=\"5\" text=\"bind:brno\" tooltiptext=\"bind:brno\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@-@@-@@@@@\"/><Cell col=\"6\" text=\"bind:bzentClCd\" tooltiptext=\"bind:bzentClCd\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"7\" text=\"bind:fullCorpTelNo\" tooltiptext=\"bind:fullCorpTelNo\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:govInstYn\" tooltiptext=\"bind:govInstYn\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsStaticYnList\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"9\" text=\"bind:acntSttsClCd\" tooltiptext=\"bind:acntSttsClCd\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"10\" text=\"bind:userCnt\" tooltiptext=\"bind:userCnt\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcsGbnNm\" tooltiptext=\"bind:prcsGbnNm\" textAlign=\"center\" displaytype=\"expr:prcsGbnNo == &quot;1&quot; || prcsGbnNo == &quot;4&quot; ? &quot;buttoncontrol&quot; : &quot;normal&quot;\" padding=\"5px 10px\" edittype=\"none\" controlautosizingtype=\"none\"/><Cell col=\"12\" text=\"조회\" tooltiptext=\"조회\" textAlign=\"center\" displaytype=\"buttoncontrol\" padding=\"5px 10px\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

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

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhInstClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboBzentClCd","value","dsSrh","srhBzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.mseCrno","value","dsSrh","srhCrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.mseBrno","value","dsSrh","srhBrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboGovInstYn","value","dsSrh","srhGovInstYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboAcntSttsClCd","value","dsSrh","srhAcntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboChgClCd","value","dsSrh","srhChgClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("BzentMngS01.xfdl", function() {
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
        this.fvSearchShowHideObjList = [
        	this.divList.form.divSearch.form.staCrno
        	, this.divList.form.divSearch.form.mseCrno
        	, this.divList.form.divSearch.form.staBrno
        	, this.divList.form.divSearch.form.mseBrno
        	, this.divList.form.divSearch.form.staGovInstYn
        	, this.divList.form.divSearch.form.cboGovInstYn
        	, this.divList.form.divSearch.form.staAcntSttsClCd
        	, this.divList.form.divSearch.form.cboAcntSttsClCd
        ];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 131;			// 조회영역 펼치기시 height
        this.fvSearchHideHeight = 94;			// 조회영역 숨기기시 height

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {

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
        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.fnClearDsSrh();

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"INST_CLSF_CD"    , headflag:"A" , useYn:"Y"};		//사업체분류
        	arrParam[1] = {outDs:"dsResult02", groupId:"BZENT_CL_CD"     , headflag:"A" , useYn:"Y"};		//사업체구분
        	arrParam[2] = {outDs:"dsResult03", groupId:"ACNT_STTS_CL_CD" , headflag:"A" , useYn:"Y"};		//승인상태
        	arrParam[3] = {outDs:"dsResult04", groupId:"APLY_TYPE_CD"    , headflag:"A" , useYn:"Y"};		//변경신청구분

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화

        	// 전체관리자 권한만 해당 화면으로 접근가능 - 관리자만 선조회 가능하도록 함
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		// 화면전환 목록화면
        		this.fnCallSearchList();
        	}

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

        			this.dsResult03.set_enableevent(false);

        			for (var i = this.dsResult03.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult03.getColumn(i, "cdMgno") != "ASC0001"		// 미승인
        					&& this.dsResult03.getColumn(i, "cdMgno") != "ASC0002"		// 승인
        					&& this.dsResult03.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult03.deleteRow(i);
        				}
        			}
        			this.dsResult03.set_enableevent(true);

        			this.dsResult04.set_enableevent(false);

        			for (var i = this.dsResult04.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult04.getColumn(i, "cdMgno") != "ATC0006"	// 변경신청
        					&& this.dsResult04.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult04.deleteRow(i);
        				}
        			}
        			this.dsResult04.set_enableevent(true);

        			// 후처리 코드
        			this.divList.form.divSearch.form.cboInstClsfCd.set_index(0);
        			this.divList.form.divSearch.form.cboBzentClCd.set_index(0);
        			this.divList.form.divSearch.form.cboGovInstYn.set_index(0);
        			this.divList.form.divSearch.form.cboAcntSttsClCd.set_index(0);

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

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{

        		//사업수행자 검색 팝업
        		case "comInstPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			//팝업에서 넘어온 값 설정하기
        			this.dsSrh.setColumn(0, "srhBzentNm"    , objRtnValue["bzentNm"]        );		// 사업체명
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

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
        	objArgs.url 			= "/adm/user/instMng/selectInstMngList.irs";
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
        	trace("[BzentMngS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	trace("[UserRegM00]fnChangeDiv =========================");
        	// 검색조건 초기화 후 재조회 함
        	if (objArgs.isReLoad == "Y") {

        		// 검색용 데이터셋 초기화
        		this.fnClearDsSrh();

        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        	else {
        		this.fnCallSearchList();
        	}
        };

        /**
         * @desc 검색용 데이터셋 초기화 function
        */
        this.fnClearDsSrh = function()
        {
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhInstClsfCd", "");
        	this.dsSrh.setColumn(0, "srhRprsvNm", "");
        	this.dsSrh.setColumn(0, "srhBzentClCd", "");
        	this.dsSrh.setColumn(0, "srhCrno", "");
        	this.dsSrh.setColumn(0, "srhBrno", "");
        	this.dsSrh.setColumn(0, "srhGovInstYn", "");
        	this.dsSrh.setColumn(0, "srhAcntSttsClCd", "");
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
        	this.fnClearDsSrh();
        };


        /**
         * @description 펼치기/접기 버튼 클릭
         */
        this.btnShowHide_onclick = function(obj,e)
        {
        	trace("검색확장 버튼클릭");
        	this.fnSearchShowHide();
        };

        /**
         * @description 펼치기/접기 처리
         */
        this.fnSearchShowHide = function ()
        {
        	trace("검색확장버튼 css:" + this.divList.form.btnShowHide.cssclass);

        	if(this.divList.form.btnShowHide.cssclass == this.gvBtnSearchAreaShowCssclass)		// btn_WF_SchDown  btn_WF_SchUp  btn_WFSA_Hide
        	{
        		// 숨기기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, false);
        		this.divList.form.divSearch.set_formscrollbartype("none");
        		this.divList.form.divSearch.set_height(this.fvSearchHideHeight);
        		this.divList.form.divSearch.form.resetScroll();
        		this.divList.form.btnShowHide.set_cssclass(this.gvBtnSearchAreaHideCssclass);	// btn_WFSA_Show
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}
        	else
        	{
        		// 보이기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, true);
        		this.divList.form.divSearch.set_formscrollbartype("");
        		this.divList.form.divSearch.set_height(this.fvSearchShowHeight);
        		this.divList.form.divSearch.form.resetScroll();
        		this.divList.form.btnShowHide.set_cssclass(this.gvBtnSearchAreaShowCssclass);	// btn_WFSA_Hide
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}
        };

        /**
         * @description 사업수행자 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divList_divSearch_btnBzentNm_onclick = function(obj,e)
        {
        	var sPopupId	= "comInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:4};			// 0 : 일반사업체 제외 조회, 1 : [그외 정부기관|관장기관|위탁기관] 정부기관 조회, 2: 일반사업체 조회, 3 : 관장기관만 조회, 4 : 전체 조회
        	var oOption		= {showtitlebar:false,titletext:"사업수행자 검색"};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 엑셀다운로드 버튼 클릭
         */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/user/instMng/selectInstMngExcel.irs";

        	this.fdtExcel.set_url(url);
        	this.fdtExcel.setPostData("downloadExcelFileNm","업체목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","업체목록내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();

        };
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	// 작업구분
        	if(e.cell == 11) {
        		var prcsGbnNo = this.dsList.getColumn(e.row, "prcsGbnNo");

        		var objArgs = {};
        		objArgs.instMgno 	= this.dsList.getColumn(e.row, "instMgno");			// 신청관리번호
        		objArgs.prcsGbnNo 	= prcsGbnNo;										// 작업구분번호

        		if(prcsGbnNo == "4") {							/* 심의버튼 : 계정관리인, 계정대표자의 변경신청 case */
        			trace("[prcsGbnNo]["+prcsGbnNo+"]");
        			this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail02, objArgs);			// 업체관리 > 변경신청 처리화면
        		}
        	}

        	// 조회
        	if(e.cell == 12) {
        		var objArgs = {};
        		objArgs.instMgno 	= this.dsList.getColumn(e.row, "instMgno");			// 신청관리번호
        		objArgs.prcsGbnNo 	= prcsGbnNo;										// 작업구분번호

        		this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail03, objArgs);			// 업체관리 > 수정기능 없는 상세화면
        	}
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
            this.divList.form.divSearch.form.staBzentNm.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staCrno.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.edtBzentNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.mseCrno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.btnBzentNm.addEventHandler("onclick",this.divList_divSearch_btnBzentNm_onclick,this);
            this.divList.form.divSearch.form.staInstClsfCd.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.staBrno.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.cboInstClsfCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.mseBrno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staBzentClCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.cboBzentClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtRprsvNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboGovInstYn.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staAcntSttsClCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.cboAcntSttsClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("BzentMngS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
