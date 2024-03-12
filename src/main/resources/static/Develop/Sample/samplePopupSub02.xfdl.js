(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopupSub02");
            this.set_titletext("직접폼 모달리스(Modeless) 샘플팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,582);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopup", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"string\" size=\"32\"/><Column id=\"TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">User01</Col><Col id=\"TYPE_NM\">사용자01</Col><Col id=\"COL_CD\">사용자ID</Col><Col id=\"COL_NM\">사용자</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">User01</Col><Col id=\"TYPE_NM\">사용자01</Col><Col id=\"COL_CD\">사용자ID</Col><Col id=\"COL_NM\">사용자</Col></Row><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">Str01</Col><Col id=\"TYPE_NM\">점포코드01</Col><Col id=\"COL_CD\">점포코드</Col><Col id=\"COL_NM\">점포명</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">Str01</Col><Col id=\"TYPE_NM\">점포코드01</Col><Col id=\"COL_CD\">점포코드</Col><Col id=\"COL_NM\">점포명</Col></Row><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">Gds01</Col><Col id=\"TYPE_NM\">상품코드01</Col><Col id=\"COL_CD\">상품코드</Col><Col id=\"COL_NM\">상품명</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">Gds01</Col><Col id=\"TYPE_NM\">상품코드01</Col><Col id=\"COL_CD\">상품코드</Col><Col id=\"COL_NM\">상품명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"commCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hrisUnitTskGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"commCd\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"hrisUnitTskGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"commCd\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"INT\" size=\"256\"/><Column id=\"commCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"attrVal1\" type=\"STRING\" size=\"256\"/><Column id=\"attrUseYn1\" type=\"STRING\" size=\"256\"/><Column id=\"attrVal2\" type=\"STRING\" size=\"256\"/><Column id=\"attrUseYn2\" type=\"STRING\" size=\"256\"/><Column id=\"attrVal3\" type=\"STRING\" size=\"256\"/><Column id=\"attrUseYn3\" type=\"STRING\" size=\"256\"/><Column id=\"attrVal4\" type=\"STRING\" size=\"256\"/><Column id=\"attrUseYn4\" type=\"STRING\" size=\"256\"/><Column id=\"attrVal5\" type=\"STRING\" size=\"256\"/><Column id=\"attrUseYn5\" type=\"STRING\" size=\"256\"/><Column id=\"dataTypeGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"dataLen\" type=\"STRING\" size=\"256\"/><Column id=\"parntCommCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"etcCntn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"regDtm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"chgrId\" type=\"STRING\" size=\"256\"/><Column id=\"chgDtm\" type=\"STRING\" size=\"256\"/><Column id=\"chgpIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg02");
            this.addChild(obj.name, obj);

            obj = new Static("stcPopTitle","18","7","310","30",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj.set_text("직접폼 모달리스(Modeless) 샘플팝업");
            obj.set_cssclass("sta_POP_Title");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnPopClose",null,"0","45","45","0",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divContents","25","70","650","430",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#dcdde4");
            this.addChild(obj.name, obj);

            obj = new Static("staDesc","10","15","637","150",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("1. 전달된 Parameter 참조\r\n   Parameter는 this.gfnGetParameter(this, \"key\") 방식으로 참조한다.\r\n   전달된 모든 Parameter 키값은 this.getParameterKeys(this)으로 확인한다.\r\n\r\n2. 결과 반환\r\n   팝업을 Close 시\r\n   this.gfnSetPopupReturn() 함수를 사용하여 반환값(ex.strRtn)을 생성하고\r\n   this.gfnPopupClose(this, strRtn) 로 처리한다. (인자값 this 필수)");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnRtn1","10","189","100","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("문자열 반환");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnRtn2","120","189","143","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("Array 반환(문자열)");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staArg1","285","197","196","20",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("* opener parameter arg1");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtName","496","194","145","30",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.getSetter("usercompkeyup").set("enterkey");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staArg2","284","229","206","20",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("* opener parameter dataset");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdList","292","257",null,"120","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsCopy");
            obj.set_autoenter("select");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnRtn3","10","237","100","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("opener 참조");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnRtnDs","10","285","250","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("데이타셋");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnRtnObj","10","333","250","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("Object 반환(문자열 & 데이타셋)");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnAddRow","10","377","100","40",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("Dataset 변경");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnOk","274",null,"75","32",null,"25",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","352",null,"75","32",null,"25",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide01","0","45","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide02","0","70","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide04","290",null,"290","25",null,"57",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide03",null,"70","25","205","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide05","290",null,"290","25",null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,582,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopupSub02.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopupSub02 Form
        * FILE NAME     : samplePopupSub02.xfdl
        * DESCRIPTION   : 직접폼 모달리스(Modeless) 샘플팝업
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

        	trace("[직접폼 모달리스(Modeless) 샘플팝업]=========================================");
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

        	//2. Parameter 참조
        	var sNm = this.gfnGetParameter(objFormFrame, "pvNm");
        	this.divContents.form.edtName.set_value(sNm);
        	this.divContents.form.edtName.setFocus();

        	var ds  = this.gfnGetParameter(objFormFrame, "pvDataset");
        	if( !this.gfnIsNull(ds) )
        	{
        		this.dsCopy.copyData(ds);
        	}

        	// 그리드에 바인드 시키기
        	this.divContents.form.grdList.createFormat();
        	for ( var i=0; i<this.divContents.form.grdList.getCellCount("body"); i++ )
        	{
        		this.divContents.form.grdList.setCellProperty("body", i, "edittype", "normal");
        	}

        	// 타이틀 변경
        	if(!this.gfnIsNull(this.fvTitletext))
        	{
        		this.divTitle.form.stcPopTitle.set_text(this.fvTitletext);

        		// Modeless 이면서 웹브라우져이면
        		if(this.getOwnerFrame().cvModeless == "Y" && system.navigatorname.toUpperCase().indexOf("NEXACRO") < 0)
        		{
        			window.document.title = this.fvTitletext;
        		}
        	}
        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Popup.js > gfnShowPopup > fnParamInit
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	trace("[samplePopupSub02][fnParamInit] ================");
        	// 전달된 Parameter 전체 목록 (ChildFrame에 파라메타가 설정된다)으로 받을 경우
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


        	// TODO
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


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
        this.divTitle_btnPopClose_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description "확인" 버튼 클릭
        */
        this.btnOk_onclick = function(obj,e)
        {
        	// 화면을 닫기전 데이터 변경상태 체크해서 결과에 따라 메시지 처리
        	if(this.gfnIsDsUpdated("dsResult"))
        	{
        		this.gfnShowMessage(this, ["confirm","변경된 내용이 있습니다.\n계속 진행하시겠습니까?"], "", function(svcid, variant) {
        			if (variant == "OK")
        			{
        				var strRtn = this.gfnSetPopupReturn({pvRtnValue:"OK"});
        				this.gfnPopupClose(this, strRtn);
        			}
        			else
        			{
        				// 취소시 후처리
        				return false;
        			}
        		});
        	}
        	else
        	{
        		var strRtn = this.gfnSetPopupReturn({pvRtnValue:"OK"});
        		this.gfnPopupClose(this, strRtn);
        	}
        };

        /**
         * @description "취소" 버튼 클릭
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({pvRtnValue:"CANCEL"});
        	this.gfnPopupClose(this, strRtn);
        };

        /**
         * @description 문자열 반환 클릭시
        */
        this.divContents_btnRtn1_onclick = function(obj,e)
        {
        	var strRtn = this.gfnSetPopupReturn({pvRtnValue:"testValue", pvNm:this.divContents.form.edtName.value});
        	this.gfnPopupClose(this, strRtn);
        };

        /**
         * @description Array 반환(문자열) 클릭시
        */
        this.divContents_btnRtn2_onclick = function(obj,e)
        {
        	var rtnArr = "testvalue1, testvalue2, testvalue3" +","+this.divContents.form.edtName.value;
        	var arrRtn = this.gfnSetPopupReturn({pvRtnValue:rtnArr});
        	this.gfnPopupClose(this, arrRtn);
        };

        /**
         * @description opener 참조 클릭시
        */
        this.divContents_btnRtn3_onclick = function(obj,e)
        {
        	// opener 화면의 데이타셋을 제어한다.
        	this.getOwnerFrame().opener.dsList.setColumn(0,"Column0","zz");
        	this.gfnPopupClose(this);
        };

        /**
         * @description 데이타셋 클릭시
        */
        this.divContents_btnRtnDs_onclick = function(obj,e)
        {
        	var dsRtn = this.gfnSetPopupReturn({pvDataset:this.dsCopy});
        	this.gfnPopupClose(this, dsRtn);
        };

        /**
         * @description Object 반환(문자열 & 데이타셋) 클릭시
        */
        this.divContents_btnRtnObj_onclick = function(obj,e)
        {
        	//objRtn.key3 = encodeURI(this.dsCopy.saveXML());

        	var objRtn = this.gfnSetPopupReturn({pvRtnValue:"testValue", pvNm:this.divContents.form.edtName.value, pvDataset:this.dsCopy, pvDataset2:this.dsPopup});
        	this.gfnPopupClose(this, objRtn);
        };

        /**
         * @description Dataset (dsResult) 행 추가
        */
        this.divContents_btnAddRow_onclick = function(obj,e)
        {
        	this.dsResult.addRow();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divTitle.form.btnPopClose.addEventHandler("onclick",this.divTitle_btnPopClose_onclick,this);
            this.divContents.form.btnRtn1.addEventHandler("onclick",this.divContents_btnRtn1_onclick,this);
            this.divContents.form.btnRtn2.addEventHandler("onclick",this.divContents_btnRtn2_onclick,this);
            this.divContents.form.btnRtn3.addEventHandler("onclick",this.divContents_btnRtn3_onclick,this);
            this.divContents.form.btnRtnDs.addEventHandler("onclick",this.divContents_btnRtnDs_onclick,this);
            this.divContents.form.btnRtnObj.addEventHandler("onclick",this.divContents_btnRtnObj_onclick,this);
            this.divContents.form.btnAddRow.addEventHandler("onclick",this.divContents_btnAddRow_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsResult.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("samplePopupSub02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
