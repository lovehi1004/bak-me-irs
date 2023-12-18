(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS11");
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


            obj = new Dataset("dsEvlReg", this);
            obj._setContents("<ColumnInfo><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evlDgr\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evalrId\" type=\"STRING\" size=\"256\"/><Column id=\"evalrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlDt\" type=\"STRING\" size=\"256\"/><Column id=\"evlOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"evlFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffReg", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffRptFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrOpnnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrId\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrOpnnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divReg","0","0",null,"1678","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divE2","0","3",null,"60","0",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("1");
            obj.set_text("div01");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staEvlRegTit","20","20","869","30",null,null,null,null,null,null,this.divReg.form.divE2.form);
            obj.set_taborder("0");
            obj.set_text("평가결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divReg.form.divE2.addChild(obj.name, obj);

            obj = new Div("divEvlReg","20","divE2:0",null,"262","20",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staEvlH4","0","118",null,"140","0",null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlH2","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlH3","0","43",null,"76","0",null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlTypeCd","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("2");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlOpnn","0","43","150","76",null,null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("4");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staEvlFlmno","0","118","150","140",null,null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("5");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Combo("cboEvlTypeCd","157","8","227","30",null,null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsEvlTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new TextArea("txaEvlOpnn","157","51",null,"62","7",null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleEvl01","157","128","800","120",null,null,null,null,null,null,this.divReg.form.divEvlReg.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divEvlReg.addChild(obj.name, obj);

            obj = new Div("divDicDlbrOpnnReg","20","divEvlReg:0",null,"215","20",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","75",null,"140","0",null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"76","0",null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","76",null,null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("2");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFlmno","0","75","150","140",null,null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("3");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn","157","7",null,"62","7",null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn00","158","-212",null,"62","6",null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDicOpnn01","157","85","800","120",null,null,null,null,null,null,this.divReg.form.divDicDlbrOpnnReg.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divDicDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Div("divDicDlbrReg","20","divDicDlbrOpnnReg:0",null,"301","18",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","161",null,"140","0",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"44","0",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrDgr","157","7",null,"30","7",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"76","0",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDicDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDicDlbrOpnn","0","86","150","76",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("7");
            obj.set_text("사전심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDicDlbrFlmno","0","161","150","140",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("8");
            obj.set_text("사전심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Combo("cboDicDlbrTypeCd","157","50","227","30",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDicPrcsTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new TextArea("txaDicDlbrOpnn","157","93",null,"62","7",null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDt","783","43","150","44",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("12");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Div("divCalDay","940","51","124","30",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("13");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDic01","157","171","800","120",null,null,null,null,null,null,this.divReg.form.divDicDlbrReg.form);
            obj.set_taborder("14");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divDicDlbrReg.addChild(obj.name, obj);

            obj = new Div("divDlbrOpnnReg","20","divDicDlbrReg:0",null,"215","20",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","75",null,"140","0",null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"76","0",null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","76",null,null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("2");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFlmno","0","75","150","140",null,null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("3");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn","157","7",null,"62","7",null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn00","158","-212",null,"62","6",null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlbrOpnn01","157","85","800","120",null,null,null,null,null,null,this.divReg.form.divDlbrOpnnReg.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divDlbrOpnnReg.addChild(obj.name, obj);

            obj = new Div("divDlbrReg","20","divDlbrOpnnReg:0",null,"345","18",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","161",null,"140","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"44","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Edit("edtDlbrDgr","157","7",null,"30","7",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"76","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("4");
            obj.set_text("심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnn","0","86","150","76",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("7");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrFlmno","0","161","150","140",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("8");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Combo("cboDlbrTypeCd","157","50","227","30",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDlbrTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrOpnn","157","93",null,"62","7",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrDt","783","43","150","44",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("12");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Div("divCalDay2","940","51","124","30",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("13");
            obj.set_text("divCalDay2");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staH5","0","300",null,"44","0",null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Static("staDlbrUniqNo","0","300","150","44",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("15");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","157","307","580","30",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("16");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlbr01","157","171","800","120",null,null,null,null,null,null,this.divReg.form.divDlbrReg.form);
            obj.set_taborder("17");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divDlbrReg.addChild(obj.name, obj);

            obj = new Div("divKoffReg","20","divDlbrReg:0",null,"263","20",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staKoffH2","0","43",null,"220","0",null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Static("staKoffH1","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Static("staKoffDay","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("1");
            obj.set_text("사업착수일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Static("staKoffFile","0","43","150","220",null,null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("3");
            obj.set_text("착수보고파일");
            obj.set_cssclass("sta_WF_Label");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Div("divCalDay3","157","8","124","30",null,null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("5");
            obj.set_text("divCalDay3");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiKoff01","155","56","800","195",null,null,null,null,null,null,this.divReg.form.divKoffReg.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divReg.form.divKoffReg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReg.form.divE2.form
            obj = new Layout("default","",0,0,this.divReg.form.divE2.form,function(p){});
            this.divReg.form.divE2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divEvlReg.form.divRaonKSingleEvl01
            obj = new Layout("default","",0,0,this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form,function(p){});
            this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divEvlReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divEvlReg.form,function(p){});
            this.divReg.form.divEvlReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01
            obj = new Layout("default","",0,0,this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form,function(p){});
            this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDicDlbrOpnnReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divDicDlbrOpnnReg.form,function(p){});
            this.divReg.form.divDicDlbrOpnnReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDicDlbrReg.form.divCalDay
            obj = new Layout("default","",0,0,this.divReg.form.divDicDlbrReg.form.divCalDay.form,function(p){});
            this.divReg.form.divDicDlbrReg.form.divCalDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01
            obj = new Layout("default","",0,0,this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form,function(p){});
            this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDicDlbrReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divDicDlbrReg.form,function(p){});
            this.divReg.form.divDicDlbrReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01
            obj = new Layout("default","",0,0,this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form,function(p){});
            this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDlbrOpnnReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divDlbrOpnnReg.form,function(p){});
            this.divReg.form.divDlbrOpnnReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDlbrReg.form.divCalDay2
            obj = new Layout("default","",0,0,this.divReg.form.divDlbrReg.form.divCalDay2.form,function(p){});
            this.divReg.form.divDlbrReg.form.divCalDay2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01
            obj = new Layout("default","",0,0,this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form,function(p){});
            this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divDlbrReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divDlbrReg.form,function(p){});
            this.divReg.form.divDlbrReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divKoffReg.form.divCalDay3
            obj = new Layout("default","",0,0,this.divReg.form.divKoffReg.form.divCalDay3.form,function(p){});
            this.divReg.form.divKoffReg.form.divCalDay3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divKoffReg.form.divRaonKMultiKoff01
            obj = new Layout("default","",0,0,this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form,function(p){});
            this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divKoffReg.form
            obj = new Layout("default","",0,0,this.divReg.form.divKoffReg.form,function(p){});
            this.divReg.form.divKoffReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divReg.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divReg.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divReg.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divReg.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divReg.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divReg.form.divDicDlbrReg.form.edtDicDlbrDgr","value","dsDicDlbrReg","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd","value","dsDicDlbrReg","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divReg.form.divDicDlbrReg.form.txaDicDlbrOpnn","value","dsDicDlbrReg","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divReg.form.divDlbrReg.form.edtDlbrDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divReg.form.divDlbrReg.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divReg.form.divDlbrReg.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDicDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divReg.form.divDlbrReg.form.edtBizUnqno","value","dsDlbrReg","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divReg.form.divDlbrReg.form.edtBizUnqno00","value","dsDlbrReg","rgtrId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyS11.xfdl", function() {
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

        // 등록
        this.hDivE2 = 60;
        this.hDivEvlReg = 262;
        this.hDivDicDlbrReg = 301;
        this.hDivDicDlbrOpnnReg = 215;
        this.hDivDlbrReg = 345;
        this.hDivDlbrOpnnReg = 215;
        this.hDivKoffReg = 263;

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
        	this.dsEvlReg.clearData();
        	this.dsEvlFile.clearData();
        	this.dsDlbrReg.clearData();
        	this.dsDlbrFile.clearData();
        	this.dsDlbrOpnnFile.clearData();
        	this.dsDicDlbrReg.clearData();
        	this.dsDicDlbrFile.clearData();
        	this.dsDicDlbrOpnnFile.clearData();
        	this.dsKoffReg.clearData();
        	this.dsKoffFile.clearData();

        	this.dsCurInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsCurInfo);
        	this.dsBizInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsBizInfo);
        	this.dsUniInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsUniInfo);
        	this.dsPgmInfo.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsPgmInfo);
        	this.dsDtlDivCtrl.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsDtlDivCtrl);
        	this.dsEvlReg.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsEvlReg);
        	this.dsDlbrReg.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsDlbrReg);
        	this.dsDicDlbrReg.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsDicDlbrReg);
        	this.dsKoffReg.copyData(this.getOwnerFrame().form.divWork.form.divDetail.form.dsKoffReg);

        	// 평가파일(등록용)
        	var objFileParam1 = { objDs:this.dsEvlReg								// 바인딩 데이터셋
        					,sBindCol:"evlFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileEvl01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form.fnInitRaonK(this, objFileParam1);

        	// 	// 사전심의파일(등록용)
        	var objFileParam2 = { objDs:this.dsDicDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"dicDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDic01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form.fnInitRaonK(this, objFileParam2);

        	// 	// 이의신청파일(등록용)
        	var objFileParam3 = { objDs:this.dsDicDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDicOpnn01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form.fnInitRaonK(this, objFileParam3);

        	// 심의파일(등록용)
        	var objFileParam4 = { objDs:this.dsDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbr01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form.fnInitRaonK(this, objFileParam4);

        	var objFileParam5 = { objDs:this.dsDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrOpnn01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form.fnInitRaonK(this, objFileParam5);

        	// 착수보고파일(등록용)
        	var objFileParam6 = { objDs:this.dsKoffReg								// 바인딩 데이터셋
        					,sBindCol:"koffRptFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileKoff01"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form.fnInitRaonK(this, objFileParam6);

        	// 일달력 초기화 호출 - 사전심의
        	var objParam1 = { objDs:this.dsDicDlbrReg							// 바인딩 데이터셋
        					,sBindCol:"dicDlbrDt"								// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"dicDlbrDt"							// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divReg.form.divDicDlbrReg.form.divCalDay.form.fnInitCommonCalendar(this, objParam1);

        	// 일달력 초기화 호출 - 심의
        	var objParam2 = { objDs:this.dsDlbrReg							// 바인딩 데이터셋
        					,sBindCol:"dlbrDt"								// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"dlbrDt"							// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divReg.form.divDlbrReg.form.divCalDay2.form.fnInitCommonCalendar(this, objParam2);

        	// 일달력 초기화 호출 - 착수보고
        	var objParam3 = { objDs:this.dsKoffReg							// 바인딩 데이터셋
        					,sBindCol:"bizKoffYmd"							// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"bizKoffYmd"						// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divReg.form.divKoffReg.form.divCalDay3.form.fnInitCommonCalendar(this, objParam3);

        	// 심의결과등록 - 사업고유번호 길이 초기화
        	this.divReg.form.divDlbrReg.form.staH5.set_height(0);
        	this.divReg.form.divDlbrReg.form.staDlbrUniqNo.set_height(0);
        	this.divReg.form.divDlbrReg.form.edtBizUnqno.set_visible(false);

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
        	// 평가 등록 판단 필요.
        	var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        	var divRegHeight	= this.divReg.height;
        	var divEvlRegHeight = this.divReg.form.divEvlReg.height;

        	if(divRegHeight > 0 && divEvlRegHeight > 0) {
        		trace("################### 평가등록 Start ###################");
        		var evlFlmno = this.dsEvlReg.getColumn(0, "evlFlmno");
        		trace(">>> evlFlmno : " + evlFlmno);
        		if(this.gfnIsNull(evlFlmno)) {
        			this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form.fnSearchFile("");
        		}else {
        			this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form.fnSearchFile(evlFlmno);
        		}
        	}
        	else {
        		trace("################### 평가등록 Start ###################");
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("singleFileEvl01", objRtn);
        	}
        };


        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFileEvl01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsEvlFile.clearData();
        				var nRowCnt = this.dsEvlFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsEvlFile.clearData();
        				var nRowCnt = this.dsEvlFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsEvlFile.clearData();
        				var nRowCnt = this.dsEvlFile.copyData(objRtn.objDs);

        				// 사전심의 등록 판단 필요.
        				var prcsTypeCd 			= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight		= this.divReg.height;
        				var divDicDlbrRegHeight = this.divReg.form.divDicDlbrReg.height;

        				if(divRegHeight > 0 && divDicDlbrRegHeight > 0) {
        					trace("################### 사전심의등록 Start ###################");
        					var dicDlbrFlmno = this.dsDicDlbrReg.getColumn(0, "dicDlbrFlmno");
        					trace(">>> dicDlbrFlmno : " + dicDlbrFlmno);
        					if(this.gfnIsNull(dicDlbrFlmno)) {
        						this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form.fnSearchFile("");
        					}else {
        						this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form.fnSearchFile(dicDlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 사전심의등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDic01", objRtn);
        				}
        			}

        			break;
        		case "singleFileDic01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDicDlbrFile.clearData();
        				var nRowCnt = this.dsDicDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDicDlbrFile.clearData();
        				var nRowCnt = this.dsDicDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDicDlbrFile.clearData();
        				var nRowCnt = this.dsDicDlbrFile.copyData(objRtn.objDs);

        				// 이의신청 등록 판단.
        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight			= this.divReg.height;
        				var divDicDlbrOpnnRegHeight = this.divReg.form.divDicDlbrOpnnReg.height;

        				if(divRegHeight > 0 && divDicDlbrOpnnRegHeight > 0) {
        					trace("################### 이의신청등록 Start ###################");
        					var objcAplyFlmno = this.dsDicDlbrReg.getColumn(0, "objcAplyFlmno");
        					trace(">>> objcAplyFlmno : " + objcAplyFlmno);
        					if(this.gfnIsNull(objcAplyFlmno)) {
        						this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form.fnSearchFile("");
        					}else {
        						this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form.fnSearchFile(objcAplyFlmno);
        					}
        				}
        				else {
        					trace("################### 이의신청등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDicOpnn01", objRtn);
        				}
        			}

        			break;
        		case "singleFileDicOpnn01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDicDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDicDlbrOpnnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDicDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDicDlbrOpnnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDicDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDicDlbrOpnnFile.copyData(objRtn.objDs);

        				// 이의신청 등록 판단.
        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight			= this.divReg.height;
        				var divDlbrRegHeight 		= this.divReg.form.divDlbrReg.height;

        				if(divRegHeight > 0 && divDlbrRegHeight > 0){
        					trace("################### 심의등록 Start ###################");
        					var dlbrFlmno = this.dsDlbrReg.getColumn(0, "dlbrFlmno");
        					trace(">>> dlbrFlmno : " + dlbrFlmno);
        					if(this.gfnIsNull(dlbrFlmno)) {
        						this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form.fnSearchFile("");
        					}else {
        						this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form.fnSearchFile(dicDlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 심의등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlbr01", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlbr01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDlbrFile.clearData();
        				var nRowCnt = this.dsDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDicDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDlbrFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDicDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDlbrFile.copyData(objRtn.objDs);

        				// 심의 - 이의신청 등록 판단.
        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight			= this.divReg.height;
        				var divDlbrOpnnRegHeight 	= this.divReg.form.divDlbrOpnnReg.height;

        				if(divRegHeight > 0 && divDlbrOpnnRegHeight > 0) {
        					trace("################### 심의 - 이의신청등록 Start ###################");
        					var objcAplyFlmno = this.dsDlbrReg.getColumn(0, "objcAplyFlmno");
        					trace(">>> objcAplyFlmno : " + objcAplyFlmno);
        					if(this.gfnIsNull(objcAplyFlmno)) {
        						this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form.fnSearchFile("");
        					}else {
        						this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form.fnSearchFile(objcAplyFlmno);
        					}
        				}
        				else {
        					trace("################### 심의 - 이의신청등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlbrOpnn01", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlbrOpnn01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDlbrOpnnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDlbrOpnnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsDlbrOpnnFile.clearData();
        				var nRowCnt = this.dsDlbrOpnnFile.copyData(objRtn.objDs);

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight			= this.divReg.height;
        				var divKoffRegHeight 		= this.divReg.form.divKoffReg.height;

        				if(divRegHeight > 0 && divKoffRegHeight > 0) {
        					trace("################### 착수보고 등록 Start ###################");
        					var koffRptFlmno = this.dsKoffReg.getColumn(0, "koffRptFlmno");
        					trace(">>> koffRptFlmno : " + koffRptFlmno);
        					if(this.gfnIsNull(koffRptFlmno)) {
        						this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form.fnSearchFile("");
        					}else {
        						this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form.fnSearchFile(koffRptFlmno);
        					}
        				}
        				else {
        					trace("################### 착수보고 등록 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileKoff01", objRtn);
        				}
        			}

        			break;
        		case "multiFileKoff01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsKoffFile.clearData();
        				var nRowCnt = this.dsKoffFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsKoffFile.clearData();
        				var nRowCnt = this.dsKoffFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsKoffFile.clearData();
        				var nRowCnt = this.dsKoffFile.copyData(objRtn.objDs);

        				trace("################### 상세 > 등록화면 모든 파일 조회 완료!!! ###################");

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

        		case "evlSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dicDlbrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dicDlbrOpnnSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlbrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlbrOpnnSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "koffSave" :
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
        this.fnEvlSave = function()
        {
        	//trace("평가결과 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyEvlSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyEvlSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "evlSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsEvlReg=dsEvlReg dsEvlFile=dsEvlFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallEvlSave = function()
        {
        	if(!this.fnCallValidCheckDivEvl()) return false;

        	this.fnEvlSave();
        };

        this.fnDicDlbrSave = function()
        {
        	//trace("사전심의결과 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDicDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDicDlbrSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dicDlbrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsDicDlbrReg=dsDicDlbrReg dsDicDlbrFile=dsDicDlbrFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallDicDlbrSave = function()
        {
        	if(!this.fnCallValidCheckDivDicDlbr()) return false;

         	this.fnDicDlbrSave();
        };


        this.fnDicDlbrOpnnSave = function()
        {
        	//trace("사전심의 이의신청 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyDicDlbrOpnnSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyDicDlbrOpnnSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dicDlbrOpnnSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsDicDlbrReg=dsDicDlbrReg dsDicDlbrOpnnFile=dsDicDlbrOpnnFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDicDlbrOpnnSave = function()
        {
        	if(!this.fnCallValidCheckDivDicDlbrOpnn()) return false;

        	this.fnDicDlbrOpnnSave();
        };

        this.fnDlbrSave = function()
        {
        	//trace("심의결과 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDlbrSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dlbrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsDlbrReg=dsDlbrReg dsDlbrFile=dsDlbrFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallDlbrSave = function()
        {
        	if(!this.fnCallValidCheckDivDlbr()) return false;

        	this.fnDlbrSave();
        };

        this.fnDlbrOpnnSave = function()
        {
        	//trace("심의 이의신청 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyDlbrOpnnSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyDlbrOpnnSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dlbrOpnnSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsDlbrReg=dsDlbrReg dsDlbrOpnnFile=dsDlbrOpnnFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallDlbrOpnnSave = function()
        {
        	if(!this.fnCallValidCheckDivDlbrOpnn()) return false;

        	this.fnDlbrOpnnSave();
        };


        this.fnKoffSave = function()
        {
        	//trace("착수보고 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyKoffSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyKoffSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "koffSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsKoffReg=dsKoffReg dsKoffFile=dsKoffFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallKoffSave = function()
        {
        	if(!this.fnCallValidCheckDivKoff()) return false;

         	this.fnKoffSave();
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnDtlDivCtrl = function()
        {
        	// 등록
        	var isDivReg = this.dsDtlDivCtrl.getColumn(0, "divReg");
        	var isDivE2 = this.dsDtlDivCtrl.getColumn(0, "divE2");
        	var isDivEvlReg = this.dsDtlDivCtrl.getColumn(0, "divEvlReg");
        	var isDivDicDlbrOpnnReg  = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrOpnnReg");
        	var isDivDicDlbrReg  = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrReg");
        	var isDivDlbrOpnnReg  = this.dsDtlDivCtrl.getColumn(0, "divDlbrOpnnReg");
        	var isDivDlbrReg  = this.dsDtlDivCtrl.getColumn(0, "divDlbrReg");
        	var isDivKoffReg  = this.dsDtlDivCtrl.getColumn(0, "divKoffReg");

        	// 등록창
        	var hReg = 60;
        	if(isDivReg) {
        		// 평가
        		if(isDivEvlReg) {
        			this.divReg.form.divE2.form.staEvlRegTit.set_text("평가결과 등록   ");
        			this.divReg.form.divE2.set_height(this.hDivE2);
        			this.divReg.form.divEvlReg.set_height(this.hDivEvlReg);
        			hReg = hReg + this.hDivEvlReg;
        		}
        		else {
        			this.divReg.form.divEvlReg.set_height(0);
        		}
        		// 사전심의
        		if(isDivDicDlbrReg || isDivDicDlbrOpnnReg) {
        			if(isDivDicDlbrReg) {
        				this.divReg.form.divE2.form.staEvlRegTit.set_text("사전심의결과 등록   ");
        				this.divReg.form.divE2.set_height(this.hDivE2);
        				this.divReg.form.divDicDlbrReg.set_height(this.hDivDicDlbrReg);
        				this.divReg.form.divDicDlbrOpnnReg.set_height(0);
        				hReg = hReg + this.hDivDicDlbrReg;
        			}
        			if(isDivDicDlbrOpnnReg) {
        				this.divReg.form.divE2.form.staEvlRegTit.set_text("이의신청  ");
        				this.divReg.form.divE2.set_height(this.hDivE2);
        				this.divReg.form.divDicDlbrReg.set_height(0);
        				this.divReg.form.divDicDlbrOpnnReg.set_height(this.hDivDicDlbrOpnnReg);
        				hReg = hReg +this.hDivDicDlbrOpnnReg;
        			}
        		}
        		else {
        			this.divReg.form.divDicDlbrReg.set_height(0);
        			this.divReg.form.divDicDlbrOpnnReg.set_height(0);
        		}
        		// 심의
        		if(isDivDlbrReg || isDivDlbrOpnnReg) {
        			if(isDivDlbrReg) {
        				this.divReg.form.divE2.form.staEvlRegTit.set_text("심의결과 등록   ");
        				this.divReg.form.divE2.set_height(this.hDivE2);
        				this.divReg.form.divDlbrReg.set_height(this.hDivDlbrReg);
        				this.divReg.form.divDlbrOpnnReg.set_height(0);
        				hReg = hReg + this.hDivDlbrReg;
        			}
        			if(isDivDlbrOpnnReg) {
        				this.divReg.form.divE2.form.staEvlRegTit.set_text("이의신청  ");
        				this.divReg.form.divE2.set_height(this.hDivE2);
        				this.divReg.form.divDlbrReg.set_height(0);
        				this.divReg.form.divDlbrOpnnReg.set_height(this.hDivDlbrOpnnReg);
        				hReg = hReg +this.hDivDlbrOpnnReg;
        			}
        		}
        		else {
        			this.divReg.form.divDlbrReg.set_height(0);
        			this.divReg.form.divDlbrOpnnReg.set_height(0);
        		}
        		// 사업착수
        		if(isDivKoffReg) {
        			this.divReg.form.divE2.form.staEvlRegTit.set_text("사업착수보고   ");
        			this.divReg.form.divE2.set_height(this.hDivE2);
        			this.divReg.form.divKoffReg.set_height(this.hDivKoffReg);
        			hReg = hReg + this.hDivKoffReg;
        		}
        		else {
        			this.divReg.form.divKoffReg.set_height(0);
        		}

        		hReg = hReg + this.hDivH16;
        		this.divReg.set_height(hReg);
        	}
        	else {
        		this.divReg.form.divE2.set_height(0);
        		this.divReg.set_height(0);
        	}
         	this.divReg.form.divE2.form.resetScroll();
         	this.divReg.form.divEvlReg.form.resetScroll();
         	this.divReg.form.divDicDlbrReg.form.resetScroll();
         	this.divReg.form.divDicDlbrOpnnReg.form.resetScroll();
         	this.divReg.form.divDlbrReg.form.resetScroll();
         	this.divReg.form.divDlbrOpnnReg.form.resetScroll();
         	this.divReg.form.divKoffReg.form.resetScroll();
        	this.divReg.form.resetScroll();
        	this.resetScroll();

        	// 업무파일 정보 호출
        	this.fnCallFileStart();

        };

        // 평가결과 체크
        this.fnCallValidCheckDivEvl = function()
        {
        	var evlTypeCd = this.dsEvlReg.getColumn(0, "evlTypeCd");

        	if(this.gfnIsNull(evlTypeCd)) {
        		this.divReg.form.divEvlReg.form.cboEvlTypeCd.set_cssclass("error");
        		this.divReg.form.divEvlReg.form.cboEvlTypeCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "평가처리결과", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divEvlReg.form.cboEvlTypeCd.set_cssclass(""); }

        	return true;
        };

        // 사전심의결과 체크
        this.fnCallValidCheckDivDicDlbr = function()
        {
        	var dicDlbrTypeCd 	= this.dsDicDlbrReg.getColumn(0, "dicDlbrTypeCd");
        	var dicDlbrDt 		= this.dsDicDlbrReg.getColumn(0, "dicDlbrDt");

        	if(this.gfnIsNull(dicDlbrTypeCd)) {
        		this.divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd.set_cssclass("error");
        		this.divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사전심의 처리결과", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd.set_cssclass(""); }

        	if(this.gfnIsNull(dicDlbrDt)) {
        		this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.set_cssclass("error");
        		this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사전심의일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.set_cssclass(""); }

        	if(this.gfnLengthByte(dicDlbrDt) != 8) {
        		this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.set_cssclass("error");
        		this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000026", "사전심의일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDicDlbrReg.form.divCalDay.form.calYmd.set_cssclass(""); }

        	return true;
        };

        // 사전심의-이의신청 체크
        this.fnCallValidCheckDivDicDlbrOpnn = function()
        {
        	var objcAplyOpnn = this.dsDicDlbrReg.getColumn(0, "objcAplyOpnn");

        	if(this.gfnIsNull(objcAplyOpnn)) {
        		this.divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn.set_cssclass("error");
        		this.divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn.setFocus();
        		this.gfnShowMessage(this, "W000025", "이의신청의견", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn.set_cssclass(""); }

        	return true;
        };

        // 심의결과 체크
        this.fnCallValidCheckDivDlbr = function()
        {
        	var dlbrTypeCd 	= this.dsDlbrReg.getColumn(0, "dlbrTypeCd");
        	var dlbrDt 		= this.dsDlbrReg.getColumn(0, "dlbrDt");

        	if(this.gfnIsNull(dlbrTypeCd)) {
        		this.divReg.form.divDlbrReg.form.cboDlbrTypeCd.set_cssclass("error");
        		this.divReg.form.divDlbrReg.form.cboDlbrTypeCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "심의처리결과", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDlbrReg.form.cboDlbrTypeCd.set_cssclass(""); }

        	if(this.gfnIsNull(dlbrDt)) {
        		this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.set_cssclass("error");
        		this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000025", "심의일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.set_cssclass(""); }

        	if(this.gfnLengthByte(dlbrDt) != 8) {
        		this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.set_cssclass("error");
        		this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000026", "심의일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDlbrReg.form.divCalDay2.form.calYmd.set_cssclass(""); }

        	this.aplyClCd 	= this.dsUniInfo.getColumn(0, "aplyClCd");
        	var bizUnqno 	= this.dsDlbrReg.getColumn(0, "bizUnqno");
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	// 신규신청일때에만 사업고유번호를 체크한다.
        	if(dgrRegRsnCd == "BGC0001") {
        		// 사전승인신청. 심의신청건.
        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			// 심의승인 선택 시.
        			if(dlbrTypeCd == "DTC0001") {
        				if(this.gfnIsNull(bizUnqno)) {
        					this.divReg.form.divDlbrReg.form.edtBizUnqno.set_cssclass("error");
        					this.divReg.form.divDlbrReg.form.edtBizUnqno.setFocus();
        					this.gfnShowMessage(this, "W000025", "사업고유번호", "fnMsgCallback", "msgAlert01");
        					return false;
        				} else { this.divReg.form.divDlbrReg.form.edtBizUnqno.set_cssclass(""); }
        			}
        		}
        	}

        	return true;
        };

        // 심의-이의신청 체크
        this.fnCallValidCheckDivDlbrOpnn = function()
        {
        	var objcAplyOpnn = this.dsDlbrReg.getColumn(0, "objcAplyOpnn");

        	if(this.gfnIsNull(objcAplyOpnn)) {
        		this.divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn.set_cssclass("error");
        		this.divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn.setFocus();
        		this.gfnShowMessage(this, "W000025", "이의신청의견", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn.set_cssclass(""); }

        	return true;
        };
        this.divReg_divDlbrReg_cboDlbrTypeCd_onitemchanged = function(obj,e)
        {
         	this.aplyClCd 		= this.dsUniInfo.getColumn(0, "aplyClCd");
        	this.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        	var gap = 44;		// 사업고유번호 행높이.

        	// 신규신청에서만 열어준다.
        	if(this.dgrRegRsnCd == "BGC0001") {
        		// 사전승인신청. 심의신청건.
        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			// 심의승인 선택 시.
        			if(e.postvalue == "DTC0001") {
        				this.divReg.set_height(this.hDivE2 + this.hDivDlbrReg + 20);  // this.hDivE2 + this.hDivDlbrReg
        				this.divReg.form.divDlbrReg.set_height(this.hDivDlbrReg);	// this.hDivDlbrReg
        				this.divReg.form.divDlbrReg.form.staH5.set_height(gap);
        				this.divReg.form.divDlbrReg.form.staDlbrUniqNo.set_height(gap);
        				this.divReg.form.divDlbrReg.form.edtBizUnqno.set_visible(true);
        			}
        			else {
        				this.divReg.set_height(this.hDivE2 + this.hDivDlbrReg - gap + 20);
        				this.divReg.form.divDlbrReg.set_height(this.hDivDlbrReg - gap);
        				this.divReg.form.divDlbrReg.form.staH5.set_height(0);
        				this.divReg.form.divDlbrReg.form.staDlbrUniqNo.set_height(0);
        				this.divReg.form.divDlbrReg.form.edtBizUnqno.set_visible(false);
        			}
        		}
        	}
        	else {
        		this.divReg.set_height(this.hDivE2 + this.hDivDlbrReg - gap + 20);
        		this.divReg.form.divDlbrReg.set_height(this.hDivDlbrReg - gap);
        		this.divReg.form.divDlbrReg.form.staH5.set_height(0);
        		this.divReg.form.divDlbrReg.form.staDlbrUniqNo.set_height(0);
        		this.divReg.form.divDlbrReg.form.edtBizUnqno.set_visible(false);
        	}

        	this.divReg.form.divDlbrReg.form.resetScroll();
        	this.divReg.form.resetScroll();
        	this.resetScroll();
        };

        // 착수보고
        this.fnCallValidCheckDivKoff = function()
        {
        	var bizKoffYmd = this.dsKoffReg.getColumn(0, "bizKoffYmd");

        	if(this.gfnIsNull(bizKoffYmd)) {
        		this.divReg.form.divKoffReg.form.divCalDay3.form.calYmd.set_cssclass("error");
        		this.divReg.form.divKoffReg.form.divCalDay3.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업착수일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divReg.form.divKoffReg.form.divCalDay3.form.calYmd.set_cssclass(""); }

        	return true;
        };

        this.fnOpenKoff = function()
        {
        	// 착수등록 오픈
         	var hReg = this.hDivE2;
         	this.divReg.form.divE2.form.staEvlRegTit.set_text("사업착수보고   ");
         	this.divReg.form.divE2.set_height(this.hDivE2);
         	this.divReg.form.divKoffReg.set_height(this.hDivKoffReg);
         	hReg = hReg + this.hDivKoffReg;
         	hReg = hReg + 20;
         	this.divReg.set_height(hReg);
         	this.divReg.form.divE2.form.resetScroll();
         	this.divReg.form.resetScroll();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divReg.form.divE2.form.staEvlRegTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divReg.form.divEvlReg.form.staEvlFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divEvlReg.form.txaEvlOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDicDlbrOpnnReg.form.staObjcAplyFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn00.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDicDlbrReg.form.staDicDlbrFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divDicDlbrReg.form.txaDicDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDlbrOpnnReg.form.staObjcAplyFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn00.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDlbrReg.form.staDlbrFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divDlbrReg.form.cboDlbrTypeCd.addEventHandler("onitemchanged",this.divReg_divDlbrReg_cboDlbrTypeCd_onitemchanged,this);
            this.divReg.form.divDlbrReg.form.txaDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divReg.form.divDlbrReg.form.staDlbrUniqNo.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divReg.form.divKoffReg.form.staKoffFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
        };
        this.loadIncludeScript("AprvAplyS11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
