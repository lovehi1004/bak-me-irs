(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePaging");
            this.set_titletext("페이징 처리 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"col\" type=\"STRING\" size=\"256\"/><Column id=\"strtNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"endNo\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo><Rows><Row><Col id=\"mnuId\">mnu01</Col><Col id=\"mnuNm\">메뉴01</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu02</Col><Col id=\"mnuNm\">메뉴02</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu03</Col><Col id=\"mnuNm\">메뉴03</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu04</Col><Col id=\"mnuNm\">메뉴04</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu05</Col><Col id=\"mnuNm\">메뉴05</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu06</Col><Col id=\"mnuNm\">메뉴06</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu07</Col><Col id=\"mnuNm\">메뉴07</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu08</Col><Col id=\"mnuNm\">메뉴08</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu09</Col><Col id=\"mnuNm\">메뉴09</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu10</Col><Col id=\"mnuNm\">메뉴10</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo><Rows><Row><Col id=\"mnuId\">mnu11</Col><Col id=\"mnuNm\">메뉴11</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu12</Col><Col id=\"mnuNm\">메뉴12</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu13</Col><Col id=\"mnuNm\">메뉴13</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu14</Col><Col id=\"mnuNm\">메뉴14</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu15</Col><Col id=\"mnuNm\">메뉴15</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu16</Col><Col id=\"mnuNm\">메뉴16</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu17</Col><Col id=\"mnuNm\">메뉴17</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu18</Col><Col id=\"mnuNm\">메뉴18</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu19</Col><Col id=\"mnuNm\">메뉴19</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu20</Col><Col id=\"mnuNm\">메뉴20</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo><Rows><Row><Col id=\"mnuId\">mnu21</Col><Col id=\"mnuNm\">메뉴21</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu22</Col><Col id=\"mnuNm\">메뉴22</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu23</Col><Col id=\"mnuNm\">메뉴23</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu24</Col><Col id=\"mnuNm\">메뉴24</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu25</Col><Col id=\"mnuNm\">메뉴25</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu26</Col><Col id=\"mnuNm\">메뉴26</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu27</Col><Col id=\"mnuNm\">메뉴27</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu28</Col><Col id=\"mnuNm\">메뉴28</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu29</Col><Col id=\"mnuNm\">메뉴29</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu30</Col><Col id=\"mnuNm\">메뉴30</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList04", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo><Rows><Row><Col id=\"mnuId\">mnu31</Col><Col id=\"mnuNm\">메뉴31</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu32</Col><Col id=\"mnuNm\">메뉴32</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu33</Col><Col id=\"mnuNm\">메뉴33</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu34</Col><Col id=\"mnuNm\">메뉴34</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu35</Col><Col id=\"mnuNm\">메뉴35</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu36</Col><Col id=\"mnuNm\">메뉴36</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu37</Col><Col id=\"mnuNm\">메뉴37</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu38</Col><Col id=\"mnuNm\">메뉴38</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu39</Col><Col id=\"mnuNm\">메뉴39</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu40</Col><Col id=\"mnuNm\">메뉴40</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList05", this);
            obj._setContents("<ColumnInfo><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"totalCount\" type=\"int\" size=\"4\"/></ColumnInfo><Rows><Row><Col id=\"mnuId\">mnu41</Col><Col id=\"mnuNm\">메뉴41</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu42</Col><Col id=\"mnuNm\">메뉴42</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu43</Col><Col id=\"mnuNm\">메뉴43</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu44</Col><Col id=\"mnuNm\">메뉴44</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu45</Col><Col id=\"mnuNm\">메뉴45</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu46</Col><Col id=\"mnuNm\">메뉴46</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu47</Col><Col id=\"mnuNm\">메뉴47</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu48</Col><Col id=\"mnuNm\">메뉴48</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu49</Col><Col id=\"mnuNm\">메뉴49</Col><Col id=\"totalCount\">50</Col></Row><Row><Col id=\"mnuId\">mnu50</Col><Col id=\"mnuNm\">메뉴50</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfoResult", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col><Col id=\"totalCount\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdResult","30","107",null,"475","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"mnuId\"/><Cell col=\"2\" text=\"mnuNm\"/><Cell col=\"3\" text=\"totalCount\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:mnuId\"/><Cell col=\"2\" text=\"bind:mnuNm\"/><Cell col=\"3\" text=\"bind:totalCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdResult:25",null,"25","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Static("sta_masterComCd00","31","23","94","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("페이징목록");
            obj.set_cssclass("sta_WF_TitleLev1");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPageInfo","360","48","402","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPageInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"totalCount\"/><Cell col=\"1\" text=\"pageNo\"/><Cell col=\"2\" text=\"listSize\"/></Band><Band id=\"body\"><Cell text=\"bind:totalCount\"/><Cell col=\"1\" text=\"bind:pageNo\"/><Cell col=\"2\" text=\"bind:listSize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","706","17","56","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Static("stcTotalCount","40","70","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("samplePaging.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : samplePaging Form
        * FILE NAME     : samplePaging.xfdl
        * DESCRIPTION   : 페이징 처리 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.08    TOBESOFT	     최초생성
        ***********************************************************************************/


        /*
         1. 데이타셋 dsPageInfo(페이지정보 및 컬럼정보) 를 생성,
        	 <ColumnInfo>
        	  <Column id="totalCount" type="BIGDECIMAL" size="256"/>
        	  <Column id="pageNo" type="BIGDECIMAL" size="256"/>
        	  <Column id="listSize" type="BIGDECIMAL" size="256"/>
        	</ColumnInfo>
        	<Rows>
        	  <Row>
        		<Col id="pageNo">1</Col>
        		<Col id="totalCount">0</Col>
        		<Col id="listSize">10</Col>
        	  </Row>
        	</Rows>

        	* totalCount  : 전체 Row수 (서비스 호출 후 전달됨)
        	* pageNo : 현재 페이지
        	* listSize : 한번에 가져오는 Row수

            조회조건 입력 데이타 셋에 페이징용 컬럼을 생성 strtNo(INT), endNo(INT)
        	페이징 영역 div 를 생성하고 url 설정   divPaging URL = "Frame_Common::comPaging.xfdl";
         2. 페이징용 Dataset에 페이징 변수를 선언한다.(예:dsPageInfo)
         3. 페이징용 callback함수 생성(예:fnPagingCallback)
         3. fnFormInit 함수에 페이징 초기설정함수(fnInitPage) 호출
         3. transaction - inDataset에 페이지정보 데이타셋을 추가한다.
                          ex) objArgs.inds = "dsCond=dsCond pageInfo=dsPageInfo";
         4. callback 함수에서 페이징 표시 처리를 한다.
        	divPaging 의 fnRedrawPage() 함수 호출.
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
        	trace("[samplePaging]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
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
        		case "searchList" :
        			// 후처리 코드
        			this.stcTotalCount.set_text("총 <fc v='#f96262'>"+this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
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
        /**
         * @desc 페이징콜백 페이징화면에서 눌린페이지 넘겨줌
         * @param {number} nPage 선택된 페이지
         * @param {number} nRecordScale 한번에 가져올 Row수
         * @return N/A
        */
        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearch(); // 조회함수호출
        };

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnCallSearch = function()
        {
        	// 호출전 Validation 체크
        	if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
        // 	var objArgs = {};
        // 	objArgs.svcId 			= "searchList";
        // 	objArgs.url 			= "";
        // 	objArgs.inds      		= "dsCond=dsCond pageInfo=dsPageInfo";
        // 	objArgs.outds     		= "dsList=dsList dsPageInfo=pageInfo";
        // 	objArgs.args 			= "";
        // 	objArgs.callback		= "fnCallback";

        //	this.gfnTransaction(this, objArgs);

        	// 개발샘플용 코드
        	var dsTemp;
        	var nTempPage;
        	nTempPage = this.dsPageInfo.getColumn(0, "pageNo");
        	if(this.gfnIsNull(nTempPage)) nTempPage = 1;

        	dsTemp = this["dsList"+nTempPage.toString().padLeft(2,"0")];

        	this.dsList.copyData(dsTemp);

        	this.dsPageInfoResult.setColumn(0, "pageNo", nTempPage);
        	this.dsPageInfo.copyData(this.dsPageInfoResult);

        	this.fnCallback("searchList", 0, "SUCC");
        };

        /**
         * @desc 호출전 Validation 체크
         * @param N/A
         * @return {boolean} 체크시 정상 - true , 오류 - false
        */
        this.fnCallSearchValidCheck = function()
        {
        	// Transaction 호출 전에 체크해야 될 사항에 대해 기술
        	// TODO

        	return true;
        };

        /**
         * @desc 호출전 데이터 설정 및 가공 처리
         * @param N/A
         * @return {boolean} 처리결과 정상 - true , 오류 - false
        */
        this.fnCallSearchValueSetting = function()
        {
        	// Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술

        	//this.dsCond 데이타셋의 페이지관련 컬럼 반영
        	var nCurPage    = this.dsPageInfo.getColumn(0, "pageNo");
        	var nCntPerPage = this.dsPageInfo.getColumn(0, "listSize");

        	var startRow = ((nexacro.toNumber(nCurPage)-1) * nexacro.toNumber(nCntPerPage)) + 1;
        	var endRow   = startRow +  nexacro.toNumber(nCntPerPage) - 1;

        	this.dsCond.setColumn(0, "strtNo", startRow);
        	this.dsCond.setColumn(0, "endNo", endRow);
        	return true;
        };


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 조회버튼 클릭시
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearch();
        };

        /**
         * @desc	조회조건에 페이징정보 반영
         * @param	{object} objSchDs 			- 조회 Dataset
         * @param   {object} objPagingDs 		- 페이징 DataSet
         * @retunr	N/A
         */
        this.fnPagingApplySearchDs = function(objSchDs, objPagingDs)
        {
        	var nCurPage    = objPagingDs.getColumn(0, "pageNo");
        	var nCntPerPage = objPagingDs.getColumn(0, "listSize");

        	var startRow = ((nexacro.toNumber(nCurPage)-1) * nexacro.toNumber(nCntPerPage)) + 1;
        	var endRow   = startRow +  nexacro.toNumber(nCntPerPage) - 1;

        	objSchDs.setColumn(0, "strtNo", startRow);
        	objSchDs.setColumn(0, "endNo", endRow);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsCond.addEventHandler("onvaluechanged",this.dsCond_onvaluechanged,this);
        };
        this.loadIncludeScript("samplePaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
