(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comColumnHidePop");
            this.set_titletext("그리드 컬럼 보이기/숨기기 팝업");
            this.set_cssclass("alert_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,397);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"colidx\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staPopBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_Pop_FormBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","20",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColumn");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"257\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;0&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" text=\"컬럼선택\" expandchar=\"popup.columnselect\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:title\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK",null,null,"60","30","83","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCompare","361","6","339","344",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","168","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("VScrollBarArea",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w10");
            obj.set_cssclass("Guide_ScrollBar");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00","53","337","237","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",340,397,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comColumnHidePop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comColumnHidePop Form
        * FILE NAME     : comColumnHidePop.xfdl
        * DESCRIPTION   : 그리드 컬럼 보이기/숨기기 팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.28    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvTargetGrid; 	  					// 대상그리드 OBJECT

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

        	// 초기값 설정
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;

        	// 그리드의 헤드정보를 받아와 세팅
        	this.fnGetHeadText(this.fvTargetGrid);

        	// 비교그리드 세팅
        	this.fnSetGrd();
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
         * @desc 그리드의 헤드정보를 받아와 세팅
         * @param N/A
         * @return N/A
        */
        this.fnGetHeadText = function (objGrid)
        {
        	var objInfoGrid = this.grdList;				//표시용 그리드
        	var objInfoDs   = this.dsColumn;			//표시용 데이타셋

        	var nColCnt = objGrid.getFormatColCount();	//전체 컬럼수

        	objInfoGrid.set_enableredraw(false);
        	var sHeadText, nCellCol, nCellRow, nCellColSpan, nCellRowSpan, sCellText;
        	var nCellColMin, nCellColMax, nCellMaxRow;
        	var nComColCnt = 0;	//공통컬럼수
        	var nHideChk = 1;	//숨김여부(0:hide, 1:show)
        	objInfoDs.clearData();
        	for( var i=0, ilen=objGrid.getFormatColCount(); i<ilen; i++)	//col index
        	{
        		if ( i < 3 && objGrid.getCellProperty("head", i, "cssclass") == "GridCheckboxNoStatusAdd" )		//공통컬럼 제외
        		{
        			nComColCnt++;
        			continue;
        		}

        		sHeadText = "";
        		for (var j=0, jlen=objGrid.getCellCount("head"); j<jlen; j++)	//head cell index
        		{
        			nCellCol 	 = parseInt(objGrid.getCellProperty("head", j, "col"));
        			nCellRow 	 = parseInt(objGrid.getCellProperty("head", j, "row"));
        			nCellColSpan = parseInt(objGrid.getCellProperty("head", j, "colspan"));
        			nCellRowSpan = parseInt(objGrid.getCellProperty("head", j, "rowspan"));
        			sCellText    = objGrid.getCellProperty("head", j, "text");
        			if ( this.gfnIsNull(sCellText) ) sCellText = " ";

        			nCellColMin = nCellCol;
        			nCellColMax = nCellCol + nCellColSpan - 1;

        			if ( i >= nCellColMin && i <= nCellColMax )		//col에 해당하는 head
        			{
        				nCellMaxRow = 0;
        				if (nCellMaxRow < nCellRow)
        				{
        					nCellMaxRow = nCellRow;
        				}
        				if( nCellRow == nCellMaxRow ) sHeadText += "[" + sCellText + "]";
        			}
        			else
        			{
        				continue;
        			}
        		}

        		nHideChk = 1;
        		if( objGrid.getRealColSize(i) < 2 ) nHideChk = 0;	//숨김컬럼의 size는 0 또는 1(autofit 마지막 col)

        		var nRow = objInfoDs.addRow();
        		objInfoDs.setColumn(nRow, "chk",	nHideChk);
        		objInfoDs.setColumn(nRow, "title",	nexacro.replaceAll(sHeadText,"\r\n", " "));
        		objInfoDs.setColumn(nRow, "colidx", i);
        	}
        	objInfoDs.nComColCnt = nComColCnt;
        	objInfoDs.set_keystring("S:+colidx");

        	objInfoGrid.set_enableredraw(true);
        };

        /**
         * @desc 비교그리드 세팅
         * @param N/A
         * @return N/A
        */
        this.fnSetGrd = function()
        {
        	this.grdCompare.set_enableredraw(false);
        	this.grdCompare.set_formats(this.fvTargetGrid.orgformat0);
        	this.grdCompare.set_formatid(this.fvTargetGrid.formatid);
        	this.grdCompare.set_enableredraw(true);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/


        /**
         * @description 확인 버튼 클릭
        */
        this.btnOK_onclick = function(obj,e)
        {
        	var nRowCnt = this.dsColumn.getRowCount();
        	var nCheckCnt = this.dsColumn.getCaseCount("chk==0");

        	//전체 숨기기는 에러처리
        	if ( nRowCnt == nCheckCnt )
        	{
        		var msg = "전체 컬럼을 숨기기 할 수 없습니다.";
        		this.gfnShowMessage(this, ["alert", msg]);
        		return;
        	}

        	this.fvTargetGrid.set_enableredraw(false);

        	var nComColCnt = this.dsColumn.nComColCnt;
        	//공통컬럼
        	for( var i=0; i<nComColCnt; i++)
        	{
        		var nSize= 50;
        		if ( this.fvTargetGrid.getCellProperty("Body", i, "text") == "bind:gridcmmcheck" ) 	nSize = 40;
        		this.fvTargetGrid.setFormatColProperty(i, "size", nSize );
        	}

        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.dsColumn.getColumn(i, "chk");
        		var colidx  = nexacro.toNumber(this.dsColumn.getColumn(i, "colidx"));
        		var nSize = 0;
        		var sBand = "body";
        		if(nChk == 1)
        		{
        			var orgColIdx = colidx - nComColCnt;
        			nSize = this.grdCompare.getFormatColSize(orgColIdx);
        		}
        		else
        		{
        			sBand = this.fvTargetGrid.getFormatColProperty(colidx, "band");
        			if ( sBand == "left") nSize = 1;
        		}
        		this.fvTargetGrid.setFormatColProperty(colidx, "size", nSize );
        	}

        	this.fvTargetGrid.set_enableredraw(true);
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description 닫기 버튼 클릭
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description 그리드 head클릭 이벤트
        */
        this.grdList_onheadclick = function(obj,e)
        {
        	//전체선택 Toggle
        	var sType = obj.getCellProperty("head", e.cell, "displaytype");
        	if(sType == "checkboxcontrol")
        	{
        		obj.set_enableredraw(false);			// 비활성화
        		this.fnHeadCheckSelectAll(obj, e);
        		obj.set_enableredraw(true);
        	}
        };

        this.fnHeadCheckSelectAll = function(objGrid, e)
        {
        	var sType;
        	var sChk;
        	var sVal;
        	var sChkCol;
        	var objDs;
        	var nHeadCell  = e.cell;
        	var nBodyCell;
        	var nSubCnt = objGrid.getSubCellCount("head", nHeadCell);
        	var i;

        	objDs  = objGrid.getBindDataset();

        	if(objDs.getRowCount() < 1) return;

        	if(objGrid.getCellCount("body") != objGrid.getCellCount("head"))
        	{
        		nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
        	}
        	else
        	{
        		nBodyCell = e.cell;
        	}
        	sChkCol = objGrid.getCellProperty("body", nBodyCell, "text");
        	sChkCol = sChkCol.toString().replace("bind:", "");

        	// Merge한 셀이 없는 경우
        	sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");

        	if(sType != "checkboxcontrol")
        	{
        		return;
        	}

        	// Head셋팅
        	// sVal = objGrid.getCellProperty("head", nHeadCell, "text");
        	sVal = objGrid.getCellPropertyValue(-1, nHeadCell, "expr");
        	var nBodyCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nHeadCell);
        	if(this.gfnIsNull(sVal) || sVal == "0")
        	{
        		sChk = "1";
        	}
        	else
        	{
        		sChk = "0";
        	}

        	// Body셋팅
        	for(i=0 ; i< objDs.rowcount ; i++)
        	{
        		objDs.setColumn(i, sChkCol, sChk);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("comColumnHidePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
