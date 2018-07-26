import Model from "../models";
import { CartUnitModel } from "../cart";

/**
 * Pickup request object for initiating a pickup in the service.
 */
class PickupRequest extends Model {

    pickupAll: boolean | undefined;

    items: CartUnitModel<string>[] = [];
}

export default PickupRequest;
