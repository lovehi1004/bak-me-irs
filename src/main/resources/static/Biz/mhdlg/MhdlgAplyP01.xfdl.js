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
                this._setFormPosition(1300,3090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocReg", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataIdntyTypeCdS", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCur", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlBtn\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndRsn\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyCn\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataRegTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dataIdntyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/><Column id=\"dataDmndYn\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataDmndFile", this);
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

            obj = new Static("staMhdlgTit","0","5","535","30",null,null,null,null,null,null,this.divFrm.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH1.addChild(obj.name, obj);

            obj = new Div("divBiz","5","45","1200","516",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH2","0","staH1:-1",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBrno","767","staH1:-37",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("4");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBrno","610","staH1:-44","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("1");
            obj.set_text("법인명/사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCdNm","157","staH2:-37",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","staBzentNm:-1","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("6");
            obj.set_text("방법론신청유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","staH1:-36","373","30",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH3","0","staH2:-1",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgOrgtNm","157","staH3:-37",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staMhdlgOrgtNm","0","staAplyClCdNm:-1","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("11");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH4","0","staH3:-1",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgKrnNm","157","staH4:-37",null,"30","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staMhdlgKrnNm","0","staMhdlgOrgtNm:-1","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("14");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNmArea","0","staH4:-1",null,"44","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClausCdNm","157","staAgreeClausNmArea:-38",null,"33","7",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeClausCdNm","0","staMhdlgKrnNm:-1","150","44",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("17");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeStiplArea","1","staAgreeClausNmArea:-1",null,"138","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Grid("grdAgreeStiplList","157","staAgreeStiplArea:-127",null,"116","16",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("19");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"790\"/><Column size=\"400\"/><Column size=\"170\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"협정/약정MOU명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"체결국\"/><Cell col=\"2\" text=\"상세\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:cncldKrnNm\"/><Cell col=\"1\" text=\"bind:ntnNm\"/><Cell col=\"2\" text=\"상세\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staAgreeStipl","0","staAgreeClausCdNm:-1","150","138",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("20");
            obj.set_text("협정/약정/MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staH6","0","staAgreeStiplArea:-1",null,"164","0",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Grid("grdBizFldList","157","staH6:-152",null,"140","15",null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"570\"/><Column size=\"570\"/><Column size=\"220\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"사업 세부분야\"/><Cell col=\"2\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:bizFldKornNm\"/><Cell col=\"1\" text=\"bind:bizDtlsFldKornNm\"/><Cell col=\"2\" text=\"bind:mhdlgUnqno\"/></Band></Format></Formats>");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Static("staBizFldList","0","staAgreeStipl:-1","150","164",null,null,null,null,null,null,this.divFrm.form.divBiz.form);
            obj.set_taborder("23");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divBiz.addChild(obj.name, obj);

            obj = new Div("divH2","5","565",null,"60","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("8");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staHist","0","20","565","30",null,null,null,null,null,null,this.divFrm.form.divH2.form);
            obj.set_taborder("0");
            obj.set_text("추가자료요청 이력정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divFrm.form.divH2.addChild(obj.name, obj);

            obj = new Button("btnHist","staHist:5","20","80","30",null,null,null,null,null,null,this.divFrm.form.divH2.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divFrm.form.divH2.addChild(obj.name, obj);

            obj = new Div("divGrdList","5","divH2:0",null,"183","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("15");
            this.divFrm.addChild(obj.name, obj);

            obj = new Grid("grdHistList","0","0",null,"173","0",null,null,null,null,null,this.divFrm.form.divGrdList.form);
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

            obj = new Div("divReqInfo","5","divH4:0","1200","210",null,null,null,null,null,null,this.divFrm.form);
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
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staH2","0","75",null,"132","0",null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Static("staFile","0","75","150","132",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
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
            obj.set_cssclass("output");
            this.divFrm.form.divReqInfo.addChild(obj.name, obj);

            obj = new Div("divDataDmndFlmno","157","staH2:-126","800","120",null,null,null,null,null,null,this.divFrm.form.divReqInfo.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
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

            obj = new Div("divRegInfo","5","divH6:0","1200","544",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"132","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH2","0","staH1:-1",null,"131","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","132",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("1");
            obj.set_text("방법론제안서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","staBizPlndFlmno:-1","150","132",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH3","0","staH2:-1",null,"207","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staCnvrBassDataFlmno","0","staEtcDataFlmno:-1","150","207",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("5");
            obj.set_text("기타증빙자료");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staH4","0","staH3:-1",null,"76","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("staCn","0","staCnvrBassDataFlmno:-1","150","76",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("7");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divPrpsdFlmno","157","6","800","120",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divBizPlndFlmno","156","137","800","120",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new Div("divEtcMultiFile","155","267","800","195",null,null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("11");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFrm.form.divRegInfo.addChild(obj.name, obj);

            obj = new TextArea("txaRvwWriteOpinion","157","staH4:-68",null,"62","-317",null,null,null,null,null,this.divFrm.form.divRegInfo.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_tooltiptext("검토의견");
            obj.set_cssclass("output");
            obj.set_readonly("true");
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
            obj.set_cssclass("output");
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

            obj = new Div("divReg","5","divH5:0","1200","544",null,null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staH1","0","0",null,"132","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH2","0","staH1:-1",null,"132","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","0","150","132",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("1");
            obj.set_text("방법론제안서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staEtcDataFlmno","0","staBizPlndFlmno:-1","150","132",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("3");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH3","0","staH2:-1",null,"207","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staCnvrBassDataFlmno","0","staEtcDataFlmno:-1","150","207",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("6");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staH4","0","staH3:-1",null,"76","0",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Static("staCn","0","staCnvrBassDataFlmno:-1","150","76",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("8");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new TextArea("txaRvwWriteOpinion","157","475",null,"62","7",null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_tooltiptext("검토의견");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divPrpsdFlmno","157","6","800","120",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divBizPlndFlmno","156","137","800","120",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFrm.form.divReg.addChild(obj.name, obj);

            obj = new Div("divEtcMultiFile","155","268","800","195",null,null,null,null,null,null,this.divFrm.form.divReg.form);
            obj.set_taborder("12");
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

            obj = new Div("divReq","5","divH3:0","1200","210",null,null,null,null,null,null,this.divFrm.form);
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

            obj = new Static("staH2","0","staH1:-1",null,"132","0",null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Static("staFile","0","staRsn:-1","150","132",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("5");
            obj.set_text("요청사유(파일)");
            obj.set_cssclass("sta_WF_Label");
            this.divFrm.form.divReq.addChild(obj.name, obj);

            obj = new Div("divDataDmndFlmno","157","staH2:-126","800","120",null,null,null,null,null,null,this.divFrm.form.divReq.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
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

            //-- Default Layout : this.divFrm.form.divReqInfo.form.divDataDmndFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divReqInfo.form.divDataDmndFlmno.form,function(p){});
            this.divFrm.form.divReqInfo.form.divDataDmndFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReqInfo.form
            obj = new Layout("default","",0,0,this.divFrm.form.divReqInfo.form,function(p){});
            this.divFrm.form.divReqInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH6.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH6.form,function(p){});
            this.divFrm.form.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divPrpsdFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divPrpsdFlmno.form,function(p){});
            this.divFrm.form.divRegInfo.form.divPrpsdFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divBizPlndFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divBizPlndFlmno.form,function(p){});
            this.divFrm.form.divRegInfo.form.divBizPlndFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divRegInfo.form.divEtcMultiFile
            obj = new Layout("default","",0,0,this.divFrm.form.divRegInfo.form.divEtcMultiFile.form,function(p){});
            this.divFrm.form.divRegInfo.form.divEtcMultiFile.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divFrm.form.divReg.form.divPrpsdFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divPrpsdFlmno.form,function(p){});
            this.divFrm.form.divReg.form.divPrpsdFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divBizPlndFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divBizPlndFlmno.form,function(p){});
            this.divFrm.form.divReg.form.divBizPlndFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form.divEtcMultiFile
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form.divEtcMultiFile.form,function(p){});
            this.divFrm.form.divReg.form.divEtcMultiFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReg.form
            obj = new Layout("default","",0,0,this.divFrm.form.divReg.form,function(p){});
            this.divFrm.form.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divH3.form
            obj = new Layout("default","",0,0,this.divFrm.form.divH3.form,function(p){});
            this.divFrm.form.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divReq.form.divDataDmndFlmno
            obj = new Layout("default","",0,0,this.divFrm.form.divReq.form.divDataDmndFlmno.form,function(p){});
            this.divFrm.form.divReq.form.divDataDmndFlmno.form.addLayout(obj.name, obj);

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
            obj = new Layout("default","",1300,3090,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFrm.form.divBiz.form.edtBzentNm","value","dsMhdlgInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFrm.form.divBiz.form.edtBrno","value","dsMhdlgInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFrm.form.divBiz.form.edtBizScalCd","value","dsUniInfo","bizScalCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFrm.form.divBiz.form.edtAplyClCdNm","value","dsMhdlgInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFrm.form.divBiz.form.edtMhdlgOrgtNm","value","dsMhdlgInfo","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFrm.form.divBiz.form.edtMhdlgKrnNm","value","dsMhdlgInfo","mhdlgKrnNm");
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

            obj = new BindItem("item12","divFrm.form.divRegInfo.form.edtCn","value","dsDocReg","dataRegCn");
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

            obj = new BindItem("item17","divFrm.form.divBiz.form.edtAgreeClausCdNm","value","dsMhdlgInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divFrm.form.divRegInfo.form.txaRvwWriteOpinion","value","dsDocList","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divFrm.form.divReg.form.txaRvwWriteOpinion","value","dsDocReg","dataRegCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgAplyP01.xfdl", function() {
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

        this.roleIdMgno = this.fvApp.User.roleIdMgno;


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

        	trace("[추가자료 처리 모달(Modal) 팝업]=========================================");
        	trace("this.fvPopupUrl:"+this.fvPopupUrl);
        	trace("this.fvTitletext:"+this.fvTitletext);
        	trace("this.fvCallback:"+this.fvCallback);
        	trace("this.fvSrcPopup:"+this.fvSrcPopup);
        	trace("this.FvOpenType:"+this.FvOpenType);
        	trace("this.fvMnuId:"+this.fvMnuId);
        	trace("this.fvModeless:"+this.fvModeless);

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
        		trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}

        	//2. Parameter 참조
        	var mhdlgMgno 	= this.gfnGetParameter(objFormFrame, "mhdlgMgno");
        	var mhdlgDgr 	= this.gfnGetParameter(objFormFrame, "mhdlgDgr");
        	var addDataTypeCd 		= this.gfnGetParameter(objFormFrame, "addDataTypeCd");
        	var addDataDgr 	= this.gfnGetParameter(objFormFrame, "addDataDgr");

        	trace("mhdlgMgno : " + mhdlgMgno);
        	trace("mhdlgDgr : " + mhdlgDgr);
        	trace("addDataDgr : " + addDataDgr);


        	// 검색 데이터셋 초기화.
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "mhdlgMgno", mhdlgMgno);
        	this.dsSrh.setColumn(0, "mhdlgDgr", mhdlgDgr);
        	this.dsSrh.setColumn(0, "addDataDgr", addDataDgr);

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	this.dsDocReg.clearData();
        	this.dsDocReg.addRow();
        	this.dsDocReg.setColumn(0, "dataIdntyTypeCd", "");
        	this.fnFormChange(addDataTypeCd);

        	var objParam1 = { objDs:this.dsDocList							// 바인딩 데이터셋
        					,sBindCol:"prpsdFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"prpsdFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divFrm.form.divRegInfo.form.divPrpsdFlmno.form.fnInitRaonK(this, objParam1);

        	//사업계획서
        	var objParam2 = { objDs:this.dsDocList							// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"bizPlndFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divFrm.form.divRegInfo.form.divBizPlndFlmno.form.fnInitRaonK(this, objParam2);

        	//기타파일
        	var objParam3 = { objDs:this.dsDocList									// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };

        	this.divFrm.form.divRegInfo.form.divEtcMultiFile.form.fnInitRaonK(this, objParam3);

        	//요청사유(파일)
        	var objParam4 = { objDs:this.dsDocList									// 바인딩 데이터셋
        					,sBindCol:"dataDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dataDmndFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divFrm.form.divReqInfo.form.divDataDmndFlmno.form.fnInitRaonK(this, objParam4);

        	//방법론 작성
        	var objParam5 = { objDs:this.dsDocReg							// 바인딩 데이터셋
        					,sBindCol:"prpsdFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"prpsdFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };
        	this.divFrm.form.divReg.form.divPrpsdFlmno.form.fnInitRaonK(this, objParam5);

        	//사업계획서 작성
        	var objParam6 = { objDs:this.dsDocReg							// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"bizPlndFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divFrm.form.divReg.form.divBizPlndFlmno.form.fnInitRaonK(this, objParam6);

        	//기타파일 작성
        	var objParam7 = { objDs:this.dsDocReg									// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };

        	this.divFrm.form.divReg.form.divEtcMultiFile.form.fnInitRaonK(this, objParam7);

        	//요청사유(파일) 작성
        	var objParam8 = { objDs:this.dsDocReg									// 바인딩 데이터셋
        					,sBindCol:"dataDmndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dataDmndFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divFrm.form.divReq.form.divDataDmndFlmno.form.fnInitRaonK(this, objParam8);


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
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

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
        			case -1 :
        				// 후처리 코드

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
        			// 페이지표시 Div 컨트롤
        			//this.fnCallDivCtrl();

        			// 버튼 컨트롤
        			//this.fnCallDtlBtnCtrl();
        			this.fnFileSetting();
        			var addDataTypeCd = this.dsMhdlgInfo.getColumn(0,'addDataTypeCd')
        			this.fnFormChange(addDataTypeCd);
        			break;
        		case "addBtnInfo" :
        			// 후처리 코드
        			this.fnDtlBtnCtrl();
        			break;
        		case "addReq" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnCallAddData();
        			break;
        		case "addReg" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnCallAddData();
        			break;
        		case "addCfm" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert03");
        			this.fnCallAddData();
        			break;
        		case "addDataCurInfo" :
        			var arrRows = this.dsDocList.extractRows("btnCtl=='현재문서'");
        			trace("arrRows =====> " + arrRows[0]);
        			this.dsDocList.set_rowposition(nexacro.toNumber(arrRows[0]));
        			this.fnFileSetting();
        			break;
        		case "divInfoCur" :
        			// 후처리 코드
        			this.fnDtlDivCtrl();
        			break;
        		case "addBtnInfoCur" :
        			// 후처리 코드
        			this.fnDtlBtnCtrl();
        			break;
        		default:
        			break;
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "prpsdFlmnoWrite" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "DELETE")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "UPLOAD")
        			{
        				this.dsPrpsdFile.clearData();
        				var nRowCnt = this.dsPrpsdFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "bizPlndFlmnoWrite" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "DELETE")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "UPLOAD")
        			{
        				this.dsBizPlndFile.clearData();
        				var nRowCnt = this.dsBizPlndFile.copyData(objRtn.objDs);
        			}
        			break;
        		case  "etcDataFlmnoWrite" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "DELETE")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "UPLOAD")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "dataDmndFlmnoWrite" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsDataDmndFile.clearData();
        				var nRowCnt = this.dsDataDmndFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "DELETE")
        			{
        				this.dsDataDmndFile.clearData();
        				var nRowCnt = this.dsDataDmndFile.copyData(objRtn.objDs);
        			}else if (objRtn.sDiv == "UPLOAD")
        			{
        				this.dsDataDmndFile.clearData();
        				var nRowCnt = this.dsDataDmndFile.copyData(objRtn.objDs);
        			}
        			break;
        		default :
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallCfm = function()
        {
        	trace("추가자료 확인 호출...");

        	if(!this.fnAccessAuth(this.roleIdMgno))
        	{
        		var callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyDataRslt.irs";
        		var objArgs = {};
        		objArgs.svcId 			= "addCfm";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsSrh=dsSrh dsDocReg=dsDocReg";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}

        };

        this.fnCallReg = function()
        {
        	trace("추가자료 제출 호출...");
        	var callUrl = "";

        	if(this.fnAccessAuth(this.roleIdMgno)) {
        		callUrl = "/biz/mhdlg/mhdlgAply/insertMhdlgAplyDataReg.irs";
        	}else {
        		callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyDataReg.irs";
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "addReg";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh"
        							+ " dsDocReg=dsDocReg"
        							+ " dsEtcDataFile=dsEtcDataFile"
        							+ " dsPrpsdFile=dsPrpsdFile"
        							+ " dsBizPlndFile=dsBizPlndFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        this.fnCallReq = function()
        {
        	trace("추가자료 요청 호출...");
        	if(!this.fnAccessAuth(this.roleIdMgno))
        	{
        		var callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyDataDmnd.irs";

        		var objArgs = {};
        		objArgs.svcId 			= "addReq";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsSrh=dsSrh"
        								+ " dsDocReg=dsDocReg"
        								+ " dsDataDmndFile=dsDataDmndFile";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}

        };

        /**
        this.fnCallDtlBtnCtrl = function()
        {
        	trace("추가자료 권한별 버튼처리 호출...");
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
        	trace("추가자료 div 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

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
        **/
        this.fnCallAddData = function()
        {
        	trace("추가자료 상세 호출...");

        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/mhdlg/mhdlgAply/selectMhdlgAplyDataDmnd.irs";
        	}else {
        		callUrl = "/adm/mhdlg/mhdlgAply/selectMhdlgAplyDataDmnd.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "addDataInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsMhdlgInfo=dsMhdlgInfo"
        							+ " dsBizFldList=dsBizFldList"
        							+ " dsAgrStiplList=dsAgrStiplList"
        							+ " dsDocList=dsDocList"
        							+ " dsDocReg=dsDocReg";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallAddDataCur = function()
        {
        	trace("추가자료 선택차수 상세 호출...");

        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	var callUrl = "";

        	if(this.fnAccessAuth(this.roleIdMgno)) {
        		callUrl = "/biz/mhdlg/mhdlgAply/selectMhdlgAplyAddDataDetailCur.irs";
        	}else {
        		callUrl = "/adm/mhdlg/mhdlgAply/selectMhdlgAplyAddDataDetailCur.irs";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "addDataCurInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsCur=dsCur";
         	objArgs.outds     		= "dsUniInfo=dsUniInfo dsUniMhdlgList=dsUniMhdlgList dsDocList=dsDocList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        this.fnCallDtlBtnCtrlCur = function()
        {
        	trace("추가자료 선택차수 권한별 버튼처리 호출...");
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


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        this.fnFormChange = function(addDataTypeCd)
        {
        		this.divFrm.form.divH2.set_height(0);
        		this.divFrm.form.divGrdList.set_height(0);
        		this.divFrm.form.divH4.set_height(0);
        		this.divFrm.form.divReqInfo.set_height(0);
        		this.divFrm.form.divH6.set_height(0);
        		this.divFrm.form.divRegInfo.set_height(0);
        		this.divFrm.form.divH8.set_height(0);
        		this.divFrm.form.divCfmInfo.set_height(0);
        		this.divFrm.form.divH7.set_height(0);
        		this.divFrm.form.divCfm.set_height(0);
        		this.divFrm.form.divH5.set_height(0);
        		this.divFrm.form.divReg.set_height(0);
        		this.divFrm.form.divH3.set_height(0);
        		this.divFrm.form.divReq.set_height(0);
        		this.divFrm.form.divBtn.form.btnCfm.set_width(0);
        		this.divFrm.form.divBtn.form.btnReg.set_width(0);
        		this.divFrm.form.divBtn.form.btnReq.set_width(0);

        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		if(this.gfnIsNull(addDataTypeCd))
        		{

        		}else if(addDataTypeCd == 'ADT0001')
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);
        			this.divFrm.form.divH5.set_height(50);
        			this.divFrm.form.divReg.set_height(544);
        			this.divFrm.form.divBtn.form.btnReg.set_width(75);

        		}else if(addDataTypeCd == 'ADT0002')
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);
        			this.divFrm.form.divH6.set_height(50);
        			this.divFrm.form.divRegInfo.set_height(544);
        		}else if(addDataTypeCd == 'ADT0003' || addDataTypeCd == 'ADT0004' )
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);
        			this.divFrm.form.divH6.set_height(50);
        			this.divFrm.form.divRegInfo.set_height(544);
        			this.divFrm.form.divH8.set_height(50);
        			this.divFrm.form.divCfmInfo.set_height(119);
        		}
        	}else
        	{
        		if(this.gfnIsNull(addDataTypeCd))
        		{
        			this.divFrm.form.divH3.set_height(50);
        			this.divFrm.form.divReq.set_height(210);
        			this.divFrm.form.divBtn.form.btnReq.set_width(75);

        		}else if(addDataTypeCd == 'ADT0001')
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);

        		}else if(addDataTypeCd == 'ADT0002')
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);
        			this.divFrm.form.divH6.set_height(50);
        			this.divFrm.form.divRegInfo.set_height(544);
        			this.divFrm.form.divH7.set_height(50);
        			this.divFrm.form.divCfm.set_height(119);
        			this.divFrm.form.divBtn.form.btnCfm.set_width(75);
        		}else if(addDataTypeCd == 'ADT0003' || addDataTypeCd == 'ADT0004' )
        		{
        			this.divFrm.form.divH2.set_height(50);
        			this.divFrm.form.divGrdList.set_height(183);
        			this.divFrm.form.divH4.set_height(50);
        			this.divFrm.form.divReqInfo.set_height(210);
        			this.divFrm.form.divH6.set_height(50);
        			this.divFrm.form.divRegInfo.set_height(544);
        			this.divFrm.form.divH8.set_height(50);
        			this.divFrm.form.divCfmInfo.set_height(119);
        			this.divFrm.form.divH3.set_height(50);
        			this.divFrm.form.divReq.set_height(210);
        			this.divFrm.form.divBtn.form.btnReq.set_width(75);
        		}
        	}
        	this.divFrm.form.resetScroll();
        	this.resetScroll();

        }

        //접근권한 설정
        this.fnAccessAuth = function(roleIdMgno){
        	//사업수행자 권한
        	if(roleIdMgno == "RL00000004" || roleIdMgno == "RL00000005" || roleIdMgno == "RL00000009" || roleIdMgno == "RL00000010")
        	{
        		return true;
        	//관장기관(위탁기관) 권한
        	}else
        	{
        		return false;
        	}
        }

        this.fnFileSetting = function()
        {
        	var addDataTypeCd = this.dsMhdlgInfo.getColumn(0,'addDataTypeCd');
        	var prpsdFlmnoWrtie = this.dsDocReg.getColumn(0,'prpsdFlmno');
        	var bizPlndFlmnoWrtie = this.dsDocReg.getColumn(0,'bizPlndFlmno');
        	var etcDataFlmnoWrtie = this.dsDocReg.getColumn(0,'etcDataFlmno');
        	var dataDmndFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition,'dataDmndFlmno');
        	var prpsdFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition,'prpsdFlmno');
        	var bizPlndFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition,'bizPlndFlmno');
        	var etcDataFlmno = this.dsDocList.getColumn(this.dsDocList.rowposition,'etcDataFlmno');
        	var regDataDmndFlmno =this.dsDocReg.getColumn(0,'dataDmndFlmno');

        	if(this.fnAccessAuth(this.roleIdMgno))
        	{

        		if(addDataTypeCd == 'ADT0001')//등록용 호출
        		{
        			this.divFrm.form.divReg.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmnoWrtie);
        			this.divFrm.form.divReg.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmnoWrtie);
        			this.divFrm.form.divReg.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmnoWrtie);
        		}else
        		{
        			this.divFrm.form.divRegInfo.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        			this.divFrm.form.divRegInfo.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        			this.divFrm.form.divRegInfo.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);
        		}
        		this.divFrm.form.divReqInfo.form.divDataDmndFlmno.form.fnSearchFile(dataDmndFlmno);
        	}else
        	{
        		if(this.gfnIsNull(addDataTypeCd))
        		{
        			this.divFrm.form.divReq.form.divDataDmndFlmno.form.fnSearchFile(regDataDmndFlmno);
        		}else{
        			this.divFrm.form.divRegInfo.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        			this.divFrm.form.divRegInfo.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        			this.divFrm.form.divRegInfo.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);
        			this.divFrm.form.divReqInfo.form.divDataDmndFlmno.form.fnSearchFile(dataDmndFlmno);
        		}
        	}
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "X" 버튼 클릭
        */
        this.divFrm_btnCls_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({flag:"CLOSE"});
        	trace("=====strRtn========"+strRtn);
        	this.gfnPopupClose(this, strRtn);
        };

        // 이력버튼
        this.divFrm_divH2_btnHist_onclick = function(obj,e)
        {
        	trace("이력보기 호출");
        	if(this.divFrm.form.divGrdList.height < 1) {
        		this.divFrm.form.divGrdList.set_height(183);
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
        	trace("=====strRtn========"+strRtn);
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
        	this.dsCur.setColumn(0, "mhdlgMgno", this.dsDocList.getColumn(e.row, "mhdlgMgno"));
        	this.dsCur.setColumn(0, "mhdlgDgr", this.dsDocList.getColumn(e.row, "mhdlgDgr"));
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
            this.divFrm.form.divH1.form.staMhdlgTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divBiz.form.edtAplyClCdNm.addEventHandler("onchanged",this.Div01_div01_00_00_00_edt02_01_02_onchanged,this);
            this.divFrm.form.divBiz.form.staAplyClCdNm.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.divFrm.form.divBiz.form.edtBzentNm.addEventHandler("onchanged",this.Div01_div01_00_00_00_edt02_01_02_onchanged,this);
            this.divFrm.form.divBiz.form.edtMhdlgOrgtNm.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divFrm.form.divBiz.form.staMhdlgKrnNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBiz.form.staAgreeClausCdNm.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_01_onclick,this);
            this.divFrm.form.divBiz.form.staAgreeStipl.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_00_00_00_onclick,this);
            this.divFrm.form.divBiz.form.staBizFldList.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divH2.form.staHist.addEventHandler("onclick",this.divFrm_divH2_staHist_onclick,this);
            this.divFrm.form.divH2.form.btnHist.addEventHandler("onclick",this.divFrm_divH2_btnHist_onclick,this);
            this.divFrm.form.divGrdList.form.grdHistList.addEventHandler("oncellclick",this.divFrm_divGrdList_grdHistList_oncellclick,this);
            this.divFrm.form.divH4.form.staReqInfo.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReqInfo.form.staFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divReqInfo.form.txaRsn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH6.form.staRegInfo.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divRegInfo.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divRegInfo.form.txaRvwWriteOpinion.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divCfmInfo.form.txaCn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH7.form.staCfm.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divCfm.form.txaCn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH5.form.staReg.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReg.form.staEtcDataFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divReg.form.txaRvwWriteOpinion.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divFrm.form.divH3.form.staReq.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divFrm.form.divReq.form.staFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divFrm.form.divBtn.form.btnCls.addEventHandler("onclick",this.divFrm_divBtn_btnCls_onclick,this);
            this.divFrm.form.divBtn.form.btnReq.addEventHandler("onclick",this.divFrm_divBtn_btnReq_onclick,this);
            this.divFrm.form.divBtn.form.btnReg.addEventHandler("onclick",this.divFrm_divBtn_btnReg_onclick,this);
            this.divFrm.form.divBtn.form.btnCfm.addEventHandler("onclick",this.divFrm_divBtn_btnCfm_onclick,this);
        };
        this.loadIncludeScript("MhdlgAplyP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
