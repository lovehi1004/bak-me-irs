(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component_02");
            this.set_titletext("btn,chk,rdo,tab,pmnu,file,grb,div,pdiv,pgb,img");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,4171);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("da_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">KRW</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">KRW</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">KRW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">1</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"매입계산서번호\" type=\"STRING\" size=\"256\"/><Column id=\"전표발행\" type=\"STRING\" size=\"256\"/><Column id=\"정산일\" type=\"STRING\" size=\"256\"/><Column id=\"발생일자\" type=\"STRING\" size=\"256\"/><Column id=\"시간구분\" type=\"STRING\" size=\"256\"/><Column id=\"과세구분\" type=\"STRING\" size=\"256\"/><Column id=\"대금지불유형\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"단가\">1500000000</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"NO\">01</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">02</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">03</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"NO\">04</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">05</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">06</Col><Col id=\"단위\">KRW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">1뎁스메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">2뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta109_00_00_00_00_00_00_00_00","47","3643",null,"161","53",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00_00_00_00_00","47","3824",null,"266","53",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00_00_00","47","3462",null,"161","53",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00_00","47","3205",null,"237","53",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00","47","2645",null,"176","53",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00","47","2841",null,"344","53",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00","47","2232",null,"393","53",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00","47","2026",null,"186","53",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00","47","1820",null,"186","53",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109","47","151",null,"1649","53",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","463","1661","485","87",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","463","1488","485","109",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","463","1325","485","93",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GBg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","463","995","485","77",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","463","1158","485","93",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GBg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","553","1013","301","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","388","2666","140","122",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            obj.set_navigationbuttonsize("23");
            var PopupMenu00_innerdataset = new nexacro.NormalDataset("PopupMenu00_innerdataset", obj);
            PopupMenu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"hotkeycolumn\">hotkey</Col><Col id=\"iconcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"iconcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"iconcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"iconcolumn\">1</Col><Col id=\"checkboxcolumn\">true</Col></Row><Row><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"hotkeycolumn\">hotkey</Col><Col id=\"iconcolumn\">1</Col></Row><Row><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"enablecolumn\">false</Col><Col id=\"iconcolumn\">1</Col></Row><Row><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">투비</Col><Col id=\"iconcolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(PopupMenu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static03","97","1870","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("CheckBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","97","2076","73","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Radio");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","408","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("체크");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","332","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("체크");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","556","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("체크");
            obj.set_value("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","632","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("체크");
            obj.set_value("true");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","791","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("체크");
            obj.set_value("false");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","867","1924","61","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("체크");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","331","2077","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","791","2077","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","331","2127","171","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("2");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미선택</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","97","2282","47","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Tab");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","138","2380","370","60",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("텝페이지01");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("텝페이지02");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("텝페이지03");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("텝페이지04");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static25","97","2695","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","97","2891","44","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("File");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","282","3028","86","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("FileDownLoad");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","282","2888","67","14",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("FileUpLoad");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fud00","282","2957","235","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_itemheight("30");
            obj.set_buttontext("파일업로드");
            obj.set_buttonsize("88");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fud02","575","2957","235","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_itemheight("30");
            obj.set_buttontext("파일업로드");
            obj.set_buttonsize("88");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdd00","282","3097","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdd01","575","3097","101","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","97","3255","129","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("GroupBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","282","3265","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","575","3265","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","282","3286","150","110",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","575","3286","150","110",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","97","3512","175","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Div/PopupDiv");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","282","3496","512","100",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Div / PopupDiv는 일반적인 사용은 Form을 로드해서 사용하거나 컴포넌트를 직접 정렬시키는 경우나 그룹핑이 대부분이며,\r\n<b v=\'true\'>디자인 요소가 필요할 경우, Class로 지정해서 사용</b>");
            obj.set_cssclass("sta_WF_GBg02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","97","3693","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("ProgressBar");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","282","3700","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","575","3700","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb00","282","3726","235","14",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_smooth("true");
            obj.set_direction("forward");
            obj.set_color("transparent");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb01","575","3726","235","14",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_smooth("true");
            obj.set_direction("forward");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","97","3874","163","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("ImageViewer");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","282","3871","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","282","3929","170","112",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_image("url(\'theme://images/sta_LOGIN_Logo.png\')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","575","3929","170","112",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_enable("false");
            obj.set_image("url(\'theme://images/sta_LOGIN_Logo.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","282","2696","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("팝업메뉴");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","556","2127","171","30",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("3");
            obj.set_enable("false");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미선택</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","791","2127","171","30",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("3");
            obj.set_cssclass("essential");
            var Radio02_innerdataset = new nexacro.NormalDataset("Radio02_innerdataset", obj);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미선택</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","331","1870","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","331","1898","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","556","1898","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","791","1870","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("필수");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","791","1898","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","318","1924","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","300","1933","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","331","2103","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","556","2103","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","791","2103","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","317","2127","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","299","2136","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","575","2923","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","282","2923","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","575","3063","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","282","3063","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","98","210","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Button");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","280","210","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","281","240","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","370","240","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","279","266","42","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","368","266","42","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","122","400","36","14",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("CRUD");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","185","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","128","663","43","14",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Search");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","128","1134","115","14",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Input 내 검색버튼");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","128","1300","86","14",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("별도 검색버튼");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","132","1197","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","298","1197","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","538","1190","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","691","1200","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("edi_WF_Search");
            obj.set_text("넥사크로17");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","856","1200","24","30",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","131","1359","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_SchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","297","1359","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("btn_WF_SchSmall");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","691","1360","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_readonly("false");
            obj.set_value("12345");
            obj.set_text("12345");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","763","1360","12","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","775","1360","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_readonly("false");
            obj.set_value("12345");
            obj.set_text("12345");
            this.addChild(obj.name, obj);

            obj = new Button("Button32","850","1360","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_SchSmall");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","128","1461","46","14",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("Shuttle");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Button("Button33","128","1516","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Up");
            this.addChild(obj.name, obj);

            obj = new Button("Button34","162","1516","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Down");
            this.addChild(obj.name, obj);

            obj = new Button("Button39","524","1524","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("btn_WF_Up");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","558","1524","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("btn_WF_Down");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","513","1197","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static116","544","1225","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static145","128","1637","30","14",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("Page");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Static("Static151","501","1692","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("19");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static155","528","1719","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("19");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button56","128","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("btn_WF_PageP");
            this.addChild(obj.name, obj);

            obj = new Button("Button57","146","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("btn_WF_PageL");
            this.addChild(obj.name, obj);

            obj = new Button("Button58","175","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("btn_WF_PageR");
            this.addChild(obj.name, obj);

            obj = new Button("Button59","193","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("btn_WF_PageN");
            this.addChild(obj.name, obj);

            obj = new Button("Button52","287","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("btn_WF_PageP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button53","305","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("btn_WF_PageL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button60","334","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("btn_WF_PageR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button61","352","1696","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_cssclass("btn_WF_PageN");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","128","725","80","32",null,null,"75",null,null,null,this);
            obj.set_taborder("154");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","289","725","80","32",null,null,"75",null,null,null,this);
            obj.set_taborder("155");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("false");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","185","486","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","463","405","131","14",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","128","972","76","14",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("디테일버튼");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","128","1031","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","289","1031","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","128","801","103","14",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("Grid Control");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Button("Button35","217","866","72","30",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button36","292","866","71","30",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","269","266","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","251","273","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","125","424","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","289","424","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","289","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","289","486","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","289","696","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","128","696","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","116","725","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","98","732","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("32");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","128","834","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","128","866","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","289","1003","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","128","1003","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","463","972","142","14",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","553","1013","108","44",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("라벨");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","665","1020","141","30",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_readonly("false");
            obj.set_text("넥사크로17");
            this.addChild(obj.name, obj);

            obj = new Button("Button50","809","1020","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","853","1019","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","865","1025","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","804","1054","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","806","1043","3","9",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","289","1163","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","128","1163","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","463","1134","142","14",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","527","1190","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","537","1218","28","9",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","691","1172","195","23",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("Edit Class: edi_WF_Search");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","538","1355","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_cssclass("btn_WF_SchSmall");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","513","1362","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","545","1391","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","463","1300","142","14",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","527","1355","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","538","1384","28","9",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static103","128","1332","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","289","1332","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","128","1488","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","289","1488","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","287","1518","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_cssclass("btn_WF_Up");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button38","321","1518","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_cssclass("btn_WF_Down");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","463","1461","142","14",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","532","1562","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static106","524","1555","29","9",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","499","1531","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","513","1524","9","29",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","553","1508","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","553","1521","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button51","652","1507","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_cssclass("btn_WF_Left");
            this.addChild(obj.name, obj);

            obj = new Button("Button54","652","1541","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_cssclass("btn_WF_Right");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","653","1536","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static112","641","1531","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static113","463","1637","142","14",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("사이즈/간격/활용예시");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static114","128","1668","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static115","289","1668","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("Static117","525","1710","19","9",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static118","514","1689","9","19",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","560","2380","370","60",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_showextrabutton("true");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("텝페이지02");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab01);
            obj.set_text("텝페이지03");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab01);
            obj.set_text("텝페이지04");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static120","141","2347","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static119","560","2350","147","23",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("showextrabutton : true");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab02","139","2499","370","60",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_tabindex("0");
            obj.set_showextrabutton("false");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab02);
            obj.set_text("가나");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab02);
            obj.set_text("가나다");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab02);
            obj.set_text("가나다라");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab02);
            obj.set_text("가나");
            this.Tab02.addChild(obj.name, obj);

            obj = new Static("Static121","137","2466","147","23",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("tabjustify : true");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab03","560","2499","370","60",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab03);
            obj.set_text("가나");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab03);
            obj.set_text("가나다");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab03);
            obj.set_text("가나다라");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab03);
            obj.set_text("가나");
            this.Tab03.addChild(obj.name, obj);

            obj = new Static("Static122","560","2466","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("(업무화면기본) tabjustify : false");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","507","1684","383","33",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","19","5","347","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","18","0","19","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageL");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","309","0","19","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PageR");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button06","0","0","19","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PageP");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button07","327","0","19","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PageN");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","43","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button09","69","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button10","95","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button11","121","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button12","147","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button13","173","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button14","199","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button15","225","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button16","251","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button17","277","0","26","19",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnCust01_00","398","725","119","32",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00","186","521","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button45_00","289","521","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_cssclass("sta_WF_GBar");
            obj.set_text("<fc v=\'#3683e2\'><fs v=\'13\'>IRS</fs></fc>\r\nComponent KIT\r\n<fc v=\'#acafbb\'><fs v=\'11\'>btn, chk, rdo, tab, pmnu, file, grb, div, pdiv, pgb, img</fs></fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"64","61","50","50",null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("02");
            obj.set_cssclass("sta_WF_GNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","88","380",null,"1","92",null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_cssclass("sta_WF_GLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static79_00","116","865","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static89_00","98","872","22","16",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta106","282","3894","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("stretch : fixaspectratio");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Static("sta106_00","575","3894","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("stretch : fit");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","105","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_01","105","486","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00_00","106","521","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","525","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_02","525","486","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("202");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00_01","525","521","88","32",null,null,"75",null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00","481","460","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("W75");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00_00","481","495","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("W75");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00_00_00","481","565","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("W101");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00_01","481","530","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_text("W88");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00_01_00","525","556","101","32",null,null,"75",null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00_00_00_00","481","600","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("W114");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00_01_00_00","525","591","114","32",null,null,"75",null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("가나다라마바");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button12_00_01_00_00_00","525","626","127","32",null,null,"75",null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00_00_00_00_00","481","635","32","13",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("W127");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","525","162","42","30",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("가나");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01","491","171","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("W42");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","525","195","54","30",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01_00","491","204","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("W54");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","525","228","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01_00_00","491","237","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("W66");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","525","261","78","30",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01_00_00_00","491","270","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("W78");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","525","294","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01_00_00_00_00","491","303","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("W90");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","525","327","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_01_00_00_00_00_00","485","336","28","13",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("W102");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","835","176","42","30",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Edit("edt09","682","176","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_value("투비");
            obj.set_text("투비");
            this.addChild(obj.name, obj);

            obj = new Static("Static97_00","830","204","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static98_00","832","193","3","9",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","893","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("229");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_02","815","451","75","32",null,null,"75",null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static97_00_00","888","484","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static98_00_00","890","453","3","29",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","211","725","32","32",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_cssclass("btn_WF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00_00","366","866","71","30",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","596","732","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_cssclass("btn_WF_Help");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage3.form,function(p){});
            this.Tab01.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage4.form,function(p){});
            this.Tab01.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage1.form,function(p){});
            this.Tab02.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage2.form,function(p){});
            this.Tab02.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage3.form,function(p){});
            this.Tab02.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage4.form,function(p){});
            this.Tab02.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab03.Tabpage1.form,function(p){});
            this.Tab03.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab03.Tabpage2.form,function(p){});
            this.Tab03.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab03.Tabpage3.form,function(p){});
            this.Tab03.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab03.Tabpage4.form,function(p){});
            this.Tab03.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,4171,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Component02.xfdl", function() {
        this.Button02_onclick = function(obj,e)
        {
        		this.PopupMenu00.trackPopupByComponent(obj, 86, 0)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
            this.CheckBox03.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.CheckBox00.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.CheckBox04.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.CheckBox05.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.CheckBox06.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.CheckBox07.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static63.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button23.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Button25.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Button26.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Button27.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Edit04.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Edit00.addEventHandler("onchanged",this.Edit04_onchanged,this);
            this.Button33.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button39.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static70.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static116.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static151.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static155.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button04.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Button08.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Static87.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static89.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static93.addEventHandler("onclick",this.Static45_onclick,this);
            this.Edit01.addEventHandler("onchanged",this.Div01_Edit00_onchanged,this);
            this.Static96.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static97.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button31.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Static60.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static62.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button37.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static68.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static107.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static109.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button51.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static112.addEventHandler("onclick",this.Static102_onclick,this);
            this.Tab01.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab02.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab03.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Static89_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00_01.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_00_00_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01_00_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static87_01_00_00_00_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static97_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static97_00_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Button04_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Component02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
