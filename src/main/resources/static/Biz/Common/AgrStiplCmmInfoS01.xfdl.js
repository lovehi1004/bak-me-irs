(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member");
            this.set_titletext("정보공개 협정약정 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMemberList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrnSn\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"intntGnrlTelno\" type=\"STRING\" size=\"256\"/><Column id=\"cmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnsltngrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpCmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"operRglCn\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"orgtCncldFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"krnCncldFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrgtCncldFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fullFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKrnCncldFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fullFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staAgrTitle","55","13",null,"30","1256",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("협정·약정 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divAgrInfo","55","53",null,"173","55",null,"1130",null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","129",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCncldKrnNm","50.00%","0","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("2");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldOrgtNm","157","7",null,"30","staCncldKrnNm:7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("원문명");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCncldOrgtNm","0","0","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("0");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staSgntYmd","0","43","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("4");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staOrgtCncldFile","0","129","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("12");
            obj.set_text("원문파일");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staPactNo","50%","43","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("6");
            obj.set_text("조약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtPactNo","staPactNo:7","50",null,"30","7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("조약번호");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtSgntYmd","staSgntYmd:7","50",null,"30","staPactNo:7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("서명일자");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staNtlNm","0","86","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("8");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staEftvnYmd","50%","86","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("10");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtEftvnYmd","staEftvnYmd:7","93",null,"30","7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("발효일자");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staKrnCncldFile","50.00%","129","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("15");
            obj.set_text("국문파일");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtKrnCncldFile","staKrnCncldFile:7","136",null,"30","81",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("국문파일명");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtNtlNm","staNtlNm:7","93",null,"30","staEftvnYmd:7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("체결국가");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Button("btnOrgtCncldFileDown",null,"136","66","30","staKrnCncldFile:7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("14");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("원문파일다운로드");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtOrgtCncldFile","staOrgtCncldFile:7","136",null,"30","btnOrgtCncldFileDown:7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("원문파일명");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldKrnNm","staCncldKrnNm:7","7",null,"30","7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("국문명");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Button("btnKrnCncldFileDown",null,"136","66","30","7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("22");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("국문파일다운로드");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Div("divCnsltngrpInfo","55","286",null,"501","55",null,"1130",null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltngrpCmpsYmd","50.00%","0","150","44",null,null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("2");
            obj.set_text("협의체구성일자");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpNm","157","7",null,"30","staCnsltngrpCmpsYmd:7",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("협의체명");
            obj.set_text("");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltngrpNm","0","0","150","44",null,null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("0");
            obj.set_text("협의체명");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpCmpsYmd","staCnsltngrpCmpsYmd:7","7",null,"30","7",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("협의체구성일자");
            obj.set_text("");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","sta03:-1",null,"255","0",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltngrpList","0","staCnsltngrpNm:-1","150","255",null,null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("4");
            obj.set_text("구성원");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Grid("grdCnsltngrpList","157","sta07_00_00_00:-247",null,"238","7",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsMemberList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가\"/><Cell col=\"1\" text=\"구성원(영문)\"/><Cell col=\"2\" text=\"구성원(국문)\"/><Cell col=\"3\" text=\"소속기관\"/><Cell col=\"4\" text=\"사무실전화번호\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:ntnKornNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"bind:gmbrOrgtNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:gmbrKrnNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:instNm\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:intntGnrlTelno\"/></Band></Format></Formats>");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltnCnArea","0","sta07_00_00_00:-1",null,"120","-1",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltnCn","0","staCnsltngrpList:-1","150","120",null,null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("6");
            obj.set_text("협의내용\r\n(회의결과)");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staOperRglCnArea","0","staCnsltnCnArea:-1",null,"90","0",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staOperRglCn","0","staCnsltnCn:-1","150","90",null,null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("8");
            obj.set_text("운영규정");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new TextArea("txaCnsltnCn","157","staCnsltnCnArea:-110",null,"100","7",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("협의내용");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new TextArea("txaOperRglCn","157","staOperRglCnArea:-83",null,"76","7",null,null,null,null,null,this.divCnsltngrpInfo.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("운영규정");
            this.divCnsltngrpInfo.addChild(obj.name, obj);

            obj = new Static("staCnsltngrpTitle","55","246","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("국제감축협의체 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","55","divCnsltngrpInfo:20",null,"62","55",null,"1130",null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button_list",null,"0","80","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_accessibilitylabel("목록");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAgrInfo.form
            obj = new Layout("default","",0,0,this.divAgrInfo.form,function(p){});
            this.divAgrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpInfo.form
            obj = new Layout("default","",0,0,this.divCnsltngrpInfo.form,function(p){});
            this.divCnsltngrpInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCnsltngrpInfo.form.txaOperRglCn","value","dsCnsltngrpInfo","operRglCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCnsltngrpInfo.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCnsltngrpInfo.form.edtCnsltngrpCmpsYmd","value","dsCnsltngrpInfo","cnsltngrpCmpsYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCnsltngrpInfo.form.txaCnsltnCn","value","dsCnsltngrpInfo","cnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAgrInfo.form.edtCncldKrnNm","value","dsCnsltngrpInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAgrInfo.form.edtCncldOrgtNm","value","dsCnsltngrpInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAgrInfo.form.edtSgntYmd","value","dsCnsltngrpInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAgrInfo.form.edtPactNo","value","dsCnsltngrpInfo","pactNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAgrInfo.form.edtNtlNm","value","dsCnsltngrpInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAgrInfo.form.edtEftvnYmd","value","dsCnsltngrpInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divAgrInfo.form.edtOrgtCncldFile","value","dsOrgtCncldFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divAgrInfo.form.edtKrnCncldFile","value","dsKrnCncldFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAgrInfo.form.edtOrgtCncldFile","tooltiptext","dsOrgtCncldFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divAgrInfo.form.edtKrnCncldFile","tooltiptext","dsKrnCncldFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAgrInfo.form.edtCncldOrgtNm","tooltiptext","dsCnsltngrpInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAgrInfo.form.edtCncldKrnNm","tooltiptext","dsCnsltngrpInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AgrStiplCmmInfoS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 협정약정MOU 상세화면
        * FILE NAME     : AgrStiplCmmInfoS01.xfdl
        * DESCRIPTION   : 정보공개 협정약정MOU 상세화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.12    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";
        this.fvPrePage = "";


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
        	trace("[divDataBoardS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;

        	this.getOwnerFrame().form.fnLoadComplete('AgrStiplInfoS01');
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);


        	/*
        	// 권한 확인
        	// Lib_Constants.xjs > objAuth 키값 참고
        	// 권한 Y/N 정보로 업무화면의 내부버튼 제어가 필요할때 사용 , 권한은 gdsMenu 의 각 권한 컬럼 정보로 gfnSetFormInit 호출시 셋팅되어짐.
        	var sRtn = this.gfnGetAuth(this, "InqAuthrt");		// 조회권한 Y/N
        	trace("sRtn:"+sRtn);
        	*/
        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Frame.js > gfnCallOpenMenu, gfnOpenMenu  => frameWork > fnCallOpenedForm 에서 호출
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleScript][fnParamInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1+"\nthis.fvArgRecv.objDs:"+this.fvArgRecv.objDs.saveXML());
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

        	// TODO
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// TODO
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */
        this.form_onkeyup = function(obj,e)
        {
        	// 팝업에서 취소시 닫기 기능용
        	if( e.keycode == 27 )				// ESC
        	{
        		this.close("CANCEL");
        	}
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "AgrStiplDtl" :
        			var orgtCncldFlmno = this.dsCnsltngrpInfo.getColumn(0,'orgtCncldFlmno');
        			var krnCncldFlmno = this.dsCnsltngrpInfo.getColumn(0,'krnCncldFlmno');

        			this.dsFileInfo.clearData();
        			var nRow = this.dsFileInfo.addRow();
        			this.dsFileInfo.setColumn(nRow,'flag', 'orgtCncldFlmno');
        			this.dsFileInfo.setColumn(nRow,'fileGroupMgno', orgtCncldFlmno);

        			var nRow2 = this.dsFileInfo.addRow();
        			this.dsFileInfo.setColumn(nRow2,'flag', 'krnCncldFlmno');
        			this.dsFileInfo.setColumn(nRow2,'fileGroupMgno', krnCncldFlmno);

        			this.fnFileSearch();
        		break;
        		case "fileSearch" :
        			this.fnBtnShowYn();
        			var cncldClCd = this.dsCnsltngrpInfo.getColumn(0,'cncldClCd');
        			if(!this.gfnIsNull(cncldClCd)){
        				if(cncldClCd == "CNC0001")
        				{
        					this.staAgrTitle.set_text("협정정보 ");
        				}else if (cncldClCd == "CNC0002")
        				{
        					this.staAgrTitle.set_text("약정정보 ");
        				}else if (cncldClCd == "CNC0003")
        				{
        					this.staAgrTitle.set_text("MOU정보 ");
        				}
        				this.resetScroll();
        			}
        		break;
        		default :
        		break;
        	}
        };

        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "flmno" :
        			break;
        		default :
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {

         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "AgrStiplDtl";
          	objArgs.url 			= "/common/inforls/selectAgrStiplDtl.irs";
          	objArgs.inds			= "dsSrh=dsSrh";
          	objArgs.outds			= "dsMemberList=dsMemberList dsCnsltngrpInfo=dsCnsltngrpInfo"
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        };

        //파일명 조회
        this.fnFileSearch = function()
        {
        	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "fileSearch";
          	objArgs.url 			= "/common/inforls/selectFileNm.irs";
          	objArgs.inds			= "dsFileInfo=dsFileInfo";
          	objArgs.outds			= "dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile";
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        }

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[DataBoardS01]fnChangeDiv =========================");
        	this.fnClearDataSet();
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.cncldMgno))
        		{
        			this.dsSrh.setColumn(0,'cncldMgno',objArgs.cncldMgno)
        		}

        		if(!this.gfnIsNull(objArgs.cncldDgr))
        		{
        			this.dsSrh.setColumn(0,'cncldDgr',objArgs.cncldDgr)
        		}

        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvPrePage = objArgs.prePage;
        		}

        	}
        	this.fnSearch();

        }

        this.fnClearDataSet = function()
        {
        	this.dsCnsltngrpInfo.clearData();
        	this.dsFileInfo.clearData();
        	this.dsKrnCncldFile.clearData();
        	this.dsMemberList.clearData();
        	this.dsOrgtCncldFile.clearData();
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        }

        this.fnBtnShowYn = function()
        {
        	if(this.gfnIsNull(this.dsKrnCncldFile.getColumn(0,'fullFileNm')))
        	{
        		this.div03.form.btnKrnCncldFileDown.set_visible(false);
        	}else
        	{
        		this.div03.form.btnKrnCncldFileDown.set_visible(true);
        	}

        	if(this.gfnIsNull(this.dsOrgtCncldFile.getColumn(0,'fullFileNm')))
        	{
        		this.div03.form.btnOrgtCncldFileDown.set_visible(false);
        	}else
        	{
        		this.div03.form.btnOrgtCncldFileDown.set_visible(true);
        	}
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */

        this.divBoardInfo_btnList_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnDataBoardCall();
        };

        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//전체관리자, 관장기관, 외교부 권한 순
        	if(roleIdMgno == "RL00000001" || roleIdMgno == "RL00000002" || roleIdMgno == "RL00000006")
        	{
        		return true;
        	//그 외 권한
        	}else
        	{
        		return false;
        	}
        }

        this.Button_list_onclick = function(obj,e)
        {

        	var prePage = this.fvPrePage;
        	if(!this.gfnIsNull(prePage))
        	{
        		if(prePage == "SearchCmmInfoM00")
        		{
        			this.getOwnerFrame().form.staTitleNm.set_text("통합검색");
        			this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoM00");

        		}else if (prePage == "SearchCmmInfoS01")
        		{
        			this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        			var objArgs = {};
        			objArgs.flag = "agrStipl";
        			this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        		}else if (prePage == "AgrStiplCmmInfoM00")
        		{
        			this.getOwnerFrame().form.fnAgrStiplInfoListCall();
        		}
        	}else
        	{
        		this.getOwnerFrame().form.fnAgrStiplInfoListCall();
        	}
        };

        this.div03_btnOrgtCncldFileDown_onclick = function(obj,e)
        {
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsOrgtCncldFile.getColumn(0, "fileGroupMgno"), fileMgno : this.dsOrgtCncldFile.getColumn(0, "fileMgno")}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        this.div03_btnKrnCncldFileDown_onclick = function(obj,e)
        {
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsKrnCncldFile.getColumn(0, "fileGroupMgno"), fileMgno : this.dsKrnCncldFile.getColumn(0, "fileMgno")}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divAgrInfo.form.btnOrgtCncldFileDown.addEventHandler("onclick",this.div03_btnOrgtCncldFileDown_onclick,this);
            this.divAgrInfo.form.btnKrnCncldFileDown.addEventHandler("onclick",this.div03_btnKrnCncldFileDown_onclick,this);
            this.divCmmnBtn.form.Button_list.addEventHandler("onclick",this.Button_list_onclick,this);
        };
        this.loadIncludeScript("AgrStiplCmmInfoS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
