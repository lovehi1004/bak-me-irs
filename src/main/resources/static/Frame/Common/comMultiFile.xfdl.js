(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMultiFile");
            this.set_titletext("공통 Multi 첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,128);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAtchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileFullDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futUpload", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFileDiag", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtDownload", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futUploadFull", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAtchFileFullDown",null,"2","100","30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAtchFileUpLoad",null,"2","75","30","btnAtchFileFullDown:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileList","0","40",null,"88","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAtchFileDetail");
            obj.getSetter("gridshowpopup").set("false");
            obj.getSetter("griduserproperty").set("!sort");
            obj.set_cssclass("grd_WF_NoneS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"360\"/><Column size=\"117\"/><Column size=\"122\"/><Column size=\"90\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;gridCmmCheck==undefined || gridCmmCheck==&apos;&apos; || gridCmmCheck==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"크기\"/><Cell col=\"3\" text=\"업로드일자\"/><Cell col=\"4\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:gridCmmCheck\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\"/><Cell col=\"2\" text=\"expr:comp.parent.gfnGetFileSizeFormat(fileSz)\"/><Cell col=\"3\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:regDt\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow",null,"2","75","30","btnAtchFileUpLoad:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,128,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMultiFile.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comMultiFile Form
        * FILE NAME     : comMultiFile.xfdl
        * DESCRIPTION   : 공통 Multi 첨부파일
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.09    TOBESOFT	     최초생성
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

        this.fvUpldFileSize = 1024 * 1024 * 3;	//각 파일 최대사이즈 (3 Mbyte)
        this.fvUpldFileExtNm = "/JPG/JPEG/PNG/GIF/BMP/ICO/BMP/MONO/TIF/TIFF/ICON";			// 업로드파일확장자명
        this.fvMode = "REG";					// 사용모드 (REG - 등록 (default) / SEARCH - 조회)

        this.fvFormInitHeight = 128;			// Form 초기 Height 정보
        this.fvGridInitHeight = 88;				// Grid 초기 Height 정보
        this.fvGridRowHeight = 43;				// Grid 1행의 높이 (행추가/행삭제 시 사용)

        this.fvUploadOpenCount = 0;				// 업로드 대상 Open 건수
        this.fvUploadProcCount = 0;				// 업로드 대상 Open 처리 건수
        // this.fvAddfileId = [];					// FileDialog 통해 선택한 파일의 임시ID
        // this.fvNo = 0;							// 작업대상 순번 0001 , 0002 ...

        this.fvRow = -1;						// 단건 다운로드를 위해 선택한 Row

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
        	//trace("[comMultiFile] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

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
        		case "searchMultiFile" :
        // 			if(this.gfnIsNull(this.dsAtchFileDetail.getColumnInfo("gridCmmCheck")))
        // 			{
        // 				this.dsAtchFileDetail.addColumn("gridCmmCheck", "string", 256);
        // 			}
        // 			if(this.gfnIsNull(this.dsAtchFileDetail.getColumnInfo("no")))
        // 			{
        // 				this.dsAtchFileDetail.addColumn("no", "string", 256);
        // 			}

        			// 후처리 코드
        			if(this.dsAtchFileDetail.rowcount < 1)
        			{
        				// 행삭제, 전체다운로드 버튼 비활성화
        				this.btnDelRow.set_enable(false);
        				this.btnAtchFileFullDown.set_enable(false);
        			}
        			else
        			{
        				// 전체다운로드 버튼 활성화, 행삭제버튼은 fvMode에 따라 활성화
        				this.btnAtchFileFullDown.set_enable(true);
        				if(this.fvMode == "REG")	// 등록일때만 행삭제버튼 가능케
        				{
        					this.btnDelRow.set_enable(true);
        				}
        				else
        				{
        					this.btnDelRow.set_enable(false);
        				}

        				// 조회 건수에 따른 리사이징 처리
        				var nAddCnt = this.dsAtchFileDetail.rowcount -1;
        				if(nAddCnt > 0)
        				{
        					nHeightSize = this.fvGridRowHeight*nAddCnt;
        					this.grdFileList.set_height(nexacro.toNumber(this.grdFileList.getOffsetHeight())+nHeightSize);
        					this.set_height(nexacro.toNumber(this.getOffsetHeight())+nHeightSize);
        					this.resetScroll();
        					// callBack 함수 호출
        					if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        					{
        						var callbackObj = {
        							sDiv:"ADD"
        							,nHeight:nHeightSize
        							,objDs:this.dsAtchFileDetail
        						};
        						this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        					}
        				}
        			}
        			break;
        		case "checkSingleDownloadFile" :
        			// 파일체크 성공시 다운로드 처리
        			this.fdtDownload.set_url(this.fvApp.File.fileSingleDownLoadUrl);
        			this.fdtDownload.clearPostDataList();
        			this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileDownload.saveXML());

        			//다운로드 파일명
        			var orgnlFileNm = this.dsAtchFileDetail.getColumn(this.fvRow, "orgnlFileNm");
        			var fileExtnNm = this.dsAtchFileDetail.getColumn(this.fvRow, "fileExtnNm");
        			this.fdtDownload.set_downloadfilename(orgnlFileNm + "." + fileExtnNm);
        			this.fvRow = -1;

        			//파일다운로드 실행
        			this.fdtDownload.download();
        			break;
        		case "checkMultiDownloadFile" :
        			// 파일체크 성공시 다운로드 처리
        			this.fdtDownload.set_url(this.fvApp.File.fileMultiDownLoadUrl);
        			this.fdtDownload.clearPostDataList();
        			this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileFullDownload.saveXML());

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
         * @desc 기존 업로드파일 조회하기 - Multi
         * @param {String}	fileGroupMgno- 파일그룹식별자
         * @return N/A
         */
        this.fnSearchMultiFile = function(sFileGroupMgno)
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
        	objArgs.svcId 			= "searchMultiFile";
        	objArgs.url 			= "/common/file/multi/list.irs";
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
        this.fnInitMultiFile = function(objForm, objParam)
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
         * @desc 첨부파일 업로드 실행
         * @param N/A
         * @return N/A
        */
        this.fnProcUpload = function()
        {
        	//파일전송
        	this.futUpload.set_url(this.fvApp.File.fileMultiUpLoadUrl);
        	this.futUpload.clearPostDataList();
        	this.futUpload.setPostData("dsSendFileDetail",this.dsSearchFileDetail.saveXML());
        	this.futUpload.upload();

        	this.setWaitCursor(true, true);
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
        		case "DEL" :
        			this.btnDelRow.set_enable(bFlag);
        			break;
        		case "UPLOAD" :
        			this.btnAtchFileUpLoad.set_enable(bFlag);
        			break;
        		case "FULLDOWN" :
        			this.btnAtchFileFullDown.set_enable(bFlag);
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
        	this.futUploadFull.clearFileList();
        	this.grdFileList.set_height(this.fvGridInitHeight);
        	this.set_height(this.fvFormInitHeight);
        	this.resetScroll();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 행추가 버튼 클릭시
        */
        // this.btnAddRow_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var nInitCount = this.dsAtchFileDetail.getRowCount();
        // 	var nRow = this.dsAtchFileDetail.addRow();
        //
        // 	if(nInitCount > 0)
        // 	{
        // 		if(nRow > -1)
        // 		{
        // 			this.grdFileList.set_height(nexacro.toNumber(this.grdFileList.getOffsetHeight())+this.fvGridRowHeight);
        // 			this.set_height(nexacro.toNumber(this.getOffsetHeight())+this.fvGridRowHeight);
        // 			this.resetScroll();
        // 		}
        //
        // 		// callBack 함수 호출
        // 		if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        // 		{
        // 			var callbackObj = {
        // 				sDiv:"ADD"
        // 				,nHeight:this.fvGridRowHeight
        // 				,objDs:this.dsAtchFileDetail
        // 			};
        // 			this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        // 		}
        // 	}
        // };

        /**
         * @description 행삭제 버튼 클릭시
        */
        this.btnDelRow_onclick = function(obj,e)
        {
        	if (this.dsAtchFileDetail.getRowCount() < 1)
        	{
        		this.gfnShowMessage(this, "삭제처리할 파일이 없습니다.");
        		return;
        	}

        	if (this.dsAtchFileDetail.getCaseCount("gridCmmCheck=='Y'") < 1)
        	{
        		this.gfnShowMessage(this, "삭제처리할 행을 선택하십시요.");
        		return;
        	}

        	var nCnt = this.dsAtchFileDetail.getRowCount();
        	var i;
        	var bRtn;
        	var nDelCnt = 0;
        	var nHeightSize = 0;
        	var sTxt;
        	var sExt;
        	var nPos;
        	var sRtnTxt;
        	var nFutIndex;
        	var rtnIndex;

        	for (i=nCnt-1; i>-1; i--)
        	{
        		if(this.dsAtchFileDetail.getColumn(i,"gridCmmCheck") == "Y")
        		{
        			sTxt = this.dsAtchFileDetail.getColumn(i, "orgnlFileNm");
        			sExt = this.dsAtchFileDetail.getColumn(i, "fileExtnNm");
        			nPos = this.gfnPosReverse(sTxt, "\\");
        			if(this.gfnIsNull(nPos))
        			{
        				nPos = 0;
        			}
        			else
        			{
        				nPos = nPos+1;
        			}
        			sRtnTxt = sTxt.substr(nPos,sTxt.length);
        			nFutIndex = this.futUploadFull.getIndexArrayByFileName(sRtnTxt+"."+sExt);
        			if(!this.gfnIsNull(nFutIndex) && nFutIndex > -1)
        			{
        				rtnIndex = this.futUploadFull.removeFile(sRtnTxt+"."+sExt);
        			}

        			bRtn = this.dsAtchFileDetail.deleteRow(i);

        			if(bRtn)
        			{
        				nDelCnt++;
        			}
        		}
        	}

        	if(this.dsAtchFileDetail.getRowCount() < 1)
        	{
        		// 행삭제, 전체다운로드 버튼 비활성화
        		this.btnDelRow.set_enable(false);
        		this.btnAtchFileFullDown.set_enable(false);
        	}

        	if(this.dsAtchFileDetail.rowcount == 0)
        	{
        		nDelCnt = nDelCnt-1;
        	}

        	if(nDelCnt > 0)
        	{
        		nHeightSize = this.fvGridRowHeight*nDelCnt;
        		this.grdFileList.set_height(nexacro.toNumber(this.grdFileList.getOffsetHeight())-nHeightSize);
        		this.set_height(nexacro.toNumber(this.getOffsetHeight())-nHeightSize);
        		this.resetScroll();

        		// callBack 함수 호출
        		if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        		{
        			var callbackObj = {
        				sDiv:"DEL"
        				,nHeight:nHeightSize*-1
        				,objDs:this.dsAtchFileDetail
        			};
        			this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        		}
        	}
        };

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

        	this.fdgFileDiag.open("파일선택", FileDialog.MULTILOAD);
        };

        /**
         * @description 전체다운로드 버튼 클릭시
        */
        this.btnAtchFileFullDown_onclick = function(obj,e)
        {
        	if (this.dsAtchFileDetail.getRowCount() < 1)
        	{
        		this.gfnShowMessage(this, "다운로드 할 파일이 없습니다.");
        		return;
        	}

        	if (this.dsAtchFileDetail.getCaseCount("gridCmmCheck=='Y'") < 1)
        	{
        		this.gfnShowMessage(this, "선택한 파일이 없습니다.");
        		return;
        	}

        	this.dsAtchFileFullDownload.clearData();
        	var nCnt = this.dsAtchFileDetail.getRowCount();
        	var i;
        	var sFileGroupMgno;
        	var sFileMgno;
        	var nRow;

        	for (i=0; i<nCnt; i++)
        	{
        		if(this.dsAtchFileDetail.getColumn(i,"gridCmmCheck") == "Y")
        		{
        			sFileGroupMgno = this.dsAtchFileDetail.getColumn(i, "fileGroupMgno");
        			sFileMgno = this.dsAtchFileDetail.getColumn(i, "fileMgno");
        			nRow = this.dsAtchFileFullDownload.addRow();
        			this.dsAtchFileFullDownload.setColumn(nRow, "fileGroupMgno", sFileGroupMgno);
        			this.dsAtchFileFullDownload.setColumn(nRow, "fileMgno", sFileMgno);
        		}
        	}

        	/*
        	this.fdtDownload.set_url(this.fvApp.File.fileMultiDownLoadUrl);
        	this.fdtDownload.clearPostDataList();
        	this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileFullDownload.saveXML());

        	//파일다운로드 실행
        	this.fdtDownload.download();
        	*/

        	// 파일다운로드 전 파일체크
        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "checkMultiDownloadFile";
        	objArgs.url 			= "/common/file/multi/check.irs";
        	objArgs.inds			= "dsSendFileDetail=dsAtchFileFullDownload";
        	objArgs.outds			= "";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description grdFileList > 다운로드 버튼 클릭시
        */
        this.grdFileList_oncellclick = function(obj,e)
        {
        	trace("[grdFileList_oncellclick]e.row:"+e.row+"|e.cell:"+e.cell);

        	var sFileGroupMgno;
        	var sFileMgno;
        	var nRow;

        	// 다운로드 버튼 클릭시
        	if(e.row > -1 && e.cell == 4)
        	{
        		this.dsAtchFileDownload.clearData();
        		sFileGroupMgno = this.dsAtchFileDetail.getColumn(e.row, "fileGroupMgno");
        		sFileMgno = this.dsAtchFileDetail.getColumn(e.row, "fileMgno");
        		nRow = this.dsAtchFileDownload.addRow();
        		this.dsAtchFileDownload.setColumn(nRow, "fileGroupMgno", sFileGroupMgno);
        		this.dsAtchFileDownload.setColumn(nRow, "fileMgno", sFileMgno);

        		this.fvRow = e.row;

        		/*
        		this.fdtDownload.set_url(this.fvApp.File.fileSingleDownLoadUrl);
        		this.fdtDownload.clearPostDataList();
        		this.fdtDownload.setPostData("dsSendFileDetail",this.dsAtchFileDownload.saveXML());

        		//다운로드 파일명
        		var orgnlFileNm = this.dsAtchFileDetail.getColumn(e.row, "orgnlFileNm");
        		var fileExtnNm = this.dsAtchFileDetail.getColumn(e.row, "fileExtnNm");
        		this.fdtDownload.set_downloadfilename(orgnlFileNm + "." + fileExtnNm);

        		//파일다운로드 실행
        		this.fdtDownload.download();
        		*/

        		// 파일다운로드 전 파일체크
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "checkSingleDownloadFile";
        		objArgs.url 			= "/common/file/single/check.irs";
        		objArgs.inds			= "dsSendFileDetail=dsAtchFileDownload";
        		objArgs.outds			= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        };

        /**
         * @description FileDialog 를 닫았을 때
        */
        this.fdgFileDiag_onclose = function(obj,e)
        {
        	var sErrMsgFull = "";

        	if (e.reason == 0)	// 파일 또는 폴더를 선택하지 않고 FileDialog 대화상자를 닫았을 경우
        	{
        		return;
        	}
        	else if (e.reason == 3)	// "FileDialog.MULTILOAD" - 3 옵션으로 open() 메소드를 실행하여 파일 한개를 선택하였을 경우
        	{
        		if (e.virtualfiles.length == 0)
        		{
        			this.gfnShowMessage(this, "선택한 첨부파일이 없습니다.");
        			return;
        		}

        		var vFile, isExist, fileNm, sExtn;

        		this.fvUploadOpenCount = 0;		// 업로드 대상 Open 건수
        		this.fvUploadProcCount = 0;		// 업로드 대상 Open 처리 건수

        		var nErrCnt = 0;
        		for (var i = 0; i < e.virtualfiles.length; i++)
        		{
        			vFile = e.virtualfiles[i];
        			isExist = this.futUploadFull.existFile(vFile);

        			if (isExist)
        			{
        				// this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        				trace("["+i+"]동일한 파일이 이미 추가되어 있습니다. ("+vFile.filename+")");
        				sErrMsgFull += "["+i+"]동일한 파일이 이미 추가되어 있습니다. ("+vFile.filename+")\n";
        				e.virtualfiles[i].bSkip = "Y";
        				nErrCnt++;
        				continue;
        			}

        			fileNm = vFile.filename;
        			sExtn = this.gfnGetFileExt(fileNm);
        			if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        			{
        				// this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        				trace("["+i+"]허용되지 않는 파일 확장자입니다. ("+vFile.filename+" , "+ sExtn +")");
        				sErrMsgFull += "["+i+"]허용되지 않는 파일 확장자입니다. ("+vFile.filename+" , "+ sExtn +")\n";
        				e.virtualfiles[i].bSkip = "Y";
        				nErrCnt++;
        				continue;
        			}
        		}

        		if(e.virtualfiles.length <= nErrCnt)
        		{
        			this.gfnShowMessage(this, sErrMsgFull);
        			return;
        		}

        		// FileUpTransfer 파일 모두삭제
        		if(e.virtualfiles.length > 0)
        		{
        			this.futUpload.clearFileList();
        		}

        		for (var i = 0; i < e.virtualfiles.length; i++)
        		{
        			if(e.virtualfiles[i].bSkip != "Y")
        			{
        				this.fvUploadOpenCount++;
        			}
        		}

        		for (var i = 0; i < e.virtualfiles.length; i++)
        		{
        			if(e.virtualfiles[i].bSkip != "Y")
        			{
        				vFile = e.virtualfiles[i];

        				// VirtualFile 이벤트 생성
        				vFile.setEventHandler("onsuccess", this.fnFileDiagVirtualFile_onsuccess, this);
        				vFile.setEventHandler("onerror", this.fnFileDiagVirtualFile_onerror, this);

        				//File 사이즈 체크를 위해
        				vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        			}
        		}
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
        		this.fvUploadProcCount++;

        		// obj.close();
        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if(nFileSize > this.fvUpldFileSize)
        		{
        			// this.gfnShowMessage(this, "업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.gfnGetFileSizeFormat(this.fvUpldFileSize)+"] 이하 파일로 업로드 가능합니다.");
        			// return;
        			trace("업로드 가능한 파일크기를 초과하였습니다. 최대 ["+this.gfnGetFileSizeFormat(this.fvUpldFileSize)+"] 이하 파일로 업로드 가능합니다.");
        		}
        		else
        		{
        			this.futUpload.addFile(sFileName,obj);			//파일추가
        			this.futUploadFull.addFile(sFileName,obj);			//파일추가

        			// 모든 처리가 끝났으면 실제 업로드 처리 호출
        			if(this.fvUploadOpenCount <= this.fvUploadProcCount && this.futUpload.filelist.length > 0)
        			{
        				this.fnProcUpload();
        			}
        		}
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
        	this.fvUploadProcCount++;

        	var sMsg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        		sMsg += "errortype : "+e.errortype+"\n";
        		sMsg += "errormsg : "+e.errormsg+"\n";
        		sMsg += "statuscode : "+e.statuscode;

        	// this.gfnShowMessage(this, "파일처리 실패!! \n\n"+sMsg);
        	trace("파일처리 실패!! \n\n"+sMsg);
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
        	// this.futUpload.clearFileList();
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

        	var nAddCnt = 0;
        	if(this.dsAtchFileDetail.rowcount < 1)
        	{
        		nAddCnt = e.datasets[0].rowcount -1;
        	}
        	else
        	{
        		nAddCnt = e.datasets[0].rowcount;
        	}

        	var nRowCnt = this.dsAtchFileDetail.appendData(e.datasets[0], true);

        	if(nAddCnt > 0)
        	{
        		nHeightSize = this.fvGridRowHeight*nAddCnt;
        		this.grdFileList.set_height(nexacro.toNumber(this.grdFileList.getOffsetHeight())+nHeightSize);
        		this.set_height(nexacro.toNumber(this.getOffsetHeight())+nHeightSize);
        		this.resetScroll();
        		// callBack 함수 호출
        		if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        		{
        			var callbackObj = {
        				sDiv:"ADD"
        				,nHeight:nHeightSize
        				,objDs:this.dsAtchFileDetail
        			};
        			this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        		}
        	}

        	if(e.datasets[0].rowcount > 0)
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

        	// 행삭제, 전체다운로드 버튼 활성화
        	this.btnDelRow.set_enable(true);
        	this.btnAtchFileFullDown.set_enable(true);
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
         * @description Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때
        */
        this.grdFileList_ondragenter = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsAtchFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOndragenter(this, objParam);
        };

        /**
         * @description Grid 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때
        */
        this.grdFileList_ondragleave = function(obj,e)
        {
        	var objParam = {
        				sBindObj: this.dsAtchFileDetail,
        				sBindComp: obj
        			}

        	this.gfnFileUploadOnndragleave(this, objParam);
        };

        /**
         * @description Grid 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때
        */
        this.grdFileList_ondrop = function(obj,e)
        {
        	var bExist = false;
        	var bExtn = false;

        	obj.set_border("");

        	var fileLength = e.filelist.length;

        	if (fileLength > 0)
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
        		var sErrMsgFull = "";
        		this.fvUploadOpenCount = 0;		// 업로드 대상 Open 건수
        		this.fvUploadProcCount = 0;		// 업로드 대상 Open 처리 건수
        		var nErrCnt = 0;

        		for (var i=0; i<e.filelist.length; i++)
        		{
        			vFile = e.filelist[i];
        			isExist = this.futUploadFull.existFile(vFile);

        			if (isExist)
        			{
        				// this.gfnShowMessage(this, "동일한 파일이 이미 추가되어 있습니다.");
        				trace("["+i+"]동일한 파일이 이미 추가되어 있습니다. ("+vFile.filename+")");
        				sErrMsgFull += "["+i+"]동일한 파일이 이미 추가되어 있습니다. ("+vFile.filename+")\n";
        				e.filelist[i].bSkip = "Y";
        				nErrCnt++;
        				continue;
        			}

        			fileNm = vFile.filename;
        			sExtn = this.gfnGetFileExt(fileNm);
        			if (this.gfnIsNull(sExtn) || !this.gfnAbleExtnCofm(this.fvUpldFileExtNm, sExtn))
        			{
        				// this.gfnShowMessage(this, "허용되지 않는 파일 확장자입니다. ("+ sExtn +")");
        				trace("["+i+"]허용되지 않는 파일 확장자입니다. ("+vFile.filename+" , "+ sExtn +")");
        				sErrMsgFull += "["+i+"]허용되지 않는 파일 확장자입니다. ("+vFile.filename+" , "+ sExtn +")\n";
        				e.filelist[i].bSkip = "Y";
        				nErrCnt++;
        				continue;
        			}
        		}

        		if(e.filelist.length <= nErrCnt)
        		{
        			this.gfnShowMessage(this, sErrMsgFull);
        			return;
        		}

        		// FileUpTransfer 파일 모두삭제
        		if(e.filelist.length > 0)
        		{
        			this.futUpload.clearFileList();
        		}

        		for (var i = 0; i < e.filelist.length; i++)
        		{
        			if(e.filelist[i].bSkip != "Y")
        			{
        				this.fvUploadOpenCount++;
        			}
        		}

        		for (var i = 0; i < e.filelist.length; i++)
        		{
        			if(e.filelist[i].bSkip != "Y")
        			{
        				vFile = e.filelist[i];

        				// VirtualFile 이벤트 생성
        				vFile.setEventHandler("onsuccess", this.fnFileDiagVirtualFile_onsuccess, this);
        				vFile.setEventHandler("onerror", this.fnFileDiagVirtualFile_onerror, this);

        				//File 사이즈 체크를 위해
        				vFile.open(null, VirtualFile.openRead | VirtualFile.openBinary);
        			}
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAtchFileFullDown.addEventHandler("onclick",this.btnAtchFileFullDown_onclick,this);
            this.btnAtchFileUpLoad.addEventHandler("onclick",this.btnAtchFileUpLoad_onclick,this);
            this.grdFileList.addEventHandler("oncellclick",this.grdFileList_oncellclick,this);
            this.grdFileList.addEventHandler("ondragenter",this.grdFileList_ondragenter,this);
            this.grdFileList.addEventHandler("ondragleave",this.grdFileList_ondragleave,this);
            this.grdFileList.addEventHandler("ondrop",this.grdFileList_ondrop,this);
            this.btnDelRow.addEventHandler("onclick",this.btnDelRow_onclick,this);
            this.futUpload.addEventHandler("onerror",this.futUpload_onerror,this);
            this.futUpload.addEventHandler("onprogress",this.futUpload_onprogress,this);
            this.futUpload.addEventHandler("onsuccess",this.futUpload_onsuccess,this);
            this.fdgFileDiag.addEventHandler("onclose",this.fdgFileDiag_onclose,this);
            this.fdtDownload.addEventHandler("onerror",this.fdtDownload_onerror,this);
            this.fdtDownload.addEventHandler("onsuccess",this.fdtDownload_onsuccess,this);
        };
        this.loadIncludeScript("comMultiFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
