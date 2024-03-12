(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleComcode");
            this.set_titletext("공통코드 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult04", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","10","5","98","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1) 공통코드");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnCommCodeSearch","120","5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","10","74",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsResult01");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"cdMgno\"/><Cell col=\"2\" text=\"cdEngNm\"/><Cell col=\"3\" text=\"cdKornNm\"/><Cell col=\"4\" text=\"sortSeqo\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:cdMgno\"/><Cell col=\"2\" text=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdKornNm\"/><Cell col=\"4\" text=\"bind:sortSeqo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","10","229",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsResult02");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"cdMgno\"/><Cell col=\"2\" text=\"cdEngNm\"/><Cell col=\"3\" text=\"cdKornNm\"/><Cell col=\"4\" text=\"sortSeqo\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:cdMgno\"/><Cell col=\"2\" text=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdKornNm\"/><Cell col=\"4\" text=\"bind:sortSeqo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList03","10","384",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsResult03");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"cdMgno\"/><Cell col=\"2\" text=\"cdEngNm\"/><Cell col=\"3\" text=\"cdKornNm\"/><Cell col=\"4\" text=\"sortSeqo\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:cdMgno\"/><Cell col=\"2\" text=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdKornNm\"/><Cell col=\"4\" text=\"bind:sortSeqo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList04","10","549",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsResult04");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"groupCdMgno\"/><Cell col=\"1\" text=\"cdMgno\"/><Cell col=\"2\" text=\"cdEngNm\"/><Cell col=\"3\" text=\"cdKornNm\"/><Cell col=\"4\" text=\"sortSeqo\"/></Band><Band id=\"body\"><Cell text=\"bind:groupCdMgno\"/><Cell col=\"1\" text=\"bind:cdMgno\"/><Cell col=\"2\" text=\"bind:cdEngNm\"/><Cell col=\"3\" text=\"bind:cdKornNm\"/><Cell col=\"4\" text=\"bind:sortSeqo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","40","718","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("outDs:\"dsResult01\", groupId:\"RDC_UNIT_CD\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","10","200","718","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("outDs:\"dsResult02\", groupId:\"RVW_TYPE_CD\" , headflag:\"B\" , useYn:\"Y\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","10","360","718","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("outDs:\"dsResult03\", groupId:\"ACNT_CL_CD\"  , headflag:\"S\" , useYn:\"Y\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","10","520","718","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("outDs:\"dsResult04\", groupId:\"ACNT_STTS_CD\", headflag:\"A\" , useYn:\"A\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleComcode.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleComcode Form
        * FILE NAME     : sampleComcode.xfdl
        * DESCRIPTION   : 공통코드 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.01    TOBESOFT	     최초생성
        ***********************************************************************************/



        /*
        	★★★ 공통코드 관련 dataset 구조, 서비스 연동 수정 필요
        */

        /*
        	// 공통코드 호출시 참고
        	outDs		수신용 Dataset Object 또는 Dataset Object명
        	groupId		공통코드 조회할 키값
        	headflag	초기값 추가설정
        				[ N(없음, default), B(빈 문자열), S(선택), A(전체) ]
        				B - code : "", name : "" ,  S - code : "", name : "- 선택 -" , A - code : "", name : "- 전체 -"
        	useYn		공통코드 사용여부 [Y(default) / N] , A - 전체
        */

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
        this.fnFormInit = function()
        {
        	//trace("[sampleComcode] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			// 후처리 코드
        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());
        			trace("[getCommonCode]this.dsResult03.getRowCount():"+this.dsResult03.getRowCount());
        			trace("[getCommonCode]this.dsResult04.getRowCount():"+this.dsResult04.getRowCount());
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



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 조회 클릭시
        */
        this.btnCommCodeSearch_onclick = function(obj,e)
        {
        // 	outDs		수신용 Dataset Object 또는 Dataset Object명
        // 	groupId		공통코드 조회할 키값
        // 	headflag	초기값 추가설정
        // 				[ N(없음, default), B(빈 문자열), S(선택), A(전체) ]
        //				B - code : "", name : "" ,  S - code : "", name : "- 선택 -" , A - code : "", name : "- 전체 -"
        // 	useYn		공통코드 사용여부 [Y(default) / N] , A - 전체

        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"RDC_UNIT_CD"};
        	arrParam[1] = {outDs:"dsResult02", groupId:"RVW_TYPE_CD" , headflag:"B" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsResult03", groupId:"ACNT_CL_CD"  , headflag:"S" , useYn:"Y"};
        	arrParam[3] = {outDs:"dsResult04", groupId:"ACNT_STTS_CD", headflag:"A" , useYn:"A"};

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnCommCodeSearch.addEventHandler("onclick",this.btnCommCodeSearch_onclick,this);
        };
        this.loadIncludeScript("sampleComcode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
