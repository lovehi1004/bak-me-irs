(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalDay");
            this.set_titletext("일달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(124,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdvCalYMD","0","24","249","346",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_CAL_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleBg","12","12",null,"45","12",null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_CalHead");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Combo("cboMonth","132","22","51","25",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            var pdvCalYMD_form_cboMonth_innerdataset = new nexacro.NormalDataset("pdvCalYMD_form_cboMonth_innerdataset", obj);
            pdvCalYMD_form_cboMonth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">1</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(pdvCalYMD_form_cboMonth_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN1","17","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("51");
            obj.set_text("SUN");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#f13656");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN2","48","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("52");
            obj.set_text("MON");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN3","79","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("53");
            obj.set_text("TUE");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN4","110","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("54");
            obj.set_text("WED");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN5","141","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("55");
            obj.set_text("THU");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN6","172","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("56");
            obj.set_text("FRI");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN7","203","57","30","30",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("57");
            obj.set_text("SAT");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#1694dc");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD1","20","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("6");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD2","51","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("7");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD3","82","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD4","113","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("9");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD5","144","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD6","176","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD7","207","88","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("12");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD8","20","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("13");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD9","51","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("14");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD10","82","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD11","113","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("16");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD12","145","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("17");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD13","176","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("18");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD14","207","121","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("19");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD15","20","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("20");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD16","51","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("21");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD17","82","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD18","113","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("23");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxtS");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD19","145","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD20","176","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("25");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD21","207","154","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("26");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD22","20","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD23","51","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD24","82","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("29");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD25","113","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD26","145","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Today");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD27","176","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD28","207","187","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("33");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD29","20","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD30","51","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("35");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD31","82","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("36");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD32","113","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("37");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD33","145","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("38");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD34","176","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("39");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD35","207","220","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("40");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD36","20","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("41");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD37","51","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("42");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD38","82","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("43");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD39","113","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("44");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD40","145","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("45");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD41","176","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("46");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staD42","207","253","23","23",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("47");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Button("btnMonthPrev",null,"26","27","16","210",null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalPrev");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Button("btnMonthNext","210","26","27","16",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_CalNext");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Button("btnToDay",null,"294","45","23","181",null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_CAL_Today");
            obj.set_wordWrap("none");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"294","45","23","23",null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_CAL_Close");
            obj.set_wordWrap("none");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Combo("cboYear","48","22","66","25",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            obj.set_value("");
            obj.set_index("-1");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staYYYY","117","24","13","20",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_CAL_HeadTxt");
            obj.set_text("년");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Static("staMM","186","24","13","20",null,null,null,null,null,null,this.pdvCalYMD.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_CAL_HeadTxt");
            obj.set_text("월");
            this.pdvCalYMD.addChild(obj.name, obj);

            obj = new Calendar("calYmd","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_displaynulltext("____-__-__");
            this.addChild(obj.name, obj);

            obj = new Button("btnYMD","calYmd:-24","4","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalDropbutton");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCalYMD.form
            obj = new Layout("default","",0,0,this.pdvCalYMD.form,function(p){});
            this.pdvCalYMD.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",124,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalDay.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comCalDay Form
        * FILE NAME     : comCalDay.xfdl
        * DESCRIPTION   : 공통 일달력
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.06    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvDDToday = "";					// 선택날짜
        this.fvForm = "";						// 부모폼
        this.fvCallBack = "";					// 콜백함수
        this.fvPopupId = "";					// 콜백ID
        this.fvMonthLastDay = [31,0,31,30,31,30,31,31,30,31,30,31];		// 월별 마지막 일자, 2월은 별도계산처리
        this.fvSundayPosition = "F";			// 일~토 가한주면 F, 월~일 가한주면 L

        this.fvBtnBeforeDayCssclass = "sta_CAL_Trailingday"			// 이전/이후 월의 일자 cssclass
        this.fvBtnToDayCssclass = "sta_CAL_Today"					// 금일 cssclass	sta_PO_ToDay
        this.fvBtnSelDayCssclass = "sta_CAL_DayTxtS"				// 선택일 cssclass	sta_PO_Day_Sel
        this.fvBtnNormalDayCssclass = "sta_CAL_DayTxt"				// 평일 cssclass		sta_PO_Day
        this.fvBtnSatDayCssclass = "sta_CAL_Satday"					// 토요일 cssclass	sta_PO_SaturDay
        this.fvBtnSunDayCssclass = "sta_CAL_Sunday"					// 일요일 cssclass 	sta_PO_SunDay


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.fvDDToday = this.gfnGetDate(); 		// 오늘날자세팅
        	this.calYmd.set_value(null);
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
        	//trace("[comCalDay] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 년도 inner dataset 데이터 생성
        	var sBaseYear = this.fvDDToday.substr(0,4);
        	this.fnMakeDsYearData(sBaseYear);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 년도 inner dataset 데이터 생성
         * @param {string}	sBaseYear	- 기준년도
         * @return N/A
        */
        this.fnMakeDsYearData = function(sBaseYear)
        {
        	this.dsYear.clearData();
        	var nStart, nEnd;
        	var i, nRow;

        	if(this.gfnIsNull(sBaseYear))
        	{
        		sBaseYear = nexacro.toNumber(this.fvDDToday.substr(0,4));
        	}

        	sBaseYear = nexacro.toNumber(sBaseYear);
        	nStart = nexacro.toNumber(sBaseYear-10);
        	nEnd = nexacro.toNumber(sBaseYear+10);

        	this.dsYear.set_enableevent(false);
        	for(i=nStart;i<=nEnd;i++)
        	{
        		nRow = this.dsYear.addRow();
        		this.dsYear.setColumn(nRow, "codecolumn", i);
        		this.dsYear.setColumn(nRow, "datacolumn", i);
        	}
        	this.dsYear.set_enableevent(true);
        };

        /**
         * @desc 달력 TItle 초기화
         * @param N/A
         * @return N/A
        */
        this.fnTitleSet = function()
        {
        	if(this.fvSundayPosition == "L")
        	{
        		this.pdvCalYMD.form.staDN1.set_text("MON"); // ("월");
        		this.pdvCalYMD.form.staDN2.set_text("TUE"); // ("화");
        		this.pdvCalYMD.form.staDN3.set_text("WED"); // ("수");
        		this.pdvCalYMD.form.staDN4.set_text("THU"); // ("목");
        		this.pdvCalYMD.form.staDN5.set_text("FRI"); // ("금");
        		this.pdvCalYMD.form.staDN6.set_text("SAT"); // ("토");
        		this.pdvCalYMD.form.staDN7.set_text("SUN"); // ("일");
        	}
        	else
        	{
        		this.pdvCalYMD.form.staDN1.set_text("SUN"); // ("일");
        		this.pdvCalYMD.form.staDN2.set_text("MON"); // ("월");
        		this.pdvCalYMD.form.staDN3.set_text("TUE"); // ("화");
        		this.pdvCalYMD.form.staDN4.set_text("WED"); // ("수");
        		this.pdvCalYMD.form.staDN5.set_text("THU"); // ("목");
        		this.pdvCalYMD.form.staDN6.set_text("FRI"); // ("금");
        		this.pdvCalYMD.form.staDN7.set_text("SAT"); // ("토");
        	}
        };

        /**
         * @desc 일달력 초기화
         * @param {Object}	onjForm 	- 부모폼 object
         * @param {Object} 	objParam	- 전달 param
         *								objDs - 바인딩 데이터셋
         *								sBindCol - 바인딩 컬럼
         *								sCallbackFunc - 콜백함수
         *								sCallbackId	- 콜백ID
         *                              bAutoSelect - 일자 autoselect여부("true" 설정시 적용)
         * @return N/A
        */
        this.fnInitCommonCalendar = function(objForm, objParam)
        {
        	var sDayItem = "dayItem";
        	this.fvForm = objForm;
        	this.fvCallBack = objParam.sCallbackFunc;	// 콜백함수
        	this.fvPopupId = objParam.sCallbackId;		// 콜백ID

        	if(!this.gfnIsNull(objParam))
        	{
        		// 바인딩 처리
        		if(!this.gfnIsNull(this.binds[sDayItem]))
        		{
        			var objItem = this.removeChild(sDayItem);
        			objItem.destroy();
        			this.calYmd.set_value(null);
        		}

        		if(!this.gfnIsNull(objParam.objDs) && !this.gfnIsNull(objParam.sBindCol))
        		{
        			var objBindItem = new BindItem();
        			objBindItem.init(sDayItem, this.calYmd.name, "value", objParam.objDs.name, objParam.sBindCol);
        			this.addChild(sDayItem, objBindItem);
        			objBindItem.bind();
        		}

        		//일자 autoselect여부
        		if( objParam.bAutoSelect == true || objParam.bAutoSelect == "true")
        		{
        			this.calYmd.set_autoselect(true);
        		}
        	}
        };

        /**
         * @desc 일달력 값 가져오기
         * @param N/A
         * @return N/A
        */
        this.fnGetDay = function()
        {
        	var sRtn = "";
        	sRtn = this.calYmd.value;

        	return sRtn;
        };

        /**
         * @desc 일달력 값 설정하기
         * @param {String}	sValue 	- 설정값 , YYYYMMDD
         * @return N/A
        */
        this.fnSetDay = function(sValue)
        {
        	sValue = this.gfnGetDigit(sValue);

        	if(this.gfnIsNull(sValue))
        	{
        		sValue = null;
        	}

        	this.calYmd.set_value(sValue);
        };

        /**
         * @desc 달력 cssclass 설정하기
         * @param {String}	sValue 	- 설정값
         * @return N/A
        */
        this.fnSetCssclass = function(sValue)
        {
        	if(this.gfnIsNull(sValue)) sValue = "";

        	this.calYmd.set_cssclass(sValue);
        };

        /**
         * @desc 일달력 Enable 설정
         * @param {Boolean}	bFlag 	- true / false
         * @return N/A
        */
        this.fnEnable = function(bFlag)
        {
        	// Enable
        	if(!this.gfnIsNull(bFlag))
        	{
        		if(bFlag)
        		{
        			this.calYmd.set_enable(true);
        			this.btnYMD.set_enable(true);
        		}
        		else
        		{
        			this.calYmd.set_enable(false);
        			this.btnYMD.set_enable(false);
        		}
        	}
        	else
        	{
        		if(this.calYmd.enable)
        		{
        			this.calYmd.set_enable(false);
        			this.btnYMD.set_enable(false);
        		}
        		else
        		{
        			this.calYmd.set_enable(true);
        			this.btnYMD.set_enable(true);
        		}
        	}
        };

        /**
         * @desc 일달력 ReadOnly 설정
         * @param {Boolean}	bFlag 	- true / false
         * @return N/A
        */
        this.fnReadOnly = function(bFlag)
        {
        	// ReadOnly
        	if(!this.gfnIsNull(bFlag))
        	{
        		if(bFlag)
        		{
        			this.calYmd.set_readonly(true);
        			this.btnYMD.set_enable(false);
        		}
        		else
        		{
        			this.calYmd.set_readonly(false);
        			this.btnYMD.set_enable(true);
        		}
        	}
        	else
        	{
        		if(this.calYmd.readonly)
        		{
        			this.calYmd.set_readonly(false);
        			this.btnYMD.set_enable(true);
        		}
        		else
        		{
        			this.calYmd.set_readonly(true);
        			this.btnYMD.set_enable(false);
        		}
        	}
        };

        /**
         * @desc 일달력 날짜 설정
         * @param {String}	sYY 	- 년도
         * @param {String}	sMM 	- 월
         * @param {String}	sDD 	- 일
         * @return N/A
        */
        this.fnSetCalendar = function(sYY, sMM, sDD)
        {
        	if(sDD == null) sDD = "";
        	if(sDD.length == 0) sDD = this.gfnGetDate().substr(6,2);

        	var sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;

        	if(!this.gfnIsDate(sTempDate))
        	{
        		sDD = this.gfnGetLastDateNum(sTempDate.substr(0,6)+"01");	//말일로 설정
        		sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;
        	}

        	this.fvDDToday = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD.toString().padLeft(2,"0");

        	// 현재 년월 여부, 오늘날짜의 색상처리를 위해
        	var bCurMonth = false;
        	if((this.gfnGetDate().substr(0,4) == sYY) && (this.gfnGetDate().substr(4,2) == sMM))
        	{
        		bCurMonth = true;
        	}

        	this.pdvCalYMD.form.cboYear.set_value(nexacro.toNumber(sYY));		// Year setting
        	this.pdvCalYMD.form.cboMonth.set_index(parseInt(sMM)-1);			// Month setting

        	var nLastDay = this.fvMonthLastDay[parseInt(sMM)-1];
        	// 2월달 마지막 일 setting
        	if(parseInt(sMM) == 2)  // 2월달 이면...
        	{
        		nLastDay = this.gfnGetLastDateNum(sYY+sMM+"01");
        	}

        	// 0 (일요일) 부터 6 (토요일) 사이의 요일 코드값
        	var nFirstDay = this.gfnStrToDate(sYY + sMM + "01").getDay();

        	if(this.fvSundayPosition == "L")
        	{
        		nFirstDay = this.gfnDecode(nFirstDay,0,7,nFirstDay);
        	}
        	else
        	{
        		nFirstDay++; // 시작일자 요일
        	}

        	var sLastDay = new String(nLastDay);
        	var nLDay = this.gfnStrToDate(sYY + sMM + sLastDay.padLeft(2, "0")).getDay();

        	if(this.fvSundayPosition == "L")
        	{
        		nLDay = this.gfnDecode(nLDay,0,7,nLDay);
        	}
        	else
        	{
        		nLDay++;
        	}

        	var objDay;

        	// Day 초기화
        	for(var i=1;i<=42;i++)
        	{
        		objDay = this.pdvCalYMD.form["staD"+i];
        		objDay.set_cssclass(this.fvBtnBeforeDayCssclass);
        		objDay.set_text("");
        	}

        	// Dummy 자리
        	for(var i=1;i<nFirstDay;i++)
        	{
        		objDay = this.pdvCalYMD.form["staD"+i];
        		objDay.set_visible(true);
        	}

        	var nCurLine = 0;

        	for(var i=1;i<=nLastDay;i++)
        	{
        		objDay = this.pdvCalYMD.form["staD"+nFirstDay];
        		objDay.set_text(i);

        		// 토/일 , 0 (일요일) 부터 6 (토요일)
        		var strI = new String(i);
        		if(this.gfnStrToDate(sYY + sMM + strI.padLeft(2, "0")).getDay() == 0)
        		{
        			objDay.set_cssclass(this.fvBtnSunDayCssclass);
        		}
        		else if(this.gfnStrToDate(sYY + sMM + strI.padLeft(2, "0")).getDay() == 6)
        		{
        			objDay.set_cssclass(this.fvBtnSatDayCssclass);
        		}
        		else
        		{
        			objDay.set_cssclass(this.fvBtnNormalDayCssclass);
        		}

        		// 오늘
        		if(bCurMonth)
        		{
        			if(parseInt(this.gfnGetDate().substr(6,2)) == i)
        			{
        				objDay.set_cssclass(this.fvBtnToDayCssclass);
        			}
        		}

        		// 선택일
        		if(parseInt(sDD) == i && !this.gfnIsNull(this.calYmd.value)
        			&& (this.calYmd.value.substr(0,4) == this.pdvCalYMD.form.cboYear.value
        				&& this.calYmd.value.substr(4,2) == this.pdvCalYMD.form.cboMonth.value)	)
        		{
        			objDay.set_cssclass(this.fvBtnSelDayCssclass);
        		}

        		objDay.set_visible(true);
        		nFirstDay++;
        	}

        	// Dummy 자리
        	var nDum;
        	if(nFirstDay <= 29)
        	{
        		nDum = 28;
        	}
        	else if(nFirstDay <= 36)
        	{
        		nDum = 35;
        	}
        	else
        	{
        		nDum = 42;
        	}

        	for(var i=(nLastDay+1);i<=nDum;i++)
        	{
        		objDay = this.pdvCalYMD.form["staD"+i];
        		objDay.set_visible(true);
        	}
        };


        /**
         * @desc 일달력 cssclass 초기화
         * @param N/A
         * @return N/A
        */
        this.fnSetInitCssclass = function()
        {
        	var i;
        	var objBtn;
        	var sYYYY;

        	for(i=1;i<43;i++)
        	{
        		objBtn = this.pdvCalYMD.form["staD"+i];
        		if(!this.gfnIsNull(objBtn))
        		{
        			objBtn.set_cssclass(this.fvBtnNormalMonthCssclass);
        		}
        	}

        	if(!this.gfnIsNull(this.pdvCalYYMM.form.staYYYY.text.replace("년","").substr(0,4)))
        	{
        		sYYYY = this.pdvCalYYMM.form.staYYYY.text.substr(0,4);
        	}
        	else if(!this.gfnIsNull(this.calYm.value))
        	{
        		sYYYY = this.calYm.value.substr(0,4);
        	}


        	if(!this.gfnIsNull(sYYYY) && sYYYY == this.fvMMToday.substr(0,4))
        	{
        		objBtn = this.pdvCalYYMM.form["btn"+nexacro.toNumber(this.fvMMToday.substr(4,2))];
        		objBtn.set_cssclass(this.fvBtnTodayMonthCssclass);
        	}
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 일달력 버튼 클릭시
        */
        this.btnYMD_onclick = function(obj,e)
        {
        	var sDate = this.calYmd.value;
        	if( this.gfnIsNull(sDate) )
        	{
        		sDate = this.fvDDToday;
        	}
        	else
        	{
        		this.fvDDToday = sDate;
        	}

        	this.fnSetCalendar(sDate.substr(0,4), sDate.substr(4,2), sDate.substr(6,2));
        	this.pdvCalYMD.form.cboYear.set_value(sDate.substr(0,4));
        	this.pdvCalYMD.form.cboMonth.set_value(sDate.substr(4,2));
        	this.pdvCalYMD.trackPopupByComponent(this.calYmd, 0 - 11, this.calYmd.getOffsetHeight() - 11);
        };

        /**
         * @description 월 이전버튼 클릭시
        */
        this.pdvCalYMD_btnMonthPrev_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalYMD.form.cboYear.value;
        	var sMonth = this.pdvCalYMD.form.cboMonth.value;
        	var sDay = this.fvDDToday.substr(6,2);

        	if(this.gfnIsNull(sYear)) sYear = this.fvDDToday.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvDDToday.substr(4,2);
        	if(this.gfnIsNull(sDay)) sDay = this.fvDDToday.substr(6,2);

        	if(sMonth == "01")
        	{
        		sYear = nexacro.toNumber(sYear) -1;
        		this.fnMakeDsYearData(sYear);
        		this.pdvCalYMD.form.cboYear.set_value(sYear);
        		sMonth = "12";
        		this.pdvCalYMD.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) - 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalYMD.form.cboMonth.set_value(sMonth);
        	}

        	this.fvDDToday = this.pdvCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.pdvCalYMD.form.cboMonth.value+sDay;
        	this.fnSetCalendar(this.pdvCalYMD.form.cboYear.value.toString().padLeft(4,"0"), this.pdvCalYMD.form.cboMonth.value, sDay);
        };

        /**
         * @description 월 다음버튼 클릭시
        */
        this.pdvCalYMD_btnMonthNext_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalYMD.form.cboYear.value;
        	var sMonth = this.pdvCalYMD.form.cboMonth.value;
        	var sDay = this.fvDDToday.substr(6,2);

        	if(this.gfnIsNull(sYear)) sYear = this.fvDDToday.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvDDToday.substr(4,2);

        	if(sMonth == "12")
        	{
        		sYear = nexacro.toNumber(sYear) + 1;
        		this.fnMakeDsYearData(sYear);
        		this.pdvCalYMD.form.cboYear.set_value(sYear);
        		sMonth = "01";
        		this.pdvCalYMD.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) + 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalYMD.form.cboMonth.set_value(sMonth);
        	}

        	this.fvDDToday = this.pdvCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.pdvCalYMD.form.cboMonth.value+sDay;
        	this.fnSetCalendar(this.pdvCalYMD.form.cboYear.value.toString().padLeft(4,"0"), this.pdvCalYMD.form.cboMonth.value, sDay);
        };

        /**
         * @description 년 콤보값 변경시
        */
        this.pdvCalYMD_cboYear_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.fnMakeDsYearData(e.postvalue);
        		this.fnSetCalendar(e.postvalue.padLeft(4,"0"), this.pdvCalYMD.form.cboMonth.value, "");
        	}
        };
        /**
         * @description 월 콤보값 변경시
        */
        this.pdvCalYMD_cboMonth_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.fnSetCalendar(this.pdvCalYMD.form.cboYear.value.toString().padLeft(4,"0"), this.pdvCalYMD.form.cboMonth.value, "");
        	}
        };

        /**
         * @description 일자 클릭시
        */
        this.pdvCalYMD_staD_onclick = function(obj,e)
        {
        	var sDay = obj.text;
        	if(!this.gfnIsNull(sDay))
        	{
        		var sDate = this.pdvCalYMD.form.cboYear.value.toString().padLeft(4, "0") + this.pdvCalYMD.form.cboMonth.value.toString().padLeft(2, "0")+ obj.text.toString().padLeft(2, "0");
        		this.calYmd.set_value(sDate);

        		if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds["dayItem"]))
        		{
        			var objDs = this.binds["dayItem"].datasetid;
        			this.fvForm[objDs].set_enableevent(false);
        			this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayItem"].columnid, sDate);
        			this.fvForm[objDs].set_enableevent(true);
        		}

        		if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        		{
        			this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, sDate);		// 본 화면에 콜백
        		}
        		this.pdvCalYMD.closePopup();
        	}
        };

        /**
         * @description 선택 클릭시
        */
        this.pdvCalYMD_btnOk_onclick = function(obj,e)
        {
        	if(!this.gfnIsNull(this.fvDDToday))
        	{
        		var sDate = this.fvDDToday;
        		this.calYmd.set_value(sDate);

        		if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds))
        		{
        			var objDs = this.binds["dayItem"].datasetid;
        			this.fvForm[objDs].set_enableevent(false);
        			this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayItem"].columnid, sDate);
        			this.fvForm[objDs].set_enableevent(true);
        		}

        		if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        		{
        			this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, sDate);		// 본 화면에 콜백
        		}
        		this.pdvCalYMD.closePopup();
        	}
        };

        /**
         * @description 오늘 클릭시
        */
        this.pdvCalYMD_btnToDay_onclick = function(obj,e)
        {
        	this.fvDDToday = this.gfnGetDate();
        	var sDate = this.fvDDToday;
        	this.calYmd.set_value(sDate);

        	if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds))
        	{
        		var objDs = this.binds["dayItem"].datasetid;
        		this.fvForm[objDs].set_enableevent(false);
        		this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayItem"].columnid, sDate);
        		this.fvForm[objDs].set_enableevent(true);
        	}

        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, sDate);		// 본 화면에 콜백
        	}
        	this.pdvCalYMD.closePopup();
        };

        /**
         * @description 닫기 클릭시
        */
        this.pdvCalYMD_btnCancel_onclick = function(obj,e)
        {
        	this.pdvCalYMD.closePopup();
        };

        /**
         * @description 칼렌다의 날짜가 변경된 후 발생하는 이벤트
        */
        this.calYmd_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) obj.set_value(null);

        	//사용자 콜백함수 호출
        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, this.fnGetDay());		// 본 화면에 콜백
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.pdvCalYMD.form.cboMonth.addEventHandler("onitemchanged",this.pdvCalYMD_cboMonth_onitemchanged,this);
            this.pdvCalYMD.form.staD1.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD2.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD3.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD4.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD5.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD6.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD7.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD8.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD9.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD10.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD11.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD12.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD13.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD14.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD15.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD16.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD17.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD18.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD19.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD20.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD21.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD22.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD23.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD24.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD25.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD26.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD27.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD28.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD29.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD30.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD31.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD32.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD33.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD34.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD35.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD36.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD37.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD38.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD39.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD40.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD41.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.staD42.addEventHandler("onclick",this.pdvCalYMD_staD_onclick,this);
            this.pdvCalYMD.form.btnMonthPrev.addEventHandler("onclick",this.pdvCalYMD_btnMonthPrev_onclick,this);
            this.pdvCalYMD.form.btnMonthNext.addEventHandler("onclick",this.pdvCalYMD_btnMonthNext_onclick,this);
            this.pdvCalYMD.form.btnToDay.addEventHandler("onclick",this.pdvCalYMD_btnToDay_onclick,this);
            this.pdvCalYMD.form.btnCancel.addEventHandler("onclick",this.pdvCalYMD_btnCancel_onclick,this);
            this.pdvCalYMD.form.cboYear.addEventHandler("onitemchanged",this.pdvCalYMD_cboYear_onitemchanged,this);
            this.calYmd.addEventHandler("onchanged",this.calYmd_onchanged,this);
            this.btnYMD.addEventHandler("onclick",this.btnYMD_onclick,this);
        };
        this.loadIncludeScript("comCalDay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
