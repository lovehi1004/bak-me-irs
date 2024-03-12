package gov.me.irs.common.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.PosixFilePermission;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Component;

import gov.me.irs.common.constants.Const;
import gov.me.irs.common.file.vo.RaonKFileDownloadVo;
import gov.me.irs.common.file.vo.RaonKFileVo;
import gov.me.irs.core.config.property.CommonProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * RaonKFileUtil
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class RaonKFileUtil {
	
	public static final String DEFAULT_ARCHIVE_FILE_NAME = "archive";			/* MULTI 다운로드 - Default 압축파일명 */
	public static final String DEFAULT_ARCHIVE_FILE_EXT = ".zip";				/* MULTI 다운로드 - Default 압축파일확장자명 */
	
	public static final String DEFAULT_CHILD_ARCHIVE_FILE_NAME = "archive";			/* MULTI 다운로드 - Default 압축파일명 */
	public static final String DEFAULT_CHILD_ARCHIVE_FILE_EXT = ".zip";	
	
	public final static String ZIP_MIME_TYPE = "application/zip";
	
	private final CommonProperties commonProperties;
	
	private static final String DEFAULT_FILE_NAME= "download";				/* default 파일명 */
	private static final String DEFAULT_FILE_EXT= "xlsx";					/* default 엑셀 확장자명 */

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
	 * 파일업로드 최종저장 완료된 위치정보 조회하기
	 * 
	 * @param repository
	 * @return
	 * @throws Exception
	 */
	public String getRealFilePath() throws Exception {
		
		/* 프로파일 */
		String profiles = System.getProperty("spring.profiles.active");
		
		String uploadRootPath = commonProperties.getProperty("upload.root.path");		//File Repository Root
		
		File file1 = new File(uploadRootPath);
		if(!file1.exists()) {
			file1.mkdirs();
			
			// 폴더 권한 추가
			Path folderPath = Paths.get(uploadRootPath);
			
			/* 리눅스 전용 */
			if(!ObjectUtils.isEmpty(profiles) && (Const.PROFILES.DEV.equals(profiles) || Const.PROFILES.PRD.equals(profiles))) {
				// 대상 파일에 대한 "others"에 대한 읽기 권한 추가
				Set<PosixFilePermission> permissions = Files.getPosixFilePermissions(folderPath);
				permissions.add(PosixFilePermission.OTHERS_READ);
				permissions.add(PosixFilePermission.OTHERS_EXECUTE);
				Files.setPosixFilePermissions(folderPath, permissions);
			}
		}
		
		String uploadRealPath = uploadRootPath + commonProperties.getProperty("upload.real.path");		//파일업로드 Real 경로
		
		File file2 = new File(uploadRealPath);
		if(!file2.exists()) {
			file2.mkdirs();
			
			// 폴더 권한 추가
			Path folderPath = Paths.get(uploadRealPath);
			
			/* 리눅스 전용 */
			if(!ObjectUtils.isEmpty(profiles) && (Const.PROFILES.DEV.equals(profiles) || Const.PROFILES.PRD.equals(profiles))) {
				// 대상 파일에 대한 "others"에 대한 읽기 권한 추가
				Set<PosixFilePermission> permissions = Files.getPosixFilePermissions(folderPath);
				permissions.add(PosixFilePermission.OTHERS_READ);
				permissions.add(PosixFilePermission.OTHERS_EXECUTE);
				Files.setPosixFilePermissions(folderPath, permissions);
			}
		}
		
		return uploadRealPath;
	}
	
	/**
	 * 전체 경로에서 파일경로만 추출하기
	 * 
	 * @param fileFullPath
	 * @return
	 */
	public String getFileParentPath(String fileFullPath) {
		String regex = ".*/";

		// Pattern.DOTALL 옵션을 추가하여 줄 바꿈 문자도 .*에 포함되도록 설정
		Pattern pattern = Pattern.compile(regex, Pattern.DOTALL);
		Matcher matcher = pattern.matcher(fileFullPath);

		if (matcher.find()) {
			return fileFullPath.substring(0, matcher.end());
		} else {
			return fileFullPath;
		}
	}
	
	/**
	 * 1주일 주기 임시파일생성 경로 위치정보 만들기
	 * - 프로세스내에서 1회성 임시파일 생성 후 파일 생성일자가 1주일이 초과하면 반드시 삭제처리한다. - NexacroFileResult 에서 생성자 파라미터가 File이라 파일생성없이는 사용이 불가하므로 해당 경로를 활용 한다.
	 * 
	 * @param repository
	 * @return
	 * @throws Exception
	 */
	public String getTempFilePendingDeleteWeeklyPathNm() {
		String uploadRootPath = commonProperties.getProperty("upload.root.path");		//File Repository Root
		String uploadTemporaryPath = uploadRootPath + commonProperties.getProperty("upload.pending.delete.weekly.path");	//파일업로드 Temp 경로
		
		return uploadTemporaryPath;
	}
	
	/**
	 * 압축파일 생성하기
	 * @param raonKFileDownloadVoList - 파일정보 목록
	 * @return
	 * @throws IOException 
	 */
	public File compress(List<RaonKFileVo> raonKFileVoList, String archiveFileName) throws IOException {
		
		/* 압축처리 후 압축파일 */
		File compressedFile = null;
		
		/* 압축대상 파일이 존재하면 */
		if(raonKFileVoList.size() > Const.NUMERIC.EMPTY_LIST) {
			compressedFile = new File(this.getTempFilePendingDeleteWeeklyPathNm(), archiveFileName);
			
			File directory = new File(this.getTempFilePendingDeleteWeeklyPathNm());
			if(!directory.exists()) {
				directory.mkdirs();
			}
			
			final FileOutputStream fos = new FileOutputStream(compressedFile);
			ZipOutputStream zos = new ZipOutputStream(fos);
			
			try {
				
				for (RaonKFileVo vo : raonKFileVoList) {
					File fileToZip = new File(vo.getFileFullPath());
					FileInputStream fis = new FileInputStream(fileToZip);
					ZipEntry zipEntry = new ZipEntry(vo.getOrgnlFileNmWithExt());
					zos.putNextEntry(zipEntry);
					
					byte[] bytes = new byte[1024];
					int length;
					while((length = fis.read(bytes)) >= 0) {
						zos.write(bytes, 0, length);
					}
					fis.close();
				}
				
				zos.close();
				fos.close();
				
				return compressedFile;
				
			} catch(IOException e) {
				
				log.error("[압축파일 생성하기 실패 - 개별 압축파일][{}]", e);
				
				return null;
				
			}finally{
				if( zos != null ){  zos.close();  }
				if( fos != null ){  fos.close();  }
			}
			
		}
		
		return null;
		
	}
	
	/**
	 * 압축파일 생성하기
	 * 
	 * @param request
	 * @param subArchiveFileList - 파일목록
	 * @param archiveFileName - 생성할 압축파일명
	 * @return
	 * @throws Exception
	 */
	public RaonKFileDownloadVo compressFileList(List<File> subArchiveFileList, String archiveFileName) throws IOException {
		
		/* 압축처리 후 압축파일 */
		File compressedFile = null;
		
		/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 4. 파일압축 하기 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
		RaonKFileDownloadVo resultVo = new RaonKFileDownloadVo();
		
		/* 압축대상 파일이 존재하면 */
		if(subArchiveFileList.size() > Const.NUMERIC.EMPTY_LIST) {
			
			compressedFile = new File(this.getTempFilePendingDeleteWeeklyPathNm(), archiveFileName);
			
			File directory = new File(this.getTempFilePendingDeleteWeeklyPathNm());
			if(!directory.exists()) {
				directory.mkdirs();
			}
			
			final FileOutputStream fos = new FileOutputStream(compressedFile);
			ZipOutputStream zos = new ZipOutputStream(fos);
			
			try {
				
				for (File fileToZip : subArchiveFileList) {
					FileInputStream fis = new FileInputStream(fileToZip);
					ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
					zos.putNextEntry(zipEntry);
					
					byte[] bytes = new byte[1024];
					int length;
					while((length = fis.read(bytes)) >= 0) {
						zos.write(bytes, 0, length);
					}
					fis.close();
				}
				
				resultVo.setContentType(ZIP_MIME_TYPE);
				resultVo.setDownloadFileNm(archiveFileName);
				resultVo.setArchiveFile(compressedFile);
				
				zos.close();
				fos.close();
				
				return resultVo;
				
			} catch(IOException e) {
				
				log.error("[압축파일 생성하기 실패 - 최종 압축파일][{}]", e);
				
				return null;
				
			}finally{
				if( zos != null ){  zos.close();  }
				if( fos != null ){  fos.close();  }
			}
			
		}
		
		return null;

	}
	
	/**
	 * 날짜 포함된 파일명 조립하기
	 * 
	 * @param name
	 * @return - 파일명_YYYYMMDD.확장자명
	 */
	public String getFilenameWithDate(String name, String defaultFilename, String defaultExt) {
		if(ObjectUtils.isEmpty(name)) {
			return defaultFilename + "." + defaultExt;
		} else {
			String fileName = this.getFilename(name);
			String ext = this.getFilenameExtension(name, false);
			
			return fileName + "_" + DateUtil.getDate("yyyyMMdd") + "." + ext;
		}
	}
	
	/**
	 * 날짜 포함된 엑셀 파일명 조립하기
	 * 
	 * @param name
	 * @return - 파일명_YYYYMMDD.확장자명
	 */
	public String getExcelFilenameWithDate(String name) {
		return this.getFilenameWithDate(name, DEFAULT_FILE_NAME, DEFAULT_FILE_EXT);
	}
	
}