/* --------------------------------------------------------------------------------
    OWNER       : irsuser
    TABLE COUNT : 92
 * -------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_bsc
테이블 설명 : 협정약정기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_bsc (
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	cncld_orgt_nm varchar(300) NOT NULL, 
	cncld_krn_nm varchar(300) NOT NULL, 
	pact_no varchar(10) NULL, 
	sgnt_ymd varchar(20) NULL, 
	cncld_cl_cd varchar(8) NULL, 
	cncld_yn bpchar(1) NULL, 
	new_rvsn_type_cd varchar(7) NULL, 
	reg_type_cd varchar(7) NULL, 
	eftvn_ymd varchar(20) NULL, 
	krn_cncld_flmno varchar(20) NULL, 
	etc_data_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	pdct_cncld_dt varchar(20) NULL, 
	orgt_cncld_flmno varchar(20) NULL, 
	cnsltngrp_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT agr_stipl_bsc_pkey PRIMARY KEY (cncld_mgno, cncld_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_bsc IS '협정약정기본';



COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_orgt_nm IS '체결원문명';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_krn_nm IS '체결국문명';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.pact_no IS '조약번호';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.sgnt_ymd IS '서명일자';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_cl_cd IS '체결구분코드';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cncld_yn IS '체결여부';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.new_rvsn_type_cd IS '신규개정유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.reg_type_cd IS '등록유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.eftvn_ymd IS '발효일자';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.krn_cncld_flmno IS '국문체결파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.pdct_cncld_dt IS '예상체결일시';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.orgt_cncld_flmno IS '원문체결파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_bsc.cnsltngrp_yn IS '협의체여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_cnsltngrp
테이블 설명 : 협정약정협의체

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_cnsltngrp (
	cncld_mgno varchar(10) NOT NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT agr_stipl_cnsltngrp_pkey PRIMARY KEY (cncld_mgno, cnsltngrp_mgno, cncld_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_cnsltngrp IS '협정약정협의체';



COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_cnsltngrp.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_hstry
테이블 설명 : 협정약정이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('agr_stipl_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	cncld_orgt_nm varchar(300) NOT NULL, 
	cncld_krn_nm varchar(300) NOT NULL, 
	pact_no varchar(10) NULL, 
	sgnt_ymd varchar(20) NULL, 
	cncld_cl_cd varchar(8) NULL, 
	new_rvsn_type_cd varchar(8) NULL, 
	reg_type_cd varchar(7) NULL, 
	eftvn_ymd varchar(20) NULL, 
	cncld_flmno varchar(20) NULL, 
	etc_data_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	pdct_cncld_dt varchar(20) NULL, 
	cncld_yn bpchar(1) NULL, 
	krn_cncld_flmno varchar(20) NULL, 
	orgt_cncld_flmno varchar(20) NULL, 
	cnsltngrp_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT agr_stipl_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_hstry IS '협정약정이력';



COMMENT ON COLUMN irsuser.agr_stipl_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_orgt_nm IS '체결원문명';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_krn_nm IS '체결국문명';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.pact_no IS '조약번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.sgnt_ymd IS '서명일자';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_cl_cd IS '체결구분코드';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.new_rvsn_type_cd IS '신규개정유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.reg_type_cd IS '등록유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.eftvn_ymd IS '발효일자';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_flmno IS '체결파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.pdct_cncld_dt IS '예상체결일시';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cncld_yn IS '체결여부';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.krn_cncld_flmno IS '국문체결파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.orgt_cncld_flmno IS '원문체결파일번호';
COMMENT ON COLUMN irsuser.agr_stipl_hstry.cnsltngrp_yn IS '협의체여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_mhdlg_rel
테이블 설명 : 협정약정방법론관계

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_mhdlg_rel (
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT agr_stipl_mhdlg_rel_pkey PRIMARY KEY (cncld_mgno, mhdlg_mgno, cncld_dgr, mhdlg_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_mhdlg_rel IS '협정약정방법론관계';



COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_mhdlg_rel_hstry
테이블 설명 : 협정약정방법론관계이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_mhdlg_rel_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('agr_stipl_mhdlg_rel_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	cncld_mgno varchar(10) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT agr_stipl_mhdlg_rel_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_mhdlg_rel_hstry IS '협정약정방법론관계이력';



COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_mhdlg_rel_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_ntn_dtl
테이블 설명 : 협정약정국가상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_ntn_dtl (
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	ntn_cd varchar(2) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT agr_stipl_ntn_dtl_pkey PRIMARY KEY (cncld_mgno, cncld_dgr, ntn_cd)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_ntn_dtl IS '협정약정국가상세';



COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.ntn_cd IS '국가코드';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_ntn_hstry
테이블 설명 : 협정약정국가이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_ntn_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('agr_stipl_ntn_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	ntn_cd varchar(2) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT agr_stipl_ntn_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_ntn_hstry IS '협정약정국가이력';



COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.ntn_cd IS '국가코드';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_ntn_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_rel
테이블 설명 : 협정약정관계

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_rel (
	cncld_mgno varchar(10) NOT NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	rel_cncld_mgno varchar(10) NOT NULL, 
	rel_dgr numeric(3) NOT NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	bfr_cncld_yn bpchar(1) NULL, 
	CONSTRAINT agr_stipl_rel_pkey PRIMARY KEY (cncld_mgno, cncld_dgr, rel_cncld_mgno, rel_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_rel IS '협정약정관계';



COMMENT ON COLUMN irsuser.agr_stipl_rel.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_rel.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.agr_stipl_rel.rel_cncld_mgno IS '관계체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_rel.rel_dgr IS '관계차수';
COMMENT ON COLUMN irsuser.agr_stipl_rel.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_rel.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_rel.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_rel.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_rel.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.agr_stipl_rel.bfr_cncld_yn IS '이전체결여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.agr_stipl_rel_hstry
테이블 설명 : 협정약정관계이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.agr_stipl_rel_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('agr_stipl_rel_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	cncld_mgno varchar(10) NOT NULL, 
	rel_cncld_mgno varchar(10) NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	mou_orgt_nm varchar(300) NULL, 
	bfr_cncld_yn bpchar(1) NULL, 
	CONSTRAINT agr_stipl_rel_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.agr_stipl_rel_hstry IS '협정약정관계이력';



COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.rel_cncld_mgno IS '관계체결관리번호';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.mou_orgt_nm IS 'MOU원문명';
COMMENT ON COLUMN irsuser.agr_stipl_rel_hstry.bfr_cncld_yn IS '이전체결여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.aply_bsc
테이블 설명 : 신청기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.aply_bsc (
	aply_mgno varchar(10) NOT NULL, 
	aply_reg_cl_cd varchar(7) NOT NULL, 
	aply_ymd varchar(8) NOT NULL, 
	aply_prcs_type_cd varchar(7) NULL, 
	aply_prcs_ymd varchar(8) NULL, 
	aply_prcs_user_id varchar(20) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT aply_bsc_pkey PRIMARY KEY (aply_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.aply_bsc IS '신청기본';



COMMENT ON COLUMN irsuser.aply_bsc.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.aply_bsc.aply_reg_cl_cd IS '신청등록구분코드';
COMMENT ON COLUMN irsuser.aply_bsc.aply_ymd IS '신청일자';
COMMENT ON COLUMN irsuser.aply_bsc.aply_prcs_type_cd IS '신청처리유형코드';
COMMENT ON COLUMN irsuser.aply_bsc.aply_prcs_ymd IS '신청처리일자';
COMMENT ON COLUMN irsuser.aply_bsc.aply_prcs_user_id IS '신청처리사용자ID';
COMMENT ON COLUMN irsuser.aply_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.aply_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.aply_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.aply_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.aply_dlbr_dtl
테이블 설명 : 신청심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.aply_dlbr_dtl (
	aply_mgno varchar(10) NOT NULL, 
	aply_dlbr_type_cd varchar(7) NULL, 
	dlbr_dt timestamp(6) NULL, 
	dlbr_opnn varchar(1000) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	CONSTRAINT aply_dlbr_dtl_pkey PRIMARY KEY (aply_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.aply_dlbr_dtl IS '신청심의상세';



COMMENT ON COLUMN irsuser.aply_dlbr_dtl.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.aply_dlbr_dtl.aply_dlbr_type_cd IS '신청심의유형코드';
COMMENT ON COLUMN irsuser.aply_dlbr_dtl.dlbr_dt IS '심의일시';
COMMENT ON COLUMN irsuser.aply_dlbr_dtl.dlbr_opnn IS '심의의견';
COMMENT ON COLUMN irsuser.aply_dlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.aply_dlbr_dtl.reg_dt IS '등록일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.aply_dtl
테이블 설명 : 신청상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.aply_dtl (
	aply_mgno varchar(10) NOT NULL, 
	user_id varchar(20) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	CONSTRAINT aply_dtl_pkey PRIMARY KEY (aply_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.aply_dtl IS '신청상세';



COMMENT ON COLUMN irsuser.aply_dtl.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.aply_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.aply_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.aply_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.aply_dtl.reg_dt IS '등록일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.arrn_excn_dsctn
테이블 설명 : 배치실행내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.arrn_excn_dsctn (
	sn numeric(10) NOT NULL, 
	arrn_excn_ymd varchar(8) NULL, 
	arrn_excn_hr varchar(6) NULL, 
	arrn_nm varchar(300) NULL, 
	trsm_mgno varchar(10) NULL, 
	arrn_trgt_bgng_ymd varchar(8) NULL, 
	arrn_trgt_bgng_hr varchar(6) NULL, 
	arrn_trgt_end_ymd varchar(8) NULL, 
	arrn_trgt_end_hr varchar(6) NULL, 
	arrn_trgt_nocs numeric(5) NULL, 
	arrn_scs_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT arrn_excn_dsctn_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.arrn_excn_dsctn IS '배치실행내역';



COMMENT ON COLUMN irsuser.arrn_excn_dsctn.sn IS '일련번호';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_excn_ymd IS '배치실행일자';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_excn_hr IS '배치실행시간';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_nm IS '배치명';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.trsm_mgno IS '전송관리번호';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_trgt_bgng_ymd IS '배치대상시작일자';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_trgt_bgng_hr IS '배치대상시작시간';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_trgt_end_ymd IS '배치대상종료일자';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_trgt_end_hr IS '배치대상종료시간';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_trgt_nocs IS '배치대상건수';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.arrn_scs_yn IS '배치성공여부';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.arrn_excn_dsctn.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.chg_aply_artcl_dtl
테이블 설명 : 변경신청항목상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.chg_aply_artcl_dtl (
	aply_mgno varchar(10) NOT NULL, 
	chg_artcl_sn numeric(10) NOT NULL, 
	chg_cl_cd varchar(7) NULL, 
	chg_artcl_cd varchar(7) NULL, 
	bchg_cn varchar(2000) NULL, 
	achg_cn varchar(2000) NULL, 
	file_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	file_type_cl_cd varchar(7) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	CONSTRAINT chg_aply_artcl_dtl_pkey PRIMARY KEY (aply_mgno, chg_artcl_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.chg_aply_artcl_dtl IS '변경신청항목상세';



COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.chg_artcl_sn IS '변경항목일련번호';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.chg_cl_cd IS '변경구분코드';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.chg_artcl_cd IS '변경항목코드';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.bchg_cn IS '변경전내용';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.achg_cn IS '변경후내용';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.file_yn IS '파일여부';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.file_type_cl_cd IS '파일유형구분코드';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.chg_aply_artcl_dtl.reg_dt IS '등록일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_bsc
테이블 설명 : 협의체기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_bsc (
	cnsltngrp_mgno varchar(10) NOT NULL, 
	cncld_mgno varchar(10) NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	cnsltngrp_nm varchar(300) NULL, 
	etc_data_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	cnsltngrp_cmps_ymd varchar(8) NULL, 
	cnsltn_cn varchar(2000) NULL, 
	oper_rgl_cn varchar(2000) NULL, 
	CONSTRAINT cnsltngrp_bsc_pkey PRIMARY KEY (cnsltngrp_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_bsc IS '협의체기본';



COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cnsltngrp_nm IS '협의체명';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cnsltngrp_cmps_ymd IS '협의체구성일자';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.cnsltn_cn IS '협의내용';
COMMENT ON COLUMN irsuser.cnsltngrp_bsc.oper_rgl_cn IS '운영규정내용';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_data_dtl
테이블 설명 : 협의체자료상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_data_dtl (
	data_sn numeric(10) NOT NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	dcsn_cn varchar(2000) NULL, 
	cnsltn_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT cnsltngrp_data_dtl_pkey PRIMARY KEY (data_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_data_dtl IS '협의체자료상세';



COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.data_sn IS '자료일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.dcsn_cn IS '결정내용';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.cnsltn_ymd IS '협의일자';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_data_dtl_hstry
테이블 설명 : 협의체자료상세이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_data_dtl_hstry (
	hstry_sn numeric(10) NOT NULL, 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	data_sn numeric(10) NOT NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	dcsn_cn varchar(2000) NULL, 
	cnsltn_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT cnsltngrp_data_dtl_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_data_dtl_hstry IS '협의체자료상세이력';



COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.data_sn IS '자료일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.dcsn_cn IS '결정내용';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.cnsltn_ymd IS '협의일자';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_data_dtl_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_dtl
테이블 설명 : 협의체상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_dtl (
	gmbr_sn numeric(10) NOT NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	ntn_cd varchar(2) NOT NULL, 
	inst_nm varchar(300) NULL, 
	cmps_ymd varchar(10) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	intnt_gnrl_telno varchar(100) NULL, 
	gmbr_krn_nm varchar(100) NULL, 
	gmbr_orgt_nm varchar(100) NULL, 
	eml_addr varchar(300) NULL, 
	cncld_mgno varchar(10) NULL, 
	CONSTRAINT cnsltngrp_dtl_pkey PRIMARY KEY (gmbr_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_dtl IS '협의체상세';



COMMENT ON COLUMN irsuser.cnsltngrp_dtl.gmbr_sn IS '구성원일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.ntn_cd IS '국가코드';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.inst_nm IS '기관명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.cmps_ymd IS '구성일자';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.intnt_gnrl_telno IS '국제일반전화번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.gmbr_krn_nm IS '구성원국문명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.gmbr_orgt_nm IS '구성원원문명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.eml_addr IS '이메일주소';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl.cncld_mgno IS '체결관리번호';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_dtl_hstry
테이블 설명 : 협의체상세이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_dtl_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('cnsltngrp_dtl_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	gmbr_sn numeric(10) NOT NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	ntn_cd varchar(2) NOT NULL, 
	inst_nm varchar(300) NOT NULL, 
	cmps_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	intnt_gnrl_telno varchar(100) NULL, 
	gmbr_krn_nm varchar(100) NULL, 
	gmbr_orgt_nm varchar(100) NULL, 
	eml_addr varchar(300) NULL, 
	cncld_mgno varchar(10) NULL, 
	CONSTRAINT cnsltngrp_dtl_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_dtl_hstry IS '협의체상세이력';



COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.gmbr_sn IS '구성원일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.ntn_cd IS '국가코드';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.inst_nm IS '기관명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.cmps_ymd IS '구성일자';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.intnt_gnrl_telno IS '국제일반전화번호';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.gmbr_krn_nm IS '구성원국문명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.gmbr_orgt_nm IS '구성원원문명';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.eml_addr IS '이메일주소';
COMMENT ON COLUMN irsuser.cnsltngrp_dtl_hstry.cncld_mgno IS '체결관리번호';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.cnsltngrp_hstry
테이블 설명 : 협의체이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.cnsltngrp_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('cnsltngrp_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NULL, 
	cnsltngrp_mgno varchar(10) NOT NULL, 
	cncld_mgno varchar(10) NULL, 
	cncld_dgr numeric(3) NOT NULL, 
	cnsltngrp_nm varchar(300) NULL, 
	etc_data_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	cnsltngrp_cmps_ymd varchar(8) NULL, 
	cnsltn_cn varchar(2000) NULL, 
	oper_rgl_cn varchar(2000) NULL, 
	CONSTRAINT cnsltngrp_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.cnsltngrp_hstry IS '협의체이력';



COMMENT ON COLUMN irsuser.cnsltngrp_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cnsltngrp_mgno IS '협의체관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cncld_mgno IS '체결관리번호';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cncld_dgr IS '체결차수';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cnsltngrp_nm IS '협의체명';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cnsltngrp_cmps_ymd IS '협의체구성일자';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.cnsltn_cn IS '협의내용';
COMMENT ON COLUMN irsuser.cnsltngrp_hstry.oper_rgl_cn IS '운영규정내용';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_bbs_bsc
테이블 설명 : 공통게시판기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_bbs_bsc (
	bbs_sn numeric(10) NOT NULL, 
	bbs_group_mgno varchar(10) NOT NULL, 
	pstat_nm varchar(300) NOT NULL, 
	pstat_cn varchar(2000) NOT NULL, 
	flmno varchar(20) NULL, 
	type_cd varchar(7) NULL, 
	inq_cnt numeric(5) NOT NULL DEFAULT 0, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_bbs_bsc_pkey PRIMARY KEY (bbs_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_bbs_bsc IS '공통게시판기본';



COMMENT ON COLUMN irsuser.com_bbs_bsc.bbs_sn IS '게시판일련번호';
COMMENT ON COLUMN irsuser.com_bbs_bsc.bbs_group_mgno IS '게시판그룹관리번호';
COMMENT ON COLUMN irsuser.com_bbs_bsc.pstat_nm IS '게시글명';
COMMENT ON COLUMN irsuser.com_bbs_bsc.pstat_cn IS '게시글내용';
COMMENT ON COLUMN irsuser.com_bbs_bsc.flmno IS '파일번호';
COMMENT ON COLUMN irsuser.com_bbs_bsc.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.com_bbs_bsc.inq_cnt IS '조회수';
COMMENT ON COLUMN irsuser.com_bbs_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.com_bbs_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_bbs_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_bbs_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_bbs_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_bbs_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_bbs_group_bsc
테이블 설명 : 공통게시판그룹기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_bbs_group_bsc (
	bbs_group_mgno varchar(10) NOT NULL, 
	bbs_group_nm varchar(300) NOT NULL, 
	bbs_group_expln varchar(1000) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_bbs_group_bsc_pkey PRIMARY KEY (bbs_group_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_bbs_group_bsc IS '공통게시판그룹기본';



COMMENT ON COLUMN irsuser.com_bbs_group_bsc.bbs_group_mgno IS '게시판그룹관리번호';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.bbs_group_nm IS '게시판그룹명';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.bbs_group_expln IS '게시판그룹설명';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_bbs_group_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_biz_fld_bsc
테이블 설명 : 공통사업분야기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_biz_fld_bsc (
	biz_fld_cd_mgno varchar(10) NOT NULL, 
	biz_fld_eng_nm varchar(300) NULL, 
	biz_fld_korn_nm varchar(300) NULL, 
	biz_fld_cn varchar(2000) NULL, 
	sort_seqo numeric(5) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_biz_fld_bsc_pkey PRIMARY KEY (biz_fld_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_biz_fld_bsc IS '공통사업분야기본';



COMMENT ON COLUMN irsuser.com_biz_fld_bsc.biz_fld_cd_mgno IS '사업분야코드관리번호';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.biz_fld_eng_nm IS '사업분야영문명';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.biz_fld_korn_nm IS '사업분야한글명';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.biz_fld_cn IS '사업분야내용';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.sort_seqo IS '정렬순서';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_biz_fld_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_biz_fld_dtl
테이블 설명 : 공통사업분야상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_biz_fld_dtl (
	biz_fld_dtl_cd_mgno varchar(10) NOT NULL, 
	biz_fld_cd_mgno varchar(10) NOT NULL, 
	biz_dtl_fld_eng_nm varchar(300) NULL, 
	biz_dtl_fld_korn_nm varchar(300) NULL, 
	biz_dtl_fld_cn varchar(2000) NULL, 
	sort_seqo numeric(5) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	cmptnc_inst_no varchar(10) NULL, 
	CONSTRAINT com_biz_fld_dtl_pkey PRIMARY KEY (biz_fld_dtl_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_biz_fld_dtl IS '공통사업분야상세';



COMMENT ON COLUMN irsuser.com_biz_fld_dtl.biz_fld_dtl_cd_mgno IS '사업분야상세코드관리번호';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.biz_fld_cd_mgno IS '사업분야코드관리번호';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.biz_dtl_fld_eng_nm IS '사업상세분야영문명';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.biz_dtl_fld_korn_nm IS '사업상세분야한글명';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.biz_dtl_fld_cn IS '사업상세분야내용';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.sort_seqo IS '정렬순서';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.com_biz_fld_dtl.cmptnc_inst_no IS '관할기관번호';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_cd_dtl
테이블 설명 : 공통코드상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_cd_dtl (
	cd_mgno varchar(10) NOT NULL, 
	group_cd_mgno varchar(20) NOT NULL, 
	cd_eng_nm varchar(300) NOT NULL, 
	cd_korn_nm varchar(300) NOT NULL, 
	cd_cn varchar(2000) NULL, 
	sort_seqo numeric(5) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_cd_dtl_pkey PRIMARY KEY (cd_mgno, group_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_cd_dtl IS '공통코드상세';



COMMENT ON COLUMN irsuser.com_cd_dtl.cd_mgno IS '코드관리번호';
COMMENT ON COLUMN irsuser.com_cd_dtl.group_cd_mgno IS '그룹코드관리번호';
COMMENT ON COLUMN irsuser.com_cd_dtl.cd_eng_nm IS '코드영문명';
COMMENT ON COLUMN irsuser.com_cd_dtl.cd_korn_nm IS '코드한글명';
COMMENT ON COLUMN irsuser.com_cd_dtl.cd_cn IS '코드내용';
COMMENT ON COLUMN irsuser.com_cd_dtl.sort_seqo IS '정렬순서';
COMMENT ON COLUMN irsuser.com_cd_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_cd_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_cd_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_cd_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_cd_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_err_msg_bsc
테이블 설명 : 공통오류메시지기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_err_msg_bsc (
	err_msg_cd varchar(7) NOT NULL, 
	err_msg_cl_cd varchar(7) NULL, 
	err_msg_ntn_cd varchar(2) NULL, 
	err_msg_nm varchar(300) NULL, 
	inpt_cnt numeric(5) NOT NULL DEFAULT 0, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_err_msg_bsc_pkey PRIMARY KEY (err_msg_cd)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_err_msg_bsc IS '공통오류메시지기본';



COMMENT ON COLUMN irsuser.com_err_msg_bsc.err_msg_cd IS '오류메시지코드';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.err_msg_cl_cd IS '오류메시지구분코드';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.err_msg_ntn_cd IS '오류메시지국가코드';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.err_msg_nm IS '오류메시지명';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.inpt_cnt IS '입력수';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_err_msg_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_file_dtl
테이블 설명 : 공통파일상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_file_dtl (
	file_mgno varchar(10) NOT NULL, 
	file_group_mgno varchar(10) NOT NULL, 
	orgnl_file_nm varchar(100) NOT NULL, 
	file_path varchar(500) NOT NULL, 
	file_nm varchar(300) NOT NULL, 
	file_sz numeric(10) NOT NULL, 
	file_extn_nm varchar(300) NOT NULL, 
	dwnld_cnt numeric(10) NOT NULL DEFAULT 0, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_file_dtl_pkey PRIMARY KEY (file_mgno, file_group_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_file_dtl IS '공통파일상세';



COMMENT ON COLUMN irsuser.com_file_dtl.file_mgno IS '파일관리번호';
COMMENT ON COLUMN irsuser.com_file_dtl.file_group_mgno IS '파일그룹관리번호';
COMMENT ON COLUMN irsuser.com_file_dtl.orgnl_file_nm IS '원본파일명';
COMMENT ON COLUMN irsuser.com_file_dtl.file_path IS '파일경로';
COMMENT ON COLUMN irsuser.com_file_dtl.file_nm IS '파일명';
COMMENT ON COLUMN irsuser.com_file_dtl.file_sz IS '파일크기';
COMMENT ON COLUMN irsuser.com_file_dtl.file_extn_nm IS '파일확장자명';
COMMENT ON COLUMN irsuser.com_file_dtl.dwnld_cnt IS '다운로드수';
COMMENT ON COLUMN irsuser.com_file_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_file_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_file_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_file_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_file_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_file_group_bsc
테이블 설명 : 공통파일그룹기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_file_group_bsc (
	file_group_mgno varchar(10) NOT NULL, 
	file_type_cl_cd varchar(7) NOT NULL, 
	menu_mgno varchar(10) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_file_group_bsc_pkey PRIMARY KEY (file_group_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_file_group_bsc IS '공통파일그룹기본';



COMMENT ON COLUMN irsuser.com_file_group_bsc.file_group_mgno IS '파일그룹관리번호';
COMMENT ON COLUMN irsuser.com_file_group_bsc.file_type_cl_cd IS '파일유형구분코드';
COMMENT ON COLUMN irsuser.com_file_group_bsc.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.com_file_group_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_file_group_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_file_group_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_file_group_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_file_group_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_group_cd_bsc
테이블 설명 : 공통그룹코드기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_group_cd_bsc (
	group_cd_mgno varchar(20) NOT NULL, 
	group_cd_eng_nm varchar(300) NOT NULL, 
	group_cd_korn_nm varchar(300) NOT NULL, 
	group_cd_cn varchar(2000) NULL, 
	cd_reg_lmt_cnt numeric(5) NOT NULL DEFAULT 0, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_group_cd_bsc_pkey PRIMARY KEY (group_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_group_cd_bsc IS '공통그룹코드기본';



COMMENT ON COLUMN irsuser.com_group_cd_bsc.group_cd_mgno IS '그룹코드관리번호';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.group_cd_eng_nm IS '그룹코드영문명';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.group_cd_korn_nm IS '그룹코드한글명';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.group_cd_cn IS '그룹코드내용';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.cd_reg_lmt_cnt IS '코드등록제한수';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_group_cd_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_mnofc_bsc
테이블 설명 : 공통부처기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_mnofc_bsc (
	inst_mgno varchar(10) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_mnofc_bsc_pk PRIMARY KEY (inst_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_mnofc_bsc IS '공통부처기본';



COMMENT ON COLUMN irsuser.com_mnofc_bsc.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.com_mnofc_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_mnofc_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_mnofc_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_mnofc_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_mnofc_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_mnofc_dtl
테이블 설명 : 공통부처상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_mnofc_dtl (
	up_inst_mgno varchar(10) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	sort_seqo numeric(5) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_mnofc_dtl_pk PRIMARY KEY (up_inst_mgno, inst_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_mnofc_dtl IS '공통부처상세';



COMMENT ON COLUMN irsuser.com_mnofc_dtl.up_inst_mgno IS '상위기관관리번호';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.sort_seqo IS '정렬순서';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_mnofc_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.com_ntn_cd_bsc
테이블 설명 : 공통국가코드기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.com_ntn_cd_bsc (
	iata_ntn_cd varchar(2) NOT NULL, 
	ntn_eng_nm varchar(300) NULL, 
	ntn_korn_nm varchar(300) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT com_ntn_cd_bsc_pkey PRIMARY KEY (iata_ntn_cd)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.com_ntn_cd_bsc IS '공통국가코드기본';



COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.iata_ntn_cd IS 'IATA국가코드';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.ntn_eng_nm IS '국가영문명';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.ntn_korn_nm IS '국가한글명';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.com_ntn_cd_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.info_prvt_bsc
테이블 설명 : 정보비공개기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.info_prvt_bsc (
	prvt_mgno varchar(10) NOT NULL, 
	type_cd varchar(10) NULL, 
	data_dgr numeric(3) NULL, 
	prcs_dgr numeric(3) NULL, 
	vld_prvt_dgr numeric(3) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT info_prvt_bsc_pkey PRIMARY KEY (prvt_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.info_prvt_bsc IS '정보비공개기본';



COMMENT ON COLUMN irsuser.info_prvt_bsc.prvt_mgno IS '비공개관리번호';
COMMENT ON COLUMN irsuser.info_prvt_bsc.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.info_prvt_bsc.data_dgr IS '자료차수';
COMMENT ON COLUMN irsuser.info_prvt_bsc.prcs_dgr IS '처리차수';
COMMENT ON COLUMN irsuser.info_prvt_bsc.vld_prvt_dgr IS '유효비공개차수';
COMMENT ON COLUMN irsuser.info_prvt_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.info_prvt_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.info_prvt_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.info_prvt_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.info_prvt_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.info_prvt_dlbr_dtl
테이블 설명 : 정보비공개심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.info_prvt_dlbr_dtl (
	prvt_mgno varchar(10) NOT NULL, 
	prvt_dgr numeric(3) NOT NULL, 
	dlbr_type_cd varchar(10) NULL, 
	dlbr_dt timestamp(6) NULL, 
	dlbr_opnn varchar(1000) NULL, 
	dlbr_inst_cd varchar(10) NULL, 
	dlbrr_id varchar(20) NULL, 
	dlbr_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT info_prvt_dlbr_dtl_pkey PRIMARY KEY (prvt_mgno, prvt_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.info_prvt_dlbr_dtl IS '정보비공개심의상세';



COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.prvt_mgno IS '비공개관리번호';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.prvt_dgr IS '비공개차수';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbr_type_cd IS '심의유형코드';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbr_dt IS '심의일시';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbr_opnn IS '심의의견';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbr_inst_cd IS '심의기관코드';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbrr_id IS '심의자ID';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.dlbr_flmno IS '심의파일번호';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.info_prvt_dlbr_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.info_prvt_dtl
테이블 설명 : 정보비공개상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.info_prvt_dtl (
	prvt_mgno varchar(10) NOT NULL, 
	prvt_dgr numeric(3) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	user_id varchar(20) NULL, 
	prvt_trgt_cl_cd varchar(10) NULL, 
	biz_mgno varchar(10) NOT NULL, 
	biz_plnd_prvt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	mntrg_rptp_prvt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	vrfc_rptp_prvt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	prvt_aply_rsn varchar(1000) NULL, 
	etc_data_flmno varchar(20) NULL, 
	cmptnc_inst_mgno varchar(10) NULL, 
	aply_type_cd varchar(10) NULL, 
	aply_ymd varchar(8) NULL, 
	prcs_type_cd varchar(10) NULL, 
	prcs_ymd varchar(8) NULL, 
	sms_trsm_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	type_cd varchar(10) NULL, 
	data_dgr numeric(3) NULL, 
	CONSTRAINT info_prvt_dtl_pkey PRIMARY KEY (prvt_mgno, prvt_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.info_prvt_dtl IS '정보비공개상세';



COMMENT ON COLUMN irsuser.info_prvt_dtl.prvt_mgno IS '비공개관리번호';
COMMENT ON COLUMN irsuser.info_prvt_dtl.prvt_dgr IS '비공개차수';
COMMENT ON COLUMN irsuser.info_prvt_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.info_prvt_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.info_prvt_dtl.prvt_trgt_cl_cd IS '비공개대상구분코드';
COMMENT ON COLUMN irsuser.info_prvt_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.info_prvt_dtl.biz_plnd_prvt_yn IS '사업계획서비공개여부';
COMMENT ON COLUMN irsuser.info_prvt_dtl.mntrg_rptp_prvt_yn IS '모니터링보고서비공개여부';
COMMENT ON COLUMN irsuser.info_prvt_dtl.vrfc_rptp_prvt_yn IS '검증보고서비공개여부';
COMMENT ON COLUMN irsuser.info_prvt_dtl.prvt_aply_rsn IS '비공개신청사유';
COMMENT ON COLUMN irsuser.info_prvt_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.info_prvt_dtl.cmptnc_inst_mgno IS '관할기관관리번호';
COMMENT ON COLUMN irsuser.info_prvt_dtl.aply_type_cd IS '신청유형코드';
COMMENT ON COLUMN irsuser.info_prvt_dtl.aply_ymd IS '신청일자';
COMMENT ON COLUMN irsuser.info_prvt_dtl.prcs_type_cd IS '처리유형코드';
COMMENT ON COLUMN irsuser.info_prvt_dtl.prcs_ymd IS '처리일자';
COMMENT ON COLUMN irsuser.info_prvt_dtl.sms_trsm_yn IS 'SMS전송여부';
COMMENT ON COLUMN irsuser.info_prvt_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.info_prvt_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.info_prvt_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.info_prvt_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.info_prvt_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.info_prvt_dtl.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.info_prvt_dtl.data_dgr IS '자료차수';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.info_prvt_hstry
테이블 설명 : 정보비공개이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.info_prvt_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('info_prvt_hstry_seq'::regclass), 
	prvt_mgno varchar(10) NOT NULL, 
	prvt_dgr numeric(3) NOT NULL, 
	hstry_type_cd varchar(7) NULL, 
	hstry_rslt_cd varchar(7) NULL, 
	hstry_ymd varchar(8) NULL, 
	hstry_dtl_rsn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT info_prvt_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.info_prvt_hstry IS '정보비공개이력';



COMMENT ON COLUMN irsuser.info_prvt_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.info_prvt_hstry.prvt_mgno IS '비공개관리번호';
COMMENT ON COLUMN irsuser.info_prvt_hstry.prvt_dgr IS '비공개차수';
COMMENT ON COLUMN irsuser.info_prvt_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.info_prvt_hstry.hstry_rslt_cd IS '이력결과코드';
COMMENT ON COLUMN irsuser.info_prvt_hstry.hstry_ymd IS '이력일자';
COMMENT ON COLUMN irsuser.info_prvt_hstry.hstry_dtl_rsn IS '이력상세사유';
COMMENT ON COLUMN irsuser.info_prvt_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.info_prvt_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.info_prvt_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.info_prvt_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.info_prvt_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.inst_acnt_dtl
테이블 설명 : 기관계정상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.inst_acnt_dtl (
	inst_mgno varchar(10) NOT NULL, 
	acnt_cl_cd varchar(7) NOT NULL, 
	acnt_unqno varchar(10) NULL, 
	nqnt numeric(10) NULL, 
	acnt_stts_cd varchar(7) NULL, 
	pblcn_ymd varchar(8) NULL, 
	last_chg_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT inst_acnt_dtl_pkey PRIMARY KEY (inst_mgno, acnt_cl_cd)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.inst_acnt_dtl IS '기관계정상세';



COMMENT ON COLUMN irsuser.inst_acnt_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.acnt_cl_cd IS '계정구분코드';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.acnt_unqno IS '계정고유번호';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.nqnt IS '수량';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.acnt_stts_cd IS '계정상태코드';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.pblcn_ymd IS '발행일자';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.last_chg_ymd IS '최종변경일자';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.inst_acnt_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.inst_bsc
테이블 설명 : 기관기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.inst_bsc (
	inst_mgno varchar(10) NOT NULL, 
	inst_clsf_cd varchar(7) NOT NULL, 
	inst_dtl_clsf_cd varchar(7) NOT NULL, 
	gov_inst_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	bzent_nm varchar(300) NULL, 
	bzent_cl_cd varchar(7) NULL, 
	brno varchar(20) NULL, 
	crno varchar(20) NULL, 
	rprsv_nm varchar(300) NULL, 
	rdnm_cd varchar(10) NULL, 
	addr varchar(100) NULL, 
	dtl_addr varchar(100) NULL, 
	corp_tel_ddd varchar(4) NULL, 
	corp_tel_tlpno varchar(4) NULL, 
	corp_tel_phino varchar(4) NULL, 
	acnt_stts_cl_cd varchar(7) NOT NULL, 
	brdoc_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	up_inst_mgno varchar(10) NOT NULL, 
	aprv_ymd varchar(8) NULL, 
	psn_acnt_unqno varchar(20) NULL, 
	psn_acnt_stts_cl_cd varchar(7) NULL, 
	CONSTRAINT inst_bsc_pkey PRIMARY KEY (inst_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.inst_bsc IS '기관기본';


COMMENT ON COLUMN irsuser.inst_bsc.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.inst_bsc.inst_clsf_cd IS '기관분류코드';
COMMENT ON COLUMN irsuser.inst_bsc.inst_dtl_clsf_cd IS '기관상세분류코드';
COMMENT ON COLUMN irsuser.inst_bsc.gov_inst_yn IS '정부기관여부';
COMMENT ON COLUMN irsuser.inst_bsc.bzent_nm IS '사업체명';
COMMENT ON COLUMN irsuser.inst_bsc.bzent_cl_cd IS '사업체구분코드';
COMMENT ON COLUMN irsuser.inst_bsc.brno IS '사업자등록번호';
COMMENT ON COLUMN irsuser.inst_bsc.crno IS '법인등록번호';
COMMENT ON COLUMN irsuser.inst_bsc.rprsv_nm IS '대표자명';
COMMENT ON COLUMN irsuser.inst_bsc.rdnm_cd IS '도로명코드';
COMMENT ON COLUMN irsuser.inst_bsc.addr IS '주소';
COMMENT ON COLUMN irsuser.inst_bsc.dtl_addr IS '상세주소';
COMMENT ON COLUMN irsuser.inst_bsc.corp_tel_ddd IS '법인전화지역번호';
COMMENT ON COLUMN irsuser.inst_bsc.corp_tel_tlpno IS '법인전화국번호';
COMMENT ON COLUMN irsuser.inst_bsc.corp_tel_phino IS '법인전화개별번호';
COMMENT ON COLUMN irsuser.inst_bsc.acnt_stts_cl_cd IS '계정상태구분코드';
COMMENT ON COLUMN irsuser.inst_bsc.brdoc_flmno IS '사업자등록증파일번호';
COMMENT ON COLUMN irsuser.inst_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.inst_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.inst_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.inst_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.inst_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.inst_bsc.up_inst_mgno IS '상위기관관리번호';
COMMENT ON COLUMN irsuser.inst_bsc.aprv_ymd IS '승인일자';
COMMENT ON COLUMN irsuser.inst_bsc.psn_acnt_unqno IS '보유계정고유번호';
COMMENT ON COLUMN irsuser.inst_bsc.psn_acnt_stts_cl_cd IS '보유계정상태구분코드';

CREATE TRIGGER tr_after_crt_mnofc AFTER INSERT OR DELETE ON irsuser.inst_bsc FOR EACH ROW EXECUTE FUNCTION fn_crt_mnofc();

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.inst_chg_aply_dtl
테이블 설명 : 기관변경신청상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.inst_chg_aply_dtl (
	aply_mgno varchar(10) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	bzent_nm varchar(300) NULL, 
	brno varchar(20) NULL, 
	crno varchar(20) NULL, 
	rprsv_nm varchar(300) NULL, 
	rdnm_cd varchar(10) NULL, 
	addr varchar(100) NULL, 
	dtl_addr varchar(100) NULL, 
	corp_tel_ddd varchar(4) NULL, 
	corp_tel_tlpno varchar(4) NULL, 
	corp_tel_phino varchar(4) NULL, 
	acnt_stts_cl_cd varchar(7) NULL, 
	brdoc_flmno varchar(20) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	brdoc_file_mgno varchar(10) NULL, 
	CONSTRAINT inst_chg_aply_dtl_pkey PRIMARY KEY (aply_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.inst_chg_aply_dtl IS '기관변경신청상세';



COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.bzent_nm IS '사업체명';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.brno IS '사업자등록번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.crno IS '법인등록번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.rprsv_nm IS '대표자명';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.rdnm_cd IS '도로명코드';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.addr IS '주소';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.dtl_addr IS '상세주소';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.corp_tel_ddd IS '법인전화지역번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.corp_tel_tlpno IS '법인전화국번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.corp_tel_phino IS '법인전화개별번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.acnt_stts_cl_cd IS '계정상태구분코드';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.brdoc_flmno IS '사업자등록증파일번호';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.inst_chg_aply_dtl.brdoc_file_mgno IS '사업자등록증파일관리번호';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.inst_stng_dtl
테이블 설명 : 기관설정상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.inst_stng_dtl (
	inst_mgno varchar(10) NOT NULL, 
	mhdlg_inst_mgno varchar(10) NOT NULL, 
	irb_inst_mgno varchar(10) NOT NULL, 
	rtadti_scsn_inst_mgno varchar(10) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT inst_stng_dtl_pkey PRIMARY KEY (inst_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.inst_stng_dtl IS '기관설정상세';



COMMENT ON COLUMN irsuser.inst_stng_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.inst_stng_dtl.mhdlg_inst_mgno IS '방법론기관관리번호';
COMMENT ON COLUMN irsuser.inst_stng_dtl.irb_inst_mgno IS '국제감축사업기관관리번호';
COMMENT ON COLUMN irsuser.inst_stng_dtl.rtadti_scsn_inst_mgno IS '권리의무승계기관관리번호';
COMMENT ON COLUMN irsuser.inst_stng_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.inst_stng_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.inst_stng_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.inst_stng_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.inst_stng_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_addt_data_dtl
테이블 설명 : 국제감축사업추가자료상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_addt_data_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	addt_data_dgr numeric(3) NOT NULL, 
	data_dmnd_type_cd varchar(7) NULL, 
	data_dmnd_dt timestamp(6) NULL, 
	data_dmnd_rsn varchar(1000) NULL, 
	data_dmnd_flmno varchar(10) NULL, 
	data_dmnd_inst_cd varchar(10) NOT NULL, 
	data_rqstr_id varchar(20) NOT NULL, 
	data_reg_type_cd varchar(7) NULL, 
	data_reg_cn varchar(2000) NULL, 
	data_reg_dt timestamp(6) NULL, 
	data_rgtr_id varchar(20) NULL, 
	biz_plnd_flmno varchar(10) NULL, 
	etc_data_flmno varchar(10) NULL, 
	cnvr_bass_data_flmno varchar(10) NULL, 
	data_idnty_type_cd varchar(7) NULL, 
	data_idnty_cn varchar(2000) NULL, 
	data_idnty_dt timestamp(6) NULL, 
	data_idnty_inst_cd varchar(10) NULL, 
	data_idfr_id varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	data_dmnd_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	cert_vld_bgng_ymd varchar(8) NULL, 
	cert_vld_end_ymd varchar(8) NULL, 
	CONSTRAINT irb_addt_data_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, addt_data_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_addt_data_dtl IS '국제감축사업추가자료상세';



COMMENT ON COLUMN irsuser.irb_addt_data_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.addt_data_dgr IS '추가자료차수';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_type_cd IS '자료요청유형코드';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_dt IS '자료요청일시';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_rsn IS '자료요청사유';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_flmno IS '자료요청파일번호';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_inst_cd IS '자료요청기관코드';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_rqstr_id IS '자료요청자ID';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_reg_type_cd IS '자료등록유형코드';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_reg_cn IS '자료등록내용';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_reg_dt IS '자료등록일시';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_rgtr_id IS '자료등록자ID';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.biz_plnd_flmno IS '사업계획서파일번호';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.cnvr_bass_data_flmno IS '환산근거자료파일번호';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_idnty_type_cd IS '자료확인유형코드';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_idnty_cn IS '자료확인내용';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_idnty_dt IS '자료확인일시';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_idnty_inst_cd IS '자료확인기관코드';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_idfr_id IS '자료확인자ID';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.data_dmnd_yn IS '자료요청여부';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.cert_vld_bgng_ymd IS '인증유효시작일자';
COMMENT ON COLUMN irsuser.irb_addt_data_dtl.cert_vld_end_ymd IS '인증유효종료일자';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_bfdlbr_dtl
테이블 설명 : 국제감축사업사전심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_bfdlbr_dtl (
	bfdlbr_sn numeric(10) NOT NULL, 
	bfdlbr_dgr numeric(3) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	bfdlbr_inst_cd varchar(10) NOT NULL, 
	bfdlbr_pic_id varchar(20) NOT NULL, 
	bfdlbr_type_cd varchar(7) NULL, 
	bfdlbr_dt timestamp(6) NULL, 
	bfdlbr_opnn varchar(1000) NULL, 
	bfdlbr_flmno varchar(10) NULL, 
	objc_aply_opnn varchar(1000) NULL, 
	objc_aply_flmno varchar(10) NULL, 
	objc_aply_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	trsm_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_bfdlbr_dtl_pkey PRIMARY KEY (bfdlbr_sn, bfdlbr_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_bfdlbr_dtl IS '국제감축사업사전심의상세';



COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_sn IS '사전심의일련번호';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_dgr IS '사전심의차수';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_inst_cd IS '사전심의기관코드';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_pic_id IS '사전심의담당자ID';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_type_cd IS '사전심의유형코드';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_dt IS '사전심의일시';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_opnn IS '사전심의의견';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.bfdlbr_flmno IS '사전심의파일번호';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.objc_aply_opnn IS '이의신청의견';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.objc_aply_flmno IS '이의신청파일번호';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.objc_aply_ymd IS '이의신청일자';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_bfdlbr_dtl.trsm_yn IS '전송여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_bsc
테이블 설명 : 국제감축사업기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_bsc (
	biz_mgno varchar(10) NOT NULL, 
	type_cd varchar(7) NULL, 
	data_dgr numeric(3) NULL DEFAULT 0, 
	prcs_dgr numeric(3) NOT NULL, 
	vld_biz_dgr numeric(3) NOT NULL, 
	biz_koff_dgr numeric(3) NULL, 
	biz_koff_ymd varchar(8) NULL, 
	koff_rpt_flmno varchar(10) NULL, 
	biz_koff_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	biz_unqno varchar(50) NULL, 
	biz_rtrcn_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	biz_rtrcn_ymd varchar(8) NULL, 
	biz_chg_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	cert_prd_updt_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	cert_bgng_ymd_chg_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rtadti_scsn_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	addt_data_dmnd_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	dlay_dclr_dmnd_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	biz_rtrcn_dmnd_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	koff_dclr_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	biz_rls_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	chg_type_cd varchar(7) NULL, 
	chg_data_dgr numeric(3) NULL DEFAULT 0, 
	chg_dgr numeric(3) NULL DEFAULT 0, 
	updt_type_cd varchar(7) NULL, 
	updt_data_dgr numeric(3) NULL DEFAULT 0, 
	updt_dgr numeric(3) NULL DEFAULT 0, 
	ymd_type_cd varchar(7) NULL, 
	ymd_data_dgr numeric(3) NULL DEFAULT 0, 
	ymd_dgr numeric(3) NULL DEFAULT 0, 
	scsn_type_cd varchar(7) NULL, 
	scsn_data_dgr numeric(3) NULL DEFAULT 0, 
	scsn_dgr numeric(3) NULL DEFAULT 0, 
	bfdlbr_dgr numeric(3) NULL DEFAULT 0, 
	rtrcn_sn numeric(10) NULL, 
	rtrcn_type_cd varchar(7) NULL, 
	rtrcn_dmnd_type_cd varchar(7) NULL, 
	rtrcn_prcs_dt timestamp(6) NULL, 
	addt_data_type_cd varchar(7) NULL, 
	addt_data_prcs_ymd varchar(8) NULL, 
	CONSTRAINT irb_bsc_pkey PRIMARY KEY (biz_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_bsc IS '국제감축사업기본';



COMMENT ON COLUMN irsuser.irb_bsc.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_bsc.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.data_dgr IS '자료차수';
COMMENT ON COLUMN irsuser.irb_bsc.prcs_dgr IS '처리차수';
COMMENT ON COLUMN irsuser.irb_bsc.vld_biz_dgr IS '유효사업차수';
COMMENT ON COLUMN irsuser.irb_bsc.biz_koff_dgr IS '사업착수차수';
COMMENT ON COLUMN irsuser.irb_bsc.biz_koff_ymd IS '사업착수일자';
COMMENT ON COLUMN irsuser.irb_bsc.koff_rpt_flmno IS '착수보고파일번호';
COMMENT ON COLUMN irsuser.irb_bsc.biz_koff_yn IS '사업착수여부';
COMMENT ON COLUMN irsuser.irb_bsc.biz_unqno IS '사업고유번호';
COMMENT ON COLUMN irsuser.irb_bsc.biz_rtrcn_yn IS '사업취소여부';
COMMENT ON COLUMN irsuser.irb_bsc.biz_rtrcn_ymd IS '사업취소일자';
COMMENT ON COLUMN irsuser.irb_bsc.biz_chg_psblty_yn IS '사업변경가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.cert_prd_updt_psblty_yn IS '인증기간갱신가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.cert_bgng_ymd_chg_psblty_yn IS '인증시작일자변경가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.rtadti_scsn_psblty_yn IS '권리의무승계가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.addt_data_dmnd_psblty_yn IS '추가자료요청가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.dlay_dclr_dmnd_psblty_yn IS '지연신고요청가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.biz_rtrcn_dmnd_psblty_yn IS '사업취소요청가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.koff_dclr_psblty_yn IS '착수신고가능여부';
COMMENT ON COLUMN irsuser.irb_bsc.biz_rls_yn IS '사업공개여부';
COMMENT ON COLUMN irsuser.irb_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_bsc.chg_type_cd IS '변경유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.chg_data_dgr IS '변경자료차수';
COMMENT ON COLUMN irsuser.irb_bsc.chg_dgr IS '변경차수';
COMMENT ON COLUMN irsuser.irb_bsc.updt_type_cd IS '갱신유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.updt_data_dgr IS '갱신자료차수';
COMMENT ON COLUMN irsuser.irb_bsc.updt_dgr IS '갱신차수';
COMMENT ON COLUMN irsuser.irb_bsc.ymd_type_cd IS '일자유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.ymd_data_dgr IS '일자자료차수';
COMMENT ON COLUMN irsuser.irb_bsc.ymd_dgr IS '일자차수';
COMMENT ON COLUMN irsuser.irb_bsc.scsn_type_cd IS '승계유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.scsn_data_dgr IS '승계자료차수';
COMMENT ON COLUMN irsuser.irb_bsc.scsn_dgr IS '승계차수';
COMMENT ON COLUMN irsuser.irb_bsc.bfdlbr_dgr IS '사전심의차수';
COMMENT ON COLUMN irsuser.irb_bsc.rtrcn_sn IS '취소일련번호';
COMMENT ON COLUMN irsuser.irb_bsc.rtrcn_type_cd IS '취소유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.rtrcn_dmnd_type_cd IS '취소요청유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.rtrcn_prcs_dt IS '취소처리일시';
COMMENT ON COLUMN irsuser.irb_bsc.addt_data_type_cd IS '추가자료유형코드';
COMMENT ON COLUMN irsuser.irb_bsc.addt_data_prcs_ymd IS '추가자료처리일자';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_dlay_dtl
테이블 설명 : 국제감축사업지연상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_dlay_dtl (
	dlay_sn numeric(10) NOT NULL, 
	dlay_prcs_dgr numeric(3) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	dlay_dmnd_type_cd varchar(7) NULL, 
	dlay_dmnd_dt timestamp(6) NULL, 
	biz_koff_prnmnt_ymd varchar(8) NULL, 
	dlay_dmnd_rsn varchar(1000) NULL, 
	dlay_dmnd_flmno varchar(10) NULL, 
	dlay_idnty_type_cd varchar(7) NULL, 
	dlay_idnty_dt timestamp(6) NULL, 
	dlay_idnty_cn varchar(2000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	biz_dgr numeric(3) NULL, 
	dlay_idnty_flmno varchar(10) NULL, 
	dlay_dlbr_dt timestamp(6) NULL, 
	dlay_dlbr_cn varchar(1000) NULL, 
	dlay_dlbr_type_cd varchar(7) NULL, 
	dlay_dlbr_flmno varchar(10) NULL, 
	dlay_idnty_inst_mgno varchar(10) NULL, 
	dlay_dlbr_inst_mgno varchar(10) NULL, 
	dlay_idnty_id varchar(20) NULL, 
	dlay_dlbr_id varchar(20) NULL, 
	dlay_idnty_trsm_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	dlay_dlbr_trsm_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_dlay_dtl_pkey PRIMARY KEY (dlay_sn, dlay_prcs_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_dlay_dtl IS '국제감축사업지연상세';



COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_sn IS '지연일련번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_prcs_dgr IS '지연처리차수';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dmnd_type_cd IS '지연요청유형코드';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dmnd_dt IS '지연요청일시';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.biz_koff_prnmnt_ymd IS '사업착수예정일자';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dmnd_rsn IS '지연요청사유';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dmnd_flmno IS '지연요청파일번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_type_cd IS '지연확인유형코드';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_dt IS '지연확인일시';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_cn IS '지연확인내용';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_flmno IS '지연확인파일번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_dt IS '지연심의일시';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_cn IS '지연심의내용';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_type_cd IS '지연심의유형코드';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_flmno IS '지연심의파일번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_inst_mgno IS '지연확인기관관리번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_inst_mgno IS '지연심의기관관리번호';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_id IS '지연확인ID';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_id IS '지연심의ID';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_idnty_trsm_yn IS '지연확인전송여부';
COMMENT ON COLUMN irsuser.irb_dlay_dtl.dlay_dlbr_trsm_yn IS '지연심의전송여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_dlbr_dtl
테이블 설명 : 국제감축사업심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_dlbr_dtl (
	dlbr_sn numeric(10) NOT NULL, 
	dlbr_dgr numeric(3) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	dlbr_rslt_reg_inst_cd varchar(10) NOT NULL, 
	dlbr_rslt_rgtr_id varchar(20) NOT NULL, 
	dlbr_type_cd varchar(7) NULL, 
	dlbr_dt timestamp(6) NULL, 
	dlbr_opnn varchar(1000) NULL, 
	dlbr_flmno varchar(10) NULL, 
	objc_aply_opnn varchar(1000) NULL, 
	objc_aply_flmno varchar(10) NULL, 
	objc_aply_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	biz_unqno varchar(50) NULL, 
	trsm_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_dlbr_dtl_pkey PRIMARY KEY (dlbr_sn, dlbr_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_dlbr_dtl IS '국제감축사업심의상세';



COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_sn IS '심의일련번호';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_dgr IS '심의차수';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_rslt_reg_inst_cd IS '심의결과등록기관코드';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_rslt_rgtr_id IS '심의결과등록자ID';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_type_cd IS '심의유형코드';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_dt IS '심의일시';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_opnn IS '심의의견';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.dlbr_flmno IS '심의파일번호';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.objc_aply_opnn IS '이의신청의견';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.objc_aply_flmno IS '이의신청파일번호';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.objc_aply_ymd IS '이의신청일자';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.biz_unqno IS '사업고유번호';
COMMENT ON COLUMN irsuser.irb_dlbr_dtl.trsm_yn IS '전송여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_dtl
테이블 설명 : 국제감축사업상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	dgr_reg_rsn_cd varchar(7) NULL, 
	agr_mgno varchar(10) NULL, 
	agr_dgr numeric(3) NULL, 
	inst_mgno varchar(10) NULL, 
	user_id varchar(20) NULL, 
	prgrm_mgno varchar(10) NULL, 
	bplc_nm varchar(300) NULL, 
	biz_enfc_plc_nm varchar(300) NULL, 
	iata_ntn_cd varchar(2) NULL, 
	aply_cl_cd varchar(7) NULL, 
	agr_claus_cd varchar(7) NULL, 
	biz_form_cd varchar(7) NULL, 
	biz_type_cd varchar(7) NULL, 
	biz_scal_cd varchar(7) NULL, 
	biz_orgt_nm varchar(300) NULL, 
	biz_krn_nm varchar(300) NULL, 
	koff_prnmnt_ymd varchar(8) NULL, 
	cert_vld_type_cd varchar(7) NULL, 
	cert_vld_bgng_ymd varchar(8) NULL, 
	cert_vld_end_ymd varchar(8) NULL, 
	bfcnvr_rdcqty numeric(10) NULL, 
	rdc_unit_cd varchar(7) NULL, 
	cnvr_coef_cn varchar(2000) NULL, 
	cnvr_bass_cn varchar(2000) NULL, 
	atcnvr_rdcqty numeric(10) NULL, 
	biz_fld_cd varchar(7) NULL, 
	biz_dtl_fld_cd varchar(7) NULL, 
	sop_rdcqty numeric(10, 1) NULL, 
	sop_unit_cd varchar(7) NULL, 
	omge_rdcqty numeric(10, 1) NULL, 
	omge_unit_cd varchar(7) NULL, 
	biz_plnd_flmno varchar(10) NULL, 
	etc_data_flmno varchar(10) NULL, 
	cnvr_bass_data_flmno varchar(10) NULL, 
	trsm_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	cmptnc_inst_mgno varchar(10) NULL, 
	aply_type_cd varchar(7) NULL, 
	aply_dt timestamp(6) NULL, 
	prcs_type_cd varchar(7) NULL, 
	prcs_dt timestamp(6) NULL, 
	addt_data_type_cd varchar(7) NULL, 
	addt_data_prcs_ymd varchar(8) NULL, 
	evl_sn numeric(10) NULL, 
	bfdlbr_sn numeric(10) NULL, 
	dlbr_sn numeric(10) NULL, 
	dlay_sn numeric(10) NULL, 
	rtrcn_sn numeric(10) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	type_cd varchar(7) NULL, 
	data_dgr numeric(3) NULL, 
	redd_plus_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	chg_cn varchar(2000) NULL, 
	scsn_cl_cd varchar(7) NULL, 
	scsn_cn varchar(2000) NULL, 
	scsn_data_flmno varchar(10) NULL, 
	scsn_biz_plnd_flmno varchar(10) NULL, 
	scsn_etc_data_flmno varchar(10) NULL, 
	scsn_bgng_dgr numeric(3) NULL DEFAULT 0, 
	bgng_dgr numeric(3) NULL DEFAULT 0, 
	scsn_inst_mgno varchar(10) NULL, 
	biz_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_dtl IS '국제감축사업상세';



COMMENT ON COLUMN irsuser.irb_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_dtl.dgr_reg_rsn_cd IS '차수등록사유코드';
COMMENT ON COLUMN irsuser.irb_dtl.agr_mgno IS '협정관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.agr_dgr IS '협정차수';
COMMENT ON COLUMN irsuser.irb_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.irb_dtl.prgrm_mgno IS '프로그램관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.bplc_nm IS '사업장명';
COMMENT ON COLUMN irsuser.irb_dtl.biz_enfc_plc_nm IS '사업시행장소명';
COMMENT ON COLUMN irsuser.irb_dtl.iata_ntn_cd IS 'IATA국가코드';
COMMENT ON COLUMN irsuser.irb_dtl.aply_cl_cd IS '신청구분코드';
COMMENT ON COLUMN irsuser.irb_dtl.agr_claus_cd IS '협정조항코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_form_cd IS '사업형태코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_type_cd IS '사업유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_scal_cd IS '사업규모코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_orgt_nm IS '사업원문명';
COMMENT ON COLUMN irsuser.irb_dtl.biz_krn_nm IS '사업국문명';
COMMENT ON COLUMN irsuser.irb_dtl.koff_prnmnt_ymd IS '착수예정일자';
COMMENT ON COLUMN irsuser.irb_dtl.cert_vld_type_cd IS '인증유효유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.cert_vld_bgng_ymd IS '인증유효시작일자';
COMMENT ON COLUMN irsuser.irb_dtl.cert_vld_end_ymd IS '인증유효종료일자';
COMMENT ON COLUMN irsuser.irb_dtl.bfcnvr_rdcqty IS '환산전감축량';
COMMENT ON COLUMN irsuser.irb_dtl.rdc_unit_cd IS '감축단위코드';
COMMENT ON COLUMN irsuser.irb_dtl.cnvr_coef_cn IS '환산계수내용';
COMMENT ON COLUMN irsuser.irb_dtl.cnvr_bass_cn IS '환산근거내용';
COMMENT ON COLUMN irsuser.irb_dtl.atcnvr_rdcqty IS '환산후감축량';
COMMENT ON COLUMN irsuser.irb_dtl.biz_fld_cd IS '사업분야코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_dtl_fld_cd IS '사업상세분야코드';
COMMENT ON COLUMN irsuser.irb_dtl.sop_rdcqty IS 'SOP감축량';
COMMENT ON COLUMN irsuser.irb_dtl.sop_unit_cd IS 'SOP단위코드';
COMMENT ON COLUMN irsuser.irb_dtl.omge_rdcqty IS 'OMGE감축량';
COMMENT ON COLUMN irsuser.irb_dtl.omge_unit_cd IS 'OMGE단위코드';
COMMENT ON COLUMN irsuser.irb_dtl.biz_plnd_flmno IS '사업계획서파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.cnvr_bass_data_flmno IS '환산근거자료파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.trsm_yn IS '전송여부';
COMMENT ON COLUMN irsuser.irb_dtl.cmptnc_inst_mgno IS '관할기관관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.aply_type_cd IS '신청유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.aply_dt IS '신청일시';
COMMENT ON COLUMN irsuser.irb_dtl.prcs_type_cd IS '처리유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.prcs_dt IS '처리일시';
COMMENT ON COLUMN irsuser.irb_dtl.addt_data_type_cd IS '추가자료유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.addt_data_prcs_ymd IS '추가자료처리일자';
COMMENT ON COLUMN irsuser.irb_dtl.evl_sn IS '평가일련번호';
COMMENT ON COLUMN irsuser.irb_dtl.bfdlbr_sn IS '사전심의일련번호';
COMMENT ON COLUMN irsuser.irb_dtl.dlbr_sn IS '심의일련번호';
COMMENT ON COLUMN irsuser.irb_dtl.dlay_sn IS '지연일련번호';
COMMENT ON COLUMN irsuser.irb_dtl.rtrcn_sn IS '취소일련번호';
COMMENT ON COLUMN irsuser.irb_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_dtl.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.irb_dtl.data_dgr IS '자료차수';
COMMENT ON COLUMN irsuser.irb_dtl.redd_plus_yn IS 'REDD플러스유무';
COMMENT ON COLUMN irsuser.irb_dtl.chg_cn IS '변경내용';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_cl_cd IS '승계구분코드';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_cn IS '승계내용';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_data_flmno IS '승계자료파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_biz_plnd_flmno IS '승계사업계획서파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_etc_data_flmno IS '승계기타자료파일번호';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_bgng_dgr IS '승계시작차수';
COMMENT ON COLUMN irsuser.irb_dtl.bgng_dgr IS '시작차수';
COMMENT ON COLUMN irsuser.irb_dtl.scsn_inst_mgno IS '승계기관관리번호';
COMMENT ON COLUMN irsuser.irb_dtl.biz_yn IS '사업여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_evl_dtl
테이블 설명 : 국제감축사업평가상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_evl_dtl (
	evl_sn numeric(10) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	evl_dgr numeric(3) NOT NULL, 
	evl_inst_cd varchar(10) NOT NULL, 
	evalr_id varchar(20) NOT NULL, 
	evl_type_cd varchar(7) NULL, 
	evl_dt timestamp(6) NULL, 
	evl_opnn varchar(1000) NULL, 
	evl_flmno varchar(10) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	trsm_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_evl_dtl_pkey PRIMARY KEY (evl_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_evl_dtl IS '국제감축사업평가상세';



COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_sn IS '평가일련번호';
COMMENT ON COLUMN irsuser.irb_evl_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_dgr IS '평가차수';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_inst_cd IS '평가기관코드';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evalr_id IS '평가자ID';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_type_cd IS '평가유형코드';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_dt IS '평가일시';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_opnn IS '평가의견';
COMMENT ON COLUMN irsuser.irb_evl_dtl.evl_flmno IS '평가파일번호';
COMMENT ON COLUMN irsuser.irb_evl_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_evl_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_evl_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_evl_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_evl_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_evl_dtl.trsm_yn IS '전송여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_excr_dtl
테이블 설명 : 국제감축사업수행자상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_excr_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	sn numeric(10) NOT NULL, 
	inst_mgno varchar(10) NULL, 
	dmst_cl_cd varchar(7) NULL, 
	bfcnvr_rdcqty numeric(10) NULL, 
	rdc_unit_cd varchar(7) NULL, 
	cnvr_coef_cn varchar(2000) NULL, 
	atcnvr_rdcqty numeric(10) NULL, 
	agre_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	agre_ymd varchar(8) NULL, 
	inst_agre_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	inst_agre_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	cnvr_bass_cn varchar(2000) NULL, 
	bzent_nm varchar(300) NULL, 
	CONSTRAINT irb_excr_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_excr_dtl IS '국제감축사업수행자상세';



COMMENT ON COLUMN irsuser.irb_excr_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_excr_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_excr_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.irb_excr_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.irb_excr_dtl.dmst_cl_cd IS '국내구분코드';
COMMENT ON COLUMN irsuser.irb_excr_dtl.bfcnvr_rdcqty IS '환산전감축량';
COMMENT ON COLUMN irsuser.irb_excr_dtl.rdc_unit_cd IS '감축단위코드';
COMMENT ON COLUMN irsuser.irb_excr_dtl.cnvr_coef_cn IS '환산계수내용';
COMMENT ON COLUMN irsuser.irb_excr_dtl.atcnvr_rdcqty IS '환산후감축량';
COMMENT ON COLUMN irsuser.irb_excr_dtl.agre_yn IS '동의여부';
COMMENT ON COLUMN irsuser.irb_excr_dtl.agre_ymd IS '동의일자';
COMMENT ON COLUMN irsuser.irb_excr_dtl.inst_agre_yn IS '기관동의여부';
COMMENT ON COLUMN irsuser.irb_excr_dtl.inst_agre_ymd IS '기관동의일자';
COMMENT ON COLUMN irsuser.irb_excr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_excr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_excr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_excr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_excr_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_excr_dtl.cnvr_bass_cn IS '환산근거내용';
COMMENT ON COLUMN irsuser.irb_excr_dtl.bzent_nm IS '사업체명';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_hstry
테이블 설명 : 국제감축사업이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('irb_hstry_seq'::regclass), 
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	hstry_type_cd varchar(7) NULL, 
	hstry_rslt_cd varchar(7) NULL, 
	hstry_ymd varchar(8) NULL, 
	hstry_dtl_rsn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT irb_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_hstry IS '국제감축사업이력';



COMMENT ON COLUMN irsuser.irb_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.irb_hstry.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_hstry.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.irb_hstry.hstry_rslt_cd IS '이력결과코드';
COMMENT ON COLUMN irsuser.irb_hstry.hstry_ymd IS '이력일자';
COMMENT ON COLUMN irsuser.irb_hstry.hstry_dtl_rsn IS '이력상세사유';
COMMENT ON COLUMN irsuser.irb_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_mhdlg_dtl
테이블 설명 : 국제감축사업방법론상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_mhdlg_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	biz_fld_cd_mgno varchar(7) NOT NULL, 
	biz_fld_dtl_cd_mgno varchar(7) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	mhdlg_dgr numeric(3) NULL, 
	CONSTRAINT irb_mhdlg_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, mhdlg_mgno, biz_fld_cd_mgno, biz_fld_dtl_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_mhdlg_dtl IS '국제감축사업방법론상세';



COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.biz_fld_cd_mgno IS '사업분야코드관리번호';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.biz_fld_dtl_cd_mgno IS '사업분야상세코드관리번호';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_mhdlg_dtl.mhdlg_dgr IS '방법론차수';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_ntn_dtl
테이블 설명 : 국제감축사업국가상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_ntn_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	sn numeric(10) NOT NULL, 
	iata_ntn_cd varchar(2) NOT NULL, 
	inst_nm varchar(300) NULL, 
	dept_nm varchar(300) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT irb_ntn_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_ntn_dtl IS '국제감축사업국가상세';



COMMENT ON COLUMN irsuser.irb_ntn_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.iata_ntn_cd IS 'IATA국가코드';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.inst_nm IS '기관명';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.dept_nm IS '부서명';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_ntn_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_prgrm_dtl
테이블 설명 : 국제감축사업프로그램상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_prgrm_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	agr_mgno varchar(10) NULL, 
	agr_dgr numeric(3) NULL, 
	inst_mgno varchar(10) NOT NULL, 
	user_id varchar(20) NOT NULL, 
	bplc_nm varchar(300) NULL, 
	biz_enfc_plc_nm varchar(300) NULL, 
	iata_ntn_cd varchar(2) NULL, 
	aply_cl_cd varchar(7) NULL, 
	agr_claus_cd varchar(7) NULL, 
	biz_form_cd varchar(7) NULL, 
	biz_type_cd varchar(7) NULL, 
	biz_scal_cd varchar(7) NULL, 
	biz_orgt_nm varchar(300) NULL, 
	biz_krn_nm varchar(300) NULL, 
	koff_prnmnt_ymd varchar(8) NULL, 
	cert_vld_type_cd varchar(7) NULL, 
	cert_vld_bgng_ymd varchar(8) NULL, 
	cert_vld_end_ymd varchar(8) NULL, 
	bfcnvr_rdcqty numeric(10) NULL, 
	rdc_unit_cd varchar(7) NULL, 
	cnvr_coef_cn varchar(2000) NULL, 
	cnvr_bass_cn varchar(2000) NULL, 
	atcnvr_rdcqty numeric(10) NULL, 
	biz_fld_cd varchar(7) NULL, 
	biz_dtl_fld_cd varchar(7) NULL, 
	sop_rdcqty numeric(10) NULL, 
	sop_unit_cd varchar(7) NULL, 
	omge_rdcqty numeric(10) NULL, 
	omge_unit_cd varchar(7) NULL, 
	biz_plnd_flmno varchar(10) NULL, 
	etc_data_flmno varchar(10) NULL, 
	cnvr_bass_data_flmno varchar(10) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	redd_plus_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	biz_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT irb_prgrm_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_prgrm_dtl IS '국제감축사업프로그램상세';



COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.agr_mgno IS '협정관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.agr_dgr IS '협정차수';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.bplc_nm IS '사업장명';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_enfc_plc_nm IS '사업시행장소명';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.iata_ntn_cd IS 'IATA국가코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.aply_cl_cd IS '신청구분코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.agr_claus_cd IS '협정조항코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_form_cd IS '사업형태코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_type_cd IS '사업유형코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_scal_cd IS '사업규모코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_orgt_nm IS '사업원문명';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_krn_nm IS '사업국문명';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.koff_prnmnt_ymd IS '착수예정일자';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cert_vld_type_cd IS '인증유효유형코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cert_vld_bgng_ymd IS '인증유효시작일자';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cert_vld_end_ymd IS '인증유효종료일자';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.bfcnvr_rdcqty IS '환산전감축량';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.rdc_unit_cd IS '감축단위코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cnvr_coef_cn IS '환산계수내용';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cnvr_bass_cn IS '환산근거내용';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.atcnvr_rdcqty IS '환산후감축량';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_fld_cd IS '사업분야코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_dtl_fld_cd IS '사업상세분야코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.sop_rdcqty IS 'SOP감축량';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.sop_unit_cd IS 'SOP단위코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.omge_rdcqty IS 'OMGE감축량';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.omge_unit_cd IS 'OMGE단위코드';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_plnd_flmno IS '사업계획서파일번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.cnvr_bass_data_flmno IS '환산근거자료파일번호';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.redd_plus_yn IS 'REDD플러스유무';
COMMENT ON COLUMN irsuser.irb_prgrm_dtl.biz_yn IS '사업여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_prgrm_mhdlg_dtl
테이블 설명 : 국제감축사업프로그램방법론상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_prgrm_mhdlg_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	biz_fld_cd_mgno varchar(7) NOT NULL, 
	biz_fld_dtl_cd_mgno varchar(7) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	mhdlg_dgr numeric(3) NULL, 
	CONSTRAINT irb_prgrm_mhdlg_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, mhdlg_mgno, biz_fld_cd_mgno, biz_fld_dtl_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_prgrm_mhdlg_dtl IS '국제감축사업프로그램방법론상세';



COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.biz_fld_cd_mgno IS '사업분야코드관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.biz_fld_dtl_cd_mgno IS '사업분야상세코드관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_prgrm_mhdlg_dtl.mhdlg_dgr IS '방법론차수';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_prgrm_ntn_dtl
테이블 설명 : 국제감축사업프로그램국가상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_prgrm_ntn_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	sn numeric(10) NOT NULL, 
	iata_ntn_cd varchar(2) NOT NULL, 
	inst_nm varchar(300) NULL, 
	dept_nm varchar(300) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT irb_prgrm_ntn_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_prgrm_ntn_dtl IS '국제감축사업프로그램국가상세';



COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.iata_ntn_cd IS 'IATA국가코드';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.inst_nm IS '기관명';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.dept_nm IS '부서명';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_prgrm_ntn_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_rtrcn_dtl
테이블 설명 : 국제감축사업취소상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_rtrcn_dtl (
	rtrcn_sn numeric(10) NOT NULL, 
	rtrcn_dgr numeric(3) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	rtrcn_dmnd_type_cd varchar(7) NULL, 
	rtrcn_dmnd_cl_cd varchar(7) NULL, 
	rtrcn_dmnd_cn varchar(2000) NULL, 
	rtrcn_dmnd_flmno varchar(10) NULL, 
	rtrcn_dmnd_dt timestamp(6) NULL, 
	objc_pose_opnn varchar(1000) NULL, 
	objc_pose_flmno varchar(10) NULL, 
	objc_pose_dt timestamp(6) NULL, 
	prcs_rslt_cd varchar(7) NULL, 
	prcs_opnn varchar(1000) NULL, 
	prcs_flmno varchar(10) NULL, 
	prcs_dt timestamp(6) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	rtrcn_dmnd_rgtr_id varchar(20) NULL, 
	objc_pose_rgtr_id varchar(20) NULL, 
	prcs_rgtr_id varchar(20) NULL, 
	CONSTRAINT irb_rtrcn_dtl_pkey PRIMARY KEY (rtrcn_sn, rtrcn_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_rtrcn_dtl IS '국제감축사업취소상세';



COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_sn IS '취소일련번호';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dgr IS '취소차수';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_type_cd IS '취소요청유형코드';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_cl_cd IS '취소요청구분코드';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_cn IS '취소요청내용';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_flmno IS '취소요청파일번호';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_dt IS '취소요청일시';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.objc_pose_opnn IS '이의제기의견';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.objc_pose_flmno IS '이의제기파일번호';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.objc_pose_dt IS '이의제기일시';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.prcs_rslt_cd IS '처리결과코드';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.prcs_opnn IS '처리의견';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.prcs_flmno IS '처리파일번호';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.prcs_dt IS '처리일시';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.rtrcn_dmnd_rgtr_id IS '취소요청등록자ID';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.objc_pose_rgtr_id IS '이의제기등록자ID';
COMMENT ON COLUMN irsuser.irb_rtrcn_dtl.prcs_rgtr_id IS '처리등록자ID';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.irb_scsn_excr_dtl
테이블 설명 : 국제감축사업승계수행자상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.irb_scsn_excr_dtl (
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	sn numeric(10) NOT NULL, 
	hnov_inst_mgno varchar(20) NULL, 
	hnov_atcnvr_rdcqty numeric(10) NULL, 
	hnov_blck_mgno varchar(10) NULL, 
	hnov_qnt numeric(10) NULL, 
	wpmp_inst_mgno varchar(20) NULL, 
	wpmp_atcnvr_rdcqty numeric(10) NULL, 
	wpmp_blck_mgno varchar(10) NULL, 
	wpmp_qnt numeric(10) NULL, 
	agre_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	agre_ymd varchar(8) NULL, 
	inst_agre_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	inst_agre_ymd varchar(8) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT irb_scsn_excr_dtl_pkey PRIMARY KEY (biz_mgno, biz_dgr, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.irb_scsn_excr_dtl IS '국제감축사업승계수행자상세';



COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.hnov_inst_mgno IS '양도기관관리번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.hnov_atcnvr_rdcqty IS '양도환산후감축량';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.hnov_blck_mgno IS '양도블록관리번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.hnov_qnt IS '양도량';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.wpmp_inst_mgno IS '양수기관관리번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.wpmp_atcnvr_rdcqty IS '양수환산후감축량';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.wpmp_blck_mgno IS '양수블록관리번호';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.wpmp_qnt IS '양수량';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.agre_yn IS '동의여부';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.agre_ymd IS '동의일자';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.inst_agre_yn IS '기관동의여부';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.inst_agre_ymd IS '기관동의일자';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.irb_scsn_excr_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.jwt_user_bsc
테이블 설명 : JWT사용자기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.jwt_user_bsc (
	lgn_id varchar(20) NOT NULL, 
	user_id varchar(20) NOT NULL, 
	encpt_pswd varchar(100) NOT NULL, 
	user_cl_cd varchar(7) NOT NULL, 
	CONSTRAINT jwt_user_bsc_pkey PRIMARY KEY (lgn_id)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.jwt_user_bsc IS 'JWT사용자기본';



COMMENT ON COLUMN irsuser.jwt_user_bsc.lgn_id IS '로그인ID';
COMMENT ON COLUMN irsuser.jwt_user_bsc.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.jwt_user_bsc.encpt_pswd IS '암호화비밀번호';
COMMENT ON COLUMN irsuser.jwt_user_bsc.user_cl_cd IS '사용자구분코드';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.jwt_user_refresh_tkn_bsc
테이블 설명 : JWT사용자리프레시토큰기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.jwt_user_refresh_tkn_bsc (
	lgn_id varchar(20) NOT NULL, 
	refresh_tkn_cn varchar(2000) NOT NULL, 
	user_clnt_cn varchar(2000) NOT NULL, 
	CONSTRAINT jwt_user_refresh_tkn_bsc_pkey PRIMARY KEY (lgn_id)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.jwt_user_refresh_tkn_bsc IS 'JWT사용자리프레시토큰기본';



COMMENT ON COLUMN irsuser.jwt_user_refresh_tkn_bsc.lgn_id IS '로그인ID';
COMMENT ON COLUMN irsuser.jwt_user_refresh_tkn_bsc.refresh_tkn_cn IS '리프레시토큰내용';
COMMENT ON COLUMN irsuser.jwt_user_refresh_tkn_bsc.user_clnt_cn IS '사용자클라이언트내용';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.jwt_user_role_bsc
테이블 설명 : JWT사용자역할기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.jwt_user_role_bsc (
	lgn_id varchar(20) NOT NULL, 
	jwt_role_nm varchar(300) NOT NULL, 
	CONSTRAINT jwt_user_role_bsc_pkey PRIMARY KEY (lgn_id, jwt_role_nm)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.jwt_user_role_bsc IS 'JWT사용자역할기본';



COMMENT ON COLUMN irsuser.jwt_user_role_bsc.lgn_id IS '로그인ID';
COMMENT ON COLUMN irsuser.jwt_user_role_bsc.jwt_role_nm IS 'JWT역할명';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.menu_bsc
테이블 설명 : 메뉴기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.menu_bsc (
	menu_mgno varchar(10) NOT NULL, 
	up_menu_mgno varchar(10) NOT NULL, 
	menu_cl_cd varchar(7) NOT NULL, 
	menu_nm varchar(300) NOT NULL, 
	menu_expln varchar(1000) NULL, 
	menu_url_addr varchar(100) NULL, 
	expsr_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	popup_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	menu_lvl numeric(5) NULL, 
	sort_seqo numeric(5) NULL, 
	sys_cl_cd varchar(7) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT menu_bsc_pkey PRIMARY KEY (menu_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.menu_bsc IS '메뉴기본';



COMMENT ON COLUMN irsuser.menu_bsc.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.menu_bsc.up_menu_mgno IS '상위메뉴관리번호';
COMMENT ON COLUMN irsuser.menu_bsc.menu_cl_cd IS '메뉴구분코드';
COMMENT ON COLUMN irsuser.menu_bsc.menu_nm IS '메뉴명';
COMMENT ON COLUMN irsuser.menu_bsc.menu_expln IS '메뉴설명';
COMMENT ON COLUMN irsuser.menu_bsc.menu_url_addr IS '메뉴URL주소';
COMMENT ON COLUMN irsuser.menu_bsc.expsr_yn IS '노출여부';
COMMENT ON COLUMN irsuser.menu_bsc.popup_yn IS '팝업여부';
COMMENT ON COLUMN irsuser.menu_bsc.menu_lvl IS '메뉴레벨';
COMMENT ON COLUMN irsuser.menu_bsc.sort_seqo IS '정렬순서';
COMMENT ON COLUMN irsuser.menu_bsc.sys_cl_cd IS '시스템구분코드';
COMMENT ON COLUMN irsuser.menu_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.menu_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.menu_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.menu_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.menu_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.menu_role_dtl
테이블 설명 : 메뉴역할상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.menu_role_dtl (
	role_id_mgno varchar(10) NOT NULL, 
	menu_mgno varchar(10) NOT NULL, 
	role_menu_sn numeric(10) NULL, 
	inq_authrt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	reg_authrt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	mdfcn_authrt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_authrt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	excn_authrt_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT menu_role_dtl_pkey PRIMARY KEY (role_id_mgno, menu_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.menu_role_dtl IS '메뉴역할상세';



COMMENT ON COLUMN irsuser.menu_role_dtl.role_id_mgno IS '역할ID관리번호';
COMMENT ON COLUMN irsuser.menu_role_dtl.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.menu_role_dtl.role_menu_sn IS '역할메뉴일련번호';
COMMENT ON COLUMN irsuser.menu_role_dtl.inq_authrt_yn IS '조회권한여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.reg_authrt_yn IS '등록권한여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.mdfcn_authrt_yn IS '수정권한여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.del_authrt_yn IS '삭제권한여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.excn_authrt_yn IS '실행권한여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.menu_role_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.menu_role_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.menu_role_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.menu_role_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_addt_data_dtl
테이블 설명 : 방법론추가자료상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_addt_data_dtl (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	addt_data_dgr numeric(3) NOT NULL, 
	data_dmnd_type_cd varchar(7) NULL, 
	data_dmnd_dt timestamp(6) NULL, 
	data_dmnd_rsn varchar(1000) NULL, 
	data_dmnd_flmno varchar(20) NULL, 
	data_dmnd_inst_cd varchar(10) NOT NULL, 
	data_rqstr_id varchar(20) NOT NULL, 
	data_reg_type_cd varchar(7) NULL, 
	data_reg_cn varchar(2000) NULL, 
	data_reg_dt timestamp(6) NULL, 
	data_rgtr_id varchar(20) NULL, 
	prpsd_flmno varchar(20) NULL, 
	biz_plnd_flmno varchar(20) NULL, 
	etc_data_flmno varchar(20) NULL, 
	data_idnty_type_cd varchar(7) NULL, 
	data_idnty_cn varchar(2000) NULL, 
	data_idnty_dt timestamp(6) NULL, 
	data_idnty_inst_cd varchar(10) NULL, 
	data_idfr_id varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	data_dmnd_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT mhdlg_addt_data_dtl_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr, addt_data_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_addt_data_dtl IS '방법론추가자료상세';



COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.addt_data_dgr IS '추가자료차수';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_type_cd IS '자료요청유형코드';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_dt IS '자료요청일시';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_rsn IS '자료요청사유';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_flmno IS '자료요청파일번호';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_inst_cd IS '자료요청기관코드';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_rqstr_id IS '자료요청자ID';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_reg_type_cd IS '자료등록유형코드';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_reg_cn IS '자료등록내용';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_reg_dt IS '자료등록일시';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_rgtr_id IS '자료등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.prpsd_flmno IS '제안서파일번호';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.biz_plnd_flmno IS '사업계획서파일번호';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_idnty_type_cd IS '자료확인유형코드';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_idnty_cn IS '자료확인내용';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_idnty_dt IS '자료확인일시';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_idnty_inst_cd IS '자료확인기관코드';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_idfr_id IS '자료확인자ID';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.mhdlg_addt_data_dtl.data_dmnd_yn IS '자료요청여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_agr_dtl
테이블 설명 : 방법론협정상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_agr_dtl (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	agr_mgno varchar(10) NOT NULL, 
	agr_dgr numeric(3) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_agr_dtl_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr, agr_mgno, agr_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_agr_dtl IS '방법론협정상세';



COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.agr_mgno IS '협정관리번호';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.agr_dgr IS '협정차수';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_agr_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_bfdlbr_dtl
테이블 설명 : 방법론사전심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_bfdlbr_dtl (
	bfdlbr_sn numeric(10) NOT NULL, 
	bfdlbr_dgr numeric(3) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	objc_aply_opnn varchar(1000) NULL, 
	objc_aply_flmno varchar(20) NULL, 
	objc_aply_ymd varchar(8) NULL, 
	bfdlbr_type_cd varchar(7) NULL, 
	bfdlbr_dt timestamp(6) NULL, 
	bfdlbr_inst_cd varchar(10) NOT NULL, 
	bfdlbr_pic_id varchar(20) NOT NULL, 
	bfdlbr_opnn varchar(1000) NULL, 
	bfdlbr_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_bfdlbr_dtl_pkey PRIMARY KEY (bfdlbr_sn, bfdlbr_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_bfdlbr_dtl IS '방법론사전심의상세';



COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_sn IS '사전심의일련번호';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_dgr IS '사전심의차수';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.objc_aply_opnn IS '이의신청의견';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.objc_aply_flmno IS '이의신청파일번호';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.objc_aply_ymd IS '이의신청일자';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_type_cd IS '사전심의유형코드';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_dt IS '사전심의일시';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_inst_cd IS '사전심의기관코드';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_pic_id IS '사전심의담당자ID';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_opnn IS '사전심의의견';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.bfdlbr_flmno IS '사전심의파일번호';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_bfdlbr_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_bsc
테이블 설명 : 방법론기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_bsc (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_group_mgno varchar(10) NOT NULL, 
	rvsn_dgr numeric(3) NULL, 
	reg_rsn_cd varchar(7) NULL, 
	mhdlg_unqno varchar(50) NULL, 
	type_cd varchar(7) NULL, 
	data_dgr numeric(3) NOT NULL, 
	prcs_dgr numeric(3) NOT NULL, 
	vld_mhdlg_dgr numeric(3) NULL, 
	addt_data_dmnd_psblty_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_bsc_pkey PRIMARY KEY (mhdlg_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_bsc IS '방법론기본';



COMMENT ON COLUMN irsuser.mhdlg_bsc.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_bsc.mhdlg_group_mgno IS '방법론그룹관리번호';
COMMENT ON COLUMN irsuser.mhdlg_bsc.rvsn_dgr IS '개정차수';
COMMENT ON COLUMN irsuser.mhdlg_bsc.reg_rsn_cd IS '등록사유코드';
COMMENT ON COLUMN irsuser.mhdlg_bsc.mhdlg_unqno IS '방법론고유번호';
COMMENT ON COLUMN irsuser.mhdlg_bsc.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.mhdlg_bsc.data_dgr IS '자료차수';
COMMENT ON COLUMN irsuser.mhdlg_bsc.prcs_dgr IS '처리차수';
COMMENT ON COLUMN irsuser.mhdlg_bsc.vld_mhdlg_dgr IS '유효방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_bsc.addt_data_dmnd_psblty_yn IS '추가자료요청가능여부';
COMMENT ON COLUMN irsuser.mhdlg_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_chg_hstry_bsc
테이블 설명 : 방법론변경이력기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_chg_hstry_bsc (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(10) NOT NULL, 
	chg_mgno varchar(10) NOT NULL, 
	prcs_user_id varchar(20) NOT NULL, 
	chg_dt timestamp(6) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	chg_prcs_type_cd varchar(7) NOT NULL, 
	CONSTRAINT mhdlg_chg_hstry_bsc_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr, chg_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_chg_hstry_bsc IS '방법론변경이력기본';



COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.chg_mgno IS '변경관리번호';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.prcs_user_id IS '처리사용자ID';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.chg_dt IS '변경일시';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_bsc.chg_prcs_type_cd IS '변경처리유형코드';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_chg_hstry_dtl
테이블 설명 : 방법론변경이력상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_chg_hstry_dtl (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(10) NOT NULL, 
	chg_artcl_sn numeric(10) NOT NULL, 
	chg_artcl_nm varchar(300) NULL, 
	bchg_cn varchar(2000) NULL, 
	achg_cn varchar(2000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	chg_mgno varchar(10) NOT NULL, 
	file_type_cl_cd varchar(7) NULL, 
	file_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT mhdlg_chg_hstry_dtl_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr, chg_mgno, chg_artcl_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_chg_hstry_dtl IS '방법론변경이력상세';



COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.chg_artcl_sn IS '변경항목일련번호';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.chg_artcl_nm IS '변경항목명';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.bchg_cn IS '변경전내용';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.achg_cn IS '변경후내용';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.chg_mgno IS '변경관리번호';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.file_type_cl_cd IS '파일유형구분코드';
COMMENT ON COLUMN irsuser.mhdlg_chg_hstry_dtl.file_yn IS '파일여부';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_dlbr_dtl
테이블 설명 : 방법론심의상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_dlbr_dtl (
	dlbr_sn numeric(10) NOT NULL, 
	dlbr_dgr numeric(3) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	objc_aply_opnn varchar(1000) NULL, 
	objc_aply_flmno varchar(20) NULL, 
	objc_aply_ymd varchar(8) NULL, 
	dlbr_type_cd varchar(7) NULL, 
	dlbr_dt timestamp(6) NULL, 
	dlbr_rslt_inpt_inst_cd varchar(10) NOT NULL, 
	dlbr_rslt_rgtr_id varchar(20) NOT NULL, 
	dlbr_opnn varchar(1000) NULL, 
	dlbr_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_dlbr_dtl_pkey PRIMARY KEY (dlbr_sn, dlbr_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_dlbr_dtl IS '방법론심의상세';



COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_sn IS '심의일련번호';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_dgr IS '심의차수';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.objc_aply_opnn IS '이의신청의견';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.objc_aply_flmno IS '이의신청파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.objc_aply_ymd IS '이의신청일자';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_type_cd IS '심의유형코드';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_dt IS '심의일시';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_rslt_inpt_inst_cd IS '심의결과입력기관코드';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_rslt_rgtr_id IS '심의결과등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_opnn IS '심의의견';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.dlbr_flmno IS '심의파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_dlbr_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_dtl
테이블 설명 : 방법론상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_dtl (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	dgr_reg_rsn_cd varchar(7) NULL, 
	vld_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	vld_ymd varchar(8) NULL, 
	inst_mgno varchar(10) NOT NULL, 
	user_id varchar(20) NOT NULL, 
	aply_cl_cd varchar(7) NULL, 
	agr_claus_cd varchar(7) NULL, 
	mhdlg_orgt_nm varchar(300) NULL, 
	mhdlg_krn_nm varchar(300) NULL, 
	vld_bgng_ymd varchar(8) NULL, 
	prpsd_flmno varchar(20) NULL, 
	biz_plnd_flmno varchar(20) NULL, 
	etc_data_flmno varchar(20) NULL, 
	expln_flmno varchar(20) NULL, 
	cmptnc_inst_no varchar(10) NULL, 
	aply_type_cd varchar(7) NULL, 
	aply_ymd varchar(8) NULL, 
	prcs_type_cd varchar(7) NULL, 
	prcs_ymd varchar(8) NULL, 
	addt_data_type_cd varchar(7) NULL, 
	addt_data_prcs_ymd varchar(8) NULL, 
	rvw_sn numeric(10) NULL, 
	bfdlbr_sn numeric(10) NULL, 
	dlbr_sn numeric(10) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	redd_plus_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	type_cd varchar(7) NULL, 
	data_dgr numeric(3) NULL, 
	CONSTRAINT mhdlg_dtl_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_dtl IS '방법론상세';



COMMENT ON COLUMN irsuser.mhdlg_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_dtl.dgr_reg_rsn_cd IS '차수등록사유코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.vld_yn IS '유효여부';
COMMENT ON COLUMN irsuser.mhdlg_dtl.vld_ymd IS '유효일자';
COMMENT ON COLUMN irsuser.mhdlg_dtl.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.mhdlg_dtl.aply_cl_cd IS '신청구분코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.agr_claus_cd IS '협정조항코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.mhdlg_orgt_nm IS '방법론원문명';
COMMENT ON COLUMN irsuser.mhdlg_dtl.mhdlg_krn_nm IS '방법론국문명';
COMMENT ON COLUMN irsuser.mhdlg_dtl.vld_bgng_ymd IS '유효시작일자';
COMMENT ON COLUMN irsuser.mhdlg_dtl.prpsd_flmno IS '제안서파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.biz_plnd_flmno IS '사업계획서파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.etc_data_flmno IS '기타자료파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.expln_flmno IS '설명파일번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.cmptnc_inst_no IS '관할기관번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.aply_type_cd IS '신청유형코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.aply_ymd IS '신청일자';
COMMENT ON COLUMN irsuser.mhdlg_dtl.prcs_type_cd IS '처리유형코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.prcs_ymd IS '처리일자';
COMMENT ON COLUMN irsuser.mhdlg_dtl.addt_data_type_cd IS '추가자료유형코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.addt_data_prcs_ymd IS '추가자료처리일자';
COMMENT ON COLUMN irsuser.mhdlg_dtl.rvw_sn IS '검토일련번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.bfdlbr_sn IS '사전심의일련번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.dlbr_sn IS '심의일련번호';
COMMENT ON COLUMN irsuser.mhdlg_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.mhdlg_dtl.redd_plus_yn IS 'REDD플러스유무';
COMMENT ON COLUMN irsuser.mhdlg_dtl.type_cd IS '유형코드';
COMMENT ON COLUMN irsuser.mhdlg_dtl.data_dgr IS '자료차수';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_fld_dtl
테이블 설명 : 방법론분야상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_fld_dtl (
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	biz_fld_cd_mgno varchar(10) NOT NULL, 
	biz_fld_dtl_cd_mgno varchar(10) NOT NULL, 
	mhdlg_unqno varchar(50) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	redd_plus_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	CONSTRAINT mhdlg_fld_dtl_pkey PRIMARY KEY (mhdlg_mgno, mhdlg_dgr, biz_fld_cd_mgno, biz_fld_dtl_cd_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_fld_dtl IS '방법론분야상세';



COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.biz_fld_cd_mgno IS '사업분야코드관리번호';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.biz_fld_dtl_cd_mgno IS '사업분야상세코드관리번호';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.mhdlg_unqno IS '방법론고유번호';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.mhdlg_fld_dtl.redd_plus_yn IS 'REDD플러스유무';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_hstry
테이블 설명 : 방법론이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('mhdlg_hstry_seq'::regclass), 
	mhdlg_mgno varchar(10) NOT NULL, 
	mhdlg_dgr numeric(3) NOT NULL, 
	hstry_type_cd varchar(7) NULL, 
	hstry_rslt_cd varchar(7) NULL, 
	hstry_ymd varchar(8) NULL, 
	hstry_dtl_rsn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_hstry IS '방법론이력';



COMMENT ON COLUMN irsuser.mhdlg_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.mhdlg_hstry.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_hstry.mhdlg_dgr IS '방법론차수';
COMMENT ON COLUMN irsuser.mhdlg_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.mhdlg_hstry.hstry_rslt_cd IS '이력결과코드';
COMMENT ON COLUMN irsuser.mhdlg_hstry.hstry_ymd IS '이력일자';
COMMENT ON COLUMN irsuser.mhdlg_hstry.hstry_dtl_rsn IS '이력상세사유';
COMMENT ON COLUMN irsuser.mhdlg_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.mhdlg_rvw_dtl
테이블 설명 : 방법론검토상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.mhdlg_rvw_dtl (
	rvw_sn numeric(10) NOT NULL, 
	mhdlg_mgno varchar(10) NOT NULL, 
	rvw_dgr numeric(3) NOT NULL, 
	rvw_inst_cd varchar(10) NOT NULL, 
	rvwr_id varchar(20) NOT NULL, 
	rvw_type_cd varchar(7) NULL, 
	rvw_dt timestamp(6) NULL, 
	rvw_opnn varchar(1000) NULL, 
	rvw_flmno varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT mhdlg_rvw_dtl_pkey PRIMARY KEY (rvw_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.mhdlg_rvw_dtl IS '방법론검토상세';



COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_sn IS '검토일련번호';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.mhdlg_mgno IS '방법론관리번호';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_dgr IS '검토차수';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_inst_cd IS '검토기관코드';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvwr_id IS '검토자ID';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_type_cd IS '검토유형코드';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_dt IS '검토일시';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_opnn IS '검토의견';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rvw_flmno IS '검토파일번호';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.mhdlg_rvw_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.msg_bsc
테이블 설명 : 메시지기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.msg_bsc (
	msg_mgno varchar(10) NOT NULL, 
	msg_nm varchar(300) NOT NULL, 
	msg_cn varchar(2000) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'Y'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT msg_bsc_pkey PRIMARY KEY (msg_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.msg_bsc IS '메시지기본';



COMMENT ON COLUMN irsuser.msg_bsc.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.msg_bsc.msg_nm IS '메시지명';
COMMENT ON COLUMN irsuser.msg_bsc.msg_cn IS '메시지내용';
COMMENT ON COLUMN irsuser.msg_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.msg_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.msg_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.msg_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.msg_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.msg_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.msg_bsc_hstry
테이블 설명 : 메시지기본이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.msg_bsc_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('msg_bsc_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NOT NULL, 
	msg_mgno varchar(10) NOT NULL, 
	msg_nm varchar(300) NULL, 
	msg_cn varchar(2000) NULL, 
	use_yn bpchar(1) NOT NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT msg_bsc_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.msg_bsc_hstry IS '메시지기본이력';



COMMENT ON COLUMN irsuser.msg_bsc_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.msg_nm IS '메시지명';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.msg_cn IS '메시지내용';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.msg_bsc_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.msg_dtl
테이블 설명 : 메시지상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.msg_dtl (
	msg_mgno varchar(10) NOT NULL, 
	sn numeric(10) NOT NULL, 
	inpt_type_cd varchar(7) NULL, 
	inpt_cn varchar(2000) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT msg_dtl_pkey PRIMARY KEY (msg_mgno, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.msg_dtl IS '메시지상세';



COMMENT ON COLUMN irsuser.msg_dtl.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.msg_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.msg_dtl.inpt_type_cd IS '입력유형코드';
COMMENT ON COLUMN irsuser.msg_dtl.inpt_cn IS '입력내용';
COMMENT ON COLUMN irsuser.msg_dtl.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.msg_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.msg_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.msg_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.msg_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.msg_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.msg_dtl_hstry
테이블 설명 : 메시지상세이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.msg_dtl_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('msg_dtl_hstry_seq'::regclass), 
	hstry_type_cd varchar(7) NULL, 
	hstry_dt timestamp(6) NOT NULL, 
	msg_mgno varchar(10) NOT NULL, 
	sn numeric(10) NOT NULL, 
	inpt_type_cd varchar(7) NULL, 
	inpt_cn varchar(2000) NOT NULL, 
	use_yn bpchar(1) NOT NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT msg_dtl_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.msg_dtl_hstry IS '메시지상세이력';



COMMENT ON COLUMN irsuser.msg_dtl_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.hstry_type_cd IS '이력유형코드';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.hstry_dt IS '이력일시';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.sn IS '일련번호';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.inpt_type_cd IS '입력유형코드';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.inpt_cn IS '입력내용';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.msg_dtl_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.msg_trsm_dsctn
테이블 설명 : 메시지전송내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.msg_trsm_dsctn (
	trsm_sn numeric(10) NOT NULL DEFAULT nextval('trsm_sn_seq'::regclass), 
	trsm_type_cd varchar(7) NOT NULL, 
	task_trgt_cd varchar(7) NOT NULL, 
	biz_mgno varchar(10) NOT NULL, 
	biz_dgr numeric(3) NOT NULL, 
	biz_orgt_nm varchar(300) NULL, 
	biz_krn_nm varchar(300) NULL, 
	inst_mgno varchar(10) NOT NULL, 
	flnm varchar(50) NOT NULL, 
	hdpon_ddd varchar(4) NOT NULL, 
	hdpon_tlpno varchar(4) NOT NULL, 
	hdpon_phino varchar(4) NOT NULL, 
	msg_cn varchar(2000) NOT NULL, 
	end_ymd varchar(8) NULL, 
	user_id varchar(20) NULL, 
	trsm_rslt_cd varchar(7) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp NULL, 
	msg_mgno varchar(10) NULL, 
	trsm_cmptn_dt timestamp NULL, 
	CONSTRAINT msg_trsm_dsctn_pkey PRIMARY KEY (trsm_sn)
);
COMMENT ON TABLE irsuser.msg_trsm_dsctn IS '메시지전송내역';



COMMENT ON COLUMN irsuser.msg_trsm_dsctn.trsm_sn IS '전송일련번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.trsm_type_cd IS '전송유형코드';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.task_trgt_cd IS '업무대상코드';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.biz_mgno IS '사업관리번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.biz_dgr IS '사업차수';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.biz_orgt_nm IS '사업원문명';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.biz_krn_nm IS '사업국문명';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.flnm IS '성명';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.hdpon_ddd IS '핸드폰지역번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.hdpon_tlpno IS '핸드폰국번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.hdpon_phino IS '핸드폰개별번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.msg_cn IS '메시지내용';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.end_ymd IS '종료일자';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.trsm_rslt_cd IS '전송결과코드';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.msg_trsm_dsctn.trsm_cmptn_dt IS '전송완료일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.role_bsc
테이블 설명 : 역할기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.role_bsc (
	role_id_mgno varchar(10) NOT NULL, 
	role_nm varchar(300) NULL, 
	role_expln varchar(1000) NULL, 
	user_cl_cd varchar(7) NULL, 
	sys_cl_cd varchar(7) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT role_bsc_pkey PRIMARY KEY (role_id_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.role_bsc IS '역할기본';



COMMENT ON COLUMN irsuser.role_bsc.role_id_mgno IS '역할ID관리번호';
COMMENT ON COLUMN irsuser.role_bsc.role_nm IS '역할명';
COMMENT ON COLUMN irsuser.role_bsc.role_expln IS '역할설명';
COMMENT ON COLUMN irsuser.role_bsc.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.role_bsc.sys_cl_cd IS '시스템구분코드';
COMMENT ON COLUMN irsuser.role_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.role_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.role_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.role_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.role_bsc.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.sys_tr_err_log
테이블 설명 : 시스템 트리거 에러 로그 [비정형메타적용]
	-  postgresql trigger exception log

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.sys_tr_err_log (
	sn numeric(10) NOT NULL, 
	sql_state text NOT NULL, 
	message text NULL, 
	detail text NULL, 
	hint text NULL, 
	context text NULL, 
	reg_nm varchar(100) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	CONSTRAINT sys_tr_err_hstry_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.sys_tr_err_log IS '시스템 트리거 에러 로그 [비정형메타적용]
	-  postgresql trigger exception log';



COMMENT ON COLUMN irsuser.sys_tr_err_log.sn IS '일련번호';
COMMENT ON COLUMN irsuser.sys_tr_err_log.sql_state IS 'RETURNED_SQLSTATE';
COMMENT ON COLUMN irsuser.sys_tr_err_log.message IS 'MESSAGE_TEXT';
COMMENT ON COLUMN irsuser.sys_tr_err_log.detail IS 'PG_EXCEPTION_DETAIL';
COMMENT ON COLUMN irsuser.sys_tr_err_log.hint IS 'PG_EXCEPTION_HINT';
COMMENT ON COLUMN irsuser.sys_tr_err_log.context IS 'PG_EXCEPTION_CONTEXT';
COMMENT ON COLUMN irsuser.sys_tr_err_log.reg_nm IS 'postgresql object명';
COMMENT ON COLUMN irsuser.sys_tr_err_log.reg_dt IS '등록일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.trsm_excn_dtl
테이블 설명 : 전송실행상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.trsm_excn_dtl (
	trsm_mgno varchar(10) NOT NULL, 
	sn numeric(10) NOT NULL, 
	trsm_mm bpchar(2) NULL, 
	trsm_dd bpchar(2) NULL, 
	trsm_hh numeric(2) NULL, 
	trsm_mi numeric(3) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	trsm_ddtm bpchar(2) NULL, 
	trsm_dwk bpchar(2) NULL, 
	CONSTRAINT trsm_excn_dtl_pkey PRIMARY KEY (trsm_mgno, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.trsm_excn_dtl IS '전송실행상세';



COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_mgno IS '전송관리번호';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_mm IS '전송월';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_dd IS '전송일';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_hh IS '전송시';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_mi IS '전송분';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_ddtm IS '전송주간';
COMMENT ON COLUMN irsuser.trsm_excn_dtl.trsm_dwk IS '전송요일';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.trsm_mng_bsc
테이블 설명 : 전송관리기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.trsm_mng_bsc (
	trsm_mgno varchar(10) NOT NULL, 
	trsm_mng_nm varchar(300) NULL, 
	trsm_sys_cd varchar(7) NULL, 
	trsm_type_cd varchar(7) NULL, 
	task_trgt_cd varchar(7) NULL, 
	msg_mgno varchar(10) NULL, 
	msg_cn varchar(2000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	use_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	trsm_mm varchar(5) NULL, 
	trsm_dd varchar(5) NULL, 
	trsm_hh varchar(5) NULL, 
	trsm_mi varchar(5) NULL, 
	nti_tmng varchar(10) NULL, 
	CONSTRAINT trsm_mng_bsc_pkey PRIMARY KEY (trsm_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.trsm_mng_bsc IS '전송관리기본';



COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_mgno IS '전송관리번호';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_mng_nm IS '전송관리명';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_sys_cd IS '전송시스템코드';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_type_cd IS '전송유형코드';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.task_trgt_cd IS '업무대상코드';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.msg_mgno IS '메시지관리번호';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.msg_cn IS '메시지내용';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.use_yn IS '사용여부';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_mm IS '전송월';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_dd IS '전송일';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_hh IS '전송시';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.trsm_mi IS '전송분';
COMMENT ON COLUMN irsuser.trsm_mng_bsc.nti_tmng IS '알림시기';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.trsm_mng_dtl
테이블 설명 : 전송관리상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.trsm_mng_dtl (
	trsm_mgno varchar(10) NOT NULL, 
	sn numeric(10) NOT NULL, 
	user_id varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT trsm_mng_dtl_pkey PRIMARY KEY (trsm_mgno, sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.trsm_mng_dtl IS '전송관리상세';



COMMENT ON COLUMN irsuser.trsm_mng_dtl.trsm_mgno IS '전송관리번호';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.sn IS '일련번호';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.trsm_mng_dtl.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_acnt_clsg_aply_bsc
테이블 설명 : 사용자계정폐쇄신청기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_acnt_clsg_aply_bsc (
	clsg_mgno varchar(10) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	clsg_aply_cl_cd varchar(7) NULL, 
	clsg_cl_cd varchar(7) NULL, 
	clsg_aply_rsn varchar(1000) NULL, 
	clsg_aply_dt timestamp(6) NULL, 
	aplcnt_id varchar(20) NULL, 
	prcs_stts_cd varchar(7) NULL, 
	prcs_dt timestamp(6) NULL, 
	prcs_inst_mgno varchar(10) NULL, 
	prcs_user_id varchar(20) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	prcs_cn varchar(2000) NULL, 
	CONSTRAINT user_acnt_clsg_aply_bsc_pkey PRIMARY KEY (clsg_mgno)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_acnt_clsg_aply_bsc IS '사용자계정폐쇄신청기본';



COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.clsg_mgno IS '폐쇄관리번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.clsg_aply_cl_cd IS '폐쇄신청구분코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.clsg_cl_cd IS '폐쇄구분코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.clsg_aply_rsn IS '폐쇄신청사유';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.clsg_aply_dt IS '폐쇄신청일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.aplcnt_id IS '신청자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.prcs_stts_cd IS '처리상태코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.prcs_dt IS '처리일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.prcs_inst_mgno IS '처리기관관리번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.prcs_user_id IS '처리사용자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_bsc.prcs_cn IS '처리내용';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_acnt_clsg_aply_hstry
테이블 설명 : 사용자계정폐쇄신청이력

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_acnt_clsg_aply_hstry (
	hstry_sn numeric(10) NOT NULL DEFAULT nextval('user_acnt_clsg_aply_hstry_seq'::regclass), 
	inst_mgno varchar(10) NOT NULL, 
	acnt_stts_cl_cd varchar(7) NOT NULL, 
	clsg_aply_dt timestamp(6) NULL, 
	prcs_stts_cd varchar(7) NOT NULL, 
	clsg_aply_rsn varchar(1000) NULL, 
	rvw_dt timestamp(6) NULL, 
	rvw_opnn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_acnt_clsg_aply_hstry_pkey PRIMARY KEY (hstry_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_acnt_clsg_aply_hstry IS '사용자계정폐쇄신청이력';



COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.hstry_sn IS '이력일련번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.acnt_stts_cl_cd IS '계정상태구분코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.clsg_aply_dt IS '폐쇄신청일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.prcs_stts_cd IS '처리상태코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.clsg_aply_rsn IS '폐쇄신청사유';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.rvw_dt IS '검토일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.rvw_opnn IS '검토의견';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_hstry.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_acnt_clsg_aply_rvw
테이블 설명 : 사용자계정폐쇄신청검토

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_acnt_clsg_aply_rvw (
	clsg_mgno varchar(10) NOT NULL, 
	dgr numeric(3) NOT NULL, 
	rvw_type_cd varchar(7) NULL, 
	rvw_dt timestamp(6) NULL, 
	rvw_opnn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_acnt_clsg_aply_rvw_pkey PRIMARY KEY (clsg_mgno, dgr)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_acnt_clsg_aply_rvw IS '사용자계정폐쇄신청검토';



COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.clsg_mgno IS '폐쇄관리번호';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.dgr IS '차수';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.rvw_type_cd IS '검토유형코드';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.rvw_dt IS '검토일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.rvw_opnn IS '검토의견';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_acnt_clsg_aply_rvw.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_actv_dsctn
테이블 설명 : 사용자활동내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_actv_dsctn (
	sn numeric(10) NOT NULL, 
	sys_cl_cd varchar(7) NULL, 
	user_id varchar(20) NULL, 
	menu_mgno varchar(10) NOT NULL, 
	inq_cl_cd varchar(7) NULL, 
	inq_cn varchar(2000) NULL, 
	user_cl_cd varchar(7) NULL, 
	ip_addr varchar(100) NULL, 
	acs_ymd varchar(8) NOT NULL, 
	acs_hr varchar(6) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_actv_dsctn_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_actv_dsctn IS '사용자활동내역';



COMMENT ON COLUMN irsuser.user_actv_dsctn.sn IS '일련번호';
COMMENT ON COLUMN irsuser.user_actv_dsctn.sys_cl_cd IS '시스템구분코드';
COMMENT ON COLUMN irsuser.user_actv_dsctn.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_actv_dsctn.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.user_actv_dsctn.inq_cl_cd IS '조회구분코드';
COMMENT ON COLUMN irsuser.user_actv_dsctn.inq_cn IS '조회내용';
COMMENT ON COLUMN irsuser.user_actv_dsctn.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.user_actv_dsctn.ip_addr IS 'IP주소';
COMMENT ON COLUMN irsuser.user_actv_dsctn.acs_ymd IS '접근일자';
COMMENT ON COLUMN irsuser.user_actv_dsctn.acs_hr IS '접근시간';
COMMENT ON COLUMN irsuser.user_actv_dsctn.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_actv_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_actv_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_actv_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_actv_dsctn.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_bsc
테이블 설명 : 사용자기본

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_bsc (
	user_id varchar(20) NOT NULL, 
	inst_mgno varchar(10) NOT NULL, 
	user_cl_cd varchar(7) NOT NULL, 
	lgn_id varchar(20) NOT NULL, 
	pswd varchar(100) NOT NULL, 
	flnm varchar(50) NULL, 
	dept_nm varchar(300) NULL, 
	jbps_nm varchar(300) NULL, 
	tel_ddd varchar(4) NULL, 
	tel_tlpno varchar(4) NULL, 
	tel_phino varchar(4) NULL, 
	hdpon_ddd varchar(4) NULL, 
	hdpon_tlpno varchar(4) NULL, 
	hdpon_phino varchar(4) NULL, 
	eml_id varchar(20) NULL, 
	eml_addr varchar(100) NULL, 
	acnt_stts_cl_cd varchar(7) NULL, 
	mhdlg_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	irb_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rtadti_scsn_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	irp_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	bfr_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	dlng_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	swov_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rtrcn_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	dsps_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	info_prvt_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	up_inst_mgno varchar(10) NULL, 
	fax_ddd varchar(4) NULL, 
	fax_tlpno varchar(4) NULL, 
	fax_phino varchar(4) NULL, 
	sms_nti_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	aprv_ymd varchar(8) NULL, 
	pswd_chg_dt timestamp(6) NULL, 
	lgn_fail_cnt numeric(10) NULL, 
	user_cert_yn bpchar(1) NULL DEFAULT 'N'::bpchar, 
	lgn_scs_cnt numeric(10) NULL, 
	last_cntn_dt timestamp(6) NULL, 
	last_lgn_fail_dt timestamp(6) NULL, 
	CONSTRAINT user_bsc_pkey PRIMARY KEY (user_id)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_bsc IS '사용자기본';



COMMENT ON COLUMN irsuser.user_bsc.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_bsc.inst_mgno IS '기관관리번호';
COMMENT ON COLUMN irsuser.user_bsc.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.user_bsc.lgn_id IS '로그인ID';
COMMENT ON COLUMN irsuser.user_bsc.pswd IS '비밀번호';
COMMENT ON COLUMN irsuser.user_bsc.flnm IS '성명';
COMMENT ON COLUMN irsuser.user_bsc.dept_nm IS '부서명';
COMMENT ON COLUMN irsuser.user_bsc.jbps_nm IS '직위명';
COMMENT ON COLUMN irsuser.user_bsc.tel_ddd IS '전화지역번호';
COMMENT ON COLUMN irsuser.user_bsc.tel_tlpno IS '전화국번호';
COMMENT ON COLUMN irsuser.user_bsc.tel_phino IS '전화개별번호';
COMMENT ON COLUMN irsuser.user_bsc.hdpon_ddd IS '핸드폰지역번호';
COMMENT ON COLUMN irsuser.user_bsc.hdpon_tlpno IS '핸드폰국번호';
COMMENT ON COLUMN irsuser.user_bsc.hdpon_phino IS '핸드폰개별번호';
COMMENT ON COLUMN irsuser.user_bsc.eml_id IS '이메일ID';
COMMENT ON COLUMN irsuser.user_bsc.eml_addr IS '이메일주소';
COMMENT ON COLUMN irsuser.user_bsc.acnt_stts_cl_cd IS '계정상태구분코드';
COMMENT ON COLUMN irsuser.user_bsc.mhdlg_nti_yn IS '방법론알림여부';
COMMENT ON COLUMN irsuser.user_bsc.irb_nti_yn IS '국제감축사업알림여부';
COMMENT ON COLUMN irsuser.user_bsc.rtadti_scsn_nti_yn IS '권리의무승계알림여부';
COMMENT ON COLUMN irsuser.user_bsc.irp_nti_yn IS '국제감축실적알림여부';
COMMENT ON COLUMN irsuser.user_bsc.bfr_nti_yn IS '이전알림여부';
COMMENT ON COLUMN irsuser.user_bsc.dlng_nti_yn IS '거래알림여부';
COMMENT ON COLUMN irsuser.user_bsc.swov_nti_yn IS '전환알림여부';
COMMENT ON COLUMN irsuser.user_bsc.rtrcn_nti_yn IS '취소알림여부';
COMMENT ON COLUMN irsuser.user_bsc.dsps_nti_yn IS '처분알림여부';
COMMENT ON COLUMN irsuser.user_bsc.info_prvt_nti_yn IS '정보비공개알림여부';
COMMENT ON COLUMN irsuser.user_bsc.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_bsc.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_bsc.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_bsc.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_bsc.mdfcn_dt IS '수정일시';
COMMENT ON COLUMN irsuser.user_bsc.up_inst_mgno IS '상위기관관리번호';
COMMENT ON COLUMN irsuser.user_bsc.fax_ddd IS '팩스지역번호';
COMMENT ON COLUMN irsuser.user_bsc.fax_tlpno IS '팩스국번호';
COMMENT ON COLUMN irsuser.user_bsc.fax_phino IS '팩스개별번호';
COMMENT ON COLUMN irsuser.user_bsc.sms_nti_yn IS 'SMS알림여부';
COMMENT ON COLUMN irsuser.user_bsc.aprv_ymd IS '승인일자';
COMMENT ON COLUMN irsuser.user_bsc.pswd_chg_dt IS '비밀번호변경일시';
COMMENT ON COLUMN irsuser.user_bsc.lgn_fail_cnt IS '로그인실패수';
COMMENT ON COLUMN irsuser.user_bsc.user_cert_yn IS '사용자인증여부';
COMMENT ON COLUMN irsuser.user_bsc.lgn_scs_cnt IS '로그인성공수';
COMMENT ON COLUMN irsuser.user_bsc.last_cntn_dt IS '최종접속일시';
COMMENT ON COLUMN irsuser.user_bsc.last_lgn_fail_dt IS '최종로그인실패일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_chg_aply_dtl
테이블 설명 : 사용자변경신청상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_chg_aply_dtl (
	aply_mgno varchar(10) NOT NULL, 
	aply_dtl_sn numeric(10) NOT NULL, 
	user_id varchar(20) NOT NULL, 
	user_cl_cd varchar(7) NULL, 
	hdpon_ddd varchar(4) NULL, 
	hdpon_tlpno varchar(4) NULL, 
	hdpon_phino varchar(4) NULL, 
	acnt_stts_cl_cd varchar(7) NULL, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	CONSTRAINT user_chg_aply_dtl_pkey PRIMARY KEY (aply_mgno, aply_dtl_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_chg_aply_dtl IS '사용자변경신청상세';



COMMENT ON COLUMN irsuser.user_chg_aply_dtl.aply_mgno IS '신청관리번호';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.aply_dtl_sn IS '신청상세일련번호';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.hdpon_ddd IS '핸드폰지역번호';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.hdpon_tlpno IS '핸드폰국번호';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.hdpon_phino IS '핸드폰개별번호';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.acnt_stts_cl_cd IS '계정상태구분코드';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_chg_aply_dtl.reg_dt IS '등록일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_cntn_dsctn
테이블 설명 : 사용자접속내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_cntn_dsctn (
	sn numeric(10) NOT NULL, 
	user_id varchar(20) NULL, 
	user_cl_cd varchar(7) NULL, 
	lgn_id varchar(20) NULL, 
	lgn_scs_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	ip_addr varchar(100) NULL, 
	brws_nm varchar(300) NULL, 
	os_nm varchar(300) NULL, 
	cntn_ym bpchar(6) NOT NULL, 
	cntn_ymd varchar(8) NOT NULL, 
	cntn_hr varchar(6) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_cntn_dsctn_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_cntn_dsctn IS '사용자접속내역';



COMMENT ON COLUMN irsuser.user_cntn_dsctn.sn IS '일련번호';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.lgn_id IS '로그인ID';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.lgn_scs_yn IS '로그인성공여부';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.ip_addr IS 'IP주소';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.brws_nm IS '브라우저명';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.os_nm IS '운영체계명';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.cntn_ym IS '접속년월';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.cntn_ymd IS '접속일자';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.cntn_hr IS '접속시간';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_cntn_dsctn.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_prvc_dsctn
테이블 설명 : 사용자개인정보내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_prvc_dsctn (
	sn numeric(10) NOT NULL, 
	sys_cl_cd varchar(7) NULL, 
	user_id varchar(20) NULL, 
	menu_mgno varchar(10) NOT NULL, 
	inq_cl_cd varchar(7) NULL, 
	inq_cn varchar(500) NULL, 
	user_cl_cd varchar(7) NULL, 
	ip_addr varchar(100) NULL, 
	prvc_inq_acs_ymd varchar(8) NOT NULL, 
	prvc_inq_acs_hr varchar(6) NOT NULL, 
	trpr_id varchar(20) NULL, 
	trpr_cl_cd varchar(7) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_prvc_dsctn_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_prvc_dsctn IS '사용자개인정보내역';



COMMENT ON COLUMN irsuser.user_prvc_dsctn.sn IS '일련번호';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.sys_cl_cd IS '시스템구분코드';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.inq_cl_cd IS '조회구분코드';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.inq_cn IS '조회내용';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.user_cl_cd IS '사용자구분코드';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.ip_addr IS 'IP주소';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.prvc_inq_acs_ymd IS '개인정보조회접근일자';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.prvc_inq_acs_hr IS '개인정보조회접근시간';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.trpr_id IS '대상자ID';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.trpr_cl_cd IS '대상자구분코드';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_prvc_dsctn.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_prvc_prsl_dsctn
테이블 설명 : 사용자개인정보열람내역

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_prvc_prsl_dsctn (
	sn numeric(10) NOT NULL, 
	sys_cl_cd varchar(7) NULL, 
	user_id varchar(20) NULL, 
	menu_mgno varchar(10) NOT NULL, 
	prsl_ymd varchar(8) NOT NULL, 
	prsl_hr varchar(6) NOT NULL, 
	ip_addr varchar(100) NULL, 
	prsl_rsn varchar(1000) NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_prvc_prsl_dsctn_pkey PRIMARY KEY (sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_prvc_prsl_dsctn IS '사용자개인정보열람내역';



COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.sn IS '일련번호';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.sys_cl_cd IS '시스템구분코드';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.menu_mgno IS '메뉴관리번호';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.prsl_ymd IS '열람일자';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.prsl_hr IS '열람시간';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.ip_addr IS 'IP주소';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.prsl_rsn IS '열람사유';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_prvc_prsl_dsctn.mdfcn_dt IS '수정일시';

/* --------------------------------------------------------------------------------

테이블 이름 : irsuser.user_role_dtl
테이블 설명 : 사용자역할상세

-------------------------------------------------------------------------------- */

CREATE TABLE irsuser.user_role_dtl (
	user_id varchar(20) NOT NULL, 
	role_id_mgno varchar(10) NOT NULL, 
	user_role_sn numeric(10) NOT NULL, 
	del_yn bpchar(1) NOT NULL DEFAULT 'N'::bpchar, 
	rgtr_id varchar(20) NOT NULL, 
	reg_dt timestamp(6) NOT NULL, 
	mdfr_id varchar(20) NULL, 
	mdfcn_dt timestamp(6) NULL, 
	CONSTRAINT user_role_dtl_pkey PRIMARY KEY (user_id, role_id_mgno, user_role_sn)
)
TABLESPACE ts_girirs
;
COMMENT ON TABLE irsuser.user_role_dtl IS '사용자역할상세';



COMMENT ON COLUMN irsuser.user_role_dtl.user_id IS '사용자ID';
COMMENT ON COLUMN irsuser.user_role_dtl.role_id_mgno IS '역할ID관리번호';
COMMENT ON COLUMN irsuser.user_role_dtl.user_role_sn IS '사용자역할일련번호';
COMMENT ON COLUMN irsuser.user_role_dtl.del_yn IS '삭제여부';
COMMENT ON COLUMN irsuser.user_role_dtl.rgtr_id IS '등록자ID';
COMMENT ON COLUMN irsuser.user_role_dtl.reg_dt IS '등록일시';
COMMENT ON COLUMN irsuser.user_role_dtl.mdfr_id IS '수정자ID';
COMMENT ON COLUMN irsuser.user_role_dtl.mdfcn_dt IS '수정일시';


