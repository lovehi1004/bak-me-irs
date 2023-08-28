package gov.me.irs.core.token.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.me.irs.core.token.entity.TableRefreshToken;

/**
 * 시스템 공통 JWT 인증 JpaRepository
 * 
 * @author Justin
 *
 */
public interface RefreshTokenRepository extends JpaRepository<TableRefreshToken, Long> {
	
	/* log-on filter checking START */
	TableRefreshToken findByRefreshTknCn(String refreshToken);
	boolean existsByRefreshTknCn(String refreshToken);
	/* log-on filter checking END */
	
	/* login - log-on session START */
	TableRefreshToken findByLgnId(String lgnId);
	boolean existsByLgnId(String lgnId);
	void deleteByLgnId(String lgnId);
	/* login - log-on session END */
	
	/* logout START */
	boolean existsByRefreshTknCnAndUserClntCn(String refreshToken, String userClntCn);
	long deleteByRefreshTknCnAndUserClntCn(String refreshToken, String userClntCn);
	/* logout END */
	
	/* log-on session extension - update START */
	boolean existsByLgnIdAndUserClntCn(String lgnId, String userClntCn);
	void deleteByLgnIdAndUserClntCn(String lgnId, String userClntCn);
	/* log-on session extension - update END */
}