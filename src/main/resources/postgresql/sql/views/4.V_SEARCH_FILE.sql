CREATE OR REPLACE VIEW irsuser.V_SEARCH_FILE AS
/******************************************************************************
    프로그램명 : [V_SEARCH_FILE][첨부파일 뷰]
      수행목적 : 검색엔진 연동을 위한 첨부파일 정보를 반환한다.
      수행결과 : 첨부파일 목록
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.xx   홍길동  최초 작성
 ******************************************************************************/
SELECT
       B.FILE_GROUP_MGNO						/* 파일그룹관리번호 */
     , B.FILE_MGNO								/* 파일관리번호 */
     , B.file_path || '/' || (CASE WHEN B.file_extn_nm is null or B.file_extn_nm = '' THEN B.file_nm ELSE B.file_nm || '.' || B.file_extn_nm END) AS file_full_path
     , B.ORGNL_FILE_NM							/* 원본 파일 명 */
  FROM irsuser.COM_FILE_GROUP_BSC A
 INNER JOIN irsuser.COM_FILE_DTL B
    ON B.FILE_GROUP_MGNO = A.FILE_GROUP_MGNO 
   AND A.DEL_YN = 'N'
   AND B.DEL_YN = 'N'
 INNER JOIN (
 	SELECT DISTINCT U.FILE_GROUP_MGNO
 	  FROM (
		/* 협정약정 뷰 파일정보 조회 */
		SELECT CASE WHEN B.GN = 1 THEN A.ORGT_CNCLD_FLMNO
					ELSE A.KRN_CNCLD_FLMNO
			   END AS FILE_GROUP_MGNO
		FROM (
				SELECT VSASB.ORGT_CNCLD_FLMNO, VSASB.KRN_CNCLD_FLMNO
				  FROM irsuser.V_SEARCH_AGREE_STIPL_BSC VSASB
			 ) A
			, ( SELECT 1 AS GN UNION ALL SELECT 2 AS GN) B
			
		UNION ALL
		
	 	/* 방법론 뷰 파일정보 조회 */
		SELECT VSHB.EXPLN_FLMNO AS FILE_GROUP_MGNO FROM irsuser.V_SEARCH_MHDLG_BSC VSHB
		
		UNION ALL
		
		/* 국제감축사업 뷰 파일정보 조회 */
		SELECT VSIB.BIZ_PLND_FLMNO AS FILE_GROUP_MGNO FROM irsuser.V_SEARCH_IRB_BSC VSIB
 	  ) U
  ) D
    ON D.FILE_GROUP_MGNO = A.FILE_GROUP_MGNO
;

COMMENT ON VIEW irsuser.V_SEARCH_FILE IS '첨부파일 뷰';
COMMENT ON COLUMN irsuser.V_SEARCH_FILE.FILE_GROUP_MGNO IS '파일그룹관리번호';
COMMENT ON COLUMN irsuser.V_SEARCH_FILE.FILE_MGNO IS '파일관리번호';
COMMENT ON COLUMN irsuser.V_SEARCH_FILE.FILE_FULL_PATH IS '실제파일전체경로';
COMMENT ON COLUMN irsuser.V_SEARCH_FILE.ORGNL_FILE_NM IS '원본파일명';
