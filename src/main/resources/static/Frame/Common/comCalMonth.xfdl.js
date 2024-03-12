(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalMonth");
            this.set_titletext("월달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(104,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("pdvCalYM","0","24","269","309",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_CAL_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYYYY","13","12","243","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_CalHead");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btnPrev","28","34","25","16",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalPrev");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"34","25","16","28",null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalNext");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn01","27","86","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal01");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Static("staGuide02","13","72",null,"14","-7",null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Static("staGuide04","13","276",null,"14","-7",null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Static("staGuide01","13","72","14",null,null,"129",null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Static("staGuide03",null,"72","14","218","-7",null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn02","82","86","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Cal02");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn03","137","86","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Cal03");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn04","192","86","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Cal04");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn05","27","151","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Cal05");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn09","27","216","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal09");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn06","82","151","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal06");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn07","137","151","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal07");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn08","192","151","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal08");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn10","82","216","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal10");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn11","137","216","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Cal11");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Button("btn12","192","216","50","60",null,null,null,null,null,null,this.pdvCalYM.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Cal12");
            this.pdvCalYM.addChild(obj.name, obj);

            obj = new Calendar("calYm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_type("spin");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.set_displaynulltext("____-__");
            this.addChild(obj.name, obj);

            obj = new Button("btnYM","calYm:-24","4","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalDropbutton");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCalYM.form
            obj = new Layout("default","",0,0,this.pdvCalYM.form,function(p){});
            this.pdvCalYM.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",104,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalMonth.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comCalMonth Form
        * FILE NAME     : comCalMonth.xfdl
        * DESCRIPTION   : 공통 월달력
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.02    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvMMToday = "";					// 오늘날짜
        this.fvForm = "";						// 부모폼
        this.fvCallBack = "";					// 콜백함수
        this.fvPopupId = "";					// 콜백ID


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.fvMMToday = this.gfnGetDate(); 		// 오늘날자세팅
        	this.calYm.set_value(null);
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
        	//trace("[comCalMonth] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

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

        /**
         * @desc 월달력 초기화
         * @param {Object}	onjForm 	- 부모폼 object
         * @param {Object} 	objParam	- 전달 param
         *								objDs - 바인딩 데이터셋
         *								sBindCol - 바인딩 컬럼
         *								sCallbackFunc - 콜백함수
         *								sCallbackId	- 콜백ID
         *                              bAutoSelect - 일자 autoselect여부("true" 설정시 적용)
         * @return N/A
        */
        this.fnInitCommonCalendar = function(objForm, objParam)
        {
        	var sMonItem = "monItem";
        	this.fvForm = objForm;
        	this.fvCallBack = objParam.sCallbackFunc;	// 콜백함수
        	this.fvPopupId = objParam.sCallbackId;		// 콜백ID

        	if(!this.gfnIsNull(objParam))
        	{
        		// 바인딩 처리
        		if(!this.gfnIsNull(this.binds[sMonItem]))
        		{
        			var objItem = this.removeChild(sMonItem);
        			objItem.destroy();
        			this.calYm.set_value(null);
        		}

        		if(!this.gfnIsNull(objParam.objDs) && !this.gfnIsNull(objParam.sBindCol))
        		{
        			var objBindItem = new BindItem();
        			objBindItem.init(sMonItem, this.calYm.name, "value", objParam.objDs.name, objParam.sBindCol);
        			this.addChild(sMonItem, objBindItem);
        			objBindItem.bind();
        		}

        		// 일자 autoselect여부
        		if( objParam.bAutoSelect == true || objParam.bAutoSelect == "true")
        		{
        			this.calYm.set_autoselect(true);
        		}
        	}
        };

        /**
         * @desc 월달력 값 가져오기
         * @param N/A
         * @return N/A
        */
        this.fnGetMonth = function()
        {
        	var sRtn = "";
        	sRtn = this.calYm.value;
        	if(!this.gfnIsNull(sRtn))
        	{
        		sRtn = sRtn.substr(0,6);
        	}
        	return sRtn;
        };

        /**
         * @desc 월달력 값 설정하기
         * @param {String}	sValue 	- 설정값 , YYYYMM
         * @return N/A
        */
        this.fnSetMonth = function(sValue)
        {
        	sValue = this.gfnGetDigit(sValue);
        	sValue = sValue.substr(0,6);

        	if(this.gfnIsNull(sValue))
        	{
        		sValue = null;
        	}

        	if ( this.gfnIsNull(sValue) || this.gfnIsYM(sValue) )
        	{
        		if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds))
        		{
        			var objDs = this.binds["monItem"].datasetid;
        			this.fvForm[objDs].set_enableevent(false);
        			this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["monItem"].columnid, sValue);
        			this.fvForm[objDs].set_enableevent(true);
        		}
        		else
        		{
        			this.calYm.set_value(sValue);
        		}
        	}
        };

        /**
         * @desc 월달력 Enable 설정
         * @param {Boolean}	bFlag 	- true / false
         * @return N/A
        */
        this.fnEnable = function(bFlag)
        {
        	// Enable
        	if(!this.gfnIsNull(bFlag))
        	{
        		if(bFlag)
        		{
        			this.calYm.set_enable(true);
        			this.btnYM.set_enable(true);
        		}
        		else
        		{
        			this.calYm.set_enable(false);
        			this.btnYM.set_enable(false);
        		}
        	}
        	else
        	{
        		if(this.calYm.enable)
        		{
        			this.calYm.set_enable(false);
        			this.btnYM.set_enable(false);
        		}
        		else
        		{
        			this.calYm.set_enable(true);
        			this.btnYM.set_enable(true);
        		}
        	}
        };

        /**
         * @desc 월달력 ReadOnly 설정
         * @param {Boolean}	bFlag 	- true / false
         * @return N/A
        */
        this.fnReadOnly = function(bFlag)
        {
        	// ReadOnly
        	if(!this.gfnIsNull(bFlag))
        	{
        		if(bFlag)
        		{
        			this.calYm.set_readonly(true);
        			this.btnYM.set_enable(false);
        		}
        		else
        		{
        			this.calYm.set_readonly(false);
        			this.btnYM.set_enable(true);
        		}
        	}
        	else
        	{
        		if(this.calYm.readonly)
        		{
        			this.calYm.set_readonly(false);
        			this.btnYM.set_enable(true);
        		}
        		else
        		{
        			this.calYm.set_readonly(true);
        			this.btnYM.set_enable(false);
        		}
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 월달력 버튼 클릭시
        */
        this.btnYM_onclick = function(obj,e)
        {
        	var sCssclass;
        	var objBtn;

        	var sDate = this.calYm.value;
        	if( this.gfnIsNull(sDate) )
        	{
        		sDate = this.fvMMToday;
        	}

        	this.pdvCalYM.form.staYYYY.set_text(nexacro.toNumber(sDate.substr(0,4)));

        	this.pdvCalYM.trackPopupByComponent(this.calYm, 0 - 12, this.calYm.getOffsetHeight() - 11);
        };

        /**
         * @description 이전 버튼 클릭시
        */
        this.pdvCalYM_btnPrev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdvCalYM.form.staYYYY.text);
        	this.pdvCalYM.form.staYYYY.set_text((sDate - 1));
        };

        /**
         * @description 다음 버튼 클릭시
        */
        this.pdvCalYM_btnNext_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber( this.pdvCalYM.form.staYYYY.text);
        	this.pdvCalYM.form.staYYYY.set_text((sDate + 1));
        };

        /**
         * @description 월 버튼 클릭시
        */
        this.pdvCalYM_btn_onclick = function(obj,e)
        {
        	var sDate = this.pdvCalYM.form.staYYYY.text.toString().padLeft(4,"0") + nexacro.replaceAll(obj.id, "btn", "");
        	this.calYm.set_value(sDate);

        	if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds))
        	{
        		var objDs = this.binds["monItem"].datasetid;
        		this.fvForm[objDs].set_enableevent(false);
        		this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["monItem"].columnid, sDate);
        		this.fvForm[objDs].set_enableevent(true);
        	}

        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, sDate);		// 본 화면에 콜백
        	}

        	this.pdvCalYM.closePopup();
        };

        /**
         * @description 칼렌다의 날짜가 변경된 후 발생하는 이벤트
        */
        this.calYm_onchanged = function(obj,e)
        {
        	var sValue = this.fnGetMonth();

        	if(this.gfnIsNull(sValue))
        	{
        		sValue = null;
        	}

        	if(!this.gfnIsNull(this.fvForm) && !this.gfnIsNull(this.binds["monItem"]))
        	{
        		var objDs = this.binds["monItem"].datasetid;
        		this.fvForm[objDs].set_enableevent(false);
        		this.fvForm[objDs].setColumn(this.fvForm[objDs].rowposition, this.binds["monItem"].columnid, sValue);
        		this.fvForm[objDs].set_enableevent(true);
        	}

        	if(!this.gfnIsNull(this.fvCallBack) && !this.gfnIsNull(this.fvForm[this.fvCallBack]))
        	{
        		this.fvForm[this.fvCallBack].call(this.fvForm, this.fvPopupId, this.fnGetMonth());		// 본 화면에 콜백
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.pdvCalYM.form.btnPrev.addEventHandler("onclick",this.pdvCalYM_btnPrev_onclick,this);
            this.pdvCalYM.form.btnNext.addEventHandler("onclick",this.pdvCalYM_btnNext_onclick,this);
            this.pdvCalYM.form.btn01.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn02.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn03.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn04.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn05.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn09.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn06.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn07.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn08.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn10.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn11.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.pdvCalYM.form.btn12.addEventHandler("onclick",this.pdvCalYM_btn_onclick,this);
            this.calYm.addEventHandler("onchanged",this.calYm_onchanged,this);
            this.btnYM.addEventHandler("onclick",this.btnYM_onclick,this);
        };
        this.loadIncludeScript("comCalMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
