(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"32\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenuTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"menuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"upMenuMgno\" type=\"STRING\" size=\"32\"/><Column id=\"menuClCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"inqAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"regAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"mdfcnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"delAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"excnAuthrtYn\" type=\"STRING\" size=\"32\"/><Column id=\"topMenuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"srchMenuNm\" type=\"STRING\" size=\"32\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuMgno\">EXAM</Col><Col id=\"upMenuMgno\">MN00000000</Col><Col id=\"menuClCd\">MCC0001</Col><Col id=\"menuNm\">비메뉴 공통</Col><Col id=\"menuLvl\">1</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통</Col><Col id=\"srchMenuNm\">비메뉴공통</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">SAMPLE</Col><Col id=\"upMenuMgno\">EXAM</Col><Col id=\"menuClCd\">MCC0001</Col><Col id=\"menuNm\">샘플예제</Col><Col id=\"menuLvl\">2</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통</Col><Col id=\"srchMenuNm\">샘플예제</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleScript</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">기본 화면</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleScript</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">1</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">기본화면</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleMessage</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">메세지 처리 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleMessage</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">2</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">메세지처리샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">samplePopup</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">팝업 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::samplePopup</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">3</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">팝업샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">samplePopupSub01</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">팝업 샘플 SUB01</Col><Col id=\"menuUrlAddr\">Develop_Sample::samplePopupSub01</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">4</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">팝업샘플SUB01</Col><Col id=\"popupYn\">Y</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">samplePopupSub02</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">팝업 샘플 SUB02</Col><Col id=\"menuUrlAddr\">Develop_Sample::samplePopupSub02</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">5</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">팝업샘플SUB02</Col><Col id=\"popupYn\">Y</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleSearchArea</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">조회 조건 숨기기 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleSearchArea</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">6</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">조회조건숨기기샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleCalendar</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">Calendar 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleCalendar</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">7</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">CANENDAR샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleComcode</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">공통코드 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleComcode</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">8</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">공통코드샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleGrid</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">그리드 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleGrid</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">9</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">그리드샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleGridSum</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">그리드 소계, 총계 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleGridSum</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">10</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">그리드소계,총계샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleGridText</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">그리드 데이터 표현</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleGridText</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">11</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">그리드데이터표현</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleGridExcel</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">그리드 Excel 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleGridExcel</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">12</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">그리드Excel샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleMultiCombo</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">멀티콤보 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleMultiCombo</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">13</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">멀티콤보샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleValidation</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">validation 샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleValidation</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">14</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">VALIDATION샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleChart</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">Chart샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleChart</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">15</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">CHART샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleSingleFileUpDown</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">Single 파일관련 샘플 X</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleSingleFileUpDown</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">16</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">SINGLE파일관련샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleMultiFileUpDown</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">Multi 파일관련 샘플 X</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleMultiFileUpDown</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">17</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">MULTI파일관련샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleReport</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">레포트샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleReport</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">18</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">레포트샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleDocViewer</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">문서뷰어샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleDocViewer</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">19</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">문서뷰어샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">samplePaging</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">페이징샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::samplePaging</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">20</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">페이징샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleFormActionM00</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">화면전환샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleFormActionM00</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">21</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">화면전환샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleRaonK</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">RaonK샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleRaonK</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">22</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">RAONK샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleZZZZZ</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">----------------------</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">23</Col><Col id=\"inqAuthrtYn\">N</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col><Col id=\"srchMenuNm\">----------------------</Col></Row><Row><Col id=\"menuMgno\">sampleFileDownTransfer</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">FileDownTransfer</Col><Col id=\"menuUrlAddr\">Develop_Sample::FileDownTransfer</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">24</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">FILEDOWNTRANSFER</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleFileUpTransfer</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">FileUpTransfer</Col><Col id=\"menuUrlAddr\">Develop_Sample::FileUpTransfer</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">25</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">FILEUPTRANSFER</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuNm\">FileUploadSingle</Col><Col id=\"menuMgno\">sampleFileUploadSingle</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuUrlAddr\">Develop_Sample::FileUploadSingle</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">26</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">FILEUPLOADSINGLE</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleFileUploadMulti</Col><Col id=\"menuNm\">FileUploadMulti</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuUrlAddr\">Develop_Sample::FileUploadMulti</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">27</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">FILEUPLOADMULTI</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleForm_Work</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">Form_Work</Col><Col id=\"menuUrlAddr\">Develop_Sample::Form_Work</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">28</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">FORM_WORK</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">test01</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">test</Col><Col id=\"menuUrlAddr\">Develop_Test::test01</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">99</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">TEST</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"menuMgno\">sampleRaonKTest</Col><Col id=\"upMenuMgno\">SAMPLE</Col><Col id=\"menuClCd\">MCC0002</Col><Col id=\"menuNm\">RaonKTest샘플</Col><Col id=\"menuUrlAddr\">Develop_Sample::sampleRaonKTest</Col><Col id=\"menuLvl\">3</Col><Col id=\"sortSeqo\">99</Col><Col id=\"inqAuthrtYn\">Y</Col><Col id=\"regAuthrtYn\">N</Col><Col id=\"mdfcnAuthrtYn\">N</Col><Col id=\"delAuthrtYn\">N</Col><Col id=\"excnAuthrtYn\">N</Col><Col id=\"topMenuId\">EXAM</Col><Col id=\"menuPath\">비메뉴 공통 &gt; 샘플예제</Col><Col id=\"srchMenuNm\">RAONKTest샘플</Col><Col id=\"popupYn\">N</Col><Col id=\"useYn\">Y</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"errMsgCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgClCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgNtnCd\" type=\"STRING\" size=\"32\"/><Column id=\"errMsgNm\" type=\"STRING\" size=\"32\"/><Column id=\"inptCnt\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"errMsgCd\">C000001</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000002</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">삭제 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000003</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">일괄다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000004</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">엑셀을 다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000005</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그아웃 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000006</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">일괄등록 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000007</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">임시비밀번호를 생성 하시겠습니까?</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000008</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 실행 하겠습니까?</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">C000009</Col><Col id=\"errMsgClCd\">EMC0002</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 다운로드 하시겠습니까?</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">E000001</Col><Col id=\"errMsgClCd\">EMC0004</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">처리중 오류가 발생하였습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">E000002</Col><Col id=\"errMsgClCd\">EMC0004</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">처리중 인증오류가 발생하였습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000001</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">조회 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000002</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">조회 결과가 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000003</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000004</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">삭제 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000005</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">수정 되었습니다. </Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000006</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">등록 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000007</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">요청한 페이지를 찾을 수 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000008</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">선택된 항목이 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000009</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그아웃 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000010</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">로그인이 필요합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000011</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 조회 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000012</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 생성 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000013</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 등록 되었습니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">I000014</Col><Col id=\"errMsgClCd\">EMC0001</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">사용 가능한 {0}입니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000001</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">선택된 항목이 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000002</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">중복체크 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000003</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">저장할 데이터가 없습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000004</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">시작일은 종료일보다 이전 시점이어야 합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000005</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">종료일은 시작일보다 이후 시점이어야 합니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000006</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">수량을 입력 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000007</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">이용 약관에 동의 하시기 바랍니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000008</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">올바르지 않은 인증정보 입니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000009</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">인증정보가 만료 되었습니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000010</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000011</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">올바르지 않은 요청입니다.</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000012</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">파일업로드 최대 허용 크기를 초과하였습니다</Col><Col id=\"inptCnt\">0</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000013</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 선택 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000014</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 입력 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000015</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 삭제가 불가합니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000016</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 수정이 불가합니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000017</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 올바르게 입력하기 바랍니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000018</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(을/를) 파일을 업로드 하시기 바랍니다.</Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"errMsgCd\">W000019</Col><Col id=\"errMsgClCd\">EMC0003</Col><Col id=\"errMsgNtnCd\">KR</Col><Col id=\"errMsgNm\">{0}(이/가) 중복되어 입력할 수 없습니다. </Col><Col id=\"inptCnt\">1</Col><Col id=\"useYn\">Y</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"group\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">colfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">colfix</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">colfix</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"group\">colfix</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">rowfix</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">rowfix</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"group\">rowfix</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">filter</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">filter</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">filter</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"caption\">소트해제</Col><Col id=\"id\">sortfree</Col><Col id=\"level\">0</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">sortfree</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">sortfree</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"id\">find</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">find</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">find</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">colhide</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">colhide</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"group\">copy</Col><Col id=\"id\">copy</Col><Col id=\"level\">0</Col><Col id=\"caption\">복사모드</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"group\">copy</Col><Col id=\"id\">copyfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">복사모드해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">copy</Col><Col id=\"id\">desh</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기화</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"group\">initial</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"winKey\" type=\"STRING\" size=\"256\"/><Column id=\"menuMgno\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"menuFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"upInstMgno\" type=\"STRING\" size=\"256\"/><Column id=\"instMgno\" type=\"STRING\" size=\"256\"/><Column id=\"userClCd\" type=\"STRING\" size=\"256\"/><Column id=\"flnm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"telDdd\" type=\"STRING\" size=\"256\"/><Column id=\"telTlpno\" type=\"STRING\" size=\"256\"/><Column id=\"telPhino\" type=\"STRING\" size=\"256\"/><Column id=\"acntRprsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"instClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"instDtlClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"govInstYn\" type=\"STRING\" size=\"256\"/><Column id=\"bzentNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzentClCd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleIdMgno\" type=\"STRING\" size=\"256\"/><Column id=\"roleIdMgnoList\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCommCode", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCdMgno\" type=\"STRING\" size=\"32\"/><Column id=\"cdMgno\" type=\"STRING\" size=\"32\"/><Column id=\"cdEngNm\" type=\"STRING\" size=\"32\"/><Column id=\"cdKornNm\" type=\"STRING\" size=\"32\"/><Column id=\"sortSeqo\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvDateObj","");
            this._addVariable("gvDate","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("IRS");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("./license/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1920","923",null,null,this);
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("IRS");
            mainframe.set_openalign("center middle");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0");
            frame0.set_showcascadetitletext("false");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frameLogin",null,null,null,null,null,null,"",frame0);
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("71,*");
            frame2.set_showtitlebar("false");
            frame2.set_showtitleicon("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("frameLeft",null,null,null,null,null,null,"",frame2);
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            frame2.addChild(frame3.name, frame3);

            var frame4 = new VFrameSet("VFrameSet1",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("45,45,*,0,56");
            frame4.set_showtitlebar("false");
            frame4.set_showtitleicon("false");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("frameTop",null,null,null,null,null,null,"",frame4);
            frame5.set_dragmovetype("none");
            frame5.set_showstatusbar("false");
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("frameMDI",null,null,null,null,null,null,"",frame4);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame6.set_showtitleicon("false");
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("frameMain",null,null,null,null,null,null,"",frame4);
            frame7.set_dragmovetype("none");
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame4.addChild(frame7.name, frame7);

            var frame8 = new FrameSet("framesetWork",null,null,null,null,null,null,frame4);
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame4.addChild(frame8.name, frame8);

            var frame9 = new ChildFrame("frameBottom",null,null,null,null,null,null,"",frame4);
            frame9.set_showtitlebar("false");
            frame9.set_dragmovetype("none");
            frame9.set_showtitleicon("false");
            frame4.addChild(frame9.name, frame9);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
        };
        
        // script Compiler
        this.addIncludeScript("IRS.xadl","Frame_Lib::Lib_Constants.xjs");
        this.registerScript("IRS.xadl", function() {
        /***********************************************************************************
        * SERVICE GROUP :
        * BUSINESS      : IRS
        * FILE NAME     : IRS.xadl
        * DESCRIPTION   : IRS
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2023.08.21    TOBESOFT	     최초생성
        ***********************************************************************************/

        this.executeIncludeScript("Frame_Lib::Lib_Constants.xjs"); /*include "Frame_Lib::Lib_Constants.xjs"*/;


        /***********************************************************************************
        * Application 변수 선언 영역
        ***********************************************************************************/

        this.gvSvrType 			= "";					// 실행환경 구분 (LOCAL , DEV , REAL)
        this.gvServiceUrl 		= "";					// 접속URL , nexacro.getProjectPath() 의 추출정보 , ex. https://www.domain.com:4098

        this.gvMainframe		= "";       			// mainframe
        this.gvVFrameSet		= "";       			// VFrameSet
        this.gvFrameLogin		= "";       			// frameLogin
        this.gvHFrameSet		= "";       			// HFrameSet
        this.gvFrameLeft		= "";       			// frameLeft
        this.gvVFrameSet1		= "";       			// VFrameSet1
        this.gvFrameTop			= "";       			// frameTop
        this.gvFrameMDI			= "";      	 			// frameMDI
        this.gvFrameMain		= "";       			// frameMain
        this.gvFramesetWork		= "";       			// framesetWork
        this.gvFrameBottom		= "";       			// frameBottom

        this.gvStartDate		= "";					// Form 로딩시 시작시간 , yyyymmddhh24miss milliseconds
        this.gvStartTime		= "";					// Form 로딩시 시작시간 , getTime()

        this.gvRealTrace 		= trace;
        this.gvProcessTran		= false;				// true / false , Transaction 진행중 여부
        this.gvLoginTrueAfter	= false;				// true / false , 로그인 성공 이후 여부

        this.gvRSAModulus		= "";					// RSAModulus
        this.gvRSAExponent		= "";					// RSAExponent

        /*
        	// PrivateProfile
        	saveUserNo 		- 사용자ID
        	saveUserChk  	- 아이디저장, 아이디저장에 체크되어 있으면 사용자ID,체크정보 저장, 그렇지 않으면 둘다 "" 처리

        	AccessToken		- access 토큰
        	RefreshToken	- refresh 토큰
        */

        /***********************************************************************************
        * Application EVENT 선언 영역
        ***********************************************************************************/

        /**
         * @desc Applicaton onload시 처리내역
         * @param {Object}			Application
         * @param {LoadEventInfo} 	e 이벤트
         * @return N/A
        */
        this.Application_onload = function(obj,e)
        {
        	trace("[this.Application_onload]============================================================================");
        	nexacro.Form.prototype.fvEnv = nexacro.getEnvironment(); // Environment 설정 각 Form에서 this.fvEnv  사용할것.
        	nexacro.Form.prototype.fvApp = nexacro.getApplication(); // Application 설정 각 Form에서 this.fvApp  사용할것.

        	var objApp = nexacro.getApplication();
        	var objEnv = nexacro.getEnvironment();

        	// Frame 변수 저장
        	this.gvMainframe		= objApp.mainframe;                                						// mainframe
        	this.gvVFrameSet	 	= objApp.mainframe.VFrameSet;                                			// VFrameSet
        	this.gvFrameLogin	 	= objApp.mainframe.VFrameSet.frameLogin; 				   				// frameLogin
        	this.gvHFrameSet     	= objApp.mainframe.VFrameSet.HFrameSet;                      			// HFrameSet
        	this.gvFrameLeft     	= objApp.mainframe.VFrameSet.HFrameSet.frameLeft;            			// frameLeft
        	this.gvVFrameSet1    	= objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			// VFrameSet1
        	this.gvFrameTop	 		= objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameTop; 			// frameTop
        	this.gvFrameMDI      	= objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameMDI;  			// frameMDI
        	this.gvFrameMain     	= objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameMain;  			// frameMain
        	this.gvFramesetWork     = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork;        	// framesetWork
        	this.gvFrameBottom    	= objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameBottom;       	// frameBottom

        	// QuickView 여부 설정
        	nexacro.setEnvironmentVariable("evQuickView", "N");

        	// Environment httptimeout 설정, 단위 초
        	objEnv.set_httptimeout(objApp.Tran.defaultHttptimeout);

        	// 접속경로 확인 및 설정
        	//trace("===== 접속경로 : " + nexacro.getProjectPath());
        	//trace("system.navigatorname:"+system.navigatorname);
        	var sSysNaviName = system.navigatorname.toUpperCase();		// 어플리케이션이 실행된 브라우저 정보 , "nexacro", "IE", "Chrome", "Gecko" 등
        	var sProjectPath = nexacro.getProjectPath();				// 애플리케이션의 실행 경로 , file::// , http...
        	trace("sSysNaviName:"+sSysNaviName+"|sProjectPath:"+sProjectPath);

        	if(sSysNaviName.indexOf("NEXACRO") > -1)	// nexacro-studio 실행일때
        	{
        		//Local, Local Web Server(서비스변경 가능)
        		if (sProjectPath.indexOf("file://") > -1 || sProjectPath.indexOf("127.0.0.1:4098") > -1)
        		{
        			this.gvServiceUrl = "http://127.0.0.1/irs";

        			objApp.mainframe.set_titletext("로컬NRE(파일) - " + objApp.mainframe.titletext);
        		}
        		else 	//Web Server
        		{
        			this.gvServiceUrl = sProjectPath.split("/")[0] + "//" +  sProjectPath.split("/")[2];

        			objApp.mainframe.set_titletext("로컬NRE(웹) - " + objApp.mainframe.titletext);
        		}

        		this.gvSvrType = "LOCAL";
        		objApp.Tran.bTraceLog = objApp.Tran.traceLog.LOCAL;
        	}
        	else	// 그외의 경우(WEB)
        	{
        		this.gvServiceUrl = sProjectPath.split("/")[0] + "//" +  sProjectPath.split("/")[2];
        		//trace("브라우저 실행 >>> Web Server >>> " + this.gvServiceUrl);
        		if(this.gvServiceUrl != null && this.gvServiceUrl != "")
        		{
        			//trace("web 접근 ==============================================================");
        			sWasUrl = this.gvServiceUrl.toUpperCase();

        			if(sWasUrl.indexOf("DEVIRS.") > -1
        			|| sWasUrl.indexOf("192.168.0.140") > -1)
        			{
        				this.gvSvrType = "DEV";			//개발
        				objApp.Tran.bTraceLog = objApp.Tran.traceLog.DEV;
        				objApp.mainframe.set_titletext("개발 - " + objApp.mainframe.titletext);
        			}
        			else if(sWasUrl.indexOf("IRS.") > -1
        				 || sWasUrl.indexOf("172.45.221.154") > -1)
        			{
        				this.gvSvrType = "REAL";		//운영
        				objApp.Tran.bTraceLog = objApp.Tran.traceLog.REAL;
        			}
        			else
        			{
        				//trace("web 접근 로컬");
        				this.gvSvrType = "LOCAL";		//로컬
        				objApp.Tran.bTraceLog = objApp.Tran.traceLog.LOCAL;
        				objApp.mainframe.set_titletext("로컬 - " + objApp.mainframe.titletext);
        			}
        		}
        		else
        		{
        			// 도메인정보가 정의된 경우가 아니면 LOCAL 로 처리
        			this.gvSvrType = "LOCAL";
        			objApp.Tran.bTraceLog = objApp.Tran.traceLog.LOCAL;
        			objApp.mainframe.set_titletext("로컬(??) - " + objApp.mainframe.titletext);
        		}
        	}

        // 	trace("[최종]this.gvSvrType:"+this.gvSvrType);
        // 	trace("objApp.Tran.bTraceLog:"+objApp.Tran.bTraceLog);
        	trace("this.gvServiceUrl:"+this.gvServiceUrl);

        	// Environment 정보 갱신처리
        	objEnv.evSvrType = this.gvSvrType;		// 실행환경 구분 (LOCAL , DEV , REAL)

        	// trace 로그 남길지 여부
        	this.gfnAdlSetTraceLog(objApp.Tran.bTraceLog);

        	// Service URL 설정
        	var sMsg1 = this.gfnAdlSetConfigUrl("SERVICE", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg1);

        	// File Up/DownLoad 정보 관련 설정
        	var sMsg2 = this.gfnAdlSetConfigUrl("FILE", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg2);

        	// Excel Import / Export 정보 관련 설정
        	var sMsg3 = this.gfnAdlSetConfigUrl("EXCEL", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg3);

        	// Report 정보 관련 설정
        	var sMsg4 = this.gfnAdlSetConfigUrl("REPORT", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg4);

        	// Viewer 정보 관련 설정
        	var sMsg5 = this.gfnAdlSetConfigUrl("VIEWER", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg5);

        	// RaonK 정보 관련 설정
        	var sMsg6 = this.gfnAdlSetConfigUrl("RAONK", this.gvSvrType, this.gvServiceUrl);
        	trace(sMsg6);

        	if(sSysNaviName.indexOf("NEXACRO") > -1)
        	{
        		nexacro.getApplication().mainframe.set_openstatus("maximize");		// Application 최대화
        	}

        	this.gvFrameLogin.set_formurl("Frame_Main::frameLogin.xfdl");
        	this.gvFrameLeft.set_formurl("Frame_Main::frameLeft.xfdl");
        	this.gvFrameTop.set_formurl("Frame_Main::frameTop.xfdl");
        	this.gvFrameMDI.set_formurl("Frame_Main::frameMDI.xfdl");
        	this.gvFrameMain.set_formurl("Frame_Main::frameMain.xfdl");
        	this.gvFrameBottom.set_formurl("Frame_Main::frameBottom.xfdl");


        	// 사용자 환경정보관련 상수정보 추가
        	objApp.Frame.sUsrOsNm = system.osversion;					// 사용자운영체제명	, system.osversion , "Android 2.3", "iOS 6", "Windows 7", "Windows Vista" 등의 값
        	objApp.Frame.sUsrBrsNm = system.navigatorname;				// 사용자브라우저명 , system.navigatorname , "nexacro platform", "IE", "Chrome", "Gecko" 등의 값
        	// system.navigatorname : Gecko 에 대해 Firefox 로 변경처리
        	if(system.navigatorname.toUpperCase() == "GECKO")
        	{
        		objApp.Frame.sUsrBrsNm = "Firefox";
        	}
        	objApp.Frame.sUsrBrsVerVal = system.navigatorversion;		// 사용자브라우저버전값 , system.navigatorversion , 버전이 '28.0.1500.95'라면 '28'만 반환
        	objApp.Frame.nMntCnt = system.monitorcount;					// 모니터수 , system.monitorcount
        	objApp.Frame.nRslnWdn = system.getScreenRect(1).width;		// 해상도넓이 , system.getScreenRect(1).width , 모니터의 번호는 1번을 기준으로 width 값
        	objApp.Frame.nRslnHght = system.getScreenRect(1).height;	// 해상도높이 , system.getScreenRect(1).height , 모니터의 번호는 1번을 기준으로 height 값

        };

        /**
         * @desc Application 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다.
         * @param {Object}			Application
         * @param {ErrorEventInfo} 	e 이벤트
         * @return N/A
        */
        this.Application_onerror = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Application_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	trace("e.errormsg:"+e.errormsg
        	+"\ne.errorobj:"+e.errorobj
        	+"\ne.errortype:"+e.errortype
        	+"\ne.eventid:"+e.eventid
        	+"\ne.locationuri:"+e.locationuri
        	+"\ne.requesturi:"+e.requesturi
        	+"\ne.statuscode:"+e.statuscode);
        };


        /**
         * @desc Application 이 종료될 때 발생하는 이벤트입니다.
         * @param {Object}			Application
         * @param {ExitEventInfo} 	e 이벤트
         * @return N/A
        */
        this.Application_onexit = function(obj,e)
        {

        };

        /***********************************************************************************
        * Application Function
        ***********************************************************************************/

        /**
         * @desc 값이 존재하는지 여부 체크
         * @param {String}		sValue		- 체크대상 값
         * @return {Boolean}	true/false
        */
        this.gfnAdlIsNull = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
        	if (sValue == null) return true;

        	var ChkStr = new String(sValue);

        	if (ChkStr == null) return true;
        	if (ChkStr.toString().length == 0 ) return true;
        	return false;
        };

        /**
         * @desc trace 로그 재정의하여 trace로그 생성 방지처리
         * @param {String}		bTraceLog	- 체크대상 값 (trace 처리 관련)
         * @return N/A
        */
        this.gfnAdlSetTraceLog = function(bTraceLog)
        {
        	//trace("[gfnAdlSetTraceLog]bTraceLog:"+bTraceLog);

        	if (bTraceLog)
        	{
        		trace = this.gvRealTrace;
        	}
        	else
        	{
        		trace = function trace(){};
        	}
        };

        /**
         * @desc Service URL 설정
         * @param {String}		sDiv		- 대상 구분 (SERVICE, FILE, EXCEL, REPORT, VIEWER, RAONK)
         * @param {String}		sSvrType	- 실행환경 구분 (LOCAL , DEV , REAL)
         * @return {String}		처리결과 msg
        */
        this.gfnAdlSetConfigUrl = function(sDiv, sSvrType, sServiceUrl)
        {
        	var sMsg = "";
        	var cvInfo;
        	//trace("gfnAdlSetServiceUrl > 시작 nexacro.getEnvironment().services[svcUrl].url:"+nexacro.getEnvironment().services["svcUrl"].url);
        	if ( sDiv == "SERVICE" )
        	{
        		cvInfo = nexacro.getApplication().Tran;
        		cvInfo.webUrl  = String(cvInfo["webUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["webUrlInfo"][sSvrType] : sServiceUrl + cvInfo["webUrlInfo"][sSvrType];
        		cvInfo.fwUrl   = String(cvInfo["fwUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fwUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fwUrlInfo"][sSvrType];

        		var objServiceCommon = nexacro.getEnvironment().services["svcUrl"];
        		objServiceCommon.url = cvInfo.fwUrl;

        		cvInfo.nDataType  = cvInfo.DataType[sSvrType];;

        		sMsg = "\n Service Prefix"
        			 + "\n      " + objServiceCommon.prefixid + " = " + objServiceCommon.url
        			 + "\n      webUrl  = " + cvInfo.webUrl
        			 + "\n      fwUrl  = " + cvInfo.fwUrl
        			 + "\n      nDataType  = " + cvInfo.nDataType;
        	}
        	else if ( sDiv == "FILE" )
        	{
        		cvInfo = nexacro.getApplication().File;
        		cvInfo.fileSingleUpLoadUrl    = String(cvInfo["fileSingleUpLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileSingleUpLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileSingleUpLoadUrlInfo"][sSvrType];
        		cvInfo.fileMultiUpLoadUrl    = String(cvInfo["fileMultiUpLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileMultiUpLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileMultiUpLoadUrlInfo"][sSvrType];
        		cvInfo.fileSingleDownLoadUrl  = String(cvInfo["fileSingleDownLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileSingleDownLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileSingleDownLoadUrlInfo"][sSvrType];
        		cvInfo.fileMultiDownLoadUrl  = String(cvInfo["fileMultiDownLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileMultiDownLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileMultiDownLoadUrlInfo"][sSvrType];

        		sMsg = "\n File Up/DownLoad 정보 설정"
        			 + "\n      fileSingleUpLoadUrl  = "  + cvInfo.fileSingleUpLoadUrl
        			 + "\n      fileMultiUpLoadUrl  = "  + cvInfo.fileMultiUpLoadUrl
        			 + "\n      fileSingleDownLoadUrl = " + cvInfo.fileSingleDownLoadUrl
        			 + "\n      fileMultiDownLoadUrl = " + cvInfo.fileMultiDownLoadUrl;
        	}
        	else if ( sDiv == "EXCEL" )
        	{
        		cvInfo = nexacro.getApplication().ExcelInfo;

        		cvInfo.excelImportUrl  = String(cvInfo["excelImportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["excelImportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["excelImportUrlInfo"][sSvrType];
        		cvInfo.excelExportUrl  = String(cvInfo["excelExportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["excelExportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["excelExportUrlInfo"][sSvrType];

        		sMsg = "\n Excel Import / Export 정보 설정"
        			 + "\n      excelImportUrl  = "  + cvInfo.excelImportUrl
        			 + "\n      excelExportUrl = " + cvInfo.excelExportUrl;
        	}
        	else if ( sDiv == "REPORT" )
        	{
        		cvInfo = nexacro.getApplication().ReportInfo;

        		cvInfo.reportUrl    = String(cvInfo["reportUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["reportUrlInfo"][sSvrType] : sServiceUrl + cvInfo["reportUrlInfo"][sSvrType];

        		sMsg = "\n Report 서버 정보 설정"
        			 + "\n      ReportUrl  = "  + cvInfo.reportUrl;
        	}
        	else if ( sDiv == "VIEWER" )
        	{
        		cvInfo = nexacro.getApplication().ViewerInfo;

        		cvInfo.viewerUrl    = String(cvInfo["viewerUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["viewerUrlInfo"][sSvrType] : sServiceUrl + cvInfo["viewerUrlInfo"][sSvrType];

        		sMsg = "\n Viewer 서버 정보 설정"
        			 + "\n      ViewerUrl  = "  + cvInfo.viewerUrl;
        	}
        	else if ( sDiv == "RAONK" )
        	{
        		cvInfo = nexacro.getApplication().RaonKInfo;

        		cvInfo.handlerUrl    = String(cvInfo["handlerUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["handlerUrlInfo"][sSvrType] : sServiceUrl + cvInfo["handlerUrlInfo"][sSvrType];
        		cvInfo.fileFullDownLoadUrl    = String(cvInfo["fileFullDownLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["fileFullDownLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["fileFullDownLoadUrlInfo"][sSvrType];
        		cvInfo.checkFileDownLoadUrl    = String(cvInfo["checkFileDownLoadUrlInfo"][sSvrType]).indexOf("http") > -1 ? cvInfo["checkFileDownLoadUrlInfo"][sSvrType] : sServiceUrl + cvInfo["checkFileDownLoadUrlInfo"][sSvrType];

        		sMsg = "\n RaonK 서버 정보 설정"
        			 + "\n      handlerUrl  = "  + cvInfo.handlerUrl
        			 + "\n      fileFullDownLoadUrl  = "  + cvInfo.fileFullDownLoadUrl
        			 + "\n      checkFileDownLoadUrl  = "  + cvInfo.checkFileDownLoadUrl;
        	}

        	return sMsg;
        };
        });
        this.checkLicense("./license/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("IRS.xadl");
    };
}
)();
