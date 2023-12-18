(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionS02");
            this.set_titletext("방법론 직권수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,1250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlBtn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPreBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetailOld", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExplnFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMhdlgDtl","1","30","1565","744",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea","0","0",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNmArea","4","staAplyClCdNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNmArea","0","staPrcndCdNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNmArea","0","staOrgtNmArea:-1",null,"44","1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","0","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("3");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","3","-50",null,"1","-3",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNm","0","staAplyClCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("11");
            obj.set_text("제·개정구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCd","staAplyClCdNm:7","staAplyClCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtPrcndCd","157","staPrcndCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNm","0","staPrcndCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("6");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNm","0","staOrgtNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("7");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNmArea","0","staKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNm","0","staKrnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("9");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClaus","157","staAgreeClausNmArea:-37","1193","33",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtKrnNm","157","staKrnNmArea:-37","600","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_tooltiptext("방법론명(국문)");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtOrgtNm","157","staOrgtNmArea:-37","600","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_tooltiptext("방법론명(원문)");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgrStiplArea","1","staAgreeClausNmArea:-1",null,"138","-2",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            obj.set_enable("true");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFldArea","0","staAgrStiplArea:-1",null,"175","-1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Button("btnDelMhdlg",null,"359","98","30","62",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Button("btnAddMhdlg",null,"359","98","30","167",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("19");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Combo("cboBizFldDtls","391","359","227","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsBizDtlsFldCds");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Combo("cboBizFld","157","359","227","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsBizFldCds");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdAgrStiplList","157","226",null,"116","6",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_tooltiptext("협정·약정·MOU ");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"790\"/><Column size=\"400\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"협정/약정MOU명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"체결국\"/><Cell col=\"2\" text=\"상세\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:cncldKrnNm\"/><Cell col=\"1\" text=\"bind:ntnNm\"/><Cell col=\"2\" text=\"상세\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgrStipNm","0","staAgreeClausNm:-1","150","138",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("23");
            obj.set_text("협정/약정/MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFldNm","0","staAgrStipNm:-1","150","175",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("24");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdBizFldsList","157","397",null,"116","6",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_tooltiptext("사업분야");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"570\"/><Column size=\"570\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업분야\" cssclass=\"Cell_NoLine\"/><Cell col=\"2\" text=\"사업 세부분야\"/><Cell col=\"3\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:bizFldKornNm\"/><Cell col=\"2\" text=\"bind:bizDtlsFldKornNm\"/><Cell col=\"3\" text=\"bind:mhdlgUnqno\" edittype=\"none\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqnoArea","0","staBizFldArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmdArea","0","staMhdlgUnqnoArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgUnqno","157","532",null,"30","814",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqno","0","staBizFldNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("29");
            obj.set_text("방법론고유번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divVldbangYmd","157","575","124","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("30");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            obj.set_tooltiptext("유효시작일자");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmd","0","staMhdlgUnqno:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("31");
            obj.set_text("유효시작일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrpsdArea","0","staVldBgngYmdArea:-1",null,"132","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divExplnFlmno","157","619","800","120",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("33");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrpsd","0","staVldBgngYmd:-1","150","132",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("34");
            obj.set_text("설명파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("stc00","780","93","1124","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("35");
            obj.set_text("(주의) 방법론명을 수정하게 되면 사용자에게 혼란을 야기할수 있습니다.");
            obj.set_color("#ff4242");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Radio("rdoReddPlusYn","940","staAgreeClausNmArea:-37",null,"30","424",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("36");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_tooltiptext("REDD+ 유무");
            var divMhdlgDtl_form_rdoReddPlusYn_innerdataset = new nexacro.NormalDataset("divMhdlgDtl_form_rdoReddPlusYn_innerdataset", obj);
            divMhdlgDtl_form_rdoReddPlusYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(divMhdlgDtl_form_rdoReddPlusYn_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staReddPlusYn","783","staAgreeClausNmArea:-44","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("37");
            obj.set_text("REDD+ 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divMhdlgDtl:20",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","75","32","78",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Static("staMhdlgInfoTitle","0","0",null,"30","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMhdlgDtl.form.divVldbangYmd
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form.divVldbangYmd.form,function(p){});
            this.divMhdlgDtl.form.divVldbangYmd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgDtl.form.divExplnFlmno
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form.divExplnFlmno.form,function(p){});
            this.divMhdlgDtl.form.divExplnFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgDtl.form
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form,function(p){});
            this.divMhdlgDtl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,1250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMhdlgDtl.form.stsPrpsdNm","text","dsMhdlgDetail","prpsdFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMhdlgDtl.form.edtOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMhdlgDtl.form.edtKrnNm","value","dsMhdlgDetail","mhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMhdlgDtl.form.edtAplyClCd","value","dsMhdlgDetail","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMhdlgDtl.form.edtPrcndCd","value","dsMhdlgDetail","regRsnCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMhdlgDtl.form.edtAgreeClaus","value","dsMhdlgDetail","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMhdlgDtl.form.edtOldMhdlgNm","value","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMhdlgDtl.form.stc00","text","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMhdlgDtl.form.edtMhdlgUnqno","value","dsMhdlgDetail","mhdlgUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMhdlgDtl.form.rdoReddPlusYn","value","dsMhdlgDetail","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgPrcndS02.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionS02 Form
        * FILE NAME     : sampleFormActionS02.xfdl
        * DESCRIPTION   : 화면전환샘플 (등록)
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
        this.fvIsReddPlus = false;
        this.fvModify = false;
        this.fvReddPlusAlertYn = false;
        this.fvFilterArray = '';

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
        	trace("[sampleFormActionS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	// 일달력 초기화 호출 - 유효시작일자
        	var objParam1 = { objDs:this.dsMhdlgDetail						// 바인딩 데이터셋
        					,sBindCol:"vldBgngYmd"							// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"vldBgngYmd"							// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divMhdlgDtl.form.divVldbangYmd.form.fnInitCommonCalendar(this, objParam1);

        	var objParam2 = { objDs:this.dsMhdlgDetail								// 바인딩 데이터셋
        					,sBindCol:"explnFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"explnFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divMhdlgDtl.form.divExplnFlmno.form.fnInitRaonK(this, objParam2);

        	this.getOwnerFrame().form.divWork.form.fnLoadComplete('MhdlgPrcndS02');
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
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "mhdlgInfo" :
        			// 후처리 코드
        			this.divMhdlgDtl.form.cboBizFldDtls.set_index(0);
        			this.divMhdlgDtl.form.cboBizFld.set_index(0);

        			// 변경항목 표시 - 콤포넌트 - 초기화
        			this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "mhdlgOrgtNm"     , this.divMhdlgDtl.form.edtOrgtNm, true);		// 방법론명(원문)
        			this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "mhdlgKrnNm"     , this.divMhdlgDtl.form.edtKrnNm, true);		// 방법론명(원문)
        			this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "rdoReddPlusYn"     , this.divMhdlgDtl.form.rdoReddPlusYn, true);	//
        			this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "vldBgngYmd"     , this.divMhdlgDtl.form.divVldbangYmd.form.calYmd, true);	//

        			var explnFlmno = this.dsMhdlgDetail.getColumn(0,'explnFlmno');
        			this.divMhdlgDtl.form.divExplnFlmno.form.fnSearchFile(explnFlmno);
        			this.fnCallbackFilter();
        			this.fnReddPlusFormChange();
        			this.fvModify = false;
        			break;
        		case "mhdlgAdminUpdate" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.fnCallMhdlgInfo();
        		default:
        			break;
        	}
        };

        //팝업콜백
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 협정약정 검색 팝업
        		case "popModalAgrstipP01" :
        			trace("cncldMgno > " + objRtnValue["cncldMgno"]);
        			trace("cncldDgr > " + objRtnValue["cncldDgr"]);
        			trace("cncldKrnNm > " + objRtnValue["cncldKrnNm"]);
        			if(!this.gfnIsNull(objRtnValue["cncldMgno"]))
        			{
        				var rRow = this.dsAgrStiplList.addRow();
        				this.dsAgrStiplList.setColumn(rRow, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsAgrStiplList.setColumn(rRow, "cncldDgr", objRtnValue["cncldDgr"]);
        				this.dsAgrStiplList.setColumn(rRow, "cncldKrnNm", objRtnValue["cncldKrnNm"]);
        				this.dsAgrStiplList.setColumn(rRow, "ntnNm", objRtnValue["ntnNm"]);
        				this.dsAgrStiplList.setColumn(rRow, "chk", "N");
        			}
        			break;
        		default:
        			break;
        	}
        };

        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "vldBgngYmd" :
        			// 후처리 코드
        			this.divMhdlgDtl_inputComp_onchange();
        			break;
        		default:
        			break;
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "explnFlmno" :
        			if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsExplnFlmnoFile.clearData();
        				var nRowCnt = this.dsExplnFlmnoFile.copyData(objRtn.objDs);
        				this.fvModify = true;
        			}else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsExplnFlmnoFile.clearData();
        				var nRowCnt = this.dsExplnFlmnoFile.copyData(objRtn.objDs);
        				this.fvModify = true;
        			}else if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsExplnFlmnoFile.clearData();
        				var nRowCnt = this.dsExplnFlmnoFile.copyData(objRtn.objDs);
        				this.fvModify = true;
        			}
        			break;
        		default :
        			break;
        	}
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        this.fnCallMhdlgInfo = function()
        {
        	trace("등록 수정 전 상세 호출...");
        	var callUrl = "/biz/mhdlg/mhdlgPrcnd/selectMhdlgPrcndDetail.irs";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "mhdlgInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsMhdlgInfo=dsMhdlgInfo";
         	objArgs.outds     		= " dsMhdlgDetail=dsMhdlgDetail"
        							+ " dsMhdlgDetailOld=dsMhdlgDetail"
        							+ " dsAgrStiplList=dsAgrStiplList"
        							+ " dsBizFldList=dsBizFldList"
        							+ " dsPreBizFldList=dsBizFldList"
        							+ " dsDocList=dsDocList"

         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 등록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {

        	this.dsMhdlgInfo.clearData();
        	this.dsMhdlgInfo.addRow();
        	this.dsMhdlgInfo.setColumn(0,'mhdlgMgno',objArgs.mhdlgMgno);
        	this.dsMhdlgInfo.setColumn(0,'mhdlgDgr',objArgs.mhdlgDgr);

        	this.fnCallMhdlgInfo();

        	this.scrollTo(0,0);
        };

        this.fnUpdtaeBisFldUnqno = function()
        {
        	var unqno = this.dsMhdlgDetail.getColumn(0,'mhdlgUnqno');
        	if(!this.gfnIsNull(unqno))
        	{
        		var cnt = this.dsBizFldList.getRowCount();
        		if(cnt > 0)
        		{
        			for(var n = 0; n < cnt; n++)
        			{
        				var bizFldDtlsCdMgno = this.dsBizFldList.getColumn(n,'bizFldDtlsCdMgno');
        				this.dsBizFldList.setColumn(n,'mhdlgUnqno',unqno+'-'+bizFldDtlsCdMgno.replace('-',''));
        			}
        		}
        	}else
        	{
        		var cnt = this.dsBizFldList.getRowCount();
        		if(cnt > 0)
        		{
        			for(var n = 0; n < cnt; n++)
        			{
        				this.dsBizFldList.setColumn(n,'mhdlgUnqno','');
        			}
        		}
        	}
        }

        this.fnReddPlusFormChange = function()
        {
        	if(this.fvIsReddPlus)
        	{
        		this.divMhdlgDtl.form.staReddPlusYn.set_height(44);
        		this.divMhdlgDtl.form.rdoReddPlusYn.set_height(30);
        		if(!this.fvReddPlusAlertYn)
        		{
        			var sMsgCode = "W000014";		// {0}(을/를) 입력 바랍니다.
        			var sParam = "REDD+ 유무";
        			this.gfnShowMessage(this, sMsgCode, sParam);
        			this.divMhdlgDtl.form.rdoReddPlusYn.set_index(1);
        			this.divMhdlgDtl.form.rdoReddPlusYn.setFocus();
        			this.fvReddPlusAlertYn = true;
        		}
        	}else
        	{
        		this.divMhdlgDtl.form.staReddPlusYn.set_height(0);
        		this.divMhdlgDtl.form.rdoReddPlusYn.set_height(0);
        		this.dsMhdlgDetail.setColumn(0,'reddPlusYn','N')
        	}
        	this.divMhdlgDtl.form.resetScroll();
        	this.resetScroll();
        }

        //저장된 정보를 가져올시 사업분야 필터링
        this.fnCallbackFilter = function()
        {
        	var cnt = this.dsBizFldList.getRowCount();
        	this.fvFilterArray = '';
        	if(cnt > 0)
        	{
        		for(var i=0; i < cnt; i++)
        		{
        			var bizFldDtlsCdMgno = this.dsBizFldList.getColumn(i,"bizFldDtlsCdMgno");
        			this.fvFilterArray += "&& bizFldDtlsCdMgno != '"+bizFldDtlsCdMgno+"'";
        			if(bizFldDtlsCdMgno == '14-B')
        			{
        				this.fvIsReddPlus = true;
        				this.fvReddPlusAlertYn = true;
        			}
        		}
        	}
        }

        this.fnModify = function()
        {
        	var rowTypeCd = this.dsMhdlgDetail.getRowType(0);
        	if( rowTypeCd == 4  || this.fvModify)
        	{
        		this.fvModify = true;
        	}else
        	{
        		this.fvModify = false;
        	}

        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        this.cboBizFld_onitemchanged = function(obj,e)
        {
        		//이벤트정보가 있을 경우
        	if(e != undefined || e != null)
        	{
        		trace("[divList_divSearch_cboBizFldCd_onitemchanged]e.prevalue:"+e.prevalue+"|e.postvalue:"+e.postvalue);
                var bizFldCdMgno = e.postvalue;
                this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCds.filter("(bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"')" + this.fvFilterArray);

        		this.divMhdlgDtl.form.cboBizFldDtls.set_index(0);
        	}
        };

        this.btnAddMhdlg_onclick = function(obj,e)
        {
        	var bizFld = this.divMhdlgDtl.form.cboBizFld.text;
        	var bizDtlsFld = this.divMhdlgDtl.form.cboBizFldDtls.text;
        	var bizFidCdMgno = this.divMhdlgDtl.form.cboBizFld.value;
        	var bizFldDtlsCdMgno = this.divMhdlgDtl.form.cboBizFldDtls.value;
        	if(bizFldDtlsCdMgno == '14-B')
        	{
        		this.fvIsReddPlus = true;
        	}

        	if(this.gfnIsNull(bizFld)|| this.gfnIsNull(bizFidCdMgno))
        	{
        		var sMsgCode = "W000014";		// {0}(을/를) 입력 바랍니다.
        		var sParam = "사업분야";
        		this.gfnShowMessage(this, sMsgCode, sParam);
        		return;
        	}

        	if( this.gfnIsNull(bizDtlsFld) || this.gfnIsNull(bizFldDtlsCdMgno))
        	{
        		var sMsgCode = "W000014";		// {0}(을/를) 입력 바랍니다.
        		var sParam = "사업상세분야";
        		this.gfnShowMessage(this, sMsgCode, sParam);
        		return;
        	}
        	var rRow = this.dsBizFldList.addRow();
        	this.dsBizFldList.setColumn(rRow,"bizFldCdMgno",bizFidCdMgno);
        	this.dsBizFldList.setColumn(rRow,"bizFldKornNm",bizFld);
        	this.dsBizFldList.setColumn(rRow,"bizFldDtlsCdMgno",bizFldDtlsCdMgno);
        	this.dsBizFldList.setColumn(rRow,"bizDtlsFldKornNm",bizDtlsFld);
        	this.dsBizFldList.setColumn(rRow,"chk",'');
        	this.dsBizFldList.setColumn(rRow,"reddPlusYn",'N');
        	this.dsBizFldList.setColumn(rRow,"mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        	this.dsBizFldList.setColumn(rRow,"mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));

        	this.fvFilterArray += "&& bizFldDtlsCdMgno != '"+bizFldDtlsCdMgno+"'";

        	this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCds.filter("bizFldCdMgno == ''");

        	this.divMhdlgDtl.form.cboBizFldDtls.set_index(0);
        	this.divMhdlgDtl.form.cboBizFld.set_index(0);
        	this.fnUpdtaeBisFldUnqno();
        	this.fnReddPlusFormChange();
        	this.fvModify = true;
        };

        //사업분야 삭제
        this.btnDelMhdlg_onclick = function(obj,e)
        {
        	var arrRows = this.dsBizFldList.extractRows("chk=='Y'");
        	var arrRows2 = this.dsBizFldList.extractRows("bizFldDtlsCdMgno=='14-B' && chk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsBizFldList.deleteMultiRows(this.dsBizFldList.extractRows("chk=='Y'"));
        		if(arrRows2 >= 0 && arrRows2.length >= 1)
        		{
        			this.fvIsReddPlus = false;
        			this.fvReddPlusAlertYn = false;
        		}
        		this.fnReddPlusFormChange();
        		this.fvModify = true;
        		this.fnCallbackFilter()
        	}
        };


        //협정약정검색팝업호출
        this.btnAgreeSearch_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalAgrstipP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        this.divMhdlgInfoArea_edtMhdlgUnqno_onchanged = function(obj,e)
        {
        	this.fnUpdtaeBisFldUnqno();
        };


        this.divComBtn_Button01_onclick = function(obj,e)
        {
        	this.fnModify();
        	if(!this.fvModify)
        	{
        		this.gfnShowMessage(this, "수정사항이 없습니다.")
        		return false;
        	}
        	// 사업체명
        	if(this.gfnIsNull(this.divMhdlgDtl.form.edtOrgtNm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divMhdlgDtl.form.edtOrgtNm.tooltiptext, function(svcid, variant) {
        			this.divMhdlgDtl.form.edtOrgtNm.setFocus();
        		});
        		return false;
        	}

        	// 사업체명
        	if(this.gfnIsNull(this.divMhdlgDtl.form.edtKrnNm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divMhdlgDtl.form.edtKrnNm.tooltiptext, function(svcid, variant) {
        			this.divMhdlgDtl.form.edtKrnNm.setFocus();
        		});
        		return false;
        	}

        	// 사업체명
        	if(this.gfnIsNull(this.dsMhdlgDetail.getColumn(0,'vldBgngYmd'))) {
        		this.gfnShowMessage(this, "W000014", "방법론 유효시작일", function(svcid, variant) {
        			this.divMhdlgDtl.form.divVldbangYmd.setFocus();
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        		var objArgs = {};
        		objArgs.svcId 			= "mhdlgAdminUpdate";
        		objArgs.url 			=  "/biz/mhdlg/mhdlgPrcndy/updateMhdlg.irs";
        		objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail" 	//방법론상세
        								+ " dsBizFldList=dsBizFldList:U"
        								+ " dsExplnFlmnoFile=dsExplnFlmnoFile"; 		//사업분야목록
        		objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";	//방법론상세
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        		}
        	});
        };

        this.divMhdlgInfoArea_rdoReddPlusYn_onitemchanged = function(obj,e)
        {
        	var arrRows = this.dsBizFldList.extractRows("bizFldDtlsCdMgno=='14-B'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		trace("변경없음");
        	}
        	else {
        		this.dsBizFldList.setColumn(arrRows[0],'reddPlusYn',e.postvalue);
        	}
        	this.divMhdlgDtl_inputComp_onchange()
        };

        /**
         * @description 변경항목 표시 - 콤포넌트
        */
        this.setEffectComp = function(dsObj, orgDsObj, idName, compObj, initFlag)
        {
        	var bgColor = "#FAEBD7";
        	var fontColor = "#DC143C"

        	if(initFlag == true) {
        		compObj.set_background("");
        		compObj.set_color("");
        	} else {
        		/* 값이 다르면 효과주기 - 변경이력 적재 대상 항목 효과주기 */
        		if(dsObj.getColumn(0, idName) != orgDsObj.getColumn(0, idName)) {
        			compObj.set_background(bgColor);
        			compObj.set_color(fontColor);
        			this.fvModify = true;
        		} else {
        			compObj.set_background("");
        			compObj.set_color("");
        			this.fvModify = false;
        		}
        	}

        }

        this.divMhdlgDtl_inputComp_onchange = function(obj,e)
        {
        	// 변경항목 표시 - 콤포넌트 - 초기화
        	this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "mhdlgOrgtNm"     , this.divMhdlgDtl.form.edtOrgtNm, false);		// 방법론명(원문)
        	this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "mhdlgKrnNm"     , this.divMhdlgDtl.form.edtKrnNm, false);		// 방법론명(원문)
        	this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "reddPlusYn"     , this.divMhdlgDtl.form.rdoReddPlusYn, false);	//
        	this.setEffectComp(this.dsMhdlgDetail, this.dsMhdlgDetailOld, "vldBgngYmd"     , this.divMhdlgDtl.form.divVldbangYmd.form.calYmd, false);	//
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divMhdlgDtl.form.staAplyClCdNm.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divMhdlgDtl.form.edtPrcndCd.addEventHandler("onchanged",this.divMhdlgDtl_edtPrcndCd_onchanged,this);
            this.divMhdlgDtl.form.staAgreeClausNm.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_01_onclick,this);
            this.divMhdlgDtl.form.edtKrnNm.addEventHandler("onchanged",this.divMhdlgDtl_inputComp_onchange,this);
            this.divMhdlgDtl.form.edtOrgtNm.addEventHandler("onchanged",this.divMhdlgDtl_inputComp_onchange,this);
            this.divMhdlgDtl.form.btnDelMhdlg.addEventHandler("onclick",this.btnDelMhdlg_onclick,this);
            this.divMhdlgDtl.form.btnAddMhdlg.addEventHandler("onclick",this.btnAddMhdlg_onclick,this);
            this.divMhdlgDtl.form.cboBizFld.addEventHandler("onitemchanged",this.cboBizFld_onitemchanged,this);
            this.divMhdlgDtl.form.edtMhdlgUnqno.addEventHandler("onchanged",this.divMhdlgInfoArea_edtMhdlgUnqno_onchanged,this);
            this.divMhdlgDtl.form.staPrpsd.addEventHandler("onclick",this.div01_00_00_00_div01_00_00_01_01_staBizPlnd_onclick,this);
            this.divMhdlgDtl.form.rdoReddPlusYn.addEventHandler("onitemchanged",this.divMhdlgInfoArea_rdoReddPlusYn_onitemchanged,this);
            this.divMhdlgDtl.form.staReddPlusYn.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.Button01.addEventHandler("onclick",this.divComBtn_Button01_onclick,this);
            this.staMhdlgInfoTitle.addEventHandler("onclick",this.staMhdlgInfoTitle_onclick,this);
        };
        this.loadIncludeScript("MhdlgPrcndS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
