(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(2070,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/><Column id=\"startCntnYmd\" type=\"STRING\" size=\"8\"/><Column id=\"endCntnYmd\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"uesYn\" type=\"STRING\" size=\"256\"/><Column id=\"regUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_common_reseult", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"systemMessage\" type=\"STRING\" size=\"256\"/><Column id=\"accessToken\" type=\"STRING\" size=\"256\"/><Column id=\"refreshToken\" type=\"STRING\" size=\"256\"/><Column id=\"issueToken\" type=\"STRING\" size=\"256\"/><Column id=\"reissueToken\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileClone", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchFileClone", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset_Statistics", this);
            obj._setContents("<ColumnInfo><Column id=\"totDt\" type=\"STRING\" size=\"30\"/><Column id=\"visitor\" type=\"STRING\" size=\"30\"/><Column id=\"edge\" type=\"STRING\" size=\"30\"/><Column id=\"chrome\" type=\"STRING\" size=\"30\"/><Column id=\"safari\" type=\"STRING\" size=\"30\"/><Column id=\"opera\" type=\"STRING\" size=\"30\"/><Column id=\"whale\" type=\"STRING\" size=\"30\"/><Column id=\"ie\" type=\"STRING\" size=\"30\"/><Column id=\"unknown\" type=\"STRING\" size=\"30\"/><Column id=\"utc1\" type=\"STRING\" size=\"30\"/><Column id=\"utc2\" type=\"STRING\" size=\"30\"/><Column id=\"utc3\" type=\"STRING\" size=\"30\"/><Column id=\"utc4\" type=\"STRING\" size=\"30\"/><Column id=\"utc5\" type=\"STRING\" size=\"30\"/><Column id=\"utc6\" type=\"STRING\" size=\"30\"/><Column id=\"utc0\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendViewer", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset_Viewer", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/><Column id=\"fileDtlSn\" type=\"INT\" size=\"256\"/><Column id=\"rs\" type=\"STRING\" size=\"256\"/><Column id=\"fn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rsa_reseult", this);
            obj._setContents("<ColumnInfo><Column id=\"RSAModulus\" type=\"STRING\" size=\"200\"/><Column id=\"RSAExponent\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"300\"/><Column id=\"groupCdEngNm\" type=\"STRING\" size=\"300\"/><Column id=\"groupCdKornNm\" type=\"STRING\" size=\"5\"/><Column id=\"cdRegLmtCnt\" type=\"STRING\" size=\"5\"/><Column id=\"cdCnt\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"20\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"10\"/><Column id=\"cdEngNm\" type=\"STRING\" size=\"300\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"300\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErrMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"errMsgCd\" type=\"STRING\" size=\"7\"/><Column id=\"errMsgClCd\" type=\"STRING\" size=\"7\"/><Column id=\"errMsgNtnCd\" type=\"STRING\" size=\"2\"/><Column id=\"errMsgNm\" type=\"STRING\" size=\"300\"/><Column id=\"inptCnt\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuMgno\" type=\"STRING\" size=\"10\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"10\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"7\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"100\"/><Column id=\"expsrYn\" type=\"STRING\" size=\"1\"/><Column id=\"popupYn\" type=\"STRING\" size=\"1\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"5\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"5\"/><Column id=\"sysClCd\" type=\"STRING\" size=\"7\"/><Column id=\"roleIdMgno\" type=\"STRING\" size=\"10\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"1\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"1\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"1\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"1\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"1\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"10\"/><Column id=\"menuPath\" type=\"STRING\" size=\"500\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCode", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCodes\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"10\"/><Column id=\"instMgno\" type=\"STRING\" size=\"10\"/><Column id=\"userClCd\" type=\"STRING\" size=\"10\"/><Column id=\"flnm\" type=\"STRING\" size=\"7\"/><Column id=\"deptNm\" type=\"STRING\" size=\"50\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"telDdd\" type=\"STRING\" size=\"300\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"4\"/><Column id=\"telPhino\" type=\"STRING\" size=\"4\"/><Column id=\"acntRprsvYn\" type=\"STRING\" size=\"4\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"1\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"7\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"7\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"1\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"300\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"7\"/><Column id=\"roleIdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"roleIdMgnoList\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserRole", this);
            obj._setContents("<ColumnInfo><Column id=\"roleIdMgno\" type=\"STRING\" size=\"10\"/><Column id=\"roleNm\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"archiveFileName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectedMultiDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new VirtualFile("FileList", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransferMultiDownload", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","395","25","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","38","23","160","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","220","23","139","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","77","466","139",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.getSetter("griduserproperty").set("import");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"description\"/><Cell col=\"3\" text=\"uesYn\"/><Cell col=\"4\" text=\"regUser\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:description\"/><Cell col=\"3\" text=\"bind:uesYn\"/><Cell col=\"4\" text=\"bind:regUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1019","169","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2. 로그인");
            obj.set_background("yellow");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button404","535","71","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("404");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonAuth","535","27","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑세스토큰누락");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonFileClone","694","213","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일복제");
            obj.set_background("#ccccff");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("EditFileClone","525","209","139","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_inputtype("digit");
            obj.set_background("#ccccff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Statistics","826","430","111","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("테스트 통계조회");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","50","472","890","216",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("Dataset_Statistics");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"totDt\"/><Cell col=\"1\" text=\"visitor\"/><Cell col=\"2\" text=\"edge\"/><Cell col=\"3\" text=\"chrome\"/><Cell col=\"4\" text=\"safari\"/><Cell col=\"5\" text=\"opera\"/><Cell col=\"6\" text=\"whale\"/><Cell col=\"7\" text=\"ie\"/><Cell col=\"8\" text=\"unknown\"/><Cell col=\"9\" text=\"utc1\"/><Cell col=\"10\" text=\"utc2\"/><Cell col=\"11\" text=\"utc3\"/><Cell col=\"12\" text=\"utc4\"/><Cell col=\"13\" text=\"utc5\"/><Cell col=\"14\" text=\"utc6\"/><Cell col=\"15\" text=\"utc0\"/></Band><Band id=\"body\"><Cell text=\"bind:totDt\"/><Cell col=\"1\" text=\"bind:visitor\"/><Cell col=\"2\" text=\"bind:edge\"/><Cell col=\"3\" text=\"bind:chrome\"/><Cell col=\"4\" text=\"bind:safari\"/><Cell col=\"5\" text=\"bind:opera\"/><Cell col=\"6\" text=\"bind:whale\"/><Cell col=\"7\" text=\"bind:ie\"/><Cell col=\"8\" text=\"bind:unknown\"/><Cell col=\"9\" text=\"bind:utc1\"/><Cell col=\"10\" text=\"bind:utc2\"/><Cell col=\"11\" text=\"bind:utc3\"/><Cell col=\"12\" text=\"bind:utc4\"/><Cell col=\"13\" text=\"bind:utc5\"/><Cell col=\"14\" text=\"bind:utc6\"/><Cell col=\"15\" text=\"bind:utc0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonViewer00","1013","30","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("문서뷰어-개발only(1-1,2-1)");
            obj.set_background("cyan");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("EditViewer_fileGroupMgno","810","26","98","38",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_inputtype("digit");
            obj.set_value("FG00000001");
            obj.set_background("cyan");
            obj.set_text("FG00000001");
            this.addChild(obj.name, obj);

            obj = new Edit("EditViewer_fileMgno","916","26","87","38",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_inputtype("digit");
            obj.set_value("FD00000001");
            obj.set_background("cyan");
            obj.set_text("FD00000001");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_Report","70","700","842","132",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_border("3px double coral");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonReport00","689","21","121","81",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("0");
            obj.set_text("클립소프트");
            obj.set_background("cyan");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Edit("Edit11","149","23","230","38",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("1");
            obj.set_value("/report/sample/sample2.crf");
            obj.set_color("RGB(255,0,0)");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("/report/sample/sample2.crf");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Edit("Edit12","149","71","230","38",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("2");
            obj.set_value("TestReportService");
            obj.set_color("RGB(255,0,0)");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("TestReportService");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Static("Static00","36","24","94","36",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("3");
            obj.set_text("sadfasdf");
            obj.set_border("1px solid blue");
            obj.set_background("blue");
            obj.set_color("RGB(255,255,255)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Static("Static00_00","35","72","94","36",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("4");
            obj.set_text("sadfasdf");
            obj.set_border("1px solid blue");
            obj.set_background("blue");
            obj.set_color("RGB(255,255,255)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Static("Static00_01","400","24","94","36",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("5");
            obj.set_text("param1");
            obj.set_border("1px solid blue");
            obj.set_background("blue");
            obj.set_color("RGB(255,255,255)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","399","72","94","36",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("6");
            obj.set_text("param2");
            obj.set_border("1px solid blue");
            obj.set_background("blue");
            obj.set_color("RGB(255,255,255)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Edit("Edit14","513","72","136","38",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("7");
            obj.set_value("param2값");
            obj.set_color("RGB(255,0,0)");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("param2값");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Edit("Edit13","513","24","136","38",null,null,null,null,null,null,this.Div00_Report.form);
            obj.set_taborder("8");
            obj.set_value("parma1값");
            obj.set_color("RGB(255,0,0)");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("parma1값");
            this.Div00_Report.addChild(obj.name, obj);

            obj = new Button("ButtonCrypt","525","169","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("비밀번호암호화테스트");
            obj.set_background("lime");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Xeni","669","125","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Xeni서버");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonFileDownPage","670","26","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("파일다운로드");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonFileUpPage","669","79","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("파일업로드");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_AccessToken","50","382","766","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("#aaffaa");
            obj.set_displaynulltext("Access Token");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_RefreshToken","50","430","766","38",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#aaffaa");
            obj.set_displaynulltext("Refresh Token");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Role","908","166","104","38",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("yellow");
            obj.set_displaynulltext("권한지정");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonRSA","40","225","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("RSA");
            obj.set_background("tomato");
            obj.set_color("white");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","40","261","770","109",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_rsa_reseult");
            obj.set_background("tomato");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"767\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RSAModulus\"/><Cell row=\"1\" text=\"RSAExponent\"/></Band><Band id=\"body\"><Cell text=\"bind:RSAModulus\"/><Cell row=\"1\" text=\"bind:RSAExponent\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonMenu","950","672","125","38",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("메뉴정보 조회테스트");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_LoginId","742","166","158","38",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("yellow");
            obj.set_value("bbbbbb@gmail.com");
            obj.set_text("bbbbbb@gmail.com");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonGroupCode","961","380","369","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("미인증 조회가능 - 그룹코드 조회테스트");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonCode","1350","382","345","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("▲▲▲▲ 미인증 조회가능 - 코드세 조회테스트 ▲▲▲▲");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonErrMessage","1710","382","330","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("오류메세지 조회테스트");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","951","431","389","229",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("dsGroupCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"groupCdEngNm\"/><Cell col=\"2\" text=\"groupCdKornNm\"/><Cell col=\"3\" text=\"cdRegLmtCnt\"/><Cell col=\"4\" text=\"cdCnt\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:groupCdEngNm\"/><Cell col=\"2\" text=\"bind:groupCdKornNm\"/><Cell col=\"3\" text=\"bind:cdRegLmtCnt\"/><Cell col=\"4\" text=\"bind:cdCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","1348","432","352","228",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("dsCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"cdMgno\"/><Cell col=\"2\" text=\"cdEngNm\"/><Cell col=\"3\" text=\"cdKornNm\"/><Cell col=\"4\" text=\"sortSeqo\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:cdMgno\"/><Cell col=\"2\" text=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdKornNm\"/><Cell col=\"4\" text=\"bind:sortSeqo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","1705","432","348","228",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("dsErrMessage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"errMsgCd\"/><Cell col=\"1\" text=\"errMsgClCd\"/><Cell col=\"2\" text=\"errMsgNtnCd\"/><Cell col=\"3\" text=\"errMsgNm\"/><Cell col=\"4\" text=\"inptCnt\"/></Band><Band id=\"body\"><Cell text=\"bind:errMsgCd\"/><Cell col=\"1\" text=\"bind:errMsgClCd\"/><Cell col=\"2\" text=\"bind:errMsgNtnCd\"/><Cell col=\"3\" text=\"bind:errMsgNm\"/><Cell col=\"4\" text=\"bind:inptCnt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_GroupCode","1348","322","540","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("#aaffaa");
            obj.set_displaynulltext("그룹코드값");
            obj.set_color("black");
            obj.set_value("APLY_CL_CD|AGREE_CLAUS_CD|PRCS_TYPE_CD|BIZ_TYPE_CD|BIZ_SCAL_CD|BIZ_FORM_CD|SYS_CL_CD|USER_CL_CD|ERR_MSG_CL_CD|BZENT_CL_CD|INST_CLSF_CD|INST_DTL_CLSF_CD|USER_APLY_TYPE_CD");
            obj.set_text("APLY_CL_CD|AGREE_CLAUS_CD|PRCS_TYPE_CD|BIZ_TYPE_CD|BIZ_SCAL_CD|BIZ_FORM_CD|SYS_CL_CD|USER_CL_CD|ERR_MSG_CL_CD|BZENT_CL_CD|INST_CLSF_CD|INST_DTL_CLSF_CD|USER_APLY_TYPE_CD");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06","958","732","1092","578",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_binddataset("dsMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"menuMgno\"/><Cell col=\"1\" text=\"upMenuMgno\"/><Cell col=\"2\" text=\"menuClCd\"/><Cell col=\"3\" text=\"menuNm\"/><Cell col=\"4\" text=\"menuUrlAddr\"/><Cell col=\"5\" text=\"menuLvl\"/><Cell col=\"6\" text=\"sortSeqo\"/><Cell col=\"7\" text=\"sysClCd\"/><Cell col=\"8\" text=\"roleIdMgno\"/><Cell col=\"9\" text=\"inqAuthrtYn\"/><Cell col=\"10\" text=\"regAuthrtYn\"/><Cell col=\"11\" text=\"mdfcnAuthrtYn\"/><Cell col=\"12\" text=\"delAuthrtYn\"/><Cell col=\"13\" text=\"excnAuthrtYn\"/><Cell col=\"14\" text=\"topMenuId\"/><Cell col=\"15\" text=\"menuPath\"/><Cell col=\"16\" text=\"srchMenuNm\"/></Band><Band id=\"body\"><Cell text=\"bind:menuMgno\"/><Cell col=\"1\" text=\"bind:upMenuMgno\"/><Cell col=\"2\" text=\"bind:menuClCd\"/><Cell col=\"3\" text=\"bind:menuNm\"/><Cell col=\"4\" text=\"bind:menuUrlAddr\"/><Cell col=\"5\" text=\"bind:menuLvl\"/><Cell col=\"6\" text=\"bind:sortSeqo\"/><Cell col=\"7\" text=\"bind:sysClCd\"/><Cell col=\"8\" text=\"bind:roleIdMgno\"/><Cell col=\"9\" text=\"bind:inqAuthrtYn\"/><Cell col=\"10\" text=\"bind:regAuthrtYn\"/><Cell col=\"11\" text=\"bind:mdfcnAuthrtYn\"/><Cell col=\"12\" text=\"bind:delAuthrtYn\"/><Cell col=\"13\" text=\"bind:excnAuthrtYn\"/><Cell col=\"14\" text=\"bind:topMenuId\"/><Cell col=\"15\" text=\"bind:menuPath\"/><Cell col=\"16\" text=\"bind:srchMenuNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07","73","886","839","184",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("dsUserInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"userId\"/><Cell col=\"1\" text=\"upInstMgno\"/><Cell col=\"2\" text=\"instMgno\"/><Cell col=\"3\" text=\"userClCd\"/><Cell col=\"4\" text=\"flnm\"/><Cell col=\"5\" text=\"deptNm\"/><Cell col=\"6\" text=\"jbpsNm\"/><Cell col=\"7\" text=\"telDdd\"/><Cell col=\"8\" text=\"telTlpno\"/><Cell col=\"9\" text=\"telPhino\"/><Cell col=\"10\" text=\"acntRprsvYn\"/><Cell col=\"11\" text=\"instClsfCd\"/><Cell col=\"12\" text=\"instDtlClsfCd\"/><Cell col=\"13\" text=\"govInstYn\"/><Cell col=\"14\" text=\"bzentNm\"/><Cell col=\"15\" text=\"bzentClCd\"/><Cell col=\"16\" text=\"rprsvNm\"/><Cell col=\"17\" text=\"roleIdMgno\"/><Cell col=\"18\" text=\"roleIdMgnoList\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\"/><Cell col=\"1\" text=\"bind:upInstMgno\"/><Cell col=\"2\" text=\"bind:instMgno\"/><Cell col=\"3\" text=\"bind:userClCd\"/><Cell col=\"4\" text=\"bind:flnm\"/><Cell col=\"5\" text=\"bind:deptNm\"/><Cell col=\"6\" text=\"bind:jbpsNm\"/><Cell col=\"7\" text=\"bind:telDdd\"/><Cell col=\"8\" text=\"bind:telTlpno\"/><Cell col=\"9\" text=\"bind:telPhino\"/><Cell col=\"10\" text=\"bind:acntRprsvYn\"/><Cell col=\"11\" text=\"bind:instClsfCd\"/><Cell col=\"12\" text=\"bind:instDtlClsfCd\"/><Cell col=\"13\" text=\"bind:govInstYn\"/><Cell col=\"14\" text=\"bind:bzentNm\"/><Cell col=\"15\" text=\"bind:bzentClCd\"/><Cell col=\"16\" text=\"bind:rprsvNm\"/><Cell col=\"17\" text=\"bind:roleIdMgno\"/><Cell col=\"18\" text=\"bind:roleIdMgnoList\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonUserInfo","73","840","247","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("사용자정보 조회 - 세션정보");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","910","125","272","31",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("1. 로그인 처리전에 관장|위탁기관 체크하기");
            obj.set_background("yellow");
            obj.set_font("bold 10pt \"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid08","1200","98","280","120",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("dsUserRole");
            obj.set_background("yellow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"roleIdMgno\"/><Cell col=\"1\" text=\"roleNm\"/></Band><Band id=\"body\"><Cell text=\"bind:roleIdMgno\"/><Cell col=\"1\" text=\"bind:roleNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","870","217","266","153",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("로그인아이디정보 - 임시\r\n[전체관리자] aaaaaa@gmail.com\r\n[관장기관] bbbbbb@gmail.com\r\n[위탁기관] cccccc@gmail.com\r\n[사업수행자_계정관리인] dddddd@gmail.com\r\n[사업수행자_계정대표자] eeeeee@gmail.com\r\n[외교부] ffffff@gmail.com\r\n[기타부처] gggggg@gmail.com\r\n[비승인사용자] hhhhhh@gmail.com");
            obj.set_background("#ffff99");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonSession","912","78","111","31",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Session");
            obj.set_background("red");
            obj.set_color("yellow");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div00","80","1113","840","437",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("lightblue");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno1","160","10","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_value("2300000232");
            obj.set_textAlign("center");
            obj.set_text("2300000232");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno2","160","58","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_value("2300000233");
            obj.set_textAlign("center");
            obj.set_text("2300000233");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno3","160","106","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_value("2300000234");
            obj.set_textAlign("center");
            obj.set_text("2300000234");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno4","160","154","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_value("2300000235");
            obj.set_textAlign("center");
            obj.set_text("2300000235");
            this.div00.addChild(obj.name, obj);

            obj = new Button("ButtonMultiDownload","216","237","500","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("전체 다운로드");
            obj.set_background("#aaffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","214","285","500","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsMultiDownload");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전송대상 정보, 파일그룹식별키 - [fileGroupMgno]\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\" tooltiptext=\"bind:fileGroupMgno\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtArchiveFileName2","295","58","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_value("압축파일명2");
            obj.set_textAlign("center");
            obj.set_text("압축파일명2");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtArchiveFileName3","295","106","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_value("압축파일명3");
            obj.set_textAlign("center");
            obj.set_text("압축파일명3");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtArchiveFileName4","295","154","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_value("압축파일명4");
            obj.set_textAlign("center");
            obj.set_text("압축파일명4");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtArchiveFileName1","295","10","120","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_value("압축파일명1");
            obj.set_textAlign("center");
            obj.set_text("압축파일명1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stc00","40","10","109","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("▶ 1번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stc00_00","40","58","109","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("▶ 2번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","40","106","109","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("▶ 3번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00","40","154","109","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("▶ 4번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","25","51","400","4",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00","25","99","400","4",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00_00","25","147","400","4",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","940","1330","840","437",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno1","160","10","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_value("2300000655");
            obj.set_textAlign("center");
            obj.set_text("2300000655");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno2","160","58","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_value("2300000655");
            obj.set_textAlign("center");
            obj.set_text("2300000655");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno3","160","106","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_value("2300000774");
            obj.set_textAlign("center");
            obj.set_text("2300000774");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno4","160","154","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_value("2300000655");
            obj.set_textAlign("center");
            obj.set_text("2300000655");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("ButtonSelectedMultiDownload","216","237","500","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("지정파일 전체 다운로드");
            obj.set_background("#ffffaa");
            obj.set_color("black");
            obj.set_font("bold 10pt \"Arial\"");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("grd00","214","285","500","120",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsSelectedMultiDownload");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일그룹식별키\"/><Cell col=\"1\" text=\"파일상세식별키\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:fileMgno\"/></Band></Format></Formats>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileMgno2","295","58","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_value("FD00000002");
            obj.set_textAlign("center");
            obj.set_text("FD00000002");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileMgno3","295","106","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_value("FD00000004");
            obj.set_textAlign("center");
            obj.set_text("FD00000004");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileMgno4","295","154","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_value("FD00000002");
            obj.set_textAlign("center");
            obj.set_text("FD00000002");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtFileMgno1","295","10","120","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_value("FD00000001");
            obj.set_textAlign("center");
            obj.set_text("FD00000001");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00","40","10","109","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("▶ 1번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00","40","58","109","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("▶ 2번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","40","106","109","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("▶ 3번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00","40","154","109","38",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("▶ 4번째 파일");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","25","51","400","4",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00","25","99","400","4",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00_00","25","147","400","4",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_Report.form
            obj = new Layout("default","",0,0,this.Div00_Report.form,function(p){});
            this.Div00_Report.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",2070,1360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "search":
              if(this.ds_list.rowcount < 1){
                this.alert("조회된 결과가 없습니다.");
              }

              break;
          }
        };



        //데이터 조회 트랜잭션
        this.fnSearch = function ()
        {

        nexacro.setHTTPHeaderVariable("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZGVlZmZAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9CSVoiXSwiaWF0IjoxNjkxOTgxMTczLCJleHAiOjE2OTE5ODI5NzN9.2sF4ZUJZFLuOlTQQUaWpcZOOGpurXBKE6ffX5GYwzzc");
        nexacro.setHTTPHeaderVariable("RefreshToken", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZGVlZmZAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9CSVoiXSwiaWF0IjoxNjkxOTgxMTczLCJleHAiOjE2OTE5ODQ3NzN9.jbyTD-IO5WsLkrrD_JIZVOa6Zn6x3zKfD9XxqAHQPjc");

        console.log("[this.transaction]["+this.transaction+"]");

        /* test - 행추가 - justin */
        this.ds_search.addRow();
        this.ds_search.addRow();

          // 조회조건 셋팅
          this.ds_search.setColumn(0, "searchType", this.Combo00.value);
          this.ds_search.setColumn(0, "keyword"  , this.Edit00.text);
          this.ds_search.setColumn(1, "searchType", this.Combo00.value + "테스트");
          this.ds_search.setColumn(1, "keyword"  , this.Edit00.text + "테스트");

          var strSvcId    = "search";
          var strSvcUrl   = "svc::test/selectSampleList.do";
          var inData      = "input1=ds_search";
          var outData     = "ds_list=output1";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        /* 로그인 */
        this.Button_login_onclick = function(obj,e)
        {

        nexacro.setHTTPHeaderVariable("Authorization", "nexacro platform 12345");


        	this.ds_login.addRow();

          this.ds_login.setColumn(0, "id"  , this.Edit_LoginId.text);
          this.ds_login.setColumn(0, "password"  , "1234");
          this.ds_login.setColumn(0, "role"  , this.Edit_Role.value);

          var strSvcId    = "login";
          var strSvcUrl   = "svc::login";
          var inData      = "inputLogin=ds_login";
          var outData     = "ds_common_reseult=common";
          var strArg      = "";
          var callBackFnc = "fnLoginCallback";
          var isAsync     = true;


           this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
               strSvcUrl ,       // trabsaction을 요청할 주소
               inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
               outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
               strArg,         // 입력값으로 보낼 arguments, a=b
               callBackFnc,       // transaction의 결과를 받을 Function 이름
               isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        //처리콜백 함수
        this.fnLoginCallback = function(svcID,errorCode,errorMsg)
        {





          switch(svcID)
          {
            case "login":

        			this.alert("로그인결과 ▶▶▶▶ [" + this.ds_common_reseult.getColumn(0, "message") + "]");
        			console.log("[svcID]["+svcID+"]");
        			trace("[svcID]["+svcID+"]");
        			console.log("[errorCode]["+errorCode+"]");
        			trace("[errorCode]["+errorCode+"]");

        			this.Edit_AccessToken.set_value(this.ds_common_reseult.getColumn(0, "accessToken"));
        			this.Edit_RefreshToken.set_value(this.ds_common_reseult.getColumn(0, "refreshToken"));


              break;
          }
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.FileDialog00.open('Nexacro N', FileDialog.MULTILOAD);
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
            for (var i = 0, len = filelist.length, vFile; i < len; i++)
            {
                vFile = filelist[i];
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror , this);

                vFile.open(null, 1);
            }
        }

        this.Grid01_ondragenter = function(obj,e)
        {
            if(e.datatype == "file")
            {
                this.Grid01.set_opacity(0.5);
            }
        };

        this.Grid01_ondragleave = function(obj,e)
        {
            this.Grid01.set_opacity(1);
        };

        this.Grid01_ondrop = function(obj,e)
        {
            this.Grid01.set_opacity(1);
            if(e.datatype == "file")
            {
                this.addFileList(e.filelist);
            }
        };

        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
            {
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    var nRowIdx = this.Dataset00.addRow();
                    this.Dataset00.setColumn(nRowIdx, 0, obj.filename);
                    this.Dataset00.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
                    this.FileUpTransfer00.addFile(obj.filename, obj);
                    break;
            }
        }

        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        }


        this.cutFileSize = function(filesize)
        {
            var sOutput = filesize + " bytes";
            for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
            {
                sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
            }
            return sOutput;
        };


        /* 업로드 */

        this.Button02_onclick = function(obj,e)
        {
            this.TextArea00.set_value("");
            this.FileUpTransfer00.upload('http://demo.nexacro.com/developer_guide/N/Service/fileupload.jsp');
        };


        this.FileUpTransfer00_onprogress = function(obj,e)
        {
            this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
            this.fn_addlog(e.code);
            this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
            this.fn_addlog(e.errormsg);
            this.fn_addlog(e.statuscode);
        };

        this.fn_addlog = function(strMessage)
        {
            this.TextArea00.insertText(strMessage + '\n');
        }
        this.Button404_onclick = function(obj,e)
        {
        	this.ds_login.addRow();
          this.ds_login.setColumn(0, "id", "ddeeff@gmail.com");
          this.ds_login.setColumn(0, "password"  , "1234");
          var strSvcId    = "404search";
          var strSvcUrl   = "svc::sdsdfsd";
          var inData      = "inputLogin=ds_login";
          var outData     = "ds_common_reseult=common";
          var strArg      = "";
          var callBackFnc = "fn404Callback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };
        //처리콜백 함수
        this.fn404Callback = function(svcID,errorCode,errorMsg, xxxx)
        {

        this.alert(svcID+"\n"+errorCode+"\n"+errorMsg+"\n"+xxxx);


          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "404search":
              if(this.ds_list.rowcount < 1){
                this.alert("404");
              }

              break;
          }
        };

        this.ButtonAuth_onclick = function(obj,e)
        {
        	this.ds_login.addRow();
          this.ds_login.setColumn(0, "id", "ddeeff@gmail.com");
          this.ds_login.setColumn(0, "password"  , "1234");
          var strSvcId    = "404search";
          var strSvcUrl   = "svc::admin/test";
          var inData      = "inputLogin=ds_login";
          var outData     = "ds_common_reseult=common";
          var strArg      = "";
          var callBackFnc = "fnautherrorCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };
        //처리콜백 함수
        this.fnautherrorCallback = function(svcID,errorCode,errorMsg, xxxx)
        {

        this.alert(svcID+"\n"+errorCode+"\n"+errorMsg+"\n"+xxxx);


          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "404search":
              if(this.ds_list.rowcount < 1){
                this.alert("404");
              }

              break;
          }
        };
        this.ButtonFileClone_onclick = function(obj,e)
        {
          // 조회조건 셋팅
          this.ds_searchFileClone.setColumn(0, "fileGroupSn"  , this.EditFileClone.text);

          var strSvcId    = "fileClone";
          var strSvcUrl   = "svc::test/fileClone.do";
          var inData      = "input1=ds_searchFileClone";
          var outData     = "ds_fileClone=output1";
          var strArg      = "";
          var callBackFnc = "fnFileCloneCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        this.fnFileCloneCallback = function(svcID,errorCode,errorMsg, xxxx)
        {

        	this.alert(svcID+"\n"+errorCode+"\n"+errorMsg+"\n"+xxxx);
        }

        this.Button_Statistics_onclick = function(obj,e)
        {

        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);


        console.log("[this.transaction]["+this.transaction+"]");

        /* test - 행추가 - justin */
        this.ds_search.addRow();

          // 조회조건 셋팅
          this.ds_search.setColumn(0, "startCntnYmd", "20220101");
          this.ds_search.setColumn(0, "endCntnYmd"  , "20240101");

          var strSvcId    = "Statistics";
          var strSvcUrl   = "svc::test/selectConnectDailyStatisticsList.irs";
          var inData      = "inputMap=ds_search";
          var outData     = "Dataset_Statistics=list";
          var strArg      = "";
          var callBackFnc = "fnButton_StatisticsCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        //처리콜백 함수
        this.fnButton_StatisticsCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "Statistics":
              if(this.Dataset_Statistics.rowcount < 1){
                this.alert("조회된 결과가 없습니다.");
              }

              break;
          }
        };

        this.ButtonViewer00_onclick = function(obj,e)
        {

        /* 결과 dataset 초기화 */
        this.Dataset_Viewer.clear();
        /* test - 행추가 - justin */
        this.dsSendViewer.addRow();

          // 조회조건 셋팅
          this.dsSendViewer.setColumn(0, "fileGroupMgno", this.EditViewer_fileGroupMgno.value);
          this.dsSendViewer.setColumn(0, "fileMgno", this.EditViewer_fileMgno.value);


        	// 공통Transaction 호출
        	var objArgs = {};
         	objArgs.svcId 			= "Statistics";
         	objArgs.url 			= "/common/viewer.irs";
         	objArgs.inds      		= "dsSendViewer=dsSendViewer";
         	objArgs.outds     		= "Dataset_Viewer=dsViewer";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnButton_ButtonViewer00_onclick";

        	this.gfnTransaction(this, objArgs);
        };

        /**
        문서뷰어 결과 처리
        */
        this.fnButton_ButtonViewer00_onclick = function(svcID,errorCode,errorMsg)
        {
        	var result = this.Dataset_Viewer.getColumn(0, "result");
        	alert("[result]["+result+"]");

        	if(result == "Y") {
        		var fn = this.Dataset_Viewer.getColumn(0, "fn");
        		var rs = this.Dataset_Viewer.getColumn(0, "rs");

        		alert("[fn]["+fn+"]");
        		alert("[rs]["+rs+"]");



        		//var url = "http://localhost:28080/irs/sol/viewer/skin/doc.html?fn=" + fn + "&rs=/sn3hcv" + rs;
        		var url = "http://192.168.0.140:28080/irs/thirdParty/viewer/skin/doc.html?fn=" + fn + "&rs=" + rs;
        		system.execBrowser(url);


        	}

        };

        /**
        클립소프트 - 레포트
        */
        this.ButtonReport00_onclick = function(obj,e)
        {
        		var crfPath = this.Div00_Report.form.Edit11.text;
        		var service = this.Div00_Report.form.Edit12.text;
        		var param1 = this.Div00_Report.form.Edit13.text;
        		var param2 = this.Div00_Report.form.Edit14.text;

        		//var url = "http://localhost:28080/irs/common/report.irs"
        		var url = "http://192.168.0.140:28080/irs/common/report.irs"
        		+ "?crfPath=" + crfPath
        		+ "&service=" + service
        		+ "&param1=" + param1
        		+ "&param2=" + param2;

        		system.execBrowser(url);
        };

        this.Div00_Report_Edit11_onchanged = function(obj,e)
        {

        };

        this.Div00_Report_Edit12_onchanged = function(obj,e)
        {

        };

        this.ButtonCrypt_onclick = function(obj,e)
        {

        		//var url = "http://localhost:28080/irs/test/cryptMain.irs";
        		var url = "http://192.168.0.140:28080/irs/test/cryptMain.irs";

        		system.execBrowser(url);
        };

        /*
        * Xeni 서버
        */
        this.Button_Xeni_onclick = function(obj,e)
        {
        	nexacro.setHTTPHeaderVariable("Access-Control-Allow-Origin", "http://192.168.0.140:28080/irs");
        	this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A1");
            this.exportObj.set_exporturl("http://192.168.0.140:28080/nexacro-xeni-java/XExportImport");
            this.exportObj.exportData();
        };

        this.ButtonFileDownPage_onclick = function(obj,e)
        {
        	this.go( "FrameBase::FileDownTransfer.xfdl" );
        };

        this.ButtonFileUpPage_onclick = function(obj,e)
        {
        	this.go( "FrameBase::FileUpTransfer.xfdl" );
        };

        this.ButtonRSA_onclick = function(obj,e)
        {

          var strSvcId    = "rsatest";
          var strSvcUrl   = "svc::common/rsa.irs";
          var inData      = "";
          var outData     = "ds_rsa_reseult=rsa";
          var strArg      = "";
          var callBackFnc = "fnRSACallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        this.fnRSACallback = function(svcID,errorCode,errorMsg)
        {
          this.alert(errorCode+"\n"+errorMsg);
        };

        this.ButtonMenu_onclick = function(obj,e)
        {

        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);


          var strSvcId    = "menutest";
          var strSvcUrl   = "svc::common/initial/selectMenuList.irs";
          var inData      = "";
          var outData     = "dsMenu=menuList";
          var strArg      = "aaaa=1111";
          var callBackFnc = "fnMenuCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        this.fnMenuCallback = function(svcID,errorCode,errorMsg)
        {
          this.alert(errorCode+"\n"+errorMsg);
        };

        /* 그룹코드 목록 - 로그인 후 조회 */
        this.ButtonGroupCode_onclick = function(obj,e)
        {
        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);


          var strSvcId    = "GroupCodetest";
          var strSvcUrl   = "svc::common/initial/selectGroupCodeList.irs";
          var inData      = "";
          var outData     = "dsGroupCode=groupCodeList";
          var strArg      = "aaaa=1111";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        /* 코드상세 목록 - 로그인 후 조회 */
        this.ButtonCode_onclick = function(obj,e)
        {
        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);

          this.dsSearchCode.deleteAll();

          this.dsSearchCode.addRow();
          this.dsSearchCode.setColumn(0, "groupCodes"  , this.Edit_GroupCode.value);

          var strSvcId    = "Codetest";
          var strSvcUrl   = "svc::common/initial/selectCodeList.irs";
          var inData      = "searchCode=dsSearchCode";
          var outData     = "dsCode=codeList";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        /* 오류메세지 목록 - 로그인 후 조회 */
        this.ButtonErrMessage_onclick = function(obj,e)
        {
        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);


          var strSvcId    = "ErrMessagtest";
          var strSvcUrl   = "svc::common/initial/selectErrorMessegeList.irs";
          var inData      = "";
          var outData     = "dsErrMessage=errorMessegeList";
          var strArg      = "aaaa=1111";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };


        this.ButtonUserInfo_onclick = function(obj,e)
        {
        nexacro.setHTTPHeaderVariable("Authorization", this.Edit_AccessToken.value);
        nexacro.setHTTPHeaderVariable("RefreshToken", this.Edit_RefreshToken.value);


          var strSvcId    = "UserInfotest";
          var strSvcUrl   = "svc::common/initial/selectUserInfo.irs";
          var inData      = "";
          var outData     = "dsUserInfo=userInfo";
          var strArg      = "aaaa=1111";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
              strSvcUrl ,       // trabsaction을 요청할 주소
              inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
              outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
              strArg,         // 입력값으로 보낼 arguments, a=b
              callBackFnc,       // transaction의 결과를 받을 Function 이름
              isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        /* 관장|위탁기관 체크하기 */
        this.Button_prepare_login_onclick = function(obj,e)
        {
        	nexacro.setHTTPHeaderVariable("Authorization", "nexacro platform 12345");


        	this.ds_login.addRow();

          this.ds_login.setColumn(0, "id"  , this.Edit_LoginId.text);
          this.ds_login.setColumn(0, "password"  , "1234");

          var strSvcId    = "preparelogin";
          var strSvcUrl   = "svc::prepare/login";
          var inData      = "inputLogin=ds_login";
          var outData     = "dsUserRole=userRoleList";
          var strArg      = "";
          var callBackFnc = "fnLoginCallback";
          var isAsync     = true;


           this.transaction(strSvcId ,   // transaction을 구분하기 위한 svc id값
               strSvcUrl ,       // trabsaction을 요청할 주소
               inData ,         // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
               outData ,         // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
               strArg,         // 입력값으로 보낼 arguments, a=b
               callBackFnc,       // transaction의 결과를 받을 Function 이름
               isAsync, "3");         // 비동기통신 여부 [생략가능]
        };

        this.Grid08_oncellclick = function(obj,e)
        {

        		this.Edit_Role.set_value(this.dsUserRole.getColumn(e.row, "roleIdMgno"));

        };

        this.Static00_onclick = function(obj,e)
        {

        };

        /* 세션체크하기 */
        this.ButtonSession_onclick = function(obj,e)
        {
        	//로그인 실행
        	var objArgs = {};
        		objArgs.svcId    = "sessioncheck";
        		objArgs.url 	 = "/session/check";
        		objArgs.inds     = "inputLogin=dsLogin";
        		objArgs.outds    = "";
        		objArgs.args      = "";
        		objArgs.callback  = "fnSessioncheckCallback";

        	this.gfnTransaction(this, objArgs);
        };


        //처리콜백 함수
        this.fnSessioncheckCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "sessioncheck":
        		this.alert(errorCode+"\n"+errorMsg);
        		alert("결과!");

              break;
          }
        };


        // 전체다운로드 하기 - 전체다운로드 2/2
        this.fnMultiDownload = function(fileListInfo)
        {
        	if (this.gfnIsNull(fileListInfo)) {
        		return false;
        	}

        	if (fileListInfo.length == 0) {
        		return false;
        	}

        	this.dsMultiDownload.clearData();
        	for(var idx in fileListInfo) {
        		if (this.gfnIsNull(fileListInfo[idx].fileGroupMgno)) {
        			continue;
        		}
        		var nRow = this.dsMultiDownload.addRow();
        		this.dsMultiDownload.setColumn(nRow, "fileGroupMgno", fileListInfo[idx].fileGroupMgno);
        		this.dsMultiDownload.setColumn(nRow, "archiveFileName", fileListInfo[idx].archiveFileName);
        	}

        	//다운로드 URL
        	var downloadUrl = "http://127.0.0.1:28080/irs/common/raonk/download.irs";

        	this.FileDownTransferMultiDownload.set_url(downloadUrl);
        	this.FileDownTransferMultiDownload.clearPostDataList();
        	this.FileDownTransferMultiDownload.setPostData("dsMultiDownload",this.dsMultiDownload.saveXML());
        	this.FileDownTransferMultiDownload.download();

        };

        //전체다운로드 버튼 이벤트 - 전체다운로드 1/2
        this.ButtonMultiDownload_onclick = function(obj,e)
        {
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전체다운로드 함수 호출 하기 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        	// 전체 파일정보
        	var fileListInfo = [
        		  { fileGroupMgno : this.div00.form.edtFileGroupMgno1.value, archiveFileName : this.div00.form.edtArchiveFileName1.value }
        		, { fileGroupMgno : this.div00.form.edtFileGroupMgno2.value, archiveFileName : this.div00.form.edtArchiveFileName2.value }
        		, { fileGroupMgno : this.div00.form.edtFileGroupMgno3.value, archiveFileName : this.div00.form.edtArchiveFileName3.value }
        		, { fileGroupMgno : this.div00.form.edtFileGroupMgno4.value, archiveFileName : this.div00.form.edtArchiveFileName4.value }
        	];

        	this.fnMultiDownload(fileListInfo);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전체다운로드 함수 호출 하기 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        };

        // 전체다운로드 하기 - 전체다운로드 2/2
        this.fnMultiDownload = function(fileListInfo)
        {
        	if (this.gfnIsNull(fileListInfo)) {
        		return false;
        	}

        	if (fileListInfo.length == 0) {
        		return false;
        	}

        	this.dsMultiDownload.clearData();
        	for(var idx in fileListInfo) {
        		if (this.gfnIsNull(fileListInfo[idx].fileGroupMgno)) {
        			continue;
        		}
        		var nRow = this.dsMultiDownload.addRow();
        		this.dsMultiDownload.setColumn(nRow, "fileGroupMgno", fileListInfo[idx].fileGroupMgno);
        		this.dsMultiDownload.setColumn(nRow, "archiveFileName", fileListInfo[idx].archiveFileName);
        	}

        	//다운로드 URL
        	var downloadUrl = "http://127.0.0.1:28080/irs/common/raonk/download.irs";

        	this.FileDownTransferMultiDownload.set_url(downloadUrl);
        	this.FileDownTransferMultiDownload.clearPostDataList();
        	this.FileDownTransferMultiDownload.setPostData("dsMultiDownload",this.dsMultiDownload.saveXML());
        	this.FileDownTransferMultiDownload.download();

        };


        //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

        //지정파일 전체 다운로드 버튼 이벤트 - 지정파일 전체 다운로드 1/2
        this.ButtonSelectedMultiDownload_onclick = function(obj,e)
        {
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전체다운로드 함수 호출 하기 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        	// 전체 파일정보
        	var fileListInfo = [
        		  { fileGroupMgno : this.div00_00.form.edtFileGroupMgno1.value, fileMgno : this.div00_00.form.edtFileMgno1.value }
        		, { fileGroupMgno : this.div00_00.form.edtFileGroupMgno2.value, fileMgno : this.div00_00.form.edtFileMgno2.value }
        		, { fileGroupMgno : this.div00_00.form.edtFileGroupMgno3.value, fileMgno : this.div00_00.form.edtFileMgno3.value }
        		, { fileGroupMgno : this.div00_00.form.edtFileGroupMgno4.value, fileMgno : this.div00_00.form.edtFileMgno4.value }
        	];

        	this.fnSelectedMultiDownload(fileListInfo);
        	/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 전체다운로드 함수 호출 하기 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        };

        // 지정파일 전체 다운로드 하기 - 지정파일 전체 다운로드 2/2
        this.fnSelectedMultiDownload = function(fileListInfo)
        {
        	if (this.gfnIsNull(fileListInfo)) {
        		return false;
        	}

        	if (fileListInfo.length == 0) {
        		return false;
        	}

        	this.dsSelectedMultiDownload.clearData();
        	for(var idx in fileListInfo) {
        		if (this.gfnIsNull(fileListInfo[idx].fileGroupMgno) || this.gfnIsNull(fileListInfo[idx].fileMgno)) {
        			continue;
        		}
        		var nRow = this.dsSelectedMultiDownload.addRow();
        		this.dsSelectedMultiDownload.setColumn(nRow, "fileGroupMgno", fileListInfo[idx].fileGroupMgno);
        		this.dsSelectedMultiDownload.setColumn(nRow, "fileMgno", fileListInfo[idx].fileMgno);
        	}

        	//다운로드 URL
        	var downloadUrl = "http://127.0.0.1:28080/irs/common/raonk/selected/download.irs";

        	this.FileDownTransferMultiDownload.set_url(downloadUrl);
        	this.FileDownTransferMultiDownload.clearPostDataList();
        	this.FileDownTransferMultiDownload.setPostData("dsSelectedMultiDownload",this.dsSelectedMultiDownload.saveXML());
        	this.FileDownTransferMultiDownload.download();

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Button00_00.addEventHandler("onclick",this.Button_login_onclick,this);
            this.Button404.addEventHandler("onclick",this.Button404_onclick,this);
            this.ButtonAuth.addEventHandler("onclick",this.ButtonAuth_onclick,this);
            this.ButtonFileClone.addEventHandler("onclick",this.ButtonFileClone_onclick,this);
            this.Button_Statistics.addEventHandler("onclick",this.Button_Statistics_onclick,this);
            this.ButtonViewer00.addEventHandler("onclick",this.ButtonViewer00_onclick,this);
            this.EditViewer_fileMgno.addEventHandler("onchanged",this.EditViewer_fileDtlSn_onchanged,this);
            this.Div00_Report.form.ButtonReport00.addEventHandler("onclick",this.ButtonReport00_onclick,this);
            this.Div00_Report.form.Edit11.addEventHandler("onchanged",this.Div00_Report_Edit11_onchanged,this);
            this.Div00_Report.form.Edit12.addEventHandler("onchanged",this.Div00_Report_Edit12_onchanged,this);
            this.ButtonCrypt.addEventHandler("onclick",this.ButtonCrypt_onclick,this);
            this.Button_Xeni.addEventHandler("onclick",this.Button_Xeni_onclick,this);
            this.ButtonFileDownPage.addEventHandler("onclick",this.ButtonFileDownPage_onclick,this);
            this.ButtonFileUpPage.addEventHandler("onclick",this.ButtonFileUpPage_onclick,this);
            this.Edit_Role.addEventHandler("onchanged",this.Edit_Role_onchanged,this);
            this.ButtonRSA.addEventHandler("onclick",this.ButtonRSA_onclick,this);
            this.ButtonMenu.addEventHandler("onclick",this.ButtonMenu_onclick,this);
            this.Edit_LoginId.addEventHandler("onchanged",this.Edit_LoginId_onchanged,this);
            this.ButtonGroupCode.addEventHandler("onclick",this.ButtonGroupCode_onclick,this);
            this.ButtonCode.addEventHandler("onclick",this.ButtonCode_onclick,this);
            this.ButtonErrMessage.addEventHandler("onclick",this.ButtonErrMessage_onclick,this);
            this.Edit_GroupCode.addEventHandler("onchanged",this.Edit_GroupCode_onchanged,this);
            this.ButtonUserInfo.addEventHandler("onclick",this.ButtonUserInfo_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button_prepare_login_onclick,this);
            this.Grid08.addEventHandler("oncellclick",this.Grid08_oncellclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ButtonSession.addEventHandler("onclick",this.ButtonSession_onclick,this);
            this.div00.form.ButtonMultiDownload.addEventHandler("onclick",this.ButtonMultiDownload_onclick,this);
            this.div00.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.div00.form.sta_Label_Top00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.div00.form.sta_Label_Top00_00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.div00_00.form.ButtonSelectedMultiDownload.addEventHandler("onclick",this.ButtonSelectedMultiDownload_onclick,this);
            this.div00_00.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.div00_00.form.sta_Label_Top00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.div00_00.form.sta_Label_Top00_00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileList.addEventHandler("onerror",this.FileList_onerror,this);
            this.FileList.addEventHandler("onsuccess",this.FileList_onsuccess,this);
            this.FileDownTransferMultiDownload.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransferMultiDownload.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
