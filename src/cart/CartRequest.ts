import Model from "../models";
import CartUnitModel from "./CartUnitModel";
import CheckoutModel from "./CheckoutModel";

/**
 * Cart request object for updating client's cart.
 */
class CartRequest extends Model {

    items: CartUnitModel<string>[] = [];

    coupons: string[] = [];

    checkoutData: CheckoutModel = new CheckoutModel();
}

export default CartRequest;
