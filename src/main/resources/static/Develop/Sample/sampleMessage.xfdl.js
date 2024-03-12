(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMessage");
            this.set_titletext("메세지처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPopup", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"string\" size=\"32\"/><Column id=\"TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">User01</Col><Col id=\"TYPE_NM\">사용자01</Col><Col id=\"COL_CD\">사용자ID</Col><Col id=\"COL_NM\">사용자</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">User01</Col><Col id=\"TYPE_NM\">사용자01</Col><Col id=\"COL_CD\">사용자ID</Col><Col id=\"COL_NM\">사용자</Col></Row><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">Str01</Col><Col id=\"TYPE_NM\">점포코드01</Col><Col id=\"COL_CD\">점포코드</Col><Col id=\"COL_NM\">점포명</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">Str01</Col><Col id=\"TYPE_NM\">점포코드01</Col><Col id=\"COL_CD\">점포코드</Col><Col id=\"COL_NM\">점포명</Col></Row><Row><Col id=\"KIND\">S</Col><Col id=\"TYPE_CD\">Gds01</Col><Col id=\"TYPE_NM\">상품코드01</Col><Col id=\"COL_CD\">상품코드</Col><Col id=\"COL_NM\">상품명</Col></Row><Row><Col id=\"KIND\">M</Col><Col id=\"TYPE_CD\">Gds01</Col><Col id=\"TYPE_NM\">상품코드01</Col><Col id=\"COL_CD\">상품코드</Col><Col id=\"COL_NM\">상품명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj.set_keystring("S:msgCd");
            obj._setContents("<ColumnInfo><Column id=\"errMsgCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgClCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgNtnCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgNm\" type=\"STRING\" size=\"32\"/><Column id=\"inptCnt\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"errMsgCd\">C000001</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000002</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">삭제 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000003</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">일괄다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000004</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">엑셀을 다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000005</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그아웃 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000006</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">일괄등록 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000007</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">임시비밀번호를 생성 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000008</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 실행 하겠습니까?</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000009</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">E000001</Col><Col id=\"errMsgClCd\">EMC0004</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">처리중 오류가 발생하였습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">E000002</Col><Col id=\"errMsgClCd\">EMC0004</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">처리중 인증오류가 발생하였습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000001</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">조회 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000002</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">조회 결과가 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000003</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000004</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">삭제 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000005</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">수정 되었습니다. </Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000006</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">등록 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000007</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">요청한 페이지를 찾을 수 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000008</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">선택된 항목이 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000009</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그아웃 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000010</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그인이 필요합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000011</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 조회 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000012</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 생성 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000013</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 등록 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000014</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">사용 가능한 {0}입니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000001</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">선택된 항목이 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000002</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">중복체크 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000003</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장할 데이터가 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000004</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">시작일은 종료일보다 이전 시점이어야 합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000005</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">종료일은 시작일보다 이후 시점이어야 합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000006</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">수량을 입력 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000007</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">이용 약관에 동의 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000008</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">올바르지 않은 인증정보 입니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000009</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">인증정보가 만료 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000010</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000011</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">올바르지 않은 요청입니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000012</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">파일업로드 최대 허용 크기를 초과하였습니다</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000013</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 선택 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000014</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 입력 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000015</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 삭제가 불가합니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000016</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 수정이 불가합니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000017</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 올바르게 입력하기 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000018</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 파일을 업로드 하시기 바랍니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000019</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 중복되어 입력할 수 없습니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"lastName\" type=\"STRING\" size=\"255\"/><Column id=\"custNo\" type=\"STRING\" size=\"255\"/><Column id=\"custNm\" type=\"STRING\" size=\"255\"/><Column id=\"offTel1\" type=\"STRING\" size=\"255\"/><Column id=\"firstName\" type=\"STRING\" size=\"255\"/><Column id=\"comCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lastName\">Hyu</Col><Col id=\"custNo\">5663</Col><Col id=\"custNm\">더현대</Col><Col id=\"offTel1\">010-2549-2233</Col><Col id=\"firstName\">HEE</Col><Col id=\"comCode\">G001</Col></Row><Row><Col id=\"lastName\">Hmall</Col><Col id=\"custNo\">111234</Col><Col id=\"custNm\">현대Hmall</Col><Col id=\"offTel1\">010-8721-1455</Col><Col id=\"firstName\">CHOI</Col><Col id=\"comCode\">G003</Col></Row><Row><Col id=\"lastName\">market</Col><Col id=\"custNo\">8888</Col><Col id=\"custNm\">e슈퍼마켓</Col><Col id=\"offTel1\">01098121882</Col><Col id=\"firstName\">LEE</Col><Col id=\"comCode\">G002</Col></Row><Row><Col id=\"comCode\">G001</Col><Col id=\"offTel1\">010-2549-2233</Col><Col id=\"lastName\">hyundai</Col><Col id=\"custNm\">현대식품관</Col><Col id=\"custNo\">544643</Col><Col id=\"firstName\">RYU</Col></Row><Row><Col id=\"comCode\">G009</Col><Col id=\"offTel1\">010-8721-1455</Col><Col id=\"lastName\">livart</Col><Col id=\"custNm\">현대리바트몰</Col><Col id=\"custNo\">65722</Col><Col id=\"firstName\">JANG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage00", this);
            obj.set_keystring("S:msgCd");
            obj._setContents("<ColumnInfo><Column id=\"msgCd\" type=\"string\" size=\"32\"/><Column id=\"msgNm\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"msgCd\">SCMW001</Col><Col id=\"msgNm\">({0}) 필수 등록 항목입니다.</Col></Row><Row><Col id=\"msgCd\">SCMW090</Col><Col id=\"msgNm\">IE9 버전 이하에서는 사용할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMW092</Col><Col id=\"msgNm\">관리자에게 문의 바랍니다.</Col></Row><Row><Col id=\"msgNm\">({0}) 컴포넌트가 존재하지 않습니다.</Col><Col id=\"msgCd\">SCMW108</Col></Row><Row><Col id=\"msgCd\">SCMW109</Col><Col id=\"msgNm\">어플리케이션 오류가 발생 하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCMI109</Col><Col id=\"msgNm\">사용자 정보가 올바르지 않습니다.</Col></Row><Row><Col id=\"msgCd\">SCMI110</Col><Col id=\"msgNm\">비밀번호가 만료되었습니다.</Col></Row><Row><Col id=\"msgCd\">SCMI111</Col><Col id=\"msgNm\">최초사용자 로그인입니다.</Col></Row><Row><Col id=\"msgCd\">SCMI112</Col><Col id=\"msgNm\">외부사용자입니다.</Col></Row><Row><Col id=\"msgCd\">SCME101</Col><Col id=\"msgNm\">[에러코드:500] 서버 장애가 발생 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCME102</Col><Col id=\"msgNm\">프로그램 오류가 발생하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCME103</Col><Col id=\"msgNm\">프로그램 오류가 발생하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCME104</Col><Col id=\"msgNm\">[DB 오류] 중복된 데이터가 존재합니다.</Col></Row><Row><Col id=\"msgCd\">SCME105</Col><Col id=\"msgNm\">[DB 오류] 프로그램 오류가 발생하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCME106</Col><Col id=\"msgNm\">[DB 오류] 프로그램 오류가 발생하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCME107</Col><Col id=\"msgNm\">FrameWork 관련 에러입니다.</Col></Row><Row><Col id=\"msgCd\">SCME108</Col><Col id=\"msgNm\">어플리케이션 오류가 발생 하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCME109</Col><Col id=\"msgNm\">[에러코드:10060] 서버와 통신이 원활하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">SCME110</Col><Col id=\"msgNm\">[에러코드:0] 서버와 통신 시간을 초과 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCME111</Col><Col id=\"msgNm\">[에러코드:404] 요청한 페이지를 찾을 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS112</Col><Col id=\"msgNm\">[에러코드:408] 요청시간을 초과 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS114</Col><Col id=\"msgNm\">[에러코드:500] 서버와 접속할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS115</Col><Col id=\"msgNm\">[에러코드:12029] 서버와 통신할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS116</Col><Col id=\"msgNm\">[에러코드: {0}] {1} 원인으로 장애가 발생하였습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS117</Col><Col id=\"msgNm\">[에러코드:10060] 서버와 통신이 원활하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS118</Col><Col id=\"msgNm\">[에러코드:0] 서버와 통신 시간을 초과 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS119</Col><Col id=\"msgNm\">[에러코드:404] 요청한 페이지를 찾을 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS120</Col><Col id=\"msgNm\">[에러코드:408] 요청시간을 초과 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS121</Col><Col id=\"msgNm\">[에러코드:500] 서버 장애가 발생 했습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS122</Col><Col id=\"msgNm\">[에러코드:500] 서버와 접속할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">SCMS123</Col><Col id=\"msgNm\">[에러코드:12029] 서버와 통신할 수 없습니다.</Col></Row><Row><Col id=\"msgNm\">입력중인 데이타를 저장하시겠습니까?</Col><Col id=\"msgCd\">SCMQ001</Col></Row><Row><Col id=\"msgCd\">SCMQ002</Col><Col id=\"msgNm\">수정중인 데이타를 저장하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">SCMQ003</Col><Col id=\"msgNm\">선택한 데이터를 삭제하시겠습니까?</Col></Row><Row><Col id=\"msgNm\">작업 중인 자료가 있습니다. 저장 없이 진행하시겠습니까?</Col><Col id=\"msgCd\">SCMQ004</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMsgList","10","293","470","311",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMessage");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"293\"/><Column size=\"48\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"MsgCode\"/><Cell col=\"1\" text=\"MsgText\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:errMsgCd\"/><Cell col=\"1\" text=\"bind:errMsgNm\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"Y\" text=\"bind:useYn\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtReturn","490","399",null,"175","13",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnMessage","492","335","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Get Message");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMessage","618","335","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Set Message");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearMessage","744","335","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Clear Message");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMsgcode","490","296","530","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMessage");
            obj.set_codecolumn("errMsgCd");
            obj.set_datacolumn("errMsgNm");
            obj.set_displayrowcount("15");
            obj.set_text("MSG0001");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new GroupBox("gbxMsg","10","10",null,"245","10",null,null,null,null,null,this);
            obj.set_text("Message");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert01","268","43","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btnAlert01");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm01","793","43","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("confirm01");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02","40","72","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("param");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam01","103","72","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("아이디");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode01","103","43","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("E000001");
            obj.set_text("E000001");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01","40","43","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("code");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn01","366","43","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn03","892","43","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("stcDesc","40","97","586","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("* param 항목은 gdsMessage에 데이타 내용중 {n} 값을 순차적으로 치환해 준다.\r\n  여러개를 넘길때는 aaa,bbb처럼 콤마(,)를 붙인다.");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert04","174","174","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm03","39","211","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("단순 confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert05","309","174","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("alert (상세메세지)");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm04","174","211","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert03","39","174","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("단순 alert");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03","19","140","481","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("★ 사용자 Alert, Confirm , Toast");
            obj.set_color("blue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel1","490","371",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("★ 결과 값");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert02","268","72","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("btnAlert2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn02","366","72","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","570","43","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("code");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode02","633","43","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("C000008");
            obj.set_text("C000008");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel02_00","570","72","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("param");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam02","633","72","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("저장");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm02","793","72","91","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("confirm02");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn04","892","72","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("btnToast01","744","138","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("toast01");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","509","138","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("code");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode03","572","138","148","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("I000001");
            obj.set_text("I000001");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00","509","178","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("시간");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSec","572","178","148","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_value("3000");
            obj.set_text("3000");
            this.addChild(obj.name, obj);

            obj = new Button("btnToast02","744","178","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("toast02");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00_00","509","218","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("hAlign");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHAlign","572","218","88","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("center");
            obj.set_text("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnToast03","884","218","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("toast03");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVAlign","742","218","98","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("middle");
            obj.set_text("middle");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01_01_00_00_00","679","218","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("vAlign");
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
        this.registerScript("sampleMessage.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleMessage Form
        * FILE NAME     : sampleMessage.xfdl
        * DESCRIPTION   : 공통 메세지 처리
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.23    TOBESOFT	     최초생성
        ***********************************************************************************/


        /*
         1. 공통 Alert, Confirm 메세지 팝업 오픈시 공통함수 gfnShowMessage() 호출한다.
           - 단순 코드이용시 "Alert" / "Confirm" 을 통해 구분한다.
           - 메세지 코드 이용시 코드의 중간 type 정보로  Alert과 Confirm 을 구분한다.

          1) 단순 alert
        	var sMsgCode = ["Alert","I0006"];	// 저장되었습니다.
        	this.gfnShowMessage(this, sMsgCode);

          2) 단순 confirm
        	 var sMsgCode = ["confirm","Q0002"];		// 변경된 데이터가 존재합니다.\n계속 진행하시겠습니까?
        	 var sCallback = "fnMsgCallback";
        	 var sPopupId = "msgConfirm02";				// callback함수에서 분기처리시 popupId
        	 this.gfnShowMessage(this, sMsgCode, "", sCallback, sPopupId);

          3) 첫번째 인자 메세지 코드로 Alert, Confirm 구분되어 띄워진다.
        	  Q			 : Confirm
        	  그외		 : Alert

          4) 상세메세지를 보여주는 Alert
            - 메세지 코드와 상세 메세지로 보여줄 메세지를 전달한다.
        	 var sMsgCode = ["E0001","메세지 창에 상세 메세지..."];		// 중복된 {0}가 존재합니다.
        	 var sParam = "입력항목";
        	 this.gfnShowMessage(this, sMsgCode, sParam);

          5) Toast
         	var sMsgCode = "I0005";		// 조회가 완료되었습니다.
         	this.gfnShowToast(this, sMsgCode);

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
        	trace("[sampleMessage]Form onload 후 필요(설정)시 실행되는 callback 함수 ");

        	this.dsMessage.copyData(nexacro.getApplication().gdsMessage);

        	trace("[1]==========="+JSON.stringify(this.gfnGetAuth(this)));
        	trace("[2]==========="+this.gfnGetAuth(this, "InqAuthrt"));	// 조회권한 (Y/N)
        };


        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description Message팝업호출 callback(선택)
         */
        this.fnMsgCallback = function(sPopupId, objRtn)
        {
        	trace("[fnMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	switch (sPopupId)
        	{
        		case "msgAlert01" :
        			// 후처리 코드
        			this.edtReturn01.set_value(objRtn);
        			this.txtReturn.set_value(objRtn);
        			break;
        		case "msgConfirm01" :
        			// 후처리 코드
        			this.edtReturn03.set_value(objRtn);
        			this.txtReturn.set_value(objRtn);
        			break;
        		case "msgConfirm02" :
        			// 후처리 코드
        			break;
        		case "alertGetMessage" :
        			// 후처리 코드
        			this.txtReturn.set_value(objRtn);
        			break;
        		case "msgToast01" :
        			// 후처리
        			// 저장 toast 메시지 후 조회 처리를 할 경우
        			// this.fnSearch();
        			break;
        		case "msgToast02" :
        			// 후처리
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
         * @description btnAlert01 alert &  callback 호출
        */
        this.btnAlert01_onclick = function(obj,e)
        {
        	var sMsgCode = this.edtCode01.value;
        	var sParam = this.edtParam01.value;
        	this.gfnShowMessage(this, sMsgCode, sParam, "fnMsgCallback", "msgAlert01");
        };

        /**
         * @description btnAlert02 alert & function 처리
        */
        this.btnAlert02_onclick = function(obj,e)
        {
        	// 2. gfnShowMessage() 함수 호출시 함수내에 callback 함수를 바로 실행 할 수 있게 정의한다.
        	var sMsgCode = this.edtCode01.value;
        	var sParam = this.edtParam01.value;

        	this.gfnShowMessage(this, sMsgCode, sParam, function(svcid, variant) {
        		// gfnShowMessage 함수 내부에서 this._variant 값에 대한 처리 코드 추가되어 있음
        		// gfnShowMessage() 실행된 후 바로 처리되는 콜백함수 임
        		// 확인 또는 닫기 후 다음 처리될 로직을 정의 한다.
        		this.edtReturn02.set_value(variant);
        		this.edtReturn02.setFocus();
        	});
        };

        /**
         * @description btnConfirm01 confirm &  callback 호출
        */
        this.btnConfirm01_onclick = function(obj,e)
        {
        	var sMsgCode = this.edtCode02.value;
        	var sParam = this.edtParam02.value;
        	this.gfnShowMessage(this, sMsgCode, sParam, "fnMsgCallback", "msgConfirm01");
        };

        /**
         * @description btnConfirm02 confirm & function 처리
        */
        this.btnConfirm02_onclick = function(obj,e)
        {
        	var sMsgCode = this.edtCode02.value;
        	var sParam = this.edtParam02.value;

        	this.gfnShowMessage(this, sMsgCode, sParam, function(svcid, variant) {
        		// gfnShowMessage() 실행된 후 바로 처리되는 콜백함수 임
        		// 확인 또는 닫기 후 다음 처리될 로직을 정의 한다.
        		if(variant == "OK")
        		{
        			this.edtReturn04.set_value(variant);
        			this.txtReturn.set_value(variant);
        		}
        		else
        		{

        		}
        	});
        };

        /**
         * @description 단순 alert
        */
        this.btnAlert03_onclick = function(obj,e)
        {
        	var sMsgCode = ["Alert","I000001"];		// 조회 되었습니다.
        	this.gfnShowMessage(this, sMsgCode);
        };

        /**
         * @description alert
        */
        this.btnAlert04_onclick = function(obj,e)
        {
        	var sMsgCode = "W000014";		// {0}(을/를) 입력 바랍니다.
        	var sParam = "아이디";
        	this.gfnShowMessage(this, sMsgCode, sParam);
        };

        /**
         * @description alert 상세메시지
        */
        this.btnAlert05_onclick = function(obj,e)
        {
        	var sMsgCode = ["W000019","메세지 창에 상세 메세지..."];		// {0}(이/가) 중복되어 입력할 수 없습니다.
        	var sParam = "입력값";
        	this.gfnShowMessage(this, sMsgCode, sParam);
        };

        /**
         * @description 단순 confirm
        */
        this.btnConfirm03_onclick = function(obj,e)
        {
        	var sMsgCode = ["confirm","C000001"];		//저장 하시겠습니까?
        	var sCallback = "fnMsgCallback";
        	var sPopupId = "msgConfirm02";
        	this.gfnShowMessage(this, sMsgCode, "", sCallback, sPopupId);
        };

        /**
         * @description confirm
        */
        this.btnConfirm04_onclick = function(obj,e)
        {
        	var sMsgCode = "C000008";		// {0}(을/를) 실행 하겠습니까?
        	var sParam ="저장";
        	this.gfnShowMessage(this, sMsgCode, sParam, function(svcid, variant) {
        		if (variant == "OK")
        		{
        			// 확인시 후처리
        		}
        		else
        		{
        			// 취소시 후처리
        		}
        	});
        };

        /**
         * @description Toast 01
         */
        this.btnToast01_onclick = function(obj,e)
        {
         	var sMsgCode = this.edtCode03.value;	// "I0005";		// 조회가 완료되었습니다.
         	this.gfnShowToast(this, sMsgCode);
        };

        /**
         * @description Toast 02 , 시간설정, callback 설정
         */
        this.btnToast02_onclick = function(obj,e)
        {
        	// 토스트 메시지의 유지시간(millisecond)을 지정하고자 할때
        	// var sMsgCode = "I000001";		// 조회 되었습니다.
        	var sMsgCode = this.edtCode03.value;
         	this.gfnShowToast(this, sMsgCode, "", "fnMsgCallback", "msgToast01", {pvSec: this.edtSec.value});

        	/*
        	// callback function 처리 방법
        	this.gfnShowToast(this, sMsgCode, "", function(svcid, variant) {
        		// gfnShowToast() 실행된 후 바로 처리되는 콜백함수 임
        		// toast 창 닫힌 후 다음 처리될 로직을 정의 한다.
        		// TODO
        	}, "msgToast01", {pvSec: this.edtSec.value});
        	*/
        };

        /**
         * @description Toast 03 , 위치설정, callback 설정
         */
        this.btnToast03_onclick = function(obj,e)
        {
        	// 	hAlign	'left' | 'center' (default) | 'right'
        	// 	vAlign	'top' | 'middle' (default) | 'bottom'
         	var sMsgCode = this.edtCode03.value;	//  "I000001";		// 조회 되었습니다.
         	this.gfnShowToast(this, sMsgCode, "", "fnMsgCallback", "msgToast02", {hAlign:this.edtHAlign.value, vAlign: this.edtVAlign.value});
        };

        /**
         * @description Grid cell 클릭시
        */
        this.grdMsgList_oncellclick = function(obj,e)
        {
        	var objBindDs = obj.getBindDataset();
        	var nRow = obj.getDatasetRow(e.row);
        	var sMsgcode = objBindDs.getColumn(nRow, "errMsgCd");

        	this.cboMsgcode.set_value(sMsgcode);
        };

        /**
         * @description Message combo 변경시
        */
        this.cboMsgcode_onitemchanged = function(obj,e)
        {
        	var nRow = nexacro.getApplication().gdsMessage.findRow("errMsgCd", e.postvalue);
        	nexacro.getApplication().gdsMessage.set_rowposition(nRow);
        	this.txtReturn.set_value(nexacro.getApplication().gdsMessage.getColumn(nRow, "errMsgCd") +" : "+ nexacro.getApplication().gdsMessage.getColumn(nRow, "errMsgNm"));
        };

        /**
         * @description Get / Set / Clear Message
        */
        this.btnMessage_onclick = function(obj,e)
        {
        	if(obj.id == "btnMessage")
        	{
        		// 메세지 코드에 치환값이 적용되어 [Alert/confirm]메세지를 보여줌
        		var sCallback = "fnMsgCallback";
        		var sPopupId = "alertGetMessage";
        		// this.gfnShowMessage(this, this.cboMsgcode.text, "입력항목", sCallback, sPopupId);
        		this.gfnShowMessage(this, this.cboMsgcode.value, "치환값1", sCallback, sPopupId);

        	}
        	else if(obj.id == "btnSetMessage")
        	{
        		// 메세지 코드에 입력된 치환값을 적용하여 메세지를 보여줌
        		var rtn = this.gfnGetMessage(this.cboMsgcode.text, ["치환값1","치환값2"]);
        		this.txtReturn.set_value(rtn);

        	}
        	else if(obj.id == "btnClearMessage")
        	{
        		this.txtReturn.set_value("");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMsgList.addEventHandler("oncellclick",this.grdMsgList_oncellclick,this);
            this.btnMessage.addEventHandler("onclick",this.btnMessage_onclick,this);
            this.btnSetMessage.addEventHandler("onclick",this.btnMessage_onclick,this);
            this.btnClearMessage.addEventHandler("onclick",this.btnMessage_onclick,this);
            this.cboMsgcode.addEventHandler("onitemchanged",this.cboMsgcode_onitemchanged,this);
            this.btnAlert01.addEventHandler("onclick",this.btnAlert01_onclick,this);
            this.btnConfirm01.addEventHandler("onclick",this.btnConfirm01_onclick,this);
            this.btnAlert04.addEventHandler("onclick",this.btnAlert04_onclick,this);
            this.btnConfirm03.addEventHandler("onclick",this.btnConfirm03_onclick,this);
            this.btnAlert05.addEventHandler("onclick",this.btnAlert05_onclick,this);
            this.btnConfirm04.addEventHandler("onclick",this.btnConfirm04_onclick,this);
            this.btnAlert03.addEventHandler("onclick",this.btnAlert03_onclick,this);
            this.btnAlert02.addEventHandler("onclick",this.btnAlert02_onclick,this);
            this.btnConfirm02.addEventHandler("onclick",this.btnConfirm02_onclick,this);
            this.btnToast01.addEventHandler("onclick",this.btnToast01_onclick,this);
            this.btnToast02.addEventHandler("onclick",this.btnToast02_onclick,this);
            this.btnToast03.addEventHandler("onclick",this.btnToast03_onclick,this);
            this.dsMessage.addEventHandler("onrowposchanged",this.dsMessage_onrowposchanged,this);
            this.dsMessage00.addEventHandler("onrowposchanged",this.dsMessage_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
