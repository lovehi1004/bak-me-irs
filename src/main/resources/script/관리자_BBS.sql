
DROP TABLE irsuser.BBS_DTL;
DROP TABLE irsuser.BBS_GROUP_BSC;

/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 게시판그룹기본*/
/* ▶ 게시판 관리 */
/* 게시판그룹기본 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irsuser.BBS_GROUP_BSC (
	BBS_GROUP_ID VARCHAR(20) NOT NULL,
	BBS_GROUP_NM VARCHAR(50) NOT NULL,
	BBS_GROUP_EXPLN VARCHAR(1000) NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_BBS_GROUP_BSC PRIMARY KEY (BBS_GROUP_ID)
);

COMMENT ON TABLE irsuser.BBS_GROUP_BSC IS '게시판그룹기본';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.BBS_GROUP_ID IS '게시판그룹ID';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.BBS_GROUP_NM IS '게시판그룹명';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.BBS_GROUP_EXPLN IS '게시판그룹설명';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.USE_YN IS '사용여부';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.REG_DT IS '등록일시';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irsuser.BBS_GROUP_BSC.MDFCN_DT IS '수정일시';


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* 게시판상세*/
/* ▶ 게시판 관리 */
/* 개별게시판 목록 */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
CREATE TABLE irsuser.BBS_DTL (
	BBS_GROUP_ID VARCHAR(20) NOT NULL,
	BBS_SN INTEGER NOT NULL,
	PSTAT_NM VARCHAR(50) NOT NULL,
	PSTAT_CN TEXT NOT NULL,
	USE_YN CHAR(1) DEFAULT 'Y' NOT NULL,
	DEL_YN CHAR(1) DEFAULT 'N' NOT NULL,
	RGTR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MDFR_ID VARCHAR(20) DEFAULT 'SYSTEM',
	MDFCN_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_BBS_DTL PRIMARY KEY (BBS_GROUP_ID, BBS_SN)
);

COMMENT ON TABLE irsuser.BBS_DTL IS '게시판상세';
COMMENT ON COLUMN irsuser.BBS_DTL.BBS_GROUP_ID IS '게시판그룹ID';
COMMENT ON COLUMN irsuser.BBS_DTL.BBS_SN IS '게시판일련번호';
COMMENT ON COLUMN irsuser.BBS_DTL.PSTAT_NM IS '게시글명';
COMMENT ON COLUMN irsuser.BBS_DTL.PSTAT_CN IS '게시글내용';
COMMENT ON COLUMN irsuser.BBS_DTL.USE_YN IS '사용여부';
COMMENT ON COLUMN irsuser.BBS_DTL.DEL_YN IS '삭제여부';
COMMENT ON COLUMN irsuser.BBS_DTL.RGTR_ID IS '등록ID';
COMMENT ON COLUMN irsuser.BBS_DTL.REG_DT IS '등록일시';
COMMENT ON COLUMN irsuser.BBS_DTL.MDFR_ID IS '수정ID';
COMMENT ON COLUMN irsuser.BBS_DTL.MDFCN_DT IS '수정일시';





