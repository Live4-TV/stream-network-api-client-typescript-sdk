## live4tv_stream_networks_api_typescript@1.0.0

Omnichannel for live streaming on social networks.

We're glad that you chose to use Live4.tv's API for managing your connection with social networks (currently Instagram).

We understand that Instagram currently restricts users from conducting live broadcasts without their official app.
However, our innovative API empowers users to go live on Instagram without relying on the app itself.       
By leveraging our API, users gain access to a stream key, enabling them to seamlessly transmit their live broadcasts using popular software like OBS (Open Broadcaster Software).       
This breakthrough feature provides users with the freedom to connect with their audience and share captivating live content on Instagram, all without the constraints of the official app.



### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

Navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install live4tv_stream_networks_api_typescript@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Usage

Below code snippet shows exemplary usage of the configuration and the API based 
on the typical `PetStore` example used for OpenAPI. 

```
import * as your_api from 'your_api_package'

// Covers all auth methods included in your OpenAPI yaml definition
const authConfig: your_api.AuthMethodsConfiguration = {
    "api_key": "YOUR_API_KEY"
}

// Implements a simple middleware to modify requests before (`pre`) they are sent
// and after (`post`) they have been received 
class Test implements your_api.Middleware {
    pre(context: your_api.RequestContext): Promise<your_api.RequestContext> {
        // Modify context here and return
        return Promise.resolve(context);
    }

    post(context: your_api.ResponseContext): Promise<your_api.ResponseContext> {
        return Promise.resolve(context);
    }

}

// Create configuration parameter object
const configurationParameters = {
    httpApi: new your_api.JQueryHttpLibrary(), // Can also be ignored - default is usually fine
    baseServer: your_api.servers[0], // First server is default
    authMethods: authConfig, // No auth is default
    promiseMiddleware: [new Test()],
}

// Convert to actual configuration
const config = your_api.createConfiguration(configurationParameters);

// Use configuration with your_api
const api = new your_api.PetApi(config);
your_api.Pet p = new your_api.Pet();
p.name = "My new pet";
p.photoUrls = [];
p.tags = [];
p.status = "available";
Promise<your_api.Pet> createdPet = api.addPet(p);

```
