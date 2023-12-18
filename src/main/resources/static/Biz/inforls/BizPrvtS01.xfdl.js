(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BizPrvtS01");
            this.set_titletext("사업비공개관리등록수정화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,1300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBizInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoPrvtAply", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndPrvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvtAplyRsn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizPlndPrvtYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoPrvtAplyDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"prvtMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prvtTrgtClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndPrvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvtAplyRsn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoPrvtAplyDtlDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사업정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divBizInfo","0","sta00:10",null,"516","30",null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_taborder("6");
            obj.set_text("사업자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divBzmnInfo","0","sta00_00:10",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("0");
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
            obj.set_taborder("4");
            obj.set_text("사업 비공개 신청 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divBizPrvtAplyInfo","0","sta00_00_01_01:10",null,"331","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","183",null,"151","0",null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"55","0",null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","55",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("1");
            obj.set_text("정보 비공개\r\n신청항목");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","183","150","151",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("3");
            obj.set_text("제출서류");
            obj.set_cssclass("sta_WF_Label");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","54",null,"131","0",null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","54","150","131",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("6");
            obj.set_text("정보 비공개 \r\n신청사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new CheckBox("chkBizPlndPrvtYn","162","15","236","30",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("7");
            obj.set_text("사업계획서");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new TextArea("taePrvtAplyRsn","162","65","1380","108",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_maxlength("1000");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni","162","200","800","120",null,null,null,null,null,null,this.divBizPrvtAplyInfo.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divBizPrvtAplyInfo.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","divBizPrvtAplyInfo:30",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"0","100","32","btnList:10",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnRegRe",null,"0","88","32","btnList:10",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divTopBtn","0","20",null,null,"30","divBizInfo:-2",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetBiz",null,"0","120","32","7",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("사업 불러오기");
            obj.set_cssclass("btn_WF_Crud");
            this.divTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBizInfo.form
            obj = new Layout("default","",0,0,this.divBizInfo.form,function(p){});
            this.divBizInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBzmnInfo.form
            obj = new Layout("default","",0,0,this.divBzmnInfo.form,function(p){});
            this.divBzmnInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizPrvtAplyInfo.form.divRaonKSingleUni
            obj = new Layout("default","",0,0,this.divBizPrvtAplyInfo.form.divRaonKSingleUni.form,function(p){});
            this.divBizPrvtAplyInfo.form.divRaonKSingleUni.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizPrvtAplyInfo.form
            obj = new Layout("default","",0,0,this.divBizPrvtAplyInfo.form,function(p){});
            this.divBizPrvtAplyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,1300,this,function(p){});
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

            obj = new BindItem("item20","divBizPrvtAplyInfo.form.chkBizPlndPrvtYn","value","dsInfoPrvtAply","bizPlndPrvtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divBizPrvtAplyInfo.form.taePrvtAplyRsn","value","dsInfoPrvtAply","prvtAplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("BizPrvtS01.xfdl", function() {
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
        	var objFileParam = { objDs:this.dsInfoPrvtAplyDtl					// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFilePrvt"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divBizPrvtAplyInfo.form.divRaonKSingleUni.form.fnInitRaonK(this, objFileParam);
        };

        this.fnChangeDiv = function(objArgs) {
        	this.dsSrh.deleteAll();
        	this.dsSrh.addRow();

        	this.dsBizInfo.deleteAll();
        	this.dsPgmMhdlgList.deleteAll();
        	this.dsRegUsrInfo.deleteAll();
        	this.dsInfoPrvtAply.deleteAll();
        	this.dsInfoPrvtAply.addRow();

        	// 파일 데이터셋 초기화수행
        	this.dsInfoPrvtAplyDtlDataFile.clearData();

        	this.dsSrh.setColumn(0, "status", objArgs.status);
        	if(objArgs.status == "REDOC") { //문서보완요청
        		this.divTopBtn.form.btnGetBiz.set_visible(false);
        		this.divCmmnBtn.form.btnReg.set_visible(false);
        		this.divCmmnBtn.form.btnRegRe.set_visible(true);
        		this.dsSrh.setColumn(0, "bizMngNo", objArgs.bizMngNo);
        		this.dsSrh.setColumn(0, "prvtMgno", objArgs.prvtMgno);
        		this.dsSrh.setColumn(0, "prvtDgr", objArgs.prvtDgr);
        		this.dsInfoPrvtAply.setColumn(0, "prvtMgno", objArgs.bizMngNo);
        		this.fnCallBizInfo();
        	} else if(objArgs.status == "PRVTAPLY") {
        		// 정보비공개상세 - 데이터셋 초기화
        		this.dsInfoPrvtAplyDtl.deleteAll();
        		this.dsInfoPrvtAplyDtl.addRow();
        		this.dsInfoPrvtAplyDtl.setColumn(0, "prvtMgno", ""); //비공개관리번호
        		this.dsInfoPrvtAplyDtl.setColumn(0, "instMgno", ""); //기관관리번호
        		this.dsInfoPrvtAplyDtl.setColumn(0, "prvtTrgtClCd", ""); //비공개대상구분코드 : 사업비공개
        		this.dsInfoPrvtAplyDtl.setColumn(0, "bizMngNo", ""); //사업관리번호
        		this.dsInfoPrvtAplyDtl.setColumn(0, "bizPlndPrvtYn", ""); //사업계획서비공개여부
        		this.dsInfoPrvtAplyDtl.setColumn(0, "prvtAplyRsn", ""); //비공개신청사유
        		this.dsInfoPrvtAplyDtl.setColumn(0, "cmptncInstMngNo", ""); //관할기관관리번호

        		this.divTopBtn.form.btnGetBiz.set_visible(true);
        		this.divCmmnBtn.form.btnReg.set_visible(true);
        		this.divCmmnBtn.form.btnRegRe.set_visible(false);

        	}
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	// trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 사업 불러오기 검색 팝업(프로그램)
        		case "popModalBizInfoP01" :
        			this.dsSrh.setColumn(0, "bizMngNo", objRtnValue["bizMngNo"]);
        			this.dsInfoPrvtAply.setColumn(0, "prvtMgno", objRtnValue["bizMngNo"]);

        			if(!this.gfnIsNull(objRtnValue["bizMngNo"])){
        				// 사업정보, 사업자정보, 사업비공개신청정보 조회
        				this.fnCallBizInfo();
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
        			this.fnChange();

        			break;
        		case "regReSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnChange();
        			break;
        		case "bizInfo" :
        			trace("bizInfo this.dsInfoPrvtAplyDtl.saveXML():\n"+this.dsInfoPrvtAplyDtl.saveXML());
        			this.fnCallFileStart();
        			break;
        		default:
        			break;
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFilePrvt" :
        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsInfoPrvtAplyDtlDataFile.clearData();
        				var nRowCnt = this.dsInfoPrvtAplyDtlDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsInfoPrvtAplyDtlDataFile.clearData();
        				var nRowCnt = this.dsInfoPrvtAplyDtlDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsInfoPrvtAplyDtlDataFile.clearData();
        				var nRowCnt = this.dsInfoPrvtAplyDtlDataFile.copyData(objRtn.objDs);
        			}
        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function()
        {
        	var etcDataFlmno = this.dsInfoPrvtAplyDtl.getColumn(0, "etcDataFlmno");
        	trace(">>> etcDataFlmno : " + etcDataFlmno);
        	if(this.gfnIsNull(etcDataFlmno)) {
        		this.divBizPrvtAplyInfo.form.divRaonKSingleUni.form.fnSearchFile("");
        	}else {
        		this.divBizPrvtAplyInfo.form.divRaonKSingleUni.form.fnSearchFile(etcDataFlmno);
        	}
        };

        // 사업정보, 사업자정보, 사업비공개신청정보 조회
        this.fnCallBizInfo = function()
        {
        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "/biz/inforls/bizPrvt/selectBizSrhList.irs";
        	}else {
        		callUrl = "";
        	}

        	var outDs = "";
        	outDs = outDs + "dsBizInfo=dsBizInfo "; // 사업정보
        	outDs = outDs + "dsRegUsrInfo=dsRegUsrInfo "; //사업자정보
        	outDs = outDs + "dsPgmMhdlgList=dsPgmMhdlgList "; //방법론
        	if("REDOC" == this.dsSrh.getColumn(0, "status")){
        		outDs = outDs + "dsInfoPrvtAplyDtl=dsInfoPrvtAplyDtl "; //사업 비공개 신청 정보
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "bizInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // 필수 항목 체크
        this.fnCallValidCheckPrvtInfo = function() {
        	var prvtMgno = this.dsInfoPrvtAply.getColumn(0, "prvtMgno");
        	var bizPlndPrvtYn = this.dsInfoPrvtAply.getColumn(0, "bizPlndPrvtYn");
        	var prvtAplyRsn = this.dsInfoPrvtAply.getColumn(0, "prvtAplyRsn");

        	if(this.gfnIsNull(prvtMgno)) {
        		this.divTopBtn.form.btnGetBiz.set_cssclass("error"); this.divTopBtn.form.btnGetBiz.setFocus(); this.gfnShowMessage(this, "W000025", "비공개관리번호", "fnMsgCallback", "msgAlert01"); return false;
        	}
        	if(this.gfnIsNull(bizPlndPrvtYn)) {
        		this.divBizPrvtAplyInfo.form.chkBizPlndPrvtYn.set_cssclass("error"); this.divBizPrvtAplyInfo.form.chkBizPlndPrvtYn.setFocus(); this.gfnShowMessage(this, "W000025", "정보비공개 신청항목", "fnMsgCallback", "msgAlert01"); return false;
        	}
        	if(this.gfnIsNull(prvtAplyRsn)) {
        		this.divBizPrvtAplyInfo.form.taePrvtAplyRsn.set_cssclass("error"); this.divBizPrvtAplyInfo.form.taePrvtAplyRsn.setFocus(); this.gfnShowMessage(this, "W000025", "정보비공개 신청사유", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	return true;
        };

        // 심의 신청 저장
        this.fnCallSave = function()
        {
        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "/biz/inforls/bizPrvt/insertBizPrvt.irs";
        	} else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplySave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsInfoPrvtAply=dsInfoPrvtAply ";
        	inDs = inDs + "dsInfoPrvtAplyDtl=dsInfoPrvtAplyDtl ";
        	inDs = inDs + "dsInfoPrvtAplyDtlDataFile=dsInfoPrvtAplyDtlDataFile ";

        	var objArgs = {};
         	objArgs.svcId 			= "save";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // 문서 보완 저장
        this.fnCallRegReSave = function()
        {
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {
        		callUrl = "/biz/inforls/bizPrvt/insertBizPrvtDocSplmnt.irs";
        	}else {
        		callUrl = "";
        	}

        	var inDs = "";
        	inDs = inDs + "dsInfoPrvtAply=dsInfoPrvtAply ";
        	inDs = inDs + "dsInfoPrvtAplyDtl=dsInfoPrvtAplyDtl ";
        	inDs = inDs + "dsInfoPrvtAplyDtlDataFile=dsInfoPrvtAplyDtlDataFile ";

        	var objArgs = {};
         	objArgs.svcId 			= "regReSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnChange = function() {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divResult.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad = "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        }
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        // 사업불러오기 검색 팝업
        this.divList_btnReg_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalBizInfoP01";
        	var sMnuId 		= "MN08030000";
        	var oPosition	= {width:1200,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"사업 불러오기 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        // 목록 버튼 클릭
        this.divCmmnBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divResult.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad = "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        // 심의 신청 버튼
        this.divCmmnBtn_btnReg_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckPrvtInfo()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtMgno", this.dsInfoPrvtAply.getColumn(0, "prvtMgno")); //비공개관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "instMgno", this.dsRegUsrInfo.getColumn(0, "instMgno")); //기관관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtTrgtClCd", "PTC0001"); //비공개대상구분코드 : 사업비공개
        			this.dsInfoPrvtAplyDtl.setColumn(0, "bizMngNo", this.dsBizInfo.getColumn(0, "bizMngNo")); //사업관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "bizPlndPrvtYn", "Y"); //사업계획서비공개여부
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtAplyRsn", this.dsInfoPrvtAply.getColumn(0, "prvtAplyRsn")); //비공개신청사유
        			this.dsInfoPrvtAplyDtl.setColumn(0, "cmptncInstMngNo", this.dsBizInfo.getColumn(0, "cmptncInstMngNo")); //관할기관관리번호
        			this.fnCallSave();
        		}
        	});
        };

        // 문서보완 버튼
        this.divCmmnBtn_btnRegRe_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckPrvtInfo()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtMgno", this.dsInfoPrvtAply.getColumn(0, "prvtMgno")); //비공개관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "instMgno", this.dsRegUsrInfo.getColumn(0, "instMgno")); //기관관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtTrgtClCd", "PTC0001"); //비공개대상구분코드 : 사업비공개
        			this.dsInfoPrvtAplyDtl.setColumn(0, "bizMngNo", this.dsBizInfo.getColumn(0, "bizMngNo")); //사업관리번호
        			this.dsInfoPrvtAplyDtl.setColumn(0, "bizPlndPrvtYn", "Y"); //사업계획서비공개여부
        			this.dsInfoPrvtAplyDtl.setColumn(0, "prvtAplyRsn", this.dsInfoPrvtAply.getColumn(0, "prvtAplyRsn")); //비공개신청사유
        			this.dsInfoPrvtAplyDtl.setColumn(0, "cmptncInstMngNo", this.dsBizInfo.getColumn(0, "cmptncInstMngNo")); //관할기관관리번호

        			// trace("this.dsInfoPrvtAply.saveXML():\n"+this.dsInfoPrvtAply.saveXML());
        			this.fnCallRegReSave();
        		}
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divBizInfo.form.edtBizOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divBizInfo.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.sta08_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizInfo.form.edtKoffPrnmntYmd.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.divBizInfo.form.sta08_00_00_00_02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.sta00_00_01_01.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divBizPrvtAplyInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.divCmmnBtn_btnList_onclick,this);
            this.divCmmnBtn.form.btnReg.addEventHandler("onclick",this.divCmmnBtn_btnReg_onclick,this);
            this.divCmmnBtn.form.btnRegRe.addEventHandler("onclick",this.divCmmnBtn_btnRegRe_onclick,this);
            this.divTopBtn.form.btnGetBiz.addEventHandler("onclick",this.divList_btnReg_onclick,this);
        };
        this.loadIncludeScript("BizPrvtS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
