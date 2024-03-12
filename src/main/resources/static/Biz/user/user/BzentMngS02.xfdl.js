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
            this.set_titletext("정보관리 > 상세화면");
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


            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"brdocFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyMgno\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclSn\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCd\" type=\"STRING\" size=\"256\"/><Column id=\"chgClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgArtclCd\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"chgArtclCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCn\" type=\"STRING\" size=\"256\"/><Column id=\"achgCn\" type=\"STRING\" size=\"256\"/><Column id=\"fileTypeClCd\" type=\"STRING\" size=\"256\"/><Column id=\"fileYn\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"achgCnOrgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgDt\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"bchgCnText\" type=\"STRING\" size=\"256\"/><Column id=\"achgCnText\" type=\"STRING\" size=\"256\"/><Column id=\"aplyPrcsTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"registType\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelDdd\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"corpTelPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullCorpTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"rdnmCd\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"upInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"psnAcntUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserListInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"acntSttsClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmmAcntSttsClCd\" type=\"STRING\" size=\"256\"/><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"hdponDdd\" type=\"STRING\" size=\"256\"/><Column id=\"hdponTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"hdponPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullHdponNo\" type=\"STRING\" size=\"256\"/><Column id=\"faxDdd\" type=\"STRING\" size=\"256\"/><Column id=\"faxTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"faxPhino\" type=\"STRING\" size=\"256\"/><Column id=\"fullFaxNo\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emlFullAddr\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsNtiYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"userCertYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult07", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdMgno\" type=\"string\" size=\"32\"/><Column id=\"cdEngNm\" type=\"string\" size=\"32\"/><Column id=\"cdKornNm\" type=\"string\" size=\"32\"/><Column id=\"sortSeqo\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divFile","0","423",null,"132","30",null,"1400",null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Div("divH3","0","divFile:0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20","342","30",null,null,null,null,null,null,this.divH3.form);
            obj.set_taborder("0");
            obj.set_text("계정 담당자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divGrid","0","divH3:0",null,"313","30",null,"1400",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","0",null,null,"0","0",null,null,null,null,this.divGrid.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsUserListInfo");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"상태\"/><Cell col=\"1\" text=\"이름\" tooltiptext=\"이름\"/><Cell col=\"2\" text=\"아이디\" tooltiptext=\"아이디\"/><Cell col=\"3\" text=\"계정구분\" tooltiptext=\"계정구분\"/><Cell col=\"4\" text=\"부서명\" tooltiptext=\"부서명\"/><Cell col=\"5\" text=\"직위\" tooltiptext=\"직위\"/><Cell col=\"6\" text=\"전화번호\" tooltiptext=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰번호\" tooltiptext=\"휴대폰번호\"/><Cell col=\"8\" text=\"팩스번호\" tooltiptext=\"팩스번호\"/><Cell col=\"9\" text=\"이메일주소\" tooltiptext=\"이메일주소\"/><Cell col=\"10\" text=\"계정상태\" tooltiptext=\"계정상태\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:gridCmmCheck\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" displaytype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;checkbox&quot; : &quot;none&quot;\" tooltiptext=\"상태\" accessibilitylabel=\"상태\"/><Cell col=\"1\" text=\"bind:flnm\" textAlign=\"center\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" tooltiptext=\"이름\" accessibilitylabel=\"이름\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:lgnId\" textAlign=\"center\" tooltiptext=\"아이디\" accessibilitylabel=\"아이디\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:userClCd\" displaytype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;combocontrol&quot; : &quot;combotext&quot;\" combodataset=\"dsResult02\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" textAlign=\"center\" edittype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;combo&quot; : &quot;none&quot;\" tooltiptext=\"계정구분\" accessibilitylabel=\"계정구분\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:deptNm\" textAlign=\"center\" tooltiptext=\"부서명\" accessibilitylabel=\"부서명\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:jbpsNm\" textAlign=\"center\" tooltiptext=\"직위\" accessibilitylabel=\"직위\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:fullTelNo\" textAlign=\"center\" tooltiptext=\"전화번호\" accessibilitylabel=\"전화번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:fullHdponNo\" textAlign=\"center\" tooltiptext=\"휴대폰번호\" accessibilitylabel=\"휴대폰번호\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:fullFaxNo\" textAlign=\"center\" tooltiptext=\"팩스번호\" accessibilitylabel=\"팩스번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:emlFullAddr\" textAlign=\"center\" tooltiptext=\"이메일주소\" accessibilitylabel=\"이메일주소\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:cmmAcntSttsClCd\" combodataset=\"dsResult01\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" textAlign=\"center\" displaytype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;combocontrol&quot; : &quot;normal&quot;\" edittype=\"expr:orgAcntSttsClCd != &quot;ASC0001&quot; &amp;&amp; instClsfCd == &quot;ICC0005&quot; ? &quot;combo&quot; : &quot;none&quot;\" tooltiptext=\"계정상태\" accessibilitylabel=\"계정상태\"/><Cell row=\"1\" col=\"1\" cssclass=\"expr:userCertYn == &quot;N&quot; ? &quot;cell_WF_Point01&quot; : &quot;cell_WF_Point03&quot;\" text=\"expr:userCertYn == &quot;N&quot; ? &quot;(본인인증정보 없음)&quot; : &quot;(본인인증)&quot;\" textAlign=\"center\" tooltiptext=\"본인인증여부\" accessibilitylabel=\"본인인증여부\"/></Band></Format></Formats>");
            this.divGrid.addChild(obj.name, obj);

            obj = new Div("divComBtn1","0","divGrid:20",null,"32","30",null,"1400",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn1.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            obj.set_tooltiptext("목록");
            obj.set_accessibilitylabel("목록");
            this.divComBtn1.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","75","32","btnList:3",null,null,null,null,null,this.divComBtn1.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_padding("0px");
            obj.set_visible("true");
            obj.set_tooltiptext("저장");
            obj.set_accessibilitylabel("저장");
            this.divComBtn1.addChild(obj.name, obj);

            obj = new Div("divH1","0","0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderInst","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("사업체정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH1.addChild(obj.name, obj);

            obj = new Button("btnTopAplyInst",null,"20","130","30","8",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("1");
            obj.set_text("업체정보 변경신청");
            obj.set_cssclass("btn_WF_Confirm");
            obj.set_tooltiptext("업체정보 변경신청");
            obj.set_visible("false");
            obj.set_accessibilitylabel("업체정보 변경신청");
            obj.set_accessibilitydescription("업체정보 변경신청 화면 이동");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","0","divH1:0",null,"303","30",null,"1400",null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine7","0","215",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine5","0","129",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine6","0","172",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("27");
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
            obj.set_accessibilitylabel("사업체명");
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
            obj.set_tooltiptext("전체법인전화번호");
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
            obj.set_accessibilitylabel("상위기관명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRprsvNm","staRprsvNm:7","179","236","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_tooltiptext("대표자명");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("대표자명");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtRdnmCd","staRdnmCd:7","222","80","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("21");
            obj.set_tooltiptext("우편번호");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("우편번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtDtlAddr","staDtlAddr:7","222",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("24");
            obj.set_textAlign("left");
            obj.set_tooltiptext("소재지");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("소재지");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("31");
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
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("법인등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new MaskEdit("mseBrno","staBrno:7","136","140","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("사업자등록번호");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("사업자등록번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtAddr","edtRdnmCd:3","222","536","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_tooltiptext("주소");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("주소");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine4","0","86",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("32");
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
            obj.set_taborder("33");
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

            obj = new Edit("edtFullCorpTelNo","staCorpTel:7","179","200","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_tooltiptext("전체법인전화번호");
            obj.set_maxlength("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("전체법인전화번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staLine7_00","0","258",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("staPsnAcntUnqno","0","258","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("25");
            obj.set_text("보유계정고유번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edtPsnAcntUnqno","157","265","600","30",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_tooltiptext("보유계정고유번호");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.set_cssclass("output");
            obj.set_accessibilitylabel("보유계정고유번호");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","0","divInst:0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderFile","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divH4","0","divComBtn1:0",null,"60","30",null,"1400",null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrChgHist","0","20","342","30",null,null,null,null,null,null,this.divH4.form);
            obj.set_taborder("0");
            obj.set_text("계정 담당자 변경이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divHstry","0","divH4:0",null,"313","30",null,"1400",null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInstChgHistList","0","0",null,null,"0","0",null,null,null,null,this.divHstry.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("both");
            obj.set_binddataset("dsHistList");
            obj.getSetter("griduserproperty").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell text=\"번호\" tooltiptext=\"번호\"/><Cell col=\"1\" text=\"변경구분\" tooltiptext=\"변경구분\"/><Cell col=\"2\" text=\"변경항목\" tooltiptext=\"변경항목\"/><Cell col=\"3\" text=\"변경전\" tooltiptext=\"변경전\"/><Cell col=\"4\" text=\"변경후\" tooltiptext=\"변경후\"/><Cell col=\"5\" text=\"처리구분\" tooltiptext=\"처리구분\"/><Cell col=\"6\" text=\"변경일시\" tooltiptext=\"변경일시\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"bind:no\" tooltiptext=\"번호\" accessibilitylabel=\"번호\"/><Cell col=\"1\" displaytype=\"combotext\" text=\"bind:chgClCd\" tooltiptext=\"변경구분\" combodataset=\"dsResult03\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" border=\"1px solid #dcdee4,1px solid #eeeff3,0px solid #dcdee4\" textAlign=\"center\" verticalAlign=\"middle\" accessibilitylabel=\"변경구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:chgArtclCd\" textAlign=\"center\" tooltiptext=\"변경항목\" displaytype=\"combotext\" combodataset=\"dsResult04\" combodatacol=\"cdKornNm\" combocodecol=\"cdMgno\" accessibilitylabel=\"변경항목\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:bchgCnText\" textAlign=\"center\" tooltiptext=\"변경전\" accessibilitylabel=\"변경전\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:achgCnText\" textAlign=\"center\" tooltiptext=\"변경후\" accessibilitylabel=\"변경후\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:aplyPrcsTypeCd\" displaytype=\"combotext\" combodataset=\"dsResult07\" combocodecol=\"cdMgno\" combodatacol=\"cdKornNm\" tooltiptext=\"처리구분\" accessibilitylabel=\"처리구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:chgDt\" textAlign=\"center\" edittype=\"none\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" tooltiptext=\"변경일시\" displaytype=\"mask\" accessibilitylabel=\"변경일시\"/><Cell row=\"1\" col=\"1\" text=\"bind:flnm\" cssclass=\"cell_WF_Point03\" textAlign=\"center\" tooltiptext=\"이름\" verticalAlign=\"middle\" accessibilitylabel=\"이름\"/></Band></Format></Formats>");
            this.divHstry.addChild(obj.name, obj);

            obj = new Div("divPaging","0","divHstry:25",null,"20","30",null,"1400",null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comPaging.xfdl");
            obj.set_text("  ");
            this.addChild(obj.name, obj);

            obj = new Div("divBlankGuide","0","divPaging:0",null,"30","30",null,"1400",null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFile.form.divRaonKSingle
            obj = new Layout("default","",0,0,this.divFile.form.divRaonKSingle.form,function(p){});
            this.divFile.form.divRaonKSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInst.form
            obj = new Layout("default","",0,0,this.divInst.form,function(p){});
            this.divInst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHstry.form
            obj = new Layout("default","",0,0,this.divHstry.form,function(p){});
            this.divHstry.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

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

            obj = new BindItem("item13","divInst.form.edtPsnAcntUnqno","value","dsInstInfo","psnAcntUnqno");
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
        this.registerScript("BzentMngS02.xfdl", function() {
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
        this.hDivHstry = 313;
        this.hDivH4 = 60;
        this.hDivPaging = 20;
        this.hDivComBtn1 = 32;
        this.wBtnList = 75;
        this.wBtnSave = 75;

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
         					,sMode:"V"
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

        	if(this.fvApp.User.roleIdMgno != "RL00000001") {		// 계정관리인, 계정대표자
        		this.fnChangeDiv();				// 정보관리 메뉴 클릭후 바로 set_url로 화면을 호출하나 M00에서 fnChangeDiv를 호출해도 제대로 동작안함 -> 화면이 다 그려지기 전이므로 -> 강제로 호출하기
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

        			// 기관관리번호
        			var instMgno = this.dsInstInfo.getColumn(0, "instMgno");
        			// 사업체분류
        			var instClsfCd = this.dsInstInfo.getColumn(0, "instClsfCd");
        			// 업체구분
        			var bzentClCd = this.dsInstInfo.getColumn(0, "bzentClCd");
        			// 계정상태구분코드 - 업체상태
        			var acntSttsClCd = this.dsInstInfo.getColumn(0, "acntSttsClCd");

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

        			// 계정 담당자 계정구분 코드값 조정
        			if(instClsfCd == "ICC0005") {
        				this.dsResult02.set_enableevent(false);

        				for (var i = this.dsResult02.rowcount - 1; i >= 0; i--) {
        					if(!['UCC0004', 'UCC0005'].includes(this.dsResult02.getColumn(i, "cdMgno"))) {
        						this.dsResult02.deleteRow(i);
        					}
        				}
        				this.dsResult02.set_enableevent(true);
        			}
        			// 후처리 코드
        			trace("[getCommonCode]this.dsResult02.getRowCount():"+this.dsResult02.getRowCount());

        			// 계정 담당자 계정상태 코드값 조정
        			if(instClsfCd == "ICC0005") {
        				this.dsResult01.set_enableevent(false);

        				for (var i = this.dsResult01.rowcount - 1; i >= 0; i--) {
        					if(['', 'ASC0001'].includes(this.dsResult01.getColumn(i, "cdMgno"))) {
        						this.dsResult01.deleteRow(i);
        					}
        				}
        				this.dsResult01.set_enableevent(true);
        			}

        			// 기관관리번호 세팅하기
        			this.dsCurInfo.clearData();
        			this.dsCurInfo.insertRow(0);
        			this.dsCurInfo.setColumn(0, "instMgno", instMgno);				// 전체관리자 권한은 기관관리번호 파라미터 필수

        			// 업체 변경이력 조회 호출
        			this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        			this.fnCallHistList();

        			// [single - RaonK] 파일 조회
        			var brdocFlmno = this.dsInstInfo.getColumn(0, "brdocFlmno");
        			brdocFlmno   = this.gfnIsNull(brdocFlmno)   ? "" : brdocFlmno;

        			trace("---- 첨부파일정보 - 사업자등록증 : 파일정보 호출 START ----");
        			this.divFile.form.divRaonKSingle.form.fnSearchFile(brdocFlmno);				// [single - RaonK] 파일 조회 - 신규업로드 시작하기

        			/* #################### 2. [레이어 제어]  START #################### */
        			/* [레이어 제어] 일반사업체만 보이기 */
        			if(instClsfCd == "ICC0005") {				// ▶▶▶▶ 보이기
        				this.divH4.set_height(this.hDivH4);
        				this.divHstry.set_height(this.hDivHstry);
        				this.divPaging.set_top("divHstry:25");
        				this.divPaging.set_height(this.hDivPaging);
        			} else {									// ▶▶▶▶ 숨기기
        				this.divH4.set_height(0);
        				this.divHstry.set_height(0);
        				this.divPaging.set_top("divHstry:0");
        				this.divPaging.set_height(0);
        			}

        			var comBtnCnt = 0;

        			// 전체관리자 권한만 목록버튼 모이기
        			if(this.fvApp.User.roleIdMgno == 'RL00000001') {
        				// 목록버튼 보이기
        				this.divComBtn1.form.btnList.set_width(this.wBtnList);
        				comBtnCnt++;
        			} else {
        				// 목록버튼 숨기기
        				this.divComBtn1.form.btnList.set_width(0);
        			}

        			// 전체관리자, 계정관리인, 게정대표자 권한 && 일반사업체 인 경우 계정 담당자 변경 가능 - 저장 버튼 보이기
        			if(acntSttsClCd != "ASC0001" && ['RL00000001', 'RL00000004', 'RL00000005'].includes(this.fvApp.User.roleIdMgno) && instClsfCd == "ICC0005") {
        				// 저장 버튼 보이기
        				this.divComBtn1.form.btnSave.set_width(this.wBtnSave);
        				comBtnCnt++;
        			} else {
        				// 저장 버튼 숨기기
        				this.divComBtn1.form.btnSave.set_width(0);
        			}

        			// 표시할 버튼이 존재한다면 버튼영역 확보하기
        			if(comBtnCnt > 0) {
        				this.divComBtn1.set_top("divGrid:20");
        				this.divComBtn1.set_height(this.hDivComBtn1);
        			} else {
        				this.divComBtn1.set_top("divGrid:0");
        				this.divComBtn1.set_height(0);
        			}

        			/* #################### 2. [레이어 제어]  END #################### */

        			/* #################### 3. resetScroll START #################### */
        			this.divComBtn1.form.resetScroll();
        			this.divH4.form.resetScroll();
        			this.divHstry.form.resetScroll();
        			this.divPaging.form.resetScroll();
        			this.divBlankGuide.form.resetScroll();
        			this.resetScroll();
        			/* #################### 3. resetScroll END #################### */


        			// 업체정보 변경신청 여부 - 현재 변경신청중에 있는가?
        			var aplyYn = this.dsInstInfo.getColumn(0, "aplyYn");

        			// 신청중이라면 업체정보 변경신청 버튼 숨기기
        			if(aplyYn == "Y") {
        				this.divH1.form.btnTopAplyInst.set_visible(false);
        				this.gfnShowMessage(this, ["Alert","업체정보 변경신청중 입니다."], "", function(svcid, variant) {
        				});
        			} else {
        				/* [계정관리인, 계정대표자] 권한사용자가 일반사업체가 비할당상태인 경우만 업체정보 변경신청 가능함 */
        				if(['RL00000004', 'RL00000005'].includes(this.fvApp.User.roleIdMgno) && instClsfCd == "ICC0005" && bzentClCd == "BCC0002") {
        					this.divH1.form.btnTopAplyInst.set_visible(true);
        				} else {
        					this.divH1.form.btnTopAplyInst.set_visible(false);
        				}
        			}

        			break;
        		case "selectInstChgHstryList" :
        			// 후처리 코드
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
        			break;
        		case "saveInstUserList" :
        			this.gfnShowMessage(this, "I000003", "", function(svcid, variant) {
        				if(variant == "OK") {
        					// 상세조회 호출
        					this.fnCallDtlInfo();
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
        	// 전체관리자 권한은 정보관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/selectInstMngDetail.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/selectInstMngDetail.irs";
        	}
         	objArgs.inds      		= "dsCurInfo=dsCurInfo";
         	objArgs.outds     		= "dsInstInfo=dsInstInfo dsUserListInfo=dsUserListInfo dsInstInfoFile=dsInstInfoFile";
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
        	// 전체관리자 권한은 정보관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		objArgs.url 			= "/adm/user/instMng/selectInstChgHstryList.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/biz/user/instMng/selectInstChgHstryList.irs";
        	}
         	objArgs.inds      		= "dsCurInfo=dsCurInfo dsPageInfo=dsPageInfo";
         	objArgs.outds     		= "dsHistList=dsHistList dsPageInfo=dsPageInfo";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };

        /**
         * @description 계정담당자 정보 저장
         */
        this.fnCallSaveList  = function()
        {
        	trace("계정담당자 정보 저장...");

        	var objArgs = {};
         	objArgs.svcId 			= "saveInstUserList";
        	// 전체관리자 권한은 정보관리 목록 화면이 나와야 됨
        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		objArgs.url 			= "/biz/inst/instMng/saveInstUserList.irs";
        	// 계정관리인, 계정대표자 권한은 소속 업체 상세화면이 나와야 됨
        	} else {												// 계정관리인, 계정대표자
        		objArgs.url 			= "/adm/inst/instMng/saveInstUserList.irs";
        	}
         	objArgs.inds      		= "dsUserListInfo=dsUserListInfo:U";
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

        	// 값 초기화 - 부모로 부터 넘어온 파라미터 데이터셋에 저장 하기
        	this.dsCurInfo.clearData();
        	this.dsCurInfo.insertRow(0);

        	if(this.fvApp.User.roleIdMgno == "RL00000001") {		// 전체관리자
        		this.dsCurInfo.setColumn(0, "instMgno", objArgs.instMgno);				// 전체관리자 권한은 기관관리번호 파라미터 필수
        	}

        	// 상세조회 호출
        	this.fnCallDtlInfo();

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn1_btnList_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.isReLoad	= "Y";
        	this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail01, objArgs);			// 정보관리 > 업체 목록
        };

        /**
         * @description 콤보박스 선택시 바로 반영되게
        */
        this.divGrid_grdUserList_oncloseup = function(obj,e)
        {
        	if(e.col == 3 || e.col == 10){
        		obj.updateToDataset();
        	}
        };

        /**
         * @description 계정 담당자 저장 버튼 클릭시
        */
        this.divComBtn1_btnSave_onclick = function(obj,e)
        {
        	if(this.dsUserListInfo.rowcount == 0) {
        		this.gfnShowMessage(this, ["Alert","저장할 대상이 존재하지 않습니다."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	var userRowCnt = 0;					// 선택된 계정대표자 건수
        	var changedRowCnt = 0;				// 선택된 행 건수
        	for (var i = 0; i < this.dsUserListInfo.rowcount; i++) {
        		var gridCmmCheck = this.dsUserListInfo.getColumn(i, "gridCmmCheck");
        		trace("[index]["+i+"][gridCmmCheck]["+gridCmmCheck+"]");
        		if(gridCmmCheck == "Y") {
        			changedRowCnt++;
        		}

        		var userClCd = this.dsUserListInfo.getColumn(i, "userClCd");
        		var cmmAcntSttsClCd = this.dsUserListInfo.getColumn(i, "cmmAcntSttsClCd");

        		if(userClCd == "UCC0005" && cmmAcntSttsClCd == "ASC0002") {
        			userRowCnt++;
        		}
        	}

        	if(changedRowCnt == 0) {
        		this.gfnShowMessage(this, "I000008", "", "");
        		return false;
        	}

        	if(userRowCnt != 1) {
        		this.gfnShowMessage(this, ["Alert","승인상태의 계정대표자가 지정되지 않았습니다.\n계정대표자를 선택하세요."], "", function(svcid, variant) {
        		});
        		return false;
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			this.fnCallSaveList();
        		}
        	});
        };


        /**
         * @description 그리드 셀 클릭
        */
        // this.divHstryDtlGrid_grdInstChgHistList_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	trace("[divList_grdList_oncellclick]e.cell:"+e.cell+"|e.row:"+e.row+"|e.col:"+e.col);
        //
        // 	// 사업자등록증 - 변경전, 변경후
        // 	var fileYn = this.dsHistDtlList.getColumn(e.row, "fileYn");
        // 	if(fileYn == "Y") {
        // 		// 변경전
        // 		if(e.cell == 4) {
        // 			var bchgCnOrgnlFileNm 	= this.dsHistDtlList.getColumn(e.row, "bchgCnOrgnlFileNm");
        // 			if(!this.gfnIsNull(bchgCnOrgnlFileNm)) {
        // 				var bchgCn 	= this.dsHistDtlList.getColumn(e.row, "bchgCn");
        // 				this.fnFileDownload(this, bchgCn);
        // 			}
        // 		}
        // 		// 변경후
        // 		if(e.cell == 6) {
        // 			var achgCnOrgnlFileNm 	= this.dsHistDtlList.getColumn(e.row, "achgCnOrgnlFileNm");
        // 			if(!this.gfnIsNull(achgCnOrgnlFileNm)) {
        // 				var achgCn 	= this.dsHistDtlList.getColumn(e.row, "achgCn");
        // 				this.fnFileDownload(this, achgCn);
        // 			}
        // 		}
        // 	}
        // };


        /**
         * @description 지정파일전체다운로드
         *				업무화면내부 파일목록정보 중 일부 선택적으로 다운로드 처리
        */
        // this.fnFileDownload = function(obj, chgCn)
        // {
        // 	var valueArray = chgCn.split(":");
        // 	var fileGroupMgno = valueArray[0];
        // 	var fileMgno = valueArray[1];
        // 	// 지정파일전체다운로드
        // 	// fileGroupMgno - 파일그룹키(fileGroupMgno)
        // 	// fileMgno - 파일순번키(fileMgno)
        // 	var arrFileListInfo = [
        // 		  { fileGroupMgno : fileGroupMgno, fileMgno : fileMgno}
        // 	];
        //
        // 	this.gfnCheckFileDownloadSvcCheck(obj, arrFileListInfo);
        // };


        /**
         * @description 그리드 셀값 변경시
        */
        this.dsUserListInfo_oncolumnchanged = function(obj,e)
        {
        	trace("[columnid]["+e.columnid+"][row]["+e.row+"]["+this.dsUserListInfo.getColumn(e.row, "userClCd")+"]["+this.dsUserListInfo.getOrgColumn(e.row, "userClCd")+"]");

        	// 일반사업체 계정구분 - 계정대표자로 변경시
        	if(
        		   this.dsUserListInfo.getColumn(e.row, "instClsfCd")  == "ICC0005"
        		&& this.dsUserListInfo.getColumn(e.row, "userClCd") == "UCC0005"
        	) {
        		for (var i = 0; i < this.dsUserListInfo.rowcount; i++) {

        			// 선택된게 제외하고
        			if(e.row == i) {
        				continue;
        			}

        			// 미승인 제외하고 나머지 계정관리인으로 일괄 변경
        			if(this.dsUserListInfo.getColumn(i, "acntSttsClCd") != "ASC0001") {
        				this.dsUserListInfo.setColumn(i, "userClCd", "UCC0004");
        			}
        		}
        	}

        	// 변경항목 표시 - 그리드
        	this.setEffectGrid();
        };

        /**
         * @description 변경항목 표시 - 그리드
        */
        this.setEffectGrid = function()
        {
        	this.dsUserListInfo.set_enableevent(false);

        	for (var i = 0; i < this.dsUserListInfo.rowcount; i++) {
        		// 값이 변경되었다면
        		if(
        			   this.dsUserListInfo.getColumn(i, "userClCd")      	!= this.dsUserListInfo.getOrgColumn(i, "userClCd")
        			|| this.dsUserListInfo.getColumn(i, "cmmAcntSttsClCd")  != this.dsUserListInfo.getOrgColumn(i, "cmmAcntSttsClCd")
        		) {
        			this.dsUserListInfo.setColumn(i, "gridCmmCheck", "Y");
        			trace("[변경됨]");
        		} else {
        			this.dsUserListInfo.setColumn(i, "gridCmmCheck", "N");
        			trace("[변경안됨]");
        		}
        	}
        	this.dsUserListInfo.set_enableevent(true);
        };

        /**
         * @description 업체정보 변경신청
        */
        this.divH1_btnTopAplyInst_onclick = function(obj,e)
        {
        	var instMgno = this.dsInstInfo.getColumn(0, "instMgno");

        	var objArgs = {};
        	objArgs.instMgno 	= instMgno;			// 기관관리번호

        	this.getOwnerFrame().form.divWork.form.fnMovePage(this.getOwnerFrame().form.divWork.form.divDetail03, objArgs);			// 정보관리 > 업체정보 변경신청 화면
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divH3.form.staUsrInfo.addEventHandler("onclick",this.divH3_00_00_staUsrInfo_onclick,this);
            this.divGrid.form.grdUserList.addEventHandler("oncloseup",this.divGrid_grdUserList_oncloseup,this);
            this.divComBtn1.form.btnList.addEventHandler("onclick",this.divComBtn1_btnList_onclick,this);
            this.divComBtn1.form.btnSave.addEventHandler("onclick",this.divComBtn1_btnSave_onclick,this);
            this.divH1.form.btnTopAplyInst.addEventHandler("onclick",this.divH1_btnTopAplyInst_onclick,this);
            this.divInst.form.staRdnmCd.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divInst.form.staDtlAddr.addEventHandler("onclick",this.divContent_divInst_sta12_00_00_00_onclick,this);
            this.divInst.form.staLine1.addEventHandler("onclick",this.divContent_divInst_staLine1_onclick,this);
            this.divInst.form.staInstRegistType.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.staGovInstYn.addEventHandler("onclick",this.divContent_divInst_staBzentNm00_onclick,this);
            this.divInst.form.sta_Label_Top.addEventHandler("onclick",this.divContent_divInst_sta_Label_Top_onclick,this);
            this.divInst.form.staPsnAcntUnqno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divH2.form.staHeaderFile.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.dsUserListInfo.addEventHandler("oncolumnchanged",this.dsUserListInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("BzentMngS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
