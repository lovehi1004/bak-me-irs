(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCalendar");
            this.set_titletext("Calendar 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCal01", this);
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal02", this);
            obj._setContents("<ColumnInfo><Column id=\"FromDt\" type=\"STRING\" size=\"256\"/><Column id=\"ToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal03", this);
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal04", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","10","5","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1) Calendar - 일달력");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01","28","33","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일달력");
            obj.set_color("darkblue");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Dotum\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCalDay","186","38","124","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetDay","26","75","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일달력 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetDay","186","75","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDay","26","112","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일달력 값 설정하기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetDay","186","112","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("20230906");
            obj.set_text("20230906");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalDayEnable","96","155","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Enable");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalDayReadOnly","186","155","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("readOnly");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDay","338","38","235","205",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsCal01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"day\"/></Band><Band id=\"body\"><Cell text=\"bind:day\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDayDsPrn","588","38","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("gfnDsPrn");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","10","314","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("2) Calendar - From-To 달력");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02","28","342","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("From-To 달력");
            obj.set_color("darkblue");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Dotum\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","226","347","252","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetDayFromTo","26","384","174","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("FromTo달력 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetDayFrom","226","384","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDayFromTo","26","421","174","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("FromTo달력 값 설정하기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetDayFrom","226","421","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("20230906");
            obj.set_text("20230906");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalFromToEnable","96","464","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Enable");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalFromToReadOnly","226","464","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("readOnly");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFromTo","518","349","255","245",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsCal02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"FromDt\"/><Cell col=\"1\" text=\"ToDt\"/></Band><Band id=\"body\"><Cell text=\"bind:FromDt\"/><Cell col=\"1\" text=\"bind:ToDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFromToDsPrn","518","608","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("gfnDsPrn");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetDayTo","336","384","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetDayTo","336","421","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("20230910");
            obj.set_text("20230910");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","886","10","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("3) Calendar - 그리드 호출 달력");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCalendar","902","43","262","208",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsCal03");
            obj.set_cellmovingtype("col,band");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"day\"/></Band><Band id=\"body\"><Cell text=\"bind:day\" expandsize=\"30\" expandimage=\"url(&apos;theme://images/grd_WF_Search.png&apos;)\" expandshow=\"show\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\" calendarbuttonsize=\"0 0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExpand","1176","45","165","205",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsCal03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"day\"/></Band><Band id=\"body\"><Cell text=\"bind:day\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridExpandDsPrn","1176","260","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("gfnDsPrn");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04","884","316","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("4) Calendar - 월달력");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03","902","344","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("월달력");
            obj.set_color("darkblue");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Dotum\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMonth","1060","349","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("divCalMonth");
            obj.set_url("Frame_Common::comCalMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMonth","900","386","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("월달력 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMonth","1060","386","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMonth","900","423","144","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("월달력 값 설정하기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMonth","1060","423","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_value("202309");
            obj.set_text("202309");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalMonthEnable","970","466","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Enable");
            this.addChild(obj.name, obj);

            obj = new Button("btnCalMonthReadOnly","1060","466","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("readOnly");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMonth","1212","349","235","205",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("dsCal04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"month\"/></Band><Band id=\"body\"><Cell text=\"bind:month\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonthDsPrn","1462","349","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("gfnDsPrn");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalDay
            obj = new Layout("default","",0,0,this.divCalDay.form,function(p){});
            this.divCalDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalFromTo
            obj = new Layout("default","",0,0,this.divCalFromTo.form,function(p){});
            this.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMonth
            obj = new Layout("default","",0,0,this.divCalMonth.form,function(p){});
            this.divCalMonth.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtGetDay","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtSetDay","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtGetDayFrom","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtSetDayFrom","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtGetDayTo","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSetDayTo","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtGetMonth","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSetMonth","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalMonth.xfdl");
        };
        
        // User Script
        this.registerScript("sampleCalendar.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleCalendar Form
        * FILE NAME     : sampleCalendar.xfdl
        * DESCRIPTION   : 팝업 Calendar
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.24    TOBESOFT	     최초생성
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
        	//trace("[sampleCalendar] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 권한 참고
        	trace("sampleCalendar[1]==========="+JSON.stringify(this.gfnGetAuth(this)));
        	trace("sampleCalendar[2]==========="+this.gfnGetAuth(this, "InqAuthrt"));



        	// 일달력 초기화 호출
        	var objParam = { objDs:this.dsCal01									// 바인딩 데이터셋
        					,sBindCol:"day"										// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"day1"									// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCalDay.form.fnInitCommonCalendar(this, objParam);


        	// From-To 달력 초기화 호출
        	var objParam = { objDs:this.dsCal02									// 바인딩 데이터셋
        					,sBindFromCol:"FromDt"								// 바인딩 컬럼(From)
        					,sBindToCol:"ToDt"									// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"dayFromTo"							// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCalFromTo.form.fnInitCommonCalendar(this, objParam);


        	/*
        		월달력 바인딩 하여 사용하는 경우 주의사항
        		- calendar 컴포넌트 내부적으로 'yyyyMMdd' 로 동작하는 관계로 'yyyyMM' 을 설정해도 dataset 에는 'yyyyMMdd' 가 적용되는
        		이벤트가 발생하게 됩니다. (dsCal04_oncolumnchanged trace 참고)
        		바인딩하여 사용하는 경우 해당 컬럼에 대한 체크 코딩이 필요한 경우에는 dataset 의 oncolumnchanged 이벤트가 아닌
        		fnInitCommonCalendar 설정시 지정한 callback 함수에서 처리하시기 바랍니다.
        		oncolumnchanged 에서 처리할 경우에는 'yyyyMMdd' 가 e.newvalue 로 전달되니 substr(0,6) 형태로 'yyyyMM' 만 추출하여
        		후처리에 사용하시기 바랍니다.
        	*/

        	// 월달력 초기화 호출
        	var objParam = { objDs:this.dsCal04									// 바인딩 데이터셋
        					,sBindCol:"month"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"month"								// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divCalMonth.form.fnInitCommonCalendar(this, objParam);

        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************

        /**
         * @description 공통달력 호출 후 callback(선택)
         */
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "day1" :			// 일달력
        			// 후처리 코드

        			break;
        		case "dayFromTo" :		// From-To달력
        			// 후처리 코드

        			break;
        		case "month" :			// 월달력
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



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 일 달력

        /**
         * @description 일달력 값 가져오기 클릭시
        */
        this.btnGetDay_onclick = function(obj,e)
        {
        	this.edtGetDay.set_value(this.divCalDay.form.fnGetDay());
        };

        /**
         * @description 일달력 값 설정하기 클릭시
        */
        this.btnSetDay_onclick = function(obj,e)
        {
        	this.divCalDay.form.fnSetDay(this.edtSetDay.value);
        };

        /**
         * @description 일달력 > Enable 설정/해제
        */
        this.btnCalDayEnable_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalDay.form.fnEnable();
        	/*
        	// 설정하기
        	this.divCalDay.form.fnEnable(true);
        	// 해제하기
        	this.divCalDay.form.fnEnable(false);
        	*/
        };
        /**
         * @description 일달력 > readOnly 설정/해제
        */
        this.btnCalDayReadOnly_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalDay.form.fnReadOnly();
        	/*
        	// 설정하기
        	this.divCalDay.form.fnReadOnly(true);
        	// 해제하기
        	this.divCalDay.form.fnReadOnly(false);
        	*/
        };

        /**
         * @description 일달력 > 데이터 출력확인
        */
        this.btnDayDsPrn_onclick = function(obj,e)
        {
        	this.gfnDsPrn(this.dsCal01);
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // From-To 달력

        /**
         * @description From-To달력 값 가져오기 클릭시
        */
        this.btnGetDayFromTo_onclick = function(obj,e)
        {
        	var arrRtn = this.divCalFromTo.form.fnGetDay();
        	trace("[btnGetDayFromTo_onclick]arrRtn:"+arrRtn)
        	this.edtGetDayFrom.set_value(arrRtn[0]);
        	this.edtGetDayTo.set_value(arrRtn[1]);
        };

        /**
         * @description From-To달력 값 설정하기 클릭시
        */
        this.btnSetDayFromTo_onclick = function(obj,e)
        {
        	this.divCalFromTo.form.fnSetDay(this.edtSetDayFrom.value, this.edtSetDayTo.value);
        };

        /**
         * @description From-To달력 > Enable 설정/해제
        */
        this.btnCalFromToEnable_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalFromTo.form.fnEnable();
        	/*
        	// 설정하기
        	this.divCalFromTo.form.fnEnable(true);
        	// 해제하기
        	this.divCalFromTo.form.fnEnable(false);
        	*/
        };

        /**
         * @description From-To달력 > readOnly 설정/해제
        */
        this.btnCalFromToReadOnly_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalFromTo.form.fnReadOnly();
        	/*
        	// 설정하기
        	this.divCalFromTo.form.fnReadOnly(true);
        	// 해제하기
        	this.divCalFromTo.form.fnReadOnly(false);
        	*/
        };

        /**
         * @description From-To달력 > 데이터 출력확인
        */
        this.btnFromToDsPrn_onclick = function(obj,e)
        {
        	this.gfnDsPrn(this.dsCal02);
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 그리드 달력

        /**
         * @description 그리드 호출 달력
        */
        this.grdCalendar_onexpanddown = function(obj,e)
        {
        	var sBindColId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if ( sBindColId == "day")
        	{
        		this.gfnGridDayPop(obj, e);	//일력
        	}
        };

        /**
         * @description 그리드 > 데이터 출력확인
        */
        this.btnGridExpandDsPrn_onclick = function(obj,e)
        {
        	this.gfnDsPrn(this.dsCal03);
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////





        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 월 달력

        /**
         * @description 월달력 값 가져오기 클릭시
        */
        this.btnGetMonth_onclick = function(obj,e)
        {
        	this.edtGetMonth.set_value(this.divCalMonth.form.fnGetMonth());
        };

        /**
         * @description 월달력 값 설정하기 클릭시
        */
        this.btnSetMonth_onclick = function(obj,e)
        {
        	this.divCalMonth.form.fnSetMonth(this.edtSetMonth.value);
        };

        /**
         * @description 월달력 > Enable 설정/해제
        */
        this.btnCalMonthEnable_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalMonth.form.fnEnable();
        	/*
        	// 설정하기
        	this.divCalMonth.form.fnEnable(true);
        	// 해제하기
        	this.divCalMonth.form.fnEnable(false);
        	*/
        };
        /**
         * @description 월달력 > readOnly 설정/해제
        */
        this.btnCalMonthReadOnly_onclick = function(obj,e)
        {
        	// 설정되어 있으면 해제, 해제상태면 설정처리
        	this.divCalMonth.form.fnReadOnly();
        	/*
        	// 설정하기
        	this.divCalMonth.form.fnReadOnly(true);
        	// 해제하기
        	this.divCalMonth.form.fnReadOnly(false);
        	*/
        };

        /**
         * @description 월달력 > 데이터 출력확인
        */
        this.btnMonthDsPrn_onclick = function(obj,e)
        {
        	this.gfnDsPrn(this.dsCal04);
        };
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////



        this.dsCal01_oncolumnchanged = function(obj,e)
        {
        	trace("변경후 dsCal01_oncolumnchanged e.newvalue==="+e.newvalue);
        };

        this.dsCal02_oncolumnchanged = function(obj,e)
        {
        	trace("변경후 dsCal02_oncolumnchanged e.newvalue==="+e.newvalue);
        };

        this.dsCal03_oncolumnchanged = function(obj,e)
        {
        	trace("변경후 dsCal03_oncolumnchanged e.newvalue==="+e.newvalue);
        };

        this.dsCal04_oncolumnchanged = function(obj,e)
        {
        	trace("변경후 dsCal04_oncolumnchanged e.newvalue==="+e.newvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnGetDay.addEventHandler("onclick",this.btnGetDay_onclick,this);
            this.btnSetDay.addEventHandler("onclick",this.btnSetDay_onclick,this);
            this.btnCalDayEnable.addEventHandler("onclick",this.btnCalDayEnable_onclick,this);
            this.btnCalDayReadOnly.addEventHandler("onclick",this.btnCalDayReadOnly_onclick,this);
            this.btnDayDsPrn.addEventHandler("onclick",this.btnDayDsPrn_onclick,this);
            this.btnGetDayFromTo.addEventHandler("onclick",this.btnGetDayFromTo_onclick,this);
            this.btnSetDayFromTo.addEventHandler("onclick",this.btnSetDayFromTo_onclick,this);
            this.btnCalFromToEnable.addEventHandler("onclick",this.btnCalFromToEnable_onclick,this);
            this.btnCalFromToReadOnly.addEventHandler("onclick",this.btnCalFromToReadOnly_onclick,this);
            this.btnFromToDsPrn.addEventHandler("onclick",this.btnFromToDsPrn_onclick,this);
            this.grdCalendar.addEventHandler("onexpanddown",this.grdCalendar_onexpanddown,this);
            this.btnGridExpandDsPrn.addEventHandler("onclick",this.btnGridExpandDsPrn_onclick,this);
            this.btnGetMonth.addEventHandler("onclick",this.btnGetMonth_onclick,this);
            this.btnSetMonth.addEventHandler("onclick",this.btnSetMonth_onclick,this);
            this.btnCalMonthEnable.addEventHandler("onclick",this.btnCalMonthEnable_onclick,this);
            this.btnCalMonthReadOnly.addEventHandler("onclick",this.btnCalMonthReadOnly_onclick,this);
            this.btnMonthDsPrn.addEventHandler("onclick",this.btnMonthDsPrn_onclick,this);
            this.dsCal01.addEventHandler("oncolumnchanged",this.dsCal01_oncolumnchanged,this);
            this.dsCal02.addEventHandler("oncolumnchanged",this.dsCal02_oncolumnchanged,this);
            this.dsCal03.addEventHandler("oncolumnchanged",this.dsCal03_oncolumnchanged,this);
            this.dsCal04.addEventHandler("oncolumnchanged",this.dsCal04_oncolumnchanged,this);
        };
        this.loadIncludeScript("sampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
