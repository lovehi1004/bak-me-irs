(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFindUserStep2");
            this.set_titletext("아이디/비밀번호 찾기 > 찾기 결과");
            this.set_cssclass("frm_MEMBER_Bg");
            this.set_dragscrolltype("both");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1566","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0",null,null,"580","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","750",null,"75","32",null,"25",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stc00","396","104","785","323",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("아이디/비밀번호 찾기 결과 보여주기");
            obj.set_background("yellow");
            obj.set_font("normal 50pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comFindUserStep2.xfdl","");
        this.registerScript("comFindUserStep2.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comRegisterUserStep1 Form
        * FILE NAME     : comRegisterUserStep1.xfdl
        * DESCRIPTION   : 사용자등록 > 회원유형선택
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.01    Justin	     최초생성
        ***********************************************************************************/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

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
         * @description 확인 버튼 클릭
        */
        this.divContent_btnOk_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnClose();		// 메인화면으로 이동
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divContent.form.btnOk.addEventHandler("onclick",this.divContent_btnOk_onclick,this);
        };
        this.loadIncludeScript("comFindUserStep2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
