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
            this.set_titletext("정보관리 > 수정기능 없는 상세화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlsClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsGbnNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


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


            obj = new Dataset("dsInstInfoOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlsClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullHdponNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullFaxNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emlFullAddr\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/><Column id=\"orgAcntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgAcntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult04", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult05", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"chgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult06", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"srhChgMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"fileTypeClCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileYn\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"achgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult07", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstChgHstryDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"chgArtclFieldNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"artclType\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","0","divH1:0",null,"303","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine6","0","258",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","172",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","215",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("25");
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
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업체명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCrno","0","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("12");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("법인등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","0","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("16");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","258","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("우편번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBrno","783","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("14");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","783","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("18");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("법인전화번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","783","258","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("23");
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
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstRegistType","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_text("기관관리번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("기관관리번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine3","0","129",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","783","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("10");
            obj.set_text("사업체구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업체구분");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","0","129","150","44",null,null,null,null,null,null,this.divInst.form);
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
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtInstClsfCdNm","staInstClsfCd:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체분류");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentClCdNm","staBzentClCd:7","136","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체구분");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtInstMgno","staInstRegistType:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_tooltiptext("기관관리번호");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtGovInstYnNm","staGovInstYn:7","136","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_tooltiptext("정부기관여부");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","265","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","edtRdnmCd:3","265","536","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","265",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtFullCorpTelNo","staCorpTel:7","222","200","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체법인전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","179","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","222","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","179","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2_00","0","86",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCmptncInstNm","0","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("33");
            obj.set_text("관할기관명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업체명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staPsnAcntUnqNo","783","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("34");
            obj.set_text("보유계정고유번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCmptncInstNm","staCmptncInstNm:7","93","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_tooltiptext("관할기관명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtPsnAcntUnqNo","staPsnAcntUnqNo:7","93","487","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("36");
            obj.set_textAlign("left");
            obj.set_tooltiptext("보유계정고유번호");
            obj.set_maxlength("30");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","0","divInst:0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH2:0",null,"132","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"132","7",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staBrdocFlmno","0","0","150","132",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingle","staBrdocFlmno:7","6","800","120",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("3");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divH4","0","divFile:0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("계정 담당자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divGrid","0","divH4:0",null,"473","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserChgHistList","0","0",null,"473","0",null,null,null,null,null,this.divGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsUserInfo");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"이름\" tooltiptext=\"이름\"/><Cell col=\"2\" text=\"아이디\" tooltiptext=\"아이디\"/><Cell col=\"3\" text=\"계정구분\" tooltiptext=\"계정구분\"/><Cell col=\"4\" text=\"부서명\" tooltiptext=\"부서명\"/><Cell col=\"5\" text=\"직위\" tooltiptext=\"직위\"/><Cell col=\"6\" text=\"전화번호\" tooltiptext=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰번호\" tooltiptext=\"휴대폰번호\"/><Cell col=\"8\" text=\"팩스번호\" tooltiptext=\"팩스번호\"/><Cell col=\"9\" text=\"이메일주소\" tooltiptext=\"이메일주소\"/><Cell col=\"10\" text=\"계정상태\" tooltiptext=\"계정상태\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:gridCmmCheck\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:flnm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:lgnId\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:userClCd\" displaytype=\"combotext\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:deptNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:jbpsNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:fullTelNo\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:fullHdponNo\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:fullFaxNo\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:emlFullAddr\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:acntSttsClCd\" displaytype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; ? &quot;combocontrol&quot; : &quot;normal&quot;\" combodataset=\"dsResult05\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" textAlign=\"center\" edittype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; ? &quot;combo&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.divGrid.addChild(obj.name, obj);

            obj = new Div("divComBtn1","0","divGrid:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","140","32","0",null,null,null,null,null,this.divComBtn1.form);
            obj.set_taborder("0");
            obj.set_text("계정 담당자 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("계정 담당자 저장");
            this.divComBtn1.addChild(obj.name, obj);

            obj = new Div("divH5","0","divComBtn1:0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH5.form);
            obj.set_taborder("0");
            obj.set_text("변경이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH5.addChild(obj.name, obj);

            obj = new Div("divHstryGrid","0","divH5:0",null,"228","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","0",null,"228","0",null,null,null,null,null,this.divHstryGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"710\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"변경항목\" tooltiptext=\"변경항목\"/><Cell col=\"2\" text=\"처리구분\" tooltiptext=\"처리구분\"/><Cell col=\"3\" text=\"변경일자\" tooltiptext=\"변경일자\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:chgArtclNm\" textAlign=\"center\" tooltiptext=\"bind:chgArtclNm\"/><Cell col=\"2\" text=\"bind:chgPrcsTypeCd\" textAlign=\"center\" displaytype=\"combotext\" tooltiptext=\"bind:chgPrcsTypeCd\" combodataset=\"dsResult07\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"3\" text=\"bind:chgDt\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" tooltiptext=\"bind:chgDt\"/></Band></Format></Formats>");
            this.divHstryGrid.addChild(obj.name, obj);

            obj = new Div("divPaging","0","divHstryGrid:20",null,"21","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Div("divH6","0","divPaging:20",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH6.form);
            obj.set_taborder("0");
            obj.set_text("변경이력 상세정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH6.addChild(obj.name, obj);

            obj = new Div("divHstryDtlGrid","0","divH6:0",null,"228","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","0",null,"228","0",null,null,null,null,null,this.divHstryDtlGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistDtlList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"변경구분\"/><Cell col=\"2\" text=\"변경항목\"/><Cell col=\"3\" text=\"변경전\"/><Cell col=\"4\" text=\"다운로드\"/><Cell col=\"5\" text=\"변경후\"/><Cell col=\"6\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" tooltiptext=\"bind:no\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:chgClCd\" tooltiptext=\"bind:chgClCd\" textAlign=\"center\" displaytype=\"expr:chgClCd == &quot;CCC0001&quot; || chgClCd == &quot;CCC0002&quot; ? &quot;combotext&quot; : &quot;normal&quot;\" combodataset=\"dsResult06\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\"/><Cell col=\"2\" text=\"bind:chgArtclNm\" tooltiptext=\"bind:chgArtclNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:fileYn == &quot;Y&quot; ? bchgCnOrgnlFileNm : bchgCn\" tooltiptext=\"expr:fileYn == &quot;Y&quot; ? bchgCnOrgnlFileNm : bchgCn\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"4\" displaytype=\"expr:fileYn == &quot;Y&quot; &amp;&amp; bchgCnOrgnlFileNm != &quot;&quot; ? &quot;buttoncontrol&quot; : &quot;none&quot;\" text=\"expr:fileYn == &quot;Y&quot; &amp;&amp; bchgCnOrgnlFileNm != &quot;&quot; ? &quot;다운로드&quot; : &quot;&quot;\" tooltiptext=\"expr:fileYn == &quot;Y&quot; &amp;&amp; bchgCnOrgnlFileNm != &quot;&quot; ? &quot;다운로드&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"expr:fileYn == &quot;Y&quot; ? achgCnOrgnlFileNm : achgCn\" tooltiptext=\"expr:fileYn == &quot;Y&quot; ? achgCnOrgnlFileNm : achgCn\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"expr:fileYn == &quot;Y&quot; &amp;&amp; achgCnOrgnlFileNm != &quot;&quot; ? &quot;다운로드&quot; : &quot;&quot;\" tooltiptext=\"expr:fileYn == &quot;Y&quot; &amp;&amp; achgCnOrgnlFileNm != &quot;&quot; ? &quot;다운로드&quot; : &quot;&quot;\" displaytype=\"expr:fileYn == &quot;Y&quot; &amp;&amp; achgCnOrgnlFileNm != &quot;&quot; ? &quot;buttoncontrol&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.divHstryDtlGrid.addChild(obj.name, obj);

            obj = new Div("divComBtn2","0","divHstryDtlGrid:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn2.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("목록");
            this.divComBtn2.addChild(obj.name, obj);

            obj = new Button("btnModify",null,"0","114","32","btnList:3",null,null,null,null,null,this.divComBtn2.form);
            obj.set_taborder("0");
            obj.set_text("업체정보 변경");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("업체정보 변경");
            this.divComBtn2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrid.form
            obj = new Layout("default","",0,0,this.divGrid.form,function(p){});
            this.divGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn1.form
            obj = new Layout("default","",0,0,this.divComBtn1.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5.form
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHstryGrid.form
            obj = new Layout("default","",0,0,this.divHstryGrid.form,function(p){});
            this.divHstryGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6.form
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHstryDtlGrid.form
            obj = new Layout("default","",0,0,this.divHstryDtlGrid.form,function(p){});
            this.divHstryDtlGrid.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn2.form
            obj = new Layout("default","",0,0,this.divComBtn2.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInst.form.edtInstMgno","value","dsInstInfo","instMgno");
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

            obj = new BindItem("item9","divInst.form.edtFullCorpTelNo","value","dsInstInfo","fullCorpTelNo");
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

            obj = new BindItem("item13","divInst.form.edtPsnAcntUnqNo","value","dsInstInfo","psnAcntUnqNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divInst.form.edtCmptncInstNm","value","dsInstInfo","cmptncInstNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
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
        this.wBtnModify = 114;
        this.wBtnList = 75;

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
         					,sBindCol:"brdocFlmno"									// 바인딩 컬럼
         					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
         					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
         					,sType:"S"
         					,sMode:"V"
         				   };

        	this.divFile.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"INST_CLSF_CD"  , headflag:"S" , useYn:"Y"};				// 기관분류코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"BZENT_CL_CD" , headflag:"S" , useYn:"Y"};				// 사업체구분코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"USER_CL_CD"  , headflag:"S" , useYn:"Y"};				// 사용자구분코드
        	arrParam[3] = {outDs:"dsResult04", groupId:"ACNT_STTS_CL_CD" , useYn:"Y"};			// 계정상태구분코드 - 출력용
        	arrParam[4] = {outDs:"dsResult05", groupId:"ACNT_STTS_CL_CD" , useYn:"Y"};			// 계정상태구분코드 - 선택용
        	arrParam[5] = {outDs:"dsResult06", groupId:"CHG_CL_CD"  , useYn:"Y"};				// 변경구분코드
        	arrParam[6] = {outDs:"dsResult07", groupId:"CHG_PRCS_TYPE_CD"  , useYn:"Y"};				// 변경구분코드

        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */

        	if(!(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003")) {		// 계정관리인, 계정대표자
        		this.fnChangeDiv();				// 업체관리 메뉴 클릭후 바로 set_url로 화면을 호출하나 M00에서 fnChangeDiv를 호출해도 제대로 동작안함 -> 화면이 다 그려지기 전이므로 -> 강제로 호출하기
        	}
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
        			}
        			else if(objRtn.sDiv == "DELETE") {
        				this.dsBrdocFlmnoFile.clearData();
        				var nRowCnt = this.dsBrdocFlmnoFile.copyData(objRtn.objDs);
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
        			}

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

        			this.dsResult05.set_enableevent(false);

        			for (var i = this.dsResult05.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult05.getColumn(i, "cdMgno") != "ASC0002"
        					&& this.dsResult05.getColumn(i, "cdMgno") != "ASC0003"
        					&& this.dsResult05.getColumn(i, "cdMgno") != "ASC0004"
        					&& this.dsResult05.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult05.deleteRow(i);
        				}
        			}
        			this.dsResult05.set_enableevent(true);

        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());
        			trace("[getCommonCode]this.dsResult03.getRowCount():"+this.dsResult03.getRowCount());
        			trace("[getCommonCode]this.dsResult04.getRowCount():"+this.dsResult04.getRowCount());
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
        		case "selectInstMngDetail" :
        			// 후처리 코드
        			this.dsCurInfo.setColumn(0, "instMgno", this.dsInstInfo.getColumn(0, "instMgno"));

        			// [single - RaonK] 파일 조회
        			var brdocFlmno = this.dsInstInfo.getColumn(0, "brdocFlmno");
        			brdocFlmno   = this.gfnIsNull(brdocFlmno)   ? "" : brdocFlmno;

        			trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        			this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기

        			var prcsGbnNo = this.dsInstInfo.getColumn(0, "prcsGbnNo");
        			trace("[prcsGbnNo]["+prcsGbnNo+"]");

        			// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        			if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        				if(prcsGbnNo == "4") {					/* 변경버튼 : 전체관리자가 업체정보 수정이 가능한 상태, 승인상태 case */
        					this.divComBtn2.form.btnModify.set_width(this.wBtnModify);				//업체정보 변경 버튼
        				} else {
        					this.divComBtn2.form.btnModify.set_width(0);							//업체정보 변경 버튼
        				}
        				this.divComBtn2.form.btnList.set_width(this.wBtnList);	//목록 버튼
        			// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        			} else {
        				this.divComBtn2.form.btnModify.set_width(0);							//업체정보 변경 버튼
        				this.divComBtn2.form.btnList.set_width(0);
        			}

        			this.divComBtn2.form.resetScroll();

        			break;
        		case "selectInstChgHstryList" :
        			// 후처리 코드
        			this.dsHistDtlList.clearData();		//변경이력 상세정보 초기화

        			if(this.dsHistList.rowcount > 0) {
        				var instMgno = this.dsHistList.getColumn(0, "instMgno");
        				var chgMgno = this.dsHistList.getColumn(0, "chgMgno");

        				trace("값 확인 -> [instMgno]["+instMgno+"][chgMgno]["+chgMgno+"]");

        				this.dsSrh.setColumn(0, "srhInstMgno", instMgno);
        				this.dsSrh.setColumn(0, "srhChgMgno", chgMgno);
        				this.fnCallHistDtlList();
        			}

        			// 상세화면은 총건수 영역없음 - this.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        			break;
        		case "selectInstChgHstryDtlList" :
        			// 후처리 코드
        			break;
        		case "saveUserList" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", function(svcid, variant) {
        				var objArgs = {};
        				objArgs.instMgno 	= this.dsCurInfo.getColumn(0, "instMgno");			// 기관관리번호
        				this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail03, objArgs);			// 업체관리 > 업체관리 > 수정기능 없는 상세화면
        			});
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 페이징처리 호출 CallBack 함수(선택)
         */
        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallHistList(); // 조회함수호출
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
         	objArgs.svcId 			= "selectInstMngDetail";
        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/selectInstMngDetail.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/selectInstMngDetail.irs";
        	}
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsInstInfo=dsInstInfo dsInstInfoOrg=dsInstInfo dsUserInfo=dsUserInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 변경이력정보 조회
         */
        this.fnCallHistList = function()
        {
        	trace("이력 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstChgHstryList";
        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/selectInstChgHstryList.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/selectInstChgHstryList.irs";
        	}
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsHistList=dsHistList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 변경이력 상세정보 조회
         */
        this.fnCallHistDtlList = function()
        {
        	trace("이력 상세 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectInstChgHstryDtlList";
        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/selectInstChgHstryDtlList.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/selectInstChgHstryDtlList.irs";
        	}
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsHistDtlList=dsHistDtlList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 업체정보 저장하기
        */
        this.fnCallSaveUserList = function()
        {
        	// 초기화
        	this.dsInstChgHstryDtl.clearData();

         	for (var i = this.dsUserInfo.rowcount - 1; i >= 0; i--) {
        		var userId = this.dsUserInfo.getColumn(i, "userId");
        		var userClCd = this.dsUserInfo.getColumn(i, "userClCd");
        		var orgUserClCd = this.dsUserInfo.getOrgColumn(i, "userClCd");
        		var acntSttsClCd = this.dsUserInfo.getColumn(i, "acntSttsClCd");
        		var orgAcntSttsClCd = this.dsUserInfo.getOrgColumn(i, "acntSttsClCd");

         		trace("[변경전]["+this.dsUserInfo.getColumn(i, "userClCd")+"]["+this.dsUserInfo.getColumn(i, "acntSttsClCd")+"][gridCmmCheck]["+this.dsUserInfo.getColumn(i, "gridCmmCheck")+"][lgnId]["+this.dsUserInfo.getColumn(i, "lgnId")+"][userId]["+this.dsUserInfo.getColumn(i, "userId")+"]");
        		trace("[변경후]["+this.dsUserInfo.getOrgColumn(i, "userClCd")+"]["+this.dsUserInfo.getOrgColumn(i, "acntSttsClCd")+"][gridCmmCheck]["+this.dsUserInfo.getOrgColumn(i, "gridCmmCheck")+"][lgnId]["+this.dsUserInfo.getOrgColumn(i, "lgnId")+"][userId]["+this.dsUserInfo.getOrgColumn(i, "userId")+"]");

        		/* 변경항목 체크 */
        		if(userClCd != orgUserClCd) {
        			var nRow = this.dsInstChgHstryDtl.addRow();
        			this.dsInstChgHstryDtl.setColumn(nRow, "chgArtclFieldNm", "userClCd");
        			this.dsInstChgHstryDtl.setColumn(nRow, "chgArtclNm", "계정구분");
        			this.dsInstChgHstryDtl.setColumn(nRow, "bchgCn", orgUserClCd);
        			this.dsInstChgHstryDtl.setColumn(nRow, "achgCn", userClCd);
        			this.dsInstChgHstryDtl.setColumn(nRow, "artclType", "C");
        			this.dsInstChgHstryDtl.setColumn(nRow, "userId", userId);
        			this.dsInstChgHstryDtl.setColumn(nRow, "instMgno", this.dsCurInfo.getColumn(0, "instMgno"));
        		}
        		if(acntSttsClCd != orgAcntSttsClCd) {
        			var nRow = this.dsInstChgHstryDtl.addRow();
        			this.dsInstChgHstryDtl.setColumn(nRow, "chgArtclFieldNm", "acntSttsClCd");
        			this.dsInstChgHstryDtl.setColumn(nRow, "chgArtclNm", "계정상태");
        			this.dsInstChgHstryDtl.setColumn(nRow, "bchgCn", orgAcntSttsClCd);
        			this.dsInstChgHstryDtl.setColumn(nRow, "achgCn", acntSttsClCd);
        			this.dsInstChgHstryDtl.setColumn(nRow, "artclType", "C");
        			this.dsInstChgHstryDtl.setColumn(nRow, "userId", userId);
        			this.dsInstChgHstryDtl.setColumn(nRow, "instMgno", this.dsCurInfo.getColumn(0, "instMgno"));
        		}

         	}

        	// 공통Transaction 호출
        	var objArgs = {};
         	objArgs.svcId 			= "saveUserList";
        	// 전체관리자 권한은 업체관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/saveUserList.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/saveUserList.irs";
        	}
         	objArgs.inds      		= "dsInstInfo=dsInstInfo dsUserInfo=dsUserInfo:U dsInstChgHstryDtl=dsInstChgHstryDtl";
         	objArgs.outds     		= "";
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
        	trace("[UserMngS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	// 값 초기화
        // 	this.dsInstInfo.clearData();
        // 	this.dsInstInfo.insertRow(0);
        // 	this.dsBrdocFlmnoFile.clearData();
        // 	this.divFile.form.divRaonKSingle.form.fnResetUpload();		// [single - RaonK] 초기화

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsCurInfo.clearData();
        	this.dsCurInfo.insertRow(0);
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		this.dsCurInfo.setColumn(0, "instMgno", objArgs.instMgno);
        	}														// 계정관리인, 계정대표자 는 메뉴클릭시 상세화면이 표시되므로 instMgno값이 없음 - 서버내 세션정보에서 추출가능

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsSrh.clearData();
        	this.dsSrh.insertRow(0);
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		this.dsSrh.setColumn(0, "srhInstMgno", objArgs.instMgno);
        	}														// 계정관리인, 계정대표자 는 메뉴클릭시 상세화면이 표시되므로 instMgno값이 없음 - 서버내 세션정보에서 추출가능

        	// 상세조회 호출
        	this.fnCallDtlInfo();

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");

        	// 사용자 변경이력 조회 호출
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallHistList();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnList_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.isReLoad	= "Y";
        	this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail01, objArgs);			// 업체관리 > 업체관리 목록
        };

        /**
         * @description 변경이력정보 행 클릭시
        */
        this.divHstryGrid_grdInstChgHistList_oncellclick = function(obj,e)
        {
        	var instMgno = this.dsHistList.getColumn(e.row, "instMgno");
        	var chgMgno = this.dsHistList.getColumn(e.row, "chgMgno");

        	trace("값 확인 -> [instMgno]["+instMgno+"][chgMgno]["+chgMgno+"]");

        	this.dsSrh.setColumn(0, "srhInstMgno", instMgno);
        	this.dsSrh.setColumn(0, "srhChgMgno", chgMgno);
        	this.fnCallHistDtlList();
        };

        /**
         * @description 업체정보 변경 버튼 클릭시
        */
        this.divComBtn2_btnModify_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.instMgno 	= this.dsCurInfo.getColumn(0, "instMgno");			// 기관관리번호
        	this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail02, objArgs);			// 업체관리 > 수정화면

        };

        /**
         * @description 계정 담당자 저장 버튼 클릭시
        */
        this.divComBtn1_btnSave_onclick = function(obj,e)
        {
        	if(this.dsUserInfo.rowcount == 0) {
        		this.gfnShowMessage(this, ["Alert","사용자가 존재하지 않습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	var userCnt = 0;
        	var changedRowCnt = 0;
        	for (var i = this.dsUserInfo.rowcount - 1; i >= 0; i--) {
        		trace("▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶["+this.dsUserInfo.getColumn(i, "gridCmmCheck")+"]");
        		if(this.dsUserInfo.getColumn(i, "acntSttsClCd") == "ASC0002") {			// 승인된 계정담당자 목록중에서 계정대표자가 1건이라도 존재해야됨
        			if(this.dsUserInfo.getColumn(i, "userClCd") == "UCC0005") {			// 계정대표자 인가?
        				userCnt++;
        			}
        		}

        		var gridCmmCheck = this.dsUserInfo.getColumn(i, "gridCmmCheck");
        		if(gridCmmCheck == "Y") {
        			changedRowCnt++;
        		}
        	}

        	// 일반사업체만 계정대표자 1건 필수체크
        	if(this.dsInstInfo.getColumn(0, "instClsfCd") == "ICC0005") {
        		if(userCnt == 0) {
        			this.gfnShowMessage(this, ["Alert","승인상태의 계정대표자가 지정되지 않았습니다.\n계정상태를 확인하십시오."], "", function(svcid, variant) {
        			});
        			return false;
        		}
        	}

        	if(changedRowCnt == 0) {
        		this.gfnShowMessage(this, ["Alert","변경된 계정 담당자 정보가 없습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSaveUserList();
        		}
        	});
        };

        /**
         * @description 콤보박스 선택시 바로 반영되게
        */
        this.divGrid_grdUserChgHistList_oncloseup = function(obj,e)
        {
        	if(e.cell == 3 || e.cell == 10){
        		obj.updateToDataset();
        	}
        };

        /**
         * @description 계정 담당자 정보 값 변경시
        */
        this.dsUserInfo_oncolumnchanged = function(obj,e)
        {
        	var userClCd = this.dsUserInfo.getColumn(e.row, "userClCd");
        	var orgUserClCd = this.dsUserInfo.getOrgColumn(e.row, "userClCd");

        	trace("[e.cell]["+e.cell+"][userClCd]["+userClCd+"][orgUserClCd]["+orgUserClCd+"]");

        	// 변경항목 표시 - 그리드
        	this.setEffectGrid();
        };

        /**
         * @description 변경항목 표시 - 그리드
        */
        this.setEffectGrid = function()
        {
        	this.dsUserInfo.set_enableevent(false);

        	for (var i = this.dsUserInfo.rowcount - 1; i >= 0; i--) {
        		var acntSttsClCd = this.dsUserInfo.getColumn(i, "acntSttsClCd");
        		var orgAcntSttsClCd = this.dsUserInfo.getOrgColumn(i, "acntSttsClCd");

        		trace("[row]["+i+"][orgAcntSttsClCd]["+orgAcntSttsClCd+"][acntSttsClCd]["+acntSttsClCd+"]");

        		// 값이 변경되었다면
        		if(acntSttsClCd != orgAcntSttsClCd) {
        			this.dsUserInfo.setColumn(i, "gridCmmCheck", "Y");
        			trace("[변경됨]");
        		} else {
        			this.dsUserInfo.setColumn(i, "gridCmmCheck", "N");
        			trace("[변경안됨]");
        		}
        	}
        	this.dsUserInfo.set_enableevent(true);
        };

        /**
         * @description 그리드 셀 클릭
        */
        this.divHstryDtlGrid_grdInstChgHistList_oncellclick = function(obj,e)
        {
        	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);

        	// 사업자등록증 - 변경전, 변경후
        	var fileYn = this.dsHistDtlList.getColumn(e.row, "fileYn");
        	if(fileYn == "Y") {
        		// 변경전
        		if(e.cell == 4) {
        			var bchgCnOrgnlFileNm 	= this.dsHistDtlList.getColumn(e.row, "bchgCnOrgnlFileNm");
        			if(!this.gfnIsNull(bchgCnOrgnlFileNm)) {
        				var bchgCn 	= this.dsHistDtlList.getColumn(e.row, "bchgCn");
        				this.fnFileDownload(this, bchgCn);
        			}
        		}
        		// 변경후
        		if(e.cell == 6) {
        			var achgCnOrgnlFileNm 	= this.dsHistDtlList.getColumn(e.row, "achgCnOrgnlFileNm");
        			if(!this.gfnIsNull(achgCnOrgnlFileNm)) {
        				var achgCn 	= this.dsHistDtlList.getColumn(e.row, "achgCn");
        				this.fnFileDownload(this, achgCn);
        			}
        		}
        	}
        };


        /**
         * @description 지정파일전체다운로드
         *				업무화면내부 파일목록정보 중 일부 선택적으로 다운로드 처리
        */
        this.fnFileDownload = function(obj, chgCn)
        {
        	var valueArray = chgCn.split(":");
        	var fileGroupMgno = valueArray[0];
        	var fileMgno = valueArray[1];
        	// 지정파일전체다운로드
        	// fileGroupMgno - 파일그룹키(fileGroupMgno)
        	// fileMgno - 파일순번키(fileMgno)
        	var arrFileListInfo = [
        		  { fileGroupMgno : fileGroupMgno, fileMgno : fileMgno}
        	];

        	this.gfnCheckFileDownloadSvcCheck(obj, arrFileListInfo);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divInst.form.staRprsvNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staRdnmCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staDtlAddr.addEventHandler("onclick",this.divContent_divInst_sta12_00_00_00_onclick,this);
            this.divInst.form.staLine1.addEventHandler("onclick",this.divContent_divInst_staLine1_onclick,this);
            this.divInst.form.staInstRegistType.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.staGovInstYn.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.staInstClsfCd.addEventHandler("onclick",this.divInst_staInstClsfCd_onclick,this);
            this.divInst.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.divInst.form.edtPsnAcntUnqNo.addEventHandler("onchanged",this.divInst_inputComp_onchange,this);
            this.divH2.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divH4.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divGrid.form.grdUserChgHistList.addEventHandler("oncloseup",this.divGrid_grdUserChgHistList_oncloseup,this);
            this.divComBtn1.form.btnSave.addEventHandler("onclick",this.divComBtn1_btnSave_onclick,this);
            this.divH5.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divHstryGrid.form.grdInstChgHistList.addEventHandler("oncellclick",this.divHstryGrid_grdInstChgHistList_oncellclick,this);
            this.divH6.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divHstryDtlGrid.form.grdInstChgHistList.addEventHandler("oncellclick",this.divHstryDtlGrid_grdInstChgHistList_oncellclick,this);
            this.divComBtn2.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn2.form.btnModify.addEventHandler("onclick",this.divComBtn2_btnModify_onclick,this);
            this.dsUserInfo.addEventHandler("oncolumnchanged",this.dsUserInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("BzentMngS03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
