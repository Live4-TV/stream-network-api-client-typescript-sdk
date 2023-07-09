# .SocialNetworksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**socialNetworkControllerGetAllActive**](SocialNetworksApi.md#socialNetworkControllerGetAllActive) | **GET** /api/v1/social-networks | Get all social network integrations available


# **socialNetworkControllerGetAllActive**
> SocialNetworkResponse socialNetworkControllerGetAllActive()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SocialNetworksApi(configuration);

let body:.SocialNetworksApiSocialNetworkControllerGetAllActiveRequest = {
  // string
  xApiKey: "x-api-key_example",
};

apiInstance.socialNetworkControllerGetAllActive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | [**string**] |  | defaults to undefined


### Return type

**SocialNetworkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of social network integrations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


