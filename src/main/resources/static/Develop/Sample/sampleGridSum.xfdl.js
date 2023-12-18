(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGridSum");
            this.set_titletext("그리드 합계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">warm</Col><Col id=\"Column6\">red</Col><Col id=\"Column7\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">warm</Col><Col id=\"Column6\">yellow</Col><Col id=\"Column7\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">cool</Col><Col id=\"Column6\">blue</Col><Col id=\"Column7\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">cool</Col><Col id=\"Column6\">navy</Col><Col id=\"Column7\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">acid</Col><Col id=\"Column6\">lemon</Col><Col id=\"Column7\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">acid</Col><Col id=\"Column6\">orange</Col><Col id=\"Column7\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">test</Col><Col id=\"Column7\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">strawberry</Col><Col id=\"Column7\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">banana</Col><Col id=\"Column7\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">가나</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;&#10;band 속성값이 &quot;body&quot;인 Column 의 너비가 자동조절됩니다.&#10;각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.&#10;band 속성값이 &quot;left&quot;, &quot;right&quot; 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">warm</Col><Col id=\"Column6\">red</Col><Col id=\"Column7\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">warm</Col><Col id=\"Column6\">yellow</Col><Col id=\"Column7\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">cool</Col><Col id=\"Column6\">blue</Col><Col id=\"Column7\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">color</Col><Col id=\"Column5\">cool</Col><Col id=\"Column6\">navy</Col><Col id=\"Column7\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">acid</Col><Col id=\"Column6\">lemon</Col><Col id=\"Column7\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">acid</Col><Col id=\"Column6\">orange</Col><Col id=\"Column7\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">test</Col><Col id=\"Column7\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">strawberry</Col><Col id=\"Column7\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col><Col id=\"Column4\">fruits</Col><Col id=\"Column5\">sweet</Col><Col id=\"Column6\">banana</Col><Col id=\"Column7\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample03", this);
            obj.set_keystring("G:Column0,Column1,Column2");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">red</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">yellow</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">red</Col><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">yellow</Col><Col id=\"Column4\">4</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">202212</Col><Col id=\"Column3\">yellow</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">blue</Col><Col id=\"Column4\">6</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">navy</Col><Col id=\"Column4\">7</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">blue</Col><Col id=\"Column4\">8</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">navy</Col><Col id=\"Column4\">9</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">202212</Col><Col id=\"Column3\">blue</Col><Col id=\"Column4\">10</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">lemon</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">orange</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">lemon</Col><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">orange</Col><Col id=\"Column4\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">202212</Col><Col id=\"Column3\">lemon</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">test</Col><Col id=\"Column4\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">strawberry</Col><Col id=\"Column4\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202210</Col><Col id=\"Column3\">banana</Col><Col id=\"Column4\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">test</Col><Col id=\"Column4\">9</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">strawberry</Col><Col id=\"Column4\">10</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202211</Col><Col id=\"Column3\">banana</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202212</Col><Col id=\"Column3\">strawberry</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">202212</Col><Col id=\"Column3\">banana</Col><Col id=\"Column4\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList01","10","45","483","251",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSample01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList05","10","630",null,"379","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSample03");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/><Cell col=\"1\" text=\"expr:(dataset.getRowLevel(currow) == 0) ? Column0 : ((dataset.getRowLevel(currow) == 3)? &apos;합계&apos;: &apos;&apos;)\" suppress=\"1\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/><Cell col=\"2\" text=\"expr:(dataset.getRowLevel(currow) == 0) ? Column1 : ((dataset.getRowLevel(currow) == 2)? &apos;계&apos;: &apos;&apos;)\" suppress=\"2\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/><Cell col=\"3\" text=\"expr:(dataset.getRowLevel(currow) == 0) ? Column2 : ((dataset.getRowLevel(currow) == 1)? &apos;소계&apos;: &apos;&apos;)\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/><Cell col=\"4\" text=\"bind:Column3\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/><Cell col=\"5\" text=\"bind:Column4\" cssclass=\"expr:(dataset.getRowLevel(currow) == 1)? &apos;cell_WF_PointTxt03&apos; : ((dataset.getRowLevel(currow) == 2)? &apos;cell_WF_PointTxt04&apos; : ((dataset.getRowLevel(currow) == 3)? &apos;cell_WF_PointTxt02&apos; : &apos;&apos;)) \"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"총계\" displaytype=\"text\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;Column4&apos;)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","630","65","832","155",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼2\"/><Cell col=\"2\" text=\"칼럼3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"칼럼1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList03","630","275","832","285",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼2\"/><Cell col=\"2\" text=\"칼럼3\"/><Cell col=\"3\" text=\"칼럼1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","5","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1) Suppress");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","626","5","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2) Auto Size");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","10","595","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("4) 소계,합계");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staDesc01","656","35","248","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("autosizingtype : col");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staDesc02","656","250","288","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("autosizingtype : both , extendsizetype : row");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","10","315","578","70",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("3) cellmovingtype : col\r\n\r\n<fc v=\'red\'>★ Column 에 병합(Merge)된 Cell 이나 서브(Sub) Cell 이 있는 \r\n경우에는 Column 을 이동 시킬 수 없습니다</fc>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList04","10","395","580","191",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsSample02");
            obj.set_cellmovingtype("col,band");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\"/><Cell col=\"1\" colspan=\"2\" text=\"Column1 &amp; Column2\"/><Cell col=\"3\" colspan=\"2\" text=\"Column3\"/><Cell col=\"5\" rowspan=\"2\" text=\"Column6\"/><Cell col=\"6\" rowspan=\"2\" text=\"Column7\"/><Cell row=\"1\" col=\"1\" text=\"Column1\"/><Cell row=\"1\" col=\"2\" text=\"Column2\"/><Cell row=\"1\" col=\"3\" text=\"Column4\"/><Cell row=\"1\" col=\"4\" text=\"Column5\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:Column1\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:Column3\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:Column6\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:Column7\"/><Cell row=\"1\" col=\"3\" text=\"bind:Column4\"/><Cell row=\"1\" col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,687,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGridSum.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleGridSum Form
        * FILE NAME     : sampleGridSum.xfdl
        * DESCRIPTION   : 그리드 소계, 총계 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.08.31    TOBESOFT	     최초생성
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
        	// this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        	this.fnFormInit(obj);
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	trace("Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/



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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("sampleGridSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
