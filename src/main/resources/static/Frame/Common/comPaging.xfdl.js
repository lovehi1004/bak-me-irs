(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPaging");
            this.set_titletext("페이지 표시 및 처리 공통 폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageInfo_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"currentPage\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"volumePerPage\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","251","36","465","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","0","0","19","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PageP");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02","Button06:10","0","19","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageL");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button17","372","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button05","Button17:18","0","19","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PageR");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button07","Button05:10","0","19","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PageN");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button08","Button02:18","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button09","Button08:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button10","Button09:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button11","Button10:8","0","26","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button12","Button11:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button13","Button12:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button14","Button13:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button15","Button14:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button16","Button15:8","0","26","19",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Page");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,20,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comPaging.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comPaging Form
        * FILE NAME     : comPaging.xfdl
        * DESCRIPTION   : 페이지 표시 및 처리 공통 폼
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.08    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	★★★ 페이징 처리에 대한 서비스 연동 및 추가적인 보안 코드 작업 필요
        */


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvFnCallback  = "";	// callback 함수명

        this.fvPageLeft    	= 0; 	// 페이징 div가운데 위치시키기 위한 left값
        this.fvPageWidth	= 470;	// 페이징 div width

        this.fvRecordTotal 	= 0;		// 전체 Row수(default:0)
        this.fvRecordPage  	= 1;		// 현재Page(default:1)
        this.fvRecordScale 	= 10;		// 페이지당 가져오는 Row수(default:10)
        this.fvDispPageNoCount = 10;	// Display Page번호 갯수(default:10)


        this.fvBtnFirstCssclass = "btn_WF_PageP"		// 처음페이지 cssclass
        this.fvBtnPrevCssclass = "btn_WF_PageL"			// 이전페이지 cssclass
        this.fvBtnNextCssclass = "btn_WF_PageR"			// 다음페이지 cssclass
        this.fvBtnEndCssclass = "btn_WF_PageN"			// 마지막페이지 cssclass
        this.fvBtnSelectCssclass = "btn_WF_PageS"		// 선택페이지 cssclass
        this.fvBtnNormalCssclass = "btn_WF_Page"		// 일반페이지 cssclass

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
        	trace("[comPaging]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트입니다
        */
        this.form_onsize = function(obj,e)
        {
        	//가운데로
        	if (this.fvFnCallback != "") this.fnSetCenter(obj);
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
         * @desc pagingDiv가 가운데오도록 처리
         * @param {object} obj 폼
         * @return N/A
        */
        this.fnSetCenter = function(obj)
        {
        	var orgLeft = this.fvPageLeft;
        	var orgWidth = this.fvPageWidth;
        	var diffWidth = nexacro.toNumber(obj.getOffsetWidth()) - orgWidth;

        	if(this.divPage)
        	{
        		this.divPage.move((parseFloat(orgLeft) + parseFloat(diffWidth/2)),0);
        	}
        };

        /**
         * @desc 페이지표시 Div 초기화
         * @param {object} objPageInfoDs 페이징정보 dataset object
         * @param {string} sFnCallback callback 함수명
         * @return N/A
        */
        this.fnInitPage = function(objPageInfoDs, sFnCallback)
        {
        	if ( objPageInfoDs.getRowCount() == 0 )
        	{
        		trace("페이지 정보 Row가 없습니다.");
        		return;
        	}

        	this.fvFnCallback   = sFnCallback;

        	var nTotalCount = 0;
        	var nPage 		= 1;

        	objPageInfoDs.setColumn(0,"totalCount", nTotalCount);	// 전체 Row수
        	objPageInfoDs.setColumn(0,"pageNo", nPage);				// 현재Page

        	this.fnRedrawPage(objPageInfoDs);
        };

        /**
         * @desc 페이지표시 Div 버튼 생성
         * @param {object} objPageInfoDs 페이징정보 dataset object
         * @return N/A
        */
        this.fnRedrawPage = function(objPageInfoDs)
        {
        	if ( objPageInfoDs.getRowCount() == 0 )
        	{
        		trace("페이지 정보 Row가 없습니다.");
        		return;
        	}

        	this.fvRecordTotal  = objPageInfoDs.getColumn(0,"totalCount");		// 전체 Row수
        	this.fvRecordPage   = objPageInfoDs.getColumn(0,"pageNo");			// 현재Page
        	this.fvRecordScale  = objPageInfoDs.getColumn(0,"listSize");		// 페이지당 가져오는 Row수

        	this.fnCreatePageView(this.fvFnCallback, this.fvRecordTotal, this.fvRecordScale, this.fvRecordPage, this.fvDispPageNoCount);
        };

        /**
         * @desc nCreatePage page갯수에 맞게 버튼 생성
         * @param {string} sFnCallback callback 함수명
         * @param {number} nTotalCount 전체 Row수
         * @param {number} nRecords 한번에 가져오는 Row수
         * @param {number} nPage 현재Page
         * @param {number} nPageScaleC Display Page번호 갯수
         * @return N/A
        */
        this.fnCreatePageView = function(sFnCallback, nTotalCount, nRecords, nPage, nPageScaleC)
        {
            //DIV 초기화
            if (this.isValidObject("divPage"))
        	{
        		var objDelete = this.removeChild("divPage");
        		objDelete.destroy();
            }

        	if ( nTotalCount == 0 ) return;

        	this.fvRecordScale = nRecords;		// 페이지당 가져오는 Row수
        	this.fvFnCallback  = sFnCallback;	// callback 함수명
        	var nTotalPageC; 					// 전체페이지갯수

        	/*전체페이지갯수 계산*/
        	if( Math.floor( nTotalCount % nRecords ) > 0 )
        	{
                nTotalPageC = Math.floor( nTotalCount / nRecords ) + 1;
            }
        	else
            {
                nTotalPageC = Math.floor( nTotalCount / nRecords );
            }

        	var nTermDiv = 0;		 //큰버튼과 Div사이
        	var nTermBtn = 10;		 //큰버튼사이
            var nTerm = 18;   		 //큰버튼과 숫자사이
        	var nTermNumBtn = 8;	 //숫자버튼사이

        	var nLeft = nTermDiv;
        	var nTop = 0;
            var nWidth = 19;
        	var nHeight = 19;
            var nNumWidthMin = 26;
        	var nNumWidth = 26;
        	var nDivWidth = 470;//390;
        	var nDivHeight = 20;//25;

            var objBtnPage;

            if (this.gfnIsNull(nRecords)) 	 nRecords = 10;
            if (this.gfnIsNull(nPage)) 		 nPage = 1;
            if (this.gfnIsNull(nPageScaleC)) nPageScaleC = 10;
            //실제 페이지 갯수는 MAX 10개로 조정
            if( nPageScaleC > 10 ) nPageScaleC = 10;

            this.set_scrollbartype("none");
            //nPage = nPage + 1;

        	//현재페이지
            var uint = Math.floor( ( nexacro.toNumber( nPage ) - 1 ) / nexacro.toNumber( nPageScaleC ) );
                uint = ( uint * nPageScaleC ) + 1;
           //다음페이지
            var nextUnit = nexacro.toNumber( uint + nPageScaleC );
        	if( nextUnit > nTotalPageC) nextUnit = nTotalPageC + 1;

        	//div생성
            var objDivPaging = new Div();
        	objDivPaging.init("divPage", 0, 0, nDivWidth, nDivHeight, null, null);
        	// objDivPaging.set_border("1px solid black");

            this.addChild(objDivPaging.name, objDivPaging);
            objDivPaging.show();
            //var objDivPaging = this.divPage;
            //컨트롤버튼생성

        	/************************************************************************
        	 * 첫페이지(<<) 버튼생성
        	 ************************************************************************/
        	var objBtnFirst = new Button("btnFirst", nLeft, nTop, nWidth, nHeight, null, null);
        	objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        	objBtnFirst.set_cssclass(this.fvBtnFirstCssclass); // ("btn_WF_PageLeftEnd");
        	//objBtnFirst.set_text("처음");
        	objBtnFirst.page = 1;
        	objBtnFirst.addEventHandler("onclick", this.fnMovePage, this);
        	objBtnFirst.set_enable(true);

        	// 현재페이지가 '1'이면 비활성화
        	if( nPage == 1 ) objBtnFirst.set_enable(false);
        	objBtnFirst.show();
        	nLeft = nLeft + nWidth + nTermBtn;	//left값 계산

        	/************************************************************************
        	 * 앞으로(<) 버튼생성
        	 ************************************************************************/
        	var objBtnBefore = new Button("btnBefore", nLeft, nTop, nWidth, nHeight, null, null);
        	objDivPaging.addChild(objBtnBefore.name, objBtnBefore);
        	objBtnBefore.set_cssclass(this.fvBtnPrevCssclass); // ("btn_WF_PageLeft");
        	//objBtnBefore.set_text("<");
        	objBtnBefore.page = nPage - 1;
        	objBtnBefore.addEventHandler("onclick", this.fnMovePage, this);
        	objBtnBefore.set_enable(true);
        	// 현재페이지가 '1'이면 비활성화
        	if( nPage == 1) objBtnBefore.set_enable(false);
        	nLeft = nLeft + nWidth + nTerm;	//left값 계산
        	objBtnBefore.show();

        	/************************************************************************
        	 *페이징[1 2 3 4 5 6 7 8 9 10] 버튼생성
        	 ************************************************************************/
        	var nNumWidthNew = nNumWidth;
        	for(var i=uint; i<nextUnit; i++ )
        	{
        		if(i > nTotalPageC ) break; //페이지갯수만큼만 생성

        		objBtnPage = new Button("btnPage"+i,  nLeft, nTop, nNumWidthNew, nHeight, null, null);
        		objDivPaging.addChild(objBtnPage.name, objBtnPage);
        		objBtnPage.set_cssclass(this.fvBtnNormalCssclass); // ("btn_WF_Page");
        		objBtnPage.set_text(i);
        		objBtnPage.set_fittocontents("width");
        		objBtnPage.page = i;
        		objBtnPage.addEventHandler("onclick", this.fnMovePage, this);

        		if(i == nPage) objBtnPage.set_cssclass(this.fvBtnSelectCssclass); // ("btn_WF_Page_Sel"); //누름표시
        		objBtnPage.show();

        		nNumWidthNew = objBtnPage.getOffsetWidth();
        		if ( nNumWidthNew < nNumWidthMin )
        		{
        			nNumWidthNew = nNumWidthMin;
        			objBtnPage.set_width(nNumWidthNew);
        			objBtnPage.set_fittocontents("none");
        		}

        		nLeft = nLeft + nNumWidthNew + nTermNumBtn; //left값 계산
        	}
        	nLeft = nLeft - nTermNumBtn + nTerm;

        	/************************************************************************
        	 * 뒤로(>) 버튼생성
        	 ************************************************************************/
        	var objBtnNext = new Button("btnNext", nLeft, nTop, nWidth, nHeight, null, null);
        	objDivPaging.addChild(objBtnNext.name, objBtnNext);
        	objBtnNext.set_cssclass(this.fvBtnNextCssclass); // ("btn_WF_PageRight");
        	//objBtnNext.set_text(">");
        	objBtnNext.addEventHandler("onclick", this.fnMovePage, this);
        	objBtnNext.set_enable(true);
        	objBtnNext.page = nPage +1;
        	//현재페이지가 전체페이지갯수만큼이면 비활성화
        	if( nPage >= nTotalPageC) objBtnNext.set_enable(false);
        	objBtnNext.show();
        	nLeft = nLeft + nWidth + nTermBtn; //left값 계산

        	/************************************************************************
        	 * 마지막페이지(>>) 버튼생성
        	 ************************************************************************/
        	var objBtnEnd = new Button("btnEnd", nLeft, nTop, nWidth, nHeight, null, null);
        	objDivPaging.addChild(objBtnEnd.name, objBtnEnd);
        	objBtnEnd.set_cssclass(this.fvBtnEndCssclass); // ("btn_WF_PageRightEnd");
        	//objBtnEnd.set_text("마지막");
        	objBtnEnd.addEventHandler("onclick", this.fnMovePage, this);
        	objBtnEnd.page = nTotalPageC;
        	//현재페이지가 전체페이지갯수만큼이면 비활성화
        	if( nPage == nTotalPageC) objBtnEnd.set_enable(false);
        	objBtnEnd.show();

        	this.resetScroll();

        	//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        	nLeft = nLeft + nWidth + nTermDiv ;	//Div Width값 계산
        	// trace("[div의 Width]nLeft:"+nLeft);
        	objDivPaging.set_width(nLeft);

        	//가운데로
        	this.fvPageLeft = ((nDivWidth - nLeft) / 2);
        	this.fnSetCenter(this);
        };

        /**
         * @desc page 이동함수
         * @param {object} 페이지번호 버튼 object
         * @return N/A
        */
        this.fnMovePage = function(obj)
        {
        	this.fvRecordPage   = nexacro.toNumber(obj.page);	//누른페이지

        	//callback함수호출
        	this.lookupFunc(this.fvFnCallback).call(obj.page, this.fvRecordScale);
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("comPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
