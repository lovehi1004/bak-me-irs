package gov.me.irs.core.token.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Comment;

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
@org.hibernate.annotations.Table(comment = "JWT사용자리프레시토큰", appliesTo = "IRS_USER.JWT_USER_REFRESH_TKN")
@NoArgsConstructor
@AllArgsConstructor
public class TableRefreshToken {
	
    @Id
    @Comment("로그인ID")
    @Column(name = "LGN_ID", nullable = false, length = 20, unique = true)
    private String lgnId;
    
    @Comment("리프레시토큰내용")
    @Column(name = "REFRESH_TKN_CN", nullable = false, length = 500)
    private String refreshTknCn;
    
    @Comment("사용자클라이언트내용")
    @Column(name ="USER_CLNT_CN", nullable = false, length = 500)
    private String userClntCn;
	
}