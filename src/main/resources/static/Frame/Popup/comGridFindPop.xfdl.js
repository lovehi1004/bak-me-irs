(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGridFindPop");
            this.set_titletext("그리드찾기 팝업");
            this.set_border("0px none");
            this.set_cssclass("alert_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,285);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"bodyCol\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDirection", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">prev</Col><Col id=\"dataKO\">이전</Col><Col id=\"dataEN\">previous</Col></Row><Row><Col id=\"code\">next</Col><Col id=\"dataKO\">다음</Col><Col id=\"dataEN\">next</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">current</Col><Col id=\"dataKO\">현재위치</Col><Col id=\"dataEN\">current</Col></Row><Row><Col id=\"code\">first</Col><Col id=\"dataKO\">처음부터</Col><Col id=\"dataEN\">first</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">equal</Col><Col id=\"dataKO\">일치</Col><Col id=\"dataEN\">equal</Col></Row><Row><Col id=\"code\">inclusion</Col><Col id=\"dataKO\">포함</Col><Col id=\"dataEN\">inclusion</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumnBind", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"colidx\" type=\"INT\" size=\"256\"/><Column id=\"cellidx\" type=\"INT\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"bindtext\" type=\"STRING\" size=\"256\"/><Column id=\"headcellidx\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staPopBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_Pop_FormBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind",null,null,"60","30","83","21",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("찾기");
            obj.getSetter("uWord").set("popup.find");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"60","30","20","21",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("VScrollBarArea",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w10");
            obj.set_cssclass("Guide_ScrollBar");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide0","0","0","168","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBox","20","20",null,"204","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFDA_box");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0",null,"58","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static08_00","0","58",null,"29","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staLabel0","0","0","110","58",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("2");
            obj.set_text("대상컬럼");
            obj.set_cssclass("sta_WFDA_label");
            obj.set_wordWrap("char");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","0","87",null,"29","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staLabel1","0","58","110","29",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("3");
            obj.set_text("찾을 문자열");
            obj.set_cssclass("sta_WFDA_label");
            obj.set_wordWrap("char");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staLabel2","0","87","110","29",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("5");
            obj.set_text("찾을 방향");
            obj.set_cssclass("sta_WFDA_label");
            obj.set_wordWrap("char");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","0","116",null,"29","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staLabel3","0","116","110","29",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("7");
            obj.set_text("찾을 위치");
            obj.set_cssclass("sta_WFDA_label");
            obj.set_wordWrap("char");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00","0","145",null,"29","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Div("divFindColumn","113","2",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("10");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            obj.set_text("");
            this.divBox.addChild(obj.name, obj);

            obj = new Edit("edtFindText","113","60",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("11");
            this.divBox.addChild(obj.name, obj);

            obj = new Radio("rdoFindDirection","113","89",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("12");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsDirection");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_text("다음");
            obj.set_value("next");
            obj.set_index("1");
            this.divBox.addChild(obj.name, obj);

            obj = new Radio("rdoPosition","113","118",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("13");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsPosition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_text("처음부터");
            obj.set_value("first");
            obj.set_index("1");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00","0","174",null,"29","0",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WFDA_Line");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staLabel4","0","145","110","58",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("9");
            obj.set_text("찾을 조건");
            obj.set_cssclass("sta_WFDA_label");
            obj.set_wordWrap("char");
            this.divBox.addChild(obj.name, obj);

            obj = new Radio("rdoCondition","113","147",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("15");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsCondition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_text("포함");
            obj.set_value("inclusion");
            obj.set_index("1");
            this.divBox.addChild(obj.name, obj);

            obj = new CheckBox("chkDiv","113","176",null,"24","3",null,null,null,null,null,this.divBox.form);
            obj.set_taborder("16");
            obj.set_text("대/소문자구분");
            obj.getSetter("uWord").set("popup.casesensitive");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staInfo","113","30","241","24",null,null,null,null,null,null,this.divBox.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Description");
            obj.set_fittocontents("width");
            obj.set_text("콤보 및 가변적인 컬럼은 제외합니다.");
            this.divBox.addChild(obj.name, obj);

            obj = new Static("staGuide1","53",null,"237","10",null,"51",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBox.form.divFindColumn
            obj = new Layout("default","",0,0,this.divBox.form.divFindColumn.form,function(p){});
            this.divBox.form.divFindColumn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBox.form
            obj = new Layout("default","",0,0,this.divBox.form,function(p){});
            this.divBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,285,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comMultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("comGridFindPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comGridFindPop Form
        * FILE NAME     : comGridFindPop.xfdl
        * DESCRIPTION   : 그리드찾기 팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.28    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	★★★ cssclass 확인 필요
        	공통컬럼 제외 : "head" > "cssclass" > "GridCheckboxNoStatusAdd"	, this.gvGridCheckboxNoStatusAddCssclass
        */

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvGrid="";
        this.fvDs="";
        this.fvSelectRow=0;
        this.fvCellname="";
        this.fvCellindex=0;
        this.fvSelectType="row";
        this.fvShowSelection="false";

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
        	// this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        	this.fnFormInit(obj);
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	this.fvGrid 	  = this.getOwnerFrame().pvGrid;
        	this.fvDs 		  = this.fvGrid.getBindDataset();
        	this.fvSelectRow  = this.getOwnerFrame().pvStrartRow;
        	this.fvSelectType = this.getOwnerFrame().pvSelectType;
        	this.fvShowSelection = this.getOwnerFrame().pvShowSelection;
        	this.fvCellindex  = this.getOwnerFrame().pvSelectCell;
        	this.fvGrid.set_selecttype("cell");
        	this.fvGrid.set_showselection("true");

        	this.fvGrid.currentcell = this.fvCellindex;
        	this.fvGrid.currentrow = this.fvSelectRow;

        	this.fvGrid.lastFindCell = 0;
        	this.fvGrid.lastFindRow = 0;

        	this.fnGetHeadText(this.fvGrid);
        };

        /**
         * @description Form 이 종료되기 전에 발생하는 이벤트
         */
        this.comGridFindPop_onbeforeclose = function(obj,e)
        {
        	this.fvGrid.set_selecttype(this.fvSelectType);
        	this.fvGrid.set_showselection(this.fvShowSelection);
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description 멀티콤보 callback(선택)
         */
        this.fnComboCallback = function(sCallbackId, sRtnValue, sRtnText)
        {
        	//trace("[fnComboCallback]sCallbackId : "+sCallbackId+" | sRtnValue : "+ sRtnValue+" | sRtnText : "+ sRtnText);

        	switch (sCallbackId)
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


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 그리드의 헤드정보를 받아와 콤보 세팅
         * @param N/A
         * @return N/A
        */
        this.fnGetHeadText = function (objGrid)
        {
        	var objInfoDs   = this.dsColumnBind;		//표시용 데이타셋
        	objInfoDs.clearData();

        	var nBodyCellCol, nBodyCellRow, nBodyCellColSpan, nBodyCellRowSpan, sBodyCellDisplayType, sBodyCellEditType, sBodyCellText, nBodyCellRowMin, nBodyCellRowMax;
        	var nHeadCellCol, nHeadCellRow, nHeadCellColSpan, nHeadCellRowSpan, nHeadCellText, nHeadCellColMin, nHeadCellColMax, nHeadCellIndex;

        	var sHeadText = "";
        	for( var i=0, ilen=objGrid.getCellCount("body"); i<ilen; i++)	//body cell index
        	{
        		//trace("i===="+i);
        		if ( i < 3 && objGrid.getCellProperty("head", i, "cssclass") == this.gvGridCheckboxNoStatusAddCssclass )		//공통컬럼 제외
        		{
        			continue;
        		}

        		//DisplayType에 따라 제외
        		sBodyCellDisplayType = objGrid.getCellProperty("body", i, "displaytype");
                if( sBodyCellDisplayType.indexOf("image") > -1 ) continue;
        		if( sBodyCellDisplayType.indexOf("button") > -1 ) continue;
        		if( sBodyCellDisplayType.indexOf("combo") > -1 ) continue;
        		if( sBodyCellDisplayType.indexOf("progressbar") > -1 ) continue;
        		//EditType에 따라 제외
        		sBodyCellEditType    = objGrid.getCellProperty("body", i, "edittype");
        		if( sBodyCellEditType.indexOf("button") > -1 ) continue;
        		if( sBodyCellEditType.indexOf("combo") > -1 ) continue;
        		//Bind컬럼에 따라 제외
        		sBodyCellText    = objGrid.getCellProperty("body", i, "text");
        		if( String(sBodyCellText).substr(0, 5) != "bind:" ) continue;

        		nBodyCellCol 	 = parseInt(objGrid.getCellProperty("body", i, "col"));
        		nBodyCellRow 	 = parseInt(objGrid.getCellProperty("body", i, "row"));
        		nBodyCellColSpan = parseInt(objGrid.getCellProperty("body", i, "colspan"));
        		nBodyCellRowSpan = parseInt(objGrid.getCellProperty("body", i, "rowspan"));

        		nBodyCellRowMin = nBodyCellRow;
        		nBodyCellRowMax = nBodyCellRow + nBodyCellRowSpan - 1;

        		sHeadText = "";
        		nHeadCellIndex = -1;
        		for (var j=0, jlen=objGrid.getCellCount("head"); j<jlen; j++) 	//head cell index
        		{
        			nHeadCellCol 	 = parseInt(objGrid.getCellProperty("head", j, "col"));
        			nHeadCellRow 	 = parseInt(objGrid.getCellProperty("head", j, "row"));
        			nHeadCellColSpan = parseInt(objGrid.getCellProperty("head", j, "colspan"));
        			nHeadCellRowSpan = parseInt(objGrid.getCellProperty("head", j, "rowspan"));
        			nHeadCellText    = objGrid.getCellProperty("head", j, "text");
        			if ( this.gfnIsNull(nHeadCellText) ) nHeadCellText = " ";

        			if ( nHeadCellCol == nBodyCellCol && nHeadCellRow == nBodyCellRow && nHeadCellColSpan == nBodyCellColSpan && nHeadCellRowSpan == nBodyCellRowSpan )
        			{
        				sHeadText += "[" + nHeadCellText + "]";
        				nHeadCellIndex = j;
        				//trace("최종일치 " + i + "::: sHeadText=="+sHeadText + "::::nHeadCellIndex=="+nHeadCellIndex);
        				break;
        			}
        		}

        		if ( nHeadCellIndex == -1 )
        		{

        			for (var j=0, jlen=objGrid.getCellCount("head"); j<jlen; j++)		//head cell index
        			{
        				nHeadCellCol 	 = parseInt(objGrid.getCellProperty("head", j, "col"));
        				nHeadCellRow 	 = parseInt(objGrid.getCellProperty("head", j, "row"));
        				nHeadCellColSpan = parseInt(objGrid.getCellProperty("head", j, "colspan"));
        				nHeadCellRowSpan = parseInt(objGrid.getCellProperty("head", j, "rowspan"));
        				nHeadCellText    = objGrid.getCellProperty("head", j, "text");
        				if ( this.gfnIsNull(nHeadCellText) ) nHeadCellText = " ";

        				nHeadCellColMin = nHeadCellCol;
        				nHeadCellColMax = nHeadCellCol + nHeadCellColSpan - 1;

        				if ( nBodyCellCol >= nHeadCellColMin && nBodyCellCol <= nHeadCellColMax )		//body col에 해당하는 head col(범위)
        				{
        					sHeadText += "[" + nHeadCellText + "]";
        					nHeadCellIndex = j;
        					//trace("최종범위 " + i + "::: sHeadText=="+sHeadText + "::::nHeadCellIndex=="+nHeadCellIndex);
        					continue;
        				}
        				else
        				{
        					continue;
        				}
        			}
        		}

        		var nRow = objInfoDs.addRow();
        		objInfoDs.setColumn(nRow, "title",	nexacro.replaceAll(sHeadText,"\r\n", " "));
        		objInfoDs.setColumn(nRow, "colidx", nBodyCellCol);
        		objInfoDs.setColumn(nRow, "cellidx", i);
        		objInfoDs.setColumn(nRow, "displaytype", sBodyCellDisplayType);
        		objInfoDs.setColumn(nRow, "edittype", sBodyCellEditType);
        		objInfoDs.setColumn(nRow, "bindtext", sBodyCellText.substr(5));
        		objInfoDs.setColumn(nRow, "headcellidx", nHeadCellIndex);
        	}
        	objInfoDs.set_keystring("S:+colidx+cellidx");

        	// 3) 멀티콤보 ("전체선택완료" 표시)
        	var objParam = {objDs:objInfoDs,							// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"cellidx",						// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"title",						// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"FindColumn",					// 콜백ID
        					bAll:false,									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        					sAllDisplay:"그리드전체",						// 멀티콤보 전체 시 표시 값 (없으면 선택한 data 값 표시)
        					bAllValueNull:false,						// 멀티콤보 전체 시 fnGetCode()에서 value 값 null 사용여부 (true(default), false)
        					nDisplayrowcount:null,						// 멀티콤보 표시 건수 설정 (default : 10)
        					nWidth:null									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        				   };
        	this.divBox.form.divFindColumn.form.fnInitMultiCombo(this, objParam);
        };

        /**
         * @desc 찾기옵션세팅
         * @param N/A
         * @return N/A
        */
        this.fnGetFindOption = function()
        {
        	var option = {
        		'direction': this.divBox.form.rdoFindDirection.value,
        		'position': this.divBox.form.rdoPosition.value,
        		'scope': 'col',
        		'condition': this.divBox.form.rdoCondition.value,
        		'strict': this.divBox.form.chkDiv.value,
        		'cell': this.divBox.form.divFindColumn.form.fnGetCode()
        	};

        	return option;
        };

        /**
         * @description 문자열 찾기
        */
        this.fnFindText = function()
        {
        	var sTxt = this.divBox.form.edtFindText.value;
        	var option = this.fnGetFindOption();
        		//Cell 순서대로 배열
        	    option.cell = option.cell.sort(function(a,b) {
        			if ( a > b ) return 1;
        			if ( a == b ) return 0;
        			if ( a < b ) return -1;
        		});

        	if(this.gfnIsNull(this.divBox.form.divFindColumn.form.fnGetCode()))
        	{
        		this.gfnShowMessage(this, ["Alert","찾는 대상컬럼을 선택하십시요."]);
        		return;
        	}

        	if(this.gfnIsNull(this.divBox.form.edtFindText.value))
        	{
        		this.gfnShowMessage(this, ["Alert","찾을 문자열을 입력하십시요."]);
        		return;
        	}

        	var findRowCell = this.gfnFindGridTextMulti(this.fvGrid, sTxt, option);

        	var findRow = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fvDs.set_rowposition(findRow);
        		this.fvGrid.setCellPos(findCell);
        	}
        	else
        	{
        		this.gfnShowMessage(this, ["Alert","찾는 결과가 없습니다"]);
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        /**
         * @description 대상컬럼 콤보 변경이벤트
        */
        this.cboFindColumn_onitemchanged = function(obj,e)
        {
        	this.fvCellindex = e.postvalue;
        };

        /**
         * @description 찾을 문자열 변경시
        */
        this.edtFindText_onchanged = function(obj,e)
        {
        	// 처음부터 선택시 최종 찾은 정보 0 으로 초기화
        	if (!this.gfnIsNull(e.postvalue) && e.prevalue != e.postvalue && this.divBox.form.rdoPosition.value == "first")
        	{
        		this.fvGrid.lastFindCell = 0;
        		this.fvGrid.lastFindRow = 0;
        	}
        };

        /**
         * @description 찾을 문자열에서 엔터키 사용시
        */
        this.divBox_edtFindText_onkeyup = function(obj,e)
        {
        	if ( e.keycode == 13)
        	{
        		this.fnFindText();
        	}
        };

        /**
         * @description 찾을 위치 라디오 변경시
        */
        this.rdoPosition_onitemchanged = function(obj,e)
        {
        	// 처음부터 선택시 최종 찾은 정보 0 으로 초기화
        	if (!this.gfnIsNull(e.postvalue) && e.prevalue != e.postvalue && e.postvalue == "first")
        	{
        		this.fvGrid.lastFindCell = 0;
        		this.fvGrid.lastFindRow = 0;
        	}
        };

        /**
         * @description 찾기 버튼 클릭
        */
        this.btnFind_onclick = function(obj,e)
        {
        	this.fnFindText();
        };

        /**
         * @description 닫기 버튼 클릭
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.fvGrid.set_selecttype(this.fvSelectType);
        	this.fvGrid.set_showselection(this.fvShowSelection);
        	this.gfnPopupClose(this, "");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onbeforeclose",this.comGridFindPop_onbeforeclose,this);
            this.btnFind.addEventHandler("onclick",this.btnFind_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBox.form.edtFindText.addEventHandler("onchanged",this.edtFindText_onchanged,this);
            this.divBox.form.edtFindText.addEventHandler("onkeyup",this.divBox_edtFindText_onkeyup,this);
            this.divBox.form.rdoPosition.addEventHandler("onitemchanged",this.rdoPosition_onitemchanged,this);
        };
        this.loadIncludeScript("comGridFindPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
