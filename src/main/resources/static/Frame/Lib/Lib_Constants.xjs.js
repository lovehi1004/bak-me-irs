//XJS=Lib_Constants.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************
         * Program ID    : Lib_Constants.xjs
         * Program Name  : 프로그램 관련 상수 정리(3party 제품 및 내부 Program용)
         * Author        : TOBESOFT
         * Created Date  : 2022.08.18
         *
         * =========================================================================
         * 수정일자     수정자    내    용
         * =========================================================================
         * 2023.08.16    TOBESOFT   최초작성
         **************************************************************************/


        /**********************************************************************************
         각 프레임에 해당되는 객체 참조 변수
         **********************************************************************************/


        this.objMenu = {
        				 sMnuIdCol 		: "menuMgno"					// gdsMenu, 메뉴 아이디, MENU_MGNO
        				,sMnuNmCol		: "menuNm" 						// gdsMenu, 메뉴 명칭, MENU_NM
        				,sMenuUrlCol	: "menuUrlAddr" 				// gdsMenu, 프로그램 경로, MENU_URL_ADDR
        				,sMenuLevelCol	: "menuLvl" 				 	// gdsMenu , 필터용도, 메뉴레벨	, 메뉴그룹 필터용 , MENU_LVL
        				,sUpMnuId		: "upMenuMgno" 				   	// gdsMenu , Path용도, 상위메뉴ID , UP_MENU_MGNOMENU_ID
        				,sTopMnuId 		: "topMenuId" 					// gds_menu ,최상위메뉴id , mnuLvlVal : 1 인 메뉴의 mnuId , TOP_MENU_ID
        				,sMenuPath 		: "menuPath" 			 		// gdsMenu ,메뉴 풀 경로 , MENU_PATH
        				,sSortSq  		: "sortSeqo" 					// gdsMenu ,정렬순서 , SORT_SEQO
        				,sPopupYn  		: "popupYn"						// gdsMenu ,팝업여부 , POPUP_YN
        				,sSearchMnuNmCol: "srchMenuNm" 					// gdsMenu ,검색메뉴이름 , SRCH_MENU_NM

        				,sWinIdCol		: "winKey" 						// gdsOpenMenu, 윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
        				,sTitleCol 		: "title"						// gdsOpenMenu, 타이틀, gds_menu 의 mnuNm 정보

         				,sBtnInqAuthrtYnCol		: "inqAuthrtYn" 		// gdsMenu , 조회권한여부
         				,sBtnRegAuthrtYnCol		: "regAuthrtYn" 		// gdsMenu , 등록권한여부
         				,sBtnMdfcnAuthrtYnCol	: "mdfcnAuthrtYn" 		// gdsMenu , 수정권한여부
         				,sBtnDelAuthrtYnCol		: "delAuthrtYn" 		// gdsMenu , 삭제권한여부
         				,sBtnExcnAuthrtYnCol	: "excnAuthrtYn" 		// gdsMenu , 실행권한여부
        			   };


        // 권한정의
        this.objAuth = {
         				 InqAuthrt		: "Y" 						// 조회권한 (Y/N)
         				,RegAuthrt		: "N" 						// 등록권한 (Y/N)
         				,MdfcnAuthrt	: "N" 						// 수정권한 (Y/N)
         				,DelAuthrt		: "N" 						// 삭제권한 (Y/N)
         				,ExcnAuthrt		: "N" 						// 실행권한 (Y/N)
        			   };


        this.User = {
        			  userId                          	: ""        // 사용자ID
        			, upInstMgno                      	: ""        // 상위기관관리번호
        			, instMgno                        	: ""        // 기관관리번호
        			, userClCd                        	: ""        // 사용자구분코드
        			, flnm                            	: ""        // 성명
        			, deptNm                          	: ""        // 부서명
        			, jbpsNm                          	: ""        // 직위명
        			, telDdd                          	: ""        // 전화지역번호
        			, telTlpno                        	: ""        // 전화국번호
        			, telPhino                        	: ""        // 전화개별번호
        			, acntRprsvYn                     	: ""        // 계정대표자여부
        			, instClsfCd                      	: ""        // 기관분류코드
        			, instDtlClsfCd                  	: ""        // 기관세부분류코드
        			, govInstYn                       	: ""        // 정부기관여부
        			, bzentNm                         	: ""        // 사업체명
        			, bzentClCd                       	: ""        // 사업체구분코드
        			, rprsvNm                         	: ""        // 대표자명
        			, roleIdMgno					  	: "" 		// 역할ID관리번호
        			, roleIdMgnoList					: ""		// 역할ID관리번호목록
        			};


        this.objForm = {
        				  sActiveTopMnuId	: ""                // 활성화된 Top Menu 아이디
        				, sActiveFormId     : ""             	// 활성화된 폼 아이디
        				, arrParam      	: []  				// 화면연계 Arg
        				, sCallFunction     : ""             	// 화면연계 Call Function
        				, arrAuthExcept		: ["sampleScript","samplePaging"]
        														// 권한처리 제외화면(개발용 화면위주)
        				, sNodatatext		: "데이터가 없습니다."
        														// Grid 의 nodatatext 용
        				, objEnableForm		: ""				// enable 처리되는 폼 object
        				, objPopupFrameid	: ""				// popup 창 의 ID
        				, sComboSelectText  : "- 선택 -"		// 콤보 선택row Text값
        				, sComboAllText     : "- 전체 -"		// 콤보 전체row Text값
        			   };

        this.Frame = {
        			   nFrameWidth 			: 1920				// MainFrame Width
        			 , nFrameHeight 		: 923				// MainFrame Height
        			 , nWorkFrameWidth 		: 1626				// WorkFrame Width
        			 , nWorkFrameHeight 	: 777				// WorkFrame Height
        			 , sVFrameSetLoginAfter	: "0,*"				// 로그인 성공 후 VFrameSet Separatesize
        			 , sLeftFrameAction		: "FOLD"			// LeftFrame 열림상태 (SHOW) ,접힌상태 (FOLD)
        			 , sSeparateLShow		: "294,*"			// LeftFrame 열림 일때 Separate Size
        			 , sSeparateLFold		: "71,*"			// LeftFrame 접힘 일때 Separate Size
        			 , sVFrameSet1HomeSize	: "45,45,*,0,56"	// VFrameSet1 Separatesize Home
        			 , sVFrameSet1WorkSize	: "45,45,0,*,56"	// VFrameSet1 Separatesize frameWork

        			 , nFrameMdiLimit 		: 10				// MdiFrame Open 화면 갯수 제한
        			 , bMenuOnlyOne			: false				// Menu별 화면을 한개만 띄울지 설정
        			 , bPopupOnlyOne		: true				// Popup의 ID별 화면을 한개만 띄울지 설정
        			 , nPopupSeq 			: 0					// Popup의 ID 생성을 위한 Seq
        			 , sBaseLevel			: 1					// 시작되는 레벨 정보값(ex. Lev1 - 1)
        			 , sLoginGroupCodes		: "AGREE_HSTRY_TYPE_CD|APLY_CL_CD"
        														// 로그인시 조회할 공통코드의 groupCode

        			 , sUsrOsNm				: ""				// 사용자운영체제명	, system.osversion , "Android 2.3", "iOS 6", "Windows 7", "Windows Vista" 등의 값
        			 , sUsrBrsNm			: ""				// 사용자브라우저명 , system.navigatorname , "nexacro platform", "IE", "Chrome", "Gecko" 등의 값
        			 , sUsrBrsVerVal		: ""				// 사용자브라우저버전값 , system.navigatorversion , 버전이 '28.0.1500.95'라면 '28'만 반환
        			 , nMntCnt				: 0					// 모니터수 , system.monitorcount
        			 , nRslnWdn				: 0					// 해상도넓이 , system.getScreenRect(1).width , 모니터의 번호는 1번을 기준으로 width 값
        			 , nRslnHght			: 0					// 해상도높이 , system.getScreenRect(1).height , 모니터의 번호는 1번을 기준으로 height 값

        			 , nToastMilliSec		: 1000				// Toast 메시지의 유지시간(milliseconds)
        			 };

        this.Tran = {
        			  defaultHttptimeout	: 1800			// 단위 : 초 , 30분
        			, bTraceLog				: true
        			, traceLog   			: { LOCAL : true , DEV : true , REAL : false }
        			, nDataType				: 0
        			, DataType   			: { LOCAL : 3 , DEV : 3 , REAL : 3 }				// 0(XML 타입), 1(Binary 타입), 2(SSV 타입) , 3(JSON 형식)
        			, tranSeq 				: 0
        			, toastSeq 				: 0
        			, commCodeSeq 			: 0
        			, nSessiontimeout		: 7200			// 세션만료, 단위 : 초 , 120분
        			, sLoginType			: 1				// 세션타임아웃 시 로그인 유도 처리 방식, 1 : 메인 화면을 로그인화면으로 2 : 팝업으로 로그인 화면으로
        			, tranInfo 				: []
        			, sRecvHeaderDsName		: "common"
        			, webUrl				: "http://127.0.0.1/irs"
        			, webUrlInfo			: { LOCAL 	: "http://127.0.0.1/irs" //"http://127.0.0.1:8081"
        									  , DEV 	: "/irs" //"http://127.0.0.1:8081"
        									  , REAL 	: "/irs" //"http://127.0.0.1:8081"
        									}
        			, fwUrl					: "http://127.0.0.1/irs"
        			, fwUrlInfo 			: { LOCAL 	: "http://127.0.0.1/irs" 		//"http://127.0.0.1:8081"
        									  , DEV 	: "/irs" // http://dev.gov.irs" //"http://127.0.0.1:8081"
        									  , REAL 	: "/irs" //"http://127.0.0.1:8081"
        									}
        			, fileDownInfo 			: []
        			};

        this.File = {
        			   fileSingleUpLoadUrl		: "http://127.0.0.1/irs/common/file/single/upload.irs"
        			 , fileSingleUpLoadUrlInfo	: { LOCAL 	: "http://127.0.0.1/irs/common/file/single/upload.irs"
        									       , DEV 	: "/irs/common/file/single/upload.irs"
        									       , REAL 	: "/irs/common/file/single/upload.irs"
        									       }
        			 , fileMultiUpLoadUrl		: "http://127.0.0.1/irs/common/file/multi/upload.irs"
        			 , fileMultiUpLoadUrlInfo	: { LOCAL 	: "http://127.0.0.1/irs/common/file/multi/upload.irs"
        									       , DEV 	: "/irs/common/file/multi/upload.irs"
        									       , REAL 	: "/irs/common/file/multi/upload.irs"
        									       }
        			 , fileSingleDownLoadUrl	: "http://127.0.0.1/irs/common/file/single/download.irs"
        			 , fileSingleDownLoadUrlInfo: { LOCAL 	: "http://127.0.0.1/irs/common/file/single/download.irs"
        										   , DEV 	: "/irs/common/file/single/download.irs"
        										   , REAL 	: "/irs/common/file/single/download.irs"
        										  }
        			 , fileMultiDownLoadUrl		: "http://127.0.0.1/irs/common/file/multi/download.irs"
        			 , fileMultiDownLoadUrlInfo : { LOCAL 	: "http://127.0.0.1/irs/common/file/multi/download.irs"
        										   , DEV 	: "/irs/common/file/multi/download.irs"
        										   , REAL 	: "/irs/common/file/multi/download.irs"
        										 }
        			 , fileDownLoadRootPath : "%MYDOCUMENT%IRS"
        			};

        this.ExcelInfo = {
        				   excelImportUrl		: "http://127.0.0.1/nexacro-xeni-java/XExportImport"
        				 , excelImportUrlInfo	: { LOCAL 	: "http://127.0.0.1/nexacro-xeni-java/XExportImport"
        										  , DEV 	: "/nexacro-xeni-java/XExportImport"
        										  , REAL 	: "/nexacro-xeni-java/XExportImport"
        										  }
        				 , excelExportUrl		: "http://127.0.0.1/nexacro-xeni-java/XExportImport"
        				 , excelExportUrlInfo	: { LOCAL 	: "http://127.0.0.1/nexacro-xeni-java/XExportImport"
        										  , DEV 	: "/nexacro-xeni-java/XExportImport"
        										  , REAL 	: "/nexacro-xeni-java/XExportImport"
        										  }
        				 };

        this.ReportInfo = {
        				   reportUrl			: "http://127.0.0.1/irs/common/report.irs"
        				 , reportUrlInfo		: { LOCAL 	: "http://127.0.0.1/irs/common/report.irs"
        										  , DEV 	: "/irs/common/report.irs"
        										  , REAL 	: "/irs/common/report.irs"
        										  }
        				 };

        this.ViewerInfo = {
        				   viewerUrl			: "http://127.0.0.1/irs/thirdParty/viewer/skin"
        				 , viewerUrlInfo		: { LOCAL 	: "http://127.0.0.1/irs/thirdParty/viewer/skin"
        										  , DEV 	: "/irs/thirdParty/viewer/skin"
        										  , REAL 	: "/irs/thirdParty/viewer/skin"
        										  }
        				 };

        this.RaonKInfo = {
        				   handlerUrl			: "http://127.0.0.1/irs/common/raonk/check.irs"
        				 , handlerUrlInfo		: { LOCAL 	: "http://127.0.0.1/irs/common/raonk/check.irs"
        										  , DEV 	: "/irs/common/raonk/check.irs"
        										  , REAL 	: "/irs/common/raonk/check.irs"
        										  }
        				 , fileFullDownLoadUrl		: "http://127.0.0.1/irs/common/raonk/download.irs"
        				 , fileFullDownLoadUrlInfo : { LOCAL 	: "http://127.0.0.1/irs/common/raonk/download.irs"
        											  , DEV 	: "/irs/common/raonk/download.irs"
        											  , REAL 	: "/irs/common/raonk/download.irs"
        											  }
        				 , checkFileDownLoadUrl		: "http://127.0.0.1/irs/common/raonk/selected/download.irs"
        				 , checkFileDownLoadUrlInfo : { LOCAL 	: "http://127.0.0.1/irs/common/raonk/selected/download.irs"
        											  , DEV 	: "/irs/common/raonk/selected/download.irs"
        											  , REAL 	: "/irs/common/raonk/selected/download.irs"
        											  }
        				 };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
