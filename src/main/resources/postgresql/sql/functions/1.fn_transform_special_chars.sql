CREATE OR REPLACE FUNCTION irsuser.fn_transform_special_chars(in_text TEXT)
RETURNS TEXT AS $$
/******************************************************************************
    프로그램명 : irsuser.fn_transform_special_chars 
      수행목적 : 입력받은 문자열에서 와일드카드(*)와 언더스코어(_) 특수문자를 특수문자로 인식하도록 (\*) 와 (\_)로 변환 후 반환한다.
      수행결과 : 변환 특수문자 반환
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.14   홍길동  최초 작성
 ------------------------------------------------------------------------------
	Ex.> 예시     
	1. 특수문자 변환 -> [%]는 [\%]로 [_]는 [\_]로 변환됨
		▶ SELECT irsuser.fn_transform_special_chars('%%%1234%%__테스트___')
	2. NULL값 변환 -> '' 반환
		▶ SELECT '[' || irsuser.fn_transform_special_chars(null) || ']'
	3. '' 변환 -> '' 반환
		▶ SELECT '[' || irsuser.fn_transform_special_chars('') || ']'
 ******************************************************************************/
DECLARE
    v_text TEXT;
BEGIN
	IF in_text IS NULL THEN
	  return '';
	ELSE
	    v_text := REGEXP_REPLACE(REGEXP_REPLACE(in_text, '_', '\_', 'g'), '%', '\%', 'g');
	    RETURN v_text;
	END IF;
   exception when others then 
	return '';
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION irsuser.fn_transform_special_chars(TEXT) IS '와일드카드와 언더스코어 변환 특수문자 반환';
