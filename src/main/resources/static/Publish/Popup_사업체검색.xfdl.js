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
                this._setFormPosition(800,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">5</Col><Col id=\"Column2\">사전승인신청</Col></Row><Row/><Row><Col id=\"Column1\">4</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","7","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("사업체 검색");
            obj.set_cssclass("sta_POP_Title");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","45","45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","45","89",null,null,"45","102",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"94","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div01_form_divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("Div01_form_divSearch_form_cbo01_innerdataset", obj);
            Div01_form_divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div01_form_divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("Div01_form_divSearch_form_cbo02_innerdataset", obj);
            Div01_form_divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var Div01_form_divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("Div01_form_divSearch_form_cbo03_innerdataset", obj);
            Div01_form_divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt09","130","31","250","32",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","35","31","95","32",null,null,null,null,null,null,this.Div01.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd00","5","divSearch:62",null,null,"5","40",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"사업수행자\"/><Cell col=\"2\" text=\"소재지\"/><Cell col=\"3\" text=\"업체회원수\"/></Band><Band id=\"body\"><Cell textAlign=\"center\"/><Cell col=\"1\" text=\"에코아이\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" text=\"인천광역시 남동구 논현고잔로 173(고잔동)\"/><Cell col=\"3\" textAlign=\"center\" text=\"1명\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","5",null,null,"32","565","grd00:10",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#f96262\'>122</fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01","131","grd00:20","468","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Common::ComPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,null,"88","32","122","grd00:10",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("직권등록");
            obj.set_cssclass("btn_WF_Crud");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,null,"114","32","5","grd00:10",null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","402",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","324",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01","20","64","290","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00","20","89","25","205",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_01","290",null,"290","25",null,"77",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_00_00",null,"89","25","205","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_01_01_00","155",null,"290","25",null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.divSearch.form
            obj = new Layout("default","",0,0,this.Div01.form.divSearch.form,function(p){});
            this.Div01.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form,function(p){});
            this.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::ComPaging.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.Div01.form.btnExcelUp00.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
        };
        this.loadIncludeScript("Popup_사업체검색.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
