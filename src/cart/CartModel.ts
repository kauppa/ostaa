import Model from "../models";
import OrderUnitModel from "../orders/OrderUnitModel";
import CheckoutModel from "./CheckoutModel";

/**
 * Cart object containing cart items and coupons.
 */
class CartModel extends Model {

    id: string;

    updatedAt: string;

    items: OrderUnitModel[] = [];

    currency: string;

    netPrice: number | undefined;

    grossPrice: number | undefined;

    checkoutData: CheckoutModel | undefined = new CheckoutModel();
}

export default CartModel;
