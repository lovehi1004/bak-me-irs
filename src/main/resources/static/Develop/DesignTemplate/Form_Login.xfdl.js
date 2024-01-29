(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("로그인화면");
            this.set_cssclass("frm_LOGIN_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,923);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"Title\" type=\"STRING\" size=\"256\"/><Column id=\"Date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Title\">2023년 7월 배출권 및 외부사업 인증실적 거래정보</Col><Col id=\"Date\">2023.08.16&#13;</Col></Row><Row><Col id=\"Title\">「배출권 유상할당 및 시장안정화 조치를 위한 배출권 추가할당에 관한 규정」 일부...</Col><Col id=\"Date\">2023.07.19</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","220","124","1480","623",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","320","280",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_LOGIN_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","11",null,"40","15",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("협정");
            obj.set_cssclass("sta_MF_BoxTitleB");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"58","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","35","58",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("체결중");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"106","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"154","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","106",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("미발효");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","154",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("발효");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","350","0","320","280",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_LOGIN_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","11",null,"40","15",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("방법론");
            obj.set_cssclass("sta_MF_BoxTitleP");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"58","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","35","58",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"106","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"154","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","106",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("검토");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","154",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"202","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","35","202",null,"48","Static02_00_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","700","0","320","280",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_LOGIN_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","11",null,"40","15",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("사업");
            obj.set_cssclass("sta_MF_BoxTitleO");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"58","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","35","58",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"106","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"154","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","106",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("평가");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","154",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"202","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","35","202",null,"48","Static02_00_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01",null,"0","400","444","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_LOGIN_Box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","45","46",null,"60","45",null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디");
            obj.set_cssclass("edt_LOGIN_Input");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","45","106",null,"60","45",null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("비밀번호");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_password("true");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","Edit00:-25","66","20","20",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LOGIN_TextClear");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","45","196",null,"45","45",null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LOGIN_Submit");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","55","259","150","32",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_IdSave");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00","45",null,"37.5%","45",null,"45",null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_LOGIN_UserAdd");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","Button01_00:10","354",null,"45","45",null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_LOGIN_IdPWFind");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00",null,"474","400","149","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","29","45","63","59",null,null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Help");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","125","18","60","30",null,null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("문의");
            obj.set_cssclass("sta_LOGIN_HelpText");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","125","47","220","55",null,null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("1577-8095");
            obj.set_cssclass("sta_LOGIN_HelpCall");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","125","105","265","24",null,null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("평일 09:30~18:00  토·일요일, 공휴일은 휴무");
            obj.set_cssclass("sta_LOGIN_HelpTextS");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div02","0","328","1020","116",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Div02");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0",null,null,"68","0","0",null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("0");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LOGIN_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"800\"/><Column size=\"100\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\"/><Cell col=\"1\" text=\"bind:Date\" cssclass=\"Cell_NoticeDate\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","48",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","915","15","96","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_NoticeMore");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0",null,"320","141",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","108",null,"104","30",null,"0",null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_More");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","112","4","140","50",null,null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("법령과 지침");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","112","47",null,"50","10",null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("국제감축사업 및 실적에 관한\r\n법령과 지침을 확인해보세요.");
            obj.set_cssclass("sta_LOGIN_Text");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","21","80","80",null,null,null,null,null,null,this.Div01.form.Div03.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/main/ico_LOGIN_Guide.png\')");
            obj.set_stretch("none");
            this.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div03_00","350",null,"320","141",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","108",null,"104","30",null,"0",null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("0");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_More");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static00","112","4","140","50",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("자료실");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","112","47",null,"50","10",null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("국제감축사업 및 실적에 관한\r\n\r자료를 제공합니다.");
            obj.set_cssclass("sta_LOGIN_Text");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","21","80","80",null,null,null,null,null,null,this.Div01.form.Div03_00.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/main/ico_LOGIN_Data.png\')");
            obj.set_stretch("none");
            this.Div01.form.Div03_00.addChild(obj.name, obj);

            obj = new Div("Div03_00_00","700",null,"320","141",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","108",null,"104","30",null,"0",null,null,null,null,this.Div01.form.Div03_00_00.form);
            obj.set_taborder("0");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_More");
            this.Div01.form.Div03_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","112","4","140","50",null,null,null,null,null,null,this.Div01.form.Div03_00_00.form);
            obj.set_taborder("1");
            obj.set_text("정보공개");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div03_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","112","47",null,"50","10",null,null,null,null,null,this.Div01.form.Div03_00_00.form);
            obj.set_taborder("2");
            obj.set_text("국제감축사업 및 실적에 관한\r\n\r정보공개 내용을 확인해보세요.");
            obj.set_cssclass("sta_LOGIN_Text");
            this.Div01.form.Div03_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","21","80","80",null,null,null,null,null,null,this.Div01.form.Div03_00_00.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/main/ico_LOGIN_Info.png\')");
            obj.set_stretch("none");
            this.Div01.form.Div03_00_00.addChild(obj.name, obj);

            obj = new Div("Div00","0","803",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","90","25","207","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/main/img_BF_CI.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","354","23","171","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("sta_BF_TitleB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","354","54","796","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층    HelpDesk : 1577-8065     Fax : 043-714-7530\r\nCopyright© 2023 <b v=\'ture\'>IRS</b> All rights reserved.");
            obj.set_cssclass("sta_BT_address2");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"24","280","40","90",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("바로가기");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","0",null,"65","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_LOGIN_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","90","18","276","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"17","112","31","63",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"17","100","31","Button00_00_00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"17","136","31","Button00_00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"17","100","31","Button00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("자료실");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"17","112","31","Button00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00.form,function(p){});
            this.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00_00.form,function(p){});
            this.Div01.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form,function(p){});
            this.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00.form,function(p){});
            this.Div01.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02.form,function(p){});
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div03.form
            obj = new Layout("default","",0,0,this.Div01.form.Div03.form,function(p){});
            this.Div01.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div03_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div03_00.form,function(p){});
            this.Div01.form.Div03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div03_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div03_00_00.form,function(p){});
            this.Div01.form.Div03_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,923,this,function(p){});
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

        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
