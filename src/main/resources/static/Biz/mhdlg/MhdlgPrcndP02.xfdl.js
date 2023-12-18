(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HistP01");
            this.set_titletext("방법론 수정이력");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"rvsnDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"chgMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"chgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"fileTypeClCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTit","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","18","7","200","30",null,null,null,null,null,null,this.divTit.form);
            obj.set_taborder("0");
            obj.set_text("이력내역");
            obj.set_cssclass("sta_POP_Title");
            this.divTit.addChild(obj.name, obj);

            obj = new Button("btnCls",null,"0","45","45","0",null,null,null,null,null,this.divTit.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("");
            this.divTit.addChild(obj.name, obj);

            obj = new Div("divPop","45","89","710","590",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","0",null,"30","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_text("변경이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divPop.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","staUsrInfo:10",null,"228","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"428\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"변경항목\" tooltiptext=\"변경항목\"/><Cell col=\"2\" text=\"처리구분\" tooltiptext=\"처리구분\"/><Cell col=\"3\" text=\"변경일자\" tooltiptext=\"변경일자\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:chgArtclNm\" textAlign=\"center\" tooltiptext=\"bind:chgArtclNm\"/><Cell col=\"2\" text=\"bind:chgPrcsTypeCd\" textAlign=\"center\" displaytype=\"normal\" tooltiptext=\"bind:chgPrcsTypeCd\" combodataset=\"dsResult07\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"3\" text=\"bind:chgDt\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" tooltiptext=\"bind:chgDt\"/></Band></Format></Formats>");
            this.divPop.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdInstChgHistList:10",null,"21","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","divPaging:20",null,"30","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_text("변경이력 상세정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divPop.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList00","0","staUsrInfo00:10",null,"228","0",null,null,null,null,null,this.divPop.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistDtlList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"140\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"변경항목\"/><Cell col=\"2\" text=\"변경전\"/><Cell col=\"3\" text=\"변경후\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:chgArtclNm\" tooltiptext=\"bind:chgArtclNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:bchgCn\" tooltiptext=\"bind:bchgCn\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:achgCn\" tooltiptext=\"bind:achgCn\" textAlign=\"center\"/></Band></Format></Formats>");
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

            //-- Default Layout : this.divPop.form.divPaging
            obj = new Layout("default","",0,0,this.divPop.form.divPaging.form,function(p){});
            this.divPop.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPop.form
            obj = new Layout("default","",0,0,this.divPop.form,function(p){});
            this.divPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,710,this,function(p){});
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
        this.registerScript("MhdlgPrcndP02.xfdl", function() {
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
        	// 전달된 Parameter 개별로 받기
        	try
        	{
        		this.mhdlgMgno  	= this.getOwnerFrame().arguments["mhdlgMgno"];
        		this.mhdlgDgr  	= this.getOwnerFrame().arguments["mhdlgDgr"];
        		trace(this.mhdlgMgno + ",,,,,,,,,,,,,,," + this.mhdlgDgr)
        	}
        	catch (e)
        	{
        		this.mhdlgMgno  	= this.parent.mhdlgMgno;
        		this.mhdlgDgr  	= this.parent.mhdlgDgr;
        	}

        	// 검색 데이터셋 초기화.
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "mhdlgMgno", this.mhdlgMgno);
        	this.dsSrh.setColumn(0, "mhdlgDgr", this.mhdlgDgr);
        		// 페이지표시 Div 초기화
        	this.divPop.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        	this.fnCallHistList();

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
        		case "selectInstChgHstryList" :
        			// 후처리 코드
        			this.dsHistDtlList.clearData();		//변경이력 상세정보 초기화

        			if(this.dsHistList.rowcount > 0) {

        				var chgMgno = this.dsHistList.getColumn(0, "chgMgno");
        				this.dsSrh.setColumn(0, "chgMgno", chgMgno);
        				this.fnCallHistDtlList();

        			}

        			this.divPop.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 페이징처리 호출 CallBack 함수(선택)
         */
        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallHistList(); // 조회함수호출
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallSearchList = function()
        {
        	var callUrl = "";
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		callUrl = "/biz/mhdlg/mhdlgAply/selectRvsnHistory.irs";
        	}else
        	{
        		callUrl = "/adm/mhdlg/mhdlgAply/selectRvsnHistory.irs";
        	}
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectRvsnHistory";
         	objArgs.url 			= "/biz/mhdlg/mhdlgAply/selectRvsnHistory.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsMhdlgInfo=dsMhdlgInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        this.fnCallHistList = function()
        {
        	trace("이력 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstChgHstryList";
         	objArgs.url 			= "/biz/mhdlg/mhdlgPrcndy/selectInstChgHstryList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsHistList=dsHistList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        this.fnCallHistDtlList = function()
        {
        	trace("이력 상세 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstChgHstryDtlList";
         	objArgs.url 			= "/biz/mhdlg/mhdlgPrcndy/selectInstChgHstryDtlList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsHistDtlList=dsHistDtlList";
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
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "X" 버튼 클릭
        */
        this.divTit_btnCls_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//사업수행자 권한
        	if(roleIdMgno == "RL00000004" || roleIdMgno == "RL00000005" || roleIdMgno == "RL00000009" || roleIdMgno == "RL00000010")
        	{
        		return true;
        	//관장기관(위탁기관) 권한
        	}else
        	{
        		return false;
        	}
        }

        this.divHstryGrid_grdInstChgHistList_oncellclick = function(obj,e)
        {
        	var mhdlgMgno = this.dsHistList.getColumn(e.row, "mhdlgMgno");
        	var mhdlgDgr = this.dsHistList.getColumn(e.row, "mhdlgDgr");
        	var chgMgno = this.dsHistList.getColumn(e.row, "chgMgno");
        	this.dsSrh.setColumn(0,'chgMgno', chgMgno);
        	this.fnCallHistDtlList();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTit.form.btnCls.addEventHandler("onclick",this.divTit_btnCls_onclick,this);
            this.divPop.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divPop.form.grdInstChgHistList.addEventHandler("oncellclick",this.divHstryGrid_grdInstChgHistList_oncellclick,this);
            this.divPop.form.staUsrInfo00.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
        };
        this.loadIncludeScript("MhdlgPrcndP02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
