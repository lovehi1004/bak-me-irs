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
                this._setFormPosition(440,277);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","20","19",null,"45","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","7","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("로그인 권한 선택");
            obj.set_cssclass("sta_POP_Title");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","45","45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","45","89",null,null,"45","102",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","60","21",null,"30","60",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            var Div01_form_rdo00_innerdataset = new nexacro.NormalDataset("Div01_form_rdo00_innerdataset", obj);
            Div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">관장기관</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업수행자</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_rdo00_innerdataset);
            obj.set_text("사전승인신청");
            obj.set_value("0");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03_01","144",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","222",null,"75","32",null,"45",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",440,277,this,function(p){});
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
            this.Div01.form.rdo00.addEventHandler("onitemchanged",this.div01_00_00_rdo00_onitemchanged,this);
        };
        this.loadIncludeScript("로그인권한선택.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
