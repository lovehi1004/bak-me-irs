package gov.me.irs.core.constants;

/**
 * 시스템 공통 역할정보
 * 
 * @author Justin
 *
 */
public final class RoleConst {
	
	private final static String ROLE_PREFIX = "ROLE_";
	
	/* 역할 : GIR - 전체관리자 */
	public final static String SUPER = "SUPER";
	public final static String ROLE_SUPER = ROLE_PREFIX + SUPER;
	public final static String CODE_SUPER = "UCC0001";
	
	/* 역할 : 민간사업자 */
	public final static String BIZ = "BIZ";
	public final static String ROLE_BIZ = ROLE_PREFIX + BIZ;
	public final static String CODE_BIZ = "UCC0002";
	
	/* 역할 : 관장기관 */
	public final static String SUPERVISORY = "SUPERVISORY";
	public final static String ROLE_SUPERVISORY = ROLE_PREFIX + SUPERVISORY;
	public final static String CODE_SUPERVISORY = "UCC0003";
	
	/* 역할 : 위탁기관 */
	public final static String DELEGATED = "DELEGATED";
	public final static String ROLE_DELEGATED = ROLE_PREFIX + DELEGATED;
	public final static String CODE_DELEGATED = "UCC0004";
	
	/* 역할 : 환경부 */
	public final static String ME = "ME";
	public final static String ROLE_ME = ROLE_PREFIX + ME;
	public final static String CODE_ME = "UCC0005";
	
	/* 역할 : 국제감축협의체 */
	public final static String ORGAN = "ORGAN";
	public final static String ROLE_ORGAN = ROLE_PREFIX + ORGAN;
	public final static String CODE_ORGAN = "UCC0006";
	
	/* 역할 : 외교부 */
	public final static String MOFA = "MOFA";
	public final static String ROLE_MOFA = ROLE_PREFIX + MOFA;
	public final static String CODE_MOFA = "UCC0007";

}
