package gov.me.irs.sol.iostudio.constants;

import java.util.Arrays;
import java.util.List;

/**
 * 검색엔진 공통 상수정보
 * 
 * @author 홍길동
 *
 */
public final class IostudioConst {
	
	public final static class REQUEST {
		
		public final static class INDICES {
			
			/* 통합검색 INDICES 정보 */
			public final static List<String> INDICES_ALL = Arrays.asList("agr_stipl_bsc", "mhdlg_bsc", "irb_bsc");
			
			/* 협정·약정 INDICES 정보 */
			public final static List<String> INDICES_AGR_STIPL = Arrays.asList("agr_stipl_bsc");
			
			/* 방법론 INDICES 정보 */
			public final static List<String> INDICES_MHDLG = Arrays.asList("mhdlg_bsc");
			
			/* 국제감축사업 INDICES 정보 */
			public final static List<String> INDICES_IRB = Arrays.asList("irb_bsc");
		}
		
		public final static class FIELDS {
			/* 통합검색 FIELDS 정보 */
			public final static List<String> FIELDS_ALL = Arrays.asList(
					   "cncld_orgt_nm"
					,  "cncld_krn_nm"
					,  "cnsltngrp_nm"
					,  "cnsltn_cn"
					,  "gmbr_orgt_nm_list"
					,  "gmbr_krn_nm_list"
					,  "mhdlg_orgt_nm"
					,  "mhdlg_krn_nm"
					,  "cncld_orgt_nm_list"
					,  "cncld_krn_nm_list"
					,  "ntn_eng_nm_list"
					,  "ntn_korn_nm_list"
					,  "biz_fld_eng_nm_list"
					,  "biz_fld_korn_nm_list"
					,  "biz_dtl_fld_eng_nm_list"
					,  "biz_dtl_fld_korn_nm_list"
					,  "biz_orgt_nm"
					,  "biz_krn_nm"
					,  "mhdlg_orgt_nm_list"
					,  "mhdlg_krn_nm_list"
					,  "orgnl_file_nm"
					,  "_file.nameOrg"
					,  "_file.content");
			
			/* 협정·약정 FIELDS 정보 */
			public final static List<String> FIELDS_AGR_STIPL = Arrays.asList(
					   "cncld_orgt_nm"
					,  "cncld_krn_nm"
					,  "cnsltngrp_nm"
					,  "cnsltn_cn"
					,  "ntn_eng_nm_list"
					,  "ntn_korn_nm_list"
					,  "gmbr_orgt_nm_list"
					,  "gmbr_krn_nm_list"
					,  "orgnl_file_nm"
					,  "_file.nameOrg"
					,  "_file.content");
			/* 방법론 FIELDS 정보 */
			public final static List<String> FIELDS_MHDLG = Arrays.asList(
					   "mhdlg_orgt_nm"
					,  "mhdlg_krn_nm"
					,  "cncld_orgt_nm_list"
					,  "cncld_krn_nm_list"
					,  "ntn_eng_nm_list"
					,  "ntn_korn_nm_list"
					,  "biz_fld_eng_nm_list"
					,  "biz_fld_korn_nm_list"
					,  "biz_dtl_fld_eng_nm_list"
					,  "biz_dtl_fld_korn_nm_list"
					,  "orgnl_file_nm"
					,  "_file.nameOrg"
					,  "_file.content");
			
			/* 국제감축사업 FIELDS 정보 */
			public final static List<String> FIELDS_IRB  = Arrays.asList(
					   "biz_orgt_nm"
					,  "biz_krn_nm"
					,  "biz_fld_eng_nm_list"
					,  "biz_fld_korn_nm_list"
					,  "biz_dtl_fld_eng_nm_list"
					,  "biz_dtl_fld_korn_nm_list"
					,  "cncld_orgt_nm"
					,  "cncld_krn_nm"
					,  "mhdlg_orgt_nm_list"
					,  "mhdlg_krn_nm_list"
					,  "orgnl_file_nm"
					,  "_file.nameOrg"
					,  "_file.content");
		}
	}
}
