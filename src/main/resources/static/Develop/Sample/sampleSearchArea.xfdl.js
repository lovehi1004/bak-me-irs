(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSearchArea");
            this.set_titletext("조회 조건 숨기기 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPageInfoResult", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"pageNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"listSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pageNo\">1</Col><Col id=\"listSize\">10</Col><Col id=\"totalCount\">12345</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가1</Col><Col id=\"Column2\">협정(약정)명1</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">2</Col><Col id=\"Column6\">3</Col><Col id=\"Column7\">0</Col></Row><Row><Col id=\"Column1\">국가2</Col><Col id=\"Column2\">협정(약정)명2</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column6\">4</Col><Col id=\"Column7\">1</Col></Row><Row><Col id=\"Column1\">국가3</Col><Col id=\"Column2\">협정(약정)명3</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">3</Col><Col id=\"Column5\">4</Col><Col id=\"Column6\">5</Col><Col id=\"Column7\">2</Col></Row><Row><Col id=\"Column1\">국가4</Col><Col id=\"Column2\">협정(약정)명4</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">4</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">6</Col><Col id=\"Column7\">3</Col></Row><Row><Col id=\"Column1\">국가5</Col><Col id=\"Column2\">협정(약정)명5</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">6</Col><Col id=\"Column6\">7</Col><Col id=\"Column7\">4</Col></Row><Row><Col id=\"Column1\">국가6</Col><Col id=\"Column2\">협정(약정)명6</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">6</Col><Col id=\"Column5\">7</Col><Col id=\"Column6\">8</Col><Col id=\"Column7\">5</Col></Row><Row><Col id=\"Column1\">국가7</Col><Col id=\"Column2\">협정(약정)명7</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">7</Col><Col id=\"Column5\">8</Col><Col id=\"Column6\">9</Col><Col id=\"Column7\">6</Col></Row><Row><Col id=\"Column1\">국가8</Col><Col id=\"Column2\">협정(약정)명8</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">8</Col><Col id=\"Column5\">9</Col><Col id=\"Column6\">10</Col><Col id=\"Column7\">7</Col></Row><Row><Col id=\"Column1\">국가9</Col><Col id=\"Column2\">협정(약정)명9</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">9</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">11</Col><Col id=\"Column7\">8</Col></Row><Row><Col id=\"Column1\">국가10</Col><Col id=\"Column2\">협정(약정)명10</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">10</Col><Col id=\"Column5\">11</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가11</Col><Col id=\"Column2\">협정(약정)명11</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">11</Col><Col id=\"Column5\">12</Col><Col id=\"Column6\">13</Col><Col id=\"Column7\">10</Col></Row><Row><Col id=\"Column1\">국가12</Col><Col id=\"Column2\">협정(약정)명12</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">12</Col><Col id=\"Column5\">13</Col><Col id=\"Column6\">14</Col><Col id=\"Column7\">11</Col></Row><Row><Col id=\"Column1\">국가13</Col><Col id=\"Column2\">협정(약정)명13</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">13</Col><Col id=\"Column5\">14</Col><Col id=\"Column6\">15</Col><Col id=\"Column7\">12</Col></Row><Row><Col id=\"Column1\">국가14</Col><Col id=\"Column2\">협정(약정)명14</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">14</Col><Col id=\"Column5\">15</Col><Col id=\"Column6\">16</Col><Col id=\"Column7\">13</Col></Row><Row><Col id=\"Column1\">국가15</Col><Col id=\"Column2\">협정(약정)명15</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">15</Col><Col id=\"Column5\">16</Col><Col id=\"Column6\">17</Col><Col id=\"Column7\">14</Col></Row><Row><Col id=\"Column1\">국가16</Col><Col id=\"Column2\">협정(약정)명16</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">16</Col><Col id=\"Column5\">17</Col><Col id=\"Column6\">18</Col><Col id=\"Column7\">15</Col></Row><Row><Col id=\"Column1\">국가17</Col><Col id=\"Column2\">협정(약정)명17</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">17</Col><Col id=\"Column5\">18</Col><Col id=\"Column6\">19</Col><Col id=\"Column7\">16</Col></Row><Row><Col id=\"Column1\">국가18</Col><Col id=\"Column2\">협정(약정)명18</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">18</Col><Col id=\"Column5\">19</Col><Col id=\"Column6\">20</Col><Col id=\"Column7\">17</Col></Row><Row><Col id=\"Column1\">국가19</Col><Col id=\"Column2\">협정(약정)명19</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">19</Col><Col id=\"Column5\">20</Col><Col id=\"Column6\">21</Col><Col id=\"Column7\">18</Col></Row><Row><Col id=\"Column1\">국가20</Col><Col id=\"Column2\">협정(약정)명20</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">20</Col><Col id=\"Column5\">21</Col><Col id=\"Column6\">22</Col><Col id=\"Column7\">19</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가21</Col><Col id=\"Column2\">협정(약정)명21</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">21</Col><Col id=\"Column5\">22</Col><Col id=\"Column6\">23</Col><Col id=\"Column7\">20</Col></Row><Row><Col id=\"Column1\">국가22</Col><Col id=\"Column2\">협정(약정)명22</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">22</Col><Col id=\"Column5\">23</Col><Col id=\"Column6\">24</Col><Col id=\"Column7\">21</Col></Row><Row><Col id=\"Column1\">국가23</Col><Col id=\"Column2\">협정(약정)명23</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">23</Col><Col id=\"Column5\">24</Col><Col id=\"Column6\">25</Col><Col id=\"Column7\">22</Col></Row><Row><Col id=\"Column1\">국가24</Col><Col id=\"Column2\">협정(약정)명24</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">24</Col><Col id=\"Column5\">25</Col><Col id=\"Column6\">26</Col><Col id=\"Column7\">23</Col></Row><Row><Col id=\"Column1\">국가25</Col><Col id=\"Column2\">협정(약정)명25</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">25</Col><Col id=\"Column5\">26</Col><Col id=\"Column6\">27</Col><Col id=\"Column7\">24</Col></Row><Row><Col id=\"Column1\">국가26</Col><Col id=\"Column2\">협정(약정)명26</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">26</Col><Col id=\"Column5\">27</Col><Col id=\"Column6\">28</Col><Col id=\"Column7\">25</Col></Row><Row><Col id=\"Column1\">국가27</Col><Col id=\"Column2\">협정(약정)명27</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">27</Col><Col id=\"Column5\">28</Col><Col id=\"Column6\">29</Col><Col id=\"Column7\">26</Col></Row><Row><Col id=\"Column1\">국가28</Col><Col id=\"Column2\">협정(약정)명28</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">28</Col><Col id=\"Column5\">29</Col><Col id=\"Column6\">30</Col><Col id=\"Column7\">27</Col></Row><Row><Col id=\"Column1\">국가29</Col><Col id=\"Column2\">협정(약정)명29</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">29</Col><Col id=\"Column5\">30</Col><Col id=\"Column6\">31</Col><Col id=\"Column7\">28</Col></Row><Row><Col id=\"Column1\">국가30</Col><Col id=\"Column2\">협정(약정)명30</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">30</Col><Col id=\"Column5\">31</Col><Col id=\"Column6\">32</Col><Col id=\"Column7\">29</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가31</Col><Col id=\"Column2\">협정(약정)명31</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">31</Col><Col id=\"Column5\">32</Col><Col id=\"Column6\">33</Col><Col id=\"Column7\">30</Col></Row><Row><Col id=\"Column1\">국가32</Col><Col id=\"Column2\">협정(약정)명32</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">32</Col><Col id=\"Column5\">33</Col><Col id=\"Column6\">34</Col><Col id=\"Column7\">31</Col></Row><Row><Col id=\"Column1\">국가33</Col><Col id=\"Column2\">협정(약정)명33</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">33</Col><Col id=\"Column5\">34</Col><Col id=\"Column6\">35</Col><Col id=\"Column7\">32</Col></Row><Row><Col id=\"Column1\">국가34</Col><Col id=\"Column2\">협정(약정)명34</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">34</Col><Col id=\"Column5\">35</Col><Col id=\"Column6\">36</Col><Col id=\"Column7\">33</Col></Row><Row><Col id=\"Column1\">국가35</Col><Col id=\"Column2\">협정(약정)명35</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">35</Col><Col id=\"Column5\">36</Col><Col id=\"Column6\">37</Col><Col id=\"Column7\">34</Col></Row><Row><Col id=\"Column1\">국가36</Col><Col id=\"Column2\">협정(약정)명36</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">36</Col><Col id=\"Column5\">37</Col><Col id=\"Column6\">38</Col><Col id=\"Column7\">35</Col></Row><Row><Col id=\"Column1\">국가37</Col><Col id=\"Column2\">협정(약정)명37</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">37</Col><Col id=\"Column5\">38</Col><Col id=\"Column6\">39</Col><Col id=\"Column7\">36</Col></Row><Row><Col id=\"Column1\">국가38</Col><Col id=\"Column2\">협정(약정)명38</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">38</Col><Col id=\"Column5\">39</Col><Col id=\"Column6\">40</Col><Col id=\"Column7\">37</Col></Row><Row><Col id=\"Column1\">국가39</Col><Col id=\"Column2\">협정(약정)명39</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">39</Col><Col id=\"Column5\">40</Col><Col id=\"Column6\">41</Col><Col id=\"Column7\">38</Col></Row><Row><Col id=\"Column1\">국가40</Col><Col id=\"Column2\">협정(약정)명40</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">40</Col><Col id=\"Column5\">41</Col><Col id=\"Column6\">42</Col><Col id=\"Column7\">39</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList05", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가41</Col><Col id=\"Column2\">협정(약정)명41</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">41</Col><Col id=\"Column5\">42</Col><Col id=\"Column6\">43</Col><Col id=\"Column7\">40</Col></Row><Row><Col id=\"Column1\">국가42</Col><Col id=\"Column2\">협정(약정)명42</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">42</Col><Col id=\"Column5\">43</Col><Col id=\"Column6\">44</Col><Col id=\"Column7\">41</Col></Row><Row><Col id=\"Column1\">국가43</Col><Col id=\"Column2\">협정(약정)명43</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">43</Col><Col id=\"Column5\">44</Col><Col id=\"Column6\">45</Col><Col id=\"Column7\">42</Col></Row><Row><Col id=\"Column1\">국가44</Col><Col id=\"Column2\">협정(약정)명44</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">44</Col><Col id=\"Column5\">45</Col><Col id=\"Column6\">46</Col><Col id=\"Column7\">43</Col></Row><Row><Col id=\"Column1\">국가45</Col><Col id=\"Column2\">협정(약정)명45</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">45</Col><Col id=\"Column5\">46</Col><Col id=\"Column6\">47</Col><Col id=\"Column7\">44</Col></Row><Row><Col id=\"Column1\">국가46</Col><Col id=\"Column2\">협정(약정)명46</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">46</Col><Col id=\"Column5\">47</Col><Col id=\"Column6\">48</Col><Col id=\"Column7\">45</Col></Row><Row><Col id=\"Column1\">국가47</Col><Col id=\"Column2\">협정(약정)명47</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">47</Col><Col id=\"Column5\">48</Col><Col id=\"Column6\">49</Col><Col id=\"Column7\">46</Col></Row><Row><Col id=\"Column1\">국가48</Col><Col id=\"Column2\">협정(약정)명48</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">48</Col><Col id=\"Column5\">49</Col><Col id=\"Column6\">50</Col><Col id=\"Column7\">47</Col></Row><Row><Col id=\"Column1\">국가49</Col><Col id=\"Column2\">협정(약정)명49</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">49</Col><Col id=\"Column5\">50</Col><Col id=\"Column6\">51</Col><Col id=\"Column7\">48</Col></Row><Row><Col id=\"Column1\">국가50</Col><Col id=\"Column2\">협정(약정)명50</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">50</Col><Col id=\"Column5\">51</Col><Col id=\"Column6\">52</Col><Col id=\"Column7\">49</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList06", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가51</Col><Col id=\"Column2\">협정(약정)명51</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">51</Col><Col id=\"Column5\">52</Col><Col id=\"Column6\">53</Col><Col id=\"Column7\">50</Col></Row><Row><Col id=\"Column1\">국가52</Col><Col id=\"Column2\">협정(약정)명52</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">52</Col><Col id=\"Column5\">53</Col><Col id=\"Column6\">54</Col><Col id=\"Column7\">51</Col></Row><Row><Col id=\"Column1\">국가53</Col><Col id=\"Column2\">협정(약정)명53</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">53</Col><Col id=\"Column5\">54</Col><Col id=\"Column6\">55</Col><Col id=\"Column7\">52</Col></Row><Row><Col id=\"Column1\">국가54</Col><Col id=\"Column2\">협정(약정)명54</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">54</Col><Col id=\"Column5\">55</Col><Col id=\"Column6\">56</Col><Col id=\"Column7\">53</Col></Row><Row><Col id=\"Column1\">국가55</Col><Col id=\"Column2\">협정(약정)명55</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">55</Col><Col id=\"Column5\">56</Col><Col id=\"Column6\">57</Col><Col id=\"Column7\">54</Col></Row><Row><Col id=\"Column1\">국가56</Col><Col id=\"Column2\">협정(약정)명56</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">56</Col><Col id=\"Column5\">57</Col><Col id=\"Column6\">58</Col><Col id=\"Column7\">55</Col></Row><Row><Col id=\"Column1\">국가57</Col><Col id=\"Column2\">협정(약정)명57</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">57</Col><Col id=\"Column5\">58</Col><Col id=\"Column6\">59</Col><Col id=\"Column7\">56</Col></Row><Row><Col id=\"Column1\">국가58</Col><Col id=\"Column2\">협정(약정)명58</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">58</Col><Col id=\"Column5\">59</Col><Col id=\"Column6\">60</Col><Col id=\"Column7\">57</Col></Row><Row><Col id=\"Column1\">국가59</Col><Col id=\"Column2\">협정(약정)명59</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">59</Col><Col id=\"Column5\">60</Col><Col id=\"Column6\">61</Col><Col id=\"Column7\">58</Col></Row><Row><Col id=\"Column1\">국가60</Col><Col id=\"Column2\">협정(약정)명60</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">60</Col><Col id=\"Column5\">61</Col><Col id=\"Column6\">62</Col><Col id=\"Column7\">59</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList07", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가61</Col><Col id=\"Column2\">협정(약정)명61</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">61</Col><Col id=\"Column5\">62</Col><Col id=\"Column6\">63</Col><Col id=\"Column7\">60</Col></Row><Row><Col id=\"Column1\">국가62</Col><Col id=\"Column2\">협정(약정)명62</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">62</Col><Col id=\"Column5\">63</Col><Col id=\"Column6\">64</Col><Col id=\"Column7\">61</Col></Row><Row><Col id=\"Column1\">국가63</Col><Col id=\"Column2\">협정(약정)명63</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">63</Col><Col id=\"Column5\">64</Col><Col id=\"Column6\">65</Col><Col id=\"Column7\">62</Col></Row><Row><Col id=\"Column1\">국가64</Col><Col id=\"Column2\">협정(약정)명64</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">64</Col><Col id=\"Column5\">65</Col><Col id=\"Column6\">66</Col><Col id=\"Column7\">63</Col></Row><Row><Col id=\"Column1\">국가65</Col><Col id=\"Column2\">협정(약정)명65</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">65</Col><Col id=\"Column5\">66</Col><Col id=\"Column6\">67</Col><Col id=\"Column7\">64</Col></Row><Row><Col id=\"Column1\">국가66</Col><Col id=\"Column2\">협정(약정)명66</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">66</Col><Col id=\"Column5\">67</Col><Col id=\"Column6\">68</Col><Col id=\"Column7\">65</Col></Row><Row><Col id=\"Column1\">국가67</Col><Col id=\"Column2\">협정(약정)명67</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">67</Col><Col id=\"Column5\">68</Col><Col id=\"Column6\">69</Col><Col id=\"Column7\">66</Col></Row><Row><Col id=\"Column1\">국가68</Col><Col id=\"Column2\">협정(약정)명68</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">68</Col><Col id=\"Column5\">69</Col><Col id=\"Column6\">70</Col><Col id=\"Column7\">67</Col></Row><Row><Col id=\"Column1\">국가69</Col><Col id=\"Column2\">협정(약정)명69</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">69</Col><Col id=\"Column5\">70</Col><Col id=\"Column6\">71</Col><Col id=\"Column7\">68</Col></Row><Row><Col id=\"Column1\">국가70</Col><Col id=\"Column2\">협정(약정)명70</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">70</Col><Col id=\"Column5\">71</Col><Col id=\"Column6\">72</Col><Col id=\"Column7\">69</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList08", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가71</Col><Col id=\"Column2\">협정(약정)명71</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">71</Col><Col id=\"Column5\">72</Col><Col id=\"Column6\">73</Col><Col id=\"Column7\">70</Col></Row><Row><Col id=\"Column1\">국가72</Col><Col id=\"Column2\">협정(약정)명72</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">72</Col><Col id=\"Column5\">73</Col><Col id=\"Column6\">74</Col><Col id=\"Column7\">71</Col></Row><Row><Col id=\"Column1\">국가73</Col><Col id=\"Column2\">협정(약정)명73</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">73</Col><Col id=\"Column5\">74</Col><Col id=\"Column6\">75</Col><Col id=\"Column7\">72</Col></Row><Row><Col id=\"Column1\">국가74</Col><Col id=\"Column2\">협정(약정)명74</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">74</Col><Col id=\"Column5\">75</Col><Col id=\"Column6\">76</Col><Col id=\"Column7\">73</Col></Row><Row><Col id=\"Column1\">국가75</Col><Col id=\"Column2\">협정(약정)명75</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">75</Col><Col id=\"Column5\">76</Col><Col id=\"Column6\">77</Col><Col id=\"Column7\">74</Col></Row><Row><Col id=\"Column1\">국가76</Col><Col id=\"Column2\">협정(약정)명76</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">76</Col><Col id=\"Column5\">77</Col><Col id=\"Column6\">78</Col><Col id=\"Column7\">75</Col></Row><Row><Col id=\"Column1\">국가77</Col><Col id=\"Column2\">협정(약정)명77</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">77</Col><Col id=\"Column5\">78</Col><Col id=\"Column6\">79</Col><Col id=\"Column7\">76</Col></Row><Row><Col id=\"Column1\">국가78</Col><Col id=\"Column2\">협정(약정)명78</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">78</Col><Col id=\"Column5\">79</Col><Col id=\"Column6\">80</Col><Col id=\"Column7\">77</Col></Row><Row><Col id=\"Column1\">국가79</Col><Col id=\"Column2\">협정(약정)명79</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">79</Col><Col id=\"Column5\">80</Col><Col id=\"Column6\">81</Col><Col id=\"Column7\">78</Col></Row><Row><Col id=\"Column1\">국가80</Col><Col id=\"Column2\">협정(약정)명80</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">80</Col><Col id=\"Column5\">81</Col><Col id=\"Column6\">82</Col><Col id=\"Column7\">79</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList09", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가81</Col><Col id=\"Column2\">협정(약정)명81</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">81</Col><Col id=\"Column5\">82</Col><Col id=\"Column6\">83</Col><Col id=\"Column7\">80</Col></Row><Row><Col id=\"Column1\">국가82</Col><Col id=\"Column2\">협정(약정)명82</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">82</Col><Col id=\"Column5\">83</Col><Col id=\"Column6\">84</Col><Col id=\"Column7\">81</Col></Row><Row><Col id=\"Column1\">국가83</Col><Col id=\"Column2\">협정(약정)명83</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">83</Col><Col id=\"Column5\">84</Col><Col id=\"Column6\">85</Col><Col id=\"Column7\">82</Col></Row><Row><Col id=\"Column1\">국가84</Col><Col id=\"Column2\">협정(약정)명84</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">84</Col><Col id=\"Column5\">85</Col><Col id=\"Column6\">86</Col><Col id=\"Column7\">83</Col></Row><Row><Col id=\"Column1\">국가85</Col><Col id=\"Column2\">협정(약정)명85</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">85</Col><Col id=\"Column5\">86</Col><Col id=\"Column6\">87</Col><Col id=\"Column7\">84</Col></Row><Row><Col id=\"Column1\">국가86</Col><Col id=\"Column2\">협정(약정)명86</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">86</Col><Col id=\"Column5\">87</Col><Col id=\"Column6\">88</Col><Col id=\"Column7\">85</Col></Row><Row><Col id=\"Column1\">국가87</Col><Col id=\"Column2\">협정(약정)명87</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">87</Col><Col id=\"Column5\">88</Col><Col id=\"Column6\">89</Col><Col id=\"Column7\">86</Col></Row><Row><Col id=\"Column1\">국가88</Col><Col id=\"Column2\">협정(약정)명88</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">88</Col><Col id=\"Column5\">89</Col><Col id=\"Column6\">90</Col><Col id=\"Column7\">87</Col></Row><Row><Col id=\"Column1\">국가89</Col><Col id=\"Column2\">협정(약정)명89</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">89</Col><Col id=\"Column5\">90</Col><Col id=\"Column6\">91</Col><Col id=\"Column7\">88</Col></Row><Row><Col id=\"Column1\">국가90</Col><Col id=\"Column2\">협정(약정)명90</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">90</Col><Col id=\"Column5\">91</Col><Col id=\"Column6\">92</Col><Col id=\"Column7\">89</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가91</Col><Col id=\"Column2\">협정(약정)명91</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">91</Col><Col id=\"Column5\">92</Col><Col id=\"Column6\">93</Col><Col id=\"Column7\">90</Col></Row><Row><Col id=\"Column1\">국가92</Col><Col id=\"Column2\">협정(약정)명92</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">92</Col><Col id=\"Column5\">93</Col><Col id=\"Column6\">94</Col><Col id=\"Column7\">91</Col></Row><Row><Col id=\"Column1\">국가93</Col><Col id=\"Column2\">협정(약정)명93</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">93</Col><Col id=\"Column5\">94</Col><Col id=\"Column6\">95</Col><Col id=\"Column7\">92</Col></Row><Row><Col id=\"Column1\">국가94</Col><Col id=\"Column2\">협정(약정)명94</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">94</Col><Col id=\"Column5\">95</Col><Col id=\"Column6\">96</Col><Col id=\"Column7\">93</Col></Row><Row><Col id=\"Column1\">국가95</Col><Col id=\"Column2\">협정(약정)명95</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">95</Col><Col id=\"Column5\">96</Col><Col id=\"Column6\">97</Col><Col id=\"Column7\">94</Col></Row><Row><Col id=\"Column1\">국가96</Col><Col id=\"Column2\">협정(약정)명96</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">96</Col><Col id=\"Column5\">97</Col><Col id=\"Column6\">98</Col><Col id=\"Column7\">95</Col></Row><Row><Col id=\"Column1\">국가97</Col><Col id=\"Column2\">협정(약정)명97</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">97</Col><Col id=\"Column5\">98</Col><Col id=\"Column6\">99</Col><Col id=\"Column7\">96</Col></Row><Row><Col id=\"Column1\">국가98</Col><Col id=\"Column2\">협정(약정)명98</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">98</Col><Col id=\"Column5\">99</Col><Col id=\"Column6\">100</Col><Col id=\"Column7\">97</Col></Row><Row><Col id=\"Column1\">국가99</Col><Col id=\"Column2\">협정(약정)명99</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">99</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">101</Col><Col id=\"Column7\">98</Col></Row><Row><Col id=\"Column1\">국가100</Col><Col id=\"Column2\">협정(약정)명100</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">100</Col><Col id=\"Column5\">101</Col><Col id=\"Column6\">102</Col><Col id=\"Column7\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList11", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">국가101</Col><Col id=\"Column2\">협정(약정)명101</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">101</Col><Col id=\"Column5\">102</Col><Col id=\"Column6\">103</Col><Col id=\"Column7\">100</Col></Row><Row><Col id=\"Column1\">국가102</Col><Col id=\"Column2\">협정(약정)명102</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">102</Col><Col id=\"Column5\">103</Col><Col id=\"Column6\">104</Col><Col id=\"Column7\">101</Col></Row><Row><Col id=\"Column1\">국가103</Col><Col id=\"Column2\">협정(약정)명103</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">103</Col><Col id=\"Column5\">104</Col><Col id=\"Column6\">105</Col><Col id=\"Column7\">102</Col></Row><Row><Col id=\"Column1\">국가104</Col><Col id=\"Column2\">협정(약정)명104</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">104</Col><Col id=\"Column5\">105</Col><Col id=\"Column6\">106</Col><Col id=\"Column7\">103</Col></Row><Row><Col id=\"Column1\">국가105</Col><Col id=\"Column2\">협정(약정)명105</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">105</Col><Col id=\"Column5\">106</Col><Col id=\"Column6\">107</Col><Col id=\"Column7\">104</Col></Row><Row><Col id=\"Column1\">국가106</Col><Col id=\"Column2\">협정(약정)명106</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">106</Col><Col id=\"Column5\">107</Col><Col id=\"Column6\">108</Col><Col id=\"Column7\">105</Col></Row><Row><Col id=\"Column1\">국가107</Col><Col id=\"Column2\">협정(약정)명107</Col><Col id=\"Column3\">20231020</Col><Col id=\"Column4\">107</Col><Col id=\"Column5\">108</Col><Col id=\"Column6\">109</Col><Col id=\"Column7\">106</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"col\" type=\"STRING\" size=\"256\"/><Column id=\"strtNo\" type=\"INT\" size=\"256\"/><Column id=\"endNo\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"168","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel01","35","30","116","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바 1");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel02","361","30","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"80","32","65","30",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,null,"32","32","30","30",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Refresh");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput01","151","30","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput01_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput01_innerdataset", obj);
            divSearch_form_cboInput01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput01_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput02","471","30","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput02_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput02_innerdataset", obj);
            divSearch_form_cboInput02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput02_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel03","681","30","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput01","791","30","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel04","1001","30","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput02","1111","30","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel05","35","67","116","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마바 2");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel06","361","67","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput03","151","67","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput03_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput03_innerdataset", obj);
            divSearch_form_cboInput03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput03_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput04","471","67","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput04_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput04_innerdataset", obj);
            divSearch_form_cboInput04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput04_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel07","681","67","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput03","791","67","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel08","1001","67","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput04","1111","67","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel09","35","104","116","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("가나다라마바 3");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel10","361","104","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput05","151","104","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput05_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput05_innerdataset", obj);
            divSearch_form_cboInput05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput05_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboInput06","471","104","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("WFSA");
            var divSearch_form_cboInput06_innerdataset = new nexacro.NormalDataset("divSearch_form_cboInput06_innerdataset", obj);
            divSearch_form_cboInput06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboInput06_innerdataset);
            obj.set_text("투비");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel11","681","104","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput05","791","104","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcLabel12","1001","104","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WFSA_Label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInput06","1111","104","180","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("WFSA");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.62%","divSearch:-5","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchUp");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide01","340","163","30","86",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H86");
            this.addChild(obj.name, obj);

            obj = new Div("divResult01","0","divSearch:45",null,null,"30","60",null,null,"210",null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("stcTotalCount","0","0","140","32",null,null,null,null,null,null,this.divResult01.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#f96262\'>0</fc> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Total");
            this.divResult01.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","75","32","0",null,null,null,null,null,this.divResult01.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.divResult01.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"0","110","32","btnExcelDown:3",null,null,null,null,null,this.divResult01.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Excel");
            this.divResult01.addChild(obj.name, obj);

            obj = new Static("stcGuide02",null,"32","300","10","10",null,null,null,null,null,this.divResult01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("10");
            this.divResult01.addChild(obj.name, obj);

            obj = new Static("stcGuide01","0","32","140","10",null,null,null,null,null,null,this.divResult01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_text("10");
            obj.set_visible("false");
            this.divResult01.addChild(obj.name, obj);

            obj = new Grid("grdList","0","42",null,null,"0","0",null,null,null,null,this.divResult01.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"국가\"/><Cell col=\"3\" text=\"협정(약정)명\" cssclass=\"essential\"/><Cell col=\"4\" text=\"발효일\"/><Cell col=\"5\" text=\"방법론 수\"/><Cell col=\"6\" text=\"감축사업 수\"/><Cell col=\"7\" text=\"총 발행 실적량\"/><Cell col=\"8\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:Column4\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Column6\" displaytype=\"number\"/><Cell col=\"8\" cssclass=\"Cell_WF_Search\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divResult01.addChild(obj.name, obj);

            obj = new Div("divPaging","0","divResult01:25",null,"25","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Frame_Common::comPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide02",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W30");
            this.addChild(obj.name, obj);

            obj = new Static("stcGuide03","1272",null,"120","60",null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("stc00");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult01.form
            obj = new Layout("default","",0,0,this.divResult01.form,function(p){});
            this.divResult01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comPaging.xfdl");
        };
        
        // User Script
        this.registerScript("sampleSearchArea.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleSearchArea Form
        * FILE NAME     : sampleSearchArea.xfdl
        * DESCRIPTION   : 조회 조건 숨기기 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.09.xx    TOBESOFT	     최초생성
        ***********************************************************************************/

        /*
        	조회영역
        	  기본 1줄까지는 그냥 유지하고, 접기/펼치기 없음

        	  1줄이상일때 접기/펼치기 버튼 존재하고 접기시 1줄만 보이게 접힘.

        	  개발편의를 위해서는 조회영역이 펼치기 상태로 디자인을 하고 form_oninit > fnSearchShowHide 호출로 화면 로딩시 접혀 보이게 스크립트 제어를 한다.

        	// 조회조건 보이기/숨기기 처리
        	btnShowHide_onclick 이벤트에 기술된 정보를 바탕으로 업무화면별로 기술을 합니다.

        */


        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/



        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvSearchShowHideObjList = [this.divSearch.form.stcLabel05 , this.divSearch.form.cboInput03 , this.divSearch.form.stcLabel06
        								, this.divSearch.form.cboInput04, this.divSearch.form.stcLabel07 , this.divSearch.form.edtInput03
        								, this.divSearch.form.stcLabel08, this.divSearch.form.edtInput04];
        								// 조회영역 접기/펼치기시 숨김처리되는 컴포넌트 (2번째줄 컴포넌트 목록만 지정해도 됨)
        this.fvSearchShowHeight = 168;			// 조회영역 펼치기시 height
        this.fvSearchHideHeight = 94;			// 조회영역 숨기기시 height


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// 접힘상태로 처리
        	this.fnSearchShowHide();
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
        	trace("[sampleSearchArea]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	// 페이지표시 Div 초기화
        	this.divPaging.form.fnInitPage(this.dsPageInfo, "fnPagingCallback");
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fnCallback = function(sSvcId, nErrCode, sErrMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (nErrCode < 0)
        	{
        		// 공통(gfnTranCallback) 에서 기본 메시지에 대한 alert 처리함
        		// 업무적으로 에러관련 후처리가 필요한 경우 코드 추가할 것
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "searchList" :
        			// 후처리 코드
        			this.divResult01.form.stcTotalCount.set_text("총 <fc v='#f96262'>"+this.gfnAppendComma(nexacro.toNumber(this.dsPageInfo.getColumn(0,"totalCount"),0))+"</fc> 건");
        			this.divPaging.form.fnRedrawPage(this.dsPageInfo);
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

        /**
         * @desc 페이징콜백 페이징화면에서 눌린페이지 넘겨줌
         * @param {number} nPage 선택된 페이지
         * @param {number} nRecordScale 한번에 가져올 Row수
         * @return N/A
        */
        this.fnPagingCallback = function(nPage, nRecordScale)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", nPage);	//페이지 반영
        	this.fnCallSearch(); // 조회함수호출
        };

        /**
         * @desc 조회 처리
         * @param N/A
         * @return N/A
        */
        this.fnCallSearch = function()
        {
        	// 호출전 Validation 체크
        	if(!this.fnCallSearchValidCheck()) return false;

        	// 호출전 데이터 설정 및 가공 처리
        	if(!this.fnCallSearchValueSetting()) return false;

        	// 공통Transaction 호출
        // 	var objArgs = {};
        // 	objArgs.svcId 			= "searchList";
        // 	objArgs.url 			= "";
        // 	objArgs.inds      		= "dsCond=dsCond pageInfo=dsPageInfo";
        // 	objArgs.outds     		= "dsList=dsList dsPageInfo=pageInfo";
        // 	objArgs.args 			= "";
        // 	objArgs.callback		= "fnCallback";

        //	this.gfnTransaction(this, objArgs);

        	// 개발샘플용 코드
        	var dsTemp;
        	var nTempPage;
        	nTempPage = this.dsPageInfo.getColumn(0, "pageNo");
        	if(this.gfnIsNull(nTempPage)) nTempPage = 1;

        	dsTemp = this["dsList"+nTempPage.toString().padLeft(2,"0")];

        	this.dsList.copyData(dsTemp);

        	this.dsPageInfoResult.setColumn(0, "pageNo", nTempPage);
        	this.dsPageInfo.copyData(this.dsPageInfoResult);

        	this.fnCallback("searchList", 0, "SUCC");
        };

        /**
         * @desc 호출전 Validation 체크
         * @param N/A
         * @return {boolean} 체크시 정상 - true , 오류 - false
        */
        this.fnCallSearchValidCheck = function()
        {
        	// Transaction 호출 전에 체크해야 될 사항에 대해 기술
        	// TODO

        	return true;
        };

        /**
         * @desc 호출전 데이터 설정 및 가공 처리
         * @param N/A
         * @return {boolean} 처리결과 정상 - true , 오류 - false
        */
        this.fnCallSearchValueSetting = function()
        {
        	// Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술

        	//this.dsCond 데이타셋의 페이지관련 컬럼 반영
        	var nCurPage    = this.dsPageInfo.getColumn(0, "pageNo");
        	var nCntPerPage = this.dsPageInfo.getColumn(0, "listSize");

        	var startRow = ((nexacro.toNumber(nCurPage)-1) * nexacro.toNumber(nCntPerPage)) + 1;
        	var endRow   = startRow +  nexacro.toNumber(nCntPerPage) - 1;

        	this.dsCond.setColumn(0, "strtNo", startRow);
        	this.dsCond.setColumn(0, "endNo", endRow);

        	return true;
        };

        /**
         * @desc 조회영역 보이기/숨기기 처리
         * @param N/A
         * @return N/A
        */
        this.fnSearchShowHide = function ()
        {
        // ExtPrototype > Util.js
        // pForm.gvBtnSearchAreaShowCssclass = "btn_WF_SchUp";			// 조회조건 보여질때 cssclass
        // pForm.gvBtnSearchAreaHideCssclass = "btn_WF_SchDown";		// 조회조건 접혔을때 cssclass

        	if(this.btnShowHide.cssclass == this.gvBtnSearchAreaShowCssclass)		// btn_WF_SchDown / btn_WF_SchUp
        	{
        		// 숨기기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, false);
        		this.divSearch.set_formscrollbartype("none");
        		this.divSearch.set_height(this.fvSearchHideHeight);
        		this.divSearch.form.resetScroll();
        		this.btnShowHide.set_cssclass(this.gvBtnSearchAreaHideCssclass);	// btn_WF_SchDown
        		this.resetScroll();
        	}
        	else
        	{
        		// 보이기 처리
        		this.gfnObjArrSetVisible(this.fvSearchShowHideObjList, true);
        		this.divSearch.set_formscrollbartype("");
        		this.divSearch.set_height(this.fvSearchShowHeight);
        		this.divSearch.form.resetScroll();
        		this.btnShowHide.set_cssclass(this.gvBtnSearchAreaShowCssclass);	// btn_WF_SchUp
        		this.resetScroll();
        	}
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description 접기/펼치기 클릭시 처리
        */
        this.btnShowHide_onclick = function(obj,e)
        {
        	this.fnSearchShowHide();
        };

        /**
         * @description 검색 클릭시
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsPageInfo.setColumn(0, "pageNo", 1);	// 페이지 초기화
        	this.fnCallSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divResult01.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divResult01.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.dsCond.addEventHandler("onvaluechanged",this.dsCond_onvaluechanged,this);
        };
        this.loadIncludeScript("sampleSearchArea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
