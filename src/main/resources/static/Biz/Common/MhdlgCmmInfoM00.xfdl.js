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
            this.set_titletext("정보공개 방법론 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsSn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"pstatNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstatCn\" type=\"STRING\" size=\"256\"/><Column id=\"flmno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"typeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhNm\" type=\"STRING\" size=\"256\"/><Column id=\"GbCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","150","0",null,"94","150",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSrhNm","218","31",null,"32","187",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSrh","35","31","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboSrh_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSrh_innerdataset", obj);
            divSearch_form_cboSrh_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">nm</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">cn</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSrh_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","155","175",null,null,"155","108",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"600\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"조회수\"/><Cell col=\"3\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:pstatNm\" tooltiptext=\"bind:pstatNm\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:inqCnt\" tooltiptext=\"bind:inqCnt\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:regDt\" tooltiptext=\"bind:regDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTotCnt","155",null,"140","32",null,"grdList:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","155","grdList:30",null,"21","155",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Button("btnDataReg",null,null,"85","32","155","grdList:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div00","160","55","483","220",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("방법론목록");
            obj.set_background("green");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSrhNm","value","dsSrh","srhNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSrh","value","dsSrh","GbCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MhdlgCmmInfoM00.xfdl","");
        this.registerScript("MhdlgCmmInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleScript Form
        * FILE NAME     : sampleScript.xfdl
        * DESCRIPTION   : 스크립트 기본
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.XX.XX    홍길동	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";
        this.roleIdMgno = this.fvApp.User.roleIdMgno;

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
        	this.getOwnerFrame().form.fnLoadComplete('MhdlgInfoM00');

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
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
        		case "DataBoard" :
        			// 후처리 코드
        			this.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divSearch.form.cboSrh.set_index(0);
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			this.grdList.setFocus();
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

        	/*
        	// 반환값에 대한 처리 방법 샘플
        	// 반환받은 값 받아온다.
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	// 1. 반환받은 값 전체
        	for ( var p in objRtnValue ) {
        		if( typeof this.gfnGetParameter(this, objRtnValue[p]) == 'function') continue;	//function이 아닌것만...
        		trace(this.gfnFormat("{0}={1}", p, objRtnValue[p]));
        	}

        	// 2. objct의 property name은 팝업창에서 선언한 동일한 파라미터명으로 받는다
        	if (!this.gfnIsNull(objRtnValue["pvStrNm"]))	this.edtName.set_value(objRtnValue["pvStrNm"]);	// pvStrNm은 팝업에서 전달
        	if (!this.gfnIsNull(objRtnValue["pvDataset"]))	this.dsList.copyData(objRtnValue["pvDataset"]);


        	// Object 반환(문자열 & 데이타셋) 시 pvDataset2 가 빈값이 아니면
        	if (!this.gfnIsNull(objRtnValue["pvDataset2"])) {
        		this.dsParam.copyData(objRtnValue["pvDataset2"]);

        		// 반환받은 데이타셋을 그리드에 바인드 시키기
        		this.grdParam.createFormat();
        		for ( var i=0; i<this.grdParam.getCellCount("body"); i++ ) {
        			this.grdParam.setCellProperty("body", i, "edittype", "normal");
        		}
        	}

        	//
        	this.txtReturn.set_value("전달받은 내용 >>>> \n" +
        	                        " pvRtnValue : "+ objRtnValue["pvRtnValue"] +"\n"+
        	                        " pvStrNm : "+this.gfnEmpty(objRtnValue["pvStrNm"],"") +"\n"+
        	                        " pvDataset : "+this.gfnEmpty(objRtnValue["pvDataset"],"")
        							);
        	*/
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /*
         // objArgs				- transaction arguments
         svcId    				transaction을 구분하기 위한 svc ID 문자열
         url	     			transaction을 요청할 주소,  서버측 Service 주소 문자열
         inds     				입력값으로 보낼 Dataset, a=b형태로 실제이름과 입력이름을 매칭
         outds    				처리 결과를 받을 Dataset,
         args	 				입력값으로 보낼 arguments, 변수=값을 빈칸으로 구분한다. strFormData='20220816'
         callback 				transaction의 결과를 받을 callback 함수 (ex. fnCallback)
         async    				비동기 여부(true: Async (Default), false : Sync), 생략하면 비동기
         dataType 				전송할 형태를 지정합니다.  0(XML 타입),1(Binary 타입), 2(SSV 타입) , 3(JSON 타입, Default)
         compress 				통신시 PostData를 압축할지 여부를 지정합니다. Default : false
         httptimeout			Http통신시 Wait Time(초)를 설정합니다. Default : this.Tran.defaultHttptimeout
         setWaitCursorYn		화면에 Wait Cursor의 표시 여부 (Y - 표시 (Default) / N - 표시안함) , setWaitCursor method 활용
         commCodeSvcId			공통코드조회 개발자의 서비스 ID (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeSearchDsNm 	공통코드조회 서비스 호출시 조회정보 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeResultDsNm 	공통코드조회 서비스 호출시 수신받을 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
        */

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {

        // 	// 공통Transaction 호출
        //  	var objArgs = {};
        //  	objArgs.svcId 			= "DataBoard";
        //  	objArgs.url 			= "/common/board/selectBoardList.irs";
        //  	objArgs.inds			= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
        //  	objArgs.outds			= "dsList=dsList dsPageInfo=dsPageInfo"
        //  	objArgs.args 			= "";
        //  	objArgs.callback		= "fnCallback";
        //
        //  	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[DataBoardM00]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	var bbsGroupMgno = objArgs.bbsGroupMgno
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'bbsGroupMgno',bbsGroupMgno);
        	this.divSearch.form.cboSrh.set_index(0);
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.btnDataReg.set_visible(true);
        	}else
        	{
        		this.btnDataReg.set_visible(false);
        	}
        	this.fnSearch();

        	// 상세 호출
        }

        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//전체관리자, 관장기관, 외교부 권한 순
        	if(roleIdMgno == "RL00000001" || roleIdMgno == "RL00000002" || roleIdMgno == "RL00000006")
        	{
        		return true;
        	//그 외 권한
        	}else
        	{
        		return false;
        	}
        }



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */


        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        this.btnDataReg_onclick = function(obj,e)
        {
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		var objArgs ={};
        		objArgs.bbsGroupMgno = this.dsSrh.getColumn(0,"bbsGroupMgno");
        		objArgs.sts = "REG"
        		this.getOwnerFrame().form.fnDataBoardRegCall(objArgs);
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}

        };


        this.grdList_oncellclick = function(obj,e)
        {
        		if(e.col == 1)
        	{
        		var objArgs ={};
        		objArgs.bbsGroupMgno = this.dsList.getColumn(e.row,"bbsGroupMgno");
        		objArgs.bbsSn = this.dsList.getColumn(e.row,"bbsSn");
        		this.getOwnerFrame().form.fnDataBoardDtlCall(objArgs);
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtSrhNm.addEventHandler("onkeydown",this.divSearch_edtSrhNm_onkeydown,this);
            this.divSearch.form.cboSrh.addEventHandler("canitemchange",this.divSearch_cboSrh_canitemchange,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.btnDataReg.addEventHandler("onclick",this.btnDataReg_onclick,this);
        };
        this.loadIncludeScript("MhdlgCmmInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
