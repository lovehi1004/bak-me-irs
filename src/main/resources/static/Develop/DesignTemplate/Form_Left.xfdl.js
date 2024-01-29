(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(294,923);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd_Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">등록 관리</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">정보 관리 </Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">사용자 관리</Col></Row><Row><Col id=\"Name\">사용자 관리</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Name\">개인정보 열람 이력</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Name\">개인정보취급자관리</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Name\">사용자 활동내역</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Name\">사용자 접속 현황</Col><Col id=\"Lev\">1</Col><Col id=\"Column0\">Cell_Tree_ItemLast</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">계정폐쇄신청 관리(심의)</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">관장 기관 지정</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">코드관리</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Name\">사용자 관리</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Name\">개인정보 열람 이력</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Name\">개인정보취급자관리</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Name\">사용자 활동내역</Col></Row><Row><Col id=\"Name\">사용자 접속 현황</Col><Col id=\"Lev\">1</Col><Col id=\"Column0\">Cell_Tree_ItemLastS</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Name\">알림(SMS) 관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">메뉴 선택</Col><Col id=\"Column1\">Cell_Tree_ItemS</Col></Row><Row><Col id=\"Column0\">메뉴 마지막 스타일 </Col><Col id=\"Column1\">Cell_Tree_ItemLast</Col></Row><Row><Col id=\"Column0\">메뉴 마지막 스타일 선택시</Col><Col id=\"Column1\">Cell_Tree_ItemLastS</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","5","5","289",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_LF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"72","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_TF_LogoBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","80","58","209","855",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_LF_MenuBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","-19","13",null,null,"0","10",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("grd_Tree");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj.set_selecttype("row");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_scrollbarsize("13");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_treeuseexpandkey("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:Name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Lev\" cssclass=\"expr(Lev==&apos;0&apos;?&quot;Cell_Tree_Open&quot;:&quot;Cell_Tree_Item&quot;)\"/></Band></Format></Formats>");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","0","72","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("협정·약정관리");
            obj.set_cssclass("btn_LF_Menu01S");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","156","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("협의체 관리");
            obj.set_cssclass("btn_LF_Menu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","0","240","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("방법론 관리");
            obj.set_cssclass("btn_LF_Menu03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","324","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("사업 관리");
            obj.set_cssclass("btn_LF_Menu04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","0","408","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("실적 관리");
            obj.set_cssclass("btn_LF_Menu05");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","0","492","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("사업수행자\r\n관리");
            obj.set_cssclass("btn_LF_Menu06");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","0","576","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("통계");
            obj.set_cssclass("btn_LF_Menu07");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","0","660","80","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("정보공개 관리 ");
            obj.set_cssclass("btn_LF_Menu08");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","15","17","218","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_TF_Logo");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","330","77","321","73",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<상위메뉴에 하위메뉴가 있을 경우에만\r\nCell_Tree_Open, Cell_Tree_Close 적용필요");
            obj.set_visible("false");
            obj.set_color("Blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","875","0","77",null,null,"5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_LF_QuickBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","5",null,null,"0","5",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_LF_Bg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","6","72","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_Menu01S");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","6","156","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Menu02");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","6","240","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Menu03");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","6","324","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Menu04");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","6","408","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Menu05");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","6","492","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_Menu06");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","6","576","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_Menu07");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00_00","6","660","72","84",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Menu08");
            obj.set_textPadding("0px 0px 0px 0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","6","5",null,"72","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_TF_LogoBg");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","13","22","56","25",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_LF_Logo");
            this.Div00_00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01_00","936","183","120","30",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","0",null,null,"0","0",null,null,null,null,this.PopupDiv01_00.form);
            obj.set_taborder("0");
            obj.set_text("방법론 관리");
            obj.set_cssclass("sta_LF_Tooltip");
            this.PopupDiv01_00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01_00_00","936","99","144","30",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","3","0",null,"30","0",null,null,null,null,null,this.PopupDiv01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("사업수행자관리");
            obj.set_cssclass("sta_LF_Tooltip");
            this.PopupDiv01_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","1047","238","209",null,null,"-170",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LF_MenuBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1047","251",null,null,"-962","-160",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("grd_Tree");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_selecttype("row");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_scrollbarsize("13");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_treeuseexpandkey("false");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:Name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Lev\" cssclass=\"expr(Lev==&apos;0&apos;?&quot;Cell_Tree_Open&quot;:&quot;Cell_Tree_Item&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","385","221","423","420",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_LF_MenuBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","18","58","380","297",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"188\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"스타일\"/><Cell col=\"1\" text=\"상태 설명\"/></Band><Band id=\"body\"><Cell cssclass=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv01_00.form
            obj = new Layout("default","",0,0,this.PopupDiv01_00.form,function(p){});
            this.PopupDiv01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv01_00_00.form
            obj = new Layout("default","",0,0,this.PopupDiv01_00_00.form,function(p){});
            this.PopupDiv01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",294,923,this,function(p){});
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
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
