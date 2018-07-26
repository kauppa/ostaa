import Model, { MeasurementModel } from "../models";
import UnitTaxModel from "../tax/UnitTaxModel";
import OrderUnitStatusModel from "./OrderUnitStatusModel";

/**
 * A unit of cart/order containing the item, quantity, price and tax information.
 */
class OrderUnitModel<Product> extends Model {

    product: Product;

    quantity: number;

    tax: UnitTaxModel;

    netPrice: number;

    netWeight: MeasurementModel;

    grossPrice: number;

    status: OrderUnitStatusModel;
}

export default OrderUnitModel;
