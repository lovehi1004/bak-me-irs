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
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"94","25",null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Button("btnSearch",null,null,"80","31","65","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","31","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","95","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("상위코드명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","130","31","220","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_innerdataset", obj);
            divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계정상태코드</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">사용자계정상태 구분코드</Col></Row><Row><Col id=\"datacolumn\">추가자료유형코드</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","475","31","150","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">처분계정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보유계정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">취소계정</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","380","31","95","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("하위코드명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","655","30","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01","735","30","100","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_01_innerdataset", obj);
            divSearch_form_cbo02_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd00","5","175","56.39%",null,null,"123",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"90\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상위코드\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"코드설명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","98","grd00:30","468","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Develop_DesignTemplate::ComPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47.37%","divSearch:-6","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchDown");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","grd00:20","175",null,null,"30","123",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"90\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"하위코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"코드설명\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","5","133","56.39%","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown00",null,"0","75","32","78",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","btnExcelDown00:3","0","75","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","div00:20","135","185",null,null,"grd00_00:10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("하위코드 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown01",null,null,"75","32","31","grd00:11",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown00_00",null,"132","75","32","btnExcelDown01:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","948","grd00_00:30","468","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_url("Develop_DesignTemplate::ComPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","5","135","185","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상위코드 목록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Develop_DesignTemplate::ComPaging.xfdl");
        };
        
        // User Script
        this.registerScript("코드관리_공통코드관리.xfdl", function() {

        this.divSearch_sta00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div00.form.btnExcelDown00.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.div00.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.sta00_00_00_00_00.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
            this.btnExcelDown01.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.btnExcelDown00_00.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.sta00_00_00_00.addEventHandler("onclick",this.sta00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("코드관리_공통코드관리.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
