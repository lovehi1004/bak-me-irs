(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aprvAplyP01");
            this.set_titletext("추가자료팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,3220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddDivCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"divReq\" type=\"STRING\" size=\"256\"/><Column id=\"divReqInfo\" type=\"STRING\" size=\"256\"/><Column id=\"divReg\" type=\"STRING\" size=\"256\"/><Column id=\"divRegInfo\" type=\"STRING\" size=\"256\"/><Column id=\"divCfm\" type=\"STRING\" size=\"256\"/><Column id=\"divCfmInfo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgno\" type=\"STRING\" size=\"256\"/><Column id=\"agreeDgr\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizEnfcPlcNm\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"iataNtnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizScalCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"koffPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"rdcUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrCoefCn\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassCn\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sopRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"sopUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"omgeRdcqty\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCd\" type=\"STRING\" size=\"256\"/><Column id=\"omgeUnitCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmYn\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"evlSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlaySn\" type=\"STRING\" size=\"256\"/><Column id=\"rtrcnSn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreeMgnoNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"atcnvrRdcqtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdSnm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndYn\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddBtnCtrl", this);
            obj._setContents("<ColumnInfo><Column id=\"btnCls\" type=\"STRING\" size=\"256\"/><Column id=\"btnReq\" type=\"STRING\" size=\"256\"/><Column id=\"btnReg\" type=\"STRING\" size=\"256\"/><Column id=\"btnCfm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocReg", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnvrBassDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndYn\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataIdntyTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCur", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqRegFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniCnvrBassDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitFrm","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("0");
            obj.set_text("추가자료");
            obj.set_cssclass("sta_POP_Title");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Div("divFrm","45","89",null,null,"45","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","5","0",null,"40","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("7");
            obj.set_formscrolltype("none");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staBizTit","0","5","535","30",null,null,null,null,null,null,this.divFrm.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업정보       ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH1.addChild(obj.name, obj);

            obj = new Div("divBiz","5","divH1:5",null,"390","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH6","0","226",null,"164","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH4","0","129",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH1","-36","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH3","0","86",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Button("btn01","534","7","66","30",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("12");
            obj.set_text("협정조회");
            obj.set_fittocontents("width");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCd","767","7",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCd","610","0","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("11");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeMgnoNm","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("2");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","93",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("4");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","86","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("5");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","136",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","129","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("6");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staMhdlg","0","226","150","164",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("9");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Grid("grdMhdlgList","157","267",null,"115","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsUniMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"475\"/><Column size=\"475\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론 원문명\"/><Cell col=\"1\" text=\"방법론 국문명\"/><Cell col=\"2\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:mhdlgOrgtNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" text=\"bind:mhdlgKrnNm\"/><Cell col=\"2\" text=\"방법론 조회\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"5px\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtFldCdNm","157","232",null,"30","10",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH2","-36","43",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBizScalCd","940","50",null,"30","5",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBizScalCd","610","43","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("18");
            obj.set_text("사업유형 /규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCd","157","50","443","30",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("19");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","43","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("17");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH5","0","172",null,"55","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAtcnvrRdcqty","0","172","150","55",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("22");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtAgreeNm","157","8","373","30",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("23");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtAtcnvrRdcqty","157","185",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("24");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBizTypeCd","770","50",null,"30","280",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("25");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("stc00","930","45","20","35",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("26");
            obj.set_text("/");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new CheckBox("chkReddPlusYn","314","232","236","30",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("27");
            obj.set_text("REDD+ 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Div("divH2","5","divBiz:0",null,"60","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("8");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staHist","0","20","565","30",null,null,null,null,null,null,this.divFrm.form.divH2.form);
            obj.set_taborder("0");
            obj.set_text("추가자료요청 이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH2.addChild(obj.name, obj);

            obj = new Button("btnHist","staHist:5","20","80","30",null,null,null,null,null,null,this.divFrm.form.divH2.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divFrm.form.divH2.addChild(obj.name, obj);

            obj = new Div("divGrdList","5","divH2:0",null,"275","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("15");
            this.divFrm.addChild(obj.name, obj);

            obj = new Grid("grdHistList","0","0",null,"270","0",null,null,null,null,null,this.divFrm.form.divGrdList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"제출일자\"/><Cell col=\"4\" text=\"확인일자\"/><Cell col=\"5\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:addDataDgr\" textAlign=\"center\" tooltiptext=\"bind:addDataDgr\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:sts\" tooltiptext=\"bind:sts\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:dataDmndDt\" tooltiptext=\"bind:dataDmndDt\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:dataRegDt\" tooltiptext=\"bind:dataRegDt\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:dataIdntyDt\" tooltiptext=\"bind:dataIdntyDt\"/><Cell col=\"5\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" padding=\"5px\"/></Band></Format></Formats>");
            this.divFrm.form.divGrdList.addChild(obj.name, obj);

            obj = new Div("divH4","5","divGrdList:0",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("10");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staReqInfo","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH4.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 요청정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH4.addChild(obj.name, obj);

            obj = new Div("divReqInfo","5","divH4:0",null,"259","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"76","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staRsn","0","0","150","76",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("2");
            obj.set_text("요청사유\r\n(직접입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staH2","0","118",null,"140","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staFile","0","118","150","140",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("4");
            obj.set_text("요청사유(파일)");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new TextArea("txaRsn","157","7",null,"62","7",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("true");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_color("black");
            obj.set_background("transparent");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staH3","0","75",null,"44","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staPeriodYn","0","75","150","44",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("7");
            obj.set_text("인증기간갱신요청");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new CheckBox("chkPeriodYn","157","83","573","30",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("8");
            obj.set_text("인증유효기간 갱신 요청 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_readonly("true");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReq02","157","128","800","120",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Div("divH6","5","divReqInfo:0",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("12");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staRegInfo","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH6.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 등록정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH6.addChild(obj.name, obj);

            obj = new Div("divRegInfo","5","divH6:0",null,"585","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH2","0","139",null,"220","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"140","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH3","0","358",null,"140","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staCnvrBassDataFlmno","0","358","150","140",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("6");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH4","0","541",null,"44","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Edit("edtCn","157","548",null,"30","7",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staCn","0","541","150","44",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("9");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH5","0","497",null,"44","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","497","150","44",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("11");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Edit("edtCalFromTo","157","505",null,"30","7",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReg01","157","10","800","120",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("13");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiReg02","155","152","800","195",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("14");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReg03","157","369","800","120",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("15");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divH8","5","divRegInfo:0",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("14");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staCfmInfo","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH8.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 확인정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH8.addChild(obj.name, obj);

            obj = new Div("divCfmInfo","5","divH8:0",null,"119","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Static("staSts","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"76","0",null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Static("staCn","0","43","150","76",null,null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("4");
            obj.set_text("확인내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Edit("edtSts","157","7",null,"30","7",null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new TextArea("txaCn","157","50",null,"62","7",null,null,null,null,null,this.divFrm.form.divCfmInfo.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_color("black");
            obj.set_background("transparent");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_readonly("true");
            this.divFrm.form.divCfmInfo.addChild(obj.name, obj);

            obj = new Div("divH7","5","divCfmInfo:0",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("13");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staCfm","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH7.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 확인 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH7.addChild(obj.name, obj);

            obj = new Div("divCfm","5","divH7:0",null,"119","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Static("staSts","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Static("staH2","0","43",null,"76","0",null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Static("staCn","0","43","150","76",null,null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("4");
            obj.set_text("확인내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new TextArea("txaCn","157","50",null,"62","7",null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Combo("cboSts","157","7","227","30",null,null,null,null,null,null,this.divFrm.form.divCfm.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsDataIdntyTypeCdS");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.divFrm.form.divCfm.addChild(obj.name, obj);

            obj = new Div("divH5","5","divCfm:0",null,"50","0",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("11");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staReg","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH5.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH5.addChild(obj.name, obj);

            obj = new Div("divReg","5","divH5:0","1200","585",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH2","0","139",null,"220","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"140","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","140",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","139","150","220",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH3","0","358",null,"140","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staCnvrBassDataFlmno","0","358","150","140",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("6");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","540",null,"44","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staCn","0","540","150","44",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("8");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Edit("edtCn","157","548",null,"30","7",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("9");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH5","0","497",null,"44","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","157","505","252","30",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("10");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","497","150","44",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("12");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReg01","157","10","800","120",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("13");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiReg02","155","152","800","195",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("14");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReg03","157","369","800","120",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("15");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divH3","5","divReg:0",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("9");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staReq","0","10","342","30",null,null,null,null,null,null,this.divFrm.form.divH3.form);
            obj.set_taborder("0");
            obj.set_text("추가자료 요청 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH3.addChild(obj.name, obj);

            obj = new Div("divReq","5","divH3:0","1200","259",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"76","0",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new TextArea("txaRsn","157","7",null,"62","7",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staRsn","0","0","150","76",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("3");
            obj.set_text("요청사유\r\n(직접입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staH2","0","118",null,"140","0",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staFile","0","118","150","140",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("5");
            obj.set_text("요청사유(파일)");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staH3","0","75",null,"44","0",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staPeriodYn","0","75","150","44",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("6");
            obj.set_text("인증기간갱신요청");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new CheckBox("chkPeriodYn","157","83","573","30",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("8");
            obj.set_text("인증유효기간 갱신 요청 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Div("divRaonKSingleReq01","157","128","800","120",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Div("divBtn","0","divReq:20",null,"50","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","75","32","0",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnReq",null,"0","75","32","btnCls:3",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("요청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"0","75","32","btnReq:3",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Crud");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCfm",null,"0","75","32","btnReg:3",null,null,null,null,null,this.divFrm.form.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            this.divFrm.form.divBtn.addChild(obj.name, obj);

            obj = new Static("staW","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staH","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staR",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitFrm.form
            obj = new Layout("default","",0,0,this.divTitFrm.form,function(p){});
            this.divTitFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH1.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH1.form,function(p){});
            this.divFrm.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divBiz.form
            obj = new Layout("default","",0,0,this.divFrm.form.divBiz.form,function(p){});
            this.divFrm.form.divBiz.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH2.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH2.form,function(p){});
            this.divFrm.form.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divGrdList.form
            obj = new Layout("default","",0,0,this.divFrm.form.divGrdList.form,function(p){});
            this.divFrm.form.divGrdList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH4.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH4.form,function(p){});
            this.divFrm.form.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReqInfo.form.divRaonKSingleReq02
            obj = new Layout("default","",0,0,this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.form,function(p){});
            this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReqInfo.form
            obj = new Layout("default","",0,0,this.divFrm.form.divReqInfo.form,function(p){});
            this.divFrm.form.divReqInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH6.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH6.form,function(p){});
            this.divFrm.form.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divRaonKSingleReg01
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divRaonKSingleReg01.form,function(p){});
            this.divFrm.form.divRegInfo.form.divRaonKSingleReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divRaonKMultiReg02
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divRaonKMultiReg02.form,function(p){});
            this.divFrm.form.divRegInfo.form.divRaonKMultiReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divRaonKSingleReg03
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divRaonKSingleReg03.form,function(p){});
            this.divFrm.form.divRegInfo.form.divRaonKSingleReg03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form,function(p){});
            this.divFrm.form.divRegInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH8.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH8.form,function(p){});
            this.divFrm.form.divH8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divCfmInfo.form
            obj = new Layout("default","",0,0,this.divFrm.form.divCfmInfo.form,function(p){});
            this.divFrm.form.divCfmInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH7.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH7.form,function(p){});
            this.divFrm.form.divH7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divCfm.form
            obj = new Layout("default","",0,0,this.divFrm.form.divCfm.form,function(p){});
            this.divFrm.form.divCfm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH5.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH5.form,function(p){});
            this.divFrm.form.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divCalFromTo.form,function(p){});
            this.divFrm.form.divReg.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divRaonKSingleReg01
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divRaonKSingleReg01.form,function(p){});
            this.divFrm.form.divReg.form.divRaonKSingleReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divRaonKMultiReg02
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divRaonKMultiReg02.form,function(p){});
            this.divFrm.form.divReg.form.divRaonKMultiReg02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divRaonKSingleReg03
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divRaonKSingleReg03.form,function(p){});
            this.divFrm.form.divReg.form.divRaonKSingleReg03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form,function(p){});
            this.divFrm.form.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH3.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH3.form,function(p){});
            this.divFrm.form.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReq.form.divRaonKSingleReq01
            obj = new Layout("default","",0,0,this.divFrm.form.divReq.form.divRaonKSingleReq01.form,function(p){});
            this.divFrm.form.divReq.form.divRaonKSingleReq01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReq.form
            obj = new Layout("default","",0,0,this.divFrm.form.divReq.form,function(p){});
            this.divFrm.form.divReq.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divBtn.form
            obj = new Layout("default","",0,0,this.divFrm.form.divBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divFrm.form.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form
            obj = new Layout("default","",0,0,this.divFrm.form,function(p){});
            this.divFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,3210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFrm.form.divBiz.form.edtAgreeNm","value","dsUniInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFrm.form.divBiz.form.edtAgreeClausCd","value","dsUniInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFrm.form.divBiz.form.edtBizScalCd","value","dsUniInfo","bizScalCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFrm.form.divBiz.form.edtBizFormCd","value","dsUniInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFrm.form.divBiz.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFrm.form.divBiz.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divFrm.form.divBiz.form.edtAtcnvrRdcqty","value","dsUniInfo","atcnvrRdcqtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divFrm.form.divBiz.form.edtFldCdNm","value","dsUniInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divFrm.form.divBiz.form.edtBizTypeCd","value","dsUniInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divFrm.form.divReq.form.txaRsn","value","dsDocReg","dataDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divFrm.form.divReqInfo.form.txaRsn","value","dsDocList","dataDmndRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divFrm.form.divReg.form.edtCn","value","dsDocReg","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divFrm.form.divRegInfo.form.edtCn","value","dsDocList","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divFrm.form.divCfm.form.cboSts","value","dsDocReg","dataIdntyTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divFrm.form.divCfm.form.txaCn","value","dsDocReg","dataIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divFrm.form.divCfmInfo.form.edtSts","value","dsDocList","dataIdntyTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divFrm.form.divCfmInfo.form.txaCn","value","dsDocList","dataIdntyCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divFrm.form.divReq.form.chkPeriodYn","value","dsDocReg","dataDmndYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divFrm.form.divReqInfo.form.chkPeriodYn","value","dsDocList","dataDmndYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divFrm.form.divRegInfo.form.edtCalFromTo","value","dsDocList","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divFrm.form.divBiz.form.chkReddPlusYn","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("AprvAplyP01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopupSub01 Form
        * FILE NAME     : samplePopupSub01.xfdl
        * DESCRIPTION   : 직접폼 모달(Modal) 샘플팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.23    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvAuth	= {};				// 화면의 권한정보

        // 참고용
        this.fvPopupUrl  = "";			// xxxx.xfdl
        this.fvTitletext  = "";			// 타이틀
        this.fvCallback  = "";			// callback 함수명
        this.fvSrcPopup  = "";			// Y / N
        this.FvOpenType  = "";			// PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        this.fvMnuId  = "";				// 메뉴ID
        this.fvModeless  = "";			// Y / N

        this.wBtnCfm = 75;
        this.wBtnReg = 75;
        this.wBtnReq = 75;
        this.wBtnCls = 75;


        this.hDivH3 = 50;
        this.hDivReq = 259;
        this.hDivH4 = 50;
        this.hDivReqInfo = 259;
        this.hDivH5 = 50;
        this.hDivReg = 585;
        this.hDivH6 = 50;
        this.hDivRegInfo = 585;
        this.hDivH7 = 50;
        this.hDivCfm = 119;
        this.hDivH8 = 50;
        this.hDivCfmInfo = 119;

        this.hStaPeriodYn = 44;
        this.hChkPeriodYn = 30;
        this.hStaH3 = 44;
        this.hStaCertVldYmd = 44;
        this.hDivCalFromTo = 30;
        this.hStaH5 = 44;
        this.hDivGrdList = 275;

        this.staFileTop = 118;
        this.staH2Top = 118;

        this.staCnTop = 540;
        this.staH4Top = 540;
        this.edtCnTop = 548;

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
        	//trace("[samplePopupSub01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 전달된 Parameter 개별로 받기 (참고용)
        	try
        	{
        		this.fvPopupUrl  	= this.getOwnerFrame().arguments["cvPopupUrl"];
        		this.fvTitletext  	= this.getOwnerFrame().arguments["cvTitletext"];
        		this.fvCallback  	= this.getOwnerFrame().arguments["cvCallback"];
        		this.fvSrcPopup  	= this.getOwnerFrame().arguments["cvSrcPopup"];
        		this.FvOpenType  	= this.getOwnerFrame().arguments["cvOpenType"];
        		this.fvMnuId  		= this.getOwnerFrame().arguments["cvMnuId"];
        		this.fvModeless  	= this.getOwnerFrame().arguments["cvModeless"];
        	}
        	catch (e)
        	{
        		this.fvPopupUrl  	= this.parent.cvPopupUrl;
        		this.fvTitletext  	= this.parent.cvTitletext;
        		this.fvCallback  	= this.parent.cvCallback;
        		this.fvSrcPopup  	= this.parent.cvSrcPopup;
        		this.FvOpenType  	= this.parent.cvOpenType;
        		this.fvMnuId  		= this.parent.cvMnuId;
        		this.fvModeless  	= this.parent.cvModeless;
        	}

        	//1. 2)전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
        	//     gfnShowPopup() 호출시 5번째 인자(objArgs) Argument 에 값을 받음
        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		//trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}

        	//2. Parameter 참조
        	var bizMngNo 	= this.gfnGetParameter(objFormFrame, "bizMngNo");
        	var bizDgr 		= this.gfnGetParameter(objFormFrame, "bizDgr");
        	var addDataDgr 	= this.gfnGetParameter(objFormFrame, "addDataDgr");

        	//-------------------------------------------------------------------------------------------

        	// 요청 파일(등록용)
        	var objFileParam1 = { objDs:this.dsDocReg								// 바인딩 데이터셋
        					,sBindCol:"dataDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileReq01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					};
        	this.divFrm.form.divReq.form.divRaonKSingleReq01.form.fnInitRaonK(this, objFileParam1);

        	// 요청 파일(조회용)
        	var objFileParam2 = { objDs:this.dsDocList								// 바인딩 데이터셋
        					,sBindCol:"dataDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileReq02"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					};
        	this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.form.fnInitRaonK(this, objFileParam2);

        	// 등록 파일(등록용) - 사업계획서
        	var objFileParam3 = { objDs:this.dsDocReg								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileReg01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					};
        	this.divFrm.form.divReg.form.divRaonKSingleReg01.form.fnInitRaonK(this, objFileParam3);

        	// 등록 파일(등록용) - 기타증빙
        	var objFileParam4 = { objDs:this.dsDocReg								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileReg02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divFrm.form.divReg.form.divRaonKMultiReg02.form.fnInitRaonK(this, objFileParam4);

        	// 등록 파일(등록용) - 환산계수근거
        	var objFileParam5 = { objDs:this.dsDocReg								// 바인딩 데이터셋
        					,sBindCol:"cnvrBassDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileReg03"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					};
        	this.divFrm.form.divReg.form.divRaonKSingleReg03.form.fnInitRaonK(this, objFileParam5);

        	// 등록 파일(조회용) - 사업계획서
        	var objFileParam6 = { objDs:this.dsDocList								// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileRegInfo01"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					};
        	this.divFrm.form.divRegInfo.form.divRaonKSingleReg01.form.fnInitRaonK(this, objFileParam6);

        	// 등록 파일(조회용) - 기타증빙
        	var objFileParam7 = { objDs:this.dsDocList								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFileRegInfo02"						// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };
        	this.divFrm.form.divRegInfo.form.divRaonKMultiReg02.form.fnInitRaonK(this, objFileParam7);

        	// 등록 파일(조회용) - 환산계수근거
        	var objFileParam8 = { objDs:this.dsDocList								// 바인딩 데이터셋
        					,sBindCol:"cnvrBassDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFileRegInfo03"						// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        					};
        	this.divFrm.form.divRegInfo.form.divRaonKSingleReg03.form.fnInitRaonK(this, objFileParam8);

        	//-------------------------------------------------------------------------------------------

        	// From-To 달력 초기화 호출 - 프로그램사업
        	var objParam1 = { objDs:this.dsDocReg								// 바인딩 데이터셋
        					,sBindFromCol:"certVldBgngYmd"						// 바인딩 컬럼(From)
        					,sBindToCol:"certVldEndYmd"							// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"certVldBgngYmd"						// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divFrm.form.divReg.form.divCalFromTo.form.fnInitCommonCalendar(this, objParam1);

        	// 검색 데이터셋 초기화.
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "bizMngNo", bizMngNo);
        	this.dsSrh.setColumn(0, "bizDgr", bizDgr);
        	this.dsSrh.setColumn(0, "addDataDgr", addDataDgr);

        	this.divFrm.form.divBiz.form.chkReddPlusYn.set_visible(false);

        	// 파일데이터셋 초기화.
        	this.dsReqRegFile.clearData();
        	this.dsReqFile.clearData();
        	this.dsUniBizPlndFile.clearData();
        	this.dsUniEtcDataFile.clearData();
        	this.dsUniCnvrBassDataFile.clearData();

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	this.dsDocList.clearData();
        	this.dsDocReg.clearData();

        	// 상세호출
        	this.fnCallAddData();

        };

        this.fnCallComCdoe = function()
        {
        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsDataIdntyTypeCdS", 	groupId:"DATA_IDNTY_TYPE_CD", 		headflag:"S", useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        // 업무파일 정보조회
        this.fnCallFileStart = function()
        {
        	var divReqHeight		= this.divFrm.form.divReq.height;
        	trace("divReqHeight >>>>>>>>>>>> " + divReqHeight);

        	if(divReqHeight > 0) {
        		trace("################### 요청 등록 Start ###################");
        		var dataDmndFlmno = this.dsDocReg.getColumn(0, "dataDmndFlmno");
        		trace(">>> dataDmndFlmno : " + dataDmndFlmno);
        		if(this.gfnIsNull(dataDmndFlmno)) {
        			this.divFrm.form.divReq.form.divRaonKSingleReq01.form.fnSearchFile("");
        		}else {
        			this.divFrm.form.divReq.form.divRaonKSingleReq01.form.fnSearchFile(dataDmndFlmno);
        		}
        		trace("################### 요청 등록 END ###################");
        	}
        	else {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("singleFileReq01", objRtn);
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFileReq01" :

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsReqRegFile.clearData();
        				var nRowCnt = this.dsReqRegFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsReqRegFile.clearData();
        				var nRowCnt = this.dsReqRegFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {

        				var divReqInfoHeight		= this.divFrm.form.divReqInfo.height;
        				trace("divReqInfoHeight >>>>>>>>>>>> " + divReqInfoHeight);

        				if(divReqInfoHeight > 0) {
        					trace("################### 요청 결과 Start ###################");
        					var dataDmndFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition, "dataDmndFlmno");
        					trace(">>> dataDmndFlmno : " + dataDmndFlmno);
        					if(this.gfnIsNull(dataDmndFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileReq02", objRtn);
        						this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.form.fnSearchFile(dataDmndFlmno);
        					}
        					trace("################### 요청 결과 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileReq02", objRtn);
        				}
        			}

        			break;
        		case "singleFileReq02" :

        			if(objRtn.sDiv == "SEARCH") {

        				var divRegHeight		= this.divFrm.form.divReg.height;
        				trace("divRegHeight >>>>>>>>>>>> " + divRegHeight);

        				if(divRegHeight > 0) {
        					trace("################### 사업계획서 등록 Start ###################");
        					var bizPlndFlmno = this.dsDocReg.getColumn(0, "bizPlndFlmno");
        					trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        					if(this.gfnIsNull(bizPlndFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileReg01", objRtn);
        						this.divFrm.form.divReg.form.divRaonKSingleReg01.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divReg.form.divRaonKSingleReg01.form.fnSearchFile(bizPlndFlmno);
        					}
        					trace("################### 사업계획서 등록 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileReg01", objRtn);
        				}
        			}

        			break;
        		case "singleFileReg01" :

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

        				var divRegHeight		= this.divFrm.form.divReg.height;
        				trace("divRegHeight >>>>>>>>>>>> " + divRegHeight);

        				if(divRegHeight > 0) {
        					trace("################### 기타증빙문서 등록 Start ###################");
        					var etcDataFlmno = this.dsDocReg.getColumn(0, "etcDataFlmno");
        					trace(">>> etcDataFlmno : " + etcDataFlmno);
        					if(this.gfnIsNull(etcDataFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("multiFileReg02", objRtn);
        						this.divFrm.form.divReg.form.divRaonKMultiReg02.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divReg.form.divRaonKMultiReg02.form.fnSearchFile(etcDataFlmno);
        					}
        					trace("################### 기타증빙문서 등록 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileReg02", objRtn);
        				}

        			}

        			break;
        		case "multiFileReg02" :

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

        				var divRegHeight		= this.divFrm.form.divReg.height;
        				trace("divRegHeight >>>>>>>>>>>> " + divRegHeight);

        				if(divRegHeight > 0) {
        					trace("################### 환산근거 등록 Start ###################");
        					var cnvrBassDataFlmno = this.dsDocReg.getColumn(0, "cnvrBassDataFlmno");
        					trace(">>> cnvrBassDataFlmno : " + cnvrBassDataFlmno);
        					if(this.gfnIsNull(cnvrBassDataFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileReg03", objRtn);
        						this.divFrm.form.divReg.form.divRaonKSingleReg03.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divReg.form.divRaonKSingleReg03.form.fnSearchFile(cnvrBassDataFlmno);
        					}
        					trace("################### 환산근거 등록 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileReg03", objRtn);
        				}
        			}

        			break;
        		case "singleFileReg03" :

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

        				var divRegInfoHeight		= this.divFrm.form.divRegInfo.height;
        				trace("divRegInfoHeight >>>>>>>>>>>> " + divRegInfoHeight);

        				if(divRegInfoHeight > 0) {
        					trace("################### 사업계획서 조회 Start ###################");
        					var bizPlndFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition, "bizPlndFlmno");
        					trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        					if(this.gfnIsNull(bizPlndFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileRegInfo01", objRtn);
        						this.divFrm.form.divRegInfo.form.divRaonKSingleReg01.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divRegInfo.form.divRaonKSingleReg01.form.fnSearchFile(bizPlndFlmno);
        					}
        					trace("################### 사업계획서 조회 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileRegInfo01", objRtn);
        				}
        			}

        			break;
        		case "singleFileRegInfo01" :

        			if(objRtn.sDiv == "SEARCH") {

        				var divRegInfoHeight		= this.divFrm.form.divRegInfo.height;
        				trace("divRegInfoHeight >>>>>>>>>>>> " + divRegInfoHeight);

        				if(divRegInfoHeight > 0) {
        					trace("################### 기타증빙문서 조회 Start ###################");
        					var etcDataFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition, "etcDataFlmno");
        					trace(">>> etcDataFlmno : " + etcDataFlmno);
        					if(this.gfnIsNull(etcDataFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("multiFileRegInfo02", objRtn);
        						this.divFrm.form.divRegInfo.form.divRaonKMultiReg02.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divRegInfo.form.divRaonKMultiReg02.form.fnSearchFile(etcDataFlmno);
        					}
        					trace("################### 기타증빙문서 조회 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("multiFileRegInfo02", objRtn);
        				}
        			}

        			break;
        		case "multiFileRegInfo02" :

        			if(objRtn.sDiv == "SEARCH") {

        				var divRegInfoHeight		= this.divFrm.form.divRegInfo.height;
        				trace("divRegInfoHeight >>>>>>>>>>>> " + divRegInfoHeight);

        				if(divRegInfoHeight > 0) {
        					trace("################### 환산근거 조회 Start ###################");
        					var cnvrBassDataFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition, "cnvrBassDataFlmno");
        					trace(">>> cnvrBassDataFlmno : " + cnvrBassDataFlmno);
        					if(this.gfnIsNull(cnvrBassDataFlmno)) {
        						var objRtn = {sDiv:"SEARCH"};
        						this.fnRaonKFileCallback("singleFileRegInfo03", objRtn);
        						this.divFrm.form.divRegInfo.form.divRaonKSingleReg03.form.fnResetUpload();
        					}else {
        						this.divFrm.form.divRegInfo.form.divRaonKSingleReg03.form.fnSearchFile(cnvrBassDataFlmno);
        					}
        					trace("################### 환산근거 조회 END ###################");
        				}
        				else {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("singleFileRegInfo03", objRtn);
        				}
        			}

        			break;
        		case "singleFileRegInfo03" :

        			if(objRtn.sDiv == "SEARCH") {
        				trace("################### 상세화면 모든 파일 조회 완료!!! ###################");
        			}

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
        		case "certVldBgngYmd" :		// From-To달력
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :

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
        			this.dsDocReg.clearData();
        			this.fnCallAddData();
        			break;
        		case "msgAlert03" :
        			// 후처리 코드
        			this.dsDocReg.clearData();
        			this.dsDocReg.addRow();
        			this.dsDocReg.setColumn(0, "dataIdntyTypeCd", "");
        			this.fnCallAddData();
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
        			case -2 :
        				// 후처리 코드 - 재조회.
        				this.dsDocReg.clearData();
        				this.dsDocReg.addRow();
        				this.dsDocReg.setColumn(0, "dataIdntyTypeCd", "");
        				this.fnCallAddData();
        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "divInfo" :
        			// 후처리 코드
        			this.fnDtlDivCtrl();
        			break;
        		case "addDataInfo" :

        			// REDD PLUS
        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divFrm.form.divBiz.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divFrm.form.divBiz.form.chkReddPlusYn.set_visible(false);
        			}

        			this.fnCallDtlBtnCtrl();

        			break;
        		case "addBtnInfo" :
        			// 후처리 코드
        			this.fnDtlBtnCtrl();
        			break;
        		case "addReq" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			break;
        		case "addReg" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			break;
        		case "addCfm" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert03");
        			break;
        		case "addDataCurInfo" :

        			var arrRows = this.dsDocList.extractRows("btnCtl=='현재문서'");
        			this.dsDocList.set_rowposition(nexacro.toNumber(arrRows[0]));

        			// REDD PLUS
        			if(this.dsUniInfo.getColumn(0, "bizDtlsFldCd") == "14-B") {
        				this.divFrm.form.divBiz.form.chkReddPlusYn.set_visible(true);
        			}else {
        				this.divFrm.form.divBiz.form.chkReddPlusYn.set_visible(false);
        			}

        			// 버튼 컨트롤
        			this.fnCallDtlBtnCtrlCur();

        			break;
        		case "divInfoCur" :
        			// 후처리 코드
        			this.fnDtlDivCtrl();
        			break;
        		case "addBtnInfoCur" :

        			this.fnCallDivCtrlCur();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallCfm = function()
        {
        	//trace("추가자료 확인 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyAddCfm.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyAddCfm.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addCfm";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsDocReg=dsDocReg";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallReg = function()
        {
        	//trace("추가자료 제출 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyAddReg.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyAddReg.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addReg";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsDocReg=dsDocReg dsUniBizPlndFile=dsUniBizPlndFile dsUniEtcDataFile=dsUniEtcDataFile dsUniCnvrBassDataFile=dsUniCnvrBassDataFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallReq = function()
        {
        	//trace("추가자료 요청 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/insertAprvAplyAddReq.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/insertAprvAplyAddReq.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addReq";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsDocReg=dsDocReg dsReqRegFile=dsReqRegFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDtlBtnCtrl = function()
        {
        	//trace("추가자료 권한별 버튼처리 호출...");
        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddBtnCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddBtnCtrl.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addBtnInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsAddBtnCtrl=dsAddBtnCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDivCtrl = function()
        {
        	//trace("추가자료 div 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddDivCtrl.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddDivCtrl.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "divInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsAddDivCtrl=dsAddDivCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallAddData = function()
        {
        	//trace("추가자료 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddDataDetail.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddDataDetail.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "addDataInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsUniInfo=dsUniInfo dsUniMhdlgList=dsUniMhdlgList dsDocList=dsDocList dsSrh=dsSrh dsDocReg=dsDocReg dsCnt=dsCnt";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallAddDataCur = function()
        {
        	//trace("추가자료 선택차수 상세 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddDataDetailCur.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddDataDetailCur.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "addDataCurInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCur=dsCur";
         	objArgs.outds     		= "dsUniInfo=dsUniInfo dsUniMhdlgList=dsUniMhdlgList dsDocList=dsDocList dsDocReg=dsDocReg dsCnt=dsCnt";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallDtlBtnCtrlCur = function()
        {
        	//trace("추가자료 선택차수 권한별 버튼처리 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddBtnCtrlCur.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddBtnCtrlCur.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addBtnInfoCur";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCur=dsCur";
         	objArgs.outds     		= "dsAddBtnCtrl=dsAddBtnCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallDivCtrlCur = function()
        {
        	//trace("추가자료 선택차수 div 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyAddDivCtrlCur.irs";
        	}else {
        		callUrl = "/adm/aply/aprvAply/selectAprvAplyAddDivCtrlCur.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "divInfoCur";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCur=dsCur";
         	objArgs.outds     		= "dsAddDivCtrl=dsAddDivCtrl";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnDtlBtnCtrl = function()
        {
        	//trace("[AprvAplyS01] 상세 권한별 버튼 처리 =========================");
        	var isBtnCfm = this.dsAddBtnCtrl.getColumn(0, "btnCfm");
        	var isBtnReg = this.dsAddBtnCtrl.getColumn(0, "btnReg");
        	var isBtnReq = this.dsAddBtnCtrl.getColumn(0, "btnReq");
        	var isBtnCls = this.dsAddBtnCtrl.getColumn(0, "btnCls");

         	if(isBtnCfm) { this.divFrm.form.divBtn.form.btnCfm.set_width(this.wBtnCfm); } else { this.divFrm.form.divBtn.form.btnCfm.set_width(0); }
         	if(isBtnReg) { this.divFrm.form.divBtn.form.btnReg.set_width(this.wBtnReg); } else { this.divFrm.form.divBtn.form.btnReg.set_width(-3); }
         	if(isBtnReq) { this.divFrm.form.divBtn.form.btnReq.set_width(this.wBtnReq); } else { this.divFrm.form.divBtn.form.btnReq.set_width(-3); }
         	if(isBtnCls) { this.divFrm.form.divBtn.form.btnCls.set_width(this.wBtnCls); } else { this.divFrm.form.divBtn.form.btnCls.set_width(-3); }

         	this.divFrm.form.divBtn.form.resetScroll();
        	//this.divFrm.form.resetScroll();
        	//this.resetScroll();

        	// 페이지표시 Div 컨트롤
        	this.fnCallDivCtrl();

        };

        this.fnDtlBtnCtrlCur = function()
        {
        	//trace("[AprvAplyS01] 상세 권한별 버튼 처리 =========================");
        	var isBtnCfm = this.dsAddBtnCtrl.getColumn(0, "btnCfm");
        	var isBtnReg = this.dsAddBtnCtrl.getColumn(0, "btnReg");
        	var isBtnReq = this.dsAddBtnCtrl.getColumn(0, "btnReq");
        	var isBtnCls = this.dsAddBtnCtrl.getColumn(0, "btnCls");

         	if(isBtnCfm) { this.divFrm.form.divBtn.form.btnCfm.set_width(this.wBtnCfm); } else { this.divFrm.form.divBtn.form.btnCfm.set_width(0); }
         	if(isBtnReg) { this.divFrm.form.divBtn.form.btnReg.set_width(this.wBtnReg); } else { this.divFrm.form.divBtn.form.btnReg.set_width(-3); }
         	if(isBtnReq) { this.divFrm.form.divBtn.form.btnReq.set_width(this.wBtnReq); } else { this.divFrm.form.divBtn.form.btnReq.set_width(-3); }
         	if(isBtnCls) { this.divFrm.form.divBtn.form.btnCls.set_width(this.wBtnCls); } else { this.divFrm.form.divBtn.form.btnCls.set_width(-3); }

         	this.divFrm.form.divBtn.form.resetScroll();
        	//this.divFrm.form.resetScroll();
        	//this.resetScroll();

        	// 페이지표시 Div 컨트롤
        	this.fnCallDivCtrlCur();
        };

        this.fnDtlDivCtrl = function()
        {
        	var isDivReq 		= this.dsAddDivCtrl.getColumn(0, "divReq");
        	var isDivReqInfo 	= this.dsAddDivCtrl.getColumn(0, "divReqInfo");
        	var isDivReg 		= this.dsAddDivCtrl.getColumn(0, "divReg");
        	var isDivRegInfo 	= this.dsAddDivCtrl.getColumn(0, "divRegInfo");
        	var isDivCfm 		= this.dsAddDivCtrl.getColumn(0, "divCfm");
        	var isDivCfmInfo 	= this.dsAddDivCtrl.getColumn(0, "divCfmInfo");

        	this.aplyClCd 		= this.dsUniInfo.getColumn(0, "aplyClCd");
        	this.cnt 			= nexacro.toNumber(this.dsCnt.getColumn(0, "cnt"));
        	this.dataDmndYn 	= this.dsDocList.getColumn(this.dsDocList.rowposition, "dataDmndYn");
        	this.maxDgr 		= nexacro.toNumber(this.dsSrh.getColumn(0, "addDataDgr"));
        	this.curDgr 		= 1;

        	if(this.dsDocList.getRowCount() > 0) {
        		this.curDgr = nexacro.toNumber(this.dsDocList.getColumn(this.dsDocList.rowposition, "addDataDgr"));
        	}

        	trace(">> aplyClCd : " + this.aplyClCd);
        	trace(">> cnt : " + this.cnt);
        	trace(">> dataDmndYn : " + this.dataDmndYn);
        	trace(">> maxDgr : " + this.maxDgr);
        	trace(">> curDgr : " + this.curDgr);

        	trace("isDivReq");
        	if(isDivReq) {
        		this.divFrm.form.divH3.set_height(this.hDivH3);

        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			//현재 차수는 안보내야만 보이고, 과거차수는 보낸이력이 있으면 보임.
        			if((this.maxDgr == this.curDgr && this.cnt == 0)
        				|| (this.maxDgr > this.curDgr && this.dataDmndYn == "Y")) {
        				trace(">> cnt : IS ZERO");
        				this.divFrm.form.divReq.form.staPeriodYn.set_height(this.hStaPeriodYn);
        				this.divFrm.form.divReq.form.chkPeriodYn.set_height(this.hChkPeriodYn);
        				this.divFrm.form.divReq.form.staH3.set_height(this.hStaH3);

        				this.divFrm.form.divReq.form.staFile.set_top(this.staFileTop);
        				this.divFrm.form.divReq.form.staH2.set_top(this.staH2Top);
        				this.divFrm.form.divReq.form.divRaonKSingleReq01.set_top(this.staFileTop + 10);

        				this.divFrm.form.divReq.set_height(this.hDivReq);
        			}
        			else {
        				trace(">> cnt : IS NOT ZERO");
        				this.divFrm.form.divReq.form.staPeriodYn.set_height(0);
        				this.divFrm.form.divReq.form.chkPeriodYn.set_height(0);
        				this.divFrm.form.divReq.form.staH3.set_height(0);

        				this.divFrm.form.divReq.form.staFile.set_top(this.staFileTop - this.hStaH3);
        				this.divFrm.form.divReq.form.staH2.set_top(this.staH2Top - this.hStaH3);
        				this.divFrm.form.divReq.form.divRaonKSingleReq01.set_top(this.staFileTop - this.hStaH3 + 10);

        				this.divFrm.form.divReq.set_height(this.hDivReq - this.hStaH3);
        			}
        		}
        		else {
        			trace(">> cnt : IS NOT APC0001 OR APC0002");
        			this.divFrm.form.divReq.form.staPeriodYn.set_height(0);
        			this.divFrm.form.divReq.form.chkPeriodYn.set_height(0);
        			this.divFrm.form.divReq.form.staH3.set_height(0);

        			this.divFrm.form.divReq.form.staFile.set_top(this.staFileTop - this.hStaH3);
        			this.divFrm.form.divReq.form.staH2.set_top(this.staH2Top - this.hStaH3);
        			this.divFrm.form.divReq.form.divRaonKSingleReq01.set_top(this.staFileTop - this.hStaH3 + 10);

        			this.divFrm.form.divReq.set_height(this.hDivReq - this.hStaH3);
        		}
        	}
        	else {
        		this.divFrm.form.divH3.set_height(0);
        		this.divFrm.form.divReq.set_height(0);
        	}

        	trace("isDivReqInfo");
        	if(isDivReqInfo) {
        		this.divFrm.form.divH4.set_height(this.hDivH4);

        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			// 보낸 이력이 있으면 조회됨.
        			if(this.dataDmndYn == "Y") {
        				trace(">> cnt : IS ZERO");
        				this.divFrm.form.divReqInfo.form.staPeriodYn.set_height(this.hStaPeriodYn);
        				this.divFrm.form.divReqInfo.form.chkPeriodYn.set_height(this.hChkPeriodYn);
        				this.divFrm.form.divReqInfo.form.staH3.set_height(this.hStaH3);

        				this.divFrm.form.divReqInfo.form.staFile.set_top(this.staFileTop);
        				this.divFrm.form.divReqInfo.form.staH2.set_top(this.staH2Top);
        				this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.set_top(this.staFileTop + 10);

        				this.divFrm.form.divReqInfo.set_height(this.hDivReqInfo);
        			}
        			else {
        				trace(">> cnt : IS NOT ZERO");
        				this.divFrm.form.divReqInfo.form.staPeriodYn.set_height(0);
        				this.divFrm.form.divReqInfo.form.chkPeriodYn.set_height(0);
        				this.divFrm.form.divReqInfo.form.staH3.set_height(0);

        				this.divFrm.form.divReqInfo.form.staFile.set_top(this.staFileTop - this.hStaH3);
        				this.divFrm.form.divReqInfo.form.staH2.set_top(this.staH2Top - this.hStaH3);
        				this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.set_top(this.staFileTop - this.hStaH3 + 10);

        				this.divFrm.form.divReqInfo.set_height(this.hDivReqInfo - this.hStaH3);
        			}
        		}
        		else {
        			trace(">> cnt : IS NOT APC0001 OR APC0002");
        			this.divFrm.form.divReqInfo.form.staPeriodYn.set_height(0);
        			this.divFrm.form.divReqInfo.form.chkPeriodYn.set_height(0);
        			this.divFrm.form.divReqInfo.form.staH3.set_height(0);

        			this.divFrm.form.divReqInfo.form.staFile.set_top(this.staFileTop - this.hStaH3);
        			this.divFrm.form.divReqInfo.form.staH2.set_top(this.staH2Top - this.hStaH3);
        			this.divFrm.form.divReqInfo.form.divRaonKSingleReq02.set_top(this.staFileTop - this.hStaH3 + 10);

        			this.divFrm.form.divReqInfo.set_height(this.hDivReqInfo - this.hStaH3);
        		}
        	}
        	else {
        		this.divFrm.form.divH4.set_height(0);
        		this.divFrm.form.divReqInfo.set_height(0);
        	}

        	trace("isDivReg");
        	if(isDivReg) {
        		this.divFrm.form.divH5.set_height(this.hDivH5);

        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			// 보낸 이력이 있으면 조회됨.
        			if(this.dataDmndYn == "Y") {
        				trace(">> cnt : IS ZERO");
        				this.divFrm.form.divReg.form.staCertVldYmd.set_height(this.hStaCertVldYmd);
        				this.divFrm.form.divReg.form.divCalFromTo.set_height(this.hDivCalFromTo);
        				this.divFrm.form.divReg.form.staH5.set_height(this.hStaH5);

        				this.divFrm.form.divReg.form.staCn.set_top(this.staCnTop);
        				this.divFrm.form.divReg.form.staH4.set_top(this.staH4Top);
        				this.divFrm.form.divReg.form.edtCn.set_top(this.edtCnTop);

        				this.divFrm.form.divReg.set_height(this.hDivReg);
        			}
        			else {
        				trace(">> cnt : IS NOT ZERO");
        				this.divFrm.form.divReg.form.staCertVldYmd.set_height(0);
        				this.divFrm.form.divReg.form.divCalFromTo.set_height(0);
        				this.divFrm.form.divReg.form.staH5.set_height(0);

        				this.divFrm.form.divReg.form.staCn.set_top(this.staCnTop - this.hStaH5);
        				this.divFrm.form.divReg.form.staH4.set_top(this.staH4Top - this.hStaH5);
        				this.divFrm.form.divReg.form.edtCn.set_top(this.edtCnTop - this.hStaH5);

        				this.divFrm.form.divReg.set_height(this.hDivReg - this.hStaH5);
        			}
        		}
        		else {
        			trace(">> cnt : IS NOT APC0001 OR APC0002");
        			this.divFrm.form.divReg.form.staCertVldYmd.set_height(0);
        			this.divFrm.form.divReg.form.divCalFromTo.set_height(0);
        			this.divFrm.form.divReg.form.staH5.set_height(0);

        			this.divFrm.form.divReg.form.staCn.set_top(this.staCnTop - this.hStaH5);
        			this.divFrm.form.divReg.form.staH4.set_top(this.staH4Top - this.hStaH5);
        			this.divFrm.form.divReg.form.edtCn.set_top(this.edtCnTop - this.hStaH5);

        			this.divFrm.form.divReg.set_height(this.hDivReg - this.hStaH5);
        		}
        	}
        	else {
        		this.divFrm.form.divH5.set_height(0);
        		this.divFrm.form.divReg.set_height(0);
        	}

        	trace("isDivRegInfo");
        	if(isDivRegInfo) {
        		this.divFrm.form.divH6.set_height(this.hDivH6);

        		if(this.aplyClCd == "APC0001" || this.aplyClCd == "APC0002") {
        			// 보낸 이력이 있으면 조회됨.
        			if(this.dataDmndYn == "Y") {
        				trace(">> cnt : IS ZERO");
        				this.divFrm.form.divRegInfo.form.staCertVldYmd.set_height(this.hStaCertVldYmd);
        				this.divFrm.form.divRegInfo.form.edtCalFromTo.set_height(this.hDivCalFromTo);
        				this.divFrm.form.divRegInfo.form.staH5.set_height(this.hStaH5);

        				this.divFrm.form.divRegInfo.form.staCn.set_top(this.staCnTop);
        				this.divFrm.form.divRegInfo.form.staH4.set_top(this.staH4Top);
        				this.divFrm.form.divRegInfo.form.edtCn.set_top(this.edtCnTop);

        				this.divFrm.form.divRegInfo.set_height(this.hDivRegInfo);
        			}
        			else {
        				trace(">> cnt : IS NOT ZERO");
        				this.divFrm.form.divRegInfo.form.staCertVldYmd.set_height(0);
        				this.divFrm.form.divRegInfo.form.edtCalFromTo.set_height(0);
        				this.divFrm.form.divRegInfo.form.staH5.set_height(0);

        				this.divFrm.form.divRegInfo.form.staCn.set_top(this.staCnTop - this.hStaH5);
        				this.divFrm.form.divRegInfo.form.staH4.set_top(this.staH4Top - this.hStaH5);
        				this.divFrm.form.divRegInfo.form.edtCn.set_top(this.edtCnTop - this.hStaH5);

        				this.divFrm.form.divRegInfo.set_height(this.hDivRegInfo - this.hStaH5);
        			}
        		}
        		else {
        			trace(">> cnt : IS NOT APC0001 OR APC0002");
        			this.divFrm.form.divRegInfo.form.staCertVldYmd.set_height(0);
        			this.divFrm.form.divRegInfo.form.edtCalFromTo.set_height(0);
        			this.divFrm.form.divRegInfo.form.staH5.set_height(0);

        			this.divFrm.form.divRegInfo.form.staCn.set_top(this.staCnTop - this.hStaH5);
        			this.divFrm.form.divRegInfo.form.staH4.set_top(this.staH4Top - this.hStaH5);
        			this.divFrm.form.divRegInfo.form.edtCn.set_top(this.edtCnTop - this.hStaH5);

        			this.divFrm.form.divRegInfo.set_height(this.hDivRegInfo - this.hStaH5);
        		}
        	}
        	else {
        		this.divFrm.form.divH6.set_height(0);
        		this.divFrm.form.divRegInfo.set_height(0);
        	}

        	trace("isDivCfm");
        	if(isDivCfm) {
        		this.divFrm.form.divH7.set_height(this.hDivH7);
        		this.divFrm.form.divCfm.set_height(this.hDivCfm);
        	}
        	else {
        		this.divFrm.form.divH7.set_height(0);
        		this.divFrm.form.divCfm.set_height(0);
        	}

        	trace("isDivCfmInfo");
        	if(isDivCfmInfo) {
        		this.divFrm.form.divH8.set_height(this.hDivH8);
        		this.divFrm.form.divCfmInfo.set_height(this.hDivCfmInfo);
        	}
        	else {
        		this.divFrm.form.divH8.set_height(0);
        		this.divFrm.form.divCfmInfo.set_height(0);
        	}

        	this.divFrm.form.divH3.form.resetScroll();
        	this.divFrm.form.divReq.form.resetScroll();
        	this.divFrm.form.divH4.form.resetScroll();
        	this.divFrm.form.divReqInfo.form.resetScroll();
        	this.divFrm.form.divH5.form.resetScroll();
        	this.divFrm.form.divReg.form.resetScroll();
        	this.divFrm.form.divH6.form.resetScroll();
        	this.divFrm.form.divRegInfo.form.resetScroll();
        	this.divFrm.form.divH7.form.resetScroll();
        	this.divFrm.form.divCfm.form.resetScroll();
        	this.divFrm.form.divH8.form.resetScroll();
        	this.divFrm.form.divCfmInfo.form.resetScroll();
        	this.divFrm.form.divBtn.form.resetScroll();
        	this.divFrm.form.resetScroll();
        	this.resetScroll();

        	trace("DIV ALL CLEAR");

        	//파일 호출.
        	this.fnCallFileStart();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        this.divFrm_btnCls_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({flag:"CLOSE"});
        	this.gfnPopupClose(this, strRtn);
        };

        // 이력버튼
        this.divFrm_divH2_btnHist_onclick = function(obj,e)
        {
        	if(this.divFrm.form.divGrdList.height < 1) {
        		this.divFrm.form.divGrdList.set_height(this.hDivGrdList);
        		this.divFrm.form.resetScroll();
        	}
        	else {
        		this.divFrm.form.divGrdList.set_height(0);
        		this.divFrm.form.resetScroll();
        	}
        };

        // 닫기버튼
        this.divFrm_divBtn_btnCls_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({flag:"CLOSE"});
        	this.gfnPopupClose(this, strRtn);
        };

        // 요청버튼
        this.divFrm_divBtn_btnReq_onclick = function(obj,e)
        {
        	this.fnCallReq();
        };

        // 제출버튼
        this.divFrm_divBtn_btnReg_onclick = function(obj,e)
        {
        	this.fnCallReg();
        };

        // 확인버튼
        this.divFrm_divBtn_btnCfm_onclick = function(obj,e)
        {
        	this.fnCallCfm();
        };

        // 그리드 클릭 시
        this.divFrm_divGrdList_grdHistList_oncellclick = function(obj,e)
        {
        	this.dsCur.clearData();
        	this.dsCur.addRow();
        	this.dsCur.setColumn(0, "bizMngNo", this.dsSrh.getColumn(0, "bizMngNo"));	// 최신정보
        	this.dsCur.setColumn(0, "bizDgr", this.dsSrh.getColumn(0, "bizDgr"));		// 최신정보
        	this.dsCur.setColumn(0, "addDataDgr", this.dsDocList.getColumn(e.row, "addDataDgr"));
        	this.fnCallAddDataCur();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divTitFrm.form.btnCls.addEventHandler("onclick",this.divFrm_btnCls_onclick,this);
            this.divFrm.form.divH1.form.staBizTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divBiz.form.edtBizOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divFrm.form.divBiz.form.staBizKrnNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBiz.form.staMhdlg.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBiz.form.edtFldCdNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_00_onchanged,this);
            this.divFrm.form.divBiz.form.edtBizFormCd.addEventHandler("onchanged",this.Div01_div01_00_00_00_edt02_01_02_onchanged,this);
            this.divFrm.form.divBiz.form.staBizFormCd.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divFrm.form.divBiz.form.staAtcnvrRdcqty.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBiz.form.edtAgreeNm.addEventHandler("onchanged",this.Div01_div01_00_00_00_edt02_01_02_onchanged,this);
            this.divFrm.form.divH2.form.btnHist.addEventHandler("onclick",this.divFrm_divH2_btnHist_onclick,this);
            this.divFrm.form.divGrdList.form.grdHistList.addEventHandler("oncellclick",this.divFrm_divGrdList_grdHistList_oncellclick,this);
            this.divFrm.form.divH4.form.staReqInfo.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReqInfo.form.staFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divReqInfo.form.txaRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divReqInfo.form.staPeriodYn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divH6.form.staRegInfo.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divRegInfo.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divCfmInfo.form.txaCn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH7.form.staCfm.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divCfm.form.txaCn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH5.form.staReg.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReg.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divH3.form.staReq.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReq.form.staFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divReq.form.staPeriodYn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBtn.form.btnCls.addEventHandler("onclick",this.divFrm_divBtn_btnCls_onclick,this);
            this.divFrm.form.divBtn.form.btnReq.addEventHandler("onclick",this.divFrm_divBtn_btnReq_onclick,this);
            this.divFrm.form.divBtn.form.btnReg.addEventHandler("onclick",this.divFrm_divBtn_btnReg_onclick,this);
            this.divFrm.form.divBtn.form.btnCfm.addEventHandler("onclick",this.divFrm_divBtn_btnCfm_onclick,this);
        };
        this.loadIncludeScript("AprvAplyP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
