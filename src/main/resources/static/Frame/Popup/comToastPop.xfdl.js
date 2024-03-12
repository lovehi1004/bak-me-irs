(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comToastPop");
            this.set_titletext("comToastPop");
            this.set_cssclass("alert_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_Pop_FormBg");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide02","0","1","15",null,null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide03",null,"1","15",null,"0","85",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide04","15","85","270","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide01","15","0","270","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMessage","15","15",null,"70","15",null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Alert_Data");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("comToastPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comToastPop Form
        * FILE NAME     : comToastPop.xfdl
        * DESCRIPTION   : 공통 Toast 팝업
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
        	var nSec = this.parent["sec"];
        	if(this.gfnIsNull(nSec))
        	{
        		if(!this.gfnIsNull(this.fvApp) && !this.gfnIsNull(this.fvApp.Frame) && !this.gfnIsNull(this.fvApp.Frame.nToastMilliSec))
        		{
        			nSec = this.fvApp.Frame.nToastMilliSec;
        		}
        		else
        		{
        			nSec = 1000;
        		}
        	}

        	sMessage = nexacro.replaceAll(sMessage, "\n","\\n");
        	sMessage = nexacro.replaceAll(sMessage, "\\n", String.fromCharCode(13)+String.fromCharCode(10));
        	this.staMessage.set_text(sMessage);

        	this.resetScroll();

        	// 현재 영역보다 텍스트가 더 많으면 팝업창 프레임을 늘인다
        	if (this.staMessage.getOffsetHeight()>70)
        	{
        		var nGap = this.staMessage.getOffsetHeight() - 70;
        		if(nGap > 38) nGap = nGap -12;
        		this.parent.setOffsetHeight( this.parent.getOffsetHeight() + nGap);
        		this.getOwnerFrame().move(this.getOwnerFrame().let, this.getOwnerFrame().top-(nGap/2));
        	}
        	else
        	{
        		this.staMessage.set_fittocontents("none");
        		this.staMessage.setOffsetHeight(70);
        	}
        	this.fvFormHeight = this.parent.getOffsetHeight();

        	this.resetScroll();

        	this.setTimer(9001, nSec);
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	//trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			this.close("X");
        			break;
        		default:
        			break;
        	}
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
        * 4. Callback 처리 Area (Transaction, Popup)
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
         * @description 메시지 클릭시 닫기 처리
        */
        this.staMessage_onclick = function(obj,e)
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
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.staMessage.addEventHandler("onclick",this.staMessage_onclick,this);
        };
        this.loadIncludeScript("comToastPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
