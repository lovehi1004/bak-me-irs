(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzentMngS01");
            this.set_cssclass("frm_WF_Frame");
            this.set_titletext("개인정보열람이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"sysClCd\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"prslYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prslHr\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"prslRsn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"srhLgnId\" type=\"STRING\" size=\"256\"/><Column id=\"srhFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"srhPrslYmdFrom\" type=\"STRING\" size=\"256\"/><Column id=\"srhPrslYmdTo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsInstCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","5","0",null,"90","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","29",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            obj.set_taborder("2");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","btnRefresh:3","29",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staoCmptncInstNo","35","30","100","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관장기관 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("관장기관");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCmptncInstNo","staoCmptncInstNo:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsInstCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("업체분류");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staLgnId","cboCmptncInstNo:30","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용자아이디 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사용자아이디");
            obj.set_fittocontents("width");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staFlnm","edtLgnId:30","30","100","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사용자명 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사용자명");
            obj.set_fittocontents("width");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:0","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_textAlign("left");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrslYmd","edtFlnm:30","29","100","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용일시 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("사용일시 ");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","staPrslYmd:0","30","252","30",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("divCalFromTo");
            obj.set_url("Frame_Common::comCalFromTo.xfdl");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"소속\"/><Cell col=\"2\" text=\"사용자아이디\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"수행내역\"/><Cell col=\"5\" text=\"사용일시\"/><Cell col=\"6\" text=\"IP\"/><Cell col=\"7\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bzentNm\" tooltiptext=\"bind:bzentNm\" textAlign=\"center\" displaytype=\"normal\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"2\" text=\"bind:lgnId\" tooltiptext=\"bind:lgnId\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:flnm\" tooltiptext=\"bind:flnm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:menuNm\" tooltiptext=\"bind:menuNm\" textAlign=\"center\" displaytype=\"normal\" maskedittype=\"string\" maskeditformat=\"@@@-@@-@@@@@\"/><Cell col=\"5\" text=\"bind:prslYmd\" tooltiptext=\"bind:prslYmd\" textAlign=\"center\" displaytype=\"normal\" maskedittype=\"string\" maskeditformat=\"@@@-@@-@@@@@\"/><Cell col=\"6\" text=\"bind:ipAddr\" tooltiptext=\"bind:ipAddr\" textAlign=\"center\" displaytype=\"normal\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"7\" text=\"bind:prslRsn\" tooltiptext=\"bind:prslRsn\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_visible("false");
            this.divList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form.divCalFromTo
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form.divCalFromTo.form,function(p){});
            this.divList.form.divSearch.form.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboInstClsfCd","value","dsSrh","srhInstClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtFlnm","value","dsSrh","srhFlnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboBzentClCd","value","dsSrh","srhBzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.mseCrno","value","dsSrh","srhCrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.mseBrno","value","dsSrh","srhBrno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboGovInstYn","value","dsSrh","srhGovInstYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboAcntSttsClCd","value","dsSrh","srhAcntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboChgClCd","value","dsSrh","srhChgClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divList.form.divSearch.form.cboCmptncInstNo","value","dsSrh","srhCmptncInstNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divList.form.divSearch.form.edtLgnId","value","dsSrh","srhLgnId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comCalFromTo.xfdl");
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("PrvcPrslHstryM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionM00 Form
        * FILE NAME     : sampleFormActionM00.xfdl
        * DESCRIPTION   : 화면전환샘플 (목록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
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
        	// 검색용 데이터셋 초기화
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");


        	var objParam = { objDs:this.dsSrh									// 바인딩 데이터셋
        					,sBindFromCol:"srhPrslYmdFrom"								// 바인딩 컬럼(From)
        					,sBindToCol:"srhPrslYmdTo"									// 바인딩 컬럼(To)
        					//,bValidationChk:false								// 선택버튼 클릭시 From ~ To 날짜 체크 여부(default:true)
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"dayFromTo"							// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divList.form.divSearch.form.divCalFromTo.form.fnInitCommonCalendar(this, objParam);

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화

        	// 전체관리자 권한만 해당 화면으로 접근가능 - 관리자만 선조회 가능하도록 함
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		// 화면전환 목록화면
        		this.fnCallCommonCodeList();
        		this.fnCallSearchList();
        	}
        };


        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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
        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
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

        	switch (sPopupId)
        	{

        		//사업수행자 검색 팝업
        		case "comInstPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			//팝업에서 넘어온 값 설정하기
        			this.dsSrh.setColumn(0, "srhBzentNm"    , objRtnValue["bzentNm"]        );		// 사업체명
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 공통달력 호출 후 callback(선택)
         */
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "dayFromTo" :			// 일달력

        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /**
         * @description 목록조회
         */
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
        	objArgs.url 			= "/adm/user/prvcPrslHstry/selectPrvcPrslHstryList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        //공통테이블 정보 호출
        this.fnCallCommonCodeList = function()
        {
        	trace("searchFldsearchFldsearchFldsearchFld목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchFld";
         	objArgs.url 			= "/common/code/selectUserCommonCodeList.irs";
         	objArgs.inds      		= "dsPrivCd=dsPrivCd";
         	objArgs.outds     		= "dsInstCd=dsInstCd"; 			//관장기관
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	trace("PrvcPrslHstryM00.fnChangeDiv");
        };




        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        };



        /**
         * @description 엑셀다운로드 버튼 클릭
         */
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/user/prvcPrslHstry/selectPrvcPrslHstryExcel.irs";

        	this.fdtExcel.set_url(url);
        	this.fdtExcel.setPostData("downloadExcelFileNm","개인정보열람이력.xlsx");
        	this.fdtExcel.setPostData("sheetname","개인정보열람이력");

        	//파일다운로드 실행
        	this.fdtExcel.download();

        };

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.staoCmptncInstNo.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.cboCmptncInstNo.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staLgnId.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.edtLgnId.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch,this);
            this.divList.form.divSearch.form.staPrslYmd.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("PrvcPrslHstryM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
