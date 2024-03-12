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
            this.set_titletext("정보공개 협정약정 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"newRvsnTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"pactNo\" type=\"STRING\" size=\"256\"/><Column id=\"sgntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"eftvnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCncldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhRegTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhNtnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCncldClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","55","177",null,null,"55","77",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"550\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"체결국가\"/><Cell col=\"3\" text=\"협정명원문\"/><Cell col=\"4\" rowspan=\"2\" text=\"조약번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"서명일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"조회\" cssclass=\"bdNone\"/><Cell row=\"1\" col=\"3\" text=\"협정명국문\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:cncldClNm\" textAlign=\"center\" tooltiptext=\"bind:cncldClNm\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:ntnNm\" textAlign=\"center\" tooltiptext=\"bind:ntnNm\"/><Cell col=\"3\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, cncldOrgtNm, currow, 3)\" tooltiptext=\"bind:cncldOrgtNm\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:pactNo\" textAlign=\"center\" tooltiptext=\"bind:pactNo\"/><Cell col=\"5\" rowspan=\"2\" text=\"expr:cncldClCd == &apos;CNC0003&apos; ? &apos;-&apos; : eftvnYmd\" textAlign=\"center\" displaytype=\"expr:cncldClCd == &apos;CNC0003&apos; || regTypeCd == &apos;RTC0003&apos;? &apos;normal&apos; : &apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\" tooltiptext=\"expr:cncldClCd == &apos;CNC0003&apos; ? &apos;-&apos; : eftvnYmd\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search, bdNone\" edittype=\"button\" displaytype=\"buttoncontrol\" accessibilitydescription=\"협정약정MOU상세화면전환\"/><Cell row=\"1\" col=\"3\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, cncldKrnNm, currow, 3)\" tooltiptext=\"bind:cncldKrnNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnArea","55","16","422","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAgrStipl","0","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("0");
            obj.set_text("협정·약정 현황");
            obj.set_cssclass("btn_Board_TabMenu_on");
            obj.set_accessibilitylabel("협정약정현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnMhdlg","141","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("1");
            obj.set_text("방법론 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("방법론현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnIrb","282","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("2");
            obj.set_text("국제감축사업 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("국제감축사업현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Div("divSearch","50","66",null,"94","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","31","65","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_accessibilitylabel("검색");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","31","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_accessibilitylabel("검색조건초기화");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldClCd","35","31","50","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCncldClCd","85","31","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCncldClCd");
            obj.set_cssclass("WFSA");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("협정구분");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboRegTypeCd","325","31","150","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsRegTypeCd");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_codecolumn("cdMgno");
            obj.set_accessibilitylabel("등록유형");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRegTypeCd","245","31","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("등록유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNtnNm","585","31","300","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("체결국가");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNtnNm","505","30","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("체결국가");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divPaging","55","grdList:25",null,null,"55","35",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtnArea.form
            obj = new Layout("default","",0,0,this.divBtnArea.form,function(p){});
            this.divBtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtNtnNm","value","dsSrh","srhNtnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboRegTypeCd","value","dsSrh","srhRegTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCncldClCd","value","dsSrh","srhCncldCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("AgrStiplCmmInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 협정약정MOU 목록화면
        * FILE NAME     : AgrStiplCmmInfoM00.xfdl
        * DESCRIPTION   : 정보공개 협정약정MOU 목록화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.12    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

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
        	trace("[DataBoardM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	this.getOwnerFrame().form.fnLoadComplete('AgrStiplInfoM00');
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

        	//공통코드 호출
        	var arrParam = [];
         	arrParam[0] = {outDs:"dsCncldClCd", groupId:"CNCLD_CL_CD", headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsRegTypeCd", groupId:"REG_TYPE_CD", headflag:"A" , useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
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
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

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
        	this.grdList.set_enableredraw(false);
        	this.grdList.set_enableredraw(true);
        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */

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
        		case "AgrStiplList" :
        			// 후처리 코드
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
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


        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnSearch(); // 조회함수호출
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
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {
         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "AgrStiplList";
          	objArgs.url 			= "/common/inforls/selectAgrStiplList.irs";
          	objArgs.inds			= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
          	objArgs.outds			= "dsList=dsList dsPageInfo=dsPageInfo"
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
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

        	this.scrollTo(0,0);
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'srhCncldCd','');
        	this.dsSrh.setColumn(0,'srhRegTypeCd','');
        	this.fnSearch();
        	// 상세 호출
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */


        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnSearch();
        };


        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		var objArgs = {};
        		objArgs.cncldMgno = this.dsList.getColumn(e.row,'cncldMgno');
        		objArgs.cncldDgr = this.dsList.getColumn(e.row,'cncldDgr');
        		objArgs.prePage = 'AgrStiplCmmInfoM00';
        		this.getOwnerFrame().form.fnAgrStiplInfoDtlCall(objArgs);
        	}
        };

        this.divBtnArea_btnAgrStipl_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnAgrStiplInfoListCall();
        };

        this.divBtnArea_btnMhdlg_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnMhdlgInfoListCall();
        };

        this.divBtnArea_btnIrb_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnIrbInfoListCall();
        };


        this.Form_Member_onkeydown = function(obj,e)
        {
        			// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);

        		var ntnNm = this.divSearch.form.edtNtnNm.text;
        		this.dsSrh.setColumn(0, "srhNtnNm", ntnNm);
        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnSearch();
        	}
        };

        //검색조건 초기화
        this.divSearch_btnRefresh_onclick = function(obj,e)
        {
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'srhCncldCd','');
        	this.dsSrh.setColumn(0,'srhRegTypeCd','');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.Form_Member_onkeydown,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divBtnArea.form.btnAgrStipl.addEventHandler("onclick",this.divBtnArea_btnAgrStipl_onclick,this);
            this.divBtnArea.form.btnMhdlg.addEventHandler("onclick",this.divBtnArea_btnMhdlg_onclick,this);
            this.divBtnArea.form.btnIrb.addEventHandler("onclick",this.divBtnArea_btnIrb_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnRefresh.addEventHandler("onclick",this.divSearch_btnRefresh_onclick,this);
            this.divSearch.form.edtNtnNm.addEventHandler("onkeydown",this.divSearch_edtNtnNm_onkeydown,this);
        };
        this.loadIncludeScript("AgrStiplCmmInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
