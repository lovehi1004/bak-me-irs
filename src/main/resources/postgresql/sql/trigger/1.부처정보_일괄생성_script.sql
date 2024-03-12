		/* 1/4 부처 상위 일괄 삭제 */
		DELETE FROM COM_MNOFC_BSC;
		/* 2/4 부처 상위 일괄 등록 */
		INSERT
		  INTO COM_MNOFC_BSC
			 ( INST_MGNO
			 , DEL_YN                      /* 사용여부 - Default 미사용 */
			 , RGTR_ID                     /* 등록자ID */
			 , REG_DT                      /* 등록일시 */
			 )
			 ( 
			 	SELECT IB.INST_MGNO
			 		, 'N'
			 		, 'SYSTEM'
			 		, CURRENT_TIMESTAMP
			 	 FROM INST_BSC IB
			 	WHERE IB.INST_CLSF_CD = 'ICC0003'
			 	  AND IB.DEL_YN = 'N'
			 );
				
		/* 3/4 부처 하위 일괄 삭제 */
		DELETE FROM COM_MNOFC_DTL;
		/* 4/4 부처 하위 일괄 등록 */
		INSERT
		  INTO COM_MNOFC_DTL
			 ( UP_INST_MGNO
			 , INST_MGNO
			 , SORT_SEQO
			 , DEL_YN                      /* 사용여부 - Default 미사용 */
			 , RGTR_ID                     /* 등록자ID */
			 , REG_DT                      /* 등록일시 */
			 )
			 ( 
			 	SELECT IB.UP_INST_MGNO
			 		, IB.INST_MGNO
			 		, ROW_NUMBER() OVER(PARTITION BY IB.UP_INST_MGNO ORDER BY IB.INST_MGNO)
			 		, 'N'
			 		, 'SYSTEM'
			 		, CURRENT_TIMESTAMP
			 	 FROM INST_BSC IB
			 	WHERE IB.INST_CLSF_CD = 'ICC0004'
			 	  AND IB.DEL_YN = 'N'
			 );