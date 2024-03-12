(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleVaildation");
            this.set_titletext("validation 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1213</Col><Col id=\"Column4\">1000</Col></Row><Row><Col id=\"Column0\">2</Col></Row><Row><Col id=\"Column0\">3</Col></Row><Row><Col id=\"Column0\">test</Col><Col id=\"Column1\"/><Col id=\"Column2\">test</Col><Col id=\"Column3\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divValidate","10","290","540","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("whitesmoke");
            obj.getSetter("valid").set("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","2","6","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("10");
            obj.set_text("필수Combo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Combo("cboCombo01","104","6","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divValidate_form_cboCombo01_innerdataset = new nexacro.NormalDataset("divValidate_form_cboCombo01_innerdataset", obj);
            divValidate_form_cboCombo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(divValidate_form_cboCombo01_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput01","105","46","149","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("1");
            this.divValidate.addChild(obj.name, obj);

            obj = new Div("divCalDay","105","85","124","30",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("2");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput02","103","126","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("3");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput03","104","165","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("4");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput04","104","207","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("5");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput05","104","248","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("6");
            this.divValidate.addChild(obj.name, obj);

            obj = new Edit("edtInput06","104","287","150","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("7");
            this.divValidate.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","104","325","252","30",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("8");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            obj.set_text("");
            this.divValidate.addChild(obj.name, obj);

            obj = new Button("btnDivChk",null,"12","174","25","2",null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("9");
            obj.set_text("div validation check ");
            obj.set_cssclass("btn_WF_SchArea");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle02","2","46","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("11");
            obj.set_text("필수Edit");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle03","2","85","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("12");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle05","2","165","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("13");
            obj.set_text("최대값");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle06","2","207","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("14");
            obj.set_text("최소값");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle07","2","248","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("15");
            obj.set_text("최대길이");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle04","2","126","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("16");
            obj.set_text("필수(숫자)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staDesc01","266","165","244","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("17");
            obj.set_text("숫자이며 최대값은 10000");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staDesc02","266","207","244","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("18");
            obj.set_text("숫자이며 최소값은 10");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staTitle08","2","287","95","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("19");
            obj.set_text("최소길이");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staDesc02_00","266","248","244","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("20");
            obj.set_text("최대길이 10");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("staDesc02_00_00","266","287","244","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("21");
            obj.set_text("최소길이 3");
            this.divValidate.addChild(obj.name, obj);

            obj = new Static("Static01","2","325","81","24",null,null,null,null,null,null,this.divValidate.form);
            obj.set_taborder("22");
            obj.set_text("기간(Div)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divValidate.addChild(obj.name, obj);

            obj = new Grid("grdList","575","316",null,"228","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"135\"/><Column size=\"123\"/><Column size=\"118\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;gridCmmCheck==undefined || gridCmmCheck==&apos;&apos; || gridCmmCheck==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"필수값\"/><Cell col=\"3\" text=\"날짜\"/><Cell col=\"4\" text=\"최대길이(10)\"/><Cell col=\"5\" text=\"최소(3),최대(10)\"/><Cell col=\"6\" text=\"시간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:gridCmmCheck\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column1\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\" expandimage=\"url(&apos;theme://images/grd_WF_Search.png&apos;)\" expandshow=\"show\" expandsize=\"30\" calendarbuttonsize=\"0\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:Column3\"/><Cell col=\"6\" displaytype=\"mask\" edittype=\"mask\" text=\"bind:Column4\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdChk",null,"286","154","25","19",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid validation check ");
            obj.set_cssclass("btn_WF_SchArea");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtInfo","10","35",null,"245","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("Validation 설정\nName - validate\n단일컴포넌트 구분자 \",\" , 그리드 컬럼별 구분자 \"|\"  From~To 타이틀구분자 \"^\"\n단일컴포넌트 Value - title:메시지팝업에 사용될 항목명칭,검증키값1:검증값1,검증키값2:검증값2, ...\n그리드 Value - col:체크컬럼명,title:메시지팝업에 사용될 항목명칭,검증키값1:검증값1,검증키값2:검증값2| ...\n\n검증키값 : 검증값 상세\n필수입력여부 - required\n숫자체크 - digits\n날짜체크 - date\n최대값 - max : 최대값 비교용 숫자값 (초과비교)\n최소값 - min : 최소값 비교용 숫자값 (미만비교)\n최대길이 - maxlength : 최대값 비교용 숫자값 (초과비교)\n최소길이 - minlength : 최소값 비교용 숫자값 (미만비교)\n날짜From~To - titie:종료일자^시작일자  fromto : 비교용 콤포넌트 Full Path(dataset 컬럼명)");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","10","5","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Validation");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"286","31","24","214",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"286","31","24","178",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divValidate.form.divCalDay
            obj = new Layout("default","",0,0,this.divValidate.form.divCalDay.form,function(p){});
            this.divValidate.form.divCalDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divValidate.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divValidate.form.divCalFromTo.form,function(p){});
            this.divValidate.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divValidate.form
            obj = new Layout("default","",0,0,this.divValidate.form,function(p){});
            this.divValidate.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("sampleValidation.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleValidation Form
        * FILE NAME     : sampleValidation.xfdl
        * DESCRIPTION   : validation 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.24    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	// Validation 설정
        	// Name - validate
        	// 단일컴포넌트의 설정값 구분자 "," 	그리드 컬럼별 설정값 구분자 "|"
        	// 설정값 title 정보의 구분자 "^"
        	// 단일컴포넌트 validate - title:메시지팝업에 사용될 항목명칭,검증키값1[:검증값1],검증키값2[:검증값2], ...
        	// 그리드 validate - col:체크컬럼명,title:메시지팝업에 사용될 항목명칭,검증키값1[:검증값1],검증키값2[:검증값2]|col:체크컬럼명,title:메시지팝업에 사용될 항목명칭,검증키값1[:검증값1],검증키값2[:검증값2] ...

        	// 검증키값 / 검증값 상세
        	// required			필수입력여부

        	// length			길이지정				length:3			size 크기 지정
        	// rangelength		size 크기의 범위		rangelength:2:3		size 크기의 범위
        	// minlength		최소 size 크기 (이상)	minlength:2
        	// maxlength		최대 size 크기 (이하)	maxlength:7
        	// minlengthbyte	최소 size 크기(Byte) (이상) [단위:한글2,그외:1 Byte]		minlengthbyte:3
        	// maxlengthbyte	최대 size 크기(Byte) (이하) [단위:한글2,그외:1 Byte]		maxlengthbyte:7
        	// digits			숫자만
        	// min				숫자 최소값 비교용 (이상)		min:3
        	// max				숫자 최대값 비교용 (이하)		max:7
        	// declimit			소수점자리수	declimit:3
        	// date				날짜체크 (ymd)
        	// dateym			날짜체크 (ym)
        	// range			숫자범위(이상/이하)	range:40:100
        	// code				입력값이 검증값 목록내의 값인지 체크	code:1:2:3

        	// 2개 비교
        	// equalto			같은지 equalto:comparetarget(from 컬럼 or 컴포넌트)
        	// fromto			날짜 from ~ to 비교	fromto:comparetarget(from 컬럼 or 컴포넌트)
        	// comparebig		타 칼럼값보다 큰값인지 비교 		comparebig:comparetarget
        	// comparesmall		타 칼럼값보다 작은값인지 비교	comparesmall:comparetarget

        	// 추가 기능 항목
        	// isssn		주민등록번호
        	// isfrn		외국인등록번호
        	// isbzid		사업자등록번호
        	// isfirmid		법인등록번호
        	// iscardno		신용카드번호
        	// isemail		이메일

        */

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
        	this.grdList.griduserproperty = "!sort";
        	this.grdList.gridshowpopup = "false";
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
        	// Validation 설정
        	// Name - validate
        	// 단일컴포넌트 구분자 "," , 그리드 컬럼별 구분자 "|"  From~To 타이틀 구분자 "^"
        	// 단일컴포넌트 Value - title:메시지팝업에 사용될 항목명칭,검증키값1:검증값1,검증키값2:검증값2, ...
        	// 그리드 Value - col:체크컬럼명,title:메시지팝업에 사용될 항목명칭,검증키값1:검증값1,검증키값2:검증값2|col:체크컬럼명,title:메시지팝업에 사용될 항목명칭,검증키값1:검증값1,검증키값2:검증값2 ...

        	this.divValidate.form.cboCombo01.validate = "title:필수Combo,required";
        	this.divValidate.form.edtInput01.validate = "title:필수Edit,required";
        	this.divValidate.form.divCalDay.form.calYmd.validate = "title:필수(날짜),required,date";
        	this.divValidate.form.edtInput02.validate = "title:필수(숫자),required,digits";
        	this.divValidate.form.edtInput03.validate = "title:최대값,digits,max:10000";
        	this.divValidate.form.edtInput04.validate = "title:최소값,digits,min:10";
        	this.divValidate.form.edtInput05.validate = "title:최대길이,maxlength:10";
        	this.divValidate.form.edtInput06.validate = "title:최소길이,minlength:3";
        	this.divValidate.form.divCalFromTo.form.calFrom.validate = "title:시작일자,required,date";
        	this.divValidate.form.divCalFromTo.form.calTo.validate = "title:종료일자^시작일자,required,date,fromto:this.divValidate.form.divCalFromTo.form.calFrom.value";

        	this.grdList.validate = " col:Column0,title:필수값,required"
        	                      + "|col:Column1,title:날짜,required,date"
        						  + "|col:Column2,title:최대길이10,required,maxlength:10"
        						  + "|col:Column3,title:최소3최대10,required,minlength:3,maxlength:10"
        						  + "|col:Column4,title:시간,required,time";
        };


        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description Div Validation 체크
        */
        this.divValidate_btnDivChk_onclick = function(obj,e)
        {
        /*
         * @param {Object} obj				- Validation Check 대상 컴포넌트(Div, Tab, Grid)
         * @param {Boolean} bCheckCol		- 대상이 Grid일때 체크컬럼에 따라 validation체크할지 여부(default:true)
                                              (true:공통체크컬럼이 'Y'일때만 실행, false:체크컬럼상관없이 실행))
         * @param {String} sTargetFlag		- 대상이 Grid일때 전체Row를 대상으로 할지 여부(default:"U") (단, bCheckCol = true 이면 check인것만 실행)
        									- "U" : Dataset의 getRowType()기준으로 insert,update인 row만을 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
                                            - "A"  : 전체Row를 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
        */

        	var bSucc = this.gfnValidation(this.divValidate);
        	if ( bSucc ) alert("정합성체크 성공");
        };

        /**
         * @description Grid Validation 체크
        */
        this.btnGrdChk_onclick = function(obj,e)
        {
        /*
         * @param {Object} obj				- Validation Check 대상 컴포넌트(Div, Tab, Grid)
         * @param {Boolean} bCheckCol		- 대상이 Grid일때 체크컬럼에 따라 validation체크할지 여부(default:true)
                                              (true:공통체크컬럼이 'Y'일때만 실행, false:체크컬럼상관없이 실행))
         * @param {String} sTargetFlag		- 대상이 Grid일때 전체Row를 대상으로 할지 여부(default:"U") (단, bCheckCol = true 이면 check인것만 실행)
        									- "U" : Dataset의 getRowType()기준으로 insert,update인 row만을 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
                                            - "A"  : 전체Row를 대상으로 Validation실행(deleteRow()된 자료는 대상이 아님)
        */

        	// 전체 ROW 중에 getRowType()기준으로 insert,update인 row를 대상으로
        	// var bSucc = this.gfnValidation(this.grdList, false, "U");

        	// 전체 ROW , deleteRow()된 자료를 제외한 모든 상태를 대상으로
        	// var bSucc = this.gfnValidation(this.grdList, false, "A");

        	//디폴트 설정값 - 공통체크박스 : 체크된Row + getRowType()시 insert,update 인 Row 체크
        	var bSucc = this.gfnValidation(this.grdList);

        	if ( bSucc ) alert("정합성체크 성공");
        };

        /**
         * @description 행추가
        */
        this.btnAddRow_onclick = function(obj,e)
        {
        	this.dsList.addRow();
        };

        /**
         * @description 행삭제
        */
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	var i = this.dsList.rowposition;
        	this.dsList.deleteRow(i);
        };

        /**
         * @description 그리드 호출 달력
        */
        this.grdList_onexpanddown = function(obj,e)
        {
        	var sBindColId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if ( sBindColId == "Column1")
        	{
        		this.gfnGridDayPop(obj, e);	//일력
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divValidate.form.btnDivChk.addEventHandler("onclick",this.divValidate_btnDivChk_onclick,this);
            this.grdList.addEventHandler("onexpanddown",this.grdList_onexpanddown,this);
            this.btnGrdChk.addEventHandler("onclick",this.btnGrdChk_onclick,this);
            this.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
        };
        this.loadIncludeScript("sampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
