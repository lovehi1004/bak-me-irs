(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGrid");
            this.set_titletext("그리드 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStatus01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">똘기</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">떵이</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">호치</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">새초미</Col></Row><Row><Col id=\"Column0\">부산</Col><Col id=\"Column1\">드라곤</Col></Row><Row><Col id=\"Column0\">부산</Col><Col id=\"Column1\">철수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"gridCmmCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">똘기</Col><Col id=\"gridCmmCheck\"/></Row><Row><Col id=\"Column0\">떵이</Col><Col id=\"gridCmmCheck\"/></Row><Row><Col id=\"Column0\">호치</Col><Col id=\"gridCmmCheck\"/></Row><Row><Col id=\"Column0\">새초미</Col><Col id=\"gridCmmCheck\"/></Row><Row><Col id=\"Column0\">드라곤</Col><Col id=\"gridCmmCheck\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSort", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">가</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">나</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">다</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">라</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyPaste01", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\"/><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyPaste02", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRowfix", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"stlInfo\">결제5</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제6</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제7</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제8</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"stlInfo\">결제9</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제10</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제11</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제12</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFind", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">test01</Col><Col id=\"nocharge\">1234</Col><Col id=\"todayw\">how</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제5</Col><Col id=\"test1\">test02</Col><Col id=\"nocharge\">1122</Col><Col id=\"todayw\">when</Col><Col id=\"sun\">I go</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">소셜</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가나다</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">aaaaaa</Col><Col id=\"test22\">02</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제6</Col><Col id=\"test1\">test03</Col><Col id=\"nocharge\">33456</Col><Col id=\"todayw\">how</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드6</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가나5</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">aabbb</Col><Col id=\"test22\">05</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제7</Col><Col id=\"test1\">test04</Col><Col id=\"nocharge\">123456</Col><Col id=\"todayw\">new</Col><Col id=\"sun\">go to home</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드33</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">신문</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">나다라마</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">ccbbb</Col><Col id=\"test22\">01</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhide", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAll", this);
            obj._setContents("<ColumnInfo><Column id=\"stlInfo\" type=\"STRING\" size=\"256\"/><Column id=\"test1\" type=\"STRING\" size=\"256\"/><Column id=\"nocharge\" type=\"STRING\" size=\"256\"/><Column id=\"todayw\" type=\"STRING\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"rain\" type=\"STRING\" size=\"256\"/><Column id=\"stlStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stlYN\" type=\"STRING\" size=\"256\"/><Column id=\"stn\" type=\"STRING\" size=\"256\"/><Column id=\"nochargeyn\" type=\"STRING\" size=\"256\"/><Column id=\"yestest\" type=\"STRING\" size=\"256\"/><Column id=\"notest\" type=\"STRING\" size=\"256\"/><Column id=\"test11\" type=\"STRING\" size=\"256\"/><Column id=\"test22\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"stlInfo\">결제5</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제1</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제2</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제3</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row><Row><Col id=\"stlInfo\">결제4</Col><Col id=\"test1\">TEST33</Col><Col id=\"nocharge\">10000</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it1</Col><Col id=\"stlStatus\">카드1</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">하하하</Col><Col id=\"notest\">dsfsdf</Col><Col id=\"test11\">eeeeeeeeeeeeee</Col><Col id=\"test22\">01</Col><Col id=\"todayw\">what</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"stlInfo\">결제5</Col><Col id=\"test1\">TEST332</Col><Col id=\"nocharge\">7777</Col><Col id=\"sun\">I Like it</Col><Col id=\"rain\">I Like it2</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">인터넷</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">다다다</Col><Col id=\"notest\">afsd</Col><Col id=\"test11\">rrrrrrrrrrrrrrr</Col><Col id=\"test22\">02</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"stlInfo\">결제11</Col><Col id=\"test1\">TEST33442</Col><Col id=\"nocharge\">1564</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it3</Col><Col id=\"stlStatus\">카드3</Col><Col id=\"stlYN\">Y</Col><Col id=\"stn\">텔레뱅킹</Col><Col id=\"nochargeyn\">N</Col><Col id=\"yestest\">가가가</Col><Col id=\"notest\">dsfdgsafdsf</Col><Col id=\"test11\">qqqqqqqqqqqqq</Col><Col id=\"test22\">04</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">2</Col></Row><Row><Col id=\"stlInfo\">결제12</Col><Col id=\"test1\">TEST552</Col><Col id=\"nocharge\">54654</Col><Col id=\"sun\">I Hate it</Col><Col id=\"rain\">I Hate it4</Col><Col id=\"stlStatus\">카드2</Col><Col id=\"stlYN\">N</Col><Col id=\"stn\">은행</Col><Col id=\"nochargeyn\">Y</Col><Col id=\"yestest\">나나나</Col><Col id=\"notest\">asfaewqrew</Col><Col id=\"test11\">dssssssss</Col><Col id=\"test22\">03</Col><Col id=\"todayw\">when</Col><Col id=\"Column0\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid12", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"fileKey1\" type=\"STRING\" size=\"256\"/><Column id=\"fileName1\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"colName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">똘기</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">AA</Col><Col id=\"colName\">AA형</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">떵이</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">AA</Col><Col id=\"colName\">AA형</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">호치</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">AA</Col><Col id=\"colName\">AA형</Col></Row><Row><Col id=\"Column0\">서울</Col><Col id=\"Column1\">새초미</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">BB</Col><Col id=\"colName\">BB형</Col></Row><Row><Col id=\"Column0\">부산</Col><Col id=\"Column1\">드라곤</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">BB</Col><Col id=\"colName\">BB형</Col></Row><Row><Col id=\"Column0\">부산</Col><Col id=\"Column1\">철수</Col><Col id=\"fileKey1\"/><Col id=\"fileName1\">첨부파일1</Col><Col id=\"colCode\">BB</Col><Col id=\"colName\">BB형</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01_00","10","285","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1) Grid - checkbox,no");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtInfo","10","5",null,"270","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("Grid 설정\n\nform_onload > gfnSetFormInit > gfnInitComponent > gfnInitComponentGrid > gfnSetGrid 함수를 통해 처리\n\nuserProperty Name - griduserproperty\nuserProperty Value - sort (소트) , sortfree (소트해제), colfix (열고정, 열고정해제)\n                          , colhide (컬럼 숨기기/보이기) , initial (초기화)\n                          (제외하고자 하는 기능은 \'!\' 붙여서 추가합니다. ex) !sort : 소트기능 제외됨)\nuserProperty : griduserproperty = \'none\' 로 설정시 전체설정 취소됨.\n\ngriduserproperty 가 없거나 미설정시 기본설정이 적용됩니다.\n기본설정 : 소트 , 열고정 , 컬럼 숨기기/보이기 , 초기화\npForm.gvGridDefaultPropList = \"sort,sortfree,colfix,colhide,initial\";");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","317","319","247","198",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsStatus01");
            obj.getSetter("griduserproperty").set("checkbox,no");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col,band");
            obj.getSetter("gridshowpopup").set("false");
            obj.getSetter("gridcheckboxupdate").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/><Column size=\"114\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"헤더1\" expandchar=\"etorangers\"/><Cell col=\"1\" text=\"헤더2\" expandchar=\"etorangers\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_00","590","285","278","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2) Grid - 소트(sort) , 소트해제 (sortfree)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList03","590","319","880","251",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSort");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"cell_BgBlue\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"cell_BgBlue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_00_00","10","1531","278","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("6) Grid - 복사( copy)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList07","10","1565","710","251",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsCopyPaste01");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("copy,!sort,!sortfree,!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"stlStatus\"/><Cell col=\"3\" text=\"stlYN\"/><Cell col=\"4\" text=\"stn\"/><Cell col=\"5\" text=\"nochargeyn\"/><Cell col=\"6\" text=\"yestest\"/><Cell col=\"7\" text=\"notest\"/><Cell col=\"8\" text=\"test11\"/><Cell col=\"9\" text=\"test22\"/><Cell col=\"10\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:stlStatus\"/><Cell col=\"3\" text=\"bind:stlYN\"/><Cell col=\"4\" text=\"bind:stn\"/><Cell col=\"5\" text=\"bind:nochargeyn\"/><Cell col=\"6\" text=\"bind:yestest\"/><Cell col=\"7\" text=\"bind:notest\"/><Cell col=\"8\" text=\"bind:test11\"/><Cell col=\"9\" text=\"bind:test22\"/><Cell col=\"10\" text=\"bind:Column0\" displaytype=\"combotext\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList08","770","1565","710","251",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsCopyPaste02");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("paste,!sort,!sortfree,!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"stlStatus\"/><Cell col=\"3\" text=\"stlYN\"/><Cell col=\"4\" text=\"stn\"/><Cell col=\"5\" text=\"nochargeyn\"/><Cell col=\"6\" text=\"yestest\"/><Cell col=\"7\" text=\"notest\"/><Cell col=\"8\" text=\"test11\"/><Cell col=\"9\" text=\"test22\"/><Cell col=\"10\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:test1\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:stlStatus\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:stlYN\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:stn\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:nochargeyn\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:yestest\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:notest\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:test11\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:test22\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:Column0\" displaytype=\"combotext\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01","10","565","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("3) Grid - 열고정 (colfix) , 열고정해제");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01_00","10","1835","480","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("7) Grid - 행고정 (rowfix) , 행고정해제");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01_00_00","10","2155","530","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("8) Grid - 그리드필터 (filter) , 그리드필터 해제 ");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01_00_00_00","10","2475","318","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("9) Grid - 찾기 (find)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01_00_00_00_00","10","885","318","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4) Grid - 컬럼 숨기기/보이기 (colhide)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_01_00_00_00_00_00","10","1205","318","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("5) Grid - 디폴트");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList04","20","605","890","251",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsColfix");
            obj.set_cellmovingtype("col,band");
            obj.getSetter("griduserproperty").set("!sort,!sortfree,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"expr:(1==1)?&apos;cell_BgBlue&apos;:&apos;&apos;\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"cell_BgBlue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList09","10","1875","880","251",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("dsRowfix");
            obj.getSetter("griduserproperty").set("rowfix,!sort,!sortfree,!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"expr:(1==1)?&apos;cell_BgBlue&apos;:&apos;&apos;\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"expr:(1==1)?&apos;cell_BgBlue&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList10","10","2205","880","251",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("filter,!sort,!sortfree,!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"cell_BgBlue\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"cell_BgBlue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList11","10","2515","880","251",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsFind");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("find,!sort,!sortfree,!colfix,!colhide,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"cell_BgBlue\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"cell_BgBlue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList05","20","935","880","251",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsColhide");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!sortfree,!colfix,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"h0\"/><Cell col=\"1\" rowspan=\"2\" text=\"h1\"/><Cell col=\"2\" text=\"h2\"/><Cell col=\"3\" text=\"h3\"/><Cell col=\"4\" colspan=\"2\" text=\"h4\"/><Cell col=\"6\" colspan=\"2\" text=\"h5\"/><Cell col=\"8\" rowspan=\"2\" text=\"h6\"/><Cell col=\"9\" rowspan=\"2\" text=\"h7\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"h8\"/><Cell row=\"1\" col=\"4\" text=\"h9\"/><Cell row=\"1\" col=\"5\" text=\"h10\"/><Cell row=\"1\" col=\"6\" text=\"h11\"/><Cell row=\"1\" col=\"7\" text=\"h12\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:stlInfo\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:todayw\"/><Cell col=\"3\" text=\"bind:sun\" cssclass=\"cell_BgBlue\"/><Cell col=\"4\" colspan=\"2\" text=\"bind:stlStatus\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:nochargeyn\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:yestest\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:notest\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:Column0\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"bind:rain\"/><Cell row=\"1\" col=\"4\" text=\"bind:stlYN\"/><Cell row=\"1\" col=\"5\" text=\"bind:stn\" cssclass=\"cell_BgBlue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList06","20","1245","1330","201",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"stlStatus\"/><Cell col=\"3\" text=\"stlYN\"/><Cell col=\"4\" text=\"stn\"/><Cell col=\"5\" text=\"nochargeyn\"/><Cell col=\"6\" text=\"yestest\"/><Cell col=\"7\" text=\"notest\"/><Cell col=\"8\" text=\"test11\"/><Cell col=\"9\" text=\"test22\"/><Cell col=\"10\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:stlStatus\"/><Cell col=\"3\" text=\"bind:stlYN\"/><Cell col=\"4\" text=\"bind:stn\"/><Cell col=\"5\" text=\"bind:nochargeyn\"/><Cell col=\"6\" text=\"bind:yestest\"/><Cell col=\"7\" text=\"bind:notest\"/><Cell col=\"8\" text=\"bind:test11\"/><Cell col=\"9\" text=\"bind:test22\"/><Cell col=\"10\" text=\"bind:Column0\" displaytype=\"combotext\" combodataset=\"dsCombo\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_00_00_00","771","1531","278","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("6-1) Grid - 붙여넣기( copy, paste)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc00","884","285","376","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("멀티소트 : shift 키");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","20","319","247","218",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsStatus02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell expr=\"dataset.getCaseCount(&quot;gridCmmCheck==undefined || gridCmmCheck==&apos;&apos; || gridCmmCheck==&apos;N&apos;&quot;) == 0 ? &apos;1&apos; : &apos;0&apos;\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:gridCmmCheck\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc01","317","286","186","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("참고용");
            obj.set_color("chocolate");
            this.addChild(obj.name, obj);

            obj = new Static("stc01_00","10","1505","186","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("참고용");
            obj.set_color("chocolate");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGrid.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleGrid Form
        * FILE NAME     : sampleGrid.xfdl
        * DESCRIPTION   : 그리드 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.25    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	전체항목별 정의
        	소트 sort , 복사&붙여넣기 cellcopypaste
        	열고정	colfix , 열고정해제 colfixfree , 행고정 rowfix , 행고정해제 rowfixfree , 그리드필터 filter , 그리드필터 해제 filterfree ,
        	소트해제 sortfree , 찾기 find , 컬럼 숨기기/보이기 colhide , 초기화 initial

        	전체목록 : "checkbox,no,sort,sortfree,colfix,rowfix,filter,find,colhide,copy,paste,initial";
        	기본적용 : sort,sortfree,colfix,colhide,initial (소트, 소트해제 , 열고정 , 컬럼 숨기기/보이기 , 초기화)

        	//////////////////////////////////////////////////////////////////////////////
        	//그리드 헤더 checkall 옵션중 특정 조건에 따라 처리로직이 필요한 경우 예제
        	//////////////////////////////////////////////////////////////////////////////
        		//그리드 공통Check 재설정(displaytype, edittype 수정, gfnSetHeadCheckSelectAll함수 사용)
        		this.grdList01.setCellProperty("body",0,"displaytype","expr:Column2=='Y'?'checkboxcontrol':'none'");
        		this.grdList01.setCellProperty("body",0,"edittype","expr:Column2=='Y'?'checkbox':'none'");
        		this.gfnSetHeadCheckSelectAll(this.grdList01, 0, null, null, null, this.fnCheckAll);

        		//this.fnCheckAll 함수 예제
        		this.fnCheckAll = function ( obj, e, sChkCol, sChkVal )
        		{
        			trace("obj=="+obj.name + "::::sChkCol=="+sChkCol + "::::sChkVal=="+sChkVal);
        			var objDs = obj.getBindDataset();

        			for(i=0 ; i< objDs.rowcount ; i++)
        			{
        				if ( objDs.getColumn(i, "Column2") == "Y" ) objDs.setColumn(i, sChkCol, sChkVal);
        			}
        		}

        	//////////////////////////////////////////////////////////////////////////////
        	//그리드 필터기능 사용시 기존 Dataset에 filterstr이 존재하는 경우 처리
        	//  1. 필터 팝업에서 조건 변경시에는 변경된 조건으로 필터 조건이 변경됨.
        	//  2. 필터 해제시에는 userOriginFilterstr로 초기화됨.
        	//////////////////////////////////////////////////////////////////////////////
        	1. 해당 데이타셋에 user Properties 추가
        	  - userApplyGridFilter : true (기존필터 사용중임을 표시)
        	  - userOriginFilterstr : 기존 filterstr내용 복사 ==> 예시: test1.indexOf('3')!=-1
        */

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
        	// Grid 의 griduserproperty 추가를 Property 창이 아닌 script 로 처리하고자 할 경우
        	// form_onload > gfnSetFormInit 함수 호출 이전에 셋팅하여 준다.
        	// 특정 Grid 의 우클릭시 기능제한을 할 경우
        	// this.grdList03.griduserproperty = "!sort,!sortfree,!colfix,!colhide,!initial";
        	// this.grdList03.griduserproperty = "none";

        	// 체크박스, no 기능만을 위해 , head 클릭시 sort 기능 제한, 마우스 우클릭시 팝업메뉴 제한
        	this.grdList01.griduserproperty = "!sort";
        	this.grdList01.gridshowpopup = "false";
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
        	//trace("[sampleGrid] Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************



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
            this.dsStatus02.addEventHandler("oncolumnchanged",this.dsStatus02_oncolumnchanged,this);
            this.dsGrid12.addEventHandler("oncolumnchanged",this.dsStatus01_oncolumnchanged,this);
        };
        this.loadIncludeScript("sampleGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
