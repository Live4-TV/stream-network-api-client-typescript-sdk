// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateAndStartLiveRequest } from '../models/CreateAndStartLiveRequest';
import { CreateAndStartLiveResponse } from '../models/CreateAndStartLiveResponse';
import { StopLiveRequest } from '../models/StopLiveRequest';
import { StopLiveResponse } from '../models/StopLiveResponse';

/**
 * no description
 */
export class LiveStreamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Start a live stream, return the stream key
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param createAndStartLiveRequest 
     */
    public async liveStreamsControllerCreateAndStartLive(xApiKey: string, uuid: string, createAndStartLiveRequest: CreateAndStartLiveRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerCreateAndStartLive", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerCreateAndStartLive", "uuid");
        }


        // verify required parameter 'createAndStartLiveRequest' is not null or undefined
        if (createAndStartLiveRequest === null || createAndStartLiveRequest === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerCreateAndStartLive", "createAndStartLiveRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/create-and-start'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-api-key", ObjectSerializer.serialize(xApiKey, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createAndStartLiveRequest, "CreateAndStartLiveRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stop a live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopLiveRequest 
     */
    public async liveStreamsControllerStopLive(xApiKey: string, uuid: string, stopLiveRequest: StopLiveRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerStopLive", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerStopLive", "uuid");
        }


        // verify required parameter 'stopLiveRequest' is not null or undefined
        if (stopLiveRequest === null || stopLiveRequest === undefined) {
            throw new RequiredError("LiveStreamsApi", "liveStreamsControllerStopLive", "stopLiveRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/stop'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-api-key", ObjectSerializer.serialize(xApiKey, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(stopLiveRequest, "StopLiveRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LiveStreamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to liveStreamsControllerCreateAndStartLive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async liveStreamsControllerCreateAndStartLive(response: ResponseContext): Promise<CreateAndStartLiveResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateAndStartLiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateAndStartLiveResponse", ""
            ) as CreateAndStartLiveResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateAndStartLiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateAndStartLiveResponse", ""
            ) as CreateAndStartLiveResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to liveStreamsControllerStopLive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async liveStreamsControllerStopLive(response: ResponseContext): Promise<StopLiveResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: StopLiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StopLiveResponse", ""
            ) as StopLiveResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StopLiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StopLiveResponse", ""
            ) as StopLiveResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
