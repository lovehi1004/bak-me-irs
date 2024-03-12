(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MdiFrame");
            this.set_titletext("MDI");
            if (Form == this.constructor)
            {
                this._setFormPosition(1626,45);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">메뉴명</Col></Row><Row><Col id=\"Column0\">메뉴명</Col></Row><Row><Col id=\"Column0\">메뉴명</Col></Row><Row><Col id=\"Column0\">메뉴명</Col></Row><Row><Col id=\"Column0\">메뉴명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MDI_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"7","31","31","33",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptext("Close All");
            obj.set_cssclass("btn_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"7","21","31","101",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Right");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"7","21","31","129",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Left");
            this.addChild(obj.name, obj);

            obj = new Button("btn03",null,"7","19","31","70",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30",null,null,"35","159","0",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","0","0","171","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("사전승인사업 신청");
            obj.set_cssclass("btn_MDI_TabBtn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn01_00","btn01:0","0","186","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("국제감축협의체 현황");
            obj.set_cssclass("btn_MDI_TabBtnS");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:-28","6","22","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_TabClose");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn02_00","btn01_00:-28","6","22","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_TabCloseS");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","4","16","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_Show");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","56","16","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Hidden");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1348","83","202","302",null,null,null,null,null,null,this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MDI_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"172\"/><Column size=\"30\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" cssclass=\"Cell_MDI_ListDelete\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","1501","35","90","39",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"35","0","0",null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("전체닫기");
            obj.set_cssclass("sta_WF_Tooltip");
            this.PopupDiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv01.form
            obj = new Layout("default","",0,0,this.PopupDiv01.form,function(p){});
            this.PopupDiv01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1626,45,this,function(p){});
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
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
        };
        this.loadIncludeScript("Form_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
