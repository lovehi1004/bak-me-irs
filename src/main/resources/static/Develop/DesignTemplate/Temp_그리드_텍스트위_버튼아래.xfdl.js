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

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","104","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("제·개정 구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","139","31","120","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_innerdataset", obj);
            divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">개정</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","289","31","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","369","31","120","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">평가</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">심의</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","519","31","101","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("방법론 분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","770","31","131","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("방법론 세부분야");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00","620","31","120","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규등록</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직권등록</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00_00","901","31","120","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규등록</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직권등록</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1051","31","80","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("방법론명");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt09","1131","31","200","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd00","5","divSearch:81",null,null,"30","123",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"27\"/><Row size=\"27\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"대상국\"/><Cell col=\"4\" rowspan=\"2\" text=\"파리협정&#13;&#10;조항\"/><Cell col=\"5\" rowspan=\"2\" text=\"제·개정\"/><Cell col=\"6\" text=\"방법론명(원문)\"/><Cell col=\"7\" rowspan=\"2\" text=\"방법론분야\"/><Cell col=\"8\" rowspan=\"2\" text=\"방법론 고유번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"방법론&#13;&#10;유효시작일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"관장기관\"/><Cell col=\"11\" rowspan=\"2\" text=\"작업구분\"/><Cell col=\"12\" rowspan=\"2\" text=\"설명파일\"/><Cell row=\"1\" col=\"6\" text=\"방법론명(국문)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\"/><Cell col=\"2\" rowspan=\"2\" textAlign=\"center\" text=\"사전승인신청\"/><Cell col=\"3\" rowspan=\"2\" textAlign=\"center\" text=\"몽골\"/><Cell col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"제6.2조\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"신규\"/><Cell col=\"6\" text=\"Greenhouse gas project\" textAlign=\"center\"/><Cell col=\"7\" rowspan=\"2\" textAlign=\"center\" text=\"에너지 - 에너지세부분야\"/><Cell col=\"8\" rowspan=\"2\" textAlign=\"center\" text=\"P62-VET-1A-56\"/><Cell col=\"9\" rowspan=\"2\" textAlign=\"center\" text=\"2024-01-16\"/><Cell col=\"10\" rowspan=\"2\" textAlign=\"center\" text=\"버튼\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"Cell_WF_btnType01\"/><Cell col=\"11\" rowspan=\"2\" textAlign=\"center\" cssclass=\"Cell_WF_Search\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"12\" textAlign=\"center\" expandsize=\"16\" controlautosizingtype=\"none\" text=\"텍스트\" cssclass=\"Cell_MergeBottom\"/><Cell row=\"1\" col=\"6\" textAlign=\"center\" text=\"베트남 국제감축 방법론\"/><Cell row=\"1\" col=\"12\" text=\"버튼\" controlautosizingtype=\"none\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"3px 7px\" textAlign=\"center\" cssclass=\"Cell_WF_ComnBtn\"/></Band></Format></Formats>");
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

            obj = new Button("btnExcelDown",null,null,"88","32","269","grd00:10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("직권등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,null,"119","32","30","grd00:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","551","grd00:20","468","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_url("Develop_DesignTemplate::ComPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","47.37%","divSearch:-5","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchDown");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,null,"114","32","152","grd00:10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_CrudSub");
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
            this._addPreloadList("fdl","Develop_DesignTemplate::ComPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Temp_그리드_텍스트위_버튼아래.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnExcelUp00.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
        };
        this.loadIncludeScript("Temp_그리드_텍스트위_버튼아래.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
