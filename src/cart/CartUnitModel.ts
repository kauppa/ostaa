import Model from "../models";

/**
 * Cart unit containing the product and quantity.
 */
class CartUnitModel<Product> extends Model {

    product: Product;

    quantity: string;
}

export default CartUnitModel;
