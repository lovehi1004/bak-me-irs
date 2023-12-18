(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("모달 팝업");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,2500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">5</Col><Col id=\"Column2\">사전승인신청</Col></Row><Row/><Row><Col id=\"Column1\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"처리자\" type=\"STRING\" size=\"256\"/><Column id=\"처리결과\" type=\"STRING\" size=\"256\"/><Column id=\"처리일자\" type=\"STRING\" size=\"256\"/><Column id=\"관장기관\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2020-02-19 15:59</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">심의승인</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">3</Col></Row><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2019-12-27 13:43</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">현재문서</Col><Col id=\"번호\">2</Col></Row><Row><Col id=\"구분\">최초신청</Col><Col id=\"처리자\">현대제철 주식회사</Col><Col id=\"처리일자\">2019-12-18 16:29</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","7","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("추가자료");
            obj.set_cssclass("sta_POP_Title");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","45","45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","45","89",null,null,"45","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div01","5","45",null,"390","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","226",null,"164","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","129",null,"44","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta06","-36","0",null,"44","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","86",null,"44","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","7","117","30",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("24");
            obj.set_text("한국-베트남 감축");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","7","66","30",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("협정조회");
            obj.set_fittocontents("width");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00","767","7",null,"30","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("13");
            obj.set_value("제 6.2조");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("제 6.2조");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_01","610","0","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","0","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("협정·약정");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","93",null,"30","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("4");
            obj.set_value("biz name");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("biz name");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","86","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("사업명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00","157","136",null,"30","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("8");
            obj.set_value("베트남 국제감축사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("베트남 국제감축사업");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","129","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("사업명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","226","150","164",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("9");
            obj.set_text("사업분야\r\n및 방법론");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","267",null,"115","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("14");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"950\"/><Column size=\"100\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"방법론명\"/><Cell col=\"1\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" text=\"방법론조회\"/></Band></Format></Formats>");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01_00_00_00","157","232",null,"30","10",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("15");
            obj.set_value("에너지 > 에너지세부분야");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("에너지 > 에너지세부분야");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta06_00","-36","43",null,"44","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_00_00","767","50",null,"30","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("20");
            obj.set_value("단일감축사업 / 일반");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("단일감축사업 / 일반");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","610","43","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("18");
            obj.set_text("사업유형 /규모");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt02_01_02","157","50","443","30",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("19");
            obj.set_value("지원사업");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("지원사업");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","43","150","44",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("17");
            obj.set_text("사업형태 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_01","0","172",null,"55","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_02","0","172","150","55",null,null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("22");
            obj.set_text("연평균 온실가스\r\n배출 감축량");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","157","184",null,"30","7",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("23");
            obj.set_text("1,000 tCO2-eq ");
            obj.set_cssclass("output");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","5","5","317","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("사업정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","5","495",null,"173","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_binddataset("dc_grd01");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"제출일자\"/><Cell col=\"4\" text=\"확인일자\"/><Cell col=\"5\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:번호\" textAlign=\"center\"/><Cell col=\"1\" text=\"자료확인\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-24 09:43\" textAlign=\"center\"/><Cell col=\"3\" text=\"2023-08-25 09:45\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\"/><Cell col=\"5\" text=\"현재문서\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","5","455","212","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("추가자료요청 이력정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","sta00_00_00:10","457","80","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div02","5","728",null,"119","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","7",null,"62","7",null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_value("내용\n내용");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","0","150","76",null,null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("3");
            obj.set_text("요청사유\r\n(직접입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","75",null,"44","0",null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","82","620","30",null,null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("5");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","75","150","44",null,null,null,null,null,null,this.Div01.form.div02.form);
            obj.set_taborder("6");
            obj.set_text("요청사유(파일)");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01","5","688","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("추가자료 요청 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div03","5","907",null,"119","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","0","150","76",null,null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("2");
            obj.set_text("요청사유\r\n(직접입력)");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","75",null,"44","0",null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","75","150","44",null,null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("4");
            obj.set_text("요청사유(파일)");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","7",null,"62","7",null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("5");
            obj.set_value("추가자료를 요청합니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("추가자료를 요청합니다.");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","82","117","30",null,null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("7");
            obj.set_text("추가자료요청.pdf");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            obj.set_padding("0px");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Button("btn01","Static00_00:10","82","66","30",null,null,null,null,null,null,this.Div01.form.div03.form);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00","5","867","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("추가자료 요청정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div04","5","1086",null,"260","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\" cssclass=\"Cell_WF_Delete\"/></Band></Format></Formats>");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","66","30",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("6");
            obj.set_text("파일찾기");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","173",null,"44","0",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","173","150","44",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("8");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new FileUpload("fud00","157","7","620","30",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("9");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","216",null,"44","0",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","0","216","150","44",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("11");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new FileUpload("fud00_00","157","180","620","30",null,null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("12");
            obj.set_itemheight("30");
            obj.set_buttontext("파일찾기");
            obj.set_buttonsize("72");
            obj.set_cssclass("essential");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Edit("edt02","157","223",null,"30","7",null,null,null,null,null,this.Div01.form.div04.form);
            obj.set_taborder("13");
            this.Div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00","5","1046","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("추가자료 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_01_00","5","1686","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("추가자료 확인 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div05","5","1726",null,"119","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("4");
            obj.set_text("확인내용");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new TextArea("txa00","157","50",null,"62","7",null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","157","7","227","30",null,null,null,null,null,null,this.Div01.form.div05.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_div05_form_cbo00_00_00_innerdataset = new nexacro.NormalDataset("Div01_form_div05_form_cbo00_00_00_innerdataset", obj);
            Div01_form_div05_form_cbo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_div05_form_cbo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.form.div05.addChild(obj.name, obj);

            obj = new Div("div06","5","1905",null,"119","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta07","0","43",null,"76","0",null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","43","150","76",null,null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("4");
            obj.set_text("확인내용");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00","157","7",null,"30","7",null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("5");
            obj.set_value("승인");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("승인");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Edit("edt02_01_01","157","50",null,"62","7",null,null,null,null,null,this.Div01.form.div06.form);
            obj.set_taborder("6");
            obj.set_value("승인하였습니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("승인하였습니다.");
            this.Div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_02_00_03_01_00_00","5","1865","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("추가자료 확인정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div04_00","5","1406",null,"260","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00","0","43",null,"131","0",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label_Top");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","51",null,"77","7",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid3");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"600\"/><Column size=\"107\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"업로드일자\"/><Cell col=\"3\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"기타증빙문서.hwp\"/><Cell col=\"1\" text=\"20MB\" textAlign=\"center\"/><Cell col=\"2\" text=\"2023-08-01\" textAlign=\"center\"/><Cell col=\"3\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" controlautosizingtype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Button("btn01_00","157","135","90","30",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("6");
            obj.set_text("전체다운로드");
            obj.set_accessibilityrole("fileupload");
            obj.set_defaultbutton("false");
            obj.set_fittocontents("width");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","43","150","131",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("3");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","173",null,"44","0",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","173","150","44",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("8");
            obj.set_text("환산근거자료 ");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","216",null,"44","0",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00_00","157","223",null,"30","7",null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("10");
            obj.set_value("자료를 보완하였습니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("자료를 보완하였습니다.");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","0","216","150","44",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("11");
            obj.set_text("보완내용");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","157","180","128","30",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("12");
            obj.set_text("환산근거자료.HWP");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            obj.set_padding("0px");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Button("btn01_01","Static00_00:10","180","66","30",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("13");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","157","7","113","30",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("14");
            obj.set_text("사업계획서.HWP");
            obj.set_cssclass("output");
            obj.set_textAlign("left");
            obj.set_fittocontents("width");
            obj.set_padding("0px");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Button("btn01_01_00","Static00_00_00:10","7","66","30",null,null,null,null,null,null,this.Div01.form.div04_00.form);
            obj.set_taborder("15");
            obj.set_text("다운로드");
            obj.set_fittocontents("width");
            this.Div01.form.div04_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_01_00_00_00","5","1366","342","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("추가자료 등록정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta04_01","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00_00",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div01.form
            obj = new Layout("default","",0,0,this.Div01.form.div01.form,function(p){});
            this.Div01.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div02.form
            obj = new Layout("default","",0,0,this.Div01.form.div02.form,function(p){});
            this.Div01.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div03.form
            obj = new Layout("default","",0,0,this.Div01.form.div03.form,function(p){});
            this.Div01.form.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div04.form
            obj = new Layout("default","",0,0,this.Div01.form.div04.form,function(p){});
            this.Div01.form.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div05.form
            obj = new Layout("default","",0,0,this.Div01.form.div05.form,function(p){});
            this.Div01.form.div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div06.form
            obj = new Layout("default","",0,0,this.Div01.form.div06.form,function(p){});
            this.Div01.form.div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div04_00.form
            obj = new Layout("default","",0,0,this.Div01.form.div04_00.form,function(p){});
            this.Div01.form.div04_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,2500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_추가자료.xfdl", function() {

        this.Div01_div01_00_00_00_edt02_01_02_onchanged = function(obj,e)
        {

        };

        this.Div01_div01_00_00_00_edt02_01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.div01.form.edt02_01_01.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.Div01.form.div01.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.div01.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.div01.form.edt02_01_01_00_00_00.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_00_00_00_onchanged,this);
            this.Div01.form.div01.form.edt02_01_02.addEventHandler("onchanged",this.Div01_div01_00_00_00_edt02_01_02_onchanged,this);
            this.Div01.form.div01.form.sta08_02.addEventHandler("onclick",this.div01_00_00_00_sta08_02_onclick,this);
            this.Div01.form.div01.form.sta08_00_00_00_02.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.sta00_00_01_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div01.form.div02.form.txa00.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.Div01.form.div02.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.sta00_00_01_01.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.div03.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.div03.form.edt02_01_01.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.Div01.form.sta00_00_01_01_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.div04.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.sta00_00_01_01_00_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.sta00_00_01_02_00_03_01_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.div05.form.txa00.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.Div01.form.div06.form.edt02_01_01.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.Div01.form.sta00_00_01_02_00_03_01_00_00.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.Div01.form.div04_00.form.sta08_00_00_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.Div01.form.sta00_00_01_01_00_00_00.addEventHandler("onclick",this.sta00_00_onclick,this);
        };
        this.loadIncludeScript("Popup_추가자료.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
