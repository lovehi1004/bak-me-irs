 /**
*  @FileName 	String.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.22
*  @Desction	String 관련된 공통함수 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.22     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnGetDigit							: 입력 문자열중 숫자값만 남긴다
 * _gfnToString							: type 정보를 string 으로 변환하여 전달
 * gfnAppendComma						: 입력받은 Number에 컴마를 추가한다. 
 * gfnRemoveComma						: 입력받은 값의 컴마를 제거한다. 
 * gfnByteLengthValue					: 문자 전체에서 nLng 사이즈(텍스트의 가로 크기)만큼의 문자열 길이값 추출
 * gfnTrim								: 문자열 양 옆의 공백 제거
 * gfnAllTrim							: 문자열 전체의 공백 제거
 * gfnLeft								: 문자열의 좌측부터 지정한 길이만큼 가져오는 함수
 * gfnRight								: 문자열의 우측부터 지정한 길이만큼 가져오는 함수
 * gfnLengthByte						: 문자 전체 길이를 계산 - 영문/숫자/특수문자 : 1, 한글/한자 : 2 (function 내부 nByte 변수)
 * gfnPosReverse						: 문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환
 * gfnGetSpliceTextK					: 한글 자소를 분리하여 리턴한다.
 * gfnGetSpliceTextE					: 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
 * gfnConvertEngToKor					: 영문을 한글로 리턴한다(영문자판 한글입력시)
 * gfnSubstrByte						: 문자열에서 byte단위로 지정한 길이만큼 가져오는 함수
 
 **************************************************************************/

/**
 * @desc	입력 문자열중 숫자값만 남긴다
 * @param {String} sValue			- 입력값
 * @return 숫자만 남은 문자열
 */
pForm.gfnGetDigit = function(sValue)
{
	if(this.gfnIsNull(sValue)) return "";	// 입력문자열이 없는 경우 "" 반환
	
	var regExp = new RegExp("\\D","g");
	var sRet = sValue.replace(regExp,"");
	return sRet;
};

/**
 * @desc	type 정보를 string 으로 변환하여 전달
 * @param {String} sValue			- 입력값
 * @return string 으로 변환한 type 정보
 */
pForm._gfnToString = function(value) { 
	var sValue = (typeof value).toString();	

	return "[object " + sValue.substr(0,1).toUpperCase() + sValue.substring(1) +"]";
};

/**
 * @desc	입력받은 Number에 컴마를 추가한다. 
 * @param {Number} nNumber			- 숫자
 * @param {Number} nDetail			- 반올림할 소숫점 이하의 자릿수.
 * @return {String} Comma 가 포함하고 있는 숫자
 */
pForm.gfnAppendComma = function(nNumber, nDetail)
{
	if (nNumber == null)	return "";
	if (nDetail	== null)	nDetail	= 0;
	
	nNumber				= parseFloat(nNumber);
	nNumber				= nexacro.round(nNumber, nDetail);

	var mFlag = false;
	if ( nNumber < 0 ) {
		mFlag = true;
		nNumber = Math.abs( nNumber );
	}

	var sNumber		= new String(nNumber);
	var arrNumber		= sNumber.split(".");
	var sFormatNum	= "";
	var j = 0;
	
	for ( i = arrNumber[0].length - 1; i >= 0; i--)	{
		if (i != sNumber.length && j == 3){
			sFormatNum = arrNumber[0].charAt(i) + "," + sFormatNum;
			j = 0;
		}else {
			sFormatNum = arrNumber[0].charAt(i) + sFormatNum;
		}
		j++;
	}
	
	if (arrNumber.length > 1)	sFormatNum = sFormatNum + "." + arrNumber[1];

	if ( mFlag ) sFormatNum = '-' + sFormatNum;

	return sFormatNum;
};

/**
 * @desc	입력받은 값의 컴마를 제거한다. 
 * @param {String} sValue			- 컴마가 포함된 값
 * @return {String} 컴마가 제거된 스트링이 반환된다. 
 */
pForm.gfnRemoveComma = function(sValue)
{
	return sValue.replace(/\,/g, "");
};

/**
 * @desc	문자 전체에서 nLng 사이즈(텍스트의 가로 크기)만큼의 문자열 길이값 추출
 * @param {String} sVal				- 대상 문자열
 * @param {Number} nLng				- 체크할 사이즈
 * @return {Number} 결과값
 */ 
pForm.gfnByteLengthValue = function (sVal, nLng)
{
	var lengthByte = 0;

	if (this.gfnIsNull(sVal)) {
		return -1;
	}

	for (var i = 0; i < sVal.length; i++)
	{
		if (sVal.charCodeAt(i) > 127) {
			lengthByte += 2;
		}
		else {
			lengthByte += 1;
		}
		if (lengthByte*7.2 > nLng) {
			return (i);
		}		
	}

	return sVal.length;
};

/**
 * @desc	문자열 양 옆의 공백 제거
 * @param {String} sValue			- 변경하려는 값
 * @return {String} 공백 제거 문자열
 */
pForm.gfnTrim = function(sValue)
{
    if (this.gfnIsNull(sValue)) return "";	// 변경하려는 값이 없다면 "" 반환
	return nexacro.trim(String(sValue));
};

/**
 * @desc	문자열 전체의 공백 제거
 * @param {String} sValue			- 변경하려는 값
 * @return {String} 공백 제거 문자열
 */
pForm.gfnAllTrim = function(sValue)
{
	if(sValue==null)		return "";							// 변경하려는 값이 null인 경우 "" 반환
	if (new String(sValue).valueOf() == "undefined") return "";	// 변경하려는 값이 undefined인 경우 "" 반환
	
    var objValue = new String(sValue);
    var sRtnValue="";
    var i;

    if( sValue != null )
	{
        for ( var i = 0; i < objValue.length; i++ ) {
            if ( objValue.charAt(i) != " " ) {
                sRtnValue = sRtnValue + objValue.charAt(i);
            }
        }
    }
	else 
	{
        return -1;
    }
    return sRtnValue;
};

/**
 * @desc	문자열의 좌측부터 지정한 길이만큼 가져오는 함수
 * @param {String} sOrg				- 원본 문자열
 * @param {Number} nSize			- 얻어올 크기. [Default Value = 0]
 * @return {String} 문자열
 */
pForm.gfnLeft = function(sOrg, nSize)
{
	if(this.gfnIsNull(sOrg))	sOrg = "";		// 원본문자가 없는 경우 "" 문자로 적용
	if(this.gfnIsNull(nSize))	nSize = 0;		// 얻어올 크기가 없는 경우 0으로 적용
	return new String(sOrg).substr(0, nSize);
};


/**
 * @desc	문자열의 우측부터 지정한 길이만큼 가져오는 함수
 * @param {String} sOrg				- 원본 문자열
 * @param {Number} nSize			- 얻어올 크기. [Default Value = 0]
 * @return {String} 문자열
 */
pForm.gfnRight = function(sOrg, nSize)
{
	if ( this.gfnIsNull(sOrg) || this.gfnIsNull(nSize) )	return "";
	if ( sOrg.length < nSize ) return sOrg;
	else return sOrg.substr(sOrg.length-nSize, nSize);
};

/**
 * @desc	문자 전체 길이를 계산 - 영문/숫자/특수문자 : 1, 한글/한자 : 2 (function 내부 nByte 변수)
 * @param {String} sVal				- 대상 문자열
 * @return {Number} Type에 따라 구해진 길이
 */
pForm.gfnLengthByte = function(sVal)
{
	var nLengthByte = 0;									// 반환값
	
	// 유효성 체크
	var sType			= this.gfnTypeof(sVal);				// 입력값 타입 확인
	
	if (sType=="undefined")	return nLengthByte;			// undefined 객체의 경우 0 반환
	if (sType=="null")		return nLengthByte;			// null오브젝트 객체의 경우 0 반환
	
	// Byte계산
	var nByte		= 2;								// 한글/한자 적용 Byte
	if(!this.gfnIsNull(arguments[1]))					// 한글/한자 별도 Byte계산을 위해 내부적으로 2번째 인자(argument)사용
	{
		nByte		= arguments[1];						// 표준 2Byte : 내부적으로 사용하기 위해 인자(argument) 미정의
	}
	
	//(기본 2Byte) : 내부적으로 사용하기 위해 인자값(argument)은 정의하지 않음
	nByte			= nexacro.toNumber(nByte);			// Number형 변환
	var nLength		= sVal.length;						// Byte계산 문자열의 길이
	for (var i = 0; i < nLength; i++)					// 문자열의 문자 Index별 처리
	{
		var nUnicode	= sVal.charCodeAt(i);			// 문자의 유니코드값
		if (nUnicode<=127)	nLengthByte	+= 1;			// 영문/숫자/특수문자 : 1Byte
		else				nLengthByte	+= nByte;		// 한글/한자		  : 2Byte
	}

	return nLengthByte;									// 반환
};

/**
 * @desc	문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환
 * @param {String} sOrg				- 원래 문자열(예 : "aaBBbbccBB")
 * @param {String} sFind			- 찾고자 하는 문자열(예 : "BB")
 * @param {String} nStart			- 검색 시작위치 (옵션 : Default=문자열의 끝)
 * @return {Number} 성공:찾고자 하는 문자열의 시작위치/실패:-1
 */
pForm.gfnPosReverse = function(sOrg, sFind, nStart)
{
	var nPos;
	if (this.gfnIsNull(sOrg) || this.gfnIsNull(sFind)) return -1;
	if (this.gfnIsNull(nStart)) nStart = sOrg.length - 1;
	for (nPos = nStart; nPos >= 0; nPos--) 
	{
		if (sOrg.substr(nPos, sFind.length) == sFind) break;
	}
	return nPos;
};

/**
 * @desc   한글 자소를 분리하여 리턴한다.
 * @param {String} strInput			- Input Char
 * @return Char Code
 */
pForm.gfnGetSpliceTextK = function(strInput)
{
	var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
	var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
	var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

	var i;
	var strOut = "";
	for(i=0;i<strInput.length;i++)
	{
		var nCode = strInput.charCodeAt(i);
		if(nCode>=44032 && nCode <= 55203)
		{
			var nFirst = Math.floor((nCode - 44032) / 588);
			strOut += String.fromCharCode(arrFirst[nFirst]);
			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
			strOut += String.fromCharCode(arrSecond[nSecond]);
			var nThird = Math.floor((nCode - 44032) % 28) ;
			if(nThird > 0)
				strOut += String.fromCharCode(arrThird[nThird]);
		}
		else
			strOut += String.fromCharCode(nCode);
	}
	return strOut;
};

/**
 * @desc   한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
 * @param {String} strInput			- Input Char
 * @return Char Code(English)
 */
pForm.gfnGetSpliceTextE = function(strInput)
{
	var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
	var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
	var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
	var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
	
	var i;
	var strOutE = "";
	for(i=0;i<strInput.length;i++)
	{
		var nCode = strInput.charCodeAt(i);
		if(nCode>=44032 && nCode <= 55203)
		{
			var nFirst = Math.floor((nCode - 44032) / 588);
			strOutE += arrFirstE[nFirst];
			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
			strOutE += arrSecondE[nSecond];
			var nThird = Math.floor((nCode - 44032) % 28) ;
			if(nThird > 0)
				strOutE += arrThirdE[nThird];
		}
		else if(nCode>=12593 && nCode <= 12643)
		{
			strOutE += arrAllE[nCode-12593];
		}
		else
		{
			strOutE += String.fromCharCode(nCode);
		}
	}
	return strOutE;
};

/**
 * @desc   영문을 한글로 리턴한다(영문자판 한글입력시)
 * @param {String} args			- Input Char
 * @return 한글문자
 */
pForm.gfnConvertEngToKor = function(args) 
{
	var engChosung = "rRseEfaqQtTdwWczxvg";
	var engChosungReg = "[" + engChosung + "]";
	var engJungsung = {k:0,o:1,i:2,O:3,j:4,p:5,u:6,P:7,h:8,hk:9,ho:10,hl:11,y:12,n:13,nj:14,np:15,nl:16,b:17,m:18,ml:19,l:20};
	var engJungsungReg = "hk|ho|hl|nj|np|nl|ml|k|o|i|O|j|p|u|P|h|y|n|b|m|l";
	var engJongsung = {"":0,r:1,R:2,rt:3,s:4,sw:5,sg:6,e:7,f:8,fr:9,fa:10,fq:11,ft:12,fx:13,fv:14,fg:15,a:16,q:17,qt:18,t:19,T:20,d:21,w:22,c:23,z:24,x:25,v:26,g:27};
	var engJongsungReg = "rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt|r|R|s|e|f|a|q|t|T|d|w|c|z|x|v|g|";
	var regExp = new RegExp("("+engChosungReg+")("+engJungsungReg+")(("+engJongsungReg+")(?=("+engChosungReg+")("+engJungsungReg+"))|("+engJongsungReg+"))","g");

	var converter = function (args, cho, jung, jong) 
	{
		return String.fromCharCode(engChosung.indexOf(cho) * 588 + engJungsung[jung] * 28 + engJongsung[jong] + 44032);
	};

	var result = args.replace(regExp, converter);

	//trace(result);
	return result;
};

/**
 * @desc	문자열에서 byte단위로 지정한 길이만큼 가져오는 함수
 *			영문/숫자/특수문자 : 1, 한글/한자 : 2
 * @param {String} sOrg				- 원본 문자열
 * @param {number} nSize			- 얻어올 크기. [Default Value = 0]
 * @return {String} - 문자열 
 */
pForm.gfnSubstrByte = function(sOrg, nSize)
{
	var sString = "";
	var nCheckSize = 0;
	
    if (new String(sOrg).valueOf() == "undefined") return sString;	// 원본문자열 값이 undefined인 경우 "" 반환
    if (sOrg == null) return sString;								// 원본문자열 값이 null인 경우 "" 반환
	if(this.gfnIsNull(nSize)) return sString;						// 얻어올 크기가 없는 경우 ""반환
	
	for(i=0;i<sOrg.length;i++)
	{
		sString = sOrg.charAt(i);
		nCheckSize += this.gfnLengthByte(sString);
		if(nCheckSize > nSize)
		{
			break;
		}
	}
	return new String(sOrg).substr(0, i);
};