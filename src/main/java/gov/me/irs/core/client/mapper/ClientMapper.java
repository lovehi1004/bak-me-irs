package gov.me.irs.core.client.mapper;

import org.apache.ibatis.annotations.Mapper;

import gov.me.irs.core.client.vo.ClientVo;

/**
 * 사용자 접속정보 Mapper
 * 
 * @author Justin
 *
 */
@Mapper
public interface ClientMapper {
	/**
	 * 사용자 접속정보 등록
	 * 
	 * @param requestMap
	 * @return
	 */
	int insertClientDtl(ClientVo vo);
	
}