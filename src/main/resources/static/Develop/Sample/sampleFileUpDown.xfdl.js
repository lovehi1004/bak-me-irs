(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFile");
            this.set_titletext("파일관련 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSingleMst", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"testNm\" type=\"STRING\" size=\"256\"/><Column id=\"crerId\" type=\"STRING\" size=\"256\"/><Column id=\"creDtm\" type=\"STRING\" size=\"256\"/><Column id=\"chgrId\" type=\"STRING\" size=\"256\"/><Column id=\"chgDtm\" type=\"STRING\" size=\"256\"/><Column id=\"keyVal\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeqs\" type=\"STRING\" size=\"256\"/><Column id=\"blobData\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileDetl", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileSavePathVal\" type=\"STRING\" size=\"256\"/><Column id=\"fileSave\" type=\"STRING\" size=\"256\"/><Column id=\"orglFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fextNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"imgYn\" type=\"STRING\" size=\"256\"/><Column id=\"imgWidPxelSize\" type=\"STRING\" size=\"256\"/><Column id=\"imgHghPxelSize\" type=\"STRING\" size=\"256\"/><Column id=\"tnailYn\" type=\"STRING\" size=\"256\"/><Column id=\"tnailFileSave\" type=\"STRING\" size=\"256\"/><Column id=\"tnailOrglFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileHashVal\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiAtchFileDetl", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileSavePathVal\" type=\"STRING\" size=\"256\"/><Column id=\"fileSave\" type=\"STRING\" size=\"256\"/><Column id=\"orglFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fextNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"imgYn\" type=\"STRING\" size=\"256\"/><Column id=\"imgWidPxelSize\" type=\"STRING\" size=\"256\"/><Column id=\"imgHghPxelSize\" type=\"STRING\" size=\"256\"/><Column id=\"tnailYn\" type=\"STRING\" size=\"256\"/><Column id=\"tnailFileSave\" type=\"STRING\" size=\"256\"/><Column id=\"tnailOrglFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileHashVal\" type=\"STRING\" size=\"256\"/><Column id=\"transferSerialNm\" type=\"STRING\" size=\"256\"/><Column id=\"binarydata\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiMst", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"testNm\" type=\"STRING\" size=\"256\"/><Column id=\"crerId\" type=\"STRING\" size=\"256\"/><Column id=\"creDtm\" type=\"STRING\" size=\"256\"/><Column id=\"chgrId\" type=\"STRING\" size=\"256\"/><Column id=\"chgDtm\" type=\"STRING\" size=\"256\"/><Column id=\"keyVal\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileSeqs\" type=\"STRING\" size=\"256\"/><Column id=\"blobData\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futUpload", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtDownload", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFileDiag", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futMultiUpload", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtMultiDownload", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgMultiFileDiag", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09","0","69","699","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WFDA_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","0","125","699","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WFDA_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","97","699","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WFDA_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","0","40","699","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WFDA_Line");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileNm","123","100","449","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileUpLoad","575","100","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDownLoad","598","100","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_FileDown");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileDel","621","100","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_FileDel");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAtchFileSingleSample","0","180","700","85",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSingleMst");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_cellmovingtype("col,band");
            obj.getSetter("griduserproperty").set("none");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"첨부파일ID\"/><Cell col=\"1\" text=\"파일순번\"/><Cell col=\"2\" text=\"테스트명\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성날짜\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:atchFileId\"/><Cell col=\"1\" text=\"bind:atchFileSeq\"/><Cell col=\"2\" text=\"bind:testNm\"/><Cell col=\"3\" text=\"bind:crerId\"/><Cell col=\"4\" text=\"bind:creDtm\"/><Cell col=\"5\" text=\"bind:chgrId\"/><Cell col=\"6\" text=\"bind:chgDtm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staPgmBtnId","0","40","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부파일ID");
            obj.set_cssclass("sta_WFDA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileId","123","42","573","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staUpldTmpltDvCd","0","69","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일순번");
            obj.set_cssclass("sta_WFDA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileSeqs","123","71","573","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTmplFile","0","98","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("파일");
            obj.set_cssclass("sta_WFDA_label");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpLoad","596","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Static("staTmplFile00","0","126","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_WFDA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInfo","123","128","449","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiFileUpDown","0","350","500","170",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.getSetter("griduserproperty").set("checkbox,no");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiAtchFileDetl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:orglFileNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiAtchFileUpLoad","261","321","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Comm");
            obj.set_text("파일찾기");
            obj.getSetter("userActionCd").set("EXEL");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiAtchFileDownLoad","344","321","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("다운로드");
            obj.getSetter("userActionCd").set("EXEL");
            obj.set_cssclass("btn_WF_Comm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiAtchFileDel","427","321","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            obj.getSetter("userActionCd").set("EXEL");
            obj.set_cssclass("btn_WF_Comm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiUpLoad","506","315","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("멀티업로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtAtchFileNm","value","dsAtchFileDetl","orglFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtAtchFileId","value","dsSingleMst","atchFileId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtAtchFileSeqs","value","dsSingleMst","atchFileSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtInfo","value","dsSingleMst","testNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFileUpDown.xfdl", function() {
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

        this.fvUpldFileSize = "3";			// 업로드파일크기, MB
        this.fvUpldFileExtNm = "/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON";			// 업로드파일확장자명
        this.fvAtchFileGrpCd = "G01";		// 첨부파일그룹코드


        this.fvUpldSizeFailNum = 0;	// 파일사이즈 초과 건수
        this.fvTransferSerialNum = 1; // 파일index를 구분하기 위한 값

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
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "" :
        			// 후처리 코드

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

        // User Function Area - 사용자 정의 함수는 fnXxxx() 형태로 작성  + 기본 이벤트 function
        /**
         * @desc 사용자 함수
         * 1. 보충설명
         *
         * @param {Grid} obj 그리드
         * @param {GridClickEventInfo} e 이벤트
         * @return {boolean} true
         * @example/public
        */
        // this.fnUserFunction = function()
        // {
        //
        // };

        /**
         * @desc	FileDialog virtualfile onsuccess
         * @param {Object} obj VirtualFile
         * @param {VirtualFileEventInfo} e 이벤트
         * @return N/A
        */
        this.fnFileDiagVirtualFile_onsuccess = function(obj,e)
        {
        trace("[fnFileDiagVirtualFile_onsuccess]e.reason:"+e.reason);
        	if (e.reason == 1)		// open() 메소드가 수행되었을 때
        	{
        		obj.getFileSize();
        	}
        	else if (e.reason == 9)		// getFileSize() 메소드가 수행되었을 때
        	{
        		// size 체크
        		var nFileSize = e.filesize;
        		// if (nFileSize > this.gfnSizeToByte(this.dsAtchFileInfo.getColumn(0, "upldFileSize")+"MB"))
        		trace("nFileSize:"+nFileSize+"|fvUpldFileSize:"+this.gfnSizeToByte(this.fvUpldFileSize+"MB"));
        		if (nFileSize > this.gfnSizeToByte(this.fvUpldFileSize+"MB"))
        		{
        			this.gfnShowMessage(this, "업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.fvUpldFileSize+"]MB 이하 파일로 업로드 가능합니다.");
        			return;
        		}

        		var nRow = 0;
        		var nRowcount = this.dsAtchFileDetl.getRowCount();

        		if (nRowcount < 1)
        		{
        			nRow = this.dsAtchFileDetl.addRow();
        		}
        		else
        		{
        			nRow = 0;
        		}

        		this.btnAtchFileDownLoad.set_enable(false);
        		this.btnAtchFileDel.set_enable(true);

        		this.dsAtchFileDetl.setColumn(nRow, "orglFileNm", obj.filename);

        		this.futUpload.clearFileList();
        		var nIdx = this.futUpload.addFile(obj.filename, obj);
        	}
        };

        /**
         * @desc	FileDialog virtualfile onerror
         * @param {Object} obj VirtualFile
         * @param {VirtualFileErrorEventInfo} e 이벤트
         * @return N/A
        */
        this.fnFileDiagVirtualFile_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일처리 실패!! \n\n"+msg);
        };


        /**
         * @desc	file 업로드 실행
         * @param N/A
         * @return N/A
        */
        this.fnFileUploadExe = function()
        {
        	this.futUpload.clearPostDataList();
        	this.futUpload.postdatalist["delAtchFileId", "delAtchFileSeqs", "atchFileGrpCd", "atchFileUserId", "filepath"];

        	var sFileUrl = this.fvApp.File.fileUpLoadUrl;
        	sFileUrl = "http://dev.gov.irs/test/file/single/upload.irs";

        	this.futUpload.setPostData("filepath","sample");
        	this.futUpload.setPostData("atchFileGrpCd", this.fvAtchFileGrpCd);

        	//파일전송
        	this.futUpload.upload(sFileUrl);
        };

        /**
         * @desc 파일업로드 후 데이터 저장 처리
         * @param N/A
         * @return N/A
        */
        this.fnSave = function()
        {
        	alert("저장 서비스 호출");
        	// http://dev.gov.irs/test/single/save.do
        };

        /**
         * @desc	Multi FileDialog virtualfile onsuccess
         * @param {Object} obj VirtualFile
         * @param {VirtualFileEventInfo} e 이벤트
         * @return N/A
        */
        this.fnMultiFileDiagVirtualFile_onsuccess = function(obj,e)
        {
        trace("[fnMultiFileDiagVirtualFile_onsuccess]e.reason:"+e.reason);
        	if (e.reason == 1)		// open() 메소드가 수행되었을 때
        	{
        		obj.getFileSize();
        	}
        	else if (e.reason == 9)		// getFileSize() 메소드가 수행되었을 때
        	{
        		// size 체크
        		var nFileSize = e.filesize;
        		// if (nFileSize > this.gfnSizeToByte(this.dsAtchFileInfo.getColumn(0, "upldFileSize")+"MB"))
        		trace("nFileSize:"+nFileSize+"|fvUpldFileSize:"+this.gfnSizeToByte(this.fvUpldFileSize+"MB"));
        		if (nFileSize > this.gfnSizeToByte(this.fvUpldFileSize+"MB"))
        		{
        			if (this.fvUpldSizeFailNum == 0)
        			{
        				this.fvUpldSizeFailNum++;
        				this.gfnShowMessage(this, "업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.fvUpldFileSize+"]MB 이하 파일로 업로드 가능합니다.");
        			}
        			return;
        		}

        		var nRow;
        		var nTransferSerialNm = obj.filename + this.fvTransferSerialNum;
        		var nIdx = this.futMultiUpload.addFile(nTransferSerialNm, obj);
        		if(nIdx > -1)
        		{
        			nRow = this.dsMultiAtchFileDetl.addRow();
        			this.fvTransferSerialNum++;
        			this.dsMultiAtchFileDetl.setColumn(nRow, "orglFileNm", obj.filename);
        			this.dsMultiAtchFileDetl.setColumn(nRow, "transferSerialNm", nTransferSerialNm);
        		}
        	}
        };

        /**
         * @desc	Multi FileDialog virtualfile onerror
         * @param {Object} obj VirtualFile
         * @param {VirtualFileErrorEventInfo} e 이벤트
         * @return N/A
        */
        this.fnMultiFileDiagVirtualFile_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> Multi VirtualFile event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일처리 실패!! \n\n"+msg);
        };

        /**
         * @desc	Multi file 업로드 실행
         * @param N/A
         * @return N/A
        */
        this.fnMultiFileUploadExe = function()
        {
        	this.futMultiUpload.clearPostDataList();
        	this.futMultiUpload.postdatalist["delAtchFileId", "delAtchFileSeqs", "atchFileGrpCd", "atchFileUserId", "filepath"];

        	var sFileUrl = this.fvApp.File.fileUpLoadUrl;
        	sFileUrl = "http://dev.gov.irs/test/file/multi/upload.irs";

        	this.futMultiUpload.setPostData("filepath","sample");
        	this.futMultiUpload.setPostData("atchFileGrpCd", this.fvAtchFileGrpCd);

        	//파일전송
        	this.futMultiUpload.upload(sFileUrl);
        };

        /**
         * @desc 멀티파일업로드 후 데이터 저장 처리
         * @param N/A
         * @return N/A
        */
        this.fnMultiSave = function()
        {
        	alert("멀티파일 관련 저장 서비스 호출");
        	// http://dev.gov.irs/test/single/save.do
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 파일 업로드 버튼 클릭
        */
        this.btnAtchFileUpLoad_onclick = function(obj,e)
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

        	var sCanExtend;
        	if(system.navigatorname.toUpperCase().indexOf("NEXACRO") > -1)	// nexacro-studio 실행일때
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ";*."); // ->jpeg/jpg/png/xlsx
        		trace("sCanExtend->"+sCanExtend);
        		this.fdgFileDiag.set_filter("File("+this.fvUpldFileExtNm+")|*."+sCanExtend);  // set_filter는 전용브라우져에서만 작동함 ->"Files|*.xls;*.xlsx"
        	}
        	else
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ", ."); // ->jpeg/jpg/png/xlsx
        		trace("sCanExtend->"+sCanExtend);
        		this.fdgFileDiag.set_accept("."+sCanExtend);  // set_accept는 브라우져에서만 작동함 ->".jpeg, .jpg, .png, .xlsx"
        	}

        	this.fdgFileDiag.open("파일선택", FileDialog.LOAD);
        };

        /**
         * @description 파일 다운로드 버튼 클릭
        */
        this.btnAtchFileDownLoad_onclick = function(obj,e)
        {
        	alert("파일다운로드");
        };

        /**
         * @description 파일 삭제 버튼 클릭
        */
        this.btnAtchFileDel_onclick = function(obj,e)
        {
        	this.futUpload.clearFileList();
        	this.dsAtchFileDetl.clearData();
        	this.dsAtchFileDetl.addRow();
        };

        /**
         * @description FileDoalog onclose event
        */
        this.fdgFileDiag_onclose = function(obj,e)
        {
        	if (e.reason == 0)	// 파일 또는 폴더를 선택하지 않고 FileDialog 대화상자를 닫았을 경우
        	{
        		return;
        	}
        	else if (e.reason == 1)	// "FileDialog.LOAD" 옵션으로 open() 메소드를 실행하여 파일 한개를 선택하였을 경우
        	{
        		// this.futUpload.clearFileList();

        		if (e.virtualfiles.length == 0)
        		{
        			this.gfnShowMessage(this, "선택한 첨부파일이 없습니다.");
        			return;
        		}

        		var vFile, isExist, fileNm, sExtn;
        		vFile = e.virtualfiles[0];
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

        /**
         * @description fileUpTransfer onprogress event
        */
        this.futUpload_onprogress = function(obj,e)
        {
        	trace("업로드 진행중...");
        };

        /**
         * @description fileUpTransfer oncuccess event
        */
        this.futUpload_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false, true);

        // 	this.btnAtchFileDownLoad.set_enable(false);
        // 	this.btnAtchFileDel.set_enable(false);

        	if(e.datasets.length == 0)
        	{
        		this.gfnShowMessage(this, "서버로부터 수신받은 DataSet 오브젝트 오류로 파일업로드 실패 입니다.");
        		return;
        	}
        	// trace("this.fvApp.gdsMenu ? " + this.fvApp.gdsMenu.saveXML());
        	trace("e.datasets.length ::: " + e.datasets.length + " && e.datasets[0] ::: " + e.datasets[0].saveXML());

        	var outDs =  e.datasets[0];
        // 	this.fvForm[this.fvObjNm].setColumn(this.fvForm[this.fvObjNm].rowposition, this.fvAtchFileId, outDs.getColumn(0, "atchFileId"));
        // 	this.fvForm[this.fvObjNm].setColumn(this.fvForm[this.fvObjNm].rowposition, this.fvAtchFileSeqs, outDs.getColumn(0, "atchFileSeq"));

        	this.dsSingleMst.setColumn(0, "atchFileId", outDs.getColumn(0, "fileGroupSn"));
        	this.dsSingleMst.setColumn(0, "atchFileSeq", outDs.getColumn(0, "fileDtlSn"));

        	// this.fnFileUpClear();

        	// 데이터 저장 처리 호출
        	this.fnSave();
        };

        /**
         * @description fileUpTransfer onerror event
        */
        this.futUpload_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> file upload event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일 업로드 실패!!\n\n"+msg);
        };

        /**
         * @description 파일 업로드
        */
        this.btnUpLoad_onclick = function(obj,e)
        {
        	trace("this.futUpload.filelist.length:"+this.futUpload.filelist.length);
        	if(this.futUpload.filelist.length > 0)
        	{
        		// 파일 업로드 처리
        		this.fnFileUploadExe();
        	}
        	else
        	{
        		// 데이터 저장 처리
        		this.fnSave();
        	}
        };

        /**
         * @description Edit 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때
        */
        this.edtAtchFileNm_ondragenter = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsAtchFileDetl,
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
        				sBindObj: this.dsAtchFileDetl,
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

        /**
         * @description (멀티)파일찾기 클릭시
        */
        this.btnMultiAtchFileUpLoad_onclick = function(obj,e)
        {
        	this.fvUpldSizeFailNum = 0;
        	//this.fvImgBinfNum = 0;
        	//this.fvArrImgRowList = new Array();

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
        		this.fdgMultiFileDiag.set_filter("File("+this.fvUpldFileExtNm+")|*."+sCanExtend);  // set_filter는 전용브라우져에서만 작동함 ->"Files|*.xls;*.xlsx"
        	}
        	else
        	{
        		sCanExtend = nexacro.replaceAll(this.fvUpldFileExtNm,"/", ", ."); // ->jpeg/jpg/png/xlsx
        		trace("sCanExtend->"+sCanExtend);
        		this.fdgMultiFileDiag.set_accept("."+sCanExtend);  // set_accept는 브라우져에서만 작동함 ->".jpeg, .jpg, .png, .xlsx"
        	}

        	this.fdgMultiFileDiag.open( "파일선택", FileDialog.MULTILOAD );
        };


        /**
         * @description (멀티)다운로드 클릭시
        */
        this.btnMultiAtchFileDownLoad_onclick = function(obj,e)
        {
        	alert("파일다운로드");

        };

        /**
         * @description (멀티)삭제 클릭시
        */
        this.btnMultiAtchFileDel_onclick = function(obj,e)
        {
        	// chk항목 존재 여부 확인
        	if (this.dsMultiAtchFileDetl.findRow(this.gvCommonCheckColsNm, "Y") < 0) 	// gridCmmCheck
        	{
        		this.gfnShowMessage(this, "선택된 항목이 존재하지 않습니다.");
        		return;
        	}

        	this.dsMultiAtchFileDetl.set_enableevent(false);

        	for (var i = this.dsMultiAtchFileDetl.rowcount - 1; i >= 0; i--)
        	{
        		if ( this.dsMultiAtchFileDetl.getColumn(i, this.gvCommonCheckColsNm) == this.gvCommonCheckboxTrueValue ) //check = 'Y' 인것만 삭제
        		{
        			var delSerialNm = this.dsMultiAtchFileDetl.getColumn(i, "transferSerialNm");
        			var delRslt = this.futMultiUpload.removeFile(delSerialNm);
        			this.dsMultiAtchFileDetl.deleteRow(i);
        		}
        	}

        	this.dsMultiAtchFileDetl.set_enableevent(true);
        };

        /**
         * @description Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때
        */
        this.grdMultiFileUpDown_ondragenter = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsMultiAtchFileDetl,
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
        				sBindObj: this.dsMultiAtchFileDetl,
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

        		var vFile, isExist, fileNm, sExtn;
        		for (var i=0; i<e.filelist.length; i++)
        		{
        			vFile = e.filelist[i];
        			isExist = this.futMultiUpload.existFile(vFile);
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
        					bExtn = true;
        					this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        				}
        				continue;
        			}

        			// VirtualFile 이벤트 생성
        			vFile.setEventHandler("onsuccess", this.fnMultiFileDiagVirtualFile_onsuccess, this);
        			vFile.setEventHandler("onerror", this.fnMultiFileDiagVirtualFile_onerror, this);

        			//File 사이즈 체크를 위해
        			vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        		}
        	}
        };

        /**
         * @description Multi FileDoalog onclose event
        */
        this.fdgMultiFileDiag_onclose = function(obj,e)
        {
        trace("[fdgMultiFileDiag_onclose]e.reason:"+e.reason);
        	if (e.reason == 0)	// 파일 또는 폴더를 선택하지 않고 FileDialog 대화상자를 닫았을 경우
        	{
        		return;
        	}
        	else if (e.reason == 3)	// "FileDialog.MULTILOAD" 옵션으로 open() 메소드를 실행하여 파일을 한개 이상 선택하였을 경우
        	{
        		// this.futMultiUpload.clearFileList();

        		if (e.virtualfiles.length == 0)
        		{
        			this.gfnShowMessage(this, "선택한 첨부파일이 없습니다.");
        			return;
        		}

        		var vFile, isExist, fileNm, sExtn;
        		for (var i = 0; i < e.virtualfiles.length; i++)
        		{
        			vFile = e.virtualfiles[i];
        			isExist = this.futMultiUpload.existFile(vFile);
        			if (isExist)
        			{
        				this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        				continue;
        			}

        			fileNm = vFile.filename;
        			sExtn = this.gfnGetFileExt(fileNm);
        			if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        			{
        				this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        				continue;
        			}

        			// VirtualFile 이벤트 생성
        			vFile.setEventHandler("onsuccess", this.fnMultiFileDiagVirtualFile_onsuccess, this);
        			vFile.setEventHandler("onerror", this.fnMultiFileDiagVirtualFile_onerror, this);

        			//File 사이즈 체크를 위해
        			vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        		}
        	}
        };

        /**
         * @description Multi fileUpTransfer onprogress event
        */
        this.futMultiUpload_onprogress = function(obj,e)
        {
        	trace("멀티 업로드 진행중...");
        };

        /**
         * @description Multi fileUpTransfer oncuccess event
        */
        this.futMultiUpload_onsuccess = function(obj,e)
        {

        	// trace("e.datasets.length ::: " + e.datasets.length + " && e.datasets[0] ::: " + e.datasets[0].saveXML());
        	if(e.datasets.length == 0)
        	{
        		this.gfnShowMessage(this, "서버로부터 수신받은 DataSet 오브젝트 오류로 파일업로드 실패 입니다.");
        		return;
        	}

        	// this.fnFileUpClear();

        	var outDs =  e.datasets[0];

        	var fileSeqs = [];
        	var nAtchFileSeqs = "";

        	for (var i = 0; i < outDs.rowcount; i++ )
        	{
        		fileSeqs.push(outDs.getColumn(i, "fileDtlSn"));
        	}
        	nAtchFileSeqs = fileSeqs.join(",");
        	this.dsMultiMst.setColumn(0, "atchFileId", outDs.getColumn(0, "fileGroupSn"));
        	this.dsMultiMst.setColumn(0, "atchFileSeq", nAtchFileSeqs);

        	// 데이터 저장 처리 호출
        	this.fnMultiSave();
        };

        /**
         * @description Multi fileUpTransfer onerror event
        */
        this.futMultiUpload_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> Multi file upload event ERROR >>>>>>>>\n";
        		msg += "errortype : "+e.errortype+"\n";
        		msg += "errormsg : "+e.errormsg+"\n";
        		msg += "statuscode : "+e.statuscode;

        	this.gfnShowMessage(this, "파일 업로드 실패!!\n\n"+msg);
        };

        /**
         * @description 멀티파일 업로드
        */
        this.btnMultiUpLoad_onclick = function(obj,e)
        {
        	trace("this.futMultiUpload.filelist.length:"+this.futMultiUpload.filelist.length);
        	if(this.futMultiUpload.filelist.length > 0)
        	{
        		// 멀티파일 업로드 처리
        		this.fnMultiFileUploadExe();
        	}
        	else
        	{
        		// 데이터 저장 처리
        		this.fnMultiSave();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtAtchFileNm.addEventHandler("ondrop",this.edtAtchFileNm_ondrop,this);
            this.edtAtchFileNm.addEventHandler("ondragenter",this.edtAtchFileNm_ondragenter,this);
            this.edtAtchFileNm.addEventHandler("ondragleave",this.edtAtchFileNm_ondragleave,this);
            this.btnAtchFileUpLoad.addEventHandler("onclick",this.btnAtchFileUpLoad_onclick,this);
            this.btnAtchFileDownLoad.addEventHandler("onclick",this.btnAtchFileDownLoad_onclick,this);
            this.btnAtchFileDel.addEventHandler("onclick",this.btnAtchFileDel_onclick,this);
            this.btnUpLoad.addEventHandler("onclick",this.btnUpLoad_onclick,this);
            this.grdMultiFileUpDown.addEventHandler("ondragenter",this.grdMultiFileUpDown_ondragenter,this);
            this.grdMultiFileUpDown.addEventHandler("ondragleave",this.grdMultiFileUpDown_ondragleave,this);
            this.grdMultiFileUpDown.addEventHandler("ondrop",this.grdMultiFileUpDown_ondrop,this);
            this.btnMultiAtchFileUpLoad.addEventHandler("onclick",this.btnMultiAtchFileUpLoad_onclick,this);
            this.btnMultiAtchFileDownLoad.addEventHandler("onclick",this.btnMultiAtchFileDownLoad_onclick,this);
            this.btnMultiAtchFileDel.addEventHandler("onclick",this.btnMultiAtchFileDel_onclick,this);
            this.btnMultiUpLoad.addEventHandler("onclick",this.btnMultiUpLoad_onclick,this);
            this.futUpload.addEventHandler("onsuccess",this.futUpload_onsuccess,this);
            this.futUpload.addEventHandler("onprogress",this.futUpload_onprogress,this);
            this.futUpload.addEventHandler("onerror",this.futUpload_onerror,this);
            this.fdgFileDiag.addEventHandler("onclose",this.fdgFileDiag_onclose,this);
            this.futMultiUpload.addEventHandler("onerror",this.futMultiUpload_onerror,this);
            this.futMultiUpload.addEventHandler("onprogress",this.futMultiUpload_onprogress,this);
            this.futMultiUpload.addEventHandler("onsuccess",this.futMultiUpload_onsuccess,this);
            this.fdgMultiFileDiag.addEventHandler("onclose",this.fdgMultiFileDiag_onclose,this);
        };
        this.loadIncludeScript("sampleFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
