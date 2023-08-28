
DROP TABLE irs_user.CD_DTL;
DROP TABLE irs_user.GROUP_CD_BSC;

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 그룹코드기본*/
/* ▶ 코드 관리 */
/* 그룹코드기본 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.GROUP_CD_BSC (
	GROUP_CD VARCHAR(20) NOT NULL,
	GROUP_CD_NM VARCHAR(50) NOT NULL,
	GROUP_CD_ENG_NM VARCHAR(50) NOT NULL,
	GROUP_CD_EXPLN VARCHAR(1000) NOT NULL,
	CD_REG_LMT_CNT INTEGER DEFAULT 0 NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_GROUP_CD_BSC PRIMARY KEY (GROUP_CD)
);


COMMENT ON TABLE irs_user.GROUP_CD_BSC IS '그룹코드기본';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.GROUP_CD IS '그룹코드';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.GROUP_CD_NM IS '그룹코드명';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.GROUP_CD_ENG_NM IS '그룹코드영문명';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.GROUP_CD_EXPLN IS '그룹코드설명';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.CD_REG_LMT_CNT IS '코드등록제한수';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.USE_YN IS '사용여부';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.GROUP_CD_BSC.MDFCN_DT IS '수정일시';


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 코드상세*/
/* ▶ 코드 관리 */
/* 코드상세 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irs_user.CD_DTL (
	GROUP_CD VARCHAR(20) NOT NULL,
	CD VARCHAR(7) NOT NULL,
	CD_NM VARCHAR(50) NOT NULL,
	CD_ENG_NM VARCHAR(50) NOT NULL,
	CD_EXPLN VARCHAR(1000) NOT NULL,
	SORT_SNO INTEGER NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_CD_DTL PRIMARY KEY (GROUP_CD, CD)
);


COMMENT ON TABLE irs_user.CD_DTL IS '코드상세';
COMMENT ON COLUMN irs_user.CD_DTL.GROUP_CD IS '그룹코드';
COMMENT ON COLUMN irs_user.CD_DTL.CD IS '코드';
COMMENT ON COLUMN irs_user.CD_DTL.CD_NM IS '코드명';
COMMENT ON COLUMN irs_user.CD_DTL.CD_ENG_NM IS '코드영문명';
COMMENT ON COLUMN irs_user.CD_DTL.CD_EXPLN IS '코드설명';
COMMENT ON COLUMN irs_user.CD_DTL.SORT_SNO IS '정렬순서';
COMMENT ON COLUMN irs_user.CD_DTL.USE_YN IS '사용여부';
COMMENT ON COLUMN irs_user.CD_DTL.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irs_user.CD_DTL.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irs_user.CD_DTL.REG_DT IS '등록일시';
COMMENT ON COLUMN irs_user.CD_DTL.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irs_user.CD_DTL.MDFCN_DT IS '수정일시';





