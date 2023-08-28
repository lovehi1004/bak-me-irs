package gov.me.irs.core.enumeration.converter;

import javax.persistence.AttributeConverter;

import gov.me.irs.core.enumeration.type.EnumType;

import java.util.EnumSet;
import java.util.NoSuchElementException;

/**
 * 시스템 공통 Enum Converter
 * 
 * @author Justin
 *
 * @param <E>
 */
public class EnumConverter<E extends Enum<E> & EnumType> implements AttributeConverter<E, String> {

	private Class<E> clazz;

	public EnumConverter(Class<E> enumClass){
        this.clazz = enumClass;
    }
    
    @Override
    public String convertToDatabaseColumn(E attribute) {
        return attribute.getCode();
    }

    @Override
    public E convertToEntityAttribute(String dbData) {
        return EnumSet.allOf(clazz).stream()
                .filter(e->e.getCode().equals(dbData))
                .findAny()
                .orElseThrow(()-> new NoSuchElementException());
    }
}