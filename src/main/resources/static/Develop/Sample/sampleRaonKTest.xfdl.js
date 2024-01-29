(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRaonK");
            this.set_titletext("RaonK샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSendFileGroupDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"256\"/><Column id=\"uploadType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileStatusDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"issueYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewer", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewerResult", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/><Column id=\"fileDtlSn\" type=\"INT\" size=\"256\"/><Column id=\"rs\" type=\"STRING\" size=\"256\"/><Column id=\"fn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtLog","10","312","600","108",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","379","12","156","37",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("업로드유형-필수");
            obj.set_background("yellow");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUploadType","379","stc00_00_00:5","156","43",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("M");
            obj.set_background("#ffffcc");
            obj.set_text("M");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaerch","edtUploadType:25","54","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("rkuModuleSample","13","110","800","195",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetUploadMode","817","70","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모드변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate","817","btnSetUploadMode:20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("동적생성");
            this.addChild(obj.name, obj);

            obj = new Button("btnHidden","817","btnCreate:20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Hidden");
            this.addChild(obj.name, obj);

            obj = new Button("btnShow","817","btnHidden:20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Show");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","817","btnShow:20","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn00");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","951","10","400","59",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("input 정보 - [dsSendFileGroupDetail]");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Grid("grd00","951","divH1:20","600","150",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsSendFileGroupDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"menuMgno\"/><Cell col=\"2\" text=\"uploadType\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:menuMgno\"/><Cell col=\"2\" text=\"bind:uploadType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divH1_00","661","329","1300","59",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","529","30",null,null,null,null,null,null,this.divH1_00.form);
            obj.set_taborder("0");
            obj.set_text("output 정보 2/2 - [dsFileDetail] - dsAtchFileDetail과 동일규격");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1_00.addChild(obj.name, obj);

            obj = new Grid("grd00_00","661","divH1_00:0","1000","220",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsFileDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"orgnlFileNm\"/><Cell col=\"3\" text=\"fileNm\"/><Cell col=\"4\" text=\"fileSz\"/><Cell col=\"5\" text=\"fileExtnNm\"/><Cell col=\"6\" text=\"regDt\"/><Cell col=\"7\" text=\"delYn\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:orgnlFileNm\"/><Cell col=\"3\" text=\"bind:fileNm\"/><Cell col=\"4\" text=\"bind:fileSz\"/><Cell col=\"5\" text=\"bind:fileExtnNm\"/><Cell col=\"6\" text=\"bind:regDt\"/><Cell col=\"7\" text=\"bind:delYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divH1_00_00","301","459","340","59",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20",null,"30","0",null,null,null,null,null,this.divH1_00_00.form);
            obj.set_taborder("0");
            obj.set_text("output 정보 1/2 - [dsFileStatusDetail]");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1_00_00.addChild(obj.name, obj);

            obj = new Grid("grd00_00_00","301","divH1_00_00:0",null,"90","grd00_00:20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsFileStatusDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"issueYn\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:issueYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","21","12","152","37",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일그룹키-옵션");
            obj.set_background("yellow");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno","21","stc00:5","152","41",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("FG00000586");
            obj.set_background("#ffffcc");
            obj.set_text("FG00000586");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","stc00:25","12","156","37",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("메뉴ID - 옵션");
            obj.set_background("yellow");
            obj.set_font("normal 900 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuMgno","edtFileGroupMgno:25","stc00_00:5","156","43",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("MN05020000");
            obj.set_background("#ffffcc");
            obj.set_text("MN05020000");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnSaerch:25","54","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("업무저장");
            obj.set_background("Aquamarine");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00","910","0","20","320",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","620","sta_Label_Top00:0","310","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00_00","620","sta_Label_Top:0","20","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top01","240","sta_Label_Top00_00:0","400","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top00_00_00","240","sta_Label_Top01:0","20","110",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top01_00","0","sta_Label_Top00_00_00:0","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1_00.form
            obj = new Layout("default","",0,0,this.divH1_00.form,function(p){});
            this.divH1_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1_00_00.form
            obj = new Layout("default","",0,0,this.divH1_00_00.form,function(p){});
            this.divH1_00_00.form.addLayout(obj.name, obj);

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
        this.registerScript("sampleRaonKTest.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleRaonK Form
        * FILE NAME     : sampleRaonK.xfdl
        * DESCRIPTION   : RaonK샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.22    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	- 초기화 (갯수, 파일사이즈, 확장자)
        	- 바인딩 데이터셋 처리??
        	- 기존 자료 로드 처리
        	- 다운로드(싱글,멀티,전체)
        	- 업로드
        	- 삭제기능
        	- callback 함수 기능
        	- resize 기능???

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
        	// this.rkuModuleSample.SetUploadMode("view"); /* 제거 후 alert 경고메세지 안뜸 - 20231130173900 */
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

        };


        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************



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
         * @description 업로드하기
        */
        this.fnUpload = function()
        {
        	var fileGroupMgno = this.dsFileStatusDetail.getColumn(0, "fileGroupMgno");
        	trace("[파일그룹식별키 확인하기][fileGroupMgno]["+fileGroupMgno+"]");


        	this.rkuModuleSample.AddFormData("fileGroupMgno", fileGroupMgno);
        	this.rkuModuleSample.Transfer();
        };

        /**
         * @description 다운로드
        */
        // this.btnDownload_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.rkuModuleSample.DownloadAllFile();
        // };

        /**
         * @description K Upload 객체의 생성이 완료되었을 때 발생하는 이벤트입니다.
        */
        this.rkuModuleSample_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace("rkuModuleSample_RAONKUPLOAD_CreationComplete");
        	trace("this.rkuModuleSample.Mode:"+this.rkuModuleSample.Mode);
        	trace("this.rkuModuleSample.MaxTotalFileCount:"+this.rkuModuleSample.MaxTotalFileCount);

        	// Mode
        	// 업로드를 편집모드, 보기모드로 설정합니다. 기본값은 'edit' 편집모드로 설정됩니다.  'edit or 빈값'이면 '편집모드'이고, 'view'로 설정시 보기모드 입니다.
        	// this.rkuModuleSample.SetUploadMode("view");

        	// MaxTotalFileCount
        	// 업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
        	this.rkuModuleSample.SetMaxTotalFileCount(0);		// 0 / 1

        	// MaxOneFileSize
        	// 업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	this.rkuModuleSample.SetMaxOneFileSize("3MB");		// 개당

        	// MaxTotalFileSize
        	// 업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	this.rkuModuleSample.SetMaxTotalFileSize("10MB");	// 전체

        	// ExtensionAllowOrLimit
        	// ExtensionArr에 설정한 확장자를 허용할지 제한할지 설정합니다. 0:제한 , 1: 허용
        	// ExtensionArr
        	// 제한 또는 허용할 파일 확장자를 ','(콤마)로 구분하여 설정합니다. (예 : txt,gif )
        	this.rkuModuleSample.SetAllowOrLimitExtension(1,"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON");

        	// ButtonBarEdit
        	// 업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
        	// move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
        	// 업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
        	// print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
        	// this.rkuModuleSample.SetButtonList("add,send,remove,remove_all,download,download_all");
        	// this.rkuModuleSample.SetButtonList("add,remove,remove_all,download,download_all");

        	//this.rkuModuleSample.SetConfig("HandlerUrl", "http://127.0.0.1:28080/irs/sevlet/raonk/handler.irs");

        	//alert(this.rkuModuleSample.GetConfig("HandlerUrl"));

        	this.rkuModuleSample.SetUploadMode(this.fvMode); /* 여기로 이동 */

        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 START ■■■■■■■■■■■■■■■■■■■■ */
        	this.fnSearchFileList();
        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 END ■■■■■■■■■■■■■■■■■■■■ */

        	trace("rkuModuleSample_RAONKUPLOAD_CreationComplete==========================end");
        };

        /**
         * @description K Upload 업로드 완료시 발생하는 이벤트입니다.
        */
        this.rkuModuleSample_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var listInfo = obj.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        	var newListArray = listInfo.newFile;			// 새로 업로드된 파일 정보
            var deleteListArray = listInfo.deleteFile;		// 삭제된 파일 정보
            var webListArray = listInfo.webFile;			// 웹파일 정보
        	var mergeListArray = listInfo.mergeFile;		// 신규추가된 파일과 웹파일을 함께 볼수 있는 정보


        	trace("[listInfo]["+JSON.stringify(listInfo)+"]");

        	console.log(listInfo.mergeFile);
        	//var deleteList =  obj.GetDeleteList("array");	// 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')

        	// 업로드 콤포넌트 로딩 후 초기값이 null로 설정되어 있음 - 로딩 직후 [전송하기] 버튼 클릭시
        	if(this.gfnIsNull(newListArray)) {
        		return false;
        	}

        	//var str = '\n--------------- 업로드 파일 정보 ---------------\n';
        	for(var i = 0; i < newListArray.length; i++){

        		var encodedRowJson = newListArray[i].responseCustomValue;
        		trace("[서버로부터 응답받은 업로드 파일정보]["+JSON.stringify(newListArray[i])+"]");

        		/* Base64 디코딩 */
        		var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        		trace("[디코딩 json]["+JSON.stringify(rowJson)+"]");

        		trace("[서버로부터 응답받은 업로드 파일정보]["+JSON.stringify(rowJson)+"]");

        		var fileMgno = rowJson.fileMgno;
        		var fileIdx = this.dsFileDetail.findRow("fileMgno", fileMgno);
        		trace("[fileIdx]["+fileIdx+"]");

        		/* [newFile]에 이미 업로드한 파일이 존재하면 */
        		if(fileIdx > -1) {
        			continue;
        		}
        		trace("[데이터셋에 파일 추가하기]["+fileIdx+"]");

        		trace("[▶▶▶▶▶▶▶▶ rowJson.orgnlFileNm]["+rowJson.orgnlFileNm+"]");

        		var nRow = this.dsFileDetail.addRow();

        		trace("[▶▶▶▶▶▶▶▶ nRow]["+nRow+"]");
        		this.dsFileDetail.setColumn(nRow, "fileGroupMgno", rowJson.fileGroupMgno);
        		this.dsFileDetail.setColumn(nRow, "fileMgno"     , rowJson.fileMgno     );
        		this.dsFileDetail.setColumn(nRow, "orgnlFileNm"  , rowJson.orgnlFileNm  );
        		this.dsFileDetail.setColumn(nRow, "fileNm"       , rowJson.fileNm       );
        		this.dsFileDetail.setColumn(nRow, "fileSz"       , rowJson.fileSz       );
        		this.dsFileDetail.setColumn(nRow, "fileExtnNm"   , rowJson.fileExtnNm   );
        		this.dsFileDetail.setColumn(nRow, "regDt"        , rowJson.regDt        );
        		this.dsFileDetail.setColumn(nRow, "delYn"        , rowJson.delYn        );

        		//str += newListArray[i].uploadPath + "\n";
        	}



        	this.txtLog.set_value(JSON.stringify(listInfo));

        	//var newList = obj.GetNewUploadList("array");	// 전송완료 후 새롭게 업로드 된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        	//this.txtLog.set_value(JSON.stringify(newList));


        };

        /**
         * @description K Upload 에서 오류가 있는 경우 발생하는 이벤트입니다.
        */
        this.rkuModuleSample_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	// 에러가 발생할 경우 발생합니다.
        	var param = paramObj.userdata;  // 에러에 대한 정보가 있는 object 입니다.

        	var str = "\n---------- RAONKUPLOAD_OnError ----------";
        	str += "\n"+ param.strCode;	//Error Code
        	str += "\n"+ param.strMessage;	//Error Message

        	this.txtLog.set_value(str);

        	// 처리중 오류가 발생하였습니다.
        	this.gfnShowMessage(this, "E000001", "");

        };

        /**
         * @description 모드변경
        */
        this.fvMode = "edit";
        this.btnSetUploadMode_onclick = function(obj,e)
        {
        	// edit / view
        	var sMode = "";
        	if(this.fvMode == "edit")
        	{
        		this.fvMode = "view";
        	}
        	else
        	{
        		this.fvMode = "edit";
        	}
        	this.rkuModuleSample.SetUploadMode(this.fvMode);
        };

        /**
         * @description 동적생성
        */
        this.btnCreate_onclick = function(obj,e)
        {
        /*
            // 해당 config 이외의 설정도 가능합니다. (www.raonk.com > 개발센터 참조)
            var uploadConfig = {
                Id: "kupload",
                UploadHolder: "component_holder",
                IgnoreSameUploadName: "1"
                //InitXml: "raonkupload.config.xml",
                //SkinName: "blue",
                //Width: "200px",
                //Height: "500px",
                //MaxTotalFileSize: "20GB",
                //MaxOneFileSize: "20KB",
                //MaxTotalFileCount: "9",
                //MultiFileSelect: false,
                //ExtensionAllowOrLimit: "0",
                //ExtensionArr: "png",
                //FolderNameRule: "/uploadfolder",
                //Mode: "view", // edit, view
                //ButtonBarEdit: "add,send,remove,remove_all",
                //ButtonBarView: "open,download,download_all", // 0 일경우 버튼바 보이지 않음.
                //Lang: "en-us", // ko-kr, en-us, ja-jp, zh-cn, zh-tw
                //IgnoreSameUploadName: "1"
            };
            var upload = new RAONKUpload( uploadConfig );

        	this.rkuModuleSample.SetConfig("HandlerUrl", "http://www.raonk.com/handler2.ashx", "upload1");
        */
        	var objRaonK = new RaonkUpload();
         	objRaonK.init("rkuModule", 60, 470, 890, 200, null, null);
        // 	objRaonK.name

        	// objRaonK.SetConfig("Id", "rkuModule02");

        	//trace("objRaonK.Id:"+objRaonK.Id);

        	// objRaonK.on_create_contents();

        	// this.rkuModuleSample.AgentAdminBufferSize(5MB)
        	/*
        	MaxOneFileSize
        	업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	MaxTotalFileCount
        	업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
        	MaxTotalFileSize
        	업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	*/
        	this.addChild("rkuModule", objRaonK);

        	objRaonK.show();

        	// objRaonK.SetUploadMode("view");
        	objRaonK.addEventHandler("RAONKUPLOAD_CreationComplete", this.rkuModule_RAONKUPLOAD_CreationComplete, this);


        	// this.fnCreateAfter(objRaonK);

        	// trace(objRaonK.GetUploadByName("rkuModule02"));
        	trace("======================");
        };

        /**
         * @description K Upload 객체의 생성이 완료되었을 때 발생하는 이벤트입니다.
        */
        this.rkuModule_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace("rkuModule_RAONKUPLOAD_CreationComplete");
        	trace("obj.Mode:"+obj.Mode);
        	trace("obj.MaxTotalFileCount:"+obj.MaxTotalFileCount);

        	// Mode
        	// 업로드를 편집모드, 보기모드로 설정합니다. 기본값은 'edit' 편집모드로 설정됩니다.  'edit or 빈값'이면 '편집모드'이고, 'view'로 설정시 보기모드 입니다.
        	obj.SetUploadMode("view");

        	/*
        	// MaxTotalFileCount
        	// 업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
        	obj.SetMaxTotalFileCount(0);		// 0 / 1

        	// MaxOneFileSize
        	// 업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	obj.SetMaxOneFileSize("3MB");		// 개당

        	// MaxTotalFileSize
        	// 업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	obj.SetMaxTotalFileSize("3MB");	// 전체

        	// ExtensionAllowOrLimit
        	// ExtensionArr에 설정한 확장자를 허용할지 제한할지 설정합니다. 0:제한 , 1: 허용
        	// ExtensionArr
        	// 제한 또는 허용할 파일 확장자를 ','(콤마)로 구분하여 설정합니다. (예 : txt,gif )
        	obj.SetAllowOrLimitExtension(1,"JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON");

        	// ButtonBarEdit
        	// 업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
        	// move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
        	// 업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
        	// print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
        	obj.SetButtonList("add,send,remove,remove_all,download,download_all");
        	obj.SetButtonList("add,send,remove,remove_all,download,download_all");

        	*/


        	trace("rkuModule_RAONKUPLOAD_CreationComplete==========================end");
        };

        /**
         * @description K Upload 객체가 생성되기 전에 발생하는 이벤트입니다. 페이지에따라 업로드 설정을 변경하고 싶을 경우 사용합니다.
        */
        this.rkuModuleSample_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        	trace("[rkuModuleSample_RAONKUPLOAD_BeforeCreation]========================");
        	trace("this.rkuModuleSample.Mode:"+this.rkuModuleSample.Mode);
        	//this.rkuModuleSample.SetUploadMode("view"); /* 제거 후 alert 경고메세지 안뜸 - 20231130173900 */

        };

        /**
         * @description 숨기기
        */
        this.btnHidden_onclick = function(obj,e)
        {
        	// this.rkuModuleSample.Hidden();
        	this.rkuModuleSample.set_visible(false);
        };

        /**
         * @description 보이기
        */
        this.btnShow_onclick = function(obj,e)
        {
        	// this.rkuModuleSample.Show();
        	this.rkuModuleSample.set_visible(true);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var allListArray = this.rkuModuleSample.GetListInfo("json");
        	trace("allListArray:"+allListArray);
        	// JSON.parse(allListArray);
        	trace(JSON.stringify(allListArray));
        	/*
        	{"newFile":{
        		"originalName":["8월_PC바이러스검사(손석훈).png","8월_PC바이러스검사(손석훈)_투입.png"]
        		,"uploadName":["",""]
        		,"size":["945599","931960"]
        		,"uploadPath":["",""]
        		,"status":["ready","ready"]
        		,"logicalPath":["",""]
        		,"extension":["png","png"]
        		,"localPath":["C:\\Users\\admin\\Pictures\\8월_PC바이러스검사(손석훈).png","C:\\Users\\admin\\Pictures\\8월_PC바이러스검사(손석훈)_투입.png"]
        		,"customValue":["",""]
        		,"responseCustomValue":["",""]
        		,"isLargeFile":["0","0"]
        		,"order":["0","1"]
        		,"lastModifiedDate":["2023.08.25 14:57:38","2023.08.21 15:14:19"]
        		,"mimeType":["image/png","image/png"]
        		,"hashValue":["",""]
        		,"extraDataObject":["",""]
        		,"isFolder":["0","0"]
        		,"transferId":["",""]
        		,"fileId":["",""]
        		,"skippedUploadedFile":["0","0"]
        		},
        	"deleteFile":null,
        	"webFile":null,
        	"mergeFile":{"isWebFile":["0","0"],"uniqKey":["",""],"originalName":["8월_PC바이러스검사(손석훈).png","8월_PC바이러스검사(손석훈)_투입.png"],"uploadName":["",""],"size":["945599","931960"],"uploadPath":["",""],"status":["ready","ready"],"logicalPath":["",""],"extension":["png","png"],"localPath":["C:\\Users\\admin\\Pictures\\8월_PC바이러스검사(손석훈).png","C:\\Users\\admin\\Pictures\\8월_PC바이러스검사(손석훈)_투입.png"],"customValue":["",""],"responseCustomValue":["",""],"isLargeFile":["0","0"],"order":["0","1"],"lastModifiedDate":["2023.08.25 14:57:38","2023.08.21 15:14:19"],"mimeType":["image/png","image/png"],"hashValue":["",""],"extraDataObject":["",""],"isFolder":["",""],"transferId":["",""],"fileId":["",""],"skippedUploadedFile":["0","0"]}
        	}
        	*/

        	/*
        	var newListArray = allListArray.newFile;
        	var deleteListArray = allListArray.deleteFile;
        	var webListArray = allListArray.webFile;
        	trace("newListArray:"+newListArray);
        	*/
        };


        /* ■■■■■■■■■■■■■■■■■■■■ 여기부터 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ■■■■■■■■■■■■■■■■■■■■ */
        /* ■■■■■■■■■■■■■■■■■■■■ 여기부터 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ■■■■■■■■■■■■■■■■■■■■ */
        /* ■■■■■■■■■■■■■■■■■■■■ 여기부터 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ■■■■■■■■■■■■■■■■■■■■ */
        /* ■■■■■■■■■■■■■■■■■■■■ 여기부터 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ■■■■■■■■■■■■■■■■■■■■ */
        /* ■■■■■■■■■■■■■■■■■■■■ 여기부터 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ■■■■■■■■■■■■■■■■■■■■ */





        /**
         * @description 파일목록 선조회
        */
        this.fnSearchFileList = function()
        {
        	var fileGroupMgno = this.edtFileGroupMgno.value;			//테스트데이터 - 파일그룹식별키 - 옵션, 없으면 채번프로세스, 있으면 조회프로세스로 처리됨 ☆★☆★☆★☆★
        	var menuMgno = this.edtMenuMgno.value;						//테스트데이터 - 메뉴ID - 옵션, 없으면 공백
        	var uploadType = this.edtUploadType.value;				//테스트데이터 - 업로드유형 [M|S] - 필수 설정

        	this.dsSendFileGroupDetail.clearData();
        	this.dsSendFileGroupDetail.insertRow(0);
        	this.dsSendFileGroupDetail.setColumn(0, "fileGroupMgno"  , fileGroupMgno     );		// 파일그룹일련번호 - 기본값 : 공백
        	this.dsSendFileGroupDetail.setColumn(0, "menuMgno"       , menuMgno          );		// 메뉴ID - 메뉴ID 또는 공백
        	this.dsSendFileGroupDetail.setColumn(0, "uploadType"     , uploadType        );		// 업로드유형 - [필수] S 또는 M

        	// 혹시몰라 초기화
        	this.dsFileDetail.clearData();
        	this.dsFileStatusDetail.clearData();

        	// Raonkupload 콤포넌트 - 초기화
        	this.rkuModuleSample.ResetUpload();

        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 1/2 START ■■■■■■■■■■■■■■■■■■■■ */
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectFileList";
        	objArgs.url 			= "/common/raonk/selectFileList.irs";
         	objArgs.inds      		= "dsSendFileGroupDetail=dsSendFileGroupDetail";
         	objArgs.outds     		= "dsFileDetail=dsFileDetail dsFileStatusDetail=dsFileStatusDetail dsSendFileGroupDetail=dsSendFileGroupDetail";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 1/2 END ■■■■■■■■■■■■■■■■■■■■ */
        };

        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");

        		switch (nErrCode)
        		{
        			case -1 :
        				// 후처리 코드

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "selectFileList" :
        			// 후처리 코드
        			/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 2/2 START ■■■■■■■■■■■■■■■■■■■■ */

        			// 파일그룹식별키 채번(=신규발급)여부
        			var issueYn = this.dsFileStatusDetail.getColumn(0, "issueYn");

        			/* 채번되지 않은경우 => 파일목록 조회결과가 데이터셋에 담겨 있는 경우 */
        			if(issueYn == "N") {

        				this.dsFileDetail.set_enableevent(false);

        				for (var i = 0; i < this.dsFileDetail.rowcount; i++) {
        					// [1번째 파라미터] - 파일 Unique Key
        					var fileMgno = this.dsFileDetail.getColumn(i, "fileMgno");

        					var orgnlFileNm = this.dsFileDetail.getColumn(i, "orgnlFileNm");
        					var fileExtnNm = this.dsFileDetail.getColumn(i, "fileExtnNm");

        					// [2번째 파라미터] - 파일 이름
        					var fileName = this.gfnIsNull(fileExtnNm) ? orgnlFileNm : orgnlFileNm + "." + fileExtnNm;

        					// [3번째 파라미터] - 파일 위치(웹경로)
        					var filePath = "";

        					// [4번째 파라미터] - 파일 크기
        					var fileSize = this.dsFileDetail.getColumn(i, "fileSz");

        					// [5번째 파라미터] - Custom Download 사용시 사용될 값을 포함한 String값을 의미합니다.
        					var fileGroupMgno = this.dsFileDetail.getColumn(i, "fileGroupMgno");
        					var customValueJsonString = JSON.stringify({ "fileGroupMgno" : fileGroupMgno, "fileMgno" : fileMgno });

        					/* Base64 인코딩 */
        					var customValue = btoa(unescape(encodeURIComponent(customValueJsonString)));

        					this.rkuModuleSample.AddUploadedFile(fileMgno, fileName, filePath, fileSize, customValue);
        				}
        				this.dsFileDetail.set_enableevent(true);



        				/* 파일정보 확인하기 */
        				var listInfo = this.rkuModuleSample.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        				this.txtLog.set_value("[조회결과]"+JSON.stringify(listInfo));

        			/* 채번된 경우 - 업무화면에서 활용 */
        			} else {

        				this.edtFileGroupMgno.set_value(this.dsFileStatusDetail.getColumn(0, "fileGroupMgno"));

        				/* 파일정보 확인하기 */
        				var listInfo = this.rkuModuleSample.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        				this.txtLog.set_value("[채번-파일정보확인]"+JSON.stringify(listInfo));
        			}

        			/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 2/2 END ■■■■■■■■■■■■■■■■■■■■ */
        			break

        		case "saveTestFile" :
        			/* ■■■■■■■■■■■■■■■■■■■■ 테스트용 업무저장처리 ■■■■■■■■■■■■■■■■■■■■ */
        			this.gfnShowMessage(this, ["Confirm","재조회 하기"], "", function(svcid, variant) {
        				if(variant == "OK") {
        					this.fnSearchFileList();
        				} else {
        					//alert("완료 - 재조회 X");
        				}
        			});
        			// 후처리 코드
        			break;


        			/* ■■■■■■■■■■■■■■■■■■■■ 문서 미리보기 띄우기 START ■■■■■■■■■■■■■■■■■■■■ */
        		case "statisticsPop" :
        			// 후처리 코드
        			trace(this.dsViewerResult.saveXML());
        			var result = this.dsViewerResult.getColumn(0, "result");
        			trace("[result]["+result+"]");

        			if(result == "Y")
        			{
        				var sUrl = this.fvApp.ViewerInfo.viewerUrl+"/doc.html";
        				var sFn = this.dsViewerResult.getColumn(0, "fn");
        				var sRs = this.dsViewerResult.getColumn(0, "rs");

        				var sPopupId	= "docViewerPop";
        				var sPopupUrl	= "Frame_Popup::comDocViewerPop.xfdl";
        				var objArgs		= {pvUrl:sUrl, pvFn:sFn, pvRs:sRs};
        				var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"DocViewer"};

        				this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        			}
        			break;
        			/* ■■■■■■■■■■■■■■■■■■■■ 문서 미리보기 띄우기 END ■■■■■■■■■■■■■■■■■■■■ */













        		default:
        			break;
        	}
        };

        /**
         * @description K Upload에 파일이 모두 추가 완료되었을 때 발생하는 이벤트입니다.(전체파일)
         */
        this.rkuModuleSample_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	trace("파일이 모두 추가 완료되었을 때");
        	this.fnUpload();			// 업로드하기
        };

        this.rkuModuleSample_RAONKUPLOAD_DeleteAllFile = function(obj, paramObj)
        {
        	trace("K Upload에 파일이 모두 삭제 완료되었을 때 발생하는 이벤트입니다.(전체파일)");
        	var listInfo = obj.GetListInfo("array");
        	var deleteListArray = listInfo.deleteFile;		// 삭제된 파일 정보

        	var mergeListArray = listInfo.mergeFile;		// 신규추가된 파일과 웹파일을 함께 볼수 있는 정보

        	/* mergeList는 화면에 출력되고 있는 최종정보 이므로 존재하지 않으면 [dsFileDetail] 데이터셋의 행을 모두 삭제한다. */
        	if(this.gfnIsNull(mergeListArray) || mergeListArray.length == 0) {
        		this.dsFileDetail.deleteAll();
        		return false;
        	}

        	var deleteRowIndexArray = [];

        	for (var i = 0; i < this.dsFileDetail.rowcount; i++) {
        		deleteRowIndexArray[i] = i;
        	}

        	for(var i = 0; i < mergeListArray.length; i++){

        		var fileMgno = "";

        		// 업로드된 파일정보는 responseCustomValue.fileMgno 에 신규 채번된 파일상세키가 설정되어 있다.
        		if(this.gfnIsNull(mergeListArray[i].uniqKey)) {
        			var encodedRowJson = mergeListArray[i].responseCustomValue;

        			/* Base64 디코딩 */
        			var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        			fileMgno = rowJson.fileMgno;

        		// 서버로 부터 조회된 파일정보는 uniqKey 에 파일상세키가 설정되어 있다.
        		} else {
        			fileMgno = mergeListArray[i].uniqKey;
        		}

        		var nRow = this.dsFileDetail.findRow("fileMgno", fileMgno);

        		/* 업로드 영역에 해당하는 삭제대상 인덱스정보 생성하기 - [deleteRowIndexArray] 삭제 대상 인덱스정보에서 유효 인덱스정보는 제거 */
        		deleteRowIndexArray = deleteRowIndexArray.filter((element) => element !== nRow);
        	}

        	/* 삭제대상 인덱스정보로 [dsFileDetail] 데이터셋에서 삭제 처리 한다. */
        	for (var i = deleteRowIndexArray.length - 1; i >= 0; i--) {
        		this.dsFileDetail.deleteRow(deleteRowIndexArray[i]);
        	}


        	this.txtLog.set_value("[삭제후]"+JSON.stringify(listInfo));


        };

        /**
         * @description 조회하기
        */
        this.btnSaerch_onclick = function(obj,e)
        {
        	this.fnSearchFileList();
        };

        /**
         * @description 업무저장
        */
        this.btnSave_onclick = function(obj,e)
        {
        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 1/2 START ■■■■■■■■■■■■■■■■■■■■ */
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "saveTestFile";
        	objArgs.url 			= "/common/raonk/saveTestFile.irs";
         	objArgs.inds      		= "dsSendFileGroupDetail=dsSendFileGroupDetail dsFileDetail=dsFileDetail";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        	/* ■■■■■■■■■■■■■■■■■■■■ 파일목록 선조회 1/2 END ■■■■■■■■■■■■■■■■■■■■ */
        };

        /**
         * @description 커스텀버튼
        */
        this.rkuModuleSample_RAONKUPLOAD_CustomAction = function(obj, paramObj)
        {
        	if(paramObj.userdata.command == "custom_viewer") {

        		/* 체크박스로 선택된 파일정보 불러오기 */
        		var selectedListInfo = obj.GetSelectedListInfo();

        		var newListArray = selectedListInfo.newFile;			// 새로 업로드된 파일 정보 - 업로로 올린 파일정보
        		var webListArray = selectedListInfo.webFile;			// 웹파일 정보 - 조회된 파일정보

        		var selectedFileCount = 0;
        		var fileInfo = null;
        		if(!this.gfnIsNull(newListArray)) {
        			trace("신규파일");
        			selectedFileCount += newListArray.length;

        			var encodedRowJson = newListArray[0].responseCustomValue;
        			/* Base64 디코딩 */
        			var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        			trace("[responseCustomValue]["+JSON.stringify(rowJson)+"]");

        			/* 신규파일 - 문서미리보기를 위한 파일식별 정보 추출하기 */
        			fileInfo = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        		}
        		if(!this.gfnIsNull(webListArray)) {
        			trace("조회파일");
        			selectedFileCount += webListArray.length;
        			fileInfo = webListArray[0];

        			var encodedRowJson = webListArray[0].customValue;
        			/* Base64 디코딩 */
        			var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        			trace("[customValue]["+JSON.stringify(rowJson)+"]");

        			/* 조회파일 - 문서미리보기를 위한 파일식별 정보 추출하기 */
        			fileInfo = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        		}

        		/* 1건이 아니라면 문서미리보기 실행 불가 */
        		if(selectedFileCount == 0) {
        			alert("선택한 파일이 없습니다.");				// 제품과 동일한 alert메세지 띄우도록 alert함수 사용 - this.gfnShowMessage(this, ["Alert","선택한 파일이 없습니다."], "");
        		} else if(selectedFileCount == 1) {
        			// 문서 미리보기 띄우기
        			this.fnCallDocViewerPopup(fileInfo);
        		} else {
        			alert("파일을 1건만 선택하세요.");				// 제품과 동일한 alert메세지 띄우도록 alert함수 사용 - this.gfnShowMessage(this, ["Alert","파일을 1건만 선택하세요."], "");
        		}
        	}
        };

        /**
         * @description 문서 미리보기 띄우기
         */
        this.fnCallDocViewerPopup = function(fileInfo)
        {
        	this.dsViewer.clearData();
        	var nRow = this.dsViewer.addRow();

        	// 조회조건 셋팅
        	this.dsViewer.setColumn(nRow, "fileGroupMgno", fileInfo.fileGroupMgno);
        	this.dsViewer.setColumn(nRow, "fileMgno", fileInfo.fileMgno);

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "statisticsPop";
        	objArgs.url 			= "/common/viewer.irs";
        	objArgs.inds			= "dsSendViewer=dsViewer";
        	objArgs.outds			= "dsViewerResult=dsViewer";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSaerch.addEventHandler("onclick",this.btnSaerch_onclick,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_OnError",this.rkuModuleSample_RAONKUPLOAD_OnError,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_UploadComplete",this.rkuModuleSample_RAONKUPLOAD_UploadComplete,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_BeforeCreation",this.rkuModuleSample_RAONKUPLOAD_BeforeCreation,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_CreationComplete",this.rkuModuleSample_RAONKUPLOAD_CreationComplete,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.rkuModuleSample_RAONKUPLOAD_AfterAddAllFile,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_DeleteAllFile",this.rkuModuleSample_RAONKUPLOAD_DeleteAllFile,this);
            this.rkuModuleSample.addEventHandler("RAONKUPLOAD_CustomAction",this.rkuModuleSample_RAONKUPLOAD_CustomAction,this);
            this.btnSetUploadMode.addEventHandler("onclick",this.btnSetUploadMode_onclick,this);
            this.btnCreate.addEventHandler("onclick",this.btnCreate_onclick,this);
            this.btnHidden.addEventHandler("onclick",this.btnHidden_onclick,this);
            this.btnShow.addEventHandler("onclick",this.btnShow_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.stc00.addEventHandler("onclick",this.stc00_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.sta_Label_Top00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.sta_Label_Top00_00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.sta_Label_Top01.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.sta_Label_Top00_00_00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.sta_Label_Top01_00.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
        };
        this.loadIncludeScript("sampleRaonKTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
