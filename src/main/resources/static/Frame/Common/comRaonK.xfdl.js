(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comRaonK");
            this.set_titletext("공통 RaonK 파일업다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"256\"/><Column id=\"uploadType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileStatusDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"issueYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewer", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewerResult", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupSn\" type=\"INT\" size=\"256\"/><Column id=\"fileDtlSn\" type=\"INT\" size=\"256\"/><Column id=\"rs\" type=\"STRING\" size=\"256\"/><Column id=\"fn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,120,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comRaonK.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Common
        * BUSINESS      : comRaonK Form
        * FILE NAME     : comRaonK.xfdl
        * DESCRIPTION   : 공통 RaonK 파일업다운로드
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.24    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	800 X 120	1개 (0)

        	800 X 155	3개

        	800 X 195	5개 (0)
        */

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

        this.fvType = "S";						// S : single (default) , M : multi
        										// 업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
        this.fvMode = "V";						// E : edit , V : view (default) / SetUploadMode
        										// 업로드를 편집모드, 보기모드로 설정합니다. 기본값은 'edit' 편집모드로 설정됩니다.  'edit or 빈값'이면 '편집모드'이고, 'view'로 설정시 보기모드 입니다.
        this.fvMaxTotalFileCount = 1;			// SetMaxTotalFileCount - single : 1 , multi - 30
        this.fvMaxOneFileSize = "50MB";			// 업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다.
        										// 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        this.fvMaxTotalFileSize = "1500MB";		// 업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.
        										// 기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        this.fvExtension = "HWP,HWPX,PDF,XLS,XLSX,PPT,PPTX,DOC,DOCX,PNG,JPG,GIF,TXT";	// 제한 또는 허용할 파일 확장자를 ','(콤마)로 구분하여 설정
        // this.fvEditButtonList = "add,remove,remove_all,download,download_all,custom_viewer|문서보기";	// edit 모드일때 버튼리스트
        // this.fvViewButtonList = "download,download_all,custom_viewer|문서보기";	// view 모드일때 버튼리스트
        // this.fvButtonList = "download,download_all,custom_viewer|문서보기";		// 적용할 버튼리스트
        this.fvEditButtonList = "add,remove,remove_all,download,download_all";		// edit 모드일때 버튼리스트
        this.fvViewButtonList = "download,download_all";							// view 모드일때 버튼리스트
        this.fvButtonList = "download,download_all";								// 적용할 버튼리스트
        										// 업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        										// add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
        										// move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
        										// 업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        										// open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
        										// print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
        										// // custom_viewer|문서보기
        this.fvHeaderItem = [{name:"업로드일자",width:80,align:"center"}];
        										// <item width="80" align="center" desc="업로드일자">업로드일자</item>
        this.fvWidth = 800;
        this.fvHeight = 120;
        this.fvSingleHeight = 120;
        this.fvMultiHeight = 195;

        this.fvRaonKObj = "";					// RaonK모듈

        this.fvFileGroupMgno = "";				// 조회용 파일그룹일련번호 전달값


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
        	//trace("[comRaonK] Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[comRaonK][form_ontimer]e.timerid:"+e.timerid+"==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// 체크1 ,  fvRaonKObj 모듈 로딩전에 fnSearchFile 호출되면 로딩될때까지 timer 후 호출하기
        			this.fnSearchFile(this.fvFileGroupMgno);
        			break;
        		case 9002:
        			// 체크2 , fvRaonKObj 모듈 로딩전에 fnSearchFile 호출되면 로딩될때까지 timer 후 호출하기
        			this.fnSearchFile(this.fvFileGroupMgno);
        			break;
        		default:
        			break;
        	}
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "docViewerPop" :
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
        		case "searchFile" :
        			// 후처리 코드
        			trace(this.dsFileStatusDetail.saveXML());
        			trace(this.dsAtchFileDetail.saveXML());

        			// 파일그룹식별키 채번(=신규발급)여부
        			var sIssueYn = this.dsFileStatusDetail.getColumn(0, "issueYn");

        			/* 채번되지 않은경우 => 파일목록 조회결과가 데이터셋에 담겨 있는 경우 */
        			if(sIssueYn == "N")
        			{
        				for (var i = 0; i < this.dsAtchFileDetail.rowcount; i++)
        				{
        					// [1번째 파라미터] - 파일 Unique Key
        					var sFileUniqueKey = this.dsAtchFileDetail.getColumn(i, "fileMgno");

        					// [2번째 파라미터] - 파일 이름
        					var sOrgnlFileNm = this.dsAtchFileDetail.getColumn(i, "orgnlFileNm");
        					var sFileExtnNm = this.dsAtchFileDetail.getColumn(i, "fileExtnNm");
        					var sFileName = this.gfnIsNull(sFileExtnNm) ? sOrgnlFileNm : sOrgnlFileNm + "." + sFileExtnNm;

        					// [3번째 파라미터] - 파일 위치(웹경로)
        					var sFilePath = "";

        					// [4번째 파라미터] - 파일 크기
        					var sFileSize = this.dsAtchFileDetail.getColumn(i, "fileSz");

        					// [5번째 파라미터] - Custom Download 사용시 사용될 값을 포함한 String값을 의미합니다.
        					var sCustomValue = "";
        					var fileGroupMgno = this.dsAtchFileDetail.getColumn(i, "fileGroupMgno");
        					var customValueJsonString = JSON.stringify({ "fileGroupMgno" : fileGroupMgno, "fileMgno" : sFileUniqueKey });

        					/* Base64 인코딩 */
        					sCustomValue = btoa(unescape(encodeURIComponent(customValueJsonString)));

        					// [6번째 파라미터] - 업로드일자, headerEx 사용시
        					var sRegDt = this.dsAtchFileDetail.getColumn(i, "regDt");
        					if(this.gfnIsNull(sRegDt)) sRegDt = "";
        					// this.fvRaonKObj.AddUploadedFile(sFileUniqueKey, sFileName, sFilePath, sFileSize, sCustomValue);
        					this.fvRaonKObj.AddUploadedFileEx(sFileUniqueKey, sFileName, sFilePath, sFileSize, sCustomValue, sRegDt);
        				}

        				/* 파일정보 확인하기 */
        				var listInfo = this.fvRaonKObj.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        				trace("[조회결과]"+JSON.stringify(listInfo));
        			}
        			else 	/* 채번된 경우 - 업무화면에서 활용 */
        			{
        				var sFileGroupMgno = this.dsFileStatusDetail.getColumn(0, "fileGroupMgno");
        				// 값 셋팅
        				if(!this.gfnIsNull(this.fvObjDs) && !this.gfnIsNull(this.fvForm[this.fvObjDs.id]) && !this.gfnIsNull(this.fvBindCol))
        				{

        					this.fvForm[this.fvObjDs.id].setColumn(this.fvForm[this.fvObjDs.id].rowposition, this.fvBindCol, sFileGroupMgno);
        				}

        				/* 파일정보 확인하기 */
        				var listInfo = this.fvRaonKObj.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        				trace("[채번-파일정보확인]"+JSON.stringify(listInfo));
        			}

        			// callBack 함수 호출
        			if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        			{
        				var callbackObj = {
        					sDiv:"SEARCH"
        					,objDs:this.dsAtchFileDetail
        				};
        				this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        			}
        			break;
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
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        /**
         * @desc 기존 업로드파일 조회하기
         * @param {String}	fileGroupMgno- 파일그룹식별자
         * @return N/A
         */
        this.fnSearchFile = function(sFileGroupMgno)
        {
        	// RaonK Object 초기화 완료체크 1
        	if(this.gfnIsNull(this.fvRaonKObj))
        	{
        		this.fvFileGroupMgno = sFileGroupMgno;
        		this.setTimer(9001,200);
        		return;
        	}

        	// RaonK Object 초기화 완료체크 2
        	var sPath = "";
        	var sObjPath = "";
        	if(this.getOwnerFrame().form.opener)
        	{
        		trace("[1]===========================================================");
        		var objComp = this.getOwnerFrame().form.opener.getOwnerFrame().form.parent;

        		while (objComp && this.gfnTypeof(objComp,true) != "APPLICATION")
        		{
        			sPath = objComp.name+"."+sPath;
        			objComp = objComp.parent;
        		}
        		sObjPath = this.gfnGetObjString(this.getOwnerFrame().form, this.fvRaonKObj, false);
        		sObjPath = sObjPath.substr(5,sObjPath.length-5);
        		sPath += this.getOwnerFrame().name+".form."+sObjPath;
        	}
        	else
        	{
        		trace("[2]===========================================================");
        		var objComp = this.getOwnerFrame().form.parent;

        		while (objComp && this.gfnTypeof(objComp,true) != "APPLICATION")
        		{
        			sPath = objComp.name+"."+sPath;
        			objComp = objComp.parent;
        		}

        		sObjPath = this.gfnGetObjString(this.getOwnerFrame().form, this.fvRaonKObj, false);
        		sObjPath = sObjPath.substr(5,sObjPath.length-5);
        		sPath += "form."+sObjPath;
        	}

        	trace("sPath:"+sPath);

        	if(this.gfnIsNull(RAONKUPLOAD.util._getUploaderByName(sPath)))
        	{
        		this.fvFileGroupMgno = sFileGroupMgno;
        		this.setTimer(9002,200);
        		return;
        	}

        	// 호출전 데이터 설정 및 가공 처리
        	if(this.gfnIsNull(sFileGroupMgno)) sFileGroupMgno = "";

        	var sMnuId = this.getOwnerFrame().form.fvMnuId;
        	if(this.gfnIsNull(sMnuId)) sMnuId = "";

        	// Raonkupload 콤포넌트 - 초기화
        	this.fvRaonKObj.ResetUpload();

        	//전송할 파일정보 모두삭제
        	this.dsSearchFileDetail.clearData();

        	//전송할 파일정보 셋팅
        	var nRow = this.dsSearchFileDetail.addRow();
        	this.dsSearchFileDetail.setColumn(nRow, "fileGroupMgno", sFileGroupMgno);		// 파일그룹일련번호 - 기본값 : 공백
        	this.dsSearchFileDetail.setColumn(nRow, "menuMgno", sMnuId.substr(0,10));		// 메뉴ID - 메뉴ID 또는 공백
        	this.dsSearchFileDetail.setColumn(nRow, "uploadType", this.fvType);				// 업로드유형 - [필수] S 또는 M

        	trace(this.dsSearchFileDetail.saveXML());

        	// 공통Transaction 호출
        	var objArgs = {};
        	objArgs.svcId 			= "searchFile";
        	objArgs.url 			= "/common/raonk/selectFileList.irs";
        	objArgs.inds			= "dsSendFileGroupDetail=dsSearchFileDetail";
        	objArgs.outds			= "dsSearchFileDetail=dsSendFileGroupDetail dsFileStatusDetail=dsFileStatusDetail dsAtchFileDetail=dsFileDetail";
        	objArgs.args 			= "";
        	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc RaonK 초기화 및 생성
         * @param {Object}	onjForm 	- 부모폼 object
         * @param {Object} 	objParam	- 전달 param
         *								objDs - 바인딩 데이터셋
         *								sBindCol - 바인딩 컬럼
         *								sCallbackFunc - 콜백함수
         *								sCallbackId	- 콜백ID
         *                              sType - S : single (default) , M : multi
         *										업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
         *                              sMode - E : edit , V : view (default) / SetUploadMode
         *										업로드를 편집모드, 보기모드로 설정합니다. 기본값은 'edit' 편집모드로 설정됩니다.  'edit or 빈값'이면 '편집모드'이고, 'view'로 설정시 보기모드 입니다.
         *								sMaxTotalFileCount -  1 : S(single) , 30 : M(multi) , 파일갯수 제한 / SetMaxTotalFileCount
         *                              sMaxOneFileSize- 50MB (default) , 업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다.
         *										파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
         *                              sMaxTotalFileSize - 1500MB (default) , 업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.
         * 										기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
         *                              sExtension - "JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON"  (default) , 제한 또는 허용할 파일 확장자를 ','(콤마)로 구분하여 설정
         *                              sButtonList - "download,download_all"
         * 										"add,remove,remove_all,download,download_all";		// edit 모드일때 버튼리스트
         *										"download,download_all";							// view 모드일때 버튼리스트 , (default)
         *										업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
         *										add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
         *										move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
         *										업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
         *										open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
         *										print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
         * 										// custom_viewer|문서보기
         *                              arrHeaderItem - headerBarItem : "업로드일자" 공통에서 기본추가, 제외하고자 하면 "NULL" 으로 호출
         *                              nHeight - RaonK컴포넌트의 높이값, 없으면 sType이 S : 120 (default) , M : 195 으로 설정, 최소 120 이상이어야 함
         * @return N/A
        */
        this.fnInitRaonK = function(objForm, objParam)
        {
        	this.fvForm = objForm;							// 부모폼
        	this.fvObjDs = objParam.objDs;					// 바인딩 데이터셋
        	this.fvBindCol = objParam.sBindCol;				// 바인딩 컬럼
        	this.fvCallBackFunc = objParam.sCallbackFunc;	// 콜백함수
        	this.fvCallbackId = objParam.sCallbackId;		// 콜백ID

        	if(!this.gfnIsNull(objParam.sType))
        	{
        		this.fvType = objParam.sType;							// S : single (default) , M : multi
        	}

        	if(!this.gfnIsNull(objParam.sMode))
        	{
        		this.fvMode = objParam.sMode;							// E : edit , V : view (default) / SetUploadMode
        	}

        	if(!this.gfnIsNull(objParam.sMaxTotalFileCount))
        	{
        		this.fvMaxTotalFileCount = objParam.sMaxTotalFileCount;		// 1 : S(single) , 30 : M(multi) , 파일갯수 제한 / SetMaxTotalFileCount
        	}
        	else
        	{
        		if(this.fvType == "M")
        		{
        			this.fvMaxTotalFileCount = 30;
        		}
        	}

        	if(!this.gfnIsNull(objParam.sMaxOneFileSize))
        	{
        		this.fvMaxOneFileSize = objParam.sMaxOneFileSize;		// 50MB (default)
        	}

        	if(!this.gfnIsNull(objParam.sMaxTotalFileSize))
        	{
        		this.fvMaxTotalFileSize = objParam.sMaxTotalFileSize;	// 1500MB (default)
        	}
        	else
        	{
        		if(this.fvType == "S")
        		{
        			this.fvMaxTotalFileSize = this.fvMaxOneFileSize;
        		}
        	}

        	if(!this.gfnIsNull(objParam.sExtension))
        	{
        		this.fvExtension = objParam.sExtension;					// "JPG,JPEG,PNG,GIF,BMP,ICO,BMP,MONO,TIF,TIFF,ICON" (default)
        	}

        	if(!this.gfnIsNull(objParam.sButtonList))
        	{
        		this.fvButtonList = objParam.sButtonList;				// "download,download_all" (default)
        		// 문서보기 버튼의 숨김에 대한 의사결정에 따라 "custom_viewer|문서보기" 제거처리 추가
        		this.fvButtonList = nexacro.replaceAll(this.fvButtonList, ",custom_viewer|문서보기","");
        	}
        	else
        	{
        		if(this.fvMode == "E")
        		{
        			this.fvButtonList = this.fvEditButtonList;			// "add,remove,remove_all,download,download_all"
        		}
        		else
        		{
        			this.fvButtonList = this.fvViewButtonList;			// "download,download_all"
        		}
        	}

        	if(!this.gfnIsNull(objParam.nHeight))
        	{
        		this.fvHeight = objParam.nHeight;
        		this.set_height(this.fvHeight);
        		this.resetScroll();
        	}
        	else if(this.fvType == "M")
        	{
        		this.fvHeight = this.fvMultiHeight;
        		this.set_height(this.fvHeight);
        		this.resetScroll();
        	}

        	if(!this.gfnIsNull(objParam.arrHeaderItem) && objParam.arrHeaderItem.length > 0 && this.gfnTypeof(objParam.arrHeaderItem, true) == "ARRAY")
        	{
        		this.fvHeaderItem = objParam.arrHeaderItem;				// ex. [{name:"업로드일자",width:80,align:"center"}]
        	}
        	else if(!this.gfnIsNull(objParam.arrHeaderItem) && this.gfnTypeof(objParam.arrHeaderItem, true) != "ARRAY" && objParam.arrHeaderItem.toUpperCase() == "NULL")
        	{
        		this.fvHeaderItem = "";
        	}

        	if(this["rkuModule"])
        	{
        		this["rkuModule"].destroy();
        		this["rkuModule"] = null;
        	}

        	var objRaonK = new RaonkUpload();
        	objRaonK.addEventHandler("RAONKUPLOAD_BeforeCreation", this.rkuModule_RAONKUPLOAD_BeforeCreation, this);
         	objRaonK.init("rkuModule", 0, 0, null, null, 0, 0);
        	this.addChild("rkuModule", objRaonK);
        	objRaonK.show();
        	this.fvRaonKObj = objRaonK;

        	objRaonK.addEventHandler("RAONKUPLOAD_AfterAddAllFile", this.rkuModule_RAONKUPLOAD_AfterAddAllFile, this);
        	// objRaonK.addEventHandler("RAONKUPLOAD_BeforeCreation", this.rkuModule_RAONKUPLOAD_BeforeCreation, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_CreationComplete", this.rkuModule_RAONKUPLOAD_CreationComplete, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_CustomAction", this.rkuModule_RAONKUPLOAD_CustomAction, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_DeleteAllFile", this.rkuModule_RAONKUPLOAD_DeleteAllFile, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_OnError", this.rkuModule_RAONKUPLOAD_OnError, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_UploadComplete", this.rkuModule_RAONKUPLOAD_UploadComplete, this);
        	objRaonK.addEventHandler("RAONKUPLOAD_OnLanguageDefinition", this.rkuModule_RAONKUPLOAD_OnLanguageDefinition, this);

        	trace("fnInitRaonK ====================== End");
        };

        /**
         * @desc 업로드하기
         * @param N/A
         * @return N/A
        */
        this.fnUpload = function()
        {
        	var fileGroupMgno = this.dsFileStatusDetail.getColumn(0, "fileGroupMgno");
        	trace("[파일그룹식별키 확인하기][fileGroupMgno]["+fileGroupMgno+"]");

        	this.fvRaonKObj.AddFormData("fileGroupMgno", fileGroupMgno);
        	this.fvRaonKObj.Transfer();
        };

        /**
         * @desc 문서 미리보기 띄우기
         * @param fileInfo - 문서뷰어 조회조건
         * @return N/A
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

        /**
         * @desc 초기화
         * @param N/A
         * @return N/A
         */
        this.fnResetUpload = function()
        {
        	this.fvRaonKObj.ResetUpload();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.


        /**
         * @description K Upload에 파일이 모두 추가 완료되었을 때 발생하는 이벤트입니다.(전체파일)
        */
        this.rkuModule_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_AfterAddAllFile] =====================");
        	trace("파일이 모두 추가 완료되었을 때");
        	this.fnUpload();			// 업로드하기
        trace("[rkuModule_RAONKUPLOAD_AfterAddAllFile] =====================  end");
        };

        /**
         * @description K Upload 객체가 생성되기 전에 발생하는 이벤트입니다. 페이지에따라 업로드 설정을 변경하고 싶을 경우 사용합니다.
        */
        this.rkuModule_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        trace("[rkuModule_RAONKUPLOAD_BeforeCreation] =====================");

        	// 업로드의 상단에 사용자 헤더를 추가 설정합니다.
        	// item  추가하려는 사용자 헤더의 헤더명을 설정합니다. XML 설정값은 항목으로 추가, Script 설정값은 콤마(,)로 추가
        	// width  추가하려는 사용자 헤더의 넓이를 설정합니다. (px만 설정 가능) XML 설정값은 항목으로 추가, Script 설정값은 콤마(,)로 추가
        	// align  추가하려는 사용자 헤더의 정렬을 설정합니다. (left,center,right) XML 설정값은 항목으로 추가, Script 설정값은 콤마(,)로 추가
        	// this.fvHeaderItem = [{name:"업로드일자",width:80,align:"center"}];

        	if(!this.gfnIsNull(this.fvHeaderItem) && this.fvHeaderItem.length > 0 && this.gfnTypeof(this.fvHeaderItem, true) == "ARRAY")
        	{

        	trace("this.fvHeaderItem.length:"+this.fvHeaderItem.length+"|this.fvHeaderItem:"+this.fvHeaderItem);
        	trace("this.fvHeaderItem[0]:"+this.fvHeaderItem[0]+"|this.fvHeaderItem[0].name:"+this.fvHeaderItem[0].name);
        		var sHeaderBarItem = "";
        		var sHeaderBarItemWidth = "";
        		var sHeaderBarItemAlign = "";
        		var i;
        		for(i=0;i<this.fvHeaderItem.length;i++)
        		{
        			sHeaderBarItem += this.fvHeaderItem[i].name;
        			sHeaderBarItemWidth += this.fvHeaderItem[i].width;
        			sHeaderBarItemAlign += this.fvHeaderItem[i].align;
        			if(i+1<this.fvHeaderItem.length)
        			{
        				sHeaderBarItem += ",";
        				sHeaderBarItemWidth += ",";
        				sHeaderBarItemAlign += ",";
        			}
        		}

        		trace("[1]sHeaderBarItem:"+sHeaderBarItem+"|sHeaderBarItemWidth:"+sHeaderBarItemWidth+"|sHeaderBarItemAlign:"+sHeaderBarItemAlign);
        		// obj
        		// <item width="80" align="center" desc="업로드일자">업로드일자</item>
        		//  SetConfig(configName, configValue, uploadID)
        		obj.set_HeaderBarItem(sHeaderBarItem);
        		obj.set_HeaderBarItemWidth(sHeaderBarItemWidth);
        		obj.set_HeaderBarItemAlign(sHeaderBarItemAlign);
        		obj.set_HeaderBarItemSetTitle(sHeaderBarItem);
        		trace("[2]HeaderBarItem=======================");

        	}

        trace("[rkuModule_RAONKUPLOAD_BeforeCreation] =====================  end");
        };

        /**
         * @description K Upload 객체의 생성이 완료되었을 때 발생하는 이벤트입니다.
        */
        this.rkuModule_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_CreationComplete] =====================");

        	// Mode
        	// 업로드를 편집모드, 보기모드로 설정합니다. 기본값은 'edit' 편집모드로 설정됩니다.  'edit or 빈값'이면 '편집모드'이고, 'view'로 설정시 보기모드 입니다.
        	if(this.fvMode == "E")
        	{
        		obj.SetUploadMode("edit");
        	}
        	else
        	{
        		obj.SetUploadMode("view");
        	}

        	// MaxTotalFileCount
        	// 업로드 할 최대 파일 개수 제한값을 설정합니다.   기본값은 '0' 제한없음이고, '0 보다 큰 수' 설정시 해당 개수 초과로 첨부 할 수 없습니다.
        	obj.SetMaxTotalFileCount(this.fvMaxTotalFileCount);

        	// MaxOneFileSize
        	// 업로드할 때 파일당 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	obj.SetMaxOneFileSize(this.fvMaxOneFileSize);		// 개당

        	// MaxTotalFileSize
        	// 업로드할 때 총 업로드 될 파일의 용량제한을 설정합니다.   기본값은 '0' 용량 제한없음이고, '사용자 설정값' 으로 설정합니다. 파일 단위는 B(byte), KB(kilobyte), MB(megabyte), GB(gigabyte) 으로 설정합니다.
        	obj.SetMaxTotalFileSize(this.fvMaxTotalFileSize);	// 전체

        	// ExtensionAllowOrLimit
        	// ExtensionArr에 설정한 확장자를 허용할지 제한할지 설정합니다. 0:제한 , 1: 허용
        	// ExtensionArr
        	// 제한 또는 허용할 파일 확장자를 ','(콤마)로 구분하여 설정합니다. (예 : txt,gif )
        	obj.SetAllowOrLimitExtension(1,this.fvExtension);

        	// ButtonBarEdit
        	// 업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
        	// move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
        	// 업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	// open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
        	// print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
        	// // custom_viewer|문서보기
        	obj.SetButtonList(this.fvButtonList);

        	if(this.fvHeight != this.fvSingleHeight && this.fvHeight != this.fvMultiHeight)
        	{
        		obj.SetSize(this.getOffsetWidth(),this.fvHeight);
        		trace("this.getOffsetWidth():"+this.getOffsetWidth()+"|this.fvHeight:"+this.fvHeight);
        	}
        	trace("[rkuModule_RAONKUPLOAD_CreationComplete]this.fvHeight:"+this.fvHeight+"|obj.getOffsetHeight():"+obj.getOffsetHeight()+"|this.getOffsetHeight():"+this.getOffsetHeight());

        trace("[rkuModule_RAONKUPLOAD_CreationComplete] =====================  end");
        };

        /**
         * @description 커스텀 버튼 클릭 시 발생하는 이벤트입니다.
        */
        this.rkuModule_RAONKUPLOAD_CustomAction = function(obj,  paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_CustomAction] =====================");

        	if(paramObj.userdata.command == "custom_viewer")			// custom_viewer|문서보기
        	{
        		/* 체크박스로 선택된 파일정보 불러오기 */
        		var selectedListInfo = obj.GetSelectedListInfo();

        		var newListArray = selectedListInfo.newFile;			// 새로 업로드된 파일 정보 - 업로로 올린 파일정보
        		var webListArray = selectedListInfo.webFile;			// 웹파일 정보 - 조회된 파일정보

        		var selectedFileCount = 0;
        		var fileInfo = null;
        		if(!this.gfnIsNull(newListArray))
        		{
        			trace("신규파일");
        			selectedFileCount += newListArray.length;

        			var encodedRowJson = newListArray[0].responseCustomValue;
        			if(!this.gfnIsNull(encodedRowJson))
        			{
        				/* Base64 디코딩 */
        				var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        				trace("[responseCustomValue]["+JSON.stringify(rowJson)+"]");

        				/* 신규파일 - 파일식별 정보 추출하기 */
        				fileInfo = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        			}
        		}

        		if(!this.gfnIsNull(webListArray))
        		{
        			trace("조회파일");
        			selectedFileCount += webListArray.length;
        			// fileInfo = webListArray[0];

        			var encodedRowJson = webListArray[0].customValue;
        			if(!this.gfnIsNull(encodedRowJson))
        			{
        				/* Base64 디코딩 */
        				var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐
        				trace("[customValue]["+JSON.stringify(rowJson)+"]");

        				/* 조회파일 - 파일식별 정보 추출하기 */
        				fileInfo = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        			}
        		}

        		/* 1건이 아니라면 문서미리보기 실행 불가 */
        		if(selectedFileCount == 0)
        		{
        			// alert("선택한 파일이 없습니다.");				// 제품과 동일한 alert메세지 띄우도록 alert함수 사용 - this.gfnShowMessage(this, ["Alert","선택한 파일이 없습니다."], "");
        			this.gfnShowMessage(this, ["Alert","선택한 파일이 없습니다."], "");
        		}
        		else if(selectedFileCount == 1)
        		{
        			if(!this.gfnIsNull(fileInfo))
        			{
        				// 문서 미리보기 띄우기
        				this.fnCallDocViewerPopup(fileInfo);
        			}
        		}
        		else
        		{
        			// alert("파일을 1건만 선택하세요.");				// 제품과 동일한 alert메세지 띄우도록 alert함수 사용 - this.gfnShowMessage(this, ["Alert","파일을 1건만 선택하세요."], "");
        			this.gfnShowMessage(this, ["Alert","파일을 1건만 선택하세요."], "");
        		}
        	}
        trace("[rkuModule_RAONKUPLOAD_CustomAction] =====================  end");
        };

        /**
         * @description K Upload에 파일이 모두 삭제 완료되었을 때 발생하는 이벤트입니다.(전체파일)
        */
        this.rkuModule_RAONKUPLOAD_DeleteAllFile = function(obj, paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_DeleteAllFile] =====================");

        	trace("K Upload에 파일이 모두 삭제 완료되었을 때 발생하는 이벤트입니다.(전체파일)");
        	var listInfo = obj.GetListInfo("array");
        	var deleteListArray = listInfo.deleteFile;		// 삭제된 파일 정보

        	var mergeListArray = listInfo.mergeFile;		// 신규추가된 파일과 웹파일을 함께 볼수 있는 정보

        	/* mergeList는 화면에 출력되고 있는 최종정보 이므로 존재하지 않으면 [dsAtchFileDetail] 데이터셋의 행을 모두 삭제한다. */
        	if(this.gfnIsNull(mergeListArray) || mergeListArray.length == 0)
        	{
        		this.dsAtchFileDetail.deleteAll();

        		// callBack 함수 호출
        		if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        		{
        			var callbackObj = {
        				sDiv:"DELETE"
        				,objDs:this.dsAtchFileDetail
        			};
        			this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        		}
        		return false;
        	}

        	var deleteRowIndexArray = [];

        	for (var i = 0; i < this.dsAtchFileDetail.rowcount; i++)
        	{
        		deleteRowIndexArray[i] = i;
        	}

        	for(var i = 0; i < mergeListArray.length; i++)
        	{

        		var fileMgno = "";

        		// 업로드된 파일정보는 responseCustomValue.fileMgno 에 신규 채번된 파일상세키가 설정되어 있다.
        		if(this.gfnIsNull(mergeListArray[i].uniqKey))
        		{
        			var encodedRowJson = mergeListArray[i].responseCustomValue;
        			var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐

        			fileMgno = rowJson.fileMgno;

        		// 서버로 부터 조회된 파일정보는 uniqKey 에 파일상세키가 설정되어 있다.
        		}
        		else
        		{
        			fileMgno = mergeListArray[i].uniqKey;
        		}

        		var nRow = this.dsAtchFileDetail.findRow("fileMgno", fileMgno);

        		/* 업로드 영역에 해당하는 삭제대상 인덱스정보 생성하기 - [deleteRowIndexArray] 삭제 대상 인덱스정보에서 유효 인덱스정보는 제거 */
        		deleteRowIndexArray = deleteRowIndexArray.filter((element) => element !== nRow);
        	}

        	/* 삭제대상 인덱스정보로 [dsAtchFileDetail] 데이터셋에서 삭제 처리 한다. */
        	for (var i = deleteRowIndexArray.length - 1; i >= 0; i--)
        	{
        		this.dsAtchFileDetail.deleteRow(deleteRowIndexArray[i]);
        	}


        	trace("[삭제후]"+JSON.stringify(listInfo));

        	// callBack 함수 호출
        	if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        	{
        		var callbackObj = {
        			sDiv:"DELETE"
        			,objDs:this.dsAtchFileDetail
        		};
        		this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        	}

        trace("[rkuModule_RAONKUPLOAD_DeleteAllFile] =====================  end");
        };

        /**
         * @description K Upload 에서 오류가 있는 경우 발생하는 이벤트입니다.
        */
        this.rkuModule_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_OnError] =====================");
        	// 에러가 발생할 경우 발생합니다.
        	var param = paramObj.userdata;  // 에러에 대한 정보가 있는 object 입니다.

        	var str = "\n---------- RAONKUPLOAD_OnError ----------";
        	str += "\n"+ param.strCode;	//Error Code
        	str += "\n"+ param.strMessage;	//Error Message

        	trace(str);

        	// 처리중 오류가 발생하였습니다.
        	this.gfnShowMessage(this, "E000001", "");
        trace("[rkuModule_RAONKUPLOAD_OnError] =====================  end");
        };

        /**
         * @description K Upload 업로드 완료시 발생하는 이벤트입니다.
        */
        this.rkuModule_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_UploadComplete] =====================");

        	var listInfo = obj.GetListInfo("array")			// 전송완료 후 새롭게 업로드 된 파일, 웹파일, 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')
        	var newListArray = listInfo.newFile;			// 새로 업로드된 파일 정보
            var deleteListArray = listInfo.deleteFile;		// 삭제된 파일 정보
            var webListArray = listInfo.webFile;			// 웹파일 정보
        	var mergeListArray = listInfo.mergeFile;		// 신규추가된 파일과 웹파일을 함께 볼수 있는 정보


        	trace("[listInfo]["+JSON.stringify(listInfo)+"]");

        	trace(listInfo.mergeFile);
        	//var deleteList =  obj.GetDeleteList("array");	// 삭제된 파일 리스트 정보를 리턴해 주는 함수 입니다. ('array', 'json', 'xml', 'text')

        	// 업로드 콤포넌트 로딩 후 초기값이 null로 설정되어 있음 - 로딩 직후 [전송하기] 버튼 클릭시
        	if(this.gfnIsNull(newListArray))
        	{
        		return false;
        	}

        	//var str = '\n--------------- 업로드 파일 정보 ---------------\n';
        	for(var i = 0; i < newListArray.length; i++)
        	{

        		var encodedRowJson = newListArray[i].responseCustomValue;
        		trace("[1.서버로부터 응답받은 업로드 파일정보]["+JSON.stringify(newListArray[i])+"]");

        		var rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐

        		trace("[디코딩 json]["+JSON.stringify(rowJson)+"]");

        		trace("[2.서버로부터 응답받은 업로드 파일정보]["+JSON.stringify(rowJson)+"]");

        		var fileMgno = rowJson.fileMgno;
        		var fileIdx = this.dsAtchFileDetail.findRow("fileMgno", fileMgno);
        		trace("[fileIdx]["+fileIdx+"]");

        		/* [newFile]에 이미 업로드한 파일이 존재하면 */
        		if(fileIdx > -1)
        		{
        			continue;
        		}
        		trace("[데이터셋에 파일 추가하기]["+fileIdx+"]");

        		trace("[▶▶▶▶▶▶▶▶ rowJson.orgnlFileNm]["+rowJson.orgnlFileNm+"]");

        		var nRow = this.dsAtchFileDetail.addRow();

        		trace("[▶▶▶▶▶▶▶▶ nRow]["+nRow+"]");
        		this.dsAtchFileDetail.setColumn(nRow, "fileGroupMgno", rowJson.fileGroupMgno);
        		this.dsAtchFileDetail.setColumn(nRow, "fileMgno"     , rowJson.fileMgno     );
        		this.dsAtchFileDetail.setColumn(nRow, "orgnlFileNm"  , rowJson.orgnlFileNm  );
        		this.dsAtchFileDetail.setColumn(nRow, "fileNm"       , rowJson.fileNm       );
        		this.dsAtchFileDetail.setColumn(nRow, "fileSz"       , rowJson.fileSz       );
        		this.dsAtchFileDetail.setColumn(nRow, "fileExtnNm"   , rowJson.fileExtnNm   );
        		this.dsAtchFileDetail.setColumn(nRow, "regDt"        , rowJson.regDt        );
        		this.dsAtchFileDetail.setColumn(nRow, "delYn"        , rowJson.delYn        );

        		//str += newListArray[i].uploadPath + "\n";
        	}

        	trace(JSON.stringify(listInfo));

        	// callBack 함수 호출
        	if(!this.gfnIsNull(this.fvForm[this.fvCallBackFunc]))
        	{
        		var callbackObj = {
        			sDiv:"UPLOAD"
        			,objDs:this.dsAtchFileDetail
        		};
        		this.fvForm[this.fvCallBackFunc].call(this.fvForm, this.fvCallbackId, callbackObj);
        	}

        trace("[rkuModule_RAONKUPLOAD_UploadComplete] =====================  end");
        };


        /**
         * @description K Upload에 각 Text의 문구를 바꾸기 원할 때 사용됩니다.
        			// 업로드 UI상 보여지는 텍스트 내용
                    //paramObj.userdata.file_name : 파일 이름
                    //paramObj.userdata.file_size : 파일 크기
                    //paramObj.userdata.file_unit : 개
                    //paramObj.userdata.btn_open : 열기
                    //paramObj.userdata.file_inserted : 추가됨
                    //paramObj.userdata.btn_add : 파일추가
                    //paramObj.userdata.btn_send : 전송하기
                    //paramObj.userdata.btn_remove : 항목제거
                    //paramObj.userdata.btn_remove_All : 전체 항목 제거
                    //paramObj.userdata.btn_download : 다운로드
                    //paramObj.userdata.btn_download_All : 전체 다운로드
        */
        this.rkuModule_RAONKUPLOAD_OnLanguageDefinition = function(obj, paramObj)
        {
        trace("[rkuModule_RAONKUPLOAD_OnLanguageDefinition] =====================");

        	trace("K Upload에 각 Text의 문구를 바꾸기 원할 때 사용됩니다.");
        	paramObj.userdata.btn_remove = '파일 제거';
        	paramObj.userdata.btn_remove_All = '전체 파일 제거';

        trace("[rkuModule_RAONKUPLOAD_OnLanguageDefinition] =====================  end");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
        };
        this.loadIncludeScript("comRaonK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
