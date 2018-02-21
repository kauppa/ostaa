import Model, { PriceModel } from "../models";

/**
 * Tax data for a single cart item.
 */
class UnitTaxModel extends Model {

    category: string | undefined;

    rate: number;

    total: PriceModel;
}

export default UnitTaxModel;
