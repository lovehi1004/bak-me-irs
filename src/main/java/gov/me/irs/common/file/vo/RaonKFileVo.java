package gov.me.irs.common.file.vo;

import java.util.List;

import org.apache.commons.lang3.ObjectUtils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 파일정보 Vo
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RaonKFileVo {
	private String fileGroupMgno;						//파일그룹일련번호
	private String fileMgno;							//파일상세일련번호  
	private String orgnlFileNm;						//원본파일명    
	private String filePath;						//파일 경로    
	
	private String fileNm;							//파일 명     
	private long fileSz;							//파일 크기    
	private String fileExtnNm;						//파일확장자명   
	private String dwnldCnt;						//다운로드 수   
	private String delYn;							//삭제 여부    
	private String rgtrId;							//등록 ID    
	private String regDt;							//등록 일시    
	private String mdfrId;							//변경 ID    
	private String mdfcnDt;							//변경 일시
	@Builder.Default
	private String gridCmmCheck = "N";					//넥사크로N 그리드 체크박스전용
	
	private String menuMgno;        					//메뉴ID    
	private String fileTypeClCd;					//파일 유형
	
	private List<String> fileMgnoArray;			//Multi 업로드 대상 파일상세정보
	private List<String> newFileYnArray;			//Multi 업로드 파일상태 - 신규 등록건 여부
	
	private boolean error;							//업로드 에러여부
	
	private String base64;							//이미지파일 Base64 Data
	
	private String cloneFileNm;						//차수 생성 전용 파일정보 복제하기 - 복제된 파일명
	@Builder.Default
	private int sortNo = 1;							//파일순서 - [공통] 라온K - 지정 파일목록 조회 에서만 사용    

	/**
	 * 파일 전체 경로 - 확장자 포함된 파일명
	 * @return
	 */
	public String getFileFullPath() {
		String fileFullPath = filePath+"/"+fileNm;
		if(!ObjectUtils.isEmpty(fileExtnNm)) {
			fileFullPath+="."+fileExtnNm;
		}
		return fileFullPath;
	}
	
	/**
	 * 확장자 포함된 파일명 - 저장된 파일명
	 * @return
	 */
	public String getFileNmWithExt() {
		String fileNmExt = fileNm;
		if(!ObjectUtils.isEmpty(fileExtnNm)) {
			fileNmExt+="."+fileExtnNm;
		}
		return fileNmExt;
		
	}
	
	/**
	 * 확장자 포함된 파일명 - 원본 파일명
	 * @return
	 */
	public String getOrgnlFileNmWithExt() {
		String fileNmExt = orgnlFileNm;
		if(!ObjectUtils.isEmpty(fileExtnNm)) {
			fileNmExt+="."+fileExtnNm;
		}
		return fileNmExt;
		
	}
	
	/**
	 * 확장자 포함된 파일명 - 저장된 파일명
	 * @return
	 */
	public String getCloneFileNmWithExt() {
		String fileNmExt = cloneFileNm;
		if(!ObjectUtils.isEmpty(fileExtnNm)) {
			fileNmExt+="."+fileExtnNm;
		}
		return fileNmExt;
		
	}
	
}
