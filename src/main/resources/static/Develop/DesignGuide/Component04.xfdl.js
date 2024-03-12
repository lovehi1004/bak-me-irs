(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component03");
            this.set_titletext("조회화면 관련 그리드");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,2840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"매입계산서번호\" type=\"STRING\" size=\"256\"/><Column id=\"전표발행\" type=\"STRING\" size=\"256\"/><Column id=\"정산일\" type=\"STRING\" size=\"256\"/><Column id=\"발생일자\" type=\"STRING\" size=\"256\"/><Column id=\"시간구분\" type=\"STRING\" size=\"256\"/><Column id=\"과세구분\" type=\"STRING\" size=\"256\"/><Column id=\"대금지불유형\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"단가\">1500000000</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"NO\">01</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">02</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">03</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"NO\">04</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">05</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">06</Col><Col id=\"단위\">KRW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">1뎁스메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">2뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_nodata", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lstv", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"decoratetext\" type=\"STRING\" size=\"256\"/><Column id=\"cbo\" type=\"STRING\" size=\"256\"/><Column id=\"expand\" type=\"STRING\" size=\"256\"/><Column id=\"prgs\" type=\"STRING\" size=\"256\"/><Column id=\"edi\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"cal\" type=\"STRING\" size=\"256\"/><Column id=\"msk\" type=\"STRING\" size=\"256\"/><Column id=\"msknum\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image01.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">50</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image02.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">30</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image03.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">45</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">가나다라</Col><Col id=\"text\">가나다라</Col></Row><Row><Col id=\"code\">가나다라</Col><Col id=\"text\">가나다라</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta109","48","160",null,"1294","52",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","98","210","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","98","325","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("43");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","98","366","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("43");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","122","311","9","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","122","353","9","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","122","612","9","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GBar");
            obj.set_text("<fc v=\'#3683e2\'><fs v=\'13\'>IRS</fs></fc>\r\nComponent KIT\r\n<fc v=\'#acafbb\'><fs v=\'11\'>조회화면 그리드 스타일</fs></fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"64","61","50","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("03");
            obj.set_cssclass("sta_WF_GNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00","98","626","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("43");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"300","9","10","183",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"299","22","13","159",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","130","310",null,"355","131",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dc_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"134\"/><Column size=\"157\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/><Row size=\"35\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"&lt;fc v=&quot;#ea0a2f&quot;&gt;&lt;b v=&quot;true&quot;&gt;*&lt;/b&gt;&lt;/fc&gt;Calendar\" displaytype=\"decoratetext\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"Expand\"/><Cell col=\"8\" text=\"Text\"/><Cell col=\"9\" text=\"Number\"/><Cell col=\"10\" text=\"Button\"/><Cell col=\"11\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"ds00\" combodatacol=\"text\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Calendar\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"6\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Cal\"/><Cell col=\"7\" text=\"bind:Expand\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Edit\" displaytype=\"editcontrol\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"9\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"11\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"총계\" displaytype=\"text\"/><Cell col=\"9\" colspan=\"3\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_02",null,"268","75","32","131",null,"75",null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00",null,"268","119","32","Button03_02:3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00",null,"268","107","32","btnCust00_00_00:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"278","22","13","445",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("32");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"268","9","32","442",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1070,2840,this,function(p){});
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
            this.Static102.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static75_00.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static102_onclick,this);
        };
        this.loadIncludeScript("Component04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
