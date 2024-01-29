(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component_01");
            this.set_titletext("sta,edt,msk,txt,cbo,lst,spn,cal,mnu");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,3743);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta109_00_00_00_00_01_00_00","48","4052",null,"151","52",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_01","48","2851",null,"292","52",null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_01_00","48","3163",null,"864","52",null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00","48","2559",null,"272","52",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00","48","2231",null,"308","52",null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00","48","1805",null,"406","52",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00","48","1149",null,"308","52",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00","48","1477",null,"308","52",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109","48","160",null,"969","52",null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","242","4093",null,"50","288",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBar");
            obj.set_text("<fc v=\'#3683e2\'><fs v=\'13\'>IRS</fs></fc>\r\nComponent KIT\r\n<fc v=\'#acafbb\'><fs v=\'11\'>sta, edt, msk, txt, cbo, lst, spn, cal, mnu</fs></fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","98","210","72","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","280","210","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","280","238","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","280","258","303","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("14px \"NotoSansKR\" \r\n가나다라마바사아자차카타파하");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","693","238","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","693","258","303","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("14px \"NotoSansKR\" \r\n가나다라마바사아자차카타파하");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","98","1199","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","280","1199","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","280","1227","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Edit("edt09","280","1250","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("투비");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","508","1250","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("투비");
            obj.set_enable("false");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","743","1250","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("투비");
            obj.set_readonly("true");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","508","1227","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","743","1227","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","280","1310","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt03","280","1361","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("essential");
            obj.set_value("투비");
            obj.set_readonly("false");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("sta31","98","1527","115","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("MaskEdit");
            this.addChild(obj.name, obj);

            obj = new Static("sta36","280","1644","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta39","280","1527","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak07","280","1584","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak01","508","1584","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak02","743","1584","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak03","280","1701","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta41","98","1855","115","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("TextArea");
            this.addChild(obj.name, obj);

            obj = new Static("sta42","280","1855","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","280","1917","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비\n투비\n투비\n투비\n투비");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa02","508","1917","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa03","743","1917","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta47","280","2021","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa04","280","2083","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta51","98","2281","94","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Combo");
            this.addChild(obj.name, obj);

            obj = new Static("sta52","280","2281","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta57","280","2402","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo02","280","2342","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo02_innerdataset = new nexacro.NormalDataset("cbo02_innerdataset", obj);
            cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(cbo02_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","508","2342","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var cbo01_innerdataset = new nexacro.NormalDataset("cbo01_innerdataset", obj);
            cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(cbo01_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo03","743","2342","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cbo03_innerdataset = new nexacro.NormalDataset("cbo03_innerdataset", obj);
            cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(cbo03_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo04","280","2463","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityenable("true");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            var cbo04_innerdataset = new nexacro.NormalDataset("cbo04_innerdataset", obj);
            cbo04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(cbo04_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta63","98","2609","95","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("ListBox");
            this.addChild(obj.name, obj);

            obj = new Static("sta64","280","2609","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new ListBox("lsb00","280","2669","150","102",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var lsb00_innerdataset = new nexacro.NormalDataset("lsb00_innerdataset", obj);
            lsb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(lsb00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new ListBox("lsb01","508","2669","150","102",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var lsb01_innerdataset = new nexacro.NormalDataset("lsb01_innerdataset", obj);
            lsb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(lsb01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta68","98","2901","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Spin");
            this.addChild(obj.name, obj);

            obj = new Static("sta69","280","2901","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta74","280","3010","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Spin("spn00","280","2950","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new Spin("spn02","508","2950","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new Spin("spn03","743","2950","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new Spin("spn04","280","3059","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta78","98","3213","118","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Calendar");
            this.addChild(obj.name, obj);

            obj = new Static("sta79","280","3213","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta84","280","3328","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","3268","150","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("52");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal02","508","3268","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal03","743","3268","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal04","280","3383","150","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("55");
            obj.set_value("20230926");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta87","280","3552","70","14",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("캘린더 팝업");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal06","280","3602","243","288",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("20191225");
            obj.set_type("monthonly");
            obj.set_enable("true");
            obj.set_usetrailingday("true");
            obj.set_headheight("60");
            obj.set_showmonthspin("false");
            obj.set_showyearspin("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta96","280","3443","27","14",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal07","280","3493","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("20230926");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("sta24","280","353","562","160",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v=\'12\'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v=\'red\'></fc><fc v=\'#FF00FF\'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v=\'굴림\'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v=\'true\'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v=\'true\'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v=\'true\'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v=\'true\'></s>");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_GBg02");
            this.addChild(obj.name, obj);

            obj = new Static("sta28","280","327","232","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("※ usedecorate =\"<b v=\'true\'>true</b>\"");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","280","525","46","14",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","280","547","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("대타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","467","547","88","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","280","1338","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","267","1251","9","29",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta59","249","1258","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","280","1560","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","508","1560","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta18","743","1560","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta19","280","1677","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta29","269","1584","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta32","251","1590","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta33","280","1891","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta34","508","1891","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta35","743","1891","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta37","280","2057","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta38","280","2319","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta43","508","2319","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta44","743","2319","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta45","280","2440","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta46","268","2342","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta48","250","2349","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta49","508","2642","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta53","280","2642","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta54","743","2917","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta55","280","2927","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta56","508","2927","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta60","743","2927","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta61","280","3036","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta65","249","2957","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta66","267","2950","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta70","280","3245","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta71","508","3245","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta72","743","3245","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta73","280","3360","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta75","249","3275","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta76","267","3268","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta80","710","3487","187","57",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("이전 다음달 표기 \r\nusetrailingday: true");
            obj.set_cssclass("sta_WF_GBg02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta81","280","3573","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("type: monthonly");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Static("sta82","280","3464","125","23",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("type: spin");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Static("sta83","508","1310","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","508","1361","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("error");
            obj.set_value("투비");
            obj.set_readonly("false");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("sta85","508","1338","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta86","743","1310","103","14",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_text("아웃풋(라인없음)");
            this.addChild(obj.name, obj);

            obj = new Static("sta88","743","1338","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta89","508","2021","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta90","508","2057","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta91","743","2021","103","14",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_text("아웃풋(라인없음)");
            this.addChild(obj.name, obj);

            obj = new Static("sta92","743","2057","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak00","508","1701","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_cssclass("error");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mak04","743","1701","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_readonly("false");
            obj.set_value("1500000000");
            obj.set_format("###,###");
            obj.set_cssclass("output");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa01","508","2083","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            obj.set_cssclass("error");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa05","743","2083","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            obj.set_cssclass("output");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta93","508","1644","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta94","508","1677","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta95","743","1644","103","14",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_text("아웃풋(라인없음)");
            this.addChild(obj.name, obj);

            obj = new Static("sta97","743","1677","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta98","508","2402","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta99","508","2440","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","508","2463","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityenable("true");
            obj.set_cssclass("error");
            obj.set_readonly("false");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta100","508","3010","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta101","508","3036","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Spin("spn01","508","3059","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("error");
            obj.set_readonly("false");
            obj.set_value("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta102","508","3328","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("에러");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta103","508","3360","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","508","3383","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_cssclass("error");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal05","508","3493","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_showyearspin("false");
            obj.set_type("spin");
            obj.set_cssclass("error");
            this.addChild(obj.name, obj);

            obj = new Static("sta104","98","4092","118","21",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Menu");
            this.addChild(obj.name, obj);

            obj = new Menu("mnu00","242","3568","1006","50",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var mnu00_innerdataset = new nexacro.NormalDataset("mnu00_innerdataset", obj);
            mnu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captioncolumn\">메뉴</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">2뎁스메뉴</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Last Menu</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">1</Col><Col id=\"hotkeycolumn\">hotkey</Col></Row><Row><Col id=\"captioncolumn\">Last Menu</Col><Col id=\"levelcolumn\">2</Col><Col id=\"checkboxcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">2뎁스메뉴</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">2뎁스메뉴</Col><Col id=\"levelcolumn\">1</Col><Col id=\"checkboxcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">메뉴</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">메뉴</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">0</Col><Col id=\"hotkeycolumn\">hotkey</Col></Row><Row><Col id=\"captioncolumn\">메뉴</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">메뉴</Col><Col id=\"levelcolumn\">0</Col><Col id=\"checkboxcolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(mnu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"64","61","50","50",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("01");
            obj.set_cssclass("sta_WF_GNum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02_00","743","1361","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_value("투비");
            obj.set_cssclass("output");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("sta10_00","645","547","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_SubTitle02");
            this.addChild(obj.name, obj);

            obj = new Calendar("calM","710","3554","175",null,null,"161",null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","283","665","375","30",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("콤보 및 가변적인 컬럼은 대상컬럼에서 제외합니다.");
            obj.set_cssclass("sta_WF_DscTxt");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo00","283","705","375","30",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("콤보 및 가변적인 컬럼은 대상컬럼에서 제외합니다.");
            obj.set_cssclass("sta_WF_DscTxt2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","280","884","503","82",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("div_WF_HelpBox");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo01_00","15","37",null,"30","15",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말 화면도움말 화면도움말 화면도t움말 화면도움말 화면도움말");
            obj.set_cssclass("sta_WF_Dsc");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staInfo01","15","12","375","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_WF_DscTitle");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","280","984","503","82",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("div_WF_HelpBox");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo01_00","15","37",null,"30","15",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말 화면도움말 화면도움말 화면도t움말 화면도움말 화면도움말");
            obj.set_cssclass("sta_WF_Dsc");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("staInfo01","15","12","375","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_WF_DscTitle2");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta04_01_01","283",null,"290","10",null,"2857",null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo01_00","283","760",null,"30","314",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("화면도움말 화면도움말 화면도움말 화면도t움말 화면도움말 화면도움말");
            obj.set_cssclass("sta_WF_Dsc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo01_00_00","283","805",null,"30","314",null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("화면도움말 화면도움말 화면도움말 화면도t움말 화면도움말 화면도움말");
            obj.set_cssclass("sta_WF_Dsc2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","283","614",null,"30","168",null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1070,3743,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Component01.xfdl", function() {

        this.edt03_onchanged = function(obj,e)
        {

        };

        this.sta24_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta109_00_00_00_00_01_00_00.addEventHandler("onclick",this.sta109_00_00_00_00_01_onclick,this);
            this.sta109_00_00_00_00_01.addEventHandler("onclick",this.sta109_00_00_00_00_01_onclick,this);
            this.sta109_00_00_00_00_01_00.addEventHandler("onclick",this.sta109_00_00_00_00_01_onclick,this);
            this.edt03.addEventHandler("onchanged",this.edt03_onchanged,this);
            this.sta24.addEventHandler("onclick",this.sta24_onclick,this);
            this.sta59.addEventHandler("onclick",this.Static102_onclick,this);
            this.sta32.addEventHandler("onclick",this.Static102_onclick,this);
            this.sta48.addEventHandler("onclick",this.Static102_onclick,this);
            this.sta65.addEventHandler("onclick",this.Static102_onclick,this);
            this.sta75.addEventHandler("onclick",this.Static102_onclick,this);
            this.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
        };
        this.loadIncludeScript("Component01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
