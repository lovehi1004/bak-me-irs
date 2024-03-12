(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_titletext("frameLogin");
            this.set_cssclass("frm_LOGIN_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,923);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRSAReseult", this);
            obj._setContents("<ColumnInfo><Column id=\"RSAModulus\" type=\"STRING\" size=\"256\"/><Column id=\"RSAExponent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/><Column id=\"rsaPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCodes\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"groupCodes\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserRoleList", this);
            obj._setContents("<ColumnInfo><Column id=\"roleIdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"sessionYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","220","124","1480","623",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divWgLogin01","0","0","320","280",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_LOGIN_Box");
            obj.set_text("협정");
            obj.set_url("Frame_Widget::wgLogin01.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divWgLogin02","350","0","320","280",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_LOGIN_Box");
            obj.set_text("방법론");
            obj.set_url("Frame_Widget::wgLogin02.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divWgLogin03","700","0","320","280",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_LOGIN_Box");
            obj.set_text("사업");
            obj.set_url("Frame_Widget::wgLogin03.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divLogin",null,"0","400","434","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_LOGIN_Box");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtId","45","45",null,"60","45",null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_accessibilitylabel("아이디");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPw","45","105",null,"60","45",null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("비밀번호");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_password("true");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_accessibilitylabel("비밀번호");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnIdClear","edtId:-25","66","20","20",null,null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LOGIN_TextClear");
            obj.set_visible("false");
            obj.set_accessibilitylabel("아이디초기화");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","45","195",null,"45","45",null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LOGIN_Submit");
            obj.set_accessibilitylabel("로그인");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkId","54","257","150","32",null,null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_IdSave");
            obj.set_accessibilitylabel("아이디저장");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnRegisterUser","45",null,"37.50%","45",null,"45",null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_LOGIN_UserAdd");
            obj.set_accessibilitylabel("사용자등록");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnFindUser","btnRegisterUser:10","344",null,"45","45",null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_cssclass("btn_LOGIN_IdPWFind");
            obj.set_accessibilitylabel("아이디비밀번호찾기");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLoginTemp","57","300","100","30",null,null,null,null,null,null,this.divContents.form.divLogin.form);
            obj.set_taborder("7");
            obj.set_text("LoginTemp");
            obj.set_visible("false");
            this.divContents.form.divLogin.addChild(obj.name, obj);

            obj = new Div("divInfo02",null,"464","400","159","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_MF_BoxHelp");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcIco","33","49","63","59",null,null,null,null,null,null,this.divContents.form.divInfo02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Help");
            this.divContents.form.divInfo02.addChild(obj.name, obj);

            obj = new Static("stcTitle","125","21","60","30",null,null,null,null,null,null,this.divContents.form.divInfo02.form);
            obj.set_taborder("1");
            obj.set_text("문의");
            obj.set_cssclass("sta_LOGIN_HelpText");
            this.divContents.form.divInfo02.addChild(obj.name, obj);

            obj = new Static("stcTelNo","121","55","223","55",null,null,null,null,null,null,this.divContents.form.divInfo02.form);
            obj.set_taborder("2");
            obj.set_text("1577-8065");
            obj.set_cssclass("sta_LOGIN_HelpCall");
            this.divContents.form.divInfo02.addChild(obj.name, obj);

            obj = new Static("stcDesc","126","110","265","24",null,null,null,null,null,null,this.divContents.form.divInfo02.form);
            obj.set_taborder("3");
            obj.set_text("평일 09:30~18:00  토·일요일, 공휴일은 휴무");
            obj.set_cssclass("sta_LOGIN_HelpTextS");
            this.divContents.form.divInfo02.addChild(obj.name, obj);

            obj = new Div("divWgLogin04","0","330","670","280",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_text("공지사항");
            obj.set_url("Frame_Widget::wgLogin04.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divLNG",null,"330","320","135","460",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_MF_Box3");
            obj.set_accessibilitylabel("법령과지침");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitle","26","19","140","50",null,null,null,null,null,null,this.divContents.form.divLNG.form);
            obj.set_taborder("0");
            obj.set_text("법령과 지침");
            obj.set_cssclass("sta_LOGIN_Title");
            this.divContents.form.divLNG.addChild(obj.name, obj);

            obj = new Static("stcDesc","28","61","170","50",null,null,null,null,null,null,this.divContents.form.divLNG.form);
            obj.set_taborder("1");
            obj.set_text("국제감축사업 및 실적에 관한\r\n법령과 지침을 확인해보세요.");
            obj.set_cssclass("sta_LOGIN_Text");
            this.divContents.form.divLNG.addChild(obj.name, obj);

            obj = new Static("stc00","231","43","50","47",null,null,null,null,null,null,this.divContents.form.divLNG.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LOGIN_LawGuide");
            this.divContents.form.divLNG.addChild(obj.name, obj);

            obj = new Div("divInfo01",null,"488","320","135","460",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_MF_Box4");
            obj.set_accessibilitylabel("정보공개");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcTitle","26","19","140","50",null,null,null,null,null,null,this.divContents.form.divInfo01.form);
            obj.set_taborder("0");
            obj.set_text("정보공개");
            obj.set_cssclass("sta_LOGIN_Title");
            this.divContents.form.divInfo01.addChild(obj.name, obj);

            obj = new Static("stcDesc","28","61",null,"50","102",null,null,null,null,null,this.divContents.form.divInfo01.form);
            obj.set_taborder("1");
            obj.set_text("국제감축사업 및 실적에 관한\r\n\r정보공개 내용을 확인해보세요.");
            obj.set_cssclass("sta_LOGIN_Text");
            this.divContents.form.divInfo01.addChild(obj.name, obj);

            obj = new Static("stc00","237","50","49","40",null,null,null,null,null,null,this.divContents.form.divInfo01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LOGIN_Info");
            this.divContents.form.divInfo01.addChild(obj.name, obj);

            obj = new Div("divBottom","0","divContents:56",null,"120","0",null,"1570",null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcPrivacy","378","18","171","28",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("sta_BF_TitleB");
            obj.set_accessibilitylabel("개인정보처리방침");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stcDesc01","378","50","796","48",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층    HelpDesk : 1577-8065     Fax : 043-714-7530\r\nCopyright© 2023 <b v=\'ture\'>GIR</b> All rights reserved.");
            obj.set_cssclass("sta_BT_address2");
            obj.set_usedecorate("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Combo("cboSite",null,"24","280","40","90",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("바로가기");
            var divBottom_form_cboSite_innerdataset = new nexacro.NormalDataset("divBottom_form_cboSite_innerdataset", obj);
            divBottom_form_cboSite_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">https://www.gir.go.kr/home/main.do</Col><Col id=\"datacolumn\">GIR 온실가스종합정보센터</Col></Row><Row><Col id=\"codecolumn\">https://ngms.gir.go.kr:8443/main.do</Col><Col id=\"datacolumn\">NGMS 국가온실가스종합관리</Col></Row><Row><Col id=\"codecolumn\">https://etrs.gir.go.kr/etrs/</Col><Col id=\"datacolumn\">ETRS 배출권등록부</Col></Row><Row><Col id=\"codecolumn\">https://ets.krx.co.kr/contents/ETS/03/03010000/ETS03010000.jsp</Col><Col id=\"datacolumn\">KRX 배출권 정보플랫폼</Col></Row><Row><Col id=\"codecolumn\">https://ors.gir.go.kr/ors/</Col><Col id=\"datacolumn\">ORS 상쇄등록부시스템</Col></Row><Row><Col id=\"datacolumn\">바로가기</Col></Row></Rows>");
            obj.set_innerdataset(divBottom_form_cboSite_innerdataset);
            obj.set_text("바로가기");
            obj.set_value("");
            obj.set_index("5");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stc00","90","25","207","44",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Logo");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"65","0",null,"1570",null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_LOGIN_TopBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","90","19","276","29",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnInformation",null,"19","112","31","63",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("정보공개");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnFAQBoard",null,"19","100","31","btnInformation:3",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("FAQ");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnLNGBoard",null,"19","136","31","btnFAQBoard:3",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("법령과지침");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnDataBoard",null,"19","100","31","btnLNGBoard:3",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("자료실");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("자료실");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnNoticeBoard",null,"19","112","31","btnDataBoard:3",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("공지사항");
            this.divTop.addChild(obj.name, obj);

            obj = new PopupDiv("pdvEdtIdTooltip","1383","225","180","39",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("stcTooltip","0","4","180","35",null,null,null,null,null,null,this.pdvEdtIdTooltip.form);
            obj.set_taborder("0");
            obj.set_text("영문만 입력가능 합니다");
            obj.set_cssclass("sta_WF_Tooltip");
            this.pdvEdtIdTooltip.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divWgLogin01
            obj = new Layout("default","",0,0,this.divContents.form.divWgLogin01.form,function(p){});
            this.divContents.form.divWgLogin01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divWgLogin02
            obj = new Layout("default","",0,0,this.divContents.form.divWgLogin02.form,function(p){});
            this.divContents.form.divWgLogin02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divWgLogin03
            obj = new Layout("default","",0,0,this.divContents.form.divWgLogin03.form,function(p){});
            this.divContents.form.divWgLogin03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divLogin.form
            obj = new Layout("default","",0,0,this.divContents.form.divLogin.form,function(p){});
            this.divContents.form.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInfo02.form
            obj = new Layout("default","",0,0,this.divContents.form.divInfo02.form,function(p){});
            this.divContents.form.divInfo02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divWgLogin04
            obj = new Layout("default","",0,0,this.divContents.form.divWgLogin04.form,function(p){});
            this.divContents.form.divWgLogin04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divLNG.form
            obj = new Layout("default","",0,0,this.divContents.form.divLNG.form,function(p){});
            this.divContents.form.divLNG.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divInfo01.form
            obj = new Layout("default","",0,0,this.divContents.form.divInfo01.form,function(p){});
            this.divContents.form.divInfo01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvEdtIdTooltip.form
            obj = new Layout("default","",0,0,this.pdvEdtIdTooltip.form,function(p){});
            this.pdvEdtIdTooltip.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,923,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Widget::wgLogin01.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgLogin02.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgLogin03.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgLogin04.xfdl");
        };
        
        // User Script
        this.registerScript("frameLogin.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameLogin Form
        * FILE NAME     : frameLogin.xfdl
        * DESCRIPTION   : 로그인
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.10.10    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvLoginAfterTranAllCnt = 4;					// 로그인 후 서비스 호출 횟수
        /*
        this.fnCodeList();			// 공통코드 조회			codeList
        this.fnMessageList();		// 메시지목록 조회			messageList
        this.fnMenuList();			// 메뉴목록 조회			menuList
        this.fnUserInfo();			// 사용자정보 조회			userInfo
        */
        this.fvLoginAfterTranResultCnt = 0;					// 로그인 후 서비스 결과 횟수


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {

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
        /*
        	// 라이센스관련 임시코드
        	if(this.fvApp.gvSvrType == "DEV")				// 개발
        	{
        		try
        		{
        			if(window)
        			{
        				window.document.all["mainframe.VFrameSet"].style.top = "0px"
        			}
        		}
        		catch(e)
        		{

        		}
        	}
        */

        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	this.form_onsize(objForm);

        	// 아이디저장 정보 체크
        	var sSaveUserNo = nexacro.getPrivateProfile("saveUserNo");
        	var sSaveUserChk = nexacro.getPrivateProfile("saveUserChk");
        	if (sSaveUserChk)
        	{
        		this.divContents.form.divLogin.form.edtId.set_value(sSaveUserNo);
        		this.divContents.form.divLogin.form.chkId.set_value(true);
        		this.divContents.form.divLogin.form.edtPw.setFocus();
        	}
        	else
        	{
        		this.divContents.form.divLogin.form.edtId.setFocus();
        	}

        	// 실행환경 구분 (LOCAL , DEV , REAL)
        	if(this.fvApp.gvSvrType == "LOCAL" || this.fvApp.gvSvrType == "DEV")		// 로컬, 개발에서만 보이게
        	{
        		this.divContents.form.divLogin.form.btnLoginTemp.set_visible(true);
        	}

        	// 세션유효한 경우 자동로그인 처리
        	this.fnSessionLogin();

        	/* ☆★☆★☆★☆★ 업로드 서비스 호출시 fnSessionLogin의 콜백함수에서 실행 - 20240312 */

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {
        	// divContents 위치 이동처리
        	var nLeft	= (this.getOffsetWidth() / 2) - (this.divContents.getOffsetWidth() / 2);
        	var nTop    = (this.getOffsetHeight()/ 2) - (this.divContents.getOffsetHeight() / 2) ;

        	if ( nLeft < 0 ) nLeft = 0;
        	if ( nTop < 0 ) nTop = 0;
        	nTop = this.divContents.getOffsetTop();

        	this.divContents.move(nLeft, nTop);

        	// this.divBottom 위치 이동처리
        	if(this.getOffsetHeight() > 923)
        	{
        		this.divBottom.set_top(nexacro.toNumber(this.getOffsetHeight()-this.divBottom.getOffsetHeight()));
        	}
        	else
        	{
        		this.divBottom.set_top("divContents:56");
        	}

        	// 사용자 등록 팝업에 대한 위치 조정
        	var arrPopFrame = nexacro.getPopupFrames();				// Modal, Modeless로 실행 된 Frame정보
        	var objPopup = arrPopFrame["comUserWrapperMain"];		// Popup 오브젝트
        	if(objPopup)
        	{
        		var curX, curY;
        		nLeft	= (this.fvApp.mainframe.getOffsetWidth() / 2) - Math.round(objPopup.getOffsetWidth() / 2);
        		nTop    = (this.fvApp.mainframe.getOffsetHeight() / 2) - Math.round(objPopup.getOffsetHeight() / 2);

        		if(nLeft < 0) nLeft = 0;
        		if(nTop < 0) nTop = 0;
        		objPopup.move(nLeft,nTop);
        	}

        	this.resetScroll();
        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.
         */
        this.frameLogin_onkeyup = function(obj,e)
        {
        	if (e.ctrlkey && e.keycode == 81)	// 디버그 창 : Ctrl + Q
        	{
        		// 운영환경에서는 실행 방지
        		if (nexacro.getEnvironmentVariable("evSvrType") == "REAL") return;
        		this.gfnOpenDebugPop();
        	}
        };


        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "checkId" :
        			// 후처리 코드
        			this.divContents.form.divLogin.form.edtId.setFocus();
        			break;
        		case "checkPw" :
        			// 후처리 코드
        			this.divContents.form.divLogin.form.edtPw.setFocus();
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "comUserRolePop" :
        			// 후처리 코드
        			if (!this.gfnIsNull(objRtnValue["pvRtnValue"]))
        			{
        				this.dsLogin.setColumn(0, "role", objRtnValue["pvRtnValue"]);
        				this.fnLogin();
        			}
        			break;
        		case "comUserWrapperMain" :
        			// 후처리 코드
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것

        		// 로그인 후 호출 서비스 카운트 증가
        		if(sSvcId == "codeList" || sSvcId == "messageList" || sSvcId == "menuList" || sSvcId == "userInfo")
        		{
        			this.fvLoginAfterTranResultCnt++;
        			if(this.fvLoginAfterTranAllCnt <= this.fvLoginAfterTranResultCnt)
        			{
        				// 로그인 성공시 처리 프레임 변경 등...
        				this.fnSetSeprateFrame();
        			}
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "callRSA" :
        			trace(this.dsRSAReseult.saveXML());
        			nexacro.getApplication().gvRSAModulus = this.dsRSAReseult.getColumn(0, "RSAModulus");
        			nexacro.getApplication().gvRSAExponent = this.dsRSAReseult.getColumn(0, "RSAExponent");
        			break;
        		case "preLogin" :
        			// 후처리 코드
        			// trace(this.dsUserRoleList.saveXML());
        			if(this.dsUserRoleList.getRowCount() == 0)
        			{
        				this.fnLogin();
        			}
        			else if(this.dsUserRoleList.getRowCount() == 1)
        			{
        				this.dsLogin.setColumn(0, "role", this.dsUserRoleList.getColumn(0, "roleIdMgno"));
        				this.fnLogin();
        			}
        			else
        			{
        				// 관장/위탁기관 체크 후처리
        				// role 리스트 항목을 사용자가 선택한 후 role 정보 셋팅하고 로그인 서비스 호출처리
        				var sPopupId	= "comUserRolePop";
        				var sPopupUrl	= "Frame_Popup::comUserRolePop.xfdl";
        				var objArgs		= {pvDataset:this.dsUserRoleList};
        				var oOption		= {};

        				this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        			}
        			break;
        		case "login" :
        			// 후처리 코드
        			// 로그인 정상시 후 처리
        			this.fvApp.gvLoginTrueAfter = true;

        			if(this.divContents.form.divLogin.form.chkId.value == 1)
        			{
        				nexacro.setPrivateProfile("saveUserNo", this.divContents.form.divLogin.form.edtId.value);
        				nexacro.setPrivateProfile("saveUserChk", this.divContents.form.divLogin.form.chkId.value);
        			}
        			else
        			{
        				nexacro.setPrivateProfile("saveUserNo", "");
        				nexacro.setPrivateProfile("saveUserChk", "");
        			}

        			// 로그인 인증 성공 후 관련 정보 서비스 호출
        			this.fnCodeList();			// 공통코드 조회
        			this.fnMessageList();		// 메시지목록 조회
        			this.fnMenuList();			// 메뉴목록 조회
        			this.fnUserInfo();			// 사용자정보 조회
        			break;
         		case "sessionLogin" :
         			// 후처리 코드

        			var sessionYn = this.dsCheck.getColumn(0, "sessionYn");

        			//실패
        			if(sessionYn == "Y") {
        				// 세션유효한 경우 자동로그인 정상시 후 처리
        				this.fvApp.gvLoginTrueAfter = true;

        				// 로그인 인증 성공 후 관련 정보 서비스 호출
        				this.fnCodeList();			// 공통코드 조회
        				this.fnMessageList();		// 메시지목록 조회
        				this.fnMenuList();			// 메뉴목록 조회
        				this.fnUserInfo();			// 사용자정보 조회


        			// 성공
        			} else {
        				// RSA
        				this.fnCallRSA();

        				// 로그인 위젯 서비스 조회
        				this.divContents.form.divWgLogin01.form.fnLoginInit();
        				this.divContents.form.divWgLogin02.form.fnLoginInit();
        				this.divContents.form.divWgLogin03.form.fnLoginInit();
        				this.divContents.form.divWgLogin04.form.fnLoginInit();
        			}
         			break;
        		case "codeList" :
        			this.fvLoginAfterTranResultCnt++;
        			if(this.fvLoginAfterTranAllCnt <= this.fvLoginAfterTranResultCnt)
        			{
        				// 로그인 성공시 처리 프레임 변경 등...
        				this.fnSetSeprateFrame();
        			}
        			break;
        		case "messageList" :
        			this.fvLoginAfterTranResultCnt++;
        			if(this.fvLoginAfterTranAllCnt <= this.fvLoginAfterTranResultCnt)
        			{
        				// 로그인 성공시 처리 프레임 변경 등...
        				this.fnSetSeprateFrame();
        			}
        			break;
        		case "menuList" :
        			this.fvLoginAfterTranResultCnt++;
        			if(this.fvLoginAfterTranAllCnt <= this.fvLoginAfterTranResultCnt)
        			{
        				// 로그인 성공시 처리 프레임 변경 등...
        				this.fnSetSeprateFrame();
        			}
        			break;
        		case "userInfo" :
        			// 사용자 정보 셋팅
        			this.fvApp.User.userId			= this.fvApp.gdsUserInfo.getColumn(0, "userId"			);  // 사용자ID
        			this.fvApp.User.upInstMgno  	= this.fvApp.gdsUserInfo.getColumn(0, "upInstMgno"		);  // 상위기관관리번호
        			this.fvApp.User.instMgno    	= this.fvApp.gdsUserInfo.getColumn(0, "instMgno"		);  // 기관관리번호
        			this.fvApp.User.userClCd    	= this.fvApp.gdsUserInfo.getColumn(0, "userClCd"		);  // 사용자구분코드
        			this.fvApp.User.flnm        	= this.fvApp.gdsUserInfo.getColumn(0, "flnm"			);  // 성명
        			this.fvApp.User.deptNm     		= this.fvApp.gdsUserInfo.getColumn(0, "deptNm"			);  // 부서명
        			this.fvApp.User.jbpsNm      	= this.fvApp.gdsUserInfo.getColumn(0, "jbpsNm"			);  // 직위명
        			this.fvApp.User.telDdd      	= this.fvApp.gdsUserInfo.getColumn(0, "telDdd"			);  // 전화지역번호
        			this.fvApp.User.telTlpno    	= this.fvApp.gdsUserInfo.getColumn(0, "telTlpno"		);  // 전화국번호
        			this.fvApp.User.telPhino    	= this.fvApp.gdsUserInfo.getColumn(0, "telPhino"		);  // 전화개별번호
        			this.fvApp.User.acntRprsvYn 	= this.fvApp.gdsUserInfo.getColumn(0, "acntRprsvYn"		);  // 계정대표자여부
        			this.fvApp.User.instClsfCd  	= this.fvApp.gdsUserInfo.getColumn(0, "instClsfCd"		);  // 기관분류코드
        			this.fvApp.User.instDtlClsfCd	= this.fvApp.gdsUserInfo.getColumn(0, "instDtlClsfCd"	);  // 기관세부분류코드
        			this.fvApp.User.govInstYn   	= this.fvApp.gdsUserInfo.getColumn(0, "govInstYn"		);  // 정부기관여부
        			this.fvApp.User.bzentNm     	= this.fvApp.gdsUserInfo.getColumn(0, "bzentNm"			);  // 사업체명
        			this.fvApp.User.bzentClCd   	= this.fvApp.gdsUserInfo.getColumn(0, "bzentClCd"		);  // 사업체구분코드
        			this.fvApp.User.rprsvNm     	= this.fvApp.gdsUserInfo.getColumn(0, "rprsvNm"			);  // 대표자명
        			this.fvApp.User.roleIdMgno     	= this.fvApp.gdsUserInfo.getColumn(0, "roleIdMgno"		);  // 역할ID관리번호
        			this.fvApp.User.roleIdMgnoList 	= this.fvApp.gdsUserInfo.getColumn(0, "roleIdMgnoList"	);  // 역할ID관리번호목록

        			this.fvLoginAfterTranResultCnt++;
        			if(this.fvLoginAfterTranAllCnt <= this.fvLoginAfterTranResultCnt)
        			{
        				// 로그인 성공시 처리 프레임 변경 등...
        				this.fnSetSeprateFrame();
        			}
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
         * @desc RSA 호출
         * @param N/A
         * @return N/A
        */
        this.fnCallRSA = function()
        {
        	//RSA 호출
        	var objArgs = {};
        		objArgs.svcId    = "callRSA";
        		objArgs.url 	 = "/common/rsa.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "dsRSAReseult=rsa";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 로그인 전 관장/위탁기관 체크
         * @param N/A
         * @return N/A
        */
        this.fnPreLogin = function()
        {
        	// 호출전 Validation 체크
        	if(!this.fnPreLoginValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	if(!this.fnPreLoginValueSetting()) return false;

        	//로그인 실행
        	var objArgs = {};
        		objArgs.svcId    = "preLogin";
        		objArgs.url 	 = "/prepare/login";
        		objArgs.inds     = "inputLogin=dsLogin";
        		objArgs.outds    = "dsUserRoleList=userRoleList";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 호출전 Validation 체크
         * @param N/A
         * @return {boolean} 체크시 정상 - true , 오류 - false
        */
        this.fnPreLoginValidCheck = function()
        {
        	// Transaction 호출 전에 체크해야 될 사항에 대해 기술

        	if(this.gfnIsNull(this.divContents.form.divLogin.form.edtId.value))
        	{
        		this.gfnShowMessage(this, "아이디를 입력해주십시오.", "", "fnMsgCallback", "checkId");
        		return false;
        	}

        	if(this.gfnIsNull(this.divContents.form.divLogin.form.edtPw.value))
        	{
        		this.gfnShowMessage(this, "비밀번호를 입력해주십시오.", "", "fnMsgCallback", "checkPw");
        		return false;
        	}

        	return true;
        };

        /**
         * @desc 호출전 데이터 설정 및 가공 처리
         * @param N/A
         * @return {boolean} 처리결과 정상 - true , 오류 - false
        */
        this.fnPreLoginValueSetting = function()
        {
        	// Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술

        	// ID 셋팅
        	var sUserId = this.gfnTrim(this.divContents.form.divLogin.form.edtId.value);
        	this.divContents.form.divLogin.form.edtId.set_value(sUserId);
        	this.dsLogin.setColumn(0,"id",this.divContents.form.divLogin.form.edtId.value);

        	// PW 셋팅
        	// 실제 입력 pw는 서버로 넘기지 않기
        	//this.dsLogin.setColumn(0,"password",this.divContents.form.divLogin.form.edtPw.value);

        	// PW RSA 셋팅
        	var encryptValue = this.gfnRSAEncrypt(this.divContents.form.divLogin.form.edtPw.value);
        	if(!encryptValue) return false;

        	this.dsLogin.setColumn(0,"rsaPassword", encryptValue);

        	return true;
        };

        /**
         * @desc 로그인 처리
         * @param N/A
         * @return N/A
        */
        this.fnLogin = function()
        {
        	// 호출전 Validation 체크
        	if(!this.fnLoginValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	if(!this.fnLoginValueSetting()) return false;

        	//로그인 실행
        	var objArgs = {};
        		objArgs.svcId    = "login";
        		objArgs.url 	 = "/login";
        		objArgs.inds     = "inputLogin=dsLogin";
        		objArgs.outds    = "";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 호출전 Validation 체크
         * @param N/A
         * @return {boolean} 체크시 정상 - true , 오류 - false
        */
        this.fnLoginValidCheck = function()
        {
        	// Transaction 호출 전에 체크해야 될 사항에 대해 기술

        	if(this.gfnIsNull(this.divContents.form.divLogin.form.edtId.value))
        	{
        		this.gfnShowMessage(this, "아이디를 입력해주십시오.", "", "fnMsgCallback", "checkId");
        		return false;
        	}

        	if(this.gfnIsNull(this.divContents.form.divLogin.form.edtPw.value))
        	{
        		this.gfnShowMessage(this, "비밀번호를 입력해주십시오.", "", "fnMsgCallback", "checkPw");
        		return false;
        	}

        	return true;
        };

        /**
         * @desc 호출전 데이터 설정 및 가공 처리
         * @param N/A
         * @return {boolean} 처리결과 정상 - true , 오류 - false
        */
        this.fnLoginValueSetting = function()
        {
        	// Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술

        	// ID 셋팅
        	var sUserId = this.gfnTrim(this.divContents.form.divLogin.form.edtId.value);
        	this.divContents.form.divLogin.form.edtId.set_value(sUserId);
        	this.dsLogin.setColumn(0,"id",this.divContents.form.divLogin.form.edtId.value);

        	// PW 셋팅
        	// 실제 입력 pw는 서버로 넘기지 않기
        	//this.dsLogin.setColumn(0,"password",this.divContents.form.divLogin.form.edtPw.value);

        	// PW RSA 셋팅
        	var encryptValue = this.gfnRSAEncrypt(this.divContents.form.divLogin.form.edtPw.value);
        	this.dsLogin.setColumn(0,"rsaPassword", encryptValue);

        	return true;
        };

        /**
         * @desc 세션유효한 경우 자동로그인 처리
         * @param N/A
         * @return N/A
        */
        this.fnSessionLogin = function()
        {
        	this.dsCheck.clearData();

        	//로그인 실행
        	var objArgs = {};
        		objArgs.svcId    = "sessionLogin";
        		objArgs.url 	 = "/session/check.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "dsCheck=dsCheck";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 공통코드 조회
         * @param N/A
         * @return N/A
        */
        this.fnCodeList = function()
        {
        	this.dsSearchCodeList.clearData();
        	var nRow = this.dsSearchCodeList.addRow();
        	this.dsSearchCodeList.setColumn(nRow, "groupCodes", this.fvApp.Frame.sLoginGroupCodes);

        	var objArgs = {};
        		objArgs.svcId    = "codeList";
        		objArgs.url 	 = "/common/initial/selectCodeList.irs";
        		objArgs.inds     = "searchCode=dsSearchCodeList";
        		objArgs.outds    = "gdsCommCode=codeList";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 메시지목록 조회
         * @param N/A
         * @return N/A
        */
        this.fnMessageList = function()
        {
        	var objArgs = {};
        		objArgs.svcId    = "messageList";
        		objArgs.url 	 = "/common/initial/selectErrorMessegeList.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "gdsMessage=errorMessegeList";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 메뉴목록 조회
         * @param N/A
         * @return N/A
        */
        this.fnMenuList = function()
        {
        	var objArgs = {};
        		objArgs.svcId    = "menuList";
        		objArgs.url 	 = "/common/initial/selectMenuList.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "gdsMenu=menuList";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 사용자정보 조회
         * @param N/A
         * @return N/A
        */
        this.fnUserInfo = function()
        {
        	var objArgs = {};
        		objArgs.svcId    = "userInfo";
        		objArgs.url 	 = "/common/initial/selectUserInfo.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "gdsUserInfo=userInfo";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 로그인 성공시 처리 프레임 변경 등...
         * @param N/A
         * @return N/A
        */
        this.fnSetSeprateFrame = function()
        {
        	// 임시코드	popupYn	useYn
        	this.fvApp.gdsMenu.addColumn("popupYn", "STRING", 255);
        	this.fvApp.gdsMenu.addColumn("useYn", "STRING", 255);


        	// 개발메뉴 gdsMenu 에 추가처리
        	// 실행환경 구분 (LOCAL , DEV , REAL)
        	if(this.fvApp.gvSvrType == "LOCAL" || this.fvApp.gvSvrType == "DEV")
        	{
        		this.fvApp.gdsMenu.appendData(this.fvApp.gdsMenuTmp, true);
        	}

        	// 로그인 성공이후 frame 영역 후처리 호출
        	this.fvApp.gvFrameLeft.form.fnLoginAfter();
        	this.fvApp.gvFrameTop.form.fnLoginAfter();
        	this.fvApp.gvFrameMain.form.fnLoginAfter();
        	this.fvApp.gvFrameBottom.form.fnLoginAfter();

        	// 화면 전환
        	this.fvApp.gvVFrameSet.set_separatesize(this.fvApp.Frame.sVFrameSetLoginAfter);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 아이디에서 key 이벤트 처리
        */
        this.divContents_divLogin_edtId_onkeyup = function(obj,e)
        {
        	// enter 키 입력시 로그인 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divContents_divLogin_btnLogin_onclick();
        	}
        };

        /**
         * @description 아이디에서 "X" 클릭시 처리
        */
        this.divContents_divLogin_btnIdClear_onclick = function(obj,e)
        {
        	this.divContents.form.divLogin.form.edtId.set_value(null);
        	this.divContents.form.divLogin.form.edtId.setFocus();
        };

        /**
         * @description 아이디에서 key 이벤트 처리
        */
        this.divContents_divLogin_edtPw_onkeyup = function(obj,e)
        {
        	// enter 키 입력시 로그인 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divContents_divLogin_btnLogin_onclick();
        	}
        };

        /**
         * @description 로그인 버튼 클릭
        */
        this.divContents_divLogin_btnLogin_onclick = function(obj,e)
        {
        	this.fvLoginAfterTranResultCnt = 0;					// 로그인 후 서비스 결과 횟수
        	// this.fnLogin();
        	this.fnPreLogin();	// 로그인 전 관장/위탁기관 체크
        };

        /**
         * @description Login(temp) 버튼 클릭
        */
        this.divContents_divLogin_btnLoginTemp_onclick = function(obj,e)
        {
        	this.fvApp.gvLoginTrueAfter = true;

        	if ( this.fvApp.gvSvrType == "LOCAL" || this.fvApp.gvSvrType == "DEV" )
        	{
        		this.fvApp.gdsMenu.appendData(this.fvApp.gdsMenuTmp, true);
        	}

        	// 로그인 성공이후 frame 영역 후처리 호출
        	this.fvApp.gvFrameLeft.form.fnLoginAfter();
        	this.fvApp.gvFrameTop.form.fnLoginAfter();
        	this.fvApp.gvFrameMain.form.fnLoginAfter();
        	this.fvApp.gvFrameBottom.form.fnLoginAfter();

        	this.fvApp.gvVFrameSet.set_separatesize(this.fvApp.Frame.sVFrameSetLoginAfter);
        };

        /**
         * @description 사용자등록 버튼 클릭
        */
        this.divContents_divLogin_btnRegisterUser_onclick = function(obj,e)
        {
        	var sPopupId	= "comUserWrapperMain";
        	var sPopupUrl	= "Frame_Popup::comUserWrapperMain.xfdl";
        	var objArgs		= {pvPopupType:1};
        	var oOption		= {showtitlebar:false,titletext:"사용자등록"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 아이디/비밀번호 찾기 버튼 클릭
        */
        this.divContents_divLogin_btnFindUser_onclick = function(obj,e)
        {
        	var sPopupId	= "comUserWrapperMain";
        	var sPopupUrl	= "Frame_Popup::comUserWrapperMain.xfdl";
        	var objArgs		= {pvPopupType:2};
        	var oOption		= {showtitlebar:false,titletext:"사용자등록"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description "공지사항" 클릭시
        */
        this.divTop_btnNoticeBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000010'};
        	var oOption		= {showtitlebar:true,titletext:"공지사항", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description "자료실" 클릭시
        */
        this.divTop_btnDataBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000020'};
        	var oOption		= {showtitlebar:true,titletext:"자료실", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description "법령과지침" 클릭시
        */
        this.divTop_btnLNGBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000040'};
        	var oOption		= {showtitlebar:true,titletext:"법령과지침", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description "FAQ" 클릭시
        */
        this.divTop_btnFAQBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000030'};
        	var oOption		= {showtitlebar:true,titletext:"FAQ", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description "정보공개" 클릭시
        */
        this.divTop_btnInformation_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000050'};
        	var oOption		= {showtitlebar:true,titletext:"정보공개", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 아이디 에 포커스가 오면 가이드 문구 popupdiv 노출
        */
        this.divContents_divLogin_edtId_onsetfocus = function(obj,e)
        {
        	if(!this.pdvEdtIdTooltip.isPopup())
        	{
        		nXPos = (obj.getOffsetWidth()/2) - (this.pdvEdtIdTooltip.getOffsetWidth()/2);
        		nYPos = obj.getOffsetHeight();
        		this.pdvEdtIdTooltip.trackPopupByComponent(obj, nXPos, nYPos, this.pdvEdtIdTooltip.getOffsetWidth(), this.pdvEdtIdTooltip.getOffsetHeight(), "", false);
        		this.divContents.form.divLogin.form.edtId.setFocus();
        	}
        };

        /**
         * @description 아이디 에 포커스가 빠지면 가이드 문구 popupdiv 닫기
        */
        this.divContents_divLogin_edtId_onkillfocus = function(obj,e)
        {
        	this.pdvEdtIdTooltip.closePopup();
        };

        /**
         * @description 가이드 문구 popupdiv 띄우기 위한 포커스가 처리
        */
        this.divContents_divLogin_edtId_oneditclick = function(obj,e)
        {
        	this.divContents.form.divLogin.form.btnIdClear.setFocus();
        	this.divContents.form.divLogin.form.edtId.setFocus();
        };

        /**
         * @description "개인정보처리방침" 클릭시
        */
        this.divBottom_stcPrivacy_onclick = function(obj,e)
        {
        	var sUrl = "https://www.gir.go.kr/home/index.do?menuId=52";
        	// system.execBrowser(sUrl);
        	system.execDefaultBrowser(sUrl);
        };

        /**
         * @description "바로가기" 클릭시
        */
        this.divBottom_cboSite_onitemclick = function(obj,e)
        {
        	if(!this.gfnIsNull(e.itemvalue))
        	{
        		system.execDefaultBrowser(e.itemvalue);
        	}
        };
        this.divContents_divLogin_chkId_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeyup",this.frameLogin_onkeyup,this);
            this.divContents.form.divLogin.form.edtId.addEventHandler("onkeyup",this.divContents_divLogin_edtId_onkeyup,this);
            this.divContents.form.divLogin.form.edtPw.addEventHandler("onkeyup",this.divContents_divLogin_edtPw_onkeyup,this);
            this.divContents.form.divLogin.form.btnIdClear.addEventHandler("onclick",this.divContents_divLogin_btnIdClear_onclick,this);
            this.divContents.form.divLogin.form.btnLogin.addEventHandler("onclick",this.divContents_divLogin_btnLogin_onclick,this);
            this.divContents.form.divLogin.form.chkId.addEventHandler("onclick",this.divContents_divLogin_chkId_onclick,this);
            this.divContents.form.divLogin.form.btnRegisterUser.addEventHandler("onclick",this.divContents_divLogin_btnRegisterUser_onclick,this);
            this.divContents.form.divLogin.form.btnFindUser.addEventHandler("onclick",this.divContents_divLogin_btnFindUser_onclick,this);
            this.divContents.form.divLogin.form.btnLoginTemp.addEventHandler("onclick",this.divContents_divLogin_btnLoginTemp_onclick,this);
            this.divContents.form.divLNG.addEventHandler("onclick",this.divTop_btnLNGBoard_onclick,this);
            this.divContents.form.divLNG.form.stcTitle.addEventHandler("onclick",this.divTop_btnLNGBoard_onclick,this);
            this.divContents.form.divLNG.form.stcDesc.addEventHandler("onclick",this.divTop_btnLNGBoard_onclick,this);
            this.divContents.form.divInfo01.addEventHandler("onclick",this.divTop_btnInformation_onclick,this);
            this.divContents.form.divInfo01.form.stcTitle.addEventHandler("onclick",this.divTop_btnInformation_onclick,this);
            this.divContents.form.divInfo01.form.stcDesc.addEventHandler("onclick",this.divTop_btnInformation_onclick,this);
            this.divBottom.form.stcPrivacy.addEventHandler("onclick",this.divBottom_stcPrivacy_onclick,this);
            this.divBottom.form.cboSite.addEventHandler("onitemclick",this.divBottom_cboSite_onitemclick,this);
            this.divTop.form.btnInformation.addEventHandler("onclick",this.divTop_btnInformation_onclick,this);
            this.divTop.form.btnFAQBoard.addEventHandler("onclick",this.divTop_btnFAQBoard_onclick,this);
            this.divTop.form.btnLNGBoard.addEventHandler("onclick",this.divTop_btnLNGBoard_onclick,this);
            this.divTop.form.btnDataBoard.addEventHandler("onclick",this.divTop_btnDataBoard_onclick,this);
            this.divTop.form.btnNoticeBoard.addEventHandler("onclick",this.divTop_btnNoticeBoard_onclick,this);
        };
        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
