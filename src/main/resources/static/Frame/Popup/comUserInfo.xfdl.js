(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comUserInfo");
            this.set_titletext("Top > 정보수정 > 사용자 정보수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,536);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStaticEmailList", this);
            obj._setContents("<ColumnInfo><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddrValue\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"emailAddr\">직접입력</Col><Col id=\"emailAddrValue\"/></Row><Row><Col id=\"emailAddr\">naver.com</Col><Col id=\"emailAddrValue\">naver.com</Col></Row><Row><Col id=\"emailAddr\">daum.net</Col><Col id=\"emailAddrValue\">daum.net</Col></Row><Row><Col id=\"emailAddr\">hotmail.com</Col><Col id=\"emailAddrValue\">hotmail.com</Col></Row><Row><Col id=\"emailAddr\">nate.com</Col><Col id=\"emailAddrValue\">nate.com</Col></Row><Row><Col id=\"emailAddr\">yahoo.co.kr</Col><Col id=\"emailAddrValue\">yahoo.co.kr</Col></Row><Row><Col id=\"emailAddr\">paran.com</Col><Col id=\"emailAddrValue\">paran.com</Col></Row><Row><Col id=\"emailAddr\">empas.com</Col><Col id=\"emailAddrValue\">empas.com</Col></Row><Row><Col id=\"emailAddr\">dreamwiz.com</Col><Col id=\"emailAddrValue\">dreamwiz.com</Col></Row><Row><Col id=\"emailAddr\">freechal.com</Col><Col id=\"emailAddrValue\">freechal.com</Col></Row><Row><Col id=\"emailAddr\">lycos.co.kr</Col><Col id=\"emailAddrValue\">lycos.co.kr</Col></Row><Row><Col id=\"emailAddr\">korea.com</Col><Col id=\"emailAddrValue\">korea.com</Col></Row><Row><Col id=\"emailAddr\">gmail.com</Col><Col id=\"emailAddrValue\">gmail.com</Col></Row><Row><Col id=\"emailAddr\">hanmir.com</Col><Col id=\"emailAddrValue\">hanmir.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPswd", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPswd\" type=\"STRING\" size=\"256\"/><Column id=\"pswd\" type=\"STRING\" size=\"256\"/><Column id=\"pswdConfirm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"rsaPassword\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rsaCurrentPswd\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRSAReseult", this);
            obj._setContents("<ColumnInfo><Column id=\"RSAModulus\" type=\"STRING\" size=\"256\"/><Column id=\"RSAExponent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","133","0",null,"59","133",null,"1200",null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("기관정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사용자정보");
            this.divH1.addChild(obj.name, obj);

            obj = new Button("btnUserDtlInfo",null,"20","130","30","8",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("1");
            obj.set_text("사용자 상세정보");
            obj.set_cssclass("btn_WF_Confirm");
            obj.set_tooltiptext("사용자 상세정보");
            obj.set_visible("false");
            obj.set_accessibilitylabel("사용자 상세정보");
            obj.set_accessibilitydescription("팝업");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","133","divH1:0",null,"44","133",null,"1200",null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","33.38%","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("2");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","7",null,"30","staRprsvNm:7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("6");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_tooltiptext("기관명");
            obj.set_accessibilitylabel("기관명");
            obj.set_text("-");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staUpBzentNm","66.77%","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_text("상위기관명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","7",null,"30","staUpBzentNm:7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("3");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("-");
            obj.set_tooltiptext("대표자명");
            obj.set_accessibilitylabel("대표자명");
            obj.set_text("-");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_text("기관명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtUpBzentNm","staUpBzentNm:7","6",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("-");
            obj.set_tooltiptext("상위기관명");
            obj.set_accessibilitylabel("상위기관명");
            obj.set_text("-");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","133","divInst:0",null,"59","133",null,"1200",null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderUser","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사용자정보");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divUser","133","divH2:0",null,"302","133",null,"1200",null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnId","0","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("아이디");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staCurrentPswd","0","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("현재 비밀번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staPswd","0","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("새 비밀번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staPswdConfirm","0","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("8");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("새 비밀번호 확인");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staDeptNm","0","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("10");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("부서명");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","650","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("12");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("직위");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:7","179","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("11");
            obj.set_tooltiptext("부서명");
            obj.set_accessibilitylabel("부서명");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staTel","0","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("14");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("전화번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFax","0","258","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("22");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staEml","650","258","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("26");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staFlnm","650","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사용자명");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:7","7","486","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_tooltiptext("아이디");
            obj.set_accessibilitylabel("아이디");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:7","7","486","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_tooltiptext("사용자명");
            obj.set_accessibilitylabel("사용자명");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCurrentPswd","staCurrentPswd:7","50","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_tooltiptext("현재 비밀번호");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("현재 비밀번호");
            obj.set_tooltiptype("default");
            obj.set_inputtype("symbol,numberandenglish");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd","staPswd:7","93","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_tooltiptext("새 비밀번호");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("새 비밀번호");
            obj.set_tooltiptype("default");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswdConfirm","staPswdConfirm:7","136","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            obj.set_tooltiptext("새 비밀번호 확인");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("새 비밀번호 확인");
            obj.set_tooltiptype("default");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","staJbpsNm:7","179","236","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("직위");
            obj.set_accessibilitylabel("직위");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staHdpon","650","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("18");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDdd","staTel:7","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter1","edtTelDdd:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("38");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelTlpno","edtTelDelemiter1:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter2","edtTelTlpno:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("39");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelPhino","edtTelDelemiter2:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDdd","staHdpon:7","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter1","edtHdponDdd:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("40");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponTlpno","edtHdponDelemiter1:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter2","edtHdponTlpno:7","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("41");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponPhino","edtHdponDelemiter2:0","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDdd","staFax:7","265","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter1","edtFaxDdd:7","265","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("42");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxTlpno","edtFaxDelemiter1:0","265","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter2","edtFaxTlpno:7","265","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("43");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxPhino","edtFaxDelemiter2:0","265","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlId","staEml:7","265","177","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일ID");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish");
            obj.set_accessibilitylabel("이메일ID");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlDelemiter","edtEmlId:7","265","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("44");
            obj.set_value("@");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("@");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","edtEmlDelemiter:4","265","140","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("28");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일주소");
            obj.set_maxlength("100");
            obj.set_inputtype("numberandenglish,dot");
            obj.set_accessibilitylabel("이메일주소");
            this.divUser.addChild(obj.name, obj);

            obj = new Combo("cboEmlAddr","edtEmlAddr:3","265","140","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsStaticEmailList");
            obj.set_codecolumn("emailAddrValue");
            obj.set_datacolumn("emailAddr");
            obj.set_tooltiptext("이메일주소 선택");
            obj.set_accessibilitylabel("이메일주소 선택");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("0");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divBtn","133","divUser:20",null,"50","133",null,"1200",null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","574","0","75","32",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_tooltiptext("저장");
            obj.set_accessibilitylabel("저장");
            obj.set_visible("true");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3","0","75","32",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_tooltiptext("취소");
            obj.set_accessibilitylabel("취소");
            this.divBtn.addChild(obj.name, obj);
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

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,536,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","divUser.form.edtCurrentPswd","value","dsPswd","currentPswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divUser.form.edtPswd","value","dsPswd","pswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divUser.form.edtPswdConfirm","value","dsPswd","pswdConfirm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divInst.form.edtBzentNm","value","dsInstInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divInst.form.edtRprsvNm","value","dsInstInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInst.form.edtUpBzentNm","value","dsInstInfo","upInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUser.form.edtLgnId","value","dsSaveInfo","lgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUser.form.edtFlnm","value","dsSaveInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divUser.form.edtDeptNm","value","dsSaveInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divUser.form.edtJbpsNm","value","dsSaveInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divUser.form.edtTelDdd","value","dsSaveInfo","telDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divUser.form.edtTelTlpno","value","dsSaveInfo","telTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divUser.form.edtTelPhino","value","dsSaveInfo","telPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divUser.form.edtHdponDdd","value","dsSaveInfo","hdponDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divUser.form.edtHdponTlpno","value","dsSaveInfo","hdponTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divUser.form.edtHdponPhino","value","dsSaveInfo","hdponPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divUser.form.edtFaxDdd","value","dsSaveInfo","faxDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divUser.form.edtFaxTlpno","value","dsSaveInfo","faxTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divUser.form.edtFaxPhino","value","dsSaveInfo","faxPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divUser.form.edtEmlId","value","dsSaveInfo","emlId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divUser.form.edtEmlAddr","value","dsSaveInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comUserInfo.xfdl","");
        this.registerScript("comUserInfo.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comUserInfo Form
        * FILE NAME     : comUserInfo.xfdl
        * DESCRIPTION   : Top > 정보수정 > 사용자 정보수정
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.01    Justin	     최초생성
        ***********************************************************************************/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.highlight_bg_color = "#f1ffdf";

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
        	// RSA
        	this.fnCallRSA();

        	// 비밀번호 데이터셋 초기화
        	this.dsPswd.clearData();
        	this.dsPswd.insertRow(0);
        	this.dsPswd.setColumn(0, "currentPswd"    , ""    );
        	this.dsPswd.setColumn(0, "pswd"    , ""    );
        	this.dsPswd.setColumn(0, "pswdConfirm"    , ""    );

        	// 값 초기화
        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.insertRow(0);

        	// 상세조회 호출 - 사업체정보, 사용자정보
        	this.fnCallDtlInfo();
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
        		case "selectMyUserInfo" :
        			this.setEffectGrid();

        			// 후처리 코드
        			/* #################### 가입유형별 텍스트설정 콤보박스 초기설정 START #################### */
        			var instClsfCd = this.dsInstInfo.getColumn(0, "instClsfCd");
        			if(instClsfCd != 'ICC0005') {				// 관장(위탁)기관
        				this.divH1.form.staHeaderInst.set_text("기관정보");
        				this.divInst.form.staBzentNm.set_text("기관명");

        				this.divInst.form.edtBzentNm.set_tooltiptext("기관명");

        			} else {		// 사업수행자
        				this.divH1.form.staHeaderInst.set_text("사업체정보");
        				this.divInst.form.staBzentNm.set_text("사업체명");

        				this.divInst.form.edtBzentNm.set_tooltiptext("사업체명");
        			}
        			/* #################### 가입유형별 텍스트설정 초기설정 END #################### */

        			// 미승인상태 사용자는 정보수정 불가 - 관리자의 승인 이후만 변경 가능
        			var acntSttsClCd = this.dsSaveInfo.getColumn(0, "acntSttsClCd");

        			var lBtnSave = 574;
        			var wBtnSave = 75;
        			var wBtnPadding = 3;
        			var lBtnCancel = lBtnSave + (wBtnSave + wBtnPadding)/2;

        			if(['ASC0002', 'ASC0003', 'ASC0004'].includes(acntSttsClCd)) {			// 미승인상태 외 - 저장버튼 보이기
        				this.divBtn.form.btnSave.set_left(lBtnSave);								// 취소버튼 가운데로 위치하도록 조정하기
        				this.divBtn.form.btnSave.set_width(wBtnSave);
        				this.divBtn.form.btnCancel.set_left(lBtnSave + wBtnSave + wBtnPadding);

        				this.divBtn.form.btnCancel.set_tooltiptext("취소");
        				this.divBtn.form.btnCancel.set_text("취소");
        				this.divBtn.form.btnCancel.set_accessibilitylabel("취소");

        			} else if(acntSttsClCd == 'ASC0001'){									// 미승인 - 저장버튼 숨기기
        				this.divBtn.form.btnSave.set_width(0);
        				this.divBtn.form.btnCancel.set_left(lBtnCancel);

        				this.divBtn.form.btnCancel.set_tooltiptext("닫기");
        				this.divBtn.form.btnCancel.set_text("닫기");
        				this.divBtn.form.btnCancel.set_accessibilitylabel("닫기");

        				this.gfnShowMessage(this, ["Alert","미승인 사용자는 정보수정이 제한됩니다.\n등록관리 메뉴에서 승인여부를 확인하세요."], "");
        			}

        			// 비밀번호 데이터셋 초기화
        			this.dsPswd.clearData();
        			this.dsPswd.insertRow(0);
        			this.dsPswd.setColumn(0, "currentPswd"    , ""    );
        			this.dsPswd.setColumn(0, "pswd"    , ""    );
        			this.dsPswd.setColumn(0, "pswdConfirm"    , ""    );

        			break;

        		case "updateMyUserInfo" :
        			var result = this.dsResult.getColumn(0, "result");

        			if(result == "Y") {
        				// 후처리 코드
        				this.gfnShowMessage(this, ["Alert","사용자정보 수정이 완료되었습니다."], "", function(svcid, variant) {
        					// 상세조회 호출 - 사업체정보, 사용자정보
        					this.fnCallDtlInfo();
        				});
        				break;
        			} else {
        				// 후처리 코드
        				this.gfnShowMessage(this, ["Alert","비밀번호가 일치하지 않습니다."], "", function(svcid, variant) {
        					// 상세조회 호출 - 사업체정보, 사용자정보
        					this.fnCallDtlInfo();
        				});
        				break;
        			}

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
         	objArgs.svcId 			= "selectMyUserInfo";
         	objArgs.url 			= "/common/main/user/selectMyUserInfo.irs";
         	objArgs.inds      		= "";
         	objArgs.outds     		= "dsInstInfo=dsInstInfo dsSaveInfo=dsSaveInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /**
         * @description 저장 버튼 클릭 - 사용자정보 정보수정하기
        */
        this.fnCallUpdateUser = function()
        {
        	var currentPswd = this.dsPswd.getColumn(0, "currentPswd");

        	// PW RSA 셋팅
        	this.dsSaveInfo.setColumn(0, "rsaCurrentPswd", "");					// 값 초기화
        	var encryptValue = this.gfnRSAEncrypt(currentPswd);
        	if(!encryptValue) return false;
        	this.dsSaveInfo.setColumn(0, "rsaCurrentPswd", encryptValue);			// 현재 비밀번호

        	// 공통Transaction 호출
        	var objArgs = {};
         	objArgs.svcId 			= "updateMyUserInfo";
         	objArgs.url 			= "/common/main/user/updateMyUserInfo.irs";
         	objArgs.inds      		= "dsInstInfo=dsInstInfo dsSaveInfo=dsSaveInfo";
         	objArgs.outds     		= "dsResult=dsResult";
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


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 취소 버튼 클릭
        */
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	// 팝업 닫기
        	var strRtn = this.gfnSetPopupReturn({pvRtnValue:"OK"});
        	this.gfnPopupClose(this, strRtn);
        };

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
         * @description 사용자정보 값 변경시
        */
        this.dsSaveInfo_oncolumnchanged = function(obj,e)
        {
        	// 변경항목 표시 - 그리드
        	this.setEffectGrid();
        };


        /**
         * @description 변경항목 표시 - 업체정보
        */
        this.setEffectGrid = function()
        {
        	this.dsSaveInfo.set_enableevent(false);

        	// 값이 변경되었다면 효과주기 - 헤더
        	this.divUser.form.staDeptNm.set_background((this.dsSaveInfo.getColumn(0, "deptNm") != this.dsSaveInfo.getOrgColumn(0, "deptNm")) ? this.highlight_bg_color : "");
        	this.divUser.form.staJbpsNm.set_background((this.dsSaveInfo.getColumn(0, "jbpsNm") != this.dsSaveInfo.getOrgColumn(0, "jbpsNm")) ? this.highlight_bg_color : "");

        	if((this.dsSaveInfo.getColumn(0, "telDdd")   != this.dsSaveInfo.getOrgColumn(0, "telDdd")  )
        		|| (this.dsSaveInfo.getColumn(0, "telTlpno") != this.dsSaveInfo.getOrgColumn(0, "telTlpno"))
        		|| (this.dsSaveInfo.getColumn(0, "telPhino") != this.dsSaveInfo.getOrgColumn(0, "telPhino"))
        	) {
        		this.divUser.form.staTel.set_background(this.highlight_bg_color);
        	} else {
        		this.divUser.form.staTel.set_background("");
        	}

        	if((this.dsSaveInfo.getColumn(0, "hdponDdd")   != this.dsSaveInfo.getOrgColumn(0, "hdponDdd")  )
        		|| (this.dsSaveInfo.getColumn(0, "hdponTlpno") != this.dsSaveInfo.getOrgColumn(0, "hdponTlpno"))
        		|| (this.dsSaveInfo.getColumn(0, "hdponPhino") != this.dsSaveInfo.getOrgColumn(0, "hdponPhino"))
        	) {
        		this.divUser.form.staHdpon.set_background(this.highlight_bg_color);
        	} else {
        		this.divUser.form.staHdpon.set_background("");
        	}

        	if((this.dsSaveInfo.getColumn(0, "faxDdd")   != this.dsSaveInfo.getOrgColumn(0, "faxDdd")  )
        		|| (this.dsSaveInfo.getColumn(0, "faxTlpno") != this.dsSaveInfo.getOrgColumn(0, "faxTlpno"))
        		|| (this.dsSaveInfo.getColumn(0, "faxPhino") != this.dsSaveInfo.getOrgColumn(0, "faxPhino"))
        	) {
        		this.divUser.form.staFax.set_background(this.highlight_bg_color);
        	} else {
        		this.divUser.form.staFax.set_background("");
        	}

        	if((this.dsSaveInfo.getColumn(0, "emlId")   != this.dsSaveInfo.getOrgColumn(0, "emlId")  )
        		|| (this.dsSaveInfo.getColumn(0, "emlAddr") != this.dsSaveInfo.getOrgColumn(0, "emlAddr"))
        	) {
        		this.divUser.form.staEml.set_background(this.highlight_bg_color);
        	} else {
        		this.divUser.form.staEml.set_background("");
        	}

        	// 값이 변경되었다면 효과주기 - 필드
        	this.divUser.form.edtDeptNm.set_background(    (this.dsSaveInfo.getColumn(0, "deptNm")     != this.dsSaveInfo.getOrgColumn(0, "deptNm")    ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtJbpsNm.set_background(    (this.dsSaveInfo.getColumn(0, "jbpsNm")     != this.dsSaveInfo.getOrgColumn(0, "jbpsNm")    ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtTelDdd.set_background(    (this.dsSaveInfo.getColumn(0, "telDdd")     != this.dsSaveInfo.getOrgColumn(0, "telDdd")    ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtTelTlpno.set_background(  (this.dsSaveInfo.getColumn(0, "telTlpno")   != this.dsSaveInfo.getOrgColumn(0, "telTlpno")  ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtTelPhino.set_background(  (this.dsSaveInfo.getColumn(0, "telPhino")   != this.dsSaveInfo.getOrgColumn(0, "telPhino")  ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtHdponDdd.set_background(  (this.dsSaveInfo.getColumn(0, "hdponDdd")   != this.dsSaveInfo.getOrgColumn(0, "hdponDdd")  ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtHdponTlpno.set_background((this.dsSaveInfo.getColumn(0, "hdponTlpno") != this.dsSaveInfo.getOrgColumn(0, "hdponTlpno")) ? this.highlight_bg_color : "");
        	this.divUser.form.edtHdponPhino.set_background((this.dsSaveInfo.getColumn(0, "hdponPhino") != this.dsSaveInfo.getOrgColumn(0, "hdponPhino")) ? this.highlight_bg_color : "");
        	this.divUser.form.edtFaxDdd.set_background(    (this.dsSaveInfo.getColumn(0, "faxDdd")     != this.dsSaveInfo.getOrgColumn(0, "faxDdd")    ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtFaxTlpno.set_background(  (this.dsSaveInfo.getColumn(0, "faxTlpno")   != this.dsSaveInfo.getOrgColumn(0, "faxTlpno")  ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtFaxPhino.set_background(  (this.dsSaveInfo.getColumn(0, "faxPhino")   != this.dsSaveInfo.getOrgColumn(0, "faxPhino")  ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtEmlId.set_background(     (this.dsSaveInfo.getColumn(0, "emlId")      != this.dsSaveInfo.getOrgColumn(0, "emlId")     ) ? this.highlight_bg_color : "");
        	this.divUser.form.edtEmlAddr.set_background(   (this.dsSaveInfo.getColumn(0, "emlAddr")    != this.dsSaveInfo.getOrgColumn(0, "emlAddr")   ) ? this.highlight_bg_color : "");

        	this.dsSaveInfo.set_enableevent(true);
        };

        /**
         * @description  저장 버튼 클릭 - 사용자정보 정보수정하기
        */
        this.divContent_btnSave_onclick = function(obj,e)
        {
        	this.dsResult.clearData();
        	this.dsResult.insertRow(0);
        	this.dsResult.setColumn(0, "result"    , ""    );

        	var count = 0;

        	// 현재 비밀번호
        	if(this.gfnIsNull(this.divUser.form.edtCurrentPswd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divUser.form.edtCurrentPswd.tooltiptext, function(svcid, variant) {
        			this.divUser.form.edtCurrentPswd.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호 비교
        	if(!this.gfnIsNull(this.divUser.form.edtPswd.value) || !this.gfnIsNull(this.divUser.form.edtPswdConfirm.value)) {

        		if(this.gfnIsNull(this.divUser.form.edtPswd.value)) {
        			this.gfnShowMessage(this, "W000014", this.divUser.form.edtPswd.tooltiptext, function(svcid, variant) {
        				this.divUser.form.edtPswd.setFocus();
        			});
        			return false;
        		}

        		if(this.gfnIsNull(this.divUser.form.edtPswdConfirm.value)) {
        			this.gfnShowMessage(this, "W000014", this.divUser.form.edtPswdConfirm.tooltiptext, function(svcid, variant) {
        				this.divUser.form.edtPswdConfirm.setFocus();
        			});
        			return false;
        		}

        		if(this.divUser.form.edtPswd.value != this.divUser.form.edtPswdConfirm.value) {
        			this.gfnShowMessage(this, ["Alert","비밀번호가 일치하지 않습니다."], "", function(svcid, variant) {
        				this.divUser.form.edtPswdConfirm.setFocus();
        			});
        			return false;
        		}

        		count += 1;

        		// PW RSA 셋팅
        		this.dsSaveInfo.setColumn(0,"rsaPassword", "");					// 값 초기화
        		var encryptValue = this.gfnRSAEncrypt(this.divUser.form.edtPswd.value);
        		if(!encryptValue) return false;
        		this.dsSaveInfo.setColumn(0,"rsaPassword", encryptValue);

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

        	count += (this.dsSaveInfo.getColumn(0, "deptNm")     != this.dsSaveInfo.getOrgColumn(0, "deptNm")    ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "jbpsNm")     != this.dsSaveInfo.getOrgColumn(0, "jbpsNm")    ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "telDdd")     != this.dsSaveInfo.getOrgColumn(0, "telDdd")    ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "telTlpno")   != this.dsSaveInfo.getOrgColumn(0, "telTlpno")  ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "telPhino")   != this.dsSaveInfo.getOrgColumn(0, "telPhino")  ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "hdponDdd")   != this.dsSaveInfo.getOrgColumn(0, "hdponDdd")  ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "hdponTlpno") != this.dsSaveInfo.getOrgColumn(0, "hdponTlpno")) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "hdponPhino") != this.dsSaveInfo.getOrgColumn(0, "hdponPhino")) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "faxDdd")     != this.dsSaveInfo.getOrgColumn(0, "faxDdd")    ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "faxTlpno")   != this.dsSaveInfo.getOrgColumn(0, "faxTlpno")  ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "faxPhino")   != this.dsSaveInfo.getOrgColumn(0, "faxPhino")  ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "emlId")      != this.dsSaveInfo.getOrgColumn(0, "emlId")     ) ? 1 : 0;
        	count += (this.dsSaveInfo.getColumn(0, "emlAddr")    != this.dsSaveInfo.getOrgColumn(0, "emlAddr")   ) ? 1 : 0;

        	/* 변경된 값이 있는지 확인하기 */
        	if(count == 0) {
        		this.gfnShowMessage(this, ["Alert","변경된 정보가 없습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}
        	/* #################### validation END #################### */

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallUpdateUser();
        		}
        	});
        };

        /**
         * @description  새 비밀번호
        */
        this.divUser_edtPswd_onkeyup = function(obj,e)
        {
        	this.divUser.form.staPswd.set_cssclass(this.gfnIsNull(obj.value)? "sta_WF_Label" : "sta_WF_Label_E");
        	this.divUser.form.staPswdConfirm.set_cssclass(this.gfnIsNull(obj.value)? "sta_WF_Label" : "sta_WF_Label_E");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divInst.form.staBzentNm.addEventHandler("onclick",this.divInst_sta02_onclick,this);
            this.divUser.form.staPswd.addEventHandler("onclick",this.divUser_staPswd_onclick,this);
            this.divUser.form.edtPswd.addEventHandler("onkeyup",this.divUser_edtPswd_onkeyup,this);
            this.divUser.form.cboEmlAddr.addEventHandler("onitemchanged",this.divUser_cboEmlAddr_onitemchanged,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divContent_btnSave_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.dsSaveInfo.addEventHandler("oncolumnchanged",this.dsSaveInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("comUserInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
