import Model from "../models";
import AddressModel from "./AddressModel";

/**
 * Customer response object returned by the service.
 */
class CustomerResponse extends Model {

    id: string;

    createdOn: string;

    updatedAt: string;

    firstName: string;

    lastName: string | undefined;

    primaryEmail: string;

    emails: string[];

    primaryPhone: string | undefined;

    phoneNumbers: string[];

    addresses: AddressModel[];
}

export default CustomerResponse;
