var wtlogger = require("./lib/wt-logger");

var wt = new wtlogger(null, {
	xplSource: 'bnz-wtlogger.wiseflat',
        mqtt_ip: '172.16.2.6',
        mqtt_port: '1883'
});

wt.init(function(error, xpl) {
	if (error) {
		console.error(error);
		return;
	}
});

