/* ---------------------------------------------------------------------------------------------------- */
/* ▶ 개발 - dba계정으로 작업 */
/* ---------------------------------------------------------------------------------------------------- */

	/* 유저 */
	CREATE USER girirs WITH PASSWORD 'rkacnrtkdjq24!@';
	
	/* 권한 DATABASE */
	GRANT CONNECT ON DATABASE postgres TO girirs;
	
	/* 권한 SCHEMA */
	GRANT USAGE, CREATE ON SCHEMA irsuser TO girirs;
	
	/* 스키마의 모든 테이블에 대한 권한 부여 - 뷰, 인덱스 포함 */
	GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA irsuser TO girirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA irsuser GRANT ALL PRIVILEGES ON TABLES TO girirs;
	
	/* 스키마의 모든 시퀀스에 대한 권한 부여 */
	GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA irsuser TO girirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA irsuser GRANT ALL PRIVILEGES ON SEQUENCES TO girirs;
	
	/* 스키마 내의 모든 함수와 프로시저에 대한 권한 부여 */
	GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA irsuser TO girirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA irsuser GRANT ALL PRIVILEGES ON FUNCTIONS TO girirs;
	
	/* 스키마 지정 - SQL내 스키마명 생성 필수 */
	ALTER USER girirs SET search_path = irsuser;
	
/* ---------------------------------------------------------------------------------------------------- */
	
/* XXXXXXXXXXXX 유저 삭제시 참고 ####################### */
DROP OWNED BY username;
DROP USER username;
/* XXXXXXXXXXXX 유저 삭제시 참고 ####################### */