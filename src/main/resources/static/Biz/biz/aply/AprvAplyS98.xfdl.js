(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS01");
            this.set_titletext("사업통합신청상세화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"pgmBizMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsPgmNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlBtnCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"btnList\" type=\"STRING\" size=\"256\"/><Column id=\"btnKoffSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnEvlSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnOpnnSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnDicDlbrSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnDlbrSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnDlaySave\" type=\"STRING\" size=\"256\"/><Column id=\"btnDlayReSave\" type=\"STRING\" size=\"256\"/><Column id=\"btnExcrAgre\" type=\"STRING\" size=\"256\"/><Column id=\"btnMod\" type=\"STRING\" size=\"256\"/><Column id=\"btnModDoc\" type=\"STRING\" size=\"256\"/><Column id=\"btnReDoc\" type=\"STRING\" size=\"256\"/><Column id=\"btnTopList\" type=\"STRING\" size=\"256\"/><Column id=\"btnTopReg\" type=\"STRING\" size=\"256\"/><Column id=\"btnTopPrivateReg\" type=\"STRING\" size=\"256\"/><Column id=\"btnTopRpt\" type=\"STRING\" size=\"256\"/><Column id=\"btnDlayReg\" type=\"STRING\" size=\"256\"/><Column id=\"divCalFromTo\" type=\"STRING\" size=\"256\"/><Column id=\"btnPrdDlbr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"masterYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"agreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"lstAgreYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"lstAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreSts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlDivCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"divReg\" type=\"STRING\" size=\"256\"/><Column id=\"divE2\" type=\"STRING\" size=\"256\"/><Column id=\"divEvlReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrOpnnReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrOpnnReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divEvl\" type=\"STRING\" size=\"256\"/><Column id=\"dviE1\" type=\"STRING\" size=\"256\"/><Column id=\"divEvlRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrList\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDicDlbrOpnnRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrList\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDlbrOpnnRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlay\" type=\"STRING\" size=\"256\"/><Column id=\"divKoff\" type=\"STRING\" size=\"256\"/><Column id=\"divKoffReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayRegH1\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrReg\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayRegH2\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRst\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRstDlbr\" type=\"STRING\" size=\"256\"/><Column id=\"divDlayUsrRegDlbr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlReg", this);
            obj._setContents("<ColumnInfo><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evlDgr\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evalrId\" type=\"STRING\" size=\"256\"/><Column id=\"evalrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlDt\" type=\"STRING\" size=\"256\"/><Column id=\"evlOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"evlFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlRst", this);
            obj._setContents("<ColumnInfo><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"evlDgr\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evalrId\" type=\"STRING\" size=\"256\"/><Column id=\"evalrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"evlTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlDt\" type=\"STRING\" size=\"256\"/><Column id=\"evlOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"evlFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrList", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrId\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrId\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrList", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrOpnnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrOpnnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffRst", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffRptFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYmdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffReg", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffRptFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayList", this);
            obj._setContents("<ColumnInfo><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/><Column id=\"maxDlayPrcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffPrnmntYmdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlayReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlayPrcsDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrCn\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlayIdntyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlayDlbrFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrdDlbr", this);
            obj._setContents("<ColumnInfo><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniCnvrBassDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj = new Div("divH1","0","0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staDocList","0","20","370","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"59","0",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("2");
            this.divH1.addChild(obj.name, obj);

            obj = new Static("staDocList","0","20","370","30",null,null,null,null,null,null,this.divH1.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.form.divH1.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this.divH1.form.divH1.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divH1.form.divH1.addChild(obj.name, obj);

            obj = new Div("divH2","0","divH1:0",null,"259","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","0",null,"259","0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"127\"/><Column size=\"109\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제출일자\"/><Cell col=\"2\" text=\"신청유형\"/><Cell col=\"3\" text=\"처리일자\"/><Cell col=\"4\" text=\"관장기관\"/><Cell col=\"5\" text=\"처리유형\"/><Cell col=\"6\" text=\"상세보기\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:aplyYmd\" textAlign=\"center\" tooltiptext=\"bind:aplyYmd\"/><Cell col=\"2\" text=\"bind:aplyTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:aplyTypeCdNm\"/><Cell col=\"3\" text=\"bind:prcsYmd\" textAlign=\"center\" tooltiptext=\"bind:prcsYmd\"/><Cell col=\"4\" text=\"bind:prcsUserNm\" textAlign=\"center\" tooltiptext=\"bind:prcsUserNm\"/><Cell col=\"5\" text=\"bind:prcsTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:prcsTypeCdNm\"/><Cell col=\"6\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\"/></Band></Format></Formats>");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divH3","0","divH2:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopList",null,"20","71","30","8",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopReg",null,"20","115","30","btnTopList:3",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("3");
            obj.set_text("단위사업 등록");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopPrivateReg",null,"20","130","30","btnTopReg:3",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("2");
            obj.set_text("사업 비공개 신청");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopRpt",null,"20","100","30","btnTopPrivateReg:3",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("1");
            obj.set_text("신청서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopCfmRpt",null,"20","130","30","btnTopRpt:3",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("5");
            obj.set_text("사전승인서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Button("btnTopAdmCfmRpt",null,"20","130","30","btnTopCfmRpt:3",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("6");
            obj.set_text("사전승인서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divUsrInfo","0","divH3:0",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","0","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBrno","1096","0","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","7","933","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL3","0","86",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBrno","1253","7",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","1096","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","1253","50",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staDeptNm","619","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","776","50","314","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","306","50","307","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staEml","619","86","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtEml","776","93",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtTel","306","93","307","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsr","0","43","150","87",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staFlnm","149","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staTel","149","86","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Div("divH4","0","divUsrInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("staBizInfo","0","20","342","30",null,null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("신청 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divBizInfo","0","divH4:0",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staBizInfoL4","0","129",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","8",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","0","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizInfoL3","0","86",null,"44","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","51",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizTypeCdNm","157","94",null,"30","10",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","43","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("4");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staBizTypeCdNm","0","86","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("9");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staPrcsTypeCdNm","0","129","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("10");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtPrcsTypeCdNm","157","137",null,"30","793",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_color("#eb2835");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Static("staGbn","783","129","150","44",null,null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Edit("edtGbn","943","137",null,"30","7",null,null,null,null,null,this.divBizInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizInfo.addChild(obj.name, obj);

            obj = new Div("divH5","0","divBizInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("staPrgm","0","20","342","30",null,null,null,null,null,null,this.divH5.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH5.addChild(obj.name, obj);

            obj = new Div("divPrgm","0","divH5:0",null,"794","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine7","0","503",null,"286","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine6","0","460",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine5","0","417",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine4","0","374",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","1","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("2");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","374","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("4");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","417","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("5");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","460","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("7");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","503","150","286",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("8");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("stAbplcNm","0","43","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("12");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"245","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","86","150","245",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("14");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Grid("grdMhdlgList","157","553",null,"228","7",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsPgmMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"600\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"방법론(국문)명\"/><Cell col=\"2\" text=\"방법론\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"1\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"방법론 조회\" padding=\"5px\"/></Band></Format></Formats>");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Grid("grdBizEnfcPlcList","157","95",null,"228","7",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsPgmNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("stcAgreeMgnoNm","157","52","218","30",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("28");
            obj.set_fittocontents("width");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","stcAgreeMgnoNm:3","50","130","30",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("17");
            obj.set_text("협정·약정·MOU 조회");
            obj.set_fittocontents("width");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCd","157","8",null,"30","793",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","382",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("19");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","425",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtCalFromTo","157","468",null,"30","1096",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("21");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","511",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("22");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine14","0","330",null,"45","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","330","150","45",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("24");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","338",null,"30","790",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("25");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","314","508","236","30",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("26");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtOldCertVldYmd","467","468","303","30",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("27");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_color("red");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Div("divH6","0","divPrgm:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staPrgmFile","0","20","342","30",null,null,null,null,null,null,this.divH6.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일    ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divPrgmFile","0","divH6:0",null,"360","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","139",null,"220","0",null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"140","0",null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSinglePgm01","157","10","800","120",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiPgm02","155","152","800","195",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divH7","0","divPrgmFile:0","1566","59",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("staBizUnit","0","20","342","30",null,null,null,null,null,null,this.divH7.form);
            obj.set_taborder("0");
            obj.set_text("단위 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH7.addChild(obj.name, obj);

            obj = new Div("divBizUnit","0","divH7:0",null,"1184","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("사업장명");
            this.addChild(obj.name, obj);

            obj = new Static("staLine10","0","634",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine7","0","506",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine2","-36","43",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","0","0","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine6","0","463",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","43","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("4");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","463","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("6");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","506","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","634","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("9");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine5","-36","420",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","420","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("12");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staGbn","783","420","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("13");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine8","0","548",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizUnqno","0","548","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("15");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine9","-36","591",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldTypeCd","0","591","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("17");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staKoffPrnmntYmd","783","591","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("18");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine11","0","677",null,"117","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","677","150","117",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("20");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine12","783","720",null,"74","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","677","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("21");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","720","150","74",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("23");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine13","0","891",null,"289","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","891","150","289",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("25");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine3","-26","86",null,"44","-10",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBplcNm","0","86","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("27");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine4","0","126",null,"251","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","126","150","251",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("29");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitMhdlg","157","948",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("30");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"600\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"방법론(국문)명\"/><Cell col=\"2\" text=\"방법론\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"1\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/><Cell col=\"2\" text=\"방법론 조회\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"5px\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitPlc","157","136",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("31");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAgreeMgnoNm","157","92","218","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("68");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","stcAgreeMgnoNm:3","91","130","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("32");
            obj.set_text("협정·약정·MOU 조회");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCd","157","51","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("33");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","471","1399","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("34");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","514","1399","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("35");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCd","157","428","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("36");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizScalCd","940","428","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("37");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtKoffPrnmntYmd","940","599","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("38");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCnvrCoefCn","940","685","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("39");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","157","556","1399","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("40");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCertVldYmd","157","642","303","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("41");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine14","0","793",null,"100","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staSopNm","0","793","150","100",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("43");
            obj.set_text("SOP");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staOmgeNm","783","793","150","100",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("44");
            obj.set_text("OMGE");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","899","543","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("45");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcBfr","156","697","134","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("46");
            obj.set_text("환산 전 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAft","156","737","134","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("47");
            obj.set_text("환산 후 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseBfcnvrRdcqtyNo","277","697","150","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("58");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBfcnvrRdcqtyNo","mseBfcnvrRdcqtyNo:3","697",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseAtcnvrRdcqtyNo","277","737","150","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("59");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAtcnvrRdcqtyNo","mseAtcnvrRdcqtyNo:3","737",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseSopUnitCdNm","277","829","150","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("60");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtSopUnitCdNm","mseSopUnitCdNm:3","828",null,"30","937",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseOmge","1067","829","150","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("61");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtOmge","mseOmge:3","829",null,"30","147",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new TextArea("taeCnvrBassCn","940","728","616","60",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("52");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine16","0","376",null,"45","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","376","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("54");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","384","618","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("55");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","947","641","252","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("56");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Button("btnPrdDlbr","1202","641","116","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("57");
            obj.set_text("인증유효기간 변경");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcSopNm","156","827","77","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("62");
            obj.set_text("SOP 량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcOmgeNm","942","827","88","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("63");
            obj.set_text("OMGE 량 :");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","300","899","236","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("64");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoAplyClCd","157","7","699","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("65");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_innerdataset("dsAplyClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_readonly("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoCertVldTypeCd","157","599","383","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("66");
            obj.set_innerdataset("dsCertVldTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtOldCertVldYmd","467","642","303","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("67");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_color("red");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Div("divH8","0","divBizUnit:0",null,"59","26",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("staFile","0","20","342","30",null,null,null,null,null,null,this.divH8.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일            ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH8.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH8:0",null,"500","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","139",null,"220","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"140","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staLine3","0","358",null,"140","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("stacnvrBassDataFlmno","0","358","150","140",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("6");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni01","157","10","800","120",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiUni02","155","152","800","195",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("8");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni03","157","369","800","120",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divH9","0","divFile:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("staExcrList","0","20","342","30",null,null,null,null,null,null,this.divH9.form);
            obj.set_taborder("0");
            obj.set_text("사업 수행자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH9.addChild(obj.name, obj);

            obj = new Div("divH10","0","divH9:0",null,"238","30",null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcrList","0","0",null,"228","0",null,null,null,null,null,this.divH10.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_binddataset("dsExcrList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"대표\"/><Cell col=\"1\" text=\"사업수행자\"/><Cell col=\"2\" text=\"국내/해외&#13;&#10;구분\"/><Cell col=\"3\" text=\"사업자등록번호\"/><Cell col=\"4\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 환산전 감축량&#13;&#10;(사업계획서의 연평균 온실가스배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"환산계수\"/><Cell col=\"6\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 환산후 감축량&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"7\" text=\"사용자&#13;&#10;동의여부\"/></Band><Band id=\"body\"><Cell text=\"expr:masterYn==&apos;Y&apos;?&apos;대표&apos;:&apos;-&apos;\" textAlign=\"center\" tooltiptext=\"expr:masterYn==&apos;Y&apos;?&apos;대표&apos;:&apos;-&apos;\"/><Cell col=\"1\" text=\"bind:bzentNm\" textAlign=\"center\" tooltiptext=\"bind:bzentNm\"/><Cell col=\"2\" text=\"bind:dmstClCdNm\" textAlign=\"center\" tooltiptext=\"bind:dmstClCdNm\"/><Cell col=\"3\" text=\"bind:brno\" textAlign=\"center\" tooltiptext=\"bind:brno\"/><Cell col=\"4\" text=\"bind:bfcnvrRdcqty\" textAlign=\"right\" tooltiptext=\"bind:bfcnvrRdcqty\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:cnvrCoefCn\" textAlign=\"center\" tooltiptext=\"bind:cnvrCoefCn\"/><Cell col=\"6\" text=\"bind:atcnvrRdcqty\" textAlign=\"right\" tooltiptext=\"bind:atcnvrRdcqty\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:agreSts==&apos;0&apos;?(agreYn==true?&apos;동의&apos;:&apos;미동의&apos;):agreYn\" textAlign=\"center\" tooltiptext=\"expr:agreSts==&apos;0&apos;?(agreYn==true?&apos;동의&apos;:&apos;미동의&apos;):agreYn\" displaytype=\"expr:agreSts==&apos;0&apos;?&apos;normal&apos;:&apos;checkboxcontrol&apos;\" edittype=\"expr:agreSts==&apos;0&apos;?&apos;none&apos;:&apos;checkbox&apos;\"/></Band></Format></Formats>");
            this.divH10.addChild(obj.name, obj);

            obj = new Div("divExcr","0","divH10:0",null,"246","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine5","0","202",null,"44","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staLine2","-36","43",null,"44","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staDmstClCd","0","0","150","44",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("2");
            obj.set_text("국내/해외 구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staNm","0","43","150","44",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("3");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staNo","783","43","150","44",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"117","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","86","150","117",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("7");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","86","150","44",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("8");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staLine4","783","129",null,"74","0",null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","129","150","74",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("10");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("staAgreYn","0","202","150","44",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("11");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtDmstClCd","157","8","616","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtNm","157","51","616","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtNo","937","51","616","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtCnvrCoefCn","937","94","616","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("16");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new MaskEdit("mseBfcnvrRdcqty","277","109","150","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("21");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtBfcnvrRdcqty","mseBfcnvrRdcqty:3","109","155","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new MaskEdit("mseAtcnvrRdcqty","277","152","150","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("22");
            obj.set_format("#,##0");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_font("bold 15px/normal \"NotoSansKR\"");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtAtcnvrRdcqty","mseAtcnvrRdcqty:3","152","156","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new Edit("edtAgreYn","157","210","616","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("19");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divExcr.addChild(obj.name, obj);

            obj = new TextArea("taeCnvrBassCn","937","136","616","60",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_border("0");
            obj.set_padding("0px");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("stcBfr","156","107","134","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("23");
            obj.set_text("환산 전 감축량 : ");
            this.divExcr.addChild(obj.name, obj);

            obj = new Static("stcAfr","156","150","134","30",null,null,null,null,null,null,this.divExcr.form);
            obj.set_taborder("24");
            obj.set_text("환산 후 감축량 : ");
            this.divExcr.addChild(obj.name, obj);

            obj = new Div("divH18","0","divExcr:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Static("staRFile","0","20","525","30",null,null,null,null,null,null,this.divH18.form);
            obj.set_taborder("0");
            obj.set_text("SMS 수신동의");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH18.addChild(obj.name, obj);

            obj = new Div("divSms","0","divH18:0",null,"44","30",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divSms.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSms.addChild(obj.name, obj);

            obj = new Static("staSms","0","0","150","44",null,null,null,null,null,null,this.divSms.form);
            obj.set_taborder("1");
            obj.set_text("SMS 수신동의");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSms.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divSms.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divSms.addChild(obj.name, obj);

            obj = new Edit("edtSms","157","8","353","30",null,null,null,null,null,null,this.divSms.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("인증유효기간 만료일 알림 SMS 수신에 대한 동의 : ");
            obj.set_text("인증유효기간 만료일 알림 SMS 수신에 대한 동의 : ");
            this.divSms.addChild(obj.name, obj);

            obj = new Edit("edtTrsmYnNm","507","8","353","30",null,null,null,null,null,null,this.divSms.form);
            obj.set_taborder("4");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_padding("0px");
            obj.set_text("");
            this.divSms.addChild(obj.name, obj);

            obj = new Div("divH19","0","divSms:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Static("staChgCn","0","20","525","30",null,null,null,null,null,null,this.divH19.form);
            obj.set_taborder("0");
            obj.set_text("변경사유 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH19.addChild(obj.name, obj);

            obj = new Div("divChgCn","0","divH19:0",null,"150","30",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"150","0",null,null,null,null,null,this.divChgCn.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divChgCn.addChild(obj.name, obj);

            obj = new Static("staSms","0","0","150","150",null,null,null,null,null,null,this.divChgCn.form);
            obj.set_taborder("1");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divChgCn.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divChgCn.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divChgCn.addChild(obj.name, obj);

            obj = new TextArea("taeChgCn","157","6",null,"140","6",null,null,null,null,null,this.divChgCn.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_border("0");
            obj.set_padding("0px");
            this.divChgCn.addChild(obj.name, obj);

            obj = new Div("divH11","0","divChgCn:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Div("divKoff","0","divH11:0",null,"333","31",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("착수신고 영역");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","19",null,null,null,null,null,this.divKoff.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divKoff.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20","519","30",null,null,null,null,null,null,this.divKoff.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("사업착수보고    ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divKoff.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divKoffRst","20","divKoffH1:0",null,"264","19",null,null,null,null,null,this.divKoff.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divKoff.addChild(obj.name, obj);

            obj = new Static("staKoffH2","0","43",null,"220","0",null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Static("staKoffH1","0","0",null,"44","0",null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Edit("edtKoffDay","157","7","223","30",null,null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Static("staKoffDay","0","0","150","44",null,null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("1");
            obj.set_text("사업착수일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Static("staKoffFile","0","43","150","220",null,null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("4");
            obj.set_text("착수보고파일");
            obj.set_cssclass("sta_WF_Label");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiKoff02","155","56","800","195",null,null,null,null,null,null,this.divKoff.form.divKoffRst.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divKoff.form.divKoffRst.addChild(obj.name, obj);

            obj = new Div("divH12","0","divKoff:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Div("divDlay","0","divH12:0",null,"1282","31",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("착수신고 지연 영역");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divDlayH1","20","0",null,"60","19",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divDlay.addChild(obj.name, obj);

            obj = new Static("staDlbrRstTit","0","20","342","30",null,null,null,null,null,null,this.divDlay.form.divDlayH1.form);
            obj.set_taborder("0");
            obj.set_text("착수지연신청 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlay.form.divDlayH1.addChild(obj.name, obj);

            obj = new Div("divDlayList","20","divDlayH1:0",null,"250","17",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlay.addChild(obj.name, obj);

            obj = new Grid("grdDlayList","0","0",null,"240","0",null,null,null,null,null,this.divDlay.form.divDlayList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_binddataset("dsDlayList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"111\"/><Column size=\"121\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"신청구분\"/><Cell col=\"2\" text=\"신청일시\"/><Cell col=\"3\" text=\"검토결과\"/><Cell col=\"4\" text=\"검토일시\"/><Cell col=\"5\" text=\"심의결과\"/><Cell col=\"6\" text=\"심의일시\"/></Band><Band id=\"body\"><Cell text=\"bind:dlayPrcsDgr\" textAlign=\"center\" tooltiptext=\"bind:dlayPrcsDgr\"/><Cell col=\"1\" text=\"bind:dlayDmndTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlayDmndTypeCdNm\"/><Cell col=\"2\" text=\"bind:dlayDmndDt\" textAlign=\"center\" tooltiptext=\"bind:dlayDmndDt\"/><Cell col=\"3\" text=\"bind:dlayIdntyTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlayIdntyTypeCdNm\"/><Cell col=\"4\" text=\"bind:dlayIdntyDt\" textAlign=\"center\" tooltiptext=\"bind:dlayIdntyDt\"/><Cell col=\"5\" text=\"bind:dlayDlbrTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlayDlbrTypeCdNm\"/><Cell col=\"6\" text=\"bind:dlayDlbrDt\" tooltiptext=\"bind:dlayDlbrDt\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDlay.form.divDlayList.addChild(obj.name, obj);

            obj = new Div("divDlayRegVew","20","divDlayList:0",null,"338","19",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlay.addChild(obj.name, obj);

            obj = new Static("staDlayH3","0","118",null,"220","0",null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("staDlayH1","0","0",null,"44","0",null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("staDlayH2","0","43",null,"76","0",null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("staDlayYmd","0","0","150","44",null,null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("2");
            obj.set_text("사업착수 예정일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","43","150","76",null,null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("4");
            obj.set_text("사업착수\r\n지연사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","118","150","220",null,null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Edit("edtDlayYmd","157","7","143","30",null,null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRsn","157","50",null,"62","7",null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("true");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_color("black");
            obj.set_background("transparent");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiDlay02","155","131","800","195",null,null,null,null,null,null,this.divDlay.form.divDlayRegVew.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlay.form.divDlayRegVew.addChild(obj.name, obj);

            obj = new Div("divDlayH2","20","divDlayRegVew:0",null,"60","19",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divDlay.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnnRstTit","0","20","342","30",null,null,null,null,null,null,this.divDlay.form.divDlayH2.form);
            obj.set_taborder("0");
            obj.set_text("착수지연결과 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlay.form.divDlayH2.addChild(obj.name, obj);

            obj = new Div("divDlayRst","20","divDlayH2:0",null,"301","19",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlay.addChild(obj.name, obj);

            obj = new Static("staDlayH4","0","161",null,"140","0",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayH2","0","43",null,"44","0",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayH1","0","0",null,"44","0",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Edit("edtDlayRstDgr","157","7",null,"30","7",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayRstDgr","0","0","150","44",null,null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("2");
            obj.set_text("검토차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayH3","0","86",null,"76","0",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayRst","0","43","150","44",null,null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("4");
            obj.set_text("검토처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","86","150","76",null,null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("7");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","161","150","140",null,null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("8");
            obj.set_text("검토파일 ");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRstRsn","157","93",null,"62","7",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("true");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Edit("edtDlayRstCd","157","50",null,"30","7",null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlayDic02","157","171","800","120",null,null,null,null,null,null,this.divDlay.form.divDlayRst.form);
            obj.set_taborder("12");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlay.form.divDlayRst.addChild(obj.name, obj);

            obj = new Div("divDlayUsrRstDlbr","20","divDlayRst:5",null,"257","19",null,null,null,null,null,this.divDlay.form);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlay.addChild(obj.name, obj);

            obj = new Static("staH4","0","118",null,"140","0",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("staH2","0","0",null,"44","0",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("staH3","0","43",null,"76","0",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayRst","0","0","150","44",null,null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","43","150","76",null,null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("4");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","118","150","140",null,null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("5");
            obj.set_text("심의파일 ");
            obj.set_cssclass("sta_WF_Label");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRsn","157","51",null,"62","7",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_border("0");
            obj.set_padding("0px");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlayRstCd","157","8",null,"30","7",null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlayDlbr02","157","128","800","120",null,null,null,null,null,null,this.divDlay.form.divDlayUsrRstDlbr.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlay.form.divDlayUsrRstDlbr.addChild(obj.name, obj);

            obj = new Div("divH13","0","divDlay:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbr","0","divH13:0",null,"1004","31",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("심의영역");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrH1","20","0",null,"60","19",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrRstTit","0","20","342","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrH1.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbr.form.divDlbrH1.addChild(obj.name, obj);

            obj = new Div("divDlbrList","20","divDlbrH1:0",null,"250","17",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Grid("grdDlbrList","0","0",null,"240","0",null,null,null,null,null,this.divDlbr.form.divDlbrList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_binddataset("dsDlbrList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"127\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"심의차수\"/><Cell col=\"1\" text=\"심의일자\"/><Cell col=\"2\" text=\"처리결과\"/><Cell col=\"3\" text=\"처리일시\"/><Cell col=\"4\" text=\"관장기관\"/><Cell col=\"5\" text=\"이의신청일자\"/></Band><Band id=\"body\"><Cell text=\"bind:dlbrDgr\" textAlign=\"center\" tooltiptext=\"bind:dlbrDgr\"/><Cell col=\"1\" text=\"bind:dlbrDt\" textAlign=\"center\" tooltiptext=\"bind:dlbrDt\"/><Cell col=\"2\" text=\"bind:dlbrTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlbrTypeCdNm\"/><Cell col=\"3\" text=\"bind:regDt\" textAlign=\"center\" tooltiptext=\"bind:regDt\"/><Cell col=\"4\" text=\"bind:dlbrRsltRegInstCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlbrRsltRegInstCdNm\"/><Cell col=\"5\" text=\"bind:mdfcnDt\" textAlign=\"center\" tooltiptext=\"bind:mdfcnDt\"/></Band></Format></Formats>");
            this.divDlbr.form.divDlbrList.addChild(obj.name, obj);

            obj = new Div("divDlbrRst","20","divDlbrList:0",null,"332","19",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Static("staH4","0","192",null,"140","0",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDlbrDgr","157","7",null,"30","7",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"107","0",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("4");
            obj.set_text("심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnn","0","86","150","107",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("7");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDlbrFlmno","0","192","150","140",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("8");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDlbrTypeCd","157","50","260","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDlbrYmd","783","43","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("11");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDlbrYmd","940","50",null,"30","6",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDlbrFlmno","157","168","143","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrOpnn","157","93",null,"93","7",null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlbr02","157","202","800","120",null,null,null,null,null,null,this.divDlbr.form.divDlbrRst.form);
            obj.set_taborder("15");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlbr.form.divDlbrRst.addChild(obj.name, obj);

            obj = new Div("divDlbrH2","20","divDlbrRst:0",null,"60","19",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnnRstTit","0","20","342","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrH2.form);
            obj.set_taborder("0");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbr.form.divDlbrH2.addChild(obj.name, obj);

            obj = new Div("divDlbrOpnnRst","20","divDlbrH2:0",null,"289","19",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Static("staH3","0","245",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staH2","0","106",null,"140","0",null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFlmno","0","106","150","140",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("2");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"107","0",null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyYmd","0","245","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("4");
            obj.set_text("이의신청일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","107",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("6");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyFlmno","157","82","143","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyYmd","157","251","332","30",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn","157","7",null,"93","7",null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDlbrOpnn02","157","116","800","120",null,null,null,null,null,null,this.divDlbr.form.divDlbrOpnnRst.form);
            obj.set_taborder("10");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDlbr.form.divDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Div("divH14","0","divDlbr:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Div("divDicDlbr","0","divH14:0",null,"1004","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divDicDlbrH1","20","0",null,"60","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrRstTit","0","20","342","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrH1.form);
            obj.set_taborder("0");
            obj.set_text("사전심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicDlbr.form.divDicDlbrH1.addChild(obj.name, obj);

            obj = new Div("divDicDlbrList","20","divDicDlbrH1:0",null,"250","18",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Grid("grdDicDlbrList","0","0",null,"240","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_binddataset("dsDicDlbrList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"109\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"사전심의차수\"/><Cell col=\"1\" text=\"사전심의일자\"/><Cell col=\"2\" text=\"처리결과\"/><Cell col=\"3\" text=\"처리일시\"/><Cell col=\"4\" text=\"관장기관\"/><Cell col=\"5\" text=\"이의신청일자\"/></Band><Band id=\"body\"><Cell text=\"bind:dicDlbrDgr\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrDgr\"/><Cell col=\"1\" text=\"bind:dicDlbrDt\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrDt\"/><Cell col=\"2\" text=\"bind:dicDlbrTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrTypeCdNm\"/><Cell col=\"3\" text=\"bind:regDt\" textAlign=\"center\" tooltiptext=\"bind:regDt\"/><Cell col=\"4\" text=\"bind:dicDlbrInstCdNm\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrInstCdNm\"/><Cell col=\"5\" text=\"bind:mdfcnDt\" textAlign=\"center\" displaytype=\"normal\" controlautosizingtype=\"none\" edittype=\"none\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:mdfcnDt\" padding=\"5px\"/></Band></Format></Formats>");
            this.divDicDlbr.form.divDicDlbrList.addChild(obj.name, obj);

            obj = new Div("divDicDlbrRst","20","divDicDlbrList:0",null,"332","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staH4","0","192",null,"140","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"44","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrDgr","157","7",null,"30","7",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"107","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDicDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDicDlbrOpnn","0","86","150","107",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("7");
            obj.set_text("사전심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDicDlbrFlmno","0","192","150","140",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("8");
            obj.set_text("사전심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrTypeCd","157","50","260","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Static("staDicDlbrYmd","783","43","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("11");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrYmd","940","50",null,"30","6",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrFlmno","157","168","143","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new TextArea("txaDicDlbrOpnn","157","93",null,"93","7",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDic02","157","202","800","120",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrRst.form);
            obj.set_taborder("15");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrRst.addChild(obj.name, obj);

            obj = new Div("divDicDlbrH2","20","divDicDlbrRst:0",null,"60","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrOpnnRstTit","0","20","342","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrH2.form);
            obj.set_taborder("0");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicDlbr.form.divDicDlbrH2.addChild(obj.name, obj);

            obj = new Div("divDicDlbrOpnnRst","20","divDicDlbrH2:0",null,"289","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staH3","0","245",null,"44","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staH2","0","106",null,"140","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFlmno","0","106","150","140",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("2");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"107","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyYmd","0","245","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("4");
            obj.set_text("이의신청일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","107",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("6");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyFlmno","157","82","143","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyYmd","157","251","272","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAplyOpnn","157","7",null,"93","7",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_readonly("true");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleDicOpnn02","157","116","800","120",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbrOpnnRst.form);
            obj.set_taborder("10");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbrOpnnRst.addChild(obj.name, obj);

            obj = new Div("divH15","0","divDicDlbr:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Div("divEvl","0","divH15:0",null,"367","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divE1","0","0",null,"60","0",null,null,null,null,null,this.divEvl.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divEvl.addChild(obj.name, obj);

            obj = new Static("staEvlRstTit","20","20","342","30",null,null,null,null,null,null,this.divEvl.form.divE1.form);
            obj.set_taborder("0");
            obj.set_text("평가결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divEvl.form.divE1.addChild(obj.name, obj);

            obj = new Div("divEvlRst","20","divE1:0",null,"290","20",null,null,null,null,null,this.divEvl.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divEvl.addChild(obj.name, obj);

            obj = new Static("staEvlH4","0","149",null,"140","0",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlH2","0","0",null,"44","0",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlH3","0","43",null,"107","0",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlTypeCd","0","1","150","44",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("2");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlOpnn","0","43","150","107",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("4");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlFlmno","0","149","150","140",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("5");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlDt","783","1","150","44",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("7");
            obj.set_text("평가일자");
            obj.set_cssclass("sta_WF_Label");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Edit("edtEvlDt","940","8",null,"30","6",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Edit("edtEvlTypeCd","157","8","372","30",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new TextArea("taeEvlOpnn","157","51",null,"93","10",null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleEvl02","157","159","800","120",null,null,null,null,null,null,this.divEvl.form.divEvlRst.form);
            obj.set_taborder("11");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divEvl.form.divEvlRst.addChild(obj.name, obj);

            obj = new Div("divH16","0","divEvl:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","0","divH16:0",null,"1678","30",null,null,null,null,null,this);
            obj.set_taborder("28");
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

            obj = new Div("divH17","0","divReg:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Div("divDlayReg","0","divH17:0",null,"1027","30",null,null,null,null,null,this);
            obj.set_taborder("30");
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

            obj = new Div("divComBtn","0","divDlayReg:20",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnKoffSave",null,"0","88","32","btnList:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("착수보고");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnEvlSave",null,"0","114","32","btnKoffSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("평가결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnOpnnSave",null,"0","88","32","btnEvlSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("3");
            obj.set_text("이의신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDicDlbrSave",null,"0","140","32","btnOpnnSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("4");
            obj.set_text("사전심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrSave",null,"0","75","32","btnDicDlbrSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("5");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlaySave",null,"0","114","32","btnDlbrSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("6");
            obj.set_text("착수지연보고");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlayReSave",null,"0","140","32","btnDlaySave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("7");
            obj.set_text("착수지연 문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnExcrAgre",null,"0","101","32","btnDlayReSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("8");
            obj.set_text("참여자확인");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnMod",null,"0","75","32","btnExcrAgre:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("9");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnModDoc",null,"0","88","32","btnMod:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("10");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnReDoc",null,"0","101","32","btnModDoc:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("11");
            obj.set_text("문서재제출");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrReq",null,"0","88","32","btnReDoc:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("12");
            obj.set_text("심의요청");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlayReg",null,"0","114","32","btnDlbrReq:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("13");
            obj.set_text("착수지연등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnKoffReg",null,"0","114","32","btnDlayReg:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("14");
            obj.set_text("착수보고등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlayRstSave",null,"0","160","32","btnDlayReg:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("15");
            obj.set_text("착수지연결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH1.form.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form.divH1.form,function(p){});
            this.divH1.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUsrInfo.form
            obj = new Layout("default","",0,0,this.divUsrInfo.form,function(p){});
            this.divUsrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizInfo.form
            obj = new Layout("default","",0,0,this.divBizInfo.form,function(p){});
            this.divBizInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5.form
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgm.form
            obj = new Layout("default","",0,0,this.divPrgm.form,function(p){});
            this.divPrgm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form.divRaonKSinglePgm01
            obj = new Layout("default","",0,0,this.divPrgmFile.form.divRaonKSinglePgm01.form,function(p){});
            this.divPrgmFile.form.divRaonKSinglePgm01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form.divRaonKMultiPgm02
            obj = new Layout("default","",0,0,this.divPrgmFile.form.divRaonKMultiPgm02.form,function(p){});
            this.divPrgmFile.form.divRaonKMultiPgm02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form
            obj = new Layout("default","",0,0,this.divPrgmFile.form,function(p){});
            this.divPrgmFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH7.form
            obj = new Layout("default","",0,0,this.divH7.form,function(p){});
            this.divH7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizUnit.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divBizUnit.form.divCalFromTo.form,function(p){});
            this.divBizUnit.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizUnit.form
            obj = new Layout("default","",0,0,this.divBizUnit.form,function(p){});
            this.divBizUnit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH8.form
            obj = new Layout("default","",0,0,this.divH8.form,function(p){});
            this.divH8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingleUni01
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingleUni01.form,function(p){});
            this.divFile.form.divRaonKSingleUni01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKMultiUni02
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKMultiUni02.form,function(p){});
            this.divFile.form.divRaonKMultiUni02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingleUni03
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingleUni03.form,function(p){});
            this.divFile.form.divRaonKSingleUni03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH9.form
            obj = new Layout("default","",0,0,this.divH9.form,function(p){});
            this.divH9.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH10.form
            obj = new Layout("default","",0,0,this.divH10.form,function(p){});
            this.divH10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divExcr.form
            obj = new Layout("default","",0,0,this.divExcr.form,function(p){});
            this.divExcr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH18.form
            obj = new Layout("default","",0,0,this.divH18.form,function(p){});
            this.divH18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSms.form
            obj = new Layout("default","",0,0,this.divSms.form,function(p){});
            this.divSms.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH19.form
            obj = new Layout("default","",0,0,this.divH19.form,function(p){});
            this.divH19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChgCn.form
            obj = new Layout("default","",0,0,this.divChgCn.form,function(p){});
            this.divChgCn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH11
            obj = new Layout("default","",0,0,this.divH11.form,function(p){});
            this.divH11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divKoff.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divKoff.form.divKoffH1.form,function(p){});
            this.divKoff.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divKoff.form.divKoffRst.form.divRaonKMultiKoff02
            obj = new Layout("default","",0,0,this.divKoff.form.divKoffRst.form.divRaonKMultiKoff02.form,function(p){});
            this.divKoff.form.divKoffRst.form.divRaonKMultiKoff02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divKoff.form.divKoffRst.form
            obj = new Layout("default","",0,0,this.divKoff.form.divKoffRst.form,function(p){});
            this.divKoff.form.divKoffRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divKoff.form
            obj = new Layout("default","",0,0,this.divKoff.form,function(p){});
            this.divKoff.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH12
            obj = new Layout("default","",0,0,this.divH12.form,function(p){});
            this.divH12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayH1.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayH1.form,function(p){});
            this.divDlay.form.divDlayH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayList.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayList.form,function(p){});
            this.divDlay.form.divDlayList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form,function(p){});
            this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayRegVew.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayRegVew.form,function(p){});
            this.divDlay.form.divDlayRegVew.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayH2.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayH2.form,function(p){});
            this.divDlay.form.divDlayH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02.form,function(p){});
            this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayRst.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayRst.form,function(p){});
            this.divDlay.form.divDlayRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02.form,function(p){});
            this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form.divDlayUsrRstDlbr.form
            obj = new Layout("default","",0,0,this.divDlay.form.divDlayUsrRstDlbr.form,function(p){});
            this.divDlay.form.divDlayUsrRstDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlay.form
            obj = new Layout("default","",0,0,this.divDlay.form,function(p){});
            this.divDlay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH13
            obj = new Layout("default","",0,0,this.divH13.form,function(p){});
            this.divH13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrH1.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrH1.form,function(p){});
            this.divDlbr.form.divDlbrH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrList.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrList.form,function(p){});
            this.divDlbr.form.divDlbrList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form,function(p){});
            this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrRst.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrRst.form,function(p){});
            this.divDlbr.form.divDlbrRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrH2.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrH2.form,function(p){});
            this.divDlbr.form.divDlbrH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form,function(p){});
            this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrOpnnRst.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrOpnnRst.form,function(p){});
            this.divDlbr.form.divDlbrOpnnRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form
            obj = new Layout("default","",0,0,this.divDlbr.form,function(p){});
            this.divDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH14
            obj = new Layout("default","",0,0,this.divH14.form,function(p){});
            this.divH14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrH1.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrH1.form,function(p){});
            this.divDicDlbr.form.divDicDlbrH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrList.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrList.form,function(p){});
            this.divDicDlbr.form.divDicDlbrList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form,function(p){});
            this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrRst.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrRst.form,function(p){});
            this.divDicDlbr.form.divDicDlbrRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrH2.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrH2.form,function(p){});
            this.divDicDlbr.form.divDicDlbrH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02.form,function(p){});
            this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrOpnnRst.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrOpnnRst.form,function(p){});
            this.divDicDlbr.form.divDicDlbrOpnnRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form,function(p){});
            this.divDicDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH15
            obj = new Layout("default","",0,0,this.divH15.form,function(p){});
            this.divH15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEvl.form.divE1.form
            obj = new Layout("default","",0,0,this.divEvl.form.divE1.form,function(p){});
            this.divEvl.form.divE1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02
            obj = new Layout("default","",0,0,this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02.form,function(p){});
            this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEvl.form.divEvlRst.form
            obj = new Layout("default","",0,0,this.divEvl.form.divEvlRst.form,function(p){});
            this.divEvl.form.divEvlRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEvl.form
            obj = new Layout("default","",0,0,this.divEvl.form,function(p){});
            this.divEvl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH16
            obj = new Layout("default","",0,0,this.divH16.form,function(p){});
            this.divH16.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divH17
            obj = new Layout("default","",0,0,this.divH17.form,function(p){});
            this.divH17.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divUsrInfo.form.edtBzentNm","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divUsrInfo.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divUsrInfo.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUsrInfo.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUsrInfo.form.edtJbpsNm","value","dsUsrInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divUsrInfo.form.edtTel","value","dsUsrInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divUsrInfo.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBizInfo.form.edtBizOrgtNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBizInfo.form.edtBizKrnNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBizInfo.form.edtBizTypeCdNm","value","dsBizInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBizInfo.form.edtPrcsTypeCdNm","value","dsBizInfo","prcsTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBizUnit.form.edtAplyClCd","value","dsUniInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBizUnit.form.staAgreeMgnoNm","text","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBizUnit.form.edtAgreeClausCd","value","dsUniInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBizUnit.form.edtBizFormCd","value","dsUniInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divBizUnit.form.edtBizScalCd","value","dsUniInfo","bizScalCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divBizUnit.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divBizUnit.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divBizUnit.form.edtBizUnqno","value","dsUniInfo","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divBizUnit.form.edtCertVldTypeCd","value","dsUniInfo","certVldTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divBizUnit.form.edtKoffPrnmntYmd","value","dsUniInfo","koffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divBizUnit.form.edtCertVldYmd","value","dsUniInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divBizUnit.form.staBfcnvrRdcqtyNo","text","dsUniInfo","bfcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divBizUnit.form.staAtcnvrRdcqtyNo","text","dsUniInfo","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divBizUnit.form.edtCnvrCoefCn","value","dsUniInfo","cnvrCoefCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divBizUnit.form.edtCnvrBassCn","value","dsUniInfo","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divBizUnit.form.edtMhdlg","value","dsUniInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divPrgm.form.staAgreeMgnoNm","text","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divPrgm.form.edtAgreeClausCd","value","dsPgmInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divPrgm.form.edtBizOrgtNm","value","dsPgmInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divPrgm.form.edtBizKrnNm","value","dsPgmInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divPrgm.form.edtCalFromTo","value","dsPgmInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divBizUnit.form.staSopUnit","text","dsUniInfo","sopUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divBizUnit.form.staOmgeUnit","text","dsUniInfo","omgeUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divBizUnit.form.staSop","text","dsUniInfo","sopUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divBizUnit.form.staOmge","text","dsUniInfo","omgeUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divPrgm.form.edtBizFldCdSnm","value","dsPgmInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divBizUnit.form.edtBizFldCdSnm","value","dsUniInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divExcr.form.edtDmstClCd","value","dsExcrList","dmstClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divExcr.form.edtNm","value","dsExcrList","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divExcr.form.edtNo","value","dsExcrList","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divExcr.form.edtCnvrCoefCn","value","dsExcrList","cnvrCoefCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divExcr.form.edtCnvrBassCn","value","dsExcrList","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divExcr.form.edtBfcnvrRdcqty","value","dsExcrList","bfcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divExcr.form.edtAtcnvrRdcqty","value","dsExcrList","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divExcr.form.edtAgreYn","value","dsExcrList","lstAgreYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divPrgm.form.edtAgreeMgnoNm","value","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divBizUnit.form.edtAgreeMgnoNm","value","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divBizUnit.form.edtAgreeMgnoNm","tooltiptext","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divPrgm.form.edtAgreeMgnoNm","tooltiptext","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divEvl.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divEvl.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divEvl.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divEvl.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divEvl.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divDicDlbr.form.divDicDlbrReg.form.edtDicDlbrDgr","value","dsDicDlbrReg","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divDicDlbr.form.divDicDlbrReg.form.cboDicDlbrTypeCd","value","dsDicDlbrReg","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divDicDlbr.form.divDicDlbrReg.form.txaDicDlbrOpnn","value","dsDicDlbrReg","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divDicDlbr.form.divDicDlbrRst.form.edtDicDlbrDgr","value","dsDicDlbrList","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divDicDlbr.form.divDicDlbrRst.form.edtDicDlbrTypeCd","value","dsDicDlbrList","dicDlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divDicDlbr.form.divDicDlbrRst.form.edtDicDlbrYmd","value","dsDicDlbrList","dicDlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divDicDlbr.form.divDicDlbrRst.form.txaDicDlbrOpnn","value","dsDicDlbrList","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divDlbr.form.divDlbrRst.form.edtDlbrDgr","value","dsDlbrList","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divDlbr.form.divDlbrRst.form.edtDlbrTypeCd","value","dsDlbrList","dlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divDlbr.form.divDlbrRst.form.edtDlbrYmd","value","dsDlbrList","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divDlbr.form.divDlbrRst.form.txaDlbrOpnn","value","dsDlbrList","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divDlbr.form.divDlbrReg.form.edtDlbrDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divDlbr.form.divDlbrReg.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divDlbr.form.divDlbrReg.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divReg.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divReg.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divReg.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divReg.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divReg.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divReg.form.divDicDlbrReg.form.edtDicDlbrDgr","value","dsDicDlbrReg","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd","value","dsDicDlbrReg","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divReg.form.divDicDlbrReg.form.txaDicDlbrOpnn","value","dsDicDlbrReg","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divReg.form.divDlbrReg.form.edtDlbrDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divReg.form.divDlbrReg.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divReg.form.divDlbrReg.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divDlayReg.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divDlayReg.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divDlayReg.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divDlayReg.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divDlayReg.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDicDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divDicDlbr.form.divDicDlbrOpnnRst.form.txaObjcAplyOpnn","value","dsDicDlbrList","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divDicDlbr.form.divDicDlbrOpnnRst.form.edtObjcAplyYmd","value","dsDicDlbrList","mdfcnDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divDlbr.form.divDlbrOpnnRst.form.txaObjcAplyOpnn","value","dsDlbrList","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divDlbr.form.divDlbrOpnnRst.form.edtObjcAplyYmd","value","dsDlbrList","mdfcnDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divSms.form.chkTrsmYn","value","dsUniInfo","trsmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divSms.form.edtTrsmYnNm","value","dsUniInfo","trsmYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divBizUnit.form.taeCnvrBassCn","value","dsUniInfo","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divExcr.form.taeCnvrBassCn","value","dsExcrList","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divKoff.form.divKoffRst.form.edtKoffDay","value","dsKoffRst","bizKoffYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divDlayReg.form.divDlayUsrReg.form.txaDlayRsn","value","dsDlayReg","dlayDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divDlay.form.divDlayRegVew.form.edtDlayYmd","value","dsDlayList","bizKoffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divDlay.form.divDlayRegVew.form.txaDlayRsn","value","dsDlayList","dlayDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divDlayReg.form.divDlayUsrRst.form.edtDlayDgr","value","dsDlayReg","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divDlayReg.form.divDlayUsrRst.form.cboDlayRst","value","dsDlayReg","dlayIdntyTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divDlayReg.form.divDlayUsrRst.form.txaDlayRsn","value","dsDlayReg","dlayIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divDlay.form.divDlayRst.form.txaDlayRstRsn","value","dsDlayList","dlayIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divDlay.form.divDlayRst.form.edtDlayRstCd","value","dsDlayList","dlayIdntyTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divDlay.form.divDlayRst.form.edtDlayRstDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divDlayReg.form.divDlayUsrRegDlbr.form.edtDlayDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divDlayReg.form.divDlayUsrRegDlbr.form.cboDlayRst","value","dsDlayReg","dlayDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divDlayReg.form.divDlayUsrRegDlbr.form.txaDlayRsn","value","dsDlayReg","dlayDlbrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divDlay.form.divDlayUsrRstDlbr.form.edtDlayDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divDlay.form.divDlayUsrRstDlbr.form.cboDlayRst","value","dsDlayList","dlayIdntyTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divDlay.form.divDlayUsrRstDlbr.form.txaDlayRsn","value","dsDlayList","dlayDlbrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divDlay.form.divDlayUsrRstDlbr.form.edtDlayRstCd","value","dsDlayList","dlayDlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divReg.form.divDlbrReg.form.edtBizUnqno","value","dsDlbrReg","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divReg.form.divDlbrReg.form.edtBizUnqno00","value","dsDlbrReg","rgtrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divBizUnit.form.mseBfcnvrRdcqtyNo","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divBizUnit.form.mseAtcnvrRdcqtyNo","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divBizUnit.form.mseSopUnitCdNm","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divBizUnit.form.mseOmge","value","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divBizUnit.form.edtBfcnvrRdcqtyNo","value","dsUniInfo","bfcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divBizUnit.form.edtAtcnvrRdcqtyNo","value","dsUniInfo","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divBizUnit.form.edtSopUnitCdNm","value","dsUniInfo","sopUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divBizUnit.form.edtOmge","value","dsUniInfo","omgeUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divExcr.form.mseAtcnvrRdcqty","value","dsExcrList","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divExcr.form.mseBfcnvrRdcqty","value","dsExcrList","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divBizUnit.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divPrgm.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divBizInfo.form.edtGbn","value","dsUniInfo","dgrRegRsnCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divBizUnit.form.rdoAplyClCd","value","dsUniInfo","aplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divBizUnit.form.rdoCertVldTypeCd","value","dsUniInfo","certVldTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divChgCn.form.chkTrsmYn","value","dsUniInfo","trsmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divChgCn.form.taeChgCn","value","dsUniInfo","chgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divBizUnit.form.edtOldCertVldYmd","value","dsUniInfo","oldCertVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divPrgm.form.edtOldCertVldYmd","value","dsPgmInfo","oldCertVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divBizUnit.form.stcAgreeMgnoNm","text","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divBizUnit.form.stcAgreeMgnoNm","tooltiptext","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divPrgm.form.stcAgreeMgnoNm","text","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divPrgm.form.stcAgreeMgnoNm","tooltiptext","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyS98.xfdl", function() {
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
        this.wBtnList = 75;
        this.wBtnKoffReg = 114;
        this.wBtnKoffSave = 88;
        this.wBtnEvlSave = 114;
        this.wBtnOpnnSave = 88;
        this.wBtnDicDlbrSave = 140;
        this.wBtnDlbrSave = 75;
        this.wBtnDlayReg = 114;
        this.wBtnDlaySave = 114;
        this.wBtnDlayReSave = 140;
        this.wBtnExcrAgre = 101;
        this.wBtnMod = 75;
        this.wBtnModDoc = 88;
        this.wBtnReDoc = 101;
        this.wBtnDlbrReq = 88;
        this.wBtnDlayRstSave = 140;

        this.wBtnTopList = 71;
        this.wBtnTopReg = 115;
        this.wBtnTopPrivateReg = 130;
        this.wBtnTopRpt = 100;
        this.wBtnTopCfmRpt = 130;
        this.wBtnTopAdmCfmRpt = 130;

        // 여백
        this.hDivH11 = 20;
        this.hDivH12 = 20;
        this.hDivH13 = 20;
        this.hDivH14 = 20;
        this.hDivH15 = 20;
        this.hDivH16 = 20;
        this.hDivH17 = 20;
        this.hDivH19 = 59;

        // 변경사유
        this.hDivChgCn = 150;

        // 등록
        this.hDivE2 = 60;
        this.hDivEvlReg = 262;
        this.hDivDicDlbrReg = 301;
        this.hDivDicDlbrOpnnReg = 215;
        this.hDivDlbrReg = 345;
        this.hDivDlbrOpnnReg = 215;
        this.hDivKoffReg = 263;

        // 평가결과
        this.hDivE1 = 60;
        this.hDivEvlRst = 290;

        // 사전심의
        this.hDivDicDlbrH1 = 60;
        this.hDivDicDlbrList = 250;
        this.hDivDicDlbrRst = 332;
        this.hDivDicDlbrH2 = 60;
        this.hDivDicDlbrOpnnRst = 289;

        // 심의
        this.hDivDlbrH1 = 60;
        this.hDivDlbrList = 250;
        this.hDivDlbrRst = 332;
        this.hDivDlbrH2 = 60;
        this.hDivDlbrOpnnRst = 289;

        // 착수지연
        this.hDivDlayH1 = 60;
        this.hDivDlayList = 250;
        this.hDivDlayRegVew = 338;
        this.hDivDlayH2 = 60;
        this.hDivDlayRst = 301;
        this.hDivDlayUsrRstDlbr = 257;

        // 착수지연 등록
        this.hDivDlayRegH1 = 60;
        this.hDivDlayUsrReg = 338;
        this.hDivDlayRegH2 = 60;
        this.hDivDlayUsrRst = 301;
        this.hDivDlayUsrRegDlbr = 257;

        // 착수보고
        this.hDivKoff = 333;

        // 프로그램사업
        this.hDivH5 = 59;
        this.hDivPrgm = 794;
        this.hDivH6 = 59;
        this.hDivPrgmFile = 360;

        // 인증유효기간 갱신
        this.hDivCalFromTo = 30;
        this.hBtnPrdDlbr = 30;

        // 문서제출이력
        this.hDivH2 = 259;

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
        	trace("====================  M00에 로딩 완료여부 전달. ========================");
        	this.getOwnerFrame().form.divWork.form.fnDtlLoadComplete();
        	trace("====================  M00에 로딩 완료여부 전달. ========================");

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
        	//trace("[AprvAplyS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 프로그램사업 - 사업계획서 파일
        	var objFileParam1 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFilePgm01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divPrgmFile.form.divRaonKSinglePgm01.form.fnInitRaonK(this, objFileParam1);

        	// 프로그램사업 - 기타증빙문서 파일
        	var objFileParam2 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFilePgm02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divPrgmFile.form.divRaonKMultiPgm02.form.fnInitRaonK(this, objFileParam2);

        	// 단위사업 - 사업계획서 파일
        	var objFileParam3 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divFile.form.divRaonKSingleUni01.form.fnInitRaonK(this, objFileParam3);

        	// 단위사업 - 기타증빙문서 파일
        	var objFileParam4 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileUni02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divFile.form.divRaonKMultiUni02.form.fnInitRaonK(this, objFileParam4);

        	// 단위사업 - 환산근거자료 파일
        	var objFileParam5 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"cnvrBassDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni03"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divFile.form.divRaonKSingleUni03.form.fnInitRaonK(this, objFileParam5);

        	// 평가파일(등록용)
        	var objFileParam6 = { objDs:this.dsEvlReg								// 바인딩 데이터셋
        					,sBindCol:"evlFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileEvl01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divEvlReg.form.divRaonKSingleEvl01.form.fnInitRaonK(this, objFileParam6);

        	// 평가파일(조회용)
        	var objFileParam7 = { objDs:this.dsEvlRst								// 바인딩 데이터셋
        					,sBindCol:"evlFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileEvl02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02.form.fnInitRaonK(this, objFileParam7);

        	// 사전심의파일(등록용)
        	var objFileParam8 = { objDs:this.dsDicDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"dicDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDic01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divDicDlbrReg.form.divRaonKSingleDic01.form.fnInitRaonK(this, objFileParam8);

        	// 사전심의결과파일(조회용)
        	var objFileParam9 = { objDs:this.dsDicDlbrList						// 바인딩 데이터셋
        					,sBindCol:"dicDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDic02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.fnInitRaonK(this, objFileParam9);

        	// 이의신청파일(등록용)
        	var objFileParam10 = { objDs:this.dsDicDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDicOpnn01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divDicDlbrOpnnReg.form.divRaonKSingleDicOpnn01.form.fnInitRaonK(this, objFileParam10);

        	// 이의신청결과파일(조회용)
        	var objFileParam11 = { objDs:this.dsDicDlbrList						// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDicOpnn02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02.form.fnInitRaonK(this, objFileParam11);

        	// 심의파일(등록용)
        	var objFileParam12 = { objDs:this.dsDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbr01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divDlbrReg.form.divRaonKSingleDlbr01.form.fnInitRaonK(this, objFileParam12);

        	// 심의결과파일(조회용)
        	var objFileParam13 = { objDs:this.dsDlbrList						// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbr02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnInitRaonK(this, objFileParam13);

        	// 심의- 이의신청파일(등록용)
        	var objFileParam14 = { objDs:this.dsDlbrReg								// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrOpnn01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divDlbrOpnnReg.form.divRaonKSingleDlbrOpnn01.form.fnInitRaonK(this, objFileParam14);

        	// 심의-이의신청결과파일(조회용)
        	var objFileParam15 = { objDs:this.dsDlbrList						// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrOpnn02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form.fnInitRaonK(this, objFileParam15);

        	// 착수보고파일(등록용)
        	var objFileParam16 = { objDs:this.dsKoffReg								// 바인딩 데이터셋
        					,sBindCol:"koffRptFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileKoff01"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divReg.form.divKoffReg.form.divRaonKMultiKoff01.form.fnInitRaonK(this, objFileParam16);

        	// 착수보고파일(조회용)
        	var objFileParam17 = { objDs:this.dsKoffRst								// 바인딩 데이터셋
        					,sBindCol:"koffRptFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileKoff02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divKoff.form.divKoffRst.form.divRaonKMultiKoff02.form.fnInitRaonK(this, objFileParam17);

        	// 착수지연등록 파일(등록용)
        	var objFileParam18 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileDlay01"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnInitRaonK(this, objFileParam18);

        	// 착수지연등록결과 (조회용)
        	var objFileParam19 = { objDs:this.dsDlayList								// 바인딩 데이터셋
        					,sBindCol:"dlayDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileDlay02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.fnInitRaonK(this, objFileParam19);

        	// 착수지연 검토파일(등록용)
        	var objFileParam20 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayIdntyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDic01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlayReg.form.divDlayUsrRst.form.divRaonKSingleDlayDic01.form.fnInitRaonK(this, objFileParam20);

        	// 착수지연 검토파일(조회용)
        	var objFileParam21 = { objDs:this.dsDlayList								// 바인딩 데이터셋
        					,sBindCol:"dlayIdntyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDic02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02.form.fnInitRaonK(this, objFileParam21);

        	// 착수지연 심의파일(등록용)
        	var objFileParam22 = { objDs:this.dsDlayReg								// 바인딩 데이터셋
        					,sBindCol:"dlayDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDlbr01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.divRaonKSingleDlayDlbr01.form.fnInitRaonK(this, objFileParam22);

        	// 착수지연 심의파일(조회용)
        	var objFileParam23 = { objDs:this.dsDlayList								// 바인딩 데이터셋
        					,sBindCol:"dlayDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlayDlbr02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02.form.fnInitRaonK(this, objFileParam23);

        	//-----------------------------------------------------------------------------------------------------------

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

        	// 일달력 초기화 호출 - 착수지연
        	var objParam4 = { objDs:this.dsDlayReg							// 바인딩 데이터셋
        					,sBindCol:"bizKoffPrnmntYmd"					// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"bizKoffPrnmntYmd"					// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divDlayReg.form.divDlayUsrReg.form.divCalDay3.form.fnInitCommonCalendar(this, objParam4);

        	// From-To 달력 초기화 호출 - 단위사업 심의 후 인증유효기간 갱신
        	var objParam5 = { objDs:this.dsPrdDlbr								// 바인딩 데이터셋
        					,sBindFromCol:"certVldBgngYmd"						// 바인딩 컬럼(From)
        					,sBindToCol:"certVldEndYmd"							// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"certVldYmd"							// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divBizUnit.form.divCalFromTo.form.fnInitCommonCalendar(this, objParam5);

        	// M00에 로딩 완료여부 전달.
        // 	trace("====================  M00에 로딩 완료여부 전달. ========================");
        // 	this.getOwnerFrame().form.divWork.form.fnDtlLoadComplete();
        // 	trace("====================  M00에 로딩 완료여부 전달. ========================");

        	trace("====================  등록 페이지 로딩여부 : " + this.getOwnerFrame().form.divWork.form.fnRtnRegDiv());

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        this.fnClose = function()
        {
        	//var bRtn = false;
        	//bRtn = this.gfnIsDsUpdated("dsResult01,dsResult02");
        	//trace("[fnClose]gfnIsDsUpdated>>bRtn:"+bRtn);

        	//if(bRtn) {

        	//}
        };

        /**
         * @desc 상세화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	//trace("[AprvAplyS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsCurInfo.setColumn(0, "bizMngNo", objArgs.bizMngNo);
        	this.dsCurInfo.setColumn(0, "bizDgr", objArgs.bizDgr);
        	this.dsCurInfo.setColumn(0, "bizTypeCd", objArgs.bizTypeCd);
        	this.dsCurInfo.setColumn(0, "dgrRegRsnCd", objArgs.dgrRegRsnCd);
        	this.dsCurInfo.setColumn(0, "sts", objArgs.sts);
        	this.dsCurInfo.setColumn(0, "pgmBizMngNo", objArgs.pgmBizMngNo);

        	// 사전심의결과코드 셋팅
        	this.getOwnerFrame().form.divWork.form.dsDicPrcsTypeCdS.filter("cdMgno == '' || cdMgno =='PTC0011' || cdMgno == 'PTC0012'");
        	// 착수지연 심의결과코드 셋팅
        	this.getOwnerFrame().form.divWork.form.dsDlayDlbrTypeCdS.filter("cdMgno == '' || cdMgno =='DTC0001' || cdMgno == 'DTC0002'");

        	// 버튼 설정 - init
         	this.divComBtn.form.btnList.set_width(0);
         	this.divComBtn.form.btnKoffSave.set_width(0);
         	this.divComBtn.form.btnEvlSave.set_width(0);
         	this.divComBtn.form.btnOpnnSave.set_width(0);
         	this.divComBtn.form.btnDicDlbrSave.set_width(0);
         	this.divComBtn.form.btnDlbrSave.set_width(0);
         	this.divComBtn.form.btnDlaySave.set_width(0);
         	this.divComBtn.form.btnDlayReSave.set_width(0);
         	this.divComBtn.form.btnExcrAgre.set_width(0);
         	this.divComBtn.form.btnMod.set_width(0);
         	this.divComBtn.form.btnModDoc.set_width(0);
         	this.divComBtn.form.btnReDoc.set_width(0);

         	this.divH3.form.btnTopList.set_width(0);
         	this.divH3.form.btnTopReg.set_width(0);
         	this.divH3.form.btnTopPrivateReg.set_width(0);
         	this.divH3.form.btnTopRpt.set_width(0);
        	this.divH3.form.btnTopCfmRpt.set_width(0);
        	this.divH3.form.btnTopAdmCfmRpt.set_width(0);

        	// 심의결과등록 - 사업고유번호 길이 초기화
        	this.divReg.form.divDlbrReg.form.staH5.set_height(0);
        	this.divReg.form.divDlbrReg.form.staDlbrUniqNo.set_height(0);
        	this.divReg.form.divDlbrReg.form.edtBizUnqno.set_visible(false);

        	// 변경전 인증유효기간
        	this.divPrgm.form.edtOldCertVldYmd.set_visible(false);
        	this.divBizUnit.form.edtOldCertVldYmd.set_visible(false);

        	// 인증유효기간갱신 데이터셋 초기화
        	this.dsPrdDlbr.clearData();
        	this.dsPrdDlbr.addRow();
        	this.divBizUnit.form.divCalFromTo.set_height(0);
        	this.divBizUnit.form.btnPrdDlbr.set_height(0);

        	// 파일 데이터셋 초기화수행
        	this.dsPgmBizPlndFile.clearData();
        	this.dsPgmEtcDataFile.clearData();
        	this.dsUniBizPlndFile.clearData();
        	this.dsUniEtcDataFile.clearData();
        	this.dsUniCnvrBassDataFile.clearData();

        	this.dsEvlFile.clearData();
        	this.dsDicDlbrFile.clearData();
        	this.dsDicDlbrOpnnFile.clearData();
        	this.dsDlbrFile.clearData();
        	this.dsDlbrOpnnFile.clearData();

        	this.dsKoffFile.clearData();

        	this.dsDlayFile.clearData();
        	this.dsDlayDicFile.clearData();
        	this.dsDlayDlbrFile.clearData();

        	// 상세 호출
        	this.fnCallDtlInfo();
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function(callBackId)
        {
        	trace("################### 단위-사업계획서 Start ###################");
        	var bizPlndFlmno = this.dsUniInfo.getColumn(0, "bizPlndFlmno");
        	trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        	if(this.gfnIsNull(bizPlndFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("singleFileUni01", objRtn);
        	}else {
        		this.divFile.form.divRaonKSingleUni01.form.fnSearchFile(bizPlndFlmno);
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFileUni01" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 단위-기타증빙문서 Start ###################");
        				var etcDataFlmno = this.dsUniInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileUni02", objRtn);
        				}else {
        					this.divFile.form.divRaonKMultiUni02.form.fnSearchFile(etcDataFlmno);
        				}
        			}

        			break;
        		case "multiFileUni02" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 단위-환산근거자료 Start ###################");
        				var cnvrBassDataFlmno = this.dsUniInfo.getColumn(0, "cnvrBassDataFlmno");
        				trace(">>> cnvrBassDataFlmno : " + cnvrBassDataFlmno);
        				if(this.gfnIsNull(cnvrBassDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileUni03", objRtn);
        				}else {
        					this.divFile.form.divRaonKSingleUni03.form.fnSearchFile(cnvrBassDataFlmno);
        				}
        			}

        			break;
        		case "singleFileUni03" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 프로그램-사업계획서 Start ###################");
        				var bizPlndFlmno = this.dsPgmInfo.getColumn(0, "bizPlndFlmno");
        				trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        				if(this.gfnIsNull(bizPlndFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFilePgm01", objRtn);
        				}else {
        					this.divPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile(bizPlndFlmno);
        				}
        			}

        			break;
        		case "singleFilePgm01" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 프로그램-기타증빙문서 Start ###################");
        				var etcDataFlmno = this.dsPgmInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFilePgm02", objRtn);
        				}else {
        					this.divPrgmFile.form.divRaonKMultiPgm02.form.fnSearchFile(etcDataFlmno);
        				}
        			}

        			break;
        		case "multiFilePgm02" :

        			if(objRtn.sDiv == "SEARCH") {

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
        			}

        			break;
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

        				var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divEvlHeight 	= this.divEvl.height;

        				if(divEvlHeight > 0) {
        					trace("################### 평가결과 Start ###################");
        					var evlFlmno = this.dsEvlRst.getColumn(0, "evlFlmno");
        					trace(">>> evlFlmno : " + evlFlmno);
        					if(this.gfnIsNull(evlFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileEvl02", objRtn);
        					}else {
        						this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02.form.fnSearchFile(evlFlmno);
        					}
        				}
        				else {
        					trace("################### 평가결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileEvl02", objRtn);
        				}
        			}

        			break;
        		case "singleFileEvl02" :

        			if(objRtn.sDiv == "SEARCH") {
        				// 사전심의 등록 판단 필요.
        				var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divRegHeight	= this.divReg.height;
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

        				// 사전심의결과 판단 필요.
        				var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDicDlbrHeight 	= this.divDicDlbr.height;

        				if(divDicDlbrHeight > 0) {
        					trace("################### 사전심의결과 Start ###################");
        					var dicDlbrFlmno = this.dsDicDlbrList.getColumn(this.dsDicDlbrList.rowposition, "dicDlbrFlmno");
        					trace(">>> dicDlbrFlmno : " + dicDlbrFlmno);
        					if(this.gfnIsNull(dicDlbrFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDic02", objRtn);
        						this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.fnResetUpload();
        					}else {
        						this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.fnSearchFile(dicDlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 사전심의결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDic02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDic02" :

        			if(objRtn.sDiv == "SEARCH") {

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

        				// 이의신청 등록 판단.
        				var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDicDlbrHeight 	= this.divDicDlbr.height;
        				var divDicDlbrOpnnRstHeight	= this.divDicDlbr.form.divDicDlbrOpnnRst.height;

        				if(divDicDlbrHeight > 0 && divDicDlbrOpnnRstHeight > 0) {
        					trace("################### 이의신청결과 Start ###################");
        					var objcAplyFlmno = this.dsDicDlbrList.getColumn(this.dsDicDlbrList.rowposition, "objcAplyFlmno");
        					trace(">>> objcAplyFlmno : " + objcAplyFlmno);
        					if(this.gfnIsNull(objcAplyFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDicOpnn02", objRtn);
        						this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02.form.fnResetUpload();
        					}else {
        						this.divDicDlbr.form.divDicDlbrOpnnRst.form.divRaonKSingleDicOpnn02.form.fnSearchFile(objcAplyFlmno);
        					}
        				}
        				else {
        					trace("################### 이의신청결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDicOpnn02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDicOpnn02" :

        			if(objRtn.sDiv == "SEARCH") {
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

        				// 사전심의결과 판단 필요.
        				var prcsTypeCd 		= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlbrHeight 	= this.divDlbr.height;

        				if(divDlbrHeight > 0) {
        					trace("################### 심의결과 Start ###################");
        					var dlbrFlmno = this.dsDlbrList.getColumn(this.dsDlbrList.rowposition, "dlbrFlmno");
        					trace(">>> dlbrFlmno : " + dlbrFlmno);
        					if(this.gfnIsNull(dlbrFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDlbr02", objRtn);
        						this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnResetUpload();
        					}else {
        						this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnSearchFile(dlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 심의결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlbr02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlbr02" :

        			if(objRtn.sDiv == "SEARCH") {
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

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlbrHeight			= this.divDlbr.height;
        				var divDlbrOpnnRstHeight	= this.divDlbr.form.divDlbrOpnnRst.height;

        				if(divDlbrHeight > 0 && divDlbrOpnnRstHeight > 0) {
        					trace("################### 심의 - 이의신청결과 Start ###################");
        					var objcAplyFlmno = this.dsDlbrList.getColumn(this.dsDlbrList.rowposition, "objcAplyFlmno");
        					trace(">>> objcAplyFlmno : " + objcAplyFlmno);
        					if(this.gfnIsNull(objcAplyFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDicOpnn02", objRtn);
        						this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form.fnResetUpload();
        					}else {
        						this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form.fnSearchFile(objcAplyFlmno);
        					}
        				}
        				else {
        					trace("################### 심의 - 이의신청결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlbrOpnn02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlbrOpnn02" :

        			if(objRtn.sDiv == "SEARCH") {

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

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divKoffHeight 			= this.divKoff.height;
        				var divKoffRstHeight 		= this.divKoff.form.divKoffRst.height;

        				if(divKoffHeight > 0 && divKoffRstHeight > 0) {
        					trace("################### 착수보고결과 Start ###################");
        					var koffRptFlmno = this.dsKoffRst.getColumn(0, "koffRptFlmno");
        					trace(">>> koffRptFlmno : " + koffRptFlmno);
        					if(this.gfnIsNull(koffRptFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("multiFileKoff02", objRtn);
        					}else {
        						this.divKoff.form.divKoffRst.form.divRaonKMultiKoff02.form.fnSearchFile(koffRptFlmno);
        					}
        				}
        				else {
        					trace("################### 착수보고결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileKoff02", objRtn);
        				}
        			}

        			break;
        		case "multiFileKoff02" :
        			if(objRtn.sDiv == "SEARCH") {

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
        			}

        			break;
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

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlayHeight			= this.divDlay.height;
        				var divDlayRegVewHeight		= this.divDlay.form.divDlayRegVew.height;

        				if(divDlayHeight > 0 && divDlayRegVewHeight > 0) {
        					trace("################### 착수지연결과 Start ###################");
        					var dlayDmndFlmno = this.dsDlayList.getColumn(this.dsDlayList.rowposition, "dlayDmndFlmno");
        					trace(">>> dlayDmndFlmno : " + dlayDmndFlmno);
        					if(this.gfnIsNull(dlayDmndFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("multiFileDlay02", objRtn);
        						this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.fnResetUpload();
        					}else {
        						this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.fnSearchFile(dlayDmndFlmno);
        					}
        				}
        				else {
        					trace("################### 착수지연결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileDlay02", objRtn);
        				}
        			}

        			break;
        		case "multiFileDlay02" :

        			if(objRtn.sDiv == "SEARCH") {

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

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlayHeight			= this.divDlay.height;
        				var divDlayRstHeight		= this.divDlay.form.divDlayRst.height;

        				if(divDlayHeight > 0 && divDlayRstHeight > 0) {
        					trace("################### 착수지연 검토결과 Start ###################");
        					var dlayIdntyFlmno = this.dsDlayList.getColumn(this.dsDlayList.rowposition, "dlayIdntyFlmno");
        					trace(">>> dlayIdntyFlmno : " + dlayIdntyFlmno);
        					if(this.gfnIsNull(dlayIdntyFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDlayDic02", objRtn);
        						this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02.form.fnResetUpload();
        					}else {
        						this.divDlay.form.divDlayRst.form.divRaonKSingleDlayDic02.form.fnSearchFile(dlayIdntyFlmno);
        					}
        				}
        				else {
        					trace("################### 착수지연 검토결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlayDic02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlayDic02" :

        			if(objRtn.sDiv == "SEARCH") {

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

        				var prcsTypeCd 				= this.dsBizInfo.getColumn(0, "prcsTypeCd");
        				var divDlayHeight			= this.divDlay.height;
        				var divDlayUsrRstDlbrHeight	= this.divDlay.form.divDlayUsrRstDlbr.height;

        				if(divDlayHeight > 0 && divDlayUsrRstDlbrHeight > 0) {
        					trace("################### 착수지연 심의결과 Start ###################");
        					var dlayDlbrFlmno = this.dsDlayList.getColumn(this.dsDlayList.rowposition, "dlayDlbrFlmno");
        					trace(">>> dlayDlbrFlmno : " + dlayDlbrFlmno);
        					if(this.gfnIsNull(dlayDlbrFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileDlayDlbr02", objRtn);
        						this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02.form.fnResetUpload();
        					}else {
        						this.divDlay.form.divDlayUsrRstDlbr.form.divRaonKSingleDlayDlbr02.form.fnSearchFile(dlayDlbrFlmno);
        					}
        				}
        				else {
        					trace("################### 착수지연 심의결과 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileDlayDlbr02", objRtn);
        				}
        			}

        			break;
        		case "singleFileDlayDlbr02" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 상세화면 모든 파일 조회 완료!!! ###################");
        			}

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
        		// 신청서 출력
        		case "bizAprvAplyReportPop" :

        			break;
        		// 사전승인서 출력
        		case "bizAprvAplyCfmReportPop" :

        			break;
        		// 사전승인서 출력
        		case "admAprvAplyCfmReportPop" :

        			break;
        		default:
        			break;
        	}
        };

        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	//trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "dicDlbrDt" :
        			// 후처리 코드

        			break;
        		case "dlbrDt" :
        			// 후처리 코드

        			break;
        		case "bizKoffYmd" :
        			// 후처리 코드

        			break;
        		case "bizKoffPrnmntYmd" :
        			// 후처리 코드

        			break;
        		case "certVldYmd" :
        			// 후처리 코드

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

        			this.fnChangeDiv(objArgs);

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

        				this.fnChangeDiv(objArgs);

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "dtlInfo" :
        			// 후처리 코드
        			var arrRows = this.dsDocList.extractRows("btnCtl=='현재문서'");
        			this.dsDocList.set_rowposition(nexacro.toNumber(arrRows[0]));

        			// 협정약정명
        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");
        			this.divBizUnit.form.stcAgreeMgnoNm.set_text(this.dsUniInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			// 기승인신청건은 심의반려 콤보에서 제거
        			if(this.dsUniInfo.getColumn(0, "aplyClCd") == "APC0003") {
        				this.getOwnerFrame().form.divWork.form.dsDlbrTypeCdS.filter("cdMgno == '' || cdMgno =='DTC0001' || cdMgno == 'DTC0003' || cdMgno == 'DTC0004'");
        			}
        			else {
        				this.getOwnerFrame().form.divWork.form.dsDlbrTypeCdS.filter("cdMgno == '' || cdMgno =='DTC0001' || cdMgno == 'DTC0002' || cdMgno == 'DTC0003' || cdMgno == 'DTC0004'");
        			}

        			// sop mask
        			if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0001") {
        				this.divBizUnit.form.mseSopUnitCdNm.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0002") {
        				this.divBizUnit.form.mseSopUnitCdNm.set_format("##0.0");
        			}
        			else {
        				this.divBizUnit.form.mseSopUnitCdNm.set_format("#,##0");
        			}

        			// omge mask
        			if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0001") {
        				this.divBizUnit.form.mseOmge.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0002") {
        				this.divBizUnit.form.mseOmge.set_format("##0.0");
        			}
        			else {
        				this.divBizUnit.form.mseOmge.set_format("#,##0");
        			}

        			// REDD PLUS
        			if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divPrgm.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divPrgm.form.chkReddPlusYn.set_visible(false);
        			}

        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divBizUnit.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divBizUnit.form.chkReddPlusYn.set_visible(false);
        			}

        			// 변경전 인증유효기간
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					if(this.dsCurInfo.getColumn(0, "dgrRegRsnCd") == "BGC0003" || this.dsCurInfo.getColumn(0, "dgrRegRsnCd") == "BGC0004") {
        						this.divPrgm.form.edtOldCertVldYmd.set_visible(true);
        					}else {
        						this.divPrgm.form.edtOldCertVldYmd.set_visible(false);
        					}
        				}
        			}

        			if(this.dsCurInfo.getColumn(0, "dgrRegRsnCd") == "BGC0003" || this.dsCurInfo.getColumn(0, "dgrRegRsnCd") == "BGC0004") {
        				this.divBizUnit.form.edtOldCertVldYmd.set_visible(true);
        			}else {
        				this.divBizUnit.form.edtOldCertVldYmd.set_visible(false);
        			}

        			// 변경사유
        			trace("******************************   1");
        			if(this.dsCurInfo.getColumn(0, "dgrRegRsnCd") == "BGC0001") {
        				this.divH19.set_height(0);
        				this.divChgCn.set_height(0);
        			}else {
        				this.divH19.set_height(this.hDivH19);
        				this.divChgCn.set_height(this.hDivChgCn);
        			}
        			trace("******************************   2");
        			this.divH19.form.resetScroll();
        			this.divChgCn.form.resetScroll();
        			this.divH11.form.resetScroll();
        			this.divKoff.form.resetScroll();
        			this.divH12.form.resetScroll();
        			this.divDlay.form.resetScroll();
        			this.divH13.form.resetScroll();
        			this.divDlbr.form.resetScroll();
        			this.divH14.form.resetScroll();
        			this.divDicDlbr.form.resetScroll();
        			this.divH15.form.resetScroll();
        			this.divEvl.form.resetScroll();
        			this.divH16.form.resetScroll();
        			this.divReg.form.resetScroll();
        			this.divH17.form.resetScroll();
        			this.divDlayReg.form.resetScroll();
        			this.divComBtn.form.resetScroll();
        			this.resetScroll();
        			trace("******************************   3");
        			// 버튼 컨트롤
        			this.fnCallDtlBtnCtrl();

        			break;
        		case "dtlBtnInfo" :
        			this.fnDtlBtnCtrl();

        			break;
        		case "divInfo" :
        			// 후처리 코드
        			this.fnDtlDivCtrl();

        			break;
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
        		case "agree" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlbrReq" :
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
        		case "dlayUsrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlayDicDlbrSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "prdDlbrSave" :
        			// 후처리 코드
        			// 인증유효기간갱신 데이터셋 초기화
        			this.dsPrdDlbr.clearData();
        			this.dsPrdDlbr.addRow();

        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallDivCtrl = function()
        {
        	//trace("평가 div 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyDtlDivCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyDtlDivCtrl.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "divInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsDtlDivCtrl=dsDtlDivCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDtlInfo = function()
        {
        	//trace("상세 호출...");

        	var callUrl = "";
        	var datasets = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyDetail.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyDetail.irs";
        	}

        	datasets = datasets + "dsDocList=dsDocList ";
        	datasets = datasets + "dsUsrInfo=dsUsrInfo ";
        	datasets = datasets + "dsBizInfo=dsBizInfo ";
        	datasets = datasets + "dsPgmInfo=dsPgmInfo ";
        	datasets = datasets + "dsPgmNtnList=dsPgmNtnList ";
        	datasets = datasets + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	datasets = datasets + "dsUniNtnList=dsUniNtnList ";
        	datasets = datasets + "dsUniMhdlgList=dsUniMhdlgList ";
        	datasets = datasets + "dsUniInfo=dsUniInfo ";
        	datasets = datasets + "dsExcrList=dsExcrList ";
        	datasets = datasets + "dsEvlReg=dsEvlReg ";
        	datasets = datasets + "dsEvlRst=dsEvlRst ";
        	datasets = datasets + "dsDicDlbrList=dsDicDlbrList ";
        	datasets = datasets + "dsDicDlbrReg=dsDicDlbrReg ";
        	datasets = datasets + "dsDlbrList=dsDlbrList ";
        	datasets = datasets + "dsDlbrReg=dsDlbrReg ";
        	datasets = datasets + "dsKoffReg=dsKoffReg ";
        	datasets = datasets + "dsKoffRst=dsKoffRst ";
        	datasets = datasets + "dsDlayList=dsDlayList ";
        	datasets = datasets + "dsDlayReg=dsDlayReg";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= datasets;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallDtlInfoDoc = function()
        {
        	//trace("문서제출이력 호출...");

        	var callUrl = "";
        	var datasets = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyDetail.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyDetail.irs";
        	}

        	datasets = datasets + "dsDocList=dsDocList ";
        	datasets = datasets + "dsUsrInfo=dsUsrInfo ";
        	datasets = datasets + "dsBizInfo=dsBizInfo ";
        	datasets = datasets + "dsPgmInfo=dsPgmInfo ";
        	datasets = datasets + "dsPgmNtnList=dsPgmNtnList ";
        	datasets = datasets + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	datasets = datasets + "dsUniNtnList=dsUniNtnList ";
        	datasets = datasets + "dsUniMhdlgList=dsUniMhdlgList ";
        	datasets = datasets + "dsUniInfo=dsUniInfo ";
        	datasets = datasets + "dsExcrList=dsExcrList ";
        	datasets = datasets + "dsEvlReg=dsEvlReg ";
        	datasets = datasets + "dsEvlRst=dsEvlRst ";
        	datasets = datasets + "dsDicDlbrList=dsDicDlbrList ";
        	datasets = datasets + "dsDicDlbrReg=dsDicDlbrReg ";
        	datasets = datasets + "dsDlbrList=dsDlbrList ";
        	datasets = datasets + "dsDlbrReg=dsDlbrReg ";
        	datasets = datasets + "dsKoffReg=dsKoffReg ";
        	datasets = datasets + "dsKoffRst=dsKoffRst ";
        	datasets = datasets + "dsDlayList=dsDlayList ";
        	datasets = datasets + "dsDlayReg=dsDlayReg";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= datasets;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

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

        	// 평가
        	var isDivEvl = this.dsDtlDivCtrl.getColumn(0, "divEvl");
        	var isDviE1 = this.dsDtlDivCtrl.getColumn(0, "dviE1");
        	var isDivEvlRst = this.dsDtlDivCtrl.getColumn(0, "divEvlRst");

        	// 사전심의
        	var isDivDicDlbr = this.dsDtlDivCtrl.getColumn(0, "divDicDlbr");
        	var isDivDicDlbrH1 = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrH1");
        	var isDivDicDlbrList = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrList");
        	var isDivDicDlbrRst = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrRst");
        	var isDivDicDlbrH2 = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrH2");
        	var isDivDicDlbrOpnnRst  = this.dsDtlDivCtrl.getColumn(0, "divDicDlbrOpnnRst");

        	// 심의
        	var isDivDlbr = this.dsDtlDivCtrl.getColumn(0, "divDlbr");
        	var isDivDlbrH1 = this.dsDtlDivCtrl.getColumn(0, "divDlbrH1");
        	var isDivDlbrList = this.dsDtlDivCtrl.getColumn(0, "divDlbrList");
        	var isDivDlbrRst = this.dsDtlDivCtrl.getColumn(0, "divDlbrRst");
        	var isDivDlbrH2 = this.dsDtlDivCtrl.getColumn(0, "divDlbrH2");
        	var isDivDlbrOpnnRst  = this.dsDtlDivCtrl.getColumn(0, "divDlbrOpnnRst");

        	// 착수보고결과
        	var isDivKoff = this.dsDtlDivCtrl.getColumn(0, "divKoff");

        	// 착수지연결과
        	var isDivDlay = this.dsDtlDivCtrl.getColumn(0, "divDlay");
        	var isDivDlayH1 = this.dsDtlDivCtrl.getColumn(0, "divDlayH1");
        	var isDivDlayList = this.dsDtlDivCtrl.getColumn(0, "divDlayList");
        	var isDivDlayRegVew = this.dsDtlDivCtrl.getColumn(0, "divDlayRegVew");
        	var isDivDlayH2 = this.dsDtlDivCtrl.getColumn(0, "divDlayH2");
        	var isDivDlayRst = this.dsDtlDivCtrl.getColumn(0, "divDlayRst");
        	var isDivDlayUsrRstDlbr = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrRstDlbr");

        	// 착수지연등록
        	var isDivDlayReg = this.dsDtlDivCtrl.getColumn(0, "divDlayReg");
        	var isDivDlayRegH1 = this.dsDtlDivCtrl.getColumn(0, "divDlayRegH1");
        	var isDivDlayUsrReg = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrReg");
        	var isDivDlayRegH2 = this.dsDtlDivCtrl.getColumn(0, "divDlayRegH2");
        	var isDivDlayUsrRst = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrRst");
        	var isDivDlayUsrRegDlbr = this.dsDtlDivCtrl.getColumn(0, "divDlayUsrRegDlbr");

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
        		this.divH16.set_height(this.hDivH16);
        	}
        	else {
        		this.divReg.form.divE2.set_height(0);
        		this.divReg.set_height(0);
        		this.divH16.set_height(0);
        	}
        	this.divReg.form.divE2.form.resetScroll();
        	this.divReg.form.divEvlReg.form.resetScroll();
        	this.divReg.form.divDicDlbrReg.form.resetScroll();
        	this.divReg.form.divDicDlbrOpnnReg.form.resetScroll();
        	this.divReg.form.divDlbrReg.form.resetScroll();
        	this.divReg.form.divDlbrOpnnReg.form.resetScroll();
        	this.divReg.form.divKoffReg.form.resetScroll();
        	this.divReg.form.resetScroll();

        	// 평가
        	var hEvl = 0;
        	if(isDivEvl) {
        		if(isDviE1) { this.divEvl.form.divE1.set_height(this.hDivE1); hEvl = hEvl + this.hDivE1; } else { this.divEvl.form.divEvlRst.set_height(0); }
        		if(isDivEvlRst) { this.divEvl.form.divEvlRst.set_height(this.hDivEvlRst); hEvl = hEvl + this.hDivEvlRst; } else { this.divEvl.form.divEvlRst.set_height(0); }
        		hEvl = hEvl + this.hDivH15;
        		this.divEvl.set_height(hEvl);
        		this.divH15.set_height(this.hDivH15);
        	}
        	else {
        		this.divEvl.form.divE1.set_height(0);
        		this.divEvl.form.divEvlRst.set_height(0);
        		this.divEvl.set_height(0);
        		this.divH15.set_height(0);
        	}
        	this.divEvl.form.divE1.form.resetScroll();
        	this.divEvl.form.divEvlRst.form.resetScroll();
        	this.divEvl.form.resetScroll();

        	// 사전심의
        	var hDicDlbr = 0;
        	if(isDivDicDlbr) {
        		if(isDivDicDlbrH1) {	this.divDicDlbr.form.divDicDlbrH1.set_height(this.hDivDicDlbrH1); hDicDlbr = hDicDlbr +this.hDivDicDlbrH1;  } else { this.divDicDlbr.form.divDicDlbrH1.set_height(0); 		}
        		if(isDivDicDlbrList) {	this.divDicDlbr.form.divDicDlbrList.set_height(this.hDivDicDlbrList); hDicDlbr = hDicDlbr +this.hDivDicDlbrList; } else { this.divDicDlbr.form.divDicDlbrList.set_height(0); 		}
        		if(isDivDicDlbrRst) {	this.divDicDlbr.form.divDicDlbrRst.set_height(this.hDivDicDlbrRst);	hDicDlbr = hDicDlbr +this.hDivDicDlbrRst; } else { this.divDicDlbr.form.divDicDlbrRst.set_height(0); 		}
        		if(isDivDicDlbrH2) {	this.divDicDlbr.form.divDicDlbrH2.set_height(this.hDivDicDlbrH2); hDicDlbr = hDicDlbr +this.hDivDicDlbrH2;  } else { this.divDicDlbr.form.divDicDlbrH2.set_height(0); 		}
        		if(isDivDicDlbrOpnnRst) {	this.divDicDlbr.form.divDicDlbrOpnnRst.set_height(this.hDivDicDlbrOpnnRst); hDicDlbr = hDicDlbr +this.hDivDicDlbrOpnnRst; } else { this.divDicDlbr.form.divDicDlbrOpnnRst.set_height(0); 	}

        		hDicDlbr = hDicDlbr + this.hDivH14;
        		this.divDicDlbr.set_height(hDicDlbr);
        		this.divH14.set_height(this.hDivH14);
        	}
        	else {
        		this.divDicDlbr.form.divDicDlbrH1.set_height(0);
        		this.divDicDlbr.form.divDicDlbrList.set_height(0);
        		this.divDicDlbr.form.divDicDlbrRst.set_height(0);
        		this.divDicDlbr.form.divDicDlbrH2.set_height(0);
        		this.divDicDlbr.form.divDicDlbrOpnnRst.set_height(0);
        		this.divDicDlbr.set_height(0);
        		this.divH14.set_height(0);
        	}
        	this.divDicDlbr.form.divDicDlbrH1.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrList.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrRst.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrH2.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrOpnnRst.form.resetScroll();
        	this.divDicDlbr.form.resetScroll();

        	// 심의
        	var hDlbr = 0;
        	if(isDivDlbr) {
        		if(isDivDlbrH1) {	this.divDlbr.form.divDlbrH1.set_height(this.hDivDlbrH1);		hDlbr = hDlbr +this.hDivDlbrH1;  } else { this.divDlbr.form.divDlbrH1.set_height(0); 		}
        		if(isDivDlbrList) {	this.divDlbr.form.divDlbrList.set_height(this.hDivDlbrList);	hDlbr = hDlbr +this.hDivDlbrList; } else { this.divDlbr.form.divDlbrList.set_height(0); 		}
        		if(isDivDlbrRst) {	this.divDlbr.form.divDlbrRst.set_height(this.hDivDlbrRst);		hDlbr = hDlbr +this.hDivDlbrRst; } else { this.divDlbr.form.divDlbrRst.set_height(0); 		}
        		if(isDivDlbrH2) {	this.divDlbr.form.divDlbrH2.set_height(this.hDivDlbrH2);		hDlbr = hDlbr +this.hDivDlbrH2;  } else { this.divDlbr.form.divDlbrH2.set_height(0); 		}
        		if(isDivDlbrOpnnRst) {	this.divDlbr.form.divDlbrOpnnRst.set_height(this.hDivDlbrOpnnRst); hDlbr = hDlbr +this.hDivDlbrOpnnRst; } else { this.divDlbr.form.divDlbrOpnnRst.set_height(0); 	}

        		hDlbr = hDlbr + this.hDivH13;
        		this.divDlbr.set_height(hDlbr);
        		this.divH13.set_height(this.hDivH13);
        	}
        	else {
        		this.divDlbr.form.divDlbrH1.set_height(0);
        		this.divDlbr.form.divDlbrList.set_height(0);
        		this.divDlbr.form.divDlbrRst.set_height(0);
        		this.divDlbr.form.divDlbrH2.set_height(0);
        		this.divDlbr.form.divDlbrOpnnRst.set_height(0);
        		this.divDlbr.set_height(0);
        		this.divH13.set_height(0);
        	}
        	this.divDlbr.form.divDlbrH1.form.resetScroll();
        	this.divDlbr.form.divDlbrList.form.resetScroll();
        	this.divDlbr.form.divDlbrRst.form.resetScroll();
        	this.divDlbr.form.divDlbrH2.form.resetScroll();
        	this.divDlbr.form.divDlbrOpnnRst.form.resetScroll();
        	this.divDlbr.form.resetScroll();

         	// 착수지연결과
        	var hDlay = 0;
        	if(isDivDlay) {
        		if(isDivDlayH1) {		this.divDlay.form.divDlayH1.set_height(this.hDivDlayH1);			hDlay = hDlay +this.hDivDlayH1;  } else { this.divDlay.form.divDlayH1.set_height(0); 		}
        		if(isDivDlayList) {		this.divDlay.form.divDlayList.set_height(this.hDivDlayList);		hDlay = hDlay +this.hDivDlayList; } else { this.divDlay.form.divDlayList.set_height(0); 		}
        		if(isDivDlayRegVew) {	this.divDlay.form.divDlayRegVew.set_height(this.hDivDlayRegVew);	hDlay = hDlay +this.hDivDlayRegVew; } else { this.divDlay.form.divDlayRegVew.set_height(0); 		}
        		if(isDivDlayH2) {		this.divDlay.form.divDlayH2.set_height(this.hDivDlayH2);			hDlay = hDlay +this.hDivDlayH2;  } else { this.divDlay.form.divDlayH2.set_height(0); 		}
        		if(isDivDlayRst) {		this.divDlay.form.divDlayRst.set_height(this.hDivDlayRst); 		hDlay = hDlay +this.hDivDlayRst; } else { this.divDlay.form.divDlayRst.set_height(0); 	}
        		if(isDivDlayUsrRstDlbr) {this.divDlay.form.divDlayUsrRstDlbr.set_height(this.hDivDlayUsrRstDlbr); 		hDlay = hDlay +this.hDivDlayUsrRstDlbr; } else { this.divDlay.form.divDlayUsrRstDlbr.set_height(0); 	}

        		hDlay = hDlay + this.hDivH12;
        		this.divDlay.set_height(hDlay);
        		this.divH12.set_height(this.hDivH12);
        	}
        	else {
        		this.divDlay.form.divDlayH1.set_height(0);
        		this.divDlay.form.divDlayList.set_height(0);
        		this.divDlay.form.divDlayRegVew.set_height(0);
        		this.divDlay.form.divDlayH2.set_height(0);
        		this.divDlay.form.divDlayRst.set_height(0);
        		this.divDlay.form.divDlayUsrRstDlbr.set_height(0);
        		this.divDlay.set_height(0);
        		this.divH12.set_height(0);
        	}
        	this.divDlay.form.divDlayH1.form.resetScroll();
        	this.divDlay.form.divDlayList.form.resetScroll();
        	this.divDlay.form.divDlayRegVew.form.resetScroll();
        	this.divDlay.form.divDlayH2.form.resetScroll();
        	this.divDlay.form.divDlayRst.form.resetScroll();
        	this.divDlay.form.divDlayUsrRstDlbr.form.resetScroll();
        	this.divH12.form.resetScroll();
        	this.divDlay.form.resetScroll();

        	// 착수지연등록
         	var hDlayReg = 0;
         	if(isDivDlayReg) {
         		if(isDivDlayRegH1) { this.divDlayReg.form.divDlayRegH1.set_height(this.hDivDlayRegH1); hDlayReg = hDlayReg + this.hDivDlayRegH1; } else { this.divDlayReg.form.divDlayRegH1.set_height(0); 		}
         		if(isDivDlayUsrReg) {this.divDlayReg.form.divDlayUsrReg.set_height(this.hDivDlayUsrReg); hDlayReg = hDlayReg + this.hDivDlayUsrReg; } else { this.divDlayReg.form.divDlayUsrReg.set_height(0); 	}
         		if(isDivDlayRegH2) { this.divDlayReg.form.divDlayRegH2.set_height(this.hDivDlayRegH2); hDlayReg = hDlayReg + this.hDivDlayRegH2; } else { this.divDlayReg.form.divDlayRegH2.set_height(0); 		}
         		if(isDivDlayUsrRst) {this.divDlayReg.form.divDlayUsrRst.set_height(this.hDivDlayUsrRst); hDlayReg = hDlayReg + this.hDivDlayUsrRst; } else { this.divDlayReg.form.divDlayUsrRst.set_height(0); 	}
        		if(isDivDlayUsrRegDlbr) {this.divDlayReg.form.divDlayUsrRegDlbr.set_height(this.hDivDlayUsrRegDlbr); hDlayReg = hDlayReg + this.hDivDlayUsrRegDlbr; } else { this.divDlayReg.form.divDlayUsrRegDlbr.set_height(0); 	}

         		hDlayReg = hDlayReg + this.hDivH17;
         		this.divDlayReg.set_height(hDlayReg);
         		this.divH17.set_height(this.hDivH17);
         	}
         	else {
         		this.divDlayReg.set_height(0);
         		this.divH17.set_height(0);
         	}
        	this.divDlayReg.form.divDlayRegH1.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrReg.form.resetScroll();
        	this.divDlayReg.form.divDlayRegH2.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRst.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.resetScroll();
        	this.divH17.form.resetScroll();
        	this.divDlayReg.form.resetScroll();

         	// 착수결과
        	if(isDivKoff) {
         		this.divKoff.set_height(this.hDivKoff);
         		this.divH11.set_height(this.hDivH11);
         	}
         	else {
         		this.divKoff.set_height(0);
         		this.divH11.set_height(0);
         	}
        	this.divH11.form.resetScroll();
         	this.divKoff.form.resetScroll();

        	// 전체 페이지.
        	this.resetScroll();

        	// 최종 호출.
        	this.fnDivCtrl();
        };

        this.fnDtlBtnCtrl = function()
        {
        	//trace("[AprvAplyS01] 상세 권한별 버튼 처리 =========================");

        	var isBtnList = this.dsDtlBtnCtrl.getColumn(0, "btnList");
        	var isBtnKoffReg = this.dsDtlBtnCtrl.getColumn(0, "btnKoffReg");
        	var isBtnKoffSave = this.dsDtlBtnCtrl.getColumn(0, "btnKoffSave");
        	var isBtnEvlSave = this.dsDtlBtnCtrl.getColumn(0, "btnEvlSave");
        	var isBtnOpnnSave = this.dsDtlBtnCtrl.getColumn(0, "btnOpnnSave");
        	var isBtnDicDlbrSave = this.dsDtlBtnCtrl.getColumn(0, "btnDicDlbrSave");
        	var isBtnDlbrSave = this.dsDtlBtnCtrl.getColumn(0, "btnDlbrSave");
        	var isBtnDlayReg = this.dsDtlBtnCtrl.getColumn(0, "btnDlayReg");
        	var isBtnDlaySave = this.dsDtlBtnCtrl.getColumn(0, "btnDlaySave");
        	var isBtnDlayReSave = this.dsDtlBtnCtrl.getColumn(0, "btnDlayReSave");
        	var isBtnExcrAgre = this.dsDtlBtnCtrl.getColumn(0, "btnExcrAgre");
        	var isBtnMod = this.dsDtlBtnCtrl.getColumn(0, "btnMod");
        	var isBtnModDoc = this.dsDtlBtnCtrl.getColumn(0, "btnModDoc");
        	var isBtnReDoc = this.dsDtlBtnCtrl.getColumn(0, "btnReDoc");
        	var isBtnDlbrReq = this.dsDtlBtnCtrl.getColumn(0, "btnDlbrReq");
        	var isBtnDlayRstSave = this.dsDtlBtnCtrl.getColumn(0, "btnDlayRstSave");

        	var isBtnTopList = this.dsDtlBtnCtrl.getColumn(0, "btnTopList");
        	var isBtnTopReg = this.dsDtlBtnCtrl.getColumn(0, "btnTopReg");
        	var isBtnTopPrivateReg = this.dsDtlBtnCtrl.getColumn(0, "btnTopPrivateReg");
        	var isBtnTopRpt = this.dsDtlBtnCtrl.getColumn(0, "btnTopRpt");
        	var isBtnTopCfmRpt = this.dsDtlBtnCtrl.getColumn(0, "btnTopCfmRpt");
        	var isBtnTopAdmCfmRpt = this.dsDtlBtnCtrl.getColumn(0, "btnTopAdmCfmRpt");

        	var isDivCalFromTo = this.dsDtlBtnCtrl.getColumn(0, "divCalFromTo");
        	var isBtnPrdDlbr = this.dsDtlBtnCtrl.getColumn(0, "btnPrdDlbr");

         	if(isBtnList) { this.divComBtn.form.btnList.set_width(this.wBtnList); } else { this.divComBtn.form.btnList.set_width(0); }
        	if(isBtnKoffReg) { this.divComBtn.form.btnKoffReg.set_width(this.wBtnKoffReg); } else { this.divComBtn.form.btnKoffReg.set_width(-3); }
         	if(isBtnKoffSave) { this.divComBtn.form.btnKoffSave.set_width(this.wBtnKoffSave); } else { this.divComBtn.form.btnKoffSave.set_width(-3); }
         	if(isBtnEvlSave) { this.divComBtn.form.btnEvlSave.set_width(this.wBtnEvlSave); } else { this.divComBtn.form.btnEvlSave.set_width(-3); }
         	if(isBtnOpnnSave) { this.divComBtn.form.btnOpnnSave.set_width(this.wBtnOpnnSave); } else { this.divComBtn.form.btnOpnnSave.set_width(-3); }
         	if(isBtnDicDlbrSave) { this.divComBtn.form.btnDicDlbrSave.set_width(this.wBtnDicDlbrSave); } else { this.divComBtn.form.btnDicDlbrSave.set_width(-3); }
         	if(isBtnDlbrSave) { this.divComBtn.form.btnDlbrSave.set_width(this.wBtnDlbrSave); } else { this.divComBtn.form.btnDlbrSave.set_width(-3); }
        	if(isBtnDlayReg) { this.divComBtn.form.btnDlayReg.set_width(this.wBtnDlayReg); } else { this.divComBtn.form.btnDlayReg.set_width(-3); }
         	if(isBtnDlaySave) { this.divComBtn.form.btnDlaySave.set_width(this.wBtnDlaySave); } else { this.divComBtn.form.btnDlaySave.set_width(-3); }
         	if(isBtnDlayReSave) { this.divComBtn.form.btnDlayReSave.set_width(this.wBtnDlayReSave); } else { this.divComBtn.form.btnDlayReSave.set_width(-3); }
         	if(isBtnExcrAgre) { this.divComBtn.form.btnExcrAgre.set_width(this.wBtnExcrAgre); } else { this.divComBtn.form.btnExcrAgre.set_width(-3); }
         	if(isBtnMod) { this.divComBtn.form.btnMod.set_width(this.wBtnMod); } else { this.divComBtn.form.btnMod.set_width(-3); }
         	if(isBtnModDoc) { this.divComBtn.form.btnModDoc.set_width(this.wBtnModDoc); } else { this.divComBtn.form.btnModDoc.set_width(-3); }
         	if(isBtnReDoc) { this.divComBtn.form.btnReDoc.set_width(this.wBtnReDoc); } else { this.divComBtn.form.btnReDoc.set_width(-3); }
        	if(isBtnDlbrReq) { this.divComBtn.form.btnDlbrReq.set_width(this.wBtnDlbrReq); } else { this.divComBtn.form.btnDlbrReq.set_width(-3); }
        	if(isBtnDlayRstSave) { this.divComBtn.form.btnDlayRstSave.set_width(this.wBtnDlayRstSave); } else { this.divComBtn.form.btnDlayRstSave.set_width(-3); }

         	if(isBtnTopList) { this.divH3.form.btnTopList.set_width(this.wBtnTopList); } else { this.divH3.form.btnTopList.set_width(0); }
         	if(isBtnTopReg) { this.divH3.form.btnTopReg.set_width(this.wBtnTopReg); } else { this.divH3.form.btnTopReg.set_width(-3); }
         	if(isBtnTopPrivateReg) { this.divH3.form.btnTopPrivateReg.set_width(this.wBtnTopPrivateReg); } else { this.divH3.form.btnTopPrivateReg.set_width(-3); }
         	if(isBtnTopRpt) { this.divH3.form.btnTopRpt.set_width(this.wBtnTopRpt); } else { this.divH3.form.btnTopRpt.set_width(-3); }
        	if(isBtnTopCfmRpt) { this.divH3.form.btnTopCfmRpt.set_width(this.wBtnTopCfmRpt); } else { this.divH3.form.btnTopCfmRpt.set_width(-3); }
        	if(isBtnTopAdmCfmRpt) { this.divH3.form.btnTopAdmCfmRpt.set_width(this.wBtnTopAdmCfmRpt); } else { this.divH3.form.btnTopAdmCfmRpt.set_width(-3); }

         	this.divComBtn.form.resetScroll();
        	this.divH3.form.resetScroll();

        	// 기승인건 인증기간갱신 노출 여부.
        	if(isDivCalFromTo && isBtnPrdDlbr) {
        		this.divBizUnit.form.divCalFromTo.set_height(this.hDivCalFromTo);
        		this.divBizUnit.form.btnPrdDlbr.set_height(this.hBtnPrdDlbr);
        	}
        	else {
        		this.divBizUnit.form.divCalFromTo.set_height(0);
        		this.divBizUnit.form.btnPrdDlbr.set_height(0);
        	}
        	this.divBizUnit.form.resetScroll();

        	// div 컨트롤
        	this.fnCallDivCtrl();

        };

        this.fnDivCtrl = function()
        {
        	// div top 설정
        	var bizTypeCd = this.dsCurInfo.getColumn(0, "bizTypeCd");

        	if(bizTypeCd == "BTC0003")	// 프로그램사업
        	{
        		this.divH7.form.staBizUnit.set_text("단위 사업정보    ");
        		this.divH5.set_height(this.hDivH5);
        		this.divPrgm.set_height(this.hDivPrgm);
        		this.divH6.set_height(this.hDivH6);
        		this.divPrgmFile.set_height(this.hDivPrgmFile);

        		this.divH7.form.resetScroll();
        		this.divH5.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH6.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        	}
        	else {
        		this.divH7.form.staBizUnit.set_text("사업정보      ");
        		this.divH5.set_height(0);
        		this.divPrgm.set_height(0);
        		this.divH6.set_height(0);
        		this.divPrgmFile.set_height(0);

        		this.divH7.form.resetScroll();
        		this.divH5.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH6.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        	}

        	this.resetScroll();

        	// 업무파일 정보 호출
        	this.fnCallFileStart("uni01FileLoading");
        };

        this.fnCallDtlBtnCtrl = function()
        {
        	//trace("상세 권한별 버튼처리 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyDtlBtnCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyDtlBtnCtrl.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dtlBtnInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsDtlBtnCtrl=dsDtlBtnCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallEvlSave = function()
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

        this.fnCallDicDlbrSave = function()
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

        this.fnCallDicDlbrOpnnSave = function()
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

        this.fnCallDlbrSave = function()
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

        this.fnCallAgree = function()
        {
        	//trace("참여자확인 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyAgree.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyAgree.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "agree";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsExcrList=dsExcrList:N";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallDlbrReq = function()
        {
        	//trace("심의요청 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyDlbrReq.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyDlbrReq.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "dlbrReq";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDlbrOpnnSave = function()
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

        this.fnCallKoffSave = function()
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

        this.fnCallDlayUsrSave = function()
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

        this.fnCallPrdDlbr = function()
        {
        	//trace("인증유효기간 변경 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/updateAprvAplyPrdDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/updateAprvAplyPrdDlbrSave.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "prdDlbrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsPrdDlbr=dsPrdDlbr";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // 목록 버튼
        this.divComBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad	= "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        // 상단 목록 버튼
        this.btnTopList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad	= "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        // 문서제출 이력보기 버튼.
        this.divH1_divH1_btnDocList_onclick = function(obj,e)
        {
        	//trace("이력보기 호출");
        	if(this.divH2.height < 1) {
        		this.divH2.set_height(this.hDivH2);
        		this.divH2.form.resetScroll();
        	}
        	else {
        		this.divH2.set_height(0);
        		this.divH2.form.resetScroll();
        	}
        	this.resetScroll();
        };

        // 문서 제출 그리드의 이력 클릭 시
        this.divH2_grdDocList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6) {

        		this.scrollTo(0,0);

        		this.dsCurInfo.setColumn(0, "bizMngNo", 	this.dsDocList.getColumn(e.row, "bizMngNo"));
        		this.dsCurInfo.setColumn(0, "bizDgr", 		this.dsDocList.getColumn(e.row, "bizDgr"));
        		this.dsCurInfo.setColumn(0, "bizTypeCd", 	this.dsDocList.getColumn(e.row, "bizTypeCd"));
        		this.dsCurInfo.setColumn(0, "dgrRegRsnCd", 	this.dsDocList.getColumn(e.row, "dgrRegRsnCd"));
        		this.dsCurInfo.setColumn(0, "sts", 			this.dsDocList.getColumn(e.row, "sts"));
        		this.dsCurInfo.setColumn(0, "pgmBizMngNo", 	this.dsDocList.getColumn(e.row, "pgmBizMngNo"));
        		this.dsCurInfo.setColumn(0, "bizTypeCd", 	this.dsDocList.getColumn(e.row, "bizTypeCd"));

        		this.fnCallDtlInfoDoc();
        	}
        };

        // 평가결과 저장
        this.divComBtn_btnEvlSave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivEvl()) return false;

        	this.fnCallEvlSave();
        };

        // 사전심의결과 저장
        this.divComBtn_btnDicDlbrSave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivDicDlbr()) return false;

        	this.fnCallDicDlbrSave();
        };

        // 심의결과 저장(제출)
        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivDlbr()) return false;

        	this.fnCallDlbrSave();
        };

        // 참여자 확인 버튼 클릭
        this.divComBtn_btnExcrAgre_onclick = function(obj,e)
        {
        	this.fnCallAgree();
        };

        // 사업수행자 행클릭.
        this.divH10_grdExcrList_oncellclick = function(obj,e)
        {
        	if(e.cell == 7) {
        		var agreSts = this.dsExcrList.getColumn(this.dsExcrList.rowposition, "agreSts");
        		var agreYn = this.dsExcrList.getColumn(this.dsExcrList.rowposition, "agreYn");

        		if(agreSts == "1") {
        			if(agreYn == "0") {
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "agreYn", "1");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "lstAgreYnNm", "동의");
        			}
        			else {
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "agreYn", "0");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "lstAgreYnNm", "미동의");
        			}
        		}
        	}
        };

        // 이의신청 버튼 클릭.
        this.divComBtn_btnOpnnSave_onclick = function(obj,e)
        {
        	var prcsTypeCd = this.dsUniInfo.getColumn(0, "prcsTypeCd");

        	if(prcsTypeCd == "PTC0011") {
        		if(!this.fnCallValidCheckDivDicDlbrOpnn()) return false;
        		this.fnCallDicDlbrOpnnSave();
        	}
        	else if(prcsTypeCd == "PTC0017") {
        		if(!this.fnCallValidCheckDivDlbrOpnn()) return false;
        		this.fnCallDlbrOpnnSave();
        	}
        };

        // 사전심의 그리드 행 클릭 시.
        this.divDicDlbr_divDicDlbrList_grdDicDlbrList_oncellclick = function(obj,e)
        {
        	var isOpnn = this.dsDicDlbrList.getColumn(e.row, "objcAplyYmd");
        	var hDicDlbr = this.hDivDicDlbrH1 + this.hDivDicDlbrList + this.hDivDicDlbrRst;

        	if(isOpnn == undefined || isOpnn == "") {
        		this.divDicDlbr.form.divDicDlbrH2.set_height(0);
        		this.divDicDlbr.form.divDicDlbrOpnnRst.set_height(0);
        	}
        	else {
        		this.divDicDlbr.form.divDicDlbrH2.set_height(this.hDivDicDlbrH2);
        		this.divDicDlbr.form.divDicDlbrOpnnRst.set_height(this.hDivDicDlbrOpnnRst);
        		hDicDlbr = hDicDlbr +this.hDivDicDlbrH2;
        		hDicDlbr = hDicDlbr +this.hDivDicDlbrOpnnRst;
        	}
        	hDicDlbr = hDicDlbr + 20;
        	this.divDicDlbr.set_height(hDicDlbr);

        	this.divDicDlbr.form.divDicDlbrH1.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrList.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrRst.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrH2.form.resetScroll();
        	this.divDicDlbr.form.divDicDlbrOpnnRst.form.resetScroll();
        	this.divDicDlbr.form.resetScroll();

        	// 전체 페이지.
        	this.resetScroll();

        	// 파일정보 바인딩.
        	trace("################### GRID 사전심의결과 Start ###################");
        	var dicDlbrFlmno = this.dsDicDlbrList.getColumn(this.dsDicDlbrList.rowposition, "dicDlbrFlmno");
        	trace(">>> dicDlbrFlmno : " + dicDlbrFlmno);
        	if(this.gfnIsNull(dicDlbrFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("singleFileDic02", objRtn);
        		this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.fnResetUpload();
        	}else {
        		this.divDicDlbr.form.divDicDlbrRst.form.divRaonKSingleDic02.form.fnSearchFile(dicDlbrFlmno);
        	}
        	trace("################### GRID 사전심의결과 END ###################");

        };

        // 심의요청 버튼 클릭 시
        this.divComBtn_btnDlbrReq_onclick = function(obj,e)
        {
        	this.fnCallDlbrReq();
        };

        // 심의 그리드 클릭 시.
        this.divDlbr_divDlbrList_grdDlbrList_oncellclick = function(obj,e)
        {
        	var isOpnn = this.dsDlbrList.getColumn(e.row, "objcAplyYmd");
        	var hDlbr = this.hDivDlbrH1 + this.hDivDlbrList + this.hDivDlbrRst;

        	if(isOpnn == undefined || isOpnn == "") {
        		this.divDlbr.form.divDlbrH2.set_height(0);
        		this.divDlbr.form.divDlbrOpnnRst.set_height(0);
        	}
        	else {
        		this.divDlbr.form.divDlbrH2.set_height(this.hDivDlbrH2);
        		this.divDlbr.form.divDlbrOpnnRst.set_height(this.hDivDlbrOpnnRst);
        		hDlbr = hDlbr +this.hDivDlbrH2;
        		hDlbr = hDlbr +this.hDivDlbrOpnnRst;
        	}
        	hDlbr = hDlbr + 20;
        	this.divDlbr.set_height(hDlbr);

        	this.divDlbr.form.divDlbrH1.form.resetScroll();
        	this.divDlbr.form.divDlbrList.form.resetScroll();
        	this.divDlbr.form.divDlbrRst.form.resetScroll();
        	this.divDlbr.form.divDlbrH2.form.resetScroll();
        	this.divDlbr.form.divDlbrOpnnRst.form.resetScroll();
        	this.divDlbr.form.resetScroll();

        	// 전체 페이지.
        	this.resetScroll();

        	// 파일정보 바인딩.
        	trace("################### GRID 심의결과 Start ###################");
        	var dlbrFlmno = this.dsDlbrList.getColumn(this.dsDlbrList.rowposition, "dlbrFlmno");
        	trace(">>> dlbrFlmno : " + dlbrFlmno);
        	if(this.gfnIsNull(dlbrFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("singleFileDic02", objRtn);
        		this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnResetUpload();
        	}else {
        		this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnSearchFile(dlbrFlmno);
        	}
        	trace("################### GRID 심의결과 END ###################");

        };

        // 문서재제출 클릭시.
        this.divComBtn_btnReDoc_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0001") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("REG2");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS02.xfdl");
        		}
        		else {
        			this.fnCallDoc();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0002") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("CHG2");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnChgDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS03.xfdl");
        		}
        		else {
        			this.fnCallChgDoc();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0003") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("PRD2");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS04.xfdl");
        		}
        		else {
        			this.fnCallPrdDoc();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0004") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("YMD2");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS05.xfdl");
        		}
        		else {
        			this.fnCallYmdDoc();
        		}
        	}
        };

        this.fnCallDoc = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0006") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCREUP";		// 첫 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCREUP";
        				}
        			} else {
        				sts = "DOCREUP";
        			}
        		}else if(prcsTypeCd == "PTC0007") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCRE";		// 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCRE";
        				}
        			} else {
        				sts = "DOCRE";
        			}
        		}else if(prcsTypeCd == "PTC0021") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBRUP";		// 첫 심의 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCDLBRUP";
        				}
        			} else {
        				sts = "DOCDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0022") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				trace(">> " + this.dsUniInfo.getColumn(0, "bizMngNo"));
        				trace(">> " + this.dsUniInfo.getColumn(0, "prgrmMngNo"));
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBR";		// 심의 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCDLBR";
        				}
        			} else {
        				sts = "DOCDLBR";
        			}
        		}

        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallChgDoc = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0006") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCREUP";		// 첫 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCREUP";
        				}
        			} else {
        				sts = "DOCREUP";
        			}
        		}else if(prcsTypeCd == "PTC0007") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCRE";		// 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCRE";
        				}
        			} else {
        				sts = "DOCRE";
        			}
        		}else if(prcsTypeCd == "PTC0021") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBRUP";		// 첫 심의 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCDLBRUP";
        				}
        			} else {
        				sts = "DOCDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0022") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				trace(">> " + this.dsUniInfo.getColumn(0, "bizMngNo"));
        				trace(">> " + this.dsUniInfo.getColumn(0, "prgrmMngNo"));
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBR";		// 심의 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCDLBR";
        				}
        			} else {
        				sts = "DOCDLBR";
        			}
        		}

        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallPrdDoc = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0006") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCREUP";		// 첫 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCREUP";
        				}
        			} else {
        				sts = "DOCREUP";
        			}
        		}else if(prcsTypeCd == "PTC0007") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCRE";		// 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCRE";
        				}
        			} else {
        				sts = "DOCRE";
        			}
        		}else if(prcsTypeCd == "PTC0021") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBRUP";		// 첫 심의 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCDLBRUP";
        				}
        			} else {
        				sts = "DOCDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0022") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				trace(">> " + this.dsUniInfo.getColumn(0, "bizMngNo"));
        				trace(">> " + this.dsUniInfo.getColumn(0, "prgrmMngNo"));
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBR";		// 심의 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCDLBR";
        				}
        			} else {
        				sts = "DOCDLBR";
        			}
        		}

        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };


        this.fnCallYmdDoc = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0006") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCREUP";		// 첫 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCREUP";
        				}
        			} else {
        				sts = "DOCREUP";
        			}
        		}else if(prcsTypeCd == "PTC0007") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCRE";		// 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCRE";
        				}
        			} else {
        				sts = "DOCRE";
        			}
        		}else if(prcsTypeCd == "PTC0021") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBRUP";		// 첫 심의 문서재제출 - 파일 복제
        				}else {
        					sts = "PGMDOCDLBRUP";
        				}
        			} else {
        				sts = "DOCDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0022") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				trace(">> " + this.dsUniInfo.getColumn(0, "bizMngNo"));
        				trace(">> " + this.dsUniInfo.getColumn(0, "prgrmMngNo"));
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "DOCDLBR";		// 심의 문서재제출 후 임시저장 - 파일 미복제
        				}else {
        					sts = "PGMDOCDLBR";
        				}
        			} else {
        				sts = "DOCDLBR";
        			}
        		}

        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        // 수정 버튼.
        this.divComBtn_btnMod_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0001") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("REG3");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS02.xfdl");
        		}
        		else {
        			this.fnCallMod();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0002") {

        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("CHG3");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnChgDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS03.xfdl");
        		}
        		else {
        			this.fnCallChgMod();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0003") {

        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("PRD3");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS04.xfdl");
        		}
        		else {
        			this.fnCallPrdMod();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0004") {

        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("YMD3");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			//this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS05.xfdl");
        		}
        		else {
        			this.fnCallYmdMod();
        		}
        	}
        };

        this.fnCallMod = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var sts = "";
        		if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        				sts = "MOD";
        			}else {
        				sts = "PGMMOD";
        			}
        		} else {
        			sts = "MOD";
        		}
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallChgMod = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var sts = "";
        		if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        				sts = "MOD";
        			}else {
        				sts = "PGMMOD";
        			}
        		} else {
        			sts = "MOD";
        		}
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallPrdMod = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var sts = "";
        		if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        				sts = "MOD";
        			}else {
        				sts = "PGMMOD";
        			}
        		} else {
        			sts = "MOD";
        		}
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallYmdMod = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var sts = "";
        		if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        				sts = "MOD";
        			}else {
        				sts = "PGMMOD";
        			}
        		} else {
        			sts = "MOD";
        		}
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        // 문서보완 클릭
        this.divComBtn_btnModDoc_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0001") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("REG4");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS02.xfdl");
        		}
        		else {
        			this.fnCallReg();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0002") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("CHG4");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnChgDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS03.xfdl");
        		}
        		else {
        			this.fnCallChgReg();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0003") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("PRD4");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS04.xfdl");
        		}
        		else {
        			this.fnCallPrdReg();
        		}
        	}
        	else if(dgrRegRsnCd == "BGC0004") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("YMD4");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);
        			this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        			this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        			this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS05.xfdl");
        		}
        		else {
        			this.fnCallYmdReg();
        		}
        	}
        };

        this.fnCallReg = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0004") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGREUP";
        				}else {
        					sts = "PGMREGREUP";
        				}
        			} else {
        				sts = "REGREUP";
        			}
        		}else if(prcsTypeCd == "PTC0005") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGRE";
        				}else {
        					sts = "PGMREGRE";
        				}
        			} else {
        				sts = "REGRE";
        			}
        		}else if(prcsTypeCd == "PTC0019") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBRUP";
        				}else {
        					sts = "PGMREGDLBRUP";
        				}
        			} else {
        				sts = "REGDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0020") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBR";
        				}else {
        					sts = "PGMREGDLBR";
        				}
        			} else {
        				sts = "REGDLBR";
        			}
        		}

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallChgReg = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnChgDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0004") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGREUP";
        				}else {
        					sts = "PGMREGREUP";
        				}
        			} else {
        				sts = "REGREUP";
        			}
        		}else if(prcsTypeCd == "PTC0005") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGRE";
        				}else {
        					sts = "PGMREGRE";
        				}
        			} else {
        				sts = "REGRE";
        			}
        		}else if(prcsTypeCd == "PTC0019") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBRUP";
        				}else {
        					sts = "PGMREGDLBRUP";
        				}
        			} else {
        				sts = "REGDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0020") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBR";
        				}else {
        					sts = "PGMREGDLBR";
        				}
        			} else {
        				sts = "REGDLBR";
        			}
        		}

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallPrdReg = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnPrdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0004") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGREUP";
        				}else {
        					sts = "PGMREGREUP";
        				}
        			} else {
        				sts = "REGREUP";
        			}
        		}else if(prcsTypeCd == "PTC0005") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGRE";
        				}else {
        					sts = "PGMREGRE";
        				}
        			} else {
        				sts = "REGRE";
        			}
        		}else if(prcsTypeCd == "PTC0019") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBRUP";
        				}else {
        					sts = "PGMREGDLBRUP";
        				}
        			} else {
        				sts = "REGDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0020") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBR";
        				}else {
        					sts = "PGMREGDLBR";
        				}
        			} else {
        				sts = "REGDLBR";
        			}
        		}

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        this.fnCallYmdReg = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnYmdDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		var prcsTypeCd = this.dsBizInfo.getColumn(0, "prcsTypeCd");
        		var sts = "";

        		if(prcsTypeCd == "PTC0004") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGREUP";
        				}else {
        					sts = "PGMREGREUP";
        				}
        			} else {
        				sts = "REGREUP";
        			}
        		}else if(prcsTypeCd == "PTC0005") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGRE";
        				}else {
        					sts = "PGMREGRE";
        				}
        			} else {
        				sts = "REGRE";
        			}
        		}else if(prcsTypeCd == "PTC0019") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBRUP";
        				}else {
        					sts = "PGMREGDLBRUP";
        				}
        			} else {
        				sts = "REGDLBRUP";
        			}
        		}else if(prcsTypeCd == "PTC0020") {
        			if(this.dsUniInfo.getColumn(0, "prgrmMngNo") != undefined && this.dsUniInfo.getColumn(0, "prgrmMngNo") != "") {
        				if(this.dsUniInfo.getColumn(0, "prgrmMngNo") == this.dsUniInfo.getColumn(0, "bizMngNo")) {
        					sts = "REGDLBR";
        				}else {
        					sts = "PGMREGDLBR";
        				}
        			} else {
        				sts = "REGDLBR";
        			}
        		}

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= sts;
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        // 프로그램사업 단위사업 등록.
        this.divH3_btnTopReg_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("REG5");

        	if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        		this.setWaitCursor(true);
        		this.getOwnerFrame().form.divWork.form.fnSetDtlDiv(false);
        		//this.getOwnerFrame().form.divWork.form.fnSetRegDiv(false);
        		this.getOwnerFrame().form.divWork.form.fnSetChgDiv(false);
        		this.getOwnerFrame().form.divWork.form.fnSetPrdDiv(false);
        		this.getOwnerFrame().form.divWork.form.fnSetYmdDiv(false);

        		this.getOwnerFrame().form.divWork.form.divDetail.set_url("");
        		this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        		this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/AprvAplyS02.xfdl");
        	}
        	else {
        		this.fnCallPgm();
        	}
        };

        this.fnCallPgm = function() {

        	if(this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {
        		// 화면전환
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		var objArgs = {};
        		objArgs.bizMngNo 		= this.dsCurInfo.getColumn(0, "bizMngNo");
        		objArgs.bizDgr 			= this.dsCurInfo.getColumn(0, "bizDgr");
        		objArgs.sts				= "PGMREG";
        		objArgs.dgrRegRsnCd 	= this.dsCurInfo.getColumn(0, "dgrRegRsnCd");
        		objArgs.pgmBizMngNo		= this.dsUniInfo.getColumn(0, "prgrmMngNo");
        		objArgs.bizTypeCd		= "";

        		this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        	}
        	else {
        		this.gfnShowMessage(this, "I000015", "", "fnMsgCallback", "msgAlert01");
        	}
        };

        // 착수보고
        this.divComBtn_btnKoffSave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivKoff()) return false;
        	this.fnCallKoffSave();
        };

        // 착수지연 등록 - 지연등록창 활성화. 착수등록창 닫기.
        this.divComBtn_btnDlayReg_onclick = function(obj,e)
        {
        	// 착수등록 숨기기
        	this.divReg.form.divE2.set_height(0);
        	this.divReg.set_height(0);
        	this.divH16.set_height(0);
        	this.divReg.form.divE2.form.resetScroll();
        	this.divReg.form.resetScroll();
        	this.divH16.form.resetScroll();

        	// 착수지연 등록창 열기
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
         	this.divH17.set_height(this.hDivH17);

        	this.divDlayReg.form.divDlayRegH1.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrReg.form.resetScroll();
        	this.divDlayReg.form.divDlayRegH2.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRst.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.resetScroll();
        	this.divH17.form.resetScroll();
        	this.divDlayReg.form.resetScroll();

        	// 버튼 제어
        	this.divComBtn.form.btnDlayReg.set_width(-3);					// 착수지연 등록 - hidden
        	this.divComBtn.form.btnDlaySave.set_width(this.wBtnDlaySave);	// 착수지연 저장 - show
        	this.divComBtn.form.btnKoffReg.set_width(this.wBtnKoffReg);		// 착수보고 등록 - show
        	this.divComBtn.form.btnKoffSave.set_width(-3);					// 착수보고 저장 - hidden
        	this.divComBtn.form.resetScroll();
        	this.divH3.form.resetScroll();

        	this.resetScroll();

        	// 착수지연 등록 파일 바인딩
        	trace("################### 착수지연 등록 Start ###################");
        	var dlayDmndFlmno = this.dsDlayReg.getColumn(0, "dlayDmndFlmno");
        	trace(">>> dlayDmndFlmno : " + dlayDmndFlmno);
        	if(this.gfnIsNull(dlayDmndFlmno)) {
        		this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile("");
        	}else {
        		this.divDlayReg.form.divDlayUsrReg.form.divRaonKMultiDlay01.form.fnSearchFile(dlayDmndFlmno);
        	}
        	trace("################### 착수지연 등록 END ###################");
        };

        // 착수보고 등록.
        this.divComBtn_btnKoffReg_onclick = function(obj,e)
        {
        	// 착수등록 오픈
        	var hReg = this.hDivE2;
        	this.divReg.form.divE2.form.staEvlRegTit.set_text("사업착수보고   ");
        	this.divReg.form.divE2.set_height(this.hDivE2);
        	this.divReg.form.divKoffReg.set_height(this.hDivKoffReg);
        	hReg = hReg + this.hDivKoffReg;
        	hReg = hReg + 20;
        	this.divReg.set_height(hReg);
        	this.divH16.set_height(this.hDivH16);
        	this.divReg.form.divE2.form.resetScroll();
        	this.divReg.form.resetScroll();
        	this.divH16.form.resetScroll();

        	// 착수지연 등록창 숨기기
        	var hDlayReg = 0;
         	this.divDlayReg.form.divDlayRegH1.set_height(0);
        	hDlayReg = hDlayReg + 0;
         	this.divDlayReg.form.divDlayUsrReg.set_height(0);
        	hDlayReg = hDlayReg + 0;
         	this.divDlayReg.form.divDlayRegH2.set_height(0);
        	hDlayReg = hDlayReg + 0;
         	this.divDlayReg.form.divDlayUsrRst.set_height(0);
        	hDlayReg = hDlayReg + 0;
        	this.divDlayReg.form.divDlayUsrRegDlbr.set_height(0);
        	hDlayReg = hDlayReg + 0;
         	this.divDlayReg.set_height(hDlayReg);
         	this.divH17.set_height(0);

        	this.divDlayReg.form.divDlayRegH1.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrReg.form.resetScroll();
        	this.divDlayReg.form.divDlayRegH2.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRst.form.resetScroll();
        	this.divDlayReg.form.divDlayUsrRegDlbr.form.resetScroll();
        	this.divH17.form.resetScroll();
        	this.divDlayReg.form.resetScroll();

        	// 버튼 제어
        	this.divComBtn.form.btnDlayReg.set_width(this.wBtnDlayReg);		// 착수지연 등록 - show
        	this.divComBtn.form.btnDlaySave.set_width(-3);					// 착수지연 저장 - hidden
        	this.divComBtn.form.btnKoffReg.set_width(-3);					// 착수보고 등록 - hidden
        	this.divComBtn.form.btnKoffSave.set_width(this.wBtnKoffSave);	// 착수보고 저장 - show
        	this.divComBtn.form.resetScroll();
        	this.divH3.form.resetScroll();

        	this.resetScroll();
        };

        // 착수지연 신청 저장
        this.divComBtn_btnDlaySave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivDlayAply()) return false;

        	this.fnCallDlayUsrSave();
        };

        //착수지연 결과 저장
        this.divComBtn_btnDlayRstSave_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivDlayDicDlbr()) return false;
        	this.fnCallDlayDicDlbrSave();
        };

        // 착수지연 그리드 셀 클릭 시
        this.divDlay_divDlayList_grdDlayList_oncellclick = function(obj,e)
        {
        	var dlayDmndTypeCd = this.dsDlayList.getColumn(e.row, "dlayDmndTypeCd");
        	var dlayIdntyTypeCd = this.dsDlayList.getColumn(e.row, "dlayIdntyTypeCd");
        	var dlayDlbrTypeCd = this.dsDlayList.getColumn(e.row, "dlayDlbrTypeCd");
        	var dlayPrcsDgr = this.dsDlayList.getColumn(e.row, "dlayPrcsDgr");
        	var maxDlayPrcsDgr = this.dsDlayList.getColumn(0, "dlayPrcsDgr");
        	var hDlay = 0;

        	if(dlayIdntyTypeCd == undefined || dlayIdntyTypeCd == "") {
        		this.divDlay.form.divDlayH1.set_height(this.hDivDlayH1);			hDlay = hDlay +this.hDivDlayH1;
        		this.divDlay.form.divDlayList.set_height(this.hDivDlayList);		hDlay = hDlay +this.hDivDlayList;
        		this.divDlay.form.divDlayRegVew.set_height(this.hDivDlayRegVew);	hDlay = hDlay +this.hDivDlayRegVew;
        		this.divDlay.form.divDlayH2.set_height(0);
        		this.divDlay.form.divDlayRst.set_height(0);
        		this.divDlay.form.divDlayUsrRstDlbr.set_height(0);
        	}
        	else {
        		this.divDlay.form.divDlayH1.set_height(this.hDivDlayH1);			hDlay = hDlay +this.hDivDlayH1;
        		this.divDlay.form.divDlayList.set_height(this.hDivDlayList);		hDlay = hDlay +this.hDivDlayList;
        		this.divDlay.form.divDlayRegVew.set_height(this.hDivDlayRegVew);	hDlay = hDlay +this.hDivDlayRegVew;
        		this.divDlay.form.divDlayH2.set_height(this.hDivDlayH2);			hDlay = hDlay +this.hDivDlayH2;
        		this.divDlay.form.divDlayRst.set_height(this.hDivDlayRst); 		hDlay = hDlay +this.hDivDlayRst;
        		if(dlayDlbrTypeCd == "DTC0001" || dlayDlbrTypeCd == "DTC0002") {		//심의승인 또는 심의반려
        			this.divDlay.form.divDlayUsrRstDlbr.set_height(this.hDivDlayUsrRstDlbr);	hDlay = hDlay +this.hDivDlayUsrRstDlbr;
        		}else {
        			this.divDlay.form.divDlayUsrRstDlbr.set_height(0);
        		}
        	}
        	hDlay = hDlay + this.hDivH12;
        	this.divDlay.set_height(hDlay);
        	this.divH12.set_height(this.hDivH12);

        	this.divDlay.form.divDlayH1.form.resetScroll();
        	this.divDlay.form.divDlayList.form.resetScroll();
        	this.divDlay.form.divDlayRegVew.form.resetScroll();
        	this.divDlay.form.divDlayH2.form.resetScroll();
        	this.divDlay.form.divDlayRst.form.resetScroll();
        	this.divDlay.form.divDlayUsrRstDlbr.form.resetScroll();
        	this.divH12.form.resetScroll();
        	this.divDlay.form.resetScroll();

        	// 전체 페이지.
        	this.resetScroll();

        	trace("################### 착수지연결과 Start ###################");
        	var dlayDmndFlmno = this.dsDlayList.getColumn(this.dsDlayList.rowposition, "dlayDmndFlmno");
        	trace(">>> dlayDmndFlmno : " + dlayDmndFlmno);
        	if(this.gfnIsNull(dlayDmndFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("multiFileDlay02", objRtn);
        		this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.fnResetUpload();
        	}else {
        		this.divDlay.form.divDlayRegVew.form.divRaonKMultiDlay02.form.fnSearchFile(dlayDmndFlmno);
        	}
        	trace("################### 착수지연결과 END ###################");
        };

        // 심의콤보 변경시.
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
        	this.divDlayReg.form.resetScroll();
        	this.divComBtn.form.resetScroll();
        	this.resetScroll();
        };

        this.divBizUnit_btnPrdDlbr_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivPrdDlbr()) return false;
        	this.fnCallPrdDlbr();
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
        	var dicDlbrTypeCd = this.dsDicDlbrReg.getColumn(0, "dicDlbrTypeCd");
        	var dicDlbrDt = this.dsDicDlbrReg.getColumn(0, "dicDlbrDt");

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

        // 인증유효기간 갱신 저장
        this.fnCallValidCheckDivPrdDlbr = function()
        {
        	var certVldBgngYmd = this.dsPrdDlbr.getColumn(0, "certVldBgngYmd");
        	var certVldEndYmd = this.dsPrdDlbr.getColumn(0, "certVldEndYmd");

        	if(this.gfnIsNull(certVldBgngYmd)) {
        		this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divBizUnit.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass(""); }

        	if(this.gfnIsNull(certVldEndYmd)) {
        		this.divBizUnit.form.divCalFromTo.form.calTo.set_cssclass("error");
        		this.divBizUnit.form.divCalFromTo.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divBizUnit.form.divCalFromTo.form.calTo.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldBgngYmd) != 8) {
        		this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divBizUnit.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldEndYmd) != 8) {
        		this.divBizUnit.form.divCalFromTo.form.calTo.set_cssclass("error");
        		this.divBizUnit.form.divCalFromTo.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divBizUnit.form.divCalFromTo.form.calTo.set_cssclass(""); }

        	if(nexacro.toNumber(certVldBgngYmd) >= nexacro.toNumber(certVldEndYmd)) {
        		this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divBizUnit.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000004", "", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divBizUnit.form.divCalFromTo.form.calFrom.set_cssclass(""); }

        	return true;
        };

        // 보고서 신청서 출력
        this.divH3_btnTopRpt_onclick = function(obj,e)
        {
        	var sUrl = this.fvApp.ReportInfo.reportUrl;
        	var rptNm = "/report/biz/bizAprvAply.crf";
        	var svcId = "bizAprvAplyService";
        	var param1 = this.dsCurInfo.getColumn(0, "bizMngNo");
        	var param2 = this.dsCurInfo.getColumn(0, "bizDgr");

        	var sParam = "crfPath="+rptNm+"&service="+svcId+"&param1="+param1+"&param2="+param2;

        	var sPopupId	= "bizAprvAplyReportPop";
        	var sPopupUrl	= "Frame_Popup::comReportPop.xfdl";
        	var objArgs		= {pvUrl:sUrl, pvParam:sParam};
        	var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"Report"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        // 보고서 사전승인서 출력(사업수행자)
        this.divH3_btnTopCfmRpt_onclick = function(obj,e)
        {
        	var sUrl = this.fvApp.ReportInfo.reportUrl;
        	var rptNm = "/report/biz/bizAprvCfm.crf";
        	var svcId = "bizAprvAplyService";
        	var param1 = this.dsCurInfo.getColumn(0, "bizMngNo");
        	var param2 = this.dsCurInfo.getColumn(0, "bizDgr");

        	var sParam = "crfPath="+rptNm+"&service="+svcId+"&param1="+param1+"&param2="+param2;

        	var sPopupId	= "bizAprvAplyCfmReportPop";
        	var sPopupUrl	= "Frame_Popup::comReportPop.xfdl";
        	var objArgs		= {pvUrl:sUrl, pvParam:sParam};
        	var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"Report"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        // 보고서 사전승인서 출력(관장기관)
        this.divH3_btnTopAdmCfmRpt_onclick = function(obj,e)
        {
        	var sUrl = this.fvApp.ReportInfo.reportUrl;
        	var rptNm = "/report/biz/bizAprvCfm.crf";
        	var svcId = "admAprvAplyService";
        	var param1 = this.dsCurInfo.getColumn(0, "bizMngNo");
        	var param2 = this.dsCurInfo.getColumn(0, "bizDgr");

        	var sParam = "crfPath="+rptNm+"&service="+svcId+"&param1="+param1+"&param2="+param2;

        	var sPopupId	= "admAprvAplyCfmReportPop";
        	var sPopupUrl	= "Frame_Popup::comReportPop.xfdl";
        	var objArgs		= {pvUrl:sUrl, pvParam:sParam};
        	var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"Report"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divH1.form.divH1.form.btnDocList.addEventHandler("onclick",this.divH1_divH1_btnDocList_onclick,this);
            this.divH2.form.grdDocList.addEventHandler("oncellclick",this.divH2_grdDocList_oncellclick,this);
            this.divH3.form.btnTopList.addEventHandler("onclick",this.btnTopList_onclick,this);
            this.divH3.form.btnTopReg.addEventHandler("onclick",this.divH3_btnTopReg_onclick,this);
            this.divH3.form.btnTopRpt.addEventHandler("onclick",this.divH3_btnTopRpt_onclick,this);
            this.divH3.form.btnTopCfmRpt.addEventHandler("onclick",this.divH3_btnTopCfmRpt_onclick,this);
            this.divH3.form.btnTopAdmCfmRpt.addEventHandler("onclick",this.divH3_btnTopAdmCfmRpt_onclick,this);
            this.divPrgm.form.stAbplcNm.addEventHandler("onclick",this.div01_00_00_sta08_00_01_onclick,this);
            this.divPrgm.form.staLine3.addEventHandler("onclick",this.Static_onclick,this);
            this.divPrgm.form.staBizEnfcPlcNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divPrgm.form.edtBizOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divH6.form.staPrgmFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divPrgmFile.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH7.form.staBizUnit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divBizUnit.form.staBizKrnNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staCertVldYmd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staBizFormCd.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divBizUnit.form.staBizUnqno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staCertVldTypeCd.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divBizUnit.form.staAtcnvrRdcqty.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staCnvrCoefCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staCnvrBassCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staMhdlg.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staBizEnfcPlcNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.edtBizOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divBizUnit.form.edtBizKrnNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divBizUnit.form.staSopNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staOmgeNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.btnPrdDlbr.addEventHandler("onclick",this.divBizUnit_btnPrdDlbr_onclick,this);
            this.divBizUnit.form.rdoAplyClCd.addEventHandler("onitemchanged",this.divRBizUnit_rdoAplyClCd_onitemchanged,this);
            this.divH8.form.staFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFile.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH9.form.staExcrList.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divH10.form.grdExcrList.addEventHandler("oncellclick",this.divH10_grdExcrList_oncellclick,this);
            this.divExcr.form.staAtcnvrRdcqty.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divExcr.form.staCnvrCoefCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divExcr.form.staCnvrBassCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH18.form.staRFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH19.form.staChgCn.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divKoff.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divKoff.form.divKoffRst.form.staKoffFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlay.form.divDlayH1.form.staDlbrRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlay.form.divDlayList.form.grdDlayList.addEventHandler("oncellclick",this.divDlay_divDlayList_grdDlayList_oncellclick,this);
            this.divDlay.form.divDlayRegVew.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlay.form.divDlayRegVew.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlay.form.divDlayH2.form.staDlbrOpnnRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlay.form.divDlayRst.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlay.form.divDlayRst.form.txaDlayRstRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlay.form.divDlayUsrRstDlbr.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlay.form.divDlayUsrRstDlbr.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbr.form.divDlbrH1.form.staDlbrRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbr.form.divDlbrList.form.grdDlbrList.addEventHandler("oncellclick",this.divDlbr_divDlbrList_grdDlbrList_oncellclick,this);
            this.divDlbr.form.divDlbrRst.form.staDlbrFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbr.form.divDlbrRst.form.txaDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbr.form.divDlbrH2.form.staDlbrOpnnRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbr.form.divDlbrOpnnRst.form.txaObjcAplyOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDicDlbr.form.divDicDlbrH1.form.staDicDlbrRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicDlbr.form.divDicDlbrList.form.grdDicDlbrList.addEventHandler("oncellclick",this.divDicDlbr_divDicDlbrList_grdDicDlbrList_oncellclick,this);
            this.divDicDlbr.form.divDicDlbrRst.form.staDicDlbrFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDicDlbr.form.divDicDlbrRst.form.txaDicDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDicDlbr.form.divDicDlbrH2.form.staDicDlbrOpnnRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicDlbr.form.divDicDlbrOpnnRst.form.txaObjcAplyOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divEvl.form.divE1.form.staEvlRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divEvl.form.divEvlRst.form.staEvlFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
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
            this.divDlayReg.form.divDlayRegH1.form.staDlayRegTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrReg.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayRegH2.form.staDlayRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRst.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRst.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlayReg.form.divDlayUsrRegDlbr.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlayReg.form.divDlayUsrRegDlbr.form.txaDlayRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnKoffSave.addEventHandler("onclick",this.divComBtn_btnKoffSave_onclick,this);
            this.divComBtn.form.btnEvlSave.addEventHandler("onclick",this.divComBtn_btnEvlSave_onclick,this);
            this.divComBtn.form.btnOpnnSave.addEventHandler("onclick",this.divComBtn_btnOpnnSave_onclick,this);
            this.divComBtn.form.btnDicDlbrSave.addEventHandler("onclick",this.divComBtn_btnDicDlbrSave_onclick,this);
            this.divComBtn.form.btnDlbrSave.addEventHandler("onclick",this.divComBtn_btnDlbrSave_onclick,this);
            this.divComBtn.form.btnDlaySave.addEventHandler("onclick",this.divComBtn_btnDlaySave_onclick,this);
            this.divComBtn.form.btnExcrAgre.addEventHandler("onclick",this.divComBtn_btnExcrAgre_onclick,this);
            this.divComBtn.form.btnMod.addEventHandler("onclick",this.divComBtn_btnMod_onclick,this);
            this.divComBtn.form.btnModDoc.addEventHandler("onclick",this.divComBtn_btnModDoc_onclick,this);
            this.divComBtn.form.btnReDoc.addEventHandler("onclick",this.divComBtn_btnReDoc_onclick,this);
            this.divComBtn.form.btnDlbrReq.addEventHandler("onclick",this.divComBtn_btnDlbrReq_onclick,this);
            this.divComBtn.form.btnDlayReg.addEventHandler("onclick",this.divComBtn_btnDlayReg_onclick,this);
            this.divComBtn.form.btnKoffReg.addEventHandler("onclick",this.divComBtn_btnKoffReg_onclick,this);
            this.divComBtn.form.btnDlayRstSave.addEventHandler("onclick",this.divComBtn_btnDlayRstSave_onclick,this);
            this.dsExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
        };
        this.loadIncludeScript("AprvAplyS98.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
