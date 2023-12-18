(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserMngS01");
            this.set_titletext("사용자관리 상세화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrdocFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullFaxNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emlFullAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lastCntnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"lgnFailCnt\" type=\"STRING\" size=\"256\"/><Column id=\"lastLgnFailYmd\" type=\"STRING\" size=\"256\"/><Column id=\"pswdChgYmd\" type=\"STRING\" size=\"256\"/><Column id=\"userCertYn\" type=\"STRING\" size=\"256\"/><Column id=\"userCertYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"lgnScsCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlsClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclSn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserClCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclNm\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"srhUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","0","divH1:0",null,"260","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","7",null,null,null,null,null,this.divInst.form);
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
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCrno","0","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("12");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","0","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("16");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBrno","783","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("14");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","783","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("18");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","783","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("23");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtUpInstNm","staUpBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_tooltiptext("상위기관명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstRegistType","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","edtRdnmCd:3","222","536","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","783","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("10");
            obj.set_text("사업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","0","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("8");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","783","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("2");
            obj.set_text("사업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","7",null,null,null,null,null,this.divInst.form);
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

            obj = new Edit("edtBzentClCdNm","staBzentClCd:7","93","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체구분");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtInstAcntSttsClCd","staInstRegistType:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_tooltiptext("승인상태");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtGovInstYnNm","staGovInstYn:7","93","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_tooltiptext("정부기관여부");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtFullCorpTelNo","staCorpTel:7","179","200","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체법인전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","0","divInst:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divUser","0","divH2:0",null,"511","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnId","0","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFlnm","0","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staDeptNm","0","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("13");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish,symbol");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staUserClCd","783","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("11");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","783","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("15");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이름");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","staJbpsNm:7","136","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_tooltiptext("직위");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258",null,"81","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staEml","783","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("26");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staHdpon","783","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("19");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFax","0","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("24");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staSmsNtiYn","0","258","150","81",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("28");
            obj.set_text("카카오톡\r\n알림메세지\r\n동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staTel","0","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("17");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlFullAddr","staEml:7","222",null,"30","14",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체이메일주소");
            obj.set_maxlength("100");
            obj.set_inputtype("numberandenglish");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:7","136","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            obj.set_tooltiptext("부서명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtUserClCdNm","staUserClCd:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_tooltiptext("계정구분");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFullTelNo","staTel:7","179","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFullFaxNo","staFax:7","222","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체팩스번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staUserAcntSttsClCd","0","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("계정상태");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staDlbrUserNm","783","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_text("승인처리자");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDlbrUserNm","staDlbrUserNm:7","7","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_textAlign("left");
            obj.set_tooltiptext("승인처리자");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine9","0","338",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine10","0","381",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine11","0","424",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine12","0","467",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staAprvYmd","0","338","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("31");
            obj.set_text("가입일자");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnFailCnt","0","381","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("35");
            obj.set_text("로그인실패횟수");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staPswdChgDt","0","424","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("39");
            obj.set_text("비밀번호갱신일자");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnCnt","0","467","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("43");
            obj.set_text("로그인횟수");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLastCntnYmd","783","338","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("33");
            obj.set_text("최종접속일자");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLastLgnFailYmd","783","381","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("37");
            obj.set_text("로그인실패일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("로그인실패일자");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staUserCertYn","783","424","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("41");
            obj.set_text("본인인증여부");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnCnt","staLgnCnt:7","474","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("로그인횟수");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new MaskEdit("mseAprvYmd","staAprvYmd:7","345","124","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("32");
            obj.set_tooltiptext("가입일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new MaskEdit("mseLastCntnYmd","staLastCntnYmd:7","345","124","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("34");
            obj.set_tooltiptext("최종접속일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new MaskEdit("mseLastLgnFailYmd","staLastLgnFailYmd:7","388","124","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("38");
            obj.set_tooltiptext("로그인실패일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new MaskEdit("msePswdChgDt","staPswdChgDt:7","431","124","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("40");
            obj.set_tooltiptext("비밀번호갱신일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnFailCnt","staLgnFailCnt:7","388","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("로그인실패횟수");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtUserCertYn","staUserCertYn:7","431","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("본인인증여부");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Combo("cboAcntSttsClCd","940","50","227","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_tooltiptext("계정상태변경");
            obj.set_value("");
            obj.set_index("-1");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnSaveAcntSttsClCd","cboAcntSttsClCd:7","50","111","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("8");
            obj.set_text("수정");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staAcntSttsClCd","783","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_text("계정상태변경");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtUserAcntSttsClCd","staUserAcntSttsClCd:7","7","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("계정상태");
            obj.set_inputtype("numberandenglish,symbol");
            obj.set_cssclass("output");
            obj.set_maxlength("20");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponPhino","1126","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnSaveHdpon","edtHdponPhino:7","179","111","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("23");
            obj.set_text("수정");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDdd","staHdpon:7","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter1","edtHdponDdd:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("57");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponTlpno","edtHdponDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter2","edtHdponTlpno:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("58");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new CheckBox("chkSmsNtiYn","staSmsNtiYn:7","265","570","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("29");
            obj.set_text("계정신청에 대한 관리자의 검토결과를 카카오톡 알림메세지로 수신동의합니다.");
            obj.set_value("false");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("계정신청에 대한 관리자의 검토결과를 카카오톡 알림메세지로 수신동의합니다.");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnSaveSmsNtiYn","staSmsNtiYn:7","chkSmsNtiYn:7","111","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("30");
            obj.set_text("수정");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divFile","0","948",null,"132","30",null,null,null,null,null,this);
            obj.set_taborder("8");
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

            obj = new Div("divH4","0","divFile:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrChgHist","0","20","342","30",null,null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("변경이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divHstry","0","divH4:0",null,"228","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserChgHistList","0","0",null,"228","0",null,null,null,null,null,this.divHstry.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"계정구분\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"변경항목\"/><Cell col=\"4\" text=\"변경전\"/><Cell col=\"5\" text=\"변경후\"/><Cell col=\"6\" text=\"변경구분\"/><Cell col=\"7\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:no\" tooltiptext=\"bind:no\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:prcsUserClCd\" displaytype=\"combotext\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" tooltiptext=\"bind:prcsUserClCd\"/><Cell col=\"2\" textAlign=\"center\" tooltiptext=\"bind:prcsUserNm\" text=\"bind:prcsUserNm\"/><Cell col=\"3\" text=\"bind:chgArtclNm\" textAlign=\"center\" tooltiptext=\"bind:chgArtclNm\"/><Cell col=\"4\" text=\"bind:bchgCn\" textAlign=\"center\" tooltiptext=\"bind:bchgCn\"/><Cell col=\"5\" text=\"bind:achgCn\" textAlign=\"center\" tooltiptext=\"bind:achgCn\"/><Cell col=\"6\" text=\"bind:chgClCd\" textAlign=\"center\" combodataset=\"dsResult03\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" displaytype=\"combotext\" tooltiptext=\"bind:chgClCd\"/><Cell col=\"7\" text=\"bind:chgDt\" textAlign=\"center\" edittype=\"none\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" tooltiptext=\"bind:chgDt\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.divHstry.addChild(obj.name, obj);

            obj = new Div("divPaging","0","divHstry:20",null,"21","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divPaging:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("목록");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrSave",null,"0","114","32","btnList:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("비밀번호 초기화");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnLogoutUser",null,"0","114","32","btnDlbrSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("강제 세션해제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("비밀번호 초기화");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Div("divH3","0","divUser:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderFile","0","20","342","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);
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

            //-- Default Layout : this.divUser.form
            obj = new Layout("default","",0,0,this.divUser.form,function(p){});
            this.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingle.form,function(p){});
            this.divFile.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHstry.form
            obj = new Layout("default","",0,0,this.divHstry.form,function(p){});
            this.divHstry.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInst.form.edtInstAcntSttsClCd","value","dsInstInfo","acntSttsClCdNm");
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

            obj = new BindItem("item13","divUser.form.edtUserAcntSttsClCd","value","dsUserInfo","acntSttsClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divUser.form.edtDlbrUserNm","value","dsUserInfo","dlbrUserNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUser.form.edtLgnId","value","dsUserInfo","lgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divUser.form.edtFlnm","value","dsUserInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUser.form.edtUserClCdNm","value","dsUserInfo","userClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divUser.form.edtDeptNm","value","dsUserInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divUser.form.edtJbpsNm","value","dsUserInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divUser.form.edtFullTelNo","value","dsUserInfo","fullTelNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divUser.form.edtHdponDdd","value","dsUserInfo","hdponDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divUser.form.edtHdponTlpno","value","dsUserInfo","hdponTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divUser.form.edtHdponPhino","value","dsUserInfo","hdponPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divUser.form.chkSmsNtiYn","value","dsUserInfo","smsNtiYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divUser.form.mseAprvYmd","value","dsUserInfo","aprvYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divUser.form.edtLgnFailCnt","value","dsUserInfo","lgnFailCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divUser.form.mseLastLgnFailYmd","value","dsUserInfo","lastLgnFailYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divUser.form.msePswdChgDt","value","dsUserInfo","pswdChgYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divUser.form.edtUserCertYn","value","dsUserInfo","userCertYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divUser.form.cboAcntSttsClCd","value","dsSaveInfo","acntSttsClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divUser.form.edtFullFaxNo","value","dsUserInfo","fullFaxNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divUser.form.edtEmlFullAddr","value","dsUserInfo","emlFullAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divUser.form.mseLastCntnYmd","value","dsUserInfo","lastCntnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divUser.form.edtLgnCnt","value","dsUserInfo","lgnScsCnt");
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
        this.registerScript("UserMngS01.xfdl", function() {
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
        this.wBtnDlbrSave = 114;

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
        	arrParam[0] = {outDs:"dsResult01", groupId:"ACNT_STTS_CL_CD" , headflag:"S" , useYn:"Y"};					//계정상태구분코드
        	arrParam[1] = {outDs:"dsResult02", groupId:"USER_CL_CD" , useYn:"Y"};					//사용자구분코드
        	arrParam[2] = {outDs:"dsResult03", groupId:"CHG_CL_CD" , useYn:"Y"};					//변경구분코드

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
        		case "selectUserMngDetail" :
        			// 후처리 코드

        			// [single - RaonK] 파일 조회
        			var brdocFlmno = this.dsInstInfo.getColumn(0, "brdocFlmno");
        			brdocFlmno   = this.gfnIsNull(brdocFlmno)   ? "" : brdocFlmno;

        			trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        			this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기

        			// 계정상태변경 수정전용 데이터셋에 사용자ID만 설정하기
        			this.dsSaveInfo.setColumn(0, "userId", this.dsUserInfo.getColumn(0, "userId"));

        			// 미승인은 조회만 되도록, 기능버튼 모두 비활성화처리
        			if(this.dsUserInfo.getColumn(0, "acntSttsClCd") == "ASC0001") {
        				this.divUser.form.cboAcntSttsClCd.set_readonly(true);
        				this.divUser.form.btnSaveAcntSttsClCd.set_enable(false);

        				this.divUser.form.chkSmsNtiYn.set_readonly(true);
        				this.divUser.form.btnSaveSmsNtiYn.set_enable(false);

        				this.divUser.form.edtHdponDdd.set_readonly(true);
        				this.divUser.form.edtHdponTlpno.set_readonly(true);
        				this.divUser.form.edtHdponPhino.set_readonly(true);
        				this.divUser.form.btnSaveHdpon.set_enable(false);

        				this.divComBtn.form.btnDlbrSave.set_enable(false);
        				this.divComBtn.form.btnDlbrSave.set_width(0);
        			} else {
        				this.divUser.form.cboAcntSttsClCd.set_readonly(false);
        				this.divUser.form.btnSaveAcntSttsClCd.set_enable(true);

        				this.divUser.form.chkSmsNtiYn.set_readonly(false);
        				this.divUser.form.btnSaveSmsNtiYn.set_enable(true);

        				this.divUser.form.edtHdponDdd.set_readonly(false);
        				this.divUser.form.edtHdponTlpno.set_readonly(false);
        				this.divUser.form.edtHdponPhino.set_readonly(false);
        				this.divUser.form.btnSaveHdpon.set_enable(true);

        				this.divComBtn.form.btnDlbrSave.set_enable(true);
        				this.divComBtn.form.btnDlbrSave.set_width(this.wBtnDlbrSave);
        			}

        			this.divComBtn.form.resetScroll();

        			break;
        		case "selectUserChgHstryList" :
        			// 후처리 코드
        			// 상세화면은 총건수 영역없음 - this.staTotCnt.set_text("총 <fc v='#f96262'>"+ this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		case "updateUserAcntStts" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "");

        			// 사용자 변경이력 조회 호출 - 재조회
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        			this.fnCallHistList();
        			break;
        		case "updateUserHdpon" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "");

        			// 사용자 변경이력 조회 호출 - 재조회
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        			this.fnCallHistList();
        			break;
        		case "updateUserSmsNtiYn" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "");

        			// 사용자 변경이력 조회 호출 - 재조회
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        			this.fnCallHistList();
        			break;
        		case "executeUserLogout" :
        			// 후처리 코드
        			this.gfnShowMessage(this, ["Alert","사용자의 세션이 강제 해제 되었습니다."]);

        			break;
        		case "updateUserPswd" :
        			// 후처리 코드
        			this.gfnShowMessage(this, ["Alert","사용자의 비밀번호가 초기화 되었습니다."]);

        			// 사용자 변경이력 조회 호출 - 재조회
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        			this.fnCallHistList();
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

        			this.dsResult01.set_enableevent(false);

        			for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult01.getColumn(i, "cdMgno") != "ASC0003"			// 정지
        					&& this.dsResult01.getColumn(i, "cdMgno") != "ASC0004"			// 폐쇄
        					&& this.dsResult01.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult01.deleteRow(i);
        				}
        			}
        			this.dsResult01.set_enableevent(true);

        			// 후처리 코드
        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());

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
         	objArgs.svcId 			= "selectUserMngDetail";
         	objArgs.url 			= "/adm/user/userMng/selectUserMngDetail.irs";
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsUserInfo=dsUserInfo dsInstInfo=dsInstInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 사용자 변경이력 조회
         */
        this.fnCallHistList = function()
        {
        	trace("상세 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectUserChgHstryList";
         	objArgs.url 			= "/adm/user/userMng/selectUserChgHstryList.irs";
         	objArgs.inds      		= "dsSrh=dsSrh dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsHistList=dsHistList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 저장
         */
        this.fnCallSave = function(callType)
        {
        	if(callType == 1) {						// 계정상태변경 수정하기
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "updateUserAcntStts";
        		objArgs.url 			= "/adm/user/userMng/updateUserAcntStts.irs";
        		objArgs.inds      		= "dsSaveInfo=dsSaveInfo";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	} else if(callType == 2) {				// 휴대폰번호 수정하기
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "updateUserHdpon";
        		objArgs.url 			= "/adm/user/userMng/updateUserHdpon.irs";
        		objArgs.inds      		= "dsUserInfo=dsUserInfo";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	} else if(callType == 3) {				// SMS수신동의 수정하기
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "updateUserSmsNtiYn";
        		objArgs.url 			= "/adm/user/userMng/updateUserSmsNtiYn.irs";
        		objArgs.inds      		= "dsUserInfo=dsUserInfo";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	} else if(callType == 4) {				// 강제 접속해제
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "executeUserLogout";
        		objArgs.url 			= "/adm/user/userMng/executeUserLogout.irs";
        		objArgs.inds      		= "dsUserInfo=dsUserInfo";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	} else if(callType == 5) {				// 비밀번호 초기화
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= "updateUserPswd";
        		objArgs.url 			= "/adm/user/userMng/updateUserPswd.irs";
        		objArgs.inds      		= "dsUserInfo=dsUserInfo";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        	trace("저장 호출...");



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

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsCurInfo.clearData();
        	this.dsCurInfo.insertRow(0);
        	this.dsCurInfo.setColumn(0, "userId", objArgs.userId);

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsSrh.clearData();
        	this.dsSrh.insertRow(0);
        	this.dsSrh.setColumn(0, "srhUserId", objArgs.userId);

        	// 계정상태변경 변경 전용 데이터셋 초기화
        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.insertRow(0);

        	// 계정상태변경 - 선택 표시되게
        	this.divUser.form.cboAcntSttsClCd.set_index(0);

        	// 상세조회 호출 - 사업체정보, 사용자정보
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
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad	= "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };


        /**
         * @description 계정상태변경 수정 버튼 클릭시
        */
        this.divUser_btnSaveAcntSttsClCd_onclick = function(obj,e)
        {
        	// 계정상태변경 선택
        	if(this.gfnIsNull(this.divUser.form.cboAcntSttsClCd.value)) {
        		this.gfnShowMessage(this, "W000013", this.divUser.form.cboAcntSttsClCd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.cboAcntSttsClCd.setFocus();
        		});
        		return false;
        	}
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave(1);
        		}
        	});
        };

        /**
         * @description 휴대폰번호 수정 버튼 클릭시
        */
        this.divUser_btnSaveHdpon_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave(2);
        		}
        	});
        };

        /**
         * @description SMS수신동의 수정 버튼 클릭시
        */
        this.divUser_btnSaveSmsNtiYn_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave(3);
        		}
        	});
        };

        /**
         * @description 강제 접속해제 버튼 클릭시
        */
        this.divComBtn_btnLogoutUser_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, ["Confirm","사용자의 세션을 강제 해제 하시겠습니까?"], "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave(4);
        		}
        	});
        };

        /**
         * @description 비밀번호 초기화 버튼 클릭시
        */
        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, ["Confirm","비밀번호를 초기화 하시겠습니까?\n사용자 휴대폰번호로 SMS가 발송됩니다."], "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave(5);
        		}
        	});
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
            this.divUser.form.staFlnm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staDeptNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staFax.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staSmsNtiYn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staTel.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staUserAcntSttsClCd.addEventHandler("onclick",this.divUser_staLgnId00_onclick,this);
            this.divUser.form.staAprvYmd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staLgnFailCnt.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staPswdChgDt.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staLgnCnt.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.btnSaveAcntSttsClCd.addEventHandler("onclick",this.divUser_btnSaveAcntSttsClCd_onclick,this);
            this.divUser.form.btnSaveHdpon.addEventHandler("onclick",this.divUser_btnSaveHdpon_onclick,this);
            this.divUser.form.edtHdponDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtHdponDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.chkSmsNtiYn.addEventHandler("onchanged",this.divContent_divUser_chkSmsNtiYn_onchanged,this);
            this.divUser.form.btnSaveSmsNtiYn.addEventHandler("onclick",this.divUser_btnSaveSmsNtiYn_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnDlbrSave.addEventHandler("onclick",this.divComBtn_btnDlbrSave_onclick,this);
            this.divComBtn.form.btnLogoutUser.addEventHandler("onclick",this.divComBtn_btnLogoutUser_onclick,this);
            this.divH3.form.staHeaderFile.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("UserMngS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
