(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./index'));
  }
}(function(ManticoreSDK) {
  'use strict';

  ManticoreSDK.init = function (jwtToken, options) {
    var api = ManticoreSDK.ApiClient.instance

    api.authentications.jwt.accessToken = jwtToken

    if (options && options.basePath) {
      api.basePath = options.basePath.replace(/\/+$/, '')
    }

    return api
  }

  return ManticoreSDK;
}));
