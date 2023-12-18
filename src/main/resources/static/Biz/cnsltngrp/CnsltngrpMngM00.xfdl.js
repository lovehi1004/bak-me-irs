(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionM00");
            this.set_titletext("국제감축협의체관리 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldNo\" type=\"STRING\" size=\"256\"/><Column id=\"cnsltngrpCmpsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cmpsCnt\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCncldClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCncldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhCnsltngrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhCncldNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsNtnCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"iataNtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnEngNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,"687","30",null,"1500",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCncldGbn","35","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCncldGbn","staCncldGbn:6","30",null,"32","1235",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCncldClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staCnsltngrpNm","1001","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("협의체명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCnsltngrpNm","staCnsltngrpNm:-11","30",null,"32","btnSearch:101",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAgrNm","425","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("체결명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAgrNm","staAgrNm:6","30",null,"32","616",null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","175",null,"389","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"42\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"84\"/><Column size=\"116\"/><Column size=\"83\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"체결국가\"/><Cell col=\"4\" text=\"원문\"/><Cell col=\"5\" rowspan=\"2\" text=\"조약번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"협의체구성일자\"/><Cell col=\"7\" rowspan=\"2\" text=\"구성원수\"/><Cell col=\"8\" rowspan=\"2\" text=\"이력\"/><Cell col=\"9\" rowspan=\"2\" text=\"조회\"/><Cell row=\"1\" col=\"4\" text=\"국문\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"bind:cncldClNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:ntnNm\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:cncldOrgtNm\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"bind:cncldNo\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" text=\"bind:cnsltngrpCmpsYmd\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:cmpsCnt\" textAlign=\"center\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"buttoncontrol\" text=\"이력\" edittype=\"button\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"조회\"/><Cell row=\"1\" col=\"4\" text=\"bind:cncldKrnNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnCnsltngrpReg","grdList:-226","133",null,"32","152",null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("협의체등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1626","290","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divReg01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg01","1662","308","294","184",null,null,null,null,null,null,this.divReg01.form);
            obj.set_taborder("0");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.divReg01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail01
            obj = new Layout("default","",0,0,this.divDetail01.form,function(p){});
            this.divDetail01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg01.form.divReg01.form
            obj = new Layout("default","",0,0,this.divReg01.form.divReg01.form,function(p){});
            this.divReg01.form.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg01.form
            obj = new Layout("default","",0,0,this.divReg01.form,function(p){});
            this.divReg01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.cboCncldGbn","value","dsSrh","srhCncldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboRegTypeCd","value","dsSrh","srhRegTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboNewRvsmTypeCd","value","dsSrh","srhNewRvsmTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.edtCnsltngrpNm","value","dsSrh","srhCnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.cboPrcsTypeCd","value","dsSrh","srhPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.cboBizFldCd","value","dsSrh","srhBizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboBizDtlsFldCd","value","dsSrh","srhBizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.cboBizTypeCd","value","dsSrh","srhBizTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divList.form.divSearch.form.cboBizScalCd","value","dsSrh","srhBizScalCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divList.form.divSearch.form.cboInstMngNo","value","dsSrh","srhInstMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divList.form.divSearch.form.cboAddDataYn","value","dsSrh","srhAddDataYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divList.form.divSearch.form.edtAgrNm","value","dsSrh","srhCncldNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("CnsltngrpMngM00.xfdl", function() {
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
        	// 그리드 설정
        	//this.grdList.griduserproperty = "none";

        	// div 위치 조정 , divDetail (상세) , divReg (등록)

        	//국제감축협의체 상세
        	this.divDetail01.set_left(0);
        	this.divDetail01.set_top(0);
        	this.divDetail01.set_width(null);
        	this.divDetail01.set_height(null);
        	this.divDetail01.set_right(0);
        	this.divDetail01.set_bottom(0);


        	this.divReg01.set_left(0);
        	this.divReg01.set_top(0);
        	this.divReg01.set_width(null);
        	this.divReg01.set_height(null);
        	this.divReg01.set_right(0);
        	this.divReg01.set_bottom(0);

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
        	trace("[CnsltngrpMngM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 국제감축협의체 상세
        	this.divDetail01.set_url("Biz_cnsltngrp::CnsltngrpMngS01.xfdl");

        	// 국제감축협의체 등록
        	this.divReg01.set_url("Biz_cnsltngrp::CnsltngrpMngS02.xfdl");


        	// 검색용 데이터셋 초기화
        	this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhCncldCd", "");
        	this.dsSrh.setColumn(0, "srhCnsltngrpNm", "");
        	this.dsSrh.setColumn(0, "srhNtnNm", "");


        	// 공통코드 조회
         	var arrParam = [];
         	arrParam[0] = {outDs:"dsCncldClCd", groupId:"CNCLD_CL_CD", headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsRegTypeCd", groupId:"REG_TYPE_CD", headflag:"A" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsNewRvsmTypeCd", groupId:"NEW_RVSN_TYPE_CD", headflag:"A" , useYn:"Y"};

         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	//버튼 컨트롤
        	this.fnRegBtnCtrl();

        	// 검색시작
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList(); 	//국제감축협의체 목록조회
        	this.fnCallNtnList();		//체결국가 콤보박스 목록조회
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
        			// 후처리 코드
        			this.dsCncldClCd.setColumn(0, "srhCncldCd", "BGC0001");
        			trace("코드 수신 완료!!");
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

        	}

        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		case "ntnList" :

        			var rRow =  this.dsNtnCd.insertRow(0);
        			this.dsNtnCd.setColumn(rRow,'iataNtnCd','');
        			this.dsNtnCd.setColumn(rRow,'ntnKornNm','- 선택 -');
        			this.dsNtnCd.setColumn(rRow,'ntnEngNm','');
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
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/adm/cnsltngrp/cnsltngrpMng/selectCnsltngrpMngList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        //콤보박스 체결구가 목록
        this.fnCallNtnList = function()
        {
        	var objArgs = {};
         	objArgs.svcId 			= "ntnList";
         	objArgs.url 			= "/common/code/selectUserCommonCodeList.irs";
         	objArgs.inds      		= "dsPrivCd=dsPrivCd";
         	objArgs.outds     		= "dsNtnCd=dsNtnCd";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        }


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

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
        	// TODO
        	trace("[CnsltngrpMngM00]fnChangeDiv =========================");
        	this.fnCallSearchList(); 	//국제감축협의체 목록조회
        };
        //버튼 컨트롤
        this.fnRegBtnCtrl = function()
        {
        	if(this.fnAccessAuth(this.fvApp.User.roleIdMgno))
        	{
        		this.divList.form.btnCnsltngrpReg.set_visible(true);

        	}else
        	{
        		this.divList.form.btnCnsltngrpReg.set_visible(false);
        	}
        }

        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//전체관리자, 관장기관, 외교부 권한 순
        	if(roleIdMgno == "RL00000001" || roleIdMgno == "RL00000002" || roleIdMgno == "RL00000006")
        	{
        		return true;
        	//그 외 권한
        	}else
        	{
        		return false;
        	}
        }
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhCncldCd", "");
        	this.dsSrh.setColumn(0, "srhCnsltngrpNm", "");
        	this.dsSrh.setColumn(0, "srhCncldNm", "");

        };


        // 그리드내의 행 클릭
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	if(e.cell == 9)
        	{

        		var objArgs = {};
        		objArgs.cnsltngrpMgno 	= this.dsList.getColumn(e.row, "cnsltngrpMgno");
        		objArgs.cncldMgno 		= this.dsList.getColumn(e.row, "cncldMgno");
        		objArgs.cncldDgr 		= this.dsList.getColumn(e.row, "cncldDgr");

        		trace("cnsltngrpMgno======"+objArgs.cnsltngrpMgno);
        		trace("cncldMgno======"+objArgs.cncldMgno);
        		trace("cncldDgr====="+objArgs.cncldDgr);

        		// 화면전환
        		this.divList.set_visible(false);
        		this.divDetail01.set_visible(true);
        		this.divReg01.set_visible(false);

        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출


        		this.divDetail01.form.fnChangeDiv(objArgs);
        	}else if(e.cell == 8){									//이력 목록 팝업
        		var sPopupId 	= "popModalHstryP01";
        		var sMnuId 		= "MN99050000";
        		var oPosition	= {width:800,height:750};
        		var objArgs		= {};
        		objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "cnsltngrpMgno");
        		objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "cncldDgr");
        		objArgs.menu	= "CNS";

        		var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);

        	}

        };

        this.divList_btnCnsltngrpReg_onclick = function(obj,e)
        {
        	// 화면전환
        	this.divList.set_visible(false);
        	this.divDetail01.set_visible(false);
        	this.divReg01.set_visible(true);

        	// 상세화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};


        	this.divReg01.form.fnChangeDiv(objArgs);
        };
        //엑셀 다운로드
        this.divList_btnExcelDown_onclick = function(obj,e)
        {

        	var url = nexacro.getApplication().Tran.fwUrl + "/adm/cnsltngrp/cnsltngrpMng/selectCnsltngrpMngExcel.irs";

        	this.fdtExcel.set_url(url);

        	this.fdtExcel.setPostData("srhCncldCd", this.dsSrh.getColumn(0, "srhCncldCd"));
        	this.fdtExcel.setPostData("srhCnsltngrpNm", this.dsSrh.getColumn(0, "srhCnsltngrpNm"));
        	this.fdtExcel.setPostData("srhCncldNm", this.dsSrh.getColumn(0, "srhCncldNm"));

        	this.fdtExcel.setPostData("downloadExcelFileNm","국제감축협의체관리목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","국제감축협의체관리");

        	//파일다운로드 실행
        	this.fdtExcel.download();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staCncldGbn.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staCnsltngrpNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.divSearch.form.staAgrNm.addEventHandler("onclick",this.divList_divSearch_staBizNm_onclick,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.staTotCnt.addEventHandler("onclick",this.divList_staTotCnt_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnCnsltngrpReg.addEventHandler("onclick",this.divList_btnCnsltngrpReg_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("CnsltngrpMngM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
