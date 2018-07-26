import Model from "../models";

class OrderUnitStatusModel extends Model {

    fulfilledQuantity: number;

    pickupQuantity: number;

    refundableQuantity: number;

    fulfillment: string;
}

export default OrderUnitStatusModel;
