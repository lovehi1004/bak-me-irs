(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("신청완료");
            this.set_titletext("Top > 정보수정 > 사용자 정보수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,536);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd01", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"처리자\" type=\"STRING\" size=\"256\"/><Column id=\"처리결과\" type=\"STRING\" size=\"256\"/><Column id=\"처리일자\" type=\"STRING\" size=\"256\"/><Column id=\"관장기관\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2020-02-19 15:59</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">심의승인</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">3</Col></Row><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2019-12-27 13:43</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">현재문서</Col><Col id=\"번호\">2</Col></Row><Row><Col id=\"구분\">최초신청</Col><Col id=\"처리자\">현대제철 주식회사</Col><Col id=\"처리일자\">2019-12-18 16:29</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">연료 전환사업의 방법론 [1차]</Col><Col id=\"Column1\">방법론 조회</Col></Row><Row><Col id=\"Column0\">연료 전환사업의 방법론 [2차]</Col><Col id=\"Column1\">밥법론 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01_00", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01_00_00", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","133","0",null,"59","133",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderUser","0","20","342","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사용자정보");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divInst","133","divH1:0",null,"44","133",null,"1200",null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta10","33.38%","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("3");
            obj.set_text("기관/업체 이름");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edt01","157","7",null,"30","sta10:7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("2");
            obj.set_value("온실가스종합정보센터");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("온실가스종합정보센터");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta10_00","66.77%","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("6");
            obj.set_text("대표자 이름");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edt02","sta10:7","7",null,"30","sta10_00:7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("5");
            obj.set_value("온실가스종합정보센터");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("온실가스종합정보센터");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divInst.form);
            obj.set_taborder("1");
            obj.set_text("대상기관");
            obj.set_cssclass("sta_WF_Label");
            this.divInst.addChild(obj.name, obj);

            obj = new Edit("edt03","sta10_00:7","6",null,"30","7",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("7");
            obj.set_value("정은해");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("정은해");
            this.divInst.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divInst.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divInst.addChild(obj.name, obj);

            obj = new Div("divH2","133","divInst:0",null,"59","133",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staHeaderUser","0","20","342","30",null,null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("사용자 정보수정");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("사용자정보");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divUser","133","divH2:0",null,"302","133",null,"1200",null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staLine2","0","43",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine1","0","0",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05","0","43","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("10");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00","0","86","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("12");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine4","0","129",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00","0","129","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("14");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine5","0","172",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00","0","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("17");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_01","650","172","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("19");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00","157","179","486","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("18");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine6","0","215",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00","0","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine7","0","258",null,"44","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_00","0","258","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("36");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta12_00_00_00_00_00","650","258","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("39");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta12_01","650","0","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt001","157","7","486","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_value("suyeong67");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("suyeong67");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt002","807","7","486","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("8");
            obj.set_value("이수영");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("이수영");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd","157","50","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("11");
            obj.set_textAlign("left");
            obj.set_tooltiptext("현재 비밀번호");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호");
            obj.set_tooltiptype("default");
            obj.set_inputtype("symbol,numberandenglish");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd00","157","93","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_tooltiptext("새 비밀번호");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호");
            obj.set_tooltiptype("default");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtPswd00_00","156","136","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("15");
            obj.set_textAlign("left");
            obj.set_tooltiptext("새 비밀번호 확인");
            obj.set_inputtype("symbol,numberandenglish");
            obj.set_maxlength("20");
            obj.set_password("true");
            obj.set_accessibilitylabel("비밀번호");
            obj.set_tooltiptype("default");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00","807","179","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("20");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_02","650","215","150","44",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("29");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter1","234","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("24");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter2","327","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("26");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelTlpno","250","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화국번호");
            obj.set_accessibilitydescription("법인전화국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDdd","157","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화지역번호");
            obj.set_accessibilitydescription("법인전화지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelPhino","343","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화개별번호");
            obj.set_accessibilitydescription("법인전화개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter1_00","883","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("31");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDelemiter2_00","977","222","16","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("33");
            obj.set_value("-");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("-");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelPhino00","992","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("34");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화개별번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화개별번호");
            obj.set_accessibilitydescription("법인전화개별번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelTlpno00","899","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("32");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화국번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화국번호");
            obj.set_accessibilitydescription("법인전화국번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edtCorpTelDdd00","807","222","70","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            obj.set_tooltiptext("법인전화지역번호");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_accessibilitylabel("법인전화지역번호");
            obj.set_accessibilitydescription("법인전화지역번호");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00","807","265","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("40");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static00_00","426","222","204","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("28");
            obj.set_text("숫자만 입력하세요");
            obj.set_cssclass("sta_WF_Info");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btn01","1067","222","80","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("35");
            obj.set_text("휴대폰인증");
            this.divUser.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_01","157","265","255","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("37");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","426","265","204","30",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("38");
            obj.set_text("숫자만 입력하세요");
            obj.set_cssclass("sta_WF_Info");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staLine3","426","93",null,"30","7",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("41");
            obj.set_text("비밀번호는 9자리 이상으로 숫자, 영문자, 특수문자(~,!,@,#,$,%,^,&,*,-,+,?)가 각각 1자이상 반드시 포함되어있어야 합니다.");
            obj.set_cssclass("sta_WF_Info");
            this.divUser.addChild(obj.name, obj);

            obj = new Div("divBtn","133","divUser:20",null,"50","133",null,"1200",null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","574","0","75","32",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_tooltiptext("신청");
            obj.set_accessibilitylabel("신청");
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
            obj = new BindItem("item0","divUser.form.edtPswd","value","dsPswd","pswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContent.form.divUser.form.edtPswdConfirm","value","dsPswd","pswdConfirm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divUser.form.edtCorpTelTlpno","value","dsInstInfo","corpTelTlpno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUser.form.edtCorpTelDdd","value","dsInstInfo","corpTelDdd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUser.form.edtCorpTelPhino","value","dsInstInfo","corpTelPhino");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comUserInfoStep1.xfdl","");
        this.registerScript("comUserInfoStep1.xfdl", function() {
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

        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


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
        	this.getOwnerFrame().form.fnClose();		// 메인화면으로 이동
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divH1.form.staHeaderUser.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divInst.form.edt01.addEventHandler("onchanged",this.div01_edt02_00_onchanged,this);
            this.divH2.form.staHeaderUser.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.divUser.form.edt001.addEventHandler("onchanged",this.div01_edt02_00_onchanged,this);
            this.divUser.form.edt002.addEventHandler("onchanged",this.div01_edt02_00_onchanged,this);
            this.divUser.form.edtCorpTelDelemiter1.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtCorpTelDelemiter2.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtCorpTelDelemiter1_00.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divUser.form.edtCorpTelDelemiter2_00.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_onchanged,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divContent_btnSave_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
        };
        this.loadIncludeScript("comUserInfoStep1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
