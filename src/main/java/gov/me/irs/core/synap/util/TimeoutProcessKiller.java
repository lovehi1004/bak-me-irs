package gov.me.irs.core.synap.util;

import java.util.TimerTask;

/**
 * 사이냅소프트 - 가이드2
 * @author Justin
 *
 */
public class TimeoutProcessKiller extends TimerTask {
	
	private Process p;
	
	public TimeoutProcessKiller(Process p) {
		this.p = p;
	}
	
	@Override
	public void run() {
		p.destroy();
	}
}