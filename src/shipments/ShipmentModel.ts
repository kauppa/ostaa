import { Model } from "../models";
import { AddressModel } from "../customers";
import CartUnitModel from "../cart/CartUnitModel";

/**
 * Shipment model for representing shipments in orders.
 */
class ShipmentModel extends Model {

    id: string;

    createdOn: string;

    updatedAt: string;

    orderId: string;

    address: AddressModel;

    items: CartUnitModel<string>[];
}

export default ShipmentModel;
