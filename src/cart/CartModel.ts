import Model from "../models";
import CartUnitModel from "./CartUnitModel";
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
}

export default CartModel;
