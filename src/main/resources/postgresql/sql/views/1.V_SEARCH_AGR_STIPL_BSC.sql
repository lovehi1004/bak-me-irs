CREATE OR REPLACE VIEW V_SEARCH_AGR_STIPL_BSC AS
/******************************************************************************
    프로그램명 : [V_SEARCH_AGR_STIPL_BSC][협정 · 약정 기본 뷰]
      수행목적 : 검색엔진 연동을 위한 협정 · 약정 기본 정보를 반환한다.
      수행결과 : 협정 · 약정 기본 목록
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.04   홍길동  최초 작성
 ******************************************************************************/
SELECT U.CNCLD_MGNO                                         /* 체결관리번호 */
	 , U.CNCLD_DGR                                          /* 체결차수 */
	 , CASE WHEN U.CNCLD_CL_CD = 'CNC0001' THEN '1'			/* 협정 */
	 		WHEN U.CNCLD_CL_CD = 'CNC0002' THEN '2'			/* 약정 */
	 		WHEN U.CNCLD_CL_CD = 'CNC0003' THEN '3'			/* MOU */
	 	ELSE ''
	 END AS CNCLD_CL                                        /* 협정약정구분 */
	 , U.CNCLD_ORGT_NM                                      /* 협정 · 약정명(원문) */
	 , U.CNCLD_KRN_NM                                       /* 협정 · 약정명(국문) */
	 , U.ORGT_CNCLD_FLMNO                                   /* 원문 첨부파일 ID */
	 , U.KRN_CNCLD_FLMNO                                    /* 국문 첨부파일 ID */
	 , U.CNSLTNGRP_NM                                       /* 협의체명 */
	 , U.CNSLTN_CN                                          /* 협의내용(회의결과) */
	 , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(B.NTN_ENG_NM),'|||')
	 	   FROM CNSLTNGRP_DTL A
	 	  INNER JOIN COM_NTN_CD_BSC B
	 	     ON B.IATA_NTN_CD  = A.NTN_CD
	 	  WHERE A.CNSLTNGRP_MGNO = U.CNSLTNGRP_MGNO
	   ) AS NTN_ENG_NM_LIST									/* 국가명(원문)목록 */
	 , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(B.NTN_KORN_NM),'|||')
	 	   FROM CNSLTNGRP_DTL A
	 	  INNER JOIN COM_NTN_CD_BSC B
	 	     ON B.IATA_NTN_CD  = A.NTN_CD
	 	  WHERE A.CNSLTNGRP_MGNO = U.CNSLTNGRP_MGNO
	   ) AS NTN_KORN_NM_LIST								/* 국가명(국문)목록 */
	 , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(A.GMBR_ORGT_NM),'|||')
	 	   FROM CNSLTNGRP_DTL A
	 	  WHERE A.CNSLTNGRP_MGNO = U.CNSLTNGRP_MGNO
	   ) AS GMBR_ORGT_NM_LIST								/* 구성원명(원문)목록 */
	 , ( SELECT ARRAY_TO_STRING(ARRAY_AGG(A.GMBR_KRN_NM),'|||')
	 	   FROM CNSLTNGRP_DTL A
	 	  WHERE A.CNSLTNGRP_MGNO = U.CNSLTNGRP_MGNO
	   ) AS GMBR_KRN_NM_LIST								/* 구성원명(국문)목록 */
  FROM ( SELECT V.CNCLD_MGNO          
		 	  , V.CNCLD_DGR           
		 	  , V.CNCLD_CL_CD         
		 	  , V.CNCLD_ORGT_NM       
		 	  , V.CNCLD_KRN_NM        
		 	  , V.ORGT_CNCLD_FLMNO    
		 	  , V.KRN_CNCLD_FLMNO     
		 	  , V.CNSLTNGRP_NM         
		 	  , V.CNSLTN_CN            
		 	  , V.CNSLTNGRP_MGNO            
	      FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASB.CNCLD_MGNO ORDER BY ASB.CNCLD_DGR DESC) AS NUM
			 	  	  , ASB.CNCLD_MGNO
			 	  	  , ASB.CNCLD_DGR
			 	  	  , ASB.CNCLD_CL_CD
			 	  	  , ASB.CNCLD_ORGT_NM
			 	  	  , ASB.CNCLD_KRN_NM
			 	  	  , ASB.ORGT_CNCLD_FLMNO
			 	  	  , ASB.KRN_CNCLD_FLMNO
			 	  	  , CB.CNSLTNGRP_NM
			 	  	  , CB.CNSLTN_CN
			 	  	  , CB.CNSLTNGRP_MGNO 
			   	   FROM AGR_STIPL_BSC ASB
			   	   LEFT OUTER JOIN CNSLTNGRP_BSC CB
				 	 ON CB.CNCLD_MGNO = ASB.CNCLD_MGNO 
					AND CB.CNCLD_DGR = ASB.CNCLD_DGR
			  	  WHERE ASB.DEL_YN = 'N'
			   ) V
	     WHERE V.NUM = 1
	   ) U
 ;

COMMENT ON VIEW V_SEARCH_AGR_STIPL_BSC IS '협정 · 약정 기본 뷰';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNCLD_MGNO IS '체결관리번호';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNCLD_DGR IS '체결차수';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNCLD_CL IS '협정약정구분';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNCLD_ORGT_NM IS '협정 · 약정명(원문)';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNCLD_KRN_NM IS '협정 · 약정명(국문)';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.ORGT_CNCLD_FLMNO IS '원문 첨부파일 ID';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.KRN_CNCLD_FLMNO IS '국문 첨부파일 ID';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNSLTNGRP_NM IS '협의체명';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.CNSLTN_CN IS '협의내용(회의결과)';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.NTN_ENG_NM_LIST IS '국가명(원문)목록';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.NTN_KORN_NM_LIST IS '국가명(국문)목록';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.GMBR_ORGT_NM_LIST IS '구성원명(원문)목록';
COMMENT ON COLUMN V_SEARCH_AGR_STIPL_BSC.GMBR_KRN_NM_LIST IS '구성원명(국문)목록';
