import Model from "../models";
import AddressModel from "./AddressModel";

/**
 * Checkout data required for checking out cart and placing the order.
 */
class CheckoutModel extends Model {

    shippingAddress: AddressModel | undefined = new AddressModel();

    billingAddress: AddressModel | undefined = new AddressModel();

    shippingAddressAt: number | undefined;

    billingAddressAt: number | undefined;
}

export default CheckoutModel;
