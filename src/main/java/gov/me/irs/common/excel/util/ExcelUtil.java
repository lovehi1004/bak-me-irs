package gov.me.irs.common.excel.util;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import gov.me.irs.common.constants.ExcelConst;
import gov.me.irs.common.util.DateUtil;
import gov.me.irs.common.util.RaonKFileUtil;
import gov.me.irs.common.excel.ColSpan;
import gov.me.irs.common.excel.ExcelCell;
import gov.me.irs.common.excel.ExcelMatrix;
import gov.me.irs.common.excel.RowSpan;
import gov.me.irs.common.file.vo.RaonKFileVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * ExcelUtil - poi전용
 * 
 * @author Justin
 *
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ExcelUtil {
	
	private final RaonKFileUtil raonKFileUtil;
	
	/**
	 * 엑셀 업로드 파일 읽어서 list로 변환하기
	 * 
	 * @param headerList - cell key로 지정할 key list
	 * @param file - Multipart로 부터 추출된 File
	 * @return
	 * @throws IOException
	 * @throws InvalidFormatException
	 */
	public List<Map<String, Object>> getListFromExcel(String[] headerList, MultipartFile multipartFile) throws IOException, InvalidFormatException {
		return this.getListFromExcel(headerList, multipartFile, 0, 0);
	}
	
	/**
	 * 엑셀 업로드 파일 읽어서 list로 변환하기
	 * 
	 * @param headerList - cell key로 지정할 key list
	 * @param file - Multipart로 부터 추출된 File
	 * @param startDataRowIdx - 데이터 시작 row INDEX
	 * @return
	 * @throws IOException
	 * @throws InvalidFormatException
	 */
	public List<Map<String, Object>> getListFromExcel(String[] headerList, MultipartFile multipartFile, int startDataRowIdx) throws IOException, InvalidFormatException {
		return this.getListFromExcel(headerList, multipartFile, startDataRowIdx, 0);
	}
	
	/**
	 * 엑셀 업로드 파일 읽어서 list로 변환하기
	 * 
	 * @param headerList - cell key로 지정할 key list
	 * @param file - Multipart로 부터 추출된 File
	 * @param sheetIdx - 시트 INDEX
	 * @param startDataRowIdx - 데이터 시작 row INDEX
	 * @return
	 * @throws IOException
	 * @throws InvalidFormatException
	 */
	public List<Map<String, Object>> getListFromExcel(String[] headerList, MultipartFile multipartFile, int startDataRowIdx, int sheetIdx) throws IOException, InvalidFormatException {
		
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>(); 
		
		InputStream is = new ByteArrayInputStream(multipartFile.getBytes());
		
		Workbook workbook = null;
		
		try {
			
			workbook = WorkbookFactory.create(is);
			Sheet sheet = workbook.getSheetAt(sheetIdx);
			
			/* row 건수 - 헤더포함 */
			int lastRowIdx = sheet.getLastRowNum();
			log.debug("[lastRowIdx][{}]", lastRowIdx);
			
			/* 데이터가 없을때 */
			if(lastRowIdx < startDataRowIdx) {
				return resultList;
			}
			
			/* 데이터 시작 row INDEX 지점부터 Row 하나씩 읽기 */
			for (int idx = startDataRowIdx; idx <= lastRowIdx; idx++) {
				Row row = sheet.getRow(idx);
				Map<String, Object> map = new HashMap<String, Object>();
				
				/* cell 건수는 headerList 만큼 읽기 */
				for (int kdx = 0; kdx < headerList.length; kdx++) {
					Cell cell = row.getCell(kdx);
					Object v = this.getCellValue(cell);
					
					if(!ObjectUtils.isEmpty(headerList[kdx])) {
						String k = headerList[kdx];
						
						if(v == null) {
							map.put(k, StringUtils.EMPTY);
							
						} else {
							map.put(k, v);
						}
					}
				}
				
				resultList.add(map);
				
			}
			
		} catch (IOException e) {
			throw e;
		} catch (InvalidFormatException e) {
			throw e;
		} finally {
			if(is != null) {
				is.close();
			}
		}
		
		return resultList;
	}
	
	/**
	 * 엑셀 업로드 파일 Cell Value 추출하기
	 * 
	 * @param cell
	 * @return
	 */
	private Object getCellValue(Cell cell) {
		
		Object value = null;

		if (cell != null) {
			switch (cell.getCellType()) {
			case Cell.CELL_TYPE_FORMULA:
				value = cell.getCellFormula();
				break;
			case Cell.CELL_TYPE_BLANK:
				value = StringUtils.EMPTY;
				break;
			case Cell.CELL_TYPE_STRING:
				value = cell.getStringCellValue();
				break;
			case Cell.CELL_TYPE_NUMERIC:
//				value = cell.getNumericCellValue();			/* 숫자형 value에 소수점이 자동으로 추가 되어 사용하면 안됨 - 20230810100000 */
				cell.setCellType(Cell.CELL_TYPE_STRING);
				value = cell.getStringCellValue();
				break;
			case Cell.CELL_TYPE_ERROR:
				value = cell.getErrorCellValue();
				break;
			default:
				value = StringUtils.EMPTY;
				break;
			}
		}

		return value;
	}
	
	/**
	 * 엑셀 파일 생성하기
	 * 
	 * @param headerMatrix
	 * @param cellMatrix
	 * @param dataList
	 * @param sheetname
	 * @param isAddDateFooter
	 * @return
	 * @throws Exception
	 */
	public File getXssfFile(ExcelMatrix headerMatrix, ExcelMatrix cellMatrix, List<Map<String, Object>> dataList, String sheetname, boolean exceptFooter) throws Exception {
		ExcelCell matrixHeader[][] = headerMatrix.getMatrix();
		ExcelCell matrixCell[][] = cellMatrix.getMatrix();
		
		/* ■■■■■■■■■■■■■■■■■■■■ 1. 워크북 생성 ■■■■■■■■■■■■■■■■■■■■ */
		Workbook workbook = new XSSFWorkbook();
		
		/* ■■■■■■■■■■■■■■■■■■■■ 2. 시트 생성 ■■■■■■■■■■■■■■■■■■■■ */
		Sheet sheet = workbook.createSheet(sheetname);
		
		/* ■■■■■■■■■■■■■■■■■■■■ 3. 초기값 설정 ■■■■■■■■■■■■■■■■■■■■ */
		int rowCount = 0;
		int totalCellCount = -1;
		/* merge 대상 시작 row index를 저장할 list */
		List<Integer> mergeTargetHeaderRowIndexList = new ArrayList<Integer>();
		List<Integer> mergeTargetBodyRowIndexList = new ArrayList<Integer>();
		
		/* ■■■■■■■■■■■■■■■■■■■■ 4. 헤더영역 처리 ■■■■■■■■■■■■■■■■■■■■ */
		/* 헤더 출력정보가 존재하면 */
		if(headerMatrix != null) {
			mergeTargetHeaderRowIndexList.add(rowCount);
			
			for (int idx = 0; idx < matrixHeader.length; idx++) {
				totalCellCount = 0;
				
				/* ■■■■■■■■■■■■■■■■■■■■ 5. row 생성 ■■■■■■■■■■■■■■■■■■■■ */
				Row row = sheet.createRow(rowCount++);
				int maxTimes = 1;
				
				for (int kdx = 0; kdx < matrixHeader[idx].length; kdx++) {
					totalCellCount++;
					
					/* ■■■■■■■■■■■■■■■■■■■■ 6. cell 생성 ■■■■■■■■■■■■■■■■■■■■ */
					Cell cell = row.createCell(kdx);
					
					String headerKey = matrixHeader[idx][kdx].getKey();
					
					int nTimes = headerKey.split("\\n").length;			/* 높이계산용 - 엔터값 갯수 */
					if(nTimes >= maxTimes) {
						maxTimes = nTimes;
					}
					
					cell.setCellStyle(this.getDefaultHeaderCellStyle(workbook, row, maxTimes, matrixHeader[idx][kdx].getAlign()));
					cell.setCellValue(headerKey);
					
				}
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 7. 바디영역 처리 ■■■■■■■■■■■■■■■■■■■■ */
		for (Map<String, Object> map : dataList) {
			
			mergeTargetBodyRowIndexList.add(rowCount);
			
			for (int idx = 0; idx < matrixCell.length; idx++) {
				totalCellCount = 0;
				
				/* ■■■■■■■■■■■■■■■■■■■■ 8. row 생성 ■■■■■■■■■■■■■■■■■■■■ */
				Row row = sheet.createRow(rowCount++);
				int maxTimes = 1;
				
				for (int kdx = 0; kdx < matrixCell[idx].length; kdx++) {
					totalCellCount++;
					
					/* ■■■■■■■■■■■■■■■■■■■■ 9. cell 생성 ■■■■■■■■■■■■■■■■■■■■ */
					Cell cell = row.createCell(kdx);
					
					/* 9-1. key가 존재하지 않으면 default 값으로 설정 후 skip */
					if(ObjectUtils.isEmpty(matrixCell[idx][kdx].getKey())) {
						
						Object defaultValue = matrixCell[idx][kdx].getDefaultValue();
						
						if(defaultValue instanceof Integer) {
							cell.setCellStyle(this.getDefaultCellStyle(workbook, row, 1, matrixCell[idx][kdx].getAlign()));
							cell.setCellValue((Integer) defaultValue);
						} else {
							cell.setCellStyle(this.getDefaultCellStyle(workbook, row, 1, matrixCell[idx][kdx].getAlign()));
							cell.setCellValue((String) defaultValue);
						}
						
					/* 9-2. key가 존재하면 해당 Cell위치에 값 설정 */
					} else {
						
						Object dataValue = map.get(matrixCell[idx][kdx].getKey());
						
						if(ObjectUtils.isEmpty(dataValue)) {			// null값 공백으로 처리
							cell.setCellStyle(this.getDefaultCellStyle(workbook, row, 1, matrixCell[idx][kdx].getAlign()));
							cell.setCellValue(StringUtils.EMPTY);
						} else {
							if(matrixCell[idx][kdx].getType() == ExcelConst.INT) {
								cell.setCellStyle(this.getDefaultCellStyle(workbook, row, 1, matrixCell[idx][kdx].getAlign()));
								cell.setCellValue((Integer) dataValue);
							} else {
								String dataString = String.valueOf(dataValue);
								
								int nTimes = dataString.split("\\n").length;			/* 높이계산용 - 엔터값 갯수 */
								if(nTimes >= maxTimes) {
									maxTimes = nTimes;
								}
								
								cell.setCellStyle(this.getDefaultCellStyle(workbook, row, maxTimes, matrixCell[idx][kdx].getAlign()));
								cell.setCellValue(dataString);
							}
						}
						
					}
					
				}
			}
			
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 10. 셀크기 조정 ■■■■■■■■■■■■■■■■■■■■ */
		for (int idx = 0; idx < totalCellCount; idx++) {
			sheet.autoSizeColumn(idx);
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 11. 엑셀 공통 푸터영역 처리 ■■■■■■■■■■■■■■■■■■■■ */
		if(!exceptFooter) {
			Row commonRow = sheet.createRow(rowCount);
			Cell commonCell = commonRow.createCell(0);
			commonCell.setCellStyle(this.getDefaultCommonFooterCellStyle(workbook));
			final String dateInfo = DateUtil.getFullDate();
			commonCell.setCellValue(dateInfo);
			sheet.addMergedRegion(new CellRangeAddress(rowCount, rowCount, 0, (matrixCell[0].length - 1)));
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 12-1. 헤더영역 Merge 하기 ■■■■■■■■■■■■■■■■■■■■ */
		List<RowSpan> headerRowSpanList = headerMatrix.getRowSpanList();
		List<ColSpan> headerColSpanList = headerMatrix.getColSpanList();
		
		for (int mergeTargetRowIndex : mergeTargetHeaderRowIndexList) {
			for (RowSpan rowSpan : headerRowSpanList) {
				sheet.addMergedRegion(new CellRangeAddress(
						mergeTargetRowIndex + rowSpan.getStartRow(),
						mergeTargetRowIndex + rowSpan.getEndRow(),
						rowSpan.getStartCol(),
						rowSpan.getEndCol()));
			}
			for (ColSpan colSpan : headerColSpanList) {
				sheet.addMergedRegion(new CellRangeAddress(
						mergeTargetRowIndex + colSpan.getStartRow(),
						mergeTargetRowIndex + colSpan.getEndRow(),
						colSpan.getStartCol(),
						colSpan.getEndCol()));
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 12-2. 바디영역 Merge 하기 ■■■■■■■■■■■■■■■■■■■■ */
		List<RowSpan> bodyRowSpanList = cellMatrix.getRowSpanList();
		List<ColSpan> bodyColSpanList = cellMatrix.getColSpanList();
		
		for (int mergeTargetRowIndex : mergeTargetBodyRowIndexList) {
			for (RowSpan rowSpan : bodyRowSpanList) {
				sheet.addMergedRegion(new CellRangeAddress(
						mergeTargetRowIndex + rowSpan.getStartRow(),
						mergeTargetRowIndex + rowSpan.getEndRow(),
						rowSpan.getStartCol(),
						rowSpan.getEndCol()));
			}
			for (ColSpan colSpan : bodyColSpanList) {
				sheet.addMergedRegion(new CellRangeAddress(
						mergeTargetRowIndex + colSpan.getStartRow(),
						mergeTargetRowIndex + colSpan.getEndRow(),
						colSpan.getStartCol(),
						colSpan.getEndCol()));
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 13. 엑셀파일 - 임시파일 생성하기 ■■■■■■■■■■■■■■■■■■■■ */
		RaonKFileVo tempVo = new RaonKFileVo();
		tempVo.setFilePath(raonKFileUtil.getTempFilePendingDeleteWeeklyPathNm());
		tempVo.setFileNm(raonKFileUtil.getTempFilename());
		
		File file = new File(tempVo.getFileFullPath());
		
		File directory = new File(tempVo.getFilePath());
		if(!directory.exists()) {
			directory.mkdirs();
		}
		
		FileOutputStream fos = null;
		try {
			
			fos = new FileOutputStream(file);
			workbook.write(fos);
			
		} catch(FileNotFoundException e) {
			log.error("[엑셀파일 생성 오류][{}]", e);
			throw e;
		} finally {
			if(fos != null) {
				fos.close();
			}
		}
		
		/* ■■■■■■■■■■■■■■■■■■■■ 14. 엑셀파일 - 보내주기 ■■■■■■■■■■■■■■■■■■■■ */
		return file;
		
	}
	
	/**
	 * 공통 푸터영역 CellStyle
	 * 
	 * @param workbook
	 * @return
	 */
	private final CellStyle getDefaultCommonFooterCellStyle(Workbook workbook) {
		CellStyle style = workbook.createCellStyle();
		
		/* 정렬 설정 */
		style.setAlignment(CellStyle.ALIGN_RIGHT);									/* 기본값 : 가운데 정렬 */
		style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);		/* 세로 가운데 정렬 */
		
		/* 테두리 설정 */
		style.setBorderRight(XSSFCellStyle.BORDER_NONE);
		style.setBorderLeft(XSSFCellStyle.BORDER_NONE);
		style.setBorderTop(XSSFCellStyle.BORDER_NONE);
		style.setBorderBottom(XSSFCellStyle.BORDER_NONE);
		
		/* 배경색 설정 */
		style.setFillForegroundColor(IndexedColors.MAROON.getIndex());
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		
		/* 폰트 설정 */
		Font font = workbook.createFont();
		font.setFontName("맑은 고딕");					/* font type */
		font.setFontHeight((short)(11*20));				/* font size */
		font.setBoldweight(Font.BOLDWEIGHT_BOLD);		/* font weight - bold */
		font.setColor(IndexedColors.WHITE.getIndex());
		style.setFont(font);
		
		return style;
	}
	
	/**
	 * 헤더전용 CellStyle
	 * 
	 * @param workbook
	 * @return
	 */
	private final CellStyle getDefaultHeaderCellStyle(Workbook workbook, Row row, int nTimes, short align) {
		CellStyle style = workbook.createCellStyle();
		
		/* 정렬 설정 */
		style.setAlignment(align);									/* 기본값 : 가운데 정렬 */
		style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);		/* 세로 가운데 정렬 */
		
		/* 테두리 설정 */
		style.setBorderRight(XSSFCellStyle.BORDER_THIN);
		style.setBorderLeft(XSSFCellStyle.BORDER_THIN);
		style.setBorderTop(XSSFCellStyle.BORDER_THIN);
		style.setBorderBottom(XSSFCellStyle.BORDER_THIN);
		
		/* 배경색 설정 */
		style.setFillForegroundColor(IndexedColors.PALE_BLUE.getIndex());
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		
		/* 폰트 설정 */
		Font font = workbook.createFont();
		font.setFontName("맑은 고딕");					/* font type */
		row.setHeightInPoints(nTimes * row.getSheet().getDefaultRowHeightInPoints());			/* height */
		font.setBoldweight(Font.BOLDWEIGHT_NORMAL);		/* font weight - bold */
		style.setFont(font);
		
		style.setWrapText(true);
		
		return style;
	}
	
	/**
	 * 바디전용 CellStyle
	 * 
	 * @param workbook
	 * @return
	 */
	private final CellStyle getDefaultCellStyle(Workbook workbook, Row row, int nTimes, short align) {
		CellStyle style = workbook.createCellStyle();
		
		/* 정렬 설정 */
		style.setAlignment(align);									/* 기본값 : 가운데 정렬 */
		style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);		/* 세로 가운데 정렬 */
		
		/* 테두리 설정 */
		style.setBorderRight(XSSFCellStyle.BORDER_THIN);
		style.setBorderLeft(XSSFCellStyle.BORDER_THIN);
		style.setBorderTop(XSSFCellStyle.BORDER_THIN);
		style.setBorderBottom(XSSFCellStyle.BORDER_THIN);
		
		/* 폰트 설정 */
		Font font = workbook.createFont();
		font.setFontName("맑은 고딕");					/* font type */
		row.setHeightInPoints(nTimes * row.getSheet().getDefaultRowHeightInPoints());			/* height */
		font.setBoldweight(Font.BOLDWEIGHT_NORMAL);		/* font weight - normal */
		style.setFont(font);
		
		style.setWrapText(true);
		
		return style;
	}
	
	/**
	 * 날짜 포함된 엑셀파일명 조립하기
	 * 
	 * @param name
	 * @return - 파일명_YYYYMMDD.확장자명
	 */
	public final String getExcelFileName(String name) {
		return raonKFileUtil.getExcelFilenameWithDate(name);
	}
	
}
