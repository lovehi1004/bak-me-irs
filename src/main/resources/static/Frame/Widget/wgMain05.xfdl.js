(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wgMain05");
            this.set_titletext("메인 화면 위젯 > 자료실");
            if (Form == this.constructor)
            {
                this._setFormPosition(475,265);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsSn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"pstatNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstatCn\" type=\"STRING\" size=\"256\"/><Column id=\"flmno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"typeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","0","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자료실");
            obj.set_cssclass("sta_LOGIN_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnDataMore",null,"5","96","34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_NoticeMore");
            obj.set_accessibilitylabel("자료실더보기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDataBoardList","-4","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"472\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, pstatNm, currow, 0)\" tooltiptext=\"bind:pstatNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",475,265,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("wgMain05.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Widget
        * BUSINESS      : wgMain05 Form
        * FILE NAME     : wgMain05.xfdl
        * DESCRIPTION   : 메인 화면 위젯 > 자료실
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
        	trace("[wgMain05]Form onload 후 필요(설정)시 실행되는 callback 함수 ");


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
        		case "dataBoard" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dataBoard";
         	objArgs.url 			= "/common/board/selectBoardListMainData.irs";
         	objArgs.inds			= "dsSrh=dsSrh";
         	objArgs.outds			= "dsList=dsList "
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

         	this.gfnTransaction(this, objArgs);
        };


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
        	trace("[wgMain05]fnLoginAfter =====================");
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'bbsGroupMgno','BS00000020');
        	this.fnSearch();

        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        //자료실 그리드 클릭이벤트
        this.grdDataBoardList_oncellclick = function(obj,e)
        {
        	var bbsSn = this.dsList.getColumn(e.row,'bbsSn');
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000020',bbsSn:bbsSn};
        	var oOption		= {showtitlebar:true,titletext:"자료실", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        //더보기 클릭이벤트
        this.btnDataMore_onclick = function(obj,e)
        {
        	var sPopupId	= "popModelsssP01";
        	var sPopupUrl	= "Biz_Common::BoardM00.xfdl";
        	var objArgs		= {bbsGroupMgno:'BS00000020'};
        	var oOption		= {showtitlebar:true,titletext:"자료실", modal:false, resizable:true, width:1350, height:930};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDataMore.addEventHandler("onclick",this.btnDataMore_onclick,this);
            this.grdDataBoardList.addEventHandler("oncellclick",this.grdDataBoardList_oncellclick,this);
        };
        this.loadIncludeScript("wgMain05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
