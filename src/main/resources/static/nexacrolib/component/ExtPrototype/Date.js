/**
*  @FileName 	Date.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.22
*  @Desction    날짜 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.22     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

/*
	// ★★★ 날짜 정보에 대한 정책 체크 필요
	// 로그인시 서비스 호출을 통해 시스템 날짜 정보를 받아 와서
	// gvDateObj (Date Object), gvDate (String, yyyyMMdd) 에 저장한다.
	// 로그인 이후 실시간 정보가 필요한 경우 gfnGetSysDate 호출하여 시간 동기화 후
	// 시간 관련 함수(gfnGetDate 등) 을 사용한다.
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnGetSysDate 					: 서비스 호출을 통해 현재 서버 시간을 얻어 온다
 * gfnGetDate 						: 현재일자를 구한다.
 * gfnAddDate						: 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함
 * gfnAddMonth						: 입력된 월에 nOffset 으로 지정된 만큼의 월을 더함
 * gfnIsDate						: 날짜 여부를 확인(년월 or 년월일)
 * _gfnDateCheck					: 유효날짜 여부 체크
 * gfnIsYM							: 날짜 여부를 확인 (6자리의 숫자로 된 날짜(YYYYMM))
 * gfnIsYMD							: 날짜 여부를 확인 (8자리의 숫자로 된 날짜(YYYYMMDD))
 * gfnGetLastDateNum				: 해당월의 마지막 날짜를 숫자로 구하기
 * gfnGetYear						: 해당년도 구하기
 * gfnGetMonth						: 해당월 구하기
 * gfnGetYearMonth					: 해당년월 구하기
 * gfnStrToDate 					: 문자를 날짜로 변환
 * gfnDateToStr						: Date Type을 String으로 변환
 * gfnGetDay						: 입력된 날자로부터 요일을 구함. (0 = 일요일 ~ 6 = 토요일)
 * gfnGetDayName					: 입력된 날자로부터 요일명을 구함
 * gfnGetCurQDate					: 일자 기준으로 분기 시작일, 종료일 리턴
 * gfnGetDiffDate					: 두 일자간의 차이 일수 계산
 * gfnGetDiffMonth					: 두 일자간의 차이 월수 계산
 * gfnGetDiffTime					: 두 시간간의 차이 계산
 * gfnGetBirthYear					: 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 * gfnGetMaskFormatString			: 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환.
 * _gfnParseDateMask				: format 변환 정보 반환.
 * _gfnGetWeekOfYear				: yyyyMMdd 형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환. 
 **************************************************************************/

pForm._dateMaskCache = {};
pForm.gvTtName = ["오전", "오후"];
// 월명칭 (MMMM)
pForm.gvMonthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// 월약칭 (MMM)
pForm.gvMonthShortName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// 주(요일명칭) (dddd)
pForm.gvWeekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
// 주(요일약칭) (ddd)
pForm.gvWeekShortName = ["일", "월", "화", "수", "목", "금", "토"];


/**
 * @desc	서비스 호출을 통해 현재 서버 시간을 얻어 온다
 * @param {String} sGubn			- date/null : 일자, time : 일자+시간, milli : Milliseconds
 * @return N/A
 */
pForm.gfnGetSysDate = function(sGubn) 
{
	// ★★★ 서비스 호출 기능 추가 필요
};

/**
 * @desc 현재일자를 구한다.
 * @param {string} sGubn	- date/null : 일자, time : 일자+시간, milli : 일자+시간+Milliseconds
 * @param {string} bFormat	- 날짜형식사용여부 true/false [default : false]
 * @return {string} String 	- bFormat(false) - yyyyMMdd/yyyyMMddhhmmss/yyyyMMddhhmmssmil
 *							- bFormat(true) -  yyyy-MM-dd/yyyy-MM-dd hh:mm:ss/yyyy-MM-dd hh:mm:ss.mil
 */
pForm.gfnGetDate = function(sGubn, bFormat) 
{
	var sRet		= "";									// 반환정보
	if (this.gfnIsNull(sGubn)) sGubn = "date";				// 반환구분 미입력건 일자(yyyyMMdd)형식 적용
	
	// 로그인시 시간 조회 서비스 호출 , 해당 결과 정보의 일자을 Global (gvDateObj) 에 저장
	// 날짜(yyyyMMdd) 요청시(ex.gfnGetDate())  해당 정보로 리턴
	if(!this.gfnIsNull(nexacro.getApplication().gvDateObj))
	{
		var dNowDtm		= nexacro.getApplication().gvDateObj;	// 서비스 통한 정보로 설정.
	}
	else
	{
		var dNowDtm		= new Date();							// Date 오브젝트 정의(로컬의 현재일시)
	}
	
	var sYear		= String(dNowDtm.getFullYear());		// 년
	sYear			= sYear.padLeft(4, "0");				// 년(yyyy)
	var sMonth		= String(dNowDtm.getMonth() + 1);		// 월
	sMonth			= sMonth.padLeft(2, "0");				// 월(MM)
	var sDay		= String(dNowDtm.getDate());			// 일
	sDay			= sDay.padLeft(2, "0");					// 일(dd)
	var sHour		= String(dNowDtm.getHours());			// 시
	sHour			= sHour.padLeft(2, "0");				// 시(HH)
	var sMinute		= String(dNowDtm.getMinutes());			// 분
	sMinute			= sMinute.padLeft(2, "0");				// 분(mm)
	var sSecond		= String(dNowDtm.getSeconds());			// 초
	sSecond			= sSecond.padLeft(2, "0");				// 초(ss)
	var sMilSecond	= String(dNowDtm.getMilliseconds());	// 밀리초
	sMilSecond		= sMilSecond.padLeft(3, "0");			// 밀리초(mil)
	
	// 반환정보 설정
	sRet			= sYear;								// 년(yyyy)
	if(bFormat)		sRet	+= "-";							// format적용건 일자 구분문자("-")추가
	sRet			+= sMonth;								// 월(MM) 추가
	if(bFormat)		sRet	+= "-";							// format적용건 일자 구분문자("-")추가
	sRet			+= sDay;								// 일(dd) 추가
	if( sGubn!="date" )										// 반환구분 일자(yyyyMMdd) 반환건이 아닌 경우( time / milli )
	{
		// sGubn : time
		if(bFormat)	sRet	+= " ";							// format적용건 일자/시간 구분문자(" ") 추가
		sRet		+= sHour;								// 시(HH) 추가
		if(bFormat)	sRet	+= ":";							// format적용건 시간 구분문자(":") 추가
		sRet		+= sMinute;								// 분(mm) 추가
		if(bFormat)	sRet	+= ":";							// format적용건 시간 구분문자(":") 추가
		sRet		+= sSecond;								// 초(ss) 추가
		if (sGubn == "milli")								// 반환구분 밀리초의 경우
		{
			if(bFormat)	sRet	+= ".";						// format적용건 밀리초 구분문자(".") 추가
			sRet	+= sMilSecond;							// 밀리초(mil) 추가
		}
	}
	return sRet;											// 반환
};

/**
 * @desc	입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함
 * @param {String} sDate			- yyyyMMdd 형태로 표현된 날짜.
 * @param {Number} nOffSet			- 날짜로부터 증가 감소값.
 * @return {String} yyyyMMdd 문자열
 */
pForm.gfnAddDate = function(sDate, nOffSet)
{
	if (this.gfnIsNull(sDate))			return "";		// 날짜 미입력건 "" 반환
	if (sDate.length!=8)				return "";		// 날짜 8자리가 아닌 경우 "" 반환
	if (sDate.indexOf("-")<0)							// 날짜에 음수부호("-")가 없는 경우(0000년01월01일보다 과거의 일자:달력표현 처리위함)
	{
		if (!this.gfnIsDate(sDate))	return "";		// 날짜형식이 아닌 경우 "" 반환	
	}
	
	if(this.gfnIsNull(nOffSet))
	{
		nOffSet 	= 0;
	}
	
	nOffSet			= nexacro.toNumber(nOffSet);		// 숫자형변환
	var sYear		= this.gfnGetYear(sDate);			// 날짜의 년
	var sMonth		= this.gfnGetMonth(sDate);			// 날짜의 월
	var sDay		= sDate.substr(6, 2);				// 날짜의 일
	
	var iYear		= parseInt(sYear);					// 반환적용될 날짜의 년
    var iMonth		= parseInt(sMonth)-1;				// 반환적용될 날짜의 월
    //var iDate		= parseInt(sDay)-(nOffSet*-1);		// 반환적용될 날짜의 일(addDate Method 적용)
	var iDate		= parseInt(sDay);					// 반환적용될 날짜의 일
	
	var date		= new Date(iYear, iMonth, iDate);	// Date오브젝트 정의
	if (iYear<100)	date.setFullYear(iYear);			// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	date.addDate(nOffSet);								// 일(날)수 가감
	
	return this.gfnDateToStr(date);						// Date오브젝트의 날짜를 문자열로 반환
};

/**
 * @desc	입력된 월에 nOffset 으로 지정된 만큼의 월을 더함
 * @param {String} sDate			- String Date Format
 * @param {Number} nOffset			- Integer Format
 * @return {String} date(yyyymmdd)
 */
pForm.gfnAddMonth = function(sDate, nOffset) 
{
	var sRet	= "";									// 반환정보
	
	if(this.gfnIsNull(sDate))							// 일자 미입력건
	{
		sDate	= this.gfnGetDate();					// 현재일자기준으로 계산
	}
	
	// 유효성 체크
	if (!nexacro.isNumeric(sDate))	return sRet;		// 숫자이외의 문자가 포함 된 경우 "" 반환
	if (!this.gfnIsDate(sDate))	return sRet;		// 날짜형식이 아닌 경우 ""반환
	if(this.gfnIsNull(nOffset))	nOffset = 1;		// 월계산 적용 값(개월수) 미입력건 1개월 추가(+)
	
	// 입력값 확인
	nOffset		= nexacro.toNumber(nOffset);			// Number형 변환
	var sYear	= sDate.substr(0, 4);					// 년(String)
	var sMonth	= sDate.substr(4, 2);					// 월(String)
	var sDay	= sDate.substr(6, 2);					// 일(String)
	if (this.gfnIsNull(sDay))							// 일 미존재(미입력)건
	{
		sDay	= "01";									// 01일 지정
	}
	var nYear	= nexacro.toNumber(sYear);				// 년(Number)
	var nMonth	= nexacro.toNumber(sMonth);				// 월(Number)
	var nDay	= nexacro.toNumber(sDay);				// 일(Number)

	// 월계산
	var objDate		= new Date(nYear, nMonth-1, nDay);	// Date오브젝트
	if(nYear<100)	objDate.setFullYear(nYear);			// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	objDate.addMonth(nOffset);							// 월 가감
	
	// 반환처리
	sYear		= String(objDate.getFullYear());		// 년(String)
	sYear		= sYear.padLeft(4,"0");					// 년(yyyy)
	sMonth		= String(objDate.getMonth()+1);			// 월(String)
	sMonth		= sMonth.padLeft(2,"0");				// 월(MM)
	sDay		= String(objDate.getDate());			// 일(String)
	sDay		= sDay.padLeft(2,"0");					// 일(dd)
	sRet		= sYear + sMonth + sDay;				// 반환값설정(yyyyMMdd)
	
	return		sRet;									// 반환
};

/**
 * @desc	날짜 여부를 확인(년월 or 년월일)
 * @param {String} sDate			- 입력스트링(YYYYMM or YYYYMMDD)
 * @return {Boolean} 올바른 날짜형식(true), 그 외(false)
 */
pForm.gfnIsDate = function(sDate)
{
	if (this.gfnIsNull(sDate)) return false;
	
	var bFlag;
	switch(sDate.length)
	{
		case 6://년월
			bFlag =  this.gfnIsYM(sDate);
			break;
		case 8://년월일
			bFlag =  this.gfnIsYMD(sDate);
			break;
		default:
			bFlag = false; 
			break;
	}

	return bFlag;
};

/**
 * @desc	유효날짜 여부 체크
 * @param {String} yyyy				- 년도
 * @param {String} mm				- 월
 * @param {String} dd				- 일
 * @return {Boolean} 체크결과
 */
pForm._gfnDateCheck = function(yyyy, mm, dd) 
{
    var month = parseInt(mm,10) - 1;
    var day = parseInt(dd,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //각 월의 마직막일자

    //윤년처리
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }
    
    //true or false로 처리
    return (day >= 1 && day <= end[month]);
};

/**
 * @desc	날짜 여부를 확인 (6자리의 숫자로 된 날짜(YYYYMM))
 * @param {String} sDate			- 6자리의 숫자로 된 날짜(YYYYMM)
 * @return {Boolean} 올바른 날짜형식(true), 그 외(false)
 */
pForm.gfnIsYM = function(sDate)
{
	var sRetVal = this.gfnGetDigit(sDate);				// 숫자 외 문자 제거
	if (sRetVal.length != 6)	return false;			// 6자리가 아닌 경우 false 반환
	
	var nYear  = nexacro.toNumber(sDate.substr(0,4));	// 년도값을 숫자로
	if(isNaN(nYear))	return false;					// 년도 NaN 값 false 반환
	
	var nMonth = nexacro.toNumber(sDate.substr(4,2));	// 월을 숫자로
	if(isNaN(nMonth))	return false;					// 월 NaN 값 false 반환
	
	if((nMonth < 1) || (nMonth > 12))	return false;	// 1월미만, 12월초과 false 반환

	return true;
};

/**
 * @desc	날짜 여부를 확인 (8자리의 숫자로 된 날짜(YYYYMMDD))
 * @param {String} sDate			- 8자리의 숫자로 된 날짜(YYYYMMDD)
 * @return {Boolean} 올바른 날짜형식(true), 그 외(false)
 */
pForm.gfnIsYMD = function(sDate)
{
	var sRetVal = this.gfnGetDigit(sDate);					// 숫자 외 문자 제거
	if (sRetVal.length != 8) return false;					// 8자리가 아닌 경우 false 반환
	
	// 입력값 확인
	var sYear		= sDate.substr(0,4);					// 년(String)
	var sMonth		= sDate.substr(4,2);					// 월(String)
	var sDay		= sDate.substr(6,2);					// 일(String)
	var nYear		= nexacro.toNumber(sYear);				// 년(Number)
	var nMonth		= nexacro.toNumber(sMonth);				// 월(Number)
	var nDay		= nexacro.toNumber(sDay);				// 일(Number)
	var sYM			= sYear + sMonth;						// 년월(String)
	var nLastDay	= this.gfnGetLastDateNum(sYM+"01");	// 말일
	if (nMonth < 1 || nMonth > 12) return false;			// 월 오류(1월~12월 외) false 반환
	if (nDay < 1 || nDay > nLastDay) return false;			// 일자오류(1일~말일 외) false 반환
	return true;											// 정상건 true 반환
};

/**
 * @desc	해당월의 마지막 날짜를 숫자로 구하기
 * @param {String} sDate			- 일자(yyyyMMdd/yyyyMM) 
 * @return {Number} 마지막 날짜 숫자값 ( 예 : "30" )
 */
pForm.gfnGetLastDateNum = function(sDate)
{
	var nRet		= -1;									// 반환값
	
	// 입력값 확인
	sDate	= this.gfnGetDigit(sDate);						// 숫자 외 문자 제거
	if ( this.gfnIsNull(sDate) )	return nRet;			// 미입력건 -1 반환
	
	// 년월 확인
	var sYear		= this.gfnGetYear(sDate);				// 년
	var sMonth		= this.gfnGetMonth(sDate);				// 월
	var sYearMonth	= sYear + sMonth;						// 년월
	sYearMonth		= this.gfnGetYearMonth(sYearMonth);	// 년월 확인(8자리 사용시 gfn_isDate 사용되므로 6자리만 적용)
	if(this.gfnIsNull(sYearMonth))	return nRet;			// 년월 오류건 -1반환
	
	// Date오브젝트를 사용하여 말일계산
	var nYear		= nexacro.toNumber(sYear);				// 년
	var nMonth		= nexacro.toNumber(sMonth);				// 월(말일 계산을 위해 현재월이 아닌 다음 월로 설정)
	var nDay		= 1;									// 일(말일 계산을 위해 1일로 설정)
	var objDate		= new Date(nYear, nMonth, nDay);		// Date오브젝트정의
	if(nYear<100)	objDate.setFullYear(nYear);				// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	objDate.addDate(-1);									// 1일의 전일자(전월의 말일) 이동
	
	// 반환처리
	nRet			= nexacro.toNumber(objDate.getDate());	// 반환값 적용 : Date오브젝트의 요일
	return nRet;											// 반환
};

/**
 * @desc	해당년도 구하기
 * @param {String} sDate			- 일자(yyyyMMdd) 
 * @return {String} yyyy형태의 년도 ( 예 : "2022" )
 */
pForm.gfnGetYear = function(sDate)
{
	if (this.gfnIsNull(sDate)) 				// 일자 미입력건
	{
		sDate = this.gfnGetDate();				// 일자를 현재일자로 적용
	}
	
	sDate		= this.gfnGetDigit(sDate);		// 숫자 외 문자 제거
	if (this.gfnIsNull(sDate))		return "";	// 입력된 문자 미존재건 "" 반환
	var sYear	= sDate.substr(0,4);			// 앞자리 4자리만 사용
	sYear		= sYear.padLeft(4,"0");			// 4자리 채우기 적용
	
	return sYear;								// 반환
};

/**
 * @desc	해당월 구하기
 * @param {String} sDate			- 일자(yyyyMMdd) 
 * @return {String} MM형태의 년월 ( 예 : "09" )
 */
pForm.gfnGetMonth = function(sDate)
{
	if (this.gfnIsNull(sDate))					// 일자 미입력건
	{
		sDate	= this.gfnGetDate();			// 일자를 현재일자로 적용
	}
	
	sDate		= this.gfnGetDigit(sDate);		// 숫자 외 문자 제거
	if (this.gfnIsNull(sDate))		return "";	// 입력된 문자 미존재건 "" 반환
	if (sDate.length<6)				return "";	// 6자리 미만의 경우 "" 반환
	
	var sMonth	= sDate.substr(4,2);			// 월
	var nMonth	= nexacro.toNumber(sMonth)		// 월(Number)
	if(nMonth<1 || nMonth>12)		return "";	// 월 오류(1미만, 12초과)건 "" 반환
	
	return sMonth;								// 월 반환
};

/**
 * @desc	해당년월 구하기
 * @param {String} sDate			- 일자(yyyyMMdd) 
 * @return {String} yyyyMM형태의 년월 ( 예 : "202209" )
 */
pForm.gfnGetYearMonth = function(sDate)
{
	if (this.gfnIsNull(sDate))						// 일자 미입력건
	{
		sDate = this.gfnGetDate();					// 일자를 현재일자로 적용
	}
	
	var sYear		= this.gfnGetYear(sDate);		// 년
	if (this.gfnIsNull(sYear))			return "";	// 년 오류건 "" 반환
	var sMonth		= this.gfnGetMonth(sDate);		// 월
	if (this.gfnIsNull(sMonth))		return "";	// 월 오류건 "" 반환
	var sYearMonth	= sYear + sMonth;				// 년월
	if (!this.gfnIsDate(sYearMonth))	return "";	// 올바른 날짜(년월) 형식이 아닌 경우 "" 반환
	if (sYearMonth.length!=6)			return "";	// 년월값이 6자리가 아닌경우 "" 반환
	
	return sYearMonth;								// 년월 반환
};

/**
 * @desc 문자를 날짜로 변환
 * @param {string} sDate	  - String Date Format
 * @return {Object} Object - Date
 */ 
pForm.gfnStrToDate = function(sDate)
{
	if (!this.gfnIsDate(sDate))	return "";				// 입력일자가 날짜형식이 아닌경우 "" 반환
	if (sDate.length!=8)			return "";			// 입력일자가 8자리가 아닌경우 "" 반환
	var nYear		= parseInt(sDate.substr(0,4));		// 입력일자의 년
	var nMonth		= parseInt(sDate.substr(4,2))-1;	// 입력일자의 월
	var nDay		= parseInt(sDate.substr(6,2));		// 입력일자의 일
	var objDate		= new Date(nYear, nMonth, nDay);	// Date오브젝트 정의(입력일자)
	if (nYear<100)	objDate.setFullYear(nYear);			// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	
	return objDate;										// Date오브젝트 반환(입력일자)
};

/**
 * @desc	Date Type을 String으로 변환
 * @param {Date} date				- 날짜
 * @return {String} yyyyMMdd 문자열
 */
pForm.gfnDateToStr = function(date)
{
	if (!(date instanceof nexacro.Date) && !(date instanceof Date))	return "";	// 날짜 오브젝트가 아닌경우 "" 반환
	
	var sYear	= date.getFullYear().toString();		// Date 오브젝트의 년
	var sMonth	= (date.getMonth()+1).toString();		// Date 오브젝트의 월
	var sDate	= date.getDate().toString();			// Date 오브젝트의 일
	
	sYear	= sYear.padLeft(4,"0");						// 년 4자리 적용
	sMonth	= sMonth.padLeft(2,"0");					// 월 2자리 적용
	sDate	= sDate.padLeft(2,"0");						// 일 2자리 적용

	if(sYear.indexOf("-")>=0)							// 년도 음수(0000년01월01일보다 과거의 일자)
	{
		sYear	= sYear.substr(sYear.indexOf("-")+1);	// 음수부호를 제외한 년도 적용
		sYear	= "-"+sYear.padLeft(3,"0");				// 음수부호를 첫문자에 적용(nexacro.toNumber로 형변환 가능)
	}
	
	return sYear + sMonth + sDate;						// 년월일 반환
};

/**
 * @desc	입력된 날자로부터 요일을 구함. (0 = 일요일 ~ 6 = 토요일)
 * @param {String} sDate			- 'yyyyMMdd' 형태로 표현된 날짜.
 * @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.
 */
pForm.gfnGetDay = function(sDate)
{
	if (this.gfnIsNull(sDate))						// 일자 미입력건
	{
		sDate = this.gfnGetDate();					// 일자를 현재일자로 적용
	}
	
// 	var nRet	= -1;								// 반환값
// 	if (!this.gfnIsDate(sDate))	return nRet;		// 입력된 값이 날짜가 아닌 경우 -1 반환
// 	if (sDate.length!=8)			return nRet;	// 입력된 값이 8자리가 아닌 경우 -1 반환
	
	// 일자정보 확인(Date오브젝트를 사용하여 요일정보 확인위함)
	var sYear	= sDate.substr(0, 4);				// 년(String)
	var nYear	= nexacro.toNumber(sYear);			// 년(Number)
	var sMonth	= sDate.substr(4, 2);				// 월(String)
	var nMonth	= nexacro.toNumber(sMonth)-1;		// 월(Number)
	var sDay	= sDate.substr(6, 2);				// 일(String)
	var nDay	= nexacro.toNumber(sDay);			// 일(Number)
		
	// Date오브젝트 설정
	var objDate	= new Date(nYear, nMonth, nDay);	// 년,월,일 설정
	if (nYear<100)	objDate.setFullYear(nYear);		// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	
	// 반환처리
	nRet	= objDate.getDay();						// 반환정보설정(요일:0~6)
    return nRet;									// 반환
};

/**
 * @desc 입력된 날자로부터 요일명을 구함
 * @param {string} sDate  - 일자(yyyyMMdd)
 * 		  {string} sType  - 타입("E"-영어, "K"-한글)
 * @return {string} string 요일명
 */
pForm.gfnGetDayName = function(sDate, sType)
{
	var sRet			= "";										// 반환값
	var nDay			= this.gfnGetDay(sDate);					// 입력된일자의 요일(0~6)
	
	// 입력값 확인
	if ( !this.gfnIsDate(sDate) )	return sRet;					// 입력된값이 날짜형식이 아닌 경우 "" 반환
	if ( sDate.length!=8 )			return sRet;					// 입력된값이 8자리가 아닌 경우 "" 반환
	if ( nDay<0 )					return sRet;					// 요일 오류건 "" 반환
	if ( this.gfnIsNull(sType) )	sType = "K";					// 타입 미지정건 기본설정(한글)
	
	var objDayName;
	
	if ( sType == "E" ) {
		objDayName = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
	} else {
		objDayName = new Array("일", "월", "화", "수", "목", "금", "토");
	}

	return objDayName[nDay];
};


/**
 * @desc 일자 기준으로 분기 시작일, 종료일 리턴
 * @param {String}	sDate 	- 기준일자
 * @return {Array} 분기 시작일, 분기 종료일
*/ 
pForm.gfnGetCurQDate = function(sDate)
{
	var arrRtnVal = new Array(2);
	var sYear = sDate.substr(0, 4);
	var sMon1, sMon2;
	var nMonth = parseInt(sDate.substr(4,2));
	
	if((nMonth >= 1) && (nMonth <= 3))
	{
		sMon1 = "01";
		sMon2 = "03";
	}
	else if((nMonth >= 4) && (nMonth <= 6))
	{
		sMon1 = "04";
		sMon2 = "06";
	}
	else if((nMonth >= 7) && (nMonth <= 9))
	{
		sMon1 = "07";
		sMon2 = "09";
	}
	else if((nMonth >= 10) && (nMonth <= 12))
	{
		sMon1 = "10";
		sMon2 = "12";
	}
	
	arrRtnVal[0] = sYear + sMon1 + "01";
	arrRtnVal[1] = sYear + sMon2 + this.gfnGetLastDateNum(sYear + sMon2 + "01");
	return arrRtnVal;
};

/**
 * @desc 두 일자간의 차이 일수 계산
 * @param {string} sStartDate	- yyyyMMdd형태의 From 일자 (예 : "20230822")
 * @param {string} sEndDate		- yyyyMMdd형태의 To 일자   (예 : "20230823")
 * @return {Number} Number 		- 숫자 형태의 차이일수(예 : 10) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
pForm.gfnGetDiffDate = function(sStartDate, sEndDate)
{
	if (this.gfnIsNull(sStartDate))	return 0;							// From 일자 미입력건 0 반환
	if (sStartDate.length!=8)			return 0;						// From 일자 8자리 아닌경우 0 반환
	if (!nexacro.isNumeric(sStartDate)) return 0;						// From 일자 숫자가 아닌경우 0 반환
	
	if (this.gfnIsNull(sEndDate))		return 0;						// To 일자 미입력건 0 반환
	if (sEndDate.length!=8)				return 0;						// To 일자 8자리 아닌경우 0 반환
	if (!nexacro.isNumeric(sEndDate))	return 0;						// To 일자 숫자가 아닌경우 0 반환
	
	var iStartYear		= parseInt(sStartDate.substring(0,4),  10);		// From 일자의 년
	var iStartMonth		= parseInt(sStartDate.substring(4,6)-1,  10);	// From 일자의 월
	var iStartDay		= parseInt(sStartDate.substring(6,8), 10);		// From 일자의 일
	
	var iEndYear		= parseInt(sEndDate.substring(0,4),  10);		// To 일자의 년
	var iEndMonth		= parseInt(sEndDate.substring(4,6)-1,  10);		// To 일자의 월
	var iEndDay			= parseInt(sEndDate.substring(6,8), 10);		// To 일자의 일
	
    var dFromDate		= new Date(iEndYear, iEndMonth, iEndDay);		// 일수 계산을 위한 Date오브젝트(To 일자)
	if (iEndYear<100)	dFromDate.setFullYear(iEndYear);				// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	
    var dToDate			= new Date(iStartYear, iStartMonth, iStartDay);	// 일수 계산을 위한 Date오브젝트(From 일자)
	if (iStartYear<100)	dToDate.setFullYear(iStartYear);				// Date오브젝트 1970년 1월 1일이전의 일자에 대해 처리 가능하도록 적용
	
    return parseInt((dFromDate - dToDate)/(1000*60*60*24));				// 차이 일수 반환 : (To 일자-From 일자) / (밀리초*초*분*시)
};

/**
 * @desc 두 일자간의 차이 월수 계산. 단 일자(dd)는 무시함.
 * @param {string} sStartDate	- yyyyMM/yyyyMMdd형태의 From 일자 (예 : "202308" / "20230822")
 * @param {string} sEndDate		- yyyyMM/yyyyMMdd형태의 To 일자   (예 : "202309" / "20230923")
 * @return {Number} Number 		- 숫자 형태의 차이월수(예 : 10) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
pForm.gfnGetDiffMonth = function(sStartDate, sEndDate)
{
	if (this.gfnIsNull(sStartDate))	return 0;				// From 일자 미입력건 0 반환
	if (sStartDate.length<6)			return 0;			// From 일자 6자리 미만의경우 0 반환
	if (!nexacro.isNumeric(sStartDate)) return 0;			// From 일자 숫자가 아닌경우 0 반환
	
	if (this.gfnIsNull(sEndDate))		return 0;			// To 일자 미입력건 0 반환
	if (sEndDate.length<6)				return 0;			// To 일자 6자리 미만의경우 0 반환
	if (!nexacro.isNumeric(sEndDate))	return 0;			// To 일자 숫자가 아닌경우 0 반환
	
	var nStartYear	= parseInt(sStartDate.substr(0,4), 10);	// From일자의 년도
	var nStartMonth	= parseInt(sStartDate.substr(4,2), 10);	// From일자의 월
	nStartMonth		+= nStartYear*12;						// From일자의 년도를 12개월을 적용한값 추가

	var nEndYear	= parseInt(sEndDate.substr(0,4), 10);	// To 일자의 년도
	var nEndMonth	= parseInt(sEndDate.substr(4,2), 10);	// To 일자의 월
	nEndMonth		+= nEndYear*12;							// To 일자의 년도를 12개월을 적용한값 추가

	return (nEndMonth - nStartMonth);						// 차이 월수 반환(To일자의 월수-From일자의 월수)
};

/**
 * @desc 두 시간간의 차이 계산
 * @param {string} sStartTime 	- HHmmss형태의 From 시간 ( 예 : "033025" )
 * @param {string} sEndTime   	- HHmmss형태의 To 시간 ( 예 : "034025" )
 * @param {string} sType		- HH/mm/ss
 * @return {Number} Number		- 차이 시간
 */
pForm.gfnGetDiffTime = function(sStartTime, sEndTime, sType)
{
	if (this.gfnIsNull(sStartTime))	return 0;					// From 시간 미입력건 0 반환
	if (sStartTime.length!=6)			return 0;					// From 시간 6자리가 아닌경우 0 반환
	if (!nexacro.isNumeric(sStartTime)) return 0;					// From 시간 숫자가 아닌경우 0 반환

	if (this.gfnIsNull(sEndTime))		return 0;					// To 시간 미입력건 0 반환
	if (sEndTime.length!=6)				return 0;					// To 시간 6자리가 아닌경우 0 반환
	if (!nexacro.isNumeric(sEndTime))	return 0;					// To 시간 숫자가 아닌경우 0 반환

    var nReturnValue;
    var nFrom_HH = nexacro.toNumber(sStartTime.substring(0, 2));	// From 시간(시)
    var nFrom_mm = nexacro.toNumber(sStartTime.substring(2, 4));	// From 시간(분)
    var nFrom_ss = nexacro.toNumber(sStartTime.substring(4, 6));	// From 시간(초)
    
    var nTo_HH = nexacro.toNumber(sEndTime.substring(0, 2));		// To 시간(시)
    var nTo_mm = nexacro.toNumber(sEndTime.substring(2, 4));		// To 시간(분)
    var nTo_ss = nexacro.toNumber(sEndTime.substring(4, 6));		// To 시간(초)
    
    var nFromTotal_ss	= (nFrom_HH * 3600);						// From시간(초) - (시) 초단위 변환적용
	nFromTotal_ss		+= (nFrom_mm * 60);							// From시간(초) - (분) 초단위 변환적용
	nFromTotal_ss		+= nFrom_ss;								// From시간(초) - (초) 초단위 적용
	
    var nToTotal_ss		= (nTo_HH * 3600);							// To시간(초) - (시) 초단위 변환적용
	nToTotal_ss			+= (nTo_mm * 60);							// To시간(초) - (분) 초단위 변환적용
	nToTotal_ss			+= nTo_ss;									// To시간(초) - (초) 초단위 적용
    
	var nRetTime		= nToTotal_ss - nFromTotal_ss;				// 반환차이시간(초단위)
	
    if (sType == "HH")												// 시간단위로 반환건
	{
		nRetTime	= Math.floor(nRetTime / 3600);					// 시간(3600초)으로 변환
    }
	else if(sType == "mm")											// 분단위로 반환건
	{
		nRetTime	= Math.floor(nRetTime / 60);					// 분(60초)으로 변환
    }
	
	return nRetTime;												// sType에 따라 차이시간(시/분/초) 반환
};

/**
 * @class 주민번호 뒷 첫번째 자리로 년대를 return 한다. <br>
 * @param {String} sJuminNo	생년 월일 또는 주민 번호
 * @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 */
pForm.gfnGetBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	var vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
 * @desc 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환.
 * @param {date} dt Date 개체.
 * @param {string} strMask mask할 format 문자열.
 * @return {string} 변환된 문자열.
 
 * trace(this.gfnGetMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
 * trace(this.gfnGetMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
 * trace(this.gfnGetMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
 * trace(this.gfnGetMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
 * trace(this.gfnGetMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일 
 */
pForm.gfnGetMaskFormatString = function(dt, strMask)
{
	if (!(dt instanceof Date) && !(dt instanceof nexacro.Date))	return "";			// Date오브젝트가 아닌 경우 "" 반환
	if (this.gfnIsNull(strMask)) return "";											// mask할 format 문자열이 없는 경우 "" 반환
	var arrMask = this._gfnParseDateMask(strMask);									// mask할 format 문자열을 배열로 변환
	var arrDt = new Array();														// mask(format)의 날짜/시간 등 실제값 배열
	var sMask;																		// mask할 format 배열의 mask정보
	var sTemp;																		// 임시변수
	for ( var i = 0, len = arrMask.length; i < len ; i++ )							// mask할 format 문자열(배열) 처리
	{
		sMask = arrMask[i];															// mask정보
		if ( sMask > -1 )															// mask정보 -1초과건(숫자)
		{
			arrDt[arrDt.length] = strMask.charAt(sMask);							// 해당인덱스의 문자열(숫자) 적용
		}
		else																		// mask정보가 -1초과건이 아닌경우(숫자 외)
		{
			switch (sMask)
			{
				case "yyyy":								// 년도4자리
					sTemp	= new String(dt.getFullYear());	// Date오브젝트의 년도(4자리)
					sTemp	= sTemp.padLeft(4,'0');			// 4자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "yy":			// 년도2자리
					sTemp	= dt.getFullYear() % 1000;		// Date오브젝트의 년도(4자리)를 1000으로 나눈 나머지값(2자리 년도)
					sTemp	= new String(sTemp);			// 문자형으로 변환
					sTemp	= sTemp.padLeft(2,'0')			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;					
				case "MMMM":								// 월명칭
					sTemp	= this.gvMonthName;				// form변수(배열)
					if (this.gfnIsNull(sTemp))				// form변수(배열) 미존재건
					{
						arrDt.push("");						// 반환정보에 "" 추가
					}
					else									// form변수(배열) 존재건
					{
						sTemp	= sTemp[dt.getMonth()];		// Date오브젝트의 월(0~11)의 form변수 배열값
						if (this.gfnIsNull(sTemp))			// form변수 배열값 미존재건
						{
							arrDt.push("");					// 반환정보에 "" 추가
						}
						else								// form변수 배열값 존재건
						{
							arrDt.push(sTemp);				// 반환정보에 form변수 배열값 추가
						}
					}
					break;
				case "MMM":									// 월약칭
					sTemp	= this.gvMonthShortName;		// form변수(배열)
					if (this.gfnIsNull(sTemp))				// form변수(배열) 미존재건
					{
						arrDt.push("");						// 반환정보에 "" 추가
					}
					else									// form변수(배열) 존재건
					{
						sTemp	= sTemp[dt.getMonth()];		// Date오브젝트의 월(0~11)의 form변수 배열값
						if (this.gfnIsNull(sTemp))			// form변수 배열값 미존재건
						{
							arrDt.push("");					// 반환정보에 "" 추가
						}
						else								// form변수 배열값 존재건
						{
							arrDt.push(sTemp);				// 반환정보에 form변수 배열값 추가
						}
					}
					break;
				case "MM":									// 월(2자리 고정)
					sTemp	= new String(dt.getMonth()+1);	// Date오브젝트의 월(0~11) + 1
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "M":									// 월(1자리 또는 2자리)
					sTemp	= new String(dt.getMonth()+1);	// Date오브젝트의 월(0~11) + 1
					arrDt.push(sTemp);						// 반환정보에 추가
					break;					
				case "dddd":								// 주(요일명칭)
					sTemp	= this.gvWeekName;				// form변수(배열)
					if (this.gfnIsNull(sTemp))				// form변수(배열) 미존재건
					{
						arrDt.push("");						// 반환정보에 "" 추가
					}
					else									// form변수(배열) 존재건
					{
						sTemp	= sTemp[dt.getDay()];		// Date오브젝트의 월(0~11)의 form변수 배열값
						if (this.gfnIsNull(sTemp))
						{
							arrDt.push("");					// 반환정보에 "" 추가
						}
						else
						{
							arrDt.push(sTemp);				// 반환정보에 form변수 배열값 추가
						}
					}
					break;
				case "ddd":									// 주(요일약칭)
					sTemp	= this.gvWeekShortName;			// form변수(배열)
					if (this.gfnIsNull(sTemp))				// form변수(배열) 미존재건
					{
						arrDt.push("");						// 반환정보에 "" 추가
					}
					else
					{
						sTemp	= sTemp[dt.getDay()];		// Date오브젝트의 월(0~11)의 form변수 배열값
						if (this.gfnIsNull(sTemp))
						{
							arrDt.push("");					// 반환정보에 "" 추가
						}
						else
						{
							arrDt.push(sTemp);				// 반환정보에 form변수 배열값 추가
						}
					}
					break;
				case "dd":									// 일자(2자리고정)
					sTemp	= new String(dt.getDate());		// Date오브젝트의 일자
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "d":									// 일자(1자리 또는 2자리)
					sTemp	= new String(dt.getDate());		// Date오브젝트의 일자
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "WW":									// 주차(2자리고정)
					sTemp	= this._gfnGetWeekOfYear(dt);	// Date오브젝트 년도의 주차(2자리고정)
					arrDt.push(new String(sTemp));			// 반환정보에 추가
					break;
				case "W": 									// 주차(1자리 또는 2자리)
					sTemp	= this._gfnGetWeekOfYear(dt);	// Date오브젝트 년의 주차(2자리고정)
					sTemp	= nexacro.toNumber(sTemp);		// 숫자형 변환(1자리 또는 2자리로 변경)
					arrDt.push(new String(sTemp));			// 반환정보에 추가
					break;
				case "HH":									// 시간(2자리고정 : 24시기준)
					sTemp	= new String(dt.getHours());	// Date오브젝트 시간(24시기준)
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(new String(sTemp));			// 반환정보에 추가
					break;
				case "H":									// 시간(1자리 또는 2자리 : 24시기준)
					sTemp	= new String(dt.getHours());	// Date오브젝트의 시간(24시기준)
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "tt":									// 시간(오전/오후)
					sTemp	= dt.getHours();				// Date오브젝트의 시간(24시기준)
					if(sTemp<12)							// 12(시)미만의 경우
					{
						sTemp	= this.gvTtName[0];			// 오전(AM)으로 설정
					}
					else									// 12(시)이상의 경우
					{
						sTemp	= this.gvTtName[1];			// 오후(PM)으로 설정
					}
					arrDt.push(sTemp);						// 반환정보에 추가
					break;					
				case "hh":									// 오전/오후를 구분하는 시간(2자리고정 : 12시기준)
					sTemp	= dt.getHours() % 12;			// Date오브젝트의 시간(24시기준)을 12로 나눈 나머지값(오전/오후)
					sTemp	= new String(sTemp);			// 문자형 변환
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;	
				case "h":									// 오전/오후를 구분하는 시간(1자리 또는 2자리 : 12시기준)
					sTemp	= dt.getHours() % 12;			// Date오브젝트의 시간(24시기준)을 12로 나눈 나머지값(오전/오후)
					sTemp	= new String(sTemp);			// 문자형 변환
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "mm":									// 분(2자리고정)
					sTemp	= new String(dt.getMinutes());	// Date오브젝트의 분
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "m": 									// 분(1자리 또는 2자리)
					sTemp	= new String(dt.getMinutes());	// Date오브젝트의 분
					arrDt.push(sTemp);						// 반환정보에 추가
					break;					
				case "sss":									// 초(3자리고정:밀리초)
					sTemp	= dt.getMilliseconds();			// Date오브젝트의 MilliSecond
					sTemp	= new String(sTemp);			// 문자형 변환
					sTemp	= sTemp.padLeft(3,'0');			// 3자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "ss":									// 초(2자리고정)
					sTemp	= new String(dt.getSeconds());	// Date오브젝트의 초
					sTemp	= sTemp.padLeft(2,'0');			// 2자리 채우기
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
				case "s":									// 초(1자리 또는 2자리)
					sTemp	= new String(dt.getSeconds());	// Date오브젝트의 초
					arrDt.push(sTemp);						// 반환정보에 추가
					break;
			}
		}
	}
	return arrDt.join("");	// 반환배열의 정보를 문자열로 반환
};


/**
 * @desc format 변환 정보 반환.
 * @param {date} sMask mask할 format 문자열.
 * @return {array} mask format 변환 정보.
 */
pForm._gfnParseDateMask = function(sMask)
{
	if(this.gfnIsNull(sMask)) return new Array();			// mask할 format문자열이 없는 경우 [] 배열(빈값) 반환
	
	var arrRetMask	= [];									// 반환대상 mask 배열
	var nSeq		= 0;									// 반환대상 mask 배열 index
	var arrMask		= sMask.split("");						// mask할 format문자열 분할(입력된문자에 대해 분할)
	var sToken;												// Token문자
	var bEscape		= false;								// Escape문자 지정유무
	var bQuote		= false;								// Quotation문자 지정유무
	var sTmp;												// 임시처리용 문자
		
	var res = this._dateMaskCache[sMask];					// mask Cache 정보 확인
	if ( res ) return res;									// Cache정보 존재시 Cache정보 반환

	for ( var i = 0, len = arrMask.length ; i < len ; )		// 각 문자에 대한 처리
	{
		sToken = arrMask[i];					// 문자
		if( bEscape == false && sToken == "'" )	// Mask 문자자 Quotation이 시작될 경우.
		{ 
			if( bQuote == false )				// Quotation 미정건
			{
				bQuote = true;					// Quotation 지정 처리
			}
			else								// Quotation 지정건
			{
				bQuote = false;					// Quotation 미지정 처리
			}
			i++;								// format의 다음문자(배열) 이동
			continue;							// 다음문자 처리
		}
		
		if( bEscape == false && sToken == "\\" && !bQuote ) // Mask에서 Escape이 시작될 경우
		{
			bEscape = true;									// Escape 지정 처리
			i++;											// format의 다음문자(배열) 이동
			continue;										// 다음문자 처리
		}
		else if ( bEscape )									// Mask에서 Escape문자가 시작(내부문자)된 경우.
		{ 
			arrRetMask[nSeq] = i;							// 반환배열에 문자 Index 적용 ??
			nSeq++;											// 반환배열의 Index 증가처리
			bEscape = false;								// Escape문자 종료처리
		}
		else if( bQuote == false )							// Mask에서 Quotation 밖의 글자에 대해.
		{
			sTmp = sMask.substr(i, 4);									// 4자리기준 확인
			if ( sTmp == "yyyy" || sTmp == "MMMM" || sTmp == "dddd" )	// 4자리가 yyyy, MMMM, dddd 의 경우
			{
				arrRetMask[nSeq] = sTmp;								// 반환배열에 4자리 값 적용
				nSeq++;													// 반환배열의 Index 증가처리
				i += 4;													// 4자리 이동처리
				continue;												// 4자리 이동상태로 다음문자처리
			}
			
			sTmp = sMask.substr(i, 3);									// 3자리기준 확인
			if ( sTmp == "MMM" || sTmp == "ddd" || sTmp == "sss" )		// 3자리가 MMM, ddd, sss 의 경우
			{
				arrRetMask[nSeq] = sTmp;								// 반환배열에 3자리 값 적용
				nSeq++;													// 반환배열의 Index 증가처리
				i += 3;													// 3자리 이동처리
				continue;												// 3자리 이동상태로 다음문자처리
			}
			
			sTmp = sMask.substr(i, 2);									// 2자리기준 확인
			if ( sTmp == "yy" || sTmp == "MM" || sTmp == "dd" ||
				 sTmp == "HH" || sTmp == "mm" || sTmp == "ss" ||
				 sTmp == "hh" || sTmp == "tt" || sTmp == "tt" )			// 2자리가 yy, MM, dd, HH, mm , ss, tt, WW 의 경우
			{
				arrRetMask[nSeq] = sTmp;								// 반환배열에 2자리 값 적용
				nSeq++;													// 반환배열의 Index 증가처리
				i += 2;													// 2자리 이동처리
				continue;												// 2자리 이동상태로 다음문자처리
			}
			
			sTmp = sToken;												// 1자리기준 확인
			if ( sTmp == "M" || sTmp == "d" || sTmp == "H" ||			
				 sTmp == "h" || sTmp == "m" || sTmp == "s" || 
				 sTmp == "W" )											// 1자리가 M, d, H, h, m, s, W 의 경우
			{
				arrRetMask[nSeq] = sTmp;								// 반환배열에 1자리 값 적용
				nSeq++;													// 반환배열의 Index 증가처리
			}
			else
			{
				arrRetMask[nSeq] = i;									// 반환배열에 문자 Index 적용 ??
				nSeq++;													// 반환배열의 Index 증가처리
			}
		}
		i++;															// 다음문자 이동처리(한문자씩)
	}
	
	this._dateMaskCache[sMask] = arrRetMask;							// mask 정보를 cache(배열)에 기록
	
	return arrRetMask;													// 배열반환
};

/**
 * @desc yyyyMMdd 형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
 * @param {date} {string/date} 날짜형 문자열/Date오브젝트.
 * @return {string} 주차에 해당하는 문자.
 */
pForm._gfnGetWeekOfYear = function(sDate)
{
	var sRet		= "";											// 반환값
	
	// 날짜에 대한 형식 체크
	if ((sDate instanceof Date) || (sDate instanceof nexacro.Date))	// Date오브젝트의 경우
	{
		sDate		= this.gfnDateToStr(sDate);						// Date오브젝트의 년월일일을 문자열로 적용
	}
	if (!this.gfnIsDate(sDate)) return "";							// 일자형식(년월/일자)가 아닌경우 "" 반환
	if (sDate.length!=8) return "";									// 8자리가 아닌경우 "" 반환
	
	// 1월1일부터의 주차(수) 계산
	var sYear		= this.gfnGetYear(sDate);						// 년(String)
	var sStartDate	= sYear + "0101";								// 기준일(해당년도의 1월1일) 
	var nDiffDate	= this.gfnGetDiffDate(sStartDate, sDate);		// 기준일부터 입력일자의 차이 일(날) 수
	var nDay		= this.gfnGetDay(sStartDate);					// 1월1일의 요일
	var nDayCnt		= nDiffDate + nDay;								// 총 일(날)수 : 1월1일의 요일을 포함 7일기준 주차 계산
	var nWeekCnt	= nexacro.floor((nDayCnt/7)+1);					// 주차(주 수)
	
	// 반환처리
	sRet			= String(nWeekCnt).padLeft(2,"0");				// 반환값 적용
	return sRet;													// 반환
};