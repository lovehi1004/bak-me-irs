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
            obj = new Div("divH11","0","4668",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("divH13","0","5021",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divH14","0","6045",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divH15","0","7069",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH11
            obj = new Layout("default","",0,0,this.divH11.form,function(p){});
            this.divH11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH13
            obj = new Layout("default","",0,0,this.divH13.form,function(p){});
            this.divH13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH14
            obj = new Layout("default","",0,0,this.divH14.form,function(p){});
            this.divH14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH15
            obj = new Layout("default","",0,0,this.divH15.form,function(p){});
            this.divH15.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AprvAplyS99.xfdl", function() {
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

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        this.fnClose = function()
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


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.dsExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
        };
        this.loadIncludeScript("AprvAplyS99.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
