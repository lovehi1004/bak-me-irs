package gov.me.irs.core.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.me.irs.core.user.entity.TableUser;

/**
 * 시스템 공통 로그인 인증 JpaRepository
 * 
 * @author Justin
 *
 */
public interface UserRepository extends JpaRepository<TableUser, Long> {
	
	/**
	 * JWT사용자기본 조회
	 * 
	 * @param lgnId
	 * @return
	 */
	TableUser findByLgnId(String lgnId);
	
	/**
	 * JWT사용자기본 삭제
	 * 
	 * @param lgnId
	 */
	long deleteByLgnId(String lgnId);
	
	/**
	 * JWT사용자기본 조회 - 사용자ID
	 * 
	 * @param lgnId
	 * @return
	 */
	TableUser findByUserId(String userId);
}