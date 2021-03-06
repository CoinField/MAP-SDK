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
    define(['../ApiClient', '../model/Member'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Member'));
  } else {
    // Browser globals (root is window)
    if (!root.ManticoreSdk) {
      root.ManticoreSdk = {};
    }
    root.ManticoreSdk.MembersApi = factory(root.ManticoreSdk.ApiClient, root.ManticoreSdk.Member);
  }
}(this, function(ApiClient, Member) {
  'use strict';

  /**
   * Members service.
   * @module api/MembersApi
   * @version 0.2.6
   */

  /**
   * Constructs a new MembersApi.
   * @alias module:api/MembersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2MembersMe operation.
     * @callback module:api/MembersApi~getV2MembersMeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your profile and accounts info.
     * Get your profile and accounts info.
     * @param {module:api/MembersApi~getV2MembersMeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.getV2MembersMe = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Member;

      return this.apiClient.callApi(
        '/members/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
