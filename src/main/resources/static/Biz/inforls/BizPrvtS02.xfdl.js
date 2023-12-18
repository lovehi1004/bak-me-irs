(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BizPrvtS02");
            this.set_titletext("사업비공개 신청 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,2300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocSbmsnHstryList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvtDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvtAplyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prvtTrgtClCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvtTrgtClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndPrvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvtAplyRsn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvtDlbrRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrvtDlbrRegDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDocSbmsnHstry","0","59",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocSbmsnHstryList","0","0",null,"130","0",null,null,null,null,null,this.divDocSbmsnHstry.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocSbmsnHstryList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"처리결과\"/><Cell col=\"4\" text=\"처리일자\"/><Cell col=\"5\" text=\"관장기관\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:aplyTypeCdNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:userNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:prcsTypeCdNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:prcsYmd\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:cmptncInstMngNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\"/></Band></Format></Formats>");
            this.divDocSbmsnHstry.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","20",null,null,"1456","divDocSbmsnHstry:9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","divDocSbmsnHstry:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사업정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divBizInfo","0","sta00:10",null,"516","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","352",null,"164","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","255",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","172",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCdNm","157","7",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","0","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","136",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("4");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","129","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("8");
            obj.set_text("사업명(영문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","172","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("9");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","179",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","255","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("12");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","352","150","164",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("13");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("16");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCdNm","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtAgreeMgnoNm","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Grid("grdPgmMhdlgList","157","393",null,"115","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("18");
            obj.set_binddataset("dsPgmMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1000\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/></Band><Band id=\"body\"><Cell text=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","358",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("21");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","50%","86","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("22");
            obj.set_text("사업유형/규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta08_01_00:7","93",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","1","212",null,"44","-1",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01","0","212","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("24");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtKoffPrnmntYmd","157","219",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","50%","255","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("27");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00","sta08_01_00_00:7","262",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("28");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01_00","0","298",null,"55","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("Static00","157","305","120","40",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("output");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","298","150","55",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("29");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCdNm","sta08_02:7","93",null,"30","sta08_01_00:7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("33");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtCertVldTypeCdNm","sta08_00_00_00:7","262",null,"30","sta08_01_00_00:7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","divBizInfo:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사업자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divBzmnInfo","0","sta00_00:10",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","86",null,"44","0",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_Label");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta10","69.99%","0","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","sta02:7","7",null,"30","sta10:7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtBrno","sta10:7","7",null,"30","7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta15","69.99%","86","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","sta15:7","93",null,"30","7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta17","39.53%","86","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","sta17:7","93",null,"30","sta15:7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00","149","86","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","sta08_00:7","93",null,"30","sta17:7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta17_00","39.53%","129","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtEml","sta17_00:7","136",null,"30","7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","129","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtTel","sta08_00_00:7","136",null,"30","sta17_00:7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta08","0","86","150","87",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","43",null,"44","0",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta10_00","69.99%","43","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("21");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizEnfcPlcNm","sta10_00:7","50",null,"30","7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","43","150","44",null,null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("19");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","sta02_00:7","50",null,"30","sta10_00:7",null,null,null,null,null,this.divBzmnInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBzmnInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","0","divBzmnInfo:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업 비공개 신청 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divPrvtAplyInfo","0","sta00_00_01_01:10",null,"321","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","183",null,"141","0",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"55","0",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","55",null,null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("1");
            obj.set_text("정보 비공개\r\n신청항목");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","183","150","141",null,null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("3");
            obj.set_text("제출서류");
            obj.set_cssclass("sta_WF_Label");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","54",null,"131","0",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","54","150","131",null,null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("7");
            obj.set_text("정보 비공개 \r\n신청사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtPrvtTrgtClCdNm","157","7",null,"40","7",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Edit("edtPrvtAplyRsn","157","61",null,"117","7",null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni","162","200","800","120",null,null,null,null,null,null,this.divPrvtAplyInfo.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Div("divDlbrRslt","0","divPrvtAplyInfo:30",null,"415","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrRslt","0","50",null,"360","0",null,null,null,null,null,this.divDlbrRslt.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Edit("edtPrvtDgr","157","7",null,"30","7",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta07","0","216",null,"144","0",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("4");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","216","150","144",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("7");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("8");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"131","0",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","131",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("11");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Edit("edtDlbrTypeCdNm","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Edit("edtDlbrDt","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Edit("edtDlbrOpnn","157","93",null,"117","7",null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Div("divRaonKDlbrRsltSingleUni","162","230","800","120",null,null,null,null,null,null,this.divDlbrRslt.form.divDlbrRslt.form);
            obj.set_taborder("14");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlbrRslt.form.divDlbrRslt.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","0","342","30",null,null,null,null,null,null,this.divDlbrRslt.form);
            obj.set_taborder("1");
            obj.set_text("심의결과");
            obj.set_cssclass("sta_WF_Title");
            this.divDlbrRslt.addChild(obj.name, obj);

            obj = new Div("divDlbrRsltReg","0","divDlbrRslt:30",null,"345","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrRsltReg","0","40",null,"305","0",null,null,null,null,null,this.divDlbrRsltReg.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"144","0",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Edit("edtPrvtDgrNm","157","7",null,"30","7",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("4");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("7");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","144",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("8");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrOpnn","157","93",null,"62","7",null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Combo("cboDlbrTypeCd","157","50","230","30",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsDlbrTypeCdA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Div("divRaonKDlbrRegSingleUni","162","170","800","120",null,null,null,null,null,null,this.divDlbrRsltReg.form.divDlbrRsltReg.form);
            obj.set_taborder("12");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlbrRsltReg.form.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00","0","0","342","30",null,null,null,null,null,null,this.divDlbrRsltReg.form);
            obj.set_taborder("1");
            obj.set_text("심의결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbrRsltReg.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","divDlbrRsltReg:30",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnRegRe",null,"0","88","32","btnList:10",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnSaveResult",null,"0","114","32","btnList:10",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDocSbmsnHstry.form
            obj = new Layout("default","",0,0,this.divDocSbmsnHstry.form,function(p){});
            this.divDocSbmsnHstry.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizInfo.form
            obj = new Layout("default","",0,0,this.divBizInfo.form,function(p){});
            this.divBizInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBzmnInfo.form
            obj = new Layout("default","",0,0,this.divBzmnInfo.form,function(p){});
            this.divBzmnInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrvtAplyInfo.form.divRaonKSingleUni
            obj = new Layout("default","",0,0,this.divPrvtAplyInfo.form.divRaonKSingleUni.form,function(p){});
            this.divPrvtAplyInfo.form.divRaonKSingleUni.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrvtAplyInfo.form
            obj = new Layout("default","",0,0,this.divPrvtAplyInfo.form,function(p){});
            this.divPrvtAplyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni
            obj = new Layout("default","",0,0,this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni.form,function(p){});
            this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRslt.form.divDlbrRslt.form
            obj = new Layout("default","",0,0,this.divDlbrRslt.form.divDlbrRslt.form,function(p){});
            this.divDlbrRslt.form.divDlbrRslt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRslt.form
            obj = new Layout("default","",0,0,this.divDlbrRslt.form,function(p){});
            this.divDlbrRslt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni
            obj = new Layout("default","",0,0,this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni.form,function(p){});
            this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRsltReg.form.divDlbrRsltReg.form
            obj = new Layout("default","",0,0,this.divDlbrRsltReg.form.divDlbrRsltReg.form,function(p){});
            this.divDlbrRsltReg.form.divDlbrRsltReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrRsltReg.form
            obj = new Layout("default","",0,0,this.divDlbrRsltReg.form,function(p){});
            this.divDlbrRsltReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,2300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBizInfo.form.edtAplyClCdNm","value","dsBizInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBizInfo.form.edtAgreeMgnoNm","value","dsBizInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBizInfo.form.edtAgreeClausCdNm","value","dsBizInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBizInfo.form.edtBizFormCdNm","value","dsBizInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBizInfo.form.edt02_01_00_00","value","dsBizInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBizInfo.form.edtBizOrgtNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBizInfo.form.edtBizKrnNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBizInfo.form.edtKoffPrnmntYmd","value","dsBizInfo","koffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBizInfo.form.edtCertVldTypeCdNm","value","dsBizInfo","certVldTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBizInfo.form.edt02_01_01_00_00_01_00","value","dsBizInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBizInfo.form.edtBizFldCdSnm","value","dsBizInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBzmnInfo.form.edtBzentNm","value","dsRegUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBzmnInfo.form.edtBrno","value","dsRegUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBzmnInfo.form.edtFlnm","value","dsRegUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBzmnInfo.form.edtDeptNm","value","dsRegUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBzmnInfo.form.edtJbpsNm","value","dsRegUsrInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divBzmnInfo.form.edtTel","value","dsRegUsrInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divBzmnInfo.form.edtEml","value","dsRegUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divBzmnInfo.form.edtBplcNm","value","dsBizInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divBzmnInfo.form.edtBizEnfcPlcNm","value","dsBizInfo","bizEnfcPlcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDlbrRsltReg.form.divDlbrRsltReg.form.edtPrvtDgrNm","value","dsPrvtDlbrReg","prvtDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDlbrRsltReg.form.divDlbrRsltReg.form.txaDlbrOpnn","value","dsPrvtDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDlbrRsltReg.form.divDlbrRsltReg.form.cboDlbrTypeCd","value","dsPrvtDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDlbrRsltReg.form.divDlbrRsltReg.form.cboBizTypeCd","value","dsBizInfo","bizTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divPrvtAplyInfo.form.edtPrvtTrgtClCdNm","value","dsPrvtAplyInfo","prvtTrgtClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPrvtAplyInfo.form.edtPrvtAplyRsn","value","dsPrvtAplyInfo","prvtAplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDlbrRslt.form.divDlbrRslt.form.edtPrvtDgr","value","dsPrvtDlbrRslt","prvtDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDlbrRslt.form.divDlbrRslt.form.edtDlbrTypeCdNm","value","dsPrvtDlbrRslt","dlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDlbrRslt.form.divDlbrRslt.form.edtDlbrDt","value","dsPrvtDlbrRslt","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDlbrRslt.form.divDlbrRslt.form.edtDlbrOpnn","value","dsPrvtDlbrRslt","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("BizPrvtS02.xfdl", function() {
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
        // 문서제출이력
        this.hDocSbmsnHstry = 130;

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
        	// 정보비공개 신청 = 제출서류
        	var objFileParam1 = { objDs:this.dsPrvtAplyInfo					// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFilePrvt"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divPrvtAplyInfo.form.divRaonKSingleUni.form.fnInitRaonK(this, objFileParam1);

        	// 정보비공개 신청 = 심의결과 파일
        	var objFileParam2 = { objDs:this.dsPrvtDlbrRslt					// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrRslt"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni.form.fnInitRaonK(this, objFileParam2);

        	// 정보비공개 신청 = 심의결과 등록파일
        	var objFileParam3 = { objDs:this.dsPrvtDlbrReg					// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrReg"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni.form.fnInitRaonK(this, objFileParam3);

        	// 입력창 css 초기화.
        	this.fnErrInit();
        };

        this.fnChangeDiv = function(objArgs) {
        	this.scrollTo(0,0);
        	this.dsSrh.setColumn(0, "prvtMgno", objArgs.prvtMgno);
        	this.dsSrh.setColumn(0, "prvtDgr", objArgs.prvtDgr);
        	this.dsSrh.setColumn(0, "bizMngNo", objArgs.bizMngNo);

        	var status = objArgs.status;
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		if("SEARCH" == objArgs.status) { //상세화면
        			this.divDlbrRslt.set_visible(false); // 심의결과
        			this.divDlbrRsltReg.set_visible(false); // 심의결과 등록
        			this.divCmmnBtn.form.btnRegRe.set_visible(false); // 문서보완 버튼
        			this.divCmmnBtn.form.btnSaveResult.set_visible(false); // 심의결과저장 버튼
        			this.divCmmnBtn.set_top("divPrvtAplyInfo:30");
        		} else if ("MOD" == objArgs.status) { //문서보완
        			this.divDlbrRslt.set_visible(true); // 심의결과
        			this.divDlbrRsltReg.set_visible(false); // 심의결과 등록
        			this.divCmmnBtn.form.btnRegRe.set_visible(true); // 문서보완 버튼
        			this.divCmmnBtn.form.btnSaveResult.set_visible(false); // 심의결과저장 버튼
        			this.divCmmnBtn.set_top("divDlbrRslt:30");
        		} else if ("APROVED" == objArgs.status) { //심의완료
        			this.divDlbrRslt.set_visible(true); // 심의결과
        			this.divDlbrRsltReg.set_visible(false); // 심의결과 등록
        			this.divCmmnBtn.form.btnRegRe.set_visible(false); // 문서보완 버튼
        			this.divCmmnBtn.form.btnSaveResult.set_visible(false); // 심의결과저장 버튼
        			this.divCmmnBtn.set_top("divDlbrRslt:30");
        		}
        	} else {
        		if("SEARCH" == objArgs.status || "APROVED" == objArgs.status) { //상세화면
        			this.divDlbrRslt.set_visible(true); // 심의결과
        			this.divDlbrRsltReg.set_visible(false); // 심의결과 등록
        			this.divCmmnBtn.form.btnRegRe.set_visible(false); // 문서보완 버튼
        			this.divCmmnBtn.form.btnSaveResult.set_visible(false); // 심의결과저장 버튼
        			this.divCmmnBtn.set_top("divDlbrRslt:30");
        		} else if ("DELIBERATE" == objArgs.status) { //심의 화면
        			this.divDlbrRslt.set_visible(false); // 심의결과
        			this.divDlbrRsltReg.set_visible(true); // 심의결과 등록
        			this.divCmmnBtn.form.btnRegRe.set_visible(false); // 문서보완 버튼
        			this.divCmmnBtn.form.btnSaveResult.set_visible(true); // 심의결과저장 버튼
        			this.divDlbrRsltReg.set_top("divPrvtAplyInfo:30");
        			this.divCmmnBtn.set_top("divDlbrRsltReg:30");
        		}
        	}

        	// 파일 데이터셋 초기화수행
        	this.dsPrvtDlbrRegDataFile.clearData();

        	// 상세 호출
        	this.fnCallDtlInfo();
        };

        // 화면 로딩 시 초기화
        this.fnErrInit = function() {
        	// 심의처리결과
        	this.divDlbrRsltReg.form.divDlbrRsltReg.form.cboDlbrTypeCd.set_cssclass("");
        	// 심의의견
        	this.divDlbrRsltReg.form.divDlbrRsltReg.form.txaDlbrOpnn.set_cssclass("");
        };

        this.fnCallDtlInfo = function()
        {
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "/biz/inforls/bizPrvt/selectBizPrvtDetail.irs";
        	}else {
        		callUrl = "/adm/inforls/bizPrvt/selectBizPrvtDetail.irs";
        	}

        	var outDs = "";
        	outDs = outDs + "dsDocSbmsnHstryList=dsDocSbmsnHstryList "; // 문서제출이력
        	outDs = outDs + "dsBizInfo=dsBizInfo "; // 사업정보
        	outDs = outDs + "dsRegUsrInfo=dsRegUsrInfo "; //사업자정보
        	outDs = outDs + "dsPgmMhdlgList=dsPgmMhdlgList "; //방법론
        	outDs = outDs + "dsPrvtDlbrRslt=dsPrvtDlbrRslt "; //심의결과
        	outDs = outDs + "dsPrvtDlbrReg=dsPrvtDlbrReg "; //심의결과등록
        	outDs = outDs + "dsPrvtAplyInfo=dsPrvtAplyInfo "; //사업 비공개 신청 정보

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // 목록 버튼 클릭
        this.divCmmnBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad = "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function(callBackId)
        {
        	var etcDataFlmno = this.dsPrvtAplyInfo.getColumn(0, "etcDataFlmno");
        	trace(">>> etcDataFlmno : " + etcDataFlmno);
        	if(this.gfnIsNull(etcDataFlmno)) {
        		this.divPrvtAplyInfo.form.divRaonKSingleUni.form.fnSearchFile("");
        	}else {
        		this.divPrvtAplyInfo.form.divRaonKSingleUni.form.fnSearchFile(etcDataFlmno);
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFilePrvt" :
        			if(objRtn.sDiv == "SEARCH") {
        				var dlbrFlmno = this.dsPrvtDlbrRslt.getColumn(0, "dlbrFlmno");
        				trace(">>> RsltdlbrFlmno : " + dlbrFlmno);
        				if(this.gfnIsNull(dlbrFlmno)) {
        					this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni.form.fnSearchFile("");
        				}else {
        					this.divDlbrRslt.form.divDlbrRslt.form.divRaonKDlbrRsltSingleUni.form.fnSearchFile(dlbrFlmno);
        				}
        			}
        			break;

        		case "singleFileDlbrRslt" :
        			if(objRtn.sDiv == "SEARCH") {
        				var dlbrFlmno = this.dsPrvtDlbrReg.getColumn(0, "dlbrFlmno");
        				trace(">>> RegdlbrFlmno : " + dlbrFlmno);
        				if(this.gfnIsNull(dlbrFlmno)) {
        					this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni.form.fnSearchFile("");
        				}else {
        					this.divDlbrRsltReg.form.divDlbrRsltReg.form.divRaonKDlbrRegSingleUni.form.fnSearchFile(dlbrFlmno);
        				}
        			}
        			break;

        		case "singleFileDlbrReg" :
        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsPrvtDlbrRegDataFile.clearData();
        				var nRowCnt = this.dsPrvtDlbrRegDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsPrvtDlbrRegDataFile.clearData();
        				var nRowCnt = this.dsPrvtDlbrRegDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsPrvtDlbrRegDataFile.clearData();
        				var nRowCnt = this.dsPrvtDlbrRegDataFile.copyData(objRtn.objDs);
        			}
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
        		case "save" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			// 화면전환
        			this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        			this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        			this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);
        			this.getOwnerFrame().form.divWork.form.divResult.set_visible(false);

        			// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        			var objArgs = {};
        			objArgs.isReLoad = "N";
        			this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);

        			break;
        		case "dtlInfo" :
        			this.fnCallFileStart();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        // 필수 항목 체크
        this.fnCallSaveValidCheck = function() {
        	var dlbrTypeCd = this.dsPrvtDlbrReg.getColumn(0, "dlbrTypeCd");
        	var dlbrOpnn = this.dsPrvtDlbrReg.getColumn(0, "dlbrOpnn");

        	if(this.gfnIsNull(dlbrTypeCd)) {
        		this.divDlbrRsltReg.form.divDlbrRsltReg.form.cboDlbrTypeCd.set_cssclass("error"); this.divDlbrRsltReg.form.divDlbrRsltReg.form.cboDlbrTypeCd.setFocus(); this.gfnShowMessage(this, "W000025", "심의처리결과", "fnMsgCallback", "msgAlert01"); return false;
        	}
        	if(this.gfnIsNull(dlbrOpnn)) {
        		this.divDlbrRsltReg.form.divDlbrRsltReg.form.txaDlbrOpnn.set_cssclass("error"); this.divDlbrRsltReg.form.divDlbrRsltReg.form.txaDlbrOpnn.setFocus(); this.gfnShowMessage(this, "W000025", "심의의견", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	return true;
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // 심의결과저장 버튼 클릭
        this.divCmmnBtn_btnSaveResult_onclick = function(obj,e)
        {
        	if(!this.fnCallSaveValidCheck()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave();
        		}
        	});
        };

        // 문서보완 버튼 클릭
        this.divRComBtn_btnRegRe_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divResult.set_visible(false);

        	var objArgs = {};
        	objArgs.bizMngNo	= this.dsSrh.getColumn(0, "bizMngNo");
        	objArgs.prvtMgno	= this.dsSrh.getColumn(0, "prvtMgno");
        	objArgs.prvtDgr 	= this.dsSrh.getColumn(0, "prvtDgr");
        	objArgs.status		= "REDOC";

        	this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        };

        // 문서제출이력 조회
        this.grdDocSbmsnHstryList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6) {
        		this.scrollTo(0,0);
        		this.dsSrh.setColumn(0, "prvtMgno", 	this.dsDocSbmsnHstryList.getColumn(e.row, "prvtMgno"));
        		this.dsSrh.setColumn(0, "prvtDgr", 		this.dsDocSbmsnHstryList.getColumn(e.row, "prvtDgr"));
        		this.fnCallDtlInfo();
        	}
        };

        // 심의결과저장
        this.fnCallSave = function()
        {
        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "";
        	} else {
        		callUrl = "/adm/inforls/bizPrvt/insertBizPrvtRvwRslt.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsPrvtDlbrReg=dsPrvtDlbrReg ";
        	inDs = inDs + "dsPrvtDlbrRegDataFile=dsPrvtDlbrRegDataFile ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";

        	var objArgs = {};
         	objArgs.svcId 			= "save";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // 문서제출이력 이력보기 버튼 클릭
        this.btnDocList_onclick = function(obj,e)
        {
        	if(this.divDocSbmsnHstry.height < 1) {
        		this.divDocSbmsnHstry.set_height(this.hDocSbmsnHstry);
        		this.divDocSbmsnHstry.form.resetScroll();
        	}
        	else {
        		this.divDocSbmsnHstry.set_height(0);
        		this.divDocSbmsnHstry.form.resetScroll();
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDocSbmsnHstry.form.grdDocSbmsnHstryList.addEventHandler("oncellclick",this.grdDocSbmsnHstryList_oncellclick,this);
            this.btnDocList.addEventHandler("onclick",this.btnDocList_onclick,this);
            this.divBizInfo.form.edtBizOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divBizInfo.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.edtKoffPrnmntYmd.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.divBizInfo.form.sta08_00_00_00_02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.sta00_00_01_01.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divPrvtAplyInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbrRsltReg.form.divDlbrRsltReg.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbrRsltReg.form.divDlbrRsltReg.form.txaDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbrRsltReg.form.sta00_00_01_01_00_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.divCmmnBtn_btnList_onclick,this);
            this.divCmmnBtn.form.btnRegRe.addEventHandler("onclick",this.divRComBtn_btnRegRe_onclick,this);
            this.divCmmnBtn.form.btnSaveResult.addEventHandler("onclick",this.divCmmnBtn_btnSaveResult_onclick,this);
        };
        this.loadIncludeScript("BizPrvtS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
