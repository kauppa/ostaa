import log from "tipu";

import Config from "./Config";
import CartResource from "./cart/CartResource";
import CustomerResource from "./customers/CustomerResource";
import OrderResource from "./orders/OrderResource";
import ProductResource from "./products/ProductResource";
import VariantResource from "./products/VariantResource";
import { Model } from "./models";

/**
 * Admin client for Kauppa.
 */
class Client {

    /**
     * Primary entry point for building a new Client.
     */
    public static buildClient(config: Config): Client {
        log.debug(`Building client`);

        return new Client(config);
    }

    /**
     * Cart resource for persisting and fetching `Cart` information.
     */
    readonly cart: CartResource;

    /**
     * Customer resource for persisting and fetching `Customer` information.
     */
    readonly customer: CustomerResource;

    /**
     * Product resource controller for fetching `Product` information.
     */
    readonly products: ProductResource;

    /**
     * Orders resource controller for fetching `Order` information.
     */
    readonly orders: OrderResource;

    /**
     * Category resource controller for fetching `Category` information.
     */
    readonly variants: VariantResource;

    /**
     * Normalized URL for the API endpoints (e.g. kauppa.naamio.cloud/api).
     */
    readonly url: String;

    /**
     * @constructs Client
     * @param {Config} config An instance of {@link Config} used to configure the Client.
     */
    private constructor(config: Config) {
        const version = `0.0.0`;
        let protocol = config.secureConnection ? "https" : "http";
        this.url = `${protocol}://${config.domain}${config.endpoint}`;

        const headers = {
            "X-SDK-Variant": "javascript",
            "X-SDK-Version": version,
            "X-Kauppa-Access-Token": config.accessToken
        }

        this.cart = new CartResource(this);
        this.customer = new CustomerResource(this);
        this.products = new ProductResource(this);
        this.orders = new OrderResource(this);
        this.variants = new VariantResource(this);
    }

    /**
     * Performs a HTTP GET request to retrieve a single `Model`
     * from the service.
     *
     * @param endpoint Target URL endpoint for the HTTP GET request.
     * @returns A promise with a single `Model`.
     */
    get<T extends Model>(endpoint: string): Promise<T> {
        return fetch(`${this.url}${endpoint}`)
            .then((response) => {
                return response.json();
            });
    }

    /**
     * Performs a HTTP GET request to retrieve a list of `Model`
     * objects from the service.
     *
     * @param endpoint Target URL endpoint for the HTTP GET request.
     * @returns A promise with an array of `Model` objects.
     */
    getAll<T extends Model>(endpoint: string): Promise<T[]> {
        return fetch(`${this.url}${endpoint}`)
            .then((response) => {
                return response.json();
            });
    }

    /**
     * Performs a HTTP POST request to create a `Model`
     * object in the service.
     *
     * @param endpoint Target URL endpoint for the HTTP POST request.
     * @param data `Model` data object to persist to the service.
     * @returns A promise with a single `Model` object.
     */
    post<T extends Model, U extends Model>(endpoint: string, data: T): Promise<U> {
        return fetch(`${this.url}${endpoint}`, {
            body: JSON.stringify(data),
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // *client, no-referrer
        }).then((response) => {
            return response.json();
        });
    }

    /**
     * Performs a HTTP PUT request to create a `Model`
     * object in the service.
     *
     * @param endpoint Target URL endpoint for the HTTP PUT request.
     * @param data `Model` data object to update on the service.
     * @returns A promise with a single `Model` object.
     */
    put<T extends Model, U extends Model>(endpoint: string, data: T): Promise<U> {
        return fetch(`${this.url}${endpoint}`, {
            body: JSON.stringify(data),
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // *client, no-referrer
        }).then((response) => {
            return response.json();
        });
    }

    /**
     * Performs a HTTP DELETE request to remove a `Model`
     * object from the service.
     *
     * @param endpoint Target URL endpoint for the HTTP DELETE request.
     * @param id Identity of the item in the service.
     * @returns A promise with a single `Model` of the object removed.
     */
    delete<T extends Model, U extends Model>(endpoint: string): Promise<U> {
        return fetch(`${this.url}${endpoint}`, {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // *client, no-referrer
        }).then((response) => {
            return response.json();
        });
    }
}

export default Client;
