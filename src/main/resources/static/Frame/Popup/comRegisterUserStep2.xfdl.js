(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comRegisterUserStep2");
            this.set_titletext("사용자등록 > 약관동의");
            this.set_cssclass("frm_MEMBER_Bg");
            this.set_dragscrolltype("both");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1566","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divHeader","0","0",null,"80","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divStep1","90","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_Step01_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("1");
            obj.set_text("Step1");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("2");
            obj.set_text("회원가입유형");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new ImageViewer("Img01",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep1.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep1.addChild(obj.name, obj);

            obj = new Div("divStep2","467","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step02_on.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("1");
            obj.set_text("Step2");
            obj.set_cssclass("sta_MB_StepOn");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("2");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_MB_StepOnTxt");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new ImageViewer("Img02",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep2.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_on.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep2.addChild(obj.name, obj);

            obj = new Div("divStep3","844","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step03_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("1");
            obj.set_text("Step3");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("2");
            obj.set_text("개인정보입력");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new ImageViewer("Img03",null,"14","12","22","0",null,null,null,null,null,this.divMain.form.divHeader.form.divStep3.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_image("url(\'theme::IRS/images/ico_MEMBER_StepArr_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep3.addChild(obj.name, obj);

            obj = new Div("divStep4","1221","15","275","50",null,null,null,null,null,null,this.divMain.form.divHeader.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divMain.form.divHeader.addChild(obj.name, obj);

            obj = new ImageViewer("imgStep","1","0","50","50",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_image("url(\'theme://images/ico_MEMBER_Step04_off.png\')");
            obj.set_text("");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStep","63","0","120","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("1");
            obj.set_text("Step4");
            obj.set_cssclass("sta_MB_StepOff");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Static("stcStepTitle","63","20","147","24",null,null,null,null,null,null,this.divMain.form.divHeader.form.divStep4.form);
            obj.set_taborder("2");
            obj.set_text("사용자등록완료");
            obj.set_cssclass("sta_MB_StepOffTxt");
            this.divMain.form.divHeader.form.divStep4.addChild(obj.name, obj);

            obj = new Div("divContent","0",null,null,"580","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MEMBER_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree1",null,"230","202","22","36",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("1");
            obj.set_text("동의합니다.");
            obj.set_value("false");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_cursor("pointer");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_tooltiptext("보안서약서 동의");
            obj.set_accessibilitylabel("보안서약서 동의");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnSave","707",null,"75","32",null,"25",null,null,null,null,this.divContent.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            obj.set_tooltiptext("확인");
            obj.set_accessibilitylabel("확인");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3",null,"75","32",null,"25",null,null,null,null,this.divContent.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_tooltiptext("취소");
            obj.set_accessibilitylabel("취소");
            this.divContent.addChild(obj.name, obj);

            obj = new Div("divTerms1","30","30","1506","190",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_MEMBER_agreeBox");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stc00","633","20","240","25",null,null,null,null,null,null,this.divContent.form.divTerms1.form);
            obj.set_taborder("0");
            obj.set_text("보안서약서");
            obj.set_cssclass("sta_MB_agreeTxt01");
            obj.set_textAlign("center");
            this.divContent.form.divTerms1.addChild(obj.name, obj);

            obj = new Static("stc00_00","30","65","1444","336",null,null,null,null,null,null,this.divContent.form.divTerms1.form);
            obj.set_taborder("1");
            obj.set_text("본인은 국가 온실가스 종합관리시스템(이하 시스템)을 통하여 수집된 정보를 취급하는 업무를 수행함에 있어서 기후위기 대응을 위한 「탄소중립·녹색성장 기본법」, 공공부문 온실가스 목표관리 운영 등에 관한 지침 등 기타 제법령을 위반하지 않을 것이며 아래의 사항을 준수할 것을 서약합니다.\r\n\r\n1. 본인은 사전 허가나 동의 없이 본 시스템을 통하여 취득한 정보나 당 시스템에서 관리하고 있는 정보를 무단으로 이용하지 않겠습니다.\r\n2. 본인은 업무상 취득한 정보를 외부로 유출하거나 배포하지 않겠습니다.\r\n3. 본인은 온실가스 관련정보를 취급하는 직원에게 자체적으로 정보보호 서약서를 제출 받고, 고객정보관련 데이터에 대한 인계, 폐기 관리대장을 작성 및 관리 하겠습니다.\r\n4. 본인은 관계법령 및 본 서약서에 위배되는 행위(정보의 무단 사용, 복제, 유출 등)가 있다는 합리적인 추정이 있을 시에는 귀 기관의 사실 확인 및 조사 요청이나 관련자료 제공요청 등에 이의 없이 따르도록 하겠습니다.\r\n5. 본인은 본 시스템을 통해 제공된 정보관련 데이터에 대한 관리책임은 모두 본인에게 있음을 인지하며, 본인의 귀책사유로 인한 정보 유출 기타 정보 관련 사고로 인하여 귀 기관, 정보제공 고객, 기타 제3자에게 피해가 발생한 경우 일체의 배상을 책임지겠습니다.\r\n6. 본인은 정보의 유출이 범죄 행위임을 인지하여 모든 업무에 있어 정보보안에 만전을 기하도록 하겠습니다.\r\n\r\n본인은 상기 사항의 내용을 충분히 숙지하고 동의하며 이를 위반시에는 관련법규에 의거 민ㆍ형사상의 책임을 감수할 것을 서약합니다.\r\n");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms1.addChild(obj.name, obj);

            obj = new Div("divTerms2","30","272","1506","190",null,null,null,null,null,null,this.divContent.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_MEMBER_agreeBox");
            this.divContent.addChild(obj.name, obj);

            obj = new Static("stc00","30","20",null,"25","30",null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("0");
            obj.set_text("상쇄등록부시스템 사용자(회원) 등록 및 상쇄등록부 등록·공개를 위한 개인정보 수집·이용 동의서");
            obj.set_cssclass("sta_MB_agreeTxt03");
            obj.set_textAlign("left");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00","30","60","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("1");
            obj.set_text("상쇄등록부시스템 사용자(회원) 등록 및 상쇄등록부 등록·공개를 위하여 아래의 개인정보의 수집·이용 및 공개에 대한 내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_00","30","99","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("2");
            obj.set_text("1.개인정보의 수집·이용 목적");
            obj.set_cssclass("sta_MB_agreeTxt03");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01","30","133","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("3");
            obj.set_text("◾ 온실가스종합정보센터(이하 센터)는 다음의 목적을 위하여 개인정보를 처리합니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00","30","162","1444","92",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("4");
            obj.set_text("- 배출권 거래제 및 상쇄등록부 관리·운영을 위한 외부사업 온실가스 감축량 등 자료 접수 및 관리(온실가스 배출권의 할당 및 거래에 관한 법률 제11조, 제29조, 제30조, 제31조 및 시행령 제9조, 제38조, 제39조, 제40조, 제41조)\r\n- 상쇄등록부의 공개(온실가스 배출권의 할당 및 거래에 관한 법률 시행령 제50조)\r\n※ 상쇄등록부의 비공개를 원하는 항목이 있을 경우 외부사업 타당성 평가 및 감축량 인증에 관한 지침 제52조에 따라 비공개 신청이 가능함을 알려드립니다.\r\n- 목표관리제 및 배출권거래제의 효율적 운영을 위한 사용자 편의기능 추가 시 개인정보 활용");
            obj.set_cssclass("sta_MB_agreeTxt04");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_01","30","259","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("5");
            obj.set_text("◾ 처리하고 있는 개인정보는 정해진 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경될 경우 사전에 이용자에게 알리고 동의를 받을 예정입니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00","30","298","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("6");
            obj.set_text("2. 수집하는 개인정보의 항목");
            obj.set_cssclass("sta_MB_agreeTxt03");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_02","30","332","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("7");
            obj.set_text("◾ 회원관리 및 민원처리를 위하여 처리하는 개인정보 항목은 아래와 같습니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Div("div02","30","366","1444","87","30",null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("8");
            obj.set_formscrollbartype("none none");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("sta06","0","43",null,"44","0",null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"44","0",null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_00","157","7",null,"30","7",null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_value("인증서정보, 아이디, 회원이름, 비밀번호, 전화번호, 핸드폰번호, 이메일주소");
            obj.set_text("인증서정보, 아이디, 회원이름, 비밀번호, 전화번호, 핸드폰번호, 이메일주소");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","150","44",null,null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("필수항목");
            obj.set_cssclass("sta_WF_Label");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta_Label_Top","0","0",null,"1","0",null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label_Top");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Edit("edt02_01","157","50",null,"30","10",null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("6");
            obj.set_value("직위, 부서, 팩스번호");
            obj.set_cssclass("output");
            obj.set_readonly("true");
            obj.set_text("직위, 부서, 팩스번호");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Static("sta08","0","43","150","44",null,null,null,null,null,null,this.divContent.form.divTerms2.form.div02.form);
            obj.set_taborder("3");
            obj.set_text("선택항목");
            obj.set_cssclass("sta_WF_Label");
            this.divContent.form.divTerms2.form.div02.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_02_00","30","463","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("9");
            obj.set_text("◾ 여러분이 상쇄등록부시스템을 이용할 경우 다음의 정보는 자동적으로 수집·저장됩니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00_00","30","492","1444","23",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("10");
            obj.set_text("- 이용자의 IP 주소, 방문일시");
            obj.set_cssclass("sta_MB_agreeTxt04");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00_00","30","530","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("11");
            obj.set_text("3. 수집 및 공개하는 개인정보의 항목");
            obj.set_cssclass("sta_MB_agreeTxt03");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_03","30","564","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("12");
            obj.set_text("◾ 상쇄등록부 중 외부사업 계획서 및 검증보고서의 관리·운영을 위하여 처리하는 개인정보 항목은 아래와 같으며, 외부사업 계획서 및 검증보고서가 원문공개 됨에 따라 제출된 서식 내 기재된 개인정보가 공개됩니다.");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00_01","30","593","1444","69",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("13");
            obj.set_text("- 필수항목 : 외부사업 계획서 및 검증보고서 상의 담당자 이름, 부서, 직위, 전화번호, 팩스번호, 이메일주소\r\n※ 회원가입시 수집된 개인정보는 공개대상이 아니나, 시스템 사용자(회원) 정보와 외부사업 계획서 및 검증보고서 상의 담당자 정보와의 동일·상이 여부와는 상관없이 상쇄등록부에 등록된 외부사업 계획서 및 검증보고서가 원문공개 됨에 유의하시기 바랍니다.");
            obj.set_cssclass("sta_MB_agreeTxt04");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00_00_00","30","677","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("14");
            obj.set_text("4. 개인정보의 처리 및 보유기간");
            obj.set_cssclass("sta_MB_agreeTxt03");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_03_00","30","711","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("15");
            obj.set_text("◾ 센터에서 처리하는 이용자의 개인정보는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 기간 내에서 개인정보를 처리·보유 합니다.\r\n가. 회원관리 및 민원처리");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_00_01_00","30","740","1444","69",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("16");
            obj.set_text("가. 회원관리 및 민원처리\r\n- 수집근거 : 개인정보보호법 제15조제1항 “정보주체의 동의를 받은 경우”\r\n- 보유기간 : 회원 탈퇴 의사 표시 후 5일 까지");
            obj.set_cssclass("sta_MB_agreeTxt04");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_00_00_00_00_00","30","824","1444","24",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("17");
            obj.set_text("5. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용");
            obj.set_cssclass("sta_MB_agreeTxt03");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new Static("stc00_00_01_03_00_00","30","858","1444","72",null,null,null,null,null,null,this.divContent.form.divTerms2.form);
            obj.set_taborder("18");
            obj.set_text("◾ 이용자는 상쇄등록부시스템에서 수집·이용 및 공개하는 개인정보에 대해 동의를 거부할 권리가 있으며 동의 거부 시에는 회원가입, 사이트 이용 서비스가 제한됩니다.\r\n위와 같이 개인정보를 수집·이용 및 공개하는데 동의하십니까?\r\n");
            obj.set_cssclass("sta_MB_agreeTxt02");
            this.divContent.form.divTerms2.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree2",null,"472","202","22","37",null,null,null,null,null,this.divContent.form);
            obj.set_taborder("3");
            obj.set_text("동의합니다.");
            obj.set_value("false");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_cursor("pointer");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_tooltiptext("개인정보 수집·이용 동의");
            obj.set_accessibilitylabel("개인정보 수집·이용 동의");
            this.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divHeader.form.divStep1.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep1.form,function(p){});
            this.divMain.form.divHeader.form.divStep1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep2.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep2.form,function(p){});
            this.divMain.form.divHeader.form.divStep2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep3.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep3.form,function(p){});
            this.divMain.form.divHeader.form.divStep3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form.divStep4.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form.divStep4.form,function(p){});
            this.divMain.form.divHeader.form.divStep4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divHeader.form
            obj = new Layout("default","",0,0,this.divMain.form.divHeader.form,function(p){});
            this.divMain.form.divHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTerms1.form
            obj = new Layout("default","",0,0,this.divContent.form.divTerms1.form,function(p){});
            this.divContent.form.divTerms1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTerms2.form.div02.form
            obj = new Layout("default","",0,0,this.divContent.form.divTerms2.form.div02.form,function(p){});
            this.divContent.form.divTerms2.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form.divTerms2.form
            obj = new Layout("default","",0,0,this.divContent.form.divTerms2.form,function(p){});
            this.divContent.form.divTerms2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1566,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comRegisterUserStep2.xfdl","");
        this.registerScript("comRegisterUserStep2.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Frame_Popup
        * BUSINESS      : comRegisterUserStep1 Form
        * FILE NAME     : comRegisterUserStep1.xfdl
        * DESCRIPTION   : 사용자등록 > 회원유형선택
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.11.01    Justin	     최초생성
        ***********************************************************************************/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/
        this.executeIncludeScript(""); /*include ""*/;

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
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	switch (sPopupId)
        	{
        		case "msgChkAgree1" :
        			this.divContent.form.chkAgree1.setFocus();
        			break;
        		case "msgChkAgree2" :
        			this.divContent.form.chkAgree2.setFocus();
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
        /**
         * @description 동의 버튼 클릭
        */
        this.divContent_btnSave_onclick = function(obj,e)
        {
        	if(this.divContent.form.chkAgree1.value == "N") {
        		this.gfnShowMessage(this, ["Alert","보안서약서에 동의하셔야 합니다."], "", "fnMsgCallback", "msgChkAgree1");
        		return false;
        	}

        	if(this.divContent.form.chkAgree2.value == "N") {
        		this.gfnShowMessage(this, ["Alert","개인정보 수집·이용 동의서에 동의하셔야 합니다."], "", "fnMsgCallback", "msgChkAgree2");
        		return false;
        	}

        	this.getOwnerFrame().form.dsUser.setColumn(0, "agreeYn1", this.divContent.form.chkAgree1.value);
        	this.getOwnerFrame().form.dsUser.setColumn(0, "agreeYn2", this.divContent.form.chkAgree2.value);

        	/*
        	* 값 확인용
        		var userType = this.getOwnerFrame().form.dsUser.getColumn(0, "userType");
        		var agreeYn1 = this.getOwnerFrame().form.dsUser.getColumn(0, "agreeYn1");
        		var agreeYn2 = this.getOwnerFrame().form.dsUser.getColumn(0, "agreeYn2");
        		trace("[userType]["+userType+"][agreeYn1]["+agreeYn1+"][agreeYn2]["+agreeYn2+"]");
        	*/

        	this.getOwnerFrame().form.fnGoStep(3);			// STEP3 화면 보여주기
        };

        /**
         * @description 취소 버튼 클릭
        */
        this.divContent_btnCancel_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnClose();		// 메인화면으로 이동
        };

        this.divContent_divTerms2_stc00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divContent.form.chkAgree1.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
            this.divContent.form.btnSave.addEventHandler("onclick",this.divContent_btnSave_onclick,this);
            this.divContent.form.btnCancel.addEventHandler("onclick",this.divContent_btnCancel_onclick,this);
            this.divContent.form.divTerms1.form.stc00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00.addEventHandler("onclick",this.divContent_divTerms2_stc00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_01.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_02.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.div02.form.edt02_00.addEventHandler("onchanged",this.Div01_Div01_00_div00_00_div02_edt02_00_onchanged,this);
            this.divContent.form.divTerms2.form.stc00_00_01_02_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_00_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_03.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_00_01.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_00_00_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_03_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_00_01_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_00_00_00_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.divTerms2.form.stc00_00_01_03_00_00.addEventHandler("onclick",this.Div01_Div01_00_div00_stc00_00_onclick,this);
            this.divContent.form.chkAgree2.addEventHandler("onclick",this.Div01_CheckBox03_onclick,this);
        };
        this.loadIncludeScript("comRegisterUserStep2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
