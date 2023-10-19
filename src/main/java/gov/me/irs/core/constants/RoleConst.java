package gov.me.irs.core.constants;

/**
 * 시스템 공통 역할정보
 * 
 * @author Justin
 *
 */
public final class RoleConst {
	
	private final static String ROLE_PREFIX = "ROLE_";
	
	/* 역할 : 전체관리자 */
	public final static String SUPER = "SUPER";
	public final static String ROLE_SUPER = ROLE_PREFIX + SUPER;
	public final static String CODE_SUPER = "UCC0001";
	public final static String ROLE_SUPER_KEY = "RL00000001";

	/* 역할 : 관장기관 */
	public final static String DIRECTOR = "DIRECTOR";
	public final static String ROLE_DIRECTOR = ROLE_PREFIX + DIRECTOR;
	public final static String CODE_DIRECTOR = "UCC0002";
	public final static String ROLE_DIRECTOR_KEY = "RL00000002";
	
	/* 역할 : 위탁기관 */
	public final static String OUTSOURCING = "OUTSOURCING";
	public final static String ROLE_OUTSOURCING = ROLE_PREFIX + OUTSOURCING;
	public final static String CODE_OUTSOURCING = "UCC0003";
	public final static String ROLE_OUTSOURCING_KEY = "RL00000003";
	
	/* 역할 : 사업수행자_계정관리인 */
	public final static String BIZADMIN = "BIZADMIN";
	public final static String ROLE_BIZADMIN = ROLE_PREFIX + BIZADMIN;
	public final static String CODE_BIZADMIN = "UCC0004";
	public final static String ROLE_BIZADMIN_KEY = "RL00000004";
	
	/* 역할 : 사업수행자_계정대표자 */
	public final static String BIZREPRESENT = "BIZREPRESENT";
	public final static String ROLE_BIZREPRESENT = ROLE_PREFIX + BIZREPRESENT;
	public final static String CODE_BIZREPRESENT = "UCC0005";
	public final static String ROLE_BIZREPRESENT_KEY = "RL00000005";
	
	/* 역할 : 외교부 */
	public final static String MOFA = "MOFA";
	public final static String ROLE_MOFA = ROLE_PREFIX + MOFA;
	public final static String CODE_MOFA = "UCC0006";
	public final static String ROLE_MOFA_KEY = "RL00000006";
	
	/* 역할 : 기타부처 */
	public final static String ORGAN = "ORGAN";
	public final static String ROLE_ORGAN = ROLE_PREFIX + ORGAN;
	public final static String CODE_ORGAN = "UCC0007";
	public final static String ROLE_ORGAN_KEY = "RL00000007";
	
	/* 역할 : 비승인사용자 */
	public final static String UNAPPROVED = "UNAPPROVED";
	public final static String ROLE_UNAPPROVED = ROLE_PREFIX + UNAPPROVED;
	public final static String CODE_UNAPPROVED = "UCC0008";
	public final static String ROLE_UNAPPROVED_KEY = "RL00000008";
	
	/* 역할 : 관장기관 사업수행자 */
	public final static String DIRECTORBIZ = "DIRECTORBIZ";
	public final static String ROLE_DIRECTORBIZ = ROLE_PREFIX + DIRECTORBIZ;
	public final static String CODE_DIRECTORBIZ = "UCC0002";
	public final static String ROLE_DIRECTORBIZ_KEY = "RL00000009";
	
	/* 역할 : 위탁기관 사업수행자 */
	public final static String OUTSOURCINGBIZ = "OUTSOURCINGBIZ";
	public final static String ROLE_OUTSOURCINGBIZ = ROLE_PREFIX + OUTSOURCINGBIZ;
	public final static String CODE_OUTSOURCINGBIZ = "UCC0003";
	public final static String ROLE_OUTSOURCINGBIZ_KEY = "RL00000010";
	
}
