(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGridFilterPop");
            this.set_titletext("그리드필터 팝업");
            this.set_cssclass("alert_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,417);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilterType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">=</Col><Col id=\"name\">같은</Col></Row><Row><Col id=\"code\">&gt;</Col><Col id=\"name\">보다 큰</Col></Row><Row><Col id=\"code\">&lt;</Col><Col id=\"name\">보다 작은</Col></Row><Row><Col id=\"code\">!=</Col><Col id=\"name\">같지않는</Col></Row><Row><Col id=\"code\">like</Col><Col id=\"name\">포함하는</Col></Row><Row><Col id=\"code\">nolike</Col><Col id=\"name\">포함하지 않는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumnBind", this);
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"colidx\" type=\"INT\" size=\"256\"/><Column id=\"cellidx\" type=\"INT\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"bindtext\" type=\"STRING\" size=\"256\"/><Column id=\"combocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"combodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"combodataset\" type=\"STRING\" size=\"256\"/><Column id=\"filtertype\" type=\"STRING\" size=\"256\"/><Column id=\"filtervalue\" type=\"STRING\" size=\"256\"/><Column id=\"headcellidx\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staPopBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_Pop_FormBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","38",null,null,"0","57",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColumnBind");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/><Column size=\"100\"/><Column size=\"187\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"컬럼명\" expandchar=\"popup.columnname\"/><Cell col=\"1\" text=\"필터기준\" expandchar=\"popup.filtercriteria\"/><Cell col=\"2\" text=\"찾을조건\" expandchar=\"popup.findcondition\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsFilterCol\" combodatacol=\"columnName\" combocodecol=\"columnId\" wordWrap=\"char\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFilterType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:filtertype\"/><Cell col=\"2\" text=\"bind:filtervalue\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"0","30","30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_RowDown");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFilter","219",null,"75","32",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용");
            obj.getSetter("uWord").set("popup.apply");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","btnSetFilter:3",null,"75","32",null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","0","0","375","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("콤보 및 가변적인 컬럼은 대상컬럼에서 제외합니다.");
            obj.set_cssclass("sta_WF_DscTxt");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp",null,"0","30","30","btnDown:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_RowUp");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilterCancel",null,"0","66","30","btnUp:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터취소");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_WF_Comm");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_01","219",null,"153","25",null,"32",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,417,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comGridFilterPop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comGridFilterPop Form
        * FILE NAME     : comGridFilterPop.xfdl
        * DESCRIPTION   : 그리드필터 팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.28    TOBESOFT	     최초생성
        ***********************************************************************************/
        /**
        	★ 원본 데이타셋에 기본 필터를 사용하는 경우
        		원본Dataset.userApplyGridFilter = "Y";
        		원본Dataset.userOriginFilterstr = 필터값;
        	반드시, 필터값 변경후 변수 설정이 필요합니다.(필터 취소시 사용)
        **/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvTargetGrid; 	  					// 대상그리드 OBJECT
        this.fvTargetDataset; 					// 대상데이터셋 OBJECT


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

        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();

        	this.fnGetHeadText(this.fvTargetGrid);
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 그리드의 Body 의 Bind 정보를 이용해 필터용 초기 데이터 dsColumnBind 생성
         * @param {Grid} obj 그리드
         * @return N/A
        */
        this.fnGetHeadText = function (objGrid)
        {
        	var objInfoGrid = this.grdList;				//표시용 그리드
        	var objInfoDs   = this.dsColumnBind;		//표시용 데이타셋

        	objInfoGrid.set_enableredraw(false);
        	objInfoDs.clearData();

        	var nBodyCellCol, nBodyCellRow, nBodyCellColSpan, nBodyCellRowSpan, sBodyCellDisplayType, sBodyCellEditType, sBodyCellText, nBodyCellRowMin, nBodyCellRowMax;
        	var nHeadCellCol, nHeadCellRow, nHeadCellColSpan, nHeadCellRowSpan, nHeadCellText, nHeadCellColMin, nHeadCellColMax, nHeadCellIndex;

        	var sHeadText = "";
        	for( var i=0, ilen=objGrid.getCellCount("body"); i<ilen; i++)	//body cell index
        	{
        		//trace("i===="+i);
        		if ( i < 3 && objGrid.getCellProperty("head", i, "cssclass") == this.gvGridCheckboxNoStatusAddCssclass )	//공통컬럼 제외
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
        		for (var j=0, jlen=objGrid.getCellCount("head"); j<jlen; j++) 		//head cell index
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
        		objInfoDs.setColumn(nRow, "idx", nBodyCellCol);
        		objInfoDs.setColumn(nRow, "title",	nexacro.replaceAll(sHeadText,"\r\n", " "));
        		objInfoDs.setColumn(nRow, "colidx", nBodyCellCol);
        		objInfoDs.setColumn(nRow, "cellidx", i);
        		objInfoDs.setColumn(nRow, "displaytype", sBodyCellDisplayType);
        		objInfoDs.setColumn(nRow, "edittype", sBodyCellEditType);
        		objInfoDs.setColumn(nRow, "bindtext", sBodyCellText);
        		objInfoDs.setColumn(nRow, "combocodecol",  objGrid.getCellProperty("body", i, "combocodecol"));
        		objInfoDs.setColumn(nRow, "combodatacol",  objGrid.getCellProperty("body", i, "combodatacol"));
        		objInfoDs.setColumn(nRow, "combodataset", objGrid.getCellProperty("body", i, "combodataset"));
        		//objInfoDs.setColumn(nRow, "filtertype", "");
        		//objInfoDs.setColumn(nRow, "filtervalue", "");
        		objInfoDs.setColumn(nRow, "headcellidx", nHeadCellIndex);
        	}
        	objInfoDs.set_keystring("S:+idx+cellidx");

        	objInfoGrid.set_enableredraw(true);
        	// dsColumnBind 에 이전의 필터조건 정보를 조합하여 dsColumnBind 생성(grdList 바인딩 dataset)
        	this.fnFilterSetup();
        };

        /**
         * @desc dsColumnBind 에 이전의 필터조건 정보를 조합하여 dsColumnBind 생성(grdList 바인딩 dataset)
         * @param N/A
         * @return N/A
        */
        this.fnFilterSetup = function ()
        {
        	var i,j;
            var columinfo = "";
        	var columname   = "";
        	var condition   = "";
        	var filtertype  = "";
        	var filtervalue = "";
        	var filterlist= new Array();
            var filterstr = this.fvTargetDataset.filterstr;
        	/**
        		★ 원본 데이타셋에 기본 필터를 사용하는 경우
        			원본Dataset.userApplyGridFilter = "Y";
        			원본Dataset.userOriginFilterstr = 필터값;
        		반드시, 필터값 변경후 변수 설정이 필요합니다.(필터 취소시 사용)
        	**/
        	if ( this.gfnIsNull(this.fvTargetDataset.userApplyGridFilter) || this.fvTargetDataset.userApplyGridFilter == "false")
        	{
        		this.fvTargetDataset.userApplyGridFilter = "true";
        		this.fvTargetDataset.userOriginFilterstr = filterstr;
        	}

            var tempbuff  = filterstr.split("&&");
        	var nRow;
        	var body;
        	var sTitle;

            for(i=0;i<tempbuff.length;i++)
            {
                columinfo = tempbuff[i].trim();
                columname   = "";
                condition   = "";
                filtertype  = "";
                filtervalue = columinfo.split("'")[1];

                for(j=0;j<columinfo.length;j++)
                {
                    if( "1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(columinfo.charAt(j)) == -1 )
                    {
                        columname = columinfo.substring(0, j);
                        condition = columinfo.substring(j);
                        break;
                    }
                }

                // 포함여부
                if( condition.indexOf("indexOf") != -1 )
                {
        			// ITO : 필터 선택 콤보 오류
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "notlike";
                    }
                    else
                    {
                        filtertype = "like";
                    }
                }
                else
                {
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "=";
                    }
                    else if( condition.indexOf("!=") != -1 )
                    {
                        filtertype = "!=";
                    }
                    else if( condition.indexOf(">") != -1 )
                    {
                        filtertype = ">";
                    }
                    else if( condition.indexOf("<") != -1 )
                    {
                        filtertype = "<";
                    }
                }

                filterlist.push({body:"bind:"+columname, filtertype:filtertype, filtervalue:filtervalue});
            }

        	// 이전의 필터조건을 이용해서 설정하고 소팅처리한다.
            for(i=0;i<filterlist.length;i++)
            {
                nRow = this.dsColumnBind.findRow("bindtext",     filterlist[i].body);
                this.dsColumnBind.setColumn(nRow, "idx",       -(filterlist.length-i)    );
                this.dsColumnBind.setColumn(nRow, "filtertype",  filterlist[i].filtertype );
                this.dsColumnBind.setColumn(nRow, "filtervalue", filterlist[i].filtervalue);
            }

            this.dsColumnBind.set_keystring("S:+idx+cellidx");
            this.dsColumnBind.set_rowposition(0);
        };

        /**
         * @description 데이타셋에 필터 적용
        */
        this.fnSetFilterDs = function()
        {
        	var i;
        	var dataset = this.fvTargetDataset;
            var filterstr = "";

        	var columid;
        	var filtervalue;
        	var filtertype;
        	var nCellIdx;
        	this.fvTargetGrid.set_enableredraw(false);
        	var nCount = this.dsColumnBind.getRowCount();
            for(i=0;i<nCount;i++)
            {
                columid    = this.dsColumnBind.getColumn(i, "bindtext").substr(5);
                filtervalue= this.dsColumnBind.getColumn(i, "filtervalue");
                filtertype = this.dsColumnBind.getColumn(i, "filtertype");
        		nCellIdx = this.dsColumnBind.getColumn(i, "headcellidx");

                if( !this.gfnIsNull(filtertype) && !this.gfnIsNull(filtervalue) )
                {
                    var tempfilter = "";

                    if( filtertype == "=" )
                    {
                        tempfilter = columid+"=='"+filtervalue+"'";
                    }
                    else if( filtertype == "!=" )
                    {
                        tempfilter = columid+"!='"+filtervalue+"'";
                    }
                    else if( filtertype == ">" )
                    {
                        tempfilter = columid+">'"+filtervalue+"'";
                    }
                    else if( filtertype == "<" )
                    {
                        tempfilter = columid+"<'"+filtervalue+"'";
                    }
                    else if( filtertype == "like" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')!=-1";
                    }
                    else if( filtertype == "notlike" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')==-1";
                    }

                    if( this.gfnIsNull(filterstr) )
        			{
        				filterstr = tempfilter;
        			}
                    else
        			{
        				filterstr += " && "+tempfilter;
        			}

        			// 헤더에 expand button 추가
        			this.fvTargetGrid.setCellProperty("head", nCellIdx, "expandimage", "URL('"+this.gvGridFilterExpandimage+"')");
        			this.fvTargetGrid.setCellProperty("head", nCellIdx, "expandshow", "show");
        			this.fvTargetGrid.setCellProperty("head", nCellIdx, "expandsize", this.gvExpandBtnSize);
                }
        		else
        		{
        			// 헤더에 expand button 숨기기
        			this.fvTargetGrid.setCellProperty("head", nCellIdx, "expandshow", "hide");
        		}
            }
            this.fvTargetGrid.set_enableredraw(true);
            dataset.set_filterstr(filterstr);

        	this.gfnPopupClose(this, "");	//적용후 팝업 닫기
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/

        /**
         * @description 필터취소 버튼
        */
        this.btnFilterCancel_onclick = function(obj,e)
        {
        	var nCellIdx;
        	this.fvTargetGrid.set_enableredraw(false);
        //     for(i=0;i<this.fvTargetGrid.getCellCount("Head");i++)
        //     {
        //  		this.fvTargetGrid.setCellProperty("head", i, "expandshow", "hide");
        // 	}
        	var nCount = this.dsColumnBind.getRowCount();
            for(i=0;i<nCount;i++)
            {
        		nCellIdx = this.dsColumnBind.getColumn(i, "headcellidx");
        		this.fvTargetGrid.setCellProperty("head", nCellIdx, "expandshow", "hide");
            }
        	this.fvTargetGrid.set_enableredraw(true);
        	if ( this.gfnIsNull(this.fvTargetDataset.userApplyGridFilter) || this.fvTargetDataset.userApplyGridFilter == "false")
        	{
        		this.fvTargetDataset.set_filterstr("");
        	}
        	else
        	{
        		this.fvTargetDataset.set_filterstr(this.fvTargetDataset.userOriginFilterstr);
        	}
        };

        /**
         * @description 위로 버튼
        */
        this.btnUp_onclick = function(obj,e)
        {
        	var currow = this.dsColumnBind.rowposition;

            if( currow == 0 ) return;

            this.dsColumnBind.moveRow(currow, --currow);
        };

        /**
         * @description 아래로 버튼
        */
        this.btnDown_onclick = function(obj,e)
        {
        	var currow = this.dsColumnBind.rowposition;

            if( currow == this.dsColumnBind.getRowCount()-1 ) return;

            this.dsColumnBind.moveRow(currow, ++currow);
        };

        /**
         * @description 적용 버튼
        */
        this.btnSetFilter_onclick = function(obj,e)
        {
        	this.fnSetFilterDs();	//필터 적용
        };

        /**
         * @description 닫기 버튼
        */
        this.btnClose_onclick = function(obj,e)
        {
        	// this.close();
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description combo 일 경우  dropdownCombo 처리
        */
        this.grdList_oncellclick = function(obj,e)
        {
        	if(obj.getCellProperty("body", e.cell, "edittype") == "combo")
        	{
        		obj.dropdownCombo();
        	}
        };

        /**
         * @description 그리드 에서 onkeyup 이벤트
        */
        this.grdList_onkeyup = function(obj,e)
        {
        	//찾을조건에서 엔터키 입력시 적용(버튼) 실행
        	if ( e.keycode == 13)
        	{
        		var nCellPos = obj.getCellPos();
        		if ( nCellPos == 2 ) 	this.fnSetFilterDs();	//필터 적용
        	}
        };

        //head <-> body 매치되는 cell index찾기
        this.fnGridGetHeadBodyCellIndexByCell = function(objGrid, sFromBand, nFromCellIndex)
        {
        	var sFBand, sTBand;
        	if ( sFromBand == "body" )
        	{
        		sFBand = "body";
        		sTBand = "head";
        	}
        	else
        	{
        		sFBand = "head";
        		sTBand = "body";
        	}
        	var nFCol = -1, nFRow = -1, nFColSpan = 0, nFRowSpan = 0;
        	var nTCol = -1, nTRow = -1, nTColSpan = 0, nTRowSpan = 0;
        	var nToCellIndex = -1;

        	nFCol = objGrid.getCellProperty(sFBand, nFromCellIndex, "col");
        	nFRow = objGrid.getCellProperty(sFBand, nFromCellIndex, "row");
        	nFColSpan  = objGrid.getCellProperty(sFBand, nFromCellIndex, "colspan");
        	nFRowSpan  = objGrid.getCellProperty(sFBand, nFromCellIndex, "rowspan");

         	for ( i=0, len=objGrid.getCellCount(sTBand); i<len; i++)
         	{
        		nTCol = objGrid.getCellProperty(sTBand, i, "col");
        		nTRow = objGrid.getCellProperty(sTBand, i, "row");
        		nTColSpan  = objGrid.getCellProperty(sTBand, i, "colspan");
        		nTRowSpan  = objGrid.getCellProperty(sTBand, i, "rowspan");
        		if ( nTCol == nFCol && nTRow == nFRow && nTColSpan == nFColSpan && nTRowSpan == nFRowSpan)
        		{
        			nToCellIndex = i;
        		}
         	}

        	if ( nToCellIndex == -1 )
        	{
        		for ( i=0, len=objGrid.getCellCount(sTBand); i<len; i++)
        		{
        			nTCol = objGrid.getCellProperty(sTBand, i, "col");
        			nTRow = objGrid.getCellProperty(sTBand, i, "row");
        			nTColSpan  = objGrid.getCellProperty(sTBand, i, "colspan");
        			nTRowSpan  = objGrid.getCellProperty(sTBand, i, "rowspan");
        			if ( nTCol == nFCol && nTColSpan == nFColSpan )
        			{
        				nToCellIndex = i;
        			}
        		}
        	}

        // 	if ( nToCellIndex == -1 ) {
        // 		nToCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nFromCellIndex, false);
        // 	}

        	return nToCellIndex;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("onkeyup",this.grdList_onkeyup,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnSetFilter.addEventHandler("onclick",this.btnSetFilter_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnFilterCancel.addEventHandler("onclick",this.btnFilterCancel_onclick,this);
        };
        this.loadIncludeScript("comGridFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
