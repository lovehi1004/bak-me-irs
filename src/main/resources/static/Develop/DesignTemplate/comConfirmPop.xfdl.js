(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comConfirmPop");
            this.set_titletext("comConfirmPop");
            this.set_cssclass("frm_POP_Bg");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMessage","50","91",null,null,"50","86","270","500","79","500",this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Message");
            obj.set_fittocontents("width");
            obj.set_wordWrap("char");
            obj.set_text("수정 하시겠습니까?");
            this.addChild(obj.name, obj);

            obj = new Div("divGuide","20","19",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","167","52","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Confirm");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustom1","109",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustom2","btnCustom1:3",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아니요");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_wordWrap("none");
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
        this.registerScript("comConfirmPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comConfirmPop Form
        * FILE NAME     : comConfirmPop.xfdl
        * DESCRIPTION   : 공통 confirm 팝업
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
        	var sTitle   = this.parent["TITLE"];
        	var nChkCell = this.parent["CHKCELL"];		// 그리드에서 띄운 팝업이면 해당 그리드 셀에 Focus로 리턴한다.

        // 	var sParam1 = this.parent["PARAM1"];
        // 	var sParam2 = this.parent["PARAM2"];
        // 	var sParam3 = this.parent["PARAM3"];

        	var nCnt = 0;
        	var btnVlaue = ["OK", "NOK", "NOK"];

        	for (var i=1; i<=3; i++)
        	{
        		var sParam = this.parent["PARAM"+i];
        		var oBtn = eval("this.btnCustom"+i);

        		if (!this.gfnIsNull(sParam))
        		{
        			var arrParam = sParam.split("^");

        			if (this.isValidObject(oBtn))
        			{
        				oBtn.set_text(arrParam[0]);
        				oBtn.usrValue = arrParam[1];
        				if (this.gfnIsNull(arrParam[1])) oBtn.usrValue = btnVlaue[i-1];
        			}
        			nCnt++;
        		}

        		if (i==3 && !this.gfnIsNull(sParam))
        		{
        			this.btnCustom3.set_visible(true);
        			this.btnCustom1.set_fittocontents("width");
        			this.btnCustom2.set_fittocontents("width");
        		}
        	}

        	sMessage = nexacro.replaceAll(sMessage, "\n","\\n");
        	sMessage = nexacro.replaceAll(sMessage, "\\n", String.fromCharCode(13)+String.fromCharCode(10));

        	if(this.gfnIsNull(sTitle)) sTitle = "확인창";
        	// this.staTitle.set_text(sTitle);
        	this.staMessage.set_text(sMessage);

        	if (nCnt>2)
        	{
        		this.btnCustom1.set_left(nexacro.toNumber(this.width)/2 - (nexacro.toNumber(this.btnCustom3.getOffsetRight()-this.btnCustom1.getOffsetLeft())/2) );
        	}

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
        	//trace("this.parent.getOffsetHeight():"+this.parent.getOffsetHeight());
        	this.resetScroll();

        	this.btnCustom1.setFocus();
        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.
        */
        this.form_onkeyup = function(obj,e)
        {
        	if( e.keycode == 27 )	// esc
        	{
        		this.close("NOK");
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
         * @description [확인]버튼
        */
        this.btnCustom1_onclick = function(obj,e)
        {
        	this.close("OK");
        };

        /**
         * @description [취소]버튼
        */
        this.btnCustom2_onclick = function(obj,e)
        {
        	this.close("NOK");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.btnCustom1.addEventHandler("onclick",this.btnCustom1_onclick,this);
            this.btnCustom2.addEventHandler("onclick",this.btnCustom2_onclick,this);
        };
        this.loadIncludeScript("comConfirmPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
