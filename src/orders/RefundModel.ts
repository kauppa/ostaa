import { Model} from "../models";
import OrderUnitModel from "./OrderUnitModel";

/**
 * Refund object representing order refunds.
 */
class RefundModel extends Model {

    id: string;

    createdOn: string;

    updatedAt: string;

    orderId: string;

    reason: string;

    items: OrderUnitModel<string>[];
}

export default RefundModel;
