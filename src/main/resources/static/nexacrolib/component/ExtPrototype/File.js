/**
*  @FileName 	File.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.09.05
*  @Desction   	File 관련된 공통함수	
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.09.05     		TOBESOFT 	            최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/***************************************************************************
 * gfnGetFileExt								: 파일명에서 파일 확장자 가져오기
 * gfnAbleExtnCofm								: 확장자 허용 가능 여부 확인
 * gfnSizeToByte								: size를 byte로 변환처리한다.
 * gfnBytesToSize								: byte를 표시형태 size로 변환처리한다.
 * gfnGetFileSizeFormat							: 파일 size정보(byte)를 size+단위 포맷팅 정보로 변환
 **************************************************************************/


/**
 * @desc	파일명에서 파일 확장자 가져오기
 * @param 	{string} fileName - file name
 * @return	{string} file 확장자
*/
pForm.gfnGetFileExt = function(fileName)
{
	var extn = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : "";
	return extn.toString();
};

/**
 * @desc	확장자 허용 가능 여부 확인
 * @param	{string} extnLst	- 허용가능한 확장자 목록
 * @param	{string} extn		- 확장자
 * @return	{boolean} true: 가능, false 불가능
*/
pForm.gfnAbleExtnCofm = function(extnLst, extn)
{
	var nExtnLst = extnLst.toUpperCase();
	var nExtn = extn.toUpperCase();
	var ableExtnCofm = nExtnLst.indexOf(nExtn) > -1;
	
	return ableExtnCofm;
};

/**
 * @desc	size를 byte로 변환처리한다.
 * @param 	{string} filesize - File Size
 * @return	{number} file size(byte)
 */
pForm.gfnSizeToByte = function(fileSize) 
{
	var unit = fileSize.match(/[^\d]+/g),
		size = fileSize.match(/\d+/);

	unit = unit ? unit[0].toLowerCase() : "";
	size = size ? size[0] : fileSize;
	
	if (unit == "kb")
	{
		return size * 1024;
	}
	else if (unit == "mb") 
	{
		return size * 1024 * 1024;
	}
	else if (unit == "gb") 
	{
		return size * 1024 * 1024 * 1024;
	}
	else if (unit == "tb") 
	{
		return size * 1024 * 1024 * 1024 * 1024;
	}
	else if (unit == "") 
	{
		return size;
	}
	else 
	{
		return fileSize;
	}
};

/**
 * @desc	byte를 표시형태 size로 변환처리한다.
 * @param 	{number} filesize - File Size
 * @param 	{string} type - 표시형태("KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
 * @return 	{string} file size
 */
pForm.gfnBytesToSize = function(filesize, type)
{
	if (this.gfnIsNull(filesize)) return;
	
    var size = filesize  + " bytes",
        multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        idx = 0, 
        approx = 0;
	
    for (idx = 0, approx = filesize / 1024; approx > 1; approx /= 1024, idx++) 
    {
        if (type == 1)
        {
            size = approx.toFixed(2) + multiples[idx] + " (" + filesize + " bytes)";
        }
        else if (type == 2)
        {
            size = approx.toFixed(2);
        }
        else
        {
            size = approx.toFixed(2) + multiples[idx];
        }
    }
  
    return size;
};

/**
 * @desc	첨부파일 drap가 영역에 들어왔을 때  
 * @param	{object} objForm			- 호출한 화면 Form
 * @param	{object} oArg				- arguments
 * @return	N/A
 */ 
pForm.gfnFileUploadOndragenter = function(objForm, oArg)
{
// 	if (oArg.sBindObj.rowcount < 1)
// 	{
// 		return;
// 	} 
// 	else 
// 	{
// 		oArg.sBindComp.set_border("1px solid #ff0000");
// 	}
	oArg.sBindComp.set_border("1px solid #ff0000");
};

/**
 * @desc	첨부파일 drap가 영역 밖으로 이동했을 때 
 * @param	{object} objForm			- 호출한 화면 Form
 * @param	{object} oArg				- arguments
 * @return	N/A
 */  
pForm.gfnFileUploadOnndragleave = function(objForm, oArg)
{
	oArg.sBindComp.set_border("");
};

/**
 * @desc	파일 size정보(byte)를 size+단위 포맷팅 정보로 변환
 * @param	{number} size				- 파일 size정보(byte)
 * @return	string 포맷팅 적용된 파일용량
 */   
pForm.gfnGetFileSizeFormat = function(size) 
{
	/*  없으면 */
	if(!size) 
	{
		return size;
	} 
	else 
	{
		var size = parseInt(size);
		if(size <= 0) 
		{
			return "0";
		}
		
		var units = ["bytes", "KB", "MB", "GB", "TB"];
		var digitGroups = Math.floor(Math.log10(size)/Math.log10(1024));
		
		return (size/Math.pow(1024,  digitGroups)).toFixed(1) + " " + units[digitGroups];
	}
};