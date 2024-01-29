(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comRegisterUserStep2");
            this.set_titletext("아이디/비밀번호 찾기 > 정보 입력");
            this.set_cssclass("frm_MEMBER_Bg");
            this.set_dragscrolltype("both");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhType\" type=\"STRING\" size=\"256\"/><Column id=\"srhFlnm\" type=\"STRING\" size=\"256\"/><Column id=\"srhLgnId\" type=\"STRING\" size=\"256\"/><Column id=\"srhEml\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"resultType\" type=\"STRING\" size=\"256\"/><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1566","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divContent","0",null,null,"650","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            obj.set_background("#f2f2f2");
            this.addChild(obj.name, obj);

            obj = new Div("divIdBoz","158","192","600","250",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_idpwSrh_Box");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcHeadLine","48","20","486","40",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'#1a61cc\'><b v=\'true\'>본인인증</b></fc> 수단을 통해서 아이디를 찾을 수 있습니다.");
            obj.set_cssclass("sta_MB_idpwSrh_title03");
            obj.set_usedecorate("true");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new ImageViewer("ImgLogo","42","98","98","91",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MB_idSrh.png\')");
            obj.set_text("");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new Static("stcFlnm","177","106","115","40",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("2");
            obj.set_text("회원이름");
            obj.set_cssclass("sta_MB_idpwSrh_title04");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("회원이름");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new Static("stcEml","177","156","115","40",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("sta_MB_idpwSrh_title04_E");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("이메일");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","292","108","255","36",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("15");
            obj.set_tooltiptext("회원이름");
            obj.set_accessibilitylabel("회원이름");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new Edit("edtEml","292","158","255","36",null,null,null,null,null,null,this.divContent.form.divIdBoz.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("120");
            obj.set_tooltiptext("이메일");
            obj.set_accessibilitylabel("이메일");
            this.divContent.form.divIdBoz.addChild(obj.name, obj);

            obj = new Button("btnCancel","746",null,"75","32",null,"25",null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_tooltiptext("취소");
            obj.set_accessibilitylabel("취소");
            obj.set_accessibilitydescription("취소");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcTop","566","48",null,"40","566",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_cssclass("sta_MB_idpwSrh_title01");
            obj.set_textAlign("center");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcHeaderId","161","141","112","40",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("sta_MB_idpwSrh_title02");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stcHeaderPw","811","141","133","40",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("sta_MB_idpwSrh_title02");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnFindId","383","462","150","40",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("btn_MB_idpwSrh");
            obj.set_tooltiptext("아이디 찾기");
            obj.set_accessibilitylabel("아이디 찾기");
            obj.set_accessibilitydescription("아이디 찾기");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divPwBox","808","192","600","250",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_idpwSrh_Box");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new ImageViewer("ImgLogo","44","85","98","91",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MB_pwSrh.png\')");
            obj.set_text("");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Static("stcFlnm","176","56","115","40",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("1");
            obj.set_text("회원이름");
            obj.set_cssclass("sta_MB_idpwSrh_title04_E");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("회원이름");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Static("stcLgnId","176","106","115","40",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("3");
            obj.set_text("회원아이디");
            obj.set_cssclass("sta_MB_idpwSrh_title04_E");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("회원아이디");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","291","108","255","36",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("4");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("20");
            obj.set_tooltiptext("회원아이디");
            obj.set_accessibilitylabel("회원아이디");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Edit("edtEml","291","158","255","36",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("120");
            obj.set_accessibilitylabel("이메일");
            obj.set_tooltiptext("이메일");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Static("stcEml","175","155","115","40",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("5");
            obj.set_text("이메일");
            obj.set_cssclass("sta_MB_idpwSrh_title04_E");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("이메일");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","291","58","255","36",null,null,null,null,null,null,this.divContent.form.divPwBox.form);
            obj.set_taborder("2");
            obj.set_cssclass("WFSA");
            obj.set_maxlength("15");
            obj.set_accessibilitylabel("회원이름");
            obj.set_tooltiptext("회원이름");
            this.divContent.form.divPwBox.addChild(obj.name, obj);

            obj = new Button("btnFindPassword","1033","462","150","40",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("btn_MB_idpwSrh");
            obj.set_tooltiptext("비밀번호 찾기");
            obj.set_accessibilitylabel("비밀번호 찾기");
            obj.set_accessibilitydescription("비밀번호 찾기");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnClose","1513","6","24","24",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MB_close");
            obj.set_text("close");
            obj.set_accessibilitylabel("닫기");
            obj.set_accessibilitydescription("닫기");
            obj.set_tooltiptext("닫기");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divIdBoz.form
            obj = new Layout("default","",0,0,this.divContent.form.divIdBoz.form,function(p){});
            this.divContent.form.divIdBoz.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divPwBox.form
            obj = new Layout("default","",0,0,this.divContent.form.divPwBox.form,function(p){});
            this.divContent.form.divPwBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comFindUserStep1.xfdl","");
        this.registerScript("comFindUserStep1.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comRegisterUserStep1 Form
        * FILE NAME     : comRegisterUserStep1.xfdl
        * DESCRIPTION   : 사용자등록 > 회원유형선택
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.01    Justin	     최초생성
        ***********************************************************************************/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

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
        		case "find" :
        			// 후처리 코드

        			/* 비밀번호 초기화 결과 팝업 띄우기 */
        			var resultType = this.dsResult.getColumn(0, "resultType");
        			var result = this.dsResult.getColumn(0, "result");

        			var sPopupId	= "comUserInitPop";
        			var sPopupUrl	= "Frame_Popup::comUserInitPop.xfdl";
        			var objArgs		= {pvPopType:resultType, pvValue:result};			// 1 : 아이디찾기, 2 : 비밀번호찾기
        			var oOption		= {showtitlebar:false,titletext:"사용자 공통 팝업"};
        			this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);

        			break;
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 저장
         */
        this.fnCallSearch = function()
        {
        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "find";
        	objArgs.url 			= "/common/main/user/find.irs";
        	objArgs.inds      		= "dsSrh=dsSrh";
        	objArgs.outds     		= "dsResult=dsResult";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        	trace("저장 호출...");
        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 취소 버튼 클릭
        */
        this.divContent_btnCancel_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnClose();		// 메인화면으로 이동
        };

        /**
         * @description 아이디찾기 버튼 클릭
        */
        this.divContent_btnFindId_onclick = function(obj,e)
        {
        	// 회원이름
        	if(this.gfnIsNull(this.divContent.form.divIdBoz.form.edtFlnm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divIdBoz.form.edtFlnm.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divIdBoz.form.edtFlnm.setFocus();
        		});
        		return false;
        	}

        	// 이메일
        	if(this.gfnIsNull(this.divContent.form.divIdBoz.form.edtEml.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divIdBoz.form.edtEml.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divIdBoz.form.edtEml.setFocus();
        		});
        		return false;
        	}

        	// 검색용 데이터셋 초기화
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhType", "1");
        	this.dsSrh.setColumn(0, "srhFlnm", this.divContent.form.divIdBoz.form.edtFlnm.value);
        	this.dsSrh.setColumn(0, "srhLgnId", "");
        	this.dsSrh.setColumn(0, "srhEml", this.divContent.form.divIdBoz.form.edtEml.value);

        	this.gfnShowMessage(this, ["Confirm","아이디를 조회 하시겠습니까?\n사용자 휴대폰번호로 SMS가 발송됩니다."], "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSearch();
        		}
        	});
        };

        /**
         * @description 비밀번호찾기 버튼 클릭
        */
        this.divContent_btnFindPassword_onclick = function(obj,e)
        {

        	// 회원이름
        	if(this.gfnIsNull(this.divContent.form.divPwBox.form.edtFlnm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divPwBox.form.edtFlnm.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divPwBox.form.edtFlnm.setFocus();
        		});
        		return false;
        	}

        	// 회원아이디
        	if(this.gfnIsNull(this.divContent.form.divPwBox.form.edtLgnId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divPwBox.form.edtLgnId.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divPwBox.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 이메일
        	if(this.gfnIsNull(this.divContent.form.divPwBox.form.edtEml.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divPwBox.form.edtEml.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divPwBox.form.edtEml.setFocus();
        		});
        		return false;
        	}

        	// 검색용 데이터셋 초기화
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhType", "2");
        	this.dsSrh.setColumn(0, "srhFlnm", this.divContent.form.divPwBox.form.edtFlnm.value);
        	this.dsSrh.setColumn(0, "srhLgnId", this.divContent.form.divPwBox.form.edtLgnId.value);
        	this.dsSrh.setColumn(0, "srhEml", this.divContent.form.divPwBox.form.edtEml.value);

        	this.gfnShowMessage(this, ["Confirm","비밀번호를 조회 하시겠습니까?\n사용자 휴대폰번호로 SMS가 발송됩니다."], "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSearch();
        		}
        	});
        };

        this.fnSearch1 = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divContent_btnFindId_onclick();
        	}
        };

        this.fnSearch2 = function(obj,e)
        {
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.divContent_btnFindPassword_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divContent.form.divIdBoz.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch1,this);
            this.divContent.form.divIdBoz.form.edtEml.addEventHandler("onkeyup",this.fnSearch1,this);
            this.divContent.form.btnCancel.addEventHandler("onclick",this.divContent_btnCancel_onclick,this);
            this.divContent.form.stcHeaderPw.addEventHandler("onclick",this.divContent_stc00_00_00_onclick,this);
            this.divContent.form.btnFindId.addEventHandler("onclick",this.divContent_btnFindId_onclick,this);
            this.divContent.form.divPwBox.form.edtLgnId.addEventHandler("onkeyup",this.fnSearch2,this);
            this.divContent.form.divPwBox.form.edtEml.addEventHandler("onkeyup",this.fnSearch2,this);
            this.divContent.form.divPwBox.form.edtFlnm.addEventHandler("onkeyup",this.fnSearch2,this);
            this.divContent.form.btnFindPassword.addEventHandler("onclick",this.divContent_btnFindPassword_onclick,this);
            this.divContent.form.btnClose.addEventHandler("onclick",this.divContent_btnCancel_onclick,this);
        };
        this.loadIncludeScript("comFindUserStep1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
