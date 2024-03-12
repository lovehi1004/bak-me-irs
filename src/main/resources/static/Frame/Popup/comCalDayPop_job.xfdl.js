(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalDayPop");
            this.set_titletext("일달력(그리드)");
            if (Form == this.constructor)
            {
                this._setFormPosition(268,356);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCalYMD","0","0","268","356",null,null,null,null,null,null,this);
            obj.set_cssclass("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleBg","0","0",null,"20","0",null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_POP_TitleBg");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Combo("cboMonth","135","35","60","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            var divCalYMD_form_cboMonth_innerdataset = new nexacro.NormalDataset("divCalYMD_form_cboMonth_innerdataset", obj);
            divCalYMD_form_cboMonth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">1</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(divCalYMD_form_cboMonth_innerdataset);
            obj.set_text("10월");
            obj.set_index("9");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN1","20","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("48");
            obj.set_text("일");
            obj.set_cssclass("sta_PO_WeekSunday");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN2","53","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("49");
            obj.set_text("월");
            obj.set_cssclass("sta_PO_WeekDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN3","86","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("50");
            obj.set_text("화");
            obj.set_cssclass("sta_PO_WeekDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN4","119","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("51");
            obj.set_text("수");
            obj.set_cssclass("sta_PO_WeekDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN5","152","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("52");
            obj.set_text("목");
            obj.set_cssclass("sta_PO_WeekDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN6","185","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("53");
            obj.set_text("금");
            obj.set_cssclass("sta_PO_WeekDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staDN7","218","65","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("54");
            obj.set_text("토");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD1","20","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD2","53","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD3","86","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("5");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD4","119","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("6");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD5","152","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("7");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD6","185","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD7","218","100","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("9");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD8","20","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SunDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD9","53","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD10","86","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("12");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD11","119","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("13");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD12","152","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("14");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD13","185","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD14","218","133","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("16");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD15","20","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("17");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SunDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD16","53","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("18");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD17","86","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("19");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD18","119","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("20");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD19","152","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("21");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD20","185","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD21","218","166","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("23");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD22","20","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SunDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD23","53","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("25");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD24","86","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("26");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD25","119","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day_Sel");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD26","152","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_ToDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD27","185","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("29");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD28","218","199","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD29","20","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SunDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD30","53","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD31","86","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("33");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD32","119","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD33","152","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("35");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD34","185","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("36");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD35","218","232","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("37");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SaturDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD36","20","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("38");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_SunDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD37","53","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("39");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD38","86","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("40");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD39","119","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("41");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_Day");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD40","152","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("42");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD41","185","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("43");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staD42","218","265","30","30",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("44");
            obj.set_text("1");
            obj.set_cssclass("sta_PO_TrailingDay");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide01","20","20","228","15",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("55");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide02","0","20","20",null,null,"0",null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("56");
            obj.set_text("20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide03","248","20","20",null,null,"0",null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("57");
            obj.set_text("20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide04","20","55","228","10",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("58");
            obj.set_text("h10");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Button("btnMonthNext","224","35","21","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_PO_MonthNext");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide06","20","295","228","10",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("59");
            obj.set_text("h10");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide05","20","95","228","5",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("60");
            obj.set_text("5");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide08","50","101","3","195",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("61");
            obj.set_text("3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide09","20","130","228","3",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("63");
            obj.set_text("3");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Button("btnMonthPrev",null,"35","21","20","224",null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_PO_MonthPrev");
            obj.set_text("");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staGuide10","20","336","228","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("62");
            obj.set_text("h20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Button("btnToDay",null,"306","60","30","83",null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("45");
            obj.set_text("오늘");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"306","60","30","20",null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("46");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Combo("cboYear","46","35","60","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("65");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            obj.set_value("");
            obj.set_index("-1");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staYYYY","cboYear:0","35","30","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("64");
            obj.set_textAlign("center");
            obj.set_font("bold 16px \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_PO_MonthBg");
            obj.set_text("년");
            this.divCalYMD.addChild(obj.name, obj);

            obj = new Static("staMM","cboMonth:0","35","30","20",null,null,null,null,null,null,this.divCalYMD.form);
            obj.set_taborder("66");
            obj.set_textAlign("center");
            obj.set_font("bold 16px \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_PO_MonthBg");
            obj.set_text("월");
            this.divCalYMD.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalYMD.form
            obj = new Layout("default","",0,0,this.divCalYMD.form,function(p){});
            this.divCalYMD.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",268,356,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalDayPop_job.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comCalDayPop Form
        * FILE NAME     : comCalDayPop.xfdl
        * DESCRIPTION   : 공통 일달력(그리드)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.25    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvDDToday = "";					// 선택날짜

        this.fvBindDs      = "";
        this.fvBindDsColNm = "";
        this.fvBindDsRow   = "";

        this.fvMonthLastDay = [31,0,31,30,31,30,31,31,30,31,30,31];		// 월별 마지막 일자, 2월은 별도계산처리
        this.fvSundayPosition = "F";			// 일~토 가한주면 F, 월~일 가한주면 L

        this.fvBtnBeforeDayCssclass = "sta_PO_TrailingDay"			// 이전/이후 월의 일자 cssclass
        this.fvBtnToDayCssclass = "sta_PO_ToDay"					// 금일 cssclass
        this.fvBtnSelDayCssclass = "sta_PO_Day_Sel"					// 선택일 cssclass
        this.fvBtnNormalDayCssclass = "sta_PO_Day"					// 평일 cssclass
        this.fvBtnSatDayCssclass = "sta_PO_SaturDay"				// 토요일 cssclass
        this.fvBtnSunDayCssclass = "sta_PO_SunDay"					// 일요일 cssclass

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
        	this.fvDDToday = this.gfnGetDate(); 		// 오늘날자세팅

        	this.fvDDToday  = this.gfnIsNull(this.parent.pFromValue) ? this.fvDDToday : this.parent.pFromValue;		// 선택년월

        	this.fvBindDs      = this.parent.pBindDs;
        	this.fvBindDsColNm = this.parent.pBindDsFromColNm;
        	this.fvBindDsRow   = this.parent.pBindDsRow;

        	// 년도 inner dataset 데이터 생성
        	var sBaseYear = this.fvDDToday.substr(0,4);
        	this.fnMakeDsYearData(sBaseYear);

        	// 요일 title 설정
        	this.fnTitleSet();

        	this.fnSetCalendar(this.fvDDToday);
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
        		this.divCalYMD.form.staDN1.set_text("월");
        		this.divCalYMD.form.staDN2.set_text("화");
        		this.divCalYMD.form.staDN3.set_text("수");
        		this.divCalYMD.form.staDN4.set_text("목");
        		this.divCalYMD.form.staDN5.set_text("금");
        		this.divCalYMD.form.staDN6.set_text("토");
        		this.divCalYMD.form.staDN7.set_text("일");
        	}
        	else
        	{
        		this.divCalYMD.form.staDN1.set_text("일");
        		this.divCalYMD.form.staDN2.set_text("월");
        		this.divCalYMD.form.staDN3.set_text("화");
        		this.divCalYMD.form.staDN4.set_text("수");
        		this.divCalYMD.form.staDN5.set_text("목");
        		this.divCalYMD.form.staDN6.set_text("금");
        		this.divCalYMD.form.staDN7.set_text("토");
        	}
        };

        /**
         * @desc 일달력 날짜 설정
         * @param {String}	sYY 	- 년도
         * @param {String}	sMM 	- 월
         * @param {String}	sDD 	- 일
         * @return N/A
        */
        this.fnSetCalendar = function(sDate)
        {
        	if ( this.gfnIsNull(sDate) ) sDate = this.gfnGetDate();

        	var sYY = sDate.substr(0,4);
        	var sMM = sDate.substr(4,2);
        	var sDD = sDate.substr(6,2);

        	var sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;
        	if(!this.gfnIsDate(sTempDate))
        	{
        		sDD = this.gfnGetLastDateNum(sTempDate.substr(0,6)+"01");	//말일로 설정
        		sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;
        	}

        	// this.fvDDToday = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD.toString().padLeft(2,"0");

        	// 현재 년월 여부, 오늘날짜의 색상처리를 위해
        	var bCurMonth = false;
        	if((this.gfnGetDate().substr(0,4) == sYY) && (this.gfnGetDate().substr(4,2) == sMM))
        	{
        		bCurMonth = true;
        	}

        	this.divCalYMD.form.cboYear.set_value(nexacro.toNumber(sYY));		// Year setting
        	this.divCalYMD.form.cboMonth.set_index(parseInt(sMM)-1);			// Month setting

        	var nLastDay = this.fvMonthLastDay[parseInt(sMM)-1];
        	// 2월달 마지막 일 setting
        	if(parseInt(sMM) == 2)	// 2월달 이면...
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
        		objDay = this.divCalYMD.form["staD"+i];
        		objDay.set_cssclass(this.fvBtnBeforeDayCssclass);
        		objDay.set_text("");
        	}

        	// Dummy 자리
        	for(var i=1;i<nFirstDay;i++)
        	{
        		objDay = this.divCalYMD.form["staD"+i];
        		objDay.set_visible(true);
        	}

        	var nCurLine = 0;

        	for(var i=1;i<=nLastDay;i++)
        	{
        		objDay = this.divCalYMD.form["staD"+nFirstDay];
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

        		var sSelDay = this.parent.pFromValue;
        		// 선택일
        		if(parseInt(sDD) == i && !this.gfnIsNull(sSelDay)
        			&& (sSelDay.substr(0,4) == this.divCalYMD.form.cboYear.value
        				&& sSelDay.substr(4,2) == this.divCalYMD.form.cboMonth.value) )
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
        		objDay = this.divCalYMD.form["staD"+i];
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
        		objBtn = this.divCalYMD.form["staD"+i];
        		if(!this.gfnIsNull(objBtn))
        		{
        			objBtn.set_cssclass(this.fvBtnNormalMonthCssclass);
        		}
        	}
        };

        /**
         * @desc 일달력 Dataset에 setcolumn
         * @return N/A
        */
        this.fnSetValueBindDs = function(sDate)
        {
        	sDate = String(sDate).substr(0,8);
        	if ( this.fvBindDs instanceof Dataset )
        	{
        		this.fvBindDs.setColumn(this.fvBindDsRow, this.fvBindDsColNm, sDate);
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        /**
         * @description 월 이전버튼 클릭시
        */
        this.divCalYMD_btnMonthPrev_onclick = function(obj,e)
        {
        	var sYear = this.divCalYMD.form.cboYear.value;
        	var sMonth = this.divCalYMD.form.cboMonth.value;
        	var sDay = this.fvDDToday.substr(6,2);

        	if(this.gfnIsNull(sYear)) sYear = this.fvDDToday.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvDDToday.substr(4,2);
        	if(this.gfnIsNull(sDay)) sDay = this.fvDDToday.substr(6,2);

        	if(sMonth == "01")
        	{
        		sYear = nexacro.toNumber(sYear) -1;
        		this.fnMakeDsYearData(sYear);
        		this.divCalYMD.form.cboYear.set_value(sYear);
        		sMonth = "12";
        		this.divCalYMD.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) - 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.divCalYMD.form.cboMonth.set_value(sMonth);
        	}

        	// this.fvDDToday = this.divCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.divCalYMD.form.cboMonth.value+sDay;
        	this.fnSetCalendar(this.divCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.divCalYMD.form.cboMonth.value+sDay);
        };

        /**
         * @description 월 다음버튼 클릭시
        */
        this.divCalYMD_btnMonthNext_onclick = function(obj,e)
        {
        	var sYear = this.divCalYMD.form.cboYear.value;
        	var sMonth = this.divCalYMD.form.cboMonth.value;
        	var sDay = this.fvDDToday.substr(6,2);

        	if(this.gfnIsNull(sYear)) sYear = this.fvDDToday.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvDDToday.substr(4,2);

        	if(sMonth == "12")
        	{
        		sYear = nexacro.toNumber(sYear) + 1;
        		this.fnMakeDsYearData(sYear);
        		this.divCalYMD.form.cboYear.set_value(sYear);
        		sMonth = "01";
        		this.divCalYMD.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) + 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.divCalYMD.form.cboMonth.set_value(sMonth);
        	}

        	// this.fvDDToday = this.divCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.divCalYMD.form.cboMonth.value+sDay;
        	this.fnSetCalendar(this.divCalYMD.form.cboYear.value.toString().padLeft(4,"0")+this.divCalYMD.form.cboMonth.value+sDay);
        };

        /**
         * @description 년도 콤보값 변경시
        */
        this.divCalYMD_cboYear_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var sYear = e.postvalue;
        		var sMonth = this.divCalYMD.form.cboMonth.value;
        		var sDay = this.fvDDToday.substr(6,2);

        		this.fnMakeDsYearData(e.postvalue);
        		this.fnSetCalendar(sYear+sMonth+sDay);
        	}
        };

        /**
         * @description 월 콤보값 변경시
        */
        this.divCalYMD_cboMonth_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var sYear = this.divCalYMD.form.cboYear.value;
        		var sMonth = e.postvalue;
        		var sDay = this.fvDDToday.substr(6,2);

        		this.fnSetCalendar(sYear+sMonth+sDay);
        	}
        };

        /**
         * @description 일자 클릭시
        */
        this.divCalYMD_staD_onclick = function(obj,e)
        {
        	var sDay = obj.text;
        	if(!this.gfnIsNull(sDay))
        	{
        		this.fvDDToday = this.divCalYMD.form.cboYear.value.toString().padLeft(4, "0") + this.divCalYMD.form.cboMonth.value.toString().padLeft(2, "0")+ obj.text.toString().padLeft(2, "0");
        		this.fnSetValueBindDs(this.fvDDToday);
        		this.parent.closePopup();
        	}
        };

        /**
         * @description 오늘 클릭시
        */
        this.divCalYMD_btnToDay_onclick = function(obj,e)
        {
        	this.fvDDToday = this.gfnGetDate();

        	if(!this.gfnIsNull(this.fvDDToday))
        	{
        		this.fnSetValueBindDs(this.fvDDToday);

        		this.parent.closePopup();
        	}
        };

        /**
         * @description 닫기 클릭시
        */
        this.divCalYMD_btnCancel_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divCalYMD.form.cboMonth.addEventHandler("onitemchanged",this.divCalYMD_cboMonth_onitemchanged,this);
            this.divCalYMD.form.staD1.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD2.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD3.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD4.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD5.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD6.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD7.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD8.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD9.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD10.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD11.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD12.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD13.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD14.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD15.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD16.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD17.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD18.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD19.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD20.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD21.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD22.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD23.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD24.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD25.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD26.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD27.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD28.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD29.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD30.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD31.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD32.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD33.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD34.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD35.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD36.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD37.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD38.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD39.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD40.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD41.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.staD42.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.btnMonthNext.addEventHandler("onclick",this.divCalYMD_btnMonthNext_onclick,this);
            this.divCalYMD.form.staGuide09.addEventHandler("onclick",this.divCalYMD_staD_onclick,this);
            this.divCalYMD.form.btnMonthPrev.addEventHandler("onclick",this.divCalYMD_btnMonthPrev_onclick,this);
            this.divCalYMD.form.btnToDay.addEventHandler("onclick",this.divCalYMD_btnToDay_onclick,this);
            this.divCalYMD.form.btnCancel.addEventHandler("onclick",this.divCalYMD_btnCancel_onclick,this);
            this.divCalYMD.form.cboYear.addEventHandler("onitemchanged",this.divCalYMD_cboYear_onitemchanged,this);
        };
        this.loadIncludeScript("comCalDayPop_job.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
