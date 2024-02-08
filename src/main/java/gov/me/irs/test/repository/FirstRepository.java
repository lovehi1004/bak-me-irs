package gov.me.irs.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.me.irs.core.user.entity.TableUser;

/**
 * FirstRepository 예제
 * 
 * @author Justin
 *
 */
public interface FirstRepository extends JpaRepository<TableUser, Long> {
	
	/**
	 * 테스트 조회
	 * 
	 * @param lgnId
	 * @return
	 */
	TableUser findByLgnId(String lgnId);
}