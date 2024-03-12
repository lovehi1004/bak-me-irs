(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("모달 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrvcPrslDsctnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"prslRsn\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"from\">1</Col><Col id=\"to\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드 ");
            obj.set_cssclass("sta_POP_Title");
            obj.set_fittocontents("width");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            obj.set_accessibilitylabel("닫기");
            this.divTit.addChild(obj.name, obj);

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

            obj = new Div("divPop","45","89",null,null,"45","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"30","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc00","0","0",null,"30","0",null,null,null,null,null,this.divPop.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("1. 개인정보보호법에 의거하여 공공기관 필수 조치에 따른 동의 안내");
            obj.set_font("normal 700 16pt/0 \"Arial\"");
            this.divPop.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","0","div00:0",null,"261","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("div01");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01","20","10",null,"24","120",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("· 수집한 목적과 다르게 사용하거나 제3자 제공 금지");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Static("stc01_00","20","stc01:0",null,"24","120",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("- 법령의 근거 없이 다른 용도로 사용하거나 외부로 유출하지 않도록 주의");
            obj.set_font("normal normal 12pt/normal \"Arial\"");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Static("stc01_01","20","stc01_00:20",null,"24","120",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("· 개인정보의 이용이 끝난 후에는 반드시 파기");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Static("stc01_00_00","20","stc01_01:0",null,"24","120",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("- 수집한 목적이 달성된 후(서비스 기간 경과 등)에는 즉시 파기");
            obj.set_font("normal normal 12pt/normal \"Arial\"");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree","stc01_00:30","34",null,"24","0",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("동의");
            obj.set_accessibilitylabel("동의");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree2","stc01_00_00:30","102",null,"24","0",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("동의");
            obj.set_accessibilitylabel("동의");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Static("stc01_01_00","20","stc01_00_00:20",null,"24","535",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("· 개인정보 열람사유 ");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_fittocontents("width");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Static("stc01_01_00_00","stc01_01_00:0","146",null,"24","517",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("8");
            obj.set_text("*");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_color("#ec0303");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new TextArea("taePrslRsn","20","stc01_01_00:0",null,"91","20",null,null,null,null,null,this.divPop.form.div01.form);
            obj.set_taborder("7");
            obj.set_color("#d3d3d3");
            obj.set_displaynulltext("개인정보 열람사유를 입력해주세요.");
            obj.set_accessibilitylabel("개인정보열람사유");
            this.divPop.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","0","div01:20",null,"41","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_text("div02");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc00_00","0","0",null,"40","0",null,null,null,null,null,this.divPop.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("2. 다운로드할 범위를 지정해주세요.");
            obj.set_font("normal 700 16pt/0 \"Arial\"");
            this.divPop.form.div02.addChild(obj.name, obj);

            obj = new Div("divScope","0","div02:0",null,"131","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("div01");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staAllArea","20","0",null,"66","20",null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Static("staFromToArea","20","staAllArea:-1",null,"66","20",null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Static("stcDownNm","20","0","150","131",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("0");
            obj.set_text("다운로드 범위");
            obj.set_cssclass("sta_WF_Label");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","20","0",null,"1","20",null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Radio("rdoScope","177","1","98","128",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("1");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("범위");
            var divPop_form_divScope_form_rdoScope_innerdataset = new nexacro.NormalDataset("divPop_form_divScope_form_rdoScope_innerdataset", obj);
            divPop_form_divScope_form_rdoScope_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">범위지정</Col></Row></Rows>");
            obj.set_innerdataset(divPop_form_divScope_form_rdoScope_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Edit("edtFrom","293","staFromToArea:-48","117","30",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("부터");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Static("staTilde","419","staFromToArea:-43","12","27",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("8");
            obj.set_text("~ ");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Edit("edtTo","438","staFromToArea:-48","117","30",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("까지");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Static("staHint","293","staAllArea:-64","395","42",null,null,null,null,null,null,this.divPop.form.divScope.form);
            obj.set_taborder("2");
            obj.set_text("데이터양이 많아서 전체 다운로드시 상당 시간 지연될 수 있습니다.\r\n가능하면 범위지정을 이용하여 다운로드해주십시오.\r\n범위는 3만건 이내로 추천합니다.");
            obj.set_cssclass("sta_WF_Dsc2");
            obj.set_fittocontents("height");
            this.divPop.form.divScope.addChild(obj.name, obj);

            obj = new Div("divBtnArea","0","divScope:20",null,"32","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.divPop.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","295","0","110","32",null,null,null,null,null,null,this.divPop.form.divBtnArea.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_accessibilitylabel("엑셀다운로드");
            this.divPop.form.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnExcelDown:3","0","110","32",null,null,null,null,null,null,this.divPop.form.divBtnArea.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_accessibilitylabel("취소");
            this.divPop.form.divBtnArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTit.form
            obj = new Layout("default","",0,0,this.divTit.form,function(p){});
            this.divTit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.div00.form
            obj = new Layout("default","",0,0,this.divPop.form.div00.form,function(p){});
            this.divPop.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.div01.form
            obj = new Layout("default","",0,0,this.divPop.form.div01.form,function(p){});
            this.divPop.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.div02.form
            obj = new Layout("default","",0,0,this.divPop.form.div02.form,function(p){});
            this.divPop.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divScope.form
            obj = new Layout("default","",0,0,this.divPop.form.divScope.form,function(p){});
            this.divPop.form.divScope.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form.divBtnArea.form
            obj = new Layout("default","",0,0,this.divPop.form.divBtnArea.form,function(p){});
            this.divPop.form.divBtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form
            obj = new Layout("default","",0,0,this.divPop.form,function(p){});
            this.divPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.divSearch.form.cboSrhCncldDgr","value","dsSrh","srhCncldDgrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPop.form.divSearch.form.edtSrhCncldNm","value","dsSrh","srhCncldNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPop.form.tae00","value","dsPrvcPrslDsctnInfo","prslRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPop.form.edtFrom","value","dsPageInfo","from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPop.form.edtTo","value","dsPageInfo","to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPop.form.edtTo00","value","dsPageInfo","to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPop.form.edtFrom00","value","dsPageInfo","from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPop.form.div01.form.taePrslRsn","value","dsPrvcPrslDsctnInfo","prslRsn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPop.form.divNoScope.form.edtFrom","value","dsPageInfo","from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPop.form.divNoScope.form.edtTo","value","dsPageInfo","to");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPop.form.divScope.form.edtFrom","value","dsPageInfo","from");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPop.form.divScope.form.edtTo","value","dsPageInfo","to");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ExcelDownP01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopupSub01 Form
        * FILE NAME     : samplePopupSub01.xfdl
        * DESCRIPTION   : 직접폼 모달(Modal) 샘플팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.11    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvAuth	= {};				// 화면의 권한정보
        this.fvPopDivHeight = this.divPop.form.height;

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
        	//trace("[samplePopupSub01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 전달된 Parameter 개별로 받기 (참고용)
        	try
        	{
        		this.fvPopupUrl  	= this.getOwnerFrame().arguments["cvPopupUrl"];
        		this.fvTitletext  	= this.getOwnerFrame().arguments["cvTitletext"];
        		this.fvCallback  	= this.getOwnerFrame().arguments["cvCallback"];
        		this.fvSrcPopup  	= this.getOwnerFrame().arguments["cvSrcPopup"];
        		this.FvOpenType  	= this.getOwnerFrame().arguments["cvOpenType"];
        		this.fvMnuId  		= this.getOwnerFrame().arguments["cvMnuId"];
        		this.fvModeless  	= this.getOwnerFrame().arguments["cvModeless"];
        	}
        	catch (e)
        	{
        		this.fvPopupUrl  	= this.parent.cvPopupUrl;
        		this.fvTitletext  	= this.parent.cvTitletext;
        		this.fvCallback  	= this.parent.cvCallback;
        		this.fvSrcPopup  	= this.parent.cvSrcPopup;
        		this.FvOpenType  	= this.parent.cvOpenType;
        		this.fvMnuId  		= this.parent.cvMnuId;
        		this.fvModeless  	= this.parent.cvModeless;
        	}

        	trace("[협정.약정 검색 모달(Modal) 팝업]=========================================");
        	trace("this.fvPopupUrl:"+this.fvPopupUrl);
        	trace("this.fvTitletext:"+this.fvTitletext);
        	trace("this.fvCallback:"+this.fvCallback);
        	trace("this.fvSrcPopup:"+this.fvSrcPopup);
        	trace("this.FvOpenType:"+this.FvOpenType);
        	trace("this.fvMnuId:"+this.fvMnuId);
        	trace("this.fvModeless:"+this.fvModeless);

        	//1. 2)전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
        	//     gfnShowPopup() 호출시 5번째 인자(objArgs) Argument 에 값을 받음
        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	// * Parameter 전체 목록 확인
        	for(var i = 0; i < arrKeys.length; i++) {
        		if(typeof  this.gfnGetParameter(objFormFrame, arrKeys[i]) == 'function') continue;	// function은 제외
        		trace("open=>"+arrKeys[i] + "=" + this.gfnGetParameter(objFormFrame, arrKeys[i]));
        	}

        	this.dsPrvcPrslDsctnInfo.clearData();
        	this.dsPrvcPrslDsctnInfo.addRow();
        	//2. Parameter 참조
        	var totalCount = this.gfnGetParameter(objFormFrame, "totalCount");
        	this.dsPageInfo.setColumn(0,'totalCount', totalCount);
        	this.dsPageInfo.setColumn(0,'from', '1');
        	this.dsPageInfo.setColumn(0,'to', totalCount);
        	var menuMgno = this.gfnGetParameter(objFormFrame, "menuMgno");
        	this.dsPrvcPrslDsctnInfo.setColumn(0,'menuMgno',menuMgno);
        	// this.fnChangDivForm(menuMgno);
        	this.fnChangDivForm(totalCount);
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
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
        				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "insertUserPrvcPrslDsctn" :
        			this.fnReturnClosePop();
        			// 후처리 코드
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        // this.fnChangDivForm = function(menuMgno)
        // {
        // 	if(!this.gfnIsNull(menuMgno))
        // 	{
        // 		if(menuMgno == 'MN06030300')
        // 		{
        // 			//this.divPop.form.divScope.form.stc02.set_height(131);
        // 			this.divPop.form.divScope.form.rdoScope2.set_height(128);
        // 			this.divPop.form.divScope.form.staAplyClCdNmArea.set_height(66);
        // 			this.divPop.form.divScope.form.staAplyClCdNmArea00.set_height(66);
        // 			this.divPop.form.set_height(854);
        // 		}else
        // 		{
        // 			this.divPop.form.divScope.form.stc00.set_visible(false);
        // 			this.divPop.form.divScope.form.stc02.set_height(87);
        // 			this.divPop.form.divScope.form.rdoScope2.set_height(84);
        // 			this.divPop.form.divScope.form.staAplyClCdNmArea.set_height(44);
        // 			this.divPop.form.divScope.form.staAplyClCdNmArea00.set_height(44);
        // 			this.divPop.form.set_height(810);
        // 		}
        // 		this.divPop.form.divScope.form.resetScroll();
        // 		this.divPop.form.resetScroll();
        // 		this.resetScroll();
        //
        // 	}
        // };

        this.fnChangDivForm = function(nTotalCount)
        {
        	trace("nTotalCount:"+nTotalCount);
        	if(nTotalCount >= 30000)
        	{
        		// 디자인대로 유지
        		trace("1=====================");
        	}
        	else
        	{
        		trace("2=====================");
        		// 축소 변경 , gap 44
        		// var nGap = 44;
        		this.divPop.form.divScope.set_height(87);
        		this.divPop.form.divScope.form.stcDownNm.set_height(86);
        		this.divPop.form.divScope.form.rdoScope.set_height(84);
        		this.divPop.form.divScope.form.staHint.set_visible(false);
        		this.divPop.form.divScope.form.staAllArea.set_height(44);
        		this.divPop.form.divScope.form.staFromToArea.set_height(43);
        		this.divPop.form.divScope.form.edtFrom.set_top("staFromToArea:-37");
        		this.divPop.form.divScope.form.staTilde.set_top("staFromToArea:-35");
        		this.divPop.form.divScope.form.edtTo.set_top("staFromToArea:-37");
        		this.divPop.form.divScope.form.resetScroll();
        		this.divPop.form.resetScroll();
        		this.getOwnerFrame().form.set_height(636);
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

        this.divPop_div01_taePrslRsn_onkillfocus = function(obj,e)
        {
        	if(this.gfnIsNull(this.divPop.form.div01.form.taePrslRsn.value))
        	{
        		this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn',null);
        		this.divPop.form.div01.form.taePrslRsn.set_color('#d3d3d3');
        	}else
        	{
        		this.divPop.form.div01.form.taePrslRsn.set_color('black');
        	}
        };

        this.fnReturnClosePop = function()
        {
        	var strRtn = this.gfnSetPopupReturn({from:this.dsPageInfo.getColumn(0, "from")
        										, to:this.dsPageInfo.getColumn(0, "to")
        										});
        	trace("=====strRtn========"+strRtn);
        	this.gfnPopupClose(this, strRtn);
        }

        this.divPop_edtFrom_onchanged = function(obj,e)
        {
        	var totalCount = this.dsPageInfo.getColumn(0,'totalCount');
        	if(this.gfnIsNull(e.posttext) || (e.posttext == 0))
        	{
        		this.dsPageInfo.setColumn(0,'from','1');
        	}else if(nexacro.toNumber(totalCount) < nexacro.toNumber(e.postvalue))
        	{
        		this.dsPageInfo.setColumn(0,'from',totalCount);
        	}
        };

        this.divPop_edtTo_onchanged = function(obj,e)
        {
        	var totalCount = this.dsPageInfo.getColumn(0,'totalCount');
        	if(this.gfnIsNull(e.postvalue) || (nexacro.toNumber(totalCount) < nexacro.toNumber(e.postvalue)))
        	{
        		this.dsPageInfo.setColumn(0,'to', totalCount);
        	}
        };

        this.divPop_div01_taePrslRsn_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue))
        	{
        		this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn',null);
        	}
        };

        this.divPop_div01_taePrslRsn_onkeydown = function(obj,e)
        {
        	if(this.gfnIsNull(e.keycode))
        	{
        		this.divPop.form.div01.form.taePrslRsn.set_color('#d3d3d3');
        	}else
        	{
        		this.divPop.form.div01.form.taePrslRsn.set_color('black');
        	}
        };

        this.divPop_divBtnArea_btnExcelDown_onclick = function(obj,e)
        {
        	if(!this.divPop.form.div01.form.chkAgree.value || !this.divPop.form.div01.form.chkAgree2.value)
        	{
        		this.gfnShowMessage(this, ["Alert","위 동의를 모두 선택해주세요."], "", function(svcid, variant) {
        			});
        		return false;
        	}
        	var prslRsn = this.dsPrvcPrslDsctnInfo.getColumn(0,"prslRsn");
        	if(this.gfnIsNull(prslRsn))
        	{
        		this.gfnShowMessage(this, ["Alert","개인정보 열람사유는 필수입력항목입니다." ], "", function(svcid, variant) {
        			});
        		return false;
        	}

        	var objArgs = {};
         	objArgs.svcId 			= "insertUserPrvcPrslDsctn";
         	objArgs.url 			= "/common/pop/insertUserPrvcPrslDsctn.irs";
         	objArgs.inds      		= "dsPrvcPrslDsctnInfo=dsPrvcPrslDsctnInfo";
         	objArgs.outds     		= ""
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.divPop_divBtnArea_btnCancel_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        this.divPop_divScope_rdoScope_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 0)
        	{
        		this.divPop.form.divScope.form.edtFrom.set_enable(false);
        		this.divPop.form.divScope.form.edtTo.set_enable(false);
        		var totalCount = this.dsPageInfo.getColumn(0,'totalCount');
        		this.dsPageInfo.setColumn(0,'to',totalCount);
        		this.dsPageInfo.setColumn(0,'from','1');
        	}else
        	{
        		this.divPop.form.divScope.form.edtFrom.set_enable(true);
        		this.divPop.form.divScope.form.edtTo.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.div01.form.stc01_01_00_00.addEventHandler("onclick",this.divPop_stc01_01_00_onclick,this);
            this.divPop.form.div01.form.taePrslRsn.addEventHandler("onchanged",this.divPop_div01_taePrslRsn_onchanged,this);
            this.divPop.form.div01.form.taePrslRsn.addEventHandler("onkeydown",this.divPop_div01_taePrslRsn_onkeydown,this);
            this.divPop.form.div01.form.taePrslRsn.addEventHandler("onkillfocus",this.divPop_div01_taePrslRsn_onkillfocus,this);
            this.divPop.form.divScope.form.rdoScope.addEventHandler("onitemchanged",this.divPop_divScope_rdoScope_onitemchanged,this);
            this.divPop.form.divScope.form.edtFrom.addEventHandler("onchanged",this.divPop_edtFrom_onchanged,this);
            this.divPop.form.divScope.form.edtTo.addEventHandler("onchanged",this.divPop_edtTo_onchanged,this);
            this.divPop.form.divBtnArea.form.btnExcelDown.addEventHandler("onclick",this.divPop_divBtnArea_btnExcelDown_onclick,this);
            this.divPop.form.divBtnArea.form.btnCancel.addEventHandler("onclick",this.divPop_divBtnArea_btnCancel_onclick,this);
        };
        this.loadIncludeScript("ExcelDownP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
