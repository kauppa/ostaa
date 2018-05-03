import Model, { PriceModel, MeasurementModel } from "../models";
import AddressModel from "./AddressModel";

/**
 * Order object representing a customer's order.
 */
class OrderModel extends Model {

    id: string;

    placedBy: string;

    createdOn: string;

    updatedAt: string;

    products: string[];

    totalItems: number;

    netPrice: PriceModel = new PriceModel();

    totalTax: PriceModel = new PriceModel();

    appliedCoupons: string[];

    grossPrice: PriceModel = new PriceModel();

    totalWeight: MeasurementModel = new MeasurementModel();

    fulfillment: string | undefined;

    paymentStatus: string | undefined;

    cancelledAt: string | undefined;

    refunds: string[];

    shipments: Map<string, string> = new Map();

    billingAddress: AddressModel = new AddressModel();

    shippingAddress: AddressModel = new AddressModel();
}

export default OrderModel;
