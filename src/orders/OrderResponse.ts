import Model, { MeasurementModel } from "../models";
import { AddressModel, CustomerResponse } from "../customers";
import OrderUnitModel from "./OrderUnitModel";
import CouponResponse from "../coupons/CouponResponse";
import { ProductResponse } from "../products";
import RefundModel from "./RefundModel";
import ShipmentModel from "../shipments/ShipmentModel";

/**
 * Order response object returned by the service.
 */
class OrderResponse extends Model {

    id: string;

    placedBy: CustomerResponse;

    createdOn: string;

    items: OrderUnitModel<ProductResponse>[];

    appliedCoupons: CouponResponse[];

    couponDeductions: number[];

    paymentStatus: string | undefined;

    cancelledAt: string | undefined;

    refunds: RefundModel[];

    fulfillment: string | undefined;

    billingAddress: AddressModel;

    shippingAddress: AddressModel;

    shipments: ShipmentModel[];

    totalItems: number;

    netPrice: number;

    totalTax: number;

    grossPrice: number;

    currency: string;

    totalWeight: MeasurementModel;
}

export default OrderResponse;
