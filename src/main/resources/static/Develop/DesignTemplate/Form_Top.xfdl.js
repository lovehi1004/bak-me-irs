(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_background("url(\'theme://images/tnb_bg.jpg\') no-repeat right top #f9f9ff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,45);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"11","70","22","530",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_TF_User");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","30","45","467",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_User");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"0","30","45","413",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"11","81","22","13",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"11","52","22","Button00_00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"11","100","22","Button00_00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"11","67","22","Button00_00_00:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자료실");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"11","81","22","Button00_00_01:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_TF_UtilMenu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"11","50","22","Static01_00:8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("환경부");
            obj.set_cssclass("sta_TF_User02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","1393","45","90","39",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"35","0","0",null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("정보수정");
            obj.set_cssclass("sta_WF_Tooltip");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01_00","1393","95","90","39",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Tooltip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"35","0","0",null,null,null,null,this.PopupDiv01_00.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_cssclass("sta_WF_Tooltip");
            this.PopupDiv01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv01.form
            obj = new Layout("default","",0,0,this.PopupDiv01.form,function(p){});
            this.PopupDiv01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv01_00.form
            obj = new Layout("default","",0,0,this.PopupDiv01_00.form,function(p){});
            this.PopupDiv01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,45,this,function(p){});
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
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
