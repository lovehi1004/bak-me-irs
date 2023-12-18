(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BizPrvtM00");
            this.set_titletext("사업비공개관리목록화면");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBizGbn\" type=\"STRING\" size=\"256\"/><Column id=\"srhAplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhPrvtPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"srhAddDataYn\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizCnt\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"hstryNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizGbnCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyClCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFormCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvtPrcsTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsBizFldCd</Col></Row><Row><Col id=\"srhCd\">dsBizDtlsFldCd</Col></Row><Row><Col id=\"srhCd\">dsInstCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddDataYn", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdMgno\"/><Col id=\"cdKornNm\">-전체-</Col></Row><Row><Col id=\"cdMgno\">Y</Col><Col id=\"cdKornNm\">추가자료요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizScalCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"168","25",null,null,null,null,null,this.divList.form);
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
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizGbn","35","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizGbn","151","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsBizGbnCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","361","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("신청유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyClCd","471","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsAplyClCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_value("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","681","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizNm","1001","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("사업명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFormCd","791","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBizFormCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrvtPrcsTypeCd","35","staBizGbn:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFldCd","361","staAplyClCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizDtlsFldCd","681","staBizFormCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("사업세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizTypeCd","1001","staBizNm:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","35","staPrvtPrcsTypeCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstMngNo","361","staBizFldCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("관장기관");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAddDataYn","681","staBizDtlsFldCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("자료요청");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrvtPrcsTypeCd","151","cboBizGbn:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsPrvtPrcsTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizScalCd","151","cboPrvtPrcsTypeCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsBizScalCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_value("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","471","cboAplyClCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizFldCdA");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstMngNo","471","cboBizFldCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsInstCdA");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","791","cboBizFormCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizDtlsFldCd");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAddDataYn","791","cboBizDtlsFldCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsAddDataYn");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBizNm","1111","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizTypeCd","1111","edtBizNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsBizTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlg","1001","staBizTypeCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("방법론명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlg","1111","cboBizTypeCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"79\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"88\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"76\"/><Column size=\"90\"/><Column size=\"98\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"110\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" text=\"파리협정\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"3\" text=\"사업명(원문)\"/><Cell col=\"4\" rowspan=\"2\" text=\"사업유형\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"5\" rowspan=\"2\" text=\"관련사업건수\"/><Cell col=\"6\" rowspan=\"2\" text=\"유치국\"/><Cell col=\"7\" rowspan=\"2\" text=\"사업규모\"/><Cell col=\"8\" rowspan=\"2\" text=\"사업형태\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"9\" text=\"인증유효\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"10\" text=\"시작일자\"/><Cell col=\"11\" rowspan=\"2\" text=\"감축(흡수)량\"/><Cell col=\"12\" rowspan=\"2\" text=\"신청일\"/><Cell col=\"13\" rowspan=\"2\" text=\"처리일\"/><Cell col=\"14\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"16\" rowspan=\"2\" text=\"이력\"/><Cell col=\"17\" rowspan=\"2\" text=\"작업구분\"/><Cell row=\"1\" col=\"2\" text=\"조항\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"사업명(국문)\"/><Cell row=\"1\" col=\"9\" text=\"기간유형\"/><Cell row=\"1\" col=\"10\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" textAlign=\"center\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"bind:agreeClausCdNm\" tooltiptext=\"bind:agreeClausCdNm\"/><Cell col=\"3\" textAlign=\"left\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizOrgtNm, currow, 4)\" tooltiptext=\"bind:bizOrgtNm\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:bizTypeCdNm\" tooltiptext=\"bind:bizTypeCdNm\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizCnt\" tooltiptext=\"bind:bizCnt\" displaytype=\"expr:bizSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:bizSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" padding=\"10px 5px\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizScalCdNm\" tooltiptext=\"bind:bizScalCdNm\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizFormCdNm\" tooltiptext=\"bind:bizFormCdNm\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" expandsize=\"16\" controlautosizingtype=\"none\" autosizecol=\"default\" autosizerow=\"default\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:certVldTypeCdNm\" tooltiptext=\"bind:certVldTypeCdNm\"/><Cell col=\"10\" text=\"bind:certVldBgngYmd\" tooltiptext=\"bind:certVldBgngYmd\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:atcnvrRdcqty\" tooltiptext=\"bind:atcnvrRdcqty\" textAlign=\"right\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:certVldBgngYmd\" tooltiptext=\"bind:certVldBgngYmd\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" rowspan=\"2\" text=\"bind:certVldBgngYmd\" tooltiptext=\"bind:certVldBgngYmd\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" padding=\"10px\" text=\"bind:prcsTypeCdNm\" tooltiptext=\"bind:prcsTypeCdNm\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\"/><Cell col=\"15\" rowspan=\"2\" edittype=\"expr:bzentSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" displaytype=\"expr:bzentSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" padding=\"10px 5px\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 5px\" text=\"bind:hstryNm\" tooltiptext=\"bind:hstryNm\" textAlign=\"center\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 5px\" text=\"bind:prcsGbnNm\" tooltiptext=\"bind:prcsGbnNm\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" tooltiptext=\"bind:bizKrnNm\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizKrnNm, currow, 4)\"/><Cell row=\"1\" col=\"10\" text=\"bind:certVldEndYmd\" tooltiptext=\"bind:certVldEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"140","32","39","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("정보비공개신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","39","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사업비공개 신청 상세화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","1626","285","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사업비공개 신청 화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divResult","1960","30","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사업비공개 신청 심의결과 조회");
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

            //-- Default Layout : this.divDetail
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divList.form.divSearch.form.cboBizGbn","value","dsSrh","srhBizGbn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divList.form.divSearch.form.cboAplyClCd","value","dsSrh","srhAplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboBizFormCd","value","dsSrh","srhBizFormCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboPrvtPrcsTypeCd","value","dsSrh","srhPrvtPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.cboBizFldCd","value","dsSrh","srhBizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.edtBizNm","value","dsSrh","srhBizNm");
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

            obj = new BindItem("item11","divList.form.divSearch.form.edtMhdlg","value","dsSrh","srhMhdlg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BizPrvtM00.xfdl","");
        this.registerScript("BizPrvtM00.xfdl", function() {
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
        this.fvSearchShowHideObjList = [this.divList.form.divSearch.form.staPrvtPrcsTypeCd , this.divList.form.divSearch.form.cboPrvtPrcsTypeCd
        								, this.divList.form.divSearch.form.staBizFldCd , this.divList.form.divSearch.form.cboBizFldCd
        								, this.divList.form.divSearch.form.staBizDtlsFldCd , this.divList.form.divSearch.form.cboBizDtlsFldCd
        								, this.divList.form.divSearch.form.staBizTypeCd, this.divList.form.divSearch.form.cboBizTypeCd];
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
        	//상세화면
        	this.divDetail.set_left(0);
        	this.divDetail.set_top(0);
        	this.divDetail.set_width(null);
        	this.divDetail.set_height(null);
        	this.divDetail.set_right(0);
        	this.divDetail.set_bottom(0);

        	//등록화면
        	this.divReg.set_left(0);
        	this.divReg.set_top(0);
        	this.divReg.set_width(null);
        	this.divReg.set_height(null);
        	this.divReg.set_right(0);
        	this.divReg.set_bottom(0);

        	//심의결과화면
        	this.divResult.set_left(0);
        	this.divResult.set_top(0);
        	this.divResult.set_width(null);
        	this.divResult.set_height(null);
        	this.divResult.set_right(0);
        	this.divResult.set_bottom(0);

        	// 접힘상태로 처리
        	this.fnSearchShowHide();
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
        	// 상세화면
        	this.divDetail.set_url("Biz_inforls::BizPrvtS02.xfdl");

        	// 등록화면
        	this.divReg.set_url("Biz_inforls::BizPrvtS01.xfdl");

        	// 심의결과화면
        	this.divResult.set_url("Biz_inforls::BizPrvtS03.xfdl");

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBizGbn", "");
         	this.dsSrh.setColumn(0, "srhAplyClCd", "");
         	this.dsSrh.setColumn(0, "srhBizFormCd", "");
         	this.dsSrh.setColumn(0, "srhBizNm", "");
         	this.dsSrh.setColumn(0, "srhPrvtPrcsTypeCd", "");
         	this.dsSrh.setColumn(0, "srhBizFldCd", "");
         	this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
         	this.dsSrh.setColumn(0, "srhBizTypeCd", "");
         	this.dsSrh.setColumn(0, "srhBizScalCd", "");
         	this.dsSrh.setColumn(0, "srhInstMngNo", "");
         	this.dsSrh.setColumn(0, "srhAddDataYn", "");
         	this.dsSrh.setColumn(0, "srhMhdlg", "");

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	// 사용자정의코드 조회
        	this.fnCallFldCode();

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
        	// Grid Text 표현 재처리
        	//this.grdList.set_enableredraw(false);
        	//this.grdList.set_enableredraw(true);
        };

        //공통코드 조회
        this.fnCallComCdoe = function()
        {
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsBizGbnCdA", 	groupId:"BIZ_GBN_CD", 		headflag:"A", useYn:"Y"}; //구분
        	arrParam[1] = {outDs:"dsAplyClCdA", 	groupId:"APLY_CL_CD", 		headflag:"A", useYn:"Y"}; //신청유형
        	arrParam[2] = {outDs:"dsBizFormCdA", 	groupId:"BIZ_FORM_CD", 		headflag:"A", useYn:"Y"}; //사업형태
        	arrParam[3] = {outDs:"dsPrvtPrcsTypeCdA", 	groupId:"PRVT_PRCS_TYPE_CD", 	headflag:"A", useYn:"Y"}; //처리상태
        	arrParam[4] = {outDs:"dsBizTypeCdA", 	groupId:"BIZ_TYPE_CD", 		headflag:"A", useYn:"Y"}; //사업유형
        	arrParam[5] = {outDs:"dsBizScalCdA", 	groupId:"BIZ_SCAL_CD", 		headflag:"A", useYn:"Y"}; //사업규모
        	arrParam[6] = {outDs:"dsDlbrTypeCdA", 	groupId:"PRVT_DLBR_TYPE_CD", 		      useYn:"Y"}; // 심의유형코드

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        this.fnCallFldCode = function()
        {
        	// 공통Transaction 호출
        	var outDs = "";
        	outDs = outDs + "dsBizFldCdA=dsBizFldCd ";
        	outDs = outDs + "dsBizFldCdS=dsBizFldCd ";
        	outDs = outDs + "dsBizDtlsFldCd=dsBizDtlsFldCd ";
        	outDs = outDs + "dsBizDtlsFldCdPgm=dsBizDtlsFldCd ";
        	outDs = outDs + "dsBizDtlsFldCdUni=dsBizDtlsFldCd ";
        	outDs = outDs + "dsInstCdA=dsInstCd";

         	var objArgs = {};
         	objArgs.svcId 			= "commonCode";
         	objArgs.url 			= "/common/code/selectUserCommonCodeList.irs";
         	objArgs.inds      		= "dsPrivCd=dsPrivCd";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

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
        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);

        			break;
        		case "commonCode" :
        			// 후처리 코드
        			var nRow1 = this.dsBizFldCdA.insertRow(0);
        			this.dsBizFldCdA.setColumn(nRow1,"bizFldCdMgno", "");
        			this.dsBizFldCdA.setColumn(nRow1,"bizFldKornNm","-전체-");

        			var nRow2 = this.dsBizDtlsFldCd.insertRow(0);
        			this.dsBizDtlsFldCd.setColumn(nRow2,"bizFldDtlsCdMgno", "");
        			this.dsBizDtlsFldCd.setColumn(nRow2,"bizFldCdMgno","");
        			this.dsBizDtlsFldCd.setColumn(nRow2,"bizDtlsFldKornNm","-전체-");
        			this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");

        			var nRow3 = this.dsInstCdA.insertRow(0);
        			this.dsInstCdA.setColumn(nRow3,"code", "");
        			this.dsInstCdA.setColumn(nRow3,"name","-전체-");

        			break;
        		default:
        			break;
        	}
        };

        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        // 팝업 콜백
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "popModalAprvAplyP01" :
        			if(objRtnValue["flag"] == "CLOSE") {

        			}
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function()
        {
        	trace("[BizPrvtM00]fnChangeDiv =========================");
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhBizGbn", "");
        	this.dsSrh.setColumn(0, "srhAplyClCd", "");
        	this.dsSrh.setColumn(0, "srhBizFormCd", "");
        	this.dsSrh.setColumn(0, "srhBizNm", "");
        	this.dsSrh.setColumn(0, "srhPrvtPrcsTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizFldCd", "");
        	this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
        	this.dsSrh.setColumn(0, "srhBizTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizScalCd", "");
        	this.dsSrh.setColumn(0, "srhInstMngNo", "");
        	this.dsSrh.setColumn(0, "srhAddDataYn", "");
        	this.dsSrh.setColumn(0, "srhMhdlg", "");
        	// 사업세부분야 필터.
        	this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        // 검색 창 여닫기
        this.fnSearchShowHide = function ()
        {
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
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		this.divList.form.btnReg.visible = true;
        		this.divList.form.btnExcelDown.visible = false;
        	} else {
        		this.divList.form.btnReg.visible = false;
        		this.divList.form.btnExcelDown.visible = true;
        	}
        };

        // 목록 조회
        this.fnCallSearchList = function()
        {
        	// 공통Transaction 호출
        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "/biz/inforls/bizPrvt/selectBizPrvtList.irs";
        	}else {
        		callUrl = "/adm/inforls/bizPrvt/selectBizPrvtList.irs";
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

        //이력 팝업
        this.fnCallHistPop = function() {
        	var sPopupId 	= "popModalAprvAplyP01";
        	var sMnuId 		= "MN99050000";
        	var oPosition	= {width:1000,height:750};
        	var objArgs		= {};
        	objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "prvtMgno");
        	objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "prvtDgr");
        	objArgs.menu	= "PRV";

        	var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.
        //검색창 여닫기
        this.divList_btnShowHide_onclick = function(obj,e)
        {
        	this.fnSearchShowHide();
        };

        // 검색 버튼 클릭
        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        //정보비공개 신청 버튼 클릭
        this.divList_btnReg_onclick = function(obj,e)
        {
        	// 화면전환 상세화면
        	this.divList.set_visible(false);
        	this.divDetail.set_visible(false);
        	this.divReg.set_visible(true);
        	this.divResult.set_visible(false);

        	var objArgs = {};
        	objArgs.status	= "PRVTAPLY";

        	this.divReg.form.fnChangeDiv(objArgs);
        };

        // 사업분야 콤보 값 변경 시
        this.divList_divSearch_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
                var bizFldCdMgno = e.postvalue;
                this.dsBizDtlsFldCd.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
            }
        };

        //그리드 셀 클릭시
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);
        	this.cellNo = e.cell;

        	if(this.cellNo == 16) {
        		this.fnCallHistPop(); //이력팝업
        	} else if(this.cellNo == 17) {
        		this.fnCallDtlPage();	//상세화면
        	}
        };

        //상세화면
        this.fnCallDtlPage = function()
        {
        	var aplyTypeCd = this.dsList.getColumn(this.dsList.rowposition, "aplyTypeCd"); // 신청유형코드
        	var prcsTypeCd = this.dsList.getColumn(this.dsList.rowposition, "prcsTypeCd"); // 처리유형코드
        	var prcsGbnCd = this.dsList.getColumn(this.dsList.rowposition, "prcsGbnCd"); // 처리유형코드

        	// 화면전환
        	this.divList.set_visible(false);
        	this.divReg.set_visible(false);
        	this.divResult.set_visible(false);

        	// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.prvtMgno 		= this.dsList.getColumn(this.dsList.rowposition, "prvtMgno");
        	objArgs.prvtDgr 		= this.dsList.getColumn(this.dsList.rowposition, "prvtDgr");
        	objArgs.bizMngNo 		= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");

        	if("redoc" == prcsGbnCd) {
        		objArgs.status = "MOD"; // 문서 보완
        		this.divDetail.set_visible(true);
        		this.divResult.set_visible(false);
        		this.divDetail.form.fnChangeDiv(objArgs);
        	} else if("deliberate" == prcsGbnCd) {
        		objArgs.status = "DELIBERATE"; //심의 화면
        		this.divDetail.set_visible(true);
        		this.divResult.set_visible(false);
        		this.divDetail.form.fnChangeDiv(objArgs);
        	} else if("aproved" == prcsGbnCd) {
        		objArgs.status = "APROVED"; // 승인 완료
        		trace("prcsGbnCd:"+prcsGbnCd);
        		this.divDetail.set_visible(false);
        		this.divResult.set_visible(true);
        		this.divResult.form.fnChangeDiv(objArgs);
        	} else {
        		objArgs.status = "SEARCH"; // 상세
        		this.divDetail.set_visible(true);
        		this.divResult.set_visible(false);
        		this.divDetail.form.fnChangeDiv(objArgs);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staBizGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.cboBizFldCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizFldCd_onitemchanged,this);
            this.divList.form.divSearch.form.edtBizNm.addEventHandler("onkeydown",this.divList_divSearch_edtBizNm_onkeydown,this);
            this.divList.form.divSearch.form.cboBizTypeCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizTypeCd_onitemchanged,this);
            this.divList.form.divSearch.form.edtMhdlg.addEventHandler("onkeydown",this.divList_divSearch_edtMhdlg_onkeydown,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.divList_btnShowHide_onclick,this);
        };
        this.loadIncludeScript("BizPrvtM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
