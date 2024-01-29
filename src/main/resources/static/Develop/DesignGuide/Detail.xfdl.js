(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_titletext("Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","0",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta05","0","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta09","391","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label_essential");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","783","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta11","1174","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta12","783","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta13","1174","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta14","391","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","1174","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","783","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","157","7","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","157","50","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","548","7","228","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt01","548","50","228","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo01","157","93","70","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt03","239","94","70","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt04","321","94","70","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","227","94","12","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01","309","94","12","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn02","356","50","28","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","748","50","28","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","940","7","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","940","50","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","940","93","150","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal00","1331","7","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn01","1516","50","42","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_text("버튼");
            this.div01.addChild(obj.name, obj);

            obj = new Spin("spn00","1331","93","227","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","1331","50","182","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div01_00","0","160",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05","0","43","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10","1096","0","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12","1096","43","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta15","1096","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17","620","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","50","932","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05","1253","7",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_value("1234567890");
            obj.set_cssclass("output");
            obj.set_text("1234567890");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00","1253","50",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7","932","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_text("현대제철 주식회사");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01","306","93","307","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_value("홍길동");
            obj.set_cssclass("output");
            obj.set_text("홍길동");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","777","93","311","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            obj.set_value("탄소중립기획팀");
            obj.set_cssclass("output");
            obj.set_text("탄소중립기획팀");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","1253","93",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
            obj.set_value("매니저");
            obj.set_cssclass("output");
            obj.set_text("매니저");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_00","620","129","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","306","136","307","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("22");
            obj.set_value("01-1111-2222");
            obj.set_cssclass("output");
            obj.set_text("01-1111-2222");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","777","136",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("23");
            obj.set_value("aaa@naver.com");
            obj.set_cssclass("output");
            obj.set_text("aaa@naver.com");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","86","150","87",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","149","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","129","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("21");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
