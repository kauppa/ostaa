import Model from "../models";

/**
 * Tax data for a single order/cart unit.
 */
class UnitTaxModel extends Model {

    category: string | undefined;

    rate: number;

    total: number;
}

export default UnitTaxModel;
