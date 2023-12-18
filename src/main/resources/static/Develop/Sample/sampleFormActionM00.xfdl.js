(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionM00");
            this.set_titletext("화면전환샘플 (목록)");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">5</Col><Col id=\"Column2\">사전승인신청</Col></Row><Row/><Row><Col id=\"Column1\">4</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divList_form_divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo01_innerdataset", obj);
            divList_form_divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divList_form_divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo02_innerdataset", obj);
            divList_form_divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divList_form_divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo03_innerdataset", obj);
            divList_form_divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","35","30","104","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("제·개정 구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","139","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divList_form_divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo02_00_innerdataset", obj);
            divList_form_divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">개정</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","299","30","80","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","379","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divList_form_divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo02_00_00_innerdataset", obj);
            divList_form_divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">평가</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">심의</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","539","30","101","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("방법론 분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","800","30","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("방법론 세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00","640","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divList_form_divSearch_form_cbo02_00_00_00_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo02_00_00_00_innerdataset", obj);
            divList_form_divSearch_form_cbo02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규등록</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직권등록</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo02_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00_00","931","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divList_form_divSearch_form_cbo02_00_00_00_00_innerdataset = new nexacro.NormalDataset("divList_form_divSearch_form_cbo02_00_00_00_00_innerdataset", obj);
            divList_form_divSearch_form_cbo02_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규등록</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직권등록</Col></Row></Rows>");
            obj.set_innerdataset(divList_form_divSearch_form_cbo02_00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1091","30","80","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("방법론명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt09","1171","30","200","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"대상국\"/><Cell col=\"4\" rowspan=\"2\" text=\"파리협정&#13;&#10;조항\"/><Cell col=\"5\" rowspan=\"2\" text=\"제·개정\"/><Cell col=\"6\" text=\"방법론명(원문)\"/><Cell col=\"7\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"8\" rowspan=\"2\" text=\"방법론 고유번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"방법론&#13;&#10;유효시작일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"11\" rowspan=\"2\" text=\"작업구분\"/><Cell col=\"12\" rowspan=\"2\" text=\"설명파일\"/><Cell row=\"1\" col=\"6\" text=\"방법론명(국문)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"사전승인신청\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"몽골\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"제6.2조\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"신규\"/><Cell col=\"6\" text=\"Greenhouse gas project\" textAlign=\"center\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" text=\"에너지 - 에너지세부분야\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" text=\"P62-VET-1A-56\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" text=\"2024-01-16\"/><Cell col=\"10\" rowspan=\"2\" textAlign=\"center\" text=\"환경부\"/><Cell col=\"11\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"12\" rowspan=\"2\" textAlign=\"center\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\" expandsize=\"16\" controlautosizingtype=\"none\" autosizecol=\"default\" autosizerow=\"default\"/><Cell row=\"1\" col=\"6\" textAlign=\"center\" text=\"베트남 국제감축 방법론\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static01","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>122</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"88","32","269","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("직권등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Button("Button00","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchDown");
            obj.set_visible("false");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,null,"114","32","152","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btn00","163","108","120","32",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("8");
            obj.set_text("divDetail 참고 1");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btn01","303","108","120","32",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("9");
            obj.set_text("divReg 참고 1");
            this.divList.addChild(obj.name, obj);

            obj = new Combo("cboCombo01","460","108","120","32",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCombo01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail","1662","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","1662","308","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("sampleFormActionM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionM00 Form
        * FILE NAME     : sampleFormActionM00.xfdl
        * DESCRIPTION   : 화면전환샘플 (목록)
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
        this.fvArgRecv = "";					// 전달된 arguments


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// div 위치 조정 , divDetail (상세) , divReg (등록)
        	this.divDetail.set_left(0);
        	this.divDetail.set_top(0);
        	this.divDetail.set_width(null);
        	this.divDetail.set_height(null);
        	this.divDetail.set_right(0);
        	this.divDetail.set_bottom(0);

        	this.divReg.set_left(0);
        	this.divReg.set_top(0);
        	this.divReg.set_width(null);
        	this.divReg.set_height(null);
        	this.divReg.set_right(0);
        	this.divReg.set_bottom(0);
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
        	trace("[sampleFormActionM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 상세, 등록화면 연결
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\agrstipl\ ==> Biz_agrstipl::xxxxx.xfdl
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\biz\aply\ ==> Biz_biz::aply/xxxxx.xfdl
        	this.divDetail.set_url("Develop_Sample::sampleFormActionS01.xfdl");
        	this.divReg.set_url("Develop_Sample::sampleFormActionS02.xfdl");

        	// 부모(M00) 에서 조회된 공통코드 dataset 은 divDetail , divReg 에서도 재활용할 수 있습니다.
        	// 사용법은 sampleFormActionS01.xfdl , sampleFormActionS02.xfdl 상단의 combo 참고
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsCombo01", groupId:"RDC_UNIT_CD"};
        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";
        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        //	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleFormActionM00][fnFormInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1);
        	trace("this.fvArgRecv.param2:"+this.fvArgRecv.param2);

        	if(this.fvArgRecv.param1 == "MAIN")
        	{
        		// 메인(M00) 처리만 진행
        	}
        	else if(this.fvArgRecv.param1 == "SUB01")
        	{
        		// divDetail 화면이 로딩되었으면 전환, 그렇지 않으면 timer 통해 로드된 후에 전환
        		if(!this.gfnIsNull(this.divDetail.url) && this.divDetail.form["fnChangeDiv"])
        		{
        			// divDetail 화면으로 전환 및 추가처리 진행
        			// 화면전환
        			this.divList.set_visible(false);
        			this.divDetail.set_visible(true);
        			this.divReg.set_visible(false);

        			// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        			this.divDetail.form.fnChangeDiv(this.fvArgRecv);
        		}
        		else
        		{
        			this.setTimer(9001, 100);
        		}
        	}
        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Frame.js > gfnCallOpenMenu, gfnOpenMenu  => frameWork > fnCallOpenedForm 에서 호출
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleFormActionM00][fnParamInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1);
        	trace("this.fvArgRecv.param2:"+this.fvArgRecv.param2);

        	if(this.fvArgRecv.param1 == "MAIN")
        	{
        		// 메인(M00) 화면으로 전환 및 추가처리 진행
        		this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        		this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        		this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        		// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        		this.getOwnerFrame().form.divWork.form.fnChangeDiv(this.fvArgRecv);
        	}
        	else if(this.fvArgRecv.param1 == "SUB01")
        	{
        		// divDetail 화면으로 전환 및 추가처리 진행
        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(true);
        		this.divReg.set_visible(false);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		this.divDetail.form.fnChangeDiv(this.fvArgRecv);
        	}
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
        			// divDetail 화면이 로딩되었으면 전환, 그렇지 않으면 timer 통해 로드된 후에 전환
        			if(!this.gfnIsNull(this.divDetail.url) && this.divDetail.form["fnChangeDiv"])
        			{
        				// divDetail 화면으로 전환 및 추가처리 진행
        				// 화면전환
        				this.divList.set_visible(false);
        				this.divDetail.set_visible(true);
        				this.divReg.set_visible(false);

        				// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        				this.divDetail.form.fnChangeDiv(this.fvArgRecv);
        			}
        			else
        			{
        				this.setTimer(9001, 100);
        			}
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

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
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
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/




        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param {object} objParam 전달 param object
         * @return N/A
        */
        this.fnChangeDiv = function(objParam)
        {
        	// TODO
        	trace("[sampleFormActionM00]fnChangeDiv =========================");
        	trace("objParam.param1:"+objParam.param1);
        	trace("objParam.param2:"+objParam.param2);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 직권등록 클릭시 등록화면으로 전환
        */
        this.divList_btnReg_onclick = function(obj,e)
        {
        	// 화면전환
        	this.divList.set_visible(false);
        	this.divDetail.set_visible(false);
        	this.divReg.set_visible(true);

        	var objParam = {param1:"SUB02",param2:"value2"};	// 전달값
        	// 등록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.divReg.form.fnChangeDiv(objParam);
        };

        /**
         * @description 조회목록 클릭시 처리
        */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 11)
        	{
        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail.set_visible(true);
        		this.divReg.set_visible(false);

        		var objParam = {param1:"SUB01",param2:"value2"};	// 전달값
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        		this.divDetail.form.fnChangeDiv(objParam);
        	}
        };

        /*
        	개발시 각 div (divDetail , divReg) 접근 참고용
        	divDetail , divReg 의 내부 컴포넌트 접근시 해당 화면의 컴포넌트 혹은 정보가 조회된 이후에 참고해야
        	정확한 정보를 확인할 수 있습니다. (시점은 개발시 주의하여 작성합니다.)
        */
        this.divList_btn00_onclick = function(obj,e)
        {
        	// divDetail > dsList01 정보 참고
        	// this.divDetail.form : sampleFormActionS01.xfdl 화면의 this 와 동일
        	trace("this.divDetail.form.dsList01.saveXML():\n"+this.divDetail.form.dsList01.saveXML());
        };

        this.divList_btn01_onclick = function(obj,e)
        {
        	// divReg > dsList02 정보 참고
        	// this.divReg.form : sampleFormActionS02.xfdl 화면의 this 와 동일
        	trace("this.divReg.form.dsList02.saveXML():\n"+this.divReg.form.dsList02.saveXML());
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
            this.divList.form.btn00.addEventHandler("onclick",this.divList_btn00_onclick,this);
            this.divList.form.btn01.addEventHandler("onclick",this.divList_btn01_onclick,this);
        };
        this.loadIncludeScript("sampleFormActionM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
