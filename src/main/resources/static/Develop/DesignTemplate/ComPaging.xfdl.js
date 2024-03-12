(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ComPaging");
            this.set_titletext("페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(468,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button02","28","0","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageL");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","410","0","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PageR");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","0","0","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PageP");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","439","0","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PageN");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","65","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","96","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","129","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","163","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","197","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","230","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","263","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","296","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","329","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","365","0","26","19",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Page");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",468,20,this,function(p){});
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
        this.loadIncludeScript("ComPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
