(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComCdM00");
            this.set_cssclass("frm_WF_Frame");
            this.set_titletext("오류메시지 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgClNm\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"inptCnt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhErrMsgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhErrMsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhErrMsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhUseYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaticYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErrMsgClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","31","65","31",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSearch:3",null,"32","31",null,"31",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staIataNtnCd","35","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("오류메시지코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("오류메시지코드");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnKornNm","385","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("오류메시지구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("오류메시지구분");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtErrMsgCd","staIataNtnCd:0","30",null,"32","staNtnKornNm:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("국가한글명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("오류메세지코드");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnEngNm","735","30","140","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("오류메세지명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("오류메세지명");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtErrMsgNm","staNtnEngNm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("국가영문명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("오류메세지명");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staDelYn","edtErrMsgNm:30","30","105","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사용여부");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staDelYn:0","30","100","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsStaticYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사용여부");
            obj.set_accessibilitylabel("사용여부");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboErrMsgClCd","staNtnKornNm:0","30",null,"30","staNtnEngNm:30",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsErrMsgClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("오류메세지구분");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","30","1400",null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"122\"/><Column size=\"133\"/><Column size=\"102\"/><Column size=\"48\"/><Column size=\"167\"/><Column size=\"103\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"오류메세지코드\" tooltiptext=\"오류메세지코드\"/><Cell col=\"2\" text=\"오류메시지구분명\" tooltiptext=\"오류메시지구분명\"/><Cell col=\"3\" text=\"메시지국가코드\" tooltiptext=\"오류메시지국가코드\"/><Cell col=\"4\" text=\"입력수\" tooltiptext=\"입력수\"/><Cell col=\"5\" text=\"오류메세지명\" tooltiptext=\"오류메세지명\"/><Cell col=\"6\" text=\"사용여부\" tooltiptext=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:errMsgCd\" tooltiptext=\"bind:errMsgCd\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:errMsgClNm\" tooltiptext=\"bind:errMsgClNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:errMsgNtnCd\" tooltiptext=\"bind:errMsgNtnCd\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:inptCnt\" tooltiptext=\"bind:inptCnt\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:errMsgNm\" tooltiptext=\"bind:errMsgNm\"/><Cell col=\"6\" text=\"bind:useYn\" tooltiptext=\"bind:useYn\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnUpt",null,null,"75","32","btnExcelDown:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tooltiptext("수정");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"75","32","btnUpt:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tooltiptext("등록");
            this.divList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtErrMsgClCd","value","dsSrh","srhErrMsgClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtErrMsgCd","value","dsSrh","srhErrMsgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtErrMsgNm","value","dsSrh","srhErrMsgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboUseYn","value","dsSrh","srhUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.cboErrMsgClCd","value","dsSrh","srhErrMsgClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ErrMsgM00.xfdl","");
        this.registerScript("ErrMsgM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : ErrMsgM00 Form
        * FILE NAME     : ErrMsgM00.xfdl
        * DESCRIPTION   : 오류메세지 관리
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.XX.XX    김광용	     최초생성
        ***********************************************************************************/


        /*
         1. 모든 화면에 동일하게 필요한 Comment
        	1.Include Common Library
        	2.Form 변수 선언
        	3.Form Event Area
        	4.Callback 처리 Area (Transaction, Popup)
        	5.CRUD 및 Transaction 서비스 호출 처리 Area
        	6.User Function Area
        	7.Component Event Area

         2. 모든 화면의 초기 이벤트는 아래 3가지 이벤트에 맞춰 적절히 코딩을 한다.
           - oninit	: Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
        		Form 내부의 모든 컴포넌트가 생성되면 oninit 이벤트가 발생합니다
        		컴포넌트의 초기 위치 조정 등 코드 기술
        		Grid 의 griduserproperty 추가를 Property 창이 아닌 script 로 처리하고자 할 경우

           - onload	: Form 에 등록된 모든 컴포넌트와 데이터가 로드된 후 발생하는 이벤트입니다.
        		Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면 onload 이벤트가 발생합니다.
        		gfnSetFormInit() 호출

           - fnFormInit : 공통(gfnSetFormInit)의 처리 작업 후 호출되는 콜백함수, 개발자의 초기작업 코드 기술
        		공통코드 조회 , 공통달력 관련 초기화 호출 등.

         3. 모든 화면 onload 시 초기화 공통함수 gfnSetFormInit() 호출한다.
           - this.gfnSetFormInit(obj);
           - form onload 후 실행될 로직이 있다면 callback 함수(두번째 인자)를 정의하여 실행되게 한다.
             ex) this.gfnSetFormInit(obj, "fnFormInit");

          4. Grid 에 표시할 데이터가 없을 때 출력할 정보
           - nodatatext : 데이터가 없습니다.

        */


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

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
        	// TODO

        	// Grid 의 griduserproperty 추가를 Property 창이 아닌 script 로 처리하고자 할 경우
        	// form_onload > gfnSetFormInit 함수 호출 이전에 셋팅하여 준다.
        	// this.grdList03.griduserproperty = "!colfix,!rowfix,!filter,!colhide,!find,!copy,!initial";
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
        	trace("[ComCdM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");



        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsErrMsgClCd", groupId:"ERR_MSG_CL_CD", headflag:"A" , useYn:"Y"};
        	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 검색용 데이터셋 초기화
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.fnClearDsSrh(); 									//검색조건 초기화

        	this.fnCallSearchList();
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
        this.form_onkeyup = function(obj,e)
        {
        	// 팝업에서 취소시 닫기 기능용
        	if( e.keycode == 27 )				// ESC
        	{
        		this.close("CANCEL");
        	}
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

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
        		case "ErrMsgP01" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			// 오류메시지 등록 팝업에서 등록 처리 후 재조회
        			if(objRtnValue["isReLoad"] == "Y") {
        				this.fnReload();			// 재조회
        			}

        			break;
        		case "ErrMsgP02" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			// 오류메시지 수정 팝업에서 저장 또는 삭제 처리 후 재조회
        			if(objRtnValue["isReLoad"] == "Y") {
        				var errMsgCd = "";
        				if(!this.gfnIsNull(objRtnValue["errMsgCd"])) {
        					errMsgCd = objRtnValue["errMsgCd"];
        				}

        				this.fnReload(errMsgCd);			// 재조회
        			}

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
        		case "searchList" :
        			var totalCnt = this.dsList.rowcount;
        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(totalCnt,0))+"</fc> 건");
        			break;
        		default:
        			break;
        	}
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
         * @description 목록조회
         */
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
        	objArgs.url 			= "/adm/cd/errMsg/selectErrMsgList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsList=dsList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        // User Function Area - 사용자 정의 함수는 fnXxxx() 형태로 작성  + 기본 이벤트 function
        /**
         * @desc 사용자 함수
         * 1. 보충설명
         *
         * @param {Grid} obj 그리드
         * @param {GridClickEventInfo} e 이벤트
         * @return {boolean} true
         * @example/public
        */
        // this.fnUserFunction = function()
        // {
        //
        // };

        /**
         * @desc 검색용 데이터셋 초기화 function
        */
        this.fnClearDsSrh = function()
        {
        	this.dsSrh.setColumn(0, "srhErrMsgClCd", "");
        	this.dsSrh.setColumn(0, "srhErrMsgCd", "");
        	this.dsSrh.setColumn(0, "srhErrMsgNm", "");
        	this.dsSrh.setColumn(0, "srhUseYn", "");
        	this.fnCallSearchList();
        };

        /**
         * @desc 재조회
        */
        this.fnReload = function(errMsgCd)
        {
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();

        	if(!this.gfnIsNull(errMsgCd)) {
        		this.dsSrh.setColumn(0, "srhErrMsgCd", errMsgCd);
        	} else {
        		this.dsSrh.setColumn(0, "srhErrMsgCd", "");
        	}
        	this.dsSrh.setColumn(0, "srhErrMsgClCd", "");
        	this.dsSrh.setColumn(0, "srhErrMsgNm", "");
        	this.dsSrh.setColumn(0, "srhUseYn", "");
        	this.fnCallSearchList();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */


        /**
         * @description enter 키 입력시 검색
        */
        this.fnSearch = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divList_divSearch_btnSearch_onclick();
        	}
        };

        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.fnClearDsSrh();
        };

        /**
         * @description 등록 버튼 클릭
        */
        this.divList_btnReg_onclick = function(obj,e)
        {
        	// MN06061200 오류메시지 등록 팝업 - ErrMsgP01
        	var sPopupId 	= "ErrMsgP01";
        	var sMnuId 		= "MN06061200";
        	var oPosition	= {width:590,height:412};
        	var objArgs		= {};

        	var oOption		= {callback:"fnPopupCallback",titletext:"오류메시지 등록"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        /**
         * @description 수정 버튼 클릭
        */
        this.divList_btnUpt_onclick = function(obj,e)
        {
        	// MN06061300 오류메시지 수정 팝업 - ErrMsgP02
        	var selectedRows = this.divList.form.grdList.getSelectedRows();

        	trace("[selectedRows]["+JSON.stringify(selectedRows)+"][size]["+selectedRows.length+"]");

        	if(selectedRows.length == 0) {
        		// 선택된 행이 없음
        		this.gfnShowMessage(this, ["Alert","오류메시지 목록에서 수정할 오류메시지를 선택하세요."], "");
        	} else {
        		var errMsgCd = this.dsList.getColumn(selectedRows[0], "errMsgCd");

        		var sPopupId 	= "ErrMsgP02";
        		var sMnuId 		= "MN06061300";
        		var oPosition	= {width:590,height:412};
        		var objArgs		= {pvErrMsgCd : errMsgCd};

        		var oOption		= {callback:"fnPopupCallback",titletext:"오류메시지 수정"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        	}
        };

        /**
         * @description 엑셀다운로드 버튼 클릭
        */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/cd/errMsg/selectErrMsgExcel.irs";

        	this.fdtExcel.set_url(url);
        	this.fdtExcel.setPostData("downloadExcelFileNm","오류메시지목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","오류메시지목록내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.edtErrMsgCd.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtErrMsgCd.addEventHandler("onchanged",this.divList_divSearch_edtErrMsgClNm_onchanged,this);
            this.divList.form.divSearch.form.edtErrMsgNm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.cboUseYn.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnUpt.addEventHandler("onclick",this.divList_btnUpt_onclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
        };
        this.loadIncludeScript("ErrMsgM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
