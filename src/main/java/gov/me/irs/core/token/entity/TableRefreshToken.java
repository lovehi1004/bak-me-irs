package gov.me.irs.core.token.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 시스템 공통 JWT 인증 Entity
 * 
 * @author Justin
 *
 */
@Builder
@Entity
@Getter
@Table(name = "IRS_USER.JWT_USER_REFRESH_TKN")
@NoArgsConstructor
@AllArgsConstructor
public class TableRefreshToken {
	
    @Id
    @Column(name = "LGN_ID", nullable = false, length = 20, unique = true)
    private String lgnId;

    @Column(name = "REFRESH_TKN_CN", nullable = false, length = 500)
    private String refreshTknCn;

    @Column(name ="USER_CLNT_CN", nullable = false, length = 500)
    private String userClntCn;
	
    /**
     * 실제 업무관련 권한, 복수의 권한중에 실제 선택된 권한, 이 권한정보로 권한을 부여한다.
     */
    @Column(name = "JWT_ROLE_NM", nullable = false, length = 50)
    private String role;
    
}