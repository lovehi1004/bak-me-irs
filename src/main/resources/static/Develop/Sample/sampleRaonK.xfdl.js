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
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWork01", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"workInfo01\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo02\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileGroupMgno\">FG00000694</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWork02", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"workInfo01\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo02\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileGroupMgno\">2300000512</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileDetail01", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileDetail02", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWork03", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"workInfo01\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo02\" type=\"STRING\" size=\"256\"/><Column id=\"workInfo03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileGroupMgno\">2300000512</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01_00_01","10","15","338","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("RaonK 첨부파일 샘플");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail01","0","78",null,"220","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","67",null,"132","30",null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("1");
            obj.set_text("업무정보 조회 (Single)");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","0","80","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabel02","0","67","150","132",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("4");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Div("divRaonKSingle","155","73","800","120",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Button("btnResetUpload","442","0","80","32",null,null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Static("stcLabelTop","0","67",null,"1","30",null,null,null,null,null,this.divDetail01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDetail01.addChild(obj.name, obj);

            obj = new Div("divDetail02","0","divDetail01:10",null,"209","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail02.form);
            obj.set_taborder("0");
            obj.set_text("업무정보 저장 (Single)");
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
            obj.set_binddataset("dsWork01");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"workInfo01\"/><Cell col=\"3\" text=\"workInfo02\"/><Cell col=\"4\" text=\"workInfo03\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:workInfo01\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:workInfo02\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:workInfo03\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail02.addChild(obj.name, obj);

            obj = new Div("divDetail03","0","538",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","67",null,"207","30",null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("1");
            obj.set_text("업무정보 조회 (Multi)");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","0","80","32",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Static("stcLabel02","0","67","150","207",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("4");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Div("divRaonKMulti","155","73","800","195",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Button("btnResetUpload","442","0","80","32",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Button("btnCheckInfo","552","0","100","32",null,null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("7");
            obj.set_text("체크정보확인");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Static("stcLabelTop","0","67",null,"1","30",null,null,null,null,null,this.divDetail03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDetail03.addChild(obj.name, obj);

            obj = new Div("divDetail04","0","838",null,"209","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail04.form);
            obj.set_taborder("0");
            obj.set_text("업무정보 저장 (Multi)");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail04.addChild(obj.name, obj);

            obj = new Button("btnSave","324","0","88","32",null,null,null,null,null,null,this.divDetail04.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divDetail04.addChild(obj.name, obj);

            obj = new Grid("grdFileDetail","0","43","1566","115",null,null,null,null,null,null,this.divDetail04.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsWork02");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"fileGroupMgno\"/><Cell col=\"1\" text=\"fileMgno\"/><Cell col=\"2\" text=\"workInfo01\"/><Cell col=\"3\" text=\"workInfo02\"/><Cell col=\"4\" text=\"workInfo03\"/></Band><Band id=\"body\"><Cell text=\"bind:fileGroupMgno\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:fileMgno\"/><Cell col=\"2\" text=\"bind:workInfo01\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:workInfo02\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:workInfo03\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail04.addChild(obj.name, obj);

            obj = new Button("btnFullDownload","228","18","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheckFileDownLoad","368","18","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("지정파일전체다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheckFileDownLoadCheck","808","18","180","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("체크후 지정파일전체다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnFullDownloadCheck","612","18","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("체크후 전체다운로드");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail05","0","1078",null,"240","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid crimson");
            this.addChild(obj.name, obj);

            obj = new Static("stcBg01","0","67",null,"142","30",null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Static("stcLabel01","0","0","300","30",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("1");
            obj.set_text("업무정보 조회 (Multi) custom");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","0","80","32",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Div("divRaonKMultiCustom","155","73","350","130",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("5");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Button("btnResetUpload","442","0","80","32",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Button("btnCheckInfo","552","0","100","32",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("7");
            obj.set_text("체크정보확인");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Static("stcLabel02","0","67","150","142",null,null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("4");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail05.addChild(obj.name, obj);

            obj = new Static("stcLabelTop","0","67",null,"1","30",null,null,null,null,null,this.divDetail05.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDetail05.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail01.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divDetail01.form.divRaonKSingle.form,function(p){});
            this.divDetail01.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail01.form
            obj = new Layout("default","",0,0,this.divDetail01.form,function(p){});
            this.divDetail01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail02.form
            obj = new Layout("default","",0,0,this.divDetail02.form,function(p){});
            this.divDetail02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail03.form.divRaonKMulti
            obj = new Layout("default","",0,0,this.divDetail03.form.divRaonKMulti.form,function(p){});
            this.divDetail03.form.divRaonKMulti.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail03.form
            obj = new Layout("default","",0,0,this.divDetail03.form,function(p){});
            this.divDetail03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail04.form
            obj = new Layout("default","",0,0,this.divDetail04.form,function(p){});
            this.divDetail04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail05.form.divRaonKMultiCustom
            obj = new Layout("default","",0,0,this.divDetail05.form.divRaonKMultiCustom.form,function(p){});
            this.divDetail05.form.divRaonKMultiCustom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail05.form
            obj = new Layout("default","",0,0,this.divDetail05.form,function(p){});
            this.divDetail05.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("sampleRaonK.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleRaonK Form
        * FILE NAME     : sampleRaonK.xfdl
        * DESCRIPTION   : RaonK샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.24    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	// 초기화 호출
        		fnFormInit > (comRaonK.xfdl) fnInitRaonK 호출 , RaonK 모듈 동적 생성처리
        			ex.
        			var objParam = { ... };
        			this.divDetail01.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	// 업무정보 조회 후 파일정보 조회 호출
        		업무정보 조회 후 파일관련 처리가 있을 경우 (comRaonK.xfdl) fnSearchFile 호출
        		기존 등록된 파일이 있는 경우 파일그룹키(fileGroupMgno) 정보를 이용해 조회처리
        		신규일 경우(파일그룹키가 없는 경우)에는 (comRaonK.xfdl) fnSearchFile 조회 후
        		초기화에 설정한 objDs,sBindCol 정보를 바탕으로 공통에서 setcolumn 처리해 줌
        			ex.
        			var sFileGroupMgno = this.dsWork01.getColumn(0, "fileGroupMgno");
        			this.divDetail01.form.divRaonKSingle.form.fnSearchFile(sFileGroupMgno);

        	// 파일정보 갱신시 callback 처리
        		공통(comRaonK.xfdl)에서 사용자의 파일 삭제, 등록 처리 동작이 발생하는 경우
        		(이때 공통에서는 파일추가시 물리파일 업로드 처리, 데이터 추가 / 파일삭제시 데이터 삭제처리 동작함)
        		초기화에 설정한 sCallbackFunc,sCallbackId 정보를 바탕으로 callback 호출됨.
        		이때 objRtn 에 관련 정보가 전달된다.
        		objRtn.sDiv (작업구분) : UPLOAD : 파일추가에 따른 업로드 성공후 , DELETE : 항목제거 처리후
        		objRtn.objDs : 파일관련 결과 데이터셋, 삭제관련된 확인은 getDeletedRowCount() 를 통해 확인가능
        		업무저장시 파일관련 데이터셋 정보가 필요한 경우 objRtn.objDs 를 업무화면에서 정의한 데이터셋으로 복사(copyData())처리한다.
        			ex.
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후, UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());

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
        	trace("[sampleRaonK]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	/*
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
        	 * 										"add,remove,remove_all,download,download_all";	// edit 모드일때 버튼리스트
        	 *										"download,download_all";						// view 모드일때 버튼리스트 , (default)
        	 *										업로드가 편집모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	 *										add : 파일추가, add_folder : 폴더추가, send : 전송하기, remove : 항목제거, remove_all : 전체 항목제거,
        	 *										move_first : 맨 앞으로, move_forward : 앞으로, move_back : 뒤로, move_end : 맨 뒤로 ',(콤마)'로 구분하여 설정합니다.
        	 *										업로드가 보기모드일 때 버튼바 영역에 노출 할 버튼을 설정합니다. '0'으로 설정시 버튼 영역을 표시하지 않습니다.
        	 *										open : 열기, download : 다운로드, download_all : 전체 다운로드, saveandopen : 저장후 열기, saveandfolderopen : 저장후 폴더열기,
        	 *										print : 인쇄 ',(콤마)'로 구분하여 설정합니다.
        	 *                              arrHeaderItem - headerBarItem : "업로드일자" 공통에서 기본추가, 제외하고자 하면 "NULL" 으로 호출
        	 *                              nHeight - RaonK컴포넌트의 높이값, 없으면 sType이 S : 120 (default) , M : 195 으로 설정, 최소 120 이상이어야 함
        	*/

        	// divRaonKSingle ( comRaonK.xfdl )
        	// single 등록/수정용
        	var objParam = { objDs:this.dsWork01								// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        					,sMaxTotalFileCount:1
        					,sMaxOneFileSize:"50MB"
        					,sMaxTotalFileSize:"50MB"
        					,sExtension:"HWP,HWPX,PDF,XLS,XLSX,PPT,PPTX,DOC,DOCX,PNG,JPG,GIF,TXT"
        					//,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        					,sButtonList:"add,remove,remove_all,download,download_all"
        				   };

        	/*
        	// single 조회용 최소정보 (미입력 정보는 공통에서 정의한 default 값으로 처리됨)
        	var objParam = { objDs:this.dsWork01								// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
        				   };
        	*/
        	this.divDetail01.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	var sFileGroupMgno = this.dsWork01.getColumn(0, "fileGroupMgno");
        	// 파일 정보 조회
        	this.divDetail01.form.divRaonKSingle.form.fnSearchFile(sFileGroupMgno);

        	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        	// divRaonKMulti ( comRaonK.xfdl )
        	// multi 등록/수정용
        	var objParam = { objDs:this.dsWork02								// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFile02"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxTotalFileCount:30
        					,sMaxOneFileSize:"50MB"
        					,sMaxTotalFileSize:"1500MB"
        					,sExtension:"HWP,HWPX,PDF,XLS,XLSX,PPT,PPTX,DOC,DOCX,PNG,JPG,GIF,TXT"
        					// ,sButtonList:"add,remove,remove_all,download,download_all,custom_viewer|문서보기"
        					,sButtonList:"add,remove,remove_all,download,download_all"
        				   };

        	/*
        	// multi 조회용 최소정보 (미입력 정보는 공통에서 정의한 default 값으로 처리됨)
        	var objParam = { objDs:this.dsWork02								// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFile02"							// 콜백ID , 필요시 추가
        					,sType:"M"
        				   };
        	*/

        	this.divDetail03.form.divRaonKMulti.form.fnInitRaonK(this, objParam);

        	var sFileGroupMgno = this.dsWork02.getColumn(0, "fileGroupMgno");
        	// 파일 정보 조회
        	this.divDetail03.form.divRaonKMulti.form.fnSearchFile(sFileGroupMgno);


        	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        	// divRaonKMultiCustom ( comRaonK.xfdl )
        	// multi 등록/수정용 Custom
        	var objParam = { objDs:this.dsWork03								// 바인딩 데이터셋
        					,sBindCol:"fileGroupMgno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"multiFile03"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"E"
        					,sMaxTotalFileCount:30
        					,sMaxOneFileSize:"50MB"
        					,sMaxTotalFileSize:"1500MB"
        					,sExtension:"HWP,HWPX,PDF,XLS,XLSX,PPT,PPTX,DOC,DOCX,PNG,JPG,GIF,TXT"
        					,sButtonList:"add,remove"
        					,arrHeaderItem:"NULL"
        					,nHeight:130
        				   };

        	this.divDetail05.form.divRaonKMultiCustom.form.fnInitRaonK(this, objParam);

        	var sFileGroupMgno = this.dsWork03.getColumn(0, "fileGroupMgno");
        	// 파일 정보 조회
        	this.divDetail05.form.divRaonKMultiCustom.form.fnSearchFile(sFileGroupMgno);
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "singleFile01" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후,  UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
        			break;
        		case "multiFile02" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후, UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
        			break;
        		case "multiFile03" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// SEARCH : 파일정보 조회후, UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
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
        		case "search01" :
        			// 후처리 코드
        			var sFileGroupMgno = this.dsWork01.getColumn(0, "fileGroupMgno");
        			// 파일 정보 조회
        			this.divDetail01.form.divRaonKSingle.form.fnSearchFile(sFileGroupMgno);
        			break;
        		case "search02" :
        			// 후처리 코드
        			var sFileGroupMgno = this.dsWork02.getColumn(0, "fileGroupMgno");
        			// 파일 정보 조회
        			this.divDetail03.form.divRaonKMulti.form.fnSearchFile(sFileGroupMgno);
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
        this.divDetail01_btnSearch_onclick = function(obj,e)
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

        	this.fnCallback("search01", 0 , "SUCC");
        };

        /**
         * @description 업무정보 저장
        */
        this.divDetail02_btnSave_onclick = function(obj,e)
        {
        	// 업무정보 저장 서비스 처리 기술
        	alert("업무정보 저장 (Single)  서비스 처리 기술");
        };

        /**
         * @description 업무정보 조회
        */
        this.divDetail03_btnSearch_onclick = function(obj,e)
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

        	this.fnCallback("search02", 0 , "SUCC");
        };

        /**
         * @description 업무정보 저장
        */
        this.divDetail04_btnSave_onclick = function(obj,e)
        {
        	// 업무정보 저장 서비스 처리 기술
        	alert("업무정보 저장 (Multi) 서비스 처리 기술");
        };

        /**
         * @description 초기화
         *				조회된 목록, 등록/수정 중인 목록 등 초기화 됩니다.
         *				변경사항에 대한 체크는 안되니 호출전 업무내부에서 점검 후 호출하십시요.
        */
        this.divDetail01_btnResetUpload_onclick = function(obj,e)
        {
        	this.divDetail01.form.divRaonKSingle.form.fnResetUpload();
        };

        /**
         * @description 초기화
         *				조회된 목록, 등록/수정 중인 목록 등 초기화 됩니다.
         *				변경사항에 대한 체크는 안되니 호출전 업무내부에서 점검 후 호출하십시요.
        */
        this.divDetail03_btnResetUpload_onclick = function(obj,e)
        {
        	this.divDetail03.form.divRaonKMulti.form.fnResetUpload();
        };

        /**
         * @description 전체다운로드
         *				업무화면 내부의 RaonK 모듈별 파일을 zip 파일로 만들고
         *				그 zip 파일을 다시 zip 처리하여 다운로드 처리하기
        */
        this.btnFullDownload_onclick = function(obj,e)
        {
        	// 전체 파일정보
        	// fileGroupMgno - RaonK 컴포넌트 단위별 파일그룹키(fileGroupMgno)값
        	// archiveFileName - 파일그룹키(fileGroupMgno) 파일들을 zip 압축시 사용할 압축파일명
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsWork01.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Single)"}
        		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Multi)"}
        	];

        	this.gfnFullDownload(this, arrFileListInfo);
        };

        // /**
        //  * @description 전체다운로드
        //  *				업무화면 내부의 RaonK 모듈별 파일을 zip 파일로 만들고
        //  *				그 zip 파일을 다시 zip 처리하여 다운로드 처리하기
        // */
        // this.btnFullDownload_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	// 전체 파일정보
        // 	// fileGroupMgno - RaonK 컴포넌트 단위별 파일그룹키(fileGroupMgno)값
        // 	// archiveFileName - 파일그룹키(fileGroupMgno) 파일들을 zip 압축시 사용할 압축파일명
        // 	var arrFileListInfo = [
        // 		  { fileGroupMgno : this.dsWork01.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Single)"}
        // 		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Multi)"}
        // 	];
        //
        // 	this.gfnFullDownload(this, arrFileListInfo);
        // };
        //
        //
        // /**
        //  * @description 지정파일전체다운로드
        //  *				업무화면내부 파일목록정보 중 일부 선택적으로 다운로드 처리
        // */
        // this.btnCheckFileDownLoad_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	// 지정파일전체다운로드
        // 	// fileGroupMgno - 파일그룹키(fileGroupMgno)
        // 	// fileMgno - 파일순번키(fileMgno)
        // 	var arrFileListInfo = [
        // 		  { fileGroupMgno : this.dsWork01.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000001"}
        // 		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000002"}
        // 		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000003"}
        // 	];
        //
        // 	this.gfnCheckFileDownload(this, arrFileListInfo);
        // };


        /**
         * @description 서비스로 파일정보 체크 후 전체다운로드
         *				업무화면 내부의 RaonK 모듈별 파일을 zip 파일로 만들고
         *				그 zip 파일을 다시 zip 처리하여 다운로드 처리하기
        */
        this.btnFullDownloadCheck_onclick = function(obj,e)
        {
        	// 전체 파일정보
        	// fileGroupMgno - RaonK 컴포넌트 단위별 파일그룹키(fileGroupMgno)값
        	// archiveFileName - 파일그룹키(fileGroupMgno) 파일들을 zip 압축시 사용할 압축파일명
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsWork01.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Single)"}
        		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), archiveFileName : "업무정보(Multi)"}
        	];

        	this.gfnFullDownloadSvcCheck(this, arrFileListInfo);
        };

        /**
         * @description 서비스로 파일정보 체크 후 지정파일전체다운로드
         *				업무화면내부 파일목록정보 중 일부 선택적으로 다운로드 처리
        */
        this.btnCheckFileDownLoadCheck_onclick = function(obj,e)
        {
        	/*
        	// 지정파일전체다운로드
        	// fileGroupMgno - 파일그룹키(fileGroupMgno)
        	// fileMgno - 파일순번키(fileMgno)
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsWork01.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000001"}
        		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000002"}
        		, { fileGroupMgno : this.dsWork02.getColumn(0, "fileGroupMgno"), fileMgno : "FD00000003"}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        	*/
        	var arrFileListInfo = this.gfnGetCheckFileInfo([this.divDetail01.form.divRaonKSingle.form.fvRaonKObj, this.divDetail03.form.divRaonKMulti.form.fvRaonKObj]);
        	// ex. arrCheckFileInfo:[{"fileGroupMgno":"FG00000694","fileMgno":"FD00000001"},{"fileGroupMgno":"2300000512","fileMgno":"FD00000011"},{"fileGroupMgno":"2300000512","fileMgno":"FD00000003"}]
        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        /**
         * @description 체크한 파일의 정보 확인
        */
        this.divDetail03_btnCheckInfo_onclick = function(obj,e)
        {
        	var objRaonK = this.divDetail03.form.divRaonKMulti.form.fvRaonKObj;

        	/* 체크박스로 선택된 파일정보 불러오기 */
        	var objSelectedListInfo = objRaonK.GetSelectedListInfo();

        	var arrNewList = objSelectedListInfo.newFile;			// 새로 업로드된 파일 정보 - 업로로 올린 파일정보
        	var arrWebList = objSelectedListInfo.webFile;			// 웹파일 정보 - 조회된 파일정보

        	var nSelectedFileCount = 0;
        	var objFileInfo = [];
        	var nNoCnt = 0;
        	var i;
        	var encodedRowJson;
        	var rowJson;

        	if(!this.gfnIsNull(arrNewList))		// 새로 업로드된 파일 정보
        	{
        		nSelectedFileCount += arrNewList.length;
        		for(i=0;i<arrNewList.length;i++)
        		{
        			encodedRowJson = arrNewList[i].responseCustomValue;
        			if(!this.gfnIsNull(encodedRowJson))
        			{
        				/* Base64 디코딩 */
        				rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐

        				/* 신규파일 - 파일식별 정보 추출하기 */
        				objFileInfo[nNoCnt] = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        				nNoCnt++;
        			}
        		}
        	}

        	if(!this.gfnIsNull(arrWebList))		// 조회된 파일정보
        	{
        		nSelectedFileCount += arrWebList.length;
        		for(i=0;i<arrWebList.length;i++)
        		{
        			encodedRowJson = arrWebList[i].customValue;
        			if(!this.gfnIsNull(encodedRowJson))
        			{
        				/* Base64 디코딩 */
        				rowJson = JSON.parse(decodeURIComponent(escape(atob(encodedRowJson)))); // 한글 안깨짐

        				/* 조회파일 - 파일식별 정보 추출하기 */
        				objFileInfo[nNoCnt] = {"fileGroupMgno" : rowJson.fileGroupMgno, "fileMgno" : rowJson.fileMgno};
        				nNoCnt++;
        			}
        		}
        	}

        	trace("nSelectedFileCount:"+nSelectedFileCount);
        	if(!this.gfnIsNull(objFileInfo))
        	{
        		trace("objFileInfo:"+JSON.stringify(objFileInfo));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail01.form.btnSearch.addEventHandler("onclick",this.divDetail01_btnSearch_onclick,this);
            this.divDetail01.form.stcLabel02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDetail01.form.btnResetUpload.addEventHandler("onclick",this.divDetail01_btnResetUpload_onclick,this);
            this.divDetail02.form.btnSave.addEventHandler("onclick",this.divDetail02_btnSave_onclick,this);
            this.divDetail03.form.btnSearch.addEventHandler("onclick",this.divDetail03_btnSearch_onclick,this);
            this.divDetail03.form.stcLabel02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDetail03.form.btnResetUpload.addEventHandler("onclick",this.divDetail03_btnResetUpload_onclick,this);
            this.divDetail03.form.btnCheckInfo.addEventHandler("onclick",this.divDetail03_btnCheckInfo_onclick,this);
            this.divDetail04.form.btnSave.addEventHandler("onclick",this.divDetail04_btnSave_onclick,this);
            this.btnFullDownload.addEventHandler("onclick",this.btnFullDownload_onclick,this);
            this.btnCheckFileDownLoad.addEventHandler("onclick",this.btnCheckFileDownLoad_onclick,this);
            this.btnCheckFileDownLoadCheck.addEventHandler("onclick",this.btnCheckFileDownLoadCheck_onclick,this);
            this.btnFullDownloadCheck.addEventHandler("onclick",this.btnFullDownloadCheck_onclick,this);
            this.divDetail05.form.btnSearch.addEventHandler("onclick",this.divDetail03_btnSearch_onclick,this);
            this.divDetail05.form.btnResetUpload.addEventHandler("onclick",this.divDetail03_btnResetUpload_onclick,this);
            this.divDetail05.form.btnCheckInfo.addEventHandler("onclick",this.divDetail03_btnCheckInfo_onclick,this);
            this.divDetail05.form.stcLabel02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
        };
        this.loadIncludeScript("sampleRaonK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
