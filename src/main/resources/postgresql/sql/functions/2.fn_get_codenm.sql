CREATE OR REPLACE FUNCTION irsuser.fn_get_codenm(in_grpcd CHARACTER VARYING, in_cd CHARACTER VARYING)
RETURNS TEXT AS $$
/******************************************************************************
    프로그램명 : irsuser.fn_get_codenm 
      수행목적 : 그룹코드와 코드에 해당하는 코드명을 반환한다.
      수행결과 : 코드명 반환
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.14   홍길동  최초 작성
 ------------------------------------------------------------------------------
	Ex.> 예시     
	1. 코드명 조회
		▶ SELECT SELECT irsuser.fn_get_codenm('USER_CL_CD', 'UCC0001')
 ******************************************************************************/
DECLARE
	v_codenm VARCHAR;
BEGIN
	SELECT A.CD_KORN_NM INTO v_codenm
	  FROM IRSUSER.COM_CD_DTL A 
	 WHERE A.GROUP_CD_MGNO  = in_grpcd::VARCHAR
	   AND A.CD_MGNO = in_cd::VARCHAR
	   AND A.DEL_YN = 'N'
	;
	
	return v_codenm;
   exception when others then 
	return null;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION irsuser.fn_get_codenm(VARCHAR, VARCHAR) IS '코드명 조회';
