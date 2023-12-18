(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserMngM00");
            this.set_titletext("사용자관리 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"fullHdponNo\" type=\"STRING\" size=\"256\"/><Column id=\"acntRprsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"infoPrvtNtiYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cntnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"upBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsGbnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhInstClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBrno\" type=\"STRING\" size=\"256\"/><Column id=\"srhUpInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhUpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhLgnId\" type=\"STRING\" size=\"256\"/><Column id=\"srhFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"srhUserClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhAcntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhSearchType\" type=\"STRING\" size=\"256\"/><Column id=\"srhSearchStartYmd\" type=\"STRING\" size=\"256\"/><Column id=\"srhSearchEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCal02", this);
            obj._setContents("<ColumnInfo><Column id=\"FromDt\" type=\"STRING\" size=\"256\"/><Column id=\"ToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
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

            obj = new Div("divSearch","0","0",null,"168","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기관/사업체분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("기관/사업체분류");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentNm","385","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기관/사업체명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("기관/사업체명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("기관/사업체명");
            obj.set_maxlength("100");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCrno","edtBzentNm:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staCrno:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_tooltiptext("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staUpInstNm","mseBrno:30","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("상위기관");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("상위기관");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstClsfCd","staInstClsfCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsResult02");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("기관/사업체분류");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staLgnId","34","staInstClsfCd:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("아이디");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:0","cboInstClsfCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staFlnm","edtLgnId:30","staBzentNm:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("성명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:0","edtBzentNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("성명");
            obj.set_maxlength("15");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserClCd","edtFlnm:30","staCrno:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("계정구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserClCd","staUserClCd:0","mseBrno:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsResult03");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("계정구분");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAcntSttsClCd","cboUserClCd:30","staUpInstNm:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("계정상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("계정상태");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUpInstNm","staUpInstNm:0","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("상위기관");
            obj.set_maxlength("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAcntSttsClCd","staAcntSttsClCd:0","edtUpInstNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("계정상태");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnUpInstNm","edtUpInstNm:8","30","52","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","174","edtLgnId:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("조회구분");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divList_form_divSearch_form_cboSearchType_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cboSearchType_innerdataset", obj);
            divList_form_divSearch_form_cboSearchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">가일일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">접속일자</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cboSearchType_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCalFromTo","cboSearchType:30","staFlnm:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("조회기간");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","staCalFromTo:0","edtFlnm:5","252","30",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            obj.set_tooltiptext("조회기간");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchType","34","staLgnId:5","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("조회구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"110\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"기관/사업체분류\"/><Cell col=\"2\" text=\"기관/사업체명\"/><Cell col=\"3\" text=\"사업체구분\" tooltiptext=\"사업체구분\"/><Cell col=\"4\" text=\"대표자명\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"아이디\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"휴대폰번호\" tooltiptext=\"휴대폰번호\"/><Cell col=\"9\" text=\"계정구분\"/><Cell col=\"10\" text=\"계정상태\"/><Cell col=\"11\" text=\"가입일자\"/><Cell col=\"12\" text=\"접속일자\"/><Cell col=\"13\" text=\"상위기관명\"/><Cell col=\"14\" text=\"관리\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:instClsfCd\" displaytype=\"combotext\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" tooltiptext=\"bind:instClsfCd\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\"/><Cell col=\"3\" displaytype=\"combotext\" combodataset=\"dsResult04\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" text=\"bind:bzentClCd\" tooltiptext=\"bind:bzentClCd\"/><Cell col=\"4\" text=\"bind:rprsvNm\" textAlign=\"center\" tooltiptext=\"bind:rprsvNm\"/><Cell col=\"5\" text=\"bind:brno\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"@@@-@@-@@@@@\" maskedittype=\"string\" tooltiptext=\"bind:brno\"/><Cell col=\"6\" text=\"bind:lgnId\" textAlign=\"center\" tooltiptext=\"bind:lgnId\"/><Cell col=\"7\" text=\"bind:flnm\" textAlign=\"center\" tooltiptext=\"bind:flnm\"/><Cell col=\"8\" text=\"bind:fullHdponNo\" tooltiptext=\"bind:fullHdponNo\"/><Cell col=\"9\" text=\"bind:userClCd\" displaytype=\"combotext\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" tooltiptext=\"bind:userClCd\"/><Cell col=\"10\" text=\"bind:acntSttsClCd\" displaytype=\"combotext\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" tooltiptext=\"bind:acntSttsClCd\"/><Cell col=\"11\" text=\"bind:aprvYmd\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\" textAlign=\"center\" tooltiptext=\"bind:aprvYmd\"/><Cell col=\"12\" text=\"bind:cntnYmd\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\" textAlign=\"center\" tooltiptext=\"bind:cntnYmd\"/><Cell col=\"13\" text=\"bind:upBzentNm\" tooltiptext=\"bind:upBzentNm\"/><Cell col=\"14\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"5px 10px\" text=\"bind:acntSttsGbnNm\" tooltiptext=\"bind:acntSttsGbnNm\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"101","32","btnExcelDown:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자관리 상세화면");
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

            obj = new Div("divDetail02","1626","285","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자관리 등록화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form.divCalFromTo.form,function(p){});
            this.divList.form.divSearch.form.divCalFromTo.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divDetail02
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhInstClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.edtUpInstNm","value","dsSrh","srhUpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.edtLgnId","value","dsSrh","srhLgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.edtFlnm","value","dsSrh","srhFlnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboUserClCd","value","dsSrh","srhUserClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboAcntSttsClCd","value","dsSrh","srhAcntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboSearchType","value","dsSrh","srhSearchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divList.form.divSearch.form.mseBrno","value","dsSrh","srhBrno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("UserMngM00.xfdl", function() {
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
        	this.divList.form.divSearch.form.staLgnId
        	, this.divList.form.divSearch.form.edtLgnId
        	, this.divList.form.divSearch.form.staFlnm
        	, this.divList.form.divSearch.form.edtFlnm
        	, this.divList.form.divSearch.form.staUserClCd
        	, this.divList.form.divSearch.form.cboUserClCd
        	, this.divList.form.divSearch.form.staAcntSttsClCd
        	, this.divList.form.divSearch.form.cboAcntSttsClCd
        ];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 168;			// 조회영역 펼치기시 height
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

        	//등록화면
        	this.divDetail02.set_left(0);
        	this.divDetail02.set_top(0);
        	this.divDetail02.set_width(null);
        	this.divDetail02.set_height(null);
        	this.divDetail02.set_right(0);
        	this.divDetail02.set_bottom(0);

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

        	// 상세화면
        	this.divDetail01.set_url("Biz_user::user/UserMngS01.xfdl");

        	// 등록화면
        	this.divDetail02.set_url("Biz_user::user/UserMngS02.xfdl");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.fnClearDsSrh();

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"ACNT_STTS_CL_CD" , headflag:"A" , useYn:"Y"};					//계정상태구분코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD"  , headflag:"A" , useYn:"Y"};						//기관분류코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"USER_CL_CD"  , headflag:"A" , useYn:"Y"};						//사용자구분코드
        	arrParam[3] = {outDs:"dsResult04", groupId:"BZENT_CL_CD" , headflag:"A" , useYn:"Y"};						//사업체구분코드

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */

        	// From-To 달력 초기화 호출
        	var objParam = { objDs:this.dsCal02									// 바인딩 데이터셋
        					,sBindFromCol:"FromDt"								// 바인딩 컬럼(From)
        					,sBindToCol:"ToDt"									// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"dayFromTo"							// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divList.form.divSearch.form.divCalFromTo.form.fnInitCommonCalendar(this, objParam);

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
         * @description 페이징처리 호출 CallBack 함수(선택)
         */
        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        /**
         * @description 공통달력 호출 후 callback(선택)
         */
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "dayFromTo" :		// From-To달력
        			// 후처리 코드
        			var arrRtn = this.divList.form.divSearch.form.divCalFromTo.form.fnGetDay();
        			this.dsSrh.setColumn(0, "srhSearchStartYmd"    , arrRtn[0]     );		// 조회시작일자
        			this.dsSrh.setColumn(0, "srhSearchEndYmd"    , arrRtn[1]     );			// 조회종료일자
        			trace("[fnCalCallback]objRtn:"+arrRtn);

        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			// 후처리 코드
        			this.divList.form.divSearch.form.cboInstClsfCd.set_index(0);
        			this.divList.form.divSearch.form.cboUserClCd.set_index(0);
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
        		//상위기관 검색 팝업
        		case "comUpInstPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        			//팝업에서 넘어온 값 설정하기
        			this.dsSrh.setColumn(0, "srhUpInstMgno"    , objRtnValue["instMgno"]     );		// 상위기관관리번호
        			this.dsSrh.setColumn(0, "srhUpInstNm"      , objRtnValue["bzentNm"]       );		// 상위기관명

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
        	objArgs.url 			= "/adm/user/userMng/selectUserMngList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
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
        	trace("[UserMngM00]fnChangeDiv =========================");
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
        	this.dsSrh.setColumn(0, "srhInstClsfCd", "");
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhCrno", "");
        	this.dsSrh.setColumn(0, "srhUpInstMgno", "");
        	this.dsSrh.setColumn(0, "srhUpInstNm", "");
        	this.dsSrh.setColumn(0, "srhLgnId", "");
        	this.dsSrh.setColumn(0, "srhFlnm", "");
        	this.dsSrh.setColumn(0, "srhUserClCd", "");
        	this.dsSrh.setColumn(0, "srhAcntSttsClCd", "");
        	this.dsSrh.setColumn(0, "srhSearchType", "1");
        	this.dsSrh.setColumn(0, "srhSearchStartYmd", "");
        	this.dsSrh.setColumn(0, "srhSearchEndYmd", "");

        	this.divList.form.divSearch.form.divCalFromTo.form.fnSetDay("", "");
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
         * @description 그리드내의 행 클릭
         */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	//작업구분
        	if(e.cell == 14) {
        		var objArgs = {};
        		objArgs.userId 	= this.dsList.getColumn(e.row, "userId");			// 사용자ID

        		// 화면전환 상세화면
        		this.divList.set_visible(false);
        		this.divDetail01.set_visible(true);
        		this.divDetail02.set_visible(false);

        		trace("[userId:"+objArgs.userId +"]");

        		this.divDetail01.form.fnChangeDiv(objArgs);
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출

        	}
        };

        /**
         * @description 엑셀다운로드 버튼 클릭
         */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/user/userMng/selectUserMngExcel.irs";

        	this.fdtExcel.set_url(url);
        	this.fdtExcel.setPostData("downloadExcelFileNm","사용자목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","사용자목록내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();

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
         * @description 상위기관 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divList_divSearch_btnUpInstNm_onclick = function(obj,e)
        {
        	var sPopupId	= "comUpInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:1};			// 0 : 일반사업체 제외 조회, 1 : [그외 정부기관|관장기관|위탁기관] 정부기관 조회, 2: 일반사업체 조회, 3 : 관장기관만 조회, 4 : 전체 조회
        	var oOption		= {showtitlebar:false,titletext:"상위기관 검색"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 사용자등록 버튼 클릭 - 화면전환 등록화면
        */
        this.divList_btnReg_onclick = function(obj,e)
        {
        	// 화면전환 상세화면
        	this.divList.set_visible(false);
        	this.divDetail01.set_visible(false);
        	this.divDetail02.set_visible(true);

        	this.divDetail02.form.fnChangeDiv();
        	// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
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
            this.divList.form.divSearch.form.staInstClsfCd.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staBzentNm.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.edtBzentNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.mseBrno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staUpInstNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.cboInstClsfCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staLgnId.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.edtLgnId.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staFlnm.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboUserClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staAcntSttsClCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.cboAcntSttsClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.btnUpInstNm.addEventHandler("onclick",this.divList_divSearch_btnUpInstNm_onclick,this);
            this.divList.form.divSearch.form.cboSearchType.addEventHandler("onitemchanged",this.divList_divSearch_cboSearchType_onitemchanged,this);
            this.divList.form.divSearch.form.cboSearchType.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staCalFromTo.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.divCalFromTo.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staSearchType.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.dsCal02.addEventHandler("oncolumnchanged",this.dsCal02_oncolumnchanged,this);
        };
        this.loadIncludeScript("UserMngM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
