(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("신청완료");
            this.set_titletext("모달리스팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd01", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"처리자\" type=\"STRING\" size=\"256\"/><Column id=\"처리결과\" type=\"STRING\" size=\"256\"/><Column id=\"처리일자\" type=\"STRING\" size=\"256\"/><Column id=\"관장기관\" type=\"STRING\" size=\"256\"/><Column id=\"선택\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2020-02-19 15:59</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">심의승인</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">3</Col></Row><Row><Col id=\"구분\">문서재제출</Col><Col id=\"처리자\">산업통상자원부</Col><Col id=\"처리일자\">2019-12-27 13:43</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">현재문서</Col><Col id=\"번호\">2</Col></Row><Row><Col id=\"구분\">최초신청</Col><Col id=\"처리자\">현대제철 주식회사</Col><Col id=\"처리일자\">2019-12-18 16:29</Col><Col id=\"관장기관\">산업통상자원부</Col><Col id=\"처리결과\">문서보완요청</Col><Col id=\"선택\">상세보기</Col><Col id=\"번호\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">연료 전환사업의 방법론 [1차]</Col><Col id=\"Column1\">방법론 조회</Col></Row><Row><Col id=\"Column0\">연료 전환사업의 방법론 [2차]</Col><Col id=\"Column1\">밥법론 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01_00", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01_00_00", this);
            obj.getSetter("onclick").set("dc_grd01_onclick");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"대표\" type=\"STRING\" size=\"256\"/><Column id=\"사업수행자\" type=\"STRING\" size=\"256\"/><Column id=\"국내해외구분\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\" type=\"STRING\" size=\"256\"/><Column id=\"환산계수\" type=\"STRING\" size=\"256\"/><Column id=\"연평균온실가스배출감축량\" type=\"STRING\" size=\"256\"/><Column id=\"사용자동의여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업수행자\">현대건설</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">300 MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">대표</Col><Col id=\"연평균온실가스배출감축량\">600 tCO2-eq</Col><Col id=\"사용자동의여부\">동의</Col></Row><Row><Col id=\"사업수행자\">현대남부발전주식회사</Col><Col id=\"국내해외구분\">국내</Col><Col id=\"연평균온실가스배출감축량사업계획서의연평균온실가스배출감축량입력\">200MW</Col><Col id=\"사업자등록번호\">123-45-67890</Col><Col id=\"환산계수\">MW * 2</Col><Col id=\"대표\">-</Col><Col id=\"연평균온실가스배출감축량\">400 tCO2-eq</Col><Col id=\"사용자동의여부\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("#ffffff");
            obj.set_formscrollbartype("auto");
            obj.set_formscrolltype("horizontal");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc00_00","25","237",null,null,"25","312","860",null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("정상적으로 <fc v=\'#f7466b\'>신규신청</fc> 되었습니다.");
            obj.set_cssclass("sta_MS_txt01");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","25","stc00_00:19",null,null,"25","180","860",null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("신청하신 사업정보는 외부 사업 타당성 평가 및 감축량 인증에 관한 지침 제40조 2항에 근거하여 외부에 공개될 수 있습니다.\r\r\n정보 비공개를 원하실 경우 <b v=\'true\'><fc v=\'#000000\'>외부 사업 비공개 신청</fc></b> 메뉴를 이용하여 신청 등록하여 주시기 바랍니다.\r\n\r감사합니다.");
            obj.set_cssclass("sta_MS_txt02");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","25",null,null,"32","25","25",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button03_01_00",null,null,"110","32","338","0",null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("사업신청목록");
            obj.set_cssclass("btn_POP_Cancel");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Button("Button03_01",null,null,"160","32","Button03_01_00:3","0",null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("비공개 신청하러 가기");
            obj.set_cssclass("btn_POP_Confirm");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new ImageViewer("Img00","406","110",null,"91","406",null,"98",null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Comp.png\')");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_신청완료.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        this.sta00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_sta08_00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_00_edt02_01_01_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_edt02_01_01_00_00_00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_00_edt02_00_onchanged = function(obj,e)
        {

        };

        this.fud00_00_00_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_00_sta08_02_onclick = function(obj,e)
        {

        };

        this.div01_00_00_00_edt02_01_01_00_00_02_onchanged = function(obj,e)
        {

        };

        this.sta00_00_00_00_onclick = function(obj,e)
        {

        };

        this.div01_00_00_02_00_edt02_00_onchanged = function(obj,e)
        {

        };

        this.txa00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_txa00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_03_00_00_00_cbo00_00_00_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_02_00_03_00_00_sta08_01_onclick = function(obj,e)
        {

        };

        this.div01_00_cbo02_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_rdo00_onitemchanged = function(obj,e)
        {

        };

        this.div01_00_00_edt02_01_01_00_00_onchanged = function(obj,e)
        {

        };

        this.div01_00_00_cbo00_00_00_00_00_00_01_00_onitemchanged = function(obj,e)
        {

        };

        this.Button03_01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Popup_신청완료.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
