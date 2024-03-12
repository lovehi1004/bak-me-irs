(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comRegisterUserStep2");
            this.set_titletext("사용자등록 > 개인정보입력");
            this.set_cssclass("frm_MEMBER_Bg");
            this.set_dragscrolltype("both");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStaticEmailList", this);
            obj._setContents("<ColumnInfo><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddrValue\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"emailAddr\">직접입력</Col><Col id=\"emailAddrValue\"/></Row><Row><Col id=\"emailAddr\">naver.com</Col><Col id=\"emailAddrValue\">naver.com</Col></Row><Row><Col id=\"emailAddr\">daum.net</Col><Col id=\"emailAddrValue\">daum.net</Col></Row><Row><Col id=\"emailAddr\">hotmail.com</Col><Col id=\"emailAddrValue\">hotmail.com</Col></Row><Row><Col id=\"emailAddr\">nate.com</Col><Col id=\"emailAddrValue\">nate.com</Col></Row><Row><Col id=\"emailAddr\">yahoo.co.kr</Col><Col id=\"emailAddrValue\">yahoo.co.kr</Col></Row><Row><Col id=\"emailAddr\">paran.com</Col><Col id=\"emailAddrValue\">paran.com</Col></Row><Row><Col id=\"emailAddr\">empas.com</Col><Col id=\"emailAddrValue\">empas.com</Col></Row><Row><Col id=\"emailAddr\">dreamwiz.com</Col><Col id=\"emailAddrValue\">dreamwiz.com</Col></Row><Row><Col id=\"emailAddr\">freechal.com</Col><Col id=\"emailAddrValue\">freechal.com</Col></Row><Row><Col id=\"emailAddr\">lycos.co.kr</Col><Col id=\"emailAddrValue\">lycos.co.kr</Col></Row><Row><Col id=\"emailAddr\">korea.com</Col><Col id=\"emailAddrValue\">korea.com</Col></Row><Row><Col id=\"emailAddr\">gmail.com</Col><Col id=\"emailAddrValue\">gmail.com</Col></Row><Row><Col id=\"emailAddr\">hanmir.com</Col><Col id=\"emailAddrValue\">hanmir.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"rsaPassword\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"registType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult01", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult02", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult03", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"checkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1566","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divHeader","0","0",null,"80","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divStep1","90","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_Step01_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("1");
            obj.set_text("Step1");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("2");
            obj.set_text("회원가입유형");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new ImageViewer("Img01",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Div("divStep2","467","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step02_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("1");
            obj.set_text("Step2");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("2");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new ImageViewer("Img02",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Div("divStep3","844","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step03_on.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("1");
            obj.set_text("Step3");
            obj.set_cssclass("sta_MB_StepOn");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("2");
            obj.set_text("개인정보입력");
            obj.set_cssclass("sta_MB_StepOnTxt");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new ImageViewer("Img03",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_on.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Div("divStep4","1221","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step04_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("1");
            obj.set_text("Step4");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","147","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("2");
            obj.set_text("사용자등록완료");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Div("divContent","0","90","1566","580",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divH1","133","0","1300","59",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divContent.form.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divContent.form.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","133","59","1300","297",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215","1300","81",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129","1300","44",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172","1300","44",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43","1300","44",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staUpBzentNm","650","43",null,"44","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("7");
            obj.set_text("상위기관명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("상위기관명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","43",null,"44","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("4");
            obj.set_text("사업체명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업체명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staCrno","0","129",null,"44","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("14");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("법인등록번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staRprsvNm","0","172",null,"44","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("18");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("대표자명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staRdnmCd","0","215",null,"81","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("24");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("우편번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","staBzentNm:7","50","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_tooltiptext("사업체명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("사업체명");
            obj.set_accessibilitydescription("사업체명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Button("btnBzentNm","edtBzentNm:3","50","111","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("6");
            obj.set_text("사업수행자 검색");
            obj.set_tooltiptext("사업수행자 검색");
            obj.set_accessibilitylabel("사업수행자 검색");
            obj.set_accessibilitydescription("팝업");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staBrno","650","129",null,"44","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("16");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업자등록번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staCorpTel","650","172",null,"44","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("20");
            obj.set_text("법인전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("법인전화번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staDtlAddr","650","215",null,"81","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("28");
            obj.set_text("소재지");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("소재지");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtUpInstNm","staUpBzentNm:7","50","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_tooltiptext("상위기관명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("상위기관명");
            obj.set_accessibilitydescription("상위기관명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("19");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("대표자명");
            obj.set_accessibilitydescription("대표자명");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("25");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("우편번호");
            obj.set_accessibilitydescription("우편번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222","487","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("29");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_accessibilitylabel("소재지");
            obj.set_accessibilitydescription("소재지");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Button("btnRdnmCd","edtRdnmCd:3","222","100","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("26");
            obj.set_text("주소 검색");
            obj.set_tooltiptext("주소 검색");
            obj.set_accessibilitylabel("주소 검색");
            obj.set_accessibilitydescription("팝업");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDdd","staCorpTel:7","179","70","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화지역번호");
            obj.set_accessibilitydescription("법인전화지역번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter1","edtCorpTelDdd:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("35");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelTlpno","edtCorpTelDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화국번호");
            obj.set_accessibilitydescription("법인전화국번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter2","edtCorpTelTlpno:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("36");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelPhino","edtCorpTelDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화개별번호");
            obj.set_accessibilitydescription("법인전화개별번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0","1300","44",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staRegistType","0","0",null,"44","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("0");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("등록구분");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Radio("rdoRegistType","staRegistType:7","7","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            obj.set_tooltiptext("등록구분");
            obj.set_accessibilitylabel("등록구분");
            var divContent_form_divInst_form_rdoRegistType_innerdataset = new nexacro.NormalDataset("divContent_form_divInst_form_rdoRegistType_innerdataset", obj);
            divContent_form_divInst_form_rdoRegistType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">검색</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규등록</Col></Row></Rows>");
            obj.set_innerdataset(divContent_form_divInst_form_rdoRegistType_innerdataset);
            obj.set_text("사업수행자 검색");
            obj.set_value("1");
            obj.set_index("0");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseCrno","staCrno:7","136","140","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("법인등록번호");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("법인등록번호");
            obj.set_accessibilitydescription("법인등록번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("17");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_accessibilitylabel("사업자등록번호");
            obj.set_accessibilitydescription("사업자등록번호");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","staRdnmCd:7","258","487","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_accessibilitylabel("주소");
            obj.set_accessibilitydescription("주소");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86","1300","44",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staBzentClCd","650","86",null,"44","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("12");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업체구분");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staGovInstYn","0","86",null,"44","1150",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("10");
            obj.set_text("정부기관여부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("정부기관여부");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Radio("rdoGovInstYn","staGovInstYn:7","93","140","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            obj.set_tooltiptext("정부기관여부");
            obj.set_taborder("11");
            obj.set_accessibilitylabel("정부기관여부");
            obj.set_accessibilitydescription("정부기관여부");
            var divContent_form_divInst_form_rdoGovInstYn_innerdataset = new nexacro.NormalDataset("divContent_form_divInst_form_rdoGovInstYn_innerdataset", obj);
            divContent_form_divInst_form_rdoGovInstYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(divContent_form_divInst_form_rdoGovInstYn_innerdataset);
            obj.set_text("부");
            obj.set_value("N");
            obj.set_index("1");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Combo("cboBzentClCd","staBzentClCd:7","93","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("업체구분");
            obj.set_innerdataset("dsResult01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("업체구분");
            obj.set_accessibilitydescription("업체구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staInstClsfCd","650","0",null,"44","500",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("2");
            obj.set_text("사업체분류");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업체분류");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Combo("cboInstClsfCd","staInstClsfCd:7","7","236","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("3");
            obj.set_tooltiptext("사업체분류");
            obj.set_innerdataset("dsResult02");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("사업체분류");
            obj.set_accessibilitydescription("사업체분류");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Static("staHelp1","staDtlAddr:7","258","487","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("30");
            obj.set_text("사업자등록증에 있는 주소로 입력 하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.set_tooltiptext("사업자등록증에 있는 주소로 입력 하시기 바랍니다.");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Button("btnUpInstNm","edtUpInstNm:3","50","111","30",null,null,null,null,null,null,this.divContent.form.divInst.form);
            obj.set_taborder("9");
            obj.set_text("상위기관 검색");
            obj.set_enable("false");
            obj.set_tooltiptext("상위기관 검색");
            obj.set_accessibilitylabel("상위기관 검색");
            obj.set_accessibilitydescription("팝업");
            this.divContent.form.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","133","divInst:0","1300","59",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staHeaderUser","0","20","342","30",null,null,null,null,null,null,this.divContent.form.divH2.form);
            obj.set_taborder("0");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사용자정보");
            this.divContent.form.divH2.addChild(obj.name, obj);

            obj = new Div("divUser","133","divH2:0","1300","302",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","0","86","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLgnId","0","0",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("아이디");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staPswd","0","43",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("비밀번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staFlnm","0","86",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("이름");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staDeptNm","0","129",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("12");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("부서명");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtLgnId","staLgnId:7","7","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("아이디");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish,symbol");
            obj.set_accessibilitylabel("아이디");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Button("btnLgnId","edtLgnId:3","7","111","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("2");
            obj.set_text("중복 검색");
            obj.set_tooltiptext("중복 검색");
            obj.set_enable("false");
            obj.set_accessibilitylabel("중복 검색");
            obj.set_accessibilitydescription("중복 검색");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Button("btnDelLgnId","btnLgnId:3","7","40","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_tooltiptext("아이디 초기화");
            obj.set_accessibilitylabel("아이디 초기화");
            obj.set_accessibilitydescription("아이디 초기화");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staPswdConfirm","650","43",null,"44","500",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("비밀번호 확인");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd","staPswd:7","50","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_tooltiptext("비밀번호");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswdConfirm","staPswdConfirm:7","50","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("7");
            obj.set_textAlign("left");
            obj.set_tooltiptext("비밀번호 확인");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호 확인");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staUserClCd","650","86",null,"44","500",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("10");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("계정구분");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","650","129",null,"44","500",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("직위");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","staFlnm:7","93","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이름");
            obj.set_maxlength("15");
            obj.set_accessibilitylabel("이름");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","staJbpsNm:7","136","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_tooltiptext("직위");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("직위");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258","1300","44",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staEml","650","215",null,"44","500",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("28");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("이메일주소");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staHdpon","650","172",null,"44","500",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("20");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("휴대폰번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staFax","0","215",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("24");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("팩스번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staSmsNtiYn","0","258",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("32");
            obj.set_text("SMS 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("SMS 동의여부");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staTel","0","172",null,"44","1150",null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("전화번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new CheckBox("chkSmsNtiYn","staSmsNtiYn:7","265","430","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("33");
            obj.set_text("시스템 알림정보에 대한 SMS 메세지수신을 동의합니다.");
            obj.set_value("false");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("SMS 동의여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_accessibilitylabel("SMS 동의여부");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDdd","staTel:7","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화지역번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter1","edtTelDdd:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("42");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelTlpno","edtTelDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화국번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelDelemiter2","edtTelTlpno:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("43");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtTelPhino","edtTelDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("전화개별번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDdd","staHdpon:7","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰지역번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter1","edtHdponDdd:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("44");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponTlpno","edtHdponDelemiter1:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰국번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponDelemiter2","edtHdponTlpno:7","179","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("45");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtHdponPhino","edtHdponDelemiter2:0","179","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("휴대폰개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("휴대폰개별번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDdd","staFax:7","222","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스지역번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter1","edtFaxDdd:7","222","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("46");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxTlpno","edtFaxDelemiter1:0","222","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스국번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxDelemiter2","edtFaxTlpno:7","222","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("47");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtFaxPhino","edtFaxDelemiter2:0","222","70","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("팩스개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("팩스개별번호");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlId","staEml:7","222","177","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일ID");
            obj.set_maxlength("20");
            obj.set_inputtype("numberandenglish");
            obj.set_accessibilitylabel("이메일ID");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlDelemiter","edtEmlId:7","222","16","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("48");
            obj.set_value("@");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("@");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","edtEmlDelemiter:4","222","140","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_tooltiptext("이메일주소");
            obj.set_maxlength("100");
            obj.set_inputtype("numberandenglish,dot");
            obj.set_accessibilitylabel("이메일주소");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Combo("cboEmlAddr","edtEmlAddr:3","222","140","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsStaticEmailList");
            obj.set_codecolumn("emailAddrValue");
            obj.set_datacolumn("emailAddr");
            obj.set_tooltiptext("이메일주소 선택");
            obj.set_accessibilitylabel("이메일주소 선택");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("0");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNm:7","136","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_tooltiptext("부서명");
            obj.set_maxlength("100");
            obj.set_accessibilitylabel("부서명");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Combo("cboUserClCd","staUserClCd:7","93","236","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("11");
            obj.set_tooltiptext("계정구분");
            obj.set_innerdataset("dsResult03");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_accessibilitylabel("계정구분");
            obj.set_accessibilitydescription("계정구분");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Static("staHelp1","btnDelLgnId:7","7","487","30",null,null,null,null,null,null,this.divContent.form.divUser.form);
            obj.set_taborder("49");
            obj.set_text("아이디는 8~20자리까지 입력가능합니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.set_tooltiptext("아이디는 8~20자리까지 입력가능합니다.");
            this.divContent.form.divUser.addChild(obj.name, obj);

            obj = new Div("divH3","133","divUser:0","1300","59",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("6");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staHeaderFile","0","20","342","30",null,null,null,null,null,null,this.divContent.form.divH3.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divContent.form.divH3.addChild(obj.name, obj);

            obj = new Div("divFile","133","divH3:0","1300","132",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0","1300","132",null,null,null,null,null,null,this.divContent.form.divFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContent.form.divFile.addChild(obj.name, obj);

            obj = new Static("staBrdocFlmno","0","0","150","132",null,null,null,null,null,null,this.divContent.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_tooltiptext("사업자등록증");
            this.divContent.form.divFile.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divContent.form.divFile.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divContent.form.divFile.addChild(obj.name, obj);

            obj = new Div("divRaonKSingle","staBrdocFlmno:7","6",null,"120","7",null,null,null,null,null,this.divContent.form.divFile.form);
            obj.set_taborder("1");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            obj.set_tooltiptext("사업자등록증");
            obj.set_accessibilitylabel("사업자등록증");
            this.divContent.form.divFile.addChild(obj.name, obj);

            obj = new Div("divBtn","133","divFile:20","1300","50",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSave","574","0","75","32",null,null,null,null,null,null,this.divContent.form.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_tooltiptext("신청");
            obj.set_accessibilitylabel("신청");
            this.divContent.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3","0","75","32",null,null,null,null,null,null,this.divContent.form.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_tooltiptext("취소");
            obj.set_accessibilitylabel("취소");
            this.divContent.form.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divHeader.form.divStep1.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep1.form,function(p){});
            this.divMain.form.divHeader.form.divStep1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep2.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep2.form,function(p){});
            this.divMain.form.divHeader.form.divStep2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep3.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep3.form,function(p){});
            this.divMain.form.divHeader.form.divStep3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep4.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep4.form,function(p){});
            this.divMain.form.divHeader.form.divStep4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form,function(p){});
            this.divMain.form.divHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divH1.form
            obj = new Layout("default","",0,0,this.divContent.form.divH1.form,function(p){});
            this.divContent.form.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divInst.form
            obj = new Layout("default","",0,0,this.divContent.form.divInst.form,function(p){});
            this.divContent.form.divInst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divH2.form
            obj = new Layout("default","",0,0,this.divContent.form.divH2.form,function(p){});
            this.divContent.form.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divUser.form
            obj = new Layout("default","",0,0,this.divContent.form.divUser.form,function(p){});
            this.divContent.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divH3.form
            obj = new Layout("default","",0,0,this.divContent.form.divH3.form,function(p){});
            this.divContent.form.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divFile.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divContent.form.divFile.form.divRaonKSingle.form,function(p){});
            this.divContent.form.divFile.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divFile.form
            obj = new Layout("default","",0,0,this.divContent.form.divFile.form,function(p){});
            this.divContent.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divBtn.form
            obj = new Layout("default","",0,0,this.divContent.form.divBtn.form,function(p){});
            this.divContent.form.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContent.form.divInst.form.cboInstClsfCd","value","dsInstInfo","instClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContent.form.divInst.form.edtBzentNm","value","dsInstInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContent.form.divInst.form.edtUpInstNm","value","dsInstInfo","upInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContent.form.divInst.form.rdoGovInstYn","value","dsInstInfo","govInstYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContent.form.divInst.form.cboBzentClCd","value","dsInstInfo","bzentClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContent.form.divInst.form.mseCrno","value","dsInstInfo","crno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContent.form.divInst.form.mseBrno","value","dsInstInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContent.form.divInst.form.edtRprsvNm","value","dsInstInfo","rprsvNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContent.form.divInst.form.edtCorpTelDdd","value","dsInstInfo","corpTelDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divContent.form.divInst.form.edtCorpTelTlpno","value","dsInstInfo","corpTelTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divContent.form.divInst.form.edtCorpTelPhino","value","dsInstInfo","corpTelPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divContent.form.divInst.form.edtRdnmCd","value","dsInstInfo","rdnmCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divContent.form.divInst.form.edtAddr","value","dsInstInfo","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divContent.form.divInst.form.edtDtlAddr","value","dsInstInfo","dtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divContent.form.divUser.form.edtLgnId","value","dsUserInfo","lgnId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divContent.form.divUser.form.edtFlnm","value","dsUserInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divContent.form.divUser.form.cboUserClCd","value","dsUserInfo","userClCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divContent.form.divUser.form.edtDeptNm","value","dsUserInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divContent.form.divUser.form.edtJbpsNm","value","dsUserInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divContent.form.divUser.form.edtTelDdd","value","dsUserInfo","telDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divContent.form.divUser.form.edtTelTlpno","value","dsUserInfo","telTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divContent.form.divUser.form.edtTelPhino","value","dsUserInfo","telPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divContent.form.divUser.form.edtHdponDdd","value","dsUserInfo","hdponDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divContent.form.divUser.form.edtHdponTlpno","value","dsUserInfo","hdponTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divContent.form.divUser.form.edtHdponPhino","value","dsUserInfo","hdponPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divContent.form.divUser.form.edtFaxDdd","value","dsUserInfo","faxDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divContent.form.divUser.form.edtFaxTlpno","value","dsUserInfo","faxTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divContent.form.divUser.form.edtFaxPhino","value","dsUserInfo","faxPhino");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divContent.form.divUser.form.edtEmlId","value","dsUserInfo","emlId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divContent.form.divUser.form.edtEmlAddr","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divContent.form.divUser.form.chkSmsNtiYn","value","dsUserInfo","smsNtiYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContent.form.divUser.form.edtPswd","value","dsPswd","pswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divContent.form.divUser.form.edtPswdConfirm","value","dsPswd","pswdConfirm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
        };
        
        // User Script
        this.addIncludeScript("comRegisterUserStep3.xfdl","");
        this.registerScript("comRegisterUserStep3.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comRegisterUserStep1 Form
        * FILE NAME     : comRegisterUserStep1.xfdl
        * DESCRIPTION   : 사용자등록 > 회원유형선택
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
        	// 비밀번호 데이터셋 초기화
        	this.dsPswd.clearData();
        	this.dsPswd.insertRow(0);
        	this.dsPswd.setColumn(0, "pswd"    , ""    );
        	this.dsPswd.setColumn(0, "pswdConfirm"    , ""    );

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	// 값 초기화
        	this.dsUserInfo.clearData();
        	this.dsUserInfo.insertRow(0);
        	this.dsUserInfo.setColumn(0, "smsNtiYn"    , "N"    );

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

        	this.divContent.form.divFile.form.divRaonKSingle.form.fnInitRaonK(this, objParam);

        	this.fnSetDivInst("1");			//사업체정보 영역 상태 설정

        	/* #################### 가입유형별 텍스트설정 콤보박스 초기설정 START #################### */
        	this.userType = this.getOwnerFrame().form.dsUser.getColumn(0, "userType");
        	if(this.userType == 1) {				// 관장(위탁)기관
        		this.divContent.form.divH1.form.staHeaderInst.set_text("기관정보");
        		this.divContent.form.divInst.form.btnBzentNm.set_text("기관 검색");
        		this.divContent.form.divInst.form.staBzentNm.set_text("기관명");
        		this.divContent.form.divInst.form.staInstClsfCd.set_text("기관분류");

        		this.divContent.form.divInst.form.edtBzentNm.set_tooltiptext("기관명");
        		this.divContent.form.divInst.form.cboInstClsfCd.set_tooltiptext("기관분류");

        		this.divContent.form.divInst.form.edtBzentNm.set_accessibilitylabel("기관명");
        		this.divContent.form.divInst.form.cboInstClsfCd.set_accessibilitylabel("기관분류");

        	} else if(this.userType == 2) {		// 사업수행자
        		this.divContent.form.divH1.form.staHeaderInst.set_text("사업체정보");
        		this.divContent.form.divInst.form.btnBzentNm.set_text("사업수행자 검색");
        		this.divContent.form.divInst.form.staBzentNm.set_text("사업체명");
        		this.divContent.form.divInst.form.staInstClsfCd.set_text("사업체분류");

        		this.divContent.form.divInst.form.edtBzentNm.set_tooltiptext("사업체명");
        		this.divContent.form.divInst.form.cboInstClsfCd.set_tooltiptext("사업체분류");

        		this.divContent.form.divInst.form.edtBzentNm.set_accessibilitylabel("사업체명");
        		this.divContent.form.divInst.form.cboInstClsfCd.set_accessibilitylabel("사업체분류");
        	}
        	/* #################### 가입유형별 텍스트설정 초기설정 END #################### */

        	/* #################### 공통코드 초기설정 START #################### */
        	// 공통코드 조회
        	var arrParam = [];
        	arrParam[0] = {outDs:"dsResult01", groupId:"BZENT_CL_CD" , headflag:"S" , useYn:"Y"};
        	arrParam[1] = {outDs:"dsResult02", groupId:"INST_CLSF_CD"  , headflag:"S" , useYn:"Y"};
        	arrParam[2] = {outDs:"dsResult03", groupId:"USER_CL_CD"  , headflag:"S" , useYn:"Y"};
        	var sSvcId = "getCommonCode";
        	var sCallbackFunc = "fnComcodeCallback";

        	this.gfnGetCommonCode(this, arrParam, sSvcId, sCallbackFunc);
        	/* #################### 공통코드 초기설정 END #################### */
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
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnComcodeCallback = function(svcID, nErrCode, nErrMsg)
        {
        	switch (svcID)
        	{
        		case "getCommonCode" :

        			if(this.userType == 1) {				// 관장(위탁)기관
        				this.dsResult02.set_enableevent(false);
        				for (var i = this.dsResult02.rowcount - 1; i >= 0; i--) {
        					if(!['', 'ICC0002', 'ICC0003', 'ICC0004'].includes(this.dsResult02.getColumn(i, "cdMgno"))) {
        						this.dsResult02.deleteRow(i);
        					}
        				}
        				this.dsResult02.set_enableevent(true);

        				this.dsResult03.set_enableevent(false);
        				for (var i = this.dsResult03.rowcount - 1; i >= 0; i--) {
        					if(!['', 'UCC0002', 'UCC0003', 'UCC0006', 'UCC0007'].includes(this.dsResult03.getColumn(i, "cdMgno"))) {
        						this.dsResult03.deleteRow(i);
        					}
        				}
        				this.dsResult03.set_enableevent(true);


        			} else if(this.userType == 2) {		// 사업수행자
        				this.dsResult02.set_enableevent(false);

        				for (var i = this.dsResult02.rowcount - 1; i >= 0; i--) {
        					if(!['', 'ICC0005'].includes(this.dsResult02.getColumn(i, "cdMgno"))) {
        						this.dsResult02.deleteRow(i);
        					}
        				}
        				this.dsResult02.set_enableevent(true);

        				this.dsResult03.set_enableevent(false);
        				for (var i = this.dsResult03.rowcount - 1; i >= 0; i--) {
        					if(!['', 'UCC0004', 'UCC0005'].includes(this.dsResult03.getColumn(i, "cdMgno"))) {
        						this.dsResult03.deleteRow(i);
        					}
        				}
        				this.dsResult03.set_enableevent(true);

        			}

        			// 첫번째꺼 선택하기
        			this.divContent.form.divInst.form.cboBzentClCd.set_index(0);
        			this.divContent.form.divUser.form.cboUserClCd.set_index(0);

        			if(this.userType == 1) {				// 관장(위탁)기관
        				this.divContent.form.divInst.form.cboInstClsfCd.set_index(0);
        			} else if(this.userType == 2) {			// 사업수행자
        				this.divContent.form.divInst.form.cboInstClsfCd.set_index(1);			// 사업체분류
        			}

        			// 후처리 코드
        			trace("[getCommonCode]this.dsResult01.getRowCount():"+this.dsResult01.getRowCount());
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());
        			trace("[getCommonCode]this.dsResult03.getRowCount():"+this.dsResult03.getRowCount());
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
        			this.getOwnerFrame().form.fnGoStep(4);			// STEP4 화면 보여주기
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
        			var targetUserClCd = objRtnValue["targetUserClCd"];									// 회원가입 가능한 사용자구분코드 (가입가능사용자구분코드-사업체전용)

        			// [single - RaonK] 파일 조회
        			var brdocFlmno   = this.gfnIsNull(objRtnValue["brdocFlmno"])   ? "" : objRtnValue["brdocFlmno"];

        			trace("[objRtnValue][" + JSON.stringify(objRtnValue)+"]");

        			this.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 -  조회하기

        			if(this.userType == 2) {		// 사업수행자
        				/* 사업수행자는 계정대표자, 계정관리인 자동 선택되게 */
        				this.divContent.form.divUser.form.cboUserClCd.set_value(targetUserClCd);
        				this.divContent.form.divUser.form.cboUserClCd.set_readonly(true);			// 서버에서 판단한 권한으로 신청할 수 있도록 비활성화

        			} else {
        				// 관장기관인 경우는 사업자번호 필수 아님
        				if(objRtnValue["instClsfCd"] == 'ICC0003') {
        					this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label");
        				} else {
        					this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label_E");
        				}

        				this.divContent.form.divUser.form.cboUserClCd.set_readonly(false);
        			}

        			this.divContent.form.divUser.form.edtLgnId.setFocus();

        			break;

        		//상위기관 검색 팝업
        		case "comUpInstPop" :
        			// 반환받은 값 받아온다.
        			// objRtnValue["반환키값"]
        			var objRtnValue = this.gfnGetPopupRetun(this, objRtn);
        			if(this.gfnIsNull(objRtnValue)) {
        				return false;
        			}

        			//팝업에서 넘어온 값 설정하기
        			var upInstMgno = objRtnValue["instMgno"];
        			var upInstNm = objRtnValue["bzentNm"];

        			this.dsInstInfo.setColumn(0, "upInstMgno"    , upInstMgno     );		// 상위기관관리번호
        			this.dsInstInfo.setColumn(0, "upInstNm"      , upInstNm       );		// 상위기관명

        			// 등록구분
        			var registType = this.divContent.form.divInst.form.rdoRegistType.value;
        			// 기관분류
        			var instClsfCd = this.divContent.form.divInst.form.cboInstClsfCd.value;

        			break;

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
        		case "checkLoginId" :
        			// 후처리 코드

        			// 중복아이디가 존재하지 않는다면 - 사용가능
        			if(this.dsCheckInfo.getColumn(0, "checkYn") == "Y") {
        				this.divContent.form.divUser.form.edtLgnId.set_readonly(true);
        				this.divContent.form.divUser.form.btnLgnId.set_enable(false);
        				this.divContent.form.divUser.form.btnDelLgnId.set_enable(true);
        				this.divContent.form.divUser.form.btnDelLgnId.set_visible(true);

        				this.divContent.form.divUser.form.edtPswd.setFocus();

        			} else {
        				this.gfnShowMessage(this, ["Alert","이미 사용중인 아이디입니다."], "", function(svcid, variant) {
        					this.divContent.form.divUser.form.edtLgnId.setFocus();
        				});
        			}
        			break;
        		case "createUser" :
        			// 후처리 코드
        			if(this.dsUserInfo.getColumn(0, "userClCd") == "UCC0003") {			// 위탁기관 별도 메세지 처리
        				this.gfnShowMessage(this, ["Alert","최초 회원 가입시 조회권한만 제공됩니다.\n시스템 담당자에게 메일로 문의하십시오."], "", "fnMsgCallback", "msgAlertCreateUser");
        			} else {
        				this.gfnShowMessage(this, ["Alert","회원가입 신청이 완료되었습니다."], "", "fnMsgCallback", "msgAlertCreateUser");
        			}
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
         * @description 회원가입 신청하기
        */
        this.fnCallCreateUser = function()
        {
        	// 등록구분
        	var registType = this.divContent.form.divInst.form.rdoRegistType.value;
        	this.dsInstInfo.setColumn(0, "registType", registType);

        	// 공통Transaction 호출
        	var objArgs = {};
         	objArgs.svcId 			= "createUser";
         	objArgs.url 			= "/common/main/user/insertAply.irs";
         	objArgs.inds      		= "dsInstInfo=dsInstInfo dsUserInfo=dsUserInfo dsInstInfoFile=dsInstInfoFile dsBrdocFlmnoFile=dsBrdocFlmnoFile";
         	objArgs.outds     		= "";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        /**
         * @description [single - RaonK] 파일 조회 -  조회하기
        */
        this.fnSearchFile = function(sBrdocFlmno)
        {
        	// 파일정보 clear
        	this.dsInstInfoFile.clearData();
        	this.dsInstInfoFile.insertRow(0);
        	this.dsBrdocFlmnoFile.clearData();

        	// 파일 조회 갑 설정하기
        	this.dsInstInfoFile.setColumn(0, "brdocFlmno", sBrdocFlmno);

        	trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        	this.divContent.form.divFile.form.divRaonKSingle.form.fnSearchFile(sBrdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기
        	trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 END----");
        }

        /**
         * @description 사업체정보 영역 필드 상태 설정 - 등록구분 라디오버튼, 초기로딩시
        */
        this.fnSetDivInst = function(sRegistType)
        {
        	// 값 초기화
        	this.dsInstInfo.clearData();
        	this.dsInstInfo.insertRow(0);

        	// 사업수행자 검색
        	if(sRegistType == "1") {

        		// 사업체분류 - 읽기전용 설정
        		this.divContent.form.divInst.form.cboInstClsfCd.set_readonly(true);

        		if(this.userType == 1) {				// 관장(위탁)기관
        			this.divContent.form.divInst.form.cboInstClsfCd.set_index(0);			// 첫번째꺼 선택하기
        		} else if(this.userType == 2) {			// 사업수행자
        			this.divContent.form.divInst.form.cboInstClsfCd.set_index(1);			// 사업수행자는 일반사업체 1종류만 존재하므로 강제설정
        		}

        		// 사업체명 - 읽기전용 설정
        		this.divContent.form.divInst.form.edtBzentNm.set_readonly(true);
        		this.divContent.form.divInst.form.btnBzentNm.set_enable(true);				// 사업수행자 검색 버튼 활성화

        		// 상위기관 버튼
        		this.divContent.form.divInst.form.btnUpInstNm.set_enable(false);			// 상위기관 검색 버튼 비활성화

        		// 정부기관여부 - 읽기전용 설정
        		this.divContent.form.divInst.form.rdoGovInstYn.set_readonly(true);
        		this.divContent.form.divInst.form.rdoGovInstYn.set_value("N");				// 기본값 설정

        		// 업체구분 - 읽기전용 설정
        		this.divContent.form.divInst.form.cboBzentClCd.set_readonly(true);
        		this.divContent.form.divInst.form.cboBzentClCd.set_index(0);				// 기본값 설정

        		// 법인등록번호 - 읽기전용 설정
        		this.divContent.form.divInst.form.mseCrno.set_readonly(true);

        		// 사업자등록번호 - 읽기전용 설정
        		this.divContent.form.divInst.form.mseBrno.set_readonly(true);

        		// 대표자명 - 읽기전용 설정
        		this.divContent.form.divInst.form.edtRprsvNm.set_readonly(true);

        		// 법인전화번호 - 읽기전용 설정
        		this.divContent.form.divInst.form.edtCorpTelDdd.set_readonly(true);
        		this.divContent.form.divInst.form.edtCorpTelTlpno.set_readonly(true);
        		this.divContent.form.divInst.form.edtCorpTelPhino.set_readonly(true);

        		// 주소 검색 버튼
        		this.divContent.form.divInst.form.btnRdnmCd.set_enable(false);				// 주소 검색 버튼 비활성화

        		// 소재지 - 읽기전용 설정
        		this.divContent.form.divInst.form.edtDtlAddr.set_readonly(true);

        		// 사용자정보 ▶ 계정구분 - 읽기전용 해제
        		this.divContent.form.divUser.form.cboUserClCd.set_readonly(false);
        		this.divContent.form.divUser.form.cboUserClCd.set_index(0);

        		// 사업수행자 검색 버튼
        		this.divContent.form.divInst.form.btnBzentNm.setFocus();					// 사업수행자 검색 버튼 포커스

        	// 신규등록
        	} else if(sRegistType == "2") {
        		if(this.userType == 1) {				// 관장(위탁)기관
        			this.divContent.form.divInst.form.cboInstClsfCd.set_readonly(false);		// 사업체분류 - 읽기전용 해제
        			this.divContent.form.divInst.form.cboInstClsfCd.set_index(0);				// 첫번째꺼 선택하기
        		} else if(this.userType == 2) {			// 사업수행자
        			this.divContent.form.divInst.form.cboInstClsfCd.set_readonly(true);			// 사업체분류 - 읽기전용 설정
        			this.divContent.form.divInst.form.cboInstClsfCd.set_index(1);				// 사업수행자는 일반사업체 1종류만 존재하므로 강제설정
        		}

        		// 사업체명 - 읽기전용 해제
        		this.divContent.form.divInst.form.edtBzentNm.set_readonly(false);
        		this.divContent.form.divInst.form.btnBzentNm.set_enable(false);					// 사업수행자 검색 버튼 비활성화

        		// 상위기관명
        		this.divContent.form.divInst.form.btnUpInstNm.set_enable(false);				// 상위기관 검색 버튼 비활성화

        		// 정부기관여부 - 읽기전용 해제
        		this.divContent.form.divInst.form.rdoGovInstYn.set_readonly(false);
        		this.divContent.form.divInst.form.rdoGovInstYn.set_value("N");					// 기본값 설정

        		if(this.userType == 1) {				// 관장(위탁)기관
        			/* 기관은 비할당 설정 */
        			this.divContent.form.divInst.form.cboBzentClCd.set_readonly(true);
        			this.divContent.form.divInst.form.cboBzentClCd.set_index(2);				// 비할당 설정
        		} else if(this.userType == 2) {		// 사업수행자
        			this.divContent.form.divInst.form.cboBzentClCd.set_readonly(false);
        			this.divContent.form.divInst.form.cboBzentClCd.set_index(0);				// 기본값 설정
        		}

        		// 법인등록번호 - 읽기전용 해제
        		this.divContent.form.divInst.form.mseCrno.set_readonly(false);

        		// 사업자등록번호 - 읽기전용 해제
        		this.divContent.form.divInst.form.mseBrno.set_readonly(false);

        		// 대표자명 - 읽기전용 해제
        		this.divContent.form.divInst.form.edtRprsvNm.set_readonly(false);

        		// 법인전화번호 - 읽기전용 해제
        		this.divContent.form.divInst.form.edtCorpTelDdd.set_readonly(false);
        		this.divContent.form.divInst.form.edtCorpTelTlpno.set_readonly(false);
        		this.divContent.form.divInst.form.edtCorpTelPhino.set_readonly(false);

        		// 주소 검색 버튼
        		this.divContent.form.divInst.form.btnRdnmCd.set_enable(true);					// 주소 검색 버튼 활성화

        		// 소재지 - 읽기전용 해제
        		this.divContent.form.divInst.form.edtDtlAddr.set_readonly(false);

        		// 사용자정보 ▶ 계정구분
        		if(this.userType == 1) {				// 관장(위탁)기관 - 기관은 계정구분 선택가능
        			this.divContent.form.divUser.form.cboUserClCd.set_readonly(false);			// 계정구분 - 읽기전용 해제
        			this.divContent.form.divUser.form.cboUserClCd.set_index(0);
        		} else if(this.userType == 2) {			// 사업수행자 - 신규등록은 계정대표자
        			this.divContent.form.divUser.form.cboUserClCd.set_readonly(true);			// 계정구분 - 읽기전용 설정
        			this.divContent.form.divUser.form.cboUserClCd.set_index(2);					// 사업수행자가 신규등록하면 사용자구분이 계정대표자
        		}

        		// 사업체명
        		this.divContent.form.divInst.form.edtBzentNm.setFocus();						// 사업체명 입력 포커스
        	}
        };

        /**
         * @description 중복체크 초기화
        */
        this.fnClearDsCheckInfo = function() {
        	this.dsCheckInfo.clearData();
        	this.dsCheckInfo.insertRow(0);
        	this.dsCheckInfo.setColumn(0, "checkYn", "N");
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description 신청 버튼 클릭
        */
        this.divContent_btnSave_onclick = function(obj,e)
        {

        	// 등록구분
        	var registType = this.divContent.form.divInst.form.rdoRegistType.value;

        	/* #################### validation START #################### */
        	// [검색]으로 회원가입 신청시
        	if(registType == 1) {

        		// 사업체정보
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtBzentNm.value)) {
        			if(this.userType == 1) {			// 관장(위탁)기관
        				this.gfnShowMessage(this, ["Alert","기관을 검색하세요."], "", function(svcid, variant) {
        					this.divContent.form.divInst.form.btnBzentNm.setFocus();
        				});
        			} else if(this.userType == 2) {		// 사업수행자
        				this.gfnShowMessage(this, ["Alert","사업수행자를 검색하세요."], "", function(svcid, variant) {
        					this.divContent.form.divInst.form.btnBzentNm.setFocus();
        				});
        			}
        			return false;
        		}

        	// [신규등록]으로 회원가입 신청시
        	} else if(registType == 2){

        		if(this.userType == 1) {			// 관장(위탁)기관
        			// 기관분류
        			if(this.gfnIsNull(this.divContent.form.divInst.form.cboInstClsfCd.value)) {
        				this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.cboInstClsfCd.tooltiptext, function(svcid, variant) {
        					this.divContent.form.divInst.form.cboInstClsfCd.setFocus();
        				});
        				return false;
        			}
        		}

        		// 사업체명
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtBzentNm.value)) {
        			this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.edtBzentNm.tooltiptext, function(svcid, variant) {
        				this.divContent.form.divInst.form.edtBzentNm.setFocus();
        			});
        			return false;
        		}

        		// 상위기관명
        		if(this.userType == 1 && this.divContent.form.divInst.form.cboInstClsfCd.value == 'ICC0004') {			// 관장(위탁)기관
        			// 위탁기관은 상위기관 필수 선택
        			if(this.gfnIsNull(this.dsInstInfo.getColumn(0, "upInstMgno"))) {
        				this.gfnShowMessage(this, ["Alert","상위기관을 검색하세요."], "", function(svcid, variant) {
        					this.divContent.form.divInst.form.btnUpInstNm.setFocus();
        				});
        				return false;
        			}
        		}

        		if(this.userType == 1) {			// 관장(위탁)기관

        			// 사업자등록번호
        			if(this.divContent.form.divInst.form.cboInstClsfCd.value != 'ICC0003') {			// 관장기관은 사업자등록번호 필수 아님
        				if(this.gfnIsNull(this.divContent.form.divInst.form.mseBrno.value)) {
        					this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.mseBrno.tooltiptext, function(svcid, variant) {
        						this.divContent.form.divInst.form.mseBrno.setFocus();
        					});
        					return false;
        				}
        			}

        		} else if(this.userType == 2) {		// 사업수행자

        			// 사업체구분
        			if(this.gfnIsNull(this.divContent.form.divInst.form.cboBzentClCd.value)) {
        				this.gfnShowMessage(this, "W000013", this.divContent.form.divInst.form.cboBzentClCd.tooltiptext, function(svcid, variant) {
        					this.divContent.form.divInst.form.cboBzentClCd.setFocus();
        				});
        				return false;
        			}

        			// 사업자등록번호
        			if(this.divContent.form.divInst.form.cboInstClsfCd.value != 'ICC0003') {			// 관장기관은 사업자등록번호 필수 아님
        				if(this.gfnIsNull(this.divContent.form.divInst.form.mseBrno.value)) {
        					this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.mseBrno.tooltiptext, function(svcid, variant) {
        						this.divContent.form.divInst.form.mseBrno.setFocus();
        					});
        					return false;
        				}
        			}

        		}

        		// 대표자명
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtRprsvNm.value)) {
        			this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.edtRprsvNm.tooltiptext, function(svcid, variant) {
        				this.divContent.form.divInst.form.edtRprsvNm.setFocus();
        			});
        			return false;
        		}

        		// 법인지역번호
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtCorpTelDdd.value)) {
        			this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.edtCorpTelDdd.tooltiptext, function(svcid, variant) {
        				this.divContent.form.divInst.form.edtCorpTelDdd.setFocus();
        			});
        			return false;
        		}

        		// 법인국번호
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtCorpTelTlpno.value)) {
        			this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.edtCorpTelTlpno.tooltiptext, function(svcid, variant) {
        				this.divContent.form.divInst.form.edtCorpTelTlpno.setFocus();
        			});
        			return false;
        		}

        		// 법인개별번호
        		if(this.gfnIsNull(this.divContent.form.divInst.form.edtCorpTelPhino.value)) {
        			this.gfnShowMessage(this, "W000014", this.divContent.form.divInst.form.edtCorpTelPhino.tooltiptext, function(svcid, variant) {
        				this.divContent.form.divInst.form.edtCorpTelPhino.setFocus();
        			});
        			return false;
        		}

        	}

        	// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 여기부터 사용자정보 START ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

        	// 아이디
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtLgnId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtLgnId.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 중복체크
        	if(this.dsCheckInfo.getColumn(0, "checkYn") == "N") {
        		this.gfnShowMessage(this, "W000002", "", function(svcid, variant) {
        			this.divContent.form.divUser.form.btnLgnId.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtPswd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtPswd.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtPswd.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호 확인
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtPswdConfirm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtPswdConfirm.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtPswdConfirm.setFocus();
        		});
        		return false;
        	}

        	// 비밀번호 비교
        	if(this.divContent.form.divUser.form.edtPswd.value != this.divContent.form.divUser.form.edtPswdConfirm.value) {
        		this.gfnShowMessage(this, ["Alert","비밀번호가 일치하지 않습니다."], "", function(svcid, variant) {
        			this.divContent.form.divUser.form.edtPswdConfirm.setFocus();
        		});
        		return false;
        	}

        	// PW RSA 셋팅
        	this.dsUserInfo.setColumn(0,"rsaPassword", "");					// 값 초기화
        	var encryptValue = this.gfnRSAEncrypt(this.divContent.form.divUser.form.edtPswd.value);
        	if(!encryptValue) return false;
        	this.dsUserInfo.setColumn(0,"rsaPassword", encryptValue);

        	// 이름
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtFlnm.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtFlnm.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtFlnm.setFocus();
        		});
        		return false;
        	}

        	// 계정구분
        	if(this.gfnIsNull(this.divContent.form.divUser.form.cboUserClCd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.cboUserClCd.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.cboUserClCd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰지역번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponDdd.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponDdd.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponDdd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰국번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponTlpno.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponTlpno.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponTlpno.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰개별번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponPhino.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponPhino.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponPhino.setFocus();
        		});
        		return false;
        	}

        	// 이메일아이디
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtEmlId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtEmlId.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtEmlId.setFocus();
        		});
        		return false;
        	}

        	// 이메일주소
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtEmlAddr.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtEmlAddr.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtEmlAddr.setFocus();
        		});
        		return false;
        	}

        	// SMS 동의여부
        	if(this.divContent.form.divUser.form.chkSmsNtiYn.value == "N") {
        		this.gfnShowMessage(this, "W000013", this.divContent.form.divUser.form.chkSmsNtiYn.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.chkSmsNtiYn.setFocus();
        		});
        		return false;
        	}

        	// 사업자등록증
        	if(this.divContent.form.divInst.form.rdoRegistType.value == 2) {					// 신규등록
        		var brdocFlmno = this.dsInstInfoFile.getColumn(0, "brdocFlmno");				// 업무처리용 파일그룹관리번호
        		var fileGroupMgno = this.dsBrdocFlmnoFile.getColumn(0, "fileGroupMgno");		// 업로드콤포넌트 파일그룹관리번호
        		var fileMgno = this.dsBrdocFlmnoFile.getColumn(0, "fileMgno");					// 업로드콤포넌트 파일관리번호

        		if(this.gfnIsNull(brdocFlmno) || this.gfnIsNull(fileGroupMgno) || this.gfnIsNull(fileMgno)) {
        			this.gfnShowMessage(this, ["Alert","사업자등록증을 등록 하시기 바랍니다."], "", function(svcid, variant) {
        			});
        			return false;
        		}
        	}

        	// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 여기부터 사용자정보 END ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

        	/* #################### validation END #################### */

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallCreateUser();
        		}
        	});
        };

        /**
         * @description 취소 버튼 클릭
        */
        this.divContent_btnCancel_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnClose();		// 메인화면으로 이동
        };

        /**
         * @description 사업수행자 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divContent_divInst_btnBzentNm_onclick = function(obj,e)
        {
        	var sPopupId	= "comInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:this.userType};
        	var oOption		= {showtitlebar:false,titletext:"사업수행자 검색"};
        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 도로명주소 검색 클릭 - 주소 검색 팝업 열기
        */
        this.divContent_divInst_btnRdnmCd_onclick = function(obj,e)
        {
        	var sPopupId	= "comJusoPop";
        	var sPopupUrl	= "Frame_Popup::comJusoPop.xfdl";
        	var objArgs		= {};
        	var oOption		= {showtitlebar:false,titletext:"도로명주소 검색"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /**
         * @description 중복 검색 클릭 - 아이디 중복 체크하기
        */
        this.divContent_divUser_btnLgnId_onclick = function(obj,e)
        {
        	// 아이디 미입력
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtLgnId.value)) {
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtLgnId.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 아이디 길이체크
        	if(this.divContent.form.divUser.form.edtLgnId.value.length < 8) {
        		this.gfnShowMessage(this, ["Alert","아이디는 8~20자리까지 입력가능합니다."], "", function(svcid, variant) {
        			this.divContent.form.divUser.form.edtLgnId.setFocus();
        		});
        		return false;
        	}

        	// 아이디 중복체크 하기
        	this.fnCallCheckLoginId(this.divContent.form.divUser.form.edtLgnId.value);
        };

        /**
         * @description 이메일주소 콤복박스 아이템 선택 - 직접입력, 유효주소 세팅해주기
        */
        this.divContent_divUser_cboEmlAddr_onitemchanged = function(obj,e)
        {
        	// 직접입력이면 [이메일주소]입력박스 열어주고 포커스주기
        	if(this.gfnIsNull(obj.value)) {
        		this.divContent.form.divUser.form.edtEmlAddr.set_readonly(false);
        		this.divContent.form.divUser.form.edtEmlAddr.set_value("");
        		this.divContent.form.divUser.form.edtEmlAddr.setFocus();
        	} else {
        		this.divContent.form.divUser.form.edtEmlAddr.set_readonly(true);
        		this.divContent.form.divUser.form.edtEmlAddr.set_value(obj.value);
        	}
        };

        /**
         * @description sms수신동의 체크박스 선택 - 휴대폰번호가 입력 되었는지 체크하기
        */
        this.divContent_divUser_chkSmsNtiYn_onchanged = function(obj,e)
        {
        	// 휴대폰지역번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponDdd.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponDdd.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponDdd.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰국번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponTlpno.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponTlpno.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponTlpno.setFocus();
        		});
        		return false;
        	}

        	// 휴대폰개별번호
        	if(this.gfnIsNull(this.divContent.form.divUser.form.edtHdponPhino.value)) {
        		obj.set_value("N");
        		this.gfnShowMessage(this, "W000014", this.divContent.form.divUser.form.edtHdponPhino.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divUser.form.edtHdponPhino.setFocus();
        		});
        		return false;
        	}
        };

        /**
         * @description 사업체정보 > 등록구분 라디오버튼 선택
        */
        this.divContent_divInst_rdoRegistType_onitemchanged = function(obj,e)
        {
        	var registType = obj.value;

        	// 파일정보 clear
        	this.dsInstInfoFile.clearData();
        	this.dsInstInfoFile.insertRow(0);
        	this.dsBrdocFlmnoFile.clearData();

        	this.divContent.form.divFile.form.divRaonKSingle.form.fnResetUpload();		// [single - RaonK] 초기화

        	// 사업수행자 검색
        	if(registType == "1") {
        		this.divContent.form.divFile.form.divRaonKSingle.form.fvRaonKObj.SetUploadMode("view");				// [single - RaonK] 조회모드로 설정하기 - 파일정보가 없으면 다운로드 버튼도 비활성화 처리
        	// 신규등록
        	} else if(registType == "2") {
        		this.divContent.form.divFile.form.divRaonKSingle.form.fvRaonKObj.SetUploadMode("edit");				// [single - RaonK] 수정모드로 설정하기 - 파일정보가 없으면 다운로드 버튼도 비활성화 처리
        		this.fnSearchFile("");				// [single - RaonK] 파일 조회 -  신규업로드 시작하기
        	}

        	this.fnSetDivInst(registType);			//사업체정보 영역 상태 설정

        };

        /**
         * @description 중복 검색 우측 아이디 제거 클릭 - 아이디 다시 입력하기
        */
        this.divContent_divUser_btnDelLgnId_onclick = function(obj,e)
        {
        	this.divContent.form.divUser.form.edtLgnId.set_readonly(false);
        	this.divContent.form.divUser.form.btnLgnId.set_enable(true);
        	this.divContent.form.divUser.form.btnDelLgnId.set_enable(false);
        	this.divContent.form.divUser.form.btnDelLgnId.set_visible(false);

        	// 중복체크 초기화
        	this.fnClearDsCheckInfo();

        	this.divContent.form.divUser.form.edtLgnId.setFocus();
        };

        /**
         * @description 상위기관 검색 클릭 - 업체 검색 팝업 열기
        */
        this.divContent_divInst_btnUpInstNm_onclick = function(obj,e)
        {
        	// 사업체분류, 기관분류
        	if(this.gfnIsNull(this.divContent.form.divInst.form.cboInstClsfCd.value)) {
        		this.gfnShowMessage(this, "W000013", this.divContent.form.divInst.form.cboInstClsfCd.tooltiptext, function(svcid, variant) {
        			this.divContent.form.divInst.form.cboInstClsfCd.setFocus();
        		});
        		return false;
        	}

        	var sPopupId	= "comUpInstPop";
        	var sPopupUrl	= "Frame_Popup::comInstPop.xfdl";
        	var objArgs		= {pvInstSearchType:3};
        	var oOption		= {showtitlebar:false,titletext:"상위기관 검색"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };

        /*
         * @description 사업체분류, 기관분류 콤보박스 change 이벤트
        */
        this.divContent_divInst_cboInstClsfCd_onitemchanged = function(obj,e)
        {
        	// 기관분류
        	var instClsfCd = this.divContent.form.divInst.form.cboInstClsfCd.value;
        	// 등록구분
        	var registType = this.divContent.form.divInst.form.rdoRegistType.value;
        	// 기관명(사업체명)
        	var bzentNm = this.divContent.form.divInst.form.edtBzentNm.value;
        	bzentNm = this.gfnIsNull(bzentNm) ? "" : bzentNm;

        	// 정부기관여부 설정하기
        	/*
        	 * ICC0002	그외 정부기관
        	 * ICC0003	관장기관
        	 * ICC0004	위탁기관
        	 * ICC0005	일반사업체
        	 */
        	if(['ICC0002', 'ICC0003'].includes(instClsfCd)) {
        		this.divContent.form.divInst.form.rdoGovInstYn.set_readonly(true);			// 선택 불가
        		this.divContent.form.divInst.form.rdoGovInstYn.set_value("Y");				// 정부기관
        	} else if(['ICC0004', 'ICC0005'].includes(instClsfCd)) {
        		this.divContent.form.divInst.form.rdoGovInstYn.set_readonly(false);			// 선택 가능
        		this.divContent.form.divInst.form.rdoGovInstYn.set_value("N");				// 정부기관 아님
        	} else {
        		this.divContent.form.divInst.form.rdoGovInstYn.set_readonly(false);			// 선택 가능
        		this.divContent.form.divInst.form.rdoGovInstYn.set_value("N");				// 정부기관 아님
        	}

        	// 관장기관인 경우는 사업자번호 필수 아님
        	if(instClsfCd == 'ICC0003') {
        		this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label");
        	} else {
        		this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label_E");
        	}

        	// 위탁기관은 상위기관명 필수, 선택되지 않으면 default 설정
        	if(this.gfnIsNull(instClsfCd) || instClsfCd == 'ICC0004') {
        		this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label_E");
        	} else {
        		this.divContent.form.divInst.form.staBrno.set_cssclass("sta_WF_Label");
        	}

        	// 상위기관정보 초기화
        	this.dsInstInfo.setColumn(0, "upInstMgno"    , ""     );		// 상위기관관리번호
        	this.dsInstInfo.setColumn(0, "upInstNm"      , ""       );		// 상위기관명

        	// 신규등록시 관장기관 위탁기관 설정하기
        	if(registType == 2) {
        		/* 상위기관 설정 */
        		// 위탁기관은 상위기관 검색 가능, 상위기관 검색 팝업에서는 관장기관만 검색됨 - 상위기간 검색버튼 열어주기
        		if(instClsfCd == 'ICC0004') {   							// 위탁기관
        			this.divContent.form.divInst.form.btnUpInstNm.set_enable(true);
        		// 위탁기관이 아니면 상위기관은 (기본)기관과 동일 - 상위기간 검색버튼 막기
        		} else if(!this.gfnIsNull(instClsfCd)){

        			//위탁기관 외에 해당기관(=기관관리번호)과 상위기관은 모두 동일하다
        			this.divContent.form.divInst.form.btnUpInstNm.set_enable(false);
        			this.dsInstInfo.setColumn(0, "upInstNm"      , bzentNm      );		// 상위기관명

        		// 기관분류 "- 선택 -"을 선택시
        		} else {
        			// 상위기관, 관할기관 초기화 및 비활성화
        			this.divContent.form.divInst.form.btnUpInstNm.set_enable(false);
        			this.dsInstInfo.setColumn(0, "upInstMgno"        , ""           );		// 상위기관명
        			this.dsInstInfo.setColumn(0, "upInstNm"          , ""           );		// 상위기관관리번호
        		}

        	}

        };

        /*
         * @description 사업체명, 기관명 을 입력했을때
        */
        this.divContent_divInst_edtBzentNm_onkeyup = function(obj,e)
        {
        	// 기관분류
        	var instClsfCd = this.divContent.form.divInst.form.cboInstClsfCd.value;
        	// 등록구분
        	var registType = this.divContent.form.divInst.form.rdoRegistType.value;
        	// 기관명(사업체명)
        	var bzentNm = this.divContent.form.divInst.form.edtBzentNm.value;
        	bzentNm = this.gfnIsNull(bzentNm) ? "" : bzentNm;

        	// 위탁기관은 상위기관 검색 가능, 상위기관 검색 팝업에서는 관장기관만 검색됨 - 상위기간 검색버튼 열어주기
        	if(instClsfCd == 'ICC0004' && registType == 2) {   // 위탁기관 && 신규등록
        		;			// 아무런 처리하지 않기
        	// 위탁기관이 아니면 상위기관은 (기본)기관과 동일 - 상위기간 검색버튼 막기
        	} else if(!this.gfnIsNull(instClsfCd)){
        		this.dsInstInfo.setColumn(0, "upInstNm"      , bzentNm      );		// 상위기관명
        	}
        };

        /**
         * @description 아이디 를 입력했을때
        */
        this.divContent_divUser_edtLgnId_onkeyup = function(obj,e)
        {
        	// 아이디 길이체크
        	if(this.divContent.form.divUser.form.edtLgnId.value.length < 8) {
        		this.divContent.form.divUser.form.btnLgnId.set_enable(false);				// 중복 검색 버튼 비활성화
        	} else {
        		this.divContent.form.divUser.form.btnLgnId.set_enable(true);					// 중복 검색 버튼 활성화
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divContent.form.divH1.form.staHeaderInst.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divContent.form.divInst.form.staRprsvNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divInst.form.staRdnmCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divInst.form.edtBzentNm.addEventHandler("onkeyup",this.divContent_divInst_edtBzentNm_onkeyup,this);
            this.divContent.form.divInst.form.btnBzentNm.addEventHandler("onclick",this.divContent_divInst_btnBzentNm_onclick,this);
            this.divContent.form.divInst.form.staDtlAddr.addEventHandler("onclick",this.divContent_divInst_sta12_00_00_00_onclick,this);
            this.divContent.form.divInst.form.btnRdnmCd.addEventHandler("onclick",this.divContent_divInst_btnRdnmCd_onclick,this);
            this.divContent.form.divInst.form.edtCorpTelDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divInst.form.edtCorpTelDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divInst.form.staLine1.addEventHandler("onclick",this.divContent_divInst_staLine1_onclick,this);
            this.divContent.form.divInst.form.staRegistType.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divContent.form.divInst.form.rdoRegistType.addEventHandler("onitemchanged",this.divContent_divInst_rdoRegistType_onitemchanged,this);
            this.divContent.form.divInst.form.staGovInstYn.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divContent.form.divInst.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.divContent.form.divInst.form.cboInstClsfCd.addEventHandler("onitemchanged",this.divContent_divInst_cboInstClsfCd_onitemchanged,this);
            this.divContent.form.divInst.form.btnUpInstNm.addEventHandler("onclick",this.divContent_divInst_btnUpInstNm_onclick,this);
            this.divContent.form.divH2.form.staHeaderUser.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divContent.form.divUser.form.staFlnm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divUser.form.staDeptNm.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divUser.form.edtLgnId.addEventHandler("onkeyup",this.divContent_divUser_edtLgnId_onkeyup,this);
            this.divContent.form.divUser.form.btnLgnId.addEventHandler("onclick",this.divContent_divUser_btnLgnId_onclick,this);
            this.divContent.form.divUser.form.btnDelLgnId.addEventHandler("onclick",this.divContent_divUser_btnDelLgnId_onclick,this);
            this.divContent.form.divUser.form.staFax.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divUser.form.staSmsNtiYn.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divUser.form.staTel.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divContent.form.divUser.form.chkSmsNtiYn.addEventHandler("onchanged",this.divContent_divUser_chkSmsNtiYn_onchanged,this);
            this.divContent.form.divUser.form.chkSmsNtiYn.addEventHandler("onclick",this.divContent_divUser_chkSmsNtiYn_onclick,this);
            this.divContent.form.divUser.form.edtTelDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtTelDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtHdponDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtHdponDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtFaxDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtFaxDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.edtEmlDelemiter.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divContent.form.divUser.form.cboEmlAddr.addEventHandler("onitemchanged",this.divContent_divUser_cboEmlAddr_onitemchanged,this);
            this.divContent.form.divH3.form.staHeaderFile.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divContent.form.divBtn.form.btnSave.addEventHandler("onclick",this.divContent_btnSave_onclick,this);
            this.divContent.form.divBtn.form.btnCancel.addEventHandler("onclick",this.divContent_btnCancel_onclick,this);
        };
        this.loadIncludeScript("comRegisterUserStep3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
