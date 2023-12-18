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
            this.set_titletext("서브레이아웃");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">5</Col><Col id=\"Column2\">사전승인신청</Col></Row><Row/><Row><Col id=\"Column1\">4</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","35","30","50","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("연도");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","85","30","200","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_innerdataset", obj);
            divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2022</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_innerdataset);
            obj.set_text("2023");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","315","30","200","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2019</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("2019");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","285","36","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd00","5","divSearch:81",null,"353","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"43\"/><Row size=\"43\"/><Row size=\"43\"/><Row size=\"43\"/><Row size=\"43\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"연도\"/><Cell col=\"1\" colspan=\"6\" text=\"신청\"/><Cell col=\"7\" colspan=\"6\" text=\"사전 승인\"/><Cell col=\"13\" colspan=\"2\" text=\"협의체 심의요청\"/><Cell col=\"15\" colspan=\"6\" text=\"승인\"/><Cell col=\"21\" colspan=\"6\" text=\"반려\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"6.2조\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"6.4조\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"기타협정\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"6.2조\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"6.4조\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" text=\"기타협정\"/><Cell row=\"1\" col=\"13\" colspan=\"2\" text=\"6.2조\"/><Cell row=\"1\" col=\"15\" colspan=\"2\" text=\"6.2조\"/><Cell row=\"1\" col=\"17\" colspan=\"2\" text=\"6.4조\"/><Cell row=\"1\" col=\"19\" colspan=\"2\" text=\"기타협정\"/><Cell row=\"1\" col=\"21\" colspan=\"2\" text=\"6.2조\"/><Cell row=\"1\" col=\"23\" colspan=\"2\" text=\"6.4조\"/><Cell row=\"1\" col=\"25\" colspan=\"2\" text=\"기타협정\"/><Cell row=\"2\" col=\"1\" text=\"건수\"/><Cell row=\"2\" col=\"2\" text=\"신청량\"/><Cell row=\"2\" col=\"3\" text=\"건수\"/><Cell row=\"2\" col=\"4\" text=\"신청량\"/><Cell row=\"2\" col=\"5\" text=\"건수\"/><Cell row=\"2\" col=\"6\" text=\"신청량\"/><Cell row=\"2\" col=\"7\" text=\"건수\"/><Cell row=\"2\" col=\"8\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"9\" text=\"건수\"/><Cell row=\"2\" col=\"10\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"11\" text=\"건수\"/><Cell row=\"2\" col=\"12\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"13\" text=\"건수\"/><Cell row=\"2\" col=\"14\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"15\" text=\"건수\"/><Cell row=\"2\" col=\"16\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"17\" text=\"건수\"/><Cell row=\"2\" col=\"18\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"19\" text=\"건수\"/><Cell row=\"2\" col=\"20\" text=\"연간예상&#13;&#10;감축량\"/><Cell row=\"2\" col=\"21\" text=\"건수\"/><Cell row=\"2\" col=\"22\" text=\"신청량\"/><Cell row=\"2\" col=\"23\" text=\"건수\"/><Cell row=\"2\" col=\"24\" text=\"신청량\"/><Cell row=\"2\" col=\"25\" text=\"건수\"/><Cell row=\"2\" col=\"26\" text=\"신청량\"/></Band><Band id=\"body\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"right\" text=\"9\"/><Cell col=\"2\" textAlign=\"right\" text=\"222,220\"/><Cell col=\"3\" textAlign=\"right\" text=\"333,330\"/><Cell col=\"4\" textAlign=\"right\" text=\"444,440\"/><Cell col=\"5\" textAlign=\"right\" text=\"555,550\"/><Cell col=\"6\" textAlign=\"right\" text=\"666,660\"/><Cell col=\"7\" textAlign=\"right\" text=\"111,110\"/><Cell col=\"8\" textAlign=\"right\" text=\"222,220\"/><Cell col=\"9\" textAlign=\"right\" text=\"333,330\"/><Cell col=\"10\" textAlign=\"right\" text=\"444,440\"/><Cell col=\"11\" textAlign=\"right\" text=\"555,550\"/><Cell col=\"12\" textAlign=\"right\" text=\"666,660\"/><Cell col=\"13\" textAlign=\"right\" text=\"111,110\"/><Cell col=\"14\" textAlign=\"right\" text=\"222,220\"/><Cell col=\"15\" textAlign=\"right\" text=\"111,110\"/><Cell col=\"16\" textAlign=\"right\" text=\"222,220\"/><Cell col=\"17\" textAlign=\"right\" text=\"333,330\"/><Cell col=\"18\" textAlign=\"right\" text=\"444,440\"/><Cell col=\"19\" textAlign=\"right\" text=\"555,550\"/><Cell col=\"20\" textAlign=\"right\" text=\"666,660\"/><Cell col=\"21\" textAlign=\"right\" text=\"111,110\"/><Cell col=\"22\" textAlign=\"right\" text=\"222,220\"/><Cell col=\"23\" textAlign=\"right\" text=\"333,330\"/><Cell col=\"24\" textAlign=\"right\" text=\"444,440\"/><Cell col=\"25\" textAlign=\"right\" text=\"555,550\"/><Cell col=\"26\" textAlign=\"right\" text=\"666,660\"/><Cell row=\"1\" textAlign=\"center\" text=\"2023\"/><Cell row=\"1\" col=\"1\" textAlign=\"right\" text=\"10\"/><Cell row=\"1\" col=\"2\" textAlign=\"right\" text=\"20\"/><Cell row=\"1\" col=\"3\" textAlign=\"right\" text=\"30\"/><Cell row=\"1\" col=\"4\" textAlign=\"right\" text=\"40\"/><Cell row=\"1\" col=\"5\" textAlign=\"right\" text=\"50\"/><Cell row=\"1\" col=\"6\" textAlign=\"right\" text=\"60\"/><Cell row=\"1\" col=\"7\" textAlign=\"right\" text=\"10\"/><Cell row=\"1\" col=\"8\" textAlign=\"right\" text=\"20\"/><Cell row=\"1\" col=\"9\" textAlign=\"right\" text=\"30\"/><Cell row=\"1\" col=\"10\" textAlign=\"right\" text=\"40\"/><Cell row=\"1\" col=\"11\" textAlign=\"right\" text=\"50\"/><Cell row=\"1\" col=\"12\" textAlign=\"right\" text=\"60\"/><Cell row=\"1\" col=\"13\" textAlign=\"right\" text=\"10\"/><Cell row=\"1\" col=\"14\" textAlign=\"right\" text=\"20\"/><Cell row=\"1\" col=\"15\" textAlign=\"right\" text=\"10\"/><Cell row=\"1\" col=\"16\" textAlign=\"right\" text=\"20\"/><Cell row=\"1\" col=\"17\" textAlign=\"right\" text=\"30\"/><Cell row=\"1\" col=\"18\" textAlign=\"right\" text=\"40\"/><Cell row=\"1\" col=\"19\" textAlign=\"right\" text=\"50\"/><Cell row=\"1\" col=\"20\" textAlign=\"right\" text=\"60\"/><Cell row=\"1\" col=\"21\" textAlign=\"right\" text=\"10\"/><Cell row=\"1\" col=\"22\" textAlign=\"right\" text=\"20\"/><Cell row=\"1\" col=\"23\" textAlign=\"right\" text=\"30\"/><Cell row=\"1\" col=\"24\" textAlign=\"right\" text=\"40\"/><Cell row=\"1\" col=\"25\" textAlign=\"right\" text=\"50\"/><Cell row=\"1\" col=\"26\" textAlign=\"right\" text=\"60\"/><Cell row=\"2\" textAlign=\"center\" text=\"2022\"/><Cell row=\"2\" col=\"1\" textAlign=\"right\" text=\"100\"/><Cell row=\"2\" col=\"2\" textAlign=\"right\" text=\"200\"/><Cell row=\"2\" col=\"3\" textAlign=\"right\" text=\"300\"/><Cell row=\"2\" col=\"4\" textAlign=\"right\" text=\"400\"/><Cell row=\"2\" col=\"5\" textAlign=\"right\" text=\"500\"/><Cell row=\"2\" col=\"6\" textAlign=\"right\" text=\"600\"/><Cell row=\"2\" col=\"7\" textAlign=\"right\" text=\"100\"/><Cell row=\"2\" col=\"8\" textAlign=\"right\" text=\"200\"/><Cell row=\"2\" col=\"9\" textAlign=\"right\" text=\"300\"/><Cell row=\"2\" col=\"10\" textAlign=\"right\" text=\"400\"/><Cell row=\"2\" col=\"11\" textAlign=\"right\" text=\"500\"/><Cell row=\"2\" col=\"12\" textAlign=\"right\" text=\"600\"/><Cell row=\"2\" col=\"13\" textAlign=\"right\" text=\"100\"/><Cell row=\"2\" col=\"14\" textAlign=\"right\" text=\"200\"/><Cell row=\"2\" col=\"15\" textAlign=\"right\" text=\"100\"/><Cell row=\"2\" col=\"16\" textAlign=\"right\" text=\"200\"/><Cell row=\"2\" col=\"17\" textAlign=\"right\" text=\"300\"/><Cell row=\"2\" col=\"18\" textAlign=\"right\" text=\"400\"/><Cell row=\"2\" col=\"19\" textAlign=\"right\" text=\"500\"/><Cell row=\"2\" col=\"20\" textAlign=\"right\" text=\"600\"/><Cell row=\"2\" col=\"21\" textAlign=\"right\" text=\"100\"/><Cell row=\"2\" col=\"22\" textAlign=\"right\" text=\"200\"/><Cell row=\"2\" col=\"23\" textAlign=\"right\" text=\"300\"/><Cell row=\"2\" col=\"24\" textAlign=\"right\" text=\"400\"/><Cell row=\"2\" col=\"25\" textAlign=\"right\" text=\"500\"/><Cell row=\"2\" col=\"26\" textAlign=\"right\" text=\"600\"/><Cell row=\"3\" textAlign=\"center\" text=\"2021\"/><Cell row=\"3\" col=\"1\" textAlign=\"right\" text=\"1,000\"/><Cell row=\"3\" col=\"2\" textAlign=\"right\" text=\"2,000\"/><Cell row=\"3\" col=\"3\" textAlign=\"right\" text=\"3,000\"/><Cell row=\"3\" col=\"4\" textAlign=\"right\" text=\"4,000\"/><Cell row=\"3\" col=\"5\" textAlign=\"right\" text=\"5,000\"/><Cell row=\"3\" col=\"6\" textAlign=\"right\" text=\"6,000\"/><Cell row=\"3\" col=\"7\" textAlign=\"right\" text=\"1,000\"/><Cell row=\"3\" col=\"8\" textAlign=\"right\" text=\"2,000\"/><Cell row=\"3\" col=\"9\" textAlign=\"right\" text=\"3,000\"/><Cell row=\"3\" col=\"10\" textAlign=\"right\" text=\"4,000\"/><Cell row=\"3\" col=\"11\" textAlign=\"right\" text=\"5,000\"/><Cell row=\"3\" col=\"12\" textAlign=\"right\" text=\"6,000\"/><Cell row=\"3\" col=\"13\" textAlign=\"right\" text=\"1,000\"/><Cell row=\"3\" col=\"14\" textAlign=\"right\" text=\"2,000\"/><Cell row=\"3\" col=\"15\" textAlign=\"right\" text=\"1,000\"/><Cell row=\"3\" col=\"16\" textAlign=\"right\" text=\"2,000\"/><Cell row=\"3\" col=\"17\" textAlign=\"right\" text=\"3,000\"/><Cell row=\"3\" col=\"18\" textAlign=\"right\" text=\"4,000\"/><Cell row=\"3\" col=\"19\" textAlign=\"right\" text=\"5,000\"/><Cell row=\"3\" col=\"20\" textAlign=\"right\" text=\"6,000\"/><Cell row=\"3\" col=\"21\" textAlign=\"right\" text=\"1,000\"/><Cell row=\"3\" col=\"22\" textAlign=\"right\" text=\"2,000\"/><Cell row=\"3\" col=\"23\" textAlign=\"right\" text=\"3,000\"/><Cell row=\"3\" col=\"24\" textAlign=\"right\" text=\"4,000\"/><Cell row=\"3\" col=\"25\" textAlign=\"right\" text=\"5,000\"/><Cell row=\"3\" col=\"26\" textAlign=\"right\" text=\"6,000\"/><Cell row=\"4\" textAlign=\"center\" text=\"2020\"/><Cell row=\"4\" col=\"1\" textAlign=\"right\" text=\"10,000\"/><Cell row=\"4\" col=\"2\" textAlign=\"right\" text=\"20,000\"/><Cell row=\"4\" col=\"3\" textAlign=\"right\" text=\"30,000\"/><Cell row=\"4\" col=\"4\" textAlign=\"right\" text=\"40,000\"/><Cell row=\"4\" col=\"5\" textAlign=\"right\" text=\"50,000\"/><Cell row=\"4\" col=\"6\" textAlign=\"right\" text=\"60,000\"/><Cell row=\"4\" col=\"7\" textAlign=\"right\" text=\"10,000\"/><Cell row=\"4\" col=\"8\" textAlign=\"right\" text=\"20,000\"/><Cell row=\"4\" col=\"9\" textAlign=\"right\" text=\"30,000\"/><Cell row=\"4\" col=\"10\" textAlign=\"right\" text=\"40,000\"/><Cell row=\"4\" col=\"11\" textAlign=\"right\" text=\"50,000\"/><Cell row=\"4\" col=\"12\" textAlign=\"right\" text=\"60,000\"/><Cell row=\"4\" col=\"13\" textAlign=\"right\" text=\"10,000\"/><Cell row=\"4\" col=\"14\" textAlign=\"right\" text=\"20,000\"/><Cell row=\"4\" col=\"15\" textAlign=\"right\" text=\"10,000\"/><Cell row=\"4\" col=\"16\" textAlign=\"right\" text=\"20,000\"/><Cell row=\"4\" col=\"17\" textAlign=\"right\" text=\"30,000\"/><Cell row=\"4\" col=\"18\" textAlign=\"right\" text=\"40,000\"/><Cell row=\"4\" col=\"19\" textAlign=\"right\" text=\"50,000\"/><Cell row=\"4\" col=\"20\" textAlign=\"right\" text=\"60,000\"/><Cell row=\"4\" col=\"21\" textAlign=\"right\" text=\"10,000\"/><Cell row=\"4\" col=\"22\" textAlign=\"right\" text=\"20,000\"/><Cell row=\"4\" col=\"23\" textAlign=\"right\" text=\"30,000\"/><Cell row=\"4\" col=\"24\" textAlign=\"right\" text=\"40,000\"/><Cell row=\"4\" col=\"25\" textAlign=\"right\" text=\"50,000\"/><Cell row=\"4\" col=\"26\" textAlign=\"right\" text=\"60,000\"/><Cell row=\"5\" textAlign=\"center\" text=\"2019\"/><Cell row=\"5\" col=\"1\" textAlign=\"right\" text=\"100,000\"/><Cell row=\"5\" col=\"2\" textAlign=\"right\" text=\"200,000\"/><Cell row=\"5\" col=\"3\" textAlign=\"right\" text=\"300,000\"/><Cell row=\"5\" col=\"4\" textAlign=\"right\" text=\"400,000\"/><Cell row=\"5\" col=\"5\" textAlign=\"right\" text=\"500,000\"/><Cell row=\"5\" col=\"6\" textAlign=\"right\" text=\"600,000\"/><Cell row=\"5\" col=\"7\" textAlign=\"right\" text=\"100,000\"/><Cell row=\"5\" col=\"8\" textAlign=\"right\" text=\"200,000\"/><Cell row=\"5\" col=\"9\" textAlign=\"right\" text=\"300,000\"/><Cell row=\"5\" col=\"10\" textAlign=\"right\" text=\"400,000\"/><Cell row=\"5\" col=\"11\" textAlign=\"right\" text=\"500,000\"/><Cell row=\"5\" col=\"12\" textAlign=\"right\" text=\"600,000\"/><Cell row=\"5\" col=\"13\" textAlign=\"right\" text=\"100,000\"/><Cell row=\"5\" col=\"14\" textAlign=\"right\" text=\"200,000\"/><Cell row=\"5\" col=\"15\" textAlign=\"right\" text=\"100,000\"/><Cell row=\"5\" col=\"16\" textAlign=\"right\" text=\"200,000\"/><Cell row=\"5\" col=\"17\" textAlign=\"right\" text=\"300,000\"/><Cell row=\"5\" col=\"18\" textAlign=\"right\" text=\"400,000\"/><Cell row=\"5\" col=\"19\" textAlign=\"right\" text=\"500,000\"/><Cell row=\"5\" col=\"20\" textAlign=\"right\" text=\"600,000\"/><Cell row=\"5\" col=\"21\" textAlign=\"right\" text=\"100,000\"/><Cell row=\"5\" col=\"22\" textAlign=\"right\" text=\"200,000\"/><Cell row=\"5\" col=\"23\" textAlign=\"right\" text=\"300,000\"/><Cell row=\"5\" col=\"24\" textAlign=\"right\" text=\"400,000\"/><Cell row=\"5\" col=\"25\" textAlign=\"right\" text=\"500,000\"/><Cell row=\"5\" col=\"26\" textAlign=\"right\" text=\"600,000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","104.64%","217","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchUp");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5",null,"140","32",null,"grd00:10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 <fc v=\'#f96262\'>122</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,null,"119","32","30","grd00:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","551","grd00:20","468","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_url("Common::ComPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchDown");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::ComPaging.xfdl");
        };
        
        // User Script
        this.registerScript("통계관리_국제감축사업현황.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        this.divSearch_sta06_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.sta06.addEventHandler("onclick",this.divSearch_sta06_onclick,this);
            this.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("통계관리_국제감축사업현황.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
