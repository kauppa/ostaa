import * as log from '../util/logging';

import Client from '../client';

/** 
 * Base Resource object for querying and persisting data.
 */
class Resource {

    /**
     * Client to use when querying or persisting resources.
     */
    private client: Client;

    /**
     * Instantiates a new Resource object for querying and persisting
     * data.
     * 
     * @param client Service client for instantiating resource.
     */
    constructor(client: Client) {
        this.client = client;
    }
}

export default Resource;