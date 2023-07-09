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

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiSocialNetworkAccountControllerGetAccountRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApisocialNetworkAccountControllerGetAccount
     */
    xApiKey: string
    /**
     * The user\&#39;s unique identifier on your system. The same of you use to authorise-url endpoint.
     * @type string
     * @memberof AccountsApisocialNetworkAccountControllerGetAccount
     */
    userExternalId: string
    /**
     * The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
     * @type string
     * @memberof AccountsApisocialNetworkAccountControllerGetAccount
     */
    uuid: string
}

export interface AccountsApiSocialNetworkAccountControllerGetAuthoriseUrlRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApisocialNetworkAccountControllerGetAuthoriseUrl
     */
    xApiKey: string
    /**
     * The social network code
     * @type string
     * @memberof AccountsApisocialNetworkAccountControllerGetAuthoriseUrl
     */
    network: string
    /**
     * 
     * @type GetAuthoriseUrlRequest
     * @memberof AccountsApisocialNetworkAccountControllerGetAuthoriseUrl
     */
    getAuthoriseUrlRequest: GetAuthoriseUrlRequest
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get social account information logged from user account
     * @param param the request object
     */
    public socialNetworkAccountControllerGetAccount(param: AccountsApiSocialNetworkAccountControllerGetAccountRequest, options?: Configuration): Promise<SocialNetworkAccount> {
        return this.api.socialNetworkAccountControllerGetAccount(param.xApiKey, param.userExternalId, param.uuid,  options).toPromise();
    }

    /**
     * Add a new social network account (e.g instagram account)
     * @param param the request object
     */
    public socialNetworkAccountControllerGetAuthoriseUrl(param: AccountsApiSocialNetworkAccountControllerGetAuthoriseUrlRequest, options?: Configuration): Promise<Redirect> {
        return this.api.socialNetworkAccountControllerGetAuthoriseUrl(param.xApiKey, param.network, param.getAuthoriseUrlRequest,  options).toPromise();
    }

}

import { ObservableCommentsApi } from "./ObservableAPI";
import { CommentsApiRequestFactory, CommentsApiResponseProcessor} from "../apis/CommentsApi";

export interface CommentsApiCommentsControllerGetCommentsRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerGetComments
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerGetComments
     */
    uuid: string
    /**
     * The timestamp of the last comment received. If requesting for the first time, you can send 0
     * @type number
     * @memberof CommentsApicommentsControllerGetComments
     */
    lastCommentTimestamp: number
}

export interface CommentsApiCommentsControllerMuteCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerMuteComment
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerMuteComment
     */
    uuid: string
    /**
     * 
     * @type ToggleCommentRequest
     * @memberof CommentsApicommentsControllerMuteComment
     */
    toggleCommentRequest: ToggleCommentRequest
}

export interface CommentsApiCommentsControllerPostCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerPostComment
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerPostComment
     */
    uuid: string
    /**
     * 
     * @type PostCommentRequest
     * @memberof CommentsApicommentsControllerPostComment
     */
    postCommentRequest: PostCommentRequest
}

export interface CommentsApiCommentsControllerStartListeningRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerStartListening
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerStartListening
     */
    uuid: string
    /**
     * 
     * @type StartListeningToCommentsRequest
     * @memberof CommentsApicommentsControllerStartListening
     */
    startListeningToCommentsRequest: StartListeningToCommentsRequest
}

export interface CommentsApiCommentsControllerStopListeningRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerStopListening
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerStopListening
     */
    uuid: string
    /**
     * 
     * @type StopListeningToCommentsRequest
     * @memberof CommentsApicommentsControllerStopListening
     */
    stopListeningToCommentsRequest: StopListeningToCommentsRequest
}

export interface CommentsApiCommentsControllerUnmuteCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentsApicommentsControllerUnmuteComment
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof CommentsApicommentsControllerUnmuteComment
     */
    uuid: string
    /**
     * 
     * @type ToggleCommentRequest
     * @memberof CommentsApicommentsControllerUnmuteComment
     */
    toggleCommentRequest: ToggleCommentRequest
}

export class ObjectCommentsApi {
    private api: ObservableCommentsApi

    public constructor(configuration: Configuration, requestFactory?: CommentsApiRequestFactory, responseProcessor?: CommentsApiResponseProcessor) {
        this.api = new ObservableCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of comments (call it every minute)
     * @param param the request object
     */
    public commentsControllerGetComments(param: CommentsApiCommentsControllerGetCommentsRequest, options?: Configuration): Promise<GetCommentsResponse> {
        return this.api.commentsControllerGetComments(param.xApiKey, param.uuid, param.lastCommentTimestamp,  options).toPromise();
    }

    /**
     * Mute comments to the live stream
     * @param param the request object
     */
    public commentsControllerMuteComment(param: CommentsApiCommentsControllerMuteCommentRequest, options?: Configuration): Promise<ToggleCommentResponse> {
        return this.api.commentsControllerMuteComment(param.xApiKey, param.uuid, param.toggleCommentRequest,  options).toPromise();
    }

    /**
     * Post a comment into the live stream (all accounts)
     * @param param the request object
     */
    public commentsControllerPostComment(param: CommentsApiCommentsControllerPostCommentRequest, options?: Configuration): Promise<PostCommentResponse> {
        return this.api.commentsControllerPostComment(param.xApiKey, param.uuid, param.postCommentRequest,  options).toPromise();
    }

    /**
     * Start listening comments of the live stream
     * @param param the request object
     */
    public commentsControllerStartListening(param: CommentsApiCommentsControllerStartListeningRequest, options?: Configuration): Promise<StartListeningToCommentsResponse> {
        return this.api.commentsControllerStartListening(param.xApiKey, param.uuid, param.startListeningToCommentsRequest,  options).toPromise();
    }

    /**
     * Stop listening comments of the live stream
     * @param param the request object
     */
    public commentsControllerStopListening(param: CommentsApiCommentsControllerStopListeningRequest, options?: Configuration): Promise<StopListeningToCommentsResponse> {
        return this.api.commentsControllerStopListening(param.xApiKey, param.uuid, param.stopListeningToCommentsRequest,  options).toPromise();
    }

    /**
     * Unmute comments to the live stream
     * @param param the request object
     */
    public commentsControllerUnmuteComment(param: CommentsApiCommentsControllerUnmuteCommentRequest, options?: Configuration): Promise<ToggleCommentResponse> {
        return this.api.commentsControllerUnmuteComment(param.xApiKey, param.uuid, param.toggleCommentRequest,  options).toPromise();
    }

}

import { ObservableLiveStreamsApi } from "./ObservableAPI";
import { LiveStreamsApiRequestFactory, LiveStreamsApiResponseProcessor} from "../apis/LiveStreamsApi";

export interface LiveStreamsApiLiveStreamsControllerCreateAndStartLiveRequest {
    /**
     * 
     * @type string
     * @memberof LiveStreamsApiliveStreamsControllerCreateAndStartLive
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof LiveStreamsApiliveStreamsControllerCreateAndStartLive
     */
    uuid: string
    /**
     * 
     * @type CreateAndStartLiveRequest
     * @memberof LiveStreamsApiliveStreamsControllerCreateAndStartLive
     */
    createAndStartLiveRequest: CreateAndStartLiveRequest
}

export interface LiveStreamsApiLiveStreamsControllerStopLiveRequest {
    /**
     * 
     * @type string
     * @memberof LiveStreamsApiliveStreamsControllerStopLive
     */
    xApiKey: string
    /**
     * The uuid of the live stream
     * @type string
     * @memberof LiveStreamsApiliveStreamsControllerStopLive
     */
    uuid: string
    /**
     * 
     * @type StopLiveRequest
     * @memberof LiveStreamsApiliveStreamsControllerStopLive
     */
    stopLiveRequest: StopLiveRequest
}

export class ObjectLiveStreamsApi {
    private api: ObservableLiveStreamsApi

    public constructor(configuration: Configuration, requestFactory?: LiveStreamsApiRequestFactory, responseProcessor?: LiveStreamsApiResponseProcessor) {
        this.api = new ObservableLiveStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Start a live stream, return the stream key
     * @param param the request object
     */
    public liveStreamsControllerCreateAndStartLive(param: LiveStreamsApiLiveStreamsControllerCreateAndStartLiveRequest, options?: Configuration): Promise<CreateAndStartLiveResponse> {
        return this.api.liveStreamsControllerCreateAndStartLive(param.xApiKey, param.uuid, param.createAndStartLiveRequest,  options).toPromise();
    }

    /**
     * Stop a live stream
     * @param param the request object
     */
    public liveStreamsControllerStopLive(param: LiveStreamsApiLiveStreamsControllerStopLiveRequest, options?: Configuration): Promise<StopLiveResponse> {
        return this.api.liveStreamsControllerStopLive(param.xApiKey, param.uuid, param.stopLiveRequest,  options).toPromise();
    }

}

import { ObservableSocialNetworksApi } from "./ObservableAPI";
import { SocialNetworksApiRequestFactory, SocialNetworksApiResponseProcessor} from "../apis/SocialNetworksApi";

export interface SocialNetworksApiSocialNetworkControllerGetAllActiveRequest {
    /**
     * 
     * @type string
     * @memberof SocialNetworksApisocialNetworkControllerGetAllActive
     */
    xApiKey: string
}

export class ObjectSocialNetworksApi {
    private api: ObservableSocialNetworksApi

    public constructor(configuration: Configuration, requestFactory?: SocialNetworksApiRequestFactory, responseProcessor?: SocialNetworksApiResponseProcessor) {
        this.api = new ObservableSocialNetworksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all social network integrations available
     * @param param the request object
     */
    public socialNetworkControllerGetAllActive(param: SocialNetworksApiSocialNetworkControllerGetAllActiveRequest, options?: Configuration): Promise<SocialNetworkResponse> {
        return this.api.socialNetworkControllerGetAllActive(param.xApiKey,  options).toPromise();
    }

}
