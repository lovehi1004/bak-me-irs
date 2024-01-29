(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalFromTo");
            this.set_titletext("From-To 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(252,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFromYear", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsToYear", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdvCalFromTo","0","24","526","420",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_CAL_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divFrom","27","57","233","290",null,null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_CAL_Box");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Static("staDN1","7","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("42");
            obj.set_text("SUN");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#f13656");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN2","38","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("43");
            obj.set_text("MON");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN3","69","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("44");
            obj.set_text("TUE");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN4","100","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("45");
            obj.set_text("WED");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN5","131","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("46");
            obj.set_text("THU");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN6","162","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("47");
            obj.set_text("FRI");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staDN7","193","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("48");
            obj.set_text("SAT");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#32a1e0");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD1","11","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD2","42","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD3","73","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD4","104","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD5","135","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD6","166","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("5");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD7","197","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("6");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD8","11","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("7");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD9","42","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD10","73","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("9");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD11","104","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD12","135","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxtS");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD13","166","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("12");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD14","197","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("13");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD15","11","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("14");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD16","42","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD17","73","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("16");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD18","104","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("17");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD19","135","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("18");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD20","166","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("19");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD21","197","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("20");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD22","11","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("21");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD23","42","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD24","73","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("23");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD25","104","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD26","135","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("25");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD27","166","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("26");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD28","197","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD29","11","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD30","42","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("29");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD31","73","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD32","104","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD33","135","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD34","166","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("33");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD35","197","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD36","11","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("35");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD37","42","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("36");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD38","73","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("37");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD39","104","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("38");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD40","135","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("39");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD41","166","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("40");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staD42","197","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("41");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Trailingday");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btnMonthPrev","5","14","25","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_CalPrev2");
            obj.set_text("");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Combo("cboMonth","39","14","51","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            var pdvCalFromTo_form_divFrom_form_cboMonth_innerdataset = new nexacro.NormalDataset("pdvCalFromTo_form_divFrom_form_cboMonth_innerdataset", obj);
            pdvCalFromTo_form_divFrom_form_cboMonth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">1</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(pdvCalFromTo_form_divFrom_form_cboMonth_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Combo("cboYear","110","14","66","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsFromYear");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            obj.set_value("");
            obj.set_index("-1");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btnMonthNext",null,"14","25","25","5",null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_CalNext2");
            obj.set_visible("false");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("stcMM","92","14","18","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_CAL_HeadTxt2");
            obj.set_text("월");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Static("stcYYYY","178","14","18","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divFrom.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_CAL_HeadTxt2");
            obj.set_text("년");
            this.pdvCalFromTo.form.divFrom.addChild(obj.name, obj);

            obj = new Div("divTo","266","57","233","290",null,null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_CAL_Box");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Static("staDN1","7","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("43");
            obj.set_text("SUN");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#f13656");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN2","38","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("44");
            obj.set_text("MON");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN3","69","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("45");
            obj.set_text("TUE");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN4","100","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("46");
            obj.set_text("WED");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN5","129","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("47");
            obj.set_text("THU");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN6","159","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("48");
            obj.set_text("FRI");
            obj.set_cssclass("sta_CAL_WeekTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staDN7","193","50","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("49");
            obj.set_text("SAT");
            obj.set_cssclass("sta_CAL_WeekTxt");
            obj.set_color("#32a1e0");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD1","11","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD2","42","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD3","73","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD4","104","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD5","135","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("5");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD6","166","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("6");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD7","198","85","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("7");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD8","11","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD9","42","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("9");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD10","73","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD11","104","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD12","135","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("12");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD13","166","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("13");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD14","198","118","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("14");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD15","11","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD16","42","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("16");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD17","73","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("17");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD18","104","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("18");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD19","135","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("19");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD20","166","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("20");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD21","198","151","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("21");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD22","11","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD23","42","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("23");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD24","73","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD25","104","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("25");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD26","135","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("26");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD27","166","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD28","198","184","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("28");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD29","11","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("29");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD30","42","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD31","73","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD32","104","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD33","135","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("33");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD34","166","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD35","198","217","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("35");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD36","11","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("36");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Sunday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD37","42","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("37");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD38","73","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("38");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD39","104","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("39");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD40","135","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("40");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD41","166","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("41");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_DayTxt");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staD42","198","250","23","23",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("42");
            obj.set_text("1");
            obj.set_cssclass("sta_CAL_Satday");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Button("btnMonthNext","201","14","25","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalNext2");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Button("btnMonthPrev","5","14","25","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_CalPrev2");
            obj.set_text("");
            obj.set_visible("false");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Combo("cboYear","110","14","66","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsToYear");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            obj.set_value("");
            obj.set_index("-1");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Combo("cboMonth","39","14","51","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cbo_PO_Month");
            var pdvCalFromTo_form_divTo_form_cboMonth_innerdataset = new nexacro.NormalDataset("pdvCalFromTo_form_divTo_form_cboMonth_innerdataset", obj);
            pdvCalFromTo_form_divTo_form_cboMonth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">1</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(pdvCalFromTo_form_divTo_form_cboMonth_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("stcMM","92","14","18","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_CAL_HeadTxt2");
            obj.set_text("월");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("stcYYYY","178","14","18","25",null,null,null,null,null,null,this.pdvCalFromTo.form.divTo.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_CAL_HeadTxt2");
            obj.set_text("년");
            this.pdvCalFromTo.form.divTo.addChild(obj.name, obj);

            obj = new Static("staTitleBg","13","12",null,"45","13",null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_CalHead");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Static("staDesc","20","19",null,"30","100",null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("1");
            obj.set_text("기간 : <b v=\"true\">2023-10-10 ~ 2024-02-15</b> (129 일간)");
            obj.set_cssclass("sta_CAL_HeadTitle");
            obj.set_usedecorate("true");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Button("btnClose","475","19","30","30",null,null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_CAL_Close2");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"357","60","32","27",null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_wordWrap("none");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"357","80","32","btnCancel:3",null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Static("stcTilde","255","57","15","291",null,null,null,null,null,null,this.pdvCalFromTo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_CAL_ZigZig");
            obj.set_visible("false");
            this.pdvCalFromTo.addChild(obj.name, obj);

            obj = new Calendar("calFrom","0","0","42.86%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_usetrailingday("true");
            obj.set_popupsize("200 220");
            obj.set_cssclass("cal_WF_CalFromTo");
            obj.set_type("normal");
            obj.set_buttonsize("0 0");
            obj.set_displaynulltext("____-__-__");
            this.addChild(obj.name, obj);

            obj = new Static("staTilde","calFrom:-0.9939999999999998","3","14","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","staTilde:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_usetrailingday("true");
            obj.set_displaynulltext("____-__-__");
            this.addChild(obj.name, obj);

            obj = new Button("btnFromTo","calTo:-30","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CalDropbutton");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCalFromTo.form.divFrom.form
            obj = new Layout("default","",0,0,this.pdvCalFromTo.form.divFrom.form,function(p){});
            this.pdvCalFromTo.form.divFrom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvCalFromTo.form.divTo.form
            obj = new Layout("default","",0,0,this.pdvCalFromTo.form.divTo.form,function(p){});
            this.pdvCalFromTo.form.divTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvCalFromTo.form
            obj = new Layout("default","",0,0,this.pdvCalFromTo.form,function(p){});
            this.pdvCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",252,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalFromTo.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comCalFromTo Form
        * FILE NAME     : comCalFromTo.xfdl
        * DESCRIPTION   : 공통 From-To 일달력
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.07    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvFromDay = "";						// From날짜
        this.fvToDay = "";							// TO날짜
        this.fvForm = "";							// 부모폼
        this.fvCallBack = "";						// 콜백함수
        this.fvPopupId = "";						// 콜백ID
        this.fvMonthLastDay = [31,0,31,30,31,30,31,31,30,31,30,31];		// 월별 마지막 일자, 2월은 별도계산처리
        this.fvSundayPosition = "F";				// 일~토 가한주면 F, 월~일 가한주면 L

        this.fvBtnBeforeDayCssclass = "sta_CAL_Trailingday"			// 이전/이후 월의 일자 cssclass
        this.fvBtnToDayCssclass = "sta_CAL_Today"					// 금일 cssclass	sta_PO_ToDay
        this.fvBtnSelDayCssclass = "sta_CAL_DayTxtS"				// 선택일 cssclass	sta_PO_Day_Sel
        this.fvBtnNormalDayCssclass = "sta_CAL_DayTxt"				// 평일 cssclass		sta_PO_Day
        this.fvBtnSatDayCssclass = "sta_CAL_Satday"					// 토요일 cssclass	sta_PO_SaturDay
        this.fvBtnSunDayCssclass = "sta_CAL_Sunday"					// 일요일 cssclass 	sta_PO_SunDay

        this.fvValidationChk = true;								// 선택버튼 클릭시 From ~ To 날짜 체크 여부

        this.fvNullDateMessage = "날짜 범위를 선택해 주세요";

        this.fvSelDate01 = "";	// 선택날짜 1
        this.fvSelDate02 = "";	// 선택날짜 2

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.fvFromDay = this.gfnGetDate(); 					// 오늘날자세팅
        	this.fvToDay = this.gfnAddMonth(this.fvFromDay.substr(0,6)+"01",1).toString().substr(0,6)+"01";			// 오늘날자에 월만 +1한 값의 1일로 세팅
        	this.calFrom.set_value(null);
        	this.calTo.set_value(null);
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
        	//trace("[comCalFromTo] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// From 년도 inner dataset 데이터 생성
        	var sBaseYear = this.fvFromDay.substr(0,4);
        	this.fnMakeDsYearData(this.dsFromYear, sBaseYear);

        	// To 년도 inner dataset 데이터 생성
        	var sBaseYear = this.fvToDay.substr(0,4);
        	this.fnMakeDsYearData(this.dsToYear, sBaseYear);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	//trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgDateSelError" :
        			// To일자에 Focus
        			this.calTo.setFocus();
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
         * @desc 년도 inner dataset 데이터 생성
         * @param {object}	objDs		- 대상 dataset object
         * @param {string}	sBaseYear	- 기준년도
         * @return N/A
        */
        this.fnMakeDsYearData = function(objDs, sBaseYear)
        {
        	objDs.clearData();
        	var nStart, nEnd;
        	var i, nRow;

        	if(this.gfnIsNull(sBaseYear))
        	{
        		sBaseYear = nexacro.toNumber(this.fvDDToday.substr(0,4));
        	}

        	sBaseYear = nexacro.toNumber(sBaseYear);
        	nStart = nexacro.toNumber(sBaseYear-60);
        	nEnd = nexacro.toNumber(sBaseYear+60);

        	objDs.set_enableevent(false);
        	for(i=nStart;i<=nEnd;i++)
        	{
        		nRow = objDs.addRow();
        		objDs.setColumn(nRow, "codecolumn", i);
        		objDs.setColumn(nRow, "datacolumn", i);
        	}
        	objDs.set_enableevent(true);
        };

        /**
         * @desc 월만 증감가시킨 년월일 구하기
         * @param {String}	sYY 	- 년도
         * @param {String}	sMM 	- 월
         * @param {String}	sDD 	- 일
         * @param {number}	nGap 	- 증감값 (1 / -1)
         * @return N/A
        */
        this.fnGetAddMonthYMD = function(sYY, sMM, sDD, nGap)
        {
        	var sRtnYear, sRtnMM, sRtnDD;

        	if(nGap > 0)
        	{
        		if(sMM == "12")
        		{
        			sRtnYear = nexacro.toNumber(sYY) + 1;
        			sRtnMM = "01";
        			sRtnDD = "01";
        		}
        		else
        		{
        			sRtnYear = sYY;
        			sRtnMM = nexacro.toNumber(sMM) + nexacro.toNumber(nGap);
        			sRtnDD = "01";
        		}
        	}
        	else
        	{
        		if(sMM == "01")
        		{
        			sRtnYear = nexacro.toNumber(sYY) -1;
        			sRtnMM = "12";
        			sRtnDD = "01";
        		}
        		else
        		{
        			sRtnYear = sYY;
        			sRtnMM = nexacro.toNumber(sMM) + nexacro.toNumber(nGap);
        			sRtnDD = "01";
        		}
        	}

        	return nexacro.toNumber(sRtnYear).toString().padLeft(4,"0")+nexacro.toNumber(sRtnMM).toString().padLeft(2,"0")+nexacro.toNumber(sRtnDD).toString().padLeft(2,"0");
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
        		this.pdvCalFromTo.form.divFrom.form.staDN1.set_text("MON"); // ("월");
        		this.pdvCalFromTo.form.divFrom.form.staDN2.set_text("TUE"); // ("화");
        		this.pdvCalFromTo.form.divFrom.form.staDN3.set_text("WED"); // ("수");
        		this.pdvCalFromTo.form.divFrom.form.staDN4.set_text("THU"); // ("목");
        		this.pdvCalFromTo.form.divFrom.form.staDN5.set_text("FRI"); // ("금");
        		this.pdvCalFromTo.form.divFrom.form.staDN6.set_text("SAT"); // ("토");
        		this.pdvCalFromTo.form.divFrom.form.staDN7.set_text("SUN"); // ("일");

        		this.pdvCalFromTo.form.divTo.form.staDN1.set_text("MON"); // ("월");
        		this.pdvCalFromTo.form.divTo.form.staDN2.set_text("TUE"); // ("화");
        		this.pdvCalFromTo.form.divTo.form.staDN3.set_text("WED"); // ("수");
        		this.pdvCalFromTo.form.divTo.form.staDN4.set_text("THU"); // ("목");
        		this.pdvCalFromTo.form.divTo.form.staDN5.set_text("FRI"); // ("금");
        		this.pdvCalFromTo.form.divTo.form.staDN6.set_text("SAT"); // ("토");
        		this.pdvCalFromTo.form.divTo.form.staDN7.set_text("SUN"); // ("일");
        	}
        	else
        	{
        		this.pdvCalFromTo.form.divFrom.form.staDN1.set_text("SUN"); // ("일");
        		this.pdvCalFromTo.form.divFrom.form.staDN2.set_text("MON"); // ("월");
        		this.pdvCalFromTo.form.divFrom.form.staDN3.set_text("TUE"); // ("화");
        		this.pdvCalFromTo.form.divFrom.form.staDN4.set_text("WED"); // ("수");
        		this.pdvCalFromTo.form.divFrom.form.staDN5.set_text("THU"); // ("목");
        		this.pdvCalFromTo.form.divFrom.form.staDN6.set_text("FRI"); // ("금");
        		this.pdvCalFromTo.form.divFrom.form.staDN7.set_text("SAT"); // ("토");

        		this.pdvCalFromTo.form.divTo.form.staDN1.set_text("SUN"); // ("일");
        		this.pdvCalFromTo.form.divTo.form.staDN2.set_text("MON"); // ("월");
        		this.pdvCalFromTo.form.divTo.form.staDN3.set_text("TUE"); // ("화");
        		this.pdvCalFromTo.form.divTo.form.staDN4.set_text("WED"); // ("수");
        		this.pdvCalFromTo.form.divTo.form.staDN5.set_text("THU"); // ("목");
        		this.pdvCalFromTo.form.divTo.form.staDN6.set_text("FRI"); // ("금");
        		this.pdvCalFromTo.form.divTo.form.staDN7.set_text("SAT"); // ("토");
        	}
        };

        /**
         * @desc From-To달력 초기화
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
        	var sDayFromItem = "dayFromItem";
        	var sDayToItem = "dayToItem";
        	this.fvForm = objForm;
        	this.fvCallBack = objParam.sCallbackFunc;	// 콜백함수
        	this.fvPopupId = objParam.sCallbackId;		// 콜백ID

        	if(!this.gfnIsNull(objParam))
        	{
        		// 바인딩 처리 (From)
        		if(!this.gfnIsNull(this.binds[sDayFromItem]))
        		{
        			var objItem = this.removeChild(sDayFromItem);
        			objItem.destroy();
        			this.calFrom.set_value(null);
        		}

        		if(!this.gfnIsNull(objParam.objDs) && !this.gfnIsNull(objParam.sBindFromCol))
        		{
        			var objBindItemFrom = new BindItem();
        			objBindItemFrom.init(sDayFromItem, this.calFrom.name, "value", objParam.objDs.name, objParam.sBindFromCol);
        			this.addChild(sDayFromItem, objBindItemFrom);
        			objBindItemFrom.bind();
        		}

        		// 바인딩 처리 (To)
        		if(!this.gfnIsNull(this.binds[sDayToItem]))
        		{
        			var objItem = this.removeChild(sDayToItem);
        			objItem.destroy();
        			this.calTo.set_value(null);
        		}

        		if(!this.gfnIsNull(objParam.objDs) && !this.gfnIsNull(objParam.sBindToCol))
        		{
        			var objBindItemTo = new BindItem();
        			objBindItemTo.init(sDayToItem, this.calTo.name, "value", objParam.objDs.name, objParam.sBindToCol);
        			this.addChild(sDayToItem, objBindItemTo);
        			objBindItemTo.bind();
        		}

        		//validation체크 여부
        		if(!this.gfnIsNull(objParam.bValidationChk))
        		{
        			this.fvValidationChk = objParam.bValidationChk;
        		}

        		//일자 autoselect여부
        		if( objParam.bAutoSelect == true || objParam.bAutoSelect == "true")
        		{
        			this.calFrom.set_autoselect(true);
        			this.calTo.set_autoselect(true);
        		}
        	}
        };

        /**
         * @desc From-To달력 날짜 Validation 체크
         * @return N/A
        */
        this.fnValidationChk = function(sFromDay, sToDay)
        {
        	if(!this.gfnIsNull(sFromDay) && !this.gfnIsNull(sToDay))
        	{
        		if(sFromDay > sToDay)
        		{
        			var sMsgCode = ["Alert","종료일자가 시작일자보다 이전입니다."];
        			this.gfnShowMessage(this, sMsgCode, "", "fnMsgCallback", "msgDateSelError");
        			return false;
        		}
        	}
        	return true;
        };

        /**
         * @desc From-To달력 값 가져오기
         * @param N/A
         * @return N/A
        */
        this.fnGetDay = function()
        {
        	var sRtn = "";
        	sRtn = [this.calFrom.value, this.calTo.value];
        	return sRtn;
        };

        /**
         * @desc From-To달력 값 설정하기
         * @param {String}	sValue 	- 설정값 , YYYYMMDD
         * @return N/A
        */
        this.fnSetDay = function(sValueFrom, sValueTo)
        {
        	if(this.gfnIsNull(sValueFrom))
        	{
        		this.calFrom.set_value(null);
        	}
        	else
        	{
        		sValueFrom = this.gfnGetDigit(sValueFrom);
        		this.calFrom.set_value(sValueFrom);
        	}

        	if(this.gfnIsNull(sValueTo))
        	{
        		this.calTo.set_value(null);
        	}
        	else
        	{
        		sValueTo = this.gfnGetDigit(sValueTo);
        		this.calTo.set_value(sValueTo);
        	}
        };

        /**
         * @desc From-To달력 값 설정하기(From만)
         * @param {String}	sValueFrom 	- 설정값 , YYYYMMDD
         * @return N/A
        */
        this.fnSetDayFrom = function(sValueFrom)
        {
        	if(this.gfnIsNull(sValueFrom))
        	{
        		this.calFrom.set_value(null);
        	}
        	else
        	{
        		sValueFrom = this.gfnGetDigit(sValueFrom);
        		this.calFrom.set_value(sValueFrom);
        	}
        };

        /**
         * @desc From-To달력 값 설정하기(To만)
         * @param {String}	sValueTo 	- 설정값 , YYYYMMDD
         * @return N/A
        */
        this.fnSetDayTo = function(sValueTo)
        {
        	if(this.gfnIsNull(sValueTo))
        	{
        		this.calTo.set_value(null);
        	}
        	else
        	{
        		sValueTo = this.gfnGetDigit(sValueTo);
        		this.calTo.set_value(sValueTo);
        	}
        };

        /**
         * @desc From-To달력 Enable 설정
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
        			this.calFrom.set_enable(true);
        			this.calTo.set_enable(true);
        			this.btnFromTo.set_enable(true);
        		}
        		else
        		{
        			this.calFrom.set_enable(false);
        			this.calTo.set_enable(false);
        			this.btnFromTo.set_enable(false);
        		}
        	}
        	else
        	{
        		if(this.calFrom.enable)
        		{
        			this.calFrom.set_enable(false);
        			this.calTo.set_enable(false);
        			this.btnFromTo.set_enable(false);
        		}
        		else
        		{
        			this.calFrom.set_enable(true);
        			this.calTo.set_enable(true);
        			this.btnFromTo.set_enable(true);
        		}
        	}
        };

        /**
         * @desc From-To달력 ReadOnly 설정
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
        			this.calFrom.set_readonly(true);
        			this.calTo.set_readonly(true);
        			this.btnFromTo.set_enable(false);
        		}
        		else
        		{
        			this.calFrom.set_readonly(false);
        			this.calTo.set_readonly(false);
        			this.btnFromTo.set_enable(true);
        		}
        	}
        	else
        	{
        		if(this.calFrom.readonly)
        		{
        			this.calFrom.set_readonly(false);
        			this.calTo.set_readonly(false);
        			this.btnFromTo.set_enable(true);
        		}
        		else
        		{
        			this.calFrom.set_readonly(true);
        			this.calTo.set_readonly(true);
        			this.btnFromTo.set_enable(false);
        		}
        	}
        };

        /**
         * @desc From-To달력 날짜 설정
         * @param {String}	sYY 	- 년도
         * @param {String}	sMM 	- 월
         * @param {String}	sDD 	- 일
         * @return N/A
        */
        this.fnSetCalendarFrom = function(sYY, sMM, sDD)
        {
        	if(sDD == null) sDD = "";
        	if(sDD.length == 0) sDD = this.gfnGetDate().substr(6,2);

        	var sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;
        	if(!this.gfnIsDate(sTempDate))
        	{
        		sDD = "01";
        		sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+"01";
        	}

        	// 현재 년월 여부, 오늘날짜의 색상처리를 위해
        	var bCurMonth = false;
        	if((this.gfnGetDate().substr(0,4) == sYY) && (this.gfnGetDate().substr(4,2) == sMM))
        	{
        		bCurMonth = true;
        	}

        	this.pdvCalFromTo.form.divFrom.form.cboMonth.set_index(parseInt(sMM)-1);		// Month setting
        	this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(nexacro.toNumber(sYY));	// Year setting

        	var nLastDay = this.fvMonthLastDay[parseInt(sMM)-1];
        	// 2월달 마지막 일 setting
        	if(parseInt(sMM) == 2)		// 2월달 이면...
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
        		objDay = this.pdvCalFromTo.form.divFrom.form["staD"+i];
        		objDay.set_cssclass(this.fvBtnBeforeDayCssclass);
        		objDay.set_text("");
        	}

        	// Dummy 자리
        	for(var i=1;i<nFirstDay;i++)
        	{
        		objDay = this.pdvCalFromTo.form.divFrom.form["staD"+i];
        		objDay.set_visible(true);
        	}

        	var nCurLine = 0;

        	for(var i=1;i<=nLastDay;i++)
        	{
        		objDay = this.pdvCalFromTo.form.divFrom.form["staD"+nFirstDay];
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
        		if( (!this.gfnIsNull(this.fvSelDate01) && parseInt(this.fvSelDate01.substr(6,2)) == i
        				&& this.pdvCalFromTo.form.divFrom.form.cboYear.value == this.fvSelDate01.substr(0,4)
        				&& this.pdvCalFromTo.form.divFrom.form.cboMonth.value == this.fvSelDate01.substr(4,2))
        		|| (!this.gfnIsNull(this.fvSelDate02) && parseInt(this.fvSelDate02.substr(6,2)) == i
        				&& this.pdvCalFromTo.form.divFrom.form.cboYear.value == this.fvSelDate02.substr(0,4)
        				&& this.pdvCalFromTo.form.divFrom.form.cboMonth.value == this.fvSelDate02.substr(4,2))
        		)
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
        		objDay = this.pdvCalFromTo.form.divFrom.form["staD"+i];
        		objDay.set_visible(true);
        	}
        };

        /**
         * @desc From-To달력 날짜 설정
         * @param {String}	sYY 	- 년도
         * @param {String}	sMM 	- 월
         * @param {String}	sDD 	- 일
         * @return N/A
        */
        this.fnSetCalendarTo = function(sYY, sMM, sDD)
        {
        	if(sDD == null) sDD = "";
        	if(sDD.length == 0) sDD = this.gfnGetDate().substr(6,2);

        	var sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+sDD;
        	if(!this.gfnIsDate(sTempDate))
        	{
        		sDD = "01";
        		sTempDate = sYY.toString().padLeft(4,"0")+sMM.toString().padLeft(2,"0")+"01";
        	}

        	// 현재 년월 여부, 오늘날짜의 색상처리를 위해
        	var bCurMonth = false;
        	if((this.gfnGetDate().substr(0,4) == sYY) && (this.gfnGetDate().substr(4,2) == sMM))
        	{
        		bCurMonth = true;
        	}

        	this.pdvCalFromTo.form.divTo.form.cboMonth.set_index(parseInt(sMM)-1);		// Month setting
        	this.pdvCalFromTo.form.divTo.form.cboYear.set_value(nexacro.toNumber(sYY));	// Year setting

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
        		objDay = this.pdvCalFromTo.form.divTo.form["staD"+i];
        		objDay.set_cssclass(this.fvBtnBeforeDayCssclass);
        		objDay.set_text("");
        	}

        	// Dummy 자리
        	for(var i=1;i<nFirstDay;i++)
        	{
        		objDay = this.pdvCalFromTo.form.divTo.form["staD"+i];
        		objDay.set_visible(true);
        	}

        	var nCurLine = 0;

        	for(var i=1;i<=nLastDay;i++)
        	{
        		objDay = this.pdvCalFromTo.form.divTo.form["staD"+nFirstDay];
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
        		if( (!this.gfnIsNull(this.fvSelDate01) && parseInt(this.fvSelDate01.substr(6,2)) == i
        				&& this.pdvCalFromTo.form.divTo.form.cboYear.value == this.fvSelDate01.substr(0,4)
        				&& this.pdvCalFromTo.form.divTo.form.cboMonth.value == this.fvSelDate01.substr(4,2))
        		|| (!this.gfnIsNull(this.fvSelDate02) && parseInt(this.fvSelDate02.substr(6,2)) == i
        				&& this.pdvCalFromTo.form.divTo.form.cboYear.value == this.fvSelDate02.substr(0,4)
        				&& this.pdvCalFromTo.form.divTo.form.cboMonth.value == this.fvSelDate02.substr(4,2))
        		)
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
        		objDay = this.pdvCalFromTo.form.divTo.form["staD"+i]; // eval(oDiv.name + ".stcD" + i);
        		objDay.set_visible(true);
        	}
        };

        /**
         * @desc 월 이전,다음 버튼, 구분선 표시여부 처리
         * @param {String}	sFromYYYYMM	- From YYYYMM
         * @param {String}	sToYYYYMM 	- To YYYYMM
         * @return N/A
        */
        this.fnExtBtnVisibe = function(sFromYYYYMM, sToYYYYMM)
        {
        	if(this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) == 1 || this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) == 0)
        	{
        		this.pdvCalFromTo.form.stcTilde.set_visible(false);
        		this.pdvCalFromTo.form.divFrom.form.btnMonthNext.set_visible(false);
        		this.pdvCalFromTo.form.divTo.form.btnMonthPrev.set_visible(false);
        	}
        	else
        	{
        		this.pdvCalFromTo.form.stcTilde.set_visible(true);
        		this.pdvCalFromTo.form.divFrom.form.btnMonthNext.set_visible(true);
        		this.pdvCalFromTo.form.divTo.form.btnMonthPrev.set_visible(true);
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 칼렌다의 From날짜가 변경전 발생하는 이벤트
        */
        this.calFrom_canchange = function(obj,e)
        {
        	if(this.fnValidationChk(e.postvalue, this.calTo.value))
        	{

        	}
        	else
        	{
        		return false;
        	}
        };

        /**
         * @description 칼렌다의 From날짜가 변경된 후 발생하는 이벤트
        */
        this.calFrom_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) obj.set_value(null);

        	//날짜 체크
        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, this.fnGetDay());		// 본 화면에 콜백
        	}
        };

        /**
         * @description 칼렌다의 To날짜가 변경전 발생하는 이벤트
        */
        this.calTo_canchange = function(obj,e)
        {
        	if(this.fnValidationChk(this.calFrom.value, e.postvalue))
        	{

        	}
        	else
        	{
        		return false;
        	}
        };

        /**
         * @description 칼렌다의 To날짜가 변경된 후 발생하는 이벤트
        */
        this.calTo_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)) obj.set_value(null);

        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, this.fnGetDay());		// 본 화면에 콜백
        	}
        };

        /**
         * @description 달력 버튼 클릭시
        */
        this.btnFromTo_onclick = function(obj,e)
        {
        	var sMsg = this.fvNullDateMessage;
        	var sFromDate = this.calFrom.value;
        	var sToDate = this.calTo.value;

        	this.fvFromDay = this.gfnGetDate(); 					// 오늘날자세팅
        	this.fvToDay = this.gfnAddMonth(this.fvFromDay.substr(0,6)+"01",1).toString().substr(0,6)+"01";			// 오늘날자에 월만 +1한 값의 1일로 세팅

        	if(!this.gfnIsNull(sFromDate))
        	{
        		this.fvSelDate01 = sFromDate;
        	}
        	if(!this.gfnIsNull(sToDate))
        	{
        		if(!this.gfnIsNull(this.fvSelDate01))
        		{
        			this.fvSelDate02 = sToDate;
        		}
        		else
        		{
        			this.fvSelDate01 = sToDate;
        		}
        	}

        	if(!this.gfnIsNull(sFromDate) && !this.gfnIsNull(sToDate))
        	{
        		sMsg = "기간 : "+this.gfnGetMaskFormatString(this.gfnStrToDate(sFromDate), "yyyy-MM-dd")+" ~ "+this.gfnGetMaskFormatString(this.gfnStrToDate(sToDate), "yyyy-MM-dd")+" ( "+nexacro.toNumber(this.gfnGetDiffDate(sFromDate,sToDate)+1)+"일간 )";
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}
        	else if(!this.gfnIsNull(sFromDate) && this.gfnIsNull(sToDate))
        	{
        		sToDate = this.fnGetAddMonthYMD(sFromDate.substr(0,4), sFromDate.substr(4,2), sFromDate.substr(6,2), 1);
        		// 기간 : yyyy-mm-dd ~ ...
        		var sMsg = "기간 : "+this.gfnGetMaskFormatString(this.gfnStrToDate(sFromDate), "yyyy-MM-dd")+" ~ ...";
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}
        	else if(this.gfnIsNull(sFromDate) && !this.gfnIsNull(sToDate))
        	{
        		sFromDate = this.fnGetAddMonthYMD(sToDate.substr(0,4), sToDate.substr(4,2), sToDate.substr(6,2), -1);
        		// 기간 : yyyy-mm-dd ~ ...
        		var sMsg = "기간 : "+this.gfnGetMaskFormatString(this.gfnStrToDate(sToDate), "yyyy-MM-dd")+" ~ ...";
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}
        	else
        	{
        		sFromDate = this.fvFromDay;
        		sToDate = this.fvToDay;
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}

        	var sTempToDate = sToDate;
        	if(sFromDate.substr(0,4)+sFromDate.substr(4,2) == sToDate.substr(0,4)+sToDate.substr(4,2))
        	{
        		sTempToDate = this.gfnAddMonth(sToDate.substr(0,6)+"01",1).toString().substr(0,6)+"01";
        	}

        	this.fnSetCalendarFrom(sFromDate.substr(0,4), sFromDate.substr(4,2), "");
        	this.fnSetCalendarTo(sTempToDate.substr(0,4), sTempToDate.substr(4,2), "");

        	this.fnMakeDsYearData(this.dsFromYear, sFromDate.substr(0,4));
        	this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(sFromDate.substr(0,4));
        	this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sFromDate.substr(4,2));
        	this.fnMakeDsYearData(this.dsToYear, sTempToDate.substr(0,4));
        	this.pdvCalFromTo.form.divTo.form.cboYear.set_value(sTempToDate.substr(0,4));
        	this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sTempToDate.substr(4,2));

        	this.fnExtBtnVisibe(sFromDate.substr(0,6), sTempToDate.substr(0,6));
        	this.pdvCalFromTo.trackPopupByComponent(this.calFrom, 0 - 12, this.calFrom.getOffsetHeight() - 11);
        };


        /**
         * @description From 월 콤보값 변경시
        */
        this.pdvCalFromTo_divFrom_cboMonth_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        		var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        		if(this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) < 1)
        		{
        			var sTempTo = this.gfnAddMonth(sFromYYYYMM+"01",1);
        			this.pdvCalFromTo.form.divTo.form.cboYear.set_value(sTempTo.substr(0,4));
        			this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sTempTo.substr(4,2));
        			sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        			this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        		}

        		this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);
        		this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        	}
        };

        /**
         * @description From 년도 콤보값 변경시
        */
        this.pdvCalFromTo_divFrom_cboYear_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.fnMakeDsYearData(this.dsFromYear, this.pdvCalFromTo.form.divFrom.form.cboYear.value);

        		var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        		var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        		if(this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) < 1)
        		{
        			var sTempTo = this.gfnAddMonth(sFromYYYYMM+"01",1);
        			this.fnMakeDsYearData(this.dsToYear, sTempTo.substr(0,4));
        			this.pdvCalFromTo.form.divTo.form.cboYear.set_value(sTempTo.substr(0,4));
        			this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sTempTo.substr(4,2));
        			sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        			this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        		}

        		this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);
        		this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        	}
        };

        /**
         * @description From 이전 버튼 변경시
        */
        this.pdvCalFromTo_divFrom_btnMonthPrev_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalFromTo.form.divFrom.form.cboYear.value;
        	var sMonth = this.pdvCalFromTo.form.divFrom.form.cboMonth.value;

        	if(this.gfnIsNull(sYear)) sYear = this.fvFromDay.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvFromDay.substr(4,2);

        	if(sMonth == "01")
        	{
        		sYear = nexacro.toNumber(sYear) - 1;
        		this.fnMakeDsYearData(this.dsFromYear, sYear);
        		this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(sYear);
        		sMonth = "12";
        		this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) - 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sMonth);
        	}
        	var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        	var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        	this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);

        	this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        };

        /**
         * @description From 다음 버튼 변경시
        */
        this.pdvCalFromTo_divFrom_btnMonthNext_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalFromTo.form.divFrom.form.cboYear.value;
        	var sMonth = this.pdvCalFromTo.form.divFrom.form.cboMonth.value;

        	if(this.gfnIsNull(sYear)) sYear = this.fvFromDay.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvFromDay.substr(4,2);

        	if(sMonth == "12")
        	{
        		sYear = nexacro.toNumber(sYear) + 1;
        		this.fnMakeDsYearData(this.dsFromYear, sYear);
        		this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(sYear);
        		sMonth = "01";
        		this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) + 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sMonth);
        	}
        	var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        	var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        	this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);

        	this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        };

        /**
         * @description To 월 콤보값 변경시
        */
        this.pdvCalFromTo_divTo_cboMonth_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        		var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        		if(this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) < 1)
        		{
        			var sTempFrom = this.gfnAddMonth(sToYYYYMM+"01",-1);
        			this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(sTempFrom.substr(0,4));
        			this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sTempFrom.substr(4,2));
        			sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        			this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        		}

        		this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);
        		this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        	}
        };

        /**
         * @description To 년도 콤보값 변경시
        */
        this.pdvCalFromTo_divTo_cboYear_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.fnMakeDsYearData(this.dsToYear, this.pdvCalFromTo.form.divTo.form.cboYear.value);

        		var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        		var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        		if(this.gfnGetDiffMonth(sFromYYYYMM,sToYYYYMM) < 1)
        		{
        			var sTempFrom = this.gfnAddMonth(sToYYYYMM+"01",-1);
        			this.fnMakeDsYearData(this.dsFromYear, sTempFrom.substr(0,4));
        			this.pdvCalFromTo.form.divFrom.form.cboYear.set_value(sTempFrom.substr(0,4));
        			this.pdvCalFromTo.form.divFrom.form.cboMonth.set_value(sTempFrom.substr(4,2));
        			sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        			this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        		}

        		this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);
        		this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        	}
        };

        /**
         * @description To 이전 버튼 변경시
        */
        this.pdvCalFromTo_divTo_btnMonthPrev_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalFromTo.form.divTo.form.cboYear.value;
        	var sMonth = this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        	if(this.gfnIsNull(sYear)) sYear = this.fvToDay.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvToDay.substr(4,2);

        	if(sMonth == "01")
        	{
        		sYear = nexacro.toNumber(sYear) - 1;
        		this.fnMakeDsYearData(this.dsToYear, sYear);
        		this.pdvCalFromTo.form.divTo.form.cboYear.set_value(sYear);
        		sMonth = "12";
        		this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) - 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sMonth);
        	}
        	var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        	var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        	this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);

        	this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        };

        /**
         * @description To 다음 버튼 변경시
        */
        this.pdvCalFromTo_divTo_btnMonthNext_onclick = function(obj,e)
        {
        	var sYear = this.pdvCalFromTo.form.divTo.form.cboYear.value;
        	var sMonth = this.pdvCalFromTo.form.divTo.form.cboMonth.value;

        	if(this.gfnIsNull(sYear)) sYear = this.fvToDay.substr(0,4);
        	if(this.gfnIsNull(sMonth)) sMonth = this.fvToDay.substr(4,2);

        	if(sMonth == "12")
        	{
        		sYear = nexacro.toNumber(sYear) +1;
        		this.fnMakeDsYearData(this.dsToYear, sYear);
        		this.pdvCalFromTo.form.divTo.form.cboYear.set_value(sYear);
        		sMonth = "01";
        		this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sMonth);
        	}
        	else
        	{
        		sMonth = nexacro.toNumber(sMonth) + 1;
        		sMonth = sMonth.toString().padLeft(2,"0");
        		this.pdvCalFromTo.form.divTo.form.cboMonth.set_value(sMonth);
        	}
        	var sFromYYYYMM = this.pdvCalFromTo.form.divFrom.form.cboYear.value+""+this.pdvCalFromTo.form.divFrom.form.cboMonth.value;
        	var sToYYYYMM = this.pdvCalFromTo.form.divTo.form.cboYear.value+""+this.pdvCalFromTo.form.divTo.form.cboMonth.value;
        	this.fnExtBtnVisibe(sFromYYYYMM, sToYYYYMM);

        	this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        };

        /**
         * @description From 일자 클릭시
        */
        this.pdvCalFromTo_divFrom_staD_onclick = function(obj,e)
        {
        	var sDay = obj.text;
        	var sTempSelDate01 = this.fvSelDate01;
        	var sTempSelDate02 = this.fvSelDate02;
        	var sClickDate;

        	if(!this.gfnIsNull(sDay))
        	{
        		sClickDate = this.pdvCalFromTo.form.divFrom.form.cboYear.value + this.pdvCalFromTo.form.divFrom.form.cboMonth.value + sDay.toString().padLeft(2, "0");

        		this.fvSelDate01 = "";
        		this.fvSelDate02 = "";

        		if(!this.gfnIsNull(sTempSelDate01) && this.gfnIsNull(sTempSelDate02))
        		{
        			if(sTempSelDate01 > sClickDate)
        			{
        				this.fvSelDate01 = sClickDate;
        				this.fvSelDate02 = sTempSelDate01;
        			}
        			else
        			{
        				this.fvSelDate01 = sTempSelDate01;
        				this.fvSelDate02 = sClickDate;
        			}

        			if(this.fnValidationChk(this.fvSelDate01, this.fvSelDate02))
        			{
        				this.calFrom.set_value(this.fvSelDate01);
        				this.calTo.set_value(this.fvSelDate02);
        				if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds) && !this.gfnIsNull(this.binds["dayFromItem"]) && !this.gfnIsNull(this.binds["dayToItem"]))
        				{
        					var objDs = this.binds["dayFromItem"].datasetid;
        					this.fvForm[objDs].set_enableevent(false);
        					this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayFromItem"].columnid, this.fvSelDate01);
        					this.fvForm[objDs].set_enableevent(true);

        					var objDs = this.binds["dayToItem"].datasetid;
        					this.fvForm[objDs].set_enableevent(false);
        					this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayToItem"].columnid, this.fvSelDate02);
        					this.fvForm[objDs].set_enableevent(true);
        				}

        				if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        				{
        					this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, [this.fvSelDate01, this.fvSelDate02]);		// 본 화면에 콜백
        				}
        				this.pdvCalFromTo.closePopup();
        			}
        		}
        		else
        		{
        			this.fvSelDate01 = this.pdvCalFromTo.form.divFrom.form.cboYear.value + this.pdvCalFromTo.form.divFrom.form.cboMonth.value + sDay.toString().padLeft(2, "0");
        			this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, sDay.toString().padLeft(2, "0"));

        			if(!this.gfnIsNull(sTempSelDate02) && (sTempSelDate02.substr(0,4) == this.pdvCalFromTo.form.divTo.form.cboYear.value
        			|| sTempSelDate02.substr(4,2) == this.pdvCalFromTo.form.divTo.form.cboMonth.value))
        			{
        				this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, "");
        			}
        		}

        		// 기간 : yyyy-mm-dd ~ ...
        		// 기간 : yyyy-mm-dd ~ yyyy-mm-dd ( xx 일간 )
        		var sMsg = "기간 : "+this.gfnGetMaskFormatString(this.gfnStrToDate(this.fvSelDate01), "yyyy-MM-dd")+" ~ ";
        		if(this.gfnIsNull(this.fvSelDate02))
        		{
        			sMsg += "...";
        		}
        		else
        		{
        			sMsg += this.gfnGetMaskFormatString(this.gfnStrToDate(this.fvSelDate02), "yyyy-MM-dd")+" ( "+nexacro.toNumber(this.gfnGetDiffDate(this.fvSelDate01,this.fvSelDate02)+1)+"일간 )";
        		}
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}
        };

        /**
         * @description To 일자 클릭시
        */
        this.pdvCalFromTo_divTo_staD_onclick = function(obj,e)
        {
        	var sDay = obj.text;
        	var sTempSelDate01 = this.fvSelDate01;
        	var sTempSelDate02 = this.fvSelDate02;
        	var sClickDate;

        	if(!this.gfnIsNull(sDay))
        	{
        		sClickDate = this.pdvCalFromTo.form.divTo.form.cboYear.value + this.pdvCalFromTo.form.divTo.form.cboMonth.value + sDay.toString().padLeft(2, "0");

        		this.fvSelDate01 = "";
        		this.fvSelDate02 = "";

        		if(!this.gfnIsNull(sTempSelDate01) && this.gfnIsNull(sTempSelDate02))
        		{
        			if(sTempSelDate01 > sClickDate)
        			{
        				this.fvSelDate01 = sClickDate;
        				this.fvSelDate02 = sTempSelDate01;
        			}
        			else
        			{
        				this.fvSelDate01 = sTempSelDate01;
        				this.fvSelDate02 = sClickDate;
        			}

        			if(this.fnValidationChk(this.fvSelDate01, this.fvSelDate02))
        			{
        				this.calFrom.set_value(this.fvSelDate01);
        				this.calTo.set_value(this.fvSelDate02);
        				if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds) && !this.gfnIsNull(this.binds["dayFromItem"]) && !this.gfnIsNull(this.binds["dayToItem"]))
        				{
        					var objDs = this.binds["dayFromItem"].datasetid;
        					this.fvForm[objDs].set_enableevent(false);
        					this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayFromItem"].columnid, this.fvSelDate01);
        					this.fvForm[objDs].set_enableevent(true);

        					var objDs = this.binds["dayToItem"].datasetid;
        					this.fvForm[objDs].set_enableevent(false);
        					this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["dayToItem"].columnid, this.fvSelDate02);
        					this.fvForm[objDs].set_enableevent(true);
        				}

        				if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        				{
        					this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, [this.fvSelDate01, this.fvSelDate02]);		// 본 화면에 콜백
        				}
        				this.pdvCalFromTo.closePopup();
        			}
        		}
        		else
        		{
        			this.fvSelDate01 = this.pdvCalFromTo.form.divTo.form.cboYear.value + this.pdvCalFromTo.form.divTo.form.cboMonth.value + sDay.toString().padLeft(2, "0");
        			this.fnSetCalendarTo(this.pdvCalFromTo.form.divTo.form.cboYear.value, this.pdvCalFromTo.form.divTo.form.cboMonth.value, sDay.toString().padLeft(2, "0"));

        			if((!this.gfnIsNull(sTempSelDate01) && (sTempSelDate01.substr(0,4) == this.pdvCalFromTo.form.divFrom.form.cboYear.value
        			|| sTempSelDate01.substr(4,2) == this.pdvCalFromTo.form.divFrom.form.cboMonth.value))
        			|| (!this.gfnIsNull(sTempSelDate02) && (sTempSelDate02.substr(0,4) == this.pdvCalFromTo.form.divFrom.form.cboYear.value
        			|| sTempSelDate02.substr(4,2) == this.pdvCalFromTo.form.divFrom.form.cboMonth.value))
        			)
        			{
        				this.fnSetCalendarFrom(this.pdvCalFromTo.form.divFrom.form.cboYear.value, this.pdvCalFromTo.form.divFrom.form.cboMonth.value, "");
        			}
        		}

        		// 기간 : yyyy-mm-dd ~ ...
        		// 기간 : yyyy-mm-dd ~ yyyy-mm-dd ( xx 일간 )
        		var sMsg = "기간 : "+this.gfnGetMaskFormatString(this.gfnStrToDate(this.fvSelDate01), "yyyy-MM-dd")+" ~ ";
        		if(this.gfnIsNull(this.fvSelDate02))
        		{
        			sMsg += "...";
        		}
        		else
        		{
        			sMsg += this.gfnGetMaskFormatString(this.gfnStrToDate(this.fvSelDate02), "yyyy-MM-dd")+" ( "+nexacro.toNumber(this.gfnGetDiffDate(this.fvSelDate01,this.fvSelDate02)+1)+"일간 )";
        		}
        		this.pdvCalFromTo.form.staDesc.set_text(sMsg);
        	}
        };

        /**
         * @description 초기화 클릭시
        */
        this.pdvCalFromTo_btnOk_onclick = function(obj,e)
        {
        	var sOrgValue = this.fnGetDay().toString();
        	this.fnSetDay(null, null);

        	if ( sOrgValue != this.fnGetDay().toString())
        	{
        		//사용자 콜백함수 호출
        		if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        		{
        			this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, this.fnGetDay());		// 본 화면에 콜백
        		}
        	}
        	this.fvSelDate01 = "";
        	this.fvSelDate02 = "";
        	this.pdvCalFromTo.closePopup();
        };

        /**
         * @description 닫기 클릭시
        */
        this.pdvCalFromTo_btnCancel_onclick = function(obj,e)
        {
        	this.fvSelDate01 = "";
        	this.fvSelDate02 = "";
        	this.pdvCalFromTo.closePopup();
        };

        /**
         * @description popupDiv 닫힐때 처리
        */
        this.pdvCalFromTo_oncloseup = function(obj,e)
        {
        	this.fvSelDate01 = "";
        	this.fvSelDate02 = "";
        };

        /**
         * @description "X" 클릭시
        */
        this.pdvCalFromTo_btnClose_onclick = function(obj,e)
        {
        	this.fvSelDate01 = "";
        	this.fvSelDate02 = "";
        	this.pdvCalFromTo.closePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.pdvCalFromTo.addEventHandler("oncloseup",this.pdvCalFromTo_oncloseup,this);
            this.pdvCalFromTo.form.divFrom.form.staD1.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD2.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD3.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD4.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD5.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD6.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD7.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD8.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD9.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD10.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD11.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD12.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD13.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD14.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD15.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD16.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD17.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD18.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD19.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD20.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD21.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD22.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD23.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD24.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD25.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD26.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD27.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD28.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD29.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD30.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD31.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD32.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD33.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD34.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD35.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD36.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD37.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD38.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD39.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD40.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD41.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.staD42.addEventHandler("onclick",this.pdvCalFromTo_divFrom_staD_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.btnMonthPrev.addEventHandler("onclick",this.pdvCalFromTo_divFrom_btnMonthPrev_onclick,this);
            this.pdvCalFromTo.form.divFrom.form.cboMonth.addEventHandler("onitemchanged",this.pdvCalFromTo_divFrom_cboMonth_onitemchanged,this);
            this.pdvCalFromTo.form.divFrom.form.cboYear.addEventHandler("onitemchanged",this.pdvCalFromTo_divFrom_cboYear_onitemchanged,this);
            this.pdvCalFromTo.form.divFrom.form.btnMonthNext.addEventHandler("onclick",this.pdvCalFromTo_divFrom_btnMonthNext_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD1.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD2.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD3.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD4.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD5.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD6.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD7.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD8.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD9.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD10.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD11.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD12.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD13.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD14.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD15.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD16.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD17.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD18.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD19.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD20.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD21.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD22.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD23.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD24.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD25.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD26.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD27.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD28.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD29.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD30.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD31.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD32.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD33.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD34.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD35.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD36.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD37.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD38.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD39.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD40.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD41.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.staD42.addEventHandler("onclick",this.pdvCalFromTo_divTo_staD_onclick,this);
            this.pdvCalFromTo.form.divTo.form.btnMonthNext.addEventHandler("onclick",this.pdvCalFromTo_divTo_btnMonthNext_onclick,this);
            this.pdvCalFromTo.form.divTo.form.btnMonthPrev.addEventHandler("onclick",this.pdvCalFromTo_divTo_btnMonthPrev_onclick,this);
            this.pdvCalFromTo.form.divTo.form.cboYear.addEventHandler("onitemchanged",this.pdvCalFromTo_divTo_cboYear_onitemchanged,this);
            this.pdvCalFromTo.form.divTo.form.cboMonth.addEventHandler("onitemchanged",this.pdvCalFromTo_divTo_cboMonth_onitemchanged,this);
            this.pdvCalFromTo.form.btnClose.addEventHandler("onclick",this.pdvCalFromTo_btnClose_onclick,this);
            this.pdvCalFromTo.form.btnCancel.addEventHandler("onclick",this.pdvCalFromTo_btnCancel_onclick,this);
            this.pdvCalFromTo.form.btnClear.addEventHandler("onclick",this.pdvCalFromTo_btnOk_onclick,this);
            this.calFrom.addEventHandler("onchanged",this.calFrom_onchanged,this);
            this.calFrom.addEventHandler("canchange",this.calFrom_canchange,this);
            this.calTo.addEventHandler("onchanged",this.calTo_onchanged,this);
            this.calTo.addEventHandler("canchange",this.calTo_canchange,this);
            this.btnFromTo.addEventHandler("onclick",this.btnFromTo_onclick,this);
        };
        this.loadIncludeScript("comCalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
