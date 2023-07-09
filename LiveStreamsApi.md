# .LiveStreamsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveStreamsControllerCreateAndStartLive**](LiveStreamsApi.md#liveStreamsControllerCreateAndStartLive) | **POST** /api/v1/live-streams/{uuid}/create-and-start | Start a live stream, return the stream key
[**liveStreamsControllerStopLive**](LiveStreamsApi.md#liveStreamsControllerStopLive) | **POST** /api/v1/live-streams/{uuid}/stop | Stop a live stream


# **liveStreamsControllerCreateAndStartLive**
> CreateAndStartLiveResponse liveStreamsControllerCreateAndStartLive(createAndStartLiveRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LiveStreamsApi(configuration);

let body:.LiveStreamsApiLiveStreamsControllerCreateAndStartLiveRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // CreateAndStartLiveRequest
  createAndStartLiveRequest: {
    title: "18/04 - John Doe playing the piano!",
    description: "Welcome to the event of the year. John doe will play the piano for the first time in 10 years! 🎉",
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
  },
};

apiInstance.liveStreamsControllerCreateAndStartLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAndStartLiveRequest** | **CreateAndStartLiveRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**CreateAndStartLiveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The live stream was created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **liveStreamsControllerStopLive**
> StopLiveResponse liveStreamsControllerStopLive(stopLiveRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LiveStreamsApi(configuration);

let body:.LiveStreamsApiLiveStreamsControllerStopLiveRequest = {
  // string
  xApiKey: "x-api-key_example",
  // string | The uuid of the live stream
  uuid: "uuid_example",
  // StopLiveRequest
  stopLiveRequest: {
    accounts: [
      "["4b48f42e-c8c9-44a7-8058-80f5cd7851de", "70dc5a7b-a284-41ec-b47c-4e09bf3499c9", "c6be4b22-19ae-4046-8dcf-ec7b4628d481"]",
    ],
    saveLive: true,
  },
};

apiInstance.liveStreamsControllerStopLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopLiveRequest** | **StopLiveRequest**|  |
 **xApiKey** | [**string**] |  | defaults to undefined
 **uuid** | [**string**] | The uuid of the live stream | defaults to undefined


### Return type

**StopLiveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The live stream was stopped successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


