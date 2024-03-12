(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMDI");
            this.set_titletext("frameMDI");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1626,45);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MDI_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenList",null,"8","28","28","33",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("오픈된 화면 목록");
            obj.set_cssclass("btn_MDI_List");
            obj.set_accessibilitylabel("오픈된 화면 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"8","28","28","89",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Right");
            obj.set_accessibilitylabel("다음 화면목록으로");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev",null,"8","28","28","117",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Left");
            obj.set_accessibilitylabel("이전 화면목록으로");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllClose",null,"8","28","28","61",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_CloseAll");
            obj.set_tooltiptext("모든 화면 닫기");
            obj.set_accessibilitylabel("모든 화면 닫기");
            this.addChild(obj.name, obj);

            obj = new Div("divMenuTab","30",null,null,"35","159","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrolltype("horizontal");
            obj.set_formscrollbarsize("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","0","0","171","35",null,null,null,null,null,null,this.divMenuTab.form);
            obj.set_taborder("0");
            obj.set_text("사전승인사업 신청");
            obj.set_cssclass("btn_MDI_TabBtn");
            obj.set_visible("false");
            this.divMenuTab.addChild(obj.name, obj);

            obj = new Button("btn01_00","btn01:0","0","186","35",null,null,null,null,null,null,this.divMenuTab.form);
            obj.set_taborder("1");
            obj.set_text("국제감축협의체 현황");
            obj.set_cssclass("btn_MDI_TabBtnS");
            obj.set_visible("false");
            this.divMenuTab.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:-28","6","22","22",null,null,null,null,null,null,this.divMenuTab.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_TabClose");
            obj.set_visible("false");
            this.divMenuTab.addChild(obj.name, obj);

            obj = new Button("btn02_00","btn01_00:-28","6","22","22",null,null,null,null,null,null,this.divMenuTab.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_TabCloseS");
            obj.set_visible("false");
            this.divMenuTab.addChild(obj.name, obj);

            obj = new Button("btnShowFold","0","4","16","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_Show");
            obj.set_accessibilitylabel("SHOW");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","56","16","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Hidden");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvOpenMenu","1348","83","202","302",null,null,null,null,null,null,this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenList","0","0",null,null,"0","0",null,null,null,null,this.pdvOpenMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MDI_List");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"172\"/><Column size=\"30\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" tooltiptext=\"bind:menuNm\"/><Cell col=\"1\" cssclass=\"Cell_MDI_ListDelete\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.pdvOpenMenu.addChild(obj.name, obj);

            obj = new PopupDiv("pdvTooltip","1501","35","90","39",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("staTooltip","0","4","90","35",null,null,null,null,null,null,this.pdvTooltip.form);
            obj.set_taborder("0");
            obj.set_text("전체닫기");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Tooltip");
            this.pdvTooltip.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenuTab.form
            obj = new Layout("default","",0,0,this.divMenuTab.form,function(p){});
            this.divMenuTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvOpenMenu.form
            obj = new Layout("default","",0,0,this.pdvOpenMenu.form,function(p){});
            this.pdvOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvTooltip.form
            obj = new Layout("default","",0,0,this.pdvTooltip.form,function(p){});
            this.pdvTooltip.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1626,45,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMDI.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameMDI Form
        * FILE NAME     : frameMDI.xfdl
        * DESCRIPTION   : frameMDI
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.xx    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/


        this.fvFirstGap = 0;								// 메뉴TAB 버튼의 첫시작 Gap
        this.fvBtnGap = 0;									// 메뉴TAB 버튼간 Gap

        this.fvTabBtnPrefix = "btn_";						// 메뉴TAB 버튼의 prefix
        this.fvTabBtnMaxTextSize = 130; 					// 10글자(공백없이) 일때 size
        this.fvTabTop = 0;									// 메뉴TAB 버튼의 Top
        this.fvTabHeight = 35;								// 메뉴TAB 버튼의 Height
        this.fvTabBtnCssclass = "btn_MDI_TabBtn";			// 메뉴TAB 버튼의 cssclass (선택시 btn_MDI_TabBtnS)

        this.fvExtraBtnPrefix = "btnClose_";				// 메뉴TAB Extra 버튼의 prefix
        this.fvTabExtraRightGap = 28;						// 메뉴TAB Extra 버튼 (X 닫기버튼) 의 Right Gap
        this.fvExtraTop = 6;								// 메뉴TAB Extra 버튼 (X 닫기버튼) 의 Top
        this.fvExtraWidth = 22;								// 메뉴TAB Extra 버튼 (X 닫기버튼) 의 Width
        this.fvExtraHeight = 22;							// 메뉴TAB Extra 버튼 (X 닫기버튼) 의 Height
        this.fvExtraBtnCssclass = "btn_MDI_TabClose";		// 메뉴TAB Extra 버튼의 cssclass (선택시 btn_MDI_TabCloseS)

        this.fvMdiBtnClicked;								// 선택한 MDI button object


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {

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
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/



        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 로그인 이후 초기화 처리
         * @param N/A
         * @return N/A
        */
        this.fnLoginAfter = function()
        {
        	trace("[frameMDI]fnLoginAfter====================");
        };

        /**
         * @desc 새창열기시 gdsOpenMenu 에 정보 추가, MDI 버튼 생성처리
         * 1. 열린 화면을 Dataset에 추가하고, MDI 버튼을 생성한다.
         * ==> Frame.js 의 gfnOpenMenu 에서 호출함.
         * @param {Object} 새로 열리는 ChildFrame
         * @return N/A
        */
        this.fnAddOpenformInfo = function (objCF)
        {
        	if (this.gfnIsNull(objCF)) return false;

        	var objOpenFormGds = this.fvApp.gdsOpenMenu;
        	var objComArgs = objCF.arguments;
        	var sWinKey = objComArgs.argWinKey;
        	var sMnuId = objComArgs.argMnuId;
        	var sMnuNm = objComArgs.argMnuNm;
        	var sMenuUrl = objComArgs.argMenuUrl;
        	var sMenuPath = objComArgs.argMenuPath;
        	var objArgSend = objComArgs.argSend;

        	var nWinRow = objOpenFormGds.findRowExpr("winKey == '" + sWinKey + "'");
        	if (nWinRow < 0)
        	{
        		nWinRow = objOpenFormGds.addRow();
        		objOpenFormGds.setColumn(nWinRow, "winKey", sWinKey);
        // 		objOpenFormGds.setColumn(nWinRow, "mnuId", sMnuId);
        // 		objOpenFormGds.setColumn(nWinRow, "mnuNm", sMnuNm);
        // 		objOpenFormGds.setColumn(nWinRow, "menuUrl", sMenuUrl);
        		objOpenFormGds.setColumn(nWinRow, this.fvApp.objMenu.sMnuIdCol, sMnuId);
        		objOpenFormGds.setColumn(nWinRow, this.fvApp.objMenu.sMnuNmCol, sMnuNm);
        		objOpenFormGds.setColumn(nWinRow, this.fvApp.objMenu.sMenuUrlCol, sMenuUrl);

        		objOpenFormGds.set_rowposition(nWinRow);

        		// 데이타셋 추가후  mdi 버튼 생성
        		this.fnCreateMdiBtn(sWinKey, sMnuNm, sMnuId);

        		// MDI 버튼 클릭시
        		// * 1. separatesize 변경
        		// * 2. 버튼 관련 cssclass 처리
        		// * 3. 해당 childFrame Active 처리
        		this.fnMdiBtnOnclicked(this.divMenuTab.form[this.fvTabBtnPrefix+sWinKey]);

        		if(!this.gfnIsNull(objArgSend) && !this.gfnIsNull(objArgSend.moveRow))
        		{
        			var bSucc = objOpenFormGds.moveRow(nWinRow, objArgSend.moveRow);

        			if(bSucc > -1)
        			{
        				// 버튼 이동처리
        				var sWinKey = "";
        				var sBtnCompNm = "";
        				var objBtnComp;
        				var sBtnExtraCompNm = "";
        				var objBtnExtraComp;
        				var nBtnLeftPos = 0;			// 버튼의 left 값
        				var nBtnWidth = 0;				// 버튼의 width 값
        				var sMnuNm;

        				// 버튼의 위치 조정
        				var nCount = objOpenFormGds.getRowCount();
        				for(i=0; i<nCount; i++)
        				{
        					sWinKey = objOpenFormGds.getColumn(i, "winKey");
        					sBtnCompNm = this.fvTabBtnPrefix + sWinKey;
        					objBtnComp = this.divMenuTab.form.components[sBtnCompNm];
        					sBtnExtraCompNm = this.fvExtraBtnPrefix + sWinKey;
        					objBtnExtraComp = this.divMenuTab.form.components[sBtnExtraCompNm];

        					if(!this.gfnIsNull(objBtnComp))
        					{
        						nBtnLeftPos = this.fnGetLeft(sWinKey);
        						objBtnComp.move(nBtnLeftPos, this.fvTabTop);
        					}

        					if(!this.gfnIsNull(objBtnExtraComp))
        					{
        						objBtnExtraComp.move(nexacro.toNumber(objBtnComp.getOffsetRight()-this.fvTabExtraRightGap), this.fvExtraTop);
        					}
        				}
        				this.divMenuTab.set_formscrollbarsize(0);
        				this.divMenuTab.form.resetScroll();
        			}
        		}
        	}
        };

        /**
         * @desc MDI Button 생성
         * @param {String} sWinKey 새창의 key
         * @param {String} sMnuNm 새창의 메뉴명
         * @param {String} sMnuId 새창의 메뉴ID
        */
        this.fnCreateMdiBtn = function (sWinKey, sMnuNm, sMnuId)
        {
        	var sCompNm = this.fvTabBtnPrefix + sWinKey;

        	var objComp = this.divMenuTab.form.components[sCompNm];

        	var nBtnLeftPos = 0;			// 버튼의 left 값
        	var nBtnWidth = 0;				// 버튼의 width 값

        	if (this.gfnIsNull(objComp))
        	{
        		// 버튼의 left위치 구하기
         		var objOpenFormGds = this.fvApp.gdsOpenMenu;
        		nBtnLeftPos = this.fnGetLeft(sWinKey);

        		sMnuNmOrg = sMnuNm;
        		sMnuNm = this.gfnAllTrim(sMnuNm);

        		// var nXText = nexacro.getTextSize( sMnuNm, '13px "Noto Sans KR,sans-serif,Dotum,Arial"').nx;
        		var nXText = nexacro.getTextSize( sMnuNm, '400 15px "NotoSansKR"').nx;

        		if (nXText>this.fvTabBtnMaxTextSize)
        		{
        			nBtnWidth = this.fvTabBtnMaxTextSize + 48;
        		}
        		else
        		{
        			nBtnWidth = nXText + 48;
        		}

        		// mdi버튼 동적생성.
        		objComp = new nexacro.Button();
        		objComp.init(sCompNm, nBtnLeftPos, this.fvTabTop, nBtnWidth, this.fvTabHeight);

        		this.divMenuTab.form.addChild(sCompNm, objComp);
        		objComp.show();
        		objComp.setEventHandler("onclick", this.fnMdiBtnOnclicked, this);  // mdi버튼 클릭이벤트.....

        		if (nXText>this.fvTabBtnMaxTextSize)
        		{
        			var valLng = this.gfnByteLengthValue(sMnuNm, this.fvTabBtnMaxTextSize);
        			objComp.set_text(sMnuNm.substr(0, valLng)+"..");
        		}
        		else
        		{
        			objComp.set_text(sMnuNm);
        		}
        		objComp.set_tooltiptext(sMnuNmOrg);
        		objComp.set_cssclass(this.fvTabBtnCssclass);
        		objComp.set_accessibilitylabel(sMnuNmOrg);

        		// 드래그&드랍 이벤트 생성
        		objComp.setEventHandler("ondrag", this.divMenuTab_common_ondrag, this);
        		objComp.setEventHandler("ondrop", this.divMenuTab_common_ondrop, this);
        		objComp.setEventHandler("onmouseenter", this.btnMdiButton_onmouseenter, this);  // 버튼 안으로 들어로면 손모양으로 바꾸기.

        		// mdi버튼별 닫기버튼 생성
        		sCompNm = this.fvExtraBtnPrefix + sWinKey;

        		var objClose = new nexacro.Button();
        		objClose.init(sCompNm, nexacro.toNumber(objComp.getOffsetRight())-this.fvTabExtraRightGap, this.fvExtraTop, this.fvExtraWidth, this.fvExtraHeight);
        		this.divMenuTab.form.addChild(sCompNm, objClose);
        		objClose.show();
        		objClose.setEventHandler("onclick", this.fnMdiCloseOnclicked, this);
        		objClose.set_cssclass(this.fvExtraBtnCssclass);
        		objClose.set_accessibilitylabel("닫기");

        		// 드래그&드랍 이벤트 생성
        		objClose.setEventHandler("ondrag", this.divMenuTab_common_ondrag, this);
        		objClose.setEventHandler("ondrop", this.divMenuTab_common_ondrop, this);
        		objClose.setEventHandler("onmouseenter", this.btnMdiButton_onmouseenter, this);  // 버튼 안으로 들어로면 손모양으로 바꾸기.

        		objComp.winKey = sWinKey; 	                             // drag&drop때 쓰려고, 버튼에 winKey를 설정한다.
        		objComp.mnuId = sMnuId;
        		objComp.mnuNm = sMnuNm;
        		objClose.winKey = sWinKey; 	                             // drag&drop때 쓰려고, 버튼에 winKey를 설정한다.
        		objClose.mnuId = sMnuId;
        		objClose.mnuNm = sMnuNm;
        		objClose.btnObj = objComp;
        	}

        	var objSelectMdiBtn = this.fnGetMdiBtnSel();  // 좌,우버튼 클릭시 현재 선택된 mdi버튼을 찾아온다.
        	var nDivDynamicWidth = this.divMenuTab.getOffsetWidth(); // 화면에 표시된 Div 의 너비를 동적으로 계산한다.
        	this.divMenuTab.form.resetScroll();    // set_pos() 해주기 전에 resetScroll해줘야 set_pos()시 스크롤이 맨끝으로 갈 수 있다.

        	if(this.gfnIsNull(objSelectMdiBtn) == false)
        	{
        		// 오른쪽으로 메뉴가 추가될때 이동... 선택한 버튼의 right > 디비전의 동적width
        		if(objSelectMdiBtn.getOffsetRight() > nDivDynamicWidth)
        		{
        			this.divMenuTab.form.hscrollbar.set_pos(this.divMenuTab.form.hscrollbar.max);  // 맨끝
        		}
        	}
        };

        /**
         * @desc MDI 버튼 클릭시
         * 1. separatesize 변경
         * 2. 버튼 관련 cssclass 처리
         * 3. 해당 childFrame Active 처리
         * @param {Object} MDI 버튼 Object
         * @param {ClickEventInfo} e 이벤트
         * @return N/A
        */
        this.fnMdiBtnOnclicked = function (obj, e)
        {
        	// separatesize MDI 로 변경
        	this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1WorkSize);

        	// 버튼의 선택 cssclass 해제처리
        	this.fnClearMdiBtnSel();

        	var sWinKey = String(obj.name).replace(this.fvTabBtnPrefix, "");
        	var objCurCF = this.fvApp.gvFramesetWork.frames[sWinKey];
        	if (!this.gfnIsNull(objCurCF))
        	{
        		var nFindRow = this.fvApp.gdsOpenMenu.findRow("winKey", sWinKey);
        		if (nFindRow>=0)
        		{
        			this.fvApp.gdsOpenMenu.set_rowposition(nFindRow);
        		}

        		if (this.divMenuTab.form.isValidObject(this.fvExtraBtnPrefix + sWinKey))
        		{
        			var objCloseBtn = this.divMenuTab.form[this.fvExtraBtnPrefix+sWinKey];
        			objCloseBtn.set_cssclass(this.fvExtraBtnCssclass+"S");
        		}

        		obj.sel = "Y";
        		obj.set_cssclass(this.fvTabBtnCssclass+"S");

        		objCurCF.setFocus();

        		this.fvMdiBtnClicked = obj; // 현재 선택된 버튼탭 obj.드래그&드랍에서 사용됨.

        		// 해당 버튼 보이게 스크롤 이동처리
        		if (this.gfnIsNull(obj)) return;
        		this.divMenuTab.form.scrollTo(obj.getOffsetLeft(),  0);
        	}
        };

        /**
         * @desc MDI 버튼의 left 좌표값 취득
         * @param  {String} sWinKey 새창의 key
         * @return {Number} left 좌표값
        */
        this.fnGetLeft = function(sWinKey)
        {
        	var nLeft = 0;
        	var nCurRow = this.fvApp.gdsOpenMenu.findRow("winKey", sWinKey);
        	if(nCurRow == 0) return this.fvFirstGap;
        	var sPreWinKey = this.fvApp.gdsOpenMenu.getColumn(nCurRow - 1, "winKey");
        	var objPrevTab = this.divMenuTab.form.components[this.fvTabBtnPrefix + sPreWinKey];
        	if(objPrevTab)
        	{
        		nLeft = objPrevTab.getOffsetRight() + this.fvBtnGap;
        	}
        	return nLeft;
        };

        /**
         * @desc MDI 버튼의 Close 버튼 클릭시
         * @param {Object} MDI Extra (X) 버튼 Object
         * @param {ClickEventInfo} e 이벤트
         * @return N/A
        */
        this.fnMdiCloseOnclicked =  function (obj, e)
        {
            var objFrame = this.fvApp.gvFramesetWork.frames;

        	if(objFrame[obj.winKey])
        	{
        		this.fnMdiBtnOnclicked(obj.btnObj);
        		objFrame[obj.winKey].form.fnWorkFrameClose();
        	}
        	else
        	{
        		return false;
        	}
        };

        /**
         * @desc 현재 선택된 버튼
         * @param N/A
         * @return {object} 선택된 MDI 버튼 object
        */
        this.fnGetMdiBtnSel = function ()
        {
        	var objRtnComp;
        	var objComps = this.divMenuTab.form.components;
        	var nCompCnt = objComps.length;

        	for (var i = (nCompCnt -1); i >= 0; i--)
        	{
        		if (objComps[i].sel == "Y" && String(objComps[i].name).indexOf("btnClose") < 0)
        		{
        			objRtnComp = objComps[i];
        			break;
        		}
        	}
        	return objRtnComp;
        };

        /**
         * @desc 버튼의 선택 cssclass 해제처리
         * @param N/A
         * @return N/A
        */
        this.fnClearMdiBtnSel = function ()
        {
        	var objComps = this.divMenuTab.form.components;
        	var nCompCnt = objComps.length;

        	for (var i = (nCompCnt -1); i >= 0; i--)
        	{
        		if (String(objComps[i].name).indexOf(this.fvExtraBtnPrefix) < 0)
        		{

        			objComps[i].sel = "N";
        			objComps[i].set_cssclass(this.fvTabBtnCssclass);
        			objComps[i].set_taborder(i);
        		}
        		else
        		{
        			objComps[i].set_cssclass(this.fvExtraBtnCssclass);
        		}
        	}
        };

        /**
         * @desc MDI 버튼 제거, open된 화면 close
         * @param {String} sWinKey 대상 MDI의 winKey
         * @return {boolean} true / false
        */
        this.fnRemoveMdiBtn = function (sWinKey)
        {
        	try
        	{
        		// MDI ,MDI_Extra 제거
        		var objComp = this.divMenuTab.form.components[this.fvTabBtnPrefix + sWinKey];
        		if (!this.gfnIsNull(objComp))
        		{
        			this.divMenuTab.form.removeChild(objComp.name);
        		}

        		objComp = this.divMenuTab.form.components[this.fvExtraBtnPrefix + sWinKey];
        		if (!this.gfnIsNull(objComp))
        		{
        			this.divMenuTab.form.removeChild(this.fvExtraBtnPrefix + sWinKey);
        		}

        		// frameWork 존재시 제거
        		var objTgtCF = this.fvApp.gvFramesetWork.frames[sWinKey];
        		if (!this.gfnIsNull(objTgtCF))
        		{
        			objTgtCF.form.close();
        			var objRemoveFrame = this.fvApp.gvFramesetWork.removeChild(sWinKey);
        			if(objRemoveFrame)
        			{
        				objRemoveFrame.destroy();
        				objRemoveFrame = null;
        			}
        		}

        		// gdsOpenMenu 에서 해당 행 제거
        		var objOpenFormGds = this.fvApp.gdsOpenMenu;
        		var nWinRow = objOpenFormGds.findRow("winKey", sWinKey);
        		if (nWinRow >= 0)
        		{
        			objOpenFormGds.deleteRow(nWinRow);
        		}

        		// MDI 존재시 active 처리 없으면 홈 표시
        		if(this.fvApp.gvFramesetWork.frames.length > 0)
        		{
        			this.fnRedrawMdiBtn();
        			if(objOpenFormGds.rowposition > -1)
        			{
        				var sFindWinKey = objOpenFormGds.getColumn(objOpenFormGds.rowposition, "winKey");
        				this.fnMdiBtnOnclicked(this.divMenuTab.form[this.fvTabBtnPrefix+sFindWinKey]);
        			}
        		}
        		else
        		{
        			this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1HomeSize);
        		}
        	}
        	catch (e)
        	{
        		//trace("[fnRemoveMdiBtn]e.message:"+e.message);
        	}
        	trace("[fnRemoveMdiBtn]sWinKey:"+sWinKey+"|========================== end");
        };

        /**
         * @desc MDI 버튼 위치 재정렬
         * @param N/A
         * @return N/A
        */
        this.fnRedrawMdiBtn = function ()
        {
        	var nBtnPos = 0;
        	var sWinKey = "";
        	var nCount = this.fvApp.gdsOpenMenu.getRowCount();
        	for(var i=0; i < nCount; i++)
        	{
        		sWinKey = this.fvApp.gdsOpenMenu.getColumn(i, "winKey");
        		var objComp = this.divMenuTab.form.components[this.fvTabBtnPrefix + sWinKey];
        		var objCloseComp = this.divMenuTab.form.components[this.fvExtraBtnPrefix + sWinKey];
        		objComp.move( nBtnPos, this.fvTabTop);
        		objCloseComp.move( nexacro.toNumber(objComp.getOffsetRight()-this.fvTabExtraRightGap), this.fvExtraTop);
        		nBtnPos = objComp.getOffsetRight() + this.fvBtnGap;

        		// 선택된 화면이 닫힐때 MDI 버튼의 class 가 변경되지 않는 현상 수정
        		if (this.fvApp.gvFramesetWork.getActiveFrame().name == sWinKey)
        		{
        			objComp.set_cssclass(this.fvTabBtnCssclass+"S");
        			objCloseComp.set_cssclass(this.fvExtraBtnCssclass+"S");

        			// 해당 버튼 보이게 스크롤 이동처리
        			if (this.gfnIsNull(objComp)) return;
        			this.divMenuTab.form.scrollTo(objComp.getOffsetLeft(),  0);
        		}
        	}
        };

        /**
         * @desc 메뉴 tab 닫기 실행 함수 , frameMDI > btnAllClose_onclick 에서 호출됨
         * @param {String} sWinKey 대상 MDI의 winKey
         * @return N/A
        */
        this.fnTabOnClose = function(sWinKey)
        {
        	try
        	{
        		// MDI ,MDI_Extra 제거
        		var objComp = this.divMenuTab.form.components[this.fvTabBtnPrefix + sWinKey];
        		if (!this.gfnIsNull(objComp))
        		{
        			this.divMenuTab.form.removeChild(objComp.name);
        		}

        		objComp = this.divMenuTab.form.components[this.fvExtraBtnPrefix + sWinKey];
        		if (!this.gfnIsNull(objComp))
        		{
        			this.divMenuTab.form.removeChild(this.fvExtraBtnPrefix + sWinKey);
        		}

        		// frameWork 의 화면 제거
        		if(!this.gfnIsNull(this.fvApp.gvFramesetWork.frames[sWinKey]))
        		{
        			var objRemoveFrame = this.fvApp.gvFramesetWork.removeChild(sWinKey);

        			if(objRemoveFrame != null)
        			{
        				objRemoveFrame.destroy();
        				objRemoveFrame = null;
        			}
        		}

        		// gdsOpenMenu 에서 해당 행 제거
        		var objOpenFormGds = this.fvApp.gdsOpenMenu;
        		var nWinRow = objOpenFormGds.findRow("winKey", sWinKey);
        		if (nWinRow >= 0)
        		{
        			objOpenFormGds.deleteRow(nWinRow);
        		}
        	}
        	catch (e)
        	{
        		trace("[fnTabOnClose]e.message:"+e.message);
        	}
        };

        /**
         * @desc 메뉴 열기 / 닫기 처리
         * @param N/A
         * @return N/A
        */
        this.fnShowHideFold = function()
        {
        	if(this.fvApp.Frame.sLeftFrameAction == "FOLD")
        	{
        		this.fvApp.Frame.sLeftFrameAction = "SHOW";
        		this.fvApp.gvHFrameSet.set_separatesize(this.fvApp.Frame.sSeparateLShow);
        		this.fvApp.gvFrameLeft.form.divFrameLeftFold.set_visible(false);
        		this.fvApp.gvFrameLeft.form.divFrameLeftShow.set_visible(true);
        		this.fvApp.gvFrameLeft.form.resetScroll();
        		this.btnShowFold.set_cssclass("btn_LF_Hidden");
        		this.btnShowFold.set_accessibilitylabel("SHOW");
        	}
        	else
        	{
        		this.fvApp.Frame.sLeftFrameAction = "FOLD";
        		this.fvApp.gvHFrameSet.set_separatesize(this.fvApp.Frame.sSeparateLFold);
        		this.fvApp.gvFrameLeft.form.divFrameLeftFold.set_visible(true);
        		this.fvApp.gvFrameLeft.form.divFrameLeftShow.set_visible(false);
        		this.fvApp.gvFrameLeft.form.resetScroll();
        		this.btnShowFold.set_cssclass("btn_LF_Show");
        		this.btnShowFold.set_accessibilitylabel("FOLD");
        	}
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description frameLeft Show / Fold
        */
        this.btnShowFold_onclick = function(obj,e)
        {
        	/*
        	if(this.fvApp.Frame.sLeftFrameAction == "FOLD")
        	{
        		this.fvApp.Frame.sLeftFrameAction = "SHOW";
        		this.fvApp.gvHFrameSet.set_separatesize(this.fvApp.Frame.sSeparateLShow);
        		this.fvApp.gvFrameLeft.form.divFrameLeftFold.set_visible(false);
        		this.fvApp.gvFrameLeft.form.divFrameLeftShow.set_visible(true);
        	}
        	else
        	{
        		this.fvApp.Frame.sLeftFrameAction = "FOLD";
        		this.fvApp.gvHFrameSet.set_separatesize(this.fvApp.Frame.sSeparateLFold);
        		this.fvApp.gvFrameLeft.form.divFrameLeftFold.set_visible(true);
        		this.fvApp.gvFrameLeft.form.divFrameLeftShow.set_visible(false);
        	}
        	*/
        	this.fnShowHideFold();
        };

        /**
         * @description MDI , MDI extra 의 드래그 이벤트
        */
        this.divMenuTab_common_ondrag = function(obj,e)
        {
        	this.fvMdiBtnClicked = obj;
        	// 드래그값 폼변수에 셋팅.
        	this.fvFindRowDrag = this.fvApp.gdsOpenMenu.findRow("winKey", obj.winKey);
        	this.fvWinKeyDrag = obj.winKey;
        trace("[divMenuTab_common_ondrag]this.fvFindRowDrag:"+this.fvFindRowDrag+"|this.fvWinKeyDrag:"+this.fvWinKeyDrag);
        	obj.set_cursor("move");   // 십자 화살표 모양의 포인터가 표시됩니다
        	e.set_userdata("MDI_TAB_DRAG");

        	return true;  // 이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다. (생략시 default : false)
        };

        /**
         * @description MDI , MDI extra 의 드롭 이벤트
        */
        this.divMenuTab_common_ondrop = function(obj,e)
        {
        	var i;
        	this.fvMdiBtnClicked.set_cursor("pointer");  // 손모양-젤 위에 잇어야한다.

        	var objOpenFormGds = this.fvApp.gdsOpenMenu;
        	this.fvFindRowDrop = objOpenFormGds.findRow("winKey", obj.winKey);
        trace("[divMenuTab_common_ondrag]this.fvFindRowDrop:"+this.fvFindRowDrop);
        	// 자기자리에서 드래그&드랍하면 처리안되게한다.
        	if(this.fvFindRowDrag == this.fvFindRowDrop)
        	{
        		return;
        	}

        	// 두 줄을 바꾸고, 바꾼 row의 left를 다시 셋팅해야한다.
        	// var bSucc = objOpenFormGds.exchangeRow(this.fvFindRowDrag, this.fvFindRowDrop);
        	// 드래그한 Row 을 드롭한 Row 의 위치로 이동시킨다. 나머지는 뒤로 1줄씩 밀리게 됨.
        	var bSucc = objOpenFormGds.moveRow(this.fvFindRowDrag, this.fvFindRowDrop);

        	var sWinKey = "";
        	var sBtnCompNm = "";
        	var objBtnComp;
        	var sBtnExtraCompNm = "";
        	var objBtnExtraComp;

        	var nBtnLeftPos = 0;			// 버튼의 left 값
        	var nBtnWidth = 0;				// 버튼의 width 값
        	var sMnuNm;

        	// 버튼의 위치 조정
        	var nCount = objOpenFormGds.getRowCount();
        	for(i=0; i<nCount; i++)
        	{
        		sWinKey = objOpenFormGds.getColumn(i, "winKey");
        		sBtnCompNm = this.fvTabBtnPrefix + sWinKey;
        		objBtnComp = this.divMenuTab.form.components[sBtnCompNm];
        		sBtnExtraCompNm = this.fvExtraBtnPrefix + sWinKey;
        		objBtnExtraComp = this.divMenuTab.form.components[sBtnExtraCompNm];

        		if(!this.gfnIsNull(objBtnComp))
        		{
        			nBtnLeftPos = this.fnGetLeft(sWinKey);
        			objBtnComp.move(nBtnLeftPos, this.fvTabTop);
        		}

        		if(!this.gfnIsNull(objBtnExtraComp))
        		{
        			objBtnExtraComp.move(nexacro.toNumber(objBtnComp.getOffsetRight()-this.fvTabExtraRightGap), this.fvExtraTop);
        		}
        	}

        	this.divMenuTab.set_formscrollbarsize(0);
        	this.divMenuTab.form.resetScroll();

        	// drop시 클릭한 버튼에 클릭한 효과를 주기 위해서 처리함.
        	var sTempWinKey = String(this.fvMdiBtnClicked.name).replace("btn_", "");
        	this.fnMdiBtnOnclicked(this.divMenuTab.form[this.fvTabBtnPrefix+sTempWinKey]);
        };

        /**
         * @description MDI Tab Div 이전 이동
        */
        this.btnMdiButton_onmouseenter = function(obj,e)
        {
        	this.fvMdiBtnClicked.set_cursor("pointer");  // 손모양
        };

        /**
         * @description MDI Tab Div 이전 이동
        */
        this.btnPrev_onclick = function(obj,e)
        {
        	var objComp = this.fnGetMdiBtnSel();
        	if (this.gfnIsNull(objComp)) return;

        	// 스크롤 이동
        	var nBtnHalfWidth = objComp.width/2;
        	this.divMenuTab.form.scrollBy( -nBtnHalfWidth,  0);
        };

        /**
         * @description MDI Tab Div 다음 이동
        */
        this.btnNext_onclick = function(obj,e)
        {
        	var objComp = this.fnGetMdiBtnSel();
        	if (this.gfnIsNull(objComp)) return;

        	// 스크롤 이동
        	var nBtnHalfWidth = objComp.width/2;
        	this.divMenuTab.form.scrollBy( nBtnHalfWidth,  0);
        };

        /**
         * @description 열린화면 목록
        */
        this.btnOpenList_onclick = function(obj,e)
        {
        	var btnNm = String(obj.id);
        	var objOpenFormGds = this.fvApp.gdsOpenMenu;

        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.fvApp.gvFramesetWork.frames.length;
        	if (this.fvApp.gdsOpenMenu.getRowCount() < 1) return;

        	var nXPos = this.btnOpenList.getOffsetWidth() - this.pdvOpenMenu.getOffsetWidth();//-148;//-93;
        	trace("nXPos:"+nXPos);
        // 	if(this.fvApp.Frame.sLeftRightFrameAction=="FOLD")
        // 	{
        // 		nXPos = nXPos -73;
        // 	}
        // 	// this.btnOpenList.set_cssclass("btn_MDI_ListClose");
        //
        // 	// var nLeft = this.fvApp.gvMainframe.width - this.pdvOpenMenu.width;
        	this.pdvOpenMenu.trackPopupByComponent(this.btnOpenList, nXPos, nexacro.toNumber(this.btnOpenList.getOffsetBottom() + 1 ));
        };

        /**
         * @description 전체 닫기
        */
        this.btnAllClose_onclick = function(obj,e)
        {
        	var i;
        	var bIsCloseCheck =  true;
        	// workFrame영역에 open된 childFrame 갯수
        	var nFramesCnt = this.fvApp.gvFramesetWork.frames.length;
        	for(i=nFramesCnt-1; i>=0; i--)
        	{
        		if(!this.gfnIsNull(this.fvApp.gvFramesetWork.frames[i].form) && !this.gfnIsNull(this.fvApp.gvFramesetWork.frames[i].form.divWork.form))
        		{
        			if(this.gfnIsNull(this.fvApp.gvFramesetWork.frames[i].form.divWork.form.lookupFunc("fnClose")))
        			{
        				//trace("fnClose 함수가 없습니다.");
        			}
        			else
        			{
        				if(this.fvApp.gvFramesetWork.frames[i].form.divWork.form.fnClose() == true)
        				{
        					bIsCloseCheck =  false;
        					break;
        				}
        			}
        		}
        	}

        	// bIsCloseCheck : true - fnClose 가 없거나, 변경된 데이터가 없는 경우
        	// bIsCloseCheck : false - fnClose 가 있으면서, 변경된 데이터가 있는 폼이 하나라도 있을 경우
        	if(bIsCloseCheck)
        	{
        		for(i=nFramesCnt; i>0; i--)
        		{
        			if(!this.gfnIsNull(this.fvApp.gvFramesetWork.frames[i-1]))
        			{
        				this.fvApp.gvFramesetWork.frames[i-1].form.fnWorkFrameClose();
        			}
        		}
        	}
        	else
        	{
        		this.gfnShowMessage(this, ["confirm","변경된 내용이 있습니다.\n계속 진행하시겠습니까?"], "", function(svcid, variant) {
        			if (variant == "OK")
        			{
        				for(i=nFramesCnt; i>0; i--)
        				{
        					this.fnTabOnClose(this.fvApp.gvFramesetWork.frames[i-1].name);
        				}
        				this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1HomeSize);
        			}
        		});
        	}

        };

        // 열린화면 목록 popupDiv 닫힐 때
        /**
         * @description 설명
        */
        this.pdvOpenMenu_oncloseup = function(obj,e)
        {

        };

        // 열린화면 목록 popupDiv > Grid Cell 클릭
        /**
         * @description 설명
        */
        this.pdvOpenMenu_grdOpenList_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var nRow = obj.getDatasetRow(e.row);

        	if(e.cell ==0)
        	{
        		var sWinKey = objDs.getColumn(nRow, "winKey");
        		if(this.gfnIsNull(sWinKey)) return;

        		// MDI 버튼 선택처리
        		this.fnMdiBtnOnclicked(this.divMenuTab.form[this.fvTabBtnPrefix+sWinKey]);
        		// 해당 버튼 보이게 스크롤 이동처리
        		var objComp = this.fnGetMdiBtnSel();
        		if (this.gfnIsNull(objComp)) return;
        		this.divMenuTab.form.scrollTo(objComp.getOffsetLeft(),  0);

        		this.pdvOpenMenu.closePopup();
        	}
        	else if(e.cell ==1)
        	{
        		var sWinId = objDs.getColumn(nRow, "winKey");
         		var objCurCF = this.fvApp.gvFramesetWork.frames[sWinId];
        		//trace("sWinId : " + sWinId + ", objCurCF : " + objCurCF);
         		if (!this.gfnIsNull(objCurCF))
        		{
        			objCurCF.form.fnWorkFrameClose();
        		}

        		if (this.fvApp.gdsOpenMenu.rowcount <=0)
        		{
        			this.pdvOpenMenu.closePopup();
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOpenList.addEventHandler("onclick",this.btnOpenList_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.btnAllClose.addEventHandler("onclick",this.btnAllClose_onclick,this);
            this.btnShowFold.addEventHandler("onclick",this.btnShowFold_onclick,this);
            this.pdvOpenMenu.form.grdOpenList.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenList_oncellclick,this);
        };
        this.loadIncludeScript("frameMDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
