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
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizKoffDgr\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Div("divRUsrInfo","0","60",null,"130","30",null,null,null,null,null,this);
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

            obj = new Static("staRUsrInfo","0","20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divRCmm","0","250",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staRCmmL2","0","43",null,"44","0",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staRCmmL1","0","0",null,"44","0",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staEngNm","0","0","150","44",null,null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("5");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staRCmmL3","0","86",null,"44","0",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staKrNm","0","43","150","44",null,null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staType","0","86","150","44",null,null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("9");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","157","7",null,"30","7",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("1");
            obj.set_imemode("none");
            obj.set_inputtype("space,numberandenglish,sign,symbol");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Edit("edtKrNm","157","50",null,"30","7",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("2");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Combo("cboBizTypeCd","157","93","230","30",null,null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBizTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staGbn","783","86","150","44",null,null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Edit("edtGbn","943","94",null,"30","7",null,null,null,null,null,this.divRCmm.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("사업신청");
            obj.set_text("사업신청");
            this.divRCmm.addChild(obj.name, obj);

            obj = new Static("staRcmm","0","210","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","0","divRCmm:1",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staRPrgm","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divPrgm","0","divH1:0",null,"800","30",null,null,null,null,null,this);
            obj.set_taborder("18");
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

            obj = new Div("divRPrgm","0","divPrgm:0",null,"790","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine10","0","330",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine7","0","502",null,"286","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine6","0","459",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine5","0","416",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine4","0","373",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","1","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("2");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","373","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("13");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","416","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("14");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","459","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("16");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","502","150","286",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("17");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("stAbplcNm","0","43","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("21");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"245","0",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","86","150","245",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("23");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Edit("edtAgreeMgno","157","50","1193","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","1360","50","130","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("6");
            obj.set_text("협정·약정·MOU 검색");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Combo("cboAgreeClausCd","157","8","227","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsAgreeClausCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","380","1193","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("8");
            obj.set_inputtype("sign,space,symbol,numberandenglish");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new CheckBox("chkBizOrgtNm","1360","380","180","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("24");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","423","1193","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("9");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new CheckBox("chkBizKrnNm","1360","423","180","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("25");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","157","508","227","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("11");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_innerdataset("dsBizFldCdS");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","387","508","227","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsBizDtlsFldCdPgm");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Button("btnMhdlgDel",null,"509","98","30","108",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("26");
            obj.set_text("방법론 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Button("btnMhdlgAdd",null,"509","98","30","7",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("27");
            obj.set_text("방법론 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Grid("grdMhdlgList","157","543",null,"228","7",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("28");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsPgmMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"600\"/><Column size=\"600\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"2\" text=\"방법론(국문)명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" tooltiptext=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"2\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Grid("grdBizEnfcPlcList","157","93",null,"228","7",null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("29");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsPgmNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"290\"/><Column size=\"290\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"유치국가 선택\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"국가명\"/><Cell col=\"2\" text=\"담당기관\"/><Cell col=\"3\" text=\"부서명\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnChk\" tooltiptext=\"bind:ntnChk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" edittype=\"expr:ntnChk==&apos;Y&apos;?&apos;text&apos;:&apos;readonly&apos;\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" displaytype=\"editcontrol\" edittype=\"expr:ntnChk==&apos;Y&apos;?&apos;text&apos;:&apos;readonly&apos;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","157","466","252","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("10");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","330","150","44",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("31");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","337","1193","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("7");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","634","508","236","30",null,null,null,null,null,null,this.divRPrgm.form);
            obj.set_taborder("32");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divRPrgm.addChild(obj.name, obj);

            obj = new Div("divH2","0","divRPrgm:1",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staRPrgmFile","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일    ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divRPrgmFile","0","divH2:0",null,"360","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","139",null,"220","0",null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"140","0",null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSinglePgm01","157","10","800","120",null,null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiPgm02","155","152","800","195",null,null,null,null,null,null,this.divRPrgmFile.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divRPrgmFile.addChild(obj.name, obj);

            obj = new Div("divPrgmFile","0","divRPrgmFile:0",null,"360","30",null,null,null,null,null,this);
            obj.set_taborder("19");
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

            obj = new Div("divRaonKSinglePgm03","157","10","800","120",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiPgm04","155","152","800","195",null,null,null,null,null,null,this.divPrgmFile.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divPrgmFile.addChild(obj.name, obj);

            obj = new Div("divH3","0","divPrgmFile:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Static("staRBizUnit","0","20","600","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("단위 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divRBizUnit","0","divH3:0",null,"1174","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("사업장명");
            this.addChild(obj.name, obj);

            obj = new Static("staLine10","0","628",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine7","0","499",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine2","-22","42",null,"44","-14",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine1","0","-1",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","0","-1","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine6","0","456",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","0","42","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("4");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","456","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("6");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","499","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","628","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("9");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine5","-36","413",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","413","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("12");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","783","413","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("37");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine8","0","542",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizUnqno","0","542","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("39");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine9","-36","585",null,"44","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staCertVldTypeCd","0","585","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("41");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staKoffPrnmntYmd","783","585","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("42");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine11","0","671",null,"117","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","671","150","117",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("44");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine12","783","714",null,"74","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","671","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("45");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","714","150","74",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("47");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staHelp1","940","757",null,"30","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("48");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine13","0","885",null,"284","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","885","150","284",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("50");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine3","-26","84",null,"44","-10",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staAgreeMgno","0","84","150","44",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("52");
            obj.set_text("협정·약정·MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine4","0","124",null,"246","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBizEnfcPlcNm","0","124","150","246",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("54");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoAplyClCd","157","7","699","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("13");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_innerdataset("dsAplyClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtAgreeMgno","157","90","1193","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Button("btnAgreeMgno","1361","90","101","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("16");
            obj.set_text("협정·약정 검색");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboAgreeClausCd","157","48","227","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsAgreeClausCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboBizFormCd","157","420","227","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsBizFormCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboBizScalCd","940","420","410","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsBizScalCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","463","1193","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("20");
            obj.set_inputtype("sign,space,symbol,numberandenglish");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","506","1193","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("21");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","157","549","620","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("22");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoCertVldTypeCd","157","592","383","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsCertVldTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboRdcUnitCd","463","686","140","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsRdcUnitCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("MW");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCnvrCoefCn","940","679",null,"30","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtCnvrBassCn","940","725",null,"30","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","157","895","227","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsBizFldCdS");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","387","895","227","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("36");
            obj.set_innerdataset("dsBizDtlsFldCdUni");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Button("btnMhdlgDel",null,"897","98","30","108",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("55");
            obj.set_text("방법론 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Button("btnMhdlgAdd",null,"897","98","30","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("56");
            obj.set_text("방법론 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitMhdlg","157","933",null,"228","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("57");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniMhdlgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"600\"/><Column size=\"600\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" text=\"방법론(원문)명\" cssclass=\"Cell_NoLine\"/><Cell col=\"2\" text=\"방법론(국문)명\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" padding=\"0px 7px\" text=\"bind:mhdlgOrgtNm\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"2\" text=\"bind:mhdlgKrnNm\" tooltiptext=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Grid("grdUnitPlc","157","132",null,"228","7",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("58");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_binddataset("dsUniNtnList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"290\"/><Column size=\"290\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"유치국가 선택\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"국가명\"/><Cell col=\"2\" text=\"담당기관\"/><Cell col=\"3\" text=\"부서명\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:ntnChk\" tooltiptext=\"bind:ntnChk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\" displaytype=\"editcontrol\" edittype=\"expr:ntnChk==&apos;Y&apos;?&apos;text&apos;:&apos;readonly&apos;\"/><Cell col=\"3\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\" displaytype=\"editcontrol\" edittype=\"expr:ntnChk==&apos;Y&apos;?&apos;text&apos;:&apos;readonly&apos;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkBizOrgtNm","1360","462","180","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("59");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkBizKrnNm","1360","508","180","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("60");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Div("divCalFromTo2","157","636","252","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("25");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Div("divCalDay","940","592","124","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("24");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staTco2Eq","463","732",null,"30","963",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("61");
            obj.set_text("tCO2-eq");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine14","0","787",null,"99","0",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staSop","0","787","150","99",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("63");
            obj.set_text("SOP");
            obj.set_cssclass("sta_WF_Label");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staOmge","783","787","150","99",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("64");
            obj.set_text("OMGE");
            obj.set_cssclass("sta_WF_Label");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoSop","157","799","383","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsSopUnitCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Radio("rdoOmge","940","799","383","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsOmgeUnitCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staLine16","-26","369",null,"45","-10",null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Static("staBplcNm","0","369","150","45",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("66");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","377","1193","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("17");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkBplcNm","1360","378","180","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("67");
            obj.set_text("위 사업장명과 동일");
            obj.set_value("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseBfcnvrRdcqty","157","686","300","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseAtcnvrRdcqty","157","732","300","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("29");
            obj.set_format("#,##0");
            obj.set_enable("false");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseSop","157","845","300","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("32");
            obj.set_format("#,##0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new MaskEdit("mseOmge","940","845","300","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("34");
            obj.set_format("#,##0");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","634","896","236","30",null,null,null,null,null,null,this.divRBizUnit.form);
            obj.set_taborder("68");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divRBizUnit.addChild(obj.name, obj);

            obj = new Div("divH4","0","divRBizUnit:1",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Static("staRFile","0","20","342","30",null,null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일            ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divRFile","0","divH4:0",null,"500","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","139",null,"220","0",null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"140","0",null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("staLine3","0","359",null,"140","0",null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRFile.addChild(obj.name, obj);

            obj = new Static("stacnvrBassDataFlmno","0","359","150","140",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("6");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.divRFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni01","157","10","800","120",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divRFile.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiUni02","155","152","800","195",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("8");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divRFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleUni03","157","369","800","120",null,null,null,null,null,null,this.divRFile.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divRFile.addChild(obj.name, obj);

            obj = new Div("divH5","0","divRFile:1",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div03");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staRExcrList","0","20","342","30",null,null,null,null,null,null,this.divH5.form);
            obj.set_taborder("0");
            obj.set_text("사업 수행자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH5.addChild(obj.name, obj);

            obj = new Button("btnExcrAdd",null,"20","122","30","8",null,null,null,null,null,this.divH5.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divH5.addChild(obj.name, obj);

            obj = new Button("btnExcrDel",null,"20","122","30","btnExcrAdd:3",null,null,null,null,null,this.divH5.form);
            obj.set_taborder("1");
            obj.set_text("사업수행자 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divH5.addChild(obj.name, obj);

            obj = new Div("divH6","0","divH5:1",null,"237","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRExcrList","0","0",null,"228","0",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("dsExcrList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"대표\"/><Cell col=\"2\" text=\"사업수행자\"/><Cell col=\"3\" text=\"국내/해외&#13;&#10;구분\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 환산전 감축량&#13;&#10;(사업계획서의 연평균 온실가스배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"환산계수\"/><Cell col=\"7\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 환산후 감축량&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"8\" text=\"사용자&#13;&#10;동의여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:masterYn==&apos;Y&apos;?&apos;normal&apos;:&apos;checkboxcontrol&apos;\" edittype=\"expr:masterYn==&apos;Y&apos;?&apos;text&apos;:&apos;checkbox&apos;\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:masterYn==&apos;Y&apos;?&apos;대표&apos;:&apos;-&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:dmstClCd==&apos;&apos;?&apos;-&apos;:(dmstClCd==&apos;DCC0001&apos;?&apos;국내&apos;:&apos;해외&apos;)\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:bfcnvrRdcqty\" displaytype=\"number\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:cnvrCoefCn\" tooltiptext=\"bind:cnvrCoefCn\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:atcnvrRdcqty\" tooltiptext=\"bind:atcnvrRdcqty\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:agreYn==true?&apos;동의&apos;:&apos;미동의&apos;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divRExcr","0","divH6:0",null,"246","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine5","0","202",null,"44","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staLine2","-36","43",null,"44","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staDmstClCd","0","0","150","44",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("2");
            obj.set_text("국내/해외 구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staNm","0","43","150","44",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("3");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staNo","783","43","150","44",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"117","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","86","150","117",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("7");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staCnvrCoefCn","783","86","150","44",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("8");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staLine4","783","129",null,"74","0",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staCnvrBassCn","783","129","150","74",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("10");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staHelp1","940","169",null,"30","7",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("11");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staAgreYn","0","202","150","44",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("12");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Combo("cboDmstClCd","157","7","227","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsDmstClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Edit("edtNm","157","50","514","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Button("btnNm","674","50","102","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("17");
            obj.set_text("사업수행자 검색");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Edit("edtNo","940","50",null,"30","7",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Edit("edtCnvrCoefCn","940","93",null,"30","7",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("22");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Edit("edtCnvrBassCn","940","136",null,"30","7",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Combo("cboRdcUnitCd","590","112","140","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsRdcUnitCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("MW");
            obj.set_value("0");
            obj.set_index("0");
            this.divRExcr.addChild(obj.name, obj);

            obj = new CheckBox("chkAgreYn","157","209","180","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("46");
            obj.set_text("동의");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("staTco2Eq","595","151",null,"30","831",null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("14");
            obj.set_text("tCO2-eq");
            this.divRExcr.addChild(obj.name, obj);

            obj = new MaskEdit("mseBfcnvrRdcqty","287","112","300","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_displaynulltext("0");
            this.divRExcr.addChild(obj.name, obj);

            obj = new MaskEdit("mseAtcnvrRdcqty","287","148","300","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_format("#,##0");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("stcBfr","159","112","134","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("25");
            obj.set_text("환산 전 감축량 : ");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Static("stcAfr","159","148","134","30",null,null,null,null,null,null,this.divRExcr.form);
            obj.set_taborder("26");
            obj.set_text("환산 후 감축량 : ");
            this.divRExcr.addChild(obj.name, obj);

            obj = new Div("divH7","10","divRExcr:0",null,"59","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Static("staRFile","0","20","525","30",null,null,null,null,null,null,this.divH7.form);
            obj.set_taborder("0");
            obj.set_text("SMS 수신동의");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH7.addChild(obj.name, obj);

            obj = new Div("divRSms","0","divH7:0",null,"44","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divRSms.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRSms.addChild(obj.name, obj);

            obj = new Static("staSms","0","0","150","44",null,null,null,null,null,null,this.divRSms.form);
            obj.set_taborder("1");
            obj.set_text("SMS 수신동의");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRSms.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRSms.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divRSms.addChild(obj.name, obj);

            obj = new CheckBox("chkTrsmYn","157","8","573","30",null,null,null,null,null,null,this.divRSms.form);
            obj.set_taborder("47");
            obj.set_text("인증유효기간 만료일 알림 SMS 수신에 대한 동의");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divRSms.addChild(obj.name, obj);

            obj = new Div("divRComBtn","0","divRSms:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"0","75","32","btnList:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
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
            obj.set_text("임시저장.");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);

            obj = new Button("btnDocReTmp",null,"0","88","32","btnRegReTmp:3",null,null,null,null,null,this.divRComBtn.form);
            obj.set_taborder("6");
            obj.set_text("임시저장..");
            obj.set_cssclass("btn_WF_Crud");
            this.divRComBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRUsrInfo.form
            obj = new Layout("default","",0,0,this.divRUsrInfo.form,function(p){});
            this.divRUsrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRCmm.form
            obj = new Layout("default","",0,0,this.divRCmm.form,function(p){});
            this.divRCmm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgm.form
            obj = new Layout("default","",0,0,this.divPrgm.form,function(p){});
            this.divPrgm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRPrgm.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divRPrgm.form.divCalFromTo.form,function(p){});
            this.divRPrgm.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRPrgm.form
            obj = new Layout("default","",0,0,this.divRPrgm.form,function(p){});
            this.divRPrgm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRPrgmFile.form.divRaonKSinglePgm01
            obj = new Layout("default","",0,0,this.divRPrgmFile.form.divRaonKSinglePgm01.form,function(p){});
            this.divRPrgmFile.form.divRaonKSinglePgm01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRPrgmFile.form.divRaonKMultiPgm02
            obj = new Layout("default","",0,0,this.divRPrgmFile.form.divRaonKMultiPgm02.form,function(p){});
            this.divRPrgmFile.form.divRaonKMultiPgm02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRPrgmFile.form
            obj = new Layout("default","",0,0,this.divRPrgmFile.form,function(p){});
            this.divRPrgmFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form.divRaonKSinglePgm03
            obj = new Layout("default","",0,0,this.divPrgmFile.form.divRaonKSinglePgm03.form,function(p){});
            this.divPrgmFile.form.divRaonKSinglePgm03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form.divRaonKMultiPgm04
            obj = new Layout("default","",0,0,this.divPrgmFile.form.divRaonKMultiPgm04.form,function(p){});
            this.divPrgmFile.form.divRaonKMultiPgm04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgmFile.form
            obj = new Layout("default","",0,0,this.divPrgmFile.form,function(p){});
            this.divPrgmFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRBizUnit.form.divCalFromTo2
            obj = new Layout("default","",0,0,this.divRBizUnit.form.divCalFromTo2.form,function(p){});
            this.divRBizUnit.form.divCalFromTo2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRBizUnit.form.divCalDay
            obj = new Layout("default","",0,0,this.divRBizUnit.form.divCalDay.form,function(p){});
            this.divRBizUnit.form.divCalDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRBizUnit.form
            obj = new Layout("default","",0,0,this.divRBizUnit.form,function(p){});
            this.divRBizUnit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRFile.form.divRaonKSingleUni01
            obj = new Layout("default","",0,0,this.divRFile.form.divRaonKSingleUni01.form,function(p){});
            this.divRFile.form.divRaonKSingleUni01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRFile.form.divRaonKMultiUni02
            obj = new Layout("default","",0,0,this.divRFile.form.divRaonKMultiUni02.form,function(p){});
            this.divRFile.form.divRaonKMultiUni02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRFile.form.divRaonKSingleUni03
            obj = new Layout("default","",0,0,this.divRFile.form.divRaonKSingleUni03.form,function(p){});
            this.divRFile.form.divRaonKSingleUni03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRFile.form
            obj = new Layout("default","",0,0,this.divRFile.form,function(p){});
            this.divRFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5.form
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRExcr.form
            obj = new Layout("default","",0,0,this.divRExcr.form,function(p){});
            this.divRExcr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH7.form
            obj = new Layout("default","",0,0,this.divH7.form,function(p){});
            this.divH7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRSms.form
            obj = new Layout("default","",0,0,this.divRSms.form,function(p){});
            this.divRSms.form.addLayout(obj.name, obj);

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

            obj = new BindItem("item7","divRCmm.form.edtEngNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divRCmm.form.edtKrNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divRCmm.form.cboBizTypeCd","value","dsBizInfo","bizTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divRBizUnit.form.rdoAplyClCd","value","dsUniInfo","aplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divRBizUnit.form.edtAgreeMgno","value","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divRBizUnit.form.cboAgreeClausCd","value","dsUniInfo","agreeClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divRBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divRBizUnit.form.cboBizFormCd","value","dsUniInfo","bizFormCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divRBizUnit.form.cboBizScalCd","value","dsUniInfo","bizScalCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divRBizUnit.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divRBizUnit.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divRBizUnit.form.edtBizUnqno","value","dsUniInfo","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divRBizUnit.form.rdoCertVldTypeCd","value","dsUniInfo","certVldTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divRBizUnit.form.edtBfcnvrRdcqty","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divRBizUnit.form.edtCnvrCoefCn","value","dsUniInfo","cnvrCoefCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divRBizUnit.form.edtCnvrBassCn","value","dsUniInfo","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divRBizUnit.form.cboRdcUnitCd","value","dsUniInfo","rdcUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divRBizUnit.form.edtAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divRBizUnit.form.cboBizFldCd","value","dsUniInfo","bizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divRBizUnit.form.cboBizDtlsFldCd","value","dsUniInfo","bizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divRPrgm.form.edtAgreeMgno","value","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divRPrgm.form.cboAgreeClausCd","value","dsPgmInfo","agreeClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divRPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divRPrgm.form.edtBizOrgtNm","value","dsPgmInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divRPrgm.form.edtBizKrnNm","value","dsPgmInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divRPrgm.form.cboBizFldCd","value","dsPgmInfo","bizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divRPrgm.form.cboBizDtlsFldCd","value","dsPgmInfo","bizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divRBizUnit.form.rdoSop","value","dsUniInfo","sopUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divRBizUnit.form.rdoOmge","value","dsUniInfo","omgeUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divRBizUnit.form.edtSop","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divRBizUnit.form.edtOmge","value","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divRExcr.form.cboDmstClCd","value","dsExcrList","dmstClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divRExcr.form.edtNm","value","dsExcrList","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divRExcr.form.edtNo","value","dsExcrList","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divRExcr.form.cboRdcUnitCd","value","dsExcrList","rdcUnitCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divRExcr.form.edtCnvrCoefCn","value","dsExcrList","cnvrCoefCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divRExcr.form.chkAgreYn","value","dsExcrList","agreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divRExcr.form.edtBfcnvrRdcqty","accessibilityaction","dsExcrList","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divRExcr.form.edtBfcnvrRdcqty","value","dsExcrList","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divRExcr.form.edtCnvrBassCn","value","dsExcrList","cnvrBassCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divRExcr.form.edtAtcnvrRdcqty","value","dsExcrList","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divRExcr.form.edtAtcnvrRdcqty","tooltiptext","dsExcrList","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divRSms.form.chkTrsmYn","value","dsUniInfo","trsmYn");
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

            obj = new BindItem("item59","divRBizUnit.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divRPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divPrgm.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divRBizUnit.form.mseBfcnvrRdcqty","value","dsUniInfo","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divRBizUnit.form.mseAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divRBizUnit.form.mseSop","value","dsUniInfo","sopRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divRBizUnit.form.mseOmge","value","dsUniInfo","omgeRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divRExcr.form.mseBfcnvrRdcqty","value","dsExcrList","bfcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divRExcr.form.mseAtcnvrRdcqty","value","dsExcrList","atcnvrRdcqty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divRBizUnit.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divPrgm.form.chkReddPlusYn","value","dsPgmInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divRPrgm.form.chkReddPlusYn","value","dsPgmInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divPrgm.form.stcAgreeMgnoNm","text","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divPrgm.form.stcAgreeMgnoNm","tooltiptext","dsPgmInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyS02.xfdl", function() {
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
        this.wBtnReg = 75;
        this.wBtnRegTmp = 88;
        this.wBtnRegRe = 88;
        this.wBtnRegReTmp = 88;
        this.wBtnDocRe = 101;
        this.wBtnDocReTmp = 88;

        this.hDivH1 = 59;
        this.hDivH2 = 59;
        this.hDivPrgm = 800;
        this.hDivRPrgm = 790;
        this.hDivPrgmFile = 360;
        this.hDivRPrgmFile = 360;

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
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divRPrgmFile.form.divRaonKSinglePgm01.form.fnInitRaonK(this, objFileParam1);

        	// 프로그램사업 - 기타증빙서류
        	var objFileParam2 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFilePgm02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divRPrgmFile.form.divRaonKMultiPgm02.form.fnInitRaonK(this, objFileParam2);

        	// 단위사업 - 사업계획서 파일
        	var objFileParam3 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni01"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divRFile.form.divRaonKSingleUni01.form.fnInitRaonK(this, objFileParam3);

        	// 단위사업 - 기타증빙서류
        	var objFileParam4 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileUni02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divRFile.form.divRaonKMultiUni02.form.fnInitRaonK(this, objFileParam4);

        	// 단위사업 - 환산근거 파일
        	var objFileParam5 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"cnvrBassDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileUni03"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divRFile.form.divRaonKSingleUni03.form.fnInitRaonK(this, objFileParam5);


        	// 프로그램사업 - 사업계획서 파일(조회용)
        	var objFileParam6 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFilePgm03"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divPrgmFile.form.divRaonKSinglePgm03.form.fnInitRaonK(this, objFileParam6);

        	// 프로그램사업 - 기타증빙서류(조회용)
        	var objFileParam7 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFilePgm04"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        					,sButtonList:"download,download_all,custom_viewer|문서보기"
        				   };
        	this.divPrgmFile.form.divRaonKMultiPgm04.form.fnInitRaonK(this, objFileParam7);

        	//---------------------------------------------------------------------------------------

        	// From-To 달력 초기화 호출 - 프로그램사업
        	var objParam1 = { objDs:this.dsPgmInfo								// 바인딩 데이터셋
        					,sBindFromCol:"certVldBgngYmd"						// 바인딩 컬럼(From)
        					,sBindToCol:"certVldEndYmd"							// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"certVldBgngYmdPgm"					// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divRPrgm.form.divCalFromTo.form.fnInitCommonCalendar(this, objParam1);

        	// 일달력 초기화 호출 - 단위사업
        	var objParam2 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindCol:"koffPrnmntYmd"							// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"koffPrnmntYmdUni"						// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divRBizUnit.form.divCalDay.form.fnInitCommonCalendar(this, objParam2);

        	// From-To 달력 초기화 호출 - 단위사업
        	var objParam3 = { objDs:this.dsUniInfo								// 바인딩 데이터셋
        					,sBindFromCol:"certVldBgngYmd"						// 바인딩 컬럼(From)
        					,sBindToCol:"certVldEndYmd"							// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"certVldBgngYmdPgm"					// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divRBizUnit.form.divCalFromTo2.form.fnInitCommonCalendar(this, objParam3);

        	// M00에 로딩 완료여부 전달.
        // 	trace("====================  M00에 로딩 완료여부 전달. ========================");
        // 	this.getOwnerFrame().form.divWork.form.fnRegLoadComplete();
        // 	trace("====================  M00에 로딩 완료여부 전달. ========================");
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
        	this.divRBizUnit.form.edtBizUnqno.set_enable(false);		// 고유번호 false

        	this.divRCmm.form.cboBizTypeCd.set_enable(true);
        	this.divRBizUnit.form.btnAgreeMgno.set_visible(true);
        	this.divRBizUnit.form.cboBizFldCd.set_enable(true);
        	this.divRBizUnit.form.cboBizDtlsFldCd.set_enable(true);
        	this.divRBizUnit.form.rdoAplyClCd.set_enable(true);

        	// REDD PLUS 초기화.
        	this.divPrgm.form.chkReddPlusYn.set_visible(false);
        	this.divRPrgm.form.chkReddPlusYn.set_visible(false);
        	this.divRBizUnit.form.chkReddPlusYn.set_visible(false);

        	// 사업세부분야 콤보 초기화.
        	this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdPgm.filter("bizFldCdMgno == ''");
        	this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == ''");

        	// 사업규모코드 초기화.
        	this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == ''");

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

        	this.dsPgmNtnList.clearData();
        	this.dsPgmMhdlgList.clearData();
        	this.dsUniNtnList.clearData();
        	this.dsUniMhdlgList.clearData();

        	// 파일 데이터셋 초기화수행
        	this.dsPgmBizPlndFile.clearData();
        	this.dsPgmEtcDataFile.clearData();
        	this.dsUniBizPlndFile.clearData();
        	this.dsUniEtcDataFile.clearData();
        	this.dsUniCnvrBassDataFile.clearData();

        	this.getOwnerFrame().form.divWork.form.divDetail.set_url("");

        	if(objArgs.sts == "REG") {
        		// 등록 전 상세 호출
        		this.divRBizUnit.form.rdoAplyClCd.set_enable(true);
        		this.fnCallRegInfo();
        	}
        	else if (objArgs.sts == "MOD" || objArgs.sts == "REGRE" || objArgs.sts == "DOCRE" || objArgs.sts == "REGDLBR" || objArgs.sts == "DOCDLBR") {
        		// 수정 전 상세 호출 - 차수 증가 없음. 현재 차수로 조회.
        		if (objArgs.sts == "REGRE" || objArgs.sts == "DOCRE" || objArgs.sts == "REGDLBR" || objArgs.sts == "DOCDLBR") {
        			this.divRBizUnit.form.rdoAplyClCd.set_enable(false);
        		}
        		this.fnCallModInfo();
        	}
        	else if(objArgs.sts == "REGREUP" || objArgs.sts == "DOCREUP" || objArgs.sts == "REGDLBRUP" || objArgs.sts == "DOCDLBRUP") {
        		// 차수증가 자료로 조회.
        		this.divRBizUnit.form.rdoAplyClCd.set_enable(false);
        		this.fnCallRegReUp();
        	}
        	else if(objArgs.sts == "PGMREG") {
        		// 기존 프로그램 사업의 단위사업 추가로 신청.
        		this.divRBizUnit.form.rdoAplyClCd.set_enable(true);
        		this.fnCallPgmRegInfo();
        	}
        	else if(objArgs.sts == "PGMMOD" || objArgs.sts == "PGMREGRE" || objArgs.sts == "PGMDOCRE" || objArgs.sts == "PGMREGDLBR" || objArgs.sts == "PGMDOCDLBR") {
        		// 기존 프로그램 사업의 단위사업 추가로 신청.
        		if (objArgs.sts == "PGMREGRE" || objArgs.sts == "PGMDOCRE" || objArgs.sts == "PGMREGDLBR" || objArgs.sts == "PGMDOCDLBR") {
        			this.divRBizUnit.form.rdoAplyClCd.set_enable(false);
        		}
        		this.fnCallPgmModInfo();
        	}
        	else if(objArgs.sts == "PGMREGREUP" || objArgs.sts == "PGMDOCREUP" || objArgs.sts == "PGMREGDLBRUP" || objArgs.sts == "PGMDOCDLBRUP") {
        		// 차수증가 자료로 조회.
        		this.divRBizUnit.form.rdoAplyClCd.set_enable(false);
        		this.fnCallPgmRegReUp();
        	}
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
        		this.divRFile.form.divRaonKSingleUni01.form.fnSearchFile("");
        	}else {
        		this.divRFile.form.divRaonKSingleUni01.form.fnSearchFile(bizPlndFlmno);
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFileUni01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsUniBizPlndFile.clearData();
        				var nRowCnt = this.dsUniBizPlndFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsUniBizPlndFile.clearData();
        				var nRowCnt = this.dsUniBizPlndFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsUniBizPlndFile.clearData();
        				var nRowCnt = this.dsUniBizPlndFile.copyData(objRtn.objDs);

        				trace("################### 단위-기타증빙문서 Start ###################");
        				var etcDataFlmno = this.dsUniInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					this.divRFile.form.divRaonKMultiUni02.form.fnSearchFile("");
        				}else {
        					this.divRFile.form.divRaonKMultiUni02.form.fnSearchFile(etcDataFlmno);
        				}
        			}
        			break;
        		case "multiFileUni02" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsUniEtcDataFile.clearData();
        				var nRowCnt = this.dsUniEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsUniEtcDataFile.clearData();
        				var nRowCnt = this.dsUniEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsUniEtcDataFile.clearData();
        				var nRowCnt = this.dsUniEtcDataFile.copyData(objRtn.objDs);

        				trace("################### 단위-환산근거자료 Start ###################");
        				var cnvrBassDataFlmno = this.dsUniInfo.getColumn(0, "cnvrBassDataFlmno");
        				trace(">>> cnvrBassDataFlmno : " + cnvrBassDataFlmno);
        				if(this.gfnIsNull(cnvrBassDataFlmno)) {
        					this.divRFile.form.divRaonKSingleUni03.form.fnSearchFile("");
        				}else {
        					this.divRFile.form.divRaonKSingleUni03.form.fnSearchFile(cnvrBassDataFlmno);
        				}
        			}
        			break;
        		case "singleFileUni03" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsUniCnvrBassDataFile.clearData();
        				var nRowCnt = this.dsUniCnvrBassDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsUniCnvrBassDataFile.clearData();
        				var nRowCnt = this.dsUniCnvrBassDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsUniCnvrBassDataFile.clearData();
        				var nRowCnt = this.dsUniCnvrBassDataFile.copyData(objRtn.objDs);

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
        							this.divPrgmFile.form.divRaonKSinglePgm03.form.fnSearchFile("");
        						}else {
        							this.divPrgmFile.form.divRaonKSinglePgm03.form.fnSearchFile(bizPlndFlmno);
        						}
        					}
        					else {
        						// 등록용
        						trace("################### 프로그램-사업계획서 등록용 Start ###################");
        						var bizPlndFlmno = this.dsPgmInfo.getColumn(0, "bizPlndFlmno");
        						trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        						if(this.gfnIsNull(bizPlndFlmno)) {
        							this.divRPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile("");
        						}else {
        							this.divRPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile(bizPlndFlmno);
        						}
        					}
        				}
        				else {
        					// 등록용 - 프로그램으로 전환 후 등록을 위해 열어놓는다.
        					trace("################### 프로그램-사업계획서 등록용 Start ###################");
        					var bizPlndFlmno = this.dsPgmInfo.getColumn(0, "bizPlndFlmno");
        					trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        					if(this.gfnIsNull(bizPlndFlmno)) {
        						this.divRPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile("");
        					}else {
        						this.divRPrgmFile.form.divRaonKSinglePgm01.form.fnSearchFile(bizPlndFlmno);
        					}
        				}
        			}
        			break;
        		case "singleFilePgm01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsPgmBizPlndFile.clearData();
        				var nRowCnt = this.dsPgmBizPlndFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsPgmBizPlndFile.clearData();
        				var nRowCnt = this.dsPgmBizPlndFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsPgmBizPlndFile.clearData();
        				var nRowCnt = this.dsPgmBizPlndFile.copyData(objRtn.objDs);

        				trace("###################  프로그램-기타증빙문서 등록용 Start ###################");
        				var etcDataFlmno = this.dsPgmInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					this.divRPrgmFile.form.divRaonKMultiPgm02.form.fnSearchFile("");
        				}else {
        					this.divRPrgmFile.form.divRaonKMultiPgm02.form.fnSearchFile(etcDataFlmno);
        				}
        			}
        			break;
        		case "multiFilePgm02" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsPgmEtcDataFile.clearData();
        				var nRowCnt = this.dsPgmEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsPgmEtcDataFile.clearData();
        				var nRowCnt = this.dsPgmEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsPgmEtcDataFile.clearData();
        				var nRowCnt = this.dsPgmEtcDataFile.copyData(objRtn.objDs);

        				trace("################### 모든 파일 조회 완료!!! ###################");
        			}
        			break;
        		case "singleFilePgm03" :

        			if(objRtn.sDiv == "SEARCH") {
        				this.dsPgmBizPlndFile.clearData();
        				var nRowCnt = this.dsPgmBizPlndFile.copyData(objRtn.objDs);

        				trace("################### 프로그램-기타증빙문서 조회용 Start ###################");
        				var etcDataFlmno = this.dsPgmInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					this.divPrgmFile.form.divRaonKMultiPgm04.form.fnSearchFile("");
        				}else {
        					this.divPrgmFile.form.divRaonKMultiPgm04.form.fnSearchFile(etcDataFlmno);
        				}
        			}

        			break;
        		case "multiFilePgm04" :

        			if(objRtn.sDiv == "SEARCH") {
        				this.dsPgmEtcDataFile.clearData();
        				var nRowCnt = this.dsPgmEtcDataFile.copyData(objRtn.objDs);

        				trace("################### 모든 파일 조회 완료!!! ###################");
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
        		case "certVldBgngYmdPgm" :		// From-To달력
        			// 후처리 코드

        			break;
        		case "koffPrnmntYmdUni" :		// From-To달력
        			// 후처리 코드

        			break;
        		case "certVldBgngYmdUni" :		// From-To달력
        			// 후처리 코드

        			break;
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
        		case "regInfo" :

        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			this.dsUniInfo.setColumn(0, "sopUnitCd", "SUC0001");
        			this.dsUniInfo.setColumn(0, "omgeUnitCd", "OUC0001");

        			this.fnCallRegBtnCtrl();

        			break;
        		case "modInfo" :
        			// 후처리 코드
        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			this.pgmBizFldCd = this.dsPgmInfo.getColumn(0, "bizFldCd");
        			this.uniBizFldCd = this.dsUniInfo.getColumn(0, "bizFldCd");

        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdPgm.filter("bizFldCdMgno == '"+this.pgmBizFldCd+"'");
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '"+this.uniBizFldCd+"'");

        			// 기승인신청건 수정이면 활성화
        			if(this.dsUniInfo.getColumn(0, "aplyClCd") == "APC0003") {
        				this.divRBizUnit.form.edtBizUnqno.set_enable(true);
        			}
        			else {
        				this.divRBizUnit.form.edtBizUnqno.set_enable(false);
        			}

        			// 사업유형별 사업규모 처리.
        			if(this.dsUniInfo.getColumn(0, "bizTypeCd") == "BTC0001") {
        				// 사업규모 필터.
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        			} else if(this.dsUniInfo.getColumn(0, "bizTypeCd") == "BTC0002") {
        				// 사업규모 필터.
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0004' || cdMgno == 'BSC0005'");
        			} else {
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        			}

        			// sop mask
        			if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0001") {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0002") {
        				this.divRBizUnit.form.mseSop.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}

        			// omge mask
        			if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0001") {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0002") {
        				this.divRBizUnit.form.mseOmge.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}

        			// REDD PLUS
        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(false);
        			}

        			this.fnCallRegBtnCtrl();

        			break;
        		case "pgmRegInfo" :

        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			this.dsUniInfo.setColumn(0, "sopUnitCd", "SUC0001");
        			this.dsUniInfo.setColumn(0, "omgeUnitCd", "OUC0001");

        			// 단위사업 추가
        			this.divRCmm.form.cboBizTypeCd.set_enable(false);		// 사업유형 - 프로그램사업 고정.
        			this.dsUniInfo.setColumn(0, "agreeClausCd", this.dsPgmInfo.getColumn(0, "agreeClausCd"));	// 단위-파리협정조항 카피
        			this.dsUniInfo.setColumn(0, "bplcNm", this.dsPgmInfo.getColumn(0, "bplcNm"));				// 단위-사업장명 카피

        			this.dsUniInfo.setColumn(0, "agreeMgno", this.dsPgmInfo.getColumn(0, "agreeMgno"));
        			this.dsUniInfo.setColumn(0, "agreeDgr", this.dsPgmInfo.getColumn(0, "agreeDgr"));
        			this.dsUniInfo.setColumn(0, "agreeMgnoNm", this.dsPgmInfo.getColumn(0, "agreeMgnoNm"));

        			this.dsUniNtnList.clearData();
        			this.dsUniNtnList.copyData(this.dsPgmNtnList);

        			this.dsUniInfo.setColumn(0, "bizFldCd", this.dsPgmInfo.getColumn(0, "bizFldCd"));
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+this.dsPgmInfo.getColumn(0, "bizFldCd")+"'");
        			this.dsUniInfo.setColumn(0, "bizDtlsFldCd", this.dsPgmInfo.getColumn(0, "bizDtlsFldCd"));

        			this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");

        			this.dsUniMhdlgList.clearData();
        			this.dsUniMhdlgList.copyData(this.dsPgmMhdlgList);

        			this.divRBizUnit.form.btnAgreeMgno.set_visible(false);
        			this.divRBizUnit.form.cboBizFldCd.set_enable(false);
        			this.divRBizUnit.form.cboBizDtlsFldCd.set_enable(false);

        			// sop mask
        			if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0001") {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0002") {
        				this.divRBizUnit.form.mseSop.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}

        			// omge mask
        			if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0001") {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0002") {
        				this.divRBizUnit.form.mseOmge.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}

        			this.fnCallRegBtnCtrl();

        			break;
        		case "pgmModInfo" :

        			this.divPrgm.form.stcAgreeMgnoNm.set_text(this.dsPgmInfo.getColumn(0, "agreeMgnoNm") + "    ");

        			this.divRCmm.form.cboBizTypeCd.set_enable(false);		// 사업유형 - 프로그램사업 고정.
        			this.dsUniInfo.setColumn(0, "agreeClausCd", this.dsPgmInfo.getColumn(0, "agreeClausCd"));	// 단위-파리협정조항 카피
        			this.dsUniInfo.setColumn(0, "bplcNm", this.dsPgmInfo.getColumn(0, "bplcNm"));				// 단위-사업장명 카피

        			this.dsUniInfo.setColumn(0, "agreeMgno", this.dsPgmInfo.getColumn(0, "agreeMgno"));
        			this.dsUniInfo.setColumn(0, "agreeDgr", this.dsPgmInfo.getColumn(0, "agreeDgr"));
        			this.dsUniInfo.setColumn(0, "agreeMgnoNm", this.dsPgmInfo.getColumn(0, "agreeMgnoNm"));

        			this.dsUniNtnList.clearData();
        			this.dsUniNtnList.copyData(this.dsPgmNtnList);

        			this.dsUniInfo.setColumn(0, "bizFldCd", this.dsPgmInfo.getColumn(0, "bizFldCd"));
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+this.dsPgmInfo.getColumn(0, "bizFldCd")+"'");
        			this.dsUniInfo.setColumn(0, "bizDtlsFldCd", this.dsPgmInfo.getColumn(0, "bizDtlsFldCd"));

        			this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");

        			this.dsUniMhdlgList.clearData();
        			this.dsUniMhdlgList.copyData(this.dsPgmMhdlgList);

        			this.divRBizUnit.form.btnAgreeMgno.set_visible(false);
        			this.divRBizUnit.form.cboBizFldCd.set_enable(false);
        			this.divRBizUnit.form.cboBizDtlsFldCd.set_enable(false);

        			this.uniBizFldCd = this.dsUniInfo.getColumn(0, "bizFldCd");
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '"+this.uniBizFldCd+"'");

        			// 기승인신청건 수정이면 활성화
        			if(this.dsUniInfo.getColumn(0, "aplyClCd") == "APC0003") {
        				this.divRBizUnit.form.edtBizUnqno.set_enable(true);
        			}
        			else {
        				this.divRBizUnit.form.edtBizUnqno.set_enable(false);
        			}

        			// 사업유형별 사업규모 처리.
        			if(this.dsUniInfo.getColumn(0, "bizTypeCd") == "BTC0001") {
        				// 사업규모 필터.
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        			} else if(this.dsUniInfo.getColumn(0, "bizTypeCd") == "BTC0002") {
        				// 사업규모 필터.
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0004' || cdMgno == 'BSC0005'");
        			} else {
        				this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        			}

        			// sop mask
        			if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0001") {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "sopUnitCd") == "SUC0002") {
        				this.divRBizUnit.form.mseSop.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseSop.set_format("#,##0");
        			}

        			// omge mask
        			if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0001") {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}
        			else if(this.dsUniInfo.getColumn(0, "omgeUnitCd") == "OUC0002") {
        				this.divRBizUnit.form.mseOmge.set_format("##0.0");
        			}
        			else {
        				this.divRBizUnit.form.mseOmge.set_format("#,##0");
        			}

        			// REDD PLUS
        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(false);
        			}

        			this.fnCallRegBtnCtrl();

        			break;
        		case "regBtnInfo" :
        			// 후처리 코드
        			this.fnRegBtnCtrl();
        			break;
        		case "tmpSave" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "save" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "regReSave" :
        			// 후처리 코드 - 문서보완 저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "regReTmpSave" :
        			// 후처리 코드 - 문서보완 임시저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "docReSave" :
        			// 후처리 코드 - 문서보완 저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "docReTmpSave" :
        			// 후처리 코드 - 문서보완 임시저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "pgmNtnList" :
        			// 후처리 코드

        			break;
        		case "uniNtnList" :
        			// 후처리 코드

        			break;
        		case "regDlbrSave" :
        			// 후처리 코드 - 문서보완 저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "regDlbrTmpSave" :
        			// 후처리 코드 - 문서보완 임시저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "docDlbrSave" :
        			// 후처리 코드 - 문서보완 저장 후
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");

        			break;
        		case "docDlbrTmpSave" :
        			// 후처리 코드 - 문서보완 임시저장 후
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
        		// 협정약정 검색 팝업(프로그램)
        		case "popModalAgrstipPgmP01" :

        			this.dsPgmInfo.setColumn(0, "agreeMgno", objRtnValue["cncldMgno"]);
        			this.dsPgmInfo.setColumn(0, "agreeDgr", objRtnValue["cncldDgr"]);
        			this.dsPgmInfo.setColumn(0, "agreeMgnoNm", objRtnValue["cncldKrnNm"]);

        			// 프로그램 사업이면, 단위에도 같이 적용한다.
        			if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {
        				this.dsUniInfo.setColumn(0, "agreeMgno", objRtnValue["cncldMgno"]);
        				this.dsUniInfo.setColumn(0, "agreeDgr", objRtnValue["cncldDgr"]);
        				this.dsUniInfo.setColumn(0, "agreeMgnoNm", objRtnValue["cncldKrnNm"]);
        			}

        			// 협정.약정.MOU에 대한 국가정보 조회
        			this.fnCallPgmNtnList();

        			break;
        		// 방법론 검색 팝업(프로그램)
        		case "popModalMhdlgPgmP01" :
        			var dRow = this.dsPgmMhdlgList.findRowExpr("mhdlgMgno == '"+objRtnValue["pvMhdlgMgno"]+"'");

        			if(objRtnValue["pvMhdlgMgno"] != "" && objRtnValue["pvMhdlgMgno"] != undefined) {
        				if(dRow < 0) {
        					var nRow = this.dsPgmMhdlgList.addRow();
        					this.dsPgmMhdlgList.setColumn(nRow, "chk", "N");
        					this.dsPgmMhdlgList.setColumn(nRow, "mhdlgMgno", objRtnValue["pvMhdlgMgno"]);
        					this.dsPgmMhdlgList.setColumn(nRow, "rvsnDgr", objRtnValue["pvMMhdlgDgr"]);
        					this.dsPgmMhdlgList.setColumn(nRow, "mhdlgOrgtNm", objRtnValue["pvMhdlgOrgtNm"]);
        					this.dsPgmMhdlgList.setColumn(nRow, "mhdlgKrnNm", objRtnValue["pvMhdlgKrnNm"]);

        					// 프로그램 사업이면 단위사업에도 추가한다.
        					if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {
        						var uRow = this.dsUniMhdlgList.findRowExpr("mhdlgMgno == '"+objRtnValue["pvMhdlgMgno"]+"'");

        						if(uRow < 0 && objRtnValue["pvMhdlgMgno"] != "" && objRtnValue["pvMhdlgMgno"] != undefined) {
        							var nRow = this.dsUniMhdlgList.addRow();
        							this.dsUniMhdlgList.setColumn(nRow, "chk", "N");
        							this.dsUniMhdlgList.setColumn(nRow, "mhdlgMgno", objRtnValue["pvMhdlgMgno"]);
        							this.dsUniMhdlgList.setColumn(nRow, "rvsnDgr", objRtnValue["pvMMhdlgDgr"]);
        							this.dsUniMhdlgList.setColumn(nRow, "mhdlgOrgtNm", objRtnValue["pvMhdlgOrgtNm"]);
        							this.dsUniMhdlgList.setColumn(nRow, "mhdlgKrnNm", objRtnValue["pvMhdlgKrnNm"]);
        						}
        					}
        				}
        				else {
        					this.gfnShowMessage(this, "W000022", "", "fnMsgCallback", "msgAlert01");
        				}
        			}

        			break;
        		// 협정약정 검색 팝업(단위)
        		case "popModalAgrstipUniP01" :
        			this.dsUniInfo.setColumn(0, "agreeMgno", objRtnValue["cncldMgno"]);
        			this.dsUniInfo.setColumn(0, "agreeDgr", objRtnValue["cncldDgr"]);
        			this.dsUniInfo.setColumn(0, "agreeMgnoNm", objRtnValue["cncldKrnNm"]);

        			// 협정.약정.MOU에 대한 국가정보 조회
        			this.fnCallUniNtnList();

        			break;
        		// 방법론 검색 팝업(단위)
        		case "popModalMhdlgUniP01" :
        			var dRow = this.dsUniMhdlgList.findRowExpr("mhdlgMgno == '"+objRtnValue["pvMhdlgMgno"]+"'");

        			if(objRtnValue["pvMhdlgMgno"] != "" && objRtnValue["pvMhdlgMgno"] != undefined) {
        				if(dRow < 0) {
        					var nRow = this.dsUniMhdlgList.addRow();
        					this.dsUniMhdlgList.setColumn(nRow, "chk", "N");
        					this.dsUniMhdlgList.setColumn(nRow, "mhdlgMgno", objRtnValue["pvMhdlgMgno"]);
        					this.dsUniMhdlgList.setColumn(nRow, "rvsnDgr", objRtnValue["pvMMhdlgDgr"]);
        					this.dsUniMhdlgList.setColumn(nRow, "mhdlgOrgtNm", objRtnValue["pvMhdlgOrgtNm"]);
        					this.dsUniMhdlgList.setColumn(nRow, "mhdlgKrnNm", objRtnValue["pvMhdlgKrnNm"]);
        				}
        				else {
        					this.gfnShowMessage(this, "W000022", "", "fnMsgCallback", "msgAlert01");
        				}
        			}

        			break;
        		// 사업수행자 팝업
        		case "popModalUserP01" :

        			var dRow = this.dsExcrList.findRowExpr("instMgno == '"+objRtnValue["pvInstMgno"]+"'");
        			//trace("popModalUserP01 dRow : " + dRow);
        			if(dRow < 0) {
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "chk", "N");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "masterYn", "N");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "instMgno", objRtnValue["pvInstMgno"]);
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCd", "DCC0001");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCdNm", "국내");
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bzentNm", objRtnValue["pvBzentNm"]);
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "brno", objRtnValue["pvBrno"]);
        				this.dsExcrList.setColumn(this.dsExcrList.rowposition, "rdcUnitCd", "");

        				this.divRExcr.form.cboDmstClCd.set_enable(true);
        				this.divRExcr.form.btnNm.set_visible(true);
        				this.divRExcr.form.edtNm.set_readonly(true);
        			}
        			else {
        				this.gfnShowMessage(this, "W000023", "", "fnMsgCallback", "msgAlert01");
        				this.dsExcrList.deleteRow(this.dsExcrList.rowposition);
        			}

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallPgmNtnList = function()
        {
        	//trace("프로그램 국가 리스트 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyPgmNtnRegList.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyPgmNtnRegList.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "pgmNtnList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsPgmInfo=dsPgmInfo";
         	objArgs.outds     		= "dsPgmNtnList=dsPgmNtnList dsUniNtnList=dsUniNtnList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallUniNtnList = function()
        {
        	//trace("단위 국가 리스트 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyUniNtnRegList.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyUniNtnRegList.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "uniNtnList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsUniInfo=dsUniInfo";
         	objArgs.outds     		= "dsUniNtnList=dsUniNtnList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallTmpSave = function()
        {
        	//trace("임시저장 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyTmp.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyTmp.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "tmpSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallSave = function()
        {
        	//trace("신청 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplySave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplySave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "save";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegReSave = function()
        {
        	//trace("문서보완 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyRegReSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyRegReSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "regReSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegReTmpSave = function()
        {
        	//trace("문서보완(임시저장) 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyRegReTmpSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyRegReTmpSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "regReTmpSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDocReSave = function()
        {
        	//trace("문서재제출 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDocReSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDocReSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "docReSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDocReTmpSave = function()
        {
        	//trace("문서재제출(임시저장) 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDocReTmpSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDocReTmpSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "docReTmpSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegDlbrTmpSave = function()
        {
        	//trace("심의 문서보완(임시저장) 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyRegDlbrTmpSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyRegDlbrTmpSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "regDlbrTmpSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegDlbrSave = function()
        {
        	//trace("심의-문서보완 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyRegDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyRegDlbrSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "regDlbrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDocDlbrTmpSave = function()
        {
        	//trace("심의- 문서재제출(임시저장) 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDocDlbrTmpSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDocDlbrTmpSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "docDlbrTmpSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDocDlbrSave = function()
        {
        	//trace("심의 - 문서재제출 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyDocDlbrSave.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyDocDlbrSave.irs";
        	}

        	var inDs = "";
        	inDs = inDs + "dsRegInfo=dsRegInfo ";
        	inDs = inDs + "dsBizInfo=dsBizInfo ";
        	inDs = inDs + "dsPgmInfo=dsPgmInfo ";
        	inDs = inDs + "dsPgmNtnList=dsPgmNtnList ";
        	inDs = inDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	inDs = inDs + "dsUniInfo=dsUniInfo ";
        	inDs = inDs + "dsUniNtnList=dsUniNtnList ";
        	inDs = inDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	inDs = inDs + "dsExcrList=dsExcrList ";
        	inDs = inDs + "dsPgmBizPlndFile=dsPgmBizPlndFile ";
        	inDs = inDs + "dsPgmEtcDataFile=dsPgmEtcDataFile ";
        	inDs = inDs + "dsUniBizPlndFile=dsUniBizPlndFile ";
        	inDs = inDs + "dsUniEtcDataFile=dsUniEtcDataFile ";
        	inDs = inDs + "dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";

        	var objArgs = {};
         	objArgs.svcId 			= "docDlbrSave";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= inDs;
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallRegBtnCtrl = function()
        {
        	//trace("등록수정 권한별 뷰처리 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyRegBtnCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyRegBtnCtrl.irs";
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

        this.fnCallRegInfo = function()
        {
        	//trace("등록 전 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrReg.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrReg.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "regInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= "dsRegUsrInfo=dsRegUsrInfo dsExcrList=dsExcrList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallModInfo = function()
        {
        	//trace("수정 전 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrMod.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrMod.irs";
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
        	outDs = outDs + "dsExcrList=dsExcrList";

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


        this.fnCallPgmModInfo = function()
        {
        	//trace("프로그램 수정 전 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrMod.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrMod.irs";
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
        	outDs = outDs + "dsExcrList=dsExcrList";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "pgmModInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallPgmRegInfo = function()
        {
        	//trace("프로그램에 단위사업 추가 전 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrPgmReg.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrPgmReg.irs";
        	}

        	var outDs = "";
        	outDs = outDs + "dsRegUsrInfo=dsRegUsrInfo ";
        	//outDs = outDs + "dsUsrInfo=dsUsrInfo ";
        	outDs = outDs + "dsBizInfo=dsBizInfo ";
        	outDs = outDs + "dsPgmInfo=dsPgmInfo ";
        	outDs = outDs + "dsPgmNtnList=dsPgmNtnList ";
        	outDs = outDs + "dsPgmMhdlgList=dsPgmMhdlgList ";
        	outDs = outDs + "dsUniNtnList=dsUniNtnList ";
        	outDs = outDs + "dsUniMhdlgList=dsUniMhdlgList ";
        	//outDs = outDs + "dsUniInfo=dsUniInfo ";
        	outDs = outDs + "dsExcrList=dsExcrList";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "pgmRegInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= outDs;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallRegReUp = function()
        {
        	//trace("문서보완 및 재제출 차수증가 후 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrCpMod.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrCpMod.irs";
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
        	outDs = outDs + "dsExcrList=dsExcrList";

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


        this.fnCallPgmRegReUp = function()
        {
        	//trace("프로그램안에 단위 문서보완 및 재제출 차수증가 후 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyBfrCpMod.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyBfrCpMod.irs";
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
        	outDs = outDs + "dsExcrList=dsExcrList";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "pgmModInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= outDs;
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
        			|| sts == "PGMDOCDLBRUP" || sts == "PGMDOCDLBR") {

        			this.divPrgm.set_height(this.hDivPrgm);
        			this.divRPrgm.set_height(0);
        			this.divPrgmFile.set_height(this.hDivPrgmFile);
        			this.divRPrgmFile.set_height(0);

        			// REDD PLUS - divPrgm
        			if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divPrgm.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divPrgm.form.chkReddPlusYn.set_visible(false);
        			}
        		}
        		// 프로그램 사업인 경우.
        		else {
        			this.divPrgm.set_height(0);
        			this.divRPrgm.set_height(this.hDivRPrgm);
        			this.divPrgmFile.set_height(0);
        			this.divRPrgmFile.set_height(this.hDivRPrgmFile);

        			// REDD PLUS - divRPrgm
        			if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divRPrgm.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divRPrgm.form.chkReddPlusYn.set_visible(false);
        			}
        		}
        		this.divH2.set_height(this.hDivH2);
        		this.divRBizUnit.form.chkBplcNm.set_visible(true);
        		this.divH3.form.resetScroll();
        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divRPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        		this.divRPrgmFile.form.resetScroll();
        		this.divRBizUnit.form.resetScroll();
        	}
        	else {
        		this.divH3.form.staRBizUnit.set_text("사업정보     ");
        		this.divH1.set_height(0);
        		this.divPrgm.set_height(0);
        		this.divRPrgm.set_height(0);
        		this.divH2.set_height(0);
        		this.divPrgmFile.set_height(0);
        		this.divRPrgmFile.set_height(0);
        		this.divRBizUnit.form.chkBplcNm.set_visible(false);

        		this.divH3.form.resetScroll();
        		this.divH1.form.resetScroll();
        		this.divPrgm.form.resetScroll();
        		this.divRPrgm.form.resetScroll();
        		this.divH2.form.resetScroll();
        		this.divPrgmFile.form.resetScroll();
        		this.divRPrgmFile.form.resetScroll();
        		this.divRBizUnit.form.resetScroll();
        	}

        	this.resetScroll();

        	// 업무파일 정보 호출
        	trace(">>> isSrhFileYn : " + isSrhFileYn);
        	if(isSrhFileYn == "Y") {
        		this.fnCallFileStart();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divRComBtn_btnList_onclick = function(obj,e)
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

        // 임시저장 버튼 클릭.
        this.divRComBtn_btnRegTmp_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallTmpSave();
        		}
        	});
        };

        // 단위 - 사업분야
        this.divRBizUnit_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		this.dsUniInfo.setColumn(0, "bizDtlsFldCd", "");
                var bizFldCdMgno = e.postvalue;
                this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
            }

        	if(e.prevalue != e.postvalue) {
        		this.dsUniMhdlgList.clearData();
        	}
        };

        // 프로그램 사업분야 변경 시.
        this.divRPrgm_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		this.dsPgmInfo.setColumn(0, "bizDtlsFldCd", "");
                var bizFldCdMgno = e.postvalue;
                this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdPgm.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
        		this.dsPgmInfo.setColumn(0, "reddPlusYn", "N");
        		this.divRPrgm.form.chkReddPlusYn.set_visible(false);

        		// 프로그램 사업이면, 단위사업에도 적용.
        		if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {
        			this.dsUniInfo.setColumn(0, "bizFldCd", e.postvalue);
        			this.getOwnerFrame().form.divWork.form.dsBizDtlsFldCdUni.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
        			this.dsUniInfo.setColumn(0, "bizDtlsFldCd", "");
        			this.dsUniInfo.setColumn(0, "reddPlusYn", "N");
        			this.divRBizUnit.form.chkReddPlusYn.set_visible(false);

        			this.dsPgmMhdlgList.clearData();
        			this.dsUniMhdlgList.clearData();
        		}
            }
        };

        // 프로그램 사업세부분야 변경 시.
        this.divRPrgm_cboBizDtlsFldCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
            {
        		// 프로그램 사업이면, 단위사업에도 적용.
        		if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {
        			this.dsUniInfo.setColumn(0, "bizDtlsFldCd", e.postvalue);

        			if(e.postvalue == "14-B") {
        				this.divRPrgm.form.chkReddPlusYn.set_visible(true);
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divRPrgm.form.chkReddPlusYn.set_visible(false);
        				this.divRBizUnit.form.chkReddPlusYn.set_visible(false);
        				this.dsPgmInfo.setColumn(0, "reddPlusYn", "N");
        			}

        			this.dsPgmMhdlgList.clearData();
        			this.dsUniMhdlgList.clearData();
        		}
            }
        };

        // 프로그램 협정약정 팝업 호출.
        this.divRPrgm_btnAgreeMgno_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalAgrstipPgmP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        // 프로그램 사업원문명 카피
        this.divRPrgm_chkBizOrgtNm_onchanged = function(obj,e)
        {
        	if(e.postvalue) {
        		this.dsPgmInfo.setColumn(0, "bizOrgtNm", this.dsBizInfo.getColumn(0, "bizOrgtNm"));
        	}
        	else {
        		this.dsPgmInfo.setColumn(0, "bizOrgtNm", "");
        	}
        };

        // 프로그램 사업국문명 카피
        this.divRPrgm_chkBizKrnNm_onchanged = function(obj,e)
        {
        	if(e.postvalue) {
        		this.dsPgmInfo.setColumn(0, "bizKrnNm", this.dsBizInfo.getColumn(0, "bizKrnNm"));
        	}
        	else {
        		this.dsPgmInfo.setColumn(0, "bizKrnNm", "");
        	}
        };

        // 프로그램사업 - 사업시행장소 그리드 셀 선택
        this.divRPrgm_grdBizEnfcPlcList_oncellclick = function(obj,e)
        {

        };

        // 단위사업 - 사업시행장소 그리드 셀 선택
        this.divRBizUnit_grdUnitPlc_oncellclick = function(obj,e)
        {

        };

        // 프로그램 - 방법론 삭제
        this.divRPrgm_btnMhdlgDel_onclick = function(obj,e)
        {
        	var arrRows = this.dsPgmMhdlgList.extractRows("chk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		for(var i=0; i < arrRows.length; i++) {
        			var mhdlgMgno = this.dsPgmMhdlgList.getColumn(arrRows[i], "mhdlgMgno");
        			this.dsUniMhdlgList.deleteMultiRows(this.dsUniMhdlgList.extractRows("mhdlgMgno=='"+mhdlgMgno+"'"));
        		}
        		this.dsPgmMhdlgList.deleteMultiRows(this.dsPgmMhdlgList.extractRows("chk=='Y'"));
        	}
        };

        // 프로그램사업 - 방법론 추가
        this.divRPrgm_btnMhdlgAdd_onclick = function(obj,e)
        {
        	//협정약정 선택여부 확인 필요.
        	if(this.dsPgmInfo.getColumn(0, "agreeMgno") == "" || this.dsPgmInfo.getColumn(0, "agreeMgno") == undefined) {
        		this.gfnShowMessage(this, "W000024", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		// 사업분야 콤보 선택여부 확인 필요.
        		if(this.dsPgmInfo.getColumn(0, "bizDtlsFldCd") == "") {
        			this.gfnShowMessage(this, "W000020", "", "fnMsgCallback", "msgAlert01");
        		}
        		else {
        			var sPopupId 	= "popModalMhdlgPgmP01";
        			var sMnuId 		= "MN99020000";
        			var oPosition	= {width:800,height:750};
        			var objArgs		= {agreeMgno:this.dsPgmInfo.getColumn(0, "agreeMgno")
        							  ,agreeDgr:this.dsPgmInfo.getColumn(0, "agreeDgr")
        							  ,bizFldCd:this.dsPgmInfo.getColumn(0, "bizFldCd")
        							  ,bizDtlsFldCd:this.dsPgmInfo.getColumn(0, "bizDtlsFldCd")
        							  ,reddPlusYn:this.dsPgmInfo.getColumn(0, "reddPlusYn")};
        			var oOption		= {callback:"fnPopupCallback",titletext:"방법론 모달(Modal) 검색 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}
        	}
        };

        // 단위사업 협정약정 검색
        this.divRBizUnit_btnAgreeMgno_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalAgrstipUniP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	// 프로그램 사업
        	if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {
        		if(this.dsPgmInfo.getColumn(0, "agreeMgno") != "") {
        			this.gfnShowMessage(this, "C000010", "", function(svcid, variant) {
        				if(variant == "OK") {
        					this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        				}
        			});
        		}
        	}
        	else {
        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        	}
        };

        // 단위 - 방법론 삭제
        this.divRBizUnit_btnMhdlgDel_onclick = function(obj,e)
        {
        	var arrRows = this.dsUniMhdlgList.extractRows("chk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsUniMhdlgList.deleteMultiRows(this.dsUniMhdlgList.extractRows("chk=='Y'"));
        	}
        };

        // 단위 - 방법론 추가
        this.divRBizUnit_btnMhdlgAdd_onclick = function(obj,e)
        {
        	//협정약정 선택여부 확인 필요.
        	if(this.dsUniInfo.getColumn(0, "agreeMgno") == "" || this.dsUniInfo.getColumn(0, "agreeMgno") == undefined) {
        		this.gfnShowMessage(this, "W000024", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		// 사업분야 콤보 선택여부 확인 필요.
        		if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "") {
        			this.gfnShowMessage(this, "W000020", "", "fnMsgCallback", "msgAlert01");
        		}
        		else {
        			var sPopupId 	= "popModalMhdlgUniP01";
        			var sMnuId 		= "MN99020000";
        			var oPosition	= {width:800,height:750};
        			var objArgs		= {agreeMgno:this.dsUniInfo.getColumn(0, "agreeMgno")
        							  ,agreeDgr:this.dsUniInfo.getColumn(0, "agreeDgr")
        							  ,bizFldCd:this.dsUniInfo.getColumn(0, "bizFldCd")
        							  ,bizDtlsFldCd:this.dsUniInfo.getColumn(0, "bizDtlsFldCd")
        							  ,reddPlusYn:this.dsUniInfo.getColumn(0, "reddPlusYn")};
        			var oOption		= {callback:"fnPopupCallback",titletext:"방법론 모달(Modal) 검색 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}
        	}
        };

        // 사업수행자 추가 버튼 클릭 시
        this.btnExcrAdd_onclick = function(obj,e)
        {
        	this.dsExcrList.addRow();
        	this.dsExcrList.setColumn(this.dsExcrList.rowposition, "chk", "N");
        	this.dsExcrList.setColumn(this.dsExcrList.rowposition, "masterYn", "N");
        	this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCd", "DCC0001");
        	this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCdNm", "국내");
        	this.dsExcrList.setColumn(this.dsExcrList.rowposition, "rdcUnitCd", "");

        	// 사업수행자 검색 팝업 호출.
        	var sPopupId 	= "popModalUserP01";
        	var sMnuId 		= "MN99030000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"사업수행자 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        // 사업수행자 삭제 클릭 시
        this.btnExcrDel_onclick = function(obj,e)
        {
        	var arrRows = this.dsExcrList.extractRows("chk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsExcrList.deleteMultiRows(this.dsExcrList.extractRows("chk=='Y'"));
        		this.dsExcrList.set_rowposition(0);
        	}
        };

        this.divRExcr_btnNm_onclick = function(obj,e)
        {
        	// 사업수행자 검색 팝업 호출.
        	var sPopupId 	= "popModalUserP01";
        	var sMnuId 		= "MN99030000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"사업수행자 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        // 사업유형 콤보 변경 시
        this.divRCmm_cboBizTypeCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		// 사업규모 코드 처리.
        		var bizScalCd = e.postvalue;
        		//trace("bizScalCd : " + bizScalCd);
        		if(bizScalCd == "BTC0001") {
        			// 사업규모 필터.
        			this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        		} else if(bizScalCd == "BTC0002") {
        			// 사업규모 필터.
        			this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0004' || cdMgno == 'BSC0005'");
        		} else {
        			// 사업규모 필터.
        			this.getOwnerFrame().form.divWork.form.dsBizScalCdS.filter("cdMgno == '' || cdMgno == 'BSC0001' || cdMgno == 'BSC0002' || cdMgno == 'BSC0003'");
        		}
        		this.fnDivCtrl("N");
        	}
        };

        // 단위사업 - 감축량 단위 콤보 변경시
        this.divRBizUnit_cboRdcUnitCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		// tCO2-eq
        		if(e.postvalue == "RUC0001") {
        			this.dsUniInfo.setColumn(0, "atcnvrRdcqty", this.dsUniInfo.getColumn(0, "bfcnvrRdcqty"));
        			this.divRBizUnit.form.edtCnvrCoefCn.set_value("");
        			this.divRBizUnit.form.edtCnvrBassCn.set_value("");
        			this.divRBizUnit.form.edtCnvrCoefCn.set_enable("false");
        			this.divRBizUnit.form.mseAtcnvrRdcqty.set_enable("false");
        			this.divRBizUnit.form.edtCnvrBassCn.set_enable("false");
        		}
        		else if(e.postvalue == "") {
        			this.dsUniInfo.setColumn(0, "atcnvrRdcqty", "");
        			this.divRBizUnit.form.edtCnvrCoefCn.set_value("");
        			this.divRBizUnit.form.edtCnvrBassCn.set_value("");
        			this.divRBizUnit.form.edtCnvrCoefCn.set_enable("false");
        			this.divRBizUnit.form.mseAtcnvrRdcqty.set_enable("false");
        			this.divRBizUnit.form.edtCnvrBassCn.set_enable("false");
        		}
        		else {
        			this.divRBizUnit.form.edtCnvrCoefCn.set_enable("true");
        			this.divRBizUnit.form.mseAtcnvrRdcqty.set_enable("true");
        			this.divRBizUnit.form.edtCnvrBassCn.set_enable("true");
        		}
        	}
        };

        // 신청 버튼 클릭 시
        this.divRComBtn_btnReg_onclick = function(obj,e)
        {
        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave();
        		}
        	});
        };

        // 단위사업 원문 카피
        this.divRBizUnit_chkBizOrgtNm_onchanged = function(obj,e)
        {
        	if(e.postvalue) {
        		if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {	// 프로그램사업
        			if(this.dsRegInfo.getColumn(0, "sts") == "PGMREG"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMMOD"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGREUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGRE"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCREUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCRE"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGDLBRUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGDLBR"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCDLBRUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCDLBR"
        				) {
        				this.dsUniInfo.setColumn(0, "bizOrgtNm", this.dsBizInfo.getColumn(0, "bizOrgtNm"));
        			}else {
        				this.dsUniInfo.setColumn(0, "bizOrgtNm", this.dsPgmInfo.getColumn(0, "bizOrgtNm"));
        			}
        		}
        		else if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0001" || this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0002") {
        			this.dsUniInfo.setColumn(0, "bizOrgtNm", this.dsBizInfo.getColumn(0, "bizOrgtNm"));
        		}
        	}
        	else {
        		this.dsUniInfo.setColumn(0, "bizOrgtNm", "");
        	}
        };

        // 단위사업 국문 카피
        this.divRBizUnit_chkBizKrnNm_onchanged = function(obj,e)
        {
        	if(e.postvalue) {
        		if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {	// 프로그램사업
        			if(this.dsRegInfo.getColumn(0, "sts") == "PGMREG"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMMOD"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGREUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGRE"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCREUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCRE"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGDLBRUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMREGDLBR"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCDLBRUP"
        				|| this.dsRegInfo.getColumn(0, "sts") == "PGMDOCDLBR"
        				) {
        				this.dsUniInfo.setColumn(0, "bizKrnNm", this.dsBizInfo.getColumn(0, "bizKrnNm"));
        			}else {
        				this.dsUniInfo.setColumn(0, "bizKrnNm", this.dsPgmInfo.getColumn(0, "bizKrnNm"));
        			}
        		}
        		else if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0001" || this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0002") {
        			this.dsUniInfo.setColumn(0, "bizKrnNm", this.dsBizInfo.getColumn(0, "bizKrnNm"));
        		}
        	}
        	else {
        		this.dsUniInfo.setColumn(0, "bizKrnNm", "");
        	}
        };

        // 단위사업 사업장명 카피
        this.divRBizUnit_chkBplcNm_onchanged = function(obj,e)
        {
        	if(this.dsBizInfo.getColumn(0, "bizTypeCd") == "BTC0003") {	// 프로그램사업
        		if(e.postvalue) {
        			this.dsUniInfo.setColumn(0, "bplcNm", this.dsPgmInfo.getColumn(0, "bplcNm"));
        		}
        		else {
        			this.dsUniInfo.setColumn(0, "bplcNm", "");
        		}
        	}
        };

        // 단위사업 신청구분이 기승인 신청건인 경우에만 고유번호를 열어준다.
        this.divRBizUnit_rdoAplyClCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "APC0003") {	// 기승인신청 건
        		this.divRBizUnit.form.edtBizUnqno.set_enable(true);
        	}
        	else {
        		this.divRBizUnit.form.edtBizUnqno.set_enable(false);
        		this.dsUniInfo.setColumn(0, "bizUnqno", "");
        	}
        };

        // 단위사업 환산전 변경시 환산 후 같이 바꿔주기
        this.divRBizUnit_mseBfcnvrRdcqty_onchanged = function(obj,e)
        {
        	if(this.dsUniInfo.getColumn(0, "rdcUnitCd") == "RUC0001") {		//TCO2-EQ
        		this.dsUniInfo.setColumn(0, "atcnvrRdcqty", e.postvalue);
        	}
        };

        // 사업수행자 환산전 변경시 환산 후 같이 바꿔주기
        this.divRExcr_mseBfcnvrRdcqty_onchanged = function(obj,e)
        {
        	if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "rdcUnitCd") == "RUC0001") {		//TCO2-EQ
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", e.postvalue);
        	}
        };

        // 사업수행자 데이터셋의 row 변경시 - 폼 구성요소를 컨트롤 함.
        this.dsExcrList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		var masterYn = this.dsExcrList.getColumn(e.newrow, "masterYn");
        		var dmstClCd = this.dsExcrList.getColumn(e.newrow, "dmstClCd");
        		var bzentNm = this.dsExcrList.getColumn(e.newrow, "bzentNm");

        		// 추가를 누를때 발생하는듯 함.
        		if(masterYn == undefined || dmstClCd == undefined || bzentNm == undefined) {
        			this.divRExcr.form.cboDmstClCd.set_enable(true);
        			this.divRExcr.form.edtNm.set_enable(false);
        			this.divRExcr.form.btnNm.set_visible(true);
        			this.divRExcr.form.edtNo.set_enable(false);
        			this.divRExcr.form.mseBfcnvrRdcqty.set_enable(true);
        			this.divRExcr.form.cboRdcUnitCd.set_enable(true);
        			this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        			this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        			this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        			this.divRExcr.form.chkAgreYn.set_enable(false);
        			this.divRExcr.form.chkAgreYn.set_visible(false);

        			this.divRExcr.form.resetScroll();
        		}
        		else {
        			// 대표라면
        			if(masterYn == "Y") {
        				this.divRExcr.form.cboDmstClCd.set_enable(false);
        				this.divRExcr.form.edtNm.set_enable(false);
        				this.divRExcr.form.btnNm.set_visible(false);
        				this.divRExcr.form.edtNo.set_enable(false);
        				this.divRExcr.form.mseBfcnvrRdcqty.set_enable(true);
        				this.divRExcr.form.cboRdcUnitCd.set_enable(true);
        				//this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        				//this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        				//this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				this.divRExcr.form.chkAgreYn.set_enable(true);
        				this.divRExcr.form.chkAgreYn.set_visible(true);

        				// 단위콤보 컨트롤 부분.
        				if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "rdcUnitCd") == "RUC0001") {		// tCO2-eq
        					var bfcnvrRdcqty = this.dsExcrList.getColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", bfcnvrRdcqty);
        					//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        					//this.divRExcr.form.edtCnvrBassCn.set_value("");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				}
        				else if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "rdcUnitCd") == "") {
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", "");
        					//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        					//this.divRExcr.form.edtCnvrBassCn.set_value("");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				}
        				else {
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(true);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(true);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(true);
        				}

        				this.divRExcr.form.resetScroll();
        			}
        			// 그 외 사업 수행자.
        			else {
        				this.divRExcr.form.cboDmstClCd.set_enable(true);
        				//this.divRExcr.form.edtNm.set_enable(false);
        				//this.divRExcr.form.btnNm.set_visible(true);
        				this.divRExcr.form.edtNo.set_enable(false);
        				this.divRExcr.form.mseBfcnvrRdcqty.set_enable(true);
        				this.divRExcr.form.cboRdcUnitCd.set_enable(true);
        				//this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        				//this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        				//this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				this.divRExcr.form.chkAgreYn.set_enable(false);
        				this.divRExcr.form.chkAgreYn.set_visible(false);

        				//국내.해외 컨트롤 부분.
        // 				if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "dmstClCd") == "DCC0001") {
        // 					this.divRExcr.form.edtNm.set_enable(false);
        // 					this.divRExcr.form.btnNm.set_visible(true);
        // 				}
        // 				else {
        // 					this.divRExcr.form.edtNm.set_enable(true);
        // 					this.divRExcr.form.btnNm.set_visible(false);
        // 				}

        				// 단위콤보 컨트롤 부분.
        				if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "rdcUnitCd") == "RUC0001") {		// tCO2-eq
        					var bfcnvrRdcqty = this.dsExcrList.getColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", bfcnvrRdcqty);
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        					//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        					//this.divRExcr.form.edtCnvrBassCn.set_value("");
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				}
        				else if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "rdcUnitCd") == "") {
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", "");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        					this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        					//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        					//this.divRExcr.form.edtCnvrBassCn.set_value("");
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        				}
        				else {
        					this.divRExcr.form.edtCnvrCoefCn.set_enable(true);
        					this.divRExcr.form.mseAtcnvrRdcqty.set_enable(true);
        					this.divRExcr.form.edtCnvrBassCn.set_enable(true);
        				}

        				this.divRExcr.form.resetScroll();
        			}
        		}
        	}
        };

        // 사업수행자 국내해외 콤보 변경 시 - 데이터셋을 초기화 해줌.
        this.divRExcr_cboDmstClCd_onitemchanged = function(obj,e)
        {
        	//국내해외 컨트롤 부분.
        // 	if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "dmstClCd") == "DCC0001") {
        // 		this.divRExcr.form.edtNm.set_enable(false);
        // 		this.divRExcr.form.btnNm.set_visible(true);
        // 	}
        // 	else {
        // 		this.divRExcr.form.edtNm.set_enable(true);
        // 		this.divRExcr.form.btnNm.set_visible(false);
        // 	}
        // 	this.divRExcr.form.resetScroll();

        	if(e.prevalue != e.postvalue) {
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "chk", "N");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "masterYn", "N");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bizMngNo", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bizDgr", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "sn", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "instMgno", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCd", e.postvalue);
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "dmstClCdNm", e.posttext);
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bzentNm", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "brno", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "rdcUnitCd", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "agreYn", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "agreYmd", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "instAgreYn", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "instAgreYmd", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bfcnvrRdcqtyNm", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqtyNm", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "lstAgreYnNm", "");
        		this.dsExcrList.setColumn(this.dsExcrList.rowposition, "lstAgreYn", "");
        	}
        };

        // 사업 수행자 단위 변경 시
        this.divRExcr_cboRdcUnitCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {

        		// tCO2-eq
        		if(e.postvalue == "RUC0001") {
        			var bfcnvrRdcqty = this.dsExcrList.getColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty");
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", bfcnvrRdcqty);
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        			//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        			//this.divRExcr.form.edtCnvrBassCn.set_value("");
        			this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        			this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        			this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        		}
        		else if(e.postvalue == "") {
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "atcnvrRdcqty", "");
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrCoefCn", "");
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "cnvrBassCn", "");
        			//this.divRExcr.form.edtCnvrCoefCn.set_value("");
        			//this.divRExcr.form.edtCnvrBassCn.set_value("");
        			this.divRExcr.form.edtCnvrCoefCn.set_enable(false);
        			this.divRExcr.form.mseAtcnvrRdcqty.set_enable(false);
        			this.divRExcr.form.edtCnvrBassCn.set_enable(false);
        		}
        		else {
        			this.divRExcr.form.edtCnvrCoefCn.set_enable(true);
        			this.divRExcr.form.mseAtcnvrRdcqty.set_enable(true);
        			this.divRExcr.form.edtCnvrBassCn.set_enable(true);
        		}
        		this.divRExcr.form.resetScroll();
        	}
        };

        // 문서보완 클릭 시
        this.divRComBtn_btnRegRe_onclick = function(obj,e)
        {
        	var sts = this.dsRegInfo.getColumn(0, "sts");

        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(sts == "REGRE" || sts == "REGREUP" || sts == "PGMREGRE" || sts == "PGMREGREUP") {
        				this.fnCallRegReSave();
        			}else if(sts == "REGDLBR" || sts == "REGDLBRUP" || sts == "PGMREGDLBR" || sts == "PGMREGDLBRUP") {
        				this.fnCallRegDlbrSave();
        			}
        		}
        	});
        };

        // 문서보완 임시저장 클릭 시
        this.divRComBtn_btnRegReTmp_onclick = function(obj,e)
        {
        	var sts = this.dsRegInfo.getColumn(0, "sts");

        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(sts == "REGRE" || sts == "REGREUP" || sts == "PGMREGRE" || sts == "PGMREGREUP") {
        				this.fnCallRegReTmpSave();
        			}else if(sts == "REGDLBR" || sts == "REGDLBRUP" || sts == "PGMREGDLBR" || sts == "PGMREGDLBRUP") {
        				this.fnCallRegDlbrTmpSave();
        			}
        		}
        	});
        };

        // 문서재제출 클릭 시.
        this.divRComBtn_btnDocRe_onclick = function(obj,e)
        {
        	var sts = this.dsRegInfo.getColumn(0, "sts");

        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(sts == "DOCRE" || sts == "DOCREUP" || sts == "PGMDOCRE" || sts == "PGMDOCREUP") {
        				this.fnCallDocReSave();
        			}else if(sts == "DOCDLBR" || sts == "DOCDLBRUP" || sts == "PGMDOCDLBR" || sts == "PGMDOCDLBRUP") {
        				this.fnCallDocDlbrSave();
        			}
        		}
        	});
        };

        // 문서재제출 임시저장 클릭 시.
        this.divRComBtn_btnDocReTmp_onclick = function(obj,e)
        {
        	var sts = this.dsRegInfo.getColumn(0, "sts");

        	if(!this.fnCallValidCheckDivRCmm()) return false;

        	// 프로그램사업
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");
        	var bizMngNo = this.dsRegInfo.getColumn(0, "bizMngNo");
        	var pgmBizMngNo = this.dsRegInfo.getColumn(0, "pgmBizMngNo");

        	if(bizTypeCd == "BTC0003") {
        		if((bizMngNo == undefined || bizMngNo == "")
        			|| (bizMngNo != undefined && bizMngNo != "" && bizMngNo == pgmBizMngNo)
        		) {
        			if(!this.fnCallValidCheckDivRPrgm()) return false;
        		}
        	}

        	if(!this.fnCallValidCheckDivRBizUnit()) return false;

        	if(!this.fnCallValidCheckCompare()) return false;

        	if(!this.fnCallValidCheckDivRExcr()) return false;

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(sts == "DOCRE" || sts == "DOCREUP" || sts == "PGMDOCRE" || sts == "PGMDOCREUP") {
        				this.fnCallDocReTmpSave();
        			}else if(sts == "DOCDLBR" || sts == "DOCDLBRUP" || sts == "PGMDOCDLBR" || sts == "PGMDOCDLBRUP") {
        				this.fnCallDocDlbrTmpSave();
        			}
        		}
        	});
        };

        // sop 단위 변경시 mask 변경
        this.divRBizUnit_rdoSop_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "SUC0001") {
        		this.divRBizUnit.form.mseSop.set_format("#,##0");
        	}
        	else if(e.postvalue == "SUC0002") {
        		this.divRBizUnit.form.mseSop.set_format("##0.0");
        	}
        };

        // omge 단위 변경시 mask 변경
        this.divRBizUnit_rdoOmge_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "OUC0001") {
        		this.divRBizUnit.form.mseOmge.set_format("#,##0");
        	}
        	else if(e.postvalue == "OUC0002") {
        		this.divRBizUnit.form.mseOmge.set_format("##0.0");
        	}
        };

        this.fnCallValidCheckDivRCmm = function()
        {
        	var bizOrgtNm = this.dsBizInfo.getColumn(0, "bizOrgtNm");
        	var bizKrnNm = this.dsBizInfo.getColumn(0, "bizKrnNm");
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");

        	if(this.fnChkKor(this.divRCmm.form.edtEngNm.text)) {
        		this.gfnShowMessage(this, "W000035", "사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        		this.divRCmm.form.edtEngNm.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(bizOrgtNm)) {
        		this.divRCmm.form.edtEngNm.set_cssclass("error");
        		this.divRCmm.form.edtEngNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(원문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRCmm.form.edtEngNm.set_cssclass(""); }

        	if(this.gfnIsNull(bizKrnNm)) {
        		this.divRCmm.form.edtKrNm.set_cssclass("error");
        		this.divRCmm.form.edtKrNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(국문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRCmm.form.edtKrNm.set_cssclass(""); }

        	if(this.gfnIsNull(bizTypeCd)) {
        		this.divRCmm.form.cboBizTypeCd.set_cssclass("error");
        		this.divRCmm.form.cboBizTypeCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업유형", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRCmm.form.cboBizTypeCd.set_cssclass(""); }

        	return true;
        };

        this.fnCallValidCheckDivRPrgm = function()
        {
        	var agreeClausCd 	= this.dsPgmInfo.getColumn(0, "agreeClausCd");
        	var agreeMgno 		= this.dsPgmInfo.getColumn(0, "agreeMgno");
        	var bplcNm 			= this.dsPgmInfo.getColumn(0, "bplcNm");
        	var bizOrgtNm 		= this.dsPgmInfo.getColumn(0, "bizOrgtNm");
        	var bizKrnNm 		= this.dsPgmInfo.getColumn(0, "bizKrnNm");
        	var certVldBgngYmd 	= this.dsPgmInfo.getColumn(0, "certVldBgngYmd");
        	var certVldEndYmd 	= this.dsPgmInfo.getColumn(0, "certVldEndYmd");
        	var bizFldCd 		= this.dsPgmInfo.getColumn(0, "bizFldCd");
        	var bizDtlsFldCd 	= this.dsPgmInfo.getColumn(0, "bizDtlsFldCd");
        	var bizPlndFlmno 	= this.dsPgmInfo.getColumn(0, "bizPlndFlmno");

        	if(this.fnChkKor(this.divRPrgm.form.edtBizOrgtNm.text)) {
        		this.gfnShowMessage(this, "W000035", "프로그램 사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        		this.divRPrgm.form.edtBizOrgtNm.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(agreeClausCd)) {
        		this.divRPrgm.form.cboAgreeClausCd.set_cssclass("error");
        		this.divRPrgm.form.cboAgreeClausCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "파리협정조항", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.cboAgreeClausCd.set_cssclass(""); }
        	if(this.gfnIsNull(agreeMgno)) {
        		this.divRPrgm.form.edtAgreeMgno.set_cssclass("error");
        		this.divRPrgm.form.edtAgreeMgno.setFocus();
        		this.gfnShowMessage(this, "W000025", "협정·약정·MOU", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.edtAgreeMgno.set_cssclass(""); }
        	if(this.gfnIsNull(bplcNm)) {
        		this.divRPrgm.form.edtBplcNm.set_cssclass("error");
        		this.divRPrgm.form.edtBplcNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업장명", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.edtBplcNm.set_cssclass(""); }
        	if(this.gfnIsNull(bizOrgtNm)) {
        		this.divRPrgm.form.edtBizOrgtNm.set_cssclass("error");
        		this.divRPrgm.form.edtBizOrgtNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(원문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.edtBizOrgtNm.set_cssclass(""); }
        	if(this.gfnIsNull(bizKrnNm)) {
        		this.divRPrgm.form.edtBizKrnNm.set_cssclass("error");
        		this.divRPrgm.form.edtBizKrnNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(국문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.edtBizKrnNm.set_cssclass(""); }
        	if(this.gfnIsNull(certVldBgngYmd)) {
        		this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divRPrgm.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass(""); }
        	if(this.gfnIsNull(certVldEndYmd)) {
        		this.divRPrgm.form.divCalFromTo.form.calTo.set_cssclass("error");
        		this.divRPrgm.form.divCalFromTo.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.divCalFromTo.form.calTo.set_cssclass(""); }
        	if(this.gfnIsNull(bizFldCd)) {
        		this.divRPrgm.form.cboBizFldCd.set_cssclass("error");
        		this.divRPrgm.form.cboBizFldCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업분야", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.cboBizFldCd.set_cssclass(""); }
        	if(this.gfnIsNull(bizDtlsFldCd)) {
        		this.divRPrgm.form.cboBizDtlsFldCd.set_cssclass("error");
        		this.divRPrgm.form.cboBizDtlsFldCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업세부분야", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.cboBizDtlsFldCd.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldBgngYmd) != 8) {
        		this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divRPrgm.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldEndYmd) != 8) {
        		this.divRPrgm.form.divCalFromTo.form.calTo.set_cssclass("error");
        		this.divRPrgm.form.divCalFromTo.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.divCalFromTo.form.calTo.set_cssclass(""); }

        	if(nexacro.toNumber(certVldBgngYmd) >= nexacro.toNumber(certVldEndYmd)) {
        		this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass("error");
        		this.divRPrgm.form.divCalFromTo.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000004", "", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRPrgm.form.divCalFromTo.form.calFrom.set_cssclass(""); }

        	if(this.dsPgmNtnList.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "프로그램 사업정보의 사업시행장소", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	if(this.dsPgmMhdlgList.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "프로그램 사업정보의 방법론", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	// 유치국가 선택유무
        	var arrRows = this.dsPgmNtnList.extractRows("ntnChk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000025", "사업시행장소의 유치국가 선택", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	// 사업계획서
        	if(this.dsPgmBizPlndFile.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "사업계획서", "fnMsgCallback", "msgAlert01"); return false;
        	} else { }

        	return true;
        };

        this.fnCallValidCheckDivRBizUnit = function()
        {
        	var aplyClCd		= this.dsUniInfo.getColumn(0, "aplyClCd");
        	var agreeClausCd 	= this.dsUniInfo.getColumn(0, "agreeClausCd");
        	var agreeMgno 		= this.dsUniInfo.getColumn(0, "agreeMgno");
        	var bplcNm 			= this.dsUniInfo.getColumn(0, "bplcNm");
        	var bizFormCd 		= this.dsUniInfo.getColumn(0, "bizFormCd");
        	var bizScalCd 		= this.dsUniInfo.getColumn(0, "bizScalCd");
        	var bizOrgtNm 		= this.dsUniInfo.getColumn(0, "bizOrgtNm");
        	var bizKrnNm 		= this.dsUniInfo.getColumn(0, "bizKrnNm");
        	var certVldTypeCd 	= this.dsUniInfo.getColumn(0, "certVldTypeCd");
        	var certVldBgngYmd 	= this.dsUniInfo.getColumn(0, "certVldBgngYmd");
        	var certVldEndYmd 	= this.dsUniInfo.getColumn(0, "certVldEndYmd");
        	var koffPrnmntYmd	= this.dsUniInfo.getColumn(0, "koffPrnmntYmd");
        	var bfcnvrRdcqty	= this.dsUniInfo.getColumn(0, "bfcnvrRdcqty");
        	var rdcUnitCd 		= this.dsUniInfo.getColumn(0, "rdcUnitCd");
        	var bizFldCd 		= this.dsUniInfo.getColumn(0, "bizFldCd");
        	var bizDtlsFldCd 	= this.dsUniInfo.getColumn(0, "bizDtlsFldCd");
        	var bizUnqno		= this.dsUniInfo.getColumn(0, "bizUnqno");
        	var bizPlndFlmno 	= this.dsUniInfo.getColumn(0, "bizPlndFlmno");
        	var rdcUnitCd 		= this.dsUniInfo.getColumn(0, "rdcUnitCd");
        	var cnvrCoefCn 		= this.dsUniInfo.getColumn(0, "cnvrCoefCn");
        	var cnvrBassCn 		= this.dsUniInfo.getColumn(0, "cnvrBassCn");
        	var cnvrBassDataFlmno 	= this.dsUniInfo.getColumn(0, "cnvrBassDataFlmno");
        	var atcnvrRdcqty	= this.dsUniInfo.getColumn(0, "atcnvrRdcqty");

        	if(this.fnChkKor(this.divRBizUnit.form.edtBizOrgtNm.text)) {
        		this.gfnShowMessage(this, "W000035", "사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        		this.divRBizUnit.form.edtBizOrgtNm.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(aplyClCd)) {
        		this.divRBizUnit.form.rdoAplyClCd.set_cssclass("error");
        		this.divRBizUnit.form.rdoAplyClCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "신청구분", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.rdoAplyClCd.set_cssclass(""); }
        	if(this.gfnIsNull(agreeClausCd)) {
        		this.divRBizUnit.form.cboAgreeClausCd.set_cssclass("error");
        		this.divRBizUnit.form.cboAgreeClausCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "파리협정조항", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboAgreeClausCd.set_cssclass(""); }
        	if(this.gfnIsNull(agreeMgno)) {
        		this.divRBizUnit.form.edtAgreeMgno.set_cssclass("error");
        		this.divRBizUnit.form.edtAgreeMgno.setFocus();
        		this.gfnShowMessage(this, "W000025", "협정·약정·MOU", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.edtAgreeMgno.set_cssclass(""); }
        	if(this.gfnIsNull(bplcNm)) {
        		this.divRBizUnit.form.edtBplcNm.set_cssclass("error");
        		this.divRBizUnit.form.edtBplcNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업장명", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.edtBplcNm.set_cssclass(""); }
        	if(this.gfnIsNull(bizFormCd)) {
        		this.divRBizUnit.form.cboBizFormCd.set_cssclass("error");
        		this.divRBizUnit.form.cboBizFormCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업형태", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboBizFormCd.set_cssclass(""); }
        	if(this.gfnIsNull(bizScalCd)) {
        		this.divRBizUnit.form.cboBizScalCd.set_cssclass("error");
        		this.divRBizUnit.form.cboBizScalCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업규모", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboBizScalCd.set_cssclass(""); }
        	if(this.gfnIsNull(bizOrgtNm)) {
        		this.divRBizUnit.form.edtBizOrgtNm.set_cssclass("error");
        		this.divRBizUnit.form.edtBizOrgtNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(원문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.edtBizOrgtNm.set_cssclass(""); }
        	if(this.gfnIsNull(bizKrnNm)) {
        		this.divRBizUnit.form.edtBizKrnNm.set_cssclass("error");
        		this.divRBizUnit.form.edtBizKrnNm.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업명(국문)", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.edtBizKrnNm.set_cssclass(""); }
        	if(this.gfnIsNull(certVldTypeCd)) {
        		this.divRBizUnit.form.rdoCertVldTypeCd.set_cssclass("error");
        		this.divRBizUnit.form.rdoCertVldTypeCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간유형", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.rdoCertVldTypeCd.set_cssclass(""); }
        	if(this.gfnIsNull(certVldBgngYmd)) {
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass("error");
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass(""); }
        	if(this.gfnIsNull(certVldEndYmd)) {
        		this.divRBizUnit.form.divCalFromTo2.form.calTo.set_cssclass("error");
        		this.divRBizUnit.form.divCalFromTo2.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000025", "인증유효기간종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalFromTo2.form.calTo.set_cssclass(""); }
        	if(this.gfnIsNull(koffPrnmntYmd)) {
        		this.divRBizUnit.form.divCalDay.form.calYmd.set_cssclass("error");
        		this.divRBizUnit.form.divCalDay.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000025", "착수예정일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalDay.form.calYmd.set_cssclass(""); }
        	if(this.gfnIsNull(bfcnvrRdcqty)) {
        		this.divRBizUnit.form.mseBfcnvrRdcqty.set_cssclass("error");
        		this.divRBizUnit.form.mseBfcnvrRdcqty.setFocus();
        		this.gfnShowMessage(this, "W000025", "연평균 온실가스배출 감축량", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.mseBfcnvrRdcqty.set_cssclass(""); }
        	if(this.gfnIsNull(rdcUnitCd)) {
        		this.divRBizUnit.form.cboRdcUnitCd.set_cssclass("error");
        		this.divRBizUnit.form.cboRdcUnitCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "온실가스배출 단위", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboRdcUnitCd.set_cssclass(""); }
        	if(this.gfnIsNull(bizFldCd)) {
        		this.divRBizUnit.form.cboBizFldCd.set_cssclass("error");
        		this.divRBizUnit.form.cboBizFldCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업분야", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboBizFldCd.set_cssclass(""); }
        	if(this.gfnIsNull(bizDtlsFldCd)) {
        		this.divRBizUnit.form.cboBizDtlsFldCd.set_cssclass("error");
        		this.divRBizUnit.form.cboBizDtlsFldCd.setFocus();
        		this.gfnShowMessage(this, "W000025", "사업세부분야", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.cboBizDtlsFldCd.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldBgngYmd) != 8) {
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass("error");
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 시작일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass(""); }

        	if(this.gfnLengthByte(certVldEndYmd) != 8) {
        		this.divRBizUnit.form.divCalFromTo2.form.calTo.set_cssclass("error");
        		this.divRBizUnit.form.divCalFromTo2.form.calTo.setFocus();
        		this.gfnShowMessage(this, "W000026", "인증유효기간 종료일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalFromTo2.form.calTo.set_cssclass(""); }

        	if(nexacro.toNumber(certVldBgngYmd) >= nexacro.toNumber(certVldEndYmd)) {
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass("error");
        		this.divRBizUnit.form.divCalFromTo2.form.calFrom.setFocus();
        		this.gfnShowMessage(this, "W000004", "", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalFromTo2.form.calFrom.set_cssclass(""); }

        	if(this.gfnLengthByte(koffPrnmntYmd) != 8) {
        		this.divRBizUnit.form.divCalDay.form.calYmd.set_cssclass("error");
        		this.divRBizUnit.form.divCalDay.form.calYmd.setFocus();
        		this.gfnShowMessage(this, "W000026", "착수예정일자", "fnMsgCallback", "msgAlert01");
        		return false;
        	} else { this.divRBizUnit.form.divCalDay.form.calYmd.set_cssclass(""); }

        	if(this.dsUniNtnList.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "사업시행장소", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	if(this.dsUniMhdlgList.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "방법론", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	// 유치국가 선택유무
        	var arrRows = this.dsUniNtnList.extractRows("ntnChk=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000025", "사업시행장소의 유치국가 선택", "fnMsgCallback", "msgAlert01"); return false;
        	}
        	trace("aplyClCd : " + aplyClCd);
        	if(aplyClCd != undefined && aplyClCd == "APC0003") {		// 기승인신청건
        		if(this.gfnIsNull(bizUnqno)) {
        			this.divRBizUnit.form.edtBizUnqno.set_cssclass("error");
        			this.divRBizUnit.form.edtBizUnqno.setFocus();
        			this.gfnShowMessage(this, "W000025", "사업고유번호", "fnMsgCallback", "msgAlert01");
        			return false;
        		} else { this.divRBizUnit.form.edtBizUnqno.set_cssclass(""); }
        	}

        	// 사업계획서
        	if(this.dsUniBizPlndFile.getRowCount() < 1) {
        		this.gfnShowMessage(this, "W000025", "사업계획서", "fnMsgCallback", "msgAlert01"); return false;
        	} else { }

        	// 배출감축량 환산전 단위
        	if(rdcUnitCd == "RUC0002" || rdcUnitCd == "RUC0003") {
        		if(this.gfnIsNull(cnvrCoefCn)) {
        			this.divRBizUnit.form.edtCnvrCoefCn.set_cssclass("error");
        			this.divRBizUnit.form.edtCnvrCoefCn.setFocus();
        			this.gfnShowMessage(this, "W000025", "환산 계수", "fnMsgCallback", "msgAlert01");
        			return false;
        		} else { this.divRBizUnit.form.edtCnvrCoefCn.set_cssclass(""); }
        		if(this.gfnIsNull(cnvrBassCn)) {
        			this.divRBizUnit.form.edtCnvrBassCn.set_cssclass("error");
        			this.divRBizUnit.form.edtCnvrBassCn.setFocus();
        			this.gfnShowMessage(this, "W000025", "환산 근거", "fnMsgCallback", "msgAlert01");
        			return false;
        		} else { this.divRBizUnit.form.edtCnvrBassCn.set_cssclass(""); }
        		if(this.dsUniCnvrBassDataFile.getRowCount() < 1) {
        			this.gfnShowMessage(this, "W000025", "환산근거자료", "fnMsgCallback", "msgAlert01"); return false;
        		} else { }
        	}
        	if(this.gfnIsNull(atcnvrRdcqty)) {
        		this.divRBizUnit.form.mseAtcnvrRdcqty.set_cssclass("error"); this.divRBizUnit.form.mseAtcnvrRdcqty.setFocus(); this.gfnShowMessage(this, "W000025", "연평균 온실가스 배출 감축량", "fnMsgCallback", "msgAlert01"); return false;
        	} else { this.divRBizUnit.form.mseAtcnvrRdcqty.set_cssclass(""); }

        	return true;
        };

        // 사업수행자 체크
        this.fnCallValidCheckDivRExcr = function()
        {
        	var atcnvrRdcqty = 0;
        	var sum = nexacro.toNumber(this.dsUniInfo.getColumn(0, "atcnvrRdcqty"));
        	var bizScalCd = this.dsUniInfo.getColumn(0, "bizScalCd");
        	var bizTypeCd = this.dsBizInfo.getColumn(0, "bizTypeCd");

        	var arrRows = this.dsExcrList.extractRows("masterYn=='Y'");
        	if(arrRows < 0 || arrRows.length < 1) {
        		this.gfnShowMessage(this, "W000025", "사업수행자의 대표", "fnMsgCallback", "msgAlert01"); return false;
        	}
        	else {
        		if(this.dsExcrList.getColumn(arrRows[0], "agreYn") == false) {
        			this.gfnShowMessage(this, "W000025", "사업수행자의 대표의 동의여부", "fnMsgCallback", "msgAlert01"); return false;
        		}
        	}

        	for (var i=0; i<this.dsExcrList.rowcount; i++) {
        		atcnvrRdcqty = atcnvrRdcqty + nexacro.toNumber(this.dsExcrList.getColumn(i, "atcnvrRdcqty"));

        		// 사업수행자 등록여부
        		var instMgno = this.dsExcrList.getColumn(i, "instMgno");
        		if(this.gfnIsNull(instMgno)) {
        			this.gfnShowMessage(this, "W000025", "사업수행자 정보", "fnMsgCallback", "msgAlert01"); return false;
        		}

        		// 배출감축량 환산전 단위
        		var rdcUnitCd = this.dsExcrList.getColumn(i, "rdcUnitCd");
        		var cnvrCoefCn = this.dsExcrList.getColumn(i, "cnvrCoefCn");
        		var cnvrBassCn = this.dsExcrList.getColumn(i, "cnvrBassCn");

        		if(rdcUnitCd == "RUC0002" || rdcUnitCd == "RUC0003") {
        			if(this.gfnIsNull(cnvrCoefCn)) {
        				this.gfnShowMessage(this, "W000025", "사업수행자의 환산 계수", "fnMsgCallback", "msgAlert01"); return false;
        			}
        			if(this.gfnIsNull(cnvrBassCn)) {
        				this.gfnShowMessage(this, "W000025", "사업수행자의 환산 근거", "fnMsgCallback", "msgAlert01"); return false;
        			}
        		}
        	}

        	// 입력한 감축량과 사업수행자의 감축량의 합이 맞지 않음.
        	if(sum != atcnvrRdcqty) {
        		this.gfnShowMessage(this, "W000029", "", "fnMsgCallback", "msgAlert01"); return false;
        	}

        	// 사업규모에 비해 입력한 감축량이 맞지 않음.
        	if(bizScalCd == "BSC0001") {
        		if(sum <= 3000) {
        			this.gfnShowMessage(this, "W000030", "", "fnMsgCallback", "msgAlert01"); return false;
        		}
        	}
        	else if(bizScalCd == "BSC0002") {
        		if(sum <= 100 || sum > 3000) {
        			this.gfnShowMessage(this, "W000030", "", "fnMsgCallback", "msgAlert01"); return false;
        		}
        	}
        	else if(bizScalCd == "BSC0003") {
        		if(sum > 100) {
        			this.gfnShowMessage(this, "W000030", "", "fnMsgCallback", "msgAlert01"); return false;
        		}
        	}

        	return true;
        };

        // 프로그램사업 - 단위와 비교 체크
        this.fnCallValidCheckCompare = function()
        {
        	var bizTypeCd			= this.dsUniInfo.getColumn(0, "bizTypeCd");

        	var p_agreeClausCd 		= this.dsPgmInfo.getColumn(0, "agreeClausCd");
        	var agreeClausCd 		= this.dsUniInfo.getColumn(0, "agreeClausCd");

        	var p_agreeMgno 		= this.dsPgmInfo.getColumn(0, "agreeMgno");
        	var agreeMgno 			= this.dsUniInfo.getColumn(0, "agreeMgno");

        	var p_certVldBgngYmd 	= this.dsPgmInfo.getColumn(0, "certVldBgngYmd");
        	var p_certVldEndYmd 	= this.dsPgmInfo.getColumn(0, "certVldEndYmd");
        	var certVldBgngYmd 		= this.dsUniInfo.getColumn(0, "certVldBgngYmd");
        	var certVldEndYmd 		= this.dsUniInfo.getColumn(0, "certVldEndYmd");

        	var p_bizFldCd 			= this.dsPgmInfo.getColumn(0, "bizFldCd");
        	var p_bizDtlsFldCd 		= this.dsPgmInfo.getColumn(0, "bizDtlsFldCd");
        	var bizFldCd 			= this.dsUniInfo.getColumn(0, "bizFldCd");
        	var bizDtlsFldCd 		= this.dsUniInfo.getColumn(0, "bizDtlsFldCd");

        	var p_reddPlusYn 		= this.dsPgmInfo.getColumn(0, "reddPlusYn");
        	var reddPlusYn 			= this.dsUniInfo.getColumn(0, "reddPlusYn");

        	// 프로그램 사업이면 비교 체크를 한다.
        	if(bizTypeCd == "BTC0003") {
        		if(p_agreeClausCd != agreeClausCd) {
        			this.gfnShowMessage(this, "W000031", "프로그램사업의 파리협정조항", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(p_agreeMgno != agreeMgno) {
        			this.gfnShowMessage(this, "W000031", "프로그램사업의 협정·약정·MOU 정보", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(nexacro.toNumber(p_certVldBgngYmd) > nexacro.toNumber(certVldBgngYmd)) {
        			this.gfnShowMessage(this, "W000032", "", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(nexacro.toNumber(p_certVldEndYmd) < nexacro.toNumber(certVldEndYmd)) {
        			this.gfnShowMessage(this, "W000033", "", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(p_bizFldCd != bizFldCd) {
        			this.gfnShowMessage(this, "W000031", "프로그램사업의 사업분류 정보", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(p_bizDtlsFldCd != bizDtlsFldCd) {
        			this.gfnShowMessage(this, "W000031", "프로그램사업의 사업세부분류 정보", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        		if(p_reddPlusYn != reddPlusYn) {
        			this.gfnShowMessage(this, "W000031", "프로그램사업의 REDD+ 정보", "fnMsgCallback", "msgAlert01");
        			return false;
        		}
        	}

        	return true;
        };

        // 단위 사업세부분야
        this.divRBizUnit_cboBizDtlsFldCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "14-B") {
        		this.divRBizUnit.form.chkReddPlusYn.set_visible(true);
        	}else {
        		this.divRBizUnit.form.chkReddPlusYn.set_visible(false);
        		this.dsUniInfo.setColumn(0, "reddPlusYn", "N");
        	}

        	if(e.prevalue != e.postvalue) {
        		this.dsUniMhdlgList.clearData();
        	}
        };

        // 프로그램 redd
        this.divRPrgm_chkReddPlusYn_onchanged = function(obj,e)
        {
        	if(e.postvalue == "Y") {
        		this.dsUniInfo.setColumn(0, "reddPlusYn", "Y");
        	}else {
        		this.dsUniInfo.setColumn(0, "reddPlusYn", "N");
        	}

        	if(e.prevalue != e.postvalue) {
        		this.dsPgmMhdlgList.clearData();
        		this.dsUniMhdlgList.clearData();
        	}
        };

        // 단위 redd 변경시 단위 방법론 초기화
        this.divRBizUnit_chkReddPlusYn_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		this.dsUniMhdlgList.clearData();
        	}
        };

        // 파리협정조항
        this.divRPrgm_cboAgreeClausCd_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		this.dsUniInfo.setColumn(0, "agreeClausCd", e.postvalue);
        	}
        };

        this.divRExcr_mseBfcnvrRdcqty_onsetfocus = function(obj,e)
        {
        	if(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty") != "") {
        		if(nexacro.toNumber(this.dsExcrList.getColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty")) == 0) {
        			this.dsExcrList.setColumn(this.dsExcrList.rowposition, "bfcnvrRdcqty", "");
        		}
        	}
        };

        this.fnChkKor = function(sValue)
        {
        	var hangle = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        	var matchStr = sValue.match(hangle);
        	trace("sValue : " + sValue);
        	if(this.gfnIsNull(sValue)) return false;

        	if(matchStr) {
        		trace("입력한 문자열에 한글이 포함되어 있습니다.");
        		return true;
        	}else {
        		trace("입력한 문자열에 한글이 포함되어 있지 않습니다.");
        		return false;
        	}
        };

        // this.divRCmm_edtEngNm_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        // {
        // 	if(this.fnChkKor(this.divRCmm.form.edtEngNm.text)) {
        // 		this.gfnShowMessage(this, "W000035", "사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        // 		this.divRCmm.form.edtEngNm.setFocus();
        // 	}
        // };
        //
        // this.divRPrgm_edtBizOrgtNm_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        // {
        // 	if(this.fnChkKor(this.divRPrgm.form.edtBizOrgtNm.text)) {
        // 		this.gfnShowMessage(this, "W000035", "프로그램 사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        // 		this.divRPrgm.form.edtBizOrgtNm.setFocus();
        // 	}
        // };
        //
        // this.divRBizUnit_edtBizOrgtNm_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        // {
        // 	if(this.fnChkKor(this.divRBizUnit.form.edtBizOrgtNm.text)) {
        // 		this.gfnShowMessage(this, "W000035", "사업명(원문) 항목", "fnMsgCallback", "msgAlert01");
        // 		this.divRBizUnit.form.edtBizOrgtNm.setFocus();
        // 	}
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divRCmm.form.edtEngNm.addEventHandler("onkillfocus",this.divRCmm_edtEngNm_onkillfocus,this);
            this.divRCmm.form.cboBizTypeCd.addEventHandler("onitemchanged",this.divRCmm_cboBizTypeCd_onitemchanged,this);
            this.divPrgm.form.stAbplcNm.addEventHandler("onclick",this.div01_00_00_sta08_00_01_onclick,this);
            this.divPrgm.form.staLine3.addEventHandler("onclick",this.Static_onclick,this);
            this.divPrgm.form.staBizEnfcPlcNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divRPrgm.form.stAbplcNm.addEventHandler("onclick",this.div01_00_00_sta08_00_01_onclick,this);
            this.divRPrgm.form.staLine3.addEventHandler("onclick",this.Static_onclick,this);
            this.divRPrgm.form.staBizEnfcPlcNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divRPrgm.form.btnAgreeMgno.addEventHandler("onclick",this.divRPrgm_btnAgreeMgno_onclick,this);
            this.divRPrgm.form.cboAgreeClausCd.addEventHandler("onitemchanged",this.divRPrgm_cboAgreeClausCd_onitemchanged,this);
            this.divRPrgm.form.edtBizOrgtNm.addEventHandler("onkillfocus",this.divRPrgm_edtBizOrgtNm_onkillfocus,this);
            this.divRPrgm.form.chkBizOrgtNm.addEventHandler("onchanged",this.divRPrgm_chkBizOrgtNm_onchanged,this);
            this.divRPrgm.form.chkBizKrnNm.addEventHandler("onchanged",this.divRPrgm_chkBizKrnNm_onchanged,this);
            this.divRPrgm.form.cboBizFldCd.addEventHandler("onitemchanged",this.divRPrgm_cboBizFldCd_onitemchanged,this);
            this.divRPrgm.form.cboBizDtlsFldCd.addEventHandler("onitemchanged",this.divRPrgm_cboBizDtlsFldCd_onitemchanged,this);
            this.divRPrgm.form.btnMhdlgDel.addEventHandler("onclick",this.divRPrgm_btnMhdlgDel_onclick,this);
            this.divRPrgm.form.btnMhdlgAdd.addEventHandler("onclick",this.divRPrgm_btnMhdlgAdd_onclick,this);
            this.divRPrgm.form.grdBizEnfcPlcList.addEventHandler("oncellclick",this.divRPrgm_grdBizEnfcPlcList_oncellclick,this);
            this.divRPrgm.form.chkReddPlusYn.addEventHandler("onchanged",this.divRPrgm_chkReddPlusYn_onchanged,this);
            this.divH2.form.staRPrgmFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRPrgmFile.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divPrgmFile.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH3.form.staRBizUnit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRBizUnit.form.staBizKrnNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staCertVldYmd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staBizFormCd.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divRBizUnit.form.staBizUnqno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staCertVldTypeCd.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divRBizUnit.form.staAtcnvrRdcqty.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staCnvrCoefCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staCnvrBassCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staMhdlg.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staBizEnfcPlcNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.rdoAplyClCd.addEventHandler("onitemchanged",this.divRBizUnit_rdoAplyClCd_onitemchanged,this);
            this.divRBizUnit.form.btnAgreeMgno.addEventHandler("onclick",this.divRBizUnit_btnAgreeMgno_onclick,this);
            this.divRBizUnit.form.edtBizOrgtNm.addEventHandler("onkillfocus",this.divRBizUnit_edtBizOrgtNm_onkillfocus,this);
            this.divRBizUnit.form.cboRdcUnitCd.addEventHandler("onitemchanged",this.divRBizUnit_cboRdcUnitCd_onitemchanged,this);
            this.divRBizUnit.form.cboBizFldCd.addEventHandler("onitemchanged",this.divRBizUnit_cboBizFldCd_onitemchanged,this);
            this.divRBizUnit.form.cboBizDtlsFldCd.addEventHandler("onitemchanged",this.divRBizUnit_cboBizDtlsFldCd_onitemchanged,this);
            this.divRBizUnit.form.btnMhdlgDel.addEventHandler("onclick",this.divRBizUnit_btnMhdlgDel_onclick,this);
            this.divRBizUnit.form.btnMhdlgAdd.addEventHandler("onclick",this.divRBizUnit_btnMhdlgAdd_onclick,this);
            this.divRBizUnit.form.grdUnitPlc.addEventHandler("oncellclick",this.divRBizUnit_grdUnitPlc_oncellclick,this);
            this.divRBizUnit.form.chkBizOrgtNm.addEventHandler("onchanged",this.divRBizUnit_chkBizOrgtNm_onchanged,this);
            this.divRBizUnit.form.chkBizKrnNm.addEventHandler("onchanged",this.divRBizUnit_chkBizKrnNm_onchanged,this);
            this.divRBizUnit.form.staSop.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.staOmge.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRBizUnit.form.rdoSop.addEventHandler("onitemchanged",this.divRBizUnit_rdoSop_onitemchanged,this);
            this.divRBizUnit.form.rdoOmge.addEventHandler("onitemchanged",this.divRBizUnit_rdoOmge_onitemchanged,this);
            this.divRBizUnit.form.chkBplcNm.addEventHandler("onchanged",this.divRBizUnit_chkBplcNm_onchanged,this);
            this.divRBizUnit.form.mseBfcnvrRdcqty.addEventHandler("onchanged",this.divRBizUnit_mseBfcnvrRdcqty_onchanged,this);
            this.divRBizUnit.form.chkReddPlusYn.addEventHandler("onchanged",this.divRBizUnit_chkReddPlusYn_onchanged,this);
            this.divH4.form.staRFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRFile.form.staLine2.addEventHandler("onclick",this.divRFile_staLine2_onclick,this);
            this.divRFile.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH5.form.staRExcrList.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divH5.form.btnExcrAdd.addEventHandler("onclick",this.btnExcrAdd_onclick,this);
            this.divH5.form.btnExcrDel.addEventHandler("onclick",this.btnExcrDel_onclick,this);
            this.divRExcr.form.staAtcnvrRdcqty.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRExcr.form.staCnvrCoefCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRExcr.form.staCnvrBassCn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRExcr.form.cboDmstClCd.addEventHandler("onitemchanged",this.divRExcr_cboDmstClCd_onitemchanged,this);
            this.divRExcr.form.btnNm.addEventHandler("onclick",this.divRExcr_btnNm_onclick,this);
            this.divRExcr.form.cboRdcUnitCd.addEventHandler("onitemchanged",this.divRExcr_cboRdcUnitCd_onitemchanged,this);
            this.divRExcr.form.mseBfcnvrRdcqty.addEventHandler("onchanged",this.divRExcr_mseBfcnvrRdcqty_onchanged,this);
            this.divRExcr.form.mseBfcnvrRdcqty.addEventHandler("onsetfocus",this.divRExcr_mseBfcnvrRdcqty_onsetfocus,this);
            this.divH7.form.staRFile.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRComBtn.form.btnList.addEventHandler("onclick",this.divRComBtn_btnList_onclick,this);
            this.divRComBtn.form.btnReg.addEventHandler("onclick",this.divRComBtn_btnReg_onclick,this);
            this.divRComBtn.form.btnRegTmp.addEventHandler("onclick",this.divRComBtn_btnRegTmp_onclick,this);
            this.divRComBtn.form.btnRegRe.addEventHandler("onclick",this.divRComBtn_btnRegRe_onclick,this);
            this.divRComBtn.form.btnDocRe.addEventHandler("onclick",this.divRComBtn_btnDocRe_onclick,this);
            this.divRComBtn.form.btnRegReTmp.addEventHandler("onclick",this.divRComBtn_btnRegReTmp_onclick,this);
            this.divRComBtn.form.btnDocReTmp.addEventHandler("onclick",this.divRComBtn_btnDocReTmp_onclick,this);
            this.dsExcrList.addEventHandler("onrowposchanged",this.dsExcrList_onrowposchanged,this);
        };
        this.loadIncludeScript("AprvAplyS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
