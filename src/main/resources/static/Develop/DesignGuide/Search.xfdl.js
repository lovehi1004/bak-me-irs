(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_cssclass("frm_WF_Frame");
            this.set_titletext("Search");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W25");
            this.addChild(obj.name, obj);

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

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","116","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","151","31","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_innerdataset", obj);
            divSearch_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","361","31","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","471","31","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_00_00_innerdataset", obj);
            divSearch_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","681","31","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt09","791","31","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","1001","31","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt09_00","1111","31","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearch00","0","100",null,"131","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","116","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch00_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo01_innerdataset", obj);
            divSearch00_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch00_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo02_innerdataset", obj);
            divSearch00_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch00_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo03_innerdataset", obj);
            divSearch00_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01","361","31","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","151","31","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo02_00_innerdataset", obj);
            divSearch00_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","471","31","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo02_00_00_innerdataset", obj);
            divSearch00_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_00","681","31","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edt09","791","31","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","1001","31","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edt09_00","1111","31","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta00_00","35","68","116","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_01","361","68","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("15");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01","151","68","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_form_cbo02_00_01_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo02_00_01_innerdataset", obj);
            divSearch00_form_cbo02_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo02_00_01_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00","471","68","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_form_cbo02_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo02_00_00_00_innerdataset", obj);
            divSearch00_form_cbo02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo02_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","681","68","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("18");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edt09_01","791","68","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("19");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1001","68","110","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("20");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00","1111","68","180","32",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("21");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Div("divSearch00_00","0","240",null,"168","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","116","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01","361","31","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("1");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","151","31","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_innerdataset", obj);
            divSearch00_00_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","471","31","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_00_innerdataset", obj);
            divSearch00_00_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00","681","31","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09","791","31","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","1001","31","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00","1111","31","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","35","68","116","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_01","361","68","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("11");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01","151","68","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_01_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_01_innerdataset", obj);
            divSearch00_00_form_cbo02_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_01_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00","471","68","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_00_00_innerdataset", obj);
            divSearch00_00_form_cbo02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","681","68","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("14");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_01","791","68","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1001","68","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("16");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00","1111","68","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","35","105","116","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("18");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","361","105","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("19");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01_00","151","105","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_01_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_01_00_innerdataset", obj);
            divSearch00_00_form_cbo02_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_01_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00_00","471","105","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_form_cbo02_00_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_form_cbo02_00_00_00_00_innerdataset", obj);
            divSearch00_00_form_cbo02_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_form_cbo02_00_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","681","105","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("22");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_01_00","791","105","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","1001","105","110","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("24");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00_00","1111","105","180","32",null,null,null,null,null,null,this.divSearch00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button00","47.62%","divSearch00_00:-6","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchDown");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00_00_00","0","430",null,"205","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","35","31","116","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo03","526","-157","184","28",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch00_00_00_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo03_innerdataset", obj);
            divSearch00_00_00_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01","361","31","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","31",null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","31",null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00","151","31","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00","471","31","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00","681","31","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09","791","31","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","1001","31","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00","1111","31","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","35","68","116","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_01","361","68","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01","151","68","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_01_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_01_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_01_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00","471","68","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_00_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","681","68","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_01","791","68","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","1001","68","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00","1111","68","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","35","105","116","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","361","105","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01_00","151","105","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_01_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_01_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_01_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00_00","471","105","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_00_00_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","681","105","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_01_00","791","105","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","1001","105","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("25");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00_00","1111","105","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","35","142","116","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("27");
            obj.set_text("가나다라마바 ");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00","361","142","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("28");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_01_00_00","151","142","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_01_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_01_00_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_01_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Combo("cbo02_00_00_00_00_00","471","142","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch00_00_00_form_cbo02_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch00_00_00_form_cbo02_00_00_00_00_00_innerdataset", obj);
            divSearch00_00_00_form_cbo02_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_00_00_form_cbo02_00_00_00_00_00_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00","681","142","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("31");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_01_00_00","791","142","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_00","1001","142","110","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("33");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt09_00_00_00_00","1111","142","180","32",null,null,null,null,null,null,this.divSearch00_00_00.form);
            obj.set_taborder("34");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","47.62%","divSearch00_00_00:-6","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SchDown");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch00.form
            obj = new Layout("default","",0,0,this.divSearch00.form,function(p){});
            this.divSearch00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch00_00.form
            obj = new Layout("default","",0,0,this.divSearch00_00.form,function(p){});
            this.divSearch00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch00_00_00.form
            obj = new Layout("default","",0,0,this.divSearch00_00_00.form,function(p){});
            this.divSearch00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            obj.set_mobileorientation("landscape");
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

        };
        this.loadIncludeScript("Search.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
