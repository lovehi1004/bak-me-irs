(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("사업신청_상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,2100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd01", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"처리자\" type=\"STRING\" size=\"256\"/><Column id=\"처리결과\" type=\"STRING\" size=\"256\"/><Column id=\"처리일자\" type=\"STRING\" size=\"256\"/><Column id=\"관장기관\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">홍길동</Col><Col id=\"처리일자\">2019-12-27 13:43</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">심의승인</Col><Col id=\"선택\">현재문서</Col><Col id=\"번호\">2</Col></Row><Row><Col id=\"구분\">최초신청</Col><Col id=\"처리자\">홍길동</Col><Col id=\"처리일자\">2019-12-18 16:29</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">1</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","60",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dc_grd01");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"처리결과\"/><Cell col=\"4\" text=\"처리일자\"/><Cell col=\"5\" text=\"관장기관\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:번호\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:구분\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:처리자\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:처리결과\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:처리일자\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:관장기관\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:선택\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","20",null,null,"1456","Grid00:10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","153","22","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","Grid00:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사업정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div03","0","sta00:10",null,"516","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","352",null,"164","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","0","255",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","172",null,"44","0",null,null,null,null,null,this.div03.form);
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

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","136",null,"30","10",null,null,null,null,null,this.div03.form);
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

            obj = new Static("sta08_00","0","129","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            obj.set_text("사업명(영문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","172","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","179",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_value("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("베트남 국제감축사업");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","255","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","352","150","164",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("13");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("16");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("17");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("32");
            obj.set_value("한국-베트남 감축  ");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("한국-베트남 감축  ");
            this.div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","393",null,"115","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("18");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1000\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_00","157","358",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("19");
            obj.set_value("에너지 > 에너지세부분야");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("에너지 > 에너지세부분야");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("21");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","50%","86","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("22");
            obj.set_text("사업유형/규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta08_01_00:7","93",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("23");
            obj.set_value("단일감축사업/일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업/일반");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","1","212",null,"44","-1",null,null,null,null,null,this.div03.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_01","0","212","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("24");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01","157","219",null,"30","10",null,null,null,null,null,this.div03.form);
            obj.set_taborder("25");
            obj.set_value("2023-08-01");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-01");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_01_00_00","50%","255","150","44",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("27");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_01_00","sta08_01_00_00:7","262",null,"30","7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("28");
            obj.set_value("2023.08.01 ~ 2030.12.31");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023.08.01 ~ 2030.12.31");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01_00","0","298",null,"55","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03.addChild(obj.name, obj);

            obj = new Static("Static00","157","305","120","40",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("30");
            obj.set_text("1,000 tCO2-eq");
            obj.set_cssclass("output");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","298","150","55",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("29");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00","sta08_02:7","93",null,"30","sta08_01_00:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("33");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00_00","sta08_00_00_00:7","262",null,"30","sta08_01_00_00:7",null,null,null,null,null,this.div03.form);
            obj.set_taborder("34");
            obj.set_value("갱신형");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("갱신형");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","div03:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사업자정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","sta00_00:10",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","86",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","69.99%","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_00","sta02:7","7",null,"30","sta10:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("현대제철 주식회사");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","129",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","sta10:7","7",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_value("1234567890");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1234567890");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","69.99%","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","sta15:7","93",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_value("매니저");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("매니저");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","39.53%","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta17:7","93",null,"30","sta15:7",null,null,null,null,null,this.div01.form);
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

            obj = new Static("sta08_00","149","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01","sta08_00:7","93",null,"30","sta17:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_value("홍길동");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","39.53%","129","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta17_00:7","136",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_value("aaa@naver.com");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("aaa@naver.com");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","129","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","sta08_00_00:7","136",null,"30","sta17_00:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_value("01-1111-2222");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("01-1111-2222");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","86","150","87",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","43",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10_00","69.99%","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00","sta10_00:7","50",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_value("사업시행장소");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("사업시행장소");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","sta02_00:7","50",null,"30","sta10_00:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("현대제철 주식회사");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","0","div01:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사업 비공개 신청 정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div04","0","sta00_00_01_01:10",null,"311","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","183",null,"131","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"55","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","55",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("1");
            obj.set_text("정보 비공개\r\n신청항목");
            obj.set_cssclass("sta_WF_Label_E");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div04.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","7",null,"40","7",null,null,null,null,null,this.div04.form);
            obj.set_taborder("7");
            obj.set_text("사업계획서.HWP");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            this.div04.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","191",null,"77","7",null,null,null,null,null,this.div04.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"900\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div04.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","275","90","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("6");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","183","150","131",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("3");
            obj.set_text("사업분야 및 \r\n방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","54",null,"131","0",null,null,null,null,null,this.div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","157","61",null,"117","7",null,null,null,null,null,this.div04.form);
            obj.set_taborder("9");
            obj.set_text("정보 비공개 사유를 작성");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","54","150","131",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("10");
            obj.set_text("정보 비공개 \r\n신청사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.div04.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","1975",null,"32","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"0","114","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","div04:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("심의결과");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div03_00","0","sta00_01:10",null,"260","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("6");
            obj.set_value("1차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1차");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","216",null,"44","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","223",null,"30","10",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("7");
            obj.set_value("심의결과.HWP");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("심의결과.HWP");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("4");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","216","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("8");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","50%","43","150","44",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("9");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"131","0",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","86","150","131",null,null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("12");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","sta08:7","50",null,"30","sta08_01:7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("13");
            obj.set_value("문서보완요청");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완요청");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta08_01:7","50",null,"30","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("10");
            obj.set_value("2023-08-02");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-02");
            this.div03_00.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00_00","157","93",null,"117","7",null,null,null,null,null,this.div03_00.form);
            obj.set_taborder("14");
            obj.set_value("문서보완해주세요");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("문서보완해주세요");
            this.div03_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00","0","div03_00:20","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("심의결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div08","0","sta00_00_01_01_00_00:10",null,"205","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","161",null,"44","0",null,null,null,null,null,this.div08.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div08.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div08.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div08.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.div08.form);
            obj.set_taborder("6");
            obj.set_value("2차");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2차");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"76","0",null,null,null,null,null,this.div08.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div08.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("4");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","76",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("7");
            obj.set_text("심의의견");
            obj.set_cssclass("sta_WF_Label");
            this.div08.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","161","150","44",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("8");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.div08.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","93",null,"62","7",null,null,null,null,null,this.div08.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.div08.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","168","620","30",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("11");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.div08.addChild(obj.name, obj);

            obj = new Combo("cbo02","157","50","230","30",null,null,null,null,null,null,this.div08.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div08_form_cbo02_innerdataset = new nexacro.NormalDataset("div08_form_cbo02_innerdataset", obj);
            div08_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">문서보완요청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">심의반려</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">심의승인</Col></Row></Rows>");
            obj.set_innerdataset(div08_form_cbo02_innerdataset);
            obj.set_text("심의승인");
            obj.set_value("3");
            obj.set_index("3");
            this.div08.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div04.form
            obj = new Layout("default","",0,0,this.div04.form,function(p){});
            this.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03_00.form
            obj = new Layout("default","",0,0,this.div03_00.form,function(p){});
            this.div03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div08.form
            obj = new Layout("default","",0,0,this.div08.form,function(p){});
            this.div08.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,2100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("사업비공개관리.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        this.sta00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_sta08_00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_00_edt02_01_01_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_edt02_01_01_00_00_00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_00_edt02_00_onchanged = function(obj,e)
        {

        };

        this.fud00_00_00_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_00_sta08_02_onclick = function(obj,e)
        {

        };

        this.div01_00_00_00_edt02_01_01_00_00_02_onchanged = function(obj,e)
        {

        };

        this.sta00_00_00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_00_02_00_edt02_00_onchanged = function(obj,e)
        {

        };

        this.txa00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_txa00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_03_00_00_00_cbo00_00_00_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_03_00_00_sta08_01_onclick = function(obj,e)
        {

        };

        this.div03_Static00_00_onclick = function(obj,e)
        {

        };

        this.div03_edt02_01_01_00_00_01_onchanged = function(obj,e)
        {

        };

        this.div03_00_edt02_00_00_onchanged = function(obj,e)
        {

        };

        this.div03_00_sta08_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.div03.form.edt02_01_01.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.div03.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03.form.sta08_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03.form.edt02_01_01_00_00_00.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_00_onchanged,this);
            this.div03.form.sta08_00_00_00_01.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div03.form.edt02_01_01_00_00_01.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.div03.form.edt02_01_01_00_00_01_00.addEventHandler("onchanged",this.div03_edt02_01_01_00_00_01_onchanged,this);
            this.div03.form.sta08_00_00_00_02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.sta00_00_01_01.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.div04.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divCmmnBtn.form.Button01_00.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.div03_00.form.edt02_01_01.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.sta00_00_01_01_00_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.div08.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.div08.form.txa00.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.div08.form.cbo02.addEventHandler("onitemchanged",this.div01_00_cbo02_onitemchanged,this);
        };
        this.loadIncludeScript("사업비공개관리.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
