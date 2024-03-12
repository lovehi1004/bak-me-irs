/* ---------------------------------------------------------------------------------------------------- */
/* ▶ 검증DB - dba계정으로 작업 */
/* ---------------------------------------------------------------------------------------------------- */

	/* 유저 */
	CREATE USER devgirirs WITH PASSWORD 'rkacnrtkdjq24!@';
	
	/* 권한 DATABASE */
	GRANT CONNECT ON DATABASE postgres TO devgirirs;
	
				/* experdb계정으로 경로 디렉토리 생성 후 700 설정 - [/experdata/data/devgirirs] */
				
				/* 1/2 테이블 스페이스 생성 */
				CREATE TABLESPACE ts_devgirirs OWNER devgirirs LOCATION '/experdata/data/devgirirs';
				
				/* 2/2 테이블 스페이스 생성 확인 */
				SELECT SPCNAME, PG_TABLESPACE_LOCATION(OID) FROM PG_TABLESPACE;
				
				/* DBA계정으로 스키마 생성 */
				CREATE SCHEMA devirsuser;
				
				/* 스키마 지정 - SQL내 스키마명 생성 필수 */
				ALTER USER devgirirs SET search_path = devirsuser;
				
				
	/* 권한 SCHEMA */
	GRANT USAGE, CREATE ON SCHEMA devirsuser TO devgirirs;
	
	/* 스키마의 모든 테이블에 대한 권한 부여 - 뷰, 인덱스 포함 */
	GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA devirsuser TO devgirirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA devirsuser GRANT ALL PRIVILEGES ON TABLES TO devgirirs;
	
	/* 스키마의 모든 시퀀스에 대한 권한 부여 */
	GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA devirsuser TO devgirirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA devirsuser GRANT ALL PRIVILEGES ON SEQUENCES TO devgirirs;
	
	/* 스키마 내의 모든 함수와 프로시저에 대한 권한 부여 */
	GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA devirsuser TO devgirirs;
	ALTER DEFAULT PRIVILEGES IN SCHEMA devirsuser GRANT ALL PRIVILEGES ON FUNCTIONS TO devgirirs;
	
/* ---------------------------------------------------------------------------------------------------- */

	
/* XXXXXXXXXXXX 유저 삭제시 참고 ####################### */
DROP OWNED BY username;
DROP USER username;
/* XXXXXXXXXXXX 유저 삭제시 참고 ####################### */