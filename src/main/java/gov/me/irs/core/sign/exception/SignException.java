package gov.me.irs.core.sign.exception;

import gov.me.irs.core.enumeration.JwtAuthEnum;

import lombok.Getter;
import lombok.experimental.StandardException;

/**
 * 시스템 공통 인증 예외처리
 * 
 * @author Justin
 *
 */
@StandardException
public final class SignException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 869869053034474369L;
	
	@Getter
	int code;
	
	public SignException(int code, Throwable cause) {
        super(JwtAuthEnum.of(code).getMessage(), cause);
        this.code = code;
    }
	
	public SignException(int code) {
		super(JwtAuthEnum.of(code).getMessage());
		this.code = code;
	}




}
