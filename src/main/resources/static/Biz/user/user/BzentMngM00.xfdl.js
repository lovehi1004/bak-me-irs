(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzentMngM00");
            this.set_titletext("정보관리 메인");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail01","1626","26","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업체관리 목록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail02","1626","285","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업체관리 > 변경신청 처리화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail03","1624","547","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업체관리 > 수정기능 없는 상세화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail04","1621","815","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업체관리 > 수정화면");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail01
            obj = new Layout("default","",0,0,this.divDetail01.form,function(p){});
            this.divDetail01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail02
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail03
            obj = new Layout("default","",0,0,this.divDetail03.form,function(p){});
            this.divDetail03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail04
            obj = new Layout("default","",0,0,this.divDetail04.form,function(p){});
            this.divDetail04.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.edtBzentNm","value","dsSrh","srhBzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.edtRprsvNm","value","dsSrh","srhRprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.edtFlnm","value","dsSrh","srhFlnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.cboPrcsTypeCd","value","dsSrh","srhPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BzentMngM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionM00 Form
        * FILE NAME     : sampleFormActionM00.xfdl
        * DESCRIPTION   : 화면전환샘플 (목록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
        ***********************************************************************************/



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
         * @description 화면 닫기 - 화면 비활성화 처리
         */
        this.fnClosePage = function(obj)
        {
        	obj.set_left(0);
        	obj.set_top(0);
        	obj.set_width(null);
        	obj.set_height(null);
        	obj.set_right(0);
        	obj.set_bottom(0);
        };

        /**
         * @description 화면 화면전환
         */
        this.fnMovePage = function(obj, objArgs) {
        	if(obj == this.divList)     { this.divList.set_visible(true);     } else { this.divList.set_visible(false); }
        	if(obj == this.divDetail01) { this.divDetail01.set_visible(true); if(!this.gfnIsNull(objArgs)) { this.divDetail01.form.fnChangeDiv(objArgs); } } else { this.divDetail01.set_visible(false); }
        	if(obj == this.divDetail02) { this.divDetail02.set_visible(true); if(!this.gfnIsNull(objArgs)) { this.divDetail02.form.fnChangeDiv(objArgs); } } else { this.divDetail02.set_visible(false); }
        	if(obj == this.divDetail03) { this.divDetail03.set_visible(true); if(!this.gfnIsNull(objArgs)) { this.divDetail03.form.fnChangeDiv(objArgs); } } else { this.divDetail03.set_visible(false); }
        };

        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	this.fnClosePage(this.divDetail01);			// 업체관리 > 업체관리 목록
        	this.fnClosePage(this.divDetail02);			// 업체관리 > 수정화면
        	this.fnClosePage(this.divDetail03);			// 업체관리 > 수정기능 없는 상세화면
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

        	this.divDetail01.set_url("Biz_user::user/BzentMngS01.xfdl");			// 업체관리 > 업체관리 목록
        	this.divDetail02.set_url("Biz_user::user/BzentMngS02.xfdl");			// 업체관리 > 수정화면
        	this.divDetail03.set_url("Biz_user::user/BzentMngS03.xfdl");			// 업체관리 > 수정기능 없는 상세화면

        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		// 화면전환 목록화면
        		this.fnMovePage(this.divDetail01);

        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		this.fnMovePage(this.divDetail03);
        	}
        };


        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("BzentMngM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
