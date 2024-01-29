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
                this._setFormPosition(470,335);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBizCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"bfrAply\" type=\"STRING\" size=\"256\"/><Column id=\"aprv\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrAply\" type=\"STRING\" size=\"256\"/><Column id=\"evl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLgoinUsr", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업");
            obj.set_cssclass("sta_MF_BoxTitleO mTitle");
            this.addChild(obj.name, obj);

            obj = new Static("staBfrAply",null,"84","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staBfrAplyTitle","50","84",null,"48","staBfrAply:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staEvl",null,"143","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staEvlTitle","50","143",null,"48","staEvl:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("평가");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staDlbrAply",null,"202","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDlbrAplyTitle","50","202",null,"48","staDlbrAply:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staAprv",null,"261","100","48","76",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MF_ListNumber_1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staAprvTitle","50","261",null,"48","staAprv:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem_1");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt02_00",null,"143","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt01_00",null,"84","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt03_00",null,"202","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("<fc v=\'#666666\'><fs v=\'13\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTypeCnt03_00_00",null,"261","20","48","51",null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj = new BindItem("item0","staBfrAply","text","dsBizCnt","bfrAply");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","staEvl","text","dsBizCnt","evl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","staDlbrAply","text","dsBizCnt","dlbrAply");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","staAprv","text","dsBizCnt","aprv");
            this.addChild(obj.name, obj);
            obj.bind();
            
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
        this.fnCallCntList = function()
        {
        	var objArgs = {};
         	objArgs.svcId 			= "selectBizCnt";
         	objArgs.url 			= "/biz/board/selectBizCnt.irs";
         	objArgs.inds      		= "dsLgoinUsr=dsLgoinUsr";
         	objArgs.outds     		= "dsBizCnt=dsBizCnt";
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
        	trace("[wgMain03]fnLoginAfter =====================");
        	this.fnCallCntList();
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/


        //사전신청
        this.staBfrAply_onclick = function(obj,e)
        {
        	var sMnuId = "MN04010100";	//사업 신청
        	var arrArgSend = { srhCase:'biz1', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };
        //평가
        this.staEvl_onclick = function(obj,e)
        {
        	var sMnuId = "MN04010100";	//사업 신청
        	var arrArgSend = { srhCase:'biz2', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };
        //심의신청
        this.staDlbrAply_onclick = function(obj,e)
        {
        	var sMnuId = "MN04010100";	//사업 신청
        	var arrArgSend = { srhCase:'biz3', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };
        //승인
        this.staAprv_onclick = function(obj,e)
        {
        	var sMnuId = "MN04020200";	//유효사업현황
        	var arrArgSend = { srhCase:'biz4', view:"LIST" };	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staBfrAply.addEventHandler("onclick",this.staBfrAply_onclick,this);
            this.staEvl.addEventHandler("onclick",this.staEvl_onclick,this);
            this.staDlbrAply.addEventHandler("onclick",this.staDlbrAply_onclick,this);
            this.staAprv.addEventHandler("onclick",this.staAprv_onclick,this);
            this.staRegTypeCnt01_00.addEventHandler("onclick",this.staRegTypeCnt01_onclick,this);
        };
        this.loadIncludeScript("wgMain03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
