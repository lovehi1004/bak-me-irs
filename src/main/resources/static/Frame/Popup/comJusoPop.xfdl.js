(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comJusoPop");
            this.set_titletext("도로명주소 검색");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJusoList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"zipNo\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddr\" type=\"STRING\" size=\"256\"/><Column id=\"siNm\" type=\"STRING\" size=\"256\"/><Column id=\"sggNm\" type=\"STRING\" size=\"256\"/><Column id=\"emdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jibunAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"detBdNmList\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("도로명주소 검색");
            obj.set_cssclass("sta_POP_Title");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            obj.set_tooltiptext("닫기");
            obj.set_accessibilitylabel("닫기");
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
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_tooltiptext("검색");
            obj.set_accessibilitylabel("검색");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSearch:3",null,"32","32",null,"31",null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_tooltiptext("초기화");
            obj.set_accessibilitylabel("초기화");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSrhBzentClCd","35","31","70","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("검색어");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSrhKeyword","staSrhBzentClCd:0","31","430","32",null,null,null,null,null,null,this.divPop.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_tooltiptext("검색어 입력");
            obj.set_maxlength("60");
            obj.set_accessibilitylabel("검색어 입력");
            obj.set_text("");
            this.divPop.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:62",null,null,"5","40",null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("dsJusoList");
            obj.set_cellsizingtype("col");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"440\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" colspan=\"2\" text=\"도로명주소\" tooltiptext=\"도로명주소\"/><Cell col=\"3\" text=\"선택\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:no\" textAlign=\"center\" tooltiptext=\"번호\" border=\"1px solid #dcdee4,0px solid #eeeff3,1px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"번호\"/><Cell col=\"1\" text=\"우편번호\" textAlign=\"center\" color=\"#444444\" font=\"normal 400 15px/17px &quot;NotoSansKR&quot;\" tooltiptext=\"우편번호\" border=\"1px solid #dcdee4,0px solid #eeeff3,0px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"우편번호\"/><Cell col=\"2\" border=\"1px solid #dcdee4,0px solid #eeeff3,0px solid #dcdee4,1px solid #eeeff3\" text=\"bind:zipNo\" tooltiptext=\"우편번호\" color=\"#ff0000\" font=\"normal 900 15px/17px &quot;NotoSansKR&quot;\" accessibilitylabel=\"우편번호\"/><Cell col=\"3\" rowspan=\"3\" displaytype=\"buttoncontrol\" padding=\"10px\" text=\"선택\" tooltiptext=\"선택\" accessibilitylabel=\"선택\" accessibilitydescription=\"도로명 주소 선택\"/><Cell row=\"1\" col=\"1\" text=\"도로명\" textAlign=\"center\" color=\"#0361dd\" font=\"normal 700 10pt/normal &quot;Arial&quot;\" tooltiptext=\"도로명\" border=\"0px solid #dcdee4,0px solid #eeeff3,0px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"도로명\"/><Cell row=\"1\" col=\"2\" text=\"bind:roadAddr\" tooltiptext=\"도로명\" border=\"0px solid #dcdee4,0px solid #eeeff3,0px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"도로명\"/><Cell row=\"2\" col=\"1\" text=\"지번\" textAlign=\"center\" color=\"#0361dd\" font=\"normal 700 10pt/normal &quot;Arial&quot;\" tooltiptext=\"지번\" border=\"1px solid #dcdee4,0px solid #eeeff3,1px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"지번\"/><Cell row=\"2\" col=\"2\" text=\"bind:jibunAddr\" tooltiptext=\"지번\" border=\"1px solid #dcdee4,0px solid #eeeff3,1px solid #dcdee4,1px solid #eeeff3\" accessibilitylabel=\"지번\"/></Band></Format></Formats>");
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

            obj = new Static("sta04_01_01_00","155",null,"290","25",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
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
            obj = new BindItem("item1","divPop.form.divSearch.form.edtSrhKeyword","value","dsSrh","srhKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("comJusoPop.xfdl", function() {
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

        	// 검색 데이터셋 초기화.
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhKeyword", "");

        	// 페이지표시 Div 초기화
        	this.divPop.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화

        	this.divPop.form.divSearch.form.edtSrhKeyword.setFocus();

        	// 주소는 검색어 없이 조회하면 안됨 - 20231103191600
        	/* this.fnCallSearchList(); ***************************************************************/

        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	switch (sPopupId)
        	{
        		case "btnSearch" :
        			this.divPop.form.divSearch.form.edtSrhKeyword.setFocus();
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
        		case "selectJusoList" :
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
        	trace("목록 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
        	var callUrl = "/common/selectJusoList.irs";

         	var objArgs = {};
         	objArgs.svcId 			= "selectJusoList";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsJusoList=dsJusoList dsPageInfo=dsPageInfo";
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

        this.divPop_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhKeyword", "");
        };

        /* ############################################################ 여기부터 */
        this.keyWordIsNumber = function(keyword) {
        	if( keyword.replace(/[0-9]/g,"").replace( / /g,"").length == 0 ) {

        		var numArr = keyword.replace(/[^0-9| ]/g,"").trim().split(" ");

        		for(var i=0; i<numArr.length ; i++){//우편번호는 검색가능
        			if(numArr[i].length == 5){
        				return true;
        			}
        		}
        		return false;
        	}else{
        		return true;
        	}
        }

        this.checkValidate = function(keyword)
        {
        	//시도
        	var sidoArray = new Array(
        			"서울특별시","서울시","서울",
        			"부산광역시","부산시","부산",
        			"대전광역시","대전시","대전",
        			"대구광역시","대구시","대구",
        			"인천광역시","인천시","인천",
        			"광주광역시","광주시","광주",
        			"울산광역시","울산시","울산",
        			"충청북도","충북",
        			"충청남도","충남",
        			"전라북도","전북",
        			"전라남도","전남",
        			"경상북도","경북",
        			"경상남도","경남",
        			"제주특별자치도","제주도","제주","특별자치도",
        			"세종특별자치시","세종시","세종","특별자치시",
        			"강원특별자치도","강원도","강원",
        			"경기도", "경기"
        	);

        	//시군구
        	var sggArray = new Array("종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구",
        			"관악구","서초구","강남구","송파구","강동구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","연제구","수영구","사상구","기장군","수성구",
        			"달서구","달성군","연수구","남동구","부평구","계양구","강화군","옹진군","미추홀구","광산구","유성구","대덕구","울주군","수원시","수원시 장안구","수원시 권선구","수원시 팔달구","수원시 영통구",
        			"성남시","성남시 수정구","성남시 중원구","성남시 분당구","의정부시","안양시","안양시 만안구","안양시 동안구","부천시","부천시 원미구","부천시 소사구","부천시 오정구","광명시","평택시",
        			"동두천시","안산시","안산시 상록구","안산시 단원구","고양시","고양시 덕양구","고양시 일산동구","고양시 일산서구","과천시","구리시","남양주시","오산시","시흥시","군포시","의왕시","하남시",
        			"용인시","용인시 처인구","용인시 기흥구","용인시 수지구","파주시","이천시","안성시","김포시","화성시","광주시","양주시","포천시","여주시","연천군","가평군","양평군","춘천시","원주시",
        			"강릉시","동해시","태백시","속초시","삼척시","홍천군","횡성군","영월군","평창군","정선군","철원군","화천군","양구군","인제군","고성군","양양군","청주시","청주시 상당구","청주시 흥덕구",
        			"충주시","제천시","청원군","보은군","옥천군","영동군","증평군","진천군","괴산군","음성군","단양군","천안시","천안시 동남구","천안시 서북구","공주시","보령시","아산시","서산시","논산시",
        			"계룡시","당진시","금산군","부여군","서천군","청양군","홍성군","예산군","태안군","전주시","전주시 완산구","전주시 덕진구","군산시","익산시","정읍시","남원시","김제시","완주군","진안군",
        			"무주군","장수군","임실군","순창군","고창군","부안군","목포시","여수시","순천시","나주시","광양시","담양군","곡성군","구례군","고흥군","보성군","화순군","장흥군","강진군","해남군","영암군",
        			"무안군","함평군","영광군","장성군","완도군","진도군","신안군","포항시","포항시 남구","포항시 북구","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","군위군",
        			"의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군","창원시","창원시 의창구","창원시 성산구","창원시 마산합포구","창원시 마산회원구",
        			"창원시 진해구","진주시","통영시","사천시","김해시","밀양시","거제시","양산시","의령군","함안군","창녕군","남해군","하동군","산청군","함양군","거창군","합천군","제주시","서귀포시");

        	var tmpKeyword = (keyword == null) ? "" : keyword.replace(/ /g,"");
        	for(var i=0; i<sidoArray.length; i++){
        		if(tmpKeyword == sidoArray[i]){
        			return false;
        		}
        	}

        	for(var i=0; i<sggArray.length; i++){
        		if(tmpKeyword == sggArray[i]){
        			return false;
        		}
        	}
        	return true;
        }

        this.divPop_divSearch_btnSearch_onclick = function(obj,e)
        {
        	// [https://www.juso.go.kr/] 의 validation 로직과 유사하게 처리 - 벤치마킹 START
        	if(this.gfnIsNull(this.divPop.form.divSearch.form.edtSrhKeyword.value)) {
        		this.gfnShowMessage(this, "W000014", this.divPop.form.divSearch.form.edtSrhKeyword.tooltiptext, function(svcid, variant) {
        			this.divPop.form.divSearch.form.edtSrhKeyword.setFocus();
        		});
        		return false;
        	} else if(this.divPop.form.divSearch.form.edtSrhKeyword.value.trim().length < 2) {
        		this.gfnShowMessage(this, ["Alert","검색어는 두글자 이상 입력해 주시기 바랍니다."], "");
        		return false;
        	} else if(!this.checkValidate(this.divPop.form.divSearch.form.edtSrhKeyword.value)){
        		this.gfnShowMessage(this, ["Alert","주소를 상세히 입력해 주시기 바랍니다."], "");
        		return false;
        	} else if(!this.keyWordIsNumber(this.divPop.form.divSearch.form.edtSrhKeyword.value)){
        		this.gfnShowMessage(this, ["Alert","검색어는 문자와 숫자가 같이 입력해 주시기 바랍니다."], "");
        		return false;
        	}
        	// [https://www.juso.go.kr/] 의 validation 로직과 유사하게 처리 - 벤치마킹 END

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divPop_grdList_oncellclick = function(obj,e)
        {
        	trace("[divPop_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 3)
        	{
        		var strRtn = this.gfnSetPopupReturn({
        			  zipNo			:	this.dsJusoList.getColumn(e.row, "zipNo")			// 우편번호
        			, roadAddr		:	this.dsJusoList.getColumn(e.row, "roadAddr")		// 도로명주소
        		});
        		this.gfnPopupClose(this, strRtn);
        	}
        };


        /**
         * @description 검색 버튼 키보드입력
        */
        this.divPop_divSearch_edtSrhKeyword_onkeyup = function(obj,e)
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
            this.divPop.form.divSearch.form.edtSrhKeyword.addEventHandler("onkeyup",this.divPop_divSearch_edtSrhKeyword_onkeyup,this);
            this.divPop.form.grdList.addEventHandler("oncellclick",this.divPop_grdList_oncellclick,this);
        };
        this.loadIncludeScript("comJusoPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
