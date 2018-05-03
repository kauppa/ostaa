import Model from "../models";
import CartUnitModel from "./CartUnitModel";
import CheckoutModel from "./CheckoutModel";
import PriceModel from "../models";

/**
 * Cart object containing cart items and coupons.
 */
class CartModel extends Model {

    id: string;

    updatedAt: string;

    items: CartUnitModel[] = [];

    netPrice: PriceModel | undefined;

    grossPrice: PriceModel | undefined;

    checkoutData: CheckoutModel | undefined = new CheckoutModel();
}

export default CartModel;
