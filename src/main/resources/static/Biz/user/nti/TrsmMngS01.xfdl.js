(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TrsmMngS01");
            this.set_titletext("알림(SMS) 전송관리 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1550,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTrsmMng", this);
            obj._setContents("<ColumnInfo><Column id=\"trsmMgno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmMngNm\" type=\"STRING\" size=\"256\"/><Column id=\"trsmTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskTrgtCd\" type=\"STRING\" size=\"256\"/><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"msgNm\" type=\"STRING\" size=\"256\"/><Column id=\"msgCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"trsmMgno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userClNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","0","40",null,"414","30",null,"1500",null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTrsmMngNm","0","43","150","44",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("전송관리명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","-64","360",null,null,"704",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("메세지정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtTrsmMngNm","157","50",null,"30","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMsgInfo","0","86",null,"44","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTrsmTypeCd","0","86","150","44",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("전송유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("rdoTrsmTypeCd","157","77","258","63",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var divDetail_form_rdoTrsmTypeCd_innerdataset = new nexacro.NormalDataset("divDetail_form_rdoTrsmTypeCd_innerdataset", obj);
            divDetail_form_rdoTrsmTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TTC0001</Col><Col id=\"datacolumn\">BATCH</Col></Row><Row><Col id=\"codecolumn\">TTC0003</Col><Col id=\"datacolumn\">사용자정의전송</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_rdoTrsmTypeCd_innerdataset);
            obj.set_text("배치전송");
            obj.set_value("BATCH");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTrsmMngNo","0","0","150","44",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("전송관리코드");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtTrsmMngNo","157","7","228","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","-56",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divTrgt","0","staMsgInfo:-1",null,"87","0",null,"1400",null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("divTrgt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staTaskTrgtCd","0","0","150","44",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("1");
            obj.set_text("발송기간/시기");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboNtiTmng","266","6","160","32",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("2");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("업무대상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divDetail_form_divTrgt_form_cboNtiTmng_innerdataset = new nexacro.NormalDataset("divDetail_form_divTrgt_form_cboNtiTmng_innerdataset", obj);
            divDetail_form_divTrgt_form_cboNtiTmng_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1 MONTH</Col><Col id=\"datacolumn\">1개월미만</Col></Row><Row><Col id=\"codecolumn\">2 MONTH</Col><Col id=\"datacolumn\">2개월미만</Col></Row><Row><Col id=\"codecolumn\">3 MONTH</Col><Col id=\"datacolumn\">3개월미만</Col></Row><Row><Col id=\"codecolumn\">4 MONTH</Col><Col id=\"datacolumn\">4개월미만</Col></Row><Row><Col id=\"codecolumn\">5 MONTH</Col><Col id=\"datacolumn\">5개월미만</Col></Row><Row><Col id=\"codecolumn\">6 MONTH</Col><Col id=\"datacolumn\">6개월미만</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_divTrgt_form_cboNtiTmng_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staNtiTmng","149","0","110","44",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("3");
            obj.set_text("알림시기");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staTrsmMi","439","0","80","44",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("4");
            obj.set_text("전송분");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            obj.set_visible("false");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTrsmMi","526","6","90","32",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("업무대상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_visible("false");
            var divDetail_form_divTrgt_form_cboTrsmMi_innerdataset = new nexacro.NormalDataset("divDetail_form_divTrgt_form_cboTrsmMi_innerdataset", obj);
            divDetail_form_divTrgt_form_cboTrsmMi_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">26</Col></Row><Row><Col id=\"codecolumn\">27</Col><Col id=\"datacolumn\">27</Col></Row><Row><Col id=\"codecolumn\">28</Col><Col id=\"datacolumn\">28</Col></Row><Row><Col id=\"codecolumn\">29</Col><Col id=\"datacolumn\">29</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">31</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">32</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">33</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">34</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">35</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">36</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">37</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">38</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">39</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">41</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">42</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">43</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">44</Col></Row><Row><Col id=\"codecolumn\">45</Col><Col id=\"datacolumn\">45</Col></Row><Row><Col id=\"codecolumn\">46</Col><Col id=\"datacolumn\">46</Col></Row><Row><Col id=\"codecolumn\">47</Col><Col id=\"datacolumn\">47</Col></Row><Row><Col id=\"codecolumn\">48</Col><Col id=\"datacolumn\">48</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">49</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">51</Col><Col id=\"datacolumn\">51</Col></Row><Row><Col id=\"codecolumn\">52</Col><Col id=\"datacolumn\">52</Col></Row><Row><Col id=\"codecolumn\">53</Col><Col id=\"datacolumn\">53</Col></Row><Row><Col id=\"codecolumn\">54</Col><Col id=\"datacolumn\">54</Col></Row><Row><Col id=\"codecolumn\">55</Col><Col id=\"datacolumn\">55</Col></Row><Row><Col id=\"codecolumn\">56</Col><Col id=\"datacolumn\">56</Col></Row><Row><Col id=\"codecolumn\">57</Col><Col id=\"datacolumn\">57</Col></Row><Row><Col id=\"codecolumn\">58</Col><Col id=\"datacolumn\">58</Col></Row><Row><Col id=\"codecolumn\">59</Col><Col id=\"datacolumn\">59</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">60</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_divTrgt_form_cboTrsmMi_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","629","0","80","44",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("6");
            obj.set_text("전송시");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            obj.set_visible("false");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTrsmHh","716","6","90","32",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("업무대상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_visible("false");
            var divDetail_form_divTrgt_form_cboTrsmHh_innerdataset = new nexacro.NormalDataset("divDetail_form_divTrgt_form_cboTrsmHh_innerdataset", obj);
            divDetail_form_divTrgt_form_cboTrsmHh_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_divTrgt_form_cboTrsmHh_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staTaskTrgtCd00","0","43","150","44",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("8");
            obj.set_text("업무대상");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTaskTrgtCd","156","49","230","32",null,null,null,null,null,null,this.divDetail.form.divTrgt.form);
            obj.set_taborder("9");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("업무대상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divDetail_form_divTrgt_form_cboTaskTrgtCd_innerdataset = new nexacro.NormalDataset("divDetail_form_divTrgt_form_cboTaskTrgtCd_innerdataset", obj);
            divDetail_form_divTrgt_form_cboTaskTrgtCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TAC0001</Col><Col id=\"datacolumn\">인증기간 만료대상 알림</Col></Row><Row><Col id=\"codecolumn\">TAC0002</Col><Col id=\"datacolumn\">착수보고 알림</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_divTrgt_form_cboTaskTrgtCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divDetail.form.divTrgt.addChild(obj.name, obj);

            obj = new Div("divMsg","0","divTrgt:-1",null,"199","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staMsgMn","0","0","150","44",null,null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("1");
            obj.set_text("메시지명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Edit("edtMsgNm","157","7","308","30",null,null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","43",null,"156","0",null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staMsgCn","0","43","150","156",null,null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("4");
            obj.set_text("메세지내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new TextArea("taeMsgCn","157","51",null,"140","7",null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Edit("edtMsgMgno","594","7","168","30",null,null,null,null,null,null,this.divDetail.form.divMsg.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divDetail.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","0","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전송정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divDirectSendTrgt","0","divDetail:20",null,"212","30",null,"1000",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","0","370","30",null,null,null,null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("0");
            obj.set_text("즉시전송 대상자정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Grid("grdTrgtList","0","40",null,"172","0",null,"1500",null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_extendsizetype("none");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"사업체명\"/><Cell col=\"1\" text=\"계정유형\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\" cssclass=\"bdNone\"/></Band><Band id=\"body\"><Cell text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:userClNm\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"cdMgno\" combodataset=\"dsInptTypeCd\" combodatacol=\"cdKornNm\" comboitemheight=\"25\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" edittype=\"none\" text=\"bind:userId\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:flnm\" textAlign=\"center\" cssclass=\"bdNone\"/></Band></Format></Formats>");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","divDetail:20",null,"62","30",null,"1000",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"0","75","32","78",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divTrgt.form
            obj = new Layout("default","",0,0,this.divDetail.form.divTrgt.form,function(p){});
            this.divDetail.form.divTrgt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divMsg.form
            obj = new Layout("default","",0,0,this.divDetail.form.divMsg.form,function(p){});
            this.divDetail.form.divMsg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDirectSendTrgt.form
            obj = new Layout("default","",0,0,this.divDirectSendTrgt.form,function(p){});
            this.divDirectSendTrgt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1550,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDetail.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDetail.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDetail.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBzentNm03_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divDetail.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.rdoTrsmTypeCd","value","dsTrsmMng","trsmTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divDetail.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divDetail.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divDetail.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divDetail.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divDetail.form.edtTrsmMngNm","value","dsTrsmMng","trsmMngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divDetail.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divDetail.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divDetail.form.taeCnsltnCn","value","dsSmsInfo","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divAgrReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divDetail.form.edtTrsmMngNo","value","dsTrsmMng","trsmMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divDetail.form.cboTaskTrgtCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divDetail.form.edtMsgNm","value","dsTrsmMng","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divDetail.form.taeMsgCn","value","dsTrsmMng","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divDetail.form.edtMsgMgno","value","dsTrsmMng","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divDetail.form.divTrgt.form.cboNtiTmng","value","dsTrsmMng","ntiTmng");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divDetail.form.divTrgt.form.edtFlnm","value","dsRegUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divDetail.form.divTrgt.form.cboTrsmMi","value","dsTrsmMng","trsmMi");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divDetail.form.divTrgt.form.cboTrsmHh","value","dsTrsmMng","trsmHh");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divDetail.form.divMsg.form.edtMsgNm","value","dsTrsmMng","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divDetail.form.divMsg.form.taeMsgCn","value","dsTrsmMng","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divDetail.form.divMsg.form.edtMsgMgno","value","dsTrsmMng","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divDetail.form.divTrgt.form.cboTaskTrgtCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TrsmMngS01.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : cnsltngrpMngS02 Form
        * FILE NAME     : cnsltngrpMngS02.xfdl
        * DESCRIPTION   : 국제감축협의관리 (등록)
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.10.24    TOBESOFT	     최초생성
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
        	trace("[TrsmMngS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        };

        /**
         * @description Form 의 크기가 변경됐을 때 발생하는 이벤트
         */
        this.form_onsize = function(obj,e)
        {

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
        	if (nErrCode < 0) {
        		// 공통(gfnTranCallback) 에서 메시지 처리 중
        		// 정의된 코드가 아닐 경우 메시지
        		switch (nErrCode)
        		{
        // 			case -1 :
        // 				// 후처리 코드
        // 				this.gfnShowMessage(this, "E000001", "", "fnMsgCallback", "msgAlert01");
        // 				break;
        			default:
        				break;
        		}
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "dtlInfo" :
        			var trsmTypeCd = this.dsTrsmMng.getColumn(0, "trsmTypeCd");
        			if(trsmTypeCd == "TTC0003") {
        				this.divCmmnBtn.form.btnUpdate.set_visible(false);
        				this.divDirectSendTrgt.set_visible(true); // 즉시전송 대상자정보
        				this.divDirectSendTrgt.set_top("divDetail:20");
        				this.divCmmnBtn.set_top("divDirectSendTrgt:20");
        				this.resetScroll();
        			} else {
        				this.divCmmnBtn.form.btnUpdate.set_visible(true);
        				this.divDirectSendTrgt.set_visible(false); // 즉시전송 대상자정보
        				this.divCmmnBtn.set_top("divDetail:20");
        				this.resetScroll();
        			}
        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        // ***********************************************************************************/
        // 상세조회
        this.fnCallDtlInfo = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/nti/trsmMng/selectTrsmMngDetail.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsTrsmMng=dsTrsmMng dsList=dsList";
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/
        /**
         * @desc 수정화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	trace("[TrsmMngS01]fnChangeDiv =========================");
        	this.scrollTo(0,0);
        	trace("=========상세 trsmMgno : " + objArgs.trsmMgno);
        	trace("=========상세 trsmTypeCd : " + objArgs.trsmTypeCd);
        	this.dsSrh.setColumn(0, "trsmMgno", objArgs.trsmMgno);

        	if(objArgs.trsmTypeCd == "TTC0001") //BATCH
        	{
        		this.divDirectSendTrgt.set_visible(false); // 즉시전송 대상자정보
        		this.divDetail.form.divTrgt.set_visible(true);
        		this.divDetail.form.divMsg.set_top("divTrgt:-1");
        		this.divDetail.set_height(414);
        		this.divCmmnBtn.set_top("divDetail:20");
        		this.resetScroll();
        	} else if(objArgs.trsmTypeCd == "TTC0003"){ //즉시전송
        		trace("=========상세 trsmTypeCd!! : " + objArgs.trsmTypeCd);
        		this.divDirectSendTrgt.set_visible(true); // 즉시전송 대상자정보
        		this.divDetail.form.divTrgt.set_visible(false);
        		this.divDetail.form.divMsg.set_top("staMsgInfo:-1");
        		this.divDetail.set_height(327);
        		this.divDirectSendTrgt.set_top("divDetail:20");
        		this.divCmmnBtn.set_top("divDirectSendTrgt:20");
        		this.resetScroll();
        	}

        	// 상세 호출
        	this.fnCallDtlInfo();
        };

        this.fnChangMain = function() {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        }
        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.
        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        //목록 버튼
        this.divCmmnBtn_btnList_onclick = function(obj,e)
        {
        	this.fnChangMain();
        };

        //수정 버튼
        this.divCmmnBtn_btnUpdate_onclick = function(obj,e)
        {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(true);

        	var objArgs = {};
        	objArgs.trsmMgno 	= this.dsTrsmMng.getColumn(0, "trsmMgno");
        	objArgs.sts			= "UPDATE";

        	this.getOwnerFrame().form.divWork.form.divReg.form.fnChangeDiv(objArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divDetail.form.staTrsmMngNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.divDetail.form.staTrsmTypeCd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.staTrsmMngNo.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.divTrgt.form.staTaskTrgtCd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.divTrgt.form.staTaskTrgtCd00.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.divMsg.form.staMsgMn.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divDetail.form.divMsg.form.staMsgCn.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.divCmmnBtn_btnList_onclick,this);
            this.divCmmnBtn.form.btnUpdate.addEventHandler("onclick",this.divCmmnBtn_btnUpdate_onclick,this);
        };
        this.loadIncludeScript("TrsmMngS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
