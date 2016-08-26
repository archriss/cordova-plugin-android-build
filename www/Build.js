var channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

function Build() {
    this.available = false;
    this.device = null;

    var me = this;

    var onSuccess = function(info) {
        me.available = true;
        me.device = info.device;
    };

    var onError = function(e) {
        me.available = false;
        utils.alert("[ERROR] Error initializing Cordova: " + e);
    };

    channel.onCordovaReady.subscribe(function() {
        exec(onSuccess, onError, "Build", "getBuildInfo", []);
    });
}

module.exports = new Build();
