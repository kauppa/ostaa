import log from "tipu";

import Resource from "../resources";
import CartRequest from "./CartRequest";
import CartResponse from "./CartResponse";

/**
 * Cart resource for persisting and querying carts.
 */
class CartResource extends Resource {

    /**
     * Fetches a single cart based on the ID provided.
     *
     * @param id Identity of the cart to retrieve.
     * @returns A promise with a single `CartResponse` object.
     */
    fetch(id: string): Promise<CartResponse> {
        return this.client.get(`/carts/${id}`);
    }

    /**
     * Updates a single cart in the service.
     *
     * @param data Updated `CartRequest` to pass to the service.
     * @returns A promise with a single `CartResponse` object.
     */
    update(id: string, data: CartRequest): Promise<CartResponse> {
        return this.client.put(`/carts/${id}`, data);
    }
}

export default CartResource;
