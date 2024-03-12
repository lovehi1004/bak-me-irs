(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("메인화면");
            this.set_cssclass("sta_MF_NoticeTitle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1626,777);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"Title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Title\">2023년 7월 배출권 및 외부사업 인증실적 거래정보</Col></Row><Row><Col id=\"Title\">「배출권 유상할당 및 시장안정화 조치를 위한 배출권 추가할당에 관한 규정」 일부...</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"Title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Title\">[농식품부] 산림부문 배출권거래제 외부사업 극소규모 감축사...</Col></Row><Row><Col id=\"Title\">[산업발전부문] 배출권거래제 외부사업 극소규모 양식(&apos;23.6.7...</Col></Row><Row><Col id=\"Title\">[해양수산부] 배출권거래제 외부사업 극소규모 감축사업 양식...</Col></Row><Row><Col id=\"Title\">「외부사업 타당성 평가 및 감축량 인증에 관한 지침」(&apos;23.01) ...</Col></Row><Row><Col id=\"Title\">2020 배출권거래제 운영결과보고서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grd03", this);
            obj._setContents("<ColumnInfo><Column id=\"Title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Title\">기후위기 대응을 위한 탄소중립ㆍ녹색성장 기본법 및 시행령...</Col></Row><Row><Col id=\"Title\">[개정] 온실가스 배출권의 할당 및 거래에 관한 법률(법률...</Col></Row><Row><Col id=\"Title\">[제정] 배출권 거래시장 배출권거래중개회사에 관한 고시(환경...</Col></Row><Row><Col id=\"Title\">[개정] 배출권 유상할당 및 시장안정화 조치를 위한 배출권 추...</Col></Row><Row><Col id=\"Title\">[제정] 배출권 거래시장 배출권거래중개회사에 관한 고시(환경...</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","51","85",null,null,"49","25","1400",null,"600",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","10","30.8%","310",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_Box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","20",null,"40","15",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("협정");
            obj.set_cssclass("sta_MF_BoxTitleB");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"76","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","35","76",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("체결중");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"131","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"186","100","48","35",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","131",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("미발효");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","186",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("발효");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","Div00:48","10","30.8%","310",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","20",null,"40","15",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("방법론");
            obj.set_cssclass("sta_MF_BoxTitleP");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"76","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","35","76",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"131","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"186","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","131",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("검토");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","186",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"241","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","35","241",null,"48","Static02_00_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div02","10","362","30.8%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div02");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","48",null,null,"0","0",null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("0");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"474\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","48",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"7","96","34","9",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_NoticeMore");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00","Div02:48","362","30.8%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Div02");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","48",null,null,"0","0",null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("grd02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"472\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\"/></Band></Format></Formats>");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","48",null,null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("1");
            obj.set_text("자료실");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"7","96","34","9",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("2");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_NoticeMore");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Div("Div02_00_00","Div02_00:48","362",null,null,"10","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Div02");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","48",null,null,"0","0",null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("grd03");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"800\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:Title\"/></Band></Format></Formats>");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","48",null,null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("법령과 지침");
            obj.set_cssclass("sta_LOGIN_Title");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"7","96","34","9",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("더보기");
            obj.set_cssclass("btn_LOGIN_NoticeMore");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","Div00_00:48","10",null,"310","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_Box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","15","20",null,"40","15",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("사업");
            obj.set_cssclass("sta_MF_BoxTitleO");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"76","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","35","76",null,"48","Static02:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("사전신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"131","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"186","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","35","131",null,"48","Static02_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("평가");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","35","186",null,"48","Static02_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("심의신청");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"241","100","48","35",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("12<fc v=\'#777777\'><fs v=\'17\'>건</fs></fc>");
            obj.set_cssclass("sta_MF_ListNumber");
            obj.set_usedecorate("true");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","35","241",null,"48","Static02_00_00_00:0",null,null,null,null,null,this.Div01.form.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("sta_MF_ListItem");
            this.Div01.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","59","36","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\"true\">업무현황</b>(사업수행자)");
            obj.set_cssclass("sta_MF_Title");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00.form,function(p){});
            this.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02.form,function(p){});
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00.form,function(p){});
            this.Div01.form.Div02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00_00.form,function(p){});
            this.Div01.form.Div02_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_00_00.form,function(p){});
            this.Div01.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1626,777,this,function(p){});
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
            this.Div01.form.Div02_00_00.form.Static00.addEventHandler("onclick",this.Div02_00_00_Static00_onclick,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
