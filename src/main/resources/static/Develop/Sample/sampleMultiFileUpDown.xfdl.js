(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMultiFileUpDown");
            this.set_titletext("Multi 파일관련 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWork", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"workInfo01\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo02\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileGroupMgno\">FG00000153</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01_00_01","10","15","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Multi 첨부파일 샘플");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail01","0","78",null,"220","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","67",null,"141","30",null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("1");
            obj.set_text("업무정보 조회");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabelTop","0","67",null,"1","30",null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","0","80","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Button("btnEnble","798","0","90","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("4");
            obj.set_text("버튼 Enable");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabel03","474","0","70","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("5");
            obj.set_text("버튼제어");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Combo("cboBtnNm","557","0","130","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divDetail01_form_cboBtnNm_innerdataset = new nexacro.NormalDataset("divDetail01_form_cboBtnNm_innerdataset", obj);
            divDetail01_form_cboBtnNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">DEL</Col><Col id=\"datacolumn\">행삭제</Col></Row><Row><Col id=\"codecolumn\">UPLOAD</Col><Col id=\"datacolumn\">파일찾기</Col></Row><Row><Col id=\"codecolumn\">FULLDOWN</Col><Col id=\"datacolumn\">전체다운로드</Col></Row></Rows>");
            obj.set_innerdataset(divDetail01_form_cboBtnNm_innerdataset);
            obj.set_text("UPLOAD");
            obj.set_value("UPLOAD");
            obj.set_index("0");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Combo("cboEnable","698","0","90","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divDetail01_form_cboEnable_innerdataset = new nexacro.NormalDataset("divDetail01_form_cboEnable_innerdataset", obj);
            divDetail01_form_cboEnable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(divDetail01_form_cboEnable_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Button("btnClear","956","0","90","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabel02","0","67","150","141",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("9");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Div("divMultiFile01","155","73","800","128",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("10");
            obj.set_url("Frame_Common::comMultiFile.xfdl");
            obj.set_text("");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Div("divDetail02","0","divDetail01:10",null,"209","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail02.form);
            obj.set_taborder("0");
            obj.set_text("업무정보 저장");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail02.addChild(obj.name, obj);

            obj = new Button("btnSave","324","0","88","32",null,null,null,null,null,null,this.divDetail02.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divDetail02.addChild(obj.name, obj);

            obj = new Grid("grdFileDetail","0","43","1566","115",null,null,null,null,null,null,this.divDetail02.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsWork");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"workInfo01\"/><Cell col=\"3\" text=\"workInfo02\"/><Cell col=\"4\" text=\"workInfo03\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:workInfo01\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:workInfo02\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:workInfo03\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail01.form.divMultiFile01
            obj = new Layout("default","",0,0,this.divDetail01.form.divMultiFile01.form,function(p){});
            this.divDetail01.form.divMultiFile01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail01.form
            obj = new Layout("default","",0,0,this.divDetail01.form,function(p){});
            this.divDetail01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail02.form
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comMultiFile.xfdl");
        };
        
        // User Script
        this.registerScript("sampleMultiFileUpDown.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleMultiFileUpDown Form
        * FILE NAME     : sampleMultiFileUpDown.xfdl
        * DESCRIPTION   : Multi 파일관련 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.11.09    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	// 초기화 호출
        	fnInitMultiFile
        		업무데이터셋의 파일정보컬럼을 공통 Multi 첨부파일 div 에 전달해 초기화 작업을 한다.
        		추가로 callback 처리옵션을 추가한다.
        		파일관련 사이즈, 제한확장자 정보가 기본 정보와 다를 경우 추가한다.
        		등록이 아닌 경우 sMode:"SEARCH" 를 추가한다. (파일정보 후처리시 버튼제어를 위해)

        	var objParam = { objDs:this.dsWork									// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnMultiFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFile01"							// 콜백ID , 필요시 추가
        					,sUpldFileSize:1024 * 1024 * 3						// 각 파일 최대사이즈 (3 Mbyte) , 없으면 공통내부 정의에 따름
        					,sUpldFileExtNm:"/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON"	// 업로드파일확장자명 , 없으면 공통내부 정의에 따름
        					,sMode:"REG"										// 사용모드 , 없으면 공통내부 정의에 따름 (REG - 등록 (default) / SEARCH - 조회)
        				   };

        	this.divDetail01.form.divMultiFile01.form.fnInitMultiFile(this, objParam);

        	// 업무정보 조회 후 파일정보 조회 호출
        	fnSearchMultiFile
        		업무데이터셋 조회 후 파일관련 key정보(fileGroupMgno) 가 있을 경우 공통 Multi 첨부파일 div의 fnSearchMultiFile 함수 호출을
        		하면 공통에서 파일 관련 정보 조회 및 처리를 한다.

        	// 공통 Multi 첨부파일 div에서 파일 관련 변경시
        		바인딩 정보를 바탕으로 정보값 셋팅
        		콜백함수가 있을 경우 콜백호출 (objRtn 정보)
        			sDiv - ADD : 추가, DEL : 삭제 , UPLOAD : 업로드 성공후
        			nHeight - 추가/삭제에 따른 변경 사이즈 값 (행삭제시 음수값 전달됨)
        			objDs - this.dsAtchFileDetail (파일정보 데이터셋)

        			sDiv 가 ADD , DEL 인 경우에는 nHeight 값 만큼 공통 div 가 변경되었으니 업무에서 위치조정 관련 코드가
        			필요한 경우 후처리 코드를 기술하시기 바랍니다.

        	// 업무저장 처리

        	// 초기화가 필요한 경우
        		파일 관련 Dataset(dsAtchFileDetail) , 첨부파일전송관련, Grid Height , 공통 Div 폼 Height 초기화
        		this.fnClear()
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
        	trace("[sampleMultiFileUpDown]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// comMultiFile01
        	var objParam = { objDs:this.dsWork									// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnMultiFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFile01"							// 콜백ID , 필요시 추가
        					,sUpldFileSize:1024 * 1024 * 3						// 각 파일 최대사이즈 (3 Mbyte) , 없으면 공통내부 정의에 따름
        					,sUpldFileExtNm:"/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON"	// 업로드파일확장자명 , 없으면 공통내부 정의에 따름
        					,sMode:"REG"										// 사용모드 , 없으면 공통내부 정의에 따름 (REG - 등록 (default) / SEARCH - 조회)
        				   };

        	this.divDetail01.form.divMultiFile01.form.fnInitMultiFile(this, objParam);

        	// 버튼 초기 제어 (enable)
        	// 공통초기셋팅 - DEL (행삭제) : false / UPLOAD (파일찾기) : true / FULLDOWN (전체다운로드) : false
        	// 조회일때 전체다운로드 버튼만 가능하게 하려고 할 경우
        	/*
        	this.divDetail01.form.divMultiFile01.form.fnEnable("DEL", false);
        	this.divDetail01.form.divMultiFile01.form.fnEnable("UPLOAD", false);
        	this.divDetail01.form.divMultiFile01.form.fnEnable("FULLDOWN", true);
        	*/
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnMultiFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "multiFile01" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("[fnMultiFileCallback]objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// ADD : 행추가, DEL : 행삭제 , UPLOAD : 업로드 성공후
        			trace("objRtn.nHeight:"+objRtn.nHeight);			// ADD : 행추가 / DEL : 행삭제 시 변경 높이값 (행삭제시 음수값 전달됨)
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			if(objRtn.sDiv == "ADD" || objRtn.sDiv == "DEL")
        			{
        				this.divDetail01.form.stcLabel02.set_height(nexacro.toNumber(this.divDetail01.form.stcLabel02.getOffsetHeight())+objRtn.nHeight);
        				this.divDetail01.form.stcBg01.set_height(nexacro.toNumber(this.divDetail01.form.stcBg01.getOffsetHeight())+objRtn.nHeight);
        				this.divDetail01.form.divMultiFile01.set_height(nexacro.toNumber(this.divDetail01.form.divMultiFile01.getOffsetHeight())+objRtn.nHeight);
        				this.divDetail01.form.resetScroll();
        				this.divDetail01.set_height(nexacro.toNumber(this.divDetail01.getOffsetHeight()+objRtn.nHeight));
        				this.resetScroll();
        			}
        			else if(objRtn.sDiv == "UPLOAD")
        			{

        			}
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
        				this.divDetail01.form.divMultiFile01.form.fnSearchMultiFile(sFileGroupMgno);
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
        	// 버튼 제어 (enable)
        	// 공통초기셋팅 - DEL (행삭제) : true / UPLOAD (파일찾기) : true / FULLDOWN (전체다운로드) : false
        	// this.divDetail01.form.cboBtnNm.value : DEL (행삭제) / UPLOAD (파일찾기) / FULLDOWN (전체다운로드)
        	// this.divDetail01.form.cboEnable.value : true / false
        	// ex. this.divDetail01.form.divMultiFile01.form.fnEnable("DEL", false);
        	this.divDetail01.form.divMultiFile01.form.fnEnable(this.divDetail01.form.cboBtnNm.value, this.divDetail01.form.cboEnable.value);
        };

        /**
         * @description 첨부파일 clear 처리
        */
        this.btnClear_onclick = function(obj,e)
        {
        	// dsAtchFileDetail 데이터셋 clearData 처리
        	// futUpload 컴포넌트 clearFileList 처리
        	// grdFileList 파일그리드 높이 초기화
        	// div 공통폼 높이 초기화
        	this.divDetail01.form.divMultiFile01.form.fnClear();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail01.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divDetail01.form.btnEnble.addEventHandler("onclick",this.btnEnble_onclick,this);
            this.divDetail01.form.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.divDetail01.form.stcLabel02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDetail02.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("sampleMultiFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
