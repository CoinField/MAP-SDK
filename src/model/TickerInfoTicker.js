/**
 * Manticore SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ManticoreSdk) {
      root.ManticoreSdk = {};
    }
    root.ManticoreSdk.TickerInfoTicker = factory(root.ManticoreSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TickerInfoTicker model module.
   * @module model/TickerInfoTicker
   * @version 0.2.6
   */

  /**
   * Constructs a new <code>TickerInfoTicker</code>.
   * @alias module:model/TickerInfoTicker
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TickerInfoTicker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TickerInfoTicker} obj Optional instance to populate.
   * @return {module:model/TickerInfoTicker} The populated <code>TickerInfoTicker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('buy')) {
        obj['buy'] = ApiClient.convertToType(data['buy'], 'Number');
      }
      if (data.hasOwnProperty('sell')) {
        obj['sell'] = ApiClient.convertToType(data['sell'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Number');
      }
      if (data.hasOwnProperty('vol')) {
        obj['vol'] = ApiClient.convertToType(data['vol'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} buy
   */
  exports.prototype['buy'] = undefined;
  /**
   * @member {Number} sell
   */
  exports.prototype['sell'] = undefined;
  /**
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;
  /**
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * @member {Number} last
   */
  exports.prototype['last'] = undefined;
  /**
   * @member {Number} vol
   */
  exports.prototype['vol'] = undefined;



  return exports;
}));


