(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1720,56);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_bottom","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_BF_Bg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"14","180","30","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("바로가기");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","14","20","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_BF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line","128","24","1","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Line");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line00","615","24","1","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","141","20","580","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층 Fax : 043-714-7530");
            obj.set_cssclass("sta_BT_address");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","630","20","580","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Copyright© 2023 <b v=\'true\'>IRS</b> All rights reserved.");
            obj.set_cssclass("sta_BT_address");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1720,56,this,function(p){});
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
        this.loadIncludeScript("Form_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
