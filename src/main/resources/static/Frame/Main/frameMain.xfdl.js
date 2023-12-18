(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            this.set_cssclass("sta_MF_NoticeTitle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1626,777);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","50","80",null,null,"50","30","1400",null,"600",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divWgMain01","10","10","30.80%","310",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_Box");
            obj.set_text("협정");
            obj.set_url("Frame_Widget::wgMain01.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWgMain02","divWgMain01:51.99200000000002","10","30.80%","310",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_Box");
            obj.set_text("방법론");
            obj.set_url("Frame_Widget::wgMain02.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWgMain04","14","368","29.8%",null,null,"0",null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_text("공지사항");
            obj.set_url("Frame_Widget::wgMain04.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWgMain05","divWgMain04:62","368","29.8%",null,null,"0",null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_text("자료실");
            obj.set_url("Frame_Widget::wgMain05.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWgMain06","divWgMain05:62","368",null,null,"15","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_text("법령과지침");
            obj.set_url("Frame_Widget::wgMain06.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divWgMain03","divWgMain02:48.983999999999924","10",null,"310","14",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_Box");
            obj.set_text("사업");
            obj.set_url("Frame_Widget::wgMain03.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static00","63","38","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\"true\">업무현황</b>(사업수행자)");
            obj.set_cssclass("sta_MF_Title");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divWgMain01
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain01.form,function(p){});
            this.divMain.form.divWgMain01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWgMain02
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain02.form,function(p){});
            this.divMain.form.divWgMain02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWgMain04
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain04.form,function(p){});
            this.divMain.form.divWgMain04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWgMain05
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain05.form,function(p){});
            this.divMain.form.divWgMain05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWgMain06
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain06.form,function(p){});
            this.divMain.form.divWgMain06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divWgMain03
            obj = new Layout("default","",0,0,this.divMain.form.divWgMain03.form,function(p){});
            this.divMain.form.divWgMain03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1626,777,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Widget::wgMain01.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgMain02.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgMain04.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgMain05.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgMain06.xfdl");
            this._addPreloadList("fdl","Frame_Widget::wgMain03.xfdl");
        };
        
        // User Script
        this.registerScript("frameMain.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameMain Form
        * FILE NAME     : frameMain.xfdl
        * DESCRIPTION   : frameMain
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
        	trace("[frameMain]fnLoginAfter =====================");
        	this.divMain.form.divWgMain01.form.fnLoginAfter();
        	this.divMain.form.divWgMain02.form.fnLoginAfter();
        	this.divMain.form.divWgMain03.form.fnLoginAfter();
        	this.divMain.form.divWgMain04.form.fnLoginAfter();
        	this.divMain.form.divWgMain05.form.fnLoginAfter();
        	this.divMain.form.divWgMain06.form.fnLoginAfter();
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
