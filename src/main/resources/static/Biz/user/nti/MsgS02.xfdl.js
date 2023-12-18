(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AprvAplyS01");
            this.set_titletext("알림(SMS) 메세지 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1550,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSmsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"msgNm\" type=\"STRING\" size=\"256\"/><Column id=\"msgCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParaList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"inptCn\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParaTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"inptTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"inptTypeCd\">NOW_YMD</Col><Col id=\"inptTypeNm\">현재일자</Col></Row><Row><Col id=\"inptTypeCd\">BIZ_NM</Col><Col id=\"inptTypeNm\">사업명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMsgReg","0","60",null,"730","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00","0","43","150","44",null,null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("3");
            obj.set_text("메세지명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","-64","360",null,null,"704",null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("4");
            obj.set_text("메세지정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","87",null,"262","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","87","150","262",null,null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("6");
            obj.set_text("메세지내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new TextArea("taeCnsltnCn","156","94",null,"245","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("7");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00_00","0","348",null,"262","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00_00","0","348","150","262",null,null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("9");
            obj.set_text("파라미터정보");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Grid("grdParaList","160","400",null,"200","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsParaList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"94\"/><Column size=\"116\"/><Column size=\"417\"/><Column size=\"142\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"우선순위\"/><Cell col=\"2\" text=\"파라미터유형\"/><Cell col=\"3\" text=\"파라미터 내용\"/><Cell col=\"4\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:inptTypeCd\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"inptTypeCd\" combodataset=\"dsParaTypeCd\" combodatacol=\"inptTypeNm\" comboitemheight=\"20\"/><Cell col=\"3\" textAlign=\"left\" edittype=\"textarea\" text=\"bind:inptCn\" displaytype=\"textareacontrol\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Edit("edtMsgNm","154","50",null,"30","30",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("11");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00","0","0","150","44",null,null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("12");
            obj.set_text("메세지코드");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Button("btnBackList",null,"618","60","32","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("13");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"618","60","32","btnBackList:3",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Button("btnDelPara","1376","360",null,"30","0",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("15");
            obj.set_text("파라미터정보 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Button("btnAddPara","1220","360",null,"30","btnDelPara:3",null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("16");
            obj.set_text("파라미터 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Edit("edtMsgCode","154","7","228","30",null,null,null,null,null,null,this.divMsgReg.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.divMsgReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","20","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메시지정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMsgReg.form
            obj = new Layout("default","",0,0,this.divMsgReg.form,function(p){});
            this.divMsgReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1550,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMsgReg.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMsgReg.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMsgReg.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMsgReg.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMsgReg.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMsgReg.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMsgReg.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divMsgReg.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divMsgReg.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divMsgReg.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divMsgReg.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divMsgReg.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divMsgReg.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divMsgReg.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divMsgReg.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divMsgReg.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divMsgReg.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMsgReg.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMsgReg.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMsgReg.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBzentNm03_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divMsgReg.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divMsgReg.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divMsgReg.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divMsgReg.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divMsgReg.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMsgReg.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divMsgReg.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divMsgReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divMsgReg.form.rdoNewRvsmBtn","value","dsAgrInfo","newRvsnTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divMsgReg.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divMsgReg.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divMsgReg.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divMsgReg.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divMsgReg.form.edtMsgNm","value","dsSmsInfo","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divMsgReg.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divMsgReg.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divMsgReg.form.taeCnsltnCn","value","dsSmsInfo","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divAgrReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divMsgReg.form.edtMsgCode","value","dsCurInfo","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MsgS02.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : cnsltngrpMngS02 Form
        * FILE NAME     : cnsltngrpMngS02.xfdl
        * DESCRIPTION   : 국제감축협의관리 (등록)
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
        	trace("[MsgS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	this.divMsgReg.form.edtMsgNm.validate = "title:메세지명 입력,required";
        	this.divMsgReg.form.taeCnsltnCn.validate = "title:메세지내용 입력,required";
        	this.divMsgReg.form.grdParaList.validate = " col:inptTypeCd,title:파라미터유형,required"+ "|col:inptCn,title:파라미터 내용,required";
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
        		switch (nErrCode)
        		{
        // 			case -1 :
        // 				// 후처리 코드
        // 				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
        // 				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "smsSave" :
        			this.fnFormTrans();
        			break;
        		case "smsModi" :
        			this.fnFormTrans();
        			break;
        		case "callMemberList":
        			break;
        		default:
        			break;
        	}
        };
        // 캘린더 콜백
        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "sgntYmd" :		// 서명일자 달력
        			// 후처리 코드

        			break;
        		case "eftvnYmd" :		// 발효일자 달력
        			// 후처리 코드
        			break;
        		case "cnsltngrpCmpsYmd":
        			break;
        		default:
        			break;
        	}
        };
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);



        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        // ***********************************************************************************/
        this.fnMsgCodeInsert = function()
        {
        	trace("MsgMgno 호출...");
        	var callUrl = "/adm/nti/msg/selectMsgCode.irs";
        	var objArgs = {};

        	objArgs.svcId 			= "selectMsgCode";
        	objArgs.url 			= callUrl;
        	objArgs.inds      		= "dsCurInfo=dsCurInfo";
        	objArgs.outds     		= "dsCurInfo=dsCurInfo";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        }
        this.SaveMsg = function()
        {
        	var ModFlag = this.dsCurInfo.getColumn(0, "sts"); //수정 체크

        	if( ModFlag == "MOD" ){															//협의체 수정
        		trace("알림SMS 수정 호출...");

        		var callUrl = "/adm/nti/msg/insertMsg.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "smsModi";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsCurInfo=dsCurInfo dsSmsInfo=dsSmsInfo dsParaList=dsParaList";
        		objArgs.outds     		= "dsCurInfo=dsCurInfo dsSmsInfo=dsSmsInfo dsParaList=dsParaList";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);

        	}else { 																			//협의체 등록
        		trace("알림SMS 등록 호출...");

        		var callUrl = "/adm/nti/msg/insertMsg.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "smsSave";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsCurInfo=dsCurInfo dsSmsInfo=dsSmsInfo dsParaList=dsParaList";
        		objArgs.outds     		= "dsCurInfo=dsCurInfo dsSmsInfo=dsSmsInfo dsParaList=dsParaList";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        };

        this.fnCallDtlInfo = function()
        {
        	trace("수정 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/nti/msg/selectMsgDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsSmsInfo=dsSmsInfo dsParaList=dsParaList dsCurInfo=dsCurInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 수정화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {


        	trace("[MsgS02]fnChangeDiv =========================");

        	this.scrollTo(0,0);
        	this.dsCurInfo.addRow();
        	this.dsSmsInfo.clearData();
        	this.dsSmsInfo.addRow();


        	this.dsCurInfo.setColumn(0, "sts", objArgs.sts);


        	if(objArgs.sts == "MOD")
        	{
        		this.dsCurInfo.setColumn(0, "msgMgno", objArgs.msgMgno);
        		this.fnCallDtlInfo(objArgs);
        	}else {
        		this.fnMsgCodeInsert();
        	}

        };



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        /**
         * @description 목록 클릭시 목록화면으로 전환
        */



        //구성원 추가 버튼 클릭
        this.divCnsltngrpReg_btnAddMem_onclick = function(obj,e)
        {

        	var gmbrOrgtNm = "";
        	var gmbrKrnNm = "";
        	var instNm = "";
        	var mailAddr = "";
        	var ofcTelno = "";
        	var cmpsYmd = "";

        	var rRow = this.dsMemberList.addRow();
        	this.dsMemberList.setColumn(rRow,"chk",'');
        	this.dsMemberList.setColumn(rRow,"gmbrOrgtNm",gmbrOrgtNm);
        	this.dsMemberList.setColumn(rRow,"gmbrKrnNm",gmbrKrnNm);
        	this.dsMemberList.setColumn(rRow,"instNm",instNm);
        	this.dsMemberList.setColumn(rRow,"mailAddr",mailAddr);
        	this.dsMemberList.setColumn(rRow,"ofcTelno",ofcTelno);
        	this.dsMemberList.setColumn(rRow,"cmpsYmd",cmpsYmd);

        	//this.divAgrReg.form.cboNtn.set_index(0);
        };

        //파라미터 삭제 버튼 클릭
        this.divAgrReg_btnDelNtn_onclick = function(obj,e)
        {

        	var rRows = this.dsNtnList.extractRows("chk=='Y'");
        	trace("arrRows:" + rRows);
        	trace("arrRows:" + rRows.length);
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsNtnList.deleteMultiRows(this.dsNtnList.extractRows("chk=='Y'"));
        	}
        };


        // 파라미터 추가 버튼
        this.divCnsltngrpReg_btnAddPara_onclick = function(obj,e)
        {
        	var inptTypeCd = "";
        	var inptCn = "";
        	var mdfcnDt = "";
        	var rRow = this.dsParaList.addRow();
        	var dToday = this.gfnGetDate();

        	this.dsParaList.setColumn(rRow,"chk",'');
        	this.dsParaList.setColumn(rRow,"inptTypeCd",inptTypeCd);
        	this.dsParaList.setColumn(rRow,"inptCn",inptCn);
        	this.dsParaList.setColumn(rRow,"regDt",this.gfnStrToDate(dToday));




        };
        //파라미터 삭제 버튼
        this.divCnsltngrpReg_btnDelPara_onclick = function(obj,e)
        {
        	var rRows = this.dsParaList.extractRows("chk=='Y'");
        	trace("arrRows:" + rRows);
        	trace("arrRows:" + rRows.length);
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsParaList.deleteMultiRows(this.dsParaList.extractRows("chk=='Y'"));
        	}
        };
        //그리드 캘린더 초기화
        this.divCnsltngrpReg_grdParaList_onexpanddown = function(obj,e)
        {
        	var sBindColId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if ( sBindColId == "regDt")
        	{
        		this.gfnGridDayPop(obj, e);
        	}
        };
        //저장 버튼 클릭 이벤트

        this.divMsgReg_btnReg_onclick = function(obj,e)
        {
        	var bSucc = this.gfnValidation(this.divMsgReg);
        	var cnt = this.divMsgReg.form.grdParaList.rowcount;
        	if ( bSucc ==  true ){
        		if( cnt < 1) {
        			this.gfnShowMessage(this, ["Alert","파라미터정보를 추가하세요."], "", function(svcid, variant) {
        				this.divMsgReg.form.grdParaList.setFocus();
        				});
        		return false;
        		}else{
        			var bSucc = this.gfnValidation(this.divMsgReg.form.dsParaList);
        			this.saveMsg();
        		}
        	};



        };
        //저장 후 화면이동
        this.fnFormTrans = function()
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divSmsList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divSmsDetail.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divSmsReg.set_visible(false);

        	var objArgs ={};
        	objArgs.msgMgno = this.dsSmsInfo.getColumn(0,"msgMgno");
        	trace("+++++++msgMgno++++++++++"+objArgs.msgMgno);


        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.divSmsDetail.form.fnChangeDiv(objArgs);
        }
        //목록 버튼
        this.divMsgReg_btnBackList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divSmsList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divSmsDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divSmsReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divMsgReg.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divMsgReg.form.staBzentNm01_01_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divMsgReg.form.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.divMsgReg.form.sta08_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divMsgReg.form.sta08_00_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divMsgReg.form.grdParaList.addEventHandler("onexpanddown",this.divCnsltngrpReg_grdParaList_onexpanddown,this);
            this.divMsgReg.form.staBzentNm01_01_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divMsgReg.form.btnBackList.addEventHandler("onclick",this.divMsgReg_btnBackList_onclick,this);
            this.divMsgReg.form.btnReg.addEventHandler("onclick",this.divMsgReg_btnReg_onclick,this);
            this.divMsgReg.form.btnDelPara.addEventHandler("onclick",this.divCnsltngrpReg_btnDelPara_onclick,this);
            this.divMsgReg.form.btnAddPara.addEventHandler("onclick",this.divCnsltngrpReg_btnAddPara_onclick,this);
        };
        this.loadIncludeScript("MsgS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
