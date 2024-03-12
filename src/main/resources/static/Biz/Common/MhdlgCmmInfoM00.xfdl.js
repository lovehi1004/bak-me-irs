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
            this.set_titletext("정보공개 방법론 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhAgrClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"INT\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausNm\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"govBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgFldListText\" type=\"STRING\" size=\"256\"/><Column id=\"isExplnFlmnoYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrClausCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","55","177",null,null,"55","77",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"98\"/><Column size=\"81\"/><Column size=\"400\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"112\"/><Column size=\"99\"/><Column size=\"75\"/><Column size=\"60\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"신청구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"파리협정&#13;&#10;조항\"/><Cell col=\"3\" text=\"방법론명(원문)\"/><Cell col=\"4\" rowspan=\"2\" text=\"신규/개정\"/><Cell col=\"5\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"6\" rowspan=\"2\" text=\"방법론고유번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"방법론&#13;&#10;유효시작일자\"/><Cell col=\"8\" rowspan=\"2\" text=\"설명파일\"/><Cell col=\"9\" rowspan=\"2\" text=\"조회\" cssclass=\"bdNone\"/><Cell row=\"1\" col=\"3\" text=\"방법론명(국문)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:aplyTypeNm\" textAlign=\"center\" tooltiptext=\"bind:aplyTypeNm\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:agrClausNm\" textAlign=\"center\" tooltiptext=\"bind:agrClausNm\"/><Cell col=\"3\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 3)\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:regRsnNm\" textAlign=\"center\"/><Cell col=\"5\" rowspan=\"2\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgFldListText, currow, 5)\" textAlign=\"center\" tooltiptext=\"bind:mhdlgFldListText\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:mhdlgUnqno\" textAlign=\"center\" tooltiptext=\"bind:mhdlgUnqno\"/><Cell col=\"7\" rowspan=\"2\" tooltiptext=\"bind:vldBgngYmd\" text=\"bind:vldBgngYmd\" textAlign=\"center\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"Cell_Grd_Btn\" padding=\"12px 10px\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search, bdNone\" edittype=\"button\" displaytype=\"buttoncontrol\" accessibilitydescription=\"상세화면전환\"/><Cell row=\"1\" col=\"3\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgKrnNm, currow, 3)\" tooltiptext=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtnArea","55","16","422","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAgrStipl","0","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("0");
            obj.set_text("협정·약정 현황");
            obj.set_cssclass("btn_Board_TabMenu");
            obj.set_accessibilitylabel("협정약정현황");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnMhdlg","141","0","140","35",null,null,null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("1");
            obj.set_text("방법론 현황");
            obj.set_cssclass("btn_Board_TabMenu_on");
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
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_accessibilitylabel("검색");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","31","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            obj.set_accessibilitylabel("검색조건초기화");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAgrClausCd","35","31","116","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("파리협정조항 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAgrClausCd","staAgrClausCd:0","31","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsAgrClausCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("파리협정조항");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlgNm","cboAgrClausCd:30","30","86","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("방법론명 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgNm","staMhdlgNm:0","31","300","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("방법론명");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.cboAgrClausCd","value","dsSrh","srhAgrClausCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMhdlgNm","value","dsSrh","srhMhdlgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgCmmInfoM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 방법론 목록화면
        * FILE NAME     : MhdlgCmmInfoM00.xfdl
        * DESCRIPTION   : 정보공개 방법론 목록화면 관련 스크립트
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
        	this.getOwnerFrame().form.fnLoadComplete('MhdlgInfoM00');

        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

        	var arrParam = [];
        	arrParam[0] = {outDs:"dsAgrClausCd", groupId:"AGR_CLAUS_CD", headflag:"S" , useYn:"Y"};
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
        		case "MhdlgList" :
        			// 후처리 코드
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			this.fnGrdformChange();
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
          	objArgs.svcId 			= "MhdlgList";
          	objArgs.url 			= "/common/inforls/selectMhdlgList.irs";
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
        	this.dsSrh.setColumn(0,'srhAgrClausCd','');
        	this.fnSearch();

        	// 상세 호출
        }

        /**
         * @description 목록그리드 제어
         */
        this.fnGrdformChange = function()
        {
        	this.grdList.setCellProperty("body", 8, "displaytype",
        	"expr:isExplnFlmnoYn == 'Y'  ?'buttoncontrol':'none'");
        	this.grdList.setCellProperty("body", 8, "edittype",
        	"expr:isExplnFlmnoYn == 'Y' ?'none':'none'");
        	this.grdList.setCellProperty("body", 8, "text",
        	"expr:isExplnFlmnoYn == 'Y' ?'다운로드':''");

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
        	if(e.cell == 8)
        	{	var isExplnFlmnoYn = this.dsList.getColumn(e.row,'isExplnFlmnoYn');
        		if(isExplnFlmnoYn == 'Y')
        		{
        			var arrFileListInfo = [];
        			arrFileListInfo.push( { "fileGroupMgno" : this.dsList.getColumn(e.row, "explnFlmno"), "fileMgno" : this.dsList.getColumn(e.row, "fileMgno")} );
        			this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        		}

        	}else if(e.cell == 9)
        	{
        		var objArgs = {};
        		objArgs.mhdlgMgno = this.dsList.getColumn(e.row,'mhdlgMgno');
        		objArgs.mhdlgDgr = this.dsList.getColumn(e.row,'mhdlgDgr');
        		objArgs.prePage = 'MhdlgCmmInfoM00';
        		this.getOwnerFrame().form.fnMhdlgInfoDtlCall(objArgs);
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
        		this.dsSrh.setColumn(0, "srhMhdlgNm", this.divSearch.form.edtMhdlgNm.text);
        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnSearch();
        	}
        };

        //검색조건초기화
        this.divSearch_btnRefresh_onclick = function(obj,e)
        {
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0,'srhAgrClausCd','');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.Form_Member_onkeydown,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divBtnArea.form.btnAgrStipl.addEventHandler("onclick",this.divBtnArea_btnAgrStipl_onclick,this);
            this.divBtnArea.form.btnMhdlg.addEventHandler("onclick",this.divBtnArea_btnMhdlg_onclick,this);
            this.divBtnArea.form.btnIrb.addEventHandler("onclick",this.divBtnArea_btnIrb_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnRefresh.addEventHandler("onclick",this.divSearch_btnRefresh_onclick,this);
        };
        this.loadIncludeScript("MhdlgCmmInfoM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
