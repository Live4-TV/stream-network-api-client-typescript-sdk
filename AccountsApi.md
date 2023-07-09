# .AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**socialNetworkAccountControllerGetAccount**](AccountsApi.md#socialNetworkAccountControllerGetAccount) | **GET** /api/v1/social-network-account/{userExternalId}/{uuid} | Get social account information logged from user account
[**socialNetworkAccountControllerGetAuthoriseUrl**](AccountsApi.md#socialNetworkAccountControllerGetAuthoriseUrl) | **POST** /api/v1/social-network-account/{network}/authorise-url | Add a new social network account (e.g instagram account)


# **socialNetworkAccountControllerGetAccount**
> SocialNetworkAccount socialNetworkAccountControllerGetAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiSocialNetworkAccountControllerGetAccountRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The user\'s unique identifier on your system. The same of you use to authorise-url endpoint.
  userExternalId: "john.doe@gmail.com",
  // string | The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
  uuid: "21d6ac22-cf0c-42d2-8aa9-95e71ec32c2b",
};

apiInstance.socialNetworkAccountControllerGetAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | [**string**] |  | defaults to undefined
 **userExternalId** | [**string**] | The user\&#39;s unique identifier on your system. The same of you use to authorise-url endpoint. | defaults to undefined
 **uuid** | [**string**] | The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint | defaults to undefined


### Return type

**SocialNetworkAccount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account was found successfully |  -  |
**404** | The social network account is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **socialNetworkAccountControllerGetAuthoriseUrl**
> Redirect socialNetworkAccountControllerGetAuthoriseUrl(getAuthoriseUrlRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiSocialNetworkAccountControllerGetAuthoriseUrlRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The social network code
  network: "instagram",
  // GetAuthoriseUrlRequest
  getAuthoriseUrlRequest: {
    userExternalId: "john.doe@gmail.com",
    accountUuid: "4644a82b-ccaf-4247-ba13-3b29121ab1d5",
  },
};

apiInstance.socialNetworkAccountControllerGetAuthoriseUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAuthoriseUrlRequest** | **GetAuthoriseUrlRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **network** | [**string**] | The social network code | defaults to undefined


### Return type

**Redirect**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The account was created successfully |  -  |
**404** | The social network is not supported |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


