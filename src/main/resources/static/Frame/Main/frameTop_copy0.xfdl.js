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

            obj = new Static("Static01_00",null,"11","70","22","530",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_TF_User");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUserInfo",null,"0","30","45","467",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_User");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"0","30","45","413",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"11","81","22","13",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"11","52","22","Button00_00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"11","100","22","Button00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"11","67","22","Button00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자료실");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"11","81","22","Button00_00_01:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"11","50","22","Static01_00:8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("환경부");
            obj.set_cssclass("sta_TF_User02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvTooltip","1393","45","90","39",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("staTooltip","0","4","90","35",null,null,null,null,null,null,this.pdvTooltip.form);
            obj.set_taborder("0");
            obj.set_text("정보수정");
            obj.set_cssclass("sta_WF_Tooltip");
            this.pdvTooltip.addChild(obj.name, obj);
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
        this.registerScript("frameTop_copy0.xfdl", function() {
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
        			} else
        			{
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
        			nYPos = obj.getOffsetTop()+obj.getOffsetHeight();
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
        		nYPos = obj.getOffsetTop()+obj.getOffsetHeight();
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
        this.Button00_01_onclick = function(obj,e)
        {
        	/**
         * @description 모달리스(Modeless) 팝업 오픈
        */
        this.btnModeless01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	var sPopupId = "popModelsssP01";
        	var sMnuId = "Biz\Common\BoardM00.xfdl";		// "Develop_Sample::samplePopupSub02.xfdl";
        	alert("");
        	trace("----------------------확인용----------------------");
        	// 팝업창의 넓이/높이는 필수사항 (프레임의 중앙에 보여줌)
        	var oPosition	= {width:700,height:582};

        	// cvOpenType : PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        	var objArgs		= {pvNm:this.edtName.value, pvDataset: this.dsList};		// 파라메타 전달

        	// 팝업창 옵션 {callback:"fnPopupCallback",titletext:sMnuNm, modal:true, autosize:false, showtitlebar:true, resizable:true}
        	//               callback 은 설정하지 않으면 default 값 fnPopupCallback() 함수로 callback
        	// oOption :  modal:false (modal 값 default 는 true 로 미지정시 modal 로 열리게 된다)
        	var oOption		= {callback:"fnPopupCallback",titletext:"직접폼 모달리스(Modeless) 샘플팝업", modal:false, resizable:true};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnUserInfo.addEventHandler("onmouseleave",this.btnTooltip_onmouseleave,this);
            this.btnUserInfo.addEventHandler("onmouseenter",this.btnTooltip_onmouseenter,this);
            this.btnLogout.addEventHandler("onmouseenter",this.btnTooltip_onmouseenter,this);
            this.btnLogout.addEventHandler("onmouseleave",this.btnTooltip_onmouseleave,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
        };
        this.loadIncludeScript("frameTop_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
