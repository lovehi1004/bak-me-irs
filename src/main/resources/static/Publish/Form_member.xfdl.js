(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Member");
            this.set_titletext("회원유형선택");
            this.set_cssclass("frm_MEMBER_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,923);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","177","104","1566","670",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","0",null,"80","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div00","90","15","275","50",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","1","0","50","50",null,null,null,null,null,null,this.Div01.form.Div01.form.div00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_Step01_on.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00.addChild(obj.name, obj);

            obj = new Static("stc00","63","0","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Step1");
            obj.set_cssclass("sta_MB_StepOn");
            this.Div01.form.Div01.form.div00.addChild(obj.name, obj);

            obj = new Static("stc00_00","63","20","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("회원가입유형");
            obj.set_cssclass("sta_MB_StepOnTxt");
            this.Div01.form.Div01.form.div00.addChild(obj.name, obj);

            obj = new ImageViewer("Img00_00",null,"14","12","22","0",null,null,null,null,null,this.Div01.form.Div01.form.div00.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_on.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","467","15","275","50",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","1","0","50","50",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step02_off.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00","63","0","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Step2");
            obj.set_cssclass("sta_MB_StepOff");
            this.Div01.form.Div01.form.div00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00","63","20","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.Div01.form.Div01.form.div00_00.addChild(obj.name, obj);

            obj = new ImageViewer("Img00_00",null,"14","12","22","0",null,null,null,null,null,this.Div01.form.Div01.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00","844","15","275","50",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","1","0","50","50",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step03_off.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00_00_00.addChild(obj.name, obj);

            obj = new Static("stc00","63","0","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Step3");
            obj.set_cssclass("sta_MB_StepOff");
            this.Div01.form.Div01.form.div00_00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00","63","20","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보입력");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.Div01.form.Div01.form.div00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("Img00_00",null,"14","12","22","0",null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00_00","1221","15","275","50",null,null,null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","1","0","50","50",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step04_off.png\')");
            obj.set_text("");
            this.Div01.form.Div01.form.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("stc00","63","0","120","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Step4");
            obj.set_cssclass("sta_MB_StepOff");
            this.Div01.form.Div01.form.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("stc00_00","63","20","147","24",null,null,null,null,null,null,this.Div01.form.Div01.form.div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("사용자등록완료");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.Div01.form.Div01.form.div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00","0",null,null,"580","0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_00","439","170","260","240",null,null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("관장(위탁)기관");
            obj.set_cssclass("btn_MEMBER_UserSel01");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"170","260","240","434",null,null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("사업수행자");
            obj.set_cssclass("btn_MEMBER_UserSel02");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00","0","803",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","90","25","207","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/main/img_BF_CI.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","354","23","171","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("sta_BF_TitleB");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","354","54","796","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("충청북도 청주시 오송읍 오송생명로 210 오송스퀘어 2~3층    HelpDesk : 1577-8065     Fax : 043-714-7530\r\nCopyright© 2023 <b v=\'ture\'>IRS</b> All rights reserved.");
            obj.set_cssclass("sta_BT_address2");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"24","280","40","90",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("바로가기");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","0",null,"65","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_LOGIN_TopBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","90","18","276","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"17","112","31","63",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("정보공개");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"17","100","31","Button00_00_00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"17","136","31","Button00_00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("법령과 지침");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"17","100","31","Button00_00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("자료실");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"17","112","31","Button00_00:70",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_LOGIN_TopMenu");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div01.form.div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form.div00.form,function(p){});
            this.Div01.form.Div01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01.form.div00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form.div00_00.form,function(p){});
            this.Div01.form.Div01.form.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01.form.div00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form.div00_00_00.form,function(p){});
            this.Div01.form.Div01.form.div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01.form.div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form.div00_00_00_00.form,function(p){});
            this.Div01.form.Div01.form.div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form,function(p){});
            this.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00.form,function(p){});
            this.Div01.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,923,this,function(p){});
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
        this.loadIncludeScript("Form_member.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
