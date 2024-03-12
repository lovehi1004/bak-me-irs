(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMultiCombo");
            this.set_titletext("멀티콤보 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">백설기</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">백설기11</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">백설기22</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">백설기33</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">백설기44</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">백설기55</Col><Col id=\"group\">a</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">백설기66</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">백설기77</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">백설기88</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">백설기99</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">백설기10</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">백설기11</Col><Col id=\"group\">b</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">백설기12</Col><Col id=\"group\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"srchCond1\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">백설기</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">백설기22</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">백설기33</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">백설기44</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">백설기55</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">백설기66</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">백설기77</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">백설기88</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">백설기99</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">백설기10</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">백설기12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">백설기</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">백설기22</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">백설기33</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">백설기44</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">백설기55</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">백설기66</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">백설기77</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">백설기88</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">백설기99</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">백설기10</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">백설기12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest04", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">백설기</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">백설기22</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">백설기33</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">백설기44</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">백설기55</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">백설기66</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">백설기77</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">백설기88</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">백설기99</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">백설기10</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">백설기12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest05", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">백설기</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">백설기22</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">백설기33</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">백설기44</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">백설기55</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">백설기66</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">백설기77</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">백설기88</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">백설기99</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">백설기10</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">백설기11</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">백설기12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest06", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b01</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c01</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">A01</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">B01</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">C01</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">a02</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">b02</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">c02</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">A02</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">B02</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">C02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest07", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b01</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c01</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">A01</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">B01</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">C01</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">a02</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">b02</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">c02</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">A02</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">B02</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">C02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest08", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b01</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c01</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">A01</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">B01</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">C01</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">a02</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">b02</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">c02</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">A02</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">B02</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">C02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest09", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b01</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c01</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">A01</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">B01</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">C01</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">a02</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">b02</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">c02</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">A02</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">B02</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">C02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest10", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b01</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c01</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">A01</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">B01</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">C01</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">a02</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">b02</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">c02</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">A02</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">B02</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">C02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest11", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">a01가</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">b02나</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">c03다</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">d04라</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">a05가</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">b06나</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">c07다</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">d08라</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">a09가</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">b10나</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">c11다</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">d12라</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">바a01가a</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">사b02나b</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"name\">아c03다c</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"name\">자d04라d</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"name\">차a05가a</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"name\">카b06나b</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"name\">타c07다c</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">파d08라d</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">하a09가a</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"name\">바b10나b</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">사c11다c</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"name\">아d12라d</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMultiComboDefault01","370","65","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault02","975","65","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault03","370","295","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault04","975","305","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault05","370","533","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnDefaultMCboSetValue","-385","750","111","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","370","25","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("6) 멀티콤보 (코드 + 값 표시, displaynulltext = 전체 설정) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo01Code","370","115","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo01Code","550","115","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo01Code","550","181","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("02");
            obj.set_text("02");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo01Code","370","181","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo01Text","370","148","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo01Text","550","148","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","975","25","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("9) 멀티콤보 ( 멀티선택, 초기전체선택처리) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo02Code","975","115","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo02Code","1155","115","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo02Code","1155","181","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_value("03,05");
            obj.set_text("03,05");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo02Code","975","181","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo02Text","975","148","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo02Text","1155","148","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","370","255","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("7) 멀티콤보 (코드+값 표시, \"전체선택완료\" 표시) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo03Code","370","345","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo03Code","550","345","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo03Code","550","411","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("04,06");
            obj.set_text("04,06");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo03Code","370","411","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo03Text","370","378","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo03Text","550","378","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04","975","255","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("10) 멀티콤보 (초기전체선택처리,\r\n\"전체선택완료\" 표시, 건수 5건표시) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo04Code","975","355","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo04Code","1155","355","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo04Code","1155","421","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_value("07,09");
            obj.set_text("07,09");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo04Code","975","421","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo04Text","975","388","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo04Text","1155","388","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle05","370","485","450","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("8) 멀티콤보 (초기전체선택처리,\r\n\"전체선택\" 표시, 건수 5건표시, width 300 으로 조정) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo05Code","370","583","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo05Code","550","583","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo05Code","550","649","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("02,05");
            obj.set_text("02,05");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo05Code","370","649","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo05Text","370","616","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo05Text","550","616","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo01CLear","722","65","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo02CLear","1327","65","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo03CLear","722","295","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo04CLear","1327","305","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo05CLear","722","525","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle07","18","29","210","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1) combo (type : filterlike) \r\n편집창에 입력된 문자열이 <b v=\'true\'><fc v=\'red\'>포함</fc></b>\r\n대소문자를 <b v=\'true\'><fc v=\'red\'>구별함</fc></b>\r\n해당아이템만 표시");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboFilterlike","18","staTitle07:10","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTest06");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_type("filterlike");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle08","18","149","210","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2) combo (type : caseifilterlike)\r\n편집창에 입력된 문자열이 <b v=\'true\'><fc v=\'red\'>포함</fc></b>\r\n대소문자를 <b v=\'true\'><fc v=\'red\'>구별하지 않음</fc></b>\r\n해당아이템만 표시");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCaseifilterlike","18","staTitle08:10","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTest07");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_type("caseifilterlike");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle10","18","401","210","90",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("4) combo (type :search)\r\n편집창에 입력된 문자열로 <b v=\'true\'><fc v=\'red\'>시작</fc></b>\r\n대소문자를 <b v=\'true\'><fc v=\'red\'>구별함</fc></b>\r\n아이템 리스트에는 전체 아이템이\r\n모두 표시됩니다.");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearch","18","staTitle10:10","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTest08");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_type("search");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle11","18","541","210","90",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5) combo (type : caseisearch)\r\n편집창에 입력된 문자열로 <b v=\'true\'><fc v=\'red\'>시작</fc></b>\r\n대소문자를 <b v=\'true\'><fc v=\'red\'>구별하지 않음</fc></b>\r\n아이템 리스트에는 전체 아이템이\r\n모두 표시됩니다.");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCaseisearch","18","staTitle11:10","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTest09");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_type("caseisearch");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle09","18","269","210","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3) combo (type : caseifilter)\r\n편집창에 입력된 문자열로 <b v=\'true\'><fc v=\'red\'>시작</fc></b>\r\n대소문자를 <b v=\'true\'><fc v=\'red\'>구별하지 않음</fc></b>\r\n해당아이템만 표시");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCaseifilter","18","staTitle09:10","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTest10");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_type("caseifilter");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault06","980","525","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comMultiCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle06","980","485","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("11) 멀티콤보 (멀티콤보 데이터검색 기능 가능) ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo06Code","980","575","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("콤보 코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo06Code","1160","575","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMultiCombo06Code","1160","641","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_value("02,05");
            obj.set_text("02,05");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMultiCombo06Code","980","641","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("콤보 코드 설정하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMultiCombo06Text","980","608","164","25",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("콤보 값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetMultiCombo06Text","1160","608","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo06CLear","1332","525","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo01Filter","803","66","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("필터적용");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo01FilterClear","803","96","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("필터해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiCombo01Filter01","803","126","134","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("필터적용(전체선택)");
            this.addChild(obj.name, obj);

            obj = new Static("stc01","370","0","186","25",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("참고용");
            obj.set_color("chocolate");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00","18","0","186","25",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("콤보 옵션별 기능예시");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMultiComboDefault01
            obj = new Layout("default","",0,0,this.divMultiComboDefault01.form,function(p){});
            this.divMultiComboDefault01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault02
            obj = new Layout("default","",0,0,this.divMultiComboDefault02.form,function(p){});
            this.divMultiComboDefault02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault03
            obj = new Layout("default","",0,0,this.divMultiComboDefault03.form,function(p){});
            this.divMultiComboDefault03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault04
            obj = new Layout("default","",0,0,this.divMultiComboDefault04.form,function(p){});
            this.divMultiComboDefault04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault05
            obj = new Layout("default","",0,0,this.divMultiComboDefault05.form,function(p){});
            this.divMultiComboDefault05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault06
            obj = new Layout("default","",0,0,this.divMultiComboDefault06.form,function(p){});
            this.divMultiComboDefault06.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtGetMultiCombo01Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSetMultiCombo01Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtGetMultiCombo01Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtGetMultiCombo02Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSetMultiCombo02Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtGetMultiCombo02Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtGetMultiCombo03Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSetMultiCombo03Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtGetMultiCombo03Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGetMultiCombo04Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtSetMultiCombo04Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGetMultiCombo04Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGetMultiCombo05Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtSetMultiCombo05Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtGetMultiCombo05Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtGetMultiCombo06Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtSetMultiCombo06Code","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtGetMultiCombo06Text","value","dsGroupUserList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comMultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("sampleMultiCombo.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleMultiCombo Form
        * FILE NAME     : sampleMultiCombo.xfdl
        * DESCRIPTION   : 멀티콤보 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.25    TOBESOFT	     최초생성
        ***********************************************************************************/



        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// TODO
        };

        /**
         * @description Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면
         *              gfnSetFormInit 를 통해 공통 초기화 작업이 수행된다.
         *              콜백함수명을 지정하여 해당 함수에서 개발자의 초기작업 코드를 기술한다.
         */
        this.form_onload = function(obj,e)
        {
        	// Load 후 초기화설정 및 Data Setting
        	this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	//trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	this.btnMultiCombo01CLear.setFocus();

        	// 멀티콤보 초기화
        	// 데이터를 조회해와야 할 경우 데이터조회 후  fnInitMultiCombo 호출할 것
        	/*
        	 * @param {Object} 	objParam	- 전달 param
        	 *								objDs - 멀티콤보에 표시할 Dataset object
        	 *								sCodeColumn - 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        	 *								sDataColumn - 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        	 *								sCallbackFunc - 콜백함수
        	 *								sCallbackId	- 콜백ID
        	 *								bAll - 멀티콤보 초기 전체 선택 여부 (true, false(default))
        	 *								sAllDisplay - 멀티콤보 전체선택시 표시 값 (없으면 선택한 data 값 표시)
        	 *								bAllValueNull - 멀티콤보 전체선택시 fnGetCode()에서 value 값 null 사용여부 (true(default), false)
        	 *								bTextSearch - 멀티콤보 찾기기능 활성화 여부(true, false(default)
        	 *								sNullDisplay - 멀티콤보 null일때 표시 값 S:선택, A:전체(default : - 선택 -)
        	 *								sDisplayColumn - 멀티콤보 표시 컬럼 설정 ( code, data(default), all )
        	 *								nDisplayrowcount - 멀티콤보 표시 건수 설정 (default : 10)
        	 *								nWidth - 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        	*/

        	// 멀티콤보 초기화 호출
        	// 1) 멀티콤보 (코드,값 모두 표시 )
        	var objParam = {objDs:this.dsTest01,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sDisplayColumn:"all",						// 멀티콤보 표시 컬럼 설정 ( code, data(default), all )
        					sNullDisplay:"A",							// 멀티콤보 null일때 표시 값 S:선택, A:전체(default : - 선택 -)
        					bTextSearch:true,							// 멀티콤보 데이터검색 기능 가능 (true, false(default))
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo01"					// 콜백ID
        				   };
        	this.divMultiComboDefault01.form.fnInitMultiCombo(this, objParam);

        	// 2) 멀티콤보 (초기전체선택처리)
        	var objParam = {objDs:this.dsTest02,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo02",					// 콜백ID
        					bAll:true,									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        					sAllDisplay:null,							// 멀티콤보 전체 시 표시 값 (없으면 선택한 data 값 표시)
        					nDisplayrowcount:null,						// 멀티콤보 표시 건수 설정 (default : 10)
        					nWidth:null									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        				   };
        	this.divMultiComboDefault02.form.fnInitMultiCombo(this, objParam);

        	// 3) 멀티콤보 ("전체선택완료" 표시)
        	var objParam = {objDs:this.dsTest03,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sDisplayColumn:"all",						// 멀티콤보 표시 컬럼 설정 ( code, data(default), all )
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo03",					// 콜백ID
        					bAll:false,									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        					sAllDisplay:"전체선택완료",						// 멀티콤보 전체 시 표시 값 (없으면 선택한 data 값 표시)
        					nDisplayrowcount:null,						// 멀티콤보 표시 건수 설정 (default : 10)
        					nWidth:null									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        				   };
        	this.divMultiComboDefault03.form.fnInitMultiCombo(this, objParam);

        	// 4) 멀티콤보 (초기전체선택처리, "전체선택완료" 표시, 건수 5건표시)
        	var objParam = {objDs:this.dsTest04,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo04",					// 콜백ID
        					bAll:true,									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        					sAllDisplay:"전체선택완료",						// 멀티콤보 전체 시 표시 값 (없으면 선택한 data 값 표시)
        					nDisplayrowcount:5,							// 멀티콤보 표시 건수 설정 (default : 10)
        					nWidth:null									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        				   };
        	this.divMultiComboDefault04.form.fnInitMultiCombo(this, objParam);

        	// 5) 멀티콤보 (초기전체선택처리, "전체선택" 표시, 건수 5건표시, width 300 으로 조정)
        	var objParam = {objDs:this.dsTest05,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo05",					// 콜백ID
        					bAll:true,									// 멀티콤보 초기 전체 선택 여부 (true, false(default))
        					sAllDisplay:"전체선택",						// 멀티콤보 전체 시 표시 값 (없으면 선택한 data 값 표시)
        					sNullDisplay:"A",
        					bAllValueNull:true,							// 멀티콤보 전체 시 fnGetCode()에서 value 값 null 사용여부 (true(default), false)
        					nDisplayrowcount:5,							// 멀티콤보 표시 건수 설정 (default : 10)
        					nWidth:300									// 멀티콤보 popupDiv width 값 (미설정시 멀티콤보의 div width값)
        				   };
        	this.divMultiComboDefault05.form.fnInitMultiCombo(this, objParam);

        	// 6) 멀티콤보 (멀티콤보 데이터검색 기능 가능)
        	var objParam = {objDs:this.dsTest11,						// 멀티콤보에 표시할 Dataset object
        					sCodeColumn:"code",							// 멀티콤보에 표시할 Dataset 의 code 칼럼 명
        					sDataColumn:"name",							// 멀티콤보에 표시할 Dataset 의 data 칼럼 명
        					sCallbackFunc:"fnComboCallback",			// 콜백함수
        					sCallbackId:"MultiCombo06",					// 콜백ID
        					bTextSearch:true							// 멀티콤보 데이터검색 기능 가능 (true, false(default))
        				   };
        	this.divMultiComboDefault06.form.fnInitMultiCombo(this, objParam);
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 멀티콤보 callback(선택)
         */
        this.fnComboCallback = function(sCallbackId, sRtnValue, sRtnText)
        {
        	trace("[fnComboCallback]sCallbackId : "+sCallbackId+" | sRtnValue : "+ sRtnValue+" | sRtnText : "+ sRtnText);

        	switch (sCallbackId)
        	{
        		case "" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/


        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 콤보 코드 가져오기 클릭시
        */
        this.btnGetMultiCombo01Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo01Code.set_value(this.divMultiComboDefault01.form.fnGetCode());
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 콤보 값 가져오기 클릭시
        */
        this.btnGetMultiCombo01Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo01Text.set_value(this.divMultiComboDefault01.form.fnGetText());
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 콤보 코드 설정하기 클릭시
        */
        this.btnSetMultiCombo01Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault01.form.fnSetCode(this.edtSetMultiCombo01Code.value);
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 초기화
        */
        this.btnMultiCombo01CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault01.form.fnClearMultiCombo();
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 필터적용
         * ★★★ fnSetFilter 함수 적용시 : 콤보 선택이 초기화됩니다. ★★★
        */
        this.btnMultiCombo01Filter_onclick = function(obj,e)
        {
        	//콤보값 초기화 && 필터 적용
        	this.divMultiComboDefault01.form.fnSetFilter("group=='a'");
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 필터해제
         * ★★★ fnSetFilter 함수 적용시 : 콤보 선택이 초기화됩니다. ★★★
        */
        this.btnMultiCombo01FilterClear_onclick = function(obj,e)
        {
        	//콤보값 초기화 && 필터 적용
        	this.divMultiComboDefault01.form.fnSetFilter("");
        };

        /**
         * @description 1) 멀티콤보 (코드+값 표시) > 필터적용 + 전체선택 옵션선택
         * ★★★ fnSetFilter 함수 적용시 : 콤보 선택이 초기화됩니다. ★★★
        */
        this.btnMultiCombo01Filter01_onclick = function(obj,e)
        {
        	this.divMultiComboDefault01.form.fnSetFilter("group=='a'", "A");
        };

        /**
         * @description 2) 멀티콤보 (값 표시 , 초기전체선택처리) > 콤보 코드 가져오기 클릭시
        */
        this.btnGetMultiCombo02Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo02Code.set_value(this.divMultiComboDefault02.form.fnGetCode());
        };

        /**
         * @description 2) 멀티콤보 (값 표시 , 초기전체선택처리) > 콤보 값 가져오기 클릭시
        */
        this.btnGetMultiCombo02Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo02Text.set_value(this.divMultiComboDefault02.form.fnGetText());
        };

        /**
         * @description 2) 멀티콤보 (값 표시 , 초기전체선택처리) > 콤보 코드 설정하기 클릭시
        */
        this.btnSetMultiCombo02Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault02.form.fnSetCode(this.edtSetMultiCombo02Code.value);
        };

        /**
         * @description 2) 멀티콤보 (값 표시 , 초기전체선택처리) > 초기화
        */
        this.btnMultiCombo02CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault02.form.fnClearMultiCombo();
        };

        /**
         * @description 3) 멀티콤보 (코드+값 표시, "전체선택완료" 표시) > 콤보 코드 가져오기 클릭시
        */
        this.btnGetMultiCombo03Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo03Code.set_value(this.divMultiComboDefault03.form.fnGetCode());
        };

        /**
         * @description 3) 멀티콤보 (코드+값 표시 , "전체선택완료" 표시) > 콤보 값 가져오기 클릭시
        */
        this.btnGetMultiCombo03Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo03Text.set_value(this.divMultiComboDefault03.form.fnGetText());
        };

        /**
         * @description 3) 멀티콤보 (코드+값 표시 , "전체선택완료" 표시) > 콤보 코드 설정하기 클릭시
        */
        this.btnSetMultiCombo03Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault03.form.fnSetCode(this.edtSetMultiCombo03Code.value);
        };

        /**
         * @description 3) 멀티콤보 (코드+값 표시 , "전체선택완료" 표시)  > 초기화
        */
        this.btnMultiCombo03CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault03.form.fnClearMultiCombo();
        };

        /**
         * @description 4) 멀티콤보 (값 표시, 초기전체선택처리,
         *				"전체선택완료" 표시, 건수 5건표시) > 콤보 코드 가져오기 클릭시
        */
        this.btnGetMultiCombo04Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo04Code.set_value(this.divMultiComboDefault04.form.fnGetCode());
        };

        /**
         * @description 4) 멀티콤보 (값 표시 , 초기전체선택처리,
         *				"전체선택완료" 표시, 건수 5건표시) > 콤보 값 가져오기 클릭시
        */
        this.btnGetMultiCombo04Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo04Text.set_value(this.divMultiComboDefault04.form.fnGetText());
        };

        /**
         * @description 4) 멀티콤보 (값 표시 , 초기전체선택처리,
         *				"전체선택완료" 표시, 건수 5건표시) > 콤보 코드 설정하기 클릭시
        */
        this.btnSetMultiCombo04Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault04.form.fnSetCode(this.edtSetMultiCombo04Code.value);
        };

        /**
         * @description 4) 멀티콤보 (값 표시 , 초기전체선택처리,
         *				"전체선택완료" 표시, 건수 5건표시) > 초기화
        */
        this.btnMultiCombo04CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault04.form.fnClearMultiCombo();
        };

        /**
         * @description 5) 멀티콤보 (값 표시 , 초기전체선택처리,
         *		    	"전체선택완료" 표시, 건수 5건표시, width 300 으로 조정) > 콤보 코드 가져오기 클릭시
        */
        this.btnGetMultiCombo05Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo05Code.set_value(this.divMultiComboDefault05.form.fnGetCode());
        };

        /**
         * @description 5) 멀티콤보 (값 표시 , 초기전체선택처리,
         *		    	"전체선택완료" 표시, 건수 5건표시, width 300 으로 조정) > 콤보 값 가져오기 클릭시
        */
        this.btnGetMultiCombo05Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo05Text.set_value(this.divMultiComboDefault05.form.fnGetText());
        };

        /**
         * @description 5) 멀티콤보 (값 표시 , 초기전체선택처리,
         *		    	"전체선택완료" 표시, 건수 5건표시, width 300 으로 조정) > 콤보 코드 설정하기 클릭시
        */
        this.btnSetMultiCombo05Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault05.form.fnSetCode(this.edtSetMultiCombo05Code.value);
        };

        /**
         * @description 5) 멀티콤보 (값 표시 , 초기전체선택처리,
         *		    	"전체선택완료" 표시, 건수 5건표시, width 300 으로 조정)  > 초기화
        */
        this.btnMultiCombo05CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault05.form.fnClearMultiCombo();
        };




        /**
         * @description 6) 멀티콤보 (값 표시 , 멀티콤보 데이터검색 기능 가능)
        */
        this.btnGetMultiCombo06Code_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo06Code.set_value(this.divMultiComboDefault06.form.fnGetCode());
        };

        /**
         * @description 6) 멀티콤보 (값 표시 , 멀티콤보 데이터검색 기능 가능)
        */
        this.btnGetMultiCombo06Text_onclick = function(obj,e)
        {
        	this.edtGetMultiCombo06Text.set_value(this.divMultiComboDefault06.form.fnGetText());
        };

        /**
         * @description 6) 멀티콤보 (값 표시 , 멀티콤보 데이터검색 기능 가능)
        */
        this.btnSetMultiCombo06Code_onclick = function(obj,e)
        {
        	this.divMultiComboDefault06.form.fnSetCode(this.edtSetMultiCombo06Code.value);
        };

        /**
         * @description 6) 멀티콤보 (값 표시 , 멀티콤보 데이터검색 기능 가능)
        */
        this.btnMultiCombo06CLear_onclick = function(obj,e)
        {
        	this.divMultiComboDefault06.form.fnClearMultiCombo();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnDefaultMCboSetValue.addEventHandler("onclick",this.btnDefaultMCboSetValue_onclick,this);
            this.btnGetMultiCombo01Code.addEventHandler("onclick",this.btnGetMultiCombo01Code_onclick,this);
            this.btnSetMultiCombo01Code.addEventHandler("onclick",this.btnSetMultiCombo01Code_onclick,this);
            this.btnGetMultiCombo01Text.addEventHandler("onclick",this.btnGetMultiCombo01Text_onclick,this);
            this.btnGetMultiCombo02Code.addEventHandler("onclick",this.btnGetMultiCombo02Code_onclick,this);
            this.btnSetMultiCombo02Code.addEventHandler("onclick",this.btnSetMultiCombo02Code_onclick,this);
            this.btnGetMultiCombo02Text.addEventHandler("onclick",this.btnGetMultiCombo02Text_onclick,this);
            this.btnGetMultiCombo03Code.addEventHandler("onclick",this.btnGetMultiCombo03Code_onclick,this);
            this.btnSetMultiCombo03Code.addEventHandler("onclick",this.btnSetMultiCombo03Code_onclick,this);
            this.btnGetMultiCombo03Text.addEventHandler("onclick",this.btnGetMultiCombo03Text_onclick,this);
            this.btnGetMultiCombo04Code.addEventHandler("onclick",this.btnGetMultiCombo04Code_onclick,this);
            this.btnSetMultiCombo04Code.addEventHandler("onclick",this.btnSetMultiCombo04Code_onclick,this);
            this.btnGetMultiCombo04Text.addEventHandler("onclick",this.btnGetMultiCombo04Text_onclick,this);
            this.btnGetMultiCombo05Code.addEventHandler("onclick",this.btnGetMultiCombo05Code_onclick,this);
            this.btnSetMultiCombo05Code.addEventHandler("onclick",this.btnSetMultiCombo05Code_onclick,this);
            this.btnGetMultiCombo05Text.addEventHandler("onclick",this.btnGetMultiCombo05Text_onclick,this);
            this.btnMultiCombo01CLear.addEventHandler("onclick",this.btnMultiCombo01CLear_onclick,this);
            this.btnMultiCombo02CLear.addEventHandler("onclick",this.btnMultiCombo02CLear_onclick,this);
            this.btnMultiCombo03CLear.addEventHandler("onclick",this.btnMultiCombo03CLear_onclick,this);
            this.btnMultiCombo04CLear.addEventHandler("onclick",this.btnMultiCombo04CLear_onclick,this);
            this.btnMultiCombo05CLear.addEventHandler("onclick",this.btnMultiCombo05CLear_onclick,this);
            this.btnGetMultiCombo06Code.addEventHandler("onclick",this.btnGetMultiCombo06Code_onclick,this);
            this.btnSetMultiCombo06Code.addEventHandler("onclick",this.btnSetMultiCombo06Code_onclick,this);
            this.btnGetMultiCombo06Text.addEventHandler("onclick",this.btnGetMultiCombo06Text_onclick,this);
            this.btnMultiCombo06CLear.addEventHandler("onclick",this.btnMultiCombo06CLear_onclick,this);
            this.btnMultiCombo01Filter.addEventHandler("onclick",this.btnMultiCombo01Filter_onclick,this);
            this.btnMultiCombo01FilterClear.addEventHandler("onclick",this.btnMultiCombo01FilterClear_onclick,this);
            this.btnMultiCombo01Filter01.addEventHandler("onclick",this.btnMultiCombo01Filter01_onclick,this);
        };
        this.loadIncludeScript("sampleMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
