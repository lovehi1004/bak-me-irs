CREATE OR REPLACE VIEW irsuser.V_SEARCH_IRB_BSC AS
/******************************************************************************
    프로그램명 : [V_SEARCH_IRB_BSC][국체감축사업 기본 뷰] 
      수행목적 : 검색엔진 연동을 위한 국체감축사업 기본 정보를 반환한다.
      수행결과 : 국체감축사업 목록
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.xx   홍길동  최초 작성
 ******************************************************************************/
SELECT A.BIZ_MNG_NO																					/* 사업관리번호 */
     , A.VLD_BIZ_DGR																				/* 사업차수 */
     , CASE WHEN B.BIZ_TYPE_CD = 'BTC0003' THEN '[' || C.BIZ_ORGT_NM ||'] '||B.BIZ_ORGT_NM
     		ELSE B.BIZ_ORGT_NM
       END AS BIZ_ORGT_NM																			/* 사업명(원문) */
     , CASE WHEN B.BIZ_TYPE_CD = 'BTC0003' THEN '[' || C.BIZ_KRN_NM ||'] '||B.BIZ_KRN_NM
     		ELSE B.BIZ_KRN_NM
       END AS BIZ_KRN_NM																			/* 사업명(국문) */
     , E.BIZ_FLD_ENG_NM																				/* 사업분야영문명 */
     , E.BIZ_FLD_KORN_NM																			/* 사업분야한글명 */
     , F.BIZ_DTLS_FLD_ENG_NM																		/* 사업세부분야영문명 */
     , F.BIZ_DTLS_FLD_KORN_NM																		/* 사업세부분야한글명 */
     , B.BIZ_PLND_FLMNO																				/* 사업계획서 ID */
     , D.CNCLD_ORGT_NM																				/* 협정 · 약정명(원문) */
     , D.CNCLD_KRN_NM																				/* 협정 · 약정명(국문) */
     , (SELECT ARRAY_TO_STRING(ARRAY_AGG(MD.MHDLG_ORGT_NM), '|||')
     	  FROM irsuser.IRB_MHDLG_DTL IMD
     	 INNER JOIN irsuser.MHDLG_DTL MD
     	 	ON MD.MHDLG_MGNO = IMD.MHDLG_MGNO
     	   AND MD.VLD_YN = 'Y'
     	   AND MD.DEL_YN = 'N'
     	 WHERE IMD.BIZ_MNG_NO = B.BIZ_MNG_NO 
     	   AND IMD.BIZ_DGR  = B.BIZ_DGR 
		   AND A.DEL_YN = 'N'
       ) AS MHDLG_ORGT_NM_LIST																		/* 방법론명(원문) */
     , (SELECT ARRAY_TO_STRING(ARRAY_AGG(MD.MHDLG_KRN_NM), '|||')
     	  FROM irsuser.IRB_MHDLG_DTL IMD
     	 INNER JOIN irsuser.MHDLG_DTL MD
     	 	ON MD.MHDLG_MGNO = IMD.MHDLG_MGNO
     	   AND MD.VLD_YN = 'Y'
     	   AND MD.DEL_YN = 'N'
     	 WHERE IMD.BIZ_MNG_NO = B.BIZ_MNG_NO 
     	   AND IMD.BIZ_DGR  = B.BIZ_DGR 
		   AND A.DEL_YN = 'N'
       ) AS MHDLG_KRN_NM_LIST																		/* 방법론명(국문) */
     , A.MDFCN_DT																					/* 수정일시 */
  FROM irsuser.IRB_BSC A
 INNER JOIN irsuser.IRB_DTL B
	ON A.BIZ_MNG_NO = B.BIZ_MNG_NO 
   AND A.VLD_BIZ_DGR = B.BIZ_DGR 
  LEFT OUTER JOIN ( SELECT T2.BIZ_MNG_NO
  						 , T2.BIZ_DGR
  						 , T2.BIZ_ORGT_NM
  						 , T2.BIZ_KRN_NM 
				      FROM irsuser.IRB_BSC T1 
				     INNER JOIN irsuser.IRB_PRGRM_DTL T2 
					    ON T1.BIZ_MNG_NO = T2.BIZ_MNG_NO 
				       AND T1.VLD_BIZ_DGR = T2.BIZ_DGR 
				     WHERE T1.DEL_YN = 'N'
				       AND T2.DEL_YN = 'N'
				  ) C
	ON B.PRGRM_MNG_NO = C.BIZ_MNG_NO
 INNER JOIN ( SELECT V.CNCLD_MGNO          
		 	  	   , V.CNCLD_DGR           
		 	  	   , V.CNCLD_ORGT_NM       
		 	       , V.CNCLD_KRN_NM        
	      	    FROM ( SELECT ROW_NUMBER () OVER(PARTITION BY ASB.CNCLD_MGNO ORDER BY ASB.CNCLD_DGR DESC) AS NUM
			 	  	  		, ASB.CNCLD_MGNO
			 	  	  		, ASB.CNCLD_DGR
			 	  	  		, ASB.CNCLD_ORGT_NM
			 	  	  		, ASB.CNCLD_KRN_NM
			   	   		 FROM irsuser.AGREE_STIPL_BSC ASB
			   	   		 LEFT OUTER JOIN irsuser.CNSLTNGRP_BSC CB
				 	 	   ON CB.CNCLD_MGNO = ASB.CNCLD_MGNO 
						  AND CB.CNCLD_DGR = ASB.CNCLD_DGR
			  	  		WHERE ASB.DEL_YN = 'N'
			   		) V
	     WHERE V.NUM = 1) D
    ON D.CNCLD_MGNO = B.AGREE_MGNO
 INNER JOIN irsuser.COM_BIZ_FLD_BSC E
 	ON E.BIZ_FLD_CD_MGNO = B.BIZ_FLD_CD
 INNER JOIN irsuser.COM_BIZ_FLD_DTL F
 	ON F.BIZ_FLD_DTLS_CD_MGNO = B.BIZ_DTLS_FLD_CD 
 WHERE A.DEL_YN = 'N'
  AND B.DEL_YN = 'N'
;
COMMENT ON VIEW irsuser.V_SEARCH_IRB_BSC IS '국체감축사업 기본 뷰';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_MNG_NO IS '사업관리번호';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.VLD_BIZ_DGR IS '사업유효차수';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_ORGT_NM IS '사업명(원문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_KRN_NM IS '사업명(국문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_FLD_ENG_NM IS '사업분야영문명';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_FLD_KORN_NM IS '사업분야한글명';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_DTLS_FLD_ENG_NM IS '사업세부분야영문명';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_DTLS_FLD_KORN_NM IS '사업세부분야한글명';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.BIZ_PLND_FLMNO IS '사업계획서 ID';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.CNCLD_ORGT_NM IS '협정 · 약정명(원문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.CNCLD_KRN_NM IS '협정 · 약정명(국문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.MHDLG_ORGT_NM_LIST IS '방법론명(원문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.MHDLG_KRN_NM_LIST IS '방법론명(국문)';
COMMENT ON COLUMN irsuser.V_SEARCH_IRB_BSC.MDFCN_DT IS '수정일시';
