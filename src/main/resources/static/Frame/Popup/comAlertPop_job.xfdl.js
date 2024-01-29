(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comAlertPop");
            this.set_titletext("comAlertPop");
            this.set_cssclass("alert_bg");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_Pop_FormBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleBar","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staMessage","15","35","270","79",null,null,"270","500","79","400",this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Alert_Data");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"staMessage:10","60","30","110",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnDetail",null,"staMessage:10","92","30","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상세보기");
            obj.set_cssclass("btn_Pop_AlertDetailShow");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDetail","0","btnOk:15","300","217",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_dragscrolltype("none");
            obj.set_cssclass("txt_Alert_DetailMes");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide02","0","20","15",null,null,"11",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide01","15","20","270","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide04","15","154","270","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide03",null,"20","15",null,"0","66",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","0","0","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide
            obj = new Layout("default","",0,0,this.divGuide.form,function(p){});
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comAlertPop_job.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comAlertPop Form
        * FILE NAME     : comAlertPop.xfdl
        * DESCRIPTION   : 공통 alert Popup
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.24    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvDetailShowFlag = false;							// [상세보기]버튼 숨김/보이기
        this.fvFormHeight;
        this.fvErrTitlebarCssclass = "sta_POP_ErrorTitleBg";	// staTitleBar , 일반 sta_POP_TitleBg , 경고/에러메시지의 경우 sta_POP_ErrorTitleBg

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// TODO
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
        	var sMessage = this.parent["MESSAGE"];
        	var sDetailMessage =  this.parent["DETAIL_MESSAGE"];
        	var sMsgType = this.parent["MESSAGE_TYPE"];		// sMsgType [ I, S, E, W ]

        sMessage = "가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7가나다라마1가나다라마2가나다라마3가나다라마4가나다라마5가나다라마6가나다라마7";

        // 	if (sMsgType=="I") {
        // 		this.staNotice.set_cssclass("sta_Alert_information");
        // 	}else if (sMsgType=="E") {
        // 		this.staNotice.set_cssclass("sta_Alert_error");
        // 	}else if (sMsgType=="W") {
        // 		this.staNotice.set_cssclass("sta_Alert_warning");
        // 	}
        	if(sMsgType != "I")
        	{
        		this.staTitleBar.set_cssclass(this.fvErrTitlebarCssclass);
        	}

        	sMessage = nexacro.replaceAll(sMessage, "\n","\\n");
        	sMessage = nexacro.replaceAll(sMessage, "\\n", String.fromCharCode(13)+String.fromCharCode(10));
        	this.staMessage.set_text(sMessage);

        	// 현재 영역보다 텍스트가 더 많으면 팝업창 프레임을 늘인다
        	this.staMessage.set_fittocontents("width");
        	this.resetScroll();
        	var nGapW = 0, nGapH = 0;
        	if (this.staMessage.getOffsetWidth() > 270 )
        	{
        		nGapW = this.staMessage.getOffsetWidth() - 270;;
        		this.staMessage.setOffsetWidth(270 + nGapW);
        	}
        	this.staMessage.set_fittocontents("height");
        	this.resetScroll();
        	if (this.staMessage.getOffsetHeight() > 79)
        	{
        		nGapH = this.staMessage.getOffsetHeight() - 79;
         	}

        	//trace("nGapW:"+nGapW + ":::::::nGapH:"+nGapH);
        	if ( nGapW > 0 || nGapH > 0 )
        	{
        		this.parent.setOffsetWidth( this.parent.getOffsetWidth() + nGapW);
        		this.parent.setOffsetHeight( this.parent.getOffsetHeight() + nGapH);
        		this.getOwnerFrame().move(this.getOwnerFrame().left-(nGapW/2), this.getOwnerFrame().top-(nGapH/2));
        	}
        	this.fvFormHeight = this.parent.getOffsetHeight();
        	//trace("this.fvFormHeight:"+this.fvFormHeight);
        	// 상세 메시지가 없는 경우에는 [상세보기] 버튼을 보이지 않도록 처리
        	if( !this.gfnIsNull(sDetailMessage) )
        	{
        		// [상세보기] 버튼 보이기
        		this.btnDetail.set_visible(true);
        		this.fvDetailShowFlag =  true;
        		this.txtDetail.set_value(sDetailMessage);

        		this.btnOk.set_right(110);
        	}
        	else
        	{
        		var nLeft  = this.getOffsetWidth()/2 - this.btnOk.getOffsetWidth()/2;
        		this.btnOk.set_left(nLeft);
        		this.btnOk.set_width(60);
        	}

        	this.resetScroll();
        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.
        */
        this.form_onkeyup = function(obj,e)
        {
        	if( e.keycode == 27 )	// esc
        	{
        		this.close("X");
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
        * 7.Component Event Area
        ***********************************************************************************/

        /**
         * @description [확인]버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close("OK");
        };

        /**
         * @description [상세보기]버튼
        */
        this.btnDetail_onclick = function(obj,e)
        {
        	if(this.fvDetailShowFlag)	// 늘이기
        	{
        		this.txtDetail.set_visible(true);   // 상세보기 보이기.
        		this.txtDetail.setOffsetTop(this.btnOk.getOffsetBottom() + 21);
        		this.txtDetail.setOffsetWidth(this.getOffsetWidth());
        		this.parent.setOffsetHeight( this.parent.getOffsetHeight() + 217 ); // 팝업창 프레임 늘리기.
        		this.fvDetailShowFlag =  false;
        		this.btnDetail.set_cssclass("btn_Pop_AlertDetailHide");
        	}
        	else 					// 줄이기
        	{
        		this.txtDetail.set_visible(false);   // 상세보기 보이기.
        		this.parent.setOffsetHeight( this.fvFormHeight );  // 팝업창 프레임 줄이기.
        		this.fvDetailShowFlag =  true;
        		this.btnDetail.set_cssclass("btn_Pop_AlertDetailShow");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnDetail.addEventHandler("onclick",this.btnDetail_onclick,this);
        };
        this.loadIncludeScript("comAlertPop_job.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
