// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetAuthoriseUrlRequest } from '../models/GetAuthoriseUrlRequest';
import { HttpExceptionResponse } from '../models/HttpExceptionResponse';
import { Redirect } from '../models/Redirect';
import { SocialNetworkAccount } from '../models/SocialNetworkAccount';

/**
 * no description
 */
export class AccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get social account information logged from user account
     * @param xApiKey 
     * @param userExternalId The user\&#39;s unique identifier on your system. The same of you use to authorise-url endpoint.
     * @param uuid The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
     */
    public async socialNetworkAccountControllerGetAccount(xApiKey: string, userExternalId: string, uuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAccount", "xApiKey");
        }


        // verify required parameter 'userExternalId' is not null or undefined
        if (userExternalId === null || userExternalId === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAccount", "userExternalId");
        }


        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAccount", "uuid");
        }


        // Path Params
        const localVarPath = '/api/v1/social-network-account/{userExternalId}/{uuid}'
            .replace('{' + 'userExternalId' + '}', encodeURIComponent(String(userExternalId)))
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-api-key", ObjectSerializer.serialize(xApiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a new social network account (e.g instagram account)
     * @param xApiKey 
     * @param network The social network code
     * @param getAuthoriseUrlRequest 
     */
    public async socialNetworkAccountControllerGetAuthoriseUrl(xApiKey: string, network: string, getAuthoriseUrlRequest: GetAuthoriseUrlRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAuthoriseUrl", "xApiKey");
        }


        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAuthoriseUrl", "network");
        }


        // verify required parameter 'getAuthoriseUrlRequest' is not null or undefined
        if (getAuthoriseUrlRequest === null || getAuthoriseUrlRequest === undefined) {
            throw new RequiredError("AccountsApi", "socialNetworkAccountControllerGetAuthoriseUrl", "getAuthoriseUrlRequest");
        }


        // Path Params
        const localVarPath = '/api/v1/social-network-account/{network}/authorise-url'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)));

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
            ObjectSerializer.serialize(getAuthoriseUrlRequest, "GetAuthoriseUrlRequest", ""),
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

export class AccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to socialNetworkAccountControllerGetAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async socialNetworkAccountControllerGetAccount(response: ResponseContext): Promise<SocialNetworkAccount > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SocialNetworkAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SocialNetworkAccount", ""
            ) as SocialNetworkAccount;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpExceptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpExceptionResponse", ""
            ) as HttpExceptionResponse;
            throw new ApiException<HttpExceptionResponse>(response.httpStatusCode, "The social network account is not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SocialNetworkAccount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SocialNetworkAccount", ""
            ) as SocialNetworkAccount;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to socialNetworkAccountControllerGetAuthoriseUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async socialNetworkAccountControllerGetAuthoriseUrl(response: ResponseContext): Promise<Redirect > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Redirect = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Redirect", ""
            ) as Redirect;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpExceptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpExceptionResponse", ""
            ) as HttpExceptionResponse;
            throw new ApiException<HttpExceptionResponse>(response.httpStatusCode, "The social network is not supported", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Redirect = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Redirect", ""
            ) as Redirect;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
