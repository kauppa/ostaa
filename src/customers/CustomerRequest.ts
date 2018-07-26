import Model from "../models";
import AddressModel from "./AddressModel";

/**
 * Customer request object for creating/updating a customer.
 */
class CustomerRequest extends Model {

    firstName: string;

    lastName: string | undefined;

    primaryEmail: string | undefined;

    emails: string[];

    primaryPhone: string | undefined;

    phoneNumbers: string[] | undefined;

    addresses: AddressModel[] | undefined = [];
}

export default CustomerRequest;
