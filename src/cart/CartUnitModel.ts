import Model, { PriceModel } from "../models";

/**
 * A single cart item object.
 */
class CartUnitModel extends Model {

    product: string;

    quantity: number;

    netPrice: PriceModel | null;

    grossPrice: PriceModel | null;
}

export default CartUnitModel;
