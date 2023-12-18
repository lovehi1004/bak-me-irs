(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionS01");
            this.set_titletext("화면전환샘플 (상세)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
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
            
            // UI Components Initialize
            obj = new Div("Div00","0","2477",null,"552","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div07","20","60",null,"205","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("6");
            obj.set_value("사전 승인신청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전 승인신청");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("2");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"62","10",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("7");
            obj.set_value("문서보완해주세요.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완해주세요.");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("4");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("8");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("9");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","168",null,"30","10",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("11");
            obj.set_value("평가결과.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("평가결과.HWP");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("12");
            obj.set_text("평가일자");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50",null,"30","6",null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("13");
            obj.set_value("2023-08-02");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-02");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","50","174","30",null,null,null,null,null,null,this.Div00.form.div07.form);
            obj.set_taborder("14");
            obj.set_value("문서보완요청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완요청");
            this.Div00.form.div07.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02","20","20","342","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("평가결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div08","20","325",null,"205","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("6");
            obj.set_value("1차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1차");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("2");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("4");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("7");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("8");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","50","227","30",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("10");
            obj.set_text("문서보완요청");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","93",null,"62","7",null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("투비\n투비");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","168","620","30",null,null,null,null,null,null,this.Div00.form.div08.form);
            obj.set_taborder("12");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div00.form.div08.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00","20","285","342","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("평가결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div05","0","1389",null,"594","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","430",null,"164","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","301",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","172",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta06","-36","43",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div05.form);
            obj.set_taborder("6");
            obj.set_value("사전 승인신청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전 승인신청");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","136","1399","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("7");
            obj.set_value("biz name");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("biz name");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("4");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","129","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("8");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","172","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("9");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","179","1399","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("11");
            obj.set_value("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("베트남 국제감축사업");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","301","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("12");
            obj.set_text("인증유효기간 유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","430","150","164",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("13");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00","157","308","233","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("16");
            obj.set_value("갱신형");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("갱신형");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("17");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","50","117","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("45");
            obj.set_text("한국-베트남 감축");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            this.div05.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","50","66","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("18");
            obj.set_text("협정조회");
            obj.set_fittocontents("width");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50","616","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("19");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div05.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","471",null,"115","7",null,null,null,null,null,this.div05.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1000\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/><Cell col=\"1\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" text=\"방법론조회\"/></Band></Format></Formats>");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_00","157","436",null,"30","10",null,null,null,null,null,this.div05.form);
            obj.set_taborder("21");
            obj.set_value("에너지 > 에너지세부분야");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("에너지 > 에너지세부분야");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta06_00","-36","86",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("23");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","783","86","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("24");
            obj.set_text("사업유형 /규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_02","157","93","616","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("25");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","940","93","616","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("26");
            obj.set_value("단일감축사업 / 일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업 / 일반");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07_00_01","0","215",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_01","0","215","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("28");
            obj.set_text("착수예정일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_01","157","222","1402","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("29");
            obj.set_value("2023.08.01");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023.08.01");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","-36","258",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_02_00","0","258","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("31");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_02_00","157","265","616","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("32");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","783","258","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("33");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00","940","265","616","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("34");
            obj.set_value("단일감축사업 / 일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업 / 일반");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01","783","301","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("35");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01","940","308","620","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("36");
            obj.set_value("2023.08.01 ~ 2030.12.31");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023.08.01 ~ 2030.12.31");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","0","344",null,"87","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","344","150","87",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("38");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00","783","344","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("39");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_Label");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00","940","351","619","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("40");
            obj.set_value("MW * 2");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("MW * 2");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01_00_00","825","387",null,"44","0",null,null,null,null,null,this.div05.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00_00","940","394","619","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("42");
            obj.set_value("환산근거를 첨부하였습니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("환산근거를 첨부하였습니다.");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01_00_00","783","387","150","44",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("43");
            obj.set_text("환산 근거");
            obj.set_cssclass("sta_WF_Label");
            this.div05.addChild(obj.name, obj);

            obj = new Static("Static00","157","353","120","60",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("44");
            obj.set_text("500 MW\r\n1,000 tCO2-eq");
            obj.set_cssclass("output");
            this.div05.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","60",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList01");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"처리결과\"/><Cell col=\"4\" text=\"처리일자\"/><Cell col=\"5\" text=\"관장기관\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:번호\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:구분\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:처리자\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:처리결과\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:처리일자\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:관장기관\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:선택\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","20","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","293",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","1096","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7","933","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("현대제철 주식회사");
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

            obj = new Static("sta15","1096","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","1253","50",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_value("매니저");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("매니저");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","619","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","776","50","314","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_value("탄소중립기획팀");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("탄소중립기획팀");
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

            obj = new Static("sta17_00","619","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","776","93",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_value("aaa@naver.com");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("aaa@naver.com");
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

            obj = new Static("sta00","0","253","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","153","22","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00",null,"255","71","30","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00_00",null,"255","115","30","104",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("단위사업 등록");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00_00_00",null,"255","130","30","222",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사업 비공개 신청");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00_00_00_00",null,"255","100","30","355",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("보고서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.addChild(obj.name, obj);

            obj = new Div("div02","0","483",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_value("BIZ NAME");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("BIZ NAME");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_01","157","50",null,"30","10",null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_value("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("베트남 국제감축사업");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"30","10",null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_value("프로그램 감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("프로그램 감축사업");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","44",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_text("사업유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","129","150","44",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","136",null,"30","10",null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_value("심의승인");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("심의승인");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","443","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신청 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div03","0","716",null,"379","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","215",null,"164","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","172",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_value("사전 승인신청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전 승인신청");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("7");
            obj.set_value("biz name");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("biz name");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","129","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","136",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_value("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("베트남 국제감축사업");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","172","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","215","150","164",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("13");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00","157","179",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("16");
            obj.set_value("2023-08-10 ~ 2023-09-30");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-10 ~ 2023-09-30");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("17");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("19");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","256",null,"115","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsList02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1000\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/><Cell col=\"1\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" text=\"방법론조회\"/></Band></Format></Formats>");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_00","157","221",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("21");
            obj.set_value("에너지 > 에너지세부분야");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("에너지 > 에너지세부분야");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","50","141","30",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("22");
            obj.set_text("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","50","66","30",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("18");
            obj.set_text("협정조회");
            obj.set_fittocontents("width");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","0","676","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("프로그램감축 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","0","1115","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("첨부파일 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div04","0","1155",null,"174","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","7","113","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("8");
            obj.set_text("사업계획서.HWP");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            this.div04.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","7","66","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("5");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div04.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.div04.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div04.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","90","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("7");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("3");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","0","1349","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("단위 사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div06","0","2043",null,"217","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.div06.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div06.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div06.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","7","113","30",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("11");
            obj.set_text("사업계획서.HWP");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            this.div06.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","7","66","30",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("5");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.div06.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.div06.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div06.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","90","30",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("7");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","173",null,"44","0",null,null,null,null,null,this.div06.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div06.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","180","143","30",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("9");
            obj.set_value("환산근거자료.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("환산근거자료.HWP");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","173","150","44",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("10");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00","0","2003","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("첨부파일 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","2320",null,"137","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("dsList04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"대표\"/><Cell col=\"1\" text=\"사업수행자\"/><Cell col=\"2\" text=\"국내/해외&#13;&#10;구분\"/><Cell col=\"3\" text=\"사업자등록번호\"/><Cell col=\"4\" text=\"연평균 온실가스 배출 감축량&#13;&#10;(사업계획서의 연평균 온실가스배출 감축량 입력)\"/><Cell col=\"5\" text=\"환산계수\"/><Cell col=\"6\" text=\"연평균 온실가스 배출 감축량&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\"/><Cell col=\"7\" text=\"사용자동의여부\"/></Band><Band id=\"body\"><Cell text=\"bind:대표\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:사업수행자\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:국내해외구분\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:사업자등록번호\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:환산계수\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:연평균온실가스배출감축량\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:사용자동의여부\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","2280","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("사업 참가자 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","6208",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","88","32","78",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("착수보고");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"0","114","32","169",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("평가결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"0","88","32","286",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("3");
            obj.set_text("이의신청");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00",null,"0","140","32","377",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("4");
            obj.set_text("사전심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00",null,"0","75","32","520",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("5");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00",null,"0","114","32","598",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("6");
            obj.set_text("착수지연보고");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00_00",null,"0","140","32","715",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("7");
            obj.set_text("착수지연 문서보완");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"0","101","32","858",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("8");
            obj.set_text("참여자확인");
            obj.set_cssclass("btn_WF_Crud");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","3049",null,"953","30",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div09","20","60",null,"205","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("6");
            obj.set_value("2차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2차");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("7");
            obj.set_text("사전심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("8");
            obj.set_text("사전심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","50","171","30",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("10");
            obj.set_value("사전심의승인");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전심의승인");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("11");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50",null,"30","6",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("12");
            obj.set_value("2023-08-02");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-02");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"62","10",null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("13");
            obj.set_value("사전 심의승인합니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사전 심의승인합니다.");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01","157","168","143","30",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("14");
            obj.set_value("사업계획서.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사업계획서.HWP");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Button("btn01","298","168","66","30",null,null,null,null,null,null,this.Div00_00.form.div09.form);
            obj.set_taborder("15");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div00_00.form.div09.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_00","20","20","342","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("사전심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div10","20","325",null,"162","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","118",null,"44","0",null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta03","0","75",null,"44","0",null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta02","0","75","150","44",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("2");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta08","0","118","150","44",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("4");
            obj.set_text("이의신청일자");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","0","150","76",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("6");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","7",null,"62","10",null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("7");
            obj.set_value("이의를 신청합니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("이의를 신청합니다.");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01","157","82","143","30",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("8");
            obj.set_value("이의신청파일.hwp");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("이의신청파일.hwp");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Button("btn01","298","83","66","30",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01_00","157","125","143","30",null,null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("10");
            obj.set_value("2023-08-13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-13");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00.form.div10.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.form.div10.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_01","20","285","342","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div11","20","547",null,"119","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","75",null,"44","0",null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","0","150","76",null,null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("2");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","75","150","44",null,null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("3");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","7",null,"62","7",null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","82","620","30",null,null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("6");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00.form.div11.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.form.div11.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_02","20","507","342","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div12","20","726",null,"205","18",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("6");
            obj.set_value("2차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2차");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("7");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("8");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","50","227","30",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("10");
            obj.set_text("사전심의승인");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","93",null,"62","7",null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","168","620","30",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("12");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_taborder("13");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("14");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","940","50","150","30",null,null,null,null,null,null,this.Div00_00.form.div12.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00.form.div12.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03","20","686","342","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("사전심의결과 등록 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","0","4022",null,"466","30",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00_00_02_00_03_00","20","60",null,"162","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","118",null,"44","0",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("4");
            obj.set_text("심의의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","118","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("5");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","0","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("7");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("8");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7","616","30",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("9");
            obj.set_value("심의승인");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("심의승인");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","7",null,"30","10",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("10");
            obj.set_value("2023-08-16");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-16");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","50",null,"62","10",null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("11");
            obj.set_value("승인합니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("승인합니다.");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01","157","125","143","30",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("12");
            obj.set_value("심의승인결과.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("심의승인결과.HWP");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Button("btn01","308","125","66","30",null,null,null,null,null,null,this.Div00_00_00.form.div01_00_00_02_00_03_00.form);
            obj.set_taborder("13");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div00_00_00.form.div01_00_00_02_00_03_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_00","20","20","342","30",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("div13","20","282",null,"162","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","118",null,"44","0",null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta06","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta08","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("2");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("4");
            obj.set_text("심의의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","118","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("5");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","0","150","44",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("7");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("8");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","7","227","30",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("9");
            obj.set_text("사전심의승인");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","940","7","150","30",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","50",null,"62","7",null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","125","620","30",null,null,null,null,null,null,this.Div00_00_00.form.div13.form);
            obj.set_taborder("12");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div00_00_00.form.div13.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_00_00","20","242","342","30",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("심의결과 등록 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","0","4508",null,"1170","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div14","20","60",null,"205","20",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("6");
            obj.set_value("1차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1차");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("2");
            obj.set_text("검토차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("4");
            obj.set_text("검토처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("7");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("8");
            obj.set_text("검토파일 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","157","50","171","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("10");
            obj.set_value("문서보완요청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완요청");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","43","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("11");
            obj.set_text("검토일자 ");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","940","50",null,"30","10",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("12");
            obj.set_value("2023-08-16");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-16");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"62","10",null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("13");
            obj.set_value("문서를 보완해주세요");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서를 보완해주세요");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01","157","168","143","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("14");
            obj.set_value("문서보완요청.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완요청.HWP");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Button("btn01","318","168","66","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div14.form);
            obj.set_taborder("15");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.form.div14.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_00_00","20","20","342","30",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("착수지연신청 결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div15","20","325",null,"249","20",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","118",null,"131","0",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta06","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta08","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("2");
            obj.set_text("사업착수 예정일자");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("4");
            obj.set_text("사업착수\r\n지연사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","118","150","131",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("7");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","157","7","150","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","50",null,"62","7",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","126",null,"77","7",null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"착수지연사유파일.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-11\" textAlign=\"center\"/><Cell col=\"3\" controlautosizingtype=\"none\" textAlign=\"center\" displaytype=\"buttoncontrol\" cssclass=\"Cell_WF_Delete\" edittype=\"button\"/></Band></Format></Formats>");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","210","66","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div15.form);
            obj.set_taborder("11");
            obj.set_text("파일찾기");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.form.div15.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_00_00_00","20","285","342","30",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("착수지연신청 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div16","20","634",null,"249","20",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","118",null,"131","0",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta06","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta08","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("2");
            obj.set_text("사업착수 예정일자");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("4");
            obj.set_text("사업착수\r\n지연사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","118","150","131",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("7");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","126",null,"77","7",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"착수지연사유파일.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"다운로드\" controlautosizingtype=\"none\" textAlign=\"center\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","210","90","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("9");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Edit("edt02_00_01","157","7","143","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("10");
            obj.set_value("2023.08.31");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023.08.31");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","50",null,"62","10",null,null,null,null,null,this.Div00_00_00_00.form.div16.form);
            obj.set_taborder("11");
            obj.set_value("착수지연 사유입니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("착수지연 사유입니다.");
            this.Div00_00_00_00.form.div16.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_00_00_00_00","20","594","342","30",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("착수지연신청 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div17","20","943",null,"205","20",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("6");
            obj.set_value("1차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1차");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("2");
            obj.set_text("검토차수");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("4");
            obj.set_text("검토처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("7");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("8");
            obj.set_text("검토파일 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","50","227","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("10");
            obj.set_text("문서보완요청");
            obj.set_value("문서보완요청");
            obj.set_index("-1");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","93",null,"62","7",null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","168","620","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_taborder("12");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.Div00_00_00_00.form.div17.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("13");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00_00.form.div17.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_01","20","903","342","30",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("착수지연결과 등록 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","0","5698",null,"490","30",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div18","20","60",null,"174","20",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7","143","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("3");
            obj.set_value("2023-08-20");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-20");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("1");
            obj.set_text("사업착수일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"착수보고파일.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-10\" textAlign=\"center\"/><Cell col=\"3\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","90","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("7");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div18.form);
            obj.set_taborder("4");
            obj.set_text("착수보고파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00_00.form.div18.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00","20","20","342","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("사업착수보고 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div20","20","294",null,"174","20",null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("1");
            obj.set_text("사업착수일자 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"착수보고파일.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-10\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\" cssclass=\"Cell_WF_Delete\"/></Band></Format></Formats>");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","90","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("6");
            obj.set_text("파일찾기");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_taborder("3");
            obj.set_text("착수보고파일");
            obj.set_cssclass("sta_WF_Label");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","157","7","150","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form.div20.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.Div00_00_00_00_00.form.div20.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00_01","20","254","342","30",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("사업착수보고 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn00","390","2","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부모(M00) 참고1");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","550","2","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("부모(M00) 참고2");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","711","2","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("divReg 참고 1");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","856","2","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("divReg 참고 2");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCombo01","1161","3","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsCombo01");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_cssclass("WFSA");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","996","3","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("부모(M00) 공통코드\r\n innerDataset 처리");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","1292","2","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("combo값 체크");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.div07.form
            obj = new Layout("default","",0,0,this.Div00.form.div07.form,function(p){});
            this.Div00.form.div07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div08.form
            obj = new Layout("default","",0,0,this.Div00.form.div08.form,function(p){});
            this.Div00.form.div08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div05.form
            obj = new Layout("default","",0,0,this.div05.form,function(p){});
            this.div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div04.form
            obj = new Layout("default","",0,0,this.div04.form,function(p){});
            this.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div06.form
            obj = new Layout("default","",0,0,this.div06.form,function(p){});
            this.div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.div09.form
            obj = new Layout("default","",0,0,this.Div00_00.form.div09.form,function(p){});
            this.Div00_00.form.div09.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.div10.form
            obj = new Layout("default","",0,0,this.Div00_00.form.div10.form,function(p){});
            this.Div00_00.form.div10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.div11.form
            obj = new Layout("default","",0,0,this.Div00_00.form.div11.form,function(p){});
            this.Div00_00.form.div11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.div12.form
            obj = new Layout("default","",0,0,this.Div00_00.form.div12.form,function(p){});
            this.Div00_00.form.div12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form.div01_00_00_02_00_03_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form.div01_00_00_02_00_03_00.form,function(p){});
            this.Div00_00_00.form.div01_00_00_02_00_03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form.div13.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form.div13.form,function(p){});
            this.Div00_00_00.form.div13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form.div14.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form.div14.form,function(p){});
            this.Div00_00_00_00.form.div14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form.div15.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form.div15.form,function(p){});
            this.Div00_00_00_00.form.div15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form.div16.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form.div16.form,function(p){});
            this.Div00_00_00_00.form.div16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form.div17.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form.div17.form,function(p){});
            this.Div00_00_00_00.form.div17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,function(p){});
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00_00.form.div18.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00_00.form.div18.form,function(p){});
            this.Div00_00_00_00_00.form.div18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00_00.form.div20.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00_00.form.div20.form,function(p){});
            this.Div00_00_00_00_00.form.div20.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00_00.form,function(p){});
            this.Div00_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFormActionS01.xfdl", function() {
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
        	trace("[sampleFormActionS01]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

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
         * @desc 상세화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param {object} objParam 전달 param object
         * @return N/A
        */
        this.fnChangeDiv = function(objParam)
        {
        	// TODO
        	trace("[sampleFormActionS01]fnChangeDiv =========================");
        	trace("objParam.param1:"+objParam.param1);
        	trace("objParam.param2:"+objParam.param2);

        	this.scrollTo(0,0);

        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 참여자확인 클릭시 등록화면으로 전환
        */
        this.divComBtn_btnReg_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        	// 등록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv();
        };

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
        	개발시 각 div (부모(M00) , divReg) 접근 참고용
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
        	// divReg > dsList02 정보 참고
        	// this.getOwnerFrame().form.divWork.form.divReg.form : sampleFormActionS02.xfdl 화면의 this 와 동일
        	trace("this.getOwnerFrame().form.divWork.form.divReg.form.dsList02.saveXML():\n"+this.getOwnerFrame().form.divWork.form.divReg.form.dsList02.saveXML());
        };

        this.btn03_onclick = function(obj,e)
        {
        	// divReg > dsList02 정보 참고
        	// this.parent.parent.divReg.form : sampleFormActionS02.xfdl 화면의 this 와 동일
        	trace("this.parent.parent.divReg.form.dsList02.saveXML():\n"+this.parent.parent.divReg.form.dsList02.saveXML());
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
            this.divComBtn.form.btnReg.addEventHandler("onclick",this.divComBtn_btnReg_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("sampleFormActionS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
