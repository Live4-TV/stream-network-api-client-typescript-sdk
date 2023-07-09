// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetCommentsResponse } from '../models/GetCommentsResponse';
import { PostCommentRequest } from '../models/PostCommentRequest';
import { PostCommentResponse } from '../models/PostCommentResponse';
import { StartListeningToCommentsRequest } from '../models/StartListeningToCommentsRequest';
import { StartListeningToCommentsResponse } from '../models/StartListeningToCommentsResponse';
import { StopListeningToCommentsRequest } from '../models/StopListeningToCommentsRequest';
import { StopListeningToCommentsResponse } from '../models/StopListeningToCommentsResponse';
import { ToggleCommentRequest } from '../models/ToggleCommentRequest';
import { ToggleCommentResponse } from '../models/ToggleCommentResponse';

/**
 * no description
 */
export class CommentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a list of comments (call it every minute)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param lastCommentTimestamp The timestamp of the last comment received. If requesting for the first time, you can send 0
     */
    public async commentsControllerGetComments(xApiKey: string, uuid: string, lastCommentTimestamp: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerGetComments", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerGetComments", "uuid");
        }


        // verify required parameter 'lastCommentTimestamp' is not null or undefined
        if (lastCommentTimestamp === null || lastCommentTimestamp === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerGetComments", "lastCommentTimestamp");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lastCommentTimestamp !== undefined) {
            requestContext.setQueryParam("lastCommentTimestamp", ObjectSerializer.serialize(lastCommentTimestamp, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-api-key", ObjectSerializer.serialize(xApiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Mute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public async commentsControllerMuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerMuteComment", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerMuteComment", "uuid");
        }


        // verify required parameter 'toggleCommentRequest' is not null or undefined
        if (toggleCommentRequest === null || toggleCommentRequest === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerMuteComment", "toggleCommentRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments/mute'
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
            ObjectSerializer.serialize(toggleCommentRequest, "ToggleCommentRequest", ""),
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
     * Post a comment into the live stream (all accounts)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param postCommentRequest 
     */
    public async commentsControllerPostComment(xApiKey: string, uuid: string, postCommentRequest: PostCommentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerPostComment", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerPostComment", "uuid");
        }


        // verify required parameter 'postCommentRequest' is not null or undefined
        if (postCommentRequest === null || postCommentRequest === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerPostComment", "postCommentRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments'
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
            ObjectSerializer.serialize(postCommentRequest, "PostCommentRequest", ""),
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
     * Start listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param startListeningToCommentsRequest 
     */
    public async commentsControllerStartListening(xApiKey: string, uuid: string, startListeningToCommentsRequest: StartListeningToCommentsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStartListening", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStartListening", "uuid");
        }


        // verify required parameter 'startListeningToCommentsRequest' is not null or undefined
        if (startListeningToCommentsRequest === null || startListeningToCommentsRequest === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStartListening", "startListeningToCommentsRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments/start-listening'
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
            ObjectSerializer.serialize(startListeningToCommentsRequest, "StartListeningToCommentsRequest", ""),
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
     * Stop listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopListeningToCommentsRequest 
     */
    public async commentsControllerStopListening(xApiKey: string, uuid: string, stopListeningToCommentsRequest: StopListeningToCommentsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStopListening", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStopListening", "uuid");
        }


        // verify required parameter 'stopListeningToCommentsRequest' is not null or undefined
        if (stopListeningToCommentsRequest === null || stopListeningToCommentsRequest === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerStopListening", "stopListeningToCommentsRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments/stop-listening'
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
            ObjectSerializer.serialize(stopListeningToCommentsRequest, "StopListeningToCommentsRequest", ""),
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
     * Unmute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public async commentsControllerUnmuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerUnmuteComment", "xApiKey");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerUnmuteComment", "uuid");
        }


        // verify required parameter 'toggleCommentRequest' is not null or undefined
        if (toggleCommentRequest === null || toggleCommentRequest === undefined) {
            throw new RequiredError("CommentsApi", "commentsControllerUnmuteComment", "toggleCommentRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/live-streams/{uuid}/comments/unmute'
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
            ObjectSerializer.serialize(toggleCommentRequest, "ToggleCommentRequest", ""),
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

export class CommentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerGetComments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerGetComments(response: ResponseContext): Promise<GetCommentsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCommentsResponse", ""
            ) as GetCommentsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCommentsResponse", ""
            ) as GetCommentsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerMuteComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerMuteComment(response: ResponseContext): Promise<ToggleCommentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ToggleCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToggleCommentResponse", ""
            ) as ToggleCommentResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToggleCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToggleCommentResponse", ""
            ) as ToggleCommentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerPostComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerPostComment(response: ResponseContext): Promise<PostCommentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PostCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostCommentResponse", ""
            ) as PostCommentResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostCommentResponse", ""
            ) as PostCommentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerStartListening
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerStartListening(response: ResponseContext): Promise<StartListeningToCommentsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: StartListeningToCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StartListeningToCommentsResponse", ""
            ) as StartListeningToCommentsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StartListeningToCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StartListeningToCommentsResponse", ""
            ) as StartListeningToCommentsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerStopListening
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerStopListening(response: ResponseContext): Promise<StopListeningToCommentsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: StopListeningToCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StopListeningToCommentsResponse", ""
            ) as StopListeningToCommentsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StopListeningToCommentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StopListeningToCommentsResponse", ""
            ) as StopListeningToCommentsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentsControllerUnmuteComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentsControllerUnmuteComment(response: ResponseContext): Promise<ToggleCommentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ToggleCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToggleCommentResponse", ""
            ) as ToggleCommentResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToggleCommentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToggleCommentResponse", ""
            ) as ToggleCommentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
