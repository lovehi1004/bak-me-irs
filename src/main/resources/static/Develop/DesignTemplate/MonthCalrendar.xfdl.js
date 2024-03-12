(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MonthCalrendar");
            this.set_titletext("월달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(269,309);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","269","309",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_CAL_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","12","243","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("2023");
            obj.set_cssclass("sta_WF_CalHead");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","28","34","25","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalPrev");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"34","25","16","28",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalNext");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","27","86","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04","13","72",null,"14","13",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_00","13","276",null,"14","13",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01","13","72","14",null,null,"92",null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04_01_00",null,"72","14","218","13",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","82","86","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","137","86","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","192","86","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01","27","151","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal05");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","27","216","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal09");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_01","82","151","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Cal06");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_01","137","151","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Cal07");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00","192","151","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Cal08");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_01_00","82","216","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Cal10");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_01_00","137","216","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Cal11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00","192","216","50","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Cal12");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",269,309,this,function(p){});
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
        this.loadIncludeScript("MonthCalrendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
