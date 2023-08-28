CREATE TABLE irs_user.TEMP_TABLE (
	TEMP_SN INTEGER NOT NULL,
	TEMP_NM VARCHAR(50) NOT NULL,
	TEMP_DESC VARCHAR(1000) NOT NULL,
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE irs_user.TEMP_TABLE ADD CONSTRAINT PK_TEMP_TABLE PRIMARY KEY (USER_ID);

COMMENT ON TABLE irs_user.TEMP_TABLE IS 'TEMP테이블';
COMMENT ON COLUMN irs_user.TEMP_TABLE.TEMP_SN IS 'TEMP일련번호';
COMMENT ON COLUMN irs_user.TEMP_TABLE.TEMP_NM IS 'TEMP명';
COMMENT ON COLUMN irs_user.TEMP_TABLE.TEMP_DESC IS 'TEMP설명';
COMMENT ON COLUMN irs_user.TEMP_TABLE.REG_DT IS '등록일시';


/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */


CREATE TABLE irs_user.TEMP_MENU_BSC (
	MENU_ID VARCHAR(12) NOT NULL,
	UP_MENU_ID VARCHAR(12) NOT NULL,
	MENU_CL_CD VARCHAR(6) NOT NULL,
	MENU_NM VARCHAR(100) NOT NULL,
	MENU_EXPLN VARCHAR(1000) NOT NULL,
	MENU_LVL INTEGER NOT NULL,
	SORT_SEQO INTEGER NOT NULL,
	REG_ID VARCHAR(12) DEFAULT 'SYSTEM',
	REG_DT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT PK_TEMP_MENU_BSC PRIMARY KEY (MENU_ID),
	
	CONSTRAINT FK_TEMP_MENU_BSC_TEMP_MENU_BSC FOREIGN KEY (UP_MENU_ID) REFERENCES irs_user.TEMP_MENU_BSC(MENU_ID) ON DELETE SET NULL ON UPDATE CASCADE
);


COMMENT ON TABLE irs_user.TEMP_MENU_BSC IS '메뉴';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.MENU_ID IS '메뉴ID';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.UP_MENU_ID IS '상위메뉴ID';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.MENU_CL_CD IS '메뉴구분코드';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.MENU_NM IS '메뉴명';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.MENU_EXPLN IS '메뉴설명';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.MENU_LVL IS '메뉴레벨';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.SORT_SEQO IS '정렬순서';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.REG_ID IS '등록ID';
COMMENT ON COLUMN irs_user.TEMP_MENU_BSC.REG_DT IS '등록일시';