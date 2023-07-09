import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Get social account information logged from user account
     * @param xApiKey 
     * @param userExternalId The user\&#39;s unique identifier on your system. The same of you use to authorise-url endpoint.
     * @param uuid The reference to the new account that you can use to identify the account. The same of you use to authorise-url endpoint
     */
    public socialNetworkAccountControllerGetAccount(xApiKey: string, userExternalId: string, uuid: string, _options?: Configuration): Observable<SocialNetworkAccount> {
        const requestContextPromise = this.requestFactory.socialNetworkAccountControllerGetAccount(xApiKey, userExternalId, uuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.socialNetworkAccountControllerGetAccount(rsp)));
            }));
    }

    /**
     * Add a new social network account (e.g instagram account)
     * @param xApiKey 
     * @param network The social network code
     * @param getAuthoriseUrlRequest 
     */
    public socialNetworkAccountControllerGetAuthoriseUrl(xApiKey: string, network: string, getAuthoriseUrlRequest: GetAuthoriseUrlRequest, _options?: Configuration): Observable<Redirect> {
        const requestContextPromise = this.requestFactory.socialNetworkAccountControllerGetAuthoriseUrl(xApiKey, network, getAuthoriseUrlRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.socialNetworkAccountControllerGetAuthoriseUrl(rsp)));
            }));
    }

}

import { CommentsApiRequestFactory, CommentsApiResponseProcessor} from "../apis/CommentsApi";
export class ObservableCommentsApi {
    private requestFactory: CommentsApiRequestFactory;
    private responseProcessor: CommentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsApiRequestFactory,
        responseProcessor?: CommentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentsApiResponseProcessor();
    }

    /**
     * Get a list of comments (call it every minute)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param lastCommentTimestamp The timestamp of the last comment received. If requesting for the first time, you can send 0
     */
    public commentsControllerGetComments(xApiKey: string, uuid: string, lastCommentTimestamp: number, _options?: Configuration): Observable<GetCommentsResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerGetComments(xApiKey, uuid, lastCommentTimestamp, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerGetComments(rsp)));
            }));
    }

    /**
     * Mute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public commentsControllerMuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Observable<ToggleCommentResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerMuteComment(xApiKey, uuid, toggleCommentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerMuteComment(rsp)));
            }));
    }

    /**
     * Post a comment into the live stream (all accounts)
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param postCommentRequest 
     */
    public commentsControllerPostComment(xApiKey: string, uuid: string, postCommentRequest: PostCommentRequest, _options?: Configuration): Observable<PostCommentResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerPostComment(xApiKey, uuid, postCommentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerPostComment(rsp)));
            }));
    }

    /**
     * Start listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param startListeningToCommentsRequest 
     */
    public commentsControllerStartListening(xApiKey: string, uuid: string, startListeningToCommentsRequest: StartListeningToCommentsRequest, _options?: Configuration): Observable<StartListeningToCommentsResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerStartListening(xApiKey, uuid, startListeningToCommentsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerStartListening(rsp)));
            }));
    }

    /**
     * Stop listening comments of the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopListeningToCommentsRequest 
     */
    public commentsControllerStopListening(xApiKey: string, uuid: string, stopListeningToCommentsRequest: StopListeningToCommentsRequest, _options?: Configuration): Observable<StopListeningToCommentsResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerStopListening(xApiKey, uuid, stopListeningToCommentsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerStopListening(rsp)));
            }));
    }

    /**
     * Unmute comments to the live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param toggleCommentRequest 
     */
    public commentsControllerUnmuteComment(xApiKey: string, uuid: string, toggleCommentRequest: ToggleCommentRequest, _options?: Configuration): Observable<ToggleCommentResponse> {
        const requestContextPromise = this.requestFactory.commentsControllerUnmuteComment(xApiKey, uuid, toggleCommentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentsControllerUnmuteComment(rsp)));
            }));
    }

}

import { LiveStreamsApiRequestFactory, LiveStreamsApiResponseProcessor} from "../apis/LiveStreamsApi";
export class ObservableLiveStreamsApi {
    private requestFactory: LiveStreamsApiRequestFactory;
    private responseProcessor: LiveStreamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LiveStreamsApiRequestFactory,
        responseProcessor?: LiveStreamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LiveStreamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LiveStreamsApiResponseProcessor();
    }

    /**
     * Start a live stream, return the stream key
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param createAndStartLiveRequest 
     */
    public liveStreamsControllerCreateAndStartLive(xApiKey: string, uuid: string, createAndStartLiveRequest: CreateAndStartLiveRequest, _options?: Configuration): Observable<CreateAndStartLiveResponse> {
        const requestContextPromise = this.requestFactory.liveStreamsControllerCreateAndStartLive(xApiKey, uuid, createAndStartLiveRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.liveStreamsControllerCreateAndStartLive(rsp)));
            }));
    }

    /**
     * Stop a live stream
     * @param xApiKey 
     * @param uuid The uuid of the live stream
     * @param stopLiveRequest 
     */
    public liveStreamsControllerStopLive(xApiKey: string, uuid: string, stopLiveRequest: StopLiveRequest, _options?: Configuration): Observable<StopLiveResponse> {
        const requestContextPromise = this.requestFactory.liveStreamsControllerStopLive(xApiKey, uuid, stopLiveRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.liveStreamsControllerStopLive(rsp)));
            }));
    }

}

import { SocialNetworksApiRequestFactory, SocialNetworksApiResponseProcessor} from "../apis/SocialNetworksApi";
export class ObservableSocialNetworksApi {
    private requestFactory: SocialNetworksApiRequestFactory;
    private responseProcessor: SocialNetworksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SocialNetworksApiRequestFactory,
        responseProcessor?: SocialNetworksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SocialNetworksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SocialNetworksApiResponseProcessor();
    }

    /**
     * Get all social network integrations available
     * @param xApiKey 
     */
    public socialNetworkControllerGetAllActive(xApiKey: string, _options?: Configuration): Observable<SocialNetworkResponse> {
        const requestContextPromise = this.requestFactory.socialNetworkControllerGetAllActive(xApiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.socialNetworkControllerGetAllActive(rsp)));
            }));
    }

}
