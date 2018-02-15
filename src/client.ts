import * as log from './util/logging';

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
    private constructor() {
    }
}

export default Client;