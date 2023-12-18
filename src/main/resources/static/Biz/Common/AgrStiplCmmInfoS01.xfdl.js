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
            obj = new Dataset("dsBbsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsSn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"pstatNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstatCn\" type=\"STRING\" size=\"256\"/><Column id=\"flmno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"typeNm\" type=\"STRING\" size=\"256\"/><Column id=\"preBbsSn\" type=\"STRING\" size=\"256\"/><Column id=\"prePstatNm\" type=\"STRING\" size=\"256\"/><Column id=\"postBbsSn\" type=\"STRING\" size=\"256\"/><Column id=\"postPstatNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">연료 전환사업의 방법론 [1차]</Col><Col id=\"Column1\">방법론 조회</Col></Row><Row><Col id=\"Column0\">연료 전환사업의 방법론 [2차]</Col><Col id=\"Column1\">밥법론 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_00_00_00","155","38",null,"30","1256",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협정·약정 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div03","155","78",null,"173","155",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","129",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01_01","50.00%","0","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("19");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","sta08_01_01:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_value("사전 승인신청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전 승인신청");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_text("원문");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","129","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_text("원문파일");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            obj.set_text("조약번호");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("16");
            obj.set_value("한국-베트남 감축  ");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("한국-베트남 감축  ");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","50%","86","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta08_01_00:7","93",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("13");
            obj.set_value("단일감축사업/일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업/일반");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","50.00%","129","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("14");
            obj.set_text("국문파일");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00","sta08_01_00_00:7","136",null,"30","81",null,null,null,null,null,this.div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("한·우즈베키스탄 기후협력협정");
            obj.set_text("한·우즈베키스탄 기후협력협정");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00","sta08_02:7","93",null,"30","sta08_01_00:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("17");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00_00","sta08_00_00_00:7","136",null,"30","sta08_01_00_00:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("18");
            obj.set_value("Korea-Uzbekistan Climate Cooperation ");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("Korea-Uzbekistan Climate Cooperation ");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_01","sta08_01_01:7","7",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("20");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn01_00",null,"136","66","30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("22");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn01",null,"136","66","30","sta08_01_00_00:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("21");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div03.addChild(obj.name, obj);

            obj = new Div("div03_00","155","311",null,"520","155",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","129",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_01","50.00%","0","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("19");
            obj.set_text("협의체구성일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","sta08_01_01:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("2");
            obj.set_text("협의체명");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("3");
            obj.set_text("서명일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","129","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("6");
            obj.set_text("원문파일");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("8");
            obj.set_text("조약번호");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("9");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("16");
            obj.set_value("한국-베트남 감축  ");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("한국-베트남 감축  ");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("11");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","50%","86","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("12");
            obj.set_text("발효일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta08_01_00:7","93",null,"30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("13");
            obj.set_value("단일감축사업/일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업/일반");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","50.00%","129","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("14");
            obj.set_text("국문파일");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00","sta08_01_00_00:7","136",null,"30","81",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("한·우즈베키스탄 기후협력협정");
            obj.set_text("한·우즈베키스탄 기후협력협정");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00","sta08_02:7","93",null,"30","sta08_01_00:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("17");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00_00","sta08_00_00_00:7","136",null,"30","sta08_01_00_00:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("18");
            obj.set_value("Korea-Uzbekistan Climate Cooperation ");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("Korea-Uzbekistan Climate Cooperation ");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_01","sta08_01_01:7","7",null,"30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div03_00.addChild(obj.name, obj);

            obj = new Button("btn01_00",null,"136","66","30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("22");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div03_00.addChild(obj.name, obj);

            obj = new Button("btn01",null,"136","66","30","sta08_01_00_00:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("21");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","172",null,"140","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","172","150","140",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("24");
            obj.set_text("구성원");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","185",null,"115","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("23");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가\"/><Cell col=\"1\" text=\"구성원(영문)\"/><Cell col=\"2\" text=\"구성원(국문)\"/><Cell col=\"3\" text=\"소속기관\"/><Cell col=\"4\" text=\"이메일주소\"/><Cell col=\"5\" text=\"사무실전화번호\"/></Band><Band id=\"body\"><Cell text=\"가나\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" text=\"dasdm@naver.com\"/><Cell col=\"5\" textAlign=\"center\" text=\"02-1234-5678\"/></Band></Format></Formats>");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","310",null,"90","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","310","150","90",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("26");
            obj.set_text("운영규정");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new TextArea("txaPstatCn","157","317",null,"76","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_01","0","399",null,"120","-1",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_01","0","399","150","120",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("29");
            obj.set_text("협의내용\r\n(회의결과)");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new TextArea("txaPstatCn00","158","409",null,"100","6",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","155","271","194","30","1247",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("국제감축협의체 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button_list",null,"851","80","32","155",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03_00.form
            obj = new Layout("default","",0,0,this.div03_00.form,function(p){});
            this.div03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div03_00.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AgrStiplCmmInfoS01.xfdl","");
        this.registerScript("AgrStiplCmmInfoS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleScript Form
        * FILE NAME     : sampleScript.xfdl
        * DESCRIPTION   : 스크립트 기본
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.XX.XX    홍길동	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";


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

        	var objParam1 = { objDs:this.dsBbsInfo							// 바인딩 데이터셋
        					,sBindCol:"flmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"flmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };
        	this.divBoardInfo.form.divEtcMultiFile.form.fnInitRaonK(this, objParam1);


        	this.getOwnerFrame().form.fnLoadComplete('AgrStiplInfoS01');


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
        		case "DataBoardDtl" :
        			var flmno = this.dsBbsInfo.getColumn(0,'flmno');
        			if(!this.gfnIsNull(flmno))
        			{
        				this.divBoardInfo.form.divEtcMultiFile.form.fnSearchFile(flmno);
        			}
        		break;

        		default :
        		break;
        	}
        };
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

        /*
         // objArgs				- transaction arguments
         svcId    				transaction을 구분하기 위한 svc ID 문자열
         url	     			transaction을 요청할 주소,  서버측 Service 주소 문자열
         inds     				입력값으로 보낼 Dataset, a=b형태로 실제이름과 입력이름을 매칭
         outds    				처리 결과를 받을 Dataset,
         args	 				입력값으로 보낼 arguments, 변수=값을 빈칸으로 구분한다. strFormData='20220816'
         callback 				transaction의 결과를 받을 callback 함수 (ex. fnCallback)
         async    				비동기 여부(true: Async (Default), false : Sync), 생략하면 비동기
         dataType 				전송할 형태를 지정합니다.  0(XML 타입),1(Binary 타입), 2(SSV 타입) , 3(JSON 타입, Default)
         compress 				통신시 PostData를 압축할지 여부를 지정합니다. Default : false
         httptimeout			Http통신시 Wait Time(초)를 설정합니다. Default : this.Tran.defaultHttptimeout
         setWaitCursorYn		화면에 Wait Cursor의 표시 여부 (Y - 표시 (Default) / N - 표시안함) , setWaitCursor method 활용
         commCodeSvcId			공통코드조회 개발자의 서비스 ID (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeSearchDsNm 	공통코드조회 서비스 호출시 조회정보 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeResultDsNm 	공통코드조회 서비스 호출시 수신받을 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
        */

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {

        // 	// 공통Transaction 호출
        //  	var objArgs = {};
        //  	objArgs.svcId 			= "DataBoardDtl";
        //  	objArgs.url 			= "/common/board/selectBoardDtl.irs";
        //  	objArgs.inds			= "dsBbsInfo=dsBbsInfo";
        //  	objArgs.outds			= "dsBbsInfo=dsBbsInfo"
        //  	objArgs.args 			= "";
        //  	objArgs.callback		= "fnCallback";
        //
        //
        //  	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[DataBoardS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsBbsInfo.clearData();
        	this.dsBbsInfo.addRow();
        	this.dsBbsInfo.setColumn(0,'bbsSn',objArgs.bbsSn);
        	this.dsBbsInfo.setColumn(0,'bbsGroupMgno',objArgs.bbsGroupMgno);
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.divBoardInfo.form.btnUpdate.set_visible(true);
        	}else
        	{
        		this.divBoardInfo.form.btnUpdate.set_visible(false);
        	}
        	this.fnSearch();

        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */



        this.divBoardInfo_edtPostPstatNm_oneditclick = function(obj,e)
        {
        	var postBbsSn = this.dsBbsInfo.getColumn(0,'postBbsSn');
        	if(!this.gfnIsNull(postBbsSn))
        	{
        		this.dsBbsInfo.setColumn(0,'bbsSn',postBbsSn);
        		this.fnSearch();
        	}
        };

        this.divBoardInfo_edtRrePstatNm_oneditclick = function(obj,e)
        {
        	var preBbsSn = this.dsBbsInfo.getColumn(0,'preBbsSn');
        	if(!this.gfnIsNull(preBbsSn))
        	{
        		this.dsBbsInfo.setColumn(0,'bbsSn',preBbsSn);
        		this.fnSearch();
        	}
        };


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

        this.divBoardInfo_btnUpdate_onclick = function(obj,e)
        {
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		var objArgs = {};
        		objArgs.bbsGroupMgno = this.dsBbsInfo.getColumn(0,"bbsGroupMgno");
        		objArgs.bbsSn = this.dsBbsInfo.getColumn(0,"bbsSn");
        		objArgs.sts = "MOD"
        		this.getOwnerFrame().form.fnDataBoardRegCall(objArgs);
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}
        };

        this.div03_edt02_01_00_00_00_00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00_00_00_00.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.div03.form.sta08_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03.form.edt02_01_01_00_00_01_00.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.div03.form.edt02_01_00_00_00_00.addEventHandler("onchanged",this.div03_edt02_01_00_00_00_00_onchanged,this);
            this.div03_00.form.sta08_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03_00.form.edt02_01_01_00_00_01_00.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.div03_00.form.edt02_01_00_00_00_00.addEventHandler("onchanged",this.div03_edt02_01_00_00_00_00_onchanged,this);
            this.div03_00.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03_00.form.sta08_00_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03_00.form.sta08_00_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.sta00_00_00_00_00.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.Button_list.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
        };
        this.loadIncludeScript("AgrStiplCmmInfoS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
