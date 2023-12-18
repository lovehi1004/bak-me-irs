(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopup");
            this.set_titletext("팝업샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">aa</Col><Col id=\"Column1\">cc</Col><Col id=\"Column2\">11</Col><Col id=\"Column3\">33</Col></Row><Row><Col id=\"Column0\">bb</Col><Col id=\"Column1\">dd</Col><Col id=\"Column2\">22</Col><Col id=\"Column3\">44</Col></Row><Row><Col id=\"Column0\">lee</Col><Col id=\"Column1\">test</Col><Col id=\"Column2\">66</Col><Col id=\"Column3\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">aa</Col><Col id=\"Column1\">cc</Col><Col id=\"Column2\">11</Col><Col id=\"Column3\">33</Col></Row><Row><Col id=\"Column0\">bb</Col><Col id=\"Column1\">dd</Col><Col id=\"Column2\">22</Col><Col id=\"Column3\">44</Col></Row><Row><Col id=\"Column0\">lee</Col><Col id=\"Column1\">test</Col><Col id=\"Column2\">66</Col><Col id=\"Column3\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnModal01","20","281","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Modal 팝업 오픈");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","473","267","382","137",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","560","225","114","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Button("btnModeless01","238","281","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Modeless 팝업 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("btnByOpenView01","20","502","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("화면open 시 파라미터 전달");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtReturn","470","461",null,"110","100",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("grdParam","470","578",null,"97","100",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autoenter("select");
            obj.set_binddataset("dsParam");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel1","470","425",null,"21","100",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2) \'1) 팝업(Modal, Modeless)\' close 후 리턴 값");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","474","225","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("objArgs");
            this.addChild(obj.name, obj);

            obj = new Static("staMnuId","25","437","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("MnuId :");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMnuId01","91","433","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("sampleScript");
            obj.set_text("sampleScript");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtInfo","10","5",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("1. 모달(Modal) 팝업, 모덜리스 (Modeless) 팝업 오픈시 this.gfnShowPopup() 함수 호출하여 팝업호출한다.\n\n- gfnShowPopup() 호출시 Option에 titletext 는 필수 값. 없으면 popupId 로 설정된다.\n    ex) oOption = {titletext:\"Modal Popup\"};\t\n- 화면에 중앙에 위치하기 위해서는 oPosition에 top, left를 지정하지 않는다.\n    ex) oPosition= {width:650, height:400};\n\n2. 팝업에서 반환되는 결과값은 fnPopupCallback 에서 받아서 처리한다.\n    this.gfnGetPopupRetun(this, objRtn);\t로 문자열, 데이타셋 object로 받아온 값을 가져온다.\n");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_00","10","395","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("3) 팝업 - 스크립트로 메뉴 오픈 , 파라메터 전달");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01","10","245","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1) 팝업 - 파라메터 전달, 리턴 참고용");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam01","91","467","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("param값1");
            obj.set_text("param값1");
            this.addChild(obj.name, obj);

            obj = new Static("staParam01","25","467","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("param1 : ");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_02","10","800","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("4) 윈도우 새창 오픈");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnWindowOpen","20","840","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("윈도우 새창오픈");
            this.addChild(obj.name, obj);

            obj = new Button("btnSysPopup","20","331","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("시스템용 팝업 호출");
            this.addChild(obj.name, obj);

            obj = new Button("btnByOpenView02","20","622","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("화면open 시 파라미터 전달");
            this.addChild(obj.name, obj);

            obj = new Static("staMnuId00","25","557","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("MnuId :");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMnuId02","91","553","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("sampleFormActionM00");
            obj.set_text("sampleFormActionM00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam02","91","587","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("MAIN");
            obj.set_text("MAIN");
            this.addChild(obj.name, obj);

            obj = new Static("staParam01_00","25","587","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("param1 : ");
            this.addChild(obj.name, obj);

            obj = new Button("btnByOpenView03","20","742","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("화면open 시 파라미터 전달");
            this.addChild(obj.name, obj);

            obj = new Static("staMnuId00_00","25","677","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("MnuId :");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMnuId03","91","673","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("sampleFormActionM00");
            obj.set_text("sampleFormActionM00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam03","91","707","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("SUB01");
            obj.set_text("SUB01");
            this.addChild(obj.name, obj);

            obj = new Static("staParam01_00_00","25","707","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("param1 : ");
            this.addChild(obj.name, obj);

            obj = new Button("btnSysPopup02","238","331","195","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("시스템용 팝업 호출 2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopup.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePopup Form
        * FILE NAME     : samplePopup.xfdl
        * DESCRIPTION   : 팝업 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.22    TOBESOFT	     최초생성
        ***********************************************************************************/


        /*
         1. 팝업(Modal, Modeless) open 기능
          - 모달(Modal) 팝업, 모달리스 (Modeless) 팝업 오픈시 this.gfnShowPopup() 함수 호출하여 팝업호출한다.
          - gdsMenu(메뉴 데이타셋)에 메뉴ID 정보를 확인하여 팝업화면을 오픈한다.
            this.gfnShowPopup(objForm, sPopupId, sMnuId, oPosition, objArgs, oOption);

          1) 팝업 Modal 오픈
        	- objForm	: 팝업을 호출한 폼
        	- sPopupId	: 팝업ID
        	- sMnuId	: 메뉴ID
        	- oPosition : width, height 를 지정하면 설정한 넓이/높이로 팝업이 오픈되고
        				  top, left를 지정하지 않으면 가운데 정렬로 오픈
        	              DockPopupForm (공통팝업Form 사용) 사용시에는 아무것도 설정하지 않으면 공통팝업 사이즈로 가운데 정렬된 팝업으로 오픈됨
        	- objArgs	: 전달하는 파라미터 값
        	              var objArgs = {pvNm:this.edtName.value, pvDataset: this.dsList};
        				  공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
        				  cvOpenType : PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        	- oOption	: 팝업화면의 옵션값을 설정한다.
        	              팝업을 close 한후 실행될 callback 함수 설정, 팝업 titletext 설정. titletext 없으면 popupId로 설정됨
        	              {callback:"fnPopupCallback", titletext:"팝업창 Title", modal:true, autosize:true, showtitlebar:false, resizable:true}

          2) 팝업 Modeless 오픈
        	- objForm	: 팝업을 호출한 폼
        	- sPopupId	: 팝업ID
        	- sMnuId	: 메뉴ID
        	- oPosition : width, height 값을 필수
        	- objArgs	: 전달하는 파라미터 값
        	              var objArgs = {pvNm:this.edtName.value, pvDataset: this.dsList};
        	- oOption	: 팝업화면의 옵션값을 설정한다.
        	              modal 값을 false 이어야 함
        	              팝업을 close 한후 실행될 callback 함수 설정, 팝업 titletext 설정. titletext 없으면 popupId로 설정됨
        	              {callback:"fnPopupCallback", titletext:"오픈 샘플팝업", modal:false, autosize:true, showtitlebar:false, resizable:true}

          3) 팝업 close후 반환되는 결과값은 팝업오픈시 설정한 callback 함수(fnPopupCallback) 에서 받아서 처리한다.
             var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        	 - 문자열, 데이타셋 object로 반환되는 값을 가져온다.


         2. menuId 를 체크 하지 않고 , sPopupUrl 에 지정된 정보로 팝업 호출
          - 모달(Modal) 팝업, 모달리스 (Modeless) 팝업 오픈시 this.gfnShowPopupForSysOnly() 함수 호출하여 팝업호출한다.
          - sPopupUrl 정보를 바탕으로 팝업 화면을 오픈한다.

        	- objForm	: 호출한 화면 Form
        	- sPopupId	: unique 팝업 id
        	- sPopupUrl	: 팝업화면 URL (ex. "Frame_Popup::comDebugPop.xfdl" )
        	- objArgs	: 팝업창에 전달될 파라미터 값 {key:'value'}, 개발자의 key 명의 preFix 는 "pv" 를 사용토록 한다.
         				   공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
        	- sCallbackFunc	: 팝업 콜백함수(objForm의 함수명 or 함수)
        	- oOption	: 팝업 창의 오픈시 옵션 설정 {key:'value'}
        					- showtitlebar : true / false (default)
        					- titletext : showtitlebar(ture)일때만 사용가능
        					- modal  	: true (default) / false
        					- resizable : true / false (default)
        					- left   	: 팝업 left
        					- top    	: 팝업 top
        					- width  	: 팝업 width(modal:false시 필수)
        					- height 	: 팝업 height(modal:false시 필수)

        	ex)
        	var sPopupId	= "comGridFilterPop";
        	var sPopupUrl	= "Frame_Popup::comGridFilterPop.xfdl";
        	var objArgs		= {pvGrid:this.grdList};
        	var oOption		= {showtitlebar:true,titletext:"데이터 필터 설정"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);



         3. 스크립트로 메뉴 오픈, 메뉴화면 바로 open 시 공통함수 gfnCallOpenMenu() 호출한다.
          - 업무화면 내부에서 다른 업무화면을 오픈할 경우 사용
          - gdsMenu(메뉴 데이타셋)에 메뉴ID 정보를 확인하여 업무화면을 오픈한다.
          - 파라미터 값 전달은 2번째 인자로 한다.
            ex)
        	var sMnuId = this.edtMnuId.value;	//  "sampleScript"; // 메뉴 ID		,	MenuUrl : "Develop_Sample::sampleScript"
        	var arrArgSend = {param1:this.edtParam01.value, param2:"param값2", objDs:this.dsList};	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);

        */


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
        	trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	// 전달된 값 찍어보기
        	/*
        	if(!this.gfnIsNull(objRtnValue))
        	{
        		// 1. 반환받은 값 전체
        		for ( var p in objRtnValue ) {
        			if( typeof this.gfnGetParameter(this, objRtnValue[p]) == 'function') continue;	//function이 아닌것만...
        			trace(this.gfnFormat("{0}={1}", p, objRtnValue[p]));
        		}
        	}
        	*/

        	switch (sPopupId)
        	{
        		case "popModalP01" :
        			// 후처리 코드
        			// 2. objct의 property name은 팝업창에서 선언한 동일한 파라미터명으로 받는다
        			if (!this.gfnIsNull(objRtnValue["pvNm"]))	this.edtName.set_value(objRtnValue["pvNm"]);	// pvNm은 팝업에서 전달
        			if (!this.gfnIsNull(objRtnValue["pvDataset"]))	this.dsList.copyData(objRtnValue["pvDataset"]);

        			// Object 반환(문자열 & 데이타셋) 시 pvDataset2 가 빈값이 아니면
        			if (!this.gfnIsNull(objRtnValue["pvDataset2"]))
        			{
        				this.dsParam.copyData(objRtnValue["pvDataset2"]);

        				// 반환받은 데이타셋을 그리드에 바인드 시키기
        				this.grdParam.createFormat();
        				for ( var i=0; i<this.grdParam.getCellCount("body"); i++ )
        				{
        					this.grdParam.setCellProperty("body", i, "edittype", "normal");
        				}
        			}

        			this.txtReturn.set_value("전달받은 내용 >>>> \n" +
        									" pvRtnValue : "+ objRtnValue["pvRtnValue"] +"\n"+
        									" pvNm : "+this.gfnNvl(objRtnValue["pvNm"],"") +"\n"+
        									" pvDataset : "+this.gfnNvl(objRtnValue["pvDataset"],"")
        									);
        			break;
        		case "popModelsssP01" :
        			// 후처리 코드
        			// 2. objct의 property name은 팝업창에서 선언한 동일한 파라미터명으로 받는다
        			if (!this.gfnIsNull(objRtnValue["pvNm"]))	this.edtName.set_value(objRtnValue["pvNm"]);	// pvNm은 팝업에서 전달
        			if (!this.gfnIsNull(objRtnValue["pvDataset"]))	this.dsList.copyData(objRtnValue["pvDataset"]);

        			// Object 반환(문자열 & 데이타셋) 시 pvDataset2 가 빈값이 아니면
        			if (!this.gfnIsNull(objRtnValue["pvDataset2"]))
        			{
        				this.dsParam.copyData(objRtnValue["pvDataset2"]);

        				// 반환받은 데이타셋을 그리드에 바인드 시키기
        				this.grdParam.createFormat();
        				for ( var i=0; i<this.grdParam.getCellCount("body"); i++ )
        				{
        					this.grdParam.setCellProperty("body", i, "edittype", "normal");
        				}
        			}

        			this.txtReturn.set_value("전달받은 내용 >>>> \n" +
        									" pvRtnValue : "+ objRtnValue["pvRtnValue"] +"\n"+
        									" pvNm : "+this.gfnNvl(objRtnValue["pvNm"],"") +"\n"+
        									" pvDataset : "+this.gfnNvl(objRtnValue["pvDataset"],"")
        									);
        			break;
        		default:
        			break;
        	}
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/




        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/




        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 모달(Modal) 팝업 오픈
        */
        this.btnModal01_onclick = function(obj,e)
        {
        	var sPopupId = "popModalP01";
        	var sMnuId = "samplePopupSub01";		// "Develop_Sample::samplePopupSub01.xfdl";

        	// width, height 를 지정하면 설정한 넓이/높이로 팝업이 오픈
        	var oPosition	= {width:740,height:621};								// top, left를 지정하지 않으면 가운데정렬

        	// cvOpenType : PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        	var objArgs		= {pvNm:this.edtName.value, pvDataset: this.dsList};	// 파라메타 (객체를 전달할 수 있다)

        	// 팝업창 옵션 {callback:"fnPopupCallback",titletext:sMnuNm, modal:true, autosize:false, showtitlebar:true, resizable:true}
        	//               callback 은 설정하지 않으면 default 값 fnPopupCallback() 함수로 callback
        	// oOption :  modal:false (modal 값 default 는 true 로 미지정시 modal 로 열리게 된다)
        	var oOption		= {callback:"fnPopupCallback",titletext:"직접폼 모달(Modal) 샘플팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        /**
         * @description 모달리스(Modeless) 팝업 오픈
        */
        this.btnModeless01_onclick = function(obj,e)
        {
        	var sPopupId = "popModelsssP01";
        	var sMnuId = "samplePopupSub02";		// "Develop_Sample::samplePopupSub02.xfdl";

        	// 팝업창의 넓이/높이는 필수사항 (프레임의 중앙에 보여줌)
        	var oPosition	= {width:700,height:582};

        	// cvOpenType : PopupForm (default, 공통팝업Form을 사용하지 않는경우, 직접폼 팝업) , DockPopupForm (공통팝업Form 사용) , DockForm (frameWork 의 새창인 경우)
        	var objArgs		= {pvNm:this.edtName.value, pvDataset: this.dsList};		// 파라메타 전달

        	// 팝업창 옵션 {callback:"fnPopupCallback",titletext:sMnuNm, modal:true, autosize:false, showtitlebar:true, resizable:true}
        	//               callback 은 설정하지 않으면 default 값 fnPopupCallback() 함수로 callback
        	// oOption :  modal:false (modal 값 default 는 true 로 미지정시 modal 로 열리게 된다)
        	var oOption		= {callback:"fnPopupCallback",titletext:"직접폼 모달리스(Modeless) 샘플팝업", modal:false, resizable:true};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        /**
         * @description 시스템용 팝업 호출
        */
        this.btnSysPopup_onclick = function(obj,e)
        {
        	// menuId 를 체크 하지 않고 , sPopupUrl 에 지정된 정보로 팝업 호출

        /*

         * @param {object} objForm			- 호출한 화면 Form
         * @param {String} sPopupId			- unique 팝업 id
         * @param {String} sPopupUrl		- 팝업화면 URL ( "Frame_Popup::comDebugPop.xfdl" )
         * @param {object} objArgs			- 팝업창에 전달될 파라미터 값 {key:'value'}, 개발자의 key 명의 preFix 는 "pv" 를 사용토록 한다.
         *									  공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
         * @param {String} sCallbackFunc	- 팝업 콜백함수(objForm의 함수명 or 함수)
         * @param {object} oOption			- 팝업 창의 오픈시 옵션 설정 {key:'value'}
        										- showtitlebar : true / false (default)
        										- titletext : showtitlebar(ture)일때만 사용가능
        										- modal  	: true (default) / false
        										- resizable : true / false (default)
        										- left   	: 팝업 left
        										- top    	: 팝업 top
        										- width  	: 팝업 width(modal:false시 필수)
        										- height 	: 팝업 height(modal:false시 필수)
         * @return 팝업에서 gfnSetPopupReturn 사용 / 콜백함수에서 gfnGetPopupRetun 사용
        */

        	var sPopupId	= "comGridFilterPop";
        	var sPopupUrl	= "Frame_Popup::comGridFilterPop.xfdl";
        	var objArgs		= {pvGrid:this.grdList};
        	var oOption		= {showtitlebar:true,titletext:"데이터 필터 설정"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 시스템용 팝업 호출 2
        */
        this.btnSysPopup02_onclick = function(obj,e)
        {
        /*
         * @param {object} objForm			- 호출한 화면 Form
         * @param {String} sPopupId			- unique 팝업 id
         * @param {String} sPopupUrl		- 팝업화면 URL ( "Develop_Sample::samplePopupSub02.xfdl" )
         * @param {object} objArgs			- 팝업창에 전달될 파라미터 값 {key:'value'}, 개발자의 key 명의 preFix 는 "pv" 를 사용토록 한다.
         *									  공통에서 사용되는 key 명의 preFix 는 "cv" 를 사용토록 한다.
         * @param {String} sCallbackFunc	- 팝업 콜백함수(objForm의 함수명 or 함수)
         * @param {object} oOption			- 팝업 창의 오픈시 옵션 설정 {key:'value'}
        										- showtitlebar : true / false (default)
        										- titletext : showtitlebar(ture)일때만 사용가능
        										- modal  	: true (default) / false
        										- resizable : true / false (default)
        										- left   	: 팝업 left
        										- top    	: 팝업 top
        										- width  	: 팝업 width(modal:false시 필수)
        										- height 	: 팝업 height(modal:false시 필수)
         * @return 팝업에서 gfnSetPopupReturn 사용 / 콜백함수에서 gfnGetPopupRetun 사용
        */
        	var sPopupId	= "popModelsssP02";
        	var sPopupUrl	= "Develop_Sample::samplePopupSub02.xfdl";
        	var objArgs		= {pvNm:this.edtName.value, pvDataset: this.dsList};
        	var oOption		= {titletext:"직접폼 모달리스(Modeless) 샘플팝업",modal:false,resizable:true,width:700,height:582};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 3) 팝업 - 스크립트로 메뉴 오픈 , 파라메터 전달
         *				메뉴에 있던 없던 왼쪽메뉴를 통하지 않고 업무화면을 바로 탭으로 오픈할때.
        */
        this.btnByOpenView01_onclick = function(obj,e)
        {
        	var sMnuId = this.edtMnuId01.value;	//  "sampleScript"; // 메뉴 ID		,	MenuUrl : "Develop_Sample::sampleScript"
        	var arrArgSend = {param1:this.edtParam01.value, param2:"param값2", objDs:this.dsList};	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };

        /**
         * @description 3) 팝업 - 스크립트로 메뉴 오픈 , 파라메터 전달
         *				메뉴에 있던 없던 왼쪽메뉴를 통하지 않고 업무화면을 바로 탭으로 오픈할때.
         *				오픈 후 메인에 특정처리
        */
        this.btnByOpenView02_onclick = function(obj,e)
        {
        	var sMnuId = this.edtMnuId02.value;	//  "sampleFormActionM00"; // 메뉴 ID		,	MenuUrl : "Develop_Sample::sampleFormActionM00"
        	var arrArgSend = {param1:this.edtParam02.value, param2:"param2값1-1", objDs:this.dsList};	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };

        /**
         * @description 3) 팝업 - 스크립트로 메뉴 오픈 , 파라메터 전달
         *				메뉴에 있던 없던 왼쪽메뉴를 통하지 않고 업무화면을 바로 탭으로 오픈할때.
         *				오픈 후 SUB01의 특정처리
        */
        this.btnByOpenView03_onclick = function(obj,e)
        {
        	var sMnuId = this.edtMnuId03.value;	//  "sampleFormActionM00"; // 메뉴 ID		,	MenuUrl : "Develop_Sample::sampleFormActionM00"
        	var arrArgSend = {param1:this.edtParam03.value, param2:"param2값2-1", objDs:this.dsList};	// 파라메터
        	this.gfnCallOpenMenu(sMnuId, arrArgSend);
        };

        /**
         * @description 윈도우 새창오픈
        */
        this.btnWindowOpen_onclick = function(obj,e)
        {
        	var sUrl = "https://www.naver.com";
        	// system.execBrowser(sUrl);
        	system.execDefaultBrowser(sUrl);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnModal01.addEventHandler("onclick",this.btnModal01_onclick,this);
            this.btnModeless01.addEventHandler("onclick",this.btnModeless01_onclick,this);
            this.btnByOpenView01.addEventHandler("onclick",this.btnByOpenView01_onclick,this);
            this.btnWindowOpen.addEventHandler("onclick",this.btnWindowOpen_onclick,this);
            this.btnSysPopup.addEventHandler("onclick",this.btnSysPopup_onclick,this);
            this.btnByOpenView02.addEventHandler("onclick",this.btnByOpenView02_onclick,this);
            this.btnByOpenView03.addEventHandler("onclick",this.btnByOpenView03_onclick,this);
            this.btnSysPopup02.addEventHandler("onclick",this.btnSysPopup02_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
