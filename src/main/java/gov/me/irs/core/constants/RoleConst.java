package gov.me.irs.core.constants;

/**
 * 시스템 공통 역할정보
 * 
 * @author Justin
 *
 */
public final class RoleConst {
	
	private final static String ROLE_PREFIX = "ROLE_";
	
	/* 역할 : 슈퍼관리자 */
	public final static String SUPER = "SUPER";
	public final static String ROLE_SUPER = ROLE_PREFIX + SUPER;
	public final static String CODE_SUPER = "UCC0001";
	
	/* 역할 : 시스템관리자 */
	public final static String SYSTEM = "SYSTEM";
	public final static String ROLE_SYSTEM = ROLE_PREFIX + SYSTEM;
	public final static String CODE_SYSTEM = "UCC0002";
	
	/* 역할 : 관장기관 */
	public final static String DIRECTOR = "DIRECTOR";
	public final static String ROLE_DIRECTOR = ROLE_PREFIX + DIRECTOR;
	public final static String CODE_DIRECTOR = "UCC0003";
	
	/* 역할 : 위탁기관 */
	public final static String OUTSOURCING = "OUTSOURCING";
	public final static String ROLE_OUTSOURCING = ROLE_PREFIX + OUTSOURCING;
	public final static String CODE_OUTSOURCING = "UCC0004";
	
	/* 역할 : 사업수행자 */
	public final static String BIZ = "BIZ";
	public final static String ROLE_BIZ = ROLE_PREFIX + BIZ;
	public final static String CODE_BIZ = "UCC0005";
	
	/* 역할 : 기타부처 */
	public final static String ORGAN = "ORGAN";
	public final static String ROLE_ORGAN = ROLE_PREFIX + ORGAN;
	public final static String CODE_ORGAN = "UCC0006";
	
	/* 역할 : 외교부 */
	public final static String MOFA = "MOFA";
	public final static String ROLE_MOFA = ROLE_PREFIX + MOFA;
	public final static String CODE_MOFA = "UCC0007";

}
