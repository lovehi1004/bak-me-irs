(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comUserRolePop");
            this.set_titletext("사용자 권한선택 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,277);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserRoleList", this);
            obj._setContents("<ColumnInfo><Column id=\"roleIdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","18","7","170","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("로그인 권한 선택");
            obj.set_cssclass("sta_POP_Title");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","45","45","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divRole","45","89",null,null,"45","102",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoRole","80","0",null,null,"80","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsUserRoleList");
            obj.set_codecolumn("roleIdMgno");
            obj.set_datacolumn("roleNm");
            obj.set_columncount("1");
            obj.set_rowcount("1");
            obj.set_direction("horizontal");
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnOk","144",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","222",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRole.form
            obj = new Layout("default","",0,0,this.divRole.form,function(p){});
            this.divRole.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",440,277,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comUserRolePop.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comUserRolePop Form
        * FILE NAME     : comUserRolePop.xfdl
        * DESCRIPTION   : 사용자 권한선택 팝업
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.10.24    TOBESOFT	     최초생성
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
        	this.dsUserRoleList.clearData();

        	var arrKeys;
        	var objFormFrame;
        	if(this.getOwnerFrame().cvModeless == "Y") // modeless(오픈) 일 경우
        	{
        		objFormFrame = this.getOwnerFrame().opener;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}
        	else
        	{
        		objFormFrame = this;
        		arrKeys = this.gfnGetParameterKeys(objFormFrame);
        	}

        	var objDs  = this.gfnGetParameter(objFormFrame, "pvDataset");
        	if( !this.gfnIsNull(objDs) )
        	{
        		this.dsUserRoleList.copyData(objDs);
        	}

        	this.divRole.form.rdoRole.setFocus();
        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.
        */
        this.form_onkeyup = function(obj,e)
        {
        	if( e.keycode == 27 )	// esc
        	{
        		this.gfnPopupClose(this, "");
        	}
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

        /**
         * @description [X]버튼
        */
        this.divForm_btnClose_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };

        /**
         * @description [확인]버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.divRole.form.rdoRole.value))
        	{
        		this.gfnShowMessage(this, "권한을 선택하세요", "", function(svcid, variant) {
        			this.divRole.form.rdoRole.setFocus();
        		});
        	}
        	else
        	{
        		var sRtn = this.gfnSetPopupReturn({pvRtnValue:this.divRole.form.rdoRole.value});
        		this.gfnPopupClose(this, sRtn);
        	}
        };

        /**
         * @description [취소]버튼
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.gfnPopupClose(this, "");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divForm.form.btnClose.addEventHandler("onclick",this.divForm_btnClose_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("comUserRolePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
