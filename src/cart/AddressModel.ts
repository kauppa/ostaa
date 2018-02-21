import Model from "../models";

/**
 * Address object for representing addresses in customer accounts.
 */
class AddressModel extends Model {

    firstName: string;

    lastName: string | undefined;

    line1: string;

    line2: string | undefined;

    province: string;

    city: string;

    country: string;

    code: string;

    label: string | undefined;
}

export default AddressModel;
