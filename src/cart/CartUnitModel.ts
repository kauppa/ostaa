import Model, { PriceModel } from "../models";
import UnitTaxModel from "./UnitTaxModel";

/**
 * A single cart item object.
 */
class CartUnitModel extends Model {

    product: string;

    quantity: number;

    netPrice: PriceModel | undefined;

    tax: UnitTaxModel | undefined;

    grossPrice: PriceModel | undefined;
}

export default CartUnitModel;
