DROP TABLE irs_user.JWT_USER_REFRESH_TKN;
DROP TABLE irs_user.JWT_USER_ROLE;
DROP TABLE irs_user.JWT_USER;

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

CREATE TABLE irs_user.JWT_USER (
	LGN_ID VARCHAR(20)        NOT NULL ,
	USER_ID VARCHAR(20)        NOT NULL ,
	ENCPT_PSWD VARCHAR(100)        NOT NULL ,
	USER_CL_CD CHAR(7)        NOT NULL
);

ALTER TABLE irs_user.JWT_USER ADD CONSTRAINT PK_JWT_USER PRIMARY KEY (LGN_ID);

COMMENT ON TABLE irs_user.JWT_USER IS 'JWT사용자';
COMMENT ON COLUMN irs_user.JWT_USER.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irs_user.JWT_USER.USER_ID IS '사용자ID';
COMMENT ON COLUMN irs_user.JWT_USER.ENCPT_PSWD IS '암호화비밀번호';
COMMENT ON COLUMN irs_user.JWT_USER.USER_CL_CD IS '사용자구분코드';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자역할 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.JWT_USER_ROLE (
	LGN_ID VARCHAR(20)        NOT NULL ,
	JWT_ROLE_NM VARCHAR(50)        NOT NULL ,
	CONSTRAINT FK_JWT_USER_ROLE_01 foreign key (LGN_ID) references irs_user.JWT_USER(LGN_ID) ON UPDATE RESTRICT ON DELETE restrict
);

CREATE INDEX IX_JWT_USER_ROLE_01 ON irs_user.JWT_USER_ROLE (LGN_ID);

COMMENT ON TABLE irs_user.JWT_USER_ROLE IS 'JWT사용자역할';
COMMENT ON COLUMN irs_user.JWT_USER_ROLE.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irs_user.JWT_USER_ROLE.JWT_ROLE_NM IS 'JWT역할명';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* JWT사용자리프레시토큰 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.JWT_USER_REFRESH_TKN (
	LGN_ID VARCHAR(20)        NOT NULL ,
	REFRESH_TKN_CN VARCHAR(500)        NOT NULL ,
	USER_CLNT_CN VARCHAR(500)        NOT NULL
);

ALTER TABLE irs_user.JWT_USER_REFRESH_TKN ADD CONSTRAINT PK_JWT_USER_REFRESH_TKN PRIMARY KEY (LGN_ID);

COMMENT ON TABLE irs_user.JWT_USER_REFRESH_TKN IS 'JWT사용자리프레시토큰';
COMMENT ON COLUMN irs_user.JWT_USER_REFRESH_TKN.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irs_user.JWT_USER_REFRESH_TKN.REFRESH_TKN_CN IS '리프레시토큰내용';
COMMENT ON COLUMN irs_user.JWT_USER_REFRESH_TKN.USER_CLNT_CN IS '사용자클라이언트내용';



