
DROP TABLE irs_user.SYS_CNTN_HSTRY;
DROP TABLE irs_user.PRVC_HNDL_HSTRY;
DROP TABLE irs_user.USER_ROLE_DTL;
DROP TABLE irs_user.MENU_ROLE_DTL;
DROP TABLE irs_user.USER_BSC;
DROP TABLE irs_user.ROLE_BSC;
DROP TABLE irs_user.MENU_BSC;



/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 사용자 */
/* ▶ 사용자 관리 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.USER_BSC (
	USER_ID VARCHAR(20) NOT NULL,
	LGN_ID VARCHAR(20) NOT NULL,
	USER_CL_CD VARCHAR(7) NOT NULL,
	ENCPT_PSWD VARCHAR(100) NOT NULL,
	USER_NM VARCHAR(20) NOT NULL,
	DEPT_NM VARCHAR(100) NOT NULL,
	JBPS_NM VARCHAR(100) NOT NULL,
	TELNO VARCHAR(14) NOT NULL,
	CRRY_TELNO VARCHAR(14) NOT NULL,
	CRRY_TELNO_CERT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	FXNO VARCHAR(20) NOT NULL,
	EML_ADDR VARCHAR(100) NOT NULL,
	CERTD_REG_YN CHAR(1) DEFAULT 'N' NOT NULL,
	SMS_RCPTN_AGRE_YN CHAR(1) DEFAULT 'N' NOT NULL,
	JOIN_YMD VARCHAR(8) NOT NULL,
	WHDWL_YMD VARCHAR(8) NOT NULL,
	LGN_FAIL_NMTM INTEGER NOT NULL,
	USER_STTS_CL_CD VARCHAR(7) NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_USER_BSC PRIMARY KEY (USER_ID)
);

COMMENT ON TABLE irs_user.USER_BSC IS '사용자';
COMMENT ON COLUMN irs_user.USER_BSC.USER_ID IS '사용자ID';
COMMENT ON COLUMN irs_user.USER_BSC.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irs_user.USER_BSC.USER_CL_CD IS '사용자구분코드';
COMMENT ON COLUMN irs_user.USER_BSC.ENCPT_PSWD IS '암호화비밀번호';
COMMENT ON COLUMN irs_user.USER_BSC.USER_NM IS '사용자명';
COMMENT ON COLUMN irs_user.USER_BSC.DEPT_NM IS '부서명';
COMMENT ON COLUMN irs_user.USER_BSC.JBPS_NM IS '직위명';
COMMENT ON COLUMN irs_user.USER_BSC.TELNO IS '전화번호';
COMMENT ON COLUMN irs_user.USER_BSC.CRRY_TELNO IS '휴대전화번호';
COMMENT ON COLUMN irs_user.USER_BSC.CRRY_TELNO_CERT_YN IS '휴대전화번호인증여부';
COMMENT ON COLUMN irs_user.USER_BSC.FXNO IS '팩스번호';
COMMENT ON COLUMN irs_user.USER_BSC.EML_ADDR IS '이메일주소';
COMMENT ON COLUMN irs_user.USER_BSC.CERTD_REG_YN IS '인증서등록여부';
COMMENT ON COLUMN irs_user.USER_BSC.SMS_RCPTN_AGRE_YN IS 'SMS수신동의여부';
COMMENT ON COLUMN irs_user.USER_BSC.JOIN_YMD IS '가입일자';
COMMENT ON COLUMN irs_user.USER_BSC.WHDWL_YMD IS '탈퇴일자';
COMMENT ON COLUMN irs_user.USER_BSC.LGN_FAIL_NMTM IS '로그인실패횟수';
COMMENT ON COLUMN irs_user.USER_BSC.USER_STTS_CL_CD IS '사용자상태구분코드';
COMMENT ON COLUMN irs_user.USER_BSC.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.USER_BSC.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.USER_BSC.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.USER_BSC.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.USER_BSC.MDFCN_DT IS '수정일시';


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 역할기본 */
/* ▶ 역할 관리 */
/* 역할 설정 정보에 대한 목록 및 주요 내용 조회 기능 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.ROLE_BSC (
	ROLE_ID VARCHAR(20) NOT NULL,
	ROLE_NM VARCHAR(50) NOT NULL,
	ROLE_EXPLN VARCHAR(1000) NOT NULL,
	USER_CL_CD VARCHAR(7) NOT NULL,
	SYS_CL_CD VARCHAR(7) NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_ROLE_BSC PRIMARY KEY (ROLE_ID)
);


COMMENT ON TABLE irs_user.ROLE_BSC IS '역할기본';
COMMENT ON COLUMN irs_user.ROLE_BSC.ROLE_ID IS '역할ID';
COMMENT ON COLUMN irs_user.ROLE_BSC.ROLE_NM IS '역할명';
COMMENT ON COLUMN irs_user.ROLE_BSC.ROLE_EXPLN IS '역할설명';
COMMENT ON COLUMN irs_user.ROLE_BSC.USER_CL_CD IS '사용자구분코드';
COMMENT ON COLUMN irs_user.ROLE_BSC.SYS_CL_CD IS '시스템구분코드';
COMMENT ON COLUMN irs_user.ROLE_BSC.USE_YN IS '사용여부';
COMMENT ON COLUMN irs_user.ROLE_BSC.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.ROLE_BSC.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.ROLE_BSC.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.ROLE_BSC.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.ROLE_BSC.MDFCN_DT IS '수정일시';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 사용자역할상세 */
/* ▶ 사용자역할 관리 */
/* 역할별 사용자 관리 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.USER_ROLE_DTL (
	USER_ID VARCHAR(20) NOT NULL,
	ROLE_ID VARCHAR(20) NOT NULL,
	USER_ROLE_SN INTEGER NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_USER_ROLE_DTL PRIMARY KEY (USER_ROLE_SN),
	
	CONSTRAINT FK_USER_ROLE_DTL_USER_BSC FOREIGN KEY (USER_ID) REFERENCES irs_user.USER_BSC(USER_ID) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT FK_USER_ROLE_DTL_ROLE_BSC FOREIGN KEY (ROLE_ID) REFERENCES irs_user.ROLE_BSC(ROLE_ID) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX UX_USER_ROLE_DTL_01 ON irs_user.USER_ROLE_DTL (USER_ID, ROLE_ID);

COMMENT ON TABLE irs_user.USER_ROLE_DTL IS '사용자역할상세';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.USER_ID IS '사용자ID';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.ROLE_ID IS '역할ID';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.USER_ROLE_SN IS '사용자역할일련번호';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.USER_ROLE_DTL.MDFCN_DT IS '수정일시';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 메뉴기본 */
/* ▶ 메뉴 관리 */
/* 메뉴정보 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.MENU_BSC (
	MENU_ID VARCHAR(20) NOT NULL,
	UP_MENU_ID VARCHAR(20) NOT NULL,
	MENU_CL_CD VARCHAR(7) NOT NULL,
	MENU_NM VARCHAR(50) NOT NULL,
	MENU_EXPLN VARCHAR(1000) NOT NULL,
	MENU_URL_ADDR VARCHAR(200),
	EXPSR_YN CHAR(1) DEFAULT 'N' NOT NULL,
	POPUP_YN CHAR(1) DEFAULT 'N' NOT NULL,
	MENU_LVL INTEGER NOT NULL,
	SORT_SEQO INTEGER NOT NULL,
	SYS_CL_CD VARCHAR(7) NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_MENU_BSC PRIMARY KEY (MENU_ID),
	
	CONSTRAINT FK_MENU_BSC_MENU_BSC FOREIGN KEY (UP_MENU_ID) REFERENCES irs_user.MENU_BSC(MENU_ID) ON DELETE SET NULL ON UPDATE CASCADE
);


COMMENT ON TABLE irs_user.MENU_BSC IS '메뉴기본';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_ID IS '메뉴ID';
COMMENT ON COLUMN irs_user.MENU_BSC.UP_MENU_ID IS '상위메뉴ID';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_CL_CD IS '메뉴구분코드';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_NM IS '메뉴명';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_EXPLN IS '메뉴설명';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_URL_ADDR IS '메뉴URL주소';
COMMENT ON COLUMN irs_user.MENU_BSC.EXPSR_YN IS '노출여부';
COMMENT ON COLUMN irs_user.MENU_BSC.POPUP_YN IS '팝업여부';
COMMENT ON COLUMN irs_user.MENU_BSC.MENU_LVL IS '메뉴레벨';
COMMENT ON COLUMN irs_user.MENU_BSC.SORT_SEQO IS '정렬순서';
COMMENT ON COLUMN irs_user.MENU_BSC.SYS_CL_CD IS '시스템구분코드';
COMMENT ON COLUMN irs_user.MENU_BSC.USE_YN IS '사용여부';
COMMENT ON COLUMN irs_user.MENU_BSC.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.MENU_BSC.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.MENU_BSC.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.MENU_BSC.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.MENU_BSC.MDFCN_DT IS '수정일시';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 메뉴역할상세 */
/* ▶ 메뉴 관리 */
/* 메뉴정보 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.MENU_ROLE_DTL (
	ROLE_ID VARCHAR(20) NOT NULL,
	MENU_ID VARCHAR(20) NOT NULL,
	ROLE_MENU_SN INTEGER NOT NULL,
	INQ_AUTHRT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	REG_AUTHRT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	MDFCN_AUTHRT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	DEL_AUTHRT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	EXCN_AUTHRT_YN CHAR(1) DEFAULT 'N' NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_MENU_ROLE_DTL PRIMARY KEY (ROLE_ID, MENU_ID, ROLE_MENU_SN),
	
	CONSTRAINT FK_MENU_ROLE_DTL_MENU_BSC FOREIGN KEY (MENU_ID) REFERENCES irs_user.MENU_BSC(MENU_ID) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT FK_MENU_ROLE_DTL_ROLE_BSC FOREIGN KEY (ROLE_ID) REFERENCES irs_user.ROLE_BSC(ROLE_ID) ON DELETE RESTRICT ON UPDATE CASCADE
);


COMMENT ON TABLE irs_user.MENU_ROLE_DTL IS '메뉴역할상세';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.ROLE_ID IS '역할ID';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.MENU_ID IS '메뉴ID';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.ROLE_MENU_SN IS '역할메뉴일련번호';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.INQ_AUTHRT_YN IS '조회권한여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.REG_AUTHRT_YN IS '등록권한여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.MDFCN_AUTHRT_YN IS '수정권한여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.DEL_AUTHRT_YN IS '삭제권한여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.EXCN_AUTHRT_YN IS '실행권한여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.USE_YN IS '사용여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.MENU_ROLE_DTL.MDFCN_DT IS '수정일시';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 개인정보취급이력 */
/* ▶ 개인정보 취급자 관리 */
/* 개인정보 취급자*의 모든 사용 이력을 목록 조회 기능 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.PRVC_HNDL_HSTRY (
	USER_ID VARCHAR(20) NOT NULL,
	PRVC_INQ_SN INTEGER NOT NULL,
	SYS_CL_CD VARCHAR(7) NOT NULL,
	INQ_CL_CD VARCHAR(7) NOT NULL,
	INQ_EXPLN VARCHAR(1000) NOT NULL,
	USER_CL_CD VARCHAR(7) NOT NULL,
	CNTN_IP_ADDR VARCHAR(200) NOT NULL,
	MENU_ID VARCHAR(20) NOT NULL,
	PRVC_INQ_ACS_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRVC_INQ_ACS_YMD VARCHAR(8) NOT NULL,
	TRPR_USER_ID VARCHAR(20) NOT NULL,
	TRPR_USER_CL_CD VARCHAR(7) NOT NULL,
	
	CONSTRAINT PK_PRVC_HNDL_HSTRY PRIMARY KEY (USER_ID, PRVC_INQ_SN),
	
	CONSTRAINT FK_PRVC_HNDL_HSTRY_MENU_BSC FOREIGN KEY (MENU_ID) REFERENCES irs_user.MENU_BSC(MENU_ID) ON DELETE SET NULL ON UPDATE CASCADE,
	CONSTRAINT FK_PRVC_HNDL_HSTRY_USER_BSC FOREIGN KEY (USER_ID) REFERENCES irs_user.USER_BSC(USER_ID) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE UNIQUE INDEX UX_PRVC_HNDL_HSTRY_01 ON irs_user.PRVC_HNDL_HSTRY (PRVC_INQ_SN DESC);


COMMENT ON TABLE irs_user.PRVC_HNDL_HSTRY IS '개인정보취급이력';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.USER_ID IS '사용자ID';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.PRVC_INQ_SN IS '개인정보조회일련번호';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.SYS_CL_CD IS '시스템구분코드';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.INQ_CL_CD IS '조회구분코드';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.INQ_EXPLN IS '조회설명';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.USER_CL_CD IS '사용자구분코드';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.CNTN_IP_ADDR IS '접속IP주소';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.MENU_ID IS '메뉴ID';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.PRVC_INQ_ACS_DT IS '개인정보조회접근일시';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.PRVC_INQ_ACS_YMD IS '개인정보조회접근일자';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.TRPR_USER_ID IS '대상자사용자ID';
COMMENT ON COLUMN irs_user.PRVC_HNDL_HSTRY.TRPR_USER_CL_CD IS '대상자사용자구분코드';

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 시스템접속이력 */
/* ▶ 사용자 접속현황 */
/* 시스템 사용자의 모든 접속 정보를 목록 조회 기능 */ /* 2개메뉴 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.SYS_CNTN_HSTRY (
	SYS_CNTN_HSTRY_SN INTEGER NOT NULL,
	USER_ID VARCHAR(20) NULL,
	USER_CL_CD VARCHAR(7) NULL,
	LGN_ID VARCHAR(20) NOT NULL,
	LGN_SCS_YN CHAR(1) DEFAULT 'N' NOT NULL,
	CNTN_IP_ADDR VARCHAR(200) NOT NULL,
	BRWS_NM VARCHAR(50) NOT NULL,
	OS_NM VARCHAR(50) NOT NULL,
	CNTN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CNTN_YMD VARCHAR(8) NOT NULL,
	CNTN_YM VARCHAR(6) NOT NULL,
	
	CONSTRAINT PK_SYS_CNTN_HSTRY PRIMARY KEY (SYS_CNTN_HSTRY_SN),
	CONSTRAINT FK_SYS_CNTN_HSTRY_USER_BSC FOREIGN KEY (USER_ID) REFERENCES irs_user.USER_BSC(USER_ID) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX IX_SYS_CNTN_HSTRY_01 ON irs_user.SYS_CNTN_HSTRY (CNTN_DT DESC);
CREATE INDEX IX_SYS_CNTN_HSTRY_02 ON irs_user.SYS_CNTN_HSTRY (CNTN_YMD DESC);
CREATE INDEX IX_SYS_CNTN_HSTRY_03 ON irs_user.SYS_CNTN_HSTRY (CNTN_YM DESC);


COMMENT ON TABLE irs_user.SYS_CNTN_HSTRY IS '시스템접속이력';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.SYS_CNTN_HSTRY_SN IS '시스템접속이력일련번호';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.USER_ID IS '사용자ID';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.USER_CL_CD IS '사용자구분코드';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.LGN_ID IS '로그인ID';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.LGN_SCS_YN IS '로그인성공여부';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.CNTN_IP_ADDR IS '접속IP주소';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.BRWS_NM IS '브라우저명';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.OS_NM IS '운영체계명';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.CNTN_DT IS '접속일시';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.CNTN_YMD IS '접속일자';
COMMENT ON COLUMN irs_user.SYS_CNTN_HSTRY.CNTN_YM IS '접속년월';






