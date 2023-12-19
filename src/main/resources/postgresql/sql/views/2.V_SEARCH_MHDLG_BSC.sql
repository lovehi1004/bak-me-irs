CREATE OR REPLACE VIEW irsuser.V_SEARCH_MHDLG_BSC AS
/******************************************************************************
    프로그램명 : [V_SEARCH_MHDLG_BSC][방법론 기본 뷰]
      수행목적 : 검색엔진 연동을 위한 방법론 기본 정보를 반환한다.
      수행결과 : 방법론 목록
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.xx   홍길동  최초 작성
 ******************************************************************************/
SELECT MB.MHDLG_MGNO
     , MD.MHDLG_DGR
	 , CASE WHEN MB.REG_RSN_CD = 'MRT0001' THEN '1'			/* 제정 */
	 		WHEN MB.REG_RSN_CD = 'MRT0002' THEN '2'			/* 개정 */
	 	ELSE ''
	 END AS REG_RSN                                        /* 제개정여부 */
     , MD.MHDLG_ORGT_NM
     , MD.MHDLG_KRN_NM
     , MD.EXPLN_FLMNO
        , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(A.CNCLD_ORGT_NM),'|||')
               FROM irsuser.AGREE_STIPL_BSC A
              INNER JOIN ( SELECT U.NUM
                             , U.CNCLD_MGNO
                             , U.CNCLD_DGR
                          FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASMR.CNCLD_MGNO ORDER BY ASMR.CNCLD_DGR DESC) AS NUM
                                      , ASMR.CNCLD_MGNO
                                      , ASMR.CNCLD_DGR
                                      , ASMR.MHDLG_MGNO
                                      , ASMR.MHDLG_DGR
                                      FROM irsuser.AGREE_STIPL_MHDLG_REL ASMR
                                 WHERE ASMR.MHDLG_MGNO = MD.MHDLG_MGNO 
                                   AND ASMR.MHDLG_DGR = MD.MHDLG_DGR 
                               ) AS U
                         WHERE U.NUM = 1
                     ) AS B
             ON B.CNCLD_MGNO = A.CNCLD_MGNO
            AND B.CNCLD_DGR = A.CNCLD_DGR
           WHERE A.DEL_YN = 'N'
       ) AS CNCLD_ORGT_NM_LIST
        , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(A.CNCLD_KRN_NM),'|||')
               FROM irsuser.AGREE_STIPL_BSC A
              INNER JOIN ( SELECT U.NUM
                             , U.CNCLD_MGNO
                             , U.CNCLD_DGR
                          FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASMR.CNCLD_MGNO ORDER BY ASMR.CNCLD_DGR DESC) AS NUM
                                      , ASMR.CNCLD_MGNO
                                      , ASMR.CNCLD_DGR
                                      , ASMR.MHDLG_MGNO
                                      , ASMR.MHDLG_DGR
                                      FROM irsuser.AGREE_STIPL_MHDLG_REL ASMR
                                 WHERE ASMR.MHDLG_MGNO = MD.MHDLG_MGNO 
                                   AND ASMR.MHDLG_DGR = MD.MHDLG_DGR 
                               ) AS U
                         WHERE U.NUM = 1
                     ) AS B
             ON B.CNCLD_MGNO = A.CNCLD_MGNO
            AND B.CNCLD_DGR = A.CNCLD_DGR
           WHERE A.DEL_YN = 'N'
       ) AS CNCLD_KRN_NM_LIST
        , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(C.NTN_ENG_NM),'|||')
               FROM irsuser.AGREE_STIPL_NTN_DTL A
              INNER JOIN ( SELECT U.NUM
                             , U.CNCLD_MGNO
                             , U.CNCLD_DGR
                          FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASMR.CNCLD_MGNO ORDER BY ASMR.CNCLD_DGR DESC) AS NUM
                                      , ASMR.CNCLD_MGNO
                                      , ASMR.CNCLD_DGR
                                      , ASMR.MHDLG_MGNO
                                      , ASMR.MHDLG_DGR
                                      FROM irsuser.AGREE_STIPL_MHDLG_REL ASMR
                                 WHERE ASMR.MHDLG_MGNO = MD.MHDLG_MGNO 
                                   AND ASMR.MHDLG_DGR = MD.MHDLG_DGR 
                               ) AS U
                         WHERE U.NUM = 1
                     ) AS B
             ON B.CNCLD_MGNO = A.CNCLD_MGNO
            AND B.CNCLD_DGR = A.CNCLD_DGR
          INNER JOIN irsuser.COM_NTN_CD_BSC C
             ON C.IATA_NTN_CD = A.NTN_CD
           WHERE A.DEL_YN = 'N'
       ) AS NTN_ENG_NM_LIST
        , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(C.NTN_KORN_NM),'|||')
               FROM irsuser.AGREE_STIPL_NTN_DTL A
              INNER JOIN ( SELECT U.NUM
                             , U.CNCLD_MGNO
                             , U.CNCLD_DGR
                          FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASMR.CNCLD_MGNO ORDER BY ASMR.CNCLD_DGR DESC) AS NUM
                                      , ASMR.CNCLD_MGNO
                                      , ASMR.CNCLD_DGR
                                      , ASMR.MHDLG_MGNO
                                      , ASMR.MHDLG_DGR
                                      FROM irsuser.AGREE_STIPL_MHDLG_REL ASMR
                                 WHERE ASMR.MHDLG_MGNO = MD.MHDLG_MGNO 
                                   AND ASMR.MHDLG_DGR = MD.MHDLG_DGR 
                               ) AS U
                         WHERE U.NUM = 1
                     ) AS B
             ON B.CNCLD_MGNO = A.CNCLD_MGNO
            AND B.CNCLD_DGR = A.CNCLD_DGR
          INNER JOIN irsuser.COM_NTN_CD_BSC C
             ON C.IATA_NTN_CD = A.NTN_CD
           WHERE A.DEL_YN = 'N'
        ) AS NTN_KORN_NM_LIST
     , (SELECT ARRAY_TO_STRING(ARRAY_AGG(B.BIZ_FLD_ENG_NM), '|||')
           FROM irsuser.MHDLG_FLD_DTL A
          INNER JOIN irsuser.COM_BIZ_FLD_BSC B
             ON B.BIZ_FLD_CD_MGNO = A.BIZ_FLD_CD_MGNO 
          WHERE A.MHDLG_MGNO = MD.MHDLG_MGNO 
            AND A.MHDLG_DGR = MD.MHDLG_DGR 
            AND B.BIZ_FLD_ENG_NM <> ''
            AND B.BIZ_FLD_ENG_NM is not null
       ) AS BIZ_FLD_ENG_NM_LIST
     , (SELECT ARRAY_TO_STRING(ARRAY_AGG(B.BIZ_FLD_KORN_NM), '|||')
           FROM irsuser.MHDLG_FLD_DTL A
          INNER JOIN irsuser.COM_BIZ_FLD_BSC B
             ON B.BIZ_FLD_CD_MGNO = A.BIZ_FLD_CD_MGNO 
          WHERE A.MHDLG_MGNO = MD.MHDLG_MGNO 
            AND A.MHDLG_DGR = MD.MHDLG_DGR 
       ) AS BIZ_FLD_KORN_NM_LIST
        , (SELECT ARRAY_TO_STRING(ARRAY_AGG(B.BIZ_DTLS_FLD_ENG_NM), '|||')
            FROM irsuser.MHDLG_FLD_DTL A
           INNER JOIN irsuser.COM_BIZ_FLD_DTL B 
             ON B.BIZ_FLD_DTLS_CD_MGNO = A.BIZ_FLD_DTLS_CD_MGNO
          WHERE A.MHDLG_MGNO = MD.MHDLG_MGNO 
            AND A.MHDLG_DGR = MD.MHDLG_DGR 
            AND B.BIZ_DTLS_FLD_ENG_NM != ''
            AND B.BIZ_DTLS_FLD_ENG_NM is not null
          ) AS BIZ_DTLS_FLD_ENG_NM_LIST
        , (SELECT ARRAY_TO_STRING(ARRAY_AGG(B.BIZ_DTLS_FLD_KORN_NM), '|||')
            FROM irsuser.MHDLG_FLD_DTL A
           INNER JOIN irsuser.COM_BIZ_FLD_DTL B 
             ON B.BIZ_FLD_DTLS_CD_MGNO = A.BIZ_FLD_DTLS_CD_MGNO
          WHERE A.MHDLG_MGNO = MD.MHDLG_MGNO 
            AND A.MHDLG_DGR = MD.MHDLG_DGR
          ) AS BIZ_DTLS_FLD_KORN_NM_LIST
     , MD.PRCS_YMD
  FROM irsuser.MHDLG_BSC MB
 INNER JOIN irsuser.MHDLG_DTL MD
    ON MD.MHDLG_MGNO = MB.MHDLG_MGNO
 WHERE MD.VLD_YN = 'Y'
   AND MB.DEL_YN = 'N'
   AND MD.DEL_YN = 'N'
;

COMMENT ON VIEW irsuser.V_SEARCH_MHDLG_BSC IS '방법론 기본 뷰';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.MHDLG_MGNO IS '방법론관리번호';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.MHDLG_DGR IS '방법론차수';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.REG_RSN IS '제정개정유형코드';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.MHDLG_ORGT_NM IS '방법론명(원문)';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.MHDLG_KRN_NM IS '방법론명(국문)';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.EXPLN_FLMNO IS '방법론 설명파일 ID';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.CNCLD_ORGT_NM_LIST IS '협정/약정원문명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.CNCLD_KRN_NM_LIST IS '협정/약정국문명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.NTN_ENG_NM_LIST IS '체결국가(영문)명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.NTN_KORN_NM_LIST IS '체결국가(국문)명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.BIZ_FLD_ENG_NM_LIST IS '사업분야영문명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.BIZ_FLD_KORN_NM_LIST IS '사업분야한글명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.BIZ_DTLS_FLD_ENG_NM_LIST IS '사업세부분야영문명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.BIZ_DTLS_FLD_KORN_NM_LIST IS '사업세부분야한글명';
COMMENT ON COLUMN irsuser.V_SEARCH_MHDLG_BSC.PRCS_YMD IS '처리일자';
