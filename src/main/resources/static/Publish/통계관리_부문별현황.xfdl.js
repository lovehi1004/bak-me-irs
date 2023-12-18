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

            obj = new Static("sta00","35","30","95","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("방법론분야");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","130","30","200","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_innerdataset", obj);
            divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">에너지산업</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","333","30","300","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">화석연료 바이오매스를 통한 열에너지 생산</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">신재생에너지로부터의 에너지 생산</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","663","31","124","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("신청기준(유효)");
            obj.set_value("false");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","817","31","124","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("승인기준(유효)");
            obj.set_value("false");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd00","5","divSearch:81",null,"180","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"43\"/><Row size=\"43\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업분야\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부분야\"/><Cell col=\"2\" rowspan=\"2\" text=\"방법론등록건수\"/><Cell col=\"3\" colspan=\"2\" text=\"사전심의승인 사업 건수\"/><Cell col=\"5\" colspan=\"2\" text=\"사전심의승인 사업 건수\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"연간예상 감축량(tCO2-eq)\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"연간예상 감축량(tCO2-eq)\"/></Band><Band id=\"body\"><Cell colspan=\"2\" textAlign=\"center\" text=\"합계\"/><Cell col=\"2\" textAlign=\"center\" text=\"46\"/><Cell col=\"3\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\"/><Cell row=\"1\" text=\"에너지 산업\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"화석연료, 바이오매스를 통한 열에너지 생산\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"23\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"2\" text=\"에너지 산업\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"신재생에너지로부터의 에너지 생산\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"23\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/></Band></Format></Formats>");
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
        this.registerScript("통계관리_부문별현황.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.CheckBox00_00.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.divSearch.form.CheckBox00_00_00.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("통계관리_부문별현황.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
