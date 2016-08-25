var browser = require('cordova/platform');

function getDevice() {
    return "browser";
}

module.exports = {
    getDeviceInfo: function (success, error) {
        setTimeout(function () {
            success({
                device: getDevice()
            });
        }, 0);
    }
};

require("cordova/exec/proxy").add("Device", module.exports);
