(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testFileUpload1");
            this.set_titletext("multi 파일업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static11","53","83","600","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WFDA_Line");
            obj.set_background("cyan");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileUpLoad","440","86","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDownLoad","btnAtchFileUpLoad:-1","86","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_FileDown");
            obj.set_text("전체다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDel","btnAtchFileDownLoad:-1","86","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_text("X");
            obj.set_color("red");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","53","540","1100","132",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSendFileDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"382\"/><Column size=\"397\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:fileMgno\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","53","493","1100","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전송할 파일정보 확인 - 업무 dataset");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","53","313","1100","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일정보");
            obj.set_background("cyan");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","53","351","1100","132",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsFileDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"215\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"orgnlFileNm\"/><Cell col=\"3\" text=\"fileNm\"/><Cell col=\"4\" text=\"fileSz\"/><Cell col=\"5\" text=\"fileExtnNm\"/><Cell col=\"6\" text=\"regDt\"/><Cell col=\"7\" text=\"delYn\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:orgnlFileNm\"/><Cell col=\"3\" text=\"bind:fileNm\"/><Cell col=\"4\" text=\"bind:fileSz\"/><Cell col=\"5\" text=\"bind:fileExtnNm\"/><Cell col=\"6\" text=\"bind:regDt\"/><Cell col=\"7\" text=\"bind:delYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button_multiSave","790","112","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("multi 최종저장");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiFileUpDown","53","122","600","170",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("griduserproperty").set("checkbox,no");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFileDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"73\"/><Column size=\"78\"/><Column size=\"101\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:orgnlFileNm\"/><Cell col=\"1\" text=\"bind:fileSz\"/><Cell col=\"2\" text=\"bind:regDt\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileGroupMgno","53","47","146","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("FG00000010");
            obj.set_text("FG00000010");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","220","50","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_text("기존 업로드 파일 조회");
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
        this.registerScript("FileUploadMulti.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFile Form
        * FILE NAME     : sampleFile.xfdl
        * DESCRIPTION   : 파일관련 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.09.05    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	- 조회 후 수정/삭제/추가 시 처리 코드 추가 필요
        	- 파일 관리 정책에 대한 추가 적용 필요
        	- 공통화 부분에 대한 정리 및 구현 필요
        */

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/

        // multi 업로드 상태값 - default : 업로드 가능
        this.isPosibleMultiUpload = true;

        this.fvUpldFileSize = 1024 * 1024 * 3;			//각 파일 최대사이즈 (3 Mbyte)
        this.fvUpldFileExtNm = "/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON";			// 업로드파일확장자명

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
        	//다운로드 버튼 비활성화, 삭제버튼 비활성화
        	this.btnAtchFileDownLoad.set_enable(false);
        	this.btnAtchFileDel.set_enable(false);

        	trace("[sampleFile]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        };



        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnMultiListCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();

        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {

        		//다운로드 버튼 비활성화, 삭제버튼 비활성화
        		this.btnAtchFileDownLoad.set_enable(false);
        		this.btnAtchFileDel.set_enable(false);

        		return;
        	}

        	switch (sSvcId)
        	{
        		case "multiList" :
        			// 후처리 코드
        			alert("화면로딩시 multi 파일정보 조회하기");

        			if(this.dsFileDetail.rowcount == 0) {
        				//다운로드 버튼 비활성화, 삭제버튼 비활성화
        				this.btnAtchFileDownLoad.set_enable(false);
        				this.btnAtchFileDel.set_enable(false);
        			} else {
        				//다운로드 버튼 활성화, 삭제버튼 활성화
        				this.btnAtchFileDownLoad.set_enable(true);
        				this.btnAtchFileDel.set_enable(true);
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
        		case "testMultiSave" :
        			// 후처리 코드
        			alert("multi 최종저장 결과 - 성공");
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /* multi 업로드파일 조회하기 */
        /**
         * @desc 기존 업로드파일 조회하기 - multi
         * @param fileGroupMgno : 파일그룹식별자
         * @return N/A
         */
        this.fnLoadMultiFile = function(fileGroupMgno) {

        	// 호출전 데이터 설정 및 가공 처리
        	if(!fileGroupMgno) return false;

        	//전송할 파일정보 모두삭제
        	this.dsSendFileDetail.clearData();

        	//전송할 파일정보 셋팅
        	this.dsSendFileDetail.insertRow(0);
        	this.dsSendFileDetail.setColumn(0, "fileGroupMgno", fileGroupMgno);

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "multiList";
        	objArgs.url 			= "/common/file/multi/list.irs";
        	objArgs.inds			= "dsSendFileDetail=dsSendFileDetail";
        	objArgs.outds			= "dsFileDetail=dsFileDetail";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnMultiListCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @description onclick 파일추가 버튼클릭
         */
        this.btnAtchFileUpLoad_onclick = function(obj,e)
        {
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();

        	if (this.gfnIsNull(this.fvUpldFileSize))
        	{
        		// this.gfnShowMessage(this, "E0003",  "업로드파일크기");	// {0}가(이) 존재하지 않습니다.
        		this.gfnShowMessage(this, "업로드 파일크기가 존재하지 않습니다.");
        		return;
        	}

        	if (this.gfnIsNull(this.fvUpldFileExtNm))
        	{
        		// this.gfnShowMessage(this, "E0003",  "업로드파일확장자명");	// {0}가(이) 존재하지 않습니다.
        		this.gfnShowMessage(this, "업로드 파일확장자명이 존재하지 않습니다.");
        		return;
        	}

        	var sCanExtend;
        	if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1)	// nexacro-studio 실행일때
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ";*."); // ->jpeg/jpg/png/xlsx
        		trace("sCanExtend->"+sCanExtend);
        		this.FileDialog00.set_filter("File("+this.fvUpldFileExtNm+")|*."+sCanExtend);  // set_filter는 전용브라우져에서만 작동함 ->"Files|*.xls;*.xlsx"
        	}
        	else
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ", ."); // ->jpeg/jpg/png/xlsx
        		trace("sCanExtend->"+sCanExtend);
        		this.FileDialog00.set_accept("."+sCanExtend);  // set_accept는 브라우져에서만 작동함 ->".jpeg, .jpg, .png, .xlsx"
        	}

        	this.FileDialog00.open( "파일선택", FileDialog.MULTILOAD );
        };

        /**
         * @description FileDialog onclose 파일선택창(FileDialog) 닫힐시
         */
        this.FileDialog00_onclose = function(obj,e)
        {
        	if(e.reason == 0 ) {	//파일선택 취소
        		return;
        	} else if (e.reason == 3)	// "FileDialog.MULTILOAD" 옵션으로 open() 메소드를 실행하여 파일을 한개 이상 선택하였을 경우
        	{
        		trace("[e.reason]["+e.reason+"]");

        		if (e.virtualfiles.length == 0)
        		{
        			this.gfnShowMessage(this, "선택한 첨부파일이 없습니다.");
        			return;
        		}

        		this.isPosibleMultiUpload = true;		/* multi 업로드 가능여부 초기값 설정 */

        		var vFile, isExist, fileNm, sExtn;
        		for (var i = 0; i < e.virtualfiles.length; i++)
        		{
        			if(this.isPosibleMultiUpload == false) { /* 복수파일 중 업로드 불가 상태가 되면 나머지 파일체크는 중지 */
        				break;
        			}

        			vFile = e.virtualfiles[i];
        			isExist = this.FileUpTransfer00.existFile(vFile);
        			if (isExist)
        			{
        				this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        				continue;
        			}

         			fileNm = vFile.filename;
         			sExtn = this.gfnGetFileExt(fileNm);
         			if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
         			{
        				this.isPosibleMultiUpload = false;		/* multi 업로드 가능여부 : 실패 상태 설정 */
         				this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
         				continue;
         			}

        			vFile.set_async(false);

        			// VirtualFile 이벤트 생성
        			vFile.setEventHandler("onsuccess", this.fnMultiVirtualFile_onsuccess, this);
        			vFile.setEventHandler("onerror", this.fnMultiVirtualFile_onerror, this);

        			//File 사이즈 체크를 위해
        			vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        		}

        	}

        	/* multi 업로드가 가능하다면 - 업로드 실행 */
        	if(this.isPosibleMultiUpload) {

        		/*****************************************************************************************/
        		/* 업로드 START */
        		/*****************************************************************************************/

        		//파일전송
        		this.FileUpTransfer00.set_url(this.fvApp.File.fileMultiUpLoadUrl);
        		this.FileUpTransfer00.clearPostDataList();
        		this.FileUpTransfer00.setPostData("dsSendFileDetail",this.dsSendFileDetail.saveXML());
        		this.FileUpTransfer00.upload();

        		/*****************************************************************************************/
        		/* 업로드 END */
        		/*****************************************************************************************/

        	} else {					/* 업로드가 불가능하다면 초기화 */
        		//FileUpTransfer 파일 모두삭제
        		this.FileUpTransfer00.clearFileList();
        	}

        };

        /**
         * @description VirtualFile onsuccess 업로드용 Virtual 파일 onsuccess 이벤트
         */
        this.fnMultiVirtualFile_onsuccess = function(obj, e)
        {
        	trace("[fnMultiVirtualFile_onsuccess]e.reason:"+e.reason);
        	if (e.reason == 1)		// open() 메소드가 수행되었을 때
        	{
        		obj.getFileSize();
        	}
        	else if (e.reason == 9)		// getFileSize() 메소드가 수행되었을 때
        	{
        		obj.close();

        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if(nFileSize > this.fvUpldFileSize){
        			this.isPosibleMultiUpload = false;		/* multi 업로드 가능여부 : 실패 상태 설정 */
        			this.gfnShowMessage(this, "업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.fnGetFileSizeFormat(this.fvUpldFileSize)+"] 이하 파일로 업로드 가능합니다.");
        			return;
        		}

        		//FileUpTransfer 해당 파일추가
        		var nIdx = this.FileUpTransfer00.addFile(sFileName, obj);
        	}


        };

        /**
         * @description VirtualFile onerror 업로드용 Virtual 파일 onerror 이벤트
         */
        this.fnMultiVirtualFile_onerror = function(obj, e)
        {
        	this.isPosibleMultiUpload = false;		/* multi 업로드 가능여부 : 실패 상태 설정 */

        	var msg = ">>>>>>>>> Multi VirtualFile event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일처리 실패!! \n\n"+msg);
        };

        /**
         * @description FileUpTransfer onsuccess 파일전송 성공시
         */
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "code :"+e.code+"\n";
        	msg += "message :"+e.message+"\n";
        	msg += "url :"+e.url+"\n";
        	msg += "datasets[0].saveJSON() :"+e.datasets[0].saveJSON()+"\n";

        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();

        	var nRowCnt = this.dsFileDetail.appendData(e.datasets[0], true);

        	//파일그룹식별자 설정
        	if(this.dsSendFileDetail.getRowCount() == 0) {
        		var fileGroupMgno = this.dsFileDetail.getColumn(0, "fileGroupMgno");
        		this.dsSendFileDetail.insertRow(0);
        		this.dsSendFileDetail.setColumn(0, "fileGroupMgno", fileGroupMgno);
        	}

        	//다운로드 버튼 활성화, 삭제버튼 활성화
        	this.btnAtchFileDownLoad.set_enable(true);
        	this.btnAtchFileDel.set_enable(true);

        	alert("업무별 필드에 값 설정하기! [this.dsFileDetail]여기서 꺼내서 사용");
        };

        /**
         * @description FileUpTransfer onprogress 파일전송
         */
        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };

        /**
         * @description FileUpTransfer onerror 파일전송 실패시
         */
        this.FileUpTransfer00_onerror = function(obj,e)
        {

        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "statuscode: "+e.statuscode+"\n";
        	msg += "requesturi: "+e.requesturi+"\n";
        	msg += "locationuri: "+e.locationuri+"\n" ;
        	msg += "errormsg: "+e.errormsg+"\n";

        	this.gfnShowMessage(this, "파일 업로드 실패!!\n\n"+msg);

        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();

        };



        /*****************************************************************************************/
        /* multi 업로드 그리드 dran and drop 이벤트 START */
        /*****************************************************************************************/

        /**
         * @description Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때
        */
        this.grdMultiFileUpDown_ondragenter = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOndragenter(this, objParam);
        };

        /**
         * @description Grid 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때
        */
        this.grdMultiFileUpDown_ondragleave = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOnndragleave(this, objParam);
        };

        /**
         * @description Grid 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때
        */
        this.grdMultiFileUpDown_ondrop = function(obj,e)
        {
        trace("[grdMultiFileUpDown_ondrop]");
        	var bExist = false;
        	var bExtn = false;

        	this.grdMultiFileUpDown.set_border("");

        	var fileLength = e.filelist.length;
        	trace("fileLength:"+fileLength);
        	if (fileLength > 0)
        	{
        		if (this.gfnIsNull(this.fvUpldFileSize))
        		{
        			// this.gfnShowMessage(this, "E0003",  "업로드파일크기");	// {0}가(이) 존재하지 않습니다.
        			this.gfnShowMessage(this, "업로드 파일크기가 존재하지 않습니다.");
        			return;
        		}

        		if (this.gfnIsNull(this.fvUpldFileExtNm))
        		{
        			// this.gfnShowMessage(this, "E0003",  "업로드파일확장자명");	// {0}가(이) 존재하지 않습니다.
        			this.gfnShowMessage(this, "업로드 파일확장자명이 존재하지 않습니다.");
        			return;
        		}

        		this.isPosibleMultiUpload = true;		/* multi 업로드 가능여부 초기값 설정 */

        		var vFile, isExist, fileNm, sExtn;
        		for (var i=0; i<e.filelist.length; i++)
        		{
        			if(this.isPosibleMultiUpload == false) { /* 복수파일 중 업로드 불가 상태가 되면 나머지 파일체크는 중지 */
        				break;
        			}

        			vFile = e.filelist[i];
        			isExist = this.FileUpTransfer00.existFile(vFile);
        			trace("["+i+"]isExist:"+isExist);
        			if (isExist)
        			{
        				if(!bExist)
        				{
        					bExist = true;
        					this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        				}

        				continue;
        			}

        			fileNm = vFile.filename;
        			sExtn = this.gfnGetFileExt(fileNm);
        			if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        			{
        				trace("["+i+"]sExtn:"+sExtn);
        				if(!bExtn)
        				{
        					this.isPosibleMultiUpload = false;		/* multi 업로드 가능여부 : 실패 상태 설정 */
        					bExtn = true;
        					this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        				}
        				continue;
        			}

        			vFile.set_async(false);

        			// VirtualFile 이벤트 생성
        			vFile.setEventHandler("onsuccess", this.fnMultiVirtualFile_onsuccess, this);
        			vFile.setEventHandler("onerror", this.fnMultiVirtualFile_onerror, this);

        			//File 사이즈 체크를 위해
        			vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        		}

        		/* multi 업로드가 가능하다면 - 업로드 실행 */
        		if(this.isPosibleMultiUpload) {

        			/*****************************************************************************************/
        			/* 업로드 START */
        			/*****************************************************************************************/

        			//파일전송
        			this.FileUpTransfer00.set_url(this.fvApp.File.fileMultiUpLoadUrl);
        			this.FileUpTransfer00.clearPostDataList();
        			this.FileUpTransfer00.setPostData("dsSendFileDetail",this.dsSendFileDetail.saveXML());
        			this.FileUpTransfer00.upload();

        			/*****************************************************************************************/
        			/* 업로드 END */
        			/*****************************************************************************************/

        		} else {					/* 업로드가 불가능하다면 초기화 */
        			//FileUpTransfer 파일 모두삭제
        			this.FileUpTransfer00.clearFileList();
        		}

        	}
        };

        /*****************************************************************************************/
        /* multi 업로드 그리드 dran and drop 이벤트 END */
        /*****************************************************************************************/



        /*****************************************************************************************/
        /* 그리드내 다운로드 버튼 START */
        /*****************************************************************************************/

        /**
         * @description oncellclick 그리드내 다운로드 버튼클릭
         */
        this.grdMultiFileUpDown_oncellclick = function(obj,e)
        {
        	trace("[grdMultiFileUpDown_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	//다운로드 - 그리드 행내의 다운로드 버튼 클릭시 개별파일 다운로드하기
        	if(e.cell == 5) {
        		var objDs = obj.getBindDataset();
        		var nRow = obj.getDatasetRow(e.row);

        		//var fileGroupMgno = this.dsFileDetail.getColumn(nRow, "fileGroupMgno");
        		var fileMgno = this.dsFileDetail.getColumn(nRow, "fileMgno");

        		//전송할 파일정보 설정
        		this.dsSendFileDetail.setColumn(0, "fileMgno", fileMgno);

        		this.FileDownTransfer00.set_url(this.fvApp.File.fileSingleDownLoadUrl);
        		this.FileDownTransfer00.clearPostDataList();
        		this.FileDownTransfer00.setPostData("dsSendFileDetail",this.dsSendFileDetail.saveXML());

        		//다운로드 파일명
        		var orgnlFileNm = this.dsSendFileDetail.getColumn(0, "orgnlFileNm");
        		var fileExtnNm = this.dsSendFileDetail.getColumn(0, "fileExtnNm");
        		this.FileDownTransfer00.set_downloadfilename(orgnlFileNm + "." + fileExtnNm);

        		//파일다운로드 실행
        		this.FileDownTransfer00.download();


        	}
        };

        /*****************************************************************************************/
        /* 그리드내 다운로드 버튼 END */
        /*****************************************************************************************/



        /*****************************************************************************************/
        /* 다운로드 START */
        /*****************************************************************************************/

        /**
         * @description onclick 다운로드 버튼클릭
         */
        this.btnAtchFileDownLoad_onclick = function(obj,e)
        {

        	// chk항목 존재 여부 확인
        	if (this.dsFileDetail.findRow(this.gvCommonCheckColsNm, "Y") < 0) 	// gridCmmCheck
        	{
        		this.gfnShowMessage(this, "선택된 항목이 존재하지 않습니다.");
        		return;
        	}

        	this.dsFileDetail.set_enableevent(false);

        	this.FileDownTransfer00.set_url(this.fvApp.File.fileMultiDownLoadUrl);
        	this.FileDownTransfer00.clearPostDataList();

        	// 전송용 데이터셋 생성
        	var tempDsObj = new Dataset;
            tempDsObj.set_name("dsTempSendFileDetail");
            this.addChild("dsTempSendFileDetail", tempDsObj);
            this.dsTempSendFileDetail.addColumn("fileMgno","String");
            this.dsTempSendFileDetail.addColumn("fileGroupMgno","String");


        	for (var i = this.dsFileDetail.rowcount - 1; i >= 0; i--)
        	{
        		if ( this.dsFileDetail.getColumn(i, this.gvCommonCheckColsNm) == this.gvCommonCheckboxTrueValue ) //check = 'Y' 인것만 다운로드
        		{
        			var fileGroupMgno = this.dsFileDetail.getColumn(i, "fileGroupMgno");
        			var fileMgno = this.dsFileDetail.getColumn(i, "fileMgno");

        			//체크된 행만 선택하기
        			var nRow = this.dsTempSendFileDetail.getRowCount();
        			this.dsTempSendFileDetail.insertRow(nRow);
        			this.dsTempSendFileDetail.setColumn(nRow, "fileGroupMgno", fileGroupMgno);
        			this.dsTempSendFileDetail.setColumn(nRow, "fileMgno", fileMgno);
        		}
        	}

        	this.FileDownTransfer00.setPostData("dsSendFileDetail",this.dsTempSendFileDetail.saveXML());

        	// 전송용 데이터셋 제거
        	this.removeChild("dsTempSendFileDetail");

        	this.dsFileDetail.set_enableevent(true);

        	//파일다운로드 실행
        	this.FileDownTransfer00.download();
        };

        /**
         * @description FileDownTransfer onclick 파일다운로드 성공시 (NRE 에서만 지원)
         */
        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
        	var sMsg = e.targetfullpath +"\n"+	e.url;
        	//this.gfnShowMessage(this, "파일 다운로드 성공!!\n\n"+sMsg);
        };

        /**
         * @description FileDownTransfer onerror 파일다운로드 실패시 (NRE 에서만 지원)
         */
        this.FileDownTransfer00_onerror = function(obj,e)
        {
        	var sMsg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	sMsg += "statuscode: "+e.statuscode+"\n";
        	sMsg += "requesturi: "+e.requesturi+"\n";
        	sMsg += "locationuri: "+e.locationuri+"\n" ;
        	sMsg += "errormsg: "+e.errormsg+"\n";

        	this.gfnShowMessage(this, "파일 다운로드 실패!!\n\n"+sMsg);
        };


        /*****************************************************************************************/
        /* 다운로드 END */
        /*****************************************************************************************/



        /*****************************************************************************************/
        /* 삭제 START */
        /*****************************************************************************************/

        /**
         * @description onclick 삭제 버튼클릭
         */
        this.btnAtchFileDel_onclick = function(obj,e)
        {

        	// chk항목 존재 여부 확인
        	if (this.dsFileDetail.findRow(this.gvCommonCheckColsNm, "Y") < 0) 	// gridCmmCheck
        	{
        		this.gfnShowMessage(this, "선택된 항목이 존재하지 않습니다.");
        		return;
        	}

        	this.dsFileDetail.set_enableevent(false);

        	for (var i = this.dsFileDetail.rowcount - 1; i >= 0; i--)
        	{
        		if ( this.dsFileDetail.getColumn(i, this.gvCommonCheckColsNm) == this.gvCommonCheckboxTrueValue ) //check = 'Y' 인것만 삭제
        		{
        			this.dsFileDetail.deleteRow(i);
        		}
        	}

        	this.dsFileDetail.set_enableevent(true);

        	if(this.dsFileDetail.rowcount == 0) {
        		//다운로드 버튼 비활성화, 삭제버튼 비활성화
        		this.btnAtchFileDownLoad.set_enable(false);
        		this.btnAtchFileDel.set_enable(false);
        	}
        };

        /*****************************************************************************************/
        /* 삭제 END */
        /*****************************************************************************************/

        /*****************************************************************************************/
        /* 최종저장 START */
        /*****************************************************************************************/

        /**
         * @description onclick 최종저장 버튼클릭
         */
        this.Button_multiSave_onclick = function(obj,e)
        {
        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "testMultiSave";
        	objArgs.url 			= "/test/multi/save.irs";
        	objArgs.inds			= "dsFileDetail=dsFileDetail dsSendFileDetail=dsSendFileDetail";
        	objArgs.outds			= "ds_list=output1";				/* 각 업무화면별 정의영역 */
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /*****************************************************************************************/
        /* 최종저장 END */
        /*****************************************************************************************/



        /*****************************************************************************************/
        /* 기존 업로드 파일 조회 START */
        /*****************************************************************************************/

        this.btnInit_onclick = function(obj,e)
        {
        	/* 기존 업로드 파일이 존재하면 화면로딩시 조회하기 */
        	this.fnLoadMultiFile(this.edtFileGroupMgno.value);
        };

        /*****************************************************************************************/
        /* 기존 업로드 파일 조회 END */
        /*****************************************************************************************/



        /***********************************************************************************
        * XX.공통함수
        ***********************************************************************************/

        /**
         * @desc 파일용량구하기
         * @param size
         * @return string 포맷팅 적용된 파일용량
         */
        this.fnGetFileSizeFormat = function(size) {
        	/*  없으면 */
        	if(!size) {
        		return size;
        	} else {
        		var size = parseInt(size);
        		if(size <= 0) {
        			return "0";
        		}

        		var units = ["bytes", "KB", "MB", "GB", "TB"];
        		var digitGroups = Math.floor(Math.log10(size)/Math.log10(1024));

        		return (size/Math.pow(1024,  digitGroups)).toFixed(1) + " " + units[digitGroups];
        	}
        };

        this.stc00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.btnAtchFileUpLoad.addEventHandler("onclick",this.btnAtchFileUpLoad_onclick,this);
            this.btnAtchFileDownLoad.addEventHandler("onclick",this.btnAtchFileDownLoad_onclick,this);
            this.btnAtchFileDel.addEventHandler("onclick",this.btnAtchFileDel_onclick,this);
            this.stc00.addEventHandler("onclick",this.stc00_onclick,this);
            this.Button_multiSave.addEventHandler("onclick",this.Button_multiSave_onclick,this);
            this.grdMultiFileUpDown.addEventHandler("ondragenter",this.grdMultiFileUpDown_ondragenter,this);
            this.grdMultiFileUpDown.addEventHandler("ondragleave",this.grdMultiFileUpDown_ondragleave,this);
            this.grdMultiFileUpDown.addEventHandler("ondrop",this.grdMultiFileUpDown_ondrop,this);
            this.grdMultiFileUpDown.addEventHandler("oncellclick",this.grdMultiFileUpDown_oncellclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("FileUploadMulti.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
