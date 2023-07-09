# .CommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentsControllerGetComments**](CommentsApi.md#commentsControllerGetComments) | **GET** /api/v1/live-streams/{uuid}/comments | Get a list of comments (call it every minute)
[**commentsControllerMuteComment**](CommentsApi.md#commentsControllerMuteComment) | **POST** /api/v1/live-streams/{uuid}/comments/mute | Mute comments to the live stream
[**commentsControllerPostComment**](CommentsApi.md#commentsControllerPostComment) | **POST** /api/v1/live-streams/{uuid}/comments | Post a comment into the live stream (all accounts)
[**commentsControllerStartListening**](CommentsApi.md#commentsControllerStartListening) | **POST** /api/v1/live-streams/{uuid}/comments/start-listening | Start listening comments of the live stream
[**commentsControllerStopListening**](CommentsApi.md#commentsControllerStopListening) | **POST** /api/v1/live-streams/{uuid}/comments/stop-listening | Stop listening comments of the live stream
[**commentsControllerUnmuteComment**](CommentsApi.md#commentsControllerUnmuteComment) | **POST** /api/v1/live-streams/{uuid}/comments/unmute | Unmute comments to the live stream


# **commentsControllerGetComments**
> GetCommentsResponse commentsControllerGetComments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerGetCommentsRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // number | The timestamp of the last comment received. If requesting for the first time, you can send 0
  lastCommentTimestamp: 1619515200000,
};

apiInstance.commentsControllerGetComments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined
 **lastCommentTimestamp** | [**number**] | The timestamp of the last comment received. If requesting for the first time, you can send 0 | defaults to undefined


### Return type

**GetCommentsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentsControllerMuteComment**
> ToggleCommentResponse commentsControllerMuteComment(toggleCommentRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerMuteCommentRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // ToggleCommentRequest
  toggleCommentRequest: {
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
  },
};

apiInstance.commentsControllerMuteComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toggleCommentRequest** | **ToggleCommentRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**ToggleCommentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The comment was muted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentsControllerPostComment**
> PostCommentResponse commentsControllerPostComment(postCommentRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerPostCommentRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // PostCommentRequest
  postCommentRequest: {
    message: "Hello world!",
  },
};

apiInstance.commentsControllerPostComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCommentRequest** | **PostCommentRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**PostCommentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The comment was muted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentsControllerStartListening**
> StartListeningToCommentsResponse commentsControllerStartListening(startListeningToCommentsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerStartListeningRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // StartListeningToCommentsRequest
  startListeningToCommentsRequest: {
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
  },
};

apiInstance.commentsControllerStartListening(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startListeningToCommentsRequest** | **StartListeningToCommentsRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**StartListeningToCommentsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentsControllerStopListening**
> StopListeningToCommentsResponse commentsControllerStopListening(stopListeningToCommentsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerStopListeningRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // StopListeningToCommentsRequest
  stopListeningToCommentsRequest: {
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
  },
};

apiInstance.commentsControllerStopListening(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopListeningToCommentsRequest** | **StopListeningToCommentsRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**StopListeningToCommentsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentsControllerUnmuteComment**
> ToggleCommentResponse commentsControllerUnmuteComment(toggleCommentRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentsApi(configuration);

let body:.CommentsApiCommentsControllerUnmuteCommentRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // ToggleCommentRequest
  toggleCommentRequest: {
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
  },
};

apiInstance.commentsControllerUnmuteComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toggleCommentRequest** | **ToggleCommentRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**ToggleCommentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The comment was un-muted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


