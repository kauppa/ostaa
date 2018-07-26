import Model from "../models";
import CartUnitModel from "./CartUnitModel";
import CouponResponse from "../coupons/CouponResponse";
import { ProductResponse } from "../products";
import AddressModel from "../customers/AddressModel";

/**
 * Cart response object returned by the service.
 */
class CartResponse extends Model {

    id: string;

    items: CartUnitModel<ProductResponse>[];

    currency: string | undefined;

    coupons: CouponResponse[];

    netPrice: number;

    grossPrice: number;

    shippingAddress: AddressModel | undefined;

    billingAddress: AddressModel | undefined;
}

export default CartResponse;
