(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSingleFileUpDown");
            this.set_titletext("Single 파일관련 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWork", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"workInfo01\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo02\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileGroupMgno\">FG00000001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00_00_00","0","63","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무정보 조회");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","130",null,"44","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staBizPlndFlmno","0","130","150","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","130",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Div("divSingleFile01","157","137","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comSingleFile.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01","10","15","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Single 첨부파일 샘플");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDetail","0","296","1566","115",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsWork");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"workInfo01\"/><Cell col=\"3\" text=\"workInfo02\"/><Cell col=\"4\" text=\"workInfo03\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:workInfo01\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:workInfo02\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:workInfo03\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","253","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업무정보 저장");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"253","88","32","1178",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"63","80","32","1186",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnble","808","58","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("버튼 Enable");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel01","484","58","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("버튼제어");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBtnNm","567","58","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboBtnNm_innerdataset = new nexacro.NormalDataset("cboBtnNm_innerdataset", obj);
            cboBtnNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">UPLOAD</Col><Col id=\"datacolumn\">UPLOAD</Col></Row><Row><Col id=\"codecolumn\">DOWNLOAD</Col><Col id=\"datacolumn\">DOWNLOAD</Col></Row><Row><Col id=\"codecolumn\">DELETE</Col><Col id=\"datacolumn\">DELETE</Col></Row></Rows>");
            obj.set_innerdataset(cboBtnNm_innerdataset);
            obj.set_text("UPLOAD");
            obj.set_value("UPLOAD");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboEnable","708","58","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboEnable_innerdataset = new nexacro.NormalDataset("cboEnable_innerdataset", obj);
            cboEnable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(cboEnable_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear","966","58","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSingleFile01
            obj = new Layout("default","",0,0,this.divSingleFile01.form,function(p){});
            this.divSingleFile01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comSingleFile.xfdl");
        };
        
        // User Script
        this.registerScript("sampleSingleFileUpDown.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleSingleFileUpDown Form
        * FILE NAME     : sampleSingleFileUpDown.xfdl
        * DESCRIPTION   : Single 파일관련 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.11.07    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	// 초기화 호출
        	fnInitSingleFile
        		업무데이터셋의 파일정보컬럼을 공통 Single 첨부파일 div 에 전달해 초기화 작업을 한다.
        		추가로 callback 처리옵션을 추가한다.
        		파일관련 사이즈, 제한확장자 정보가 기본 정보와 다를 경우 추가한다.
        		등록이 아닌 경우 sMode:"SEARCH" 를 추가한다. (파일정보 후처리시 버튼제어를 위해)

        	var objParam = { objDs:this.dsWork									// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnSingleFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
        					,sUpldFileSize:1024 * 1024 * 3						// 각 파일 최대사이즈 (3 Mbyte) , 없으면 공통내부 정의에 따름
        					,sUpldFileExtNm:"/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON"	// 업로드파일확장자명 , 없으면 공통내부 정의에 따름
        					,sMode:"REG"										// 사용모드 , 없으면 공통내부 정의에 따름 (REG - 등록 (default) / SEARCH - 조회)
        				   };

        	this.divSingleFile01.form.fnInitSingleFile(this, objParam);

        	// 업무정보 조회 후 파일정보 조회 호출
        	fnSearchSingleFile
        		업무데이터셋 조회 후 파일관련 key정보(fileGroupMgno) 가 있을 경우 공통 Single 첨부파일 div의 fnSearchSingleFile 함수 호출을
        		하면 공통에서 파일 관련 정보 조회 및 처리를 한다.

        	// 공통 Single 첨부파일 div에서 파일 관련 변경시
        		바인딩 정보를 바탕으로 정보값 셋팅
        		콜백함수가 있을 경우 콜백호출 (objRtn 정보)
        			sDiv - UPLOAD : 업로드 성공후 , DELETE : "X" 버튼 클릭시
        			objDs - this.dsAtchFileDetail (파일정보 데이터셋)

        	// 업무저장 처리

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
        	trace("[sampleSingleFileUpDown]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// comSingleFile01
        	var objParam = { objDs:this.dsWork									// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnSingleFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
        					,sUpldFileSize:1024 * 1024 * 3						// 각 파일 최대사이즈 (3 Mbyte) , 없으면 공통내부 정의에 따름
        					,sUpldFileExtNm:"/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON"	// 업로드파일확장자명 , 없으면 공통내부 정의에 따름
        					,sMode:"REG"										// 사용모드 , 없으면 공통내부 정의에 따름 (REG - 등록 (default) / SEARCH - 조회)
        				   };

        	this.divSingleFile01.form.fnInitSingleFile(this, objParam);

        	// 버튼 초기 제어 (enable)
        	// 공통초기셋팅 - UPLOAD (파일찾기) : true / DOWNLOAD (다운로드) : false / DELETE (삭제) : false
        	// 다운로드 버튼만 가능하게 하려고 할 경우
        	/*
        	this.divSingleFile01.form.fnEnable("UPLOAD", false);
        	this.divSingleFile01.form.fnEnable("DOWNLOAD", true);
        	this.divSingleFile01.form.fnEnable("DELETE", false);
        	*/
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnSingleFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFile01" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// UPLOAD : 업로드 성공후 , DELETE : "X" 버튼 클릭시
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "search" :
        			// 후처리 코드
        			var sFileGroupMgno = this.dsWork.getColumn(0, "fileGroupMgno");
        			if(!this.gfnIsNull(this.dsWork.getColumn(0, "fileGroupMgno")))
        			{
        				// 파일 정보 조회
        				this.divSingleFile01.form.fnSearchSingleFile(sFileGroupMgno);
        			}
        			break;
        		default:
        			break;
        	}
        };

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
         * @description 업무정보 조회
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	/*
        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "search";
        	objArgs.url 			= "/common/initial/selectCodeList.irs";
        	objArgs.inds			= "dsCond=dsCond:U";
        	objArgs.outds			= "dsWork=dsBizInfo";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        	*/

        	this.fnCallback("search", 0 , "SUCC");
        };

        /**
         * @description 업무정보 저장
        */
        this.btnSave_onclick = function(obj,e)
        {
        	// 업무정보 저장 서비스 처리 기술
        	alert("업무정보 저장 서비스 처리 기술");
        };

        /**
         * @description 버튼 enable 제어
        */
        this.btnEnble_onclick = function(obj,e)
        {
        	// 공통초기셋팅 - UPLOAD (파일찾기) : true / DOWNLOAD (다운로드) : false / DELETE (삭제) : false
        	// this.edtBtnNm.value : UPLOAD (파일찾기) / DOWNLOAD (다운로드) / DELETE (삭제)
        	// this.edtEnable.value : true / false
        	// ex. this.divSingleFile01.form.fnEnable("UPLOAD", false);
        	this.divSingleFile01.form.fnEnable(this.cboBtnNm.value, this.cboEnable.value);
        };

        /**
         * @description 첨부파일 clear 처리
        */
        this.btnClear_onclick = function(obj,e)
        {
        	// dsAtchFileDetail 데이터셋 clearData 처리
        	// futUpload 컴포넌트 clearFileList 처리
        	// 첨부파일명 edtAtchFileNm 컴포넌트 value("") 처리
        	this.divSingleFile01.form.fnClear();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnEnble.addEventHandler("onclick",this.btnEnble_onclick,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
        };
        this.loadIncludeScript("sampleSingleFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
