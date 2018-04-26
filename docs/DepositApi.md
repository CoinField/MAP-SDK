# ManticoreSdk.DepositApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Deposit**](DepositApi.md#getV2Deposit) | **GET** /deposit | Get details of specific deposit.


<a name="getV2Deposit"></a>
# **getV2Deposit**
> getV2Deposit(txid)

Get details of specific deposit.

Get details of specific deposit.

### Example
```javascript
var ManticoreSdk = require('manticore-sdk');
var defaultClient = ManticoreSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ManticoreSdk.DepositApi();

var txid = "txid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Deposit(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

