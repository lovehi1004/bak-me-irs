(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aprvAplyM00");
            this.set_titletext("사업통합신청목록화면");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBizGbn\" type=\"STRING\" size=\"256\"/><Column id=\"srhAplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"srhAddDataYn\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizGbnCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFormCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrcsTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizScalCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddDataYn", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdMgno\"/><Col id=\"cdKornNm\">-전체-</Col></Row><Row><Col id=\"cdMgno\">Y</Col><Col id=\"cdKornNm\">추가자료요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizCnt\" type=\"STRING\" size=\"256\"/><Column id=\"bizSts\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"hstrySts\" type=\"STRING\" size=\"256\"/><Column id=\"hstryNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnSts\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgSts\" type=\"STRING\" size=\"256\"/><Column id=\"chgNm\" type=\"STRING\" size=\"256\"/><Column id=\"addDataSts\" type=\"STRING\" size=\"256\"/><Column id=\"addDataNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentSts\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizChgPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"certPrdUpdtPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"certBgngYmdChgPsbltyYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreeClausCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLstBtnCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"btnReg\" type=\"STRING\" size=\"256\"/><Column id=\"btnExcelDown\" type=\"STRING\" size=\"256\"/><Column id=\"btnFileDown\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertVldTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRdcUnitCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDmstClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyClCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFormCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizScalCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsBizFldCd</Col></Row><Row><Col id=\"srhCd\">dsBizDtlsFldCd</Col></Row><Row><Col id=\"srhCd\">dsInstCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSopUnitCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOmgeUnitCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCdPgm", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCdUni", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlPrcsTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicPrcsTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrPrcsTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayIdntyTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayDlbrTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrpPrcsTypeCdA", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
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
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizGbn","35","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizGbn","150","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBizGbnCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","390","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("신청유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyClCd","465","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsAplyClCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","695","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizNm","1030","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFormCd","790","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsBizFormCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrcsTypeCd","35","staBizGbn:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFldCd","390","staAplyClCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizDtlsFldCd","695","staBizFormCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("사업세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","35","staPrcsTypeCd:5","125","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("사업유형/규모");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstMngNo","695","staBizDtlsFldCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("관장기관");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlg","1030","staBizNm:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("방법론명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAddDataYn","1030","staMhdlg:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("자료요청");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrcsTypeCd","150","cboBizGbn:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsGrpPrcsTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizTypeCd","150","cboPrcsTypeCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsBizTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizScalCd","cboBizTypeCd:5","104","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsBizScalCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","465","cboAplyClCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizFldCdA");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","790","cboBizFormCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizDtlsFldCd");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstMngNo","790","cboBizDtlsFldCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsInstCdA");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlg","1111","67","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAddDataYn","1111","edtMhdlg:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsAddDataYn");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBizNm","1111","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"100\"/><Column size=\"79\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"88\"/><Column size=\"83\"/><Column size=\"83\"/><Column size=\"76\"/><Column size=\"90\"/><Column size=\"98\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"98\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"파리협정\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"4\" text=\"사업명(원문)\"/><Cell col=\"5\" rowspan=\"2\" text=\"사업유형\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"6\" rowspan=\"2\" text=\"관련사업건수\"/><Cell col=\"7\" rowspan=\"2\" text=\"유치국\"/><Cell col=\"8\" rowspan=\"2\" text=\"사업규모\"/><Cell col=\"9\" rowspan=\"2\" text=\"사업형태\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"10\" text=\"인증유효\" border=\"1px solid #bfd2e7,1px solid #bfd2e7,0px solid #bfd2e7\"/><Cell col=\"11\" text=\"시작일자\"/><Cell col=\"12\" rowspan=\"2\" text=\"감축(흡수)량\"/><Cell col=\"13\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"15\" rowspan=\"2\" text=\"이력\"/><Cell col=\"16\" rowspan=\"2\" text=\"작업구분\"/><Cell col=\"17\" rowspan=\"2\" text=\"갱신/변경\"/><Cell col=\"18\" rowspan=\"2\" text=\"추가자료\"/><Cell row=\"1\" col=\"2\" text=\"신청유형\"/><Cell row=\"1\" col=\"3\" text=\"조항\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"사업명(국문)\"/><Cell row=\"1\" col=\"10\" text=\"기간유형\"/><Cell row=\"1\" col=\"11\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" textAlign=\"center\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:dgrRegRsnCdNm\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" tooltiptext=\"bind:dgrRegRsnCdNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:agreeClausCdNm\" tooltiptext=\"bind:agreeClausCdNm\"/><Cell col=\"4\" textAlign=\"left\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizOrgtNm, currow, 4)\" tooltiptext=\"bind:bizOrgtNm\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:bizTypeCdNm\" tooltiptext=\"bind:bizTypeCdNm\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizCnt\" tooltiptext=\"bind:bizCnt\" displaytype=\"expr:bizSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:bizSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" padding=\"10px 5px\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" text=\"bind:bizScalCdNm\" tooltiptext=\"bind:bizScalCdNm\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bizFormCdNm\" tooltiptext=\"bind:bizFormCdNm\"/><Cell col=\"10\" rowspan=\"2\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" expandsize=\"16\" controlautosizingtype=\"none\" autosizecol=\"default\" autosizerow=\"default\" border=\"1px solid #dcdee4,1px solid #eeeff3\" text=\"bind:certVldTypeCdNm\" tooltiptext=\"bind:certVldTypeCdNm\"/><Cell col=\"11\" text=\"bind:certVldBgngYmd\" tooltiptext=\"bind:certVldBgngYmd\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:atcnvrRdcqty\" tooltiptext=\"bind:atcnvrRdcqty\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" padding=\"10px\" text=\"bind:prcsTypeCdNm\" tooltiptext=\"bind:prcsTypeCdNm\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\"/><Cell col=\"14\" rowspan=\"2\" edittype=\"expr:bzentSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" displaytype=\"expr:bzentSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" padding=\"10px 5px\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 5px\" text=\"bind:hstryNm\" tooltiptext=\"bind:hstryNm\" textAlign=\"center\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 5px\" text=\"bind:prcsGbnNm\" tooltiptext=\"bind:prcsGbnNm\" textAlign=\"center\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"expr:chgSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:chgSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" padding=\"10px 1px\" text=\"bind:chgNm\" tooltiptext=\"bind:chgNm\" textAlign=\"center\"/><Cell col=\"18\" rowspan=\"2\" text=\"bind:addDataNm\" tooltiptext=\"bind:addDataNm\" displaytype=\"expr:addDataSts==&apos;0&apos;?&apos;normal&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:addDataSts==&apos;0&apos;?&apos;none&apos;:&apos;button&apos;\" textAlign=\"center\" padding=\"10px 5px\"/><Cell row=\"1\" col=\"2\" text=\"bind:aplyClCdNm\" tooltiptext=\"bind:aplyClCdNm\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" textAlign=\"left\" tooltiptext=\"bind:bizKrnNm\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizKrnNm, currow, 4)\"/><Cell row=\"1\" col=\"11\" text=\"bind:certVldEndYmd\" tooltiptext=\"bind:certVldEndYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"13\" text=\"bind:typeCdNm\" tooltiptext=\"bind:typeCdNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"88","32","39","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("사업신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","btnReg:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnFileDown",null,null,"114","32","btnExcelDown:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail","1662","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","1662","308","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divReg");
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

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.cboBizGbn","value","dsSrh","srhBizGbn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboAplyClCd","value","dsSrh","srhAplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboBizFormCd","value","dsSrh","srhBizFormCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.edtBizNm","value","dsSrh","srhBizNm");
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

            obj = new BindItem("item11","divList.form.stc00","text","dsUniInfo","bizMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divList.form.divSearch.form.cboInstMngNo","text","dsSrh","srhInstMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divList.form.divSearch.form.edtMhdlg","value","dsSrh","srhMhdlg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyM00.xfdl", function() {
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
        this.fvSearchShowHideObjList = [this.divList.form.divSearch.form.staPrcsTypeCd , this.divList.form.divSearch.form.cboPrcsTypeCd
        								, this.divList.form.divSearch.form.staBizFldCd , this.divList.form.divSearch.form.cboBizFldCd
        								, this.divList.form.divSearch.form.staBizDtlsFldCd , this.divList.form.divSearch.form.cboBizDtlsFldCd
        								, this.divList.form.divSearch.form.staMhdlg, this.divList.form.divSearch.form.edtMhdlg];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 168;			// 조회영역 펼치기시 height
        this.fvSearchHideHeight = 94;			// 조회영역 숨기기시 height

        this.wBtnReg = 88;
        this.wBtnFileDown = 114;
        this.wBtnExcelDown = 119;

        this.isCallDtlPage = false;
        this.isCallRegPage = false;
        this.isCallChgPage = false;
        this.isCallPrdPage = false;
        this.isCallYmdPage = false;
        this.isFuncId = "";

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
        	//this.grdList.griduserproperty = "!sort";

        	// 버튼 설정
        	this.divList.form.btnReg.set_width(0);
        	this.divList.form.btnExcelDown.set_width(0);
        	this.divList.form.btnFileDown.set_width(0);

        	// div 위치 조정 , divDetail (상세) , divReg (등록)
        	this.divDetail.set_left(0);
        	this.divDetail.set_top(0);
        	this.divDetail.set_width(null);
        	this.divDetail.set_height(null);
        	this.divDetail.set_right(0);
        	this.divDetail.set_bottom(0);

        	this.divReg.set_left(0);
        	this.divReg.set_top(0);
        	this.divReg.set_width(null);
        	this.divReg.set_height(null);
        	this.divReg.set_right(0);
        	this.divReg.set_bottom(0);

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
        	//trace("[AprvAplyM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 상세, 등록화면 연결

        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBizGbn", "");
        	this.dsSrh.setColumn(0, "srhAplyClCd", "");
        	this.dsSrh.setColumn(0, "srhBizFormCd", "");
        	this.dsSrh.setColumn(0, "srhBizNm", "");
        	this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
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

        	// 권한별 버튼 처리
        	this.fnCallLstBtnCtrl();

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
        			// 사업규모 필터 - 초기화.
        			this.dsBizScalCdA.filter("cdMgno == ''");

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
        		case "msgAlert02" :

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
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);

        			break;
        		case "lstBtnInfo" :
        			// 후처리 코드
        			this.fnLstBtnCtrl();
        			break;
        		case "commonCode" :
        			// 후처리 코드
        			var nRow1 = this.dsBizFldCdA.insertRow(0);
        			this.dsBizFldCdA.setColumn(nRow1,"bizFldCdMgno", "");
        			this.dsBizFldCdA.setColumn(nRow1,"bizFldKornNm","-전체-");

        			var nRow2 = this.dsBizFldCdS.insertRow(0);
        			this.dsBizFldCdS.setColumn(nRow2,"bizFldCdMgno", "");
        			this.dsBizFldCdS.setColumn(nRow2,"bizFldKornNm","-선택-");

        			var nRow3 = this.dsBizDtlsFldCd.insertRow(0);
        			this.dsBizDtlsFldCd.setColumn(nRow3,"bizFldDtlsCdMgno", "");
        			this.dsBizDtlsFldCd.setColumn(nRow3,"bizFldCdMgno","");
        			this.dsBizDtlsFldCd.setColumn(nRow3,"bizDtlsFldKornNm","-전체-");
        			this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");

        			var nRow4 = this.dsBizDtlsFldCdPgm.insertRow(0);
        			this.dsBizDtlsFldCdPgm.setColumn(nRow4,"bizFldDtlsCdMgno", "");
        			this.dsBizDtlsFldCdPgm.setColumn(nRow4,"bizFldCdMgno","");
        			this.dsBizDtlsFldCdPgm.setColumn(nRow4,"bizDtlsFldKornNm","-선택-");
        			this.dsBizDtlsFldCdPgm.filter("bizFldCdMgno == ''");

        			var nRow5 = this.dsBizDtlsFldCdUni.insertRow(0);
        			this.dsBizDtlsFldCdUni.setColumn(nRow5,"bizFldDtlsCdMgno", "");
        			this.dsBizDtlsFldCdUni.setColumn(nRow5,"bizFldCdMgno","");
        			this.dsBizDtlsFldCdUni.setColumn(nRow5,"bizDtlsFldKornNm","-선택-");
        			this.dsBizDtlsFldCdUni.filter("bizFldCdMgno == ''");

        			var nRow6 = this.dsInstCdA.insertRow(0);
        			this.dsInstCdA.setColumn(nRow6,"code", "");
        			this.dsInstCdA.setColumn(nRow6,"name","-전체-");

        			break;
        		default:
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	//trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 추가자료
        		case "popModalAprvAplyP01" :
        			if(objRtnValue["flag"] == "CLOSE") {
        				// 재조회
        				this.fnCallSearchList();
        			}
        			break;
        		// 관장기관 지정
        		case "popModalAprvAplyP02" :
        			if(objRtnValue["flag"] == "CLOSE") {
        				// 재조회
        				this.fnCallSearchList();
        			}
        			break;
        		// 이력
        		case "popModalAprvAplyP03" :
        			if(objRtnValue["flag"] == "CLOSE") {

        			}
        			break;
        		// 단위사업 팝업
        		case "popModalAprvAplyP04" :
        			if(objRtnValue["flag"] == "CLOSE") {

        			}
        			else if(objRtnValue["flag"] == "OPEN") {

        				if(this.isCallDtlPage) {
        					// 화면전환
        					this.divList.set_visible(false);
        					this.divDetail.set_visible(true);
        					this.divReg.set_visible(false);

        					// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        					var objArgs = {};
        					objArgs.bizMngNo 		= objRtnValue["bizMngNo"];
        					objArgs.bizDgr 			= objRtnValue["bizDgr"];
        					objArgs.bizTypeCd		= objRtnValue["bizTypeCd"];
        					objArgs.dgrRegRsnCd	    = objRtnValue["dgrRegRsnCd"];
        					objArgs.sts				= "";
        					objArgs.pgmBizMngNo		= "";

        					this.divDetail.form.fnChangeDiv(objArgs);
        				}
        				else {
        					this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        				}

        			}
        			break;
        		// 변경갱신
        		case "popModalAprvAplyP05" :
        			if(objRtnValue["flag"] == "CLOSE") {

        			}
        			// 변경
        			if(objRtnValue["flag"] == "CHG") {

        				if(!this.isCallChgPage) {		// 최초 처음 로딩 필요.
        					this.setWaitCursor(true);
        					this.isFuncId = "CHG1";
        					this.divDetail.set_url("");
        					this.divReg.set_url("");
        					this.divReg.set_url("Biz_biz::aply/AprvAplyS03.xfdl");
        				}
        				else {
        					this.isFuncId = "CHG1";
        					this.fnCallChgPage(objRtnValue["pvBizMngNo"], objRtnValue["pvBizDgr"]);
        				}

        			}
        			// 갱신
        			if(objRtnValue["flag"] == "PRD") {

        				if(!this.isCallPrdPage) {		// 최초 처음 로딩 필요.
        					this.setWaitCursor(true);
        					this.isFuncId = "PRD1";
        					this.divDetail.set_url("");
        					this.divReg.set_url("");
        					this.divReg.set_url("Biz_biz::aply/AprvAplyS04.xfdl");
        				}
        				else {
        					this.isFuncId = "PRD1";
        					this.fnCallPrdPage(objRtnValue["pvBizMngNo"], objRtnValue["pvBizDgr"]);
        				}

        			}
        			// 시작일
        			if(objRtnValue["flag"] == "YMD") {

        				if(!this.isCallYmdPage) {		// 최초 처음 로딩 필요.
        					this.setWaitCursor(true);
        					this.isFuncId = "YMD1";
        					this.divDetail.set_url("");
        					this.divReg.set_url("");
        					this.divReg.set_url("Biz_biz::aply/AprvAplyS05.xfdl");
        				}
        				else {
        					this.isFuncId = "YMD1";
        					this.fnCallYmdPage(objRtnValue["pvBizMngNo"], objRtnValue["pvBizDgr"]);
        				}

        			}
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallLstBtnCtrl = function()
        {
        	//trace("목록 권한별 뷰처리 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyLstBtnCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyLstBtnCtrl.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "lstBtnInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "";
         	objArgs.outds     		= "dsLstBtnCtrl=dsLstBtnCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallSearchList = function()
        {
        	trace("********************************* 목록 호출..." + this.fvApp.User.roleIdMgno);

        	// 공통Transaction 호출
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyList.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyList.irs";
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

        this.fnCallComCdoe = function()
        {
        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsBizGbnCdA", 	groupId:"BIZ_GBN_CD", 		headflag:"A", useYn:"Y"};
        	arrParam[1] = {outDs:"dsAplyClCdA", 	groupId:"APLY_CL_CD", 		headflag:"A", useYn:"Y"};
        	arrParam[2] = {outDs:"dsBizFormCdA", 	groupId:"BIZ_FORM_CD", 		headflag:"A", useYn:"Y"};
        	arrParam[3] = {outDs:"dsPrcsTypeCdA", 	groupId:"PRCS_TYPE_CD", 	headflag:"A", useYn:"Y"};
        	arrParam[4] = {outDs:"dsBizTypeCdA", 	groupId:"BIZ_TYPE_CD", 		headflag:"A", useYn:"Y"};
        	arrParam[5] = {outDs:"dsBizScalCdA", 	groupId:"BIZ_SCAL_CD", 		headflag:"A", useYn:"Y"};
        	arrParam[6] = {outDs:"dsAgreeClausCdS", groupId:"AGREE_CLAUS_CD",	headflag:"S", useYn:"Y"};
        	arrParam[7] = {outDs:"dsCertVldTypeCd", groupId:"CERT_VLD_TYPE_CD", 			  useYn:"Y"};
        	arrParam[8] = {outDs:"dsRdcUnitCd", 	groupId:"RDC_UNIT_CD", 		headflag:"S", useYn:"Y"};
        	arrParam[9] = {outDs:"dsDmstClCd", 		groupId:"DMST_CL_CD", 					  useYn:"Y"};

        	arrParam[10] = {outDs:"dsBizTypeCdS", 	groupId:"BIZ_TYPE_CD", 		headflag:"S", useYn:"Y"};
        	arrParam[11] = {outDs:"dsAplyClCd", 	groupId:"APLY_CL_CD", 					  useYn:"Y"};
        	arrParam[12] = {outDs:"dsBizFormCdS", 	groupId:"BIZ_FORM_CD", 		headflag:"S", useYn:"Y"};
        	arrParam[13] = {outDs:"dsBizScalCdS", 	groupId:"BIZ_SCAL_CD", 		headflag:"S", useYn:"Y"};
        	arrParam[14] = {outDs:"dsSopUnitCdS", 	groupId:"SOP_UNIT_CD", 					  useYn:"Y"};
        	arrParam[15] = {outDs:"dsOmgeUnitCdS", 	groupId:"OMGE_UNIT_CD",					  useYn:"Y"};
        	arrParam[16] = {outDs:"dsEvlPrcsTypeCdS", 	groupId:"PRCS_TYPE_CD",	headflag:"S", useYn:"Y"};
        	arrParam[17] = {outDs:"dsDicPrcsTypeCdS", 	groupId:"PRCS_TYPE_CD",	headflag:"S", useYn:"Y"};
        	arrParam[18] = {outDs:"dsDlbrPrcsTypeCdS", 	groupId:"PRCS_TYPE_CD",	headflag:"S", useYn:"Y"};
        	arrParam[19] = {outDs:"dsDlayIdntyTypeCdS", 	groupId:"DLAY_IDNTY_TYPE_CD",	headflag:"S", 	useYn:"Y"};
        	arrParam[20] = {outDs:"dsDlbrTypeCdS", 	groupId:"DLBR_TYPE_CD",	headflag:"S", 	  useYn:"Y"};
        	arrParam[21] = {outDs:"dsEvlTypeCdS", 	groupId:"EVL_TYPE_CD",	headflag:"S", 	  useYn:"Y"};
        	arrParam[22] = {outDs:"dsDlayDlbrTypeCdS", 	groupId:"DLBR_TYPE_CD",	headflag:"S", 	  useYn:"Y"};
        	arrParam[23] = {outDs:"dsGrpPrcsTypeCdA", 	groupId:"GRP_PRCS_TYPE_CD", 	headflag:"A", useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        this.fnCallFldCode = function()
        {
        	//trace("사용자정의코드 호출...");

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

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnLstBtnCtrl = function()
        {
        	//trace("[AprvAplyM00] 목록 권한별 버튼 처리 =========================");
        	var isBtnReg = this.dsLstBtnCtrl.getColumn(0, "btnReg");
        	var isBtnFileDown = this.dsLstBtnCtrl.getColumn(0, "btnFileDown");
        	var isBtnExcelDown = this.dsLstBtnCtrl.getColumn(0, "btnExcelDown");

        	if(isBtnReg) { this.divList.form.btnReg.set_width(this.wBtnReg); }
        	if(isBtnFileDown) { this.divList.form.btnFileDown.set_width(this.wBtnFileDown); }
        	if(isBtnExcelDown) { this.divList.form.btnExcelDown.set_width(this.wBtnExcelDown); }

        	this.divList.form.resetScroll();
        };

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
        	// TODO
        	//trace("[AprvAplyM00]fnChangeDiv =========================");
        	this.divDetail.set_url("");
        	this.divReg.set_url("");

        	this.isCallDtlPage = false;
        	this.isCallRegPage = false;
        	this.isCallChgPage = false;
        	this.isCallPrdPage = false;
        	this.isCallYmdPage = false;

        	// 검색조건 초기화 후 재조회 함
        	if (objArgs.isReLoad == "Y") {
        		// 검색용 데이터셋 초기화
        		this.dsSrh.setColumn(0, "srhBizGbn", "");
        		this.dsSrh.setColumn(0, "srhAplyClCd", "");
        		this.dsSrh.setColumn(0, "srhBizFormCd", "");
        		this.dsSrh.setColumn(0, "srhBizNm", "");
        		this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
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
        	}
        	else {
        		this.fnCallSearchList();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        this.btnShowHide_onclick = function(obj,e)
        {
        	//trace("검색확장 버튼클릭");
        	this.fnSearchShowHide();
        };

        this.fnSearchShowHide = function ()
        {
        	//trace("검색확장버튼 css:" + this.divList.form.btnShowHide.cssclass);

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

        // 검색버튼 클릭
        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        // 초기화버튼 클릭
        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhBizGbn", "");
        	this.dsSrh.setColumn(0, "srhAplyClCd", "");
        	this.dsSrh.setColumn(0, "srhBizFormCd", "");
        	this.dsSrh.setColumn(0, "srhBizNm", "");
        	this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizFldCd", "");
        	this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
        	this.dsSrh.setColumn(0, "srhBizTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizScalCd", "");
        	this.dsSrh.setColumn(0, "srhInstMngNo", "");
        	this.dsSrh.setColumn(0, "srhAddDataYn", "");
        	this.dsSrh.setColumn(0, "srhMhdlg", "");

        	// 사업세부분야 필터.
        	this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");
        	// 사업규모 필터.
        	this.dsBizScalCdA.filter("cdMgno == ''");

        };

        // 사업분야 콤보 값 변경 시
        this.divList_divSearch_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
                //trace("[divList_divSearch_cboBizFldCd_onitemchanged]e.prevalue:"+e.prevalue+"|e.postvalue:"+e.postvalue);
                var bizFldCdMgno = e.postvalue;
                this.dsBizDtlsFldCd.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
            }
        };

        // 사업유형 콤보 값 변경 시
        this.divList_divSearch_cboBizTypeCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		this.dsSrh.setColumn(0, "srhBizScalCd", "");
                //trace("[divList_divSearch_cboBizTypeCd_onitemchanged]e.prevalue:"+e.prevalue+"|e.postvalue:"+e.postvalue);
                var bizScalCd = e.postvalue;
        		if(bizScalCd == "BTC0001") {
        			// 사업규모 필터.
        			this.dsBizScalCdA.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        		} else if(bizScalCd == "BTC0002") {
        			// 사업규모 필터.
        			this.dsBizScalCdA.filter("cdMgno == '' || cdMgno == 'BSC0004' || cdMgno == 'BSC0005'");
        		} else {
        			// 사업규모 필터.
        			this.dsBizScalCdA.filter("cdMgno == ''");
        		}
            }
        };


        // 그리드내의 행 클릭 - 작업구분
        this.cellNo = -1;
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	//trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);
        	this.cellNo = e.cell;

        	// 작업구분, 관련사업건수 - 상세페이지 로딩.
        	if(this.cellNo == 16 || this.cellNo == 6) {
        		if(!this.isCallDtlPage) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.divReg.set_url("");
        			this.divDetail.set_url("");
        			this.divDetail.set_url("Biz_biz::aply/AprvAplyS01.xfdl");
        		}
        		else {
        			this.fnCallDtlPage(e.cell);
        		}
        	}
        	else {
        		this.fnCallDtlPage(e.cell);
        	}
        };

        this.fnDtlLoadComplete = function()
        {
        	//trace("===================== fnDtlLoadComplete 수신완료!!!");
        	this.divReg.set_url("");
        	this.isCallRegPage = false;
        	this.isCallChgPage = false;
        	this.isCallPrdPage = false;
        	this.isCallYmdPage = false;

        	this.setWaitCursor(false);
        	this.isCallDtlPage = true;
        	this.fnCallDtlPage(this.cellNo);
        };

        this.fnCallDtlPage = function(cellNo)
        {
        	// 작업구분
        	if(cellNo == 16)
        	{
        		if(this.isCallDtlPage) {
        			// 화면전환
        			this.divList.set_visible(false);
        			this.divDetail.set_visible(true);
        			this.divReg.set_visible(false);

        			// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        			var objArgs = {};
        			objArgs.bizMngNo 		= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        			objArgs.bizDgr 			= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        			objArgs.bizTypeCd		= this.dsList.getColumn(this.dsList.rowposition, "bizTypeCd");
        			objArgs.dgrRegRsnCd	    = this.dsList.getColumn(this.dsList.rowposition, "dgrRegRsnCd");
        			objArgs.sts				= "";
        			objArgs.pgmBizMngNo		= "";

        			this.divDetail.form.fnChangeDiv(objArgs);
        		}
        		else {
        			this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        		}
        	}
        	// 추가자료입력
        	else if(cellNo == 18) {

        		var addDataDgr = this.dsList.getColumn(this.dsList.rowposition, "addDataDgr");

        		if(addDataDgr == "0") {
        			addDataDgr = "1";
        		}

        		var sPopupId 	= "popModalAprvAplyP01";
        		var sMnuId 		= "MN04010700";
        		var oPosition	= {width:1320,height:750};
        		var objArgs		= {};
        		objArgs.bizMngNo 		= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		objArgs.bizDgr 			= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        		objArgs.addDataDgr		= addDataDgr;

        		var oOption		= {callback:"fnPopupCallback",titletext:"추가자료 모달(Modal) 처리 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        	}
        	// 관장기관
        	else if(cellNo == 14) {
        		//trace(">>> bzentSts" + this.dsList.getColumn(this.dsList.rowposition, "bzentSts"));
        		if(this.dsList.getColumn(this.dsList.rowposition, "bzentSts") == "1") {

        			var sPopupId 	= "popModalAprvAplyP02";
        			var sMnuId 		= "MN99040000";
        			var oPosition	= {width:700,height:280};
        			var objArgs		= {};
        			objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        			objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        			objArgs.menu	= "BIZ";

        			var oOption		= {callback:"fnPopupCallback",titletext:"관장기관 지정 모달(Modal) 처리 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}

        	}
        	// 이력
        	else if(cellNo == 15) {

        		var sPopupId 	= "popModalAprvAplyP03";
        		var sMnuId 		= "MN99050000";
        		var oPosition	= {width:1250,height:750};
        		var objArgs		= {};
        		objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        		objArgs.menu	= "BIZ";

        		var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);

        	}
        	// 단위사업
        	else if(cellNo == 6) {

        		if(this.dsList.getColumn(this.dsList.rowposition, "bizSts") == "1") {
        			var sPopupId 	= "popModalAprvAplyP04";
        			var sMnuId 		= "MN04010800";
        			var oPosition	= {width:1000,height:600};
        			var objArgs		= {};
        			objArgs.bizMngNo	= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        			objArgs.bizDgr 		= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        			objArgs.prgrmMngNo	= this.dsList.getColumn(this.dsList.rowposition, "prgrmMngNo");

        			var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}
        	}
        	// 갱신변경 - 팝업부터 띄운다.
        	else if(cellNo == 17) {

        		if(this.dsList.getColumn(this.dsList.rowposition, "chgSts") == "1") {
        			var sPopupId 	= "popModalAprvAplyP05";
        			var sMnuId 		= "MN04010900";
        			var oPosition	= {width:700,height:300};
        			var objArgs		= {};
        			objArgs.bizMngNo	= this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        			objArgs.bizDgr 		= this.dsList.getColumn(this.dsList.rowposition, "bizDgr");
        			objArgs.bizOrgtNm	= this.dsList.getColumn(this.dsList.rowposition, "bizOrgtNm");
        			objArgs.bizKrnNm	= this.dsList.getColumn(this.dsList.rowposition, "bizKrnNm");
        			objArgs.chgYn		= this.dsList.getColumn(this.dsList.rowposition, "bizChgPsbltyYn");
        			objArgs.prdYn		= this.dsList.getColumn(this.dsList.rowposition, "certPrdUpdtPsbltyYn");
        			objArgs.ymdYn		= this.dsList.getColumn(this.dsList.rowposition, "certBgngYmdChgPsbltyYn");

        			var oOption		= {callback:"fnPopupCallback",titletext:"변경갱신 모달(Modal) 처리 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}

        	}
        };

        this.divList_btnReg_onclick = function(obj,e)
        {
        	if(!this.isCallRegPage) {		// 최초 처음 로딩 필요.
        		this.setWaitCursor(true);
        		this.isFuncId = "REG1";
        		this.divDetail.set_url("");
        		this.divReg.set_url("");
        		this.divReg.set_url("Biz_biz::aply/AprvAplyS02.xfdl");
        	}
        	else {
        		this.isFuncId = "REG1";
        		this.fnCallRegPage();
        	}
        };

        this.fnRegLoadComplete = function()
        {
        	trace("===================== fnRegLoadComplete 수신완료!!! ===================this.isFuncId => " + this.isFuncId);
        	this.setWaitCursor(false);

        	this.isCallRegPage = true;
        	this.isCallChgPage = false;
        	this.isCallPrdPage = false;
        	this.isCallYmdPage = false;

        	this.isCallDtlPage = false;

        	if(this.isFuncId == "REG1") {
        		this.fnCallRegPage();
        	}
        	else if(this.isFuncId == "REG2") {
        		this.divDetail.form.fnCallDoc();
        	}
        	else if(this.isFuncId == "REG3") {
        		this.divDetail.form.fnCallMod();
        	}
        	else if(this.isFuncId == "REG4") {
        		this.divDetail.form.fnCallReg();
        	}
        	else if(this.isFuncId == "REG5") {
        		this.divDetail.form.fnCallPgm();
        	}
        };


        this.fnChgLoadComplete = function()
        {
        	trace("===================== fnChgLoadComplete 수신완료!!! ===================this.isFuncId => " + this.isFuncId);
        	this.setWaitCursor(false);

        	this.isCallRegPage = false;
        	this.isCallChgPage = true;
        	this.isCallPrdPage = false;
        	this.isCallYmdPage = false;

        	this.isCallDtlPage = false;

        	if(this.isFuncId == "CHG1") {
        		var bizMngNo = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var bizDgr = this.dsList.getColumn(this.dsList.rowposition, "bizDgr");

        		this.fnCallChgPage(bizMngNo, bizDgr);
        	}
        	else if(this.isFuncId == "CHG2") {
        		this.divDetail.form.fnCallChgDoc();
        	}
        	else if(this.isFuncId == "CHG3") {
        		this.divDetail.form.fnCallChgMod();
        	}
        	else if(this.isFuncId == "CHG4") {
        		this.divDetail.form.fnCallChgReg();
        	}
        };

        this.fnPrdLoadComplete = function()
        {
        	trace("===================== fnPrdLoadComplete 수신완료!!! ===================this.isFuncId => " + this.isFuncId);
        	this.setWaitCursor(false);

        	this.isCallRegPage = false;
        	this.isCallChgPage = false;
        	this.isCallPrdPage = true;
        	this.isCallYmdPage = false;

        	this.isCallDtlPage = false;

        	if(this.isFuncId == "PRD1") {
        		var bizMngNo = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var bizDgr = this.dsList.getColumn(this.dsList.rowposition, "bizDgr");

        		trace("========================== bizMngNo : " + bizMngNo);
        		trace("========================== bizDgr : " + bizDgr);

        		this.fnCallPrdPage(bizMngNo, bizDgr);
        	}
        	else if(this.isFuncId == "PRD2") {
        		this.divDetail.form.fnCallPrdDoc();
        	}
        	else if(this.isFuncId == "PRD3") {
        		this.divDetail.form.fnCallPrdMod();
        	}
        	else if(this.isFuncId == "PRD4") {
        		this.divDetail.form.fnCallPrdReg();
        	}
        };

        this.fnYmdLoadComplete = function()
        {
        	trace("===================== fnYmdLoadComplete 수신완료!!! ===================this.isFuncId => " + this.isFuncId);
        	this.setWaitCursor(false);

        	this.isCallRegPage = false;
        	this.isCallChgPage = false;
        	this.isCallPrdPage = false;
        	this.isCallYmdPage = true;

        	this.isCallDtlPage = false;

        	if(this.isFuncId == "YMD1") {
        		var bizMngNo = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var bizDgr = this.dsList.getColumn(this.dsList.rowposition, "bizDgr");

        		trace("========================== bizMngNo : " + bizMngNo);
        		trace("========================== bizDgr : " + bizDgr);

        		this.fnCallYmdPage(bizMngNo, bizDgr);
        	}
        	else if(this.isFuncId == "YMD2") {
        		this.divDetail.form.fnCallYmdDoc();
        	}
        	else if(this.isFuncId == "YMD3") {
        		this.divDetail.form.fnCallYmdMod();
        	}
        	else if(this.isFuncId == "YMD4") {
        		this.divDetail.form.fnCallYmdReg();
        	}
        };

        this.fnCallRegPage = function()
        {
        	if(this.isCallRegPage) {

        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(false);
        		this.divReg.set_visible(true);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= "";
        		objArgs.bizDgr 			= "";
        		objArgs.sts				= "REG";
        		objArgs.dgrRegRsnCd	    = "BGC0001";
        		objArgs.pgmBizMngNo		= "";
        		objArgs.bizTypeCd		= "";

        		this.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        // 상세에서 사용할 등록페이지 로딩여부 확인
        this.fnRtnDtlDiv = function() {
        	return this.isCallDtlPage;
        };

        this.fnRtnRegDiv = function() {
        	return this.isCallRegPage;
        };

        this.fnRtnChgDiv = function() {
        	return this.isCallChgPage;
        };

        this.fnRtnPrdDiv = function() {
        	return this.isCallPrdPage;
        };

        this.fnRtnYmdDiv = function() {
        	return this.isCallYmdPage;
        };

        this.fnGetIsFuncId = function() {
        	return this.isFuncId;
        };

        this.fnSetIsFuncId = function(isFuncId) {
        	this.isFuncId = isFuncId;
        };

        this.fnSetRegDiv = function(val) {
        	this.isCallRegPage = val;
        };

        this.fnSetChgDiv = function(val) {
        	this.isCallChgPage = val;
        };

        this.fnSetPrdDiv = function(val) {
        	this.isCallPrdPage = val;
        };

        this.fnSetYmdDiv = function(val) {
        	this.isCallYmdPage = val;
        };

        this.fnSetDtlDiv = function(val) {
        	this.isCallDtlPage = val;
        };


        // 액셀 다운로드
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyExcel.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyExcel.irs";
        	}

        	this.srhBizGbn = this.dsSrh.getColumn(0, "srhBizGbn");
        	this.srhAplyClCd = this.dsSrh.getColumn(0, "srhAplyClCd");
        	this.srhBizFormCd = this.dsSrh.getColumn(0, "srhBizFormCd");
        	this.srhBizNm = this.dsSrh.getColumn(0, "srhBizNm");
        	this.srhPrcsTypeCd = this.dsSrh.getColumn(0, "srhPrcsTypeCd");
        	this.srhBizFldCd = this.dsSrh.getColumn(0, "srhBizFldCd");
        	this.srhBizDtlsFldCd = this.dsSrh.getColumn(0, "srhBizDtlsFldCd");
        	this.srhBizTypeCd = this.dsSrh.getColumn(0, "srhBizTypeCd");
        	this.srhBizScalCd = this.dsSrh.getColumn(0, "srhBizScalCd");
        	this.srhInstMngNo = this.dsSrh.getColumn(0, "srhInstMngNo");
        	this.srhAddDataYn = this.dsSrh.getColumn(0, "srhAddDataYn");
        	this.srhMhdlg = this.dsSrh.getColumn(0, "srhMhdlg");

        	var url = nexacro.getApplication().Tran.fwUrl + callUrl;

        	this.fdtExcel.set_url(url);

        	this.fdtExcel.setPostData("srhBizGbn", this.srhBizGbn);
        	this.fdtExcel.setPostData("srhAplyClCd", this.srhAplyClCd);
        	this.fdtExcel.setPostData("srhBizFormCd", this.srhBizFormCd);
        	this.fdtExcel.setPostData("srhBizNm", this.srhBizNm);
        	this.fdtExcel.setPostData("srhPrcsTypeCd", this.srhPrcsTypeCd);
        	this.fdtExcel.setPostData("srhBizFldCd", this.srhBizFldCd);
        	this.fdtExcel.setPostData("srhBizDtlsFldCd", this.srhBizDtlsFldCd);
        	this.fdtExcel.setPostData("srhBizTypeCd", this.srhBizTypeCd);
        	this.fdtExcel.setPostData("srhBizScalCd", this.srhBizScalCd);
        	this.fdtExcel.setPostData("srhInstMngNo", this.srhInstMngNo);
        	this.fdtExcel.setPostData("srhAddDataYn", this.srhAddDataYn);
        	this.fdtExcel.setPostData("srhMhdlg", this.srhMhdlg);

        	this.fdtExcel.setPostData("downloadExcelFileNm","사업통합신청목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","사업통합신청내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();
        };

        this.aprvAplyM00_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.divList.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);
        		this.dsSrh.setColumn(0, "srhBizNm", this.divList.form.divSearch.form.edtBizNm.text);
        		this.dsSrh.setColumn(0, "srhMhdlg", this.divList.form.divSearch.form.edtMhdlg.text);
        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        };

        this.fnCallChgPage = function(bizMngNo, bizDgr)
        {
        	if(this.isCallChgPage) {

        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(false);
        		this.divReg.set_visible(true);

        		var bizMngNo   = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var prgrmMngNo = this.dsList.getColumn(this.dsList.rowposition, "prgrmMngNo");
        		var bizTypeCd  = this.dsList.getColumn(this.dsList.rowposition, "bizTypeCd");
        		var sts 	   = "";

        		// 프로그램사업
        		if(bizTypeCd == "BTC0003") {
        			// 프로그램내 단위사업
        			if(prgrmMngNo != undefined && prgrmMngNo != "" && bizMngNo != prgrmMngNo) {
        				sts 	   = "PGMREGUP";
        			}else {
        				sts 	   = "REGUP";
        			}
        		}else {
        			sts 	   = "REGUP";
        		}
        		trace("===>>> bizMngNo : " + bizMngNo);
        		trace("===>>> prgrmMngNo : " + prgrmMngNo);
        		trace("===>>> bizTypeCd : " + bizTypeCd);
        		trace("===>>> sts : " + sts);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= bizMngNo;
        		objArgs.bizDgr 			= bizDgr;
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd	    = "BGC0002";
        		objArgs.pgmBizMngNo		= "";
        		objArgs.bizTypeCd		= "";

        		this.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallPrdPage = function(bizMngNo, bizDgr)
        {
        	if(this.isCallPrdPage) {

        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(false);
        		this.divReg.set_visible(true);

        		var bizMngNo   = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var prgrmMngNo = this.dsList.getColumn(this.dsList.rowposition, "prgrmMngNo");
        		var bizTypeCd  = this.dsList.getColumn(this.dsList.rowposition, "bizTypeCd");
        		var sts 	   = "";

        		// 프로그램사업
        		if(bizTypeCd == "BTC0003") {
        			// 프로그램내 단위사업
        			if(prgrmMngNo != undefined && prgrmMngNo != "" && bizMngNo != prgrmMngNo) {
        				sts 	   = "PGMREGUP";
        			}else {
        				sts 	   = "REGUP";
        			}
        		}else {
        			sts 	   = "REGUP";
        		}
        		trace("===>>> bizMngNo : " + bizMngNo);
        		trace("===>>> prgrmMngNo : " + prgrmMngNo);
        		trace("===>>> bizTypeCd : " + bizTypeCd);
        		trace("===>>> sts : " + sts);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= bizMngNo;
        		objArgs.bizDgr 			= bizDgr;
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd	    = "BGC0003";
        		objArgs.pgmBizMngNo		= "";
        		objArgs.bizTypeCd		= "";

        		this.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallYmdPage = function(bizMngNo, bizDgr)
        {
        	if(this.isCallYmdPage) {

        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(false);
        		this.divReg.set_visible(true);

        		var bizMngNo   = this.dsList.getColumn(this.dsList.rowposition, "bizMngNo");
        		var prgrmMngNo = this.dsList.getColumn(this.dsList.rowposition, "prgrmMngNo");
        		var bizTypeCd  = this.dsList.getColumn(this.dsList.rowposition, "bizTypeCd");
        		var sts 	   = "";

        		// 프로그램사업
        		if(bizTypeCd == "BTC0003") {
        			// 프로그램내 단위사업
        			if(prgrmMngNo != undefined && prgrmMngNo != "" && bizMngNo != prgrmMngNo) {
        				sts 	   = "PGMREGUP";
        			}else {
        				sts 	   = "REGUP";
        			}
        		}else {
        			sts 	   = "REGUP";
        		}
        		trace("===>>> bizMngNo : " + bizMngNo);
        		trace("===>>> prgrmMngNo : " + prgrmMngNo);
        		trace("===>>> bizTypeCd : " + bizTypeCd);
        		trace("===>>> sts : " + sts);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= bizMngNo;
        		objArgs.bizDgr 			= bizDgr;
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd	    = "BGC0004";
        		objArgs.pgmBizMngNo		= "";
        		objArgs.bizTypeCd		= "";

        		this.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.aprvAplyM00_onkeydown,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staBizGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.cboBizTypeCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizTypeCd_onitemchanged,this);
            this.divList.form.divSearch.form.cboBizFldCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizFldCd_onitemchanged,this);
            this.divList.form.divSearch.form.edtMhdlg.addEventHandler("onkeydown",this.divList_divSearch_edtMhdlg_onkeydown,this);
            this.divList.form.divSearch.form.edtBizNm.addEventHandler("onkeydown",this.divList_divSearch_edtBizNm_onkeydown,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("AprvAplyM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
