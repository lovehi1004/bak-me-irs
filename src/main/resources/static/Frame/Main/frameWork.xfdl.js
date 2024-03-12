(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("frameWork");
            if (Form == this.constructor)
            {
                this._setFormPosition(1626,777);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"favoId\" type=\"STRING\" size=\"256\"/><Column id=\"favoFldeNm\" type=\"STRING\" size=\"256\"/><Column id=\"favoGbcd\" type=\"STRING\" size=\"256\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"parntFavoId\" type=\"STRING\" size=\"256\"/><Column id=\"scrnId\" type=\"STRING\" size=\"256\"/><Column id=\"scrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"favoYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"favoId\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_Guid","0","0","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","0",null,"70","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_breadcrumbs");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","30","70",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Frame");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1626,777,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameWork.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameWork Form
        * FILE NAME     : frameWork.xfdl
        * DESCRIPTION   : frameWork
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
        this.fvWinKey	= "";
        this.fvMnuId   = "";
        this.fvMnuNm   = "";
        this.fvMenuUrl  = "";
        this.fvMenuPath = "";
        this.fvArgSend  = "";

        this.fvAuth	= {};				// 화면의 권한정보

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
        	// this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        	this.fnFormInit(obj);
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	this.fvApp = nexacro.getApplication();

        	// 전달된 Parameter 개별로 받기
        	try
        	{
        		this.fvWinKey	= this.getOwnerFrame().arguments["argWinKey"];
        		this.fvMnuId   = this.getOwnerFrame().arguments["argMnuId"];
        		this.fvMnuNm   = this.getOwnerFrame().arguments["argMnuNm"];
        		this.fvMenuUrl  = this.getOwnerFrame().arguments["argMenuUrl"];
        		this.fvMenuPath  = this.getOwnerFrame().arguments["argMenuPath"];
        		this.fvArgSend  = this.getOwnerFrame().arguments["argSend"];
        	}
        	catch (e)
        	{
        		this.fvWinKey	= this.parent.argWinKey;
        		this.fvMnuId	= this.parent.argMnuId;
        		this.fvMnuNm	= this.parent.argMnuNm;
        		this.fvMenuUrl	= this.parent.argMenuUrl;
        		this.fvMenuPath	= this.parent.argMenuPath;
        		this.fvArgSend	= this.parent.argSend;
        	}

        	//메뉴로그 기록
        	// this.gfnMnuUseLog(this.fvMnuId);

        	// 권한 정보 메뉴에서 확인하여 처리
        	// var nRow = this.fvApp.gdsMenu.findRow("mnuId", this.fvMnuId);
        	var nRow = this.fvApp.gdsMenu.findRow(this.fvApp.objMenu.sMnuIdCol, this.fvMnuId);
        	this.fvAuth.InqAuthrt	= this.gfnNvl(this.fvApp.gdsMenu.getColumn(nRow, this.fvApp.objMenu.sBtnInqAuthrtYnCol), 	"N");		// 조회권한 (Y/N)
        	this.fvAuth.RegAuthrt	= this.gfnNvl(this.fvApp.gdsMenu.getColumn(nRow, this.fvApp.objMenu.sBtnRegAuthrtYnCol), 	"N");		// 등록권한 (Y/N)
        	this.fvAuth.MdfcnAuthrt	= this.gfnNvl(this.fvApp.gdsMenu.getColumn(nRow, this.fvApp.objMenu.sBtnMdfcnAuthrtYnCol), 	"N");		// 수정권한 (Y/N)
        	this.fvAuth.DelAuthrt	= this.gfnNvl(this.fvApp.gdsMenu.getColumn(nRow, this.fvApp.objMenu.sBtnDelAuthrtYnCol), 	"N");		// 삭제권한 (Y/N)
        	this.fvAuth.ExcnAuthrt	= this.gfnNvl(this.fvApp.gdsMenu.getColumn(nRow, this.fvApp.objMenu.sBtnExcnAuthrtYnCol), 	"N");		// 실행권한 (Y/N)

        	this.set_name(this.fvWinKey);
        	this.set_titletext(this.fvMnuNm);	// Form 타이틀 text

        	// 화면을 걸어준다.
        	//trace("★★★ 화면 연결========");
        	var sUrl = this.fvMenuUrl;
        	if (sUrl.toString().indexOf(".xfdl")<0)
        	{
        		sUrl = sUrl+".xfdl";
        		this.fvMenuUrl = sUrl;
        	}
        	this.divWork.set_url(sUrl);

        	// 국제감축협의체 관리 > <b v='true'>국제감축협의체 현황</b>
        	this.staTitle.set_text(this.fvMenuPath + " > <b v='true'>" + this.fvMnuNm + "</b>");

        	this.divWork.setFocus();
        	this.scrollTo(0,0);
        };

        /**
         * @description Form 이 활성화될 때 발생하는 이벤트입니다.
         */
        this.frameWork_onactivate = function(obj,e)
        {
        	trace("[frameWork_onactivate]==================");

        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.
         */
        this.frameWork_onkeyup = function(obj,e)
        {
        	//trace("[frameWork][frameWork_onkeyup]e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);

        	if (e.ctrlkey && e.keycode == 81)	// 디버그 창 : Ctrl + Q
        	{
        		// 운영환경에서는 실행 방지
        		if (nexacro.getEnvironmentVariable("evSvrType") == "REAL") return;
        		this.gfnOpenDebugPop();
        	}
        };

        /**
         * @description Form 이 종료되거나 화면 전환이 이뤄질 때 발생하는 이벤트입니다.
         */
        this.frameWork_onclose = function(obj,e)
        {
        	try
        	{
        		//trace("workFrame_onclose : " + e.fromobject);
        		//trace("workFrame_onclose : " + e.fromobject.name);
        		// WorkFrame 화면일때만 창 닫기
        		if (e.fromobject == "[object Form]" && (e.fromobject.name + "").substr(0,4) == "win_")
        		{
        			this.fvApp.gvFrameMDI.form.fnRemoveMdiBtn(this.fvWinKey);

        		// 	var objOpenFormGds = this.fvApp.gdsOpenMenu;
        		//
        		//     // 열린 업무 화면이 없을때 Main 화면을 보여준다.
        		//     if(objOpenFormGds.getRowCount() == 0) {
        		// 		this.fvApp.gvVFrameSet1.set_separatesize(this.fvApp.Frame.sVFrameSet1_HomeSize);
        		// 	}
        		}
        	}
        	catch(e)
        	{

        	}
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트입니다.
         */
        this.frameWork_onsize = function(obj,e)
        {
        	obj.resetScroll();
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
         * @desc 닫기 전처리
         * 1. pdvOpenMenu_grdOpenList_oncellclick (열린화면 목록 popupDiv > Grid Cell 클릭 > X 클릭시 호출됨)
         * 2. MDI Extra (X) 버튼 클릭시 호출
         * @param N/A
         * @return N/A
        */
        this.fnWorkFrameClose = function()
        {
        	if(this.gfnIsNull(this.divWork.form.lookup("fnClose")))
        	{
        		//trace("해당화면에 fnClose 함수가 없습니다. fnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        		this.close();
        	}
        	else
        	{
        		if(this.divWork.form.fnClose())
        		{
        			this.gfnShowMessage(this, ["confirm","변경된 내용이 있습니다.\n계속 진행하시겠습니까?"], "", function(svcid, variant) {
        			//trace("variant:"+variant);
        				if (variant == "OK")
        				{
        					// 확인시 후처리
        					this.close();
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
        			this.close();
        		}
        	}
        };

        /**
         * @desc 화면오픈시 파라미터 전달
         * 		==> Frame.js > gfnCallOpenMenu,  gfnOpenMenu 에서 호출
         *			실제 업무화면 메인 폼의 fnParamInit 함수 호출, 해당 함수내부에서 후처리
         * @param N/A
         * @return N/A
        */
        this.fnCallOpenedForm = function()
        {
        	if (this.divWork.form.isValidObject("fnParamInit") )
        	{
        		this.divWork.form.fnParamInit();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.frameWork_onactivate,this);
            this.addEventHandler("onclose",this.frameWork_onclose,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onkeyup",this.frameWork_onkeyup,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frameWork_onsize,this);
        };
        this.loadIncludeScript("frameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
