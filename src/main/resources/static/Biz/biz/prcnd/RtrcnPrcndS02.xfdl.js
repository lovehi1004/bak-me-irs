(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rtrcnPrcndS02");
            this.set_titletext("사업통합신청등록수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRegInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pgmBizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegBtnCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"btnList\" type=\"STRING\" size=\"256\"/><Column id=\"btnReg\" type=\"STRING\" size=\"256\"/><Column id=\"btnRegTmp\" type=\"STRING\" size=\"256\"/><Column id=\"btnRegRe\" type=\"STRING\" size=\"256\"/><Column id=\"btnDocRe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"scsnGbnCd\" type=\"STRING\" size=\"256\"/><Column id=\"scsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"scsnDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"scsnBizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"scsnEtcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"masterYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"agreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"instAgreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"lstAgreYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"lstAgreYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsPgmEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmInfoVew", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtrcnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDmndClCd\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDmndCn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"objcPoseOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcPoseFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcPoseDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDt\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtrcnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"59","30",null,null,null,null,null,this);
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

            obj = new Div("divBizUnit","0","divH3:0",null,"1085","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("사업장명");
            this.addChild(obj.name, obj);

            obj = new Static("staLine10","0","585",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine7","0","456",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine2","-22","-1",null,"44","-14",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine6","0","413",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","1","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("2");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","413","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("4");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","456","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("5");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","585","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("7");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine5","-36","370",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","370","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("10");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","783","370","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("18");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine8","0","499",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizUnqno","0","499","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("20");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine9","-36","542",null,"44","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldTypeCd","0","542","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("22");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staKoffPrnmntYmd","783","542","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("23");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine11","0","628",null,"117","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","628","150","117",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("25");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine12","783","671",null,"74","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","628","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("26");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","671","150","74",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("28");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine13","0","788",null,"284","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","788","150","284",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("30");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine3","-26","41",null,"44","-10",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","41","150","44",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("32");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine4","0","81",null,"246","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","81","150","246",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("34");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAgreeMgnoNm","157","49","218","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("41");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","stcAgreeMgnoNm:3","47","130","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("11");
            obj.set_text("협정·약정·MOU 조회");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","420","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("13");
            obj.set_inputtype("sign,space,symbol,numberandenglish");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","463","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","157","506","620","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoCertVldTypeCd","157","549","383","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCertVldTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCnvrCoefCn","940","636",null,"30","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine14","0","744",null,"45","0",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staSop","0","744","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("36");
            obj.set_text("SOP");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staOmge","783","744","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("37");
            obj.set_text("OMGE");
            obj.set_cssclass("sta_WF_Label");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine16","-26","326",null,"45","-10",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("staBplcNm","0","326","150","45",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("39");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","334","1193","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCd","157","5",null,"30","793",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("40");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdBizEnfcPlcList","157","92",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("42");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCd","157","380","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("43");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizScalCd","940","380","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("44");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtKoffPrnmntYmd","940","549","616","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("45");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCertVldYmd","157","595","303","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("46");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new TextArea("taeCnvrBassCn","940","678","616","60",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("47");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitMhdlg","157","835",null,"228","7",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("48");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"600\"/><Column size=\"90\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"방법론(국문)명\"/><Cell col=\"2\" text=\"방법론\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"1\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/><Cell col=\"2\" text=\"방법론 조회\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"5px\"/></Band></Format></Formats>");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizFldCdSnm","157","799","543","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("49");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","300","791","236","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("50");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcOmge","940","752","171","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("60");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtOmge","stcOmge:3","752",null,"30","147",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcSop","161","752","171","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("59");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtSopUnitCdNm","stcSop:3","752",null,"30","937",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcBfr","156","653","134","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("53");
            obj.set_text("환산 전 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcBfcnvrRdcqtyNo","stcBfr:3","653","129","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("57");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBfcnvrRdcqtyNo","stcBfcnvrRdcqtyNo:3","653",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAft","156","694","134","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("55");
            obj.set_text("환산 후 감축량 : ");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Static("stcAtcnvrRdcqtyNo","stcAft:3","694","129","30",null,null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("58");
            obj.set_fittocontents("width");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAtcnvrRdcqtyNo","stcAtcnvrRdcqtyNo:3","694",null,"30","954",null,null,null,null,null,this.divBizUnit.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_font("italic 12px/normal \"NotoSansKR\"");
            obj.set_text("");
            this.divBizUnit.addChild(obj.name, obj);

            obj = new Div("divH4","0","divBizUnit:1",null,"59","30",null,null,null,null,null,this);
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
            obj.set_text("취소 신청");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH5.addChild(obj.name, obj);

            obj = new Div("divH6","0","divH5:0",null,"540","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("WHITE");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divCn","20","68",null,"460","20",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staDlayH2","0","43",null,"44","0",null,null,null,null,null,this.divH6.form.divCn.form);
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

            obj = new Static("staCanGbn","0","0","150","44",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("2");
            obj.set_text("취소유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH3","0","86",null,"150","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staCn","0","43","150","44",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("4");
            obj.set_text("취소사유구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staCanRsn","0","86","150","150",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("7");
            obj.set_text("취소사유내용");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new TextArea("txaCanRsn","157","93",null,"130","7",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("false");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayH4_00","0","229",null,"220","0",null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Static("staDlayFile00","0","229","150","220",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Radio("rdoCanGbnCd","157","9","699","30",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("11");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_innerdataset("dsRtrcnDmndTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiCan01","155","242","800","195",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("12");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Combo("cboRtrcnDmndClCd","157","50","230","30",null,null,null,null,null,null,this.divH6.form.divCn.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsRtrcnDmndClCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divH6.form.divCn.addChild(obj.name, obj);

            obj = new Div("divCanCn","20","8",null,"60","774",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divH6.addChild(obj.name, obj);

            obj = new Static("staCanCn","0","20","519","30",null,null,null,null,null,null,this.divH6.form.divCanCn.form);
            obj.set_taborder("0");
            obj.set_text("취소내용  ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH6.form.divCanCn.addChild(obj.name, obj);

            obj = new Div("divRComBtn","0","divH6:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"0","88","32","btnList:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("1");
            obj.set_text("사업취소");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnRegTmp",null,"0","88","32","btnReg:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("3");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnRegRe",null,"0","88","32","btnRegTmp:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("2");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnDocRe",null,"0","101","32","btnRegRe:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("4");
            obj.set_text("문서재제출");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnRegReTmp",null,"0","88","32","btnDocRe:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("5");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnDocReTmp",null,"0","88","32","btnRegReTmp:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("6");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Grid("grd00","1054","5","513","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsRegInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"bizMngNo\"/><Cell col=\"1\" text=\"bizDgr\"/><Cell col=\"2\" text=\"sts\"/><Cell col=\"3\" text=\"dgrRegRsnCd\"/><Cell col=\"4\" text=\"pgmBizMngNo\"/><Cell col=\"5\" text=\"bizTypeCd\"/></Band><Band id=\"body\"><Cell text=\"bind:bizMngNo\"/><Cell col=\"1\" text=\"bind:bizDgr\"/><Cell col=\"2\" text=\"bind:sts\"/><Cell col=\"3\" text=\"bind:dgrRegRsnCd\"/><Cell col=\"4\" text=\"bind:pgmBizMngNo\"/><Cell col=\"5\" text=\"bind:bizTypeCd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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

            //-- Default Layout : this.divH6.form.divCn.form.divRaonKMultiCan01
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form.divRaonKMultiCan01.form,function(p){});
            this.divH6.form.divCn.form.divRaonKMultiCan01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCn.form
            obj = new Layout("default","",0,0,this.divH6.form.divCn.form,function(p){});
            this.divH6.form.divCn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form.divCanCn.form
            obj = new Layout("default","",0,0,this.divH6.form.divCanCn.form,function(p){});
            this.divH6.form.divCanCn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRComBtn.form
            obj = new Layout("default","",0,0,this.divRComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("3");
            this.divRComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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

            obj = new BindItem("item43","divH6.form.divCn.form.txaCanRsn","value","dsRtrcnInfo","rtrcnDmndCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divH6.form.divCn.form.edtDlayRstCd","value","dsDlayList","dlayIdntyTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divH6.form.divCn.form.edtDlayRstDgr","value","dsDlayList","dlayPrcsDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divH6.form.divCn.form.rdoCanGbnCd","value","dsRtrcnInfo","rtrcnDmndTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divBizUnit.form.stcBfcnvrRdcqtyNo","text","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divBizUnit.form.stcAtcnvrRdcqtyNo","text","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divBizUnit.form.stcSop","text","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divBizUnit.form.stcOmge","text","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divH6.form.divCn.form.cboRtrcnDmndClCd","value","dsRtrcnInfo","rtrcnDmndClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("RtrcnPrcndS02.xfdl", function() {
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
        this.wBtnReg = 88;
        this.wBtnRegTmp = 88;
        this.wBtnRegRe = 88;
        this.wBtnRegReTmp = 88;
        this.wBtnDocRe = 101;
        this.wBtnDocReTmp = 88;

        this.hDivH1 = 59;
        this.hDivH2 = 59;
        this.hDivPrgm = 800;
        this.hDivPrgmFile = 140;

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
        	this.getOwnerFrame().form.divWork.form.fnRegLoadComplete();
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
        					,sCallbackId:"singleFilePgm01"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divPrgmFile.form.divRaonKSinglePgm01.form.fnInitRaonK(this, objFileParam1);

        	// 단위사업 - 사업계획서 파일
        	var objFileParam2 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni01"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divFile.form.divRaonKSingleUni01.form.fnInitRaonK(this, objFileParam2);

        	// 취소 파일
        	var objFileParam3 = { objDs:this.dsRtrcnInfo								// 바인딩 데이터셋
        					,sBindCol:"rtrcnDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileCan01"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divH6.form.divCn.form.divRaonKMultiCan01.form.fnInitRaonK(this, objFileParam3);

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
        	//trace("[AprvAplyS02]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsRegInfo.setColumn(0, "bizMngNo", objArgs.bizMngNo);
        	this.dsRegInfo.setColumn(0, "bizDgr", objArgs.bizDgr);
        	this.dsRegInfo.setColumn(0, "sts", objArgs.sts);
        	this.dsRegInfo.setColumn(0, "dgrRegRsnCd", objArgs.dgrRegRsnCd);
        	this.dsRegInfo.setColumn(0, "pgmBizMngNo", objArgs.pgmBizMngNo);
        	this.dsRegInfo.setColumn(0, "bizTypeCd", objArgs.bizTypeCd);

        	// 버튼 설정 - init
         	this.divRComBtn.form.btnList.set_width(0);
         	this.divRComBtn.form.btnReg.set_width(0);
         	this.divRComBtn.form.btnRegTmp.set_width(0);
         	this.divRComBtn.form.btnRegRe.set_width(0);

        	// REDD PLUS 초기화.
        	this.divPrgm.form.chkReddPlusYn.set_visible(false);
        	this.divBizUnit.form.chkReddPlusYn.set_visible(false);

        	// 사업기본정보 - 데이터셋 초기화
        	this.dsBizInfo.deleteAll();
        	this.dsBizInfo.addRow();
        	this.dsBizInfo.setColumn(0, "bizTypeCd", "");

        	// 프로그램사업 - 데이터셋 초기화
        	this.dsPgmInfo.deleteAll();
        	this.dsPgmInfo.addRow();
        	this.dsPgmInfo.setColumn(0, "agreeClausCd", "");
        	this.dsPgmInfo.setColumn(0, "bizFldCd", "");
        	this.dsPgmInfo.setColumn(0, "bizDtlsFldCd", "");

        	// 단위사업 - 데이터셋 초기화
        	this.dsUniInfo.deleteAll();
        	this.dsUniInfo.addRow();
        	this.dsUniInfo.setColumn(0, "aplyClCd", "");
        	this.dsUniInfo.setColumn(0, "agreeClausCd", "");
        	this.dsUniInfo.setColumn(0, "bizFormCd", "");
        	this.dsUniInfo.setColumn(0, "bizScalCd", "");
        	this.dsUniInfo.setColumn(0, "certVldTypeCd", "");
        	this.dsUniInfo.setColumn(0, "rdcUnitCd", "");
        	this.dsUniInfo.setColumn(0, "bizFldCd", "");
        	this.dsUniInfo.setColumn(0, "bizDtlsFldCd", "");
        	this.dsUniInfo.setColumn(0, "reddPlusYn", "N");
        	this.dsUniInfo.setColumn(0, "scsnGbnCd", "");

        	this.dsPgmNtnList.clearData();
        	this.dsPgmMhdlgList.clearData();
        	this.dsUniNtnList.clearData();
        	this.dsUniMhdlgList.clearData();

        	// 파일 데이터셋 초기화수행
        	this.dsPgmBizPlndFile.clearData();
        	this.dsUniBizPlndFile.clearData();
        	this.dsRtrcnFile.clearData();

        	this.getOwnerFrame().form.divWork.form.divDetail.set_url("");

        	// 사업취소 최초 등록
        	if(objArgs.sts == "REGUP") {
        		// 사업 검색 팝업 호출
        		this.fnCallBizPop();
        	}
        };

        this.fnCallBizPop = function()
        {
        	var sPopupId 	= "popModalScsnChgAplyP01";
        	var sMnuId 		= "MN04011000";
        	var oPosition	= {width:1300,height:750};
        	var objArgs		= {};

        	var oOption		= {callback:"fnPopupCallback",titletext:"사업검색 모달(Modal) 처리 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function(callBackId)
        {
        	trace("################### 단위-사업계획서 조회 Start ###################");
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

        				// 프로그램인지, 단위인지 분기처리 필요
        				var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        				var sts = this.dsRegInfo.getColumn(0, "sts");
        				trace("############################>>> " + bizTypeCd + " <<<############################");
        				trace("############################>>> " + sts + " <<<############################");

        				if(bizTypeCd == "BTC0003")	// 프로그램사업
        				{
        					// 단위사업인 경우 UI 변경.
        					if(sts == "PGMREG" || sts == "PGMMOD"
        							|| sts == "PGMREGREUP" || sts == "PGMREGRE"
        							|| sts == "PGMREGDLBRUP" || sts == "PGMREGDLBR"
        							|| sts == "PGMDOCREUP" || sts == "PGMDOCRE"
        							|| sts == "PGMDOCDLBRUP" || sts == "PGMDOCDLBR") {
        						// 조회용
        						trace("################### 프로그램-사업계획서 조회용 Start ###################");
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
        						trace("################### 프로그램-사업계획서 조회용 Start ###################");
        						var bizPlndFlmno = this.dsPgmInfo.getColumn(0, "bizPlndFlmno");
        						trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        						if(this.gfnIsNull(bizPlndFlmno)) {
        							var objRtn = {sDiv:"SEARCH"};
        							this.fnRaonKFileCallback("singleFilePgm01", objRtn);
        						}else {
        							this.divPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile(bizPlndFlmno);
        						}
        					}
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFilePgm01", objRtn);
        				}
        			}
        			break;
        		case "singleFilePgm01" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 취소 첨부파일 Start ###################");
        				var rtrcnDmndFlmno = this.dsRtrcnInfo.getColumn(0, "rtrcnDmndFlmno");
        				trace(">>> rtrcnDmndFlmno : " + rtrcnDmndFlmno);
        				if(this.gfnIsNull(rtrcnDmndFlmno)) {
        					this.divH6.form.divCn.form.divRaonKMultiCan01.form.fnSearchFile("");
        				}else {
        					this.divH6.form.divCn.form.divRaonKMultiCan01.form.fnSearchFile(rtrcnDmndFlmno);
        				}
        			}

        			break;
        		case "multiFileCan01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsRtrcnFile.clearData();
        				var nRowCnt = this.dsRtrcnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsRtrcnFile.clearData();
        				var nRowCnt = this.dsRtrcnFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsRtrcnFile.clearData();
        				var nRowCnt = this.dsRtrcnFile.copyData(objRtn.objDs);
        			}

        			break;
        		default:
        			break;
        	}
        };

        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{

        		default:
        			break;
        	}
        };

        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	switch (sPopupId)
        	{
        		case "msgAlert01" :
        			// 후처리 코드
        			break;
        		case "msgAlert02" :
        			this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        			this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        			this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        			// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        			var objArgs = {};
        			objArgs.isReLoad	= "Y";

        			this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);

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
        			case -2 :

        				// 화면전환
        				this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        				this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        				this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        				// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        				var objArgs = {};
        				objArgs.isReLoad	= "N";

        				this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "modInfo" :

        			// 협정약정명
        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");
        			this.divBizUnit.form.stcAgreeMgnoNm.set_text(this.dsUniInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			this.pgmBizFldCd = this.dsPgmInfo.getColumn(0, "bizFldCd");
        			this.uniBizFldCd = this.dsUniInfo.getColumn(0, "bizFldCd");

        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdPgm.filter("bizFldCdMgno == '"+this.pgmBizFldCd+"'");
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '"+this.uniBizFldCd+"'");

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
        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divBizUnit.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divBizUnit.form.chkReddPlusYn.set_visible(false);
        			}

        			// 변경 최초 등록시 사유를 초기화.
        			if(this.dsRegInfo.getColumn(0, "sts") == "REGUP") {
        				this.dsUniInfo.setColumn(0, "chgCn", "");
        			}

        			this.fnCallRegBtnCtrl();

        			break;
        		case "regBtnInfo" :
        			// 후처리 코드
        			this.fnRegBtnCtrl();
        			break;
        		case "save" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

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
        		case "popModalScsnChgAplyP01" :
        			if(objRtnValue["flag"] == "CLOSE") {

        				// 화면전환
        				this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        				this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        				this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        				// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        				var objArgs = {};
        				objArgs.isReLoad	= "N";

        				this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);

        			}
        			else if(objRtnValue["flag"] == "SELECT") {
        				this.dsRegInfo.setColumn(0, "bizMngNo", objRtnValue["pvBizMngNo"]);
        				this.dsRegInfo.setColumn(0, "bizDgr", objRtnValue["pvBizDgr"]);

        				// 사업 취소 대상 조회.
        				this.fnCallRegReUpFst();

        			}

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallRegBtnCtrl = function()
        {
        	//trace("등록수정 권한별 뷰처리 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "";
        	}else {
        		callUrl = "/adm/prcnd/rtrcnPrcnd/selectRtrcnPrcndRegBtnCtrl.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "regBtnInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= "dsRegBtnCtrl=dsRegBtnCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegReUpFst = function()
        {
        	//trace("최초 사업취소 등록 전 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "";
        	}else {
        		callUrl = "/adm/prcnd/rtrcnPrcnd/selectRtrcnPrcndBfrReg.irs";
        	}

        	var outDs = "";
        	outDs = outDs + "dsRegUsrInfo=dsRegUsrInfo ";
        	outDs = outDs + "dsUsrInfo=dsUsrInfo ";
        	outDs = outDs + "dsBizInfo=dsBizInfo ";
        	outDs = outDs + "dsPgmInfo=dsPgmInfo ";
        	outDs = outDs + "dsPgmNtnList=dsPgmNtnList ";
        	outDs = outDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	outDs = outDs + "dsUniNtnList=dsUniNtnList ";
        	outDs = outDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	outDs = outDs + "dsUniInfo=dsUniInfo ";
        	outDs = outDs + "dsExcrList=dsExcrList ";
        	outDs = outDs + "dsRtrcnInfo=dsRtrcnInfo";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "modInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        this.fnCallSave = function()
        {
        	//trace("사업취소 저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "";
        	}else {
        		callUrl = "/adm/prcnd/rtrcnPrcnd/insertRtrcnPrcndSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsRtrcnInfo=dsRtrcnInfo ";
        	inDs = inDs + "dsRtrcnFile=dsRtrcnFile";

        	var objArgs = {};
         	objArgs.svcId 			= "save";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnRegBtnCtrl = function()
        {
        	//trace("[AprvAplyS02] 등록상세 권한별 버튼 처리 =========================");
        	var isBtnList = this.dsRegBtnCtrl.getColumn(0, "btnList");
        	var isBtnReg = this.dsRegBtnCtrl.getColumn(0, "btnReg");
        	var isBtnRegTmp = this.dsRegBtnCtrl.getColumn(0, "btnRegTmp");
        	var isBtnRegRe = this.dsRegBtnCtrl.getColumn(0, "btnRegRe");
        	var isBtnRegReTmp = this.dsRegBtnCtrl.getColumn(0, "btnRegReTmp");
        	var isBtnDocRe = this.dsRegBtnCtrl.getColumn(0, "btnDocRe");
        	var isBtnDocReTmp = this.dsRegBtnCtrl.getColumn(0, "btnDocReTmp");

         	if(isBtnList) { this.divRComBtn.form.btnList.set_width(this.wBtnList); } else { this.divRComBtn.form.btnList.set_width(0); }
         	if(isBtnReg) { this.divRComBtn.form.btnReg.set_width(this.wBtnReg); } else { this.divRComBtn.form.btnReg.set_width(-3); }
         	if(isBtnRegTmp) { this.divRComBtn.form.btnRegTmp.set_width(this.wBtnRegTmp); } else { this.divRComBtn.form.btnRegTmp.set_width(-3); }
         	if(isBtnRegRe) { this.divRComBtn.form.btnRegRe.set_width(this.wBtnRegRe); } else { this.divRComBtn.form.btnRegRe.set_width(-3); }
        	if(isBtnRegReTmp) { this.divRComBtn.form.btnRegReTmp.set_width(this.wBtnRegReTmp); } else { this.divRComBtn.form.btnRegReTmp.set_width(-3); }
        	if(isBtnDocRe) { this.divRComBtn.form.btnDocRe.set_width(this.wBtnDocRe); } else { this.divRComBtn.form.btnDocRe.set_width(-3); }
        	if(isBtnDocReTmp) { this.divRComBtn.form.btnDocReTmp.set_width(this.wBtnDocReTmp); } else { this.divRComBtn.form.btnDocReTmp.set_width(-3); }

        	this.divRComBtn.form.resetScroll();

        	this.fnDivCtrl("Y");
        };


        this.fnDivCtrl = function(isSrhFileYn)
        {
        	//trace("---------------------------------fnDivCtrl-------------------------------------");
        	var sts = this.dsRegInfo.getColumn(0, "sts");
        	// div top 설정
        	if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003")	// 프로그램사업
        	{
        		this.divH3.form.staRBizUnit.set_text("단위 사업정보  ");
        		this.divH1.set_height(this.hDivH1);

        		// 단위사업인 경우 UI 변경.
        		if(sts == "PGMREG" || sts == "PGMMOD"
        			|| sts == "PGMREGREUP" || sts == "PGMREGRE"
        			|| sts == "PGMREGDLBRUP" || sts == "PGMREGDLBR"
        			|| sts == "PGMDOCREUP" || sts == "PGMDOCRE"
        			|| sts == "PGMDOCDLBRUP" || sts == "PGMDOCDLBR"
        			|| sts == "PGMREGUP") {

        			this.divPrgm.set_height(this.hDivPrgm);
        			this.divPrgmFile.set_height(this.hDivPrgmFile);

        			// REDD PLUS - divPrgm
        			if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divPrgm.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divPrgm.form.chkReddPlusYn.set_visible(false);
        			}
        		}
        		// 프로그램 사업인 경우.
        		else {
        			this.divPrgm.set_height(this.hDivPrgm);
        			this.divPrgmFile.set_height(this.hDivPrgmFile);

        			// REDD PLUS - divPrgm
        			if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divPrgm.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divPrgm.form.chkReddPlusYn.set_visible(false);
        			}
        		}
        		this.divH2.set_height(this.hDivH2);

        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        		this.divH3.form.resetScroll();
        		this.divBizUnit.form.resetScroll();
        	}
        	else {
        		this.divH3.form.staRBizUnit.set_text("사업정보     ");
        		this.divH1.set_height(0);
        		this.divPrgm.set_height(0);
        		this.divH2.set_height(0);
        		this.divPrgmFile.set_height(0);

        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        		this.divH3.form.resetScroll();
        		this.divBizUnit.form.resetScroll();

        	}

        	this.resetScroll();

        	// 업무파일 정보 호출
        	trace(">>> isSrhFileYn : " + isSrhFileYn);
        	if(isSrhFileYn == "Y") {
        		this.fnCallFileStart("");
        	}

        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        // 사업취소 버튼.
        this.divRComBtn_btnReg_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckCan()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave();
        		}
        	});
        };


        this.fnCallValidCheckCan = function()
        {
        	var rtrcnDmndTypeCd		= this.dsRtrcnInfo.getColumn(0, "rtrcnDmndTypeCd");
        	var rtrcnDmndClCd		= this.dsRtrcnInfo.getColumn(0, "rtrcnDmndClCd");

        	if(this.gfnIsNull(rtrcnDmndTypeCd)) {
         		this.gfnShowMessage(this, "W000025", "취소유형", "fnMsgCallback", "msgAlert01");
        		return false;
         	} else { }
        	if(this.gfnIsNull(rtrcnDmndClCd)) {
        		this.gfnShowMessage(this, "W000025", "취소사유구분", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { }

        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
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
            this.divBizUnit.form.btnAgreeMgno.addEventHandler("onclick",this.divRBizUnit_btnAgreeMgno_onclick,this);
            this.divBizUnit.form.edtBizOrgtNm.addEventHandler("onkillfocus",this.divRBizUnit_edtBizOrgtNm_onkillfocus,this);
            this.divBizUnit.form.staSop.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divBizUnit.form.staOmge.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH4.form.staRFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divH5.form.staRExcrList.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divH6.form.divCn.form.staCanRsn.addEventHandler("onclick",this.divH6_divCn_staDlayRsn_onclick,this);
            this.divH6.form.divCn.form.txaCanRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divH6.form.divCn.form.staDlayFile00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH6.form.divCn.form.rdoCanGbnCd.addEventHandler("onitemchanged",this.divH6_divCn_rdoScsnGbnCd_onitemchanged,this);
            this.divH6.form.divCn.form.cboRtrcnDmndClCd.addEventHandler("onitemchanged",this.divRCmm_cboBizTypeCd_onitemchanged,this);
            this.divH6.form.divCanCn.form.staCanCn.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRComBtn.form.btnList.addEventHandler("onclick",this.divRComBtn_btnList_onclick,this);
            this.divRComBtn.form.btnReg.addEventHandler("onclick",this.divRComBtn_btnReg_onclick,this);
            this.divRComBtn.form.btnRegTmp.addEventHandler("onclick",this.divRComBtn_btnRegTmp_onclick,this);
            this.divRComBtn.form.btnRegRe.addEventHandler("onclick",this.divRComBtn_btnRegRe_onclick,this);
            this.divRComBtn.form.btnDocRe.addEventHandler("onclick",this.divRComBtn_btnDocRe_onclick,this);
            this.divRComBtn.form.btnRegReTmp.addEventHandler("onclick",this.divRComBtn_btnRegReTmp_onclick,this);
            this.divRComBtn.form.btnDocReTmp.addEventHandler("onclick",this.divRComBtn_btnDocReTmp_onclick,this);
            this.dsExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
        };
        this.loadIncludeScript("RtrcnPrcndS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
