import log from "tipu";
import Resource from "../resources";
import CartModel from "./CartModel";

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
        // FIXME: This will be changed soon.
        let data = cart.items;
        return this.client.put(`/cart/${id}/items`, data);
    }
}

export default CartResource;
