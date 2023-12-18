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
            this.set_titletext("협정약정관리 협정약정등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClNm\" type=\"STRING\" size=\"256\"/><Column id=\"newRvsnTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldNo\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"newRvsnTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"pdctCncldDt\" type=\"STRING\" size=\"256\"/><Column id=\"mouOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgtCncldFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"krnCncldFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsMouCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divAgrReg","0","60",null,"1010","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staRegTypeNm","0","0","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("2");
            obj.set_text("신규/개정 유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","30",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staCncldKrnNm","770","43","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("4");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staCncldOrgtNm","0","43","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("5");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staMouPrs","770","0","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("6");
            obj.set_text("MOU 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00","0","86",null,"44","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staSgntYmd","0","86","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("8");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staCncldNo","770","86","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("9");
            obj.set_text("조약번호");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00","0","129",null,"44","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00","0","129","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("11");
            obj.set_text("등록유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("stadivCalEftvnDay","770","129","150","44",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("12");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","347",null,"131","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","346","150","131",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("14");
            obj.set_text("원문파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("15");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Edit("edtEngNm","154","50","600","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("16");
            obj.set_inputtype("english,dot,comma,alpha,number,digit,numberandenglish,symbol");
            obj.set_displaynulltext("원문은 영문으로만 입력.");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Edit("edtKrnNm","930","50",null,"30","30",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("17");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Edit("edtEngNm00_00","930","93",null,"30","30",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("18");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divCalsgntDay","154","93","124","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("19");
            obj.set_text("divCalsgntDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divCalEftvnDay","930","137","124","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("20");
            obj.set_text("divCalEftvnDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_01","0","173",null,"175","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_01","0","173","150","175",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("22");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Combo("cboNtn","157","186","227","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsNtnCd");
            obj.set_codecolumn("iataNtnCd");
            obj.set_datacolumn("ntnKornNm");
            obj.set_type("caseifilter");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("-1");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnDelNtn",null,"186","110","30","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("24");
            obj.set_text("체결국가 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Grid("grdNtnList","157","224",null,"116","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsNtnList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"250\"/><Column size=\"83\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"체결국가명\"/><Cell col=\"2\" text=\"국가코드\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:ntnKornNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ntnCd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnAddNtn",null,"186","110","30","btnDelNtn:10",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("26");
            obj.set_text("체결국가 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","787",null,"175","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","787","150","175",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("28");
            obj.set_text("방법론 ");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnDelMhdlg",null,"800","98","30","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("29");
            obj.set_text("방법론 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Grid("grdMhdlgList","157","838",null,"116","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"280\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell controlautosizingtype=\"none\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"방법론 원문명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:chk\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"1\" text=\"bind:mhdlgOrgtNm\"/></Band></Format></Formats>");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgNm","161","797","559","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnMhdlgSearch","729","798","101","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("32");
            obj.set_text("방법론 검색");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Radio("rdoNewRvsmBtn","154","-10","150","63",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divAgrReg_form_rdoNewRvsmBtn_innerdataset = new nexacro.NormalDataset("divAgrReg_form_rdoNewRvsmBtn_innerdataset", obj);
            divAgrReg_form_rdoNewRvsmBtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NRT0001</Col><Col id=\"datacolumn\">신규</Col></Row><Row><Col id=\"codecolumn\">NRT0002</Col><Col id=\"datacolumn\">개정</Col></Row></Rows>");
            obj.set_innerdataset(divAgrReg_form_rdoNewRvsmBtn_innerdataset);
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnAgreeSearch","320","7","88","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("34");
            obj.set_text("검색");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Radio("rdoMouBtn","930","-4","150","52",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divAgrReg_form_rdoMouBtn_innerdataset = new nexacro.NormalDataset("divAgrReg_form_rdoMouBtn_innerdataset", obj);
            divAgrReg_form_rdoMouBtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">무</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row></Rows>");
            obj.set_innerdataset(divAgrReg_form_rdoMouBtn_innerdataset);
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Edit("edtMou","1064","7",null,"30","126",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnMouYnSearch","edtMou:3","7",null,"30","30",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("36");
            obj.set_text("검색");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Radio("rdoRegTypeBtn","154","130","250","42",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divAgrReg_form_rdoRegTypeBtn_innerdataset = new nexacro.NormalDataset("divAgrReg_form_rdoRegTypeBtn_innerdataset", obj);
            divAgrReg_form_rdoRegTypeBtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">RTC0001</Col><Col id=\"datacolumn\">발효</Col></Row><Row><Col id=\"codecolumn\">RTC0002</Col><Col id=\"datacolumn\">미발효</Col></Row><Row><Col id=\"codecolumn\">RTC0003</Col><Col id=\"datacolumn\">체결중</Col></Row></Rows>");
            obj.set_innerdataset(divAgrReg_form_rdoRegTypeBtn_innerdataset);
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divCalPdctCncld","930","137","104","30",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("39");
            obj.set_text("divCalPdctCncld");
            obj.set_url("Frame_Common::comCalMonth.xfdl");
            obj.set_visible("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staCalPdctCncld","770","129",null,"44","646",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("40");
            obj.set_text("예상체결일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_02","0","477",null,"131","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_02","0","476","150","131",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("42");
            obj.set_text("국문 파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_02_00","0","607",null,"180","0",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_02_00","0","606","150","181",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("44");
            obj.set_text("기타 문서");
            obj.set_cssclass("sta_WF_Label");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divOrgtCncldFlmno","160","350","1090","120",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("45");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divKrnCncldFlmno","161","482","1089","120",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("46");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Div("divEtcDataFlmno","157","613","1095","164",null,null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("47");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnList00",null,"982","75","32","2",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("48");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"982","75","32","80",null,null,null,null,null,this.divAgrReg.form);
            obj.set_taborder("49");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divAgrReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("체결 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAgrReg.form.divCalsgntDay
            obj = new Layout("default","",0,0,this.divAgrReg.form.divCalsgntDay.form,function(p){});
            this.divAgrReg.form.divCalsgntDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form.divCalEftvnDay
            obj = new Layout("default","",0,0,this.divAgrReg.form.divCalEftvnDay.form,function(p){});
            this.divAgrReg.form.divCalEftvnDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form.divCalPdctCncld
            obj = new Layout("default","",0,0,this.divAgrReg.form.divCalPdctCncld.form,function(p){});
            this.divAgrReg.form.divCalPdctCncld.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form.divOrgtCncldFlmno
            obj = new Layout("default","",0,0,this.divAgrReg.form.divOrgtCncldFlmno.form,function(p){});
            this.divAgrReg.form.divOrgtCncldFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form.divKrnCncldFlmno
            obj = new Layout("default","",0,0,this.divAgrReg.form.divKrnCncldFlmno.form,function(p){});
            this.divAgrReg.form.divKrnCncldFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form.divEtcDataFlmno
            obj = new Layout("default","",0,0,this.divAgrReg.form.divEtcDataFlmno.form,function(p){});
            this.divAgrReg.form.divEtcDataFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrReg.form
            obj = new Layout("default","",0,0,this.divAgrReg.form,function(p){});
            this.divAgrReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAgrReg.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAgrReg.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAgrReg.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAgrReg.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAgrReg.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAgrReg.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAgrReg.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divAgrReg.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divAgrReg.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divAgrReg.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divAgrReg.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divAgrReg.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divAgrReg.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divAgrReg.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divAgrReg.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divAgrReg.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divAgrReg.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAgrReg.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divAgrReg.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divAgrReg.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
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

            obj = new BindItem("item17","divAgrReg.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divAgrReg.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divAgrReg.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divAgrReg.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divAgrReg.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divAgrReg.form.edtEngNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divAgrReg.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divAgrReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divAgrReg.form.rdoNewRvsmBtn","value","dsAgrInfo","newRvsnTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divAgrReg.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divAgrReg.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divAgrReg.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divAgrReg.form.edtMou","value","dsCncldMou","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalMonth.xfdl");
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("AgrStiplMngS04.xfdl", function() {
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
        	trace("[AgrStiplMngS04]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	var objParam = { objDs:this.dsAgrInfo							// 바인딩 데이터셋
        					,sBindCol:"sgntYmd"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"sgntYmd"									// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divAgrReg.form.divCalsgntDay.form.fnInitCommonCalendar(this, objParam);

        	var objParam = { objDs:this.dsAgrInfo									// 바인딩 데이터셋
        					,sBindCol:"eftvnYmd"										// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"eftvnYmd"									// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divAgrReg.form.divCalEftvnDay.form.fnInitCommonCalendar(this, objParam);

        	// 월달력 초기화 호출
        	var objParam = { objDs:this.dsAgrInfo									// 바인딩 데이터셋
        					,sBindCol:"pdctCncldDt"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"month"								// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divAgrReg.form.divCalPdctCncld.form.fnInitCommonCalendar(this, objParam);
        	this.divAgrReg.form.divCalPdctCncld.set_enable(false);
        	this.divAgrReg.form.edtEngNm.set_imemode("alpha");

        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 START ■■■■■■■■■■■■■■■■■■■■■■■■ */
        	// 값 초기화
        	//원문 파일
        	var objParam2 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"orgtCncldFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"orgtCncldFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divAgrReg.form.divOrgtCncldFlmno.form.fnInitRaonK(this, objParam2);

        	//국문파일
        	var objParam3 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"krnCncldFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"krnCncldFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divAgrReg.form.divKrnCncldFlmno.form.fnInitRaonK(this, objParam3);

        	//기타 파일
        	var objParam4 = { objDs:this.dsAgrInfo								// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divAgrReg.form.divEtcDataFlmno.form.fnInitRaonK(this, objParam4);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■ 업로드 END ■■■■■■■■■■■■■■■■■■■■■■■■ */




        	//유효성 체크
        	this.divAgrReg.form.edtEngNm.validate = "title:원문명 입력,required";
        	this.divAgrReg.form.edtKrnNm.validate = "title:국문명 입력,required";
        	this.divAgrReg.form.divCalsgntDay.form.calYmd.validate = "title:서명일자 입력 ,required,date";
        	this.divAgrReg.form.rdoRegTypeBtn.validate = "title:등록유형 선택,required";


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
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "agrSave" :
        			this.fnFormTrans();
        			break;
        		case "agrRvsn" :
        			this.fnFormTrans();
        			break;
        		case "selectRvn":
        			this.divAgrReg.form.rdoNewRvsmBtn.set_value("NRT0002");
        			this.fileSearch();
        			break;
        		case "selectMou":
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
        		default:
        			break;
        	}
        };
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        	var cncldMgno = {};
        	var cncldDgr = {};
        	switch (sPopupId)
        	{
        		// 협정약정 검색 팝업(프로그램)
        		case "popModalAgrstipPgmP01" :
        			trace("cncldMgno > " + objRtnValue["cncldMgno"]);
        			trace("cncldDgr > " + objRtnValue["cncldDgr"]);
        			trace("cncldKrnNm > " + objRtnValue["cncldKrnNm"]);
        			trace("ntnNm > " + objRtnValue["ntnNm"]);
        			trace("iataNtnCd > " + objRtnValue["ntnCd"]);
        			trace("sgntYmd > " + objRtnValue["sgntYmd"]);
        			trace("eftvnYmd > " + objRtnValue["eftvnYmd"]);
        			trace("cncldClCd > " + objRtnValue["cncldClCd"]);

        			if( objRtnValue != undefined && objRtnValue != "")
        			{
        				this.dsCurInfo.setColumn(0, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsCurInfo.setColumn(0, "cncldDgr", objRtnValue["cncldDgr"]);
        				this.dsCurInfo.setColumn(0, "cncldClCd", objRtnValue["cncldClCd"]);

        				this.dsCncldMou.addRow();
        				this.dsCncldMou.setColumn(0, "cncldMgno", objRtnValue["cncldMgno"]);

        				this.fnCallUpdateAgr();

        			}
        			break;

        		//MOU 체결여부 검색 팝업(프로그램)
        		case "popModalMouPgmP01":
        			this.dsNtnList.clearData();
        			this.dsCncldMou.clearData();
        			this.dsMouCurInfo.clearData();
        			trace("cncldMgno > " + objRtnValue["cncldMgno"]);
        			var rRow = this.dsNtnList.addRow();
        			var Mrow = this.dsCncldMou.addRow();
        			var MCrow = this.dsMouCurInfo.addRow();
        			//var Mhrow = this.dsMhdlgList.addRow();
        			if(!this.gfnIsNull(objRtnValue["cncldOrgtNm"]))
        			{

        				this.dsMouCurInfo.setColumn(MCrow, "cncldMgno", objRtnValue["cncldMgno"]);
        				this.dsMouCurInfo.setColumn(MCrow, "cncldDgr", objRtnValue["cncldDgr"]);

        				this.dsCncldMou.setColumn(Mrow, "mouOrgtNm", objRtnValue["cncldKrnNm"]);
        				this.dsCncldMou.setColumn(Mrow, "relCncldMgno", objRtnValue["cncldMgno"]);

        				this.dsAgrInfo.setColumn(0, "cncldOrgtNm", objRtnValue["cncldOrgtNm"]);
        				this.dsAgrInfo.setColumn(0, "cncldKrnNm", objRtnValue["cncldKrnNm"]);
        				this.dsAgrInfo.setColumn(0, "sgntYmd", objRtnValue["sgntYmd"]);
        				this.dsAgrInfo.setColumn(0, "eftvnYmd", objRtnValue["eftvnYmd"]);
        				this.dsAgrInfo.setColumn(0, "cncldNo", objRtnValue["cncldNo"]);
        				this.dsAgrInfo.setColumn(0, "regTypeCd", objRtnValue["regTypeCd"]);
        				this.dsAgrInfo.setColumn(0, "orgtCncldFlmno", objRtnValue["orgtCncldFlmno"]);
        				this.dsAgrInfo.setColumn(0, "krnCncldFlmno", objRtnValue["krnCncldFlmno"]);
        				this.dsAgrInfo.setColumn(0, "etcDataFlmno", objRtnValue["etcDataFlmno"]);

        				this.dsNtnList.setColumn(rRow, "ntnKornNm", objRtnValue["ntnNm"]);
        				this.dsNtnList.setColumn(rRow, "ntnCd", objRtnValue["ntnCd"]);

        				//this.dsMhdlgList.set_c(Mhrow, "ntnCd", objRtnValue["ntnCd"]);

        				this.fnCallMouDetail();
        			}
        			break;

        		// 방법론 검색 팝업(프로그램)
        		case "popModalMhdlgPgmP01" :
        			trace("pvMhdlgMgno > " + objRtnValue["pvMhdlgMgno"]);
        			trace("pvMMhdlgDgr > " + objRtnValue["pvMMhdlgDgr"]);
        			trace("pvMhdlgOrgtNm > " + objRtnValue["pvMhdlgOrgtNm"]);
        			trace("pvMhdlgKrnNm > " + objRtnValue["pvMhdlgKrnNm"]);
        			this.dsMhdlgList.clearData();
        			if(!this.gfnIsNull(objRtnValue["pvMhdlgMgno"]))
        			{
        				var rRow = this.dsMhdlgList.addRow();
        				this.dsMhdlgList.setColumn(rRow, "mhdlgOrgtNm", objRtnValue["pvMhdlgOrgtNm"]);
        				this.dsMhdlgList.setColumn(rRow, "mhdlgMgno", objRtnValue["pvMhdlgMgno"]);
        				this.dsMhdlgList.setColumn(rRow, "mhdlgDgr", objRtnValue["pvMMhdlgDgr"]);
        			}
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
        					this.divAgrReg.form.divKrnCncldFlmno.form.fnSearchFile("");
        				}else {
        					this.divAgrReg.form.divKrnCncldFlmno.form.fnSearchFile(krnCncldFlmno);
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

        				trace("################### 프로그램-국문파일 등록용 Start ###################");
        				var etcDataFlmno = this.dsAgrInfo.getColumn(0, "etcDataFlmno");
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno)) {
        					this.divAgrReg.form.divEtcDataFlmno.form.fnSearchFile("");
        				}else {
        					this.divAgrReg.form.divEtcDataFlmno.form.fnSearchFile(etcDataFlmno);
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
        // ***********************************************************************************/
        this.fnCallDtlInfo = function()
        {
        	trace("상세 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "regInfo";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectAgrMngDetail.irs";
         	objArgs.inds      		= "dsAgrInfo = dsAgrInfo";
         	objArgs.outds     		= "dsDocList=dsDocList dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallUpdateAgr = function()
        {
        	trace("협정 개정 정보 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;
        	var flag = this.dsAgrInfo.getColumn(0,"cncldClCd");
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectRvn";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectAgrMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo = dsCurInfo";
         	objArgs.outds     		= "dsDocList=dsDocList dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList";
        	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallMouDetail = function()
        {
        	trace("MOU에서 방법론 불러오기...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;
        	var flag = this.dsAgrInfo.getColumn(0,"cncldClCd");
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectMou";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectMouMhdlDetail.irs";
         	objArgs.inds      		= "dsMouCurInfo = dsMouCurInfo";
         	objArgs.outds     		= "dsMhdlgList=dsMhdlgList";
        	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };
        // this.fnCallModAgr = function()
        // {
        // 	trace("협정 수정 호출...");
        // 	// 호출전 Validation 체크
        // 	//if(!this.fnCallSearchValidCheck()) return false;
        //
        // 	// 호출전 데이터 설정 및 가공 처리
        // 	//if(!this.fnCallSearchValueSetting()) return false;
        //
        // 	// 공통Transaction 호출
        //  	var objArgs = {};
        //  	objArgs.svcId 			= "selectMod";
        //  	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectAgrMngDetail.irs";
        //  	objArgs.inds      		= "dsCurInfo = dsCurInfo";
        //  	objArgs.outds     		= "dsAgrInfo=dsAgrInfo"
        // 								+ " dsNtnList=dsNtnList"
        // 								+ " dsMhdlgList=dsMhdlgList"
        // 								+ " dsCncldMou=dsCncldMou"
        // 								+ " dsOrgtCncldFile=dsOrgtCncldFile"
        // 								+ " dsKrnCncldFile=dsKrnCncldFile"
        // 								+ " dsEtcDataFile=dsEtcDataFile";
        //  	objArgs.args 			= "";
        //  	objArgs.callback		= "fnCallback";
        //
        // 	this.gfnTransaction(this, objArgs);
        //
        // };

        this.fnCallUniNtnList = function()
        {
        	trace("단위 국가 리스트 호출...");

        	var callUrl = "";

        	if(this.fvApp.User.roleIdMgno == "RL00000004"
        		|| this.fvApp.User.roleIdMgno == "RL00000005"
        		|| this.fvApp.User.roleIdMgno == "RL00000009"
        		|| this.fvApp.User.roleIdMgno == "RL00000010" ) {

        		callUrl = "/biz/aply/aprvAply/selectAprvAplyUniNtnRegList.irs";
        	}else {
        		callUrl = "";
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
        this.SaveMhdlgAply = function()
        {
        	var ModFlag = this.dsCurInfo.getColumn(0, "sts"); 						//수정 체크
        	var flag = this.divAgrReg.form.rdoNewRvsmBtn.value;

        	//협정 수정 일 경우
        	if( ModFlag == "MOD" )
        	{
        		trace("협정 수정 호출...");

        		var callUrl = "/adm/agrstipl/agrStiplMng/updateAgrMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "callMod";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList dsCncldMou=dsCncldMou dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile dsEtcDataFile=dsEtcDataFile ";
        		objArgs.outds     		= "dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList dsCncldMou=dsCncldMou dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile dsEtcDataFile=dsEtcDataFile ";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}else
        	{ 																			//협정 등록
        		if(flag == "NRT0001")
        		{

        		trace("협정 등록 호출...");

        		var callUrl = "/adm/agrstipl/agrStiplMng/insertAgrMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "agrSave";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsAgrInfo=dsAgrInfo"
        								+ " dsNtnList=dsNtnList"
        								+ " dsMhdlgList=dsMhdlgList"
        								+ " dsCncldMou=dsCncldMou"
        								+ " dsOrgtCncldFile=dsOrgtCncldFile"
        								+ " dsKrnCncldFile=dsKrnCncldFile"
        								+ " dsEtcDataFile=dsEtcDataFile";
        		objArgs.outds     		= "dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList dsCncldMou=dsCncldMou dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile dsEtcDataFile=dsEtcDataFile";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        		}else
        		{ 																			//협정 개정
        			trace("협정 개정 호출...");

        		var callUrl = "/adm/agrstipl/agrStiplMng/insertAgrMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "agrRvsn";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList dsCncldMou=dsCncldMou dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile dsEtcDataFile=dsEtcDataFile";
        		objArgs.outds     		= "dsAgrInfo=dsAgrInfo dsNtnList=dsNtnList dsMhdlgList=dsMhdlgList dsCncldMou=dsCncldMou dsOrgtCncldFile=dsOrgtCncldFile dsKrnCncldFile=dsKrnCncldFile dsEtcDataFile=dsEtcDataFile";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);

        		}
        	}

        };

        this.fnCallAgrInfo = function(objArgs1,objArgs2)
        {
        	trace("상세 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/agrstipl/agrStiplMng/selectAgrMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo ";
         	objArgs.outds     		= "dsDocList=dsDocList dsAgrInfo=dsAgrInfo dsMhdlgList=dsMhdlgList";
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

        	trace("[AgrStiplMngS04]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsAgrInfo.clearData();
        	this.dsAgrInfo.addRow();
        	this.dsCurInfo.setColumn(0, "cncldMgno", objArgs.cncldMgno);
        	this.dsCurInfo.setColumn(0, "cncldDgr", objArgs.cncldDgr);
        	this.dsCurInfo.setColumn(0, "sts", objArgs.sts);
        	this.divAgrReg.form.cboNtn.set_index(0);
        	this.divAgrReg.form.rdoNewRvsmBtn.set_value("NRT0001");
        	this.divAgrReg.form.rdoMouBtn.set_value("N");
        	this.divAgrReg.form.edtMou.set_enable(false);


        	var flag = objArgs.cncldClCd;
        	this.dsAgrInfo.setColumn(0,"cncldClCd",flag);
        	trace("-----flag----"+flag);

        	if(objArgs.cncldMgno != null && objArgs.cncldMgno != undefined)
        	{
        		this.fnCallModAgr(objArgs);
        	}
        	var orgtCncldFlmno = this.dsAgrInfo.getColumn(0, "orgtCncldFlmno");
        	this.dsOrgtCncldFile.clearData();
        	this.dsKrnCncldFile.clearData();
        	this.dsEtcDataFile.clearData();

        	this.divAgrReg.form.divOrgtCncldFlmno.form.fnSearchFile(orgtCncldFlmno);


        };


        //파일서치
        this.fileSearch = function() {
        	trace("################### 원문파일 Start ###################");
        	var orgtCncldFlmno = this.dsAgrInfo.getColumn(0, "orgtCncldFlmno");
        	trace(">>> orgtCncldFlmno : " + orgtCncldFlmno);
        	if(this.gfnIsNull(orgtCncldFlmno)) {
        		var objRtn = {sDiv:"SEARCH"};
        		trace(">>>>1");
        		this.fnRaonKFileCallback("orgtCncldFlmno", objRtn);
        	}else {
        		trace(">>>>1.5");
        		this.divAgrReg.form.divOrgtCncldFlmno.form.fnSearchFile(orgtCncldFlmno);
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



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

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };
        this.btnTopList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        //체결국가 추가 버튼 클릭
        this.divAgrReg_btnAddNtn_onclick = function(obj,e)
        {

        	var NtnNm = this.divAgrReg.form.cboNtn.text;
        	var NtnCd = this.divAgrReg.form.cboNtn.value;


        	if(NtnNm == null || NtnNm == "" || NtnCd == null || NtnCd == "")
        	{
        		alert("체결국가를 선택하세요.");
        		return;
        	}

        	var rRow = this.dsNtnList.addRow();
        	this.dsNtnList.setColumn(rRow,"chk",'');
        	this.dsNtnList.setColumn(rRow,"ntnKornNm",NtnNm);
        	this.dsNtnList.setColumn(rRow,"ntnCd",NtnCd);

        	this.divAgrReg.form.cboNtn.set_index(0);
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


        // 신규/개정유형 항목 라디오 버튼 클릭시 협정 검색 버튼 활성화/비활성화

        this.divAgrReg_rdoNewRvsmBtn_onitemchanged = function(obj,e)
        {
        	var flag = e.postvalue;
         	if(flag == "NRT0002") {						//개정
        		this.divAgrReg.form.btnAgreeSearch.set_enable(true);
        		this.divAgrReg.form.edtEngNm.set_enable(false);
        		this.divAgrReg.form.edtKrnNm.set_enable(false);
        		this.divAgrReg.form.btnMouYnSearch.set_enable(false);
        		this.divAgrReg.form.edtMou.set_enable(false);
        		this.divAgrReg.form.rdoMouBtn.set_value("N");
        		this.divAgrReg.form.rdoMouBtn.set_enable(false);
        		this.divAgrReg.form.btnAgreeSearch.set_visible(true);
        	} else {
        		this.divAgrReg.form.btnAgreeSearch.set_enable(false);
        		this.divAgrReg.form.edtEngNm.set_enable(true);
        		this.divAgrReg.form.edtKrnNm.set_enable(true);
        		this.divAgrReg.form.btnMouYnSearch.set_enable(true);
        		this.divAgrReg.form.edtMou.set_enable(true);
        		this.divAgrReg.form.rdoMouBtn.set_enable(true);
        		this.divAgrReg.form.btnAgreeSearch.set_visible(false);
        	}
        };
        //MOU 체결 여부 라디오버튼 이벤트
        this.divAgrReg_rdoMouBtn_onitemchanged = function(obj,e)
        {
        	var flag = e.postvalue;
        	if(flag == "Y") { 								//MOU 존재 할 경우
        		this.divAgrReg.form.btnMouYnSearch.set_visible(true);
        		this.divAgrReg.form.edtMou.set_visible(true);
        	} else {
        		this.divAgrReg.form.btnMouYnSearch.set_visible(false);
        		this.divAgrReg.form.edtMou.set_visible(false);
        	}
        };

        this.divAgrReg_rdoRegTypeBtn_onitemchanged = function(obj,e)
        {
        	var flag = e.postvalue;
        	if( flag == "RTC0003"){		//체결중
        		this.divAgrReg.form.divCalEftvnDay.set_enable(false);			//발효일자 비활성화
        		this.divAgrReg.form.divCalEftvnDay.set_visible(false);			//발효일자 숨기기
        		this.divAgrReg.form.stadivCalEftvnDay.set_visible(false);		//발효일자 sta 숨기기
        		this.divAgrReg.form.divCalPdctCncld.set_enable(true);			//예상체결일자 활성화
        		this.divAgrReg.form.staCalPdctCncld.set_visible(true);			//예상체결일자 숨기기
        		this.divAgrReg.form.divCalPdctCncld.set_visible(true);			//예상체결일자 숨기기
        		this.divAgrReg.form.divCalPdctCncld.form.calYm.validate = "title:체결중일시 예상체결일자 입력 ,required,date"; //예상체결일자 유효성검사
        		this.divAgrReg.form.divCalEftvnDay.form.calYmd.validate = "";	//예상체결일자 유효성검사 초기화
        		this.divAgrReg.form.divCalEftvnDay.form.fnSetDay("");			//발효일자 값 입력시 값 초기화


        	}else {
        		this.divAgrReg.form.divCalEftvnDay.set_enable(true);			//발효일자 활성화
        		this.divAgrReg.form.divCalEftvnDay.set_visible(true);			//발효일자 보이기
        		this.divAgrReg.form.stadivCalEftvnDay.set_visible(true);		//발효일자 sta 보이기
        		this.divAgrReg.form.divCalPdctCncld.set_enable(false);			//예상체결일자 비활성화
        		this.divAgrReg.form.staCalPdctCncld.set_visible(false);			//예상체결일자 보이기
        		this.divAgrReg.form.divCalPdctCncld.set_visible(false);			//예상체결일자 보이기



        		this.divAgrReg.form.divCalPdctCncld.form.calYm.validate = "";	//예상체결일자 유효성검사 초기화
        		this.divAgrReg.form.divCalEftvnDay.form.calYmd.validate = "title:발효일자 입력 ,required,date";	//발효일자 유효성검사
        		this.divAgrReg.form.divCalPdctCncld.form.fnSetMonth("");		//예상체결일자 값 입력시 초기화
        	}

        };

        //개정 검색 버튼 팝업 생성
        this.divAgrInfo_btnAgreeSearch_onclick = function(obj,e)
        {
        	var flag = this.dsAgrInfo.getColumn(0,"cncldClCd");
        	var sPopupId 	= "popModalAgrstipPgmP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};

        	if(flag == "CNC0001"){
        		var objArgs		= {cncldClCd:"CNC0001"};
        	}else{
        		var objArgs		= {cncldClCd:"CNC0002"};
        	}
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };
        //MOU 체결여부 팝업 생성
        this.divAgrReg_btnMouYnSearch_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalMouPgmP01";
        	var sMnuId 		= "MN99010000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {cncldClCd:'CNC0003'};
        	var oOption		= {callback:"fnPopupCallback",titletext:"협정.약정.MOU 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        // 방법론 팝업 생성 버튼
        this.divAgrReg_btnMhdlgSearch_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalMhdlgPgmP01";
        	var sMnuId 		= "MN99020000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};
        	var oOption		= {callback:"fnPopupCallback",titletext:"방법론 모달(Modal) 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        this.divAgrReg_btnReg_onclick = function(obj,e)
        {
        	//유효성 검사
        	var bSucc = this.gfnValidation(this.divAgrReg);
        	var cnt = this.divAgrReg.form.grdNtnList.rowcount;
        	if(this.dsCncldMou.rowcount == 0){
        		this.dsCncldMou.addRow();
        	}
        	if ( bSucc ==  true ){
        		alert("정합성체크 성공");
        		if( cnt < 1) {
        			this.gfnShowMessage(this, ["Alert","체결국가를 추가하세요."], "", function(svcid, variant) {
        				this.divAgrReg.form.cboNtn.setFocus();
        				});
        		return false;
        		}else{
        			this.SaveMhdlgAply();
        		}
        	};
        };


        this.divAgrReg_btnDelMhdlg_onclick = function(obj,e)
        {
        	var rRows = this.dsMhdlgList.extractRows("chk=='Y'");
        	trace("arrRows:" + rRows);
        	trace("arrRows:" + rRows.length);
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsMhdlgList.deleteMultiRows(this.dsMhdlgList.extractRows("chk=='Y'"));
        	}
        };
        //화면 전환
        this.fnFormTrans = function()
        {
        	var flag = this.dsAgrInfo.getColumn(0,"cncldClCd");
        	if(flag =="CNC0001")  //협정
        	{
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail03.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg01.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg02.set_visible(false);

        	var objArgs ={};
        	objArgs.cncldMgno = this.dsAgrInfo.getColumn(0,"cncldMgno");
        	objArgs.cncldDgr = this.dsAgrInfo.getColumn(0,"cncldDgr");
        	objArgs.cncldClCd = this.dsAgrInfo.getColumn(0,"cncldClCd");
        	objArgs.mhdlgMgno = this.dsMhdlgList.getColumn(0,"mhdlgMgno");
        	objArgs.mhdlgDgr = this.dsMhdlgList.getColumn(0,"mhdlgDgr");
        	trace("+++++++cncldMgno++++++++++"+objArgs.cncldMgno);
        	trace("+++++++cncldDgr++++++++++"+objArgs.cncldDgr);
        	trace("+++++++mhdlgMgno++++++++++"+objArgs.mhdlgMgno);
        	trace("+++++++mhdlgDgr++++++++++"+objArgs.mhdlgDgr);
        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.divDetail01.form.fnChangeDiv(objArgs);

        	}else //약정
        	{
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(true);
        		this.getOwnerFrame().form.divWork.form.divDetail03.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg01.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg02.set_visible(false);

        		var objArgs ={};
        		objArgs.cncldMgno = this.dsAgrInfo.getColumn(0,"cncldMgno");
        		objArgs.cncldDgr = this.dsAgrInfo.getColumn(0,"cncldDgr");
        		objArgs.mhdlgMgno = this.dsMhdlgList.getColumn(0,"mhdlgMgno");
        		objArgs.mhdlgDgr = this.dsMhdlgList.getColumn(0,"mhdlgDgr");
        		trace("+++++++cncldMgno++++++++++"+objArgs.cncldMgno);
        		trace("+++++++cncldDgr++++++++++"+objArgs.cncldDgr);
        		trace("+++++++mhdlgMgno++++++++++"+objArgs.mhdlgMgno);
        		trace("+++++++mhdlgDgr++++++++++"+objArgs.mhdlgDgr);

        		// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        		this.getOwnerFrame().form.divWork.form.divDetail02.form.fnChangeDiv(objArgs);
        	}


        }

        //상세정보호출
        this.fnCallAgrDetail = function(svcId)
        {
        	trace("등록 수정 전 상세 호출...");

        	var callUrl = "/adm/agrstipl/agrStiplMng/selectAgrMngDetail.irs";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= svcId;
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsAgrInfo=dsAgrInfo";
         	objArgs.outds     		= "dsMhdlgList=dsMhdlgList dsAgrInfo=dsAgrInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divAgrReg.form.staRegTypeNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staUsrInfoLT.addEventHandler("onclick",this.divAgrReg_staUsrInfoLT_onclick,this);
            this.divAgrReg.form.staCncldKrnNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staCncldOrgtNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staMouPrs.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staSgntYmd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staCncldNo.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.staBzentNm01_01_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.stadivCalEftvnDay.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divAgrReg.form.sta08_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divAgrReg.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divAgrReg.form.edtEngNm.addEventHandler("onkeyup",this.divAgrReg_edtEngNm_onkeyup,this);
            this.divAgrReg.form.sta07_00_00_00_01.addEventHandler("onclick",this.divAgrReg_sta07_00_00_00_01_onclick,this);
            this.divAgrReg.form.sta08_00_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divAgrReg.form.cboNtn.addEventHandler("onitemchanged",this.divAgrReg_cboNtn_onitemchanged,this);
            this.divAgrReg.form.btnDelNtn.addEventHandler("onclick",this.divAgrReg_btnDelNtn_onclick,this);
            this.divAgrReg.form.btnAddNtn.addEventHandler("onclick",this.divAgrReg_btnAddNtn_onclick,this);
            this.divAgrReg.form.sta08_00_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divAgrReg.form.btnDelMhdlg.addEventHandler("onclick",this.divAgrReg_btnDelMhdlg_onclick,this);
            this.divAgrReg.form.btnMhdlgSearch.addEventHandler("onclick",this.divAgrReg_btnMhdlgSearch_onclick,this);
            this.divAgrReg.form.rdoNewRvsmBtn.addEventHandler("onitemchanged",this.divAgrReg_rdoNewRvsmBtn_onitemchanged,this);
            this.divAgrReg.form.btnAgreeSearch.addEventHandler("onclick",this.divAgrInfo_btnAgreeSearch_onclick,this);
            this.divAgrReg.form.rdoMouBtn.addEventHandler("onitemchanged",this.divAgrReg_rdoMouBtn_onitemchanged,this);
            this.divAgrReg.form.btnMouYnSearch.addEventHandler("onclick",this.divAgrReg_btnMouYnSearch_onclick,this);
            this.divAgrReg.form.rdoRegTypeBtn.addEventHandler("onitemchanged",this.divAgrReg_rdoRegTypeBtn_onitemchanged,this);
            this.divAgrReg.form.sta08_00_00_00_00_02.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divAgrReg.form.sta08_00_00_00_00_02_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divAgrReg.form.btnList00.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divAgrReg.form.btnReg.addEventHandler("onclick",this.divAgrReg_btnReg_onclick,this);
            this.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
        };
        this.loadIncludeScript("AgrStiplMngS04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
