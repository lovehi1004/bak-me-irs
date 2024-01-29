(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comUserInfoWrapperMain");
            this.set_titletext("Top > 정보수정 메인");
            this.set_cssclass("frm_MEMBER_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,536);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divContents","0","0",null,"536","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,536,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.divLogin.form.edtId","value","dsLogin","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.divLogin.form.edtPw","value","dsLogin","password");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comUserInfoWrapperMain.xfdl","");
        this.registerScript("comUserInfoWrapperMain.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comUserWrapperMain Form
        * FILE NAME     : comUserWrapperMain.xfdl
        * DESCRIPTION   : 사용자등록, 아이디/비밀번호 찾기 메인
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
        	// 전달된 Parameter 개별로 받기
        	// STEP1 화면 보여주기
        	this.fnGoStep(1);
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
         * @desc STEP1, STEP2, STEP3, STEP4에서 호출하는 메인화면 이동 function
         * @param N/A
         * @return N/A
        */
        this.fnClose = function()
        {
        	// 팝업 닫기
        	var strRtn = this.gfnSetPopupReturn({pvRtnValue:"OK"});
        	this.gfnPopupClose(this, strRtn);
        };


        /**
         * @desc STEP1, STEP2, STEP3, STEP4에서 호출하는 메인화면 이동 function
         * @param N/A
         * @return N/A
        */
        this.fnGoStep = function(n)
        {
        	switch (n)
        	{
        		case 1 :
        			// STEP1 화면 보여주기
        			this.divContents.set_url("Frame_Popup::comUserInfoStep1.xfdl");
        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("comUserInfoWrapperMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
