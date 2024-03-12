function fn_exceldownload(paramJson) {
	trace("[JSON.stringify(paramJson)]["+JSON.stringify(paramJson)+"]");
	
	var excelUrl = paramJson.url;
	
			excelUrl += "?"
	
			Object.keys(paramJson).forEach(function(key) {
				excelUrl += key + "=" + btoa(unescape(encodeURIComponent(paramJson[key]))) + "&";
			});
			
			var request = new XMLHttpRequest();
            request.open('POST', excelUrl, true);
            request.setRequestHeader('Content-Type', 'application/octet-stream');
            request.responseType = 'blob';

            request.onload = function(e) {

                var filename = "";
                var disposition = request.getResponseHeader('Content-Disposition');
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1])
                        filename = decodeURI( matches[1].replace(/['"]/g, '') );
                }
				
                if (this.status === 200) {
                    var blob = this.response;
                    if(window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveBlob(blob, filename);
                    }
                    else{
                        var downloadLink = window.document.createElement('a');
                        var contentTypeHeader = request.getResponseHeader("Content-Type");
                        downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: contentTypeHeader }));
                        downloadLink.download = filename;
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                    }
                } else {
					trace("200 이 아니라면 "+"응답코드 ▶ ["+this.status+"]");
					alert("엑셀다운로드 처리중 오류가 발생하였습니다.");
					
				}
            };
			

            request.send(null);
}
