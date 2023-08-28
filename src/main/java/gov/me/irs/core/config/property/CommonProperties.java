package gov.me.irs.core.config.property;

import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.stereotype.Component;

import gov.me.irs.core.config.property.common.AbstractProperties;

/**
 * 시스템 공통 프로퍼티
 * 
 * @author Justin
 *
 */
@Component
public class CommonProperties extends AbstractProperties {

    public CommonProperties(ConfigurableEnvironment env) {
        super(env);
    }

}