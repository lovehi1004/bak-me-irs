(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS02");
            this.set_titletext("협정약정관리 약정상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClNm\" type=\"STRING\" size=\"256\"/><Column id=\"newRvsnTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldNo\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgtCncldFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"krnCncldFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrgtCncldFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKrnCncldFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCncldMou", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"relCncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mouOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staDocList","0","20","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("약정 등록 이력");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divAgrInfo","0","293",null,"910","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staRegTypeNm","0","0","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("2");
            obj.set_text("신규/개정 유형");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCncldKrnNm","770","43","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("4");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCncldOrgtNm","0","43","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("5");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staMouPrs","770","0","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("6");
            obj.set_text("MOU 유무");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00","0","86",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staSgntYmd","0","86","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("8");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCncldNo","770","86","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("9");
            obj.set_text("조약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00","0","129",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00","0","129","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("11");
            obj.set_text("등록유형");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm00_00_00_00","770","129","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("12");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","7","172",null,"44","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00","0","172","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("14");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtNewRvsmTypeNm","160","7","600","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldKrnNm","927","50",null,"30","27",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldOrgtNm","160","47","600","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtRegTypeNm","160","136","600","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtSgntYmd","160","90","600","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtntlNm","158","180","1352","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldNo","927","90","612","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtEftvnYmd","927","135","612","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","655",null,"197","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","655","150","197",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("24");
            obj.set_text("방법론");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","157","662",null,"182","7",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"649\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/></Band><Band id=\"body\"><Cell text=\"bind:mhdlgOrgtNm\"/></Band></Format></Formats>");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("26");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Button("btnList00",null,"857","75","32","6",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("27");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldKrnNm00","930","7",null,"30","24",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtMou","1069","7","323","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staCalPdctCncld","770","172","150","44",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("30");
            obj.set_text("예상체결일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Edit("edtPdctDt","930","179","600","30",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","215",null,"131","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","215","150","131",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("33");
            obj.set_text("원문파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Div("divOrgtCncldFlmno","160","219","1090","120",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("34");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_02","0","345",null,"131","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Div("divKrnCncldFlmno","161","351","1089","120",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("36");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_02","0","345","150","131",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("37");
            obj.set_text("국문 파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_02_00","0","475",null,"180","0",null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_02_00","0","475","150","181",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("39");
            obj.set_text("기타 문서");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Div("divEtcDataFlmno","157","482","1095","164",null,null,null,null,null,null,this.divAgrInfo.form);
            obj.set_taborder("40");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divAgrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","253","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("약정 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopList",null,"253","71","30","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사업");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopReg",null,"253","71","30","104",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("방법론");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopPrivateReg",null,"253","71","30","btnTopReg:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("협의체");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","60",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"개정일자\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"개정회차\"/><Cell col=\"4\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:rvsnYmd\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:prcsUserNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:cncldDgr\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAgrInfo.form.divOrgtCncldFlmno
            obj = new Layout("default","",0,0,this.divAgrInfo.form.divOrgtCncldFlmno.form,function(p){});
            this.divAgrInfo.form.divOrgtCncldFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrInfo.form.divKrnCncldFlmno
            obj = new Layout("default","",0,0,this.divAgrInfo.form.divKrnCncldFlmno.form,function(p){});
            this.divAgrInfo.form.divKrnCncldFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrInfo.form.divEtcDataFlmno
            obj = new Layout("default","",0,0,this.divAgrInfo.form.divEtcDataFlmno.form,function(p){});
            this.divAgrInfo.form.divEtcDataFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrInfo.form
            obj = new Layout("default","",0,0,this.divAgrInfo.form,function(p){});
            this.divAgrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,920,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAgrInfo.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAgrInfo.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAgrInfo.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAgrInfo.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAgrInfo.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAgrInfo.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAgrInfo.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divAgrInfo.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divAgrInfo.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divAgrInfo.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divAgrInfo.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divAgrInfo.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divAgrInfo.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divAgrInfo.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divAgrInfo.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divAgrInfo.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divAgrInfo.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAgrInfo.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAgrInfo.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAgrInfo.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
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

            obj = new BindItem("item17","divAgrInfo.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divAgrInfo.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divAgrInfo.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divAgrInfo.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divAgrReg.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAgrReg.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAgrInfo.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAgrInfo.form.edtPdctDt","value","dsAgrInfo","pdctCncldDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("AgrStiplMngS02.xfdl", function() {
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
        	trace("[AprvAplyS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 START ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	// 값 초기화
        	this.dsOrgtCncldFile.clearData();
        	this.dsKrnCncldFile.clearData();
        	this.dsEtcDataFile.clearData();
        	this.dsOrgtCncldFile.insertRow(0);
        	this.dsKrnCncldFile.insertRow(0);
        	this.dsEtcDataFile.insertRow(0);
        	//원문 파일
        	var objParam2 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"orgtCncldFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"orgtCncldFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divAgrInfo.form.divOrgtCncldFlmno.form.fnInitRaonK(this, objParam2);


        	//국문파일
        	var objParam3 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"krnCncldFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"krnCncldFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divAgrInfo.form.divKrnCncldFlmno.form.fnInitRaonK(this, objParam3);

        	//기타 파일
        	var objParam4 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				    ,sMaxOneFileSize:"10MB"
        					,sMaxTotalFileSize:"100MB"
        					,sExtension:"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON,PDF"
        					,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        				   };
        	this.divAgrInfo.form.divEtcDataFlmno.form.fnInitRaonK(this, objParam4);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 END ■■■■■■■■■■■■■■■■■■■■■■■■ */

        	//버튼 컨트롤
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
        		return;
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
        		case "orgtCncldFlmno" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후,  UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsOrgtCncldFile.clearData();
        				var nRowCnt = this.dsOrgtCncldFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsOrgtCncldFile.clearData();
        				var nRowCnt = this.dsOrgtCncldFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsOrgtCncldFile.clearData();
        				var nRowCnt = this.dsOrgtCncldFile.copyData(objRtn.objDs);

        				trace("################### 프로그램-국문파일 등록용 Start ###################");
        				var krnCncldFlmno = this.dsAgrInfo.getColumn(0, "krnCncldFlmno");
        				trace(">>> krnCncldFlmno : " + krnCncldFlmno);
        				if(this.gfnIsNull(krnCncldFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("krnCncldFlmno", objRtn);
        				}else {
        					this.divAgrInfo.form.divKrnCncldFlmno.form.fnSearchFile(krnCncldFlmno);
        				}
        			}

        			break;
         		case "krnCncldFlmno" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후,  UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsKrnCncldFile.clearData();
        				var nRowCnt = this.dsKrnCncldFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsKrnCncldFile.clearData();
        				var nRowCnt = this.dsKrnCncldFile.copyData(objRtn.objDs);
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsKrnCncldFile.clearData();
        				var nRowCnt = this.dsKrnCncldFile.copyData(objRtn.objDs);

        				trace("################### 프로그램-기타파일 등록용 Start ###################");
        				var etcDataFlmno = this.dsAgrInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					var objRtn = {sDiv:"SEARCH"};
        					this.fnRaonKFileCallback("etcDataFlmno", objRtn);
        				}else {
        					this.divAgrInfo.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);
        				}
        			}

        			break;
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
        	trace("상세 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectStiplMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo ";
         	objArgs.outds     		= "dsDocList=dsDocList dsAgrInfo=dsAgrInfo dsMhdlgList=dsMhdlgList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectAgrMngList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        //파일서치
        this.fileSearch = function() {
        	trace("################### 원문파일 Start ###################");
        	var orgtCncldFlmno = this.dsAgrInfo.getColumn(0, "orgtCncldFlmno");
        	trace(">>> orgtCncldFlmno : " + orgtCncldFlmno);
        	if(this.gfnIsNull(orgtCncldFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("orgtCncldFlmno", objRtn);
        	}else {
        		this.divAgrInfo.form.divOrgtCncldFlmno.form.fnSearchFile(orgtCncldFlmno);
        	}
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
        	this.dsCurInfo.setColumn(0, "cncldMgno", objArgs.cncldMgno);
        	this.dsCurInfo.setColumn(0, "cncldDgr", objArgs.cncldDgr);

        	// 상세 호출
        	this.fnCallDtlInfo();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.
        //버튼 컨트롤
        this.fnRegBtnCtrl = function()
        {
        	if(this.fnAccessAuth(this.fvApp.User.roleIdMgno))
        	{
        		this.divAgrInfo.form.btnUpdate.set_visible(true);


        	}else
        	{
        		this.divAgrInfo.form.btnUpdate.set_visible(false);

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


        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail03.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg02.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg03.set_visible(false);
        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };
        this.btnTopList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(false);
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
            this.divAgrInfo.form.staUsrInfoL1.addEventHandler("onclick",this.divAgrInfo_staUsrInfoL1_onclick,this);
            this.divAgrInfo.form.staRegTypeNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staCncldKrnNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staCncldOrgtNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staMouPrs.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staSgntYmd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staCncldNo.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staBzentNm01_01_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staBzentNm00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.staBzentNm01_01_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrInfo.form.edtNewRvsmTypeNm.addEventHandler("onchanged",this.divUsrInfo_edtBzentNm_onchanged,this);
            this.divAgrInfo.form.edtRegTypeNm.addEventHandler("onchanged",this.edtRegTypeNm_onchanged,this);
            this.divAgrInfo.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divAgrInfo.form.btnList00.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divAgrInfo.form.edtCncldKrnNm00.addEventHandler("onchanged",this.divAgrInfo_edtCncldKrnNm00_onchanged,this);
            this.divAgrInfo.form.edtPdctDt.addEventHandler("onchanged",this.edtRegTypeNm_onchanged,this);
            this.divAgrInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divAgrInfo.form.sta08_00_00_00_00_02.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divAgrInfo.form.sta08_00_00_00_00_02_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.btnTopList.addEventHandler("onclick",this.btnTopList_onclick,this);
        };
        this.loadIncludeScript("AgrStiplMngS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
