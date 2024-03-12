(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLeft");
            this.set_titletext("frameLeft");
            if (Form == this.constructor)
            {
                this._setFormPosition(294,923);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"32\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"32\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenuAll", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"32\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divFrameLeftShow","5","5","289",null,null,"5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_LF_Bg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcLogoBg","0","0",null,"72","0",null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_TF_LogoBg");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Div("divMenu","80","58","209",null,null,"0",null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_LF_MenuBg");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Grid("grdMenu","-19","13",null,null,"0","10",null,null,null,null,this.divFrameLeftShow.form.divMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsLeftMenu");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj.set_selecttype("row");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_scrollbarsize("13");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_treeinitstatus("expand,all");
            obj.getSetter("griduserproperty").set("none");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menuLvl\" cssclass=\"expr:comp.getTreeStatus(comp.getTreeRow(currow))==&apos;3&apos;?(lastLeafYN==&apos;Y&apos;?&apos;Cell_MergeBottom&apos;:&apos;Cell_Tree_Item&apos;):(comp.getTreeStatus(comp.getTreeRow(currow))==&apos;0&apos;?&apos;Cell_Tree_Open&apos;:&apos;Cell_Tree_Close&apos;)\" tooltiptext=\"bind:menuNm\" treestartlevel=\"2\" accessibilitylabel=\"bind:menuNm\"/></Band></Format></Formats>");
            this.divFrameLeftShow.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu01","0","72","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("1");
            obj.set_text("협정·약정관리");
            obj.set_cssclass("btn_LF_Menu01");
            obj.set_accessibilitylabel("협정·약정관리");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu02","0","btnMenu01:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("2");
            obj.set_text("협의체 관리");
            obj.set_cssclass("btn_LF_Menu02");
            obj.set_accessibilitylabel("협의체 관리");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu03","0","btnMenu02:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("3");
            obj.set_text("방법론 관리");
            obj.set_cssclass("btn_LF_Menu03");
            obj.set_accessibilitylabel("방법론 관리");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu04","0","btnMenu03:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("4");
            obj.set_text("사업 관리");
            obj.set_cssclass("btn_LF_Menu04");
            obj.set_accessibilitylabel("사업 관리");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu05","0","btnMenu04:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("5");
            obj.set_text("실적 관리");
            obj.set_cssclass("btn_LF_Menu05");
            obj.set_accessibilitylabel("실적 관리");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu06","0","btnMenu05:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("6");
            obj.set_text("사업수행자\r\n관리");
            obj.set_cssclass("btn_LF_Menu06");
            obj.set_accessibilitylabel("사업수행자");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu07","0","btnMenu06:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("7");
            obj.set_text("통계");
            obj.set_cssclass("btn_LF_Menu07");
            obj.set_accessibilitylabel("통계");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu08","0","btnMenu07:0","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("8");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_LF_Menu08");
            obj.set_accessibilitylabel("정보공개");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Static("stcLogo","15","17","218","25",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Logo");
            obj.set_accessibilitylabel("logo");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Button("btnMenu09","0","btnMenu08:5","80","84",null,null,null,null,null,null,this.divFrameLeftShow.form);
            obj.set_taborder("9");
            obj.set_text("비메뉴공통");
            obj.set_cssclass("btn_LF_Menu01");
            obj.set_visible("false");
            obj.set_accessibilitylabel("비메뉴공통");
            this.divFrameLeftShow.addChild(obj.name, obj);

            obj = new Div("divFrameLeftFold","875","0","71",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_LF_QuickBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","5",null,null,"0","5",null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_LF_Bg");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu01","5","72","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Menu01");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("협정·약정관리");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu02","5","btnMenu01:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Menu02");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("협의체 관리");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu03","5","btnMenu02:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Menu03");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("방법론 관리");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu04","5","btnMenu03:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Menu04");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("사업 관리");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu05","5","btnMenu04:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_Menu05");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("실적 관리");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu06","5","btnMenu05:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_Menu06");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("사업수행자");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu07","5","btnMenu06:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Menu07");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("통계");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu08","5","btnMenu07:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_LF_Menu08");
            obj.set_textPadding("0px 0px 0px 0px");
            obj.set_accessibilitylabel("정보공개");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Static("stcLogoBg","6","5",null,"72","0",null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_TF_LogoBg");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Static("stcLogo","15","20","56","25",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_Logo");
            obj.set_accessibilitylabel("logo");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new Button("btnMenu09","5","btnMenu08:0","66","70",null,null,null,null,null,null,this.divFrameLeftFold.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_LF_Menu01");
            obj.set_visible("false");
            obj.set_accessibilitylabel("비메뉴공통");
            this.divFrameLeftFold.addChild(obj.name, obj);

            obj = new PopupDiv("pdvTooltip","956","99","133","30",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_LF_Tooltip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTooltip","3","0","130","30",null,null,null,null,null,null,this.pdvTooltip.form);
            obj.set_taborder("0");
            obj.set_text("협정·약정관리");
            obj.set_cssclass("sta_LF_Tooltip");
            obj.set_fittocontents("width");
            this.pdvTooltip.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFrameLeftShow.form.divMenu.form
            obj = new Layout("default","",0,0,this.divFrameLeftShow.form.divMenu.form,function(p){});
            this.divFrameLeftShow.form.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrameLeftShow.form
            obj = new Layout("default","",0,0,this.divFrameLeftShow.form,function(p){});
            this.divFrameLeftShow.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrameLeftFold.form
            obj = new Layout("default","",0,0,this.divFrameLeftFold.form,function(p){});
            this.divFrameLeftFold.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvTooltip.form
            obj = new Layout("default","",0,0,this.pdvTooltip.form,function(p){});
            this.pdvTooltip.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",294,923,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLeft.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameLeft Form
        * FILE NAME     : frameLeft.xfdl
        * DESCRIPTION   : frameLeft
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
        // 협정.약정관리 , 국제감축협의체관리 , 방법론관리 , 사업관리 , 실적관리 , 사업수행자관리 , 통계 , 정보공개관리 , 비메뉴공통
        // this.fvTopMnuId = ["agrstipl","cnsltngrp","mhdlg","biz","prfmnc","user","stats","inforls","EXAM"];		// 메뉴버튼별 TopMnuId
        this.fvTopMnuId = ["MN01000000","MN02000000","MN03000000","MN04000000","MN05000000","MN06000000","MN07000000","MN08000000","EXAM"];		// 메뉴버튼별 TopMnuId
        this.fvExpandCurr = false;	// 해당 Row 만 접기/펼치기 기능여부
        this.fvTopMnuTooltip = ["협정·약정관리","협의체 관리","방법론 관리","사업 관리","실적 관리","사업수행자 관리","통계","정보공개","비메뉴 공통"];

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.divFrameLeftFold.set_left(0);
        	this.divFrameLeftShow.set_left(5);
        	this.resetScroll();

        	// 로컬, 개발에서만 '비메뉴공통' 보이게 처리
        	if ( this.fvApp.gvSvrType == "LOCAL" || this.fvApp.gvSvrType == "DEV" )
        	{
        		this.divFrameLeftShow.form.btnMenu09.set_visible(true);
        		this.divFrameLeftFold.form.btnMenu09.set_visible(true);
        	}
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

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */
        this.form_onkeyup = function(obj,e)
        {
        	this._gfnOnkeyup(obj, e);
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
        	trace("[frameLeft]fnLoginAfter =====================");

        	// 전체 메뉴 데이타셋 copy
        	this.fnMenuListCopy();

        	// 특정메뉴 선택처리
        	this.divFrameLeftShow_btnMenu_onclick(this.divFrameLeftShow.form.btnMenu01);
        };


        /**
         * @desc 전체 메뉴 데이타셋 copy
         * @param N/A
         * @return N/A
        */
        this.fnMenuListCopy = function()
        {
        	var sFilterStr = this.fvApp.objMenu.sMenuLevelCol+"> 1 && useYn != 'N' && "+this.fvApp.objMenu.sPopupYn+" != 'Y'";
        	this.fvApp.gdsMenu.filter(sFilterStr);		// gdsMenu > mnuLvlVal
        	this.dsLeftMenuAll.copyData(this.fvApp.gdsMenu, true);
        	this.fvApp.gdsMenu.filter("");

        	var nRowCnt = this.dsMenuList.assign(this.fvApp.gdsMenu);

        	// 메뉴 leaf 체크
        	this.dsLeftMenuAll.addColumn("lastLeafYN", "STRING", 255);
        	var i;
        	var nRowcnt = this.dsLeftMenuAll.getRowCount();
        	var sPreTopMenuId;
        	var sCurrTopMenuId;
        	var sPreUpMnuId;
        	var sCurrUpMnuId;
        	var bCheck = false;
        	for(i=nRowcnt-1;i>=0;i--)
        	{
        		sCurrTopMenuId = this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sTopMnuId);
        		sCurrUpMnuId = this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sUpMnuId);
        		if(sPreTopMenuId != sCurrTopMenuId)
        		{
        			if(!this.gfnIsNull(this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sMenuUrlCol)))
        			{
        				this.dsLeftMenuAll.setColumn(i, "lastLeafYN", "Y");
        				bCheck = true;
        			}
        			sPreTopMenuId = sCurrTopMenuId;
        			sPreUpMnuId = sCurrUpMnuId;
        		}
        		else
        		{
        			if(sPreUpMnuId != sCurrUpMnuId)
        			{
        				bCheck = false;
        				if(!this.gfnIsNull(this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sMenuUrlCol)))
        				{
        					this.dsLeftMenuAll.setColumn(i, "lastLeafYN", "Y");
        				}
        			}
        			else
        			{
        				if(!this.gfnIsNull(this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sMenuUrlCol))
        				&& this.dsLeftMenuAll.getColumn(i, this.fvApp.objMenu.sMenuLevelCol) < 3 && !bCheck)
        				{
        					this.dsLeftMenuAll.setColumn(i, "lastLeafYN", "Y");
        					bCheck = true;
        				}
        			}
        			sPreTopMenuId = sCurrTopMenuId;
        			sPreUpMnuId = sCurrUpMnuId;
        		}
        	}

        	// 메뉴버튼 제어
        	// 하위메뉴가 없는 1레벨 메뉴버튼은 숨김처리
        	for(i=0;i<this.fvTopMnuId.length;i++)
        	{
        		sFilterStr = this.fvApp.objMenu.sTopMnuId + "== '" + this.fvTopMnuId[i] + "' && useYn != 'N' && "+this.fvApp.objMenu.sPopupYn+" != 'Y'";
        		this.dsLeftMenuAll.filter(sFilterStr);
        		if(this.dsLeftMenuAll.getRowCount() < 1)
        		{
        			this.divFrameLeftShow.form["btnMenu"+(i+1).toString().padLeft(2, "0")].set_height(0);
        			this.divFrameLeftFold.form["btnMenu"+(i+1).toString().padLeft(2, "0")].set_height(0);
        		}
        	}
        	this.divFrameLeftShow.form.resetScroll();
        	this.divFrameLeftFold.form.resetScroll();
        };

        /**
         * @desc 하나의 노드만 Expand 처리하는 함수
         * @param {Object} obj 	Expand 처리할 Grid
         * @param {number} nRow	Expand 처리할 Dataset Row
         * @return N/A
        */
        this.fnTreeExpandOnlyOne = function(obj, nRow)
        {
        	var objDs = obj.getBindDataset();
        	var nCnt = objDs.rowcount;
        	var bStatus;
        	var nRow;
        	var nFindRow;
        	var nTreeRow;
        	var arrScope = [];

        	// 해당 Dataset Row를 Array에 저장
        	arrScope[arrScope.length] = nRow;

        	nFindRow = nRow;

        	// Expand 동작이 발생한 Row의 Parent Row들을 찾아서 arrScope에 저장
        	while(1)
        	{
        		nFindRow = obj.getTreeParentRow(nFindRow, true);

        		// 최상위까지 찾았을 경우 break
        		if(nFindRow==-1)break;

        		// 해당 Dataset Row를 Array에 저장
        		arrScope[arrScope.length] = nFindRow;
        	}

        	// 현재 Expand하고자 하는 Row를 제외한 영역에 Expand된 Row가 있는 지 찾아서
        	// Collapse 시키기
        	obj.set_enableredraw(false);
        	obj.set_enableevent(false);
        	for(var i=0;i<nCnt;i++)
        	{
        		// Dataset Row를 Tree Row로 바꾸기
        		nTreeRow = obj.getTreeRow(i);

        		// Tree에 표현되지 않는 Row일 경우 continue
        		if(nTreeRow==-1) continue;

        		// TreeState 가져오기
        		bStatus = obj.getTreeStatus(nTreeRow);

        		if(arrScope.indexOf(i)>-1)
        		{
        			// TreeState를 Expand로 바꾸기
        			if(bStatus==0) obj.setTreeStatus(nTreeRow, true);
        		}else
        		{
        			// TreeState를 Collapse로 바꾸기
        			if(bStatus==1) obj.setTreeStatus(nTreeRow, false);
        		}
        	}
        	obj.set_enableevent(true);
        	obj.set_enableredraw(true);
        	objDs.set_rowposition(nRow);
        };

        /**
         * @desc 메뉴버튼의 cssclass 제어
         * @param {Object} objBtn	선택버튼 object
         * @return N/A
        */
        this.fnMenuBtnCssclassSet = function(objBtn)
        {
        	var i;
        	for(i=0;i<this.divFrameLeftShow.form.components.length;i++)
        	{
        		if(this.divFrameLeftShow.form.components[i] instanceof nexacro.Button)
        		{
        			this.divFrameLeftShow.form.components[i].set_cssclass(this.divFrameLeftShow.form.components[i].cssclass.replace("S",""));
        		}
        	}
        	for(i=0;i<this.divFrameLeftFold.form.components.length;i++)
        	{
        		if(this.divFrameLeftFold.form.components[i] instanceof nexacro.Button)
        		{
        			this.divFrameLeftFold.form.components[i].set_cssclass(this.divFrameLeftFold.form.components[i].cssclass.replace("S",""));
        		}
        	}

        	if(!this.gfnIsNull(this.divFrameLeftShow.form[objBtn.id]))
        	{
        		this.divFrameLeftShow.form[objBtn.id].set_cssclass(this.divFrameLeftShow.form[objBtn.id].cssclass + "S");
        	}
        	if(!this.gfnIsNull(this.divFrameLeftFold.form[objBtn.id]))
        	{
        		this.divFrameLeftFold.form[objBtn.id].set_cssclass(this.divFrameLeftFold.form[objBtn.id].cssclass + "S");
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 전체메뉴 > 메뉴 클릭시
        */
        // this.divFrameLeftShow_grdMenu_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        this.divFrameLeftShow_divMenu_grdMenu_oncellclick = function(obj,e)
        {
        	// 해당 Row 만 접기/펼치기
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nTreeRow = obj.getTreeRow(e.row);
        	// true 는 false 로 false 는 true 로 변경(0:접은상태,1:펼친상태,3:단말)
        	var nStat = obj.getTreeStatus(nTreeRow)^1; //(0=>1, 1=>0, 3=>2)
        	if(nStat != 2)	// 단말(Leaf) Row가 아니면
        	{
        		this.fvExpandCurr = true;
        		obj.setTreeStatus(nTreeRow ,nStat);
        		return;
        	}

        	var dsObj = obj.getBindDataset();

        	if (e.cell==0)
        	{
        		// 업무화면을 연다. 선택한 로우, 넘길 아규먼트(배열), 구분값
        		var sMnuId  = dsObj.getColumn(e.row, this.fvApp.objMenu.sMnuIdCol);
        		// this.gfnCallOpenMenu(sMnuId, "", "LEFT");
        		this.gfnCallOpenMenu(sMnuId, "");
        	}


        	/*
        	// 해당 노드만 펼치고, 나머지는 접기처리
        	var nTreeRow = obj.getTreeRow(e.row);
        	var stat = obj.getTreeStatus(nTreeRow)^1;	// (0:접은상태,1:펼친상태,3:단말) , ^1 : (0=>1, 1=>0, 3=>2)
        	trace("[divFrameLeftShow_grdMenu_oncellclick]e.clickitem:"+e.clickitem+"|nTreeRow:"+nTreeRow+"|obj.getTreeStatus(nTreeRow):"+obj.getTreeStatus(nTreeRow)+"|stat:"+stat);
        	if(e.clickitem != "treeitembutton")
        	{
        		if(stat == 2)
        		{
        			// 업무화면을 연다. 선택한 로우, 넘길 아규먼트(배열), 구분값
        			var dsObj = obj.getBindDataset();
        			var sMnuId  = dsObj.getColumn(e.row, this.fvApp.objMenu.sMnuIdCol);
        			// this.gfnCallOpenMenu(sMnuId, "", "LEFT");
        			this.gfnCallOpenMenu(sMnuId, "");
        		}
        		else if(stat == 0)
        		{
        			this.fvExpandCurr = false;
        			obj.setTreeStatus(nTreeRow, stat);
        		}
        		else
        		{
        			this.fnTreeExpandOnlyOne(obj, e.row);
        		}
        	}
        	*/
        };

        /**
         * @description 전체메뉴 > Grid 의 트리 Cell 에서 트리 상태가 변경된 후
        */
        this.divFrameLeftShow_divMenu_grdMenu_ontreestatuschanged = function(obj,e)
        {
        	if(e.reason == 1 && !this.fvExpandCurr)
        	{
        		this.fnTreeExpandOnlyOne(obj, e.realrow);
        	}
        };

        /**
         * @description 숨김메뉴 > 메뉴버튼 클릭시
        */
        this.divFrameLeftFold_btnMenu_onclick = function(obj,e)
        {
        	this.fvApp.gvFrameMDI.form.fnShowHideFold();

        	this.fnMenuBtnCssclassSet(obj);

        	var nMenuNo;
        	var sMenuId;
        	if(this.gfnIsNull(obj))
        	{
        		sMenuId = this.fvTopMnuId[0];
        	}
        	else
        	{
        		nMenuNo = obj.id.replace("btnMenu","");
        		nMenuNo = nexacro.toNumber(nMenuNo,1);
        		sMenuId = this.fvTopMnuId[nMenuNo-1];
        	}

        	var sFilterStr = this.fvApp.objMenu.sTopMnuId + "== '" + sMenuId + "' && useYn != 'N' && "+this.fvApp.objMenu.sPopupYn+" != 'Y'";
        	this.dsLeftMenuAll.filter(sFilterStr);		// gdsMenu > mnuLvlVal
        	this.dsLeftMenu.copyData(this.dsLeftMenuAll, true);
        	this.dsLeftMenu.set_rowposition(-1);
        	this.dsLeftMenuAll.filter("");
        };

        /**
         * @description 펼침메뉴 > 메뉴버튼 클릭시
        */
        this.divFrameLeftShow_btnMenu_onclick = function(obj,e)
        {
        	this.fnMenuBtnCssclassSet(obj);

        	var nMenuNo;
        	var sMenuId;
        	if(this.gfnIsNull(obj))
        	{
        		sMenuId = this.fvTopMnuId[0];
        	}
        	else
        	{
        		nMenuNo = obj.id.replace("btnMenu","");
        		nMenuNo = nexacro.toNumber(nMenuNo,1);
        		sMenuId = this.fvTopMnuId[nMenuNo-1];
        	}

        	var sFilterStr = this.fvApp.objMenu.sTopMnuId + "== '" + sMenuId + "' && useYn != 'N' && "+this.fvApp.objMenu.sPopupYn+" != 'Y'";
        	this.dsLeftMenuAll.filter(sFilterStr);		// gdsMenu > mnuLvlVal

        	this.divFrameLeftShow.form.divMenu.form.grdMenu.set_enableredraw(false);
        	this.dsLeftMenu.copyData(this.dsLeftMenuAll, true);
        	this.dsLeftMenu.set_rowposition(-1);
        	this.divFrameLeftShow.form.divMenu.form.grdMenu.set_enableredraw(true);
        	this.dsLeftMenuAll.filter("");
        };

        /**
         * @description 버튼 tooltip 보이기 스크립트 처리
        */
        this.divFrameLeftFold_btnMenu_onmouseenter = function(obj,e)
        {
        	var nXPos;
        	var nYPos;
        	var nWidth;
        	var nHeight;
        	var nMenuNo;
        	var sMenuTooltip;
        	var nTmpWidth;

        	nMenuNo = obj.id.replace("btnMenu","");
        	nMenuNo = nexacro.toNumber(nMenuNo,1);
        	sMenuTooltip = this.fvTopMnuTooltip[nMenuNo-1];

        	if(this.pdvTooltip.isPopup())
        	{
        		if(e.fromobject != obj)
        		{
        			this.pdvTooltip.closePopup();
        			nXPos = obj.getOffsetWidth()-15;
        			nYPos = nexacro.toNumber(obj.getOffsetHeight()/2-15);
        			this.pdvTooltip.form.staTooltip.set_fittocontents("width");
        			this.pdvTooltip.form.staTooltip.set_text(sMenuTooltip);
        			this.pdvTooltip.form.resetScroll();
        			nTmpWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth()+3;
        			this.pdvTooltip.form.staTooltip.set_fittocontents("none");
        			this.pdvTooltip.form.staTooltip.set_width(nTmpWidth);
        			nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth()+5;
        			nHeight = this.pdvTooltip.form.staTooltip.getOffsetHeight();
        			this.pdvTooltip.trackPopupByComponent(obj, nXPos, nYPos, nWidth, nHeight, "", false);
        		}
        	}
        	else
        	{
        		nXPos = obj.getOffsetWidth()-15;
        		nYPos = nexacro.toNumber(obj.getOffsetHeight()/2-15);
        		this.pdvTooltip.form.staTooltip.set_fittocontents("width");
        		this.pdvTooltip.form.staTooltip.set_text(sMenuTooltip);
        		this.pdvTooltip.form.resetScroll();
        		nTmpWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth()+3;
        		this.pdvTooltip.form.staTooltip.set_fittocontents("none");
        		this.pdvTooltip.form.staTooltip.set_width(nTmpWidth);
        		nWidth = this.pdvTooltip.form.staTooltip.getOffsetWidth()+5;
        		nHeight = this.pdvTooltip.form.staTooltip.getOffsetHeight();
        		this.pdvTooltip.trackPopupByComponent(obj, nXPos, nYPos, nWidth, nHeight, "", false);
        	}
        };

        /**
         * @description 버튼 tooltip 숨기기 스크립트 처리
        */
        this.divFrameLeftFold_btnMenu_onmouseleave = function(obj,e)
        {
        	this.pdvTooltip.closePopup();
        };

        /**
         * @description 로고 클릭시 홈 노출
        */
        this.divFrameLeftShow_stcLogo_onclick = function(obj,e)
        {
        	this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1HomeSize);
        };

        /**
         * @description 로고 클릭시 홈 노출
        */
        this.divFrameLeftFold_stcLogo_onclick = function(obj,e)
        {
        	this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1HomeSize);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divFrameLeftShow.form.divMenu.form.grdMenu.addEventHandler("oncellclick",this.divFrameLeftShow_divMenu_grdMenu_oncellclick,this);
            this.divFrameLeftShow.form.divMenu.form.grdMenu.addEventHandler("ontreestatuschanged",this.divFrameLeftShow_divMenu_grdMenu_ontreestatuschanged,this);
            this.divFrameLeftShow.form.btnMenu01.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu02.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu03.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu04.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu05.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu06.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu07.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.btnMenu08.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftShow.form.stcLogo.addEventHandler("onclick",this.divFrameLeftShow_stcLogo_onclick,this);
            this.divFrameLeftShow.form.btnMenu09.addEventHandler("onclick",this.divFrameLeftShow_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu01.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu01.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu01.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu02.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu02.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu02.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu03.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu03.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu03.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu04.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu04.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu04.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu05.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu05.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu05.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu06.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu06.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu06.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu07.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu07.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu07.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.btnMenu08.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu08.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu08.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
            this.divFrameLeftFold.form.stcLogo.addEventHandler("onclick",this.divFrameLeftFold_stcLogo_onclick,this);
            this.divFrameLeftFold.form.btnMenu09.addEventHandler("onclick",this.divFrameLeftFold_btnMenu_onclick,this);
            this.divFrameLeftFold.form.btnMenu09.addEventHandler("onmouseenter",this.divFrameLeftFold_btnMenu_onmouseenter,this);
            this.divFrameLeftFold.form.btnMenu09.addEventHandler("onmouseleave",this.divFrameLeftFold_btnMenu_onmouseleave,this);
        };
        this.loadIncludeScript("frameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
