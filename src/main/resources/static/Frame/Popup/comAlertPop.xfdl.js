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
            this.set_cssclass("frm_POP_Bg");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMessage","45","91",null,null,"45","86","280","500","38","400",this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_Message");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","148","staMessage:9","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnDetail","btnOk:35","staMessage:9","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상세보기");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("taeDetail","34","204","300","217",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_dragscrolltype("none");
            obj.set_cssclass("txt_Alert_DetailMes");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","20","19",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stcIcon","167","52","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Alert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"30","20","20","32",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_AlertClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","467","52","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_Error");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
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
        this.registerScript("comAlertPop.xfdl", function() {
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

        /*
        	// cssclass
        		sta_POP_Alert	: 'I' 코드용
        		sta_POP_Error	: 'E' 코드용
        		Warning 'W' 코드용 cssclass 필요.
        		cssclass 추가시 fnFormInit > this.stcIcon.set_cssclass 수정 필요
        */

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
        	var sMsgType = this.parent["MESSAGE_TYPE"];		// sMsgType [ I, E, W ]
        	var nLeft;

        	if (sMsgType=="I")
        	{
        		this.stcIcon.set_cssclass("sta_POP_Alert");
        	}
        	else if (sMsgType=="E")
        	{
        		this.stcIcon.set_cssclass("sta_POP_Error");
        	}
        	else if (sMsgType=="W")
        	{
        		this.stcIcon.set_cssclass("sta_POP_Alert");
        	}
        	else
        	{
        		this.stcIcon.set_cssclass("sta_POP_Alert");
        	}
        	this.stcIcon.set_visible(true);

        	sMessage = nexacro.replaceAll(sMessage, "\n","\\n");
        	sMessage = nexacro.replaceAll(sMessage, "\\n", String.fromCharCode(13)+String.fromCharCode(10));
        	this.staMessage.set_text(sMessage);

        	// 현재 영역보다 텍스트가 더 많으면 팝업창 프레임을 늘인다
        	this.staMessage.set_fittocontents("width");
        	this.resetScroll();
        	var nGapW = 0, nGapH = 0;
        	if (this.staMessage.getOffsetWidth() > 280 )
        	{
        		nGapW = this.staMessage.getOffsetWidth() - 280;;
        		this.staMessage.setOffsetWidth(280 + nGapW);
        	}
        	this.staMessage.set_fittocontents("height");
        	this.resetScroll();
        	if (this.staMessage.getOffsetHeight() > 38)
        	{
        		nGapH = this.staMessage.getOffsetHeight() - 38;
         	}

        	if ( nGapW > 0 || nGapH > 0 )
        	{
        		this.parent.setOffsetWidth( this.parent.getOffsetWidth() + nGapW);
        		this.parent.setOffsetHeight( this.parent.getOffsetHeight() + nGapH);
        		this.getOwnerFrame().move(this.getOwnerFrame().left-(nGapW/2), this.getOwnerFrame().top-(nGapH/2));

        		nLeft  = this.getOffsetWidth()/2 - this.stcIcon.getOffsetWidth()/2;
        		this.stcIcon.set_left(nLeft);

        		nLeft  = this.getOffsetWidth()/2 - this.btnOk.getOffsetWidth()/2;
        		this.btnOk.set_left(nLeft);
        	}

        	this.fvFormHeight = this.parent.getOffsetHeight();

        	// 상세 메시지가 없는 경우에는 [상세보기] 버튼을 보이지 않도록 처리
        	if( !this.gfnIsNull(sDetailMessage) )
        	{
        		// [상세보기] 버튼 보이기
        		this.btnDetail.set_visible(true);
        		this.fvDetailShowFlag =  true;
        		this.taeDetail.set_value(sDetailMessage);
        	}

        	this.resetScroll();
        	this.btnOk.setFocus();
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
        		this.taeDetail.set_visible(true);   // 상세보기 보이기.
        		this.taeDetail.setOffsetTop(this.btnOk.getOffsetBottom() + 34);
        		this.taeDetail.setOffsetWidth(this.getOffsetWidth()-70);
        		this.parent.setOffsetHeight( this.parent.getOffsetHeight() + 217 + 35 ); // 팝업창 프레임 늘리기.
        		this.fvDetailShowFlag =  false;
        	}
        	else 					// 줄이기
        	{
        		this.taeDetail.set_visible(false);   // 상세보기 보이기.
        		this.parent.setOffsetHeight( this.fvFormHeight );  // 팝업창 프레임 줄이기.
        		this.fvDetailShowFlag =  true;
        	}
        };

        /**
         * @description [X]버튼
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close("X");
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
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("comAlertPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
