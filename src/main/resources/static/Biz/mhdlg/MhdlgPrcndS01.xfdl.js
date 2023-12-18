(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mhdlgPrcndS01");
            this.set_titletext("방법론 현황 상세 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlBtn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExplnFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDocHist","0","60",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","0",null,"173","0",null,null,null,null,null,this.divDocHist.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"386\"/><Column size=\"127\"/><Column size=\"109\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"개정이력\"/><Cell col=\"2\" text=\"방법론명(원문명)\"/><Cell col=\"3\" rowspan=\"2\" text=\"유효시작일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"상세보기\"/><Cell row=\"1\" col=\"2\" text=\"방법론명(국문명)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:rvsnDgrNm\" textAlign=\"center\" tooltiptext=\"bind:rvsnDgrNm\"/><Cell col=\"2\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 2)\" textAlign=\"center\" tooltiptext=\"bind:mhdlgOrgtNm\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:vldBgngYmd\" textAlign=\"center\" tooltiptext=\"bind:vldBgngYmd\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\" padding=\"10px 0px\"/><Cell row=\"1\" col=\"2\" tooltiptext=\"bind:mhdlgKrnNm\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgKrnNm, currow, 2)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDocHist.addChild(obj.name, obj);

            obj = new Static("staMhdlgInfoTitle","0","divDocHist:20",null,"30","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divMhdlgDtl","1","staMhdlgInfoTitle:0",null,"664","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea","0","0",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNmArea","4","staAplyClCdNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgArea","4","staPrcndCdNmArea:-1",null,"44","-4",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNmArea","0","staOldMhdlgArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNmArea","0","staOrgtNmArea:-1",null,"44","1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","0","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("3");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","3","-50",null,"1","-3",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNm","0","staAplyClCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("14");
            obj.set_text("제·개정구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCd","staAplyClCdNm:7","staAplyClCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtPrcndCd","157","staPrcndCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgNm","0","staPrcndCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("개정 방법론 명");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNm","0","staOldMhdlgNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("6");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtOldMhdlgNm","155","staOldMhdlgArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("output");
            obj.set_visible("true");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNm","0","staOrgtNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("7");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNmArea","0","staKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNm","0","staKrnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("9");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClaus","157","staAgreeClausNmArea:-37","1193","33",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtKrnNm","157","staKrnNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeStiplArea","1","staAgreeClausNmArea:-1",null,"138","-1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeStipl","0","staAgreeClausNm:-1","150","138",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("16");
            obj.set_text("협정/약정/MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdAgreeStipl","158","staAgreeStiplArea:-132",null,"116","6",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"790\"/><Column size=\"400\"/><Column size=\"170\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"협정/약정MOU명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"체결국\"/><Cell col=\"2\" text=\"상세\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:cncldKrnNm\"/><Cell col=\"1\" text=\"bind:ntnNm\"/><Cell col=\"2\" text=\"상세\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFldArea","0","staAgreeStiplArea:-1",null,"138","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFld","0","staAgreeStipl:-1","150","138",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("12");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdBizFld","157","staBizFldArea:-130",null,"116","7",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"570\"/><Column size=\"570\"/><Column size=\"220\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"사업 세부분야\"/><Cell col=\"2\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:bizFldKornNm\"/><Cell col=\"1\" text=\"bind:bizDtlsFldKornNm\"/><Cell col=\"2\" text=\"bind:mhdlgUnqno\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtOrgtNm","157","staOrgtNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrpsdArea","0","staBizFldArea:-1",null,"132","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divExplnFlmno","157","staPrpsdArea:-125","800","120",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("26");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrpsd","0","staBizFld:-1","150","132",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("27");
            obj.set_text("설명파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divH7","0","divMhdlgDtl:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divH7:0",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnMod",null,"0","75","32","78",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staDocList","0","20",null,"30","0",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("개정이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divH1.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","72",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDocHist.form
            obj = new Layout("default","",0,0,this.divDocHist.form,function(p){});
            this.divDocHist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgDtl.form.divExplnFlmno
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form.divExplnFlmno.form,function(p){});
            this.divMhdlgDtl.form.divExplnFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgDtl.form
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form,function(p){});
            this.divMhdlgDtl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH7.form
            obj = new Layout("default","",0,0,this.divH7.form,function(p){});
            this.divH7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMhdlgDtl.form.stsPrpsdNm","text","dsMhdlgDetail","prpsdFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMhdlgDtl.form.edtOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMhdlgDtl.form.edtKrnNm","value","dsMhdlgDetail","mhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMhdlgDtl.form.edtAplyClCd","value","dsMhdlgDetail","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMhdlgDtl.form.edtPrcndCd","value","dsMhdlgDetail","regRsnCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMhdlgDtl.form.edtAgreeClaus","value","dsMhdlgDetail","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMhdlgDtl.form.edtOldMhdlgNm","value","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMhdlgDtl.form.stc00","text","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgPrcndS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionS01 Form
        * FILE NAME     : sampleFormActionS01.xfdl
        * DESCRIPTION   : 화면전환샘플 (상세)
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
        this.roleIdMgno = this.fvApp.User.roleIdMgno;


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
        	trace("[sampleFormActionS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");



        	var objParam1 = { objDs:this.dsMhdlgDetail								// 바인딩 데이터셋
        					,sBindCol:"explnFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"explnFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divMhdlgDtl.form.divExplnFlmno.form.fnInitRaonK(this, objParam1);

        	this.getOwnerFrame().form.divWork.form.fnLoadComplete('MhdlgPrcndS01');

        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "mhdlgInfo" :
        			// 후처리 코드
        			this.fnFromCtrl();//제정·개정에 따라 컴포넌트 영역조절

        			var explnFlmno = this.dsMhdlgDetail.getColumn(0,'explnFlmno')
        			this.divMhdlgDtl.form.divExplnFlmno.form.fnSearchFile(explnFlmno);

        			if(this.fnAccessAuth(this.roleIdMgno))
        			{
        				this.divComBtn.form.btnMod.set_width(0);
        			}else
        			{
        				this.divComBtn.form.btnMod.set_width(75);
        			}

        			break;
        		default:
        			break;
        	}
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/

        this.fnCallMhdlgInfo = function()
        {
        	trace("등록 수정 전 상세 호출...");
        	var callUrl = "/biz/mhdlg/mhdlgPrcnd/selectMhdlgPrcndDetail.irs";

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "mhdlgInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsMhdlgInfo=dsMhdlgInfo";
         	objArgs.outds     		= " dsMhdlgDetail=dsMhdlgDetail"
        							+ " dsAgrStiplList=dsAgrStiplList"
        							+ " dsBizFldList=dsBizFldList"
        							+ " dsDocList=dsDocList"

         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 상세화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[MhdlgPrcndS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	this.dsMhdlgInfo.setColumn(0, "mhdlgMgno", objArgs.mhdlgMgno);
        	this.dsMhdlgInfo.setColumn(0, "mhdlgDgr", objArgs.mhdlgDgr);
        	this.dsMhdlgInfo.setColumn(0, "rvsnDgr", objArgs.rvsnDgr);
        	this.dsMhdlgInfo.setColumn(0, "mhdlgGroupMgno", objArgs.mhdlgGroupMgno);
        	this.dsMhdlgInfo.setColumn(0, "sts", objArgs.sts);

        	this.fnCallMhdlgInfo();
        };

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

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 참여자확인 클릭시 등록화면으로 전환
        */
        this.divComBtn_btnReg_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        	// 등록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv();
        };

        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnList_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        //제정·개정에 따라 컴포넌트 영역조절
        this.fnFromCtrl = function()
        {
        	var regRsnCd = this.dsMhdlgDetail.getColumn(0,'regRsnCd');
        	var agreeClausCd = this.dsMhdlgDetail.getColumn(0,'agreeClausCd');
        	if(agreeClausCd == 'AGC0001'){//6.2조일 경우 협정약정mou그리드 표출
        		if(regRsnCd == 'MRT0001') //개정방법론명 안보임
        		{
        			this.divMhdlgDtl.form.staOldMhdlgNm.set_height(0);
        			this.divMhdlgDtl.form.staOldMhdlgArea.set_height(0);
        			this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(0);
        			this.divMhdlgDtl.form.staAgreeStiplArea.set_height(138);
        			this.divMhdlgDtl.form.staAgreeStipl.set_height(138);
        			this.divMhdlgDtl.form.grdAgreeStipl.set_height(116);
        			this.divMhdlgDtl.set_height(620);
        		}else if (regRsnCd == 'MRT0001') //다보여줌
        		{
        			this.divMhdlgDtl.form.staOldMhdlgNm.set_height(44);
        			this.divMhdlgDtl.form.staOldMhdlgArea.set_height(44);
        			this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(30);
        			this.divMhdlgDtl.form.staAgreeStipl.set_height(138);
        			this.divMhdlgDtl.form.staAgreeStiplArea.set_height(138);
        			this.divMhdlgDtl.form.grdAgreeStipl.set_height(116);
        			this.divMhdlgDtl.set_height(664);
        		}
        	}else //6.2가 아니면 협정약정mou그리드 미표출
        	{
        		if(regRsnCd == 'MRT0001') //다안보임
        		{
        			this.divMhdlgDtl.form.staOldMhdlgNm.set_height(0);
        			this.divMhdlgDtl.form.staOldMhdlgArea.set_height(0);
        			this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(0);
        			this.divMhdlgDtl.form.staAgreeStipl.set_height(0);
        			this.divMhdlgDtl.form.staAgreeStiplArea.set_height(0);
        			this.divMhdlgDtl.form.grdAgreeStipl.set_height(0);
        			this.divMhdlgDtl.set_height(482);
        		}else if (regRsnCd == 'MRT0001') //방법론명만 보임
        		{
        			this.divMhdlgDtl.form.staOldMhdlgNm.set_height(44);
        			this.divMhdlgDtl.form.staOldMhdlgArea.set_height(44);
        			this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(30);
        			this.divMhdlgDtl.form.staAgreeStipl.set_height(0);
        			this.divMhdlgDtl.form.staAgreeStiplArea.set_height(0);
        			this.divMhdlgDtl.form.grdAgreeStipl.set_height(0);
        			this.divMhdlgDtl.set_height(526);
        		}
        	}
        	this.divMhdlgDtl.form.resetScroll();
        	this.resetScroll();
        }

        this.divDocHist_grdDocList_oncellclick = function(obj,e)
        {
        	if(e.cell == 4)
        	{
        		this.scrollTo(0,0);
        		this.dsMhdlgInfo.setColumn(0, "mhdlgMgno", this.dsDocList.getColumn(e.row, "mhdlgMgno"));
        		this.dsMhdlgInfo.setColumn(0, "mhdlgDgr", this.dsDocList.getColumn(e.row, "mhdlgDgr"));
        		this.dsMhdlgInfo.setColumn(0, "mhdlgGroupMgno", this.dsDocList.getColumn(e.row, "mhdlgGroupMgno"));
        		this.dsMhdlgInfo.setColumn(0, "rvsnDgr", this.dsDocList.getColumn(e.row, "rvsnDgr"));

        		this.fnCallMhdlgInfo();
        	}
        };

        this.divComBtn_btnMod_onclick = function(obj,e)
        {
        	if(!this.fnAccessAuth(this.roleIdMgno))
        	{
        		var objArgs = {};
        		objArgs.mhdlgMgno = this.dsMhdlgDetail.getColumn(0,'mhdlgMgno');
        		objArgs.mhdlgDgr = this.dsMhdlgDetail.getColumn(0,'mhdlgDgr');

        		trace("----------------objArgs.mhdlgMgno----------------" + objArgs.mhdlgMgno + "----------------objArgs.mhdlgDgr----------------" + objArgs.mhdlgDgr);
        		this.getOwnerFrame().form.divWork.form.fnMhdlgPrcndModCall(objArgs);
        	}else{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}

        };


        this.divH1_divH1_btnDocList_onclick = function(obj,e)
        {
        	var divDocHistHeight = this.divDocHist.height
        	if(divDocHistHeight > 0)
        	{
        		this.divDocHist.set_height(0);
        	}else
        	{
        		this.divDocHist.set_height(173);
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDocHist.form.grdDocList.addEventHandler("oncellclick",this.divDocHist_grdDocList_oncellclick,this);
            this.staMhdlgInfoTitle.addEventHandler("onclick",this.staMhdlgInfoTitle_onclick,this);
            this.divMhdlgDtl.form.staAplyClCdNm.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divMhdlgDtl.form.edtPrcndCd.addEventHandler("onchanged",this.divMhdlgDtl_edtPrcndCd_onchanged,this);
            this.divMhdlgDtl.form.staOldMhdlgNm.addEventHandler("onclick",this.divMhdlgDtl_staOldMhdlgNm_onclick,this);
            this.divMhdlgDtl.form.edtOldMhdlgNm.addEventHandler("onchanged",this.divMhdlgDtl_edtPrcndCd_onchanged,this);
            this.divMhdlgDtl.form.staAgreeClausNm.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_01_onclick,this);
            this.divMhdlgDtl.form.staAgreeStipl.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_00_00_00_onclick,this);
            this.divMhdlgDtl.form.staPrpsd.addEventHandler("onclick",this.div01_00_00_00_div01_00_00_01_01_staBizPlnd_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnMod.addEventHandler("onclick",this.divComBtn_btnMod_onclick,this);
            this.divH1.form.btnDocList.addEventHandler("onclick",this.divH1_divH1_btnDocList_onclick,this);
        };
        this.loadIncludeScript("MhdlgPrcndS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
