import log from "tipu";

/**
 * Configuration resource for Ostaa.
 */
class Config {

    /**
     * Access token for authenticating against the Kauppa instance.
     * May also be used internally to identify which Kauppa instance
     * to direct to.
     */
    accessToken: string | null | undefined;

    /**
     * Domain where Kauppa instance is hosted (e.g. kauppa.naamio.cloud).
     */
    domain: string | null | undefined;

    /**
     * Endpoint relative to the domain where the APIs are located.
     *
     * If Kauppa is configured in distributed mode where APIs are
     * located in separate public URLs, then multiple clients can
     * be built to point at the various URLs, rather than using
     * a single client throughout the application.
     */
    endpoint: string = "";

    /**
     * Flag to indicate whether a secure connection should be established.
     */
    secureConnection: boolean = false;
}

export default Config;
