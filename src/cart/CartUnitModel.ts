import Model, { PriceModel } from "../models";

/**
 * A single cart item object.
 */
class CartUnitModel extends Model {

    product: string;

    quantity: number;

    netPrice: PriceModel | undefined;

    grossPrice: PriceModel | undefined;
}

export default CartUnitModel;
