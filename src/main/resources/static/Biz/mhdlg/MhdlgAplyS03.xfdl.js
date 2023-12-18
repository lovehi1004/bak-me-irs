(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFormActionS02");
            this.set_titletext("방법론 직권 상세 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,1250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAgrStiplList", this);
            obj._setContents("<ColumnInfo><Column id=\"cncldMgno\" type=\"STRING\" size=\"256\"/><Column id=\"cncldDgr\" type=\"STRING\" size=\"256\"/><Column id=\"cncldOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCd\" type=\"STRING\" size=\"256\"/><Column id=\"cncldClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntnNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlBtn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFldList", this);
            obj._setContents("<ColumnInfo><Column id=\"bizFldCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"bizFldDtlsCdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"bizDtlsFldKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMhdlgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"addDataPrcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"addDataTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCd\" type=\"STRING\" size=\"256\"/><Column id=\"agreeClausCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyClCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bizPlndFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"cmptncInstNo\" type=\"STRING\" size=\"256\"/><Column id=\"dataDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dgrRegRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"etcDataFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"explnFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgUnqno\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDgr\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prpsdFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"regRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"typeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"vldBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldMhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"vldYmd\" type=\"STRING\" size=\"256\"/><Column id=\"vldYn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegUsrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmstClCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"btnCtl\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgDgr\" type=\"STRING\" size=\"256\"/><Column id=\"bizTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"rvwTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"rvwSn\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgr\" type=\"STRING\" size=\"256\"/><Column id=\"rvwInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rvwrId\" type=\"STRING\" size=\"256\"/><Column id=\"rvwTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDt\" type=\"STRING\" size=\"256\"/><Column id=\"rvwOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"rvwFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"rvwTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rvwDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"dicDlbrSn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrrId\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dicDlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"mod\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"dlbrSn\" type=\"STRING\" size=\"0\"/><Column id=\"dlbrDgr\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDgrNm\" type=\"STRING\" size=\"256\"/><Column id=\"mhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyFlmno\" type=\"STRING\" size=\"256\"/><Column id=\"objcAplyYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrDt\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltInptInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrRsltRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrOpnn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrFlmno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEtcDataFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrpsdFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizPlndFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDicDlbrObjcAplyFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlbrObjcAplyFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExplnFlmnoFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fileGroupMgno\" type=\"string\" size=\"32\"/><Column id=\"fileMgno\" type=\"string\" size=\"32\"/><Column id=\"orgnlFileNm\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"fileSz\" type=\"int\" size=\"4\"/><Column id=\"fileExtnNm\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"bizMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"vldBizDgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOldMhdlgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"oldMhdlgKrnNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgOrgtNm\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgMgno\" type=\"STRING\" size=\"256\"/><Column id=\"oldMhdlgGroupMgno\" type=\"STRING\" size=\"256\"/><Column id=\"oldRvsnDgr\" type=\"STRING\" size=\"256\"/><Column id=\"oldRegRsnCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccessAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"writeYn\" type=\"STRING\" size=\"256\"/><Column id=\"dlbrWriteYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divH1","0","0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staDocList","0","20",null,"30","0",null,null,null,null,null,this.divH1.form);
            obj.set_taborder("0");
            obj.set_text("문서제출이력 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH1.addChild(obj.name, obj);

            obj = new Button("btnDocList","153","22","80","30",null,null,null,null,null,null,this.divH1.form);
            obj.set_taborder("1");
            obj.set_text("이력보기");
            obj.set_cssclass("btn_WF_Add");
            this.divH1.addChild(obj.name, obj);

            obj = new Div("divDocHist","0","divH1:0",null,"173","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDocList","0","0",null,"173","0",null,null,null,null,null,this.divDocHist.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDocList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"113\"/><Column size=\"127\"/><Column size=\"109\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제출일자\"/><Cell col=\"2\" text=\"신청유형\"/><Cell col=\"3\" text=\"처리일자\"/><Cell col=\"4\" text=\"관장기관\"/><Cell col=\"5\" text=\"처리유형\"/><Cell col=\"6\" text=\"상세보기\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" textAlign=\"center\" tooltiptext=\"bind:no\"/><Cell col=\"1\" text=\"bind:aplyYmd\" textAlign=\"center\" tooltiptext=\"bind:aplyYmd\"/><Cell col=\"2\" text=\"bind:aplyTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:aplyTypeCdNm\"/><Cell col=\"3\" text=\"bind:prcsYmd\" textAlign=\"center\" tooltiptext=\"bind:prcsYmd\"/><Cell col=\"4\" text=\"bind:prcsUserNm\" textAlign=\"center\" tooltiptext=\"bind:prcsUserNm\"/><Cell col=\"5\" text=\"bind:prcsTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:prcsTypeCdNm\"/><Cell col=\"6\" text=\"bind:btnCtl\" textAlign=\"center\" displaytype=\"buttoncontrol\" controlautosizingtype=\"none\" edittype=\"button\" font=\"normal 15px/normal &quot;NotoSansKR&quot;\" tooltiptext=\"bind:btnCtl\"/></Band></Format></Formats>");
            this.divDocHist.addChild(obj.name, obj);

            obj = new Div("divH2","0","divDocHist:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfo","0","20",null,"30","0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH2.addChild(obj.name, obj);

            obj = new Button("btnTopList",null,"20","71","30","8",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("3");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH2.addChild(obj.name, obj);

            obj = new Button("btnTopReg",null,"20","115","30","btnTopList:0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("2");
            obj.set_text("사업");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH2.addChild(obj.name, obj);

            obj = new Button("btnTopRpt",null,"20","100","30","btnTopReg:0",null,null,null,null,null,this.divH2.form);
            obj.set_taborder("1");
            obj.set_text("보고서 출력");
            obj.set_cssclass("btn_WF_Confirm");
            this.divH2.addChild(obj.name, obj);

            obj = new Div("divUsrInfo","0","divH2:0",null,"130","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL2","0","43",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL1","0","0",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBzentNm","0","0","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("2");
            obj.set_text("사업수행자");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staBrno","1096","0","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("5");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBzentNm","157","7","933","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoL3","0","86",null,"44","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtBrno","1253","7",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","1096","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","1253","50",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staDeptNm","619","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","776","50","314","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsrInfoLT","0","0",null,"1","0",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtFlnm","306","50","307","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staEml","619","86","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("15");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_LabelSub");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtEml","776","93",null,"30","7",null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Edit("edtTel","306","93","307","30",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staUsr","0","43","150","87",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staFlnm","149","43","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Static("staTel","149","86","150","44",null,null,null,null,null,null,this.divUsrInfo.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelSub");
            obj.set_border("1px solid #ccd2db,0px none,1px solid #ccd2db,1px solid #ccd2db");
            this.divUsrInfo.addChild(obj.name, obj);

            obj = new Div("divH3","0","divUsrInfo:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staMhdlgInfoTitle","0","20",null,"30","0",null,null,null,null,null,this.divH3.form);
            obj.set_taborder("1");
            obj.set_text("방법론 정보 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH3.addChild(obj.name, obj);

            obj = new Div("divMhdlgDtl","1","divH3:0",null,"533","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNmArea","0","0",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNmArea","4","staAplyClCdNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgArea","4","staPrcndCdNmArea:-1",null,"44","-4",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNmArea","0","staOldMhdlgArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNmArea","0","staOrgtNmArea:-1",null,"44","1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAplyClCdNm","0","0","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("3");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","3","-50",null,"1","-3",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staPrcndCdNm","0","staAplyClCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("14");
            obj.set_text("제·개정구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAplyClCd","staAplyClCdNm:7","staAplyClCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtPrcndCd","157","staPrcndCdNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOldMhdlgNm","0","staPrcndCdNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("개정 방법론 명");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staOrgtNm","0","staOldMhdlgNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("6");
            obj.set_text("방법론명(원문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtOldMhdlgNm","155","staOldMhdlgArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("output");
            obj.set_visible("true");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staKrnNm","0","staOrgtNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("7");
            obj.set_text("방법론명(국문)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNmArea","0","staKrnNmArea:-1",null,"44","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeClausNm","0","staKrnNm:-1","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("9");
            obj.set_text("파리협정조항");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtAgreeClaus","157","staAgreeClausNmArea:-37","1193","33",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtKrnNm","157","staKrnNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeStiplArea","1","staAgreeClausNmArea:-1",null,"138","-1",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staAgreeStipl","0","staAgreeClausNm:-1","150","138",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("16");
            obj.set_text("협정/약정/MOU");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdAgreeStipl","158","staAgreeStiplArea:-132",null,"116","6",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsAgrStiplList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"790\"/><Column size=\"400\"/><Column size=\"170\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"협정/약정MOU명\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"체결국\"/><Cell col=\"2\" text=\"상세\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:cncldKrnNm\"/><Cell col=\"1\" text=\"bind:ntnNm\"/><Cell col=\"2\" text=\"상세\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFldArea","0","staAgreeStiplArea:-1",null,"138","0",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staBizFld","0","staAgreeStipl:-1","150","138",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("12");
            obj.set_text("사업분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Grid("grdBizFld","157","staBizFldArea:-130",null,"116","7",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsBizFldList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"570\"/><Column size=\"570\"/><Column size=\"220\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"사업분야\" cssclass=\"Cell_NoLine\"/><Cell col=\"1\" text=\"사업 세부분야\"/><Cell col=\"2\" text=\"고유번호\"/></Band><Band id=\"body\"><Cell padding=\"0px 7px\" text=\"bind:bizFldKornNm\"/><Cell col=\"1\" text=\"bind:bizDtlsFldKornNm\"/><Cell col=\"2\" text=\"bind:mhdlgUnqno\"/></Band></Format></Formats>");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtOrgtNm","157","staOrgtNmArea:-37","1193","30",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Edit("edtReddPlusYn","940","staAgreeClausNmArea:-37",null,"30","30",null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Static("staReddPlusYn","783","staAgreeClausNmArea:-44","150","44",null,null,null,null,null,null,this.divMhdlgDtl.form);
            obj.set_taborder("26");
            obj.set_text("REDD+ 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMhdlgDtl.addChild(obj.name, obj);

            obj = new Div("divH4","0","divMhdlgDtl:0",null,"59","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staMhdlgInfoTitle","0","20",null,"30","0",null,null,null,null,null,this.divH4.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divH4.addChild(obj.name, obj);

            obj = new Div("divFileDataDtl","1","divH4:0",null,"468","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPrpsdArea","0","0",null,"132","0",null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("staBizPlndArea","0","staPrpsdArea:-1",null,"132","0",null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("staEtcDataArea","0","staBizPlndArea:-1",null,"207","0",null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("staPrpsd","0","0","150","132",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("6");
            obj.set_text("방법론제안서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("staBizPlnd","0","staPrpsd:-1","150","132",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("1");
            obj.set_text("사업계획서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("staEtcData","0","staBizPlnd:-1","150","207",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("2");
            obj.set_text("기타증빙문서");
            obj.set_cssclass("sta_WF_Label");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Div("divPrpsdFlmno","157","staPrpsdArea:-126","800","120",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Div("divBizPlndFlmno","157","staBizPlndArea:-126","800","120",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Div("divEtcMultiFile","157","staEtcDataArea:-201","800","195",null,null,null,null,null,null,this.divFileDataDtl.form);
            obj.set_taborder("9");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_text("");
            this.divFileDataDtl.addChild(obj.name, obj);

            obj = new Div("divH5","0","divFileDataDtl:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divRvw","0","divH5:0",null,"332","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divE1","0","0",null,"60","0",null,null,null,null,null,this.divRvw.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divRvw.addChild(obj.name, obj);

            obj = new Static("staEvlRstTit","20","20",null,"30","0",null,null,null,null,null,this.divRvw.form.divE1.form);
            obj.set_taborder("0");
            obj.set_text("평가결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divRvw.form.divE1.addChild(obj.name, obj);

            obj = new Div("divEvlRst","20","divE1:0",null,"251","20",null,null,null,null,null,this.divRvw.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divRvw.addChild(obj.name, obj);

            obj = new Static("staEvlH3","0","43",null,"76","0",null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlH4","0","staEvlH3:-1",null,"132","0",null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlH2","0","0",null,"44","0",null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlTypeCd","0","0","150","44",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("2");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlOpnn","0","staEvlTypeCd:-1","150","76",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("3");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlFlmno","0","staEvlOpnn:-1","150","132",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("4");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Static("staEvlDt","783","staEvlH2:-43","150","43",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("6");
            obj.set_text("평가일자");
            obj.set_cssclass("sta_WF_Label");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Edit("edtEvlDt","940","staEvlH2:-36",null,"30","6",null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Edit("edtEvlTypeCd","157","staEvlH2:-36","372","30",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new TextArea("taeEvlOpnn","157","staEvlH3:-68",null,"62","10",null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.set_visible("true");
            obj.set_readonly("false");
            obj.set_border("0");
            obj.set_padding("0px");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_cssclass("output");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Div("divRvwFlmno","157","staEvlH4:-126","800","120",null,null,null,null,null,null,this.divRvw.form.divEvlRst.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divRvw.form.divEvlRst.addChild(obj.name, obj);

            obj = new Div("divH6","0","divRvw:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divRvwWrite","0","divH6:0",null,"332","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divRvwWrite.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divRvwWrite.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("평가결과 등록");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divRvwWrite.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divRvwWrite","20","divKoffH1:0",null,"250","20",null,null,null,null,null,this.divRvwWrite.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("staRvwWriteResultArea","0","0",null,"44","0",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("staRvwWriteResult","0","0","150","44",null,null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("1");
            obj.set_text("평가처리결과");
            obj.set_cssclass("sta_WF_Label");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Combo("cboRvwWriteResult","157","staRvwWriteResultArea:-37",null,"30","1140",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsMhdlgRvwTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label_Top");
            obj.set_text("");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("staRvwWriteOpnnArea","0","staRvwWriteResultArea:-1",null,"76","0",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("staRvwWriteOpinion","0","staRvwWriteResult:-1","150","76",null,null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("5");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new TextArea("txaRvwWriteOpinion","157","staRvwWriteOpnnArea:-69",null,"62","7",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","staRvwWriteOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","staRvwWriteOpinion:-1","150","132",null,null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("8");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Div("divRvwWriteFlmno","157","sta07_00:-126","800","120",null,null,null,null,null,null,this.divRvwWrite.form.divRvwWrite.form);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divRvwWrite.form.divRvwWrite.addChild(obj.name, obj);

            obj = new Div("divH7","0","divRvwWrite:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDicDlbr","0","divH7:0",null,"633","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDicDlbr.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("사전심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicDlbr.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divDicDlbrList","20","divKoffH1:0",null,"260","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Grid("grdDicDlbrList","0","0",null,"240","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbrList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj.set_binddataset("dsDicDlbrDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"113\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"처리일자\"/><Cell col=\"2\" text=\"처리결과\"/><Cell col=\"3\" text=\"관장기관\"/></Band><Band id=\"body\"><Cell text=\"bind:dicDlbrDgrNm\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrDgrNm\"/><Cell col=\"1\" text=\"bind:dicDlbrDt\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrDt\"/><Cell col=\"2\" text=\"bind:dicDlbrTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrTypeCdNm\"/><Cell col=\"3\" text=\"bind:dicDlbrInstCd\" textAlign=\"center\" tooltiptext=\"bind:dicDlbrInstCd\"/></Band></Format></Formats>");
            this.divDicDlbr.form.divDicDlbrList.addChild(obj.name, obj);

            obj = new Div("divDicDlbr","20","divDicDlbrList:0",null,"293","20",null,null,null,null,null,this.divDicDlbr.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrOpnnArea","0","86",null,"76","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrFileArea","0","staDicDlbrOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDgrArea","0","0",null,"44","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrResultArea","0","staDicDlbrDgrArea:-1",null,"44","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrDgr","157","staDicDlbrDgrArea:-37",null,"30","7",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDgr","0","0","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrResult","0","staDicDlbrDgr:-1","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrOpnn","0","staDicDlbrResult:-1","150","76",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("7");
            obj.set_text("사전심의의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrFile","0","staDicDlbrOpnn:-1","150","132",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("8");
            obj.set_text("사전심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrResult","157","staDicDlbrResultArea:-37","171","30",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("10");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Static("staDicDlbrDate","783","staDicDlbrResultArea:-44","150","44",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("11");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrDate","940","staDicDlbrResultArea:-37",null,"30","6",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("12");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrOpnn","157","staDicDlbrOpnnArea:-69",null,"62","10",null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("13");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Div("divDicDlbrFlmno","157","staDicDlbrFileArea:-126","800","120",null,null,null,null,null,null,this.divDicDlbr.form.divDicDlbr.form);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDicDlbr.form.divDicDlbr.addChild(obj.name, obj);

            obj = new Div("divH8","0","divDicDlbr:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDicObjcAply","0","divH8:0",null,"332","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDicObjcAply.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDicObjcAply.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDicObjcAply.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("사전심의 이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicObjcAply.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divObjcAply","20","divKoffH1:0",null,"252","20",null,null,null,null,null,this.divDicObjcAply.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDicObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnnArea","0","0",null,"76","0",null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","76",null,null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("2");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFileArea","0","staObjcAplyOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyDateArea","0","staObjcAplyFileArea:-1",null,"44","0",null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFile","0","staObjcAplyOpnn:-1","150","132",null,null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("5");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyDate","0","staObjcAplyFile:-1","150","44",null,null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("6");
            obj.set_text("이의신청일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyDate","157","staObjcAplyDateArea:-37","143","30",null,null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyOpnn","157","staObjcAplyOpnnArea:-69",null,"62","10",null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Div("divDicObjcAplyFlmno","157","staObjcAplyFileArea:-126","800","120",null,null,null,null,null,null,this.divDicObjcAply.form.divObjcAply.form);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDicObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Div("divH9","0","divDicObjcAply:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDicObjcAplyWrite","0","divH9:0",null,"288","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDicObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDicObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDicObjcAplyWrite.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("사전심의 이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicObjcAplyWrite.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divObjcAplyWrite","20","divKoffH1:0",null,"208","20",null,null,null,null,null,this.divDicObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divDicObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteArea","0","sta07:-1",null,"132","0",null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteOpnn","0","0","150","76",null,null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteFile","0","staObjcAplyWriteOpnn:-1","150","132",null,null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("2");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new TextArea("txaDicObjcAply","157","sta07:-69",null,"62","7",null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Div("divDicObjcAplyWriteFlmno","157","staObjcAplyWriteArea:-126","800","120",null,null,null,null,null,null,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Div("divH10","0","divDicObjcAplyWrite:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDicDlbrWrite","0","divH10:0",null,"376","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDicDlbrWrite.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDicDlbrWrite.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("사전심의결과 등록 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDicDlbrWrite.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divDicDlbrWrite","20","divKoffH1:0",null,"296","20",null,null,null,null,null,this.divDicDlbrWrite.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteOpnnArea","0","86",null,"76","0",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteFileArea","0","staDicDlbrWriteOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteDgrArea","0","0",null,"44","0",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteResultArea","0","staDicDlbrWriteDgrArea:-1",null,"44","0",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Edit("edtDicDlbrWriteDgr","157","staDicDlbrWriteDgrArea:-37",null,"30","7",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("6");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteDgr","0","0","150","44",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("2");
            obj.set_text("사전심의차수");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteResult","0","staDicDlbrWriteDgr:-1","150","44",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("4");
            obj.set_text("사전심의 처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteOpnn","0","staDicDlbrWriteResult:-1","150","76",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("7");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteFile","0","staDicDlbrWriteOpnn:-1","150","132",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("8");
            obj.set_text("평가파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Combo("cboDicDlbrWriteResult","157","staDicDlbrWriteResultArea:-37","227","30",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDicDlbrTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_text("사전심의승인");
            obj.set_value("");
            obj.set_index("-1");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new TextArea("txaDicDlbrWriteOpnn","157","staDicDlbrWriteOpnnArea:-69",null,"62","7",null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDicDlbrWriteDate","783","staDicDlbrWriteResultArea:-44","150","44",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("12");
            obj.set_text("사전심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("false");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Calendar("calDicDlbrWriteDate","940","staDicDlbrWriteResultArea:-37","150","30",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            obj.set_visible("false");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divDicDlbrWriteFlmno","157","staDicDlbrWriteFileArea:-126","800","120",null,null,null,null,null,null,this.divDicDlbrWrite.form.divDicDlbrWrite.form);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDicDlbrWrite.form.divDicDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divH11","0","divDicDlbrWrite:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbr","0","divH11:0","1566","840",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","0",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","20",null,null,null,null,null,this.divDlbr.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbr.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divDlbrList","20","divKoffH1:0",null,"250","20",null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Grid("grdDlbrList","0","0",null,"240","0",null,null,null,null,null,this.divDlbr.form.divDlbrList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj.set_binddataset("dsDlbrDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"127\"/><Column size=\"110\"/><Column size=\"113\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"심의일자\"/><Cell col=\"2\" text=\"처리결과\"/><Cell col=\"3\" text=\"관장기관\"/></Band><Band id=\"body\"><Cell text=\"bind:dlbrDgrNm\" textAlign=\"center\" tooltiptext=\"bind:dlbrDgrNm\"/><Cell col=\"1\" text=\"bind:dlbrDt\" textAlign=\"center\" tooltiptext=\"bind:dlbrDt\"/><Cell col=\"2\" text=\"bind:dlbrTypeCdNm\" textAlign=\"center\" tooltiptext=\"bind:dlbrTypeCdNm\"/><Cell col=\"3\" text=\"bind:dlbrRsltInptInstCd\" textAlign=\"center\" tooltiptext=\"bind:dlbrRsltInptInstCd\"/></Band></Format></Formats>");
            this.divDlbr.form.divDlbrList.addChild(obj.name, obj);

            obj = new Div("divDlbr","22","divDlbrList:0","1522","510",null,null,null,null,null,null,this.divDlbr.form);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlbr.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("0");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteDgrArea","0","0",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrWriteDgr","157","staDlbrWriteDgrArea:-37","1193","30",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteDgr","0","0","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("3");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrResultArea","0","staDlbrWriteDgrArea:-1",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrResult","0","staDlbrWriteDgr:-1","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("5");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrResult","157","staDlbrResultArea:-37","616","30",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("6");
            obj.set_value("심의승인");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("심의승인");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrDate","940","staDlbrResultArea:-37",null,"30","10",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("7");
            obj.set_value("2023-08-16");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("2023-08-16");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrDate","783","staDlbrResultArea:-44","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("9");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            obj.set_tooltiptext("staDlbrResultArea");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqnoArea","0","staDlbrResultArea:-1",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgUnqno","157","staMhdlgUnqnoArea:-37",null,"30","771",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("11");
            obj.set_cssclass("output");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqno","0","staDlbrResult:-1","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("12");
            obj.set_text("방법론고유번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staExplnFlmnoArea","0","staMhdlgUnqnoArea:-1",null,"132","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Div("divExplnFlmno","157","staExplnFlmnoArea:-126","800","120",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            obj.set_tooltiptext("설명파일");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staExplnFlmno","0","staMhdlgUnqno:-1","150","132",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("15");
            obj.set_text("설명파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmdArea","0","staExplnFlmnoArea:-1",null,"44","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrDate00","157","staVldBgngYmdArea:-37","124","30",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("17");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmd","0","staExplnFlmno:-1","150","44",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("18");
            obj.set_text("유효시작일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnnArea","0","staVldBgngYmdArea:-1",null,"76","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Edit("edtDlbrOpnn","157","staDlbrOpnnArea:-69",null,"62","10",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("20");
            obj.set_value("승인합니다.");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("승인합니다.");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrOpnn","0","staVldBgngYmd:-1","150","76",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("21");
            obj.set_text("심의의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","staDlbrOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Div("divDlbrFlmno","157","sta07_00:-123","800","120",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("23");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Static("staDlbrFile","0","staDlbrOpnn:-1","150","132",null,null,null,null,null,null,this.divDlbr.form.divDlbr.form);
            obj.set_taborder("24");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbr.form.divDlbr.addChild(obj.name, obj);

            obj = new Div("divH12","0","divDlbr:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrObjcAply","0","divH12:0",null,"332","30",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDlbrObjcAply.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlbrObjcAply.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDlbrObjcAply.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbrObjcAply.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divObjcAply","20","divKoffH1:0",null,"252","20",null,null,null,null,null,this.divDlbrObjcAply.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divDlbrObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnnArea","0","0",null,"76","0",null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyOpnn","0","0","150","76",null,null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("2");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFileArea","0","staObjcAplyOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyDateArea","0","staObjcAplyFileArea:-1",null,"44","0",null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyFile","0","staObjcAplyOpnn:-1","150","132",null,null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("5");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Static("staObjcAplyDate","0","staObjcAplyFile:-1","150","44",null,null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("6");
            obj.set_text("이의신청일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyDate","157","staObjcAplyDateArea:-37","143","30",null,null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("7");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Edit("edtObjcAplyOpnn","157","staObjcAplyOpnnArea:-69",null,"62","10",null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("8");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Div("divObjcAplyFlmno","157","staObjcAplyFileArea:-126","800","120",null,null,null,null,null,null,this.divDlbrObjcAply.form.divObjcAply.form);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDlbrObjcAply.form.divObjcAply.addChild(obj.name, obj);

            obj = new Div("divH13","0","divDlbrObjcAply:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrObjcAplyWrite","0","divH13:0",null,"288","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","30",null,null,null,null,null,this.divDlbrObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.divDlbrObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20",null,"30","0",null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("이의신청 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbrObjcAplyWrite.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divObjcAplyWrite","20","divKoffH1:0",null,"208","20",null,null,null,null,null,this.divDlbrObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            obj.set_text("");
            this.divDlbrObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("sta07","0","0",null,"76","0",null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteArea","0","sta07:-1",null,"132","0",null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteOpnn","0","0","150","76",null,null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("1");
            obj.set_text("이의신청의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("staObjcAplyWriteFile","0","staObjcAplyWriteOpnn:-1","150","132",null,null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("2");
            obj.set_text("이의신청파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new TextArea("txaObjcAply","157","sta07:-69",null,"62","7",null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Div("divObjcAplyWriteFlmno","157","staObjcAplyWriteArea:-126","800","120",null,null,null,null,null,null,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.addChild(obj.name, obj);

            obj = new Div("divH14","0","divDlbrObjcAplyWrite:0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDlbrWrite","0","divH14:0",null,"592","30",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_cssclass("div_GroupBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divKoffH1","20","0",null,"60","0",null,null,null,null,null,this.divDlbrWrite.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staKoffTit","0","20","519","30",null,null,null,null,null,null,this.divDlbrWrite.form.divKoffH1.form);
            obj.set_taborder("0");
            obj.set_text("심의결과 등록 ");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.divDlbrWrite.form.divKoffH1.addChild(obj.name, obj);

            obj = new Div("divDlbrWrite","20","60",null,"514","20",null,null,null,null,null,this.divDlbrWrite.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_background("");
            this.divDlbrWrite.addChild(obj.name, obj);

            obj = new Calendar("cal00","280","2838","150","30",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("0");
            obj.set_value("20191225");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteDgrArea","0","0",null,"44","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteDgr","0","0","150","44",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("2");
            obj.set_text("심의차수");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Edit("edtDlbrWriteDgr","157","staDlbrWriteDgrArea:-37","1193","30",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("output");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteResultArea","0","staDlbrWriteDgrArea:-1",null,"44","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteResult","0","staDlbrWriteDgr:-1","150","44",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("6");
            obj.set_text("심의처리결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("sta08_01","783","staDlbrWriteResultArea:-44","150","44",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("7");
            obj.set_text("심의일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Combo("cboDlbrWriteResult","157","staDlbrWriteResultArea:-37","227","30",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMhdlgDlbrTypeCd");
            obj.set_codecolumn("cdMgno");
            obj.set_datacolumn("cdKornNm");
            obj.set_value("");
            obj.set_index("-1");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divDlbrCalDay","940","staDlbrWriteResultArea:-37","124","30",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("9");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqnoArea","0","staDlbrWriteResultArea:-1",null,"44","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Edit("edtMhdlgUnqno","157","staMhdlgUnqnoArea:-37",null,"30","773",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("11");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staMhdlgUnqno","0","staDlbrWriteResult:-1","150","44",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("12");
            obj.set_text("방법론고유번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staExplnFlmnoArea","0","staMhdlgUnqnoArea:-1",null,"132","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divExplnFlmno","157","staExplnFlmnoArea:-126","800","120",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staExplnFlmno","0","staMhdlgUnqno:-1","150","132",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("15");
            obj.set_text("설명파일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmdArea","0","staExplnFlmnoArea:-1",null,"44","-10",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divVldbangYmd","157","staVldBgngYmdArea:-37","124","30",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("17");
            obj.set_text("divCalDay");
            obj.set_url("Frame_Common::comCalDay.xfdl");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staVldBgngYmd","0","staExplnFlmno:-1","150","44",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("18");
            obj.set_text("유효시작일자");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_visible("true");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteOpnnArea","0","staVldBgngYmdArea:-1",null,"76","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new TextArea("txaDlbrWriteOpnn","157","staDlbrWriteOpnnArea:-68",null,"62","7",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteOpnn","0","staVldBgngYmd:-1","150","76",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("21");
            obj.set_text("심의의견 ");
            obj.set_cssclass("sta_WF_Label_E");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteFileArea","0","staDlbrWriteOpnnArea:-1",null,"132","0",null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divDlbrWriteFlmno","157","staDlbrWriteFileArea:-126","800","120",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("23");
            obj.set_text("div00");
            obj.set_url("Frame_Common::comRaonK.xfdl");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Static("staDlbrWriteFile","0","staDlbrWriteOpnn:-1","150","132",null,null,null,null,null,null,this.divDlbrWrite.form.divDlbrWrite.form);
            obj.set_taborder("24");
            obj.set_text("심의파일");
            obj.set_cssclass("sta_WF_Label");
            this.divDlbrWrite.form.divDlbrWrite.addChild(obj.name, obj);

            obj = new Div("divH15","0","divDlbrWrite:0",null,"20","30",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divComBtn","0","divH15:0","1566","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","75","32","0",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("0");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_CrudSub");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnEvlSave",null,"0","100","32","btnList:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("1");
            obj.set_text("평가결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnOpnnSave",null,"0","100","32","btnEvlSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("2");
            obj.set_text("이의신청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDicDlbrSave",null,"0","100","32","btnOpnnSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("3");
            obj.set_text("사전심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrSave",null,"0","100","32","btnDicDlbrSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("8");
            obj.set_text("심의결과 저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnModDoc",null,"0","100","32","btnDlbrSave:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("6");
            obj.set_text("문서보완");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnReDoc",null,"0","100","32","btnModDoc:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("7");
            obj.set_text("문서재제출");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnAply",null,"0","100","32","btnReDoc:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("4");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnMod",null,"0","100","32","btnAply:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("5");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrAply",null,"0","100","32","btnMod:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("9");
            obj.set_text("심의요청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbring",null,"0","100","32","btnDlbrAply:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("10");
            obj.set_text("심의중");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Button("btnDlbrOpnnSave",null,"0","100","32","btnDlbring:3",null,null,null,null,null,this.divComBtn.form);
            obj.set_taborder("11");
            obj.set_text("이의신청");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            this.divComBtn.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","72",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Label_Top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divH1.form
            obj = new Layout("default","",0,0,this.divH1.form,function(p){});
            this.divH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDocHist.form
            obj = new Layout("default","",0,0,this.divDocHist.form,function(p){});
            this.divDocHist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH2.form
            obj = new Layout("default","",0,0,this.divH2.form,function(p){});
            this.divH2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUsrInfo.form
            obj = new Layout("default","",0,0,this.divUsrInfo.form,function(p){});
            this.divUsrInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH3.form
            obj = new Layout("default","",0,0,this.divH3.form,function(p){});
            this.divH3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMhdlgDtl.form
            obj = new Layout("default","",0,0,this.divMhdlgDtl.form,function(p){});
            this.divMhdlgDtl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH4.form
            obj = new Layout("default","",0,0,this.divH4.form,function(p){});
            this.divH4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileDataDtl.form.divPrpsdFlmno
            obj = new Layout("default","",0,0,this.divFileDataDtl.form.divPrpsdFlmno.form,function(p){});
            this.divFileDataDtl.form.divPrpsdFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileDataDtl.form.divBizPlndFlmno
            obj = new Layout("default","",0,0,this.divFileDataDtl.form.divBizPlndFlmno.form,function(p){});
            this.divFileDataDtl.form.divBizPlndFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileDataDtl.form.divEtcMultiFile
            obj = new Layout("default","",0,0,this.divFileDataDtl.form.divEtcMultiFile.form,function(p){});
            this.divFileDataDtl.form.divEtcMultiFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileDataDtl.form
            obj = new Layout("default","",0,0,this.divFileDataDtl.form,function(p){});
            this.divFileDataDtl.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH5
            obj = new Layout("default","",0,0,this.divH5.form,function(p){});
            this.divH5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvw.form.divE1.form
            obj = new Layout("default","",0,0,this.divRvw.form.divE1.form,function(p){});
            this.divRvw.form.divE1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvw.form.divEvlRst.form.divRvwFlmno
            obj = new Layout("default","",0,0,this.divRvw.form.divEvlRst.form.divRvwFlmno.form,function(p){});
            this.divRvw.form.divEvlRst.form.divRvwFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvw.form.divEvlRst.form
            obj = new Layout("default","",0,0,this.divRvw.form.divEvlRst.form,function(p){});
            this.divRvw.form.divEvlRst.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvw.form
            obj = new Layout("default","",0,0,this.divRvw.form,function(p){});
            this.divRvw.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH6
            obj = new Layout("default","",0,0,this.divH6.form,function(p){});
            this.divH6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvwWrite.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divRvwWrite.form.divKoffH1.form,function(p){});
            this.divRvwWrite.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvwWrite.form.divRvwWrite.form.divRvwWriteFlmno
            obj = new Layout("default","",0,0,this.divRvwWrite.form.divRvwWrite.form.divRvwWriteFlmno.form,function(p){});
            this.divRvwWrite.form.divRvwWrite.form.divRvwWriteFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvwWrite.form.divRvwWrite.form
            obj = new Layout("default","",0,0,this.divRvwWrite.form.divRvwWrite.form,function(p){});
            this.divRvwWrite.form.divRvwWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRvwWrite.form
            obj = new Layout("default","",0,0,this.divRvwWrite.form,function(p){});
            this.divRvwWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH7.form
            obj = new Layout("default","",0,0,this.divH7.form,function(p){});
            this.divH7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divKoffH1.form,function(p){});
            this.divDicDlbr.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbrList.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbrList.form,function(p){});
            this.divDicDlbr.form.divDicDlbrList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form,function(p){});
            this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form.divDicDlbr.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form.divDicDlbr.form,function(p){});
            this.divDicDlbr.form.divDicDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbr.form
            obj = new Layout("default","",0,0,this.divDicDlbr.form,function(p){});
            this.divDicDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH8.form
            obj = new Layout("default","",0,0,this.divH8.form,function(p){});
            this.divH8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAply.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDicObjcAply.form.divKoffH1.form,function(p){});
            this.divDicObjcAply.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno
            obj = new Layout("default","",0,0,this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form,function(p){});
            this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAply.form.divObjcAply.form
            obj = new Layout("default","",0,0,this.divDicObjcAply.form.divObjcAply.form,function(p){});
            this.divDicObjcAply.form.divObjcAply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAply.form
            obj = new Layout("default","",0,0,this.divDicObjcAply.form,function(p){});
            this.divDicObjcAply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH9.form
            obj = new Layout("default","",0,0,this.divH9.form,function(p){});
            this.divH9.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAplyWrite.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDicObjcAplyWrite.form.divKoffH1.form,function(p){});
            this.divDicObjcAplyWrite.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.divDicObjcAplyWriteFlmno
            obj = new Layout("default","",0,0,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.divDicObjcAplyWriteFlmno.form,function(p){});
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.divDicObjcAplyWriteFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAplyWrite.form.divObjcAplyWrite.form
            obj = new Layout("default","",0,0,this.divDicObjcAplyWrite.form.divObjcAplyWrite.form,function(p){});
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicObjcAplyWrite.form
            obj = new Layout("default","",0,0,this.divDicObjcAplyWrite.form,function(p){});
            this.divDicObjcAplyWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH10.form
            obj = new Layout("default","",0,0,this.divH10.form,function(p){});
            this.divH10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbrWrite.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDicDlbrWrite.form.divKoffH1.form,function(p){});
            this.divDicDlbrWrite.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbrWrite.form.divDicDlbrWrite.form.divDicDlbrWriteFlmno
            obj = new Layout("default","",0,0,this.divDicDlbrWrite.form.divDicDlbrWrite.form.divDicDlbrWriteFlmno.form,function(p){});
            this.divDicDlbrWrite.form.divDicDlbrWrite.form.divDicDlbrWriteFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbrWrite.form.divDicDlbrWrite.form
            obj = new Layout("default","",0,0,this.divDicDlbrWrite.form.divDicDlbrWrite.form,function(p){});
            this.divDicDlbrWrite.form.divDicDlbrWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDicDlbrWrite.form
            obj = new Layout("default","",0,0,this.divDicDlbrWrite.form,function(p){});
            this.divDicDlbrWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH11.form
            obj = new Layout("default","",0,0,this.divH11.form,function(p){});
            this.divH11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divKoffH1.form,function(p){});
            this.divDlbr.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbrList.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbrList.form,function(p){});
            this.divDlbr.form.divDlbrList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbr.form.divExplnFlmno
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbr.form.divExplnFlmno.form,function(p){});
            this.divDlbr.form.divDlbr.form.divExplnFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbr.form.divDlbrFlmno
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbr.form.divDlbrFlmno.form,function(p){});
            this.divDlbr.form.divDlbr.form.divDlbrFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form.divDlbr.form
            obj = new Layout("default","",0,0,this.divDlbr.form.divDlbr.form,function(p){});
            this.divDlbr.form.divDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbr.form
            obj = new Layout("default","",0,0,this.divDlbr.form,function(p){});
            this.divDlbr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH12.form
            obj = new Layout("default","",0,0,this.divH12.form,function(p){});
            this.divH12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAply.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAply.form.divKoffH1.form,function(p){});
            this.divDlbrObjcAply.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno
            obj = new Layout("default","",0,0,this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno.form,function(p){});
            this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAply.form.divObjcAply.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAply.form.divObjcAply.form,function(p){});
            this.divDlbrObjcAply.form.divObjcAply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAply.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAply.form,function(p){});
            this.divDlbrObjcAply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH13.form
            obj = new Layout("default","",0,0,this.divH13.form,function(p){});
            this.divH13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAplyWrite.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAplyWrite.form.divKoffH1.form,function(p){});
            this.divDlbrObjcAplyWrite.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.divObjcAplyWriteFlmno
            obj = new Layout("default","",0,0,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.divObjcAplyWriteFlmno.form,function(p){});
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.divObjcAplyWriteFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form,function(p){});
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrObjcAplyWrite.form
            obj = new Layout("default","",0,0,this.divDlbrObjcAplyWrite.form,function(p){});
            this.divDlbrObjcAplyWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH14.form
            obj = new Layout("default","",0,0,this.divH14.form,function(p){});
            this.divH14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divKoffH1.form
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divKoffH1.form,function(p){});
            this.divDlbrWrite.form.divKoffH1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.form,function(p){});
            this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.form,function(p){});
            this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.form,function(p){});
            this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divDlbrWrite.form.divDlbrWriteFlmno
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divDlbrWrite.form.divDlbrWriteFlmno.form,function(p){});
            this.divDlbrWrite.form.divDlbrWrite.form.divDlbrWriteFlmno.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form.divDlbrWrite.form
            obj = new Layout("default","",0,0,this.divDlbrWrite.form.divDlbrWrite.form,function(p){});
            this.divDlbrWrite.form.divDlbrWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDlbrWrite.form
            obj = new Layout("default","",0,0,this.divDlbrWrite.form,function(p){});
            this.divDlbrWrite.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divH15.form
            obj = new Layout("default","",0,0,this.divH15.form,function(p){});
            this.divH15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComBtn.form
            obj = new Layout("default","",0,0,this.divComBtn.form,function(p){});
            this.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1596,1250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divUsrInfo.form.edtBzentNm","value","dsRegUsrInfo","bzentNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divUsrInfo.form.edtBrno","value","dsRegUsrInfo","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divUsrInfo.form.edtFlnm","value","dsRegUsrInfo","flnm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUsrInfo.form.edtDeptNm","value","dsRegUsrInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUsrInfo.form.edtJbpsNm","value","dsRegUsrInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divUsrInfo.form.edtTel","value","dsRegUsrInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divUsrInfo.form.edtEml","value","dsRegUsrInfo","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMhdlgDtl.form.stsPrpsdNm","text","dsMhdlgDetail","prpsdFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMhdlgDtl.form.edtOrgtNm","value","dsMhdlgDetail","mhdlgOrgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMhdlgDtl.form.edtKrnNm","value","dsMhdlgDetail","mhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMhdlgDtl.form.edtAplyClCd","value","dsMhdlgDetail","aplyClCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMhdlgDtl.form.edtPrcndCd","value","dsMhdlgDetail","regRsnCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divMhdlgDtl.form.edtAgreeClaus","value","dsMhdlgDetail","agreeClausCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divFileDataDtl.form.stsPrpsdNm","text","dsMhdlgDetail","prpsdFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divRvw.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divRvw.form.divEvlRst.form.edtEvlTypeCd","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divRvw.form.divEvlRst.form.edtEvlDt","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divRvw.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divRvw.form.divEvlRst.form.taeEvlOpnn","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divRvw.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divRvwWrite.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divRvwWrite.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divRvwWrite.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divRvwWrite.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divRvwWrite.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divRvwWrite.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divRvwWrite.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divRvwWrite.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divRvwWrite.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divRvwWrite.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divRvwWrite.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divRvwWrite.form.divRvw.form.divEvl00.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divRvwWrite.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divDicDlbr.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divDicDlbr.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divDicDlbr.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divDicDlbr.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divDicDlbr.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divDicDlbr.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divDicDlbr.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divDicDlbr.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divDicDlbr.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divDicDlbr.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divDicDlbr.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divDicDlbr.form.divRvw.form.divEvl00_01.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divDicDlbr.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divDicDlbr.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divDicDlbr.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divDicDlbr.form.divDicDlbr.form.edtDicDlbrDgr","value","dsDicDlbrDtl","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divDicDlbr.form.divDicDlbr.form.edtDicDlbrResult","value","dsDicDlbrDtl","dicDlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divDicDlbr.form.divDicDlbr.form.edtDicDlbrDate","value","dsDicDlbrDtl","dicDlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divDicDlbr.form.divDicDlbr.form.edtDicDlbrOpnn","value","dsDicDlbrDtl","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divDicDlbr.form.divDicDlbr.form.edtDicDlbrFile","value","dsDicDlbrDtl","dicdlbrFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divRvw.form.divEvlRst.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divDicObjcAply.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divDicObjcAply.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divDicObjcAply.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divDicObjcAply.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divDicObjcAply.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divDicObjcAply.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divDicObjcAply.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divDicObjcAply.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divDicObjcAply.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divDicObjcAply.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divDicObjcAply.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divDicObjcAply.form.divRvw.form.divEvl00_00.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divDicObjcAply.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divDicObjcAply.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divDicObjcAply.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divDicObjcAply.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divDicObjcAply.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divDicObjcAplyWrite.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divDicObjcAplyWrite.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divDicObjcAplyWrite.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divDicObjcAplyWrite.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divDicObjcAplyWrite.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divDicObjcAplyWrite.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divDicObjcAplyWrite.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divDicObjcAplyWrite.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divDicObjcAplyWrite.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divDicObjcAplyWrite.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divDicObjcAplyWrite.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divDicObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divDicObjcAplyWrite.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divDicObjcAplyWrite.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divDicObjcAplyWrite.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divDicObjcAplyWrite.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divDicObjcAplyWrite.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divDicDlbrWrite.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divDicDlbrWrite.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divDicDlbrWrite.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divDicDlbrWrite.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divDicDlbrWrite.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","divDicDlbrWrite.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","divDicDlbrWrite.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","divDicDlbrWrite.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","divDicDlbrWrite.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","divDicDlbrWrite.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","divDicDlbrWrite.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","divDicDlbrWrite.form.divRvw.form.divEvl00_03.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","divDicDlbrWrite.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","divDicDlbrWrite.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","divDicDlbrWrite.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","divDicDlbrWrite.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","divDicDlbrWrite.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","divDicDlbrWrite.form.divObjcAplyWrite.form.txa00","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","divDicDlbrWrite.form.divDicDlbrWrite.form.edtDicDlbrWriteDgr","value","dsDicDlbrInfo","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult","value","dsDicDlbrInfo","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn","value","dsDicDlbrInfo","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","divDlbr.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","divDlbr.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","divDlbr.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","divDlbr.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","divDlbr.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","divDlbr.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","divDlbr.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","divDlbr.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","divDlbr.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","divDlbr.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","divDlbr.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","divDlbr.form.divRvw.form.divEvl00_04.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","divDlbr.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","divDlbr.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","divDlbr.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","divDlbr.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","divDlbr.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","divDlbr.form.divObjcAplyWrite.form.txa00","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","divDlbr.form.divDicDlbrWrite.form.edtDicDlbrWriteDgr","value","dsDicDlbrInfo","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item161","divDlbr.form.divDicDlbrWrite.form.cboDicDlbrWriteResult","value","dsDicDlbrInfo","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item162","divDlbr.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn","value","dsDicDlbrInfo","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item163","divDlbr.form.divDlbr.form.edtDlbrWriteDgr","value","dsDlbrDtl","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item164","divDlbrObjcAply.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item165","divDlbrObjcAply.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item166","divDlbrObjcAply.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item167","divDlbrObjcAply.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item168","divDlbrObjcAply.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item169","divDlbrObjcAply.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item170","divDlbrObjcAply.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item171","divDlbrObjcAply.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item172","divDlbrObjcAply.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item173","divDlbrObjcAply.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item174","divDlbrObjcAply.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item175","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item176","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item177","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item178","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item179","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item180","divDlbrObjcAply.form.divRvw.form.divEvl00_00.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item181","divDlbrObjcAply.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item182","divDlbrObjcAply.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item183","divDlbrObjcAply.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item184","divDlbrObjcAply.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item185","divDlbrObjcAply.form.divObjcAply.form.edtObjcAplyDate","value","dsDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item186","divDlbrObjcAplyWrite.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item187","divDlbrObjcAplyWrite.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item188","divDlbrObjcAplyWrite.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item189","divDlbrObjcAplyWrite.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item190","divDlbrObjcAplyWrite.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item191","divDlbrObjcAplyWrite.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item192","divDlbrObjcAplyWrite.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item193","divDlbrObjcAplyWrite.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item194","divDlbrObjcAplyWrite.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item195","divDlbrObjcAplyWrite.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item196","divDlbrObjcAplyWrite.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item197","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item198","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item199","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item200","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item201","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item202","divDlbrObjcAplyWrite.form.divRvw.form.divEvl00_02.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item203","divDlbrObjcAplyWrite.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item204","divDlbrObjcAplyWrite.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item205","divDlbrObjcAplyWrite.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item206","divDlbrObjcAplyWrite.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item207","divDlbrObjcAplyWrite.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item208","divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply","value","dsDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item209","divDlbrWrite.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item210","divDlbrWrite.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item211","divDlbrWrite.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item212","divDlbrWrite.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item213","divDlbrWrite.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item214","divDlbrWrite.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item215","divDlbrWrite.form.divRvw.form.edtRvwDgr","value","dsRvwDtl","rvwDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item216","divDlbrWrite.form.divRvw.form.edtRvwResult","value","dsRvwDtl","rvwTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item217","divDlbrWrite.form.divRvw.form.edtRvwTime","value","dsRvwDtl","rvwDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item218","divDlbrWrite.form.divRvw.form.edtRvwOpinion","value","dsRvwDtl","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item219","divDlbrWrite.form.divRvw.form.edtRvwFile","value","dsrvwDtl","rvwFlmno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item220","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlReg.form.cboEvlTypeCd","value","dsEvlReg","evlTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item221","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlRst.form.edtEvlTypeCd","value","dsEvlRst","evlTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item222","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlRst.form.edtEvlDt","value","dsEvlRst","evlDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item223","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlRst.form.edtEvlOpnn","value","dsEvlRst","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item224","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlRst.form.taeEvlOpnn","value","dsEvlRst","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item225","divDlbrWrite.form.divRvw.form.divEvl00_05.form.divEvlReg.form.txaEvlOpnn","value","dsEvlReg","evlOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item226","divDlbrWrite.form.divRvwWrite.form.edtRvwWriteDgr","value","dsMhdlgDetail","prcsDgr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item227","divDlbrWrite.form.divRvwWrite.form.cboRvwWriteResult","value","dsRvwInfo","rvwTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item228","divDlbrWrite.form.divRvwWrite.form.txaRvwWriteOpinion","value","dsRvwInfo","rvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item229","divDlbrWrite.form.divObjcAply.form.edtObjcAplyOpnn","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item230","divDlbrWrite.form.divObjcAply.form.edtObjcAplyDate","value","dsDicDlbrDtl","objcAplyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item231","divDlbrWrite.form.divObjcAplyWrite.form.txa00","value","dsDicDlbrDtl","objcAplyOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item232","divDlbrWrite.form.divDicDlbrWrite.form.edtDicDlbrWriteDgr","value","dsDicDlbrInfo","dicDlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item233","divDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult","value","dsDicDlbrInfo","dicDlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item234","divDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn","value","dsDicDlbrInfo","dicDlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item235","divDlbrWrite.form.divDlbr.form.edtDlbrWriteDgr","value","dsDlbrInfo","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item236","divDlbrWrite.form.divDlbrWrite.form.edtDlbrWriteDgr","value","dsDlbrInfo","dlbrDgrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item237","divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn","value","dsDlbrInfo","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item238","divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult","value","dsDlbrInfo","dlbrTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item239","divDlbr.form.divDlbr.form.edtDlbrResult","value","dsDlbrDtl","dlbrTypeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item240","divDlbr.form.divDlbr.form.edtDlbrDate","value","dsDlbrDtl","dlbrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item241","divDlbr.form.divDlbr.form.edtDlbrOpnn","value","dsDlbrDtl","dlbrOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item242","divMhdlgDtl.form.edtOldMhdlgNm","value","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item243","divMhdlgDtl.form.stc00","text","dsOldMhdlgInfo","oldMhdlgKrnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item244","divDlbrWrite.form.divDlbrWrite.form.edtMhdlgUnqno","value","dsMhdlgDetail","mhdlgUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item245","divMhdlgDtl.form.edtReddPlusYn","value","dsMhdlgDetail","reddPlusYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item246","divDlbr.form.divDlbr.form.edtMhdlgUnqno","value","dsMhdlgDetail","mhdlgUnqno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item247","divDlbr.form.divDlbr.form.edtDlbrDate00","value","dsMhdlgDetail","vldBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame_Common::comRaonK.xfdl");
            this._addPreloadList("fdl","Frame_Common::comCalDay.xfdl");
        };
        
        // User Script
        this.registerScript("MhdlgAplyS03.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleFormActionS02 Form
        * FILE NAME     : sampleFormActionS02.xfdl
        * DESCRIPTION   : 화면전환샘플 (등록)
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

        this.roleIdMgno = this.fvApp.User.roleIdMgno;

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
        	/*this.grdList03.griduserproperty = "sortfree,!colfix,!rowfix,!filter,!colhide,!find,!copy,!initial";*/
        	this.divDicDlbr.form.divDicDlbrList.form.grdDicDlbrList.griduserproperty = "!sort,!sortfree,!colfix,!colhide,!initial";
        	this.divDlbr.form.divDlbrList.form.grdDlbrList.griduserproperty = "!sort,!sortfree,!colfix,!colhide,!initial";
        }

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
        	trace("[sampleFormActionS02]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	//제안서
        	var objParam1 = { objDs:this.dsMhdlgDetail							// 바인딩 데이터셋
        					,sBindCol:"prpsdFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"prpsdFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divFileDataDtl.form.divPrpsdFlmno.form.fnInitRaonK(this, objParam1);

        	//사업계획서
        	var objParam2 = { objDs:this.dsMhdlgDetail							// 바인딩 데이터셋
        					,sBindCol:"bizPlndFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"bizPlndFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divFileDataDtl.form.divBizPlndFlmno.form.fnInitRaonK(this, objParam2);

        	//기타파일
        	var objParam3 = { objDs:this.dsMhdlgDetail									// 바인딩 데이터셋
        					,sBindCol:"etcDataFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"etcDataFlmno"							// 콜백ID , 필요시 추가
        					,sType:"M"
        					,sMode:"V"
        				   };

        	this.divFileDataDtl.form.divEtcMultiFile.form.fnInitRaonK(this, objParam3);

        	//평가파일 쓰기전용
        	var objParam4 = { objDs:this.dsRvwInfo								// 바인딩 데이터셋
        					,sBindCol:"rvwFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"rvwFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divRvwWrite.form.divRvwWrite.form.divRvwWriteFlmno.form.fnInitRaonK(this, objParam4);

        	//평가파일 읽기전용
        	var objParam5 = { objDs:this.dsRvwDtl								// 바인딩 데이터셋
        					,sBindCol:"rvwFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"rvwFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divRvw.form.divEvlRst.form.divRvwFlmno.form.fnInitRaonK(this, objParam5);

        	//사전심의파일 쓰기전용
        	var objParam6 = { objDs:this.dsDicDlbrInfo									// 바인딩 데이터셋
        					,sBindCol:"dicDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dicDlbrFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divDicDlbrWrite.form.divDicDlbrWrite.form.divDicDlbrWriteFlmno.form.fnInitRaonK(this, objParam6);

        	//사전심의파일 읽기전용
        	var objParam7 = { objDs:this.dsDicDlbrDtl							// 바인딩 데이터셋
        					,sBindCol:"dicDlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dicDlbrFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };
        	this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form.fnInitRaonK(this, objParam7);

        	//사전심의 이의신청파일 쓰기전용
        	var objParam8 = { objDs:this.dsDicDlbrDtl									// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"objcAplyFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.divDicObjcAplyWriteFlmno.form.fnInitRaonK(this, objParam8);

        	//사전심의 이의신청파일 읽기전용
        	var objParam9 = { objDs:this.dsDicDlbrDtl									// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"objcAplyFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form.fnInitRaonK(this, objParam9);

        	//심의파일 쓰기전용
        	var objParam10 = { objDs:this.dsDlbrInfo							// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dlbrFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divDlbrWrite.form.divDlbrWrite.form.divDlbrWriteFlmno.form.fnInitRaonK(this, objParam10);

        	//심의파일 읽기전용
        	var objParam11 = { objDs:this.dsDlbrDtl								// 바인딩 데이터셋
        					,sBindCol:"dlbrFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dlbrFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divDlbr.form.divDlbr.form.divDlbrFlmno.form.fnInitRaonK(this, objParam11);

        	//심의 이의신청파일 쓰기전용
        	var objParam12 = { objDs:this.dsDlbrDtl									// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dlbrObjcAplyFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.divObjcAplyWriteFlmno.form.fnInitRaonK(this, objParam12);

        	//심의 이의신청파일 읽기전용
        	var objParam13 = { objDs:this.dsDlbrDtl									// 바인딩 데이터셋
        					,sBindCol:"objcAplyFlmno"							// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"dlbrObjcAplyFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno.form.fnInitRaonK(this, objParam13);

        	// 설명파일
        	var objParam14 = { objDs:this.dsMhdlgDetail							// 바인딩 데이터셋
        					,sBindCol:"explnFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"explnFlmnoWrite"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"E"
        				   };

        	this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.form.fnInitRaonK(this, objParam14);

        	// 설명파일
        	var objParam15 = { objDs:this.dsMhdlgDetail							// 바인딩 데이터셋
        					,sBindCol:"explnFlmno"								// 바인딩 컬럼
        					,sCallbackFunc:"fnRaonKFileCallback"				// 콜백함수명 , 필요시 추가
        					,sCallbackId:"explnFlmno"							// 콜백ID , 필요시 추가
        					,sType:"S"
        					,sMode:"V"
        				   };

        	this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.form.fnInitRaonK(this, objParam15);

        		// 일달력 초기화 호출 - 심의일자
        	var objParam16 = { objDs:this.dsDlbrInfo							// 바인딩 데이터셋
        					,sBindCol:"dlbrDt"									// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"						// 콜백함수명
        					,sCallbackId:"dlbrDt"								// 콜백ID
        					,bAutoSelect:true									// autoselect여부
        				   };
        	this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.form.fnInitCommonCalendar(this, objParam16);

        	// 일달력 초기화 호출 - 유효시작일자
        	var objParam17 = { objDs:this.dsMhdlgDetail						// 바인딩 데이터셋
        					,sBindCol:"vldBgngYmd"							// 바인딩 컬럼
        					,sCallbackFunc:"fnCalCallback"					// 콜백함수명
        					,sCallbackId:"vldBgngYmd"							// 콜백ID
        					,bAutoSelect:true								// autoselect여부
        				   };
        	this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.form.fnInitCommonCalendar(this, objParam17);

        	//set_url 성공시 원래화면 호출
        	this.getOwnerFrame().form.divWork.form.fnLoadComplete('MhdlgAplyS03');
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
        		// this.gfnShowMessage(this, "관리자에게 문의 바랍니다.");
        		return;
        	}

        	switch (sSvcId)
        	{
        		case "mhdlgInfo" :
        			// 후처리 코드
        			this.fnFormSetting();
        			this.fnReddPlusFormChange();
        			this.fnCallFileStart();
        			break;
        		case "insertRvwDtl" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        			this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));
        			this.fnCallMhdlgInfo();
        			break;
        		case "insertDicDlbrDtl" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        			this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));
        			this.dsDicDlbrInfo.clearData();
        			this.fnCallMhdlgInfo();
        			break;
        		case "updateMhdlgObjcAply" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        			this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));
        			this.fnCallMhdlgInfo();
        			break;
        		case "updateMhdlgDtl" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        			this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));
        			this.fnCallMhdlgInfo();
        			break;
        		case "insertDlbrDtl" :
        			var sMsgCode = ["Alert","I000003"];
        			this.gfnShowMessage(this, sMsgCode);
        			this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'));
        			this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsMhdlgDetail.getColumn(0,'mhdlgDgr'));
        			this.dsDlbrInfo.clearData();
        			this.fnCallMhdlgInfo();
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 공통코드 CallBack 함수(선택)
         */
        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "prpsdFlmno" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
        			break;
        		case "multiFile02" :
        			// 첨부파일에 대한 공통폼 내부의 이벤트 후처리 코드 기술
        			trace("objRtn:"+objRtn);
        			trace("objRtn.sDiv:"+objRtn.sDiv);					// UPLOAD : 업로드 성공후 , DELETE : 삭제처리후
        			trace("objRtn.objDs:"+objRtn.objDs.saveXML());
        			trace("objRtn.objDs.getDeletedRowCount():"+objRtn.objDs.getDeletedRowCount());
        			break;
        		default:
        			break;
        	}
        };

        this.fnCalCallback = function(sCallbackId, objRtn)
        {
        	trace("[fnCalCallback]sCallbackId : "+sCallbackId+" | objRtn : "+ objRtn);

        	switch (sCallbackId)
        	{
        		case "dlbrDt" :
        			// 후처리 코드

        			break;
        		case "vldBgngYmd" :
        			// 후처리 코드

        			break;
        		default:
        			break;
        	}
        };

        //팝업콜백
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		// 협정약정 검색 팝업
        		case "popModalBizP01" :
        		/*■■■■■■■■■■■■■■■■■■■■■■■■ 임시주석 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■*/
        			/*trace("bizMngNo > " + objRtnValue["bizMngNo"]);
        			trace("vldBizDgr > " + objRtnValue["vldBizDgr"]);
        			if(!this.gfnIsNull(objRtnValue["bizMngNo"]))
        			{
        				var rRow = this.dsAgrStiplList.addRow();
        				this.dsAgrStiplList.setColumn(rRow, "bizMngNo", objRtnValue["bizMngNo"]);
        				this.dsAgrStiplList.setColumn(rRow, "vldBizDgr", objRtnValue["vldBizDgr"]);

        				var sMnuId = 'MN04020200';	//  "sampleScript"; // 메뉴 ID		,	MenuUrl : "Develop_Sample::sampleScript"
        				var arrArgSend = {bizMngNo:objRtnValue["bizMngNo"], vldBizDgr:objRtnValue["vldBizDgr"], sts:'DTL'};	// 파라메터
        				this.gfnCallOpenMenu(sMnuId, arrArgSend);
        			}*/
        		/*■■■■■■■■■■■■■■■■■■■■■■■■ 임시주석 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■*/
        			alert("호출화면 생성전 임시주석");
        			break;
        		default:
        			break;
        	}
        };

        this.fnRaonKFileCallback = function(sCallbackId, objRtn)
        {
        	switch (sCallbackId)
        	{
        		case "prpsdFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				trace("################### 사업계획서 Start ###################");
        				var bizPlndFlmno = this.dsMhdlgDetail.getColumn(0, "bizPlndFlmno");
        				// 단위-기타증빙문서 조회
        				trace(">>> bizPlndFlmno : " + bizPlndFlmno);
        				if(this.gfnIsNull(bizPlndFlmno))
        				{
        					var callObj = {};
        					callObj.sDiv = "SEARCH";
        					this.fnRaonKFileCallback("bizPlndFlmno",callObj);
        				}else
        				{
        					this.divFileDataDtl.form.divBizPlndFlmno.form.fnSearchFile(bizPlndFlmno);
        				}
        				trace("################### 사업계획서 END ###################");
        			}
        			break;
        		case "bizPlndFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				trace("################### 기타증빙문서 Start ###################");
        				var etcDataFlmno = this.dsMhdlgDetail.getColumn(0, "etcDataFlmno");
        				// 기타증빙문서 조회
        				trace(">>> etcDataFlmno : " + etcDataFlmno);
        				if(this.gfnIsNull(etcDataFlmno))
        				{
        					var callObj = {};
        					callObj.sDiv = "SEARCH";
        					this.fnRaonKFileCallback("etcDataFlmno",callObj);
        				}else
        				{
        					this.divFileDataDtl.form.divEtcMultiFile.form.fnSearchFile(etcDataFlmno);
        				}
        				trace("################### 기타증빙문서 END ###################");
        			}
        			break;
        		case  "etcDataFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				var dicDlbrHeight = this.divDicDlbr.height;
        				var dicDlbrWriteHeight = this.divDicDlbrWrite.height;
        				if(dicDlbrWriteHeight > 0)
        				{
        					var dicDlbrFlmno = this.dsDicDlbrInfo.getColumn(0,'dicDlbrFlmno');
        					this.divDicDlbrWrite.form.divDicDlbrWrite.form.divDicDlbrWriteFlmno.form.fnSearchFile(dicDlbrFlmno);
        				}

        				if(dicDlbrHeight > 0)
        				{
        					var dicDlbrFlmno = this.dsDicDlbrDtl.getColumn(this.dsDicDlbrDtl.rowposition,'dicDlbrFlmno');
        					if(this.gfnIsNull(dicDlbrFlmno))
        					{
        						var callObj = {};
        						callObj.sDiv = "SEARCH";
        						this.fnRaonKFileCallback("dicDlbrFlmno",callObj);
        						this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form.fnResetUpload();
        					}else
        					{
        						this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form.fnSearchFile(dicDlbrFlmno);
        					}
        				}
        			}
        			break;
        		case "dicDlbrFlmnoWrite" :
        			if(objRtn.sDiv == "DELETE")
        			{
        				this.dsDicDlbrFile.clearData();
        				var nRowCnt = this.dsDicDlbrFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsDicDlbrFile.clearData();
        				var nRowCnt = this.dsDicDlbrFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "dicDlbrFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				var dicObjcAplyWriteHeight = this.divDicObjcAplyWrite.height;
        				var dicObjcAplyHeight = this.divDicObjcAply.height;

        				if(dicObjcAplyWriteHeight > 0)
        				{
        					var objcAplyFlmno = this.dsDicDlbrInfo.getColumn(0,'objcAplyFlmno');
        					this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.divDicObjcAplyWriteFlmno.form.fnSearchFile(objcAplyFlmno);
        				}
        				if(dicObjcAplyHeight > 0)
        				{
        					var objcAplyFlmno = this.dsDicDlbrDtl.getColumn(this.dsDicDlbrDtl.rowposition,'objcAplyFlmno');
        					if(this.gfnIsNull(objcAplyFlmno))
        					{
        						var callObj = {};
        						callObj.sDiv = "SEARCH";
        						this.fnRaonKFileCallback("objcAplyFlmno",callObj);
        						this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form.fnResetUpload();
        					}else
        					{
        						this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form.fnSearchFile(objcAplyFlmno);
        					}

        				}
        			}
        			break;
        		case "objcAplyFlmnoWrite" :
        			if(objRtn.sDiv == "DELETE")
        			{
        				this.dsDicDlbrObjcAplyFile.clearData();
        				var nRowCnt = this.dsDicDlbrObjcAplyFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsDicDlbrObjcAplyFile.clearData();
        				var nRowCnt = this.dsDicDlbrObjcAplyFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "objcAplyFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				var dlbrHegiht = this.divDlbr.height;
        				var dlbrWriteHeight = this.divDlbrWrite.height;

        				if(dlbrWriteHeight > 0)
        				{
        					var dlbrFlmno = this.dsDlbrInfo.getColumn(0,'dlbrFlmno');
        					this.divDlbrWrite.form.divDlbrWrite.form.divDlbrWriteFlmno.form.fnSearchFile(dlbrFlmno);

        					var explnFlmno = this.dsMhdlgDetail.getColumn(0,'explnFlmno');
        					this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.form.fnSearchFile(explnFlmno);
        				}
        				if(dlbrHegiht > 0)
        				{
        					var dlbrFlmno = this.dsDlbrDtl.getColumn(this.dsDlbrDtl.rowposition,'dlbrFlmno');
        					if(this.gfnIsNull(dlbrFlmno))
        					{
        						var callObj = {};
        						callObj.sDiv = "SEARCH";
        						this.fnRaonKFileCallback("dlbrFlmno",callObj);
        						this.divDlbr.form.divDlbr.form.divDlbrFlmno.form.fnResetUpload();
        					}else
        					{
        						this.divDlbr.form.divDlbr.form.divDlbrFlmno.form.fnSearchFile(dlbrFlmno);
        					}
        					var explnFlmno = this.dsMhdlgDetail.getColumn(0,'explnFlmno');
        					if(this.gfnIsNull(explnFlmno))
        					{
        						trace("끝!!!끝!!!끝!!!끝!!!끝!!!끝!!!끝!!!")
        					}else
        					{
        						this.divDlbr.form.divDlbr.form.divExplnFlmno.form.fnSearchFile(explnFlmno);
        					}
        				}
        			}
        			break;
        		case "dlbrFlmnoWrite" :
        			if(objRtn.sDiv == "DELETE")
        			{
        				this.dsDlbrFile.clearData();
        				var nRowCnt = this.dsDlbrFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsDlbrFile.clearData();
        				var nRowCnt = this.dsDlbrFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "dlbrFlmno" :
        			if(objRtn.sDiv == "SEARCH")
        			{
        				var dlbrObjcAplyWriteHeight = this.divDlbrObjcAplyWrite.height;
        				var dlbrObjcAplyHeight = this.divDlbrObjcAply.height;

        				if(dlbrObjcAplyWriteHeight > 0)
        				{
        					var objcAplyFlmno = this.dsDlbrDtl.getColumn(0,'objcAplyFlmno');
        					this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.divObjcAplyWriteFlmno.form.fnSearchFile(objcAplyFlmno);
        				}
        				if(dlbrObjcAplyHeight > 0)
        				{
        					var objcAplyFlmno = this.dsDlbrDtl.getColumn(this.dsDlbrDtl.rowposition,'objcAplyFlmno');
        					if(this.gfnIsNull(objcAplyFlmno))
        					{
        							var callObj = {};
        							callObj.sDiv = "SEARCH";
        							this.fnRaonKFileCallback("dlbrObjcAplyFlmno",callObj);
        					}else
        					{
        						this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno.form.fnSearchFile(objcAplyFlmno);
        					}
        				}
        			}
        			break;
        		case "dlbrObjcAplyFlmnoWrite" :
        			if(objRtn.sDiv == "DELETE")
        			{
        				this.dsDlbrObjcAplyFile.clearData();
        				var nRowCnt = this.dsDlbrObjcAplyFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsDlbrObjcAplyFile.clearData();
        				var nRowCnt = this.dsDlbrObjcAplyFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "dlbrObjcAplyFlmno" :
        			break;
        		case "explnFlmnoWrite" :
        			if(objRtn.sDiv == "DELETE")
        			{
        				this.dsExplnFlmnoFile.clearData();
        				var nRowCnt = this.dsExplnFlmnoFile.copyData(objRtn.objDs);
        			}else if(objRtn.sDiv == "UPLOAD")
        			{
        				this.dsExplnFlmnoFile.clearData();
        				var nRowCnt = this.dsExplnFlmnoFile.copyData(objRtn.objDs);
        			}
        			break;
        		case "explnFlmno" :
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/
        this.fnCallMhdlgInfo = function()
        {
        	trace("등록 수정 전 상세 호출...");
        	var callUrl;
        	if(!this.fnAccessAuth(this.roleIdMgno))
        	{
        		callUrl = "/adm/mhdlg/mhdlgAply/selectMhdlgAplyDetail.irs";
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}


        	// 공통Transaction 호출
         	var objArgs = {};
         	objArgs.svcId 			= "mhdlgInfo";
         	objArgs.url 			= callUrl;
         	objArgs.inds      		= "dsRegInfo=dsRegInfo";
         	objArgs.outds     		= "dsRegUsrInfo=dsRegUsrInfo"
        							+ " dsMhdlgDetail=dsMhdlgDetail"
        							+ " dsOldMhdlgInfo=dsOldMhdlgInfo"
        							+ " dsAgrStiplList=dsAgrStiplList"
        							+ " dsBizFldList=dsBizFldList"
        							+ " dsRegUsrInfo=dsRegUsrInfo"
        							+ " dsDocList=dsDocList"
        							+ " dsRvwDtl=dsRvwDtl"
        							+ " dsDicDlbrDtl=dsDicDlbrDtl"
        							+ " dsDlbrDtl=dsDlbrDtl"
        							+ " dsAccessAuth=dsAccessAuth";
        							;
         	objArgs.args 			= "";
         	objArgs.callback		= "fnCallback";

        	this.gfnTransaction(this, objArgs);

        };



        this.divComBtn_btnEvlSave_onclick = function(obj,e)
        {
        	trace("방법론 검토결과 저장");

        	if(this.gfnIsNull(this.divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult.value)) {
        		this.gfnShowMessage(this, "W000014", this.divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult.tooltiptext, function(svcid, variant) {
        			this.divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult.set_cssclass("error");
        			this.divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divRvwWrite.form.divRvwWrite.form.cboRvwWriteResult.set_cssclass("");
        	}
        	if(this.gfnIsNull(this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.value)) {
        		this.gfnShowMessage(this, "W000014", this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.tooltiptext, function(svcid, variant) {
        			this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.set_cssclass("error");
        			this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.set_cssclass("");
        	}
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(!this.fnAccessAuth(this.roleIdMgno))
        			{
        				var callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyRvwRslt.irs";

        				// 공통Transaction 호출
        				var objArgs = {};
        				objArgs.svcId 			= "insertRvwDtl";
        				objArgs.url 			= callUrl;
        				objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        										+ " dsRvwInfo=dsRvwInfo"
        										+ " dsRegUsrInfo=dsRegUsrInfo"
        										+ " dsRvwFile=dsRvwFile";
        				objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        				objArgs.args 			= "";
        				objArgs.callback		= "fnCallback";

        				this.gfnTransaction(this, objArgs);
        			}else
        			{
        				var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        				this.gfnShowMessage(this, sMsgCode);
        			}
        		}
        	});
        };

        this.divComBtn_btnDicDlbrSave_onclick = function(obj,e)
        {
        	trace("방법론 사전심의결과 저장");

        	if(this.gfnIsNull(this.divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult.value)) {
        		this.gfnShowMessage(this, "W000014", this.divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult.tooltiptext, function(svcid, variant) {
        			this.divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult.set_cssclass("error");
        			this.divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDicDlbrWrite.form.divDicDlbrWrite.form.cboDicDlbrWriteResult.set_cssclass("");
        	}

        	if(this.gfnIsNull(this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.value)) {
        		this.gfnShowMessage(this, "W000014", this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.tooltiptext, function(svcid, variant) {
        			this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.set_cssclass("error");
        			this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.set_cssclass("");
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(!this.fnAccessAuth(this.roleIdMgno))
        			{
        				var callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyDicDlbrRslt.irs";

        				// 공통Transaction 호출
        				var objArgs = {};
        				objArgs.svcId 			= "insertDicDlbrDtl";
        				objArgs.url 			= callUrl;
        				objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        										+ " dsDicDlbrInfo=dsDicDlbrInfo:U"
        										+ " dsRegUsrInfo=dsRegUsrInfo"
        										+ " dsDicDlbrFile=dsDicDlbrFile";
        				objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        				objArgs.args 			= "";
        				objArgs.callback		= "fnCallback";

        				this.gfnTransaction(this, objArgs);
        			}else
        			{
        				var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        				this.gfnShowMessage(this, sMsgCode);
        			}
        		}
        	});
        };

        this.divComBtn_btnOpnnSave_onclick = function(obj,e)
        {
        	trace("방법론 사전심의 이의신청 결과 저장");
        	if(this.gfnIsNull(this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.value)) {
        		this.gfnShowMessage(this, "W000014", this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.tooltiptext, function(svcid, variant) {
        			this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.set_cssclass("error");
        			this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.setFocus();

        		});
        		return false;
        	}else
        	{
        		this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.set_cssclass("");
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(!this.fnAccessAuth(this.roleIdMgno))
        			{
        				var callUrl = "/adm/mhdlg/mhdlgAply/updateMhdlgDicDlbrAplyObjcAply.irs";

        				// 공통Transaction 호출
        				var objArgs = {};
        				objArgs.svcId 			= "updateMhdlgObjcAply";
        				objArgs.url 			= callUrl;
        				objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        										+ " dsDicDlbrDtl=dsDicDlbrDtl:U"
        										+ " dsRegUsrInfo=dsRegUsrInfo"
        										+ " dsDicDlbrObjcAplyFile=dsDicDlbrObjcAplyFile";
        				objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        				objArgs.args 			= "";
        				objArgs.callback		= "fnCallback";

        				this.gfnTransaction(this, objArgs);
        			}else
        			{
        				var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        				this.gfnShowMessage(this, sMsgCode);
        			}
        		}
        	});
        };

        this.fnUpdateCallBack = function(svcId, prcsTypeCd)
        {
        	if(!this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.dsMhdlgDetail.setColumn(0,'prcsTypeCd',prcsTypeCd);
        		var callUrl = "/adm/mhdlg/mhdlgAply/updateMhdlgDtl.irs";
        		// 공통Transaction 호출
        		var objArgs = {};
        		objArgs.svcId 			= svcId;
        		objArgs.url 			= callUrl;
        		objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        								+ " dsRegUsrInfo=dsRegUsrInfo";
        		objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        		objArgs.args 			= "";
        		objArgs.callback		= "fnCallback";

        		this.gfnTransaction(this, objArgs);
        	}else
        	{
        		var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        		this.gfnShowMessage(this, sMsgCode);
        	}
        }

        this.divComBtn_btnDlbrSave_onclick = function(obj,e)
        {
        	trace("방법론 결과 저장");
        	if(this.gfnIsNull(this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.tooltiptext, function(svcid, variant) {
        			this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.set_cssclass("error");
        			this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.set_cssclass("");
        	}

        	if(this.gfnIsNull(this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.tooltiptext, function(svcid, variant) {
        			this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.set_cssclass("error");
        			this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.set_cssclass("");
        	}

        	if(this.gfnIsNull(this.dsDlbrInfo.getColumn(0,'dlbrDt')))
        	{
        		this.gfnShowMessage(this, "W000014", this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.tooltiptext, function(svcid, variant) {
        			this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.set_cssclass("error");
        			this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDlbrWrite.form.divDlbrWrite.form.divDlbrCalDay.set_cssclass("");
        	}

        	if(this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.value == 'MDT0001')
        	{
        		if(this.gfnIsNull(this.dsMhdlgDetail.getColumn(0,'vldBgngYmd')))
        		{
        			this.gfnShowMessage(this, "W000014", this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.tooltiptext, function(svcid, variant) {
        				this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.set_cssclass("error");
        				this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.setFocus();
        			});
        			return false;
        		}else
        		{
        			this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.set_cssclass("");
        		}

        		for(var i = 0 ; i < this.dsBizFldList.getRowCount(); i++)
        		{
        			if(this.gfnIsNull(this.dsBizFldList.getColumn(0,'mhdlgUnqno')))
        			{
        				this.gfnShowMessage(this, "W000014", "고유번호", function(svcid, variant) {
        					this.divMhdlgDtl.form.grdBizFld.set_cssclass("error");
        					this.divMhdlgDtl.form.grdBizFld.setFocus();
        				});
        				return false;
        			}else
        			{
        				this.divMhdlgDtl.form.grdBizFld.set_cssclass("");
        			}
        		}
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			if(!this.fnAccessAuth(this.roleIdMgno))
        			{
        				var callUrl = "/adm/mhdlg/mhdlgAply/insertMhdlgAplyDlbrRslt.irs";

        				// 공통Transaction 호출
        				var objArgs = {};
        				objArgs.svcId 			= "insertDlbrDtl";
        				objArgs.url 			= callUrl;
        				objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        										+ " dsDlbrInfo=dsDlbrInfo:U"
        										+ " dsRegUsrInfo=dsRegUsrInfo"
        										+ " dsBizFldList=dsBizFldList"
        										+ " dsDlbrFile=dsDlbrFile"
        										+ " dsExplnFlmnoFile=dsExplnFlmnoFile";
        				objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        				objArgs.args 			= "";
        				objArgs.callback		= "fnCallback";

        				this.gfnTransaction(this, objArgs);
        			}else
        			{
        				var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        				this.gfnShowMessage(this, sMsgCode);
        			}
        		}
        	});
        };



        this.divComBtn_btnDlbrOpnnSave_onclick = function(obj,e)
        {
        	trace("방법론 심의 이의신청 결과 저장");
        	if(this.gfnIsNull(this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply.value))
        	{
        		this.gfnShowMessage(this, "W000014", this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply.tooltiptext, function(svcid, variant) {
        			this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply.set_cssclass("error");
        			this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply.setFocus();
        		});
        		return false;
        	}else
        	{
        		this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.txaObjcAply.set_cssclass("");
        	}

        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {
        			var callUrl;
        			if(!this.fnAccessAuth(this.roleIdMgno))
        			{
        				callUrl = "/adm/mhdlg/mhdlgAply/updateMhdlgDlbrAplyObjcAply.irs";

        				// 공통Transaction 호출
        				var objArgs = {};
        				objArgs.svcId 			= "updateMhdlgObjcAply";
        				objArgs.url 			= callUrl;
        				objArgs.inds      		= "dsMhdlgDetail=dsMhdlgDetail"
        										+ " dsDlbrDtl=dsDlbrDtl:U"
        										+ " dsRegUsrInfo=dsRegUsrInfo"
        										+ " dsDlbrObjcAplyFile=dsDlbrObjcAplyFile";
        				objArgs.outds     		= "dsMhdlgDetail=dsMhdlgDetail";
        				objArgs.args 			= "";
        				objArgs.callback		= "fnCallback";

        				this.gfnTransaction(this, objArgs);
        			}else
        			{
        				var sMsgCode = ["Alert","W000011"];	// 올바르지 않은 요청입니다.
        				this.gfnShowMessage(this, sMsgCode);
        			}
        		}
        	});
        };

        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        // 업무파일 정보조회
        this.fnCallFileStart = function()
        {
        	trace("################### 제안서 Start ###################");
        	var prpsdFlmno = this.dsMhdlgDetail.getColumn(0, "prpsdFlmno");
        	// 제안서 조회
        	trace(">>> prpsdFlmno : " + prpsdFlmno);
        	if(this.gfnIsNull(prpsdFlmno)) {
        		var callObj = {};
        		callObj.sDiv = "SEARCH";
        		this.fnRaonKFileCallback("bizPlndFlmno",callObj);
        	}else {
        		this.divFileDataDtl.form.divPrpsdFlmno.form.fnSearchFile(prpsdFlmno);
        	}
        	trace("################### 제안서 END ###################");
        };


        /**
         * @desc 등록화면 전환 후 초기작업이 필요한 경우 호출되는 function
         * @param N/A
         * @return N/A
        */
        this.fnChangeDiv = function(objArgs)
        {
        	// TODO
        	trace("[MhdlgAplyS01 방법론 신청 상세 화면]fnChangeDiv =========================");
        	this.scrollTo(0,0);

        	this.fnDsInit();

        	this.dsRegInfo.setColumn(0, "mhdlgMgno", objArgs.mhdlgMgno);
        	this.dsRegInfo.setColumn(0, "mhdlgDgr", objArgs.mhdlgDgr);
        	this.dsRegInfo.setColumn(0, "sts", objArgs.sts);

        	this.fnFileFomrInit();
        	this.fnCallMhdlgInfo();
        };

        //첨부파일영역 초기화
        this.fnFileFomrInit = function()
        {

        }

        //데이터셋 초기화
        this.fnDsInit = function()
        {
        	this.dsAgrStiplList.clearData();
        	this.dsBizPlndFile.clearData();
        	this.dsBizFldList.clearData();
        	this.dsDicDlbrDtl.clearData();
        	this.dsDicDlbrFile.clearData();
        	this.dsDicDlbrInfo.clearData();
        	this.dsDicDlbrObjcAplyFile.clearData();
        	this.dsDlbrDtl.clearData();
        	this.dsDlbrFile.clearData();
        	this.dsDlbrInfo.clearData();
        	this.dsDlbrObjcAplyFile.clearData();
        	this.dsDocList.clearData();
        	this.dsEtcDataFile.clearData();
        	this.dsExplnFlmnoFile.clearData();
        	this.dsMhdlgDetail.clearData();
        	this.dsPrpsdFile.clearData();
        	this.dsRegInfo.clearData();
        	this.dsRegUsrInfo.clearData();
        	this.dsRvwDtl.clearData();
        	this.dsRvwFile.clearData();
        	this.dsRvwInfo.clearData();

        	this.dsAgrStiplList.addRow();
        	this.dsBizFldList.addRow();
        	this.dsDicDlbrDtl.addRow();
        	this.dsDicDlbrInfo.addRow();
        	this.dsDlbrDtl.addRow();
        	this.dsDlbrInfo.addRow();
        	this.dsDocList.addRow();
        	this.dsMhdlgDetail.addRow();
        	this.dsRegInfo.addRow();
        	this.dsRegUsrInfo.addRow();
        	this.dsRvwDtl.addRow();
        	this.dsRvwInfo.addRow();
        }

        //div초기화
        this.fnDivInit = function()
        {
        	this.divRvw.set_height(0);
        	this.divH6.set_height(0);
        	this.divRvwWrite.set_height(0);
        	this.divH7.set_height(0);
        	this.divDicDlbr.set_height(0);
        	this.divH8.set_height(0);
        	this.divDicObjcAply.set_height(0);
        	this.divH9.set_height(0);
        	this.divDicObjcAplyWrite.set_height(0);
        	this.divH10.set_height(0);
        	this.divDicDlbrWrite.set_height(0);
        	this.divH11.set_height(0);
        	this.divDlbr.set_height(0);
        	this.divH12.set_height(0);
        	this.divDlbrWrite.set_height(0);
        	this.divDlbrObjcAply.set_height(0);
        	this.divDlbrObjcAplyWrite.set_height(0);
        	this.divH13.set_height(0);
        	this.divH14.set_height(0);
        	this.divH15.set_height(0);
        	this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'displaytype','normal');
        	this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'edittype','none');
        }
        //버튼 초기화
        this.fnBtnInit = function()
        {
        	this.divComBtn.form.btnEvlSave.set_width(-3);
        	this.divComBtn.form.btnOpnnSave.set_width(-3);
        	this.divComBtn.form.btnDicDlbrSave.set_width(-3);
        	this.divComBtn.form.btnDlbrSave.set_width(-3);
        	this.divComBtn.form.btnModDoc.set_width(-3);
        	this.divComBtn.form.btnReDoc.set_width(-3);
        	this.divComBtn.form.btnAply.set_width(-3);
        	this.divComBtn.form.btnMod.set_width(-3);
        	this.divComBtn.form.btnDlbrAply.set_width(-3);
        	this.divComBtn.form.btnDlbring.set_width(-3);
        	this.divComBtn.form.btnDlbrOpnnSave.set_width(-3);

        	//상단 사업버튼 활성화
        	if(this.fnAccessAuth(this.roleIdMgno))
        	{
        		this.divH2.form.btnTopReg.set_width(0);

        	}else
        	{
        		this.divH2.form.btnTopReg.set_width(100);
        	}
        	this.divH2.form.resetScroll();
        }

        //접근권한 설정
        this.fnAccessAuth = function(roleIdMgno){
        	//사업수행자 권한
        	if(roleIdMgno == "RL00000004" || roleIdMgno == "RL00000005" || roleIdMgno == "RL00000009" || roleIdMgno == "RL00000010")
        	{
        		return true;
        	//관장기관(위탁기관) 권한
        	}else
        	{
        		return false;
        	}
        }

        //작성자권한 설정
        this.fnWriteAuth = function(){
        	//사업수행자 권한
        	var writeAuth = this.dsAccessAuth.getColumn(0,'writeYn');
        	if(!this.gfnIsNull(writeAuth) && writeAuth == 'Y')
        	{
        		return true;
        	}else
        	{
        		return false;
        	}
        }

        //관장기관권한 설정
        this.fnDlbrWriteAuth = function(){
        	var dlbrWriteAuth = this.dsAccessAuth.getColumn(0,'dlbrWriteYn');
        	//관장기관 권한
        	if(!this.gfnIsNull(dlbrWriteAuth) && dlbrWriteAuth =='Y')
        	{
        		return true;
        	}else
        	{
        		return false;
        	}
        }


        //개정이전 방법론명 표출
        this.fnOldMhdlgNmCtrl = function()
        {
        	//개정일 경우 개정방법론명 표출
        	var regRsnCd = this.dsMhdlgDetail.getColumn(0,'regRsnCd');

        	if(regRsnCd == 'MRT0002')
        	{
        		this.divMhdlgDtl.form.staOldMhdlgNm.set_height(44);
        		this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(30);
        		this.divMhdlgDtl.form.staOldMhdlgArea.set_height(44);
        		this.divMhdlgDtl.set_height(533);
        	}else
        	{
        		this.divMhdlgDtl.form.staOldMhdlgNm.set_height(0);
        		this.divMhdlgDtl.form.edtOldMhdlgNm.set_height(0);
        		this.divMhdlgDtl.form.staOldMhdlgArea.set_height(0);
        		this.divMhdlgDtl.set_height(489);
        	}
        	this.divMhdlgDtl.form.resetScroll();
        }

        //심의, 사전심의 입력시 차수 증가
        this.fnDgrIncr = function(flag)
        {
        	if(flag == 'dicDlbr'){
        		//사전심의 차수
        		var dicDlbrDgr = this.dsDicDlbrDtl.getColumn(0,'dicDlbrDgr');
        		if(!this.gfnIsNull(dicDlbrDgr))
        		{
        			dicDlbrDgr = parseInt(dicDlbrDgr) +1;
        			this.dsDicDlbrInfo.setColumn(0,'dicDlbrDgr',dicDlbrDgr);
        			this.dsDicDlbrInfo.setColumn(0,'dicDlbrDgrNm',dicDlbrDgr+'차');
        		}else
        		{
        			this.dsDicDlbrInfo.setColumn(0,'dicDlbrDgr',1);
        			this.dsDicDlbrInfo.setColumn(0,'dicDlbrDgrNm',1+'차');
        		}
        			var dicDlbrSn = this.dsMhdlgDetail.getColumn(0,'dicDlbrSn');
        			if(this.gfnIsNull(dicDlbrSn))
        			{
        				this.dsDicDlbrInfo.setColumn(0,'dicDlbrSn','0');
        			}else
        			{
        				this.dsDicDlbrInfo.setColumn(0,'dicDlbrSn',dicDlbrSn);
        			}
        	}else if(flag =='dlbr')
        	{
        		var dlbrDgr = this.dsDlbrDtl.getColumn(0,'dlbrDgr');
        		if(!this.gfnIsNull(dlbrDgr))
        		{
        			dlbrDgr = parseInt(dlbrDgr) + 1;
        			this.dsDlbrInfo.setColumn(0,'dlbrDgrNm',dlbrDgr+"차");
        			this.dsDlbrInfo.setColumn(0,'dlbrDgr',dlbrDgr);
        		}else
        		{
        			this.dsDlbrInfo.setColumn(0,'dlbrDgrNm',1+"차");
        			this.dsDlbrInfo.setColumn(0,'dlbrDgr',1);
        		}
        		var dlbrSn = this.dsMhdlgDetail.getColumn(0,'dlbrSn');

        		if(this.gfnIsNull(dlbrSn))
        		{
        			this.dsDlbrInfo.setColumn(0,'dlbrSn','0');
        		}else
        		{
        			this.dsDlbrInfo.setColumn(0,'dlbrSn',dlbrSn);
        		}
        	}

        }

        //이의신청결과 표시여부
        this.fnDivObjcAplyCtrl = function(flag, nRow)
        {
        	//nrow 초기화
        	if(this.gfnIsNull(nRow)){nRow = 0};

        	if(flag == 'dicObjcAply')
        	{
        		var isObjcAply = this.dsDicDlbrDtl.getColumn(nRow,'mod');

        		if(this.gfnIsNull(isObjcAply) )
        		{
        			this.divDicObjcAply.set_height(0);
        			this.divH9.set_height(0);

        			if(this.fnAccessAuth(this.roleIdMgno) && this.dsMhdlgDetail.getColumn(0,'prcsTypeCd') == 'MPT0010')
        			{
        				this.divDicObjcAplyWrite.set_height(288);
        			}
        			this.resetScroll();
        		}else
        		{
        			this.divDicObjcAply.set_height(332);
        			this.divH9.set_height(20);

        			if(this.fnAccessAuth(this.roleIdMgno))
        			{
        				this.divDicObjcAplyWrite.set_height(0);
        			}
        			this.resetScroll();

        		}
        		//이의신청파일변경
        		this.divDicObjcAply.form.divObjcAply.form.divDicObjcAplyFlmno.form.fnSearchFile(this.dsDicDlbrDtl.getColumn(nRow,'objcAplyFlmno'));
        	}else if (flag == 'dlbrObjcAply')
        	{
        		var isObjcAply = this.dsDlbrDtl.getColumn(nRow,'mod');

        		if(this.gfnIsNull(isObjcAply))
        		{
        			this.divDlbrObjcAply.set_height(0);
        			this.divH13.set_height(0);

        			if(this.fnAccessAuth(this.roleIdMgno) && this.dsMhdlgDetail.getColumn(0,'prcsTypeCd') == 'MPT0019')
        			{
        				this.divDlbrObjcAplyWrite.set_height(288);
        			}
        			this.resetScroll();
        		}else
        		{
        			this.divDlbrObjcAply.set_height(332);
        			this.divH13.set_height(20);
        			if(this.fnAccessAuth(this.roleIdMgno))
        			{
        				this.divDlbrObjcAplyWrite.set_height(0);
        			}
        			this.resetScroll();
        		}
        		//이의신청파일변경
        		this.divDlbrObjcAply.form.divObjcAply.form.divObjcAplyFlmno.form.fnSearchFile(this.dsDlbrDtl.getColumn(nRow,'objcAplyFlmno'));
        	}
        }

        this.fnSetDivHeight = function(flag){
        	var aplyClCd = this.dsMhdlgDetail.getColumn(0,"aplyClCd");
        	//직권신청은 검토결과를 입력할 수 없다.
        // 	if(flag == 'rvw')
        // 	{
        // 		if(aplyClCd == 'MAC0001') //사전심의 신청일 경우에만 보인다
        // 		{
        // 			this.divRvw.set_height(244);
        // 			this.divH6.set_height(20);
        // 		}
        // 	}else if(flag == 'rvwWrite')
        // 	{
        // 		if(aplyClCd == 'MAC0001')
        // 		{
        // 			this.divRvwWrite.set_height(244);
        // 			this.divH7.set_height(20);
        // 		}
        //
        // 	}else
        	if(flag == 'dicDlbr')
        	{
        		if(aplyClCd == 'MAC0004') // 사전심의 신청 또는 심의신청일 경우에만 보인다.
        		{
        			this.divDicDlbr.set_height(633);
        			this.divH8.set_height(20);

        			var dicDlbrDgr = this.dsDicDlbrDtl.getColumn(0,'dicDlbrDgr');
        			if(!this.gfnIsNull(dicDlbrDgr))
        			{
        				if(dicDlbrDgr == '1')
        				{
        					this.divDicDlbr.form.divDicDlbrList.set_height(0);
        					this.divDicDlbr.form.divDicDlbrList.form.resetScroll();
        					this.divDicDlbr.set_height(373);
        					this.divDicDlbr.form.resetScroll();
        				}else
        				{
        					this.divDicDlbr.form.divDicDlbrList.set_height(260);
        					this.divDicDlbr.form.divDicDlbrList.form.resetScroll();
        					this.divDicDlbr.set_height(633);
        					this.divDicDlbr.form.resetScroll();
        				}
        			}
        		}
        	}else if(flag == 'dicDlbrWrite')
        	{

        		this.divDicDlbrWrite.set_height(376);
        		this.divH11.set_height(20);


        	}else if(flag == 'dicObjcAplyWrite')
        	{
        		this.divDicObjcAplyWrite.set_height(288);
        		this.divH10.set_height(20);
        		this.fnDivObjcAplyCtrl('dicObjcAply');

        	}else if(flag == 'dicObjcAply')
        	{
        		this.fnDivObjcAplyCtrl(flag);
        	}else if(flag == 'dlbr')
        	{
        		this.divDlbr.set_height(616);
        		this.divH12.set_height(20);

        		var dlbrDgr = this.dsDlbrDtl.getColumn(0,'dlbrDgr');
        		if(!this.gfnIsNull(dlbrDgr))
        		{
        			if(dlbrDgr == '1')
        			{
        				this.divDlbr.form.divDlbrList.set_height(0);
        				this.divDlbr.form.divDlbrList.form.resetScroll();
        				this.divDlbr.set_height(373);
        				this.divDlbr.form.resetScroll();
        			}else
        			{
        				this.divDlbr.form.divDlbrList.set_height(260);
        				this.divDlbr.form.divDlbrList.form.resetScroll();
        				this.divDlbr.set_height(626);
        				this.divDlbr.form.resetScroll();
        			}
        		}
        	}else if(flag == 'dlbrWrite')
        	{
        		this.divDlbrWrite.set_height(592);
        		this.divH15.set_height(20);

        	}else if(flag == 'dlbrObjcAply')
        	{
        		this.fnDivObjcAplyCtrl(flag);

        	}else if(flag == 'dlbrObjcAplyWrite')
        	{
        		this.divDlbrObjcAplyWrite.set_height(288);
        		this.divH14.set_height(20);
        	}

        }

        //방법론 상세 화면 셋팅
        this.fnFormSetting = function(){

        	//div height 초기화
        	this.fnDivInit();
        	//btn width 초기화
        	this.fnBtnInit();
        	//개정이전 방법론명 표출
        	//####조회쿼리 수정####
        	this.fnOldMhdlgNmCtrl();

        	var prcsTypeCd = this.dsMhdlgDetail.getColumn(0,'prcsTypeCd');
        	var aplyTypeCd = this.dsMhdlgDetail.getColumn(0,'aplyTypeCd');

        	if(prcsTypeCd == "MPT0001"){ //임시저장의 경우
        		if(this.fnWriteAuth())
        		{
        			this.divComBtn.form.btnAply.set_width(100);
        			this.divComBtn.form.btnAply.set_width(100);
        			this.divComBtn.form.btnMod.set_width(100);
        		}
        	}else if (prcsTypeCd == 'MPT0002')
        	{
        		if(this.fnDlbrWriteAuth())
        		{
        			if(aplyTypeCd == 'ATC0004' || aplyTypeCd == 'ATC0005')
        			{
        				this.divComBtn.form.btnDlbrSave.set_width(100);
        				this.fnDgrIncr('dlbr');
        				this.fnSetDivHeight('dicDlbr');
        				this.fnSetDivHeight('dicObjcAply');
        				this.fnSetDivHeight('dlbrWrite');
        			}else
        			{
        				this.fnDgrIncr('dicDlbr');
        				this.fnSetDivHeight('dicDlbrWrite');
        				this.divComBtn.form.btnDicDlbrSave.set_width(100);
        			}

        		}
        	}else if(prcsTypeCd == "MPT0008") //검토승인
        	{
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnDgrIncr('dicDlbr');
        			this.fnSetDivHeight('dicDlbrWrite');
        			this.divComBtn.form.btnDicDlbrSave.set_width(100);
        		}
        	}else if (prcsTypeCd == "MPT0010") //사전심의반려시
        	{
        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAplyWrite');
        			this.divComBtn.form.btnOpnnSave.set_width(100);
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        		}
        	}else if(prcsTypeCd == 'MPT0011') //이의신청시
        	{
        		if(this.fnWriteAuth())
        		{
        			//this.fnSetDivHeight('rvw');
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			//차수증가
        			this.fnDgrIncr('dicDlbr');
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dicDlbrWrite');
        			this.divComBtn.form.btnDicDlbrSave.set_width(100);

        		}
        	}else if(prcsTypeCd == 'MPT0012') //사전심의승인시
        	{
        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');

        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.divComBtn.form.btnDlbrAply.set_width(100);
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');

        		}
        	}else if(prcsTypeCd == 'MPT0013') //심의대기
        	{

        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.divComBtn.form.btnDlbring.set_width(100);
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        		}
        	}else if(prcsTypeCd == 'MPT0014') //심의중
        	{
        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        		//관장기관
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.divComBtn.form.btnDlbrSave.set_width(100);
        			this.fnDgrIncr('dlbr');
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbrWrite');
        		}
        	}else if(prcsTypeCd == 'MPT0015') //문서보완(심의)
        	{
        		if(this.fnWriteAuth())
        		{
        			this.divComBtn.form.btnModDoc.set_width(100);
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        		//관장기관
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        		}
        	}else if(prcsTypeCd == 'MPT0017') //문서재제출(심의)
        	{

        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.divComBtn.form.btnReDoc.set_width(100);

        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        		}
        	}else if(prcsTypeCd =='MPT0019') //심의반려
        	{
        		if(this.fnWriteAuth())
        		{
        			this.divComBtn.form.btnDlbrOpnnSave.set_width(100);
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.fnSetDivHeight('dlbrObjcAplyWrite');
        		//관장기관
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnDgrIncr('dlbr');
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        		}
        	}else if(prcsTypeCd =='MPT0021')//심의승인
        	{
        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.fnSetDivHeight('dlbrObjcAply');
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.fnSetDivHeight('dlbrObjcAply');
        		}
        	}else if(prcsTypeCd =='MPT0020') //이의신청(심의)
        	{
        		if(this.fnWriteAuth())
        		{
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.fnSetDivHeight('dlbrObjcAply');
        		//관장기관
        		}
        		if(this.fnDlbrWriteAuth())
        		{
        			this.divComBtn.form.btnDlbrSave.set_width(100);
        			this.fnDgrIncr('dlbr');
        			this.fnSetDivHeight('dicDlbr');
        			this.fnSetDivHeight('dicObjcAply');
        			this.fnSetDivHeight('dlbr');
        			this.fnSetDivHeight('dlbrObjcAply');
        			this.fnSetDivHeight('dlbrWrite');
        		}
        	}
        	if(this.dsMhdlgDetail.getColumn(0,'mhdlgDgr') != this.dsMhdlgDetail.getColumn(0,'prcsDgr'))
        	{
        		this.fnBtnInit();
        	}
        	this.resetScroll();

        }



        this.fnReddPlusFormChange = function()
        {
        	var cnt = this.dsBizFldList.getRowCount();
        	var fvIsReddPlus = false;
        	for(var i = 0; i < this.dsBizFldList.getRowCount(); i++)
        	{
        		var bizFldDtlsCdMgno = this.dsBizFldList.getColumn(i,'bizFldDtlsCdMgno');
        		if(bizFldDtlsCdMgno == '14-B')
        		{
        			var fvIsReddPlus = true;
        		}
        	}


        	if(fvIsReddPlus)
        	{
        		this.divMhdlgDtl.form.staReddPlusYn.set_height(44);
        		this.divMhdlgDtl.form.edtReddPlusYn.set_height(30);
        	}else
        	{
        		this.divMhdlgDtl.form.staReddPlusYn.set_height(0);
        		this.divMhdlgDtl.form.edtReddPlusYn.set_height(0);
        	}
        	this.divMhdlgDtl.form.resetScroll();
        	this.resetScroll();
        }

        this.fnUpdtaeBisFldUnqno = function()
        {
        	var unqno = this.dsMhdlgDetail.getColumn(0,'mhdlgUnqno');
        	if(!this.gfnIsNull(unqno))
        	{
        		var cnt = this.dsBizFldList.getRowCount();
        		if(cnt > 0)
        		{
        			for(var n = 0; n < cnt; n++)
        			{
        				var bizFldDtlsCdMgno = this.dsBizFldList.getColumn(n,'bizFldDtlsCdMgno');
        				this.dsBizFldList.setColumn(n,'mhdlgUnqno',unqno+'-'+bizFldDtlsCdMgno.replace('-',''));
        			}
        		}
        	}else
        	{
        		var cnt = this.dsBizFldList.getRowCount();
        		if(cnt > 0)
        		{
        			for(var n = 0; n < cnt; n++)
        			{
        				this.dsBizFldList.setColumn(n,'mhdlgUnqno','');
        			}
        		}
        	}
        }


        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        //상단 사업 버튼 클릭 이벤트
        this.divH2_btnTopReg_onclick = function(obj,e)
        {
        	var sPopupId 	= "popModalBizP01";
        	var sMnuId 		= "MN03040000";
        	var oPosition	= {width:800,height:750};
        	var objArgs		= {mhdlgMgno:this.dsMhdlgDetail.getColumn(0,'mhdlgMgno'), mhdlgGroupMgno:this.dsMhdlgDetail.getColumn(0,'mhdlgGroupMgno')};
        	var oOption		= {callback:"fnPopupCallback",titletext:"방법론별 사업 검색 팝업"};

        	this.gfnShowPopup(this, sPopupId, sMnuId, oPosition, objArgs, oOption);
        };

        //심의 승인일경우에만 설명파일 및 유효시작일자를 입력할 수 있다.
        this.divDlbrWrite_divDlbrWrite_cboDlbrWriteResult_onitemchanged = function(obj,e)
        {
        	//심의 승인일 경우
        	if(e.postvalue == 'MDT0001')
        	{
        		this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.set_height(120); 		//설명파일 업로드영역
        		this.divDlbrWrite.form.divDlbrWrite.form.staExplnFlmno.set_height(132); 		//설명파일 머리글
        		this.divDlbrWrite.form.divDlbrWrite.form.staExplnFlmnoArea.set_height(132);	//설명파일 영역
        		this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.set_height(30);		//유효시작일자 입력영역
        		this.divDlbrWrite.form.divDlbrWrite.form.staVldBgngYmd.set_height(44);		//유효시작일자 머리글
        		this.divDlbrWrite.form.divDlbrWrite.form.staVldBgngYmdArea.set_height(44);	//유효시작일자 영역
        		this.divDlbrWrite.form.divDlbrWrite.form.edtMhdlgUnqno.set_height(30);
        		this.divDlbrWrite.form.divDlbrWrite.form.staMhdlgUnqno.set_height(44);
        		this.divDlbrWrite.form.divDlbrWrite.form.staMhdlgUnqnoArea.set_height(44);
        		this.divDlbrWrite.form.divDlbrWrite.set_height(512)							//스크롤 생성 방지 높이조절
        		this.divDlbrWrite.set_height(592)											// 버튼영역과 붙어있어 높이조절
        		this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'displaytype','editcontrol');
        		this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'edittype','text');
        	}else
        	{
        		this.divDlbrWrite.form.divDlbrWrite.form.divExplnFlmno.set_height(0); 		//설명파일 업로드영역
        		this.divDlbrWrite.form.divDlbrWrite.form.staExplnFlmno.set_height(0); 		//설명파일 머리글
        		this.divDlbrWrite.form.divDlbrWrite.form.staExplnFlmnoArea.set_height(0);	//설명파일 영역
        		this.divDlbrWrite.form.divDlbrWrite.form.divVldbangYmd.set_height(0);		//유효시작일자 입력영역
        		this.divDlbrWrite.form.divDlbrWrite.form.staVldBgngYmd.set_height(0);		//유효시작일자 머리글
        		this.divDlbrWrite.form.divDlbrWrite.form.staVldBgngYmdArea.set_height(0);	//유효시작일자 영역
        		this.divDlbrWrite.form.divDlbrWrite.form.edtMhdlgUnqno.set_height(0);
        		this.divDlbrWrite.form.divDlbrWrite.form.staMhdlgUnqno.set_height(0);
        		this.divDlbrWrite.form.divDlbrWrite.form.staMhdlgUnqnoArea.set_height(0);
        		this.divDlbrWrite.form.divDlbrWrite.set_height(292);						//스크롤 생성 방지 높이조절
        		this.divDlbrWrite.set_height(372);											// 버튼영역과 붙어있어 높이조절
        		this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'displaytype','normal');
        		this.divMhdlgDtl.form.grdBizFld.setCellProperty('body',2,'edittype','none');
        	}
        	this.divDlbrWrite.form.resetScroll();
        	this.resetScroll();
        };

        //사전심의 그리드 클릭 이벤트
        this.divDicDlbr_divDicDlbrList_grdDicDlbrList_oncellclick = function(obj,e)
        {
        	//이의신청결과 컨트롤
        	this.fnDivObjcAplyCtrl('dicObjcAply',e.row);
        	//사전심의파일변경
        	this.divDicDlbr.form.divDicDlbr.form.divDicDlbrFlmno.form.fnSearchFile(this.dsDicDlbrDtl.getColumn(e.row,'dicDlbrFlmno'));

        };

        //심의 그리드 클릭 이벤트
        this.divDlbr_divDlbrList_grdDlbrList_oncellclick = function(obj,e)
        {
        	//이의신청결과 컨트롤
        	this.fnDivObjcAplyCtrl('dlbrObjcAply',e.row);
        	//사전심의파일변경
        	this.divDlbr.form.divDlbr.form.divDlbrFlmno.form.fnSearchFile(this.dsDlbrDtl.getColumn(e.row,'dlbrFlmno'));
        };

        //수정 버튼 클릭 이벤트
        this.divComBtn_btnMhdlgUpdate_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.mhdlgMgno 		= this.dsMhdlgDetail.getColumn(0, "mhdlgMgno");
        	objArgs.mhdlgDgr 		= this.dsMhdlgDetail.getColumn(0, "mhdlgDgr");
        	objArgs.sts				= "MOD";
        	this.getOwnerFrame().form.divWork.form.fnMhdlgAplyAdminRegCall(objArgs);
        };

        //심의요청 버튼 클릭 이벤트
        this.divComBtn_btnDlbrAply_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {

        			var svcId = "updateMhdlgDtl";
        			var prcsTypeCd = "MPT0013";//심의대기 상태로 변경
        			this.fnUpdateCallBack(svcId,prcsTypeCd);
        		}
        	});
        };

        //심의중 버튼 클릭 이벤트
        this.divComBtn_btnDlbring_onclick = function(obj,e)
        {
        	this.gfnShowMessage(this, "C000001", "", function(svcid, variant) {
        		if(variant == "OK") {

        			var svcId = "updateMhdlgDtl";
        			var prcsTypeCd = "MPT0014"; //심의중 상태로 변경
        			this.fnUpdateCallBack(svcId,prcsTypeCd);
        		}
        	});
        };

        //문서보완 버튼 이벤트
        this.divComBtn_btnModDoc_onclick = function(obj,e)
        {
        		var objArgs = {};
        	objArgs.mhdlgMgno 		= this.dsMhdlgDetail.getColumn(0, "mhdlgMgno");
        	objArgs.mhdlgDgr 		= this.dsMhdlgDetail.getColumn(0, "mhdlgDgr");

        	var prcsTypeCd = this.dsMhdlgDetail.getColumn(0,"prcsTypeCd");
        	if(prcsTypeCd == "MPT0003"){
        		objArgs.sts	= "DOCREUP";
        	}else if (prcsTypeCd == "MPT0004"){
        		objArgs.sts	= "DOCRE";
        	}else if (prcsTypeCd == "MPT0015"){
        		objArgs.sts	= "DOCDLBRUP";
        	}else if (prcsTypeCd == "MPT0016"){
        		objArgs.sts	= "DOCDLBR";
        	}
        	this.getOwnerFrame().form.divWork.form.fnMhdlgAplyAdminRegCall(objArgs);
        };

        //문서재제출버튼 이벤트
        this.divComBtn_btnReDoc_onclick = function(obj,e)
        {
        	var objArgs = {};
        	objArgs.mhdlgMgno 		= this.dsMhdlgDetail.getColumn(0, "mhdlgMgno");
        	objArgs.mhdlgDgr 		= this.dsMhdlgDetail.getColumn(0, "mhdlgDgr");

        	var prcsTypeCd = this.dsMhdlgDetail.getColumn(0,"prcsTypeCd");
        	if(prcsTypeCd == "MPT0005") {
        		objArgs.sts	= "REGREUP";	// 첫 문서재제출 - 파일 복제
        	}else if(prcsTypeCd == "MPT0006") {
        		objArgs.sts	= "REGRE";		// 문서재제출 후 임시저장 - 파일 미복제
        	}else if(prcsTypeCd == "MPT0017") {
        		objArgs.sts	= "REGDLBRUP";	// 첫 심의 문서재제출 - 파일 복제
        	}else if(prcsTypeCd == "MPT0018") {
        		objArgs.sts	= "REGDLBR";	// 심의 문서재제출 후 임시저장 - 파일 미복제
        	}
        	this.getOwnerFrame().form.divWork.form.fnMhdlgAplyAdminRegCall(objArgs);
        };

        //문서제출이력 상세보기 버튼 클릭 이벤트
        this.divDocHist_grdDocList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		this.scrollTo(0,0);
        		this.dsRegInfo.setColumn(0, "mhdlgMgno", this.dsDocList.getColumn(e.row, "mhdlgMgno"));
        		this.dsRegInfo.setColumn(0, "mhdlgDgr", this.dsDocList.getColumn(e.row, "mhdlgDgr"));



        		this.fnCallMhdlgInfo();
        	}
        };


        /**
         * @description 목록 클릭시 목록화면으로 전환
        */
        this.divComBtn_btnList_onclick = function(obj,e)
        {

        	// 화면전환
        	this.getOwnerFrame().form.divWork.form.divList.set_visible(true);
        	this.getOwnerFrame().form.divWork.form.divDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divReg.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divAdminDetail.set_visible(false);
        	this.getOwnerFrame().form.divWork.form.divAdminReg.set_visible(false);

        	// 목록화면 전환 후 초기작업이 필요한 경우 function 호출
        	this.getOwnerFrame().form.divWork.form.fnChangeDiv();
        };

        this.divMhdlgInfoArea_edtMhdlgUnqno_onchanged = function(obj,e)
        {
        	this.fnUpdtaeBisFldUnqno();
        };



        this.divH1_divH1_btnDocList_onclick = function(obj,e)
        {
        	var divDocHistHeight = this.divDocHist.height
        	if(divDocHistHeight > 0)
        	{
        		this.divDocHist.set_height(0);
        	}else
        	{
        		this.divDocHist.set_height(173);
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divH1.form.btnDocList.addEventHandler("onclick",this.divH1_divH1_btnDocList_onclick,this);
            this.divDocHist.form.grdDocList.addEventHandler("oncellclick",this.divDocHist_grdDocList_oncellclick,this);
            this.divH2.form.btnTopList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divH2.form.btnTopReg.addEventHandler("onclick",this.divH2_btnTopReg_onclick,this);
            this.divMhdlgDtl.form.staAplyClCdNm.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divMhdlgDtl.form.edtPrcndCd.addEventHandler("onchanged",this.divMhdlgDtl_edtPrcndCd_onchanged,this);
            this.divMhdlgDtl.form.staOldMhdlgNm.addEventHandler("onclick",this.divMhdlgDtl_staOldMhdlgNm_onclick,this);
            this.divMhdlgDtl.form.edtOldMhdlgNm.addEventHandler("onchanged",this.divMhdlgDtl_edtPrcndCd_onchanged,this);
            this.divMhdlgDtl.form.staAgreeClausNm.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_01_onclick,this);
            this.divMhdlgDtl.form.staAgreeStipl.addEventHandler("onclick",this.div01_00_00_00_sta08_00_00_00_00_00_onclick,this);
            this.divMhdlgDtl.form.staReddPlusYn.addEventHandler("onclick",this.div01_00_00_00_sta02_onclick,this);
            this.divFileDataDtl.form.staPrpsd.addEventHandler("onclick",this.div01_00_00_00_div01_00_00_01_01_staBizPlnd_onclick,this);
            this.divFileDataDtl.form.staEtcData.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRvw.form.divE1.form.staEvlRstTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRvw.form.divEvlRst.form.staEvlFlmno.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divRvwWrite.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divRvwWrite.form.divRvwWrite.form.txaRvwWriteOpinion.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divRvwWrite.form.divRvwWrite.form.sta08_00_00.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDicDlbr.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicDlbr.form.divDicDlbrList.form.grdDicDlbrList.addEventHandler("oncellclick",this.divDicDlbr_divDicDlbrList_grdDicDlbrList_oncellclick,this);
            this.divDicDlbr.form.divDicDlbr.form.staDicDlbrFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDicDlbr.form.divDicDlbr.form.edtDicDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divDicObjcAply.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicObjcAply.form.divObjcAply.form.edtObjcAplyOpnn.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divDicObjcAplyWrite.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.staObjcAplyWriteFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDicObjcAplyWrite.form.divObjcAplyWrite.form.txaDicObjcAply.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDicDlbrWrite.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDicDlbrWrite.form.divDicDlbrWrite.form.staDicDlbrWriteFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDicDlbrWrite.form.divDicDlbrWrite.form.txaDicDlbrWriteOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbr.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbr.form.divDlbrList.form.grdDlbrList.addEventHandler("oncellclick",this.divDlbr_divDlbrList_grdDlbrList_oncellclick,this);
            this.divDlbr.form.divDlbr.form.edtMhdlgUnqno.addEventHandler("onchanged",this.divMhdlgInfoArea_edtMhdlgUnqno_onchanged,this);
            this.divDlbr.form.divDlbr.form.edtDlbrOpnn.addEventHandler("onchanged",this.div01_00_00_edt02_01_01_onchanged,this);
            this.divDlbr.form.divDlbr.form.staDlbrFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbrObjcAply.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbrObjcAplyWrite.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbrObjcAplyWrite.form.divObjcAplyWrite.form.staObjcAplyWriteFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divDlbrWrite.form.divKoffH1.form.staKoffTit.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divDlbrWrite.form.divDlbrWrite.form.sta08_01.addEventHandler("onclick",this.div01_00_00_02_00_03_00_00_sta08_01_onclick,this);
            this.divDlbrWrite.form.divDlbrWrite.form.cboDlbrWriteResult.addEventHandler("onitemchanged",this.divDlbrWrite_divDlbrWrite_cboDlbrWriteResult_onitemchanged,this);
            this.divDlbrWrite.form.divDlbrWrite.form.edtMhdlgUnqno.addEventHandler("onchanged",this.divMhdlgInfoArea_edtMhdlgUnqno_onchanged,this);
            this.divDlbrWrite.form.divDlbrWrite.form.txaDlbrWriteOpnn.addEventHandler("onchanged",this.div01_00_00_02_00_txa00_onchanged,this);
            this.divDlbrWrite.form.divDlbrWrite.form.staDlbrWriteFile.addEventHandler("onclick",this.div01_00_sta08_00_00_onclick,this);
            this.divComBtn.addEventHandler("onclick",this.divComBtn_onclick,this);
            this.divComBtn.form.btnList.addEventHandler("onclick",this.divComBtn_btnList_onclick,this);
            this.divComBtn.form.btnEvlSave.addEventHandler("onclick",this.divComBtn_btnEvlSave_onclick,this);
            this.divComBtn.form.btnOpnnSave.addEventHandler("onclick",this.divComBtn_btnOpnnSave_onclick,this);
            this.divComBtn.form.btnDicDlbrSave.addEventHandler("onclick",this.divComBtn_btnDicDlbrSave_onclick,this);
            this.divComBtn.form.btnDlbrSave.addEventHandler("onclick",this.divComBtn_btnDlbrSave_onclick,this);
            this.divComBtn.form.btnModDoc.addEventHandler("onclick",this.divComBtn_btnModDoc_onclick,this);
            this.divComBtn.form.btnReDoc.addEventHandler("onclick",this.divComBtn_btnReDoc_onclick,this);
            this.divComBtn.form.btnMod.addEventHandler("onclick",this.divComBtn_btnMhdlgUpdate_onclick,this);
            this.divComBtn.form.btnDlbrAply.addEventHandler("onclick",this.divComBtn_btnDlbrAply_onclick,this);
            this.divComBtn.form.btnDlbring.addEventHandler("onclick",this.divComBtn_btnDlbring_onclick,this);
            this.divComBtn.form.btnDlbrOpnnSave.addEventHandler("onclick",this.divComBtn_btnDlbrOpnnSave_onclick,this);
            this.dsBizFldList.addEventHandler("onvaluechanged",this.dsBizFldList_onvaluechanged,this);
        };
        this.loadIncludeScript("MhdlgAplyS03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
