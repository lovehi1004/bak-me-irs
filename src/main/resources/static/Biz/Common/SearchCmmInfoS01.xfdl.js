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


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"mgno\" type=\"STRING\" size=\"256\"/><Column id=\"dgr\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","55","68",null,"30","1256",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협정·약정 현황");
            obj.set_cssclass("sta_SR_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","55","staTitle:14",null,null,"55","75",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cssclass("grd_SR_List");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:nm\" tooltiptext=\"bind:nm\" displaytype=\"decoratetext\" textAlign=\"left\"/><Cell col=\"1\" text=\"내용보기\" cssclass=\"Cell_Grd_Btn\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px\" accessibilitydescription=\"상세화면전환\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnArea","55","13","566","35",null,null,null,null,null,null,this);
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

            obj = new Div("divPaging","55","grdList:25",null,null,"55","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnArea.form
            obj = new Layout("default","",0,0,this.divBtnArea.form,function(p){});
            this.divBtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SearchCmmInfoS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 통합검색 상세화면
        * FILE NAME     : SearchCmmInfoS01.xfdl
        * DESCRIPTION   : 정보공개 통합검색 상세화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.27    조성현	     최초생성
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
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
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
        		case "IosutdioAgrStiplList" :
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			this.grdList.setCellProperty('body', 0 , 'text', "bind:cncldOrgtNm");

        			break;
        		case "IosutdioMhdlgList" :
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			this.grdList.setCellProperty('body', 0 , 'text', "bind:mhdlgOrgtNm");

        			break;
        		case "IosutdioIrbList" :
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			this.grdList.setCellProperty('body', 0 , 'text', "bind:bizOrgtNm");

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
        	this.fnSearch(this.dsSrh.getColumn(0,'flag')); // 조회함수호출
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
        this.fnSearch = function(flag)
        {
        	var url = '';
        	var svcId = '';
        	if(flag == 'agrStipl')
        	{
        		url ='/common/selectIostuioSearchAgrStiplList.irs';
        		svcId = 'IosutdioAgrStiplList';
        	}else if(flag == 'mhdlg')
        	{
        		url ='/common/selectIostuioSearchMhdlgList.irs';
        		svcId = 'IosutdioMhdlgList';
        	}else if(flag == 'irb')
        	{
        		url ='/common/selectIostuioSearchIrbList.irs'
        		svcId = 'IosutdioIrbList';
        	}

         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= svcId;
          	objArgs.url 			= url;
          	objArgs.inds			= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
          	objArgs.outds			= "dsList=dsList dsPageInfo=dsPageInfo"
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
        	trace(objArgs.flag,objArgs.search);
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsPageInfo.clearData();
        	this.dsPageInfo.addRow();
        	this.dsPageInfo.setColumn(0,'pageNo',1);
        	this.dsPageInfo.setColumn(0,'listSize',10);
        	// 상세 호출

        	var  flag = "";
        	if(!this.gfnIsNull(objArgs.flag))
        	{
        		flag = objArgs.flag;
        		this.dsSrh.setColumn(0,'flag',objArgs.flag);
        	}
        	if(!this.gfnIsNull(objArgs.search))
        	{
        		this.dsSrh.setColumn(0,'search',objArgs.search);
        	}

        	if(flag == 'agrStipl')
        	{
        		this.divBtnArea.form.btnAgrStipl.set_cssclass("btn_Board_TabMenu_on");
        		this.divBtnArea.form.btnAll.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnMhdlg.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnIrb.set_cssclass("btn_Board_TabMenu");
        		this.staTitle.set_text("협정·약정 현황");
        		this.resetScroll();
        	}else if (flag == 'mhdlg')
        	{
        		this.divBtnArea.form.btnMhdlg.set_cssclass("btn_Board_TabMenu_on");
        		this.divBtnArea.form.btnAgrStipl.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnAll.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnIrb.set_cssclass("btn_Board_TabMenu");
        		this.staTitle.set_text("방법론 현황");
        		this.resetScroll();
        	}else if (flag == 'irb')
        	{
        		this.divBtnArea.form.btnIrb.set_cssclass("btn_Board_TabMenu_on");
        		this.divBtnArea.form.btnMhdlg.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnAgrStipl.set_cssclass("btn_Board_TabMenu");
        		this.divBtnArea.form.btnAll.set_cssclass("btn_Board_TabMenu");
        		this.staTitle.set_text("국제감축사업 현황");
        		this.resetScroll();
        	}
        	if(!this.gfnIsNull(this.dsSrh.getColumn(0,'search')))
        	{
        		this.fnSearch(flag);
        	}
        }


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */

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

        this.divBtnArea_btnAgrStipl_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "agrStipl";
        	var search = this.dsSrh.getColumn(0,'search');

        	if(this.gfnIsNull(search))
        	{
        		objArgs.search = this.getOwnerFrame().form.edtSearch.text;
        	}else
        	{
        		objArgs.search = search;
        	}
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.divBtnArea_btnMhdlg_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "mhdlg";
        	var search = this.dsSrh.getColumn(0,'search');

        	if(this.gfnIsNull(search))
        	{
        		objArgs.search = this.getOwnerFrame().form.edtSearch.text;
        	}else
        	{
        		objArgs.search = search;
        	}
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.divBtnArea_btnIrb_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        	var objArgs = {};
        	objArgs.flag = "irb";

        	var search = this.dsSrh.getColumn(0,'search');

        	if(this.gfnIsNull(search))
        	{
        		objArgs.search = this.getOwnerFrame().form.edtSearch.text;
        	}else
        	{
        		objArgs.search = search;
        	}
        	this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        };

        this.divBtnArea_btnAll_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoM00");
        	this.getOwnerFrame().form.divSearchCmmInfoM00.form.fnBtnChange();
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var flag = this.dsSrh.getColumn(0,'flag');
        		var objArgs = {};
        		if(flag == 'agrStipl')
        		{
        			objArgs.cncldMgno = this.dsList.getColumn(0,'cncldMgno');
        			objArgs.dgrMgno = this.dsList.getColumn(0,'CncldDgr');
        			objArgs.prePage = 'SearchCmmInfoS01';
        			this.getOwnerFrame().form.fnAgrStiplInfoDtlCall(objArgs);
        		}else if (flag == 'mhdlg')
        		{
        			objArgs.mhdlgMgno = this.dsList.getColumn(0,'mhdlgMgno');
        			objArgs.mhdlgDgr = this.dsList.getColumn(0,'mhdlgDgr');
        			objArgs.prePage = 'SearchCmmInfoS01';
        			this.getOwnerFrame().form.fnMhdlgInfoDtlCall(objArgs);
        		}else if (flag == 'irb')
        		{
        			objArgs.bizMgno = this.dsList.getColumn(0,'bizMgno');
        			objArgs.vldBizDgr = this.dsList.getColumn(0,'vldBizDgr');
        			objArgs.prePage = 'SearchCmmInfoS01';
        			this.getOwnerFrame().form.fnIrbInfoDtlCall(objArgs);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staTitle.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divBtnArea.addEventHandler("onclick",this.divBtnArea_onclick,this);
            this.divBtnArea.form.btnAll.addEventHandler("onclick",this.divBtnArea_btnAll_onclick,this);
            this.divBtnArea.form.btnAgrStipl.addEventHandler("onclick",this.divBtnArea_btnAgrStipl_onclick,this);
            this.divBtnArea.form.btnMhdlg.addEventHandler("onclick",this.divBtnArea_btnMhdlg_onclick,this);
            this.divBtnArea.form.btnIrb.addEventHandler("onclick",this.divBtnArea_btnIrb_onclick,this);
        };
        this.loadIncludeScript("SearchCmmInfoS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
