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
            this.set_titletext("등록관리 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRegClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"buttonName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhRprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhCrno\" type=\"STRING\" size=\"256\"/><Column id=\"srhBrno\" type=\"STRING\" size=\"256\"/><Column id=\"srhGovInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"srhAplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhLgnId\" type=\"STRING\" size=\"256\"/><Column id=\"srhFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"srhUserClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhAplyRegClCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsResult05", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,"420",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"168","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            obj.set_accessibilitylabel("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            obj.set_accessibilitylabel("초기화");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentNm","35","30","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업체/기관명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사업체/기관명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","35","staBzentNm:5","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("업체구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:0","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사업체/기관명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_accessibilitylabel("사업체/기관명");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBzentClCd","staBzentClCd:0","edtBzentNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsResult05");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("업체구분");
            obj.set_accessibilitylabel("업체구분");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","361","30","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업체/기관분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사업체/기관분류");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","cboBzentClCd:30","staInstClsfCd:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("대표자명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstClsfCd","staInstClsfCd:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsResult02");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사업체/기관분류");
            obj.set_accessibilitylabel("사업체/기관분류");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:0","cboInstClsfCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAplyRegClCd","cboInstClsfCd:30","34","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("신청등록구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCrno","edtRprsvNm:30","staAplyRegClCd:5","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("법인등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","35","staBzentClCd:5","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("정부기관여부");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGovInstYn","staGovInstYn:0","cboBzentClCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("정부기관여부");
            obj.set_innerdataset("dsStaticYnList");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_accessibilitylabel("정부기관여부");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnBzentNm","edtBzentNm:7","30","53","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_accessibilitylabel("검색");
            obj.set_accessibilitydescription("팝업");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyRegClCd","staAplyRegClCd:0","34","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsResult04");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("신청등록구분");
            obj.set_accessibilitylabel("신청등록구분");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAplyPrcsTypeCd","cboAplyRegClCd:30","35","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("처리상태");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:0","cboAplyRegClCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인등록번호");
            obj.set_accessibilitylabel("법인등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyPrcsTypeCd","staAplyPrcsTypeCd:0","35","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("처리상태");
            obj.set_accessibilitylabel("처리상태");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBrno","mseCrno:30","staAplyPrcsTypeCd:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:0","cboAplyPrcsTypeCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_accessibilitylabel("사업자등록번호");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staLgnId","cboGovInstYn:30","staRprsvNm:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("아이디");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:0","edtRprsvNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staFlnm","edtLgnId:30","staCrno:5","116","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("성명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:0","mseCrno:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("성명");
            obj.set_maxlength("15");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserClCd","edtFlnm:30","staBrno:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("계정구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserClCd","staUserClCd:0","mseBrno:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsResult03");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("계정구분");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","75",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"2\" text=\"사업체/기관명\" tooltiptext=\"사업체/기관명\"/><Cell col=\"3\" text=\"대표자명\" tooltiptext=\"대표자명\"/><Cell col=\"4\" text=\"사업자등록번호\" tooltiptext=\"사업자등록번호\"/><Cell col=\"5\" text=\"아이디\" tooltiptext=\"아이디\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"계정구분\" tooltiptext=\"계정구분\"/><Cell col=\"8\" text=\"신청구분\" tooltiptext=\"신청구분\"/><Cell col=\"9\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"10\" text=\"신청처리일자\" tooltiptext=\"신청처리일자\"/><Cell col=\"11\" text=\"처리상태\" tooltiptext=\"처리상태\"/><Cell col=\"12\" text=\"작업구분\" tooltiptext=\"작업구분\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"번호\" textAlign=\"center\" accessibilitylabel=\"번호\"/><Cell col=\"1\" text=\"bind:instClsfCd\" tooltiptext=\"구분\" displaytype=\"combotext\" combodataset=\"dsResult02\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" accessibilitylabel=\"구분\"/><Cell col=\"2\" text=\"bind:bzentNm\" tooltiptext=\"사업체/기관명\" accessibilitylabel=\"사업체/기관명\"/><Cell col=\"3\" text=\"bind:rprsvNm\" tooltiptext=\"대표자명\" textAlign=\"center\" accessibilitylabel=\"대표자명\"/><Cell col=\"4\" text=\"bind:brno\" tooltiptext=\"사업자등록번호\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@-@@-@@@@@\" maskedittype=\"string\" accessibilitylabel=\"사업자등록번호\"/><Cell col=\"5\" text=\"bind:lgnId\" tooltiptext=\"아이디\" textAlign=\"center\" accessibilitylabel=\"아이디\"/><Cell col=\"6\" text=\"bind:flnm\" tooltiptext=\"성명\" textAlign=\"center\" accessibilitylabel=\"성명\"/><Cell col=\"7\" text=\"bind:userClCd\" tooltiptext=\"계정구분\" displaytype=\"combotext\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" accessibilitylabel=\"계정구분\"/><Cell col=\"8\" displaytype=\"combotext\" combodataset=\"dsResult04\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" text=\"bind:aplyRegClCd\" tooltiptext=\"신청구분\" cssclass=\"expr:aplyRegClCd==&apos;ARC0001&apos; ? &apos;cell_WF_Point01&apos; : (aplyRegClCd==&apos;ARC0003&apos; ? &apos;cell_WF_Point04&apos; : &apos;cell_WF_Point03&apos;)\" accessibilitylabel=\"신청구분\"/><Cell col=\"9\" text=\"bind:aplyYmd\" tooltiptext=\"신청일자\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\" accessibilitylabel=\"신청일자\"/><Cell col=\"10\" text=\"bind:aplyPrcsYmd\" tooltiptext=\"신청처리일자\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\" accessibilitylabel=\"신청처리일자\"/><Cell col=\"11\" text=\"bind:aplyPrcsTypeCd\" tooltiptext=\"처리상태\" displaytype=\"combotext\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" cssclass=\"expr:aplyPrcsTypeCd==&apos;APC0001&apos; ? &apos;cell_WF_Point01&apos; : &apos;&apos;\" accessibilitylabel=\"처리상태\"/><Cell col=\"12\" text=\"bind:buttonName\" padding=\"7px 8px\" displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"작업구분\" accessibilitylabel=\"작업구분\" accessibilitydescription=\"상세조회\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:25",null,"20","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_visible("false");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록관리 상세화면 - 회원가입신청 상세조회");
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

            obj = new Div("divDetail02","1624","300","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록관리 상세화면 - 업체정보 변경신청");
            obj.set_visible("false");
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

            //-- Default Layout : this.divDetail02
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
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

            obj = new BindItem("item4","divList.form.divSearch.form.mseCrno","value","dsSrh","srhCrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhInstClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.mseBrno","value","dsSrh","srhBrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboBzentClCd","value","dsSrh","srhBzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboGovInstYn","value","dsSrh","srhGovInstYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divList.form.divSearch.form.cboAcntSttsClCd","value","dsSrh","srhAcntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divList.form.divSearch.form.cboSearchType","value","dsSrh","srhSearchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divList.form.edtLgnId","value","dsSrh","srhLgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divList.form.edtFlnm","value","dsSrh","srhFlnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divList.form.cboUserClCd","value","dsSrh","srhUserClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divList.form.divSearch.form.edtLgnId","value","dsSrh","srhLgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divList.form.divSearch.form.cboUserClCd","value","dsSrh","srhUserClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divList.form.divSearch.form.cboAplyRegClCd","value","dsSrh","srhAplyRegClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("UserRegM00.xfdl", function() {
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
        	this.divList.form.divSearch.form.staBzentClCd					// 업체구분
        	, this.divList.form.divSearch.form.cboBzentClCd					// 업체구분
        	, this.divList.form.divSearch.form.staRprsvNm					// 대표자명
        	, this.divList.form.divSearch.form.edtRprsvNm					// 대표자명
        	, this.divList.form.divSearch.form.staCrno						// 법인등록번호
        	, this.divList.form.divSearch.form.mseCrno						// 법인등록번호
        	, this.divList.form.divSearch.form.staBrno						// 사업자등록번호
        	, this.divList.form.divSearch.form.mseBrno						// 사업자등록번호
        	, this.divList.form.divSearch.form.staGovInstYn					// 정부기관여부
        	, this.divList.form.divSearch.form.cboGovInstYn					// 정부기관여부
        	, this.divList.form.divSearch.form.staLgnId						// 아이디
        	, this.divList.form.divSearch.form.edtLgnId						// 아이디
        	, this.divList.form.divSearch.form.staFlnm						// 성명
        	, this.divList.form.divSearch.form.edtFlnm						// 성명
        	, this.divList.form.divSearch.form.staUserClCd					// 계정구분
        	, this.divList.form.divSearch.form.cboUserClCd					// 계정구분
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
        	// 접힘상태로 처리
        	this.fnSearchShowHide();

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

        	//상세화면
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

        	// 상세, 등록화면 연결
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\agrstipl\ ==> Biz_agrstipl::xxxxx.xfdl
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\biz\aply\ ==> Biz_biz::aply/xxxxx.xfdl

        	// 엑셀다운로드 버튼 - 관리자만 보이게 하기, 원래 버튼이 없으므로 숨김처리 유지함 - 20240222150200
        	// if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        	// 	this.divList.form.btnExcelDown.set_visible(true);
        	// } else {
        	// 	this.divList.form.btnExcelDown.set_visible(false);
        	// }

        	// 상세화면
        	this.divDetail01.set_url("Biz_user::user/UserRegS01.xfdl");

        	// 상세화면
        	this.divDetail02.set_url("Biz_user::user/UserRegS02.xfdl");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.fnClearDsSrh();

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"APLY_PRCS_TYPE_CD" , headflag:"A" , useYn:"Y"};					// 신청처리유형코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD" , headflag:"A" , useYn:"Y"};						// 기관분류코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"USER_CL_CD" , headflag:"A" , useYn:"Y"};						// 사용자구분코드
        	arrParam[3] = {outDs:"dsResult04", groupId:"APLY_REG_CL_CD" , headflag:"A" , useYn:"Y"};					// 신청등록구분코드
        	arrParam[4] = {outDs:"dsResult05", groupId:"BZENT_CL_CD"     , headflag:"A" , useYn:"Y"};					//사업체구분

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
        			// 후처리 코드
        			this.dsResult01.set_enableevent(false);
        			for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        				if(!['', 'APC0001', 'APC0002', 'APC0003'].includes(this.dsResult01.getColumn(i, "cdMgno"))) {			//관리자직원, 업체직권 제외
        					this.dsResult01.deleteRow(i);
        				}
        			}
        			this.dsResult01.set_enableevent(true);

        			this.dsResult02.set_enableevent(false);

        			for (var i = this.dsResult02.rowcount - 1; i >= 0; i--) {
        				if(!['', 'ICC0002', 'ICC0003', 'ICC0004', 'ICC0005'].includes(this.dsResult02.getColumn(i, "cdMgno"))) {			//관리운영 제외
        					this.dsResult02.deleteRow(i);
        				}
        			}
        			this.dsResult02.set_enableevent(true);

        			this.dsResult03.set_enableevent(false);
        			for (var i = this.dsResult03.rowcount - 1; i >= 0; i--) {
        				if(['UCC0008', 'UCC0001'].includes(this.dsResult03.getColumn(i, "cdMgno"))) {		// 비승인사용자 코드만 제거, 전체관리자는 회원가입 프로세스가 존재하지않으므로 전체관리자도 제거
        					this.dsResult03.deleteRow(i);
        				}
        			}
        			this.dsResult03.set_enableevent(true);

        			this.dsResult02.set_enableevent(false);

        			for (var i = this.dsResult04.rowcount - 1; i >= 0; i--) {
        				if(!['', 'ARC0001', 'ARC0002', 'ARC0003'].includes(this.dsResult04.getColumn(i, "cdMgno"))) {			// [신규가입|신규사용자|업체정보변경]만 조회가능
        					this.dsResult04.deleteRow(i);
        				}
        			}
        			this.dsResult04.set_enableevent(true);

        			// 신청구분 콤보박스 - 초기화
        			this.divList.form.divSearch.form.cboAplyRegClCd.set_index(0);

        			// 처리상태 콤보박스 - 초기화
        			this.divList.form.divSearch.form.cboAplyPrcsTypeCd.set_index(0);
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
        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
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
        	this.dsSrh.setColumn(0, "srhAplyPrcsTypeCd", "");
        	this.dsSrh.setColumn(0, "srhLgnId", "");
        	this.dsSrh.setColumn(0, "srhFlnm", "");
        	this.dsSrh.setColumn(0, "srhUserClCd", "");
        	this.dsSrh.setColumn(0, "srhAplyRegClCd", "");

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

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
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
         * @description 그리드내의 행 클릭
         */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	//작업구분
        	if(e.cell == 12) {
        		var aplyRegClCd = this.dsList.getColumn(e.row, "aplyRegClCd");			// 신청등록구분코드

        		var objArgs = {};
        		objArgs.aplyMgno 	= this.dsList.getColumn(e.row, "aplyMgno");			// 신청관리번호
        		trace("[aplyMgno:"+objArgs.aplyMgno +"]");

        		// 업체정보 변경신청
        		if(aplyRegClCd == "ARC0003") {
        			// 화면전환 상세화면
        			this.divList.set_visible(false);
        			this.divDetail01.set_visible(false);
        			this.divDetail02.set_visible(true);

        			this.divDetail02.form.fnChangeDiv(objArgs);
        			// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		// 그외
        		} else {
        			// 화면전환 상세화면
        			this.divList.set_visible(false);
        			this.divDetail01.set_visible(true);
        			this.divDetail02.set_visible(false);

        			this.divDetail01.form.fnChangeDiv(objArgs);
        			// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		}
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

        /**
         * @description 사업수행자 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divList_divSearch_btnBzentNm_onclick = function(obj,e)
        {
        	var sPopupId	= "comInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:8};
        	var oOption		= {showtitlebar:false,titletext:"사업수행자 검색"};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };


        /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀다운로드 - [AL_584118_sample_FileDown.xfdl] START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var paramJson = {
        		  url : nexacro.getApplication().Tran.fwUrl + "/adm/user/userReg/selectUserMngExcel.irs"
        		, filename : "사용자목록.xlsx"
        		, sheetname : "사용자목록내역"
        		, param1 : "조건값1"
        		, param2 : "조건값2"
        	};
        	this.gfn_exceldownload(paramJson);

        };

        /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 엑셀다운로드 - [AL_584118_sample_FileDown.xfdl] END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staBzentNm.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staBzentClCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.edtBzentNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboBzentClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staInstClsfCd.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.cboInstClsfCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtRprsvNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staAplyRegClCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.staCrno.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.cboGovInstYn.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.btnBzentNm.addEventHandler("onclick",this.divList_divSearch_btnBzentNm_onclick,this);
            this.divList.form.divSearch.form.cboAplyRegClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staAplyPrcsTypeCd.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.mseCrno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboAplyPrcsTypeCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staBrno.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.mseBrno.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staLgnId.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.edtLgnId.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staFlnm.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboUserClCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
        };
        this.loadIncludeScript("UserRegM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
