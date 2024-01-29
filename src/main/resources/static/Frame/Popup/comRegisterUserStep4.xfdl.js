(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comRegisterUserStep2");
            this.set_titletext("사용자등록 > 신청결과");
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

            obj = new Div("divHeader","0","0",null,"80","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divStep1","90","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_Step01_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("1");
            obj.set_text("Step1");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("2");
            obj.set_text("회원가입유형");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new ImageViewer("Img01",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Div("divStep2","467","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step02_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("1");
            obj.set_text("Step2");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("2");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new ImageViewer("Img02",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Div("divStep3","844","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step03_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("1");
            obj.set_text("Step3");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("2");
            obj.set_text("개인정보입력");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new ImageViewer("Img03",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Div("divStep4","1221","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step04_on.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("1");
            obj.set_text("Step4");
            obj.set_cssclass("sta_MB_StepOn");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","147","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("2");
            obj.set_text("사용자등록완료");
            obj.set_cssclass("sta_MB_StepOnTxt");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Div("divContent","0",null,null,"580","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","746",null,"75","32",null,"25",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("div00","336","90","895","339",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("transparent");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            obj.set_tabstop("true");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stc00_00","114","230","666","40",null,null,null,null,null,null,this.divContent.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>사용자 등록</b>이 <b v=\'true\'>완료</b> 되었습니다.");
            obj.set_cssclass("sta_MB_CompTxt01");
            obj.set_usedecorate("true");
            this.divContent.form.div00.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","398","80","98","91",null,null,null,null,null,null,this.divContent.form.div00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Comp.png\')");
            obj.set_text("");
            this.divContent.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divHeader.form.divStep1.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep1.form,function(p){});
            this.divMain.form.divHeader.form.divStep1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep2.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep2.form,function(p){});
            this.divMain.form.divHeader.form.divStep2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep3.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep3.form,function(p){});
            this.divMain.form.divHeader.form.divStep3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep4.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep4.form,function(p){});
            this.divMain.form.divHeader.form.divStep4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form,function(p){});
            this.divMain.form.divHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.div00.form
            obj = new Layout("default","",0,0,this.divContent.form.div00.form,function(p){});
            this.divContent.form.div00.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("comRegisterUserStep4.xfdl","");
        this.registerScript("comRegisterUserStep4.xfdl", function() {
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

        this.divContent_stc00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divContent.form.btnOk.addEventHandler("onclick",this.divContent_btnOk_onclick,this);
        };
        this.loadIncludeScript("comRegisterUserStep4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
