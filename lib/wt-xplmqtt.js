var Xpl = require('xpl-api');
var mqtt = require('mqtt');

function wt(device, options) {
	options = options || {};
	this._options = options;
	this.hash = [];

	options.xplSource = options.xplSource || "bnz-wtlogger.wiseflat";

	this.xpl = new Xpl(options);
        this.client = new mqtt.createClient(options.mqtt_port, options.mqtt_ip);
};

module.exports = wt;

var proto = {
    
        _init: function(callback) {
                var self = this;

                self.xpl.bind(function(error) {
                        if (error) {
                                return callback(error);
                        }

                        console.log("XPL is ready");
                        self._subMQTT('device');
                        self._subMQTT('service');
                        callback(null,  self.xpl);
                });
                
        },

	_log: function() {
		if (!this._configuration.xplLog) {
			return;
		}
                
		console.log.apply(console, arguments);
	},
        
        _subMQTT: function(object) {
                var self = this;
                self.client.subscribe(object);
		console.log.apply(console, arguments);
	},
        
        _pubMQTT: function(object, message, bodyName, body) {
		console.log.apply(console, arguments);
                var now = Date.now();
                client.publish(object, JSON.stringify(message));
	},
        
        _xpl_ac_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },

        _xpl_arc_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_cluster_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_cid_shomes: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_dawndusk_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },

        _xpl_domogeek_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_elro_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_energy_shomes: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_homeeasy_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_hue_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },

        _xpl_ipx800_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_ligting_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_osd_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_ping_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_sensor_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
                
        _xpl_sensor_shomes: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_snmp_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },
        
        _xpl_teleinfo_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_waveman_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },
        
        _xpl_wol_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },

        _xpl_wol_confirm: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        },

        _xpl_x10_basic: function(message){
                var self = this;
                this._pubMQTT('device', message, message.bodyName, message.body);
        },

        _xpl_remote_basic: function(message){
                var self = this;
                this._pubMQTT('service', message, message.bodyName, message.body);
        }
}