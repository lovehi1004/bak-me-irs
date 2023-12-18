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
            this.set_titletext("방법론 신청 목록 화면");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhAplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgPrcndTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhBizDtlsFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"srhInstMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"srhMhdlgNm\" type=\"STRING\" size=\"256\"/><Column id=\"srhAddDataYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rnn\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"INT\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausNm\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"govBzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgFldListText\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgFldListText2\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/><Column id=\"addDataDmndPsbltyYn\" type=\"STRING\" size=\"256\"/><Column id=\"addDataBtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsPrcsTypeCds", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgPrcndTypeCdS03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldCds", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bizFldKornNm\">- 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDtlsFldCds", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgRvwTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDlbrTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortSeqo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divList","0","0",null,null,"0","0","1500",null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0","1571","131",null,null,null,null,null,null,this.divList.form);
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
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stastaPrcsTypeCd","681","30","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staMhdlgNm","1001","30","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("방법론명 ");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrcsTypeCd","791","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsPrcsTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizFldCd","35","staAplyClCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("방법론 분야");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("none");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBizDtlsFldCd","361","staMhdlgPrcndTypeCd:5","131","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("방법론 세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staInstMngNo","681","stastaPrcsTypeCd:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("관장기관");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizFldCd","151","cboAplyClCd:5","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsBizFldCd");
            obj.set_codecolumn("bizFldCdMgno");
            obj.set_datacolumn("bizFldKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBizDtlsFldCd","492","cboMhdlgPrcndTypeCd:5","120","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("WFSA");
            obj.set_innerdataset("dsBizDtlsFldCd");
            obj.set_codecolumn("bizFldDtlsCdMgno");
            obj.set_datacolumn("bizDtlsFldKornNm");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInstMngNo","791","cboPrcsTypeCd:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("WFSA");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_innerdataset("dsInstCd");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgNm","1121","30","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAddDataYn","1121","edtMhdlgNm:5","180","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsAddDataYn");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staAddDataYn","1001","staMhdlgNm:5","110","32",null,null,null,null,null,null,this.divList.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("자료요청");
            obj.set_cssclass("sta_WFSA_Label");
            this.divList.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","5","divSearch:81",null,null,"30","123",null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_extendsizetype("none");
            obj.set_cellsizingtype("both");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"117\"/><Column size=\"96\"/><Column size=\"112\"/><Column size=\"72\"/><Column size=\"210\"/><Column size=\"136\"/><Column size=\"93\"/><Column size=\"107\"/><Column size=\"93\"/><Column size=\"81\"/><Column size=\"78\"/><Column size=\"83\"/><Column size=\"76\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"dataset.getCaseCount(&quot;chk==undefined || chk==&apos;&apos; || chk==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"신청구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"파리협정조항\"/><Cell col=\"4\" rowspan=\"2\" text=\"사업수행자\"/><Cell col=\"5\" rowspan=\"2\" text=\"제정·개정\"/><Cell col=\"6\" text=\"사업명(원문)\"/><Cell col=\"7\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"8\" rowspan=\"2\" text=\"방법론&#13;&#10;고유번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"방법론&#13;&#10;유효시작일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"11\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"12\" rowspan=\"2\" text=\"이력조회\"/><Cell col=\"13\" rowspan=\"2\" text=\"작업구분\"/><Cell col=\"14\" rowspan=\"2\" text=\"추가자료\"/><Cell row=\"1\" col=\"6\" text=\"사업명(국문)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:rnn\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, aplyTypeNm, currow, 2)\" tooltiptext=\"bind:aplyTypeNm\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"bind:agreeClausNm\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:regRsnNm\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 6)\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" tooltiptext=\"bind:mhdlgFldListText\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgFldListText2, currow, 7)\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" text=\"bind:mhdlgUnqno\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" text=\"bind:vldBgngYmd\"/><Cell col=\"10\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"normal\" edittype=\"none\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, prcsTypeNm, currow, 10)\" tooltiptext=\"bind:prcsTypeNm\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" padding=\"10px\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" padding=\"10px 0px\" text=\"bind:govBzentNm\" textAlign=\"center\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"buttoncontrol\" padding=\"10px 0px\" text=\"이력\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"10px 0px\" text=\"bind:btnNm\" tooltiptext=\"bind:btnNm\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"buttoncontrol\" edittype=\"none\" padding=\"10px 0px\" text=\"bind:addDataBtnNm\"/><Cell row=\"1\" col=\"6\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgKrnNm, currow, 6)\" tooltiptext=\"bind:mhdlgKrnNm\"/><Cell row=\"1\" col=\"10\" text=\"bind:typeCdNm\" tooltiptext=\"bind:typeCdNm\" border=\"0px solid #dcdee4,1px solid #eeeff3,1px solid #dcdee4\" textAlign=\"center\" color=\"#ff3333\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staTotCnt","5",null,"140","32",null,"grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnFileDown",null,null,"114","32","152","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnAdminReg",null,null,"88","32","btnFileDown:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("직권신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"119","32","30","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("true");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","0","grdList:20",null,"21","30",null,null,null,null,null,this.divList.form);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnReg",null,null,"105","32","btnAdminReg:3","grdList:10",null,null,null,null,this.divList.form);
            obj.set_taborder("8");
            obj.set_text("방법론신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divDetail","1662","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divReg","1662","308","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divReg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAdminDetail","1980","18","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divAdminDetail");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAdminReg","1980","308","294","184",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("divAdminReg");
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

            //-- Default Layout : this.divAdminDetail.form
            obj = new Layout("default","",0,0,this.divAdminDetail.form,function(p){});
            this.divAdminDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAdminReg.form
            obj = new Layout("default","",0,0,this.divAdminReg.form,function(p){});
            this.divAdminReg.form.addLayout(obj.name, obj);

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

            obj = new BindItem("item8","divList.form.divSearch.form.edtMhdlgUnqno","value","dsSrh","srhMhdlgUnqno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgAplyM00.xfdl", function() {
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
        								, this.divList.form.divSearch.form.staInstMngNo , this.divList.form.divSearch.form.cboInstMngNo
        								, this.divList.form.divSearch.form.staAddDataYn, this.divList.form.divSearch.form.cboAddDataYn];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 131;			// 조회영역 펼치기시 height
        this.fvSearchHideHeight = 94;			// 조회영역 숨기기시 height
        this.roleIdMgno = this.fvApp.User.roleIdMgno;
        this.isCallMhdlgAplyDtl = false;
        this.isCallMhdlgAplyReg = false;
        this.isCallMhdlgAplyAdminDtl = false;
        this.isCallMhdlgAplyAdminReg = false;
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

        	this.divAdminDetail.set_left(0);
        	this.divAdminDetail.set_top(0);
        	this.divAdminDetail.set_width(null);
        	this.divAdminDetail.set_height(null);
        	this.divAdminDetail.set_right(0);
        	this.divAdminDetail.set_bottom(0);

        	this.divAdminReg.set_left(0);
        	this.divAdminReg.set_top(0);
        	this.divAdminReg.set_width(null);
        	this.divAdminReg.set_height(null);
        	this.divAdminReg.set_right(0);
        	this.divAdminReg.set_bottom(0);

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
        	arrParam[2] = {outDs:"dsPrcsTypeCd", groupId:"MHDLG_PRCS_TYPE_CD", headflag:"A" , useYn:"Y"};
        	arrParam[3] = {outDs:"dsMhdlgPrcndTypeCdS03", groupId:"MHDLG_PRCND_TYPE_CD", headflag:"N" , useYn:"Y"};
        	arrParam[4] = {outDs:"dsMhdlgAplyClCd", groupId:"MHDLG_APLY_CL_CD", headflag:"N" , useYn:"Y"};
        	arrParam[5] = {outDs:"dsAgreeClausCd", groupId:"AGREE_CLAUS_CD", headflag:"S" , useYn:"Y"};
        	arrParam[6] = {outDs:"dsMhdlgRvwTypeCd", groupId:"MHDLG_RVW_TYPE_CD", headflag:"N" , useYn:"Y"};
        	arrParam[7] = {outDs:"dsDicDlbrTypeCd", groupId:"DIC_DLBR_TYPE_CD", headflag:"N" , useYn:"Y"};
        	arrParam[8] = {outDs:"dsMhdlgDlbrTypeCd", groupId:"MHDLG_DLBR_TYPE_CD", headflag:"N" , useYn:"Y"};
        	arrParam[9] = {outDs:"dsPaprvTypeCd", groupId:"PAPRV_TYPE_CD", headflag:"N" , useYn:"Y"};
         	var sSvcId = "getCommonCode";
         	var sCallbackFunc = "fnComcodeCallback";
         	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);

        	// 페이지표시 Div 초기화
        	this.divList.form.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	//버튼 컨트롤
        	this.fnRegBtnCtrl();

        	this.fnCallCommonCodeList();
        	this.fnCallSearchList(); // 조회함수호출

        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.dsAplyClCd.filter("cdMgno != 'MAC0004'");
        	}

         	//this.IsCallMhdlgAplyReg = true;
         	//this.divReg.set_url("Biz_mhdlg::MhdlgAplyS02.xfdl");
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

        		default:
        			break;
        	}
        };

        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearchList(); // 조회함수호출
        };

        //팝업콜백
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 협정약정 검색 팝업
        		case "popModalMhdlgAplyP01" :
        			this.fnCallSearchList();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallSearchList = function()
        {
        	trace("목록 호출...");

        	var url;
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		url = '/biz/mhdlg/mhdlgAply/selectMhdlgAplyList.irs'
        	}else
        	{
        		url = '/adm/mhdlg/mhdlgAply/selectMhdlgAplyList.irs'
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "searchList";
         	objArgs.url 			= url;
         	objArgs.inds      		= "dsSrh=dsSrh"
        							+ " dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsList=dsList"
        							+ " dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        //공통테이블 정보 호출
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
        	trace("[sampleFormActionM00]fnChangeDiv =========================");
        };


        this.fnMhdlgAplyDtlCall = function(objArgs)
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
        	if(!this.IsCallMhdlgAplyDtl) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divDetail.set_url("Biz_mhdlg::MhdlgAplyS01.xfdl");
         	}
         	else {

        		this.fnCallMhdlgAplyDtlPage();
         	}
        }

        this.fnMhdlgAplyRegCall = function(objArgs)
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
        		if(!this.gfnIsNull(objArgs.sts))
        		{
        			this.fvTempInfo.sts = objArgs.sts;
        		}
        	}

        	if(!this.IsCallMhdlgAplyReg) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divReg.set_url("Biz_mhdlg::MhdlgAplyS02.xfdl");
         	}
         	else {

        		this.fnCallMhdlgAplyRegPage();
         	}
        }

        this.fnMhdlgAplyAdminDtlCall = function(objArgs)
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

        	if(!this.IsCallMhdlgAplyAdminDtl) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divAdminDetail.set_url("Biz_mhdlg::MhdlgAplyS03.xfdl");
         	}
         	else {

        		this.fnCallMhdlgAplyAdminDtlPage();
         	}
        }

        this.fnMhdlgAplyAdminRegCall = function(objArgs)
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
        		if(!this.gfnIsNull(objArgs.sts))
        		{
        			this.fvTempInfo.sts = objArgs.sts;
        		}

        	}

        	if(!this.IsCallMhdlgAplyAdminReg) {		// 최초 처음 로딩 필요.
         		this.setWaitCursor(true);
         		this.divAdminReg.set_url("Biz_mhdlg::MhdlgAplyS04.xfdl");
         	}
         	else {

        		this.fnCallMhdlgAplyAdminRegPage();
         	}
        }

        this.fnCallMhdlgAplyDtlPage = function()
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
        	this.divDetail.set_visible(true);
        	this.divReg.set_visible(false);
        	this.divAdminDetail.set_visible(false);
        	this.divAdminReg.set_visible(false);

        	this.divDetail.form.fnChangeDiv(objArgs);
        }


        this.fnCallMhdlgAplyRegPage = function()
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
        	this.divAdminDetail.set_visible(false);
        	this.divAdminReg.set_visible(false);

        	this.divReg.form.fnChangeDiv(objArgs);

        }


        this.fnCallMhdlgAplyAdminDtlPage = function()
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
        	this.divReg.set_visible(false);
        	this.divAdminDetail.set_visible(true);
        	this.divAdminReg.set_visible(false);

        	this.divAdminDetail.form.fnChangeDiv(objArgs);

        }

        this.fnCallMhdlgAplyAdminRegPage = function()
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
        	this.divReg.set_visible(false);
        	this.divAdminDetail.set_visible(false);
        	this.divAdminReg.set_visible(true);

        	this.divAdminReg.form.fnChangeDiv(objArgs);

        }

        this.fnLoadComplete = function(pageInfo)
        {
        	trace("===================== fnLoadComplete 수신완료!!!");
        	this.setWaitCursor(false);
        	if(pageInfo == 'MhdlgAplyS01')
        	{
        		this.IsCallMhdlgAplyDtl = true;
        		this.fnCallMhdlgAplyDtlPage();
        	}else if (pageInfo == 'MhdlgAplyS02')
        	{
        		this.IsCallMhdlgAplyReg = true;
        		this.fnCallMhdlgAplyRegPage();
        	}else if (pageInfo == 'MhdlgAplyS03')
        	{
        		this.IsCallMhdlgAplyAdminDtl = true;
        		this.fnCallMhdlgAplyAdminDtlPage();
        	}else if (pageInfo == 'MhdlgAplyS04')
        	{
        		this.IsCallMhdlgAplyAdminReg = true;
        		this.fnCallMhdlgAplyAdminRegPage();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        this.btnShowHide_onclick = function(obj,e)
        {
        	trace("검색확장 버튼클릭");
        	this.fnSearchShowHide();
        };

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

        this.divList_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearchList();
        };

        this.divList_divSearch_btnRefresh_onclick = function(obj,e)
        {
        	// 검색용 데이터셋 초기화
        	this.dsSrh.setColumn(0, "srhAplyClCd", "");
        	this.dsSrh.setColumn(0, "srhMhdlgPrcndTypeCd", "");
        	this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizFldCd", "");
        	this.dsSrh.setColumn(0, "srhPrcsTypeCd", "");
        	this.dsSrh.setColumn(0, "srhBizFldCd", "");
        	this.dsSrh.setColumn(0, "srhBizDtlsFldCd", "");
        	this.dsSrh.setColumn(0, "srhMhdlgNm", "");
        	this.dsSrh.setColumn(0, "srhMhdlgNm2", "");
        	this.dsSrh.setColumn(0, "srhAddDataYn", "");
        	this.divList.form.divSearch.form.cboBizFldCd.set_index(0);
        	this.divList_divSearch_cboBizFldCd_onitemchanged();
        	this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");

        };




        //분야가 변경시 세부분야가 필터링 되어야함
        this.divList_divSearch_cboBizFldCd_onitemchanged = function(obj,e)
        {
        	//이벤트정보가 있을 경우
        	if(e != undefined || e != null)
        	{
        		trace("[divList_divSearch_cboBizFldCd_onitemchanged]e.prevalue:"+e.prevalue+"|e.postvalue:"+e.postvalue);
                var bizFldCdMgno = e.postvalue;
                this.dsBizDtlsFldCd.filter("bizFldCdMgno == '' || bizFldCdMgno == '"+bizFldCdMgno+"'");
        	}
        	// 이벤트정보가 없을경우(검색영역 리셋버튼 클릭시)
        // 	else
        // 	{
        // 		this.dsBizDtlsFldCd.filter("bizFldCdMgno == ''");
        // 	}
        		// '전체'항목 선택
        		this.divList.form.divSearch.form.cboBizDtlsFldCd.set_index(0);
        };
        /***********************************************************************************
        * 7.이거 수정해주세요. end
        ***********************************************************************************/
        //그냥신청
        this.divList_btnReg_onclick = function(obj,e)
        {
        		this.fvTempInfo.mhdlgMgno = "";
        		this.fvTempInfo.mhdlgDgr ="";
        		this.fvTempInfo.sts = "REG";

        		this.fnMhdlgAplyRegCall();
        };

        //직권신청
        this.divList_btnAdminReg_onclick = function(obj,e)
        {
        		this.fvTempInfo.mhdlgMgno = "";
        		this.fvTempInfo.mhdlgDgr ="";
        		this.fvTempInfo.sts = "REG";

        		this.fnMhdlgAplyAdminRegCall();
        };

        this.divList_grdList_oncellclick = function(obj,e)
        {
        	var addDataDmndPsbltyYn = this.dsList.getColumn(e.row,'addDataDmndPsbltyYn')
        	var addDataTypeCd = this.dsList.getColumn(this.dsList.rowposition, "addDataTypeCd");
        	if(e.cell == 12)
        	{
        		var sPopupId 	= "popModalHstryP01";
        		var sMnuId 		= "MN99050000";
        		var oPosition	= {width:1250,height:750};
        		var objArgs		= {};
        		objArgs.mngNo	= this.dsList.getColumn(this.dsList.rowposition, "mhdlgMgno");
        		objArgs.dgr 	= this.dsList.getColumn(this.dsList.rowposition, "mhdlgDgr");
        		objArgs.menu	= "MHD";

        		var oOption		= {callback:"fnPopupCallback",titletext:"이력 모달(Modal) 처리 팝업"};

        		this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);

        	}else if(e.cell == 13) //상세
        	{
        		// 상세화면 전환 후 초기작업이 필요한 경우 function 호출

        		this.fvTempInfo.mhdlgMgno = "";
        		this.fvTempInfo.mhdlgDgr = "";
        		this.fvTempInfo.mhdlgMgno = this.dsList.getColumn(e.row, "mhdlgMgno");
        		this.fvTempInfo.mhdlgDgr = this.dsList.getColumn(e.row, "mhdlgDgr");

        		//직권신청인 경우
        		if(this.dsList.getColumn(e.row, "aplyClCd")=='MAC0004')
        		{
        			this.fnMhdlgAplyAdminDtlCall();
        		//직권신청이 아닌경우
        		}else
        		{
        			this.fnMhdlgAplyDtlCall();
        		}
        	}else if (e.cell == 14)
        	{
        		if(this.fnAccessAuth(this.roleIdMgno) && !this.gfnIsNull(addDataTypeCd))
        		{
        			var addDataDgr = this.dsList.getColumn(this.dsList.rowposition, "addDataDgr");

        			if(addDataDgr == "0") {
        				addDataDgr = "1";
        			}
        			var sPopupId 	= "popModalMhdlgAplyP01";
        			var sMnuId 		= "MN03030000";
        			var oPosition	= {width:1320,height:750};
        			var objArgs		= {};
        			objArgs.mhdlgMgno		= this.dsList.getColumn(this.dsList.rowposition, "mhdlgMgno");
        			objArgs.mhdlgDgr 		= this.dsList.getColumn(this.dsList.rowposition, "mhdlgDgr");
        			objArgs.addDataDgr 		= addDataDgr;
        			objArgs.addDataTypeCd	= addDataTypeCd;
        			var oOption		= {callback:"fnPopupCallback",titletext:"추가자료요청 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}else if( addDataDmndPsbltyYn =='Y' && !this.fnAccessAuth(this.roleIdMgno))
        		{
        			var addDataDgr = this.dsList.getColumn(this.dsList.rowposition, "addDataDgr");

        			if(addDataDgr == "0") {
        				addDataDgr = "1";
        			}
        			var sPopupId 	= "popModalMhdlgAplyP01";
        			var sMnuId 		= "MN03030000";
        			var oPosition	= {width:1320,height:750};
        			var objArgs		= {};
        			objArgs.mhdlgMgno		= this.dsList.getColumn(this.dsList.rowposition, "mhdlgMgno");
        			objArgs.mhdlgDgr 		= this.dsList.getColumn(this.dsList.rowposition, "mhdlgDgr");
        			objArgs.addDataDgr 		= addDataDgr;
        			objArgs.addDataTypeCd	= addDataTypeCd;
        			var oOption		= {callback:"fnPopupCallback",titletext:"추가자료요청 팝업"};

        			this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        		}
        	}
        };
        //추가자료 요청시 버튼 활성화
        this.fnGrdformChange = function()
        {
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.divList.form.grdList.setCellProperty("body", 14, "displaytype",
        		"expr:addDataTypeCd=='ADT0001' || addDataTypeCd=='ADT0002' || addDataTypeCd=='ADT0003'|| addDataTypeCd=='ADT0004'?'buttoncontrol':'none'");
        		this.divList.form.grdList.setCellProperty("body", 14, "edittype",
        		"expr:addDataTypeCd=='ADT0001' || addDataTypeCd=='ADT0002' || addDataTypeCd=='ADT0003'|| addDataTypeCd=='ADT0004'?'none':'none'")
        	}else
        	{
        		this.divList.form.grdList.setCellProperty("body", 14, "displaytype",
        		"expr:addDataDmndPsbltyYn=='Y'?'buttoncontrol':'none'");
        		this.divList.form.grdList.setCellProperty("body", 14, "edittype",
        		"expr:addDataDmndPsbltyYn=='Y'?'none':'none'")
        	}


        }

        //권한 확인
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

        this.fnRegBtnCtrl = function()
        {
        	if(this.fnAccessAuth(this.fvApp.User.roleIdMgno))
        	{
        		this.divList.form.btnAdminReg.set_width(-3);
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}else
        	{
        		this.divList.form.btnReg.set_width(-3);
        		this.divList.form.resetScroll();
        		this.resetScroll();
        	}
        }

        this.MhdlgPrcndM00_onkeydown = function(obj,e)
        {
        	// enter 키 입력시 검색 버튼 클릭 처리
        	if(e.keycode == 13 && e.altkey == false && e.ctrlkey == false && e.shiftkey == false && this.divList.visible)
        	{
        		trace("111 ======================================> "  + e.keycode);

        		this.dsSrh.setColumn(0, "srhMhdlgNm", this.divList.form.divSearch.form.edtMhdlgNm.text);

        		this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        		this.fnCallSearchList();
        	}
        };

        // 액셀 다운로드
        this.divList_btnExcelDown_onclick = function(obj,e)
        {
        	var callUrl = "";

        	if(this.fnAccessAuth(this.roleIdMgno)) {

        		callUrl = "/biz/mhdlg/mhdlgAply/selectMhdlgAplyExcel.irs";
        	}else {

        		callUrl = "/adm/mhdlg/mhdlgAply/selectMhdlgAplyExcel.irs";
        	}

        	this.srhAplyClCd = this.dsSrh.getColumn(0, "srhAplyClCd");
        	this.srhMhdlgPrcndTypeCd = this.dsSrh.getColumn(0, "srhMhdlgPrcndTypeCd");
        	this.srhPrcsTypeCd = this.dsSrh.getColumn(0, "srhPrcsTypeCd");
        	this.srhBizFldCd = this.dsSrh.getColumn(0, "srhBizFldCd");
        	this.srhBizDtlsFldCd = this.dsSrh.getColumn(0, "srhBizDtlsFldCd");
        	this.srhInstMngNo = this.dsSrh.getColumn(0, "srhInstMngNo");
        	this.srhMhdlgNm = this.dsSrh.getColumn(0, "srhMhdlgNm");
        	this.srhAddDataYn = this.dsSrh.getColumn(0, "srhAddDataYn");

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

        	if(!this.gfnIsNull(this.srhPrcsTypeCd))
        	{
        		this.fdtExcel.setPostData("srhPrcsTypeCd", this.srhPrcsTypeCd);
        	}else
        	{
        		this.fdtExcel.setPostData("srhPrcsTypeCd", "");
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

        	if(!this.gfnIsNull(this.srhInstMngNo))
        	{
        		this.fdtExcel.setPostData("srhInstMngNo", this.srhInstMngNo);
        	}else
        	{
        		this.fdtExcel.setPostData("srhInstMngNo", "");
        	}

        	if(!this.gfnIsNull(this.srhMhdlgNm))
        	{
        		this.fdtExcel.setPostData("srhMhdlgNm", this.srhMhdlgNm);
        	}else
        	{
        		this.fdtExcel.setPostData("srhMhdlgNm", "");
        	}

        	if(!this.gfnIsNull(this.srhAddDataYn))
        	{
        		this.fdtExcel.setPostData("srhAddDataYn", this.srhAddDataYn);
        	}else
        	{
        		this.fdtExcel.setPostData("srhAddDataYn", "");
        	}

        	if(!this.gfnIsNull(this.fvApp.User.userId))
        	{
        		this.fdtExcel.setPostData("sUserId", this.fvApp.User.userId);
        	}else
        	{
        		this.fdtExcel.setPostData("sUserId", "");
        	}


        	this.fdtExcel.setPostData("downloadExcelFileNm","방법론신청목록.xlsx");
        	this.fdtExcel.setPostData("sheetname","방법론신청내역");

        	//파일다운로드 실행
        	this.fdtExcel.download();
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
            this.divList.form.divSearch.form.stastaPrcsTypeCd.addEventHandler("onclick",this.divList_divSearch_staBizFormCd_onclick,this);
            this.divList.form.divSearch.form.staBizFldCd.addEventHandler("onclick",this.divList_divSearch_sta_onclick,this);
            this.divList.form.divSearch.form.cboBizFldCd.addEventHandler("onitemchanged",this.divList_divSearch_cboBizFldCd_onitemchanged,this);
            this.divList.form.grdList.addEventHandler("oncellclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnAdminReg.addEventHandler("onclick",this.divList_btnAdminReg_onclick,this);
            this.divList.form.btnExcelDown.addEventHandler("onclick",this.divList_btnExcelDown_onclick,this);
            this.divList.form.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divList.form.btnReg.addEventHandler("onclick",this.divList_btnReg_onclick,this);
            this.fdtExcel.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
            this.fdtExcel.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("MhdlgAplyM00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
