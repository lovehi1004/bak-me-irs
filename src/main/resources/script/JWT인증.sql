DROP TABLE irsuser.JWT_USER_REFRESH_TKN;
DROP TABLE irsuser.JWT_USER_ROLE;
DROP TABLE irsuser.JWT_USER;

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

CREATE TABLE irsuser.JWT_USER_BSC (
	LGN_ID VARCHAR(20)        NOT NULL ,
	USER_ID VARCHAR(20)        NOT NULL ,
	ENCPT_PSWD VARCHAR(100)        NOT NULL ,
	USER_CL_CD CHAR(7)        NOT NULL
);

ALTER TABLE irsuser.JWT_USER_BSC ADD CONSTRAINT PK_JWT_USER_BSC PRIMARY KEY (LGN_ID);

COMMENT ON TABLE irsuser.JWT_USER_BSC IS 'JWT사용자';
COMMENT ON COLUMN irsuser.JWT_USER_BSC.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irsuser.JWT_USER_BSC.USER_ID IS '사용자ID';
COMMENT ON COLUMN irsuser.JWT_USER_BSC.ENCPT_PSWD IS '암호화비밀번호';
COMMENT ON COLUMN irsuser.JWT_USER_BSC.USER_CL_CD IS '사용자구분코드';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자역할 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irsuser.JWT_USER_ROLE_BSC (
	LGN_ID VARCHAR(20)        NOT NULL ,
	JWT_ROLE_NM VARCHAR(255)        NOT NULL ,
	CONSTRAINT FK_JWT_USER_ROLE_01 foreign key (LGN_ID) references irsuser.JWT_USER_BSC(LGN_ID) ON UPDATE RESTRICT ON DELETE restrict
);

CREATE INDEX IX_JWT_USER_ROLE_BSC_01 ON irsuser.JWT_USER_ROLE_BSC (LGN_ID);

COMMENT ON TABLE irsuser.JWT_USER_ROLE_BSC IS 'JWT사용자역할';
COMMENT ON COLUMN irsuser.JWT_USER_ROLE_BSC.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irsuser.JWT_USER_ROLE_BSC.JWT_ROLE_NM IS 'JWT역할명';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자리프레시토큰 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irsuser.JWT_USER_REFRESH_TKN_BSC (
	LGN_ID VARCHAR(20)        NOT NULL ,
	REFRESH_TKN_CN VARCHAR(500)        NOT NULL ,
	USER_CLNT_CN VARCHAR(500)        NOT NULL
);

ALTER TABLE irsuser.JWT_USER_REFRESH_TKN_BSC ADD CONSTRAINT PK_JWT_USER_REFRESH_TKN_BSC PRIMARY KEY (LGN_ID);

COMMENT ON TABLE irsuser.JWT_USER_REFRESH_TKN_BSC IS 'JWT사용자리프레시토큰';
COMMENT ON COLUMN irsuser.JWT_USER_REFRESH_TKN_BSC.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irsuser.JWT_USER_REFRESH_TKN_BSC.REFRESH_TKN_CN IS '리프레시토큰내용';
COMMENT ON COLUMN irsuser.JWT_USER_REFRESH_TKN_BSC.USER_CLNT_CN IS '사용자클라이언트내용';



