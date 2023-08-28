package gov.me.irs.common.file.vo;

import java.io.File;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 다운로드 전용 Vo
 * 
 * @author Justin
 *
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FileDownloadVo {
	
	private String contentType;
	private String fileFullPath;
	private String orgnlFileNm;
	private String downloadFileNm;
	private boolean isAvailable;
	
	private File archiveFile;
	
}
