import Model from "../models";

class CouponResponse extends Model {

    id: string;

    code: string;

    currency: string;

    balance: number;

    expiresOn: string | undefined;

    note: string | undefined;

    disabledOn: string | undefined;
}

export default CouponResponse;
