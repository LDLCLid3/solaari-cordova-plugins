function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var DEVICE_READY_TIMEOUT = 2000;
__export(require('./plugins/actionsheet'));
__export(require('./plugins/ble'));
__export(require('./plugins/camera'));
__export(require('./plugins/contacts'));
__export(require('./plugins/device'));
__export(require('./plugins/facebook'));
__export(require('./plugins/geolocation'));
__export(require('./plugins/statusbar'));
__export(require('./plugins/toast'));
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map