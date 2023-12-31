package gov.me.irs.common.board.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommonBoardMapper {

	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 총건수 조회
	 * @param dsSrh
	 * @return
	 */
	int selectBoardListCnt(Map<String,Object> dsSrh);
	
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 목록조회
	 * @param dsSrh
	 * @return
	 */
	List<Map<String, Object>> selectBoardList(Map<String,Object> dsSrh);
	
	/**
	 * 공지사항(로그인화면) 조회
	 * @return
	 */
	List<Map<String, Object>> selectBoardListLogin();
	/**
	 * 게시판(공지사항, 자료실, 법령과 지침) 메인화면 조회
	 * @param dsSrh
	 * @return
	 */
	List<Map<String, Object>> selectBoardListMain(Map<String, Object>dsSrh);
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 상세조회
	 * @param dsBbsInfo
	 * @return
	 */
	Map<String, Object> selectBoardDtl(Map<String,Object> dsBbsInfo);
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 등록
	 * @param dsBbsInfo
	 * @return
	 */
	int insertBoardDtl(Map<String,Object> dsBbsInfo);
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 수정
	 * @param dsBbsInfo
	 * @return
	 */
	int updateBoardDtl(Map<String,Object> dsBbsInfo);
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 조회수 증가
	 * @param dsBbsInfo
	 * @return
	 */
	int updateInqCnt(Map<String,Object> dsBbsInfo);
}
