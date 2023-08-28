package gov.me.irs.core.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import gov.me.irs.core.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 시스템 공통 로그인 인증 서비스
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
@Service
@Slf4j
public class CoreUserDetailService implements UserDetailsService {
	
	private final UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		log.debug("[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■][{}]", username);
				
		return Optional.ofNullable(userRepository.findByLgnId(username))
				.orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
	}
}