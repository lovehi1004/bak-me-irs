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
            this.set_titletext("정보공개 국제감축사업 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUniInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmMgno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizFormCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldNm\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvtPrcs\" type=\"STRING\" size=\"256\"/><Column id=\"prvtPrcsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMgno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agrClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"certVldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"certVldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldNm\" type=\"STRING\" size=\"256\"/><Column id=\"reddPlusYn\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"prvtPrcs\" type=\"STRING\" size=\"256\"/><Column id=\"prvtPrcsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"chkSts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniNtnList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCd\" type=\"STRING\" size=\"256\"/><Column id=\"ntnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnChk\" type=\"STRING\" size=\"256\"/><Column id=\"btnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniMhdlgList", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"chkSts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMgno\" type=\"STRING\" size=\"256\"/><Column id=\"vldBizDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"flag\" type=\"STRING\" size=\"256\"/><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUniBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fullFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPgmBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"fileMgno\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dwnldCnt\" type=\"STRING\" size=\"256\"/><Column id=\"fullFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staIrbTitle","55","13","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업 신청정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divAprvInfo","55","53",null,"173","55",null,"1130",null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBzentNmArea","0","0",null,"44","0",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNmArea","0","staBzentNmArea:-1",null,"44","0",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizKrnNmArea","0","staBizOrgtNmArea:-1",null,"44","0",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBezntNm","0","0","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("0");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","50.00%","staBzentNmArea:-44","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("2");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","staBzentNmArea:-37",null,"30","7",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtBezntNm","157","staBzentNmArea:-37",null,"30","750",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업수행자");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizOrgtNm","0","staBezntNm:-1","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("4");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizKrnNm","0","staBizOrgtNm:-1+","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("6");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizOrgtNm","157","staBizOrgtNmArea:-37",null,"30","20",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업명(원문)");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizKrnNm","157","staBizKrnNmArea:-37",null,"30","20",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업명(국문)");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizTpArea","0","staBizKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizUnqno","50%","staBizTpArea:-44","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("10");
            obj.set_text("사업고유번호");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizUnqno","staBizUnqno:8.932000000000016","staBizTpArea:-37",null,"30","7",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업고유번호");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Edit("edtBizFormCd","157","staBizTpArea:-37",null,"30","750",null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업형태");
            obj.set_text("");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staBizFormCd","0","staBizKrnNm:-1","150","44",null,null,null,null,null,null,this.divAprvInfo.form);
            obj.set_taborder("8");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WF_Label");
            this.divAprvInfo.addChild(obj.name, obj);

            obj = new Static("staPrgrmTitle","55","divAprvInfo:20","245","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프로그램감축사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divPrgrmInfo","55","staPrgrmTitle:10",null,"574","55",null,"1130",null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAgrClausArea","0","0",null,"44","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staNtnListArea","0","staAgrClausArea:-1",null,"180","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staBplcNmArea","0","staNtnListArea:-1",null,"44","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staAgrClaus","0","0","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("0");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staCncldKrnNm","50.00%","staAgrClausArea:-44","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("2");
            obj.set_text("협정·약정· MOU");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldKrnNm","staCncldKrnNm:7","staAgrClausArea:-37",null,"30","7",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_accessibilitylabel("협정약정MOU명");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Edit("edtAgrClaus","157","staAgrClausArea:-37",null,"30","750",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("파리협정조항");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staNtn","0","staAgrClaus:-1","150","180",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("4");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staBplc","0","staNtn:-1+","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("6");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","staBplcNmArea:-37",null,"30","20",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업장명");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staCertVldArea","0","staBplcNmArea:-1",null,"44","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_textAlign("left");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staReddPlus","50%","staCertVldArea:-44","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("10");
            obj.set_text("REDD+유무");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Edit("edtReddPlusYn","staReddPlus:7","staCertVldArea:-37",null,"30","7",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("REDDPLUS유무");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Edit("edtCertVldYmd","157","staCertVldArea:-37",null,"30","750",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("인증유효기간");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","staBplc:-1","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("8");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Grid("grdNtnList","157","staNtnListArea:-171",null,"163","7",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsPgmNtnList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\"/></Band></Format></Formats>");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staFldListArea","0","staCertVldArea:-1",null,"220","0",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staFld","0","staCertVldYmd:-1","150","220",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("12");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Grid("grdFldList","157","staFldListArea:-211",null,"202","7",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsPgmMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\"/><Cell col=\"1\" text=\"사업세부분야\"/><Cell col=\"2\" text=\"방법론명(원문)\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizFldKornNm, currow, 0)\" tooltiptext=\"bind:bizFldKornNm\"/><Cell col=\"1\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizDtlFldKornNm, currow, 1)\" tooltiptext=\"bind:bizDtlFldKornNm\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 2)\" tooltiptext=\"bind:mhdlgOrgtNm\"/></Band></Format></Formats>");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlndArea","0","staFldListArea:-1",null,"44","-1",null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("stcBizPlnd","165","staBizPlndArea:-37","455","30",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("15");
            obj.set_fittocontents("width");
            obj.set_text("");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Button("btnBizPlnd","stcBizPlnd:10","534","66","30",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("16");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("사업계획서다운로드");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlnd","0","staFld:-1","150","44",null,null,null,null,null,null,this.divPrgrmInfo.form);
            obj.set_taborder("14");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label");
            this.divPrgrmInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","55","divPrgrmInfo:20","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("단위사업 기본정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divUniInfo","55","staTitle:10",null,"574","55",null,"1130",null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAgrArea","0","0",null,"44","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staNtnListArea","0","staAgrArea:-1",null,"180","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staBplcNmArea","0","staNtnListArea:-1",null,"44","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staAgrClaus","0","0","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("0");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staCncldKrnNm","50.00%","staAgrArea:-44","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("2");
            obj.set_text("협정·약정· MOU");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Edit("edtCncldKrnNm","staCncldKrnNm:7","staAgrArea:-37",null,"30","7",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("협정약정MOU명");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Edit("edtAgrClaus","157","staAgrArea:-37",null,"30","750",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("파리협정정보");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staNtn","0","staAgrClaus:-1","150","180",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("4");
            obj.set_text("사업대상국");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staBplcNm","0","staNtn:-1+","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("6");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Edit("edtBplcNm","157","staBplcNmArea:-37",null,"30","20",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("사업장명");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staCertVldArea","0","staBplcNmArea:-1",null,"44","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staReddPlus","50%","staCertVldArea:-44","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("10");
            obj.set_text("REDD+ 유무");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Edit("edtReddPlus","staReddPlus:7","staCertVldArea:-37",null,"30","7",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("REDDPLUS유무");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Edit("edtCertVldYmd","157","staCertVldArea:-37",null,"30","750",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("인증유효기간");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staCertVldYmd","0","staBplcNm:-1","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("8");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Grid("grdNtnList","157","staNtnListArea:-171",null,"163","7",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsUniNtnList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"국가\"/><Cell col=\"1\" text=\"담당기관\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"유치국\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:ntnCdNm\" tooltiptext=\"bind:ntnCdNm\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" textAlign=\"center\" text=\"bind:instNm\" tooltiptext=\"bind:instNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:deptNm\" tooltiptext=\"bind:deptNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\" tooltiptext=\"expr:ntnChk==&apos;Y&apos;?&apos;유치국&apos;:&apos;-&apos;\"/></Band></Format></Formats>");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staFldListArea","0","staCertVldArea:-1",null,"220","0",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staFld","0","staCertVldYmd:-1","150","220",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("12");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Grid("grdFldList","157","staFldListArea:-211",null,"202","7",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsUniMhdlgList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\"/><Cell col=\"1\" text=\"사업세부분야\"/><Cell col=\"2\" text=\"방법론명(원문)\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizFldKornNm, currow, 0)\" tooltiptext=\"bind:bizFldKornNm\"/><Cell col=\"1\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, bizDtlFldKornNm, currow, 1)\" tooltiptext=\"bind:bizDtlFldKornNm\"/><Cell col=\"2\" textAlign=\"center\" text=\"expr:dataset.parent.gfnGetRealColSizeText(comp, mhdlgOrgtNm, currow, 2)\" tooltiptext=\"bind:mhdlgOrgtNm\"/></Band></Format></Formats>");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlndArea","0","staFldListArea:-1",null,"44","-1",null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("stcBizPlnd","165","staBizPlndArea:-37","455","30",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("15");
            obj.set_fittocontents("width");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Button("btnBizPlnd","stcBizPlnd:10","534","66","30",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("16");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            obj.set_accessibilitylabel("사업계획서다운로드");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Static("staBizPlnd","0","staFld:-1","150","44",null,null,null,null,null,null,this.divUniInfo.form);
            obj.set_taborder("14");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label");
            this.divUniInfo.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","55","divUniInfo:20",null,"62","55",null,"1130",null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","80","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_accessibilitylabel("목록");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAprvInfo.form
            obj = new Layout("default","",0,0,this.divAprvInfo.form,function(p){});
            this.divAprvInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrgrmInfo.form
            obj = new Layout("default","",0,0,this.divPrgrmInfo.form,function(p){});
            this.divPrgrmInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUniInfo.form
            obj = new Layout("default","",0,0,this.divUniInfo.form,function(p){});
            this.divUniInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,930,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAprvInfo.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAprvInfo.form.stcExplnFlmno","text","dsExplnFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAprvInfo.form.edtBizOrgtNm","value","dsUniInfo","bizOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAprvInfo.form.edtBizKrnNm","value","dsUniInfo","bizKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAprvInfo.form.edtBezntNm","value","dsUniInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAprvInfo.form.edtRprsvNm","value","dsUniInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAprvInfo.form.edtBizUnqno","value","dsUniInfo","bizUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAprvInfo.form.edtBizFormCd","value","dsUniInfo","bizFormCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPrgrmInfo.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPrgrmInfo.form.stcBizPlnd","text","dsPgmBizPlndFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPrgrmInfo.form.edtBizOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPrgrmInfo.form.edtBplcNm","value","dsPgmInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPrgrmInfo.form.edtAgrClaus","value","dsPgmInfo","agrClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPrgrmInfo.form.edtCncldKrnNm","value","dsPgmInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPrgrmInfo.form.edtReddPlusYn","value","dsPgmInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divPrgrmInfo.form.edtCertVldYmd","value","dsPgmInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divPrgrmInfo.form.edtBizFldCdSnm","value","dsPgmInfo","bizFldNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUniInfo.form.txaPstatCn","value","dsBbsInfo","pstatCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divUniInfo.form.stcBizPlnd","text","dsUniBizPlndFile","fullFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divUniInfo.form.edtBizOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divUniInfo.form.edtBplcNm","value","dsUniInfo","bplcNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divUniInfo.form.edtAgrClaus","value","dsUniInfo","agrClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divUniInfo.form.edtCncldKrnNm","value","dsUniInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divUniInfo.form.edtReddPlus","value","dsUniInfo","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divUniInfo.form.edtCertVldYmd","value","dsUniInfo","certVldYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divUniInfo.form.edtBizFldCdSnm","value","dsUniInfo","bizFldNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("IrbCmmInfoS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Biz_Common
        * BUSINESS      : 정보공개 국제감축사업 상세화면
        * FILE NAME     : IrbCmmInfoS01.xfdl
        * DESCRIPTION   : 정보공개 국제감축사업 상세화면 관련 스크립트
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
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);
        	// 스크립트로 메뉴 호출되는 경우
        	// MDI 화면이 열려 있지 않으면 objChildFrame.arguments["argSend"] 형태로 전달된 값을 이용하여 처리
        	// 이미 열려 있는 경우는 fnParamInit 함수 호출되니 해당 함수 내부에서 처리
        	this.fvArgRecv = this.getOwnerFrame().form.fvArgSend;
        	this.getOwnerFrame().form.fnLoadComplete('IrbInfoS01');


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
        		case "IrbDtl" :
        			if(this.dsPgmInfo.getRowCount() == 0 )
        			{
        				this.staPrgrmTitle.set_height(0);
        				this.staPrgrmTitle.set_top("divAprvInfo:0")
        				this.divPrgrmInfo.set_height(0);
        				this.divPrgrmInfo.set_top("staPrgrmTitle:0");
        				this.staTitle.set_text("국제감축사업 기본정보");
        				this.resetScroll();
        			}else
        			{
        				this.staPrgrmTitle.set_height(30);
        				this.staPrgrmTitle.set_top("divAprvInfo:20")
        				this.divPrgrmInfo.set_height(574);
        				this.divPrgrmInfo.set_top("staPrgrmTitle:10");
        				this.staTitle.set_text("단위사업 기본정보");
        				this.resetScroll();
        			}
        			this.fnBtnCtrl();
        		break;
        		case "fileSearch" :
        			var uniFullFileNm = this.dsUniBizPlndFile.getColumn(0,'fullFileNm');
        			if(!this.gfnIsNull(uniFullFileNm))
        			{
        				this.divUniInfo.form.stcBizPlnd.set_text(uniFullFileNm+" ");
        				this.divUniInfo.form.resetScroll();
        			}

        			var pgmFullFileNm = this.dsPgmBizPlndFile.getColumn(0,'fullFileNm');
        			if(!this.gfnIsNull(pgmFullFileNm))
        			{
        				this.divPrgrmInfo.form.stcBizPlnd.set_text(uniFullFileNm+" ");
        				this.divPrgrmInfo.form.resetScroll();
        			}
        			this.fnReddPlusFormCtrl();
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

        /*
         // objArgs				- transaction arguments
         svcId    				transaction을 구분하기 위한 svc ID 문자열
         url	     			transaction을 요청할 주소,  서버측 Service 주소 문자열
         inds     				입력값으로 보낼 Dataset, a=b형태로 실제이름과 입력이름을 매칭
         outds    				처리 결과를 받을 Dataset,
         args	 				입력값으로 보낼 arguments, 변수=값을 빈칸으로 구분한다. strFormData='20220816'
         callback 				transaction의 결과를 받을 callback 함수 (ex. fnCallback)
         async    				비동기 여부(true: Async (Default), false : Sync), 생략하면 비동기
         dataType 				전송할 형태를 지정합니다.  0(XML 타입),1(Binary 타입), 2(SSV 타입) , 3(JSON 타입, Default)
         compress 				통신시 PostData를 압축할지 여부를 지정합니다. Default : false
         httptimeout			Http통신시 Wait Time(초)를 설정합니다. Default : this.Tran.defaultHttptimeout
         setWaitCursorYn		화면에 Wait Cursor의 표시 여부 (Y - 표시 (Default) / N - 표시안함) , setWaitCursor method 활용
         commCodeSvcId			공통코드조회 개발자의 서비스 ID (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeSearchDsNm 	공통코드조회 서비스 호출시 조회정보 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
         commCodeResultDsNm 	공통코드조회 서비스 호출시 수신받을 Dataset 명 (공통함수 gfnGetCommonCode 호출시 인자값으로 활용처리됨)
        */

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearch = function()
        {

         	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "IrbDtl";
          	objArgs.url 			= "/common/inforls/selectIrbDtl.irs";
          	objArgs.inds			= "dsSrh=dsSrh";
          	objArgs.outds			= "dsUniInfo=dsUniInfo"
        							+ " dsUniNtnList=dsUniNtnList"
        							+ " dsUniMhdlgList=dsUniMhdlgList"
        							+ " dsPgmInfo=dsPgmInfo"
        							+ " dsPgmNtnList=dsPgmNtnList"
        							+ " dsPgmMhdlgList=dsPgmMhdlgList";
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";


          	this.gfnTransaction(this, objArgs);
        };


        this.fnFileSearch = function()
        {
        	// 공통Transaction 호출
          	var objArgs = {};
          	objArgs.svcId 			= "fileSearch";
          	objArgs.url 			= "/common/inforls/selectFileNm.irs";
          	objArgs.inds			= "dsFileInfo=dsFileInfo";
          	objArgs.outds			= "dsUniBizPlndFile=dsUniBizPlndFile dsPgmBizPlndFile=dsPgmBizPlndFile";
          	objArgs.args 			= "";
          	objArgs.callback		= "fnCallback";

          	this.gfnTransaction(this, objArgs);
        }

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[DataBoardS01]fnChangeDiv =========================");
        	this.fnDsClear();
        	this.getOwnerFrame().form.fnSearchAreaCtrl(true);
        	this.dsSrh.clearData();
        	this.dsSrh.addRow();
        	if(!this.gfnIsNull(objArgs))
        	{
        		if(!this.gfnIsNull(objArgs.bizMgno))
        		{
        			this.dsSrh.setColumn(0,'bizMgno',objArgs.bizMgno)
        		}
        		if(!this.gfnIsNull(objArgs.vldBizDgr))
        		{
        			this.dsSrh.setColumn(0,'vldBizDgr',objArgs.vldBizDgr)
        		}

        		if(!this.gfnIsNull(objArgs.prePage))
        		{
        			this.fvPrePage = objArgs.prePage;
        		}
        	}
        	this.fnSearch();

        }

        this.fnBtnCtrl = function()
        {
        	var uniPrvtPrcs = this.dsUniInfo.getColumn(0,'prvtPrcs');
        	var pgmPrvtPrcs = this.dsPgmInfo.getColumn(0,'prvtPrcs');

        	var uniPrvtPrcsNm = this.dsUniInfo.getColumn(0,'prvtPrcsNm');
        	var pgmPrvtPrcsNm = this.dsPgmInfo.getColumn(0,'prvtPrcsNm');

        	this.dsFileInfo.clearData();
        	if(!this.gfnIsNull(uniPrvtPrcs) && uniPrvtPrcs == 'Y')
        	{
        		this.divUniInfo.form.stcBizPlnd.set_text(uniPrvtPrcsNm + " ");
        		this.divUniInfo.form.btnBizPlnd.set_visible(false);
        	}else
        	{
        		this.divUniInfo.form.btnBizPlnd.set_visible(true);
        		var uniBizPlndFlmno = this.dsUniInfo.getColumn(0,'bizPlndFlmno');

        		var nRow = this.dsFileInfo.addRow();
        		this.dsFileInfo.setColumn(nRow,'flag', 'uniBizPlndFlmno');
        		this.dsFileInfo.setColumn(nRow,'fileGroupMgno', uniBizPlndFlmno);

        	}
        	this.divUniInfo.form.resetScroll();
        	if(!this.gfnIsNull(pgmPrvtPrcs) && pgmPrvtPrcs == 'Y')
        	{
        		this.divPrgrmInfo.form.stcBizPlnd.set_text(pgmPrvtPrcsNm + " ");
        		this.divPrgrmInfo.form.btnBizPlnd.set_visible(false);

        	}else
        	{
        		this.divPrgrmInfo.form.btnBizPlnd.set_visible(true);
        		var pgmBizPlndFlmno = this.dsPgmInfo.getColumn(0,'bizPlndFlmno');

        		var nRow2 = this.dsFileInfo.addRow();
        		this.dsFileInfo.setColumn(nRow2,'flag', 'pgmBizPlndFlmno');
        		this.dsFileInfo.setColumn(nRow2,'fileGroupMgno', pgmBizPlndFlmno);
        	}
        	this.divPrgrmInfo.form.resetScroll();
        	this.fnFileSearch();
        }

        this.fnReddPlusFormCtrl = function()
        {
        	var uniBizDtlFldCd = this.dsUniInfo.getColumn(0,'bizDtlFldCd');

        	if(uniBizDtlFldCd == '14-B')
        	{
        		this.divUniInfo.form.staReddPlus.set_visible(true);
        		this.divUniInfo.form.edtReddPlus.set_visible(true);
        	}else
        	{
        		this.divUniInfo.form.staReddPlus.set_visible(false);
        		this.divUniInfo.form.edtReddPlus.set_visible(false);
        	}

        	var pgmBizDtlFldCd = this.dsPgmInfo.getColumn(0,'bizDtlFldCd');
        	if(pgmBizDtlFldCd == '14-B')
        	{
        		this.divUniInfo.form.staReddPlus.set_visible(true);
        		this.divUniInfo.form.edtReddPlus.set_visible(true);
        	}else
        	{
        		this.divUniInfo.form.staReddPlus.set_visible(false);
        		this.divUniInfo.form.edtReddPlus.set_visible(false);
        	}
        }

        this.fnDsClear = function()
        {
        	this.dsFileInfo.clearData();
        	this.dsPgmBizPlndFile.clearData();
        	this.dsPgmInfo.clearData();
        	this.dsPgmMhdlgList.clearData();
        	this.dsPgmNtnList.clearData();
        	this.dsUniBizPlndFile.clearData();
        	this.dsUniInfo.clearData();
        	this.dsUniMhdlgList.clearData();
        	this.dsUniNtnList.clearData();
        }
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 기능 설명
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
        			objArgs.flag = "irb";
        			this.getOwnerFrame().form.fnSearchAreaBtnCtrl(objArgs);
        		}else if (prePage == "IrbCmmInfoM00")
        		{
        			this.getOwnerFrame().form.fnIrbInfoListCall();
        		}
        	}else
        	{
        		this.getOwnerFrame().form.fnIrbInfoListCall();
        	}

        };

        this.divPrgrmInfo_btnBizPlnd_onclick = function(obj,e)
        {
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsPgmBizPlndFile.getColumn(0, "fileGroupMgno"), fileMgno : this.dsPgmBizPlndFile.getColumn(0, "fileMgno")}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        this.divUniInfo_btnBizPlnd_onclick = function(obj,e)
        {
        	var arrFileListInfo = [
        		  { fileGroupMgno : this.dsUniBizPlndFile.getColumn(0, "fileGroupMgno"), fileMgno : this.dsUniBizPlndFile.getColumn(0, "fileMgno")}
        	];

        	this.gfnCheckFileDownloadSvcCheck(this, arrFileListInfo);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divPrgrmInfo.form.edtReddPlusYn.addEventHandler("onchanged",this.divPrgrmInfo_edtReddPlusYn_onchanged,this);
            this.divPrgrmInfo.form.btnBizPlnd.addEventHandler("onclick",this.divPrgrmInfo_btnBizPlnd_onclick,this);
            this.divPrgrmInfo.form.staBizPlnd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUniInfo.form.btnBizPlnd.addEventHandler("onclick",this.divUniInfo_btnBizPlnd_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.btnList_onclick,this);
        };
        this.loadIncludeScript("IrbCmmInfoS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
