/* ---------------------------------------------------------------------------------------------------- */

	/* 유저 */
	CREATE USER iostudio WITH PASSWORD 'iostudio';
	
	/* 권한 DATABASE */
	GRANT CONNECT ON DATABASE postgres TO iostudio;
	
	/* 권한 SCHEMA */
	GRANT USAGE ON SCHEMA irsuser TO iostudio;
	
	/* 뷰에 권한 부여 */
	GRANT SELECT ON irsuser.V_SEARCH_AGR_STIPL_BSC TO iostudio;
	GRANT SELECT ON irsuser.V_SEARCH_MHDLG_BSC TO iostudio;
	GRANT SELECT ON irsuser.V_SEARCH_IRB_BSC TO iostudio;
	GRANT SELECT ON irsuser.V_SEARCH_FILE TO iostudio;
		
	ALTER USER iostudio SET search_path = irsuser;
	
/* ---------------------------------------------------------------------------------------------------- */