(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member");
            this.set_background("#f9f9ff");
            this.set_cssclass("frm_MEMBER_Bg");
            this.set_titletext("정보공개 통합검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"search\" type=\"STRING\" size=\"256\"/><Column id=\"pageInfo\" type=\"STRING\" size=\"256\"/><Column id=\"flag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"내용보기\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"제목\">Basic Agreement on Korea-Vietnam Climate Change Cooperation</Col><Col id=\"내용보기\">내용보기</Col></Row><Row><Col id=\"제목\">Korea-Mongolia Climate Cooperation Agreement</Col><Col id=\"내용보기\">내용보기</Col></Row><Row><Col id=\"내용보기\">내용보기</Col><Col id=\"제목\">Korea-Mongolia Climate Cooperation Agreement_1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIrbBsc", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMgno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgBsc", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrStiplBsc", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staAgrStiplTitle","55","68",null,"30","1256",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협정·약정 현황");
            obj.set_cssclass("sta_SR_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAgrStiplList","55","staAgrStiplTitle:14",null,"151","55",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAgrStiplBsc");
            obj.set_cssclass("grd_SR_List");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:cncldOrgtNm\" tooltiptext=\"bind:cncldOrgtNm\" displaytype=\"decoratetext\" textAlign=\"left\"/><Cell col=\"1\" text=\"내용보기\" cssclass=\"Cell_Grd_Btn\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" accessibilitydescription=\"상세화면전환\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAgrStiplMore",null,"71","70",null,"55","grdAgrStiplList:16",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("더보기");
            obj.set_cssclass("btn_SR_More");
            obj.set_accessibilitylabel("협정약정현황더보기");
            this.addChild(obj.name, obj);

            obj = new Static("staMhdlgTitle","55","grdAgrStiplList:20","185","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("방법론 현황");
            obj.set_cssclass("sta_SR_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMhdlgList","55","staMhdlgTitle:14",null,"151","55",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMhdlgBsc");
            obj.set_cssclass("grd_SR_List");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:mhdlgOrgtNm\" displaytype=\"decoratetext\" textAlign=\"left\"/><Cell col=\"1\" text=\"내용보기\" cssclass=\"Cell_Grd_Btn\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" accessibilitydescription=\"상세화면전환\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMhdlgMore",null,"286","70",null,"55","grdMhdlgList:16",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("더보기");
            obj.set_cssclass("btn_SR_More");
            obj.set_accessibilitylabel("방법론현황더보기");
            this.addChild(obj.name, obj);

            obj = new Static("staIrbTitle","55","grdMhdlgList:20","185","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("국제감축사업 현황");
            obj.set_cssclass("sta_SR_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdIrbList","55","staIrbTitle:14",null,"151","55",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsIrbBsc");
            obj.set_cssclass("grd_SR_List");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:bizOrgtNm\" displaytype=\"decoratetext\" textAlign=\"left\"/><Cell col=\"1\" text=\"내용보기\" cssclass=\"Cell_Grd_Btn\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" accessibilitydescription=\"상세화면전환\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnIrbMore",null,"501","70",null,"55","grdIrbList:16",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("더보기");
            obj.set_cssclass("btn_SR_More");
            obj.set_accessibilitylabel("국제감축사업현황더보기");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnArea","55","13","563","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","0","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("0");
            obj.set_text("통합검색");
            obj.set_cssclass("btn_Board_TabMenu_on");
            obj.set_accessibilitylabel("통합검색");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnAgrStipl","141","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("1");
            obj.set_text("협정·약정 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("협정약정현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnMhdlg","282","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("2");
            obj.set_text("방법론 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("방법론현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnIrb","423","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("3");
            obj.set_text("국제감축사업 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("국제감축사업현황");
            this.divBtnArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnArea.form
            obj = new Layout("default","",0,0,this.divBtnArea.form,function(p){});
            this.divBtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SearchCmmInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 통합검색 목록화면
        * FILE NAME     : SearchCmmInfoM00.xfdl
        * DESCRIPTION   : 정보공개 통합검색 목록화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.12    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";


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
        	trace("[DataBoardM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;

        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Frame.js > gfnCallOpenMenu, gfnOpenMenu  => frameWork > fnCallOpenedForm 에서 호출
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleScript][fnParamInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1+"\nthis.fvArgRecv.objDs:"+this.fvArgRecv.objDs.saveXML());

        	// TODO
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// TODO
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		switch (nErrCode)
        		{
        			case -1 :
        				// 후처리 코드

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "IosutdioList" :

        			break;
        		default:
        			break;
        	}
        };


        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };


        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnSearch(); // 조회함수호출
        };

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
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

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {

         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "IosutdioList";
          	objArgs.url 			= "/common/selectIostuioSearchList.irs";
          	objArgs.inds			= "dsSrh=dsSrh";
          	objArgs.outds			= "dsIrbBsc=dsIrbBsc dsMhdlgBsc=dsMhdlgBsc dsAgrStiplBsc=dsAgrStiplBsc"
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {

        	// TODO


        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'search',objArgs.search);
        	this.dsSrh.setColumn(0,'pageInfo',1);
        	// 상세 호출
        	this.fnSearch();
        }

        this.fnBtnChange = function()
        {
        	this.divBtnArea.form.btnAll.set_cssclass("btn_Board_TabMenu_on");
        	this.divBtnArea.form.btnAgrStipl.set_cssclass("btn_Board_TabMenu")
        	this.divBtnArea.form.btnMhdlg.set_cssclass("btn_Board_TabMenu")
        	this.divBtnArea.form.btnIrb.set_cssclass("btn_Board_TabMenu")
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */

        this.grdAgrStiplList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var objArgs = {};
        		objArgs.cncldMgno = this.dsAgrStiplBsc.getColumn(e.row,'cncldMgno');
        		objArgs.cncldDgr = this.dsAgrStiplBsc.getColumn(e.row,'cncldDgr');
        		objArgs.prePage = 'SearchCmmInfoM00';
        		this.getOwnerFrame().form.fnAgrStiplInfoDtlCall(objArgs);
        	}
        };

        this.grdMhdlgList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var objArgs = {};
        		objArgs.mhdlgMgno = this.dsMhdlgBsc.getColumn(e.row,'mhdlgMgno');
        		objArgs.mhdlgDgr = this.dsMhdlgBsc.getColumn(e.row,'mhdlgDgr');
        		objArgs.prePage = 'SearchCmmInfoM00';
        		this.getOwnerFrame().form.fnMhdlgInfoDtlCall(objArgs);
        	}
        };

        this.grdIrbList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var objArgs = {};
        		objArgs.bizMgno = this.dsIrbBsc.getColumn(e.row,'bizMgno');
        		objArgs.vldBizDgr = this.dsIrbBsc.getColumn(e.row,'vldBizDgr');
        		objArgs.prePage = 'SearchCmmInfoM00';
        		this.getOwnerFrame().form.fnIrbInfoDtlCall(objArgs);
        	}
        };

        this.divSearch_edtSrhNm_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);
        		this.dsSrh.setColumn(0, "srhNm", this.divSearch.form.edtSrhNm.text);
        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnSearch();
        	}
        };




        this.divBtnArea_btnAll_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoM00");
        };

        this.divBtnArea_btnAgrStipl_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "agrStipl";
        	objArgs.search = this.dsSrh.getColumn(0,'search');
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.divBtnArea_btnMhdlg_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "mhdlg";
        	objArgs.search = this.dsSrh.getColumn(0,'search');
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.divBtnArea_btnIrb_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "irb";
        	objArgs.search = this.dsSrh.getColumn(0,'search');
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.btnMhdlgMore_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staAgrStiplTitle.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.grdAgrStiplList.addEventHandler("oncellclick",this.grdAgrStiplList_oncellclick,this);
            this.btnAgrStiplMore.addEventHandler("onclick",this.divBtnArea_btnAgrStipl_onclick,this);
            this.staMhdlgTitle.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.grdMhdlgList.addEventHandler("oncellclick",this.grdMhdlgList_oncellclick,this);
            this.btnMhdlgMore.addEventHandler("onclick",this.divBtnArea_btnMhdlg_onclick,this);
            this.staIrbTitle.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.grdIrbList.addEventHandler("oncellclick",this.grdIrbList_oncellclick,this);
            this.btnIrbMore.addEventHandler("onclick",this.divBtnArea_btnIrb_onclick,this);
            this.divBtnArea.addEventHandler("onclick",this.divBtnArea_onclick,this);
            this.divBtnArea.form.btnAll.addEventHandler("onclick",this.divBtnArea_btnAll_onclick,this);
            this.divBtnArea.form.btnAgrStipl.addEventHandler("onclick",this.divBtnArea_btnAgrStipl_onclick,this);
            this.divBtnArea.form.btnMhdlg.addEventHandler("onclick",this.divBtnArea_btnMhdlg_onclick,this);
            this.divBtnArea.form.btnIrb.addEventHandler("onclick",this.divBtnArea_btnIrb_onclick,this);
        };
        this.loadIncludeScript("SearchCmmInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
