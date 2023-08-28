package gov.me.irs.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.me.irs.core.user.entity.TableUser;

/**
 * FirstRepository 예제 JpaRepository
 * 
 * @author Justin
 *
 */
public interface FirstRepository extends JpaRepository<TableUser, Long> {
	TableUser findByLgnId(String lgnId);
}