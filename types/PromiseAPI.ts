import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { CommentsResponse } from '../models/CommentsResponse';
import { CommentsResponseUser } from '../models/CommentsResponseUser';
import { CreateAndStartLiveAccountDetailsResponse } from '../models/CreateAndStartLiveAccountDetailsResponse';
import { CreateAndStartLiveRequest } from '../models/CreateAndStartLiveRequest';
import { CreateAndStartLiveResponse } from '../models/CreateAndStartLiveResponse';
import { GetAuthoriseUrlRequest } from '../models/GetAuthoriseUrlRequest';
import { GetCommentsResponse } from '../models/GetCommentsResponse';
import { HttpExceptionResponse } from '../models/HttpExceptionResponse';
import { PostCommentRequest } from '../models/PostCommentRequest';
import { PostCommentResponse } from '../models/PostCommentResponse';
import { Redirect } from '../models/Redirect';
import { SocialNetworkAccount } from '../models/SocialNetworkAccount';
import { SocialNetworkDetail } from '../models/SocialNetworkDetail';
import { SocialNetworkResponse } from '../models/SocialNetworkResponse';
import { StartListeningToCommentsAccountDetailsResponse } from '../models/StartListeningToCommentsAccountDetailsResponse';
import { StartListeningToCommentsRequest } from '../models/StartListeningToCommentsRequest';
import { StartListeningToCommentsResponse } from '../models/StartListeningToCommentsResponse';
import { StopListeningToCommentsAccountDetailsResponse } from '../models/StopListeningToCommentsAccountDetailsResponse';
import { StopListeningToCommentsRequest } from '../models/StopListeningToCommentsRequest';
import { StopListeningToCommentsResponse } from '../models/StopListeningToCommentsResponse';
import { StopLiveDetailsResponse } from '../models/StopLiveDetailsResponse';
import { StopLiveRequest } from '../models/StopLiveRequest';
import { StopLiveResponse } from '../models/StopLiveResponse';
import { ToggleCommentRequest } from '../models/ToggleCommentRequest';
import { ToggleCommentResponse } from '../models/ToggleCommentResponse';
import { ToggleCommentResponseDetails } from '../models/ToggleCommentResponseDetails';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get social account information logged from user account
     * @param xApiKey 
     * @param userExternalId The user\&#39;s unique identifier on your system. The same of you use to authorise-url endpoint.
     * @param uuid The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
     */
    public socialNetworkAccountControllerGetAccount(xApiKey: string, userExternalId: string, uuid: string, _options?: Configuration): Promise<SocialNetworkAccount> {
        const result = this.api.socialNetworkAccountControllerGetAccount(xApiKey, userExternalId, uuid, _options);
        return result.toPromise();
    }

    /**
     * Add a new social network account (e.g instagram account)
     * @param xApiKey 
     * @param network The social network code
     * @param getAuthoriseUrlRequest 
     */
    public socialNetworkAccountControllerGetAuthoriseUrl(xApiKey: string, network: string, getAuthoriseUrlRequest: GetAuthoriseUrlRequest, _options?: Configuration): Promise<Redirect> {
        const result = this.api.socialNetworkAccountControllerGetAuthoriseUrl(xApiKey, network, getAuthoriseUrlRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCommentsApi } from './ObservableAPI';

import { CommentsApiRequestFactory, CommentsApiResponseProcessor} from "../apis/CommentsApi";
export class PromiseCommentsApi {
    private api: ObservableCommentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsApiRequestFactory,
        responseProcessor?: CommentsApiResponseProcessor
    ) {
        this.api = new ObservableCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of comments (call it every minute)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param lastCommentTimestamp The timestamp of the last comment received. If requesting for the first time, you can send 0
     */
    public commentsControllerGetComments(xApiKey: string, uuid: string, lastCommentTimestamp: number, _options?: Configuration): Promise<GetCommentsResponse> {
        const result = this.api.commentsControllerGetComments(xApiKey, uuid, lastCommentTimestamp, _options);
        return result.toPromise();
    }

    /**
     * Mute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public commentsControllerMuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Promise<ToggleCommentResponse> {
        const result = this.api.commentsControllerMuteComment(xApiKey, uuid, toggleCommentRequest, _options);
        return result.toPromise();
    }

    /**
     * Post a comment into the live stream (all accounts)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param postCommentRequest 
     */
    public commentsControllerPostComment(xApiKey: string, uuid: string, postCommentRequest: PostCommentRequest, _options?: Configuration): Promise<PostCommentResponse> {
        const result = this.api.commentsControllerPostComment(xApiKey, uuid, postCommentRequest, _options);
        return result.toPromise();
    }

    /**
     * Start listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param startListeningToCommentsRequest 
     */
    public commentsControllerStartListening(xApiKey: string, uuid: string, startListeningToCommentsRequest: StartListeningToCommentsRequest, _options?: Configuration): Promise<StartListeningToCommentsResponse> {
        const result = this.api.commentsControllerStartListening(xApiKey, uuid, startListeningToCommentsRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopListeningToCommentsRequest 
     */
    public commentsControllerStopListening(xApiKey: string, uuid: string, stopListeningToCommentsRequest: StopListeningToCommentsRequest, _options?: Configuration): Promise<StopListeningToCommentsResponse> {
        const result = this.api.commentsControllerStopListening(xApiKey, uuid, stopListeningToCommentsRequest, _options);
        return result.toPromise();
    }

    /**
     * Unmute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public commentsControllerUnmuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Promise<ToggleCommentResponse> {
        const result = this.api.commentsControllerUnmuteComment(xApiKey, uuid, toggleCommentRequest, _options);
        return result.toPromise();
    }


}



import { ObservableLiveStreamsApi } from './ObservableAPI';

import { LiveStreamsApiRequestFactory, LiveStreamsApiResponseProcessor} from "../apis/LiveStreamsApi";
export class PromiseLiveStreamsApi {
    private api: ObservableLiveStreamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LiveStreamsApiRequestFactory,
        responseProcessor?: LiveStreamsApiResponseProcessor
    ) {
        this.api = new ObservableLiveStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start a live stream, return the stream key
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param createAndStartLiveRequest 
     */
    public liveStreamsControllerCreateAndStartLive(xApiKey: string, uuid: string, createAndStartLiveRequest: CreateAndStartLiveRequest, _options?: Configuration): Promise<CreateAndStartLiveResponse> {
        const result = this.api.liveStreamsControllerCreateAndStartLive(xApiKey, uuid, createAndStartLiveRequest, _options);
        return result.toPromise();
    }

    /**
     * Stop a live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopLiveRequest 
     */
    public liveStreamsControllerStopLive(xApiKey: string, uuid: string, stopLiveRequest: StopLiveRequest, _options?: Configuration): Promise<StopLiveResponse> {
        const result = this.api.liveStreamsControllerStopLive(xApiKey, uuid, stopLiveRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSocialNetworksApi } from './ObservableAPI';

import { SocialNetworksApiRequestFactory, SocialNetworksApiResponseProcessor} from "../apis/SocialNetworksApi";
export class PromiseSocialNetworksApi {
    private api: ObservableSocialNetworksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SocialNetworksApiRequestFactory,
        responseProcessor?: SocialNetworksApiResponseProcessor
    ) {
        this.api = new ObservableSocialNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all social network integrations available
     * @param xApiKey 
     */
    public socialNetworkControllerGetAllActive(xApiKey: string, _options?: Configuration): Promise<SocialNetworkResponse> {
        const result = this.api.socialNetworkControllerGetAllActive(xApiKey, _options);
        return result.toPromise();
    }


}



