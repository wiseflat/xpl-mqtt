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
        
        xpl.on("xpl:ac.basic", function(message) {
		//console.log("Receive message ", message);
                wt._xpl_ac_basic(message);
        });
        
        xpl.on("xpl:arc.basic", function(message) {
                wt._xpl_arc_basic(message);
        });
        
        xpl.on("xpl:cluster.basic", function(message) {
                wt._xpl_cluster_basic(message);
        });
        
        xpl.on("xpl:cid.shomes", function(message) {
                wt._xpl_cid_shomes(message);
        });
        
        xpl.on("xpl:dawndusk.basic", function(message) {
                wt._xpl_dawndusk_basic(message);
        });
        
        xpl.on("xpl:domogeek.basic", function(message) {
                wt._xpl_domogeek_basic(message);
        });
        
        xpl.on("xpl:elro.basic", function(message) {
                wt._xpl_elro_basic(message);
        });
        
        xpl.on("xpl:energy.shomes", function(message) {
                wt._xpl_energy_shomes(message);
        });
        
        xpl.on("xpl:homeeasy.basic", function(message) {
                wt._xpl_homeeasy_basic(message);
        });

        xpl.on("xpl:hue.basic", function(message) {
                wt._xpl_hue_basic(message);
        });
        
        xpl.on("xpl:ipx800.basic", function(message) {
                wt._xpl_ipx800_basic(message);
        });
        
        xpl.on("xpl:lighting.basic", function(message) {
                wt._xpl_ligting_basic(message);
        });

        xpl.on("xpl:osd.basic", function(message) {
                wt._xpl_osd_basic(message);
        });
        
        xpl.on("xpl:ping.basic", function(message) {
                wt._xpl_ping_basic(message);
        });

        xpl.on("xpl:sensor.basic", function(message) {
                wt._xpl_sensor_basic(message);
        });
        
        xpl.on("xpl:sensor.shomes", function(message) {
                wt._xpl_sensor_shomes(message);
        });
        
        xpl.on("xpl:snmp.basic", function(message) {
                wt._xpl_snmp_basic(message);
        });
        
        xpl.on("xpl:teleinfo.basic", function(message) {
                wt._xpl_teleinfo_basic(message);
        });
        
        xpl.on("xpl:waveman.basic", function(message) {
                wt._xpl_waveman_basic(message);
        });
        
        xpl.on("xpl:wol.basic", function(message) {
                wt._xpl_wol_basic(message);
        });
        
        xpl.on("xpl:wol.confirm", function(message) {
                wt._xpl_wol_confirm(message);
        });
        
        xpl.on("xpl:x10.basic", function(message) {
                wt._xpl_x10_basic(message);
        });

        xpl.on("xpl:remote.basic", function(message) {
                wt._xpl_remote_basic(message);
        });
        
});

