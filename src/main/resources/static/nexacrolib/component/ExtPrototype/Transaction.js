/**
*  @FileName 	Transaction.js
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.08.30
*  @Desction	Transaction 관련된 공통함수 관련된 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2023.08.30     		TOBESOFT 	            최초 생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/***************************************************************************
 * gfnTransaction	  					: transaction 호출 함수
 * gfnTranCallback	  					: Transation 통신 콜백함수
 * gfnTranMsgCallback					: transaction 관련 Message팝업호출 callback

 **************************************************************************/


/**
 * @desc	transaction 호출 함수
 * @param {object} objForm			- 호출한 화면 Form
 * @param {object} objArgs			- transaction arguments
 *										svcId    			transaction을 구분하기 위한 svc ID 문자열
 *										url	     			transaction을 요청할 주소,  서버측 Service 주소 문자열
 *										inds     			입력값으로 보낼 Dataset, a=b형태로 실제이름과 입력이름을 매칭
 *										outds    			처리 결과를 받을 Dataset,
 *										args	 			입력값으로 보낼 arguments, 변수=값을 빈칸으로 구분한다. strFormData='20220816'
 *										callback 			transaction의 결과를 받을 callback 함수 (ex. fnCallback)
 *										objActionBtn	 	기능수행을 위해 클릭한 버튼 object
 *										async    			비동기 여부(true: Async, false : Sync), 생략하면 비동기
 *										dataType 			전송할 형태를 지정합니다. Default : 0 (XML 타입), 0(XML 타입),1(Binary 타입), 2(SSV 타입)
 *										compress 			통신시 PostData를 압축할지 여부를 지정합니다. Default : false
 *										httptimeout			Http통신시 Wait Time(초)를 설정합니다. Default : this.Tran.defaultHttptimeout
 *										setWaitCursorYn		화면에 Wait Cursor의 표시 여부 (Y - 표시 / N - 표시안함) , setWaitCursor method 활용
 *										commCodeSvcId		공통코드조회 개발자의 서비스 ID
 *										commCodeSearchDsNm 	공통코드조회 서비스 호출시 조회정보 Dataset 명
 *										commCodeResultDsNm 	공통코드조회 서비스 호출시 수신받을 Dataset 명 
 * @return N/A
 */
pForm.gfnTransaction = function (objForm, objArgs)
{
	//var objStampDate = new Date();
	//trace("[gfnTransaction] 시작 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#"+"|objForm.name:"+objForm.name+"|objArgs.svcId:"+objArgs.svcId);

	// 시작시 시간정보 변수화. Header 에 시간 정보로 활용
	// var sYYYYMMDDHHMMSSTTT = this.gfn_todayTimeMilisec();

	if (this.gfnIsNull(objForm.fvApp)) objForm.fvApp = nexacro.getApplication();
	if (this.gfnIsNull(objForm.fvEnv)) objForm.fvEnv = nexacro.getEnvironment();

	// 폼 단독실행시 빈값에 따른 보완처리용
	try
	{
		if(this.gfnIsNull(objForm.fvApp.Tran))
		{
			objForm.fvApp.Tran = {};
			objForm.fvApp.Tran.tranInfo = [];
		}

		if(this.gfnIsNull(objForm.fvApp.Frame))
		{
			objForm.fvApp.Frame = {};
		}

		if(this.gfnIsNull(objForm.fvApp.User))
		{
			objForm.fvApp.User = {};
		}
	}
	catch (e)
	{
		trace("[gfnTransaction]e.message:"+e.messgae);
	}
	////////////////////////////////////////////////////////////////////////////

	trace("[gfnTransaction]==============================================================");
	trace("objForm:"+objForm);
	trace("svcId:"+objArgs.svcId);
	trace("url:"+objArgs.url);
	trace("inds:"+objArgs.inds);
	trace("outds:"+objArgs.outds);
	trace("args:"+objArgs.args);
	trace("callback:"+objArgs.callback);
	trace("async:"+objArgs.async);
	trace("dataType:"+objArgs.dataType);
	trace("compress:"+objArgs.compress);
	trace("httptimeout:"+objArgs.httptimeout);
	trace("setWaitCursorYn:"+objArgs.setWaitCursorYn);
	
	// 통신전 오류 체크
	if(this.gfnIsNull(objArgs.svcId) || this.gfnIsNull(objArgs.url))
	{
		this.gfnShowMessage(this, ["Alert","gfnTransaction() 함수의 인자값이 부족합니다."]);
		return false;
	}

	var sSvcUrl = nexacro.getEnvironment().services["svcUrl"].url+objArgs.url;

	if(this.gfnIsNull(objForm.fvApp.Tran.tranSeq))
	{
		objForm.fvApp.Tran.tranSeq = 0;
	}

	var nTranSeq = objForm.fvApp.Tran.tranSeq+1;
	objForm.fvApp.Tran.tranSeq = nTranSeq;

	trace("[gfnTransaction]objForm.fvApp.Tran.tranSeq:"+objForm.fvApp.Tran.tranSeq+"|objArgs.svcId:"+objArgs.svcId+"|objForm.name:"+objForm.name);

	// 통신용 svcId 생성
	var sNewSvcID = objArgs.svcId+"_"+nTranSeq;

	// 통신전 기본 Parameters 설정
	// bAsync, nDataType, bCompress
	if(this.gfnIsNull(objArgs.async) || (objArgs.async != true && objArgs.async != false))
	{
		objArgs.async = true;
	}

	if(this.gfnIsNull(objArgs.dataType))
	{
		if(!this.gfnIsNull(objForm.fvApp.Tran.nDataType))
		{
			objArgs.dataType = objForm.fvApp.Tran.nDataType;
		}
		else
		{
			objArgs.dataType = 3; // 0 XML  // 3 JSON 
		}
	}

	if(this.gfnIsNull(objArgs.compress) || (objArgs.compress != true && objArgs.compress != false))
	{
		objArgs.compress = false;
	}

	if(!this.gfnIsNull(objArgs.httptimeout))
	{
		objForm.fvEnv.set_httptimeout(objArgs.httptimeout);
	}

	// Default : Y , 화면에 Wait Cursor의 표시 여부 (Y - 표시 / N - 표시안함) , setWaitCursor method 활용
	if(this.gfnIsNull(objArgs.setWaitCursorYn))
	{
		objArgs.setWaitCursorYn = "Y";
	}

	// 통신전 sInDs 에 Transaction Dummy Dataset 추가
	var sSendDummyDsName = "dsDummy_"+sNewSvcID;
	var objSendDummyDs  = this.gfnCreateDs(objForm, sSendDummyDsName, "", true);
	objArgs.inds += (" dsDummy=" + sSendDummyDsName);

	// 통신전 sOutDs 에 Transaction Header Dataset 추가
	var sRecvHeaderDsName = "gdsRecvHeader_"+sNewSvcID;
	var objRecvHeaderDs  = this.gfnCreateDs(objForm, sRecvHeaderDsName, "", true);
	objArgs.outds += (" " + sRecvHeaderDsName + "=" + objForm.fvApp.Tran.sRecvHeaderDsName);

	trace("objArgs.inds:"+objArgs.inds);
	trace("objArgs.outds:"+objArgs.outds);
	
	// Http Header 셋팅, nexacro.setHTTPHeaderVariable( strID, varVal )
	nexacro.setHTTPHeaderVariable("Authorization" 	, nexacro.getPrivateProfile("AccessToken"));	// 헤더_Access Token
	nexacro.setHTTPHeaderVariable("RefreshToken" 	, nexacro.getPrivateProfile("RefreshToken"));	// 헤더_Refresh Token
	
	// 통신전 Parameters 를 Tran.tranInfo 에 넣기
	var objTranInfo = {};
	objTranInfo.objForm = objForm;
	objTranInfo.svcId = objArgs.svcId;
	objTranInfo.inDs = objArgs.inds;
	objTranInfo.outDs = objArgs.outds;
	objTranInfo.arg = objArgs.args;
	objTranInfo.callbackFunc = objArgs.callback;
	objTranInfo.httptimeout = objArgs.httptimeout;
	objTranInfo.sendDummyDsName = [sSendDummyDsName];
	objTranInfo.recvHeaderDsName = [sRecvHeaderDsName];
	objTranInfo.commCodeSvcId = objArgs.commCodeSvcId;
	objTranInfo.commCodeSearchDsNm = objArgs.commCodeSearchDsNm;
	objTranInfo.commCodeResultDsNm = objArgs.commCodeResultDsNm;
	
	objForm.fvApp.Tran.tranInfo[sNewSvcID] = objTranInfo;

	// environment 에서 후처리용 (gfnClearCallbackFunc)
	var sTmpSvcUrl = nexacro.getEnvironment().services["svcUrl"].url;
	objForm[sTmpSvcUrl] = sNewSvcID;

	trace("호출전 최종=======================================================================");
	trace("objForm:"+objForm+"|objForm.id:"+objForm.id+"|objForm.parent.id:"+objForm.parent.id);
	trace("nexacro.getEnvironment().services['svcUrl'].url:"+nexacro.getEnvironment().services["svcUrl"].url);
	trace("sSvcUrl:"+sSvcUrl);
	trace("objArgs.url:"+objArgs.url);
	trace("objArgs.inds:"+objArgs.inds);
	trace("objArgs.outds:"+objArgs.outds);
	trace("objArgs.args:"+objArgs.args);
	trace("objArgs.callback:"+objArgs.callback);
	trace("objArgs.async:"+objArgs.async);
	trace("objArgs.dataType:"+objArgs.dataType);
	trace("objArgs.compress:"+objArgs.compress);
	trace("objArgs.httptimeout:"+objArgs.httptimeout);
	trace("objArgs.setWaitCursorYn:"+objArgs.setWaitCursorYn);


	// var objStampDate = new Date();
	//trace("[gfnTransaction]   끝 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#"+"|objForm.name:"+objForm.name+"|objArgs.svcId:"+objArgs.svcId);
	
	// 통신호출
	objForm.transaction( sNewSvcID
					   , sSvcUrl
					   , objArgs.inds
					   , objArgs.outds
					   , objArgs.args
					   , "gfnTranCallback"
					   , objArgs.async
					   , objArgs.dataType
					   , objArgs.compress
					   );

	// 예외적으로 waitcursor 을 띄우지 않을 경우
	if(objArgs.setWaitCursorYn == "N")
	{
		objForm.setWaitCursor( false, true );
	}
};

/**
 * @desc	공통 Transation 통신 콜백함수
 * @param {String} sSvcId			- 서비스id
 * @param {Number} nErrCode			- 응답코드
 * @param {String} sErrMsg			- 응답메세지
 * @return N/A
 */
pForm.gfnTranCallback = function (sSvcId, nErrCode, sErrMsg)
{
	//var objStampDate = new Date();
	//trace("[gfnTranCallback] 시작 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#|sSvcId:"+sSvcId);

	var i;
	var objApp = nexacro.getApplication();
	var objEnv = nexacro.getEnvironment();
	var bSvcError = false;		// 서비스 공통 에러

	try
	{
		// 폼 단독실행시 빈값에 따른 보완처리용
		if(this.gfnIsNull(objApp.Tran))
		{
			objApp.Tran = {};
			objApp.Tran.tranInfo = [];
		}

		if(this.gfnIsNull(objApp.User))
		{
			objApp.User = {};
		}
	}
	catch (e)
	{

	}

	trace("[gfnTranCallback]sSvcId:"+sSvcId+"\nnErrCode:"+nErrCode+"\nsErrMsg:"+sErrMsg);
	
	var objTranInfo = objApp.Tran.tranInfo[sSvcId];
	var objForm = objTranInfo.objForm;

	trace("nexacro.getApplication().Tran.tranInfo[sSvcId].svcId:"+nexacro.getApplication().Tran.tranInfo[sSvcId].svcId);
	trace("nexacro.getApplication().Tran.tranInfo[sSvcId].callbackFunc:"+nexacro.getApplication().Tran.tranInfo[sSvcId].callbackFunc);


	// httptimeout 기본설정값으로 변경
	objEnv.set_httptimeout(objApp.Tran.defaultHttptimeout);

	// 에러시 처리
	if(nErrCode < 0)
	{
		// 에러시 공통의 후처리
		// 에러인데 ErrorMsg 공백으로 오면 엔진 내부에서 Success 로 설정됨. 보완처리
		if(!this.gfnIsNull(sErrMsg))
		{
			if(sErrMsg.toUpperCase() == "SUCCESS")
			{
				sErrMsg = "ERROR";
			}
		}

		/*
			에러관련 코드 및 처리 방법 기술
		*/
// 		bSvcError = true;		// true 이면 아래 후처리에서 화면으로 callback 함수 호출하지 않음.
		// 세션유효한 경우 자동로그인 처리시는 메시지 표시 안함.
		if(objTranInfo.svcId != "sessionLogin")
		{
			this.gfnShowMessage(this, ["Alert",sErrMsg], "");
		}
	}
	else
	{
		// 정상일때 공통의 후처리
		
		// 공통용 transaction 호출에 대한 후처리.
		
		// 공통 recvHeaderDs 처리 , objForm[objTranInfo.recvHeaderDsName]
		if(!this.gfnIsNull(objTranInfo.recvHeaderDsName) && !this.gfnIsNull(objForm[objTranInfo.recvHeaderDsName]))
		{
			var objRecvHeaderDs = objForm[objTranInfo.recvHeaderDsName];
			if(objRecvHeaderDs.getRowCount() > 0)
			{
				var sCode = objRecvHeaderDs.getColumn(0, "code");
				var sMessage = objRecvHeaderDs.getColumn(0, "message");
				var sReissueToken = objRecvHeaderDs.getColumn(0, "reissueToken");
				var sAccessToken = objRecvHeaderDs.getColumn(0, "accessToken");
				var sRefreshToken = objRecvHeaderDs.getColumn(0, "refreshToken");
				trace("sCode:"+sCode+"|sReissueToken:"+sReissueToken);
				
				if(sCode == "9000")
				{
					// 로그인 성공 (code : 9000) 시 정보 설정
					nexacro.setPrivateProfile("AccessToken", sAccessToken);
					nexacro.setPrivateProfile("RefreshToken", sRefreshToken);
				}
				else if(sCode == "9001")
				{
					// 로그아웃 성공 (code : 9001) 시 정보 갱신
					nexacro.setPrivateProfile("AccessToken", "");
					nexacro.setPrivateProfile("RefreshToken", "");
				}
				else if(sCode != "9000" && sCode != "9001" && sReissueToken == "Y")
				{
					// 토큰 재발급시 (code != 9000, 9001) 시 정보 갱신
					nexacro.setPrivateProfile("AccessToken", sAccessToken);
					nexacro.setPrivateProfile("RefreshToken", sRefreshToken);
				}
				else if(sCode == "8001" || sCode == "8002" || sCode == "8003" || sCode == "8004"
				 || sCode == "8011" || sCode == "8012" || sCode == "8013" || sCode == "8403"
				 || sCode == "9002")
				{
					this.gfnShowMessage(objForm, ["alert", sMessage], "", "gfnTranMsgCallback", "tranLogout");
					bSvcError = true;
				}
				// 이용정지된 사용자 - 8604 , 폐쇄된 계정 - 8605 , 문서뷰어 변환오류 발생시 - 3001
				// 물리파일이 존재하지 않은 경우 - 4998 , 파일관련 기타 오류 - 4999
				else if(sCode == "8604" || sCode == "8605" || sCode == "3001" || sCode == "4998"
				 || sCode == "4999")
				{
					this.gfnShowMessage(objForm, ["alert", sMessage], "", "gfnTranMsgCallback", "bizErr");
					bSvcError = true;
				}
				// 세션유효한 경우 자동로그인 처리 실패시
				else if(sCode == "9500")
				{
					bSvcError = true;
				}					
			}
		}
		
		if(objTranInfo.svcId.indexOf("login") > -1 )
		{
			// 로그인 관련 응답코드
			/*
				8603	올바른 권한이 아닙니다.
				9101	계정이 존재하지 않습니다. 회원가입 진행 후 로그인 해주세요.
				9102	비밀번호가 누락되었습니다.
				9103	아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.
			*/
			if(sCode == "8603" || sCode == "9101" || sCode == "9102" || sCode == "9103")
			{
				this.gfnShowMessage(objForm, ["alert", sMessage], "", "gfnTranMsgCallback", "loginErr");
				bSvcError = true;
			}
		}
		
		/*
			★★★ 공통코드 관련 dataset 구조, 서비스 연동 수정 필요
		*/		
		// 공통코드 조회 후처리용
		if(objTranInfo.svcId == "_getSvcCommonCode")
		{
			var objSearchDs = objForm[objTranInfo.commCodeSearchDsNm];
			var objResultDs = objForm[objTranInfo.commCodeResultDsNm];

			// 후처리
			if(objSearchDs.getRowCount() > 0 && objResultDs.getRowCount() > 0)
			{
				var dsNm = objSearchDs.getColumn(0,"dsName");
				var sGroupId = objSearchDs.getColumn(0,"groupCodes");
				var sHeadFlag = objSearchDs.getColumn(0,"headflag");
				var sUseYn   = objSearchDs.getColumn(0,"useYn");
				
				var arrDsName = dsNm.split("|");
				var arrGroupId = sGroupId.split("|");
				var arrHeadFlag = sHeadFlag.split("|");
				var arrUseYn   = sUseYn.split("|");
				
				var i, j;
				var sCompDsNm;
				var objCompDs;
				var sFindString;
				var	sGroupCdMgno;
				
				for (i = 0; i < arrGroupId.length; i++)
				{
					sCompDsNm = arrDsName[i];
					objCompDs = this.gfnCreateDs(objForm, sCompDsNm);
					objResultDs.filter("groupCdMgno == '" + arrGroupId[i] + "'");
					if(objResultDs.getRowCount() > 0)
					{
						objCompDs.copyData(objResultDs, true);	// REASON_COPY

						// 복사전 gdsCommCode에 있는지 체크, gdsCommCode 에 없을때만 복사처리.
						var sFindString = "groupCdMgno == " + nexacro.wrapQuote(arrGroupId[i]);
						if(objApp.gdsCommCode.findRowExpr(sFindString) < 0)
						{
							var nAppendCnt = objApp.gdsCommCode.appendData( objCompDs , true);
							//trace("글로벌DS에 Row추가됨 >>>>>>>>>>>>>"+arrGroupId[i]+"::::"+nAppendCnt);
						}

						// N(없음), B(빈 문자열), S(선택), A(전체)
						if(!this.gfnIsNull(arrHeadFlag[i]))
						{
							sGroupCdMgno	= objCompDs.getColumn(0,"groupCdMgno");

							// N(없음), B(빈 문자열), S(선택), A(전체)
							if(arrHeadFlag[i] == "B")				// B(빈 문자열)
							{
								nRow = objCompDs.insertRow(0);
								objCompDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
								objCompDs.setColumn(nRow,"cdMgno","");
								objCompDs.setColumn(nRow,"cdKornNm","");
								objCompDs.setColumn(nRow,"sortSeqo",0);
							}
							else if(arrHeadFlag[i] == "S")				// S(선택)
							{
								nRow = objCompDs.insertRow(0);
								objCompDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
								objCompDs.setColumn(nRow,"cdMgno","");
								objCompDs.setColumn(nRow,"cdKornNm",objApp.objForm.sComboSelectText);
								objCompDs.setColumn(nRow,"sortSeqo",0);
							}
							else if(arrHeadFlag[i] == "A")				// A(전체)
							{
								nRow = objCompDs.insertRow(0);
								objCompDs.setColumn(nRow,"groupCdMgno", sGroupCdMgno);
								objCompDs.setColumn(nRow,"cdMgno","");
								objCompDs.setColumn(nRow,"cdKornNm",objApp.objForm.sComboAllText);
								objCompDs.setColumn(nRow,"sortSeqo",0);								
							}
							objCompDs.applyChange();
						}
					}
				}
			}

			// 화면의 callBack 함수 호출
			if(!objForm.gfnIsNull(objTranInfo.commCodeSvcId) && !objForm.gfnIsNull(objForm[objTranInfo.callbackFunc]))
			{
				objForm[objTranInfo.callbackFunc].call(objForm, objTranInfo.commCodeSvcId, 0, "SUCCESS");
			}			
		}		
	}

	// 지정된 에러 이외에는 화면으로 콜백함수 호출처리
	if(!bSvcError)
	{
		// 화면의 callBack 함수 실행
		// 정상에서 callback 하는(공통코드 조회) 것은 제외하고
		if(objTranInfo.svcId != "_getSvcCommonCode")	
		{
			if(!objForm.gfnIsNull(objTranInfo.svcId) && !objForm.gfnIsNull(objForm[objTranInfo.callbackFunc]))
			{
				objForm[objTranInfo.callbackFunc].call(objForm, objTranInfo.svcId, nErrCode, sErrMsg);
			}
		}
	}

	// 동적으로 생성한 Header 용 Dataset 제거
	
	for(i=0;i<objTranInfo.sendDummyDsName.length;i++)
	{
		objForm.removeChild(objTranInfo.sendDummyDsName[i]);
	}	
	for(i=0;i<objTranInfo.recvHeaderDsName.length;i++)
	{
		objForm.removeChild(objTranInfo.recvHeaderDsName[i]);
	}
	delete objApp.Tran.tranInfo[sSvcId];

	//var objStampDate = new Date();
	//trace("[gfnTranCallback]   끝 = "+ objStampDate.getHours() + " : " + objStampDate.getMinutes() + " : " + objStampDate.getSeconds() + " : " + objStampDate.getMilliseconds()+"========================================#|sSvcId:"+sSvcId);
};

/**
 * @desc	transaction 관련 Message팝업호출 callback
 * @param {string} sPopupId			- Message팝업 id
 * @param {object} objRtn			- return 정보
 * @return N/A
 */
pForm.gfnTranMsgCallback = function(sPopupId, objRtn) 
{
	trace("[gfnTranMsgCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

	switch (sPopupId)
	{
		case "tranLogout" :
			// 후처리 코드
			// 로그아웃 호출 처리
			nexacro.getApplication().gvFrameTop.form.fnLogout();
			break;
		case "bizErr" :
			// 후처리 코드 , 현재는 메시지만 출력하는 걸로
			
			break;			
		case "loginErr" :
			// 후처리 코드 , 현재는 메시지만 출력하는 걸로
			
			break;
		default:
			break;
	}	
};