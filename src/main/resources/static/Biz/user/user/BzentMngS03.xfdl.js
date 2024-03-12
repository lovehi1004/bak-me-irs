(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzentMngS03");
            this.set_titletext("정보관리 > 업체정보 변경신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrdocFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult04", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult05", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult06", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclSn\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclCd\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"chgArtclCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"fileTypeClCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileYn\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"achgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgDt\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCnText\" type=\"STRING\" size=\"256\"/><Column id=\"achgCnText\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"registType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult07", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divInst","0","60",null,"383","30",null,"1400",null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine7","0","215",null,"81","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","129",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine6","0","172",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staUpBzentNm","783","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("6");
            obj.set_text("상위기관명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업체명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCrno","0","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("12");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("법인등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","0","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("16");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","215","150","81",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("우편번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("사업체명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBrno","783","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("14");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","783","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("18");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("전체법인전화번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","783","215","150","81",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("26");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("소재지");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtUpInstNm","staUpBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_tooltiptext("상위기관명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstRegistType","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("승인상태");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","86",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","783","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("10");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("업체구분");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","0","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("8");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("정부기관여부");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","783","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("2");
            obj.set_text("사업체분류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업체분류");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtInstClsfCdNm","staInstClsfCd:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체분류");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("사업체분류");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentClCdNm","staBzentClCd:7","93","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_tooltiptext("업체구분");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("업체구분");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtInstAcntSttsClCdNm","staInstRegistType:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_tooltiptext("승인상태");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("승인상태");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtGovInstYnNm","staGovInstYn:7","93","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_tooltiptext("정부기관여부");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("정부기관여부");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine7_00","0","295",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staPsnAcntUnqno","0","295","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("29");
            obj.set_text("보유계정고유번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtPsnAcntUnqno","157","302","600","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("30");
            obj.set_textAlign("left");
            obj.set_tooltiptext("보유계정고유번호");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine8","0","338",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staAcntSttsClCd","0","338","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("31");
            obj.set_text("업체상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("업체상태");
            this.divInst.addChild(obj.name, obj);

            obj = new Combo("cboAcntSttsClCd","staAcntSttsClCd:7","345","227","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_tooltiptext("업체상태");
            obj.set_accessibilitylabel("업체상태");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("사업자등록번호");
            obj.set_accessibilitydescription("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("법인등록번호");
            obj.set_accessibilitydescription("법인등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("대표자명");
            obj.set_accessibilitydescription("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDdd","staCorpTel:7","179","70","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화지역번호");
            obj.set_accessibilitydescription("법인전화지역번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter1","edtCorpTelDdd:7","179","16","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("42");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelTlpno","edtCorpTelDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화국번호");
            obj.set_accessibilitydescription("법인전화국번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter2","edtCorpTelTlpno:7","179","16","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("43");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelPhino","edtCorpTelDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화개별번호");
            obj.set_accessibilitydescription("법인전화개별번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222","487","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_accessibilitylabel("소재지");
            obj.set_accessibilitydescription("소재지");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staHelp1","staDtlAddr:7","258","487","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("28");
            obj.set_text("사업자등록증에 있는 주소로 입력 하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.set_tooltiptext("사업자등록증에 있는 주소로 입력 하시기 바랍니다.");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("23");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("우편번호");
            obj.set_accessibilitydescription("우편번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Button("btnRdnmCd","edtRdnmCd:3","222","100","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_text("주소 검색");
            obj.set_tooltiptext("주소 검색");
            obj.set_accessibilitylabel("주소 검색");
            obj.set_accessibilitydescription("팝업");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","staRdnmCd:7","258","487","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("주소");
            obj.set_accessibilitydescription("주소");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","0","divInst:0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderFile","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH2:0",null,"132","30",null,"1400",null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"132","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staBrdocFlmno","0","0","150","132",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업자등록증");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingle","staBrdocFlmno:7","6",null,"120","7",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("2");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            obj.set_tooltiptext("사업자등록증");
            obj.set_accessibilitylabel("사업자등록증");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divComBtn1","0","divFile:20",null,"32","30",null,"1400",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtl",null,"0","75","32","0",null,null,null,null,null,this.divComBtn1.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("취소");
            obj.set_accessibilitylabel("취소");
            this.divComBtn1.addChild(obj.name, obj);

            obj = new Button("btnAply",null,"0","75","32","btnDtl:3",null,null,null,null,null,this.divComBtn1.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("신청");
            obj.set_accessibilitylabel("신청");
            this.divComBtn1.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divBlankGuide","0","divComBtn1:0",null,"30","30",null,"1400",null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divInst.form
            obj = new Layout("default","",0,0,this.divInst.form,function(p){});
            this.divInst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingle.form,function(p){});
            this.divFile.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn1.form
            obj = new Layout("default","",0,0,this.divComBtn1.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBlankGuide
            obj = new Layout("default","",0,0,this.divBlankGuide.form,function(p){});
            this.divBlankGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInst.form.edtInstAcntSttsClCdNm","value","dsInstInfo","acntSttsClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInst.form.edtInstClsfCdNm","value","dsInstInfo","instClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInst.form.edtBzentNm","value","dsInstInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInst.form.edtUpInstNm","value","dsInstInfo","upInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInst.form.edtGovInstYnNm","value","dsInstInfo","govInstYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divInst.form.edtBzentClCdNm","value","dsInstInfo","bzentClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divInst.form.mseCrno","value","dsInstInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divInst.form.mseBrno","value","dsInstInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divInst.form.edtRprsvNm","value","dsInstInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divInst.form.edtRdnmCd","value","dsInstInfo","rdnmCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divInst.form.edtAddr","value","dsInstInfo","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divInst.form.edtDtlAddr","value","dsInstInfo","dtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divInst.form.edtPsnAcntUnqno","value","dsInstInfo","psnAcntUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divInst.form.cboAcntSttsClCd","value","dsSaveInfo","acntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divInst.form.edtCorpTelTlpno","value","dsInstInfo","corpTelTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divInst.form.edtCorpTelDdd","value","dsInstInfo","corpTelDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divInst.form.edtCorpTelPhino","value","dsInstInfo","corpTelPhino");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("BzentMngS03.xfdl", function() {
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
        this.highlight_bg_color = "#f1ffdf";
        this.fileUpdateCount = 0;				// 파일변경여부

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
        	trace("[UserMngS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 값 초기화
        	this.dsInstInfo.clearData();
        	this.dsInstInfo.insertRow(0);

        	// RaonKSingle ( comRaonK.xfdl )
        	// [single - RaonK] single 등록/수정용
         	var objParam = { objDs:this.dsInstInfo								// 바인딩 데이터셋
         					,sBindCol:"brdocFlmno"								// 바인딩 컬럼
         					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
         					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
         					,sType:"S"
         					,sMode:"E"
         				   };

        	this.divFile.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"ACNT_STTS_CL_CD" , headflag:"S" , useYn:"Y"};		// 계정상태구분코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"USER_CL_CD" , useYn:"Y"};							// 사용자구분코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"CHG_CL_CD" , useYn:"Y"};							// 변경구분코드
        	arrParam[3] = {outDs:"dsResult04", groupId:"CHG_ARTCL_CD" , useYn:"Y"};							// 변경항목코드
        	arrParam[4] = {outDs:"dsResult05", groupId:"INST_CLSF_CD" , useYn:"Y"};							// 사업체분류
        	arrParam[5] = {outDs:"dsResult06", groupId:"BZENT_CL_CD"  , useYn:"Y"};							// 업체구분
        	arrParam[6] = {outDs:"dsResult07", groupId:"APLY_PRCS_TYPE_CD" , useYn:"Y"};					// 신청처리유형코드

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */

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
         * @description [single - RaonK] CallBack 함수
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

        			if(objRtn.sDiv == "UPLOAD") {
        				this.dsBrdocFlmnoFile.clearData();
        				var nRowCnt = this.dsBrdocFlmnoFile.copyData(objRtn.objDs);
        				this.fileUpdateCount = 1;
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsBrdocFlmnoFile.clearData();
        				var nRowCnt = this.dsBrdocFlmnoFile.copyData(objRtn.objDs);
        				this.fileUpdateCount = 1;
        			}
        			else if(objRtn.sDiv == "SEARCH") {
        				this.dsBrdocFlmnoFile.clearData();
        				var nRowCnt = this.dsBrdocFlmnoFile.copyData(objRtn.objDs);
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "fileGroupMgno"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "fileMgno"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "orgnlFileNm"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "fileNm"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "fileSz"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "fileExtnNm"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "regDt"));
        				trace("dsBrdocFlmnoFile==> " + this.dsBrdocFlmnoFile.getColumn(0, "delYn"));
        				this.fileUpdateCount = 0;
        			}

        			/* 파일정보 변경시(업로드, 삭제) 효과주기 */
        			if(objRtn.sDiv == "UPLOAD" || objRtn.sDiv == "DELETE") {
        				this.divFile.form.staBrdocFlmno.set_background(this.highlight_bg_color);
        			}

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

        				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "selectInstMngAplyDetail" :
        			// 후처리 코드

        			// 기관관리번호
        			var instMgno = this.dsInstInfo.getColumn(0, "instMgno");
        			// 사업체분류
        			var instClsfCd = this.dsInstInfo.getColumn(0, "instClsfCd");
        			// 업체구분
        			var bzentClCd = this.dsInstInfo.getColumn(0, "bzentClCd");
        			// 계정상태구분코드 - 업체상태
        			var instAcntSttsClCd = this.dsInstInfo.getColumn(0, "acntSttsClCd");

        			/* 업체정보 변경신청 가능한 조건이 아닌 경우 */
        			if(instClsfCd != "ICC0005" && bzentClCd != "BCC0002" && instAcntSttsClCd != "ASC0002") {
        				this.gfnShowMessage(this, ["Alert","업체정보 변경신청이 가능하지 않습니다.\n승인상태의 비할당업체만 가능합니다."], "", function(svcid, variant) {
        					if(variant == "OK") {
        						// 상세조회 호출
        						var objArgs = {};
        						objArgs.isReLoad	= "Y";
        						this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail02, objArgs);			// 정보관리 > 상세화면
        					}
        				});
        				return false;
        			}

        			// 조회후 기관관리번호 세팅하기
        			this.dsSaveInfo.clearData();
        			this.dsSaveInfo.insertRow(0);
        			this.dsSaveInfo.setColumn(0, "instMgno", instMgno);

        			/* #################### 가입유형별 텍스트설정 콤보박스 초기설정 START #################### */
        			if(instClsfCd != "ICC0005") {				// 관장(위탁)기관
        				this.divH1.form.staHeaderInst.set_text("기관정보");
        				this.divInst.form.staBzentNm.set_text("기관명");
        				this.divInst.form.staInstClsfCd.set_text("기관분류");

        				this.divInst.form.edtBzentNm.set_tooltiptext("기관명");
        				this.divInst.form.edtInstClsfCdNm.set_tooltiptext("기관분류");

        				this.divInst.form.edtBzentNm.set_accessibilitylabel("기관명");
        				this.divInst.form.edtInstClsfCdNm.set_accessibilitylabel("기관분류");

        			} else {		// 사업수행자
        				this.divH1.form.staHeaderInst.set_text("사업체정보");
        				this.divInst.form.staBzentNm.set_text("사업체명");
        				this.divInst.form.staInstClsfCd.set_text("사업체분류");

        				this.divInst.form.edtBzentNm.set_tooltiptext("사업체명");
        				this.divInst.form.edtInstClsfCdNm.set_tooltiptext("사업체분류");

        				this.divInst.form.edtBzentNm.set_accessibilitylabel("사업체명");
        				this.divInst.form.edtInstClsfCdNm.set_accessibilitylabel("사업체분류");
        			}
        			/* #################### 가입유형별 텍스트설정 초기설정 END #################### */

        			// 후처리 코드
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());

        			// 기관관리번호 세팅하기
        			this.dsCurInfo.clearData();
        			this.dsCurInfo.insertRow(0);
        			this.dsCurInfo.setColumn(0, "instMgno", instMgno);				// 전체관리자 권한은 기관관리번호 파라미터 필수

        			// [single - RaonK] 파일 조회
        			var brdocFlmno = this.dsInstInfo.getColumn(0, "brdocFlmno");
        			brdocFlmno   = this.gfnIsNull(brdocFlmno)   ? "" : brdocFlmno;

        			trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        			this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기

        			// 승인, 미승인 상태 효과주기
        			this.divInst.form.edtInstAcntSttsClCdNm.set_color((instAcntSttsClCd == 'ASC0001' ? '#e10000' : '#2756b6'));

        			// 첫번째꺼 선택하기
        			this.divInst.form.cboAcntSttsClCd.set_index(0);

        			/* 계정구분 상태 승인상태 제외하고 표시하기 */
        			var strFilterExpr = "cdMgno != 'ASC0002'";
        			this.dsResult01.set_enableevent(false);
        			this.dsResult01.filter(strFilterExpr);
        			this.dsResult01.set_enableevent(true);

        			/* 효과 초기화 */
        			this.setEffectGrid();

        			break;

        		case "insertInstChgAply" :
        			// 후처리 코드
        			this.gfnShowMessage(this, ["Alert","업체정보 변경신청이 완료되었습니다.\n등록관리에서 확인하세요."], "", function(svcid, variant) {
        				if(variant == "OK") {
        					var objArgs = {};
        					objArgs.isReLoad	= "Y";
        					this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail02, objArgs);			// 정보관리 > 상세화면
        				}
        			});

        			break;

        		default:
        			break;
        	}
        };

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :
        			// 후처리 코드
        			this.dsResult01.set_enableevent(false);

        			for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        				if(!['', 'ASC0002', 'ASC0003', 'ASC0004'].includes(this.dsResult01.getColumn(i, "cdMgno"))) {
        					this.dsResult01.deleteRow(i);
        				}
        			}
        			this.dsResult01.set_enableevent(true);
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
        		//도로명주소 검색 팝업
        		case "comJusoPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			trace("[objRtnValue][" + JSON.stringify(objRtnValue)+"]");


        			if(this.gfnIsNull(objRtnValue)) {
        				this.gfnShowMessage(this, ["Alert","주소가 선택되지 않았습니다."], "", function(svcid, variant) {
        					this.divContent.form.divInst.form.btnRdnmCd.setFocus();
        				});
        				return false;
        			}

        			//팝업에서 넘어온 값 설정하기
        			this.dsInstInfo.setColumn(0, "rdnmCd"   , objRtnValue["zipNo"]        );		// 우편번호
        			this.dsInstInfo.setColumn(0, "addr"     , objRtnValue["roadAddr"]     );		// 도로명주소

        			this.divContent.form.divInst.form.edtDtlAddr.setFocus();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 상세조회
         */
        this.fnCallDtlInfo = function()
        {
        	trace("상세 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstMngAplyDetail";
        	objArgs.url 			= "/biz/user/instMng/selectInstMngAplyDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsInstInfo=dsInstInfo dsInstInfoFile=dsInstInfoFile";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 저장
         */
        this.fnCallSave = function(callType)
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "insertInstChgAply";
        	objArgs.url 			= "/biz/user/instMng/insertInstChgAply.irs";
         	objArgs.inds      		= "dsInstInfo=dsInstInfo dsInstInfoFile=dsInstInfoFile dsBrdocFlmnoFile=dsBrdocFlmnoFile dsSaveInfo=dsSaveInfo";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        	trace("신청 호출...");
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
        	trace("[UserMngS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	// 변경상태 효과 초기화
        	this.divInst.form.staAcntSttsClCd.set_background("");
        	this.divInst.form.cboAcntSttsClCd.set_background("");
        	this.divFile.form.staBrdocFlmno.set_background("");

        	// 계정상태변경 변경 전용 데이터셋 초기화
        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.insertRow(0);

        	// 값 초기화 - 세션정보로 조회하므로 - dsCurInfo에 빈행 추가후 전송, 업체정보 변경신청시에 dsCurInfo 사용
        	this.dsCurInfo.clearData();
        	this.dsCurInfo.insertRow(0);

        	// 상세조회 호출
        	this.fnCallDtlInfo();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 취소 클릭시 상세화면으로 전환
        */
        this.divComBtn1_btnDtl_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.isReLoad	= "Y";
        	this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail02, objArgs);			// 정보관리 > 상세화면
        };

        /**
         * @description 계정 담당자 저장 버튼 클릭시
        */
        this.divComBtn1_btnAply_onclick = function(obj,e)
        {
        	var count = 0;

        	// 사업체명
        	if(this.gfnIsNull(this.divInst.form.edtBzentNm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.edtBzentNm.tooltiptext, function(svcid, variant) {
        			this.divInst.form.edtBzentNm.setFocus();
        		});
        		return false;
        	}

        	// 사업자등록번호
        	if(this.gfnIsNull(this.divInst.form.mseBrno.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.mseBrno.tooltiptext, function(svcid, variant) {
        			this.divInst.form.mseBrno.setFocus();
        		});
        		return false;
        	}

        	// 대표자명
        	if(this.gfnIsNull(this.divInst.form.edtRprsvNm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.edtRprsvNm.tooltiptext, function(svcid, variant) {
        			this.divInst.form.edtRprsvNm.setFocus();
        		});
        		return false;
        	}

        	// 법인지역번호
        	if(this.gfnIsNull(this.divInst.form.edtCorpTelDdd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.edtCorpTelDdd.tooltiptext, function(svcid, variant) {
        			this.divInst.form.edtCorpTelDdd.setFocus();
        		});
        		return false;
        	}

        	// 법인국번호
        	if(this.gfnIsNull(this.divInst.form.edtCorpTelTlpno.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.edtCorpTelTlpno.tooltiptext, function(svcid, variant) {
        			this.divInst.form.edtCorpTelTlpno.setFocus();
        		});
        		return false;
        	}

        	// 법인개별번호
        	if(this.gfnIsNull(this.divInst.form.edtCorpTelPhino.value)) {
        		this.gfnShowMessage(this, "W000014", this.divInst.form.edtCorpTelPhino.tooltiptext, function(svcid, variant) {
        			this.divInst.form.edtCorpTelPhino.setFocus();
        		});
        		return false;
        	}

        	// 사업자등록증
        	var brdocFlmno = this.dsInstInfoFile.getColumn(0, "brdocFlmno");				// 업무처리용 파일그룹관리번호
        	var fileGroupMgno = this.dsBrdocFlmnoFile.getColumn(0, "fileGroupMgno");		// 업로드콤포넌트 파일그룹관리번호
        	var fileMgno = this.dsBrdocFlmnoFile.getColumn(0, "fileMgno");					// 업로드콤포넌트 파일관리번호

        	if(this.gfnIsNull(brdocFlmno) || this.gfnIsNull(fileGroupMgno) || this.gfnIsNull(fileMgno)) {
        		this.gfnShowMessage(this, ["Alert","사업자등록증을 등록 하시기 바랍니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	count += (this.dsInstInfo.getColumn(0, "bzentNm")      != this.dsInstInfo.getOrgColumn(0, "bzentNm")     ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "crno")         != this.dsInstInfo.getOrgColumn(0, "crno")        ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "brno")         != this.dsInstInfo.getOrgColumn(0, "brno")        ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "rprsvNm")      != this.dsInstInfo.getOrgColumn(0, "rprsvNm")     ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "corpTelDdd")   != this.dsInstInfo.getOrgColumn(0, "corpTelDdd")  ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "corpTelTlpno") != this.dsInstInfo.getOrgColumn(0, "corpTelTlpno")) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "corpTelPhino") != this.dsInstInfo.getOrgColumn(0, "corpTelPhino")) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "rdnmCd")       != this.dsInstInfo.getOrgColumn(0, "rdnmCd")      ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "addr")         != this.dsInstInfo.getOrgColumn(0, "addr")        ) ? 1 : 0;
        	count += (this.dsInstInfo.getColumn(0, "dtlAddr")      != this.dsInstInfo.getOrgColumn(0, "dtlAddr")     ) ? 1 : 0;
        	count += (this.dsBrdocFlmnoFile.getColumn(0, "fileMgno") != this.dsBrdocFlmnoFile.getOrgColumn(0, "fileMgno")     ) ? 1 : 0;

        	count += this.fileUpdateCount;

        	if(!this.gfnIsNull(this.dsSaveInfo.getColumn(0, "acntSttsClCd"))) {
        		count += 1;
        	}

        	/* 변경된 값이 있는지 확인하기 */
        	if(count == 0) {
        		this.gfnShowMessage(this, ["Alert","변경된 정보가 없습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave();
        		}
        	});


        };

        /**
         * @description 업체정보 값 변경시
        */
        this.dsInstInfo_oncolumnchanged = function(obj,e)
        {
        	// 변경항목 표시 - 그리드
        	this.setEffectGrid();
        };

        /**
         * @description 변경항목 표시 - 업체정보
        */
        this.setEffectGrid = function()
        {
        	this.dsInstInfo.set_enableevent(false);

        	// 값이 변경되었다면 효과주기 - 헤더
        	this.divInst.form.staBzentNm.set_background(     (this.dsInstInfo.getColumn(0, "bzentNm")      != this.dsInstInfo.getOrgColumn(0, "bzentNm")     ) ? this.highlight_bg_color : "");
        	this.divInst.form.staCrno.set_background(        (this.dsInstInfo.getColumn(0, "crno")         != this.dsInstInfo.getOrgColumn(0, "crno")        ) ? this.highlight_bg_color : "");
        	this.divInst.form.staBrno.set_background(        (this.dsInstInfo.getColumn(0, "brno")         != this.dsInstInfo.getOrgColumn(0, "brno")        ) ? this.highlight_bg_color : "");
        	this.divInst.form.staRprsvNm.set_background(     (this.dsInstInfo.getColumn(0, "rprsvNm")      != this.dsInstInfo.getOrgColumn(0, "rprsvNm")     ) ? this.highlight_bg_color : "");

        	if((this.dsInstInfo.getColumn(0, "corpTelDdd")   != this.dsInstInfo.getOrgColumn(0, "corpTelDdd")  )
        		|| (this.dsInstInfo.getColumn(0, "corpTelTlpno") != this.dsInstInfo.getOrgColumn(0, "corpTelTlpno"))
        		|| (this.dsInstInfo.getColumn(0, "corpTelPhino") != this.dsInstInfo.getOrgColumn(0, "corpTelPhino"))
        	) {
        		this.divInst.form.staCorpTel.set_background(this.highlight_bg_color);
        	} else {
        		this.divInst.form.staCorpTel.set_background("");
        	}

        	if((this.dsInstInfo.getColumn(0, "rdnmCd")   != this.dsInstInfo.getOrgColumn(0, "rdnmCd")  )
        		|| (this.dsInstInfo.getColumn(0, "addr") != this.dsInstInfo.getOrgColumn(0, "addr"))
        	) {
        		this.divInst.form.staRdnmCd.set_background(this.highlight_bg_color);
        	} else {
        		this.divInst.form.staRdnmCd.set_background("");
        	}

        	this.divInst.form.staDtlAddr.set_background(     (this.dsInstInfo.getColumn(0, "dtlAddr")      != this.dsInstInfo.getOrgColumn(0, "dtlAddr")     ) ? this.highlight_bg_color : "");

        	// 값이 변경되었다면 효과주기 - 필드
        	this.divInst.form.edtBzentNm.set_background(     (this.dsInstInfo.getColumn(0, "bzentNm")      != this.dsInstInfo.getOrgColumn(0, "bzentNm")     ) ? this.highlight_bg_color : "");
        	this.divInst.form.mseCrno.set_background(        (this.dsInstInfo.getColumn(0, "crno")         != this.dsInstInfo.getOrgColumn(0, "crno")        ) ? this.highlight_bg_color : "");
        	this.divInst.form.mseBrno.set_background(        (this.dsInstInfo.getColumn(0, "brno")         != this.dsInstInfo.getOrgColumn(0, "brno")        ) ? this.highlight_bg_color : "");
        	this.divInst.form.edtRprsvNm.set_background(     (this.dsInstInfo.getColumn(0, "rprsvNm")      != this.dsInstInfo.getOrgColumn(0, "rprsvNm")     ) ? this.highlight_bg_color : "");
        	this.divInst.form.edtCorpTelDdd.set_background(  (this.dsInstInfo.getColumn(0, "corpTelDdd")   != this.dsInstInfo.getOrgColumn(0, "corpTelDdd")  ) ? this.highlight_bg_color : "");
        	this.divInst.form.edtCorpTelTlpno.set_background((this.dsInstInfo.getColumn(0, "corpTelTlpno") != this.dsInstInfo.getOrgColumn(0, "corpTelTlpno")) ? this.highlight_bg_color : "");
        	this.divInst.form.edtCorpTelPhino.set_background((this.dsInstInfo.getColumn(0, "corpTelPhino") != this.dsInstInfo.getOrgColumn(0, "corpTelPhino")) ? this.highlight_bg_color : "");
        	this.divInst.form.edtRdnmCd.set_background(      (this.dsInstInfo.getColumn(0, "rdnmCd")       != this.dsInstInfo.getOrgColumn(0, "rdnmCd")      ) ? this.highlight_bg_color : "");
        	this.divInst.form.edtAddr.set_background(        (this.dsInstInfo.getColumn(0, "addr")         != this.dsInstInfo.getOrgColumn(0, "addr")        ) ? this.highlight_bg_color : "");
        	this.divInst.form.edtDtlAddr.set_background(     (this.dsInstInfo.getColumn(0, "dtlAddr")      != this.dsInstInfo.getOrgColumn(0, "dtlAddr")     ) ? this.highlight_bg_color : "");

        	this.dsInstInfo.set_enableevent(true);
        };

        /**
         * @description 계정상태변경 값 변경시
        */
        this.divInst_cboAcntSttsClCd_onitemchanged = function(obj,e)
        {
        	this.dsSaveInfo.set_enableevent(false);

        	/* 계정상태변경 콤보박스 값 선택시 */
        	// 값이 변경되었다면 효과주기 - 헤더
        	this.divInst.form.staAcntSttsClCd.set_background((this.dsSaveInfo.getColumn(0, "acntSttsClCd") != ""     ) ? this.highlight_bg_color : "");
        	// 값이 변경되었다면 효과주기 - 필드
        	this.divInst.form.cboAcntSttsClCd.set_background((this.dsSaveInfo.getColumn(0, "acntSttsClCd") != ""     ) ? this.highlight_bg_color : "");

        	this.dsSaveInfo.set_enableevent(true);
        };

        this.divInst_btnRdnmCd_onclick = function(obj,e)
        {
        	var sPopupId	= "comJusoPop";
        	var sPopupUrl	= "Frame_Popup::comJusoPop.xfdl";
        	var objArgs		= {};
        	var oOption		= {showtitlebar:false,titletext:"도로명주소 검색"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divInst.form.staRdnmCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staDtlAddr.addEventHandler("onclick",this.divContent_divInst_sta12_00_00_00_onclick,this);
            this.divInst.form.staLine1.addEventHandler("onclick",this.divContent_divInst_staLine1_onclick,this);
            this.divInst.form.staInstRegistType.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.staGovInstYn.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.divInst.form.staPsnAcntUnqno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staAcntSttsClCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.cboAcntSttsClCd.addEventHandler("onitemchanged",this.divInst_cboAcntSttsClCd_onitemchanged,this);
            this.divInst.form.edtCorpTelDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divInst.form.edtCorpTelDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divInst.form.btnRdnmCd.addEventHandler("onclick",this.divInst_btnRdnmCd_onclick,this);
            this.divH2.form.staHeaderFile.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divComBtn1.form.btnDtl.addEventHandler("onclick",this.divComBtn1_btnDtl_onclick,this);
            this.divComBtn1.form.btnAply.addEventHandler("onclick",this.divComBtn1_btnAply_onclick,this);
            this.dsInstInfo.addEventHandler("oncolumnchanged",this.dsInstInfo_oncolumnchanged,this);
            this.dsSaveInfo.addEventHandler("oncolumnchanged",this.dsSaveInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("BzentMngS03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
