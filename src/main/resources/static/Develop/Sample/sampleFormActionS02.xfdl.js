(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionS02");
            this.set_titletext("화면전환샘플 (등록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"처리자\" type=\"STRING\" size=\"256\"/><Column id=\"처리결과\" type=\"STRING\" size=\"256\"/><Column id=\"처리일자\" type=\"STRING\" size=\"256\"/><Column id=\"관장기관\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2020-02-19 15:59</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">심의승인</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">3</Col></Row><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2019-12-27 13:43</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">현재문서</Col><Col id=\"번호\">2</Col></Row><Row><Col id=\"구분\">최초신청</Col><Col id=\"처리자\">현대제철 주식회사</Col><Col id=\"처리일자\">2019-12-18 16:29</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">연료 전환사업의 방법론 [1차]</Col><Col id=\"Column1\">방법론 조회</Col></Row><Row><Col id=\"Column0\">연료 전환사업의 방법론 [2차]</Col><Col id=\"Column1\">밥법론 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList04", this);
            obj._setContents("<ColumnInfo><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList05", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div01_00_00_00","0","1124",null,"635","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","301",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","172",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta06","-36","43",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","129","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","172","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","301","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("인증유효기간 유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_00","157","436",null,"30","10",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("12");
            obj.set_value("에너지 > 에너지세부분야");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("에너지 > 에너지세부분야");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","-36","86",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","783","86","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("사업규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_01","0","215",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_01","0","215","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("착수예정일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","-36","258",null,"44","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_02_00","0","258","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","783","258","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01","783","301","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("21");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","0","344",null,"117","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","344","150","117",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00","783","344","150","44",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("24");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01_00_00","783","387",null,"74","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00_00","783","387","150","74",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("26");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","157","7","699","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            var div01_00_00_00_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_rdo00_innerdataset", obj);
            div01_00_00_00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">사전승인신청</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">심의신청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기승인 건 신청(협의체 또는 감독기구)</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_rdo00_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","50","517","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn01","677","50","101","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("29");
            obj.set_text("협정·약정 검색");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","940","50","227","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_innerdataset", obj);
            div01_00_00_00_form_cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제6.2조</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제6.4조</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타협정</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","940","93","227","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_00_innerdataset", obj);
            div01_00_00_00_form_cbo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">소규모</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">극소규모</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","93","227","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_00_00_innerdataset", obj);
            div01_00_00_00_form_cbo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지원사업</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">구매사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투자사업</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","136","1193","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("33");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","179","1193","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("34");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1360","136","180","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("35");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","1360","179","180","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("36");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","157","222","150","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00","157","265","619","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("38");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00","940","265",null,"30","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("39");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","157","308","383","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            var div01_00_00_00_form_rdo00_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_rdo00_00_innerdataset", obj);
            div01_00_00_00_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">갱신형</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">고정형</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_rdo00_00_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00","1086","308","16","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("41");
            obj.set_value("~");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("~");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal00","940","308","140","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("42");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","1103","308","140","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("43");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00","157","370","300","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("44");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00","157","406","300","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("45");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_01","940","351",null,"30","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("46");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00_00","940","394",null,"30","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("47");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","940","427",null,"30","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("48");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","460",null,"175","0",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","460","150","175",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("50");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01","157","473","227","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_00_00_00_00_00_01_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_00_00_00_00_00_01_innerdataset", obj);
            div01_00_00_00_form_cbo00_00_00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">에너지수송</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_00_00_00_00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01_00","387","473","227","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset", obj);
            div01_00_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">에너지수송</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"473","98","30","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("53");
            obj.set_text("방법론 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","511",null,"116","7",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("54");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"1290\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"방법론명\" cssclass=\"Cell_NoLine\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" padding=\"0px 7px\" text=\"연료 전환사업의 방법론 [1차]\"/></Band></Format></Formats>");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"473","98","30","108",null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("55");
            obj.set_text("방법론 추가");
            obj.set_cssclass("btn_WF_Add");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_00_00","460","370","140","30",null,null,null,null,null,null,this.div01_00_00_00.form);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_form_cbo00_00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_form_cbo00_00_00_00_00_00_00_00_innerdataset", obj);
            div01_00_00_00_form_cbo00_00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">MW</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Gwh</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_form_cbo00_00_00_00_00_00_00_00_innerdataset);
            obj.set_text("MW");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00.addChild(obj.name, obj);

            obj = new Div("div01","0","60",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7","932","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("현대제철 주식회사");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","1253","7",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_value("1234567890");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1234567890");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","1096","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","1253","50","306","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_value("매니저");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("매니저");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","1096","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","777","50","311","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_value("탄소중립기획팀");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("탄소중립기획팀");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","620","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01","306","50","307","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_value("홍길동");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","777","93",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_value("aaa@naver.com");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("aaa@naver.com");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","620","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","306","93","307","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_value("01-1111-2222");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("01-1111-2222");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","87",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00","149","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00","0","250",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","7",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","50",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo02","157","93","230","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_cbo02_innerdataset = new nexacro.NormalDataset("div01_00_form_cbo02_innerdataset", obj);
            div01_00_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">단일감축사업</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">묶음감축사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">프로그램감축사업</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_cbo02_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","210","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00_00","0","440",null,"390","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","215",null,"175","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","172",null,"44","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","129","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("7");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","172","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("9");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","215","150","175",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("10");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00","303","179","16","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("13");
            obj.set_value("~");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("~");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","157","7","699","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            var div01_00_00_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_00_00_form_rdo00_innerdataset", obj);
            div01_00_00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">사전승인신청</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">심의신청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기승인 건 신청(협의체 또는 감독기구)</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_form_rdo00_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","50","517","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("btn01","677","50","101","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("16");
            obj.set_text("협정·약정 검색");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta12","783","43","150","44",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("17");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","940","50","227","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_form_cbo00_innerdataset = new nexacro.NormalDataset("div01_00_00_form_cbo00_innerdataset", obj);
            div01_00_00_form_cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제6.2조</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제6.4조</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타협정</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_form_cbo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","93","1193","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("19");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","332","1014","61","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("20");
            obj.set_text("체크");
            obj.set_value("false");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1360","93","180","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("21");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","136","1193","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("22");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","1360","136","180","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("23");
            obj.set_text("위 신청사업명과 동일");
            obj.set_value("false");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal00","157","179","140","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("24");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","320","179","140","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("25");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01","157","228","227","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_form_cbo00_00_00_00_00_00_01_innerdataset = new nexacro.NormalDataset("div01_00_00_form_cbo00_00_00_00_00_00_01_innerdataset", obj);
            div01_00_00_form_cbo00_00_00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">에너지수송</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_form_cbo00_00_00_00_00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01_00","387","228","227","30",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset = new nexacro.NormalDataset("div01_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset", obj);
            div01_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">에너지수송</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_form_cbo00_00_00_00_00_00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"228","98","30","7",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("28");
            obj.set_text("방법론 삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","266",null,"116","7",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("29");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"1290\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"방법론명\" cssclass=\"Cell_NoLine\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" padding=\"0px 7px\" text=\"연료 전환사업의 방법론 [1차]\"/></Band></Format></Formats>");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"228","98","30","108",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("30");
            obj.set_text("방법론 추가");
            obj.set_cssclass("btn_WF_Add");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","0","400","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("프로그램 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","0","850","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00_00_01","0","890",null,"174","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\" cssclass=\"Cell_WF_Delete\"/></Band></Format></Formats>");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","66","30",null,null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("파일찾기");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","7","743","30",null,null,null,null,null,null,this.div01_00_00_01.form);
            obj.set_taborder("7");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.div01_00_00_01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","0","1084","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("단위 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","2096",null,"137","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList05");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"대표\"/><Cell col=\"2\" text=\"사업수행자\"/><Cell col=\"3\" text=\"국내/해외&#13;&#10;구분\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 감축량&#13;&#10;(사업계획서의 연평균 온실가스배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"환산계수\"/><Cell col=\"7\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt; 연평균 온실가스 배출 감축량&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\" displaytype=\"decoratetext\"/><Cell col=\"8\" text=\"사용자&#13;&#10;동의여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:대표\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:사업수행자\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:국내해외구분\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:사업자등록번호\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:환산계수\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:연평균온실가스배출감축량\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:사용자동의여부\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","2056","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사업 수행자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00_00_02","0","2559",null,"205","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("6");
            obj.set_value("1차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1차");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("2");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"62","10",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("7");
            obj.set_value("문서보완해주세요.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완해주세요.");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("4");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("8");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("9");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","168",null,"30","10",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("11");
            obj.set_value("평가결과.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("평가결과.HWP");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("12");
            obj.set_text("평가일자");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50",null,"30","7",null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("13");
            obj.set_value("2023-08-02");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-02");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","50","174","30",null,null,null,null,null,null,this.div01_00_00_02.form);
            obj.set_taborder("14");
            obj.set_value("문서보완요청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완요청");
            this.div01_00_00_02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02","0","2519","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("평가결과");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","2784",null,"32","32",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","75","32","78",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"0","88","32","247",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00",null,"0","88","32","156",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("3");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Div("div01_00_00_01_01","0","1819",null,"217","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\" cssclass=\"Cell_WF_Delete\"/></Band></Format></Formats>");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","66","30",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("6");
            obj.set_text("파일찾기");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","7","743","30",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("7");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","173",null,"44","0",null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","173","150","44",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("9");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new FileUpload("fud00_00","157","180","743","30",null,null,null,null,null,null,this.div01_00_00_01_01.form);
            obj.set_taborder("10");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.div01_00_00_01_01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_01","0","1779","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"2058","122","30","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사업수행자 삭제");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"2058","122","30","155",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("사업수행자 추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00_00_00_00","0","2253",null,"246","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","202",null,"44","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta06","-36","43",null,"44","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("국내/해외 구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","0","86",null,"117","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","86","150","117",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00","783","86","150","44",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01_00_00","783","129",null,"74","0",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00_00","783","129","150","74",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","50","514","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn01","674","50","102","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("사업수행자 검색");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00","157","112","300","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("13");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_00","460","112","140","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_00_form_cbo00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_00_00_00_form_cbo00_00_00_00_00_00_00_innerdataset", obj);
            div01_00_00_00_00_form_cbo00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">MW</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Gwh</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_00_form_cbo00_00_00_00_00_00_00_innerdataset);
            obj.set_text("MW");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00","157","148","300","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_textAlign("right");
            obj.set_value("tCO2-eq");
            obj.set_text("tCO2-eq");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_01","940","93",null,"30","7",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("16");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00_00","940","136",null,"30","7",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("17");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","940","169",null,"30","7",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01_01","157","7","227","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_00_00_00_form_cbo00_00_00_00_00_00_01_01_innerdataset = new nexacro.NormalDataset("div01_00_00_00_00_form_cbo00_00_00_00_00_00_01_01_innerdataset", obj);
            div01_00_00_00_00_form_cbo00_00_00_00_00_00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">국내</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">해외</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_00_00_00_form_cbo00_00_00_00_00_00_01_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01","940","50",null,"30","7",null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","202","150","44",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("21");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","157","209","180","30",null,null,null,null,null,null,this.div01_00_00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("동의");
            obj.set_value("false");
            this.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn00","310","12","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("부모(M00) 참고1");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","470","12","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("부모(M00) 참고2");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","631","12","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("divReg 참고 1");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","776","12","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("divReg 참고 2");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCombo01","1061","12","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("dsCombo01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","916","12","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("부모(M00) 공통코드\r\n innerDataset 처리");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","1202","12","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("combo값 체크");
            this.addChild(obj.name, obj);

            obj = new Static("stcBlankGuide","5","divComBtn:0",null,"30","30",null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01_00_00_00.form
            obj = new Layout("default","",0,0,this.div01_00_00_00.form,function(p){});
            this.div01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00_00.form
            obj = new Layout("default","",0,0,this.div01_00_00.form,function(p){});
            this.div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00_00_01.form
            obj = new Layout("default","",0,0,this.div01_00_00_01.form,function(p){});
            this.div01_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00_00_02.form
            obj = new Layout("default","",0,0,this.div01_00_00_02.form,function(p){});
            this.div01_00_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00_00_01_01.form
            obj = new Layout("default","",0,0,this.div01_00_00_01_01.form,function(p){});
            this.div01_00_00_01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.div01_00_00_00_00.form,function(p){});
            this.div01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFormActionS02.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionS02 Form
        * FILE NAME     : sampleFormActionS02.xfdl
        * DESCRIPTION   : 화면전환샘플 (등록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	- 부모(M00) 공통코드  innerDataet 처리

        */


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
        	// TODO

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
        	trace("[sampleFormActionS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

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
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/




        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc 등록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param {object} objParam 전달 param object
         * @return N/A
        */
        this.fnChangeDiv = function(objParam)
        {
        	// TODO
        	trace("[sampleFormActionS02]fnChangeDiv =========================");
        	trace("objParam.param1:"+objParam.param1);
        	trace("objParam.param2:"+objParam.param2);

        	this.scrollTo(0,0);
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
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        /*
        	개발시 각 div (부모(M00) , divDetail) 접근 참고용
        */
        this.btn00_onclick = function(obj,e)
        {
        	// 부모(M00) > dsCombo01 정보 참고방법 1
        	// this.getOwnerFrame().form.divWork.form : sampleFormActionM00.xfdl 화면의 this 와 동일
        	trace("this.getOwnerFrame().form.divWork.form.dsCombo01.saveXML():\n"+this.getOwnerFrame().form.divWork.form.dsCombo01.saveXML());
        };

        this.btn01_onclick = function(obj,e)
        {
        	// 부모(M00) > dsCombo01 정보 참고방법 2
        	// this.parent.parent : sampleFormActionM00.xfdl 화면의 this 와 동일
        	trace("this.parent.parent.dsCombo01.saveXML():\n"+this.parent.parent.dsCombo01.saveXML());
        };

        this.btn02_onclick = function(obj,e)
        {
        	// divDetail > dsList01 정보 참고
        	// this.getOwnerFrame().form.divWork.form.divDetail.form : sampleFormActionS01.xfdl 화면의 this 와 동일
        	trace("this.getOwnerFrame().form.divWork.form.divDetail.form.dsList01.saveXML():\n"+this.getOwnerFrame().form.divWork.form.divDetail.form.dsList01.saveXML());
        };

        this.btn03_onclick = function(obj,e)
        {
        	// divDetail > dsList01 정보 참고
        	// this.parent.parent.divDetail.form : sampleFormActionS01.xfdl 화면의 this 와 동일
        	trace("this.parent.parent.divDetail.form.dsList01.saveXML():\n"+this.parent.parent.divDetail.form.dsList01.saveXML());
        };

        this.btn04_onclick = function(obj,e)
        {
        	// 부모(M00) 의 dsCombo01 을 combo innerDataset 으로 연결한 후 정보 확인
        	trace("this.cboCombo01.value:"+this.cboCombo01.value+"|this.cboCombo01.text:"+this.cboCombo01.text);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("sampleFormActionS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
