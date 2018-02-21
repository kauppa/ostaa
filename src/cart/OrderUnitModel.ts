import Model from "../models";
import UnitTaxModel from "./UnitTaxModel";

/**
 * A unit of cart/order containing the item, quantity, price and tax information.
 */
class OrderUnitModel extends Model {

    product: string;

    quantity: number;

    netPrice: number | undefined;

    tax: UnitTaxModel | undefined;

    grossPrice: number | undefined;
}

export default OrderUnitModel;
