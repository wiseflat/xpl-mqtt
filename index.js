var xplmqtt = require("./lib/wt-xplmqtt");

var wt = new xplmqtt(null, {
	xplSource: 'bnz-wtlogger.wiseflat',
        mqtt_ip: '172.16.2.6',
        mqtt_port: '1883'
});

wt._init(function(error, xpl) {

	if (error) {
		console.error(error);
		return;
	}
        
        xpl.on("xpl:homeeasy.basic", function(message) {
		console.log("Receive message ", message);
                wt._xpl_homeeasy_basic(message);
        });
        
        xpl.on("xpl:sensor.basic", function(message) {
		console.log("Receive message ", message);
                wt._xpl_sensor_basic(message);
        });
});

