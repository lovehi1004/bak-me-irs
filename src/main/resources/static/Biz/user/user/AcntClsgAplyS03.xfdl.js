(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AcntClsgAplyS03");
            this.set_titletext("계정폐쇄신청 검토등록 및 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntClsgAplyBsc", this);
            obj._setContents("<ColumnInfo><Column id=\"clsgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"perfIn\" type=\"STRING\" size=\"256\"/><Column id=\"perfOut\" type=\"STRING\" size=\"256\"/><Column id=\"clsgAplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsgAplyRsn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClsgAplyClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClsgClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계정상태변경");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divClsgAply","0","sta00:10",null,"297","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","87",null,"44","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta03","0","44",null,"44","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCdNm","157","51",null,"30","7",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("staPsnAcntUnqno","0","44","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("2");
            obj.set_text("계정고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta07","0","173",null,"124","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta08_01","50.00%","87","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("7");
            obj.set_text("국외");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Edit("edtPerfIn","307","94",null,"30","sta08_01:7",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta08","0","87","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("4");
            obj.set_text("인정실적수량");
            obj.set_cssclass("sta_WF_Label");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta08_01_01","sta08:0","87","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("5");
            obj.set_text("국내");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("staClsgAplyRsn","0","173","150","124",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("13");
            obj.set_text("폐쇄신청사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Edit("edtPerfOut","sta08_01:7","94",null,"30","7",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","130",null,"44","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Combo("cboClsgAplyClCd","157","136","230","32",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsClsgAplyClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("폐쇄신청구분");
            obj.set_text("");
            obj.set_index("-1");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("staClsgAplyClCd","0","130",null,"44","cboClsgAplyClCd:7",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("9");
            obj.set_text("폐쇄신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("staClsgClCd","50.00%","130","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("11");
            obj.set_text("폐쇄구분");
            obj.set_cssclass("sta_WF_Label");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new TextArea("taeClsgAplyRsn","157","179",null,"108","30",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_maxlength("1000");
            obj.set_accessibilitylabel("폐쇄신청사유");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Combo("cboClsgClCd","staClsgClCd:7","136","230","32",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsClsgClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("폐쇄구분");
            obj.set_text("");
            obj.set_index("-1");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","1",null,"44","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","8",null,"30","7",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","1","150","44",null,null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("0");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","1",null,"1","0",null,null,null,null,null,this.divClsgAply.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divClsgAply.addChild(obj.name, obj);

            obj = new Div("divClsgAplyRvw","0","divClsgAply:-1",null,"167","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","43",null,"124","0",null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new Static("staRvwOpnn","0","43","150","124",null,null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("2");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","0","0",null,"44","0",null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new Combo("cboRvwTypeCd","157","6","230","32",null,null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsRvwTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("검토결과");
            obj.set_text("");
            obj.set_index("-1");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new Static("staRvwTypeCd","0","0","150","44",null,null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("0");
            obj.set_text("검토결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new TextArea("taeRvwOpnn","157","49",null,"108","30",null,null,null,null,null,this.divClsgAplyRvw.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_maxlength("1000");
            obj.set_accessibilitylabel("검토의견");
            this.divClsgAplyRvw.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","divClsgAplyRvw:25",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","75","32","btnList:10",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divClsgAply.form
            obj = new Layout("default","",0,0,this.divClsgAply.form,function(p){});
            this.divClsgAply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divClsgAplyRvw.form
            obj = new Layout("default","",0,0,this.divClsgAplyRvw.form,function(p){});
            this.divClsgAplyRvw.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divClsgAply.form.edtAplyClCdNm","value","dsAcntClsgAplyBsc","psnAcntUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divClsgAply.form.edtPerfIn","value","dsAcntClsgAplyBsc","perfIn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divClsgAply.form.edtPerfOut","value","dsAcntClsgAplyBsc","perfOut");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divClsgAply.form.edtBizFormCdNm","value","dsBizInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divClsgAply.form.edt02_01_00_00","value","dsBizInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divClsgAply.form.edtBizOrgtNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divClsgAply.form.edtBizKrnNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divClsgAply.form.edtKoffPrnmntYmd","value","dsBizInfo","koffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divClsgAply.form.edtCertVldTypeCdNm","value","dsBizInfo","certVldTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divClsgAply.form.edt02_01_01_00_00_01_00","value","dsBizInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divClsgAply.form.edtBizFldCdSnm","value","dsBizInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divClsgAply.form.taeClsgAplyRsn","value","dsAcntClsgAplyBsc","clsgAplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divClsgAply.form.edtBzentNm","value","dsAcntClsgAplyBsc","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divClsgAply.form.edtAplyClCdNm01","value","dsBizInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divCmmnBtn.form.edtAgreeClausCdNm","value","dsBizInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divCmmnBtn.form.edtAgreeMgnoNm","value","dsBizInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divClsgAply.form.edtAgreeClausCdNm00","value","dsBizInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divClsgAply.form.edtAgreeMgnoNm00","value","dsBizInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divClsgAply.form.cboClsgAplyClCd","value","dsAcntClsgAplyBsc","clsgAplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divClsgAply.form.cboClsgClCd","value","dsAcntClsgAplyBsc","clsgClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divClsgAply.form.cboClsgAplyClCd00","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divClsgAply.form.taeClsgAplyRsn00","value","dsInfoPrvtAply","prvtAplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divClsgAplyRvw.form.edtAplyClCdNm","value","dsBizInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divClsgAplyRvw.form.edtPerfIn","value","dsBizInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divClsgAplyRvw.form.edtPerfOut","value","dsBizInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divClsgAplyRvw.form.edtBizFormCdNm","value","dsBizInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divClsgAplyRvw.form.edt02_01_00_00","value","dsBizInfo","bizTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divClsgAplyRvw.form.edtBizOrgtNm","value","dsBizInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divClsgAplyRvw.form.edtBizKrnNm","value","dsBizInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divClsgAplyRvw.form.edtKoffPrnmntYmd","value","dsBizInfo","koffPrnmntYmdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divClsgAplyRvw.form.edtCertVldTypeCdNm","value","dsBizInfo","certVldTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divClsgAplyRvw.form.edt02_01_01_00_00_01_00","value","dsBizInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divClsgAplyRvw.form.edtBizFldCdSnm","value","dsBizInfo","bizFldCdSnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divClsgAplyRvw.form.taeClsgAplyRsn","value","dsInfoPrvtAply","prvtAplyRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divClsgAplyRvw.form.edtAplyClCdNm00","value","dsBizInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divClsgAplyRvw.form.edtAplyClCdNm01","value","dsBizInfo","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divClsgAplyRvw.form.edtAgreeClausCdNm00","value","dsBizInfo","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divClsgAplyRvw.form.edtAgreeMgnoNm00","value","dsBizInfo","agreeMgnoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divClsgAplyRvw.form.cboClsgAplyClCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divClsgAplyRvw.form.cboClsgClCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divClsgAplyRvw.form.cboRvwTypeCd","value","dsAcntClsgAplyBsc","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divClsgAplyRvw.form.taeRvwOpnn","value","dsAcntClsgAplyBsc","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AcntClsgAplyS03.xfdl", function() {
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

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.divClsgAply.form.cboClsgAplyClCd.validate = "title:폐쇄신청구분 입력,required";
        	this.divClsgAply.form.cboClsgClCd.validate = "title:폐쇄구분 입력,required";
        	this.divClsgAply.form.taeClsgAplyRsn.validate = "title:폐쇄신청사유 입력,required";

        	this.divClsgAplyRvw.form.cboRvwTypeCd.validate = "title:검토결과 입력,required";
        	this.divClsgAplyRvw.form.taeRvwOpnn.validate = "title:검토의견 입력,required";
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
        	// 공통코드 조회
        	this.fnCallComCdoe();
        };

        this.fnChangeDiv = function(objArgs) {
        	this.dsSrh.deleteAll();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "status", objArgs.status);
        	this.dsSrh.setColumn(0, "instMgno", objArgs.instMgno);

        	this.divClsgAplyRvw.set_visible(true);
        	this.divCmmnBtn.set_top("divClsgAplyRvw:25");
        	this.fnCallClsgAplyInfo();
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	switch (sSvcId)
        	{
        		case "save" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnChange();

        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        //공통코드 조회
        this.fnCallComCdoe = function()
        {
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsClsgAplyClCd", 	groupId:"CLSG_APLY_CL_CD", 		headflag:"", useYn:"Y"}; //폐쇄신청구분코드
        	arrParam[1] = {outDs:"dsClsgClCd", 		groupId:"CLSG_CL_CD", 			headflag:"S", useYn:"Y"}; //폐쇄구분코드
        	arrParam[2] = {outDs:"dsRvwTypeCd", 	groupId:"RVW_TYPE_CD", 			headflag:"", useYn:"Y"}; //검토유형코드

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

        // 사업정보, 사업자정보, 사업비공개신청정보 조회
        this.fnCallClsgAplyInfo = function()
        {
        	var objArgs = {};
         	objArgs.svcId 			= "clsgAplyInfo";
         	objArgs.url 			= "/adm/user/acntClsgAply/selectAcntClsgAplyRvwRslt.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsAcntClsgAplyBsc=dsAcntClsgAplyBsc";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        // 검토의견 저장
        this.fnCallSave = function()
        {
        	var objArgs = {};
         	objArgs.svcId 			= "save";
         	objArgs.url 			= "/adm/user/acntClsgAply/insertAcntClsgAplyRvwRslt.irs";
         	objArgs.inds      		= "dsAcntClsgAplyBsc=dsAcntClsgAplyBsc";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnChange = function() {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divRepresentative.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divRvw.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.status = "RVW";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        }
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.
        // 목록 버튼 클릭
        this.divCmmnBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divRepresentative.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divRvw.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.status = "RVW";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        // 저장 버튼 클릭
        this.divCmmnBtn_btnRegRe_onclick = function(obj,e)
        {
        	var bSucc = this.gfnValidation(this.divClsgAply);
        	var bSucc2 = this.gfnValidation(this.divClsgAplyRvw);
        	if ( bSucc ==  true && bSucc2 ==  true){
        		this.fnCallSave();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.divCmmnBtn_btnList_onclick,this);
            this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnRegRe_onclick,this);
        };
        this.loadIncludeScript("AcntClsgAplyS03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
