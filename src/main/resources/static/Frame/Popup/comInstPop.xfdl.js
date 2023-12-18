(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comInstPop");
            this.set_titletext("사업수행자 검색");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhBzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstSearchType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlsClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"targetUserClCd\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("사업수행자 검색");
            obj.set_cssclass("sta_POP_Title");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            this.divTit.addChild(obj.name, obj);

            obj = new Div("divPop","45","89",null,null,"45","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divPop.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSearch:3",null,"32","32",null,"31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSrhBzentClCd","35","31","100","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업체구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사업체구분");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSrhBzentClCd","staSrhBzentClCd:0","31","140","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("사업체구분");
            obj.set_autoselect("false");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("-1");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSrhBzentNm","cboSrhBzentClCd:20","31","80","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_tooltiptext("사업체명");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSrhBzentNm","staSrhBzentNm:0","31","160","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("100");
            obj.set_tooltiptext("사업체명");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:62",null,null,"5","40",null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("dsInstList");
            obj.set_cellsizingtype("col");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"사업체분류\" tooltiptext=\"사업체분류\"/><Cell col=\"2\" text=\"사업수행자\" tooltiptext=\"사업수행자\"/><Cell col=\"3\" text=\"대표자명\" tooltiptext=\"대표자명\"/><Cell col=\"4\" text=\"사업자등록번호\" tooltiptext=\"사업자등록번호\"/><Cell col=\"5\" text=\"사업체구분\" tooltiptext=\"사업체구분\"/><Cell col=\"6\" text=\"선택\" tooltiptext=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:instClsfCd\" displaytype=\"combotext\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"2\" text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rprsvNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:brno\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"###-##-#####\"/><Cell col=\"5\" text=\"bind:bzentClCd\" displaytype=\"combotext\" combodataset=\"dsResult01\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" text=\"선택\" padding=\"10px\"/></Band></Format></Formats>");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,null,"32","565","grdList:10",null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divPop.addChild(obj.name, obj);

            obj = new Div("divPaging","131","grdList:20","468","20",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Frame_Common::comPaging.xfdl");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staLine1","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staLeft","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staRight",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTit.form
            obj = new Layout("default","",0,0,this.divTit.form,function(p){});
            this.divTit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divSearch.form
            obj = new Layout("default","",0,0,this.divPop.form.divSearch.form,function(p){});
            this.divPop.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divPaging
            obj = new Layout("default","",0,0,this.divPop.form.divPaging.form,function(p){});
            this.divPop.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form
            obj = new Layout("default","",0,0,this.divPop.form,function(p){});
            this.divPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.divSearch.form.edtSrhBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPop.form.divSearch.form.cboSrhBzentClCd","value","dsSrh","srhBzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("comInstPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopupSub01 Form
        * FILE NAME     : samplePopupSub01.xfdl
        * DESCRIPTION   : 직접폼 모달(Modal) 샘플팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.23    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvAuth	= {};				// 화면의 권한정보

        // 참고용
        this.fvPopupUrl  = "";			// xxxx.xfdl
        this.fvTitletext  = "";			// 타이틀
        this.fvCallback  = "";			// callback 함수명
        this.fvSrcPopup  = "";			// Y / N
        this.FvOpenType  = "";			// PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        this.fvMnuId  = "";				// 메뉴ID
        this.fvModeless  = "";			// Y / N

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
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"BZENT_CL_CD" , headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD" , headflag:"A" , useYn:"Y"};

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);


        	// 전달된 Parameter 개별로 받기
        	try
        	{
        		this.pvInstSearchType  	= this.getOwnerFrame().arguments["pvInstSearchType"];		// 0 : 일반사업체 제외 조회, 1 : [그외 정부기관|관장기관|위탁기관] 정부기관 조회, 2: 일반사업체 조회, 3 : 관장기관만 조회, 4 : 전체 조회
        	}
        	catch (e)
        	{
        		this.pvInstSearchType  	= this.parent.pvInstSearchType;
        	}

        	// 검색 데이터셋 초기화.
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	this.dsSrh.setColumn(0, "srhBzentClCd", "");
        	this.dsSrh.setColumn(0, "srhInstSearchType", this.pvInstSearchType);

        	// 페이지표시 Div 초기화
        	this.divPop.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();

        	// 사업체구분 활성/비활성 처리
        	this.fnChgCboSrhBzentClCd();

        	this.divPop.form.divSearch.form.edtSrhBzentNm.setFocus();
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
        			// 사업체구분 활성/비활성 처리
        			this.fnChgCboSrhBzentClCd();
        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
        			break;
        		default:
        			break;
        	}
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
        		case "selectInstList" :
        			// 후처리 코드
        			this.divPop.form.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divPop.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallSearchList = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstList";
         	objArgs.url 			= "/common/pop/selectInstList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsInstList=dsInstList dsPageInfo=dsPageInfo";
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
         * @description 사업체구분 활성/비활성 처리
        */
        this.fnChgCboSrhBzentClCd = function()
        {
        	if(this.pvInstSearchType == 0) {											// 일반사업체 제외 조회 라면
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_readonly(false);
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_index(0);			//전체
        	} else if(this.pvInstSearchType == 1) {										// [그외 정부기관|관장기관|위탁기관] 정부기관 조회 라면
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_readonly(true);
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_index(2);			//비할당
        	} else if(this.pvInstSearchType == 3) {										// 관장기관만 조회 라면
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_readonly(true);
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_index(2);			//비할당
        	} else if(this.pvInstSearchType == 2) {										// 일반사업체 조회 라면
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_readonly(false);
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_index(0);			//전체
        	} else if(this.pvInstSearchType == 4) {										// 전체 조회 라면
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_readonly(false);
        		this.divPop.form.divSearch.form.cboSrhBzentClCd.set_index(0);			//전체
        	}
        };
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "X" 버튼 클릭
        */
        this.divTit_btnCls_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description 초기화 버튼 클릭
        */
        this.divPop_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhBzentNm", "");
        	// 사업체구분 활성/비활성 처리
        	this.fnChgCboSrhBzentClCd();
        };

        /**
         * @description 검색 버튼 클릭
        */
        this.divPop_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /**
         * @description 그리드내 행 클릭
        */
        this.divPop_grdList_oncellclick = function(obj,e)
        {
        	trace("[divPop_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 6)
        	{
        		var strRtn = this.gfnSetPopupReturn({
        			  instMgno			:	this.dsInstList.getColumn(e.row, "instMgno")		// 기관관리번호
        			, instClsfCd		:	this.dsInstList.getColumn(e.row, "instClsfCd")		// 기관분류코드
        			, instDtlsClsfCd	:	this.dsInstList.getColumn(e.row, "instDtlsClsfCd")	// 기관세부분류코드
        			, govInstYn			:	this.dsInstList.getColumn(e.row, "govInstYn")		// 정부기관여부
        			, bzentNm			:	this.dsInstList.getColumn(e.row, "bzentNm")			// 사업체명
        			, bzentClCd			:	this.dsInstList.getColumn(e.row, "bzentClCd")		// 사업체구분코드
        			, crno				:	this.dsInstList.getColumn(e.row, "crno")			// 법인등록번호
        			, brno				:	this.dsInstList.getColumn(e.row, "brno")			// 사업자등록번호
        			, rprsvNm			:	this.dsInstList.getColumn(e.row, "rprsvNm")			// 대표자명
        			, corpTelDdd		:	this.dsInstList.getColumn(e.row, "corpTelDdd")		// 법인전화지역번호
        			, corpTelTlpno		:	this.dsInstList.getColumn(e.row, "corpTelTlpno")	// 법인국번호
        			, corpTelPhino		:	this.dsInstList.getColumn(e.row, "corpTelPhino")	// 법인전화개별번호
        			, rdnmCd			:	this.dsInstList.getColumn(e.row, "rdnmCd")			// 도로명코드
        			, addr				:	this.dsInstList.getColumn(e.row, "addr")			// 주소
        			, dtlAddr			:	this.dsInstList.getColumn(e.row, "dtlAddr")			// 상세주소
        			, upInstMgno		:	this.dsInstList.getColumn(e.row, "upInstMgno")		// 상위기관관리번호
        			, upInstNm			:	this.dsInstList.getColumn(e.row, "upInstNm")		// 상위기관명
        			, brdocFlmno		:	this.dsInstList.getColumn(e.row, "brdocFlmno")		// 사업자등록증파일번호
        			, targetUserClCd	:	this.dsInstList.getColumn(e.row, "targetUserClCd")	// 가입가능사용자구분코드-사업체전용
        			, cmptncInstMgno	:	this.dsInstList.getColumn(e.row, "cmptncInstMgno")	// 관할기관관리번호
        			, cmptncInstNm		:	this.dsInstList.getColumn(e.row, "cmptncInstNm")	// 관할기관명
        		});
        		this.gfnPopupClose(this, strRtn);
        	}
        };

        /**
         * @description 검색 버튼 키보드입력
        */
        this.divPop_divSearch_edtSrhBzentNm_onkeyup = function(obj,e)
        {
        	// enter 키 입력시 로그인 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divPop_divSearch_btnSearch_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPop_divSearch_btnSearch_onclick,this);
            this.divPop.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divPop_divSearch_btnRefresh_onclick,this);
            this.divPop.form.divSearch.form.staSrhBzentNm.addEventHandler("onclick",this.divPop_divSearch_staCncldDgr00_onclick,this);
            this.divPop.form.divSearch.form.edtSrhBzentNm.addEventHandler("onkeyup",this.divPop_divSearch_edtSrhBzentNm_onkeyup,this);
            this.divPop.form.grdList.addEventHandler("oncellclick",this.divPop_grdList_oncellclick,this);
        };
        this.loadIncludeScript("comInstPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
