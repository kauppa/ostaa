import Model, { MeasurementModel } from "../models";
import AddressModel from "./AddressModel";
import OrderUnitModel from "./OrderUnitModel";

/**
 * Order object representing a customer's order.
 */
class OrderModel extends Model {

    id: string;

    placedBy: string;

    createdOn: string;

    updatedAt: string;

    products: OrderUnitModel[] = [];

    totalItems: number;

    currency: string;

    netPrice: number;

    totalTax: number;

    appliedCoupons: string[];

    grossPrice: number;

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
