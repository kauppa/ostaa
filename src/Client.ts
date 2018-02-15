import * as log from './util/logging';

import Config from './Config';

/**
 * Storefront client for Kauppa.
 */
class Client {

    /**
     * Primary entry point for building a new Client.
     */
    public static buildClient() {
        log.debug(`Building client`);
    }

    /**
     * @constructs Client
     * @param {Config} config An instance of {@link Config} used to configure the Client.
     */
    private constructor(config: Config) {
        
    }
}

export default Client;