(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserMngS02");
            this.set_titletext("사용자관리 등록화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStaticEmailList", this);
            obj._setContents("<ColumnInfo><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddrValue\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"emailAddr\">직접입력</Col><Col id=\"emailAddrValue\"/></Row><Row><Col id=\"emailAddr\">naver.com</Col><Col id=\"emailAddrValue\">naver.com</Col></Row><Row><Col id=\"emailAddr\">daum.net</Col><Col id=\"emailAddrValue\">daum.net</Col></Row><Row><Col id=\"emailAddr\">hotmail.com</Col><Col id=\"emailAddrValue\">hotmail.com</Col></Row><Row><Col id=\"emailAddr\">nate.com</Col><Col id=\"emailAddrValue\">nate.com</Col></Row><Row><Col id=\"emailAddr\">yahoo.co.kr</Col><Col id=\"emailAddrValue\">yahoo.co.kr</Col></Row><Row><Col id=\"emailAddr\">paran.com</Col><Col id=\"emailAddrValue\">paran.com</Col></Row><Row><Col id=\"emailAddr\">empas.com</Col><Col id=\"emailAddrValue\">empas.com</Col></Row><Row><Col id=\"emailAddr\">dreamwiz.com</Col><Col id=\"emailAddrValue\">dreamwiz.com</Col></Row><Row><Col id=\"emailAddr\">freechal.com</Col><Col id=\"emailAddrValue\">freechal.com</Col></Row><Row><Col id=\"emailAddr\">lycos.co.kr</Col><Col id=\"emailAddrValue\">lycos.co.kr</Col></Row><Row><Col id=\"emailAddr\">korea.com</Col><Col id=\"emailAddrValue\">korea.com</Col></Row><Row><Col id=\"emailAddr\">gmail.com</Col><Col id=\"emailAddrValue\">gmail.com</Col></Row><Row><Col id=\"emailAddr\">hanmir.com</Col><Col id=\"emailAddrValue\">hanmir.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"pswdConfirm\" type=\"STRING\" size=\"256\"/><Column id=\"rsaPassword\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"checkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult04", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrdocFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPswd", this);
            obj._setContents("<ColumnInfo><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"pswdConfirm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRSAReseult", this);
            obj._setContents("<ColumnInfo><Column id=\"RSAModulus\" type=\"STRING\" size=\"256\"/><Column id=\"RSAExponent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","0","divH1:0",null,"303","30",null,"1400",null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staUpBzentNm","783","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("7");
            obj.set_text("상위기관명");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","43","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCrno","0","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("13");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","0","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("사업체명");
            obj.set_accessibilitydescription("사업체명");
            this.divInst.addChild(obj.name, obj);

            obj = new Button("btnBzentNm","edtBzentNm:3","50","111","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("6");
            obj.set_text("사업수행자 검색");
            obj.set_tooltiptext("사업수행자 검색");
            obj.set_accessibilitylabel("사업수행자 ");
            obj.set_accessibilitydescription("팝업");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBrno","783","129","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","783","172","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("19");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","783","215","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtUpInstNm","staUpBzentNm:7","50","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_tooltiptext("상위기관명");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("22");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("우편번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("소재지");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstRegistType","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Radio("rdoInstRegistType","staInstRegistType:7","7","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            obj.set_tooltiptext("등록구분");
            obj.set_accessibilitylabel("등록구분");
            var divInst_form_rdoInstRegistType_innerdataset = new nexacro.NormalDataset("divInst_form_rdoInstRegistType_innerdataset", obj);
            divInst_form_rdoInstRegistType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">기관</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사업체</Col></Row></Rows>");
            obj.set_innerdataset(divInst_form_rdoInstRegistType_innerdataset);
            obj.set_text("사업수행자 검색");
            obj.set_value("1");
            obj.set_index("0");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("14");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("16");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","edtRdnmCd:3","222","536","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("주소");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","783","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("11");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("업체구분");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","0","86","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("9");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Radio("rdoGovInstYn","staGovInstYn:7","93","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            obj.set_tooltiptext("정부기관여부");
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("정부기관여부");
            var divInst_form_rdoGovInstYn_innerdataset = new nexacro.NormalDataset("divInst_form_rdoGovInstYn_innerdataset", obj);
            divInst_form_rdoGovInstYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(divInst_form_rdoGovInstYn_innerdataset);
            obj.set_text("여");
            obj.set_value("Y");
            obj.set_index("0");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","783","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("2");
            obj.set_text("사업체분류");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtFullCorpTelNo","staCorpTel:7","179","200","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체법인전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
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
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_tooltiptext("업체구분");
            obj.set_maxlength("100");
            obj.set_cssclass("output");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staPsnAcntUnqno","0","258","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("26");
            obj.set_text("보유계정고유번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtPsnAcntUnqno","staPsnAcntUnqno:7","265","600","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_tooltiptext("보유계정고유번호");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","0","divInst:0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderUser","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divUser","0","divH2:0",null,"302","30",null,"1400",null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnId","0","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staPswd","0","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFlnm","0","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staDeptNm","0","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("12");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:7","7","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish,symbol");
            obj.set_accessibilitylabel("아이디");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnLgnId","edtLgnId:3","7","111","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_text("중복 검색");
            obj.set_tooltiptext("중복 검색");
            obj.set_accessibilitylabel("중복 검색");
            obj.set_accessibilitydescription("중복 검색");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnDelLgnId","btnLgnId:3","7","40","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_tooltiptext("아이디 초기화");
            obj.set_accessibilitylabel("아이디 초기화");
            obj.set_accessibilitydescription("아이디 초기화");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staPswdConfirm","783","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd","staPswd:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_tooltiptext("비밀번호");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswdConfirm","staPswdConfirm:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_tooltiptext("비밀번호 확인");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호 확인");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staUserClCd","783","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("10");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","783","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이름");
            obj.set_maxlength("15");
            obj.set_accessibilitylabel("이름");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","staJbpsNm:7","136","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_tooltiptext("직위");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("직위");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staEml","783","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("28");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staHdpon","783","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("20");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFax","0","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("24");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staSmsNtiYn","0","258","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("32");
            obj.set_text("SMS 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("SMS 동의여부");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staTel","0","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new CheckBox("chkSmsNtiYn","staSmsNtiYn:7","265","430","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("33");
            obj.set_text("시스템 알림정보에 대한 SMS 메세지수신을 동의합니다.");
            obj.set_value("false");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("SMS 동의여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDdd","staTel:7","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_tooltiptype("inplace");
            obj.set_accessibilitylabel("전화지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter1","edtTelDdd:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("42");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelTlpno","edtTelDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter2","edtTelTlpno:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("43");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelPhino","edtTelDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDdd","staHdpon:7","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter1","edtHdponDdd:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("44");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponTlpno","edtHdponDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter2","edtHdponTlpno:7","179","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("45");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponPhino","edtHdponDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDdd","staFax:7","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_tooltiptype("hover");
            obj.set_accessibilitylabel("팩스지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter1","edtFaxDdd:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("46");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxTlpno","edtFaxDelemiter1:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter2","edtFaxTlpno:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("47");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxPhino","edtFaxDelemiter2:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlId","staEml:7","222","177","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일ID");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish");
            obj.set_accessibilitylabel("이메일ID");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlDelemiter","edtEmlId:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("48");
            obj.set_value("@");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("@");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","edtEmlDelemiter:4","222","140","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일주소");
            obj.set_maxlength("100");
            obj.set_inputtype("numberandenglish,dot");
            obj.set_accessibilitylabel("이메일주소");
            this.divUser.addChild(obj.name, obj);

            obj = new Combo("cboEmlAddr","edtEmlAddr:3","222","140","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsStaticEmailList");
            obj.set_codecolumn("emailAddrValue");
            obj.set_datacolumn("emailAddr");
            obj.set_tooltiptext("이메일주소 선택");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("0");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:7","136","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_tooltiptext("부서명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("부서명");
            this.divUser.addChild(obj.name, obj);

            obj = new Combo("cboUserClCd","staUserClCd:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("11");
            obj.set_tooltiptext("계정구분");
            obj.set_innerdataset("dsResult04");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("계정구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staHelp1","btnDelLgnId:7","7","487","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("49");
            obj.set_text("아이디는 8~20자리까지 입력가능합니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.set_tooltiptext("아이디는 8~20자리까지 입력가능합니다.");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divH3","-3","divUser:6",null,"60","33",null,"1400",null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderFile","0","20","342","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divFile","0","divH3:0",null,"132","30",null,"1400",null,null,null,this);
            obj.set_taborder("5");
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
            obj.set_cssclass("sta_WF_Label");
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

            obj = new Div("divComBtn","0","divFile:20",null,"32","30",null,"1400",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("목록");
            obj.set_accessibilitylabel("목록");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrSave",null,"0","75","32","btnList:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("저장");
            obj.set_accessibilitylabel("저장");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Static("stcBlankGuide","0","divComBtn:0",null,"30","30",null,"1400",null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
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

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            obj.set_type("default");
            obj.set_horizontalgap("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divUser.form.edtLgnId","value","dsUserInfo","lgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divUser.form.edtFlnm","value","dsUserInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUser.form.cboUserClCd","value","dsUserInfo","userClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divUser.form.edtDeptNm","value","dsUserInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divUser.form.edtJbpsNm","value","dsUserInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divUser.form.edtTelDdd","value","dsUserInfo","telDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divUser.form.edtTelTlpno","value","dsUserInfo","telTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divUser.form.edtTelPhino","value","dsUserInfo","telPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divUser.form.edtHdponDdd","value","dsUserInfo","hdponDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divUser.form.edtHdponTlpno","value","dsUserInfo","hdponTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divUser.form.edtHdponPhino","value","dsUserInfo","hdponPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divUser.form.edtFaxDdd","value","dsUserInfo","faxDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divUser.form.edtFaxTlpno","value","dsUserInfo","faxTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divUser.form.edtFaxPhino","value","dsUserInfo","faxPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divUser.form.edtEmlId","value","dsUserInfo","emlId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divUser.form.edtEmlAddr","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divUser.form.chkSmsNtiYn","value","dsUserInfo","smsNtiYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divInst.form.edtBzentNm","value","dsInstInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInst.form.mseBrno","value","dsInstInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInst.form.edtRprsvNm","value","dsInstInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInst.form.edtCorpTelDdd","value","dsInstInfo","corpTelDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInst.form.edtCorpTelTlpno","value","dsInstInfo","corpTelTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divInst.form.edtCorpTelPhino","value","dsInstInfo","corpTelPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divInst.form.edtRdnmCd","value","dsInstInfo","rdnmCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divInst.form.edtDtlAddr","value","dsInstInfo","dtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divInst.form.mseCrno","value","dsInstInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divInst.form.edtUpInstNm","value","dsInstInfo","upInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divInst.form.edtAddr","value","dsInstInfo","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divInst.form.cboBzentClCd","value","dsInstInfo","bzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divInst.form.rdoGovInstYn","value","dsInstInfo","govInstYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divInst.form.cboInstClsfCd","value","dsInstInfo","instClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divInst.form.cboInstDtlClsfCd","value","dsInstInfo","instDtlClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divInst.form.edtFullCorpTelNo","value","dsInstInfo","fullCorpTelNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divInst.form.edtInstClsfCdNm","value","dsInstInfo","instClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divInst.form.edtBzentClCdNm","value","dsInstInfo","bzentClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divUser.form.edtPswd","value","dsPswd","pswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUser.form.edtPswdConfirm","value","dsPswd","pswdConfirm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divInst.form.edtPsnAcntUnqno","value","dsInstInfo","psnAcntUnqno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.registerScript("UserMngS02.xfdl", function() {
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
        	trace("[UserMngS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 비밀번호 데이터셋 초기화
        	this.dsPswd.clearData();
        	this.dsPswd.insertRow(0);
        	this.dsPswd.setColumn(0, "pswd"    , ""    );
        	this.dsPswd.setColumn(0, "pswdConfirm"    , ""    );

        	// 값 초기화
        	this.dsInstInfoFile.clearData();
        	this.dsInstInfoFile.insertRow(0);

        	// RaonKSingle ( comRaonK.xfdl )
        	// [single - RaonK] single 등록/수정용
         	var objParam = { objDs:this.dsInstInfoFile								// 바인딩 데이터셋
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
        	arrParam[0] = {outDs:"dsResult01", groupId:"BZENT_CL_CD" , headflag:"S" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD"  , headflag:"S" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsResult04", groupId:"USER_CL_CD"  , headflag:"S" , useYn:"Y"};
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
        		case "callRSA" :
        			trace(this.dsRSAReseult.saveXML());
        			nexacro.getApplication().gvRSAModulus = this.dsRSAReseult.getColumn(0, "RSAModulus");
        			nexacro.getApplication().gvRSAExponent = this.dsRSAReseult.getColumn(0, "RSAExponent");
        			break;
        		case "checkLoginId" :
        			// 후처리 코드

        			// 중복아이디가 존재하지 않는다면 - 사용가능
        			if(this.dsCheckInfo.getColumn(0, "checkYn") == "Y") {
        				this.divUser.form.edtLgnId.set_readonly(true);
        				this.divUser.form.btnLgnId.set_enable(false);
        				this.divUser.form.btnDelLgnId.set_enable(true);
        				this.divUser.form.btnDelLgnId.set_visible(true);

        				this.divUser.form.edtPswd.setFocus();

        			} else {
        				this.gfnShowMessage(this, ["Alert","이미 사용중인 아이디입니다."], "", function(svcid, variant) {
        					this.divUser.form.edtLgnId.setFocus();
        				});
        			}
        			break;
        		case "createUser" :
        			// 후처리 코드
        			this.gfnShowMessage(this, ["Alert","사용자 등록이 완료되었습니다."], "", "fnMsgCallback", "msgAlertCreateUser");
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
        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());
        			trace("[getCommonCode]this.dsResult04.getRowCount():"+this.dsResult04.getRowCount());
        			break;
        		default:
        			break;
        	}
        };

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
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	switch (sPopupId)
        	{
        		case "msgAlertCreateUser" :
        			// 화면전환
        			this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        			this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(false);

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
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{

        		//사업수행자 검색 팝업
        		case "comInstPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			// 값 초기화
        			this.dsInstInfo.clearData();
        			this.dsInstInfo.insertRow(0);

        			//팝업에서 넘어온 값 설정하기
        			this.dsInstInfo.setColumn(0, "instMgno"      , objRtnValue["instMgno"]       );		// 기관관리번호
        			this.dsInstInfo.setColumn(0, "instClsfCd"    , objRtnValue["instClsfCd"]     );		// 기관분류코드
        			this.dsInstInfo.setColumn(0, "instDtlClsfCd", objRtnValue["instDtlClsfCd"] );		// 기관세부분류코드
        			this.dsInstInfo.setColumn(0, "govInstYn"     , objRtnValue["govInstYn"]      );		// 정부기관여부
        			this.dsInstInfo.setColumn(0, "bzentNm"       , objRtnValue["bzentNm"]        );		// 사업체명
        			this.dsInstInfo.setColumn(0, "bzentClCd"     , objRtnValue["bzentClCd"]      );		// 사업체구분코드
        			this.dsInstInfo.setColumn(0, "crno"          , objRtnValue["crno"]           );		// 법인등록번호
        			this.dsInstInfo.setColumn(0, "brno"          , objRtnValue["brno"]           );		// 사업자등록번호
        			this.dsInstInfo.setColumn(0, "rprsvNm"       , objRtnValue["rprsvNm"]        );		// 대표자명
        			this.dsInstInfo.setColumn(0, "corpTelDdd"    , objRtnValue["corpTelDdd"]     );		// 법인전화지역번호
        			this.dsInstInfo.setColumn(0, "corpTelTlpno"  , objRtnValue["corpTelTlpno"]   );		// 법인국번호
        			this.dsInstInfo.setColumn(0, "corpTelPhino"  , objRtnValue["corpTelPhino"]   );		// 법인전화개별번호
        			this.dsInstInfo.setColumn(0, "rdnmCd"        , objRtnValue["rdnmCd"]         );		// 도로명코드
        			this.dsInstInfo.setColumn(0, "addr"          , objRtnValue["addr"]           );		// 주소
        			this.dsInstInfo.setColumn(0, "dtlAddr"       , objRtnValue["dtlAddr"]        );		// 상세주소
        			this.dsInstInfo.setColumn(0, "upInstMgno"    , objRtnValue["upInstMgno"]     );		// 상위기관관리번호
        			this.dsInstInfo.setColumn(0, "upInstNm"      , objRtnValue["upInstNm"]       );		// 상위기관명

        			if(this.fvApp.User.roleIdMgno == "RL00000001") {
        				this.dsInstInfo.setColumn(0, "psnAcntUnqno"  , objRtnValue["psnAcntUnqno"]   );		// 보유계정고유번호
        			}

        			var targetUserClCd = objRtnValue["targetUserClCd"];									// 회원가입 가능한 사용자구분코드 (가입가능사용자구분코드-사업체전용)
        			this.dsInstInfo.setColumn(0, "fullCorpTelNo"      , objRtnValue["fullCorpTelNo"]       );		// 전체법인전화번호

        			for (var i = this.dsResult02.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult02.getColumn(i, "cdMgno") == objRtnValue["instClsfCd"]) {
        					this.dsInstInfo.setColumn(0, "instClsfCdNm"      , this.dsResult02.getColumn(i, "cdKornNm")       );		// 사업체분류명
        				}
        			}

        			for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        				if ( this.dsResult01.getColumn(i, "cdMgno") == objRtnValue["bzentClCd"]) {
        					this.dsInstInfo.setColumn(0, "bzentClCdNm"      , this.dsResult01.getColumn(i, "cdKornNm")       );		// 사업체구분명
        				}
        			}

        			// [single - RaonK] 파일 조회
        			var brdocFlmno   = this.gfnIsNull(objRtnValue["brdocFlmno"])   ? "" : objRtnValue["brdocFlmno"];

        			// 값 초기화
        			this.dsInstInfoFile.clearData();
        			this.dsInstInfoFile.insertRow(0);
        			this.dsInstInfoFile.setColumn(0, "brdocFlmno", brdocFlmno);

        			// [single - RaonK] 파일식별자가 없으면 파일 조회 하지 않기
        			if(!this.gfnIsNull(brdocFlmno)) {
        				trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        				this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기
        			}

        			// 게정구분 표시하기
        			if(this.divInst.form.rdoInstRegistType.value == 0) {				// 기관
        				this.divUser.form.cboUserClCd.set_readonly(false);
        			} else if(this.divInst.form.rdoInstRegistType.value == 2) {			// 사업체 - 읽기전용
        				this.divUser.form.cboUserClCd.set_value(targetUserClCd);
        				this.divUser.form.cboUserClCd.set_readonly(true);				// 서버에서 판단한 권한으로 신청할 수 있도록 비활성화
        			}

        			trace("[objRtnValue][" + JSON.stringify(objRtnValue)+"]");

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        /**
         * @description 아아디 중복체크 하기
        */
        this.fnCallCheckLoginId = function(sLoginId)
        {
        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.dsCheckInfo.setColumn(0, "lgnId", sLoginId);

        	var objArgs = {};
         	objArgs.svcId 			= "checkLoginId";
         	objArgs.url 			= "/common/main/user/checkLoginId.irs";
         	objArgs.inds      		= "dsCheckInfo=dsCheckInfo";
         	objArgs.outds     		= "dsCheckInfo=dsCheckInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 저장 버튼 클릭 - 사용자정보 생성하기
        */
        this.fnCallCreateUser = function()
        {
        	// 전송전 비밀번호원문 제거
        	this.dsUserInfo.setColumn(0, "pswd"    , ""    );
        	this.dsUserInfo.setColumn(0, "pswdConfirm"    , ""    );

        	// 공통Transaction 호출
        	var objArgs = {};
         	objArgs.svcId 			= "createUser";
         	objArgs.url 			= "/adm/user/userMng/insertUser.irs";
         	objArgs.inds      		= "dsInstInfo=dsInstInfo dsUserInfo=dsUserInfo";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @desc RSA 호출
         * @param N/A
         * @return N/A
        */
        this.fnCallRSA = function()
        {
        	//RSA 호출
        	var objArgs = {};
        		objArgs.svcId    = "callRSA";
        		objArgs.url 	 = "/common/rsa.irs";
        		objArgs.inds     = "";
        		objArgs.outds    = "dsRSAReseult=rsa";
        		objArgs.args      = "";
        		objArgs.callback  = "fnCallback";

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
        this.fnChangeDiv = function()
        {
        	trace("[UserMngS02]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	this.fnSetDivInst();			//사업체정보 영역 상태 설정

        	// RSA
        	this.fnCallRSA();

        	// 값 초기화
        	this.dsUserInfo.clearData();
        	this.dsUserInfo.insertRow(0);
        	this.dsUserInfo.setColumn(0, "smsNtiYn"    , "N"    );

        	// 값 초기화
        	this.dsInstInfoFile.clearData();
        	this.dsInstInfoFile.insertRow(0);

        	// 첫번째꺼 선택하기
        	this.divUser.form.cboUserClCd.set_index(0);
        };

        /**
         * @description 등록구분 라디오 버튼 선택 - 기관/사업체 텍스트 표시
        */
        this.fnSetDivInstText = function()
        {
        	if(this.divInst.form.rdoInstRegistType.value == 0) {				// 기관
        		this.divH1.form.staHeaderInst.set_text("기관정보");
        		this.divInst.form.btnBzentNm.set_text("기관 검색");
        		this.divInst.form.staBzentNm.set_text("기관명");
        		this.divInst.form.staInstClsfCd.set_text("기관분류");

        		this.divInst.form.edtBzentNm.set_tooltiptext("기관명");
        		this.divInst.form.edtInstClsfCdNm.set_tooltiptext("기관분류");

        		this.divInst.form.edtBzentNm.set_accessibilitylabel("기관명");
        		this.divInst.form.edtInstClsfCdNm.set_accessibilitylabel("기관분류");

        	} else if(this.divInst.form.rdoInstRegistType.value == 2) {		// 사업체
        		this.divH1.form.staHeaderInst.set_text("사업체정보");
        		this.divInst.form.btnBzentNm.set_text("사업수행자 검색");
        		this.divInst.form.staBzentNm.set_text("사업체명");
        		this.divInst.form.staInstClsfCd.set_text("사업체분류");

        		this.divInst.form.edtBzentNm.set_tooltiptext("사업체명");
        		this.divInst.form.edtInstClsfCdNm.set_tooltiptext("사업체분류");


        		this.divInst.form.edtBzentNm.set_accessibilitylabel("사업체명");
        		this.divInst.form.edtInstClsfCdNm.set_accessibilitylabel("사업체분류");
        	}

        	/* 계정구분코드 설정하기 */
        	this.fnSetCode();
        };

        /* 계정구분코드 설정하기 */
        this.fnSetCode = function()
        {
        	this.dsResult04.set_enableevent(false);
        	// 게정구분 표시하기
        	if(this.divInst.form.rdoInstRegistType.value == 0) {				// 기관
        		// 관장기관, 위탁기관, 외교부, 기타부
        		this.divUser.form.cboUserClCd.set_readonly(false);
        		this.dsResult04.filter("cdMgno == '' || cdMgno == 'UCC0002' || cdMgno == 'UCC0003' || cdMgno == 'UCC0006' || cdMgno == 'UCC0007'");

        		// 첫번째꺼 선택하기
        		this.divUser.form.cboUserClCd.set_index(0);
        	} else if(this.divInst.form.rdoInstRegistType.value == 2) {			// 사업체
        		// 계정관리인, 계정대표자
        		this.dsResult04.filter("cdMgno == '' || cdMgno == 'UCC0004' || cdMgno == 'UCC0005'");
        		this.divUser.form.cboUserClCd.set_readonly(true);				// 서버에서 판단한 권한으로 신청할 수 있도록 비활성화

        		// 첫번째꺼 선택하기
        		this.divUser.form.cboUserClCd.set_index(0);
        	}
        	this.dsResult04.set_enableevent(true);
        };

        /**
         * @description 사업체정보 영역 필드 상태 설정 - 등록구분 라디오버튼, 초기로딩시
        */
        this.fnSetDivInst = function()
        {

        	// 비밀번호 데이터셋 초기화
        	this.dsPswd.clearData();
        	this.dsPswd.insertRow(0);
        	this.dsPswd.setColumn(0, "pswd"    , ""    );
        	this.dsPswd.setColumn(0, "pswdConfirm"    , ""    );

        	this.divUser.form.edtLgnId.set_readonly(false);
        	this.divUser.form.btnLgnId.set_enable(true);
        	this.divUser.form.btnDelLgnId.set_enable(false);
        	this.divUser.form.btnDelLgnId.set_visible(false);

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();
        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	// 값 초기화
        	this.dsInstInfo.clearData();
        	this.dsInstInfo.insertRow(0);

        	// 값 초기화
        	this.dsInstInfoFile.clearData();
        	this.dsInstInfoFile.insertRow(0);
        	this.dsBrdocFlmnoFile.clearData();
        	this.divFile.form.divRaonKSingle.form.fnResetUpload();		// [single - RaonK] 초기화

        	// 첫번째꺼 선택하기
        	this.divInst.form.rdoGovInstYn.set_value("N");

        	// 기관/사업체 텍스트 표시
        	this.fnSetDivInstText();
        };

        /**
         * @description 중복체크 초기화
        */
        this.fnClearDsCheckInfo = function() {
        	this.dsCheckInfo.clearData();
        	this.dsCheckInfo.insertRow(0);
        	this.dsCheckInfo.setColumn(0, "checkYn", "N");
        }
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
        	this.getOwnerFrame().form.divWork.form.divDetail02.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	var objArgs = {};
        	objArgs.isReLoad	= "N";
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv(objArgs);
        };

        /**
         * @description  저장 버튼 클릭 - 사용자정보 생성하기
        */
        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {
        	// 사업체정보
        	if(this.gfnIsNull(this.divInst.form.edtBzentNm.value)) {
        		if(this.divInst.form.rdoInstRegistType.value == 0) {				// 기관
        			this.gfnShowMessage(this, ["Alert","기관을 검색하세요."], "", function(svcid, variant) {
        				this.divInst.form.btnBzentNm.setFocus();
        			});
        		} else if(this.divInst.form.rdoInstRegistType.value == 2) {		// 사업체
        			this.gfnShowMessage(this, ["Alert","사업수행자를 검색하세요."], "", function(svcid, variant) {
        				this.divInst.form.btnBzentNm.setFocus();
        			});
        		}
        		return false;
        	}

        	// 아이디
        	if(this.gfnIsNull(this.divUser.form.edtLgnId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtLgnId.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 중복체크
        	if(this.dsCheckInfo.getColumn(0, "checkYn") == "N") {
        		this.gfnShowMessage(this, "W000002", "", function(svcid, variant) {
        			this.divUser.form.btnLgnId.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호
        	if(this.gfnIsNull(this.divUser.form.edtPswd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtPswd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtPswd.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호 확인
        	if(this.gfnIsNull(this.divUser.form.edtPswdConfirm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtPswdConfirm.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtPswdConfirm.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호 비교
        	if(this.divUser.form.edtPswd.value != this.divUser.form.edtPswdConfirm.value) {
        		this.gfnShowMessage(this, ["Alert","비밀번호가 일치하지 않습니다."], "", function(svcid, variant) {
        			this.divUser.form.edtPswdConfirm.setFocus();
        		});
        		return false;
        	}

        	// PW RSA 셋팅
        	this.dsUserInfo.setColumn(0,"rsaPassword", "");					// 값 초기화
        	var encryptValue = this.gfnRSAEncrypt(this.divUser.form.edtPswd.value);
        	if(!encryptValue) return false;
        	this.dsUserInfo.setColumn(0,"rsaPassword", encryptValue);

        	// 이름
        	if(this.gfnIsNull(this.divUser.form.edtFlnm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtFlnm.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtFlnm.setFocus();
        		});
        		return false;
        	}

        	// 계정구분
        	if(this.gfnIsNull(this.divUser.form.cboUserClCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.cboUserClCd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.cboUserClCd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰지역번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponDdd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponDdd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponDdd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰국번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponTlpno.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponTlpno.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponTlpno.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰개별번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponPhino.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponPhino.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponPhino.setFocus();
        		});
        		return false;
        	}

        	// 이메일아이디
        	if(this.gfnIsNull(this.divUser.form.edtEmlId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtEmlId.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtEmlId.setFocus();
        		});
        		return false;
        	}

        	// 이메일주소
        	if(this.gfnIsNull(this.divUser.form.edtEmlAddr.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtEmlAddr.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtEmlAddr.setFocus();
        		});
        		return false;
        	}

        	// SMS 동의여부
        	if(this.divUser.form.chkSmsNtiYn.value == "N") {
        		this.gfnShowMessage(this, "W000013", this.divUser.form.chkSmsNtiYn.tooltiptext, function(svcid, variant) {
        			this.divUser.form.chkSmsNtiYn.setFocus();
        		});
        		return false;
        	}

        	/* #################### validation END #################### */

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallCreateUser();
        		}
        	});
        };

        /**
         * @description 사업수행자 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divInst_btnBzentNm_onclick = function(obj,e)
        {
        	var sPopupId	= "comInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:this.divInst.form.rdoInstRegistType.value};
        	var oOption		= {showtitlebar:false,titletext:"사업수행자 검색"};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 중복 검색 클릭 - 아이디 중복 체크하기
        */
        this.divUser_btnLgnId_onclick = function(obj,e)
        {
        	// 아이디 미입력
        	if(this.gfnIsNull(this.divUser.form.edtLgnId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtLgnId.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 아이디 길이체크
        	if(this.divUser.form.edtLgnId.value.length < 8) {
        		this.gfnShowMessage(this, ["Alert","아이디는 8~20자리까지 입력가능합니다."], "", function(svcid, variant) {
        			this.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 아이디 중복체크 하기
        	this.fnCallCheckLoginId(this.divUser.form.edtLgnId.value);
        };

        /**
         * @description 이메일주소 콤복박스 아이템 선택 - 직접입력, 유효주소 세팅해주기
        */
        this.divUser_cboEmlAddr_onitemchanged = function(obj,e)
        {
        	// 직접입력이면 [이메일주소]입력박스 열어주고 포커스주기
        	if(this.gfnIsNull(obj.value)) {
        		this.divUser.form.edtEmlAddr.set_readonly(false);
        		this.divUser.form.edtEmlAddr.set_value("");
        		this.divUser.form.edtEmlAddr.setFocus();
        	} else {
        		this.divUser.form.edtEmlAddr.set_readonly(true);
        		this.divUser.form.edtEmlAddr.set_value(obj.value);
        	}
        };

        /**
         * @description sms수신동의 체크박스 선택 - 휴대폰번호가 입력 되었는지 체크하기
        */
        this.divUser_chkSmsNtiYn_onchanged = function(obj,e)
        {
        	// 휴대폰지역번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponDdd.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponDdd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponDdd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰국번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponTlpno.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponTlpno.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponTlpno.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰개별번호
        	if(this.gfnIsNull(this.divUser.form.edtHdponPhino.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtHdponPhino.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtHdponPhino.setFocus();
        		});
        		return false;
        	}
        };

        /**
         * @description 중복 검색 우측 아이디 제거 클릭 - 아이디 다시 입력하기
        */
        this.divContent_divUser_btnDelLgnId_onclick = function(obj,e)
        {
        	this.divUser.form.edtLgnId.set_readonly(false);
        	this.divUser.form.btnLgnId.set_enable(true);
        	this.divUser.form.btnDelLgnId.set_enable(false);
        	this.divUser.form.btnDelLgnId.set_visible(false);

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.divUser.form.edtLgnId.setFocus();
        };

        /**
         * @description 사업체정보 > 등록구분 라디오버튼 선택
        */
        this.divInst_rdoInstRegistType_onitemchanged = function(obj,e)
        {
        	this.fnSetDivInst();			//사업체정보 영역 상태 설정

        	// 기관/사업체 텍스트 표시
        	this.fnSetDivInstText();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divInst.form.staRprsvNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staRdnmCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.btnBzentNm.addEventHandler("onclick",this.divInst_btnBzentNm_onclick,this);
            this.divInst.form.staDtlAddr.addEventHandler("onclick",this.divContent_divInst_sta12_00_00_00_onclick,this);
            this.divInst.form.staLine1.addEventHandler("onclick",this.divContent_divInst_staLine1_onclick,this);
            this.divInst.form.staInstRegistType.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.rdoInstRegistType.addEventHandler("onitemchanged",this.divInst_rdoInstRegistType_onitemchanged,this);
            this.divInst.form.staGovInstYn.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.divInst.form.staPsnAcntUnqno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staFlnm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staDeptNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.btnLgnId.addEventHandler("onclick",this.divUser_btnLgnId_onclick,this);
            this.divUser.form.btnDelLgnId.addEventHandler("onclick",this.divContent_divUser_btnDelLgnId_onclick,this);
            this.divUser.form.staFax.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staSmsNtiYn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.staTel.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divUser.form.chkSmsNtiYn.addEventHandler("onchanged",this.divUser_chkSmsNtiYn_onchanged,this);
            this.divUser.form.edtTelDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtTelDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtHdponDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtHdponDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtFaxDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtFaxDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtEmlDelemiter.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.cboEmlAddr.addEventHandler("onitemchanged",this.divUser_cboEmlAddr_onitemchanged,this);
            this.divH3.form.staHeaderFile.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnDlbrSave.addEventHandler("onclick",this.divComBtn_btnDlbrSave_onclick,this);
        };
        this.loadIncludeScript("UserMngS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
