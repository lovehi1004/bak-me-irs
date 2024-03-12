(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aprvAplyP01");
            this.set_titletext("오류메시지 관리 > 오류메시지 등록");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,412);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStaticYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"errMsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"errMsgNm\" type=\"STRING\" size=\"256\"/><Column id=\"inptCnt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"errMsgCd\" type=\"STRING\" size=\"256\"/><Column id=\"checkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErrMsgClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitFrm","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("0");
            obj.set_text("오류메시지 등록");
            obj.set_cssclass("sta_POP_Title");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTitFrm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitFrm.addChild(obj.name, obj);

            obj = new Div("divFrm","45","89",null,null,"45","102",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Div("divEvlReg","5","5",null,"216","5",null,null,null,null,null,this.divFrm.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divFrm.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staIataNtnCd","0","0","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("16");
            obj.set_text("오류메세지코드");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("오류메세지코드");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staNtnKornNm","0","43","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("4");
            obj.set_text("오류메세지구분");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("오류메세지구분");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staNtnEngNm","0","86","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("7");
            obj.set_text("오류메시지명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("오류메시지명");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staLine5","0","129",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staInptCnt","0","129","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("10");
            obj.set_text("입력수");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("입력주");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Edit("edtErrMsgCd","staIataNtnCd:7","7","169","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("1");
            obj.set_textAlign("left");
            obj.set_tooltiptext("오류메세지코드");
            obj.set_maxlength("7");
            obj.set_readonly("false");
            obj.set_inputmode("normal");
            obj.set_inputtype("normal");
            obj.set_accessibilitylabel("오류메세지코드");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Edit("edtErrMsgNm","staNtnEngNm:7","93",null,"30","7",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            obj.set_tooltiptext("오류메세지명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("오류메세지명");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Button("btnDupl","edtErrMsgCd:3","7","111","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("2");
            obj.set_text("중복 검색");
            obj.set_tooltiptext("중복 검색");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Button("btnDelDupl","btnDupl:3","7","40","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_tooltiptext("국가코드 초기화");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Combo("cboErrMsgClCd","157","50",null,"30","164",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsErrMsgClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("오류메세지구분");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staLine5_00","0","staLine5:-1",null,"44","0",null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staUseYn","0","staInptCnt:-1","150","44",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("13");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사용여부");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","157","179","120","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsStaticYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_tooltiptext("사용여부");
            obj.set_accessibilitylabel("사용여부");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Edit("edtInptCnt","157","136","120","30",null,null,null,null,null,null,this.divFrm.form.divEvlReg.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_tooltiptext("오류메세지코드");
            obj.set_maxlength("5");
            obj.set_readonly("false");
            obj.set_inputmode("normal");
            obj.set_inputtype("normal");
            obj.set_accessibilitylabel("입력수");
            this.divFrm.form.divEvlReg.addChild(obj.name, obj);

            obj = new Static("staW","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staH","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("staR",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","219",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_tooltiptext("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","btnSave:3",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_01","280",null,"290","25",null,"77",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00","155",null,"290","25",null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitFrm.form
            obj = new Layout("default","",0,0,this.divTitFrm.form,function(p){});
            this.divTitFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form.divEvlReg.form
            obj = new Layout("default","",0,0,this.divFrm.form.divEvlReg.form,function(p){});
            this.divFrm.form.divEvlReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrm.form
            obj = new Layout("default","",0,0,this.divFrm.form,function(p){});
            this.divFrm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",590,412,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFrm.form.divEvlReg.form.edtErrMsgCd","value","dsDtl","errMsgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFrm.form.divEvlReg.form.cboErrMsgClCd","value","dsDtl","errMsgClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFrm.form.divEvlReg.form.edtErrMsgNm","value","dsDtl","errMsgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFrm.form.divEvlReg.form.cboUseYn","value","dsDtl","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFrm.form.divEvlReg.form.cboErrMsgClCd","text","dsDtl","errMsgClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFrm.form.divEvlReg.form.edtInptCnt","value","dsDtl","inptCnt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ErrMsgP01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : ErrMsgP01 Form
        * FILE NAME     : ErrMsgP01.xfdl
        * DESCRIPTION   : 오류메세지 등록
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.23    김광용	     최초생성
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
        	//trace("[samplePopupSub01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 값 초기화
        	this.dsDtl.clearData();
        	this.dsDtl.insertRow(0);
        	this.dsDtl.setColumn(0, "errMsgCd"    , ""    );
        	this.dsDtl.setColumn(0, "errMsgClCd"  , ""    );
        	this.dsDtl.setColumn(0, "errMsgNm"   , ""    );
        	this.dsDtl.setColumn(0, "useYn"          , "N"   );

        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsErrMsgClCd", groupId:"ERR_MSG_CL_CD", headflag:"S" , useYn:"Y"};
        	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	//trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드
        			break;
        		default:
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
        			case -2 :

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "insertErrMsg" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000006", "", function(svcid, variant) {
        				if(variant == "OK") {
        					var strRtn = this.gfnSetPopupReturn({ isReLoad : "Y" });
        					this.gfnPopupClose(this, strRtn);

        				}
        			});
        			break;

        		case "checkErrMsg" :
        			// 후처리 코드

        			// 중복이 존재하지 않는다면 - 사용가능
        			if(this.dsCheckInfo.getColumn(0, "checkYn") == "Y") {

        				this.divFrm.form.divEvlReg.form.edtErrMsgCd.set_readonly(true);
        				this.divFrm.form.divEvlReg.form.btnDupl.set_enable(false);
        				this.divFrm.form.divEvlReg.form.btnDelDupl.set_enable(true);
        				this.divFrm.form.divEvlReg.form.btnDelDupl.set_visible(true);

        				this.divFrm.form.divEvlReg.form.cboErrMsgClCd.setFocus();

        			} else {
        				this.gfnShowMessage(this, ["Alert","이미 사용중입니다.\n다시 입력해주세요."], "", function(svcid, variant) {
        					this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        				});
        			}
        			break;

        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 등록
        */
        this.fnCallInsert = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "insertErrMsg";
        	objArgs.url 			= "/adm/cd/errMsg/insertErrMsg.irs";
         	objArgs.inds      		= "dsDtl=dsDtl";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 오류메시지코드 중복체크 하기
        */
        this.fnCallCheckDupl = function(sErrMsgCd)
        {
        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.dsCheckInfo.setColumn(0, "errMsgCd", sErrMsgCd);

        	var objArgs = {};
         	objArgs.svcId 			= "checkErrMsg";
        	objArgs.url 			= "/adm/cd/errMsg/checkErrMsg.irs";
         	objArgs.inds      		= "dsCheckInfo=dsCheckInfo";
         	objArgs.outds     		= "dsCheckInfo=dsCheckInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 중복체크 초기화
        */
        this.fnClearDsCheckInfo = function() {
        	this.dsCheckInfo.clearData();
        	this.dsCheckInfo.insertRow(0);
        	this.dsCheckInfo.setColumn(0, "checkYn", "N");
        }

        /**
         * @description "X" 버튼 클릭
        */
        this.divFrm_btnCls_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description 등록 버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	// 중복체크
        	if(this.dsCheckInfo.getColumn(0, "checkYn") == "N") {
        		this.gfnShowMessage(this, "W000002", "", function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        		});
        		return false;
        	}

        	// 오류메시지코드
        	if(this.gfnIsNull(this.divFrm.form.divEvlReg.form.edtErrMsgCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divFrm.form.divEvlReg.form.edtErrMsgCd.tooltiptext, function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        		});
        		return false;
        	}

        	// 오류메시지구분코드
        	if(this.gfnIsNull(this.divFrm.form.divEvlReg.form.cboErrMsgClCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divFrm.form.divEvlReg.form.cboErrMsgClCd.tooltiptext, function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.cboErrMsgClCd.setFocus();
        		});
        		return false;
        	}

        	// 오류메시지명
        	if(this.gfnIsNull(this.divFrm.form.divEvlReg.form.edtErrMsgNm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divFrm.form.divEvlReg.form.edtErrMsgNm.tooltiptext, function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.edtErrMsgNm.setFocus();
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallInsert();
        		}
        	});
        };

        /**
         * @description 취소 버튼 클릭
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description 중복체크 버튼 클릭
        */
        this.divFrm_divEvlReg_btnDupl_onclick = function(obj,e)
        {
        	// 오류메시지코드
        	if(this.gfnIsNull(this.divFrm.form.divEvlReg.form.edtErrMsgCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divFrm.form.divEvlReg.form.edtErrMsgCd.tooltiptext, function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        		});
        		return false;
        	}

        	// 길이체크
        	if(this.divFrm.form.divEvlReg.form.edtErrMsgCd.value.length != 7) {
        		this.gfnShowMessage(this, ["Alert","오류메시지코드는 7자리로 입력하세요."], "", function(svcid, variant) {
        			this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        		});
        		return false;
        	}

        	// 중복체크 하기
        	this.fnCallCheckDupl(this.divFrm.form.divEvlReg.form.edtErrMsgCd.value);
        };

        /**
         * @description 중복 검색 우측 제거 클릭
        */
        this.divFrm_divEvlReg_btnDelDupl_onclick = function(obj,e)
        {
        	this.divFrm.form.divEvlReg.form.edtErrMsgCd.set_readonly(false);
        	this.divFrm.form.divEvlReg.form.btnDupl.set_enable(true);
        	this.divFrm.form.divEvlReg.form.btnDelDupl.set_enable(false);
        	this.divFrm.form.divEvlReg.form.btnDelDupl.set_visible(false);

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.divFrm.form.divEvlReg.form.edtErrMsgCd.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divTitFrm.form.btnCls.addEventHandler("onclick",this.divFrm_btnCls_onclick,this);
            this.divFrm.form.divEvlReg.form.staInptCnt.addEventHandler("onclick",this.divFrm_divEvlReg_staDelYn_onclick,this);
            this.divFrm.form.divEvlReg.form.btnDupl.addEventHandler("onclick",this.divFrm_divEvlReg_btnDupl_onclick,this);
            this.divFrm.form.divEvlReg.form.btnDelDupl.addEventHandler("onclick",this.divFrm_divEvlReg_btnDelDupl_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("ErrMsgP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
