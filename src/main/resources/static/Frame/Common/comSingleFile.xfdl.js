(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comSingleFile");
            this.set_titletext("공통 Single 첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAtchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futUpload", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFileDiag", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtDownload", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtAtchFileNm","0","0",null,null,"218","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDel",null,"0","47",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("X");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDownLoad",null,"0","78",null,"btnAtchFileDel:5","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileUpLoad",null,"0","78",null,"btnAtchFileDownLoad:5","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comSingleFile.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comSingleFile Form
        * FILE NAME     : comSingleFile.xfdl
        * DESCRIPTION   : 공통 Single 첨부파일
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.07    TOBESOFT	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvForm = "";						// 부모폼
        this.fvObjDs = "";						// 바인딩 데이터셋
        this.fvBindCol = "";					// 바인딩 컬럼
        this.fvCallBackFunc = "";				// 콜백함수
        this.fvCallbackId = "";					// 콜백ID

        this.fvUpldFileSize = 1024 * 1024 * 3;			//각 파일 최대사이즈 (3 Mbyte)
        this.fvUpldFileExtNm = "/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON";			// 업로드파일확장자명
        this.fvMode = "REG";					// 사용모드 (REG - 등록 (default) / SEARCH - 조회)

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
        	//trace("[comSingleFile] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

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
        		case "searchSingleFile" :
        			// 후처리 코드
        			if(this.dsAtchFileDetail.rowcount < 1)
        			{
        				// 다운로드 버튼 비활성화, 삭제버튼 비활성화
        				this.btnAtchFileDownLoad.set_enable(false);
        				this.btnAtchFileDel.set_enable(false);
        				this.edtAtchFileNm.set_value("");
        			}
        			else
        			{
        				//다운로드 버튼 활성화, 삭제버튼은 fvMode에 따라 활성화
        				this.btnAtchFileDownLoad.set_enable(true);
        				if(this.fvMode == "REG")	// 등록일때만 삭제버튼 가능케
        				{
        					this.btnAtchFileDel.set_enable(true);
        				}
        				else
        				{
        					this.btnAtchFileDel.set_enable(false);
        				}

        				/* 파일명 출력 */
        				this.fnSetSingleFileText(this.edtAtchFileNm, this.dsAtchFileDetail);
        			}
        			break;
        		case "checkDownloadFile" :
        			// 파일체크 성공시 다운로드 처리
        			this.fdtDownload.set_url(this.fvApp.File.fileSingleDownLoadUrl);
        			this.fdtDownload.clearPostDataList();
        			this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileDetail.saveXML());

        			//다운로드 파일명
        			var orgnlFileNm = this.dsAtchFileDetail.getColumn(0, "orgnlFileNm");
        			var fileExtnNm = this.dsAtchFileDetail.getColumn(0, "fileExtnNm");
        			this.fdtDownload.set_downloadfilename(orgnlFileNm + "." + fileExtnNm);

        			//파일다운로드 실행
        			this.fdtDownload.download();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /**
         * @desc 기존 업로드파일 조회하기 - single
         * @param {String}	fileGroupMgno- 파일그룹식별자
         * @return N/A
         */
        this.fnSearchSingleFile = function(sFileGroupMgno)
        {
        	// 호출전 데이터 설정 및 가공 처리
        	if(this.gfnIsNull(sFileGroupMgno)) return false;

        	//전송할 파일정보 모두삭제
        	this.dsSearchFileDetail.clearData();

        	//전송할 파일정보 셋팅
        	var nRow = this.dsSearchFileDetail.addRow();
        	this.dsSearchFileDetail.setColumn(nRow, "fileGroupMgno", sFileGroupMgno);

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "searchSingleFile";
        	objArgs.url 			= "/common/file/single/detail.irs";
        	objArgs.inds			= "dsSendFileDetail=dsSearchFileDetail";
        	objArgs.outds			= "dsAtchFileDetail=dsFileDetail";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 첨부파일 초기화
         * @param {Object}	onjForm 	- 부모폼 object
         * @param {Object} 	objParam	- 전달 param
         *								objDs - 바인딩 데이터셋
         *								sBindCol - 바인딩 컬럼
         *								sCallbackFunc - 콜백함수
         *								sCallbackId	- 콜백ID
         *                              sUpldFileSize - 각 파일 최대사이즈 (3 Mbyte) , 없으면 공통내부 정의에 따름
         *                              sUpldFileExtNm - 업로드파일확장자명 , 없으면 공통내부 정의에 따름
         *                              sMode - 사용모드 , 없으면 공통내부 정의에 따름 (REG - 등록 (default) / SEARCH - 조회)
         * @return N/A
        */
        this.fnInitSingleFile = function(objForm, objParam)
        {
        	this.fvForm = objForm;							// 부모폼
        	this.fvObjDs = objParam.objDs;					// 바인딩 데이터셋
        	this.fvBindCol = objParam.sBindCol;				// 바인딩 컬럼
        	this.fvCallBackFunc = objParam.sCallbackFunc;	// 콜백함수
        	this.fvCallbackId = objParam.sCallbackId;		// 콜백ID

        	if(!this.gfnIsNull(objParam.sUpldFileSize))
        	{
        		this.fvUpldFileSize = objParam.sUpldFileSize;		// 각 파일 최대사이즈
        	}
        	if(!this.gfnIsNull(objParam.sUpldFileExtNm))
        	{
        		this.fvUpldFileExtNm = objParam.sUpldFileExtNm;		// 업로드파일확장자명
        	}
        	if(!this.gfnIsNull(objParam.sMode))
        	{
        		this.fvMode = objParam.sMode;						// 사용모드 (REG - 등록 / SEARCH - 조회)
        	}
        };


        /**
         * @desc 파일명 출력
         * @param {Object}	objEdit 	- 대상 edit object
         * @param {Object}	objDs 		- 파일정보 Dataset object
         * @return N/A
         */
        this.fnSetSingleFileText = function(objEdit, objDs)
        {
        	if(objDs.getRowCount() < 1)
        	{
        		objEdit.set_value("");
        	}
        	else
        	{
        		var sOrgnlFileNm = objDs.getColumn(0, "orgnlFileNm");
        		var sFileExtnNm = objDs.getColumn(0, "fileExtnNm");
        		var sFileSz = objDs.getColumn(0, "fileSz");
        		var sRegDt = objDs.getColumn(0, "regDt");

        		objEdit.set_value(sOrgnlFileNm + "." + sFileExtnNm + " (" + this.gfnGetFileSizeFormat(sFileSz) + ")" + " - " + sRegDt);
        	}
        };

        /**
         * @desc FileDialog virtualfile onsuccess
         * @param {Object} obj VirtualFile
         * @param {VirtualFileEventInfo} e 이벤트
         * @return N/A
        */
        this.fnFileDiagVirtualFile_onsuccess = function(obj,e)
        {
        	trace("[fnFileDiagVirtualFile_onsuccess][e.reason]["+e.reason+"]");
        	if (e.reason == 1)	//open() callback
        	{
        		//파일사이즈 체크
        		obj.getFileSize();
        	}
        	if (e.reason == 9) //getFileSize() callback
        	{
        		// obj.close();
        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if(nFileSize > this.fvUpldFileSize)
        		{
        			this.gfnShowMessage(this, "업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.gfnGetFileSizeFormat(this.fvUpldFileSize)+"] 이하 파일로 업로드 가능합니다.");
        			return;
        		}

        		/*****************************************************************************************/
        		/* 업로드 START */
        		/*****************************************************************************************/
        		//FileUpTransfer 파일 모두삭제
        		this.futUpload.clearFileList();

        		//파일전송
        		this.futUpload.addFile(sFileName,obj);			//파일추가
        		this.futUpload.set_url(this.fvApp.File.fileSingleUpLoadUrl);
        		this.futUpload.clearPostDataList();
        		this.futUpload.setPostData("dsSendFileDetail",this.dsSearchFileDetail.saveXML());
        		this.futUpload.upload();

        		this.setWaitCursor(true, true);
        		/*****************************************************************************************/
        		/* 업로드 END */
        		/*****************************************************************************************/
        	}
        };

        /**
         * @desc FileDialog virtualfile onerror
         * @param {Object} obj VirtualFile
         * @param {VirtualFileErrorEventInfo} e 이벤트
         * @return N/A
        */
        this.fnFileDiagVirtualFile_onerror = function(obj,e)
        {
        	var sMsg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        		sMsg += "errortype : "+e.errortype+"\n";
        		sMsg += "errormsg : "+e.errormsg+"\n";
        		sMsg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일처리 실패!! \n\n"+sMsg);
        };

        /**
         * @desc 버튼별 Enable 설정
         * @param {string}	sObjNm 	- enable 대상 버튼명 (UPLOAD,DOWNLOAD,DELETE)
         * @param {Boolean}	bFlag 	- true / false (default)
         * @return N/A
        */
        this.fnEnable = function(sObjNm, bFlag)
        {
        	if(this.gfnIsNull(bFlag) || (bFlag != true && bFlag != false))  bFlag = false;
        	if(!this.gfnIsNull(sObjNm)) sObjNm = sObjNm.toUpperCase();

        	switch (sObjNm)
        	{
        		case "UPLOAD" :
        			this.btnAtchFileUpLoad.set_enable(bFlag);
        			break;
        		case "DOWNLOAD" :
        			this.btnAtchFileDownLoad.set_enable(bFlag);
        			break;
        		case "DELETE" :
        			this.btnAtchFileDel.set_enable(bFlag);
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @desc 첨부파일 관련 clear
         * @param N/A
         * @return N/A
        */
        this.fnClear = function()
        {
        	this.dsAtchFileDetail.clearData();
        	this.futUpload.clearFileList();
        	this.edtAtchFileNm.set_value("");
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 파일찾기 버튼 클릭시
        */
        this.btnAtchFileUpLoad_onclick = function(obj,e)
        {
        	/*****************************************************************************************/
        	/* 파일업로드 기본 체크 START */
        	/*****************************************************************************************/

        	if (this.gfnIsNull(this.fvUpldFileSize))
        	{
        		this.gfnShowMessage(this, "업로드 파일제한 크기가 존재하지 않습니다.");
        		return;
        	}

        	if (this.gfnIsNull(this.fvUpldFileExtNm))
        	{
        		this.gfnShowMessage(this, "업로드 파일확장자명이 존재하지 않습니다.");
        		return;
        	}

        	var sCanExtend;
        	if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1)	// nexacro-studio 실행일때
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ";*."); // ->jpeg/jpg/png/xlsx
        		this.fdgFileDiag.set_filter("File("+this.fvUpldFileExtNm+")|*."+sCanExtend);  // set_filter는 전용브라우져에서만 작동함 ->"Files|*.xls;*.xlsx"
        	}
        	else
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ", ."); // ->jpeg/jpg/png/xlsx
        		this.fdgFileDiag.set_accept("."+sCanExtend);  // set_accept는 브라우져에서만 작동함 ->".jpeg, .jpg, .png, .xlsx"
        	}

        	/*****************************************************************************************/
        	/* 파일업로드 기본 체크 END */
        	/*****************************************************************************************/

        	this.fdgFileDiag.open("파일선택", FileDialog.LOAD);
        };

        /**
         * @description 다운로드 버튼 클릭시
        */
        this.btnAtchFileDownLoad_onclick = function(obj,e)
        {
        	/*
        	this.fdtDownload.set_url(this.fvApp.File.fileSingleDownLoadUrl);
        	this.fdtDownload.clearPostDataList();
        	this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileDetail.saveXML());

        	//다운로드 파일명
        	var orgnlFileNm = this.dsAtchFileDetail.getColumn(0, "orgnlFileNm");
        	var fileExtnNm = this.dsAtchFileDetail.getColumn(0, "fileExtnNm");
        	this.fdtDownload.set_downloadfilename(orgnlFileNm + "." + fileExtnNm);

        	//파일다운로드 실행
        	this.fdtDownload.download();
        	*/

        	// 파일다운로드 전 파일체크
        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "checkDownloadFile";
        	objArgs.url 			= "/common/file/single/check.irs";
        	objArgs.inds			= "dsSendFileDetail=dsAtchFileDetail";
        	objArgs.outds			= "";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description X 버튼 클릭시
        */
        this.btnAtchFileDel_onclick = function(obj,e)
        {
        	//다운로드 버튼 비활성화, 삭제버튼 비활성화
        	this.btnAtchFileDownLoad.set_enable(false);
        	this.btnAtchFileDel.set_enable(false);

        	this.dsAtchFileDetail.clearData();

        	this.edtAtchFileNm.set_value("");

        	// 값 셋팅
        // 	if(!this.gfnIsNull(this.fvObjDs) && !this.gfnIsNull(this.fvForm[this.fvObjDs.id]) && !this.gfnIsNull(this.fvBindCol))
        // 	{
        // 		this.fvForm[this.fvObjDs.id].setColumn(this.fvForm[this.fvObjDs.id].rowposition, this.fvBindCol, "");
        // 	}

        	// callBack 함수 호출
        	if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        	{
        		var callbackObj = {
        			sDiv:"DELETE"
        			,objDs:this.dsAtchFileDetail
        		};
        		this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        	}
        };

        /**
         * @description FileDialog 를 닫았을 때
        */
        this.fdgFileDiag_onclose = function(obj,e)
        {
        	if (e.reason == 0)	// 파일 또는 폴더를 선택하지 않고 FileDialog 대화상자를 닫았을 경우
        	{
        		return;
        	}
        	else if (e.reason == 1)	// "FileDialog.LOAD" 옵션으로 open() 메소드를 실행하여 파일 한개를 선택하였을 경우
        	{
        		if (e.virtualfiles.length == 0)
        		{
        			this.gfnShowMessage(this, "선택한 첨부파일이 없습니다.");
        			return;
        		}

        		var vFile, isExist, fileNm, sExtn;

        		vFile = e.virtualfiles[0];
        		isExist = this.futUpload.existFile(vFile);

        		//파일중복체크
        		if (isExist)
        		{
        			this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        			return;
        		}

        		fileNm = vFile.filename;
        		sExtn = this.gfnGetFileExt(fileNm);
        		if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        		{
        			this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        			return;
        		}

        		//VirtualFile 이벤트 생성
        		vFile.setEventHandler("onsuccess", this.fnFileDiagVirtualFile_onsuccess, this);
        		vFile.setEventHandler("onerror", this.fnFileDiagVirtualFile_onerror, this);

        		//File 사이즈 체크를 위해
        		vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        	}
        };

        /**
         * @description 파일업로드 실패시
        */
        this.futUpload_onerror = function(obj,e)
        {
        	this.setWaitCursor(false, true);

        	var msg = ">>>>>>>>> file upload event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일 업로드 실패!!\n\n"+msg);

        	//FileUpTransfer 파일 모두삭제
        	this.futUpload.clearFileList();
        };

        /**
         * @description 파일업로드 진행시
        */
        this.futUpload_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };

        /**
         * @description 파일업로드 성공시
        */
        this.futUpload_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false, true);

        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "code :"+e.code+"\n";
        	msg += "message :"+e.message+"\n";
        	msg += "url :"+e.url+"\n";
        	msg += "datasets[0].saveJSON() :"+e.datasets[0].saveJSON()+"\n";
        	trace(msg);

        	if(e.datasets.length == 0)
        	{
        		this.gfnShowMessage(this, "서버로부터 수신받은 DataSet 오브젝트 오류로 파일업로드 실패 입니다.");
        		return;
        	}

        	// FileUpTransfer 파일 모두삭제
        	// this.futUpload.clearFileList();

        	var nRowCnt = this.dsAtchFileDetail.copyData(e.datasets[0]);

        	if(this.dsAtchFileDetail.getRowCount() > 0)
        	{
        		var sFileGroupMgno = this.dsAtchFileDetail.getColumn(0, "fileGroupMgno");

        		// fileGroupMgno 설정
        		if(this.dsSearchFileDetail.getRowCount() == 0)
        		{
        			var nRow = this.dsSearchFileDetail.addRow();
        			this.dsSearchFileDetail.setColumn(nRow, "fileGroupMgno", sFileGroupMgno);
        		}
        		else
        		{
        			sFileGroupMgno = this.dsSearchFileDetail.getColumn(0, "fileGroupMgno");
        		}

        		// 값 셋팅
        		if(!this.gfnIsNull(this.fvObjDs) && !this.gfnIsNull(this.fvForm[this.fvObjDs.id]) && !this.gfnIsNull(this.fvBindCol))
        		{

        			this.fvForm[this.fvObjDs.id].setColumn(this.fvForm[this.fvObjDs.id].rowposition, this.fvBindCol, sFileGroupMgno);
        		}

        		// callBack 함수 호출
        		if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        		{
        			var callbackObj = {
        				sDiv:"UPLOAD"
        				,objDs:this.dsAtchFileDetail
        			};
        			this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        		}
        	}

        	//다운로드 버튼 활성화, 삭제버튼 활성화
        	this.btnAtchFileDownLoad.set_enable(true);
        	this.btnAtchFileDel.set_enable(true);

        	/* 파일명 출력 */
        	this.fnSetSingleFileText(this.edtAtchFileNm, this.dsAtchFileDetail);
        };

        /**
         * @description 파일다운로드 실패시
        */
        this.fdtDownload_onerror = function(obj,e)
        {
        	var sMsg = ">>>>>>>>> file Download event ERROR >>>>>>>>\n";
        		sMsg += "errortype : "+e.errortype+"\n";
        		sMsg += "errormsg : "+e.errormsg+"\n";
        		sMsg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일 다운로드 실패!!\n\n"+sMsg);
        };

        /**
         * @description 파일다운로드 성공시
        */
        this.fdtDownload_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath +"\n"+	e.url);
        };

        /**
         * @description Edit 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때
        */
        this.edtAtchFileNm_ondragenter = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsAtchFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOndragenter(this, objParam);
        };

        /**
         * @description Edit 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때
        */
        this.edtAtchFileNm_ondragleave = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsAtchFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOnndragleave(this, objParam);
        };

        /**
         * @description Edit 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때
        */
        this.edtAtchFileNm_ondrop = function(obj,e)
        {
        	this.edtAtchFileNm.set_border("");

        	var fileLength = e.filelist.length;

        	if (fileLength > 1)
        	{
        		this.gfnShowMessage(this, "첨부파일은 1건만 가능합니다.");
        		return;
        	}
        	else if (fileLength == 1)
        	{
        		if (this.gfnIsNull(this.fvUpldFileSize))
        		{
        			this.gfnShowMessage(this, "업로드 파일제한 크기가 존재하지 않습니다.");
        			return;
        		}

        		if (this.gfnIsNull(this.fvUpldFileExtNm))
        		{
        			this.gfnShowMessage(this, "업로드 파일확장자명이 존재하지 않습니다.");
        			return;
        		}

        		var vFile, isExist, fileNm, sExtn;
        		vFile = e.filelist[0];
        		isExist = this.futUpload.existFile(vFile);
        		if (isExist)
        		{
        			this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        			return;
        		}

        		fileNm = vFile.filename;
        		sExtn = this.gfnGetFileExt(fileNm);
        		if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        		{
        			this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        			return;
        		}

        		// VirtualFile 이벤트 생성
        		vFile.setEventHandler("onsuccess", this.fnFileDiagVirtualFile_onsuccess, this);
        		vFile.setEventHandler("onerror", this.fnFileDiagVirtualFile_onerror, this);

        		//File 사이즈 체크를 위해
        		vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtAtchFileNm.addEventHandler("ondragenter",this.edtAtchFileNm_ondragenter,this);
            this.edtAtchFileNm.addEventHandler("ondragleave",this.edtAtchFileNm_ondragleave,this);
            this.edtAtchFileNm.addEventHandler("ondrop",this.edtAtchFileNm_ondrop,this);
            this.btnAtchFileDel.addEventHandler("onclick",this.btnAtchFileDel_onclick,this);
            this.btnAtchFileDownLoad.addEventHandler("onclick",this.btnAtchFileDownLoad_onclick,this);
            this.btnAtchFileUpLoad.addEventHandler("onclick",this.btnAtchFileUpLoad_onclick,this);
            this.futUpload.addEventHandler("onerror",this.futUpload_onerror,this);
            this.futUpload.addEventHandler("onprogress",this.futUpload_onprogress,this);
            this.futUpload.addEventHandler("onsuccess",this.futUpload_onsuccess,this);
            this.fdgFileDiag.addEventHandler("onclose",this.fdgFileDiag_onclose,this);
            this.fdtDownload.addEventHandler("onerror",this.fdtDownload_onerror,this);
            this.fdtDownload.addEventHandler("onsuccess",this.fdtDownload_onsuccess,this);
        };
        this.loadIncludeScript("comSingleFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
