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
            this.set_titletext("법령과지침 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"pstatNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstatCn\" type=\"STRING\" size=\"256\"/><Column id=\"flmno\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"typeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBoardInfo","155","0",null,"500","155",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1_00","0","0",null,"44","0",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Edit("edtPstatNm00","157","7",null,"30","7",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_text("");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("staRegTypeNm00","0","0","150","44",null,null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","staUsrInfoL1_00:-1",null,"197","0",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","staRegTypeNm00:-1","150","197",null,null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","sta07_00_00_00:-1",null,"207","0",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","sta08_00_00_00_00:-1","150","207",null,null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Button("btnList",null,"sta07_00_00_00_00:20","75","32","0",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("8");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Button("btnInsert",null,"sta07_00_00_00_00:20","75","32","btnList:3",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new TextArea("txaPstatCn","157","50",null,"183","7",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_readonly("false");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"sta07_00_00_00_00:20","75","32","btnInsert:3",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Div("divEtcMultiFile","157","247","800","190",null,null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("12");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divBoardInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","0",null,null,null,null,null,this.divBoardInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divBoardInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBoardInfo.form.divEtcMultiFile
            obj = new Layout("default","",0,0,this.divBoardInfo.form.divEtcMultiFile.form,function(p){});
            this.divBoardInfo.form.divEtcMultiFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBoardInfo.form
            obj = new Layout("default","",0,0,this.divBoardInfo.form,function(p){});
            this.divBoardInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBoardInfo.form.edtPstatNm","value","dsBbsInfo","pstatNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBoardInfo.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBoardInfo.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBoardInfo.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBoardInfo.form.edtCncldKrnNm","value","dsBbsInfo","regDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBoardInfo.form.edtCncldOrgtNm","value","dsBbsInfo","bbsGroupMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBoardInfo.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBoardInfo.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBoardInfo.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBoardInfo.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBoardInfo.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBoardInfo.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divBoardInfo.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divBoardInfo.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divBoardInfo.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divBoardInfo.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divBoardInfo.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divBoardInfo.form.edtRegTypeNm","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divBoardInfo.form.edtSgntYmd","value","dsBbsInfo","pstatNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divBoardInfo.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divBoardInfo.form.edtntlNm","value","dsBbsInfo","flmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divBoardInfo.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divBoardInfo.form.edtCncldNo","value","dsBbsInfo","typeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divBoardInfo.form.edtEftvnYmd","value","dsBbsInfo","inqCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divBoardInfo.form.rdo00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divBoardInfo.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divBoardInfo.form.edtMou","value","dsBbsInfo","typeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divBoardInfo.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divBoardInfo.form.edtPostPstatNm","value","dsBbsInfo","postPstatNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divBoardInfo.form.edtRrePstatNm","value","dsBbsInfo","prePstatNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divBoardInfo.form.edtPstatNm00","value","dsBbsInfo","pstatNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divBoardInfo.form.rdoTypeCd","value","dsMhdlgDetail","aplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divBoardInfo.form.cboTypeCd","value","dsSrh","srhAplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LNGBoardS02.xfdl","");
        this.registerScript("LNGBoardS02.xfdl", function() {
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
        	trace("[sampleScript]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;

        	var objParam1 = { objDs:this.dsBbsInfo							// 바인딩 데이터셋
        					,sBindCol:"flmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"flmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        				   };
        	this.divBoardInfo.form.divEtcMultiFile.form.fnInitRaonK(this, objParam1);
        	this.getOwnerFrame().form.fnLoadComplete('LNGBoardS02');


        	/*
        	// 권한 확인
        	// Lib_Constants.xjs > objAuth 키값 참고
        	// 권한 Y/N 정보로 업무화면의 내부버튼 제어가 필요할때 사용 , 권한은 gdsMenu 의 각 권한 컬럼 정보로 gfnSetFormInit 호출시 셋팅되어짐.
        	var sRtn = this.gfnGetAuth(this, "InqAuthrt");		// 조회권한 Y/N
        	trace("sRtn:"+sRtn);
        	*/
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
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "flmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				this.dsBbsFile.clearData();
        				var nRowCnt = this.dsBbsFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "DELETE")
        			{
        				this.dsBbsFile.clearData();
        				var nRowCnt = this.dsBbsFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsBbsFile.clearData();
        				var nRowCnt = this.dsBbsFile.copyData(objRtn.objDs);
        			}
        			break;
        		default :
        			break;
        	}
        };
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
        		case "updateLNGBoard" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.fnFormChange();
        			break;
        		case "insertLNGBoard":
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.fnFormChange();
        			break;
        		case "LNGBoardDtl" :
        			var flmno = this.dsBbsInfo.getColumn(0,'flmno');
        			this.divBoardInfo.form.divEtcMultiFile.form.fnSearchFile(flmno);
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

        // 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "LNGBoardDtl";
         	objArgs.url 			= "/common/board/selectBoardDtl.irs";
         	objArgs.inds			= "dsBbsInfo=dsBbsInfo";
         	objArgs.outds			= "dsBbsInfo=dsBbsInfo"
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";


         	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnUpdate = function()
        {

        // 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "updateLNGBoard";
         	objArgs.url 			= "/common/board/updateBoardDtl.irs";
         	objArgs.inds			= "dsBbsInfo=dsBbsInfo dsBbsFile=dsBbsFile";
         	objArgs.outds			= "dsBbsInfo=dsBbsInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

         	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnInsert = function()
        {

        // 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "insertLNGBoard";
         	objArgs.url 			= "/common/board/insertBoardDtl.irs";
         	objArgs.inds			= "dsBbsInfo=dsBbsInfo dsBbsFile=dsBbsFile";
         	objArgs.outds			= "dsBbsInfo=dsBbsInfo";
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
        	trace("[LNGBoardS02]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	this.dsBbsInfo.clearData();
        	this.dsBbsInfo.addRow();
        	trace("=========================objArgs.bbsSn = " + objArgs.bbsSn +" objArgs.bbsGroupMgno = " + objArgs.bbsGroupMgno + "=========================");
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		if(objArgs.sts == 'MOD')
        		{
        			this.dsBbsInfo.setColumn(0,'bbsSn',objArgs.bbsSn);
        			this.dsBbsInfo.setColumn(0,'bbsGroupMgno',objArgs.bbsGroupMgno);
        			this.divBoardInfo.form.btnInsert.set_width(-3);
        			this.divBoardInfo.form.btnUpdate.set_width(75);
        			this.fnSearch();
        		}else if(objArgs.sts == 'REG')
        		{
        			this.dsBbsInfo.setColumn(0,'bbsGroupMgno',objArgs.bbsGroupMgno);
        			this.divBoardInfo.form.btnInsert.set_width(75);
        			this.divBoardInfo.form.btnUpdate.set_width(-3);
        			this.divBoardInfo.form.divEtcMultiFile.form.fnSearchFile('');
        		}
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];
        		this.gfnShowMessage(this, sMsgCode);
        		this.getOwnerFrame().form.fnLNGBoardCall();
        	}

        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */

        //수정
        this.divBoardInfo_btnUpdate_onclick = function(obj,e)
        {
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.fnUpdate();
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}
        };

        //저장
        this.divBoardInfo_btnInsert_onclick = function(obj,e)
        {
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.fnInsert();
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}
        };

        this.fnFormChange = function()
        {
        	var objArgs ={};
        	objArgs.bbsGroupMgno = this.dsBbsInfo.getColumn(0,"bbsGroupMgno");
        	objArgs.bbsSn = this.dsBbsInfo.getColumn(0,"bbsSn");
        	trace("==========objArgs.bbsGroupMgno =" + objArgs.bbsGroupMgno + " objArgs.bbsSn = " + objArgs.bbsSn + "==========");
        	this.getOwnerFrame().form.fnLNGBoardDtlCall(objArgs);
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
        this.divBoardInfo_btnList_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnLNGBoardCall()
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divBoardInfo.form.sta08_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divBoardInfo.form.btnList.addEventHandler("onclick",this.divBoardInfo_btnList_onclick,this);
            this.divBoardInfo.form.btnInsert.addEventHandler("onclick",this.divBoardInfo_btnInsert_onclick,this);
            this.divBoardInfo.form.btnUpdate.addEventHandler("onclick",this.divBoardInfo_btnUpdate_onclick,this);
        };
        this.loadIncludeScript("LNGBoardS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
