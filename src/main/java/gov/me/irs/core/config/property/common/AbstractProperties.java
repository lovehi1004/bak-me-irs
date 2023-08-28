package gov.me.irs.core.config.property.common;

import lombok.RequiredArgsConstructor;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.util.StringUtils;

/**
 * 시스템 공통 프로퍼티 환경설정
 * 
 * @author Justin
 *
 */
@RequiredArgsConstructor
public abstract class AbstractProperties {

    private final ConfigurableEnvironment env;

    public String getProperty(String key) {
        return getProperty(key, null);
    }

    public String getProperty(String key, String defaultValue) {
        String value = env.getProperty(key.trim());
        if (StringUtils.hasText(value)) {
            return value.trim();
        }
        return defaultValue.trim();
    }

}
