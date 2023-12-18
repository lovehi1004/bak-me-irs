package gov.me.irs.common.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import gov.me.irs.common.file.vo.FileVo;
import gov.me.irs.core.config.property.CommonProperties;
import lombok.RequiredArgsConstructor;

/**
 * FileUtil
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
public class FileUtil {
	
	public final static String MULTI = "multi";
	
	private final CommonProperties commonProperties;
	
	/**
	 * 파일명 추출하기
	 * @param originalFilename 원본파일명
	 * @return
	 */
	public String getFilename(String originalFilename) {
		int lastIndex = originalFilename.lastIndexOf(".");
		String newFilename = lastIndex >= 0 ? originalFilename.substring(0, lastIndex) : originalFilename;
		
		return newFilename;
	}
	
	/**
	 * 파일확장자 추출하기 - 구분자 [.] 포함
	 * @param originalFilename 원본파일명
	 * @return
	 */
	public String getFilenameExtension(String originalFilename) {
		return this.getFilenameExtension(originalFilename, true);
	}
	
	/**
	 * 파일확장자 추출하기
	 * @param originalFilename 원본파일명
	 * @param b 구분자 [.] 포함 여부
	 * @return
	 */
	public String getFilenameExtension(String originalFilename, boolean b) {
		String extension = null;
		
		int lastIndex = originalFilename.lastIndexOf(".");
		if(b) {				//구분자 [.] 포함
			extension = lastIndex >= 0 ? originalFilename.substring(lastIndex) : "";
		}else {			//구분자 [.] 미포함
			extension = lastIndex >= 0 ? originalFilename.substring(lastIndex+1) : "";
		}
		
		return extension;
	}
	
	/**
	 * 파일업로드용 파일명 생성하기 - UUID
	 * @param originalFilename 원본파일명
	 * @return
	 */
	public String getTempFilename() {
		return UUID.randomUUID().toString().replace("-", "");
	}
	
	/**
	 * 파일업로드 FileVo 정보 생성하기 - 임시파일 업로드
	 * @param multipartFile
	 * @param repository
	 * @return
	 * @throws Exception 
	 */
	public FileVo getFileVo(MultipartFile multipartFile) throws Exception {
		String originalFilename = multipartFile.getOriginalFilename();
		
		String filename = this.getFilename(originalFilename);						//원본파일명
		String tempFilename = this.getTempFilename();								//임시파일명
		String extension = this.getFilenameExtension(originalFilename, false);
		String filePath = this.getTempFilePath();									//파일경로
		
		/* 파일정보 생성하기 */
		FileVo vo = FileVo.builder()
				.orgnlFileNm(filename)        										//원본파일명    
				.filePath(filePath)        				//파일 경로    
				.fileNm(tempFilename)        								//파일 명     
				.fileSz(multipartFile.getSize())         //파일 크기    
				.fileExtnNm(extension)    										//파일확장자명   
				.build();
		
		return vo;
	}
	
	/**
	 * 파일업로드 저장 위치정보 만들기
	 * 
	 * @param repository
	 * @return
	 * @throws Exception
	 */
	public String getTempFilePath() throws Exception {
		String uploadRootPath = commonProperties.getProperty("upload.root.path");		//File Repository Root
		String uploadTemporaryPath = uploadRootPath + commonProperties.getProperty("upload.temporary.path");	//파일업로드 Temp 경로
		
		return uploadTemporaryPath;
	}
	
	/**
	 * 1주일 주기 임시파일생성 경로 위치정보 만들기
	 * - 프로세스내에서 1회성 임시파일 생성 후 파일 생성일자가 1주일이 초과하면 반드시 삭제처리한다. - NexacroFileResult 에서 생성자 파라미터가 File이라 파일생성없이는 사용이 불가하므로 해당 경로를 활용 한다.
	 * 
	 * @param repository
	 * @return
	 * @throws Exception
	 */
	public String getTempFilePendingDeleteWeeklyPathNm() throws Exception {
		String uploadRootPath = commonProperties.getProperty("upload.root.path");		//File Repository Root
		String uploadTemporaryPath = uploadRootPath + commonProperties.getProperty("upload.pending.delete.weekly.path");	//파일업로드 Temp 경로
		
		return uploadTemporaryPath;
	}
	
	/**
	 * 파일업로드 최종저장 완료된 위치정보 조회하기
	 * 
	 * @param repository
	 * @return
	 * @throws Exception
	 */
	public String getRealFilePath() throws Exception {
		String uploadRootPath = commonProperties.getProperty("upload.root.path");		//File Repository Root
		String uploadRealPath = uploadRootPath + commonProperties.getProperty("upload.real.path");		//파일업로드 Real 경로
		
		return uploadRealPath;
	}
	
	/**
	 * 이미지파일 불러오기 - Base64 Data
	 * @param vo
	 * @return
	 */
	public String getBase64(FileVo vo) {
		
		try {
			File file = new File(vo.getFileFullPath());			//저장된 파일명으로 File 객체 생성
			
			InputStream is = new FileInputStream(file);
			ByteArrayOutputStream bos = new ByteArrayOutputStream();
			
			int len = 0;
			byte[] b = new byte[1024];
			while((len = is.read(b)) != -1) {
				bos.write(b, 0, len);
			}
			
			byte[] base64Array = bos.toByteArray();
			
			is.close();
			
			return "data:image/" + vo.getOrgnlFileNmWithExt() + ";base64, " + new String(Base64.encodeBase64(base64Array));
			
		} catch (IOException e) {
			return "";
		}
	}
}