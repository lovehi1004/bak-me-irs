(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TrsmMngS02");
            this.set_titletext("알림(SMS) 전송관리 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1550,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTrsmMng", this);
            obj._setContents("<ColumnInfo><Column id=\"trsmMgno\" type=\"STRING\" size=\"256\"/><Column id=\"trsmMngNm\" type=\"STRING\" size=\"256\"/><Column id=\"trsmTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskTrgtCd\" type=\"STRING\" size=\"256\"/><Column id=\"msgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"msgNm\" type=\"STRING\" size=\"256\"/><Column id=\"msgCn\" type=\"STRING\" size=\"256\"/><Column id=\"ntiTmng\" type=\"STRING\" size=\"256\"/><Column id=\"trsmMi\" type=\"STRING\" size=\"256\"/><Column id=\"trsmHh\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrh", this);
            obj._setContents("<ColumnInfo><Column id=\"trsmMgno\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"userClNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divReg","0","40",null,"414","30",null,"1400",null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgInfo","0","86",null,"44","0",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.addChild(obj.name, obj);

            obj = new Div("divTrgt","0","staMsgInfo:-1",null,"87","0",null,"1400",null,null,null,this.divReg.form);
            obj.set_taborder("12");
            obj.set_text("divTrgt");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staNtiTrsm","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("1");
            obj.set_text("발송기간/시기");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboNtiTmng","266","6","160","32",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("2");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("알림시기");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divReg_form_divTrgt_form_cboNtiTmng_innerdataset = new nexacro.NormalDataset("divReg_form_divTrgt_form_cboNtiTmng_innerdataset", obj);
            divReg_form_divTrgt_form_cboNtiTmng_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1 MONTH</Col><Col id=\"datacolumn\">1개월미만</Col></Row><Row><Col id=\"codecolumn\">2 MONTH</Col><Col id=\"datacolumn\">2개월미만</Col></Row><Row><Col id=\"codecolumn\">3 MONTH</Col><Col id=\"datacolumn\">3개월미만</Col></Row><Row><Col id=\"codecolumn\">4 MONTH</Col><Col id=\"datacolumn\">4개월미만</Col></Row><Row><Col id=\"codecolumn\">5 MONTH</Col><Col id=\"datacolumn\">5개월미만</Col></Row><Row><Col id=\"codecolumn\">6 MONTH</Col><Col id=\"datacolumn\">6개월미만</Col></Row></Rows>");
            obj.set_innerdataset(divReg_form_divTrgt_form_cboNtiTmng_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staNtiTmng","149","0","110","44",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("3");
            obj.set_text("알림시기");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staTrsmMi","439","0","80","44",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("4");
            obj.set_text("전송분");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            obj.set_visible("false");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTrsmMi","526","6","90","32",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("5");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("전송분");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divReg_form_divTrgt_form_cboTrsmMi_innerdataset = new nexacro.NormalDataset("divReg_form_divTrgt_form_cboTrsmMi_innerdataset", obj);
            divReg_form_divTrgt_form_cboTrsmMi_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">26</Col></Row><Row><Col id=\"codecolumn\">27</Col><Col id=\"datacolumn\">27</Col></Row><Row><Col id=\"codecolumn\">28</Col><Col id=\"datacolumn\">28</Col></Row><Row><Col id=\"codecolumn\">29</Col><Col id=\"datacolumn\">29</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">31</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">32</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">33</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">34</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">35</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">36</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">37</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">38</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">39</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">41</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">42</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">43</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">44</Col></Row><Row><Col id=\"codecolumn\">45</Col><Col id=\"datacolumn\">45</Col></Row><Row><Col id=\"codecolumn\">46</Col><Col id=\"datacolumn\">46</Col></Row><Row><Col id=\"codecolumn\">47</Col><Col id=\"datacolumn\">47</Col></Row><Row><Col id=\"codecolumn\">48</Col><Col id=\"datacolumn\">48</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">49</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">51</Col><Col id=\"datacolumn\">51</Col></Row><Row><Col id=\"codecolumn\">52</Col><Col id=\"datacolumn\">52</Col></Row><Row><Col id=\"codecolumn\">53</Col><Col id=\"datacolumn\">53</Col></Row><Row><Col id=\"codecolumn\">54</Col><Col id=\"datacolumn\">54</Col></Row><Row><Col id=\"codecolumn\">55</Col><Col id=\"datacolumn\">55</Col></Row><Row><Col id=\"codecolumn\">56</Col><Col id=\"datacolumn\">56</Col></Row><Row><Col id=\"codecolumn\">57</Col><Col id=\"datacolumn\">57</Col></Row><Row><Col id=\"codecolumn\">58</Col><Col id=\"datacolumn\">58</Col></Row><Row><Col id=\"codecolumn\">59</Col><Col id=\"datacolumn\">59</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">60</Col></Row></Rows>");
            obj.set_innerdataset(divReg_form_divTrgt_form_cboTrsmMi_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","629","0","80","44",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("6");
            obj.set_text("전송시");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            obj.set_visible("false");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTrsmHh","716","6","90","32",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("7");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("전송시");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divReg_form_divTrgt_form_cboTrsmHh_innerdataset = new nexacro.NormalDataset("divReg_form_divTrgt_form_cboTrsmHh_innerdataset", obj);
            divReg_form_divTrgt_form_cboTrsmHh_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");
            obj.set_innerdataset(divReg_form_divTrgt_form_cboTrsmHh_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Static("staTaskTrgtCd","0","43","150","44",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("8");
            obj.set_text("업무대상");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Combo("cboTaskTrgtCd","156","49","230","32",null,null,null,null,null,null,this.divReg.form.divTrgt.form);
            obj.set_taborder("10");
            obj.set_cssclass("WFSA");
            obj.set_accessibilitylabel("업무대상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divReg_form_divTrgt_form_cboTaskTrgtCd_innerdataset = new nexacro.NormalDataset("divReg_form_divTrgt_form_cboTaskTrgtCd_innerdataset", obj);
            divReg_form_divTrgt_form_cboTaskTrgtCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TAC0001</Col><Col id=\"datacolumn\">인증기간 만료대상 알림</Col></Row><Row><Col id=\"codecolumn\">TAC0002</Col><Col id=\"datacolumn\">착수보고 알림</Col></Row></Rows>");
            obj.set_innerdataset(divReg_form_divTrgt_form_cboTaskTrgtCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divReg.form.divTrgt.addChild(obj.name, obj);

            obj = new Button("btnList",null,"-394","75","32","102",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("6");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00","0","43",null,"44","0",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staTrsmMngNm","0","43","150","44",null,null,null,null,null,null,this.divReg.form);
            obj.set_taborder("2");
            obj.set_text("전송관리명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","-64","360",null,null,"704",null,null,null,null,this.divReg.form);
            obj.set_taborder("9");
            obj.set_text("메세지정보");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divReg.addChild(obj.name, obj);

            obj = new Edit("edtTrsmMngNm","157","50",null,"30","7",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("전송관리명");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staTrsmTypeCd","0","86","150","44",null,null,null,null,null,null,this.divReg.form);
            obj.set_taborder("4");
            obj.set_text("전송유형");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.addChild(obj.name, obj);

            obj = new Radio("rdoTrsmTypeCd","157","77","258","63",null,null,null,null,null,null,this.divReg.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_accessibilitylabel("전송유형");
            obj.set_enable("false");
            var divReg_form_rdoTrsmTypeCd_innerdataset = new nexacro.NormalDataset("divReg_form_rdoTrsmTypeCd_innerdataset", obj);
            divReg_form_rdoTrsmTypeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TTC0001</Col><Col id=\"datacolumn\">BATCH</Col></Row><Row><Col id=\"codecolumn\">TTC0003</Col><Col id=\"datacolumn\">사용자정의전송</Col></Row></Rows>");
            obj.set_innerdataset(divReg_form_rdoTrsmTypeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staTrsmMngNo","0","0","150","44",null,null,null,null,null,null,this.divReg.form);
            obj.set_taborder("0");
            obj.set_text("전송관리코드");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.addChild(obj.name, obj);

            obj = new Edit("edtTrsmMngNo","157","7","228","30",null,null,null,null,null,null,this.divReg.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_accessibilitylabel("전송관리코드");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","-56",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divReg.addChild(obj.name, obj);

            obj = new Div("divMsg","0","divTrgt:-1",null,"199","0",null,null,null,null,null,this.divReg.form);
            obj.set_taborder("13");
            this.divReg.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2_00_00_00_00_00_00_00_00","0","0",null,"44","0",null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staMsgMn","0","0","150","44",null,null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("1");
            obj.set_text("메세지명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Edit("edtMsgNm","157","7","308","30",null,null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_accessibilitylabel("메세지명");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Button("btnMsgSearch","468","7","101","30",null,null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("3");
            obj.set_text("메세지 검색");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Static("sta07_00_00_00_00","0","43",null,"156","0",null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staMsgCn","0","43","150","156",null,null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("5");
            obj.set_text("메세지내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new TextArea("taeMsgCn","156","50",null,"140","0",null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_accessibilitylabel("메세지내용");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Edit("edtMsgMgno","572","7","168","30",null,null,null,null,null,null,this.divReg.form.divMsg.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_accessibilitylabel("메세지코드");
            this.divReg.form.divMsg.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","0","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전송정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divDirectSendTrgt","0","divReg:30",null,"256","30",null,"1000",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo00","0","0","370","30",null,null,null,null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("0");
            obj.set_text("즉시전송 대상자정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Grid("grdTrgtList","0","40",null,"214","0",null,"1500",null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"300\"/><Column size=\"250\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업체명\"/><Cell col=\"2\" text=\"계정유형\"/><Cell col=\"3\" text=\"사용자ID\"/><Cell col=\"4\" text=\"사용자명\" cssclass=\"bdNone\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:bzentNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:userClNm\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"cdMgno\" combodataset=\"dsInptTypeCd\" combodatacol=\"cdKornNm\" comboitemheight=\"25\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\" edittype=\"none\" text=\"bind:userId\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:flnm\" textAlign=\"center\" cssclass=\"bdNone\"/></Band></Format></Formats>");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"2","75","30","128",null,null,null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Confirm");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Button("btnTrgtList",null,"2","125","30","0",null,null,null,null,null,this.divDirectSendTrgt.form);
            obj.set_taborder("3");
            obj.set_text("대상자정보 추가");
            obj.set_cssclass("btn_WF_Add");
            this.divDirectSendTrgt.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","0","divReg:20",null,"62","30",null,"1000",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","75","32","btnList:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReg.form.divTrgt.form
            obj = new Layout("default","",0,0,this.divReg.form.divTrgt.form,function(p){});
            this.divReg.form.divTrgt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form.divMsg.form
            obj = new Layout("default","",0,0,this.divReg.form.divMsg.form,function(p){});
            this.divReg.form.divMsg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReg.form
            obj = new Layout("default","",0,0,this.divReg.form,function(p){});
            this.divReg.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","divReg.form.edtNewRvsmTypeNm","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divReg.form.edtBrno","value","dsUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divReg.form.edtFlnm","value","dsUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divReg.form.edtDeptNm","value","dsUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divReg.form.edtCncldKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divReg.form.edtCncldOrgtNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divReg.form.edtEml","value","dsUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divReg.form.edtBzentNm00","value","dsUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divReg.form.edtCncldKrnNm00","value","dsAgrInfo","cncldYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divReg.form.edtCncldOrgtNm00","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divReg.form.edtRegTypeNm00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divReg.form.edtSgntYmd00","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divReg.form.edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divReg.form.edtMouPrs00","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divReg.form.edtCncldNo00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divReg.form.edtBzentNm03_00_00","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divReg.form.edtBzentNm03_01","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divReg.form.edtRegTypeNm","value","dsAgrInfo","regTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divReg.form.edtSgntYmd","value","dsAgrInfo","sgntYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divReg.form.edtBzentNm03","value","dsAgrInfo","regTypeNm");
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

            obj = new BindItem("item17","divReg.form.edtntlNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBzentNm04_00","value","dsNtnInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divReg.form.edtMouPrs","value","dsAgrInfo","cncldDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divReg.form.edtCncldNo","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divReg.form.edtEftvnYmd","value","dsAgrInfo","eftvnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divReg.form.rdo00_00","value","dsAgrInfo","newRvsnTypeNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divReg.form.edtCnsltngrpNm","value","dsCnsltngrpInfo","cnsltngrpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divReg.form.edtKrnNm","value","dsAgrInfo","cncldKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divReg.form.rdoTrsmTypeCd","value","dsTrsmMng","trsmTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divReg.form.rdoMouBtn","value","dsAgrInfo","cncldYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divReg.form.rdoRegTypeBtn","value","dsAgrInfo","regTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divReg.form.edtMhdlgNm","value","dsMhdlgList","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divReg.form.edtMou","value","dsAgrInfo","mouOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divReg.form.edtTrsmMngNm","value","dsTrsmMng","trsmMngNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divReg.form.edtKrnNm","value","dsAgrInfo","cncldOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divReg.form.edtNtnNm","value","dsAgrInfo","ntnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divReg.form.taeCnsltnCn","value","dsSmsInfo","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divAgrReg.form.edtEngNm00_00","value","dsAgrInfo","cncldNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divReg.form.edtTrsmMngNo","value","dsTrsmMng","trsmMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divReg.form.cboTaskTrgtCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divReg.form.edtMsgNm","value","dsTrsmMng","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divReg.form.taeMsgCn","value","dsTrsmMng","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divReg.form.edtMsgMgno","value","dsTrsmMng","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divReg.form.divTrgt.form.cboNtiTmng","value","dsTrsmMng","ntiTmng");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divReg.form.divMsg.form.edtMsgNm","value","dsTrsmMng","msgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divReg.form.divMsg.form.taeMsgCn","value","dsTrsmMng","msgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divReg.form.divMsg.form.edtMsgMgno","value","dsTrsmMng","msgMgno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divReg.form.divTrgt.form.edtFlnm","value","dsRegUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divReg.form.divTrgt.form.cboTrsmMi","value","dsTrsmMng","trsmMi");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divReg.form.divTrgt.form.cboTrsmHh","value","dsTrsmMng","trsmHh");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divReg.form.divTrgt.form.cboTaskTrgtCd","value","dsTrsmMng","taskTrgtCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TrsmMngS02.xfdl", function() {
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
        	// TODO
        	this.divReg.form.edtTrsmMngNm.validate = "title:전송관리명 입력,required";
        	this.divReg.form.rdoTrsmTypeCd.validate = "title:전송유형 입력,required";
        	this.divReg.form.divMsg.form.edtMsgNm.validate = "title:메세지명 입력,required";
        	this.divReg.form.divMsg.form.taeMsgCn.validate = "title:메세지내용 입력,required";
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
        		case "save" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnChangMain();
        			break;
        		case "update" :
        			// 후처리 코드
        			this.gfnShowMessage(this, "I000003", "", "fnMsgCallback", "msgAlert02");
        			this.fnChangMain();
        			break;
        		case "dtlInfo" :
        			break;
        		default:
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	// trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 메시지 검색 팝업(프로그램)
        		case "popModalTrsmMngP01" :
        			this.dsTrsmMng.setColumn(0, "msgMgno", objRtnValue["pvMsgMgno"]);
        			this.dsTrsmMng.setColumn(0, "msgNm", objRtnValue["pvMsgNm"]);
        			this.dsTrsmMng.setColumn(0, "msgCn", objRtnValue["pvMsgCn"]);

        			break;
        		case "popModalTrsmMngP03" :
        			// 2. objct의 property name은 팝업창에서 선언한 동일한 파라미터명으로 받는다
        			if (!this.gfnIsNull(objRtnValue["pvDataset"]))
        			{
        				objRtnValue["pvDataset"].filter("chk=='Y'");
        				for(var i=0 ; i < objRtnValue["pvDataset"].getRowCount() ; i++){
        					var nRow = this.dsList.addRow();
        					this.dsList.copyRow(nRow, objRtnValue["pvDataset"], i);
        				}
        			}

        		default:
        			break;
        	}
        };
        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        // ***********************************************************************************/

        this.fnCallSave = function()
        {
        	var ModFlag = this.dsSrh.getColumn(0, "sts"); //수정 체크

        	if( ModFlag == "UPDATE" ){	//수정
        		var callUrl = "/adm/nti/trsmMng/updateTrsmMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "update";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsTrsmMng=dsTrsmMng";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	} else {
        		var callUrl = "/adm/nti/trsmMng/insertTrsmMng.irs";
        		var objArgs = {};

        		objArgs.svcId 			= "save";
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsTrsmMng=dsTrsmMng dsList=dsList";
        		objArgs.outds     		= "";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}
        };

        // 상세조회
        this.fnCallDtlInfo = function()
        {
        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "dtlInfo";
         	objArgs.url 			= "/adm/nti/trsmMng/selectTrsmMngDetail.irs";
         	objArgs.inds      		= "dsSrh=dsSrh";
         	objArgs.outds     		= "dsTrsmMng=dsTrsmMng";
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
        	trace("[TrsmMngS02]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	this.dsTrsmMng.deleteAll();
        	this.dsTrsmMng.addRow();
        	this.dsList.deleteAll();

        	this.dsSrh.setColumn(0, "sts", objArgs.sts);

        	if(objArgs.sts == "UPDATE")
        	{
        		this.divDirectSendTrgt.set_visible(false); // 즉시전송 대상자정보
        		this.divReg.set_height(414);
        		this.dsSrh.setColumn(0, "trsmMgno", objArgs.trsmMgno);
        		this.divReg.form.divTrgt.set_visible(true);
        		this.divReg.form.divMsg.set_top("divTrgt:-1");
        		this.divCmmnBtn.set_top("divReg:20");
        		this.fnCallDtlInfo(objArgs);
        	} else if(objArgs.sts == "REG") {
        		this.divDirectSendTrgt.set_visible(true); // 즉시전송 대상자정보
        		this.divReg.set_height(327);
        		this.divReg.form.rdoTrsmTypeCd.set_value("TTC0003");
        		this.divReg.form.divTrgt.set_visible(false);
        		this.divReg.form.divMsg.set_top("staMsgInfo:-1");
        		this.divDirectSendTrgt.set_top("divReg:30");
        		this.divCmmnBtn.set_top("divDirectSendTrgt:20");
        		this.resetScroll();
        	}
        };

        //메시지 검색 팝업
        this.fnCallMsgPop = function() {
        	var sPopupId 	= "popModalTrsmMngP01";
        	var sMnuId 		= "MN06070400";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {};

        	var oOption		= {callback:"fnPopupCallback",titletext:"메시지 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        //대상자정보 추가 팝업
        this.fnCallTrgtPop = function() {
        	var sPopupId 	= "popModalTrsmMngP03";
        	var sMnuId 		= "MN06070600";
        	var oPosition	= {width:1200,height:750};
        	var objArgs		= {};

        	var oOption		= {callback:"fnPopupCallback",titletext:"대상자정보 추가 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        this.fnChangMain = function() {
        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);

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

        // 전송유형 변경시
        this.divReg_rdoTrsmTypeCd_onitemchanged = function(obj,e)
        {
        	if(obj.value == 'TTC0003') { // 즉시전송
        		this.divDirectSendTrgt.set_visible(true); // 즉시전송 대상자정보
        		this.divReg.form.divTrgt.set_visible(false);
        		this.divReg.set_height(327);
        		this.divReg.form.divMsg.set_top("staMsgInfo:-1");
        		this.divDirectSendTrgt.set_top("divReg:30");
        		this.divCmmnBtn.set_top("divDirectSendTrgt:20");
        		this.resetScroll();
        	} else { // 배치전송
        		this.divDirectSendTrgt.set_visible(false); // 즉시전송 대상자정보
        		this.divReg.form.divTrgt.set_visible(true);
        		this.divReg.set_height(414);
        		this.divReg.form.divMsg.set_top("divTrgt:-1");
        		this.divCmmnBtn.set_top("divReg:20");
        		this.resetScroll();
        	}
        };

        // 저장 버튼 클릭
        this.divCmmnBtn_btnSave_onclick = function(obj,e)
        {
        	var bSucc = this.gfnValidation(this.divReg);
        	var cnt = this.divDirectSendTrgt.form.grdTrgtList.rowcount;
        	if ( bSucc ==  true ){
        		if( cnt < 1) {
        			this.gfnShowMessage(this, ["Alert","즉시전송 대상자정보를 추가하세요."], "", function(svcid, variant) {
        				this.divDirectSendTrgt.form.grdTrgtList.setFocus();
        				});
        			return false;
        		}else{
        			this.fnCallSave();
        		}
        	}
        };

        // 메시지 검색 팝업
        this.divReg_btnMsgSearch_onclick = function(obj,e)
        {
        	this.dsTrsmMng.setColumn(0, "msgMgno", "");
        	this.dsTrsmMng.setColumn(0, "msgNm", "");
        	this.dsTrsmMng.setColumn(0, "msgCn", "");
        	this.fnCallMsgPop();
        };

        // 대상자 정보 추가
        this.divDirectSendTrgt_btnTrgtList_onclick = function(obj,e)
        {
        	this.fnCallTrgtPop();
        };

        // 대상자 정보 삭제
        this.divDirectSendTrgt_btnDel_onclick = function(obj,e)
        {
        	var rRows = this.dsList.extractRows("chk=='Y'");
        	if(rRows < 0 || rRows.length < 1) {
        		this.gfnShowMessage(this, "W000021", "", "fnMsgCallback", "msgAlert01");
        	}
        	else {
        		this.dsList.deleteMultiRows(this.dsList.extractRows("chk=='Y'"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divReg.form.divTrgt.form.staNtiTrsm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.divTrgt.form.staTaskTrgtCd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divReg.form.staTrsmMngNm.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.staUsrInfo.addEventHandler("onclick",this.staUsrInfo_onclick,this);
            this.divReg.form.staTrsmTypeCd.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.rdoTrsmTypeCd.addEventHandler("onitemchanged",this.divReg_rdoTrsmTypeCd_onitemchanged,this);
            this.divReg.form.staTrsmMngNo.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.divMsg.form.staMsgMn.addEventHandler("onclick",this.divUsrInfo_staBzentNm_onclick,this);
            this.divReg.form.divMsg.form.btnMsgSearch.addEventHandler("onclick",this.divReg_btnMsgSearch_onclick,this);
            this.divReg.form.divMsg.form.staMsgCn.addEventHandler("onclick",this.sta08_00_00_00_00_onclick,this);
            this.divDirectSendTrgt.form.btnDel.addEventHandler("onclick",this.divDirectSendTrgt_btnDel_onclick,this);
            this.divDirectSendTrgt.form.btnTrgtList.addEventHandler("onclick",this.divDirectSendTrgt_btnTrgtList_onclick,this);
            this.divCmmnBtn.form.btnList.addEventHandler("onclick",this.divCmmnBtn_btnList_onclick,this);
            this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("TrsmMngS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
