(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS12");
            this.set_titletext("사업통합신청상세화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"pgmBizMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldCertVldYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd2\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"oldCertVldYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlDivCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"divReg\" type=\"STRING\" size=\"256\"/><Column id=\"divE2\" type=\"STRING\" size=\"256\"/><Column id=\"divEvlReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrOpnnReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrOpnnReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divEvl\" type=\"STRING\" size=\"256\"/><Column id=\"dviE1\" type=\"STRING\" size=\"256\"/><Column id=\"divEvlRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrList\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrOpnnRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrList\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrOpnnRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlay\" type=\"STRING\" size=\"256\"/><Column id=\"divKoff\" type=\"STRING\" size=\"256\"/><Column id=\"divKoffReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayRegH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayRegH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRstDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRegDlbr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayDicFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDlayReg","0","0",null,"1027","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divDlayRegH1","0","0",null,"60","0",null,null,null,null,null,this.divDlayReg.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlayReg.addChild(obj.name, obj);

            obj = new Static("staDlayRegTit","20","20","342","30",null,null,null,null,null,null,this.divDlayReg.form.divDlayRegH1.form);
            obj.set_taborder("0");
            obj.set_text("착수지연신청 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlayReg.form.divDlayRegH1.addChild(obj.name, obj);

            obj = new Div("divDlayUsrReg","20","divDlayRegH1:0",null,"338","20",null,null,null,null,null,this.divDlayReg.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlayReg.addChild(obj.name, obj);

            obj = new Static("staH3","0","118",null,"220","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"76","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("staDlayYmd","0","0","150","44",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("2");
            obj.set_text("사업착수 예정일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","43","150","76",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("4");
            obj.set_text("사업착수\r\n지연사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","118","150","220",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRsn","157","50",null,"62","7",null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Div("divCalDay3","160","7","124","30",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("8");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiDlay01","155","131","800","195",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrReg.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrReg.addChild(obj.name, obj);

            obj = new Div("divDlayRegH2","0","divDlayUsrReg:0",null,"60","0",null,null,null,null,null,this.divDlayReg.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divDlayReg.addChild(obj.name, obj);

            obj = new Static("staDlayRstTit","20","20","342","30",null,null,null,null,null,null,this.divDlayReg.form.divDlayRegH2.form);
            obj.set_taborder("0");
            obj.set_text("착수지연결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlayReg.form.divDlayRegH2.addChild(obj.name, obj);

            obj = new Div("divDlayUsrRst","20","divDlayRegH2:0",null,"301","20",null,null,null,null,null,this.divDlayReg.form);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlayReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","161",null,"140","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"44","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Edit("edtDlayDgr","157","7",null,"30","7",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staDlayDgr","0","0","150","44",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("2");
            obj.set_text("검토차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"76","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staDlayRst","0","43","150","44",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("4");
            obj.set_text("검토처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","86","150","76",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("7");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","161","150","140",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("8");
            obj.set_text("검토파일 ");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Combo("cboDlayRst","157","50","227","30",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDlayIdntyTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRsn","157","93",null,"62","7",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlayDic01","157","171","800","120",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRst.form);
            obj.set_taborder("12");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRst.addChild(obj.name, obj);

            obj = new Div("divDlayUsrRegDlbr","20","divDlayUsrRst:0",null,"257","20",null,null,null,null,null,this.divDlayReg.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlayReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","119",null,"140","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("staH2","0","0",null,"44","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("staH3","0","44",null,"76","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayRst","0","0","150","44",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","44","150","76",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("4");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","119","150","140",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("5");
            obj.set_text("심의파일 ");
            obj.set_cssclass("sta_WF_Label");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Combo("cboDlayRst","157","8","227","30",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDlayDlbrTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRsn","157","51",null,"62","7",null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlayDlbr01","157","129","800","120",null,null,null,null,null,null,this.divDlayReg.form.divDlayUsrRegDlbr.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlayReg.form.divDlayUsrRegDlbr.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDlayReg.form.divDlayRegH1.form
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayRegH1.form,function(p){});
            this.divDlayReg.form.divDlayRegH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrReg.form.divCalDay3
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrReg.form.divCalDay3.form,function(p){});
            this.divDlayReg.form.divDlayUsrReg.form.divCalDay3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form,function(p){});
            this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrReg.form
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrReg.form,function(p){});
            this.divDlayReg.form.divDlayUsrReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayRegH2.form
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayRegH2.form,function(p){});
            this.divDlayReg.form.divDlayRegH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form,function(p){});
            this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrRst.form
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrRst.form,function(p){});
            this.divDlayReg.form.divDlayUsrRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form,function(p){});
            this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form.divDlayUsrRegDlbr.form
            obj = new Layout("default","",0,0,this.divDlayReg.form.divDlayUsrRegDlbr.form,function(p){});
            this.divDlayReg.form.divDlayUsrRegDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlayReg.form
            obj = new Layout("default","",0,0,this.divDlayReg.form,function(p){});
            this.divDlayReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDlayReg.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDlayReg.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDlayReg.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDlayReg.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDlayReg.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDlayReg.form.divDlayUsrReg.form.txaDlayRsn","value","dsDlayReg","dlayDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDlayReg.form.divDlayUsrRst.form.edtDlayDgr","value","dsDlayReg","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDlayReg.form.divDlayUsrRst.form.cboDlayRst","value","dsDlayReg","dlayIdntyTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDlayReg.form.divDlayUsrRst.form.txaDlayRsn","value","dsDlayReg","dlayIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDlayReg.form.divDlayUsrRegDlbr.form.edtDlayDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDlayReg.form.divDlayUsrRegDlbr.form.cboDlayRst","value","dsDlayReg","dlayDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDlayReg.form.divDlayUsrRegDlbr.form.txaDlayRsn","value","dsDlayReg","dlayDlbrCn");
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
        this.registerScript("AprvAplyS12.xfdl", function() {
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
        // 여백
        this.hDivH11 = 20;
        this.hDivH12 = 20;
        this.hDivH13 = 20;
        this.hDivH14 = 20;
        this.hDivH15 = 20;
        this.hDivH16 = 20;
        this.hDivH17 = 20;
        this.hDivH19 = 59;

        // 착수지연 등록
        this.hDivDlayRegH1 = 60;
        this.hDivDlayUsrReg = 338;
        this.hDivDlayRegH2 = 60;
        this.hDivDlayUsrRst = 301;
        this.hDivDlayUsrRegDlbr = 257;

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
        	trace("등록창 호출............................................................시작!!!");
        	this.scrollTo(0,0);

        	this.dsCurInfo.clearData();
        	this.dsBizInfo.clearData();
        	this.dsUniInfo.clearData();
        	this.dsPgmInfo.clearData();
        	this.dsDtlDivCtrl.clearData();
        	this.dsDlayReg.clearData();
        	this.dsDlayFile.clearData();
        	this.dsDlayDicFile.clearData();
        	this.dsDlayDlbrFile.clearData();

        	this.dsCurInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsCurInfo);
        	this.dsBizInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsBizInfo);
        	this.dsUniInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsUniInfo);
        	this.dsPgmInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsPgmInfo);
        	this.dsDtlDivCtrl.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsDtlDivCtrl);
        	this.dsDlayReg.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsDlayReg);

        	// 착수지연등록 파일(등록용)
        	var objFileParam1 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileDlay01"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnInitRaonK(this, objFileParam1);

        	// 착수지연 검토파일(등록용)
        	var objFileParam2 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayIdntyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDic01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form.fnInitRaonK(this, objFileParam2);

        	// 착수지연 심의파일(등록용)
        	var objFileParam3 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDlbr01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form.fnInitRaonK(this, objFileParam3);

        	// 일달력 초기화 호출 - 착수지연
        	var objParam1 = { objDs:this.dsDlayReg							// 바인딩 데이터셋
        					,sBindCol:"bizKoffPrnmntYmd"					// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"bizKoffPrnmntYmd"					// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divDlayReg.form.divDlayUsrReg.form.divCalDay3.form.fnInitCommonCalendar(this, objParam1);

        	this.fnDtlDivCtrl();
        	trace("등록창 호출............................................................완료!!!");
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /**
         * @desc 상세화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function()
        {
        	var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        	var divDlayRegHeight		= this.divDlayReg.height;
        	var divDlayUsrRegHeight		= this.divDlayReg.form.divDlayUsrReg.height;

        	if(divDlayRegHeight > 0 && divDlayUsrRegHeight > 0) {
        		trace("################### 착수지연 등록 Start ###################");
        		var dlayDmndFlmno = this.dsDlayReg.getColumn(0, "dlayDmndFlmno");
        		trace(">>> dlayDmndFlmno : " + dlayDmndFlmno);
        		if(this.gfnIsNull(dlayDmndFlmno)) {
        			this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile("");
        		}else {
        			this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile(dlayDmndFlmno);
        		}
        	}
        	else {
        		trace("################### 착수지연 등록 Start ###################");
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("multiFileDlay01", objRtn);
        	}
        };


        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "multiFileDlay01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDlayFile.clearData();
        				var nRowCnt = this.dsDlayFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDlayFile.clearData();
        				var nRowCnt = this.dsDlayFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDlayFile.clearData();
        				var nRowCnt = this.dsDlayFile.copyData(objRtn.objDs);

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlayRegHeight		= this.divDlayReg.height;
        				var divDlayUsrRstHeight		= this.divDlayReg.form.divDlayUsrRst.height;

        				if(divDlayRegHeight > 0 && divDlayUsrRstHeight > 0) {
        					trace("################### 착수지연 검토등록 Start ###################");
        					var dlayIdntyFlmno = this.dsDlayReg.getColumn(0, "dlayIdntyFlmno");
        					trace(">>> dlayIdntyFlmno : " + dlayIdntyFlmno);
        					if(this.gfnIsNull(dlayIdntyFlmno)) {
        						this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form.fnSearchFile("");
        					}else {
        						this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form.fnSearchFile(dlayIdntyFlmno);
        					}
        				}
        				else {
        					trace("################### 착수지연 검토등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlayDic01", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlayDic01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDlayDicFile.clearData();
        				var nRowCnt = this.dsDlayDicFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDlayDicFile.clearData();
        				var nRowCnt = this.dsDlayDicFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDlayDicFile.clearData();
        				var nRowCnt = this.dsDlayDicFile.copyData(objRtn.objDs);

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlayRegHeight		= this.divDlayReg.height;
        				var divDlayUsrRegDlbrHeight	= this.divDlayReg.form.divDlayUsrRegDlbr.height;

        				if(divDlayRegHeight > 0 && divDlayUsrRegDlbrHeight > 0) {
        					trace("################### 착수지연 심의등록 Start ###################");
        					var dlayDlbrFlmno = this.dsDlayReg.getColumn(0, "dlayDlbrFlmno");
        					trace(">>> dlayDlbrFlmno : " + dlayDlbrFlmno);
        					if(this.gfnIsNull(dlayDlbrFlmno)) {
        						this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form.fnSearchFile("");
        					}else {
        						this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form.fnSearchFile(dlayDlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 착수지연 심의등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlayDlbr01", objRtn);
        				}
        			}
        			break;
        		case "singleFileDlayDlbr01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDlayDlbrFile.clearData();
        				var nRowCnt = this.dsDlayDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDlayDlbrFile.clearData();
        				var nRowCnt = this.dsDlayDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {

        				this.dsDlayDlbrFile.clearData();
        				var nRowCnt = this.dsDlayDlbrFile.copyData(objRtn.objDs);

        				trace("################### 착수지연 파일 로딩 완료!!! ###################");
        			}

        			break;
        		default:
        			break;
        	}
        };

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

        				break;
        			case -2 :
        				// 재조회 필요.

        				var objArgs = {};
        				objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        				objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        				objArgs.bizTypeCd		= this.dsCurInfo.getColumn(0, "bizTypeCd");
        				objArgs.dgrRegRsnCd	    = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        				objArgs.sts				= this.dsCurInfo.getColumn(0, "sts");
        				objArgs.pgmBizMngNo		= this.dsCurInfo.getColumn(0, "pgmBizMngNo");

        				this.getOwnerFrame().form.divWork.form.divDetail.form.fnChangeDiv(objArgs);

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{

        		case "dlayUsrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlayDicDlbrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		default:
        			break;
        	}
        };

        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	//trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgAlert01" :
        			// 후처리 코드
        			break;
        		case "msgAlert02" :
        			// 후처리 코드
        			var objArgs = {};
        			objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        			objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        			objArgs.bizTypeCd		= this.dsCurInfo.getColumn(0, "bizTypeCd");
        			objArgs.dgrRegRsnCd	    = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        			objArgs.sts				= this.dsCurInfo.getColumn(0, "sts");
        			objArgs.pgmBizMngNo		= this.dsCurInfo.getColumn(0, "pgmBizMngNo");

        			this.getOwnerFrame().form.divWork.form.divDetail.form.fnChangeDiv(objArgs);

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallDlayUsrSave = function()
        {
        	if(!this.fnCallValidCheckDivDlayAply()) return false;

        	this.fnDlayUsrSave();
        };


        this.fnDlayUsrSave = function()
        {
        	//trace("착수지연신청 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyDlayUsrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyDlayUsrSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dlayUsrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsDlayReg=dsDlayReg dsDlayFile=dsDlayFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDlayDicDlbrSave = function()
        {
        	if(!this.fnCallValidCheckDivDlayDicDlbr()) return false;

         	this.fnDlayDicDlbrSave();
        };

        this.fnDlayDicDlbrSave = function()
        {
        	//trace("착수지연신청 검토결과 저장 호출...");

        	var callUrl = "";
        	var fileDs = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyDlayDicDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyDlayDicDlbrSave.irs";
        	}

        	var divDlayRegHeight		= this.divDlayReg.height;
        	var divDlayUsrRstHeight		= this.divDlayReg.form.divDlayUsrRst.height;
        	var divDlayUsrRegDlbrHeight	= this.divDlayReg.form.divDlayUsrRegDlbr.height;

        	// 착수지연 검토결과
        	if(divDlayRegHeight > 0 && divDlayUsrRstHeight > 0) {
        		fileDs = "dsDlayDicFile";
        	}
        	// 착수지연 심의결과
        	else if(divDlayRegHeight > 0 && divDlayUsrRegDlbrHeight > 0) {
        		fileDs = "dsDlayDlbrFile";
        	}

        	if(fileDs != "") {
        		var objArgs = {};
        		objArgs.svcId 			= "dlayDicDlbrSave";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsCurInfo=dsCurInfo dsDlayReg=dsDlayReg dsDlayDicDlbrFile="+fileDs;
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnDtlDivCtrl = function()
        {
        	// 착수지연등록
        	var isDivDlayReg = this.dsDtlDivCtrl.getColumn(0, "divDlayReg");
        	var isDivDlayRegH1 = this.dsDtlDivCtrl.getColumn(0, "divDlayRegH1");
        	var isDivDlayUsrReg = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrReg");
        	var isDivDlayRegH2 = this.dsDtlDivCtrl.getColumn(0, "divDlayRegH2");
        	var isDivDlayUsrRst = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrRst");
        	var isDivDlayUsrRegDlbr = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrRegDlbr");

        	// 착수지연등록
         	var hDlayReg = 0;
         	if(isDivDlayReg) {
         		if(isDivDlayRegH1) {
        			this.divDlayReg.form.divDlayRegH1.set_height(this.hDivDlayRegH1);
        			hDlayReg = hDlayReg + this.hDivDlayRegH1;
        		} else {
        			this.divDlayReg.form.divDlayRegH1.set_height(0);
        		}
         		if(isDivDlayUsrReg) {
        			this.divDlayReg.form.divDlayUsrReg.set_height(this.hDivDlayUsrReg);
        			hDlayReg = hDlayReg + this.hDivDlayUsrReg;
        		} else {
        			this.divDlayReg.form.divDlayUsrReg.set_height(0);
        		}
         		if(isDivDlayRegH2) {
        			this.divDlayReg.form.divDlayRegH2.set_height(this.hDivDlayRegH2);
        			hDlayReg = hDlayReg + this.hDivDlayRegH2;
        		} else {
        			this.divDlayReg.form.divDlayRegH2.set_height(0);
        		}
         		if(isDivDlayUsrRst) {
        			this.divDlayReg.form.divDlayUsrRst.set_height(this.hDivDlayUsrRst);
        			hDlayReg = hDlayReg + this.hDivDlayUsrRst;
        		} else {
        			this.divDlayReg.form.divDlayUsrRst.set_height(0);
        		}
        		if(isDivDlayUsrRegDlbr) {
        			this.divDlayReg.form.divDlayUsrRegDlbr.set_height(this.hDivDlayUsrRegDlbr);
        			hDlayReg = hDlayReg + this.hDivDlayUsrRegDlbr;
        		} else {
        			this.divDlayReg.form.divDlayUsrRegDlbr.set_height(0);
        		}

         		hDlayReg = hDlayReg + this.hDivH17;
         		this.divDlayReg.set_height(hDlayReg);
         	}
         	else {
         		this.divDlayReg.set_height(0);
         	}
        	this.divDlayReg.form.divDlayRegH1.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrReg.form.resetScroll();
        	this.divDlayReg.form.divDlayRegH2.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRst.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.resetScroll();
        	this.divDlayReg.form.resetScroll();
        	this.resetScroll();

        	// 업무파일 정보 호출
        	this.fnCallFileStart();

        };

        // 착수지연 오픈.
        this.fnOpenDlay = function() {

        	var hDlayReg = 0;
          	this.divDlayReg.form.divDlayRegH1.set_height(this.hDivDlayRegH1);
         	hDlayReg = hDlayReg + this.hDivDlayRegH1;
          	this.divDlayReg.form.divDlayUsrReg.set_height(this.hDivDlayUsrReg);
         	hDlayReg = hDlayReg + this.hDivDlayUsrReg;
          	this.divDlayReg.form.divDlayRegH2.set_height(0);
         	hDlayReg = hDlayReg + 0;
          	this.divDlayReg.form.divDlayUsrRst.set_height(0);
         	hDlayReg = hDlayReg + 0;
         	this.divDlayReg.form.divDlayUsrRegDlbr.set_height(0);
         	hDlayReg = hDlayReg + 0;
          	hDlayReg = hDlayReg + 20;
          	this.divDlayReg.set_height(hDlayReg);

         	this.divDlayReg.form.divDlayRegH1.form.resetScroll();
         	this.divDlayReg.form.divDlayUsrReg.form.resetScroll();
         	this.divDlayReg.form.divDlayRegH2.form.resetScroll();
         	this.divDlayReg.form.divDlayUsrRst.form.resetScroll();
         	this.divDlayReg.form.divDlayUsrRegDlbr.form.resetScroll();
         	this.divDlayReg.form.resetScroll();
        	this.resetScroll();

        	var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        	var divDlayRegHeight		= this.divDlayReg.height;
        	var divDlayUsrRegHeight		= this.divDlayReg.form.divDlayUsrReg.height;

        	if(divDlayRegHeight > 0 && divDlayUsrRegHeight > 0) {
        		trace("################### 착수지연 등록 Start ###################");
        		var dlayDmndFlmno = this.dsDlayReg.getColumn(0, "dlayDmndFlmno");
        		trace(">>> dlayDmndFlmno : " + dlayDmndFlmno);
        		if(this.gfnIsNull(dlayDmndFlmno)) {
        			this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile("");
        		}else {
        			this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile(dlayDmndFlmno);
        		}
        	}
        	else {
        		trace("################### 착수지연 등록 Start ###################");
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("multiFileDlay01", objRtn);
        	}
        };

        // 착수지연신청 체크
        this.fnCallValidCheckDivDlayAply = function()
        {
        	var dlayDmndRsn = this.dsDlayReg.getColumn(0, "dlayDmndRsn");

        	if(this.gfnIsNull(dlayDmndRsn)) {
        		this.divDlayReg.form.divDlayUsrReg.form.txaDlayRsn.set_cssclass("error");
        		this.divDlayReg.form.divDlayUsrReg.form.txaDlayRsn.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업착수 지연사유", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divDlayReg.form.divDlayUsrReg.form.txaDlayRsn.set_cssclass(""); }

        	return true;
        };

        // 착수지연검토 및 심의결과 체크
        this.fnCallValidCheckDivDlayDicDlbr = function()
        {
        	var dlayIdntyTypeCd = this.dsDlayReg.getColumn(0, "dlayIdntyTypeCd");
        	var dlayDlbrTypeCd = this.dsDlayReg.getColumn(0, "dlayDlbrTypeCd");

        	if(this.divDlayReg.form.divDlayUsrRst.height > 0 && this.divDlayReg.form.divDlayUsrRegDlbr.height < 1) {
        		if(this.gfnIsNull(dlayIdntyTypeCd)) {
        			this.divDlayReg.form.divDlayUsrRst.form.cboDlayRst.set_cssclass("error");
        			this.divDlayReg.form.divDlayUsrRst.form.cboDlayRst.setFocus();
        			this.gfnShowMessage(this, "W000025", "검토처리결과", "fnMsgCallback", "msgAlert01");
        			return false;
        		} else { this.divDlayReg.form.divDlayUsrRst.form.cboDlayRst.set_cssclass(""); }
        	}
        	else {
        		if(this.gfnIsNull(dlayDlbrTypeCd)) {
        			this.divDlayReg.form.divDlayUsrRegDlbr.form.cboDlayRst.set_cssclass("error");
        			this.divDlayReg.form.divDlayUsrRegDlbr.form.cboDlayRst.setFocus();
        			this.gfnShowMessage(this, "W000025", "심의처리결과", "fnMsgCallback", "msgAlert01");
        			return false;
        		} else { this.divDlayReg.form.divDlayUsrRegDlbr.form.cboDlayRst.set_cssclass(""); }
        	}

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDlayReg.form.divDlayRegH1.form.staDlayRegTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrReg.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayRegH2.form.staDlayRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRst.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRst.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlayReg.form.divDlayUsrRegDlbr.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRegDlbr.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
        };
        this.loadIncludeScript("AprvAplyS12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
