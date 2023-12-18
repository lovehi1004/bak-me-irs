(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGridText");
            this.set_titletext("Grid Text 표현");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"methdNm\" type=\"STRING\" size=\"256\"/><Column id=\"methdField\" type=\"STRING\" size=\"256\"/><Column id=\"methdDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"methdNm\">[IRS] 방법론 테스트(사업자)123551[IRS] 방법론 테스트(사업자)123552[IRS] 방법론 테스트(사업자)123553</Col><Col id=\"methdField\">에너지산업 - 신재생에너지로부터의 에너지 생산</Col><Col id=\"methdDate\">20230701</Col></Row><Row><Col id=\"methdDate\">20230701</Col><Col id=\"methdNm\">GIR_테스트_재확인1GIR_테스트_재확인2GIR_테스트_재확인3</Col><Col id=\"methdField\">에너지산업 - 화석연료, 바이오매스를 통한 열에너지 생산</Col></Row><Row><Col id=\"methdDate\">20230701</Col><Col id=\"methdNm\">GIR_테스트_설명파일 업로드의 주체는 누구인가1GIR_테스트_설명파일 업로드의 주체는 누구인가2GIR_테스트_설명파일 업로드의 주체는 누구인가3</Col><Col id=\"methdField\">에너지산업 - 화석연료, 바이오매스를 통한 열에너지 생산</Col></Row><Row><Col id=\"methdDate\">20230702</Col><Col id=\"methdNm\">전기 및/또는 하이브리드 추진 내항여객선의 도입에 따른 화석연료 절감 사업의 방법론1전기 및/또는 하이브리드 추진 내항여객선의 도입에 따른 화석연료 절감 사업의 방법론2전기 및/또는 하이브리드 추진 내항여객선의 도입에 따른 화석연료 절감 사업의 방법론3</Col><Col id=\"methdField\">수송 - 수송</Col></Row><Row><Col id=\"methdDate\">20230702</Col><Col id=\"methdNm\">농촌지역에서 지열에너지를 이용한 온실가스 감축 사업의 방법론1농촌지역에서 지열에너지를 이용한 온실가스 감축 사업의 방법론2농촌지역에서 지열에너지를 이용한 온실가스 감축 사업의 방법론3</Col><Col id=\"methdField\">에너지산업 - 신재생에너지로부터의 에너지 생산</Col></Row><Row><Col id=\"methdDate\">20230702</Col><Col id=\"methdNm\">농촌지역에서 히트펌프를 이용한 온실가스 감축 사업의 방법론1농촌지역에서 히트펌프를 이용한 온실가스 감축 사업의 방법론2농촌지역에서 히트펌프를 이용한 온실가스 감축 사업의 방법론3</Col><Col id=\"methdField\">에너지 수요 - 에너지 수요</Col></Row><Row><Col id=\"methdDate\">20230703</Col><Col id=\"methdNm\">반도체 제조공정의 F-Gas 감축설비 도입을 통한 온실가스 감축 사업의 방법론1반도체 제조공정의 F-Gas 감축설비 도입을 통한 온실가스 감축 사업의 방법론2반도체 제조공정의 F-Gas 감축설비 도입을 통한 온실가스 감축 사업의 방법론3</Col><Col id=\"methdField\">할로겐화탄소, 육불화항 생산및소비로부터의 탈루배출 - 온실가스 포집 및 파괴</Col></Row><Row><Col id=\"methdDate\">20230703</Col><Col id=\"methdNm\">전력계통내 폐기된 전기설비의 충진된 SF6를 회수 및 정제하는 사업의 방법론1전력계통내 폐기된 전기설비의 충진된 SF6를 회수 및 정제하는 사업의 방법론2전력계통내 폐기된 전기설비의 충진된 SF6를 회수 및 정제하는 사업의 방법론3</Col><Col id=\"methdField\">할로겐화탄소, 육불화항 생산및소비로부터의 탈루배출 - 온실가스 포집 및 파괴</Col></Row><Row><Col id=\"methdDate\">20230805</Col><Col id=\"methdNm\">생활계 플라스틱류 폐기물을 활용한 열분해유를 생산하는 사업의 방법론1생활계 플라스틱류 폐기물을 활용한 열분해유를 생산하는 사업의 방법론2생활계 플라스틱류 폐기물을 활용한 열분해유를 생산하는 사업의 방법론3</Col><Col id=\"methdField\">폐기물 취급 및 처리 - 폐기물 취급 및 처리</Col></Row><Row><Col id=\"methdDate\">20230805</Col><Col id=\"methdNm\">혼합시멘트 생산에서 원료의 부분적인 전환 및 혼합재 비율 증가를 통한 온실가스 감축1혼합시멘트 생산에서 원료의 부분적인 전환 및 혼합재 비율 증가를 통한 온실가스 감축2혼합시멘트 생산에서 원료의 부분적인 전환 및 혼합재 비율 증가를 통한 온실가스 감축3</Col><Col id=\"methdField\">제조업 - 시멘트 분야</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtInfo","20","5",null,"370","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("Grid > Cell 의 text 를 Col Size 기준으로 표현, 길이가 길 경우 \"...\" 으로 줄여서 표현 처리\n\nGrid 설정\n\tProperty\n\t\tcellsizingtype : col\n\t\t\n\tGrid Contents Editor\n\t\ttext : expr:dataset.parent.gfnGetRealColSizeText(comp, columnName, currow, nCell)\n\t\t\tcomp : 대상 Grid 컴포넌트\n\t\t\tcolumnName : 사이즈 처리 text Column명\n\t\t\tcurrow : row 정보\n\t\t\tnCell : cell 정보\n\t\t\t추가옵션 {String} sEllipsis : 말줄임표시 문구 (default : \"...\")\n\t\t\t추가옵션 {String} sFont : 적용폰트 (default : gvGridColDefaultFont , \'400 15px/17px \"NotoSansKR\"\')\n\t\t\t추가옵션 {String} sPadding : Padding 정보 (default : gvGridColDefaultPadding , \"6px 7px\" , top/right/bottom/left , ex. \"0px 10px 0px 10px\")\t\t\t\n\t\ttooltiptext : bind:columnName\n\t\t\t툴팁으로 보여줄 text (size 처리대상 column명지정)\nForm 설정\n\tform_onsize 이벤트에 Grid redraw 처리 추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","20","399",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"701\"/><Column size=\"425\"/><Column size=\"116\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/><Cell col=\"1\" text=\"방법론 분야\"/><Cell col=\"2\" text=\"일자\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, methdNm, currow, 0)\" tooltiptext=\"bind:methdNm\"/><Cell col=\"1\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, methdField, currow, 1, &quot;***&quot;, &quot;&quot;, &quot;2px 3px 2px 3px&quot;)\" tooltiptext=\"bind:methdField\"/><Cell col=\"2\" text=\"bind:methdDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGridText.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleGridText Form
        * FILE NAME     : sampleGridText.xfdl
        * DESCRIPTION   : Grid Text 표현
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.09.13    TOBESOFT	     최초생성
        ***********************************************************************************/


        /*
        	Grid > Cell 의 text 를 Col Size 기준으로 표현, 길이가 길 경우 "..." 으로 줄여서 표현 처리
        	Grid 설정
        		Property
        			cellsizingtype : col

        		Grid Contents Editor
        			text : expr:dataset.parent.gfnGetRealColSizeText(comp, columnName, currow, nCell, ["..."], ['400 15px/17px "NotoSansKR"'], ["0px 10px 0px 10px"])
        				comp : 대상 Grid 컴포넌트
        				columnName : 사이즈 처리 text Column명
        				currow : row 정보
        				nCell : cell 정보
        				추가옵션 {String} sEllipsis : 말줄임표시 문구 (default : "...")
        				추가옵션 {String} sFont : 적용폰트 (default : gvGridColDefaultFont , '400 15px/17px "NotoSansKR"')
        				추가옵션 {String} sPadding : Padding 정보 (default : gvGridColDefaultPadding , "6px 7px" , top/right/bottom/left , ex. "0px 10px 0px 10px")

        				※ font : cell 에 별도 지정한 font 정보가 있을 경우 param 으로 설정할 수 있습니다. 미지정시 default 값으로 사이즈 체크 합니다.
        				  padding : cssclass 로 지정된 경우 padding 정보가 추출이 안되니 별도 param 으로 설정하여 줍니다.

        			tooltiptext : bind:columnName
        				툴팁으로 보여줄 text (size 처리대상 column명지정)
        	Form 설정
        		form_onsize 이벤트에 Grid redraw 처리 추가
        */


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
        	this.grdList01.griduserproperty = "none";
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
        	trace("[sampleGridText]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {
        trace("form_onsize=======================");
        	// Grid Text 표현 재처리
        	this.grdList01.set_enableredraw(false);
        	this.grdList01.set_enableredraw(true);
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
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("sampleGridText.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
