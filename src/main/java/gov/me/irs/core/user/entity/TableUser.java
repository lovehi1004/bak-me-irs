package gov.me.irs.core.user.entity;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import gov.me.irs.core.user.enumeration.UserClCdEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 시스템 공통 사용자 인증 Entity
 * 	- Spring Security
 * 
 * @author Justin
 *
 */
@Builder
@Data
@Entity
@Table(name = "IRS_USER.JWT_USER")
@NoArgsConstructor
@AllArgsConstructor
public class TableUser implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3055432343506191045L;

    @Id
    @Column(name = "LGN_ID", nullable = false, length = 20, unique = true)
    private String lgnId;
    
    @Column(name = "USER_ID", nullable = false, length = 20)
    private String userId;
    
    @Column(name = "ENCPT_PSWD", nullable = false, length = 100)
    private String encptPswd;

    @Column(name = "USER_CL_CD", nullable = false, length = 5)
    private UserClCdEnum userClCd;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "IRS_USER.JWT_USER_ROLE", joinColumns = @JoinColumn(name = "LGN_ID"))
    @Column(name = "JWT_ROLE_NM")
    @Builder.Default
    private List<String> roles = new ArrayList<>();
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return encptPswd;
    }
    
    @Override
    public String getUsername() {
        return lgnId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}