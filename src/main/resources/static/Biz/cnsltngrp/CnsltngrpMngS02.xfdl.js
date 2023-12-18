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
            this.set_titletext("국제감축협의체관리 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"cncldYn\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cnsltngrpFlag\">cnsltngrpFlag</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnsltngrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpCmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"operRglCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMemberList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrnSn\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"gmbrKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"mailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"cmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCnsltngrpReg","10","60",null,"1030","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","154","7",null,"30","129",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00","0","43","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("4");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00","0","127",null,"44","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staCalEftvnDay","805","127","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("6");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnAgreeSearch","edtEngNm:3","7","88","30",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_enable("true");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Edit("edtKrnNm","154","47",null,"30","126",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Div("divCalEftvnDay","965","134","124","30",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("9");
            obj.set_text("divCalEftvnDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_01","0","85",null,"44","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_01","0","85","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("11");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Edit("edtNtnNm","154","92",null,"30","755",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staOrgNm","0","0","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("13");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta02","0","129","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("14");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Div("divCalSgntDay","154","136","124","30",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("15");
            obj.set_text("divCalEftvnDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00","0","233",null,"44","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00","0","233","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("17");
            obj.set_text("협의체명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","712",null,"223","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","712","150","223",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("19");
            obj.set_text("관련문서");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpNm","154","240",null,"30","846",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("20");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_01","0","277",null,"175","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_01","0","277","150","175",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("22");
            obj.set_text("구성원");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnDelMem",null,"289","154","30","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("23");
            obj.set_text("구성원 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Grid("grdMemList","157","328",null,"116","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsMemberList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"93\"/><Column size=\"145\"/><Column size=\"138\"/><Column size=\"107\"/><Column size=\"112\"/><Column size=\"117\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"국가\"/><Cell col=\"2\" text=\"구성원(영문)\"/><Cell col=\"3\" text=\"구성원(국문)\"/><Cell col=\"4\" text=\"소속기관\"/><Cell col=\"5\" text=\"이메일주소\"/><Cell col=\"6\" text=\"사무실전화번호\"/><Cell col=\"7\" text=\"구성일자\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:ntnCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsNtnCd\" combodatacol=\"ntnKornNm\" combocodecol=\"iataNtnCd\" combotype=\"caseifilter\"/><Cell col=\"2\" text=\"bind:gmbrOrgtNm\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:gmbrKrnNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:instNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:mailAddr\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:ofcTelno\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" text=\"bind:cmpsYmd\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" edittype=\"date\"/></Band></Format></Formats>");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnAddMem",null,"289","154","30","btnDelMem:3",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("25");
            obj.set_text("구성원 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00_00_00","805","233","150","44",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("26");
            obj.set_text("협의체구성일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Div("divCalCnsltngrpCmpsDay","965","239","124","30",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("27");
            obj.set_text("divCalCnsltngrpCmpsDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnCnsltngrpSearch","edtCnsltngrpNm:2","240",null,"30","758",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("28");
            obj.set_text("검색");
            obj.set_enable("false");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","452",null,"131","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","452","150","131",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("30");
            obj.set_text("협의내용\r\n\r\n회의결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new TextArea("taeCnsltnCn","156","459",null,"115","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("31");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnBackList",null,"943","83","32","0",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("33");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"943","70","32","btnBackList:3",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("32");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Div("divEtcDataFlmno","155","715","1185","195",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("34");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00_00","1","582",null,"131","-1",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00_00","1","582","150","131",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("36");
            obj.set_text("운영규정");
            obj.set_cssclass("sta_WF_Label");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new TextArea("taeOperRglCn","157","589",null,"115","-1",null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("37");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Grid("grd00","710","572","530","89",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsCurInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cnsltngrpMgno\"/><Cell col=\"1\" text=\"cncldMgno\"/><Cell col=\"2\" text=\"cncldDgr\"/><Cell col=\"3\" text=\"sts\"/><Cell col=\"4\" text=\"cncldYn\"/><Cell col=\"5\" text=\"cnsltngrpFlag\"/></Band><Band id=\"body\"><Cell text=\"bind:cnsltngrpMgno\"/><Cell col=\"1\" text=\"bind:cncldMgno\"/><Cell col=\"2\" text=\"bind:cncldDgr\"/><Cell col=\"3\" text=\"bind:sts\"/><Cell col=\"4\" text=\"bind:cncldYn\"/><Cell col=\"5\" text=\"bind:cnsltngrpFlag\"/></Band></Format></Formats>");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Grid("grd01","1245","578","308","88",null,null,null,null,null,null,this.divCnsltngrpReg.form);
            obj.set_taborder("39");
            obj.set_binddataset("dsAgrInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cncldMgno\"/><Cell col=\"1\" text=\"cncldDgr\"/><Cell col=\"2\" text=\"cncldOrgtNm\"/><Cell col=\"3\" text=\"cncldKrnNm\"/><Cell col=\"4\" text=\"sgntYmd\"/><Cell col=\"5\" text=\"eftvnYmd\"/><Cell col=\"6\" text=\"cncldYn\"/><Cell col=\"7\" text=\"ntnNm\"/><Cell col=\"8\" text=\"ntnCd\"/></Band><Band id=\"body\"><Cell text=\"bind:cncldMgno\"/><Cell col=\"1\" text=\"bind:cncldDgr\"/><Cell col=\"2\" text=\"bind:cncldOrgtNm\"/><Cell col=\"3\" text=\"bind:cncldKrnNm\"/><Cell col=\"4\" text=\"bind:sgntYmd\"/><Cell col=\"5\" text=\"bind:eftvnYmd\"/><Cell col=\"6\" text=\"bind:cncldYn\"/><Cell col=\"7\" text=\"bind:ntnNm\"/><Cell col=\"8\" text=\"bind:ntnCd\"/></Band></Format></Formats>");
            this.divCnsltngrpReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협정/약정/MOU 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","245","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("국제감축협의체 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCnsltngrpReg.form.divCalEftvnDay
            obj = new Layout("default","",0,0,this.divCnsltngrpReg.form.divCalEftvnDay.form,function(p){});
            this.divCnsltngrpReg.form.divCalEftvnDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpReg.form.divCalSgntDay
            obj = new Layout("default","",0,0,this.divCnsltngrpReg.form.divCalSgntDay.form,function(p){});
            this.divCnsltngrpReg.form.divCalSgntDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay
            obj = new Layout("default","",0,0,this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.form,function(p){});
            this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpReg.form.divEtcDataFlmno
            obj = new Layout("default","",0,0,this.divCnsltngrpReg.form.divEtcDataFlmno.form,function(p){});
            this.divCnsltngrpReg.form.divEtcDataFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCnsltngrpReg.form
            obj = new Layout("default","",0,0,this.divCnsltngrpReg.form,function(p){});
            this.divCnsltngrpReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCnsltngrpReg.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCnsltngrpReg.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCnsltngrpReg.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCnsltngrpReg.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCnsltngrpReg.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCnsltngrpReg.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCnsltngrpReg.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divCnsltngrpReg.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divCnsltngrpReg.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divCnsltngrpReg.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divCnsltngrpReg.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divCnsltngrpReg.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divCnsltngrpReg.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divCnsltngrpReg.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divCnsltngrpReg.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divCnsltngrpReg.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divCnsltngrpReg.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCnsltngrpReg.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divCnsltngrpReg.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divCnsltngrpReg.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
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

            obj = new BindItem("item17","divCnsltngrpReg.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divCnsltngrpReg.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divCnsltngrpReg.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divCnsltngrpReg.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divCnsltngrpReg.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divCnsltngrpReg.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divCnsltngrpReg.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divCnsltngrpReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divCnsltngrpReg.form.rdoNewRvsmBtn","value","dsAgrInfo","newRvsnTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divCnsltngrpReg.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divCnsltngrpReg.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divCnsltngrpReg.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divCnsltngrpReg.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divCnsltngrpReg.form.edt00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divCnsltngrpReg.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divCnsltngrpReg.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divCnsltngrpReg.form.taeCnsltnCn","value","dsCnsltngrpInfo","cnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divCnsltngrpReg.form.edtEngNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divCnsltngrpReg.form.taeOperRglCn","value","dsCnsltngrpInfo","operRglCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("CnsltngrpMngS02.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : cnsltngrpMngS02 Form
        * FILE NAME     : cnsltngrpMngS02.xfdl
        * DESCRIPTION   : 국제감축협의관리 (등록)
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
        	trace("[cnsltngrpMngS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	//서명일자 달력 초기화 호출
        	var objParam = { objDs:this.dsAgrInfo							// 바인딩 데이터셋
        					,sBindCol:"sgntYmd"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"sgntYmd"									// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCnsltngrpReg.form.divCalSgntDay.form.fnInitCommonCalendar(this, objParam);
        	//발효일자 달력 초기화 호출
        	var objParam2 = { objDs:this.dsAgrInfo									// 바인딩 데이터셋
        					,sBindCol:"eftvnYmd"										// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"eftvnYmd"									// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCnsltngrpReg.form.divCalEftvnDay.form.fnInitCommonCalendar(this, objParam2);
        	//협의체구성일자 달력 초기화
        	var objParam3 = { objDs:this.dsCnsltngrpInfo									// 바인딩 데이터셋
        					,sBindCol:"cnsltngrpCmpsYmd"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"cnsltngrpCmpsYmd"								// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.form.fnInitCommonCalendar(this, objParam3);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 START ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	//기타 파일
        	var objParam4 = { objDs:this.dsCnsltngrpInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divCnsltngrpReg.form.divEtcDataFlmno.form.fnInitRaonK(this, objParam4);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 END ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	this.divCnsltngrpReg.form.rdoRegGbn.set_value("NEW");
        	//유효성 검사
        	this.divCnsltngrpReg.form.edtCnsltngrpNm.validate = "title:협의체명 입력,required";
        	this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.form.calYmd.validate = "title:협의체구성일자 입력 ,required,date";
        	this.divCnsltngrpReg.form.edtEngNm.validate = "title:체결정보 입력,required";

        	this.divCnsltngrpReg.form.grdMemList.validate = " col:ntnCd,title:국가,required"+ "|col:gmbrOrgtNm,title:구성원(영문),required"
        													+ "|col:gmbrKrnNm,title:구성원(국문),required"+ "|col:instNm,title:소속기관,required"
        													+ "|col:mailAddr,title:이메일주소,required,isemail"+ "|col:ofcTelno,title:사무실전화번호,required"
        													+ "|col:cmpsYmd,title:구성일자,required,date";

        	this.divCnsltngrpReg.form.taeCnsltnCn.validate = "title:협의내용 입력,required";

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
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "cnsltngrpSave" :
        			trace("444444444444444444444444444");
        			this.fnFormTrans();
        			break;
        		case "agrRvsn" :
        			this.fnFormTrans();
        			break;
        		case "selectMod":	//수정일때
        			var etcDataFlmno = this.dsCnsltngrpInfo.getColumn(0, "etcDataFlmno");
        			// 파일 정보 조회
        			this.fileSearch();
        			break;
        		default:
        			break;
        	}
        };
        // 캘린더 콜백
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "sgntYmd" :		// 서명일자 달력
        			// 후처리 코드

        			break;
        		case "eftvnYmd" :		// 발효일자 달력
        			// 후처리 코드
        			break;
        		case "cnsltngrpCmpsYmd":
        			break;
        		default:
        			break;
        	}
        };
        //팝업 콜백
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        	var cncldMgno = {};
        	var cncldDgr = {};
        	var cncldOrgtNm = {};
        	var cncldKrnNm = {};
        	switch (sPopupId)
        	{
        		// 협정약정 검색 팝업(프로그램)
        		case "popModalAgrstipPgmP01" :
        			trace("cncldMgno > " + objRtnValue["cncldMgno"]);
        			trace("cncldDgr > " + objRtnValue["cncldDgr"]);
        			trace("cncldOrgtNm > " + objRtnValue["cncldOrgtNm"]);
        			trace("cncldKrnNm > " + objRtnValue["cncldKrnNm"]);
        			trace("ntnNm > " + objRtnValue["ntnNm"]);
        			trace("iataNtnCd > " + objRtnValue["ntnCd"]);
        			trace("sgntYmd > " + objRtnValue["sgntYmd"]);
        			trace("eftvnYmd > " + objRtnValue["eftvnYmd"]);
        			trace("cncldYn > " + objRtnValue["cncldYn"]);
        			trace("cnsltngrpMgno > " + objRtnValue["cnsltngrpMgno"]);
        			trace("cnsltngrpNm > " + objRtnValue["cnsltngrpMgno"]);
        			trace("cnsltngrpCmpsYmd > " + objRtnValue["cnsltngrpMgno"]);

        			if( objRtnValue != undefined && objRtnValue != ""){
        				this.dsAgrInfo.clearData();
        				var rRow = this.dsAgrInfo.addRow();

        				this.dsCurInfo.setColumn(0, "cnsltngrpMgno", objRtnValue["cnsltngrpMgno"]);
        				this.dsCurInfo.setColumn(0, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsCurInfo.setColumn(0, "cncldDgr", objRtnValue["cncldDgr"]);
        				this.dsCurInfo.setColumn(0, "sts", objRtnValue["sts"]);

        				this.dsAgrInfo.setColumn(rRow, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsAgrInfo.setColumn(rRow, "cncldDgr", objRtnValue["cncldDgr"]);
        				this.dsAgrInfo.setColumn(rRow, "cncldOrgtNm", objRtnValue["cncldOrgtNm"]);
        				this.dsAgrInfo.setColumn(rRow, "cncldKrnNm", objRtnValue["cncldKrnNm"]);
        				this.dsAgrInfo.setColumn(rRow, "sgntYmd", objRtnValue["sgntYmd"]);
        				this.dsAgrInfo.setColumn(rRow, "ntnNm", objRtnValue["ntnNm"]);
        				this.dsAgrInfo.setColumn(rRow, "ntnCd", objRtnValue["ntnCd"]);
        				this.dsAgrInfo.setColumn(rRow, "cncldYn", objRtnValue["cncldYn"]);
        				if(objRtnValue["eftvnYmd"] == "-"){
        					this.divCnsltngrpReg.form.staCalEftvnDay.set_visible("false");
        					this.divCnsltngrpReg.form.divCalEftvnDay.set_visible("false");
        					this.dsAgrInfo.setColumn(rRow, "eftvnYmd", "NULL");
        				}else{
        					this.dsAgrInfo.setColumn(rRow, "eftvnYmd", objRtnValue["eftvnYmd"]);
        				}

        			}
        			break;
        		case "popModalCnsltngrpPgmP01" : 							// 국제감축협의체 검색 팝업(프로그램)
        			trace("국제감축협의체 검색 팝업 선택함========");
        			trace("cnsltngrpMgno > " + objRtnValue["cnsltngrpMgno"]);
        			trace("cnsltngrpNm > " + objRtnValue["cnsltngrpNm"]);
        			trace("cnsltngrpCmpsYmd > " + objRtnValue["cnsltngrpCmpsYmd"]);

        			if( objRtnValue != undefined && objRtnValue != ""){
        				var cnlRow = this.dsCnsltngrpInfo.insertRow(0)
        				this.dsCurInfo.setColumn(0, "cnsltngrpMgno", objRtnValue["cnsltngrpMgno"]);
        				this.dsCurInfo.setColumn(0, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsCurInfo.setColumn(0, "cncldDgr", objRtnValue["cncldDgr"]);

        				this.dsCnsltngrpInfo.setColumn(cnlRow, "cnsltngrpNm", objRtnValue["cnsltngrpNm"]);
        				this.dsCnsltngrpInfo.setColumn(cnlRow, "cnsltngrpCmpsYmd", objRtnValue["cnsltngrpCmpsYmd"]);

        				this.fnCallMemList();
        			}

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
        // ***********************************************************************************/

        this.SaveMhdlgAply = function()
        {
        	var ModFlag = this.dsCurInfo.getColumn(0, "sts"); //수정 체크
        	// 멀티의 경우 최종 파일정보를 복사하고나서, 서버로 전송한다.


        	if( ModFlag == "MOD" ){															//협의체 수정
        		trace("협의체 수정 호출...");

        		var callUrl = "/adm/cnsltngrp/cnsltngrpMng/insertCnsltngrpBscMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "cnsltngrpSave";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsCnsltngrpInfo=dsCnsltngrpInfo dsMemberList=dsMemberList dsAgrInfo=dsAgrInfo dsCurInfo=dsCurInfo dsEtcDataFile=dsEtcDataFile";
        		objArgs.outds     		= "dsAgrInfo=dsAgrInfo dsMemberList=dsMemberList dsCnsltngrpInfo=dsCnsltngrpInfo";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);

        	}else { 																			//협의체 등록
        		trace("협의체 신규 등록 호출...");

        		var callUrl = "/adm/cnsltngrp/cnsltngrpMng/insertCnsltngrpBscMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "cnsltngrpSave";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsCnsltngrpInfo=dsCnsltngrpInfo dsMemberList=dsMemberList dsAgrInfo=dsAgrInfo:U dsCurInfo=dsCurInfo dsEtcDataFile=dsEtcDataFile";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        };
        //협의체 구성원 호출
        this.fnCallMemList = function()
        {
        	trace("기존 협의체 멤버 구성원 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "callMemberList";
         	objArgs.url 			= "/adm/cnsltngrp/cnsltngrpMng/selectCnsltngrpMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsCnsltngrpInfo=dsCnsltngrpInfo dsAgrInfo=dsAgrInfo";
         	objArgs.outds     		= "dsMemberList=dsMemberList ";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        }
        this.fnCallModCnsltngrp = function()
        {
        	trace("협의체 수정을 위한 정보 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectMod";
         	objArgs.url 			= "/adm/cnsltngrp/cnsltngrpMng/selectCnsltngrpMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo = dsCurInfo";
         	objArgs.outds     		= "dsCnsltngrpInfo=dsCnsltngrpInfo dsMemberList=dsMemberList dsAgrInfo=dsAgrInfo dsCurInfo=dsCurInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 수정화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {


        	trace("[cnsltngrMngS02]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsEtcDataFile.clearData();
        	this.dsCnsltngrpInfo.addRow();
        	this.dsCurInfo.setColumn(0, "cnsltngrpMgno", objArgs.cnsltngrpMgno);
        	this.dsCurInfo.setColumn(0, "cncldMgno", objArgs.cncldMgno);
        	this.dsCurInfo.setColumn(0, "cncldDgr", objArgs.cncldDgr);
        	this.dsCurInfo.setColumn(0, "sts", objArgs.sts);


        	//협의체 수정 flag
        	if(objArgs.sts == "MOD")
        	{
        		this.fnCallModCnsltngrp(objArgs);
        	}
        	//기타파일
        	var etcDataFlmno = this.dsCnsltngrpInfo.getColumn(0, "etcDataFlmno");
        	this.dsEtcDataFile.clearData();
        	this.divCnsltngrpReg.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);


        };
        this.gridVail = function() { //유효성 검사
        	var bSucc = this.gfnValidation(this.divCnsltngrpReg.form.grdMemList, false, "A");
        }


        //파일서치
        this.fileSearch = function() {
        	trace("################### 기타파일 Start ###################");
        	var etcDataFlmno = this.dsCnsltngrpInfo.getColumn(0, "etcDataFlmno");
        	trace(">>> etcDataFlmno : " + etcDataFlmno);
        	if(this.gfnIsNull(etcDataFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		this.fnRaonKFileCallback("etcDataFlmno", objRtn);
        	}else {
        		this.divCnsltngrpReg.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);
        	}
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        /**
         * @description 목록 클릭시 목록화면으로 전환
        */

        //구성원 추가 버튼 클릭
        this.divCnsltngrpReg_btnAddMem_onclick = function(obj,e)
        {

        	var gmbrOrgtNm = "";
        	var gmbrKrnNm = "";
        	var instNm = "";
        	var mailAddr = "";
        	var ofcTelno = "";
        	var cmpsYmd = "";

        	var rRow = this.dsMemberList.addRow();
        	this.dsMemberList.setColumn(rRow,"chk",'');
        	this.dsMemberList.setColumn(rRow,"gmbrOrgtNm",gmbrOrgtNm);
        	this.dsMemberList.setColumn(rRow,"gmbrKrnNm",gmbrKrnNm);
        	this.dsMemberList.setColumn(rRow,"instNm",instNm);
        	this.dsMemberList.setColumn(rRow,"mailAddr",mailAddr);
        	this.dsMemberList.setColumn(rRow,"ofcTelno",ofcTelno);
        	this.dsMemberList.setColumn(rRow,"cmpsYmd",cmpsYmd);

        	//this.divAgrReg.form.cboNtn.set_index(0);
        };

        //체결국가 삭제 버튼 클릭
        this.divAgrReg_btnDelNtn_onclick = function(obj,e)
        {

        	var rRows = this.dsNtnList.extractRows("chk=='Y'");
        	trace("arrRows:" + rRows);
        	trace("arrRows:" + rRows.length);
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsNtnList.deleteMultiRows(this.dsNtnList.extractRows("chk=='Y'"));
        	}
        };

        //협정 검색 버튼 팝업 생성

        this.divCnsltngrpReg_btnAgreeSearch_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalAgrstipPgmP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {cnsltngrpFlag:this.dsCurInfo.getColumn(0,'cnsltngrpFlag')};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        //협의체 검색 버튼 팝업 생성
        this.divCnsltngrpReg_btnCnsltngrpSearch_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalCnsltngrpPgmP01";
        	var sMnuId 		= "MN02040000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {ntnCd:this.dsAgrInfo.getColumn(0,'ntnCd')};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협의체 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };
        // 저장 버튼 이벤트
        this.divRComBtn_btnReg_onclick = function(obj,e)
        {
        	var bSucc = this.gfnValidation(this.divCnsltngrpReg);



        	var cnt = this.divCnsltngrpReg.form.grdMemList.rowcount;
        	if ( bSucc ==  true ){
        		if( cnt < 1) {
        			this.gfnShowMessage(this, ["Alert","협의체 구성원을 추가하세요."], "", function(svcid, variant) {
        				this.divCnsltngrpReg.form.grdMemList.setFocus();
        				});
        		return false;
        		}else{
        			trace("1111111111111111111111111111111");
        			var bSucc = this.gfnValidation(this.divCnsltngrpReg.form.grdMemList);
        			trace("22222222222222222222222222");
        			this.SaveMhdlgAply();
        			trace("333333333333333333333333333333333333333");
        		}
        	};
        };


        this.divCnsltngrpReg_btnDelMem_onclick = function(obj,e)
        {
        	var rRows = this.dsMemberList.extractRows("chk=='Y'");
        	trace("arrRows:" + rRows);
        	trace("arrRows:" + rRows.length);
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsMemberList.deleteMultiRows(this.dsMemberList.extractRows("chk=='Y'"));
        	}
        };

        this.fnFormTrans = function()
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divReg01.set_visible(false);

        	var objArgs ={};
        	objArgs.cnsltngrpMgno = this.dsCnsltngrpInfo.getColumn(0,"cnsltngrpMgno");
        	objArgs.cncldMgno = this.dsCnsltngrpInfo.getColumn(0,"cncldMgno");
        	objArgs.cncldDgr = this.dsCnsltngrpInfo.getColumn(0,"cncldDgr");
        	trace("+++++++cnsltngrpMgno++++++++++"+objArgs.cnsltngrpMgno);
        	trace("+++++++cncldMgno++++++++++"+objArgs.cncldMgno);
        	trace("+++++++cncldDgr++++++++++"+objArgs.cncldDgr);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.divDetail01.form.fnChangeDiv(objArgs);
        }

        // 구성원 그리드에서 날짜 초기화
        this.divCnsltngrpReg_grdNtnList_onexpanddown = function(obj,e)
        {

        	var sBindColId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if ( sBindColId == "cmpsYmd")
        	{
        		this.gfnGridDayPop(obj, e);
        	}
        };
        //등록 구분 선택에 따른 활성화/비활성화 함수
        this.divCnsltngrpReg_rdoRegGbn_onitemchanged = function(obj,e)
        {
        	var flag = e.postvalue;
        	if(flag == "OLD"){
        		this.divCnsltngrpReg.form.edtCnsltngrpNm.set_enable(false);
        		this.divCnsltngrpReg.form.btnCnsltngrpSearch.set_enable(true);
        		this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.set_enable(false);
        	}else{
        		this.divCnsltngrpReg.form.edtCnsltngrpNm.set_enable(true);
        		this.divCnsltngrpReg.form.btnCnsltngrpSearch.set_enable(false);
        		this.divCnsltngrpReg.form.divCalCnsltngrpCmpsDay.set_enable(true);

        	}
        };
        //목록 버튼
        this.divComBtn00_btnBackList_onclick = function(obj,e)
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
            this.divCnsltngrpReg.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divCnsltngrpReg.form.staBzentNm01_01_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpReg.form.staCalEftvnDay.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpReg.form.btnAgreeSearch.addEventHandler("onclick",this.divCnsltngrpReg_btnAgreeSearch_onclick,this);
            this.divCnsltngrpReg.form.staBzentNm01_01_00_00_00_00_01.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpReg.form.staBzentNm01_01_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpReg.form.sta08_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divCnsltngrpReg.form.sta08_00_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divCnsltngrpReg.form.btnDelMem.addEventHandler("onclick",this.divCnsltngrpReg_btnDelMem_onclick,this);
            this.divCnsltngrpReg.form.grdMemList.addEventHandler("onexpanddown",this.divCnsltngrpReg_grdNtnList_onexpanddown,this);
            this.divCnsltngrpReg.form.btnAddMem.addEventHandler("onclick",this.divCnsltngrpReg_btnAddMem_onclick,this);
            this.divCnsltngrpReg.form.staBzentNm01_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divCnsltngrpReg.form.btnCnsltngrpSearch.addEventHandler("onclick",this.divCnsltngrpReg_btnCnsltngrpSearch_onclick,this);
            this.divCnsltngrpReg.form.sta08_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divCnsltngrpReg.form.btnBackList.addEventHandler("onclick",this.divComBtn00_btnBackList_onclick,this);
            this.divCnsltngrpReg.form.btnReg.addEventHandler("onclick",this.divRComBtn_btnReg_onclick,this);
            this.divCnsltngrpReg.form.sta08_00_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.staUsrInfo00.addEventHandler("onclick",this.staUsrInfo_onclick,this);
        };
        this.loadIncludeScript("CnsltngrpMngS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
