/* inst_bsc */
INSERT INTO inst_bsc (inst_mgno,inst_clsf_cd,inst_dtl_clsf_cd,gov_inst_yn,bzent_nm,bzent_cl_cd,brno,crno,rprsv_nm,rdnm_cd,addr,dtl_addr,corp_tel_ddd,corp_tel_tlpno,corp_tel_phino,acnt_stts_cl_cd,brdoc_flmno,del_yn,rgtr_id,reg_dt,mdfr_id,mdfcn_dt,up_inst_mgno,aprv_ymd,psn_acnt_unqno,psn_acnt_stts_cl_cd) VALUES ('GV00000001','ICC0001','IDC0001','Y','온실가스종합정보센터','BCC0002','1000100001','7779999988888','관리자','07013','서울특별시 동작구 동작대로17길 28 (사당동)','도로명상세주소 1234','02','1234','5678','ASC0002',NULL,'N','SYSTEM',CURRENT_TIMESTAMP,'SYSTEM',CURRENT_TIMESTAMP,'GV00000001','20231113','31-GO2024-0000000001','PAC0001');
/* user_bsc */
INSERT INTO user_bsc (user_id,inst_mgno,user_cl_cd,lgn_id,pswd,flnm,dept_nm,jbps_nm,tel_ddd,tel_tlpno,tel_phino,hdpon_ddd,hdpon_tlpno,hdpon_phino,eml_id,eml_addr,acnt_stts_cl_cd,mhdlg_nti_yn,irb_nti_yn,rtadti_scsn_nti_yn,irp_nti_yn,bfr_nti_yn,dlng_nti_yn,swov_nti_yn,rtrcn_nti_yn,dsps_nti_yn,info_prvt_nti_yn,del_yn,rgtr_id,reg_dt,mdfr_id,mdfcn_dt,up_inst_mgno,fax_ddd,fax_tlpno,fax_phino,sms_nti_yn,aprv_ymd,pswd_chg_dt,lgn_fail_cnt,user_cert_yn,lgn_scs_cnt,last_cntn_dt,last_lgn_fail_dt) VALUES ('UR00000001','GV00000001','UCC0001','girirsadmin','A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=','전체관리자','부서일','직위일','02','1111','2222','010','1111','2222','irsadmin','naver.com','ASC0002','N','N','N','N','N','N','N','N','N','N','N','SYSTEM',CURRENT_TIMESTAMP,'SYSTEM',CURRENT_TIMESTAMP,'GV00000001',NULL,NULL,NULL,'N','20240101',NULL,0,'N',0,NULL,NULL);
/* user_role_dtl */
INSERT INTO user_role_dtl (user_id,role_id_mgno,user_role_sn,del_yn,rgtr_id,reg_dt,mdfr_id,mdfcn_dt) VALUES ('UR00000001','RL00000001',1,'N','SYSTEM',CURRENT_TIMESTAMP,'SYSTEM',CURRENT_TIMESTAMP);
/* jwt_user_bsc */
INSERT INTO jwt_user_bsc (lgn_id,user_id,encpt_pswd,user_cl_cd) VALUES ('girirsadmin','UR00000001','A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=','UCC0001');
/* jwt_user_role_bsc */
INSERT INTO jwt_user_role_bsc (lgn_id,jwt_role_nm) VALUES ('girirsadmin','ROLE_SUPER');

