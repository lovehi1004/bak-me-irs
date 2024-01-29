(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1720,56);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stcBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_BF_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","0","0",null,"56","0",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSite",null,"14","220","30","30",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("바로가기");
            var divContents_form_cboSite_innerdataset = new nexacro.NormalDataset("divContents_form_cboSite_innerdataset", obj);
            divContents_form_cboSite_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">https://www.gir.go.kr/home/main.do</Col><Col id=\"datacolumn\">GIR 온실가스종합정보센터</Col></Row><Row><Col id=\"codecolumn\">https://ngms.gir.go.kr:8443/main.do</Col><Col id=\"datacolumn\">NGMS 국가온실가스종합관리</Col></Row><Row><Col id=\"codecolumn\">https://etrs.gir.go.kr/etrs/</Col><Col id=\"datacolumn\">ETRS 배출권등록부</Col></Row><Row><Col id=\"codecolumn\">https://ets.krx.co.kr/contents/ETS/03/03010000/ETS03010000.jsp</Col><Col id=\"datacolumn\">KRX 배출권 정보플랫폼</Col></Row><Row><Col id=\"codecolumn\">https://devors.gir.go.kr/ors/main.do</Col><Col id=\"datacolumn\">ORS 상쇄등록부시스템</Col></Row><Row><Col id=\"datacolumn\">바로가기</Col></Row></Rows>");
            obj.set_innerdataset(divContents_form_cboSite_innerdataset);
            obj.set_text("바로가기");
            obj.set_value("");
            obj.set_index("5");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcLine01","138","24","1","14",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_Line");
            obj.set_accessibilityenable("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcLine02","595","24","1","14",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_Line");
            obj.set_accessibilityenable("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcDesc01","151","20","469","20",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층 Fax : 043-714-7530");
            obj.set_cssclass("sta_BT_address");
            obj.set_accessibilitylabel("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층 Fax : 043-714-7530");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("stcDesc02","610","20","580","20",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("Copyright© 2023 <b v=\'true\'>GIR</b> All rights reserved.");
            obj.set_cssclass("sta_BT_address");
            obj.set_usedecorate("true");
            obj.set_accessibilitylabel("Copyright© 2023 GIR All rights reserved.");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnPrivacy","30","20","110","20",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_BF_Menu");
            obj.set_accessibilitylabel("개인정보처리방침");
            this.divContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1720,56,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameBottom.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Main
        * BUSINESS      : frameBottom Form
        * FILE NAME     : frameBottom.xfdl
        * DESCRIPTION   : frameBottom
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
        	trace("[frameBottom]fnLoginAfter =====================");
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description "개인정보처리방침" 클릭시
        */
        // this.btnPrivacy_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        this.divContents_btnPrivacy_onclick = function(obj,e)
        {
        	var sUrl = "https://www.gir.go.kr/home/index.do?menuId=52";
        	// system.execBrowser(sUrl);
        	system.execDefaultBrowser(sUrl);
        };

        /**
         * @description "바로가기" 클릭시
        */
        // this.cboSite_onitemclick = function(obj:nexacro.Combo,e:nexacro.ItemClickEventInfo)
        // {
        // 	if(!this.gfnIsNull(e.itemvalue))
        // 	{
        // 		system.execDefaultBrowser(e.itemvalue);
        // 	}
        // };
        this.divContents_cboSite_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(e.postvalue) && e.preindex != e.postindex)
        	{
        		system.execDefaultBrowser(e.postvalue);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.form.cboSite.addEventHandler("onitemchanged",this.divContents_cboSite_onitemchanged,this);
            this.divContents.form.btnPrivacy.addEventHandler("onclick",this.divContents_btnPrivacy_onclick,this);
        };
        this.loadIncludeScript("frameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
