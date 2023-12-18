(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserRegS01");
            this.set_titletext("등록관리 상세화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserAplyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlsClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"instAcntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"instAcntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullHdponNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullFaxNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/><Column id=\"userClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlFullAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrReg", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrdocFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj.set_tooltiptext("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label");
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
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("우편번호");
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
            obj.set_tooltiptext("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","783","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("18");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("법인전화번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","783","215","150","44",null,null,null,null,null,null,this.divInst.form);
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

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222","612","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_cssclass("output");
            obj.set_readonly("true");
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
            obj.set_tooltiptext("승인상태");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("output");
            obj.set_readonly("true");
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
            obj.set_tooltiptext("사업체구분");
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

            obj = new Div("divUser","0","divH2:0",null,"296","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine4","0","86",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","0","43",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnId","0","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("아이디");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFlnm","0","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("이름");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staDeptNm","0","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("부서명");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:7","7","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish,symbol");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staUserClCd","783","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("계정구분");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","783","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("8");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이름");
            obj.set_maxlength("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","staJbpsNm:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            obj.set_tooltiptext("직위");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","129",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","172",null,"44","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","215",null,"81","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staEml","783","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("16");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staHdpon","783","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("12");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("휴대폰번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFax","0","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("14");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("팩스번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staSmsNtiYn","0","215","150","81",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("18");
            obj.set_text("카카오톡\r\n알림메세지\r\n동의여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("카카오톡 알림메세지 동의여부");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staTel","0","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("전화번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlFullAddr","staEml:7","179","612","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체이메일주소");
            obj.set_maxlength("100");
            obj.set_inputtype("numberandenglish");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_tooltiptext("부서명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtUserClCdNm","staUserClCd:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_tooltiptext("계정구분");
            obj.set_maxlength("15");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtSmsNtiYn","staSmsNtiYn:7","222","236","67",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("카카오톡 알림메세지 동의여부");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFullHdponNo","staHdpon:7","136","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체휴대폰번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFullTelNo","staTel:7","136","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFullFaxNo","staFax:7","179","200","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체팩스번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divH3","0","divUser:0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH3:0",null,"132","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"132","7",null,null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staBrdocFlmno","0","0","150","132",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업자등록증");
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

            obj = new Div("divH4","0","divFile:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("divGroupDlbrResult","0","divH4:0",null,"242","37",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("심의결과 영역");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","20","0",null,"60","19",null,null,null,null,null,this.divGroupDlbrResult.form);
            obj.set_taborder("1");
            this.divGroupDlbrResult.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divGroupDlbrResult.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("심의결과");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divGroupDlbrResult.form.divH1.addChild(obj.name, obj);

            obj = new Div("divDlbr","20","divH1:0",null,"162","19",null,null,null,null,null,this.divGroupDlbrResult.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divGroupDlbrResult.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"76","0",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의처리결과");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnn","0","86","150","76",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("6");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의의견");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrOpnn","staDlbrOpnn:7","93",null,"62","7",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_tooltiptext("심의의견");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrDt","783","43","150","44",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("4");
            obj.set_text("심의처리일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의처리일자");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrTypeCd","staDlbrTypeCd:7","51","227","30",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_tooltiptext("심의처리결과");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("0");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의차수");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDgr","157","7",null,"30","1182",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_tooltiptext("심의차수");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new MaskEdit("mseDlbrDt","staDlbrDt:7","51","124","30",null,null,null,null,null,null,this.divGroupDlbrResult.form.divDlbr.form);
            obj.set_taborder("5");
            obj.set_tooltiptext("심의처리일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            this.divGroupDlbrResult.form.divDlbr.addChild(obj.name, obj);

            obj = new Div("divH5","0","divGroupDlbrResult:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Div("divGroupDlbrRegister","0","divH5:0",null,"242","37",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("심의결과 영역");
            obj.set_cssclass("div_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","20","0",null,"60","19",null,null,null,null,null,this.divGroupDlbrRegister.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divGroupDlbrRegister.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divGroupDlbrRegister.form.divH1.addChild(obj.name, obj);

            obj = new Div("divDlbr","20","divH1:0",null,"162","19",null,null,null,null,null,this.divGroupDlbrRegister.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divGroupDlbrRegister.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("0");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의차수");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDgr","staDlbrDgr:7","7",null,"30","1182",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_tooltiptext("심의차수");
            obj.set_cssclass("output");
            obj.set_text("");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"76","0",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrTypeCd","0","43","150","44",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("심의처리결과");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnn","0","86","150","76",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("6");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("심의의견");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Combo("cboDlbrTypeCd","staDlbrTypeCd:7","51","227","30",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_tooltiptext("심의처리결과");
            obj.set_value("");
            obj.set_index("-1");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrOpnn","staDlbrOpnn:7","93",null,"62","7",null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_maxlength("300");
            obj.set_tooltiptext("심의의견");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrDt","783","43","150","44",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("4");
            obj.set_text("심의처리일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("심의처리일자");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new MaskEdit("mseDlbrDt","staDlbrDt:7","51","124","30",null,null,null,null,null,null,this.divGroupDlbrRegister.form.divDlbr.form);
            obj.set_taborder("5");
            obj.set_tooltiptext("심의처리일자");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divGroupDlbrRegister.form.divDlbr.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divGroupDlbrRegister:20",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("목록");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrSave",null,"0","114","32","btnList:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("false");
            obj.set_tooltiptext("심의결과 저장");
            this.divComBtn.addChild(obj.name, obj);
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

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingle.form,function(p){});
            this.divFile.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrResult.form.divH1.form
            obj = new Layout("default","",0,0,this.divGroupDlbrResult.form.divH1.form,function(p){});
            this.divGroupDlbrResult.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrResult.form.divDlbr.form
            obj = new Layout("default","",0,0,this.divGroupDlbrResult.form.divDlbr.form,function(p){});
            this.divGroupDlbrResult.form.divDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrResult.form
            obj = new Layout("default","",0,0,this.divGroupDlbrResult.form,function(p){});
            this.divGroupDlbrResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrRegister.form.divH1.form
            obj = new Layout("default","",0,0,this.divGroupDlbrRegister.form.divH1.form,function(p){});
            this.divGroupDlbrRegister.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrRegister.form.divDlbr.form
            obj = new Layout("default","",0,0,this.divGroupDlbrRegister.form.divDlbr.form,function(p){});
            this.divGroupDlbrRegister.form.divDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGroupDlbrRegister.form
            obj = new Layout("default","",0,0,this.divGroupDlbrRegister.form,function(p){});
            this.divGroupDlbrRegister.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divInst.form.edtInstAcntSttsClCd","value","dsUserAplyInfo","instAcntSttsClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInst.form.edtInstClsfCdNm","value","dsUserAplyInfo","instClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInst.form.edtBzentNm","value","dsUserAplyInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInst.form.edtUpInstNm","value","dsUserAplyInfo","upInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInst.form.edtGovInstYnNm","value","dsUserAplyInfo","govInstYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divInst.form.edtBzentClCdNm","value","dsUserAplyInfo","bzentClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divInst.form.mseCrno","value","dsUserAplyInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divInst.form.mseBrno","value","dsUserAplyInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divInst.form.edtRprsvNm","value","dsUserAplyInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divInst.form.edtRdnmCd","value","dsUserAplyInfo","rdnmCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divInst.form.edtAddr","value","dsUserAplyInfo","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divInst.form.edtDtlAddr","value","dsUserAplyInfo","dtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUser.form.edtLgnId","value","dsUserAplyInfo","lgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divUser.form.edtFlnm","value","dsUserAplyInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUser.form.edtUserClCdNm","value","dsUserAplyInfo","userClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divUser.form.edtDeptNm","value","dsUserAplyInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divUser.form.edtJbpsNm","value","dsUserAplyInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divUser.form.edtEmlFullAddr","value","dsUserAplyInfo","emlFullAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divUser.form.edtSmsNtiYn","value","dsUserAplyInfo","smsNtiYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divInst.form.edtFullCorpTelNo","value","dsUserAplyInfo","fullCorpTelNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divUser.form.edtFullHdponNo","value","dsUserAplyInfo","fullHdponNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divUser.form.edtFullTelNo","value","dsUserAplyInfo","fullTelNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divUser.form.edtFullFaxNo","value","dsUserAplyInfo","fullFaxNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divGroupDlbrResult.form.divDlbr.form.edtDgr","value","dsDlbrInfo","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divGroupDlbrResult.form.divDlbr.form.edtDlbrTypeCd","value","dsDlbrInfo","dlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divGroupDlbrResult.form.divDlbr.form.mseDlbrDt","value","dsDlbrInfo","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divGroupDlbrResult.form.divDlbr.form.txaDlbrOpnn","value","dsDlbrInfo","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divGroupDlbrRegister.form.divDlbr.form.edtDgr","value","dsDlbrReg","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divGroupDlbrRegister.form.divDlbr.form.cboDlbrTypeCd","value","dsDlbrReg","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divGroupDlbrRegister.form.divDlbr.form.mseDlbrDt","value","dsDlbrReg","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divGroupDlbrRegister.form.divDlbr.form.txaDlbrOpnn","value","dsDlbrReg","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("UserRegS01.xfdl", function() {
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
        this.hDivH4 = 20;
        this.hDivH5 = 20;
        this.hDivGroupDlbrResult = 242;
        this.hDivGroupDlbrRegister = 242;

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

        	// 값 초기화
        	this.dsUserAplyInfo.clearData();
        	this.dsUserAplyInfo.insertRow(0);

        	// RaonKSingle ( comRaonK.xfdl )
        	// [single - RaonK] single 등록/수정용
         	var objParam = { objDs:this.dsUserAplyInfo								// 바인딩 데이터셋
         					,sBindCol:"brdocFlmno"									// 바인딩 컬럼
         					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
         					,sCallbackId:"singleFile01"							// 콜백ID , 필요시 추가
         					,sType:"S"
         					,sMode:"V"
         				   };

        	this.divFile.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	trace("[UserRegS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"USER_DLBR_TYPE_CD" , headflag:"S" , useYn:"Y"};		//처리유형코드

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
        		case "selectUserRegDetail" :
        			// 후처리 코드

        			// [single - RaonK] 파일 조회
        			var brdocFlmno = this.dsUserAplyInfo.getColumn(0, "brdocFlmno");
        			brdocFlmno   = this.gfnIsNull(brdocFlmno)   ? "" : brdocFlmno;

        			trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        			this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기

        			// 처리상태
        			var aplyPrcsTypeCd = this.dsUserAplyInfo.getColumn(0, "aplyPrcsTypeCd");

        			/* #################### 1. [레이어 제어 상태값 구하기]  START #################### */
        			var showDlbrResult = false;			// [레이어 제어] 심의결과
        			var showDlbrRegister = false;		// [레이어 제어] 심의결과 등록

        			if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        				if(aplyPrcsTypeCd == "APC0001") {					// 신청상태   ▶ 심의결과 x, 심의결과 등록 o, 심의결과 저장 버튼 o
        					showDlbrResult = false;
        					showDlbrRegister  = true;

        				} else if(aplyPrcsTypeCd == "APC0002" || aplyPrcsTypeCd == "APC0003") {			// 심의반려상태 ▶ 심의결과 o, 심의결과 등록 x | 심의승인상태 ▶ 심의결과 o, 심의결과 등록 x
        					showDlbrResult = true;
        					showDlbrRegister  = false;
        				}
        			}else {													// 신청자
        				if(aplyPrcsTypeCd == "APC0001") {					// 신청상태   ▶ 심의결과 x, 심의결과 등록 x
        					showDlbrResult = false;
        				} else if(aplyPrcsTypeCd == "APC0002" || aplyPrcsTypeCd == "APC0003") {			// 심의반려상태 ▶ 심의결과 o, 심의결과 등록 x | 심의승인상태 ▶ 심의결과 o, 심의결과 등록 x
        					showDlbrResult = true;
        				}
        				showDlbrRegister  = false;
        			}
        			/* #################### 1. [레이어 제어 상태값 구하기]  END #################### */

        			/* #################### 2. [레이어 제어]  START #################### */
        			/* [레이어 제어] 심의결과 */
        			if(showDlbrResult == true) {				// ▶▶▶▶ 보이기
        				this.divH4.set_height(this.hDivH4);
        				this.divGroupDlbrResult.set_height(this.hDivGroupDlbrResult);
        			} else {									// ▶▶▶▶ 숨기기
        				this.divH4.set_height(0);
        				this.divGroupDlbrResult.set_height(0);
        			}

        			/* [레이어 제어] 심의결과 등록 */
        			this.divComBtn.form.btnDlbrSave.set_visible(showDlbrRegister);
        			if(showDlbrRegister == true) {				// ▶▶▶▶ 보이기
        				// 데이터셋에 행 1건 생성하기
        				this.dsDlbrReg.clearData();
        				this.dsDlbrReg.insertRow(0);

        				// ####### 오늘날짜 조립하기 START
        				var today = new Date();

        				var yyyy = today.getFullYear();
        				var mm = ('0' + (today.getMonth() + 1)).slice(-2);
        				var dd = ('0' + today.getDate()).slice(-2);
        				// ####### 오늘날짜 조립하기 END

        				// 초기값 설정하기
        				this.dsDlbrReg.setColumn(0, "aplyMgno" , this.dsCurInfo.getColumn(0, "aplyMgno"));		//신청관리번호
        				this.dsDlbrReg.setColumn(0, "dlbrDt"   , (yyyy + mm + dd));								//심의처리일자 - 오늘날짜 설정하기
        				this.dsDlbrReg.setColumn(0, "dlbrDgr"  , "1");											//심의차수
        				this.dsDlbrReg.setColumn(0, "dlbrDgrNm", "1차");											//심의차수명

        				// 레이어 제어
        				this.divH5.set_height(this.hDivH5);
        				this.divGroupDlbrRegister.set_height(this.hDivGroupDlbrRegister);

        				this.divGroupDlbrRegister.form.divDlbr.form.cboDlbrTypeCd.set_index(0);

        			} else {									// ▶▶▶▶ 숨기기
        				this.divH5.set_height(0);
        				this.divGroupDlbrRegister.set_height(0);
        			}
        			/* #################### 2. [레이어 제어]  END #################### */

        			/* #################### 3. resetScroll START #################### */
        			this.divH4.form.resetScroll();
        			this.divGroupDlbrResult.form.resetScroll();
        			this.divH5.form.resetScroll();
        			this.divGroupDlbrRegister.form.resetScroll();
        			this.resetScroll();
        			/* #################### 3. resetScroll END #################### */

        			break;
        		case "insertUserRegDlbrRslt" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert01");

        			break;
        		default:
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
        		case "msgAlert01" :

        			// 화면전환
        			this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        			this.getOwnerFrame().form.divWork.form.divDetail01.set_visible(false);

        			// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        			var objArgs = {};
        			objArgs.isReLoad	= "Y";
        			this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);

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
        				if ( this.dsResult01.getColumn(i, "cdMgno") != "DTC0001"
        					&& this.dsResult01.getColumn(i, "cdMgno") != "DTC0002"
        					&& this.dsResult01.getColumn(i, "cdMgno") != ""
        				) {
        					this.dsResult01.deleteRow(i);
        				}
        			}
        			this.dsResult01.set_enableevent(true);

        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
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

        	var callUrl = "";
        	if(this.fvApp.User.roleIdMgno == "RL00000001" || this.fvApp.User.roleIdMgno == "RL00000002" || this.fvApp.User.roleIdMgno == "RL00000003") {		// 전체관리자
        		callUrl 			= "/adm/user/userReg/selectUserRegDetail.irs";
        	}else {
        		callUrl 			= "/biz/user/userReg/selectUserRegDetail.irs";
        	}

        	var datasets = "dsUserAplyInfo=dsUserAplyInfo";
        	// 처리상태 - 신의결과 정보 조회가 가능하다면
        	if(this.dsCurInfo.getColumn(0, "aplyPrcsTypeCd") == "APC0002"					// 심의반려상태
        		|| this.dsCurInfo.getColumn(0, "aplyPrcsTypeCd") == "APC0003"				// 심의승인상태
        	) {
        		datasets 			+= " dsDlbrInfo=dsDlbrInfo";
        	}

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "selectUserRegDetail";
         	objArgs.url 			= callUrl
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= datasets;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 저장
         */
        this.fnCallSave = function()
        {
        	trace("심의결과 저장 호출...");

        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "insertUserRegDlbrRslt";
         	objArgs.url 			= "/adm/user/userReg/insertUserRegDlbrRslt.irs";
         	objArgs.inds      		= "dsDlbrReg=dsDlbrReg";
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
        	trace("[UserRegS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsCurInfo.clearData();
        	this.dsCurInfo.insertRow(0);
        	this.dsCurInfo.setColumn(0, "aplyMgno", objArgs.aplyMgno);
        	this.dsCurInfo.setColumn(0, "aplyPrcsTypeCd", objArgs.aplyPrcsTypeCd);

        	// 상세조회 호출 - 사업체정보, 사용자정보, 심의결과
        	this.fnCallDtlInfo();
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
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
         * @description 심의결과 저장 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {

        	// 심의처리결과
        	if(this.gfnIsNull(this.divGroupDlbrRegister.form.divDlbr.form.cboDlbrTypeCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divGroupDlbrRegister.form.divDlbr.form.cboDlbrTypeCd.tooltiptext, function(svcid, variant) {
        			this.divGroupDlbrRegister.form.divDlbr.form.cboDlbrTypeCd.setFocus();
        		});
        		return false;
        	}

        	// 심의의견
        	if(this.gfnIsNull(this.divGroupDlbrRegister.form.divDlbr.form.txaDlbrOpnn.value)) {
        		this.gfnShowMessage(this, "W000014", this.divGroupDlbrRegister.form.divDlbr.form.txaDlbrOpnn.tooltiptext, function(svcid, variant) {
        			this.divGroupDlbrRegister.form.divDlbr.form.txaDlbrOpnn.setFocus();
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSave();
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
            this.divH3.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divGroupDlbrResult.form.divH1.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divGroupDlbrResult.form.divDlbr.form.txaDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divGroupDlbrRegister.form.divH1.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnDlbrSave.addEventHandler("onclick",this.divComBtn_btnDlbrSave_onclick,this);
        };
        this.loadIncludeScript("UserRegS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
