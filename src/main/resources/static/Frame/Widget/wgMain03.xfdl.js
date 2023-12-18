(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wgMain03");
            this.set_titletext("메인 화면 위젯 > 사업");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","20",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업");
            obj.set_cssclass("sta_MF_BoxTitleO");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"76","120","48","50",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("17<fc v=\'#777777\'><fs v=\'13\'> 건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","50","76",null,"48","Static02:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"131","120","48","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8<fc v=\'#777777\'><fs v=\'13\'> 건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","50","131",null,"48","Static02_00:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("평가");
            obj.set_cssclass("sta_MF_ListItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"186","120","48","50",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("7<fc v=\'#777777\'><fs v=\'13\'> 건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","50","186",null,"48","Static02_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"241","120","48","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("0<fc v=\'#777777\'><fs v=\'13\'> 건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","50","241",null,"48","Static02_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,310,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("wgMain03.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Widget
        * BUSINESS      : wgMain03 Form
        * FILE NAME     : wgMain03.xfdl
        * DESCRIPTION   : 메인 화면 위젯 > 사업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.XX.XX    홍길동	     최초생성
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
        	trace("[wgMain03]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
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
        		case "" :
        			// 후처리 코드

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
        	trace("[wgMain03]fnLoginAfter =====================");

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
        this.loadIncludeScript("wgMain03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
