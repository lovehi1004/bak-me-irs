(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wgMain01");
            this.set_titletext("메인 화면 위젯 > 협정");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,335);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAgrCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"regTypeCnt01\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeCnt02\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeCnt03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("협정");
            obj.set_cssclass("sta_MF_BoxTitleB mTitle");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt01",null,"84","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("regTypeCnt01","50","84",null,"48","staRegTypeCnt01:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("체결중");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt02",null,"143","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("regTypeCnt02","50","143",null,"48","staRegTypeCnt02:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("미발효");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt03",null,"202","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("regTypeCnt03","50","202",null,"48","staRegTypeCnt03:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("발효");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt02_00",null,"143","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt01_00",null,"84","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt03_00",null,"202","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,335,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","staRegTypeCnt01","text","dsAgrCnt","regTypeCnt01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","staRegTypeCnt02","text","dsAgrCnt","regTypeCnt02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","staRegTypeCnt03","text","dsAgrCnt","regTypeCnt03");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("wgMain01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Widget
        * BUSINESS      : wgMain01 Form
        * FILE NAME     : wgMain01.xfdl
        * DESCRIPTION   : 메인 화면 위젯 > 협정
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
        	trace("[wgMain01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");


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
        this.fnCallCntList = function()
        {
        	trace("협정 업무현환 개수 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/common/board/selectAgrCnt.irs";
         	objArgs.inds      		= "";
         	objArgs.outds     		= "dsAgrCnt=dsAgrCnt";
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
        	trace("[wgMain01]fnLoginAfter =====================");
        	this.fnCallCntList();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/


        // 체결중 클릭 이벤트
        this.staRegTypeCnt01_onclick = function(obj,e)
        {
        	var sMnuId = "MN01010000";	//협정약정목록
        	var arrArgSend = { srhRegTypeCd:'RTC0003', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };
        // 미발효 클릭
        this.staRegTypeCnt02_onclick = function(obj,e)
        {
        	var sMnuId = "MN01010000";	//협정약정목록
        	var arrArgSend = { srhRegTypeCd:'RTC0002', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };
        // 발효 클릭
        this.staRegTypeCnt03_onclick = function(obj,e)
        {
        	var sMnuId = "MN01010000";	//협정약정목록
        	var arrArgSend = { srhRegTypeCd:'RTC0001', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staRegTypeCnt01.addEventHandler("onclick",this.staRegTypeCnt01_onclick,this);
            this.staRegTypeCnt02.addEventHandler("onclick",this.staRegTypeCnt02_onclick,this);
            this.staRegTypeCnt03.addEventHandler("onclick",this.staRegTypeCnt03_onclick,this);
            this.staRegTypeCnt01_00.addEventHandler("onclick",this.staRegTypeCnt01_onclick,this);
        };
        this.loadIncludeScript("wgMain01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
