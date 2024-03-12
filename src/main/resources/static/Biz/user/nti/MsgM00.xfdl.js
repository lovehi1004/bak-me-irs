(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MsgM00");
            this.set_titletext("알림(SMS)관리 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"msgNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhMsgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInptTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSmsList","0","0",null,null,"0","0","1400",null,"410",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","30",null,null,null,null,null,this.divSmsList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divSmsList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divSmsList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSmsList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divSmsList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSmsList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldGbn","35","30","80","32",null,null,null,null,null,null,this.divSmsList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("메시지명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divSmsList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAgrNm","staCncldGbn:0","30","500","32",null,null,null,null,null,null,this.divSmsList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("메세지명");
            obj.set_text("");
            this.divSmsList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","175",null,null,"35","75","1400",null,null,null,this.divSmsList.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"90\"/><Column size=\"500\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"메시지코드\"/><Cell col=\"2\" text=\"메시지명\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"수정일자\"/><Cell col=\"5\" text=\"조회\" cssclass=\"bdNone\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:msgMgno\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:msgNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:regDt\"/><Cell col=\"4\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" text=\"bind:mdfcnDt\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"Cell_WF_Search bdNone\"/></Band></Format></Formats>");
            this.divSmsList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divSmsList.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divSmsList.addChild(obj.name, obj);

            obj = new Div("divPaging","5","grdList:25",null,"20","30",null,null,null,null,null,this.divSmsList.form);
            obj.set_taborder("4");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divSmsList.addChild(obj.name, obj);

            obj = new Button("btnMsgReg",null,null,"105","32","35","grdList:10",null,null,null,null,this.divSmsList.form);
            obj.set_taborder("2");
            obj.set_text("메시지등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divSmsList.addChild(obj.name, obj);

            obj = new Div("divSmsReg","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSmsReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSmsDetail","1636","310","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divSmsDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSmsList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divSmsList.form.divSearch.form,function(p){});
            this.divSmsList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSmsList.form.divPaging
            obj = new Layout("default","",0,0,this.divSmsList.form.divPaging.form,function(p){});
            this.divSmsList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSmsList.form
            obj = new Layout("default","",0,0,this.divSmsList.form,function(p){});
            this.divSmsList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSmsReg
            obj = new Layout("default","",0,0,this.divSmsReg.form,function(p){});
            this.divSmsReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSmsDetail
            obj = new Layout("default","",0,0,this.divSmsDetail.form,function(p){});
            this.divSmsDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSmsList.form.divSearch.form.edtAgrNm","value","dsSrh","srhMsgNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("MsgM00.xfdl", function() {
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
        	this.divSmsReg.set_left(0);
        	this.divSmsReg.set_top(0);
        	this.divSmsReg.set_width(null);
        	this.divSmsReg.set_height(null);
        	this.divSmsReg.set_right(0);
        	this.divSmsReg.set_bottom(0);

        	this.divSmsDetail.set_left(0);
        	this.divSmsDetail.set_top(0);
        	this.divSmsDetail.set_width(null);
        	this.divSmsDetail.set_height(null);
        	this.divSmsDetail.set_right(0);
        	this.divSmsDetail.set_bottom(0);
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
        	trace("[Msg]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	//메세지 상세조회
        	this.divSmsDetail.set_url("Biz_user::/nti/MsgS01.xfdl");
        	// 메세지 등록
        	this.divSmsReg.set_url("Biz_user::/nti/MsgS02.xfdl");


        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhMsgNm", "");

        	// 페이지표시 Div 초기화
        	this.divSmsList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 공통코드 조회
        	this.fnCallComCdoe();

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
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
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			break;
        		default:
        			break;
        	}
        };

        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgAlert01" :
        			// 후처리 코드
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
        				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
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
        			this.divSmsList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divSmsList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
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

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/adm/nti/msg/selectMsgList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        //공통코드 조회
        this.fnCallComCdoe = function()
        {
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsInptTypeCd", 	groupId:"INPT_TYPE_CD", 		headflag:"A", useYn:"Y"}; //구분

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        };

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
        this.fnChangeDiv = function()
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhMsgNm", "");

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        this.divSmsList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divSmsList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhMsgNm", "");

        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        // 그리드내의 행 클릭
        this.divSmsList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divSmsList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 5)
        	{
        		var objArgs = {};
        		objArgs.msgMgno 	= this.dsList.getColumn(e.row, "msgMgno");

        		trace("msgMgno======"+objArgs.msgMgno);

        		// 화면전환
        		this.divSmsList.set_visible(false);
        		this.divSmsDetail.set_visible(true);
        		this.divSmsReg.set_visible(false);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출

        		this.divSmsDetail.form.fnChangeDiv(objArgs);
        	}
        };

        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//전체관리자, 관장기관, 외교부 권한 순
        	if(roleIdMgno == "RL00000001" || roleIdMgno == "RL00000002" || roleIdMgno == "RL00000006")
        	{
        		return true;
        	//그 외 권한
        	} else {
        		return false;
        	}
        }

        // 메세지 등록버튼 이벤트
        this.divSmsList_btnMsgReg_onclick = function(obj,e)
        {
        	// 화면전환
        	this.divSmsList.set_visible(false);
        	this.divSmsReg.set_visible(true);
        	this.divSmsDetail.set_visible(false);

        	// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	this.divSmsReg.form.fnChangeDiv(objArgs);
        };

        // 엔터키로 조회
        this.divSmsList_divSearch_edtAgrNm_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false)
        	{
        		this.dsSrh.setColumn(0, "srhMsgNm", this.divSmsList.form.divSearch.form.edtAgrNm.text);
        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divSmsList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divSmsList_divSearch_btnSearch_onclick,this);
            this.divSmsList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divSmsList_divSearch_btnRefresh_onclick,this);
            this.divSmsList.form.divSearch.form.staCncldGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divSmsList.form.divSearch.form.edtAgrNm.addEventHandler("onkeydown",this.divSmsList_divSearch_edtAgrNm_onkeydown,this);
            this.divSmsList.form.grdList.addEventHandler("oncellclick",this.divSmsList_grdList_oncellclick,this);
            this.divSmsList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divSmsList.form.btnMsgReg.addEventHandler("onclick",this.divSmsList_btnMsgReg_onclick,this);
        };
        this.loadIncludeScript("MsgM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
