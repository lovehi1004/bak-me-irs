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
                this._setFormPosition(800,750);
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
            this.divTit.addChild(obj.name, obj);

            obj = new Div("divPop","45","89",null,null,"45","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","0","0",null,"40","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_text("1. 개인정보보호법에 의거하여 공공기관 필수 조치에 따른 동의 안내");
            obj.set_font("normal 700 16pt/0 \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01","20","stc00:20",null,"24","120",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("· 수집한 목적과 다르게 사용하거나 제3자 제공 금지");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01_00","20","stc01:0",null,"24","120",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_text("- 법령의 근거 없이 다른 용도로 사용하거나 외부로 유출하지 않도록 주의");
            obj.set_font("normal normal 12pt/normal \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01_01","20","stc01_00:20",null,"24","120",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("· 개인정보의 이용이 끝난 후에는 반드시 파기");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01_00_00","20","stc01_01:0",null,"24","120",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("4");
            obj.set_text("- 수집한 목적이 달성된 후(서비스 기간 경과 등)에는 즉시 파기");
            obj.set_font("normal normal 12pt/normal \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01_01_00","20","stc01_00_00:20",null,"24","535",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("5");
            obj.set_text("· 개인정보 열람사유 ");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc01_01_00_00","stc01_01_00:0","196",null,"24","517",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("6");
            obj.set_text("*");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_color("#ec0303");
            this.divPop.addChild(obj.name, obj);

            obj = new TextArea("tae00","20","stc01_01_00:0",null,"91","20",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("7");
            obj.set_value("개인정보 열람사유를 입력해주세요.");
            obj.set_color("#d3d3d3");
            this.divPop.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree","stc01_00:30","84",null,"24","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("8");
            obj.set_text("동의");
            this.divPop.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree2","stc01_00_00:30","152",null,"24","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("9");
            obj.set_text("동의");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc00_00","0","tae00:30",null,"40","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("10");
            obj.set_text("2. 다운로드할 범위를 지정해주세요.");
            obj.set_font("normal 700 16pt/0 \"Arial\"");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea","20","390",null,"44","20",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea00","20","staAplyClCdNmArea:-1",null,"44","20",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc02","20","390","150","88",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("13");
            obj.set_text("다운로드 범위");
            obj.set_cssclass("sta_WF_Label");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","20","stc00_00:10",null,"1","20",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPop.addChild(obj.name, obj);

            obj = new Radio("rdo00","177","391","106","86",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("15");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divPop_form_rdo00_innerdataset = new nexacro.NormalDataset("divPop_form_rdo00_innerdataset", obj);
            divPop_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">범위지정</Col></Row></Rows>");
            obj.set_innerdataset(divPop_form_rdo00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divPop.addChild(obj.name, obj);

            obj = new Edit("edtFrom","rdo00:10","staAplyClCdNmArea00:-37","117","30",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc03","edtFrom:3","staAplyClCdNmArea00:-35","22","27",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("17");
            obj.set_text("~ ");
            obj.set_fittocontents("width");
            this.divPop.addChild(obj.name, obj);

            obj = new Edit("edtTo","stc03:3","staAplyClCdNmArea00:-37","117","30",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("18");
            obj.set_enable("false");
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

            obj = new Div("div00","20","595","760","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","315","0",null,"32","335",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_POP_Confirm");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnExcelDown:10","0",null,"32","215",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTit.form
            obj = new Layout("default","",0,0,this.divTit.form,function(p){});
            this.divTit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form
            obj = new Layout("default","",0,0,this.divPop.form,function(p){});
            this.divPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,750,this,function(p){});
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
        this.fvDefaultStr = "개인정보 열람사유를 입력해주세요.";

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
        	this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn',this.fvDefaultStr);
        	//2. Parameter 참조
        	var totalCount = this.gfnGetParameter(objFormFrame, "totalCount");
        	this.dsPageInfo.setColumn(0,'totalCount', totalCount);
        	this.dsPageInfo.setColumn(0,'from', '1');
        	this.dsPageInfo.setColumn(0,'to', totalCount);
        	var menuMgno = this.gfnGetParameter(objFormFrame, "menuMgno");
        	this.dsPrvcPrslDsctnInfo.setColumn(0,'menuMgno',menuMgno);

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



        this.divPop_rdo00_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 0)
        	{
        		this.divPop.form.edtFrom.set_enable(false);
        		this.divPop.form.edtTo.set_enable(false);
        		var totalCount = this.dsPageInfo.getColumn(0,'totalCount');
        		this.dsPageInfo.setColumn(0,'to',totalCount);
        	}else
        	{
        		this.divPop.form.edtFrom.set_enable(true);
        		this.divPop.form.edtTo.set_enable(true);
        	}
        };

        this.divPop_tae00_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue))
        	{
        		this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn',this.fvDefaultStr);
        	}
        };

        this.divPop_tae00_onsetfocus = function(obj,e)
        {
        	if(this.divPop.form.tae00.value == this.fvDefaultStr)
        	{
        		this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn','');
        	}
        };

        this.divPop_tae00_onkillfocus = function(obj,e)
        {
        	if(this.gfnIsNull(this.divPop.form.tae00.value) || this.divPop.form.tae00.value == this.fvDefaultStr)
        	{
        		this.dsPrvcPrslDsctnInfo.setColumn(0,'prslRsn',this.fvDefaultStr);
        		this.divPop.form.tae00.set_color('#d3d3d3');
        	}else
        	{
        		this.divPop.form.tae00.set_color('black');
        	}
        };

        this.div00_btnCancel_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        this.div00_btnExcelDown_onclick = function(obj,e)
        {
        	if(!this.divPop.form.chkAgree.value || !this.divPop.form.chkAgree2.value)
        	{
        		this.gfnShowMessage(this, ["Alert","위 동의를 모두 선택해주세요."], "", function(svcid, variant) {
        			});
        		return false;
        	}
        	var prslRsn = this.dsPrvcPrslDsctnInfo.getColumn(0,"prslRsn");
        	if(this.gfnIsNull(prslRsn) || prslRsn == this.fvDefaultStr)
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

        this.fnReturnClosePop = function()
        {
        	var strRtn = this.gfnSetPopupReturn({from:this.dsPageInfo.getColumn(0, "from")
        										, to:this.dsPageInfo.getColumn(0, "to")
        										});
        	trace("=====strRtn========"+strRtn);
        	this.gfnPopupClose(this, strRtn);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.staTit.addEventHandler("onclick",this.divTit_staTit_onclick,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.stc01_01_00.addEventHandler("onclick",this.divPop_stc01_01_00_onclick,this);
            this.divPop.form.stc01_01_00_00.addEventHandler("onclick",this.divPop_stc01_01_00_onclick,this);
            this.divPop.form.tae00.addEventHandler("onchanged",this.divPop_tae00_onchanged,this);
            this.divPop.form.tae00.addEventHandler("onsetfocus",this.divPop_tae00_onsetfocus,this);
            this.divPop.form.tae00.addEventHandler("onkillfocus",this.divPop_tae00_onkillfocus,this);
            this.divPop.form.rdo00.addEventHandler("onitemchanged",this.divPop_rdo00_onitemchanged,this);
            this.div00.form.btnExcelDown.addEventHandler("onclick",this.div00_btnExcelDown_onclick,this);
            this.div00.form.btnCancel.addEventHandler("onclick",this.div00_btnCancel_onclick,this);
        };
        this.loadIncludeScript("ExcelDownP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
