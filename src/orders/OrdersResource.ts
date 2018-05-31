import log from "tipu";
import Resource from "../resources";
import OrderModel from "./OrderModel";

class OrdersResource extends Resource {
    /**
     * Fetches an order.
     *
     * @param id Order ID.
     * @returns A promise with a single `OrderModel` object.
     */
    fetch(id: string): Promise<OrderModel> {
        return this.client.get(`/orders/${id}`);
    }
}

export default OrdersResource;
