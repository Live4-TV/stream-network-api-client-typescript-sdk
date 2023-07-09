/**
 * Live4.tv - Stream Networks API
 * Omnichannel for live streaming on social networks  We\'re glad that you chose to use Live4.tv\'s API for managing your connection with social networks (currently Instagram).            We understand that Instagram currently restricts users from conducting live broadcasts without their official app.           However, our innovative API empowers users to go live on Instagram without relying on the app itself.        By leveraging our API, users gain access to a stream key, enabling them to seamlessly transmit their live broadcasts using popular software like OBS (Open Broadcaster Software).        This breakthrough feature provides users with the freedom to connect with their audience and share captivating live content on Instagram, all without the constraints of the official app.  The login flow:  ![login flow image](https://api-stream-network.live4.tv/mermaid-diagram-login-flow.png \"Login flow image\") 
 *
 * OpenAPI spec version: 1.0
 * Contact: contato@live4.tv
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* The user who sent the comment
*/
export class CommentsResponseUser {
    /**
    * The unique identifier for the comment
    */
    'uuid': string;
    /**
    * The social network where the comment was sent to
    */
    'socialNetwork': string;
    /**
    * The message of the comment
    */
    'message': string;
    /**
    * The timestamp which the comment was sent
    */
    'sentAt': number;
    'user': CommentsResponseUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "socialNetwork",
            "baseName": "socialNetwork",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentAt",
            "baseName": "sentAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "CommentsResponseUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommentsResponseUser.attributeTypeMap;
    }

    public constructor() {
    }
}
