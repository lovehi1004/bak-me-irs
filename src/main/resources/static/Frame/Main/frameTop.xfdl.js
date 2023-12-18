(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_titletext("frameTop");
            this.set_background("url(\'theme://images/tnb_bg.jpg\') no-repeat right top #f9f9ff");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,45);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnInformation",null,"11","81","22","13",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btnFAQBoard",null,"11","52","22","btnInformation:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnLNGBoard",null,"11","100","22","btnFAQBoard:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDataBoard",null,"11","67","22","btnLNGBoard:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자료실");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnNoticeBoard",null,"11","81","22","btnDataBoard:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"0","30","45","btnNoticeBoard:19",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("btnUserInfo",null,"0","30","45","btnLogout:24",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_User");
            this.addChild(obj.name, obj);

            obj = new Static("staFlnm",null,"11","65","22","btnUserInfo:20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_TF_User");
            obj.set_textAlign("left");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("staBzentNm",null,"11","50","22","staFlnm:8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("환경부");
            obj.set_cssclass("sta_TF_User02");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvTooltip","1393","45","90","39",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("staTooltip","0","4","90","35",null,null,null,null,null,null,this.pdvTooltip.form);
            obj.set_taborder("0");
            obj.set_text("정보수정");
            obj.set_cssclass("sta_WF_Tooltip");
            this.pdvTooltip.addChild(obj.name, obj);

            obj = new Static("staUserClCdNm",null,"11","50","22","staBzentNm:20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("권한");
            obj.set_cssclass("sta_TF_User");
            obj.set_textAlign("right");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvTooltip.form
            obj = new Layout("default","",0,0,this.pdvTooltip.form,function(p){});
            this.pdvTooltip.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,45,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameTop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameTop Form
        * FILE NAME     : frameTop.xfdl
        * DESCRIPTION   : frameTop
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.xx    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/


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
        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

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
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "logout" :
        			// 후처리 코드
        			var sSysNaviName = system.navigatorname.toUpperCase();
        			if(sSysNaviName.indexOf("NEXACRO") > -1)
        			{
        				this.fvApp.exit();
        			}
        			else
        			{
        				nexacro.setPrivateProfile("AccessToken", "");
        				nexacro.setPrivateProfile("RefreshToken", "");
        				window.top.location.reload(true);
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
         * @desc 로그인 이후 초기화 처리
         * @param N/A
         * @return N/A
        */
        this.fnLoginAfter = function()
        {
        	trace("[frameTop]fnLoginAfter =====================");
        	var userClCdNm = this.fvApp.gdsUserInfo.getColumn(0, "userClCdNm");
        	var userClCd = this.fvApp.User.userClCd;
        	var bzentNm = this.fvApp.User.bzentNm;
        	var flnm = this.fvApp.User.flnm;
        	flnm += "님";														//뒤에 님 붙이기

        	/*
        		- [red]
        			UCC0001	전체관리자
        		- [SeaGreen #2E8B57] 진녹색
        			UCC0002	관장기관
        			UCC0003	위탁기관
        		- [blue]
        			UCC0004	계정관리인
        			UCC0005	계정대표자
        		- [MediumVioletRed #C71585] 자주색
        			UCC0006	외교부
        			UCC0007	기타부처
        		- [black]
        			비승인사용자
        			비승인위탁기관
        	*/
        	if(this.fvApp.User.roleIdMgno == "RL00000008" || this.fvApp.User.roleIdMgno == "RL00000011") {
        		this.staUserClCdNm.set_color("black");
        	} else {
        		if(userClCd == "UCC0001") {
        			this.staUserClCdNm.set_color("red");
        		} else if(userClCd == "UCC0002" || userClCd == "UCC0003") {
        			this.staUserClCdNm.set_color("SeaGreen");
        		} else if(userClCd == "UCC0004" || userClCd == "UCC0005") {
        			this.staUserClCdNm.set_color("blue");
        		} else if(userClCd == "UCC0006" || userClCd == "UCC0007") {
        			this.staUserClCdNm.set_color("MediumVioletRed");
        		} else {
        			this.staUserClCdNm.set_color("black");
        		}
        	}

        	this.staUserClCdNm.set_text(userClCdNm);			// 사용자구분코드명
        	this.staBzentNm.set_text(bzentNm);				// 사업체명
        	this.staFlnm.set_text(flnm);					// 성명

        	// static 사이즈 조정 - fittocontents 적용시 한글 2,3,10글자 일때 끝에 한글자씩 짤립 방지
        	var objSize1 = nexacro.getTextSize( userClCdNm, '700 16px NotoSansKR' );
        	this.staUserClCdNm.set_width(objSize1.nx + 10);
        	var objSize2 = nexacro.getTextSize( bzentNm, '400 14px/26px NotoSansKR' );
        	this.staBzentNm.set_width(objSize2.nx + 10);
        	this.staBzentNm.set_textAlign("center");			//textAlign 이 left 면 우측마지막 글자 짤림
        	var objSize3 = nexacro.getTextSize( flnm, '700 16px NotoSansKR' );
        	this.staFlnm.set_width(objSize3.nx + 10);

        	// trace("[objSize1]["+objSize1.nx+"][objSize2]["+objSize2.nx+"][objSize3]["+objSize3.nx+"]");

        };

        /**
         * @desc 로그아웃
         * @param N/A
         * @return N/A
        */
        this.fnLogout = function()
        {
        	//로그아웃 실행
        	var objArgs = {};
        		objArgs.svcId    = "logout";
        		objArgs.url 	 = "/logout";
        		objArgs.inds     = "";
        		objArgs.outds    = "";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 팝업처리
         * @param N/A
         * @return N/A
        */
        this.fnShowPopup = function(sPopupId, sPopupUrl, objArgs, oOption)
        {
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        /**
         * @description 버튼 tooltip 보이기 스크립트 처리
        */
        this.btnTooltip_onmouseenter = function(obj,e)
        {
        	var nXPos;
        	var nYPos;
        	var nWidth;
        	var nHeight;
        	var sMenuTooltip;

        	if(obj.id == "btnUserInfo")
        	{
        		sMenuTooltip = "정보수정";
        	}
        	else if(obj.id == "btnLogout")
        	{
        		sMenuTooltip = "로그아웃";
        	}

        	if(this.pdvTooltip.isPopup())
        	{
        		if(e.fromobject != obj)
        		{
        			this.pdvTooltip.closePopup();
        			this.pdvTooltip.form.staTooltip.set_text(sMenuTooltip);
        			this.pdvTooltip.form.staTooltip.set_fittocontents("width");
        			nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth() + 32;
        			this.pdvTooltip.form.staTooltip.set_fittocontents("none");
        			this.pdvTooltip.form.staTooltip.set_width(nWidth);
        			this.pdvTooltip.form.resetScroll();

        			// nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth();
        			nHeight = this.pdvTooltip.form.staTooltip.getOffsetHeight()+this.pdvTooltip.form.staTooltip.getOffsetTop();

        			nXPos = (obj.getOffsetWidth()/2) - (nWidth/2);
        			// nYPos = obj.getOffsetTop()+obj.getOffsetHeight();
        			nYPos = obj.getOffsetHeight();
        			this.pdvTooltip.trackPopupByComponent(obj, nXPos, nYPos, nWidth, nHeight, "", false);
        		}
        	}
        	else
        	{
        		this.pdvTooltip.form.staTooltip.set_text(sMenuTooltip);
        		this.pdvTooltip.form.staTooltip.set_fittocontents("width");
        		nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth() + 32;
        		this.pdvTooltip.form.staTooltip.set_fittocontents("none");
        		this.pdvTooltip.form.staTooltip.set_width(nWidth);
        		this.pdvTooltip.form.resetScroll();

        		// nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth();
        		nHeight = this.pdvTooltip.form.staTooltip.getOffsetHeight()+this.pdvTooltip.form.staTooltip.getOffsetTop();

        		nXPos = (obj.getOffsetWidth()/2) - (nWidth/2);
        		// nYPos = obj.getOffsetTop()+obj.getOffsetHeight();
        		nYPos = obj.getOffsetHeight();
        		this.pdvTooltip.trackPopupByComponent(obj, nXPos, nYPos, nWidth, nHeight, "", false);
        	}

        	/*
        	nXPos = 0;// obj.getOffsetWidth()+5;
        	nYPos = nexacro.toNumber(obj.getOffsetTop()+60);//nexacro.toNumber(obj.getOffsetTop()+obj.getOffsetHeight()/2);
        	this.divTooltip.set_left(nXPos);
        	this.divTooltip.set_top(nYPos);
        	nMenuNo = obj.id.replace("btnMenu","");
        	nMenuNo = nexacro.toNumber(nMenuNo,1);
        	sMenuTooltip = this.fvTopMnuTooltip[nMenuNo-1];
        	this.divTooltip.form.staTooltip.set_text(sMenuTooltip);
        	this.divTooltip.form.resetScroll();
        	this.divTooltip.set_visible(true);
        	*/
        };

        /**
         * @description 버튼 tooltip 숨기기 스크립트 처리
        */
        this.btnTooltip_onmouseleave = function(obj,e)
        {
        	this.pdvTooltip.closePopup();
        	// this.divTooltip.set_visible(false);
        };

        /**
         * @description 로그아웃
        */
        this.btnLogout_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, ["confirm","시스템을 종료하시겠습니까?"], "", function(svcid, variant) {
        		// gfnShowMessage() 실행된 후 바로 처리되는 콜백함수 임
        		// 확인 또는 닫기 후 다음 처리될 로직을 정의 한다.
        		if(variant == "OK")
        		{
        			// 로그아웃 서비스 호출
        			this.fnLogout();
        		}
        		else
        		{

        		}
        	});
        };

        /**
         * @description "공지사항" 클릭시
        */
        this.btnNoticeBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000010'};
        	var oOption		= {showtitlebar:true,titletext:"공지사항", modal:false, resizable:true};
        	this.fnShowPopup(sPopupId, sPopupUrl, objArgs, oOption);
        };

        /**
         * @description "자료실" 클릭시
        */
        this.btnDataBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000020'};
        	var oOption		= {showtitlebar:true,titletext:"자료실", modal:false, resizable:true};
        	this.fnShowPopup(sPopupId, sPopupUrl, objArgs, oOption);
        };

        /**
         * @description "법령과지침" 클릭시
        */
        this.btnLNGBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000040'};
        	var oOption		= {showtitlebar:true,titletext:"법령과지침", modal:false, resizable:true};
        	this.fnShowPopup(sPopupId, sPopupUrl, objArgs, oOption);
        };

        /**
         * @description "FAQ" 클릭시
        */
        this.btnFAQBoard_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000030'};
        	var oOption		= {showtitlebar:true,titletext:"FAQ", modal:false, resizable:true};
        	this.fnShowPopup(sPopupId, sPopupUrl, objArgs, oOption);
        };

        /**
         * @description "정보공개" 클릭시
        */
        this.btnInformation_onclick = function(obj,e)
        {

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnInformation.addEventHandler("onclick",this.btnInformation_onclick,this);
            this.btnFAQBoard.addEventHandler("onclick",this.btnFAQBoard_onclick,this);
            this.btnLNGBoard.addEventHandler("onclick",this.btnLNGBoard_onclick,this);
            this.btnDataBoard.addEventHandler("onclick",this.btnDataBoard_onclick,this);
            this.btnNoticeBoard.addEventHandler("onclick",this.btnNoticeBoard_onclick,this);
            this.btnLogout.addEventHandler("onmouseenter",this.btnTooltip_onmouseenter,this);
            this.btnLogout.addEventHandler("onmouseleave",this.btnTooltip_onmouseleave,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.btnUserInfo.addEventHandler("onmouseleave",this.btnTooltip_onmouseleave,this);
            this.btnUserInfo.addEventHandler("onmouseenter",this.btnTooltip_onmouseenter,this);
            this.staUserClCdNm.addEventHandler("onclick",this.staUserClCdNm_onclick,this);
        };
        this.loadIncludeScript("frameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
