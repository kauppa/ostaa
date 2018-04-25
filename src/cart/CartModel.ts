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

    netPrice: PriceModel | null = null;

    grossPrice: PriceModel | null = null;
}

export default CartModel;
