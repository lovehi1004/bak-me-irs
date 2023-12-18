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
            this.set_titletext("알림(SMS) 메세지 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSmsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"msgNm\" type=\"STRING\" size=\"256\"/><Column id=\"msgCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"mdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParaList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"inptCn\" type=\"STRING\" size=\"256\"/><Column id=\"mdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParaTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"inptTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"inptTypeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"inptTypeCd\">NOW_YMD</Col><Col id=\"inptTypeNm\">현재일자</Col></Row><Row><Col id=\"inptTypeCd\">BIZ_NM</Col><Col id=\"inptTypeNm\">사업명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSmsDeatil","10","20",null,"820","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","50",null,"44","30",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","93",null,"44","30",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00","0","93","150","44",null,null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("3");
            obj.set_text("메세지명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","137",null,"262","30",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00","0","137","150","262",null,null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("5");
            obj.set_text("메세지내용");
            obj.set_cssclass("sta_WF_Label");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00_00","0","398",null,"262","30",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00_00_00","0","398","150","262",null,null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("7");
            obj.set_text("파라미터정보");
            obj.set_cssclass("sta_WF_Label");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Grid("grdParaList","sta08_00_00_00_00_00_00:7","409",null,"241","46",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsParaList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"116\"/><Column size=\"417\"/><Column size=\"138\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"우선순위\"/><Cell col=\"1\" text=\"파라미터유형\"/><Cell col=\"2\" text=\"파라미터 내용\"/><Cell col=\"3\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:inptTypeCd\" displaytype=\"text\" edittype=\"none\" combocodecol=\"inptTypeCd\" combodataset=\"dsParaTypeCd\" combodatacol=\"inptTypeNm\"/><Cell col=\"2\" textAlign=\"center\" edittype=\"none\" text=\"bind:inptCn\" displaytype=\"text\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:mdfcnDt\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("staBzentNm01_01_00_00_00_00_00","0","50","150","44",null,null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("9");
            obj.set_text("메세지코드");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Button("btnBackList","1440",null,null,"32","30","120",null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("10");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","157","55",null,"30","164",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Edit("edtMsgNm","155","101",null,"30","166",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Edit("edtMsgCn","157","155",null,"225","0",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Button("BtnMod",null,"668","75","32","btnBackList:3",null,null,null,null,null,this.divSmsDeatil.form);
            obj.set_taborder("14");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divSmsDeatil.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메세지정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSmsDeatil.form
            obj = new Layout("default","",0,0,this.divSmsDeatil.form,function(p){});
            this.divSmsDeatil.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSmsDeatil.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSmsDeatil.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSmsDeatil.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSmsDeatil.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSmsDeatil.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSmsDeatil.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSmsDeatil.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSmsDeatil.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSmsDeatil.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSmsDeatil.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSmsDeatil.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSmsDeatil.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSmsDeatil.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSmsDeatil.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSmsDeatil.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSmsDeatil.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSmsDeatil.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSmsDeatil.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSmsDeatil.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSmsDeatil.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
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

            obj = new BindItem("item17","divSmsDeatil.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSmsDeatil.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSmsDeatil.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSmsDeatil.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSmsDeatil.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSmsDeatil.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSmsDeatil.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSmsDeatil.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSmsDeatil.form.rdoNewRvsmBtn","value","dsAgrInfo","newRvsnTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSmsDeatil.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSmsDeatil.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSmsDeatil.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSmsDeatil.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSmsDeatil.form.edtEngNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSmsDeatil.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSmsDeatil.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSmsDeatil.form.taeCnsltnCn","value","dsCnsltngrpInfo","cnsltnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divAgrReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divCnsltngrpDetail.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divSmsDeatil.form.edtEngNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divSmsDeatil.form.edtMsgCd","value","dsSmsInfo","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divSmsDeatil.form.edtMsgNm","value","dsSmsInfo","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divSmsDeatil.form.edtMsgCn","value","dsSmsInfo","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MsgS01.xfdl", function() {
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
        	//권한 버튼 컨트롤
        	this.fnRegBtnCtrl();
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
        		case "cnsltngrpSave" :
        			this.fnFormTrans();
        			break;
        		case "agrRvsn" :
        			this.fnFormTrans();
        			break;
        		case "callMemberList":
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

        this.fnCallDtlInfo = function()
        {
        	trace("메세지 상세 호출...");
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


        	trace("[MsgS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	trace("=========상세 msgMgno" + objArgs.msgMgno);
        	this.dsCurInfo.setColumn(0, "msgMgno", objArgs.msgMgno);

        	// 상세 호출
        	this.fnCallDtlInfo();

        };



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.



        /**
         * @description 목록 클릭시 목록화면으로 전환
        */




        // 수정 버튼 클릭 이벤트
        this.divCnsltngrpReg_BtnMod_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divSmsList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divSmsDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divSmsReg.set_visible(true);

        	var objArgs = {};
        	objArgs.msgMgno 	= this.dsCurInfo.getColumn(0, "msgMgno");
        	objArgs.sts				= "MOD";

        	trace("msgMgno======"+objArgs.msgMgno);
        	this.getOwnerFrame().form.divWork.form.divSmsReg.form.fnChangeDiv(objArgs);
        };
        // 목록 버튼
        this.divSmsDeatil_btnBackList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divSmsList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divSmsDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divSmsReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };
        //권한 확인
        this.fnAccessAuth = function(roleIdMgno){
        	//전체관리자
        	if(roleIdMgno == "RL00000001")
        	{
        		return true;
        	//그 외 권한
        	}else
        	{
        		return false;
        	}
        }
        //버튼 컨트롤
        this.fnRegBtnCtrl = function()
        {
        	if(this.fnAccessAuth(this.fvApp.User.roleIdMgno))
        	{
        		this.divSmsDetail.form.BtnMod.set_visible(true);

        	}else
        	{
        		this.divSmsDetail.form.BtnMod.set_visible(false);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divSmsDeatil.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divSmsDeatil.form.staBzentNm01_01_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divSmsDeatil.form.sta08_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divSmsDeatil.form.sta08_00_00_00_00_00_00.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divSmsDeatil.form.staBzentNm01_01_00_00_00_00_00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divSmsDeatil.form.btnBackList.addEventHandler("onclick",this.divSmsDeatil_btnBackList_onclick,this);
            this.divSmsDeatil.form.BtnMod.addEventHandler("onclick",this.divCnsltngrpReg_BtnMod_onclick,this);
            this.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
        };
        this.loadIncludeScript("MsgS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
