package gov.me.irs.common.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gov.me.irs.common.board.mapper.CommonBoardMapper;
import gov.me.irs.core.config.util.UserSession;
import gov.me.irs.core.constants.RoleConst;
import gov.me.irs.core.raonk.service.RaonKService;
import gov.me.irs.core.user.entity.TableUser;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommonBoardService {

	private final CommonBoardMapper commonBoardMapper;
	private final RaonKService raonKService;
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침)목록 총건수 조회
	 * 
	 * @param dsSrh
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int selectBoardListCnt(Map<String, Object> dsSrh) {
		return commonBoardMapper.selectBoardListCnt(dsSrh);
		
	}
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 조회
	 * 
	 * @param dsSrh
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBoardList(Map<String, Object> dsSrh) {
		return commonBoardMapper.selectBoardList(dsSrh);
	}
	
	/**
	 * 공지사항(메인화면) 조회
	 * 
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBoardListLogin(Map<String, Object>dsSrh) {
		return commonBoardMapper.selectBoardListLogin(dsSrh);
	}
	
	/**
	 * 게시판(공지사항, 자료실, 법령과 지침)(메인화면) 조회
	 * 
	 * @param dsSrh
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public List<Map<String, Object>> selectBoardListMain(Map<String, Object>dsSrh) {
		return commonBoardMapper.selectBoardListMain(dsSrh);
	}
	
	/**
	 * 
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBoardDtl(Map<String, Object> dsBbsInfo) {
		//조회수 증가
		commonBoardMapper.updateInqCnt(dsBbsInfo);
		
		return commonBoardMapper.selectBoardDtl(dsBbsInfo);
	}
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int insertBoardDtl(Map<String, Object> dsBbsInfo, List<Map<String, Object>> dsBbsFile) throws Exception{
		int result = 0;
		if(!ObjectUtils.isEmpty(dsBbsInfo.get("flmno"))) {
			Map<String, Object> fileMap = new HashMap<String, Object>();
			fileMap.put("fileGroupMgno", dsBbsInfo.get("flmno").toString());
				
			raonKService.saveFile(fileMap, dsBbsFile);
		}
		result = commonBoardMapper.insertBoardDtl(dsBbsInfo); 
		return result;
	}
	
	/**
	 * 게시판(공지사항, 자료실, FAQ, 법령과 지침) 수정
	 * 
	 * @param requestMap
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public int updateBoardDtl(Map<String, Object> dsBbsInfo, List<Map<String, Object>> dsBbsFile) throws Exception{
		int result = 0;
		if(!ObjectUtils.isEmpty(dsBbsInfo.get("flmno"))) {
			Map<String, Object> fileMap = new HashMap<String, Object>();
			fileMap.put("fileGroupMgno", dsBbsInfo.get("flmno").toString());
				
			raonKService.saveFile(fileMap, dsBbsFile);
		}
		result = commonBoardMapper.updateBoardDtl(dsBbsInfo);
		return result;
	}
	
	/**
	 * 위젯 -> 협정 조회
	 * 
	 * @param dsSrh
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectAgrCnt() {
		return commonBoardMapper.selectAgrCnt();
	}
	
	/**
	 * 메인화면 위젯 -> 방법론 
	 * 
	 * @param dsLgoinUsr
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectUsrInfo() throws Exception {
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		
		String sUserId = tableUser.getUserId();
		Map<String,Object> ds	 = new HashMap<String, Object>();
		ds.put("sUserId", sUserId);
		Map<String,Object> dsLoginUsrInfo = commonBoardMapper.selectUsrInfo(ds);
		if(UserSession.isSuperUser() || UserSession.getRoleKey().equals(RoleConst.ROLE_DIRECTOR_KEY) || UserSession.getRoleKey().equals(RoleConst.ROLE_OUTSOURCING_KEY) ) {
			return commonBoardMapper.selectMainMhdlgCnt();
		}else {
			return commonBoardMapper.selectMhdlgCnt(dsLoginUsrInfo);
		}
		
	}
	
	/**
	 * 메인화면 위젯 -> 로그인 전 방법론
	 * 
	 * @param dsLgoinUsr
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectMainMhdlgCnt() {
		return commonBoardMapper.selectMainMhdlgCnt();
	}
	
	/**
	 * 메인화면 위젯 -> 사업
	 * 
	 * @param dsLgoinUsr
	 * @return
	 * @throws Exception 
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectBizCnt() throws Exception {
		TableUser tableUser = UserSession.getSession();			/* 세션정보조회 */
		
		
		String sUserId = tableUser.getUserId();
		Map<String,Object> ds	 = new HashMap<String, Object>();
		ds.put("sUserId", sUserId);
		Map<String,Object> dsLoginUsrInfo = commonBoardMapper.selectUsrInfo(ds);
		//전체관리자, 관장기관, 위탁기관
		if(UserSession.isSuperUser() || UserSession.getRoleKey().equals(RoleConst.ROLE_DIRECTOR_KEY) || UserSession.getRoleKey().equals(RoleConst.ROLE_OUTSOURCING_KEY) ) { 
			return commonBoardMapper.selectMainBizCnt();
		}else {
			return commonBoardMapper.selectBizCnt(dsLoginUsrInfo);
		}
	}
	
	/**
	 * 메인화면 위젯 -> 로그인 전 사업
	 * 
	 * @param dsLgoinUsr
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> selectMainBizCnt() {
		return commonBoardMapper.selectMainBizCnt();
	}
}
