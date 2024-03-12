/**
*  @FileName 	Grid.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2022.08.25
*  @Desction	Grid 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.25     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

/*	
	★★★★ 추가 정의 or 의사결정 필요
	cssclass : 디자인 테마 나오면 체크 후 정리 필요
	
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnSetGrid							: Grid에 기능 추가
 * _gfnGetGridUserProperty				: 그리드 설정 내부함수 (Grid Object의 UserProperty를 Array형태로 반환한다.) 
 * gfnGridMakePopupMenuArray			: Grid의 팝업메뉴 항목 설정
 * gfnGridAddProp						: Grid에 기능 추가(addCol..) function 호출 (checkbox , no , sort property - true)
 * gfnGridCheckboxNoStatusAdd			: Grid에 기능 추가(addCol..) 실제처리 (checkbox , no)
 * gfnGridGetCurrFormatStr				: 그리드 Current Format 전체 가져오기
 * gfnMakeGridPopupMenu					: 그리드마우스우클릭시 표현될 팝업메뉴생성
 * gfnPopupmenu_onmenuclick				: 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
 * gfnGridCellFix						: 그리드 우클릭 POPUPMENU 내부함수, 열고정(colfix)
 * gfnGridCellFree						: 그리드 우클릭 POPUPMENU 내부함수, 열고정해제(colfixfree)
 * gfnGridrowFix						: 그리드 우클릭 POPUPMENU 내부함수, 행고정 (rowfix)
 * gfnGridRowFree						: 그리드 우클릭 POPUPMENU 내부함수, 행고정해제 (rowfixfree)
 * gfnGridFilter						: 그리드 우클릭 POPUPMENU 내부함수, 필터(filter)
 * gfnGridFilterCallback				: 그리드 우클릭 POPUPMENU 내부함수, 필터(filter) 팝업 콜백
 * gfnGridFilterFree					: 그리드 우클릭 POPUPMENU 내부함수, 셀필터해제(filterfree)
 * gfnGridClearSort						: 그리드의 Sort Mark 제거 및 관련 초기화 (sortfree)
 * gfnGridExecuteSort					: 소트를 실행한다
 * gfnGridGetBodyCellIndex				: head cell에 match되는 body cell을 얻어온다
 * gfnGridDataFind						: 그리드 우클릭 POPUPMENU 내부함수, 찾기 (find)
 * gfnGridFindCallback					: 그리드 우클릭 POPUPMENU 내부함수, 찾기(find) 팝업 콜백
 * gfnGridColHideShow					: 그리드 우클릭 POPUPMENU 내부함수, 컬럼 숨기기/보이기 (colhide)
 * gfnColumnHideCallback				: 그리드 우클릭 POPUPMENU 내부함수, 컬럼 숨기기/보이기(colhide) 팝업 콜백
 * gfnGridCopyApply						: 그리드 우클릭 POPUPMENU 내부함수
 * gfnGridCopyFreeApply					: 그리드 우클릭 POPUPMENU 내부함수
 * gfnGrid_onheadclick					: 그리드헤드클릭 이벤트 [Sort, Checkbox]
 * gfnHeadCheckSelectAll				: 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
 * gfnGridSetSortStatus					: 정렬가능여부리턴
 * gfnGridGetGridCellObject 			: Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
 * gfnGridGetBindColumnNameByIndex		: body cell index로 binding 된 컬럼명을 얻어온다.
 * gfnGrid_onkeydown					: 그리드키다운 이벤트(copy, enterkey)
 * gfnGridCopyEventForRuntime			: copy event(nexacro, ie)
 * gfnGridCopyEventForChrome			: copy event(chrome)
 * gfnCreateTextareaComp				: cell copy and paste (크롬용 텍스트에어리어생성)
 * gfnGridPasteEvent					: paste event
 * gfnGirdGetPasteData					: paste데이터생성
 * gfnGridPasteEventPost				: paste event
 * gfnGrid_oncellclick					: 그리드에서 Cell 클릭 이벤트 [콤보dropdown]
 * gfnGrid_onrbuttonup					: Grid 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트
 * gfnGrid_onlbuttondown				: 그리드에서 마우스 좌측버튼 클릭 이벤트 [showselection해제 기능][콤보dropdown, checkbox 멀티콘트롤 추가기능]
 * gfnGridInitOncellclick				: oncellclick 이벤트 추가 (셀 클릭시 텍스트 선택되게)
 * gfnGridInitOncloseup					: oncloseup 이벤트 추가 (Combo 아이템 리스트를 클릭하여 선택시 그리드의 Row 아래행으로 이동처리)
 * gfnFindGridText						: 주어진 문자열을 그리드에서 찾는다.
 * gfnFindGridTextMulti					: 주어진 문자열을 그리드에서 찾는다. (멀티항목처리)
 * gfnSetHeadCheckSelectAll				: 그리드Checkall기능 사용가능 체크컬럼 추가하기
 * gfnCompareFindText					: 주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 문자열을 비교하여 찾아진 결과를 반환
 * gfnGetBindColumnType					: 데이터의 타입반환
 * gfnGridDayPop						: 그리드에 일력PopupDiv를 호출
 * _gfnCallDatePopupDiv					: 칼렌다 팝업Div 생성
 * gfnGetRealColSizeText				: Grid Col size 에 따른 text 표현
 
 **************************************************************************/


// CssClass
pForm.gvGridCellFixedCssclass = "Cell_cell_Fixed"				// 열고정시 설정 css명
pForm.gvGridRowFixedCssclass = "Cell_row_Fixed"					// 행고정시 설정 css명
pForm.gvGridRowCellFixedCssclass = "Cell_row_cell_Fixed"		// 열고정,행고정시 설정 css명
pForm.gvGridCheckboxNoStatusAddCssclass = "GridCheckboxNoStatusAdd"		// checkbox, no 설정 css명

// 마우스 우클릭 팝업메뉴의 Height
pForm.gvGridPopMenuItemheight = 30;

// filter 관련
pForm.gvGridFilterExpandimage = "theme://images/btn_WF_Favorite_Sel.png";		// 필터용 Expandimage
pForm.gvExpandBtnSize	= 20;													// expand 버튼 표시 사이즈 추가

// 소트
// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
pForm.SORT_TOGGLE_CANCEL = true;

// Grid Head 에 정렬 상태를 표시할 텍스트
pForm.MARKER = ["▲", "▼"];// [오름차순표시, 내림차순표시]

// Grid 에 순번 동적으로 생성시 적용할 head text
pForm.gvNoName = "순번";

pForm.gvCommonCheckColsNm = "gridCmmCheck";			// 공통체크박스 컬럼명
pForm.gvCommonCheckboxTrueValue  = "Y";				// 공통체크박스 checkbox true  컬럼값
pForm.gvCommonCheckboxFalseValue = "N";				// 공통체크박스 checkbox false 컬럼값

// pForm.gvGridColDefaultFont	= 'normal 13px/13px "Noto Sans KR,sans-serif,Dotum,Arial"';	// Grid Col size 에 따른 text 표현시 사이즈 체크용 font
// pForm.gvGridColDefaultPadding = "2px 3px 2px 3px";										// Grid Col size 에 따른 text 표현시 사이즈 체크용 padding
pForm.gvGridColDefaultFont	= '400 15px/17px "NotoSansKR"'; // 'normal 15px/normal "NotoSansKR"'; //'15px "NotoSansKR"';										// Grid Col size 에 따른 text 표현시 사이즈 체크용 font
pForm.gvGridColDefaultPadding = "6px 7px"; // "4px 4px 4px 4px";										// Grid Col size 에 따른 text 표현시 사이즈 체크용 padding


/*
// Grid 의 property 정보
objGrid.griduserproperty	: arrProp 설정을 위한 정보[개발자]
objGrid.gridshowpopup		: 팝업메뉴 생성 제어 여부[개발자]

objGrid.orgformat0			: getFormatString() 디자인 시 정의된 전체 포맷
objGrid.orgformat1			: getCurFormatString() 동적으로 변경된 포맷을 반영한 현재표시되고 있는 포맷

objGrid.orgConfig           : autofittype, cellmovingtype, cellsizingtype, selecttype,readonly 디자인 시 정의된 정보저장

objGrid.bindObjDs			: getBindDataset() 바인딩 데이터셋 오프젝트
objGrid.keystringOrgin 		: 디자인시 bind dataset keystring정보
objGrid.keystringFlag		: 최초 Sort실행시 keystring기록 여부(true/false)
objGrid.keystring			: 최초 Sort실행시 keystring(초기화에 사용)

objGrid.orgCssclass 		: 디자인시 정의된 cssclass 정보 getCellProperty("body", i, "cssclass"); array

objGrid.arrProp				: gvGridDefaultPropList + objGrid.griduserproperty (! 처리 속성은 제외처리)
objGrid.arrPropPopup        : 그리드 팝업메뉴 List (gfnGridAddProp에서 생성)

objGrid.bSort				: 정렬기능 가능여부 "true" 
objGrid.sortInfos = {};		: objSortInfos[sColumnName] = { status: 0, text: headText, refCell: nRefCell};
objGrid.sortItems = [];		: objSortItems.push(sColumnName);
objGrid.sortKeyString 		: sort 관련 keystring 정보

objGrid.popupMenu			: 그리드마우스우클릭시 표현될 팝업메뉴 오브젝트(PopupMenu)
objGrid.popupMenu.grid 		: objGrid
objGrid.popupMenu.cellindex : e.cell;
objGrid.popupMenu.rowindex 	: e.row;

objGrid.fixedRow			: 행고정시 row index
objGrid.fixedCell			: 열고정 cell index

objGrid.lastFindText		: 마지막 찾기 text
objGrid.lastFindOption		: 마지막 찾기 option 정보
objGrid.lastFindCell		: 마지막 찾은 cell index
objGrid.lastFindRow			: 마지막 찾은 row index
objGrid._objTextArea		: 복사,붙여넣기를 사용 할 TextArea 오브젝트

objGrid.nCheckboxIndex 		: checkbox 적용 col index
objGrid.nNoIndex			: No(순번) col index

objGrid.bCopyPaste			: 복사모드 여부(true:복사모드) - 복사모드에서만 복사,붙여넣기 허용
objGrid.bUseCopy			: 복사모드에서 Copy  Key(Ctrl + C)사용여부
objGrid.bUsePaste			: 복사모드에서 Paste Key(Ctrl + V)사용여부

// addEventHandler
onheadclick					: this.gfnGrid_onheadclick [checkall, sort 기능]
oncellclick                 : this.gfnGrid_oncellclick [콤보dropdown]
onlbuttondown               : this.gfnGrid_onlbuttondown [showselection해제 기능][콤보dropdown, checkbox 멀티콘트롤 기능]
onrbuttonup					: this.gfnGrid_onrbuttonup [팝업메뉴가 있을때 메뉴팝업 호출 기능]
onkeydown					: this.gfnGrid_onkeydown   [복사, 붙여넣기 기능, 단축키 기능]

 ★ 1.griduserproperty == "none" 으로 설정시 모든 공통설정 취소
    2.grid에 바인드된 Dataset이 없는 경우 설정 취소
   - cellmovingtype ,nodatatext ,autoenter 설정
   - checkbox, no 설정
   - 그리드 포맷 저장 (디자인, 동적포맷)
   - 그리드 공통이벤트 추가(onheadclick, oncellclick, onrbuttonup)
   - 초기 keystring, cssclass 저장
 
 ★ Sort실행시 기존 Dataset에 설정된 keystring은 모두 Clear처리함. => Grid초기화 or Sort초기화시 복구
 ★ 디자인시 바인드 Dataset에 설정된 keystring이 변경되는 경우 objGrid.keystring 에도 keystring정보를 변경해야함.
    (Grid초기화 or Sort초기화시 사용)
*/

/**
 * grid property (griduserproperty)
	- 포멧추가( checkbox,no )
	- 팝업메뉴 추가
		열고정	colfix , 열고정해제 colfixfree , 행고정 rowfix , 행고정해제 rowfixfree , 그리드필터 filter , 그리드필터 해제 filterfree
		소트해제 sortfree , 찾기 find , 컬럼 숨기기/보이기 colhide , 
		복사하기(copy), 붙여넣기(paste), 초기화 initial
		복사모드(copy) , 복사모드해제(copyfree)

	- 전체목록 : "checkbox,no,sort,sortfree,colfix,rowfix,filter,find,colhide,copy,paste,initial";
	- 디폴트목록 : 정렬,정렬해제,열고정,행고정,필터,컬럼숨기기,찾기,복사,초기화
	- griduserproperty = false 로 설정시 전체설정 취소
**/
// pForm.gvGridDefaultPropList = "sort,sortfree,colfix,rowfix,filter,colhide,find,copy,initial";
pForm.gvGridDefaultPropList = "sort,sortfree,colfix,colhide,initial";

/*
기본값
소트	, 열고정	, 컬럼 숨기기/보이기	 , 초기화
*/

/**
 * @desc	Grid에 기능 추가
 *			userproperty (griduserproperty) : none 일때 기능 추가하지 않음.
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnSetGrid = function(objGrid)
{
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}

	// Grid의 binddataset설정
	var objDs = objGrid.getBindDataset();

	// grid에 바인드된 Dataset이 없는 경우 설정X
	if(this.gfnIsNull(objDs)) 
	{
		return;
	}
	else		// Validation에서 foucus 처리시 사용
	{
		objDs.bindgrid = objGrid;
	}
	
	// nodatatext 설정
	var sText = "데이터가 없습니다.";
	if(!this.gfnIsNull(nexacro.getApplication()) && !this.gfnIsNull(nexacro.getApplication().objForm) && !this.gfnIsNull(nexacro.getApplication().objForm.sNodatatext))
	{
		sText = nexacro.getApplication().objForm.sNodatatext;
	}
	if ( this.gfnIsNull(objGrid.nodatatext) ) objGrid.set_nodatatext(sText);
	
	// 전체 설정 취소옵션 시 설정X
	if(objGrid.griduserproperty == "none")
	{
		return;
	}
	
	//그리드 환경저장(디자인)
	objGrid.orgConfig = {
							autofittype   : objGrid.autofittype
						   ,cellmovingtype: objGrid.cellmovingtype
						   ,cellsizingtype: objGrid.cellsizingtype
						   ,selecttype    : objGrid.selecttype
						   ,readonly      : objGrid.readonly
						   ,showselection : objGrid.showselection
						};
						
	// ★ 그리드 기본기능 설정 (★★★ 적용 여부는 확인 필요)
	// if ( objGrid.cellmovingtype == "none" || objGrid.cellmovingtype == 'col' ) objGrid.set_cellmovingtype("col,band");
	
	// Grid 에서 편집이 가능한 Cell 이 선택되었을 때
	// 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다.
	// select - Cell 을 선택하면 편집모드용 컨트롤이 자동으로 활성화 됩니다
	if ( objGrid.autoenter == "none" ) objGrid.set_autoenter("select");	
	// if ( this.gfnIsNull(objGrid.scrollbarbarminsize) ) objGrid.set_scrollbarbarminsize(30);	//스크롤트랙바 최소사이즈
	
	// Grid의 UserProperty 설정 확인
	var arrProp = this._gfnGetGridUserProperty(objGrid);		// gvGridDefaultPropList + objGrid.griduserproperty (! 처리 속성은 제외처리)
	
	if(this.gfnIsNull(arrProp)) return; 						// 설정할 속성이 없을 경우
	
	objGrid.arrProp = arrProp;
	
	//팝업메뉴 목록 만들기
	this.gfnGridMakePopupMenuArray(objGrid);
	
	// 전체 포맷을 XML 형식의 문자열로 반환하여 변수에 저장( 디자인 포맷)
	objGrid.orgformat0 = objGrid.getFormatString();
	
 	// ★ 그리드 공통 포멧추가(format id별 모두 추가)
// 	var sOrgFormatId = objGrid.formatid;
//  	var arrFormatIdList = objGrid.getFormatIdList();
//  	//objGrid.set_enableredraw(false);
//  	for( var r=0, flen=arrFormatIdList.length; r<flen; r++ ) 
// 	{
//  		objGrid.set_formatid(arrFormatIdList[r]);
//  		this.gfnGridAddProp(objGrid);	// checkbox , no + bSort + arrPropPopup
//  	}
//  	objGrid.set_formatid(sOrgFormatId);
 	//objGrid.set_enableredraw(true);
	this.gfnGridAddProp(objGrid);	// checkbox , no + bSort + arrPropPopup
	
	// 전체 포맷을 XML 형식의 문자열로 반환하여 변수에 저장( 동적으로 변경된 포맷을 반영 )
	objGrid.orgformat1 = this.gfnGridGetCurrFormatStr(objGrid);
	
	// initial - 초기화 시 keystring 원복을 위해 추가
	objGrid.keystringOrgin = "";
	objGrid.keystringFlag  = false;
	objGrid.keystring      = "";
	objGrid.bindObjDs = "";
	if(!this.gfnIsNull(objDs))
	{
		objGrid.keystringOrgin = objDs.keystring;
		objGrid.keystringFlag  = false;
		objGrid.keystring      = objDs.keystring;
		
		objGrid.bindObjDs = objDs;
	}
	
	// Grid 의 초기 cssclass 저장
	objGrid.orgCssclass = [];
	for(i=0; i<objGrid.getCellCount("body"); i++)
	{
		objGrid.orgCssclass[i] = objGrid.getCellProperty("body", i, "cssclass");
	}
	
	//팝업메뉴 생성
	if(objGrid.gridshowpopup != "false")
	{			
		this.gfnMakeGridPopupMenu(objGrid);
	}
	
	/*********************************************** 이벤트추가 START ***********************************************/	
	var nIdx = objGrid.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this); 	// 헤드클릭이벤트추가[checkall, sort 기능]
	//trace(objGrid.name + ":::::::::nIdx===="+nIdx);
	
	objGrid.addEventHandler("onkeydown", this.gfnGrid_onkeydown, this);		//onkeydown이벤트[복사, 붙여넣기 기능, 단축키 기능]
	
	objGrid.addEventHandler("oncellclick", this.gfnGrid_oncellclick, this);	//oncellclick이벤트[콤보dropdown]
	
	
	//팝업메뉴List가 존재할때 rbutton이벤트 추가
	if(objGrid.gridshowpopup != "false" && objGrid.arrPropPopup.length > 0)
	{				
		objGrid.addEventHandler("onrbuttonup", this.gfnGrid_onrbuttonup, this);
	}

	//[showselection해제 기능][콤보dropdown, checkbox 멀티콘트롤 기능] lbutton이벤트 추가
	objGrid.addEventHandler("onlbuttondown", this.gfnGrid_onlbuttondown, this); 	// onlbuttondown이벤트[showselection해제 기능][콤보dropdown, checkbox 멀티콘트롤 기능]
	
	// oncloseup 이벤트 추가
	// combo 일때 아래행으로 이동시켜 2번 클릭이 아닌 1번 클릭으로 콤보 오픈되게 처리
	// nIndex = objGrid.addEventHandler("oncloseup", this.gfnGridInitOncloseup, this);

	// oncellclick 이벤트 추가
	// 그리드내 텍스트 박스(normal, text, textarea) 클릭시 셀 텍스트 선택되게 처리
	// date , mask , readonly, text, textarea , normal 에 대해서만 적용 요청으로 수정
	nIndex = objGrid.addEventHandler("oncellclick", this.gfnGridInitOncellclick, this);
	/*********************************************** 이벤트추가 END *************************************************/
};	

/**
 * @desc	그리드 설정 내부함수 (Grid Object의 UserProperty를 Array형태로 반환한다.) 
 *			gvGridDefaultPropList + objGrid.griduserproperty (! 처리 속성은 제외처리)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */ 
pForm._gfnGetGridUserProperty = function (objGrid)
{
	var sProp = objGrid.griduserproperty;
	var i, j;
	var arrdefault = this.gvGridDefaultPropList.split(",");
	var arrprop = [];
	
	if(!this.gfnIsNull(sProp))
	{
		arrprop = sProp.split(",");
		for(i=0; i<arrprop.length; i++)
		{
			if( arrprop[i].indexOf("!") == 0 )
			{
				// 디폴트 prop에서제거
				for(j=0; j<arrdefault.length; j++)
				{
					if( this.gfnTrim(arrdefault[j]) == this.gfnTrim(arrprop[i].substr(1)) )
					{
						arrdefault[j] = "";
					}
				}
				arrprop[i] = "";
			}
		}
	}
	
	var arrmyprop = [];
	//디폴트 prop추가
	for(i=0; i< arrdefault.length; i++)
	{
		if(!this.gfnIsNull(arrdefault[i]))
		{
			arrmyprop.push(this.gfnTrim(arrdefault[i]));
		}
	}
	
	for(i=0; i< arrprop.length; i++)
	{
		if(!this.gfnIsNull(arrprop[i]))
		{
			arrmyprop.push(this.gfnTrim(arrprop[i]));
		}
	}
	
	return arrmyprop;
};

/**
 * @desc	Grid의 팝업메뉴 항목 설정
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridMakePopupMenuArray = function(objGrid)
{
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}
	
	var i;
	var arrProp = objGrid.arrProp;
	objGrid.arrPropPopup = [];
	var sPropMenu = "";
	for(i=0; i<arrProp.length; i++)
	{
		sPropMenu = this.gfnTrim(arrProp[i]);
		switch(sPropMenu)
		{
			case "checkbox":
				//add format
				break;
			case "no":
				//add format
				break;
			case "sort":
				objGrid.bSort = "true";
				break;
			default: 
				if ( sPropMenu == "copy" ) 
				{
					objGrid.bUseCopy = "true";
					sPropMenu = "copy";
				} 
				else if ( sPropMenu == "paste" ) 
				{
					objGrid.bUsePaste = "true";
					sPropMenu = "copy";
				}
				objGrid.arrPropPopup.push(sPropMenu);
				break;
		}
	}
};

/**
 * @desc	Grid에 기능 추가(addCol..) function 호출 (checkbox , no , sort property - true)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridAddProp = function(objGrid)
{
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}
	
	var i;
	var arrProp = objGrid.arrProp;
	//trace("arrProp:"+arrProp);
	var objDs = objGrid.getBindDataset();
	
	//이벤트 False
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false);
	objDs.set_enableevent(false);
	
	var sPropMenu = "";
	for(i=0; i<arrProp.length; i++)
	{
		sPropMenu = this.gfnTrim(arrProp[i]);
		switch(sPropMenu)
		{
			case "checkbox":
				this.gfnGridCheckboxNoStatusAdd(objGrid, objDs, "checkbox");
				break;
			case "no":
				this.gfnGridCheckboxNoStatusAdd(objGrid, objDs, "no");
				break;
			default: 
				break;
		}
	}
	
	//이벤트 True
	objGrid.set_enableevent(true);
	objGrid.set_enableredraw(true);
	objDs.set_enableevent(true);
};


/**
 * @desc	Grid에 기능 추가(addCol..) 실제처리 (checkbox , no)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {object} objDs			- 대상데이터셋
 * @param {String} sAddProp			- 기능 (checkbox , no)
 * @return N/A
 */
pForm.gfnGridCheckboxNoStatusAdd = function(objGrid, objDs, sAddProp)
{
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}
	
	if (!(objDs instanceof nexacro.NormalDataset))
	{
		trace("Dataset Component 확인");
		return;
	}
	
	var i, j;
	var nHeadColIndex = 0;
	var nBodyColIndex = 0;
	var bUpdatecontrol = objDs.updatecontrol;
	
	var sBand = objGrid.getFormatColProperty(0,"band");;		//enumBand : left, body, right
	
	// Grid 표기순서 : checkbox , no
	//objGrid.nCheckboxIndex 	: checkbox 적용 col index
	//objGrid.nNoIndex			: no col index
	if(sAddProp == "checkbox")
	{
		//기존 설정여부 확인
		if (objGrid.getCellProperty("head" , 0, "displaytype") == "checkboxcontrol" 
		 && objGrid.getCellProperty("head" , 0, "edittype") == "checkbox"
		 && objGrid.getCellProperty("head" , 0, "cssclass") == this.gvGridCheckboxNoStatusAddCssclass) 
		{
			return;
		}
	}
	else if(sAddProp == "no")
	{
		//checkbox 확인
		if (objGrid.getCellProperty("head" , 0, "displaytype") == "checkboxcontrol" 
		 && objGrid.getCellProperty("head" , 0, "edittype") == "checkbox"
		 && objGrid.getCellProperty("head" , 0, "cssclass") == this.gvGridCheckboxNoStatusAddCssclass) 
		{
			nHeadColIndex++;
			nBodyColIndex++;
		}
		
		//기존 설정여부 확인
		if (objGrid.getCellProperty("head" , nHeadColIndex, "text") == this.gvNoName 
		 && objGrid.getCellProperty("head" , nHeadColIndex, "cssclass") == this.gvGridCheckboxNoStatusAddCssclass) 
		{
			return;
		}
	}
		
	var nFormatRowCount = objGrid.getFormatRowCount();
	var nHeadCount = -1;
	var nBodyCount = -1;
	for(i=0; i<nFormatRowCount; i++)
	{
		if(objGrid.getFormatRowProperty(i, "band") == "head") nHeadCount++;
		if(objGrid.getFormatRowProperty(i, "band") == "body") nBodyCount++;
	}

	var idx = -1;
	// 체크박스
	if(sAddProp == "checkbox")
	{
		objDs.set_enableevent(false); 
		
		for(j=0; j<objDs.getColCount(); j++)
		{
			var tmpcol = objDs.getColID(j);
			if(tmpcol == this.gvCommonCheckColsNm)		// "gridCmmCheck"
			{
				idx = j;
			}
		}
		
		if(idx < 0) 
		{
			objDs.addColumn(this.gvCommonCheckColsNm, "STRING", 1);
		}
		
		objDs.set_updatecontrol(false);
		var nCount = objDs.getRowCount();
		for(j=0;j<nCount;j++)
		{
			objDs.setColumn(j, this.gvCommonCheckColsNm, this.gvCommonCheckboxFalseValue);
		}
		//objDs.set_updatecontrol(true);
		objDs.set_updatecontrol(bUpdatecontrol);
		
		objGrid.insertContentsCol(sBand, nBodyColIndex);			
		objGrid.setFormatColProperty(nBodyColIndex, "size", "40");	
		objGrid.setCellProperty("head", nHeadColIndex, "cssclass", this.gvGridCheckboxNoStatusAddCssclass);	//공통컬럼표시용[내부]
		objGrid.setCellProperty("head", nHeadColIndex, "displaytype", "checkboxcontrol");
		objGrid.setCellProperty("head", nHeadColIndex, "edittype", "checkbox");
		objGrid.setCellProperty("head", nHeadColIndex, "text", "0");
		
		objGrid.setCellProperty("body", nBodyColIndex, "displaytype", "checkboxcontrol");
		objGrid.setCellProperty("body", nBodyColIndex, "edittype", "checkbox");
		objGrid.setCellProperty("body", nBodyColIndex, "checkboxfalsevalue", this.gvCommonCheckboxFalseValue);
		objGrid.setCellProperty("body", nBodyColIndex, "checkboxtruevalue", this.gvCommonCheckboxTrueValue);
		objGrid.setCellProperty("body", nBodyColIndex, "text", "bind:"+this.gvCommonCheckColsNm);		// gridCmmCheck
		objGrid.setCellProperty("body", nBodyColIndex, "calendarheadformat", "false");		// 엑셀Export제외용
		
		
		objGrid.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);	
		objGrid.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);		

		//gfnHeadCheckSelectAll사용시 head checkbox상태 변경용 이벤트 추가
 		var sExpr = "dataset.getCaseCount(\""+this.gvCommonCheckColsNm+"==undefined || "+this.gvCommonCheckColsNm+"=='' || "+this.gvCommonCheckColsNm+"=='"+this.gvCommonCheckboxFalseValue+"'\") == 0 ? '1' : '0'";
   		objGrid.setCellProperty("head", nHeadColIndex, "expr", sExpr);
		
// 		nHeadColIndex++;
//		nBodyColIndex++;
		objGrid.nCheckboxIndex = nBodyColIndex;		// checkbox 적용 col index
		
		//band를 left에 배치
		objGrid.setFormatColProperty(nBodyColIndex, "band", "left");
	}
	
	
	// 번호
	if(sAddProp == "no")
	{
		objGrid.insertContentsCol(sBand, nBodyColIndex);	
		objGrid.setFormatColProperty(nBodyColIndex, "size", "50");	
 		// objGrid.setCellProperty("head", nHeadColIndex, "text", sNo);
		objGrid.setCellProperty("head", nHeadColIndex, "cssclass", this.gvGridCheckboxNoStatusAddCssclass);	//공통컬럼표시용[내부]
		objGrid.setCellProperty("head", nHeadColIndex, "text", this.gvNoName);			// 순번
		objGrid.setCellProperty("head", nHeadColIndex, "textAlign","center");
		
		objGrid.setCellProperty("body", nBodyColIndex, "text","expr:currow+1");
		objGrid.setCellProperty("body", nBodyColIndex, "textAlign","center");
		objGrid.setCellProperty("body", nBodyColIndex, "cssclass","cell_TextCenter");
		objGrid.setCellProperty("body", nBodyColIndex, "calendarheadformat", "false");		// 엑셀Export제외용
		objGrid.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);	
		objGrid.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);			
		
// 		nHeadColIndex++;
//		nBodyColIndex++;
		objGrid.nNoIndex = nBodyColIndex;		// no col index
		
		//band를 left에 배치
		objGrid.setFormatColProperty(nBodyColIndex, "band", "left");
	}
	
	objDs.set_updatecontrol(bUpdatecontrol);
};

/**
 * @desc	그리드 Current Format 전체 가져오기
 * @param	{Grid} objGrid : 그리드 Object
 * @Return 	: 그리드 전체(현재) Formats
**/ 
pForm.gfnGridGetCurrFormatStr = function(objGrid)
{
	var sOrgFormatId = objGrid.formatid;
	var arrFormatIdList = objGrid.getFormatIdList();
	objGrid.set_enableredraw(false);
	var sFormats = "<Formats>";	
	for( i=0, len=arrFormatIdList.length; i<len; i++ ) 
	{
		objGrid.set_formatid(arrFormatIdList[i]);
		sFormats += objGrid.getCurFormatString();
	}
	sFormats += "</Formats>";
	objGrid.set_formatid(sOrgFormatId);
	objGrid.set_enableredraw(true);
	
	return sFormats;
};

/**
 * @desc	그리드마우스우클릭시 표현될 팝업메뉴생성
 * @param {object} objGrid			- 대상 Grid Object
 * 속성
 *		- 열고정	colfix , 열고정해제 colfixfree , 행고정 rowfix , 행고정해제 rowfixfree , 그리드필터 filter , 그리드필터 해제 filterfree ,
 *		- 소트해제 sortfree , 찾기 find , 컬럼 숨기기/보이기 colhide , 엑셀 내보내기 excelexport , 엑셀 가져오기 excelimport , 복사모드(일반모드) copy, 초기화 initial
 * @return N/A
 */
pForm.gfnMakeGridPopupMenu = function(objGrid)
{
	var i,j;
	var objApp 		 = nexacro.getApplication();
	var objMenuDs	 = objApp.gdsGridPopupMenu;
	var objParentForm= objGrid.parent;
	var arrPropPopup = objGrid.arrPropPopup;
	
	var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
    var oPopMenuDs = objParentForm.objects[sPopMenuDs];
	if ( oPopMenuDs ) 
	{
		oPopMenuDs.filter("");
	} 
	else 
	{
		oPopMenuDs 	 = new Dataset(sPopMenuDs);
		objParentForm.addChild(sPopMenuDs, oPopMenuDs); 
	}
	oPopMenuDs.copyData(objApp.gdsGridPopupMenu, true);
	
	var sMenu, sMenuGroup;
	for (i=0; i<arrPropPopup.length; i++) 
	{
		for ( var j=0, len=oPopMenuDs.rowcount; j<len; j++ )
		{
			sMenuGroup = oPopMenuDs.getColumn(j, "group");
			if (sMenuGroup == arrPropPopup[i])
			{
				sMenu = oPopMenuDs.getColumn(j, "id");
				//복사모드 <-> 복사모드해제 토글
				if ( sMenu == "copy" ) 
				{
					if ( objGrid.bCopyPaste == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) 
					{
						oPopMenuDs.setColumn(j, "enable", "false");
					} 
					else 
					{
						oPopMenuDs.setColumn(j, "enable", "true");
					}
				}
				else if ( sMenu == "copyfree" ) 
				{
					if ( objGrid.bCopyPaste == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) 
					{
						oPopMenuDs.setColumn(j, "enable", "true");
					} 
					else 
					{
						oPopMenuDs.setColumn(j, "enable", "false");
					}
				}
				else if( sMenu == "colfix" ) 
				{
					if ( objGrid.autofittype != "none" || objGrid.hscrollbar.trackbar.visible == false ) 
					{
						oPopMenuDs.setColumn(j, "enable", "false");
					} 
					else 
					{
						oPopMenuDs.setColumn(j, "enable", "true");
					}
				}
				else if( sMenu == "colfixfree" ) 
				{
					if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1 ) 
					{
						oPopMenuDs.setColumn(j, "enable", "true");
					} 
					else 
					{
						oPopMenuDs.setColumn(j, "enable", "false");
					}
				}
				else if( sMenu == "rowfixfree" ) 
				{
					if(!this.gfnIsNull(objGrid.fixedRow) && objGrid.fixedRow > -1 ) 
					{
						oPopMenuDs.setColumn(j, "enable", "true");
					} 
					else 
					{
						oPopMenuDs.setColumn(j, "enable", "false");
					}
				}				
				else if ( sMenu == "sortfree" && this.gfnIsNull(objGrid.sortKeyString) ) //Sort기능이 없는경우(or 소트안된상태)
				{	
					//trace("sortKeystring===="+objGrid.sortKeyString);
					oPopMenuDs.setColumn(j, "enable", "false");
				}
				else if ( sMenu == "filterfree" && this.gfnIsNull(objGrid.getBindDataset().filterstr) == true ) //filterstr이 없는경우
				{	
					oPopMenuDs.setColumn(j, "enable", "false");
				}
				else if ( sMenu == "desh" ) 
				{
					if ( oPopMenuDs.getCaseCount( "group=='" + sMenuGroup + "' && enable=='true'", j - 2, j) > 0 ) oPopMenuDs.setColumn(j, "enable", "true");
				}
				else 
				{
					oPopMenuDs.setColumn(j, "enable", "true");
				}
			}
		}
	}
	oPopMenuDs.filter("enable=='true'");
	
	var nLastRow = oPopMenuDs.getRowCount() - 1;
	if ( oPopMenuDs.getColumn(nLastRow, "id") == "desh" ) 
	{
		oPopMenuDs.setColumn(nLastRow, "enable", "false");
		oPopMenuDs.filter("enable=='true'");
	}
	
	var sPopMenu = "pmn"+objGrid.name+"_"+this.name;
    var oPopMenu = objParentForm.components[sPopMenu];
	if ( !oPopMenu ) 
	{
		var oPopMenu = new PopupMenu(sPopMenu, 0, 0, 100, 100);
		objParentForm.addChild(oPopMenu.name, oPopMenu);
		
		oPopMenu.set_innerdataset(sPopMenuDs);
		oPopMenu.set_captioncolumn("caption");
		oPopMenu.set_enablecolumn("enable");
		oPopMenu.set_idcolumn("id");
		oPopMenu.set_levelcolumn("level");
		oPopMenu.addEventHandler("onmenuclick", this.gfnPopupmenu_onmenuclick, objParentForm);
		oPopMenu.show();
		oPopMenu.set_cssclass("pmenu_WF_GridMenu");
		
		// oPopMenu.set_itemheight(30);
		oPopMenu.set_itemheight(this.gvGridPopMenuItemheight);
		
		oPopMenu.grid = objGrid;
		objGrid.popupMenu = oPopMenu;
	}
	
	return oPopMenuDs.getRowCount();
};


/**
 * @desc	내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
 * @param {object} objPopupMenu		- PopupMenu
 * @param {event} e					- 팝업메뉴클릭이벤트
 * @return N/A
 */
pForm.gfnPopupmenu_onmenuclick = function(objPopupMenu, e)
{
	var sSelectId   = e.id;
	var objGrid	   = objPopupMenu.grid;
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}	
	var nCellIndex = objPopupMenu.cellindex;	
	var nRowIndex  = objPopupMenu.rowindex;
	
	switch(sSelectId) 
	{
		case "colfix" :			// 열고정
			this.gfnGridCellFix(objGrid, nCellIndex, nRowIndex);
			break;
		case "colfixfree" :		// 열고정해제
			this.gfnGridCellFree(objGrid);
			break;
		case "rowfix" :			// 행고정
			this.gfnGridrowFix(objGrid, nRowIndex);
			break;
		case "rowfixfree" :		// 행고정해제
			this.gfnGridRowFree(objGrid);
			break;
		case "filter" : 		// 그리드필터
			this.gfnGridFilter(objGrid);
			break;
		case "filterfree" : 	// 그리드필터 해제
			this.gfnGridFilterFree(objGrid);
			break;
		case "sortfree" : 		// 소트해제
			this.gfnGridClearSort(objGrid);
			break;
		case "find" : 			// 찾기
			if(nRowIndex == -1)		// head 일때 body 기준 cell 변환
			{
				nCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nCellIndex, true);
			}
			this.gfnGridDataFind(objGrid, nCellIndex, nRowIndex);
			break;
		case "colhide" : 		// 컬럼 숨기기/보이기
			this.gfnGridColHideShow(objGrid);
			break;		
		case "copy" : 			// 복사모드
			this.gfnGridCopyApply(objGrid);
			break;	
		case "copyfree" :		// 일반모드
			this.gfnGridCopyFreeApply(objGrid);
			break;
		case "initial" : 		// 초기화
			// keystring
			if(!this.gfnIsNull(objGrid.bindObjDs))
			{
				objGrid.bindObjDs.set_keystring(objGrid.keystring);
			}
			objGrid.set_formats(objGrid.orgformat1);	//초기 동적으로 변경된 포맷을 반영

			this.gfnGridCellFree(objGrid);			// 열고정해제
			this.gfnGridRowFree(objGrid);			// 행고정해제
			this.gfnGridFilterFree(objGrid); 		// 그리드필터 해제
			this.gfnGridClearSort(objGrid); 		// 소트해제
			this.gfnGridCopyFreeApply(objGrid); 	// 복사모드해제
			break;
		default: 
			break;
	}
};


/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 열고정(colfix)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {number} nCellIdx			- 열고정 셀인덱스
 * @param {number} nRowIdx			- 열고정 로우 인덱스 
 * @return N/A
 */
pForm.gfnGridCellFix = function(objGrid, nCellIdx, nRowIdx)
{
	var sBandType;
	if(nRowIdx == -1) sBandType = "Head";
	else if(nRowIdx == -2) sBandType = "Summary";
	else sBandType = "Body";
	
	var nCol 	 = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "col"));
	var nColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "rowspan"));
	var nRealCol;
	var nRealColSpan;
	var nRealCol_end;
	//공통format 추가여부 확인
	var nComColCnt = 0;
	if ( objGrid.nCheckboxIndex > -1 ) nComColCnt++;	//checkbox 적용여부
	if ( objGrid.nNoIndex > -1 ) nComColCnt++;	//no 적용여부
	// if ( objGrid.nStatusIndex > -1 ) nComColCnt++;	//status 적용여부

	if ( nCol < nComColCnt ) return;	//공통컬럼은 이미 left로 col고정된 상태임
	
	var nBodyRowCount = 0;
	for(i=0;i<objGrid.getFormatRowCount();i++)
	{
		if(objGrid.getFormatRowProperty(i,'band') == "body")
		{
			nBodyRowCount++;
		}
	}
	objGrid.set_enableredraw(false);
	
	objGrid.setFormatColProperty(0, "band", "body");
	
	// 실제 적용할 cell 찾기 (merge 로 인해 선택한 cell 이 아닌 다른 cell 에 고정css 처리해야 할 수도 있음)
	for(i=0; i<objGrid.getCellCount(sBandType); i++)
	{
		nRealCol = nexacro.toNumber(objGrid.getCellProperty(sBandType, i, "col"));
		nRealColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, i, "colspan"));		
		nRealCol_end = nRealCol+nRealColSpan-1;
		if(nRealCol == nCol||nRealCol_end==nCol)
		{
			if(nRealColSpan>1)
			{
				nCol = nRealCol_end;
			}
			else
			{
				nCol = nRealCol_end;
			}
		}
		else
		{
// 			objGrid.setCellProperty("Head", i, "line", "");
		}
	}
	
	var sOrgCssclass = "";
	var sFixCssclass = "";
	var sExpr = "";
	for(i=0; i<objGrid.getCellCount("Body"); i++)
	{
		// 열고정 대상 col 일때
		if(nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == nCol)
		{
			sOrgCssclass = objGrid.orgCssclass[i];
			// org Cssclass 가 expr: 쓰지 않고 적용된 상태일때
			if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
			{
				// 행고정 적용한 경우
				if(objGrid.fixedRow > -1 && 
				 ((nBodyRowCount > 1 && nBodyRowCount == objGrid.getCellProperty("body", i, "rowspan"))
				 || (objGrid.getCellProperty("body", i, "row") == (nBodyRowCount-1)))
				)
				{
					sFixCssclass = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowCellFixedCssclass + '":"' + sOrgCssclass + ',' + this.gvGridCellFixedCssclass + '"';
				}
				else
				{
					sFixCssclass = sOrgCssclass + ',' + this.gvGridCellFixedCssclass;
				}
			}
			else	// org Cssclass 가 null 이거나 expr 이 사용된 경우
			{
				// 행고정 적용한 경우
				if(objGrid.fixedRow > -1 && 
				 ((nBodyRowCount > 1 && nBodyRowCount == objGrid.getCellProperty("body", i, "rowspan"))
				 || (objGrid.getCellProperty("body", i, "row") == (nBodyRowCount-1)))
				)
				{
					if ( this.gfnIsNull(sOrgCssclass) ) //null
					{	
						sFixCssclass = 'expr:comp.fixedRow==currow?"'+ this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '"';
					} 
					else 
					{	//expr사용
						var sOrg = sOrgCssclass.replace("expr:","");
						sFixCssclass = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '")';
					}
				}
				else
				{
					if ( this.gfnIsNull(sOrgCssclass) ) //null
					{	
						sFixCssclass = this.gvGridCellFixedCssclass;
					} 
					else 	//expr사용
					{	
						var sOrg = sOrgCssclass.replace("expr:","");
						sFixCssclass = 'expr:(' + sOrg + ') + "," + "' + this.gvGridCellFixedCssclass + '"';
					}
				}
			}
			objGrid.setCellProperty("Body", i, "cssclass", sFixCssclass);
		}
		else
		{
			if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
			&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
			{
				sOrgCssclass = objGrid.orgCssclass[i];
				if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
				{
					if(objGrid.fixedRow > -1 && ((nBodyRowCount > 1 && nBodyRowCount == objGrid.getCellProperty("body", i, "rowspan"))
					 || (objGrid.getCellProperty("body", i, "row") == (nBodyRowCount-1))) )
					{
						sFixCssclass = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowFixedCssclass + '":"' + sOrgCssclass + '"';
					}
					else
					{
						sFixCssclass = sOrgCssclass;
					}
				}
				else
				{
					if(objGrid.fixedRow > -1 && ((nBodyRowCount > 1 && nBodyRowCount == objGrid.getCellProperty("body", i, "rowspan"))
					 || (objGrid.getCellProperty("body", i, "row") == (nBodyRowCount-1))) )
					{
						if ( this.gfnIsNull(sOrgCssclass) ) //null
						{	
							sFixCssclass = 'expr:comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":""';
						} 
						else	//expr사용 
						{	
							var sOrg = sOrgCssclass.replace("expr:","");
							sFixCssclass = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":"")';
						}
					}
					else
					{
						sFixCssclass = sOrgCssclass;
					}
				}
				objGrid.setCellProperty("Body", i, "cssclass", sFixCssclass);
			}
		}
	}
	objGrid.fixedCell = nCol;
	objGrid.setFormatColProperty(nCol, "band", "left");	
	objGrid.set_enableredraw(true);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 열고정해제(colfixfree)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridCellFree = function(objGrid)
{
	//공통format 추가여부 확인
	var nComColCnt = 0;
	if ( objGrid.nCheckboxIndex > -1 ) nComColCnt++;	//checkbox 적용여부
	if ( objGrid.nNoIndex > -1 ) nComColCnt++;	//no 적용여부
	// if ( objGrid.nStatusIndex > -1 ) nComColCnt++;	//status 적용여부

	objGrid.set_enableredraw(false);
	for(i = nComColCnt; i< objGrid.getFormatColCount(); i++)	//공통format제외한 컬럼 free적용
	{		
		objGrid.setFormatColProperty(i, "band", "body");	
	}
	
	var sCurrCssclass = "";	
	for(i=0; i<objGrid.getCellCount("Body"); i++)
	{
		sCurrCssclass = objGrid.getCellProperty("Body", i, "cssclass");
		if(!this.gfnIsNull(sCurrCssclass))
		{
			if(sCurrCssclass.indexOf(","+this.gvGridCellFixedCssclass)>-1)
			{
				sCurrCssclass = sCurrCssclass.replace(","+this.gvGridCellFixedCssclass,"");
			}
			if(sCurrCssclass.indexOf(this.gvGridCellFixedCssclass)>-1)
			{
				sCurrCssclass = sCurrCssclass.replace(this.gvGridCellFixedCssclass,"");
			}
			if(sCurrCssclass.indexOf(this.gvGridRowCellFixedCssclass)>-1)
			{
				sCurrCssclass = sCurrCssclass.replace(this.gvGridRowCellFixedCssclass, this.gvGridRowFixedCssclass);
			}
		}
		
		objGrid.setCellProperty("Body", i, "cssclass", sCurrCssclass);
	}	
	objGrid.set_enableredraw(true);
	objGrid.fixedCell = -1;
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 행고정 (rowfix)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */ 
pForm.gfnGridrowFix = function (objGrid, nRowIndex )
{
	if(nRowIndex < 0) return;
	objGrid.fixedRow = nRowIndex;
	objGrid.setFixedRow(-1);
	objGrid.setFixedRow(nRowIndex);
			
	var i;
	var nBodyRowCount = 0;
	for(i=0;i<objGrid.getFormatRowCount();i++)
	{
		if(objGrid.getFormatRowProperty(i,'band') == "body")
		{
			nBodyRowCount++;
		}
	}
	
	var sExpr = "";
	var sOrgCssclass = "";
	var sFixCssclass = "";
	
	objGrid.set_enableredraw(false);
	
	for(i=0; i<objGrid.getCellCount("body"); i++)
	{
		sExpr = "";
		sOrgCssclass = objGrid.orgCssclass[i];
		sFixCssclass = "";
		
		// body 가 2줄 이상일때
		if(nBodyRowCount > 1)
		{
			// merge 된 경우
			if(nBodyRowCount == objGrid.getCellProperty("body", i, "rowspan"))
			{
				if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
				{
					// 열고정 적용한 경우
					if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
					&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
					{
						sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowCellFixedCssclass + '":"' + sOrgCssclass + ',' + this.gvGridCellFixedCssclass + '"';
					}
					else
					{
						sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowFixedCssclass + '":"' + sOrgCssclass + '"';
					}					
				}
				else
				{
					// 열고정 적용한 경우
					if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
					&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
					{
						if ( this.gfnIsNull(sOrgCssclass) ) //null
						{	
							sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '"';
						} 
						else 	//expr
						{	
							var sOrg = sOrgCssclass.replace("expr:","");
							sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '")';
							
						}
					}
					else
					{
						if ( this.gfnIsNull(sOrgCssclass) ) //null
						{	
							sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":""';
						} 
						else 	//expr
						{	
							var sOrg = sOrgCssclass.replace("expr:","");
							sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":"")';
						}
					}	
				}
			}
			else	// merge 가 되지 않은 경우
			{
				if(objGrid.getCellProperty("body", i, "row") == (nBodyRowCount-1))		// 맨아래 Row에만 적용
				{
					if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
					{
						// 열고정 적용한 경우
						if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
						&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
						{
							sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowCellFixedCssclass + '":"' + sOrgCssclass + ',' + this.gvGridCellFixedCssclass + '"';
						}
						else
						{
							sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowFixedCssclass + '":"' + sOrgCssclass + '"';
						}					
					}
					else
					{
						// 열고정 적용한 경우
						if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
						&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
						{
							if ( this.gfnIsNull(sOrgCssclass) ) //null
							{	
								sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '"';
							} 
							else	//expr 
							{	
								var sOrg = sOrgCssclass.replace("expr:","");
								sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '")';
							}
						}
						else
						{
							if ( this.gfnIsNull(sOrgCssclass) ) //null
							{	
								sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":""';
							} 
							else 
							{
								var sOrg = sOrgCssclass.replace("expr:","");
								sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":"")';
							}
						}	
					}
				}
			}
		}
		else	// body 가 1줄 일때
		{
			if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
			{
				// 열고정 적용한 경우
				if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
				&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
				{
					sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowCellFixedCssclass + '":"' + sOrgCssclass + ',' + this.gvGridCellFixedCssclass + '"';
				}
				else
				{
					sExpr = 'expr:comp.fixedRow==currow?"' + sOrgCssclass + ',' + this.gvGridRowFixedCssclass + '":"' + sOrgCssclass + '"';
				}					
			}
			else
			{
				// 열고정 적용한 경우
				if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1
				&& (nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell))
				{
					if ( this.gfnIsNull(sOrgCssclass) ) 	//null
					{
						sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '"';
					} 
					else 
					{
						var sOrg = sOrgCssclass.replace("expr:","");
						sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowCellFixedCssclass + '":"' + this.gvGridCellFixedCssclass + '")';
					}
				}
				else
				{
					if ( this.gfnIsNull(sOrgCssclass) )	//null
					{	
						sExpr = 'expr:comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":""';
					} 
					else //expr
					{	
						var sOrg = sOrgCssclass.replace("expr:","");
						sExpr = 'expr:(' + sOrg + ') + "," + (comp.fixedRow==currow?"' + this.gvGridRowFixedCssclass + '":"")';
					}
				}	
			}			
		}
		
		if(!this.gfnIsNull(sExpr))
		{
			objGrid.setCellProperty("body", i, "cssclass", sExpr);
		}		
	}
	objGrid.set_enableredraw(true);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 행고정해제 (rowfixfree)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */ 
pForm.gfnGridRowFree = function (objGrid)
{
	objGrid.fixedRow = -1;
	objGrid.setFixedRow(objGrid.fixedRow);
	
	objGrid.set_enableredraw(false);
	var sExpr = "";
	
	if(!this.gfnIsNull(objGrid.fixedCell) && objGrid.fixedCell > -1)
	{
		// Cell 고정에서 Row 해제시
		for(i=0; i<objGrid.getCellCount("body"); i++)
		{
			// cell 고정 대상 cell 일때
			if(nexacro.toNumber(objGrid.getCellProperty("Body", i, "col"))+nexacro.toNumber(objGrid.getCellProperty("Body", i, "colspan"))-1 == objGrid.fixedCell)
			{
				sOrgCssclass = objGrid.orgCssclass[i];
				if(!this.gfnIsNull(sOrgCssclass) && sOrgCssclass.indexOf("expr:") < 0)
				{
					sFixCssclass = sOrgCssclass + "," + this.gvGridCellFixedCssclass;
				}
				else
				{
					sFixCssclass = this.gvGridCellFixedCssclass;
				}
				
				objGrid.setCellProperty("Body", i, "cssclass", sFixCssclass);
			}		
			else
			{
				sFixCssclass = objGrid.orgCssclass[i];
				objGrid.setCellProperty("body", i, "cssclass", sFixCssclass);
			}
		}
	}
	else
	{
		// Cell 고정에서 Row 해제시
		for(i=0; i<objGrid.getCellCount("body"); i++)
		{
			sFixCssclass = objGrid.orgCssclass[i];
			objGrid.setCellProperty("body", i, "cssclass", sFixCssclass);
		}
	}

	objGrid.set_enableredraw(true);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 필터(filter)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridFilter = function(objGrid)
{
	var sPopupId	= "comGridFilterPop";
	var sPopupUrl	= "Frame_Popup::comGridFilterPop.xfdl";
	//var oPosition	= {width:590,height:417};
	var objArgs		= {pvGrid:objGrid};
	var oOption		= {showtitlebar:true,titletext:"데이터 필터 설정"};
	
	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "gfnGridFilterCallback", oOption);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 필터(filter) 팝업 콜백
 * @param {string} sId				- popupid
 * @param {string} sVal				- return value
 * @return N/A
 */ 
pForm.gfnGridFilterCallback = function(sId, sVal)
{
	//TODO
	// sId : comGridFilterPop
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 셀필터해제(filterfree)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridFilterFree = function(objGrid)
{
	var i;
	objGrid.set_enableredraw(false);
    for(i=0;i<objGrid.getCellCount("Head");i++)
    {
		if(objGrid.getCellProperty("head", i, "expandimage") == "URL('"+this.gvGridFilterExpandimage+"')")
		{
			objGrid.setCellProperty("head", i, "expandshow", "hide");
		}
    }
	objGrid.set_enableredraw(true);
	
	// 	★ 원본 데이타셋에 기본 필터를 사용하는 경우
	// 		원본Dataset.userApplyGridFilter = "Y";
	// 		원본Dataset.userOriginFilterstr = 필터값;
	// 	반드시, 필터값 변경후 변수 설정이 필요합니다.(필터 취소시 사용)
		
	var objDs = objGrid.getBindDataset();
	if ( this.gfnIsNull(objDs.userApplyGridFilter) || objDs.userApplyGridFilter == "false") 
	{
		objDs.set_filterstr("");
	} 
	else 
	{
		objDs.set_filterstr(objDs.userOriginFilterstr);
	}
};

/**
 * @desc	그리드의 Sort Mark 제거 및 관련 초기화 (sortfree)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridClearSort = function(objGrid)
{
	var sortInfos = objGrid.sortInfos;
	var sortItems = objGrid.sortItems;
	
	if(this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems)) return;
	
	// 정렬상태 초기화.
	for(var j=0; j<sortItems.length;j++)
	{
		var col = sortItems[j];
		var sortInfo = sortInfos[col];
		sortInfo.status = 0;
	}
	
	// 정렬실행
	this.gfnGridExecuteSort(objGrid);
	
	// 정보 초기화
	objGrid.sortInfos = {};
	objGrid.sortItems = [];
};

/**
 * @desc	소트를 실행한다
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridExecuteSort = function(objGrid) 
{
	var sortInfo, 
		sortItem,
		sortInfos = objGrid.sortInfos,
		sortItems = objGrid.sortItems,
		sColumnName,
		status,
		cell,
		sortString = "";
		
	if(this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems)) return;

	var bEnableRedraw = objGrid.enableredraw;	// Grid 변경시 자동 다시그리기 유무
	objGrid.set_enableredraw(false);			// Grid 변경시 자동 다시그리기 유무 비활성
	
	// keystring 조합
	for(var i=0; i<sortItems.length; i++) 
	{
		sColumnName = sortItems[i];
		sortInfo = sortInfos[sColumnName];
		status = sortInfo.status;
		cell = sortInfo.refCell;
		
		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if(this.gfnIsNull(cell) || objGrid.getBindCellIndex("body", sColumnName) < 0)
		{
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[sColumnName] = null;
			delete sortInfos[sColumnName];
			
			i--;
		}
		else if(status > 0) 
		{
			sortString += (status == 1 ? "+" : "-") + sColumnName;
		}
	}
	
	var objDs = objGrid.getBindDataset();
	// 기존 keystring 저장.
	if ( objGrid.keystringFlag == false ) 
	{
		objGrid.keystringFlag = true;
		objGrid.keystring     = objDs.keystring;	//초기keystring저장
	}
	
	if(sortString.length > 0)
	{
		var sortKeyString = "S:"+sortString;
		objDs.set_keystring(sortKeyString);
		objGrid.sortKeyString = sortKeyString;
	}
	else
	{		
		objDs.set_keystring(objGrid.keystring);		//그리드 초기화시 keystring로 변경
		objGrid.sortKeyString = "";
	}

	// 정렬표시
	var index, marker;
	for(var p in sortInfos) 
	{
		sortInfo = sortInfos[p];			
		cell = sortInfo.refCell;
		if(cell)
		{
			index = cell._cellidx;
			marker = this.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], "");
			objGrid.setCellProperty("head", index, "text", sortInfo.text + marker);
		}
	}
	
	// 그리드 헤더클릭하여 정렬(오름차순/내림차순) 결과가 항상 첫줄에서 시작하여 값이 노출되도록 처리
	objGrid.selectRow(0);		
	objGrid.set_enableredraw(bEnableRedraw);	// Grid 변경시 자동 다시그리기 유무 재적용
	objDs.set_rowposition(0);
};

/**
 * @desc	head cell에 match되는 body cell을 얻어온다
 * @param {object} objGrid			- 대상 Grid Object
 * @param {number} nHeadCellIndex	- head cell index
 * @param {boolean} bUseColspan		- colspan 여부
 * @return {number} cellIndex
 */
pForm.gfnGridGetBodyCellIndex = function(objGrid, nHeadCellIndex, bUseColspan) 
{
	var i;
	var nRow;
	if(this.gfnIsNull(bUseColspan)) bUseColspan=false;
	// Max Head Row Index
	var nMaxHeadRow = 0;
	for(var i=0, len=objGrid.getCellCount("head"); i<len; i++) 
	{
		var row = objGrid.getCellProperty("head", i, "row");
		if(nMaxHeadRow < row) 
		{
			nMaxHeadRow = row;
		}
	}
	// Max Body Row Index
	var nMaxBodyRow = 0;
	for(i=0, len=objGrid.getCellCount("body"); i<len; i++) 
	{
		nRow = objGrid.getCellProperty("body", i, "row");
		if(nMaxBodyRow < nRow) 
		{
			nMaxBodyRow = nRow;
		}
	}
	
	if(nMaxHeadRow == 0 && nMaxBodyRow == 0) 
	{
// 		var headcolspan = objGrid.getCellProperty("head", nHeadCellIndex, "colspan");
// 		var bodycolspan = objGrid.getCellProperty("body", nHeadCellIndex, "colspan");
// 		
// 		if(headcolspan == bodycolspan)
//      {
// 			return nHeadCellIndex;
// 		}
		bUseColspan = true;
	}

	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
	var cellIndex = -1;
	var sRow = -1;
	var nRow = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "row"));
	var nCol = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "col"));
	var nColspan = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "colspan"));				
	
	if(nMaxHeadRow > nMaxBodyRow) 
	{
		sRow = nRow - (nMaxHeadRow - nMaxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	}
	else 
	{
		sRow = nRow;
	}

	var cRow, cCol, cColspan, cRowspan;
	for(var i=0, len=objGrid.getCellCount("body"); i<len; i++) 
	{
		cRow = parseInt(objGrid.getCellProperty("body", i, "row"));
		cCol = parseInt(objGrid.getCellProperty("body", i, "col"));	
		cColspan = parseInt(objGrid.getCellProperty("body", i, "colspan"));					
		cRowspan = parseInt(objGrid.getCellProperty("body", i, "rowspan"));
		//trace("sRow==="+sRow+"::::bUseColspan===="+bUseColspan+"::::nCol===="+nCol+"::::nColspan===="+nColspan+"::::cRow===="+cRow+"::::cCol===="+cCol+"::::cColspan===="+cColspan+"::::cRowspan===="+cRowspan);
		if(cRowspan > 1)
		{
			if(bUseColspan)
			{
				if(sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}
			else
			{
				if(sRow >= cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}
		else
		{	
			if(bUseColspan)
			{
				if(sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}
			else
			{
				if(sRow == cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}
	}
	return cellIndex;
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 찾기 (find)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {number} nCellIndex		- Cell Index
 * @param {number} nRowIndex		- Row Index
 * @return N/A
 */
pForm.gfnGridDataFind = function(objGrid, nCellIndex, nRowIndex)
{
	var sPopupId	= "comGridFindPop";
	var sPopupUrl	= "Frame_Popup::comGridFindPop.xfdl";
	//var oPosition	= {width:400,height:285};
	var objArgs		= {pvGrid:objGrid, pvStrartRow:nRowIndex, pvSelectCell:nCellIndex, pvSelectType:objGrid.selecttype, pvShowSelection:objGrid.showselection};
	var oOption		= {showtitlebar:true,titletext:"데이터 찾기"};
	
	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "gfnGridFindCallback", oOption);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 찾기(find) 팝업 콜백
 * @param {string} sId				- popupid
 * @param {string} sVal				- return value
 * @return N/A
 */ 
pForm.gfnGridFindCallback = function(sId, sVal)
{
	//TODO
	// sId : comGridFindPop
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 컬럼 숨기기/보이기 (colhide)
 * @param {object} objGrid			- 대상 Grid Object
 * @return N/A
 */
pForm.gfnGridColHideShow = function(objGrid)
{
	var sPopupId	= "comColumnHidePop";
	var sPopupUrl	= "Frame_Popup::comColumnHidePop.xfdl";
	//var oPosition	= {width:340,height:397};
	var objArgs		= {pvGrid:objGrid};
	var oOption		= {showtitlebar:true,titletext:"컬럼 보이기/숨기기"};
	
	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "gfnColumnHideCallback", oOption);
};

/**
 * @desc	그리드 우클릭 POPUPMENU 내부함수, 컬럼 숨기기/보이기(colhide) 팝업 콜백
 * @param {string} sId				- popupid
 * @param {string} sVal				- return value
 * @return N/A
 */ 
pForm.gfnColumnHideCallback = function(sId, sVal)
{
	//TODO
	// sId : comColumnHidePop
};


/**
 * @class	그리드 우클릭 POPUPMENU 내부함수
			복사모드(copy)
 * @param {Object} objGrid  - 대상그리드
 * @return N/A
 */
pForm.gfnGridCopyApply = function (objGrid)
{
	objGrid.bCopyPaste = "true";
	objGrid.orgConfig.readonlyForCopy      = objGrid.readonly;
	objGrid.orgConfig.selecttypeForCopy    = objGrid.selecttype;
	objGrid.orgConfig.showselectionForCopy = objGrid.showselection;
	
	objGrid.set_readonly(true);
	objGrid.set_selecttype("area");
};

/**
 * @class	그리드 우클릭 POPUPMENU 내부함수
			일반모드(copyfree)
 * @param {Object} objGrid  - 대상그리드
 * @return N/A
 */
pForm.gfnGridCopyFreeApply = function (objGrid)
{
	objGrid.bCopyPaste = "false";
	
	if ( !this.gfnIsNull(objGrid.orgConfig.readonlyForCopy) ) objGrid.set_readonly(objGrid.orgConfig.readonlyForCopy);
	if ( !this.gfnIsNull(objGrid.orgConfig.selecttypeForCopy) ) objGrid.set_selecttype(objGrid.orgConfig.selecttypeForCopy);
	if ( !this.gfnIsNull(objGrid.orgConfig.showselectionForCopy) ) objGrid.set_showselection(objGrid.orgConfig.showselectionForCopy);
	
	objGrid.orgConfig.readonlyForCopy      = "";
	objGrid.orgConfig.selecttypeForCopy    = "";
	objGrid.orgConfig.showselectionForCopy = "";
};

/**
 * @desc	그리드헤드클릭 이벤트 [Sort, Checkbox]
 * @param {object} objGrid			- 대상 Grid Object
 * @param {event} e					- 헤드클릭이벤트
 * @return N/A
 */
pForm.gfnGrid_onheadclick = function(objGrid, e)
{
	var sType = objGrid.getCellProperty("head", e.cell, "displaytype");
	if(sType == "checkboxcontrol")
	{
		// Grid 변경 발생시 자동 다시그리기 설정(일괄선택,해제 속도개선)
		var bEnableredraw = objGrid.enableredraw;	// 데이터 변경시 자동 다시그리기 유무
		objGrid.set_enableredraw(false);			// 비활성화
		
		// head display type이 checkbox일 경우 all/none check기능추가
		this.gfnHeadCheckSelectAll(objGrid, e);
		
		// Grid 변경 발생시 자동 다시그리기 유무 재적용
		objGrid.set_enableredraw(bEnableredraw);	// 기존 활성화유무 적용
	}
	else
	{
		// sort기능 부여시만 동작
		if(this.gfnIsNull(objGrid.bSort) || objGrid.bSort=="false")
		{
			return;
		}
		else if(objGrid.bSort == "true")
		{
			var bMultiple = false;
			// if(e.ctrlkey) bMultiple = true;	// Ctrl 키
			if(e.shiftkey) bMultiple = true;	// shiftkey 키
			
			// 정렬 상태 변경이 성공하면 정렬을 실행한다.
			var bRtn = this.gfnGridSetSortStatus(objGrid, e.cell, bMultiple);
			if(bRtn)
			{
				this.gfnGridExecuteSort(objGrid);
			}
		}
	}
};

/**
 * @desc	그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {event} e					- 헤드클릭이벤트
 * @return N/A
 */
pForm.gfnHeadCheckSelectAll = function(objGrid, e)
{
	if (!(objGrid instanceof nexacro.Grid))
	{
		trace("Grid Component 확인");
		return;
	}
	
	if(objGrid.readonly == true) return;
	
	var sType;
	var sChk;
	var sVal;
	var sChkCol;
	var objDs = objGrid.getBindDataset();
	var nHeadCell  = e.cell;
	var nBodyCell;
	var nSubCnt = objGrid.getSubCellCount("head", nHeadCell);
	var i;
	
	var sTrueVal  = this.gvCommonCheckboxTrueValue;
	var sFalseVal = this.gvCommonCheckboxFalseValue;
	
	// displaytype 확인
	sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
	if(sType != "checkboxcontrol") 
	{
		trace("Grid displaytype 확인");
		return;
	}
	
	if (this.gfnIsNull(objDs))
	{
		trace("Grid Bind Dataset 확인");
		return;
	}
	
	if( objDs.getRowCount() < 1 ) return;	//data가 없는경우
	
	//head cell에 bind정보를 가지고 있는경우( expandchar : column2,Y,N )	[체크컬럼명, True Value, False Value]
	var sChkCol = objGrid.getCellProperty("head", nHeadCell, "expandchar");	//expandchar를 bind정보 설정으로 사용시
	if (!this.gfnIsNull(sChkCol)) 
	{
		var aChkCol = sChkCol.split(",");
		if ( aChkCol.length == 3 ) 
		{
			sChkCol   = aChkCol[0];
			sTrueVal  = aChkCol[1];
			sFalseVal = aChkCol[2];
		} 
		else 
		{
			sChkCol = "";
		}
	} else 
	{
		if(objGrid.getCellCount("body") != objGrid.getCellCount("head")) 
		{
			nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
		} 
		else 
		{
			nBodyCell = e.cell;
		}
		sChkCol = objGrid.getCellProperty("body", nBodyCell, "text");
		if (this.gfnIsNull(sChkCol))
		{
			trace("Body text 바인딩 정보 없음");
			return;
		}
		if(sChkCol.indexOf("bind:")<0)
		{
			trace("Body(Cell) text속성 바인딩 미사용");
			return;
		}
		sChkCol = sChkCol.toString().replace("bind:", "");	
	}
	
// 	// expr 이 비었을 경우 Body 값 체크 변경시 Header 값 변경처리를 위해
// 	var sVal = objGrid.getCellProperty("head", nHeadCell , "expr");
// 	if(this.gfnIsNull(sVal))
// 	{
// 		//gfnHeadCheckSelectAll사용시 head checkbox상태 변경용 expr 추가
// 		var sExpr = "dataset.getCaseCount(\""+sChkCol+"==undefined || "+sChkCol+"=='' || "+sChkCol+"=='"+sFalseVal+"'\") == 0 ? '1' : '0'";
//   		objGrid.setCellProperty("head", nHeadCell, "expr", sExpr);
// 	}

	// Head셋팅
	sVal = objGrid.getCellPropertyValue(-1, nHeadCell, "expr");
	var nBodyCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nHeadCell, true);
	if(this.gfnIsNull(sVal) || sVal == "0")
	{
		sChk = sTrueVal;
	} 
	else 
	{
		sChk = sFalseVal;
	}
	
	// Head셋팅
	sVal = objGrid.getCellProperty("head", nHeadCell, "expr");
	//trace("nHeadCell==="+nHeadCell+"::::::sVal==="+sVal + ":::::objGrid.gridcheckallfunction==="+objGrid.gridcheckallfunction);
	if ( this.gfnIsNull(sVal) ) sVal = "0";
	if ( sVal == "0" || sVal == "1" ) 
	{
		objGrid.setCellProperty("head", nHeadCell, "expr", sVal^1);
		
		//trace("expr===="+this.grdList01.getCellPropertyValue(-1, 0, "expr"));
	}
	
	// Body셋팅
	// 값설정 function여부에 따라
	if ( this.gfnIsNull(objGrid.gridcheckallfunction) ) 
	{
		if ( sChkCol == this.gvCommonCheckColsNm ) objDs.set_enableevent(false);
		var sAutosizingtype = objGrid.autosizingtype;
		objGrid.set_enableredraw(false);
		objGrid.set_autosizingtype("none");
		for ( var i=0, len=objDs.rowcount; i<len; i++ )
		{
			objDs.setColumn(i, sChkCol, sChk);
		}
		objGrid.set_autosizingtype(sAutosizingtype);
		objGrid.set_enableredraw(true);
		objDs.set_enableevent(true);
	} 
	else 
	{
		if ( typeof(objGrid.gridcheckallfunction)  == "function" ) 
		{
			objGrid.gridcheckallfunction(objGrid, e, sChkCol, sChk);
		} 
		else 
		{
			if ( typeof(this[objGrid.gridcheckallfunction]) == "function" ) 
			{
				this[objGrid.gridcheckallfunction](objGrid, e, sChkCol, sChk);
			}
		}
	}
};

/**
 * @desc	정렬가능여부리턴
 * @param {object} objGrid			- 대상 Grid Object
 * @param {Number} nHeadCellIndex	- 대상셀INDEX
 * @param {Boolean} bIsMultiple		- 멀티소트여부
 * @param {Number} nSortStatus		- 소트상태(1 - asc , 2 - desc , 0 / 그외 - 없음)
 * @param {Number} nBodyCellIndex	- head cell index 에 해당하는 body cell index 
 * @return {boolean} 가능여부
 */
pForm.gfnGridSetSortStatus = function(objGrid, nHeadCellIndex, bIsMultiple, nSortStatus, nBodyCellIndex)
{
	var i,j;
	
	// head cell index 에 해당하는 body cell index
	if(this.gfnIsNull(nBodyCellIndex))
	{
		nBodyCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nHeadCellIndex, true);
	}
	//trace("nHeadCellIndex==="+nHeadCellIndex+":::::::::nBodyCellIndex==="+nBodyCellIndex);
	if(nBodyCellIndex < 0) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	var sColumnName = this.gfnGridGetBindColumnNameByIndex(objGrid, nBodyCellIndex);
	if(this.gfnIsNull(sColumnName))
	{
		trace("Check Grid body cell bind value");
		return false;
	}
	
	if(this.gfnIsNull(bIsMultiple)) bIsMultiple = false;
	if(this.gfnIsNull(nSortStatus)) nSortStatus = -1;
	
	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if(this.gfnIsNull(objGrid.sortInfos))
	{
		objGrid.sortInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if(this.gfnIsNull(objGrid.sortItems))
	{
		objGrid.sortItems = [];
	}
	
	var objSortInfos = objGrid.sortInfos,
		objSortItems = objGrid.sortItems,
		sortInfo = objSortInfos[sColumnName],
		sortItem,
		status;
		
	if(this.gfnIsNull(sortInfo))
	{
		var headText = objGrid.getCellText(-1, nHeadCellIndex);
		
		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
		var nRefCell = this.gfnGridGetGridCellObject(objGrid, "head", nHeadCellIndex);
		sortInfo = objSortInfos[sColumnName] = { status: 0, text: headText, refCell: nRefCell};
	}
	// set sort status
	if(bIsMultiple) 
	{
		status = sortInfo.status;
		if(nSortStatus == -1) 
		{
			if(status == 0) 
			{
				sortInfo.status = 1;
			} 
			else if(status == 1) 
			{
				sortInfo.status = 2;
			} 
			else if(status == 2) 
			{
				sortInfo.status = (this.SORT_TOGGLE_CANCEL ? 0 : 1);
			}
		}
		else 
		{
			sortInfo.status = nSortStatus;
		}
	}
	else 
	{
		for(var p in objSortInfos) 
		{
			sortInfo = objSortInfos[p];
			if(p == sColumnName) 
			{
				status = sortInfo.status;
				if(nSortStatus == -1) 
				{
					if(status == 0) 
					{
						sortInfo.status = 1;
					} 
					else if(status == 1) 
					{
						sortInfo.status = 2;
					} 
					else if(status == 2) 
					{
						sortInfo.status = (this.SORT_TOGGLE_CANCEL ? 0 : 1);
					}
				}
				else 
				{
					sortInfo.status = nSortStatus;
				}
			}
			else 
			{
				sortInfo.status = 0;
			}
			if(sortInfo.status == 0)
			{
				for(j=0, len2=objSortItems.length; j<len2; j++) 
				{
					if(objSortItems[j] !== sColumnName) 
					{
						objSortItems.splice(j, 1);
						break;
					}
				}
			}
		}
	}
	
	// 컬럼정보 등록
	var bHasItem = false;
	for(i=0, len=objSortItems.length; i<len; i++) 
	{
		if(objSortItems[i] == sColumnName) 
		{
			bHasItem = true;
			break;
		}
	}	
	if(!bHasItem)
	{
		objSortItems.push(sColumnName);
	}
	return true;
}; 

/**
 * @desc	Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {string} sBand			- band 얻고자 하는 cell 의 band (head/body/summ);
 * @param {number} nIndex			- 얻고자 하는 cell 의 index
 * @return {object} cell object
 */
pForm.gfnGridGetGridCellObject = function(objGrid, sBand, nIndex)
{
	// 내부속성을 통해 얻어온다.
	var refCell;
	var format = objGrid._curFormat;
	
	if(format)
	{
		if(sBand == "head")
		{
			refCell = format._headcells[nIndex];
		}
		else if(sBand == "body")
		{
			refCell = format._bodycells[nIndex];
		}
		else if(sBand == "summ" || sBand == "summary")
		{
			refCell = format._summcells[nIndex];
		}
	}
	return refCell;
};

/**
 * @desc	body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {object} objGrid			- 대상 Grid Object
 * @param {number} nIndex			- head cell index
 * @return {string} 컬럼명
 */
pForm.gfnGridGetBindColumnNameByIndex = function(objGrid, nIndex) 
{
	var sText = "";
	var sColumnid = "";
	var nSubCell = objGrid.getCellProperty("body", nIndex, "subcell");
	if(nSubCell > 0)
	{
		sText = objGrid.getSubCellProperty("body", nIndex, 0, "text");
	}
	else
	{
		sText = objGrid.getCellProperty("body", nIndex, "text");
	}
	
	if(!this.gfnIsNull(sText))
	{
		if(sText.search(/^BIND\(/) > -1) 
		{	
			sColumnid = sText.replace(/^BIND\(/, "");
			sColumnid = sColumnid.substr(0, sColumnid.length-1);
		} 
		else if(sText.search(/^bind:/) > -1) 
		{
			sColumnid = sText.replace(/^bind:/, "");
		}
	}
	return sColumnid;
};

/**
 * @class	그리드키다운 이벤트(copy, enterkey)
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 키다운이벤트
 * @return  N/A
 * @example
 * objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
 */
pForm.gfnGrid_onkeydown =function(objGrid, e)
{
	var keycode = e.keycode;
	var sBrowser = system.navigatorname;
	//trace("keycode==="+keycode);
	if(e.ctrlkey)
	{
		if(keycode == 67)	//Ctrl + C
		{	
			//copy
			if ( objGrid.bUseCopy == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) 	//복사모드에서만 동작
			{	
				objGrid.set_showselection("true");
				if( sBrowser == "nexacro" || sBrowser == "IE")
				{
					this.gfnGridCopyEventForRuntime(objGrid, e);
				} 
				else 
				{
					this.gfnGridCopyEventForChrome(objGrid, e);
				}
			}
		}
		else if(keycode == 86)	//Ctrl + V
		{
			if ( objGrid.bUsePaste == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) //복사모드에서만 동작
			{	
				//paste			
				objGrid.set_showselection("true");
				this.gfnGridPasteEvent(objGrid, e);
			}
		}
	}
	else if( ( objGrid.bUseCopy == "true" || objGrid.bUsePaste == "true" ) && keycode == 116) // F5(복사모드 토글)
	{	
		if ( objGrid.bCopyPaste == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) 
		{
			//복사모드 => 일반모드
			this.gfnGridCopyFreeApply(objGrid);
		} 
		else 
		{
			//일반모드 => 복사모드
			this.gfnGridCopyApply(objGrid);
		}
	}
	else if( objGrid.arrPropPopup.indexOf("filter") > -1 && keycode == 114) // F3(그리드필터)
	{	
		var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
		if ( nMenu == 0 ) return;
		
		var objParentForm= objGrid.parent;
		var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
		var oPopMenuDs = objParentForm.objects[sPopMenuDs];		
		var nFindRow = oPopMenuDs.findRow("id","filter");
		if ( nFindRow == -1 ) return;
		
		this.gfnGridFilter(objGrid);
	}
	else if( objGrid.arrPropPopup.indexOf("colfix") > -1 && keycode == 117) // F6(열고정)
	{	
		var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
		if ( nMenu == 0 ) return;
		
		var objParentForm= objGrid.parent;
		var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
		var oPopMenuDs = objParentForm.objects[sPopMenuDs];		
		var nFindRow = oPopMenuDs.findRow("id","colfix");
		if ( nFindRow == -1 ) return;
		
		var objDs = objGrid.getBindDataset();
		var nCellIndex = objGrid.getCellPos();		//Head에서는 getCellPos() 안됨.
		var nRowIndex  = objDs.rowposition;
		this.gfnGridCellFix(objGrid, nCellIndex, nRowIndex);
	}
	else if( objGrid.arrPropPopup.indexOf("rowfix") > -1 && keycode == 118) // F7(행고정)
	{	
		var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
		if ( nMenu == 0 ) return;
		
		var objParentForm= objGrid.parent;
		var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
		var oPopMenuDs = objParentForm.objects[sPopMenuDs];		
		var nFindRow = oPopMenuDs.findRow("id","rowfix");
		if ( nFindRow == -1 ) return;
		
		var objDs = objGrid.getBindDataset();
		var nRowIndex  = objDs.rowposition;
		this.gfnGridrowFix(objGrid, nRowIndex);
	}
	else if( objGrid.arrPropPopup.indexOf("find") > -1 && keycode == 119) // F8(찾기)
	{	
		var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
		if ( nMenu == 0 ) return;
		
		var objParentForm= objGrid.parent;
		var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
		var oPopMenuDs = objParentForm.objects[sPopMenuDs];		
		var nFindRow = oPopMenuDs.findRow("id","find");
		if ( nFindRow == -1 ) return;
		
		var objDs = objGrid.getBindDataset();
		var nRowIndex  = objDs.rowposition;
		var nCellIndex = objGrid.getCellPos();
		if(nRowIndex == -1)		// head 일때 body 기준 cell 변환
		{
			nCellIndex = this.gfnGridGetBodyCellIndex(objGrid, nCellIndex, true);
		}
		this.gfnGridDataFind(objGrid, nCellIndex, nRowIndex);
	}
	else if( objGrid.arrPropPopup.indexOf("initial") > -1 && keycode == 120) // F9(초기화)
	{	
		var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
		if ( nMenu == 0 ) return;
		
		var objParentForm= objGrid.parent;
		var sPopMenuDs = "dsPopupMenu_"+objGrid.name+"_"+this.name;
		var oPopMenuDs = objParentForm.objects[sPopMenuDs];		
		var nFindRow = oPopMenuDs.findRow("id","initial");
		if ( nFindRow == -1 ) return;
		
		// keystring
		if(!this.gfnIsNull(objGrid.bindObjDs))
		{
			objGrid.bindObjDs.set_keystring(objGrid.keystring);
		}
		objGrid.set_formats(objGrid.orgformat1);	//초기 동적으로 변경된 포맷을 반영

		this.gfnGridCellFree(objGrid);			// 열고정해제
		this.gfnGridRowFree(objGrid);			// 행고정해제
		this.gfnGridFilterFree(objGrid); 		// 그리드필터 해제
		this.gfnGridClearSort(objGrid); 		// 소트해제
		this.gfnGridCopyFreeApply(objGrid); 	// 복사모드해제
	}
// 	else if( objGrid.bUseEnter == "true" && keycode == 13) // Enter key
//	{	
// 
// 		if(!objGrid.readonly && objGrid.getCurEditType() != "textarea" && objGrid.rowcount > 0) 
//		{
// 			var bSuccess = objGrid.moveToNextCell();
// 		}
// 	}
};

/**
 * @class	copy event(nexacro, ie)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
*/
pForm.gfnGridCopyEventForRuntime = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}
	else
	{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	var colSeperator = "\t";
	var copyData = "";
	var checkIndex = {};
	
	for (var i = startrow; i <= endrow; i++) 
	{
		for (var j = startcol; j <= endcol; j++) 
		{
			var value = this.gfnNvl(obj.getCellText(i,j),"");
			    value = nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(value,"\r\n", " "), "\n\r"," "), "\r", ""), "\n", ""),colSeperator," ");
			//if(!this.gfnIsNull(value)) {
				if (j < endcol) 
				{
					copyData += value + colSeperator;
				} 
				else 
				{
					copyData += value;
				}
			//}
		}
		if (i < obj.selectendrow) 
		{
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	system.clearClipboard();
	system.setClipboard("CF_TEXT",copyData);
	//var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
};

/**
 * @class	copy event(chrome)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
*/
pForm.gfnGridCopyEventForChrome = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}
	else
	{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var colSeperator = "\t";
	var copyData = "";
	
	for (var i = startrow; i <= endrow; i++) 
	{
		for (var j = startcol; j <= endcol; j++) 
		{
			var value = this.gfnNvl(obj.getCellText(i,j),"");
			    value = nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(value,"\r\n", " "), "\n\r"," "), "\r", ""), "\n", ""),colSeperator," ");
			//if(!this.gfnIsNull(value)) {
				if (j < endcol) 
				{
					copyData += value + colSeperator;
				} 
				else 
				{
					copyData += value;
				}
			//}
		}
		if (i < obj.selectendrow) 
		{
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	
	var ta = this.gfnCreateTextareaComp(copyData);
	obj._objTextArea = ta;
	//var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**
 * @class	cell copy and paste (크롬용 텍스트에어리어생성)
 * @param {String} innerText- value
 * @return{Object} 텍스트에어리어 오브젝트
*/
pForm.gfnCreateTextareaComp = function(innerText)
{
	var ta = document.createElement('textarea');
	ta.id = "textAreabyCopyAndPaste";
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	
	document.body.appendChild(ta);
	ta.select();

	return ta;
};


/**
 * @class	paste event
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
*/
pForm.gfnGridPasteEvent = function (obj, e)
{
	var browser = system.navigatorname;
	var copyData = this.gfnGirdGetPasteData(obj, browser);
	//trace("gfnGridPasteEvent>>>>>>>>>>>"+copyData);	
	if( this.gfnIsNull(copyData) && browser != "nexacro" && browser !="IE") 
	{
		var ta = this.gfnCreateTextareaComp(copyData);
		
		nexacro._OnceCallbackTimer.callonce(this, 
			function() 
			{
				copyData = ta.value;
				document.body.removeChild(ta);
				this.gfnGridPasteEventPost(obj, e, copyData);
			},20);
	}
	else 
	{
		this.gfnGridPasteEventPost(obj, e, copyData);
	}
};

/**
 * @class	paste데이터생성
 * @param {object} obj		- Grid Object
 * @param {String} browser 	- navigatorname
 * @return paste데이터 
*/
pForm.gfnGirdGetPasteData = function (obj, browser)
{
	var copyData = "";
	if( browser == "nexacro" || browser == "IE")
	{
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
	}
	else
	{
		var ta = obj._objTextArea;

		if(!ta) return;

		copyData = ta.value;
		document.body.removeChild(ta);
		
		obj._objTextArea = undefined;
	}
	return copyData;
};

/**
 * @class	paste event
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
*/
pForm.gfnGridPasteEventPost = function (obj, e, copyData)
{
	if( this.gfnIsNull(copyData)) return;
	
	var browser = system.navigatorname;
	
	var colSeperator = "\t";
	var rowData ="";
	if( browser == "nexacro" || browser =="IE")
	{
		rowData = copyData.split("\r\n");
		if(rowDataCount < 1) 
		{
			e.stopPropagation();
			return;
		}
	}
	else
	{
		rowData = copyData.split(/[\n\f\r]/); 
	}
	var rowDataCount = rowData.length - 1;

	obj.set_enableevent(false);
	obj.set_enableredraw(false); 

	var datasetName = obj.binddataset;
	var ds = obj.getBindDataset();

	//ds.set_enableevent(false); 

	var grdCellCount = obj.getCellCount("body");
	var rowCount = ds.getRowCount();
	
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}
	else
	{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var currRow = startrow;
	var cellIndex = startcol;
	var maxColumnCount = 0;
	var checkIndex = {};	

	var nAddRow = 0;
	var nErrCnt = 0;
	for (var i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			//ds.addRow();
			nErrCnt++;
			currRow--;
			break;	//행추가 입력불가
		}

		var columnData = rowData[i].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) 
		{
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) 
		{
			maxColumnCount = columnLoopCount;
		}

		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			var colTemp = obj.getCellProperty("body", j, "text");
			var colid;
			var colEditType = obj.getCellPropertyValue( currRow, j, "edittype" );
			
			//edittype이 none, button, checkbox, combo, readonly, tree 입력불가
			if ( colEditType == "date" 
			   ||colEditType == "mask"
			   ||colEditType == "text"
			   ||colEditType == "textarea"
			   ) 
			{
				if( this.gfnIsNull(colTemp) )
				{
					colid = obj.getCellPropertyValue("body", j, "text");
				}
				else
				{
					colid = obj.getCellProperty("body", j, "text").substr(5);
				}
				
				var tempValue = columnData[k];
				if(!this.gfnIsNull(tempValue))
				{
					ds.setColumn(currRow, colid, tempValue);
				}
			} 
			else 
			{
				nErrCnt++;
			}
			k++;
		}
		currRow++;
		nAddRow++;
	}

	ds.rowposition = currRow;	

	endrow = startrow + nAddRow - 1;
	endcol = maxColumnCount - 1;
	
	system.clearClipboard();

	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	//ds.set_enableevent(true); 

	obj.selectArea(startrow, startcol, endrow, endcol);
	
	//var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
	//trace("nErrCnt==="+nErrCnt);
	if ( nErrCnt > 0 ) 
	{
		var msg = "입력불가 항목이거나 행의 갯수가 다른 경우가 발생하여 붙여넣기 자료가 누락되었습니다.";
		this.gfnShowMessage(this, ["alert",msg]);
	}
};

/**
 * @desc	그리드에서 Cell 클릭 이벤트 [콤보dropdown]
 * @param {object} objGrid			- 대상 Grid Object
 * @param {event} e					- cell클릭이벤트
 * @return N/A
 */
pForm.gfnGrid_oncellclick = function(objGrid, e)
{
	var sType = objGrid.getCellPropertyValue(0, e.cell, "edittype");
	if ( sType == "combo" ) 
	{
		objGrid.dropdownCombo();
	} 
};

/**
 * @desc	Grid 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트
 * @param {object} objGrid			- 대상 Grid Object
 * @param {event} e					- 우클릭이벤트
 * @return N/A
 */
pForm.gfnGrid_onrbuttonup = function(objGrid, e)
{
	// 대상 그리드와 셀 정보를 추가
	objGrid.popupMenu.grid = objGrid;
	objGrid.popupMenu.cellindex = e.cell;
	objGrid.popupMenu.rowindex = e.row;
	
	//trace("e.cell==="+e.cell+"::::::::e.row==="+e.row);	
	if ( e.cell < 0 ) return;
	
	var nMenu = this.gfnMakeGridPopupMenu(objGrid);	//메뉴 변경사항 적용
	
	if ( nMenu == 0 ) return;
	
	var objForm = this.gfnGetTopLevelForm(objGrid);
	
	var nX		= -500;
	var nY		= -500;
	// popupMenu 사이즈 변경이 일어나기 때문에 화면에 표시되지 않는 영역에 표시 후 닫기
	objGrid.popupMenu.trackPopupByComponent(objGrid, -500, -500);	
	objGrid.popupMenu.closePopup();
	var objFromEvent = objForm.getFocus();		// 팝업메뉴를 호출한 오브젝트
	
	
	// 2019.09.10 노출범위(우측/하단)를 초과한 건에 대해 반전노출처리 적용
	var sHAlign			= "right";
	var sVAlign			= "bottom";
	var objFrameRect	= this.gfnGetObjFrameRect(objFromEvent);	// Frame(Application)에서의 Grid 위치정보
	var nClientWidth	= objFrameRect.nClientWidth;				// Frame(Application) 너비
	var nClientHeight	= objFrameRect.nClientHeight;				// Frame(Application) 높이
	var nLeft			= objFrameRect.nLeft;						// Frame(Application)에서의 Grid 좌측좌표
	var nTop			= objFrameRect.nTop;						// Frame(Application)에서의 Grid 상단좌표
	var objPdv			= objGrid.popupMenu;						// PopupDiv 오브젝트
	var nPdvWidth		= objPdv.getOffsetWidth();					// PopupDiv의 너비
	var nPdvHeight		= objPdv.getOffsetHeight();					// PopupDiv의 높이	

	// PopupDiv 노출 처리를 위한 기본정보
	var sBand	= "Body";												// 열(Col) Index 확인 대상 Band(Body를 기준으로적용)
	if(e.row==-1)														// Grid Head영역에서 마우스 오른쪽버튼을 떼었을 때
	{
		sBand	= "Head";												// Head Band를 기준으로 열(Col) Index 확인
	}
	
	var nCol			= objGrid.getCellProperty(sBand,e.cell,"col");	// Cell Band의 Col(열) Index
	nCol				= nexacro.toNumber(nCol);						// Cell Band의 Col(열) Index(숫자형 변환)
	var objCellRect		= objGrid.getCellRect(e.row, e.cell);			// Cell의 위치정보
	var nHScrollPos		= objGrid.getHScrollPos();
	var nVScrollPos		= objGrid.getVScrollPos();
	
	// PopupDiv 좌측 노출위치 계산
	nX					= 0;											// 좌측좌표 초기화
	for(var nColIdx=0; nColIdx<nCol; nColIdx++)							// Col(열) Index 전까지 처리(Cell 좌측노출)
	{
		nX += objGrid.getRealColSize(nColIdx);							// 좌측좌표 실제 Col(열) 너비 추가
	}
	nX					-= nHScrollPos;									// 좌측좌표 Grid 수평스크롤 위치차감
	
	// PopupDiv 상단 노출위치 계산
	nY					= nexacro.toNumber(objCellRect.top);			// 상단좌표 Cell의 상단좌표로 초기화
	nY					+= nexacro.toNumber(objCellRect.height);		// Cell 높이 추가(Cell 하단노출)
	
	// PopupDiv 노출영역(우측,하단) 확인
	var nViewRight		= nLeft + nX + nPdvWidth;						// PopupDiv가 노출 될 우측좌표(PopupDiv 너비포함)
	var nViewBottom		= nTop + nY + nPdvHeight;						// PopupDiv가 노출 될 하단좌표(PopupDiv 높이포함)
	
	// PopupDiv 노출영역이 Frame(Application)의 너비를 초과한 경우(Cell 우측 기준 노출처리)
	if(nViewRight>nClientWidth)											
	{
		sHAlign = "left";												// 지정 된 좌표를 기준으로 좌측으로 노출처리
		nX		+= nexacro.toNumber(objGrid.getRealColSize(nCol));		// Cell의 열(Col)너비만큼 추가
	}
	
	// PopupDiv 노출영역이 Frame(Application)의 높이를 초과한 경우(Cell 상단 기준 노출처리)
	if(nViewBottom>nClientHeight)
	{
		sVAlign	= "top";												// 지정 된 좌표를 기준으로 상단으로 노출처리
		nY		-= nexacro.toNumber(objCellRect.height);				// Cell의 높이 차감
		nY		+= 1;													// Border?감안
	}
	
	var sAlign	= sHAlign+" "+sVAlign;	// PopupDiv 노출기준(상/하/중앙, 좌/우/중앙)
	
	objGrid.popupMenu.trackPopupByComponent(objFromEvent, nX, nY, sAlign);
};


/**
 * @desc	그리드에서 마우스 좌측버튼 클릭 이벤트 [showselection해제 기능][콤보dropdown, checkbox 멀티콘트롤 추가기능]
 * @param {object} objGrid			- 대상 Grid Object
 * @param {event} e					- cell클릭이벤트
 * @return N/A
 */
pForm.gfnGrid_onlbuttondown = function(objGrid, e)
{
	//trace("gfnGrid_onlbuttondown>>>>>>>>>>"+e.row);
	if ( objGrid.bCopyPaste == "true" && objGrid.readonly == true && objGrid.selecttype == "area" ) 
	{	//복사모드일때
		objGrid.set_showselection(objGrid.orgConfig.showselection);
	}
	
	if ( e.row < 0 ) return;

	var sType = objGrid.getCellPropertyValue(e.row, e.cell, "edittype");
	if ( sType == "checkbox" ) 
	{
		var objBindDs = objGrid.getBindDataset();
		var colName  = this.gfnGridGetBindColumnNameByIndex(objGrid, e.cell);
		var colValue = objGrid.getCellValue(e.row, e.cell);	
		if ( colValue == this.gvCommonCheckboxTrueValue ) 
		{	
			colValue = this.gvCommonCheckboxFalseValue;
		} 
		else 
		{
			colValue = this.gvCommonCheckboxTrueValue;
		}
		var inBetween = false;
		//trace("sType == " + sType + "::::colName == " + colName + "::::colValue == " + colValue);
		if ( e.shiftkey ) 
		{
			//objBindDs.set_enableevent(false);
			if ( colValue == this.gvCommonCheckboxTrueValue) 
			{
				for ( var i=0, len=objBindDs.rowcount; i<len; i++ ) 
				{
					if ( this.gfnIsNull(objGrid._lastCheckedRow) )	
					{
						objGrid._lastCheckedRow = e.row;
						break;
					}
					else if (i == e.row || i == objGrid._lastCheckedRow ) 
					{
						inBetween = !inBetween;
					}
					if ( inBetween ) 
					{
						if ( i == e.row ) continue;	//Shift사용시에는 true value유지하게(checkbox기본기능 에서 true로 변경됨)
						
						if ( objGrid.getCellPropertyValue(i, e.cell, "edittype") != "none" ) objBindDs.setColumn(i, colName, this.gvCommonCheckboxTrueValue);
					}
				}
			}
			else 
			{
				//Shift사용시에는 true value유지하게(checkbox기본기능 에서 true로 변경됨)
				if ( objGrid.getCellPropertyValue(e.row, e.cell, "edittype") != "none" ) objBindDs.setColumn(e.row, colName, this.gvCommonCheckboxFalseValue);
				
				for ( var i=0, len=objBindDs.rowcount; i<len; i++ ) 
				{
					if (i == e.row || i == objGrid._lastCheckedRow ) 
					{
						inBetween = !inBetween;
					}
					
					if ( inBetween ) 
					{
						if ( i == e.row ) continue;	//Shift사용시에는 true value유지하게(checkbox기본기능 에서 true로 변경됨)
						
						if ( objGrid.getCellPropertyValue(i, e.cell, "edittype") != "none" ) objBindDs.setColumn(i, colName, this.gvCommonCheckboxTrueValue);
					}
					
					if ( e.row == objGrid._lastCheckedRow ) 
					{
						break;
					}
					else if ( e.row > objGrid._lastCheckedRow && i >= e.row) 
					{
						if ( objGrid.getCellPropertyValue(i, e.cell, "edittype") != "none" ) objBindDs.setColumn(i, colName, this.gvCommonCheckboxFalseValue);
					}
				}
			}
			//objBindDs.set_enableevent(true);
		}
		else if ( !e.shiftkey && !e.ctrlkey ) 
		{
			if ( colValue == this.gvCommonCheckboxTrueValue ) 
			{
				objGrid._lastCheckedRow = e.row;
			}
			else 
			{
				objGrid._lastCheckedRow = null;
			}
			//trace("!e.shiftkey && !e.ctrlkey::::objGrid._lastCheckedRow == " + objGrid._lastCheckedRow);
		}
	}
};

/**
 * @desc	oncellclick 이벤트 추가 (셀 클릭시 텍스트 선택되게)
 *			그리드내 텍스트 박스(normal, date , mask , readonly, text, textarea) 클릭시
 *			1. 커서의 위치가 텍스트박스 가장 뒤쪽으로 위치하게 변경처리
 *			or 2. 셀 클릭시 텍스트 선택되게
 * @param {object} objForm			- 호출한 화면 Form
 * @param {event} e					- GridClickEventInfo
 * @return N/A
 */
pForm.gfnGridInitOncellclick = function(obj, e)
{
	try
	{
		var sProperty = obj.getCellPropertyValue(e.row, e.cell, "edittype");

		// normal | 'none' | 'button' | 'checkbox' | 'combo' | 'date' | 'mask' | 'readonly' | 'text' | 'textarea' | 'tree'
		// date , mask , readonly, text, textarea , normal 에 대해서만 적용
		if(sProperty == "normal" || sProperty == "date" || sProperty == "mask" || sProperty == "readonly" || sProperty == "text" || sProperty == "textarea")
		{
			if(!this.gfnIsNull(obj.getEditText()))
			{
				// 커서의 위치가 텍스트박스 가장 뒤쪽으로 위치하게 변경처리
				// obj.setEditSelect(obj.getEditText().length);
				// 셀 클릭시 텍스트 선택되게
				obj.setEditSelect(0,obj.getEditText().length);
			}
		}
	}
	catch (e)
	{
		trace(e.message);
	}
};

/**
 * @desc	oncloseup 이벤트 추가 (Combo 아이템 리스트를 클릭하여 선택시 그리드의 Row 아래행으로 이동처리)
 * @param {object} obj				- 그리드
 * @param {event} e					- GridEditEventInfo
 * @return N/A
 */
pForm.gfnGridInitOncloseup = function(obj, e)
{
	try
	{
		var sProperty = obj.getCellProperty("body", e.cell, "edittype");

		if(sProperty == "combo")
		{
			var nRow = obj.currentrow;
			if(nRow >= this[obj.binddataset].rowcount-1)
			{
				nRow = 0;
			}
			else
			{
				nRow = nRow+1;
			}
			var bSucc = obj.setCellPos(e.cell, nRow);
		}
	}
	catch (e)
	{
		trace(e.message);
	}
};

/**
 * @desc	주어진 문자열을 그리드에서 찾는다.
 * @param {object} objGrid			- 대상 Grid Object
 * @param {string} sFindText		- 찾을 문자열
 * @param {object} objOption		- 찾기옵션
 * @return {array} 찾은 열과행
 */
pForm.gfnFindGridText = function(objGrid, sFindText, objOption)
{
	objGrid.lastFindText = sFindText;
	objGrid.lastFindOption = objOption;
	
	// 찾을 옵션
	var direction = objOption.direction;
	var position = objOption.position;
	var scope = objOption.scope;
	var condition = objOption.condition;
	var strict = objOption.strict;

	var objDs = objGrid.getBindDataset();
	var startCell = (position == "current" ? objGrid.currentcell : objGrid.lastFindCell);
	var nStartrow = (position == "current" ? objGrid.currentrow : objGrid.lastFindRow);
	
	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
	// if(scope == "col" && !this.gfnIsNull(option.cell))
	if(scope == "col" && !this.gfnIsNull(objOption.cell))
	{
		startCell = objOption.cell;
	}
	
	var findRow = findCell = -1;
	var rowCnt = objDs.rowcount;
	var bodyCellCnt = objGrid.getCellCount("body");
	
	// 대소문자 구분
	if(!strict)
	{
		sFindText = sFindText.toUpperCase();			
	}
		
	if(direction == "prev")
	{
		nStartrow -= 1;	
		if(nStartrow < 0)
		{
			nStartrow = rowCnt-1;
		}
	}
	else
	{
		nStartrow += 1;
		if(nStartrow >= rowCnt)
		{
			nStartrow = 0;
		}
	}
	
	if(this.gfnIsNull(nStartrow)) nStartrow = 0;
	
	var loopCnt = rowCnt;
	while(loopCnt > 0)
	{
		// 문자열 비교
		if(this.gfnCompareFindText(objGrid, nStartrow, startCell, sFindText, condition, strict))
		{
			findRow = nStartrow;
			findCell = startCell;
			break;
		}
		
		// 방향 (이전, 다음)
		if(direction == "prev")
		{
			nStartrow -= 1;
			if(nStartrow < 0)
			{
				nStartrow = rowCnt-1;
			}				
		}
		else
		{
			nStartrow += 1;
			if(nStartrow > (rowCnt-1))
			{
				nStartrow = 0;
			}
		}
		
		loopCnt--;
	}
	// 마지막 찾은 위치 지정
	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
	if(findRow > -1 && findCell > -1)
	{
		objGrid.lastFindRow = findRow;
		objGrid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};

/**
 * @desc	주어진 문자열을 그리드에서 찾는다. (멀티항목처리)
 * @param {object} objGrid			- 대상 Grid Object
 * @param {string} sFindText		- 찾을 문자열
 * @param {object} objOption		- 찾기옵션
 * @return {array} 찾은 열과행
 */
pForm.gfnFindGridTextMulti = function(objGrid, sFindText, objOption)
{
	objGrid.lastFindText = sFindText;
	objGrid.lastFindOption = objOption;
	
	var i;
	var bFind = false;							// 찾은 여부
	var bCellNext = false;						// 다음 cell 부터 찾기 여부
	
	// 찾을 옵션
	var direction = objOption.direction;		// prev	이전 , next	다음
	var position = objOption.position;			// current	현재위치 , first	처음부터
	var scope = objOption.scope;				// col
	var condition = objOption.condition;		// equal	일치 , inclusion	포함
	var strict = objOption.strict;				// 대/소문자구분

	var objDs = objGrid.getBindDataset();
	var nStartCell = (position == "current" ? objGrid.currentcell : objGrid.lastFindCell);
	var nStartrow = (position == "current" ? objGrid.currentrow : objGrid.lastFindRow);
	var findRow = findCell = -1;
	var nRowCnt = objDs.rowcount;
	
	// 대소문자 구분
	if(!strict)
	{
		sFindText = sFindText.toUpperCase();			
	}
		
	if(direction == "prev")
	{
		if(nStartCell == objOption.cell[0])
		{
			nStartrow -= 1;
		}
		else
		{
			bCellNext = true;
		}
		
		if(nStartrow < 0)
		{
			nStartrow = nRowCnt-1;
		}		
	}
	else
	{
		if(nStartCell == objOption.cell[objOption.cell.length-1])
		{
			nStartrow += 1;
		}
		else
		{
			bCellNext = true;
		}
		
		if(nStartrow >= nRowCnt)
		{
			nStartrow = 0;
		}
	}
	
	if(this.gfnIsNull(nStartrow)) nStartrow = 0;
	if(this.gfnIsNull(nStartCell)) nStartCell = 0;
	
	var nLoopCnt = nRowCnt;
	
	while(nLoopCnt > 0)
	{
		if(direction == "prev")
		{
			for(i=objOption.cell.length-1;i>=0;i--)
			{
				if(bCellNext)
				{
					if(nStartCell >= objOption.cell[i])
					{
						bCellNext = false;
						continue;
					}
					else
					{
						continue;
					}
				}
				
				// 문자열 비교
				if(this.gfnCompareFindText(objGrid, nStartrow, objOption.cell[i], sFindText, condition, strict))
				{
					findRow = nStartrow;
					findCell = objOption.cell[i];
					bFind = true;
					break;
				}
			}		
		}
		else
		{
			for(i=0;i<objOption.cell.length;i++)
			{
				if(bCellNext)
				{
					if(nStartCell == objOption.cell[i])
					{
						bCellNext = false;
						continue;
					}
					else if(nStartCell < objOption.cell[i])
					{
						bCellNext = false;
					}					
					else
					{
						continue;
					}
				}
				// 문자열 비교
				if(this.gfnCompareFindText(objGrid, nStartrow, objOption.cell[i], sFindText, condition, strict))
				{
					findRow = nStartrow;
					findCell = objOption.cell[i];
					bFind = true;
					break;
				}
			}
		}
		
		bCellNext = false;
		if(bFind) break;
		
		// 방향 (이전, 다음)
		if(direction == "prev")
		{
			nStartrow -= 1;
			if(nStartrow < 0)
			{
				nStartrow = nRowCnt-1;
			}				
		}
		else
		{
			nStartrow += 1;
			if(nStartrow > (nRowCnt-1))
			{
				nStartrow = 0;
			}
		}
		
		nLoopCnt--;
	}
	
	// 마지막 찾은 위치 지정
	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
	if(findRow > -1 && findCell > -1)
	{
		objGrid.lastFindRow = findRow;
		objGrid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};

/**
 * @desc	그리드Checkall기능 사용가능 체크컬럼 추가하기
 * @param {object} objGrid			- 대상 Grid Object
 * @param {number} nHeadCell		- HeadCell
 * @param {string} sChkCol			- ChkCol
 * @param {string} sTrueVal			- True Value
 * @param {string} sFalseVal		- False Value
 * @param {string} sCheckAllFunc	- CheckFunc
 * @return N/A
 */
pForm.gfnSetHeadCheckSelectAll = function(objGrid, nHeadCell, sChkCol, sTrueVal, sFalseVal, sCheckAllFunc)
{
	if ( this.gfnIsNull(nHeadCell) )   nHeadCell    = 0;
	
	// displaytype 확인
	if( objGrid.getCellProperty("head", nHeadCell, "displaytype") != "checkboxcontrol") 
	{
		trace("Grid displaytype 확인");
		return;
	}
	
	if ( this.gfnIsNull(sChkCol) )   sChkCol    = this.gvCommonCheckColsNm;
	if ( this.gfnIsNull(sTrueVal) )  sTrueVal   = this.gvCommonCheckboxTrueValue;
	if ( this.gfnIsNull(sFalseVal) ) sFalseVal  = this.gvCommonCheckboxFalseValue;

	var sExpr = "0";
	if ( this.gfnIsNull(sCheckAllFunc) ) 
	{
		//gfnHeadCheckSelectAll사용시 head checkbox상태 변경용 expr 추가
		//True,False가 Y,N 이 아닌경우도 사용
		sExpr = "dataset.getCaseCount(\""+sChkCol+"==undefined || "+sChkCol+"=='' || "+sChkCol+"=='"+sFalseVal+"'\") == 0 ? '1' : '0'";
		objGrid.setCellProperty("head", nHeadCell, "expr", sExpr);
	}
	else 
	{
		objGrid.gridcheckallfunction = sCheckAllFunc;	//최종 Dataset 반영시 호출 Function
	}
	objGrid.setCellProperty("head", nHeadCell, "expr", sExpr);
	
	if(!this.gfnIsNull(sTrueVal) && !this.gfnIsNull(sFalseVal)) 
	{
		objGrid.setCellProperty("head", nHeadCell, "expandchar", sChkCol + "," + sTrueVal + "," + sFalseVal);
	}
	
	//headclick이벤트 추가
	var nIdx = objGrid.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this); 	// 헤드클릭이벤트추가[checkall, sort 기능]
};

/**
 * @desc	주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 문자열을 비교하여 찾아진 결과를 반환
 * @param {object} objGrid			- 대상 Grid Object
 * @param {string} nRow				- 찾을 행 인덱스
 * @param {object} nCell			- 찾을 셀 인덱스
 * @param {object} sFindText		- 찾을 문자열
 * @param {object} sCondition		- 찾을 조건(equal/inclusion)
 * @param {object} bStrict			- 대소문자 구분 (true/false)
 * @return {boolean} 찾은 결과/여부
 */
pForm.gfnCompareFindText = function(objGrid, nRow, nCell, sFindText, sCondition, bStrict)
{
	var cellText = objGrid.getCellText(nRow, nCell);
	if(this.gfnIsNull(cellText)) return false;
	var displayType = objGrid.getCellProperty("body", nCell, "displaytype");
		
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	if(this.gfnIsNull(displayType) || displayType == "normal")
	{
		var dataType = this.gfnGetBindColumnType(objGrid, nCell);
		switch(dataType)
		{
			case 'INT' :
			case 'FLOAT' :
			case 'BIGDECIMAL' :
				displayType = "number";
				break;
			case 'DATE' :
			case 'DATETIME' :
			case 'TIME' :
				displayType = "date";
				break;
			default :
				displayType = "string";
		}
	}
	
	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
	if(displayType == "currency")
	{
		var code = cellText.charCodeAt(0);
		if(code == 65510 || code == 92)
		{
			cellText = cellText.substr(1);
		}
		
		code = sFindText.charCodeAt(0);
		if(code == 65510 || code == 92)
		{
			sFindText = sFindText.substr(1);
		}
	}

	// 대소문자 구분
	if(!bStrict)
	{
		cellText = cellText.toUpperCase();
	}
	// 일치/포함
	if(sCondition == "equal")
	{
		if(sFindText == cellText)
		{
			return true;
		}
	}
	else 
	{
		if(cellText.indexOf(sFindText) > -1)
		{			
			return true;
		}
	}

	return false;
};

/**
 * @desc	데이터의 타입반환
 * @param {object} objGrid			- 대상 Grid Object
 * @param {object} nCell			- 대상셀INDEX
 * @return {string} 찾은 type
 */
pForm.gfnGetBindColumnType = function(objGrid, nCell)
{
	var dataType = null;
	var objDs = this.gfnLookup(objGrid.parent, objGrid.binddataset);
	var bindColid = objGrid.getCellProperty("body", nCell, "text");
		bindColid = bindColid.replace("bind:", "");
	
	if(!this.gfnIsNull(bindColid))
	{
		var colInfo = objDs.getColumnInfo(bindColid);
		if(!this.gfnIsNull(colInfo))
		{
			dataType = colInfo.type;
		}
	}
	
	return dataType;
};

/**
 * @desc	그리드에 일력PopupDiv를 호출
 * @param	{Grid} objGrid : 그리드 Object
			{EventInfo} e : 그리드 onexpandup 이벤트
 * @Return 	: N/A
**/
pForm.gfnGridDayPop = function(objGrid, e)
{
	//PopupDiv위치
	var objRect = objGrid.getCellRect( e.row, e.cell );
	var nX = objRect.left;		//left
	var nY = objRect.bottom;	//top
	this._gfnCallDatePopupDiv("CalDay", objGrid, e, nX-11, nY-11);
};

/**
 * @desc	칼렌다 팝업Div 생성
 * @param	{Grid} obj : 월력띄울 컴포넌트
			{String} sMonth : 년월
			{Number} nX : 팝업 Div X위치
			{Number} nY : 팝업 Div Y위치
			{String} sFunc : 값 선택후 처리할 함수명
 * @Return 	: 월력DIV에서 선택한 년월(YYYYMM)								
**/ 
pForm._gfnCallDatePopupDiv = function(sCalendarType, objGrid, e, nX, nY, sFromColNm, sToColNm)
{
	var oBindDs = objGrid.getBindDataset();
	if ( this.gfnIsNull(sFromColNm) ) sFromColNm = this.gfnGridGetBindColumnNameByIndex(objGrid, e.cell);
	
	var sFromDate   = oBindDs.getColumn(e.row, sFromColNm);
	var sToDate     = oBindDs.getColumn(e.row, sToColNm);
	//trace(	"sFromDate=="+sFromDate+"::::sToDate=="+sToDate);
	if (this.gfnIsNull(sFromDate)) 			sFromDate = "";
	if (this.gfnIsNull(sToDate)) 			sToDate   = "";
	
	var nWidth  = 0;
	var nHeight = 0;
	var sCalFormUrl = "";
	if ( sCalendarType == "CalDay" )		//일달력
	{
		nWidth  = 249;
		nHeight = 346;
		sCalFormUrl = "Frame_Popup::comCalDayPop.xfdl";
	}
	else 
	{
		return;
	}
	
	var sPopupDivNm = "pdv" + sCalendarType;

	var objPopupDiv = this.components[sPopupDivNm];
	if (objPopupDiv) 
	{
		objPopupDiv = this.components[sPopupDivNm];
		
		objPopupDiv.pCallType     = "GRID";
		objPopupDiv.pFromValue    = sFromDate;
		objPopupDiv.pToValue      = sToDate;
		objPopupDiv.pBindDs       = oBindDs;
		objPopupDiv.pBindDsFromColNm  = sFromColNm;
		objPopupDiv.pBindDsToColNm    = sToColNm;
		objPopupDiv.pBindDsRow    = e.row;
	
		objPopupDiv.form.fnFormInit();
	}
	else 
	{
        objPopupDiv = new PopupDiv(sPopupDivNm, 0, 0, nWidth, nHeight);
        this.addChild(sPopupDivNm, objPopupDiv);
        objPopupDiv.set_url(sCalFormUrl);
		objPopupDiv.set_cssclass("pdiv_PD_DayCal");
        objPopupDiv.show();
		
		objPopupDiv.pCallType     = "GRID";
		objPopupDiv.pFromValue    = sFromDate;
		objPopupDiv.pToValue      = sToDate;
		objPopupDiv.pBindDs       = oBindDs;
		objPopupDiv.pBindDsFromColNm  = sFromColNm;
		objPopupDiv.pBindDsToColNm    = sToColNm;
		objPopupDiv.pBindDsRow    = e.row;
	}
	
	objPopupDiv.trackPopupByComponent(objGrid, nX, nY, nWidth, nHeight);
};

/**
 * @desc	Grid Col size 에 따른 text 표현
 * @param	{Grid} objGrid : 대상 Grid 컴포넌트
			{String} sText : 사이즈 처리 text Column명
			{Number} nRow : row
			{Number} nCell : cell
			{String} sEllipsis : 말줄임표시 문구 (default : "...")
			{String} sFont : 적용폰트 (default :'13px/13px "Noto Sans KR", "sans-serif", "Dotum", "Arial"')
			{String} sPadding : Padding 정보 (top/right/bottom/left , ex. "0px 10px 0px 10px")
 * @Return 	: size 처리된 text
**/ 
pForm.gfnGetRealColSizeText = function(objGrid, sText, nRow, nCell, sEllipsis , sFont, sPadding)
{
	var i;
	var sChkText = "";
	var sPrevChkText = "";
	var nChkSize = 0;
	var rtnString = "";
	var sApplyEllipsis = "...";
	var sApplyFont = this.gvGridColDefaultFont;
	var tmpPadding;
	var arrRtn;	
	var nLeftGap=0, nRightGap=0;
	
	if(this.gfnIsNull(objGrid)) return "";
	if(this.gfnIsNull(sText)) return "";
	
	if(!this.gfnIsNull(sEllipsis)) sApplyEllipsis = sEllipsis;
	if(!this.gfnIsNull(objGrid.getCellProperty("body", nCell, "font"))) sApplyFont = objGrid.getCellProperty("body", nCell, "font");
	if(!this.gfnIsNull(sFont)) sApplyFont = sFont;
	if(!this.gfnIsNull(sPadding)) tmpPadding = sPadding;
	if(this.gfnIsNull(tmpPadding)) tmpPadding = objGrid.getCellProperty("body", nCell, "padding");
	if(this.gfnIsNull(tmpPadding)) tmpPadding = this.gvGridColDefaultPadding;
	
	var nSizRealColSize = objGrid.getRealColSize(nCell);
	var nTextSize = nexacro.getTextSize(sText, sApplyFont);
	var nEllipsisSize = nexacro.getTextSize(sApplyEllipsis, sApplyFont);
	
// 	if(nRow == 0)
// 	{
// 		trace("nRow:"+nRow+"|nCell:"+nCell+"|nSizRealColSize:"+nSizRealColSize+"|nTextSize.nx:"+nTextSize.nx+"|sApplyFont:"+sApplyFont+"|tmpPadding:"+tmpPadding);		
// 	}

	/*
	값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
	값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
	값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
	값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.
	*/
	try
	{
// 		if (!this.gfnIsNull(sPadding))
// 		{
// 			tmpPadding = sPadding;
// 		}
// 		else
// 		{
// 			tmpPadding = objGrid.getCellProperty("body", nCell, "padding");
// 		}
		
		if(!this.gfnIsNull(tmpPadding))
		{
			arrRtn = tmpPadding.split(" ");
			if (arrRtn.length == 1)
			{
				nLeftGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[0], "px", ""));
				nRightGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[0], "px", ""));
			}
			else if (arrRtn.length == 2)
			{
				nLeftGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[1], "px", ""));
				nRightGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[1], "px", ""));
			}	
			else if (arrRtn.length == 3)
			{
				nLeftGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[1], "px", ""));
				nRightGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[1], "px", ""));
			}		
			else if (arrRtn.length == 4)
			{
				nLeftGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[3], "px", ""));
				nRightGap = nexacro.toNumber(nexacro.replaceAll(arrRtn[1], "px", ""));
			}				
		}
	}
	catch (e)
	{
		
	}

// 	if(nRow == 0)
// 	{
// 		trace("nSizRealColSize:"+nSizRealColSize+"|nLeftGap:"+nLeftGap+"|nRightGap:"+nRightGap+"|nTextSize.nx:"+nTextSize.nx+"|nEllipsisSize.nx:"+nEllipsisSize.nx);
// 	}
	
	// if(nSizRealColSize-nLeftGap-nRightGap >= nTextSize.nx)
	if(nSizRealColSize-nLeftGap-nRightGap >= nexacro.floor(nTextSize.nx))
	{
		rtnString = sText;
	}
	else
	{
		// for (i = 0; i < sText.length; i++)
		for (i = 1; i < sText.length+1; i++)
		{
			sChkText = sText.substr(0,i);
			nChkSize = nexacro.getTextSize(sChkText, sApplyFont);

// 	if(nRow == 0)
// 	{
// 		trace("sChkText:"+sChkText+"|nChkSize.nx:"+nChkSize.nx);
// 	}			
			if(nSizRealColSize-nEllipsisSize.nx-nLeftGap-nRightGap > nChkSize.nx)
			{
				sPrevChkText = sChkText;
				continue;
			}
			else
			{
				rtnString = sPrevChkText+sApplyEllipsis;
				return rtnString;
			}
		}
		rtnString = sPrevChkText+""+sApplyEllipsis;
	}
	
	return rtnString;
};