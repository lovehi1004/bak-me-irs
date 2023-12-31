CREATE SEQUENCE irsuser.bbs_sn_seq
/******************************************************************************
    프로그램명 : irsuser.bbs_sn_seq 
      수행목적 : 시쿼스 조회 후 반환한다.
      수행결과 : 시쿼스 반환
 ------------------------------------------------------------------------------
     수정일자     수정자    수정내용
 ------------------------------------------------------------------------------
     2023.12.18   홍길동  최초 작성
 ------------------------------------------------------------------------------
	Ex.> 예시     
	1. 시퀀스 조회
		▶ SELECT NEXTVAL('IRSUSER.BBS_SN_SEQ')
 ******************************************************************************/
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
	
COMMENT ON SEQUENCE irsuser.bbs_sn_seq IS '공통게시판기본 게시판일련번호 시퀀스';