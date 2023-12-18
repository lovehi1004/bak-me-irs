(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MhdlgPrcndM00");
            this.set_titletext("방법론 현황 관리 목록");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhAplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgPrcndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"srhFrom\" type=\"STRING\" size=\"256\"/><Column id=\"srhTo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgPrcndTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyClCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrcsTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddDataYn", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdMgno\"/><Col id=\"cdKornNm\">-전체-</Col></Row><Row><Col id=\"cdMgno\">Y</Col><Col id=\"cdKornNm\">추가자료요청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"INT\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausNm\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"govBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgFldListText\" type=\"STRING\" size=\"256\"/><Column id=\"isExplnFlmnoYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizDtlsFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"srhCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srhCd\">dsBizFldCd</Col></Row><Row><Col id=\"srhCd\">dsBizDtlsFldCd</Col></Row><Row><Col id=\"srhCd\">dsInstCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCds", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCds", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"131","25",null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Refresh");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAplyClCd","35","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAplyClCd","151","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsAplyClCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_index("-1");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlgPrcndTypeCd","361","30","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("제·개정 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMhdlgPrcndTypeCd","492","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMhdlgPrcndTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlgNm","1001","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("방법론명 ");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFldCd","35","staAplyClCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("방법론 분야");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizDtlsFldCd","361","staMhdlgPrcndTypeCd:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("방법론 세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","151","cboAplyClCd:5","179","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsBizFldCd");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","492","cboMhdlgPrcndTypeCd:5","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizDtlsFldCd2");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgNm","1121","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqno","666","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("고유번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgUnqno","785","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_extendsizetype("none");
            obj.set_cellsizingtype("both");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"39\"/><Column size=\"86\"/><Column size=\"96\"/><Column size=\"73\"/><Column size=\"89\"/><Column size=\"210\"/><Column size=\"136\"/><Column size=\"93\"/><Column size=\"120\"/><Column size=\"83\"/><Column size=\"76\"/><Column size=\"76\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"신청구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"파리협정조항\"/><Cell col=\"4\" rowspan=\"2\" text=\"제·개정\"/><Cell col=\"5\" rowspan=\"2\" text=\"사업수행자\"/><Cell col=\"6\" text=\"사업명(원문)\"/><Cell col=\"7\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"8\" rowspan=\"2\" text=\"방법론&#13;&#10;고유번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"방법론&#13;&#10;유효시작일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"수정이력\"/><Cell col=\"11\" rowspan=\"2\" text=\"설명파일\"/><Cell col=\"12\" rowspan=\"2\" text=\"조회\"/><Cell row=\"1\" col=\"6\" text=\"사업명(국문)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:rn\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, aplyTypeNm, currow, 2)\" tooltiptext=\"bind:aplyTypeNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:agreeClausNm\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:regRsnNm\" textAlign=\"center\" displaytype=\"buttoncontrol\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 6)\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" tooltiptext=\"bind:mhdlgFldListText\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgFldListText, currow, 7)\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" text=\"bind:mhdlgUnqno\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" text=\"bind:vldBgngYmd\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 0px\" text=\"이력\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"none\" padding=\"10px 0px\" text=\"설명파일\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"buttoncontrol\" text=\"조회\" padding=\"10px 0px\"/><Cell row=\"1\" col=\"6\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgKrnNm, currow, 6)\" tooltiptext=\"bind:mhdlgKrnNm\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnFileDown",null,null,"114","32","152","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail","1662","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","1662","308","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divList.form.divSearch.form
            obj = new Layout("default","",0,0,this.divList.form.divSearch.form,function(p){});
            this.divList.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divList.form.divSearch.form.cboAplyClCd","value","dsSrh","srhAplyClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divList.form.divSearch.form.cboMhdlgPrcndTypeCd","value","dsSrh","srhMhdlgPrcndTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divList.form.divSearch.form.cboPrcsTypeCd","value","dsSrh","srhPrcsTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divList.form.divSearch.form.edtMhdlgNm","value","dsSrh","srhMhdlgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divList.form.divSearch.form.cboBizFldCd","value","dsSrh","srhBizFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divList.form.divSearch.form.cboBizDtlsFldCd","value","dsSrh","srhBizDtlsFldCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divList.form.divSearch.form.cboInstMngNo","value","dsSrh","srhInstMngNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divList.form.divSearch.form.edtMhdlgNm2","value","dsSrh","srhMhdlgNm2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgPrcndM00.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionM00 Form
        * FILE NAME     : sampleFormActionM00.xfdl
        * DESCRIPTION   : 화면전환샘플 (목록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
        ***********************************************************************************/



        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvSearchShowHideObjList = [this.divList.form.divSearch.form.staBizFldCd , this.divList.form.divSearch.form.cboBizFldCd
        								, this.divList.form.divSearch.form.staBizDtlsFldCd , this.divList.form.divSearch.form.cboBizDtlsFldCd
        								];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 131;			// 조회영역 펼치기시 height
        this.fvSearchHideHeight = 94;			// 조회영역 숨기기시 height
        this.roleIdMgno = this.fvApp.User.roleIdMgno;
        this.isCallMhdlgPrcndDtl = false;
        this.isCallMhdlgPrcndMod= false;
        this.fvTempInfo = {};

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// 그리드 설정
        	//this.divList.form.grdList.griduserproperty = "none";

        	// div 위치 조정 , divDetail (상세) , divReg (등록)
        	this.divDetail.set_left(0);
        	this.divDetail.set_top(0);
        	this.divDetail.set_width(null);
        	this.divDetail.set_height(null);
        	this.divDetail.set_right(0);
        	this.divDetail.set_bottom(0);

        	this.divReg.set_left(0);
        	this.divReg.set_top(0);
        	this.divReg.set_width(null);
        	this.divReg.set_height(null);
        	this.divReg.set_right(0);
        	this.divReg.set_bottom(0);

        	// 접힘상태로 처리
        	this.fnSearchShowHide();
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
        	trace("[MhdlgPrcndM00]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 상세, 등록화면 연결
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\agrstipl\ ==> Biz_agrstipl::xxxxx.xfdl
        	// C:\Users\admin\git\gov-me-irs-nexacro-n-studio\Biz\biz\aply\ ==> Biz_biz::aply/xxxxx.xfdl
        	//this.divDetail.set_url("Develop_Sample::sampleFormActionS01.xfdl");
        	//this.divReg.set_url("Biz_mhdlg::MhdlgPrcndS02.xfdl");
        	//상세화면


        	// 	// 검색용 데이터셋 초기화
            this.dsSrh.clearData();
            this.dsSrh.addRow();
        	this.dsSrh.setColumn(0, "srhAplyClCd", "");
        	this.dsSrh.setColumn(0, "srhMhdlgPrcndTypeCd", "");
        	this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
        	// 공통코드 조회
         	var arrParam = [];
        	arrParam[0] = {outDs:"dsAplyClCd", groupId:"MHDLG_APLY_CL_CD", headflag:"A" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsMhdlgPrcndTypeCd", groupId:"MHDLG_PRCND_TYPE_CD", headflag:"A" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsPrcsTypeCd", groupId:"PRCS_TYPE_CD", headflag:"A" , useYn:"Y"};
         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallCommonCodeList();
        	this.fnCallSearchList(); // 조회함수호출
        };


        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {
        	trace("[MhdlgPrcndM00]Form onsize grdList.set_enableredraw(false)");
        	this.divList.form.grdList.set_enableredraw(false);
        	trace("[MhdlgPrcndM00]Form onsize grdList.set_enableredraw(true)");
        	this.divList.form.grdList.set_enableredraw(true);
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			// 후처리 코드
        			/*this.dsBizGbn.setColumn(0, "srhBizGbn", "BGC0001");*/
        			trace("코드 수신 완료!!");
        			break;
        		default:
        			break;
        	}
        };

        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgAlert01" :
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
        		switch (nErrCode)
        		{
        			case -1 :
        				// 후처리 코드
        				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			if(this.dsPageInfo.getColumn(0,"totalCount") == 0)
        			{
        				this.dsList.clearData();
        			}
        			this.divList.form.staTotCnt.set_text("총 <fc v='#f96262'>"+nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"))+"</fc> 건");
        			this.divList.form.divPaging.form.fnRedrawPage(this.dsPageInfo);

        			this.fnGrdformChange();
        			break;
        		case "searchFld":

        			this.dsBizFldCds.copyData(this.dsBizFldCd,false);
        			this.dsBizDtlsFldCds.copyData(this.dsBizDtlsFldCd,false);

        			//상세화면용 '선택' 항목 생성
        			var nRow1 = this.dsBizFldCds.insertRow(0);
        			this.dsBizFldCds.setColumn(nRow1,"bizFldCdMgno", '');
        			this.dsBizFldCds.setColumn(nRow1,"bizFldKornNm", '- 선택 -');

        			var nRow2 = this.dsBizDtlsFldCds.insertRow(0);
        			this.dsBizDtlsFldCds.setColumn(nRow2,"bizFldDtlsCdMgno", '');
        			this.dsBizDtlsFldCds.setColumn(nRow2,"bizFldCdMgno", '');
        			this.dsBizDtlsFldCds.setColumn(nRow2,"bizDtlsFldKornNm", '- 선택 -');

        			//'전체' 항목 생성
        			var nRow3 = this.dsBizFldCd.insertRow(0);
        			this.dsBizFldCd.setColumn(nRow3,"bizFldCdMgno", '');
        			this.dsBizFldCd.setColumn(nRow3,"bizFldKornNm", '- 전체 -');
        			this.divList.form.divSearch.form.cboBizFldCd.set_index(0);

        			var nRow4 = this.dsBizDtlsFldCd.insertRow(0);
        			this.dsBizDtlsFldCd.setColumn(nRow4,"bizFldDtlsCdMgno", '');
        			this.dsBizDtlsFldCd.setColumn(nRow4,"bizFldCdMgno", '');
        			this.dsBizDtlsFldCd.setColumn(nRow4,"bizDtlsFldKornNm", '- 전체 -');
        			this.divList.form.divSearch.form.cboBizDtlsFldCd.set_index(0);

        			var nRow5 = this.dsInstCd.insertRow(0);
        			this.dsInstCd.setColumn(nRow5,"code", '');
        			this.dsInstCd.setColumn(nRow5,"name", '- 전체 -');
        			this.divList.form.divSearch.form.cboInstMngNo.set_index(0);

        			this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");


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

        	switch (sPopupId)
        	{

        		//사업수행자 검색 팝업
        		case "popModalExcelDownP01" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			this.dsSrh.setColumn(0,'srhFrom',objRtnValue["from"])
        			this.dsSrh.setColumn(0,'srhTo',objRtnValue["to"])
        			//엑셀다운로드 시작
        			this.fnMhdlgPrcndExcelDown()
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 방법론현황목록호출
         */
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");
        	// 호출전 Validation 체크
        	//if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	//if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= "/biz/mhdlg/mhdlgPrcnd/selectMhdlgPrcndList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        /**
         * @description 공통테이블조회함수
         */
        this.fnCallCommonCodeList = function()
        {
        	trace("searchFldsearchFldsearchFldsearchFld목록 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchFld";
         	objArgs.url 			= "/common/code/selectUserCommonCodeList.irs";
         	objArgs.inds      		= "dsPrivCd=dsPrivCd";
         	objArgs.outds     		= "dsBizFldCd=dsBizFldCd" 			//사업분야
        							+ " dsBizDtlsFldCd=dsBizDtlsFldCd" 	//사업세부분야
        							+ " dsInstCd=dsInstCd"; 			//관장기관
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/


        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        /**
         * @desc 목록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function()
        {
        	// TODO
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList(); // 조회함수호출
        	trace("[MhdlgPrcndSM00]fnChangeDiv =========================");

        };

        /**
         * @description 방법론현황 엑셀다운로드
         */
        this.fnMhdlgPrcndExcelDown = function()
        {
        	var callUrl = "/biz/mhdlg/mhdlgPrcnd/selectMhdlgPrcndExcel.irs";

        	this.srhAplyClCd = this.dsSrh.getColumn(0, "srhAplyClCd");
        	this.srhMhdlgPrcndTypeCd = this.dsSrh.getColumn(0, "srhMhdlgPrcndTypeCd");
        	this.srhBizFldCd = this.dsSrh.getColumn(0, "srhBizFldCd");
        	this.srhBizDtlsFldCd = this.dsSrh.getColumn(0, "srhBizDtlsFldCd");
        	this.srhMhdlgNm = this.dsSrh.getColumn(0, "srhMhdlgNm");
        	this.srhMhdlgUnqno = this.dsSrh.getColumn(0, "srhMhdlgUnqno");
        	this.srhFrom = this.dsSrh.getColumn(0, "srhFrom");
        	this.srhTo = this.dsSrh.getColumn(0, "srhTo");



        	var url = nexacro.getApplication().Tran.fwUrl + callUrl;

        	this.fdtExcel.set_url(url);

        	if(!this.gfnIsNull(this.srhAplyClCd))
        	{
        		this.fdtExcel.setPostData("srhAplyClCd", this.srhAplyClCd);
        	}else
        	{
        		this.fdtExcel.setPostData("srhAplyClCd", "");
        	}

        	if(!this.gfnIsNull(this.srhMhdlgPrcndTypeCd))
        	{
        		this.fdtExcel.setPostData("srhMhdlgPrcndTypeCd", this.srhMhdlgPrcndTypeCd);
        	}else
        	{
        		this.fdtExcel.setPostData("srhMhdlgPrcndTypeCd", "");
        	}

        	if(!this.gfnIsNull(this.srhBizFldCd))
        	{
        		this.fdtExcel.setPostData("srhBizFldCd", this.srhBizFldCd);
        	}else
        	{
        		this.fdtExcel.setPostData("srhBizFldCd", "");
        	}

        	if(!this.gfnIsNull(this.srhBizDtlsFldCd))
        	{
        		this.fdtExcel.setPostData("srhBizDtlsFldCd", this.srhBizDtlsFldCd);
        	}else
        	{
        		this.fdtExcel.setPostData("srhBizDtlsFldCd", "");
        	}

        	if(!this.gfnIsNull(this.srhMhdlgNm))
        	{
        		this.fdtExcel.setPostData("srhMhdlgNm", this.srhMhdlgNm);
        	}else
        	{
        		this.fdtExcel.setPostData("srhMhdlgNm", "");
        	}
        	if(!this.gfnIsNull(this.srhMhdlgUnqno))
        	{
        		this.fdtExcel.setPostData("srhMhdlgUnqno", this.srhMhdlgUnqno);
        	}else
        	{
        		this.fdtExcel.setPostData("srhMhdlgUnqno", "");
        	}

        	if(!this.gfnIsNull(this.srhFrom))
        	{
        		this.fdtExcel.setPostData("srhFrom", this.srhFrom);
        	}else
        	{
        		this.fdtExcel.setPostData("srhFrom", "");
        	}

        	if(!this.gfnIsNull(this.srhTo))
        	{
        		this.fdtExcel.setPostData("srhTo", this.srhTo);
        	}else
        	{
        		this.fdtExcel.setPostData("srhTo", "");
        	}

        	this.fdtExcel.setPostData("downloadExcelFileNm","방법론현황목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","방법론현황내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();
        }

        /**
         * @description 검색영역사이즈조절
         */
        this.fnSearchShowHide = function ()
        {
        	trace("검색확장버튼 css:" + this.divList.form.btnShowHide.cssclass);

        	if(this.divList.form.btnShowHide.cssclass == this.gvBtnSearchAreaShowCssclass)		// btn_WF_SchDown  btn_WF_SchUp  btn_WFSA_Hide
        	{
        		// 숨기기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, false);
        		this.divList.form.divSearch.set_formscrollbartype("none");
        		this.divList.form.divSearch.set_height(this.fvSearchHideHeight);
        		this.divList.form.divSearch.form.resetScroll();
        		this.divList.form.btnShowHide.set_cssclass(this.gvBtnSearchAreaHideCssclass);	// btn_WFSA_Show
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}
        	else
        	{
        		// 보이기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, true);
        		this.divList.form.divSearch.set_formscrollbartype("");
        		this.divList.form.divSearch.set_height(this.fvSearchShowHeight);
        		this.divList.form.divSearch.form.resetScroll();
        		this.divList.form.btnShowHide.set_cssclass(this.gvBtnSearchAreaShowCssclass);	// btn_WFSA_Hide
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}
        };

        /**
         * @description 상세화면 로드 확인
         */
        this.fnMhdlgPrcndDtlCall = function(objArgs)
        {
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.mhdlgMgno))
        		{
        			this.fvTempInfo.mhdlgMgno = objArgs.mhdlgMgno;
        		}
        		if(!this.gfnIsNull(objArgs.mhdlgDgr))
        		{
        			this.fvTempInfo.mhdlgDgr = objArgs.mhdlgDgr;
        		}
        		if(!this.gfnIsNull(objArgs.mhdlgGroupMgno))
        		{
        			this.fvTempInfo.mhdlgGroupMgno = objArgs.mhdlgGroupMgno;
        		}
        		if(!this.gfnIsNull(objArgs.rvsnDgr))
        		{
        			this.fvTempInfo.rvsnDgr = objArgs.rvsnDgr;
        		}
        	}

        	if(!this.IsCallMhdlgPrcndDtl) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divDetail.set_url("Biz_mhdlg::MhdlgPrcndS01.xfdl");
         	}
         	else {

        		this.fnCallMhdlgPrcndDtlPage();
         	}
        }

        /**
         * @description 수정화면 로드 확인
         */
        this.fnMhdlgPrcndModCall = function(objArgs)
        {
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.mhdlgMgno))
        		{
        			this.fvTempInfo.mhdlgMgno = objArgs.mhdlgMgno;
        		}
        		if(!this.gfnIsNull(objArgs.mhdlgDgr))
        		{
        			this.fvTempInfo.mhdlgDgr = objArgs.mhdlgDgr;
        		}
        	}

        	if(!this.IsCallMhdlgPrcndMod) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divReg.set_url("Biz_mhdlg::MhdlgPrcndS02.xfdl");
         	}
         	else {

        		this.fnCallMhdlgPrcndModPage();
         	}
        }

        /**
         * @description 상세화면 전환
         */
        this.fnCallMhdlgPrcndDtlPage = function()
        {
        	var objArgs = {};
        	if(!this.gfnIsNull(this.fvTempInfo.mhdlgMgno))
        	{
        		objArgs.mhdlgMgno = this.fvTempInfo.mhdlgMgno;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.mhdlgDgr))
        	{
        		objArgs.mhdlgDgr = this.fvTempInfo.mhdlgDgr;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.mhdlgGroupMgno))
        	{
        		objArgs.mhdlgGroupMgno = this.fvTempInfo.mhdlgGroupMgno;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.rvsnDgr))
        	{
        		objArgs.rvsnDgr = this.fvTempInfo.rvsnDgr;
        	}

        	this.fvTempInfo = {};
        	this.divList.set_visible(false);
        	this.divDetail.set_visible(true);
        	this.divReg.set_visible(false);

        	this.divDetail.form.fnChangeDiv(objArgs);
        }

        /**
         * @description 직권수정화면 전환
         */
        this.fnCallMhdlgPrcndModPage = function()
        {
        	var objArgs = {};
        	if(!this.gfnIsNull(this.fvTempInfo.mhdlgMgno))
        	{
        		objArgs.mhdlgMgno = this.fvTempInfo.mhdlgMgno;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.mhdlgDgr))
        	{
        		objArgs.mhdlgDgr = this.fvTempInfo.mhdlgDgr;
        	}

        	if(!this.gfnIsNull(this.fvTempInfo.sts))
        	{
        		objArgs.sts = this.fvTempInfo.sts;
        	}
        	this.fvTempInfo = {};
        	this.divList.set_visible(false);
        	this.divDetail.set_visible(false);
        	this.divReg.set_visible(true);

        	this.divReg.form.fnChangeDiv(objArgs);

        }

        /**
         * @description 화면로드 완료시
         */
        this.fnLoadComplete = function(pageInfo)
        {
        	trace("===================== fnLoadComplete 수신완료!!!");
        	this.setWaitCursor(false);
        	if(pageInfo == 'MhdlgPrcndS01')
        	{
        		this.IsCallMhdlgPrcndDtl = true;
        		this.fnMhdlgPrcndDtlCall();
        	}else if (pageInfo == 'MhdlgPrcndS02')
        	{
        		this.IsCallMhdlgPrcndMod = true;
        		this.fnCallMhdlgPrcndModPage();
        	}
        };

        /**
         * @description 목록그리드 제어
         */
        this.fnGrdformChange = function()
        {
        	this.divList.form.grdList.setCellProperty("body", 11, "displaytype",
        	"expr:isExplnFlmnoYn == 'Y'  ?'buttoncontrol':'none'");
        	this.divList.form.grdList.setCellProperty("body", 11, "edittype",
        	"expr:isExplnFlmnoYn == 'Y' ?'none':'none'");
        	this.divList.form.grdList.setCellProperty("body", 11, "text",
        	"expr:isExplnFlmnoYn == 'Y' ?'다운로드':''");

        }

        /**
         * @description 권한학인
         */
        this.fnAccessAuth = function(roleIdMgno){
        	//사업수행자 권한
        	if(roleIdMgno == "RL00000004" || roleIdMgno == "RL00000005" || roleIdMgno == "RL00000009" || roleIdMgno == "RL00000010")
        	{
        		return true;
        	//관장기관(위탁기관) 권한
        	}else
        	{
        		return false;
        	}
        }

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 검색확장버튼 클릭이벤트
         */
        this.btnShowHide_onclick = function(obj,e)
        {
        	trace("검색확장 버튼클릭");
        	this.fnSearchShowHide();
        };

        /**
         * @description 페이지바 클릭이벤트
         */
        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        /**
         * @description 초기화버튼 클릭이벤트
         */
        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        // 	// 검색용 데이터셋 초기화
         	this.dsSrh.setColumn(0, "srhAplyClCd", "");
         	this.dsSrh.setColumn(0, "srhMhdlgPrcndTypeCd", "");
         	this.dsSrh.setColumn(0, "srhBizFldCd", "");
         	this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
         	this.dsSrh.setColumn(0, "srhMhdlgNm", "");
        	this.dsSrh.setColumn(0, "srhMhdlgUnqno", "");
        	this.divList.form.divSearch.form.cboBizFldCd.set_index(0);
        	this.divList_divSearch_cboBizFldCd_onitemchanged();

        };


        /**
         * @description 사업분야 아이템변경 이벤트
         */
        this.divList_divSearch_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	//이벤트정보가 있을 경우
        	if(e != undefined || e != null)
        	{
        		//데이터셋 필터링 조건
        		var sFilter = "bizFldCdMgno.toString().indexOf('" + e.postvalue + "') >= 0";
        		//데이터셋 필터링
        		this.dsBizDtlsFldCd.filter(sFilter);

        		//필터링된 세부분야 row수 계산
        		var cnt = this.dsBizDtlsFldCd.getRowCount();

        		//데이터셋 Row 리셋
        		this.dsBizDtlsFldCd2.clearData();

        		//데이터셋 복제 copyData.(복제대상, 필터여부 default : false);
        		var nRowCnt = this.dsBizDtlsFldCd2.copyData(this.dsBizDtlsFldCd,true);

        		//'전체' 항목 생성
        		var nRow = this.dsBizDtlsFldCd2.insertRow(0);
        		this.dsBizDtlsFldCd2.setColumn(nRow,"bizFldCdMgno", '');
        		this.dsBizDtlsFldCd2.setColumn(nRow,"bizFldDtlsCdMgno"	 , '');
        		this.dsBizDtlsFldCd2.setColumn(nRow,"bizDtlsFldKornNm"	 , '- 전체 -');

        		this.divList.form.divSearch.form.cboBizDtlsFldCd.set_index(0);
        	}
        	// 이벤트정보가 없을경우(검색영역 리셋버튼 클릭시)
        	else
        	{
        		//데이터 삭제
        		this.dsBizDtlsFldCd2.clear();

        		//데이터 구조 생성
        		this.dsBizDtlsFldCd2.addColumn("bizFldCdMgno", "STRING", 255);
        		this.dsBizDtlsFldCd2.addColumn("bizFldDtlsCdMgno", "STRING", 255);
        		this.dsBizDtlsFldCd2.addColumn("bizDtlsFldKornNm", "STRING", 255);

        		//'전체' 항목 생성
        		this.dsBizDtlsFldCd2.addRow(0);
        		this.dsBizDtlsFldCd2.setColumn(0,'bizFldCdMgno','');
        		this.dsBizDtlsFldCd2.setColumn(0,'bizFldDtlsCdMgno','');
        		this.dsBizDtlsFldCd2.setColumn(0,'bizDtlsFldKornNm','- 전체 -')

        		// '전체'항목 선택
        		this.divList.form.divSearch.form.cboBizDtlsFldCd.set_index(0);
        	}
        };

        /**
         * @description 목록 그리드 클릭이벤트
         */
        this.divList_grdList_oncellclick = function(obj,e)
        {
        	if(e.col == 4)
        	{
        		var sPopupId 	= "popModalMhdlgP01";
        		var sMnuId 		= "MN03050000";
        		var oPosition	= {width:800,height:750};
        		var objArgs		= {mhdlgGroupMgno:this.dsList.getColumn(e.row,'mhdlgGroupMgno')};
        		var oOption		= {callback:"fnPopupCallback",titletext:"방법론별 제개정이력 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        	}else if(e.col == 10)
        	{
        		var sPopupId 	= "popModalMhdlgP01";
        		var sMnuId 		= "MN03060000";
        		var oPosition	= {width:800,height:750};
        		var objArgs		= {mhdlgMgno:this.dsList.getColumn(e.row,'mhdlgMgno'), mhdlgDgr:this.dsList.getColumn(e.row,'mhdlgDgr') };
        		var oOption		= {callback:"fnPopupCallback",titletext:"방법론별 수정이력 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        	}else if(e.col == 11)
        	{
        		var isExplnFlmnoYn = this.dsList.getColumn(e.row, "isExplnFlmnoYn");
        		if(isExplnFlmnoYn == 'Y')
        		{
        			var rowJsonArray = [];
        			rowJsonArray.push( { fileGroupMgno : this.dsList.getColumn(e.row, "explnFlmno"), archiveFileName : "설명파일"} );
        			this.gfnFullDownload(this, rowJsonArray);
        		}
        	}else if(e.col == 12)
        	{
        		var objArgs = {};
        		objArgs.mhdlgMgno 		= this.dsList.getColumn(e.row, "mhdlgMgno");
        		objArgs.mhdlgDgr 		= this.dsList.getColumn(e.row, "mhdlgDgr");
        		objArgs.mhdlgGroupMgno 		= this.dsList.getColumn(e.row, "mhdlgGroupMgno");
        		objArgs.rvsnDgr 		= this.dsList.getColumn(e.row, "rvsnDgr");

        		this.fnMhdlgPrcndDtlCall(objArgs);
        	}
        };

        /**
         * @description 엔터이벤트
         */
        this.MhdlgPrcndM00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.divList.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);

        		this.dsSrh.setColumn(0, "srhMhdlgNm", this.divList.form.divSearch.form.edtMhdlgNm.text);
        		this.dsSrh.setColumn(0, "srhMhdlgUnqno", this.divList.form.divSearch.form.edtMhdlgUnqno.text);

        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        };

        /**
         * @description 파일다운로드버튼 클릭이벤트
         */
        this.divList_btnFileDown_onclick = function(obj,e)
        {
        	var rowJsonArray = [];
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var chk = this.dsList.getColumn(i, "chk");
        		var isExplnFlmnoYn = this.dsList.getColumn(i, "isExplnFlmnoYn");
        		if(chk == "Y" && isExplnFlmnoYn == 'Y') {
        			rowJsonArray.push( { fileGroupMgno : this.dsList.getColumn(i, "explnFlmno"), archiveFileName : "설명파일 ("+(i+1)+")"} );
        		}
        	}
        	this.gfnFullDownload(this, rowJsonArray);
        };

        /**
         * @description 엑셀다운로드버튼 클릭이벤트
         */
        this.divList_btnExcelUp_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalExcelDownP01";
        	var sMnuId 		= "MN99060000";
        	var oPosition	= {width:900,height:750};
        	var objArgs		= {};
        	objArgs.totalCount	= this.dsPageInfo.getColumn(0, "totalCount");
        	objArgs.menuMgno = "MN06030300";
        	var oOption		= {callback:"fnPopupCallback",titletext:"엑셀다운로드 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.MhdlgPrcndM00_onkeydown,this);
            this.divList.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divList_divSearch_btnSearch_onclick,this);
            this.divList.form.divSearch.form.btnRefresh.addEventHandler("onclick",this.divList_divSearch_btnRefresh_onclick,this);
            this.divList.form.divSearch.form.staAplyClCd.addEventHandler("onclick",this.divList_divSearch_sta00_onclick,this);
            this.divList.form.divSearch.form.staMhdlgPrcndTypeCd.addEventHandler("onclick",this.divList_divSearch_staAplyClCd_onclick,this);
            this.divList.form.divSearch.form.staBizFldCd.addEventHandler("onclick",this.divList_divSearch_sta_onclick,this);
            this.divList.form.divSearch.form.cboBizFldCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizFldCd_onitemchanged,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnExcelUp.addEventHandler("onclick",this.divList_btnExcelUp_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divList.form.btnFileDown.addEventHandler("onclick",this.divList_btnFileDown_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("MhdlgPrcndM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
