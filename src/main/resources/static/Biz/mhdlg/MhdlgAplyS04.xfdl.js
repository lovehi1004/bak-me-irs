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
            this.set_titletext(" 방법론 직권 등록 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsncd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"tempMhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"tempPrpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"tempBizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"tempEtcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrpsdFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOldMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"oldMhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"oldRvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"oldRegRsnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divRUsrInfo","1","divH1:0",null,"130","60",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","7","932","30",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","0","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL3","0","86",null,"44","0",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBrno","1253","7",null,"30","7",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBrno","1096","0","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","1253","50","306","30",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","1096","43","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","777","50","311","30",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staDeptNm","620","43","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","306","50","307","30",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtEml","777","93",null,"30","7",null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staEml","620","86","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtTel","306","93","307","30",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staNm","0","43","150","87",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staFlnm","149","43","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Static("staTel","149","86","150","44",null,null,null,null,null,null,this.divRUsrInfo.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divRUsrInfo.addChild(obj.name, obj);

            obj = new Div("divH2","0","divRUsrInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divMhdlgInfoArea","0","divH2:0",null,"609","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea","0","0",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staRegRsnNmArea","0","staAplyClCdNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgNmArea","0","staRegRsnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staMhdlgOrgtNmArea","0","staOldMhdlgNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgOrgtNm","157","staMhdlgOrgtNmArea:-37",null,"30","216",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("방법론명(원문)");
            obj.set_inputtype("english,dot,digit,comma,alpha,number,sign,space,numberandenglish,symbol");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staMhdlgKrnNmArea","0","staMhdlgOrgtNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Radio("rdoAplyClCd","157","staAplyClCdNmArea:-37",null,"30","886",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("30");
            obj.set_columncount("3");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_innerdataset("dsMhdlgAplyClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","0","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("31");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staRegRsnNm","0","staAplyClCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("4");
            obj.set_text("제·개정구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgNm","0","staRegRsnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("5");
            obj.set_text("개정 방법론 선택");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_enable("true");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staMhdlgOrgtNm","0","staOldMhdlgNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("6");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staMhdlgKrnNm","0","staMhdlgOrgtNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("7");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Radio("rdoRegRsnCd","157","staRegRsnNmArea:-37",null,"30","1235",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("8");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_innerdataset("dsMhdlgPrcndTypeCdS03");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCdArea","0","staMhdlgKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","staMhdlgKrnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("10");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Button("btnMhdlgSeach","rdoRegRsnCd:7","staRegRsnNmArea:-37",null,"30","1106",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("11");
            obj.set_text("개정 방법론 검색");
            obj.set_visible("false");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Edit("edtOldMhdlgNm","157","staOldMhdlgNmArea:-37",null,"30","216",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_tooltiptext("개정방법론");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgKrnNm","157","staMhdlgKrnNmArea:-37",null,"30","216",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("14");
            obj.set_tooltiptext("방법론명(국문)");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staAgrStiplArea","1","staAgreeClausCdArea:-1",null,"177","-1",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            obj.set_enable("true");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staBizFldArea","0","staAgrStiplArea:-1",null,"175","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staAgrStipNm","0","staAgreeClausCd:-1","150","177",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("17");
            obj.set_text("협정/약정/MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staBizFldNm","0","staAgrStipNm:-1","150","175",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("18");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Combo("cboBizFld","157","staBizFldArea:-166","227","30",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsBizFldCds");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Edit("edtAgrStiplNm","157","staAgrStiplArea:-170",null,"30","1183",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Button("btnAgreeSearch","edtAgrStiplNm:7","staAgrStiplArea:-169",null,"30","1074",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("20");
            obj.set_text("협정·약정 검색");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Button("btnDelAgree","1405","staAgrStiplArea:-169",null,"30","staAgrStiplArea:-1502",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("21");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Grid("grdAgrStiplList","157","staAgrStiplArea:-126",null,"116","7",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_tooltiptext("협정약정MOU");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"790\"/><Column size=\"400\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"협정/약정MOU명\" cssclass=\"Cell_NoLine\"/><Cell col=\"2\" text=\"체결국\"/><Cell col=\"3\" text=\"상세\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" padding=\"0px 7px\" text=\"bind:cncldKrnNm\"/><Cell col=\"2\" text=\"bind:ntnNm\"/><Cell col=\"3\" text=\"상세\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Combo("cboBizFldDtls","391","staBizFldArea:-166","227","30",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsBizDtlsFldCds");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Grid("grdBizFldsList","157","staBizFldArea:-128",null,"116","7",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_tooltiptext("사업분야");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"570\"/><Column size=\"570\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업분야\" cssclass=\"Cell_NoLine\"/><Cell col=\"2\" text=\"사업 세부분야\"/><Cell col=\"3\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:bizFldKornNm\"/><Cell col=\"2\" text=\"bind:bizDtlsFldKornNm\"/><Cell col=\"3\" text=\"bind:mhdlgUnqno\" edittype=\"text\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Button("btnDelMhdlg","1405","cboBizFldDtls:-30",null,"30","staBizFldArea:-1503",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("26");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Button("btnAddMhdlg","1300","staBizFldArea:-166",null,"30","btnDelMhdlg:7",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("25");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Combo("cboAgreeClausCd","157","staAgreeClausCdArea:-37",null,"30","1182",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("27");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_innerdataset("dsAgreeClausCd");
            obj.set_tooltiptext("파리협정조항");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Static("staReddPlusYn","783","staAgreeClausCdArea:-44","150","44",null,null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("33");
            obj.set_text("REDD+ 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Radio("rdoReddPlusYn","940","staAgreeClausCdArea:-37",null,"30","425",null,null,null,null,null,this.divMhdlgInfoArea.form);
            obj.set_taborder("34");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divMhdlgInfoArea_form_rdoReddPlusYn_innerdataset = new nexacro.NormalDataset("divMhdlgInfoArea_form_rdoReddPlusYn_innerdataset", obj);
            divMhdlgInfoArea_form_rdoReddPlusYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(divMhdlgInfoArea_form_rdoReddPlusYn_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divMhdlgInfoArea.addChild(obj.name, obj);

            obj = new Div("divH3","0","divMhdlgInfoArea:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divFileInfo","0","divH3:0",null,"465","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPrpsdArea","0","0",null,"132","0",null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("staPrpsdNm","0","0","150","132",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("1");
            obj.set_text("제안서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlndArea","0","staPrpsdArea:-1",null,"132","0",null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlnd","0","staPrpsdNm:-1","150","132",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("3");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Div("divPrpsdFlmno","157","staPrpsdArea:-126","800","120",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Div("divBizPlndFlmno","156","staBizPlndArea:-126","800","120",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("staEtcDataArea","0","staBizPlndArea:-1",null,"207","0",null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Div("divEtcMultiFile","155","staEtcDataArea:-201","800","195",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("staEtcDataNm","0","staBizPlnd:-1","150","207",null,null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("8");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFileInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFileInfo.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divFileInfo:20",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnAply",null,"0","75","32","78",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnTempSave",null,"0","88","32","156",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRUsrInfo.form
            obj = new Layout("default","",0,0,this.divRUsrInfo.form,function(p){});
            this.divRUsrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgInfoArea.form
            obj = new Layout("default","",0,0,this.divMhdlgInfoArea.form,function(p){});
            this.divMhdlgInfoArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileInfo.form.divPrpsdFlmno
            obj = new Layout("default","",0,0,this.divFileInfo.form.divPrpsdFlmno.form,function(p){});
            this.divFileInfo.form.divPrpsdFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileInfo.form.divBizPlndFlmno
            obj = new Layout("default","",0,0,this.divFileInfo.form.divBizPlndFlmno.form,function(p){});
            this.divFileInfo.form.divBizPlndFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileInfo.form.divEtcMultiFile
            obj = new Layout("default","",0,0,this.divFileInfo.form.divEtcMultiFile.form,function(p){});
            this.divFileInfo.form.divEtcMultiFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileInfo.form
            obj = new Layout("default","",0,0,this.divFileInfo.form,function(p){});
            this.divFileInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,960,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","divMhdlgInfoArea.form.rdoRegRsnCd","value","dsMhdlgDetail","regRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMhdlgInfoArea.form.edtMhdlgOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMhdlgInfoArea.form.edtMhdlgKrnNm","value","dsMhdlgDetail","mhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMhdlgInfoArea.form.cboAgreeClausCd","value","dsMhdlgDetail","agreeClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMhdlgInfoArea.form.edtOldMhdlgNm","value","dsMhdlgDetail","oldMhdlgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divMhdlgInfoArea.form.rdoAplyClCd","value","dsMhdlgDetail","aplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divRUsrInfo.form.edtBzentNm","value","dsRegUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divRUsrInfo.form.edtBrno","value","dsRegUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divRUsrInfo.form.edtFlnm","value","dsRegUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divRUsrInfo.form.edtDeptNm","value","dsRegUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRUsrInfo.form.edtJbpsNm","value","dsRegUsrInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRUsrInfo.form.edtTel","value","dsRegUsrInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divRUsrInfo.form.edtEml","value","dsRegUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divRUsrInfo.form.edtFlnm00","value","dsMhdlgDetail","mhdlgGroupMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divMhdlgInfoArea.form.rdoReddPlusYn","value","dsMhdlgDetail","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgAplyS04.xfdl", function() {
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

        this.fvFilterArray = '';
        this.thisHeight1 = 128;
        this.thisDivHeight1 = 217;
        this.fvIsReddPlus = false;
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
        	trace("[sampleFormActionS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	//prpsdFlmno - 제안서
        	//bizPlndFlmno - 사업계획서
        	//etcDataFlmno 멀티파일 - 기타문서
        	//explnFlmno 설명파일
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 START ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	// 제안서
        	var objParam3 = { objDs:this.dsMhdlgDetail								// 바인딩 데이터셋
        					,sBindCol:"prpsdFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"prpsdFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divFileInfo.form.divPrpsdFlmno.form.fnInitRaonK(this, objParam3);

        	// 사업계획서
           var objParam4 = { objDs:this.dsMhdlgDetail								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"bizPlndFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divFileInfo.form.divBizPlndFlmno.form.fnInitRaonK(this, objParam4);


        	var objParam6 = { objDs:this.dsMhdlgDetail								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };

        	this.divFileInfo.form.divEtcMultiFile.form.fnInitRaonK(this, objParam6);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 END ■■■■■■■■■■■■■■■■■■■■■■■■ */

        	//set_url 성공시 원래화면 호출
        	this.getOwnerFrame().form.divWork.form.fnLoadComplete('MhdlgAplyS04');

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
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "regInfo" :

        			//신청자 정보 조회 후 방법론 작성가능
        			this.dsMhdlgDetail.addRow();
        			//직권신청
        			this.dsMhdlgDetail.setColumn(0,'aplyClCd','MAC0004');
        			//제정
        			this.dsMhdlgDetail.setColumn(0,'regRsnCd','MRT0001');
        			//파리협정조항 선택
        			this.divMhdlgInfoArea.form.cboAgreeClausCd.set_index(0);
        			var prpsdFlmno = this.dsMhdlgDetail.getColumn(0, "prpsdFlmno");
        			this.divFileInfo.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        			var bizPlndFlmno = this.dsMhdlgDetail.getColumn(0, "bizPlndFlmno");
        			this.divFileInfo.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        			var etcDataFlmno = this.dsMhdlgDetail.getColumn(0, "etcDataFlmno");
        			this.divFileInfo.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);
        			break;
        		case "tempSave" :
        			// 후처리 코드
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			break;

        		case "tempDataSearch" : //임시저장된 정보를 가져올시 콜백
        			//사업분야 필터
        			this.fnCallbackFilter();
        			//컴포넌트 컨트롤
        			this.fnAgreeClausCdCtrl(this.dsMhdlgDetail.getColumn(0,'agreeClausCd'), this.dsMhdlgDetail.getColumn(0,'rdoRegRsnCd'));
        			//협정정보 확인
        			this.fnAgrStipInit();
        			this.fnReddPlusFormChange();

        			//■■■■■■■■■■■■■데이터셋 하나 생성 전 단계의 방법론 정보 조회로직 추가■■■■■■■■■■■■■
        			//■■■■■■■■■■■■■데이터셋 하나 생성 전 단계의 방법론 정보 조회로직 추가■■■■■■■■■■■■■
        			if(this.dsAgrStiplList.getRowCount() == 0)
        			{
        				this.dsAgrStiplList.addColumn('cncldMgno','STRING',256);
        				this.dsAgrStiplList.addColumn('cncldDgr','STRING',256);
        				this.dsAgrStiplList.addColumn('cncldOrgtNm','STRING',256);
        				this.dsAgrStiplList.addColumn('cncldKrnNm','STRING',256);
        				this.dsAgrStiplList.addColumn('cncldClCd','STRING',256);
        				this.dsAgrStiplList.addColumn('cncldClCdNm','STRING',256);
        				this.dsAgrStiplList.addColumn('ntnNm','STRING',256);
        				this.dsAgrStiplList.addColumn('chk','STRING',256);
        			}

        			if(this.dsBizFldList.getRowCount() == 0)
        			{
        				this.dsBizFldList.addColumn('bizFldCdMgno','STRING',256);
        				this.dsBizFldList.addColumn('bizFldKornNm','STRING',256);
        				this.dsBizFldList.addColumn('bizFldDtlsCdMgno','STRING',256);
        				this.dsBizFldList.addColumn('bizDtlsFldKornNm','STRING',256);
        				this.dsBizFldList.addColumn('mhdlgUnqno','STRING',256);
        				this.dsBizFldList.addColumn('chk','STRING',256);
        			}


        			var prpsdFlmno = this.dsMhdlgDetail.getColumn(0, "prpsdFlmno");
        			this.divFileInfo.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        			var bizPlndFlmno = this.dsMhdlgDetail.getColumn(0, "bizPlndFlmno");
        			this.divFileInfo.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        			var etcDataFlmno = this.dsMhdlgDetail.getColumn(0, "etcDataFlmno");
        			this.divFileInfo.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);

        			break;
        		case "rtnInfo" : // 개정방법론 팝업 선택후 콜백
        			//■■■■■■■■■■■■■데이터셋 하나 생성 전 단계의 방법론 정보 조회로직 추가■■■■■■■■■■■■■
        // 			this.dsMhdlgDetail.addColumn("oldMhdlgNm","STRING",255);
        // 			this.dsMhdlgDetail.setColumn(0,"oldMhdlgNm",this.dsMhdlgDetail.getColumn(0,"mhdlgKrnNm"));
        			//■■■■■■■■■■■■■데이터셋 하나 생성 전 단계의 방법론 정보 조회로직 추가■■■■■■■■■■■■■

        			//사업분야 필터
        			this.fnCallbackFilter();
        			//컴포넌트 컨트롤
        			this.fnAgreeClausCdCtrl(this.dsMhdlgDetail.getColumn(0,'agreeClausCd'), this.dsMhdlgDetail.getColumn(0,'rdoRegRsnCd'));
        			//협정정보 확인
        			this.fnAgrStipInit();

        			//개정으로 변경
        			/*this.divMhdlgInfoArea.form.rdoRegRsnCd.set_index(1);*/
        			this.dsMhdlgDetail.setColumn(0,'regRsnCd',"MRT0002");
        			if(!this.gfnIsNull(this.dsRegInfo.getColumn(0,'tempMhdlgMgno')))
        			{
        				this.dsMhdlgDetail.setColumn(0,'mhdlgMgno',this.dsRegInfo.getColumn(0,'tempMhdlgMgno'));
        				this.dsRegInfo.setColumn(0,'sts','MOD');//수정으로 변경
        			}else
        			{
        				this.dsMhdlgDetail.setColumn(0,'mhdlgMgno','');
        				this.dsRegInfo.setColumn(0,'sts','REG');
        			}
        			//미리채번한 파일번호 재활용
        			this.dsMhdlgDetail.setColumn(0,'prpsdFlmno',this.dsRegInfo.getColumn(0,'tempPrpsdFlmno'));
        			this.dsMhdlgDetail.setColumn(0,'bizPlndFlmno',this.dsRegInfo.getColumn(0,'tempBizPlndFlmno'));
        			this.dsMhdlgDetail.setColumn(0,'etcDataFlmno',this.dsRegInfo.getColumn(0,'tempEtcDataFlmno'));

        			this.fnReddPlusFormChange();
        			break;
        		case "mhdlgAdminAply" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.fnFormTrans();
        			break;
        		case "regReUp" :
        			//사업분야 필터
        			this.fnCallbackFilter();
        			//컴포넌트 컨트롤
        			this.fnAgreeClausCdCtrl(this.dsMhdlgDetail.getColumn(0,'agreeClausCd'), this.dsMhdlgDetail.getColumn(0,'rdoRegRsnCd'));
        			//협정정보 확인
        			this.fnAgrStipInit();

        			//첨부 파일 정보 확인
        			var prpsdFlmno = this.dsMhdlgDetail.getColumn(0, "prpsdFlmno");
        			this.divFileInfo.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        			var bizPlndFlmno = this.dsMhdlgDetail.getColumn(0, "bizPlndFlmno");
        			this.divFileInfo.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        			var etcDataFlmno = this.dsMhdlgDetail.getColumn(0, "etcDataFlmno");
        			this.divFileInfo.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);

        			this.divMhdlgInfoArea.form.rdoAplyClCd.set_enable(false);
        			this.divMhdlgInfoArea.form.rdoRegRsnCd.set_enable(false);
        			this.fnReddPlusFormChange();
        			break;
        		default:
        			break;
        	}
        };
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	switch (sPopupId)
        	{
        		case "fnCallSaveMhdlgAply" :
        			// 후처리 코드
        			break;
        		default:
        			break;
        	}
        };


        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "prpsdFlmno" :
        			if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "bizPlndFlmno" :
        			if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}
        		case "etcDataFlmno" :
        			if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}
        			break;
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
        		case "popModalMhdlgP01" :
        			trace("mhdlgMhgno > " + objRtnValue["pvMhdlgMgno"]);
        			trace("mhdlgDgr > " + objRtnValue["pvMMhdlgDgr"]);
        			trace("mhdlgOrgtNm > " + objRtnValue["pvMhdlgOrgtNm"]);
        			trace("mhdlgKrnNm > " + objRtnValue["pvMhdlgKrnNm"]);
        			if(!this.gfnIsNull(objRtnValue["pvMhdlgMgno"]))
        			{
        				this.dsRegInfo.setColumn(0, "mhdlgMgno", objRtnValue["pvMhdlgMgno"]);
        				this.dsRegInfo.setColumn(0, "mhdlgDgr", objRtnValue["pvMMhdlgDgr"]);
        				var svcId = "rtnInfo"
        				this.fnCallMhdlgDetail(svcId);
        			}
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        //트랜젝션 전용
        this.fnTransactionS02 = function(svcId, url, inds, outds, args, callback)
        {
        	if(this.gfnIsNull(args))
        	{
        		args = '';
        	}
        	if(this.gfnIsNull(callback))
        	{
        		callback = 'fnCallback';
        	}
        	var objArgs = {};
        	objArgs.svcId 			= svcId;
        	objArgs.url 			= url;
        	objArgs.inds      		= inds;
        	objArgs.outds     		= outds;
        	objArgs.args 			= args;
        	objArgs.callback		= callback;

        	this.gfnTransaction(this, objArgs);
        }

        //임시저장버튼클릭시
        this.divComBtn_btnTempSave_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, 'C000001', '', function(svcid, variant) {
        		if (variant == "OK")
        		{
        			var sts = this.dsRegInfo.getColumn(0,'sts');
        			if(sts == 'MOD' || sts == 'REG')
        			{
        				this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0001'); // 임시저장 코드 부여

        			}else if (sts == 'REGREUP' || sts == 'REGRE')
        			{
        				this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0006'); // 문서재제출 임시저장 코드 부여

        			}else if (sts == 'REGDLBRUP' || sts == 'REGDLBR')
        			{
        				this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0018'); // 문서재제출(심의) 임시저장 코드 부여

        			}else if (sts == 'DOCREUP' || sts == 'DOCRE')
        			{
        				this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0004'); // 문서보완 임시저장 코드 부여

        			}else if (sts == 'DOCDLBRUP' || sts == 'DOCDLBR')
        			{
        				this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0016'); // 문서보완(심의) 임시저장 코드 부여

        			}

        			var svcId = 'tempSave';
        			var url	= "/adm/mhdlg/mhdlgAply/MhdlgAdminAply.irs";
        			var inds = "dsRegInfo=dsRegInfo"
        					 + " dsMhdlgDetail=dsMhdlgDetail" 	//방법론상세
        					 + " dsRegUsrInfo=dsRegUsrInfo"  	//작성자정보
        					 + " dsAgrStiplList=dsAgrStiplList"  //협정약정목록
        					 + " dsBizFldList=dsBizFldList" 		//사업분야목록
        					 + " dsPrpsdFile=dsPrpsdFile"		//제안서
        					 + " dsBizPlndFile=dsBizPlndFile"	//사업계획서
        					 + " dsEtcDataFile=dsEtcDataFile";	//기타문서멀티업로드
        			var outds = "dsMhdlgDetail=dsMhdlgDetail";	//방법론상세
        			this.fnTransactionS02(svcId, url, inds, outds)
        		}
        	});
        };

        //신청버튼클릭시
        this.divComBtn_btnAply_onclick = function(obj,e)
        {
        	if(this.divMhdlgInfoArea.form.rdoAplyClCd.value == 0 || this.divMhdlgInfoArea.form.rdoAplyClCd.value == '')
        	{
        		this.gfnShowMessage(this, ["Alert","신청구분을 선택하세요."], "", function(svcid, variant) {
        				this.divMhdlgInfoArea.form.rdoAplyClCd.set_cssclass("error");
        				this.divMhdlgInfoArea.form.rdoAplyClCd.setFocus();
        			});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.rdoAplyClCd.set_cssclass("");
        	}

        	if(this.divMhdlgInfoArea.form.rdoRegRsnCd.value == 0 || this.divMhdlgInfoArea.form.rdoRegRsnCd.value == '')
        	{
        		this.gfnShowMessage(this, ["Alert","제·개정구분을 선택하세요."], "", function(svcid, variant) {
        				this.divMhdlgInfoArea.form.rdoRegRsnCd.set_cssclass("error");
        				this.divMhdlgInfoArea.form.rdoRegRsnCd.setFocus();
        			});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.rdoRegRsnCd.set_cssclass("");
        	}
        	// 방법론명(원문)
        	if(this.gfnIsNull(this.divMhdlgInfoArea.form.edtMhdlgOrgtNm.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divMhdlgInfoArea.form.edtMhdlgOrgtNm.tooltiptext, function(svcid, variant) {
        			this.divMhdlgInfoArea.form.edtMhdlgOrgtNm.set_cssclass("error");
        			this.divMhdlgInfoArea.form.edtMhdlgOrgtNm.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.edtMhdlgOrgtNm.set_cssclass("");
        	}

        	// 방법론명(국문)
        	if(this.gfnIsNull(this.divMhdlgInfoArea.form.edtMhdlgKrnNm.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divMhdlgInfoArea.form.edtMhdlgKrnNm.tooltiptext, function(svcid, variant) {
        			this.divMhdlgInfoArea.form.edtMhdlgKrnNm.set_cssclass("error");
        			this.divMhdlgInfoArea.form.edtMhdlgKrnNm.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.edtMhdlgKrnNm.set_cssclass("");
        	}

        	if(this.gfnIsNull(this.divMhdlgInfoArea.form.cboAgreeClausCd.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divMhdlgInfoArea.form.cboAgreeClausCd.tooltiptext, function(svcid, variant) {
        				this.divMhdlgInfoArea.form.cboAgreeClausCd.set_cssclass("error");
        				this.divMhdlgInfoArea.form.cboAgreeClausCd.setFocus();
        			});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.cboAgreeClausCd.set_cssclass("");
        	}

        	if(this.divMhdlgInfoArea.form.cboAgreeClausCd.value == 'AGC0001')
        	{
        		if(this.dsAgrStiplList.getRowCount() == 0)
        		{
        			this.gfnShowMessage(this, "W000014", this.divMhdlgInfoArea.form.grdAgrStiplList.tooltiptext, function(svcid, variant) {
        				this.divMhdlgInfoArea.form.grdAgrStiplList.set_cssclass("error");
        				this.divMhdlgInfoArea.form.grdAgrStiplList.setFocus();
        			});
        			return false;
        		}else
        		{
        			this.divMhdlgInfoArea.form.grdAgrStiplList.set_cssclass("");
        		}

        	}

        	if(this.dsBizFldList.getRowCount() == 0)
        	{
        		this.gfnShowMessage(this, "W000014", this.divMhdlgInfoArea.form.grdBizFldsList.tooltiptext, function(svcid, variant) {
        				this.divMhdlgInfoArea.form.grdBizFldsList.set_cssclass("error");
        				this.divMhdlgInfoArea.form.grdBizFldsList.setFocus();
        			});
        		return false;
        	}else
        	{
        		this.divMhdlgInfoArea.form.grdBizFldsList.set_cssclass("");
        	}

        // 	if(this.gfnIsNull(this.dsMhdlgDetail.getColumn(0,'prpsdFlmno')) || this.dsPrpsdFile.getRowCount() == 0 )
        // 	{
        // 		this.gfnShowMessage(this, ["Alert","제안서를 업로드하세요."], "", function(svcid, variant) {
        //
        // 			});
        // 		return false;
        // 	}
        //
        // 	if(this.gfnIsNull(this.dsMhdlgDetail.getColumn(0,'bizPlndFlmno')) || this.dsBizPlndFile.getRowCount() == 0 )
        // 	{
        // 		this.gfnShowMessage(this, ["Alert","사업계획서를 업로드하세요."], "", function(svcid, variant) {
        //
        // 			});
        // 		return false;
        // 	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {

        			// 멀티의 경우 최종 파일정보를 복사하고나서, 서버로 전송한다.
        		this.dsEtcDataFile.clearData();
        		var nRowCnt = this.dsEtcDataFile.copyData(this.divFileInfo.form.divEtcMultiFile.form.dsAtchFileDetail);

        		this.dsMhdlgDetail.setColumn(0,'prcsTypeCd','MPT0002');
        		var svcId 		= 'mhdlgAdminAply';
        		var url			= "/adm/mhdlg/mhdlgAply/MhdlgAdminAply.irs";
        		var inds 		= "dsRegInfo=dsRegInfo"
        						+ " dsMhdlgDetail=dsMhdlgDetail" 	//방법론상세
        						+ " dsRegUsrInfo=dsRegUsrInfo"  	//작성자정보
        						+ " dsAgrStiplList=dsAgrStiplList"  //협정약정목록
        						+ " dsBizFldList=dsBizFldList" 		//사업분야목록
        						+ " dsPrpsdFile=dsPrpsdFile"		//제안서
        						+ " dsBizPlndFile=dsBizPlndFile"	//사업계획서
        						+ " dsEtcDataFile=dsEtcDataFile";	//기타문서멀티업로드
        		var outds 		= "dsMhdlgDetail=dsMhdlgDetail";	//방법론상세
        		this.fnTransactionS02(svcId, url, inds, outds);
        		}
        	});
        };

        //등록자정보 호출
        this.fnCallRegInfo = function()
        {
        	var svcId 			= "regInfo";
         	var url 			= "/amd/mhdlg/mhdlgAply/selectRegUsrInfo.irs";
         	var inds      		= "dsRegInfo=dsRegInfo";
         	var outds     		= "dsRegUsrInfo=dsRegUsrInfo";
         	this.fnTransactionS02(svcId, url, inds, outds);
        };
        //상세정보호출
        this.fnCallMhdlgDetail = function(svcId)
        {
        	var svcId 			= svcId;
         	var url 			= "/adm/mhdlg/mhdlgAply/selectMhdlgAplyDetail.irs";
         	var inds      		= "dsRegInfo=dsRegInfo";
         	var outds     		= "dsRegUsrInfo=dsRegUsrInfo"
        						+ " dsMhdlgDetail=dsMhdlgDetail"
        						+ " dsAgrStiplList=dsAgrStiplList"
        						+ " dsBizFldList=dsBizFldList"
        						+ " dsOldMhdlgInfo=dsOldMhdlgInfo";

         	this.fnTransactionS02(svcId, url, inds, outds);
        }

        //문서보완, 문서재제출 시 이전파일 클론
        this.fnCallRegReUp = function()
        {
        	var svcId 			= 'regReUp';
         	var url 			= "/adm/mhdlg/mhdlgAply/selectNewMhdlgAplyDetail.irs";
         	var inds      		= "dsRegInfo=dsRegInfo";
         	var outds     		= "dsRegUsrInfo=dsRegUsrInfo"
        						+ " dsMhdlgDetail=dsMhdlgDetail"
        						+ " dsAgrStiplList=dsAgrStiplList"
        						+ " dsBizFldList=dsBizFldList";

         	this.fnTransactionS02(svcId, url, inds, outds);
        }


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
        	this.scrollTo(0,0);

        	//콤보박스 및 라이오버튼 세팅
        	this.divMhdlgInfoArea.form.cboBizFld.set_index(0);
        	this.divMhdlgInfoArea.form.cboBizFldDtls.set_index(0);
        	this.divMhdlgInfoArea.form.cboAgreeClausCd.set_index(0);

        	this.fvFilterArray = '';

        	//방법론 고유번호 비활성화
        	this.divMhdlgInfoArea.form.grdBizFldsList.setCellProperty('body',3,'displaytype','none');
        	this.divMhdlgInfoArea.form.grdBizFldsList.setCellProperty('body',3,'edittype','none');

        	//사업분야 필터링
        	this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCds.filter("bizFldCdMgno == ''");

        	//dataset초기화
        	this.dsAgrStiplList.clearData();
        	this.dsBizFldList.clearData();
        	this.dsEtcDataFile.clearData();
        	this.dsOldMhdlgInfo.clearData();
        	this.dsPrpsdFile.clearData();
        	this.dsBizPlndFile.clearData();

        	this.fnAgrStipInit(); //협정약정MOU 그리드 초기화

        	this.dsRegInfo.setColumn(0, "sts", objArgs.sts);

        	//방법론 관리번호가 비어있지 않고 상태가 수정인경우 저장된 정보를 불러온다.
        	if(!this.gfnIsNull(objArgs.mhdlgMgno))
        	{
        		this.dsRegInfo.setColumn(0, "mhdlgMgno", objArgs.mhdlgMgno);
        		this.dsRegInfo.setColumn(0, "mhdlgDgr", objArgs.mhdlgDgr);
        	}
        		// 데이터셋 초기화
        	if(objArgs.sts == "REG") {
        		// 등록 전 상세 호출
        		this.dsMhdlgDetail.clearData();
        		this.fnCallRegInfo();
        		this.fvIsReddPlus = false;
        		this.fnReddPlusFormChange();
        	}
        	else if (objArgs.sts == "MOD" || objArgs.sts == "REGRE" || objArgs.sts == "DOCRE" || objArgs.sts == "REGDLBR" || objArgs.sts == "DOCDLBR") {
        		var scvId = "tempDataSearch"
        		this.fnCallMhdlgDetail(scvId); // 임시저장의 경우 저장된 정보를 조회한다.
        	}
        	else if(objArgs.sts == "REGREUP" || objArgs.sts == "DOCREUP" || objArgs.sts == "REGDLBRUP" || objArgs.sts == "DOCDLBRUP") {
        		// 차수증가 자료로 조회.
        		this.fnCallRegReUp();
        	}

        	this.getOwnerFrame().form.divWork.form.dsMhdlgAplyClCd.filter("cdMgno == 'MAC0004'");
        };

        this.fnReddPlusFormChange = function()
        {
        	if(this.fvIsReddPlus)
        	{
        		this.divMhdlgInfoArea.form.staReddPlusYn.set_height(44);
        		this.divMhdlgInfoArea.form.rdoReddPlusYn.set_height(30);
        		var sMsgCode = "W000014";		// {0}(을/를) 입력 바랍니다.
        		var sParam = "REDD+ 유무";
        		this.gfnShowMessage(this, sMsgCode, sParam);
        		this.divMhdlgInfoArea.form.rdoReddPlusYn.set_index(1);
        		this.divMhdlgInfoArea.form.rdoReddPlusYn.setFocus();

        	}else
        	{
        		this.divMhdlgInfoArea.form.staReddPlusYn.set_height(0);
        		this.divMhdlgInfoArea.form.rdoReddPlusYn.set_height(0);
        		this.dsMhdlgDetail.setColumn(0,'reddPlusYn','N')
        	}
        	this.divMhdlgInfoArea.form.resetScroll();
        	this.resetScroll();
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
        	this.getOwnerFrame().form.divWork.form.divAdminDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divAdminReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        //사업분야
        this.cboBizFld_onitemchanged = function(obj,e)
        {
        	//이벤트정보가 있을 경우
        	if(e != undefined || e != null)
        	{
        		trace("[divList_divSearch_cboBizFldCd_onitemchanged]e.prevalue:"+e.prevalue+"|e.postvalue:"+e.postvalue);
                var bizFldCdMgno = e.postvalue;
                this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCds.filter("(bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"')" + this.fvFilterArray);

        		this.divMhdlgInfoArea.form.cboBizFldDtls.set_index(0);
        	}
        };

        this.btnAddMhdlg_onclick = function(obj,e)
        {
        	var bizFld = this.divMhdlgInfoArea.form.cboBizFld.text;
        	var bizDtlsFld = this.divMhdlgInfoArea.form.cboBizFldDtls.text;
        	var bizFidCdMgno = this.divMhdlgInfoArea.form.cboBizFld.value;
        	var bizFldDtlsCdMgno = this.divMhdlgInfoArea.form.cboBizFldDtls.value;

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

        		this.fvFilterArray += "&& bizFldDtlsCdMgno != '"+bizFldDtlsCdMgno+"'";

        		this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCds.filter("bizFldCdMgno == ''");

        		this.divMhdlgInfoArea.form.cboBizFldDtls.set_index(0);
        		this.divMhdlgInfoArea.form.cboBizFld.set_index(0);

        		this.fnReddPlusFormChange();
        };



        //제·개정 라디오 버튼 이벤트 방법론검색버튼 visible 상태 변경 및 사이즈 조절
        this.rdoRegRsnCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue == 'MRT0002' && e.postvalue == 'MRT0001' && this.dsMhdlgDetail.getColumn(0,'prcsTypeCd') != 'MPT0001')
        	{
        		this.dsMhdlgDetail.setColumn(0,'mhdlgMgno','');
        		this.dsMhdlgDetail.setColumn(0,'mhdlgGroupMgno','');
        		this.dsMhdlgDetail.setColumn(0,'mhdlgDgr','');
        		this.dsOldMhdlgInfo.clearData();
        	}
        	this.fnRegRsnCdCtrl(e.postvalue, this.dsMhdlgDetail.getColumn(0,'agreeClausCd'));
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
        		}
        		this.fnReddPlusFormChange();
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

        //방법론 검색 팝업 호출
        this.btnMhdlgSeach_onclick = function(obj,e)
        {
        	if(this.dsMhdlgDetail.getColumn(0,"prcsTypeCd") == 'MPT0001')
        	{	//임시저장인 상태에서 개정방법론을 변경하여도 방법론 관리번호는 임시저장된 관리번호를 사용해야함
        		this.dsRegInfo.setColumn(0,'tempMhdlgMgno',this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        	}
        	this.dsRegInfo.setColumn(0,'tempPrpsdFlmno',this.dsMhdlgDetail.getColumn(0,'prpsdFlmno'));
        	this.dsRegInfo.setColumn(0,'tempBizPlndFlmno',this.dsMhdlgDetail.getColumn(0,'bizPlndFlmno'));
        	this.dsRegInfo.setColumn(0,'tempEtcDataFlmno',this.dsMhdlgDetail.getColumn(0,'etcDataFlmno'));

        	var sPopupId 	= "popModalMhdlgP01";
        	var sMnuId 		= "MN99020000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"방법론 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

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
        			}
        		}
        	}
        }

        //신청이후 성세화면 전환
        this.fnFormTrans = function()
        {
        	var objArgs ={};
        	objArgs.mhdlgMgno = this.dsMhdlgDetail.getColumn(0,"mhdlgMgno");
        	objArgs.mhdlgDgr = this.dsMhdlgDetail.getColumn(0,"mhdlgDgr");
        	this.getOwnerFrame().form.divWork.form.fnMhdlgAplyAdminDtlCall(objArgs);
        }

        //제정개정별 컴포넌트 height 컨트롤
        this.fnRegRsnCdCtrl = function(regRsnCd, agreeClausCd)
        {
        	//divMhdlgInfoArea defalutHeight == 388
        	//6.2조일 경우 협정 관련 그리드 표출 o  divMhdlgInfoArea+177 == 565
        	if(agreeClausCd == 'AGC0001')
        	{
        		//제정일 경우 565
        		if( regRsnCd == 'MRT0001') // 개정 방법론 명 표출 x
        		{
        			this.divMhdlgInfoArea.form.btnMhdlgSeach.set_visible(false);
        			this.divMhdlgInfoArea.form.staOldMhdlgNm.set_height(0);
        			this.divMhdlgInfoArea.form.edtOldMhdlgNm.set_height(0);
        			this.divMhdlgInfoArea.form.staOldMhdlgNmArea.set_height(0);
        			this.divMhdlgInfoArea.set_height(565);

        		//개정일 경우 565+44
        		}else // 개정 방법론 명 표출 o
        		{
        			if(this.dsRegInfo.getColumn(0,'sts') != 'SEARCH')
        			{
        				this.divMhdlgInfoArea.form.btnMhdlgSeach.set_visible(true);
        			}
        			this.divMhdlgInfoArea.form.staOldMhdlgNm.set_height(44);
        			this.divMhdlgInfoArea.form.edtOldMhdlgNm.set_height(30);
        			this.divMhdlgInfoArea.form.staOldMhdlgNmArea.set_height(44);
        			this.divMhdlgInfoArea.set_height(609);
        		}
        	//6.2조가 아닐경우 협정 관련 그리드 표출 x 388
        	}else
        	{	//제정일 경우
        		if( regRsnCd == 'MRT0001') //개정 방법론 명 표출 x
        		{
        			this.divMhdlgInfoArea.form.btnMhdlgSeach.set_visible(false);
        			this.divMhdlgInfoArea.form.staOldMhdlgNm.set_height(0);
        			this.divMhdlgInfoArea.form.edtOldMhdlgNm.set_height(0);
        			this.divMhdlgInfoArea.form.staOldMhdlgNmArea.set_height(0);
        			this.divMhdlgInfoArea.set_height(388);
        		//개정일 경우
        		}else // 개정 방법론 명 표출 o
        		{
        			this.divMhdlgInfoArea.form.btnMhdlgSeach.set_visible(true);
        			this.divMhdlgInfoArea.form.staOldMhdlgNm.set_height(44);
        			this.divMhdlgInfoArea.form.edtOldMhdlgNm.set_height(30);
        			this.divMhdlgInfoArea.form.staOldMhdlgNmArea.set_height(44);
        			this.divMhdlgInfoArea.set_height(432);
        		}
        	}
        	this.divMhdlgInfoArea.form.resetScroll();
        	this.resetScroll();
        }

        //협정약정별 컴포넌트 height 컨트롤
        this.fnAgreeClausCdCtrl = function(agreeClausCd, rdoRegRsnCd)
        {
        	//divMhdlgInfoArea defalutHeight == 388
        	//제정일 경우 388
        	if(rdoRegRsnCd == 'MRT0001')
        	{	//6.2조 일경우 divMhdlgInfoArea + 177
        		if(agreeClausCd == 'AGC0001')
        		{
        			this.divMhdlgInfoArea.form.staAgrStipNm.set_height(177);
        			this.divMhdlgInfoArea.form.edtAgrStiplNm.set_height(30);
        			this.divMhdlgInfoArea.form.btnAgreeSearch.set_height(30);
        			this.divMhdlgInfoArea.form.btnDelAgree.set_height(30);
        			this.divMhdlgInfoArea.form.grdAgrStiplList.set_height(116);
        			this.divMhdlgInfoArea.form.staAgrStiplArea.set_height(177);
        			this.divMhdlgInfoArea.set_height(565);
        		//6.2조가 아닌 경우
        		}else
        		{
        			this.divMhdlgInfoArea.form.staAgrStipNm.set_height(0);
        			this.divMhdlgInfoArea.form.edtAgrStiplNm.set_height(0);
        			this.divMhdlgInfoArea.form.btnAgreeSearch.set_height(0);
        			this.divMhdlgInfoArea.form.btnDelAgree.set_height(0);
        			this.divMhdlgInfoArea.form.grdAgrStiplList.set_height(0);
        			this.divMhdlgInfoArea.form.staAgrStiplArea.set_height(0);
        			this.divMhdlgInfoArea.set_height(388);
        		}
        	//개정일 경우 divMhdlgInfoArea + 44
        	}else
        	{
        		//6.2조 일경우 divMhdlgInfoArea + 44 + 177
        		if(agreeClausCd == 'AGC0001')
        		{
        			this.divMhdlgInfoArea.form.staAgrStipNm.set_height(177);
        			this.divMhdlgInfoArea.form.edtAgrStiplNm.set_height(30);
        			this.divMhdlgInfoArea.form.btnAgreeSearch.set_height(30);
        			this.divMhdlgInfoArea.form.btnDelAgree.set_height(30);
        			this.divMhdlgInfoArea.form.grdAgrStiplList.set_height(116);
        			this.divMhdlgInfoArea.form.staAgrStiplArea.set_height(177);
        			this.divMhdlgInfoArea.set_height(609);
        		//6.2조가 아닐경우 divMhdlgInfoArea + 44
        		}else
        		{
        			this.divMhdlgInfoArea.form.staAgrStipNm.set_height(0);
        			this.divMhdlgInfoArea.form.edtAgrStiplNm.set_height(0);
        			this.divMhdlgInfoArea.form.btnAgreeSearch.set_height(0);
        			this.divMhdlgInfoArea.form.btnDelAgree.set_height(0);
        			this.divMhdlgInfoArea.form.grdAgrStiplList.set_height(0);
        			this.divMhdlgInfoArea.form.staAgrStiplArea.set_height(0);
        			this.divMhdlgInfoArea.set_height(432);
        		}
        	}
        	this.divMhdlgInfoArea.form.resetScroll();
        	this.resetScroll();

        }

        //협정약정 라디오 클릭시 협정약정MOU그리드 제어
        this.divMhdlgInfoArea_cboAgreeClausCd_onitemchanged = function(obj,e)
        {
        	this.fnAgreeClausCdCtrl(e.postvalue, this.dsMhdlgDetail.getColumn(0,'regRsnCd'));
        };

        //협정약정MOU그리드 초기화
        this.fnAgrStipInit = function()
        {

        	var agreeClausCd = this.dsMhdlgDetail.getColumn(0,'agreeClausCd');
        	if(this.gfnIsNull(agreeClausCd) || agreeClausCd != 'AGC0001'){

        		this.divMhdlgInfoArea.form.staAgrStipNm.set_height(0);
        		this.divMhdlgInfoArea.form.edtAgrStiplNm.set_height(0);
        		this.divMhdlgInfoArea.form.btnAgreeSearch.set_height(0);
        		this.divMhdlgInfoArea.form.btnDelAgree.set_height(0);
        		this.divMhdlgInfoArea.form.grdAgrStiplList.set_height(0);
        		this.divMhdlgInfoArea.form.staAgrStiplArea.set_height(0);
        		this.divMhdlgInfoArea.form.staOldMhdlgNm.set_height(0);
        		this.divMhdlgInfoArea.form.staOldMhdlgNmArea.set_height(0);
        		this.divMhdlgInfoArea.form.edtOldMhdlgNm.set_height(0);
        		this.divMhdlgInfoArea.set_height(388);
        		this.divMhdlgInfoArea.form.resetScroll();
        		this.resetScroll();
        	}


        }

        //협정약정 삭제버튼
        this.divMhdlgInfoArea_btnDelAgree_onclick = function(obj,e)
        {
        	var arrRows = this.dsAgrStiplList.extractRows("chk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsAgrStiplList.deleteMultiRows(this.dsAgrStiplList.extractRows("chk=='Y'"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divMhdlgInfoArea.form.rdoAplyClCd.addEventHandler("onitemchanged",this.divMhdlgInfoArea_rdoAplyClCd_onitemchanged,this);
            this.divMhdlgInfoArea.form.staAplyClCdNm.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divMhdlgInfoArea.form.staRegRsnNm.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divMhdlgInfoArea.form.rdoRegRsnCd.addEventHandler("onitemchanged",this.rdoRegRsnCd_onitemchanged,this);
            this.divMhdlgInfoArea.form.btnMhdlgSeach.addEventHandler("onclick",this.btnMhdlgSeach_onclick,this);
            this.divMhdlgInfoArea.form.cboBizFld.addEventHandler("onitemchanged",this.cboBizFld_onitemchanged,this);
            this.divMhdlgInfoArea.form.btnAgreeSearch.addEventHandler("onclick",this.btnAgreeSearch_onclick,this);
            this.divMhdlgInfoArea.form.btnDelAgree.addEventHandler("onclick",this.divMhdlgInfoArea_btnDelAgree_onclick,this);
            this.divMhdlgInfoArea.form.btnDelMhdlg.addEventHandler("onclick",this.btnDelMhdlg_onclick,this);
            this.divMhdlgInfoArea.form.btnAddMhdlg.addEventHandler("onclick",this.btnAddMhdlg_onclick,this);
            this.divMhdlgInfoArea.form.cboAgreeClausCd.addEventHandler("onitemchanged",this.divMhdlgInfoArea_cboAgreeClausCd_onitemchanged,this);
            this.divMhdlgInfoArea.form.rdoReddPlusYn.addEventHandler("onitemchanged",this.divMhdlgInfoArea_rdoReddPlusYn_onitemchanged,this);
            this.divFileInfo.form.staPrpsdNm.addEventHandler("onclick",this.div01_00_00_00_divFileInfo_sta02_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnAply.addEventHandler("onclick",this.divComBtn_btnAply_onclick,this);
            this.divComBtn.form.btnTempSave.addEventHandler("onclick",this.divComBtn_btnTempSave_onclick,this);
            this.dsBizFldList.addEventHandler("onvaluechanged",this.dsBizFldList_onvaluechanged,this);
            this.dsMhdlgDetail.addEventHandler("cancolumnchange",this.dsMhdlgDetail_cancolumnchange,this);
        };
        this.loadIncludeScript("MhdlgAplyS04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
