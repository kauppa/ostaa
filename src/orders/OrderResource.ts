import log from "tipu";

import Model from "../models";
import Resource from "../resources";
import OrderResponse from "./OrderResponse";
import PickupRequest from "./PickupRequest";

/**
 * Order resources for persisting and querying orders.
 */
class OrderResource extends Resource {

    /**
     * Fetches all of the available orders.
     *
     * @param first When paging results, this allows the amount of items in the
     *              first page to be specified. Defaults to 20.
     * @returns A promise with a list of `OrderResponse` entities.
     */
    fetchAll(first = 20): Promise<OrderResponse[]> {
        return this.client.getAll(`/orders`);
    }

    /**
     * Fetches a single order based on the ID provided.
     *
     * @param id Identity of the order to retrieve.
     * @returns A promise with a single `OrderResponse` object.
     */
    fetch(id: string): Promise<OrderResponse> {
        return this.client.get(`/orders/${id}`);
    }

    /**
     * Cancels a single order from the store service.
     *
     * @param id Identity of the order to cancelled.
     * @returns A promise with `OrderResponse` object.
     */
    cancel(id: string): Promise<OrderResponse> {
        return this.client.put(`/orders/${id}/cancel`, new Model());
    }

    /**
     * Returns some/all items in an order.
     *
     * @param id Identity of the order to be returned.
     * @param data `PickupRequest` object containing return information.
     * @returns A promise with `OrderResponse` object.
     */
    return(id: string, data: PickupRequest): Promise<OrderResponse> {
        return this.client.post(`/orders/${id}/returns`, data);
    }
}

export default OrderResource;
