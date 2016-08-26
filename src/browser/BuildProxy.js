var browser = require('cordova/platform');

function getDevice() {
    return "browser";
}

module.exports = {
    getBuildInfo: function (success, error) {
        setTimeout(function () {
            success({
                device: getDevice()
            });
        }, 0);
    }
};

require("cordova/exec/proxy").add("Build", module.exports);
