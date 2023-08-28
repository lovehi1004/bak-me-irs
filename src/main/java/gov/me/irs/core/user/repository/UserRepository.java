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
	TableUser findByLgnId(String lgnId);
}