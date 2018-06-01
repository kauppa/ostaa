import log from "tipu";
import Resource from "../resources";
import CartModel from "./CartModel";
import CheckoutModel from "./CheckoutModel";
import OrderModel from "../orders/OrderModel";

class CartResource extends Resource {
    /**
     * Fetches the cart for an user account.
     *
     * @param id Identity of the user.
     * @returns A promise with a single `CartModel` object.
     */
    fetch(id: string): Promise<CartModel> {
        return this.client.get(`/cart/${id}`);
    }

    /**
     * Update an user's cart in the cart service.
     *
     * @param id Identity of the user.
     * @param cart Updated `CartModel` to pass to the service.
     * @returns A promise with a single `CartModel` object.
     */
    update(id: string, cart: CartModel): Promise<CartModel> {
        return this.client.put(`/cart/${id}`, cart);
    }

    /**
     * Checkout this cart and place an order using the checkout data.
     *
     * @param id Identity of the user.
     * @returns A promise with a single `OrderModel` object.
     */
    checkout(id: string): Promise<OrderModel> {
        return this.client.put(`/cart/${id}/checkout`, {});
    }
}

export default CartResource;
