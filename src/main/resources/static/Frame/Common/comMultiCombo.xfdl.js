(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMultiCombo");
            this.set_titletext("멀티콤보");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtCbo","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_MultiCombo");
            obj.set_inputfilter("none,alpha,comma,digit,dot,sign,space,symbol");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCbo","0","29",null,"251","0",null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_MultiCombo");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Edit("edtSearch","0","0",null,"24","0",null,null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("입력하세요");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Grid("grdMultiCombo","0","edtSearch:0",null,null,"0","40",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_MultiCombo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\" band=\"left\"/><Column size=\"170\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"limitmax\" text=\"bind:chk\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"60","24","10","8",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new CheckBox("chkCheckAll","8",null,"56","24",null,"8",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Button("btnCbo","edtCbo:-26","0","24",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_MultiCombo");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCbo.form
            obj = new Layout("default","",0,0,this.pdvCbo.form,function(p){});
            this.pdvCbo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",200,24,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMultiCombo.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comMultiCombo Form
        * FILE NAME     : comMultiCombo.xfdl
        * DESCRIPTION   : 멀티콤보 공통 폼
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.25    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvForm;													// 부모폼 object
        this.fvComboinnerdataset;										// 멀티콤보에 표시할 Dataset object
        this.fvCombocodecolumn;											// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        this.fvCombodatacolumn;											// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        this.fvCallbackfunc;											// 콜백함수
        this.fvCallbackId;												// 콜백ID

        this.fvAll           = false; 									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        this.fvAllDisplay    = ""; 										// 멀티콤보 전체 선택시 표시 값 (없으면 선택한 data 값 표시)
        this.fvAllValueNull  = true;									// 멀티콤보 전체 선택시 fnGetCode()에서 value 값 null 사용여부 (true(default), false)
        this.fvNullDisplay   = "S";										// 멀티콤보 null일때 표시 값 S:선택, A:전체(default : - 선택 -)
        this.fvDisplayrowcount = 10;									// 멀티콤보 표시 건수 설정 (default : 10)
        this.fvWidth         = null; 									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)

        this.fvDisplayColumn = "data";									// 멀티콤보 Display컬럼 설정(기본:data, 옵션:code, all)
        this.fvTextSearch = false;										// 멀티콤보 데이터검색 기능 가능 (true, false(default))

        this.fvSearchHeight  = 24;										// Popupdiv > Grid 의 Search영역 height
        this.fvHeadHeight    = 0;										// Popupdiv > Grid 의 head height
        this.fvRowHeight     = 28;										// Popupdiv > Grid 의 body row height

        this.fvEssentialClass = "Essential";							// Essential cssclass
        this.fvNoramlClass = "edt_WF_MultiCombo";						// 기본 cssclass
        this.fvPreSearchText = "";										// 이전 입력검색값

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
        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");
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

        /**
         * @desc 멀티콤보 초기화
         * @param {Object}	onjForm 	- 부모폼 object
         * @param {Object} 	objParam	- 전달 param
         *								objDs - 멀티콤보에 표시할 Dataset object
         *								sCodeColumn - 멀티콤보에 표시할 Dataset 의 code 칼럼 명
         *								sDataColumn - 멀티콤보에 표시할 Dataset 의 data 칼럼 명
         *								sCallbackFunc - 콜백함수
         *								sCallbackId	- 콜백ID
         *								bAll - 멀티콤보 초기 전체 선택 여부 (true, false(default))
         *								sAllDisplay - 멀티콤보 전체선택시 표시 값 (없으면 선택한 data 값 표시)
         *								bAllValueNull - 멀티콤보 전체선택시 fnGetCode()에서 value 값 null 사용여부 (true(default), false)
         *								bTextSearch - 멀티콤보 찾기기능 활성화 여부(true, false(default)
         *								sNullDisplay - 멀티콤보 null일때 표시 값 S:선택, A:전체(default : - 선택 -)
         *								sDisplayColumn - 멀티콤보 표시 컬럼 설정 ( code, data(default), all )
         *								nDisplayrowcount - 멀티콤보 표시 건수 설정 (default : 10)
         *								nWidth - 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
         * @return N/A
        */
        this.fnInitMultiCombo = function(objForm, objParam)
        {
        	var i;

        	this.fvForm = objForm;

        	this.fvComboinnerdataset = objParam.objDs;
        	this.fvCombocodecolumn   = objParam.sCodeColumn;
        	this.fvCombodatacolumn   = objParam.sDataColumn;
        	//this.fvHeadname    	   	 = objParam.sfvHeadname;
        	this.fvCallbackfunc 	 = objParam.sCallbackFunc;
        	this.fvCallbackId 	   	 = objParam.sCallbackId;

        	if(!this.gfnIsNull(objParam.bAll))
        	{
        		this.fvAll 	   			= objParam.bAll;
        	}
        	if(!this.gfnIsNull(objParam.sAllDisplay))
        	{
        		this.fvAllDisplay 	    = objParam.sAllDisplay;
        	}
        	if(!this.gfnIsNull(objParam.sNullDisplay))
        	{
        		this.fvNullDisplay 	    = objParam.sNullDisplay;
        	}
        	if(!this.gfnIsNull(objParam.bAllValueNull))
        	{
        		this.fvAllValueNull	    = objParam.bAllValueNull;
        	}
        	if(!this.gfnIsNull(objParam.nDisplayrowcount))
        	{
        		this.fvDisplayrowcount 	= objParam.nDisplayrowcount;
        	}
        	if(!this.gfnIsNull(objParam.nWidth))
        	{
        		this.fvWidth 	     	= objParam.nWidth;
        	}
        	if(!this.gfnIsNull(objParam.bTextSearch))
        	{
        		this.fvTextSearch 	    = objParam.bTextSearch;
        	}
        	if(!this.gfnIsNull(objParam.sDisplayColumn))
        	{
        		this.fvDisplayColumn 	= objParam.sDisplayColumn;
        	}

        	// 멀티콤보 displaynulltext설정
        	var objApp = nexacro.getApplication();
        	if(!this.gfnIsNull(objApp) && !this.gfnIsNull(objApp.objForm))
        	{
        		if ( this.fvNullDisplay == "A" )
        		{
        			this.edtCbo.set_displaynulltext(objApp.objForm.sComboAllText);
        		}
        		else
        		{
        			this.edtCbo.set_displaynulltext(objApp.objForm.sComboSelectText);
        		}
        	}
        	else
        	{
        		if ( this.fvNullDisplay == "A" )
        		{
        			this.edtCbo.set_displaynulltext("- 전체 -");
        		}
        		else
        		{
        			this.edtCbo.set_displaynulltext("- 선택 -");
        		}
        	}

        	// 멀티콤보 데이터검색 기능 미사용시
        	if (!this.fvTextSearch)
        	{
        		this.pdvCbo.form.grdMultiCombo.set_top(0);
        		this.pdvCbo.form.edtSearch.set_visible(false);
        		this.fvSearchHeight = 0;
        	}

        	//데이터셋에 chk컬럼 없을 경우 생성
        	this.fvComboinnerdataset.set_enableevent(false);
        	var objColInfo = this.fvComboinnerdataset.getColumnInfo("chk");
        	if( this.gfnIsNull(objColInfo))
        	{
        		this.fvComboinnerdataset.addColumn("chk", "STRING");
        	}

        	//checkbox값 세팅
        	var nIdx = this.fvComboinnerdataset.getRowCount();
        	for (i=0; i<nIdx; i++)
        	{
        		if (this.fvAll)				// 초기에 전체 선택이면
        		{
        			this.fvComboinnerdataset.setColumn(i, "chk", "1");
        		}
        		else
        		{
        			this.fvComboinnerdataset.setColumn(i, "chk", "0");
        		}
        	}

        	this.fvComboinnerdataset.set_rowposition(0);
        	this.fvComboinnerdataset.set_enableevent(true);

        	// Grid format 및 Cell 설정
        	var objGrid = this.pdvCbo.form.grdMultiCombo;

        	objGrid.set_enableevent(false);
        	objGrid.set_enableredraw(false);

        	//objGrid.setFormatColProperty(0, "size", "48");
        	objGrid.setCellProperty("body", 0, "text", "bind:chk");
        	if (this.fvDisplayColumn == "data")		//data 컬럼 사용
        	{
        		objGrid.setCellProperty("body", 1, "text", "bind:" + this.fvCombodatacolumn);
        	}
        	else if (this.fvDisplayColumn == "all")		//code + " : " + data 컬럼 사용
        	{
        		objGrid.setCellProperty("body", 1, "text", "expr:" + this.fvCombocodecolumn + "+ '   ' +" + this.fvCombodatacolumn);
        	}
        	else		// code컬럼 사용
        	{
        		objGrid.setCellProperty("body", 1, "text", "bind:" + this.fvCombocodecolumn);
        	}

        	objGrid.set_binddataset(this.fvComboinnerdataset);
        	objGrid.set_enableevent(true);
        	objGrid.set_enableredraw(true);
        	this.pdvCbo.form.resetScroll();

        	// 선택값 처리
        	this.fnSyncValue();
        };

        /**
         * @desc 선택값 처리
         * @param N/A
         * @return N/A
        */
        this.fnSyncValue = function ()
        {
        	var arrTextList  = [];
        	var arrValueList = [];

        	var nRowCount = this.fvComboinnerdataset.getRowCount();
        	var nChkCount = this.fvComboinnerdataset.getCaseCount("chk=='1'");

        	var sChkValue;
        	// 선택한 값에 대한 처리
        	for (i=0; i<nRowCount; i++)
        	{
        		sChkValue = this.fvComboinnerdataset.getColumn(i, "chk");
        		if (sChkValue == "1")
        		{
        			arrValueList.push(this.fvComboinnerdataset.getColumn(i, this.fvCombocodecolumn));
        			arrTextList.push(this.fvComboinnerdataset.getColumn(i, this.fvCombodatacolumn));
        		}
        	}
        	this.fnSetComboText(arrValueList, arrTextList);

        	//전체선택 checkbox 체크/언체크
        	this.fnSelectAllCheckboxToggle();
        };

        /**
         * @desc 선택된 항목 Edit에 표시
         * @param {Object} arrValueList 선택된 code 정보
         * @param {String} arrTextList 선택된 data 정보
         * @return N/A
        */
        this.fnSetComboText = function(arrValueList, arrTextList)
        {
        	var sComboText = arrTextList.toString();

        	this.edtCbo.uRetrunvalue = arrValueList;
        	this.edtCbo.uReturntext  = sComboText;

        	if (this.gfnIsNull(sComboText))
        	{
        		this.edtCbo.set_value(null);
        	}
        	else
        	{
        		if (this.gfnIsNull(this.fvAllDisplay))
        		{
        			this.edtCbo.set_value(sComboText);
        		}
        		else
        		{
        			if (arrValueList.length == this.fvComboinnerdataset.rowcount)
        			{
        				this.edtCbo.set_value(this.fvAllDisplay);
        				this.resetScroll();
        			}
        			else
        			{
        				this.edtCbo.set_value(sComboText);
        			}
        		}
        	}
        };

        /**
         * @desc 멀티콤보 value 가져오기
         * @param N/A
         * @return {String} 멀티콤보 value
        */
        this.fnGetCode = function()
        {
        	var aRtn = this.edtCbo.uRetrunvalue;
        	if ( this.fvAllValueNull == true && !this.gfnIsNull(aRtn) )
        	{
        		if ( aRtn.length == this.fvComboinnerdataset.rowcount) 	aRtn = null;
        	}

        	return aRtn;
        };

        /**
         * @desc 멀티콤보 text 가져오기
         * @param N/A
         * @return {String} 멀티콤보 text
        */
        this.fnGetText = function()
        {
        	return this.edtCbo.uReturntext;
        };

        /**
         * @desc 멀티콤보 값 세팅
         * @param {String} sValue 셋팅할 값
         * @return N/A
        */
        this.fnSetCode = function(sValue)
        {
        	// 선택된 값 초기화
        	this.fnClearMultiCombo();

        	if (this.gfnIsNull(sValue)) return;

        	var nFindRow;
        	var arrTextList = [];
        	var arrValueList = (""+sValue).split(",");

        	var objDs = this.fvComboinnerdataset;
        	objDs.set_enableevent(false);
        	for (var i=0; i<arrValueList.length; i++) {
        		nFindRow = objDs.findRow(this.fvCombocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(objDs.getColumn(nFindRow, this.fvCombodatacolumn));
        			objDs.setColumn(nFindRow, "chk", "1");
        		}

        	}
        	objDs.set_enableevent(true);
        	objDs.set_rowposition(nFindRow);

        	// 선택값 처리
        	this.fnSyncValue();
        };

        /**
         * @desc 멀티콤보 값 세팅(전체선택으로)
         * @param
         * @return N/A
        */
        this.fnSetCodeAll = function()
        {
        	var nCnt = this.fvComboinnerdataset.getRowCount();
        	for (i=0; i<nCnt; i++)
        	{
        		this.fvComboinnerdataset.setColumn(i, "chk", "1");
        	}

        	// 선택값 처리
        	this.fnSyncValue();
        }

        /**
         * @desc 멀티콤보 필터 세팅
         * @param {String} sFilterstr 필터조건 string
         * @param {String} sValFlag  필터후 초기값 설정Flag( A : 전체선택(default : 전체해제))
         * @return N/A
        */
        this.fnSetFilter = function(sFilterstr, sAllFlag)
        {
        	if ( this.gfnIsNull(sFilterstr) ) sFilterstr = "";

        	// 선택된 값 초기화
        	this.fnClearMultiCombo();

        	this.fvComboinnerdataset.filter(sFilterstr);

        	if ( sAllFlag == "A" )
        	{
        		this.fnSetCodeAll();
        	}
        }

        /**
         * @desc 필수여부 css 변경
         * @param {Boolean} 설정 여부
         * @return N/A
        */
        this.fnEssential = function(bFlag)
        {
        	return; //필수cssclass적용은 라벨에서 처리

        // 	// Essential
        // 	if(!this.gfnIsNull(bFlag))
        // 	{
        // 		if(bFlag)
        // 		{
        // 			this.edtCbo.set_cssclass(this.fvEssentialClass);
        // 		}
        // 		else
        // 		{
        // 			this.edtCbo.set_cssclass(this.fvNoramlClass);
        // 		}
        // 	}
        // 	else
        // 	{
        // 		if(this.edtCbo.cssclass == this.fvEssentialClass)
        // 		{
        // 			this.edtCbo.set_cssclass(this.fvNoramlClass);
        // 		}
        // 		else
        // 		{
        // 			this.edtCbo.set_cssclass(this.fvEssentialClass);
        // 		}
        // 	}
        };

        /**
         * @desc 전체선택 해제 및 선택한 값 초기화
         * @param N/A
         * @return N/A
        */
        this.fnClearMultiCombo = function ()
        {
        	var objDs = this.fvComboinnerdataset;
        	objDs.set_enableevent(false);
        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "chk", "0");
        	}
        	objDs.set_enableevent(true);

        	this.edtCbo.set_value(null);
        	this.edtCbo.uRetrunvalue = null;
        	this.edtCbo.uReturntext  = null;
        };

        /**
         * @desc Popup Div Open
         * @return N/A
        */
        this.fnOpenCombo = function()
        {
        	if (this.fvComboinnerdataset.getRowCount() <= 0)
        	{
        		trace("멀티콤보에 표시할 Data가 없습니다. fnSetDataset으로 Dataset을 지정하세요!");
        		return;
        	}
        	else
        	{
        		// PopupDiv width size 조정
        		if (!this.gfnIsNull(this.fvWidth))
        		{
        			this.pdvCbo.set_width(this.fvWidth);
        		}

        		// 선택값 처리
        		this.fnSyncValue();

        		// pdv size 계산
        		var nRowCount = this.fvComboinnerdataset.getRowCount();
        		var nSize = this.fvDisplayrowcount;
        		if (nSize > nRowCount) nSize = nRowCount;
        		var nHeight = this.fvSearchHeight + this.fvHeadHeight + (this.fvRowHeight  * nSize) + 3 + 40;
        		this.pdvCbo.set_height(nHeight);
        		this.pdvCbo.form.grdMultiCombo.scrollTo(0, 0);
        		this.fvComboinnerdataset.userfilterstr = this.fvComboinnerdataset.filterstr;	//filter조건 기억
        		this.pdvCbo.trackPopupByComponent(this.edtCbo, 0, this.edtCbo.getOffsetHeight()-1);
        	}
        };

        /**
         * @desc 전체선택
         * @param {Boolean} bVal 전체선택 여부
         * @return N/A
        */
        this.fnSelectAll = function (bVal)
        {
        	var objDs = this.fvComboinnerdataset;

        	objDs.set_enableevent(false);
        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		objDs.setColumn(i, "chk", bVal);
        	}
        	objDs.set_enableevent(true);

        	// 선택값 처리
        	this.fnSyncValue();
        };

        /**
         * @desc 전체선택 checkbox의 check표시
         * @param {}
         * @return N/A
        */
        this.fnSelectAllCheckboxToggle = function ()
        {
        	var bCheck = this.fvComboinnerdataset.getCaseCount("chk==undefined || chk=='' || chk=='0'") == 0 ? true : false;
        	this.pdvCbo.form.chkCheckAll.set_value(bCheck);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description edit 클릭시
        */
        this.edtCbo_oneditclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        /**
         * @description 버튼 클릭시
        */
        this.btnCbo_onclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        /**
         * @description popupdiv > grid > cell 클릭시
        */
        this.pdvCbo_grdMultiCombo_oncellclick = function(obj,e)
        {
        	var objDs = this.fvComboinnerdataset;

        // 	// chk 사용 미사용 시
        // 	if (this.fvMultiCheck == false)
        // 	{
        // 		var sVal = objDs.getColumn(e.row, this.fvCombocodecolumn);
        // 		this.fnSetCode(sVal);
        // 		this.pdvCbo.closePopup();
        // 		return;
        // 	}

        	if( e.cell == 0)
        	{
        		var colValue = obj.getCellValue(e.row, e.cell);
        		var inBetween = false;
        		if ( e.shiftkey )
        		{
        			if ( colValue == "1") {
        				for ( i=0; i<objDs.rowcount; i++ ) {
        					if ( this.gfnIsNull(obj._lastCheckedRow) )
        					{
        						obj._lastCheckedRow = e.row;
        						break;
        					}
        					else if (i == e.row || i == obj._lastCheckedRow )
        					{
        						inBetween = !inBetween;
        					}

        					if ( inBetween )
        					{
        						objDs.setColumn(i, "chk", "1");
        					}
        				}
        			}
        			else
        			{
        				objDs.setColumn(e.row, "chk", "1");
        				for ( i=0; i<objDs.rowcount; i++ )
        				{
        					if (i == e.row || i == obj._lastCheckedRow )
        					{
        						inBetween = !inBetween;
        					}

        					if ( inBetween )
        					{
        						objDs.setColumn(i, "chk", "1");
        					}

        					if ( e.row == obj._lastCheckedRow )
        					{
        						break;
        					}
        					else if ( e.row > obj._lastCheckedRow && i > e.row)
        					{
        						objDs.setColumn(i, "chk", "0");
        					}
        				}
        			}
        		}
        		else if ( !e.shiftkey && !e.ctrlkey )
        		{
        			if ( colValue == "1" )
        			{
        				obj._lastCheckedRow = e.row;
        			}
        			else
        			{
        				obj._lastCheckedRow = null;
        			}
        		}
        	}
        	else if( e.cell > 0)
        	{
        		if (objDs.getColumn(e.row, "chk") == "1")
        		{
        			objDs.setColumn(e.row, "chk", "0");
        		}
        		else
        		{
        			objDs.setColumn(e.row, "chk", "1");
        		}
        	}

        	// 선택값 처리
        	this.fnSyncValue();
        };

        // /**
        //  * @description popupdiv > grid > head 클릭시
        // */
        // this.pdvCbo_grdMultiCombo_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	if(this.fvMultiCheck==false)
        // 	{
        // 		return;
        // 	}
        //
        // 	var nCell = e.cell;
        // 	if(nCell==0)
        // 	{
        // 		//var bVal = obj.getCellProperty("head", nCell, "text");
        // 		var bVal = obj.getCellPropertyValue(-1, nCell, "expr");
        // 		if( bVal == "1")
        // 		{
        // 			bVal = "0";
        // 		}
        // 		else
        // 		{
        // 			bVal = "1";
        // 		}
        // 		this.fnSelectAll(bVal);
        // 	}
        // };

        /**
         * @description 전체체크 Checkbox 선택시 Toggle
        */
        this.pdvCbo_chkCheckAll_onchanged = function(obj,e)
        {
        	if ( e.postvalue )
        	{
        		this.fnSelectAll("1");
        	}
        	else
        	{
        		this.fnSelectAll("0");
        	}
        };

        /**
         * @description 확인 클릭시
        */
        this.pdvCbo_btnOk_onclick = function(obj,e)
        {
        // 	this.fvPreSearchText = "";
        // 	this.pdvCbo.form.edtSearch.set_value("");
        // 	this.fvComboinnerdataset.filter("");
        //
        // 	// 선택값 처리
        // 	this.fnSyncValue();
        //
        // 	if(!this.gfnIsNull(this.fvCallbackfunc) && !this.gfnIsNull(this.fvForm[this.fvCallbackfunc]))
        // 	{
        // 		this.fvForm[this.fvCallbackfunc].call(this.fvForm, this.fvCallbackId, this.edtCbo.uRetrunvalue, this.edtCbo.uReturntext);		// 본 화면에 콜백
        // 	}

        	this.pdvCbo.closePopup();
        	this.edtCbo.setFocus();
        };

        /**
         * @description 화면에 표시된 PopupDiv 가 닫힐 때
        */
        this.pdvCbo_oncloseup = function(obj,e)
        {
        	this.fvPreSearchText = "";
        	this.pdvCbo.form.edtSearch.set_value("");
        	//this.fvComboinnerdataset.filter("");
        	if ( this.gfnIsNull(this.fvComboinnerdataset.userfilterstr) )
        	{
        		this.fvComboinnerdataset.filter("");
        	}
        	else
        	{
        		this.fvComboinnerdataset.filter(this.fvComboinnerdataset.userfilterstr);
        	}

        	// 선택값 처리
        	this.fnSyncValue();

        	if(!this.gfnIsNull(this.fvCallbackfunc) && !this.gfnIsNull(this.fvForm[this.fvCallbackfunc]))
        	{
        		this.fvForm[this.fvCallbackfunc].call(this.fvForm, this.fvCallbackId, this.edtCbo.uRetrunvalue, this.edtCbo.uReturntext);		// 본 화면에 콜백
        	}
        };

        /**
         * @description 멀티콤보 데이터검색 값이 입력될때
        */
        this.pdvCbo_edtSearch_onkeyup = function(obj,e)
        {
        	var sSearchText;
        	var arrSearchText = [];
        	var i;
        	var sFilterStr = "";
        	var bFirst = true;
        	var nChkIdex = -1;

        	sSearchText = obj.value;

        	if(this.gfnIsNull(sSearchText))
        	{
        		this.fvComboinnerdataset.filter("");
        		return;
        	}

        	if(sSearchText.indexOf("%") > -1)
        	{
        		if(this.fvPreSearchText != sSearchText)
        		{
        			arrSearchText = sSearchText.split("%");
        			for(i=0;i<arrSearchText.length;i++)
        			{
        				if(!this.gfnIsNull(arrSearchText[i]))
        				{
        					if(bFirst)
        					{
        						sFilterStr = this.fvCombodatacolumn+".toUpperCase().indexOf('"+arrSearchText[i]+"'.toUpperCase()) > -1";
        						bFirst = false;
        						nChkIdex = i;
        					}
        					else
        					{
        						sFilterStr += " && " + this.fvCombodatacolumn+".toUpperCase().indexOf('"+arrSearchText[i]+"'.toUpperCase(),"+this.fvCombodatacolumn+".toUpperCase().indexOf('"+arrSearchText[nChkIdex]+"'.toUpperCase())+1) > -1";
        						nChkIdex = i;
        					}
        				}
        			}
        			//trace("sFilterStr:"+sFilterStr);
        			if ( !this.gfnIsNull(this.fvComboinnerdataset.userfilterstr) )  sFilterStr += " && " + this.fvComboinnerdataset.userfilterstr;
        			this.fvComboinnerdataset.filter(sFilterStr);
        		}
        	}
        	else
        	{
        		sFilterStr = this.fvCombodatacolumn+".toUpperCase().indexOf('"+sSearchText+"'.toUpperCase()) > -1";
        		//trace("sFilterStr:"+sFilterStr);
        		if ( !this.gfnIsNull(this.fvComboinnerdataset.userfilterstr) )  sFilterStr += " && " + this.fvComboinnerdataset.userfilterstr;
        		this.fvComboinnerdataset.filter(sFilterStr);
        	}

        	// 복합키 (shift + 다른키) 일때 onkeyup 이중처리 방지를 위해
        	this.fvPreSearchText = sSearchText;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.edtCbo.addEventHandler("oneditclick",this.edtCbo_oneditclick,this);
            this.pdvCbo.addEventHandler("oncloseup",this.pdvCbo_oncloseup,this);
            this.pdvCbo.form.edtSearch.addEventHandler("onkeyup",this.pdvCbo_edtSearch_onkeyup,this);
            this.pdvCbo.form.grdMultiCombo.addEventHandler("oncellclick",this.pdvCbo_grdMultiCombo_oncellclick,this);
            this.pdvCbo.form.grdMultiCombo.addEventHandler("onheadclick",this.pdvCbo_grdMultiCombo_onheadclick,this);
            this.pdvCbo.form.btnOk.addEventHandler("onclick",this.pdvCbo_btnOk_onclick,this);
            this.pdvCbo.form.chkCheckAll.addEventHandler("onchanged",this.pdvCbo_chkCheckAll_onchanged,this);
            this.btnCbo.addEventHandler("onclick",this.btnCbo_onclick,this);
        };
        this.loadIncludeScript("comMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
