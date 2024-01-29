(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp03");
            this.set_titletext("사전승인사업신청_사업자_등록수정");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,1780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">연료 전환사업의 방법론 [1차]</Col></Row><Row><Col id=\"Column0\">연료 전환사업의 방법론 [2차]</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid4", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">풍력발전 건설사업</Col><Col id=\"Column1\">서부발전</Col><Col id=\"Column2\">1234123412342</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid5", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">ITMO 6.2</Col><Col id=\"Column1\">2023~2025</Col><Col id=\"Column2\">100</Col></Row><Row><Col id=\"Column0\">ITMO 6.4</Col><Col id=\"Column1\">2023~2024</Col><Col id=\"Column2\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","150","0","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H60");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","60",null,"173","30",null,null,null,null,null,this);
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

            obj = new Static("sta05","0","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","69.99%","0","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta12","69.99%","43","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("사업시행장소");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","69.99%","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","39.59%","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","sta05:7","50",null,"30","sta12:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","sta10:7","7",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_value("1234567890");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("1234567890");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00","sta12:7","50",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_00","sta02:7","7",null,"30","sta10:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_value("현대제철 주식회사");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("현대제철 주식회사");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01","306","93",null,"30","sta17:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_value("홍길동");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","sta17:7","93",null,"30","sta15:8",null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_value("탄소중립기획팀");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("탄소중립기획팀");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","sta15:7","93",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_value("매니저");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("매니저");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17_00","39.59%","129","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","306","136",null,"30","sta17_00:7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_value("01-1111-2222");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("01-1111-2222");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","sta17_00:7","136",null,"30","7",null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_value("aaa@naver.com");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("aaa@naver.com");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","86","150","87",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00","149","86","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","129","150","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04_00",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00","0","293",null,"418","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00","0","301",null,"117","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00_00","50%","344",null,"74","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05","0","43","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12","50%","43","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01",null,"50","101","30","sta12:7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("협정·약정 검색");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02","157","50",null,"30","btn01:3",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","157","7","699","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            var div01_00_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_innerdataset", obj);
            div01_00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">사전승인신청</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">심의신청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기승인 건 신청(협의체 또는 감독기구)</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","sta12:7","50","227","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","86",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00","0","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("사업형태");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00","50%","86","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("사업유형/규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","sta12_00:7","93","227","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","0","129",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00","0","129","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","93","227","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00","0","172",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00","0","172","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00","157","179",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00","0","215",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00","0","215","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("21");
            obj.set_text("착수예정일자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00","0","258",null,"44","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_00","0","258","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("인증유효기간유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00_00_00_00_00","50%","258","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("인증유효기간");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00","sta12_00_00_00_00_00:7","265","227","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("25");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00_00_00_00_00_00","50%","301","150","44",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("28");
            obj.set_text("환산계수");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00","157","325","300","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("29");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_00","460","325","140","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("30");
            obj.set_text("MW");
            obj.set_value("");
            obj.set_index("-1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00_00_00_00_00_00_00","50%","344","150","74",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("32");
            obj.set_text("환산근거");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00","157","361","300","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("33");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_00_00","0","301","150","117",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("연평균 온실가스\r\n\r배출 감축량 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","136",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("34");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00","157","222","140","30",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("35");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","157","265",null,"30","sta12_00_00_00_00_00:7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_00_innerdataset", obj);
            div01_00_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">갱신형</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">고정형</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_01","sta12_00_00_00_00_00_00:7","308",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("37");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00_00_00_00_00_00","sta12_00_00_00_00_00_00_00:7","351",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("38");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","sta12_00_00_00_00_00_00_00:7","384",null,"30","7",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("39");
            obj.set_text("단위 tCO2-eq가 아닌경우, 환산계수 및 근거를 입력해주세요.");
            obj.set_cssclass("sta_WF_Info");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","101","57","18","18",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_Help");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","253","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사업정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01","150","233","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H60");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_02","0","50","150","10",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_text("H10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_02_00","0","283","150","10",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_text("H10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","div01_00:-1",null,"167","30",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("sta06_00_00_00_00_00_00_01","0","0",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00_00_00_00_00","0","0","150",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("사업분야 및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01",null,"7","227","30","339",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00_00_00_00_01_00",null,"7","227","30","109",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"7","98","30","8",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("방법론 추가");
            obj.set_cssclass("btn_WF_Add");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","45",null,null,"7","6",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1290\"/><Column size=\"107\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/><Cell col=\"1\" text=\"삭제\" cssclass=\"Cell_NoLine\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" cssclass=\"Cell_WF_Delete\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"0px\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","Div01:60",null,"138","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grid2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"107\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"대표\"/><Cell col=\"1\" text=\"사업수행자\"/><Cell col=\"2\" text=\"국내/해외&#13;&#10;구분\"/><Cell col=\"3\" text=\"사업자등록번호\"/><Cell col=\"4\" colspan=\"2\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt;연평균 온실가스 배출 감축량&#13;&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\" displaytype=\"decoratetext\" edittype=\"text\"/><Cell col=\"6\" text=\"환산계수\"/><Cell col=\"7\" text=\"연평균 온실가스 배출 감축량&#13;&#13;&#10;(사업계획서의 연평균 온실가스 배출 감축량 입력)\"/><Cell col=\"8\" text=\"사용자동의&#13;&#10;여부\"/><Cell col=\"9\" text=\"삭제\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"imagecontrol\" cssclass=\"delete\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1446","929","120","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"98","30","30","Grid00:8",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("참가자 추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Div("div01_01","0","Grid00:60",null,"214","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"128","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","149","43","150","128",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("7");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta08_00","149","0","150","44",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("4");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_LabelSub_E");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","170",null,"44","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","214",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta17_00","149","170","150","44",null,null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("6");
            obj.set_text("환산 근거 자료");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.div01_01.addChild(obj.name, obj);

            obj = new Div("Div00","306","50",null,"114","7",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.div01_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,"78","0",null,null,null,null,null,this.div01_01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_binddataset("ds_grid3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1000\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"107\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\" 2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" cssclass=\"Cell_WF_Delete\" edittype=\"button\" padding=\"0px\"/></Band></Format></Formats>");
            this.div01_01.form.Div00.addChild(obj.name, obj);

            obj = new FileUpload("fud00_00","0","84","72","30",null,null,null,null,null,null,this.div01_01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            this.div01_01.form.Div00.addChild(obj.name, obj);

            obj = new FileUpload("fud00_01","306","177",null,"30","7",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("9");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            this.div01_01.addChild(obj.name, obj);

            obj = new FileUpload("fud00","306","7",null,"30","7",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("8");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.div01_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.div01_01.addChild(obj.name, obj);

            obj = new Static("sta04_01_00","150","877","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H60");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0",null,"300","30",null,"Grid00:10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("첨부파일정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0",null,"300","30",null,"div01_01:10",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사업 참가자 정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00_00","150","1075","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H60");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1446","1349","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("H20");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"div01_01:60","758","269","30",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("#ededed");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","500","0",null,"44","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("선택 인증실적 수량 합계\r\n(tCO2-eq)");
            obj.set_cssclass("sta_WF_Label2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03_00","500","43",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg2");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","43",null,null,"258","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg2L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","500","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 보유량(tCO2-eq)");
            obj.set_cssclass("sta_WF_Label2L");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","50","485","212",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"38\"/><Row size=\"38\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"인증실적 구분\"/><Cell col=\"1\" text=\"유효기간\"/><Cell col=\"2\" text=\"인증실적&#13;&#10;보유수량\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"tCO2-eq\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","533","124","193","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택된 감축량 인증실적이 없습니다.");
            obj.set_cssclass("output");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Div00:20","75","32","29",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_02_00_00","0","927","150","10",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_text("H10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_02_00_00_00","0","1125","150","10",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_text("H10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"Div00:20","75","32","Button01:3",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"Div00:20","88","32","Button01_00:3",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00_00_00","140","1349","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H60");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","div01_01:60",null,"269","838",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("ds_grid4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"146\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"사업명\"/><Cell col=\"1\" text=\"사업수행자명\"/><Cell col=\"2\" text=\"사업자등록번호\"/><Cell col=\"3\" text=\"대표자\"/><Cell col=\"4\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","0",null,"300","30",null,"Grid01:10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("양도인");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","Grid01:50",null,"300","30",null,"Div00:10",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("양도가능량");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_01.form.Div00.form
            obj = new Layout("default","",0,0,this.div01_01.form.Div00.form,function(p){});
            this.div01_01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_01.form
            obj = new Layout("default","",0,0,this.div01_01.form,function(p){});
            this.div01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,1780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Temp_01_align.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
