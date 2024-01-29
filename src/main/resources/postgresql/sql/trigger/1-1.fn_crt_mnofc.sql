/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 1/4 트리거용 펑션 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE OR REPLACE FUNCTION fn_crt_mnofc()
RETURNS TRIGGER AS $$
/******************************************************************************
    프로그램명 : sp_crt_mnofc 
      수행목적 : 부처 정보 생성
      수행결과 : 기관기본정보의 위탁기관과 관장기관의 정보를 바탕으로 부처정보를 구성한다. - 부처상위기관(=관장기관), 부처하위기관(=위탁기관)
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2024.01.09   홍길동  최초 작성
 ******************************************************************************/
DECLARE	
	/* 에러로그 정보 */
	V_SQL_STATE TEXT;
	V_MESSAGE TEXT;
	V_DETAIL TEXT;
	V_HINT TEXT;
	V_CONTEXT TEXT;

	BEGIN
	
	IF TG_OP = 'INSERT' THEN
		/* ▶ 1-1. 기관기본정보에서 관장기관 정보가 생성되었는가? */
		IF NEW.INST_CLSF_CD = 'ICC0003' THEN
			/* ▶ 1-1-1. 관장기관 정보 생성 */
			INSERT
			  INTO COM_MNOFC_BSC
				 ( INST_MGNO
				 , DEL_YN                      /* 사용여부 - Default 미사용 */
				 , RGTR_ID                     /* 등록자ID */
				 , REG_DT                      /* 등록일시 */
				 )
			VALUES
				 ( NEW.INST_MGNO
				 , 'N'
				 , 'TR_AFTER_CRT_MNOFC'
				 , CURRENT_TIMESTAMP
				 )
				 ;
		/* ▶ 1-2. 기관기본정보에서 위탁기관 정보가 생성되었는가? */
		ELSIF NEW.INST_CLSF_CD = 'ICC0004' THEN
			/* ▶ 1-2-1. 위탁기관 정보 생성 */
			INSERT
			  INTO COM_MNOFC_DTL
				 ( UP_INST_MGNO
				 , INST_MGNO
				 , SORT_SEQO
				 , DEL_YN                      /* 사용여부 - Default 미사용 */
				 , RGTR_ID                     /* 등록자ID */
				 , REG_DT                      /* 등록일시 */
				 )
				 ( SELECT NEW.UP_INST_MGNO
				 		, NEW.INST_MGNO
				 		, COALESCE(MAX(MD.SORT_SEQO), 0) + 1
				 		, 'N'
				 		, 'TR_AFTER_CRT_MNOFC'
				 		, CURRENT_TIMESTAMP
				 	 FROM COM_MNOFC_DTL MD
				 	WHERE MD.UP_INST_MGNO = NEW.UP_INST_MGNO
				 );
		END IF;

		RETURN NULL;
		
	ELSIF TG_OP = 'DELETE' THEN
		/* ▶ 2-1. 기관기본정보에서 관장기관 정보가 삭제되었는가? */
		IF OLD.INST_CLSF_CD = 'ICC0003' THEN
			/* ▶ 2-1-1. 관장기관 정보 삭제 */
			DELETE FROM COM_MNOFC_BSC WHERE INST_MGNO = OLD.INST_MGNO;
			
			/* ▶ 2-1-2. 관장기관 하위 종속된 위탁기관 정보 모두 삭제 */
			DELETE FROM COM_MNOFC_DTL WHERE UP_INST_MGNO = OLD.INST_MGNO;
			
		/* ▶ 2-2. 기관기본정보에서 위탁기관 정보가 삭제되었는가? */
		ELSIF OLD.INST_CLSF_CD = 'ICC0004' THEN
			/* ▶ 2-2-1. 위탁기관 정보 삭제 */
			DELETE FROM COM_MNOFC_DTL WHERE UP_INST_MGNO = OLD.UP_INST_MGNO AND INST_MGNO = OLD.INST_MGNO;
			
		END IF;

		RETURN NULL;
	
	END IF;

	EXCEPTION WHEN OTHERS THEN 
		GET STACKED DIAGNOSTICS
			V_SQL_STATE := RETURNED_SQLSTATE,
			V_MESSAGE := MESSAGE_TEXT,
			V_DETAIL := PG_EXCEPTION_DETAIL,
			V_HINT := PG_EXCEPTION_HINT,
			V_CONTEXT := PG_EXCEPTION_CONTEXT;
		
		/* 트리거 에러로그 저장 */
		INSERT
		  INTO SYS_TR_ERR_LOG
			 ( SN
			 , SQL_STATE
			 , MESSAGE
			 , DETAIL
			 , HINT
			 , CONTEXT
			 , REG_NM
			 , REG_DT
			 )
			 ( SELECT COALESCE(MAX(SN), 0) + 1
			 		, V_SQL_STATE
			 		, V_MESSAGE
			 		, V_DETAIL
			 		, V_HINT
			 		, V_CONTEXT
			 		, 'TR_AFTER_CRT_MNOFC'
			 		, CURRENT_TIMESTAMP
			 	 FROM SYS_TR_ERR_LOG
			 );
			
		RETURN NULL;
END;
$$ LANGUAGE plpgsql;

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 2/4 트리거용 펑션 COMMENT */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
COMMENT ON FUNCTION fn_crt_mnofc() IS '부처 정보 생성';
