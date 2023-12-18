(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS03");
            this.set_titletext("국제감축협의체관리 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,1130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMemberList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrnSn\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"mailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"cmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnsltngrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpCmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"operRglCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staDocList","0","20","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("국제감축협의체 등록 이력");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divCnsltngrpDetail","0","293",null,"1110","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Button("btnBackList",null,"972","75","32","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00","0","0","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("3");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00","0","43","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("5");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00","0","127",null,"44","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00","0","127","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("7");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00_00","805","127","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("8");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_01","0","85",null,"44","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_01","0","85","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("10");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00","0","231",null,"44","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00","0","231","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("12");
            obj.set_text("협의체명");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_01","0","275",null,"175","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_01","1","275","150","175",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("14");
            obj.set_text("구성원");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Grid("grdNtnList","157","285",null,"157","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsMemberList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"145\"/><Column size=\"138\"/><Column size=\"107\"/><Column size=\"112\"/><Column size=\"117\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"국가\"/><Cell col=\"1\" text=\"구성원(영문)\"/><Cell col=\"2\" text=\"구성원(국문)\"/><Cell col=\"3\" text=\"소속기관\"/><Cell col=\"4\" text=\"이메일주소\"/><Cell col=\"5\" text=\"사무실전화번호\"/><Cell col=\"6\" text=\"구성일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ntnNm\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsNtnCd\" combodatacol=\"ntnKornNm\" combocodecol=\"iataNtnCd\"/><Cell col=\"1\" text=\"bind:gmbrOrgtNm\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:gmbrKrnNm\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:instNm\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:mailAddr\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:ofcTelno\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:cmpsYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"none\"/></Band></Format></Formats>");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00_00_00","805","231","150","44",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("16");
            obj.set_text("협의체구성일자");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","191","360","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("17");
            obj.set_text("국제감축협의체 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"972","83","32","btnBackList:3",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("18");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","446",null,"154","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staCnsltnCn","1","446","150","154",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("20");
            obj.set_text("협의내용\r\n\r\n회의결과");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtCncldOrgtNm","156","6","1190","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtNm00","156","50",null,"30","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtNtnNm","156","90","1190","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtSgntYmd","156","135","643","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtEftvnYmd","959","135","570","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpNm","156","237","643","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpCmpsYmd","959","239","566","30",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("edtCnsltnCn","160","456","1389","129",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00_00","0","599",null,"131","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00_00","1","599","150","131",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("30");
            obj.set_text("운영규정");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Edit("taeOperRglCn","160","610","1389","114",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","sta07_00_00_00_00_00:-1",null,"223","0",null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","1","729","150","223",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("33");
            obj.set_text("관련문서");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Div("divEtcDataFlmno","155","744","1185","195",null,null,null,null,null,null,this.divCnsltngrpDetail.form);
            obj.set_taborder("34");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divCnsltngrpDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","253","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("협정/약정/MOU 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDocList","243","20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","1130",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","60",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"수정일자\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:rvsnYmd\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:prcsUserNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopList",null,"253","71","30","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopReg",null,"253","71","30","104",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("방법론");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopPrivateReg",null,"253","71","30","178",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("협의체");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCnsltngrpDetail.form.divEtcDataFlmno
            obj = new Layout("default","",0,0,this.divCnsltngrpDetail.form.divEtcDataFlmno.form,function(p){});
            this.divCnsltngrpDetail.form.divEtcDataFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpDetail.form
            obj = new Layout("default","",0,0,this.divCnsltngrpDetail.form,function(p){});
            this.divCnsltngrpDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,1130,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCnsltngrpDetail.form.edtNewRvsmTypeNm","value","dsMouInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCnsltngrpDetail.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCnsltngrpDetail.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCnsltngrpDetail.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCnsltngrpDetail.form.edtCncldKrnNm","value","dsMouInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCnsltngrpDetail.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCnsltngrpDetail.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divCnsltngrpDetail.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divCnsltngrpDetail.form.edtCncldKrnNm00","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divCnsltngrpDetail.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divCnsltngrpDetail.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divCnsltngrpDetail.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divCnsltngrpDetail.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divCnsltngrpDetail.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divCnsltngrpDetail.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divCnsltngrpDetail.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divCnsltngrpDetail.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCnsltngrpDetail.form.edtRegTypeNm","value","dsMouInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divCnsltngrpDetail.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divCnsltngrpDetail.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBzentNm03_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divCnsltngrpDetail.form.edtntlNm","value","dsMouInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divCnsltngrpDetail.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divCnsltngrpDetail.form.edtCncldNo","value","dsMouInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divCnsltngrpDetail.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divCnsltngrpReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divCnsltngrpDetail.form.edtEngNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divCnsltngrpDetail.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divCnsltngrpDetail.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divCnsltngrpDetail.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divCnsltngrpDetail.form.edtNm00","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divCnsltngrpDetail.form.edtCnsltngrpCmpsYmd","value","dsCnsltngrpInfo","cnsltngrpCmpsYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divCnsltngrpDetail.form.mse00","value","dsCnsltngrpInfo","cnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divCnsltngrpDetail.form.edtCnsltnCn","value","dsCnsltngrpInfo","cnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divCnsltngrpDetail.form.taeOperRglCn","value","dsCnsltngrpInfo","operRglCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("CnsltngrpMngS01.xfdl", function() {
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
        	trace("[AprvAplyS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        		/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 START ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	//기타 파일
        	var objParam4 = { objDs:this.dsCnsltngrpInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };
        	this.divCnsltngrpDetail.form.divEtcDataFlmno.form.fnInitRaonK(this, objParam4);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 END ■■■■■■■■■■■■■■■■■■■■■■■■ */

        	//권한 버튼 컨트롤
        	this.fnRegBtnCtrl();
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgAlert01" :
        			// 후처리 코드
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
        	}

        	switch (sSvcId)
        	{
        		case "dtlInfo" :
        			// 후처리 코드
        			this.fileSearch();
        			break;
        		default:
        			break;
        	}
        };
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "etcDataFlmno" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
        			if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsEtcDataFile.clearData();
        				var nRowCnt = this.dsEtcDataFile.copyData(objRtn.objDs);
        			}
        			break;
        		default:
        			break;
        	}
        }
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallDtlInfo = function()
        {
        	trace("국제감축협의체 상세 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/cnsltngrp/cnsltngrpMng/selectCnsltngrpMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo ";
         	objArgs.outds     		= "dsCnsltngrpInfo=dsCnsltngrpInfo dsMemberList=dsMemberList dsDocList=dsDocList dsAgrInfo=dsAgrInfo dsEtcDataFile=dsEtcDataFile";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 상세화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[AprvAplyS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsCurInfo.setColumn(0, "cnsltngrpMgno", objArgs.cnsltngrpMgno);
        	this.dsCurInfo.setColumn(0, "cncldMgno", objArgs.cncldMgno);
        	this.dsCurInfo.setColumn(0, "cncldDgr", objArgs.cncldDgr);
        	// 상세 호출
        	this.fnCallDtlInfo();
        	//기타파일
        	var etcDataFlmno = this.dsCnsltngrpInfo.getColumn(0, "etcDataFlmno");
        	this.dsEtcDataFile.clearData();
        	this.divCnsltngrpDetail.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);
        };

        //파일서치
        this.fileSearch = function() {
        	trace("################### 기타파일 Start ###################");
        	var etcDataFlmno = this.dsCnsltngrpInfo.getColumn(0, "etcDataFlmno");
        	trace(">>> etcDataFlmno : " + etcDataFlmno);
        	if(this.gfnIsNull(etcDataFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("etcDataFlmno", objRtn);
        	}else {
        		this.divCnsltngrpDetail.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);
        	}
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        /**
         * @description 목록 클릭시 목록화면으로 전환
        */

        //수정 버튼 이벤트
        this.divCnsltngrpDetail_btnUpdate_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg01.set_visible(true);

        	var objArgs = {};
        	objArgs.cnsltngrpMgno 	= this.dsCurInfo.getColumn(0, "cnsltngrpMgno");
        	objArgs.cncldMgno 		= this.dsCurInfo.getColumn(0, "cncldMgno");
        	objArgs.cncldDgr 		= this.dsCurInfo.getColumn(0, "cncldDgr");
        	objArgs.sts				= "MOD";

        	trace("cnsltngrpMgno======"+objArgs.cnsltngrpMgno);
        	trace("cncldMgno======"+objArgs.cncldMgno);
        	trace("cncldDgr====="+objArgs.cncldDgr);
        	this.getOwnerFrame().form.divWork.form.divReg01.form.fnChangeDiv(objArgs);

        };
        //버튼 컨트롤
        this.fnRegBtnCtrl = function()
        {
        	if(this.fnAccessAuth(this.fvApp.User.roleIdMgno))
        	{
        		this.divCnsltngrpDetail.form.btnUpdate.set_visible(true);

        	}else
        	{
        		this.divCnsltngrpDetail.form.btnUpdate.set_visible(false);
        	}
        }

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
        //목록 버튼
        this.divCnsltngrpDetail_btnBackList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg01.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staDocList.addEventHandler("onclick",this.staDocList_onclick,this);
            this.divCnsltngrpDetail.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divCnsltngrpDetail.form.btnBackList.addEventHandler("onclick",this.divCnsltngrpDetail_btnBackList_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00_00_01.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.sta08_00_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divCnsltngrpDetail.form.grdNtnList.addEventHandler("onexpanddown",this.divCnsltngrpReg_grdNtnList_onexpanddown,this);
            this.divCnsltngrpDetail.form.staBzentNm01_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpDetail.form.staUsrInfo00.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.divCnsltngrpDetail.form.btnUpdate.addEventHandler("onclick",this.divCnsltngrpDetail_btnUpdate_onclick,this);
            this.divCnsltngrpDetail.form.staCnsltnCn.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divCnsltngrpDetail.form.edtCncldOrgtNm.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.edtNm00.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.edtNtnNm.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.edtSgntYmd.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.edtEftvnYmd.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.edtCnsltngrpCmpsYmd.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divCnsltngrpDetail.form.sta08_00_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divCnsltngrpDetail.form.sta08_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.btnTopList.addEventHandler("onclick",this.btnTopList_onclick,this);
        };
        this.loadIncludeScript("CnsltngrpMngS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
