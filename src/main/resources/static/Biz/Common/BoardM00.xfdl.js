(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopupSub02");
            if (Form == this.constructor)
            {
                this._setFormPosition(1350,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsObj", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staRightGuid",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W50");
            this.addChild(obj.name, obj);

            obj = new Static("staLeftGuid","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W40");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","0",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_breadcrumbs");
            obj.set_usedecorate("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"65","0",null,"1130",null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_LOGIN_TopBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","19","276","29",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnInfo",null,"19","112","31","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("정보공개");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnFAQBoard",null,"19","100","31","btnInfo:30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("FAQ");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnLNGBoard",null,"19","136","31","btnFAQBoard:30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("법령과지침");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnDataBoard",null,"19","100","31","btnLNGBoard:30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("자료실");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("자료실");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnNoticeBoard",null,"19","112","31","btnDataBoard:30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            obj.set_accessibilitylabel("공지사항");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divWork","50","203",null,null,"50","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Frame");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataBoardM00","1939","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDataBoardS01","2308","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFAQBoardM00","1939","268","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFAQBoardS01","2308","268","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDataBoardS02","2610","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFAQBoardS02","2610","268","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLNGBoardM00","1939","496","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLNGBoardS01","2308","496","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLNGBoardS02","2610","496","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divNoticeBoardM00","1939","760","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divNoticeBoardS01","2308","760","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divNoticeBoardS02","2610","760","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleNm","55","97","207","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공지사항 ");
            obj.set_cssclass("sta_Notice_Title");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divAgrStiplInfoM00","1939","940","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAgrStiplInfoS01","2308","940","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMhdlgInfoS01","2308","1110","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMhdlgInfoM00","1939","1110","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divIrbInfoM00","1929","1290","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divIrbInfoS01","2298","1290","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleLine","50","152",null,"1","50",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_TitleLine");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch",null,"103","395","40","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_Search_Input");
            obj.set_visible("false");
            obj.set_accessibilitylabel("검색조건");
            obj.set_text("넥사크로17");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"108","55","30","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_EdiSch_1");
            obj.set_visible("false");
            obj.set_accessibilitylabel("검색");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchCmmInfoM00","1953","1548","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchCmmInfoS01","2314","1548","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDataBoardM00.form
            obj = new Layout("default","",0,0,this.divDataBoardM00.form,function(p){});
            this.divDataBoardM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDataBoardS01.form
            obj = new Layout("default","",0,0,this.divDataBoardS01.form,function(p){});
            this.divDataBoardS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFAQBoardM00.form
            obj = new Layout("default","",0,0,this.divFAQBoardM00.form,function(p){});
            this.divFAQBoardM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFAQBoardS01.form
            obj = new Layout("default","",0,0,this.divFAQBoardS01.form,function(p){});
            this.divFAQBoardS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDataBoardS02.form
            obj = new Layout("default","",0,0,this.divDataBoardS02.form,function(p){});
            this.divDataBoardS02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFAQBoardS02.form
            obj = new Layout("default","",0,0,this.divFAQBoardS02.form,function(p){});
            this.divFAQBoardS02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLNGBoardM00.form
            obj = new Layout("default","",0,0,this.divLNGBoardM00.form,function(p){});
            this.divLNGBoardM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLNGBoardS01.form
            obj = new Layout("default","",0,0,this.divLNGBoardS01.form,function(p){});
            this.divLNGBoardS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLNGBoardS02.form
            obj = new Layout("default","",0,0,this.divLNGBoardS02.form,function(p){});
            this.divLNGBoardS02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNoticeBoardM00.form
            obj = new Layout("default","",0,0,this.divNoticeBoardM00.form,function(p){});
            this.divNoticeBoardM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNoticeBoardS01.form
            obj = new Layout("default","",0,0,this.divNoticeBoardS01.form,function(p){});
            this.divNoticeBoardS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNoticeBoardS02.form
            obj = new Layout("default","",0,0,this.divNoticeBoardS02.form,function(p){});
            this.divNoticeBoardS02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrStiplInfoM00
            obj = new Layout("default","",0,0,this.divAgrStiplInfoM00.form,function(p){});
            this.divAgrStiplInfoM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgrStiplInfoS01.form
            obj = new Layout("default","",0,0,this.divAgrStiplInfoS01.form,function(p){});
            this.divAgrStiplInfoS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgInfoS01.form
            obj = new Layout("default","",0,0,this.divMhdlgInfoS01.form,function(p){});
            this.divMhdlgInfoS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgInfoM00.form
            obj = new Layout("default","",0,0,this.divMhdlgInfoM00.form,function(p){});
            this.divMhdlgInfoM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIrbInfoM00.form
            obj = new Layout("default","",0,0,this.divIrbInfoM00.form,function(p){});
            this.divIrbInfoM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIrbInfoS01.form
            obj = new Layout("default","",0,0,this.divIrbInfoS01.form,function(p){});
            this.divIrbInfoS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchCmmInfoM00.form
            obj = new Layout("default","",0,0,this.divSearchCmmInfoM00.form,function(p){});
            this.divSearchCmmInfoM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchCmmInfoS01.form
            obj = new Layout("default","",0,0,this.divSearchCmmInfoS01.form,function(p){});
            this.divSearchCmmInfoS01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1350,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BoardM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 팝업게시판 메인화면
        * FILE NAME     : BoardM00.xfdl
        * DESCRIPTION   : 팝업게시판 메인화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.27    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvAuth	= {};				// 화면의 권한정보

        // 참고용
        this.fvPopupUrl  = "";			// xxxx.xfdl
        this.fvTitletext  = "";			// 타이틀
        this.fvCallback  = "";			// callback 함수명
        this.fvSrcPopup  = "";			// Y / N
        this.FvOpenType  = "";			// PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        this.fvMnuId  = "";				// 메뉴ID
        this.fvModeless  = "";			// Y / N
        this.IsCallDataBoardM00 = false;
        this.IsCallDataBoardS01 = false;
        this.IsCallDataBoardS02 = false;
        this.IsCallFAQBoardM00 = false;
        this.IsCallFAQBoardS01 = false;
        this.IsCallFAQBoardS02 = false;
        this.IsCallLNGBoardM00 = false;
        this.IsCallLNGBoardS01 = false;
        this.IsCallLNGBoardS02 = false;
        this.IsCallNoticeBoardM00 = false;
        this.IsCallNoticeBoardS01 = false;
        this.IsCallNoticeBoardS02 = false;

        this.IsCallAgrStiplInfoM00 = false;
        this.IsCallAgrStiplInfoS01 = false;
        this.IsCallIrbInfoM00 = false;
        this.IsCallIrbInfoS01 = false;
        this.IsCallMhdlgInfoM00 = false;
        this.IsCallMhdlgInfoS01 = false;

        this.fvTempInfo = {};



        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.divMhdlgInfoS01.set_left(0);
        	this.divMhdlgInfoS01.set_top(170);
        	this.divMhdlgInfoS01.set_width(null);
        	this.divMhdlgInfoS01.set_height(null);
        	this.divMhdlgInfoS01.set_right(0);
        	this.divMhdlgInfoS01.set_bottom(0);

        	this.divMhdlgInfoM00.set_left(0);
        	this.divMhdlgInfoM00.set_top(165);
        	this.divMhdlgInfoM00.set_width(null);
        	this.divMhdlgInfoM00.set_height(null);
        	this.divMhdlgInfoM00.set_right(0);
        	this.divMhdlgInfoM00.set_bottom(0);

        	this.divIrbInfoS01.set_left(0);
        	this.divIrbInfoS01.set_top(170);
        	this.divIrbInfoS01.set_width(null);
        	this.divIrbInfoS01.set_height(null);
        	this.divIrbInfoS01.set_right(0);
        	this.divIrbInfoS01.set_bottom(0);

        	this.divIrbInfoM00.set_left(0);
        	this.divIrbInfoM00.set_top(165);
        	this.divIrbInfoM00.set_width(null);
        	this.divIrbInfoM00.set_height(null);
        	this.divIrbInfoM00.set_right(0);
        	this.divIrbInfoM00.set_bottom(0);


        	this.divAgrStiplInfoS01.set_left(0);
        	this.divAgrStiplInfoS01.set_top(170);
        	this.divAgrStiplInfoS01.set_width(null);
        	this.divAgrStiplInfoS01.set_height(null);
        	this.divAgrStiplInfoS01.set_right(0);
        	this.divAgrStiplInfoS01.set_bottom(0);

        	this.divAgrStiplInfoM00.set_left(0);
        	this.divAgrStiplInfoM00.set_top(165);
        	this.divAgrStiplInfoM00.set_width(null);
        	this.divAgrStiplInfoM00.set_height(null);
        	this.divAgrStiplInfoM00.set_right(0);
        	this.divAgrStiplInfoM00.set_bottom(0);

        	this.divNoticeBoardM00.set_left(0);
        	this.divNoticeBoardM00.set_top(165);
        	this.divNoticeBoardM00.set_width(null);
        	this.divNoticeBoardM00.set_height(null);
        	this.divNoticeBoardM00.set_right(0);
        	this.divNoticeBoardM00.set_bottom(0);

        	this.divNoticeBoardS01.set_left(0);
        	this.divNoticeBoardS01.set_top(170);
        	this.divNoticeBoardS01.set_width(null);
        	this.divNoticeBoardS01.set_height(null);
        	this.divNoticeBoardS01.set_right(0);
        	this.divNoticeBoardS01.set_bottom(0)

        	this.divNoticeBoardS02.set_left(0);
        	this.divNoticeBoardS02.set_top(170);
        	this.divNoticeBoardS02.set_width(null);
        	this.divNoticeBoardS02.set_height(null);
        	this.divNoticeBoardS02.set_right(0);
        	this.divNoticeBoardS02.set_bottom(0)

        	this.divDataBoardM00.set_left(0);
        	this.divDataBoardM00.set_top(165);
        	this.divDataBoardM00.set_width(null);
        	this.divDataBoardM00.set_height(null);
        	this.divDataBoardM00.set_right(0);
        	this.divDataBoardM00.set_bottom(0)

        	this.divDataBoardS01.set_left(0);
        	this.divDataBoardS01.set_top(170);
        	this.divDataBoardS01.set_width(null);
        	this.divDataBoardS01.set_height(null);
        	this.divDataBoardS01.set_right(0);
        	this.divDataBoardS01.set_bottom(0)

        	this.divDataBoardS02.set_left(0);
        	this.divDataBoardS02.set_top(170);
        	this.divDataBoardS02.set_width(null);
        	this.divDataBoardS02.set_height(null);
        	this.divDataBoardS02.set_right(0);
        	this.divDataBoardS02.set_bottom(0)

        	this.divLNGBoardM00.set_left(0);
        	this.divLNGBoardM00.set_top(165);
        	this.divLNGBoardM00.set_width(null);
        	this.divLNGBoardM00.set_height(null);
        	this.divLNGBoardM00.set_right(0);
        	this.divLNGBoardM00.set_bottom(0)

        	this.divLNGBoardS01.set_left(0);
        	this.divLNGBoardS01.set_top(170);
        	this.divLNGBoardS01.set_width(null);
        	this.divLNGBoardS01.set_height(null);
        	this.divLNGBoardS01.set_right(0);
        	this.divLNGBoardS01.set_bottom(0)

        	this.divLNGBoardS02.set_left(0);
        	this.divLNGBoardS02.set_top(170);
        	this.divLNGBoardS02.set_width(null);
        	this.divLNGBoardS02.set_height(null);
        	this.divLNGBoardS02.set_right(0);
        	this.divLNGBoardS02.set_bottom(0)

        	this.divFAQBoardM00.set_left(0);
        	this.divFAQBoardM00.set_top(165);
        	this.divFAQBoardM00.set_width(null);
        	this.divFAQBoardM00.set_height(null);
        	this.divFAQBoardM00.set_right(0);
        	this.divFAQBoardM00.set_bottom(0)

        	this.divFAQBoardS01.set_left(0);
        	this.divFAQBoardS01.set_top(170);
        	this.divFAQBoardS01.set_width(null);
        	this.divFAQBoardS01.set_height(null);
        	this.divFAQBoardS01.set_right(0);
        	this.divFAQBoardS01.set_bottom(0)

        	this.divFAQBoardS02.set_left(0);
        	this.divFAQBoardS02.set_top(170);
        	this.divFAQBoardS02.set_width(null);
        	this.divFAQBoardS02.set_height(null);
        	this.divFAQBoardS02.set_right(0);
        	this.divFAQBoardS02.set_bottom(0)

        	this.divSearchCmmInfoM00.set_left(0);
        	this.divSearchCmmInfoM00.set_top(170);
        	this.divSearchCmmInfoM00.set_width(null);
        	this.divSearchCmmInfoM00.set_height(null);
        	this.divSearchCmmInfoM00.set_right(0);
        	this.divSearchCmmInfoM00.set_bottom(0)

        	this.divSearchCmmInfoS01.set_left(0);
        	this.divSearchCmmInfoS01.set_top(170);
        	this.divSearchCmmInfoS01.set_width(null);
        	this.divSearchCmmInfoS01.set_height(null);
        	this.divSearchCmmInfoS01.set_right(0);
        	this.divSearchCmmInfoS01.set_bottom(0)
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
        	//trace("[samplePopupSub01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	// 공통코드 조회
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsTypeCd", groupId:"TYPE_CD", headflag:"N" , useYn:"Y"};
        	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	// 전달된 Parameter 개별로 받기 (참고용)
        	try
        	{
        		this.fvPopupUrl  	= this.getOwnerFrame().arguments["cvPopupUrl"];
        		this.fvTitletext  	= this.getOwnerFrame().arguments["cvTitletext"];
        		this.fvCallback  	= this.getOwnerFrame().arguments["cvCallback"];
        		this.fvSrcPopup  	= this.getOwnerFrame().arguments["cvSrcPopup"];
        		this.FvOpenType  	= this.getOwnerFrame().arguments["cvOpenType"];
        		this.fvMnuId  		= this.getOwnerFrame().arguments["cvMnuId"];
        		this.fvModeless  	= this.getOwnerFrame().arguments["cvModeless"];
        	}
        	catch (e)
        	{
        		this.fvPopupUrl  	= this.parent.cvPopupUrl;
        		this.fvTitletext  	= this.parent.cvTitletext;
        		this.fvCallback  	= this.parent.cvCallback;
        		this.fvSrcPopup  	= this.parent.cvSrcPopup;
        		this.FvOpenType  	= this.parent.cvOpenType;
        		this.fvMnuId  		= this.parent.cvMnuId;
        		this.fvModeless  	= this.parent.cvModeless;
        	}

        	trace("[직접폼 모달리스(Modeless) 샘플팝업]=========================================");
        	trace("this.fvPopupUrl:"+this.fvPopupUrl);
        	trace("this.fvTitletext:"+this.fvTitletext);
        	trace("this.fvCallback:"+this.fvCallback);
        	trace("this.fvSrcPopup:"+this.fvSrcPopup);
        	trace("this.FvOpenType:"+this.FvOpenType);
        	trace("this.fvMnuId:"+this.fvMnuId);
        	trace("this.fvModeless:"+this.fvModeless);

        	//1. 2)전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
        	//     gfnShowPopup() 호출시 5번째 인자(objArgs) Argument 에 값을 받음
        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}
        	var bbsGroupMgno = this.gfnGetParameter(objFormFrame, 'bbsGroupMgno');
        	this.divSearchCmmInfoM00.set_url("Biz_Common::SearchCmmInfoM00.xfdl");
        	this.divSearchCmmInfoS01.set_url("Biz_Common::SearchCmmInfoS01.xfdl");
        	this.dsObj.clearData();
        	this.dsObj.addRow();
        	this.dsObj.setColumn(0,'bbsGroupMgno',bbsGroupMgno);

        	this.staTitleNm.set_text(this.gfnGetParameter(objFormFrame, 'cvTitletext'));
        	this.fvTempInfo.bbsGroupMgno = bbsGroupMgno;

        	var bbsSn = this.gfnGetParameter(objFormFrame, 'bbsSn');

        	if(!this.gfnIsNull(bbsSn))
        	{
        		this.fvTempInfo.bbsSn = bbsSn;
        		this.fvTempInfo.bbsGroupMgno = bbsGroupMgno;
        		trace("======bbsSn=========="+bbsSn+"========bbsSn========");
        		if(bbsGroupMgno == 'BS00000010') //공지사항
        		{
        			this.fnNoticeBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000020') //자료실
        		{
        			this.fnDataBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000030') //FAQ
        		{
        			this.fnFAQBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000040') //법령 및 지침
        		{
        			this.fnLNGBoardDtlCall(this.fvTempInfo);
        		}
        	}else
        	{
        		if(bbsGroupMgno == 'BS00000010') //공지사항
        		{
        			this.fnNoticeBoardCall();
        		}else if(bbsGroupMgno == 'BS00000020') //자료실
        		{
        			this.fnDataBoardCall();
        		}else if(bbsGroupMgno == 'BS00000030') //FAQ
        		{
        			this.fnFAQBoardCall();
        		}else if(bbsGroupMgno == 'BS00000040') //법령 및 지침
        		{
        			this.fnLNGBoardCall();
        		}else if(bbsGroupMgno == 'BS00000050') //정보공개
        		{
        			this.fnAgrStiplInfoListCall();
        		}
        	}

        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Popup.js > gfnShowPopup > fnParamInit
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	trace("[samplePopupSub02][fnParamInit] ================");
        	// 전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
        	//     gfnShowPopup() 호출시 5번째 인자(objArgs) Argument 에 값을 받음
        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}
        	var bbsGroupMgno = this.gfnGetParameter(objFormFrame, 'bbsGroupMgno');
        	this.dsObj.clearData();
        	this.dsObj.addRow();
        	this.dsObj.setColumn(0,'bbsGroupMgno',bbsGroupMgno);
        	this.staTitleNm.set_text(this.gfnGetParameter(objFormFrame, 'cvTitletext'));
        	var bbsSn = this.gfnGetParameter(objFormFrame, 'bbsSn');

        	if(!this.gfnIsNull(bbsSn))
        	{
        		this.fvTempInfo.bbsSn = bbsSn;
        		this.fvTempInfo.bbsGroupMgno = bbsGroupMgno;
        		trace("======bbsSn=========="+bbsSn+"========bbsSn========");
        		if(bbsGroupMgno == 'BS00000010') //공지사항
        		{
        			this.fnNoticeBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000020') //자료실
        		{
        			this.fnDataBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000030') //FAQ
        		{
        			this.fnFAQBoardDtlCall(this.fvTempInfo);
        		}else if(bbsGroupMgno == 'BS00000040') //법령 및 지침
        		{
        			this.fnLNGBoardDtlCall(this.fvTempInfo);
        		}
        	}else
        	{
        		if(bbsGroupMgno == 'BS00000010') //공지사항
        		{
        			this.fnNoticeBoardCall();
        		}else if(bbsGroupMgno == 'BS00000020') //자료실
        		{
        			this.fnDataBoardCall();
        		}else if(bbsGroupMgno == 'BS00000030') //FAQ
        		{
        			this.fnFAQBoardCall();
        		}else if(bbsGroupMgno == 'BS00000040') //법령 및 지침
        		{
        			this.fnLNGBoardCall();
        		}else if (bbsGroupMgno == 'BS00000050')
        		{
        			this.fnAgrStiplInfoListCall();
        		}
        	}
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

        /***********************************************************************************
        * 화면로드확인 이벤트
        ***********************************************************************************/

        //공지사항목록
        this.fnNoticeBoardCall = function()
        {
        	if(!this.IsCallNoticeBoardM00) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divNoticeBoardM00.set_url("Biz_Common::NoticeBoardM00.xfdl");
         	}
         	else {

        		this.fnCallNoticeBoardPage();
         	}
        }

        //공지사항상세
        this.fnNoticeBoardDtlCall = function(objArgs)
        {
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;

        	if(!this.IsCallNoticeBoardS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divNoticeBoardS01.set_url("Biz_Common::NoticeBoardS01.xfdl");
         	}
         	else {
        		this.fnCallNoticeBoardDtlPage(this.fvTempInfo);
         	}
        }

        //공지사항등록
        this.fnNoticeBoardRegCall = function(objArgs)
        {

        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.sts = objArgs.sts;

        	if(!this.IsCallNoticeBoardS02) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divNoticeBoardS02.set_url("Biz_Common::NoticeBoardS02.xfdl");
         	}
         	else {

        		this.fnCallNoticeBoardRegPage();
         	}
        }

        //자료실 목록
        this.fnDataBoardCall = function()
        {
        		if(!this.IsCallDataBoardM00) {		// 최초 처음 로딩 필요.
        		this.setWaitCursor(true);
        		this.divDataBoardM00.set_url("Biz_Common::DataBoardM00.xfdl");
        	}
        	else {
        		this.fnCallDataBoardPage();	;
        	}
        }

        //자료실 상세
        this.fnDataBoardDtlCall = function(objArgs)
        {
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;

        	if(!this.IsCallDataBoardS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divDataBoardS01.set_url("Biz_Common::DataBoardS01.xfdl");
         	}
         	else {
        		this.fnCallDataBoardDtlPage(this.fvTempInfo);
         	}
        }

        //자료실 등록
        this.fnDataBoardRegCall = function(objArgs)
        {

        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.sts = objArgs.sts;

        	if(!this.IsCallDataBoardS02) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divDataBoardS02.set_url("Biz_Common::DataBoardS02.xfdl");
         	}
         	else {

        		this.fnCallDataBoardRegPage();
         	}
        }

        //법령과지침 목록
        this.fnLNGBoardCall = function()
        {
        	if(!this.IsCallLNGBoardM00) {		// 최초 처음 로딩 필요.
        		this.setWaitCursor(true);
        		this.divLNGBoardM00.set_url("Biz_Common::LNGBoardM00.xfdl");
        	}
        	else {
        		this.fnCallLNGBoardPage();
        	}
        }

        //법령과지침 상세
        this.fnLNGBoardDtlCall = function(objArgs)
        {
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;

        	if(!this.IsCallLNGBoardS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divLNGBoardS01.set_url("Biz_Common::LNGBoardS01.xfdl");
         	}
         	else {
        		this.fnCallLNGBoardDtlPage(this.fvTempInfo);
         	}
        }

        //법령과지침 등록
        this.fnLNGBoardRegCall = function(objArgs)
        {

        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.sts = objArgs.sts;

        	if(!this.IsCallLNGBoardS02) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divLNGBoardS02.set_url("Biz_Common::LNGBoardS02.xfdl");
         	}
         	else {

        		this.fnCallLNGBoardRegPage();
         	}
        }

        //FAQ 목록
        this.fnFAQBoardCall = function()
        {
        	if(!this.IsCallFAQBoardM00) {		// 최초 처음 로딩 필요.
        		this.setWaitCursor(true);
        		this.divFAQBoardM00.set_url("Biz_Common::FAQBoardM00.xfdl");
        	}
        	else {
        		this.fnCallFAQBoardPage();
        	}
        }

        //FAQ 상세
        this.fnFAQBoardDtlCall = function(objArgs)
        {
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;

        	if(!this.IsCallFAQBoardS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divFAQBoardS01.set_url("Biz_Common::FAQBoardS01.xfdl");
         	}
         	else {
        		this.fnCallFAQBoardDtlPage(this.fvTempInfo);
         	}
        }

        //FAQ 등록
        this.fnFAQBoardRegCall = function(objArgs)
        {

        	this.fvTempInfo.bbsGroupMgno = objArgs.bbsGroupMgno;
        	this.fvTempInfo.bbsSn = objArgs.bbsSn;
        	this.fvTempInfo.sts = objArgs.sts;

        	if(!this.IsCallFAQBoardS02) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divFAQBoardS02.set_url("Biz_Common::FAQBoardS02.xfdl");
         	}
         	else {

        		this.fnCallFAQBoardRegPage();
         	}
        }

        //정보공개 협정약정 목록
        this.fnAgrStiplInfoListCall = function(objArgs)
        {
        	if(!this.IsCallAgrStiplInfoM00) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divAgrStiplInfoM00.set_url("Biz_Common::AgrStiplCmmInfoM00.xfdl");
         	}
         	else {

        		this.fnCallAgrStiplInfoListPage();
         	}
        }

        //정보공개 협정약정 상세
        this.fnAgrStiplInfoDtlCall = function(objArgs)
        {
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.cncldMgno))
        		{
        			this.fvTempInfo.cncldMgno = objArgs.cncldMgno;
        		}
        		if(!this.gfnIsNull(objArgs.cncldDgr))
        		{
        			this.fvTempInfo.cncldDgr = objArgs.cncldDgr;
        		}
        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvTempInfo.prePage = objArgs.prePage;
        		}
        	}
        	if(!this.IsCallAgrStiplInfoS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divAgrStiplInfoS01.set_url("Biz_Common::AgrStiplCmmInfoS01.xfdl");
         	}
         	else {

        		this.fnCallAgrStiplInfoDtlPage();
         	}
        }

        //정보공개 방법론 목록
        this.fnMhdlgInfoListCall = function(objArgs)
        {
        	if(!this.IsCallMhdlgInfoM00) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divMhdlgInfoM00.set_url("Biz_Common::MhdlgCmmInfoM00.xfdl");
         	}
         	else {

        		this.fnCallMhdlgInfoListPage();
         	}
        }

        //정보공개 방법론 상세
        this.fnMhdlgInfoDtlCall = function(objArgs)
        {
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.mhdlgMgno))
        		{
        			this.fvTempInfo.mhdlgMgno = objArgs.mhdlgMgno;
        		}
        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvTempInfo.prePage = objArgs.prePage;
        		}

        	}
        	if(!this.IsCallMhdlgInfoS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divMhdlgInfoS01.set_url("Biz_Common::MhdlgCmmInfoS01.xfdl");
         	}
         	else {

        		this.fnCallMhdlgInfoDtlPage();
         	}
        }

        //정보공개 국제감축사업 목록
        this.fnIrbInfoListCall = function(objArgs)
        {
        	if(!this.IsCallIrbInfoM00) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divIrbInfoM00.set_url("Biz_Common::IrbCmmInfoM00.xfdl");
         	}
         	else {

        		this.fnCallIrbInfoListPage();
         	}
        }

        //정보공개 국제감축사업 상세
        this.fnIrbInfoDtlCall = function(objArgs)
        {
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.bizMgno))
        		{
        			this.fvTempInfo.bizMgno = objArgs.bizMgno;
        		}
        		if(!this.gfnIsNull(objArgs.vldBizDgr))
        		{
        			this.fvTempInfo.vldBizDgr = objArgs.vldBizDgr;
        		}
        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvTempInfo.prePage = objArgs.prePage;
        		}

        	}
        	if(!this.IsCallIrbInfoS01) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divIrbInfoS01.set_url("Biz_Common::IrbCmmInfoS01.xfdl");
         	}
         	else {

        		this.fnCallIrbInfoDtlPage();
         	}
        }
        /***********************************************************************************
        * 화면로드확인 이벤트
        ***********************************************************************************/

        /***********************************************************************************
        * 화면전환 이벤트
        ***********************************************************************************/

        //공지사항 목록
        this.fnCallNoticeBoardPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divNoticeBoardM00");

        	this.divNoticeBoardM00.form.fnChangeDiv(objArgs);

        }

        //공지사항 상세
        this.fnCallNoticeBoardDtlPage = function()
        {
        	var objArgs = {};

        	objArgs.bbsSn = this.fvTempInfo.bbsSn;
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;

        	this.divShowAndHide("divNoticeBoardS01");

        	this.divNoticeBoardS01.form.fnChangeDiv(objArgs);

        }

        //공지사항 등록
        this.fnCallNoticeBoardRegPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;
        	objArgs.sts = this.fvTempInfo.sts;
        	objArgs.bbsSn = this.fvTempInfo.bbsSn;

        	this.divShowAndHide("divNoticeBoardS02");

        	this.divNoticeBoardS02.form.fnChangeDiv(objArgs);

        }

        //자료실 목록
        this.fnCallDataBoardPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divDataBoardM00");

        	this.divDataBoardM00.form.fnChangeDiv(objArgs);
        }

        //자료실 상세
        this.fnCallDataBoardDtlPage = function()
        {
        	var objArgs = {};

        	objArgs.bbsSn = this.fvTempInfo.bbsSn;
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;

        	this.divShowAndHide("divDataBoardS01");

        	this.divDataBoardS01.form.fnChangeDiv(objArgs);

        }

        //자료실 등록
        this.fnCallDataBoardRegPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;
        	objArgs.sts = this.fvTempInfo.sts;
        	objArgs.bbsSn = this.fvTempInfo.bbsSn;

        	this.divShowAndHide("divDataBoardS02");

        	this.divDataBoardS02.form.fnChangeDiv(objArgs);

        }

        //법령과지침 목록
        this.fnCallLNGBoardPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divLNGBoardM00");

        	this.divLNGBoardM00.form.fnChangeDiv(objArgs);
        }

        //법령과지침 상세
        this.fnCallLNGBoardDtlPage = function()
        {
        	var objArgs = {};

        	objArgs.bbsSn = this.fvTempInfo.bbsSn;
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;

        	this.divShowAndHide("divLNGBoardS01");

        	this.divLNGBoardS01.form.fnChangeDiv(objArgs);

        }

        //법령과지침 등록
        this.fnCallLNGBoardRegPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;
        	objArgs.sts = this.fvTempInfo.sts;
        	objArgs.bbsSn = this.fvTempInfo.bbsSn;

        	this.divShowAndHide("divLNGBoardS02");

        	this.divLNGBoardS02.form.fnChangeDiv(objArgs);

        }

        //FAQ 목록
        this.fnCallFAQBoardPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divFAQBoardM00");

        	this.divFAQBoardM00.form.fnChangeDiv(objArgs);
        }

        //FAQ 상세
        this.fnCallFAQBoardDtlPage = function()
        {
        	var objArgs = {};

        	objArgs.bbsSn = this.fvTempInfo.bbsSn;
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;

        	this.divShowAndHide("divFAQBoardS01");

        	this.divFAQBoardS01.form.fnChangeDiv(objArgs);

        }

        //FAQ 등록
        this.fnCallFAQBoardRegPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.fvTempInfo.bbsGroupMgno;
        	objArgs.sts = this.fvTempInfo.sts;
        	objArgs.bbsSn = this.fvTempInfo.bbsSn;

        	this.divShowAndHide("divFAQBoardS02");

        	this.divFAQBoardS02.form.fnChangeDiv(objArgs);
        }

        //정보공개 협정약정 목록
        this.fnCallAgrStiplInfoListPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divAgrStiplInfoM00");

        	this.divAgrStiplInfoM00.form.fnChangeDiv(objArgs);

        }

        //정보공개 협정약정 상세
        this.fnCallAgrStiplInfoDtlPage = function()
        {
        	var objArgs = {};

        	if(!this.gfnIsNull(this.fvTempInfo.cncldMgno))
        	{
        		objArgs.cncldMgno = this.fvTempInfo.cncldMgno;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.cncldDgr))
        	{
        		objArgs.cncldDgr = this.fvTempInfo.cncldDgr;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.prePage))
        	{
        		objArgs.prePage = this.fvTempInfo.prePage;
        	}

        	this.fvTempInfo = {}; // 초기화

        	this.divShowAndHide("divAgrStiplInfoS01");

        	this.divAgrStiplInfoS01.form.fnChangeDiv(objArgs);

        }

        //정보공개 방법론 목록
        this.fnCallMhdlgInfoListPage = function()
        {
        	var objArgs = {};
        	objArgs.bbsGroupMgno = this.dsObj.getColumn(0,'bbsGroupMgno');

        	this.divShowAndHide("divMhdlgInfoM00");

        	this.divMhdlgInfoM00.form.fnChangeDiv(objArgs);

        }

        //정보공개 방법론 상세
        this.fnCallMhdlgInfoDtlPage = function()
        {
        	var objArgs = {};

        	if(!this.gfnIsNull(this.fvTempInfo))
        	{
        		if(!this.gfnIsNull(this.fvTempInfo.mhdlgMgno))
        		{
        			objArgs.mhdlgMgno = this.fvTempInfo.mhdlgMgno;
        		}

        		if(!this.gfnIsNull(this.fvTempInfo.prePage))
        		{
        			objArgs.prePage = this.fvTempInfo.prePage;
        		}
        	}
        	this.fvTempInfo = {};

        	this.divShowAndHide("divMhdlgInfoS01");

        	this.divMhdlgInfoS01.form.fnChangeDiv(objArgs);

        }

        //정보공개 국제감축사업 목록
        this.fnCallIrbInfoListPage = function()
        {
        	var objArgs = {};


        	this.divShowAndHide("divIrbInfoM00");

        	this.divIrbInfoM00.form.fnChangeDiv(objArgs);

        }

        //정보공개 국제감축사업 상세
        this.fnCallIrbInfoDtlPage = function()
        {
        	var objArgs = {};
        	if(!this.gfnIsNull(this.fvTempInfo))
        	{
        		if(!this.gfnIsNull(this.fvTempInfo.bizMgno))
        		{
        			objArgs.bizMgno = this.fvTempInfo.bizMgno;
        		}
        		if(!this.gfnIsNull(this.fvTempInfo.vldBizDgr))
        		{
        			objArgs.vldBizDgr = this.fvTempInfo.vldBizDgr;
        		}

        		if(!this.gfnIsNull(this.fvTempInfo.prePage))
        		{
        			objArgs.prePage = this.fvTempInfo.prePage;
        		}
        	}

        	this.divShowAndHide("divIrbInfoS01");

        	this.divIrbInfoS01.form.fnChangeDiv(objArgs);

        }

        /***********************************************************************************
        * 화면전환 이벤트
        ***********************************************************************************/

        //검색영역 표출 여부
        this.fnSearchAreaCtrl = function(flag)
        {
        	if(flag)
        	{
        		this.edtSearch.set_visible(flag);
        		this.btnSearch.set_visible(flag);
        	}else
        	{
        		this.edtSearch.set_visible(false);
        		this.btnSearch.set_visible(false);
        	}
        }

        //화면이 로드 여부 확인
        this.fnLoadComplete = function(pageInfo)
        {
        	trace("===================== fnLoadComplete 수신완료!!!");
        	this.setWaitCursor(false);
        	if(pageInfo == 'DataBoardM00')
        	{
        		this.IsCallDataBoardM00 = true;
        		this.fnCallDataBoardPage();
        	}else if (pageInfo == 'DataBoardS01')
        	{
        		this.IsCallDataBoardS01 = true;
        		this.fnCallDataBoardDtlPage();
        	}else if (pageInfo == 'DataBoardS02')
        	{
        		this.IsCallDataBoardS02 = true;
        		this.fnCallDataBoardRegPage();
        	}else if (pageInfo == 'FAQBoardM00')
        	{
        		this.IsCallFAQBoardM00 = true;
        		this.fnCallFAQBoardPage();
        	}else if(pageInfo == 'FAQBoardS01')
        	{
        		this.IsCallFAQBoardS01 = true;
        		this.fnCallFAQBoardDtlPage();
        	}else if(pageInfo == 'FAQBoardS02')
        	{
        		this.IsCallFAQBoardS02 = true;
        		this.fnCallFAQBoardRegPage();
        	}else if(pageInfo == 'LNGBoardM00')
        	{
        		this.IsCallLNGBoardM00 = true;
        		this.fnCallLNGBoardPage();
        	}else if(pageInfo == 'LNGBoardS01')
        	{
        		this.IsCallLNGBoardS01 = true;
        		this.fnCallLNGBoardDtlPage();
        	}else if(pageInfo == 'LNGBoardS02')
        	{
        		this.IsCallLNGBoardS02 = true;
        		this.fnCallLNGBoardRegPage();
        	}else if(pageInfo == 'NoticeBoardM00')
        	{
        		this.IsCallNoticeBoardM00 = true;
        		this.fnCallNoticeBoardPage();
        	}else if(pageInfo == 'NoticeBoardS01')
        	{
        		this.IsCallNoticeBoardS01 = true;
        		this.fnCallNoticeBoardDtlPage();
        	}else if(pageInfo == 'NoticeBoardS02')
        	{
        		this.IsCallNoticeBoardS02 = true;
        		this.fnCallNoticeBoardRegPage();
        	}else if (pageInfo == 'AgrStiplInfoM00')
        	{
        		this.IsCallAgrStiplInfoM00 = true;
        		this.fnCallAgrStiplInfoListPage();
        	}else if (pageInfo == 'AgrStiplInfoS01')
        	{
        		this.IsCallAgrStiplInfoS01 = true;
        		this.fnCallAgrStiplInfoDtlPage();
        	}else if (pageInfo == 'MhdlgInfoM00')
        	{
        		this.IsCallMhdlgInfoM00 = true;
        		this.fnCallMhdlgInfoListPage();
        	}else if (pageInfo == 'MhdlgInfoS01')
        	{
        		this.IsCallMhdlgInfoS01 = true;
        		this.fnCallMhdlgInfoDtlPage();
        	}else if (pageInfo == 'IrbInfoM00')
        	{
        		this.IsCallIrbInfoM00 = true;
        		this.fnCallIrbInfoListPage();
        	}else if (pageInfo == 'IrbInfoS01')
        	{
        		this.IsCallIrbInfoS01 = true;
        		this.fnCallIrbInfoDtlPage();
        	}
        };

        //div visible 컨트롤
        this.divShowAndHide = function(flag)
        {

        		this.divNoticeBoardM00.set_visible(false);
        		this.divNoticeBoardS01.set_visible(false);
        		this.divNoticeBoardS02.set_visible(false);
        		this.divDataBoardM00.set_visible(false);
        		this.divDataBoardS01.set_visible(false);
        		this.divDataBoardS02.set_visible(false);
        		this.divLNGBoardM00.set_visible(false);
        		this.divLNGBoardS01.set_visible(false);
        		this.divLNGBoardS02.set_visible(false);
        		this.divFAQBoardM00.set_visible(false);
        		this.divFAQBoardS01.set_visible(false);
        		this.divFAQBoardS02.set_visible(false);
        		this.divAgrStiplInfoM00.set_visible(false);
        		this.divAgrStiplInfoS01.set_visible(false);
        		this.divIrbInfoM00.set_visible(false);
        		this.divIrbInfoS01.set_visible(false);
        		this.divMhdlgInfoM00.set_visible(false);
        		this.divMhdlgInfoS01.set_visible(false);
        		this.divSearchCmmInfoM00.set_visible(false);
        		this.divSearchCmmInfoS01.set_visible(false);

        	if(flag == "divNoticeBoardM00")
        	{
        		this.divNoticeBoardM00.set_visible(true);
        	}else if(flag == "divNoticeBoardS01")
        	{
        		this.divNoticeBoardS01.set_visible(true);
        	}else if(flag == "divNoticeBoardS02")
        	{
        		this.divNoticeBoardS02.set_visible(true);
        	}else if(flag == "divDataBoardM00")
        	{
        		this.divDataBoardM00.set_visible(true);
        	}else if(flag == "divDataBoardS01")
        	{
        		this.divDataBoardS01.set_visible(true);
        	}else if(flag == "divDataBoardS02")
        	{
        		this.divDataBoardS02.set_visible(true);
        	}else if(flag == "divLNGBoardM00")
        	{
        		this.divLNGBoardM00.set_visible(true);
        	}else if(flag == "divLNGBoardS01")
        	{
        		this.divLNGBoardS01.set_visible(true);
        	}else if(flag == "divLNGBoardS02")
        	{
        		this.divLNGBoardS02.set_visible(true);
        	}else if(flag == "divFAQBoardM00")
        	{
        		this.divFAQBoardM00.set_visible(true);
        	}else if(flag == "divFAQBoardS01")
        	{
        		this.divFAQBoardS01.set_visible(true);
        	}else if(flag == "divFAQBoardS02")
        	{
        		this.divFAQBoardS02.set_visible(true);
        	}else if(flag == "divAgrStiplInfoM00")
        	{
        		this.divAgrStiplInfoM00.set_visible(true);
        	}else if(flag == "divAgrStiplInfoS01")
        	{
        		this.divAgrStiplInfoS01.set_visible(true);
        	}else if(flag == "divIrbInfoM00")
        	{
        		this.divIrbInfoM00.set_visible(true);
        	}else if(flag == "divIrbInfoS01")
        	{
        		this.divIrbInfoS01.set_visible(true);
        	}else if(flag == "divMhdlgInfoM00")
        	{
        		this.divMhdlgInfoM00.set_visible(true);
        	}else if(flag == "divMhdlgInfoS01")
        	{
        		this.divMhdlgInfoS01.set_visible(true);
        	}else if(flag == "divSearchCmmInfoM00")
        	{
        		this.divSearchCmmInfoM00.set_visible(true);
        	}else if(flag == "divSearchCmmInfoS01")
        	{
        		this.divSearchCmmInfoS01.set_visible(true);
        	}
        }

        this.fnSearchAreaBtnCtrl = function(objArgs)
        {
        	this.divShowAndHide("divSearchCmmInfoS01");

        	this.divSearchCmmInfoS01.form.fnChangeDiv(objArgs);
        }


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        //공지사항 클릭이벤트
        this.divTop_btnNoticeBoard_onclick = function(obj,e)
        {
        	this.dsObj.setColumn(0,'bbsGroupMgno','BS00000010');
        	this.staTitleNm.set_text("공지사항");
        	this.fnNoticeBoardCall();
        };
        //자료실 클릭이벤트
        this.divTop_btnDataBoard_onclick = function(obj,e)
        {
        	this.dsObj.setColumn(0,'bbsGroupMgno','BS00000020');
        	this.staTitleNm.set_text("자료실");
        	this.fnDataBoardCall();
        };
        //법령과지침 클릭이벤트
        this.divTop_btnLNGBoard_onclick = function(obj,e)
        {
        	this.dsObj.setColumn(0,'bbsGroupMgno','BS00000040');
        	this.staTitleNm.set_text("법령과 지침");
        	this.fnLNGBoardCall();
        };
        //FAQ 클릭이벤트
        this.divTop_btnFAQBoard_onclick = function(obj,e)
        {
        	this.dsObj.setColumn(0,'bbsGroupMgno','BS00000030');
        	this.staTitleNm.set_text("FAQ");
        	this.fnFAQBoardCall();
        };

        //정보공개 클릭이벤트
        this.divTop_btnInfo_onclick = function(obj,e)
        {
        	this.staTitleNm.set_text("정보공개");
        	this.fnAgrStiplInfoListCall();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var edtSearch =  this.edtSearch.text;
        	if(!this.gfnIsNull(edtSearch))
        	{
        		var objArgs = {};
        		objArgs.search = edtSearch;
        		this.staTitleNm.set_text("통합검색");

        		this.divShowAndHide("divSearchCmmInfoM00");

        		this.divSearchCmmInfoM00.form.fnChangeDiv(objArgs);

        	}
        };

        this.edtSearch_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.visible)
        	{
        		this.btnSearch_onclick();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTop.form.btnInfo.addEventHandler("onclick",this.divTop_btnInfo_onclick,this);
            this.divTop.form.btnFAQBoard.addEventHandler("onclick",this.divTop_btnFAQBoard_onclick,this);
            this.divTop.form.btnLNGBoard.addEventHandler("onclick",this.divTop_btnLNGBoard_onclick,this);
            this.divTop.form.btnDataBoard.addEventHandler("onclick",this.divTop_btnDataBoard_onclick,this);
            this.divTop.form.btnNoticeBoard.addEventHandler("onclick",this.divTop_btnNoticeBoard_onclick,this);
            this.edtSearch.addEventHandler("onkeydown",this.edtSearch_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("BoardM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
