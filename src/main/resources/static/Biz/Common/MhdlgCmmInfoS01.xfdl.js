(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member");
            this.set_titletext("정보공개 방법론 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExplnFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fullFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlBtn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bfdlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staRvsnTitle","55","13",null,"30","1256",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개정이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divRvsnList","55","staRvsnTitle:10",null,"173","55",null,"1130",null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRvsnList","0","0",null,null,"0","0",null,null,null,null,this.divRvsnList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"550\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"개정이력\"/><Cell col=\"2\" text=\"방법론명(원문명)\"/><Cell col=\"3\" rowspan=\"2\" text=\"유효시작일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"상세보기\"/><Cell row=\"1\" col=\"2\" text=\"방법론명(국문명)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" tooltiptext=\"bind:rvsnDgrNm\" text=\"bind:rvsnDgrNm\"/><Cell col=\"2\" textAlign=\"left\" tooltiptext=\"bind:mhdlgOrgtNm\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 2)\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:vldBgngYmd\" tooltiptext=\"bind:vldBgngYmd\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"bind:btnCtl\" tooltiptext=\"bind:btnCtl\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"12px 10px\" accessibilitydescription=\"상세화면전환\"/><Cell row=\"1\" col=\"2\" tooltiptext=\"bind:mhdlgKrnNm\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgKrnNm, currow, 2)\"/></Band></Format></Formats>");
            this.divRvsnList.addChild(obj.name, obj);

            obj = new Static("staMhdlgTitle","55","divRvsnList:20","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMhdlgInfo","55","staMhdlgTitle:10",null,"539","55",null,"1130",null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMhdlgOrgtNmArea","0","0",null,"44","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staMhdlgKrnNmArea","0","staMhdlgOrgtNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgOrgtNm","157","7",null,"30","20",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("방법론명(원문)");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staMhdlgOrgtNm","0","0","150","44",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("0");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staMhdlgKrnNm","0","staMhdlgOrgtNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("2");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgKrnNm","157","50",null,"30","20",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("방법론명(국문)");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staAgrClausArea","0","staMhdlgKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staAgrClausCdNm","0","staMhdlgKrnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("4");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmd","50%","86","150","44",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("6");
            obj.set_text("유효시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Edit("edtVldBgngYmd","900","93",null,"30","7",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("유효시작일자");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Edit("edtAgrClausCdNm","157","93",null,"30","750",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("파리협정조항");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staAgeListArea","0","staAgrClausArea:-1",null,"184","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staAgrStiplList","0","staAgrClausCdNm:-1","150","184",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("8");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staBizFldArea","0","staAgeListArea:-1",null,"184","0",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staBizFldList","0","staAgrStiplList:-1","150","184",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("10");
            obj.set_text("방법론분야");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staExplnArea","0","staBizFldArea:-1",null,"44","-1",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("staExplnFlmno","0","staBizFldList:-1","150","44",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("12");
            obj.set_text("설명파일");
            obj.set_cssclass("sta_WF_Label");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Static("stcExplnFlmno","165","staExplnArea:-37","455","30",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("13");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("설명파일");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Button("btnExplnFlmno","stcExplnFlmno:10","staExplnArea:-37","66","30",null,null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("14");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("설명파일다운로드");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Grid("grdAgrStiplList","157","staAgeListArea:-176",null,"168","7",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"513\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"협정/약정/MOU명\"/><Cell col=\"1\" text=\"체결국\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, cncldKrnNm, currow, 0)\" tooltiptext=\"bind:cncldKrnNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"bind:ntnNm\" tooltiptext=\"bind:ntnNm\"/></Band></Format></Formats>");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Grid("grdBizFldList","157","staBizFldArea:-176",null,"168","7",null,null,null,null,null,this.divMhdlgInfo.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\"/><Cell col=\"1\" text=\"사업 세부분야\"/><Cell col=\"2\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizFldKornNm, currow, 0)\" tooltiptext=\"bind:bizFldKornNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizDtlFldKornNm, currow, 1)\" tooltiptext=\"bind:bizDtlFldKornNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:mhdlgUnqno\" tooltiptext=\"bind:mhdlgUnqno\"/></Band></Format></Formats>");
            this.divMhdlgInfo.addChild(obj.name, obj);

            obj = new Button("btnDocList","staRvsnTitle:3","13","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            obj.set_accessibilitylabel("개정이력보기");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","55","divMhdlgInfo:20",null,"62","55",null,"1130",null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","80","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_accessibilitylabel("목록");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRvsnList.form
            obj = new Layout("default","",0,0,this.divRvsnList.form,function(p){});
            this.divRvsnList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgInfo.form
            obj = new Layout("default","",0,0,this.divMhdlgInfo.form,function(p){});
            this.divMhdlgInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,930,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMhdlgInfo.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMhdlgInfo.form.stcExplnFlmno","text","dsExplnFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMhdlgInfo.form.edtMhdlgOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMhdlgInfo.form.edtMhdlgKrnNm","value","dsMhdlgDetail","mhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMhdlgInfo.form.edtAgrClausCdNm","value","dsMhdlgDetail","agrClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMhdlgInfo.form.edtVldBgngYmd","value","dsMhdlgDetail","vldBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MhdlgCmmInfoS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 방법론 상세화면
        * FILE NAME     : MhdlgCmmInfoS01.xfdl
        * DESCRIPTION   : 정보공개 방법론 상세화면 관련 스크립트
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.12.12    조성현	     최초생성
        ***********************************************************************************/


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvRtnVal = "";
        this.fvArgSend = "";
        this.fvPrePage = "";

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {

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
        	trace("[divDataBoardS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;

        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);
        	this.getOwnerFrame().form.fnLoadComplete('MhdlgInfoS01');


        	/*
        	// 권한 확인
        	// Lib_Constants.xjs > objAuth 키값 참고
        	// 권한 Y/N 정보로 업무화면의 내부버튼 제어가 필요할때 사용 , 권한은 gdsMenu 의 각 권한 컬럼 정보로 gfnSetFormInit 호출시 셋팅되어짐.
        	var sRtn = this.gfnGetAuth(this, "InqAuthrt");		// 조회권한 Y/N
        	trace("sRtn:"+sRtn);
        	*/
        };

        /**
         * @description 이미 오픈된 상태일 경우는 fnParamInit() 함수가 호출됨
        				Frame.js > gfnCallOpenMenu, gfnOpenMenu  => frameWork > fnCallOpenedForm 에서 호출
        				화면별 필요 코드 추가
         */
        this.fnParamInit = function()
        {
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	trace("[sampleScript][fnParamInit]this.fvArgRecv:"+this.fvArgRecv);
        	trace("this.fvArgRecv.param1:"+this.fvArgRecv.param1+"\nthis.fvArgRecv.objDs:"+this.fvArgRecv.objDs.saveXML());
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);
        	// TODO
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// TODO
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

        };

        /**
         * @description Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트
         */
        this.form_onkeyup = function(obj,e)
        {
        	// 팝업에서 취소시 닫기 기능용
        	if( e.keycode == 27 )				// ESC
        	{
        		this.close("CANCEL");
        	}
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
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
        		case "MhdlgDtl" :
        			var explnFlmno = this.dsMhdlgDetail.getColumn(0,'explnFlmno');

        			this.dsFileInfo.clearData();
        			var nRow = this.dsFileInfo.addRow();
        			this.dsFileInfo.setColumn(nRow,'flag', 'explnFlmno');
        			this.dsFileInfo.setColumn(nRow,'fileGroupMgno', explnFlmno);

        			this.fnFileSearch();
        		break;
        		case "fileSearch" :
        			var fullFileNm = this.dsExplnFile.getColumn(0,'fullFileNm');
        			if(this.gfnIsNull(fullFileNm))
        			{
        				this.divMhdlgInfo.form.btnExplnFlmno.set_visible(false);
        			}else
        			{
        				this.divMhdlgInfo.form.btnExplnFlmno.set_visible(true);
        				this.divMhdlgInfo.form.stcExplnFlmno.set_text(fullFileNm+" ");
        				this.divMhdlgInfo.form.resetScroll();
        			}

        		break;
        		default :
        		break;
        	}
        };
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "flmno" :
        			break;
        		default :
        			break;
        	}
        };

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
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "flmno" :
        			break;
        		default :
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        this.fnSearch = function()
        {

         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "MhdlgDtl";
          	objArgs.url 			= "/common/inforls/selectMhdlgDtl.irs";
          	objArgs.inds			= "dsSrh=dsSrh";
          	objArgs.outds			= "dsMhdlgDetail=dsMhdlgDetail"
        							+ " dsDocList=dsDocList"
        							+ " dsBizFldList=dsBizFldList"
        							+ " dsAgrStiplList=dsAgrStiplList";
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        };

        //파일명 조회
        this.fnFileSearch = function()
        {
        	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "fileSearch";
          	objArgs.url 			= "/common/inforls/selectFileNm.irs";
          	objArgs.inds			= "dsFileInfo=dsFileInfo";
          	objArgs.outds			= "dsExplnFile=dsExplnFile";
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        }

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {
        	trace("[DataBoardS01]fnChangeDiv =========================");
        	this.fnClearDataSet();
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);

        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.mhdlgMgno))
        		{
        			this.dsSrh.setColumn(0,'mhdlgMgno',objArgs.mhdlgMgno)
        		}

        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvPrePage = objArgs.prePage;
        		}
        	}
        	this.fnSearch();
        }

        /**
         * @description 데이터셋 초기화
        */
        this.fnClearDataSet = function()
        {
        	this.dsAgrStiplList.clearData();
        	this.dsBizFldList.clearData();
        	this.dsDocList.clearData();
        	this.dsExplnFile.clearData();
        	this.dsFileInfo.clearData();
        	this.dsMhdlgDetail.clearData();
        	this.dsSrh.addRow();
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 목록버튼 클릭이벤트
        */
        this.btnList_onclick = function(obj,e)
        {
        	var prePage = this.fvPrePage;
        	if(!this.gfnIsNull(prePage))
        	{
        		if(prePage == "SearchCmmInfoM00")
        		{
        			this.getOwnerFrame().form.staTitleNm.set_text("통합검색");
        			this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoM00");

        		}else if (prePage == "SearchCmmInfoS01")
        		{
        			this.getOwnerFrame().form.divShowAndHide("divSearchCmmInfoS01");
        			var objArgs = {};
        			objArgs.flag = "mhdlg";
        			this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        		}else if (prePage == "MhdlgCmmInfoM00")
        		{
        			this.getOwnerFrame().form.fnMhdlgInfoListCall();
        		}
        	}else
        	{
        		this.getOwnerFrame().form.fnMhdlgInfoListCall();
        	}
        };

        this.divMhdlgInfo_btnExplnFlmno_onclick = function(obj,e)
        {
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsExplnFile.getColumn(0, "fileGroupMgno"), fileMgno : this.dsExplnFile.getColumn(0, "fileMgno")}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        this.div03_grdRvsnList_oncellclick = function(obj,e)
        {
        	if(e.cell == 4)
        	{
        		this.scrollTo(0,0);
        		this.dsSrh.setColumn(0, "mhdlgMgno", this.dsDocList.getColumn(e.row, "mhdlgMgno"));
        		this.dsSrh.setColumn(0, "mhdlgDgr", this.dsDocList.getColumn(e.row, "mhdlgDgr"));
        		this.dsSrh.setColumn(0, "mhdlgGroupMgno", this.dsDocList.getColumn(e.row, "mhdlgGroupMgno"));
        		this.dsSrh.setColumn(0, "rvsnDgr", this.dsDocList.getColumn(e.row, "rvsnDgr"));

        		this.fnSearch();
        	}
        };

        this.btnDocList_onclick = function(obj,e)
        {
        	var height = this.div03.height;
        	if(height >0)
        	{
        		this.div03.set_height(0);
        	}else
        	{
        		this.div03.set_height(173);
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divRvsnList.form.grdRvsnList.addEventHandler("oncellclick",this.div03_grdRvsnList_oncellclick,this);
            this.divMhdlgInfo.form.btnExplnFlmno.addEventHandler("onclick",this.divMhdlgInfo_btnExplnFlmno_onclick,this);
            this.btnDocList.addEventHandler("onclick",this.btnDocList_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.btnList_onclick,this);
        };
        this.loadIncludeScript("MhdlgCmmInfoS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
