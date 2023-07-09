export * from '../models/CommentsResponse';
export * from '../models/CommentsResponseUser';
export * from '../models/CreateAndStartLiveAccountDetailsResponse';
export * from '../models/CreateAndStartLiveRequest';
export * from '../models/CreateAndStartLiveResponse';
export * from '../models/GetAuthoriseUrlRequest';
export * from '../models/GetCommentsResponse';
export * from '../models/HttpExceptionResponse';
export * from '../models/PostCommentRequest';
export * from '../models/PostCommentResponse';
export * from '../models/Redirect';
export * from '../models/SocialNetworkAccount';
export * from '../models/SocialNetworkDetail';
export * from '../models/SocialNetworkResponse';
export * from '../models/StartListeningToCommentsAccountDetailsResponse';
export * from '../models/StartListeningToCommentsRequest';
export * from '../models/StartListeningToCommentsResponse';
export * from '../models/StopListeningToCommentsAccountDetailsResponse';
export * from '../models/StopListeningToCommentsRequest';
export * from '../models/StopListeningToCommentsResponse';
export * from '../models/StopLiveDetailsResponse';
export * from '../models/StopLiveRequest';
export * from '../models/StopLiveResponse';
export * from '../models/ToggleCommentRequest';
export * from '../models/ToggleCommentResponse';
export * from '../models/ToggleCommentResponseDetails';

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

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "CommentsResponse": CommentsResponse,
    "CommentsResponseUser": CommentsResponseUser,
    "CreateAndStartLiveAccountDetailsResponse": CreateAndStartLiveAccountDetailsResponse,
    "CreateAndStartLiveRequest": CreateAndStartLiveRequest,
    "CreateAndStartLiveResponse": CreateAndStartLiveResponse,
    "GetAuthoriseUrlRequest": GetAuthoriseUrlRequest,
    "GetCommentsResponse": GetCommentsResponse,
    "HttpExceptionResponse": HttpExceptionResponse,
    "PostCommentRequest": PostCommentRequest,
    "PostCommentResponse": PostCommentResponse,
    "Redirect": Redirect,
    "SocialNetworkAccount": SocialNetworkAccount,
    "SocialNetworkDetail": SocialNetworkDetail,
    "SocialNetworkResponse": SocialNetworkResponse,
    "StartListeningToCommentsAccountDetailsResponse": StartListeningToCommentsAccountDetailsResponse,
    "StartListeningToCommentsRequest": StartListeningToCommentsRequest,
    "StartListeningToCommentsResponse": StartListeningToCommentsResponse,
    "StopListeningToCommentsAccountDetailsResponse": StopListeningToCommentsAccountDetailsResponse,
    "StopListeningToCommentsRequest": StopListeningToCommentsRequest,
    "StopListeningToCommentsResponse": StopListeningToCommentsResponse,
    "StopLiveDetailsResponse": StopLiveDetailsResponse,
    "StopLiveRequest": StopLiveRequest,
    "StopLiveResponse": StopLiveResponse,
    "ToggleCommentRequest": ToggleCommentRequest,
    "ToggleCommentResponse": ToggleCommentResponse,
    "ToggleCommentResponseDetails": ToggleCommentResponseDetails,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
