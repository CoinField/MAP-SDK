/**
 * Manticore SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ManticoreSdk);
  }
}(this, function(expect, ManticoreSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ManticoreSdk.TickerInfoTicker();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TickerInfoTicker', function() {
    it('should create an instance of TickerInfoTicker', function() {
      // uncomment below and update the code to test TickerInfoTicker
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be.a(ManticoreSdk.TickerInfoTicker);
    });

    it('should have the property buy (base name: "buy")', function() {
      // uncomment below and update the code to test the property buy
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

    it('should have the property sell (base name: "sell")', function() {
      // uncomment below and update the code to test the property sell
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

    it('should have the property last (base name: "last")', function() {
      // uncomment below and update the code to test the property last
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

    it('should have the property vol (base name: "vol")', function() {
      // uncomment below and update the code to test the property vol
      //var instane = new ManticoreSdk.TickerInfoTicker();
      //expect(instance).to.be();
    });

  });

}));
