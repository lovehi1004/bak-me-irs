(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAply02");
            this.set_titletext("사업통합신청등록수정");
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
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldCertVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"scsnGbnCd\" type=\"STRING\" size=\"256\"/><Column id=\"scsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"scsnDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"scsnBizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"scsnEtcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"scsnBgngDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrOpnnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRegInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsScsnExcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"hnovInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"hnovAtcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"hnovBlckMgno\" type=\"STRING\" size=\"256\"/><Column id=\"hnovQty\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpAtcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpBlckMgno\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpQty\" type=\"STRING\" size=\"256\"/><Column id=\"agreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"masterYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScsnMedoList", this);
            obj._setContents("<ColumnInfo><Column id=\"gbn\" type=\"STRING\" size=\"256\"/><Column id=\"period\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQtyList", this);
            obj._setContents("<ColumnInfo><Column id=\"dgr\" type=\"STRING\" size=\"256\"/><Column id=\"period\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMesuExcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"hnovInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"hnovAtcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"hnovBlckMgno\" type=\"STRING\" size=\"256\"/><Column id=\"hnovQty\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpAtcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpBlckMgno\" type=\"STRING\" size=\"256\"/><Column id=\"wpmpQty\" type=\"STRING\" size=\"256\"/><Column id=\"agreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"masterYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"chkNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrId\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoffReg", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYmd\" type=\"STRING\" size=\"256\"/><Column id=\"koffRptFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divHDoc","0","0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("staDocList","0","20","370","30",null,null,null,null,null,null,this.divHDoc.form);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divHDoc.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this.divHDoc.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divHDoc.addChild(obj.name, obj);

            obj = new Div("divHDocList","0","divHDoc:0",null,"259","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","0",null,"259","0",null,null,null,null,null,this.divHDocList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"127\"/><Column size=\"109\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제출일자\"/><Cell col=\"2\" text=\"신청유형\"/><Cell col=\"3\" text=\"처리일자\"/><Cell col=\"4\" text=\"관장기관\"/><Cell col=\"5\" text=\"처리유형\"/><Cell col=\"6\" text=\"상세보기\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:aplyYmd\" textAlign=\"center\" tooltiptext=\"bind:aplyYmd\"/><Cell col=\"2\" text=\"bind:aplyTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:aplyTypeCdNm\"/><Cell col=\"3\" text=\"bind:prcsYmd\" textAlign=\"center\" tooltiptext=\"bind:prcsYmd\"/><Cell col=\"4\" text=\"bind:prcsUserNm\" textAlign=\"center\" tooltiptext=\"bind:prcsUserNm\"/><Cell col=\"5\" text=\"bind:prcsTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:prcsTypeCdNm\"/><Cell col=\"6\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\"/></Band></Format></Formats>");
            this.divHDocList.addChild(obj.name, obj);

            obj = new Div("divH0","0","divHDocList:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH0.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopList",null,"20","71","30","8",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopReg",null,"20","115","30","btnTopList:3",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("3");
            obj.set_text("단위사업 등록");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopPrivateReg",null,"20","130","30","btnTopReg:3",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("2");
            obj.set_text("사업 비공개 신청");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopRpt",null,"20","100","30","btnTopPrivateReg:3",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("1");
            obj.set_text("신청서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopCfmRpt",null,"20","130","30","btnTopRpt:3",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("5");
            obj.set_text("사전승인서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Button("btnTopAdmCfmRpt",null,"20","130","30","btnTopCfmRpt:3",null,null,null,null,null,this.divH0.form);
            obj.set_taborder("6");
            obj.set_text("사전승인서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH0.addChild(obj.name, obj);

            obj = new Div("divRUsrInfo","0","divH0:0",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Div("divHBiz","0","divRUsrInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("staBizInfo","0","20","342","30",null,null,null,null,null,null,this.divHBiz.form);
            obj.set_taborder("0");
            obj.set_text("신청 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divHBiz.addChild(obj.name, obj);

            obj = new Div("divBizInfo","0","divHBiz:0",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("16");
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

            obj = new Div("divH1","0","divBizInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staRPrgm","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divPrgm","0","divH1:0",null,"800","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine7","0","502",null,"294","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine6","0","459",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine5","0","416",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine4","0","373",null,"44","0",null,null,null,null,null,this.divPrgm.form);
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

            obj = new Static("staBizOrgtNm","0","373","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("4");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","416","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("5");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","459","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("7");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","502","150","294",null,null,null,null,null,null,this.divPrgm.form);
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

            obj = new Grid("grdMhdlgList","157","552",null,"228","7",null,null,null,null,null,this.divPrgm.form);
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
            obj.set_taborder("27");
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

            obj = new Edit("edtBizOrgtNm","157","381",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("19");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","424",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtCalFromTo","157","467",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("21");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","510",null,"30","10",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("22");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staLine10","0","330",null,"44","0",null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","330","150","44",null,null,null,null,null,null,this.divPrgm.form);
            obj.set_taborder("24");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","337",null,"30","8",null,null,null,null,null,this.divPrgm.form);
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

            obj = new Div("divH2","0","divPrgm:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staRPrgmFile","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일    ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divPrgmFile","0","divH2:0",null,"140","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

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

            obj = new Div("divRaonKSinglePgm01","157","10","800","120",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divH3","0","divPrgmFile:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Static("staRBizUnit","0","20","600","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("단위 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divBizUnit","0","divH3:0",null,"1130","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("사업장명");
            this.addChild(obj.name, obj);

            obj = new Static("staLine10","0","628",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine7","0","499",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine2","-22","42",null,"44","-14",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine1","0","-1",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","0","-1","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine6","0","456",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","42","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("4");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","456","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("6");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","499","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","628","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("9");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine5","-36","413",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","413","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("12");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","783","413","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("21");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine8","0","542",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizUnqno","0","542","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("23");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine9","-36","585",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldTypeCd","0","585","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("25");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staKoffPrnmntYmd","783","585","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("26");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine11","0","671",null,"117","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","671","150","117",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("28");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine12","783","714",null,"74","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","671","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("29");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","714","150","74",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("31");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine13","0","831",null,"284","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","831","150","284",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("33");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine3","-26","84",null,"44","-10",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","84","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("35");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine4","0","124",null,"246","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","124","150","246",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("37");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoAplyClCd","157","7","699","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("13");
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

            obj = new Static("stcAgreeMgnoNm","157","92","218","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("44");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","stcAgreeMgnoNm:3","90","130","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("14");
            obj.set_text("협정·약정·MOU 조회");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","463","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("16");
            obj.set_inputtype("sign,space,symbol,numberandenglish");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","506","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","157","549","620","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoCertVldTypeCd","157","592","383","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("19");
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

            obj = new Edit("edtCnvrCoefCn","940","679",null,"30","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine14","0","787",null,"45","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staSopNm","0","787","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("39");
            obj.set_text("SOP");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staOmgeNm","783","787","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("40");
            obj.set_text("OMGE");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine16","-26","369",null,"45","-10",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBplcNm","0","369","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("42");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","377","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCd","157","48",null,"30","793",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("43");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdBizEnfcPlcList","157","135",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("45");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCd","157","423","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("46");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizScalCd","940","423","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("47");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtKoffPrnmntYmd","940","594","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("48");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCertVldYmd","157","638","303","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("49");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new TextArea("taeCnvrBassCn","940","721","616","60",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("50");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitMhdlg","157","877",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("51");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"600\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"방법론(국문)명\"/><Cell col=\"2\" text=\"방법론\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"1\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/><Cell col=\"2\" text=\"방법론 조회\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"5px\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","845","543","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("52");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","300","845","236","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("53");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcOmge","940","795","171","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("61");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtOmge","stcOmge:3","795",null,"30","157",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcSop","161","795","171","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("60");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtSopUnitCdNm","stcSop:3","795",null,"30","937",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcBfr","156","697","115","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("56");
            obj.set_text("환산 전 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcBfcnvrRdcqtyNo","stcBfr:3","697","129","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("62");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBfcnvrRdcqtyNo","stcBfcnvrRdcqtyNo:3","697",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAft","156","737","115","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("58");
            obj.set_text("환산 후 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAtcnvrRdcqtyNo","stcAft:3","737","129","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("63");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAtcnvrRdcqtyNo","stcAtcnvrRdcqtyNo:3","737",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Div("divH4","0","divBizUnit:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Static("staRFile","0","20","342","30",null,null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일            ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH4:0",null,"140","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

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

            obj = new Div("divRaonKSingleUni01","157","10","800","120",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divH5","0","divFile:1",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div03");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staRExcrList","0","20","342","30",null,null,null,null,null,null,this.divH5.form);
            obj.set_taborder("0");
            obj.set_text("권리의 승계 신청");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH5.addChild(obj.name, obj);

            obj = new Div("divH6","0","divH5:0",null,"1520","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("WHITE");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divMedo","20","0",null,"60","774",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staMedo","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divMedo.form);
            obj.set_taborder("0");
            obj.set_text("양도인         ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divMedo.addChild(obj.name, obj);

            obj = new Grid("grdMedo","20","60",null,"269","806",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsScsnExcrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"178\"/><Column size=\"113\"/><Column size=\"104\"/><Column size=\"210\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"대표\"/><Cell col=\"1\" text=\"사업수행자명\"/><Cell col=\"2\" text=\"사업자등록번호\"/><Cell col=\"3\" text=\"대표자\"/><Cell col=\"4\" text=\"연평균 온실가스 배출 감축량\"/></Band><Band id=\"body\"><Cell text=\"expr:masterYn==&apos;Y&apos;?&apos;대표&apos;:&apos;-&apos;\" textAlign=\"center\" tooltiptext=\"expr:masterYn==&apos;Y&apos;?&apos;대표&apos;:&apos;-&apos;\"/><Cell col=\"1\" text=\"bind:bzentNm\" textAlign=\"center\" tooltiptext=\"bind:bzentNm\"/><Cell col=\"2\" text=\"bind:brno\" textAlign=\"center\" tooltiptext=\"bind:brno\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:rprsvNm\" tooltiptext=\"bind:rprsvNm\"/><Cell col=\"4\" text=\"bind:hnovAtcnvrRdcqty\" displaytype=\"normal\" edittype=\"none\" textAlign=\"right\" tooltiptext=\"bind:hnovAtcnvrRdcqty\"/></Band></Format></Formats>");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divMedoSu","grdMedo:40","0",null,"60","14",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staMedoSu","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divMedoSu.form);
            obj.set_taborder("0");
            obj.set_text("양도가능량        ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divMedoSu.addChild(obj.name, obj);

            obj = new Div("divMedoSuDtl","grdMedo:40","60","740","269",null,null,null,null,null,null,this.divH6.form);
            obj.set_taborder("3");
            obj.set_background("#ededed");
            obj.set_text("");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staTit02","500","0",null,"44","0",null,null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("3");
            obj.set_text("선택 인증실적 수량 합계\r\n(tCO2-eq)");
            obj.set_cssclass("sta_WF_Label2");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Static("staH02","500","43",null,null,"0","0",null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg2");
            obj.set_text("");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Static("staH01","0","43",null,null,"240","0",null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg2L");
            obj.set_text("");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Static("staTit01","0","0","500","44",null,null,null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("0");
            obj.set_text("총 보유량(tCO2-eq)");
            obj.set_cssclass("sta_WF_Label2L");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Grid("grdMedoSu","8","50","485","212",null,null,null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsScsnMedoList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"38\"/><Row size=\"38\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"인증실적 구분\"/><Cell col=\"1\" text=\"유효기간\"/><Cell col=\"2\" text=\"인증실적&#13;&#10;보유수량\"/></Band><Band id=\"body\"><Cell text=\"bind:gbn\" textAlign=\"center\" tooltiptext=\"bind:gbn\"/><Cell col=\"1\" text=\"bind:period\" textAlign=\"center\" tooltiptext=\"bind:period\"/><Cell col=\"2\" text=\"bind:num\" textAlign=\"center\" tooltiptext=\"bind:num\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" text=\"0\" textAlign=\"right\"/><Cell col=\"2\" text=\"tCO2-eq\"/></Band></Format></Formats>");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Static("staSelMedoSu","533","124","168","64",null,null,null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("5");
            obj.set_text("선택된 감축량 인증실적이 없습니다.");
            obj.set_cssclass("output");
            obj.set_textAlign("center");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divH6.form.divMedoSuDtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divH6.form.divMedoSuDtl.addChild(obj.name, obj);

            obj = new Div("divMedoSil","20","329",null,"60","774",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staMedoSil","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divMedoSil.form);
            obj.set_taborder("0");
            obj.set_text("감축량인증실적     ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divMedoSil.addChild(obj.name, obj);

            obj = new Grid("grdMedo00","20","389",null,"269","806",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsQtyList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"115\"/><Column size=\"101\"/><Column size=\"115\"/><Column size=\"99\"/><Column size=\"107\"/><Column size=\"61\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"모니터링차수\"/><Cell col=\"1\" text=\"모니터링기간\"/><Cell col=\"2\" text=\"사업수행자명\"/><Cell col=\"3\" text=\"사업자등록번호\"/><Cell col=\"4\" text=\"인증실적코드\"/><Cell col=\"5\" text=\"인증실적수량\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:dgr\" textAlign=\"center\" tooltiptext=\"bind:dgr\"/><Cell col=\"1\" text=\"bind:period\" textAlign=\"center\" tooltiptext=\"bind:period\"/><Cell col=\"2\" text=\"bind:nm\" textAlign=\"center\" tooltiptext=\"bind:nm\"/><Cell col=\"3\" text=\"bind:brno\" textAlign=\"center\" tooltiptext=\"bind:brno\"/><Cell col=\"4\" text=\"bind:cd\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" tooltiptext=\"bind:cd\"/><Cell col=\"5\" text=\"bind:qty\" tooltiptext=\"bind:qty\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"bind:chk\" tooltiptext=\"bind:chk\"/></Band></Format></Formats>");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divMesu","grdMedo00:40","329",null,"60","8",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staMedoSil","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divMesu.form);
            obj.set_taborder("0");
            obj.set_text("양수인      ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divMesu.addChild(obj.name, obj);

            obj = new Grid("grdMesu","grdMedo00:40","389",null,"269","26",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsMesuExcrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"146\"/><Column size=\"120\"/><Column size=\"89\"/><Column size=\"203\"/><Column size=\"100\"/><Column size=\"79\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"사업수행자명\"/><Cell col=\"1\" text=\"사업자등록번호\"/><Cell col=\"2\" text=\"대표자\"/><Cell col=\"3\" text=\"연평균 온실가스 배출 감축량\"/><Cell col=\"4\" text=\"승계량\"/><Cell col=\"5\" text=\"동의\"/></Band><Band id=\"body\"><Cell text=\"bind:bzentNm\" textAlign=\"center\" tooltiptext=\"bind:bzentNm\"/><Cell col=\"1\" text=\"bind:brno\" textAlign=\"center\" tooltiptext=\"bind:brno\"/><Cell col=\"2\" text=\"bind:rprsvNm\" textAlign=\"center\" tooltiptext=\"bind:rprsvNm\"/><Cell col=\"3\" text=\"bind:wpmpAtcnvrRdcqty\" displaytype=\"normal\" edittype=\"mask\" textAlign=\"right\" tooltiptext=\"bind:wpmpAtcnvrRdcqty\" maskeditformat=\"#,##0\" padding=\"5px\"/><Cell col=\"4\" text=\"bind:wpmpQty\" tooltiptext=\"bind:wpmpQty\" displaytype=\"normal\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\" padding=\"5px\"/><Cell col=\"5\" displaytype=\"expr:chk==&apos;Y&apos;?&apos;buttoncontrol&apos;:(chk==&apos;S&apos;?&apos;checkboxcontrol&apos;:&apos;normal&apos;)\" edittype=\"expr:chk==&apos;Y&apos;?&apos;button&apos;:(chk==&apos;S&apos;?&apos;checkbox&apos;:&apos;none&apos;)\" padding=\"5px\" textAlign=\"center\" text=\"bind:chkNm\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divScsnCn","20","grdMedo00:0",null,"60","774",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staScsnCn","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divScsnCn.form);
            obj.set_taborder("0");
            obj.set_text("신청내용      ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divScsnCn.addChild(obj.name, obj);

            obj = new Div("divCn","20","718",null,"780","20",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("9");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staDlayH4","0","411",null,"140","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH2","0","43",null,"150","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH1","0","0",null,"44","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Edit("edtDlayRstDgr","157","7",null,"30","7",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staScsnRsn","0","0","150","44",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("2");
            obj.set_text("승계사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH3","0","192",null,"220","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staCn","0","43","150","150",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("4");
            obj.set_text("승계사유내용");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayRsn","0","192","150","220",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("7");
            obj.set_text("권리 의무 승계 \r\n증빙자료");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayFile","0","411","150","140",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("8");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new TextArea("txaDlayRstRsn","157","48",null,"140","7",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_border("0");
            obj.set_padding("0px");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH4_00","0","550",null,"220","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayFile00","0","550","150","220",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("12");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Radio("rdoScsnGbnCd","157","9","699","30",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("13");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_innerdataset("dsScsnGbnCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_readonly("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiScsn01","155","205","800","195",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("14");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleScsn02","157","421","800","120",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("15");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiScsn03","155","563","800","195",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("16");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divH13","0","divH6:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbr","0","divH13:0",null,"1004","31",null,null,null,null,null,this);
            obj.set_taborder("18");
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

            obj = new Div("divH15","0","divDlbr:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Div("divEvl","0","divH15:0",null,"367","30",null,null,null,null,null,this);
            obj.set_taborder("20");
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
            obj.set_taborder("21");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","0","divH16:0",null,"1678","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divReg:20",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("11");
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
            //-- Default Layout : this.divHDoc.form
            obj = new Layout("default","",0,0,this.divHDoc.form,function(p){});
            this.divHDoc.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHDocList.form
            obj = new Layout("default","",0,0,this.divHDocList.form,function(p){});
            this.divHDocList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH0.form
            obj = new Layout("default","",0,0,this.divH0.form,function(p){});
            this.divH0.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRUsrInfo.form
            obj = new Layout("default","",0,0,this.divRUsrInfo.form,function(p){});
            this.divRUsrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHBiz.form
            obj = new Layout("default","",0,0,this.divHBiz.form,function(p){});
            this.divHBiz.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizInfo.form
            obj = new Layout("default","",0,0,this.divBizInfo.form,function(p){});
            this.divBizInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgm.form
            obj = new Layout("default","",0,0,this.divPrgm.form,function(p){});
            this.divPrgm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form.divRaonKSinglePgm01
            obj = new Layout("default","",0,0,this.divPrgmFile.form.divRaonKSinglePgm01.form,function(p){});
            this.divPrgmFile.form.divRaonKSinglePgm01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form
            obj = new Layout("default","",0,0,this.divPrgmFile.form,function(p){});
            this.divPrgmFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBizUnit.form
            obj = new Layout("default","",0,0,this.divBizUnit.form,function(p){});
            this.divBizUnit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingleUni01
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingleUni01.form,function(p){});
            this.divFile.form.divRaonKSingleUni01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5.form
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divMedo.form
            obj = new Layout("default","",0,0,this.divH6.form.divMedo.form,function(p){});
            this.divH6.form.divMedo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divMedoSu.form
            obj = new Layout("default","",0,0,this.divH6.form.divMedoSu.form,function(p){});
            this.divH6.form.divMedoSu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divMedoSuDtl.form
            obj = new Layout("default","",0,0,this.divH6.form.divMedoSuDtl.form,function(p){});
            this.divH6.form.divMedoSuDtl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divMedoSil.form
            obj = new Layout("default","",0,0,this.divH6.form.divMedoSil.form,function(p){});
            this.divH6.form.divMedoSil.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divMesu.form
            obj = new Layout("default","",0,0,this.divH6.form.divMesu.form,function(p){});
            this.divH6.form.divMesu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divScsnCn.form
            obj = new Layout("default","",0,0,this.divH6.form.divScsnCn.form,function(p){});
            this.divH6.form.divScsnCn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCn.form.divRaonKMultiScsn01
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form.divRaonKMultiScsn01.form,function(p){});
            this.divH6.form.divCn.form.divRaonKMultiScsn01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCn.form.divRaonKSingleScsn02
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form.divRaonKSingleScsn02.form,function(p){});
            this.divH6.form.divCn.form.divRaonKSingleScsn02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCn.form.divRaonKMultiScsn03
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form.divRaonKMultiScsn03.form,function(p){});
            this.divH6.form.divCn.form.divRaonKMultiScsn03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCn.form
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form,function(p){});
            this.divH6.form.divCn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divReg.form
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","divRUsrInfo.form.edtBzentNm","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divRUsrInfo.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divRUsrInfo.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divRUsrInfo.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divRUsrInfo.form.edtJbpsNm","value","dsUsrInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divRUsrInfo.form.edtTel","value","dsUsrInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divRUsrInfo.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBizUnit.form.rdoAplyClCd","value","dsUniInfo","aplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBizUnit.form.edtAgreeMgno","value","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBizUnit.form.cboAgreeClausCd","value","dsUniInfo","agreeClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBizUnit.form.cboBizFormCd","value","dsUniInfo","bizFormCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBizUnit.form.cboBizScalCd","value","dsUniInfo","bizScalCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divBizUnit.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divBizUnit.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divBizUnit.form.edtBizUnqno","value","dsUniInfo","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divBizUnit.form.rdoCertVldTypeCd","value","dsUniInfo","certVldTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divBizUnit.form.edtBfcnvrRdcqty","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divBizUnit.form.edtCnvrCoefCn","value","dsUniInfo","cnvrCoefCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divBizUnit.form.edtCnvrBassCn","value","dsUniInfo","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divBizUnit.form.cboRdcUnitCd","value","dsUniInfo","rdcUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divBizUnit.form.edtAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divBizUnit.form.cboBizFldCd","value","dsUniInfo","bizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divBizUnit.form.cboBizDtlsFldCd","value","dsUniInfo","bizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divBizUnit.form.rdoSop","value","dsUniInfo","sopUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divBizUnit.form.rdoOmge","value","dsUniInfo","omgeUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divBizUnit.form.edtSop","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divBizUnit.form.edtOmge","value","dsUniInfo","omgeUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divPrgm.form.staAgreeMgnoNm","text","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divPrgm.form.edtAgreeClausCd","value","dsPgmInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divPrgm.form.edtBizOrgtNm","value","dsPgmInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divPrgm.form.edtBizKrnNm","value","dsPgmInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divPrgm.form.edtCalFromTo","value","dsPgmInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divPrgm.form.edtBizFldCdSnm","value","dsPgmInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divPrgm.form.edtAgreeMgnoNm","value","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divPrgm.form.edtAgreeMgnoNm","tooltiptext","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divBizUnit.form.mseBfcnvrRdcqty","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divBizUnit.form.mseAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divBizUnit.form.mseSop","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divBizUnit.form.mseOmge","value","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divBizUnit.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divPrgm.form.chkReddPlusYn","value","dsPgmInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divPrgm.form.stcAgreeMgnoNm","text","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divPrgm.form.stcAgreeMgnoNm","tooltiptext","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBizUnit.form.edtAgreeClausCd","value","dsUniInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBizUnit.form.stcAgreeMgnoNm","text","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBizUnit.form.stcAgreeMgnoNm","tooltiptext","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divBizUnit.form.edtBizFormCd","value","dsUniInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divBizUnit.form.edtBizScalCd","value","dsUniInfo","bizScalCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divBizUnit.form.edtKoffPrnmntYmd","value","dsUniInfo","koffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divBizUnit.form.edtCertVldYmd","value","dsUniInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divBizUnit.form.taeCnvrBassCn","value","dsUniInfo","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divBizUnit.form.edtBizFldCdSnm","value","dsUniInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divBizUnit.form.mseSop","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divBizUnit.form.edtSopUnitCdNm","value","dsUniInfo","sopUnitCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divBizUnit.form.mseBfcnvrRdcqtyNo","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divBizUnit.form.edtBfcnvrRdcqtyNo","value","dsUniInfo","bfcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divBizUnit.form.mseAtcnvrRdcqtyNo","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divBizUnit.form.edtAtcnvrRdcqtyNo","value","dsUniInfo","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divH6.form.divCn.form.txaDlayRstRsn","value","dsUniInfo","scsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divH6.form.divCn.form.edtDlayRstCd","value","dsDlayList","dlayIdntyTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divH6.form.divCn.form.edtDlayRstDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divH6.form.divCn.form.rdoScsnGbnCd","value","dsUniInfo","scsnGbnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divBizInfo.form.edtBizOrgtNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divBizInfo.form.edtBizKrnNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divBizInfo.form.edtBizTypeCdNm","value","dsBizInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divBizInfo.form.edtPrcsTypeCdNm","value","dsBizInfo","prcsTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divBizInfo.form.edtGbn","value","dsUniInfo","dgrRegRsnCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divDlbr.form.divDlbrRst.form.edtDlbrDgr","value","dsDlbrList","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divDlbr.form.divDlbrRst.form.edtDlbrTypeCd","value","dsDlbrList","dlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divDlbr.form.divDlbrRst.form.edtDlbrYmd","value","dsDlbrList","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divDlbr.form.divDlbrRst.form.txaDlbrOpnn","value","dsDlbrList","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divDlbr.form.divDlbrReg.form.edtDlbrDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divDlbr.form.divDlbrReg.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divDlbr.form.divDlbrReg.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divDlbr.form.divDlbrOpnnRst.form.txaObjcAplyOpnn","value","dsDlbrList","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divDlbr.form.divDlbrOpnnRst.form.edtObjcAplyYmd","value","dsDlbrList","mdfcnDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divEvl.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divEvl.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divEvl.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divEvl.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divEvl.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divReg.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divReg.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divReg.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divReg.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divReg.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divReg.form.divDicDlbrReg.form.edtDicDlbrDgr","value","dsDicDlbrReg","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divReg.form.divDicDlbrReg.form.cboDicDlbrTypeCd","value","dsDicDlbrReg","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divReg.form.divDicDlbrReg.form.txaDicDlbrOpnn","value","dsDicDlbrReg","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divReg.form.divDlbrReg.form.edtDlbrDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divReg.form.divDlbrReg.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divReg.form.divDlbrReg.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divReg.form.divDicDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDicDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divReg.form.divDlbrOpnnReg.form.txaObjcAplyOpnn","value","dsDlbrReg","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divReg.form.divDlbrReg.form.edtBizUnqno","value","dsDlbrReg","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divReg.form.divDlbrReg.form.edtBizUnqno00","value","dsDlbrReg","rgtrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divBizUnit.form.stcSop","text","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divBizUnit.form.stcOmge","text","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divBizUnit.form.stcBfcnvrRdcqtyNo","text","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divBizUnit.form.stcAtcnvrRdcqtyNo","text","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("ScsnChgAplyS01.xfdl", function() {
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

        this.hDivH1 = 59;
        this.hDivPrgm = 800;
        this.hDivH2 = 59;
        this.hDivPrgmFile = 140;

        this.hDivHDocList = 259;

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


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
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
        	//trace("[AprvAplyS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

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

        	// 단위사업 - 사업계획서 파일
        	var objFileParam2 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divFile.form.divRaonKSingleUni01.form.fnInitRaonK(this, objFileParam2);

        	// 권리의무승계 - 파일
        	var objFileParam3 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"scsnDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileScsn01"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };
        	this.divH6.form.divCn.form.divRaonKMultiScsn01.form.fnInitRaonK(this, objFileParam3);

        	// 권리의무승계 - 사업계획서 파일
        	var objFileParam4 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"scsnBizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileScsn02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divH6.form.divCn.form.divRaonKSingleScsn02.form.fnInitRaonK(this, objFileParam4);

        	// 권리의무승계 - 기타증빙문서 파일
        	var objFileParam5 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"scsnEtcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileScsn03"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };
        	this.divH6.form.divCn.form.divRaonKMultiScsn03.form.fnInitRaonK(this, objFileParam5);

        	// 평가파일(조회용)
        	var objFileParam6 = { objDs:this.dsEvlRst								// 바인딩 데이터셋
        					,sBindCol:"evlFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileEvl02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divEvl.form.divEvlRst.form.divRaonKSingleEvl02.form.fnInitRaonK(this, objFileParam6);

        	// 심의결과파일(조회용)
        	var objFileParam7 = { objDs:this.dsDlbrList						// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbr02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlbr.form.divDlbrRst.form.divRaonKSingleDlbr02.form.fnInitRaonK(this, objFileParam7);

        	// 심의-이의신청결과파일(조회용)
        	var objFileParam8 = { objDs:this.dsDlbrList						// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileDlbrOpnn02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divDlbr.form.divDlbrOpnnRst.form.divRaonKSingleDlbrOpnn02.form.fnInitRaonK(this, objFileParam8);
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
         * @desc 등록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	this.scrollTo(0,0);
        	this.dsCurInfo.setColumn(0, "bizMngNo", objArgs.bizMngNo);
        	this.dsCurInfo.setColumn(0, "bizDgr", objArgs.bizDgr);
        	this.dsCurInfo.setColumn(0, "bizTypeCd", objArgs.bizTypeCd);
        	this.dsCurInfo.setColumn(0, "dgrRegRsnCd", objArgs.dgrRegRsnCd);
        	this.dsCurInfo.setColumn(0, "sts", objArgs.sts);
        	this.dsCurInfo.setColumn(0, "pgmBizMngNo", objArgs.pgmBizMngNo);

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

         	this.divH0.form.btnTopList.set_width(0);
         	this.divH0.form.btnTopReg.set_width(0);
         	this.divH0.form.btnTopPrivateReg.set_width(0);
         	this.divH0.form.btnTopRpt.set_width(0);
        	this.divH0.form.btnTopCfmRpt.set_width(0);
        	this.divH0.form.btnTopAdmCfmRpt.set_width(0);

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
        				trace("this.divPrgm.height >>> " + this.divPrgm.height);
        				if(this.divPrgm.height > 0) {
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
        				else {
        					trace("################### 프로그램-사업계획서 Start ###################");
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFilePgm01", objRtn);
        				}
        			}

        			break;
        		case "singleFilePgm01" :

        			if(objRtn.sDiv == "SEARCH") {

        				trace("################### 권리의무승계 Start ###################");
        				var scsnDataFlmno = this.dsUniInfo.getColumn(0, "scsnDataFlmno");
        				trace(">>> scsnDataFlmno : " + scsnDataFlmno);
        				if(this.gfnIsNull(scsnDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileScsn01", objRtn);
        				}else {
        					this.divH6.form.divCn.form.divRaonKMultiScsn01.form.fnSearchFile(scsnDataFlmno);
        				}
        			}

        			break;
        		case "multiFileScsn01" :

        			if(objRtn.sDiv == "SEARCH") {

        				trace("################### 권리의무승계 - 사업계획서 파일 Start ###################");
        				var scsnBizPlndFlmno = this.dsUniInfo.getColumn(0, "scsnBizPlndFlmno");
        				trace(">>> scsnBizPlndFlmno : " + scsnBizPlndFlmno);
        				if(this.gfnIsNull(scsnBizPlndFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileScsn02", objRtn);
        				}else {
        					this.divH6.form.divCn.form.divRaonKSingleScsn02.form.fnSearchFile(scsnBizPlndFlmno);
        				}
        			}

        			break;
        		case "singleFileScsn02" :

        			if(objRtn.sDiv == "SEARCH") {

        				trace("################### 권리의무승계 - 기타증빙문서 파일 Start ###################");
        				var scsnEtcDataFlmno = this.dsUniInfo.getColumn(0, "scsnEtcDataFlmno");
        				trace(">>> scsnEtcDataFlmno : " + scsnEtcDataFlmno);
        				if(this.gfnIsNull(scsnEtcDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileScsn03", objRtn);
        				}else {
        					this.divH6.form.divCn.form.divRaonKMultiScsn03.form.fnSearchFile(scsnEtcDataFlmno);
        				}
        			}

        			break;
        		case "multiFileScsn03" :

        			if(objRtn.sDiv == "SEARCH") {

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
        				// 심의결과 판단 필요.
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
        				trace("################### 상세화면 모든 파일 조회 완료!!! ###################");
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

        			var bfcnvrRdcqty = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "bfcnvrRdcqty"), 0);
        			bfcnvrRdcqty = bfcnvrRdcqty + " ";
        			this.divBizUnit.form.stcBfcnvrRdcqtyNo.set_text(bfcnvrRdcqty);
        			var atcnvrRdcqty = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "atcnvrRdcqty"), 0);
        			atcnvrRdcqty = atcnvrRdcqty + " ";
        			this.divBizUnit.form.stcAtcnvrRdcqtyNo.set_text(atcnvrRdcqty);

        			// sop mask
        			if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0001") {
        				var sop = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "sopRdcqty"), 0);
        				sop = sop + " ";
        				this.divBizUnit.form.stcSop.set_text(sop);
        			}
        			else if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0002") {
        				var sop = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "sopRdcqty"), 2);
        				sop = sop + " ";
        				this.divBizUnit.form.stcSop.set_text(sop);
        			}
        			else {
        				var sop = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "sopRdcqty"), 0);
        				sop = sop + " ";
        				this.divBizUnit.form.stcSop.set_text(sop);
        			}

        			// omge mask
        			if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0001") {
        				var omge = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "omgeRdcqty"), 0);
        				omge = omge + " ";
        				this.divBizUnit.form.stcOmge.set_text(omge);
        			}
        			else if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0002") {
        				var omge = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "omgeRdcqty"), 2);
        				omge = omge + " ";
        				this.divBizUnit.form.stcOmge.set_text(omge);
        			}
        			else {
        				var omge = this.gfnAppendComma(this.dsUniInfo.getColumn(0, "omgeRdcqty"), 0);
        				omge = omge + " ";
        				this.divBizUnit.form.stcOmge.set_text(omge);
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

        			this.divPrgm.form.resetScroll();
        			this.divBizUnit.form.resetScroll();
        			this.resetScroll();

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
        		case "agree" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "dlbrReq" :
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

        			this.fnChangeDiv(objArgs);

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallAgree = function()
        {
        	//trace("참여자확인 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/scsnChgAply/updateAprvAplyAgree.irs";
        	}else {
        		callUrl = "/adm/aply/scsnChgAply/updateAprvAplyAgree.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "agree";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsMesuExcrList=dsMesuExcrList:N";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

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

        this.fnCallDtlInfo = function()
        {
        	//trace("상세 호출...");

        	var callUrl = "";
        	var datasets = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/scsnChgAply/selectAprvAplyDetail.irs";
        	}else {
        		callUrl = "/adm/aply/scsnChgAply/selectAprvAplyDetail.irs";
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
        	datasets = datasets + "dsScsnExcrList=dsScsnExcrList ";
        	datasets = datasets + "dsScsnMedoList=dsScsnMedoList ";
        	datasets = datasets + "dsQtyList=dsQtyList ";
        	datasets = datasets + "dsMesuExcrList=dsMesuExcrList ";
        	datasets = datasets + "dsEvlReg=dsEvlReg ";
        	datasets = datasets + "dsEvlRst=dsEvlRst ";
        	datasets = datasets + "dsDlbrList=dsDlbrList ";
        	datasets = datasets + "dsDlbrReg=dsDlbrReg";

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

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnDtlDivCtrl = function()
        {
        	trace("========================11111111111111111111");
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
        			//this.divReg.form.divE2.form.staEvlRegTit.set_text("평가결과 등록   ");
        			//this.divReg.form.divE2.set_height(this.hDivE2);
        			//this.divReg.form.divEvlReg.set_height(this.hDivEvlReg);
        			hReg = hReg + this.hDivEvlReg;
        		}
        		else {
        			//this.divReg.form.divEvlReg.set_height(0);
        		}
        		// 사전심의
        		if(isDivDicDlbrReg || isDivDicDlbrOpnnReg) {
        			if(isDivDicDlbrReg) {
        				//this.divReg.form.divE2.form.staEvlRegTit.set_text("사전심의결과 등록   ");
        				//this.divReg.form.divE2.set_height(this.hDivE2);
        				//this.divReg.form.divDicDlbrReg.set_height(this.hDivDicDlbrReg);
        				//this.divReg.form.divDicDlbrOpnnReg.set_height(0);
        				hReg = hReg + this.hDivDicDlbrReg;
        			}
        			if(isDivDicDlbrOpnnReg) {
        				//this.divReg.form.divE2.form.staEvlRegTit.set_text("이의신청  ");
        				//this.divReg.form.divE2.set_height(this.hDivE2);
        				//this.divReg.form.divDicDlbrReg.set_height(0);
        				//this.divReg.form.divDicDlbrOpnnReg.set_height(this.hDivDicDlbrOpnnReg);
        				hReg = hReg +this.hDivDicDlbrOpnnReg;
        			}
        		}
        		else {
        			//this.divReg.form.divDicDlbrReg.set_height(0);
        			//this.divReg.form.divDicDlbrOpnnReg.set_height(0);
        		}
        		// 심의
        		if(isDivDlbrReg || isDivDlbrOpnnReg) {
        			if(isDivDlbrReg) {
        				//this.divReg.form.divE2.form.staEvlRegTit.set_text("심의결과 등록   ");
        				//this.divReg.form.divE2.set_height(this.hDivE2);
        				//this.divReg.form.divDlbrReg.set_height(this.hDivDlbrReg);
        				//this.divReg.form.divDlbrOpnnReg.set_height(0);
        				hReg = hReg + this.hDivDlbrReg;
        			}
        			if(isDivDlbrOpnnReg) {
        				//this.divReg.form.divE2.form.staEvlRegTit.set_text("이의신청  ");
        				//this.divReg.form.divE2.set_height(this.hDivE2);
        				//this.divReg.form.divDlbrReg.set_height(0);
        				//this.divReg.form.divDlbrOpnnReg.set_height(this.hDivDlbrOpnnReg);
        				hReg = hReg +this.hDivDlbrOpnnReg;
        			}
        		}
        		else {
        			//this.divReg.form.divDlbrReg.set_height(0);
        			//this.divReg.form.divDlbrOpnnReg.set_height(0);
        		}
        		// 사업착수
        		if(isDivKoffReg) {
        			//this.divReg.form.divE2.form.staEvlRegTit.set_text("사업착수보고   ");
        			//this.divReg.form.divE2.set_height(this.hDivE2);
        			//this.divReg.form.divKoffReg.set_height(this.hDivKoffReg);
        			hReg = hReg + this.hDivKoffReg;
        		}
        		else {
        			//this.divReg.form.divKoffReg.set_height(0);
        		}

        		hReg = hReg + this.hDivH16;
        		this.divReg.set_height(hReg);
        		this.divH16.set_height(this.hDivH16);
        		this.divReg.set_url("");
        		this.divReg.set_url("Biz_biz::aply/AprvAplyS11.xfdl");

        		// 착수지연 스위칭을 위해 같이 호출함.
        		//this.divDlayReg.set_url("");
        		//this.divDlayReg.set_url("Biz_biz::aply/AprvAplyS12.xfdl");
        	}
        	else {
        		//this.divReg.form.divE2.set_height(0);
        		this.divReg.set_height(0);
        		this.divH16.set_height(0);
        	}
        // 	this.divReg.form.divE2.form.resetScroll();
        // 	this.divReg.form.divEvlReg.form.resetScroll();
        // 	this.divReg.form.divDicDlbrReg.form.resetScroll();
        // 	this.divReg.form.divDicDlbrOpnnReg.form.resetScroll();
        // 	this.divReg.form.divDlbrReg.form.resetScroll();
        // 	this.divReg.form.divDlbrOpnnReg.form.resetScroll();
        // 	this.divReg.form.divKoffReg.form.resetScroll();
        	this.divH16.form.resetScroll();
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

        	// 최종 호출.
        	this.fnDivCtrl();
        	trace("========================2222222222222222222222222");
        };


        this.fnDivCtrl = function()
        {
        	// div top 설정
        	var bizTypeCd = this.dsCurInfo.getColumn(0, "bizTypeCd");
        	trace("2222222222222222222 bizTypeCd : " + bizTypeCd);
        	if(bizTypeCd == "BTC0003")	// 프로그램사업
        	{
        		this.divH3.form.staRBizUnit.set_text("단위 사업정보    ");
        		this.divH1.set_height(this.hDivH1);
        		this.divPrgm.set_height(this.hDivPrgm);
        		this.divH2.set_height(this.hDivH2);
        		this.divPrgmFile.set_height(this.hDivPrgmFile);

        		this.divH3.form.resetScroll();
        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        	}
        	else {
        		trace("11111111111111111111");
        		this.divH3.form.staRBizUnit.set_text("사업정보      ");
        		this.divH1.set_height(0);
        		this.divPrgm.set_height(0);
        		this.divH2.set_height(0);
        		this.divPrgmFile.set_height(0);

        		this.divH3.form.resetScroll();
        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        		trace("2222222222222222222");
        	}

        	this.resetScroll();

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

         	if(isBtnTopList) { this.divH0.form.btnTopList.set_width(this.wBtnTopList); } else { this.divH0.form.btnTopList.set_width(0); }
         	if(isBtnTopReg) { this.divH0.form.btnTopReg.set_width(this.wBtnTopReg); } else { this.divH0.form.btnTopReg.set_width(-3); }
         	if(isBtnTopPrivateReg) { this.divH0.form.btnTopPrivateReg.set_width(this.wBtnTopPrivateReg); } else { this.divH0.form.btnTopPrivateReg.set_width(-3); }
         	if(isBtnTopRpt) { this.divH0.form.btnTopRpt.set_width(this.wBtnTopRpt); } else { this.divH0.form.btnTopRpt.set_width(-3); }
        	if(isBtnTopCfmRpt) { this.divH0.form.btnTopCfmRpt.set_width(this.wBtnTopCfmRpt); } else { this.divH0.form.btnTopCfmRpt.set_width(-3); }
        	if(isBtnTopAdmCfmRpt) { this.divH0.form.btnTopAdmCfmRpt.set_width(this.wBtnTopAdmCfmRpt); } else { this.divH0.form.btnTopAdmCfmRpt.set_width(-3); }

         	this.divComBtn.form.resetScroll();
        	this.divH0.form.resetScroll();

        	// div 컨트롤
        	this.fnCallDivCtrl();

        	// 업무파일 정보 호출
        	this.fnCallFileStart("uni01FileLoading");

        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        // 수정 버튼.
        this.divComBtn_btnMod_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0005") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("SCSN3");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);

        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/ScsnChgAplyS02.xfdl");
        		}
        		else {
        			this.fnCallMod();
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

        // 상위 목록 버튼
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

        // 참여자 확인
        this.divComBtn_btnExcrAgre_onclick = function(obj,e)
        {
        	this.fnCallAgree();
        };

        // 양수인 그리드 참여자 확인.
        this.divH6_grdMesu_oncellclick = function(obj,e)
        {
        	var chk = this.dsMesuExcrList.getColumn(this.dsMesuExcrList.rowposition, "chk");

        	if(e.cell == 5) {
        		if(chk == "Y") {
        			this.fnCallAgree();
        		}
        	}
        };


        this.divHDoc_btnDocList_onclick = function(obj,e)
        {
        	//trace("이력보기 호출");
        	if(this.divHDocList.height < 1) {
        		this.divHDocList.set_height(this.hDivHDocList);
        		this.divHDocList.form.resetScroll();
        	}
        	else {
        		this.divHDocList.set_height(0);
        		this.divHDocList.form.resetScroll();
        	}
        	this.resetScroll();
        };

        this.divComBtn_btnEvlSave_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.form.divDetail.form.divReg.form.fnCallEvlSave();
        };

        this.divComBtn_btnModDoc_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0005") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("SCSN4");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);

        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/ScsnChgAplyS02.xfdl");
        		}
        		else {
        			this.fnCallReg();
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

        // 문서재제출 클릭.
        this.divComBtn_btnReDoc_onclick = function(obj,e)
        {
        	var dgrRegRsnCd = this.dsCurInfo.getColumn(0, "dgrRegRsnCd");

        	if(dgrRegRsnCd == "BGC0005") {
        		this.getOwnerFrame().form.divWork.form.fnSetIsFuncId("SCSN2");

        		if(!this.getOwnerFrame().form.divWork.form.fnRtnRegDiv()) {		// 최초 처음 로딩 필요.
        			this.setWaitCursor(true);

        			this.getOwnerFrame().form.divWork.form.divReg.set_url("");
        			this.getOwnerFrame().form.divWork.form.divReg.set_url("Biz_biz::aply/ScsnChgAplyS02.xfdl");
        		}
        		else {
        			this.fnCallDoc();
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

        // 심의요청
        this.divComBtn_btnDlbrReq_onclick = function(obj,e)
        {
        	this.fnCallDlbrReq();
        };

        // 심의결과 제출
        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.form.divDetail.form.divReg.form.fnCallDlbrSave();
        };

        // 이의신청
        this.divComBtn_btnOpnnSave_onclick = function(obj,e)
        {
        	var prcsTypeCd = this.dsUniInfo.getColumn(0, "prcsTypeCd");

        	if(prcsTypeCd == "PTC0011") {
        		this.getOwnerFrame().form.divWork.form.divDetail.form.divReg.form.fnCallDicDlbrOpnnSave();
        	}
        	else if(prcsTypeCd == "PTC0017") {
        		this.getOwnerFrame().form.divWork.form.divDetail.form.divReg.form.fnCallDlbrOpnnSave();
        	}
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divHDoc.form.btnDocList.addEventHandler("onclick",this.divHDoc_btnDocList_onclick,this);
            this.divHDocList.form.grdDocList.addEventHandler("oncellclick",this.divH2_grdDocList_oncellclick,this);
            this.divH0.form.btnTopList.addEventHandler("onclick",this.btnTopList_onclick,this);
            this.divH0.form.btnTopReg.addEventHandler("onclick",this.divH3_btnTopReg_onclick,this);
            this.divH0.form.btnTopRpt.addEventHandler("onclick",this.divH3_btnTopRpt_onclick,this);
            this.divH0.form.btnTopCfmRpt.addEventHandler("onclick",this.divH3_btnTopCfmRpt_onclick,this);
            this.divH0.form.btnTopAdmCfmRpt.addEventHandler("onclick",this.divH3_btnTopAdmCfmRpt_onclick,this);
            this.divPrgm.form.stAbplcNm.addEventHandler("onclick",this.div01_00_00_sta08_00_01_onclick,this);
            this.divPrgm.form.staLine3.addEventHandler("onclick",this.Static_onclick,this);
            this.divPrgm.form.staBizEnfcPlcNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divH2.form.staRPrgmFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH3.form.staRBizUnit.addEventHandler("onclick",this.sta00_00_onclick,this);
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
            this.divBizUnit.form.rdoAplyClCd.addEventHandler("onitemchanged",this.divRBizUnit_rdoAplyClCd_onitemchanged,this);
            this.divBizUnit.form.btnAgreeMgno.addEventHandler("onclick",this.divRBizUnit_btnAgreeMgno_onclick,this);
            this.divBizUnit.form.edtBizOrgtNm.addEventHandler("onkillfocus",this.divRBizUnit_edtBizOrgtNm_onkillfocus,this);
            this.divBizUnit.form.staSopNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staOmgeNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH4.form.staRFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH5.form.staRExcrList.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divH6.form.divMedo.form.staMedo.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH6.form.grdMedo.addEventHandler("oncellclick",this.divH6_grdMedo_oncellclick,this);
            this.divH6.form.divMedoSu.form.staMedoSu.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH6.form.divMedoSil.form.staMedoSil.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH6.form.divMesu.form.staMedoSil.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH6.form.grdMesu.addEventHandler("oncellclick",this.divH6_grdMesu_oncellclick,this);
            this.divH6.form.divScsnCn.form.staScsnCn.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH6.form.divCn.form.staDlayRsn.addEventHandler("onclick",this.divH6_divCn_staDlayRsn_onclick,this);
            this.divH6.form.divCn.form.staDlayFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH6.form.divCn.form.txaDlayRstRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divH6.form.divCn.form.staDlayFile00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH6.form.divCn.form.rdoScsnGbnCd.addEventHandler("onitemchanged",this.divH6_divCn_rdoScsnGbnCd_onitemchanged,this);
            this.divDlbr.form.divDlbrH1.form.staDlbrRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbr.form.divDlbrList.form.grdDlbrList.addEventHandler("oncellclick",this.divDlbr_divDlbrList_grdDlbrList_oncellclick,this);
            this.divDlbr.form.divDlbrRst.form.staDlbrFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbr.form.divDlbrRst.form.txaDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbr.form.divDlbrH2.form.staDlbrOpnnRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbr.form.divDlbrOpnnRst.form.txaObjcAplyOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divEvl.form.divE1.form.staEvlRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divEvl.form.divEvlRst.form.staEvlFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
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
            this.dsScsnExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
            this.dsScsnMedoList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
            this.dsQtyList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
            this.dsMesuExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
        };
        this.loadIncludeScript("ScsnChgAplyS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
